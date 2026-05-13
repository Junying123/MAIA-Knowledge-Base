# Gap Analysis

## Why

Frontend does not expect `extracted_data` in the `get_certificate` response. Currently, the API returns both `extracted_data` (raw flat key-value from middleware) and `references` (structured data from `tabCertificate Reference`) as two separate arrays. Frontend only consumes `references`.

We need to align the backend response.

---

## Scope

This is not just a response cleanup.

The reason `extracted_data` exists in the response today is because grouped data from middleware extraction (items, customers, company info) is only stored in `tabCertificate Data` — it never makes it into `tabCertificate Reference`.

To remove `extracted_data` without losing data, we need to also store the grouped extraction data in `tabCertificate Reference`.

This has a cascading benefit:

SO validation and `get_tax_reference_listing` currently query **both** `tabCertificate Data` and `tabCertificate Reference` with fallback logic

- This is because the same data lives in different tables depending on how the certificate was created (manual vs extracted)
    

Once everything is in `tabCertificate Reference`, these queries simplify to single-table lookups.

---

## What Changes

|   |   |   |
|---|---|---|
|Area|Current|After|
|`get_certificate` response|Returns `extracted_data` + `references`|Returns `references` only|
|Extraction pipeline|Stores grouped data in `tabCertificate Data` only|Also parses and stores grouped data in `tabCertificate Reference`|
|`ref_type` / `reference_key` fields|Free-text (Data type), inconsistent naming|Standardized enum values (validated at Pydantic schema level, DB stays free-text)|
|SO validation (HS code matching)|Queries `tabCertificate Data` first, falls back to `tabCertificate Reference`|Queries `tabCertificate Reference` only|
|`get_tax_reference_listing`|2–3 LEFT JOINs across both tables with COALESCE fallback|1 LEFT JOIN on `tabCertificate Reference`|

---

## What Does NOT Change

- **`tabCertificate Data`** **—** Raw extraction audit trail stays, still populated by `process_extraction_callback`
    
- **`get_extracted_data`** **endpoint —** Stays for audit/debug use
    
- **`update_certificate`** **—** Already manages `tabCertificate Reference`
    
- **CPO service** — CPO links to Certificate via Dynamic Link (from CPO create/update `tax_reference` field) and has its own extraction pipeline separate from certificate extraction
    

---

## Standardized Enums for `ref_type` / `reference_key`

Backend provides standardized enum values for `ref_type` and `reference_key`.

This ensures:

- Manual certificate creation
    
- Middleware extraction
    

→ both produce the same values

So backend queries can use a single condition like:

```SQL
WHERE reference_key = 'tariff_code'
```

  

---

# **Implementation Details: Certificate Reference Refactor**

---

## **Certificate Lifecycle — Full Flow Per Cert Type**

### **A57: Create/Upload → Get Details → Apply to SO → Validate**

  

**1. Upload Certificate (extraction)**

  

Input: `file`, `certificate_type="A57"`, `company`

- `certificate_type` determines parsing rules — A57 extracts `goods[n].*` from the PDF
    
- `company` for multitenant data isolation
    
- Certificate ownership: `reference_doctype = "Company"` (A57 is company-owned)
    

```Plain
upload_certificate(file, certificate_type="A57", company="...")
  → validate upload input (company/customer/cert_type exist in DB if provided)
  → store file in S3
  → create Certificate doc with initial values from upload input:
      - company = upload input company
      - certificate_type = upload input certificate_type_id (if provided)
      - reference_doctype/reference_name based on cert type:
          C1 + customer_id → reference_doctype="Customer", reference_name=customer_id
          C3/A57 + company → reference_doctype="Company", reference_name=company
          company only (no cert type) → defaults to reference_doctype="Company"
      - if none provided → fields are null (extraction will fill them)
  → send to middleware for extraction
  → middleware calls process_extraction_callback()
    → Step 1: flatten_extracted_data() → store in tabCertificate Data via create_certificate_data()
    → Step 2: compare upload input vs extracted data — log warnings if mismatch (does NOT reject)
        e.g., user uploaded with company="Faber-Castell" but PDF says "DAICHONG ENGRAVING"
        → warning stored in Background Job Log Detail, extraction continues
    → Step 3: extract mapped values from data (issue_date, tax_registration_no, etc.)
    → Step 4: build header field updates + calculate valid_till from validity_period_months
    → Step 5: resolve certificate_type and owner (reference_doctype/reference_name)
        → uses EXTRACTED values, not upload input
        → extracted approved_company_name is looked up in tabCompany/tabCustomer
        → if found: sets reference_doctype + reference_name
        → if not found: warning logged, keeps initial upload input values
    → Step 6: _parse_extracted_data_to_references() → build Certificate Reference rows:
        - ref_type="company" → address, contact_name, contact_ic, contact_designation
        - ref_type="items" → tariff_code, commercial_description, customs_classification, approved_quantity, approved_value
    → Step 7: call update_certificate() with header fields + references + status="Active"
        → OVERRIDES initial upload input values with extracted values
```

  

**Mismatch warnings in `get_certificate` response**** (read from Background Job Log Detail):

|   |   |   |
|---|---|---|
|Warning type|Where it appears|Example|
|Company mismatch (A57/C3)|`reference_warning` at certificate level|`"Expected 'Faber-Castell', extracted 'DAICHONG ENGRAVING'"`|
|Customer mismatch (C1)|`reference_warning` at certificate level|`"Expected 'ABC Trading', extracted 'XYZ Corp'"`|
|Customer mismatch (C3)|`warning` on `eligible_customer` + `customer_name` reference row|`"Expected 'ABC Trading', extracted 'TOLING CORP'"`|
|Cert type mismatch|`certificate_type_warning` at certificate level|`"Expected 'A57', extracted 'C3'"`|
|Owner not found|`reference_warning` at certificate level (computed at read time)|`"Company not found for 'DAICHONG ENGRAVING'"`|

**2. Create Certificate (manual)**

```Plain
create_certificate(certificate_type="A57", company="...", references=[...])
  → insert Certificate doc via core_doctype_service.insert_data_by_doctype()
  → if valid_till not provided: auto-calculate as issue_date + 6 months (A57 only)
  → upload attachments to S3 (if provided)
  → ref_service.manage_certificate_references(certificate_id, references)
  → no tabCertificate Data (no extraction)
```

**3. Get Certificate Details**

```Plain
get_certificate(certificate_id)
  → read tabCertificate (header fields)
  → read tabCertificate Reference (all rows for this parent)
  → compute reference_warning:
      1. check owner resolution (company/customer not found in system)
      2. if no resolution warning, check Background Job Log Detail for mismatch warning
  → compute certificate_type_warning from Background Job Log Detail
  → attach customer mismatch warning to eligible_customer + customer_name reference row (C3 only)
  → return unified response with references array
  → [REMOVED] no more extracted_data in response
```

**4. Get Tax Reference Listing**

```Plain
get_tax_reference_listing(customer_id=None, filters, search, sort, pagination)
  → if customer_id provided:
      WHERE cert_type = 'A57'  -- for now, no customer eligibility check (company-wide)
      -- no LEFT JOIN on eligible_customer needed, return all A57 certs for the company
  → if no customer_id:
      return all A57 certificates matching filters
```

**5. Update Certificate**

```Plain
update_certificate(certificate_id, references=[...])
  → update header fields on tabCertificate via core_doctype_service.update_data_by_doctype()
  → handle attachments (upload/delete from S3)
  → call ref_service.manage_certificate_references(certificate_id, references)
      → if certificate_reference_id provided → update existing row
      → if certificate_reference_id absent → create new row
      → if existing row not in payload → delete
```

**6. Apply to Sales Order → Validate (on submit)**

```Plain
validate_a57_sales_order(certificate_id, company_id, items, tax_on_total_id, attachments)
  All checks below run on SO submit:
  → check certificate status = "Active"
  → check reference_doctype = "Company" AND reference_name = company_id
  → check tax_on_total resolves to 0% rate
  → get certificate HS codes: SELECT reference_value FROM tabCertificate Reference
                               WHERE parent = cert_id AND reference_key = 'tariff_code'
  → for ALL items on SO:
      1. check item exists in tabItem
      2. check item has hs_code assigned (error if empty)
      3. check item's hs_code is in certificate's HS codes (error if not covered)
  → for items with has_batch_no=1: check batch_no provided
  → check tax_reference_certificate attachment exists
```

**7. Delete Certificate**

```Plain
delete_certificate(certificate_id)
  → core_doctype_service.delete_data_with_links()
    → deletes Certificate doc + child tables (tabCertificate Reference, tabCertificate Data) + linked docs
```

**8. Cancel / Amend**

```Plain
Not applicable — Certificate is NOT a submittable doctype.

Status lifecycle:
  - Upload extraction: "Extracting" → "Active" (after callback completes)
  - Manual create: user sets status (typically "Active")
  - Auto-expiry: daily scheduler sets "Expired" when current_date > valid_till
  - Manual update: user can set "Inactive" via update_certificate
```

  

---

### **C1: Create/Upload → Get Details → Apply to SO → Validate**

  

**1. Upload Certificate (extraction)**

Input: `file`, `certificate_type="C1"`, `company`, `customer`

- `certificate_type` determines parsing rules — C1 extracts `items.raw_materials[n].*`, `items.components[n].*`, etc.
    
- `company` for multitenant data isolation
    
- `customer` — C1 is customer-owned. Frontend uploads from the customer page, so customer_id is the page context.
    
- Certificate ownership: `reference_doctype = "Customer"` (C1 is owned by the customer)
    

```Plain
upload_certificate(file, certificate_type="C1", company="...", customer="...")
  → same extraction flow as A57 (Steps 1-7)
  → Step 6 parses into these ref_types:
      - ref_type="company" → address, contact_name, contact_ic, contact_designation
      - ref_type="raw_materials" → tariff_code, commercial_description, customs_classification, effective_date
      - ref_type="components" → same fields
      - ref_type="manufacturing_aids" → same fields
      - ref_type="packaging_materials" → same fields
      - ref_type="cleanroom_equipment" → same fields
  → Step 5 resolves owner: reference_doctype = "Customer", reference_name = customer_id
```

**2. Create Certificate (manual)**

```Plain
Same as A57 manual flow — user provides references using enum dropdowns
```

**3. Get Certificate Details**

```Plain
Same as A57 — returns references array from tabCertificate Reference
```

**4. Get Tax Reference Listing**

```Plain
get_tax_reference_listing(customer_id="CUST-001")
  → WHERE cert_type = 'C1'
    AND reference_doctype = 'Customer'
    AND reference_name = customer_id
  → no LEFT JOIN needed — eligibility is on header
```

**5. Update Certificate**

```Plain
Same as A57
```

**6. Apply to Sales Order → Validate (on submit)**

```Plain
validate_c1_sales_order(certificate_id, customer_id, items, attachments)
  All checks below run on SO submit:
  → check certificate status = "Active"
  → check reference_doctype = "Customer" AND reference_name = customer_id
  → get certificate HS codes: SELECT reference_value FROM tabCertificate Reference
                               WHERE parent = cert_id AND reference_key = 'tariff_code'
  → for ONLY 0% tax items on SO:
      1. check item exists in tabItem
      2. check item has hs_code assigned (error if empty)
      3. check item's hs_code is in certificate's HS codes (error if not covered)
      4. check item's hs_code effective_date is on or before today (C1/C3 only)
  → check tax_reference_certificate attachment exists
```

**7. Delete / Cancel / Amend**

```Plain
Same as A57
```

  

---

### **C3: Create/Upload → Get Details → Apply to SO → Validate**

**1. Upload Certificate (extraction)**

Input: `file`, `certificate_type="C3"`, `company`

- `certificate_type` determines parsing rules — C3 extracts `import_or_transport_items.*` and `local_purchase_items.*`
    
- `company` for multitenant data isolation
    
- No `customer` in upload input — eligible customer(s) are extracted from the certificate PDF and stored as `ref_type = "eligible_customer"`. Frontend views from customer page via `get_tax_reference_listing(customer_id=...)`.
    
- Certificate ownership: `reference_doctype = "Company"` (C3 is company-owned)
    

```Plain
upload_certificate(file, certificate_type="C3", company="...")
  → same extraction flow as A57 (Steps 1-7)
  → Step 6 parses into these ref_types:
      - ref_type="company" → address, contact_name, contact_ic, contact_designation
      - ref_type="eligible_customer" → customer_name, address
      - ref_type="import_or_transport_items.raw_materials" → tariff_code, commercial_description, customs_classification, effective_date
      - ref_type="import_or_transport_items.components" → same fields
      - ref_type="import_or_transport_items.manufacturing_aids" → same fields
      - ref_type="import_or_transport_items.packaging_materials" → same fields
      - ref_type="import_or_transport_items.cleanroom_equipment" → same fields
      - ref_type="local_purchase_items.raw_materials" → same fields
      - ref_type="local_purchase_items.components" → same fields
      - ref_type="local_purchase_items.manufacturing_aids" → same fields
      - ref_type="local_purchase_items.packaging_materials" → same fields
      - ref_type="local_purchase_items.cleanroom_equipment" → same fields
  → Step 5 resolves owner: reference_doctype = "Company", reference_name = company_name
```

**2. Create Certificate (manual)**

```Plain
Same — user provides references using enum dropdowns.
Must include eligible_customer ref_type with customer_name.
```

**3. Get Certificate Details**

```Plain
Same as A57 — returns references array from tabCertificate Reference
```

**4. Get Tax Reference Listing**

```Plain
get_tax_reference_listing(customer_id="CUST-001")
  → LEFT JOIN tabCertificate Reference cr
      ON cr.parent = c.name
      AND cr.ref_type = 'eligible_customer'
      AND cr.reference_key = 'customer_name'
      AND LOWER(cr.reference_value) = LOWER(customer_name)
  → WHERE cert_type = 'C3' AND cr.name IS NOT NULL
```

**5. Update Certificate**

```Plain
Same as A57 — manage references via certificate_reference_id
```

**6. Apply to Sales Order → Validate (on submit)**

```Plain
validate_c3_sales_order(certificate_id, company_id, customer_id, items, tax_on_total_id, attachments)
  All checks below run on SO submit:
  → check certificate status = "Active"
  → check reference_doctype = "Company" AND reference_name = company_id
  → check customer eligibility:
      SELECT name FROM tabCertificate Reference
      WHERE parent = cert_id
        AND ref_type = 'eligible_customer'
        AND reference_key = 'customer_name'
        AND LOWER(reference_value) = LOWER(customer_name)
  → check tax_on_total resolves to 0% rate
  → get certificate HS codes: SELECT reference_value FROM tabCertificate Reference
                               WHERE parent = cert_id AND reference_key = 'tariff_code'
  → for ALL items on SO:
      1. check item exists in tabItem
      2. check item has hs_code assigned (error if empty)
      3. check item's hs_code is in certificate's HS codes (error if not covered)
      4. check item's hs_code effective_date is on or before today (C1/C3 only)
  → for items with has_batch_no=1: check batch_no provided
  → check tax_reference_certificate, po_attachments, appointment_letter exist
```

**7. Delete / Cancel / Amend**

```Plain
Same as A57
```

---

## **CPO with Certificate — How They Link**

Certificate can be linked to a CPO (Customer Purchase Order) via Dynamic Link.

### **1. From CPO Create/Update**

```Plain
create_cpo(payload)
  → payload includes tax_reference (certificate_id)
  → if tax_reference provided:
      → validate certificate exists
      → create Dynamic Link: Customer Purchase Order → Certificate

update_cpo(payload)
  → if tax_reference provided:
      → validate certificate exists
      → upsert Dynamic Link: Customer Purchase Order → Certificate
  → if tax_reference is empty string:
      → delete Dynamic Link (remove certificate from CPO)
```

### **2. CPO → SO Conversion**

When creating a Sales Order from a CPO, the certificate link carries over:

```Plain
build_so_payload_from_cpo(cpo_doc)
  → get linked certificate from Dynamic Link: get_dynamic_link("Customer Purchase Order", cpo_id, "Certificate")
  → include tax_reference in SO payload
  → SO creation then links: Sales Order → Certificate (same certificate)
```

  

---

## **Sales Order with Tax Reference — Full Flow**

### **1. Create Sales Order**

```Plain
create_sales_order(payload)
  → payload includes tax_reference (certificate_id) at order level
  → if tax_reference provided:
      → validate certificate exists
      → validate certificate has valid certificate_type
  → insert Sales Order doc
  → create Dynamic Link: Sales Order → Certificate (order-level)
  → if items have tax_reference:
      → create Dynamic Link: Sales Order Item → Certificate (per item)
      → this uses the order-level tax_reference for all items
  → link attachments (tax_reference_certificate, po_attachments, appointment_letter, etc.)
  → return SO with stock availability warnings
  → note: no tax exemption validation on create — validation only runs on submit
```

### **2. Update Sales Order**

```Plain
update_sales_order(payload)
  → same validation as create (certificate exists, valid type)
  → update SO doc fields
  → re-link Dynamic Links for certificate if tax_reference changed
  → re-link attachments
```

### **3. Submit Sales Order**

```Plain
submit_sales_order(sales_order_id)
  → fetch SO doc
  → get certificate from Dynamic Link: get_tax_reference_details(doc)
      → returns { certificate_id, certificate_type } from linked Certificate
      → if no certificate linked → skip all tax exemption validation, submit as normal taxable order
  → fetch attachments (tax_reference_certificate, po_attachments, appointment_letter)
  → route to validation based on certificate_type:

  C1: validate_c1_sales_order()
      → check certificate status = "Active"
      → check certificate owner = SO customer (reference_doctype="Customer", reference_name=customer_id)
      → get HS codes from tabCertificate Reference (reference_key='tariff_code')
      → for ONLY 0% tax items:
          1. check item exists in tabItem
          2. check item has hs_code assigned
          3. check item's hs_code is covered by certificate
          4. check item's hs_code effective_date is on or before today
      → check tax_reference_certificate attachment exists

  C3: validate_c3_sales_order()
      → check certificate status = "Active"
      → check certificate owner = SO company (reference_doctype="Company", reference_name=company_id)
      → check customer eligibility via tabCertificate Reference
          (ref_type='eligible_customer', reference_key='customer_name', LOWER match)
      → check tax_on_total resolves to 0% rate
      → get HS codes from tabCertificate Reference (reference_key='tariff_code')
      → for ALL items:
          1. check item exists in tabItem
          2. check item has hs_code assigned
          3. check item's hs_code is covered by certificate
          4. check item's hs_code effective_date is on or before today
      → for items with has_batch_no=1: check batch_no provided
      → check tax_reference_certificate, po_attachments, appointment_letter exist

  A57: validate_a57_sales_order()
      → check certificate status = "Active"
      → check certificate owner = SO company (reference_doctype="Company", reference_name=company_id)
      → check tax_on_total resolves to 0% rate
      → get HS codes from tabCertificate Reference (reference_key='tariff_code')
      → for ALL items:
          1. check item exists in tabItem
          2. check item has hs_code assigned
          3. check item's hs_code is covered by certificate
      → for items with has_batch_no=1: check batch_no provided
      → check tax_reference_certificate attachment exists

  → if validation passes: doc.submit()
  → return response with tax_exemption_warnings (if any items not fully covered)
```

### **4. Cancel Sales Order**

```Plain
cancel_sales_order(sales_order_id)
  → no certificate-specific validation on cancel
  → doc.cancel() (sets docstatus = 2)
  → Dynamic Links remain (for audit trail)
```

### **5. Amend Sales Order**

```Plain
amend_sales_order — tax reference restrictions (per item):
  → for items WITH tax_reference (certificate linked):
      → cannot change: unit_price, tax_on_items_id
      → allowed: qty changes
      → if new items added with tax_reference: re-validate against certificate
          (HS code coverage, effective_date)
  → for items WITHOUT tax_reference:
      → follows existing amendment logic (no restriction)
```

  

---

  

## **Standardized Enums**

### **ref_type**

```Python
class CertificateRefType(str, Enum):
    # A57
    ITEMS = "items"
    VEHICLES = "vehicles"
    # C1
    RAW_MATERIALS = "raw_materials"
    COMPONENTS = "components"
    MANUFACTURING_AIDS = "manufacturing_aids"
    PACKAGING_MATERIALS = "packaging_materials"
    CLEANROOM_EQUIPMENT = "cleanroom_equipment"
    # C3 — import
    IMPORT_RAW_MATERIALS = "import_or_transport_items.raw_materials"
    IMPORT_COMPONENTS = "import_or_transport_items.components"
    IMPORT_MANUFACTURING_AIDS = "import_or_transport_items.manufacturing_aids"
    IMPORT_PACKAGING_MATERIALS = "import_or_transport_items.packaging_materials"
    IMPORT_CLEANROOM_EQUIPMENT = "import_or_transport_items.cleanroom_equipment"
    # C3 — local purchase
    LOCAL_PURCHASE_RAW_MATERIALS = "local_purchase_items.raw_materials"
    LOCAL_PURCHASE_COMPONENTS = "local_purchase_items.components"
    LOCAL_PURCHASE_MANUFACTURING_AIDS = "local_purchase_items.manufacturing_aids"
    LOCAL_PURCHASE_PACKAGING_MATERIALS = "local_purchase_items.packaging_materials"
    LOCAL_PURCHASE_CLEANROOM_EQUIPMENT = "local_purchase_items.cleanroom_equipment"
    # Shared
    ELIGIBLE_CUSTOMER = "eligible_customer"
    COMPANY = "company"
```

### **reference_key**

```Python
class CertificateRefKey(str, Enum):
    # Item fields
    TARIFF_CODE = "tariff_code"
    COMMERCIAL_DESCRIPTION = "commercial_description"
    CUSTOMS_CLASSIFICATION = "customs_classification"
    APPROVED_QUANTITY = "approved_quantity"
    APPROVED_VALUE = "approved_value"
    EFFECTIVE_DATE = "effective_date"
    # Shared fields (company & customer)
    ADDRESS = "address"
    CUSTOMER_NAME = "customer_name"
    CONTACT_NAME = "contact_name"
    CONTACT_IC = "contact_ic"
    CONTACT_DESIGNATION = "contact_designation"
```

  

---

## **Extraction Key Mapping**

|   |   |   |
|---|---|---|
|Middleware flat key|ref_type|reference_key|
|goods[n].*|items|field name|
|items.raw_materials[n].*|raw_materials|field name|
|items.components[n].*|components|field name|
|import_or_transport_items.*|import|field name|
|local_purchase_items.*|local|field name|
|approved_company_address|company|address|
|authorised_person_name|company|contact_name|
|authorised_person_ic|company|contact_ic|
|authorised_person_designation|company|contact_designation|
|customer_name|eligible_customer|customer_name|
|customer_address|eligible_customer|address|

- Middleware `line_number` → maps to `ref_index`
    
- Middleware `hs_code` → maps to `tariff_code`
    
- Middleware `goods` → maps to `items`
    

### **Skipped keys (already in parent tabCertificate)**

`issue_date`, `sales_tax_registration_number`, `approved_company_name`, `certificate_number`, `certificate_title`, `issuer`, `_tax_exemption_metadata.*`, `smk_registration_number`, `tax_rate`, `export_required_within_months`, `validity_period_months`, `updated_date`

  

---

## **Response Example — A57 (with company mismatch)**

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00002",
    "reference_doctype": "Company",
    "reference_name": "DAICHONG ENGRAVING SDN BHD",
    "reference_label": "DAICHONG ENGRAVING SDN BHD",
    "reference_warning": "Expected 'Faber-Castell (M) Sdn. Bhd.', extracted 'DAICHONG ENGRAVING SDN BHD'",
    "company": "DAICHONG ENGRAVING SDN BHD",
    "certificate_type_id": "CTY-2026-00003",
    "certificate_type": "A57",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-07-01",
    "valid_till": "2026-01-01",
    "tax_registration_no": "A10-2506-22000021",
    "issuer": null,
    "status": "Active",
    "references": [
      {
        "certificate_reference_id": "ref-001",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "15-17-19 PERSIARAN JELAPANG MAJU 8, TAMAN PERINDUSTRIAN RINGAN JELAPANG MAJU, 30020 IPOH, PERAK",
        "warning": null
      },
      {
        "certificate_reference_id": "ref-002",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "2806100000",
        "warning": null
      },
      {
        "certificate_reference_id": "ref-003",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "HUDROCHLORIC ACID (HCL)",
        "warning": null
      }
    ]
  }
}
```

  

## **Response Example — C1 (with customer mismatch + cert type mismatch)**

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00003",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_label": "DAICHONG ENGRAVING SDN BHD",
    "reference_warning": "Expected 'ABC Trading Sdn Bhd', extracted 'DAICHONG ENGRAVING SDN BHD'",
    "company": "DAICHONG ENGRAVING SDN BHD",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": "Expected 'A57', extracted 'C1'",
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-07-01",
    "valid_till": null,
    "tax_registration_no": "A10-2506-22000021",
    "issuer": null,
    "status": "Active",
    "references": [
      {
        "certificate_reference_id": "ref-101",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "2806100000",
        "warning": null
      },
      {
        "certificate_reference_id": "ref-102",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "HUDROCHLORIC ACID (HCL)",
        "warning": null
      }
    ]
  }
}
```

  

## **Response Example — C3 (with company + customer + cert type mismatch)**

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00020",
    "reference_doctype": "Company",
    "reference_name": "MAYPLAS PACKAGING SDN BHD",
    "reference_label": "MAYPLAS PACKAGING SDN BHD",
    "reference_warning": "Expected 'Faber-Castell (M) Sdn. Bhd.', extracted 'MAYPLAS PACKAGING SDN BHD'",
    "company": "MAYPLAS PACKAGING SDN BHD",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": "Expected 'A57', extracted 'C3'",
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "issuer": null,
    "status": "Active",
    "references": [
      {
        "certificate_reference_id": "ref-201",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "NO 3, JALAN SEJAHTERA 25/124 TAMAN PERINDUSTRIAN AXIS, SEKSYEN 25\nSHAH ALAM 40400 SHAH ALAM SELANGOR",
        "warning": null
      },
      {
        "certificate_reference_id": "ref-202",
        "ref_type": "eligible_customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD",
        "warning": "Expected 'ABC Trading Sdn Bhd', extracted 'TOLING CORPORATION (M) SDN BHD'"
      },
      {
        "certificate_reference_id": "ref-203",
        "ref_type": "eligible_customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG",
        "warning": null
      },
      {
        "certificate_reference_id": "ref-204",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000",
        "warning": null
      }
    ]
  }
}
```

  

Full database storage examples in [database_storage.md](database_storage.md).

  

---

  

## **TODO**

- Remove `extracted_data` from `get_certificate` response (schema + service)
    
- C3 customer eligibility in SO validation — update to query tabCertificate Reference only
    
- `get_tax_reference_listing` — simplify eligibility JOINs to single LEFT JOIN on tabCertificate Reference
    
- Bruno config — update expected response for `S7_Get_Cert_Details.bru`
    
- Amend SO — restrict changes when tax_reference linked (block rate/tax changes, re-validate if items added/removed)
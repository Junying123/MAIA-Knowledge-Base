# **Case Scenarios: C3 Certificate**

  

End-to-end API usage scenarios for C3 certificates.

  

**Context:**

- Company: Faber-Castell (M) Sdn. Bhd.
    
- Customer: TOLING CORPORATION (M) SDN BHD (CUST-004791)
    
- Certificate type: C3 (company-owned, with eligible customers)
    
- Items on SO: POLYPROPYLENE COPOLYMER (HS code: 3902309000)
    

---

  

## **Scenario 1: Happy Path — Upload, Submit, Link to SO**

  

Everything works cleanly. No mismatches, no corrections needed.

  

### **1.1 Upload Certificate**

  

**Request:**

  

```JSON
{
  "certificate_type_id": "CTY-2026-00002",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "customer_id": "CUST-004791",
  "file_url": null,
  "file_bytes_str": null,
  "file_s3_file_key": "uploads/c3_certificate.pdf"
}
```

  

**What happens:**

  

1. Validate company, customer, certificate_type exist
    
2. Create Certificate doc (Draft, docstatus=0)
    
3. Create Dynamic Link: Certificate -> Customer (CUST-004791)
    
4. Upload file to S3
    
5. Create Background Job Log (status="Extracting")
    
6. Send extraction request to middleware
    
7. Return immediately
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate uploaded successfully",
  "data": {
    "certificate_id": "CERT-2026-00050",
    "job_id": "BJL-2026-00100",
    "job_status": "Extracting",
    "processing_stage": "Extracting",
    "job_type": "extraction",
    "certificate_attachment": "c3_certificate.pdf"
  }
}
```

  

### **1.2 Poll Job Status (Frontend Polling)**

  

Frontend polls the job status until extraction completes.

  

**Request:**

  

```JSON
{
  "job_id": "BJL-2026-00100"
}
```

  

**Response (while extracting):**

  

```JSON
{
  "status": "success",
  "message": "Job is still processing",
  "data": {
    "job_id": "BJL-2026-00100",
    "job_status": "Extracting",
    "certificate_id": "CERT-2026-00050"
  }
}
```

  

**Response (extraction complete):**

  

```JSON
{
  "status": "success",
  "message": "Job completed successfully",
  "data": {
    "job_id": "BJL-2026-00100",
    "job_status": "Success",
    "certificate_id": "CERT-2026-00050"
  }
}
```

  

Frontend stops polling when `job_status` = "Success" or "Failed", then calls `get_certificate` to fetch the full data.

  

---

  

### **1.3 Middleware Extraction Callback (automatic)**

  

Middleware extracts data from the PDF and calls back. Extraction matches the upload input — no mismatches.

  

**What happens:**

  

1. Flatten extracted data and split:
    

**Header keys -> tabCertificate:**

```Plain
certificate_title: SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018
issue_date: 2025-11-04
sales_tax_registration_number: B16-1808-21003508
smk_registration_number: B16202500034979
approved_company_name: Faber-Castell (M) Sdn. Bhd.
```

  

**Reference keys -> tabCertificate Data:**

```Plain
key: approved_company_address           | value: LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56...
key: authorised_person_name             | value: JOHN DOE
key: authorised_person_ic               | value: 800101145678
key: authorised_person_designation      | value: DIRECTOR
key: customer_name                      | value: TOLING CORPORATION (M) SDN BHD
key: customer_address                   | value: WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG
key: local_purchase_items.raw_materials[0].tariff_code           | value: 3902309000
key: local_purchase_items.raw_materials[0].commercial_description | value: POLYPROPYLENE COPOLYMER
key: local_purchase_items.raw_materials[0].customs_classification | value: - - Other
key: local_purchase_items.raw_materials[0].effective_date         | value: 2025-11-03
key: local_purchase_items.raw_materials[0].line_number            | value: 1.0
key: local_purchase_items.raw_materials[0].item_tax_rate          | value: 0
```

  

2. No mismatch — upload company matches extracted company
    
3. Resolve owner: `approved_company_name` = "Faber-Castell (M) Sdn. Bhd." found in tabCompany
    
4. Update tabCertificate header with extracted values + status="Active"
    

### **1.4 Get Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00050"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00050",
    "reference_doctype": "Company",
    "reference_name": "Faber-Castell (M) Sdn. Bhd.",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-001",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56..."
      },
      {
        "id": "cd-002",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "JOHN DOE"
      },
      {
        "id": "cd-003",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "800101145678"
      },
      {
        "id": "cd-004",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-005",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD"
      },
      {
        "id": "cd-006",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-007",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-008",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-009",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-010",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

### **1.5 Submit Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00050"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate submitted successfully",
  "data": {
    "certificate_id": "CERT-2026-00050",
    "reference_doctype": "Company",
    "reference_name": "Faber-Castell (M) Sdn. Bhd.",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 1,
    "references": [
      {
        "id": "cd-001",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56..."
      },
      {
        "id": "cd-002",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "JOHN DOE"
      },
      {
        "id": "cd-003",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "800101145678"
      },
      {
        "id": "cd-004",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-005",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD"
      },
      {
        "id": "cd-006",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-007",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-008",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-009",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-010",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

### **1.6 Create Sales Order with Tax Reference**

  

**Request:**

  

```JSON
{
  "customer_id": "CUST-004791",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "tax_reference": "CERT-2026-00050",
  "tax_on_total_id": "TAX-001",
  "items": [
    {
      "item_code": "ITEM-PP-001",
      "item_name": "POLYPROPYLENE COPOLYMER",
      "qty": 100,
      "unit_price": 50.00,
      "tax_on_items_id": "TAX-002",
      "tax_reference": "CERT-2026-00050",
      "batch_no": null
    }
  ],
  "attachments": {
    "tax_reference_certificate": {
      "id": "file-001",
      "file_url": null,
      "file_bytes_str": null,
      "file_s3_file_key": null
    },
    "po_attachments": {
      "id": null,
      "file_url": null,
      "file_bytes_str": null,
      "file_s3_file_key": "uploads/po_document.pdf"
    },
    "appointment_letter": {
      "id": "file-003",
      "file_url": null,
      "file_bytes_str": null,
      "file_s3_file_key": null
    }
  }
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully created sales order",
  "data": {
    "id": "SO-2026-00100",
    "status": null,
    "config": {
      "fulfillment_method": "Standard Shipping",
      "currency_id": "MYR",
      "currency_name": "Malaysian Ringgit"
    },
    "biller": {
      "id": "Faber-Castell (M) Sdn. Bhd.",
      "name": "Faber-Castell (M) Sdn. Bhd."
    },
    "customer": {
      "id": "CUST-004791",
      "name": "TOLING CORPORATION (M) SDN BHD"
    },
    "tax_on_total_id": "TAX-001",
    "tax_on_total_name": "Sales Tax 0%",
    "tax_on_total_rate": 0,
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00050",
      "certificate_type_id": "CTY-2026-00002",
      "certificate_type": "C3",
      "certificate_status": "Active",
      "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
      "tax_registration_no": "B16-1808-21003508"
    },
    "tax_reference_certificate": {
      "id": "file-001",
      "file_name": "tax_ref_cert.pdf",
      "file_url": "https://s3.ap-southeast-1.amazonaws.com/bucket/tax_ref_cert.pdf",
      "mime_type": "application/pdf",
      "attached_to_field": "tax_reference_certificate",
      "index": 0
    },
    "appointment_letter": {
      "id": "file-003",
      "file_name": "appointment_letter.pdf",
      "file_url": "https://s3.ap-southeast-1.amazonaws.com/bucket/appointment_letter.pdf",
      "mime_type": "application/pdf",
      "attached_to_field": "appointment_letter",
      "index": 0
    },
    "items": [
      {
        "id": "SOI-0001",
        "item_id": "ITEM-PP-001",
        "sku": "ITEM-PP-001",
        "name": "POLYPROPYLENE COPOLYMER",
        "quantity": 100,
        "unit_price": 50.00,
        "amount": 5000.00,
        "tax_on_items_id": "TAX-002",
        "tax_on_items_name": "Sales Tax 0%",
        "tax_on_items_rate": 0,
        "tax_reference_details": {
          "certificate_id": "CERT-2026-00050",
          "certificate_type_id": "CTY-2026-00002",
          "certificate_type": "C3",
          "certificate_status": "Active",
          "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
          "tax_registration_no": "B16-1808-21003508"
        },
        "batch_no": null,
        "hs_code": "3902309000"
      }
    ],
    "grand_total": 5000.00
  }
}
```

  

### **1.7 Submit Sales Order**

  

**Request:**

  

```JSON
{
  "sales_order_id": "SO-2026-00100"
}
```

  

**Validation checks (all pass):**

  

1. Tax reference consistency: order-level and item-level `tax_reference` must be the same certificate -> PASS
    
2. Certificate docstatus = 1 AND status = "Active" -> PASS
    
3. Certificate owner (reference_doctype="Company", reference_name="Faber-Castell") = SO company -> PASS
    
4. Customer eligibility via Dynamic Link (Certificate -> CUST-004791) -> PASS
    
5. ORDER-LEVEL: tax_on_total = 0% AND tax_reference = "CERT-2026-00050" -> validate ALL items:
    
6. Item ITEM-PP-001 (order-level validation applies to all items):
    
    1. Item exists in tabItem -> PASS
        
    2. hs_code = 3902309000 (from tabItem) -> PASS (assigned)
        
    3. HS code coverage: `SELECT value FROM tabCertificate Data WHERE parent='CERT-2026-00050' AND key LIKE '%tariff_code'` returns 3902309000. 3902309000 IN list -> PASS
        
    4. Effective date: derive key `local_purchase_items.raw_materials[0].effective_date` -> 2025-11-03 <= today -> PASS
        
    5. Batch check: item has_batch_no = 0 -> skip
        
7. Attachments: tax_reference_certificate, po_attachments, appointment_letter present -> PASS
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Sales Order SO-2026-00100 submitted successfully",
  "data": {
    "sales_order_id": "SO-2026-00100",
    "message": "Sales Order SO-2026-00100 submitted successfully"
  }
}
```

  

---

  

## **Scenario 2: Update Certificate — Correct Extracted Data**

  

Extraction succeeds but user wants to correct some reference data before submitting.

  

### **2.1 After extraction, user reviews and updates**

  

Certificate CERT-2026-00050 was extracted (docstatus=0, Draft). User wants to correct the company address and add a second raw material item.

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00050",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "certificate_type_id": "CTY-2026-00002",
  "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
  "tax_registration_no": "B16-1808-21003508",
  "issue_date": "2025-11-04",
  "valid_till": null,
  "issuer": null,
  "status": "Active",
  "reference_doctype": "Company",
  "reference_name": "Faber-Castell (M) Sdn. Bhd.",
  "remarks": null,
  "references": [
    {
      "id": "cd-001",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56, SEKSYEN 32, 40460 SHAH ALAM, SELANGOR"
    },
    {
      "id": "cd-002",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_name",
      "reference_value": "JOHN DOE"
    },
    {
      "id": "cd-003",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_ic",
      "reference_value": "800101145678"
    },
    {
      "id": "cd-004",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_designation",
      "reference_value": "DIRECTOR"
    },
    {
      "id": "cd-005",
      "ref_type": "customer",
      "ref_index": 0,
      "reference_key": "customer_name",
      "reference_value": "TOLING CORPORATION (M) SDN BHD"
    },
    {
      "id": "cd-006",
      "ref_type": "customer",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
    },
    {
      "id": "cd-007",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "3902309000"
    },
    {
      "id": "cd-008",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "POLYPROPYLENE COPOLYMER"
    },
    {
      "id": "cd-009",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "- - Other"
    },
    {
      "id": "cd-010",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 1,
      "reference_key": "tariff_code",
      "reference_value": "3901100000"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 1,
      "reference_key": "commercial_description",
      "reference_value": "POLYETHYLENE GRANULES"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 1,
      "reference_key": "customs_classification",
      "reference_value": "Polyethylene having a specific gravity of less than 0.94"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 1,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    }
  ]
}
```

  

**What happens:**

  

1. Validate certificate_id exists -> pass
    
2. Validate docstatus = 0 (Draft) -> allowed
    
3. Validate `references` against C3 enum rules -> pass
    
4. Update tabCertificate header fields
    
5. Reconcile tabCertificate Data:
    
    1. `cd-001` (has `id`) -> update (address corrected)
        
    2. `cd-002` to `cd-010` (have `id`) -> update (unchanged)
        
    3. 4 new items without `id` (ref_index=1) -> create new rows
        
    4. No existing rows missing from payload -> nothing deleted
        

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate updated successfully",
  "data": {
    "certificate_id": "CERT-2026-00050",
    "reference_doctype": "Company",
    "reference_name": "Faber-Castell (M) Sdn. Bhd.",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-001",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56, SEKSYEN 32, 40460 SHAH ALAM, SELANGOR"
      },
      {
        "id": "cd-002",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "JOHN DOE"
      },
      {
        "id": "cd-003",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "800101145678"
      },
      {
        "id": "cd-004",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-005",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD"
      },
      {
        "id": "cd-006",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-007",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-008",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-009",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-010",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      },
      {
        "id": "cd-011",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 1,
        "reference_key": "tariff_code",
        "reference_value": "3901100000"
      },
      {
        "id": "cd-012",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 1,
        "reference_key": "commercial_description",
        "reference_value": "POLYETHYLENE GRANULES"
      },
      {
        "id": "cd-013",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 1,
        "reference_key": "customs_classification",
        "reference_value": "Polyethylene having a specific gravity of less than 0.94"
      },
      {
        "id": "cd-014",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 1,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

User must now call `submit_certificate` to move the certificate from Draft to Submitted before it can be used for SO submission validation (same as Scenario 1 step 1.5).

  

---

  

## **Scenario 3: Upload with Company Mismatch**

  

Extraction resolves to a different company than what the user uploaded with. User must correct before submitting.

  

### **3.1 Upload Certificate**

  

Same as Scenario 1 — user uploads with `company: "Faber-Castell (M) Sdn. Bhd."`.

  

### **3.2 Extraction Callback — Mismatch Detected**

  

Middleware extracts `approved_company_name: "MAYPLAS PACKAGING SDN BHD"` from the PDF, which doesn't match the upload input.

  

**What happens:**

  

1. Flatten and split data (same as Scenario 1)
    

2. **Mismatch detected**: upload company = "Faber-Castell (M) Sdn. Bhd.", extracted = "MAYPLAS PACKAGING SDN BHD"

3. Warning logged in Background Job Log Detail
    
4. Resolve owner: "MAYPLAS PACKAGING SDN BHD" found in tabCompany -> sets `reference_name = "MAYPLAS PACKAGING SDN BHD"`
    

5. Extraction **overrides** upload input for `reference_name`

  

### **3.3 Get Certificate — Shows Warning**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00060"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00060",
    "reference_doctype": "Company",
    "reference_name": "MAYPLAS PACKAGING SDN BHD",
    "reference_warning": "Expected 'Faber-Castell (M) Sdn. Bhd.', extracted 'MAYPLAS PACKAGING SDN BHD'",
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-020",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "NO 3, JALAN SEJAHTERA 25/124 TAMAN PERINDUSTRIAN AXIS, SEKSYEN 25, 40400 SHAH ALAM SELANGOR"
      },
      {
        "id": "cd-021",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "CHAN AH BOON"
      },
      {
        "id": "cd-022",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "500607105417"
      },
      {
        "id": "cd-023",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-024",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD"
      },
      {
        "id": "cd-025",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-026",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-027",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-028",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-029",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

### **3.4 Update Certificate — Fix Mismatch**

  

User corrects `reference_name` back to Faber-Castell (the PDF was for a different company but the user knows it belongs to Faber-Castell).

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00060",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "certificate_type_id": "CTY-2026-00002",
  "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
  "tax_registration_no": "B16-1808-21003508",
  "issue_date": "2025-11-04",
  "valid_till": null,
  "issuer": null,
  "status": "Active",
  "reference_doctype": "Company",
  "reference_name": "Faber-Castell (M) Sdn. Bhd.",
  "remarks": "Corrected company reference from extraction mismatch",
  "references": [
    {
      "id": "cd-020",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "NO 3, JALAN SEJAHTERA 25/124 TAMAN PERINDUSTRIAN AXIS, SEKSYEN 25, 40400 SHAH ALAM SELANGOR"
    },
    {
      "id": "cd-021",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_name",
      "reference_value": "CHAN AH BOON"
    },
    {
      "id": "cd-022",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_ic",
      "reference_value": "500607105417"
    },
    {
      "id": "cd-023",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_designation",
      "reference_value": "DIRECTOR"
    },
    {
      "id": "cd-024",
      "ref_type": "customer",
      "ref_index": 0,
      "reference_key": "customer_name",
      "reference_value": "TOLING CORPORATION (M) SDN BHD"
    },
    {
      "id": "cd-025",
      "ref_type": "customer",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
    },
    {
      "id": "cd-026",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "3902309000"
    },
    {
      "id": "cd-027",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "POLYPROPYLENE COPOLYMER"
    },
    {
      "id": "cd-028",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "- - Other"
    },
    {
      "id": "cd-029",
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    }
  ]
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate updated successfully",
  "data": {
    "certificate_id": "CERT-2026-00060",
    "reference_doctype": "Company",
    "reference_name": "Faber-Castell (M) Sdn. Bhd.",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-020",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "NO 3, JALAN SEJAHTERA 25/124 TAMAN PERINDUSTRIAN AXIS, SEKSYEN 25, 40400 SHAH ALAM SELANGOR"
      },
      {
        "id": "cd-021",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "CHAN AH BOON"
      },
      {
        "id": "cd-022",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "500607105417"
      },
      {
        "id": "cd-023",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-024",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD"
      },
      {
        "id": "cd-025",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-026",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-027",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-028",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-029",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

User must now call `submit_certificate` to move the certificate from Draft to Submitted before it can be used for SO submission validation.

  

---

  

## **Scenario 4: Cancel and Amend Certificate**

  

Certificate was submitted but needs to be revoked and replaced.

  

### **4.1 Cancel Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00050"
}
```

  

**What happens:**

  

1. Validate certificate exists, docstatus = 1 (Submitted) -> pass
    
2. No check on linked Sales Orders — cancel always allowed
    
3. `doc.cancel()` -> docstatus = 2
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate cancelled successfully",
  "data": {
    "certificate_id": "CERT-2026-00050",
    "reference_doctype": "Company",
    "reference_name": "Faber-Castell (M) Sdn. Bhd.",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 2,
    "references": [
      {
        "id": "cd-001",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56..."
      }
    ]
  }
}
```

  

Note: any future SO submit linking to CERT-2026-00050 will fail (docstatus != 1).

  

### **4.2 Amend Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00050"
}
```

  

**What happens:**

  

1. Validate certificate exists, docstatus = 2 (Cancelled) -> pass
    
2. `doc.amend_doc()` -> creates new Draft
    
3. Copy tabCertificate Data rows to new certificate
    
4. Copy Dynamic Link (Certificate -> Customer) for new certificate
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate amended successfully",
  "data": {
    "certificate_id": "CERT-2026-00051",
    "amended_from": "CERT-2026-00050",
    "reference_doctype": "Company",
    "reference_name": "Faber-Castell (M) Sdn. Bhd.",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-030",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56..."
      },
      {
        "id": "cd-031",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "JOHN DOE"
      },
      {
        "id": "cd-032",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "800101145678"
      },
      {
        "id": "cd-033",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-034",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD"
      },
      {
        "id": "cd-035",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-036",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-037",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-038",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-039",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

**User can now:**

- Update the new draft (correct data as needed)
    
- Submit the new certificate (CERT-2026-00051)
    
- Link new SOs to CERT-2026-00051
    

---

  

## **Scenario 5: Manual Create Certificate (No Extraction)**

  

User creates a certificate manually without uploading a PDF.

  

### **5.1 Create Certificate**

  

**Request:**

  

```JSON
{
  "certificate_type_id": "CTY-2026-00002",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "customer_id": "CUST-004791",
  "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
  "tax_registration_no": "B16-1808-21003508",
  "issue_date": "2025-11-04",
  "valid_till": null,
  "issuer": null,
  "status": "Active",
  "reference_doctype": "Company",
  "reference_name": "Faber-Castell (M) Sdn. Bhd.",
  "references": [
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56, SEKSYEN 32, 40460 SHAH ALAM, SELANGOR"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_name",
      "reference_value": "JOHN DOE"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_ic",
      "reference_value": "800101145678"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_designation",
      "reference_value": "DIRECTOR"
    },
    {
      "ref_type": "customer",
      "ref_index": 0,
      "reference_key": "customer_name",
      "reference_value": "TOLING CORPORATION (M) SDN BHD"
    },
    {
      "ref_type": "customer",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "3902309000"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "POLYPROPYLENE COPOLYMER"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "- - Other"
    },
    {
      "ref_type": "local_purchase_items.raw_materials",
      "ref_index": 0,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    }
  ]
}
```

  

**What happens:**

  

1. Validate company, customer, certificate_type exist
    
2. Create Certificate doc (Draft, docstatus=0) with header fields
    
3. Translate `references` via reverse map -> store in tabCertificate Data (data_type="string", confidence=null)
    
4. Create Dynamic Link: Certificate -> Customer (CUST-004791)
    
5. No extraction, no Background Job Log
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate created successfully",
  "data": {
    "certificate_id": "CERT-2026-00070",
    "reference_doctype": "Company",
    "reference_name": "Faber-Castell (M) Sdn. Bhd.",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00002",
    "certificate_type": "C3",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-040",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "LOT 6, BLOCK 4, JALAN SUNGAI KAYU ARA 32/56, SEKSYEN 32, 40460 SHAH ALAM, SELANGOR"
      },
      {
        "id": "cd-041",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "JOHN DOE"
      },
      {
        "id": "cd-042",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "800101145678"
      },
      {
        "id": "cd-043",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-044",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "TOLING CORPORATION (M) SDN BHD"
      },
      {
        "id": "cd-045",
        "ref_type": "customer",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-046",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-047",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-048",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-049",
        "ref_type": "local_purchase_items.raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

User must now call `submit_certificate` to move the certificate from Draft to Submitted before it can be used for SO submission validation (same as Scenario 1 steps 1.5-1.7).

  

# **Case Scenarios: A57 Certificate**

  

End-to-end API usage scenarios for A57 certificates.

  

**Context:**

- Company: TOLING CORPORATION (M) SDN. BHD
    
- Certificate type: A57 (company-owned, no customer linkage)
    
- Items on SO: HIPS (HS code: 3903199000)
    
- A57 specifics: validity_period_months auto-calculated (6 months from issue_date), has approved_quantity/approved_value per item
    

---

  

## **Scenario 1: Happy Path — Upload, Submit, Link to SO**

  

### **1.1 Upload Certificate**

  

**Request:**

  

```JSON
{
  "certificate_type_id": "CTY-2026-00003",
  "company": "TOLING CORPORATION (M) SDN. BHD",
  "customer_id": null,
  "file_url": null,
  "file_bytes_str": null,
  "file_s3_file_key": "uploads/a57_certificate.pdf"
}
```

  

Note: No `customer_id` for A57 — it's company-owned with no customer linkage.

  

**What happens:**

  

1. Validate company, certificate_type exist
    
2. Create Certificate doc (Draft, docstatus=0):
    
    1. reference_doctype = "Company"
        
    2. reference_name = "TOLING CORPORATION (M) SDN. BHD"
        
3. No Dynamic Link created (A57 has no customer linkage)
    
4. Upload file to S3
    
5. Create Background Job Log (status="Extracting")
    
6. Send extraction request to middleware
    
7. Return immediately
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate uploaded successfully",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "job_id": "BJL-2026-00200",
    "job_status": "Extracting",
    "processing_stage": "Extracting",
    "job_type": "extraction",
    "certificate_attachment": "a57_certificate.pdf"
  }
}
```

  

### **1.2 Poll Job Status (Frontend Polling)**

  

**Request:**

  

```JSON
{
  "job_id": "BJL-2026-00200"
}
```

  

**Response (while extracting):**

  

```JSON
{
  "status": "success",
  "message": "Job is still processing",
  "data": {
    "job_id": "BJL-2026-00200",
    "job_status": "Extracting",
    "certificate_id": "CERT-2026-00080"
  }
}
```

  

**Response (extraction complete):**

  

```JSON
{
  "status": "success",
  "message": "Job completed successfully",
  "data": {
    "job_id": "BJL-2026-00200",
    "job_status": "Success",
    "certificate_id": "CERT-2026-00080"
  }
}
```

  

### **1.3 Middleware Extraction Callback (automatic)**

  

Middleware extracts data from the PDF and calls back. Extraction matches upload input.

  

**What happens:**

  

1. Flatten extracted data and split:
    

**Header keys -> tabCertificate:**

```Plain
certificate_title: SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX) ORDER 2018
issue_date: 2025-11-12
approved_company_name: TOLING CORPORATION (M) SDN. BHD
validity_period_months: 6.0
export_required_within_months: 6.0
issuer: KASTAM DIRAJA MALAYSIA
```

  

**Reference keys -> tabCertificate Data:**

```Plain
key: approved_company_address           | value: 3RD FLOOR, 28 LEBUH GEREJA, 10200 PULAU PINANG, PULAU PINANG
key: authorised_person_name             | value: HENG CHOR LIAN
key: authorised_person_ic               | value: 761014075350
key: authorised_person_designation      | value: DIRECTOR
key: goods[0].tariff_code              | value: 3903199000
key: goods[0].commercial_description   | value: HIPS
key: goods[0].customs_classification   | value: - - - OTHER
key: goods[0].approved_quantity        | value: 4000.0
key: goods[0].approved_value           | value: 22000.0
key: goods[0].line_number              | value: 1.0
key: goods[0].item_tax_rate            | value: 0
```

  

2. No mismatch — upload company matches extracted company
    
3. Resolve owner: "TOLING CORPORATION (M) SDN. BHD" found in tabCompany
    
4. Calculate valid_till: issue_date (2025-11-12) + 6 months = 2026-05-12
    
5. Update tabCertificate header with extracted values + status="Active"
    

### **1.4 Get Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00080"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "reference_doctype": "Company",
    "reference_name": "TOLING CORPORATION (M) SDN. BHD",
    "reference_warning": null,
    "company": "TOLING CORPORATION (M) SDN. BHD",
    "certificate_type_id": "CTY-2026-00003",
    "certificate_type": "A57",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX) ORDER 2018",
    "issue_date": "2025-11-12",
    "valid_till": "2026-05-12",
    "tax_registration_no": null,
    "issuer": "KASTAM DIRAJA MALAYSIA",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-100",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "3RD FLOOR, 28 LEBUH GEREJA, 10200 PULAU PINANG, PULAU PINANG"
      },
      {
        "id": "cd-101",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "HENG CHOR LIAN"
      },
      {
        "id": "cd-102",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "761014075350"
      },
      {
        "id": "cd-103",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-104",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3903199000"
      },
      {
        "id": "cd-105",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "HIPS"
      },
      {
        "id": "cd-106",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - - OTHER"
      },
      {
        "id": "cd-107",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "approved_quantity",
        "reference_value": "4000.0"
      },
      {
        "id": "cd-108",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "approved_value",
        "reference_value": "22000.0"
      }
    ]
  }
}
```

  

### **1.5 Submit Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00080"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate submitted successfully",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "reference_doctype": "Company",
    "reference_name": "TOLING CORPORATION (M) SDN. BHD",
    "reference_warning": null,
    "company": "TOLING CORPORATION (M) SDN. BHD",
    "certificate_type_id": "CTY-2026-00003",
    "certificate_type": "A57",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX) ORDER 2018",
    "issue_date": "2025-11-12",
    "valid_till": "2026-05-12",
    "tax_registration_no": null,
    "issuer": "KASTAM DIRAJA MALAYSIA",
    "status": "Active",
    "docstatus": 1,
    "references": [
      {
        "id": "cd-100",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "3RD FLOOR, 28 LEBUH GEREJA, 10200 PULAU PINANG, PULAU PINANG"
      },
      {
        "id": "cd-101",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "HENG CHOR LIAN"
      },
      {
        "id": "cd-102",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "761014075350"
      },
      {
        "id": "cd-103",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-104",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3903199000"
      },
      {
        "id": "cd-105",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "HIPS"
      },
      {
        "id": "cd-106",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - - OTHER"
      },
      {
        "id": "cd-107",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "approved_quantity",
        "reference_value": "4000.0"
      },
      {
        "id": "cd-108",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "approved_value",
        "reference_value": "22000.0"
      }
    ]
  }
}
```

  

### **1.6 Create Sales Order with Tax Reference**

  

**Request:**

  

```JSON
{
  "customer_id": "CUST-004791",
  "company": "TOLING CORPORATION (M) SDN. BHD",
  "tax_reference": "CERT-2026-00080",
  "tax_on_total_id": "TAX-001",
  "items": [
    {
      "item_code": "ITEM-HIPS-001",
      "item_name": "HIPS",
      "qty": 100,
      "unit_price": 5.50,
      "tax_on_items_id": "TAX-002",
      "tax_reference": "CERT-2026-00080",
      "batch_no": null
    }
  ],
  "attachments": {
    "tax_reference_certificate": {
      "id": "file-010",
      "file_url": null,
      "file_bytes_str": null,
      "file_s3_file_key": null
    },
    "po_attachments": null,
    "appointment_letter": null
  }
}
```

  

**What happens:**

  

1. Validate certificate CERT-2026-00080 exists -> pass (no docstatus check on create)
    
2. Insert Sales Order doc
    
3. Create Dynamic Link: Sales Order -> Certificate (CERT-2026-00080)
    
4. Link attachments
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully created sales order",
  "data": {
    "id": "SO-2026-00200",
    "status": null,
    "biller": {
      "id": "TOLING CORPORATION (M) SDN. BHD",
      "name": "TOLING CORPORATION (M) SDN. BHD"
    },
    "customer": {
      "id": "CUST-004791",
      "name": "TOLING CORPORATION (M) SDN. BHD"
    },
    "tax_on_total_id": "TAX-001",
    "tax_on_total_name": "Sales Tax 0%",
    "tax_on_total_rate": 0,
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00080",
      "certificate_type_id": "CTY-2026-00003",
      "certificate_type": "A57",
      "certificate_status": "Active",
      "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX) ORDER 2018",
      "tax_registration_no": null
    },
    "tax_reference_certificate": {
      "id": "file-010",
      "file_name": "tax_ref_cert.pdf",
      "file_url": "https://s3.ap-southeast-1.amazonaws.com/bucket/tax_ref_cert.pdf",
      "mime_type": "application/pdf",
      "attached_to_field": "tax_reference_certificate",
      "index": 0
    },
    "appointment_letter": null,
    "items": [
      {
        "id": "SOI-0001",
        "item_id": "ITEM-HIPS-001",
        "sku": "ITEM-HIPS-001",
        "name": "HIPS",
        "quantity": 100,
        "unit_price": 5.50,
        "amount": 550.00,
        "tax_on_items_id": "TAX-002",
        "tax_on_items_name": "Sales Tax 0%",
        "tax_on_items_rate": 0,
        "tax_reference_details": {
          "certificate_id": "CERT-2026-00080",
          "certificate_type_id": "CTY-2026-00003",
          "certificate_type": "A57",
          "certificate_status": "Active",
          "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX) ORDER 2018",
          "tax_registration_no": null
        },
        "batch_no": null,
        "hs_code": "3903199000"
      }
    ],
    "grand_total": 550.00
  }
}
```

  

### **1.7 Submit Sales Order**

  

**Request:**

  

```JSON
{
  "sales_order_id": "SO-2026-00200"
}
```

  

**Validation checks (all pass):**

  

1. Tax reference consistency: order-level and item-level `tax_reference` must be the same certificate -> PASS
    
2. Certificate docstatus = 1 AND status = "Active" -> PASS
    
3. Certificate owner: reference_doctype = "Company", reference_name = "TOLING CORPORATION (M) SDN. BHD" = SO company -> PASS
    
4. No customer eligibility check for A57 (company-wide certificate)
    
5. ORDER-LEVEL: tax_on_total = 0% AND tax_reference = "CERT-2026-00080" -> validate ALL items:
    
6. Item ITEM-HIPS-001 (order-level validation applies to all items):
    
    1. Item exists in tabItem -> PASS
        
    2. hs_code = 3903199000 (from tabItem) -> PASS (assigned)
        
    3. HS code coverage:
        
        ```SQL
        SELECT value FROM `tabCertificate Data`
        WHERE parent = 'CERT-2026-00080'
          AND `key` LIKE '%tariff_code'
        -> returns: 3903199000
        ```
        
    4. No effective_date check for A57
        
    5. Batch check: item has_batch_no = 0 -> skip
        
7. Attachment: tax_reference_certificate present -> PASS
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Sales Order SO-2026-00200 submitted successfully",
  "data": {
    "sales_order_id": "SO-2026-00200",
    "message": "Sales Order SO-2026-00200 submitted successfully"
  }
}
```

  

---

  

## **Scenario 2: Manual Create A57 Certificate**

  

User creates an A57 certificate manually without uploading a PDF.

  

### **2.1 Create Certificate**

  

**Request:**

  

```JSON
{
  "certificate_type_id": "CTY-2026-00003",
  "company": "TOLING CORPORATION (M) SDN. BHD",
  "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX) ORDER 2018",
  "tax_registration_no": "P11-2511-27100582",
  "issue_date": "2025-11-12",
  "valid_till": "2026-05-12",
  "issuer": "KASTAM DIRAJA MALAYSIA",
  "status": "Active",
  "reference_doctype": "Company",
  "reference_name": "TOLING CORPORATION (M) SDN. BHD",
  "references": [
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "3RD FLOOR, 28 LEBUH GEREJA, 10200 PULAU PINANG, PULAU PINANG"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_name",
      "reference_value": "HENG CHOR LIAN"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_ic",
      "reference_value": "761014075350"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_designation",
      "reference_value": "DIRECTOR"
    },
    {
      "ref_type": "items",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "3903199000"
    },
    {
      "ref_type": "items",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "HIPS"
    },
    {
      "ref_type": "items",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "- - - OTHER"
    },
    {
      "ref_type": "items",
      "ref_index": 0,
      "reference_key": "approved_quantity",
      "reference_value": "4000.0"
    },
    {
      "ref_type": "items",
      "ref_index": 0,
      "reference_key": "approved_value",
      "reference_value": "22000.0"
    },
    {
      "ref_type": "items",
      "ref_index": 1,
      "reference_key": "tariff_code",
      "reference_value": "3901100000"
    },
    {
      "ref_type": "items",
      "ref_index": 1,
      "reference_key": "commercial_description",
      "reference_value": "POLYETHYLENE GRANULES"
    },
    {
      "ref_type": "items",
      "ref_index": 1,
      "reference_key": "customs_classification",
      "reference_value": "Polyethylene having a specific gravity of less than 0.94"
    },
    {
      "ref_type": "items",
      "ref_index": 1,
      "reference_key": "approved_quantity",
      "reference_value": "2000.0"
    },
    {
      "ref_type": "items",
      "ref_index": 1,
      "reference_key": "approved_value",
      "reference_value": "15000.0"
    }
  ]
}
```

  

**What happens:**

  

1. Validate company, certificate_type exist
    
2. Create Certificate doc (Draft, docstatus=0) with header fields
    
3. Translate `references` via reverse map -> store in tabCertificate Data (data_type="string", confidence=null)
    
4. No Dynamic Link created (A57 has no customer linkage)
    
5. No extraction, no Background Job Log
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate created successfully",
  "data": {
    "certificate_id": "CERT-2026-00085",
    "reference_doctype": "Company",
    "reference_name": "TOLING CORPORATION (M) SDN. BHD",
    "reference_warning": null,
    "company": "TOLING CORPORATION (M) SDN. BHD",
    "certificate_type_id": "CTY-2026-00003",
    "certificate_type": "A57",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX) ORDER 2018",
    "issue_date": "2025-11-12",
    "valid_till": "2026-05-12",
    "tax_registration_no": "P11-2511-27100582",
    "issuer": "KASTAM DIRAJA MALAYSIA",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-110",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "3RD FLOOR, 28 LEBUH GEREJA, 10200 PULAU PINANG, PULAU PINANG"
      },
      {
        "id": "cd-111",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "HENG CHOR LIAN"
      },
      {
        "id": "cd-112",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "761014075350"
      },
      {
        "id": "cd-113",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-114",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3903199000"
      },
      {
        "id": "cd-115",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "HIPS"
      },
      {
        "id": "cd-116",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - - OTHER"
      },
      {
        "id": "cd-117",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "approved_quantity",
        "reference_value": "4000.0"
      },
      {
        "id": "cd-118",
        "ref_type": "items",
        "ref_index": 0,
        "reference_key": "approved_value",
        "reference_value": "22000.0"
      },
      {
        "id": "cd-119",
        "ref_type": "items",
        "ref_index": 1,
        "reference_key": "tariff_code",
        "reference_value": "3901100000"
      },
      {
        "id": "cd-120",
        "ref_type": "items",
        "ref_index": 1,
        "reference_key": "commercial_description",
        "reference_value": "POLYETHYLENE GRANULES"
      },
      {
        "id": "cd-121",
        "ref_type": "items",
        "ref_index": 1,
        "reference_key": "customs_classification",
        "reference_value": "Polyethylene having a specific gravity of less than 0.94"
      },
      {
        "id": "cd-122",
        "ref_type": "items",
        "ref_index": 1,
        "reference_key": "approved_quantity",
        "reference_value": "2000.0"
      },
      {
        "id": "cd-123",
        "ref_type": "items",
        "ref_index": 1,
        "reference_key": "approved_value",
        "reference_value": "15000.0"
      }
    ]
  }
}
```

  

User must now call `submit_certificate` to move the certificate from Draft to Submitted before it can be used for SO submission validation (same as Scenario 1 step 1.5).

  

# **Case Scenarios: C1 Certificate**

  

End-to-end API usage scenarios for C1 certificates.

  

**Context:**

- Company: Faber-Castell (M) Sdn. Bhd.
    
- Customer: TOLING CORPORATION (M) SDN BHD (CUST-004791)
    
- Certificate type: C1 (customer-owned, with eligible items)
    
- Items on SO: POLYPROPYLENE COPOLYMER (HS code: 3902309000)
    

---

  

## **Scenario 1: Happy Path — Upload, Submit, Link to SO**

  

Everything works cleanly. No mismatches, no corrections needed.

  

### **1.1 Upload Certificate**

  

**Request:**

  

```JSON
{
  "certificate_type_id": "CTY-2026-00001",
  "company": "DAICHONG ENGRAVING SDN BHD",
  "customer_id": "CUST-004791",
  "file_url": null,
  "file_bytes_str": null,
  "file_s3_file_key": "uploads/c1_certificate.pdf"
}
```

  

**What happens:**

  

1. Validate company, customer, certificate_type exist
    
2. Create Certificate doc (Draft, docstatus=0)
    
3. Create Dynamic Link: Certificate -> Customer (CUST-004791)
    
4. Upload file to S3
    
5. Create Background Job Log (status="Extracting")
    
6. Send extraction request to middleware
    
7. Return immediately
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate uploaded successfully",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "job_id": "BJL-2026-00200",
    "job_status": "Extracting",
    "processing_stage": "Extracting",
    "job_type": "extraction",
    "certificate_attachment": "c1_certificate.pdf"
  }
}
```

  

### **1.2 Poll Job Status (Frontend Polling)**

  

Frontend polls the job status until extraction completes.

  

**Request:**

  

```JSON
{
  "job_id": "BJL-2026-00200"
}
```

  

**Response (while extracting):**

  

```JSON
{
  "status": "success",
  "message": "Job is still processing",
  "data": {
    "job_id": "BJL-2026-00200",
    "job_status": "Extracting",
    "certificate_id": "CERT-2026-00080"
  }
}
```

  

**Response (extraction complete):**

  

```JSON
{
  "status": "success",
  "message": "Job completed successfully",
  "data": {
    "job_id": "BJL-2026-00200",
    "job_status": "Success",
    "certificate_id": "CERT-2026-00080"
  }
}
```

  

Frontend stops polling when `job_status` = "Success" or "Failed", then calls `get_certificate` to fetch the full data.

  

---

  

### **1.3 Middleware Extraction Callback (automatic)**

  

Middleware extracts data from the PDF and calls back. Extraction matches the upload input — no mismatches.

  

**What happens:**

  

1. Flatten extracted data and split:
    

**Header keys -> tabCertificate:**

```Plain
certificate_title: SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018
issue_date: 2025-11-04
sales_tax_registration_number: B16-1808-21003508
smk_registration_number: B16202500034979
approved_company_name: TOLING CORPORATION (M) SDN BHD
```

  

**Reference keys -> tabCertificate Data:**

```Plain
key: approved_company_address           | value: WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG
key: authorised_person_name             | value: TAN AH KOW
key: authorised_person_ic               | value: 750315085432
key: authorised_person_designation      | value: MANAGING DIRECTOR
key: items.raw_materials[0].tariff_code           | value: 3902309000
key: items.raw_materials[0].commercial_description | value: POLYPROPYLENE COPOLYMER
key: items.raw_materials[0].customs_classification | value: - - Other
key: items.raw_materials[0].effective_date         | value: 2025-11-03
key: items.raw_materials[0].line_number            | value: 1.0
key: items.raw_materials[0].item_tax_rate          | value: 0
```

  

2. No mismatch — upload customer matches extracted approved company name
    
3. Resolve owner: `approved_company_name` = "TOLING CORPORATION (M) SDN BHD" found in tabCustomer -> sets `reference_doctype = "Customer"`, `reference_name = "CUST-004791"`
    
4. Update tabCertificate header with extracted values + status="Active"
    

### **1.4 Get Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00080"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-101",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-102",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "TAN AH KOW"
      },
      {
        "id": "cd-103",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "750315085432"
      },
      {
        "id": "cd-104",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "MANAGING DIRECTOR"
      },
      {
        "id": "cd-105",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-106",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-107",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-108",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

### **1.5 Submit Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00080"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate submitted successfully",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 1,
    "references": [
      {
        "id": "cd-101",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-102",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "TAN AH KOW"
      },
      {
        "id": "cd-103",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "750315085432"
      },
      {
        "id": "cd-104",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "MANAGING DIRECTOR"
      },
      {
        "id": "cd-105",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-106",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-107",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-108",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

### **1.6 Create Sales Order with Tax Reference**

  

Note: SO has 3 items — 2 with 0% tax (covered by certificate) and 1 with 10% tax (not validated against certificate).

  

**Request:**

  

```JSON
{
  "customer_id": "CUST-004791",
  "company": "DAICHONG ENGRAVING SDN BHD",
  "tax_reference": "CERT-2026-00090",
  "tax_on_total_id": null,
  "items": [
    {
      "item_code": "ITEM-HCL-001",
      "item_name": "HUDROCHLORIC ACID (HCL)",
      "qty": 50,
      "unit_price": 120.00,
      "tax_on_items_id": "TAX-ZERO",
      "tax_reference": "CERT-2026-00090",
      "batch_no": null
    },
    {
      "item_code": "ITEM-SA-001",
      "item_name": "SUPLHURIC ACID COMM GRADE",
      "qty": 30,
      "unit_price": 80.00,
      "tax_on_items_id": "TAX-ZERO",
      "tax_reference": "CERT-2026-00090",
      "batch_no": null
    },
    {
      "item_code": "ITEM-OTHER-001",
      "item_name": "REGULAR TAXABLE ITEM",
      "qty": 10,
      "unit_price": 200.00,
      "tax_on_items_id": "TAX-10PCT",
      "tax_reference": null,
      "batch_no": null
    }
  ],
  "attachments": {
    "tax_reference_certificate": {
      "id": "file-001",
      "file_url": null,
      "file_bytes_str": null,
      "file_s3_file_key": null
    },
    "po_attachments": null,
    "appointment_letter": null
  }
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully created sales order",
  "data": {
    "id": "SO-2026-00300",
    "status": null,
    "biller": {
      "id": "DAICHONG ENGRAVING SDN BHD",
      "name": "DAICHONG ENGRAVING SDN BHD"
    },
    "customer": {
      "id": "CUST-004791",
      "name": "DAICHONG ENGRAVING SDN BHD"
    },
    "tax_on_total_id": null,
    "tax_on_total_name": null,
    "tax_on_total_rate": null,
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00090",
      "certificate_type_id": "CTY-2026-00001",
      "certificate_type": "C1",
      "certificate_status": "Active",
      "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
      "tax_registration_no": "A10-2506-22000021"
    },
    "tax_reference_certificate": {
      "id": "file-001",
      "file_name": "tax_ref_cert.pdf",
      "file_url": "https://s3.ap-southeast-1.amazonaws.com/bucket/tax_ref_cert.pdf",
      "mime_type": "application/pdf",
      "attached_to_field": "tax_reference_certificate",
      "index": 0
    },
    "appointment_letter": null,
    "items": [
      {
        "id": "SOI-0001",
        "item_id": "ITEM-HCL-001",
        "sku": "ITEM-HCL-001",
        "name": "HUDROCHLORIC ACID (HCL)",
        "quantity": 50,
        "unit_price": 120.00,
        "amount": 6000.00,
        "tax_on_items_id": "TAX-ZERO",
        "tax_on_items_name": "Sales Tax 0%",
        "tax_on_items_rate": 0,
        "tax_reference_details": {
          "certificate_id": "CERT-2026-00090",
          "certificate_type_id": "CTY-2026-00001",
          "certificate_type": "C1",
          "certificate_status": "Active",
          "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
          "tax_registration_no": "A10-2506-22000021"
        },
        "batch_no": null,
        "hs_code": "2806100000"
      },
      {
        "id": "SOI-0002",
        "item_id": "ITEM-SA-001",
        "sku": "ITEM-SA-001",
        "name": "SUPLHURIC ACID COMM GRADE",
        "quantity": 30,
        "unit_price": 80.00,
        "amount": 2400.00,
        "tax_on_items_id": "TAX-ZERO",
        "tax_on_items_name": "Sales Tax 0%",
        "tax_on_items_rate": 0,
        "tax_reference_details": {
          "certificate_id": "CERT-2026-00090",
          "certificate_type_id": "CTY-2026-00001",
          "certificate_type": "C1",
          "certificate_status": "Active",
          "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
          "tax_registration_no": "A10-2506-22000021"
        },
        "batch_no": null,
        "hs_code": "2807001000"
      },
      {
        "id": "SOI-0003",
        "item_id": "ITEM-OTHER-001",
        "sku": "ITEM-OTHER-001",
        "name": "REGULAR TAXABLE ITEM",
        "quantity": 10,
        "unit_price": 200.00,
        "amount": 2000.00,
        "tax_on_items_id": "TAX-10PCT",
        "tax_on_items_name": "Sales Tax 10%",
        "tax_on_items_rate": 10,
        "tax_reference_details": null,
        "batch_no": null,
        "hs_code": null
      }
    ]
  }
}
```

  

### **1.7 Submit Sales Order**

  

**Request:**

  

```JSON
{
  "sales_order_id": "SO-2026-00300"
}
```

  

**Validation checks (all pass):**

  

1. Tax reference consistency: order-level and item-level `tax_reference` must be the same certificate -> PASS
    
2. Certificate docstatus = 1 AND status = "Active" -> PASS
    
3. Certificate owner (reference_doctype="Customer", reference_name="CUST-004791") = SO customer -> PASS
    
4. C1 has no tax_on_total check (item-level validation only)
    
5. Item ITEM-HCL-001: tax_on_items = 0% AND tax_reference = "CERT-2026-00090" -> VALIDATE:
    
    1. Item exists in tabItem -> PASS
        
    2. hs_code = 2806100000 (from tabItem) -> PASS (assigned)
        
    3. HS code coverage: `SELECT value FROM tabCertificate Data WHERE parent='CERT-2026-00090' AND key LIKE '%tariff_code'` returns [2806100000, 2807001000, 3814000000, 4808100000]. 2806100000 IN list -> PASS
        
    4. Effective date: derive key `items.raw_materials[0].effective_date` -> 2025-07-03 <= today -> PASS
        
6. Item ITEM-SA-001: tax_on_items = 0% AND tax_reference = "CERT-2026-00090" -> VALIDATE:
    
    1. Item exists in tabItem -> PASS
        
    2. hs_code = 2807001000 (from tabItem) -> PASS (assigned)
        
    3. HS code coverage: 2807001000 IN list -> PASS
        
    4. Effective date: derive key `items.raw_materials[1].effective_date` -> 2025-07-03 <= today -> PASS
        
7. Item ITEM-OTHER-001: tax_on_items = 10% AND tax_reference = null -> SKIP
    
8. Attachments: tax_reference_certificate present -> PASS
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Sales Order SO-2026-00300 submitted successfully",
  "data": {
    "sales_order_id": "SO-2026-00300",
    "message": "Sales Order SO-2026-00300 submitted successfully"
  }
}
```

  

---

  

## **Scenario 2: Update Certificate — Correct Extracted Data**

  

Extraction succeeds but user wants to correct some reference data before submitting.

  

### **2.1 After extraction, user reviews and updates**

  

Certificate CERT-2026-00080 was extracted (docstatus=0, Draft). User wants to correct the company address and add a second raw material item plus a components item.

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00080",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "certificate_type_id": "CTY-2026-00001",
  "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
  "tax_registration_no": "B16-1808-21003508",
  "issue_date": "2025-11-04",
  "valid_till": null,
  "issuer": null,
  "status": "Active",
  "reference_doctype": "Customer",
  "reference_name": "CUST-004791",
  "remarks": null,
  "references": [
    {
      "id": "cd-101",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG, MALAYSIA"
    },
    {
      "id": "cd-102",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_name",
      "reference_value": "TAN AH KOW"
    },
    {
      "id": "cd-103",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_ic",
      "reference_value": "750315085432"
    },
    {
      "id": "cd-104",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_designation",
      "reference_value": "MANAGING DIRECTOR"
    },
    {
      "id": "cd-105",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "3902309000"
    },
    {
      "id": "cd-106",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "POLYPROPYLENE COPOLYMER"
    },
    {
      "id": "cd-107",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "- - Other"
    },
    {
      "id": "cd-108",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 1,
      "reference_key": "tariff_code",
      "reference_value": "3901100000"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 1,
      "reference_key": "commercial_description",
      "reference_value": "POLYETHYLENE GRANULES"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 1,
      "reference_key": "customs_classification",
      "reference_value": "Polyethylene having a specific gravity of less than 0.94"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 1,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    },
    {
      "ref_type": "components",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "8477900000"
    },
    {
      "ref_type": "components",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "INJECTION MOULD PARTS"
    },
    {
      "ref_type": "components",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "Parts"
    },
    {
      "ref_type": "components",
      "ref_index": 0,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    }
  ]
}
```

  

**What happens:**

  

1. Validate certificate_id exists -> pass
    
2. Validate docstatus = 0 (Draft) -> allowed
    
3. Validate `references` against C1 enum rules -> pass (ref_types: company, raw_materials, components all valid for C1)
    
4. Update tabCertificate header fields
    
5. Reconcile tabCertificate Data:
    
    1. `cd-101` (has `id`) -> update (address corrected)
        
    2. `cd-102` to `cd-108` (have `id`) -> update (unchanged)
        
    3. 4 new items without `id` (raw_materials ref_index=1) -> create new rows
        
    4. 4 new items without `id` (components ref_index=0) -> create new rows
        
    5. No existing rows missing from payload -> nothing deleted
        

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate updated successfully",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-101",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG, MALAYSIA"
      },
      {
        "id": "cd-102",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "TAN AH KOW"
      },
      {
        "id": "cd-103",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "750315085432"
      },
      {
        "id": "cd-104",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "MANAGING DIRECTOR"
      },
      {
        "id": "cd-105",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-106",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-107",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-108",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      },
      {
        "id": "cd-109",
        "ref_type": "raw_materials",
        "ref_index": 1,
        "reference_key": "tariff_code",
        "reference_value": "3901100000"
      },
      {
        "id": "cd-110",
        "ref_type": "raw_materials",
        "ref_index": 1,
        "reference_key": "commercial_description",
        "reference_value": "POLYETHYLENE GRANULES"
      },
      {
        "id": "cd-111",
        "ref_type": "raw_materials",
        "ref_index": 1,
        "reference_key": "customs_classification",
        "reference_value": "Polyethylene having a specific gravity of less than 0.94"
      },
      {
        "id": "cd-112",
        "ref_type": "raw_materials",
        "ref_index": 1,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      },
      {
        "id": "cd-113",
        "ref_type": "components",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "8477900000"
      },
      {
        "id": "cd-114",
        "ref_type": "components",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "INJECTION MOULD PARTS"
      },
      {
        "id": "cd-115",
        "ref_type": "components",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "Parts"
      },
      {
        "id": "cd-116",
        "ref_type": "components",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

---

  

## **Scenario 3: Upload with Customer Mismatch**

  

Extraction resolves to a different customer than what the user uploaded with. User must correct before submitting.

  

### **3.1 Upload Certificate**

  

Same as Scenario 1 — user uploads with `customer_id: "CUST-004791"` (TOLING CORPORATION).

  

### **3.2 Extraction Callback — Mismatch Detected**

  

Middleware extracts `approved_company_name: "DAICHONG ENGRAVING SDN BHD"` from the PDF, which doesn't match the upload customer.

  

**What happens:**

  

1. Flatten and split data (same as Scenario 1)
    

2. **Mismatch detected**: upload customer = "TOLING CORPORATION (M) SDN BHD" (CUST-004791), extracted = "DAICHONG ENGRAVING SDN BHD"

3. Warning logged in Background Job Log Detail
    
4. Resolve owner: "DAICHONG ENGRAVING SDN BHD" found in tabCustomer as CUST-003210 -> sets `reference_doctype = "Customer"`, `reference_name = "CUST-003210"`
    

5. Extraction **overrides** upload input for `reference_name`

  

### **3.3 Get Certificate — Shows Warning**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00090"
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully fetched certificate",
  "data": {
    "certificate_id": "CERT-2026-00090",
    "reference_doctype": "Customer",
    "reference_name": "CUST-003210",
    "reference_warning": "Expected 'TOLING CORPORATION (M) SDN BHD', extracted 'DAICHONG ENGRAVING SDN BHD'",
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-120",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "NO 12, JALAN INDUSTRI USJ 1/1, TAMAN PERINDUSTRIAN USJ, 47620 SUBANG JAYA, SELANGOR"
      },
      {
        "id": "cd-121",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "LIM CHEE KEONG"
      },
      {
        "id": "cd-122",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "680422105678"
      },
      {
        "id": "cd-123",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-124",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-125",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-126",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-127",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

### **3.4 Update Certificate — Fix Mismatch**

  

User corrects `reference_name` back to CUST-004791 (the PDF was for a different customer but the user knows it belongs to TOLING CORPORATION).

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00090",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "certificate_type_id": "CTY-2026-00001",
  "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
  "tax_registration_no": "B16-1808-21003508",
  "issue_date": "2025-11-04",
  "valid_till": null,
  "issuer": null,
  "status": "Active",
  "reference_doctype": "Customer",
  "reference_name": "CUST-004791",
  "remarks": "Corrected customer reference from extraction mismatch",
  "references": [
    {
      "id": "cd-120",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "NO 12, JALAN INDUSTRI USJ 1/1, TAMAN PERINDUSTRIAN USJ, 47620 SUBANG JAYA, SELANGOR"
    },
    {
      "id": "cd-121",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_name",
      "reference_value": "LIM CHEE KEONG"
    },
    {
      "id": "cd-122",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_ic",
      "reference_value": "680422105678"
    },
    {
      "id": "cd-123",
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_designation",
      "reference_value": "DIRECTOR"
    },
    {
      "id": "cd-124",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "3902309000"
    },
    {
      "id": "cd-125",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "POLYPROPYLENE COPOLYMER"
    },
    {
      "id": "cd-126",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "- - Other"
    },
    {
      "id": "cd-127",
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    }
  ]
}
```

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate updated successfully",
  "data": {
    "certificate_id": "CERT-2026-00090",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-120",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "NO 12, JALAN INDUSTRI USJ 1/1, TAMAN PERINDUSTRIAN USJ, 47620 SUBANG JAYA, SELANGOR"
      },
      {
        "id": "cd-121",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "LIM CHEE KEONG"
      },
      {
        "id": "cd-122",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "680422105678"
      },
      {
        "id": "cd-123",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "DIRECTOR"
      },
      {
        "id": "cd-124",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-125",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-126",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-127",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

User must now call `submit_certificate` to move the certificate from Draft to Submitted before it can be used for SO submission validation (same as Scenario 1 step 1.5).

  

---

  

## **Scenario 4: Cancel and Amend Certificate**

  

Certificate was submitted but needs to be revoked and replaced.

  

### **4.1 Cancel Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00080"
}
```

  

**What happens:**

  

1. Validate certificate exists, docstatus = 1 (Submitted) -> pass
    
2. No check on linked Sales Orders — cancel always allowed
    
3. `doc.cancel()` -> docstatus = 2
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate cancelled successfully",
  "data": {
    "certificate_id": "CERT-2026-00080",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 2,
    "references": [
      {
        "id": "cd-101",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      }
    ]
  }
}
```

  

Note: any future SO submit linking to CERT-2026-00080 will fail (docstatus != 1).

  

### **4.2 Amend Certificate**

  

**Request:**

  

```JSON
{
  "certificate_id": "CERT-2026-00080"
}
```

  

**What happens:**

  

1. Validate certificate exists, docstatus = 2 (Cancelled) -> pass
    
2. `doc.amend_doc()` -> creates new Draft
    
3. Copy tabCertificate Data rows to new certificate
    
4. Copy Dynamic Link (Certificate -> Customer) for new certificate
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate amended successfully",
  "data": {
    "certificate_id": "CERT-2026-00081",
    "amended_from": "CERT-2026-00080",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-130",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-131",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "TAN AH KOW"
      },
      {
        "id": "cd-132",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "750315085432"
      },
      {
        "id": "cd-133",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "MANAGING DIRECTOR"
      },
      {
        "id": "cd-134",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-135",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-136",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-137",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

**User can now:**

- Update the new draft (correct data as needed)
    
- Submit the new certificate (CERT-2026-00081)
    
- Link new SOs to CERT-2026-00081
    

---

  

## **Scenario 5: Manual Create Certificate (No Extraction)**

  

User creates a certificate manually without uploading a PDF.

  

### **5.1 Create Certificate**

  

**Request:**

  

```JSON
{
  "certificate_type_id": "CTY-2026-00001",
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "customer_id": "CUST-004791",
  "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
  "tax_registration_no": "B16-1808-21003508",
  "issue_date": "2025-11-04",
  "valid_till": null,
  "issuer": null,
  "status": "Active",
  "reference_doctype": "Customer",
  "reference_name": "CUST-004791",
  "references": [
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_name",
      "reference_value": "TAN AH KOW"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_ic",
      "reference_value": "750315085432"
    },
    {
      "ref_type": "company",
      "ref_index": 0,
      "reference_key": "contact_designation",
      "reference_value": "MANAGING DIRECTOR"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "tariff_code",
      "reference_value": "3902309000"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "commercial_description",
      "reference_value": "POLYPROPYLENE COPOLYMER"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "customs_classification",
      "reference_value": "- - Other"
    },
    {
      "ref_type": "raw_materials",
      "ref_index": 0,
      "reference_key": "effective_date",
      "reference_value": "2025-11-03"
    }
  ]
}
```

  

**What happens:**

  

1. Validate company, customer, certificate_type exist
    
2. Create Certificate doc (Draft, docstatus=0) with header fields
    
3. Translate `references` via reverse map -> store in tabCertificate Data (data_type="string", confidence=null)
    
4. Create Dynamic Link: Certificate -> Customer (CUST-004791)
    
5. No extraction, no Background Job Log
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Certificate created successfully",
  "data": {
    "certificate_id": "CERT-2026-00095",
    "reference_doctype": "Customer",
    "reference_name": "CUST-004791",
    "reference_warning": null,
    "company": "Faber-Castell (M) Sdn. Bhd.",
    "certificate_type_id": "CTY-2026-00001",
    "certificate_type": "C1",
    "certificate_type_warning": null,
    "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
    "issue_date": "2025-11-04",
    "valid_till": null,
    "tax_registration_no": "B16-1808-21003508",
    "status": "Active",
    "docstatus": 0,
    "references": [
      {
        "id": "cd-140",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "address",
        "reference_value": "WISMA GIAP CHEW, 3RD & 4TH FLOOR, NO. 28, LEBUH GEREJA, 10200 PULAU PINANG"
      },
      {
        "id": "cd-141",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_name",
        "reference_value": "TAN AH KOW"
      },
      {
        "id": "cd-142",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_ic",
        "reference_value": "750315085432"
      },
      {
        "id": "cd-143",
        "ref_type": "company",
        "ref_index": 0,
        "reference_key": "contact_designation",
        "reference_value": "MANAGING DIRECTOR"
      },
      {
        "id": "cd-144",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "tariff_code",
        "reference_value": "3902309000"
      },
      {
        "id": "cd-145",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "commercial_description",
        "reference_value": "POLYPROPYLENE COPOLYMER"
      },
      {
        "id": "cd-146",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "customs_classification",
        "reference_value": "- - Other"
      },
      {
        "id": "cd-147",
        "ref_type": "raw_materials",
        "ref_index": 0,
        "reference_key": "effective_date",
        "reference_value": "2025-11-03"
      }
    ]
  }
}
```

  

User must now call `submit_certificate` to move the certificate from Draft to Submitted before it can be used for SO submission validation (same as Scenario 1 steps 1.5-1.7).

  

---

  

## **Scenario 6: SO Submit Fails — Item HS Code Not on Certificate**

  

SO has a 0% tax item whose HS code is not covered by the C1 certificate.

  

### **6.1 Submit Sales Order with Uncovered HS Code**

  

**Request:**

  

```JSON
{
  "sales_order_id": "SO-2026-00210"
}
```

  

**SO details:**

- tax_reference: CERT-2026-00080 (has tariff_code 3902309000 only)
    
- Item: ITEM-ABS-003, hs_code = "3903300000" (ABS RESIN), tax_on_items resolves to 0%
    

**Validation checks:**

  

1. Certificate docstatus = 1 AND status = "Active" -> PASS
    
2. Certificate owner (reference_doctype="Customer", reference_name="CUST-004791") = SO customer -> PASS
    

3. HS code coverage for 0% tax items: certificate has 3902309000; item hs_code = 3903300000 -> **FAIL**

  

**Response:**

  

```JSON
{
  "error": "Unprocessable Entity",
  "message": "Item 'ITEM-ABS-003' HS code '3903300000' is not covered by certificate CERT-2026-00080."
}
```

  

HTTP 422

  

### **6.2 SO Submit Fails — Effective Date Not Yet Valid**

  

**SO details:**

- tax_reference: CERT-2026-00080 (has tariff_code 3902309000, effective_date = 2025-11-03)
    
- Item: ITEM-PP-001, hs_code = "3902309000", tax_on_items resolves to 0%
    
- SO transaction date: 2025-10-15 (before effective_date)
    

**Validation checks:**

  

1. Certificate docstatus = 1 AND status = "Active" -> PASS
    
2. Certificate owner check -> PASS
    
3. HS code coverage for 0% tax items: 3902309000 found -> PASS
    

4. Effective date: 2025-11-03 > 2025-10-15 (transaction date) -> **FAIL**

  

**Response:**

HTTP 422

```JSON
{
  "error": "Unprocessable Entity",
  "message": "Item 'ITEM-PP-001' HS code '3902309000' effective date (2025-11-03) is after the transaction date (2025-10-15)."
}
```

  

# **Case Scenario: CPO with Tax Reference (Certificate)**

  

End-to-end flow for a Customer Purchase Order (CPO) that includes a tax reference certificate, through to Sales Order creation.

  

**Context:**

- Company: Faber-Castell (M) Sdn. Bhd.
    
- Customer: TOLING CORPORATION (M) SDN BHD (CUST-004791)
    
- Certificate: CERT-2026-00050 (C3, already submitted, status=Active)
    
- CPO contains PO from customer with items covered by the certificate
    

---

  

## **Scenario 1: Happy Path — Upload CPO with Tax Reference, Update, Get Details, Submit to SO**

  

### **1.1 Upload CPO (Extraction via Middleware)**

  

CPO is received from customer and uploaded for extraction. The `tax_reference` is provided at upload time to link the certificate.

  

**Request:**

  

```JSON
{
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "customer_id": "CUST-004791",
  "tax_reference": "CERT-2026-00050",
  "file_url": null,
  "file_bytes_str": null,
  "file_s3_file_key": "uploads/cpo_toling_po_2026.pdf"
}
```

  

**What happens:**

  

1. Validate company, customer exist
    
2. Validate certificate CERT-2026-00050 exists
    
3. Create CPO doc (status="Extracting")
    
4. Create Dynamic Link: Customer Purchase Order -> Certificate (CERT-2026-00050)
    
5. Upload file to S3
    
6. Send extraction request to middleware
    
7. Return immediately
    

  

**Response:**

```JSON
{
  "status": "success",
  "message": "CPO uploaded successfully",
  "data": {
    "cpo_id": "CPO-2026-00100",
    "status": "Extracting",
    "processing_stage": "Extracting"
  }
}
```

  

---

  

### **1.2 Middleware Extraction Callback (automatic)**

  

Middleware extracts PO fields from the PDF and calls back. CPO is populated with header fields, items, charges, etc.

  

**What happens:**

  

1. Flatten extracted data into CPO fields (po_number, items, charges, etc.)
    
2. Match items to tabItem (SKU matching)
    
3. Update CPO doc with extracted fields
    
4. Status -> "Mapped" or "Partially Mapped"
    

---

  

### **1.3 Update CPO — Add Tax Reference (if not provided at upload)**

  

If the tax_reference was not provided during upload, it can be added later via update. Only fields included in the request are updated — omitted fields are ignored.

  

**Request:**

  

```JSON
{
  "cpo_id": "CPO-2026-00100",
  "tax_reference": "CERT-2026-00050"
}
```

  

**What happens:**

  

1. Validate certificate CERT-2026-00050 exists
    
2. Upsert Dynamic Link: Customer Purchase Order -> Certificate (CERT-2026-00050)
    
3. All other fields omitted — no changes to header/items/charges
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "CPO updated successfully",
  "data": {
    "cpo_id": "CPO-2026-00100",
    "cpo_name": "CPO-2026-00100",
    "status": "Mapped",
    "processing_stage": "Mapped",
    "validation_status": "passed",
    "errors": [],
    "warnings": [],
    "mapping_learning": null
  }
}
```

  

Note: To remove a tax_reference, pass `"tax_reference": ""` (empty string) — this deletes the Dynamic Link.

  

---

  

### **1.4 Get CPO Details**

  

**Request:**

```JSON
{
  "cpo_id": "CPO-2026-00100"
}
```

  

**Response:**

```JSON
{
  "status": "success",
  "message": "Successfully fetched CPO details",
  "data": {
    "cpo_id": "CPO-2026-00100",
    "sales_order": null,
    "status": "Mapped",
    "processing_stage": "Mapped",
    "mapped_percentage": 100,
    "header_fields": {
      "po_number": "PO-TLG-2026-0050",
      "po_issue_date": "2026-04-20",
      "po_due_date": "2026-05-20",
      "customer": "CUST-004791",
      "company": "Faber-Castell (M) Sdn. Bhd."
    },
    "items": [
      {
        "item_code": "ITEM-PP-001",
        "item_name": "POLYPROPYLENE COPOLYMER",
        "qty": 100,
        "rate": 50.00,
        "uom": "KG",
        "tax_on_items": "TAX-002"
      }
    ],
    "charges": [],
    "payment_terms": [],
    "attachments": [],
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00050",
      "certificate_type_id": "CTY-2026-00002",
      "certificate_type": "C3",
      "certificate_status": "Active",
      "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
      "tax_registration_no": "B16-1808-21003508"
    },
    "diagnostics_summary": null
  }
}
```

  

---

  

### **1.5 Submit CPO to Sales Order**

  

CPO is submitted, which creates a draft Sales Order with the tax_reference carried over.

  

**Request:**

```JSON
{
  "cpo_id": "CPO-2026-00100",
  "auto_submit": false
}
```

  

**What happens:**

  

1. Build SO payload from CPO doc
    
2. Get linked certificate from Dynamic Link (Customer Purchase Order -> Certificate) -> CERT-2026-00050
    
3. Include `tax_reference` in SO payload
    
4. Create Sales Order via `create_sales_order_v2`:
    
    1. Order-level: `tax_reference = "CERT-2026-00050"`
        
    2. Dynamic Link: Sales Order -> Certificate (CERT-2026-00050)
        
    3. Dynamic Link: Sales Order Item -> Certificate (for each item)
        
5. Link PO attachments from CPO to SO
    
6. Update CPO status -> "Converted"
    
7. Set CPO.sales_order = SO name
    

  

**Response:**

```JSON
{
  "status": "success",
  "message": "Successfully created Sales Order from CPO",
  "data": {
    "cpo_id": "CPO-2026-00100",
    "sales_order_id": "SO-2026-00500",
    "status": "Converted"
  }
}
```

  

---

  

### **1.6 Get Sales Order (created from CPO)**

  

The SO created from CPO includes the tax_reference at both order and item level.

  

**Request:**

```JSON
{
  "sales_order_id": "SO-2026-00500"
}
```

  

**Response (tax reference related fields):**

```JSON
{
  "status": "success",
  "message": "Successfully fetched sales order",
  "data": {
    "id": "SO-2026-00500",
    "status": null,
    "is_po_editable": false,
    "biller": {
      "id": "Faber-Castell (M) Sdn. Bhd.",
      "name": "Faber-Castell (M) Sdn. Bhd."
    },
    "customer": {
      "id": "CUST-004791",
      "name": "TOLING CORPORATION (M) SDN BHD",
      "cpo_id": "CPO-2026-00100",
      "po_number": "PO-TLG-2026-0050",
      "po_issue_date": "2026-04-20",
      "po_due_date": "2026-05-20"
    },
    "tax_on_total_id": null,
    "tax_on_total_name": null,
    "tax_on_total_rate": null,
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00050",
      "certificate_type_id": "CTY-2026-00002",
      "certificate_type": "C3",
      "certificate_status": "Active",
      "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
      "tax_registration_no": "B16-1808-21003508"
    },
    "tax_reference_certificate": null,
    "appointment_letter": null,
    "items": [
      {
        "id": "SOI-0001",
        "item_id": "ITEM-PP-001",
        "sku": "ITEM-PP-001",
        "name": "POLYPROPYLENE COPOLYMER",
        "quantity": 100,
        "unit_price": 50.00,
        "amount": 5000.00,
        "tax_on_items_id": "TAX-002",
        "tax_on_items_name": "Sales Tax 0%",
        "tax_on_items_rate": 0,
        "tax_reference_details": {
          "certificate_id": "CERT-2026-00050",
          "certificate_type_id": "CTY-2026-00002",
          "certificate_type": "C3",
          "certificate_status": "Active",
          "certificate_title": "SALES TAX ( PERSONS EXEMPTED FROM PAYMENT OF TAX ) ORDER 2018",
          "tax_registration_no": "B16-1808-21003508"
        },
        "batch_no": null,
        "hs_code": "3902309000"
      }
    ],
    "grand_total": 5000.00
  }
}
```

  

Note: `is_po_editable: false` — PO fields come from CPO, not editable on SO.

  

---

  

### **1.7 Submit Sales Order**

  

Before submitting, user must attach the required documents (tax_reference_certificate, po_attachments, appointment_letter for C3).

  

**Request:**

```JSON
{
  "sales_order_id": "SO-2026-00500"
}
```

  

**Validation checks (C3):**

1. Tax reference consistency: order-level and item-level tax_reference match -> PASS
    
2. Certificate docstatus = 1 AND status = "Active" -> PASS
    
3. Certificate owner (reference_doctype="Company", reference_name="Faber-Castell") = SO company -> PASS
    
4. Customer eligibility via Dynamic Link (Certificate -> CUST-004791) -> PASS
    
5. ORDER-LEVEL: tax_on_total = 0% AND tax_reference = "CERT-2026-00050" -> validate ALL items:
    
6. Item ITEM-PP-001:
    
    1. Item exists in tabItem -> PASS
        
    2. hs_code = 3902309000 (from tabItem) -> PASS
        
    3. HS code coverage: 3902309000 IN certificate -> PASS
        
    4. Effective date: <= today -> PASS
        
    5. Batch check: has_batch_no = 0 -> skip
        
7. Attachments: tax_reference_certificate, po_attachments, appointment_letter present -> PASS
    

  

**Response:**

```JSON
{
  "status": "success",
  "message": "Sales Order SO-2026-00500 submitted successfully",
  "data": {
    "sales_order_id": "SO-2026-00500",
    "message": "Sales Order SO-2026-00500 submitted successfully"
  }
}
```

  

---

  

## **Scenario 2: Update CPO — Remove Tax Reference**

  

User initially linked a certificate but wants to remove it.

  

### **2.1 Remove Tax Reference**

  

**Request:**

```JSON
{
  "cpo_id": "CPO-2026-00100",
  "tax_reference": ""
}
```

  

**What happens:**

1. Empty string for `tax_reference` -> delete Dynamic Link (Customer Purchase Order -> Certificate)
    
2. When CPO is submitted to SO, no `tax_reference` will be included in the SO payload
    

  

**Response:**

```JSON
{
  "status": "success",
  "message": "CPO updated successfully",
  "data": {
    "cpo_id": "CPO-2026-00100",
    "cpo_name": "CPO-2026-00100",
    "status": "Mapped",
    "processing_stage": "Mapped",
    "validation_status": "passed",
    "errors": [],
    "warnings": [],
    "mapping_learning": null
  }
}
```

  

### **2.2 Get CPO Details — No Tax Reference**

  

**Response (relevant field):**

```JSON
{
  "status": "success",
  "message": "Successfully fetched CPO details",
  "data": {
    "cpo_id": "CPO-2026-00100",
    "tax_reference_details": null
  }
}
```

  

---

  

## **Scenario 3: CPO with Tax Reference — Certificate Not Yet Submitted**

  

Chatbot links a certificate that is still in Draft (extraction not yet complete, or not yet submitted). The CPO creation succeeds, but SO submit will fail later.

  

### **3.1 Upload CPO with Draft Certificate**

  

Certificate CERT-2026-00060 exists but is still in Draft (docstatus=0, extraction still in progress or user hasn't submitted yet).

  

**Request:**

  

```JSON
{
  "company": "Faber-Castell (M) Sdn. Bhd.",
  "customer_id": "CUST-004791",
  "tax_reference": "CERT-2026-00060",
  "file_url": null,
  "file_bytes_str": null,
  "file_s3_file_key": "uploads/cpo_toling_po_2026_b.pdf"
}
```

  

**What happens:**

  

1. Validate company, customer exist -> PASS
    
2. Validate certificate CERT-2026-00060 exists -> PASS (only checks existence, NOT docstatus)
    
3. Create CPO doc
    
4. Create Dynamic Link: Customer Purchase Order -> Certificate (CERT-2026-00060)
    
5. Upload file, send to middleware
    

**Response:**

  

```JSON
{
  "status": "success",
  "message": "CPO uploaded successfully",
  "data": {
    "cpo_id": "CPO-2026-00200",
    "status": "Extracting",
    "processing_stage": "Extracting"
  }
}
```

  

Note: CPO creation succeeds — no docstatus validation on the certificate at this point.

  

### **3.2 Get CPO Details — Shows Certificate in Draft**

  

**Response (relevant field):**

  

```JSON
{
  "status": "success",
  "message": "Successfully fetched CPO details",
  "data": {
    "cpo_id": "CPO-2026-00200",
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00060",
      "certificate_type_id": "CTY-2026-00002",
      "certificate_type": "C3",
      "certificate_status": null,
      "certificate_title": null,
      "tax_registration_no": null
    }
  }
}
```

  

Note: `certificate_type_id` and `certificate_type` are available (set from upload input). `certificate_status`, `certificate_title`, `tax_registration_no` are null because extraction hasn't completed yet — these are populated by the extraction callback.

  

### **3.3 Submit CPO to Sales Order — Succeeds**

  

CPO submission to SO also succeeds — the certificate docstatus is not validated during SO creation.

  

**Response:**

  

```JSON
{
  "status": "success",
  "message": "Successfully created Sales Order from CPO",
  "data": {
    "cpo_id": "CPO-2026-00200",
    "sales_order_id": "SO-2026-00600",
    "status": "Converted"
  }
}
```

  

### **3.4 Submit Sales Order — FAILS**

  

When user tries to submit the SO, the certificate validation fails because the certificate is still in Draft.

  

**Request:**

  

```JSON
{
  "sales_order_id": "SO-2026-00600"
}
```

  

**Validation checks:**

  

1. Tax reference consistency -> PASS
    

2. Certificate docstatus = 1 AND status = "Active" -> **FAIL** (docstatus = 0, still Draft)

  

**Response:**

HTTP 422

```JSON
{
  "error": "Unprocessable Entity",
  "message": "Tax reference certificate 'CERT-2026-00060' has not been submitted yet. Please submit the certificate before submitting this Sales Order."
}
```

  

### **3.5 Resolution**

  

User must:

1. Wait for certificate extraction to complete (if still extracting)
    
2. Review and submit the certificate (`submit_certificate`)
    
3. Retry submitting the Sales Order
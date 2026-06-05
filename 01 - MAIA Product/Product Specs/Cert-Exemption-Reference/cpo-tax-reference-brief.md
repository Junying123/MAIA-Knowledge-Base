# CPO Tax Reference — Implementation Brief

**Date:** 2026-04-22 | **Author:** Fariha + Agent | **Status:** Draft

---

## CPO Upload with Tax Reference

When uploading a CPO with a `tax_reference`, the certificate must already exist and be fully processed.

### Input

```json
{
  "file_url": "https://storage.example.com/po-documents/PO-2026-001.pdf",
  "s3_file_key": null,
  "file_name": "PO-2026-001.pdf",
  "company": "COMP-00001",
  "tax_reference": "CERT-2026-00030"
}
```

### Validations

1. Certificate must **exist** in `tabCertificate`
2. Certificate must have `status = "Active"` — confirms extraction is complete and all certificate details are available

### Error messages

| Validation | Error Message |
|---|---|
| Certificate does not exist | "Certificate '{tax_reference}' not found." |
| Certificate not Active | "Certificate '{tax_reference}' is not active. Ensure certificate extraction is complete before linking to a CPO." |

---

## Update CPO with Tax Reference

User can add, change, or remove `tax_reference` on an existing CPO via `PUT /update_cpo`.

### Input

```json
{
  "cpo_id": "CPO-2026-00001",
  "header_fields": null,
  "customer_id": null,
  "company_id": null,
  "currency_id": null,
  "price_list": null,
  "transaction_date": null,
  "delivery_date": null,
  "po_number": null,
  "po_date": null,
  "tax_on_total_id": null,
  "discount_amount": null,
  "additional_discount_percentage": null,
  "remarks": null,
  "terms_and_conditions": null,
  "shipper": null,
  "tax_reference": "CERT-2026-00030",
  "items": null,
  "payment_terms": null,
  "charges": null
}
```

- `tax_reference = "CERT-..."` → link certificate to CPO (replaces existing link if any)
- `tax_reference = ""` → remove existing certificate link
- `tax_reference = null` → no change

### How certificate linking works

Certificate is linked to CPO via `tabCertificate Reference`:
- `certificate_id` = the certificate being linked
- `reference_key` = `"Customer Purchase Order"`
- `reference_value` = CPO document name

On update:
1. Validate certificate exists and `status = "Active"`
2. Delete existing certificate links for this CPO
3. Create new `Certificate Reference` row linking certificate to CPO

### Validations

1. Certificate must **exist** in `tabCertificate`
2. Certificate must have `status = "Active"`

---

## Get CPO Details

`GET /get_cpo_details` returns `tax_reference_details` with full certificate information.

### Input

```json
{
  "cpo_id": "CPO-2026-00001"
}
```

### Response (tax-related fields only)

```json
{
  "data": {
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00030",
      "company": "COMP-00001",
      "certificate_type": "C3",
      "tax_registration_no": "J31-2511-27300370",
      "certificate_title": "Sales Tax Exemption - Arising Packaging to Toling Corporation",
      "issue_date": "2026-02-01",
      "valid_till": "2026-12-31",
      "issuer": "Royal Malaysian Customs Department",
      "status": "Active",
      "remarks": null
    }
  }
}
```

Returns `null` if no certificate is linked.

---

## Submit CPO to SO (`POST /submit_cpo_to_so`)

Creates a Sales Order from CPO and optionally auto-submits it.

### Input

```json
{
  "cpo_id": "CPO-2026-00001",
  "auto_submit": true
}
```

### Response (tax-related fields only)

```json
{
  "status": "success",
  "message": "Sales Order SAL-ORD-2026-00100 created from CPO CPO-2026-00001",
  "data": {
    "cpo_id": "CPO-2026-00001",
    "sales_order_id": "SAL-ORD-2026-00100",
    "sales_order_name": "SAL-ORD-2026-00100",
    "docstatus": 1,
    "status": "Submitted",
    "validation": {
      "is_valid": true,
      "warnings": [],
      "totals": {
        "items_subtotal": 3150.00,
        "charges_total": 0,
        "calculated_total": 3150.00,
        "tax_total": 0,
        "extracted_total": 3150.00,
        "difference": 0
      },
      "mapping": {
        "passed": true,
        "results": []
      }
    },
    "tax_reference_details": {
      "certificate_id": "CERT-2026-00030",
      "company": "COMP-00001",
      "certificate_type": "C3",
      "tax_registration_no": "J31-2511-27300370",
      "certificate_title": "Sales Tax Exemption - Arising Packaging to Toling Corporation",
      "issue_date": "2026-02-01",
      "valid_till": "2026-12-31",
      "issuer": "Royal Malaysian Customs Department",
      "status": "Active",
      "remarks": null
    },
    "stock_warnings": [],
    "mapping_learning": {}
  }
}
```

### Validations (on submit)

Per-type certificate validation:
- C1: `validate_c1_sales_order()`
- C3: `validate_c3_sales_order()`
- A57: `validate_a57_sales_order()`

---

## CPO → SO Draft → Submit Flow (Scheduler)

When the scheduler creates a draft SO from a CPO with `tax_reference`:

1. SO is created as **draft** — no certificate validation at create time
2. User triggers `submit_sales_order_details()`
3. Per-type certificate validation runs:
   - C1: `validate_c1_sales_order()`
   - C3: `validate_c3_sales_order()`
   - A57: `validate_a57_sales_order()`

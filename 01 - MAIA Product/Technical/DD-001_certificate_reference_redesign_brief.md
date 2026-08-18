# Certificate API Brief

**Date:** 2026-04-21  
**Author:** Fariha  
**Status:** Draft  
**Audience:** Frontend engineers, QA, product

---

## Two ways to create a certificate

| | Manual creation | Middleware extraction (PDF upload) |
|---|---|---|
| **How** | User reads the physical certificate and keys in the values | User uploads PDF, middleware extracts data automatically |
| **References** | User enters `references[]` as free-text key-value rows | No `references` — raw extraction stored in `extracted_data[]` |
| **Extracted data** | Empty `[]` | Populated with raw key-value pairs + confidence scores |
| **Parent fields** | User-entered | Auto-populated from extraction mapping |

---

## 1. Manual Creation

User reads the certificate document and enters the data directly.

**Validation rules:**
- **Parent fields** — validated against existing records (e.g. `company` must exist in Company, `reference_name` must exist in `reference_doctype`, `certificate_type` must exist in Certificate Type)
- **Reference fields** — no validation. All free text. Users can enter any value exactly as it appears on the physical certificate, even when it doesn't match any existing record in the system.

### Endpoint

`POST certificate.create_certificate`

### Request

```json
{
  "reference_doctype": "Customer",
  "reference_name": "CUST-00001",
  "company": "COMP-00001",
  "certificate_type": "CTY-2026-00002",
  "certificate_title": "Sales Tax Exemption - Arising Packaging to Toling Corporation",
  "tax_registration_no": "J31-2511-27300370",
  "status": "Active",
  "issue_date": "2025-11-07",
  "valid_till": null,
  "issuer": "Royal Malaysian Customs Department (JKDM)",
  "remarks": "SMK Registration No: J31202500011508.",
  "certificate_attachment": {
    "file_url": null,
    "file_bytes_str": null,
    "file_s3_file_key": "certificates/ARISING_J31-2511-27300370.pdf",
    "file_name": "ARISING J31-2511-27300370.pdf"
  },
  "additional_attachments": [],
  "references": [
    {
      "ref_type": "eligible_customer",
      "ref_index": 0,
      "reference_key": "customer_name",
      "reference_value": "ARISING PACKAGING SDN. BHD."
    },
    {
      "ref_type": "eligible_customer",
      "ref_index": 0,
      "reference_key": "sst_registration_no",
      "reference_value": "J31-2408-22200003"
    },
    {
      "ref_type": "customer_address",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "LOT205133 JALAN SAGAI 2 TAMAN PASIR PUTIH, 81700 PASIR GUDANG JOHOR"
    },
    {
      "ref_type": "customer_contact",
      "ref_index": 0,
      "reference_key": "name",
      "reference_value": "TAN TEE HOW"
    },
    {
      "ref_type": "customer_contact",
      "ref_index": 0,
      "reference_key": "designation",
      "reference_value": "DIRECTOR"
    },
    {
      "ref_type": "customer_contact",
      "ref_index": 0,
      "reference_key": "ic_number",
      "reference_value": "830530016599"
    },
    {
      "ref_type": "company_address",
      "ref_index": 0,
      "reference_key": "address",
      "reference_value": "3RD FLOOR, WISMA GIAP CHEW, 28 LEBUH GEREJA, 10200 PULAU PINANG"
    },
    {
      "ref_type": "local_purchase_raw_materials",
      "ref_index": 1,
      "reference_key": "hs_code",
      "reference_value": "3901200000"
    },
    {
      "ref_type": "local_purchase_raw_materials",
      "ref_index": 1,
      "reference_key": "classification",
      "reference_value": "Polyethylene having a specific gravity of 0.94 or more"
    },
    {
      "ref_type": "local_purchase_raw_materials",
      "ref_index": 1,
      "reference_key": "description",
      "reference_value": "HDPE0972"
    },
    {
      "ref_type": "local_purchase_raw_materials",
      "ref_index": 1,
      "reference_key": "effective_date",
      "reference_value": "2025-11-05"
    }
  ]
}
```

### Get Certificate response (manual)

Returns the certificate with the user-entered references. `extracted_data` is empty.

```json
{
  "status": "success",
  "data": {
    "certificate_id": "CERT-00046",
    "certificate_type": "C3",
    "tax_registration_no": "J31-2511-27300370",
    "status": "Active",
    "issue_date": "2025-11-07",
    "references": [
      {
        "ref_type": "eligible_customer",
        "ref_index": 0,
        "reference_key": "customer_name",
        "reference_value": "ARISING PACKAGING SDN. BHD."
      },
      {
        "ref_type": "local_purchase_raw_materials",
        "ref_index": 1,
        "reference_key": "hs_code",
        "reference_value": "3901200000"
      }
    ],
    "extracted_data": []
  }
}
```

---

## 2. Middleware Extraction (PDF Upload)

User uploads a PDF. Middleware extracts data from the document automatically. The backend stores the raw extraction results in `extracted_data` and auto-populates basic parent fields (like `tax_registration_no`, `issue_date`, `certificate_type`). No `references` are created — all extracted information lives in `extracted_data`.

### Endpoint

`POST certificate.upload_certificate_async`

### Get Certificate response (extracted)

Returns the certificate with auto-populated parent fields and raw extraction data. `references` is empty.

```json
{
  "status": "success",
  "data": {
    "certificate_id": "CERT-00047",
    "certificate_type": "C3",
    "tax_registration_no": "J31-2511-27300370",
    "status": "Active",
    "issue_date": "2025-11-07",
    "references": [],
    "extracted_data": [
      {
        "key": "sales_tax_registration_number",
        "value": "J31-2511-27300370",
        "data_type": "string",
        "confidence": 0.98
      },
      {
        "key": "approved_company_name",
        "value": "ARISING PACKAGING SDN. BHD.",
        "data_type": "string",
        "confidence": 0.97
      },
      {
        "key": "local_purchase_items[0].tariff_code",
        "value": "3901200000",
        "data_type": "string",
        "confidence": 0.93
      }
    ]
  }
}
```

> Both examples are abbreviated — full response includes all parent fields, attachments, and metadata.

---

## Reference fields

Each reference is a key-value row. All fields are free text.

| Field | Type | Default | Description |
|---|---|---|---|
| `ref_type` | string | null | Category (e.g. `local_purchase_raw_materials`, `customer_contact`) |
| `ref_index` | int | 0 | Row number within category. `0` for single-value, `1, 2, 3...` for table rows |
| `reference_key` | string | null | Field name (e.g. `hs_code`, `name`, `address`) |
| `reference_value` | string | null | The actual value |

### How to reconstruct a table from references

```
1. Filter by ref_type
2. Group by ref_index
3. Each group = one table row
4. reference_key = column name, reference_value = cell value
```

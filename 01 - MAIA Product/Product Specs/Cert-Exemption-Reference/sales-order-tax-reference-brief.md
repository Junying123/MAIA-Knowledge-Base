# Sales Order Tax Reference — Implementation Brief

**Date:** 2026-04-22 | **Author:** Fariha + Agent | **Status:** Draft

---

## C1 — Item-Level Tax Exemption

C1 certificates are **customer-owned**. Tax exemption is applied **per item**.

- `tax_reference` set at **both order level and item level** — order level identifies the certificate, item level marks which items are covered
- `tax_on_total_id` must be `null` when `tax_reference` is provided
- `tax_reference` on an item validates that the item is eligible for the 0% tax template — items with `tax_reference` must have a 0% `tax_on_items_id`

### Input

```json
{
  "config": {
    "fulfillment_method": "DELIVERY",
    "currency_id": "MYR"
  },
  "biller": {
    "id": "COMP-00001",
    "date": "2026-04-22T00:00:00",
    "delivery_date": "2026-04-29T00:00:00"
  },
  "customer": {
    "id": "CUST-00050",
    "billing_address_id": "ADDR-00100",
    "shipping_address_id": "ADDR-00100"
  },
  "items": [
    {
      "sku": "ITEM-001",
      "quantity": 100,
      "unit_price": 25.50,
      "tax_on_items_id": "No Tax - MA",
      "tax_reference": "CERT-2026-00046"
    },
    {
      "sku": "ITEM-002",
      "quantity": 50,
      "unit_price": 12.00,
      "tax_on_items_id": "SST 6% - MA",
      "tax_reference": null
    },
    {
      "sku": "ITEM-003",
      "quantity": 200,
      "unit_price": 5.00,
      "tax_on_items_id": "No Tax - MA",
      "tax_reference": "CERT-2026-00046"
    }
  ],
  "tax_on_total_id": null,
  "tax_reference": "CERT-2026-00046",
  "tax_reference_certificate": {
    "id": "FILE-00200",
    "file_url": null,
    "file_bytes_str": null,
    "file_s3_file_key": null,
    "file_name": null,
    "index": null
  },
  "charges": [],
  "discount_amount": 0
}
```

### Response (tax-related fields only)

```json
{
  "tax_on_total_id": null,
  "tax_on_total_name": null,
  "tax_on_total_rate": null,
  "tax_reference_details": {
    "certificate_id": "CERT-2026-00046",
    "certificate_type": "C1",
    "certificate_status": "Active",
    "tax_registration_no": "C1-2026-00123"
  },
  "items": [
    {
      "sku": "ITEM-001",
      "tax_on_items_id": "No Tax - MA",
      "tax_on_items_rate": 0.0,
      "tax_reference_details": {
        "certificate_id": "CERT-2026-00046",
        "company": "COMP-00001",
        "certificate_type": "C1",
        "tax_registration_no": "C1-2026-00123",
        "certificate_title": "C1 Tax Exemption - Acme Manufacturing",
        "issue_date": "2026-01-15",
        "valid_till": "2026-12-31",
        "issuer": "Royal Malaysian Customs Department",
        "status": "Active",
        "remarks": null
      }
    },
    {
      "sku": "ITEM-002",
      "tax_on_items_id": "SST 6% - MA",
      "tax_on_items_rate": 6.0,
      "tax_reference_details": {
        "certificate_id": "CERT-2026-00046",
        "company": "COMP-00001",
        "certificate_type": "C1",
        "tax_registration_no": "C1-2026-00123",
        "certificate_title": "C1 Tax Exemption - Acme Manufacturing",
        "issue_date": "2026-01-15",
        "valid_till": "2026-12-31",
        "issuer": "Royal Malaysian Customs Department",
        "status": "Active",
        "remarks": null
      }
    },
    {
      "sku": "ITEM-003",
      "tax_on_items_id": "No Tax - MA",
      "tax_on_items_rate": 0.0,
      "tax_reference_details": {
        "certificate_id": "CERT-2026-00046",
        "company": "COMP-00001",
        "certificate_type": "C1",
        "tax_registration_no": "C1-2026-00123",
        "certificate_title": "C1 Tax Exemption - Acme Manufacturing",
        "issue_date": "2026-01-15",
        "valid_till": "2026-12-31",
        "issuer": "Royal Malaysian Customs Department",
        "status": "Active",
        "remarks": null
      }
    }
  ]
}
```

### Validations (on submit only)

1. Certificate must belong to the **customer**
2. Certificate must be **Active**
3. When `tax_reference` is provided, must **not** have `tax_on_total_id` — C1 is item-level only
4. Each 0% tax item must have a valid `hs_code` in `tabItem`
5. Each 0% tax item's `hs_code` must exist in the certificate's HS codes
6. Warning (non-blocking) if no items have 0% tax
7. `tax_reference_certificate` attachment required

---

## C3 — Order-Level Tax Exemption (Company-Owned)

C3 certificates are **company-owned**. The customer must be an **eligible buyer** on the certificate. Tax exemption applies at the **order level**.

- `tax_reference` set at **order level**
- `tax_on_total_id` must be a **0% rate** template
- `items[].tax_reference` is not accepted in input — certificate applies at order level only. In the response, `tax_reference_details` is returned at both order level and every item level for display purposes

### Input

```json
{
  "config": {
    "fulfillment_method": "DELIVERY",
    "currency_id": "MYR"
  },
  "biller": {
    "id": "COMP-00001",
    "date": "2026-04-22T00:00:00",
    "delivery_date": "2026-04-29T00:00:00"
  },
  "customer": {
    "id": "CUST-00001",
    "billing_address_id": "ADDR-00050",
    "shipping_address_id": "ADDR-00050"
  },
  "items": [
    {
      "sku": "ITEM-001",
      "quantity": 100,
      "unit_price": 25.50,
      "batch_no": "BATCH-001",
      "tax_on_items_id": null,
      "tax_reference": null
    },
    {
      "sku": "ITEM-002",
      "quantity": 50,
      "unit_price": 12.00,
      "batch_no": "BATCH-002",
      "tax_on_items_id": null,
      "tax_reference": null
    }
  ],
  "tax_on_total_id": "No Tax - MA",
  "tax_reference": "CERT-2026-00030",
  "tax_reference_certificate": {
    "id": "FILE-00300",
    "file_url": null,
    "file_bytes_str": null,
    "file_s3_file_key": null,
    "file_name": null,
    "index": null
  },
  "po_attachments": [
    {
      "id": "FILE-00301",
      "file_url": null,
      "file_bytes_str": null,
      "file_s3_file_key": null,
      "file_name": null,
      "index": null
    }
  ],
  "appointment_letter": {
    "file_s3_file_key": "certificates/C3_APPT.pdf",
    "file_name": "C3_appointment.pdf"
  },
  "charges": [],
  "discount_amount": 0
}
```

### Response (tax-related fields only)

```json
{
  "tax_on_total_id": "No Tax - MA",
  "tax_on_total_name": "No Tax",
  "tax_on_total_rate": 0.0,
  "tax_reference_details": {
    "certificate_id": "CERT-2026-00030",
    "certificate_type": "C3",
    "certificate_status": "Active",
    "tax_registration_no": "J31-2511-27300370"
  },
  "items": [
    {
      "sku": "ITEM-001",
      "tax_on_items_id": "",
      "tax_on_items_rate": null,
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
    },
    {
      "sku": "ITEM-002",
      "tax_on_items_id": "",
      "tax_on_items_rate": null,
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
  ]
}
```

### Validations (on submit only)

1. Certificate must belong to the **company**
2. **Customer must be eligible** — listed in Certificate Reference or Certificate Data
3. Certificate must be **Active**
4. `tax_on_total_id` must resolve to **0% rate**
5. **All items** must have a valid `hs_code` in `tabItem`
6. **All items'** `hs_code` must exist in the certificate's HS codes
7. `tax_reference_certificate` attachment required
8. `po_attachments` required
9. `appointment_letter` required

---

## A57 — Order-Level Tax Exemption (Company-Owned)

A57 certificates are **company-owned**. Tax exemption applies at the **order level**.

- `tax_reference` set at **order level**
- `tax_on_total_id` must be a **0% rate** template
- `items[].tax_reference` is not accepted in input — certificate applies at order level only. In the response, `tax_reference_details` is returned at both order level and every item level for display purposes

### Input

```json
{
  "config": {
    "fulfillment_method": "DELIVERY",
    "currency_id": "MYR"
  },
  "biller": {
    "id": "COMP-00001",
    "date": "2026-04-22T00:00:00",
    "delivery_date": "2026-04-29T00:00:00"
  },
  "customer": {
    "id": "CUST-00075",
    "billing_address_id": "ADDR-00200",
    "shipping_address_id": "ADDR-00200"
  },
  "items": [
    {
      "sku": "ITEM-010",
      "quantity": 500,
      "unit_price": 3.00,
      "batch_no": "BATCH-010",
      "tax_on_items_id": null,
      "tax_reference": null
    }
  ],
  "tax_on_total_id": "No Tax - MA",
  "tax_reference": "CERT-2026-00055",
  "tax_reference_certificate": {
    "id": "FILE-00400",
    "file_url": null,
    "file_bytes_str": null,
    "file_s3_file_key": null,
    "file_name": null,
    "index": null
  },
  "lmw": {
    "file_s3_file_key": "certificates/LMW.pdf",
    "file_name": "LMW.pdf"
  },
  "lampiran_a2": {
    "file_s3_file_key": "certificates/LAMPIRAN_A2.pdf",
    "file_name": "Lampiran_A2.pdf"
  },
  "charges": [],
  "discount_amount": 0
}
```

### Response (tax-related fields only)

```json
{
  "tax_on_total_id": "No Tax - MA",
  "tax_on_total_name": "No Tax",
  "tax_on_total_rate": 0.0,
  "tax_reference_details": {
    "certificate_id": "CERT-2026-00055",
    "certificate_type": "A57",
    "certificate_status": "Active",
    "tax_registration_no": "A57-2026-00789"
  },
  "items": [
    {
      "sku": "ITEM-010",
      "tax_on_items_id": "",
      "tax_on_items_rate": null,
      "tax_reference_details": {
        "certificate_id": "CERT-2026-00055",
        "company": "COMP-00001",
        "certificate_type": "A57",
        "tax_registration_no": "A57-2026-00789",
        "certificate_title": "A57 Tax Exemption - Toling Corporation",
        "issue_date": "2026-03-01",
        "valid_till": "2026-12-31",
        "issuer": "Royal Malaysian Customs Department",
        "status": "Active",
        "remarks": null
      }
    }
  ]
}
```

### Validations (on submit only)

1. Certificate must belong to the **company**
2. Certificate must be **Active**
3. `tax_on_total_id` must resolve to **0% rate**
4. **All items** must have a valid `hs_code` in `tabItem`
5. **All items'** `hs_code` must exist in the certificate's HS codes
6. `tax_reference_certificate` attachment required

**Optional documents:** `po_attachments`, `lmw`, `lampiran_a2`

---

## Update Sales Order — Tax Reference

User can add, change, or remove `tax_reference` on an existing draft SO via `PUT /update_sales_order_details`.

- `tax_reference = "CERT-..."` → link certificate to SO (replaces existing link if any)
- `tax_reference = null` → no change to existing link
- `tax_reference` removed/cleared → remove existing certificate link

### Input (C3 example — changing tax reference)

```json
{
  "id": "SAL-ORD-2026-00100",
  "config": {
    "fulfillment_method": "DELIVERY",
    "currency_id": "MYR"
  },
  "biller": {
    "id": "COMP-00001",
    "date": "2026-04-22T00:00:00",
    "delivery_date": "2026-04-29T00:00:00"
  },
  "customer": {
    "id": "CUST-00001",
    "billing_address_id": "ADDR-00050",
    "shipping_address_id": "ADDR-00050"
  },
  "items": [
    {
      "id": "SOI-00010",
      "sku": "ITEM-001",
      "quantity": 100,
      "unit_price": 25.50,
      "batch_no": "BATCH-001",
      "tax_on_items_id": null,
      "tax_reference": null
    }
  ],
  "tax_on_total_id": "No Tax - MA",
  "tax_reference": "CERT-2026-00030",
  "tax_reference_certificate": {
    "id": "FILE-00300",
    "file_url": null,
    "file_bytes_str": null,
    "file_s3_file_key": null,
    "file_name": null,
    "index": null
  },
  "charges": [],
  "discount_amount": 0
}
```

### Response

Same response structure as create — `tax_reference_details` populated at both order level and item level based on the updated certificate.

---

## File Attachment Input (`FileInput`)

All file fields (`tax_reference_certificate`, `po_attachments`, `appointment_letter`, `lmw`, `lampiran_a2`) accept a `FileInput` object. Only **one** of the following needs to be provided:

```json
{
  "id": "FILE-00200",              // existing tabFile ID (e.g., from certificate/CPO creation)
  "file_url": "https://...",       // public URL to download from
  "file_bytes_str": "base64...",   // base64-encoded file content
  "file_s3_file_key": "certs/...",  // S3 object key
  "file_name": "document.pdf",    // local file path on server
  "index": null                    // optional ordering
}
```

---

## How HS Code Matching Works

Certificates can be created in two ways, each storing HS codes differently:

1. **AI extraction from PDF** — HS codes are extracted and stored in `tabCertificate Data` as key-value pairs (e.g., `goods[0].tariff_code` → `1234.56.78`)
2. **Manual creation via API** — HS codes are stored in `tabCertificate Reference` with `reference_key = "hs_code"`

**Validation flow per item:**

1. Get item's `hs_code` from `tabItem` using the SKU — if missing, raise error
2. Check if the item's `hs_code` exists in `tabCertificate Data` (keys matching `*.tariff_code`) for this certificate
3. If not found, check if the item's `hs_code` exists in `tabCertificate Reference` (`reference_value`) for this certificate
4. If not found in either — raise error: item's HS code is not covered by the certificate

---

## Appendix: No Certificate — Standard Order

No tax reference validation. Standard tax applied.

### Input

```json
{
  "config": {
    "fulfillment_method": "DELIVERY",
    "currency_id": "MYR"
  },
  "biller": {
    "id": "COMP-00001",
    "date": "2026-04-22T00:00:00",
    "delivery_date": "2026-04-29T00:00:00"
  },
  "customer": {
    "id": "CUST-00010",
    "billing_address_id": "ADDR-00020",
    "shipping_address_id": "ADDR-00020"
  },
  "items": [
    {
      "sku": "ITEM-005",
      "quantity": 10,
      "unit_price": 100.00,
      "tax_on_items_id": null,
      "tax_reference": null
    }
  ],
  "tax_on_total_id": "SST 6% - MA",
  "tax_reference": null,
  "charges": [],
  "discount_amount": 0
}
```

### Response (tax-related fields only)

```json
{
  "tax_on_total_id": "SST 6% - MA",
  "tax_on_total_name": "SST 6%",
  "tax_on_total_rate": 6.0,
  "tax_reference_details": null,
  "items": [
    {
      "sku": "ITEM-005",
      "tax_on_items_id": "",
      "tax_on_items_name": null,
      "tax_on_items_rate": null,
      "tax_reference_details": null
    }
  ]
}
```
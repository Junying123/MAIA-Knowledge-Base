# Get Tax Reference Listing — API Brief

**Date:** 2026-04-22
**Author:** Fariha
**Audience:** Frontend engineers, QA, product

---

## What this API does

Pass a `customer_id` — get back all tax exemption certificates that customer is eligible for. One call covers all certificate types (C1, C3, A57).

---

## Endpoint

`POST certificate.get_tax_reference_listing`

---

## How it finds certificates per type

| Type | How the customer is linked |
|---|---|
| **C1** | Customer is the certificate owner |
| **C3** | Customer name appears in the certificate's reference data |
| **A57** | Customer name appears in the certificate's extracted data |

The API handles all of this — just pass `customer_id`.

---

## Request

**All fields are optional.**

- **With `customer_id`** — returns only certificates where that customer is eligible
- **Without `customer_id`** — returns all certificates matching the filters (no eligibility check)

### Basic example

```json
{
  "customer_id": "CUST-001",
  "filters": [
    { "column": "company", "operator": "=", "value": "COMP-001" },
    { "column": "status", "operator": "=", "value": "Active" }
  ]
}
```

### With expiry filter

```json
{
  "customer_id": "CUST-001",
  "filters": [
    { "column": "company", "operator": "=", "value": "COMP-001" },
    { "column": "status", "operator": "=", "value": "Active" },
    { "column": "valid_till", "operator": ">=", "value": "2026-04-22" }
  ]
}
```

### Filter by certificate type

```json
{
  "customer_id": "CUST-001",
  "filters": [
    { "column": "company", "operator": "=", "value": "COMP-001" },
    { "column": "certificate_type", "operator": "=", "value": "C3" }
  ]
}
```

### Search

```json
{
  "customer_id": "CUST-001",
  "search": "J31-2511"
}
```

### All available filter columns

All response fields can be used for filtering, searching, and sorting.

| Column | Example values |
|---|---|
| `certificate_id` | `"CERT-00048"` |
| `certificate_type` | `"C1"`, `"C3"`, `"A57"` |
| `certificate_type_id` | `"CTY-2026-00001"` |
| `certificate_category` | `"Tax Exemption"` |
| `tax_registration_no` | `"A10-2507-27300034"` |
| `status` | `"Active"` |
| `issue_date` | `"2025-07-01"` |
| `valid_till` | `"2026-04-22"` |
| `issuer` | `"JKDM"` |
| `reference_doctype` | `"Customer"`, `"Company"` |
| `reference_name` | `"CUST-001"`, `"COMP-001"` |
| `company` | `"COMP-001"` |
| `customer_id` | `"CUST-001"` |
| `created_at` | `"2025-07-01"` |
| `updated_at` | `"2025-07-01"` |
| `created_by` | `"admin@example.com"` |
| `updated_by` | `"admin@example.com"` |

**Operators:** `=`, `!=`, `>`, `<`, `>=`, `<=`, `in`, `not in`, `like`, `not like`, `between`, `startswith`, `endswith`, `contains`, `is`, `is not`

---

## Response

```json
{
  "status": "success",
  "data": {
    "tax_references": [
      {
        "certificate_id": "CERT-00048",
        "certificate_type_id": "CTY-2026-00001",
        "certificate_type": "C1",
        "certificate_category": "Tax Exemption",
        "tax_registration_no": "A10-2507-27300034",
        "status": "Active",
        "issue_date": "2025-07-01",
        "valid_till": "2026-07-01",
        "issuer": "JKDM",
        "reference_doctype": "Customer",
        "reference_name": "CUST-001",
        "company": "COMP-001",
        "customer_id": "CUST-001",
        "created_at": "2025-07-01T10:00:00",
        "updated_at": "2025-07-01T10:00:00",
        "created_by": "admin@example.com",
        "updated_by": "admin@example.com"
      },
      {
        "certificate_id": "CERT-00050",
        "certificate_type_id": "CTY-2026-00002",
        "certificate_type": "C3",
        "certificate_category": "Tax Exemption",
        "tax_registration_no": "J31-2511-27300370",
        "status": "Active",
        "issue_date": "2025-11-07",
        "valid_till": "2026-11-07",
        "issuer": "JKDM",
        "reference_doctype": "Company",
        "reference_name": "COMP-001",
        "company": "COMP-001",
        "customer_id": "CUST-001",
        "created_at": "2025-11-07T08:00:00",
        "updated_at": "2025-11-07T08:00:00",
        "created_by": "admin@example.com",
        "updated_by": "admin@example.com"
      },
      {
        "certificate_id": "CERT-00051",
        "certificate_type_id": "CTY-2026-00003",
        "certificate_type": "A57",
        "certificate_category": "Tax Exemption",
        "tax_registration_no": "P11-2511-27100582",
        "status": "Active",
        "issue_date": "2025-11-12",
        "valid_till": "2026-05-12",
        "issuer": "KASTAM DIRAJA MALAYSIA",
        "reference_doctype": "Company",
        "reference_name": "COMP-001",
        "company": "COMP-001",
        "customer_id": "CUST-001",
        "created_at": "2025-11-12T10:00:00",
        "updated_at": "2025-11-12T10:00:00",
        "created_by": "admin@example.com",
        "updated_by": "admin@example.com"
      }
    ],
    "pagination": {
      "total_rows": 3,
      "total_pages": 1,
      "current_page": 1,
      "has_next_page": false,
      "has_prev_page": false
    }
  }
}
```

---

## Errors

| Scenario | Response |
|---|---|
| `customer_id` not found | Validation error |
| Invalid filter column or operator | Validation error |

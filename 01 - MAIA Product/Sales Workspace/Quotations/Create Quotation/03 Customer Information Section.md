---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Customer Information Section — UI Testing

**Form:** `/sales/quotations/new`

---

## Fields Overview

| Field | Type | Required | Dependency | Notes |
|-------|------|----------|------------|-------|
| Customer | Dropdown | Yes | Company selected | 61 customers available |
| Contact Person | Combobox | Yes | Customer selected | Auto-populates if available |
| Billing Address | Combobox | Yes | Contact Person selected | Auto-populates if available |
| Shipping Address | Combobox | Yes | Contact Person selected | Auto-populates if available |

---

## Customer Field

**61 customers available.** Key customers tested:

- **Azib** — has contact person and addresses (auto-population works)
- **Tech Solutions Sdn Bhd (CUST-000002)** — no contacts or addresses

Other notable customers include: Acme Manufacturing, Aang, Awan, Evergreen Supplies, Golden Harvest, Hana Azman, ZUS COFFEE, and multiple Tech Solutions / Naruto / kuko variants.

**Validation error:** "Customer is required"

---

## Contact Person (Customer)

Enabled after customer selection. Options vary by customer.

| Customer | Contact Person |
|---------|---------------|
| Tech Solutions (CUST-000002) | "No contacts available" |
| Azib | `azib azibiqbal01@gmail.com +60102144281` (auto-populated) |

**Validation error:** "Customer contact person is required"

---

## Billing Address

Enabled after contact person selection. Options vary by customer.

| Customer | Billing Address |
|---------|----------------|
| Tech Solutions (CUST-000002) | "No addresses available" |
| Azib | `KLPTC, 123, NILAI, Negeri Sembilan, 71800, Malaysia` (auto-populated) |

**Validation error:** "Customer billing address is required"

---

## Shipping Address

Same behavior as Billing Address.

| Customer | Shipping Address |
|---------|----------------|
| Tech Solutions (CUST-000002) | "No addresses available" |
| Azib | `KLPTC, 123, NILAI, Negeri Sembilan, 71800, Malaysia` (auto-populated) |

**Validation error:** "Shipping address is required"

---

## Dependency Chain

```
Company selected (Biller) →
  Customer enabled →
    Contact Person enabled →
      Billing Address enabled
      Shipping Address enabled
```

---

## Auto-Population Summary

**Azib customer test case:**
1. Select Customer: Azib
2. Contact Person: Auto-populated ✅
3. Billing Address: Auto-populated ✅
4. Shipping Address: Auto-populated ✅

Auto-population works immediately after customer selection when data is available.

---

## Test Results

| Field | Status |
|-------|--------|
| Customer dropdown (61 customers) | ✅ Working |
| Contact Person — with data (Azib) | ✅ Working |
| Contact Person — no data (Tech Solutions) | ✅ Shows "No contacts available" |
| Billing Address auto-population | ✅ Working |
| Shipping Address auto-population | ✅ Working |
| Validation errors | ✅ Working |
| Dependency chain | ✅ Working |

---

## See Also

- [[Create Quotation Exploration]]
- [[Biller Information Section]]
- [[Items Section]]

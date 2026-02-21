---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Biller Information Section — UI Testing

**Form:** `/sales/quotations/new`

---

## Fields Overview

| Field | Type | Required | Options | Notes |
|-------|------|----------|---------|-------|
| Company | Dropdown | Yes | 9 companies | Primary dependency |
| Contact Person | Combobox | Yes | 1 (MAIA) | Auto-filled on company select |
| Address | Combobox | Yes | 1 (MAIA) | Auto-filled on company select |
| Fulfillment Method | Dropdown | Yes | 3 options | Enabled after company select |
| Tax Type | Dropdown | Yes | 2 options | Enabled after company select |

---

## Company Field

**9 Available Companies:**
1. AstraNova Technologies Sdn Bhd
2. BritTech Solutions Ltd
3. Farmshop
4. Farmshop (Demo)
5. MAIA
6. NovaEdge2 Solutions Sdn Bhd
7. Test
8. Test Company
9. WOW Sdn Bhd

**Validation error:** "Company is required"

---

## Contact Person (Biller)

Auto-filled when company is selected.

**MAIA contact:** `MAIA maia@gmail.com +60123456789`

**Validation error:** "Contact person is required"

---

## Address (Biller)

Auto-filled when company is selected.

**MAIA address:** `C188, Block C, Kolej Kediaman Ke-13 Universiti Malaya, Jln Profesor Diraja Ungku Aziz, Petaling Jaya, Selangor, 46350, Malaysia`

**Validation error:** "Address is required"

---

## Fulfillment Method

Enabled after company selected. Shows "Select company first..." until then.

**3 Options:**
1. Delivery
2. Delivery (COD) — Cash on Delivery
3. Pick Up

**Validation error:** "Fulfillment method is required"

---

## Tax Type

Enabled after company selected.

**2 Options:**
1. Tax on Items
2. Tax on Total

**Validation error:** "Tax type is required"

---

## Dependency Chain

```
Company selected →
  ├── Contact Person — auto-populated
  ├── Address — auto-populated
  ├── Fulfillment Method — enabled
  ├── Tax Type — enabled
  └── Customer (Customer Info section) — enabled
```

---

## Test Results

| Field | Status |
|-------|--------|
| Company dropdown (9 options) | ✅ Working |
| Contact Person auto-fill | ✅ Working |
| Address auto-fill | ✅ Working |
| Fulfillment Method (3 options) | ✅ Working |
| Tax Type (2 options) | ✅ Working |
| Validation errors | ✅ Working |

---

## API Notes

API errors (417) observed for Tax Type and Order Type dropdowns during testing. These did not prevent form functionality but should be investigated.

---

## See Also

- [[Create Quotation Exploration]]
- [[Customer Information Section]]
- [[Tax Refactoring]]

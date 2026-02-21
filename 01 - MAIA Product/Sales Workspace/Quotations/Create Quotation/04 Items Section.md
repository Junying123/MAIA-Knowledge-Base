---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Items Section — UI Testing

**Form:** `/sales/quotations/new`

---

## Table Columns

| Column | Editable | Notes |
|--------|----------|-------|
| No. | No | Auto-assigned |
| SKU | Yes | Opens searchable combobox |
| Name | Yes | Auto-populated after SKU select |
| UoM | No | Auto-populated (read-only) |
| Quantity | Yes | Default: 0; auto-set to 1 after SKU select |
| Unit Price | Yes | Auto-populated after SKU select |
| Additional Notes | Yes | Optional text field |
| Amount | No | Quantity × Unit Price (auto-calculated) |

---

## Auto-Population on SKU Selection

Selecting a SKU auto-populates:
- Name → e.g., "Nestle Premium 3-in-1 Coffee Mix" from "COFFEE-NESTLE-001"
- UoM → e.g., "Box"
- Quantity → Set to "1"
- Unit Price → e.g., "RM 15.90"
- Amount → Quantity × Unit Price = RM 15.90

**Important:** SKU must be selected first. Selecting Name without SKU shows validation error and does NOT populate other fields.

---

## SKU Options (18+ available)

Examples: COFFEE-NESTLE-001, DAIRY-MILK-FRESH-001, EYEWEAR-POLARIZED-001, KUS-5001, MEAL-001 through MEAL-009, SKU-5029, SKU-5031, SKU-6031, SUK-5001

Dropdown includes "Advance Search" button for extended search.

---

## Row Management

**Adding rows:** "Add Item" button below table adds a new row.

**Removing rows:**
1. **Remove Item (×) button** — appears next to SKU/Name after item selected; removes entire row
2. **Checkbox-based deletion** — check row checkbox(es), "Delete" button appears below "Add Item", click to delete

**Row 1** — protected; checkbox disabled, cannot be deleted.

---

## Calculations

```
Amount = Quantity × Unit Price (triggers on blur)
Summary Subtotal = Sum of all item Amounts
Grand Total = Subtotal + Charges − Discount
Payment Amount = Grand Total × Portion %
```

All cascade updates happen automatically.

---

## Test Results

| Feature | Status |
|---------|--------|
| SKU dropdown (18+ options) | ✅ Working |
| Auto-population after SKU select | ✅ Working |
| Quantity editing + recalculation | ✅ Working |
| Unit Price editing + recalculation | ✅ Working |
| Additional Notes editing | ✅ Working |
| Add Item button | ✅ Working |
| Remove Item (×) button | ✅ Working |
| Checkbox-based row deletion | ✅ Working |
| Row 1 protection | ✅ Working |
| Summary cascade updates | ✅ Working |

---

## Known Limitation

Name field selection without SKU does NOT populate other fields. Current implementation requires SKU first.

---

## See Also

- [[Create Quotation Exploration]]
- [[Summary Section]]
- [[Products by Company]]

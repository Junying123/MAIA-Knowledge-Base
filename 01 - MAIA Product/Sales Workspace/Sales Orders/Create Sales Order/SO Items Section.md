---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# SO Items Section — UI Testing

**Form:** `/sales/orders/new`

> **Note:** Identical to Quotations Items section. Behavior, fields, and validations are the same.

---

## Table Structure

| Column | Editable | Notes |
|--------|----------|-------|
| No. | No | Auto-assigned |
| SKU | Yes | Button → opens searchable combobox |
| Name | Yes | Mirrors SKU list; selecting syncs SKU |
| UoM | No | Auto-populated from SKU (read-only) |
| Quantity | Yes | Default 0 → auto-set to 1 on SKU select; inline spinbutton |
| Unit Price | Yes | Auto-populated from SKU; inline spinbutton |
| Additional Notes | Yes | Button → opens textarea modal |
| Amount | No | Quantity × Unit Price (real-time) |

---

## Auto-Population on SKU Selection

Selecting `MEAL-001`:
- Name: "Grilled Chicken Rice Bowl"
- UoM: "Nos"
- Quantity: 1 (auto-set)
- Unit Price: RM0.00 (editable)
- Amount: recalculates immediately
- Inline × remove icon appears

---

## SKU Options

Available SKUs include: AIRS3-001, COFFEE-NESTLE-001, MEAL-001 to MEAL-009, SKASKA-123, SKU-5001, ZIB-01, and many more. Dropdown is searchable.

---

## Row Management

**Adding rows:** "Add Item" button below table; new rows numbered sequentially

**Removing rows:**
- Row 1: Protected — checkbox disabled; × button exists but is ignored
- Other rows: Check checkbox → inline × appears → click to delete

**Row 1 always present** — cannot reduce items to zero.

---

## Validation

- SKU required to submit (dialog: "SKU is required" if empty)
- Quantity 0 silently blocks submission (no error message displayed)
- Both Quantity and Unit Price must be positive
- At least one item must be populated

---

## Calculation Cascade

```
Amount = Quantity × Unit Price (on change)
Subtotal = Sum of all item Amounts
Grand Total = Subtotal + Charges − Discount
Payment Amount = Grand Total × Portion %
```

Example: MEAL-001 qty 2 × RM120 + MEAL-002 qty 1 × RM80 = RM320 Subtotal

---

## Test Results

| Feature | Status |
|---------|--------|
| SKU dropdown (searchable) | ✅ Working |
| Auto-population on SKU select | ✅ Working |
| Name list syncs with SKU | ✅ Working |
| Quantity spinbutton | ✅ Working |
| Unit Price spinbutton | ✅ Working |
| Additional Notes modal | ✅ Working |
| Amount auto-calculation | ✅ Working |
| Add Item button | ✅ Working |
| Row 1 protection | ✅ Working |
| Inline × row removal | ✅ Working |
| Summary cascade | ✅ Working |

---

## See Also

- [[Items Section]]
- [[Create Sales Order Exploration]]
- [[SO Summary Section]]

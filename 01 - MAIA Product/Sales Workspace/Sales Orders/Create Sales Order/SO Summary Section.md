---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# SO Summary Section — UI Testing

**Form:** `/sales/orders/new`

> **Note:** Identical to Quotations Summary section.

---

## Fields

| Field | Type | Formula |
|-------|------|---------|
| Subtotal | Display | Sum of all item amounts |
| Charges | Chips → Inputs | User-entered per charge type |
| Total Charges | Display | Sum of all charge amounts |
| Discount | Textbox (RM) | User-entered |
| Grand Total | Display | Subtotal + Total Charges − Discount |

---

## Charges (5 types)

Delivery, Handling, Service, Packaging, Insurance

Click chip → input row appears (checkbox + label + RM input). Click × → removes, totals revert.

---

## Verified Calculation Example

| Step | Subtotal | Charges | Discount | Grand Total |
|------|----------|---------|----------|-------------|
| 2× MEAL-001 @ RM120 | RM240 | RM0 | RM0 | RM240 |
| +Delivery RM30 | RM240 | RM30 | RM0 | RM270 |
| +Discount RM20 | RM240 | RM30 | RM20 | RM250 |

All updates are real-time. Grand Total cascades to Payment Terms.

---

## See Also

- [[Summary Section]]
- [[SO Items Section]]
- [[SO Payment Terms Section]]

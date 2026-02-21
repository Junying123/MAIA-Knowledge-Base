---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Summary Section — UI Testing

**Form:** `/sales/quotations/new`

---

## Fields Overview

| Field | Type | Editable | Formula |
|-------|------|----------|---------|
| Subtotal | Display | No | Sum of all item amounts |
| Charges | Chips → Inputs | Yes | User-entered per charge type |
| Total Charges | Display | No | Sum of all charge amounts |
| Discount | Textbox (RM) | Yes | User-entered |
| Grand Total | Display | No | Subtotal + Total Charges − Discount |

---

## Charges

**5 charge types available:**

| Charge | Behavior |
|--------|----------|
| Delivery | Click chip → input field appears |
| Handling | Click chip → input field appears |
| Service | Click chip → input field appears |
| Packaging | Click chip → input field appears |
| Insurance | Click chip → input field appears |

### Charge behavior

1. Click chip → converts to input with checkbox, label, "RM" prefix, amount textbox (default: 0.00)
2. Enter amount → Total Charges and Grand Total update immediately
3. Click remove icon → charge returns to chip row, totals update

Multiple charges can be active simultaneously.

---

## Calculation Formula

```
Subtotal = Sum of all item amounts
Total Charges = Sum of all selected charge amounts
Grand Total = Subtotal + Total Charges − Discount
Payment Amount = Grand Total × Portion % (in Payment Terms)
```

All updates are real-time — no manual refresh needed.

---

## Calculation Test Example

| Step | Subtotal | Charges | Discount | Grand Total |
|------|----------|---------|----------|-------------|
| Initial | RM 0 | RM 0 | RM 0 | RM 0 |
| Add 5 × RM 15.90 item | RM 79.50 | RM 0 | RM 0 | RM 79.50 |
| Add Delivery RM 50 | RM 79.50 | RM 50 | RM 0 | RM 129.50 |
| Add Discount RM 10 | RM 79.50 | RM 50 | RM 10 | RM 119.50 |

Payment Amount also updated to RM 119.50 after each step.

---

## Test Results

| Component | Status |
|-----------|--------|
| Subtotal (auto-calculated) | ✅ Working |
| Delivery charge chip | ✅ Working |
| All 5 charge chips | ✅ Working |
| Charge amount entry | ✅ Working |
| Charge removal | ✅ Working |
| Discount field | ✅ Working |
| Grand Total (auto-calculated) | ✅ Working |
| Payment Terms cascade update | ✅ Working |

---

## See Also

- [[Items Section]]
- [[Payment Term Section]]
- [[Create Quotation Exploration]]

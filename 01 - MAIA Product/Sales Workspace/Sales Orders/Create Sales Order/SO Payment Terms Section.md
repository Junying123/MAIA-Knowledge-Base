---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# SO Payment Terms Section — UI Testing

**Form:** `/sales/orders/new`

> **Note:** Identical to Quotations Payment Terms section.

---

## Default State

**CIA (Cash in Advance):** 100%, due today, "Payment must be made before goods/services provided."

---

## Key Behaviors Verified

- **Row 1 non-deletable:** checkbox disabled, but Portion % and Payment Term are editable
- **Validation on 2nd row:** adding row immediately shows "Payment term is required", "Due date is required", "Portions must sum to 100%"
- **Portion total enforcement:** 60% + 40% = 100% clears the warning; payment amounts update proportionally
- **Net 30 auto-fill:** selecting "Net 30 days" sets description "Payment is due within 30 days from invoice date" and due date = +30 days
- **Grand Total cascade:** Payment Amounts reflect Grand Total automatically (e.g., RM240 → RM144 @ 60%, RM96 @ 40%)

---

## Calculation

```
Payment Amount = Grand Total × (Portion % / 100)
Portion Total must = 100.0%
```

---

## See Also

- [[Payment Term Section]]
- [[SO Summary Section]]
- [[Create Sales Order Exploration]]

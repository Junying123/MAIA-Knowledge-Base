---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Payment Term Section — UI Testing

**Form:** `/sales/quotations/new`

---

## Fields Overview

| Field | Type | Editable | Notes |
|-------|------|----------|-------|
| Payment Term | Dropdown/Search | Yes | Searchable; default: CIA |
| Due Date | Date picker | Yes | Auto-populated based on term |
| Description | Text | Yes | Auto-populated based on term |
| Portion % | Spinbutton | Yes | Double-click to edit; total must = 100% |
| Payment Amount | Display | No | Grand Total × Portion % |

---

## Default State

**Default payment term:** CIA (Cash in Advance)
- Portion %: 100%
- Due Date: today
- Payment Amount = Grand Total × 100%

---

## Payment Term Options

Searchable dropdown. Available terms:

| Term | Days |
|------|------|
| CIA | 0 (due today) |
| Net 7 | +7 days |
| Net 15 | +15 days |
| Net 30 | +30 days |
| Net 45 | +45 days |
| Net 60 | +60 days |
| Net 90 | +90 days |
| EOM | End of Month |

---

## Auto-Population on Term Selection

Selecting a term auto-populates:
- **Due Date** — calculated from invoice date + N days
- **Description** — term description text

Both fields remain editable after auto-population.

---

## Portion %

- Default: `100` (displayed as `100.0`)
- **Double-click** to activate edit (spinbutton input)
- **Portion Total** must equal exactly `100.0%`
- Validation enforced on form submit

**Adding rows:**
- "Add Payment Term" button adds a new row
- Distribute Portion % across rows as needed
- All row portions must sum to 100%

**Removing rows:**
- Check row checkbox → "Delete" button appears → click to remove
- At least one row must remain

---

## Payment Amount Calculation

```
Payment Amount = Grand Total × (Portion % / 100)
```

Updates in real-time as Grand Total changes (via items, charges, discount).

**Example:**
| Grand Total | Portion % | Payment Amount |
|-------------|-----------|----------------|
| RM 119.50 | 100% | RM 119.50 |
| RM 119.50 | 50% | RM 59.75 |

---

## Test Results

| Feature | Status |
|---------|--------|
| CIA default (100%, due today) | ✅ Working |
| Payment term dropdown (searchable) | ✅ Working |
| Due Date auto-population | ✅ Working |
| Description auto-population | ✅ Working |
| Portion % editing (double-click) | ✅ Working |
| Payment Amount calculation | ✅ Working |
| Add Payment Term row | ✅ Working |
| Checkbox row deletion | ✅ Working |
| Cascade update from Grand Total | ✅ Working |

---

## See Also

- [[Summary Section]]
- [[Items Section]]
- [[Create Quotation Exploration]]

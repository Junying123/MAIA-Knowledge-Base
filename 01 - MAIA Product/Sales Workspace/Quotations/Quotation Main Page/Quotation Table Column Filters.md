---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Quotation Table — Column Filters

**Page:** `/sales/quotations`

---

## Column Overview

| Column | Sortable | Filter Type | Default Sort |
|--------|----------|-------------|--------------|
| Quotation ID | Yes | Sort only | — |
| Customer | Yes | Sort + Search/Checkbox | — |
| Credit Utilization | Yes | Sort + Range Slider | — |
| Status | Yes | Sort + Search/Checkbox | — |
| Valid Till | Yes | Sort + Date Range | — |
| Value | Yes | Sort + Range Slider | — |
| Created at | Yes | Sort + Date Range | — |
| Updated at | Yes | Sort + Date Range | **Default (Desc)** |
| Actions | No | — | — |

---

## Filter Types

### Sort-Only Columns (Quotation ID, Value, Credit Utilization)

Dropdown with: **Asc**, **Desc**, **Reset**

Reset option only appears after a sort has been applied.

### Search + Checkbox Filter (Customer, Status)

1. Click column header
2. Use search bar to filter options
3. Check one or more options
4. Click **Apply** → table filters
5. Click **Clear** → resets to original

**Customer options:** Andy Lau, Azib, Bryan Higga, and others (61+ customers)

**Status options:** Cancelled, Draft, Lost, Open, Ordered, Partially Ordered

### Date Range Filter (Valid Till, Created at, Updated at)

1. Click column header
2. Navigate months using chevron arrows
3. Change month/year via dropdowns
4. Click **start date** then **end date**
5. Click **Apply** → table filters
6. Click **Clear** → resets to original

Two-month calendar view. Selected range highlighted.

### Range Slider Filter (Credit Utilization, Value)

- Min/Max spinbutton inputs
- Adjustable slider
- **Apply** / **Clear** buttons

---

## Test Status

| Column | Sort | Filter | Status |
|--------|------|--------|--------|
| Quotation ID | ✅ PASS | — | Done |
| Customer | ✅ PASS | ⏳ Expected | Partial |
| Credit Utilization | ⏳ Expected | ⏳ Expected | Pending |
| Status | ⏳ Expected | ⏳ Expected | Pending |
| Valid Till | ⏳ Expected | ⏳ Expected | Pending |
| Value | ⏳ Expected | ⏳ Expected | Pending |
| Created at | ⏳ Expected | ⏳ Expected | Pending |
| Updated at | ⏳ Expected | ⏳ Expected | Pending |
| Actions | ✅ PASS (no sort) | — | Done |

**Default sort:** Updated at Descending

---

## See Also

- [[Quotation Table UI Components]]
- [[Create Quotation Exploration]]

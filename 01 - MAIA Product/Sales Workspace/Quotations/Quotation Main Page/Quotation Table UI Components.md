---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Quotation Table — UI Components

**Page:** `/sales/quotations`
**Default URL:** `/sales/quotations?page=1&page_size=25&sort=modified&order=desc&tab=all`

---

## Page Summary

| Element | Count |
|---------|-------|
| Buttons | ~125 |
| Tabs | 10 |
| Sortable columns | 8 |
| Rows per page | 25 (276 total results) |
| Pages | 12 |

---

## Top Bar

| Component | Type | Action |
|-----------|------|--------|
| Search quotations... | Textbox | Full-text search |
| Export CSV | Button | Download CSV |
| Create Quotation | Button | → `/sales/quotations/new` |
| Notifications | Button | Alt+T shortcut |
| User Profile | Button | "A Administrator" |

---

## Tab Navigation (10 tabs)

| Tab | Filter |
|-----|--------|
| All Quotations | Default |
| Draft | Status: Draft |
| Open | Status: Open |
| Partially Ordered | Status: Partially Ordered |
| Ordered | Status: Ordered |
| Lost | Status: Lost |
| Cancelled | Status: Cancelled |
| Warm Leads | Special filter |
| Follow-up Overdue | Special filter |
| Expiring Soon | Special filter |
| Expired | Special filter |

URL parameter: `tab=all|draft|open|...`

---

## Table Columns

| Column | Sortable | Filter | URL Param |
|--------|----------|--------|-----------|
| Quotation ID | Yes | Sort | `sort=id` |
| Customer | Yes | Sort + Search/Checkbox | `sort=customer` |
| Credit Utilization | Yes | Sort + Range Slider | — |
| Status | Yes | Sort + Search/Checkbox | — |
| Valid Till | Yes | Sort + Date Range | — |
| Value | Yes | Sort + Range Slider | — |
| Created at | Yes | Sort + Date Range | — |
| Updated at | Yes | Sort + Date Range | **Default** |
| Actions | No | — | — |

Default sort: **Updated at Descending**

---

## Row Actions by Status

| Status | Available Actions |
|--------|-------------------|
| Draft | Submit, View PDF, Download PDF, Delete, Mark as Lost |
| Open | View PDF, Download PDF, Mark as Lost |
| Lost | View PDF, Download PDF |
| Ordered | View PDF, Download PDF |

All rows are clickable (navigate to detail page).

---

## Pagination

- 25 rows per page (configurable)
- "Page 1 of 12" + "276 total results"
- First / Previous / Next / Last page buttons
- First/Previous disabled on page 1

---

## Known Data

At time of testing: **276 total quotations**, 25 per page, 12 pages.

---

## See Also

- [[Quotation Table Column Filters]]
- [[Create Quotation Exploration]]

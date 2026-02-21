---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sales Order Main Page — Exploration

**Page:** `/sales/orders`
**Default URL:** `/sales/orders?page=1&page_size=25&sort=updated&order=desc&tab=All`

---

## Page Summary

| Element | Count |
|---------|-------|
| Filter tabs | 6 |
| Sortable columns | 8 |
| Total orders | 385 |
| Rows per page | 25 (default) |
| Pages | 16 |

---

## Top Bar

| Component | Action |
|-----------|--------|
| Search sales orders... | Real-time keyword search |
| Export CSV | Download CSV |
| Create Sales Order | → `/sales/orders/new` |

---

## Filter Tabs (6)

| Tab | Count | URL param |
|-----|-------|-----------|
| All Orders | 385 | `tab=All` |
| Draft | 106 | `tab=Draft` |
| In Progress | 242 | `tab=In+Progress` |
| Completed | 3 | `tab=Completed` |
| Closed | 7 | `tab=Closed` |
| Cancelled | 19 | `tab=Cancelled` |

---

## Table Columns (9)

| Column | Sortable | Filter Type |
|--------|----------|-------------|
| Order ID | Yes | Sort only |
| Customer | Yes | Sort + Search/Checkbox |
| Credit Utilization | Yes | Sort + Range Slider (0-100%) |
| Status | Yes | Sort + Search/Checkbox (14 statuses) |
| Progress | Yes | Sort + Range Slider (0-100%) |
| Total | Yes | Sort + Range Slider |
| Created at | Yes | Sort + Date Range |
| Updated at | Yes | Sort + Date Range (**Default Desc**) |
| Actions | No | Row-specific buttons |

**Default sort:** Updated at Descending

---

## Status Values (14)

Cancelled, Closed, Completed, Draft, On Hold, To Bill, To Bill and Deliver, To Bill and Pay, To Bill Pay and Deliver, To Bill Pay and Fulfill, To Deliver, To Fulfill, To Pay and Deliver, To Pay and Fulfill

---

## Row Actions by Status

| Status | Actions |
|--------|---------|
| **Draft** | Submit, View PDF, Download PDF, Delete |
| **Cancelled** | View PDF, Download PDF |
| **All others** | View PDF, Download PDF, Cancel |

---

## Pagination

- **Rows per page:** 10, 25, 50, 75, 100
- **Default:** 25
- First / Previous / Next / Last page buttons
- "Page X of Y" + "Z total results" display

---

## URL Parameters

```
/sales/orders?page=1&page_size=25&sort=updated&order=desc&tab=All
```

Filter params: `customer`, `status`, `credit_utilization_min/max`, `progress_min/max`, `total_min/max`, `created_from/to`, `updated_from/to`, `search`

---

## See Also

- [[Create Sales Order Exploration]]
- [[Quotation Table UI Components]]

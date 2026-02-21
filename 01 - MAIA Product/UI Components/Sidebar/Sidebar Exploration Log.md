---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# OMS Sidebar Component — Manual Exploration Log

**Base URL:** `https://maia-oms-dev.vercel.app`
**Starting Page:** `/sales` (Sales Management Dashboard)

---

## Sidebar Structure

The sidebar contains:
1. Module Switcher (Sales, Logistics, Finance, Admin)
2. Workspace/Company Selector (MAIA, etc.)
3. **Overview Section** — Dashboard, My Tasks
4. **Selling Section** — Customers, Items, Quotations, Sales Orders
5. **Billing Section** — Invoices, Credit Notes
6. **Payments Section** — Receipts, Vouchers
7. **Fulfillment Section** — Delivery Notes, Return Notes
8. **Customer Service Section** — Customer Issues
9. **Other Links** — Issues
10. User Profile button (Administrator Administrator)
11. Toggle Sidebar button

---

## Navigation URLs

### Overview Section

| Link | URL | Status | Notes |
|------|-----|--------|-------|
| Dashboard | `/sales` | ✅ Working | Loads Sales Management Dashboard |
| My Tasks | `/tasks` | ❌ 404 (initial) | Fixed to `/sales/tasks` — now working |

### Selling Section

| Link | URL | Status | Notes |
|------|-----|--------|-------|
| Customers | `/sales/customers` | ✅ Working | Table with customer data |
| Items | `/sales/items` | ✅ Working | Table with item data |
| Quotations | `/sales/quotations` | ✅ Working | Status tabs: Draft, Open, Ordered, etc. |
| Sales Orders | `/sales/orders` | ✅ Working | Sales orders table |

### Billing Section

| Link | URL | Status | Notes |
|------|-----|--------|-------|
| Invoices | `/sales/invoices` | ✅ Working | Invoices table |
| Credit Notes | `/sales/credit-notes` | ✅ Working | Credit notes table |

### Payments Section

| Link | URL | Status | Notes |
|------|-----|--------|-------|
| Receipts | `/sales/receipts` | ✅ Working | Receipts table |
| Vouchers | `/sales/vouchers` | ✅ Working | Status tabs: All, Draft, In Progress, etc. |

### Fulfillment Section

| Link | URL | Status | Notes |
|------|-----|--------|-------|
| Delivery Notes | `/sales/delivery-notes` | ✅ Working | Delivery notes table |
| Return Notes | `/sales/return-notes` | ✅ Working | Return notes table |

### Customer Service Section

| Link | URL | Status | Notes |
|------|-----|--------|-------|
| Customer Issues | `/sales/customer-issues` | ❌ 404 (initial) | Fixed — now working |
| Issues | `/sales/issues` | ✅ Working | Card layout, not table |

---

## UI Functionality Tests

### Active State Indication
- Working links correctly show `[active]` attribute when on their respective pages
- Active link is visually highlighted with color change

### Toggle Sidebar
- Clicking Toggle Sidebar collapses/expands the sidebar
- Collapsed state: only icons visible, no text labels
- Toggle button available in both sidebar footer and main content header

---

## Page Content Observations

| Page | Key UI Elements |
|------|----------------|
| Dashboard `/sales` | Total Sales metrics, time period selector, data table with reports |
| Customers | Table: Customer ID, Status, Segment, Territory, Revenue, etc. |
| Items | Table: SKU, Name, Price, Item Group. Item groups: Crops, Livestock, etc. |
| Quotations | Status tabs: All, Draft, Open, Replied, Ordered, Lost, Cancelled, Expired |
| Sales Orders | Table with export and create buttons |
| Invoices | Table with export and create buttons |
| Vouchers | Status tabs: All, Draft, In Progress, Completed, Closed, Cancelled |
| Issues | Card layout: Issue title, ID, company, status, priority badges |

### Issues Page Sample Data
- ISS-2025-0001 · MAIA — Onboarding portal access blocked (Open, High)
- ISS-2025-0002 · Globex — Invoice email formatting (In Progress, Medium)
- ISS-2025-0003 · Acme Corp — Unable to upload attachments (Resolved, Urgent)

---

## Initial Test Results (Before Fixes)

- **Total Links Tested:** 14
- **Working:** 12 (85.7%)
- **Broken:** 2 — My Tasks (`/tasks`) and Customer Issues (`/sales/customer-issues`)

**After fixes:** Both My Tasks (`/sales/tasks`) and Customer Issues are now working. All 16 links functional. See [[Sidebar Navigation URLs]].

---

## Common UI Patterns

All list pages share:
- Search textbox with contextual placeholder
- "Create [Entity]" button
- "Export Excel" button
- Data table with sortable columns
- Pagination controls
- Row selection checkboxes
- Status badge indicators with color coding

---

## See Also

- [[Sidebar Navigation URLs]]
- [[Sidebar Categories Quick Reference]]
- [[Sidebar Feature Categories]]
- [[Sidebar Helper Usage]]

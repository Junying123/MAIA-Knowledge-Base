---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sidebar Navigation URLs - Complete List

**Test Date:** December 2025
**Workspace:** MAIA
**Base URL:** `https://maia-oms-dev.vercel.app`

---

## Navigation URLs Summary

| # | Name | URL | Status |
|---|------|-----|--------|
| 1 | Dashboard | `/sales` | ✅ Working |
| 2 | My Tasks | `/sales/tasks` | ✅ Working |
| 3 | Daily Digest | `/sales/daily-digest` | ✅ Working |
| 4 | Customers | `/sales/customers` | ✅ Working |
| 5 | Items | `/sales/items` | ✅ Working |
| 6 | Quotations | `/sales/quotations` | ✅ Working |
| 7 | Sales Orders | `/sales/orders` | ✅ Working |
| 8 | Invoices | `/sales/invoices` | ✅ Working |
| 9 | Credit Notes | `/sales/credit-notes` | ✅ Working |
| 10 | Debit Notes | `/sales/debit-notes` | ✅ Working |
| 11 | Receipts | `/sales/receipts` | ✅ Working |
| 12 | Vouchers | `/sales/vouchers` | ✅ Working |
| 13 | Delivery Notes | `/sales/delivery-notes` | ✅ Working |
| 14 | Return Notes | `/sales/return-notes` | ✅ Working |
| 15 | Customer Issues | `/sales/customer-issues` | ✅ Working |
| 16 | Issues | `/sales/issues` | ✅ Working |

**Total Links Tested:** 16 | **Working:** 16 (100%) | **Broken:** 0

---

## Query Parameters

Most list pages include query parameters for pagination and sorting:
- `page=1` — Current page number
- `page_size=25` — Items per page
- `sort=<field>` — Sort field (e.g., `updated`, `openingDate`, `name`)
- `order=desc` — Sort order (descending)

---

## POM Methods (page-objects/Sidebar.ts)

- `navigateToDashboard()`
- `navigateToMyTasks()`
- `navigateToDailyDigest()`
- `navigateToCustomers()`
- `navigateToItems()`
- `navigateToQuotations()`
- `navigateToSalesOrders()`
- `navigateToInvoices()`
- `navigateToCreditNotes()`
- `navigateToDebitNotes()`
- `navigateToReceipts()`
- `navigateToVouchers()`
- `navigateToDeliveryNotes()`
- `navigateToReturnNotes()`
- `navigateToCustomerIssues()`
- `navigateToIssues()`

All methods automatically expand the required section before clicking the link.

---

## Notes

- **Daily Digest** and **Debit Notes** were not in the original exploration document but exist in the sidebar
- **Customer Issues:** Previously reported as 404, now working correctly
- **My Tasks:** URL is `/sales/tasks`, not `/tasks`

---

## See Also

- [[Sidebar Categories Quick Reference]]
- [[Sidebar Feature Categories]]
- [[All Workspace Modules]]
- [[Sales Workspace Modules]]

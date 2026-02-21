---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sidebar Categories - Quick Reference

Quick reference guide for sidebar feature categories based on the visual structure.

## Category Overview

```
┌─────────────────────────────────────┐
│ CATEGORY 1: Top-Level Navigation     │
│  • Module Switcher (Sales, etc.)    │
│  • Workspace Selector (MAIA, etc.)  │
├─────────────────────────────────────┤
│ CATEGORY 2: Business Module Sections│
│  • Overview                         │
│  • Selling                          │
│  • Billing                          │
│  • Payments                         │
│  • Fulfillment                      │
│  • Customer Service                 │
├─────────────────────────────────────┤
│ CATEGORY 3: Utility Features         │
│  • Theme Toggle                     │
└─────────────────────────────────────┘
```

---

## Category 1: Top-Level Navigation & Workspace Switchers

| Feature | POM Method | Description |
|---------|-----------|-------------|
| Module Switcher | `switchToSalesModule()`, `switchToLogisticsModule()`, `switchToFinanceModule()`, `switchToAdminModule()` | Switch between application modules |
| Workspace Selector | `getCurrentWorkspace()`, `switchWorkspace(name)`, `ensureMaiaWorkspace()` | Switch between workspaces/companies |

---

## Category 2: Core Business Module Sections

### Overview Section
| Link | POM Method | URL |
|------|-----------|-----|
| Dashboard | `navigateToDashboard()` | `/sales` |
| My Tasks | `navigateToMyTasks()` | `/sales/tasks` |
| Daily Digest | `navigateToDailyDigest()` | `/sales/daily-digest` |

### Selling Section
| Link | POM Method | URL |
|------|-----------|-----|
| Customers | `navigateToCustomers()` | `/sales/customers` |
| Items | `navigateToItems()` | `/sales/items` |
| Quotations | `navigateToQuotations()` | `/sales/quotations` |
| Sales Orders | `navigateToSalesOrders()` | `/sales/orders` |

### Billing Section
| Link | POM Method | URL |
|------|-----------|-----|
| Invoices | `navigateToInvoices()` | `/sales/invoices` |
| Credit Notes | `navigateToCreditNotes()` | `/sales/credit-notes` |
| Debit Notes | `navigateToDebitNotes()` | `/sales/debit-notes` |

### Payments Section
| Link | POM Method | URL |
|------|-----------|-----|
| Receipts | `navigateToReceipts()` | `/sales/receipts` |
| Vouchers | `navigateToVouchers()` | `/sales/vouchers` |

### Fulfillment Section
| Link | POM Method | URL |
|------|-----------|-----|
| Delivery Notes | `navigateToDeliveryNotes()` | `/sales/delivery-notes` |
| Return Notes | `navigateToReturnNotes()` | `/sales/return-notes` |

### Customer Service Section
| Link | POM Method | URL |
|------|-----------|-----|
| Customer Issues | `navigateToCustomerIssues()` | `/sales/customer-issues` |
| Issues | `navigateToIssues()` | `/sales/issues` |

---

## Category 3: Utility Features

| Feature | POM Method | Description |
|---------|-----------|-------------|
| Theme Toggle | (To be implemented) | Switch between System/Light/Dark themes |

---

## See Also

- [[Sidebar Navigation URLs]]
- [[Sidebar Feature Categories]]
- [[Sidebar Helper Usage]]
- [[Sidebar Refactoring Summary]]
- [[All Workspace Modules]]

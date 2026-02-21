---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sidebar Feature Categories

This document categorizes all sidebar features based on the visual structure of the OMS sidebar navigation component.

## Overview

The sidebar is organized into **three main categories**:

1. **Top-Level Navigation & Workspace Switchers** — Controls application context
2. **Core Business Module Sections** — Groups related functionalities
3. **Utility Features** — Application-level utilities and settings

---

## Category 1: Top-Level Navigation & Workspace Switchers

### 1.1 Module Switcher

**Location:** Top of sidebar
**Functionality:** Allows switching between major application modules

**Available Modules:** Sales (default), Logistics, Finance, Admin

**Visual Indicator:** Shows current module name with double-arrow dropdown icon and shopping cart icon on the left.

**POM Methods:**
- `switchToSalesModule()`
- `switchToLogisticsModule()`
- `switchToFinanceModule()`
- `switchToAdminModule()`

### 1.2 Workspace/Company Selector

**Location:** Below module switcher
**Functionality:** Selects a specific workspace or company within the chosen module

**Available Workspaces:** MAIA, FarmShop, Apple, Fixguru, Mackessen, Ultimax, ZUS

**Visual Indicator:** Current workspace name in a light grey pill-shaped button with dropdown icon.

**POM Methods:**
- `getCurrentWorkspace()`
- `switchWorkspace(workspaceName: string)`
- `ensureMaiaWorkspace()`

---

## Category 2: Core Business Module Sections

These sections group related functionalities and act as expandable headers.

### 2.1 Overview Section

| Link | Icon | URL | Description |
|------|------|-----|-------------|
| Dashboard | House | `/sales` | Main sales dashboard |
| My Tasks | Checklist | `/sales/tasks` | User's assigned tasks |
| Daily Digest | Clock | `/sales/daily-digest` | Daily summary and updates |

**POM Methods:** `expandOverviewSection()`, `navigateToDashboard()`, `navigateToMyTasks()`, `navigateToDailyDigest()`

### 2.2 Selling Section

| Link | Icon | URL | Description |
|------|------|-----|-------------|
| Customers | People | `/sales/customers` | Customer management |
| Items | Package | `/sales/items` | Product/item catalog |
| Quotations | Document | `/sales/quotations` | Quotation management |
| Sales Orders | Shopping cart | `/sales/orders` | Sales order management |

**POM Methods:** `expandSellingSection()`, `navigateToCustomers()`, `navigateToItems()`, `navigateToQuotations()`, `navigateToSalesOrders()`, `isQuotationsActive()`, `isSalesOrdersActive()`

### 2.3 Billing Section

| Link | URL | Description |
|------|-----|-------------|
| Invoices | `/sales/invoices` | Invoice management |
| Credit Notes | `/sales/credit-notes` | Credit note management |
| Debit Notes | `/sales/debit-notes` | Debit note management |

**POM Methods:** `expandBillingSection()`, `navigateToInvoices()`, `navigateToCreditNotes()`, `navigateToDebitNotes()`

### 2.4 Payments Section

| Link | URL | Description |
|------|-----|-------------|
| Receipts | `/sales/receipts` | Receipt management |
| Vouchers | `/sales/vouchers` | Voucher management |

**POM Methods:** `expandPaymentsSection()`, `navigateToReceipts()`, `navigateToVouchers()`

### 2.5 Fulfillment Section

| Link | URL | Description |
|------|-----|-------------|
| Delivery Notes | `/sales/delivery-notes` | Delivery note management |
| Return Notes | `/sales/return-notes` | Return note management |

**POM Methods:** `expandFulfillmentSection()`, `navigateToDeliveryNotes()`, `navigateToReturnNotes()`

### 2.6 Customer Service Section

| Link | URL | Description |
|------|-----|-------------|
| Customer Issues | `/sales/customer-issues` | Customer issue tracking |
| Issues | `/sales/issues` | General issue tracking |

**POM Methods:** `expandCustomerServiceSection()`, `navigateToCustomerIssues()`, `navigateToIssues()`

---

## Category 3: Utility Features

### 3.1 Theme Toggle

**Location:** Bottom of sidebar
**Description:** Controls application theme

| Option | Description |
|--------|-------------|
| System | Use system default theme |
| Light | Light theme |
| Dark | Dark theme |

**POM Methods:** `setTheme('System' | 'Light' | 'Dark')`, `getCurrentTheme()` _(to be implemented)_

---

## Visual Structure

```
┌─────────────────────────────────┐
│ Sales          [▼]              │ ← Category 1: Module Switcher
│ MAIA           [▼]              │ ← Category 1: Workspace Selector
├─────────────────────────────────┤
│ Overview                        │ ← Category 2: Section Header
│   Dashboard                     │
│   My Tasks                      │
│   Daily Digest                  │
├─────────────────────────────────┤
│ Selling                         │
│   Customers                     │
│   Items                         │
│   Quotations                    │
│   Sales Orders [ACTIVE]         │
├─────────────────────────────────┤
│ Billing                         │
│   Invoices                      │
│   Credit Notes                  │
│   Debit Notes                   │
├─────────────────────────────────┤
│ Payments                        │
│   Receipts                      │
│   Vouchers                      │
├─────────────────────────────────┤
│ Fulfillment                     │
│   Delivery Notes                │
│   Return Notes                  │
├─────────────────────────────────┤
│ Customer Service                │
│   Customer Issues               │
│   Issues                        │
├─────────────────────────────────┤
│ Light Mode [System/Light/Dark]  │ ← Category 3: Theme Toggle
└─────────────────────────────────┘
```

---

## See Also

- [[Sidebar Navigation URLs]]
- [[Sidebar Categories Quick Reference]]
- [[Sidebar Helper Usage]]
- [[Sidebar Refactoring Summary]]

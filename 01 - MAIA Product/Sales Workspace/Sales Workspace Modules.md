---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sales Workspace — Module Directory

**Workspace:** Sales
**Base URL:** `/sales`
**Total Modules:** 16+

---

## Overview Section

| Module | URL | Purpose |
|--------|-----|---------|
| Dashboard | `/sales` | Sales KPIs, pipeline status, alerts |
| My Tasks | `/sales/tasks` | Personal work queue (coming soon) |
| Daily Digest | `/sales/daily-digest` | 24-hour activity summary |

---

## Selling Section

| Module | URL | Purpose |
|--------|-----|---------|
| Customers | `/sales/customers` | Customer master database, profiles, addresses |
| Items | `/sales/items` | Product catalog for sales (SKUs, pricing) |
| Quotations | `/sales/quotations` | Full quotation lifecycle — Draft → Open → Ordered/Lost |
| Sales Orders | `/sales/orders` | Order management from creation to fulfillment |

---

## Billing Section

| Module | URL | Purpose |
|--------|-----|---------|
| Invoices | `/sales/invoices` | Customer invoicing, payment tracking, AR |
| Credit Notes | `/sales/credit-notes` | Customer credits for returns, errors, discounts |
| Debit Notes | `/sales/debit-notes` | Additional charges beyond original invoice |

---

## Payments Section

| Module | URL | Purpose |
|--------|-----|---------|
| Receipts | `/sales/receipts` | Record payments; match to invoices |
| Vouchers | `/sales/vouchers` | Refunds, advances, other payment transactions |

---

## Fulfillment Section

| Module | URL | Purpose |
|--------|-----|---------|
| Delivery Notes | `/sales/delivery-notes` | Shipment and delivery status tracking |
| Return Notes | `/sales/return-notes` | Customer returns tracking and processing |

---

## Customer Service Section

| Module | URL | Purpose |
|--------|-----|---------|
| Customer Issues | `/sales/customer-issues` | Billing questions, delivery problems, complaints |
| Issues | `/sales/issues` | Internal operational issue tracker |

---

## Others Section

| Module | URL | Purpose |
|--------|-----|---------|
| Import & Export | `/sales/data-jobs` | Bulk data import/export for customers, items, etc. |

---

## Core Workflow (Quote-to-Cash)

```
Quotation → Sales Order → Invoice → Receipt
```

Supporting modules: Credit Notes, Debit Notes, Delivery Notes, Return Notes

---

## Target Users

- Sales representatives
- Sales managers and team leads
- Account managers
- Sales coordinators and support staff
- Customer service representatives
- Sales operations managers

---

## See Also

- [[All Workspace Modules]]
- [[Create Quotation Exploration]]
- [[Create Sales Order Exploration]]
- [[Quotation to Sales Order Status Guide]]

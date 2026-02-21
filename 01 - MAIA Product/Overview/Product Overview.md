---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# MAIA Product Overview

## What is MAIA?

**MAIA** is an **Order Management System (OMS)** and **ERP platform** designed specifically for **B2B companies**. It helps businesses manage their entire sales cycle from quotation through order fulfillment, invoicing, and payment collection.

## Target Users

- B2B manufacturing companies
- Distribution and wholesale businesses
- Service providers with complex quoting and billing workflows

## Core Business Flow

MAIA follows the **Quote-to-Cash** business model:

```
Quotation → Sales Order → Invoice → Receipt/Payment
```

Supporting documents:
- **Credit Notes** — Returns and refunds
- **Debit Notes** — Additional charges
- **Delivery Notes** — Shipment tracking
- **Payment Vouchers** — Refund processing

## Three Workspaces

MAIA is organized into **3 workspaces**, each tailored for specific teams:

### 1. Sales Workspace (17 modules)
For sales teams managing quotations, orders, and customer relationships.

**Key modules:**
- Quotations, Sales Orders, Customers, Items
- Invoices, Credit Notes, Debit Notes
- Receipts, Vouchers
- Delivery Notes, Return Notes

### 2. Finance Workspace (16 modules)
For finance teams managing billing, payments, and accounting.

**Key modules:**
- General Ledger, Creditors, Debtors
- Invoices, Credit Notes, Debit Notes
- Receipts, Vouchers

### 3. Logistics Workspace (23 modules)
For warehouse and logistics teams managing inventory and fulfillment.

**Key modules:**
- Items, Batches, Serial Numbers, Warehouses
- Delivery Notes, Return Notes
- Stock Entry, Stock Reconciliation
- Pick Lists, Packing Lists

See [[Workspaces Overview]] for detailed module descriptions.

## Key Features

- ✅ Multi-workspace design for role-based workflows
- ✅ Complete quote-to-cash document lifecycle
- ✅ Status-based workflow management
- ✅ Multi-company and multi-warehouse support
- ✅ Flexible payment terms and pricing
- ✅ Integration-ready architecture

## Product Environment

| Environment | URL | Purpose |
|-------------|-----|---------|
| **Development** | https://maia-oms-dev.vercel.app | Dev team testing |
| **Demo** | https://maia-oms-demo.vercel.app | Client demos, PM testing |
| **Staging** | TBD | Pre-production validation |
| **Production** | TBD | Live customer use |

## See Also

- [[Workspaces Overview]] — Detailed module list
- [[Document Status Flows]] — All document statuses
- [[Known Limitations]] — Current product gaps
- [[01 - MAIA Product/Core Workflows/Quote-to-Cash Flow]] — Main workflow

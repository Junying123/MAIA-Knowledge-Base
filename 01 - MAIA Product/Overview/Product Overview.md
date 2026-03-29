---
owner: Gareth
status: approved
last_reviewed: 2026-03-29
---

# MAIA Product Overview

## What is MAIA?

**MAIA** is a **24/7 AI Sales Agent** for B2B companies in manufacturing, wholesale, and distribution. It automates the entire sales workflow — from receiving orders over WhatsApp through to invoicing, delivery coordination, and payment follow-up — operating as an embedded agent inside a company's existing WhatsApp channels.

MAIA is built and operated by **Mindhive Asia**, based in Shah Alam, Selangor, Malaysia. Founded in 2025, with 11–50 employees.

## Target Users

- B2B manufacturing companies
- Distribution and wholesale businesses
- Companies already running sales conversations over WhatsApp

## Current Live Clients

| Client | Notes |
|--------|-------|
| **Holsen Interchem** | Chemicals distributor |
| **MacKessen** | — |
| **Fixguru** | — |
| **Lean Giap Group** | — |
| **The Real Food** | — |
| **Ultimax Supply** | — |

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

## Core Capabilities (from website)

MAIA handles the following autonomously via WhatsApp:

| Capability | Description |
|------------|-------------|
| **Intelligent Document Processing (IDP)** | Processes voice notes, texts, images, handwritten notes, and PDFs into structured order data |
| **Pre-Order Checks** | Validates inventory availability, customer outstanding balance, and credit terms before creating an order |
| **Sales Order Creation** | Creates and stores sales orders from WhatsApp messages; syncs to ERP |
| **Output Document Generation** | Generates Quotations, Sales Orders, Invoices, Delivery Orders, and more via chat |
| **Daily Digest** | Sends each sales agent a morning summary of unprocessed/pending orders |
| **Next-Step Reminders** | Alerts Logistics or Delivery when a Sales Order is ready, with full order context |
| **Smart Upsells** | Post-order upsell suggestions to sales agents |
| **Real-time Order Monitoring** | Answers ad-hoc queries about order status, credit balances, and delivery progress |
| **Staffing Resilience** | Guides stand-in staff through process steps when a key PIC is absent |

## Key Features

- ✅ WhatsApp-native — no separate portal for users or customers to adopt
- ✅ Complete quote-to-cash document lifecycle
- ✅ ERP integration — orders and invoices synced to accounting system
- ✅ Credit check before order creation
- ✅ Multi-workspace design for role-based workflows (Sales, Finance, Logistics)
- ✅ Real-time order and payment tracking

## Pricing

| Tier | Monthly Fee | Order Volume | Development Fee | Go-live |
|------|-------------|--------------|-----------------|---------|
| Founders (S) | RM2,500/mo | 500 orders/mo | RM20,000 (one-time) | 4–8 weeks |
| Founders (M) | RM5,000/mo | 1,000 orders/mo | RM20,000 (one-time) | 4–8 weeks |
| Founders (L) | RM7,500/mo | 1,500 orders/mo | RM20,000 (one-time) | 4–8 weeks |
| Enterprise | Custom | Custom | — | — |

Pricing model is **per-order/month** — aligned with outcome-based pricing strategy.

## Product Environment

| Environment | URL | Purpose |
|-------------|-----|---------|
| **Development** | https://maia-oms-dev.vercel.app | Dev team testing |
| **Demo** | https://maia-oms-demo.vercel.app | Client demos, PM testing |
| **Production** | https://www.ordermaia.com | Marketing/landing page |

## See Also

- [[Workspaces Overview]] — Detailed module list
- [[Document Status Flows]] — All document statuses
- [[Known Limitations]] — Current product gaps
- [[01 - MAIA Product/Core Workflows/Quote-to-Cash Flow]] — Main workflow

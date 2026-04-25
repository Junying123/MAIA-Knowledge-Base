---
owner: Gareth
status: approved
last_reviewed: 2026-04-24
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

## Technical Architecture

MAIA is built on **ERPNext / Frappe** as its core open-source platform, extended and customized to meet specific B2B trade automation needs.

- **Backend**: ERPNext/Frappe core platform (open-source), with custom Frappe apps for MAIA-specific features like WhatsApp integration, intelligent document processing, and context learning
- **Frontends**: 
  - Responsive webapp (React-based) for office use, complex tasks, detailed views, reporting, and configuration
  - WhatsApp-based chatbot/Agent (custom integration) for on-the-go access, quick actions, notifications, and conversational order placement
- **Data Layer**: Learned trade context (buyers, SKUs, pricing, payment behavior, disputes, seasonal patterns) stored in ERPNext/Frappe, creating a defensive moat that compounds over time
- **Integration Layer**: APIs and webhooks for connecting with external systems (payment gateways, logistics providers, accounting software) when needed

## User Experience Model

MAIA meets users where they are, adapting to their context and workflow:

- **Outstation/Mobile Users**: Primarily use chatbot for:
  - Order placement via WhatsApp (text, voice, image)
  - Status checks (order, invoice, delivery progress)
  - Quick approvals/notifications
  - Chatbot may deep-link to webapp for complex tasks requiring forms/detailed views (e.g., bulk order upload, detailed reporting)

- **In-Office Users**: Use both interchangeably:
  - Webapp for bulk operations, reporting, configuration, and administrative tasks
  - Chatbot for convenient, quick actions (like sending a WhatsApp update to a client, checking inventory while walking the warehouse)

- **Core Principle**: WhatsApp-first reduces adoption friction by meeting buyers in their existing communication channels, but webapp provides depth when needed for complex operations

## Product Development & Delivery Process

MAIA follows a structured end-to-end PM workflow that leverages AI coding agents to maximize productivity while ensuring quality and alignment with business needs:

### 1. Specification (MAIA CODEX)
- PM writes formal feature spec in MAIA CODEX repo: `prd.md` (requirements), `design.md` (architecture/UX), `tasks.md` (work breakdown), `changelog.md`
- Lives in GitHub as source of truth for dev team and coding agents

### 2. Dev Briefing (Lark)
- PM converts MAIA CODEX spec into human-readable Lark doc
- Dev team reads Lark for context while coding agents work directly from MAIA CODEX

### 3. Implementation (Coding Agents Orchestrated by Hermes)
- **Hermes**: Orchestrator + PM co-pilot (drafts specs, orchestrates agents, tracks progress)
- **Codex**: Implementation (codes features, bug fixes, automation scripts)
- **Claude Code**: Architecture + technical review (API design, code quality, system design)
- **Cursor**: UI + local dev (frontend work, UI tweaks, local testing)

### 4. Validation
- **PM Manual Testing**: Tests against real client business scenarios (no dedicated QA team)
- **Bug Loop**: Bug found → inform dev → dev fixes → PM re-tests → repeat until no issues
- **UAT with Client**: Test case-by-case using client's real data; all test cases pass → client sign off

### 5. Project Management
- PM manages multiple clients in parallel at different workflow stages (RG → Fit Assessment → SOW → Feature Spec → Brief Dev → Test → UAT → Launch)
- Timelines often extend for feedback/iterations; buffer built into planning
- Launch follows formal client UAT sign-off

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

## MAIA Shape: The Product Philosophy

MAIA is designed as a **coordinated, auditable trade layer** that learns and compounds context over time, guided by these core beliefs:

1. **Context is the moat** — Whoever owns the richest trade context (buyers, SKUs, pricing, payment behaviour, disputes) wins. Features commoditize; learned context doesn't.
2. **WhatsApp-first is a distribution advantage** — Meeting buyers where they already are (WhatsApp) removes adoption friction. MAIA is not a portal they have to log into.
3. **Trust must be earned, not assumed** — Finance workflows require auditability, approvals, and explainability. MAIA earns autonomy incrementally through governance, not by moving fast and hoping.
4. **Automation should shrink, not eliminate, human judgment** — MAIA handles routine steps; humans handle exceptions and approvals. The goal is 60%+ automation with clear human-in-the-loop boundaries.
5. **Outcomes over features** — The right measure of MAIA's value is business outcomes: DSO reduced, invoice errors eliminated, AR headcount freed. Not feature count.

This shapes MAIA into a **WhatsApp-first AI order-to-cash automation platform** that functions as an embedded 24/7 AI employee, transforming chaotic, manual trade operations into a streamlined, intelligent flow while preserving human judgment for exceptions.

## See Also

- [[Workspaces Overview]] — Detailed module list
- [[Document Status Flows]] — All document statuses
- [[Known Limitations]] — Current product gaps
- [[01 - MAIA Product/Core Workflows/Quote-to-Cash Flow]] — Main workflow
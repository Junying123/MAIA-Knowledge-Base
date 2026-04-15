---
owner: Gareth
status: draft
last_reviewed: 2026-04-15
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/BeXXwlr9qiKc7Nk54IElwSJGgeh
---

# Mackessen [MAIA] SOW

**Effective Date:** 27th November 2025

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** Mackessen ("Mackessen") — No. 18, Jalan Anggerik Mokara 31/44, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor

---

## Introduction

### About MAIA
MAIA is a next-generation business platform that unifies sales, fulfillment, communications, logistics, and finance into a single ecosystem. Modular, cloud-based solution where each module can function independently yet integrates seamlessly into the wider MAIA environment.

### Purpose
This document establishes the baseline specifications, service level commitments, and commercial framework for the deployment and ongoing use of MAIA between the Vendor and the Client.

---

## Product Specifications

MAIA is delivered in **phases**:

- **Phase A1:** Core MAIA (Baseline Order → Delivery Note Flow)
- **Phase A2:** Business Rule & SOP Configuration (Within Core MAIA Flow)
- **Phase A3:** Enhancements (Within Core Flow, Delivered Under Phase A)
- **Phase B:** Highly Customised Extensions

### Phase A1 — Core MAIA

Focuses on core foundation:
- Core Internal Chatbots (Sales & Supply Chain)
- Core Workspaces (Sales & Supply Chain & Finance)
- Core Document Generation
- Core Data Sync Touchpoints
- Baseline process flow (Order → Delivery Note)

#### Sales Agent Assistant (Core)
- **Platform:** WhatsApp
- **Features:**
  - Intelligent Document Processing (IDP) — reads handwritten orders, POs, PDFs, PNGs
  - Pre-Order Creation Checkings (credit limit/terms, optional inventory)
  - Sales Order Creation (natural language via WhatsApp)
  - Output Documents: Quotation, Sales Order, Proforma Invoice, Invoice, Credit Note, Receipt
  - Daily Digests (unclosed SOs, unpaid invoices)

#### Supply Chain Agent Assistant (Core)
- **Platform:** WhatsApp
- **Features:**
  - Delivery Note (DO) Creation
  - Output Documents: Delivery Order, Picking List
  - Daily Digests (pending scheduling, scheduled, out for delivery, completed)
  - Notification Reminders: Delivery Delays, Expiring Items, Out of Stock, Low Stock

#### Sales Agent Workspace (Core)
- Sales Order Management
- Order Lifecycle Overview (draft → delivered)
- Output Documents Management
- Customer Management (credit terms/limits)
- Inactive customer alerts (60 days)
- Unclosed SO notifications

#### Supply Chain Agent Workspace (Core)
- Fulfillment Management (DO)
- Order Lifecycle Overview
- Output Documents Management
- Inventory Management
- Delivery Request Classification (normal vs urgent/Lalamove)

#### Finance Workspace (Core)
- Order Tracker
- Order Lifecycle Overview
- Output Documents Management
- Customer Management
- Approval Tracking (approve/reject with timestamps)
- Invoice approval (partial/urgent invoice approval)
- Rejected invoices → cancelled + notification to sales rep

#### Integration & Data Sync with SQL (Accounting)
- **Method:** REST/SDK/API or file-based import/export (CSV/XML via SFTP)
- **Master Data (Read):** Customers, Items, Price Lists, Credit Terms/Limit, Inventory
- **Transactions (Write):** Sales Orders (MAIA → SQL)
- **Status/Docs:** DO status, Invoice status/number, Receipts

---

### Phase A2 — Business Rule & SOP Configuration

#### Price Consistency Check
- Validates selling price against last invoice price and configured markdown bands
- Flags out-of-range prices for Sales Manager approval
- Order locked from processing until approved

#### Finance Workspace Enhancement
- Credit limit/credit term breach approval
- Finance Agent Assistant (WhatsApp) — daily/weekly digest, approval workflow support, notifications

---

### Phase A3 — Enhancements

#### COA (Certificate of Analysis) Module
- COA Upload & Indexing by item, lot/batch, supplier, date
- Document Linking to DO and Invoices
- Prompts During Document Generation

---

## Phase B — Customised Extensions

### Pallet Management Module
- Unique location codes for storage spaces
- Batch-level storage mapping
- Picking automation (FIFO/FEFO)
- Simple mobile/web interface
- Future: movement tracking, cycle counting, QR/barcode scanning

### Account Receivable Bank Statement Module
- Bank statement upload (CSV/Excel) or automated retrieval
- Auto-matching logic (reference, amount, customer name, combination scoring)
- Suggested matches for Finance review
- One-click receipt generation
- Audit trail & reconciliation logs

---

## Estimated Timelines

### Phase A

| Phase | Scope | Build & Integration | Expected Date | Go-Live & Hypercare |
|-------|-------|-------------------|---------------|-------------------|
| A1 | Core Chatbots, Workspaces, Docs, Data Sync, Order → DO flow | 6 weeks | 19 January 2026 | 1-2 weeks |
| A2 | Business Rules, SOP Config, Finance chatbot | 2 weeks | 31 January 2026 | 1-2 weeks |
| A3 | Supply Chain Enhancement (COA) | 2 weeks | 16 February 2026 | 1-2 weeks |

### Phase B
- Pallet Management Module: RM 50,000 - RM 75,000
- AR Bank Statement Module: RM 30,000 - RM 55,000
- **Phase B Total:** RM 80,000 - RM 130,000

---

## Commercial Structure

### Phase A — One-off Development Cost

| Item | Price |
|------|-------|
| Phase A1 (Core MAIA) | RM 24,000 |
| Phase A2 (Business Rules & SOP) | ~~RM 24,000~~ RM 12,000 |
| Phase A3 (Supply Chain Enhancement) | ~~RM 24,000~~ RM 12,000 |
| **Grand Total (Phase A)** | **RM 48,000** |

### Payment Terms — Phase A

| Milestone | Percentage | Amount (RM) | Trigger |
|-----------|-----------|-------------|---------|
| Upfront Payment | 50% | RM 24,000 | Upon project commencement |
| Completion of Phase A1 | 25% | RM 12,000 | Upon delivery of Phase A1 |
| Completion of Phase A2 + A3 | 25% | RM 12,000 | Upon delivery of A2 and A3 |

---

## SLAs

### Mindhive Commitments
- **System Availability:** 99.5% uptime
- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days
- **Lifetime Upgrades & Support**

### Client Commitments
- Designate system administrators
- Provide accurate, timely data
- Respond within 2–3 working days
- Ensure timely payment settlement

---

## Caveats & Exclusions
- Third-party dependencies: Mindhive not liable for external platform issues
- Client responsible for internet, devices, data accuracy
- Unsupported third-party integrations require change request approval

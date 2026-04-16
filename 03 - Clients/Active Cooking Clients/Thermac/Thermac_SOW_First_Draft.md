---
owner: Gareth
status: draft
last_reviewed: 2026-04-15
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/VQ0twmUI3ix7vbkIRdplZhnrgyc
---

# Scope of Work (SOW) - MAIA for Thermac Engineering

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** Thermac Engineering Sdn Bhd ("Thermac") — 26A, Jalan Permata 8/KS9, 41200 Klang, Selangor

**Date:** 13 Apr 2026

---

## Executive Summary

Thermac Engineering operates a regional mechanical equipment and service business covering heat exchangers, pumps, maintenance, repairs, chemical cleaning, hydro-testing, regasketing, refurbishment, spare parts, and related field service work. Manages both product sales and service jobs.

**Current tools:** WhatsApp, email, Excel templates, AutoCount, Esoft, Monday.com calendars, physical work order forms, manual coordination.

This SOW defines a phased implementation:
- Standard MAIA product-sales operating foundation
- Service operations layer
- Pricing intelligence, PO-to-SO conversion, quotation loss tracking, SOA visibility, role-based permissions
- Integration with AutoCount, Esoft, email, WhatsApp

**Current investment: RM 35,000**

---

## Phase One — Product Specifications

### Internal Chatbot (Sales and Order Intake)

**Platform:** WhatsApp, Email, MAIA web workspace

**Features:**
- Intelligent Document Processing (IDP) — parses customer POs
- PO-to-Sales Order Conversion — draft CPO for user review
- Human Review Before Confirmation — no auto-confirm
- Historical Pricing Visibility — last 5 transactions + lifetime average
- Sales Order Creation
- Output Documents: Quotation, Sales Order, Invoice, Delivery Note, Credit Note
- Quotation Loss Tracking

### User Workspaces

**Sales Agent Workspace:**
- Quotation Management
- Sales Order Management
- Customer Management
- Output Document Management
- Pricing Reference View
- Lost Quotation Reporting

**Finance Workspace:**
- Invoice Visibility
- Statement of Account View
- Overdue Flagging
- Finance Follow-Up Support

**Operations and Storekeeper Workspace:**
- Inventory Reference Access
- Role-Based Access
- Delivery Support

**Management Workspace:**
- Operational Visibility
- Quotation Loss Reporting
- Outstanding Account Visibility
- Role-Based Oversight

### Product Sales Document Lifecycle
Quotation → Sales Order → Invoice → Delivery Note → Customer Signs DO

### Integration with AutoCount
- **Method:** API preferred, file-based (CSV/Excel/XML) as alternate
- **Master Data (Read):** Customers, items, pricing, credit terms, inventory
- **Transactions (Write):** SOs, invoices, delivery notes, credit notes

---

## Phase Two — Customisations

### Service Work Order Management
- Work Order Creation from Sales Order
- Customer Linkage, Job Scope Capture, Actual Work Performed
- Parts Planned vs Parts Used
- Attachment Handling (photos, worksheets, signed forms)
- 2-Page Work Order PDF
- Audit Trail

### Calendar and Gantt Scheduling Views
- Shared Calendar View, Gantt View
- Scheduling Conflict Visibility
- Technician Workload View

### Customer Service History
- Service Timeline, Technician Notes, Authorised Visibility

### Proactive Service Reminders
- Next Maintenance Date, Reminder Trigger, Follow-Up Context

### Statement of Account Customer View
- Internal Debtor View, Overdue Flagging, Customer-Facing View

---

## Estimated Timelines

### Phase 1: Base MAIA System

| Item | Indicative Time |
|------|----------------|
| Onboarding & Setup | 1-2 weeks |
| Configuration & Customisation | 1-2 weeks |
| User Training & UAT | 1-2 weeks |

### Phase 2: Customisation & Extensions

| Item | Indicative Time |
|------|----------------|
| Design & Detailed Scoping | 1-2 weeks |
| Build & Integration | 4-8 weeks |
| User Training & UAT | 1-2 weeks |
| Go-Live & Hypercare | 1-2 weeks |

---

## Commercial Structure

### One-off Development Cost

| Item | Price |
|------|-------|
| Core (Baseline MAIA, Product Sales, Workspaces, RBAC, Pricing Intelligence, SOA) | Included |
| Customisations (Service WO, Calendar/Gantt, Service History, Reminders, PO-to-SO, SOA Customer View) | Included |
| **Grand Total** | **RM 35,000** |

### Payment Terms

| Milestone | Percentage | Price |
|-----------|-----------|-------|
| Milestone 1 — Phase One Initiation | 50% | RM 17,500 |
| Milestone 2 — UAT Sign Off | 50% | RM 17,500 |

### Yearly Maintenance and Third-Party Costs

| Item | Estimated |
|------|-----------|
| Monthly platform maintenance | TBC |
| Hosting or infrastructure | TBC |
| WhatsApp, email, AI, OCR, doc-processing | TBC |
| External vendor or integration fees | TBC |
| **Estimated Monthly Total** | **RM 10,000** |

---

## SLAs

### Mindhive
- **System Availability:** 99.5% uptime
- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days
- **Lifetime Upgrades & Support**

### Client Commitments
- Designate system administrators
- Provide accurate, timely data
- Respond within 2-3 working days

---

## Signed
- **Mindhive:** (pending)
- **Thermac:** (pending)

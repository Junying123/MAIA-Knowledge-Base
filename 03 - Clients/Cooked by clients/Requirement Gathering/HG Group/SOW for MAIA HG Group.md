---
owner: Gareth
status: draft
last_reviewed: 2026-05-11
lark_url:
---

|   |   |   |
|---|---|---|
|BETWEEN|The Vendor|**Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor.|
|AND|The Client|**HG Services (M) Sdn Bhd** ("HG Group"), with its office located at Lot 12 & 13, Jalan BK 1/11, Taman Perindustrian Bandar Kinrara, 47180 Puchong, Selangor, Malaysia.|

---

# 1. Executive Summary

HG Services (M) Sdn Bhd is Malaysia's specialist contractor support company for the retail construction lifecycle — hoarding, reinstatement, fit-out, scaffold, printing, lorry, and temporary storage, all delivered in-house across 40+ malls. At 10–40 jobs per day across 900+ WhatsApp groups, the operation currently runs on the founder's knowledge, coordinator memory, and disconnected tools.

**Current tools:** WhatsApp (900+ groups), Infotech (accounting), Odoo (CRM — unused), Google Drive, Google Sheets, Claude (ad hoc).

This SOW defines a phased implementation of MAIA that delivers:

**Phase One — Base MAIA System:**
- Customer Records with payment behaviour tags, service profile tags, and full job history per client
- Quotation with preset rate card, auto-generated quotation number, branded PDF, and one-click conversion to Sales Order
- Sales Order as the confirmed job record — auto-generated sales order number, linked to invoice and work order
- Sales Invoice with auto-generated sales invoice number, configurable payment terms, payment tracking, and receipt recording
- Job Work Order with auto-generated work order number, multi-division support, status lifecycle, team assignment, and completion capture
- Shared Calendar View across all divisions with conflict visibility and workload planning
- Sales Agent, Finance, and Management Workspaces with role-based access
- Data Onboarding via CSV Import

**Phase Two — Customisations:**
- Payment Gate — system blocker: Sales Invoice must be paid before Work Order is issued
- Aging Receivables Report replacing manual Excel aging tracker
- Hoarding Measurement Calculator (RM 2,000) and Sign Board & Printing Calculator (tier TBC)

The current documented implementation investment is **RM [TBC]**, subject to final commercial confirmation and payment terms.

# 2. Product Specifications (Phase One)

The following section outlines the MAIA modules HG Group will receive in Phase One. Each module is designed around HG's existing operating model — one WhatsApp group per client, no-payment-no-work-order rule, and multi-team job execution across Commercial, Fabrication, and Installer divisions.

Phase One focuses on HG's end-to-end job lifecycle: quotation, sales order, invoice, payment confirmation, work order, job execution, and completion.

## 2.2 User Workspaces

Desktop web interfaces where users log in and interact with the system based on their role and permissions.

### 2.2.1 Sales Agent Workspace

**Customer Records**
- Client registration: company name, contact details, billing information, credit terms, WhatsApp primary contact.
- Payment behaviour tags: Blacklisted / Slow Payer / Normal / Preferred Terms.
- Service profile tags: Hoarding-only / Scaffold-only / Temporary Storage-only / Full-suite.
- Full job history: all past quotations, sales orders, invoices, and work orders per customer.
- Outstanding invoice view per customer.

**Quotation**
- Quotation header: auto-generated quotation number, date, valid-until, customer, contact person, site/lot number, mall, prepared-by coordinator, remarks.
- Service line item menu: all service types as preset items; coordinator selects, enters quantity, amount auto-calculates from item master.
- Pricing calculator integration: custom measurement calculators embedded per service type.
- Quotation PDF: generated on submit, branded with HG header, downloadable for WhatsApp sharing.
- Convert to Sales Order: one-click when client confirms, all line items carry forward.
- Quotation lifecycle tracking: all versions saved, searchable, and trackable by status.

**Sales Order**
- Sales order creation: one-click conversion from confirmed quotation, all line items and amounts carry forward.
- Sales order header: auto-generated sales order number, client, contact, site/lot, mall, service scope, payment terms (Net 30 / 60 / 90), linked invoice, linked work order.
- Convert to invoice: generate sales invoice from Sales Order, all line items carry forward.
- Convert to work order: unlocks once linked invoice payment is confirmed.

**Job Work Order**
- Multiple work orders per job: create multiple Work Orders from one Sales Order or Sales Invoice, one per service division; each references parent Sales Order and Sales Invoice, runs independently.
- Work order header: auto-generated work order number, linked Sales Order and Sales Invoice, customer, contact, site/lot, mall, service type, scheduled start and end (e.g. `11:00 PM – 4:00 AM`), priority (Normal / Urgent / Critical), assigned coordinator.
- Work order status lifecycle: Draft → Confirmed → Scheduled → In Progress → Completed. Guard conditions at each transition — reference doc, team assignment, actual timestamps, completion fields. Cancelled available from any state with reason required.
- Team assignment: assign members with roles (Lead / Support) — Commercial Lead, Fabrication Lead, Installer Supervisor, Driver Lead.
- Execution and completion fields: actual start/end datetime, work done notes (required), completion confirmed by (user) and at (timestamp).
- Completion attachment: attach completion document (photo, PDF, or file) when marking Completed.

**Calendar View**
- Shared calendar: display all active work orders by division and date.
- Division filters: Commercial / Fabrication / Installer / Lorry, mall, service type, team owner, status.
- Conflict visibility: surface overlapping lorry deployments or team assignments for manual review.
- Workload view: planning visibility across assigned teams and drivers.

**Active Job Board**
- View all jobs in progress, current stage, and linked work orders.

**Document Management**
- View and download generated PDFs (Quotation, Sales Order, Invoice, Work Order).

### 2.2.2 Finance Workspace

**Sales Invoice & Payment**
- Invoice generation: auto-generated sales invoice number, posting date, due date, customer (auto from Sales Order), Sales Order link, currency (MYR), payment terms (Net 30 / 60 / 90 — configurable per customer).
- Payment tracking: invoice status tracked from Unpaid through to payment received; receipt recorded once payment clears.
- Invoice status tracking: lifecycle from draft through payment confirmed and job spend released.
- Supported actions: Create from Sales Order, Submit (locks amount), Record Receipt, Mark Paid, Convert to Work Order (unlocks after payment confirmed), Release Job Spend, Cancel / Amend with audit trace.
- Receipt recording: supports partial payment recording.

**Invoice Visibility**
- View all invoice records and customer payment status.

**Statement of Account**
- Open invoices, overdue invoices, and outstanding balances per customer.

**Overdue Flagging**
- Flag overdue accounts based on invoice due date plus configured grace period.

**Finance Follow-Up**
- Visibility for finance users to follow up manually.

### 2.2.3 Management Workspace

- **Features:**

    - **Active Job Overview:** View all active jobs across divisions with assignment status and completion progress.
    - **Calendar Schedule View:** See all scheduled Work Orders across the operation in one place.
    - **Outstanding Receivables Summary:** Review debtor balances and overdue accounts at a glance.
    - **Role-Based Oversight:** View cross-functional records according to approved management access rights.

## 2.3 Product Sales Document Lifecycle

HG's job-sales workflow is supported through baseline MAIA modules.

- **Current Product Sales Flow:**
  - Client sends enquiry through WhatsApp group or direct contact.
  - Coordinator prepares quotation manually, waiting on Black to relay measurements and rate confirmation.
  - Client confirms via WhatsApp. No formal system record created at this stage.
  - Sales order recorded manually or tracked in spreadsheets.
  - Invoice issued from Infotech. Payment chased manually with no system visibility.
  - Once payment confirmed verbally, work verbally assigned to division teams (Commercial, Fabrication, Installer).
  - Job executed across teams with no centralised tracking or completion record.

- **Baseline MAIA Coverage:**
  - customer record creation and management
  - quotation creation with preset rate card
  - sales order creation from confirmed quotation
  - invoice generation from sales order
  - payment tracking and receipt recording
  - work order creation from confirmed, paid sales order
  - role-based access and document download

## 2.4 Data Onboarding — CSV Import

Master data migration via CSV before go-live. No manual re-entry of existing data.

- **Features:**

    - **Customer Master Import:** Company name, contact details, billing information, payment tags.
    - **Service Item Master Import:** All rate card items with UoM, preset rates, and calculator formulas.
    - **Mall Master Import:** Mall names and any existing lot reference data.
    - **Import Validation:** Mindhive configures the import template, validates against the system schema, and loads confirmed data.

# 3. Customisation & Extensions

MAIA provides a baseline suite of standard features out of the box. However, HG Group's job operations require customisation because pricing calculators, payment enforcement rules, and work order tracking across multiple divisions are distinct from the standard product-sales flow. Phase Two customisations will be scoped, estimated, and mutually agreed before execution.

## 3.1 Customisations (Phase Two)

### 3.1.1 Aging Receivables Report

Custom report replacing the manual Excel aging tracker currently in use.

- **Platform:** MAIA Web Application

- **Core Features:**

    - **Aging Buckets:** Outstanding receivables per customer broken down by Current / 30+ Days / 60+ Days / 90+ Days.
    - **Customer Drill-Down:** Finance and Management users can click into any customer's aged balance and view the specific unpaid invoices driving it.
    - **Last Payment Date:** Most recent receipt recorded per customer surfaced alongside the aging balance.
    - **Auto-Update:** Aging buckets update automatically based on invoice due dates and recorded receipts — no manual refresh needed.

### 3.1.2 Payment Gate — System Blocker

Custom system constraint that locks the "Convert to Work Order" action on the Sales Order or Sales Invoice until invoice payment is confirmed. Hard system-level block — not a UI warning or soft validation.

- **Platform:** MAIA Web Application

- **Core Features:**

    - **Work Order Lock:** "Convert to Work Order" action on Sales Order and Sales Invoice is unavailable until the linked invoice shows payment received.
    - **Payment Trigger:** Once receipt is recorded against the invoice, the Convert to Work Order action unlocks automatically on both Sales Order and Sales Invoice.
    - **Audit Trail:** Payment receipt timestamp and confirming user recorded against the Work Order creation event.

### 3.1.3 Hoarding Measurement Calculator

Custom calculator embedded in the Quotation for hoarding jobs.

- **Platform:** MAIA Web Application

- **Pricing:** RM 2,000 (simple calculator tier — referenced in scoping discussion, 2026-05-07)

- **Core Features:**

    - **Dimension Input:** Coordinator inputs panel dimensions and height.
    - **Area Calculation:** System calculates total area and converts to the required unit of measure.
    - **Rate Application:** Preset rate applied automatically from the item master.
    - **Minimum Charge Enforcement:** System enforces minimum charge rule — warning triggered if calculated amount falls below the minimum threshold.

### 3.1.4 Sign Board & Printing Calculator

Custom calculator embedded in the Quotation for sign board and printing jobs.

- **Platform:** MAIA Web Application

- **Pricing:** TBC — confirm with Ivan/BD whether simple (RM 2,000) or medium tier applies. Sign board has colour and size variants; more complex than hoarding.

- **Core Features:**

    - **Character and Dimension Input:** Coordinator inputs character count and unit dimensions.
    - **Area Calculation:** System calculates total print area.
    - **Rate Application:** Preset rate applied automatically from the item master.

# 4. Estimated Timelines - Two Phase Delivery

**Phase One: Base MAIA System (per Section 2: Product Specifications)**

Deliver and go-live with the baseline MAIA features outlined in Section 2.

| Item | Indicative Time Taken |
|---|---|
| Onboarding & Setup | 1–2 weeks |
| Configuration & Customisation | 6–10 weeks |
| User Training & UAT | 1–2 weeks |
| Go-Live & Hypercare | 2 weeks |

**Phase Two: Customisations (per Section 3.1)**

After Phase One go-live, Mindhive will design, build, and release the agreed customisations listed in Section 3.1. Timelines confirmed via detailed scoping per item.

| Item | Indicative Time Taken |
|---|---|
| Design & Detailed Scoping | 1–2 weeks |
| Build & Integration | 4–8 weeks |
| User Training & UAT | 1–2 weeks |
| Go-Live & Hypercare | 1–2 weeks |

**Phase One prerequisites before build can begin:** Rate card documentation session with Black (all service types, formulas, and rates). Division assignment and Work Order transition rule confirmation. CSV data files from HG (customer master, item/rate card master, mall master).

# 5. Commercial Structure

- **Pricing Model:** One-off implementation investment with recurring maintenance, hosting, and third-party costs confirmed separately.
- **Customisation Fees:** Current documented investment is RM [TBC]. Any additional scope outside this SOW will be quoted separately on a fixed-price or time-and-materials basis.

## 5.1 One-Off Development Cost

| Item                                                                                                                                                                                                                                                                                                                                                                                                                                               | Price        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **Phase One — Base MAIA**<br>- Baseline Enterprise MAIA System<br>- Customer Records<br>- Quotation<br>- Sales Order<br>- Sales Invoice & Payment (configurable payment terms, payment tracking)<br>- Job Work Order (multi-division)<br>- Calendar View<br>- Active Job Board<br>- Document Management<br>- Invoice Visibility, Statement of Account, Overdue Flagging, Finance Follow-Up<br>- Sales Agent, Finance, and Management Workspaces<br>- Role-Based Permissions<br>- Data Onboarding via CSV Import<br>- Periodic System and Feature Updates | RM [TBC]     |
| **Phase Two — Customisations**<br>- Payment Gate — System Blocker (Invoice → Work Order)<br>- Aging Receivables Report<br>- Hoarding Measurement Calculator (simple tier — RM 2,000)<br>- Sign Board & Printing Calculator (tier TBC — confirm with Ivan/BD)                                                                                                                                                                                       | RM [TBC]     |
| **Grand Total**                                                                                                                                                                                                                                                                                                                                                                                                                                    | **RM [TBC]** |

## 5.2 Payment Terms

| Milestone                          | Percentage | Price |
| ---------------------------------- | ---------- | ----- |
| Milestone 1 — Phase One & Phase Two Initiation | 50% | RM [TBC] |
| Milestone 2 — UAT Sign-Off | 50% | RM [TBC] |


## 5.3 Monthly Maintenance and Third-Party Costs

| Item | Estimated |
|---|---|
| Yearly platform maintenance | RM [TBC] / year |
| Hosting or infrastructure | ~RM [TBC] / month |
| WhatsApp Business (when applicable) | RM [TBC] |
| AI / OpenAI usage costs | RM [TBC] |
| External vendor or integration fees | Subject to Phase Two scoping |

# 6. Caveats & Exclusions

**Not in Scope**

- **Infotech Integration:** No system-to-system integration between MAIA and Infotech is in scope for Phase One or Phase Two. Infotech is HG's current accounting system. MAIA replaces Infotech invoicing at go-live. HG Finance is responsible for managing the transition.
- **CRM / Lead Pipeline:** Not in scope. Phase One starts from Quotation. No lead or enquiry intake flow.
- **Wati → MAIA Integration:** Not in scope. Wati is HG's inbound WhatsApp channel. No integration between Wati and MAIA.
- **Mall Unit Measurement Database:** Not in scope. Auto-population of panel dimensions from Mall + Lot Number is not in scope for Phase One or Phase Two.
- **Completion Report PDF Generation:** MAIA does not generate a structured completion report PDF. Team members attach their own completion document when marking a Work Order as Completed.
- **Stage Workflow (Commercial → Fabrication → Installer progression):** Formal stage-gated progression across divisions is not in scope. Work Order assignments and completion tracking per division are included; stage transitions are not a system-enforced feature.
- **AI-Driven Scheduling:** MAIA does not optimise or auto-assign work schedules. Scheduling decisions remain with the coordinator and management.
- **Collections Automation:** MAIA does not automate payment follow-up or collections. Finance follow-up remains manual.

**Prerequisites and Dependencies**

- **Third-Party Dependencies:** Mindhive is not liable for downtime, access restrictions, API limitations, data errors, or performance issues caused by Wati, WhatsApp, or other external platforms.
- **Connectivity:** HG Group is responsible for internet, devices, and user access readiness at all operating sites.
- **Data Accuracy:** HG Group is responsible for the correctness, completeness, and timeliness of provided data, including rate card data, customer lists, mall master, and job scope entered into MAIA.
- **Rate Card Session:** Quotation module configuration cannot begin until Black provides the full rate card. Any delay to this session delays Phase One build start.
- **Scaffold Calculator:** Phase Two scaffold calculator scope cannot be locked until Jeremy provides calculator samples (action item from scoping, 2026-05-07).
- **Wati Integration:** Phase Two Wati → MAIA integration is contingent on Wati going live and HG updating all three inbound channel numbers. Delays on the Wati side delay this feature.

# 7. Service Level Agreements (SLAs)

## 7.1 Mindhive Commitments

**System Availability:** 99.5% uptime excluding scheduled maintenance, subject to final hosting and support package confirmation.

**Support Response Times:**

- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours where practical.

**Data Protection:** Regular backups and reasonable disaster recovery practices to safeguard client data, subject to final deployment model.

**Lifetime Upgrades & Support:** HG Group continues to receive ongoing product upgrades, security enhancements, and support for the lifetime of the active subscription or support arrangement.

## 7.2 Client Commitments

**User Access & Permissions:** HG Group will designate system administrators and confirm internal user roles, permissions, and access boundaries.

**Data Provisioning:** HG Group will provide accurate, complete, and timely data uploads, sample documents, rate card data, and CSV files required for onboarding and implementation.

**Timely Feedback:** HG Group will provide approvals, clarifications, and input during configuration, customisation, implementation, and UAT to avoid project delays.

**Point of Contact:** HG Group will designate a primary point of contact for Mindhive communications — confirmed as Black (Lee). HG Group commits to responding to vendor queries, requests, or approvals within 2–3 working days.

**Completion Report Samples:** HG Group will provide 2–3 sample Completion Report PDFs from existing completed jobs before Work Order design is finalised.

**Payments:** HG Group will ensure timely settlement of invoices and approved costs according to agreed commercial terms.

# 8. Acknowledgement & Agreement

## 8.1 Delivery Model

MAIA is delivered as a cloud-hosted platform. Final deployment setup, hosting, support package, and environment details remain subject to technical and commercial confirmation.

## 8.2 System Interfaces

- **Web Application:** Browser-based access for Sales Agent, Finance, and Management users.
- **Mobile-Responsive Access:** Subject to final user workflow needs and supported screens.
- **WhatsApp:** Used for customer communication and job group management. MAIA does not replace or control HG's WhatsApp group structure or self-built chatbot.
- **Integration Interfaces:** No third-party system integrations are in scope for Phase One or Phase Two. Future integration requirements will be handled through separate scoping and change request approval.

## 8.3 Core System Capabilities

MAIA provides a unified business foundation for quotation, sales documents, customer records, job work orders, calendar scheduling, role-based access, document generation, workflow visibility, and operational traceability.

## 8.4 Security & Compliance

MAIA access will be configured based on user roles and approved permission rules. Final authentication, data isolation, encryption, backup, and compliance commitments depend on the agreed deployment and support package.

## 8.5 Availability & Performance

MAIA is designed for high availability and scalable performance. Final uptime, monitoring, and support commitments are governed by the agreed support arrangement.

## 8.6 Customisation & Extensibility

Future workflow changes, new integrations, additional calculators, advanced scheduling, AI-driven features, or additional modules will be handled through separate scoping and change request approval.

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive Sdn Bhd:**

**For HG Services (M) Sdn Bhd:**

|   |
|---|
|____________________________ Signature|
|Name:<br><br>Position:<br><br>Date:|

|   |
|---|
|____________________________ Signature|
|Name:<br><br>Position:<br><br>Date:|

---

## ⚠️ Internal Gaps — Resolve Before Sending Externally

> **Updated 2026-05-11**

**Commercial**
1. **All RM amounts are TBC** — Agree Phase One and Phase Two fees with Mindhive BD before sharing with HG.
2. **Effective date** — Confirm intended contract date for the header.

**Pre-Build Actions**
3. **Rate card session not scheduled** — Quotation module cannot be configured without complete rates. Hoarding confirmed; all other services TBC. Schedule 60-minute session with Black.
4. **Division assignment flow** — Ask Black: "Does one coordinator assign all three teams, or do team leads self-assign from a queue?"
5. **Infotech transition plan** — Confirm with Black: MAIA replaces Infotech invoicing at go-live. No integration. HG Finance must plan for cutover.

**Phase Two Dependencies**
6. **Scaffold calculator samples** — Ivan to obtain calculation samples from Jeremy before Phase Two scaffold calculator scope can be locked. (From scoping discussion, 2026-05-07.)

## See Also

- [[Customer Narrative - HG Group]]
- [[HG Group - Customer Profile]]
- [[HG Group - Quotation Module Proposal]]
- [[HG Group - Job Work Order Module Proposal]]
- [[HG Group - Invoice Module Proposal]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[HG Group - Completion Report Module Proposal (Open Questions)]]

---
owner: Gareth
status: approved
last_reviewed: 2026-05-12
template_type: SOW
reference_clients: Thermac, Fixguru, Holsen
---

# SOW — MAIA for [Client Name]

> **How to use this template:**
> Copy this file. Replace all `[PLACEHOLDERS]` with client-specific values. Delete sections that don't apply. Add custom modules in Section 3. Never edit this template directly.
>
> **Skill reference:** Use the `sow-writer` skill for guided drafting.

The Services Agreement is made effective as of `[DD Month YYYY / TBC]`.

| BETWEEN | The Vendor | **Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor. |
|---|---|---|
| AND | The Client | **[CLIENT LEGAL NAME]** ("[CLIENT SHORT NAME]"), with its office located at [CLIENT ADDRESS]. |

---

# 1. Executive Summary

[CLIENT SHORT NAME] `[brief: what the client does, how they operate, scale/volume]`.

`[Para 2: Current workflow — what tools they use today (WhatsApp, Excel, ERP name), where the pain is, what breaks down.]`

`[Para 3 (optional): Secondary business motion that also needs MAIA — e.g. service ops, kiosk, consignment billing.]`

This SOW defines a phased implementation of MAIA that introduces:

- `[specific deliverable 1 — name the feature and the outcome it fixes]`
- `[specific deliverable 2]`
- `[specific deliverable 3]`
- `[specific deliverable 4]`

The current documented implementation investment is **RM [AMOUNT]**, subject to final commercial confirmation, payment terms, and dependency validation.

## 1.1 Enterprise Baseline Modules

The following sections outline the baseline modules included in the MAIA implementation for [CLIENT SHORT NAME]:

- `[Module 1 — e.g. Internal Chatbot (Sales and Order Intake)]`
- `[Module 2 — e.g. User Workspaces]`
- `[Module 3 — e.g. Product Sales Document Lifecycle]`
- `[Module 4 — e.g. Integration and Data Sync with AutoCount]`

---

# 2. Product Specifications (Phase One)

`[One sentence: who the client is and their primary sales or operational flow.]`

Phase One focuses on `[CLIENT SHORT NAME]`'s `[primary business motion]`, where the current workflow follows: `[e.g. enquiry → quotation → purchase order → sales order → invoice → delivery note]`.

## 2.1 Internal Chatbot (Sales and Order Intake)

### 2.1.1 Sales Agent Assistant

The Sales Agent Assistant serves as an assistant to help [CLIENT SHORT NAME]'s sales team capture customer enquiries, process purchase orders, prepare sales records, and reduce repetitive manual order entry.

- **Platform:**
  - WhatsApp
  - `[Email intake / MAIA web workspace — adjust per client]`

- **Features:**
  - **Intelligent Document Processing (IDP):** MAIA parses customer purchase orders received through supported document formats and extracts key order information for user review.
  - **PO-to-Sales Order Conversion:** MAIA creates a draft record from the customer PO. The user reviews, edits, and confirms before MAIA creates the sales order.
  - **Human Review Before Confirmation:** MAIA does not auto-confirm customer orders. Users remain responsible for validating extracted items, quantities, descriptions, and pricing.
  - **Sales Order Creation:** Users create or confirm sales orders after quotation acceptance or official purchase order receipt.
  - **Output Document Generation:** To generate output documents. List of output documents supported:
    - Quotation
    - Sales Order
    - Invoice
    - Delivery Note
    - Credit Note
    - `[Add or remove per client scope]`

Notes:

- `[State any limitations, dependencies, or confirmations needed.]`

## 2.2 User Workspaces

Desktop Web interfaces where users can log in and interact with the system based on their role and permissions.

### 2.2.1 Sales Agent Workspace

- **Features:**
  - **Quotation Management:** Create, review, revise, and track quotations.
  - **Sales Order Management:** Create, modify, and track sales orders after customer confirmation.
  - **Customer Management:** View customer records, payment terms, and historical transactions.
  - **Output Document Management:** View and download generated documents such as quotations, sales orders, invoices, delivery notes, and credit notes.

### 2.2.2 Finance Workspace

- **Features:**
  - **Invoice Visibility:** View invoice records and customer payment status.
  - **Statement of Account View:** Display open invoices, overdue invoices, and outstanding balances per customer.
  - **Overdue Flagging:** Flag overdue accounts based on invoice due date plus a configured grace period.

### 2.2.3 Logistics Workspace

- **Features:**
  - **Inventory Reference Access:** View product and stock-related operational information.
  - **Role-Based Access:** Storekeeper or logistics users can access operational functions without requiring full financial access.
  - **Delivery Support:** View relevant order and delivery records required for fulfilment coordination.

### 2.2.4 Management Workspace

- **Features:**
  - **Operational Visibility:** View sales, quotation, customer, and finance summaries where configured.
  - **Role-Based Oversight:** View cross-functional records according to approved management access rights.

## 2.3 [CLIENT SHORT NAME] Document Lifecycle

[CLIENT SHORT NAME]'s `[sales / service / product]` workflow is supported through baseline MAIA modules.

**Standard Document Flow:**

`Quotation → Sales Order → Invoice → Delivery Note → Credit Note (if needed)`

> Adjust the flow above to match the client's actual agreed process.

**Baseline MAIA Coverage:**

- Quotation creation
- Sales order creation
- Invoice generation
- Delivery note generation
- Credit note support
- Customer record visibility
- Role-based access
- Document download and retrieval

## 2.4 Integration and Data Sync with [ACCOUNTING SYSTEM]

To push and synchronise data with [ACCOUNTING SYSTEM], the following connectivity is required. Final method is subject to confirmation with [CLIENT SHORT NAME]'s [ACCOUNTING SYSTEM] vendor or IT team.

- **Integration Method:**
  - Preferred: API, service connector, or supported [ACCOUNTING SYSTEM] integration endpoint, subject to vendor confirmation.
  - Alternate: Secure file-based import/export via CSV, Excel, XML, or agreed file transfer method if API access is restricted.

- **Core Touchpoints:**
  - Master Data (Read): Customers, items, pricing references, credit terms, and available inventory references where accessible.
  - Transactions (Write): Sales orders, invoices, delivery notes, credit notes, or other agreed document records from MAIA to [ACCOUNTING SYSTEM].
  - Status / Documents (Read/Write as applicable): Invoice status, document numbers, delivery status, and related accounting references.

- **Dependencies:**
  - [ACCOUNTING SYSTEM] hosting type, network accessibility, and vendor contact for API or file specifications.
  - Sample data exports to verify field mapping.
  - Client-side permission and access approval.

Notes:

- [ACCOUNTING SYSTEM] is expected to remain the accounting system of record unless otherwise agreed.
- Mindhive will not guarantee API integration until access and technical feasibility are confirmed.

---

# 3. Customisation & Extensions (Phase Two Onwards)

MAIA provides a baseline suite of standard features out of the box. However, [CLIENT SHORT NAME]'s `[specific workflow]` requires customisation because `[reason — what makes it distinct from the standard flow]`. These customisations will be scoped, refined, and mutually agreed before execution.

## 3.1 Customisations (Phase Two)

### 3.1.1 [Custom Feature Name]

- **Platform:** MAIA Web Application `[/ WhatsApp]`

- **Core Features:**
  - **[Feature Name]:** [What it does — specific to this client.]
  - **[Feature Name]:** [What it does.]

Notes:

- `[Limitation or dependency.]`

### 3.1.2 [Custom Feature Name]

- **Platform:** MAIA Web Application

- **Core Features:**
  - **[Feature Name]:** [What it does.]

Notes:

- `[Limitation or dependency.]`

## 3.2 Customisations (Phase Three)

> Only include if Phase Three is in scope. Delete this subsection otherwise.

### 3.2.1 Future Extensions Subject to Separate Validation

- **Platform:** MAIA Web Application and related integrations, subject to future scoping.

- **Potential Future Features:**
  - **[Feature]:** [Description.]

Notes:

- Phase Three items are not included in the current confirmed scope unless separately agreed.
- These items require separate discovery, pricing, timeline confirmation, and change request approval.

---

# 4. Estimated Timelines - Two Phase Delivery

> Change title to "Three Phase Delivery" if Phase Three exists.

**Phase 1: Core MAIA System (per Section 2: Product Specifications)**

Deliver and go-live with the baseline MAIA features outlined in Section 2.

| Item | Indicative Time Taken |
|---|---|
| Onboarding & Setup | 1–2 weeks |
| Configuration & Build | 1–2 weeks |
| User Training & UAT | 1–2 weeks |
| Go-Live & Hypercare | 1–2 weeks |

**Phase 2: Customisation & Extensions (per Section 3.1)**

After Phase 1 go-live, Mindhive will design, build, and release the agreed customisations listed in Section 3.1. Timelines are confirmed via detailed scoping per item.

| Item | Indicative Time Taken |
|---|---|
| Design & Detailed Scoping | 1–2 weeks |
| Build & Integration | 4–8 weeks |
| User Training & UAT | 1–2 weeks |
| Go-Live & Hypercare | 1–2 weeks |

Notes: All durations are indicative and depend on scope complexity, sample document readiness, integration feasibility, vendor responsiveness, and client responsiveness. Approvals and clarifications are typically expected within 2–3 working days as outlined in Client Commitments.

---

# 5. Commercial Structure

- **Pricing Model:** One-off upfront implementation investment plus a yearly recurring fee covering hosting, database support, server support, and ongoing platform access within the agreed usage cap.
- **Customisation Fees:** Current documented investment is RM [AMOUNT]. Any additional scope outside this SOW will be quoted separately on a fixed-price or time-and-materials basis.
- **Usage Cap:** `[e.g. The included hosting and server arrangement is capped at 500 quotations generated and 200 orders created per month.]`
- **Hosting Model:** Mindhive will host the database and servers on shared infrastructure together with a small number of other clients. [CLIENT SHORT NAME]'s access will remain restricted to [CLIENT SHORT NAME]'s own data only.

## 5.1 One-Off Development Cost

| Item | Price |
|---|---|
| **Core**<br>- Baseline Enterprise MAIA System<br>- `[Module 1]`<br>- `[Module 2]`<br>- Periodic System and Feature Updates<br>- Storage, Model Training, Ingestion | Included in total |
| **Customisations**<br>- `[Custom Module 1]`<br>- `[Custom Module 2]` | Included in total |
| **Grand Total** | **RM [AMOUNT]** |

## 5.2 Payment Terms

| Milestone | Percentage | Price |
|---|---|---|
| Milestone 1 — Phase One Initiation | 50% | RM [AMOUNT] |
| Milestone 2 — Final UAT Sign-Off after completion of agreed Phase One and Phase Two scope | 50% | RM [AMOUNT] |

## 5.3 Yearly Maintenance and Third-Party Costs

| Item | Estimated |
|---|---|
| Yearly platform maintenance | RM [AMOUNT] / year |
| Hosting or infrastructure | TBC |
| External vendor or integration fees | TBC |

---

# 6. Caveats & Exclusions

- **Third-Party Dependencies:** Mindhive is not liable for downtime, access restrictions, API limitations, data errors, or performance issues caused by [ACCOUNTING SYSTEM], WhatsApp, email providers, or other external platforms.
- **Connectivity:** [CLIENT SHORT NAME] is responsible for internet, devices, internal network readiness, and user access readiness.
- **Client-Side Integrations:** Unsupported third-party integrations outside the approved scope are excluded and require change request approval.
- **Data Accuracy:** [CLIENT SHORT NAME] is responsible for the correctness, completeness, and timeliness of provided data, including customer lists, product catalogues, historical transactions, pricing files, and sample documents.
- **[ACCOUNTING SYSTEM] Integration:** Integration method is subject to confirmation with [CLIENT SHORT NAME]'s [ACCOUNTING SYSTEM] vendor or IT team. Mindhive will not guarantee API integration until access and technical feasibility are confirmed.
- `[Add client-specific caveats here]`

---

# 7. Service Level Agreements (SLAs)

## 7.1 Mindhive Commitments

**System Availability:** 99.5% uptime excluding scheduled maintenance, subject to final hosting and support package confirmation.

**Support Response Times:**

- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours where practical.

**Data Protection:** Regular backups and reasonable disaster recovery practices to safeguard client data, subject to final deployment model.

**Lifetime Upgrades & Support:** [CLIENT SHORT NAME] continues to receive ongoing product upgrades, security enhancements, and support for the lifetime of the active subscription or support arrangement.

## 7.2 Client Commitments

**User Access & Permissions:** [CLIENT SHORT NAME] will designate system administrators and confirm internal user roles, permissions, and access boundaries.

**Data Provisioning:** [CLIENT SHORT NAME] will provide accurate, complete, and timely data uploads, sample documents, templates, and workflow inputs required for onboarding and implementation.

**Timely Feedback:** [CLIENT SHORT NAME] will provide approvals, clarifications, and input during configuration, customisation, implementation, and UAT to avoid project delays.

**Compliance:** [CLIENT SHORT NAME] will adhere to licensing terms, security practices, and applicable operational regulations.

**Point of Contact:** [CLIENT SHORT NAME] will designate a primary point of contact for Mindhive communications. [CLIENT SHORT NAME] commits to responding to vendor queries, requests, or approvals within 2–3 working days.

**Payments:** [CLIENT SHORT NAME] will ensure timely settlement of subscription fees, invoices, and approved change request costs according to agreed commercial terms.

---

# 8. Appendix

## 8.1 Delivery Model

MAIA is expected to be delivered as a cloud-hosted platform. Final deployment setup, hosting, support package, and environment details remain subject to technical and commercial confirmation.

## 8.2 System Interfaces

- **Web Application:** Browser-based access for `[list user roles]` users.
- **Mobile-Responsive Access:** Subject to final user workflow needs and supported screens.
- **WhatsApp and Email:** Used for customer communication, order intake context, and PO document handling where applicable.
- **Integration Interfaces:** [ACCOUNTING SYSTEM] and other touchpoints are subject to vendor access, file samples, and technical validation.

## 8.3 Core System Capabilities

MAIA provides a unified business foundation for sales documents, customer records, service context, role-based access, document generation, workflow visibility, and operational traceability.

## 8.4 Security & Compliance

MAIA access will be configured based on user roles and approved permission rules. Final authentication, data isolation, encryption, backup, and compliance commitments depend on the agreed deployment and support package.

## 8.5 Availability & Performance

MAIA is designed for high availability and scalable performance. Final uptime, monitoring, and support commitments are governed by the agreed support arrangement.

## 8.6 Customisation & Extensibility

Future workflow changes, new integrations, additional document formats, or additional modules will be handled through separate scoping and change request approval.

---

# 9. Acknowledgement & Agreement

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive Sdn Bhd:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

**For [CLIENT LEGAL NAME]:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

---

## See Also

- [[02 - PM Playbook/Templates/[Template] SOW Writing Guide]]
- [[03 - Clients/Active Cooking Clients/Thermac/Thermac_SOW]] — canonical reference

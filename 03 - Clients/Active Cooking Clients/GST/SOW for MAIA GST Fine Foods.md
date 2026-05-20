---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
client: GST Fine Foods
lark_url:
---

# SOW — MAIA for GST Fine Foods

The Services Agreement is made effective as of [TBC — confirm with GST before sending].

| BETWEEN | The Vendor | **Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor. |
|---|---|---|
| AND | The Client | **GST Fine Foods Sdn Bhd** ("GST"), with its office located at [Client address TBC]. |

---

# 1. Executive Summary

GST Fine Foods is a Malaysian frozen seafood supplier and B2B distributor — barramundi, tiger prawns, whole fish, salmon, squid, shellfish, and related frozen categories — with operations across Penang, Langkawi, and KL. Today, quotation handling, order preparation, payment verification, and stock coordination are managed through SAP Business One combined with heavy manual effort in Excel, WhatsApp, and phone coordination.

**Current tools:** SAP Business One · Excel RFQ files · WhatsApp · Crystal Reports documents · manual stock spreadsheets

This SOW defines a phased implementation of MAIA that introduces:

- Structured RFQ intake and product matching, replacing manual Excel interpretation
- Standard Sales Order creation with automated business rule checks (stock, credit, pricing)
- Finance approval routing for payment slips and credit-limit exceptions
- CPRN commitment tracking to manage blanket reservations and stock earmarks
- SAP Business One integration with Crystal Reports-aligned document output

The current documented implementation investment is **RM 27,500** (Phase 1 + Phase 2 customisation bundle, payable post-UAT), subject to final commercial confirmation, payment terms, and dependency validation.

## 1.1 Enterprise Baseline Modules

The following sections outline the baseline modules included in the MAIA implementation for GST:

- Internal Chatbots
- User Workspaces
- GST Document Lifecycle
- Integration and Data Sync with SAP Business One

---

# 2. Product Specifications (Phase One)

GST Fine Foods' B2B seafood distribution workflow is supported through baseline MAIA modules. Phase One focuses on GST's core sales order flow, where the current process follows: RFQ receipt → product matching → quotation → sales order → payment verification → invoice → delivery.

## 2.1 Internal Chatbots

### 2.1.1 Sales Agent Assistant

The Sales Agent Assistant serves as an internal operational layer to help GST's sales team capture customer RFQs, match products, create standard sales orders, enforce business rules, and route approval exceptions — operating primarily through WhatsApp.

- **Platform:**
  - WhatsApp (internal staff-facing)

- **Features:**
  - **Intelligent Document Processing (IDP):** Reads Excel RFQ files, extracts line items, structures quotation content for review.
  - **Product Matching Support:** Maps customer wording against GST's internal SAP item master — surfaces likely matches for staff confirmation.
  - **Sales Order Creation:** Standard order flow initiated via WhatsApp or workspace.
  - **Pre-Order Business Rule Checks:**
    - Stock availability (against agreed inventory source — SAP live or daily extract, to be confirmed)
    - Customer pricing reference (SAP price list)
    - Credit limit check and credit block handling
    - Customer-specific conditions where configured
  - **Approval Routing:**
    - Payment slip forwarded to finance for review before close-out
    - Credit limit breach → escalation to finance / management
  - **Document Generation:** All documents generated in Crystal Reports-aligned layout (see Section 2.3).
  - **Daily Digests:** Unclosed SOs, outstanding payment slips, flagged stock items.

Notes:

- Stock availability source (SAP live vs daily extract vs hybrid) must be confirmed by GST before Phase 1 build starts.
- Product matching support in Phase 1 covers basic item lookup. Deeper quotation matching logic is Phase 2 Customisation 1.

### 2.1.2 Logistics Reference

Phase 1 includes basic delivery-related document visibility as a reference output. Full logistics workflow is not in Phase 1 scope unless pulled forward.

Notes:

- Logistics workspace and delivery order management are reference-only in Phase 1.

## 2.2 User Workspaces

Desktop web interfaces where users can log in and interact with the system based on their role and permissions.

### 2.2.1 Sales Agent Workspace

- **Features:**
  - **Quotation Management:** Draft review, SO lifecycle, product match confirmation.
  - **Customer History Reference:** View customer records, pricing, and historical transaction context.
  - **Stock Query:** Surface stock-related queries against the agreed inventory source.
  - **Output Document Management:** View and download generated documents.

### 2.2.2 Finance Workspace

- **Features:**
  - **Payment Slip Queue and Review:** Receive and review payment slips forwarded by sales staff.
  - **Credit Limit Visibility:** View customer credit status and flag exceptions.
  - **Approval Trail:** Record who reviewed and approved payment and credit exceptions.
  - **Exception Log:** Visible audit trail of all flagged and resolved exceptions.

### 2.2.3 Management / Backend Dashboard

- **Features:**
  - **Operational Overview:** SO status, outstanding exceptions, payment and credit flags, activity trail.
  - **Exception Visibility:** Review all pending and resolved approval cases.
  - **Role-Based Oversight:** View cross-functional records according to approved management access rights.

## 2.3 GST Document Lifecycle

GST Fine Foods' sales document flow is supported through baseline MAIA modules. All documents must match GST's existing **SAP Crystal Reports layouts** — same formulas, same structure, same "premium" format. This is a non-negotiable quality bar for GST and will be validated during UAT.

**Standard Document Flow:**

`Quotation → Sales Order → Invoice → Delivery Note → Credit Note (if needed)`

**Documents included in Phase 1:**

| Document | Phase |
|---|---|
| Sales Order (Crystal-aligned) | Phase 1 |
| Invoice (Crystal-aligned) | Phase 1 |
| Invoice PDF | Phase 1 |
| Credit Note reference output | Phase 1 |
| Delivery reference output | Phase 1 |

Notes:

- GST must provide **PDF samples** of gold-standard Crystal outputs per document type before build begins.
- Without samples, Mindhive will use best-effort layout. Crystal alignment cannot be validated without samples.

## 2.4 Integration and Data Sync with SAP Business One

To push and synchronise data with SAP Business One, the following connectivity is required. Final method is subject to confirmation with GST's SAP vendor or IT team.

- **Integration Method:**
  - Preferred: API via SAP B1 Service Layer, subject to vendor confirmation.
  - Alternate: Secure file-based import/export via CSV or XML via SFTP if API access is restricted.

- **Core Touchpoints:**

| Direction | Frequency | Data Objects |
|---|---|---|
| SAP B1 → MAIA (pull) | Configurable (near-real-time for item/BOM changes; daily for stock snapshot) | Customers, Item Master, Price Lists, Credit Limits, Credit Terms, Inventory / Stock |
| MAIA → SAP B1 (push) | On confirmation | Sales Orders, Invoices, Receipts, Credit Notes |

- **Dependencies:**
  - SAP B1 hosting type, network accessibility, and vendor contact for API or file specifications.
  - Sample data exports to verify field mapping.
  - Client-side permission and access approval.

Notes:

- SAP Business One is expected to remain the accounting system of record unless otherwise agreed.
- Mindhive will not guarantee API integration until access and technical feasibility are confirmed.
- **Critical sync requirement:** When a product is processed from whole fish to a cut (e.g. whole → fish head), SAP's item/BOM update must sync to MAIA without delay. Stale SKUs in MAIA while SAP reflects the new cut will cause document mismatch. Cron interval to be agreed with GST — configurable as per operational need.

**Phase 1 Go-Live Deliverables**

At the end of Phase 1, GST will have:

- A working internal WhatsApp workflow for sales staff to handle standard order creation, product matching, and approval exceptions
- Finance and management workspace with live visibility across SOs, payment slips, and credit flags
- All agreed Phase 1 documents generating in Crystal-aligned format
- SAP B1 integration live and tested
- Agreed users trained
- Phase 1 UAT passed and signed off

---

# 3. Customisation & Extensions (Phase Two Onwards)

MAIA provides a baseline suite of standard features out of the box. However, GST's frozen seafood distribution workflow requires customisation because RFQ matching logic, stock aging rules, CPRN commitment tracking, and statement of account generation are distinct from the standard product-sales flow. These customisations will be scoped, estimated, refined, and mutually agreed before execution.

## 3.1 Customisations (Phase Two)

### 3.1.1 RFQ Intake and Product Matching (Quotation Workflow)

- **Platform:** WhatsApp (internal) and MAIA Web Application

- **Core Features:**
  - **Multi-Column Excel RFQ Ingestion:** Reads varying RFQ formats — GST to provide sample files.
  - **Matching Logic:** Matches across substitution dimensions: species/origin, cut (fillet/tail/head/portion), weight band, pack format.
  - **Match Output:** Structured text/workspace view — MAIA does not auto-fill the customer's Excel.
  - **Staff Review Screen:** See all matches, adjust, fill or confirm price.
  - **Optional Recommended Pricing:** From SAP price list, subject to Phase 2 direction.

Notes:

- Matching customer natural-language seafood descriptions to internal SAP SKUs requires client-specific item reference setup, substitution logic configuration, and matching rule validation beyond standard item lookup.
- GST must provide 3–5 anonymised sample RFQ Excel files before Phase 2 build begins.

### 3.1.2 Aging and Clearance Reminder Logic

- **Platform:** WhatsApp (internal) and MAIA Web Application

- **Core Features:**
  - **Configurable Aging Thresholds:** By item category — exact rules to be defined in RG.
  - **Batch-Level Visibility:** Sourced from SAP (batch no., expiry date, qty).
  - **Reminders:** Via WhatsApp digest and/or workspace flag to relevant salesperson.
  - **Management Visibility:** Aging stock summary view.

Notes:

- Threshold rules, item-category logic, and reminder routing are GST-specific and cannot be assumed from standard MAIA behaviour.

### 3.1.3 Excel Export for Planning and Operational Review

- **Platform:** MAIA Web Application

- **Core Features:**
  - **Agreed Dataset Export:** Stock aging summary, open SO list, CPRN outstanding, customer AR buckets — dataset list to be confirmed during RG.
  - **Standard Column Layout:** GST to advise if mandatory templates exist.
  - **Export Trigger:** Available via workspace export action.

Notes:

- Custom export structures and planning-oriented layouts are client-specific.

### 3.1.4 Customer Purchase Request Note (CPRN) Tracking

- **Platform:** WhatsApp (internal) and MAIA Web Application

- **Core Features:**
  - **CPRN Creation:** Sales staff raise a CPRN via WhatsApp or workspace: customer, item, total committed qty, expected timeline, owning salesperson. CPRN creates a soft stock earmark — reduces available-to-sell qty for other staff.
  - **Consumption Tracking:** Each release against the CPRN reduces the remaining balance. Running balance visible in workspace. Each release links to the corresponding SO.
  - **Conflict Resolution:** When stock is earmarked under a CPRN, other salespeople see it as unavailable. If another salesperson attempts to sell earmarked stock, the system routes a release request to the CPRN owner or manager. Approval model to be confirmed by GST: (a) CPRN owner releases, (b) manager approves, or (c) purchasing controls.
  - **Hold Expiry:** CPRN holds with no consumption for a configurable period trigger a reminder. Manual or approval-triggered release clears the earmark back to available pool. Audit trail of who released, when, and why.
  - **Purchasing Visibility:** CPRN summary visible to purchasing so advance buying decisions can reference committed demand.
  - **Conversion to SO:** CPRN can be fully or partially converted to a confirmed SO. Converted SO references original CPRN number for traceability. SAP push on conversion (mechanics to be confirmed in RG).

Notes:

- CPRN is a new document type specific to GST. Requires custom reservation logic, conflict routing, approval graph, and lifecycle management not in standard MAIA.
- **Phase 2 CPRN build cannot begin until GST confirms the approval model** — this is a blocking decision.

### 3.1.5 Statement of Account Generation

- **Platform:** MAIA Web Application

- **Core Features:**
  - **Customer AR Summary:** Open invoices, outstanding amounts, payment history.
  - **Format Matching:** Matches SAP SOA layout.
  - **Multi-Branch AR:** Consolidated or per-entity view (to be confirmed).
  - **Trigger:** On-demand via workspace.

Notes:

- This customisation depends on SAP B1 access to AR-level data and the agreed integration approach. Final scope will be confirmed after technical validation.
- If not feasible in Phase 2, it moves to a subsequent phase and cost will be revised before that milestone is charged.

---

# 4. Estimated Timelines - Two Phase Delivery

**Phase 1: Core MAIA System (per Section 2: Product Specifications)**

Deliver and go-live with the baseline MAIA features outlined in Section 2.

| Item | Indicative Time Taken |
|---|---:|
| Onboarding & Setup | 1–2 weeks |
| SAP B1 Integration | ~2 weeks (dependent on vendor access) |
| Configuration & Build | ~2–4 weeks |
| User Training & UAT | 1–2 weeks |
| Go-Live & Hypercare | 1–2 weeks |

**Phase 2: Customisation & Extensions (per Section 3.1)**

After Phase 1 go-live, Mindhive will design, build, and release the agreed customisations listed in Section 3.1. Timelines are confirmed via detailed scoping per item.

| Item | Indicative Time Taken |
|---|---:|
| Design & Detailed Scoping | 1–2 weeks |
| Build & Integration | TBC — scoped after Phase 1 UAT |
| User Training & UAT | 1–2 weeks |
| Go-Live & Hypercare | 1–2 weeks |

Notes: All durations are indicative and depend on scope complexity, SAP B1 vendor access and API readiness, sample document readiness (RFQ files, Crystal PDF samples, item master), CPRN approval model decision, and client responsiveness. Approvals and clarifications are typically expected within 2–3 working days as outlined in Client Commitments.

---

# 5. Commercial Structure

- **Pricing Model:** One-off implementation investment with monthly recurring subscription covering platform access, hosting, maintenance, and agreed support.
- **Customisation Fees:** Current documented investment is RM 27,500 (Phase 1 + Phase 2 bundle). Any additional scope outside this SOW will be quoted separately on a fixed-price or time-and-materials basis.
- **Payment Terms:** Post-UAT — no upfront payment required. Monthly billing begins only after Phase 1 goes live.
- **Renewal & Escalation:** TBC.

## 5.1 One-Off Development Cost

| Item | Price |
|---|---:|
| **Phase One — Core B2B Sales Agent + SAP Integration**<br>- Internal Sales Agent Chatbot (WhatsApp)<br>- User Workspaces (Sales, Finance, Management)<br>- Business Rule Checks (stock, credit, pricing)<br>- Approval Routing (payment slips, credit limit exceptions)<br>- Crystal Reports-aligned Document Generation<br>- SAP Business One Integration<br>- Training and Go-Live Support | ~~RM 48,000~~ **RM 20,000** |
| **Phase Two — Customisation Bundle**<br>- RFQ Intake and Product Matching<br>- Aging and Clearance Reminder Logic<br>- Excel Export for Planning<br>- CPRN Tracking<br>- Statement of Account Generation (subject to SAP-side validation) | **RM 7,500** |
| **Grand Total** | **RM 27,500** |

## 5.2 Payment Terms

| Milestone | Amount | Payment Trigger |
|---|---:|---|
| Milestone 1 — Phase 1 UAT Completion | RM 20,000 | Payable only after Phase 1 UAT is passed and signed off by GST |
| Milestone 2 — Phase 2 UAT Completion | RM 7,500 | Payable only after Phase 2 UAT is passed and signed off by GST |

## 5.3 Monthly Maintenance and Third-Party Costs

| Branch Coverage | Monthly Fee |
|---|---:|
| KL only | RM 2,500 |
| KL + Penang | RM 4,500 |
| KL + Penang + Langkawi | RM 5,500 |

**Branch top-up pricing:**

| Branch | Estimated Volume | Monthly Add-On | One-Off Implementation |
|---|---|---:|---:|
| Penang | ~4,000 orders/month | +RM 2,000 | RM 10,000 |
| Langkawi | ~2,000 orders/month | +RM 1,000 | RM 10,000 |

Monthly breakdown (indicative — to be confirmed):

| Item | Estimated |
|---|---:|
| Platform access and maintenance | TBC |
| Hosting and infrastructure | TBC |
| AI / LLM usage costs | TBC |
| WhatsApp Business API | TBC |
| **Monthly Total (KL)** | **RM 2,500** |

Notes:

- All monthly fees billed monthly from Phase 1 go-live date.
- Each additional branch requires a one-off RM 10,000 implementation fee.
- Phase 2 customisation bundle (RM 7,500) covers all five modules listed in Section 3; additional customisations not listed require a separate change request.
- SOA generation (Section 3.1.5) remains subject to SAP-side technical validation; if not feasible in Phase 2, a revised scope will be agreed before that milestone is charged.
- Third-party costs (SAP vendor API access, WhatsApp Business account fees) are GST's responsibility unless otherwise agreed.

---

# 6. Caveats & Exclusions

- **SAP Vendor Dependency:** Mindhive's integration timeline depends on GST's SAP B1 vendor providing timely API access and a test environment. Delays on the vendor side are outside Mindhive's control.
- **Crystal Reports Scope:** Document layout matching is validated against PDF samples provided by GST. If no samples are provided, Mindhive will use best-effort layout. GST must provide samples before Phase 1 UAT.
- **CPRN Approval Model:** Phase 2 CPRN build cannot begin until GST confirms the approval model (CPRN owner / manager / purchasing). This is a blocking decision.
- **Stock Source of Truth:** Phase 1 stock checks will be built against whichever source GST confirms as authoritative (SAP live, daily extract, or hybrid). This must be decided before Phase 1 build starts.
- **SOA Feasibility:** Customisation 5 (Statement of Account) is subject to SAP-side AR data access. If technically blocked, scope and cost will be revised before that milestone is triggered.
- **Third-Party Dependencies:** Mindhive is not liable for downtime, access restrictions, API limitations, data errors, or performance issues caused by SAP Business One, WhatsApp, email providers, or other external platforms.
- **Connectivity:** GST is responsible for internet, devices, internal network readiness, and user access readiness.
- **Data Accuracy:** Mindhive is not liable for errors arising from incorrect or incomplete data provided by GST (item master, price lists, customer records).
- **Client-Side Integrations:** Unsupported third-party integrations outside the approved scope are excluded and require change request approval.
- **Manual Decisions:** MAIA does not auto-confirm orders, auto-progress document status, or automate collections in the current scope.
- **UAT Linkage:** Phase 1 and Phase 2 fees are payable only after the relevant phase achieves agreed pass thresholds on the jointly defined UAT sample set. UAT sample set must be jointly defined before testing begins. See Appendix 8.7 for target thresholds.
- **Future Scope:** Full ERP replacement or SAP B1 restructuring, hardware procurement, advanced approval matrices beyond what is scoped in Phase 1/2, Penang and Langkawi branch rollout (available as paid add-ons), customer-facing WhatsApp bot, training beyond the initial agreed program for named users, and any Phase 2 customisation not listed in Section 3 are explicitly excluded unless separately agreed and priced.

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

**Lifetime Upgrades & Support:** GST continues to receive ongoing product upgrades, security enhancements, and support for the lifetime of the active subscription or support arrangement.

**Mindhive will:**

- Confirm agreed workflow design and configuration logic with GST before build
- Configure MAIA business rules for stock, pricing, credit, and approval routing
- Build and configure all Phase 1 and Phase 2 modules as scoped
- Implement SAP Business One integration and validate sync accuracy
- Generate Crystal Reports-aligned document outputs and validate format against GST's samples
- Support UAT, resolve issues raised, and manage retest
- Conduct training for agreed named users
- Support go-live and hypercare period (1–2 weeks post Phase 1 live)

## 7.2 Client Commitments

**User Access & Permissions:** GST will designate system administrators and confirm internal user roles, permissions, and access boundaries.

**Data Provisioning:** GST will provide accurate, complete, and timely data uploads, sample documents, and workflow inputs required for onboarding and implementation.

**Timely Feedback:** GST will provide approvals, clarifications, and input during configuration, customisation, implementation, and UAT to avoid project delays.

**Compliance:** GST will adhere to licensing terms, security practices, and applicable operational regulations.

**Point of Contact:** GST will designate a primary point of contact for Mindhive communications (Joey Pong confirmed as coordination PIC). GST commits to responding to vendor queries, requests, or approvals within 2–3 working days.

**Payments:** GST will ensure timely settlement of agreed milestone fees according to the payment terms in Section 5.2.

**GST Fine Foods will:**

- Provide SAP B1 access and coordinate with SAP vendor for API/integration access
- Provide item master excerpt, customer list, price lists, and product matching reference data
- Provide 3–5 anonymised sample RFQ Excel files before Phase 2 build begins
- Provide Crystal Reports PDF samples per document type (quotation, SO, invoice, DO, CN)
- Provide org chart and RACI for approvals (payment slip, credit limit, CPRN release)
- Clarify CPRN approval model (owner / manager / purchasing) before Phase 2 build starts
- Confirm stock source of truth (SAP live vs daily extract vs hybrid) before Phase 1 build
- Designate named PICs: sales coordination, finance, SAP/IT
- Provide UAT users and structured feedback within 2–3 working days during test cycles
- Sign off Phase 1 and Phase 2 UAT when pass thresholds are met

---

# 8. Appendix

## 8.1 Delivery Model

MAIA is expected to be delivered as a cloud-hosted platform sitting on top of GST's existing SAP Business One environment. Final deployment setup, hosting, support package, and environment details remain subject to technical and commercial confirmation.

## 8.2 System Interfaces

- **Web Application:** Browser-based access for Sales Agent, Finance, and Management users.
- **Mobile-Responsive Access:** Subject to final user workflow needs and supported screens.
- **WhatsApp:** Used for internal staff-facing order intake, approval routing, and daily digests.
- **Integration Interfaces:** SAP Business One touchpoints are subject to vendor access, data samples, and technical validation. API preferred via SAP B1 Service Layer; file-based fallback if API is restricted.

## 8.3 Core System Capabilities

MAIA provides a unified business foundation for sales documents, customer records, role-based access, document generation, workflow visibility, and operational traceability. For GST, this specifically includes frozen seafood product matching support, Crystal Reports-aligned document output, and SAP Business One two-way data sync.

## 8.4 Security & Compliance

MAIA access will be configured based on user roles and approved permission rules. Final authentication, data isolation, encryption, backup, and compliance commitments depend on the agreed deployment and support package.

## 8.5 Availability & Performance

MAIA is designed for high availability and scalable performance. Final uptime, monitoring, and support commitments are governed by the agreed support arrangement.

## 8.6 Customisation & Extensibility

Future workflow changes, new integrations, additional document formats, additional branch rollouts (Penang, Langkawi), or additional modules will be handled through separate scoping and change request approval. Phase 3 items and any scope not listed in Section 3 require separate discovery, pricing, and timeline confirmation.

## 8.7 UAT Acceptance Targets

Phase 1 and Phase 2 fees are payable only after the relevant phase achieves agreed pass thresholds on the jointly defined UAT sample set.

| Metric | Target |
|---|---|
| Quotation draft generation success rate | 100% |
| First-pass quotation line completeness | 95–100% |
| Product match suggestion acceptance rate | ≥80–85% |
| Quotation preparation time reduction | ≥50% |
| Stock answer reliability vs agreed source | ≥95% |
| Approval routing success rate | 100% |
| Standard order creation time reduction | ≥50% |
| SAP sync accuracy | 100% |
| Downstream document generation success rate | 100% |
| Crystal Reports layout match | 100% (human review) |

---

# 9. Acknowledgement & Agreement

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive Sdn Bhd:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

**For GST Fine Foods Sdn Bhd:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

---

## See Also

- [[GST Fine Foods Customer Narrative]]
- [[GST Fine Foods × MAIA Proposal v2 [SIGNED]]]
- [[GST Fine Foods — GTM Brief Context and Unclear Items]]
- [[GST Fine Foods — Requirement Gathering Questionnaire]]

---

## ⚠️ Gaps Still Open

The SOW draft is complete but the following need resolution before this document is shared with GST:

1. **Header — Client address**
   Why it matters: Required in the parties block for a legally anchored SOW.
   What I need: GST Fine Foods Sdn Bhd's registered office address.

2. **Header — Effective date**
   Why it matters: The document has no anchor date. The proposal was dated 12/03/2026 — confirm whether the SOW effective date should match or be backdated/updated.
   What I need: Confirm the effective date to use.

3. **Commercial — Monthly cost breakdown**
   Why it matters: The RM 2,500/month total is agreed, but the breakdown (platform / hosting / AI / WhatsApp) is not itemised. Some clients want this visible; others don't need it.
   What I need: Decide whether to show the line-item breakdown or just the monthly total.

4. **Phase 2 — CPRN approval model decision**
   Why it matters: Section 3.1.4 flags this as unresolved. It directly blocks Phase 2 build scoping.
   What I need: GST must decide: (a) CPRN owner releases, (b) manager approves, or (c) purchasing controls. Add to RG agenda.

5. **Phase 1 — Stock source of truth**
   Why it matters: Phase 1 business rule checks depend on knowing which inventory figure is "safe to sell." Three options: SAP live, daily Excel export, or hybrid. Not confirmed in proposal or brief.
   What I need: Confirm this in the next RG session before Phase 1 build starts.

6. **Documents — Crystal Reports samples**
   Why it matters: Crystal layout matching is a non-negotiable requirement. Without samples, we cannot validate.
   What I need: Request from GST in kickoff: PDF samples of SO, Invoice, DO, CN at minimum.

7. **Timeline — Kickoff date**
   Why it matters: Phase 1 go-live date cannot be filled without a confirmed kickoff date.
   What I need: Confirm kickoff date and update Section 4 accordingly.

---
owner: Gareth
status: draft
last_reviewed: 2026-05-03
lark_url:
---

# SOW — MAIA for GST Fine Foods

**Effective Date:** [TBC — confirm with GST before sending]

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** GST Fine Foods Sdn Bhd ("GST") — [Client address TBC]

---

## 1. Executive Summary

GST Fine Foods is a Malaysian frozen seafood supplier and B2B distributor — barramundi, tiger prawns, whole fish, salmon, squid, shellfish, and related frozen categories — with operations across Penang, Langkawi, and KL. Today, quotation handling, order preparation, payment verification, and stock coordination are managed through SAP Business One combined with heavy manual effort in Excel, WhatsApp, and phone coordination.

**Current tools:** SAP Business One · Excel RFQ files · WhatsApp · Crystal Reports documents · manual stock spreadsheets

This SOW defines a phased implementation of MAIA that delivers:
- Structured RFQ intake and product matching, replacing manual Excel interpretation
- Standard Sales Order creation with automated business rule checks (stock, credit, pricing)
- Finance approval routing for payment slips and credit-limit exceptions
- CPRN commitment tracking to manage blanket reservations and stock earmarks
- SAP Business One integration with Crystal Reports-aligned document output

**Current investment: RM 27,500** (Phase 1 + Phase 2 customization bundle, payable post-UAT)

---

## 2. Phased Delivery

### Phase 1 — Core B2B Sales Agent + SAP Integration

Phase 1 establishes the core operational layer: standard order creation, business rule enforcement, payment and credit approval handling, backend visibility, and SAP sync. This is the foundation GST must have working before Phase 2 customizations build on top.

---

#### Internal Chatbot — Sales Agent Assistant

- **Platform:** WhatsApp (internal staff-facing)
- **Intelligent Document Processing (IDP):** reads Excel RFQ files, extracts line items, structures quotation content for review
- **Product matching support:** maps customer wording against GST's internal SAP item master — surfaces likely matches for staff confirmation
- **Sales Order creation:** standard order flow initiated via WhatsApp or workspace
- **Pre-order business rule checks:**
  - Stock availability (against agreed inventory source — SAP live or daily extract, to be confirmed)
  - Customer pricing reference (SAP price list)
  - Credit limit check and credit block handling
  - Customer-specific conditions where configured
- **Approval routing:**
  - Payment slip forwarded to finance for review before close-out
  - Credit limit breach → escalation to finance / management
- **Document generation:** all documents generated in Crystal Reports-aligned layout (see Document section below)
- **Daily digests:** unclosed SOs, outstanding payment slips, flagged stock items

---

#### Internal Chatbot — Logistics Reference

Phase 1 includes basic delivery-related document visibility as a reference output. Full logistics workflow is not in Phase 1 scope unless pulled forward.

---

#### User Workspaces

| Workspace | Key Features |
|---|---|
| **Sales Agent** | Quotation draft review, SO lifecycle, product match confirmation, customer history reference, stock query |
| **Finance** | Payment slip queue and review, credit limit visibility, approval trail, exception log |
| **Management / Backend Dashboard** | Operational overview, SO status, exceptions outstanding, payment and credit flags, activity trail |

---

#### Document Generation

All documents must match GST's existing **SAP Crystal Reports layouts** — same formulas, same structure, same "premium" format. This is a non-negotiable quality bar for GST and will be validated during UAT.

| Document | Phase |
|---|---|
| Sales Order (Crystal-aligned) | Phase 1 |
| Invoice (Crystal-aligned) | Phase 1 |
| Invoice PDF | Phase 1 |
| Credit Note reference output | Phase 1 |
| Delivery reference output | Phase 1 |

GST to provide **PDF samples** of gold-standard Crystal outputs per document type before build begins.

---

#### SAP Business One Integration

| Direction            | Frequency                                                                    | Data Objects                                                                        |
| -------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| SAP B1 → MAIA (pull) | Configurable (near-real-time for item/BOM changes; daily for stock snapshot) | Customers, Item Master, Price Lists, Credit Limits, Credit Terms, Inventory / Stock |
| MAIA → SAP B1 (push) | On confirmation                                                              | Sales Orders, Invoices, Receipts, Credit Notes                                      |

**Integration method:** API preferred via SAP B1 Service Layer. File-based (CSV/XML via SFTP) as fallback — to be confirmed with GST's SAP vendor.

**Critical sync requirement:** When a product is processed from whole fish to a cut (e.g. whole → fish head), SAP's item/BOM update must sync to MAIA **without delay**. Stale SKUs in MAIA while SAP reflects the new cut will cause document mismatch. Cron interval to be agreed with GST — configurable as per operational need.

---

#### Phase 1 Go-Live Deliverables

At the end of Phase 1, GST will have:
- A working internal WhatsApp workflow for sales staff to handle standard order creation, product matching, and approval exceptions
- Finance and management workspace with live visibility across SOs, payment slips, and credit flags
- All agreed Phase 1 documents generating in Crystal-aligned format
- SAP B1 integration live and tested
- Agreed users trained
- Phase 1 UAT passed and signed off

---

### Phase 2 — Customization Bundle

Phase 2 builds five client-specific modules on top of the Phase 1 foundation. Each is scoped below with enough detail to set UAT expectations clearly.

---

#### Customization 1 — RFQ Intake and Product Matching (Quotation Workflow)

**What it does:**
A hotel or B2B buyer sends an Excel RFQ. A GST coordinator forwards the file into MAIA. MAIA reads each line, interprets the customer's wording (species, cut, weight, origin, pack), and surfaces the most likely internal item matches for staff review. Staff confirm, adjust price, and export their own quotation output.

**Key scope:**
- Multi-column Excel RFQ ingestion (varying formats — GST to provide sample files)
- Matching logic across substitution dimensions: species/origin, cut (fillet/tail/head/portion), weight band, pack format
- Match output as structured text/workspace view — MAIA does not auto-fill the customer's Excel
- Staff review screen (Ming Medical-style): see all matches, adjust, fill or confirm price
- Optional: recommended price from SAP price list (Phase 2 direction, not assumed standard)

**Why it's customization:** Matching customer natural-language seafood descriptions to internal SAP SKUs requires client-specific item reference setup, substitution logic configuration, and matching rule validation that goes beyond standard item lookup.

---

#### Customization 2 — Aging and Clearance Reminder Logic

**What it does:**
Frozen product has expiry dates and batch ages. MAIA surfaces stock that is aging, slow-moving, or nearing expiry and pushes reminders to the relevant sales staff so they can prioritise clearance.

**Key scope:**
- Aging thresholds configurable by item category (exact rules to be defined in RG)
- Batch-level visibility sourced from SAP (batch no., expiry date, qty)
- Reminder via WhatsApp digest and/or workspace flag to relevant salesperson
- Management visibility: aging stock summary view

**Why it's customization:** Threshold rules, item-category logic, and reminder routing are GST-specific and cannot be assumed from standard MAIA behaviour.

---

#### Customization 3 — Excel Export for Planning and Operational Review

**What it does:**
Allows users to pull agreed operational datasets — stock aging summary, open SO list, CPRN outstanding, customer AR buckets — into a structured Excel file for downstream planning.

**Key scope:**
- Agreed dataset list to be confirmed during RG
- Standard column layout — GST to advise if mandatory templates exist
- Available via workspace export trigger

**Why it's customization:** Custom export structures and planning-oriented layouts are client-specific.

---

#### Customization 4 — Customer Purchase Request Note (CPRN) Tracking

**What it does:**
Some GST customers (hotels, large restaurants) make large verbal commitments — "I'll need 10,000 units over the next few months" — without issuing a PO. GST needs to track this as a structured earmark: ring-fence stock, track consumption as small releases happen, prevent other salespeople from double-selling the same pool, and trigger release when the commitment lapses or is fulfilled.

**Key scope:**

*CPRN creation:*
- Sales staff raise a CPRN via WhatsApp or workspace: customer, item, total committed qty, expected timeline, owning salesperson
- CPRN creates a soft stock earmark — reduces available-to-sell qty for other staff

*Consumption tracking (usage proper):*
- Each release against the CPRN reduces the remaining balance (e.g. 10,000 → release 10 → 9,990 remaining)
- Running balance visible in workspace
- Each release links to the corresponding SO

*Conflict resolution (salesperson conflict):*
- When stock is earmarked under a CPRN, other salespeople see it as unavailable (hard block or warning — to be decided in RG)
- If another salesperson attempts to sell earmarked stock, the system routes a release request to the CPRN owner or manager
- Approval model to be confirmed by GST: (a) CPRN owner releases, (b) manager approves, or (c) purchasing controls

*Choke / expiry of hold:*
- CPRN holds that see no consumption for a configurable period trigger a reminder: "Still want this block?"
- Manual or approval-triggered release clears the earmark back to available pool
- Audit trail of who released, when, and why

*Purchasing visibility:*
- CPRN summary visible to purchasing so advance buying decisions can reference committed demand

*Conversion to standard SO:*
- CPRN can be fully or partially converted to a confirmed SO
- Converted SO references original CPRN number for traceability
- SAP push on conversion (mechanics to be confirmed in RG)

**Why it's customization:** CPRN is a new document type specific to GST. It requires custom reservation logic, conflict routing, approval graph, and lifecycle management that does not exist in standard MAIA.

---

#### Customization 5 — Statement of Account Generation

**What it does:**
Generates a customer statement of account for internal review or customer follow-up.

**Key scope:**
- Customer-level AR summary (open invoices, outstanding amounts, payment history)
- Format to match SAP SOA layout
- Multi-branch AR: consolidated or per-entity view (to be confirmed)
- Trigger: on-demand via workspace

**Feasibility note:** This customization depends on SAP B1 access to AR-level data and the agreed integration approach. Final scope will be confirmed after technical validation. If not feasible in Phase 2, it moves to a subsequent phase.

---

## 3. Estimated Timelines

| Phase | Scope | Build & Integration | Expected Go-Live |
|---|---|---|---|
| Phase 1 | Core SO flow, business rules, payment/credit approvals, SAP integration, backend dashboard | ~3–4 weeks from kickoff | [TBC — confirm after kickoff date agreed] |
| Phase 2 | RFQ matching, CPRN tracking, aging reminders, Excel export, SOA | TBC — scoped after Phase 1 UAT | [TBC] |

**Timeline dependencies:**
- SAP B1 vendor access and API readiness
- GST providing sample RFQ files, item master excerpt, Crystal PDF samples, and product matching rules
- Speed of internal review and feedback during UAT
- CPRN approval model decision (blocks Phase 2 build start)

---

## 4. Commercial Structure

### One-off Development Cost

| Item | Price |
|---|---|
| Phase 1 — Core B2B Sales Agent + SAP Integration | ~~RM 48,000~~ **RM 20,000** |
| Phase 2 — Customization Bundle (all 5 modules) | **RM 7,500** |
| **Grand Total** | **RM 27,500** |

### Payment Terms

| Milestone | Amount | Payment Trigger |
|---|---|---|
| Phase 1 UAT Completion | RM 20,000 | Payable only after Phase 1 UAT is passed and signed off by GST |
| Phase 2 UAT Completion | RM 7,500 | Payable only after Phase 2 UAT is passed and signed off by GST |

No upfront payment is required. Monthly billing begins only after Phase 1 goes live.

### Monthly Subscription

| Branch | Estimated Volume | Monthly Fee |
|---|---|---|
| KL Branch (Phase 1 go-live) | ~4,000 orders/month | RM 2,500 |
| Penang Branch (add-on) | ~4,000 orders/month | +RM 2,000 (+ RM 10,000 one-off implementation) |
| Langkawi Branch (add-on) | ~2,000 orders/month | +RM 1,000 (+ RM 10,000 one-off implementation) |

| Branch Coverage | Monthly Total |
|---|---|
| KL only | RM 2,500 |
| KL + Penang | RM 4,500 |
| KL + Penang + Langkawi | RM 5,500 |

Monthly breakdown (indicative — to be confirmed):

| Item | Estimated |
|---|---|
| Platform access and maintenance | TBC |
| Hosting and infrastructure | TBC |
| AI / LLM usage costs | TBC |
| WhatsApp Business API | TBC |
| **Monthly Total (KL)** | **RM 2,500** |

### Commercial Notes

- All monthly fees billed monthly from Phase 1 go-live date
- Each additional branch requires a one-off RM 10,000 implementation fee
- Phase 2 customization bundle (RM 7,500) covers all five modules listed in Section 2; additional customizations not listed require a separate change request
- SOA generation (Customization 5) remains subject to SAP-side technical validation; if not feasible in Phase 2, a revised scope will be agreed before that milestone is charged
- Third-party costs (SAP vendor API access, WhatsApp Business account fees) are GST's responsibility unless otherwise agreed

---

## 5. Responsibilities

### Mindhive will:

- Confirm agreed workflow design and configuration logic with GST before build
- Configure MAIA business rules for stock, pricing, credit, and approval routing
- Build and configure all Phase 1 and Phase 2 modules as scoped
- Implement SAP Business One integration and validate sync accuracy
- Generate Crystal Reports-aligned document outputs and validate format against GST's samples
- Support UAT, resolve issues raised, and manage retest
- Conduct training for agreed named users
- Support go-live and hypercare period (1–2 weeks post Phase 1 live)

### GST Fine Foods will:

- Provide SAP B1 access and coordinate with SAP vendor for API/integration access
- Provide item master excerpt, customer list, price lists, and product matching reference data
- Provide 3–5 anonymised sample RFQ Excel files before Phase 2 build begins
- Provide Crystal Reports PDF samples per document type (quotation, SO, invoice, DO, CN)
- Provide org chart and RACI for approvals (payment slip, credit limit, CPRN release)
- Clarify CPRN approval model (owner / manager / purchasing) before Phase 2 build starts
- Confirm stock source of truth (SAP live vs daily extract vs hybrid) before Phase 1 build
- Designate named PICs: sales coordination, finance, SAP/IT (Joey Pong confirmed as coordination PIC)
- Provide UAT users and structured feedback within 2–3 working days during test cycles
- Sign off Phase 1 and Phase 2 UAT when pass thresholds are met

---

## 6. UAT Acceptance Criteria

UAT must be jointly defined before testing begins. The following pass thresholds are agreed targets based on the proposal:

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

Phase 1 and Phase 2 fees are payable only after the relevant phase achieves agreed pass thresholds on the jointly defined UAT sample set.

---

## 7. SLAs

### Mindhive Commitments

- **System Availability:** 99.5% uptime (excluding scheduled maintenance windows)
- **Critical (P1):** Response within 2 hours
- **High (P2):** Response within 8 hours
- **Normal (P3):** Response within 2 business days
- **Maintenance Windows:** Pre-communicated; typically weekends or off-peak hours
- **Data Protection:** Regular backups and disaster recovery in place
- **Lifetime Upgrades and Support** for agreed in-scope modules

### GST Commitments

- Designate system administrators and enforce internal user access policies
- Provide accurate and complete master data before onboarding
- Respond to clarification requests and provide approvals within 2–3 working days
- Designate a primary point of contact (Joey Pong confirmed as coordination PIC)
- Adhere to licensing terms and agreed security practices
- Settle payment per agreed milestone triggers

---

## 8. Caveats and Exclusions

- **SAP Vendor Dependency:** Mindhive's integration timeline depends on GST's SAP B1 vendor providing timely API access and a test environment. Delays on the vendor side are outside Mindhive's control.
- **Crystal Reports Scope:** Document layout matching is validated against PDF samples provided by GST. If no samples are provided, Mindhive will use best-effort layout. GST must provide samples before Phase 1 UAT.
- **CPRN Approval Model:** Phase 2 CPRN build cannot begin until GST confirms the approval model (CPRN owner / manager / purchasing). This is a blocking decision.
- **Stock Source of Truth:** Phase 1 stock checks will be built against whichever source GST confirms as authoritative (SAP live, daily extract, or hybrid). This must be decided before Phase 1 build starts.
- **SOA Feasibility:** Customization 5 (Statement of Account) is subject to SAP-side AR data access. If technically blocked, scope and cost will be revised before that milestone is triggered.
- **Third-Party Fees:** WhatsApp Business API fees, SAP B1 API licence costs, or any external vendor charges are GST's responsibility and are not included in Mindhive's quoted fees.
- **Data Accuracy:** Mindhive is not liable for errors arising from incorrect or incomplete data provided by GST (item master, price lists, customer records).
- **Connectivity:** GST is responsible for providing reliable internet access and compatible devices for all named users.

---

## 9. Out of Scope

The following are explicitly not included unless separately agreed and priced:

- Full ERP replacement or restructuring of SAP Business One
- Hardware procurement or on-premise infrastructure
- Advanced approval matrices or custom RACI beyond what is scoped in Phase 1/2
- Any Phase 2 customization not listed in Section 2 of this SOW
- Penang and Langkawi branch rollout (available as paid add-ons — see Commercial section)
- Customer-facing WhatsApp bot or external-facing order capture (Phase 1 is internal staff-facing only)
- Training beyond the initial agreed program for named users
- Ongoing management of third-party accounts (WhatsApp Business, SAP vendor)

---

## 10. Signatures

**For Mindhive Sdn Bhd:**

____________________________
Signature

Name:
Position:
Date:

---

**For GST Fine Foods Sdn Bhd:**

____________________________
Signature

Name:
Position:
Date:

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
   Why it matters: Section 2 / Customization 4 flags this as unresolved. It directly blocks Phase 2 build scoping.
   What I need: GST must decide: (a) CPRN owner releases, (b) manager approves, or (c) purchasing controls. Add to RG agenda.

5. **Phase 1 — Stock source of truth**
   Why it matters: Phase 1 business rule checks depend on knowing which inventory figure is "safe to sell." Three options: SAP live, daily Excel export, or hybrid. Not confirmed in proposal or brief.
   What I need: Confirm this in the next RG session before Phase 1 build starts.

6. **Documents — Crystal Reports samples**
   Why it matters: Crystal layout matching is a non-negotiable requirement. Without samples, we cannot validate.
   What I need: Request from GST in kickoff: PDF samples of SO, Invoice, DO, CN at minimum.

7. **Timeline — Kickoff date**
   Why it matters: Phase 1 go-live date cannot be filled without a confirmed kickoff date.
   What I need: Confirm kickoff date and update Section 3 accordingly.

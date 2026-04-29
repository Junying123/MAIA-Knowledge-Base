---
owner: Gareth
status: draft
last_reviewed: 2026-04-29
lark_url:
---

# SOW — MAIA for HG Group

**Effective Date:** [TBC]

**Between:** Mindhive Sdn Bhd ("Mindhive") — 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** HG Services (M) Sdn Bhd ("HG Group") — Lot 12 & 13, Jalan BK 1/11, Taman Perindustrian Bandar Kinrara, 47180 Puchong, Selangor, Malaysia

---

## 1. Executive Summary

HG Services (M) Sdn Bhd is Malaysia's specialist contractor support company for the retail construction lifecycle — hoarding, reinstatement, fit-out, scaffold, printing, lorry, and temporary storage, all delivered in-house across 40+ malls. At 10–40 jobs a day across 900+ WhatsApp groups, the operation currently runs on the founder's knowledge, coordinator memory, and disconnected tools.

**Current tools:** WhatsApp (900+ groups), Infotech (accounting), Odoo (CRM — unused), Google Drive, Google Sheets, Claude (ad hoc)

This SOW defines a phased implementation of MAIA that delivers:
- A structured enquiry-to-quotation flow with HG's preset rate card locked into the system
- Confirmed job records (Sales Order) as the single source of truth from quotation to invoice
- A custom Job Work Order that moves every job through Commercial → Fabrication → Installer in a visible, auditable flow
- Invoice control enforcing HG's existing rule: no invoice number, no valid job
- Aged receivables visibility across all active clients

**Current investment: RM [TBC — to be confirmed before sharing externally]**

---

## 2. Phased Delivery

### Phase 1 — Core MAIA

#### CRM & Enquiry Intake

HG's enquiry volume comes from two distinct sources — panel mall referrals and repeat clients (majority, no lead qualification needed) and new inbound via Google Ads, website, and cold referrals (minority, genuine lead stage required).

MAIA supports a two-path model:

**Path A — Known client (panel referral / repeat):** Enquiry received → coordinator opens MAIA → customer history surfaces immediately (prior jobs, outstanding balance, payment behaviour) → proceed straight to Quotation. No lead stage required.

**Path B — New inbound contact:** Enquiry received → Create Lead in MAIA (name, company, phone, enquiry type, source) → Qualify → Prospect → Issue Quotation → confirm → Convert to Customer (SSM + billing details) → Sales Order.

| Stage | What it means | Who can create |
|---|---|---|
| Lead | First contact — name and enquiry only | Any coordinator |
| Prospect | Scope confirmed — quotation can be issued | Any coordinator |
| Customer | Registered — billing details set, credit terms assigned | Finance / Admin only |

**Lead fields captured:** Lead name, company, phone (WhatsApp primary), enquiry type (Hoarding / Scaffold / Reinstatement / Lorry / Printing / Other), mall/site (optional), source (WhatsApp / Referral / Wati / Chatbot / Walk-in), assigned coordinator, status (New → Qualifying → Quoted → Won → Lost), lost reason.

**Platform note:** The Quotation doctype is being extended to support issuing to Leads and Prospects — not just registered Customers. This is a prerequisite for HG's flow.

---

#### Quotation Management

HG's pricing formula is preset and consistent across all service types — the formula currently lives in the founder's knowledge and informal records. MAIA locks this into a structured, team-accessible quotation builder.

**Hoarding Measurement Calculator (primary feature):**

Coordinator enters Panel A / Panel B / Panel C dimensions and height → system auto-calculates total square metres → converts to square feet → auto-fills the hoarding line item quantity → rate applied → amount calculated. Minimum charge rule: RM 800 flat or calculated amount, whichever is higher (system warning if subtotal falls below RM 800).

Formula:
```
(Panel A + Panel B + Panel C) × Height = Square Metres
Square Metres × 10.764 = Square Feet
Square Feet × RM 1.00 = Hoarding Amount
Minimum: RM 800
```

**Service line item menu — all preset rates:**

| Service Division | Pricing Basis |
|---|---|
| Hoarding — PVC Board | Per sq ft (RM 1.00 confirmed; dismantling = same rate) |
| Hoarding — Doors, Counterweight, Skirting, Visual | Per unit / per metre / per sq ft [rates: TBC from Black] |
| Scaffold | Per structure per week (tiered by height: below 5m / 5–10m / above 10m) [rates: TBC] |
| Reinstatement | Per linear metre [rate: TBC] |
| Lorry (3T / 5T / Outstation) | Per trip [rates: TBC] |
| Rorobin bins (3 sizes) | Per unit [rates: TBC] |
| Temporary Storage | Per week / day / month [rates: TBC] |
| LPG dismantling | Per metre (est. RM 1,500 for 1m — to be verified) |
| Floor trap flushing | Per floor trap [rate: TBC] |
| Printing (eco-solvent / UV / tarpaulin) | Per sq ft [rates: TBC] |
| Fit-out (painting, tiling, partition, screeding, waterproofing) | Per sq ft / linear metre [rates: TBC] |

**Note:** A dedicated 60-minute rate card documentation session with Black is required before Quotation module configuration begins. Black confirmed he can prepare all service descriptions, formulas, and rates.

**Quotation lifecycle:**

```
Draft → Submitted → Sent to Client → Converted to SO
                 ↘ Cancelled (reason recorded)
                 ↘ Amended (original preserved for audit)
```

All quotes are saved with status, linked to the client record, and searchable by client, mall, or service type. PDF generated on submit — coordinator downloads and shares to client WhatsApp group.

**Convert to Sales Order:** One action. All line items carry forward. No re-entry.

---

#### Sales Order (Job Confirmation)

Once a client confirms, the job has a permanent, searchable system record.

**What it captures:** Client name, lot number, mall/building, service scope, divisions involved, timeline, payment status, linked Work Order, linked Invoice. Tracks the job lifecycle with HG's payment-first gate:

```
Confirmed → Invoice Issued → Payment Received → In Progress → Completed
```

Supports multi-division jobs — scaffold, reinstatement, lorry, and temporary storage all linked to one parent Sales Order. Surfaces in the active job board until closed.

---

#### Job Work Order (Custom — HG-Specific)

The most critical custom module in this engagement. Every confirmed Sales Order triggers a Job Work Order that all three HG teams — Commercial, Fabrication, and Installer — work from as a single source of truth.

**Work Order header fields:** Work Order No. (auto: `HG-WO-2026-NNNN`), linked Sales Order, customer, contact person, mall, site/lot number, service type(s), job scope summary, scheduled date, scheduled time window (e.g. `11:00 PM – 4:00 AM`), priority (Normal / Urgent / Critical), and created-by coordinator.

**Team assignment:** Commercial Lead, Fabrication Lead, Installer Supervisor, Driver Lead (where applicable), planned crew size, internal notes.

**Stage workflow (Frappe Workflow with role-restricted transitions):**

```
Draft
  ↓ (Commercial)
Commercial Confirmed
  ↓ (Fabrication)
Fabrication Ready
  ↓ (Installer)
On Site / In Progress
  ↓ (Installer)
Completed
```

Rules: only the authorized role can advance its stage; each transition sends a notification to the next stage owner; no auto-progression — manual confirmation required.

**Asset deployment tracking (scaffold / lorry / hoarding):**

| Field | Type |
|---|---|
| Asset | Link to ERPNext Asset record |
| Deployment Start | Datetime |
| Expected Return | Datetime |
| Return Confirmed | Checkbox |
| Notes | Text (damage / extension) |

**Execution and completion fields:** Actual start/end datetime, actual work done, deviation/variation log, completion photo attachments (mobile upload), client sign-off attachment, and Completion Report PDF output.

**Completion Report generation:** When the Work Order reaches Completed state and required evidence is uploaded, the system compiles a structured report PDF containing: job header (Work Order No., customer, mall/lot, service types, dates, team leads), scope performed vs planned, deviation/variation notes, completion photos with optional captions, and a closure/sign-off block.

**Important:** The exact Completion Report format — mandatory sections, evidence requirements per service type, and whether client sign-off is required — must be validated with Black before scope lock. Sample PDFs from existing HG jobs are needed. This may finalize as Phase 1 or early Phase 2 depending on how quickly format requirements are confirmed.

**Work Order actions:**

| Action | When |
|---|---|
| Create WO from SO | SO ready + payment validated |
| Commercial Confirm | Scope + scheduling complete |
| Mark Fabrication Ready | Materials prep complete |
| Start On Site | Crew mobilised |
| Complete Job | Work and evidence uploaded |
| Generate Completion Report | Completed state |
| Reopen / Hold | Controlled exception by authorized role |

---

#### Invoicing

Invoice generated directly from the completed Sales Order. All line items carry forward from the original quotation. No reconstruction from chat.

**Invoice header:** Auto-generated number (`HG-INV-2026-NNNN`), posting date, due date, customer (auto from SO), Sales Order link, Work Order link (optional), currency (MYR default), payment terms (CIA default), remarks.

**Invoice status flow:**
```
Draft → Submitted (invoice number issued) → Unpaid / Partially Paid → Paid → Spend Released
```

**Spend Release Status:** Remains `Blocked` until CIA payment rule is satisfied. This enforces HG's operating rule as a system behaviour: no payment in, no job expense release.

**Supported actions:** Create from SO, Submit (locks amount structure), Record Receipt, Mark Paid, Release Job Spend, Cancel / Amend (with audit trace).

---

#### Receipt & Payment Tracking

| View | What it shows |
|---|---|
| Customer outstanding | Total unpaid across all invoices by client |
| Current | Amount not yet overdue |
| 30+ Days | Overdue 30+ days |
| 60+ Days | Overdue 60+ days |
| 90+ Days | Overdue 90+ days |
| Last Payment Date | Most recent receipt recorded |

Finance users can open any customer and drill down from aged balance to specific unpaid invoices. Aging updates automatically based on due dates and recorded receipts.

---

#### Customer Records

Full client record for every company HG works with: contact details, billing information, full job history, quote history, active jobs, outstanding invoices, payment behaviour.

**Client tagging:**
- Payment behaviour: Blacklisted / Slow Payer / Normal / Preferred Terms
- Service profile: Hoarding-only / Scaffold-only / Temporary Storage-only / Full-suite

Tags surface during quotation creation — coordinator sees the client's payment track record before any quote is sent.

---

#### User Workspaces — Phase 1

| Workspace | Primary Users | Key Features |
|---|---|---|
| Sales Agent | Commercial coordinators | Enquiry/lead management, quotation builder, SO management, job lifecycle view, customer records, client payment tags |
| Finance | Finance team | Invoice management, payment recording, aged receivables view, spend release control |
| Management | Black / Senior leadership | Active job overview by stage, outstanding receivables summary, upcoming workload visibility |

---

### Phase 2 — Enhancements

#### Mall Unit Measurement Database

Black's vision: a database containing every unit measurement for every mall HG operates at — approximately 8,000 units across 40+ malls. When a coordinator selects Mall + Lot Number in the Quotation, the system looks up the database and auto-populates Panel A / B / C / Height in the hoarding calculator. No measurement relay needed.

HG already has TRX measurements being collected. That becomes seed data. Every job HG executes adds a verified measurement record.

**Custom Doctype: Mall Unit**

| Field | Type |
|---|---|
| Mall | Link |
| Unit / Lot No. | Text |
| Floor | Text |
| Panel A — left (metres) | Decimal |
| Panel B — front (metres) | Decimal |
| Panel C — right (metres) | Decimal |
| Height (metres) | Decimal |
| Total sq ft | Auto-calculated |
| Last verified date | Date |
| Verified by | Link |

#### AI Measurement Extraction

Integration with Claude or equivalent to extract measurements from hoarding sketch drawings and auto-populate the quotation calculator. Dependent on Phase 1 measurement data being structured and rate card stable.

#### Wati → MAIA Enquiry Integration

When Wati goes live (applied 23 April 2026 — pending), incoming enquiries from website, Google Ads, and panel contacts hit the Wati number first. Phase 2 connects Wati as the inbound pipe: each new WhatsApp message auto-creates a Lead in MAIA with name, phone, and first message pre-filled. Replaces Lee's original intent to CC Wati into Odoo CRM — MAIA becomes the record system.

**Dependent on:** Wati go-live and Lee updating all three channel numbers (website form, Google Ads, panel contacts).

#### Calendar & Gantt Scheduling View

Shared calendar of active Work Orders by division and date. Conflict visibility across lorry deployment and team allocation. Filter by mall, service type, team owner, and status. Directly addresses "need to check and come back" status queries.

#### Dashboard & Reporting

Revenue by service division, job volume by mall, team utilisation, outstanding receivables summary. Deferred to Phase 2 once core job data exists and Phase 1 workflows are stable.

#### Infotech Integration

Sync of invoice and payment records between MAIA and HG's Infotech accounting system. Phase 1 invoicing may run in parallel with Infotech during transition. Phase 2 assessment: does MAIA replace Infotech invoicing or sync into it? To be confirmed with Black and Finance before Phase 2 kickoff.

---

## 3. Estimated Timelines

| Phase | Scope | Build & Integration | Go-Live Target | Hypercare |
|---|---|---|---|---|
| Phase 1 | Core MAIA — CRM, Quotation, SO, Job WO, Invoice, Receipts, Customer Records | [TBC — est. 10–14 weeks] | [TBC] | 2 weeks |
| Phase 2 | Mall Unit DB, AI Extraction, Wati Integration, Gantt, Reporting, Infotech sync | [TBC] | [TBC] | 1–2 weeks |

**Phase 1 prerequisite before build can begin:** Rate card documentation session with Black (all service descriptions, formulas, and rates). Completion Report sample PDFs from existing jobs. Division assignment and workflow state confirmation.

---

## 4. Commercial Structure

### One-off Development Cost

| Item | Price |
|---|---|
| Phase 1 — Core MAIA (incl. Job Work Order custom module) | RM [TBC] |
| Phase 2 — Mall Unit DB, Wati Integration, Infotech Sync, Reporting | RM [TBC] |
| **Grand Total** | **RM [TBC]** |

### Payment Terms

| Milestone | Percentage | Trigger |
|---|---|---|
| Milestone 1 — Project Confirmation | 50% | Upon SOW sign-off and project commencement |
| Milestone 2 — Phase 1 UAT Sign-Off | 50% | Upon Phase 1 UAT completion and client acceptance |

*Phase 2 payment terms to be confirmed separately at Phase 2 kickoff.*

### Monthly Maintenance

| Item | Estimated |
|---|---|
| Platform maintenance & support | RM [TBC] |
| Infrastructure / hosting | RM [TBC] |
| OpenAI / AI costs | RM [TBC] |
| WhatsApp Business (when applicable) | RM [TBC] |
| **Estimated Monthly Total** | **RM [TBC]** |

---

## 5. SLAs

### Mindhive Commitments

- **System Availability:** 99.5% uptime (excluding scheduled maintenance)
- **Critical (P1):** Response within 2 hours
- **High (P2):** Response within 8 hours
- **Normal (P3):** Response within 2 business days
- **Maintenance Windows:** Pre-communicated, typically weekends or off-peak hours
- **Data Protection:** Regular backups and disaster recovery in place
- **Lifetime Upgrades & Support**

### Client Commitments

- Designate system administrators and enforce internal user policies
- Provide complete rate card data (all service types, formulas, rates) before Quotation module configuration begins
- Provide 2–3 sample Completion Report PDFs before Work Order design is finalised
- Provide approvals, clarifications, and input within **2–3 working days**
- Ensure timely payment per agreed commercial terms
- Designate a primary point of contact (POC) — confirmed as Black (Lee)
- Confirm division assignment workflow and Work Order transition rules before Phase 1 build begins

---

## 6. Caveats & Exclusions

- **Third-Party Dependencies:** Mindhive not liable for downtime or issues in Infotech, Wati, WhatsApp, or other external platforms
- **Connectivity:** Client responsible for internet access and device readiness at all operating sites
- **Data Accuracy:** Client responsible for correctness of rate card data, customer data, and job scope entered into MAIA
- **Infotech Parallel Run:** Phase 1 MAIA invoicing may run in parallel with Infotech during transition — HG Finance to confirm and manage both during this period
- **Wati Integration:** Phase 2 Wati → MAIA integration is contingent on Wati going live and HG updating all three inbound channel numbers; delays on Wati side delay this feature
- **Rate Card Session:** Quotation module configuration cannot begin until Black provides the full rate card. Any delay to this session delays Phase 1 build start
- **Completion Report Format:** Final Completion Report PDF template cannot be locked until HG provides sample outputs and confirms mandatory fields and evidence requirements per service type

---

## 7. Out of Scope

- Inventory or stock management (hoarding panel inventory, scaffold equipment tracking) — Phase 2 if required
- Payroll, HR management, or individual worker scheduling
- LiDAR or physical measurement device integration
- Accounting, SST filing, or tax reporting
- Subcontractor management (HG is fully in-house — not applicable)
- Logistics workspace delivery notes, pick lists, or stock entries
- Infotech integration — Phase 1 (deferred to Phase 2, pending parallel-run decision)
- Odoo CRM — superseded by MAIA customer records
- HG's self-built WhatsApp chatbot — remains client-managed; MAIA does not replace or control chatbot routing logic

---

## 8. Signatures

**For Mindhive Sdn Bhd:**

____________________________
Signature

Name:
Position:
Date:

**For HG Services (M) Sdn Bhd:**

____________________________
Signature

Name:
Position:
Date:

---

## ⚠️ Gaps Still Open

Internal draft — these must be resolved before this document is shared with HG Group.

1. **Commercial — All RM amounts are TBC**
   Why this matters: Document looks incomplete without a development fee. Client cannot evaluate investment without it.
   What I need: Agree Phase 1 and Phase 2 development fees with Mindhive BD before sending externally.

2. **Commercial — Effective date**
   Why this matters: Required in the header and commercial reference.
   What I need: Confirm the intended contract date.

3. **Phase 1 — Rate card documentation session not yet done**
   Why this matters: Quotation module cannot be configured without complete rates for all service types. Hoarding is confirmed; all other services are TBC.
   What I need: Schedule a 60-minute session with Black to go service by service. He confirmed he can prepare this.

4. **Phase 1 — Completion Report format not validated**
   Why this matters: Work Order completion report PDF must match HG's current output. Without samples, the WO is designed blind.
   What I need: 2–3 sample Completion Report PDFs from any completed HG jobs.

5. **Phase 1 — Infotech parallel-run decision**
   Why this matters: Affects Phase 1 invoicing design and training plan.
   What I need: Ask Black — "Do you want to stop using Infotech for invoicing when MAIA goes live, or run both side by side initially?"

6. **Phase 1 — Division assignment flow confirmation**
   Why this matters: Work Order role and permission design depends on whether one central coordinator assigns all three teams or team leads self-assign from the queue.
   What I need: Ask Black — "Does one coordinator assign Commercial, Fabrication, and Installer owners, or do team leads pick up jobs from a shared queue?"

7. **Phase 1 — Completion Report scope lock (Phase 1 vs Phase 2)**
   Why this matters: SOW currently positions Completion Report as included in Phase 1 but notes it may shift to early Phase 2 pending Black's validation. Needs a firm decision before build starts.
   What I need: After receiving sample PDFs, confirm with tech lead whether the format is achievable within Phase 1 build window.

8. **Phase 2 — Wati go-live timeline**
   Why this matters: Phase 2 Wati integration depends on Wati being live and all three channel numbers updated. If Wati delays, Phase 2 scope changes.
   What I need: Ask Black — "When do you expect Wati to go live? When will you update the website, Google Ads, and panel contact numbers?"

---

## See Also

- [[Customer Narrative - HG Group]]
- [[HG Group - Customer Profile]]
- [[HG Group - Quotation Module Proposal]]
- [[HG Group - Job Work Order Module Proposal]]
- [[HG Group - Invoice Module Proposal]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[HG Group - Completion Report Module Proposal (Open Questions)]]

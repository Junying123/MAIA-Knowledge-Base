---
owner: Gareth
status: draft
last_reviewed: 2026-03-16
meeting_date: 2026-03-16
client: Holsen
---

# Meeting Agenda — Holsen Ending Phase — 2026-03-16

**Date:** 2026-03-16
**Time:** [HH:MM - HH:MM]
**Attendees:** [List names and roles]
**Meeting Type:** Client — Ending Phase Triage

## Purpose

Push to ending phase: triage what's needed for go-live, confirm decisions on open items, collect outstanding deliverables from Holsen, and lock a go-live date.

**Background:**
- v1 (Feb 10) — Initial demo + C1/C3 compliance deep-dive
- v3 (March 5) — Full-day training session covering end-to-end workflows

Training validated core MAIA usage but surfaced 15+ feature requests, open role mapping questions, master data gaps, and unconfirmed compliance workflows.

---

## Closing & Go-Live Timeline

| Date       | Milestone                                                          | Owner              |
| ---------- | ------------------------------------------------------------------ | ------------------ |
| 17 Mar     | PSO done                                                           | Bushra             |
| 17 Mar     | Holsen instance tested                                             | Gareth             |
| 17 Mar     | eInvoice attachment ready                                          | -                  |
| 17 Mar     | Internal prep meeting (core MAIA scope, UAT plan)                  | Gareth, Bren, Ivan |
| 18 Mar     | UAT kicks off — core MAIA only (excl. C1/C3 and A57 tax exemption) | Holsen team        |
| 25 Mar     | UAT done + sign-off                                                | Holsen team        |
| 25 Mar     | Meta / WhatsApp account setup                                      | -                  |
| 30 Mar     | C1/C3 compliance features dev-complete                             | Dev                |
| 31 Mar     | Holsen closure                                                     | Gareth             |
| **31 Mar** | **Go-live — core MAIA (without C1/C3)**                            | All                |

> C1/C3 compliance and A57 tax exemption enforcement are **post-go-live**. Core MAIA goes live 31 Mar.

---

> **Scope note:** This meeting covers **Phase 1 (Core MAIA) only**. All C1/C3 compliance topics, A57 tax exemption enforcement, and related role/approval workflows are deferred to Phase 2. See [Phase 2 — C1/C3 Compliance UAT](#phase-2--c1c3-compliance-uat-post-go-live) at the bottom of this document.

## Agenda — Phase 1 (Core MAIA)

1. Training Debrief & Master Data Review (15 min)
2. Feature Request Triage: Go-Live vs. Post-Go-Live (30 min)
3. Role Permission Sign-Off — Core MAIA (20 min)
4. Outstanding Deliverables from Holsen (15 min)
5. Go-Live Readiness Assessment (15 min)
6. Timeline & Next Steps (10 min)

---

## Discussion

### 1. Training Debrief & Master Data Review (15 min)

**Goal:** Confirm what is working and surface blockers found during the March 5 training.

**Master Data on Hand (from UBS export, as of 07/01/2026):**

| Dataset | Source File | Record Count | Fields Available |
|---------|-------------|--------------|-----------------|
| Product List | `Product List - Holsen.xlsx` | 200 products | Name, Packing, Unit, Class, No, Type, Code |
| Customer List | `Customer List UBS.xlsx` | 316 customers | Cust No., Name, Contact, Address (4 fields), Phone, Fax, Area, Agent, Credit Term |

**Product breakdown by class:**

| Class | Count |
|-------|-------|
| Zinc (M) | 33 |
| Misc | 33 |
| Krom | 30 |
| Nickel (M) | 18 |
| Nickel | 14 |
| Poison | 13 |
| Cleaner (M) | 13 |
| Copper | 9 |
| Other | 37 |

**Customer breakdown by credit terms:**

| Term | Count |
|------|-------|
| 60 Days | 85 |
| Cash | 80 |
| 30 Days | 56 |
| CBD | 17 |
| COD / C.O.D | 9 |
| 90 Days | 4 |
| T/T | 2 |
| No term recorded | 63 |

**Discussion Points:**
- Review master data errors/gaps identified during training (action item from v3 notes)
- Confirm which issues Holsen team has already fixed vs. still outstanding
- Confirm whether product list and customer list above have been loaded into MAIA and validated
- Confirm pricing data loaded — separate price list file exists (`Price List Holsen.csv`)
- Review outstanding documents Holsen was asked to prepare post-training

**Decisions:**
- [ ] Product list (200 SKUs) loaded and validated in MAIA — confirmed / gaps identified
- [ ] Customer list (316 records) loaded and validated in MAIA — confirmed / gaps identified
- [ ] Pricing loaded and validated — confirmed / gaps identified

**Action Items:**
- [ ] Compile final list of data readiness blockers — Owner: [Name] — Due: YYYY-MM-DD

---

### 2. Feature Request Triage: Go-Live vs. Post-Go-Live (30 min)

**Goal:** Classify remaining open feature requests for Phase 1 go-live (31 Mar). C1/C3 compliance items are already confirmed as Phase 2 — not discussed here.

**Group 1 — COA:**
- Confirm customer-specific COA count and field requirements (Open Item #4)
- Confirm if COA is needed for Phase 1 go-live or deferred to Phase 2 with C1/C3

**Group 2 — DO Management:**
- Confirm DO bundling requirement — go-live blocker or post-go-live?

**Group 3 — Inventory & Lot:**
- Picklist workflow — confirm if blocking warehouse ops at go-live
- Lot number dropdown — confirm if needed at go-live
- Sticker label — confirm if needed at go-live

**Group 4 — Analytics:**
- Daily digest — likely post-go-live
- Item-level sales query — likely post-go-live

**Decisions:**
- [ ] Phase 1 go-live scope list finalised
- [ ] Post-go-live backlog agreed

**Action Items:**
- [ ] Document agreed scope split — Owner: Gareth — Due: YYYY-MM-DD

---

### 3. Role Permission Sign-Off — Core MAIA (20 min)

**Goal:** Lock the core MAIA approval chain and access control map. C1/C3 compliance roles deferred to Phase 2.

**Invoice approval chain (core MAIA):**
- Logistics generates DO → Aili approves proforma → Miss Wong generates eInvoice — confirm final flow
- 2-approval requirement before eInvoice issuance — confirm trigger conditions

**Role permission map — Phase 1 (present diagram for Holsen to confirm):**
- Salesperson: own customers only; new customers added/approved by Admin
- Finance: Miss Wong (eInvoice + invoice generation)
- Logistics: Noor Aili (DO confirm), Intan Atikah (procurement/incoming)
- Admin: Ong Siow Chui / Tam Ze Xin (general admin — C1/C3 compliance role confirmed in Phase 2)

**Open item:**
- DO sign-off UI mechanism — digital signature or button confirm (Open Item #11)

**Decisions:**
- [ ] Invoice approval chain confirmed
- [ ] Role permission matrix (Phase 1) confirmed
- [ ] DO sign-off mechanism confirmed (Open Item #11)

**Action Items:**
- [ ] Update role permission matrix with confirmed map — Owner: Gareth — Due: YYYY-MM-DD
- [ ] Share confirmed workflow diagram with Ivan / dev team — Owner: Gareth — Due: YYYY-MM-DD

---

### 4. Outstanding Deliverables from Holsen (15 min)

**Goal:** Collect or confirm status of documents/data Holsen needs to hand over.

**Handover Checklist:**
- [ ] Product data sheet and safety data sheet — Owner: [Holsen] — Due: YYYY-MM-DD
- [ ] Taxonomy class column — confirm product classification structure — Owner: [Holsen] — Due: YYYY-MM-DD
- [ ] Updated master data (customers, items, pricing) after training corrections — Owner: [Holsen] — Due: YYYY-MM-DD
- [ ] COA templates — imported PDFs for each customer format — Owner: [Holsen] — Due: YYYY-MM-DD
- [ ] Notification preference confirmation (channel, timing, recipient role) — Owner: [Holsen] — Due: YYYY-MM-DD
- [ ] C3 appointment letter reference format for MAIA field mapping — Owner: [Holsen] — Due: YYYY-MM-DD

**Decisions:**
- [ ] Agreed handover checklist with owner + deadline per item

**Action Items:**
- [ ] Send handover checklist to Holsen contact — Owner: Gareth — Due: YYYY-MM-DD

---

### 5. Go-Live Readiness Assessment (15 min)

**Goal:** Confirm what still needs to happen before production go-live.

**Go-Live Checklist (Core MAIA — 31 Mar target):**
- [ ] Master data fully loaded and validated in MAIA
- [ ] Go-live scope agreed: core MAIA features only (C1/C3 and A57 tax exemption excluded)
- [ ] Role permissions configured and tested
- [ ] UAT completed by Holsen team with sign-off (18–25 Mar)
- [ ] eInvoice attachment ready (17 Mar)
- [ ] Meta / WhatsApp account setup (by 25 Mar)
- [ ] Training completion — confirm if any team members missed the March 5 session

**Post-Go-Live (separate phase):**
- [ ] C1/C3 compliance features (dev target: 30 Mar, deploy after go-live)
- [ ] A57 tax exemption enforcement

**Decisions:**
- [ ] Remaining blockers identified
- [ ] % readiness for go-live assessed

**Action Items:**
- [ ] Document blockers list and assign owners — Owner: Gareth — Due: YYYY-MM-DD

---

### 6. Timeline & Next Steps (10 min)

**Goal:** Lock dates.

**Planned Closing & Go-Live Schedule:**

| Date | Milestone | Owner | Status |
|------|-----------|-------|--------|
| 17 Mar | PSO done | Bushra | - |
| 17 Mar | Holsen instance tested | Gareth | - |
| 17 Mar | eInvoice attachment ready | - | - |
| 17 Mar | Meeting prep (core MAIA scope, UAT plan) | Gareth, Bren, Ivan | - |
| 18 Mar | Kick off UAT — core MAIA (excluding C1/C3 and A57 tax exemption enforcement) | Holsen team | - |
| 25 Mar | UAT completed — core MAIA scope confirmed | Holsen team | - |
| 25 Mar | Meta / WhatsApp account setup | - | - |
| 30 Mar | Product ready — C1/C3 compliance features done | Dev | - |
| 31 Mar | Holsen closure | Gareth | - |
| 31 Mar | **Go-live — core MAIA (without C1/C3)** | All | - |

> **Note:** C1/C3 compliance and A57 tax exemption enforcement are **post-go-live** — core MAIA goes live 31 Mar without these. C1/C3 targeted ready 30 Mar for a subsequent phase.

**Decisions:**
- [x] Go-live date confirmed: 2026-03-31 (core MAIA, without C1/C3)
- [x] UAT session date confirmed: 2026-03-18 (start) — 2026-03-25 (done)
- [ ] Deliverable deadline agreed: [DATE]
- [ ] Next check-in date set: [DATE]

**Action Items:**
- [ ] Send meeting recap and agreed timeline — Owner: Gareth — Due: 2026-03-17
- [ ] Share dev delivery schedule with Holsen — Owner: Ivan — Due: 2026-03-17

---

## Parking Lot

[Items tabled for later discussion]

## Strategic Shifts

[Anything that changes how we work with Holsen — new scope, changed requirements, relationship dynamics]

---

## Phase 2 — C1/C3 Compliance UAT (Post-Go-Live)

> These items are **out of scope for the 18–25 Mar UAT and the 31 Mar go-live**. Dev target for C1/C3 features is 30 Mar; Phase 2 UAT and deployment to follow after core MAIA go-live.
>
> Source: [[Feature Requests/Holsen SOW Feature Checklist]] (all `[ ]` compliance items) + [[Product/SOW for MAIA Holsen]] Phase A3.

---

### Phase A1 — Unbuilt Compliance Items (carried into Phase 2)

These sit within Phase A1 scope in the SOW but are unbuilt and C1/C3-dependent.

**§1 Stock Availability**
- [ ] C3 stock hidden from non-C3 customers (shows "0 Stock Available")

**§1 Product Attribute Tagging (SKU Level)**
- [ ] Trading — "Pick-and-Pack" signal to warehouse
- [ ] Manufacturing — "Check with Production" visual cue
- [ ] Poison / Hazardous Goods — **"POISON FORM REQUIRED"** critical alert
- [ ] Commodity — manual price verification prompt to sales agent

**§1 Customer Requirements Tagging**
- [ ] COA requirement displayed on DO (Standard vs. Detailed)
- [ ] Brand strictness displayed ("NO SUBSTITUTION" / "PREFERRED BRAND: X")
- [ ] Documentation & Copies instructions displayed (e.g., "Needs 2 Invoice Copies")

**§2 UBS CSV Export — Additional Fields**
- [ ] CSV includes COA/label/brand requirements, delivery date, PO notes, order remarks

---

### Phase A3 — Compliance & Batch Enhancements

#### §8 Advanced Batch Intake

When new stock arrives, Warehouse team enters the following into MAIA:

- [ ] Batch / Lot Number field (mandatory)
- [ ] Expiry Date field (mandatory — drives FEFO logic)
- [ ] K1 Form Number field (mandatory for C3 / imported goods)
- [ ] COA PDF upload (supplier COA attached to batch)
- [ ] Tax & Restriction Status tagging:
  - [ ] Free Stock (sellable to anyone)
  - [ ] C1 Stock (restricted to customers with valid C1 certificate)
  - [ ] C3 Stock (hard locked to specific C3 customer)

#### §9 Compliance & Eligibility Enforcement

**C3 Allocation**
- [ ] C3 stock hard locked to designated customer
- [ ] Non-C3 customers shown "0 Stock Available" for C3 SKUs
- [ ] `[v3]` Admin can record C3 stock movements in MAIA — incoming qty logged on stock arrival, outgoing qty logged against confirmed DO for Jadual C2 audit

**C1 Certificate Validation**
- [ ] C1 product check against Customer Profile for valid certificate
- [ ] Certificate expiry date surfaced to agent during order

**K1 Traceability**
- [ ] K1 number linked permanently to batch
- [ ] K1 number auto-populated on Delivery Order
- [ ] K1 number auto-populated on Invoice

#### §10 COA Handling

**Storage & Linking**
- [ ] Supplier COA PDFs stored per batch (uploaded at batch intake)
- [ ] `[v3]` COA auto-linked to lot/batch record on delivery confirmation — searchable by lot number

**Customer COA Configuration** `[v3]`
- [ ] Admin configures COA count per customer (1 or 2 COAs per order)
- [ ] Admin toggles visible COA fields per customer on a shared base template

**Blinded COA**
- [ ] Customer Preference Logic applied (Standard vs. Blinded COA)
- [ ] Blinded COA — masking/blinding instructions provided before PDF generation

---

### Feature Requests — C1/C3 Compliance (FR-01 to FR-05)

| # | Feature | Status |
|---|---------|--------|
| FR-01 | **C3 Delivery Tracking with Date Filters** — Admin filters all C3 deliveries by date range to audit activity before Jadual C2 prep. Returns transactions with PO ref, qty, and linked DO. | [ ] |
| FR-02 | **Reminder to Log C3 Transactions** — System checks for a missing C3 record when a C3 DO is confirmed, and notifies Admin to log the entry before it's missed. | [ ] |
| FR-03 | **Unified Filter View for C1 and C3 Records** — Admin applies a period filter and sees C1 lumpsum rows per customer alongside C3 individual transaction rows in one compliance view. | [ ] |
| FR-04 | **Bi-Monthly Reminder to Export C1/C3 Document Bundle** — MAIA reminds Admin every 2 months to export the C1/C3 bundle for SST audit. Compiles customer invoice + supplier invoice + DO into one package. | [ ] |
| FR-05 | **C1 Compliance Workflow — DO Sign-Off, UBS Invoice Reference & Lumpsum** — Logistics submits DO, Admin signs off with UBS invoice number recorded. At period close MAIA surfaces one aggregated C1 lumpsum per customer for Jadual C2 export. | [ ] |

---

### Role Permissions — Phase 2 (Compliance-Specific)

- [ ] Admin C1/C3 compliance ownership confirmed (Ong Siow Chui / Tam Ze Xin)
- [ ] C1 lumpsum definition confirmed — total invoice value / qty / tax-exempt lines only (Open Item #10)
- [ ] A57 tax exemption enforcement — tagging and logic on invoices

---

### Phase 2 UAT Checklist (to be scheduled post-go-live)

- [ ] C1/C3 compliance features dev-complete — Owner: Dev — Target: 2026-03-30
- [ ] Phase 2 UAT date agreed — Owner: Gareth — Due: TBD
- [ ] Phase 2 UAT script prepared — Owner: Gareth — Due: TBD
- [ ] Phase 2 UAT executed and signed off by Holsen — Due: TBD
- [ ] Phase 2 deployed to production — Due: TBD

---

**See Also:**
- [[03 - Clients/Holsen/Holsen Feature Requests - 5 March Training]]
- [[03 - Clients/Holsen/Holsen Meeting Training v3 - 5 March]]
- [[03 - Clients/Holsen/Holsen v3 prep work]]
- [[03 - Clients/Holsen]]

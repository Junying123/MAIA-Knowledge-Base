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

> **Scope note:** Tomorrow's meeting focuses on **Phase 1 (Core MAIA) UAT briefing only**. Feature request triage and detailed role/approval workflows are deferred to Phase A3. See the [Phase A3 section](#phase-a3--deferred-items) at the bottom of this document.

## Agenda — Phase 1 (Core MAIA)

1. Training Debrief & Master Data Review (15 min)
2. UAT Briefing — Phase A1 Test Script Walkthrough (30 min)
3. Outstanding Deliverables from Holsen (10 min)
4. Go-Live Readiness & Timeline (10 min)

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

### 2. UAT Briefing — Phase A1 Test Script Walkthrough (30 min)

**Goal:** Walk the Holsen team through the UAT test script so they understand what to test, who tests what, and how to record results. UAT runs 18–25 Mar.

**Test script:** [[UAT/Holsen UAT Test Script - 2026-03]]
**Environment:** https://maia-fe-holsen.vercel.app/login
**Chatbot:** Telegram @maia_holsen_bot (WhatsApp after Meta setup)

---

**Overview of 21 tests across 6 groups:**

| Group | What's being tested | Who |
|-------|-------------------|-----|
| Group 1 — Chatbot: Sending Orders | Text / photo / PDF order input, pricing, stock check, document generation, credit note | Sales team |
| Group 2 — Web App: Managing Orders | Duplicate order block, SO management, CSV export | Sales team |
| Group 3 — Logistics: Deliveries & Alerts | Delivery Order + Picking List, out-of-stock, low-stock, delivery delay | Noor Aili |
| Group 4 — Logging In | All 8 users log in and see correct workspace | Everyone |
| Group 5 — Role Permissions | Each person checks their own access — can-do and cannot-do | Each person individually |
| Group 6 — Poison Signed Order (PSO) | PSO auto-generation on poison deliveries, layout, download, signed copy upload | Admin + Noor Aili |

---

**Group 1 — Chatbot: Sending Orders** *(Sales team)*

| Test | What Holsen does | What to check |
|------|-----------------|---------------|
| Test 1 — Text message | Send order text to @maia_holsen_bot | Customer name, products, quantities extracted correctly |
| Test 2 — Photo | Send photo of handwritten order or printed PO | Details read from photo correctly; can edit before confirming |
| Test 3 — PDF PO | Send PDF to chatbot | Chatbot confirms upload, extracts order, link opens CPO in web app; click "Create Sales Order" |
| Test 4 — Pricing & stock | Confirm prices; enter below-minimum price | Below-minimum blocked; available stock quantity shown |
| Test 5 — Documents | Generate Quotation → SO → Proforma Invoice → Invoice | All 4 documents created; prices carry over; each has a reference number |
| Test 6 — Credit Note | Create Credit Note from an Invoice | Credit Note references original Invoice; credited amount shown |

**Group 2 — Web App: Managing Orders** *(Sales team)*

| Test | What Holsen does | What to check |
|------|-----------------|---------------|
| Test 7 — Duplicate block | Submit PO-001 twice for same customer | Second attempt blocked with warning; PO-002 allowed |
| Test 8 — SO management | Create SO on web app; edit quantity; check status | SO saved; quantity updated; status visible |
| Test 9 — CSV export | Export completed SO as CSV | CSV contains customer name, address, delivery type, all SKUs and quantities |

**Group 3 — Logistics: Deliveries & Alerts** *(Noor Aili)*

| Test | What Holsen does | What to check |
|------|-----------------|---------------|
| Test 10 — DO + Picking List | Create DO from Invoice; generate Picking List | DO and Picking List both created and downloadable as PDF |
| Test 11 — Stock alerts | Check notification area | Out-of-stock and low-stock alerts visible to Logistics and Sales |
| Test 12 — Delivery delay | Find overdue Invoice (no DO created) | Delivery delay alert shown in digest |

**Group 4 — Logging In** *(Everyone)*

| Test | What Holsen does | What to check |
|------|-----------------|---------------|
| Test 13 — All users log in | Each of the 8 users logs in at https://maia-fe-holsen.vercel.app/login | Login works; each role sees the correct workspace |

**Group 5 — Role Permissions** *(Each person tests their own account)*

| Test | Who | Key checks |
|------|-----|-----------|
| Test 14 — Sales Manager | Ng Tze Chien / Tam Ze Xin | ✅ Quotation, PO full access · 🚫 Cannot create SO, Invoice, DO · 🚫 No Pick List |
| Test 15 — Logistics (Noor Aili) | Noor Aili | ✅ SO, DO, Pick List full access · 🚫 Cannot finalise Invoice · 🚫 Cannot create Quotation |
| Test 16 — Logistics Procurement | Intan Atikah | ✅ Can submit SO + DO · ✅ Incoming goods full access · 🚫 No Pick List · 🚫 Cannot finalise Invoice |
| Test 17 — Logistics Production | Murugesu | ✅ View Pick List + Inventory only · 🚫 No SO, DO, Quotation, Invoice |
| Test 18 — Finance (Miss Wong) | Wong Shui Fern | ✅ Invoice + Receipt full access · ✅ SO + DO submit · 🚫 No Pick List · 🚫 Cannot create Incoming |
| Test 19 — Admin | Ong Siow Chui | ✅ Full access across all documents |
| Test 20 — SO Approval flow | Sales Manager + Noor Aili / Miss Wong | Sales Manager creates draft SO → Noor Aili or Miss Wong submits → DO creation unlocked |

**Group 6 — Poison Signed Order (PSO)** *(Admin steps 1–2, Noor Aili steps 3–10)*

| Test | What Holsen does | What to check |
|------|-----------------|---------------|
| Test 21 — PSO full test | Admin flags a product as Poison; create DOs with/without poison items | PSO auto-appended for poison deliveries only; mixed DOs show poison items only on PSO; layout correct (FROM/TO/signature/remarks); download and re-upload signed copy works |

---

**Briefing points to cover:**
- [ ] Explain result options: ✅ Pass / ❌ Fail / ⚠️ Issue — and how to record notes
- [ ] Confirm each user has their login credentials filled in the test script
- [ ] Confirm UAT start date: 2026-03-18
- [ ] Confirm UAT completion and sign-off deadline: 2026-03-25
- [ ] Confirm who contacts Gareth if blocked during UAT

**Decisions:**
- [ ] Holsen team confirms they understand the test scope and instructions
- [ ] Login details confirmed for all 8 users
- [ ] UAT schedule (18–25 Mar) agreed

---

### 3. Outstanding Deliverables from Holsen (10 min)

**Goal:** Confirm what Holsen needs to have ready before UAT starts 18 Mar.

**Phase 1 — Must be ready by 18 Mar:**
- [ ] Master data loaded and validated in MAIA (customers, products, pricing) — Owner: Holsen + Ivan
- [ ] Login credentials for all 8 UAT users confirmed and working — Owner: Ivan — Due: 2026-03-17
- [ ] Notification preferences confirmed (channel, timing, recipient) — Owner: Holsen

**Phase A3 — Can wait until post-go-live:**
- [ ] COA templates per customer format — Owner: Holsen
- [ ] C3 appointment letter reference format — Owner: Holsen
- [ ] Product data sheet and safety data sheet — Owner: Holsen

**Decisions:**
- [ ] Phase 1 data confirmed ready for 18 Mar UAT start

---

### 4. Go-Live Readiness & Timeline (10 min)

**Goal:** Confirm readiness gates. Timeline already set — just confirm agreement.

**Phase 1 Go-Live Checklist (31 Mar):**
- [ ] Master data loaded and validated
- [ ] All 8 users can log in
- [ ] UAT completed + signed off (18–25 Mar)
- [ ] eInvoice attachment ready (17 Mar)
- [ ] Meta / WhatsApp account setup (by 25 Mar)

**Agreed Timeline:**

| Date | Milestone | Owner |
|------|-----------|-------|
| 17 Mar | PSO done | Bushra |
| 17 Mar | Holsen instance tested | Gareth |
| 17 Mar | eInvoice attachment ready | Ivan |
| 17 Mar | UAT script sent to Holsen | Gareth |
| 18 Mar | UAT starts — Phase A1 (21 tests) | Holsen team |
| 25 Mar | UAT sign-off + Meta/WhatsApp setup | Holsen team |
| 30 Mar | C1/C3 compliance dev-complete | Dev |
| 31 Mar | Go-live — core MAIA (Phase A1, without C1/C3) | All |

**Action Items:**
- [ ] Send UAT test script to Holsen — Owner: Gareth — Due: 2026-03-17
- [ ] Confirm all logins working — Owner: Ivan — Due: 2026-03-17
- [ ] Send meeting recap — Owner: Gareth — Due: 2026-03-17

---

## Parking Lot

[Items tabled for later discussion]

## Strategic Shifts

[Anything that changes how we work with Holsen — new scope, changed requirements, relationship dynamics]

---

## Phase A3 — Deferred Items (Post-Go-Live)

> Everything below is **out of scope for the 18–25 Mar UAT and the 31 Mar go-live**. To be discussed in a separate session after core MAIA is live.
>
> Source: [[Feature Requests/Holsen SOW Feature Checklist]] + [[Product/SOW for MAIA Holsen]] Phase A3.

---

### A3-1. Feature Request Triage (deferred from main agenda)

**Goal:** Classify remaining open feature requests — go-live blocker vs. post-go-live.

**Group 1 — COA:**
- Confirm customer-specific COA count and field requirements (Open Item #4)
- Confirm if COA is needed at go-live or deferred to Phase A3

**Group 2 — DO Management:**
- Confirm DO bundling requirement (FR-06)

**Group 3 — Inventory & Lot:**
- Picklist workflow — blocking warehouse ops?
- Lot number dropdown
- Sticker label (FR-07)

**Group 4 — Analytics:**
- Daily digest (FR-08) — likely post-go-live
- Item-level sales query (FR-09) — likely post-go-live

**Decisions:**
- [ ] Phase A3 scope list agreed
- [ ] Post-go-live backlog agreed

---

### A3-2. Role Permission & Compliance Sign-Off (deferred from main agenda)

**Invoice approval chain:**
- Logistics generates DO → Aili approves proforma → Miss Wong generates eInvoice — confirm final flow

**Open items:**
- DO sign-off UI mechanism — digital signature or button confirm (Open Item #11)
- C1 lumpsum definition — total invoice value / qty / tax-exempt lines only (Open Item #10)
- Admin C1/C3 compliance ownership confirmed (Ong Siow Chui / Tam Ze Xin)
- A57 tax exemption enforcement — tagging and logic on invoices

**Decisions:**
- [ ] Invoice approval chain confirmed
- [ ] DO sign-off mechanism confirmed (Open Item #11)
- [ ] C1 lumpsum definition confirmed (Open Item #10)

---

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

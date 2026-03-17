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

## Agenda

1. Training Debrief & Master Data Review (15 min)
2. Feature Request Triage: Go-Live vs. Post-Go-Live (30 min)
3. Compliance Workflow & Role Permission Sign-Off (20 min)
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

**Goal:** Jointly classify the 15 feature requests into must-have (go-live blocker) vs. post-go-live.

**Group 1 — Compliance (C1/C3):** 6 items — highest complexity; confirm which are legal blockers for go-live
- C3 delivery tracking with date filters
- C3 transaction logging in MAIA (incoming/outgoing)
- Unified C1/C3 filter view
- Bi-monthly export reminder
- C1 DO sign-off + UBS invoice reference
- Notification trigger for missing C3 record — confirm channel: in-app / email / Lark (Open Item #1)

**Group 2 — COA:** 3 items
- Confirm customer-specific COA count and field requirements (Open Item #4)

**Group 3 — DO Management:**
- Confirm DO bundling requirement

**Group 4 — Inventory & Lot:**
- Picklist workflow
- Lot number dropdown
- Sticker label
- Confirm if any of these are blocking warehouse ops

**Group 5 — Analytics:**
- Daily digest — likely post-go-live
- Item-level sales query — likely post-go-live

**Decisions:**
- [ ] Go-live scope list agreed
- [ ] Post-go-live backlog agreed

**Action Items:**
- [ ] Document agreed scope split — Owner: Gareth — Due: YYYY-MM-DD

---

### 3. Compliance Workflow & Role Permission Sign-Off (20 min)

**Goal:** Lock the approval chain and access control map before dev finalises permissions.

**Key Decisions Needed:**

**Invoice approval chain:**
- Logistics generates DO → Aili approves proforma → Miss Wong generates eInvoice — confirm final flow
- 2-approval requirement before eInvoice issuance — confirm trigger conditions

**Role permission map (present diagram for Holsen to confirm):**
- Salesperson: own customers only; new customers added/approved by Admin
- C1/C3 compliance: Admin-owned (Ong Siow Chui / Tam Ze Xin)
- Finance: Miss Wong (eInvoice + invoice generation)
- Logistics: Noor Aili (DO confirm), Intan Atikah (procurement/incoming)

**Other open items:**
- C1 lumpsum definition — what field constitutes the lumpsum: total invoice value / qty / tax-exempt lines only (Open Item #10)
- DO sign-off UI mechanism — digital signature or button confirm (Open Item #11)

**Decisions:**
- [ ] Invoice approval chain confirmed
- [ ] Role permission matrix confirmed
- [ ] C1 lumpsum definition confirmed (Open Item #10)
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

**See Also:**
- [[03 - Clients/Holsen/Holsen Feature Requests - 5 March Training]]
- [[03 - Clients/Holsen/Holsen Meeting Training v3 - 5 March]]
- [[03 - Clients/Holsen/Holsen v3 prep work]]
- [[03 - Clients/Holsen]]

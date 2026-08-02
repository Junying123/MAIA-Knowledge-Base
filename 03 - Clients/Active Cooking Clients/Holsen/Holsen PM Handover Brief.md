---
owner: Gareth
status: approved
last_reviewed: 2026-08-02
client: Holsen
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/HxqHwgtY3iOhBvk2nb5lQH1Ig7g
---

# Holsen — PM Handover Brief

*(Published to Lark as "Holsen Accounts Handover")*

> Handover from Gareth (resigning from Mindhive, no longer managing MAIA product) to the incoming PM.
> **Read in this order:** Quick Start → Status at a Glance → Deep Dives → Reading Order → Action Checklist.
> Nothing in this doc should be treated as confirmed until you've verified it yourself with the client or dev team — several items below are flagged precisely because they were never closed out.

---

## Quick Start

| | |
|---|---|
| **Client** | Holsen — wholesale/distribution business, order-to-cash on MAIA |
| **Folder** | `03 - Clients/Active Cooking Clients/Holsen/` |
| **Phase** | A1 (Core MAIA) live ~25 Jun 2026 (slipped from 31 Mar target). A3 (batch/compliance/C1-C3) deferred, post-go-live. |

**Two things to fix before anything else:**

1. **No named client contact anywhere in the KB.** Client Overview contact fields were never filled in. Only role names exist: Mr. Tam, Ong Siow Chui, and Mr. Chin (boss / credit controller). Get real contact details from Gareth, or chase the client directly.
2. **Live status is ambiguous.** A 29 Jun status note says "confirm live vs slipped"; a 1 Jul weekly update treats the client as already live. **Confirm directly with Holsen before reporting status anywhere.**

> **⚠️ Missing source docs.** This brief cites **Holsen Phase 1 Closure Backward Plan**, **Holsen Go-Live Action Plan - 2026-06-25**, **Dev Brief - Holsen UAT Issues - 2026-06-25**, **Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26**, and **Holsen MAIA User Guide - Mr Tam Team** — none of these exist in this Markdown KB (this checkout's latest commit is 2026-06-22). They're left as plain text below, not wikilinks. Find out whether they only ever existed in Obsidian/Lark, or need to be rebuilt from source.

---

## Status at a Glance

### ✅ Live & Confirmed

| Item | Detail | Source |
|---|---|---|
| Phase A1 core (chatbot, SO/DO flow, workspaces) | Live ~25 Jun 2026, later than the original 31 Mar target | Holsen Phase 1 Closure Backward Plan, Holsen Go-Live Action Plan - 2026-06-25 |
| PSO (Poison Sign Order) | Built and UAT-tested (Test 23) — 7 config items were pending as of 25 Mar, unclear if resolved | [[MAIA UAT Form - Holsen - 2026-03]] |
| One DN → many Invoices (drawdown billing) | Confirmed working — tested live on Holsen production, 2026-08-02. Not yet written up in product specs → [Deep Dive](#3-one-dn--many-invoices-drawdown-billing) | Verified by Gareth on Holsen prod |

### ⚠️ Deferred to Phase A3

| Item | Detail | Source |
|---|---|---|
| C1/C3 compliance | Scoped, UAT tests built, sessions run — **not signed off, not confirmed built** → [Deep Dive](#1-c1c3-compliance) | See deep dive |
| Batch allocation (lot-level, FEFO, C1/C3/K1 tagging) | Not started per checklist (17 Mar), not re-verified against live system → [Deep Dive](#2-batch-allocation) | [[Holsen SOW Feature Checklist]] §8–10, [[2026-03-16-ending-phase-agenda]] "Phase A3" |
| K1 traceability | Deferred to A3 | [[Onboarding Status]], Go-Live backlog |
| COA generation / blinding | Deferred to A3 (backlog item F3) | Holsen Go-Live Action Plan - 2026-06-25 |
| A57 tax exemption enforcement | Deferred, not yet enforced | [[Client Overview]], [[Config Overlay]] |

### ❓ Open / Needs Verification

| Item | Detail | Source |
|---|---|---|
| UAT sign-off (target 22 Jun) | Not formally closed — no completed results or signature | [[MAIA UAT Form - Holsen - 2026-03]] |
| Go-live date (25 Jun) | Ambiguous — see Quick Start | weekly status notes (outside this folder) |
| B1–B8 go-live bugs (warehouse default, stock check, payment due date, tax override, batch→picklist carry, min-price enforcement, discount display, pick-list chatbot notification) | Open as of 25 Jun, no confirmed closure since | Dev Brief - Holsen UAT Issues - 2026-06-25 |
| Stock/batch data ingest accuracy | In progress — ingesting stock from Holsen's Excel; batch qty per item and stock reco not tallying. Plan: re-ingest stock data; if discrepancies persist, Holsen does stock recon manually. **Blocks SQL sync readiness below.** | Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26 |
| Refresher training | Tentative 9–10 Jul, unconfirmed by client | weekly status notes |
| AutoCount/SQL integration (replaces UBS CSV) | Starting Aug 2026 — Holsen moving to SQL Accounting on-prem this month. Before any sync: confirm all MAIA data is ready — master data (customers, items), inventory/stock, and every doctype — then push to their SQL on-prem | Dev Brief - Holsen UAT Issues - 2026-06-25, Holsen Go-Live Action Plan - 2026-06-25 |
| Credit limit approval workflow (Finance) | Not yet enabled — clarify with Mr Tam before turning on. Future Finance-team feature; approval routes to **Mr Chin** (boss / credit controller) when a customer's credit exceeds their limit at order creation | [[Client Overview]], [[Config Overlay]] |
| Meta/WhatsApp cutover from Telegram UAT bot | Unclear — Telegram (@maia_holsen_bot) still referenced as of the June User Guide | Holsen MAIA User Guide - Mr Tam Team, [[Client Overview]] |
| Multiple credit notes per invoice | Platform-wide limitation, not Holsen-specific — roadmap item, not a Holsen blocker | [[Known Limitations]] |

---

## Deep Dives

### 1. C1/C3 Compliance

**Definitions** (from [[Holsen Feature Requests - 5 March Training]]):

| Term | Meaning |
|---|---|
| **C1** | Customer's manufacturer tax exemption certificate. Perpetual/reusable. Holsen holds the client's cert, records the cert number on invoice. Can be mixed with non-exempt items on the same order. |
| **C3** | Per-order import-on-behalf exemption. Tied to PO + appointment letter, quantity-based, not perpetual. Always requires a standalone DO + invoice — cannot mix with other order types. |
| **Jadual C2** | Holsen's own SST compliance schedule — **not a MAIA feature**. Records C3 transactions + C1 lumpsum per customer, submitted periodically to Malaysian SST. MAIA's job is to supply structured exports Holsen uses to populate it, not to build or host it. |
| **K1** | Customs declaration number tied to C3/imported goods; must trace to batch, DO, and invoice. |

**Intended mechanics** ([[SOW for MAIA Holsen]], [[Working Holsen]]): C1/C3 are Tax & Restriction Status tags at batch level (Free / C1 / C3 Stock). C3 stock is hard-locked to one customer. C1 is validated against the Customer Profile's certificate + expiry. Cert objects are created manually or via PDF upload, linked to the Customer, applied on SO/CPO, HS-code matched against cert line items, with a hard submit-block if uncovered.

**Current state:**

- UAT test cases exist in [[MAIA UAT Form - Holsen - 2026-03]] (Tests 24–36: cert create/upload/apply, CPO→SO carry, submit-block on missing attachment/HS mismatch) — **none marked pass/fail**.
- Dedicated C1/C3 UAT sessions ran 11, 15, 22 May 2026 (raw call transcripts exist but are hard to read cleanly — confirm live-system testing actually happened; no clean written outcome).
- [[Holsen SOW Feature Checklist]] FR-01–FR-05 (C3 delivery tracking, C3 transaction reminders, unified C1/C3 filter view, bi-monthly export bundle reminder, C1 DO sign-off/UBS/lumpsum workflow) all marked **not started** as of 17 Mar — may be stale given the May UAT activity, needs re-verification against the live system.
- **Commercial note:** Holsen pays 30% (not 50%) at Phase 1 closure specifically because A3/C1C3 slipped — the remaining balance is contingent on A3 shipping. Track this liability.

**Bottom line:** treat C1/C3 as **NOT confirmed done**. Verify FR-01–05 against the live system before reporting any completion.

**Unresolved open questions** (from the 5 March meeting, never closed):

- Jadual C2 submission frequency — 2 vs 3 months, contradicted in notes
- Definition of "C1 lumpsum" for reporting
- What "DO sign-off" UI mechanism means for C1/C3
- Full COA vs Masked COA — which customers get which
- Sticker label formats — blocked on client-provided templates

---

### 2. Batch Allocation

Deferred alongside C1/C3 — it's the **data-model prerequisite** for both C1/C3 tagging and K1 traceability, not a standalone nice-to-have. Treat batch allocation, C1/C3, and K1 as **one build track**, not three.

**What it means:** lot/batch-level stock allocation to specific SO/DN lines — not just a batch number field, but expiry-driven (FEFO) pick logic, restriction-status tagging per batch, and lot-level traceability through to invoice.

**Currently live (basic layer only):**

- Batch number selection on Delivery Note line items, carried over to Pick List on conversion — covered by [[DN to Pick List - Batch Number Test Cases]] (HOL-LOG-DN-PL-001, HOL-LOG-DN-PL-002).
- ⚠️ "Batch→picklist carry" is also listed as one of the **B1–B8 open go-live bugs** (Dev Brief - Holsen UAT Issues - 2026-06-25) — confirm whether this basic carry-over is actually stable in production or still broken.

**Not built — deferred to Phase A3** (per [[Holsen SOW Feature Checklist]] §8–10 "Compliance & Batch Enhancements" and [[2026-03-16-ending-phase-agenda]] "Phase A3 — Deferred Items," all unchecked as of 17 Mar):

| Feature | Detail |
|---|---|
| Advanced Batch Intake (§8) | Mandatory Batch/Lot Number and Expiry Date fields at goods receipt (expiry drives FEFO pick logic); mandatory K1 Form Number for C3/imported goods; supplier COA PDF upload attached to the batch |
| Tax & Restriction Status tagging | Free Stock (sellable to anyone) / C1 Stock (customers with a valid C1 cert) / C3 Stock (hard-locked to one customer) |
| C3 Allocation (§9) | C3 stock hard-locked to the designated customer; non-C3 customers see "0 Stock Available" for C3 SKUs; `[v3]` admin-recorded C3 stock movement log for Jadual C2 audit |
| K1 Traceability (§9) | K1 number linked permanently to the batch, auto-populated on Delivery Order and Invoice |
| Full picklist workflow `[v3]` | SO triggers a picklist → Logistics confirms lot + quantity → DO generated from the confirmed pick → invoice follows |
| Picklist UI `[v3]` | Lot number dropdown showing available lots with quantity and expiry, plus a remark field for discrepancies |

**Bottom line:** treat batch allocation as **NOT started** against the live system, same caveat as C1/C3 — the checklist is unchecked as of 17 Mar and nothing in this KB checkout confirms it moved since. Verify directly with dev before it's counted toward the A3 balance.

---

### 3. One DN → Many Invoices (Drawdown Billing)

**Client scenario:** customer orders 1 tonne; MAIA/Holsen deliver the full 1 tonne to the customer's warehouse in a single DN, then invoice incrementally as the customer draws down/consumes the stock — e.g. 4 separate invoices of 0.25 tonne each against that one DN.

**Status: ✅ Confirmed working** — verified by Gareth directly on Holsen live/production (2026-08-02). MAIA supports issuing multiple partial invoices against a single Delivery Note.

**Gap — not yet reflected in product specs:**

- [[01 - MAIA Product/Product Specs/Blanket Order Spec|Blanket Order Spec]] only documents the *other* direction — one SO → many DNs, each with its own qty split, date, and address (F-01/F-02).
- [[01 - MAIA Product/Product Specs/Delivery Note Spec|Delivery Note Spec]] F-02 only covers DN-from-Invoice, and flags "Multiple DNs from one Invoice?" as `[TO FILL]` — the reverse of what's now confirmed.
- **No written spec exists anywhere for this flow.** It was confirmed by live testing, not documentation. The exact business rules — how invoiced qty is tracked against DN delivered qty, whether the DN shows a running "remaining to invoice" balance, when the DN is marked fully invoiced — are undocumented.

**Bottom line:** safe to confirm this to Holsen as supported. Still worth writing a short spec so it isn't just tribal knowledge from one live test.

---

## Reading Order

*(In-folder docs only — read top to bottom, then verify against the live system and client.)*

| # | Doc | Why it matters |
|---|---|---|
| 1 | **CLAUDE** (Holsen folder) | Orientation map |
| 2 | [[Client Overview]] | Business context — contact fields are empty, chase this |
| 3 | Holsen Phase 1 Closure Backward Plan | Current operative plan — supersedes the older [[Holsen Phase 1 Timeline]] |
| 4 | Holsen Go-Live Action Plan - 2026-06-25 + Dev Brief - Holsen UAT Issues - 2026-06-25 | Most recent, most operationally critical |
| 5 | [[Holsen SOW Feature Checklist]] | Full scope/build checklist — unfilled checkboxes, but the complete feature inventory, incl. §8–10 batch allocation |
| 6 | [[Holsen Feature Requests - 5 March Training]] | C1/C3 definitions + open compliance questions |
| 7 | [[SOW for MAIA Holsen]] + [[Working Holsen]] | Full technical/operational spec across all phases |
| 8 | [[MAIA UAT Form - Holsen - 2026-03]] | Canonical test script incl. C1/C3 Tests 24–36 — get it signed if it isn't already |
| 9 | [[Config Overlay]] + `Role Permission/MAIA_Role_Permission_Holsen_Completed.xlsx` | Config and access reference |
| 10 | Holsen MAIA User Guide - Mr Tam Team | Client-facing operating model today |
| 11 | Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26 | Active, unresolved stock/batch ingestion work |
| 12 | `Meetings/` transcripts (C1/C3 sessions, go-live sessions) | Secondary/supporting evidence only |

---

## Action Checklist for Incoming PM

**This week:**

- [ ] Confirm live/production status directly with Holsen — Needed by: ASAP
- [ ] Get real client contact details (currently no named contact on file) — Needed by: ASAP
- [ ] Get B1–B8 bug status from dev team — Needed by: ASAP
- [ ] Chase stock-data-issue root cause + ETA — batch qty per item and stock reco from Holsen's Excel ingest not tallying; plan is to re-ingest, then Holsen falls back to manual stock recon if still off — Needed by: ASAP, and before SQL sync below

**Before reporting Phase A3 progress:**

- [ ] Formally close and sign the UAT form (Tests 1–36, incl. the never-executed C1/C3 tests) — Needed by: before reporting A3 progress
- [ ] Verify FR-01–FR-05 (C1/C3) actual build status against the live system — checklist says not started but may be stale post-May UAT — Needed by: before commercial balance discussion
- [ ] Verify batch allocation (§8–10: Advanced Batch Intake, C3 Allocation, K1 Traceability, picklist lot dropdown) actual build status against the live system — Needed by: before commercial balance discussion

**Before the SQL sync (Aug 2026):**

- [ ] Confirm all MAIA data is sync-ready — master data (customers, items), **inventory/stock**, and every doctype involved — before pushing to Holsen's SQL on-prem. Depends on the stock-ingest item above being resolved first — Needed by: before first sync

**Before Finance rollout:**

- [ ] Clarify the credit limit approval workflow with Mr Tam before enabling — routes to **Mr Chin** (boss / credit controller) when a customer's credit exceeds their limit at order creation — Needed by: before Finance rollout

**Documentation debt:**

- [ ] Write a short spec for "one DN → many Invoices" (drawdown billing) — confirmed working via live test on Holsen prod (2026-08-02), but no written business rules exist anywhere — Needed by: before relying on this for Holsen billing at scale

---

## See Also

- [[Client Overview]]
- [[Holsen SOW Feature Checklist]]
- [[Holsen Feature Requests - 5 March Training]]
- [[SOW for MAIA Holsen]]
- [[Working Holsen]]
- [[MAIA UAT Form - Holsen - 2026-03]]
- [[Config Overlay]]
- [[Onboarding Status]]
- [[DN to Pick List - Batch Number Test Cases]]
- [[Known Limitations]]
- [[2026-03-16-ending-phase-agenda]]
- [[01 - MAIA Product/Product Specs/Blanket Order Spec|Blanket Order Spec]]
- [[01 - MAIA Product/Product Specs/Delivery Note Spec|Delivery Note Spec]]

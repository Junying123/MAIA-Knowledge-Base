---
owner: Gareth
status: approved
last_reviewed: 2026-07-01
client: Holsen
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/HxqHwgtY3iOhBvk2nb5lQH1Ig7g
---

# Holsen — PM Handover Brief

*(Published to Lark as "Holsen Accounts Handover")*

Handover doc for incoming PM. Gareth resigning from Mindhive, no longer managing MAIA product. This doc is the starting point — read in order below, then verify open items directly with the client and dev team.

> **⚠️ KB sync note (added when mirroring this doc from Lark into Markdown):** Several documents referenced below — **Holsen Phase 1 Closure Backward Plan**, **Holsen Go-Live Action Plan - 2026-06-25**, **Dev Brief - Holsen UAT Issues - 2026-06-25**, **Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26**, and **Holsen MAIA User Guide - Mr Tam Team** — do not exist in this Markdown KB as of this checkout (latest commit here is 2026-06-22). They are left as plain text, not wikilinks, until located or recreated. Incoming PM: confirm whether these live only in Obsidian/Lark and were never committed, or need to be rebuilt from source.

## Overview

- **Client:** Holsen
- **Folder:** `03 - Clients/Active Cooking Clients/Holsen/`
- **Phase:** A1 (Core MAIA) live since ~25 Jun 2026, slipped from original 31 Mar target. A3 (batch/compliance/C1C3) deferred, post-go-live.
- ⚠️ Live status is ambiguous — a 29 Jun status note explicitly flags "confirm live vs slipped"; a 1 Jul weekly update treats client as already live (discussing stock-data issue, training). First action: confirm directly with Holsen.
- ⚠️ No named client contact anywhere in the KB. Client Overview contact fields were never filled in. Only role names appear scattered across meeting/UAT docs (Mr. Tam, Ong Siow Chui, and **Mr. Chin** — boss / credit controller, approves customer credit limit exceedances). Get this from Gareth or chase the client before takeover.

## Status Table

| Item | Status | Source (in-folder) |
|---|---|---|
| Phase A1 core (chatbot, SO/DO flow, workspaces) | ✅ Live (~25 Jun 2026, later than 31 Mar original target) | Holsen Phase 1 Closure Backward Plan, Holsen Go-Live Action Plan - 2026-06-25 |
| UAT sign-off (target 22 Jun) | ❌ Not formally closed — no completed results/signature | [[MAIA UAT Form - Holsen - 2026-03]] |
| Go-live (25 Jun) | ⚠️ Ambiguous — see Overview | cross-referenced in weekly status notes (outside this folder) |
| B1–B8 go-live bugs (warehouse default, stock check, payment due date, tax override, batch→picklist carry, min-price enforcement, discount display, pick-list chatbot notification) | ⚠️ Open as of 25 Jun, no confirmed closure since | Dev Brief - Holsen UAT Issues - 2026-06-25 |
| Stock/batch data ingest accuracy | ⚠️ Still in progress — ingesting stock from Holsen's Excel; batch qty per item and stock reco not tallying. Plan: may re-ingest stock data; if discrepancies persist after re-ingest, Holsen does stock recon manually. Blocks SQL sync readiness (see below) | Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26 |
| Refresher training | Tentative 9–10 Jul, unconfirmed by client | cross-referenced in weekly status notes |
| C1/C3 compliance (Phase A3) | ⚠️ Scoped, UAT tests built, sessions run — not signed off, not confirmed built. See deep dive below | See below |
| **Batch allocation (lot-level, FEFO, C1/C3/K1 tagging)** | ⚠️ Deferred to A3 — not started per checklist (17 Mar), not re-verified against live system | [[Holsen SOW Feature Checklist]] §8–10, [[2026-03-16-ending-phase-agenda]] "Phase A3." See deep dive below |
| K1 traceability | Deferred to A3 | [[Onboarding Status]], Go-Live backlog |
| COA generation/blinding | Deferred to A3 (backlog F3) | Holsen Go-Live Action Plan - 2026-06-25 |
| A57 tax exemption enforcement | Deferred, not yet enforced | [[Client Overview]], [[Config Overlay]] |
| AutoCount/SQL integration (replaces UBS CSV) | ⚠️ Starting Aug 2026 — Holsen moving to SQL Accounting on-prem this month. Before any sync: confirm all MAIA data is ready — master data (customers, items), inventory/stock, and every doctype — then push to their SQL on-prem | Dev Brief - Holsen UAT Issues - 2026-06-25, Holsen Go-Live Action Plan - 2026-06-25 |
| Credit limit approval workflow (Finance) | ⚠️ Not yet enabled — clarify with Mr Tam before turning on. Future use: Finance team; approval routes to **Mr Chin** (boss / credit controller) when a customer's credit exceeds their limit at order creation | [[Client Overview]], [[Config Overlay]] |
| PSO (Poison Sign Order) | ✅ Built, UAT-tested (Test 23) — 7 config items pending as of 25 Mar, unclear if resolved | [[MAIA UAT Form - Holsen - 2026-03]] |
| Multiple credit notes per invoice | Platform-wide limitation, not Holsen-specific, roadmap item | [[Known Limitations]] |
| Meta/WhatsApp cutover from Telegram UAT bot | Unclear — Telegram (@maia_holsen_bot) still referenced as of June User Guide | Holsen MAIA User Guide - Mr Tam Team, [[Client Overview]] |

## C1/C3 Deep Dive

**Definitions** (from [[Holsen Feature Requests - 5 March Training]]):

- **C1** — customer's manufacturer tax exemption certificate. Perpetual/reusable. Holsen holds the client's cert, records cert number on invoice. Can be mixed with non-exempt items on same order.
- **C3** — per-order import-on-behalf exemption. Tied to PO + appointment letter, quantity-based, not perpetual. Always requires a standalone DO + invoice (cannot mix with other order types).
- **Jadual C2** — Holsen's own SST compliance schedule (not a MAIA feature). Records C3 transactions + C1 lumpsum per customer, submitted periodically to Malaysian SST. MAIA's job: supply structured exports Holsen uses to populate it — not build/host it.
- **K1** — customs declaration number tied to C3/imported goods; must trace to batch, DO, invoice.

**Intended mechanics** ([[SOW for MAIA Holsen]], [[Working Holsen]]): C1/C3 are Tax & Restriction Status tags at batch level (Free / C1 / C3 Stock). C3 stock hard-locked to one customer. C1 validated against Customer Profile cert + expiry. Cert objects created manually or via PDF upload, linked to Customer, applied on SO/CPO, HS-code matched against cert line items, hard submit-block if uncovered.

**Current state:**

- UAT test cases exist and are built into [[MAIA UAT Form - Holsen - 2026-03]] (Tests 24–36: cert create/upload/apply, CPO→SO carry, submit-block on missing attachment/HS mismatch) — none marked pass/fail.
- Dedicated C1/C3 UAT sessions ran 11, 15, 22 May 2026 (raw call transcripts exist — hard to read cleanly, confirm live-system testing happened, but no clean written outcome).
- [[Holsen SOW Feature Checklist]] FR-01–FR-05 (C3 delivery tracking, C3 transaction reminders, unified C1/C3 filter view, bi-monthly export bundle reminder, C1 DO sign-off/UBS/lumpsum workflow) all marked not started as of 17 Mar — may be stale given May UAT activity, needs re-verification against live system.
- Commercial note: Holsen pays 30% (not 50%) at Phase 1 closure specifically because A3/C1C3 slipped — remaining balance contingent on A3 shipping. Track this liability.

**Bottom line:** treat C1/C3 as NOT confirmed done. Verify FR-01–05 against the live system before reporting any completion.

**Unresolved open questions** (from 5 March meeting, never closed):

- Jadual C2 submission frequency — 2 vs 3 months, contradicted in notes
- Definition of "C1 lumpsum" for reporting
- What "DO sign-off" UI mechanism means for C1/C3
- Full COA vs Masked COA — which customers get which
- Sticker label formats — blocked on client-provided templates

## Batch Allocation Deep Dive

This is the feature that was deferred alongside C1/C3 — flagging it separately because it's the **data-model prerequisite** for both C1/C3 tagging and K1 traceability, not a standalone nice-to-have. Treat all three (batch allocation, C1/C3, K1) as one build track.

**What "batch allocation" means here:** lot/batch-level stock allocation to specific SO/DN lines — not just a batch number field, but expiry-driven (FEFO) pick logic, restriction-status tagging per batch, and lot-level traceability through to invoice.

**Currently live (basic layer only):**

- Batch number selection on Delivery Note line items, carried over to Pick List on conversion — covered by [[DN to Pick List - Batch Number Test Cases]] (HOL-LOG-DN-PL-001, HOL-LOG-DN-PL-002).
- ⚠️ Cross-check against the Status Table above: "batch→picklist carry" is listed as one of the **B1–B8 open go-live bugs** per Dev Brief - Holsen UAT Issues - 2026-06-25 — confirm whether this basic carry-over is actually stable in production or still broken.

**Not built — deferred to Phase A3** (per [[Holsen SOW Feature Checklist]] §8–10 "Compliance & Batch Enhancements" and [[2026-03-16-ending-phase-agenda]] "Phase A3 — Deferred Items," all unchecked as of 17 Mar):

- **Advanced Batch Intake (§8):** mandatory Batch/Lot Number and Expiry Date fields at goods receipt (expiry drives FEFO pick logic); mandatory K1 Form Number field for C3/imported goods; supplier COA PDF upload attached to the batch.
- **Tax & Restriction Status tagging per batch:** Free Stock (sellable to anyone) / C1 Stock (restricted to customers with a valid C1 certificate) / C3 Stock (hard-locked to one specific customer).
- **C3 Allocation (§9):** C3 stock hard-locked to the designated customer; non-C3 customers shown "0 Stock Available" for C3 SKUs; `[v3]` admin-recorded C3 stock movement log (incoming on arrival, outgoing on confirmed DO) for Jadual C2 audit.
- **K1 Traceability (§9):** K1 number linked permanently to the batch, auto-populated on Delivery Order and Invoice.
- **Full picklist workflow** `[v3]`: SO triggers a picklist → Logistics confirms lot + quantity → DO generated from the confirmed pick → invoice follows.
- **Picklist UI** `[v3]`: lot number dropdown showing available lots with quantity and expiry, plus a remark field for discrepancies.

**Bottom line:** treat batch allocation as **NOT started** against the live system, same caveat as C1/C3 — the checklist is unchecked as of 17 Mar and nothing in this KB checkout confirms it moved since. Verify directly with dev before it's counted toward the A3 balance.

## Reading Order (in-folder docs only)

1. **CLAUDE** (Holsen folder) — orientation map
2. **[[Client Overview]]** — business context (contact fields empty, chase this)
3. **Holsen Phase 1 Closure Backward Plan** — current operative plan (supersedes older [[Holsen Phase 1 Timeline]])
4. **Holsen Go-Live Action Plan - 2026-06-25** + **Dev Brief - Holsen UAT Issues - 2026-06-25** — most recent, most operationally critical
5. **[[Holsen SOW Feature Checklist]]** — full scope/build checklist (unfilled checkboxes, but complete feature inventory, incl. §8–10 batch allocation)
6. **[[Holsen Feature Requests - 5 March Training]]** — C1/C3 definitions + open compliance questions
7. **[[SOW for MAIA Holsen]]** + **[[Working Holsen]]** — full technical/operational spec across all phases
8. **[[MAIA UAT Form - Holsen - 2026-03]]** — canonical test script incl. C1/C3 Tests 24–36 (get signed if not already)
9. **[[Config Overlay]]** + Role Permission/`MAIA_Role_Permission_Holsen_Completed.xlsx` — config and access reference
10. **Holsen MAIA User Guide - Mr Tam Team** — client-facing operating model today
11. **Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26** — active, unresolved stock/batch ingestion work
12. **Meetings/** transcripts (C1/C3 sessions, go-live sessions) — secondary/supporting evidence only

## Immediate Follow-ups for Incoming PM

- [ ] Confirm live/production status directly with Holsen — Owner: [New PM] — Needed by: ASAP
- [ ] Get B1–B8 bug status from dev team — Owner: [New PM] — Needed by: ASAP
- [ ] Chase stock-data-issue root cause + ETA — batch qty per item and stock reco from Holsen's Excel ingest not tallying; plan is to re-ingest stock data, and if discrepancies persist after re-ingest, Holsen falls back to manual stock recon — Owner: [New PM] — Needed by: ASAP, and before SQL sync (item below)
- [ ] Formally close and sign UAT form (Tests 1–36, incl. never-executed C1/C3 tests) — Owner: [New PM] — Needed by: before reporting A3 progress
- [ ] Verify FR-01–FR-05 (C1/C3) actual build status against live system — checklist says not started but may be stale post-May UAT — Owner: [New PM] — Needed by: before commercial balance discussion
- [ ] Verify batch allocation (§8–10: Advanced Batch Intake, C3 Allocation, K1 Traceability, picklist lot dropdown) actual build status against live system — checklist says not started, may be stale — Owner: [New PM] — Needed by: before commercial balance discussion
- [ ] Holsen starts using SQL Accounting on-prem this month (Aug 2026) — before pushing any data to their SQL on-prem, confirm all MAIA data is sync-ready: master data (customers, items), **inventory/stock**, and every doctype involved — Owner: [New PM] — Needed by: before first sync
- [ ] Clarify credit limit approval workflow with Mr Tam before enabling — future feature for the Finance team; when a customer's credit exceeds their limit at order creation, approval routes to **Mr Chin** (boss / credit controller) — Owner: [New PM] — Needed by: before Finance rollout

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

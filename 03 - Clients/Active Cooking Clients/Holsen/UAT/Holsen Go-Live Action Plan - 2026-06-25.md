---
owner: Gareth
status: draft
last_reviewed: 2026-06-25
client: Holsen
---

# Holsen Go-Live Action Plan — 2026-06-25

## Overview

Compiled from two sessions:
- **Close UAT** — 2026-06-22 (Gareth + Mr. Tam / Holsen Lab, ~2 hrs)
- **Go-Live Check-in** — 2026-06-25 (Full team: Gareth, Ivan, Brendan, Jermaine + Holsen Lab)

Go-live target: **Thursday 25 June 2026** (today). Several blocking bugs and configuration gaps remain open. This document tracks all actions needed to safely go live and manage the post-live period.

---

## Bug Fixes — Dev Action Required

See [[UAT/Dev Brief - Holsen UAT Issues - 2026-06-25]] for full reproduction details to share with dev team.

| ID | Issue | Priority | Status | Assigned |
|----|-------|----------|--------|---------|
| B1 | Delivery Note defaults to wrong warehouse (Warehouse 0042 / ABC Component) instead of Main Warehouse — causes negative stock error on submit | P1 Blocker | Open | Ivan / Dev |
| B2 | System allows DN submit with insufficient stock in selected warehouse — no validation before submit | P1 Blocker | Open | Ivan / Dev |
| B3 | Payment due date (Net 30) calculates from delivery date instead of invoice creation date | P1 Blocker | Open | Ivan / Dev |
| B4 | Item-level "no tax" override hierarchy — need to verify item-level no-tax correctly overrides system/customer default 10% tax in all scenarios | P2 | Open | Ivan / Dev |
| B5 | Batch number selected on Delivery Note not carrying through to Pick List correctly | P1 Blocker | Open — see test cases HOL-LOG-DN-PL-001/002 | Ivan / Dev |

---

## Go-Live Prerequisites (Gates)

All P1 blockers must be resolved and verified before Holsen team uses the live system for real orders.

### Code / Deployment

- [ ] B1 fix deployed and verified on `maia-fe-holsen.vercel.app`
- [ ] B2 fix deployed and verified
- [ ] B3 fix deployed and verified
- [ ] B5 fix deployed and verified — re-run test cases [[UAT/DN to Pick List - Batch Number Test Cases]]
- [ ] B4 tax override verified (can be done on staging with real product)

### Configuration (PM + Holsen Lab)

- [ ] Default warehouse set to Main Warehouse on all items in system (C1 — Gareth / Ivan)
- [ ] Customer-specific pricing loaded for all active customers (C2 — Gareth)
- [ ] Minimum price configured per product (C3 — Gareth)
- [ ] Sales tax classification confirmed per product and per customer (C4 — Gareth)
- [ ] All 7 customers' records, stock levels, and pricing ingested (C5 — Holsen Lab + Gareth)
- [ ] Batch numbers created in system for all existing physical inventory (C6 — Holsen Lab)

### End-to-End Sign-off Testing

- [ ] WhatsApp chatbot: CPO upload → SO creation → Salesman notification — tested with Mr. Tam
- [ ] Full flow verified: Chatbot CPO → SO → Finance Approval → DN → Pick List → Invoice → Receipt
- [ ] Partial delivery (multiple DNs from one SO) tested and verified
- [ ] Role/permission checks for all Holsen users (UAT Tests 15–22 in [[UAT/MAIA UAT Form - Holsen - 2026-03]])
- [ ] Poison goods workflow tested (POISON FORM REQUIRED alert fires on hazardous SKUs)
- [ ] Mr. Tam sign-off obtained

---

## Data Migration Checklist (From Go-Live Session 2026-06-25)

| Task | Owner | Notes |
|------|-------|-------|
| Clean up Excel data — remove formulas, use raw values | Holsen Lab | Target: within same day |
| Upload 7 new customer records | Gareth / Ivan | Must precede any live order creation |
| Upload stock with batch numbers | Holsen Lab | Manual stock entry in MAIA per batch |
| Upload customer-specific pricing per product | Gareth | Including historical pricing reference for manufacturing items |
| Upload minimum price per product | Gareth | Blocks orders priced below margin floor |
| Confirm tax classification per product (taxable vs. no-tax) | Gareth + Holsen Lab | Holsen to advise, Gareth to configure |

---

## Post Go-Live Backlog

These items were raised in UAT/Go-Live sessions but are **explicitly deferred** — not blocking go-live.

| ID | Feature | Reason Deferred | Target |
|----|---------|----------------|--------|
| F1 | WhatsApp/Telegram push notification when Pick List is generated | Phase A1 workaround: logistics team checks web workspace | Post go-live; phase TBC |
| F2 | C3/poison goods compliance certificate generation (K1 traceability, C3 allocation lock) | Phase A3 scope per SOW | Phase A3 — date TBC |
| F3 | COA (Certificate of Analysis) generation and blinding | Phase A3 scope per SOW | Phase A3 — date TBC |
| F4 | AutoCount / SQL integration (currently using UBS CSV export) | August target per backward plan | August 2026 |
| F5 | Multiple credit notes per invoice | Known platform limitation | Roadmap item |
| F6 | Sticker labels and DO bundling | Per backward plan | Post Phase 1 |
| F7 | C1 certificate validation per customer | Phase A3 scope | Phase A3 |

---

## Open Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| B1/B2 warehouse bug not fixed before first live orders — staff create DNs with wrong warehouse | High | High — incorrect stock deducted from wrong location | Dev must fix before Holsen team uses system for real orders; or Gareth to brief Mr. Tam to manually set warehouse on every DN |
| Customer data not fully ingested — orders created with wrong or missing pricing | Medium | Medium — pricing errors in live orders | Gareth/Ivan to complete data upload before confirming go-live |
| Batch numbers not created — logistics team cannot select batch on DN | Medium | High — DNs cannot be submitted | Holsen Lab to create all batches as first action on go-live day |
| Mr. Tam's team not trained on MAIA before taking real orders | Low | High — user errors in live orders | Handover guide distributed before first live order; refresher training scheduled for July |

---

## Timeline Reference

From [[Timeline/Holsen Phase 1 Closure Backward Plan]]:
- M1 Close UAT + Sign-off: 22 Jun 2026
- M2 Data Prep + Ingest: 23–24 Jun 2026
- M3 Go-Live: 25 Jun 2026 (today)
- M4 Refresher Training: July 2026 (TBC)

**Commercial note:** Holsen pays 30% at Phase 1 sign-off (not 50%) due to Phase A3 batch enforcement deferral. Remaining balance triggered when Phase A3 ships.

---

## See Also

- [[UAT/Dev Brief - Holsen UAT Issues - 2026-06-25]] — dev-facing bug report
- [[Holsen MAIA User Guide - Mr Tam Team]] — handover guide for Holsen's team
- [[UAT/MAIA UAT Form - Holsen - 2026-03]] — UAT test cases and sign-off form
- [[UAT/DN to Pick List - Batch Number Test Cases]] — batch carry-over test cases
- [[Product/SOW for MAIA Holsen]] — Phase A1/A3 scope boundary
- [[Timeline/Holsen Phase 1 Closure Backward Plan]] — milestone plan

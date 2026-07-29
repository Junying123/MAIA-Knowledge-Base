---
owner: Gareth
status: draft
last_reviewed: 2026-07-29
lark_url:
---

# Macrofrozen — 2nd UAT Bug Fixes Checklist (28 Jul 2026)

## Overview
Source: `29Jul26_MacroFrozen_UAT2_Summary_and_Action_Plan_28Jul26.docx` — internal summary merging the Fireflies recording (190 min, 28 Jul 2026, uploaded by Tharani) with Ivan's raw session notes. Not client-facing.

Purpose: give tech a prioritized list of what actually needs fixing (defects) vs. what's new scope vs. what needs a product decision first, so a one-week Core MAIA delivery SLA doesn't get swallowed by undifferentiated backlog. Each item is tagged **[BUG]**, **[SCOPE]**, or **[DECISION]**.

**No UAT verdict was recorded.** Success bar was green/yellow/red; the session closed on "much better progress" — encouragement, not acceptance. See DG-5.

**Known data caveat (not a bug):** SQLC sync paused — orders/invoices/payments to 3 Jul only, customers/items to 15 Jul. The 3–28 Jul gap is expected, backfilled at go-live.

---

## Decide first — blocks builds below (Thursday 12pm product gate)

| ID | Decision | Blocks | By when |
|---|---|---|---|
| DG-1 | Credit block mode: warn-only vs. hard block, tolerance window, who overrides (David vs. Apple) | MF-P0-01/02/03 rollout | Before go-live |
| DG-2 | Keep Excel packing list, or replace with pick-list→DN breakdown column | MF-P1-01 | On MF-P1-01 assessment |
| DG-3 | WhatsApp cut-over — UAT ran on Telegram only, no test evidence on real channel | MF-P0-05 | Before go-live |
| DG-4 | Delivery-date cron: 1pm vs 2pm cutoff — notes record both, contradictory as written | MF-P1-08 | Thu gate |
| DG-5 | UAT verdict never called — needs Ivan (call) + Wan Sin (co-sign) | Sign-off / 3rd UAT risk | Thu gate |
| DG-6 | Sunday push-reports (MF-P3-01→06) vs. Sept per-salesperson dashboard — overlapping, pick one | MF-P3-01 to 06 | Aug planning |
| DG-7 | Written answer to David on supplier/GRN staying in SQLC (was only answered verbally) | — | This week |

---

## P0 — Go-live blocker

- [ ] **[BUG] MF-P0-01** — Chatbot does not prompt escalation on credit block. Order blocks correctly but bot dead-ends; sales user isn't told to route to credit controller. *Owner: Tech/Chatbot, proposed Jermaine. Ship together with MF-P0-03, not separately. Target 31 Jul.*
- [ ] **[BUG] MF-P0-02** — Same failure on price block: bot doesn't surface that David is the approver. *Owner: Tech/Chatbot, proposed Jermaine. Target 31 Jul.*
- [ ] **[BUG] MF-P0-03** — Approval/credit-controller notification not firing at all. Client asked twice in session "but no any notification?" Combined with P0-01/02, this makes the whole approval loop non-functional. *Owner: UNOWNED — assign at Thu gate. Target 31 Jul.*
- [ ] **[BUG] MF-P0-04** — Pick List PDF: Chinese-character item descriptions don't render. Also check fraction/special ASCII glyphs. *Owner: Reports/PDF, proposed Amirul Iman. Regression-test against real Macro item master. Target 31 Jul.*
- [ ] **[DECISION/BUG] MF-P0-05** — Go-live channel untested. All hands-on results were on Telegram; WhatsApp still pending verification. *Owner: Ops/Tech, TBC. Complete verification + channel-parity smoke test before go-live.*

## P1 — Day-one usability (fix soon)

- [ ] **[SCOPE, load-bearing] MF-P1-01** — Picked-quantity breakdown on Pick List Item / DN Item. Ivan's proposed tuple-column (qty, uom) at item level, no new doctype. This is what unlocks removing the Excel packing list (DG-2). *Tech lead to assess feasibility by 31 Jul.*
- [ ] **[BUG] MF-P1-02** — Pieces (pcs) as a third UOM not supported. Bot forces kg/carton choice, blocks ordering "3 pcs". Not a uniform conversion (pork belly isn't fixed kg/carton). *Decide MVP: accept pcs at capture, resolve actual weight at pick (ties to MF-P1-01). Wk1 Aug.*
- [ ] **[BUG] MF-P1-03** — Default payment term not auto-set on SO create. Needs cascade: customer default → company default → cash-in-advance. *Owner: Backend/config, TBC. Wk1 Aug.*
- [ ] **[BUG] MF-P1-04** — Pick list order selection doesn't surface delivery date. Lai needs it as primary sort key. *Owner: Frontend, proposed Amirul Iman. Wk1 Aug.*
- [ ] **[SCOPE] MF-P1-05** — Draft DN by Lai → push to Grace's chat + activity trail. Client wants every event, no digest. *Owner: Notification service, UNOWNED. Wk1 Aug.*
- [ ] **[SCOPE] MF-P1-06** — Submitted SO → push Order PDF to Lai + activity trail. *Owner: Notification service, UNOWNED. Wk1 Aug.*
- [ ] **[SCOPE] MF-P1-07** — Pick list submitted → notify Grace on demand. *Owner: Notification service, UNOWNED. Wk1 Aug.*
- [ ] **[DECISION/BUG] MF-P1-08** — Delivery-date cron for same-day delivery chase. Notes contradict (1pm vs 2pm cutoff) — do not build as-is, resolve via DG-4 first.
- [ ] **[SCOPE] MF-P1-09** — Disable default noisy notifications, whitelist only requested events. *Owner: Wan Sin (config). Wk1 Aug.*
- [ ] **[BUG] MF-P1-10** — Mobile responsive: payment-term add UI broken at mobile width. Screenshots in source docx Appendix B. *Owner: Frontend, proposed Amirul Iman. Wk1 Aug.*
- [ ] **[BUG] MF-P1-11** — Mobile breakpoint thresholds at desktop→square-layout transition. Named devices matter: David's Samsung Z Fold, Krystle's iPhone 17 Pro Max — these are the two approvers, so a broken approval UI on their handsets breaks the loop regardless of MF-P0-01/02/03. *Owner: Frontend, proposed Amirul Iman. Test on both form factors. Wk1 Aug.*
- [ ] **[BUG] MF-P1-12** — Pick list printed PDF missing the address subheading. Matters because Lai groups pick lists by area/shipping address. *Owner: Reports/PDF, proposed Amirul Iman. Wk1 Aug.*
- [ ] **[BUG] MF-P1-13** — SCN/CCN credit-note connector untested. Completed 27 Jul (day before session), bugs expected and disclosed as a known risk, not accepted scope. SQLC treats credit notes differently (return-holder vs negative billing). *Owner: Tech + QA — Gareth Ng (test) / TBC (fix). Full test pass, log defects into sprint bug list. Target 31 Jul.*
- [ ] **[BUG] MF-P1-14** — Stale chatbot context after order edited via MR UI link. Bot continues conversation on pre-edit data; only recoverable if user explicitly asks bot to re-fetch. *Owner: Chatbot/middleware, proposed Jermaine. Short-term: force re-fetch on any bot reference to a previously-seen order. Longer-term: assess Frappe realtime socket subscription (cross-portfolio fix). Short-term Wk1 Aug.*

## P2 — Scheduled build, August (agreed scope, not blocking)

- [ ] **[SCOPE] MF-P2-01** — Column prioritization per view (operational → action → analytical), parametric across accounts.
- [ ] **[SCOPE] MF-P2-02** — Customer search by billing/shipping address; expose area/state/postcode/country columns.
- [ ] **[SCOPE] MF-P2-03** — Contact database, person-level search across companies (portfolio-wide idea, not Macro-specific).
- [ ] **[SCOPE] MF-P2-04** — Delivery Driver role + mandatory proof-of-delivery on mark-as-delivered, can append proof after the fact. *Note: expands user population beyond signed scope — check commercial impact.*
- [ ] **[BUG/not-accepted] MF-P2-05** — Low stock/near-expiry alert routing (to all except finance; priority David, sales, Lai). Feature shipped last week, explicitly flagged as not perfect and NOT part of this UAT's acceptance set. *Owner: Notification service, UNOWNED.*
- [ ] **[BUG] MF-P2-06** — Extended glyph coverage audit across all client-facing PDF templates (beyond Chinese chars in MF-P0-04).

## P3 — Backlog / September wave

- [ ] MF-P3-01 to 06 — Sunday recurring reports (MTD sales, annual sales, per-salesperson MTD, new leads, new customers, lead-to-customer conversion). All blocked on DG-6.
- [ ] MF-P3-07 — Customer churn notifications. Needs a churn definition agreed with David first — none given in session.
- [ ] MF-P3-08 — Sales dashboard by salesperson. Dated commitment already on record with client: first week of September, multi-client release.
- [ ] MF-P3-09 — Official receipt/payment recording. Already WIP — confirm status and give Macro a date.
- [ ] MF-P3-10 — Customer complaint/salesperson notes capture. Scope alongside MF-P2-03 (same CRM surface).

## P4 — Out of scope / needs change request

- [ ] MF-P4-01 — Customer internal memo/announcement blast.
- [ ] MF-P4-02 — Facebook marketing lead capture + auto-reply (evaluate off-the-shelf first).
- [ ] MF-P4-03 — WMS integration (David exploring, timeline next quarter — keep warm, ask which WMS).
- [ ] MF-P4-04 — Fleet GPS/temperature telemetry into dispute evidence (pairs with MF-P2-04 POD — scope only after POD lands).
- [ ] MF-P4-05 — Bank statement reconciliation. Give a clear written no-for-now.
- [ ] MF-P4-06 — QR/barcode scanning in warehouse — bundle into WMS conversation (MF-P4-03).

---

## Notes for tech lead
- **Notification cluster has no owner.** 9 items above are notification work (3 of them P0). Close this ownership gap at the Thu gate before estimating any of them.
- **Fix MF-P0-01/02/03 as one unit** — they're three faces of the same failure (approval loop doesn't close). Verify end-to-end: Queenie → CJ → David.
- **MF-P1-01 is the only load-bearing new-scope item** — the Excel-removal proposal (DG-2) depends on it. Everything else in P2 and below can slip without breaking a commitment already made to the client.
- Full raw session notes and role map preserved in the source docx (`29Jul26_MacroFrozen_UAT2_Summary_and_Action_Plan_28Jul26.docx`, Appendix A/B) if any item above needs re-checking against source.

## See Also
- `[[Maya Training — Identified Gaps Report]]` (1st UAT round, 16–17 Jul)
- `[[16Jul26 Macrofrozen 1st UAT Checklist]]`
- `[[Macrofood — UAT Checklist]]`
- `[[brain/Gotchas]]`

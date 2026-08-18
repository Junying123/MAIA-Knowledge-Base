---
owner: Gareth
status: approved
last_reviewed: 2026-08-07
client: Macrofood
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/BLWtwDOH1idEq3kJjjklkJZ6go6
---

# Macrofood — PM Handover Brief

*(Published to Lark as "Macrofood — PM Handover Brief")*

> Handover from Gareth to the incoming PM.
> **Read in this order:** Quick Start → Status at a Glance → Deep Dives → Reading Order → Action Checklist.
> Nothing in this doc should be treated as confirmed until you've verified it yourself with the client or dev team — several items below are flagged precisely because they were never closed out.

---

## Quick Start

| | |
|---|---|
| **Client** | Macrofood (trading as **Macro Frozen**) — frozen-meat wholesale/distribution, order-to-cash on MAIA, sits on top of SQL Accounting |
| **Folder** | `03 - Clients/Active Cooking Clients/Macrofood/` |
| **Phase** | Post-2nd-UAT (28 Jul 2026), pre-3rd-UAT. P0+P1 fixes were due **5 Aug 2026** (2 days ago — status unconfirmed, see below). 3rd UAT window: **11–14 Aug 2026**. |

**Two things to fix before anything else:**

1. **No named client contact anywhere in [[Client Overview]]** — it's still the unfilled template (`[TO FILL]` everywhere), despite the client having a fully named roster all over Scope Lock v3 and the UAT transcripts: **David** (Boss/final approver), **Grace** (Accounts — DN/Invoice/POD/payment gate), **CJ Tan** (Sales Manager, mobile-only, no laptop), **Apple** (Finance — credit limits/terms), **Lai** (Warehouse Manager), **Queenie** and **Ben** (Salesmen, with CJ). Get these written into [[Client Overview]]'s empty contact table.
2. **P0/P1 fix deadline (5 Aug 2026) has passed with no confirmation anywhere in this KB that it was met.** The 3rd UAT (11–14 Aug) is the actual acceptance test — confirm fix status with dev **before** assuming the window holds.

**Trading name note:** the client signed as "Macrofood" but operates and is referred to throughout as "**Macro Frozen**" / "**Macrofrozen**" — both names are used interchangeably across docs in this folder, they are the same client.

### Macrofood Folder to Check

- **Latest scope:** [[Macrofood — Scope Lock v3]] (29 Jul 2026, supersedes v2/v1 — **read this first**, it's the current spine)
- **1st UAT:** `UAT/16Jul26 Macrofrozen 1st UAT Checklist.md` (test list, unchecked — it's a working checklist, not results) + `macrofrozen/Lark Wiki Export/Markdown/20Jul26 - UAT 1 Meeting Summary (16-7-2026).md` (actual outcomes: workflow-after-MAIA, role permissions, client feedback/gaps)
- **2nd UAT:** `UAT/28Jul26 - 2nd UAT Bug Fixes Checklist.md` (canonical, 552 lines — P0–P4 priority buckets, DG-1→DG-6 open decisions, acceptance criteria per item) + `macrofrozen/Lark Wiki Export/Markdown/28Jul26 - UAT 2 MAIA Training Feedback.md` (client's own raw numbered feedback)
- **Full wiki mirror:** `macrofrozen/Lark Wiki Export/Markdown/` — 63 files pulled from Lark, includes meeting transcripts, notification design docs, sample docs, image assets
- **Lens alignment:** [[Macrofood — Lens Alignment Report]] — **stale, dated 2026-07-12**, predates both UAT rounds and Scope Lock v2/v3. Don't cite its verdict as current; a rerun against v3 is overdue.
- **Onboarding Status:** [[Onboarding Status]] — **stale, dated 2026-07-06**, still shows "Go-live prep, M5 tomorrow (7 Jul)." Overtaken by events; use Scope Lock v3's build-stage line instead for current status.

---

## Status at a Glance

### ✅ Locked & Stable (carried through v2 → v3 unchanged)

| Item | Detail | Source |
|---|---|---|
| SQL/customer-item master boundary (SL-01) | MAIA sits on top of SQL; SQL stays customer/item master | Scope Lock v3 |
| AR customer-invoice reconciliation (SL-02) | Bank statement → suggested match → finance confirms → knock-off. Grace flagged this as "same manual work routed through Maya" — real-usage validation still needed post-go-live | Scope Lock v3, Grace call 2026-07-14 |
| Bulk price update + 3-tier price approval (SL-03) | Tiered ladder confirmed 2026-07-20: normal auto / below-customer-price → CJ approves / below-minimum → David approves | Scope Lock v3 |
| Credit-limit / payment-term control (SL-04) | Checked at SO and DN (not Invoice, confirmed 2026-07-27). Enforcement *mode* still open — see NS-20 below | Scope Lock v3 |
| Role visibility (SL-05) | Salespeople see only their own customers/orders | Scope Lock v3 |
| One MAIA WhatsApp number (SL-06) | ⚠️ Not yet tested on the actual channel — 2nd UAT ran entirely on Telegram, WhatsApp number still pending verification (DEP-4) | Scope Lock v3 |
| Core doc generation SO/DO/Invoice (SL-07) | Explicit-request only — MAIA does not auto-generate Invoice/DN on amended-SO submit, Grace must ask for it | Scope Lock v3 |
| Customer → sales-agent assignment (SL-08) | 3 active salesmen (CJ Tan, Ben, Queenie) + David as default for unassigned/legacy | Scope Lock v3 |
| Salesperson self-service order entry (AS-04, superseded 2026-07-27) | Salesperson forwards order to MAIA WhatsApp directly, MAIA drafts, salesperson reviews/submits — replaces the old admin-relay model | Scope Lock v3 |

### 🆕 New this round (SL-09→SL-13, locked on direction, mechanism partly open)

| Item | Detail |
|---|---|
| Notification-engine architecture (SL-09) | Role-based routing, whitelist-only — all default MAIA notifications disabled, only explicitly agreed events fire. **No named build owner yet (DEP-3) — nothing in this cluster can be estimated until assigned.** |
| Credit-block escalation loop (SL-10) | Bot names approver + one-tap assign action → David is sole final approver. Mechanism locked; **enforcement mode (warn vs hard block) is NS-20, a hard blocker** |
| Price-block escalation loop (SL-11) | Same pattern for price, on both chatbot and front-end (CJ is mobile-only) |
| Pick→DN→invoice handoff notifications (SL-12) | Three events, client-instructed verbatim: **"yes, spam Grace"** and **"yes, spam Lai"** — every occurrence, no batching/digest |
| Default payment-term cascade (SL-13) | customer default → company default → cash-in-advance → empty |

### ⚠️ Agreed in Principle — Not Locked

| Item | Detail |
|---|---|
| AS-01 Fresh-weight adjustment workflow | Warehouse confirms actual kg + kg/box; client may keep using their own pick list instead of the MAIA PDF flow — live risk, not closed |
| AS-11 Picked-quantity breakdown tuples | **The one load-bearing new item this round** — the pitch to delete the client's Excel packing list depends entirely on this shipping. Conditional: *"If not technically viable, DG-2 flips and the Excel stays — say so early."* Tech-lead feasibility gate not yet cleared |
| AS-12 Delivery Driver role + mandatory POD | New driver-gets-own-account mechanism. **Do not assume this resolves NS-07** (the older, unresolved Grace-rejects-photo-upload conflict) — they're different mechanisms, flag both to David together |
| AS-13 AR module / bank reconciliation | Client asked to accelerate from original Sept placement; framed as cross-client core-MAIA feature, no committed date yet |
| AS-03 Credit note (SCN/CCN) | Connector completed 27 Jul, **one day before 2nd UAT** — explicitly disclosed as untested, not accepted scope this round (NS-18) |

### ❌ Blocked / Open

| Item | Detail | Owner |
|---|---|---|
| **NS-20 — Credit-block enforcement mode** | **Hard blocker.** Macro's SQL payment knock-off lags real payment by ~1 week, so nearly every customer shows overdue today. Warn-only vs hard block, tolerance window, and override authority (David only vs also Apple) all unresolved. **Blocks SL-10 rollout — resolve before go-live.** | Ivan ↔ David |
| **NS-07 — POD mechanism, client conflict** | Grace explicitly rejects photo-upload-to-Maya design. Unresolved since v2, not resolved by AS-12 (see above) | David |
| **DEP-3 — Notification-service ownership** | Unassigned. Blocks SL-10/SL-11/SL-12 estimation and build — 9 notification items across P0–P3, 3 of them P0 | Ivan — assign immediately |
| **DEP-4 — WhatsApp channel verification** | 2nd UAT ran entirely on Telegram. Go-live blocker (MF-P0-07); channel-parity smoke test needed once verified | Ops / Tech |
| **DEP-2 — UAT sign-off + named signatory** | No verdict was formally called at 2nd UAT (green/yellow/red), no named signer recorded acceptance — **DG-4 process gap**, carried into v3 | Onboarding PM + David |
| DEP-1 — SQL vendor integration access | Still open, carried from v2 | Product / SQL vendor |
| NS-17 Contact database | Roadmap-level, cross-account demand check needed before committing | Wan Sin + Ivan |
| NS-18 SCN/CCN connector correctness | Untested against SQLC, explicitly excluded from round-3 acceptance | Gareth (test) / TBC (fix) |
| NS-19 Sunday reports vs dashboard duplication | 6 scheduled reports overlap with the committed Sept dashboard — pick one path before August planning | Wan Sin + Ivan |

---

## Deep Dives

### 1. Where the two UAT rounds actually landed

**1st UAT (16 Jul 2026):** not a pass/fail exercise — `16Jul26 Macrofrozen 1st UAT Checklist.md` is an unchecked working checklist covering Access, Master Data, Order Capture, Standard Document Flow, Inventory, Pricing/Credit, and Sales Territory/Notifications. The actual output was a **workflow-after-MAIA walkthrough + role-permission map + a long list of client feedback/gaps** (see `20Jul26 - UAT 1 Meeting Summary`), not a scored test run. Notable gaps flagged: automatic SO amendment after pick-list confirm (client's preferred future treatment, not yet built), SKU replacement flowing into downstream docs, inactive-customer/recurring-order reminders, sales-dashboard salesperson filter, credit-toggle wording confusion. Several of these became the basis for AS-10, NS-14/15, and SL-09's notification list.

**2nd UAT (28 Jul 2026):** ~35 items surfaced; **only 5 are genuine go-live blockers (P0)**. The rest splits into day-one usability gaps and a substantial block of new scope (driver role, contacts database, 9-item notification engine, 6-report analytics suite, WMS, telemetry). Two critical-path themes:
- **The approval loop doesn't close** — a blocked order has no escalation prompt, no notification, no way for the approver to know it exists. In-session recovery was manual (facilitator had to open CJ's account to show the draft). Fix P0-01→P0-03 as one unit, verify end-to-end Queenie → CJ → David.
- **Pick list → DN handoff is broken** — customer info doesn't carry from pick list to DN (P0-05); Grace can't see or submit the document she's the gate for (P0-06). Together these kill the core order-to-invoice path.

**No formal verdict was called at the end of 2nd UAT** — closing line was "much better progress," no green/yellow/red, no named signer (DG-4). Don't report 2nd UAT as "passed" on that basis.

**Bottom line:** treat 1st UAT as discovery (it generated the scope items now in AS-10/SL-09/NS-14/15), and 2nd UAT as the real bug-bash with a hard 5 Aug fix deadline for P0/P1. The 3rd UAT (11–14 Aug) is where an actual verdict should get called — make sure it does, this time with a named signatory.

---

### 2. The notification engine (SL-09→SL-12) — the thing everything else depends on

This is the single biggest structural item in v3. Nine notification events across P0–P3 (credit block, price block, draft-DN creation, SO submission, pick-list submission, daily pick-list digest, price-update reminder, low-stock/near-expiry, Sunday sales reports) all route through one architecture: **role-based ("row to row") first, built on Bryan's existing backend notification-seeder pattern.** Every one of MAIA's default out-of-the-box notifications is disabled — only whitelisted events fire.

**Why this matters more than its line-item count suggests:** SL-10 (credit-block escalation), SL-11 (price-block escalation), and SL-12 (pick→DN→invoice handoff, the literal "spam Grace" / "spam Lai" instructions) all depend on this shipping. None of the three can ship, or even be estimated, until **DEP-3 (notification-service ownership) is assigned** — as of the 29 Jul debrief, nobody owns it. This is the round's real blocker alongside NS-20, not a nice-to-have backlog item.

**Bottom line:** chase DEP-3 ownership before anything else on the notification cluster. Everything downstream (P0-01 through P0-03, P1-07/08/09) is gated on it.

---

### 3. Credit-block enforcement (NS-20) — why it's a hard blocker, not a wording issue

Macro's SQL payment knock-off lags real payment by roughly a week. Practically, **nearly every customer shows as overdue in the system today**, even ones who've paid. A hard block on day one would stop most orders and read to the client as "MAIA is broken," not as the credit control working as designed.

Open questions, verbatim from the Scope Lock: warn-only vs hard block? What overdue-age tolerance window? Block on order value + outstanding, or outstanding alone? Who can override — David only, or also Apple?

**Bottom line:** this blocks SL-10's rollout specifically (the escalation *mechanism* is locked — SL-10 — but the *trigger condition* is NS-20, unresolved). Get Ivan and David to a decision before go-live, not after.

---

### 4. AS-11 — picked-quantity breakdown (the Excel packing-list dependency)

The client currently maintains a separate Excel packing list alongside MAIA. The pitch to retire it (DG-2) hinges entirely on AS-11 shipping: a (qty, uom)-tuple breakdown field at Pick List Item / DN Item level — e.g. "10 boxes × ~9.5 kg" against a 130 kg order line — propagating from Pick List → DN, optionally onto the Sales Invoice, with totals reconciling on both PDFs.

This is explicitly conditional: **"If not technically viable, DG-2 flips and the Excel stays — say so early."** The tech-lead feasibility call hadn't happened as of v3 (29 Jul). This also unblocks MF-P1-04 (pcs as a third order-capture UOM) via the same mechanism.

**Bottom line:** get the feasibility answer early. If AS-11 doesn't ship, don't let "delete the Excel" quietly survive as an assumption elsewhere in the account.

---

## Reading Order

*(In-folder docs only — read top to bottom, then verify against the live system and client.)*

| # | Doc | Why it matters |
|---|---|---|
| 1 | **CLAUDE** (Macrofood folder) | Orientation map — note it still says "pre-onboarding," stale |
| 2 | [[Macrofood — Scope Lock v3]] | Current spine — read this first, everything else is either its source or its supporting detail |
| 3 | `UAT/28Jul26 - 2nd UAT Bug Fixes Checklist` | P0–P4 priority buckets, acceptance criteria, the 5 Aug/11-14 Aug timeline |
| 4 | `macrofrozen/Lark Wiki Export/Markdown/20Jul26 - UAT 1 Meeting Summary` | Actual 1st UAT outcomes — workflow, roles, client feedback |
| 5 | `macrofrozen/Lark Wiki Export/Markdown/28Jul26 - UAT 2 MAIA Training Feedback` | Client's own raw numbered feedback, corroborates the Bug Fixes Checklist |
| 6 | [[Macrofood — VoC Extraction v3]] | Confidence-scored customer voice, most current version |
| 7 | [[Macrofood — Scope Lock v2]] and [[Macrofood — Scope Lock v1 (reconciled)]] | Supersession history — only needed if tracing why something changed |
| 8 | [[Macrofood — End-user & Process Map]] | Actor/role map — cross-check against Scope Lock v3's named roles (David/Grace/CJ/Apple/Lai/Queenie/Ben) |
| 9 | [[Macrofood — Lens Alignment Report]] | ⚠️ Stale (12 Jul) — rerun against v3 before trusting its verdict |
| 10 | [[Onboarding Status]] | ⚠️ Stale (6 Jul) — superseded by Scope Lock v3's build-stage line |
| 11 | `macrofrozen/Lark Wiki Export/Markdown/` (full folder) | Secondary/supporting evidence — meeting transcripts, notification design docs, sample docs |

---

## Action Checklist for Incoming PM

**This week:**

- [ ] Get real client contact details written into [[Client Overview]] — David, Grace, CJ Tan, Apple, Lai, Queenie, Ben are all named across Scope Lock v3 but the contact table is still empty — Needed by: ASAP
- [ ] Confirm P0/P1 fix status against the 5 Aug 2026 deadline — it has passed with no closure note anywhere in this KB — Needed by: ASAP, before assuming the 11–14 Aug 3rd UAT window holds
- [ ] Chase DEP-3 (notification-service ownership) — nothing in the SL-09/10/11/12 cluster can be estimated until this is assigned — Needed by: ASAP
- [ ] Chase DEP-4 (WhatsApp channel verification) — 2nd UAT ran entirely on Telegram, channel-parity smoke test still needed — Needed by: before 3rd UAT

**Before the 3rd UAT (11–14 Aug):**

- [ ] Get NS-20 (credit-block enforcement mode) decided between Ivan and David — hard blocker on SL-10 rollout — Needed by: before go-live, ideally before 3rd UAT
- [ ] Get NS-07 (POD mechanism) resolved with David — client conflict (Grace rejects photo-upload), unresolved since v2, and AS-12 does NOT resolve it despite looking related — Needed by: before go-live
- [ ] Get a tech-lead feasibility answer on AS-11 (picked-quantity breakdown) — the Excel-packing-list retirement pitch (DG-2) depends on it — Needed by: before 3rd UAT, "say so early" if not viable
- [ ] Make sure the 3rd UAT actually calls a verdict (green/yellow/red) with a named signatory — 2nd UAT didn't (DG-4) — Needed by: at the 3rd UAT session itself

**Documentation debt:**

- [ ] Rerun [[Macrofood — Lens Alignment Report]] against Scope Lock v3 — current version is dated 12 Jul, predates both UAT rounds and v2/v3 — Needed by: before citing lens-alignment status to anyone
- [ ] Update [[Onboarding Status]] — still shows "M5 tomorrow (7 Jul)," badly stale — Needed by: next status report
- [ ] Pick one path for NS-19 (Sunday reports vs Sept dashboard) — duplicated work if both get built — Needed by: before August planning

---

## See Also

- [[Client Overview]]
- [[Macrofood — Scope Lock v3]]
- [[Macrofood — Scope Lock v2]]
- [[Macrofood — Scope Lock v1 (reconciled)]]
- [[Macrofood — VoC Extraction v3]]
- [[Macrofood — VoC Extraction]]
- [[Macrofood — End-user & Process Map]]
- [[Macrofood — Lens Alignment Report]]
- [[Onboarding Status]]
- [[Macrofood Phase 1 Timeline]]
- [[Macrofood MAIA SQL integration]]
- [[Customer Narrative - Macrofood]]

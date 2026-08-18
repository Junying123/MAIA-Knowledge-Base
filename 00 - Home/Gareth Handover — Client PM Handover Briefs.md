---
owner: Gareth
status: approved
last_reviewed: 2026-08-07
---

# Gareth Handover — Client PM Handover Briefs (Digest)

> One-page-per-client digest for the incoming PM. Status, top blockers, this-week actions only. Full detail (deep dives, reading order, full checklists) lives in each client's own brief — linked below.

| Client | Phase | Lark Brief | KB Source |
|---|---|---|---|
| Holsen | A1 live, A3 deferred | [Lark](https://eg69120xnei.sg.larksuite.com/wiki/HxqHwgtY3iOhBvk2nb5lQH1Ig7g) | [[03 - Clients/Active Cooking Clients/Holsen/Holsen — PM Handover Brief]] |
| Dalson | UAT ran 5 Aug, unreconciled | [Lark](https://eg69120xnei.sg.larksuite.com/wiki/EXb0wPT33iwrqckCqOzls0Mngyg) | [[03 - Clients/Active Cooking Clients/Dalson/Dalson — PM Handover Brief]] |
| Macrofood | Post-2nd-UAT, 3rd UAT 11–14 Aug | [Lark](https://eg69120xnei.sg.larksuite.com/wiki/BLWtwDOH1idEq3kJjjklkJZ6go6) | [[03 - Clients/Active Cooking Clients/Macrofood/Macrofood — PM Handover Brief]] |
| GST Fine Foods | Core build, UAT not started | [Lark](https://eg69120xnei.sg.larksuite.com/wiki/WulewfTOKizZPIkciF5lnHyNggH) | [[03 - Clients/Active Cooking Clients/GST/GST Fine Foods — PM Handover Brief]] |
| Fixguru | UAT, 4th round, core blocker open | [Lark](https://eg69120xnei.sg.larksuite.com/wiki/VNyRw3Msmi9iuhkMWYtls54lg5c) | [[03 - Clients/Active Cooking Clients/Fixguru/Fixguru — PM Handover Brief]] |

---

## Holsen

Wholesale/distribution, order-to-cash on MAIA. A1 core live ~25 Jun 2026 (confirm — status still disputed internally). A3 (batch/C1-C3 compliance) deferred.

**Top blockers:**
- Live/production status ambiguous — confirm directly with client before reporting anywhere.
- SQL/AutoCount integration starting: **stabilize Holsen's SQL ops first → integrate → then onboard full team.** Batch/lot handling is the single biggest integration risk (Ivan), deferred pending real SQL data shape.
- WhatsApp Business API blocked (IP errors) — running on Telegram interim.
- Account manager change: Wansin taking over — confirm handover actually happened.
- Open bug list #384–#391 (discount display, negative-stock false error, duplicate CPO, picklist stuck in draft, multi-warehouse cleanup) — needs triage against dev tracker.

**This week:**
- [ ] Confirm live status + get Mindhive server/VPN access to Holsen's SQL server
- [ ] Confirm Wansin's AM handover is done
- [ ] Get B1–B8 + #384–#391 bug status from dev
- [ ] Formally close UAT Pass/Fail on C1/C3 (Tests 24–36 — already live-tested, just needs sign-off)

---

## Dalson

Small B2B industrial hardware trader, MAIA as an overlay on **AutoCount** (never replaces it). UAT ran onsite 5 Aug 2026 — real testing happened, but the formal checklist's Pass/Fail columns are still blank.

**Top blockers:**
- **Cash Sales Invoice gap — the one build blocker.** Dalson does walk-in/cash sales with no PO; MAIA has no cash-invoice type today. Not sized.
- 5 Aug UAT raw notes not yet reconciled into the formal 17-item checklist.
- Two unresolved mobile bugs from 5 Aug (Asilah's login permission block, "PO feels slow") — no root cause yet.
- UAT signatory model unconfirmed (sole vs multi-signatory).

**This week:**
- [ ] Reconcile 5 Aug UAT notes into the formal checklist
- [ ] Get Cash Sales Invoice gap in front of backend for sizing
- [ ] Close the loop on the two unresolved mobile bugs
- [ ] Confirm UAT signatory + driver/POD headcount

---

## Macrofood

Frozen-meat wholesale (trades as "Macro Frozen"), sits on SQL Accounting. Post-2nd-UAT (28 Jul), 3rd UAT window 11–14 Aug — this is where a real pass/fail verdict needs to be called (2nd UAT never got one).

**Top blockers:**
- **NS-20 credit-block enforcement** — hard blocker. SQL payment knock-off lags ~1 week, so almost every customer shows overdue; warn vs hard-block undecided.
- **DEP-3 notification-service ownership unassigned** — blocks the entire SL-09→12 notification cluster (credit/price escalation, pick→DN→invoice handoff).
- P0/P1 fix deadline (5 Aug) passed with no confirmation it was met.
- No named client contact written into Client Overview despite a full named roster existing (David, Grace, CJ, Apple, Lai, Queenie, Ben).

**This week:**
- [ ] Confirm P0/P1 fix status against the 5 Aug deadline
- [ ] Chase DEP-3 ownership assignment
- [ ] Chase DEP-4 (WhatsApp channel verification — 2nd UAT ran on Telegram only)
- [ ] Get NS-20 decided between Ivan and David before 3rd UAT

---

## GST Fine Foods

Frozen seafood B2B, SAP Business One as system of record. Core build phase — **UAT (planned 4–6 Aug) confirmed NOT to have happened.**

**Top blockers:**
- **Real blocker: AWS + OpenAI key setup with GST still not done** — gates M1 (instance deploy), gates everything after. Not a scope problem, a scheduling one.
- Sample data + document-format PDF samples (6 doc types) never supplied by client — blocks doc-format UAT.
- Two internal gates unresolved 3 weeks into build: stock source of truth (SAP live vs extract vs hybrid), branch sequencing (Penang-first) — both need a 30-second internal confirmation, not client discovery.
- Three Phase-2 items being built ahead of the Phase 1 UAT gate with no confirmed client sign-off on the sequencing.

**This week:**
- [ ] Schedule the AWS + OpenAI key setup meeting with GST
- [ ] Call GST to prepare sample data + document format samples
- [ ] Resolve stock-source-of-truth and branch-sequencing internally
- [ ] Follow up with Azib (SAP vendor) + Jermaine on SAP B1 integration status

---

## Fixguru

B2B packaging (RSC/Diecut boxes), AutoCount as system of record. UAT phase, 4 rounds run — **not sign-off ready.**

**Top blockers:**
- **Historical pricing is the #1 blocker** — failed sign-off 4 rounds running, client has said they'll revert to AutoCount if unsolved. Design was rebuilt 13 Jul (FE link-out) but **client has not yet re-tested it** against the 4 prior failures. Milestone-2 payment (RM24,000) withheld pending this.
- Sales Manager and Logistics Manager roles have no named person assigned (permission matrix itself is confirmed, just missing names).
- Driver role has zero named individuals anywhere — confirm if fully outsourced to Lalamove/3PL.

**This week:**
- [ ] Confirm client has re-tested the rebuilt historical-pricing flow — this is the account's go/no-go signal
- [ ] Loop in Yvonne Choo (confirmed UAT signatory) for sign-off once retest passes
- [ ] Name Sales Manager + Logistics Manager
- [ ] Confirm driver/delivery staffing model

---

## See Also

- [[03 - Clients/Active Cooking Clients/Holsen/Holsen — PM Handover Brief]]
- [[03 - Clients/Active Cooking Clients/Dalson/Dalson — PM Handover Brief]]
- [[03 - Clients/Active Cooking Clients/Macrofood/Macrofood — PM Handover Brief]]
- [[03 - Clients/Active Cooking Clients/GST/GST Fine Foods — PM Handover Brief]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Fixguru — PM Handover Brief]]

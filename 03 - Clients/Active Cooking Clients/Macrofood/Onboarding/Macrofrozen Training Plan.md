---
owner: Gareth
status: draft
last_reviewed: 2026-07-06
---

# Macrofrozen Training Plan

## Status: RESCHEDULE

Training was scheduled for tmr (2026-07-07). Rescheduling — not ready per checklist below.

**Reasons:**
- Data setup on Macrofrozen instance not ready
- Sales module — their main go-live feature — not fully tested
- Most other features not fully tested
- Training planning (goal/activities/logistics) not finalized before date was set

New date: **[TBD]** — set only after checklist below fully green.

## Training Goal

Macrofrozen staff can run their sales workflow (Quote-to-Cash: Quotation → Sales Order → Invoice → Receipt) unassisted on their own instance after training. Minimum viable competency for go-live, not full feature mastery.

## Activities

**Use the built deck, not the generic markdown proposal**: `01 - MAIA Product/Client Training/[Template] MAIA Training Slides v1.pptx` — 116 slides, already built to a 3-part 2-hour core format (not the old 4-module full-day structure):

| Section | Content | Status for Macrofrozen |
|---|---|---|
| Opening (5 slides, ~5min) | Title, icebreaker (pick 1 of 3 variants), agenda | Ready — just fill [Client Name]/[Trainer Name]/[Date] placeholders |
| Section 1 — Feature intro (22min) | Order capture, credit check, stock/reserve, pricing, search, SOA, AR/AP matching, ERP compat (AutoCount/SQL/SAP B1/Epicor), doc status flow (CPO→SO→DN→SI) | Ready — generic feature walkthrough, no dependency on their data |
| Section 2 — "Watch it work" demo videos (25min) | 7 scripted video walkthroughs (PO→SO, credit check, SO→DN→SI, pick list, new customer, new item) | **Blocked** — all 7 video slides are `ATTACH VIDEO HERE` placeholders, recordings not yet captured |
| Section 3 — "Drive it yourself" Mission Card game (47min) | 10 numbered mission cards (realistic order scenarios, front=team-facing/back=facilitator answer key), scoreboard, WhatsApp/Telegram bot connection, 6 bonus special missions | **Blocked** — game itself is fully built, but needs: sales module tested on Macrofrozen's own instance, demo WhatsApp number/Telegram bot (@maia_demo_bot) verified live, CPO flows in missions confirmed working |
| Close (6 slides) | Recap, Monday-morning action commitments, troubleshooting guide, solo test, feedback QR | Ready — no dependency |
| Appendix (facilitator-only, not shown live) | Role/permission matrix, ERP integration deep-dive, SOA/inventory videos | Reference only |

**Real gaps, not a content-building task:**
1. Record and embed the 7 demo videos (Section 2)
2. Verify demo instance + WhatsApp/Telegram bot work live with Macrofrozen's actual data (Section 3)
3. Fill client-specific placeholders (name/trainer/date)
4. Confirm sales module tested on their instance before running the mission-card game live — training on an untested sales flow risks the same "hits errors live" failure mode we already flagged.
5. **Rebuild Mission Cards against locked scope only** (see Scope Lock section below) — don't use cards as-is if they assume unresolved/out-of-scope workflows.

Content is not the blocker — testing + video recording + scope-correct mission cards are.

## Scope Lock (source: Lark doc "Macro Frozen — Scope Lock v1", 23 Jun 2026, Gareth Ng — not in local vault, retrieved from Lark)

Governs which features are safe to build training content around.

**LOCKED — safe to train on:**
- SL-01 MAIA sits on top of SQL (SQL stays customer/item master, MAIA references it)
- SL-02 AR customer invoice reconciliation (bank statement upload → auto-match → human confirms)
- SL-03 Bulk price update & pricing enforcement (Excel upload, min price floor)
- SL-04 Credit-limit/payment-term control (order blocked over limit, David approves override)
- SL-05 Salesperson customer visibility (rep sees only own customers)
- SL-06 One MAIA WhatsApp number (no multi-number routing)
- SL-07 SO/DO/Invoice generation where integration allows (confidence MED — format depends on sample docs/SQL)

**Agreed in principle, NOT locked — mention as "coming," don't build exercises around exact behavior:** fresh-weight adjustment, product catalogue/image generation, credit note support, outdoor sales assistant, customer info/notes, backend dashboard/reminders.

**Needs scoping / blocking — exclude from training:** Phase 1 order/pick-list trigger, stock entry/GRN photo, inventory aging/expiry alerts, pro forma invoice, approval flows beyond credit, payment chasing escalation, POD attachment.

**Out of scope entirely — exclude:** AP reconciliation, merchant/QR settlement reconciliation, delivery trip management, full WMS/barcode scanning, volume-based pricing, B2C ordering app, automated WhatsApp blasting.

**CPO resolved**: not named as a locked scope item. Macrofrozen's core flow is WhatsApp order → SO/DO/Invoice, not a formal CPO upload workflow like C1/C3 tax-reference clients. CPO likely **not in scope for Macrofrozen** — treat as non-issue for their training, confirm with client before final lock.

**New blocker surfaced: NS-01 (Phase 1 order/pick-list trigger) — BLOCKING, unresolved.** Two conflicting workflows not agreed with client: (a) MAIA drafts SO before physical pick, vs (b) Macro Frozen picks externally first then uploads to MAIA. This must be resolved (via Client Confirmation Agenda, Scope Lock doc §9) before Mission Cards are built — training the wrong workflow actively confuses staff, worse than no training.

## Pre-Training Readiness Checklist (current state)

Using [[02 - PM Playbook/Templates/[Template] Pre-Training Readiness Checklist]].

### Data Setup
- [ ] Master data loaded: customers
- [ ] Master data loaded: items/SKUs
- [ ] Sample/exercise data prepared
- [ ] Client's own instance verified (not placeholder data)

### Feature Test Coverage
- [ ] Core workflow tested end-to-end on Macrofrozen's instance
- [ ] Sales module tested and signed off — **primary go-live blocker**
- [ ] SQL/ERP integration tested (not just configured — see [[Macro Frozen SQL Integration]])
- [ ] No open blocking bugs in scope modules

### Known Blockers

| Feature/Module | Status | Owner | Blocking training? |
|---|---|---|---|
| Sales module | not tested | [TBD] | Y |
| Data setup (customers/items) | not ready | [TBD] | Y |
| SQL integration | in progress (vendor delays) | [TBD] | Y |
| NS-01 order/pick-list trigger | unresolved with client (Scope Lock §9) | [TBD] | Y — blocks Mission Card design |
| CPO/certificate features | likely not in scope for Macrofrozen | — | N (pending final confirm) |

### Training Logistics
- [x] Training goal defined (this doc)
- [x] Activities mapped to existing slide deck (this doc)
- [ ] Trainer assigned (Johnson Goh per slide deck default — confirm availability for new date)
- [ ] Participant credentials/access confirmed
- [ ] Environment link confirmed reachable
- [ ] Exercises checked against actual instance state
- [ ] Venue/AV check: confirm monitor/screen count at Macrofrozen's site vs number of trainees — if only 1 monitor, decide format ahead of time (small-group rotation / screen-share to own devices / hands-on-first per-desk access)

### Go/No-Go
- [ ] Not signed off — do not lock new date yet

## Next Actions

1. Confirm with Macrofrozen: reschedule, no new date yet
2. Close data setup + sales module testing first — biggest blockers
3. Re-run checklist before proposing new date
4. Once green, propose training date and lock

## Draft Client Message (WhatsApp)

No vendor/1st-delay mention — full ownership, keep it simple.

> Hi [Name], morning!
>
> Sorry for the delay on the training session again — we know we already pushed it back once before, and we don't want to keep doing that to you.
>
> Quick update on what's happening:
>
> We found some issues while testing the system internally. Before we bring your team in for training, we want to fix these first. If we go ahead with training now and your team hits errors while learning, it'll be a bad experience and waste everyone's time. We rather get it right first.
>
> **What's next:**
> 1. We fix the issues we found
> 2. We test it again internally to make sure it's stable
> 3. Then we do the training with your team
> 4. After that, you can go live and start using it
>
> **Updated timeline:**
> - Fix + internal testing: [DATE]
> - Training session: [DATE]
> - Go live: [DATE]
>
> We know this is later than end of June like we planned, and we're sorry about that. But once we train your team, we want it to be smooth and not have to redo it again due to system issues.
>
> Will update you once testing is done. Thanks for bearing with us!

## See Also

- [[Macro Frozen SQL Integration]]
- [[01 - MAIA Product/Client Training/MAIA User Training - Slide Content Proposal]]
- [[02 - PM Playbook/Templates/[Template] Pre-Training Readiness Checklist]]
- [[04 - QA & Known Issues/Test Scenarios Index]]

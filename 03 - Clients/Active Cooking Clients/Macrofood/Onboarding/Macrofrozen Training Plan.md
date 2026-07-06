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

Base structure reused from [[01 - MAIA Product/Client Training/MAIA User Training - Slide Content Proposal]] (4 modules, full day, trainer Johnson Goh). Adapted for Macrofrozen:

| Module | Content | Status for Macrofrozen |
|---|---|---|
| 1 — Intro to MAIA & B2B context | Quote-to-Cash overview, UI + Chatbot basics | Ready — generic, no dependency on their data |
| 2 — Day-to-day user tasks | Login, WhatsApp/OCR capture, Quotation→SO→Invoice, payments, hands-on exercise | **Blocked** — hands-on exercise needs client sample data + tested sales flow on their instance |
| 3 — Managing data & workflows | Customers/Items setup, roles, ERP/SQL integration sync, hands-on exercise | **Blocked** — Macrofrozen SQL integration still being set up (per Onboarding/Macro Frozen SQL Integration.md); exercise needs real data setup done first |
| 4 — Reports, troubleshooting, final test | Dashboards, KPIs, CPO/data-mismatch fixing, final practical test, certificate | **Blocked** — final test requires Module 2/3 features working; CPO section only if in scope for Macrofrozen |

Only Module 1 is safe to run as-is today. Modules 2–4 exercises hold until checklist below closes.

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
| CPO/certificate features | 0% test coverage per Test Scenarios Index | [TBD] | Y — only if in scope for Macrofrozen |

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

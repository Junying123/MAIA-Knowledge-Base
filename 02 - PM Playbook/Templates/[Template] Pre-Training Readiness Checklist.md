---
owner: [Name]
status: draft
last_reviewed: YYYY-MM-DD
---

# [Template] Pre-Training Readiness Checklist

Gate doc — run through before locking any client training date. If any box in "Feature Test Coverage" or "Data Setup" unchecked, do not confirm date with client.

## Data Setup

- [ ] Master data loaded: customers
- [ ] Master data loaded: items/SKUs
- [ ] Sample/exercise data prepared for hands-on activities
- [ ] Client's own instance (not demo env) has data verified, not placeholder/test data

## Feature Test Coverage

- [ ] Core workflow tested end-to-end on client's instance: Quotation → Sales Order → Invoice → Receipt
- [ ] Client-specific must-have module(s) tested and signed off — list below:
  - [ ] [Module name] — tested by [who] — [date]
- [ ] Any integration (ERP/SQL/API) relevant to this client tested, not just configured
- [ ] No open blocking bugs in scope modules (check `04 - QA & Known Issues/Known Bugs & Limitations.md` and `Test Scenarios Index.md`)

## Known Blockers

| Feature/Module | Status | Owner | Blocking training? |
|---|---|---|---|
| [e.g. Sales module] | [not tested / in progress / passed] | [name] | [Y/N] |

## Training Logistics

- [ ] Training goal defined (what participants should do unassisted after)
- [ ] Activities/slide deck adapted to this client — see [[01 - MAIA Product/Client Training/MAIA User Training - Slide Content Proposal]]
- [ ] Trainer assigned
- [ ] Participant credentials/access confirmed working
- [ ] Environment link confirmed reachable (client instance, not demo, unless demo intentional)
- [ ] Exercises checked against actual instance state — no exercise references untested features
- [ ] Venue/AV check: screen/monitor count confirmed vs trainee count — if only 1 monitor, decide format now (small-group rotation, screen-share to own devices, hands-on-first per-desk access) — don't discover this day-of

## Go/No-Go Sign-Off

- [ ] PM confirms all sections above complete — training date can be locked with client

Signed off by: [Name], [Date]

## See Also

- [[01 - MAIA Product/Client Training/MAIA User Training - Slide Content Proposal]]
- [[04 - QA & Known Issues/Test Scenarios Index]]
- [[04 - QA & Known Issues/Known Bugs & Limitations]]

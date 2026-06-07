---
owner: Gareth
status: draft
last_reviewed: 2026-06-07
client: Fixguru
uat_round: 2
---

# Fixguru 2nd UAT — Backward Plan

**End goal:** Client conducts 2nd UAT → sign-off
**Created:** 2026-06-06 | **Updated:** 2026-06-07 (status refresh)

---

## Milestone Map

```
NOW → M1 Brief + Dev Fix → M2 Internal Test + Live Fix → M3 Stable → M4 Schedule UAT → M5 2nd UAT
Sat        Mon                   Tue (2hr session)              Wed        Wed              TBD
Jun 7      Jun 9                 Jun 10                         Jun 11     Jun 11           Jun 16–17
```

| Phase | Who | Goal |
|---|---|---|
| M1 Brief + Dev Fix | PM + Amirul + Bryan + Azib (+ team) | Walk all remaining items; dev fixes same day |
| M2 Internal Test + Live Fix | Gareth + Amirul + Bryan + Azib | 2hr session — test every item on spot; fix on spot |
| M3 Stable + Client Brief | PM | Fixguru FE + chatbot stable; UAT form ready |
| M4 Schedule UAT with Client | PM | Inform client internal testing done; align gaps from last UAT; lock UAT date |
| M5 2nd UAT | PM + Fixguru testers | Client tests → sign-off |

---

## Status Snapshot — Jun 7

### Ready for UAT ✅
| Item | Notes |
|---|---|
| Pick shipping method | — |
| Search customer by phone number | — |
| Calculator (RSC + Diecut) | Tested, complete |
| FOC items | Done |
| External SKU item code | Done |

### Retest Required 🔁
| Item | FE | Chatbot | Notes |
|---|---|---|---|
| Apply Discount | — | 🔧 Chatbot issue | Need retest after chatbot fix |
| Item historical pricing | — | 🔧 Chatbot fixing | Retest when chatbot fix done |

### Partial — FE Done, Chatbot Pending 🔧
| Item | FE | Chatbot | Notes |
|---|---|---|---|
| Customer pricing enforcement | ✅ Done | 🔧 Pending | — |

### First-Time Test Needed (Pending Dev) 🔲
| Item | Blocker | Priority |
|---|---|---|
| Credit limit exposure | Ready to test — no blocker | 🔴 High — Gareth to test first |
| External doc ID | Pending BE | — |
| 2-way sync | Pending BE | — |
| Auto-populate shipping method SKU as line item | Pending BE | — |
| Volume fields in item profile | Pending FE + Chatbot | — |
| Draft Fixguru custom PDF template | Pending PDF/BE | — |
| Language preference | Pending BE | — |
| HQ + branch contact | Pending BE + Chatbot | — |

### Chatbot Fix In Progress 🔧
| Item                        | Issue                                                    | Notes            |
| --------------------------- | -------------------------------------------------------- | ---------------- |
| 2-warehouse ↔ items         | Chatbot bug                                              |                  |
| UOM conversion (multi-item) | Multi-UOM chatbot broken                                 | Single UOM works |
| Item shelf                  | Chatbot: populate shelf no. in additional note (DN only) | Scoped fix       |

---

## M0 — PM Decisions (DONE)

| Decision                                | Resolution                                                  |
| --------------------------------------- | ----------------------------------------------------------- |
| QTN amendment API                       | ✅ **Defer** — API doesn't exist                             |
| Catalogue-scan chatbot (Issues 3,4,5)   | ✅ **Defer** — BE endpoints not built                        |
| eInvoice / AutoCount push               |                                                             |
| Volumetric fields BE                    | ✅ **BE done** — FE + chatbot can proceed                    |
| Price-lock enforcement                  | **Field-level** (read-only) — lock icon already signals it  |
| FOC items                               | **In scope** — dev instance fixed; Fixguru env bug pending  |
| UOM split + shelf + 2-warehouse chatbot | **In scope** — retest required; single UOM works            |
| Item historical pricing                 | **In scope** — retest required                              |
| Pricing enforcement FE + chatbot        | **In scope** — fixing in progress                           |
| Calculator (RSC + Diecut)               | **In scope** — dev in progress; follow up Amirul            |
| Volumetric fields FE + chatbot + DN PDF | **In scope** — dev in progress                              |
| Credit limit exposure                   | **In scope** — blocker; dev fixing                          |
| HQ + branch contact                     | **In scope** — blocker; dev fixing                          |
| Delivery method as SKU                  | **In scope** — blocker; dev fixing                          |
| PDF — Fixguru custom draft template     | **In scope** — dev in progress                              |
| Item shelf in chatbot                   | **Scoped:** populate shelf no. in additional note (DN only) |
| External SKU item code                  | **In scope** — new item added                               |
| Language preference                     | **In scope** — dev in progress                              |
| 2-way sync                              | **In scope** — dev in progress                              |

---

## M1 — Brief + Dev Fix Day (Mon Jun 9)

**Who:** PM + Amirul + Bryan + Azib (+ Fariha, Haiqal, Rahim, WeiShen as needed)
**Format:** Morning brief → dev fixes for the rest of the day

### Morning Brief
- [ ] Walk all remaining items (use ETA table below) — PM explains expected behaviour per item
- [ ] Confirm each item's owner
- [ ] Flag anything unrealistic to land by Tue — cut scope now or slip UAT

### ETAs to confirm (Jun 9 brief)

| Item                                 | Owner        | Can ship Tue? |
| ------------------------------------ | ------------ | ------------- |
| External doc ID on PDF               | Azib         |               |
| Credit limit BE formula              | Fariha       |               |
| HQ + branch contact sync             | Azib         |               |
| 2-way sync                           | Azib         |               |
| Auto-populate shipping method SKU    | Azib         |               |
| Language preference BE               | Azib         |               |
| Item level discount auto-compute fix | Amirul       |               |
| Volumetric fields FE + PDF display   | Amirul/Rahim |               |
| Credit limit exposure FE             | Haiqal       |               |
| Draft Fixguru custom PDF template    | Rahim        |               |
| Apply Discount chatbot fix           | Bryan        |               |
| Item historical pricing chatbot fix  | Bryan        |               |
| Customer pricing enforcement chatbot | Bryan        |               |
| UOM conversion (multi-item) chatbot  | Bryan        |               |
| Item shelf — additional note (DN)    | Bryan        |               |
| 2-warehouse chatbot fix              | Bryan        |               |
| Volume fields chatbot                | Bryan        |               |
| Credit limit exposure chatbot        | WeiShen      |               |
| HQ + branch chatbot                  | Bryan        |               |
| Language preference chatbot          | Bryan        |               |

### Dev Fix (Mon afternoon — after brief)
- Dev team fixes assigned items before Tue session
- PM available for questions; no formal check-in needed

---

## M2 — Internal Testing + Live Bug Fix Session (Tue Jun 10)

**Who:** Gareth + Amirul + Bryan + Azib
**Duration:** 2 hours
**Format:** PM tests every item live on Fixguru env; dev fixes on the spot if broken

- [ ] Run all items in scope — doesn't matter what was "fixed" beforehand, test live
- [ ] Dev fixes any failures on the spot during session
- [ ] Log anything that can't be fixed in session → explicit defer decision
- [ ] End of session: agree on what's green, what's deferred

**Test checklist (run in session):**

**Already passing — smoke check only**
- [ ] Pick shipping method
- [ ] Search customer by phone number
- [ ] Calculator (RSC + Diecut) — price flows into QTN + SO
- [ ] FOC items — submit works, correct lines
- [ ] External SKU item code

**Retest**
- [ ] Apply Discount — chatbot
- [ ] Item historical pricing — chatbot (last invoice, avg price, QTN history)
- [ ] Customer pricing enforcement — chatbot enforces locked price
- [ ] UOM conversion — multi-item different UOM chatbot vs FE
- [ ] Item shelf — chatbot populates shelf no. in additional note (DN only)
- [ ] 2-warehouse — chatbot handles correctly

**First-time tests**
- [ ] Credit limit exposure — FE shows limit / exposure / available balance
- [ ] Credit limit exposure — chatbot (WeiShen)
- [ ] External doc ID — visible on PDF
- [ ] Auto-populate shipping method SKU — chatbot adds as line item
- [ ] Volume fields — visible in item profile FE + chatbot
- [ ] Draft Fixguru custom PDF template — renders correctly
- [ ] Language preference — FE + chatbot
- [ ] HQ + branch contact — chatbot assigns correct branch on SO
- [ ] 2-way sync
- [ ] Historical pricing web — discount %, auto-derive, dropdown (Tests 5–7)
- [ ] Item level discount — auto-compute when unit price > std price

---

## M3 — Stability Check (Wed Jun 11)

**Who:** PM (Gareth)

- [ ] Verify Fixguru FE instance stable — no regressions from Tue fixes
- [ ] Verify Fixguru chatbot stable — quick smoke on key flows
- [ ] UAT form finalised — all test groups clean, no draft markers
- [ ] Seed/verify test data intact

---

## M4 — Schedule UAT with Client (Wed Jun 11)

**Who:** PM (Gareth)

- [ ] Inform Fixguru: internal testing completed
- [ ] Walk through gaps addressed from last UAT — what was fixed, what's new
- [ ] Lock UAT date + format (on-site)
- [ ] Confirm tester assignments (Xiao Ling, Hayati, Zuha, Abishaah/Wendy, Marcus)
- [ ] Send UAT brief

---

## M5 — 2nd UAT (TBD — targeting Jun 16–17)

**Who:** PM + Fixguru testers

- [ ] Kickoff briefing (30 min) — walk form, explain Jam for bug recording
- [ ] Testers run all tests by group
- [ ] PM on standby for blockers
- [ ] Collect results + triage same day
- [ ] Sign-off or conditional sign-off with punch list

---

## Confirmed Deferred — Not in 2nd UAT

| Item | Reason | Next Step |
|---|---|---|
| eInvoice / AutoCount push | Not testing this round | Schedule separately |
| QTN amendment API | API doesn't exist | Phase 3 feature |
| Catalogue-scan chatbot (Issues 3,4,5) | BE endpoints not built | Phase 3 feature request |
| Calculator policy customisation (CR-04) | Chargeable CR | Formal CR doc needed |
| 2-way AutoCount sync (historical data) | CR, retainer revision needed | Separate SOW amendment |

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]]
- [[UAT/Fixguru UAT Readiness Checklist]]
- [[UAT/Fixguru Retesting Feedback]]
- [[Meetings/2026-05-15 Fixguru UAT Action Items]]
- [[Timeline/Fixguru Timeline]]

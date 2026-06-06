---
owner: Gareth
status: draft
last_reviewed: 2026-06-06
client: Fixguru
uat_round: 2
---

# Fixguru 2nd UAT — Backward Plan

**End goal:** Client conducts 2nd UAT → sign-off
**Created:** 2026-06-06

---

## Milestone Map

```
NOW → M1 Scope Lock → M2 Dev Sprint → M3 Go/No-Go → M4 PM Dry-Run → M5 UAT Day
Sat        Mon              Tue–Thu          Thu EOD          Fri              Mon–Tue
Jun 6      Jun 9            Jun 10–12        Jun 12           Jun 13           Jun 16–17
```

---

## M0 — PM Decisions (TODAY — unblocks everything)

Decide before M1. Dev cannot start without these.

| Decision                              | Options                                 | Recommendation                                                 |
| ------------------------------------- | --------------------------------------- | -------------------------------------------------------------- |
| Price-lock enforcement                | Field-level (read-only) vs submit-error | **Field-level** — lock icon already signals it                 |
| QTN amendment API                     | Build now vs defer                      | **Defer** — API doesn't exist, big lift, not UAT blocker       |
| Catalogue-scan chatbot (Issues 3,4,5) | In scope vs defer                       | **Defer** — BE endpoints not built; keep Tests 8+9 only        |
| FOC items submit block                | Must-fix vs defer                       | **Must-fix** — submit fully broken, high severity              |
| UOM split chatbot mismatch            | Must-fix vs defer                       | **Must-fix** — chatbot lies vs FE, high severity, breaks trust |
| Item shelf (DN chatbot)               | Must-fix vs defer                       | **Defer** — medium severity, no UAT test case                  |
| Credit limit exposure                 | Full formula (needs AutoCount) vs defer | **Defer** — requires 2-way sync (CR), not Phase 2 UAT scope    |
| 2-way AutoCount sync                  | UAT blocker vs CR/defer                 | **Defer as CR** — retainer revision needed                     |

---

## M1 — Scope Lock Meeting (Mon Jun 9)

**Who:** PM + Dev lead (Azib / Amir / Afiq)
**Duration:** 45–60 min

- [ ] Confirm deferred items list (M0 decisions finalised)
- [ ] Dev confirms 3-day build realistic for locked scope
- [ ] Raise cuts NOW if timeline at risk
- [ ] Assign owners per feature (see M2)

---

## M2 — Dev Sprint (Tue Jun 10 – Thu Jun 12)

### Amirul (FE)

- [ ] RSC Calculator — fix bugs, ready for UAT
- [ ] Diecut Calculator — fix bugs, ready for UAT
- [ ] Price-lock → block at field (read-only when locked), consistent across QTN + SO
- [ ] Item level discount — auto-compute fix when unit price > std price
- [ ] Historical pricing web app — discount %, auto-derive, dropdown (Tests 5–7)

### Afiq (Chatbot)

- [ ] Historical pricing chatbot — fix first-call reliability (Issue 1)
- [ ] Decouple customer pricing from historical pricing (Issue 2)
- [ ] UOM split — chatbot response must match FE actual output (High severity)
- [ ] FOC items — when unit price = 0, ask "free item?", set `is_free_item` flag
- [ ] Tests 8+9 — last invoice price, avg price + QTN history

### Azib (BE)

- [ ] FOC items BE — allow zero-price submit when `is_free_item` = true
- [ ] External doc ID on PDF (blocker)
- [ ] PDF item code → show AutoCount external SKU

### PM — Gareth

- [ ] Finalise Phase 2 UAT form — remove all 🚧 draft flags, fill eInvoice Group 2 steps
- [ ] Communicate FOC format to Fixguru (MAIA = 2 separate lines, not AutoCount child-line)
- [ ] Seed test data: customers with discount %, items with 10+ invoice history, SO >RM10k + <RM10k

---

## M3 — Go/No-Go Demo (Thu Jun 12 EOD)

**Who:** PM + Dev
**Format:** PM walks each UAT test step, dev demos on Fixguru env

All must pass before client is notified:

- [ ] Test 1: RSC calculator end-to-end
- [ ] Test 2: Diecut calculator end-to-end
- [ ] Test 3: Calculator price flows into QTN + SO
- [ ] Test 4A: eInvoice push — individual mode (>RM10k)
- [ ] Test 4B: eInvoice push — consolidated mode (<RM10k)
- [ ] Tests 5–7: Historical pricing web app
- [ ] Tests 8–9: Chatbot pricing
- [ ] FOC items submit no longer blocked
- [ ] UOM split chatbot matches FE output
- [ ] PDF shows external doc ID + AutoCount SKU

**If any gate fails:** slip UAT 1–2 days, no client notification yet.

---

## M4 — PM Dry-Run (Fri Jun 13)

PM runs all tests alone on Fixguru env before handing to client.

- [ ] Run all 9 tests personally
- [ ] Verify test data intact
- [ ] Log any new bugs → fast-fix or explicit defer with note
- [ ] Finalise UAT form (clean, no draft markers)
- [ ] Send UAT brief + form to Fixguru testers

---

## M5 — UAT Day (Mon–Tue Jun 16–17)

**Who:** PM + Fixguru testers (Xiao Ling, Hayati, Zuha, Abishaah / Wendy, Marcus)

- [ ] Kickoff briefing (30 min) — walk form, explain Jam for bug recording
- [ ] Testers run all 9 tests by group
- [ ] PM on standby for blockers
- [ ] Collect results + triage same day
- [ ] Sign-off or conditional sign-off with punch list

---

## Deferred — Not in 2nd UAT

| Item | Reason | Next Step |
|---|---|---|
| QTN amendment API | API doesn't exist | Phase 3 feature |
| Catalogue-scan chatbot (Issues 3,4,5) | BE endpoints not built | Phase 3 feature request |
| Item shelf — chatbot lookup | Medium severity, no test case | Post-UAT improvement |
| Credit limit exposure | Needs 2-way sync (CR) | Scope in retainer revision |
| 2-way AutoCount sync | CR, retainer revision needed | Separate SOW amendment |
| HQ + branch contact sync | CR dependency | Same as above |
| Calculator policy customisation (CR-04) | Chargeable CR | Formal CR doc needed |

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]]
- [[UAT/Fixguru UAT Readiness Checklist]]
- [[UAT/Fixguru Retesting Feedback]]
- [[Meetings/2026-05-15 Fixguru UAT Action Items]]
- [[Timeline/Fixguru Timeline]]

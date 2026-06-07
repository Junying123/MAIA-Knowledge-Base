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
NOW → M1 Scope Lock → M2 PM Testing + Dev Bug Fix → M3 Internal Testing → M4 2nd UAT
Sat        Mon              Tue–Wed                      Thu                  Mon–Tue
Jun 7      Jun 9            Jun 10–11                    Jun 12               Jun 16–17
                                                         (Amirul, Bryan, Azib)
```

| Phase | Who | Goal |
|---|---|---|
| M1 Scope Lock | PM + Dev leads | Lock in/out items; confirm owners + ETA |
| M2 PM Testing + Dev Bug Fix | Gareth + Amirul + Bryan + Azib | PM tests ready items; dev fixes remaining blockers |
| M3 Internal Testing | Gareth + Amirul + Bryan + Azib | Full run-through of all scope items before client; catch late bugs |
| M4 2nd UAT | PM + Fixguru testers | Client tests → sign-off |

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

## M1 — Scope Lock Meeting (Mon Jun 9)

**Who:** PM + Amirul + Bryan + Azib
**Duration:** 60 min
**Hard deadline:** All fixes ship by **Thu Jun 12** (M3 internal testing starts Thu)

- [ ] Walk full scope list — confirm in/out per item
- [ ] Get ETA from each dev for every assigned item — days remaining until ship
- [ ] Flag anything that cannot land by Thu Jun 12 — cut or slip UAT date now, not later
- [ ] Assign owners (see M2)

**ETAs to collect (Jun 9):**

| Item                                 | Owner        | ETA |
| ------------------------------------ | ------------ | --- |
| External doc ID on PDF/doctype       | Azib         |     |
| Credit limit BE formula              | Fariha       |     |
| HQ + branch contact sync             | Azib         |     |
| External SKU item code               | Azib         |     |
| 2-way sync                           | Azib         |     |
| Auto-populate shipping method SKU    | Azib         |     |
| Language preference BE               | Azib         |     |
| Item level discount auto-compute fix | Amirul       |     |
| Volumetric fields FE + PDF display   | Amirul/Rahim |     |
| Credit limit exposure FE             | Haiqal       |     |
| Draft Fixguru custom PDF template    | Rahim        |     |
| Apply Discount chatbot fix           | Bryan        |     |
| Item historical pricing chatbot fix  | Bryan        |     |
| Customer pricing enforcement chatbot | Bryan        |     |
| UOM conversion (multi-item) chatbot  | Bryan        |     |
| Item shelf — additional note         | Bryan        |     |
| 2-warehouse chatbot fix              | Bryan        |     |
| Volume fields chatbot                | Bryan        |     |
| Credit limit exposure chatbot        | WeiShen      |     |
| HQ + branch chatbot                  | Bryan        |     |
| Language preference chatbot          | Bryan        |     |

---

## M2 — PM Testing + Dev Bug Fix (Tue Jun 10 – Wed Jun 11)

### Azib (BE)

- [ ] FOC items — fix bug on Fixguru instance (dev instance already clean)
- [ ] External doc ID — surface on PDF
- [ ] Credit limit BE — exposure formula: unbilled SO + outstanding invoices (exclude drafts)
- [ ] HQ + branch contact sync — contact model supports HQ + branch assignment
- [ ] External SKU item code — surface/sync correctly

### Amirul (FE)

- [ ] Price-lock → read-only at field level, consistent across QTN + SO
- [ ] Item level discount — auto-compute fix when unit price > std price
- [ ] Historical pricing web app — discount %, auto-derive, dropdown (Tests 5–7)
- [ ] Volumetric fields — surface in item profile FE; sync + PDF display *(in progress)*
- [ ] Credit limit exposure — surface in FE (limit, exposure, available balance)
- [ ] PDF — Fixguru custom draft PDF template (external doc ID, AutoCount SKU on items) *(in progress)*
- [ ] Language preference — FE side *(in progress)*

### Bryan (Chatbot)

- [ ] Historical pricing chatbot — fix first-call reliability (Issue 1)
- [ ] Decouple customer pricing from historical pricing (Issue 2)
- [ ] Customer pricing enforcement — retest with locked customer price *(fixing)*
- [ ] UOM conversion — multi-item different-UOM fix (single UOM already works) *(fixing)*
- [ ] Item shelf — chatbot: populate shelf no. in **additional note field** (DN context only)
- [ ] 2-warehouse — chatbot warehouse handling retest *(blocker)*
- [ ] Volumetric fields — chatbot retrieves + surfaces data; pending FE completion *(blocker)*
- [ ] Credit limit exposure — chatbot shows limit, exposure, available balance *(blocker)*
- [ ] HQ + branch contact — chatbot assigns correct branch when creating SO *(blocker)*
- [ ] Delivery method as SKU — auto-populate shipping method SKU as line item *(blocker)*
- [ ] Tests 8+9 — last invoice price, avg price + QTN history
- [ ] Language preference — chatbot side *(in progress)*
- [ ] 2-way sync *(in progress)*

### PM — Gareth (during sprint)

- [x] **Follow up Amirul on RSC/Diecut Calculator** — confirm ETA; these are blocking M3
- [ ] Follow up dev daily — align ETA per item, flag slips early
- [ ] Finalise Phase 2 UAT form — remove 🚧 draft flags, add test groups (volumetric, credit limit, HQ+branch, delivery SKU, PDF, external SKU, language pref); remove eInvoice group
- [ ] Communicate FOC format to Fixguru (MAIA = 2 separate lines, not AutoCount child-line)
- [ ] Seed test data: customers with discount %, 10+ invoice history, HQ+branch customers, delivery-type items
- [ ] Test "pick shipping method" and "search customer by phone" flows — already ready, verify on Fixguru env

---

## M3 — Internal Testing with Dev Team (Thu Jun 12 – Fri Jun 13)

**Who:** Gareth + Amirul + Bryan + Azib
**What:** Full internal run-through of all scope items on Fixguru env — gate before client UAT.
**Format:** PM runs each scenario live; dev on standby to explain or fast-fix same day

- [ ] Walk through every item in scope — test what dev marked as fixed
- [ ] Confirm each fix against expected behaviour (not just "dev says done")
- [ ] Log anything still broken → fast-fix same day or explicit defer with note
- [ ] Align on ETA slips — decide cut or slip UAT date now
- [ ] Gate: all items pass or explicitly deferred before client notified

**Go/No-Go checklist:**

**Ready-for-UAT items (confirm still works)**
- [ ] Pick shipping method
- [ ] Search customer by phone number

**Calculator**
- [ ] RSC calculator end-to-end
- [ ] Diecut calculator end-to-end
- [ ] Calculator price flows into QTN + SO

**Historical Pricing — Web**
- [ ] Discount %, auto-derive, dropdown (Tests 5–7)

**Historical Pricing — Chatbot**
- [ ] Last invoice price, avg price + QTN history (Tests 8–9)

**Retested items**
- [ ] FOC items — Fixguru instance bug fixed; AutoCount FOC qty column syncs correctly
- [ ] UOM conversion — multi-item with different UOM chatbot output matches FE (single UOM already passes)
- [ ] Item shelf — chatbot populates shelf no. in additional note (DN only)
- [ ] 2-warehouse — chatbot handles correctly
- [ ] Customer pricing enforcement — FE blocks at field level; chatbot enforces locked price
- [ ] Item level discount — auto-compute works when unit price > std price

**First-time tests**
- [ ] Volumetric fields — visible in item profile FE, surfaced in chatbot, shown on DN PDF
- [ ] Credit limit exposure — FE + chatbot shows limit / exposure / available balance
- [ ] HQ + branch contact — chatbot assigns correct branch on SO creation
- [ ] Delivery method as SKU (auto-populate) — chatbot adds shipping method SKU as line item
- [ ] External doc ID — appears on PDF
- [ ] External SKU item code — surfaces correctly
- [ ] PDF — Fixguru custom draft template renders external doc ID + AutoCount SKU
- [ ] Language preference — FE + chatbot
- [ ] 2-way sync

**If any gate fails:** slip UAT 1–2 days, no client notification yet.

---

## M4 — 2nd UAT (Mon–Tue Jun 16–17)

**Who:** PM + Fixguru testers

**Pre-UAT prep (end of M3 / weekend):**
- [ ] Verify test data intact after internal session
- [ ] UAT form clean — no draft markers, all test groups complete
- [ ] Last fast-fixes from M3 deployed and spot-checked
- [ ] Send UAT brief + form to Fixguru testers (Xiao Ling, Hayati, Zuha, Abishaah/Wendy, Marcus)
- [ ] Confirm UAT date + logistics (on-site or remote, duration, who tests what group)

**UAT Day:**
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

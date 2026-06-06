---
owner: Gareth
status: draft
last_reviewed: 2026-06-06
client: Fixguru
uat_round: 2
---

# Fixguru 2nd UAT — Backward Plan

**End goal:** Client conducts 2nd UAT → sign-off
**Created:** 2026-06-06 | **Updated:** 2026-06-06

---

## Milestone Map

```
NOW → M1 Scope Lock → M2 Dev Sprint → M3 Go/No-Go → M4 PM Dry-Run → M5 UAT Day
Sat        Mon              Tue–Thu          Thu EOD          Fri              Mon–Tue
Jun 6      Jun 9            Jun 10–12        Jun 12           Jun 13           Jun 16–17
```

---

## M0 — PM Decisions (TODAY — unblocks everything)

| Decision | Resolution |
|---|---|
| QTN amendment API | ✅ **Defer** — API doesn't exist |
| Catalogue-scan chatbot (Issues 3,4,5) | ✅ **Defer** — BE endpoints not built |
| Price-lock enforcement | **Field-level** (read-only) — lock icon already signals it |
| FOC items | **In scope** — dev complete; verify AutoCount sync only |
| UOM split + shelf + 2-warehouse chatbot | **In scope** — retest required |
| Item historical pricing | **In scope** — retest required |
| Pricing enforcement FE + chatbot | **In scope** — retest required |
| Calculator (RSC + Diecut) | **In scope** — retest required |
| Volumetric fields | **In scope** — first test: FE + chatbot + DN PDF |
| Credit limit exposure | **In scope** — first test: FE + chatbot |
| HQ + branch contact | **In scope** — first test |
| Delivery method as SKU | **In scope** — first test |
| PDF — Fixguru custom draft template | **In scope** — first test |

---

## M1 — Scope Lock Meeting (Mon Jun 9)

**Who:** PM + Dev lead (Azib / Amir / Afiq)
**Duration:** 60 min

- [ ] Walk full scope list — confirm in/out per item
- [ ] Dev confirms each item has clear owner + can ship by Thu Jun 12
- [ ] Flag any scope that needs another day; decide cut or slip now
- [ ] Assign owners (see M2)

---

## M2 — Dev Sprint (Tue Jun 10 – Thu Jun 12)

### Amirul (FE)

- [ ] RSC Calculator — fix + retest ready
- [ ] Diecut Calculator — fix + retest ready
- [ ] Price-lock → read-only at field level, consistent across QTN + SO
- [ ] Item level discount — auto-compute fix (unit price > std price)
- [ ] Historical pricing web app — discount %, auto-derive, dropdown (Tests 5–7)
- [ ] Volumetric fields — surface in item profile FE
- [ ] Credit limit exposure — surface in FE (limit, exposure, available balance)
- [ ] PDF — Fixguru custom draft PDF template (external doc ID, AutoCount SKU on items)

### Afiq (Chatbot)

- [ ] Historical pricing chatbot — fix first-call reliability (Issue 1)
- [ ] Decouple customer pricing from historical pricing (Issue 2)
- [ ] UOM split — chatbot response must match FE actual output (High severity)
- [ ] Item shelf — map chatbot query to item attributes field (not warehouse stock ledger)
- [ ] 2-warehouse — chatbot warehouse handling retest
- [ ] FOC items — confirm `is_free_item` flag flows through correctly; verify AutoCount doctype FOC quantity column syncs
- [ ] Pricing enforcement chatbot — retest with locked customer price
- [ ] Volumetric fields — chatbot can surface volumetric data
- [ ] Credit limit exposure — chatbot shows limit, exposure, available balance when creating SO
- [ ] HQ + branch contact — chatbot assigns correct branch when creating SO
- [ ] Delivery method as SKU — chatbot can search and add delivery-type items (e.g. "3PL Lalamove") as regular line item
- [ ] Tests 8+9 — last invoice price, avg price + QTN history

### Azib (BE)

- [ ] FOC items BE — confirm zero-price submit allowed when `is_free_item` = true; verify AutoCount sync writes correct FOC quantity column
- [ ] External doc ID — surface on PDF
- [ ] Volumetric data sync — BE pushes volumetric fields to AutoCount + DN PDF
- [ ] Credit limit BE — exposure formula: unbilled SO + outstanding invoices (exclude drafts)
- [ ] HQ + branch contact sync — contact model supports HQ + branch assignment

### PM — Gareth

- [ ] Finalise Phase 2 UAT form — remove all 🚧 draft flags, fill eInvoice Group 2 steps, add new test groups (volumetric, credit limit, HQ+branch, delivery SKU, PDF)
- [ ] Communicate FOC format to Fixguru (MAIA = 2 separate lines, not AutoCount child-line)
- [ ] Seed test data: customers with discount %, 10+ invoice history, SO >RM10k + <RM10k, HQ+branch customers, delivery-type items

---

## M3 — Go/No-Go Demo (Thu Jun 12 EOD)

**Who:** PM + Dev
**Format:** PM walks each UAT test step, dev demos on Fixguru env

All must pass before client notified:

**Calculator**
- [ ] Test 1: RSC calculator end-to-end
- [ ] Test 2: Diecut calculator end-to-end
- [ ] Test 3: Calculator price flows into QTN + SO

**eInvoice**
- [ ] Test 4A: eInvoice push — individual mode (>RM10k)
- [ ] Test 4B: eInvoice push — consolidated mode (<RM10k)

**Historical Pricing — Web**
- [ ] Tests 5–7: Discount %, auto-derive, dropdown

**Historical Pricing — Chatbot**
- [ ] Tests 8–9: Last invoice price, avg price + QTN history

**Retested items**
- [ ] FOC items — submit works; AutoCount FOC qty column syncs correctly
- [ ] UOM split — chatbot output matches FE actual lines + UOM
- [ ] Item shelf — chatbot returns value from item attributes (not warehouse)
- [ ] 2-warehouse — chatbot handles correctly
- [ ] Pricing enforcement — FE blocks at field level; chatbot enforces locked price
- [ ] Price-lock read-only at field

**First-time tests**
- [ ] Volumetric fields — visible in item profile FE, surfaced in chatbot, shown on DN PDF
- [ ] Credit limit exposure — FE + chatbot shows limit / exposure / available balance
- [ ] HQ + branch contact — chatbot assigns correct branch on SO creation
- [ ] Delivery method as SKU — chatbot finds and adds delivery item as line item
- [ ] PDF — Fixguru custom draft template renders external doc ID + AutoCount SKU

**If any gate fails:** slip UAT 1–2 days, no client notification yet.

---

## M4 — PM Dry-Run (Fri Jun 13)

- [ ] Run all tests personally on Fixguru env
- [ ] Verify test data intact
- [ ] Log any new bugs → fast-fix or explicit defer with note in UAT form
- [ ] UAT form clean — no draft markers
- [ ] Send UAT brief + form to Fixguru testers (Xiao Ling, Hayati, Zuha, Abishaah/Wendy, Marcus)

---

## M5 — UAT Day (Mon–Tue Jun 16–17)

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

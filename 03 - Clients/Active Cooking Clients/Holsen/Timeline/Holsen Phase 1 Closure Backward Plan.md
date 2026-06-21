---
owner: Gareth
status: draft
last_reviewed: 2026-06-21
client: Holsen
phase: 1
---

# Holsen Phase 1 — Backward Plan to Go-Live

**End goal:** UAT closed + Holsen Sales/Logistics **live on Thu 25 Jun 2026**
**Created:** 2026-06-21 | **Updated:** 2026-06-21
**Scope:** Core MAIA (A1) — close remaining UAT items → sign-off → client ingests live data → go-live. C1/C3 compliance + PSO + batch/COA enhancements stay **post-go-live** (see end).
**Model:** Structured on the [[Fixguru 2nd UAT Backward Plan]] and [[Macrofood Phase 1 Timeline]] — close all open items internally, sign off UAT, then client preps live data before cutover.

---

## Milestone Map

```
NOW ── M1 Close UAT + Sign-off ── M2 Client Data Prep + Ingest ── M3 Go-Live
Sat        Mon                        Tue–Wed                       Thu
Jun 21     Jun 22                     Jun 23–24                     Jun 25
```

| Phase | Date | Who | Goal |
|---|---|---|---|
| M1 Close UAT + Sign-off | Mon 22 Jun | Gareth + Dev + Holsen testers | Clear remaining UAT items live; sign-off |
| M2 Client Data Prep + Ingest | Tue–Wed 23–24 Jun | Holsen + PM | Client prepares + ingests live master data |
| M3 Go-Live | Thu 25 Jun | PM + Holsen | Cutover to production; live ops begin |

---

## ⚠️ Critical path

Go-live is gated on two things landing in order:
1. **UAT sign-off Mon 22 Jun** — any unresolved blocker slips the whole chain.
2. **Live data ingested + verified by Wed 24 Jun** — client cannot prep data until UAT-confirmed config is frozen.

> UAT close (Mon) → data prep + ingest (Tue–Wed) → go-live (Thu). If Monday UAT leaves a blocker open, escalate same day — there is no slack before Thursday.

---

## M1 — Close UAT + Sign-off (Mon 22 Jun)

**Who:** Gareth + Dev + Holsen testers
**Format:** Run every remaining item live on Holsen env; dev fixes on the spot; anything unfixable → explicit defer decision; then sign-off.

### Remaining UAT items (run live)

| # | Item | FE | Chatbot | Owner | Status |
|---|------|----|---------|-------|--------|
| 1 | [TO FILL — remaining open UAT item] | ☐ | ☐ | [TO FILL] | ⬜ |
| 2 | [TO FILL] | ☐ | ☐ | [TO FILL] | ⬜ |
| 3 | [TO FILL] | ☐ | ☐ | [TO FILL] | ⬜ |

> Populate from [[MAIA UAT Form - Holsen - 2026-03]] + [[Holsen SOW Feature Checklist]] — list only items still open as of Jun 21.

### Smoke-check (already passing — confirm no regression)

- [ ] SO creation via WhatsApp (natural language)
- [ ] Duplicate order prevention (Customer + PO match → blocked)
- [ ] DO + Picking List generation
- [ ] UBS CSV export (Invoice / CN / DN)
- [ ] Role-based approval flow (SO draft → submit → approve)

### Sign-off

- [ ] End of session: agree what's green, what's deferred
- [ ] Holsen testers confirm sign-off (or conditional sign-off + punch list)
- [ ] Log deferred items → post-go-live backlog

---

## M2 — Client Data Prep + Ingest (Tue–Wed 23–24 Jun)

**Who:** Holsen (data owner) + PM (support)
**Format:** With config frozen post-sign-off, client prepares + loads live master data into the production instance. PM verifies integrity.

- [ ] Client prepares **customer master** (final live list)
- [ ] Client prepares **product/SKU master** (with pricing, UOM, attributes)
- [ ] Ingest customer + item master into Holsen production instance
- [ ] Verify customer-based pricing auto-retrieves correctly on SO
- [ ] Verify SKU attribute tags (Trading / Mfg / Poison / Commodity) carry through
- [ ] Confirm role assignments + document permission matrix on production
- [ ] Confirm Meta/WhatsApp (or @maia_holsen_bot Telegram) channel live and bound to instance
- [ ] PM data-integrity smoke pass — spot-check seeded records end-to-end

> Client cannot start until UAT config is frozen (M1). If data lands late Wed, go-live readiness check slips into Thu morning.

---

## M3 — Go-Live (Thu 25 Jun)

**Who:** PM + Holsen
**Format:** Cutover to production; live order processing begins; PM on standby for hypercare.

- [ ] Final readiness check — instance + chatbot stable, data verified
- [ ] Cutover: production live for Sales + Logistics users
- [ ] First live order processed end-to-end (SO → DO → Pick List → CSV export) with PM watching
- [ ] PM on standby — hypercare for go-live day issues
- [ ] Confirm go-live with Holsen; schedule post-go-live check-in
- [ ] Update [[Onboarding Status]] → live

---

## NOT in this go-live scope (post-go-live)

Do not let these creep into 25 Jun:
- **PSO (Poison Signed Order)** compliance — separate phase
- **C1/C3 compliance enforcement** (FR-01 to FR-05) — Phase A3
- **Advanced batch intake, COA handling, K1 traceability** — Phase A3
- A57 tax exemption enforcement
- SQL/AutoCount direct integration (UBS CSV export remains the go-live path)
- Analytics/dashboard FRs (FR-08, FR-09), sticker labels (FR-07), DO bundling (FR-06)

---

## See Also

- [[Holsen Phase 1 Timeline]]
- [[Onboarding Status]]
- [[MAIA UAT Form - Holsen - 2026-03]]
- [[Holsen SOW Feature Checklist]]
- [[Fixguru 2nd UAT Backward Plan]]
- [[Macrofood Phase 1 Timeline]]

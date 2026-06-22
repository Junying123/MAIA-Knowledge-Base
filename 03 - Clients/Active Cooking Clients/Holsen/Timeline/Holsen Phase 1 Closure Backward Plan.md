---
owner: Gareth
status: draft
last_reviewed: 2026-06-21
client: Holsen
phase: 1
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/ToDUwwlA0iuIBFkkiEElx3JwgRg
---

# Holsen Phase 1 — Backward Plan to Go-Live

**End goal:** UAT closed + Holsen Sales/Logistics **live on Thu 25 Jun 2026**
**Created:** 2026-06-21 | **Updated:** 2026-06-21
**Scope:** Core MAIA (A1) — close remaining UAT items → sign-off → client ingests live data → go-live. C1/C3 compliance + PSO + batch/COA enhancements stay **post-go-live** (see end).
**Model:** Structured on the [[Fixguru 2nd UAT Backward Plan]] and [[Macrofood Phase 1 Timeline]] — close all open items internally, sign off UAT, then client preps live data before cutover.

---

## Milestone Map

```
NOW ── M1 Close UAT + Sign-off ── M2 Client Data Prep + Ingest ── M3 Go-Live ── M4 Refresher Training
Sat        Mon                        Tue–Wed                       Thu          July (date TBC)
Jun 21     Jun 22                     Jun 23–24                     Jun 25
```

| Phase | Date | Who | Goal |
|---|---|---|---|
| M1 Close UAT + Sign-off | Mon 22 Jun | Gareth + Dev + Holsen testers | Clear remaining UAT items live; sign-off |
| M2 Client Data Prep + Ingest | Tue–Wed 23–24 Jun | Holsen + PM | Client prepares + ingests live master data |
| M3 Go-Live | Thu 25 Jun | PM + Holsen | Cutover to production; live ops begin |
| M4 Refresher Training | July (date TBC) | PM + Holsen users | Re-train live users post go-live (last session was 3 months ago) |

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

| #   | Item                                | FE  | Chatbot | Owner     | Status |
| --- | ----------------------------------- | --- | ------- | --------- | ------ |
| 1   | [TO FILL — remaining open UAT item] | ☐   | ☐       | [TO FILL] | ⬜      |
| 2   | [TO FILL]                           | ☐   | ☐       | [TO FILL] | ⬜      |
| 3   | [TO FILL]                           | ☐   | ☐       | [TO FILL] | ⬜      |

> Populate from [[MAIA UAT Form - Holsen - 2026-03]] + [[Holsen SOW Feature Checklist]] — list only items still open as of Jun 21.

### Smoke-check (already passing — confirm no regression)

- [ ] SO creation via WhatsApp (natural language)
- [ ] Duplicate order prevention (Customer + PO match → blocked)
- [ ] DO + Picking List generation
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

## M4 — Refresher Training (July — date TBC)

**Who:** PM + Holsen Sales/Logistics users
**Format:** Refresher session — last training was Training v3 (5 Mar 2026), ~3 months before go-live. Re-orient live users on current flows now that they're on production. Date to be confirmed with Holsen.

### Agenda

1. **Recap since last training (5 Mar)** — what changed, what's now live
2. **Sales flow** — SO creation via WhatsApp (natural language), duplicate-order prevention, customer-based pricing auto-retrieval
3. **Approval flow** — SO draft → submit → approve; Amend / Request Clarification actions
4. **Logistics flow** — DO + Picking List generation, fulfillment method declaration
5. **SKU attribute cues** — Trading / Manufacturing / Poison / Commodity tags and what each signals
6. **Daily digests** — unclosed SOs, delivery delays, low/out-of-stock alerts
7. **Live Q&A** — users raise real issues hit during first weeks of go-live
8. **Confirm next steps** — flag any post-go-live feature needs (PSO, C1/C3, batch/COA) for backlog

### Prep checklist

- [ ] Confirm refresher date with Holsen (July)
- [ ] Confirm attendees — Sales, Logistics, Finance, Admin users
- [ ] Prep training slides (refresh from Training v3 deck)
- [ ] Demo/training instance ready with sample data
- [ ] Collect go-live-week pain points to address in session

---

## Commercial — Payment Terms Adjustment

Batch enforcement (Phase A3) delayed as promised → Phase 1 closure payment revised downward.

|                              | Original                                      | Revised                               |
| ---------------------------- | --------------------------------------------- | ------------------------------------- |
| Remaining balance at closure | 50%                                           | 30%                                   |
| Reason                       | Batch/COA/compliance not delivered in Phase 1 | Deferred to later phase per agreement |

> Holsen pays **30%** (not 50%) at Phase 1 sign-off. Remaining balance owed when batch enforcement phase ships.

- [ ] Confirm revised payment terms with Holsen before go-live
- [ ] Update SOW / commercial record accordingly

---

## Milestone Dates

| # | Milestone | Date |
|---|---|---|
| 1 | Signed Date | TBC |
| 2 | Payment Date (upfront) | TBC |
| 3 | Kickoff Date | 2026-02-10 |
| 4 | Requirements Lock Date | 2026-03-05 |
| 5 | Go-Live Ready Date | 2026-06-24 |
| 6 | UAT Date | 2026-06-22 |
| 7 | Go-Live Date | 2026-06-25 |
| 8 | Training Date | TBC (July refresher) |
| 9 | Customisations Date | Post go-live (C1/C3 TBD) |

---

## NOT in this go-live scope (post-go-live)

Do not let these creep into 25 Jun:
- **C3 compliance enforcement** (FR-01 to FR-05) — Phase A3
- **Advanced batch intake, COA handling, K1 traceability** — Phase A3 (payment balance held here)
- A57 tax exemption enforcement
- SQL/AutoCount direct integration (coming August)
- Analytics/dashboard FRs (FR-08, FR-09), sticker labels (FR-07), DO bundling (FR-06)

---

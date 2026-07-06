---
owner: Gareth
status: draft
last_reviewed: 2026-07-06
client: Macrofood
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/Tm7SwwBs3ieWPLkWB9glwVMFgKg
---

# Macrofood Phase 1 — Backward Timeline to Go-Live

**End goal:** Sales module live + client trained — **originally Fri 26 Jun, slipped twice, now Tue 7 Jul 2026**. Core go-live target: **end of July / early August**.
**Created:** 2026-06-18 | **Updated:** 2026-07-06
**Scope:** Sales module only — **confirmed pick list → SO → DN → push to SQL**. Invoice/CN, AR recon, credit control deferred (see end).
**Model:** Structured on the [[Fixguru 2nd UAT Backward Plan]] — internal-test-with-live-dev-fix before the client sees it, then on-the-spot UAT during training.

## ⚠️ Slip Log

| Date | Change |
|---|---|
| 2026-06-18 | Original plan: go-live 26 Jun |
| ~2026-06-26 | Training pushed off Friday (per 2026-07-01 weekly update) |
| 2026-07-01 | Training rescheduled to Tue 7 Jul |
| 2026-07-02/03 | **M1 + M2 complete** — instance, Telegram chatbot, SQL sync all live |
| 2026-07-06 | M3 in progress (this week, continue testing); M5 sequence flipped — **training first (7 Jul), UAT after** — UAT scope now mainly covers customised features (see Customisation Timeline below) |

Per [[Weekly Update — Week of 2026-07-01]]: deployment + SQL integration done, internal testing done. Open client action: confirm Meta Business verification status (WhatsApp channel) — Telegram fallback already deployed and live.

---

## Milestone Map

```
NOW ── M0 Deps + Kickoff ── M1 Instance + Chatbot ── M2 SQL + Data Seed ── M3 Internal Test + Live Fix ── M4 Stability + UAT Prep ── M5 Training + UAT + GO-LIVE
Thu      Thu–Fri               Fri–Mon                 Mon–Wed                Wed                            Thu                       Fri
Jun 18   Jun 18–19             Jun 19–22               Jun 22–24              Jun 24                         Jun 25                    Jun 26
```

| Phase | Date | Who | Goal |
|---|---|---|---|
| M0 Deps + Kickoff | Thu 18–Fri 19 Jun | Gareth + Macrofood | Vendor form out; chase all client deps |
| M1 Instance + Chatbot | Fri 19–Mon 22 Jun | Dev | Deploy on client AWS; chatbot live |
| M2 SQL + Data Seed | Mon 22–Wed 24 Jun | Dev + PM | SQL sync working; master data seeded; PDF config |
| M3 Internal Test + Live Fix | Wed 24 Jun | Gareth + Dev | Test full scope live; fix on spot |
| M4 Stability + UAT Prep | Thu 25 Jun | PM | Stable; UAT form + training ready; client briefed |
| M5 Training + UAT + Go-live | Fri 26 Jun | PM + Macrofood | Train, on-the-spot UAT, sign-off, go-live |

---

## ⚠️ Critical path — SQL vendor (M0 → M2 → M3)

SQL sync is a **hard go-live blocker** gated on Macrofood's SQL vendor (**Mr. Chua, +60 12 212 2126**).

> Form sent 18 Jun → vendor returns API credentials + cloned test DB by **Mon 22 Jun** → build + verify sync (Mon–Wed) → internal test (Wed) → stability (Thu) → go-live (Fri).

If vendor slips past **Mon 22 Jun**, 26 Jun is at risk — escalate immediately. Source form: [[Macrofood MAIA SQL integration]].

---

## M0 — Dependencies & Kickoff (Thu 18 – Fri 19 Jun)

**Who:** Gareth + Macrofood
**Format:** Send vendor form (done) + chase every client deliverable; nothing downstream moves until these land.

- [x] SQL integration form sent to vendor (Mr. Chua) — 18 Jun
- [x] Client grants **AWS account access** (instance runs on their AWS)
- [x] Client shares **OpenAI account + API key**
- [x] Client **finalizes pick-list workflow** (F2F: still open — blocks core flow)
- [x] Client sends **doc samples** (SO, DN) for PDF templates
- [ ] Client sends **company user list**
- [x] Confirm **customer + item master data scope**

### Client deliverables (owner: Macrofood — none MAIA-controlled)

| Dependency                       | Blocks                                       | Status                               |
| -------------------------------- | -------------------------------------------- | ------------------------------------ |
| AWS access                       | Instance deploy (M1)                         | ⬜                                    |
| OpenAI API key                   | Chatbot (M1)                                 | ⬜                                    |
| SQL credentials + cloned test DB | SQL sync (M2) — critical path                | 🟡 Form sent 18 Jun, awaiting return |
| Pick-list workflow finalized     | Core flow (M2/M3)                            | ⬜                                    |
| SO / DN doc samples              | PDF config (M2)                              | ⬜                                    |
| Company user list                | User seed (M2)                               | ⬜                                    |
| WhatsApp Business + Meta + SIM   | Channel — **Telegram fallback if not ready** | ⬜                                    |

---

## M1 — Instance + Chatbot Setup — ✅ COMPLETE (2026-07-02/03)

**Who:** Dev
**Status:** Done.

- [x] Deploy MAIA instance on **client's AWS**
- [x] Set up chatbot — **Telegram deployed and live**; **WhatsApp still pending** on client side (Meta Business verification)
- [x] Connect chatbot to instance; smoke-test basic message flow

> Channel: Telegram is live now, not just a fallback. WhatsApp switches over once client clears Meta Business verification.

---

## M2 — SQL Integration + Data Seed — ✅ COMPLETE (2026-07-02/03)

**Who:** Dev + PM
**Status:** Done.

- [x] Vendor returned API credentials + cloned test DB
- [x] Build + verify SQL sync — **customer/item master read**, **SO/DN write**
- [x] Test all write endpoints on cloned test DB (port 8016, firewall/IP whitelist confirmed)
- [x] Seed company users + **customer/item master data**
- [x] Configure **SO / DN PDF templates** from client samples

---

## M3 — Internal Test + Live Dev-Fix Session — 🟡 IN PROGRESS (this week)

**Who:** Gareth + Dev
**Status:** Testing continues this week, in parallel with M5 training (sequence flipped — training runs first, M3 fixes feed into post-training UAT).

### Go-live scope checklist (run live)

| # | Item | FE | Chatbot | SQL | Status |
|---|------|----|---------|-----|--------|
| 1 | Customer master synced from SQL (read) | — | — | ☐ | ⬜ |
| 2 | Item/SKU master synced from SQL (read) | — | — | ☐ | ⬜ |
| 3 | Upload confirmed pick list → MAIA | ☐ | ☐ | — | ⬜ |
| 4 | Create SO from confirmed figures | ☐ | ☐ | — | ⬜ |
| 5 | Generate Delivery Note (DN) | ☐ | — | — | ⬜ |
| 6 | Push SO / DN → SQL (write) | — | — | ☐ | ⬜ |
| 7 | Pricing enforcement (wholesale/retail/customer-specific) | ☐ | ☐ | — | ⬜ |
| 8 | SO / DN PDF renders correctly | ☐ | — | — | ⬜ |

- [ ] End of session: agree what's green, what's deferred

---

## M4 — Stability + UAT Prep (Thu 25 Jun)

**Who:** PM (Gareth)

- [ ] Regression check — no breaks from M3 fixes; instance + chatbot stable
- [ ] Verify seeded test data intact
- [ ] **Finalize Macrofood UAT form** (none exists yet — build from scope checklist)
- [ ] Prep training material
- [ ] Brief client on go-live scope (what's in / what's deferred)

---

## M5 — Training (Tue 7 Jul) → UAT after (sequence flipped)

**Who:** PM + Macrofood testers
**Format:** Training runs first. UAT no longer same-session on-the-spot — it now sits **after** training and mainly covers the 3 customised features below (see Customisation Timeline). Core sales flow (pick list → SO → DN → SQL) already validated in M3.

- [x] Channel for training: **Telegram** (live) — WhatsApp pending client's Meta Business verification
- [ ] Brief: what's in scope (pick list → SO → DN → SQL)
- [ ] Training Slide prep
- [ ] Demo instance setup ready
- [ ] Run training session — 7 Jul
- [ ] UAT (post-training) — mainly customised features, dates TBC below
- [ ] Sign-off (or conditional sign-off + punch list) → **go-live** (target: end of July / early Aug)

---

## Customisation Timeline — 3 Features (dates TBC)

Scope moved out of core Phase 1, now tracked separately. Sequence: A → B → C.

| # | Feature | QA Date | Internal Showcase Date | UAT Date |
|---|---|---|---|---|
| A | Bulk Item Price Update | TBC | TBC | TBC |
| B | Slow-moving / Near-expiry Stock Alert | TBC | TBC | TBC |
| C | AR (Reconciliation) | TBC | TBC | TBC |

- **QA Date** — tech ships to product team, product QA starts
- **Internal Showcase Date** — product team demos feature internally before client sees it
- **UAT Date** — client tests the feature live

Target: all 3 features through UAT and go-live-ready by **end of July / early August**.

---

## NOT in Phase 1 scope

Do not let these creep into 26 Jun:
- **Invoice, Credit Note** → after core sales go-live
- AR Reconciliation, Bulk Price Update, Product Catalog, Credit limit control → **deployed separately after core go-live**
- AP (supplier) reconciliation, Delivery trip management, Warehouse barcode/QR (WMS), Batch tracking, Inventory aging alerts → **future phase**

---

## Milestone Dates

| # | Milestone | Date |
|---|---|---|
| 1 | Signed Date | 2026-05-15 |
| 2 | Payment Date (50% upfront) | 2026-05-20 |
| 3 | Kickoff Date | 2026-06-18 |
| 4 | Requirements Lock Date | 2026-06-04 |
| 5 | Go-Live Ready Date | 2026-06-25 |
| 6 | UAT Date | 2026-06-26 |
| 7 | Go-Live Date | 2026-06-26 |
| 8 | Training Date | 2026-06-26 |
| 9 | Customisations Date | 2026-06-24 |

---

## See Also

- [[Onboarding Status]]
- [[Macrofood MAIA SQL integration]]
- [[Macro Frozen SQL Integration]]
- [[F2F Requirements Gathering Summary 2026-06-04]]
- [[Fixguru 2nd UAT Backward Plan]]
- [[CLAUDE.md]]

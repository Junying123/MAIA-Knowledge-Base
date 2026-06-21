---
owner: Gareth
status: draft
last_reviewed: 2026-06-21
client: Dalson
phase: 1
---

# Dalson Phase 1 — Backward Timeline to Go-Live

**End goal:** Core MAIA live + client trained on **Mon 7 Jul 2026**
**Created:** 2026-06-21 | **Updated:** 2026-06-21
**Scope:** Core MAIA (sales module) — Telegram channel (Meta/WhatsApp on hold); AutoCount 2.2 cloud integration (read customer/item master, write SO/Invoice).
**Model:** Structured on the [[Macrofood Phase 1 Timeline]] — internal test + live fix before client UAT, on-the-spot UAT before sign-off.

---

## Milestone Map

```
NOW ── M0 Deps ── M1 AWS + Telegram ── M2 AutoCount Sync ── M3 Internal Test ── M4 UAT ── M5 Go-live ── Training
Sat      Sat–Mon    Mon–Wed              Wed–Sat               Sat–Mon              Tue       Thu          Mon
Jun 21   Jun 21–23  Jun 23–25            Jun 25–28             Jun 28–30            Jul 1     Jul 3        Jul 7
```

| Phase | Date | Who | Goal |
|---|---|---|---|
| M0 Deps + Kickoff | Sat 21 – Mon 23 Jun | Gareth | Lock all client deps; confirm Telegram; AWS + OpenAI verified |
| M1 AWS Deploy + Telegram | Mon 23 – Wed 25 Jun | Dev | MAIA instance live on AWS; Telegram chatbot connected |
| M2 AutoCount Integration + 2-way sync | Wed 25 – Sat 28 Jun | Dev + PM | Customer/item master read; SO/Invoice write; 2-way sync verified |
| M3 Internal Test + Core Features | Sat 28 – Mon 30 Jun | Gareth + Dev | Full scope run-through live; fix on spot; core workflow locked |
| M4 UAT | Tue 1 Jul | PM + Dalson | Client runs UAT; PM on standby; triage same session |
| M5 Go-live + Sign-off | Thu 3 Jul | PM + Dalson | Sign-off; switch to live; confirm channel live |
| Training | Mon 7 Jul | PM + Dalson | Full team training session |

---

## ⚠️ Critical path — AutoCount vendor (M0 → M2 → M3)

AutoCount sync is the **hard go-live blocker** gated on Dalson's AutoCount vendor (**Ms Tan, +60192392686 / easysoftprosolution@gmail.com**).

> Credentials + cloned test DB must land by **Wed 25 Jun** → build + verify sync (Wed–Sat) → internal test (Sat–Mon) → UAT (Tue Jul 1) → go-live (Thu Jul 3).

If vendor slips past **Wed 25 Jun**, Jul 1 UAT is at risk — escalate immediately to Dalson. Source checklist: [[Dalson MAIA autocount integration]].

**Channel note:** Meta/WhatsApp setup is blocked (pending Meta business verification). Proceeding with **Telegram** as primary channel. WhatsApp can be layered post go-live once Meta is resolved.

---

## M0 — Dependencies & Kickoff (Sat 21 – Mon 23 Jun)

**Who:** Gareth
**Format:** Confirm all deps; nothing downstream moves until these land.

### Completed
- [x] AWS account set up
- [x] OpenAI API key set up
- [x] AutoCount vendor contact identified (Ms Tan)
- [x] UltraViewer access received (ID: 100 763 541)
- [x] AutoCount admin credentials received

### Remaining — chase by Mon 23 Jun

| Dependency | Blocks | Status |
|---|---|---|
| AutoCount cloned test DB + API credentials from Ms Tan | Sync build (M2) — critical path | ⬜ Chase now |
| Dalson company user list | User seed (M2) | ⬜ |
| SO / Invoice doc samples from Dalson | PDF template config (M2) | ⬜ |
| Customer + item master data scope confirmation | Data seed (M2) | ⬜ |
| Telegram bot name / handle agreed with client | Chatbot (M1) | ⬜ |
| Meta WhatsApp | **NOT blocking** — Telegram fallback confirmed | 🚫 On hold |

---

## M1 — AWS Deploy + Telegram Chatbot (Mon 23 – Wed 25 Jun)

**Who:** Dev
**Format:** MAIA-controlled once AWS + OpenAI confirmed (already done). Run in parallel with AutoCount vendor chase.

- [ ] Deploy MAIA instance on **Dalson's AWS**
- [ ] Set up **Telegram chatbot** — primary channel for go-live
- [ ] Connect chatbot to MAIA instance
- [ ] Smoke-test basic message flow (send message → MAIA responds)
- [ ] Confirm instance + chatbot stable before M2 begins

---

## M2 — AutoCount Integration + 2-way Sync (Wed 25 – Sat 28 Jun)

**Who:** Dev + PM
**Format:** Build against cloned test DB once vendor delivers. Data seed + PDF config in parallel.

- [ ] **Vendor returns cloned test DB + API credentials** — Wed 25 Jun (hard target)
- [ ] Verify UltraViewer + AutoCount access works (ID: 100 763 541, PW: 03935; AC admin/admin)
- [ ] Build + verify **AutoCount READ** — customer (debtor) master, item/SKU master, pricing
- [ ] Build + verify **AutoCount WRITE** — SO push, Invoice push
- [ ] Test 2-way sync: MAIA → AutoCount (write) + AutoCount → MAIA (read) on **cloned test DB**
- [ ] Seed company users into MAIA
- [ ] Seed customer + item master data
- [ ] Configure **SO / Invoice PDF templates** from client doc samples
- [ ] Confirm firewall / IP whitelist if needed (AutoCount cloud-hosted on vendor server)

---

## M3 — Internal Test + Core Features (Sat 28 – Mon 30 Jun)

**Who:** Gareth + Dev
**Duration:** ~2–3 hours
**Format:** PM runs every scope item live on Dalson env; dev fixes on the spot. Anything unfixable → explicit defer decision logged.

### Core workflow checklist (run live)

| # | Item | FE | Chatbot | AutoCount | Status |
|---|------|----|---------|-----------|--------|
| 1 | Customer master synced from AutoCount (read) | — | — | ☐ | ⬜ |
| 2 | Item/SKU master synced from AutoCount (read) | — | — | ☐ | ⬜ |
| 3 | Create Quotation via Telegram chatbot | ☐ | ☐ | — | ⬜ |
| 4 | Convert Quotation → Sales Order | ☐ | ☐ | — | ⬜ |
| 5 | Push SO → AutoCount (write) | — | — | ☐ | ⬜ |
| 6 | Generate Invoice from SO | ☐ | — | — | ⬜ |
| 7 | Push Invoice → AutoCount (write) | — | — | ☐ | ⬜ |
| 8 | Pricing pulled correctly from AutoCount | ☐ | ☐ | ☐ | ⬜ |
| 9 | SO / Invoice PDF renders correctly | ☐ | — | — | ⬜ |
| 10 | 2-way sync: AutoCount update reflects in MAIA | — | — | ☐ | ⬜ |

- [ ] End of session: green items locked; deferred items explicitly logged

---

## M4 — UAT with Client (Tue 1 Jul)

**Who:** PM + Dalson team
**Format:** PM briefs scope → client runs test cases on spot → PM triages same session.

- [ ] Brief client: what's in scope vs deferred
- [ ] Client runs core workflow UAT on Dalson MAIA env
- [ ] PM on standby; log issues + triage same session
- [ ] Minor issues: fix same day or by Jul 3
- [ ] Sign-off criteria agreed before session starts

---

## M5 — Go-live + Sign-off (Thu 3 Jul)

**Who:** PM + Dalson
**Format:** Confirm all UAT issues resolved → switch to live → sign-off.

- [ ] UAT punch list cleared
- [ ] Instance confirmed stable (no regressions from M4 fixes)
- [ ] Telegram chatbot live on production channel
- [ ] Dalson users confirmed active on MAIA
- [ ] Sign-off obtained
- [ ] Go-live confirmed — Dalson team starts live usage

---

## Training (Mon 7 Jul)

**Who:** PM + full Dalson team
**Format:** Structured training session; cover full go-live scope end-to-end.

- [ ] Prep training slides / flow (reuse from M4 UAT brief)
- [ ] Demo instance + clean data ready for training
- [ ] Train: Quotation → SO → Invoice flow via Telegram
- [ ] Train: AutoCount sync — what auto-pushes, what to expect
- [ ] Cover: how to flag issues post go-live
- [ ] Post-training: WhatsApp / Meta setup path (when unblocked)

---

## NOT in Phase 1 scope

Do not let these creep into July 3 go-live:

- **WhatsApp / Meta channel** — blocked; layer in post go-live once Meta verification resolved
- Credit control / credit limit enforcement → after core go-live
- Delivery Note / Logistics module → future phase (not in core MAIA purchased)
- Custom reports, bulk operations → future phase
- e-Invoice (LHDN) via AutoCount → confirm if in scope; defer if complex

---

## Key Contacts

| Role | Name | Contact |
|---|---|---|
| AutoCount vendor / system owner | Ms Tan | +60192392686 / easysoftprosolution@gmail.com |
| AutoCount version | 2.2 (cloud) | Build: 2.2.90 |
| UltraViewer (remote access) | — | ID: 100 763 541, PW: 03935 |
| AutoCount login | — | admin / admin |

---

## See Also

- [[Dalson MAIA autocount integration]]
- [[Macrofood Phase 1 Timeline]]

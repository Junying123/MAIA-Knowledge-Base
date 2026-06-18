---
owner: Gareth
status: draft
last_reviewed: 2026-06-18
client: Macrofood
---

# Macrofood Phase 1 — Backward Timeline to Go-Live

## Overview

Macrofood goes live **Fri 26 Jun 2026**, with the **client training session on the same day**. This timeline works backward from 26 Jun across the workstreams MAIA must deliver: instance deploy (on client AWS), chatbot setup, seed users + master data, SQL integration sync, PDF config, internal test, and UAT. Structured on the [[Fixguru 2nd UAT Backward Plan]] model — internal-test-with-live-dev-fix before the client sees it, then on-the-spot UAT during training.

As of **18 Jun** there are ~8 calendar days / ~6 working days (client ops: Mon–Fri 9am–6pm, Sat 9am–12pm, Sun off).

**Decisions locked:**
- **UAT** — hybrid: light internal UAT before 26 Jun, then the training session also surfaces client issues.
- **SQL sync** — **hard blocker** for go-live (live SQL read/write required; no manual fallback).

## ⚠️ Critical path — SQL vendor dependency

SQL sync is a **hard go-live blocker** but gated on Macrofood's SQL vendor (technical contact **Mr. Chua, +60 12 212 2126**). The chain **#0 → #2 → #5** decides the date:

> Send form (today) → vendor returns API credentials + cloned test DB (by **Mon 22 Jun**) → MAIA builds + verifies sync (Tue–Wed) → UAT (Wed–Thu) → fixes (Thu) → go-live (Fri).

If the vendor slips past **Mon 22 Jun**, 26 Jun is at risk — escalate immediately rather than silently descope. Source form: [[Macrofood MAIA SQL integration]] (trimmed, client-ready version).

## Milestones

| # | Milestone | Target | Owner | Depends on | Status |
|---|-----------|--------|-------|-----------|--------|
| 0 | Send SQL integration form to vendor (Mr. Chua) + client dependency checklist | Thu 18 Jun (today) | Gareth | — | ⬜ |
| 1 | Client delivers AWS access + OpenAI API key | Fri 19 Jun | **Macrofood** | #0 | ⬜ |
| 2 | MAIA instance deployed (on client AWS) | Fri 19–Sat 20 Jun | Dev | #1 | ⬜ |
| 3 | Vendor returns form + API credentials + test/cloned DB | **Mon 22 Jun (hard target)** | **Vendor** | #0 | ⬜ |
| 4 | Chatbot set up + connected to instance (confirm channel — see flag) | Mon 22 Jun | Dev | #2 | ⬜ |
| 5 | Seed company users + **customer/item master data** (from SQL) | Tue 23 Jun | PM/Dev | #2 + client lists | ⬜ |
| 6 | SQL integration sync built + verified (debtor/item read, SO/DO/invoice write) | Tue 23–Wed 24 Jun | Dev | #3 | ⬜ |
| 7 | PDF templates configured (invoice/CN, DO) from client samples | Wed 24 Jun | Dev | doc samples | ⬜ |
| 8 | **Internal test + live dev-fix session** (run full scope checklist, dev on standby) | Wed 24 Jun | Gareth + Dev | #4, #5, #6, #7 | ⬜ |
| 9 | Stability / regression check — no breaks from fixes; test data intact | Thu 25 Jun | PM | #8 | ⬜ |
| 10 | UAT form finalized + training material prepped + client briefed on scope | Thu 25 Jun | PM | #9 | ⬜ |
| 11 | **Client training + on-the-spot UAT + Go-live** | **Fri 26 Jun** | PM | all above | ⬜ |

> Modeled on the Fixguru 2nd UAT plan: internal-test-with-live-dev-fix session (#8) before client sees it, stability check (#9), then on-the-spot UAT during training. Log bugs in **Jam** during the session.

## Go-live scope checklist (what we test #8 + #11)

Phase 1 core flow per [[F2F Requirements Gathering Summary 2026-06-04]]: **confirmed pick list uploaded → MAIA creates SO → DO → Invoice → push to SQL.**

| # | Item | FE | Chatbot | SQL | Status |
|---|------|----|---------|-----|--------|
| 1 | Customer master synced from SQL (read) | — | — | ☐ | ⬜ |
| 2 | Item/SKU master synced from SQL (read) | — | — | ☐ | ⬜ |
| 3 | Upload confirmed pick list → MAIA | ☐ | ☐ | — | ⬜ |
| 4 | Create SO from confirmed figures | ☐ | ☐ | — | ⬜ |
| 5 | Generate Delivery Order (DO) | ☐ | — | — | ⬜ |
| 6 | Generate Invoice | ☐ | — | — | ⬜ |
| 7 | Push SO / DO / Invoice → SQL (write) | — | — | ☐ | ⬜ |
| 8 | Pricing enforcement (per customer: wholesale/retail/specific) | ☐ | ☐ | — | ⬜ |
| 9 | Credit limit block + override notify (limit pulled from SQL) | ☐ | ☐ | ☐ | ⬜ |
| 10 | Invoice / CN / DO PDF renders correctly | ☐ | — | — | ⬜ |

> Mark each cell when green. Anything not green by #9 → explicit defer decision or slip.

## Client + vendor dependencies (none MAIA-controlled — chase all today)

| Dependency | Owner | Blocks | Status |
|---|---|---|---|
| AWS account + grant MAIA access | Macrofood | Instance deploy (#2) | ⬜ |
| OpenAI account + API key | Macrofood | Chatbot (#4) | ⬜ |
| SQL API credentials + cloned test DB | Vendor (Mr. Chua) | SQL sync (#6) — critical path | ⬜ |
| **Pick-list workflow finalized** | Macrofood | Core flow (#3, #4) | ⬜ |
| Customer + item master data scope confirmed | Macrofood | Master seed (#5) | ⬜ |
| Doc samples (invoice/CN, DO, pick list) | Macrofood | PDF config (#7) | ⬜ |
| Company user list | Macrofood | User seed (#5) | ⬜ |
| WhatsApp Business + Meta account + SIM **(if WhatsApp channel)** | Macrofood | Chatbot (#4) | ⬜ |

## ⚠️ Channel decision needed

Plan assumes a chatbot channel but **F2F RG specifies WhatsApp** (Meta/WhatsApp Business account + new SIM), while go-live discussion mentioned **Telegram**. Confirm which. WhatsApp adds Meta approval + SIM provisioning to the critical path — if it can't land by 26 Jun, consider Telegram for go-live and WhatsApp after.

## NOT in Phase 1 scope (deploy separately after core go-live)

Per F2F — do not let these creep into 26 Jun:
- AR Reconciliation, Bulk Price Update, Product Catalog → **deployed separately after core go-live**
- AP (supplier) reconciliation, Delivery trip management, Warehouse barcode/QR (WMS), Batch tracking, Inventory aging alerts → **future phase**

## Notes

- Items #2, #4, #5 are MAIA-controlled **once client dependencies land** — run in parallel early. True risks: vendor (#3) and client deliverables above.
- Test all write endpoints against the **cloned/restored test DB first** — vendor doc warns write endpoints create real SQL transactions.
- SQL API default port **8016**; confirm firewall / IP whitelist with Macrofood IT.

## Contingency

If vendor credentials slip past Mon 22 Jun: escalate. Fallback to raise with KB Lead — split go-live: train on 26 Jun against seeded data, phase SQL sync in once vendor delivers. (Current decision keeps SQL as a hard blocker, so flag the slip rather than descope quietly.)

## See Also

- [[Onboarding Status]]
- [[Macrofood MAIA SQL integration]]
- [[Macro Frozen SQL Integration]]
- [[F2F Requirements Gathering Summary 2026-06-04]]
- [[Fixguru 2nd UAT Backward Plan]]
- [[CLAUDE.md]]

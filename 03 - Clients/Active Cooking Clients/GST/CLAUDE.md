---
client: GST Fine Foods
status: active
stage: Pre-onboarding — SAP integration pending
owner: Gareth
last_updated: 2026-07-06
---

# GST Fine Foods — Client Context

## Current Status (as of 2026-07-06)

Stalled since kickoff — no payment received, no confirmation SAP UAT license (expected Wed 25 Jun) arrived, kickoff and AWS/OpenAI setup meeting still not done. **Target set: UAT-ready by EOM July 2026** (see backward plan) — requires payment + SAP license + kickoff to close by **Fri 10 Jul 2026**. If that slips, EOM target is not achievable and the whole plan shifts. Escalate this week.

| Item | Status |
|---|---|
| Proposal signed | ✅ Done |
| Requirements gathering | ✅ Done (4 May 2026) |
| SAP B1 access received | ✅ Done |
| VPN network access received | ✅ Done |
| Remote desktop access received | ✅ Done |
| Core MAIA setup | ✅ Done |
| WABA setup guide sent to GST | ✅ Done (GST handles own WABA) |
| SAP UAT license (from vendor) | 🟡 Pending — expected Wed 25 Jun |
| AWS + OpenAI setup meeting with GST | ⬜ Gareth to schedule |
| Instance deploy (AWS + Telegram) | ⬜ Pending dev team |
| SAP B1 integration build | ⬜ Pending SAP UAT license |
| Internal testing | ⬜ TBC |
| UAT | ⬜ TBC |
| Go-live | ⬜ TBC |
| Training | ⬜ TBC |

**Backward plan:** [[Timeline/GST Phase 1 Backward Plan]]

---

## Client Profile

**Business:** GST Fine Foods Sdn Bhd — frozen seafood supplier and B2B distributor (barramundi, tiger prawns, whole fish, salmon, squid, shellfish). Operations in Penang, KL (Rawang), Langkawi.
**Customers:** Hotels, restaurants, supermarkets, food service operators across Malaysia.
**ERP:** SAP Business One v10.00.919 — single company, branch-level data ownership (Penang + KL).
**Current tools:** SAP B1 · Crystal Reports · Excel RFQ files · WhatsApp groups · manual stock spreadsheets.
**Phase 1 channel:** WhatsApp (GST managing WABA/Meta setup themselves) + Telegram fallback.

---

## Phase 1 Scope

- RFQ Excel intake + line item extraction (IDP)
- Product matching — SAP item master lookup, match surfacing for coordinator confirmation
- Standard Sales Order creation via WhatsApp
- Pre-order checks: stock availability, customer pricing (SAP Blanket Agreements), credit limit
- Finance approval routing — payment slips + credit limit exceptions
- SAP B1 integration: READ (items, customers, stock, pricing) + WRITE (SO, Invoice, DO push)
- Crystal Reports-aligned document output (Quotation, SO, Invoice, DO)
- Daily digests — unclosed SOs, outstanding payment slips, flagged stock

**Phase 2 (deferred):** CPRN blanket order tracking, deep RFQ matching logic, aging/clearance reminders, SOA generation, KL/Langkawi branch rollout, stock transformation workflow.

---

## Key Contacts

| Role | Name | Contact |
|---|---|---|
| GST Sales PIC | Joey Ong | — |
| GST Operations / Boss | Soo Chin | chin@gstgroup.com.my |
| GST Operations Manager | Tim | timwong@gstgroup.com.my |
| GST Finance (Penang) | Miss Lee | finance@gstgroup.com.my |
| GST CEO Wife | Teoh Le Ying | teohly@gstgroup.com.my |
| SAP Vendor (integration PIC) | Azib Iqbal | azibiqbal01@gmail.com |
| Mindhive dev (SAP integration) | Jermaine | jermaine@mindhive.asia |

---

## Key Files

- [[Timeline/GST Phase 1 Backward Plan]] — **active backward plan** (start here)
- [[SOW for MAIA GST Fine Foods]] — signed scope of work
- [[GST Fine Foods × MAIA Proposal v2 [SIGNED]]] — signed proposal
- [[Requirement Gathering Output - GST Fine Foods - 2026-05]] — RG output
- [[GST Fine Foods — Requirement Gathering Questionnaire]] — structured RG questions
- [[GST SAP Vendor × Mindhive — Meeting Notes]] — SAP integration meeting notes
- [[GST Meeting Transcripts]] — all meeting transcripts consolidated
- [[GST Fine Foods Customer Narrative]] — customer narrative
- [[GST Fine Foods — GTM Brief Context and Unclear Items]] — GTM brief + open questions

## Folder Structure

- `Timeline/` — backward plan and milestone tracking
- `Meetings/` — meeting notes and transcripts
- `brand_context/` — GST Fine Foods brand assets
- `context/learnings.md` — running feedback and learnings log
- `context/memory/` — AI session history snapshots
- `GST Lark Wiki/` — Lark-published content mirror

## See Also

- [[Macrofood Phase 1 Timeline]] — reference format for this backward plan
- [[Dalson Phase 1 Timeline]] — reference format for this backward plan

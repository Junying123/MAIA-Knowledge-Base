---
owner: Gareth
status: approved
last_reviewed: 2026-08-07
client: Holsen
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/HxqHwgtY3iOhBvk2nb5lQH1Ig7g
---

# Holsen — PM Handover Brief

*(Published to Lark as "Holsen — PM Handover Brief")*

> Handover from Gareth (resigning from Mindhive, no longer managing MAIA product) to the incoming PM.
> **Read in this order:** Quick Start → Status at a Glance → Deep Dives → Reading Order → Action Checklist.
> Nothing here is confirmed until verified yourself with the client or dev team — items below are flagged precisely because they were never closed out.

---

## Quick Start

| | |
|---|---|
| **Client** | Holsen — wholesale/distribution, order-to-cash on MAIA |
| **Folder** | `03 - Clients/Active Cooking Clients/Holsen/` |
| **Phase** | A1 (Core MAIA) live ~25 Jun 2026 (slipped from 31 Mar target). A3 (batch/compliance/C1-C3) deferred, post-go-live. |

**Fix these first:**

- ✅ **Named client contact — resolved 2026-08-03.** Full roster in the Customer Onboarding Checklist (Lark): Tam Ze Xin (Sales/Admin, primary, +60124295751, holsenlab@gmail.com), Ng Tze Chien (Sales), Wong Shui Fern (Finance), Noor Aili Nafiah (Logistics), Intan Atikah (Procurement), Murugesu A/L Palanivello (Production), Ong Siow Chui (System Admin), Chin Zhao Heng (Boss/System Admin). Still need to: write these into [[Client Overview]]'s empty contact table.
- ⚠️ **Live status is ambiguous.** 29 Jun note says "confirm live vs slipped"; 1 Jul weekly update treats client as already live. **Confirm directly with Holsen before reporting status anywhere.**
- ⚠️ **Account manager change (5 Aug 2026).** Wansin (Mindhive) taking over — old contact left end of that week. Confirm the handover actually happened; Wansin's 5 Aug action items (integration group chat, loop in ledger/accounting, follow up Mr. Tam) are unconfirmed as done.
- ⚠️ **Broken source link.** `wiki/PXwcwzr9tiy0oukc40vlvk6vgwha` returned "not found" on 2026-08-07 (bot: missing scopes; user: 404) — likely stale/deleted or a permissions gap. Used the local import copy `Lark Wiki Import/3Aug26 - Holsen Training Gaps.md` instead. Re-check the live link before trusting long-term.
- ⚠️ **Missing source docs — not in this Markdown KB** (checkout's last commit 2026-06-22): Holsen Phase 1 Closure Backward Plan, Holsen Go-Live Action Plan - 2026-06-25, Dev Brief - Holsen UAT Issues - 2026-06-25, Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26, Holsen MAIA User Guide - Mr Tam Team. Find out whether these only ever existed in Obsidian/Lark, or need rebuilding.

**Quick facts:**

- Sample docs (client-provided, Google Drive): https://drive.google.com/drive/folders/1o56UJmTAk9CsefX6fj6JoyJnC6FnGI_T — also linked from [[Client Overview]].
- Delivery: Holsen has no fleet of its own — all delivery via third parties: Menaka (local), GMax + Tiong Nam Logistics (outstation).

**Folder to check:**

- **UAT with Holsen:** [[MAIA UAT Form - Holsen - 2026-03]] (Lark: "MAIA UAT Form - Holsen - March 2026 Copy")
- **Onboarding checklist:** Holsen - Customer Onboarding Checklist (Lark-only, not in vault)
- **Sample docs:** [Google Drive folder](https://drive.google.com/drive/folders/1o56UJmTAk9CsefX6fj6JoyJnC6FnGI_T)
- **Overall folder (internal):** https://eg69120xnei.sg.larksuite.com/drive/folder/O1BNf9ZsQl2WwbdWFqhl69pOgpc
- **Scope Lock:** [[Holsen — Scope Lock]] (Lark: "Holsen — Scope Lock v2")
- **Workflow:** [[Holsen — Before vs After MAIA Workflow]]

---

## Status at a Glance

### ✅ Live & Confirmed

| Item | Detail | Source |
|---|---|---|
| Phase A1 core (chatbot, SO/DO flow, workspaces) | Live ~25 Jun 2026, later than original 31 Mar target | Holsen Phase 1 Closure Backward Plan, Go-Live Action Plan 25 Jun |
| PSO (Poison Sign Order) | Built + UAT-tested (Test 23) — 7 config items pending as of 25 Mar, unclear if resolved | [[MAIA UAT Form - Holsen - 2026-03]] |
| One DN → many Invoices (drawdown billing) | Confirmed working, tested live on prod 2026-08-02. Not yet in product specs → [Deep Dive](#3-one-dn--many-invoices-drawdown-billing) | Verified by Gareth on prod |
| C1/C3 — SO-level enforcement | Live-tested with client 15 & 22 May 2026 (not just internal) — cert create/upload, apply to SO, HS-code check, submit-block all confirmed. Missing: formal Pass/Fail sign-off + DN/Invoice-level behavior → [Deep Dive](#1-c1c3-compliance) | Granola: "Holsen <> Mindhive C1C3 UAT" 15/22 May |

### ⚠️ Deferred to Phase A3

| Item | Detail | Source |
|---|---|---|
| C1/C3 — DN/Invoice-level enforcement | SO-level confirmed; DN/Invoice blocked on batch/serial assignment, not fully tested → [Deep Dive](#1-c1c3-compliance) | See deep dive |
| Batch allocation (lot-level, FEFO, C1/C3/K1 tagging) | Not started per checklist (17 Mar), not re-verified against live system → [Deep Dive](#2-batch-allocation) | [[Holsen SOW Feature Checklist]] §8–10 |
| K1 traceability | Deferred to A3 | [[Onboarding Status]] |
| COA generation / blinding | Deferred to A3 (backlog F3) | Go-Live Action Plan 25 Jun |
| A57 tax exemption enforcement | Deferred, not yet enforced | [[Client Overview]], [[Config Overlay]] |

### ❓ Open / Needs Verification

| Item | Detail | Source |
|---|---|---|
| UAT sign-off (target 22 Jun) | Not formally closed — no completed results or signature | [[MAIA UAT Form - Holsen - 2026-03]] |
| Go-live date (25 Jun) | Ambiguous — see Quick Start | weekly status notes |
| B1–B8 go-live bugs | Warehouse default, stock check, payment due date, tax override, batch→picklist carry, min-price enforcement, discount display, pick-list chatbot notification — open as of 25 Jun, no confirmed closure since | Dev Brief 25 Jun |
| Stock/batch data ingest accuracy | In progress — Excel ingest batch qty vs stock reco not tallying. Plan: re-ingest; manual recon if still off. **Blocks SQL sync readiness.** | Stock Ingest handover 26 Jun |
| Refresher training | Ran 5 Aug 2026 — see Deep Dive §5 | Granola 5 Aug |
| AutoCount/SQL integration (replaces UBS CSV) | Holsen bought SQL (on-prem), still manually keying orders. Key decision: **stabilize SQL ops → integrate MAIA↔SQL → then onboard full team**, sequenced not parallel → [Deep Dive](#5-sql-integration-refresher-training-5-aug-2026) | Granola 5 Aug |
| Credit limit approval workflow (Finance) | Not enabled — clarify with Mr Tam first. Approval routes to **Mr Chin** (boss/credit controller) when credit exceeded at order creation | [[Client Overview]], [[Config Overlay]] |
| Meta/WhatsApp cutover from Telegram | Unclear — Telegram (@maia_holsen_bot) still referenced as of June User Guide | Holsen MAIA User Guide |
| Multiple credit notes per invoice | Platform-wide limitation, not Holsen-specific — roadmap item | [[Known Limitations]] |

---

## Deep Dives

### 1. C1/C3 Compliance

**Definitions** (from [[Holsen Feature Requests - 5 March Training]]):

- **C1** — customer's manufacturer tax exemption certificate. Perpetual/reusable. Holsen holds the cert, records the number on invoice. Can mix with non-exempt items on same order.
- **C3** — per-order import-on-behalf exemption. Tied to PO + appointment letter, quantity-based, not perpetual. Always a standalone DO + invoice, cannot mix with other order types.
- **Jadual C2** — Holsen's own SST compliance schedule, **not a MAIA feature**. Records C3 transactions + C1 lumpsum per customer, submitted periodically to Malaysian SST. MAIA supplies structured exports, doesn't build/host it.
- **K1** — customs declaration number tied to C3/imported goods; must trace to batch, DO, invoice.

**Intended mechanics** ([[SOW for MAIA Holsen]], [[Working Holsen]]):

- C1/C3 are Tax & Restriction Status tags at batch level (Free / C1 / C3 Stock).
- C3 stock hard-locked to one customer.
- C1 validated against the Customer Profile's certificate + expiry.
- Cert objects created manually or via PDF upload, linked to Customer, applied on SO/CPO, HS-code matched, hard submit-block if uncovered.

**Current state (corrected 2026-08-03 — verified against Granola transcripts):**

- UAT test cases exist in [[MAIA UAT Form - Holsen - 2026-03]] (Tests 24–36: cert create/upload/apply, CPO→SO carry, submit-block on missing attachment/HS mismatch) — **still no Pass/Fail ticked on the form**. Paperwork gap, not a testing gap.
- **15 & 22 May 2026 sessions were real, live client testing** with Mr. Tam's team, not internal-only demos. Confirmed working live: C1 cert create + PDF upload, apply to SO (full/partial/overlap coverage), C3 cert create, apply to SO with PO/appointment-letter, HS-code eligibility matching, submit-block when uncovered.
- **Live bugs, not yet confirmed fixed:** PDF-uploaded certs sometimes fail to show tax reference on finance side; stock out-of-stock notification not firing; logistics-officer role needs combined sales+logistics permissions to edit certs.
- **DN/Invoice stage NOT fully tested** — 15 May session stalled at DN creation because C3 line items need batch/serial assignment first. SO-level confirmed; DN/Invoice-level still open.
- [[Holsen SOW Feature Checklist]] FR-01–FR-05 (C3 delivery tracking, transaction reminders, unified filter view, export bundle reminder, DO sign-off workflow) marked **not started** as of 17 Mar — checklist predates the May UAT, needs line-by-line re-verification.
- **Commercial note:** Holsen pays 30% (not 50%) at Phase 1 closure because A3/C1C3 slipped — remaining balance contingent on A3 shipping. Track this liability.

**Bottom line:** SO-level C1/C3 is confirmed working via live client testing — don't report "not tested." Still open: (1) formal Pass/Fail sign-off, (2) DN/Invoice-level behavior, (3) two live bugs above, (4) FR-01–05 re-verification.

**Unresolved open questions (5 March meeting, never closed):**

- Jadual C2 submission frequency — 2 vs 3 months, contradicted in notes
- Definition of "C1 lumpsum" for reporting
- What "DO sign-off" UI mechanism means for C1/C3
- Full COA vs Masked COA — which customers get which
- Sticker label formats — blocked on client-provided templates

---

### 2. Batch Allocation

- Deferred alongside C1/C3 — it's the **data-model prerequisite** for both C1/C3 tagging and K1 traceability, not a standalone item. Treat batch allocation, C1/C3, K1 as **one build track**.
- **What it means:** lot/batch-level stock allocation to specific SO/DN lines — expiry-driven (FEFO) pick logic, restriction-status tagging per batch, lot-level traceability through to invoice.

**Currently live (basic layer only):**

- Batch number selection on DN line items, carried to Pick List on conversion — [[DN to Pick List - Batch Number Test Cases]] (HOL-LOG-DN-PL-001, -002).
- Confirmed 2026-08-03: batch number selectable at **both** SO and DN stage — confirmed live to Mr. Tam mid-session.
- ⚠️ "Batch→picklist carry" also listed under **B1–B8 open go-live bugs** — confirm if the carry-over is stable in production.

**Real business problem, unresolved (added 2026-08-03):**

- Holsen receives a single incoming batch (e.g. 10,000kg) that must split across **multiple customers**, some C3-exempt, some not.
- Nothing today stops a non-exempt customer's order from drawing down a batch past the point where a C3-exempt customer's reserved qty is protected.
- Mr. Tam: *"I don't know how to lock the quantity... no one else can touch the quantity besides that customer."* Current workaround: informal manual tracking outside MAIA.
- **Mr. Tam called this more critical than the other open C1/C3 bugs.** Mindhive confirmed on the spot this is unbuilt, slated for "next phase." **Treat as the single highest-priority batch-allocation gap for A3.**

**Also unresolved:** chatbot-side permission bug blocked Mr. Tam from creating a CPO/certificate on his own account (worked around with a temp "assistant admin" role mid-session, but PDF-cert-upload via chatbot still failed after). Mindhive committed to a fix "by next week" — **status not confirmed anywhere in this KB**, flag as open.

**Not built — deferred to Phase A3** (per [[Holsen SOW Feature Checklist]] §8–10, all unchecked as of 17 Mar):

| Feature | Detail |
|---|---|
| Advanced Batch Intake (§8) | Mandatory Batch/Lot Number + Expiry Date at goods receipt (drives FEFO); mandatory K1 Form Number for C3/imported goods; supplier COA PDF upload |
| Tax & Restriction Status tagging | Free / C1 / C3 Stock |
| C3 Allocation (§9) | Hard-locked to designated customer; non-C3 customers see "0 Stock Available"; `[v3]` admin-recorded movement log for Jadual C2 audit |
| K1 Traceability (§9) | Linked permanently to batch, auto-populated on DO and Invoice |
| Full picklist workflow `[v3]` | SO → picklist → Logistics confirms lot+qty → DO → invoice |
| Picklist UI `[v3]` | Lot dropdown with qty/expiry, remark field for discrepancies |

**Bottom line:** treat as **NOT started** against the live system — verify directly with dev before counting toward the A3 balance.

---

### 3. One DN → Many Invoices (Drawdown Billing)

- **Client scenario:** customer orders 1 tonne; full tonne delivered in one DN, invoiced incrementally as consumed — e.g. 4 invoices of 0.25 tonne each against one DN.
- **Status: ✅ Confirmed working** — verified by Gareth on Holsen prod (2026-08-02). MAIA supports multiple partial invoices against one DN.

**Gap — not reflected in product specs:**

- [[01 - MAIA Product/Product Specs/Blanket Order Spec|Blanket Order Spec]] only documents the *other* direction (one SO → many DNs).
- [[01 - MAIA Product/Product Specs/Delivery Note Spec|Delivery Note Spec]] F-02 flags "Multiple DNs from one Invoice?" as `[TO FILL]` — the reverse of what's now confirmed.
- **No written spec exists.** Confirmed by live testing only. Business rules (invoiced qty vs DN delivered qty tracking, running balance, when DN marked fully invoiced) are undocumented.

**Bottom line:** safe to confirm to Holsen as supported. Still worth a short spec so it's not just tribal knowledge.

---

### 4. Pricing & Tax Defaults by SKU Tag

Source: 2026-05-22 "Holsen C1/C3 Testing" transcript — corrects an earlier vague claim.

- **Trading-tagged items default to selling price = RM0** — by design (caused the B7 discount-display bug). Sales/Logistics must key in price manually, **unless a customer-specific price already exists** — MAIA checks that first.
- **Trading-tagged items default to 0% SST.**
- **Manufacturing-tagged items default to SST 10%.** Separate from A57 exemption (deferred) and C1/C3 exemptions (§1) — three mechanisms can touch the same invoice line.

**Bottom line:** don't assume a flat trading-vs-manufacturing split — 0%/10% is the *default*, C1/C3/A57 can override per customer/cert.

---

### 5. SQL Integration (Refresher Training, 5 Aug 2026)

Source: Granola "Holsen x Mindhive Refresher Training" (2026-08-05); Lark "5 Aug 26 - Holsen Training Summary and checklist" (node `HNofwKtrziLwQAk5DwMlFuTkgRe`).

**Attendees:** Ivan (Mindhive product/eng), Gareth, Wansin (incoming Holsen AM), Holsen sales + logistics reps, Ms. Wong (new, no Maya access yet).

**Key decision:** stabilize Holsen's SQL ops first → finalize MAIA↔SQL integration → then full team onboarding. Sequenced, not parallel.

**Architecture confirmed:**

- SQL hosted **on-prem by Holsen**; Maya keeps a mirrored copy on **AWS**.
- **SQL is system of record for inventory** — Maya pulls from SQL, not the reverse.
- **Two-way sync SQL↔Maya is the new standard** (past clients were one-way only) — Maya's credit-limit checks depend on this being current both ways.
- Holsen running **half-half**: old system (UBS) + SQL in parallel. Full historical/accounting data won't transfer until financial year-end close.
- Holsen backs up its own data to Google Drive; SQL backs up daily.
- **Unresolved risk:** if Holsen reinstalls/reformats their SQL server, unclear whether previously-pushed Maya data can be retrieved. Ivan: "not designed to do that but... we can make it work somehow."

**Document generation:**

- Poison form + special-case PDFs currently via MySPDF. Once SQL live, needs a **custom SQL-side document generator** — vendor may charge.
- Mixed sourcing (some docs from SQL, some from Maya) — open question, Ivan unsure, needs integration-team check.

**Batch/lot handling — the single biggest integration risk (Ivan).** Deferred pending real SQL data shape.

- Holsen **not using SQL's purchasing module** (PO→GRN) — still manual Excel. Ivan recommends adopting it: auto batch codes, no double entry, no inventory drift. Holsen reluctant — most imports are no-PO, contract-based.
- Batch Mfg Date format must be **DD/MM/YY**.
- A single incoming lot sometimes needs splitting into multiple batches.
- Goods receiving can have varied shelf life across shipments/batches of the same item.

**WhatsApp Business API — blocked.** IP/login-attempt errors unresolved. Going live on **Telegram** interim (@maia_holsen_bot). Holsen to screenshot the error state.

**Other gaps surfaced live:**

- Production not notified when a pick list is created — missing.
- Pick list: updating picked qty should also update batch info when unset.
- Batch code naming convention for C3 vs non-C3 — next scoping item, not decided.
- Role/user default flush needed for custom-role clients.
- User assignment by role/name/email/phone needs cleanup.
- Batch search by item + warehouse — not currently possible.
- Stock aging/expiry view exists (Telegram push) — logistics-only today, expandable on request.

**Bugs found live (unresolved as of 5 Aug):**

1. CPO 2026-142 — attachment missing on upload.
2. **Duplicate CPO bug** — ZH CPO 144/145: one PO upload created TWO CPOs.
3. LLM hallucination — order misclassified as "Holsen chemicals."
4. Batch not created — flagged mid-demo, unresolved at session end.

**Pending blockers before integration go-live:**

1. Server access + VPN for SQL integration — **requested, not yet granted** as of 5 Aug.
2. SQL vendor cost/feasibility check for poison-form auto-attach customization.
3. Holsen to confirm timeline once SQL ops stabilize.
4. Integrations group chat — **Wansin's action item**, unconfirmed.

**Next steps assigned:**

- Wansin: create integration group chat, loop in ledger/accounting, follow up Mr. Tam.
- Holsen: confirm server/VPN access; screenshot WhatsApp error; report back once SQL ops stabilized.

---

### 6. Open Bug List — Live Session Reports (3 Aug 2026)

Source: Lark "3Aug26 - Holsen Training Gaps" (node `PXwcwzr9tiy0oukc40vlvk6vgwha` — inaccessible via API as of 2026-08-07, read from local import copy; see Quick Start). Numbered items appear to be bug-tracker records — confirm they're already logged in the dev team's tracker.

| # | Issue | Expected behavior |
|---|---|---|
| #391 | Invoice PDF missing discount column | Should display discount column |
| #390 | SO PDF auto-populates discount when unit price updated | SO/SI PDF is customer-facing — should not display discount |
| #389 | DN blocked by false negative-stock error after stock/batch qty update | Should recognize updated qty, not throw false error |
| #388 | Stock entry missing UOM display/column | Should display UOM alongside item qty |
| #387 | Cannot view batch total qty when selecting batch in SO/PL | Should display current total qty when selecting |
| #386 | Multiple warehouses showing in Holsen instance | One warehouse only — name "Main warehouse," remove others |
| #385 | Picklist submission fails when picked qty ≠ SO qty | Should allow submission even if qty differs |
| #384 | Picklist stays in draft after submission error, on refresh | Should submit without "already submitted" error |

**Additional unnumbered items:**

- Biller contact doesn't change based on which sales user manages the customer.
- Sales user not assigned to customer ("Managed by" gap).
- Item missing from a submitted CPO.
- Copy fix: rename "Action" button to "Cancel."
- CPO auto-populates "SST 5%" even with no SST 5% data on raw PO.
- Customer-specific pricing lookup format needs more info — chatbot should return SKU, item name, customer pricing, discount, std price, enforced status together.
- DIY/Fixguru volume in DN: convert cm³ to m³ (cm values too large); update PDF + FE column units.

---

## Reading Order

*(In-folder docs only — read top to bottom, then verify against the live system and client.)*

| # | Doc | Why it matters |
|---|---|---|
| 1 | **CLAUDE** (Holsen folder) | Orientation map |
| 2 | [[Client Overview]] | Business context — contact fields are empty, chase this |
| 3 | Holsen Phase 1 Closure Backward Plan | Current operative plan — supersedes [[Holsen Phase 1 Timeline]] |
| 4 | Holsen Go-Live Action Plan - 2026-06-25 + Dev Brief - Holsen UAT Issues - 2026-06-25 | Most recent, most operationally critical |
| 5 | [[Holsen SOW Feature Checklist]] | Full scope/build checklist, incl. §8–10 batch allocation |
| 6 | [[Holsen Feature Requests - 5 March Training]] | C1/C3 definitions + open compliance questions |
| 7 | [[SOW for MAIA Holsen]] + [[Working Holsen]] | Full technical/operational spec across all phases |
| 8 | [[MAIA UAT Form - Holsen - 2026-03]] | Canonical test script incl. C1/C3 Tests 24–36 — get it signed |
| 9 | [[Config Overlay]] + `Role Permission/MAIA_Role_Permission_Holsen_Completed.xlsx` | Config and access reference |
| 10 | Holsen MAIA User Guide - Mr Tam Team | Client-facing operating model today |
| 11 | Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26 | Active, unresolved stock/batch ingestion work |
| 12 | Granola "Holsen x Mindhive Refresher Training" 2026-08-05 + Lark "5 Aug 26 Training Summary" | SQL integration decisions → [Deep Dive](#5-sql-integration-refresher-training-5-aug-2026) |
| 13 | Lark "3Aug26 - Holsen Training Gaps" (local: `Lark Wiki Import/3Aug26 - Holsen Training Gaps.md`) | Open bug list → [Deep Dive](#6-open-bug-list--live-session-reports-3-aug-2026) |
| 14 | `Meetings/` transcripts | Secondary/supporting evidence only |

---

## Action Checklist for Incoming PM

**This week:**

- [ ] Confirm live/production status directly with Holsen — ASAP
- [ ] Get real client contact details written into [[Client Overview]] — ASAP
- [ ] Get B1–B8 bug status from dev team — ASAP
- [ ] Chase stock-data-issue root cause + ETA — ASAP, before SQL sync
- [ ] Confirm Wansin's AM handover is actually done + her action items are moving — ASAP
- [ ] Get Mindhive server/VPN access to Holsen's SQL server — ASAP, blocks integration work
- [ ] Triage #384–#391 + unnumbered items against dev's actual tracker — this week
- [ ] Re-check the broken Lark link `wiki/PXwcwzr9tiy0oukc40vlvk6vgwha` before relying on the local copy long-term

**Before reporting Phase A3 progress:**

- [ ] Formally close UAT form Tests 1–36 (24–36 already live-tested, just needs sign-off)
- [ ] Verify C1/C3 DN/Invoice-level behavior — stalled on batch assignment, never re-tested
- [ ] Verify FR-01–FR-05 actual build status against live system — checklist likely stale
- [ ] Verify batch allocation (§8–10) actual build status against live system

**Before the SQL sync (Aug 2026):**

- [ ] Confirm all MAIA data is sync-ready (master data, inventory/stock, every doctype) before pushing to SQL on-prem
- [ ] Scope batch/lot handling against real SQL data shape — biggest integration risk, don't let it slip without a plan
- [ ] Decide on pushing Holsen toward SQL's purchasing module (PO→GRN)

**Before Finance rollout:**

- [ ] Clarify credit limit approval workflow with Mr Tam before enabling (routes to Mr Chin)

**Documentation debt:**

- [ ] Write a short spec for "one DN → many Invoices" (drawdown billing) — confirmed working, no written rules exist

---

## See Also

- [[Client Overview]]
- [[Holsen SOW Feature Checklist]]
- [[Holsen Feature Requests - 5 March Training]]
- [[SOW for MAIA Holsen]]
- [[Working Holsen]]
- [[MAIA UAT Form - Holsen - 2026-03]]
- [[Config Overlay]]
- [[Onboarding Status]]
- [[DN to Pick List - Batch Number Test Cases]]
- [[Known Limitations]]
- [[2026-03-16-ending-phase-agenda]]
- [[01 - MAIA Product/Product Specs/Blanket Order Spec|Blanket Order Spec]]
- [[01 - MAIA Product/Product Specs/Delivery Note Spec|Delivery Note Spec]]

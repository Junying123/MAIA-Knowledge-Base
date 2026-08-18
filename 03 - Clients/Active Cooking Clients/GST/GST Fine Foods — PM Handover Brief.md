---
owner: Gareth
status: draft
last_reviewed: 2026-08-07
client: GST Fine Foods
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/WulewfTOKizZPIkciF5lnHyNggH
---

> **Update 2026-08-07:** UAT (planned 4–6 Aug) has **not** happened — confirmed. Core infra (AWS, OpenAI key) is still not set up, which gates M1/instance deploy, which gates everything after it. See [Current Status](#current-status-2026-08-07) below before reading anything else in this brief as "in progress."

# GST Fine Foods — PM Handover Brief

> Handover reference for whoever picks up or reviews the GST Fine Foods account.
> **Read in this order:** Quick Start → Who's Who → Status at a Glance → Deep Dives → Action Checklist.
> Nothing here should be treated as confirmed until verified directly with the client or dev team — this account has a documented pattern of internal trackers going stale faster than the build moves.

---

## Quick Start

| | |
|---|---|
| **Client** | GST Fine Foods Sdn Bhd — frozen seafood B2B supplier/distributor (barramundi, tiger prawns, whole fish, salmon, squid, shellfish). Operations: Penang, KL (Rawang), Langkawi |
| **Folder** | `03 - Clients/Active Cooking Clients/GST/` |
| **ERP** | SAP Business One v10.00.919 — single company, branch-level data ownership. MAIA sits above it, never replaces it (LOC-01, LOCKED) |
| **Phase** | Core build, Phase 1 — **UAT confirmed not yet happened** (was planned 4–6 Aug 2026). Blocked on AWS + OpenAI key setup with GST, which gates M1 (instance deploy). See [Current Status](#current-status-2026-08-07). |

**Three things to sort out first:**

1. **AWS + OpenAI key setup with GST is the real blocker.** This is the confirmed reason M1 hasn't cleared and UAT hasn't happened — not a scope or decision problem, a scheduling one. Get this meeting on the calendar.
2. **Two blocking internal gates were still open three weeks into build** as of the last Scope Lock update (23 Jul): stock source of truth (NSD-06 — SAP live vs daily extract vs hybrid, overdue against the SOW's own pre-build gate) and a branch-decision integrity conflict (SC-07 — Penang-first was LOCKED 23 Jun, then still shown as an unconfirmed open item in the 7 Jul backward plan). Neither is a client-discovery question — both need a 30-second internal confirmation from whoever owns the tracker, then a client reconfirm if genuinely reopened. → [Deep Dive](#1-two-blocking-internal-gates)
3. **Client has not supplied PDF/document samples** (NSD-01) or sample data (see Current Status) — blocks document-format UAT for all 6 document types (QT, SO, DO, Invoice, Pick List, CN), and is the same open item since the original SOW discussion. Also unresolved: full Blanket Order/Agreement behaviour mapping (NSD-02) and SOA portal security settings (NSD-03).

**Sources for this brief:** `GST Fine Foods — Scope Lock.md` (v1, superseded), `Lark Wiki Export/Markdown/GST Fine Foods — Scope Lock v2.md` (authoritative, 2026-07-22), `GST Fine Foods — VoC Extraction.md` (2026-07-22), `Timeline/GST Phase 1 Backward Plan.md` (2026-07-07), `Lark Wiki Export/Markdown/22 June 26 - GST Forensic Account Dossier.md`, `Lark Wiki Export/Markdown/22 June 26 - GST Client Narrative.md`, `Lark Wiki Export/Markdown/GST FINE FOODS SDN. BHD. - MAIA Setup Guide.md`, `7May26 - GST X MAIA Gaps - Sheet1.csv`, all in this folder. Lark wiki space (source of truth for the newest docs): `https://eg69120xnei.sg.larksuite.com/wiki/SEwuwHXFMi18yGkdSnulSL2sguh`.

---

## Current Status (2026-08-07)

> Verbal/live status from Gareth, not yet reflected in the Scope Lock, backward plan, or CLAUDE.md — those documents are stale against this. Update them once this brief is reviewed.

| Track | Status | Note |
|---|---|---|
| **Meta Business (WABA) account** | ✅ **Verified successfully** | GST actively self-managing this setup (per LOC-06/the WABA guide handed to them) — just cleared Meta's verification. First genuinely-closed client-side infra dependency |
| **AWS account access** | ⬜ Not set up | Still gates M1 (instance deploy) per the backward plan. This is the real reason UAT (planned 4–6 Aug) has not happened — core build infra isn't live yet |
| **OpenAI API key** | ⬜ Not set up | Same gate as AWS — both were flagged "Gareth to schedule meeting with GST" in the original backward plan (M0/M1) and still aren't closed |
| **Sample Data Checklist** | ⬜ Not started, needs a call | Client has a dedicated wiki node for this (`DDMMMYY - Sample Data Checklist`) that's still template-titled, meaning GST hasn't filled it. **Action: call GST to prepare/walk through sample data.** This overlaps with — but is not identical to — NSD-01 (document format PDF samples); this is item master / order data |
| **SAP B1 integration** | 🟡 In progress | Still needs direct follow-up with **Azib** (SAP vendor PIC) and **Jermaine** (Mindhive dev) — no fresh confirmation since the 19 May SAP vendor meeting notes |
| **Payment read query (new, unscoped)** | ⬜ Pending GST | GST needs to provide the payment read query/spec so Azib can pull payment entry data out of SAP B1. Not yet in the Scope Lock — this is a new, undocumented dependency, add to NSD register when scope-locked next |
| **Macrofrozen-style pick flow (new, unscoped)** | ⚠️ Flagged, not confirmed | Awareness that GST may run a "macrofrozen" flow — **picked actual weight** (not ordered/nominal weight) driving pick-list creation. If real, this changes SL-13's actual-picked-qty capture (NSD-07) from an edge case to the primary flow for frozen items — needs direct confirmation with GST, not assumed from the Macrofood pattern reference in the backward plan |
| **Blanket Order + Branch Doctype delivery dates** | ⬜ Needs tech-lead alignment | Backward plan's Customisations table has Blanket Order "In Progress" (was 24–28 Jul, now overdue) and Branch Doctype "Scoping" (was 10–14 Jul, also overdue). **Action: liaise with all tech leads to set a real delivery date for GST** — both dates in the current tracker have already passed without a recorded outcome |

---

## Who's Who at GST

| Name | Role | Notes |
|---|---|---|
| **Goh Soo Chin** | Boss / CEO, Operations | CONFIRMED. UAT sign-off authority per delivery tracker. Direct, responsive WhatsApp voice — signed proposal, follows up unprompted (VOC-025). Also the one who asked for sales check-in/location reporting (2026-05-07/08) and never got a formal close-out (NSD-05) |
| **Tim Wong** | Operations Manager | CONFIRMED |
| "Tim" (IT) | GST IT | BELIEVED, **unresolved whether distinct from Tim Wong** — RG attendee list names both "Tim Wong (CEO/HOD)" and "Tim (IT)" separately; could be two people sharing a first name or a transcription artefact. Never resolved |
| **Joey Ong** | Sales PIC / working implementation PIC | LOCKED as the day-to-day coordination owner (LOC-05). SOW spells it "Joey Pong" — treated as transcription variance, same person |
| **Miss Lee** | Finance PIC, Penang | CONFIRMED identity, but **no individually attributable quote recovered anywhere in the corpus** — her voice is folded into "Finance Workflow" without a direct anchor |
| Jude | GST IT | BELIEVED — attendee list only, no direct statement recovered |
| **Jun** | GST IT/technical staff | CONFIRMED — explicitly marked "(GST)" in the SAP vendor meeting, the clearest direct technical voice in the corpus |
| Sharon, Ling, Hasma | Possibly GST IT, possibly SAP-vendor-side | Unresolved — unmarked in a three-way GST/Mindhive/SAP-vendor call, could belong to either non-Mindhive party |
| Teoh Le Ying | GST CEO's spouse | BELIEVED — named in contact table only, no direct statement recovered |
| **Azib Iqbal** | SAP Vendor integration PIC | CONFIRMED, explicitly **not GST** — vendor-side technical input, not customer voice |

**Vendor-side (not GST staff):** Gareth Ng (Mindhive PM), Ivan (ran shop-floor visit, authored the most detailed RG notes — several locked scope items (SL-14 through SL-19) trace only to his notes and nowhere else), Jermaine (Mindhive dev, SAP integration).

**Coverage gap to flag:** frontline sales coordinators (the people actually keying orders daily) and warehouse/logistics staff have **zero direct voice** anywhere in this corpus — every pain point attributed to them is leadership's description, not their own words. Treat any "coordinator pain" claim as BELIEVED at best. See VoC Extraction Phase 0 for full detail.

**System of record:** SAP Business One — item master, customer master, stock, pricing, accounting, documents. MAIA is a coordination/workflow layer on top, never an independent conflicting master (LOC-01, LOC-02, LOCKED).

---

## Status at a Glance

### ✅ Locked & Built (or building)

| Item | Detail |
|---|---|
| MAIA-above-SAP operating model | LOCKED — SAP remains system of record (LOC-01, LOC-02) |
| Multi-format order/quotation intake | LOCKED (SL-01) — WhatsApp text, handwritten notes, Excel RFQ; user confirms every extracted field |
| Item suggestion via RAG/item-master retrieval | LOCKED (SL-02) — never silently substitutes |
| SAP-style Blanket Order/Agreement support | LOCKED (SL-03), build "In Progress" 24–28 Jul per backward plan — NSD-02 (full behaviour mapping) still open |
| Credit approval workflow | LOCKED (SL-04) — approvers act inside MAIA, decision trail recorded |
| Payment proof upload → draft payment entry | LOCKED (SL-05) |
| Invoice/document retrieval | LOCKED (SL-06) |
| Password-protected SOA portal | LOCKED (SL-07), built this cycle per 7 Jul client update — NSD-03 (security settings) still open |
| Client document format matching (Crystal Reports parity) | LOCKED (SL-08), **blocking** — NSD-01 (samples) still open |
| Inventory visual cue on documents | LOCKED (SL-09) |
| Order listing / fulfillment % / aging | LOCKED (SL-10) |
| MAIA→SAP document writeback | LOCKED (SL-11) |
| Movement-based slow-stock reports | LOCKED (SL-12) — batch/expiry alerting explicitly OUT (OOS-04) |
| Consolidated pick list, warehouse team-split | LOCKED (SL-13), **team-split already built**; actual-picked-qty capture and multi-SO DN split still open (NSD-07, NSD-08) |
| Item description/name override (transaction-level) | LOCKED (SL-14) — newly surfaced 2026-07-22, was previously untraced |
| Customer preference/processing-instruction capture | LOCKED (SL-15) — Phase 1 is free-text + RAG suggestion only; structured dropdown fields explicitly Phase 2 |
| DO/Invoice shared document-numbering | LOCKED (SL-16) — matches GST's existing customer-facing numbering workaround |
| Credit note/return matching to invoice | LOCKED (SL-17), NSD-09 (SAP writeback mechanics) open |
| Role-based dashboards (sales/logistics/finance/management) | LOCKED (SL-18), NSD-10 (budget metric source) open |
| Out-of-stock substitution advisory | LOCKED (SL-19), NSD-11 (shared vs separate matching engine) open |

### ⚠️ Needs Scoping / Not Yet Closed

| Item | Blocking? |
|---|---|
| **NSD-01** — Document format samples (all 6 types) | YES — blocks document UAT |
| **NSD-02** — Blanket Order/Agreement full behaviour mapping | YES — blocks pricing/order accuracy |
| **NSD-03** — SOA portal security settings (expiry, password method, revocation, exposed docs) | YES — blocks production SOA release |
| **NSD-04** — Inventory sync cadence | YES — blocks inventory-visibility acceptance; GST's own IT team engaged directly, no number ever pinned down |
| **NSD-05** — Sales check-in/customer-visit-location request | NO for Phase 1 core, YES for expectation management — never formally declined/deferred/quoted, silence since 2026-05-08 |
| **NSD-06** — Stock source of truth (SAP live/extract/hybrid) | YES — overdue against the SOW's own pre-build gate, unresolved as of 23 Jul |
| **NSD-07 / NSD-08** — Pick-list edge cases (low-stock exception, multi-SO DN split) | NO for MVP, YES before UAT sign-off on SL-13 |
| **NSD-09** — Credit note/return SAP writeback mechanics | NO for core flow, YES before SL-17 passes UAT |
| **NSD-10** — Sales-vs-budget dashboard metric source | NO for MVP, YES before SL-18 passes UAT |
| **NSD-11** — Substitution engine architecture | NO |
| **NSD-12** — Item master enrichment scope (photos, public links) | NO — direction itself not yet agreed, don't treat as locked |
| **SC-07** — Branch decision integrity (Penang-first LOCKED 23 Jun vs unconfirmed 7 Jul) | Internal bookkeeping question, resolve before treating LOC-03 as settled |

### 🚩 Scope-Discipline Risk (not a scope-definition gap)

**SUP-05** — Three Phase-2-adjacent items (SOA build, an "Aging/Slow-Moving Alert," and "Item Name Override") were shown **"In Progress" in the July calendar**, during Phase 1's own core build window, ahead of the Phase 1 UAT gate — with **no evidence GST agreed to this sequencing**. Per the signed SOW, Phase 2 customisations are scoped, built, and paid for only after Phase 1 go-live. All three items now trace to real requirements (not invented), so this is a sequencing/expectation-management risk, not a scope-provenance one — but it needs a deliberate answer, not silence.

### ❌ Out of Scope (confirmed, do not rebuild)

| Item | Substitute in scope |
|---|---|
| CPRN / pre-confirmation stock reservation (OOS-01) | Reserved-quantity visibility inside normal quotation/SO/DN flow (SL-09) |
| GST's custom SAP stock-transformation workflow (OOS-02) | MAIA syncs post-transformation inventory only, does not model the transformation itself |
| SAP item master/UOM reconfiguration (OOS-03) | MAIA syncs item master as-is |
| Batch-number/expiry-date alerts (OOS-04) | Movement-based slow-stock visibility (SL-12) |
| Excel planning/purchasing calculator (OOS-05) | Not evidenced as GST-requested; internal scoping call, not a client cut |
| Vendor custom UDF/UDH development (OOS-06) | Raised and scoped separately if it becomes a blocker |

---

## Deep Dives

### 1. Two Blocking Internal Gates

**NSD-06 — Stock source of truth.** The SOW frames "confirm SAP-live vs daily-extract vs hybrid" as a **pre-build gate**. As of the 23 Jul Scope Lock, it was still unresolved — three weeks after core build (M1–M3) began. This is not a nice-to-have; every business-rule check (credit block, stock overselling prevention, inventory visual cue) depends on knowing which stock number is authoritative. Resolve this first, before checking anything else.

**SC-07 — Branch decision integrity.** Scope Lock v1.2 (23 Jun) declared "Phase 1 is Penang-first" LOCKED (LOC-03). The 7 Jul backward plan still lists "confirm which branch goes live first" as an unchecked open item. Two explanations, equally plausible: the backward plan's checklist is stale and was never updated after the June lock, or the branch question was genuinely reopened and the Scope Lock was never updated to match. **This needs a 30-second internal confirmation from whoever owns the tracker — not a new client conversation** — before treating LOC-03 as settled.

---

### 2. Document Format Fidelity (Crystal Reports parity)

GST's most emotionally loaded requirement in the entire VoC corpus: every generated document (QT, SO, DO, Invoice, Pick List, CN) must visually and structurally match their existing Crystal Reports output — "non-negotiable" per the SOW itself (§2.3). GST's own language on this and on pricing (VOC-012, VOC-013, VOC-018, VOC-020) is unusually precise and confident — a signal they already have working systems and want them **faithfully reproduced**, not improved on unasked. A generic-looking PDF risks reading to GST's own customers (hotels, restaurants) as MAIA cutting corners, not just an internal preference (VoC Phase 5 inference).

**Status:** LOCKED (SL-08), but **blocking** — GST has not yet supplied sample formats for any of the 6 document types (NSD-01). This is the single item their own top stated priority depends on validating, and they haven't delivered the input it needs. Chase this directly, don't wait for it to surface at UAT.

Related and easy to conflate but distinct: **SL-16** (DO/Invoice shared numbering — GST's own workaround to reduce customer confusion, must be preserved exactly) is a numbering-scheme requirement, not just a layout detail under SL-08.

---

### 3. Pricing — Blanket Agreement Fidelity

GST prices by customer segment via 4 price tiers using SAP Blanket Agreements, **not** ad hoc "special pricing" — the customer's tier decides the price, not the salesperson (VOC-012, VOC-013, both **CONFIRMED via direct GST quote**, the highest-confidence evidence in the whole VoC corpus). This is the one area where GST spoke with the most precision and least hedging — a strong signal that pricing errors are a low-tolerance failure mode for this account.

**Status:** LOCKED (SL-03), build "In Progress" 24–28 Jul per the backward plan's Customisations table. **Do not confuse this with CPRN (OOS-01)** — earlier drafting of the Scope Lock conflated the two; they are unrelated. NSD-02 (full field/lifecycle/writeback mapping against GST's actual SAP behaviour) is still open and blocks pricing/order accuracy sign-off.

---

### 4. Stock Overselling Prevention

The single highest-stakes pain point per the VoC extraction's own salience ranking — described independently in both secondhand vendor narration and the direct RG-session transcript (VOC-003, CONFIRMED mechanism). Root cause: no real-time stock reservation today, so two salespeople can commit the same physical stock. This maps to SL-09 (inventory visual cue) and is downstream-dependent on **NSD-06 (stock source of truth)** — you cannot claim to prevent overselling if the authoritative stock number itself isn't settled.

---

### 5. Phase-2 Scope Creeping Into Phase 1 (SUP-05)

Three items — SOA portal, an "Aging/Slow-Moving Alert," and "Item Name Override" — were shown "In Progress" in July's build calendar, inside the Phase 1 window and ahead of Phase 1 UAT. The signed SOW is explicit that Phase 2 customisations are separately scoped, built, and paid for **after** Phase 1 go-live. No source shows GST agreeing to this sequencing.

All three items are now confirmed as tracing to real requirements (Item Name Override was previously flagged as having no scope trace at all — that was wrong; Ivan's RG notes document it directly, now formally SL-14). So this isn't invented scope. It's a **sequencing and expectation-management** risk: if GST discovers mid-UAT that "extra" work was done ahead of what they were told was Phase 1, or conversely that they're being asked to pay Phase 2 pricing for something already built, either direction reads badly. Decide and communicate the sequencing deliberately — don't let it surface as a surprise.

---

### 6. Unclosed Loops With the Client

Four items the VoC extraction explicitly flags as needing to be **reported back to GST**, not just resolved internally:

1. Confirm directly with Soo Chin/Joey Ong whether deep RFQ/substitution matching (part of the paid Phase 2 bundle) is still expected — it's currently marked internally Out of Scope with no record GST was told.
2. Tell GST plainly that Phase-2-adjacent items (SOA/Aging/Item Name Override) are being built now, ahead of their contracted Phase 1-UAT gate, and confirm this sequencing is actually what they want.
3. Close the loop on stock source-of-truth and branch confirmation — both internal decisions with client-facing implications.
4. Close the loop with Soo Chin specifically on the sales check-in/customer-visit-location request (VOC-027, NSD-05) — answered informally in the moment ("MAIA doesn't have this") but never formally closed as declined, deferred, or quotable as a CR. Silence since 2026-05-08 risks reading as ignored.

---

## Reading Order

| # | Doc | Why it matters |
|---|---|---|
| 1 | CLAUDE.md (GST folder) | Orientation — **stale, dated 2026-07-06**, still shows "stalled since kickoff." Do not trust its status table; use the Scope Lock v2 and backward plan instead |
| 2 | [[Timeline/GST Phase 1 Backward Plan]] | Milestone map and target dates (UAT 4–6 Aug, Go-Live 6–11 Aug, Training 12–14 Aug) — **confirm current status against this before anything else** |
| 3 | `Lark Wiki Export/Markdown/GST Fine Foods — Scope Lock v2.md` | Authoritative locked scope — supersedes both v1 and Lark v1.2; read the Changelog and Bottom Line sections first |
| 4 | [[GST Fine Foods — VoC Extraction]] | Root-cause read on what GST actually needs vs what's assumed — read Bottom Line and Close the Loop sections first |
| 5 | `Lark Wiki Export/Markdown/22 June 26 - GST Forensic Account Dossier.md` | Cross-source synthesis that surfaced NSD-05 (sales check-in request) — the source Scope Lock v2 cites for several new items |
| 6 | `Lark Wiki Export/Markdown/22 June 26 - GST Client Narrative.md` | Client-facing story — use for stakeholder framing |
| 7 | `Lark Wiki Export/Markdown/GST FINE FOODS SDN. BHD. - MAIA Setup Guide.md` | Environment/infra setup reference |
| 8 | `7May26 - GST X MAIA Gaps - Sheet1.csv` | Internal delivery tracker — cross-reference against Scope Lock v2's reconciliation notes before trusting any single line in isolation, it's been shown stale before |
| 9 | `GST SAP Vendor × Mindhive — Meeting Notes.md` | Primary technical evidence — GST's own IT team (Jun) speaking directly about SAP integration mechanics |
| 10 | `Requirement Gathering Output - GST Fine Foods - 2026-05.md` | Original RG synthesis, PM-mediated |

---

## Action Checklist for Incoming/Reviewing PM

**This week — highest priority:**

- [x] ~~Confirm what actually happened with the planned 4–6 Aug UAT window~~ — **Confirmed 2026-08-07: UAT has not happened.** Root cause: AWS + OpenAI API key setup with GST still not done, so M1 (instance deploy) hasn't cleared. Everything downstream of M1 is on hold until this closes.
- [ ] Schedule the AWS + OpenAI key setup meeting with GST — this is the actual blocker holding back UAT, not a scope question
- [ ] Call GST to prepare sample data against the Sample Data Checklist node (still template-titled/unfilled)
- [ ] Follow up directly with Azib (SAP vendor) and Jermaine (Mindhive dev) on SAP B1 integration progress — no fresh status since 19 May
- [ ] Get GST to provide the payment-read query/spec so Azib can pull payment entry data from SAP B1 (new, currently unscoped dependency)
- [ ] Confirm with GST whether a macrofrozen-style actual-weight-picked flow applies to their pick-list creation — if yes, this reframes SL-13/NSD-07 from edge case to primary flow, not just a nice-to-have
- [ ] Liaise with all tech leads to set real delivery dates for Blanket Order and Branch Doctype — both dates in the current backward plan (24–28 Jul, 10–14 Jul) have already passed with no recorded outcome
- [ ] Resolve NSD-06 (stock source of truth) and SC-07 (branch decision) internally — both are 30-second bookkeeping confirmations, not client discovery, but both are load-bearing for everything downstream

**Before UAT (or before reporting UAT results, if it already happened):**

- [ ] Get GST to supply sample formats for all 6 document types (NSD-01) — their own top stated priority (Crystal Reports fidelity) can't be validated without it
- [ ] Walk through SAP Blanket Order/Agreement behaviour with GST to close NSD-02
- [ ] Confirm SOA portal security settings (NSD-03) before any production release
- [ ] Confirm acceptable SAP↔MAIA inventory sync cadence (NSD-04) with Jun/GST IT — "almost live" is not a testable spec

**Client communication debt (close these loops explicitly, don't let silence read as neglect):**

- [ ] Tell GST plainly whether Phase-2-adjacent items (SOA/Aging/Item Name Override) being built ahead of the Phase 1 gate is intended, and get their sign-off on the sequencing (SUP-05)
- [ ] Close the loop with Soo Chin on the sales check-in/customer-visit-location request (NSD-05) — declined, deferred, or CR, pick one and tell her
- [ ] Confirm directly whether deep RFQ/substitution matching is still expected as part of the paid Phase 2 bundle, given it's internally marked Out of Scope with no record GST was told

**Before UAT sign-off on specific items:**

- [ ] Resolve pick-list edge cases — low-stock exception (NSD-07), multi-SO DN split (NSD-08) — before SL-13 can pass
- [ ] Map credit note/return SAP writeback mechanics (NSD-09) before SL-17 can pass
- [ ] Confirm budget-metric source/cadence (NSD-10) before the management dashboard (SL-18) can pass

**Documentation debt:**

- [ ] Update `CLAUDE.md` in this folder — it's dated 2026-07-06 and still reads "stalled since kickoff," which contradicts the Scope Lock v2's "In-build" status three weeks later
- [ ] Update `Timeline/GST Phase 1 Backward Plan.md` once the actual UAT outcome is known — it currently only shows the plan, not any result

---

## See Also
- `Lark Wiki Export/Markdown/GST Fine Foods — Scope Lock v2.md`
- [[GST Fine Foods — VoC Extraction]]
- [[Timeline/GST Phase 1 Backward Plan]]
- [[GST Fine Foods Customer Narrative]]
- [[SOW for MAIA GST Fine Foods]]
- [[Requirement Gathering Output - GST Fine Foods - 2026-05]]
- [[GST SAP Vendor × Mindhive — Meeting Notes]]

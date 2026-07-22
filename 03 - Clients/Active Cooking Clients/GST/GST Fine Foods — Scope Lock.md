---
owner: Gareth
status: draft
last_reviewed: 2026-07-22
client: GST Fine Foods
lark_url:
---

# GST Fine Foods — Scope Lock v1

**Date:** 2026-07-22
**Build stage:** In-build. Per the backward plan, M0 (Requirements & Scope Lock) closed 2026-06-29; M1 (Environment/Config) and M2 (SAP Data Ready) are in progress since 2026-07-10; M3 (Internal QA) runs through 2026-07-31; UAT is planned 2026-08-04–06 `[BP | 2026-07-07]`. **This is the first formal Scope Lock document for this account** — no prior version exists to diff against, even though the backward plan already labels a scope-lock milestone "Done." This document reconciles that gap.

---

## 1. Source Manifest

| Source | Type | Date / range | Processed in full | Citation key |
|---|---|---|---|---|
| SOW for MAIA GST Fine Foods.md | Contractual draft (unsigned — see gap below) | last_reviewed 2026-05-20 | Yes | `[SOW \| §x]` |
| GST Fine Foods × MAIA Proposal v2 [SIGNED].md | Signed proposal | dated 2026-03-12 | Yes | `[PR \| §x]` |
| GST Fine Foods Customer Narrative.md | Client-facing narrative | — | Yes | `[CN \| §x]` |
| Requirement Gathering Output - GST Fine Foods - 2026-05.md | Internal PM synthesis of 2026-05-04 RG session | meeting 2026-05-04 | Yes | `[RG \| §x]` |
| GST Fine Foods — GTM Brief Context and Unclear Items.md | Internal synthesis of 2026-04-27 GTM brief | meeting 2026-04-27 | Yes | `[GTM \| §x]` |
| GST SAP Vendor × Mindhive — Meeting Notes.md | Meeting notes | 2026-05-19 | Yes | `[SAPV \| 2026-05-19]` |
| Meetings/2026-05-19 GST SAP Vendor x Mindhive Transcript.md | Raw transcript | 2026-05-19 | Grepped for scope/branch/CPRN keywords, no new signal found beyond `[SAPV]` | `[SD \| 2026-05-19]` |
| Meetings/2026-05-19 GST — WABA Account Setup Transcript.md | Raw transcript (garbled ASR) | 2026-05-19 | Skimmed — Meta/WABA account mechanics only, no scope content | `[SD \| WABA \| 2026-05-19]` |
| Fireflies `Gst-Requirements-gathering` (01KQRE680PJYGW41G9H0FTV1JY) | Raw transcript | 2026-05-04 | Skimmed; confirmed to be the Granola source behind `Meetings/2026-05-04 ... Requirements Gathering Transcript.md`, which `[RG]` already synthesizes | `[FF \| 5/4 session A]` |
| Fireflies `GST-Fine-Foods-4May26-Req-Gat-m4a` (01KQRVMKK16H2K9AVDKD9SE25R) | Raw transcript (heavy ASR garbling) | 2026-05-04, later timestamp same day | Read ~280 lines; confirmed same requirements-gathering session (fish cutting, pricing tiers, blanket agreements, pre-order-without-PO all match `[RG]` content) — corroborating duplicate, not new signal | `[FF \| 5/4 session B]` |
| 7May26 - GST X MAIA Gaps - Sheet1.csv | Internal delivery tracker, 109 action items | as of 2026-05-07 | Yes | `[CSV \| row #]` |
| Timeline/GST Phase 1 Backward Plan.md | Internal delivery plan | last_reviewed 2026-07-07 | Yes | `[BP \| 2026-07-07]` |
| GST Lark Wiki/GST WhatsApp Group.md | WhatsApp export, GST-side (Soo Chin, sales PIC) | from 2026-04-13 | Skimmed opening (proposal handoff, kickoff scheduling) | `[WA \| date \| person]` |

**Not available / referenced but absent:** Forensic Account Dossier (none exists for GST — not required, per skill). Dedicated kickoff-notes file (kickoff context folds into `[GTM]`). Full SAP custom/UDF field list from GST IT (flagged open in `[SAPV]` and `[CSV]`, not yet delivered as of last-reviewed dates).

---

## 2. Scope Lock Summary (Dashboard)

| Status | Count |
|---|---|
| LOCKED | 15 |
| LOCKED (SUPERSEDED) | 1 |
| AGREED IN PRINCIPLE — NOT LOCKED | 4 |
| NEEDS SCOPING | 7 |
| OUT OF SCOPE | 6 |

### 🔴 Blocking items (cannot build safely past these)

1. **SL-16 — Stock source of truth (SAP live vs daily extract vs hybrid)** still unresolved as of the 2026-07-07 backward plan, even though core build (M1–M3) started 2026-07-10. SOW explicitly requires this decided *before* Phase 1 build starts `[SOW | §6]`. Build is currently ahead of this decision.
2. **SL-17 — First branch (Penang vs KL)** still shows as an open backward-plan checkbox as of 2026-07-07, despite conflicting signals: the signed proposal's commercial baseline is priced around KL `[PR | §9]`, while the RG session names Penang as "Phase 1 target" `[RG | E2E Workflow]`. Branch identity affects the Branch/Outlet doctype build (SL-25) and data seeding.
3. **SL-18 — CPRN / Blanket Order approval model** (owner-releases / manager-approves / purchasing-controls) is undecided in every source that discusses it `[SOW | §3.1.4]` `[GTM | §4]`, yet the backward plan shows the Blanket Order doctype **already "In Progress" 24–28 Jul** `[BP | Customisations table]` — building ahead of a decision the SOW calls a hard blocker.
4. **SL-9 — Full SAP custom/UDF field list** not yet delivered by GST IT `[SAPV | Key Point B]` `[CSV | Pre-Phase 1 Gate #15-16]` — blocks the custom-endpoint half of the integration and final migration scope sign-off.

### Top items to confirm with client, priority order

1. Stock source of truth (SL-16) — blocking, overdue against SOW's own gate.
2. First branch: Penang or KL (SL-17) — blocking, overdue.
3. CPRN approval model (SL-18) — blocking for the Blanket Order build already underway.
4. Deep RFQ / cRFQ matching logic status (SL-20) — internal tracker marked it "Out of Scope" with no evidence GST was told or agreed; this is a paid SOW line (Customisation 1, part of the RM7,500 bundle).
5. Whether Phase 2 items (CPRN, SOA, Aging Alert) being built now, ahead of Phase 1 UAT and its payment gate, has actually been agreed with GST or is a delivery-team sequencing call GST doesn't know about (see Supersessions Log).

---

## 3. Locked Scope (Build-Ready)

**SL-1 — RFQ / order intake via WhatsApp**
Status: LOCKED. Source: `[SOW | §2.1.1]` `[PR | §4]` `[RG | Captured Requirements]`.
Flow: Sales staff receive customer PO/RFQ via WhatsApp (freeform text or forwarded Excel) → MAIA captures and structures the request for review.
Acceptance criteria: MAIA parses a forwarded message/Excel into a structured draft; 100% of test-set intakes produce a reviewable draft `[SOW | §8.7]`.
Confidence: HIGH.

**SL-2 — Product matching (basic item lookup)**
Status: LOCKED. Source: `[SOW | §2.1.1]` `[PR | §4]`.
Flow: Customer wording compared against GST's SAP item master; system surfaces likely matches for staff confirmation. Deeper cross-reference/substitution logic is explicitly excluded here — see SL-20.
Acceptance criteria: Product-match suggestion acceptance rate ≥80–85% on UAT sample `[SOW | §8.7]`.
Confidence: HIGH.

**SL-3 — Standard Sales Order creation**
Status: LOCKED. Source: `[SOW | §2.1.1]` `[BP | M3 checklist item 8]`.
Flow: Staff confirm matched items and business-rule checks → MAIA creates SO → pushes to SAP B1.
Acceptance criteria: SO creation time reduced ≥50% vs current process `[SOW | §8.7]`; SAP sync accuracy 100%.
Confidence: HIGH.

**SL-4 — Pre-order stock availability check**
Status: LOCKED (mechanics), source of truth NOT locked — see SL-16. Source: `[SOW | §2.1.1]` `[RG | Captured Requirements — Sales Workflow]`.
Flow: At SO creation, MAIA checks stock against the agreed inventory source and shows raw-to-processed conversion estimate where relevant.
Acceptance criteria: Stock answer reliability ≥95% vs agreed source `[SOW | §8.7]`.
Confidence: MED — mechanics agreed, but the underlying source (SL-16) is still open.

**SL-5 — Customer pricing via SAP Blanket Agreement**
Status: LOCKED. Source: `[RG | Captured Requirements — Sales Workflow]` `[SAPV | Key Point A]` `[CSV | SAP Integration — Read #6]`.
Flow: MAIA pulls the customer's SAP Blanket Agreement price on quotation/SO creation; auto-populates rather than defaulting to standard price list.
Acceptance criteria: Auto-pricing hook fires correctly on every QT/SO for a customer with an active Blanket Agreement (build item, `[CSV]` row, currently "Scoping").
Confidence: HIGH on requirement; MED on build completeness (still in progress per CSV).

**SL-6 — Credit limit check + approval routing**
Status: LOCKED. Source: `[SOW | §2.1.1]` `[RG | Captured Requirements — Finance Workflow]` `[CSV | Core MAIA Extension #5 — Completed]`.
Flow: SO creation checks credit limit; breach auto-blocks and routes to the credit controller for approval; approval authority is held by named individuals, already confirmed with GST `[CSV | Pre-Phase 1 Gate #13]`.
Acceptance criteria: Approval routing success rate 100% `[SOW | §8.7]`.
Confidence: HIGH — this item is marked Completed in the delivery tracker.

**SL-7 — Payment slip capture + finance approval routing**
Status: LOCKED. Source: `[SOW | §2.1.1]` `[PR | Scenario C]` `[CSV | Core MAIA Extension #6 — Completed]`.
Flow: Staff forward a payment slip into MAIA; system extracts visible details (amount, date, reference); routes as a draft payment entry to finance for review before close-out.
Acceptance criteria: Payment proof → draft payment entry workflow functioning; finance ToDo notification fires `[CSV | Notifications #3 — Completed]`.
Confidence: HIGH.

**SL-8 — Crystal Reports-aligned document generation**
Status: LOCKED (requirement), build NOT yet started for most document types. Source: `[SOW | §2.3]` `[CN | Feature 4]` — described as "non-negotiable" quality bar.
Flow: All 6 document types (QT, SO, DN/DO, Invoice, Pick List, CN) must visually and structurally match GST's existing Crystal Reports output, for both Penang and KL branches `[CSV | PDF Generation section]`.
Acceptance criteria: Crystal Reports layout match 100% (human review) `[SOW | §8.7]`; GST sign-off obtained on all 6 layouts before UAT `[CSV | PDF Generation #7]`.
Confidence: MED — requirement is clear and locked, but PDF samples for validation were still "Not Started" to be provided by GST as of the CSV, and build status for 5 of 6 document PDFs is "Not Started."

**SL-9 — SAP B1 integration, READ path**
Status: LOCKED (architecture), build in progress. Source: `[SOW | §2.4]` `[SAPV | Key Point A, C]` `[BP | M2]`.
Flow: MAIA → middleware (JWT-authenticated, hosted on GST's intranet) → SAP B1, using the standard Service Layer first; custom endpoints only where the standard layer can't expose GST's UDFs. Pulls: item master, customer master, stock, price lists, Blanket Agreements, credit standing.
Acceptance criteria: Integration reconciliation test — master data accuracy 100% `[SOW | §8.7]` `[CSV | SAP Integration Read #8]`.
Confidence: MED — architecture and phased approach are mutually agreed with the SAP vendor `[SAPV]`, but full custom-field mapping (needed for phase 2 of the integration) is still outstanding.

**SL-10 — SAP B1 integration, WRITE path**
Status: LOCKED (architecture), build not started per CSV. Source: `[SOW | §2.4]` `[CSV | SAP Integration Write, all rows Not Started]`.
Flow: On confirmation in MAIA, push Sales Orders, Invoices, Delivery Notes, Credit Notes, and Payment Entries to SAP B1. MAIA is the source of truth for these pushes `[CSV | row 1]`.
Acceptance criteria: Document push accuracy 100%, tested end-to-end across all 5 write paths `[SOW | §8.7]`.
Confidence: MED — design agreed, zero rows built yet per the 7 May tracker (status may have since progressed; backward plan says M2 write flows are "In Progress" as of 2026-07-07, but per-path granularity is only tracked in the CSV, which is 2 months stale — flag as a freshness gap, not a scope gap).

**SL-11 — Daily digests**
Status: LOCKED. Source: `[SOW | §2.1.1]` `[BP | M3 checklist item 14]`.
Flow: Digest of unclosed SOs, outstanding payment slips, and flagged stock, delivered on a recurring basis.
Acceptance criteria: Digest content matches the three named categories; verified live in M3 internal QA.
Confidence: HIGH.

**SL-12 — Outdoor salesperson mobile invoice retrieval**
Status: LOCKED. Source: `[RG | Captured Requirements — Sales Workflow]` `[CSV | Core MAIA Extension #7 — Completed]`.
Flow: Salesperson searches and retrieves any invoice from MAIA on mobile, without VPN, and forwards directly to the customer — replacing the current WhatsApp-to-office-and-back loop `[RG | Pain Points — Sales-Finance-Ops]`.
Acceptance criteria: marked Completed in delivery tracker.
Confidence: HIGH.

**SL-13 — Consolidated pick list + per-customer DN split**
Status: LOCKED. Source: `[CSV | Pre-Phase 1 Gate #10, Core MAIA Extension #1-2, all Completed]` `[SAPV | Key Point D]`.
Flow: Pick list consolidates across SOs, filterable/printable by warehouse team (frozen vs ready-packed, per item group) `[CSV | Pre-Phase 1 Gate #11]`; DN generation splits per customer from a multi-SO pick list.
Acceptance criteria: Native ERPNext handling validated in staging; confirmed working, with a noted gap that creating a DN from a picklist spanning multiple SOs requires the user to pick which SO — tracked as a separate build item (SL-21).
Confidence: HIGH.

**SL-14 — Stock transformation sync (raw → finished goods)**
Status: LOCKED (requirement), build/sync-interval details open. Source: `[SOW | §2.4 — "critical sync requirement"]` `[SAPV | Key Point E]` `[RG | Pain Points — Product Complexity]`.
Flow: GST's custom SAP stock-transformation feature (e.g. whole salmon → fillet + head, weight-based yield) must reflect into MAIA without meaningful delay, so sales don't promise against a stale SKU. Inventory deducts at DO dispatch based on actual packed weight, not at SO creation `[SAPV | Key Point E, Main Point 1]`.
Acceptance criteria: Transformed item correctly reflected on SO/DO/Invoice; sync interval agreed and configured (interval itself is NOT yet fixed — see SL-22).
Confidence: MED — the requirement and mechanism are well understood and agreed with GST's SAP vendor; the exact sync cadence is still open.

**SL-15 — Warehouse section → item group mapping (pick list split)**
Status: LOCKED. Source: `[CSV | Pre-Phase 1 Gate #11 — Completed]`.
Flow: Pick lists print separately for the frozen team vs the ready-packed team, driven by item-group mapping. Confirmed to require SAP-vendor-side customisation.
Acceptance criteria: Marked Completed in delivery tracker; confirmed via shop-floor visit `[CSV]`.
Confidence: HIGH.

---

## 4. Locked (Superseded)

**SL-9-a — SAP integration architecture (Service Layer only → phased Service Layer + custom endpoints)**
**SOW said** integration would use "API via SAP B1 Service Layer, subject to vendor confirmation" or a file-based fallback `[SOW | §2.4]` → **now intended**: a middleware layer on GST's intranet, JWT-authenticated, using the standard Service Layer first and custom endpoints only for GST's UDFs `[SAPV | Key Point A, C]` → **changed by** joint MAIA–SAP vendor technical session on 2026-05-19 → **rationale**: standard Service Layer can't pass GST's custom fields `[SAPV | Key Point B]` → **client agreed? YES** — GST's own IT team (Jun, Sharon, Ling, Hasma) was present and co-designed this in the same meeting `[SAPV | Participants]`.
This is a refinement of the SOW's "subject to vendor confirmation" language, not a contradiction — mutually agreed and technically necessary. Locked.

---

## 5. Agreed in Principle — Not Locked

**SL-16 — Stock source of truth (SAP live / daily extract / hybrid)**
Direction: business rule checks must reference *some* agreed inventory source. What's undefined: which one. Source: `[SOW | §2.1.1, §6]` `[BP | M0 Pending — Critical]` (still unchecked as of 2026-07-07, the latest reviewed date).
Decisions still needed: GST to confirm SAP-live vs daily-extract vs hybrid before Phase 1 business-rule logic can be considered final — SOW frames this as a pre-build gate, and build has already started.

**SL-17 — First branch (Penang vs KL)**
Direction: Phase 1 launches with one branch first, others follow as paid add-ons. What's undefined: which branch. Source: `[PR | §9 — commercial baseline priced around KL]` vs `[RG | E2E Workflow — "Penang branch is Phase 1 target"]` vs `[BP | M0 Pending — "confirm which branch goes live first"]` (still unchecked as of 2026-07-07).
Decisions still needed: formal branch confirmation — this is not just a scheduling detail, it determines which company code (P30 vs K30) seeds first and affects the Branch/Outlet doctype build (SL-25).

**SL-18 — CPRN / Blanket Order approval model**
Direction: a conflict-resolution path must exist when one salesperson's earmark blocks another's sale. What's undefined: whether the CPRN owner releases, a manager approves, or purchasing controls it. Source: `[SOW | §3.1.4 — explicit blocking decision]` `[GTM | §4]`.
Decisions still needed: GST must pick one of the three models; SOW is explicit that Phase 2 CPRN build cannot begin until this is confirmed — yet the Blanket Order doctype build is already listed "In Progress" `[BP | Customisations table]`. Flagged as a live risk in the Confirmation Agenda.

**SL-19 — Return note / refund linkage**
Direction: refunds are processed via a payment entry after a return note is created, and must link back to the correct invoice. Source: `[SAPV | Key Point F]`.
Decisions still needed: exact linkage mechanics, multi-invoice-per-payment edge cases, and whether this ships in Phase 1 or later — not scoped in the SOW/proposal documents at all; only surfaced in the SAP vendor technical session.

---

## 6. Needs-Scoping Register

| SL-N | What's unclear | Precise question | Who decides | Blocking? | Sources |
|---|---|---|---|---|---|
| SL-20 | Deep/customer-specific RFQ matching logic (SOW Customisation 1, part of the paid RM7,500 bundle) is marked "Out of Scope" in the internal delivery tracker, with no evidence GST was told or agreed | Is Customisation 1 still committed per the SOW, or has it been dropped — and if dropped, does the RM7,500 customisation fee change? | Gareth / account team, then GST confirmation | Yes — commercial and scope-clarity risk | `[SOW \| §3.1.1]` `[PR \| Customisation 1]` `[CSV \| cRFQ/Quotation section, "Out of Scope"]` |
| SL-21 | DN creation from a pick list spanning multiple SOs — user must manually pick which SO to create the DN for; no design for the low-stock exception case on "mark pick list as completed" | What should happen when actual picked qty is less than ordered — partial DN, hold, or exception flag? | Mindhive + GST ops | No (Phase 1 nice-to-have, not currently blocking M3) | `[CSV \| Core MAIA Extension #8-9\]` |
| SL-22 | Sync interval ("cron") for SAP → MAIA stock/BOM updates after a fish-cutting transformation | What lag is acceptable — near-real-time, 15-30 min poll, or something else? SOW leaves it "configurable as per operational need" with no number set | GST ops + Mindhive dev | Yes — affects SL-14 build and risk of stale-SKU document mismatch | `[SOW \| §2.4]` `[GTM \| §5]` |
| SL-23 | Glazing % — is it an item attribute or a separate SKU in GST's actual SAP setup | Confirm whether GST's SAP already treats glazing as separate SKUs, or whether MAIA needs custom handling | GST IT + Mindhive | No | `[CSV \| Pre-Phase 1 Gate #14]` |
| SL-24 | Excel export for planning/operational review (SOW Customisation 3) — exact dataset fields never confirmed | What specific fields/datasets (stock aging, open SO list, CPRN outstanding, AR buckets) does GST actually need? | GST ops team + Soo Chin | No (Phase 2 item) | `[SOW \| §3.1.3]` `[RG \| Gaps #2, "possibly misinterpreted"]` |
| SL-25 | Branch / Outlet doctype design — fields, permission scoping, whether Branch becomes an accounting dimension | Full field list and cross-branch access rules pending SL-17 (branch decision) | Mindhive | Depends on SL-17 | `[CSV \| New Doctype Build #2-3, "Scoping"/"Not Started"]` |
| SL-26 | "Item Name Override" customisation — appears only in the backward plan's Customisations table with an active date range (9–10 Jul), no requirement trace anywhere else in the corpus | What is this feature, who requested it, and under what SOW line does it fall? | Gareth to trace and document | Yes, structurally — an active build item with no scope-lock paper trail is exactly the drift this document exists to catch | `[BP \| Customisations table]` — no corroborating source found |

---

## 7. Supersessions Log

Sorted by risk, highest first.

1. **CPRN / SOA / Aging Alert now building during Phase 1, ahead of the SOW's phase gate.**
   **SOW said** Phase 2 customisations (CPRN tracking, SOA generation, Aging/clearance reminders) are scoped and built only *after* Phase 1 go-live, separately priced (RM7,500 bundle), and payable only after their own Phase 2 UAT passes `[SOW | §4, §5.2]` `[PR | Timeline, Payment terms]`.
   **Now intended/happening**: the backward plan's "Customisations (now tracked with dates)" table shows Blanket Order (CPRN), SOA, and Aging/Slow-Moving Alert all **"In Progress"** with July 2026 dates — i.e. during the Phase 1 core build window, before Phase 1 UAT (planned 2026-08-04–06) `[BP | Customisations table]`. The same backward plan document simultaneously lists these same three items under **"NOT in Phase 1 Scope (Do Not Creep In)"** `[BP | NOT in Phase 1 Scope section]` — an internal contradiction within the KB itself.
   **Changed by**: appears to be a Mindhive delivery-team sequencing decision — no client-side source in this corpus shows GST requesting or agreeing to this resequencing.
   **Rationale**: not evidenced.
   **Client agreed? NOT EVIDENCED.**
   This is the single highest-risk item in this Scope Lock: it affects what GST believes it's paying for and when, and whether Milestone 2 (RM7,500) is still gated on a distinct Phase 2 UAT or has quietly merged into Phase 1 delivery.

2. **Deep RFQ / cRFQ matching logic marked Out of Scope internally.**
   **SOW said** Customisation 1 (customer-specific quotation matching logic) is part of the paid Phase 2 bundle `[SOW | §3.1.1]` `[PR | Customisation 1]`.
   **Now intended**: internal delivery tracker marks the cRFQ module configuration and quotation-draft-generation build as **"Out of Scope"** `[CSV | cRFQ/Quotation section]`.
   **Changed by**: not attributed to any specific person/meeting in the corpus — appears to be an internal Mindhive scoping call.
   **Rationale**: not evidenced.
   **Client agreed? NOT EVIDENCED.**
   See SL-20.

3. **Stock source of truth decided informally, or not decided, but build proceeding anyway.**
   **SOW said** this must be confirmed *before* Phase 1 build starts `[SOW | §6]`.
   **Now intended**: M1–M3 build has been "In Progress" since 2026-07-10 `[BP]`, while the stock-source decision remains an unchecked item in the same document's M0 pending list.
   **Changed by**: not a deliberate decision — appears to be schedule pressure overtaking the gate.
   **Client agreed? NOT EVIDENCED** that GST was told this gate was being waived.

---

## 8. Out-of-Scope / Explicit Exclusions

| SL-N | Item | Reason | Source |
|---|---|---|---|
| SL-27 | Full ERP replacement / major SAP B1 restructuring | Explicitly excluded — MAIA sits on top of SAP, does not replace it | `[SOW | §6]` `[PR | Exclusions]` |
| SL-28 | Customer-facing WhatsApp bot | Explicitly excluded from current scope; internal-staff-facing only | `[SOW | §6]` |
| SL-29 | Advanced approval matrices beyond what's scoped in Phase 1/2 | Explicitly excluded unless separately agreed and priced | `[SOW | §6]` `[PR | Exclusions]` |
| SL-30 | Penang and Langkawi branch rollout beyond the confirmed first branch | Available as paid add-ons, not baseline Phase 1 | `[SOW | §6]` `[PR | §9]` |
| SL-31 | Full logistics workspace / deep delivery workflow | Phase 1 includes reference-only delivery visibility; full logistics module is Phase 2+ if pulled forward | `[SOW | §2.1.2]` |
| SL-32 | Advanced payment-slip "suspicious case" exception logic | Base scope is structured capture + review; deeper fraud/exception logic is an optional customization, not committed | `[CN | Feature 5]` `[PR | Scenario C]` |

---

## 9. Source-Conflict Register

| # | Conflict | Citation A | Citation B | Resolution |
|---|---|---|---|---|
| 1 | First branch for Phase 1 | Signed proposal prices the baseline monthly subscription around "KL only" with Penang/Langkawi as top-ups, implying KL-first | `[PR | §9]` | RG session explicitly frames Penang as "Phase 1 target — main priority", ~3,000+ orders/month | `[RG | E2E Workflow header]` | **Unresolved** — see SL-17. |
| 2 | Whether deep RFQ matching (Customisation 1) is committed scope | SOW/signed proposal include it in the paid Phase 2 bundle | `[SOW | §3.1.1]` `[PR | Customisation 1]` | Internal delivery tracker marks it "Out of Scope" | `[CSV | cRFQ/Quotation section]` | **Unresolved** — see SL-20, Supersession #2. |
| 3 | Whether Phase 2 customisations are gated behind Phase 1 UAT | SOW/proposal: Phase 2 fee and build happen after Phase 1 go-live, on its own UAT | `[SOW | §4]` `[PR | Timeline]` | Backward plan shows three Phase 2 items building now, in the same document that also lists them as excluded from the current phase | `[BP | Customisations table vs NOT in Phase 1 Scope section]` | **Unresolved** — see Supersession #1. |
| 4 | Pro forma document existence | GTM brief: GST said customers "don't really use pro forma" | `[GTM | §2a, §2c]` | Same brief, moments later: workflow described as pro forma-like and GST does generate pro forma documents | `[GTM | §2c]` | **Unresolved in source** — brief itself flags this contradiction; needs GST's own definition of document vs process. Carried forward here, not resolved by this Scope Lock. |

---

## 10. Client Confirmation Agenda

Ready to send as a clean list — each item closes with a yes/no or a specific value.

1. Which is the authoritative stock/inventory source for Phase 1 business-rule checks: live SAP B1, a daily Excel extract, or a hybrid? (SL-16 — overdue against the SOW's own pre-build gate.)
2. Which branch goes live first in Phase 1 — Penang or KL? (SL-17 — overdue.)
3. For CPRN/Blanket Order stock-earmark conflicts, who resolves a release request: the CPRN-owning salesperson, their manager, or purchasing? (SL-18.)
4. Is the deep/customer-specific RFQ matching logic (Customisation 1, part of the RM7,500 bundle) still committed, or has it been dropped from scope? If dropped, does the customisation fee change? (SL-20.)
5. Are you aware that CPRN, SOA, and Aging Alert — all documented as Phase 2, billed and tested only after Phase 1 UAT — are currently being built in parallel with Phase 1 core? Do you want this sequencing, and does it change the payment/UAT gating you agreed to in the SOW? (Supersession #1.)
6. What sync interval is acceptable between a SAP stock-transformation event (e.g. fish cutting) and MAIA reflecting the new SKU — near-real-time, a fixed poll interval, or something else? (SL-22.)
7. What exact datasets/fields do you need in the Phase 2 Excel export for planning (stock aging, open SO list, CPRN outstanding, AR buckets — or a different set)? (SL-24.)
8. What is "Item Name Override" — can you confirm this request and its origin so it can be properly scoped and logged? (SL-26.)

---

## 11. Bottom Line

GST's Phase 1 core — WhatsApp order intake, basic product matching, standard SO creation, credit/payment approval routing, Crystal-aligned documents, SAP B1 read/write sync, and daily digests — is well-evidenced across the SOW, proposal, RG session, and delivery tracker, and much of it (credit checks, payment-proof workflow, pick-list splitting, mobile invoice retrieval) is already marked Completed in the internal tracker. That part is stable and safe to keep building.

What is not stable is the account's own internal sequencing discipline: three foundational Phase 1 gates the SOW itself calls out as pre-build blockers — stock source of truth, first-branch confirmation, and the CPRN approval model — remain unresolved in the latest-dated internal documents, while build (M1–M3) has already been running for weeks. In parallel, three Phase 2 customisations are being actively built ahead of their contracted trigger (Phase 1 UAT pass), and one paid Phase 2 line item (deep RFQ matching) has been internally marked Out of Scope with no visible client conversation. **Delivery is currently running ahead of scope finalisation**, not the reverse — which is the exact failure mode this Scope Lock exists to catch. None of this should surprise GST if surfaced now; it will surprise them badly at UAT if it isn't. Recommend running the Client Confirmation Agenda (Section 10) before the planned 2026-08-04 UAT date.

---

## See Also

- [[GST Fine Foods Customer Narrative]]
- [[SOW for MAIA GST Fine Foods]]
- [[GST Fine Foods × MAIA Proposal v2 [SIGNED]]]
- [[Requirement Gathering Output - GST Fine Foods - 2026-05]]
- [[GST Fine Foods — GTM Brief Context and Unclear Items]]
- [[GST SAP Vendor × Mindhive — Meeting Notes]]
- [[Timeline/GST Phase 1 Backward Plan]]

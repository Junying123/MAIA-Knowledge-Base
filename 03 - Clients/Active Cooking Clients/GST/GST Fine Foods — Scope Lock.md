---
owner: Gareth
status: draft
last_reviewed: 2026-07-22
client: GST Fine Foods
lark_url: https://eg69120xnei.sg.larksuite.com/docx/OMtAdppypoVc3FxeCgTlvLYSgVf
---

# GST Fine Foods — Scope Lock v2

**Date:** 2026-07-22
**Build stage:** In-build. Backward plan: M0 (Requirements & Scope Lock) closed 2026-06-29; M1/M2 in progress since 2026-07-10; M3 (Internal QA) runs through 2026-07-31; UAT planned 2026-08-04–06 `[BP | 2026-07-07]`.
**Supersedes:** **Scope Lock v1.2** (Lark, dated 2026-06-23, node `TYNQwno6ai7bSDktYAelAjhSg0d`) — no markdown mirror of this document existed in the KB before now. This v2 was drafted before that discovery and has been rewritten to reconcile against it, per the "Rerunning an existing Scope Lock" protocol: v1.2's resolved positions are preserved and re-cited, not re-litigated; only genuinely new evidence (mined from sources v1.2 didn't have — the 2026-05 Requirement Gathering Output, the 2026-07-07 Backward Plan, the 7 May delivery-tracker CSV, and the 2026-06-22 Forensic Account Dossier) changes anything. **v1.2's own id namespace (`LOC-N`, `SL-N`, `NSD-N`, `R-N`, `SUP-N`, `OOS-N`) is preserved and continued** — this v2 does not renumber.

---

## 0. Changelog Since v1.2

| Item | v1.2 status | v2 status | What changed |
|---|---|---|---|
| LOC-03 (Penang-first) | LOCKED | LOCKED, **flagged stale** | The 2026-07-07 Backward Plan still lists "confirm which branch goes live first" as an unchecked open item — three weeks after this was supposedly locked. See SC-07 (new). |
| SL-02 (RAG item suggestion) | LOCKED — INTERNAL BUILD SCOPE | LOCKED, **reconciled against internal tracker conflict** | The 7 May delivery-tracker CSV marks "cRFQ / Quotation" module config as "Out of Scope" — this is now understood to be the CSV using different terminology for the same or an adjacent decision, not a live contradiction. See SC-01 addendum. |
| SL-03 (Blanket Order/Agreement) | LOCKED — INTERNAL BUILD SCOPE, NSD-02 open | LOCKED, unchanged | Confirmed this is the same item as the Backward Plan's "Blanket Order" customisation (In Progress, 24–28 Jul) — **not** the same as CPRN (which stays OOS-01). Clarifying this to prevent future confusion — earlier drafting of this Scope Lock conflated the two. |
| SUP-01 / OOS-01 (CPRN) | OUT OF SCOPE | OUT OF SCOPE, unchanged | Confirmed. |
| SUP-02 / OOS-02 (stock transformation) | OUT OF SCOPE — MAIA syncs post-transformation inventory only | OUT OF SCOPE, unchanged | Confirmed. Superseded the draft this v2 started from, which had incorrectly marked stock-transformation *sync depth* as a locked build requirement based on SOW §2.4 wording alone. |
| — | not present | **NSD-05 (new)** | Sales check-in / customer-visit-location reporting — Soo Chin asked for it 2026-05-07/08; Ivan said MAIA doesn't currently have it; never formally answered as in/out/CR. Surfaced by the Forensic Account Dossier. |
| — | not present | **SUP-05 (new)** | Three Phase-2-adjacent items (SOA portal build, Aging/slow-stock reports, "Item Name Override") are showing "In Progress" in the July 2026 backward plan — during the Phase 1 build window, ahead of Phase 1 UAT. This postdates v1.2 and is new risk, not previously assessed. |
| — | not present | **SC-07 (new)** | Branch decision (LOC-03) marked LOCKED in June, shown open again in July's backward plan — internal document staleness or a genuinely reopened question; unresolved which. |
| — | not present | **NSD-06 (new)** | Stock source-of-truth for Phase 1 rule checks (SAP live / daily extract / hybrid) — distinct from NSD-04 (sync cadence); not resolved by v1.2, still open per Backward Plan. |

---

## 1. Source Manifest

| Source | Type | Date | Citation key |
|---|---|---|---|
| **Scope Lock v1.2** (Lark) | Prior version of this document | 2026-06-23 | `[SL-v1.2]` |
| **Forensic Account Dossier** (Lark) | Internal cross-source synthesis | 2026-06-22 | `[DOSSIER]` |
| SOW for MAIA GST Fine Foods.md | Contractual draft (unsigned in KB copy) | last_reviewed 2026-05-20 | `[SOW | §x]` |
| GST Fine Foods × MAIA Proposal v2 [SIGNED].md | Signed proposal | 2026-03-12 | `[PR | §x]` |
| GST Fine Foods Customer Narrative.md | Client-facing narrative | — | `[CN | §x]` |
| Requirement Gathering Output - GST Fine Foods - 2026-05.md | PM synthesis of 2026-05-04 RG session | 2026-05-04 | `[RG | §x]` |
| GST Fine Foods — GTM Brief Context and Unclear Items.md | Synthesis of 2026-04-27 GTM brief | 2026-04-27 | `[GTM | §x]` |
| GST SAP Vendor × Mindhive — Meeting Notes.md | Meeting notes, GST IT present | 2026-05-19 | `[SAPV | 2026-05-19]` |
| 7May26 - GST X MAIA Gaps - Sheet1.csv | Internal delivery tracker | as of 2026-05-07 | `[CSV | row #]` |
| Timeline/GST Phase 1 Backward Plan.md | Internal delivery plan | last_reviewed 2026-07-07 | `[BP | 2026-07-07]` |
| GST Lark Wiki/GST WhatsApp Group.md | WhatsApp export, GST-side | from 2026-04-13 | `[WA | date | person]` |
| Fireflies raw transcripts (2026-05-04, both recordings) | Raw RG session transcripts | 2026-05-04 | `[FF | 5/4]` |

v1.2's own citation keys (`[FF-RG-A]`, `[FF-PROP]`, `[SAP-VENDOR]`, `[WA]`, `[Q]`, `[RG-NOTES]`) are preserved as-is inside carried-forward items below, since re-deriving them against the raw Fireflies transcript risks losing v1.2's original provenance.

---

## 2. Scope Lock Summary (Dashboard)

| Status | Count |
|---|---|
| LOCKED (operating constraints, `LOC`) | 6 |
| LOCKED (build scope, `SL`) | 12 |
| NEEDS SCOPING (`NSD`) | 6 (4 carried from v1.2, 2 new) |
| RESOLVED / non-blocking (`R`) | 4 |
| SUPERSEDED (`SUP`) | 5 (4 carried, 1 new) |
| OUT OF SCOPE (`OOS`) | 6 |
| Source conflicts (`SC`) | 7 (6 carried, 1 new) |

### 🔴 Blocking items

1. **NSD-06 (new) — Stock source of truth** (SAP live / daily extract / hybrid). Not resolved by v1.2. SOW frames this as a pre-build gate `[SOW | §6]`; Backward Plan shows it still unchecked as of 2026-07-07, three weeks into build.
2. **SC-07 (new) — Branch decision integrity.** v1.2 declared Penang-first LOCKED (LOC-03) on 23 Jun; the 7 Jul backward plan still lists it as an open confirmation item. Either the plan is stale or the decision was reopened — nobody has said which.
3. **NSD-01 (carried) — Document format samples** still pending from GST; blocks document UAT per v1.2's own assessment.
4. **NSD-02 (carried) — Blanket Order/Agreement behaviour mapping** still open; blocks pricing/order accuracy per v1.2.
5. **SUP-05 (new) — Phase-2-adjacent items building ahead of their gate.** SOA, Aging/slow-stock, and "Item Name Override" show "In Progress" in July, before Phase 1 UAT (planned Aug 4–6) — no evidence GST agreed to this sequencing, and "Item Name Override" has no scope trace anywhere else in the corpus.

### Top items to confirm with client

1. Stock source of truth (NSD-06).
2. Reconfirm branch — is Penang-first still the plan, or did something change since 23 Jun (SC-07)?
3. Document format samples for all in-scope types (NSD-01, v1.2's own #1 confirmation item).
4. Blanket Order/Agreement behaviour walkthrough (NSD-02, v1.2's own #2 confirmation item).
5. Sales check-in / customer-visit-location reporting (NSD-05) — was this ever formally closed as declined, or does GST still expect it?
6. What is "Item Name Override," and is it a decision GST is even aware is being built?

---

## 3. Locked Operating Constraints (carried from v1.2, unchanged unless noted)

**LOC-01 — MAIA sits above SAP B1.** LOCKED. `[FF-PROP]` `[FF-RG-A]` `[SAP-VENDOR]`. Confirmed independently by `[SOW | §1, §6]` ("not a replacement").

**LOC-02 — SAP integration is a core delivery path.** LOCKED. `[FF-RG-A]` `[SAP-VENDOR]`. Boundary unchanged: MAIA will not build custom UDF/UDH inside GST's SAP — any such gap is raised as a separate customisation, not absorbed into base scope.

**LOC-03 — Phase 1 is Penang-first unless client changes rollout.** LOCKED per v1.2, **flagged stale** — see SC-07. `[FF-RG-A]` `[Q]`, independently corroborated by `[RG | E2E Workflow — "Penang branch is Phase 1 target"]`.

**LOC-04 — MAIA must respect SAP branch/data ownership.** LOCKED. `[FF-RG-A]` `[RG-NOTES]`.

**LOC-05 — Joey is the working internal implementation PIC.** LOCKED. `[FF-RG-A]` `[WA]`. Note: SOW §7.2 spells this "Joey Pong"; every other source spells "Joey Ong" — treated as the same person, transcription variance, not two PICs.

**LOC-06 — GST-side setup dependencies required** (WABA, OpenAI, AWS, phone/account access). LOCKED. `[FF-RG-A]` `[WA]`.

---

## 4. Locked Scope (carried from v1.2, unchanged unless noted)

**SL-01 — Multi-format order/quotation intake and quotation draft.** LOCKED. Independently corroborated by `[RG | Captured Requirements — Sales Workflow]` (WhatsApp freeform text + Excel forwarding) and `[SOW | §2.1.1]`.

**SL-02 — Item suggestion using RAG/item master retrieval.** LOCKED. **Reconciliation note:** the 7 May delivery-tracker CSV marks a "cRFQ / Quotation" module config line as "Out of Scope" `[CSV | cRFQ/Quotation section]`. Read together with v1.2 (dated three weeks later, 23 Jun), the more likely explanation is that the CSV's "cRFQ" line referred to a heavier, standalone quotation-generation module considered and then folded into (or replaced by) the lighter RAG-suggestion approach in SL-02 — not that item matching was dropped outright. This is the account team's best current reconciliation, not a confirmed fact — flagged for a one-line confirmation with whoever owns the CSV.

**SL-03 — SAP-style Blanket Order/Blanket Agreement support.** LOCKED, NSD-02 still open. **Distinct from CPRN (OOS-01) — do not conflate.** This is the same item tracked as "Blanket Order" in the Backward Plan's Customisations table (In Progress, 24–28 Jul) `[BP | Customisations table]` — that build activity is consistent with this LOCKED item, not a violation of it.

**SL-04 — Credit approval/approval workflow behaviour in MAIA.** LOCKED. Independently corroborated: credit-approval authority already held by named individuals `[CSV | Pre-Phase 1 Gate #13, Completed]`; credit-block notification build marked Completed `[CSV | Notifications #1]`.

**SL-05 — Payment proof upload and payment entry decision.** LOCKED. Corroborated: payment-proof → draft payment entry workflow marked Completed `[CSV | Core MAIA Extension #6]`.

**SL-06 — Invoice/document retrieval by users.** LOCKED. Corroborated: invoice retrieval by salesperson (mobile) marked Completed `[CSV | Core MAIA Extension #7]`.

**SL-07 — Password-protected SOA portal link.** LOCKED, NSD-03 still open. No corroboration found elsewhere in the KB corpus for the self-service portal design specifically — this is the single largest piece of scope this v2's source set would have missed entirely without v1.2. Treat v1.2 as the authoritative source for SOA design detail going forward.

**SL-08 — Client document format matching.** LOCKED, NSD-01 still open (blocking). Independently corroborated as a hard, "non-negotiable" requirement `[SOW | §2.3]`; all 6 document types (QT, SO, DO, Invoice, Pick List, CN) still show "Not Started" or awaiting client PDF samples in the delivery tracker `[CSV | PDF Generation section]`.

**SL-09 — Inventory visual cue on document item tables.** LOCKED. Boundary reconfirmed: this is a MAIA-side cue (actual/available/reserved/producible for MAIA-configured BOM items) — it explicitly does **not** mean MAIA models GST's custom SAP stock-transformation engine (see OOS-02).

**SL-10 — Order listing, fulfillment percentage, order aging.** LOCKED.

**SL-11 — MAIA-created document writeback to SAP.** LOCKED. Corroborated by `[SOW | §2.4]` and delivery-tracker SAP-write build rows (status: Not Started as of 7 May, "In Progress" per the 7 Jul backward plan's M2 milestone — tracker freshness gap, not a scope gap).

**SL-12 — Movement-based slow stock visibility and reports.** LOCKED. Batch/expiry alerting explicitly replaced by this (see SUP-03/OOS-04).

---

## 5. Needs-Scoping Register

**NSD-01 — Document format samples.** Carried, unchanged, blocking. `[FF-RG-A]` `[CSV | PDF Generation, 5 of 6 types Not Started]`.

**NSD-02 — Blanket Order/Agreement behaviour.** Carried, unchanged, blocking for pricing accuracy.

**NSD-03 — SOA portal security settings** (expiry, password method/delivery, access logging, revocation, exposed doc list). Carried, unchanged, blocking for production SOA release.

**NSD-04 — Inventory sync cadence** (SAP → MAIA, after a stock-transformation event). Carried, unchanged, blocking for inventory-visibility acceptance. Independently corroborated as unresolved in `[SAPV | Key Point E]` and `[GTM | §5]` — GST's own IT team engaged on this directly in the 2026-05-19 session, but no number was pinned down.

**NSD-05 (new) — Sales check-in / customer-visit-location reporting.** Soo Chin requested this 2026-05-07/08; Ivan told her MAIA doesn't currently have it `[DOSSIER | B1 rank 5, B6, B9]`. Never formally closed as declined, deferred, or quoted as a change request. **Blocking:** not for Phase 1 core, but for expectation management — if GST believes this is still pending an answer, silence reads as ignored, not declined.

**NSD-06 (new) — Stock source of truth** (SAP live / daily extract / hybrid) for Phase 1 business-rule checks. Distinct from NSD-04 (which is about sync *cadence* after a transformation event, not which source is authoritative day-to-day). SOW frames this as a pre-build gate `[SOW | §6]`; still shown unchecked in the 2026-07-07 backward plan, three weeks after core build (M1–M3) began. **Blocking — overdue against the SOW's own gate.**

---

## 6. Resolved / Non-Blocking (carried from v1.2, unchanged)

R-01 (vendor UDF/UDH out-of-scope boundary), R-02 (SAP endpoint coverage non-blocking), R-03 (payment receipt/voucher mapping — user-instructed, no prior scenario mapping needed), R-04 (fulfillment percentage calculation — former NSD-08 removed, existing MAIA logic applies). No new evidence changes any of these.

---

## 7. Supersessions Log

**SUP-01 — CPR/CPRN replaced by committed-order visibility.** Carried, unchanged. OUT OF SCOPE, validated in RG as not a common use case for GST.

**SUP-02 — Stock transformation engine excluded from MAIA.** Carried, unchanged. OUT OF SCOPE — MAIA syncs resulting inventory after SAP-side transformation; does not model the transformation itself.

**SUP-03 — Batch/expiry alerts replaced by movement-based slow stock reports.** Carried, unchanged.

**SUP-04 — Excel planning/purchasing calculator excluded.** Carried, unchanged. OUT OF SCOPE.

**SUP-05 (new) — Phase-2-adjacent items building ahead of their commercial/UAT gate.**
**v1.2 said** nothing on this — it predates the July build calendar.
**Now observed**: the 2026-07-07 Backward Plan's Customisations table shows SOA-related build work, an "Aging/Slow-Moving Alert," and an item called "Item Name Override" all **"In Progress"** with July dates `[BP | Customisations table]` — i.e. during the Phase 1 core build window (M1–M3), before Phase 1 UAT (planned 2026-08-04–06). The SOW frames Phase 2 items as separately priced and payable only after their own UAT `[SOW | §4, §5.2]`.
**Changed by**: appears to be a Mindhive delivery-team sequencing decision. No client-side source shows GST requesting or agreeing to this.
**Rationale**: not evidenced.
**Client agreed? NOT EVIDENCED.**
**Risk**: two of these three items (SOA, item-level customisation) are exactly the kind of thing that should be traceable to a locked scope item (SL-07 for SOA has a clear trace; "Item Name Override" has none at all — see NSD-05's sibling gap). Recommend Gareth trace "Item Name Override" to its origin before UAT.

---

## 8. Out-of-Scope / Explicit Exclusions (carried from v1.2, unchanged)

OOS-01 (CPR/CPRN), OOS-02 (SAP stock transformation workflow), OOS-03 (SAP item master/UOM reconfiguration), OOS-04 (batch-number/expiry-date alerts), OOS-05 (Excel planning/purchasing calculator), OOS-06 (vendor custom UDF/UDH development).

Additional exclusions independently corroborated from the wider KB corpus, consistent with v1.2's framing: full ERP replacement/SAP restructuring `[SOW | §6]`, customer-facing WhatsApp bot `[SOW | §6]`, advanced approval matrices beyond scoped `[SOW | §6]`, Penang/Langkawi branch rollout beyond the confirmed first branch (paid add-on) `[SOW | §6]`, full logistics workspace beyond reference-only delivery visibility `[SOW | §2.1.2]`.

---

## 9. Source-Conflict Register

SC-01 through SC-06 carried from v1.2 (CPRN sold-idea vs RG validation; stock-transformation need vs MAIA capability; expiry alerts vs missing batch data; rich SAP Blanket Agreement vs MAIA capability; document generation scope vs missing samples; SAP UDF/UDH exposure vs base scope) — all still resolved as v1.2 states them. **Addendum to SC-01**: see SL-02's reconciliation note above regarding the CSV's "cRFQ Out of Scope" line — treated as terminology overlap with SL-02, not a live conflict, pending a one-line confirmation.

**SC-07 (new) — Branch decision: locked in June, reopened-looking in July.**
Citation A: `[SL-v1.2 | LOC-03]` — "Phase 1 is Penang-first," status LOCKED, dated 2026-06-23.
Citation B: `[BP | M0 Pending — Critical, "confirm which branch goes live first"]` — shown as an unchecked, unresolved item as of 2026-07-07.
**Resolution: unresolved.** Two explanations are equally plausible from the evidence available: (a) the backward plan's checklist is simply stale and wasn't updated to reflect a decision already locked three weeks earlier, or (b) the branch question was genuinely reopened after 23 June and the Scope Lock was never updated to reflect that. This needs a 30-second confirmation from Gareth or Ivan, not a client conversation — it's an internal bookkeeping question first.

---

## 10. Client Confirmation Agenda

Combining v1.2's original six confirmation items with what this v2 adds:

1. Provide sample formats for every in-scope document type (QT, SO, DO, Invoice, CN, Pick List) — v1.2's #1, still open.
2. Walk through SAP Blanket Order/Blanket Agreement behaviour MAIA must match — v1.2's #2, still open.
3. Confirm acceptable SAP ↔ MAIA inventory sync cadence — v1.2's #3, still open.
4. Confirm slow-moving stock definition (item category / days without movement) — v1.2's #4, still open.
5. Confirm SOA link settings (validity, password method, revocation, exposed document types) — v1.2's #5, still open.
6. Confirm which user roles can generate/revoke SOA links, retrieve invoices, create documents, create payment entries — v1.2's #6, still open.
7. **(new)** Confirm the authoritative stock source for Phase 1 business-rule checks: SAP live, daily extract, or hybrid.
8. **(new)** Reconfirm Penang as the first branch — or flag if this has changed since 23 June.
9. **(new)** Close the loop on the sales check-in/customer-visit-location request: is this declined, deferred to a named future phase, or should it be quoted as a change request?

---

## 11. Bottom Line

The core of what's LOCKED here is stable and was already correctly and thoroughly reasoned through in v1.2 — MAIA is a coordination/workflow layer over SAP, not a replacement, and explicitly does not attempt to model GST's stock-transformation reality (it syncs the result); CPRN, batch/expiry alerting, and Excel planning tooling were all deliberately cut after being raised, not overlooked. That discipline should be preserved, not re-litigated.

What's changed since 23 June is entirely on the delivery-execution side, not the scope-definition side: two genuine blocking gates (stock source of truth, and now a reopened-looking branch decision) remain unresolved three weeks into active build, and three Phase-2-adjacent items are showing up "In Progress" in the July calendar without a visible trace back to client agreement or, in one case ("Item Name Override"), to any documented requirement at all. None of this is a scope-definition failure — it's a **scope-discipline** failure: the team defined things well in June and then let July's calendar quietly get ahead of what was actually confirmed. Recommend closing NSD-06 and SC-07 this week, and getting Gareth to trace "Item Name Override" before it reaches UAT.

---

## See Also

- [[GST Fine Foods Customer Narrative]]
- [[SOW for MAIA GST Fine Foods]]
- [[GST Fine Foods × MAIA Proposal v2 [SIGNED]]]
- [[Requirement Gathering Output - GST Fine Foods - 2026-05]]
- [[GST Fine Foods — GTM Brief Context and Unclear Items]]
- [[GST SAP Vendor × Mindhive — Meeting Notes]]
- [[Timeline/GST Phase 1 Backward Plan]]
- Scope Lock v1.2 (Lark) — https://eg69120xnei.sg.larksuite.com/wiki/TYNQwno6ai7bSDktYAelAjhSg0d
- GST Forensic Account Dossier (Lark) — https://eg69120xnei.sg.larksuite.com/wiki/FkB4wT0pNihTe1k890DlnaJjgke

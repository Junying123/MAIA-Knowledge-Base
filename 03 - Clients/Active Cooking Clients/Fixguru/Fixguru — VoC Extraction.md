---
owner: Gareth
status: draft
last_reviewed: 2026-07-13
client: Fixguru
document_type: internal
version: v1
---

# Fixguru — VoC Extraction

## Phase 0 — Source Inventory & Coverage Gate

| Source | Type | Voice class | Use in this extraction |
|---|---|---|---|
| Meetings/2026-05-14 Fixguru UAT On-site - Transcript | Transcript | Primary (customer) | Full — richest single source, live hands-on UAT |
| Meetings/2026-05-15 Fixguru feedback sync - Transcript | Transcript | Secondary (mostly Mindhive internal, relays customer asks) | Partial — customer asks paraphrased by Mindhive staff |
| Meetings/2026-05-15 Fixguru UAT Action Items | Vendor-authored (PM notes) | Not customer voice | Context/scope only |
| Meetings/2026-06-24 Fixguru UAT Debrief | Vendor-authored (PM notes) + 1 direct quote | Mixed — 1 CONFIRMED quote, rest vendor synthesis | Direct quote used as CONFIRMED; rest for context/priority map |
| context/learnings.md | Vendor-authored (PM notes) | Not customer voice (contains 1 quote) | Context + the same direct quote |
| Scope Alignment - Delivery Method & Out-of-Scope Items | Vendor-authored (PM notes, cites transcript line #s) | Not customer voice, but cites "what Fixguru wants" | Scope boundary context only |
| Scope Lock v1 — Fixguru | Vendor-authored (client-facing) | Not customer voice | Scope boundary only, never VoC |
| Requirements Log.md / Feature Requests & Gaps.md / Client Overview.md | Template stubs | Empty | Not usable — unfilled placeholders |

**Coverage verdict: proceed-with-caveats.**

- **Well-represented:** the hands-on sales/finance-approval user (speaking as "Guest" in the 2026-05-14 on-site transcript) — this is the richest, most concrete primary-voice source in the corpus. Covers historical pricing, discount UX, credit/approval, delivery-note fields, shelf/branch handling.
- **Thin:** warehouse/driver voice — shelf and picking-list needs are raised **by the sales/finance actor relaying warehouse pain**, not by a warehouse worker directly. Treat warehouse-specific claims as BELIEVED, not CONFIRMED.
- **Absent:** finance/AR team direct voice (credit control logic is described secondhand by the same on-site actor, not by whoever actually runs AR), and any voice from Fixguru's own customers (the buyers on the other side of the WhatsApp order).
- **Structural caveat:** two transcripts (2026-05-14, 2026-05-15) are Fireflies auto-transcriptions with heavy garbling ("Coconut fence", "Milky Way") — speaker attribution and exact wording is frequently unreliable. Extraction below tags confidence down accordingly and paraphrases rather than quoting garbled text where the raw transcript is unusable.
- **What this corpus licenses:** confident conclusions about sales-desk pricing/discount workflow, credit-approval information needs, and AutoCount-parity expectations (PDF, item codes, delivery-as-SKU). It does **not** license confident conclusions about warehouse/driver workflow, finance-team AR process, or Fixguru's own end-customers' expectations.

## Phase 1 — Actor & Role Register

| Raw label | Re-attributed identity | Role | Confidence | Basis |
|---|---|---|---|---|
| "Guest" (2026-05-14 on-site transcript) | Fixguru primary UAT tester — likely Yvonne or "Gareth (Fixguru)" | Sales/ops lead, hands-on system user | BELIEVED | Attendee list includes ghostsketon@gmail.com, yckamigo@gmail.com (initials consistent with "Yvonne C."); content matches later-named "Yvonne" and "Gareth (Fixguru)" as the two Fixguru UAT actors named in the 2026-06-24 debrief |
| "You" (2026-05-14 on-site transcript) | Mindhive team member(s) running the demo | Vendor-side | CONFIRMED | Speaks in system/build terms throughout |
| Gareth (Fixguru) | Fixguru-side actor, distinct from Gareth Ng (Mindhive PM) — name collision | Customer, UAT participant | CONFIRMED | Explicitly listed as separate attendee "Gareth (Fixguru)" in 2026-06-24 debrief attendee list, alongside "Bryan (Mindhive), Ivan (Mindhive)" |
| Marcus (Fixguru) | Fixguru-side actor | Customer, UAT participant | CONFIRMED | Named attendee, 2026-06-24 debrief |
| Yvonne (Fixguru) | Fixguru-side actor, primary point of contact for WhatsApp order samples, delivery SKU naming | Customer, likely sales/ops lead | CONFIRMED | Named attendee across multiple meetings; action items assigned to her (C1: real order-intake samples) |
| "Guest" (2026-05-15 feedback sync transcript) | Mindhive engineer (Jermaine or similar), not a customer actor | Vendor-side | CONFIRMED | Attendee list is entirely @mindhive.asia / dev emails; content is internal build discussion referencing "what Fixguru said" secondhand |

**Checkpoint:** the central actor in the richest transcript (2026-05-14) is not cleanly resolved to a single named individual — it's BELIEVED to be Yvonne or Gareth (Fixguru), not CONFIRMED. This does not block extraction (the operational content is clear and internally consistent regardless of exact speaker identity), but individual VOC rows below inherit this BELIEVED-level attribution unless otherwise noted.

## Phase 2 — Grounded Evidence Extraction

| ID | Category | Customer voice / tight paraphrase | Source | Confidence |
|---|---|---|---|---|
| VOC-001 | Historical pricing | Item code, discount %, and final net price must all show — current build shows none of these; "if you didn't show me this on the idea [item]... cannot do anything" | 2026-05-14 on-site transcript | BELIEVED |
| VOC-002 | Historical pricing | Needs at minimum the latest ~5 historical transactions per item, sourced from actual past purchases, not just current price | 2026-05-14 on-site transcript ("pick up about five historical data") | BELIEVED |
| VOC-003 | Historical pricing | Discount must be shown as a **percentage**, not a flat currency amount — system captured "RM3" when it should have captured "3%" | 2026-05-14 on-site transcript | BELIEVED |
| VOC-004 | Historical pricing | Preference is to work in discount-% format (not just final price) because "price fluctuate[s]... how can I give discount [if I only see final price]" — the standard price moves, so discount % is the stable reference point | 2026-05-14 on-site transcript | BELIEVED |
| VOC-005 | Historical pricing (escalation) | Repeated across 4 UAT rounds (7 Apr, 14 May, 16 Jun, 24 Jun) as a cannot-sign-off blocker; direct quote: *"I speak many times the same… I don't know how to tell you."* | 2026-06-24 UAT Debrief (direct quote) | CONFIRMED |
| VOC-006 | Competitive benchmark | AutoCount is the explicit benchmark — MAIA must be faster/simpler, or the team reverts to AutoCount | 2026-06-24 UAT Debrief; corroborated in 2026-05-14 on-site ("it take too much time... I will leave this one and move back to that [Auto]Count already") | CONFIRMED (debrief) / BELIEVED (on-site corroboration) |
| VOC-007 | Discount editing | Cannot currently apply per-item-level discount (e.g. "bubble wrap that we give 5%") — system only supports order-level, not item-level, discount | 2026-05-14 on-site transcript | BELIEVED |
| VOC-008 | Item code / SKU | Must show item code / SKU (their AutoCount code), not MAIA's internal ID or name-only — sales team "understand SKU more than the name" | 2026-05-15 feedback sync (relayed) + 2026-05-14 on-site (system misidentified item as customer name) | BELIEVED |
| VOC-009 | Item code / SKU | Brand must be part of item display string — "brand matters... right now we're not showing brand" | 2026-05-15 feedback sync | BELIEVED |
| VOC-010 | PDF / document handoff | Prefers AutoCount's PDF layout over MAIA's — explicitly said the MAIA-generated PDF "is totally different," wants it to mirror AutoCount's | 2026-05-14 on-site transcript | BELIEVED |
| VOC-011 | PDF / document handoff | PDF must show delivery/shipping charge as a distinct line so it's captured correctly for invoicing — "if you show here only... you need to show so to add up... because when the invoicing, this will be captured as not our profit [otherwise]" | 2026-05-14 on-site transcript | BELIEVED |
| VOC-012 | Delivery / item code accuracy | Custom item codes must sync correctly — "if you mess up here, my back end... invoicing is very important" | 2026-05-14 on-site transcript | BELIEVED |
| VOC-013 | Delivery note / picking | Delivery note needs item weight and volume/cubic captured — "why is it important? because... we need to calculate what kind of [truck]... if you don't capture, we cannot calculate" | 2026-05-14 on-site transcript | BELIEVED |
| VOC-014 | Delivery note / picking | Shelf number must be captured on the picking list — "you need shelf number to be captured as well, which is not inside here" | 2026-05-14 on-site transcript | BELIEVED |
| VOC-015 | Delivery note / picking | Stock check must block DN generation when stock is insufficient — "you cannot let them generate the [D]O when you have insufficient stock... doesn't make sense" | 2026-05-14 on-site transcript | BELIEVED |
| VOC-016 | Delivery note / picking | Picking list and DN must be generated together, hand-in-hand, at the same moment stock is deducted | 2026-05-14 on-site transcript | BELIEVED |
| VOC-017 | Multi-branch | Some customers have multiple branches/delivery addresses under one HQ; system must let the branch be selected and route delivery-note fields to the right branch contact | 2026-05-14 on-site transcript | BELIEVED |
| VOC-018 | Editing flow | Sales orders must remain freely editable until formally confirmed/submitted; once confirmed and pushed downstream, further edits should require going back through the order (not silently patchable) | 2026-05-14 on-site transcript | BELIEVED |
| VOC-019 | Approval / price floor | Selling below the item's minimum price requires management approval; a "price book" mechanism lets specific customers get pre-approved fixed pricing without repeat approval | 2026-05-14 on-site transcript | BELIEVED |
| VOC-020 | Approval / credit | Credit-limit block AND price-floor approval are both needed; when a user hits either, the approver must see full context in the approval prompt — standard price, current discount history, AR owing, credit limit, current exposure — not just a bare "approve?" prompt: *"if everything you can [show]... we don't mind... if you don't show me, I cannot make this call"* | 2026-05-14 on-site transcript | BELIEVED |
| VOC-021 | Approval / credit | Credit approval decisions need to be partial/negotiable in real time — e.g. approver can conditionally release part of an order if the customer pays part of what's owing first | 2026-05-14 on-site transcript | BELIEVED |
| VOC-022 | Approval / credit | Credit-limit enforcement was explicitly requested "from day one" of the project, alongside minimum-price enforcement — client frustrated this wasn't already in place after ~1 month live | 2026-05-14 on-site transcript | BELIEVED |
| VOC-023 | Calculator | Volumetric/dimensional field needed on the calculator and must sync through to AutoCount and appear on documents (for driver/lorry planning) | 2026-05-14 on-site transcript | BELIEVED |
| VOC-024 | Calculator | Calculator input convention differs from MAIA's (length × width vs. open-size), and updated transformation ratios/policy exist that need to be captured from Fixguru | 2026-05-14 on-site transcript | BELIEVED |
| VOC-025 | Tax / SST | Does not want SST/tax shown to customers on any customer-facing document, even though tax exists in the item master config | 2026-05-15 feedback sync (relayed) | CLAIMED (relayed by vendor, not direct quote) |
| VOC-026 | Delivery as SKU | Wants delivery method (e.g. Lalamove) captured as a line-item/SKU for e-invoice profit/claim purposes, mirroring AutoCount, not just as a system "fulfillment method" field | 2026-05-15 feedback sync + Scope Alignment doc (cites 2026-06-10 standup transcript) | BELIEVED |
| VOC-027 | AutoCount sync / migration | Concerned about historical data continuity — wants assurance that if MAIA fails/has issues, they can fall back to AutoCount without data-integrity loss | 2026-05-15 feedback sync (relayed, Mindhive internal discussion referencing client requirement) | CLAIMED |
| VOC-028 | Language | Chatbot should be able to receive messages in Mandarin (customers/staff sometimes message in Chinese) even if it only needs to reply in English/Malay | 2026-05-15 feedback sync (relayed) | CLAIMED |
| VOC-029 | Credit exposure formula | Full credit exposure must include unbilled SO amount **plus** outstanding unpaid invoices, not SO amount alone — this was raised as a correction to the original scoped formula | Meetings/2026-05-15 UAT Action Items (documents a scope-change driven by client requirement) | CLAIMED (vendor doc, but explicitly framed as a client-driven correction) |
| VOC-030 | Credit/approval logic (sharpened) | Blocking should happen at the Delivery Note stage, not at order-creation stage — blocking too early "loses money collection opportunity" | context/learnings.md, 2026-06-24 debrief | CLAIMED (vendor synthesis of client direction, not direct quote) |
| VOC-031 | Sentiment / trust | Client sentiment is patient but visibly eroding after four UAT cycles without sign-off on the core pricing blocker | 2026-06-24 UAT Debrief | CONFIRMED (direct quote anchors this) |

## Phase 3 — Salience & Priority Signals

| Rank | Priority | Stated importance | Revealed importance | Confidence |
|---|---|---|---|---|
| 1 | Historical pricing shown in one glance, per item, with discount % + net price (VOC-001 to VOC-005) | Very high — explicitly named a cannot-sign-off condition since 7 Apr | Highest — raised across 4 separate UAT sessions over ~2.5 months, still unresolved, directly tied to Milestone-2 payment (RM24,000) not being released | CONFIRMED |
| 2 | AutoCount as speed/simplicity benchmark (VOC-006) | High — stated directly as the comparison point | High — repeated at every touchpoint as the reason the pricing flow "wastes time" | CONFIRMED |
| 3 | Credit/approval decision context (limit, exposure, AR, price floor together) (VOC-019 to VOC-022, VOC-029, VOC-030) | High — described as a day-one requirement, with detailed worked examples | High — client walked through multiple concrete scenarios (10,000/5,000/3,000 case) unprompted, signalling real operational pain, not a hypothetical ask | BELIEVED |
| 4 | Item identity / code / brand accuracy (VOC-008, VOC-009, VOC-012) | Medium-high — repeated friction across multiple test attempts | Medium-high — system errors on item lookup directly blocked test progress multiple times in the same session | BELIEVED |
| 5 | PDF parity with AutoCount (VOC-010, VOC-011) | Medium — stated as a strong preference | Medium — tied to an existing external customer-facing workflow (pro-forma back-and-forth), so has real downstream cost if wrong, but not raised as a blocker in later UAT rounds | BELIEVED |
| 6 | Delivery note operational detail — weight, volume, shelf, stock check (VOC-013 to VOC-016) | Medium — raised as "you need to show / you need to capture" | Medium — framed around a real physical constraint (lorry loading, picking) but is thin-voice (relayed through the sales actor, not a warehouse worker) | BELIEVED, thin-voice caveat |
| 7 | Delivery-as-SKU for e-invoicing (VOC-026) | Medium — tied to a stated compliance/claim reason | Medium — appears once with clear reasoning but not repeated across sessions | BELIEVED |
| 8 | Multi-branch handling (VOC-017) | Low-medium | Low — Fixguru was later confirmed (2026-06-10 standup) to not actually use branches, so revealed importance is lower than the stated ask suggested | BELIEVED — later downgraded by vendor-side fact-check |
| 9 | Language support (Mandarin intake) (VOC-028) | Low | Low — appears once, secondhand, no repetition or escalation | CLAIMED |
| 10 | Shelf-tied-to-UoM (part of VOC-014) | Stated as important by client, but flagged by vendor as a non-standard AutoCount hack | Low-medium — real physical need (which shelf to pick from) but the specific implementation (UoM-level field) is Fixguru's own workaround, not a MAIA requirement per se | BELIEVED, contested framing |

## Phase 4 — not used

## Phase 5 — Empathic Interpretation Layer

**INFERENCE [CONFIRMED, anchors: VOC-001, VOC-002, VOC-003, VOC-004, VOC-005]:** The customer is not asking for a "historical pricing feature" as a checkbox — they are asking to make one specific, repeated business decision (what discount to give, right now, for this customer and item) as fast as they could in AutoCount. Every failed UAT round has been a failure to make *that one decision* fast, not a missing report. Treating this as a UI polish item ("show discount column") rather than a first-class invoice-sourced module is why it has failed sign-off four times.

**INFERENCE [BELIEVED, anchors: VOC-006, VOC-031]:** The real risk to the account is not feature gaps — it's that the sales team's daily habit loop reverts to AutoCount every time MAIA is slower or requires more reading. Each failed UAT round doesn't just delay sign-off, it reinforces the habit of falling back to the old tool, making eventual adoption harder even after the feature ships correctly.

**INFERENCE [BELIEVED, anchors: VOC-019, VOC-020, VOC-021, VOC-022]:** The credit/approval ask is really about giving a manager enough information to make a fast, confident judgment call without having to go dig in AutoCount — the same "one-glance decision" pattern as pricing, applied to approvals. The detailed worked example (10,000/5,000/3,000) reveals this is a live, frequent decision they make, not an edge case.

**INFERENCE [BELIEVED, anchors: VOC-008, VOC-009, VOC-012, VOC-010, VOC-011]:** Underneath the item-code/PDF/brand asks is a single concern — invoicing and downstream AutoCount reconciliation must not break. The client repeatedly ties UI asks back to "if you mess up here, my back end..." — these are not cosmetic requests, they are data-integrity requirements viewed through a UI lens.

## Stated vs Revealed Importance

| Item | Stated | Revealed | Read |
|---|---|---|---|
| Historical pricing, one-glance, invoice-sourced | Explicit blocker since 7 Apr | 4 failed UAT rounds, Milestone-2 payment withheld, direct escalation quote | Real P1 — confirmed, not misframed |
| AutoCount speed benchmark | Stated directly | Repeated at every session as the failure criterion | Real P1 — this is the acceptance bar, not a nice-to-have comparison |
| Credit/approval full-context prompt | Stated as day-one requirement | Detailed unprompted worked examples | Real P1.5 — high real need, but not yet escalated to the same crisis level as pricing |
| PDF AutoCount-parity | Stated as strong preference | Not repeated as blocker in later rounds; workaround (send AutoCount PDF for customer-facing use) already partially in play | P2 / scope-risk — could quietly balloon into a "match AutoCount pixel-for-pixel" ask if not bounded; Scope Lock already excludes full redesign |
| Shelf-tied-to-UoM | Stated as important, described in detail | Vendor flagged as non-standard hack; client asked for confirmation, not escalated after | Scope-risk — do-not-let-it-leak-into-go-live as the AutoCount-specific implementation; the underlying need (pick-list shelf reference) is real and should get a standard-modelling answer |
| Multi-branch | Stated as a need in on-site session | Later fact-checked (2026-06-10 standup): Fixguru does not actually use branches | Misframed / stale — was a real ask at one point but overtaken by fact; do not build for it |
| Mandarin intake | Stated once, secondhand | No repetition, no escalation, no direct quote | Phase 2 / low confidence — verify before committing further scope |

## What We Do NOT Know

| Unknown | Why it matters | How to resolve |
|---|---|---|
| Which named individual is the primary voice in the 2026-05-14 on-site transcript | VOC-001 through VOC-024 all trace to this one actor; if it's actually two different people (sales vs. finance) conflated by garbled transcription, priority ranking could be wrong | Cross-check Fireflies speaker audio/video against known voices, or ask Gareth (Fixguru)/Yvonne directly which of them ran the 2026-05-14 session |
| Whether the warehouse/picking team agrees with the shelf/weight/volume asks as described | These are relayed through the sales actor, not a warehouse worker — real operational needs may differ in detail | Sit in on one real picking cycle with Fixguru's warehouse staff, or get 2-3 real picking list examples directly from them |
| Whether finance/AR staff (not sales) have their own credit-approval information needs beyond what's captured here | Credit/approval logic (VOC-019 to VOC-022) is described by the same sales-side actor, not by whoever actually processes AR | Direct short session with Fixguru's finance/AR person, even 15 minutes, to confirm the approval-context requirements |
| Actual frequency/scale of Mandarin-language customer messages | VOC-028 rests on one secondhand mention; committing engineering effort here without confirmation risks scope creep on a low-signal item | Ask Fixguru for a real sample count: how many WhatsApp orders per month arrive in Mandarin |
| Whether "price book" pre-approval mechanism (VOC-019) is fully built or still aspirational on Fixguru's own AutoCount side | Client described it as new/still being tested even in their own AutoCount at time of the 2026-05-14 session — MAIA's build target may be chasing a moving target | Confirm with Fixguru whether their own price-book usage in AutoCount has stabilized, and get a current example |

## Bottom Line

> Fixguru is not asking MAIA to have "a historical pricing feature" — they are asking to make one decision (what discount to give this customer, for this item, right now) at least as fast as they already can in AutoCount, and MAIA has failed to clear that bar four UAT rounds running. Every other ask in this corpus (item codes, PDF layout, delivery-as-SKU, credit context) is the same pattern repeated: don't make me read, hunt, or double-check what I already trust AutoCount to give me instantly.

The single mistake most likely to sink this account is **continuing to patch the pricing display at the prompt level instead of building the invoice-sourced historical-pricing module as a first-class feature** (per the 2026-06-24 debrief's own root-cause finding). This is a workflow/speed problem, not a missing-feature problem — and it is already tied to a withheld milestone payment (RM24,000).

## Close the Loop — Next Actions

**To backlog now:**
- VOC-001–005: invoice-sourced historical pricing module, one-glance format — already locked as the step-1 acceptance bar in the 2026-06-24 debrief; highest priority, build immediately
- VOC-019–022: full-context approval prompt (price floor + credit limit + AR + history in one view) — strong evidence, ready to scope
- VOC-008, 009, 012: item code / brand / external-SKU display accuracy — concrete, low-ambiguity, blocks other testing when wrong

**To verify first (gated on "What We Do NOT Know"):**
- Warehouse/picking asks (VOC-013–016) — verify with actual warehouse staff before committing exact field list
- Finance/AR approval needs (VOC-019–022) — verify with actual AR staff, not just sales-side relay
- Mandarin intake volume (VOC-028) — get real numbers before scoping further

**To report back to Fixguru:**
- Confirm receipt of the step-1 acceptance bar (already drafted in the 2026-06-24 debrief) and commit to a hard date
- Multi-branch: confirm with Fixguru that this is genuinely not needed (per 2026-06-10 fact-check) so it can be formally dropped rather than left ambiguous
- Shelf-tied-to-UoM: communicate the standard-warehouse-modelling alternative (already drafted in Scope Alignment doc) and get their explicit accept/reject

**Refresh trigger:** re-run this VoC extraction after step-1 (historical pricing) ships and is retested — sentiment and priority ranking will likely shift once the core blocker clears. Also re-run post-go-live once the sales team has real daily usage data, since several ranks here (PDF parity, shelf handling) are BELIEVED-confidence and may resolve differently once live.

## See Also

- [[Scope Lock v1 — Fixguru]]
- [[Scope Alignment - Delivery Method & Out-of-Scope Items]]
- [[context/learnings]]
- [[Meetings/2026-06-24 Fixguru UAT Debrief]]

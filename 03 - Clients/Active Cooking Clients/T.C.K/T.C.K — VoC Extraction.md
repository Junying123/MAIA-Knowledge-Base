---
owner: Gareth
status: draft
last_reviewed: 2026-07-21
---

# T.C.K Sdn Bhd (Maxfresh) — VoC Extraction v1

## Phase 0 — Source Inventory & Coverage Gate

| Source | Type | Voice class | Use in this extraction |
| --- | --- | --- | --- |
| Fireflies — Introductory Meeting (2026-04-20) | Sales call transcript | Primary (Andrew Tay) + Vendor (Jeremy Chan) | Extract Andrew's statements as primary VoC |
| Fireflies — Proposal Walkthrough (2026-04-27) | Sales call transcript | Primary (Andrew) + Vendor (Jeremy) | Extract Andrew's statements as primary VoC |
| Fireflies — Proposal Finalization 1 (2026-06-10) | Sales call transcript | Primary (Andrew) + Vendor (Jeremy) | Extract Andrew's statements as primary VoC |
| Fireflies — Proposal Finalization 2 (2026-06-17) | Sales call transcript | Primary (Andrew) + Vendor (Jeremy) | Extract Andrew's statements as primary VoC |
| Fireflies — Proposal Finalization 3 (2026-06-23) | Sales call transcript | Primary (Andrew + Poh Yee Yew, logistics) + Vendor (Jeremy) | Extract Andrew's and Poh Yee Yew's statements as primary VoC |
| Fireflies — Proposal Finalization 4 / Signing (2026-06-26) | Sales call transcript | Primary (Andrew) + Vendor (Jeremy) | Extract Andrew's statements as primary VoC |
| Signed Proposal | Vendor-authored deliverable | Not customer voice | Scope/context only |
| Project Scope and Meeting Links doc | Vendor-authored deliverable | Not customer voice | Scope/context only |
| Detailed Onboarding Handover | Vendor-authored internal doc | Not customer voice | Scope/context, and a source of Mindhive's own risk/assumption framing |
| Pre-Onboarding Questionnaire | Vendor-authored, PM-prefilled from the above calls, pending client confirmation | **Not customer voice yet** — every answer traces back to one of the call transcripts above or is explicitly `[TO BE FILLED BY CLIENT]`. Treat as a *summary of vendor inference*, not a new primary source. | Cross-reference only; do not cite as independent confirmation of anything already sourced from a call |
| Granola — Maxfresh Briefing transcript (x2, 2026-07-02) | Internal Mindhive handover call (Jeremy → Gareth/Wansin) | Not customer voice — this is vendor-internal, Andrew is not present | Vendor-claim source only; useful for surfacing what Jeremy told the internal team the client wants, which must be checked against actual customer-side transcripts, not taken at face value |

**Coverage verdict: proceed-with-caveats.**

Well-represented: Andrew Tay (owner/decision-maker) — present across all 6 Fireflies calls, the only consistent primary voice in the corpus. His statements are the strongest evidence base here.

Thin: Poh Yee Yew (logistics) appears in exactly one call (`Finalization 3`) and her lines are heavily garbled by transcription quality; treat her contributions as BELIEVED at best unless a clean quote exists. Cheryl (sales team lead, named repeatedly as a key evaluator) **never speaks directly in any transcript** — she is referenced *about*, never *by*. Any pain point framed as "sales team feedback" is Andrew relaying secondhand what his team told him, not sales-team primary voice.

Absent entirely: the sales/admin staff who do the daily ~50 orders/day of manual key-in, the warehouse pickers, delivery drivers, and finance team. This is the single biggest coverage gap — the people doing the most repetitive daily work in the current process have zero direct voice in this corpus. Every claim below about "staff pain points" traces back to Andrew's or Jeremy's characterization of that pain, never the staff's own words.

This corpus also skews heavily toward the *sales cycle* (get Andrew to sign) rather than an operational discovery session — there is no requirements-gathering meeting in this corpus yet, because kickoff hasn't happened. Expect this VoC to be thin on day-to-day operational detail and strong on Andrew's decision-making criteria and concerns, which is exactly what a pre-signing sales cycle produces.

## Phase 1 — Actor & Role Register

| Raw label | Re-attributed identity | Role | Confidence | Basis |
| --- | --- | --- | --- | --- |
| "Andrew Tay" (all Fireflies) | Andrew Tay | Owner / management sponsor / decision-maker, T.C.K Sdn Bhd | CONFIRMED | Named consistently across all 6 transcripts; confirmed as signatory and decision-maker in `[DH]` §4.1 and `[Q]` 12.3 |
| "Poh Yee Yew" (Finalization 3 only) | Poh Yee Yew | Logistics team member | CONFIRMED (identity) / BELIEVED (content, due to poor transcript quality) | Named speaker label in Finalization 3; role inferred from context (joins specifically for the logistics-feedback agenda item) — not independently corroborated by a questionnaire or handover reference |
| "Cheryl" (referenced, never speaking) | Cheryl | Sales team lead / demo evaluator | CONFIRMED (identity, role) / N/A (no direct voice) | Named in `[DH]` §4.1 and `[FF-PF1]`/`[FF-PF2]` as the person given demo access; never appears as a transcript speaker herself |
| "Jeremy Chan" (all Fireflies, Granola) | Jeremy Chan | Mindhive sales lead — VENDOR SIDE | N/A — vendor voice, never counted as VoC | Consistently named across corpus |
| "You" / "Guest" (Granola transcripts) | "You" = Jeremy Chan (leading the briefing); "Guest" = Gareth (PM, based on session context and self-reference "Gareth your question" mid-transcript) | Both Mindhive-internal | N/A — neither is customer voice | Granola label mapping is ambiguous and the transcript itself is poor quality; treat all Granola content as vendor-internal regardless of exact speaker mapping |

**Checkpoint:** The central customer actor (Andrew) is well-resolved — no blocker there. However, no operational end-user (sales/admin, logistics staff, driver, finance) has any direct voice in this corpus. This does not block extraction of Andrew's VoC, but it does mean any Phase 6 "expectation" framed around daily operational workflow should be read as Andrew's *management-level* understanding of that workflow, not a verified frontline account. This is the single biggest gap to close at kickoff (see What We Do Not Know).

## Phase 2 — Grounded Evidence Extraction

| ID | Category | Customer voice / tight paraphrase | Source | Confidence |
| --- | --- | --- | --- | --- |
| VOC-001 | Evaluation criteria | Andrew ranks his comparison criteria explicitly: (1) integration compatibility with AutoCount — "how compatible with our current software... we don't want anything to come in and say hey we cannot catch up with some of the things they're doing," (2) ease of use for staff, (3) customization fit, (4) cost — "cost will probably be the last of the equation" | `[FF-PF1]` | CONFIRMED |
| VOC-002 | Post-sales support | Andrew presses repeatedly and unprompted on support quality: "how quickly does... your team or somebody give us feedback... is there a support team that comes" and later, on the signing call, again: "we must have what we discussed in terms of post sales... making sure the transition is seamless" | `[FF-PF1]`, `[FF-PF4]` | CONFIRMED |
| VOC-003 | Training preference | Andrew explicitly prefers physical/on-site training over remote: "I would actually recommend physical... some of the staff are more... they need more guidance" | `[FF-PF1]` | CONFIRMED |
| VOC-004 | Staff burden concern | Andrew's stated worry before committing: "the worry for a lot of the staff... is, do they have to fork out additional time for them to come in for training or come in to do extra work" | `[FF-PF1]` | CONFIRMED |
| VOC-005 | Running-number continuity | Andrew is explicit and specific: "we want to be using the same running number... that has been the data for like 10 years... we don't [want to] jump into something Maya thinks... 7 digit or 8 digit" | `[FF-PF2]` | CONFIRMED |
| VOC-006 | Data-entry friction with current demo | Andrew's direct feedback after testing: "there's a lot of inputs that needs to be done... payment terms, customers information... but all this should be preloaded... I shouldn't be needing to input all the payment terms" | `[FF-PF2]` | CONFIRMED |
| VOC-007 | Onboarding/data-migration question | Andrew asks directly how 10 years of AutoCount data transitions: "how do you then integrate or transition a whole file... 10 years data... or we start scratch from Maya... is there a cutoff" | `[FF-PF2]` | CONFIRMED |
| VOC-008 | Finance workflow preservation | Andrew wants a staged rollout, sales first: "normally when we start, we probably start with sales and billing... the payment will still use auto account to input because back end... ledger... it's just easier there" | `[FF-PF2]` | CONFIRMED |
| VOC-009 | Interface/device usability | Andrew flags the web backend as awkward on phone: "looking at the app itself, it's a bit hard to... use... it's not so intuitive to use [on] a phone compared to iPad" | `[FF-PF2]` | CONFIRMED |
| VOC-010 | Hardware/visibility ambition | Andrew wants a "McDonald fashion" production-floor display: "mimic it... where the sales team key in the order and then it reflects on... a big screen for picking and packing" — with notification when an order is assigned/unprocessed | `[FF-PF2]` | CONFIRMED |
| VOC-011 | SKU/brand disambiguation concern | Andrew (via the logistics-focused call) raises a specific merchandising detail: will Maya distinguish "a red apple... pink lady apple" by brand, since "that's how we transplit it" | `[FF-PF3]` | CONFIRMED |
| VOC-012 | Selective data sync | Andrew wants control over what syncs to AutoCount: "if my auto count... I'm not keeping stock balance, but I want to keep a copy in Maya. Does that work? I just want to push invoices DN CN but not stock balances" | `[FF-PF3]` | CONFIRMED |
| VOC-013 | Picking timestamp requirement | Andrew requests a specific audit detail: "can we time date it on when... the lorry driver pick up" — for the picking list specifically, not a signed physical copy | `[FF-PF3]` | CONFIRMED |
| VOC-014 | Physical proof preference | Andrew still wants a physical component: "I feel that we still need... a copy up the physical pick ref" alongside any digital timestamp | `[FF-PF3]` | CONFIRMED |
| VOC-015 | Hosting cost/performance concern | Andrew worries about cloud hosting performance based on a prior bad experience: "how much more expensive are you looking at? Because they complain the cloud [is] very laggy" | `[FF-PF4]` | CONFIRMED |
| VOC-016 | Reference to prior vendor rollout quality | Andrew references Mindhive's Penang client story approvingly as the bar for support: reacting positively when Jeremy describes the team going on-site to train sales coordinators side-by-side | `[FF-PF4]` | BELIEVED (Andrew's response is affirmative but brief — "yeah, yeah" — strong signal but thin on independent elaboration) |
| VOC-017 | Speed/commitment on signing | Andrew moves quickly to close once compatibility is confirmed: agrees to e-sign same call, same day, once the IT/hosting compatibility question is resolved | `[FF-PF4]` | CONFIRMED |
| VOC-018 | Credit limit / B2B controls (secondhand, via Jeremy relaying to internal team) | Reference to whether "customers have credit limit" — framed by Jeremy as something the client needs since "they sell B2B also" | `[G]` | CLAIMED — this is Jeremy's inference relayed internally, not a direct Andrew quote in any transcript reviewed. No Fireflies transcript has Andrew raising credit limits unprompted; `[Q]` 7.3 corroborates a credit-limit interest exists but is itself sourced from the same call pool, not independent |
| VOC-019 | Weekly customer-facing text price list (secondhand, via Jeremy) | Jeremy describes the client wanting a weekly text-format (not image) item+price broadcast so "the boss can just forward this to whatever groups" | `[G]` | CLAIMED — no Fireflies transcript has Andrew describing this directly; treat as Jeremy's summary of a conversation not otherwise captured in this corpus |
| VOC-020 | Customer group vs customer-specific pricing ambiguity (secondhand, via Jeremy, but self-flagged as unresolved) | Jeremy relays that Andrew's team groups customers (e.g. "Hotels") and applies markup at the group level, but flags himself that if a customer asks "what is the price [for] Hilton Hotel" specifically, the answer needs to resolve to the customer level too, and AutoCount doesn't handle this structurally today | `[G]` | CLAIMED (secondhand relay) but internally consistent with Andrew's own confirmed statement in `[FF-PF3]` disambiguation concern (VOC-011) — the pattern of "the group isn't always granular enough" recurs, raising it to a plausible signal even though not directly quoted from Andrew |

## Phase 3 — Salience & Priority Signals

| Rank | Priority | Stated importance | Revealed importance | Confidence |
| --- | --- | --- | --- | --- |
| 1 | Integration compatibility with AutoCount (running numbers, data sync, no disruption to 10-year record) | Stated explicitly as evaluation criterion #1 (VOC-001) | Revisited across 3 separate calls with increasing specificity (VOC-005, VOC-007, VOC-012) — this is the strongest revealed signal in the whole corpus | HIGH |
| 2 | Post-sales support quality / hands-on execution | Stated as a concern in the finalization call (VOC-002) | Raised again, unprompted, on the signing call itself — the very last thing discussed before Andrew agrees to sign (VOC-002, VOC-016) — revealed importance exceeds stated, since it's what he checks right before committing money | HIGH |
| 3 | Staff adoption / minimal disruption to existing team | Stated directly (VOC-003, VOC-004) | Consistently reappears as a lens through which Andrew evaluates every other feature (training format, device usability VOC-009, physical pick-ref VOC-014) | HIGH |
| 4 | Hosting reliability/performance | Raised once, specifically (VOC-015) | Not repeated elsewhere, but raised with a concrete negative anecdote ("very laggy") rather than a generic question — concrete complaints carry more weight than generic ones despite single mention | MED |
| 5 | Granular pricing control (group vs customer-level) | Never stated as a top concern by Andrew directly | Revealed through a recurring pattern — SKU/brand-level specificity concern (VOC-011) and the unresolved group-vs-customer pricing question (VOC-020) both point at the same underlying worry: "will the system be specific enough for how we actually differentiate customers/products," even though Andrew never names this as a single concern | MED — inferred pattern, not a single directly-stated priority |
| 6 | Physical/audit-trail continuity (timestamps, physical pick-ref) | Stated directly, twice, same call (VOC-013, VOC-014) | Andrew wants digital enhancement, not digital replacement, of physical process — revealed by requesting a timestamp *in addition to*, not instead of, the physical copy | MED |
| 7 | Cost | Explicitly stated as the *last* priority (VOC-001) | Never revisited with the same intensity as compatibility/support — the corpus corroborates his own stated ranking here, one of the few places stated and revealed importance agree cleanly | HIGH (as a *low* priority — confidently ranked last) |

## Phase 4 — not used.

## Phase 5 — Empathic Interpretation Layer

`INFERENCE [HIGH confidence, anchors: VOC-001, VOC-005, VOC-007, VOC-012]`: Andrew is not buying "an AI order assistant" as a novelty — he is buying an assurance that a 10-year-old system of record will not be disrupted. Every integration question he asks is really the same question asked from a different angle: "will I still trust AutoCount after this." The product's real acceptance test, in his mind, is invisibility to the accounting layer, not visible cleverness in the WhatsApp layer.

`INFERENCE [HIGH confidence, anchors: VOC-002, VOC-003, VOC-004, VOC-016]`: Andrew's real fear is not "will the software work" but "will my team actually use it without me having to force them." His repeated probing on training format, staff time burden, and post-sales responsiveness reveals that his personal risk model for this project is adoption failure, not feature failure. A technically perfect MAIA that his sales/logistics staff quietly route around would read to him as a failed project regardless of what the system can do.

`INFERENCE [MED confidence, anchors: VOC-013, VOC-014, VOC-009]`: Andrew wants MAIA to layer onto physical/manual habits, not strip them away in one motion. He asks for a digital timestamp but keeps the physical pick-ref; he wants iPad/laptop for backend but doesn't want to force salespeople off WhatsApp. The pattern reads as a preference for augmentation over replacement at every layer of the stack — a signal that a "big bang" full-digital rollout would meet resistance even if technically superior to a hybrid one.

`INFERENCE [MED confidence, anchors: VOC-011, VOC-020]`: The customer-group markup model as currently scoped (SL-6/SL-10 in the Scope Lock) may be solving the wrong grain of the problem. Andrew's SKU/brand disambiguation concern and Jeremy's own flagged uncertainty about group-vs-customer pricing both point at the same underlying need: T.C.K's real pricing logic may be more granular (per-customer, per-brand-variant) than the "group + flat markup" model the proposal sold. If this isn't reconciled before configuration, Phase 1 risks delivering a markup engine that technically works but doesn't match how Andrew's team actually differentiates prices day to day.

## Phase 6 — What They Expect the Product to Do

1. Preserve AutoCount's existing running-number sequence exactly, with no parallel numbering scheme in MAIA (CONFIRMED — VOC-005). No scope risk; this is a fixed, testable requirement.
2. Preload customer/item/payment-term data so staff are not re-typing information AutoCount already has (CONFIRMED — VOC-006). Scope risk: LOW, but the demo experience Andrew tested fell short of this — verify the production build actually preloads before UAT, don't assume the demo gap is cosmetic.
3. Support a staged/phased rollout — sales/billing on MAIA first, finance staying in AutoCount (CONFIRMED — VOC-008). Fixed, testable, matches signed scope.
4. Provide selective, configurable sync per data type (push invoices/DN/CN, optionally withhold stock balances) (CONFIRMED — VOC-012). Testable but open-ended until the exact field-level sync map is defined (ties to Scope Lock SL-13/SL-18).
5. Timestamp pick-list completion events while preserving a physical pick-ref copy (CONFIRMED — VOC-013, VOC-014). Fixed and testable once the exact field is specified (ties to Scope Lock SL-22).
6. Disambiguate SKUs by brand/variant during order intake, not just by generic item name (CONFIRMED — VOC-011). **Scope risk — open-ended**: the proposal's customer-grouping customization doesn't explicitly cover product-side brand disambiguation; this needs its own acceptance criteria, or it will quietly fail UAT as "wrong item picked" rather than "wrong price."
7. Deliver responsive, hands-on post-sales support with a named, reachable contact during hypercare (CONFIRMED — VOC-002, VOC-016). Not really a "feature" — this is a relationship/process commitment, and should be operationalized (named contact, response-time expectation, escalation path) rather than left as a vague promise, because it's Andrew's single most-repeated concern in the whole corpus.

## Stated vs Revealed Importance

| Item | Stated | Revealed | Read |
| --- | --- | --- | --- |
| AutoCount integration compatibility | High (explicit #1 criterion) | Highest — repeated with increasing technical specificity across 3 calls | Real P1 |
| Post-sales support / hands-on execution | Medium (raised as one concern among several) | High — the last thing checked before signing | Real P1 — do not underinvest in support-process design just because it isn't a "feature" |
| Cost | Stated explicitly as lowest priority | Confirmed low — never revisited with intensity | Genuinely low priority; don't over-index scope trade-off discussions on cost |
| Customer-group markup (as currently scoped) | Stated as wanted (via the sales cycle, this is a named customization) | Revealed uncertainty — the mechanism itself (group vs customer-level) is unresolved even in Mindhive's own internal framing | **Scope-risk** — do not let the group-only model ship untested against Andrew's actual granularity need; this is the clearest "asked for X, may actually need Y" case in this corpus |
| Physical audit trail (pick-ref, signature) | Stated directly, twice | Confirmed — consistent, not a one-off ask | Real, but easy to underscope as "nice to have"; treat as a fixed requirement, not optional polish |
| Weekly customer-facing text broadcast | Not stated by Andrew directly anywhere in this corpus | Unknown — only exists via Jeremy's secondhand account | **Do-not-let-it-leak-into-go-live** as a silent assumption. This may be a real, confirmed-with-Andrew commitment that simply wasn't captured on tape, or it may be Jeremy over-promising informally. Either way, it needs a direct customer-side confirmation before being treated as locked (see Scope Lock SL-19). |

## What We Do NOT Know

| Unknown | Why it matters | How to resolve |
| --- | --- | --- |
| What sales/admin staff (the people doing ~50 orders/day of manual key-in) actually find hardest about the current process | Every "pain point" claim in this corpus is Andrew's or Jeremy's characterization, never the staff's own words — the people whose daily workflow changes most have zero direct voice here | At kickoff, run a short direct interview or shadowing session with 2-3 sales/admin staff processing real orders, before finalizing the WhatsApp order-template design |
| What Cheryl (named repeatedly as key sales-side evaluator) actually thinks of the product after her demo access | She was given demo login access across two calls but never appears as a speaker in any transcript reviewed | Get her direct feedback — even a short written summary — before finalizing the sales-side workflow design; her live reaction to the demo may contain critical UX detail entirely missing from this corpus |
| Whether the weekly customer-facing text price broadcast (VOC-019) is a real, Andrew-confirmed commitment or Jeremy's informal add-on | This item appears nowhere in the signed proposal and nowhere in any customer-side transcript — only in Jeremy's internal handover to the PM team | Ask Andrew directly, framed neutrally ("we understood you'd like a weekly text broadcast to customers — can you confirm this is something you want in Phase 1"), rather than assuming it's confirmed just because Jeremy says so |
| Logistics/warehouse team's actual reaction to the picking workflow, beyond Poh Yee Yew's single (garbled) appearance | Fulfillment workflow was flagged internally as "a key final decision blocker" (`[DH]` §4.1) yet the corpus contains only one thin, low-fidelity data point from that team | Hold a dedicated logistics requirements session early in kickoff — this was already recommended internally in `[DH]` §13.3 as a risk mitigation, and this VoC extraction independently confirms the same gap |
| Whether "group-level" markup is actually sufficient, or whether T.C.K needs customer-level price answers (VOC-020) | If the wrong grain is built, the customization ships technically working but operationally wrong | Collect 2-3 real examples from Andrew/Wei Wei of how prices are actually quoted to specific named customers today, and check whether a pure group-level model would have produced the same answer in each case |

## Bottom Line

> Andrew isn't buying a WhatsApp order bot. He's buying reassurance that a system his business has trusted for ten years won't get disrupted, staffed by people who won't quietly go back to the old way the moment nobody's watching, backed by a vendor who shows up when something breaks. Every question he's asked across six calls — running numbers, data sync, training format, hosting performance, support response — is a variation on "prove this won't blow up in my hands."

The single mistake most likely to sink this account is not a missing feature — it's treating "customer grouping with markup" as a solved, ship-and-forget customization when the corpus shows (both from Andrew's own SKU-disambiguation questions and from Jeremy's own internal admission) that the pricing granularity model may not match how T.C.K actually prices real customers. If Phase 1 ships a group-only markup engine and the first thing a sales-admin staffer needs is "what's the price for this one specific hotel," the deployment will read as broken on day one, in the exact area — pricing accuracy — that the signed proposal names as a headline problem to solve.

## Close the Loop — Next Actions

**To backlog now** (CONFIRMED, safe to scope against): VOC-005 (running-number continuity), VOC-006 (preloaded reference data), VOC-008 (phased sales-first rollout), VOC-012 (selective sync), VOC-013/014 (pick-list timestamp + physical copy retention).

**To verify first** (gated on What We Do Not Know before committing): the group-vs-customer pricing grain (VOC-020, ties to Scope Lock SL-10/SL-20), the weekly text broadcast commitment (VOC-019, ties to Scope Lock SL-19), and direct input from sales/admin staff, Cheryl, and logistics before finalizing the WhatsApp order template and picking workflow.

**To report back to Andrew:** confirm explicitly (a) the pricing granularity question — don't let this surface for the first time at UAT, (b) that the weekly text broadcast either is or isn't in scope, in writing, since it currently exists only as Jeremy's verbal account, and (c) a concrete post-sales support structure (named contact, response-time target, escalation path) — closing the loop on his single most-repeated concern with something more specific than "we'll be responsive."

**Refresh trigger:** re-run this VoC after the kickoff workshop (once sales/admin, Cheryl, and logistics have spoken directly) and again after go-live/hypercare — this pre-kickoff corpus is sales-cycle-shaped and should not be treated as the final word on operational needs once real end users start talking.

## See Also

- [[03 - Clients/Active Cooking Clients/T.C.K/T.C.K — Scope Lock]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/01_Signed Proposal - T.C.K Sdn Bhd x MAIA Proposal]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/Detailed Onboarding Handover - T.C.K Sdn Bhd x MAIA]]

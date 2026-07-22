---
owner: Gareth
status: draft
last_reviewed: 2026-07-22
client: GST Fine Foods
lark_url: https://eg69120xnei.sg.larksuite.com/docx/ZMBmdy0hko4RiVxKU4vlekQOgDf
---

# GST Fine Foods — VoC Extraction

## Phase 0 — Source Inventory & Coverage Gate

| Source | Type | Voice class | Use in this extraction |
|---|---|---|---|
| GST WhatsApp Group export (`GST Lark Wiki/GST WhatsApp Group.md`) | Chat export, GST-side (Soo Chin) directly writing | **Primary** | Direct customer voice — proposal handoff, sentiment, PIC assignment |
| `Meetings/2026-05-04 ... Requirements Gathering Transcript.md` + Fireflies raw duplicates (session A/B) | RG call transcript, garbled ASR, mixed speakers | **Primary** (customer-side turns), Secondary for Mindhive turns | Direct quotes from Soo Chin/Tim Wong/Joey Ong/Miss Lee/Jude/Tim(IT) where attributable |
| `Requirement Gathering Output - GST Fine Foods - 2026-05.md` | Internal PM synthesis of the above call | **Secondary** (vendor-mediated paraphrase of customer statements) | Used to corroborate/structure raw transcript content; downgraded one notch vs a direct quote |
| `GST SAP Vendor × Mindhive — Meeting Notes.md` + raw transcript, 2026-05-19 | Technical meeting notes, GST IT staff (Jun + unattributed others) speaking directly | **Primary** (GST IT turns), **Not customer voice** (SAP vendor / Mindhive turns) | Direct technical requirements from GST's own IT/ops side |
| `Meetings/2026-04-27 GST Fine Food GTM Brief Transcript.md` | Internal Mindhive walkthrough — one Mindhive person narrating what GST said in earlier, unrecorded calls, to colleagues | **Not customer voice** — secondhand vendor narration ("based on our discussion with them," "they told me") | Context/scope only, per P1. Never promoted to CONFIRMED. Where it names something no other source captures, tagged CLAIMED and flagged as needing direct verification. |
| SOW, Signed Proposal, Customer Narrative | Vendor-authored | **Not customer voice** | Scope/context boundaries only |
| `7May26 - GST X MAIA Gaps - Sheet1.csv`, Backward Plan | Internal delivery tracker | **Not customer voice** | Used only to check whether a VoC signal has a scope home (build status), never as evidence of what GST wants |
| `Meetings/2026-05-19 GST — WABA Account Setup Transcript.md` | Raw transcript, heavy ASR garbling | Thin/unclear whose turns are GST vs Mindhive | Skimmed — Meta/WABA account mechanics only; no operational VoC signal found |

**Coverage verdict: proceed-with-caveats.**

**Well-represented:** Operations/sales leadership voice (Soo Chin as boss, Tim Wong as Ops Manager) and IT/technical voice (Jun + GST IT team in the SAP vendor call) both speak directly and are captured close to source, even where transcripts are garbled.

**Thin or absent:**
- **Frontline sales coordinators** — the people who actually key orders and chase WhatsApp messages all day are described *about*, not heard *from*. Every pain point about "sales coordinator manually keys orders" is secondhand (RG Output synthesis, GTM brief narration) — no coordinator's own words appear in this corpus.
- **Finance (Miss Lee)** — named as an attendee in the RG session but no individually attributable quote was recoverable from the garbled transcript; her voice is folded into the "Finance Workflow" bucket without a direct anchor.
- **Warehouse/logistics staff** — completely absent. The stock-transformation and pick-list-splitting requirements come entirely from Ivan's (Mindhive) shop-floor visit notes and the SAP vendor meeting, not from a warehouse worker's own account.
- **GST's own customers** (the hotels/restaurants/supermarkets sending RFQs) — entirely absent, as expected; this is an internal-tooling deployment, not a customer-facing one, so this absence does not block the extraction.

This corpus licenses conclusions about **what GST's operations leadership and IT team said they need**. It does **not** license firm conclusions about day-to-day frontline friction — those are inferred from leadership's description of the frontline, not observed directly. Treat any "sales coordinator pain" row as BELIEVED at best, never CONFIRMED.

---

## Phase 1 — Actor & Role Register

| Raw label | Re-attributed identity | Role | Confidence | Basis |
|---|---|---|---|---|
| `~Soo Chin` (WhatsApp), "Soo Chin" (RG attendees) | Goh Soo Chin | Boss / CEO, Operations | CONFIRMED | WhatsApp handle matches RG Output attendee list; CSV names "Goh Soo Chin" as the Phase 1 UAT sign-off authority — same person across sources |
| "Tim Wong" (RG attendees), "Tim" (Backward Plan contacts) | Tim Wong | Operations Manager | CONFIRMED | CLAUDE.md contact table names Tim Wong as Operations Manager with matching email domain |
| "Tim" (IT) — RG session attendee list | Unresolved — likely a second, distinct "Tim" from IT, not Tim Wong | GST IT | BELIEVED | RG Output attendee list names both "Tim Wong (CEO/HOD)" and "Tim (IT)" separately in the same line — either two different people sharing a first name, or a transcription duplication. Not resolved in this corpus. |
| "Joey Ong" (RG attendees, CLAUDE.md), "Joey Pong" (SOW §7.2) | Joey Ong | Sales PIC / coordination PIC | BELIEVED | Same role (sole named sales coordination PIC) described in both places; "Pong" vs "Ong" is most likely a transcription/OCR slip in the SOW, not a second person — no second sales PIC appears anywhere else in the corpus |
| "Miss Lee" (RG attendees, CLAUDE.md) | Miss Lee | Finance PIC, Penang | CONFIRMED (identity), THIN (no direct quote recovered) | Named consistently across RG attendees and CLAUDE.md contact table; no individually attributable statement found in the garbled transcript |
| "Jude" (RG attendees) | Jude | GST IT | BELIEVED | Attendee list only; no individually attributable statement recovered |
| "Jun" (SAP vendor meeting participants) | Jun | GST IT/technical staff | CONFIRMED | Explicitly marked "(GST)" in the meeting notes |
| "Sharon", "Ling", "Hasma" (SAP vendor meeting participants) | Unresolved | Possibly GST IT, possibly SAP vendor-side staff | BELIEVED, unresolved | Meeting notes mark only Jun explicitly as "(GST)"; the other three are unmarked in a three-way GST/Mindhive/SAP-vendor call — could belong to either non-Mindhive party |
| "Azib Iqbal" (CLAUDE.md, backward plan) | Azib Iqbal | SAP Vendor integration PIC | CONFIRMED | Named consistently, explicitly the SAP vendor, **not GST** — his statements are vendor-side technical input, not GST customer voice |
| "Teoh Le Ying" (CLAUDE.md) | Teoh Le Ying | GST CEO's spouse | BELIEVED | Named in CLAUDE.md contact table only; no direct statement recovered in this corpus |
| Speakers 5/6/7 in raw RG transcript (session B, garbled) | Likely Soo Chin / Joey Ong / Miss Lee, unresolved which is which | GST-side (pricing discussion turns) | BELIEVED | Speaker labels are anonymous ("Speaker 5", "Speaker 6", "Speaker 7") in the ASR output; content (pricing tiers, "we have different segment customer... we not call in special price") is clearly GST-side by context (answering a Mindhive question) but cannot be mapped to a specific named individual |
| Ivan, Brendan/Bren, Johnson, Jeremy, Gareth, Jermaine | Mindhive staff | Vendor-side | CONFIRMED | Consistently marked as Mindhive across all sources — **never customer voice** |

**Checkpoint:** No *central* customer actor is unresolved enough to block extraction. Soo Chin (the decision-maker who signs UAT and appears directly in WhatsApp) and Jun (GST IT, present and speaking directly in the SAP vendor meeting) are both clearly identified and directly attributable. The unresolved identities (the second "Tim," Sharon/Ling/Hasma, which Speaker-N is which) affect attribution precision, not whether extraction can proceed — flagged per-row where relevant.

---

## Phase 2 — Grounded Evidence Extraction

| ID | Category | Customer voice / tight paraphrase | Source | Confidence |
|---|---|---|---|---|
| VOC-001 | Order intake chaos | Orders come in via per-customer WhatsApp groups, email, handwritten notes (Penang), phone, and voice message — no single channel; volume causes coordinators to miss items ("10 orders come in, 8 get keyed, 2 are lost") | `[RG Output — Pain Points, Order Management Chaos]`, corroborated in spirit by raw transcript session B ("daily order... heating system") | BELIEVED |
| VOC-002 | Product matching | Customers describe the same item up to 10 different ways across different customers; no standardised matching today | `[RG Output — Pain Points]` | BELIEVED |
| VOC-003 | Stock overselling | No real-time stock reservation — one salesperson commits stock, a second salesperson sells the same physical stock, and the first salesperson's customer can't be fulfilled | `[RG Output — Pain Points]`; direct raw transcript fragment: "salesperson send order... the actual dosage... manual the deduction... control on order order confirmation... oversell just a system the block" | CONFIRMED (mechanism is directly described in the raw transcript, even though garbled) |
| VOC-004 | SAP/business misalignment | "SAP setup doesn't match business process" — SAP captures stock by weight (kg) but whole fish is received/counted by piece | `[RG Output — Pain Points]`, attributed to Ivan (Mindhive) paraphrasing GST, corroborated by raw transcript: "based on number of fish rather than weight... the metric storage the metric... so it has set up like that... using my SAP setup... processing the setup not aligner misalignment" | CONFIRMED (garbled but the core claim — SAP UOM mismatch with physical counting practice — is directly present in the customer-side turn) |
| VOC-005 | No stale-stock alerting | Slow-moving/aging stock can sit unnoticed for months before anyone reacts, by which point the opportunity to push it to a customer is gone | `[RG Output — Pain Points]`; GTM brief narration corroborates: "if let's say detect that any batch or any lot of stock going to expire soon, we also need to sort of send a reminder to sales" | CLAIMED→BELIEVED (GTM brief is vendor narration, but RG Output — a separate, later session — independently reports the same pain, which corroborates it) |
| VOC-006 | Credit approval friction | Credit approval is fully manual: salesperson fills a paper/WhatsApp form → manager signs a PDF → finance manually approves in SAP; specific named individuals hold approval authority today | `[RG Output — Pain Points]`, `[CSV — Pre-Phase 1 Gate #13, "Specific people have authority to approve credit"]` | BELIEVED |
| VOC-007 | Outdoor sales access gap | Outdoor salespeople have no SAP access; they call/WhatsApp the office for invoice PDFs, sometimes sent to the wrong person, with 1–2 day delays | `[RG Output — Pain Points]` | BELIEVED |
| VOC-008 | Manual SOA generation | Statement of Account is manually generated per customer and emailed — no customer self-service exists today | `[RG Output — Pain Points]` | BELIEVED |
| VOC-009 | Fragmented payment trail | When a customer pays, notification goes customer → salesperson (WhatsApp) → salesperson notifies finance — no single trail | `[RG Output — Pain Points]` | BELIEVED |
| VOC-010 | Fish cutting / yield complexity | Whole salmon becomes fillet + head + tail (separate SKUs, separate prices); yield conversion (e.g. 30kg whole → 20kg fillet) is done by mental arithmetic/experience, not system-captured | `[RG Output — Captured Requirements]`; raw transcript directly: "whole fish... fillet... second scenario buy directly fillet... the good in shootout... inventory... cutting process SOP" | CONFIRMED |
| VOC-011 | New SKU velocity | Roughly 10 new SKUs are added per month | `[RG Output — Pain Points]` | BELIEVED |
| VOC-012 | Pricing structure | GST prices by customer segment via 4 price tiers, using SAP Blanket Agreements — not ad hoc "special pricing"; salesperson does not choose the price, the customer's tier does | Raw transcript, direct GST-side quote: *"We have the different price but we not call in special price. We have the different segment customer... we didn't do any special price... normally follow our quotation prices for every customer."* | **CONFIRMED — direct quote, clearly attributable to a GST speaker answering a Mindhive question** |
| VOC-013 | Blanket Agreement mechanics | Pricing is locked in the system when set: "If we set in lock the price in the system, they will follow. But basically we are based on the salesperson's..." | Raw transcript, direct GST-side quote (Speaker 7) | CONFIRMED |
| VOC-014 | RFQ / substitution behaviour | Hotels send Excel RFQs with lines in customer wording; when GST can't fulfil exactly, staff substitute by species/origin or cut, using experience-based judgment, not a documented rulebook | `[GTM Brief — 2a]` (Mindhive narration of client, **not directly heard from GST in this corpus** — no RG-session corroboration was recoverable for the substitution *decision rights* specifically) | CLAIMED — flagged for direct verification; the general RFQ/substitution pattern is plausible and consistent with VOC-002, but the specific claim that substitution rules "live in people's heads" with no documented matrix has not been heard from GST directly |
| VOC-015 | "Live" stock trust gap | SAP inventory isn't trusted as current because people don't post in time; finance/ops pulls a daily Excel snapshot that sales treats as their working "truth," and still phones internally to "double confirm" before committing stock on risky deals | `[GTM Brief — 2b]` (Mindhive narration) | CLAIMED — plausible and consistent with VOC-003, but not independently heard from a GST speaker in this corpus |
| VOC-016 | Expiry/ageing thresholds are informal | GST described ageing risk in loose terms — "two weeks," "could be a month or two" — no fixed rule exists | `[GTM Brief — 2b]` (Mindhive narration, explicitly noting the speaker "is not precise" about the number) | CLAIMED |
| VOC-017 | Blanket-style commitments without a PO | Some accounts (e.g. restaurant/hotel) commit to large volumes over time without issuing a formal PO; GST tracks this "usage proper" separately from normal stock, and purchasing buys ahead against the earmark | `[GTM Brief — §4]` (Mindhive narration) | CLAIMED — **since resolved as OUT OF SCOPE.** The Lark Scope Lock v1.2 (2026-06-23, discovered after this extraction was first drafted) records that this idea — tracked there as CPR/CPRN — was explicitly validated during the RG session as "not a common use case" for GST and marked out of scope; the substitute is reserved-quantity visibility inside the normal order flow (Scope Lock SL-09). The rows below (Phase 3 rank 7, Stated vs Revealed) have been updated to reflect this — treat CPRN as closed, not as an open approval-model question. |
| VOC-018 | Document face matters — Crystal Reports | GST repeatedly stressed (per Mindhive's account) that any generated document must match their existing Crystal Reports format — "same formula," described as their premium/formal look, not a generic PDF | `[GTM Brief — §5]` (Mindhive narration, but heavily corroborated elsewhere) | CLAIMED, but **strongly corroborated** — the SOW independently calls this "non-negotiable" `[SOW §2.3]`, and the delivery tracker treats all 6 document types as gated on GST-provided samples and GST sign-off `[CSV — PDF Generation]`. Net confidence: BELIEVED. |
| VOC-019 | SKU changes must sync fast | When product state changes mid-conversation (e.g. customer and sales agree on "fish head" instead of whole fish), GST wants the system change to show up in MAIA quickly so sales don't promise against a stale SKU | `[GTM Brief — §5]` (Mindhive narration); independently corroborated by the SAP vendor meeting's direct discussion of stock-transformation sync with GST's own IT staff (Jun et al.) | BELIEVED |
| VOC-020 | Document numbering hack | GST already runs a workaround where generating an invoice auto-generates a duplicate DO page with the same number, to reduce customer confusion | `[CSV — Pre-Phase 1 Gate #12]`, corroborated in `[SAPV — Key Point D]` directly from GST IT's technical description of their SO→DO→Invoice flow | CONFIRMED |
| VOC-021 | Warehouse team split | Pick lists must print separately for the frozen team vs the ready-packed team, based on item group — GST's own process, not a MAIA invention | `[CSV — Pre-Phase 1 Gate #11]`, confirmed via Ivan's (Mindhive) shop-floor visit — secondhand vendor observation of a real process, not a direct GST quote, but grounded in physical observation rather than narration | BELIEVED |
| VOC-022 | Multi-invoice payments and partial knock-off | Real payment flows require one payment to cover multiple invoices, and partial payments against a single invoice — both already handled today | `[SAPV — Key Point F]`, direct from GST IT's technical description | CONFIRMED |
| VOC-023 | Custom SAP fields exist and matter | GST uses SAP custom/UDF fields outside MAIA's standard model; GST's own IT team confirmed capability to build custom endpoints if the standard integration falls short | `[SAPV — Key Point A, Main Point 3]`, direct from Jun/GST IT | CONFIRMED |
| VOC-024 | Security posture | GST enforces strict IT security protocols that complicate external server/environment access | `[SAPV — Key Point G, Main Point 3]` | BELIEVED (attributed to "GST enforces" in meeting notes, not a verbatim quote, but from the technical meeting with GST IT directly present) |
| VOC-025 | Early eagerness to start | On signing, Soo Chin responded quickly and positively to Mindhive's outreach — "Alright, will go through this," and days later shared the signed proposal document herself, unprompted follow-up | `[WA — 2026-04-13, 2026-04-24, Soo Chin]` | CONFIRMED — direct WhatsApp quotes |
| VOC-026 | GST self-manages WhatsApp/WABA | GST wants to handle their own Meta Business/WABA account setup rather than have Mindhive fully own it | `[BP — Channel section]`, cross-referenced against the WABA transcript's operational back-and-forth about internal vs external Meta account structuring — GST-side turns present but not individually attributable in the garbled ASR | BELIEVED |
| VOC-027 | Unmet adjacent request — sales check-in / location | Soo Chin asked (2026-05-07/08) for sales check-in/location and customer-visit reporting; Ivan told her directly that MAIA doesn't currently have this feature | `[GST Forensic Account Dossier, Lark, 2026-06-22 — B1 rank 5, B6, B9]`, citing WhatsApp evidence not present in this extraction's own corpus (surfaced only after cross-checking Lark) | CONFIRMED — direct GST request and direct Mindhive response, both quoted in the dossier's source trail |

---

## Phase 3 — Salience & Priority Signals

| Rank | Priority | Stated importance | Revealed importance | Confidence |
|---|---|---|---|---|
| 1 | Stock overselling / reservation (VOC-003) | High — described as a named, recurring, named-consequence problem | Highest — it's the one pain point independently described in *both* the vendor's secondhand GTM narration and the direct RG-session transcript, and it maps to the single largest build item in the SOW (business rule checks) | BELIEVED (revealed importance is CONFIRMED via cross-session repetition) |
| 2 | Document face — Crystal Reports match (VOC-018) | Repeated "over and over" per the Mindhive narrator's own account | High — independently treated as a hard gate in the SOW ("non-negotiable") and structured as its own UAT acceptance metric (100% human-reviewed layout match) `[SOW §8.7]` | BELIEVED |
| 3 | Pricing correctness / Blanket Agreement fidelity (VOC-012, VOC-013) | Directly and confidently stated by GST in their own words | High — this is the one area where GST spoke with the most precision and least hedging in the entire corpus, suggesting pricing errors are a low-tolerance failure mode for them | CONFIRMED |
| 4 | Product matching / RFQ handling (VOC-002, VOC-014) | Stated as a major daily pain in vendor narration | Medium-high — corroborated by RG Output and reflected in SOW acceptance metrics (match acceptance rate, quotation time reduction), but the actual decision logic (substitution rights) has never been heard directly from GST | BELIEVED (existence) / thin (mechanics) |
| 5 | Fish-cutting/yield sync speed (VOC-010, VOC-019) | Stated with urgency in vendor narration ("almost live") | Medium — independently discussed with GST's own IT team in the SAP vendor session, but the actual acceptable lag was never pinned to a number by GST in any source (see What We Do Not Know) | BELIEVED |
| 6 | Credit/payment approval trail (VOC-006, VOC-009) | Stated as a control/visibility problem | Medium — real and specific (named approvers exist), but described in less emotionally loaded language than stock or pricing, and already substantially built per the delivery tracker | BELIEVED |
| 7 | CPRN/blanket-commitment tracking (VOC-017) | Stated as something GST wants ("this is used for...") in vendor narration only | **Resolved, not low-priority-and-open** — Scope Lock v1.2 shows this was actively decided out of scope during RG, not left hanging | CLAIMED, decision now CONFIRMED via `[SL-v1.2 | SUP-01]` |
| 8 | Aging/clearance alerts (VOC-005, VOC-016) | Stated as wanted, loosely | Low — thresholds were never made concrete by GST in any direct or secondhand source; treated internally as Phase 2 and gated on batch/serial data that isn't even confirmed to exist in SAP yet | CLAIMED |

---

## Phase 4 — not used.

## Phase 5 — Empathic Interpretation Layer

**INFERENCE [BELIEVED, anchors: VOC-003, VOC-004, VOC-010]:** GST's real fear is not "we lack software" — it's that the *physical* business (fish cutting, weight-based yield, informal reservation) has outrun what their existing system (SAP, set up around discrete SKUs and weight, not pieces and transformation) can represent. What GST is buying is not a chatbot; it's a translation layer that can hold operational truth their ERP structurally can't — which is why stock-overselling (VOC-003) and the SAP/UOM mismatch (VOC-004) surface together every time this is discussed, in every session, regardless of who's speaking.

**INFERENCE [CONFIRMED-adjacent, anchors: VOC-012, VOC-013, VOC-020]:** When GST talks about pricing and document numbering, their language is precise, procedural, and confident — they already have a system (four tiers, Blanket Agreements, a numbering hack) and are describing *existing competence*, not a pain point. This is a signal that GST does not want MAIA to reinvent their pricing/document logic; they want it faithfully reproduced. Any MAIA design that "improves" or restructures pricing logic without being asked risks reading as MAIA not having listened, even if technically superior.

**INFERENCE [BELIEVED, anchors: VOC-018, VOC-020, VOC-004]:** The repeated, almost defensive insistence on Crystal Reports fidelity ("must be similar to... the premium one... not mass used") suggests document appearance functions as a trust signal to GST's own customers (hotels, restaurants) — a generic-looking PDF may read to GST as MAIA cutting corners on a system their customers see, not just an internal tooling preference. This raises the reputational stakes of PDF-matching beyond what a UAT checklist item usually carries.

**INFERENCE [CLAIMED, anchors: VOC-017]:** GST's blanket-commitment/CPRN pattern is described only through Mindhive's account of what GST said in an earlier, unrecorded call — and GST has not resolved the one gating question (who approves a release) despite it being flagged since at least the SOW draft. This silence itself is a signal: either the pain isn't as pressing as the sales narrative suggests, or the decision genuinely requires input from people (purchasing, ownership) who haven't yet been in a room with Mindhive. Building this ahead of that resolution (as the backward plan currently shows — see the Scope Lock's Supersession #1) risks building the wrong approval graph for a real GST political structure nobody has actually described yet.

---

## Phase 6 — What They Expect the Product to Do

1. Capture orders arriving through whatever channel a customer actually uses (WhatsApp, handwritten note, phone, voice message) without losing any of them. (VOC-001) — *testable, but the "any channel" framing is open-ended; scope risk if not fixed to WhatsApp + Excel per SOW.*
2. Suggest the correct internal SKU from messy customer wording, including cut/species/weight variants, and let staff confirm rather than auto-commit. (VOC-002, VOC-014)
3. Prevent two salespeople from selling the same physical stock without either side knowing. (VOC-003) — concrete, testable, and the single highest-stakes item per Phase 3.
4. Represent fish-cutting/repackaging transformations (whole → fillet/head/tail; bulk → retail pack) as distinct SKUs with correctly split cost, synced from SAP quickly enough that sales never quotes against a stale SKU. (VOC-004, VOC-010, VOC-019)
5. Apply the correct customer-specific Blanket Agreement price automatically, not a generic tiered guess. (VOC-012, VOC-013) — concrete and testable; GST described this with unusual precision, so a wrong-price test failure here would land harder than elsewhere.
6. Block or escalate a sale when a customer is over their credit limit, routed to the specific people who already hold approval authority today. (VOC-006)
7. Generate every document (QT, SO, DO, Invoice, Pick List, CN) visually and structurally matching GST's existing Crystal Reports output, including their existing DO/Invoice shared-numbering hack. (VOC-018, VOC-020) — fixed-format, testable via GST sign-off, but currently blocked on GST actually supplying the 6 PDF samples (see Scope Lock SL-8).
8. Let outdoor salespeople retrieve and forward invoices from mobile without VPN. (VOC-007)
9. Give finance a clean approval trail for payment slips and credit exceptions, closing the current "who approved what" visibility gap. (VOC-006, VOC-009)

---

## Stated vs Revealed Importance

| Item | Stated | Revealed | Read |
|---|---|---|---|
| Stock overselling / reservation | High | Highest — repeated across independent sessions, largest scoped build item | Real P1 |
| Crystal Reports document fidelity | High ("non-negotiable" per vendor narration) | High — SOW makes it its own acceptance gate, but GST still hasn't delivered the PDF samples needed to validate it | Real P1, **but currently a self-inflicted scope-risk** — GST has not yet supplied the artefact their own top priority depends on validating |
| Pricing / Blanket Agreement accuracy | High, stated with precision | High | Real P1 |
| Deep RFQ / substitution matching | High per vendor narration | Medium — no direct GST voice on urgency or specific substitution rules exists in this corpus, and it's the item internally marked "Out of Scope" with no evidence GST was told (see Scope Lock SL-20) | **Scope-risk / do-not-let-it-leak-into-go-live** — a mismatch between what GST believes was sold (per SOW/proposal) and what's internally being built could surface badly at UAT |
| CPRN / blanket commitment tracking | Stated as wanted, per vendor narration only | Resolved — Scope Lock v1.2 confirms this was deliberately declined during RG, not silently dropped | **Not a risk.** Correction from an earlier draft of this table: the "Blanket Order" item "In Progress" in the July backward plan is a *different* thing — SAP Blanket Agreement pricing match (Scope Lock SL-03) — not CPRN. Do not conflate the two. |
| Aging/clearance alerts | Stated as wanted, loosely | Low — no concrete threshold ever given by GST, dependent on SAP batch data whose existence isn't even confirmed | Phase 2, low urgency |
| Fish-cutting sync speed | Stated with urgency ("almost live") | Medium — GST's own IT team engaged directly on this in the SAP vendor session, but no number was ever pinned down | Real, but **needs a number before it can be tested** — currently untestable as written |

---

## What We Do NOT Know

| Unknown | Why it matters | How to resolve |
|---|---|---|
| What GST's actual frontline sales coordinators experience day-to-day (their own words, not leadership's description of them) | Every "coordinator" pain point in this corpus is secondhand; the people who'll use MAIA daily have not been heard from directly, and adoption typically lives or dies on frontline reality, not leadership's framing of it | Observe one full real order-intake shift with a Penang sales coordinator (per the RG session's own request for a screen recording of SAP order entry — still not delivered per the artefact tracker) and collect 2–3 real WhatsApp order threads as spoken |
| Whether GST actually wants deep RFQ/substitution matching (Customisation 1) at the priority the SOW implies, or whether it can be dropped without disappointing them | It's currently internally marked "Out of Scope" with zero evidence GST was consulted; conversely no direct GST voice confirms it as urgent either | Get 2–3 real historical RFQ examples directly from Joey Ong or a sales coordinator, walked through live, and ask GST plainly whether Customisation 1 is still expected |
| GST's actual CPRN/blanket-commitment approval model preference (owner / manager / purchasing) | This has been an open, named blocker since the SOW draft; building the Blanket Order doctype (per the backward plan) without it risks building the wrong approval graph entirely | Get a direct answer from Soo Chin or Tim Wong — a single yes/no-style question, not requiring a new discovery session |
| Acceptable sync lag between a SAP stock-transformation event and MAIA reflecting the new SKU | "Almost live" is not a testable spec; a wrong choice either causes stale-SKU document mismatches (too slow) or unnecessary infra cost (too fast/frequent) | Ask GST's IT team (Jun) for a concrete number in the next SAP integration working session — this is a natural extension of the sync work already scheped in `[SAPV]` |
| Whether Batch/Serial tracking is even active in GST's SAP today | Aging/expiry alerts (Phase 2) structurally depend on this; nobody has confirmed it exists | Have GST IT check and confirm in the SAP UAT environment once access is granted |
| Which "Tim" is which, and who Sharon/Ling/Hasma are (GST vs SAP vendor) | Attribution precision affects how much weight future VoC re-runs should give specific technical claims | Ask Gareth or Jermaine directly at the next SAP vendor session — trivial to resolve, not yet done |

---

## Bottom Line

> GST isn't asking MAIA to make their team faster at typing. They're asking it to hold a version of operational truth — what's really in stock after cutting, what price this specific customer actually gets, what's already been promised to someone else — that their own ERP wasn't built to represent, and that today lives only in a shared Excel sheet, a phone call to "double confirm," and the memory of whoever's been there longest. The business already runs; the fear is that it runs on people, not on record.

The single mistake most likely to sink this account is **not** a missing feature — it's building Phase 2 customisations (CPRN, SOA, Aging Alerts) into July's delivery calendar, and quietly dropping a paid Phase 2 line item (deep RFQ matching) from internal scope, while three foundational Phase 1 decisions GST itself was asked to make (stock source of truth, first branch, CPRN approval model) still sit unanswered months later. If UAT in August surfaces "wait, we thought X was included" or "why does this only work for KL when we said Penang," the damage will not read as a bug — it will read as MAIA not having listened, which is precisely the failure mode GST's own careful, precise language about pricing and document format (VOC-012, VOC-018, VOC-020) shows they will notice and care about.

---

## Close the Loop — Next Actions

**To backlog now** (CONFIRMED / strongly-BELIEVED, safe to build against):
- VOC-003 stock reservation/overselling prevention
- VOC-010/VOC-019 fish-cutting SKU transformation + fast sync
- VOC-012/VOC-013 Blanket Agreement pricing fidelity
- VOC-018/VOC-020 Crystal Reports document + numbering fidelity
- VOC-006/VOC-022/VOC-023 credit approval, multi-invoice payment, custom SAP field handling

**To verify first** (gated on What We Do Not Know before committing further build time):
- Deep RFQ/substitution matching priority and mechanics (VOC-014) — get real GST voice before either building or dropping it
- CPRN approval model (VOC-017) — get Soo Chin/Tim Wong's direct answer before continuing the Blanket Order build already "In Progress"
- Sync-lag number for stock transformation (VOC-019) — get a concrete figure from Jun/GST IT
- Aging/expiry feature — confirm Batch/Serial tracking actually exists in SAP before scoping further

**To report back to GST** (close the loop — "you said X, here's what we're doing"):
- Confirm directly with Soo Chin/Joey Ong whether the deep RFQ matching customisation (part of the paid RM7,500 bundle) is still expected, given it's currently marked internally Out of Scope with no record of telling them.
- Tell GST plainly that CPRN/SOA/Aging are being built now, ahead of their contracted Phase 1-UAT gate, and confirm this sequencing is actually what they want (ties directly to Scope Lock Supersession #1).
- Close the loop on the two still-open foundational decisions (stock source of truth, and reconfirming Penang as first branch — see Scope Lock v2 NSD-06 and SC-07).
- Close the loop with Soo Chin specifically on the sales check-in/customer-visit-location request (VOC-027) — it was answered informally in the moment ("MAIA doesn't have this") but never formally closed as declined, deferred, or quotable as a change request. Silence since 2026-05-08 risks reading as ignored.

**Correction note (2026-07-22):** an earlier pass of this document treated CPRN/blanket-commitment approval as an unresolved, still-open decision. Cross-checking against Lark's Scope Lock v1.2 (2026-06-23) — which was not in this extraction's original source set — shows CPRN was already deliberately validated as out of scope during the RG session, not left hanging. VOC-017 and its downstream rows have been corrected above; do not re-raise CPRN with the client as an open question.

**Refresh trigger:** Re-run this VoC extraction after Phase 1 UAT (planned 2026-08-04–06) — UAT is the first point where frontline sales coordinators and finance will interact with MAIA directly, which is exactly the voice this corpus is currently thin on. Also re-run immediately if GST assigns a second branch (KL) live, since a large share of current evidence is Penang-specific and may not transfer.

---

## See Also

- [[GST Fine Foods — Scope Lock]]
- [[GST Fine Foods Customer Narrative]]
- [[Requirement Gathering Output - GST Fine Foods - 2026-05]]
- [[GST Fine Foods — GTM Brief Context and Unclear Items]]
- [[GST SAP Vendor × Mindhive — Meeting Notes]]

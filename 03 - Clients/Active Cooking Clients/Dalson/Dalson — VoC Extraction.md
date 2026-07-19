---
owner: Gareth
status: draft
last_reviewed: 2026-07-19
---

> **Update 2026-07-12:** PM confirms most flags below align with current account state. Two items resolved since original extraction: (1) Telegram as production channel confirmed with client (channel-switch risk closed), (2) cost transparency has been addressed/noticed by client (no longer an open trust gap). Resolved items marked inline below; rest of extraction unchanged.
>
> **Update 2026-07-14:** Owner's real name ("Yap Li Min") confirmed during Scope Lock reconciliation (2026-07-12/13) and now propagated into the Actor & Role Register below, aligning with Scope Lock, UAT Checklist, and End-user & Process Map.
>
> **Update 2026-07-19:** Per Lens Alignment Report v3 — sales coordinator and warehouse/packing staff identities resolved via the MAIA User List (Sample Data Checklist doc, Lark), propagated below. SL-11 (chatbot customer/item creation) promoted to LOCKED — this was VoC's own top-2 priority signal (Phase 3, Rank 2); status language throughout updated to reflect resolution. SL-13 (SO-stage reinterpretation) resolved in Scope Lock v2 — status language updated accordingly.

# Dalson Industrial Supplies — Voice of Customer (VoC) Extraction

## Phase 0 — Source Inventory & Coverage Gate

| Source | Type | Voice class | Use in this extraction |
|---|---|---|---|
| `Dalson Requirements gathering-transcript.md` (2026-05-22) | Meeting transcript, Granola auto-sync | Primary (degraded) | Sole source of direct customer voice |
| `Dalson Industrial Supplies Customer Narrative Document.md` | Vendor-authored handover doc | Not customer voice | Scope/context comparison only |
| `Dalson MAIA autocount integration.md` | Vendor-authored checklist + client-provided credentials/contact | Mixed (contact fields = customer-provided data, prose = vendor) | Actor resolution (Ms Tan) only |
| `dalson_industrial_supplies_facet.md` / `.yaml` | Vendor-built item taxonomy | Not customer voice | Not used (no VoC content) |
| Scope Lock v1 — Dalson Industrial Supplies (Lark, 23 Jun 2026) | Vendor-authored scope analysis | Not customer voice | Divergence/risk comparison only |

**Transcript quality warning:** the transcript is single-block, un-diarized ASR output. It carries one `You` speaker label for a ~2,700-word exchange that is clearly a two-way (or more) conversation — vendor questions and customer answers are interleaved without speaker tags, and the ASR itself is garbled in places ("purple engineers", "S also can invoice", "one package person"). Attribution below is reconstructed from conversational logic (who would plausibly say which line), not from clean labels.

**Coverage verdict: proceed-with-caveats.**

- Well-represented: the Dalson owner/principal's voice on order intake, item/SKU matching, invoicing, credit notes, receipts, delivery, and cost sensitivity — this person clearly drove the customer side of the call and speaks with ownership authority ("my business", "my clients", decisions on policy).
- Thin or absent: the actual sales coordinators, warehouse/packing staff, and delivery drivers are *referenced* by the owner ("they are mainly inside office", "I will send PO to the guy, and he will pack that") but never speak. Every claim about how coordinators or warehouse staff actually work is the owner's secondhand description, not their own voice — treat operational detail about their day-to-day as BELIEVED at best.
- Ms Tan (AutoCount dealer/support, external) is referenced as the technical contact but does not speak in this transcript.
- This extraction cannot confirm end-user (coordinator/warehouse/driver) adoption friction — only the owner's expectations of them.

---

## Phase 1 — Actor & Role Register

| Raw label | Re-attributed identity | Role | Confidence | Basis |
|---|---|---|---|---|
| "You" (majority of transcript) | Dalson Owner/Principal — **Yap Li Min**, aka "Xiao Bai" (nickname used during early Scope Lock reconciliation; Yap Li Min is her real name per the MAIA User List, 2026-07-19) | Customer — decision-maker, business owner | CONFIRMED | Attendee `dalsonmultisupply@gmail.com`; first-person ownership language throughout ("my business", "my clients", sets credit-note policy, negotiates cost) |
| "she" / "her" (invoice/customer creation, office-based) | Internal Sales Coordinator — **Asilah Amirah binti Khairuddin** (name confirmed 2026-07-19 via MAIA User List, `dalsonsales.wei@gmail.com`) | Customer — order processing, invoicing, in-office | CONFIRMED identity (User List); role description still BELIEVED — owner describes her in third person: "they are mainly inside office... customer send POs, they just upload them"; she has not spoken directly in any source yet |
| "the guy" (packing) | Warehouse/Packing Staff — **Joseph** (Admin/Store Keeper, name confirmed 2026-07-19 via MAIA User List) | Customer — fulfillment | CONFIRMED identity (User List); role description still BELIEVED — owner: "I will send PO to the guy, and then he will just pack that"; secondhand only |
| "she can assist... dealer of AutoCount" | Ms Tan, AutoCount Software Support | Customer-side contractor — AutoCount setup/dealer, handles Dalson's accounting/P&L | CONFIRMED | Cross-referenced against `Dalson MAIA autocount integration.md` contact table: "Ms Tan, AutoCount Software Support, easysoftprosolution@gmail.com" |
| Implicit vendor voice throughout | Brendan (+ Jeremy, Natalie present but not clearly attributed speech) | Vendor — Mindhive/MAIA onboarding team | CONFIRMED (attendance) / not customer voice | Attendee list: `jeremy@mindhive.asia`, `natalie@mindhive.asia`, `brendan@mindhive.asia` |

**Checkpoint:** the central customer actor (owner) is identifiable with reasonable confidence and drives the extraction. No central actor is unresolved enough to block extraction — but the coordinator/warehouse/driver roles remain unheard, which caps confidence on any operational (not policy) claim attributed to them.

---

## Phase 2 — Grounded Evidence Extraction

| ID | Category | Customer voice / paraphrase | Source | Confidence |
|---|---|---|---|---|
| VOC-001 | Inventory scope | Owner trades heavily — stock comes in and goes straight back out; only the retail-facing stock is inventory that actually needs managing/tracking | Transcript | BELIEVED |
| VOC-002 | Fulfillment model | No drop-shipping — orders go straight from Dalson's own office/warehouse to the customer, not routed through a third party | Transcript | BELIEVED |
| VOC-003 | Order channels (B2B) | B2B customers either pick up themselves or Dalson delivers | Transcript | BELIEVED |
| VOC-004 | AutoCount ownership | Owner set up their own AutoCount instance themselves (with the dealer's help), did not inherit it | Transcript | BELIEVED |
| VOC-005 | Data export need | Owner wants to export: full order history, customer info, customer credit limit/credit terms, inventory, and pricing — to be uploaded into MAIA | Transcript | CONFIRMED |
| VOC-006 | Stock tracking scope | Only a few specific items need real stock-count tracking; most SKUs don't need it | Transcript | BELIEVED |
| VOC-007 | Customer data structure | Dalson keeps everything in one single customer table/ledger — no separate "customer master" vs "invoicing" table split (unlike a prior client the vendor mentioned) | Transcript | CONFIRMED |
| VOC-008 | Document samples | Owner will provide one sample each of: PO, quotation, invoice, delivery order — specifically the actual client-facing formatting, not a bulk export | Transcript | CONFIRMED |
| VOC-009 | Accounting engagement | Owner wants the AutoCount dealer (Ms Tan) looped in directly to work out how data gets pushed into AutoCount — sees this as a distinct, necessary conversation | Transcript | CONFIRMED |
| VOC-010 | Driver/delivery workflow expectation | Owner wants a driver-facing workspace: after a delivery is scheduled, the driver takes a photo as proof | Transcript | CONFIRMED |
| VOC-011 | Current POD handling | Today, delivery proof is exchanged informally over WhatsApp; owner does not currently manage/organize this — wants MAIA to hold and status-track it instead | Transcript | BELIEVED |
| VOC-012 | DO retrieval pain | Owner explicitly wants to be able to retrieve a past delivery order later ("master DO") because right now DOs are just printed and searched for manually in a WhatsApp thread — described as hard to find again | Transcript | CONFIRMED |
| VOC-013 | Payment terms (new customers) | New customers typically pay immediately (no credit period) | Transcript | BELIEVED |
| VOC-014 | Invoice content | Invoice needs only standard fields — nothing unusual required beyond what's already in their current invoice format | Transcript | CONFIRMED |
| VOC-015 | New customer creation — desired capability | Owner wants to know if MAIA can create a new customer/vendor record directly, without manually keying into AutoCount each time | Transcript | CONFIRMED |
| VOC-016 | New customer creation — frequency/pain | New customers come in "on and off, every day" — this is a recurring, not edge-case, workflow for Dalson | Transcript | CONFIRMED |
| VOC-017 | New customer creation — fallback tolerance | If full automated customer creation isn't possible, owner is open to a minimal fallback: open a basic invoice with just enough info, push to AutoCount later | Transcript | BELIEVED |
| VOC-018 | Role split (field vs office) | Owner is "always out" (field/mobile); the in-office coordinator(s) handle direct AutoCount data entry and invoice/customer creation because they're desk-based | Transcript | BELIEVED |
| VOC-019 | Order intake process (today) | Customers send POs to staff; staff upload them into the system; no formal pick list exists today | Transcript | BELIEVED |
| VOC-020 | Fulfillment process (today) | Once an order is confirmed, the PO is forwarded to a warehouse staff member ("the guy") who packs it directly — no intermediate pick-list step | Transcript | BELIEVED |
| VOC-021 | Document types used today | Owner confirms they currently use quotation and invoice; explicitly says **no sales order** exists in their current process | Transcript | CONFIRMED |
| VOC-022 | Credit note policy | Credit notes are issued against a specific invoice ID/item, not at the customer-account level — owner explicitly distinguishes this from another client's account-level approach the vendor described, confirming invoice-level is Dalson's actual practice | Transcript | CONFIRMED |
| VOC-023 | Receipts — current behavior | Dalson does **not** currently generate receipts for customers as standard practice | Transcript | CONFIRMED |
| VOC-024 | Receipts — desired behavior | Receipts should only be generated on customer request, not by default | Transcript | CONFIRMED |
| VOC-025 | Cost transparency gap | Owner was not informed in advance about the per-order token/AWS cost layer and reacted with surprise/frustration ("nobody tell me all this cost") | Transcript | CONFIRMED |
| VOC-026 | Cost sensitivity | Owner is price-sensitive on the usage-based cost model and wants a clear, predictable understanding of what one order actually costs (~30 sen/order estimate given) before committing | Transcript | CONFIRMED |
| VOC-027 | Payment mechanics concern | Owner is uneasy about the token top-up model (needing to attach a credit card, buying more tokens as they run low) — wants a simpler mental model | Transcript | BELIEVED |
| VOC-028 | WhatsApp setup unfamiliarity | Owner needs a dedicated new phone number solely for MAIA's WhatsApp Business account, and repeatedly double-checks unfamiliar mechanics ("no one can use it at all?") — signals this setup step needs hand-holding, not a self-serve doc | Transcript | CONFIRMED |
| VOC-029 | OpenAI API key handling — technical comfort | Owner asks basic questions about how/where to safely store the API key ("put in a pen drive?") — signals low technical sophistication and a need for a guided, not written-only, setup process | Transcript | CONFIRMED |
| VOC-030 | Item/SKU creation via chatbot | Client confirms need extends beyond customer creation to **item creation** via chatbot — new SKUs must be creatable through the MAIA/Telegram chat flow, not just referenced from existing master data | PM confirmation, 2026-07-12 | CONFIRMED |

---

## Phase 3 — Salience & Priority Signals

| Rank | Priority | Stated importance | Revealed importance | Confidence |
|---|---|---|---|---|
| 1 | SKU/item-description matching risk | Not stated outright in this transcript, but implied throughout by the level of detail owner gives on stock/SKU structure | High — owner spent significant conversational time walking through stock categorization and "different roles down there" for similar SKUs | BELIEVED |
| 2 | New customer creation (daily-frequency, blocked on AutoCount validation) | Explicitly raised and pressed on twice by owner | High — owner pushed vendor for a direct yes/no answer and only accepted "I'll check" reluctantly; frequency stated as daily | CONFIRMED |
| 3 | DO retrieval / document trail visibility | Explicitly raised — owner describes today's pain (printed + WhatsApp search) unprompted | Medium-high — concrete anecdote of failure mode ("maybe I cannot find it anymore") | CONFIRMED |
| 4 | Cost transparency and predictability | Explicitly and emotionally raised ("nobody tell me all this cost") | High — genuine frustration in the moment, not a rehearsed question | CONFIRMED |
| 5 | Delivery proof-of-photo capture | Explicitly requested (driver workspace) | Medium — described as wanted, not framed as a current crisis | CONFIRMED |
| 6 | Receipts | Explicitly stated as low priority | Low — owner volunteers this is rarely needed, generate-on-request only | CONFIRMED |
| 7 | Setup readiness (WhatsApp number, API key handling) | Not stated as "important" by owner, but revealed via repeated clarifying questions | Medium — this will consume onboarding time/support even though owner doesn't frame it as a pain point | BELIEVED |

---

## Phase 4 — Synthesis (Evidence Clusters)

Grouping the raw VOC-NNN signals into the handful of underlying problems they actually point to, before interpretation:

| Cluster | VOC ids | Underlying problem |
|---|---|---|
| **Operational memory loss** | VOC-011, VOC-012, VOC-019, VOC-020 | POs, DOs, and delivery proof live in scattered WhatsApp threads and paper — nothing is retrievable later without relying on staff memory |
| **Onboarding friction (customer + item)** | VOC-015, VOC-016, VOC-017, VOC-018, VOC-030 | Both new-customer and new-item creation are blocked behind manual AutoCount key-in, and both happen daily, not occasionally |
| **Trust in commercial transparency** | VOC-025, VOC-026, VOC-027 | Owner's confidence in the vendor rests on being told costs upfront, not discovering them mid-conversation — resolved 2026-07-12, but the pattern is worth watching for future commercial changes |
| **Business-rule fidelity vs vendor assumption** | VOC-021, VOC-022, VOC-023, VOC-024 | Owner actively corrects vendor's default assumptions (SO stage, credit-note level, receipts) — real practice diverges from what the vendor's own scope docs assume |
| **Setup readiness gap** | VOC-028, VOC-029 | Technical comfort level is low enough that written-only onboarding materials will under-serve this account |

These five clusters are what Phase 5's interpretations are built on — each INFERENCE below traces back to one of these clusters, not to isolated VOC ids in a vacuum.

## Phase 5 — Empathic Interpretation Layer

- INFERENCE [BELIEVED, anchors: VOC-015, VOC-016, VOC-017]: The owner isn't asking "can MAIA create customers" as a feature checklist item — they're asking whether MAIA will actually remove the daily bottleneck of onboarding new customers into AutoCount. A technically-correct "no, MAIA can't create vendors, staff must do it manually" answer will register as a broken promise if it isn't paired with a workable fallback flow, because this happens *every day*, not occasionally.
- INFERENCE [BELIEVED, anchors: VOC-011, VOC-012]: The owner's ask for a "driver workspace" and DO retrieval is really one need — an operational memory the business currently doesn't have. Photos live in WhatsApp threads, DOs live in a paper pile; the owner isn't asking for a driver app as a feature, they're asking to stop losing documents.
- INFERENCE [BELIEVED, anchors: VOC-025, VOC-026, VOC-027]: The cost-surprise reaction is not really about the ~30 sen/order figure — it's a trust signal. The owner is a small trader who reacts strongly to any cost that wasn't explained upfront; underestimating this in future commercial conversations (e.g. cloud hosting fee, which is *also* excluded from quoted pricing per the Scope Lock doc) risks re-triggering the same reaction.
- INFERENCE [BELIEVED, anchors: VOC-028, VOC-029]: The owner's repeated basic clarifying questions during WhatsApp/API-key setup indicate this account needs guided onboarding, not a self-serve setup document. Treat setup support hours as a real implementation cost, not a formality.
- INFERENCE [BELIEVED, anchors: VOC-022, VOC-023, VOC-024]: The owner is actively correcting the vendor's assumptions (credit notes practice, receipts practice) rather than passively agreeing — this is a customer who will push back on misconfigured defaults, which is a positive signal for UAT engagement but means default business-rule assumptions must be checked against the owner's stated practice, not the vendor's general playbook.

---

## Phase 6 — What They Expect the Product to Do

1. Ingest and reference exported customer, credit-limit/credit-terms, item/SKU, pricing, and order-history data (VOC-005, VOC-007).
2. Support at least PO → quotation → invoice as the real document flow — **no sales order stage exists today** and nothing in the transcript indicates the owner asked for one (VOC-021). **[RESOLVED 2026-07-19]** Scope Lock v2 (SL-13) reconciled this: SO/quotation stays inside MAIA only, Invoice + DO push to AutoCount, new customers get a MAIA-generated proforma document. Verbally agreed on the 2026-05-22 call, locked at MED confidence; a written-confirmation candidate has since surfaced (Sample Data Checklist doc) but hasn't formally closed this yet.
3. Provide a fallback path for new-customer creation that doesn't require the owner or coordinator to fully hand-key into AutoCount every time, even if full automated vendor creation isn't possible (VOC-015, VOC-017). **[RESOLVED 2026-07-19]** No fallback needed — SL-11 confirmed with Ivan (Vendor/Dev) as full chatbot-based creation, not a degraded default.
3a. **[RESOLVED 2026-07-19]** Item/SKU creation via chatbot (VOC-030) — same resolution as customer creation above. SL-11 in Scope Lock v2 covers both. A functional QA pass through the live chatbot flow is still worth doing before go-live, as a build-verification step, not because scope status is in question.
4. Provide a driver-facing capture flow for proof-of-delivery photos, tied to the order/DO record so it's retrievable later (VOC-010, VOC-012).
5. Issue credit notes at invoice level, not customer-account level (VOC-022).
6. Generate receipts only on request, not automatically per order (VOC-023, VOC-024).
7. Give the owner a clear, predictable cost model per order before go-live, including any fees not covered in the headline price (VOC-025, VOC-026).
8. Provide guided (not just written) setup support for the WhatsApp Business number and OpenAI API key steps (VOC-028, VOC-029).

---

## Stated vs Revealed Importance

| Item | Stated | Revealed | Read |
|---|---|---|---|
| New-customer creation flow | Explicit question, pressed twice | Daily frequency, described as a real blocker if unresolved | **RESOLVED 2026-07-19** — SL-11 LOCKED, confirmed with Ivan; full chatbot-based creation, no fallback needed |
| Item/SKU creation via chatbot | Not raised in original transcript | PM confirms client needs this alongside customer creation (2026-07-12) — same functional pattern, same risk profile | **RESOLVED 2026-07-19** — same SL-11 lock covers this. Functional QA pass still recommended before go-live as a build-verification step. |
| Sales Order stage | Not raised by owner at all | Owner explicitly says "no sales order" exists today | **RESOLVED 2026-07-19** — SL-13 LOCKED (SUPERSEDED) at MED confidence in Scope Lock v2; SO stays in MAIA only, Invoice+DO push to AutoCount. Written-confirmation candidate found, not yet formally applied — worth upgrading to HIGH confidence. |
| Cost transparency | Raised emotionally in the moment, not as a formal requirement | Strong revealed signal — real frustration, direct commercial trust impact | **RESOLVED (2026-07-12)** — PM confirms cost has been noticed/addressed with client. No longer an open trust gap. |
| Receipts | Stated explicitly as low priority | Consistent — no revealed contradiction | **Confirmed Phase 2 / low priority**, do not over-build |
| WhatsApp vs Telegram channel | Owner was walked through **WhatsApp** setup in this meeting (dedicated number, Business account) | Scope Lock v1 (23 Jun 2026) recorded the channel shift to **Telegram** with client agreement "NOT EVIDENCED" | **RESOLVED (2026-07-12)** — PM confirms Telegram use has since been confirmed with client. No longer an open risk. |
| DO / document retrieval | Raised as a specific complaint | Concrete failure anecdote given | **Real P1.5** — smaller in scope than new-customer creation but has a clear, testable acceptance bar (owner can find a past DO from a live order reference) |

---

## What We Do NOT Know

| Unknown | Why it matters | How to resolve |
|---|---|---|
| Whether coordinators/warehouse/drivers will actually adopt the flow the owner is describing on their behalf | The owner's description of "they just upload it, he just packs it" is management's version of the workflow, not the actual users' | Sit with one coordinator and one warehouse staff member through one real order cycle before build hardens the intake/packing flow |
| Exact SKU alias / description-mismatch failure rate | Owner references it heavily in conversation but never gives a concrete example or count in this transcript | Collect 15–20 real customer POs with the item descriptions as customers actually write them, compare against AutoCount SKU names |
| ~~Whether "no sales order" is a firm fact or a moment of imprecise phrasing~~ | ~~This directly contradicts the vendor's own scope docs~~ | **RESOLVED 2026-07-19** — SL-13 LOCKED (SUPERSEDED) in Scope Lock v2 at MED confidence (verbal-only). A written-confirmation candidate has surfaced (Sample Data Checklist doc) but hasn't formally closed this to HIGH yet — still worth getting the direct written line from the owner. |
| ~~Whether the owner has been told about the WhatsApp→Telegram channel switch~~ | ~~Direct trust risk if not~~ | **RESOLVED 2026-07-12** — PM confirms Telegram use confirmed with client. |
| Real monthly order volume and its cost impact for the owner | Cost surprise itself is resolved (PM confirms noticed/addressed), but exact volume-to-cost model still not established in this corpus | Get 2–3 months of actual order counts from AutoCount export (already requested per VOC-005) and model the real per-month token cost against it — worth doing even though the trust issue is closed, so the number doesn't drift again |
| Whether the minimal-fallback customer creation (VOC-017) is actually acceptable to the owner or just a hypothetical raised in the moment | Owner floated it once as a "if really cannot, then maybe..." — not fully committed | Confirm explicitly once the AutoCount vendor-creation constraint is resolved with Ms Tan |

---

## Bottom Line

> Dalson's owner isn't asking for an "AI operational layer" — they're asking to stop personally carrying the operational memory of the business: which document went where, what a new customer needs before they can be invoiced, and what an order actually costs before it's too late to change course. The transcript shows someone who trusts the process enough to ask basic, sometimes naive questions in front of the vendor team — channel, cost, new-customer creation, and the SO-stage question have all since been closed with the client or the dev team (as of 2026-07-19).

**The single most likely mistake to sink this account (updated 2026-07-19):** with channel, cost, new-customer creation, and the SO-stage direction all now resolved, the remaining live risk is narrow — get the SO-stage written confirmation formally applied (verbal MED confidence today, a written candidate already exists), and run the SL-11 functional QA pass before go-live. Neither is a feature-availability risk anymore; both are closeout housekeeping.

---

## Close the Loop — Next Actions

**To backlog now** (CONFIRMED, low ambiguity):
- VOC-022 (invoice-level credit notes), VOC-023/024 (on-request receipts only), VOC-014 (standard invoice fields) — safe to lock as business rules.
- VOC-010/012 (driver POD capture + DO retrieval) — safe to scope as a build item; acceptance bar is concrete (owner can retrieve a past DO from a live reference).

**To verify first** (gated on "What We Do NOT Know"):
- ~~New-customer creation fallback (VOC-015/016/017)~~ — **RESOLVED 2026-07-19**. SL-11 LOCKED, confirmed with Ivan (Vendor/Dev), not via the accountant/Ms Tan as originally assumed — no further Ms Tan involvement needed on this specific item.
- ~~Item/SKU creation via chatbot (VOC-030)~~ — **RESOLVED 2026-07-19**, same SL-11 lock. A functional QA pass through the Telegram chatbot flow is still recommended before go-live, as build verification, not as a scope gate.
- ~~SO-stage existence (VOC-021)~~ — **RESOLVED 2026-07-19**, SL-13 LOCKED (SUPERSEDED) at MED confidence. A written-confirmation candidate has surfaced but not yet formally closed — worth chasing to HIGH confidence.
- ~~WhatsApp vs Telegram channel~~ — **RESOLVED 2026-07-12**, Telegram confirmed with client.

**To report back to the client:**
- ~~Cost transparency~~ — **RESOLVED 2026-07-12**, noticed/addressed with client. Still worth modeling real per-month cost against actual order volume once AutoCount export lands, to keep the number from drifting again.
- ~~Channel confirmation~~ — **RESOLVED 2026-07-12**, Telegram confirmed.

**Refresh trigger:** re-run this VoC extraction after the workflow/UAT sign-off session (where coordinator, warehouse, and driver voices can actually be captured directly), and again post-go-live once real order volume and new-customer frequency are observed rather than estimated.

---

## See Also
- [[Dalson Industrial Supplies Customer Narrative Document]] — vendor-side handover doc (context/scope only, not customer voice)
- [[Dalson Phase 1 Timeline]]
- [[Dalson MAIA autocount integration]]

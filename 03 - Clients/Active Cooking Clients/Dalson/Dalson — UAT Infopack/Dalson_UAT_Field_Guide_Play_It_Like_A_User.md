# MAIA UAT Field Guide — Play It Like a User

## Table of Contents

> **Lark publishing action:** Insert Lark's native Table of Contents block here after import.

### Navigation Index

- PART A — READ BEFORE YOU PLAY
  - Section 0 — Cover / Logistics
  - Section 1 — How to Play
  - Section 2 — The Business World You Are Entering
  - Section 3 — Product Map
  - Section 4 — The Map
  - Section 5 — Persona Cards
    - Persona P-01 — Yap Li Min, Owner / Sole Approver
    - Persona P-02 — Asilah Amirah binti Khairuddin, Sales Coordinator
    - Persona P-03 — Joseph, Admin / Store Keeper
    - Persona P-04 — The Driver (role TBC)
  - Section 6 — Trust Killers
- PART B — THE MISSIONS
  - Section 7 — Campaign Overview
  - Section 8 — Mission Cards
    - Mission M-01 — The Overlay Holds
    - Mission M-02 — The Photo (or PDF) That Became an Order
    - Mission M-03 — Only Registered Numbers Talk
    - Mission M-04 — Same Words, Different SKU
    - Mission M-05 — Proof or It Didn't Happen
    - Mission M-06 — Trust the Migrated Ledger
    - Mission M-07 — Only Yap Li Min Signs Off
    - Mission M-08 — Credit Where the Invoice Is
    - Mission M-09 — Stock Moves, Quietly
    - Mission M-10 — New Customer, No Detour to AutoCount
    - Mission M-11 — The Proforma, Not the Sales Order
    - Mission M-12 — A Receipt, Only If Asked
  - Section 9 — Boss Fights
    - Boss Fight BF-01 — The Impersonator SKU
    - Boss Fight BF-02 — Déjà Vu PO
    - Boss Fight BF-03 — The Sales Order That Shouldn't Exist
  - Section 10 — Side Quests and Chaos Cards
  - Section 11 — Field Manual
  - Section 12 — Appendix — Coverage and Readiness Map

---

## PART A — READ BEFORE YOU PLAY

### Section 0 — Cover / Logistics

- **Project:** Dalson Industrial Supplies MAIA Rollout
- **Product:** MAIA
- **Client:** Dalson Industrial Supplies Sdn Bhd
- **Issued:** 2026-07-19
- **Test window:** 20 July, 60 minutes — see time-budget warning below
- **Environment / access:** https://maia-fe-dalson.vercel.app/ · Telegram: @maia_dalson_bot
- **Bug-reporting channel:** QA Testing Tracker (Lark)
- **XP tracker:** `[NEEDS INPUT: XP_TRACKER_LINK]`
- **UAT owner:** `[NEEDS INPUT: UAT_OWNER]`
- **Time budget per tester:** 60 min confirmed — see time-budget warning below, this pack estimates ~3 hrs for full completion
- **Input library:** `Dalson — UAT Infopack/00_START_HERE_INPUT_LIBRARY.md`
- **Test-data access notes:** Most missions let you pick your own customer, item, and order data straight from your UAT account — see each mission's Input recipe.
- **Systems you cannot access:** Dalson's live AutoCount instance is not part of your UAT account. Where a win condition depends on AutoCount state, this guide tells you exactly which half you can verify yourself and which half is a handoff (see **Beyond Tester Reach**, Section 4).

> **Campaign warning:** Dalson is a small, single-owner trading business. Every persona you play answers, directly or indirectly, to **one person — Yap Li Min**. Nothing about this account is bureaucratic. If a mission feels like it needs three layers of sign-off, you've misread the business — flag it as an Observation, not a defect.

> **Time-budget warning:** your confirmed window is **60 minutes**. Full completion (12 missions + 3 Boss Fights) runs closer to ~3 hours. Unless your UAT owner tells you otherwise, prioritise the **Speedrun set — M-07, M-08, M-11, M-12** (the P1-risk flows) — see Section 7, Campaign Overview.

### Section 1 — How to Play

- **Stay in persona.** Answer the way that person actually would, not the way a QA script would.
- **Type naturally.** Never copy the sample phrasing verbatim — those lines exist to show tone, not to be pasted.
- **Select your own valid data** wherever the mission allows — check the mission's selection criteria first.
- **Use the reusable input samples** in the Input Library only where a mission explicitly asks for one.
- **Break locked workflows thoughtfully** — the Sabotage Bonus and Poke It sections invite you to push at the edges, not to file noise.
- **Check the scope boundary** before you report something as broken — Section 4 tells you what's genuinely out today.
- **Only verify what your account can actually see.** If a win condition needs AutoCount, do the tester-verifiable half and leave the rest for the handoff owner.
- **Capture evidence** as you go — screenshots, IDs, timestamps. See Loot to Capture on every card.
- **Record XP honestly**, including sabotage bonuses.
- **Stop before any unsafe or irreversible action** — if a mission would push real data into AutoCount you don't control, pause and ask the UAT owner first.

---

### Section 2 — The Business World You Are Entering

#### At a glance

- **Dalson Industrial Supplies Sdn Bhd** is a small, Malaysia-based **B2B industrial supplies trader** — auto shops, automotive-related and construction-related customers.
- The whole business runs through **one owner, Yap Li Min**, a small in-office team, and **AutoCount** as the accounting ledger.
- Orders arrive as messy, unstructured PO photos, texts, and calls — **matching what the customer typed to the right internal SKU is the single biggest daily pain point.**
- **The one thing you must protect while testing:** nothing MAIA does should ever land in AutoCount, or affect a customer, without Yap Li Min's explicit sign-off first.

#### What the business actually does

Dalson buys and resells industrial hardware — items span many brands, one unit of measure (pieces, no cartons/packs). It is not a manufacturer; it trades. Most stock that comes in for a B2B order goes straight back out — only a small retail-facing slice is inventory that actually needs tracking. Customers are mostly repeat auto-shop and construction-trade buyers who negotiate pricing informally, order-to-order.

#### How a normal working day unfolds

A customer sends a PO — usually a WhatsApp photo, sometimes a text, occasionally a call. Whoever receives it (Yap Li Min or the sales coordinator, Asilah) forwards it into MAIA. MAIA reads the request, matches items to Dalson's internal SKUs, and drafts an order. **Nothing goes further until Yap Li Min reviews and approves it** — she is the business's only approval authority. Once approved, the order pushes to AutoCount, which stays the single source of truth for the ledger. The confirmed order goes to Joseph, the store keeper, who packs it directly — there's no formal pick-list step today. Delivery happens, proof of delivery gets captured, and the invoice is finalised in AutoCount.

#### The end-to-end business journey

| Stage | Acting role | Input | Action | Output | Next handoff | Main failure consequence |
|---|---|---|---|---|---|---|
| Intake | Yap Li Min or Asilah | PO photo/text/call | Forward into MAIA | Order draft | Yap Li Min for approval | Wrong item silently committed |
| Matching | MAIA + Asilah | Draft with item wording | Confirm/correct SKU match | Confirmed line items | Yap Li Min for approval | Wrong SKU shipped |
| Approval | Yap Li Min | Draft SO/Invoice | Review, approve | Pushed to AutoCount | Joseph for fulfilment | Unapproved order finalised |
| Fulfilment | Joseph | Approved order | Pack directly, no pick list | Packed order | Driver for delivery | Wrong/missing items packed |
| Delivery | Driver (role TBC) | Packed order | Deliver, capture POD photo | POD + signed DO in MAIA | Yap Li Min / customer | POD lost, "master DO" unfindable later |
| Invoicing | AutoCount (system) | Approved order | Finalise invoice | Invoice record | Customer | — |
| Exceptions | Yap Li Min / finance | Return or payment request | Credit note (invoice-level) or receipt (on request) | Credit note / receipt | Customer | Wrong-level credit note, unrequested receipt |

#### Systems, channels, and documents

- **Telegram** — the live MAIA channel for staff (superseded from an earlier WhatsApp-based plan; Telegram is now the confirmed production channel).
- **MAIA (chatbot + backend workspace)** — drafts orders, matches SKUs, holds customer price history, captures POD, generates the SO-equivalent and proforma documents, generates receipts on request.
- **AutoCount** — Dalson's accounting system of record. MAIA never replaces it; MAIA reads from and writes to it after human approval.
- **Documents in play:** Quotation, Invoice, Delivery Order (DO), Credit Note, Receipt (on request only), and a MAIA-generated **proforma/SO-style document** for new customers who need to pay upfront — this last one never gets pushed into AutoCount as a formal Sales Order.

> **Why this matters:** AutoCount is authoritative. If a tester ever sees MAIA claim something is "final" without it appearing correctly on the AutoCount side of the story, that is exactly the kind of gap this UAT exists to catch — even though your account can't check AutoCount directly (see Beyond Tester Reach).

#### Where pressure and ambiguity enter

- Customer PO wording rarely matches Dalson's internal SKU names — **this is the single most-referenced pain point in the client's own words.**
- POs arrive as blurry photos, cropped screenshots, or garbled text.
- The same PO sometimes gets forwarded twice by mistake.
- New customers need fast onboarding (daily frequency, not an edge case) without a multi-step AutoCount detour.
- Delivery proof historically lived in scattered WhatsApp threads — "**maybe I cannot find it anymore**" is a direct, real quote from the owner about the old process.

#### Why the client bought this product

Yap Li Min isn't buying "an AI operational layer." She's buying relief from **personally carrying the operational memory of the business** — which document went where, what a new customer needs before they can be invoiced, what an order actually costs. She wants MAIA to remove daily friction (SKU matching, new-customer onboarding, document retrieval) without replacing AutoCount or adding new approval bureaucracy she never asked for.

#### What success feels like to the client

- Correct SKU matched (or a clear ask for confirmation) instead of a guess.
- A new customer or item onboarded through the chatbot without a manual AutoCount detour.
- A past delivery order retrievable on request, instead of a WhatsApp scavenger hunt.
- Nothing ever pushed to AutoCount, or billed, without her seeing and approving it first.

#### What would destroy trust

- **MAIA silently committing a guessed SKU or customer record without confirmation.**
- **Any order or invoice reaching AutoCount without Yap Li Min's explicit approval.**
- **A credit note issued at the customer-account level instead of tied to a specific invoice** — she was explicit that Dalson's practice is invoice-level only, contradicting how another vendor client apparently works.
- **A receipt generated automatically** — Dalson doesn't do this today and doesn't want MAIA to start.
- **A formal Sales Order record appearing in AutoCount** — Dalson doesn't use a Sales Order stage, and the reconciled design deliberately keeps it out of AutoCount.

#### What this means when you test

- Verify repeatedly that nothing reaches AutoCount, or a customer, without an explicit human confirmation step.
- Introduce ambiguity into item descriptions — that's the account's real, most-cited weak point.
- The shortcuts a rushed coordinator would take (skip a confirmation, assume a match) are exactly the shortcuts worth trying.
- Anything that silently commits, silently auto-generates, or silently escalates should make the system stop, not proceed.
- Out-of-scope areas (pricing tables, e-invoice field mapping, AutoCount sync internals, document templates) are genuinely not built yet — confusion there is an Observation, not a bug.

---

### Section 3 — Product Map

#### Product purpose

In this phase, MAIA is an **operational layer sitting on top of AutoCount** — it never replaces AutoCount as the ledger or invoicing source. Its job is to turn unstructured customer requests (WhatsApp/Telegram messages, photos, calls) into correctly matched, human-approved orders, and to hold operational memory (POD, DO retrieval, price history) that Dalson doesn't have today.

#### In-scope workflow chain

| Stage | Source input | Acting role | Resulting record | Expected status | Next allowed action |
|---|---|---|---|---|---|
| 1 | PO photo/text/call | Yap Li Min or Asilah | Order draft in MAIA | Draft | SKU matching |
| 2 | Draft + item wording | MAIA, confirmed by Asilah | Matched line items | Draft, confirmed | Approval |
| 3 | Confirmed draft | Yap Li Min | Approved SO/Invoice | Approved | Push to AutoCount |
| 4 | Approved order | AutoCount | Ledger record | Final | Fulfilment |
| 5 | Approved order | Joseph | Packed order | Packed | Delivery |
| 6 | Packed order | Driver | POD photo + signed DO in MAIA | Delivered | Invoice finalisation |
| 7 | Delivered order | AutoCount | Invoice | Final | Credit note (if return) / Receipt (if requested) |

#### Objects and documents

| Object | Represents | Created by | May be created from | Key statuses | Must not update silently |
|---|---|---|---|---|---|
| Order draft | An in-progress customer request | MAIA, from forwarded PO/text/call | Any unstructured input | Draft → Confirmed → Approved | Approval status |
| SO/quotation-equivalent | Dalson's internal pre-invoice document | MAIA | Approved order | Stays inside MAIA, never in AutoCount | Whether it's pushed to AutoCount |
| Proforma | Payment request for a **new** customer | MAIA | New-customer order | Sent, paid | — |
| Invoice | Final AutoCount ledger record | AutoCount, from an approved order | Approved order only | Final | — |
| Delivery Order (DO) | Fulfilment + POD record | MAIA, tied to fulfilment | Approved, packed order | Delivered | POD attachment |
| Credit Note | A return/adjustment | Yap Li Min / finance | A specific invoice ID | Issued | Never account-level |
| Receipt | Proof of payment document | MAIA, one click | Customer's explicit request only | Generated on request | Never auto-generated |

#### State and lifecycle rules

- **Draft → Confirmed → Approved → Pushed to AutoCount** is the only valid path for an order. Nothing skips straight from Draft to AutoCount.
- The SO/quotation-equivalent document **never transitions into AutoCount as a formal Sales Order** — only Invoice and DO make that trip.
- A credit note requires a specific source invoice; there is no account-level credit balance state to draw from.
- A receipt has no "pending" or "scheduled" state — it either doesn't exist, or it exists because the customer asked.

#### Confirmation and clarification rules

- **Routine, may proceed:** looking up an existing customer/item that's an unambiguous match.
- **Ambiguous, requires clarification:** an item description matching more than one SKU; an incomplete/garbled PO.
- **High-impact, requires explicit confirmation:** anything about to be pushed to AutoCount (Yap Li Min only).
- **Permission-gated:** approval itself — only Yap Li Min.
- **Must never happen silently:** SKU auto-selection under ambiguity, order finalisation without approval, receipt generation without request, account-level credit notes.

#### Roles, permissions, and handoffs

| Role | Can create | Can approve | Refused | Hands off to |
|---|---|---|---|---|
| Yap Li Min | Draft orders, credit notes, receipts (on request) | SO/Invoice (sole approver) | — | AutoCount, Joseph, customer |
| Asilah | Draft orders, new customer/item via chatbot | Cannot approve SO/Invoice | Approving/finalising orders | Yap Li Min |
| Joseph | — | — | Approving orders | Driver |
| Driver (TBC) | POD photo upload | — | Approving orders, accessing customer/pricing data | Yap Li Min / customer |

#### Data authority and external boundaries

**AutoCount is the source of truth** for the ledger and invoicing. Testers cannot access Dalson's live AutoCount instance — any acceptance criterion that depends on confirming AutoCount state is split into a tester-verifiable half (what MAIA shows you) and a handoff half (what someone with AutoCount access must confirm). See Beyond Tester Reach, Section 4.

#### Golden product rules

- **Never** push anything to AutoCount without Yap Li Min's explicit approval.
- **Never** auto-select an ambiguous SKU.
- **Never** auto-generate a receipt.
- **Never** issue a credit note without a specific invoice reference.
- **Never** let the SO/quotation-equivalent document reach AutoCount as a formal Sales Order.
- **Always** let the tester correct a matched item before it's committed.

#### Glossary

- **PO** — Purchase Order, the customer's order request.
- **SO** — Sales Order; Dalson does **not** use a formal SO stage in AutoCount — MAIA's SO-equivalent stays inside MAIA only.
- **DO** — Delivery Order, the fulfilment/proof-of-delivery document.
- **POD** — Proof of Delivery (photo + signed DO).
- **AutoCount** — Dalson's accounting system of record.
- **SL-N** — Scope Lock item ID; only SL items marked LOCKED are in scope for this UAT.
- **VOC-NNN** — a specific customer-voice finding from the VoC Extraction dossier.

#### What this means when you test

- Preserve order references across the whole flow — a mission's "loot" often depends on tracing one order end to end.
- Always check the current state before acting — a draft that's already approved behaves differently than one that isn't.
- Always check role boundaries — try the wrong actor deliberately.
- Always check that confirmation gates actually block silent progress.
- Check partial-failure behaviour — a broken sync should never silently drop or duplicate a record.
- Never assume an AutoCount-side claim is true just because MAIA says so — flag it for the handoff.

---

### Section 4 — The Map

#### In Bounds

Only these 12 items are LOCKED and open for active testing:

- **SL-1** — MAIA as operational layer on top of AutoCount
- **SL-2** — Core order intake via unstructured channels
- **SL-3** — Messaging channel = Telegram (Locked, Superseded)
- **SL-4** — SKU alias mapping / matching
- **SL-5** — Proof of Delivery capture
- **SL-6** — AutoCount integration: access + data migration
- **SL-7** — Approval flow (single approver)
- **SL-8** — Credit note handling (invoice-level)
- **SL-9** — Warehouse / stock update responsibility
- **SL-11** — Customer & item/SKU creation via chatbot
- **SL-13** — PO → SO → Invoice → DO workflow, SO stage reinterpreted (Locked, Superseded)
- **SL-17** — Receipts (on request only)

#### NS — Needs Scoping / Do Not Test

| Item | Source | Why not locked | What tester does if encountered |
|---|---|---|---|
| SL-10 Pricing logic | Scope Lock | Direction agreed (ad hoc, per-customer, MAIA holds price history) but auto-suggest vs manual-entry mechanic undefined | Log an Observation, don't score it as a mission |
| SL-12 AutoCount 2-way sync mechanism | Scope Lock | Access/migration is locked (SL-6); the *ongoing* write-back method (API/middleware/DB) is not | Same — Observation only |
| SL-14 Document generation (SO/Invoice/DO PDFs) | Scope Lock | Required outputs defined, templates only partially available | Same |
| E-invoice mandatory customer fields | Scope Lock Needs-Scoping Register | Needs re-verification specific to Dalson | Same |

#### Out of Bounds

| Item | Reason |
|---|---|
| SL-15 — Supplier-side procurement automation | Explicitly excluded from Phase 1 |
| SL-16 — Full ERP replacement | MAIA is overlay only |

No superseded items are currently out of bounds — both SL-3 (channel) and SL-13 (SO workflow) superseded an earlier assumption but are themselves LOCKED and testable.

#### Beyond Tester Reach

| Criterion | Tester-verifiable half | Handoff half | Owner |
|---|---|---|---|
| SL-6 acceptance: "data matches 1:1; pushed SO appears correctly in AutoCount" | MAIA shows the migrated record and confirms the push succeeded | Confirming the record actually appears correctly inside live AutoCount | UAT owner / Dalson AutoCount dealer |
| SL-11 acceptance: "new customer/item reflects correctly in AutoCount" | MAIA confirms creation succeeded | Confirming the AutoCount-side record is correct and validation-compliant | UAT owner / Dalson AutoCount dealer |
| SL-8 acceptance: "credit note tied to correct invoice ID, not account" | MAIA shows the credit note linked to an invoice ID | Confirming AutoCount reflects the same linkage | UAT owner / Dalson AutoCount dealer |
| SL-13 acceptance: "Invoice + DO reach AutoCount, SO never does" | MAIA confirms what it pushed | Confirming AutoCount's Sales Order list stayed empty | UAT owner / Dalson AutoCount dealer |

> **Remember:** if a win condition needs the handoff half, still check the tester-verifiable half and log the rest as a handoff request — don't mark the mission Failed for something outside your account's reach.

---

### Section 5 — Persona Cards

#### Persona P-01 — Yap Li Min, Owner / Sole Approver

**Evidence basis:** direct VoC (primary speaker in the source transcript) + Scope Lock (SL-7) + Process Map

##### A day in my life

I'm always out — visiting customers, sourcing stock, chasing payments. My phone is my office. Every order that matters, whether it comes to me directly or gets forwarded by Asilah, ends up in front of me before it goes anywhere near AutoCount. I don't do this because I don't trust my team — I do it because I'm the one who negotiates pricing customer by customer, and I'm the one who has to answer for anything that goes wrong with a ledger entry.

**Start of day:** I check whatever's come in overnight — usually a photo of a PO forwarded from a customer, sometimes something Asilah's already drafted. **When the first request arrives:** I glance at the matched items. If something looks off — a SKU that doesn't feel right, a price that's not what I'd normally charge this customer — I stop and fix it before approving. **Before I submit:** I always check the customer is right, the items are right, and — for a new customer — that we're not skipping straight to an invoice without at least a proforma to get paid upfront. **When something looks wrong:** I don't guess. I'd rather ask than have it wrong in AutoCount. **At handoff:** once I approve, it's Joseph's job to pack it and someone's job to deliver it — I don't manage that day-to-day. **End of day:** I want to know everything that happened today is retrievable tomorrow if a customer calls asking "where's my DO."

##### Business rules I live by

- **Always:** review and approve every SO/Invoice myself before it reaches AutoCount.
- **Always:** insist a credit note references the specific invoice, never the customer account.
- **Never:** let a receipt go out unless the customer specifically asked for one.
- **Before I submit:** double-check the customer and item match, especially for a first-time customer.
- **I can approve:** any SO, Invoice, credit note, receipt-on-request.
- **I cannot approve:** nothing — I'm the top of the chain for this account.
- **I escalate to:** nobody internally; for AutoCount technical issues I go through **Ms Tan (AutoCount dealer)**.

##### What I want from this product

"I don't want to be the one who has to remember every document. I want to open MAIA, see what's waiting for me, fix what's wrong, and approve it — without having to also go dig through AutoCount myself."

##### What makes me trust it

Correct SKU matches without me having to correct every single one. A new customer onboarded without a manual AutoCount detour. A past DO I can actually find when a customer asks.

##### What would make me ditch it

Anything reaching AutoCount without my say-so. A guessed item that turns out wrong. A receipt customers never asked for showing up in their inbox.

##### How I talk

- "can you just open invoice for [customer]"
- "so this one here, right, I want to check first"
- "no sales order — I don't do that"

##### Patience level and quirks

Low patience for unnecessary steps, high patience for getting the details right. I ask a lot of clarifying questions when something's new to me (I did the same thing during onboarding with the WhatsApp setup and the API key).

##### What I can do without asking anyone

Approve or reject any order, set business rules (credit note, receipt policy), request a receipt.

##### What must be approved or handed off

Anything touching live AutoCount configuration goes through Ms Tan, not me directly.

##### What I check before I trust the result

That the customer and item match what I'd expect, and that nothing pushed to AutoCount without me clicking approve.

##### What this means when you test as me

- Never let an order slip through to "approved" without explicitly playing the approval step.
- Try approving as the wrong persona (Asilah) — it must fail.
- Try leaving a draft unapproved and confirm it doesn't auto-submit after a delay.
- Push back on any SKU match that looks even slightly off — that's realistic Yap Li Min behaviour.
- Never accept a receipt appearing without you asking for it.

---

#### Persona P-02 — Asilah Amirah binti Khairuddin, Sales Coordinator

**Evidence basis:** identity confirmed via the MAIA User List (2026-07-19); day-to-day description is the owner's secondhand account (BELIEVED, not yet heard directly)

##### A day in my life

I'm mostly desk-based — Yap Li Min is always out in the field, so a lot of the order processing and AutoCount data entry lands on me. Customers send POs, I forward them into MAIA, and I confirm the item matches before it goes for approval. **Start of day:** checking what's come in from customers overnight. **When the first request arrives:** I forward it into MAIA and watch what it matches. **Before I submit:** if MAIA flags an ambiguous item, I pick the right one — I know our SKUs better than a fresh chatbot would on day one. **When something looks wrong:** I don't approve anything myself — that's not my call — I just flag it or wait for Yap Li Min. **At handoff:** once I've confirmed the draft, it goes to her for approval; I don't touch it again until it's approved and I need to help with a new customer or item.

##### Business rules I live by

- **Always:** confirm ambiguous SKU matches before they go to approval.
- **Never:** attempt to approve an SO or Invoice myself.
- **Before I submit:** make sure the draft reflects what the customer actually asked for.
- **I can approve:** nothing.
- **I cannot approve:** SO, Invoice, credit notes, receipts.
- **I escalate to:** **Yap Li Min (Owner)** for anything needing sign-off.

##### What I want from this product

Something that saves me from re-typing every PO into AutoCount by hand, especially for new customers, which happen almost every day.

##### What makes me trust it

It gets the SKU match right, or clearly tells me when it's unsure instead of guessing.

##### What would make me ditch it

If it silently picks the wrong item and I only find out after it's already gone to Yap Li Min for approval.

##### How I talk

- "customer sent this PO, can you extract"
- "not sure which one this is, similar items"

##### Patience level and quirks

Moderate — I'm used to manual work, so I'm forgiving of a system that asks me questions, less forgiving of one that guesses wrong silently.

##### What I can do without asking anyone

Forward orders, confirm SKU matches, create new customers/items via the chatbot.

##### What must be approved or handed off

Any SO/Invoice approval — that's Yap Li Min's alone.

##### What I check before I trust the result

That the item and customer match is actually correct, not just plausible-looking.

##### What this means when you test as me

- Try forwarding an ambiguous or garbled PO and see if it correctly asks for clarification instead of guessing.
- Try approving an order as Asilah — it must be refused.
- Try creating a new customer/item via chatbot and confirm it doesn't require a manual AutoCount detour.

---

#### Persona P-03 — Joseph, Admin / Store Keeper

**Evidence basis:** identity confirmed via the MAIA User List (2026-07-19); role description is the owner's secondhand account (BELIEVED)

##### A day in my life

Once an order's approved, it comes to me and I pack it — there's no formal pick-list step today, I just work from the confirmed order directly. **Start of day:** whatever's been approved overnight is what I pack first. **When the first request arrives:** I check the order and pull the stock. **Before I submit:** I don't "submit" anything in MAIA myself in the current design — my role in this phase is fulfilment, not system interaction. **What I can do without asking anyone:** none of the MAIA-facing actions are confirmed for me yet — this is a real open item, not a testing shortcut (see Gap #5, Process Map).

##### Business rules I live by

- **Always:** pack against the approved order, not a separate pick list.
- **Never:** approve orders — not my role.
- **I can approve:** nothing.
- **I escalate to:** **Yap Li Min (Owner)**.

##### What I want from this product

Not directly described by any source — his voice hasn't been captured yet.

##### How I talk

Not directly described — treat any phrasing for this persona as inferred, not quoted.

##### Patience level and quirks

Not established in the sources.

##### What I can do without asking anyone

`[GAP — Process Map flags this as NEEDS CLIENT INPUT: not confirmed whether Joseph has any MAIA-facing access at all, versus receiving forwarded instructions only.]`

##### What must be approved or handed off

Everything MAIA-facing, until his access level is confirmed.

##### What I check before I trust the result

Not established.

##### What this means when you test as me

- **Do not invent a MAIA login flow, warehouse screen, or stock-confirmation action for Joseph** — none is confirmed in the sources. SL-9's happy-path test case (HP-09, stock update on order confirmation) is a system-behaviour check, not a Joseph-driven UI action — play it as "confirm the stock reflects the order," not as "log in as Joseph and click something."
- If a mission implies Joseph needs a specific MAIA screen that doesn't exist, that's an Observation about an open scoping question, not a defect.

---

#### Persona P-04 — The Driver (role TBC)

**Evidence basis:** scope-and-UAT inferred; VOC-010 confirms the *need* for a driver-facing capture flow, but no individual has been named

> **Stop:** this persona's real-world identity is an **open onboarding item**, not something for testers to resolve. Any staff member may play this persona for UAT purposes — the goal is to test the POD capture *behaviour*, not to simulate a specific unconfirmed person.

##### A day in my life

After a delivery is scheduled, I take a photo as proof and it gets attached to the order in MAIA. Right now Dalson just prints things out or keeps a WhatsApp record, which is hard to search later — that's exactly the pain point MAIA's meant to fix.

##### Business rules I live by

- **Always:** capture POD photo/signed DO after completing a delivery.
- **Never:** approve orders, access customer or pricing data.
- **I can approve:** nothing.

##### What this means when you test as me

- Test the upload-and-link behaviour, not a specific individual's login.
- If a delivery completes with **no** POD uploaded, confirm the system reflects that state rather than silently marking it fully complete.
- Confirm a past POD stays retrievable later — this directly answers the owner's "master DO" complaint (VOC-012).

---

### Section 6 — Trust Killers

| Priority | Trust Killer | Why it's P1–P4 |
|---|---|---|
| **P1** | Any order/invoice reaches AutoCount without Yap Li Min's explicit approval | Unauthorised action reaching the ledger — the account's single biggest fear |
| **P1** | A credit note is issued at customer-account level instead of a specific invoice | Directly contradicts Dalson's stated, confirmed practice (VOC-022) |
| **P1** | A formal Sales Order record appears in AutoCount | Contradicts the reconciled, client-confirmed design (SL-13) |
| **P2** | A receipt is generated without the customer requesting it | Contradicts explicit client preference (VOC-023/024) |
| **P2** | An ambiguous SKU is silently auto-committed instead of flagged | The account's most-repeated real pain point, now inverted into a new risk |
| **P3** | An unregistered Telegram number is treated as a valid staff action | Breaks the access-control design (SL-3) |
| **P4** | A confirmed non-tracked SKU forces an unwanted stock update | Minor, but breaks a stated business rule (VOC-006, SL-9) |

---

## PART B — THE MISSIONS

### Section 7 — Campaign Overview

| Mission | Persona | Difficulty | XP | Time |
|---|---|---:|---:|---:|
| M-01 — The Overlay Holds | Yap Li Min | ★ | 10 | 8 min |
| M-02 — The Photo (or PDF) That Became an Order | Asilah | ★★ | 15 | 10 min |
| M-03 — Only Registered Numbers Talk | Asilah | ★ | 10 | 6 min |
| M-04 — Same Words, Different SKU | Asilah | ★★ | 15 | 10 min |
| M-05 — Proof or It Didn't Happen | Driver (TBC) | ★★ | 15 | 10 min |
| M-06 — Trust the Migrated Ledger | Yap Li Min | ★ | 10 | 8 min |
| M-07 — Only Yap Li Min Signs Off | Yap Li Min + Asilah | ★★ | 20 | 10 min |
| M-08 — Credit Where the Invoice Is | Yap Li Min | ★★ | 15 | 10 min |
| M-09 — Stock Moves, Quietly | (system check) | ★ | 10 | 6 min |
| M-10 — New Customer, No Detour to AutoCount | Asilah | ★★ | 20 | 12 min |
| M-11 — The Proforma, Not the Sales Order | Yap Li Min | ★★★ | 25 | 12 min |
| M-12 — A Receipt, Only If Asked | Yap Li Min | ★ | 10 | 6 min |

- **Recommended order:** M-01 → M-02 → M-04 → M-03 → M-06 → M-07 → M-10 → M-11 → M-05 → M-09 → M-08 → M-12.
- **Speedrun (P1-risk flows only):** M-07, M-08, M-11, M-12.
- **100% Completion:** all 12 missions + all 3 Boss Fights.
- **Squad split:** one tester plays Yap Li Min + Asilah across M-07 (both halves needed for the permission test); Joseph/Driver missions can run solo.
- **XP summary:** 175 XP across missions, +115 XP available across the 3 Boss Fights' win conditions and sabotage bonuses.

---

### Section 8 — Mission Cards

#### Mission M-01 — The Overlay Holds · ★ · 10 XP · ~8 min

**Persona:** Yap Li Min, Owner
**Covers:** HP-01, UP-01, UP-02, UP-03 · SL-1
**Mission type:** Core

##### The situation

You want to double-check MAIA is actually reading from AutoCount, not making things up. **You ask it to look up a customer you know exists**, then you deliberately try to treat a draft as final without confirming it.

> **Why this matters:** if MAIA ever invents a customer record or finalises something without you, AutoCount stops being trustworthy.

**Precondition:** MAIA is connected to AutoCount with staging/UAT data loaded.

##### Input recipe

**Input type:** existing customer record

**Choose or prepare:**
- Pick any existing customer from your UAT account.
- Also try a customer you know is **not** in the AutoCount export.

**Your chosen data must satisfy:**
- The first customer genuinely exists in the migrated data.
- The second customer genuinely does not.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Yap Li Min only for approval actions in this mission.

- **Always:** verify a looked-up customer's details match AutoCount exactly.
- **Never:** let MAIA invent a customer record for one that isn't found.
- **Before submitting:** confirm you're not treating a draft as final.

##### Your goal

Confirm MAIA reflects real AutoCount data and never silently finalises an unconfirmed draft.

##### Say it your way

- "pull up [customer]'s details"
- "who is this customer again"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Customer details shown match the AutoCount record exactly, no invented fields.
- [ ] A PO for an unlisted customer gets flagged as not found, not auto-created.
- [ ] A draft SO is never pushed to AutoCount as final without an explicit confirmation action.
- [ ] A simulated sync interruption is surfaced to you, not silently swallowed.

##### It should stop and ask you if

- the customer can't be found;
- you try to skip the confirmation step;
- the AutoCount sync fails mid-draft.

##### If something breaks mid-way

It should tell you the sync failed and let you resume — it must **never** silently complete or silently lose the draft.

##### Sabotage bonus (+10 XP)

- Try to approve twice in quick succession and see if it double-submits.

##### Poke it

- Does it ever guess a customer that isn't really there?
- Can you tell the difference between "found" and "not found" clearly?

##### Loot to capture

- Customer name tested, both found and not-found cases; screenshot of the not-found response; confirmation the draft didn't silently finalise.

---

#### Mission M-02 — The Photo (or PDF) That Became an Order · ★★ · 15 XP · ~10 min

**Persona:** Asilah, Sales Coordinator
**Covers:** HP-02, UP-04, UP-05, UP-06 · SL-2
**Mission type:** Core

##### The situation

A customer sends you a **PO — photo, PDF, or text**, exactly the way it actually happens at Dalson: unstructured, sometimes messy. You forward it into MAIA and see what comes back. Later, you accidentally forward the **same PO twice**, and separately, a **garbled/incomplete** one.

> **Why this matters:** this is Dalson's real daily intake pattern — unstructured, error-prone, high-volume.

**Precondition:** MAIA channel (Telegram) is live and connected.

##### Input recipe

**Input type:** PO photo, PDF, or text message

**Choose or prepare:**
- Write, photograph, or export a PDF of a PO in your own words for any active customer/item you can find.
- Reuse the same PO a second time to test duplicate handling.
- Deliberately crop or truncate a PO for the garbled-input case.

**Your chosen data must satisfy:**
- The customer and item are genuinely findable in your account.
- The duplicate attempt uses the exact same PO content.
- The garbled version is missing or unclear on at least one key field.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Asilah forwards; no approval authority in this mission.

- **Always:** forward exactly what the customer sent, don't clean it up yourself.
- **Never:** assume a duplicate PO means a bigger order.

##### Your goal

Get a correctly extracted order draft, and confirm duplicates and garbled input are handled safely, not guessed through.

##### Say it your way

- "new PO from [customer], see attached"
- "same one again? or is this new?"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] A clear PO produces a draft with matching items/quantities.
- [ ] Forwarding the same PO twice triggers a duplicate warning, not two silent orders.
- [ ] A garbled/incomplete PO gets a clarification request, not a guessed order.
- [ ] A past order's DO is retrievable by order reference.

##### It should stop and ask you if

- the PO is unreadable or incomplete;
- the same PO appears to have already been processed.

##### If something breaks mid-way

It should tell you what's unclear and ask, never guess a full order from partial information.

##### Sabotage bonus (+15 XP)

- Send the same PO from two different message types (photo, then re-typed text) and see if it's still caught as a duplicate.

##### Poke it

- What happens if you forward a PO with no items listed at all?
- Does the duplicate warning name which earlier order it's comparing against?

##### Loot to capture

- Original PO content; draft order screenshot; duplicate-warning screenshot; garbled-PO clarification screenshot; DO retrieval screenshot with order reference.

---

#### Mission M-03 — Only Registered Numbers Talk · ★ · 10 XP · ~6 min

**Persona:** Asilah, Sales Coordinator
**Covers:** HP-03, UP-07, UP-19 · SL-3
**Mission type:** Core

##### The situation

MAIA lives on **Telegram** now, not WhatsApp. You send a normal message from your registered account, then try messaging from an account that isn't registered, then send a photo/sticker with no text at all.

> **Why this matters:** the whole access-control model depends on only registered numbers being treated as staff.

**Precondition:** Dalson's Telegram account is set up; you have both a registered and an unregistered test account available.

##### Input recipe

**Input type:** Telegram message

**Choose or prepare:**
- Send from your registered staff account.
- Send from an unregistered/unknown account.
- Send a non-text message (photo, sticker, voice note) from the registered account.

**Your chosen data must satisfy:**
- The unregistered account is genuinely not on the staff list.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** none — this is a pure access-control check.

- **Never:** let an unregistered account trigger a valid staff action.

##### Your goal

Confirm MAIA only responds to registered staff, and doesn't misread a non-text message as an order.

##### Say it your way

- "hello, testing"
- (photo with no caption)

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] MAIA responds correctly to the registered account.
- [ ] MAIA does not process an unregistered account's message as a valid staff order/action.
- [ ] A non-text message doesn't get misinterpreted as an order.

##### It should stop and ask you if

- the sender isn't registered;
- the message type isn't text and isn't clearly actionable.

##### If something breaks mid-way

It should reject or ignore gracefully — never create a false order from an ambiguous input.

##### Sabotage bonus (+10 XP)

- Try sending a voice note with actual order details spoken aloud.

##### Poke it

- Does an unregistered sender get any response at all, or silence?

##### Loot to capture

- Screenshots of both the registered and unregistered attempts; response (or lack of) to the non-text message.

---

#### Mission M-04 — Same Words, Different SKU · ★★ · 15 XP · ~10 min

**Persona:** Asilah, Sales Coordinator
**Covers:** HP-04, UP-08, UP-09 · SL-4
**Mission type:** Core

##### The situation

You forward a PO where the customer's item wording **closely matches** one SKU, then one where their wording is genuinely ambiguous against **two or more similar SKUs**.

> **Why this matters:** SKU mismatch is the single most-repeated pain point in Dalson's own words.

**Precondition:** Item master is loaded in your UAT account.

##### Input recipe

**Input type:** PO with item description

**Choose or prepare:**
- Pick an item and write the customer's likely wording for it (not the internal SKU name).
- Find or construct two genuinely similar items to trigger ambiguity.

**Your chosen data must satisfy:**
- The wording differs from the internal SKU name but is recognisably the same item.
- The ambiguous case has at least two plausible matches.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Asilah confirms matches; no approval authority.

- **Always:** confirm a suggested match before it's finalised.
- **Never:** let MAIA silently pick between two similar SKUs.

##### Your goal

Confirm MAIA either matches correctly or clearly flags ambiguity for you to resolve — never a silent wrong pick.

##### Say it your way

- "customer wrote it like this, what's our code"
- "not sure which one this is"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] A close-match description resolves to the correct SKU.
- [ ] An ambiguous description surfaces a closest-match suggestion for your confirmation, not a silent pick.
- [ ] Ambiguous items are never auto-committed without your confirmation.

##### It should stop and ask you if

- more than one SKU plausibly matches the wording.

##### If something breaks mid-way

It must ask, never guess — this is the account's most sensitive behaviour.

##### Sabotage bonus (+15 XP)

- Use a description that's deliberately vague, e.g. missing the brand or size entirely.

##### Poke it

- Does the suggested match explain *why* it thinks that's the item?
- Can you correct a wrong match without restarting the whole order?

##### Loot to capture

- PO wording used; matched SKU; ambiguity-flag screenshot; your correction if one was needed.

---

#### Mission M-05 — Proof or It Didn't Happen · ★★ · 15 XP · ~10 min

**Persona:** The Driver (role TBC — any staff member may play this)
**Covers:** HP-05, UP-10, UP-11 · SL-5
**Mission type:** Core

##### The situation

A delivery is scheduled. You complete it and **upload a POD photo**. Separately, you complete a delivery and deliberately **skip** the POD upload, to see how the system reflects that.

> **Why this matters:** the "master DO I can't find later" complaint is a direct, named pain point from the client.

**Precondition:** A delivery is scheduled in MAIA and tied to an order.

##### Input recipe

**Input type:** photo (POD)

**Choose or prepare:**
- Any sample delivery photo — synthetic/placeholder is fine.
- A second delivery run where you deliberately don't upload anything.

**Your chosen data must satisfy:**
- The delivery is genuinely tied to a real order/DO in your account.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** none formally confirmed for this persona — do not invent an approval step.

- **Always:** attach the POD photo to the correct order/DO.
- **Never:** let a missing POD get silently marked as a fully complete delivery.

##### Your goal

Confirm POD attaches correctly and stays retrievable later, and that a missing POD is visibly flagged.

##### Say it your way

- "delivered, here's the photo"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] The POD photo is stored and linked to the correct order/DO.
- [ ] A delivery with no POD reflects that status rather than appearing fully complete.
- [ ] A past POD remains viewable from the order/DO trail later.

##### It should stop and ask you if

- the order/DO reference can't be resolved.

##### If something breaks mid-way

The order should retain a clear "POD missing" state, never silently default to complete.

##### Sabotage bonus (+15 XP)

- Try retrieving the POD for an order from a different day/week to check long-term retrievability.

##### Poke it

- Can you find a POD from a live order reference alone, without remembering the exact date?

##### Loot to capture

- POD upload screenshot; retrieval screenshot for a past order; status screenshot for the no-POD case.

---

#### Mission M-06 — Trust the Migrated Ledger · ★ · 10 XP · ~8 min

**Persona:** Yap Li Min, Owner
**Covers:** HP-06, UP-12, UP-13 · SL-6
**Mission type:** Core

##### The situation

You spot-check that migrated customer/item records match AutoCount, then push a confirmed order through and verify it lands correctly. Separately, you simulate AutoCount being briefly unavailable.

> **Why this matters:** if the migration is wrong, everything built on top of it inherits the error silently.

**Precondition:** Migrated data is live in your UAT account.

##### Input recipe

**Input type:** existing record set

**Choose or prepare:**
- Any sample of migrated customer/item records.
- A confirmed order to push through.
- A record you know is **not** part of the migrated set.

**Your chosen data must satisfy:**
- The sample is genuinely representative (not a single cherry-picked record).

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Yap Li Min approves the pushed order.

- **Never:** let MAIA fabricate data for a record it can't find.

##### Your goal

Confirm the migration is trustworthy and failures are surfaced, not hidden.

##### Say it your way

- "check this customer matches what's in the system"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Sample migrated records match AutoCount exactly (tester-verifiable half only — see Beyond Tester Reach).
- [ ] A pushed confirmed order surfaces as successfully sent (tester-verifiable half).
- [ ] A simulated AutoCount outage surfaces clearly, without silently dropping or duplicating the record.
- [ ] An unknown record is flagged as not found, never fabricated.

##### It should stop and ask you if

- AutoCount appears unreachable;
- a queried record genuinely doesn't exist.

##### If something breaks mid-way

Failure must be visible to you — never a silent drop or duplicate.

##### Sabotage bonus (+10 XP)

- Query the same unknown record twice in a row and see if the response stays consistent.

##### Poke it

- Does it ever return a plausible-but-wrong record instead of "not found"?

##### Loot to capture

- Sample record comparison screenshots; push confirmation; outage-simulation screenshot; not-found screenshot for the unknown record.

---

#### Mission M-07 — Only Yap Li Min Signs Off · ★★ · 20 XP · ~10 min

**Persona:** Yap Li Min, Owner + Asilah, Sales Coordinator (play both halves)
**Covers:** HP-07, UP-14, UP-15 · SL-7
**Mission type:** Core

##### The situation

A draft SO/Invoice is ready. **As Yap Li Min, you approve it** and confirm it proceeds. Then, on a fresh draft, **you switch to Asilah and try to approve it yourself.**

> **Why this matters:** this is the account's core trust boundary — a P1 Trust Killer if it fails.

**Precondition:** A draft SO/Invoice exists and is unapproved.

##### Input recipe

**Input type:** draft order

**Choose or prepare:**
- Any draft order ready for approval.
- A second, fresh draft for the refusal test.

**Your chosen data must satisfy:**
- Both drafts are genuinely unapproved at the start of the test.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Yap Li Min (sole approver)** approves; **Asilah's** attempt must be refused.

- **Always:** confirm approval only proceeds under the correct role.
- **Never:** let a draft auto-approve after a delay with no action.

##### Your goal

Prove the approval gate holds both ways — the right person succeeds, the wrong person is refused.

##### Say it your way

- "approved, push it"
- (as Asilah) "let me just approve this one"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Yap Li Min's approval proceeds the order to AutoCount.
- [ ] Asilah's approval attempt is blocked or not treated as valid.
- [ ] A left-unapproved draft does not auto-submit after a timeout.

##### It should stop and ask you if

- the acting role isn't the approver.

##### If something breaks mid-way

An incorrectly-attempted approval must be refused cleanly, with no partial state change.

##### Sabotage bonus (+20 XP)

- Have Asilah try approving, get refused, then have Yap Li Min approve the same draft immediately after — confirm no leftover state from the failed attempt.

##### Poke it

- Does the system tell Asilah *why* she can't approve, or just silently fail?

##### Loot to capture

- Yap Li Min's successful approval screenshot; Asilah's refused-attempt screenshot; unapproved-draft timeout check.

---

#### Mission M-08 — Credit Where the Invoice Is · ★★ · 15 XP · ~10 min

**Persona:** Yap Li Min, Owner
**Covers:** HP-08, UP-16, UP-17 · SL-8
**Mission type:** Core

##### The situation

A customer wants to return an item against an existing invoice. You issue a credit note **against that specific invoice ID**. Then you try issuing one at the **customer-account level** instead, and separately against an invoice that doesn't exist.

> **Why this matters:** account-level credit notes directly contradict Dalson's confirmed practice — a P1 Trust Killer.

**Precondition:** An existing invoice with a returned item is available.

##### Input recipe

**Input type:** existing invoice

**Choose or prepare:**
- Any invoice you can find with a plausible returned item.
- An invalid/already-exhausted invoice ID for the boundary test.

**Your chosen data must satisfy:**
- The invoice genuinely exists and is referenceable.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Yap Li Min / finance only.

- **Always:** tie every credit note to a specific invoice ID.
- **Never:** allow an account-level credit note.

##### Your goal

Confirm credit notes are invoice-level only, with no account-level path and no orphaned/duplicate credits on invalid references.

##### Say it your way

- "issue CN against this invoice"
- "can I just credit their account instead"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] A valid invoice-level credit note is recorded correctly (tester-verifiable half; AutoCount-side linkage is a handoff, see Beyond Tester Reach).
- [ ] An account-level credit note attempt is not allowed.
- [ ] An invalid/exhausted invoice ID is rejected with a clear error, no orphaned credit created.

##### It should stop and ask you if

- no specific invoice ID is given;
- the invoice ID doesn't exist or is already fully credited.

##### If something breaks mid-way

It must reject cleanly, never create a partial or duplicate credit record.

##### Sabotage bonus (+15 XP)

- Try issuing two credit notes against the same invoice line back-to-back.

##### Poke it

- Does it ever suggest "just credit the account" as a fallback when the invoice reference is unclear?

##### Loot to capture

- Credit note screenshot with invoice ID; rejection screenshot for the account-level attempt; rejection screenshot for the invalid invoice ID.

---

#### Mission M-09 — Stock Moves, Quietly · ★ · 10 XP · ~6 min

**Persona:** system-behaviour check (no confirmed MAIA-facing Joseph action — see Persona P-03's note)
**Covers:** HP-09, UP-18 · SL-9
**Mission type:** Core

##### The situation

An order is confirmed. You check that stock levels reflect the fulfilled order **without manual re-entry** — then you check a non-tracked SKU (per Dalson's own rule: most B2B stock isn't tracked) doesn't get forced into an unwanted update.

> **Why this matters:** Dalson explicitly does not want stock-count restrictions on items they don't track.

**Precondition:** An order exists and is confirmed.

##### Input recipe

**Input type:** existing order + item

**Choose or prepare:**
- A confirmed order with a stocked SKU.
- A confirmed order with a SKU marked as not requiring stock-count tracking.

**Your chosen data must satisfy:**
- One item is genuinely tracked, one genuinely isn't, per your UAT account's configuration.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** none — this is a system-behaviour check, not a role-driven action.

- **Never:** force a stock update on a SKU the client doesn't track.

##### Your goal

Confirm stock reflects fulfilled orders automatically, and respects each item's tracking configuration.

##### Say it your way

*(This mission is a state check, not a conversational interaction — no sample phrasing applies.)*

##### Win conditions

- [ ] Stock quantity reflects the fulfilled order without manual re-entry (tracked SKU).
- [ ] A non-tracked SKU's fulfilment does not force a stock-count update.

##### It should stop and ask you if

*(Not applicable — this is an automatic-behaviour check.)*

##### If something breaks mid-way

A tracked SKU's stock must never silently fail to update; a non-tracked SKU must never be silently forced into tracking.

##### Sabotage bonus (+10 XP)

- Fulfil the same tracked SKU twice in quick succession and confirm the stock delta is correct both times, not doubled or missed.

##### Poke it

- Is there any UI moment where Joseph is implicitly expected to do something MAIA-facing? If so, flag it — that's an open scoping question, not something to test as if it's confirmed.

##### Loot to capture

- Before/after stock values for the tracked SKU; confirmation the non-tracked SKU wasn't touched.

---

#### Mission M-10 — New Customer, No Detour to AutoCount · ★★ · 20 XP · ~12 min

**Persona:** Asilah, Sales Coordinator
**Covers:** HP-10, UP-20, UP-21 · SL-11
**Mission type:** Core

##### The situation

A first-time buyer needs to be created — **through the chatbot**, without you keying into AutoCount separately. You also try a **new SKU** the same way. Then you try creating a customer with a mandatory field missing, and try creating one that already exists.

> **Why this matters:** this happens daily for Dalson, not occasionally — it's one of the account's two most-pressed priorities.

**Precondition:** Chatbot access to MAIA.

##### Input recipe

**Input type:** new customer / new item details

**Choose or prepare:**
- Invent a plausible new customer with all required fields.
- Invent a plausible new item not yet in the item master.
- Deliberately omit a mandatory field (e.g. tax identity) for the failure case.
- Reuse an existing customer/SKU name for the duplicate case.

**Your chosen data must satisfy:**
- The "new" customer/item is genuinely not already in the system, except for the deliberate duplicate test.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Asilah creates; no approval gate for creation itself, per current design.

- **Always:** confirm the created record reflects correctly before relying on it.
- **Never:** let an incomplete record push through to AutoCount.

##### Your goal

Confirm chatbot-based creation works fully — no manual-entry fallback needed — and handles bad input safely.

##### Say it your way

- "new customer, help me open account"
- "this item's not in the list yet, add it"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] New customer creation via chatbot succeeds and reflects correctly (tester-verifiable half; AutoCount-side reflection is a handoff).
- [ ] New item/SKU creation via chatbot succeeds and reflects correctly (same split).
- [ ] A missing mandatory field is flagged, not pushed incomplete.
- [ ] A duplicate customer/SKU attempt is detected, not silently re-created.

##### It should stop and ask you if

- a mandatory field is missing;
- the customer/SKU already exists.

##### If something breaks mid-way

It must flag the issue clearly and never silently create a partial or duplicate record.

##### Sabotage bonus (+20 XP)

- Create a customer, then immediately try creating the exact same one again from a different wording.

##### Poke it

- Does it ever fall back to "just open a basic invoice" instead of genuinely creating the record? (If so, that's worth noting — the confirmed design is full creation, not a fallback.)

##### Loot to capture

- New customer/item creation screenshots; missing-field rejection screenshot; duplicate-detection screenshot.

---

#### Mission M-11 — The Proforma, Not the Sales Order · ★★★ · 25 XP · ~12 min

**Persona:** Yap Li Min, Owner
**Covers:** HP-11, UP-22, UP-23 · SL-13
**Mission type:** Core

##### The situation

A **new customer** needs to pay upfront. You generate MAIA's proforma/SO-style document for them, they pay, and the **Invoice + DO push to AutoCount** — the proforma itself never does. Then you deliberately try to push the SO/quotation-equivalent document straight to AutoCount without going through Invoice.

> **Why this matters:** Dalson explicitly doesn't use a formal Sales Order stage — this is a P1 Trust Killer if the proforma leaks into AutoCount as a real SO.

**Precondition:** A new customer requiring upfront payment.

##### Input recipe

**Input type:** new-customer order

**Choose or prepare:**
- Any new customer scenario requiring upfront payment.
- The same order, attempted to push directly from the SO/quotation stage.

**Your chosen data must satisfy:**
- The customer is genuinely new (or treated as new) for this test.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Yap Li Min approves.

- **Always:** confirm only Invoice + DO reach AutoCount.
- **Never:** let the SO/quotation-equivalent document reach AutoCount as a formal Sales Order.

##### Your goal

Prove the proforma stays inside MAIA and only Invoice + DO make it to AutoCount.

##### Say it your way

- "new customer, they need to pay first, can you issue proforma"
- "can you push this straight through" (attempting to skip to AutoCount)

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] The proforma document generates correctly and is usable to request payment.
- [ ] Only Invoice + DO reach AutoCount (tester-verifiable half; the "AutoCount's SO list stayed empty" half is a handoff — see Beyond Tester Reach).
- [ ] A direct attempt to push the SO/quotation stage to AutoCount is blocked or rejected.

##### It should stop and ask you if

- you try to push a document to AutoCount before it's reached the Invoice stage.

##### If something breaks mid-way

It must block the attempt cleanly, never silently create an AutoCount-side Sales Order record.

##### Sabotage bonus (+25 XP)

- Try approving the proforma itself as if it were the final invoice, to see if the system distinguishes the two document types correctly.

##### Poke it

- Is there any UI wording that implies the proforma *is* a Sales Order? That's worth flagging even if the behaviour is correct — it could confuse Yap Li Min's mental model, which the account narrative shows is a real risk (she was originally walked through a WhatsApp-based plan too).

##### Loot to capture

- Proforma document screenshot; confirmation of Invoice + DO push; screenshot of the blocked direct-push attempt.

---

#### Mission M-12 — A Receipt, Only If Asked · ★ · 10 XP · ~6 min

**Persona:** Yap Li Min, Owner (or Asilah)
**Covers:** HP-12, UP-24, UP-25 · SL-17
**Mission type:** Core

##### The situation

A customer has **paid and proof of payment is attached**. They **explicitly ask** for a receipt, and you generate one with one click. Separately, you attach proof of payment to an order and confirm **no receipt appears automatically** — and try generating a receipt where there's **no proof of payment attached at all**.

> **Why this matters:** Dalson doesn't do receipts by default — an auto-generated one is a P2 Trust Killer.

**Precondition:** Proof of payment attached to an order/invoice (for the happy path).

##### Input recipe

**Input type:** paid order

**Choose or prepare:**
- Any order/invoice with proof of payment attached.
- A second order with proof of payment attached but no receipt requested.
- A third, unpaid/unconfirmed order for the missing-precondition case.

**Your chosen data must satisfy:**
- The first two are genuinely marked paid; the third genuinely isn't.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Yap Li Min or Asilah, on explicit customer request only.

- **Always:** require an explicit request before generating a receipt.
- **Never:** auto-generate a receipt just because payment was attached.

##### Your goal

Confirm receipts only ever happen on request, tied to the right order, and never silently.

##### Say it your way

- "customer's asking for a receipt for this one"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] A requested receipt generates correctly and links to the right order/invoice.
- [ ] Attaching proof of payment alone never auto-generates a receipt.
- [ ] Requesting a receipt with no proof of payment attached is flagged, not silently fulfilled.

##### It should stop and ask you if

- no proof of payment exists for the requested order.

##### If something breaks mid-way

It must flag the missing precondition, never generate a receipt with nothing to back it.

##### Sabotage bonus (+10 XP)

- Request the same receipt twice and confirm it doesn't create two separate receipt records.

##### Poke it

- Is there any moment where the system offers to generate a receipt unprompted?

##### Loot to capture

- Receipt screenshot linked to the correct order; confirmation no receipt appeared without request; rejection screenshot for the missing-precondition case.

---

### Section 9 — Boss Fights

#### Boss Fight BF-01 — The Impersonator SKU · ★★★ · 40 XP · ~15 min

**Persona:** Asilah, Sales Coordinator
**Covers:** [fragile behaviour flagged in UAT Step 2 Unhappy-Path Bank · SL-4]

##### Why this is a Boss Fight

SKU/item-description mismatch is the single most-repeated pain point in the client's own words — the source docs flag it as the account's highest-priority risk (VoC Phase 3, Rank 1) even though no formal test failure has been recorded yet. This fight deliberately stress-tests the boundary where the matching engine is most likely to be fragile.

##### Win conditions

- [ ] A description that's a near-perfect impersonator of a different SKU (same category, different spec) is either matched correctly or explicitly flagged as ambiguous.
- [ ] Correcting a wrong match doesn't require restarting the whole order.
- [ ] Two similar SKUs presented in the same PO are each resolved independently, not collapsed into one.

##### Extra chaos

- Use abbreviations, brand-only references, and quantity-in-the-wrong-place phrasing all in the same PO.
- Submit the same ambiguous phrase three times in a row and check for consistent behaviour.

##### Loot to capture

- Every phrasing tried, the match returned, and whether it required your correction.

---

#### Boss Fight BF-02 — Déjà Vu PO · ★★ · 35 XP · ~12 min

**Persona:** Asilah, Sales Coordinator
**Covers:** [fragile behaviour flagged in UAT Step 2 Unhappy-Path Bank · SL-2]

##### Why this is a Boss Fight

Duplicate forwarding is a realistic, common staff error at Dalson given how orders arrive (WhatsApp/Telegram forwarding, easy to fumble). This fight pushes the duplicate-detection logic harder than Mission M-02 does.

##### Win conditions

- [ ] The same PO forwarded twice in immediate succession is caught.
- [ ] The same PO forwarded twice with a time gap between them is still caught.
- [ ] A genuinely new, similar-but-different PO from the same customer is **not** falsely flagged as a duplicate.

##### Extra chaos

- Forward the PO once as a photo, once as re-typed text with identical content.
- Forward two genuinely different orders from the same customer back-to-back and confirm neither is falsely blocked.

##### Loot to capture

- Timestamps of each forward attempt; duplicate-warning (or lack of) screenshot for each variant.

---

#### Boss Fight BF-03 — The Sales Order That Shouldn't Exist · ★★★ · 40 XP · ~15 min

**Persona:** Yap Li Min, Owner
**Covers:** [fragile behaviour flagged in UAT Step 2 Unhappy-Path Bank · SL-13]

##### Why this is a Boss Fight

This is the account's most consequential must-not: Dalson's entire SO-workflow arrangement rests on the SO/quotation-equivalent document never reaching AutoCount. Given this is a recently-reconciled, HIGH-confidence-but-still-fresh design (formally confirmed 2026-07-19), it deserves deliberate pressure-testing before go-live.

##### Win conditions

- [ ] Attempting to push the SO/quotation document to AutoCount at every possible stage (draft, confirmed, pre-payment, post-payment) is blocked every time.
- [ ] Only Invoice + DO ever reach AutoCount, regardless of how the order got there.
- [ ] The proforma-vs-invoice distinction holds even when a new customer pays very quickly after the proforma is issued.

##### Extra chaos

- Try approving a proforma document as though it were the final invoice.
- Try triggering the AutoCount push from multiple entry points (chatbot, backend workspace) if both exist in your UAT account.

##### Loot to capture

- Every push attempt, its entry point, and its outcome; final confirmation of what actually reached AutoCount (tester-verifiable half) plus a flagged handoff request for the AutoCount-side confirmation.

---

#### Deferred / Retired Regression Alerts

None. No historical UAT failures are recorded in the source Checklist — all Pass/Fail fields are currently blank, meaning this is the account's first live UAT execution cycle for these 12 items.

---

### Section 10 — Side Quests and Chaos Cards

Given Dalson's small scope (12 locked items, single-owner approval chain), dedicated Side Quests/Chaos Cards beyond what's already built into each Mission's Sabotage Bonus and Poke It sections would duplicate coverage rather than add it. Use the Sabotage Bonus prompts on M-04, M-07, M-10, and M-11 as your chaos-injection points — those are where the account's real fragility concentrates.

---

### Section 11 — Field Manual

#### Result logging format

For each mission: Mission code, tester name/persona, Pass / Partial / Blocked — Test Data/Configuration / Observation, evidence links, timestamp.

#### Evidence rules

Screenshots and IDs only — no live customer data beyond what's already synthetic/UAT-safe. Never capture or share AutoCount credentials.

#### Test Data Selection Guide

See each Mission's Input recipe. When in doubt: pick any active customer/item your account can see, and make sure your choice matches the "Your chosen data must satisfy" bullets exactly before you start.

#### Reusable input-library rules / fixed-fixture rules

See `00_START_HERE_INPUT_LIBRARY.md`. This project needs **no fixed fixtures** — every mission works from tester-selected data.

#### Scoring

Mission XP + Boss Fight XP + self-reported Sabotage Bonus XP. `[NEEDS INPUT: XP_TRACKER_LINK]` for where to log it.

#### Self-reported sabotage bonuses

Log honestly — a sabotage attempt that the product handled correctly is still worth reporting, it's evidence of a working guardrail.

#### Bug bounties / badges

`[NEEDS INPUT: whether Dalson's UAT wants a bounty/badge system — not specified in source docs]`

#### Help contacts

`[NEEDS INPUT: BUG_REPORTING_CHANNEL]`, `[NEEDS INPUT: UAT_OWNER]`

#### Cleanup rules

See Section 9 of the Launch Readiness Checklist.

---

### Section 12 — Appendix — Coverage and Readiness Map

#### Source test-case disposition

| Source test case | Disposition | Active mission(s) | Reason |
|---|---|---|---|
| HP-01, UP-01, UP-02, UP-03 (SL-1) | ACTIVE MISSION | M-01 | LOCKED |
| HP-02, UP-04, UP-05, UP-06 (SL-2) | ACTIVE MISSION | M-02, BF-02 | LOCKED |
| HP-03, UP-07, UP-19 (SL-3) | ACTIVE MISSION | M-03 | LOCKED (Superseded) |
| HP-04, UP-08, UP-09 (SL-4) | ACTIVE MISSION | M-04, BF-01 | LOCKED |
| HP-05, UP-10, UP-11 (SL-5) | ACTIVE MISSION | M-05 | LOCKED |
| HP-06, UP-12, UP-13 (SL-6) | ACTIVE MISSION | M-06 | LOCKED |
| HP-07, UP-14, UP-15 (SL-7) | ACTIVE MISSION | M-07 | LOCKED |
| HP-08, UP-16, UP-17 (SL-8) | ACTIVE MISSION | M-08 | LOCKED |
| HP-09, UP-18 (SL-9) | ADAPTED MISSION | M-09 | LOCKED, but no confirmed Joseph MAIA-action — adapted to a system-behaviour check |
| HP-10, UP-20, UP-21 (SL-11) | ACTIVE MISSION | M-10 | LOCKED |
| HP-11, UP-22, UP-23 (SL-13) | ACTIVE MISSION | M-11, BF-03 | LOCKED (Superseded) |
| HP-12, UP-24, UP-25 (SL-17) | ACTIVE MISSION | M-12 | LOCKED |

#### Scope coverage

| Scope item | Status | Mission(s) / boundary section |
|---|---|---|
| SL-1 through SL-9, SL-11, SL-13, SL-17 | LOCKED / LOCKED (Superseded) | M-01–M-12, BF-01–BF-03 |
| SL-10, SL-12, SL-14, e-invoice fields | AGREED IN PRINCIPLE / NEEDS SCOPING | Section 4, NS table |
| SL-15, SL-16 | OUT OF SCOPE | Section 4, Out of Bounds |

#### Input-requirement traceability

| Input category | Mission(s) | Readiness status |
|---|---|---|
| Existing customer/item records | M-01, M-02, M-04, M-06, M-09, BF-01, BF-02 | Tester-selected from UAT account |
| PO text/photo | M-02, BF-01, BF-02 | Tester-created |
| Telegram message (registered/unregistered) | M-03 | Requires 2 test accounts — see Launch Readiness Checklist Action Register |
| POD photo | M-05 | Tester-created, synthetic |
| New customer/item details | M-10 | Tester-invented, synthetic |
| New-customer order (proforma flow) | M-11, BF-03 | Tester-created |
| Paid order + proof of payment | M-12 | Tester-selected/created |

#### Persona-rule traceability

| Persona | Business rule | Source | Mission(s) |
|---|---|---|---|
| Yap Li Min | Sole approval authority | SL-7, VoC | M-07 |
| Yap Li Min | Invoice-level credit notes only | SL-8, VOC-022 | M-08 |
| Yap Li Min | SO stays in MAIA, never AutoCount | SL-13 | M-11, BF-03 |
| Asilah | Cannot approve SO/Invoice | SL-7, UAT UP-14 | M-07 |
| Asilah | Confirms ambiguous SKU matches | SL-4, VoC | M-04, BF-01 |
| Driver (TBC) | Captures POD, no approval authority | SL-5, VOC-010 | M-05 |

#### Beyond Tester Reach handoffs

| Handoff ID | Owner | Field-guide location |
|---|---|---|
| SL-6 AutoCount migration accuracy | UAT owner / Dalson AutoCount dealer | Section 4, M-06 |
| SL-11 AutoCount-side new-record correctness | UAT owner / Dalson AutoCount dealer | Section 4, M-10 |
| SL-8 AutoCount-side credit note linkage | UAT owner / Dalson AutoCount dealer | Section 4, M-08 |
| SL-13 AutoCount Sales Order list stayed empty | UAT owner / Dalson AutoCount dealer | Section 4, M-11, BF-03 |

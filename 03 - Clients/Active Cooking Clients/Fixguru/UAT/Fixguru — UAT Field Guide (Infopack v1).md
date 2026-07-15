---
owner: Gareth
status: draft
last_reviewed: 2026-07-15
client: Fixguru
document_type: internal
version: v2
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/Wp90wCNHtiLD2Hk2oCBlqNC5gPe
---

# MAIA UAT Field Guide — Play It Like a User
### (Fixguru / IAM Worldwide Sdn Bhd)

> Regenerated via "UAT Infopack — Generator Prompt (v3.5)" (Lark: `WtVWwIaP9i49pQktx7Nl3SMagSh`), from three sources: **[[Fixguru — VoC Extraction]]**, **Scope Lock v2** (Lark `SNl2dbpa0o9K9ixHKAHlfwYNgOf`), **[[UAT/Fixguru — UAT Checklist]]** — the exact three-input structure the generator specifies. No new facts introduced beyond what's grounded in those three docs plus the CSV-verified fixed fixtures already confirmed 14 Jul 2026.
>
> **What changed from the prior (v2.0-generator) version:** missions now default to **tester-selected data** with explicit selection criteria, instead of one hardcoded customer/item per mission. Only 5 pairs stay fixed, where reproducibility genuinely needs it (see the Input Library). Structure now follows strict Lark heading rules — every Persona, Mission, and Boss Fight is a real `####` heading so it becomes a native collapsible section on import. Boss Fight (formerly "M-20") is now its own Section 9, not folded into the mission table.

## Table of Contents

> **Lark publishing action:** Insert Lark's native Table of Contents block here after import.

### Navigation Index

- PART A — READ BEFORE YOU PLAY
  - Section 0 — Cover / Logistics
  - Section 1 — How to Play
  - Section 2 — The Business World You Are Entering
  - Section 3 — Product Map
  - Section 4 — The Map (In Bounds / NS / Out of Bounds / Beyond Tester Reach)
  - Section 5 — Persona Cards
    - Persona P-01 — Xiao Ling, Sales User
    - Persona P-02 — Marcus Lim, Admin / Escalation Authority
    - Persona P-03 — Nisa, Finance User
    - Persona P-04 — Asrul, Logistics User
  - Section 6 — Trust Killers
- PART B — THE MISSIONS
  - Section 7 — Campaign Overview
  - Section 8 — Mission Cards
    - Mission M-01 — Forward the Order
    - Mission M-02 — AutoCount Doesn't Lie
    - Mission M-03 — The Discount Memory
    - Mission M-04 — Not Found Means Not Found
    - Mission M-05 — Link, Not Chat Wall
    - Mission M-06 — Three Documents, One Chain
    - Mission M-07 — Percent, Not Ringgit
    - Mission M-08 — Which Quotation?
    - Mission M-09 — Still a Draft
    - Mission M-10 — Two Calculators Only
    - Mission M-11 — Free Isn't Free Stock
    - Mission M-12 — Say the Price Out Loud
    - Mission M-13 — Not Our Profit
    - Mission M-14 — Brand Matters
    - Mission M-15 — The Floor and the Book
    - Mission M-16 — Block at the Dock
    - Mission M-17 — The Shelf Note
    - Mission M-18 — Two Tongues
    - Mission M-19 — Look Like AutoCount
  - Section 9 — Boss Fights
    - Boss Fight BF-01 — I Speak Many Times The Same
  - Section 10 — Side Quests and Chaos Cards
  - Section 11 — Field Manual
  - Section 12 — Appendix — Coverage and Readiness Map

---

## PART A — READ BEFORE YOU PLAY

### Section 0 — Cover / Logistics

| | |
|---|---|
| **Project** | Fixguru (IAM Worldwide Sdn Bhd) |
| **Product** | MAIA — internal WhatsApp order-to-cash assistant, sits on AutoCount |
| **Client** | Fixguru — Malaysia-based packaging/carton box supplier for e-commerce sellers |
| **Issued** | 15 Jul 2026 |
| **Test window** | Tue, 14 Jul 2026, 10:30am–12:00pm — **confirm with UAT owner if this run uses a new slot** `[NEEDS INPUT]` |
| **Environment & access** | Web app (FE): https://maia-fe-fixguru.vercel.app/login · MAIA WhatsApp: **012-491 2154**. Sandbox only — **never touch Fixguru's production AutoCount.** How you receive login credentials: `[NEEDS INPUT]` |
| **Input library** | See **[[UAT/00_START_HERE_INPUT_LIBRARY]]** — order-message examples + 5 fixed regression fixtures |
| **Test-data access notes** | Most missions: browse and pick your own active customer/item in the FE or via WhatsApp. A few missions (marked **Fixed reference**) use a named record instead — see the Input Library |
| **Systems you cannot access** | Fixguru's production AutoCount (never touch it); simulating a sync failure requires the test lead, not self-service |
| **Where to report** | https://eg69120xnei.sg.larksuite.com/wiki/CsWLwSjOgiO98JkitQ8lGfpPgF2 |
| **XP tracker** | `[NEEDS INPUT]` |
| **UAT owner** | Gareth |
| **Time budget per tester** | 1 hour 30 minutes |
| **Anything else** | You have 90 minutes and 19 missions plus 1 boss fight — you will not finish them all, and that's fine. Run **the Speedrun** (Section 7) if you're short on time. **Boss Fight BF-01 is the mission that matters most** — if you only do one thing properly, do that one. |

> **Stop:** never run any mission against Fixguru's production AutoCount. Sandbox only, always.

### Section 1 — How to Play

- Stay in persona. Pick one of the four personas below and act as they would.
- Type in your own words — typos, shorthand, your usual mix of English/Malay/Mandarin. **Never copy-paste** the sample phrasings in a Mission Card.
- When MAIA asks you something, react the way your persona would — busy, brief, sometimes impatient.
- Select your own valid data where the mission allows it — read "Input recipe" on each card before picking a customer/item.
- Use the reusable order-message samples only to get the *register* right, then write your own version.
- Break locked workflows on purpose. Curiosity scores points.
- Check the scope boundary (Section 4) before you log anything as a bug — out of bounds ≠ bug.
- Only verify what you can actually see — if a criterion needs production AutoCount or an admin action, it's a **Beyond Tester Reach** handoff, not something to chase yourself.
- Capture evidence: screenshots + every document ID you create.
- Record XP honestly, and stop before any unsafe action (production system, real customer contact).

**Two surfaces, one product.** You'll move between **WhatsApp** (012-491 2154 — where a real Fixguru order starts) and the **web app** (https://maia-fe-fixguru.vercel.app/login — where the historical pricing table opens, and where you verify what the chatbot created). Most missions start in WhatsApp. The moment a mission hands you a link, that link is the product too — how fast it opens and how readable it is at a glance **is** the thing being tested.

Scoring in one line: XP for missions, bounty for bugs (P1 highest), bonus for Chaos Cards. Full detail in the Field Manual (Section 11).

### Section 2 — The Business World You Are Entering

#### At a glance

Fixguru is the trading face of **IAM Worldwide Sdn Bhd** — a Malaysia-based **packaging and carton box supplier** serving e-commerce sellers and SMEs, running a 65,000 sq ft facility with roughly **1,000 SKUs**. The workflow you're testing is: a WhatsApp order comes in → sales checks what this customer paid last time → a quotation becomes a Sales Order → a Delivery Note gets picked → an Invoice closes it out. **The single most important thing to protect:** the historical-pricing decision — showing a salesperson, in one glance, exactly what this customer paid last time for this exact item.

#### What the business actually does

Fixguru sells two kinds of product: **ready-stock items** and **custom-made carton boxes** priced through a calculator (RSC and Diecut types only, this phase). Customers are B2B — other e-commerce sellers and SMEs who order repeatedly, at negotiated or historically-set prices. The team already runs on **AutoCount**, which holds every customer, item, price history, credit limit, and accounting record Fixguru's staff already trust completely.

#### How a normal working day unfolds

A Fixguru salesperson doesn't work one order at a time — they're juggling **4 to 10 active customer orders simultaneously**, pushing through roughly **30 invoices a day** across the sales team. Every order starts as a WhatsApp message from a customer, often shorthand, sometimes with the item name mangled ("coconut fence" instead of the real product). Sales forwards that into MAIA. Before quoting, sales needs to know instantly what this exact customer paid last time for this exact item — that lookup is the daily bottleneck. Once price is agreed, the order becomes a Sales Order, then a Delivery Note (sometimes split across 2+ deliveries), then an Invoice.

#### The end-to-end business journey

| Stage | Acting role | Input | Decision/action | Output | Main failure consequence |
|---|---|---|---|---|---|
| Order intake | Sales (Xiao Ling) | WhatsApp message from customer | Forward into MAIA, resolve customer/item | Draft quotation | Wrong item/customer match wastes the whole flow downstream |
| Price decision | Sales (Xiao Ling) | Historical pricing query | Check last invoiced price/discount, decide quote | Confirmed quotation | The client's #1 documented failure — slow/wrong pricing decision |
| Order confirmation | Sales (Xiao Ling) | Confirmed quotation | Submit to AutoCount | Sales Order | Silent auto-submit before confirm is a P1 |
| Approval (if triggered) | Marcus (admin/escalation) | Below-floor price or credit-exceeded DN | Approve/reject with full context | Unblocked SO/DN | Approving without full context (price, AR, exposure) defeats the point |
| Delivery prep | Asrul (logistics) | Confirmed SO | Generate picking list / DN | Delivery Note(s) | Missing shelf reference slows physical picking |
| Invoicing | Nisa (finance) | Completed DO | Generate invoice, verify accounting treatment | Invoice | Delivery charge miscoded as product revenue breaks e-invoice claiming |

#### Systems, channels, and documents

- **AutoCount** — the authoritative system for customers, items, stock, pricing history, and accounting. MAIA references it, never replaces it.
- **MAIA WhatsApp chatbot** — internal-only (sales, logistics, finance, admin). Customers never see it directly.
- **MAIA web app (FE)** — where the historical-pricing link-out opens, and where richer review happens.
- **Documents:** Quotation → Sales Order → Delivery Note (1 SO can have 2+ DOs) → Invoice → Payment/Credit Note.

#### Where pressure and ambiguity enter

- Shorthand and mangled item names in WhatsApp messages.
- Multiple concurrent orders competing for the same salesperson's attention.
- A customer referenced by phone number only, not company name.
- Two open quotations for the same customer at once.
- A discount meant as a percentage typed as a bare number.
- Delivery charges stated as a method only, with no price attached yet.

#### Why the client bought this product

The client did **not** buy "a historical pricing feature" as a checkbox — they bought a way to make one specific, repeated decision (what discount to give, right now, for this customer and item) at least as fast as they already can in AutoCount. Every other ask in the account (item codes, PDF layout, delivery-as-SKU, credit context) traces back to the same root: don't make the sales team read, hunt, or double-check what AutoCount already gives them instantly.

#### What success feels like to the client

Success, in the client's own words, is never having to "owe AutoCount an account" — the sales team should never break flow to go check something in the old system. Concretely: a discount decision made in one glance, item codes that match AutoCount exactly, delivery charges that never distort invoicing, and approvals that carry full context instead of a bare yes/no prompt.

#### What would destroy trust

- **The historical-pricing view is slow, wordy, or wrong one more time.** This exact failure has already happened **four separate UAT rounds** running (7 Apr, 14 May, 16 Jun, 24 Jun). The client's own words: *"I speak many times the same… I don't know how to tell you."*
- A discount typed as a percentage gets silently applied as a flat ringgit amount, quietly changing the invoiced price.
- A delivery-charge SKU line gets miscoded as product revenue, breaking e-invoice claiming downstream.
- Item codes shown don't match AutoCount's real external ID, breaking back-end reconciliation.

#### What this means when you test

- Treat the historical-pricing flow (Section 8, M-03/M-04/M-05, and Boss Fight BF-01) as the account's real pass/fail line — everything else is supporting evidence.
- Introduce ambiguity the way a real busy salesperson would: shorthand, wrong-order info, mid-conversation interruptions.
- A silent wrong number (price, discount unit, item code, accounting code) is always worse than the system asking a clarifying question.
- Anything the client has already accepted as out of bounds (Section 4) is not a bug if it's missing — note it as an Observation only if it genuinely confused you in the moment.

### Section 3 — Product Map

#### Product purpose

MAIA sits **on top of AutoCount** this phase — AutoCount stays master for customer, product, stock, and accounting records. MAIA runs entirely through an **internal-only WhatsApp chatbot**, used by Fixguru's sales, logistics, finance, and admin teams. It is not intended to replace AutoCount's accounting authority, and it is not customer-facing.

#### In-scope workflow chain

`WhatsApp order forwarded by Sales → historical pricing check → draft Quotation/SO → confirmed Sales Order → Delivery Note (one SO can have 2+ DOs) → Invoice → Payment/Credit Note`

Historical pricing is checked **before** the quote is finalized, sourced strictly from **Sales Invoice** history, shown as a standalone link the sales agent taps to open a quick-glance table.

#### Objects and documents

| Object | Created by | Created from | Key statuses | Links to | Must not update silently |
|---|---|---|---|---|---|
| Quotation | Sales | WhatsApp order | Draft → Confirmed | Sales Order | Item/price/qty |
| Sales Order | Sales | Confirmed quotation | Draft → Submitted | Delivery Note(s) | Any field after submission |
| Delivery Note | Logistics | Sales Order | Draft → Completed | Invoice | Stock/shelf reference |
| Invoice | Finance | Delivery Note | Draft → Posted | AutoCount external ID | Delivery-charge accounting code |

#### State and lifecycle rules

Draft documents (Quotation, SO) stay fully editable — item, quantity, delivery method, charge — until explicit submit. Once an SO is confirmed/submitted to AutoCount, further edits are blocked or require an explicit amendment flow, never a silent overwrite.

#### Confirmation and clarification rules

- **Routine, may proceed:** editing a draft, browsing historical pricing, generating a calculator price.
- **Requires clarification:** ambiguous item name, customer with 2+ open quotations, discount unit unclear (% vs. flat RM).
- **Requires confirmation:** submitting a draft to AutoCount — never automatic.
- **Requires approval:** price below floor, credit exposure exceeded at DN stage.
- **Must never happen silently:** auto-submit, FOC inflating revenue, delivery charge miscoded as product revenue.

#### Roles, permissions, and handoffs

| Role | May create | May submit | May approve/override | Must be refused | Hands off to |
|---|---|---|---|---|---|
| Sales (Xiao Ling) | Quotation, SO | SO (with confirm) | Nothing | Auto-submit without confirm | Logistics (DN), Finance (invoice review) |
| Admin/escalation (Marcus) | — | — | Below-floor price, credit-blocked DN | — | — |
| Finance (Nisa) | Invoice review notes | Nothing on her own | Nothing | Creating/submitting SO or approving pricing/credit | — |
| Logistics (Asrul) | DN/picking list | DN | Nothing | Editing pricing, approving credit, editing SO | Finance (completed DO) |

#### Data authority and external boundaries

AutoCount is the source of truth for customer, item, price, and stock records — testers can verify what MAIA shows against the AutoCount sandbox directly. Testers must not invent or locally contradict AutoCount data. Anything requiring Fixguru's **production** AutoCount, or an environment-admin action (like simulating a sync failure), is a **Beyond Tester Reach** handoff (Section 4).

#### Golden product rules

- AutoCount is **never** overwritten — MAIA references it, never replaces it as master.
- Nothing submits to AutoCount without an explicit human confirm.
- Delivery charges are SKU/item lines, **never** just a fulfillment-method label.
- FOC quantity decrements stock but **never** inflates billed revenue.
- Below-floor pricing and credit-exceeded orders route to approval — **never** a silent pass-through.
- "Not found" means not found — the system **never** fabricates a match or history row.

#### Glossary

| Term | Meaning |
|---|---|
| SO | Sales Order |
| DO / DN | Delivery Order / Delivery Note |
| FOC | Free-of-charge quantity — decrements stock, never billed |
| SKU | Item code — Fixguru expects AutoCount's external code, not MAIA's internal ID |
| RSC / Diecut | The two locked custom-box calculator types (Pizza, Layer Pad, 5-panel are NOT in scope) |
| Price floor | Minimum sellable price, set per item + UOM (unit of measure) |
| Price book | A pre-approved fixed price for a specific customer that bypasses standard floor approval |
| AIP | "Agreed in Principle" — direction agreed, mechanics not fully locked |
| NS | "Needs Scoping" — an open question in Scope Lock v2 |
| UOM | Unit of measure (e.g. piece, box) |

#### What this means when you test

- Preserve document references across the chain — an invoice should always trace back to its originating SO/DO.
- Check state before acting — never expect to edit an already-submitted SO.
- Check role boundaries both ways — permitted role succeeds, refused role is refused.
- Check partial-failure behaviour — the system should say what it completed and what's blocked, never go silent.
- Check that downstream actions (accounting, stock) never happen early or silently.

### Section 4 — The Map

#### In Bounds

- Take a forwarded WhatsApp order and turn it into a draft Quotation/SO using AutoCount customer/item data.
- Surface historical pricing (all past Sales Invoice transactions) as a tap-through link before the sales agent confirms a price.
- Hold a draft Quotation/SO fully editable until explicit submit.
- Generate RSC and Diecut calculator pricing directly into the quotation/SO flow.
- Handle FOC quantity separately from billable quantity.
- Capture delivery charges as their own SKU/item line, pulled from AutoCount's own charge master.
- Show item display as code + brand + name, consistently across chatbot and web.
- Enforce a price floor per item **and** UOM, with a price-book bypass for pre-approved customer prices.
- Block credit-risk orders at **Delivery Note creation**, not Sales Order creation.
- Search customers by phone/mobile/WhatsApp number.
- Reply in English or Bahasa Malaysia per user preference; customer-facing PDFs mirror AutoCount's layout.

#### NS — Needs Scoping / Do Not Test

| Item | Source | Why not locked | What tester does if encountered |
|---|---|---|---|
| Delivery-method-history source doctype (invoice/SO/DO) | NS-07 | Still pending tech + client alignment | Note as Observation only, don't log as bug |
| Payment-proof vs. AutoCount AR timing override | NS-05 | Deliberately parked this round | Don't test — not in scope this round |
| Full warehouse/branch structure mapping | NS-08 (partial) | Shelf-in-DN-note is resolved; broader mapping still pending | Test only the shelf-in-note behaviour (M-17); don't probe further |

#### Out of Bounds

- Any customer-facing chatbot flow — MAIA is internal-team-only for Fixguru.
- Pizza Box, Layer Pad, or 5-panel calculators — RSC and Diecut only.
- Automated returns/refunds processing.
- Promo codes and seasonal campaign logic.
- WhatsApp reply-context targeting.
- Branch-level contact management the AutoCount way — Fixguru doesn't use branches.
- Full sub-warehouse shelf modelling beyond the DN additional-note field.

> **Remember:** if an out-of-bounds gap genuinely confused you as the persona, log it as an *Observation*, not a bug.

#### Beyond Tester Reach

| Handoff | Tester-verifiable half | Handoff half | Owner |
|---|---|---|---|
| AutoCount sync failure visibility (L-01, UP-03) | Observing the error/notification once triggered | Triggering the failure itself requires an environment admin | Gareth/tech |
| AIP-05/06/07/08 unresolved sub-criteria | Only the resolved sub-criteria (folded into M-15/M-16/M-17) | Full approver-role/mechanics closure needs client+tech alignment | Gareth/tech |
| NS-07 delivery-method-history doctype | None — excluded from active testing | Requires tech + client alignment | Gareth/tech |

### Section 5 — Persona Cards

#### Persona P-01 — Xiao Ling, Sales User

**Evidence basis:** direct VoC (VOC-001–005, VOC-008, VOC-009) plus Scope Lock user-facing flows

**At a glance:** Xiao Ling is accountable for turning a WhatsApp message into an accurate quotation, fast. Today she's juggling 4–10 orders. The biggest mistake she's trying to avoid is quoting the wrong discount because she couldn't quickly see what this customer paid last time. She depends most on the historical-pricing lookup working in one glance.

##### A day in my life

Customers WhatsApp me directly, all day — no order gets my undivided attention for long. **Start of day:** I check what's still open from yesterday. **When the first request arrives:** a customer messages, often shorthand, sometimes an item name I have to guess at. I forward it into MAIA. **Before I confirm a price:** I need to see, in one glance, what I gave this exact customer last time for this exact item — standard price, discount %, net price, date. If that takes more than a few seconds, I'm already thinking about just opening AutoCount instead. **When something looks wrong:** an item I don't recognise, a customer with two open quotations, a discount that doesn't add up — I stop and check rather than guess. **At handoff:** once I confirm and submit, it's out of my hands — logistics and finance take it from there.

##### Business rules I live by

- **Always:** check historical pricing before quoting a repeat customer.
- **Never:** submit a draft without explicit confirmation from myself.
- **Before I submit:** make sure item code, quantity, and delivery method are all correct.
- **Historical/reference checks:** last invoiced price + discount %, every time, for repeat items.
- **I can approve:** nothing — I'm not an approver.
- **I cannot approve:** below-floor pricing, credit-exceeded orders.
- **I escalate to:** **Marcus Lim (admin/escalation).**

##### What I want from this product

Show me what I gave this customer last time, in one glance, faster than I could pull it up in AutoCount. That's the whole job.

##### What makes me trust it

Trust it the moment it beats AutoCount at that one lookup.

##### What would make me ditch it

Ditch it the moment it makes me read three extra lines to find one number.

##### How I talk

- "SEA LARK, BW 1mx100 SL Clear, last price?"
- "3PL DC add"
- "011-xxxx — G3 100, G1 300, PM72 500"

##### Patience level and quirks

Very low patience for anything that requires re-reading. Will bail back to AutoCount the instant this feels slower.

##### Language preference

EN/BM/Mandarin mix (VOC-028, NS-09). `[GAP: her own default not confirmed — test both EN and BM reply, see M-18]`

##### What I can do without asking anyone

Create/edit drafts, query historical pricing, generate calculator prices, choose delivery method.

##### What must be approved or handed off

Below-floor pricing and credit-exceeded orders go to Marcus. Delivery prep goes to Asrul. Invoice accounting review goes to Nisa.

##### What I check before I trust the result

Whether the item code shown matches what I know from AutoCount, and whether the historical pricing table actually has every past transaction, not a suspiciously short list.

##### What this means when you test as me

- Query historical pricing before confirming any repeat-customer quote.
- Introduce shorthand and mangled item names — that's realistic, not sabotage.
- Never accept a silent auto-submit — that's always a P1.
- If the system asks you to clarify an ambiguous customer/quotation, that's correct behaviour, not friction.

---

#### Persona P-02 — Marcus Lim, Admin / Escalation Authority

**Evidence basis:** direct VoC (VOC-005, VOC-031 — direct quotes)

**At a glance:** Marcus is accountable for approvals (below-floor pricing, credit-blocked deliveries) and is the account's most persistent escalation voice — he's raised the historical-pricing gap across four separate UAT rounds. The biggest mistake he's trying to avoid is signing off on a fix that isn't actually fixed. He depends on seeing full context (price, AR, exposure) before approving anything.

##### A day in my life

**Start of day:** I field whatever escalated overnight. **When an approval request arrives:** I need full context in front of me — standard price, current discount history, AR owing, credit limit, current exposure — not a bare "approve?" prompt. **Before I approve:** I check the numbers make sense together, not just that a number was flagged. **When something looks wrong:** I've said it plainly before — *"I speak many times the same… I don't know how to tell you."* **At handoff:** once I approve, the order continues downstream; if I don't, it stays blocked until it's resolved properly.

##### Business rules I live by

- **Always:** demand full context before approving — price, AR, exposure, history together.
- **Never:** approve on a bare yes/no prompt with no supporting numbers.
- **Before I approve:** confirm the specific UOM's floor or the specific credit exposure calculation is the one actually being flagged.
- **I can approve:** below-floor pricing, credit-blocked Delivery Notes.
- **I cannot approve:** anything outside pricing/credit — that's not his role.
- **I escalate to:** nobody — Marcus is the top of this escalation chain for Fixguru's UAT process.

##### What I want from this product

Prove, this time, that the fix actually holds — not another "should be fixed" that isn't.

##### What makes me trust it

Trust it if the historical pricing view is genuinely one-glance, invoice-sourced, no digging.

##### What would make me ditch it

Ditch it — permanently, this account has a real limit — if it's still slow or wrong.

##### How I talk

- "I speak many times the same… I don't know how to tell you."

##### Patience level and quirks

Patient but visibly eroding — treat every interaction with him as a live trust test, not a routine one.

##### Language preference

English (his only direct quote is English). `[GAP: no evidence he ever switches]`

##### What I can do without asking anyone

Approve/reject below-floor pricing and credit-blocked DNs.

##### What must be approved or handed off

Nothing above him in this pack — he's the top of the approval chain.

##### What I check before I trust the result

Whether the approval prompt actually names which threshold was breached, and whether the numbers shown match reality.

##### What this means when you test as me

- Run Boss Fight BF-01 as the closing test — this is the mission that's claimed four previous rounds.
- Treat any incomplete-context approval prompt as a real finding, not a nitpick.
- Log this pack's most consequential bug as P1 with full evidence, exactly as seriously as the client has across four real rounds.

---

#### Persona P-03 — Nisa, Finance User

**Evidence basis:** scope-and-UAT inferred (L-07, invoice accounting rules)

**At a glance:** Nisa is accountable for invoice accuracy — specifically that delivery charges never masquerade as product revenue. The biggest mistake she's trying to avoid is a PDF or AutoCount posting that looks fine on the surface and is wrong underneath. She depends on Sales (Xiao Ling) having captured the order correctly upstream.

##### A day in my life

**Start of day:** I check invoices generated overnight against what I'd expect from AutoCount. **When a document reaches me:** I verify the delivery-charge line is coded separately from product revenue — never folded in. **Before I trust a PDF:** I compare it against what AutoCount would have produced. **When something looks wrong:** a delivery line reads as product revenue, I flag it immediately — that breaks e-invoice claiming downstream. **At handoff:** I don't have submit rights on my own; most of what I do routes through Finance Manager approval.

##### Business rules I live by

- **Always:** check the delivery-charge line's accounting code before signing off an invoice.
- **Never:** let a delivery charge post as product revenue.
- **Before I submit:** I can't — I have no submit rights of my own.
- **Historical/reference checks:** compare PDF layout and accounting treatment against AutoCount's own output.
- **I can approve:** nothing on my own.
- **I cannot approve:** SO creation, pricing, credit exceptions.
- **I escalate to:** **Finance Manager** `[GAP: name not confirmed in source documents]`.

##### What I want from this product

Delivery charges must never look like product revenue on an invoice — that breaks e-invoice claiming downstream.

##### What makes me trust it

Trust it if the PDF and accounting treatment mirror AutoCount exactly.

##### What would make me ditch it

Ditch it if a delivery charge line quietly becomes "product" in the books.

##### How I talk

- "this is delivery, not item revenue — check the code"

##### Patience level and quirks

Will double-check every PDF against what AutoCount would have produced.

##### Language preference

`[GAP: no VoC source for Nisa — don't assume English or BM, test both, confirm with client]`

##### What I can do without asking anyone

Audit invoices, flag accounting-code mismatches.

##### What must be approved or handed off

Anything requiring submission or override routes through her Finance Manager (unnamed in sources).

##### What I check before I trust the result

Whether the delivery-charge line's accounting code is genuinely separate from product-line revenue, on the PDF and in the underlying AutoCount sync.

##### What this means when you test as me

- Always generate an invoice from a delivery-charge SO and check the accounting code, not just the PDF layout.
- A delivery charge miscoded as revenue is a P1 — the exact failure the client has named directly.

---

#### Persona P-04 — Asrul, Logistics User

**Evidence basis:** partial VoC (VOC-013, VOC-014, thin-voice/relayed)

**At a glance:** Asrul is accountable for physical picking accuracy — knowing exactly what to pick and where it sits. The biggest mistake he's trying to avoid is missing physical detail (shelf, weight, quantity) that slows the loading dock down. He depends on Sales having confirmed the order correctly before it reaches him.

##### A day in my life

**Start of day:** I check what Delivery Notes are queued. **When a confirmed SO reaches me:** I generate the picking list and DN. **Before I hand off to the driver:** I confirm shelf reference and quantity are both correct — this is the floor, not an app screen, to me. **When something looks wrong:** a missing shelf reference means I have to go hunting physically, which slows everything down. **At handoff:** once the DN is complete, it goes to finance for invoicing.

##### Business rules I live by

- **Always:** confirm shelf reference is present before starting to pick.
- **Never:** proceed on an incomplete DN.
- **Before I submit:** double-check item and quantity against the SO.
- **Historical/reference checks:** none — this role is forward-looking, not historical.
- **I can approve:** nothing.
- **I cannot approve:** pricing, credit — not his role.
- **I escalate to:** **Xiao Ling (sales)** if the SO itself looks wrong.

##### What I want from this product

Tell me exactly what to pick and where it sits — shelf reference on the DN, not buried somewhere else.

##### What makes me trust it

Trust it if the shelf number is right there on the note.

##### What would make me ditch it

Ditch it if I have to go hunting for it.

##### How I talk

- "which shelf, how many box"

##### Patience level and quirks

No tolerance for missing physical detail — this is the floor, not an app screen, to him.

##### Language preference

`[GAP: no direct VoC source for Asrul — don't assume BM, test both, confirm with client]`

##### What I can do without asking anyone

Generate/view Delivery Notes, read shelf reference.

##### What must be approved or handed off

Anything involving pricing or credit isn't his to touch.

##### What I check before I trust the result

Whether the shelf number actually appears where he'd look — the DN's additional-note field — and stays consistent across lines.

##### What this means when you test as me

- Always check the shelf reference is readable at a glance during picking, not buried in a separate field.
- If two items on the same DN sit on different shelves, confirm each line shows its own correct shelf.

---

### Section 6 — Trust Killers

- **P1 — Client walks away:** the historical pricing view is slow, wordy, or wrong one more time (already happened 4 times); a discount shown as flat ringgit instead of percentage, silently miscalculating the final price; a delivery-charge SKU line miscoded as product revenue; an unauthorised role completing a gated action (e.g. a non-approver pushing through a below-floor price).
- **P2 — Client gets nervous:** a below-floor price goes through without approval; a credit-exceeded order isn't blocked at Delivery Note stage; FOC quantity inflates billed revenue; item code shown doesn't match AutoCount's external ID.
- **P3 — Annoying but survivable:** brand missing from item display without a clean fallback; historical pricing table pads with blank rows instead of showing what actually exists; ambiguous item lookup needs several rounds of clarification.
- **P4 — Cosmetic:** PDF layout style differs slightly from AutoCount's own template.

---

## PART B — THE MISSIONS

### Section 7 — Campaign Overview

| Mission | Persona | Difficulty | XP | Time |
|---|---|---:|---:|---:|
| M-01 — Forward the Order | Xiao Ling | ★ | 10 | 8 min |
| M-02 — AutoCount Doesn't Lie | Xiao Ling | ★ | 10 | 10 min |
| M-03 — The Discount Memory | Xiao Ling | ★★ | 20 | 12 min |
| M-04 — Not Found Means Not Found | Xiao Ling | ★★ | 20 | 12 min |
| M-05 — Link, Not Chat Wall | Xiao Ling | ★ | 10 | 8 min |
| M-06 — Three Documents, One Chain | Xiao Ling | ★ | 10 | 10 min |
| M-07 — Percent, Not Ringgit | Xiao Ling | ★★ | 20 | 8 min |
| M-08 — Which Quotation? | Xiao Ling | ★★ | 20 | 8 min |
| M-09 — Still a Draft | Xiao Ling | ★ | 10 | 10 min |
| M-10 — Two Calculators Only | Xiao Ling | ★ | 10 | 10 min |
| M-11 — Free Isn't Free Stock | Xiao Ling + Nisa | ★★ | 20 | 12 min |
| M-12 — Say the Price Out Loud | Xiao Ling | ★★ | 20 | 8 min |
| M-13 — Not Our Profit | Nisa | ★★ | 20 | 8 min |
| M-14 — Brand Matters | Xiao Ling | ★ | 10 | 8 min |
| M-15 — The Floor and the Book | Xiao Ling + Marcus | ★★ | 20 | 10 min |
| M-16 — Block at the Dock | Xiao Ling + Marcus | ★★ | 20 | 10 min |
| M-17 — The Shelf Note | Asrul | ★ | 10 | 6 min |
| M-18 — Two Tongues | Xiao Ling | ★ | 10 | 6 min |
| M-19 — Look Like AutoCount | Nisa | ★ | 10 | 8 min |
| **Boss Fight BF-01 — I Speak Many Times The Same** | Marcus Lim | ★★★ | 35 | 15 min |

**⏱ Time math:** all 19 missions + the boss fight total roughly **187 minutes**. You have **90**. Nobody solos this pack.

- **Squad route (default, 3+ testers):** Tester 1 = Xiao Ling (M-01–10, M-12, M-14, M-18). Tester 2 = Nisa + Marcus (M-11 shared, M-13, M-15, M-16, M-19, **BF-01**). Tester 3 = Asrul (M-17) + free-roam Side Quests + Chaos Cards.
- **The Speedrun (solo/time-poor, ~93 min, still touches every P1 flow):** M-02 → M-03 → M-04 → M-07 → M-12 → M-13 → M-15 → M-16 → **BF-01**.
- **100% Completion (multi-session only):** all 19 missions + BF-01 + Side Quests + 3+ Chaos Cards.

**If you only have 20 minutes:** do **M-03** and **BF-01**. Those two are the account.

**Recommended order:** tutorial (M-01, M-02) → the flagship pricing flow (M-03, M-04, M-05) → core document loops (M-06–M-14) → approval & finance (M-15–M-19) → **BF-01 always last**.

**Missions blocked by preparation gaps this round:** see the Launch Readiness Checklist §4 for data-readiness items not yet confirmed (item with/without brand for M-14, near-credit-limit customer for M-16).

### Section 8 — Mission Cards

#### Mission M-01 — Forward the Order · ★ · 10 XP · ~8 min

**Persona:** Xiao Ling, sales user
**Covers:** L-02 (HP-02)
**Mission type:** Core

##### The situation

A customer just messaged you directly with an order. You forward the details into the internal MAIA chatbot — **this bot is for your team only**, customers never see it.

> **Why this matters:** if MAIA ever talks back to an end customer directly, that breaks the internal-only scope entirely.

**Precondition:** Xiao Ling has WhatsApp chatbot access as an internal user.

##### Input recipe

**Input type:** WhatsApp text message

**Choose or prepare:**
- Pick any active customer and item visible in your UAT account.
- Optionally read `01_Customer_Order_Messages/` for register/tone, then write your own version.

**Your chosen data must satisfy:**
- The customer and item both exist and are active.
- Your message is written in your own words, not copied.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent (internal roster only)** may use the chatbot. Non-roster numbers must be refused.

- **Always:** treat the chatbot as internal-only.
- **Never:** expect it to message the end customer directly.
- **Before submitting:** confirm the customer/item match is correct.
- **Escalate when:** the customer or item can't be matched confidently.

##### Your goal

Get the chatbot to accept your forwarded order and confirm it's working with you as an internal user.

##### Say it your way

- "create quotation for [your chosen customer], [item] x[qty]"
- "new order, [customer], item [code], [qty] pieces"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Chatbot responds to you as the internal sales user
- [ ] It does NOT attempt to message the end customer directly
- [ ] A draft quotation forms with the right customer + item

##### It should stop and ask you if

- the customer or item can't be matched confidently.

##### If something breaks mid-way

It tells you what it captured and what's missing — **it must never silently drop the order.**

##### Sabotage bonus (+10 XP)

- Try messaging the bot's number from a phone not on the internal roster and see what happens.

##### Poke it

- Does it ever try to talk back to the actual end customer?

##### Loot to capture

- Screenshot of the thread and the resulting draft.

---

#### Mission M-02 — AutoCount Doesn't Lie · ★ · 10 XP · ~10 min

**Persona:** Xiao Ling, sales user
**Covers:** L-01 (HP-01, UP-01, UP-02, UP-03)
**Mission type:** Core

##### The situation

You create and submit a real Sales Order. You want to see it land correctly in AutoCount — with **AutoCount's own document ID**, not MAIA's.

> **Why this matters:** AutoCount stays master. Any drift between MAIA's record and AutoCount's is a real accounting risk.

**Precondition:** Customer and item exist in the AutoCount sandbox.

##### Input recipe

**Input type:** existing record you create

**Choose or prepare:**
- Any active customer and item.
- Optional variant: create a brand-new item (e.g. code "G7") and sync it, to see what code AutoCount assigns back.

**Your chosen data must satisfy:**
- Customer and item both exist in the sandbox (or the new-item variant is deliberately new).

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** creates and submits. No approval gate on this flow.

- **Always:** confirm the SO references AutoCount's external ID, not MAIA's internal one.
- **Never:** expect a resubmit of the same SO to create a duplicate record.
- **Before submitting:** double-check customer/item/qty.
- **Escalate when:** sync fails and no error is shown (that's a P1 finding).

##### Your goal

Confirm the SO syncs to AutoCount once, cleanly, using AutoCount's external ID.

##### Say it your way

- "confirm SO for [your chosen customer]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] SO appears in AutoCount sandbox matching customer, item, qty
- [ ] MAIA references AutoCount's external document ID, not its own internal one
- [ ] Resubmitting the same SO does NOT create a duplicate AutoCount record
- [ ] If sync fails (ask your test lead to simulate this — see Beyond Tester Reach), the failure is visible, not silent

##### It should stop and ask you if

- n/a for a clean sync — that's the win.

##### If something breaks mid-way

A sync failure must show as an error/notification — **never a silent pass.**

##### Sabotage bonus (+10 XP)

- Try resubmitting the exact same SO a second time.

##### Poke it

- If you rename an item in MAIA after it's already synced, does AutoCount's code stay the source of truth?

##### Loot to capture

- SO number in both systems, screenshot of the ID match.

---

#### Mission M-03 — The Discount Memory · ★★ · 20 XP · ~12 min

**Persona:** Xiao Ling, sales user
**Covers:** AIP-01 (HP-11, HP-12)
**Mission type:** Regression

##### The situation

This is the single most important flow in the whole account — **it's failed sign-off four times before you.** A customer wants a price on an item they've bought before. You need to know exactly what they paid last time, fast, before you quote.

> **Why this matters:** this exact decision is the account's real pass/fail line — see Section 2.

**Precondition:** the fixed fixture below has genuine invoice history in the sandbox.

##### Input recipe

**Input type:** existing fixed record (fixture)

**Choose or prepare:**
- Nothing to choose — use the named fixture exactly.

**Your chosen data must satisfy:**
- n/a — fixed fixture.

**Fixed reference:** FX-01 — customer `300-S0048` SEA LARK SOLUTION LIMITED + item `BW 1mx100m (SL Clear) 4.5kg` (10 real invoices, genuine price drift 41 → 49.8 → 47 over the past year)

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** query history before quoting a repeat item.
- **Never:** accept a wall of WhatsApp text as the answer — it must be a link.
- **Before submitting:** confirm the net price you're about to quote matches the latest relevant history.
- **Escalate when:** n/a — clean completion is the win.

##### Your goal

Query the fixed item's history and get back a one-glance table — every past invoice transaction, item code, date, invoice no., qty, standard price, discount %, net price — via a link you can tap straight from WhatsApp.

##### Say it your way

- "price history SEA LARK, BW 1mx100m SL Clear"
- "what did I give them last time for this item"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Chatbot returns a tappable URL, not a wall of WhatsApp text
- [ ] The linked page opens directly to the item/customer history — no extra navigation
- [ ] Every past invoice transaction shows, not capped to a token number
- [ ] Columns match exactly: item code, item name, date, invoice no., qty, standard price, discount %, net price

##### It should stop and ask you if

- n/a — this should just work cleanly.

##### If something breaks mid-way

It should never show a partial or garbled table — **if it can't build the view, it must say so.**

##### Sabotage bonus (+10 XP)

- Query a second, different item back-to-back — confirm the second query doesn't corrupt the first link's data.

##### Poke it

- How fast does the link actually open on a real phone connection?

##### Loot to capture

- The URL, screenshot of the opened table.

---

#### Mission M-04 — Not Found Means Not Found · ★★ · 20 XP · ~12 min

**Persona:** Xiao Ling, sales user
**Covers:** AIP-01 (UP-18, UP-19, UP-20)
**Mission type:** Edge

##### The situation

Not every item has history. You want to see MAIA handle that honestly — **no invented rows, no fake "smoothing over" of a gap.**

> **Why this matters:** a fabricated row here is worse than no row — it silently breaks trust in every other number MAIA shows.

**Precondition:** the fixed fixtures below have zero/thin invoice history in the sandbox.

##### Input recipe

**Input type:** existing fixed records (fixtures)

**Choose or prepare:**
- Nothing to choose — use the named fixtures exactly, one query each.

**Your chosen data must satisfy:**
- n/a — fixed fixtures.

**Fixed reference:** FX-02 (SEA LARK SOLUTION LIMITED + `PM72`, zero history) and FX-03 (FLYBEAR SDN BHD + `AWB-350` or `A3B`, exactly 1 invoice each)

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** treat "not found" as a valid, expected answer.
- **Never:** accept a fabricated or unrelated record as a substitute.
- **Before submitting:** n/a — this mission is query-only.
- **Escalate when:** any fabricated row appears (P1, escalate to Marcus immediately).

##### Your goal

Query a never-before-ordered item/customer pair, then a thin-history one, and confirm both are handled truthfully.

##### Say it your way

- "price history SEA LARK, PM72"
- "history flybear AWB-350"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Zero-history query (FX-02) clearly shows "not found" — no fabricated or unrelated records
- [ ] Thin-history query (FX-03) shows exactly what exists — no padding, no error
- [ ] If only Quotation/SO history exists (no Sales Invoice), the view does NOT quietly substitute that instead

##### It should stop and ask you if

- n/a — honest emptiness is the win condition itself.

##### If something breaks mid-way

Any fabricated row here is a **P1** — flag immediately.

##### Sabotage bonus (+10 XP)

- Query an item code that doesn't exist at all in AutoCount.

##### Poke it

- Does the "not found" message actually tell you it's not found, or just show a blank confusing screen?

##### Loot to capture

- Screenshots of both the empty and thin-history results.

---

#### Mission M-05 — Link, Not Chat Wall · ★ · 10 XP · ~8 min

**Persona:** Xiao Ling, sales user
**Covers:** AIP-02 (HP-13, UP-21, UP-22)
**Mission type:** Core

##### The situation

Historical pricing used to come back as a giant wall of text in WhatsApp — that's exactly what failed before. Now it should be a link.

> **Why this matters:** the link-out itself IS the fix for the historical failure mode; any regression to inline text is a P1.

**Precondition:** none.

##### Input recipe

**Input type:** existing record you query

**Choose or prepare:**
- Any 2–3 active items with history.

**Your chosen data must satisfy:**
- Each item has at least some invoice history to return.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** confirm the link opens the correct item/customer view.
- **Never:** accept an inline WhatsApp text table as a substitute for the link.
- **Before submitting:** n/a.
- **Escalate when:** the chatbot reverts to inline text (P1).

##### Your goal

Confirm the link-out behaviour holds — clean tap-through, never a bulky inline table, even under back-to-back queries.

##### Say it your way

- "price history for [item]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Link opens correctly on mobile, renders within a few seconds
- [ ] Chatbot never dumps the full table as inline WhatsApp text
- [ ] Two sequential different-item queries each return their own correct, distinct link

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

n/a — treat any regression to inline text as a **P1**.

##### Sabotage bonus (+10 XP)

- Query three items in rapid succession and check every link still points to the right item.

##### Poke it

- What happens if you tap an old link from earlier in the conversation after querying something new — does it still show the right (old) data?

##### Loot to capture

- Screenshots of 2+ distinct correct links.

---

#### Mission M-06 — Three Documents, One Chain · ★ · 10 XP · ~10 min

**Persona:** Xiao Ling, sales user
**Covers:** L-03 (HP-03, HP-04)
**Mission type:** Core

##### The situation

A real order moves Quotation → Sales Order → Delivery Note → Invoice. Sometimes one SO needs two separate deliveries.

**Precondition:** none.

##### Input recipe

**Input type:** existing records you create

**Choose or prepare:**
- Any active customer with 2+ orderable items.

**Your chosen data must satisfy:**
- Enough items to split into two separate DOs.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** creates the chain; **Logistics (Asrul)** would generate the DOs in a real handoff.

- **Always:** keep AutoCount external IDs consistent across the chain.
- **Never:** let a DO reference items not on the originating SO without a check.
- **Before submitting:** confirm the SO has all needed items before splitting deliveries.
- **Escalate when:** n/a.

##### Your goal

Run the full chain once straight through, then split one SO into two DOs and confirm both trace back correctly.

##### Say it your way

- "create quotation for [customer], [item1] x[qty], [item2] x[qty]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Invoice traces back to its originating SO/DO with correct AutoCount IDs
- [ ] Two DOs against the same SO both link back to that one parent SO
- [ ] SO correctly shows partial-delivery status when only one DO is done

##### It should stop and ask you if

- n/a for the happy path.

##### If something breaks mid-way

n/a.

##### Sabotage bonus (+10 XP)

- Try creating a DO with items that weren't on the original SO.

##### Poke it

- If you cancel one of the two DOs, does the SO status update sensibly?

##### Loot to capture

- SO/DO/Invoice numbers showing the chain.

---

#### Mission M-07 — Percent, Not Ringgit · ★★ · 20 XP · ~8 min

**Persona:** Xiao Ling, sales user
**Covers:** L-03 (UP-06)
**Mission type:** Regression

##### The situation

This exact bug has happened before — someone means "3% discount" and the system captures it as "RM3 off" instead.

> **Why this matters:** silently misapplying the wrong unit here directly changes the final invoiced amount — that's a P1.

**Precondition:** the fixed fixture below has real discount-drift history.

##### Input recipe

**Input type:** existing fixed record (fixture)

**Choose or prepare:**
- Nothing to choose — use the named fixture.

**Your chosen data must satisfy:**
- n/a — fixed fixture.

**Fixed reference:** FX-04 — BOOKXCESS SDN BHD + item `BW 0.5mx100m (SL Clear)`, standard price RM27.70, discount genuinely 5% on two real invoices and 10% on a third

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** confirm the discount unit before applying it.
- **Never:** let "3" silently become RM3 instead of 3%.
- **Before submitting:** check the resulting net price against the standard price.
- **Escalate when:** the discount unit is genuinely ambiguous.

##### Your goal

Enter a discount intending it as a percentage and confirm it's never silently misapplied as a flat currency amount.

##### Say it your way

- "3% off"
- "discount 3 percent"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Entering "3%" applies a 3% discount, not RM3 flat
- [ ] If the unit is genuinely ambiguous, the system asks rather than guessing

##### It should stop and ask you if

- the discount unit (% vs. RM) is unclear from what you typed.

##### If something breaks mid-way

Silently misapplying the wrong unit here is a **P1.**

##### Sabotage bonus (+10 XP)

- Type just a bare number with no % or RM symbol at all.

##### Poke it

- Does the final net price shown match what 3% off the standard price should actually be?

##### Loot to capture

- Screenshot of the applied discount and resulting net price.

---

#### Mission M-08 — Which Quotation? · ★★ · 20 XP · ~8 min

**Persona:** Xiao Ling, sales user
**Covers:** L-03 (UP-07)
**Mission type:** Edge

##### The situation

A customer has two quotations open right now. You reference "the quotation for [customer]" without saying which one.

**Precondition:** the same customer must have 2 open quotations — you create this yourself during the mission.

##### Input recipe

**Input type:** existing records you create

**Choose or prepare:**
- Any active customer — create two draft quotations for them first.

**Your chosen data must satisfy:**
- Both quotations are open/unconfirmed at the same time.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** expect clarification when a reference is ambiguous.
- **Never:** let an edit silently apply to the wrong record.
- **Before submitting:** confirm which quotation you're actually editing.
- **Escalate when:** n/a — asking is the correct behaviour.

##### Your goal

Confirm MAIA asks you to pick, rather than guessing and applying your instruction to the wrong one.

##### Say it your way

- "update the quotation for [customer]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] MAIA asks you to specify which quotation ID
- [ ] It never silently applies your edit to the wrong quotation

##### It should stop and ask you if

- a customer has 2+ open quotations and you don't specify which.

##### If something breaks mid-way

n/a — asking IS the correct behaviour.

##### Sabotage bonus (+10 XP)

- Give a vague nickname for the customer that could match more than one record.

##### Poke it

- Once you specify the right quotation, does it remember for the rest of that conversation?

##### Loot to capture

- Screenshot of the clarification prompt.

---

#### Mission M-09 — Still a Draft · ★ · 10 XP · ~10 min

**Persona:** Xiao Ling, sales user
**Covers:** L-04 (HP-05, UP-08, UP-09)
**Mission type:** Core

##### The situation

You're mid-conversation, still deciding on delivery method and final quantity. Nothing should lock — or submit — before you say so.

> **Why this matters:** a silent auto-submit here is a P1.

**Precondition:** a draft SO exists, not yet submitted.

##### Input recipe

**Input type:** existing record you create

**Choose or prepare:**
- Any active customer/item — create a draft SO.

**Your chosen data must satisfy:**
- SO is in draft status only.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** confirm explicitly before anything submits.
- **Never:** let the chatbot auto-submit on its own, even after a pause in conversation.
- **Before submitting:** review item/qty/delivery method.
- **Escalate when:** you try to edit an already-submitted SO — the system should refuse or route to an amendment flow.

##### Your goal

Edit the draft freely, then confirm it locks correctly once submitted, and never auto-submits on its own.

##### Say it your way

- "change quantity to [X]"
- "actually make it [Y] pieces instead"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Draft accepts item/quantity/delivery-method edits before submit
- [ ] Once submitted to AutoCount, further edits are blocked or require an explicit amendment flow — not a silent overwrite
- [ ] Chatbot never auto-submits a draft without your explicit confirm, even if the conversation goes quiet for a while

##### It should stop and ask you if

- you try to edit an already-submitted SO.

##### If something breaks mid-way

A silent auto-submit here is a **P1.**

##### Sabotage bonus (+10 XP)

- Leave the draft mid-edit and come back to it later — confirm it's still editable, not auto-finalized.

##### Poke it

- Can you tell, just by looking at the chat, whether a document is still a draft or already locked?

##### Loot to capture

- Screenshot of a successful edit, and of the submit-lock behaviour.

---

#### Mission M-10 — Two Calculators Only · ★ · 10 XP · ~10 min

**Persona:** Xiao Ling, sales user
**Covers:** L-05 (HP-06, HP-07, UP-10, UP-11)
**Mission type:** Core

##### The situation

Fixguru has 5 calculator types in real life, but this build only supports 2. You want to see the boundary held cleanly.

**Precondition:** none.

##### Input recipe

**Input type:** calculator inputs you choose

**Choose or prepare:**
- Pick any box dimensions for RSC and for Diecut.

**Your chosen data must satisfy:**
- Dimensions physically valid (length ≥ width).

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** use RSC or Diecut only.
- **Never:** expect Pizza Box, Layer Pad, or 5-panel to be offered.
- **Before submitting:** confirm the calculated price populated the quotation line.
- **Escalate when:** n/a.

##### Your goal

Successfully price a box with RSC, then with Diecut, then confirm the other 3 calculator types simply aren't offered.

##### Say it your way

- "RSC calculator, 30x20x15cm"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] RSC calculator produces a price that populates the quotation line
- [ ] Diecut calculator does the same
- [ ] Pizza Box / Layer Pad / 5-panel calculators are NOT available anywhere
- [ ] Entering a box where width > length is rejected before submission (physical print constraint)

##### It should stop and ask you if

- n/a for calculator selection — the missing options ARE the expected behaviour, not a bug.

##### If something breaks mid-way

n/a.

##### Sabotage bonus (+10 XP)

- Try to trick the calculator into accepting a width-greater-than-length box by entering dimensions in a different order.

##### Poke it

- Is there any hidden way to reach Pizza/Layer Pad/5-panel through a menu, even if not advertised?

##### Loot to capture

- Screenshots of both working calculators, and confirmation the other 3 are absent.

---

#### Mission M-11 — Free Isn't Free Stock · ★★ · 20 XP · ~12 min

**Persona:** Xiao Ling (creates) + Nisa (verifies invoice)
**Covers:** L-06 (HP-08, UP-12, UP-13)
**Mission type:** Core

##### The situation

A customer ordered 1000 units billable, plus 10 units free (production overage). Both the warehouse and the invoice need to get this right, in opposite directions.

**Precondition:** none.

##### Input recipe

**Input type:** existing record you create

**Choose or prepare:**
- Any active customer/item.

**Your chosen data must satisfy:**
- Item supports both billable and FOC quantity fields.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** creates; **Finance (Nisa)** verifies the invoice.

- **Always:** show billable and FOC as separate lines.
- **Never:** let FOC inflate the billed amount.
- **Before submitting:** confirm both quantities are entered correctly.
- **Escalate when:** stock doesn't decrement the FOC portion.

##### Your goal

Create the SO with both quantities, then confirm stock drops by billable+FOC while the invoice bills only billable × rate.

##### Say it your way

- "1000 pieces plus 10 FOC"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] SO clearly shows both billable qty and FOC qty as separate lines
- [ ] After delivery, stock has decremented by billable + FOC, not billable alone
- [ ] Invoice total reflects billable × rate only — FOC does not inflate the billed amount

##### It should stop and ask you if

- n/a for the happy path.

##### If something breaks mid-way

FOC inflating revenue, or not decrementing stock correctly, is a **P2.**

##### Sabotage bonus (+10 XP)

- Set FOC quantity higher than the billable quantity and see what happens.

##### Poke it

- Does the PDF clearly separate the two lines, or could a customer mistake FOC for a discount?

##### Loot to capture

- SO, DO, Invoice screenshots showing the qty split.

---

#### Mission M-12 — Say the Price Out Loud · ★★ · 20 XP · ~8 min

**Persona:** Xiao Ling, sales user
**Covers:** L-07 (HP-09, UP-14)
**Mission type:** Core

##### The situation

Fixguru treats delivery charges as item lines for e-invoice purposes — but only if you actually state the charge amount.

> **Why this matters:** auto-adding a SKU line without a stated price would be a P2.

**Precondition:** none.

##### Input recipe

**Input type:** existing record you create

**Choose or prepare:**
- Any active customer/item + one of the two fixed delivery SKUs.

**Your chosen data must satisfy:**
- Delivery-charge SKU code matches the AutoCount charge master.

**Fixed reference:** FX-05 — delivery-charge SKU codes `3PL DC` and `IAM DC`

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** state a charge amount to add a delivery SKU line.
- **Never:** let a bare method (no amount) silently add a SKU line.
- **Before submitting:** confirm the SKU matches the real AutoCount charge master.
- **Escalate when:** n/a.

##### Your goal

Book a delivery two ways — once stating method + charge together, once stating only the method — and see the difference hold.

##### Say it your way

- "fulfillment 3PL, delivery charge item 3PL DC, RM35"
- "fulfillment is 3PL" (method only)

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Stating method + charge together adds `3PL DC` (or `IAM DC`) as its own SKU/item line, sourced from AutoCount's real charge master — not an invented code
- [ ] Stating method alone sets the fulfillment method ONLY — it does NOT auto-add a SKU line without an explicit amount

##### It should stop and ask you if

- n/a — the two behaviours ARE the win condition.

##### If something breaks mid-way

Auto-adding a SKU line without a stated price would be a **P2.**

##### Sabotage bonus (+10 XP)

- State the charge amount in a follow-up message instead of the same instruction — does it still catch it correctly?

##### Poke it

- What delivery-charge SKU options does it actually offer you — do they match AutoCount's real charge list?

##### Loot to capture

- Two SOs side by side showing the method-only vs. method+charge outcome.

---

#### Mission M-13 — Not Our Profit · ★★ · 20 XP · ~8 min

**Persona:** Nisa, finance user
**Covers:** L-07 (UP-15)
**Mission type:** Core

##### The situation

If a delivery charge gets miscoded as product revenue, Fixguru's own accounting breaks downstream — this is exactly the kind of thing that looks fine on the surface and is wrong underneath.

> **Why this matters:** this is the exact accounting-integrity failure the client has flagged by name.

**Precondition:** an SO with a delivery-charge SKU line exists (from M-12).

##### Input recipe

**Input type:** existing record from M-12

**Choose or prepare:**
- Use the SO you created in M-12.

**Your chosen data must satisfy:**
- SO has a delivery-charge SKU line.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Finance (Nisa)** verifies; she has no submit rights herself.

- **Always:** verify delivery-charge accounting code is separate from item revenue.
- **Never:** accept a delivery line coded as product revenue.
- **Before submitting:** n/a — Nisa reviews, doesn't submit.
- **Escalate when:** miscoding is found (P1, escalate to Finance Manager `[GAP]`).

##### Your goal

Generate the invoice from that SO and check the delivery line's accounting treatment.

##### Say it your way

- (query the invoice, no specific phrasing needed)

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Delivery charge line is NOT treated as product revenue
- [ ] Accounting code for the delivery line is preserved separately from item revenue

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

Delivery miscoded as revenue is a **P1** — this is the exact accounting-integrity failure the client has flagged by name.

##### Sabotage bonus (+10 XP)

- Check whether the miscoding shows up only on the PDF, or also in the underlying AutoCount sync.

##### Poke it

- If you were auditing this invoice cold, would the delivery line be obviously separate from product lines?

##### Loot to capture

- Invoice PDF + AutoCount record, both showing correct treatment.

---

#### Mission M-14 — Brand Matters · ★ · 10 XP · ~8 min

**Persona:** Xiao Ling, sales user
**Covers:** L-08 (HP-10, UP-16, UP-17)
**Mission type:** Edge

##### The situation

An item display that's just a code and a name isn't enough — brand matters to how Fixguru's team recognises stock.

**Precondition:** one item has a brand set in AutoCount; one item does not — **not yet identified this round, see Launch Readiness Checklist §4.**

##### Input recipe

**Input type:** existing record you look up

**Choose or prepare:**
- One branded item, one unbranded item (ask UAT owner if unsure which qualifies).

**Your chosen data must satisfy:**
- One item genuinely has a brand field populated in AutoCount, one does not.

**Fixed reference:** NONE — item pair not yet identified, `[Blocked — Test Data/Configuration]` until confirmed

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** check the display format includes code + brand + name.
- **Never:** accept a blank or broken brand slot as the fallback.
- **Before submitting:** n/a — lookup-only mission.
- **Escalate when:** n/a.

##### Your goal

Look up a branded item and confirm the display format, then look up an unbranded one and confirm it degrades gracefully.

##### Say it your way

- "what's item [code]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Branded item shows: code + brand + name, consistently
- [ ] Unbranded item shows a clean fallback (code + name) — no blank/broken slot
- [ ] Same item's display matches between chatbot and web/FE — not different in each

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

n/a.

##### Sabotage bonus (+10 XP)

- Look up the same branded item in both chatbot and FE back-to-back and compare exactly.

##### Poke it

- Where does the brand value actually come from — is it pulled live from AutoCount, or cached somewhere stale?

##### Loot to capture

- Two screenshots (chatbot + FE) of the same branded item.

---

#### Mission M-15 — The Floor and the Book · ★★ · 20 XP · ~10 min

**Persona:** Xiao Ling (attempts) + Marcus (approves)
**Covers:** AIP-06 resolved sub-criteria (item+UOM threshold, price-book bypass)
**Mission type:** Regression

##### The situation

Floors aren't item-wide flat numbers here — they vary by UOM. And some customers already have a pre-approved price that should skip the usual approval dance, up to a point.

**Precondition:** an item with a per-UOM floor and a price-book customer below it must exist — **needs recheck this round, see Launch Readiness Checklist §4.**

##### Input recipe

**Input type:** existing record + approval flow

**Choose or prepare:**
- Item G1 (or equivalent) with a "piece" UOM floor; a price-book customer for that item.

**Your chosen data must satisfy:**
- The item's UOM-specific floor and the price-book entry are both live in the sandbox.

**Fixed reference:** NONE — configuration needs confirming, see Launch Readiness Checklist §4

##### Roles and business rules

**Roles and approvals:** **Sales agent (Xiao Ling)** attempts; **Marcus (admin)** approves.

- **Always:** show which UOM's floor was breached in the approval prompt.
- **Never:** let a price-book customer's locked rate trigger approval unnecessarily.
- **Before submitting:** confirm the UOM you're pricing against.
- **Escalate when:** price falls below the applicable floor for that UOM.

##### Your goal

Try pricing below the UOM-specific floor for a normal customer (should trigger approval), then price at the price-book customer's locked rate (should NOT trigger approval), then try going even lower than that locked rate (should trigger approval again).

##### Say it your way

- "price it at [below-floor amount]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Below-floor price for the "piece" UOM correctly triggers approval — a different UOM's floor for the same item should not falsely trigger
- [ ] Price-book customer's exact locked rate goes through with NO approval needed
- [ ] Going below even the price-book rate DOES trigger approval

##### It should stop and ask you if

- any price falls below the applicable floor for that specific UOM.

##### If something breaks mid-way

n/a.

##### Sabotage bonus (+10 XP)

- Try pricing the same item at a different UOM (e.g. box instead of piece) right at that UOM's own floor boundary.

##### Poke it

- Does the approval prompt actually say which UOM's floor was breached, or just a generic "too low" message?

##### Loot to capture

- Screenshots of all three scenarios (blocked, price-book pass, blocked-again).

---

#### Mission M-16 — Block at the Dock · ★★ · 20 XP · ~10 min

**Persona:** Xiao Ling (creates) + Marcus (approves)
**Covers:** AIP-05 resolved sub-criterion (DN-level block)
**Mission type:** Regression

##### The situation

This account fixed a real contradiction this week — credit blocking now happens at Delivery Note stage, not order creation, so a sale isn't killed before it even has a chance.

> **Why this matters:** blocking at the wrong stage (SO instead of DN) is a P2 — this is a recently-fixed contradiction, watch it carefully.

**Precondition:** a customer whose credit exposure only breaches the limit at DN stage, not SO — **needs deliberate configuration this round, see Launch Readiness Checklist §4.**

##### Input recipe

**Input type:** existing record + approval flow

**Choose or prepare:**
- A customer configured near/at credit limit (ask UAT owner if not yet set up).

**Your chosen data must satisfy:**
- Customer's exposure only exceeds the limit once the DN is created, not at SO stage.

**Fixed reference:** NONE — configuration needs confirming, see Launch Readiness Checklist §4

##### Roles and business rules

**Roles and approvals:** **Sales agent (Xiao Ling)** creates; **Marcus (admin)** approves.

- **Always:** allow the SO itself to proceed unblocked.
- **Never:** block credit at SO creation stage for this scope.
- **Before submitting:** n/a.
- **Escalate when:** DN creation triggers the block — Marcus reviews full context (exposure, limit, AR).

##### Your goal

Confirm the SO itself goes through cleanly, and the block/approval only fires when the Delivery Note is created.

##### Say it your way

- (create SO, then create DN — no specific phrasing needed)

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Creating the Sales Order does NOT block, even near/at the customer's credit limit
- [ ] Creating the Delivery Note for that same order DOES trigger the credit block/approval flow
- [ ] Marcus (approver) sees the relevant context before deciding

##### It should stop and ask you if

- the DN creation step, specifically — not the SO step.

##### If something breaks mid-way

Blocking at the wrong stage (SO instead of DN) is a **P2.**

##### Sabotage bonus (+10 XP)

- Create two SOs against the same near-limit customer before either one reaches DO stage — does the second one behave correctly too?

##### Poke it

- What information does Marcus actually see in the approval prompt — current exposure, limit, AR owing?

##### Loot to capture

- Screenshot of the unblocked SO and the blocked DO.

---

#### Mission M-17 — The Shelf Note · ★ · 10 XP · ~6 min

**Persona:** Asrul, logistics user
**Covers:** AIP-08 resolved sub-criterion (shelf-in-DN-note)
**Mission type:** Core

##### The situation

You're preparing a Delivery Note for picking — you need to know exactly where the item sits without hunting through a separate system.

**Precondition:** item has a shelf number configured.

##### Input recipe

**Input type:** existing record you look up

**Choose or prepare:**
- Any active item with a shelf value set.

**Your chosen data must satisfy:**
- Item's shelf field is populated in AutoCount.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Logistics (Asrul)** only.

- **Always:** confirm shelf appears in the DN's additional-note field.
- **Never:** expect full sub-warehouse hierarchy — that's out of bounds this phase.
- **Before submitting:** n/a — DN generation only.
- **Escalate when:** n/a.

##### Your goal

Generate the DN and confirm the shelf number shows up where you'd actually look for it.

##### Say it your way

- "generate DN for [SO]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Shelf number appears in the DN's additional-note field
- [ ] It's readable at a glance during picking, not buried

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

n/a.

##### Sabotage bonus (+10 XP)

- Try an item with no shelf number set at all.

##### Poke it

- If two items on the same DN sit on different shelves, does each line show its own correct shelf?

##### Loot to capture

- Screenshot of the DN's additional-note field.

---

#### Mission M-18 — Two Tongues · ★ · 10 XP · ~6 min

**Persona:** Xiao Ling, sales user
**Covers:** NS-09 (implemented — needs testing)
**Mission type:** Edge

##### The situation

You've set your reply language to Malay — you want to confirm it actually holds.

**Precondition:** chatbot language preference set to Bahasa Malaysia.

##### Input recipe

**Input type:** WhatsApp text message

**Choose or prepare:**
- Optionally use a `01_Customer_Order_Messages/` example for register.

**Your chosen data must satisfy:**
- n/a.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Sales agent** only.

- **Always:** confirm preference persists across the conversation.
- **Never:** expect a random revert to English.
- **Before submitting:** n/a.
- **Escalate when:** n/a.

##### Your goal

Send a message and get a reply in Bahasa Malaysia, consistently.

##### Say it your way

- (send any message with BM preference set)

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Chatbot replies in BM when preference is set to BM
- [ ] Preference persists across the conversation, doesn't randomly revert to English

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

n/a.

##### Sabotage bonus (+10 XP)

- Send a message in Mandarin while your reply preference is set to BM — does it still reply in BM, or get confused?

##### Poke it

- Does switching preference mid-conversation take effect immediately?

##### Loot to capture

- Screenshot of a BM reply.

---

#### Mission M-19 — Look Like AutoCount · ★ · 10 XP · ~8 min

**Persona:** Nisa, finance user
**Covers:** NS-10 (implemented — needs testing)
**Mission type:** Edge

##### The situation

Fixguru's team already trusts AutoCount's PDF look — a MAIA PDF that looks totally different creates friction with customers.

**Precondition:** an SO with a delivery-charge line exists.

##### Input recipe

**Input type:** existing record (reuse M-12's SO)

**Choose or prepare:**
- Use the SO from M-12, or create a new one with a delivery-charge line.

**Your chosen data must satisfy:**
- SO has a delivery-charge line to display.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** **Finance (Nisa)** only.

- **Always:** compare layout style against AutoCount's own template.
- **Never:** ignore a delivery-charge line rendered as a generic default.
- **Before submitting:** n/a — review-only.
- **Escalate when:** n/a — a mismatched PDF is P4, not urgent.

##### Your goal

Generate a PDF for that SO and compare its layout style against what AutoCount would produce.

##### Say it your way

- "generate PDF for [SO]"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] PDF shows the delivery charge as its own distinct line
- [ ] Overall layout resembles AutoCount's own template style, not a generic default

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

n/a — a mismatched PDF is a **P4**, annoying but not account-breaking on its own.

##### Sabotage bonus (+10 XP)

- Generate the PDF for a document with FOC lines too — does the layout stay clean with the extra line type?

##### Poke it

- Would a Fixguru customer receiving this PDF notice anything odd compared to what they're used to?

##### Loot to capture

- The PDF, side-by-side note of any layout differences.

---

### Section 9 — Boss Fights

#### Boss Fight BF-01 — I Speak Many Times The Same · ★★★ · 35 XP · ~15 min

**Persona:** Marcus Lim, admin
**Covers:** AIP-01 full regression (VOC-005)

##### Why this is a Boss Fight

This flow has claimed **four previous UAT rounds** — 7 April, 14 May, 16 June, and 24 June. Every time, historical pricing wasn't fast enough, clear enough, or right. This isn't a new bug hunt — it's a regression check on the account's single most consequential failure mode.

> **Why this matters:** if this flow is still slow, confusing, or wrong in any way, it is the single most consequential bug this pack can catch.

**Precondition:** M-03, M-04, and M-05 already passed individually.

##### Input recipe

**Input type:** WhatsApp text message

**Choose or prepare:**
- Use FX-01 (Sea Lark + BW 1mx100m) as the anchor item, plus 2 more of your own choosing for the sabotage bonus.

**Your chosen data must satisfy:**
- At least one item has real invoice history so the timed flow has something to display.

**Fixed reference:** FX-01, plus the real multi-item order format from the account's own history: *"011-xxxx — G3 100, G1 300, PM72 500"*

##### Win conditions

- [ ] MAIA retrieves the customer by phone number, not name
- [ ] Historical pricing link opens within a few seconds, no re-navigation needed
- [ ] Table is genuinely one-glance — you should not need to scroll or squint to find the number that matters
- [ ] You can confirm a price and move to SO creation without leaving the flow or waiting on a slow response

##### Extra chaos

- Do this back-to-back for 3 different customer/item pairs without pausing — does performance or accuracy degrade under realistic multi-order pressure? (Remember: 4–10 concurrent orders is Fixguru's real daily reality.)
- Poke it: if you were Marcus, would you sign off after this? Be honest.

##### Loot to capture

- Timed screenshots of the full flow, start to finish.

---

#### Deferred / Retired Regression Alerts

None this round — the account's only recorded historical failure (VOC-005, the pricing decision flow) is still within active locked scope and is covered by Boss Fight BF-01 above.

### Section 10 — Side Quests and Chaos Cards

**Side Quests (1–2 per persona):**

- *As Xiao Ling:* You're mid-conversation on one customer's order when a second, completely different customer messages you. Try switching context in the same chatbot session without losing either draft.
- *As Xiao Ling:* Push through 4 different customer orders back-to-back inside 10 minutes, the way a real busy morning would go. Note anywhere the chatbot made you slow down unnecessarily.
- *As Marcus:* Pick any single mission above and try to break it in a way nobody on this list thought of.
- *As Nisa:* Pull up 3 different invoices in a row and audit every delivery-charge line for correct accounting treatment.
- *As Asrul:* Prepare Delivery Notes for 3 different orders in a row and see if shelf references stay consistent and fast to find.

**Chaos Cards (any card, any mission, +10 XP if played meaningfully):**

1. Garble an item name the way a real customer would ("coconut fence" instead of the real item) and see if MAIA asks rather than guesses.
2. Send two separate order requests in one message.
3. Interrupt a mid-flow draft with a completely unrelated question, then come back to it.
4. Change your mind about a price right after confirming it.
5. Send a photo of a handwritten order instead of typing it.
6. Say "same as last time" with zero other detail.
7. Use a customer's WhatsApp number that matches more than one contact.
8. Ask for historical pricing on an item using its Mandarin/Chinese name instead of the AutoCount code.
9. Try to edit a document exactly at the moment it's being submitted.
10. Ask MAIA a question it has no locked answer for (e.g. "can I get Pizza Box calculator?") and see how it declines.

### Section 11 — Field Manual

**How to log a result:** mission code · persona · what you typed (verbatim) · what happened · what you expected · severity (P1–P4) · evidence link · chaos cards played.

**Evidence rules:** screenshots + every document ID created (Quotation/SO/DO/Invoice/Credit Note numbers) + timestamps.

**Test Data Selection Guide:** most missions let you pick your own active customer/item — read the "Input recipe" on each Mission Card for the exact criteria your choice must satisfy. If you can't find matching data, tell the UAT owner and log it as **Blocked — Test Data/Configuration**, not a bug.

**Reusable input-library rules:** see **[[UAT/00_START_HERE_INPUT_LIBRARY]]** — order-message samples are for register/tone only, never copy-paste them.

**Fixed-fixture rules:** the 5 named fixtures (FX-01–05) must never be modified — no new invoices against those exact customer/item pairs during testing.

**Scoring & Badges:**

- Mission XP: ★ = 10, ★★ = 20, ★★★ = 35.
- Bug bounty: P1 = 50, P2 = 30, P3 = 15, P4 = 5. First unique finder gets it.
- Chaos Card played meaningfully: +10. Sabotage bonus: as listed on the card.
- Badges: **First Blood** (first bug of the run) · **Method Actor** (all missions, zero copy-pasted phrasings) · **Chaos Agent** (5+ chaos cards) · **Boss Slayer** (survive BF-01) · **Cartographer** (3+ useful Observations) · **Completionist** (100%).

**Help:** ask Gareth directly during the window. Log anything you're unsure about as an *Observation* rather than sitting on it.

**Cleanup rules:** tag every record you create with `UAT-` in remarks/notes, per the Launch Readiness Checklist §9.

### Section 12 — Appendix — Coverage and Readiness Map

#### Source test-case disposition

| Source test case | Disposition | Active mission(s) | Reason |
|---|---|---|---|
| L-01 (HP-01, UP-01–03) | ACTIVE MISSION | M-02 | Locked |
| L-02 (HP-02) | ACTIVE MISSION | M-01 | Locked |
| L-03 (HP-03, HP-04, UP-06, UP-07) | ACTIVE MISSION | M-06, M-07, M-08 | Locked |
| L-04 (HP-05, UP-08, UP-09) | ACTIVE MISSION | M-09 | Locked |
| L-05 (HP-06, HP-07, UP-10, UP-11) | ACTIVE MISSION | M-10 | Locked |
| L-06 (HP-08, UP-12, UP-13) | ACTIVE MISSION | M-11 | Locked |
| L-07 (HP-09, UP-14, UP-15) | ACTIVE MISSION | M-12, M-13 | Locked |
| L-08 (HP-10, UP-16, UP-17) | ACTIVE MISSION | M-14 | Locked |
| AIP-01 (HP-11, HP-12, UP-18–20) | ACTIVE MISSION | M-03, M-04, BF-01 | Promoted LOCKED 13 Jul |
| AIP-02 (HP-13, UP-21, UP-22) | ACTIVE MISSION | M-05 | Promoted LOCKED 13 Jul |
| AIP-06 (ST-01–03 equivalents) | ADAPTED MISSION | M-15 | Only resolved sub-criteria are locked |
| AIP-05 (ST-04 equivalent) | ADAPTED MISSION | M-16 | Only DN-block sub-criterion is locked |
| AIP-08 (ST-05 equivalent) | ADAPTED MISSION | M-17 | Only shelf-in-note sub-criterion is locked |
| NS-09 (ST-06 equivalent) | ADAPTED MISSION | M-18 | "Implemented, needs testing" not fully locked as acceptance criteria |
| NS-10 (ST-07 equivalent) | ADAPTED MISSION | M-19 | Same as above |
| AIP-03, AIP-04, AIP-07 | NS ALERT | none | Not locked — see Section 4 |
| NS-05, NS-07, NS-08 (broader) | NS ALERT | none | Not locked — see Section 4 |
| OOS-01 to OOS-04 | OUT OF SCOPE | none | See Section 4 |
| S-01 to S-04 | SUPERSEDED | folded into L-04/L-07/AIP-01/AIP-02 | See Scope Lock v2 |

#### Scope coverage

| Scope item | Status | Mission(s) / boundary section |
|---|---|---|
| L-01–L-08 | LOCKED | M-01, M-02, M-06–M-14 |
| AIP-01, AIP-02 | LOCKED | M-03, M-04, M-05, BF-01 |
| AIP-05, AIP-06, AIP-08 (resolved sub-criteria only) | PARTIALLY LOCKED | M-15, M-16, M-17 |
| NS-09, NS-10 | Implemented, needs testing | M-18, M-19 |
| AIP-03, AIP-04, AIP-07, NS-05, NS-07, NS-08 (broader) | NS | Section 4 |
| OOS-01–04 | OUT OF SCOPE | Section 4 |

#### Input-requirement traceability

| Input category / fixture | Mission(s) | Readiness status |
|---|---|---|
| Tester-selected customer/item (general) | M-01, M-02, M-06, M-08–M-11, M-14, M-17–M-19 | Needs confirmation testers can browse (Launch Readiness Checklist §4) |
| FX-01 | M-03, BF-01 | Confirmed 14 Jul 2026 |
| FX-02, FX-03 | M-04 | Confirmed 14 Jul 2026 |
| FX-04 | M-07 | Confirmed 14 Jul 2026 |
| FX-05 | M-12 | Confirmed 14 Jul 2026 |
| Branded/unbranded item pair | M-14 | Not yet identified — blocking |
| Near-credit-limit customer | M-16 | Not yet configured — blocking |
| Per-UOM floor + price-book item | M-15 | Needs recheck — blocking |

#### Persona-rule traceability

| Persona | Business rule | Source | Mission(s) |
|---|---|---|---|
| Xiao Ling | Always check historical pricing before quoting a repeat item | VOC-001–005 | M-03, M-04, M-05, BF-01 |
| Xiao Ling | Never submit without explicit confirm | L-04 | M-09 |
| Marcus | Always demand full context before approving | VOC-020 | M-15, M-16 |
| Nisa | Never let delivery charge post as product revenue | L-07 | M-12, M-13 |
| Asrul | Always confirm shelf reference before picking | VOC-014, NS-08 | M-17 |

#### Beyond Tester Reach handoffs

| Handoff ID | Owner | Field-guide location |
|---|---|---|
| BTR-01 (sync failure simulation) | Gareth/tech | Section 4, M-02 sabotage bonus |
| BTR-02 (AIP-05/06/07/08 unresolved sub-criteria) | Gareth/tech | Section 4 |
| BTR-03 (NS-07 delivery-method doctype) | Gareth/tech | Section 4 |

## See Also

- [[Fixguru — VoC Extraction]]
- [[UAT/Fixguru — UAT Checklist]]
- [[UAT/Fixguru — UAT Launch Readiness Checklist]]
- [[UAT/00_START_HERE_INPUT_LIBRARY]]
- [[Fixguru — End-user & Process Map]]
- [[Fixguru — Lens Alignment Report]]

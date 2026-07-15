---
owner: Gareth
status: draft
last_reviewed: 2026-07-15
lark_url: https://eg69120xnei.sg.larksuite.com/docx/D9pxdPKRIoUei7xQMn5ldxRDgih
---

# MAIA UAT Field Guide — Play It Like a User

> **Corrected 2026-07-15** against the local Macrofrozen Training Plan (real staff roster + 14 Jul post-mortem findings): Sales Manager renamed to **CJ Tan** (was a placeholder); sales reps renamed **Ben** and **Queenie** (were mistranscribed as Aben/Quinny); Grace's title corrected to **Finance Manager**; **Applle** (Admin, same permissions as David) added to the roles table, not separately persona'd; **M-04 (AR reconciliation)** and **M-11 (Credit Note)** flagged as not testable this round (AR ships next sprint; CN has a known SQL/MAIA mismatch, client using a SQL workaround) — both kept as reference cards, not deleted; **M-05/M-06 (bulk price update)** flagged as actively under test today, targeting closure before tomorrow's client training; **M-02** clarified — the SO amendment to actual picked weight is a confirmed **manual** step, not automatic; **CPO terminology** fixed to mean Customer Purchase Order (plain document intake), explicitly not the certificate/tax-reference CPO feature used for other (C1/C3) clients.

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
    - Persona P-01 — David Chong, Owner / MD / Credit Controller / Price Controller
    - Persona P-02 — Ben / Queenie, Sales Rep
    - Persona P-03 — Grace, Finance Manager
    - Persona P-04 — CJ Tan, Sales Manager
    - Persona P-05 — Lai, Logistics/Warehouse Manager
  - Section 6 — Trust Killers
- PART B — THE MISSIONS
  - Section 7 — Campaign Overview
  - Section 8 — Mission Cards
    - Mission M-01 — The First Forward
    - Mission M-02 — SQL Doesn't Lie
    - Mission M-03 — Nothing Moves Until You Say So
    - Mission M-04 — Match It or Ask
    - Mission M-05 — Price Control
    - Mission M-06 — The Broken Template
    - Mission M-07 — Under the Limit, Over the Limit
    - Mission M-08 — My Customers Only
    - Mission M-09 — Three Documents, One Order
    - Mission M-10 — The Word "Invoice" Matters
    - Mission M-11 — Reverse It, Return It
    - Mission M-12 — Not Your Rights
    - Mission M-13 — Right Agent, Right Customer
    - Mission M-14 — Look, Don't Book
    - Mission M-15 — Last Price, Not Last Ten
    - Mission M-16 — Everyone Who Should Know
    - Mission M-17 — A Note on the File
    - Mission M-18 — The Formal Customer
  - Section 9 — Boss Fights
    - Boss Fight BF-01 — The SQL Blackout
  - Section 10 — Side Quests and Chaos Cards
  - Section 11 — Field Manual
  - Section 12 — Appendix — Coverage and Readiness Map

---

## PART A — READ BEFORE YOU PLAY

### Section 0 — Cover / Logistics

| | |
|-|-|
| **Project** | Macro Frozen (Macrofood) — Phase 1 Core |
| **Product** | MAIA — WhatsApp-first order-to-cash assistant |
| **Client** | Macro Frozen — frozen-food wholesale/retail distributor |
| **Issued** | 2026-07-14 |
| **Test window** | Tue, 14 Jul 2026, 10:30am – 12:00pm (90 min — see the timing note in Part B §1 before you plan) |
| **Environment & access** | Web app: `https://maia-fe-macrofrozen.vercel.app/`. Chatbot: `@maia_macrofoods_bot` |
| **Input Document** | Macrofrozen Sample PO |
| **Bug reporting** | `https://eg69120xnei.sg.larksuite.com/wiki/CsWLwSjOgiO98JkitQ8lGfpPgF2` |
| **Tracker to update progress** | QA Testing Tracker |
| **Time budget per tester** | 90 minutes (~20 min reading Part A + ~70 min actual testing) |
| **Testers needed** | 6 for full coverage. Fewer testers = run the tiered priority in Part B §1, don't try to rush all 42 missions. |

> **Remember:** Macro Frozen's *real* channel is WhatsApp — that's the world every persona and mission describes. **For this test run you will actually use the Chatbot handle above**, since the client's WhatsApp number isn't live yet. Same bot, same behaviour, different app. The channel swap is not a bug — don't log it.

> **Stop:** This Field Guide covers 18 mission cards (16 active + 2 kept as reference — M-04 and M-11, currently excluded, see their WIP flags), scoped to what's actually **LOCKED**. If a mission isn't here, it's either not ready to test yet or genuinely out of scope — check Section 4 before assuming something is missing.

---

### Section 1 — How to Play

- Stay in persona. Pick one of the five roles in Section 5 and act the way they would.
- Type naturally — your own words, your own shorthand, your own mix of English/Malay/Chinese. Never copy the sample phrasings verbatim.
- Respond to MAIA the way your persona would: impatient, brief, sometimes vague.
- Select your own valid data where a mission allows it — follow the mission's **Input recipe**, don't wait for someone to hand you an exact record.
- Use reusable input samples (the shared library) only where a mission actually calls for one.
- Break locked workflows thoughtfully — curiosity scores points, but check the scope map (Section 4) before you log something as a bug.
- Verify only what you can actually see. If an acceptance criterion depends on the client's live SQL system, that's a **Beyond Tester Reach** handoff, not something to chase down yourself.
- Capture evidence as you go (see Section 11).
- Record XP honestly — the badges only mean something if nobody pads them.
- Stop before any unsafe or destructive action and ask, rather than guessing.

> **Why this matters:** This isn't a script-following exercise. The missions, win conditions, and Chaos Cards are built to quietly guarantee coverage of everything that's actually locked — while you focus on playing your character, not executing steps.

---

### Section 2 — The Business World You Are Entering

#### At a glance

Macro Frozen is a **frozen-food wholesale/retail distributor** in Malaysia. Customers are mostly restaurants, hotels, and food-service businesses who order meat, poultry, and seafood by the kilogram. **Orders arrive as informal WhatsApp messages**, and the **final weight almost never matches what was ordered** — a warehouse worker physically weighs and picks the product, and that real number is what gets billed. **The single most important thing you must protect while testing:** the invoice must always reflect the *actual picked weight*, never the originally ordered quantity — and nothing should ever be pushed to the client's SQL system before a human confirms it.

#### What the business actually does

Macro Frozen sells frozen meat (beef, chicken, pork variants) and related frozen products, priced and sold by weight (kg) rather than by unit in most cases. Customers fall into two broad segments — **wholesale** and **retail** (restaurants/hotels) — with the main difference being order volume, not how they're treated. The business runs on **SQL/AutoCount**, an existing accounting and order system that the client has used for years; MAIA is being layered on top of it, not replacing it.

The team includes: **David** (owner/MD, who personally coordinates almost everything and controls credit and pricing), **Applle** (Admin — same permission level as David, not separately covered by a persona card in this pack), **CJ Tan** (Sales Manager, overseeing 2 reps), **2 sales reps** (**Ben** and **Queenie** — each manages their own customer list), **Grace** (Finance Manager, who is also the person who actually types every order into the system once a sales rep relays it), and **Lai** (the Logistics/warehouse manager, who coordinates a team of foreign-worker pickers). A third-party driver, **CK**, also has 3 customers of his own under a separate commission arrangement — these are not Macro Frozen's normal sales customers and should stay outside the usual sales workflows.

#### How a normal working day unfolds

1. A customer sends an order via **WhatsApp**, often in shorthand or informal language (e.g. "pork belly slight" meaning slice, skin-on).
2. A **sales rep** (Ben or Queenie) receives it — but does *not* key it into any system themselves. Instead, they relay it to the office, and **Grace types it in**.
3. Grace creates a **draft Sales Order** using MAIA, referencing SQL customer/item data.
4. The SO is submitted and converted into a **pick list PDF**, sent to **Lai** (the warehouse manager).
5. Lai shares the pick list with his foreign-worker pickers, who physically weigh and pack the product, recording the **actual picked weight** on the paper.
6. Lai collects the annotated pick list and **uploads it back to MAIA**, which amends the SO to the actual weight.
7. Only now does MAIA generate the **Delivery Order (DO)** and **Invoice**, both reflecting the real weight, not the original order.
8. The customer pays — by bank transfer, cash (collected by a driver), or QR scan — and Grace matches the payment against the outstanding invoice, either automatically (easy cases) or manually (ambiguous ones).
9. A small number of customers — **3 confirmed** — send a formal **Purchase Order (PO)** document instead of an informal WhatsApp message; this is a rare, low-volume variant of the same overall flow.

#### The end-to-end business journey

| Stage | Acting role | Input | Action | Output | Main failure consequence |
|-|-|-|-|-|-|
| 1. Order intake | Sales rep → Grace | WhatsApp/Telegram message | Grace creates draft SO | Draft SO | Wrong item/customer picked silently |
| 2. Weight confirmation | Lai + pickers | Pick-list PDF | Physical weighing, annotate, upload | Amended SO | Billed weight ≠ actual weight |
| 3. Document generation | MAIA | Amended SO | Generate DO + Invoice | DO, Invoice | Duplicate invoice, or invoice qty > DO qty |
| 4. Payment | Grace | Bank slip / cash / QR | Match to invoice | Payment record | Wrong customer credited |
| 5. Credit gate | Sales rep, David | New/updated order | Check credit limit before submit | Approved or blocked order | Over-limit order slips through unchecked |

#### Systems, channels, and documents

- **Telegram (test channel) / WhatsApp (real channel):** the single order-intake channel — one number, no multi-inbox routing.
- **MAIA:** the operational layer testers interact with directly.
- **SQL/AutoCount:** the client's existing ERP — **authoritative for customer and item master data**. MAIA references it but never overwrites it. You cannot access this system directly during testing — see Section 4, Beyond Tester Reach.
- **Documents:** Sales Order (SO) → Delivery Order (DO) → Invoice → Credit Note (split into **SCN**, which can reverse billing and/or return stock, and **CCN**, billing-only) → Pro Forma Invoice (a document literally titled "invoice," used for deposit-collection cases).

#### Where pressure and ambiguity enter

- Customers use informal, sometimes garbled item names ("pork belly slight").
- Item names sometimes appear in Chinese in the client's own price sheets but in English in SQL.
- The gap between ordered weight and actual picked weight is the daily norm, not an edge case.
- Payment references frequently don't match the invoiced customer's name.
- A handful of customers (3) use formal POs instead of the usual informal flow — genuinely rare, don't over-invest testing time here relative to its real frequency.

#### Why the client bought this product

David's stated want was faster order processing. What his actual behaviour reveals is that he wants to **stop being the personal bottleneck** for every order, price check, and credit decision — without losing control of any of it. Today, pricing lives in WhatsApp images generated through ChatGPT, cash from drivers is tracked in a self-made Excel sheet, and literally nothing is enforced except David's own vigilance.

#### What success feels like to the client

- Sales reps never see another rep's customers.
- Prices can't drop below a floor without David's say-so.
- An order that breaches a customer's credit limit stops and waits for David's approval.
- The **actual** picked weight — never the ordered weight — is what gets billed, every time.
- SQL is never contradicted or silently overwritten.

#### What would destroy trust

- **MAIA silently does something wrong to money or stock, and nobody notices until a customer complains.** This is David's single biggest fear.
- **MAIA tries to replace the existing SQL/paper process instead of fitting around it.**
- **The rollout looks good in a demo, but nobody on staff — warehouse, sales, finance — actually changes how they work.** There is a live, unresolved risk here: Grace (the person who keys in every order and matches every payment) has directly told the team she isn't yet convinced the new AR-matching flow saves her any real time compared to her current manual process. This is not hypothetical scepticism — it came from the person who will actually operate the system daily.
- **A photo/proof-of-delivery upload step gets added that nobody asked for.** Grace has explicitly rejected the idea of uploading delivery photos into MAIA — her current WhatsApp-group process already works for her, and she sees an upload step as *more* work, not less. This is a real, unresolved conflict, not a future feature — see Section 4.

#### What this means when you test

- Every mission that touches weight, price, or SQL sync is a **Trust Killer risk** if it goes wrong — treat these with extra scrutiny.
- Don't assume a design walkthrough equals adoption. If you're playing Grace or Lai, notice moments where the "correct" system behaviour still feels like *more* work than the old way — that's the single most valuable thing you can report today (see the Adoption Side Quest, Section 10).
- Do not attempt to test proof-of-delivery photo upload. It is deliberately excluded — see Section 4.
- If something looks wrong but is explicitly listed as Out of Bounds, log it as an Observation, not a bug.

---

### Section 3 — Product Map

#### Product purpose

MAIA is an **internal operations assistant** for Macro Frozen's Phase 1 — it converts informal WhatsApp/Telegram orders into structured, SQL-referencing Sales Orders, supports the actual-weight confirmation workflow, generates SO/DO/Invoice/Credit Note documents, enforces pricing and credit rules, and assists (without fully automating) AR reconciliation. It is explicitly **not** intended to replace SQL, become a customer-facing ordering app, or automate the client's entire warehouse process.

#### In-scope workflow chain

`Order message → draft SO (SQL-sourced customer/item) → pick-list-confirmed weight → amend SO → DO → Invoice → payment reconciliation`

A Credit Note can be raised against any submitted invoice — as a **Sales Credit Note (SCN)**, which can reverse billing and/or return stock, or a **Customer Credit Note (CCN)**, billing-only with no stock movement.

A small number of customers (3 confirmed) instead send a formal **PO document**, which MAIA matches against customer/item records before a user confirms it as a converted SO (**CPO**).

#### Objects and documents

| Object | Represents | Created from | Key statuses | Links to | Must never update silently |
|-|-|-|-|-|-|
| Sales Order (SO) | A confirmed customer order | Order message or PO | Draft → Submitted → Amended → Confirmed | DO, Invoice | Weight/qty must never change without the pick-list confirmation step |
| Delivery Order (DO) | Proof of what was shipped | Confirmed SO | Generated → (delivered, tracked outside MAIA) | Invoice | Qty must never exceed the confirmed SO/pick-list qty |
| Invoice | The bill | Confirmed SO/DO | Generated → Paid/Outstanding | SCN/CCN, Payment record | Must never duplicate for the same SO |
| SCN (Sales Credit Note) | Reversal + optional stock return | Original invoice | Draft → Submitted | Invoice, stock record | Must never silently skip the stock-return step if one was requested |
| CCN (Customer Credit Note) | Billing-only reversal | Original invoice | Draft → Submitted | Invoice | Must never move stock |
| Pro Forma Invoice | Deposit-request document titled "invoice" | SO | Generated | (informational, not a true invoice) | — |

#### State and lifecycle rules

- **Draft SO:** nothing is pushed to SQL yet. Any confirm/generate action before this stage completes is a **Must-NOT**.
- **Submitted → pick-list-confirmed:** the SO's weight/qty is not final until the uploaded pick list confirms it.
- **Confirmed SO → DO → Invoice:** each step is one-directional; a DO cannot be un-generated, and an invoice cannot exceed its DO's quantity.
- **Invoice → SCN/CCN:** either credit-note type can be raised against a submitted invoice; only SCN carries a stock-return option.

#### Confirmation and clarification rules

- **Routine, may proceed:** clear order with unambiguous customer/item/quantity.
- **Requires clarification:** ambiguous item name, missing quantity, item name in a language that doesn't directly map to the SQL SKU.
- **Requires confirmation (human-in-the-loop, always):** pushing any record to SQL; generating DO/Invoice before weight is pick-list-confirmed; matching an ambiguous payment.
- **Permission-gated:** approving an over-credit-limit order (David only); issuing a CN (finance/management, not an unsupervised sales rep); editing another rep's customer.
- **Must never happen silently:** any SQL push before confirmation; any price/weight/customer change without a visible trail.

#### Roles, permissions, and handoffs

| Role | May create | May submit/approve | Must be refused | Hands off to |
|-|-|-|-|-|
| Sales rep (Ben, Queenie) | Own customer records, activity notes | — | Viewing another rep's customers; creating an order directly instead of relaying via WhatsApp; self-approving an over-limit order; issuing a CN unsupervised | Grace (order entry), CJ Tan (team matters), David (credit approval) |
| Grace (Finance Manager) | SOs (from relayed orders), payment matches, CCN | Payment confirmation | — | Lai (pick list), David (pricing/credit escalation) |
| David (Admin) | Price adjustments (desktop), credit overrides | Credit-limit overrides | — | — (top of hierarchy) |
| Applle (Admin — same permissions as David) | All (per role matrix) | All (per role matrix) | — | Not separately covered by a persona card this round |
| CJ Tan (Sales Manager) | — | Team-level approvals for Ben/Queenie | Viewing accounts outside his own 2 reps | David (escalation) |
| Lai (Logistics/Warehouse Manager) | Pick-list uploads | — | — | Grace/system (amended SO) |

#### Data authority and external boundaries

- **SQL/AutoCount is the source of truth** for customer and item master data. MAIA references it, never overwrites it.
- Testers can verify MAIA-side behaviour directly. Testers **cannot** verify what actually lands inside the client's live SQL system — that's a Beyond Tester Reach handoff (Section 4).
- Nothing should ever be invented — a missing price, missing stock figure, or missing customer must be named as missing, never guessed.

#### Golden product rules

- **Nothing** gets pushed to SQL until a human confirms it.
- The **billed weight is always the actual picked weight**, never the ordered weight.
- SQL is **never** overwritten by MAIA.
- A sales rep **never** sees another rep's customers.
- Below-floor prices and over-credit-limit orders are **blocked**, not just flagged.
- MAIA **must never invent** a price, stock figure, customer, or item.

#### Glossary

| Term | Meaning |
|-|-|
| SO | Sales Order |
| DO | Delivery Order (a.k.a. Delivery Note) |
| CN | Credit Note — general term; splits into SCN and CCN |
| SCN | Sales Credit Note — can reverse billing + return stock together, or stock-return only |
| CCN | Customer Credit Note — billing/knock-off only, no stock movement |
| CPO | **Customer Purchase Order** — a formal order document a small number of customers (3 confirmed) send instead of an informal message; MAIA matches it and converts it to a confirmed Sales Order. **For Macro Frozen this is plain PO document intake only — no certificate/tax-reference linkage.** (A separate certificate/tax-reference "CPO" feature exists for other clients (C1/C3-style) — not applicable here; don't conflate the two.) |
| Pro Forma Invoice | A document titled "invoice," used to secure a deposit before the real invoice |
| AR | Accounts Receivable — matching incoming payments to invoices |
| SQL | Macro Frozen's existing ERP (AutoCount-based); remains master for customer + item data |
| Floor price | The minimum price a sales rep is allowed to sell at |
| POD | Proof of Delivery (signed DO / photo) — **explicitly excluded from this test round**, see Section 4 |

#### What this means when you test

- Always check what state a record is in before acting on it — a submitted SO behaves differently from a draft.
- Always check role boundaries — most missions have a "wrong actor" variant worth trying even if not explicitly instructed.
- Never assume a confirmation step is optional — if MAIA lets you skip it, that's a bug, not a shortcut.
- If a downstream action (DO generation, SQL push) happens before its trigger condition is met, that's a high-severity finding.

---

### Section 4 — The Map

#### In Bounds

- Take an order message and turn it into a draft SO using SQL-sourced customer/item data.
- Hold the order at draft weight, then re-bill at the actual picked weight once the pick list is confirmed.
- Generate SO, DO, Invoice, SCN, CCN, and Pro Forma Invoice documents.
- Enforce a price floor and customer-specific fixed prices; block below-floor pricing.
- Block an order that breaches a customer's credit limit, routing approval to David only.
- Auto-suggest payment-to-invoice matches, but never auto-post an ambiguous match.
- Keep each sales rep's customer list private from every other rep.
- Restrict Macro Frozen to a single MAIA order-intake number.
- Route each customer to their correct sales agent (CJ Tan, Ben, Queenie, or David by default); keep CK's 3 driver-managed customers out of the normal sales pipeline.
- Let field/outdoor sales query price, outstanding, and customer info — but never create an order directly.
- Let sales log notes/events/tasks on their own customer's profile.
- Route overdue-invoice alerts to Finance, the responsible salesperson, their Sales Manager, and David.
- Show the single latest invoiced price for an item at order entry — nothing older, no cross-item view (a deliberate boundary, not a gap).
- For the 3 PO-issuing customers: match an uploaded PO against customer + item records, with human review before submitting as a CPO.

#### NS — Needs Scoping / Do Not Test

| Item | Source | Why not locked | What you do if encountered |
|-|-|-|-|
| Product catalogue / image generation | AS-02 | Acceptance criteria not locked; creation process is David-only knowledge | Log an Observation only if genuinely confusing |
| Credit-note numbering rule | AS-03 | Whether the CN number should mirror the invoice number is unresolved | Don't test the numbering scheme itself |
| Credit Note (SCN/CCN) generation | SL-07 | **WIP — known SQL/MAIA mismatch, per 14 Jul Training Plan post-mortem.** Client uses SQL directly for CN until the backend fix ships and reverses back into MAIA. | Do not test — see M-11's WIP flag |
| Customer master-data field writability | AS-05 | Only the activity-log sub-feature is locked; address/phone/billing writability is open | Log an Observation if you notice inconsistent field editability |
| Backend dashboard / reminders | AS-06 | Guiding questions drafted, not yet asked to the client | Do not test |
| Quotation-before-order / price-lock | AS-07 | Proposed, not locked; real-world usage confirmed low | Do not test |
| Inventory aging/expiry alert | NS-03 | Feature being built, but trigger/recipient/cadence mechanism undefined | Do not test |
| Stock-expiry alert — sales inclusion | NS-09 | Needs David's decision | Do not test |
| Backup coverage for Logistics/Finance Manager absence | NS-10 | Real operational gap, not a system feature | Do not test |
| Warehouse Maya access model (individual vs shared device) | NS-11 | Undecided | Do not test |
| Cost/buying price tracking & bulk update | AS-09/NS-13 | New requirement, mechanism entirely undefined | Do not test |

#### Out of Bounds

- AP (supplier payment) reconciliation.
- Merchant/QR settlement reconciliation.
- Delivery trip management, driver app, route planning.
- Full WMS / barcode / QR scanning.
- Volume-based pricing tiers.
- A full B2C customer-ordering app/chatbot.
- Automated WhatsApp broadcast/blasting.

> **Stop:** **Uploading proof-of-delivery photos into MAIA at all** is not merely unbuilt — the client (Grace) has explicitly rejected this design. Her current process (photo → WhatsApp group, no system status) is what she wants preserved. Do not attempt to test this, and do not log its absence as a bug.

#### Beyond Tester Reach

| Criterion | Tester-verifiable half | Client/account-owner half | Owner |
|-|-|-|-|
| SO/DO/Invoice actually lands correctly in the client's live SQL | MAIA shows a correct "synced"/"pending" status, never a false success | Whether the record actually appears correctly inside the real SQL/AutoCount system | Dev team + SQL vendor |
| AS-01 pick-list flow gets real adoption | The upload/amend mechanism functions correctly with test data | Whether Lai and his pickers actually use it instead of their own paper process | David / Lai |
| SL-02 AR flow reduces Grace's real workload | The auto-match/flag mechanism works correctly | Whether Grace, using it for real, finds it faster than her current process | Grace |

---

### Section 5 — Persona Cards

#### Persona P-01 — David Chong, Owner / MD / Credit Controller / Price Controller

**Evidence basis:** direct VoC (multiple confirmed transcript quotes)

##### A day in my life

I'm on WhatsApp from 7am — fielding order questions, chasing payments, and approving anything that needs my sign-off. I'm the one everyone forwards a problem to. If a price needs updating, I do it, usually about once a week, whenever the market moves — not on any fixed schedule. If a customer's order pushes them over their credit limit, it stops and waits for me. I don't want a system that quietly does something wrong to money or stock and only tells me after a customer's already angry.

##### Business rules I live by

- **Always:** check that nothing moves money or stock without my knowledge; verify anything unusual myself before trusting it.
- **Never:** let a below-floor price or an over-limit order go through without my explicit approval.
- **Before I submit:** a price change, I make it directly through the desktop app — not WhatsApp, not a chatbot.
- **I can approve:** credit-limit overrides for a single order.
- **I cannot approve:** nothing above me — I'm the final approver in this account.
- **I escalate to:** nobody — I am the escalation point.

##### What I want from this product

Get me out of being the mandatory middleman for every order, price check, and credit decision — without me losing control of any of it.

##### What makes me trust it

It never silently changes money or stock without me knowing.

##### What would make me ditch it

The moment it does something wrong quietly and I only find out from an angry customer.

##### How I talk

- "same as last week"
- "confirm now or not"
- "who approve this ah"

##### Patience level and quirks

Low patience for back-and-forth on things he considers obvious; very high attention to anything involving money.

##### What this means when you test as me

- Any silent change to price, credit, or stock status is an instant Trust Killer — treat it as the highest severity.
- I only trust a confirmation step if it's genuinely visible, not buried.
- I am the only person who should ever be able to approve a credit override.

---

#### Persona P-02 — Ben / Queenie, Sales Rep

**Evidence basis:** direct VoC (transcript-confirmed on territory isolation), partial (individual personality inferred)

##### A day in my life

I manage my own list of restaurant/hotel and wholesale customers. Orders come in on WhatsApp all day, often at the worst moment. I don't type the order into MAIA myself — I relay it to the office, and Grace keys it in. What I actually do in MAIA (once field access is live) is check prices, check a customer's outstanding balance, and log a quick note after a call. I want my customer's price applied correctly without me having to remember it, and I never want another rep — or David — breathing down my neck over my own customers.

##### Business rules I live by

- **Always:** verify a price looks right before relaying an order; keep my own customer notes up to date.
- **Never:** try to view another rep's customer list; try to create an order directly instead of relaying it to the office; try to issue a credit note myself.
- **Before I submit:** nothing — I don't submit SOs, I relay to Grace.
- **I can approve:** nothing formally — I escalate anything unusual.
- **I cannot approve:** credit overrides, CN issuance.
- **I escalate to:** CJ Tan, my Sales Manager (for team matters), or David directly (for credit blocks).

##### What I want from this product

Get the order relayed and confirmed fast, without another rep or David breathing down my neck over my own customers.

##### What makes me trust it

It applies my customer's price correctly without me having to remember it.

##### What would make me ditch it

If it lets another rep see my customer's info, or blocks me on something that should just work.

##### How I talk

- "same as last week for xing rui but double the chicken leg"
- "got stock or not ah"
- "20kg boneless leg for oasis, friday"

##### Patience level and quirks

Impatient; will try to route around a block if one shows up.

##### What this means when you test as me

- Always try to view a customer that isn't mine and confirm I'm refused.
- I should never be able to submit an order directly from the field/query context — only query.
- I should never be able to issue a CN without an approval step.

---

#### Persona P-03 — Grace, Finance Manager — *and the person who actually keys in every order*

**Evidence basis:** direct VoC (live clarification call, 2026-07-14) — the most reliably-sourced persona in this pack

##### A day in my life

I reconcile whatever payments come in against outstanding invoices — bank transfers, cash from drivers, QR scans — and chase overdue accounts. I also key in every single order the sales reps relay to me over WhatsApp; nothing gets entered into MAIA except through me. I'm also the one fielding most of the scope-clarification questions from the vendor side, so I know this product's design better than most of the team.

> **Why this matters:** I am the single busiest touchpoint in the entire product. If MAIA adds steps to *my* day, the deployment fails no matter how good it looks to David in a demo.

##### Business rules I live by

- **Always:** verify a mismatched payer name before matching it to any invoice; key in orders exactly as relayed, flagging anything unclear back to the rep.
- **Never:** let a payment auto-match on an ambiguous case without my confirmation; let something post before I've explicitly confirmed it.
- **Before I submit:** a payment match, I check that the amount and reference genuinely line up.
- **I can approve:** payment matches, Customer Credit Notes (billing-only).
- **I cannot approve:** credit-limit overrides (that's David); Sales Credit Notes with a stock-return component may need sign-off depending on the case.
- **I escalate to:** David, for anything involving credit or pricing decisions.

##### What I want from this product

Match the easy payments automatically, but let me decide the ambiguous ones myself. Never let something post before I confirm it. And don't add steps to my day — if I'm doing the same manual work just "through MAIA now," that's not a win.

##### What makes me trust it

A mismatched payer name gets flagged, not silently matched to the wrong customer.

##### What would make me ditch it

If it invents a match, or if it adds a step (like uploading delivery photos) that I don't currently need.

##### How I talk

- "payment RM2000 only, invoice is RM5000, where the rest"

##### Patience level and quirks

Very low tolerance for anything that looks like it guessed instead of asking. Openly skeptical of new workflow until she's actually run it herself — don't take a "sure, sounds fine" from her as adoption confirmed.

##### What this means when you test as me

- Always try a payment with a clearly mismatched payer name and confirm it gets flagged, not silently matched.
- Notice, honestly, whether the AR flow genuinely feels faster than typing straight into SQL — and log that observation (see the Adoption Side Quest, Section 10).
- I should never be asked to upload a delivery photo — that flow doesn't exist in this round, by design.

---

#### Persona P-04 — CJ Tan, Sales Manager

**Evidence basis:** direct VoC (role confirmed 2026-07-14) + confirmed via `Macrofood Sales User Setup.xlsx` (real staff roster) — name confirmed as **CJ Tan**, correcting an earlier placeholder in this pack.

##### A day in my life

I've got two reps under me — Ben and Queenie. I approve what they can't approve themselves, and I'm on the hook when their customers don't pay on time. If I have to see every other rep's overdue accounts too, I'm just another bottleneck — I only want to see my own two.

##### Business rules I live by

- **Always:** check my own two reps' overdue accounts.
- **Never:** expect to see, or act on, another rep's accounts outside my team.
- **Before I submit:** nothing formal — my role here is oversight of alerts.
- **I can approve:** matters escalated by Ben or Queenie within my authority.
- **I cannot approve:** credit-limit overrides beyond my scope (David's call).
- **I escalate to:** David.

##### What I want from this product

Show me my two reps' problems — overdue invoices, blocked orders — without drowning me in everyone else's.

##### What makes me trust it

The alerts it sends me are actually mine to act on.

##### What would make me ditch it

If I'm seeing accounts that aren't my reps', or approving things a rep should have handled.

##### How I talk

- "who's chasing this one"
- "that's Ben's customer, not mine"

##### Patience level and quirks

Cares sharply about scope of responsibility — will notice immediately if shown data outside his team.

##### What this means when you test as me

- The single thing to verify: my overdue-alert view shows *only* Ben's and Queenie's accounts, never anyone else's.
- **This mission cannot be run solo** — you need someone playing this role and someone checking what Finance/David receive at the same time.

---

#### Persona P-05 — Lai, Warehouse Manager

**Evidence basis:** name confirmed via Grace (2026-07-14); not a direct warehouse voice — Lai himself has never been heard from directly in discovery, only described

##### A day in my life

I receive the pick-list PDF, hand it to the foreign-worker pickers, collect it back once they've marked actual quantities, and upload it to MAIA. If I'm out sick, right now **nobody else checks their work** — a confirmed operational gap, not something this test round fixes.

##### Business rules I live by

- **Always:** distribute the pick list, collect it back annotated, upload the real weight.
- **Never:** let a quantity go unconfirmed before the SO is amended.
- **Before I submit:** the upload, I make sure every line has an actual quantity marked.
- **I can approve:** nothing — I confirm weight, I don't approve credit or pricing.
- **I cannot approve:** anything financial.
- **I escalate to:** Grace/the office if something on the pick list doesn't make sense.

##### What I want from this product

Something that doesn't slow the floor down. I'm the single point of contact for this whole step — no backup exists if I'm sick or on leave.

##### What makes me trust it

Doesn't matter much to me personally — but if it makes me responsible for numbers I didn't personally verify, that's a problem.

##### What would make me ditch it

Any friction that makes the new flow slower than my old paper process.

##### How I talk

- "8kg only"
- "not 10"

##### Patience level and quirks

Will revert to the old paper process the moment the new one is friction — a live, unresolved adoption risk, not solved by this test round.

##### What this means when you test as me

- Always confirm the amended SO reflects exactly what was annotated on the uploaded PDF — never the original order quantity.
- Try entering an invalid weight (negative, non-numeric) and confirm it's rejected cleanly.
- If you're unavailable during the real test window, there is currently no defined backup tester for this role — flag it as an Observation if it blocks a mission.

---

### Section 6 — Trust Killers

- **P1 — Client walks away:**
  - MAIA bills the **ordered** weight instead of the **actual picked** weight.
  - MAIA overwrites SQL's customer/item data as if it were master.
  - MAIA shows a record as successfully synced to SQL when the sync actually **failed** (false success).
  - **MAIA invents data** — a price, a stock figure, a customer, an item — instead of saying it doesn't know.
  - Any unauthorised role completing a gated action (e.g. a sales rep self-approving a credit override) is **always P1**.
- **P2 — Client gets nervous:** below-floor price goes through; an over-credit-limit order is not blocked; a duplicate invoice is created; a payment is auto-matched to the wrong customer; a sales rep sees another rep's customer data.
- **P3 — Annoying but survivable:** several rounds of clarification needed for an ambiguous item name; a price-template error isn't explained clearly; a rep has to fight the system for an obviously-correct order.
- **P4 — Cosmetic:** PDF formatting/layout doesn't match Macro Frozen's existing SQL document look.

> **Why this matters:** David's fear isn't that MAIA is slow — it's that MAIA does something wrong to *money or stock*, quietly, and he only finds out when a customer shouts at him. Anything that could do that is a P1, even if it looks small.

---

## PART B — THE MISSIONS

### Section 7 — Campaign Overview

| Mission | Persona | Difficulty | XP | Time |
|-|-|-:|-:|-:|
| M-01 — The First Forward | Ben / Queenie | ★ | 10 | 8 min |
| M-02 — SQL Doesn't Lie | Ben / Queenie | ★★ | 20 | 14 min |
| M-03 — Nothing Moves Until You Say So | Ben / Queenie | ★★ | 20 | 10 min |
| M-04 — Match It or Ask 🚧 (not shipped — next sprint) | Grace | ★★ | 20 | 12 min |
| M-05 — Price Control | David | ★ | 10 | 10 min |
| M-06 — The Broken Template | David | ★★ | 20 | 12 min |
| M-07 — Under the Limit, Over the Limit | Ben / Queenie | ★★ | 20 | 12 min |
| M-08 — My Customers Only | Ben / Queenie | ★ | 10 | 6 min |
| M-09 — Three Documents, One Order | Ben / Queenie / Grace | ★ | 10 | 10 min |
| M-10 — The Word "Invoice" Matters | Ben / Queenie | ★ | 10 | 8 min |
| M-11 — Reverse It, Return It 🚧 (WIP — do not run) | Grace | ★★ | 20 | 14 min |
| M-12 — Not Your Rights | Ben / Queenie | ★★ | 20 | 8 min |
| M-13 — Right Agent, Right Customer | Ben / Queenie | ★ | 10 | 8 min |
| M-14 — Look, Don't Book | Ben / Queenie | ★ | 10 | 8 min |
| M-15 — Last Price, Not Last Ten | Ben / Queenie | ★ | 10 | 8 min |
| M-16 — Everyone Who Should Know | Sales Manager + Grace | ★ | 10 | 10 min |
| M-17 — A Note on the File | Ben / Queenie | ★ | 10 | 6 min |
| M-18 — The Formal Customer | Grace | ★ | 10 | 10 min |
| BF-01 — The SQL Blackout | David | ★★★ | 35 | 15 min |

**Total if run end to end: ~199 minutes.** Your window is 90 minutes per tester (~70 minutes of actual testing) — see the priority tiers below.

#### Recommended order

Tutorial (M-01) → core loops (M-02, M-05, M-07, M-09) → unhappy paths (M-03, M-06, M-12) → new-scope additions (M-13 through M-18) → Boss Fight (BF-01) → Side Quests. (M-04 and M-11 excluded this round — see their WIP/not-shipped flags.)

#### 🔴 Tier 1 — The P1 Core (~44 min)

If only one person tests anything, it's this — every mission here maps to a failure that makes the client walk away.
`M-02 (14) · M-03 (10) · BF-01 (15) · M-06 (part of, see below)`

Given the tight budget, run **M-02 → M-03 → BF-01** first if time is short.

#### 🟠 Tier 2 — Trust & Control (~52 min)
`M-05 (10) · M-07 (12) · M-06 (12) · M-08 (6)` — **M-04 excluded this round (not yet shipped, next sprint)**

#### 🟡 Tier 3 — Core Loops (~32 min)
`M-01 (8) · M-09 (10) · M-10 (8) · M-12 (8, if time)`

#### 🟢 Tier 4 — New Scope Additions (~52 min)
`M-13 (8) · M-14 (8) · M-15 (8) · M-16 (10) · M-17 (6) · M-18 (10, blocked pending FIX-01)` — **M-11 excluded this round (WIP, see mission card)**

#### Squad split — suggested for 5–6 testers, ~70 min each

| Tester | Persona focus | Missions | Est. |
|-|-|-|-|
| T1 | Ben/Queenie — sales core | M-01, M-02, M-08, M-09, M-10, M-12 | 52 min |
| T2 | Ben/Queenie — sales edge | M-07, M-13, M-14, M-15, M-17 | 42 min |
| T3 | Grace — finance/AR | M-16*, M-18 | 20 min (M-04 not shipped yet, M-11 WIP — both excluded) |
| T4 | David — control & pricing | M-05, M-06, BF-01 | 37 min |
| T5 | (shared) M-03 + spillover from T1–T4, plus Side Quests | M-03 + overflow | ~variable |

\* **M-16 needs two people** — coordinate with T4/David or the Sales Manager persona before starting it.

#### 100% Completion
All 18 missions + BF-01 + Side Quests + at least 3 Chaos Cards played. Requires roughly 5–6 testers given the 90-minute budget.

---

### Section 8 — Mission Cards

> Sample phrasings are illustrative only. **Type your own words** — copy-pasting the samples breaks the "Method Actor" badge.

#### Mission M-01 — The First Forward · ★ · 10 XP · ~8 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** HP-01 · SL-06
**Mission type:** Core

##### The situation

A regular customer just sent you an order over WhatsApp. You relay it into the **one MAIA number** Macro Frozen uses — there's only supposed to be one, not five scattered numbers per rep.

> **Why this matters:** A single intake channel is a locked, load-bearing rule — if MAIA quietly accepts a second channel, the whole territory-isolation and order-routing design breaks.

**Precondition:** The MAIA/Telegram channel is live and you are an authorised user.

##### Input recipe

**Input type:** text message (order)

**Choose or prepare:**
- Choose any active customer and item from the loaded test data.
- Write the message in your own words.

**Your chosen data must satisfy:**
- The customer and item both exist and are active.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** any authorised Sales/Admin user may forward an order.

- **Always:** send through the one recognised channel.
- **Never:** expect a second inbox/number to be recognised.
- **Before submitting:** none — this mission ends at draft extraction, not submission.
- **Escalate when:** the item/customer can't be matched confidently.

##### Your goal

Get MAIA to acknowledge the order and hand you back a draft with customer, item, and quantity extracted.

##### Say it your way

- "3 boxes pork belly, deliver fri"
- "cust wants pork belly x3 friday delivery"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] MAIA replies in the same thread.
- [ ] A draft with customer, item, and quantity comes back — not a blank acknowledgement.
- [ ] Nothing is created in SQL yet at this stage.

##### It should stop and ask you if

- the item or customer can't be matched confidently.

##### If something breaks mid-way

It tells you what it captured, what's missing, and asks how to proceed — it **never** silently drops the order.

##### Sabotage bonus (+10 XP)

- Forward the same message twice in a row and see what happens.

##### Poke it

- What happens if you send it from an account that isn't yours?

##### Loot to capture

- The draft it returns.
- Screenshot of the thread.

---

#### Mission M-02 — SQL Doesn't Lie · ★★ · 20 XP · ~14 min

**Persona:** Ben / Queenie, Sales Rep (+ optionally Lai for the weight-confirmation half)
**Covers:** HP-02, HP-03 · UP-01, UP-02, UP-03, UP-13, UP-15, UP-16, UP-17, UP-24 · SL-01, SL-07, AS-01
**Mission type:** Core + Edge

##### The situation

You have a real customer and a real item in mind — the kind that already exists in SQL. You want MAIA's draft to reflect SQL's actual data, and you want the weight billed at the end to be what the warehouse actually picked, not what you originally ordered.

> **Why this matters:** This is the single highest-priority workflow in the whole account — if the billed weight is wrong, or if MAIA invents data instead of naming a gap, the deployment fails at its core promise.

> **Confirmed process detail (2026-07-15):** amending the SO to the real weight is a **manual step**, not an automatic recalculation. Once the pick list comes back with the actual picked quantity, Grace/admin manually adjusts the weight/quantity field on the SO to match — MAIA doesn't infer it on its own. Test this as a deliberate human data-entry action, and confirm the recalculated amount follows correctly once that manual adjustment is made.

**Precondition:** A real active customer and item exist in the test environment.

##### Input recipe

**Input type:** text message + (optionally) a pick-list PDF from the shared library

**Choose or prepare:**
- Any real active customer + item pair.
- An intentionally garbled item name (e.g. "pork belly slight") or a Chinese-name variant for the ambiguity path.
- A quantity that will later differ from the picked weight, e.g. order 10kg, pick 8kg or 9.5kg.

**Your chosen data must satisfy:**
- The customer and item exist in SQL-derived data.
- For the ambiguity variant: the item name must genuinely not have a direct string match.
- For the weight variant: the picked quantity must differ from the ordered quantity.

**Fixed reference:** NONE (optional sample pick-list scans in `03_Pick_List_Samples/` for the sabotage variant)

##### Roles and business rules

**Roles and approvals:** Sales/Admin creates the draft; Lai (or you, standing in) confirms the pick list.

- **Always:** verify the draft's customer/item/price traces to SQL data.
- **Never:** let MAIA invent a customer, item, or price that isn't in SQL; let the billed weight equal the ordered weight if they differ.
- **Before submitting:** confirm the pick-list-confirmed weight before generating DO/Invoice.
- **Escalate when:** the item/customer name is ambiguous against SQL.

##### Your goal

Confirm a draft SO whose customer, item, and price all trace to SQL, then confirm the DO/Invoice reflect the **actual picked weight**, not the ordered quantity — and that MAIA asks rather than guesses on anything ambiguous.

##### Say it your way

- "order for XING RUI SDN BHD, 20kg CHICKEN BONELESS LEG"
- "pork belly slight for OASIS CAFE"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] The draft shows SQL-sourced customer + item + price.
- [ ] Confirming creates a real SO referencing that SQL data.
- [ ] An ambiguous item name is either resolved correctly or surfaced for manual selection — never silently guessed.
- [ ] Once the pick list confirms a different weight than ordered, you can manually adjust the SO's weight/quantity field to match, and the SO amends correctly — this is a deliberate human action, not automatic.
- [ ] After the manual adjustment, DO + Invoice reflect the new weight and recalculated amount.
- [ ] Nothing is pushed to SQL before confirmation at any stage.

##### It should stop and ask you if

- the item or customer name is ambiguous;
- the confirmed weight is missing or looks invalid (e.g. negative, non-numeric).

##### If something breaks mid-way

MAIA states what it couldn't confirm rather than guessing, and never generates documents at the wrong weight.

##### Sabotage bonus (+15 XP)

- Use a customer name that's slightly misspelled from the SQL record.
- Try to generate the DO/Invoice **before** the weight is confirmed.
- Upload a blurry/skewed pick-list scan (see `03_Pick_List_Samples/`) and see if MAIA reads a wrong quantity off it, or correctly flags it as unreadable.

##### Poke it

- Does the price shown match what's actually in SQL for that customer?
- What if the confirmed weight comes back **higher** than ordered, not lower?

##### Loot to capture

- The SO/DO/Invoice numbers.
- Screenshot showing the SQL-sourced fields and the final billed weight.

---

#### Mission M-03 — Nothing Moves Until You Say So · ★★ · 20 XP · ~10 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** UP-13, UP-15, UP-19 (partial — see BF-01 for the full outage scenario) · SL-01, AS-01
**Mission type:** Edge

##### The situation

You've created a draft SO. Nothing should have touched SQL yet. You're also curious whether MAIA would ever let you edit a customer's master record directly instead of routing the change through SQL.

> **Why this matters:** Silently pushing an unconfirmed record to SQL, or silently treating MAIA as the master of customer data, are both direct violations of the account's golden rules.

**Precondition:** A draft SO exists, unconfirmed.

##### Input recipe

**Input type:** existing draft record

**Choose or prepare:**
- Any draft SO you created in a prior mission, or a fresh one.

**Your chosen data must satisfy:**
- The SO must be genuinely unconfirmed/undelivered at the point you check.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** any Sales/Admin.

- **Always:** check SQL state before confirming anything.
- **Never:** expect an unconfirmed draft to appear in SQL; expect an edit to a customer's master record (name/credit) to overwrite SQL.
- **Before submitting:** nothing — this mission is about the state *before* confirmation.
- **Escalate when:** n/a.

##### Your goal

Confirm that nothing is pushed to SQL until the SO is explicitly confirmed, and that MAIA never overwrites SQL as master when you try to edit a customer record directly.

##### Say it your way

- "check if this order already went into SQL"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Nothing is pushed to SQL until the SO is confirmed at final weight.
- [ ] Attempting to edit a customer's master record does not overwrite SQL as master — edits route to SQL or are not treated as source of truth.

##### It should stop and ask you if

- n/a — the refusal/blocked state itself is the expected behaviour.

##### If something breaks mid-way

If anything appears in SQL early, or a direct edit silently overwrites SQL, that's a **P1**.

##### Sabotage bonus (+10 XP)

- Leave the draft sitting for an unusually long time before confirming, then check again.

##### Poke it

- Is there a visible "pending" state that reassures you nothing's live yet?

##### Loot to capture

- Screenshot showing SQL unaffected pre-confirm, and the behaviour when attempting a direct master-data edit.

---

#### Mission M-04 — Match It or Ask · ★★ · 20 XP · ~12 min

**Persona:** Grace, Finance Manager
**Covers:** HP-04 · UP-04, UP-18 · SL-02
**Mission type:** Core + Edge

> **🚧 NOT YET SHIPPED — DO NOT TEST THIS ROUND.** SL-02 (AR reconciliation) is LOCKED scope — the design commitment stands — but the actual feature ships **next sprint**, not this build. Leave this mission card as reference for that sprint's UAT; don't run it now.

##### The situation

A payment just came in. Sometimes it clearly matches an outstanding invoice; sometimes the payer's name doesn't match the customer at all, or the amount only covers part of what's owed.

> **Why this matters:** Auto-matching the wrong customer, or posting an ambiguous match without confirmation, both directly threaten the client's cash-reconciliation trust.

**Precondition:** An outstanding invoice exists for a real customer.

##### Input recipe

**Input type:** payment slip / bank statement line (use samples in `04_Payment_Slips/` or describe your own)

**Choose or prepare:**
- A clean matching case: real invoice, matching amount and reference.
- A mismatch case: payer name doesn't match the invoiced customer.
- A partial-payment case: amount is less than the outstanding balance.

**Your chosen data must satisfy:**
- The invoice must genuinely be outstanding.
- The mismatch/partial variants must be genuinely ambiguous, not trivially resolvable.

**Fixed reference:** NONE (sample payment slips available in the shared library)

##### Roles and business rules

**Roles and approvals:** Finance/Grace only.

- **Always:** verify a mismatched payer before matching.
- **Never:** let an ambiguous match post without confirmation.
- **Before submitting:** confirm the match is genuinely correct.
- **Escalate when:** the match is ambiguous or the payer can't be resolved.

##### Your goal

Get MAIA's suggested match, confirm it, and see the invoice knock off correctly — and confirm a mismatched payer or partial payment is never silently auto-matched.

##### Say it your way

- "payment RM2000 came in from XS BBQ ENTERPRISE, check against invoice"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] MAIA suggests the correct invoice match automatically for the clean case.
- [ ] Nothing updates until confirmed.
- [ ] A mismatched payer name is flagged, not auto-mapped.
- [ ] A partial payment is allocated only after confirm, showing the correct remaining balance.

##### It should stop and ask you if

- the match is ambiguous;
- the payer name doesn't match the invoiced customer.

##### If something breaks mid-way

It flags the uncertainty rather than posting a guess.

##### Sabotage bonus (+10 XP)

- Upload a slip with no clear reference at all and see what it does.

##### Poke it

- Does it show you *why* it thinks this is the match?
- Does the remaining-balance figure update everywhere it's shown, consistently?

##### Loot to capture

- The matched invoice number, screenshot of the confirm step, and the remaining-balance screen for the partial case.

---

#### Mission M-05 — Price Control · ★ · 10 XP · ~10 min

**Persona:** David, Owner/Price Controller
**Covers:** HP-05, HP-05b, HP-06 · SL-03
**Mission type:** Core

> **⚠️ Active testing in progress.** Bulk price update just finished build this week and is being tested today (2026-07-15), targeting closure before tomorrow's client training. Run this mission with extra scrutiny — if you hit a failure, report it immediately; this is the last chance to catch it before the client sees it.

##### The situation

Prices moved on a batch of SKUs. Right now this lives in a WhatsApp image you made with ChatGPT — you want it to actually live somewhere enforced. Sometimes it's a bulk template upload; other times you just want to bump one item's price ad-hoc from the desktop.

**Precondition:** A valid price-update template is available; desktop app access is confirmed.

##### Input recipe

**Input type:** price update template (Excel) + desktop-app direct edit

**Choose or prepare:**
- Real SKUs from the item export with new prices, e.g. CHICKEN SBB TH RM14.00→RM15.50/kg (bulk template).
- A separate single-item ad-hoc adjustment, e.g. CHICKEN BONELESS LEG RM10.70→RM12.00/kg (desktop).
- A customer with a configured customer-specific fixed price for the third check.

**Your chosen data must satisfy:**
- SKUs must exist and be active.
- The customer-specific price case must have an actual configured fixed price to verify auto-application.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** David (price controller) only for desktop ad-hoc adjustments; David/admin for template upload.

- **Always:** verify a new SO for a changed item picks up the latest price.
- **Never:** let an old price linger in a new SO after an update.
- **Before submitting:** confirm the template's row count and changes look right.
- **Escalate when:** n/a.

##### Your goal

Upload the price template and confirm a new SO picks up the updated price; separately, adjust a single item's price directly on the desktop and confirm that takes effect too; confirm a customer-specific fixed price auto-applies without manual entry.

##### Say it your way

- "updated prices, upload now"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Template upload changes prices in MAIA.
- [ ] A new SO for a changed item uses the new price, not the old one.
- [ ] The desktop ad-hoc adjustment (as price controller) also updates the item's price immediately.
- [ ] A customer-specific fixed price auto-applies on a new SO without manual entry.

##### It should stop and ask you if

- the template has errors (see M-06 for that path).

##### If something breaks mid-way

It tells you which rows succeeded/failed.

##### Sabotage bonus (+10 XP)

- Include one SKU that doesn't exist in SQL yet.

##### Poke it

- Does the old price linger anywhere — quotes, drafts — after the update?
- Does the desktop ad-hoc adjustment override a price just set by template upload?

##### Loot to capture

- The updated price on the new SO, screenshot of the upload result, and the desktop adjustment screenshot.

---

#### Mission M-06 — The Broken Template · ★★ · 20 XP · ~12 min

**Persona:** David, Owner
**Covers:** UP-07, UP-20, UP-21, UP-22 · SL-03
**Mission type:** Edge

> **⚠️ Active testing in progress.** Same feature as M-05 — being tested today (2026-07-15), targeting closure before tomorrow's client training. High-value mission right now: this is exactly where a bad-data bug would surface.

##### The situation

This price template has real problems: a missing SKU column, an invalid SKU, wrong UOM, a negative price, or the same SKU twice at two different prices. You also want to check that a below-floor price entry, and an ungrouped customer, both get caught.

> **Why this matters:** Corrupting existing valid prices with bad upload data is a direct threat to David's core fear — money silently going wrong.

**Precondition:** A price template with deliberate errors is available.

##### Input recipe

**Input type:** broken price update template

**Choose or prepare:**
- Build or use a template with: missing SKU column, invalid SKU, wrong UOM, negative price, and a duplicate SKU at two prices.
- A real item with a configured price floor, and an attempt to sell below it.
- A customer with no assigned wholesale/retail price group.

**Your chosen data must satisfy:**
- The broken rows must be genuinely invalid, not just unusual.
- The floor-price item must have an actual configured minimum.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** David/admin for template upload; Sales rep for the below-floor attempt.

- **Always:** verify existing valid prices survive a bad upload untouched.
- **Never:** let a bad row silently corrupt good data; let a below-floor price go through.
- **Before submitting:** review validation errors before accepting a template.
- **Escalate when:** the customer has no price group.

##### Your goal

Confirm MAIA rejects invalid rows with row-level errors without touching existing valid prices, flags the duplicate-SKU conflict, blocks below-floor pricing, and flags a missing price group rather than guessing.

##### Say it your way

- "upload this price file, some rows might be wrong"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] Invalid rows/file are rejected with row-level errors; existing prices are not overwritten by bad data.
- [ ] Duplicate/conflicting SKU rows are flagged, requiring correction before acceptance.
- [ ] A below-floor price entry is blocked or clearly flagged.
- [ ] An ungrouped customer's pricing attempt is flagged, requiring assignment or an authorised decision.

##### It should stop and ask you if

- the template has row-level errors;
- the customer has no price group;
- a price is below the configured floor.

##### If something breaks mid-way

If valid existing prices get corrupted, that's a **P2**. If it silently picks one of the duplicate prices instead of flagging, that's also a **P2**.

##### Sabotage bonus (+10 XP)

- Mix a few valid rows in among the bad ones and see whether valid rows still get applied.
- Make the two duplicate prices only a few cents apart.

##### Poke it

- Do the valid rows in a mixed file get applied, or does one bad row kill the whole upload?
- Can you get around the floor block by editing the SO after creation?

##### Loot to capture

- Screenshot of the row-level errors, the duplicate-conflict flag, the floor-price block, and the missing-group flag.

---

#### Mission M-07 — Under the Limit, Over the Limit · ★★ · 20 XP · ~12 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** HP-07 · UP-05, UP-06 · SL-04
**Mission type:** Core + Edge

##### The situation

One customer is comfortably within their credit limit — that should be unremarkable. Another pushes well past their limit, and you're tempted to just approve it yourself and move on.

> **Why this matters:** Letting an over-limit order through unchecked, or letting anyone but David approve it, is a direct P1/P2 risk.

**Precondition:** One customer within credit limit; one customer with a configured credit limit low enough to breach with a normal order.

##### Input recipe

**Input type:** SO creation attempts

**Choose or prepare:**
- A customer comfortably within their credit limit.
- A customer whose credit limit you can realistically breach with a normal-size order.

**Your chosen data must satisfy:**
- Both customers must have a real configured credit limit.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Sales rep creates; David is the only valid approver for an override.

- **Always:** check credit status before submitting.
- **Never:** self-approve an over-limit order as a rep.
- **Before submitting:** verify the customer's remaining credit.
- **Escalate when:** the order breaches the limit.

##### Your goal

Submit the within-limit order and confirm it goes through with zero friction; then submit the over-limit order and confirm it's blocked, routed to David, and cannot be self-approved.

##### Say it your way

- "order for RESTORAN APOLO - MIXED RICE, well within limit"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] The within-limit SO submits normally, no block.
- [ ] The over-limit SO is blocked, not just warned.
- [ ] David is notified as approver.
- [ ] Self-approval by the rep is refused; the override is recorded once David approves.

##### It should stop and ask you if

- the order breaches the credit limit or unpaid "one invoice" rule.

##### If something breaks mid-way

n/a for the within-limit case (a block here would itself be a bug). For the over-limit case, any successful self-approval is a **P1**.

##### Sabotage bonus (+10 XP)

- Submit the within-limit order right at the exact boundary.
- Try resubmitting the same over-limit order twice.

##### Poke it

- Does it show remaining credit anywhere?
- What does the block message actually say to you as the rep?

##### Loot to capture

- SO number for the clean case; screenshot of the block + David notification for the over-limit case.

---

#### Mission M-08 — My Customers Only · ★ · 10 XP · ~6 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** HP-08 · UP-10 · SL-05
**Mission type:** Core

##### The situation

You manage your own book of customers. You shouldn't need to see, or be shown, anyone else's — including if you deliberately try.

**Precondition:** At least two sales reps' customer sets exist and are distinguishable.

##### Input recipe

**Input type:** existing customer records

**Choose or prepare:**
- Log in as one rep; identify a customer known to belong to a different rep.

**Your chosen data must satisfy:**
- The "other rep's customer" must be genuinely assigned to someone else.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** any sales rep, tested both ways (own vs another's).

- **Always:** expect to see only my own customers.
- **Never:** expect to see another rep's customer data, even via a partial/fuzzy search.
- **Before submitting:** n/a.
- **Escalate when:** n/a.

##### Your goal

Confirm you only see your own customers, and confirm you're denied access to another rep's customer.

##### Say it your way

- n/a — this is a lookup/search mission, not a message-based one.

##### Win conditions

- [ ] Only your own customers appear when you list/search.
- [ ] Access to another rep's customer is denied — no data leaks through.

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

n/a — any leaked data here is a **P2**.

##### Sabotage bonus (+10 XP)

- Search using a customer name you know belongs to another rep, including a partial/fuzzy version.

##### Poke it

- Does a fuzzy/partial name search leak another rep's customer into results?

##### Loot to capture

- Screenshot of your own customer list and the denied-access attempt.

---

#### Mission M-09 — Three Documents, One Order · ★ · 10 XP · ~10 min

**Persona:** Ben / Queenie / Grace
**Covers:** HP-09 · UP-08, UP-09 · SL-07
**Mission type:** Core + Edge

##### The situation

An order is confirmed. You need SO, DO, and Invoice — and you want to check each one before it goes anywhere. You also want to confirm MAIA won't let you double-invoice the same order, or invoice more than the DO actually shipped.

**Precondition:** A confirmed order exists, with a known DO quantity.

##### Input recipe

**Input type:** confirmed SO

**Choose or prepare:**
- Any confirmed order from a prior mission, or a fresh one.

**Your chosen data must satisfy:**
- The SO must be genuinely confirmed with a known final quantity.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Sales/Admin.

- **Always:** review each document before it's sent anywhere.
- **Never:** generate a second invoice on an already-submitted SO; invoice more than the DO quantity.
- **Before submitting:** confirm all three documents agree on quantity/price.
- **Escalate when:** n/a.

##### Your goal

Generate all three PDFs and confirm they're reviewable and consistent; then try to create a duplicate invoice and an over-DO-quantity invoice, and confirm both are blocked.

##### Say it your way

- "generate the documents for this order"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] All three PDFs render with correct header, customer, line items, totals.
- [ ] You can review before anything is sent.
- [ ] A second invoice attempt on the same SO is blocked.
- [ ] Invoicing more than the DO quantity is prevented.

##### It should stop and ask you if

- any required field is missing.

##### If something breaks mid-way

It tells you which document failed to generate and why.

##### Sabotage bonus (+10 XP)

- Try to send before reviewing.
- Try creating the duplicate invoice from a slightly different screen/path.

##### Poke it

- Do the three documents agree with each other on quantity and price?
- Does the duplicate-block error tell you the existing invoice number?

##### Loot to capture

- The three PDFs/screenshots, and the blocked-duplicate/over-quantity screenshots.

---

#### Mission M-10 — The Word "Invoice" Matters · ★ · 10 XP · ~8 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** HP-10 · UP-27 · NS-04
**Mission type:** Core + Edge

##### The situation

A customer's financier won't accept a Sales Order for a deposit — they need a document with the word "invoice" on it. You also want to check what happens if the customer's billing detail is missing.

**Precondition:** A confirmed SO exists; a separate customer with no billing address on file.

##### Input recipe

**Input type:** confirmed SO

**Choose or prepare:**
- One customer with complete billing detail.
- One customer missing billing detail.

**Your chosen data must satisfy:**
- The second customer must genuinely lack billing address data.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Sales rep.

- **Always:** verify billing detail is present before generating a Pro Forma Invoice.
- **Never:** generate a blank/invalid proforma.
- **Before submitting:** n/a.
- **Escalate when:** billing detail is missing.

##### Your goal

Generate a Pro Forma Invoice from the confirmed SO and confirm it's explicitly titled that; then attempt the same for a customer with no billing detail and confirm MAIA flags the gap instead of producing a broken document.

##### Say it your way

- "need a pro forma for the deposit"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] A document titled "Pro Forma Invoice" is produced with correct order detail.
- [ ] The missing-billing-detail case is flagged, not silently generated as a blank document.

##### It should stop and ask you if

- billing detail is missing.

##### If something breaks mid-way

It names what's missing rather than producing a blank doc.

##### Sabotage bonus (+10 XP)

- Request it for a 100% deposit case, not the usual 30%.

##### Poke it

- Does the pro forma reconcile against the real invoice later?

##### Loot to capture

- The Pro Forma Invoice PDF, and the missing-billing-detail flag screenshot.

---

#### Mission M-11 — Reverse It, Return It · ★★ · 20 XP · ~14 min

**Persona:** Grace, Finance Manager
**Covers:** HP-11, HP-11b · UP-25, UP-26, UP-33 · SL-07, SL-04
**Mission type:** Core + Edge

> **🚧 WIP — DO NOT TEST THIS ROUND.** Per the 14 Jul Training Plan post-mortem: there's a known SQL/MAIA mismatch on Credit Notes right now. The client has been told plainly — everything else should work except CN — and to keep doing CN the way they currently do in SQL until the backend fix ships and reverses back into MAIA. Running this mission now will either produce a known-broken result (wasting your time) or a false confidence read. **Leave this mission card as reference for once the fix ships; do not run it this round.**

##### The situation

An invoice needs correcting. Sometimes it's a real return — goods coming back, stock needs to reflect that. Sometimes it's just a billing fix — nothing physically comes back. MAIA treats these as two different doctypes, and you need to pick the right one — and confirm a regular sales rep can't do either without proper rights.

**Precondition:** A submitted invoice exists; a correction reason is agreed.

##### Input recipe

**Input type:** existing submitted invoice

**Choose or prepare:**
- One invoice for a goods-return case (SCN).
- One invoice for a pricing-only correction, no goods returned (CCN).

**Your chosen data must satisfy:**
- Both invoices must be genuinely submitted, not draft.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Finance/Grace for CN issuance; a Sales rep must be refused.

- **Always:** reference the original invoice + a stated reason.
- **Never:** let a sales rep independently issue a CN; leave reason/reference blank and submit.
- **Before submitting:** confirm whether stock needs to move (SCN) or not (CCN).
- **Escalate when:** the CN type is unclear.

##### Your goal

Raise an SCN for the goods-return case and confirm it reverses billing AND returns stock; raise a CCN for the pricing-only case and confirm billing is knocked off with no stock movement; confirm a sales rep is refused when attempting either; confirm a blank submission is refused.

##### Say it your way

- "need to CN this invoice, weight correction, goods coming back"
- "CN this invoice, pricing only, nothing returned"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] SCN case: references the original invoice + reason; billing reversed; stock returned; PDF viewable.
- [ ] CCN case: references the original invoice + reason; billing knocked off; no stock movement recorded.
- [ ] A sales rep attempting either is blocked or routed to approval.
- [ ] A CN submitted with no reference/reason is refused.

##### It should stop and ask you if

- reason or original invoice reference is missing.

##### If something breaks mid-way

It explains what part of the reversal failed. If a sales rep succeeds in issuing one solo, that's a **P2**.

##### Sabotage bonus (+15 XP)

- Try to CN an invoice that's already been fully credited once.
- Fill in only the reason, leave the invoice reference blank, and vice versa.

##### Poke it

- Does the CN number relate to the invoice number in any visible way? (Numbering rule is still open — note as Observation, not a bug.)
- Does it clearly distinguish SCN from CCN, or is the difference easy to miss?

##### Loot to capture

- The SCN number + stock-return screenshot; the CCN number + no-stock-movement screenshot; the refusal screenshots.

---

#### Mission M-12 — Not Your Rights · ★★ · 20 XP · ~8 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** UP-01, UP-02, UP-16, UP-24 · SL-01, SL-03
**Mission type:** Edge

##### The situation

You want to check MAIA's honesty under pressure: an item name it can't confidently resolve, an order missing a quantity, and a price/stock query for an item with no current data.

**Precondition:** Real customer/item data is loaded, including at least one item with stale/missing price data.

##### Input recipe

**Input type:** text message + query

**Choose or prepare:**
- An ambiguous item name (Chinese vs English, or informal phrasing).
- An order with customer + item but no quantity.
- A query for an item with no current price/stock data.

**Your chosen data must satisfy:**
- The ambiguity must be genuine, not a common typo MAIA would trivially resolve.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** any Sales/Admin.

- **Always:** expect MAIA to ask rather than guess on anything genuinely unclear.
- **Never:** accept a fabricated price or stock figure.
- **Before submitting:** n/a.
- **Escalate when:** ambiguity or missing data is detected.

##### Your goal

Confirm MAIA asks for clarification on the ambiguous item and the missing quantity, and confirm it names a data gap rather than inventing a price/stock figure.

##### Say it your way

- "AGF wants pork belly skin-on, deliver PJ" (no qty)

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] The ambiguous item name resolves correctly or is surfaced for manual selection.
- [ ] The missing quantity triggers a clarification request; the draft stays incomplete until supplied.
- [ ] The stale/missing-data query states the data is unavailable and does **not** invent a figure.

##### It should stop and ask you if

- an item can't be confidently matched;
- quantity is missing.

##### If something breaks mid-way

If it invents a number for the missing-data case, that's a **P1**.

##### Sabotage bonus (+10 XP)

- Supply a quantity with no unit ("want 5").

##### Poke it

- Does it guess a "usual" quantity for a repeat customer instead of asking?
- Does it tell you *when* the data was last updated?

##### Loot to capture

- Screenshots of each clarification prompt and the "data unavailable" response.

---

#### Mission M-13 — Right Agent, Right Customer · ★ · 10 XP · ~8 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** HP-12 · UP-28 · SL-08
**Mission type:** Core + Edge

##### The situation

Every customer in SQL has an assigned sales agent. You want to confirm that mapping shows up correctly in MAIA — and that CK's 3 driver-managed customers stay out of the normal sales pipeline.

**Precondition:** The SQL customer→agent export is loaded (CJ Tan / Ben / Queenie / CK / David-default visible per customer).

##### Input recipe

**Input type:** existing customer records

**Choose or prepare:**
- A customer known to be under CJ Tan's (or another named rep's) agent code.
- One of CK's 3 driver-managed customers.

**Your chosen data must satisfy:**
- The agent assignment must be visible and verifiable against the loaded export.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** any Sales/Admin.

- **Always:** expect the agent field to match SQL exactly.
- **Never:** expect CK's customers to surface in the normal sales pipeline.
- **Before submitting:** n/a.
- **Escalate when:** n/a.

##### Your goal

Confirm the customer's agent shows correctly and that they appear only in that rep's own list; then confirm one of CK's customers is excluded from the normal sales workflows.

##### Say it your way

- n/a — this is a lookup mission.

##### Win conditions

- [ ] MAIA shows the correct responsible agent for a normal customer.
- [ ] That customer appears in the correct rep's own customer list (ties to SL-05).
- [ ] CK's customers don't surface as belonging to any active rep's pipeline.

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

A wrong agent shown is a **P2**; CK's customers leaking into the normal pipeline is a **P3** worth flagging for scoping.

##### Sabotage bonus (+10 XP)

- Look up a customer with no assigned agent and confirm it correctly defaults to David.

##### Poke it

- Does the agent field match exactly what's in SQL's "Maintain Customer" screen?

##### Loot to capture

- Screenshot of the agent field for both cases.

---

#### Mission M-14 — Look, Don't Book · ★ · 10 XP · ~8 min

**Persona:** Ben / Queenie, playing the field/outdoor sales role
**Covers:** HP-13 · UP-29 · AS-04, AS-04b
**Mission type:** Core + Edge

##### The situation

You're out in the field. You want to check a customer's outstanding balance and an item's price — but you should **not** be able to create an order directly from here; that goes through the office via WhatsApp relay to Grace.

**Precondition:** A real customer and item exist.

##### Input recipe

**Input type:** query message

**Choose or prepare:**
- Any real customer/item pair.

**Your chosen data must satisfy:**
- n/a beyond normal existence.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** field sales — query only, no order creation.

- **Always:** relay orders via WhatsApp to the office, never create directly from the field.
- **Never:** expect order creation to succeed from the outdoor/query context.
- **Before submitting:** n/a.
- **Escalate when:** n/a.

##### Your goal

Query price/outstanding/customer info successfully, then try to create an order directly and confirm it's refused.

##### Say it your way

- "what's the outstanding for this customer, and current price for this item"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] MAIA returns the requested info, read-only.
- [ ] Attempting order creation from this context is refused.

##### It should stop and ask you if

- n/a — the refusal is the win.

##### If something breaks mid-way

If order creation succeeds directly from the field context, that's a **P2** — it contradicts the confirmed real workflow.

##### Sabotage bonus (+10 XP)

- Try phrasing the order attempt like a normal query ("book 5 boxes for customer X").

##### Poke it

- Does it tell you to relay via WhatsApp to admin, or just refuse silently?

##### Loot to capture

- Screenshot of the successful query and the refused order attempt.

---

#### Mission M-15 — Last Price, Not Last Ten · ★ · 10 XP · ~8 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** HP-14 · UP-30 · NS-08
**Mission type:** Core + Edge

##### The situation

You're quoting a regular customer and want to check what they were last charged for an item before entering a price.

**Precondition:** An item/customer pair with ≥1 prior invoice; a separate pair with none.

##### Input recipe

**Input type:** SO creation, price field

**Choose or prepare:**
- An item/customer pair with prior invoice history.
- A different item/customer pair with no history.

**Your chosen data must satisfy:**
- The "has history" case must have a genuine prior invoice; the "no history" case must genuinely have none.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** any Sales/Admin.

- **Always:** check the last invoiced price before quoting a regular customer.
- **Never:** expect or invent a price for an item with no prior history.
- **Before submitting:** n/a.
- **Escalate when:** n/a.

##### Your goal

Confirm the last invoiced price shows inline for the item with history, and confirm no price is fabricated for the item without history.

##### Say it your way

- n/a — this is a lookup mission during order entry.

##### Win conditions

- [ ] The last invoiced price shows inline for the item with history.
- [ ] For the item without history, no price is shown/fabricated — it's explicitly stated as unavailable.

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

If a price is shown for an item with zero prior history, that's a **P1** — a "don't invent data" boundary.

##### Sabotage bonus (+10 XP)

- Check the same item for two different customers and confirm the price differs correctly per customer.

##### Poke it

- Does it show a transaction date or just the price? (It should just be the price — a date/multi-item view is explicitly out of scope, don't log its absence as a bug.)

##### Loot to capture

- Screenshot of both cases (with and without history).

---

#### Mission M-16 — Everyone Who Should Know · ★ · 10 XP · ~10 min

**Persona:** CJ Tan (Sales Manager) + Grace — ⚠️ **needs two people**
**Covers:** HP-15 · UP-31 · NS-06
**Mission type:** Core + Edge

##### The situation

An invoice has gone overdue. Multiple people are supposed to be notified — but a Sales Manager should only see his own two reps' overdue accounts, not everyone's.

> **Coordinate before you start:** one of you plays the Sales Manager (see Section 5), the other checks what Finance/David receive. You cannot verify the routing rule solo.

**Precondition:** An invoice overdue for a customer under Ben (or Queenie); a second overdue invoice under a rep outside the Sales Manager's team.

##### Input recipe

**Input type:** overdue invoice condition (create or simulate)

**Choose or prepare:**
- An invoice overdue under Ben's or Queenie's customer.
- A second overdue invoice under a different rep, to prove the scoping boundary.

**Your chosen data must satisfy:**
- Both invoices must be genuinely past due.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** Finance, the responsible rep, the Sales Manager, David — all should be notified for the first invoice.

- **Always:** check that the Sales Manager's view is scoped to his own team.
- **Never:** let the Sales Manager see accounts outside his 2 reps.
- **Before submitting:** n/a.
- **Escalate when:** n/a.

##### Your goal

Confirm Finance, the responsible rep, the Sales Manager, and David all receive the overdue alert for Ben's/Queenie's customer — and confirm the Sales Manager's view stays scoped to just his own team when a second overdue invoice exists under a different rep.

##### Say it your way

- n/a — this mission is verification, not messaging.

##### Win conditions

- [ ] Finance, the responsible rep, the Sales Manager, and David all receive the alert.
- [ ] The Sales Manager's overdue view shows only his own 2 reps' accounts, not the other rep's.

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

If the Sales Manager sees accounts outside his scope, that's a **P3** (data-scope leak, not financial impact).

##### Sabotage bonus (+10 XP)

- Let two invoices under different reps go overdue simultaneously and check both alert sets.

##### Poke it

- How quickly after the due date does the alert fire?

##### Loot to capture

- Screenshots of each recipient's notification.

---

#### Mission M-17 — A Note on the File · ★ · 10 XP · ~6 min

**Persona:** Ben / Queenie, Sales Rep
**Covers:** HP-16 · UP-32 · AS-05, SL-05
**Mission type:** Core + Edge

##### The situation

You just had a call with one of your own customers about a delivery delay. You want to log it against their profile for next time — and confirm another rep can't see it.

**Precondition:** A customer profile exists, owned by you.

##### Input recipe

**Input type:** activity note/event/task entry

**Choose or prepare:**
- Any customer you own.

**Your chosen data must satisfy:**
- n/a beyond ownership.

**Fixed reference:** NONE

##### Roles and business rules

**Roles and approvals:** any Sales rep, on their own customer only.

- **Always:** log notes on your own customers.
- **Never:** expect to see, or be seen editing, master-data fields (address/phone/billing) — that's separate, unlocked scope.
- **Before submitting:** n/a.
- **Escalate when:** n/a.

##### Your goal

Add a note to your own customer's activity log, then confirm another rep can't view it on a customer that isn't theirs.

##### Say it your way

- "Called customer 14 Jul re: delivery delay"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] The note saves and is visible on your own customer's activity log.
- [ ] A different rep cannot view this note on a customer they don't own.

##### It should stop and ask you if

- n/a.

##### If something breaks mid-way

If another rep can see your note, that's a **P2** (same boundary as SL-05).

##### Sabotage bonus (+10 XP)

- Try editing a customer's address or phone number in the same screen — this should **not** be confirmed as working (master-field writability is still unlocked). Note what actually happens as an Observation, not a bug either way.

##### Poke it

- Does the note show who logged it and when?

##### Loot to capture

- Screenshot of the saved note and the other rep's denied view.

---

#### Mission M-18 — The Formal Customer · ★ · 10 XP · ~10 min

**Persona:** Grace, Finance Manager
**Covers:** HP-17 · AS-08
**Mission type:** Core (happy path only — see note below)

##### The situation

Most customers just message you an order. But a handful — 3 confirmed accounts — do things properly and issue a real Purchase Order document. You want to get that PO turned into a confirmed order without retyping everything by hand.

> **Why this matters:** This is a genuinely low-volume path — don't over-invest testing time relative to how rarely this happens in real life.
>
> **Scope note:** For Macro Frozen, CPO = plain customer PO document intake only. There is no certificate/tax-reference linkage to test here (that's a different CPO feature built for other clients) — don't test for or expect cert/tax validation.

**Precondition:** ⚠️ **Blocked pending FIX-01** — one of the 3 confirmed PO-issuing customers has sent a real PO document. If no real sample is available yet, mark this mission **Blocked — Test Data/Configuration**.

##### Input recipe

**Input type:** customer Purchase Order document (see `05_Customer_Purchase_Orders/`)

**Choose or prepare:**
- Use the fixed real PO sample once supplied (FIX-01).
- Do not invent a customer as a "PO customer" unless confirmed by David/Grace as one of the actual 3.

**Your chosen data must satisfy:**
- The customer must be one of the genuinely confirmed 3 PO-issuers.

**Fixed reference:** FIX-01 — `sample_po_[customer]_2026-07.pdf` (not yet supplied)

##### Roles and business rules

**Roles and approvals:** Grace (or Sales/Admin) uploads and reviews the match; nothing submits without human confirmation.

- **Always:** review the matched customer and item lines before confirming.
- **Never:** let MAIA invent a customer or item match from an unreadable or ambiguous PO.
- **Before submitting:** confirm the match is accurate.
- **Escalate when:** the customer or an item can't be confidently matched.

##### Your goal

Upload the customer's PO, review the matched customer and item lines, and confirm a CPO (converted Sales Order) gets created.

##### Say it your way

- "PO from customer, please process"

> **Now forget these examples and type it how YOU would.**

##### Win conditions

- [ ] MAIA matches the PO to the correct customer record.
- [ ] MAIA matches the PO's line items to the correct SKUs.
- [ ] You review the match before anything is submitted.
- [ ] A confirmed SO (CPO) is created referencing the matched data.

##### It should stop and ask you if

- the customer or an item can't be confidently matched from the PO.

##### If something breaks mid-way

It tells you what it matched, what it couldn't, and asks how to proceed — it never guesses.

##### Sabotage bonus (+10 XP)

- Use a PO with an item name that doesn't cleanly match any SKU and see if MAIA invents a match instead of asking.

##### Poke it

- Does it show you a diff between what the PO says and what it matched, so you can catch a wrong match before confirming?

##### Loot to capture

- The CPO/SO number, screenshot of the match-review step, input filename used.

---

### Section 9 — Boss Fights

> **[GAP: no previously recorded UAT failures exist for this project — this is a pre-launch Phase-1 UAT, not a regression cycle.]** The Boss Fight below is risk-based, not failure-based: it targets the single highest-stakes, explicitly-flagged live risk in the account (the SQL vendor access blocker), not a bug anyone has actually hit yet.

#### Boss Fight BF-01 — The SQL Blackout · ★★★ · 35 XP · ~15 min

**Persona:** David, Owner
**Covers:** UP-19 · SL-01, SL-07 (risk-based, not a recorded failure)

##### Why this is a Boss Fight

SQL vendor integration access is a live, unresolved go-live blocker for this account. If MAIA ever shows a false "synced!" when the sync actually failed, that's the single worst thing this product could do — David's stated biggest fear is exactly this: something goes quietly wrong with money or stock and nobody notices until a customer complains.

> **Stop:** This Boss Fight needs SQL sync to genuinely *fail* mid-submit — you cannot make that happen by yourself during the test window. Either the dev team simulates the outage (kill the sync connection, point at a dead endpoint, or trigger a dev flag) before your session, or this Boss Fight cannot run and should be scheduled separately. Do not skip it silently — flag it out loud if it can't be arranged.

##### Win conditions

- [ ] MAIA shows "sync failure / pending retry" when the outage is simulated.
- [ ] MAIA does **not** show the record as successfully updated in SQL when it isn't.
- [ ] Retrying the same action while sync is down does not duplicate the record.
- [ ] Once SQL comes back, the retry correctly completes.

##### Extra chaos

- Try the same action twice while sync is down — does it queue correctly or duplicate?

##### Loot to capture

- Screenshots of both the outage state and the recovery.
- If MAIA shows false success at any point, treat it as a **P1** and report immediately with full evidence — this is the account's single biggest named risk.

---

### Section 10 — Side Quests and Chaos Cards

**Side Quests** (open prompts — no win-condition checklist, just go explore):

- *As David:* What would irritate you most about a system that's supposed to remove you as the bottleneck, but keeps asking you to approve things? Go find where that line actually is.
- *As Ben/Queenie:* A regular customer messages you something completely off-script — not an order, just a complaint or a random question. What does MAIA do with it?
- *As Grace:* Try reconciling a payment that arrives with zero reference information at all. How far does MAIA get before it needs you?
- *As Lai:* Try confirming a pick where you genuinely picked MORE than what was ordered, not less. Does anything treat that differently from underpicking?
- *As the Sales Manager:* Go looking for a reason to complain that you're being shown someone else's problem. Can you see any account that isn't Ben's or Queenie's?

**🔥 The Adoption Side Quest — the most valuable thing you can do today**

> Grace, the person who will actually use this every day, has told us plainly that routing her existing manual work *through* MAIA isn't obviously a win. She'd still upload each slip. She'd still pick which invoice to knock off. Lai may just keep using his own paper pick list. **Two of the three people this product depends on are not yet convinced.**

Whichever persona you're playing, once per session ask yourself honestly:

**"If this were my actual job — would I use this tomorrow, or would I quietly go back to the old way?"**

Write down the exact moment that made you think that — not "the UI is clunky," but the specific step where it felt faster to just do it yourself. Log it as an **Observation**, tagged `ADOPTION`.

**Chaos Card Deck** (play any card on any mission for bonus XP as noted on the mission, or +10 generic if unspecified):

1. **Typo'd or ambiguous item name** — reuse a garbled name from a different mission on a new order.
2. **Two requests in one message** — "same as last week for xing rui but double the chicken leg, and also update their delivery address."
3. **Change your mind right after confirming** — confirm an SO, then immediately try to cancel/modify it.
4. **An unreadable pick-list upload** — upload a blurry, skewed, or partially-cut scan of the annotated pick list. Does MAIA read a wrong quantity off it, or say it can't read it?
5. **"Same as last time" with no other detail** — give MAIA nothing else to go on and see if it fabricates specifics.
6. **Interrupting mid-flow** — start a price upload, then immediately ask an unrelated question before it finishes.
7. **Mixed-language message** — order in a mix of English, Mandarin, and Malay in one message (normal here, not an edge case).
8. **A voice-note-style rambling message** — long, meandering, buries the actual ask in the middle.
9. **Wrong customer, right item** — deliberately reference the wrong customer name and see if it's caught.
10. **A number that's technically valid but absurd** — order 10,000kg of one SKU and see what happens (a sanity check, not a system-limit test).
11. **Retry storm** — submit the same action three times in quick succession.
12. **The disappearing confirm** — start confirming a weight update, then go silent for a while before finishing it.
13. **Two units, one order** — items are priced by KG, but the team talks in boxes/pieces too ("3 boxes chicken chop"). Order in a unit the system doesn't price in and see whether it converts, asks, or silently guesses.

---

### Section 11 — Field Manual

**How to log a result:** mission code · persona · what you typed (verbatim) · what happened · what you expected · severity (P1–P4, or `OBSERVATION`) · evidence link · chaos cards played.

**Three things you can log — know the difference:**
- **Bug** — MAIA did something it shouldn't, or failed to do something it should. Has a severity (P1–P4).
- **Observation** — not a bug, but it confused you *as the persona*. Out-of-bounds gaps go here. No severity.
- **`ADOPTION` Observation** — the moment you'd have given up and done it the old way. See the Adoption Side Quest, Section 10. **These are the highest-value thing in this run.**

**Test Data Selection Guide:** default to selecting your own real, active customer/item data from the loaded export unless a mission names a **Fixed reference**. If you cannot find data matching a mission's criteria, log it as **Blocked — Test Data/Configuration**, not a product failure.

**Reusable input library rules:** use the shared library only where a mission calls for it (see `00_START_HERE_INPUT_LIBRARY.md`). Do not create bespoke files per mission.

**Fixed-fixture rules:** never rename or alter a fixed fixture (e.g. FIX-01) — copy before annotating.

**Evidence rules:** screenshots + every document ID created (SO/DO/Invoice/SCN/CCN/CPO number) + timestamps + input filename or chosen data criteria.

**Scoring:**
- Mission XP: ★ = 10, ★★ = 20, ★★★ = 35.
- Bug bounty: P1 = 50, P2 = 30, P3 = 15, P4 = 5. First unique finder gets it.
- Chaos Card played meaningfully: +10. Sabotage bonus: as listed on the card/mission.
- Badges: **First Blood** (first bug of the run) · **Method Actor** (all missions, zero copy-pasted phrasings) · **Chaos Agent** (5+ chaos cards) · **Boss Slayer** (BF-01 survived) · **Cartographer** (3+ useful Observations) · **Truth Teller** (an `ADOPTION` observation that changes what we build) · **Completionist** (100%).

**Help:** `[NEEDS INPUT: who testers ask questions of during the window]` — with only ~70 minutes of real testing time, a tester stuck for 10 minutes has lost 15% of their run. Name a person before the session starts.

**Cleanup:** see Launch Readiness Checklist §9 for naming conventions and reset ownership.

---

### Section 12 — Appendix — Coverage and Readiness Map

#### Source test-case disposition

| Source test case | Disposition | Active mission(s) | Reason |
|-|-|-|-|
| HP-01 | ACTIVE MISSION | M-01 | Locked (SL-06) |
| HP-02 | ACTIVE MISSION | M-02 | Locked (SL-01, SL-07) |
| HP-03 | ACTIVE MISSION | M-02 | Locked (AS-01) — merged into M-02 |
| HP-04 | ADAPTED MISSION (not yet shipped, next sprint) | M-04 | Locked scope (SL-02), but feature ships next sprint, not this build |
| HP-05, HP-05b | ACTIVE MISSION | M-05 | Locked (SL-03) |
| HP-06 | ACTIVE MISSION | M-05 | Locked (SL-03) |
| HP-07 | ACTIVE MISSION | M-07 | Locked (SL-04) |
| HP-08 | ACTIVE MISSION | M-08 | Locked (SL-05) |
| HP-09 | ACTIVE MISSION | M-09 | Locked (SL-07) |
| HP-10 | ACTIVE MISSION | M-10 | Locked (NS-04) |
| HP-11, HP-11b | ADAPTED MISSION (WIP, do not run) | M-11 | Locked in design (SL-07), but known SQL/MAIA mismatch — client using SQL workaround until backend fix ships |
| HP-12 | ACTIVE MISSION | M-13 | Locked (SL-08) |
| HP-13 | ACTIVE MISSION | M-14 | Locked (AS-04/AS-04b) |
| HP-14 | ACTIVE MISSION | M-15 | Resolved/Locked (NS-08) |
| HP-15 | ACTIVE MISSION | M-16 | Resolved/Locked (NS-06) |
| HP-16 | ACTIVE MISSION | M-17 | Partially locked (AS-05, activity log only) |
| HP-17 | ADAPTED MISSION | M-18 | AGREED IN PRINCIPLE, not fully locked — deliberate happy-path-only exception (low-volume, low-risk) |
| UP-01, UP-02 | ACTIVE MISSION | M-02, M-12 | Locked (SL-01) |
| UP-03, UP-17 | ACTIVE MISSION | M-02 | Locked (AS-01) |
| UP-04, UP-18 | ADAPTED MISSION (not yet shipped, next sprint) | M-04 | Same as HP-04 above |
| UP-05, UP-06 | ACTIVE MISSION | M-07 | Locked (SL-04) |
| UP-07, UP-20, UP-21, UP-22 | ACTIVE MISSION | M-06 | Locked (SL-03) |
| UP-08, UP-09 | ACTIVE MISSION | M-09 | Locked (SL-07) |
| UP-10 | ACTIVE MISSION | M-08 | Locked (SL-05) |
| UP-11 | ACTIVE MISSION | M-01 | Locked (SL-06) — implicit in draft-review win condition |
| UP-12 | OUT OF SCOPE | — | OOS boundary (blasting) — not a testable feature; see Section 4 |
| UP-13, UP-15 | ACTIVE MISSION | M-03 | Locked (SL-01, AS-01) |
| UP-14 | OUT OF SCOPE | — | OOS boundary (QR settlement) |
| UP-16, UP-24 | ACTIVE MISSION | M-12 | Locked (SL-01, SL-03) |
| UP-19 | ACTIVE MISSION (risk-based) | BF-01 | Locked (SL-01, SL-07) — no recorded failure, risk-based Boss Fight |
| UP-23 | SUPERSEDED | — | Ungrounded scenario (phone-shared-branches) carried from an earlier merged checklist with no confirmed real instance — removed |
| UP-25, UP-26, UP-33 | ADAPTED MISSION (WIP, do not run) | M-11 | Same CN mismatch as HP-11/HP-11b above |
| UP-27 | ACTIVE MISSION | M-10 | Locked (NS-04) |
| UP-28 | ACTIVE MISSION | M-13 | Locked (SL-08) |
| UP-29 | ACTIVE MISSION | M-14 | Locked (AS-04/AS-04b) |
| UP-30 | ACTIVE MISSION | M-15 | Resolved/Locked (NS-08) |
| UP-31 | ACTIVE MISSION | M-16 | Resolved/Locked (NS-06) |
| UP-32 | ACTIVE MISSION | M-17 | Partially locked (AS-05/SL-05) |

#### Scope coverage

| Scope item | Status | Mission(s) / boundary section |
|-|-|-|
| SL-01…SL-08 | LOCKED | M-02, M-03, M-05, M-06, M-07, M-08, M-09, M-12, M-13 (M-04 excluded this round — ships next sprint; M-11 excluded — CN is WIP) |
| AS-01 | RESOLVED/LOCKED | M-02, M-03 |
| AS-04, AS-04b | LOCKED | M-14 |
| AS-05 (activity log) | Partially LOCKED | M-17 |
| AS-08 | AGREED IN PRINCIPLE (exception) | M-18 |
| NS-04 | RESOLVED | M-10 |
| NS-05 | RESOLVED (feature)/OPEN (mechanism) | Generic route only, via M-07 |
| NS-06 | RESOLVED | M-16 |
| NS-08 | RESOLVED | M-15 |
| AS-02, AS-03, AS-06, AS-07 | AGREED IN PRINCIPLE, NOT LOCKED | Section 4 — Needs Scoping |
| NS-02, NS-03, NS-09, NS-10, NS-11 | NEEDS SCOPING | Section 4 — Needs Scoping |
| NS-07 | **BLOCKED — client conflict** | Section 4 — Out of Bounds (explicit Stop callout) |
| AS-09/NS-13 | AGREED IN PRINCIPLE, mechanism undefined | Section 4 — Needs Scoping |
| OOS items (AP recon, QR settlement, delivery trip, WMS, volume pricing, B2C, blasting) | OUT OF SCOPE | Section 4 — Out of Bounds |

#### Input-requirement traceability

| Input category / fixture | Mission(s) | Readiness status |
|-|-|-|
| Customer order messages | M-01, M-02, M-12 | Ready |
| Price update templates (valid + broken) | M-05, M-06 | Valid ready; broken template open |
| Pick-list samples | M-02 (sabotage) | Open, non-blocking |
| Payment slips | M-04 | Open, blocking (PA-10) |
| Customer PO (FIX-01) | M-18 | **Blocking — not yet supplied** |
| SQL outage simulation | BF-01 | **Blocking — not yet arranged (PA-04)** |

#### Persona-rule traceability

| Persona | Business rule | Source | Mission(s) |
|-|-|-|-|
| David | Only role that can approve a credit override | SL-04 | M-07 |
| David | Price adjustments via desktop, not WhatsApp | SL-03 | M-05 |
| Ben/Queenie (Sales Rep) | Never sees another rep's customers | SL-05 | M-08, M-12, M-17 |
| Ben/Queenie (Sales Rep) | Cannot create orders directly in the field | AS-04/AS-04b | M-14 |
| Grace | Keys in every order relayed by sales | VoC (direct, 2026-07-14) | M-01–M-18 (implicit throughout) |
| Grace | Only Finance issues CN; never a rep unsupervised | SL-07/SL-04 | M-11 (currently WIP, not run this round) |
| CJ (Sales Manager) | Sees only Ben/Queenie's overdue accounts | NS-06 | M-16 |
| Lai | Single point of contact for pick-list upload; no backup exists | AS-01, VoC (NS-10) | M-02 |

#### Beyond Tester Reach handoffs

| Handoff ID | Owner | Field-guide location |
|-|-|-|
| BTR-01 (SQL sync accuracy) | Dev team + SQL vendor | Section 4 |
| BTR-02 (AS-01 real adoption) | David / Lai | Section 4, Section 10 (Adoption Side Quest) |
| BTR-03 (SL-02 real adoption) | Grace | Section 4, Section 10 (Adoption Side Quest) |

---

## See Also
- [[MAIA_UAT_Launch_Readiness_Checklist]]
- [[00_START_HERE_INPUT_LIBRARY]]
- [[Macrofood — VoC Extraction]]
- [[Macrofood — Scope Lock v1 (reconciled)]]
- [[Macrofood — UAT Checklist]]

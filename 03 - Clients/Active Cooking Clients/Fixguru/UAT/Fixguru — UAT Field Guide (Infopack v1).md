---
owner: Gareth
status: draft
last_reviewed: 2026-07-14
client: Fixguru
document_type: internal
version: v1
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/Wp90wCNHtiLD2Hk2oCBlqNC5gPe
---

# MAIA UAT Field Guide — Play It Like a User
### (Fixguru / IAM Worldwide Sdn Bhd)

> Generated via the "UAT Infopack — Generator Prompt (v2.0)" (Lark: `RvJZwbbwtifhkkkCjrolz3U5g1f`), from three source docs per Gareth's instruction: **[[Fixguru — VoC Extraction]]**, **Scope Lock v2** (Lark, https://eg69120xnei.sg.larksuite.com/wiki/AdBgwaw2TiMhFOkChoVlJVKGgng), **[[Fixguru — End-user & Process Map]]**. Mission material (win conditions, unhappy paths) cross-referenced from the already scope-locked **[[UAT/Fixguru — UAT Checklist]]**, generated the same day from the same two source docs — no new facts introduced.
>
> **v2 (14 Jul 2026):** Logistics filled in from confirmed operator input — test window, FE URL, WhatsApp number, reporting channel, time budget. Added the **time math** to the Campaign Overview: the 20 missions total ~187 minutes against a 90-minute window, so the pack now names three explicit routes (squad split / Speedrun / 20-minute minimum) instead of implying all 20 are runnable solo. Added the two-surface briefing (WhatsApp + web app) to *How to Play* — the historical-pricing link-out is itself under test, not a side detail. One `[NEEDS INPUT]` remains: how testers receive login credentials.

---

## PART A — READ BEFORE YOU PLAY (15–20 min)

### 1. Cover / Logistics

| | |
|---|---|
| **Project** | Fixguru (IAM Worldwide Sdn Bhd) |
| **Product** | MAIA (internal WhatsApp order-to-cash assistant, sits on AutoCount) |
| **Client** | Fixguru — Malaysia-based packaging/carton box supplier for e-commerce sellers |
| **Test window** | **Tue, 14 Jul 2026, 10:30am – 12:00pm** |
| **Environment & access** | Web app (FE): https://maia-fe-fixguru.vercel.app/login · MAIA WhatsApp number: **012-491 2154**. Run everything in the sandbox environment only — **never against Fixguru's production AutoCount.** `[NEEDS INPUT: how testers receive their login credentials]` |
| **Where to report** | https://eg69120xnei.sg.larksuite.com/wiki/CsWLwSjOgiO98JkitQ8lGfpPgF2 |
| **Time budget per tester** | 1 hour 30 minutes |
| **Anything else** | You have 90 minutes and 20 missions — you will not finish them all, and that's fine. Run **The Speedrun** (Part B §1) if you're short on time; it still touches every P1 flow. **M-20 is the mission that matters most** — if you only do one thing properly, do that one. |

### 2. How to Play (one page)

- You are a person, not a script. Pick a persona, stay in character.
- Type in your own words — typos, shorthand, your usual mix of English/Malay/Mandarin. Never copy-paste the sample phrasings below.
- When MAIA asks you something, react the way your persona would — busy, brief, sometimes impatient.
- Break things on purpose. Curiosity scores points.
- Out of bounds ≠ bug. Check the map (§4) before you log.
- No loot, no glory: evidence (screenshots + document IDs) or it didn't happen.
- Scoring in one line: XP for missions, bounty for bugs (P1 highest), bonus for Chaos Cards. Full detail in the Field Manual (Part B, §4).

**Two surfaces, one product.** You'll move between **WhatsApp** (012-491 2154 — where a real Fixguru salesperson lives; this is where orders start) and the **web app** (https://maia-fe-fixguru.vercel.app/login — where the historical pricing table opens, and where you verify what the chatbot actually created). Most missions start in WhatsApp. The moment a mission hands you a link, that link is the product too — how fast it opens and how readable it is at a glance **is** the thing being tested, not a side detail.

**Sandbox only.** Everything runs against the sandbox. Never push a test document to Fixguru's production AutoCount.

### 3. The World in Five Minutes

Fixguru is the trading face of IAM Worldwide Sdn Bhd — a Malaysia-based packaging and carton box supplier serving e-commerce sellers and SMEs, running out of a 65,000 sq ft facility with roughly 1,000 SKUs. Some products are ready-stock. Some are custom-made carton boxes priced through a calculator. The business already has a backbone — **AutoCount** — and that backbone already works. AutoCount holds customers, items, pricing history, credit limits, and every accounting document Fixguru's team already trusts.

The problem isn't AutoCount. It's everything that happens around it.

A Fixguru salesperson doesn't work one order at a time — they're handling **4 to 10 active customer orders simultaneously**, with one sales team pushing through roughly **30 invoices a day**. Every order starts as a WhatsApp message, often shorthand, sometimes with the item name mangled beyond recognition. The salesperson doesn't just need to create a document — they need to remember, instantly, what discount this exact customer got last time, at what price, for this exact item. Right now that memory lives in AutoCount, and every second spent digging there is a second MAIA has to beat.

**Success**, in the client's own words, looks like never needing to "owe AutoCount an account" again — the sales team should never have to break flow to go check. **Failure** looks like exactly what's already happened four times: a historical-pricing display that's too slow, too wordy, or missing the number that matters, forcing the salesperson back into AutoCount out of frustration. The client has said directly, across four separate UAT rounds spanning 7 April to 24 June: *"I speak many times the same… I don't know how to tell you."*

His three biggest fears, distilled from the actual UAT transcripts: **(1)** MAIA is slower or more confusing than AutoCount at the one decision that matters most — what discount to give, right now — and the team quietly reverts to AutoCount; **(2)** the system shows the wrong number (item code, discount %, credit exposure) and nobody catches it before it hits an invoice; **(3)** approval and delivery-accounting details that look cosmetic in a demo (item codes, PDF layout, delivery charges) turn out to carry real downstream accounting weight, and get it wrong quietly.

### 4. The Product Map

**What MAIA does this phase:** sits **on top of AutoCount** (AutoCount stays master for customer, product, stock, and accounting records). It runs entirely through an **internal-only WhatsApp chatbot** — Fixguru's sales, logistics, finance, and admin teams use it; customers never see it directly. It drafts Quotations and Sales Orders, surfaces historical pricing before a quote is confirmed, generates Delivery Notes and Invoices, applies FOC (free-of-charge) rules, treats delivery charges as proper line items, and enforces price-floor and credit approvals.

**The document chain:** `WhatsApp order forwarded by Sales → historical pricing check → draft Quotation/Pro-forma → confirmed Sales Order → Delivery Note (one SO can have 2+ DOs) → Invoice → Payment/Credit Note`. Historical pricing is checked **before** the quote is finalized, sourced strictly from **Sales Invoice** history (not Quotation/SO history), shown as a standalone link the sales agent taps to open a quick-glance table — not crammed into the WhatsApp thread as text.

**The golden rules:**
- AutoCount is never overwritten — MAIA references it, never replaces it as master.
- Nothing submits to AutoCount without an explicit human confirm; a draft stays editable until then.
- Delivery charges (Lalamove, 3PL, courier) are SKU/item lines, never just a fulfillment-method label — because the item code determines accounting treatment.
- FOC quantity decrements stock but never inflates billed revenue.
- Below-floor pricing and credit-exceeded orders route to approval, not a silent pass-through.
- "Not found" means not found — the system never fabricates a match or a history row that doesn't exist.

**Glossary**

| Term | Meaning |
|---|---|
| SO | Sales Order |
| DO / DN | Delivery Order / Delivery Note |
| FOC | Free-of-charge quantity — decrements stock, never billed |
| SKU | Item code — Fixguru expects AutoCount's external code, not MAIA's internal ID |
| RSC / Diecut | The two locked custom box calculator types (Pizza, Layer Pad, 5-panel are NOT in scope) |
| Price floor | Minimum sellable price, set per item + UOM (unit of measure) |
| Price book | A pre-approved fixed price for a specific customer that bypasses standard floor approval |
| AIP | "Agreed in Principle" — direction agreed, exact mechanics not fully locked; several AIPs were promoted to LOCKED on 13 Jul 2026 (see §5) |
| NS | "Needs Scoping" — an open question in Scope Lock v2, mostly resolved this week; two remain genuinely open (see §5) |

### 5. In Bounds / Out of Bounds / Needs Scoping

**In bounds — things you can expect MAIA to do:**
- Take a forwarded WhatsApp order and turn it into a draft Quotation/SO using AutoCount customer/item data.
- Surface historical pricing (all past Sales Invoice transactions — item code, item name, date, invoice no., qty, standard price, discount %, net price) as a tap-through link, before the sales agent confirms a price.
- Hold a draft Quotation/SO fully editable — item, qty, delivery method, charge — until explicit submit.
- Generate RSC and Diecut calculator pricing directly into the quotation/SO flow.
- Handle FOC quantity separately from billable quantity — stock deducts both, revenue reflects billable only.
- Capture delivery charges (Lalamove/3PL/etc.) as their own SKU/item line, pulled from AutoCount's own charge master.
- Show item display as code + brand + name, consistently across chatbot and web.
- Enforce a price floor per item **and** UOM, with a price-book bypass for pre-approved customer prices (bypass itself has a floor — going below even the price-book price still needs approval).
- Block credit-risk orders at **Delivery Note creation**, not at Sales Order creation (built, pending your test).
- Search customers by phone/mobile/WhatsApp number.
- Reply in English or Bahasa Malaysia per user preference (built, pending your test); customer-facing PDFs are built to mirror AutoCount's layout (pending your test).

**Out of bounds — if you notice this missing, that's by design, don't log it as a bug** (note it as an *Observation* if it genuinely confused you as the persona):
- Any customer-facing chatbot flow — MAIA is internal-team-only for Fixguru.
- Pizza Box, Layer Pad, or 5-panel calculators — RSC and Diecut only; anything else is a chargeable change request.
- Automated returns/refunds processing.
- Promo codes and seasonal campaign logic.
- WhatsApp reply-context targeting.
- Branch-level contact management the AutoCount way — Fixguru doesn't use branches; contacts sit at a single level, address details only.
- Full sub-warehouse shelf modelling — shelf number shows in the Delivery Note's additional-note field only, not as a structured warehouse hierarchy.

**Needs scoping — don't expect a locked answer here, note anything odd as an Observation, not a bug:**
- Exact SKU list for the "last 5 delivery methods" recommendation and which document type (invoice/SO/DO) it should pull from — still pending tech + client alignment.
- Whether payment-proof-vs-AutoCount-AR-timing lets an approver override a credit block manually — deliberately parked this round, not a gap to chase.
- Full warehouse-structure source of truth beyond the shelf-in-note fix (multi-warehouse display).

### 6. Persona Cards

**Xiao Ling — Sales User**
*(one of Fixguru's confirmed sales-side users, per the internal role roster — most missions run through her)*
- *My day:* Customers WhatsApp me directly, all day. I forward the order into MAIA, and I'm juggling 4 to 10 of these at once — no order gets my undivided attention for long.
- *What I want from this product:* Show me what I gave this customer last time, in one glance, faster than I could pull it up in AutoCount. That's the whole job.
- *What makes me trust it / ditch it:* Trust it the moment it beats AutoCount at that one lookup. Ditch it the moment it makes me read three extra lines to find one number.
- *How I talk:* Fast, item codes and shorthand, minimal punctuation. "SEA LARK, BW 1mx100 SL Clear, last price?" · "3PL DC add"
- *Patience level & quirks:* Very low patience for anything that requires re-reading. Will bail back to AutoCount the instant this feels slower.

**Marcus Lim — Admin / Escalation Authority**
*(full system access per the role permission matrix; the strongest and most persistent voice in the account's escalation history — this is the persona most likely to catch a trust-breaking bug)*
- *My day:* I'm the one who ends up fielding every UAT round personally. I've raised the same historical-pricing gap across four separate sessions now.
- *What I want from this product:* Prove, this time, that the fix actually holds — not another "should be fixed" that isn't.
- *What makes me trust it / ditch it:* Trust it if the historical pricing view is genuinely one-glance, invoice-sourced, no digging. Ditch it — permanently, this account has a real limit — if it's still slow or wrong.
- *How I talk:* Direct, sometimes visibly frustrated. *"I speak many times the same… I don't know how to tell you."*
- *Patience level & quirks:* Patient but visibly eroding — treat every interaction with him as a live trust test, not a routine one.

**Nisa — Finance User**
- *My day:* I handle invoices, payments, and credit notes — I don't have submit rights on my own, so a lot of what I do routes through Finance Manager approval.
- *What I want from this product:* Delivery charges must never look like product revenue on an invoice — that breaks e-invoice claiming downstream.
- *What makes me trust it / ditch it:* Trust it if the PDF and accounting treatment mirror AutoCount exactly. Ditch it if a delivery charge line quietly becomes "product" in the books.
- *How I talk:* Precise, accounting-literal. "this is delivery, not item revenue — check the code"
- *Patience level & quirks:* Will double-check every PDF against what AutoCount would have produced.

**Asrul — Logistics User**
- *My day:* I prepare picking and Delivery Notes once Sales confirms an order.
- *What I want from this product:* Tell me exactly what to pick and where it sits — shelf reference on the DN, not buried somewhere else.
- *What makes me trust it / ditch it:* Trust it if the shelf number is right there on the note. Ditch it if I have to go hunting for it.
- *How I talk:* Short, physical, task-focused. "which shelf, how many box"
- *Patience level & quirks:* No tolerance for missing physical detail (weight, shelf, qty) — this is the floor, not an app screen, to him.

### 7. Trust Killers — Severity Guide

- **P1 — Client walks away:** the historical pricing view is slow, wordy, or wrong one more time (this exact failure mode has already happened four times); MAIA shows a discount as a flat ringgit amount instead of a percentage, silently miscalculating the final price; a delivery-charge SKU line gets miscoded as product revenue on an invoice.
- **P2 — Client gets nervous:** a below-floor price goes through without approval; a credit-exceeded order isn't blocked at Delivery Note stage; FOC quantity inflates billed revenue; item code shown doesn't match AutoCount's external ID.
- **P3 — Annoying but survivable:** brand missing from item display without a clean fallback; historical pricing table pads with blank rows instead of showing what actually exists; ambiguous item lookup needs several rounds of clarification.
- **P4 — Cosmetic:** PDF layout style differs slightly from AutoCount's own template.

---

## PART B — THE MISSIONS

### 1. Campaign Overview

| Code | Title | Persona | Difficulty | XP | Est. min | Covers |
|---|---|---|---|---|---|---|
| M-01 | Forward the Order | Xiao Ling | ★ | 10 | 8 | L-02 (HP-02) |
| M-02 | AutoCount Doesn't Lie | Xiao Ling | ★ | 10 | 10 | L-01 (HP-01, UP-01, UP-02, UP-03) |
| M-03 | The Discount Memory | Xiao Ling | ★★ | 20 | 12 | AIP-01 (HP-11, HP-12) |
| M-04 | Not Found Means Not Found | Xiao Ling | ★★ | 20 | 12 | AIP-01 (UP-18, UP-19, UP-20) |
| M-05 | Link, Not Chat Wall | Xiao Ling | ★ | 10 | 8 | AIP-02 (HP-13, UP-21, UP-22) |
| M-06 | Three Documents, One Chain | Xiao Ling | ★ | 10 | 10 | L-03 (HP-03, HP-04) |
| M-07 | Percent, Not Ringgit | Xiao Ling | ★★ | 20 | 8 | L-03 (UP-06) |
| M-08 | Which Milky Way? | Xiao Ling | ★★ | 20 | 8 | L-03 (UP-07) |
| M-09 | Still a Draft | Xiao Ling | ★ | 10 | 10 | L-04 (HP-05, UP-08, UP-09) |
| M-10 | Two Calculators Only | Xiao Ling | ★ | 10 | 10 | L-05 (HP-06, HP-07, UP-10, UP-11) |
| M-11 | Free Isn't Free Stock | Xiao Ling + Nisa | ★★ | 20 | 12 | L-06 (HP-08, UP-12, UP-13) |
| M-12 | Say the Price Out Loud | Xiao Ling | ★★ | 20 | 8 | L-07 (HP-09, UP-14) |
| M-13 | Not Our Profit | Nisa | ★★ | 20 | 8 | L-07 (UP-15) |
| M-14 | Brand Matters | Xiao Ling | ★ | 10 | 8 | L-08 (HP-10, UP-16, UP-17) |
| M-15 | The Floor and the Book | Xiao Ling + Marcus | ★★ | 20 | 10 | AIP-06 (ST-01, ST-02, ST-03) |
| M-16 | Block at the Dock | Xiao Ling + Marcus | ★★ | 20 | 10 | AIP-05 (ST-04) |
| M-17 | The Shelf Note | Asrul | ★ | 10 | 6 | AIP-08 (ST-05) |
| M-18 | Two Tongues | Xiao Ling | ★ | 10 | 6 | NS-09 (ST-06) |
| M-19 | Look Like AutoCount | Nisa | ★ | 10 | 8 | NS-10 (ST-07) |
| M-20 | I Speak Many Times The Same | Marcus | ★★★ BOSS FIGHT | 35 | 15 | AIP-01 full regression (VOC-005) |

**⏱ Read the time math before you start.** All 20 missions total roughly **187 minutes**. You have **90**. Nobody solos this pack — that's by design, not an oversight. Pick one of these three routes:

- **Squad route (default, 3+ testers):** split by persona so coverage doesn't overlap. Tester 1 = Xiao Ling (M-01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 12, 14, 18). Tester 2 = Nisa + Marcus (M-11 shared, M-13, 15, 16, 19, **20**). Tester 3 = Asrul (M-17) + free-roam Side Quests + Chaos Cards. Each tester lands around 80–90 minutes.
- **The Speedrun (solo / time-poor — ~93 min, still touches every P1 flow):** M-02 → M-03 → M-04 → M-07 → M-12 → M-13 → M-15 → M-16 → **M-20**. If you're running solo, this is your run. Skip everything else without guilt.
- **100% Completion (multi-session only):** all 20 missions + Side Quests + 3+ Chaos Cards. Not achievable in one 90-minute window.

**If you only have 20 minutes:** do **M-03** and **M-20**. Those two are the account. Everything else is supporting evidence.

**Recommended order within your route:** tutorial (M-01, M-02) → the flagship pricing flow (M-03, M-04, M-05) → core document loops (M-06 through M-14) → approval & finance (M-15 through M-19) → **M-20 always last**, as the closing boss fight, when you've built enough context to judge it honestly.

### 2. Mission Cards

> Format: template from the generator prompt. Sample phrasings are illustrative — **type your own words**, don't copy them.

```
MISSION M-01 — Forward the Order                               ★ · 10 XP · ~8 min
Persona: Xiao Ling, sales user        Covers: L-02 (HP-02)

Precondition: Xiao Ling has WhatsApp chatbot access as an internal user.

The situation: A customer just messaged you directly with an order. You forward
the details into the internal MAIA chatbot — this bot is for your team only,
customers never see it.

Your goal: Get the chatbot to accept your forwarded order and confirm it's
working with you as an internal user, not routing anything back to the
customer directly.

Say it your way: "create quotation for FLYBEAR SDN BHD, PM74 x100" · "new order, flybear, item PM74, hundred pieces"
→ now forget these and type it how YOU would.

Win conditions:
☐ Chatbot responds to you as the internal sales user
☐ It does NOT attempt to message the end customer directly
☐ A draft quotation forms with the right customer + item

It should stop and ask you if: the customer or item can't be matched confidently.

If something breaks mid-way: it tells you what it captured and what's
missing, never silently drops the order.

Sabotage bonus (+10): try messaging the bot's number from a phone that isn't
on the internal roster and see what happens.

Poke it: Does it ever try to talk back to the actual end customer?

Loot to capture: the draft, screenshot of the thread.
```

```
MISSION M-02 — AutoCount Doesn't Lie                            ★ · 10 XP · ~10 min
Persona: Xiao Ling, sales user        Covers: L-01 (HP-01, UP-01, UP-02, UP-03)

Precondition: Customer and item exist in AutoCount sandbox.

The situation: You create and submit a real Sales Order. You want to see it
land correctly in AutoCount — with AutoCount's own document ID, not MAIA's.

Your goal: Confirm the SO syncs to AutoCount once, cleanly, using AutoCount's
external ID.

Say it your way: "confirm SO for FLYBEAR SDN BHD"

Win conditions:
☐ SO appears in AutoCount sandbox matching customer, item, qty
☐ MAIA references AutoCount's external document ID, not its own internal one
☐ Resubmitting the same SO does NOT create a duplicate AutoCount record
☐ If sync fails (ask your test lead to simulate this), the failure is visible, not silent

Precondition variant: create item "G7" in MAIA, sync to AutoCount, note the
code AutoCount assigns back — confirm MAIA switches to using AutoCount's
code going forward, not its own original label.

It should stop and ask you if: n/a for this mission — clean sync is the win.

If something breaks mid-way: a sync failure must show as an error/notification,
never a silent pass.

Sabotage bonus (+10): try resubmitting the exact same SO a second time.

Poke it: If you rename an item in MAIA after it's already synced, does AutoCount's
code stay the source of truth?

Loot to capture: SO number in both systems, screenshot of the ID match.
```

```
MISSION M-03 — The Discount Memory                              ★★ · 20 XP · ~12 min
Persona: Xiao Ling, sales user        Covers: AIP-01 (HP-11, HP-12)

Precondition: Item has 5+ past Sales Invoice transactions with the test customer.

The situation: This is the single most important flow in the whole account —
it's failed sign-off four times before you. A customer wants a price on an
item they've bought before. You need to know exactly what they paid last time,
fast, before you quote.

Your goal: Query the item's history and get back a one-glance table — all
past invoice transactions, item code, date, invoice no., qty, standard price,
discount %, net price — via a link you can tap straight from WhatsApp.

Real test pair (10 real invoices, price genuinely drifted 41 → 49.8 → 47 over
the past year — this is not a fabricated scenario): customer **300-S0048 SEA
LARK SOLUTION LIMITED**, item **BW 1mx100m (SL Clear) 4.5kg**.

Say it your way: "price history SEA LARK, BW 1mx100m SL Clear" · "what did I give them last time for this item"

Win conditions:
☐ Chatbot returns a tappable URL, not a wall of WhatsApp text
☐ The linked page opens directly to the item/customer history — no extra navigation
☐ Every past invoice transaction shows, not capped to a token number
☐ Columns match exactly: item code, item name, date, invoice no., qty, standard price, discount %, net price

It should stop and ask you if: n/a — this should just work cleanly.

If something breaks mid-way: it should never show a partial or garbled table —
if it can't build the view, it should say so.

Sabotage bonus (+10): query two different items back-to-back — make sure the
second query doesn't corrupt or overwrite the first link's data.

Poke it: How fast does the link actually open on a real phone connection?

Loot to capture: the URL, screenshot of the opened table.
```

```
MISSION M-04 — Not Found Means Not Found                        ★★ · 20 XP · ~12 min
Persona: Xiao Ling, sales user        Covers: AIP-01 (UP-18, UP-19, UP-20)

Precondition: One item/customer pair with zero invoice history; one with only 1–2 invoices.

The situation: Not every item has history. You want to see MAIA handle that
honestly — no invented rows, no fake "smoothing over" of a gap.

Your goal: Query a never-before-ordered item/customer pair, then a
thin-history one, and confirm both are handled truthfully.

Real test pairs: **SEA LARK SOLUTION LIMITED + item PM72** — Sea Lark has 29
different items on record, but has genuinely never bought PM72 — this is a
real zero-history case, not staged. For thin-history: **FLYBEAR SDN BHD +
item AWB-350** (exactly 1 real invoice on file) or **FLYBEAR SDN BHD + item
A3B** (exactly 1 real invoice).

Win conditions:
☐ Zero-history query clearly shows "not found" — no fabricated or unrelated records
☐ Thin-history (2 invoices) query shows exactly those 2 rows — no padding, no error
☐ If only Quotation/SO history exists (no Sales Invoice), the view does NOT quietly substitute that instead

It should stop and ask you if: n/a — honest emptiness is the win condition itself.

If something breaks mid-way: any fabricated row here is a P1 — flag immediately.

Sabotage bonus (+10): query an item code that doesn't exist at all in AutoCount.

Poke it: Does the "not found" message actually tell you it's not found, or just
show a blank confusing screen?

Loot to capture: screenshots of both the empty and thin-history results.
```

```
MISSION M-05 — Link, Not Chat Wall                               ★ · 10 XP · ~8 min
Persona: Xiao Ling, sales user        Covers: AIP-02 (HP-13, UP-21, UP-22)

Precondition: —

The situation: Historical pricing used to come back as a giant wall of text in
WhatsApp — that's exactly what failed before. Now it should be a link.

Your goal: Confirm the link-out behaviour holds — clean tap-through, never a
bulky inline table, even under back-to-back queries.

Win conditions:
☐ Link opens correctly on mobile, renders within a few seconds
☐ Chatbot never dumps the full table as inline WhatsApp text
☐ Two sequential different-item queries each return their own correct, distinct link

It should stop and ask you if: n/a.

If something breaks mid-way: n/a — the link-out itself IS the fix for the
historical failure mode; treat any regression to inline text as a P1.

Sabotage bonus (+10): query three items in rapid succession and check every
link still points to the right item.

Poke it: What happens if you tap an old link from earlier in the conversation
after querying something new — does it still show the right (old) data?

Loot to capture: screenshots of 2+ distinct correct links.
```

```
MISSION M-06 — Three Documents, One Chain                        ★ · 10 XP · ~10 min
Persona: Xiao Ling, sales user        Covers: L-03 (HP-03, HP-04)

Precondition: —

The situation: A real order moves Quotation → Sales Order → Delivery Note →
Invoice. Sometimes one SO needs two separate deliveries.

Your goal: Run the full chain once straight through, then split one SO into
two DOs and confirm both trace back correctly.

Win conditions:
☐ Invoice traces back to its originating SO/DO with correct AutoCount IDs
☐ Two DOs against the same SO both link back to that one parent SO
☐ SO correctly shows partial-delivery status when only one DO is done

It should stop and ask you if: n/a for the happy path.

If something breaks mid-way: n/a.

Sabotage bonus (+10): try creating a DO with items that weren't on the
original SO.

Poke it: If you cancel one of the two DOs, does the SO status update sensibly?

Loot to capture: SO/DO/Invoice numbers showing the chain.
```

```
MISSION M-07 — Percent, Not Ringgit                              ★★ · 20 XP · ~8 min
Persona: Xiao Ling, sales user        Covers: L-03 (UP-06)

Precondition: A quotation line at a known standard price (e.g. RM60).

The situation: This exact bug has happened before — someone means "3%
discount" and the system captures it as "RM3 off" instead.

Your goal: Enter a discount intending it as a percentage and confirm it's
never silently misapplied as a flat currency amount.

Real reference (discount genuinely varies invoice to invoice for the same
customer+item — this is the exact behaviour the % field exists to capture):
**BOOKXCESS SDN BHD + item BW 0.5mx100m (SL Clear)** — standard price RM27.70,
discount recorded as 5% on two invoices and 10% on a third.

Say it your way: "3% off" · "discount 3 percent"

Win conditions:
☐ Entering "3%" applies a 3% discount, not RM3 flat
☐ If the unit is genuinely ambiguous, the system asks rather than guessing

It should stop and ask you if: the discount unit (% vs RM) is unclear from what you typed.

If something breaks mid-way: silently misapplying the wrong unit here is a P1
— it directly changes the final invoiced amount.

Sabotage bonus (+10): type just a bare number with no % or RM symbol at all.

Poke it: Does the final net price shown match what 3% off the standard price
should actually be?

Loot to capture: screenshot of the applied discount and resulting net price.
```

```
MISSION M-08 — Which Milky Way?                                  ★★ · 20 XP · ~8 min
Persona: Xiao Ling, sales user        Covers: L-03 (UP-07)

Precondition: Same customer has 2 open quotations.

The situation: A customer has two quotations open right now. You reference
"the quotation for [customer]" without saying which one.

Your goal: Confirm MAIA asks you to pick, rather than guessing and applying
your instruction to the wrong one.

Win conditions:
☐ MAIA asks you to specify which quotation ID
☐ It never silently applies your edit to the wrong quotation

It should stop and ask you if: always, when a customer has 2+ open quotations
and you don't specify which.

If something breaks mid-way: n/a — asking IS the correct behaviour.

Sabotage bonus (+10): give a vague nickname for the customer that could match
more than one record.

Poke it: Once you specify the right quotation, does it remember for the rest
of that conversation?

Loot to capture: screenshot of the clarification prompt.
```

```
MISSION M-09 — Still a Draft                                     ★ · 10 XP · ~10 min
Persona: Xiao Ling, sales user        Covers: L-04 (HP-05, UP-08, UP-09)

Precondition: A draft SO exists, not yet submitted.

The situation: You're mid-conversation, still deciding on delivery method and
final quantity. Nothing should lock — or submit — before you say so.

Your goal: Edit the draft freely, then confirm it locks correctly once
submitted, and never auto-submits on its own.

Win conditions:
☐ Draft accepts item/quantity/delivery-method edits before submit
☐ Once submitted to AutoCount, further edits are blocked or require an
  explicit amendment flow — not a silent overwrite
☐ Chatbot never auto-submits a draft without your explicit confirm, even if
  the conversation goes quiet for a while

It should stop and ask you if: you try to edit an already-submitted SO.

If something breaks mid-way: a silent auto-submit here is a P1.

Sabotage bonus (+10): leave the draft mid-edit and come back to it later —
confirm it's still editable, not auto-finalized.

Poke it: Can you tell, just by looking at the chat, whether a document is
still a draft or already locked?

Loot to capture: screenshot of a successful edit, and of the submit-lock
behaviour.
```

```
MISSION M-10 — Two Calculators Only                              ★ · 10 XP · ~10 min
Persona: Xiao Ling, sales user        Covers: L-05 (HP-06, HP-07, UP-10, UP-11)

Precondition: —

The situation: Fixguru has 5 calculator types in real life, but this build
only supports 2. You want to see the boundary held cleanly.

Your goal: Successfully price a box with RSC, then with Diecut, then confirm
the other 3 calculator types simply aren't offered.

Win conditions:
☐ RSC calculator produces a price that populates the quotation line
☐ Diecut calculator does the same
☐ Pizza Box / Layer Pad / 5-panel calculators are NOT available anywhere
☐ Entering a box where width > length is rejected before submission (physical
  print constraint)

It should stop and ask you if: n/a for calculator selection — the missing
options ARE the expected behaviour, not a bug.

If something breaks mid-way: n/a.

Sabotage bonus (+10): try to trick the calculator into accepting a
width-greater-than-length box by entering dimensions in a different order.

Poke it: Is there any hidden way to reach Pizza/Layer Pad/5-panel through a
menu, even if not advertised?

Loot to capture: screenshots of both working calculators, and confirmation the
other 3 are absent.
```

```
MISSION M-11 — Free Isn't Free Stock                              ★★ · 20 XP · ~12 min
Persona: Xiao Ling (creates) + Nisa (verifies invoice)        Covers: L-06 (HP-08, UP-12, UP-13)

Precondition: —

The situation: A customer ordered 1000 units billable, plus 10 units free
(production overage). Both the warehouse and the invoice need to get this
right, in opposite directions.

Your goal: Create the SO with both quantities, then confirm stock drops by
1010 while the invoice bills only 1000 × rate.

Win conditions:
☐ SO clearly shows both billable qty (1000) and FOC qty (10) as separate lines
☐ After delivery, stock has decremented by 1010, not 1000
☐ Invoice total reflects 1000 × rate only — FOC does not inflate the billed amount

It should stop and ask you if: n/a for the happy path.

If something breaks mid-way: FOC inflating revenue, or not decrementing stock
correctly, is a P2.

Sabotage bonus (+10): set FOC quantity higher than the billable quantity and
see what happens.

Poke it: Does the PDF clearly separate the two lines, or could a customer
mistake FOC for a discount?

Loot to capture: SO, DO, Invoice screenshots showing the qty split.
```

```
MISSION M-12 — Say the Price Out Loud                             ★★ · 20 XP · ~8 min
Persona: Xiao Ling, sales user        Covers: L-07 (HP-09, UP-14)

Precondition: —

The situation: Fixguru treats delivery charges as item lines for e-invoice
purposes — but only if you actually state the charge amount. AutoCount's real
charge master has these as actual item codes — **"3PL DC"** and **"IAM DC"**
— not just a generic "delivery method" label.

Your goal: Book a delivery two ways — once stating method + charge together,
once stating only the method — and see the difference hold.

Say it your way: "fulfillment 3PL, delivery charge item 3PL DC, RM35" (full) · "fulfillment is 3PL" (method only, no charge/SKU stated)

Win conditions:
☐ Stating method + charge together adds "3PL DC" (or "IAM DC") as its own SKU/item line, sourced from AutoCount's real charge master — not an invented code
☐ Stating method alone sets the fulfillment method ONLY — it does NOT auto-add a SKU line without an explicit amount

It should stop and ask you if: n/a — the two behaviours ARE the win condition.

If something breaks mid-way: auto-adding a SKU line without a stated price
would be a P2.

Sabotage bonus (+10): state the charge amount in a follow-up message instead
of the same instruction — does it still catch it correctly?

Poke it: What delivery-charge SKU options does it actually offer you — do
they match AutoCount's real charge list?

Loot to capture: two SOs side by side showing the method-only vs method+charge outcome.
```

```
MISSION M-13 — Not Our Profit                                    ★★ · 20 XP · ~8 min
Persona: Nisa, finance user        Covers: L-07 (UP-15)

Precondition: An SO with a delivery-charge SKU line exists (from M-12).

The situation: If a delivery charge gets miscoded as product revenue, Fixguru's
own accounting breaks downstream — this is exactly the kind of thing that
looks fine on the surface and is wrong underneath.

Your goal: Generate the invoice from that SO and check the delivery line's
accounting treatment.

Win conditions:
☐ Delivery charge line is NOT treated as product revenue
☐ Accounting code for the delivery line is preserved separately from item revenue

It should stop and ask you if: n/a.

If something breaks mid-way: delivery miscoded as revenue is a P1 — this is
the exact accounting-integrity failure the client has flagged by name.

Sabotage bonus (+10): check whether the miscoding shows up only on the PDF, or
also in the underlying AutoCount sync.

Poke it: If you were auditing this invoice cold, would the delivery line be
obviously separate from product lines?

Loot to capture: invoice PDF + AutoCount record, both showing correct
treatment.
```

```
MISSION M-14 — Brand Matters                                     ★ · 10 XP · ~8 min
Persona: Xiao Ling, sales user        Covers: L-08 (HP-10, UP-16, UP-17)

Precondition: One item has a brand set in AutoCount; one item does not.

The situation: An item display that's just a code and a name isn't enough —
brand matters to how Fixguru's team recognises stock.

Your goal: Look up a branded item and confirm the display format, then look
up an unbranded one and confirm it degrades gracefully.

Win conditions:
☐ Branded item shows: code + brand + name, consistently
☐ Unbranded item shows a clean fallback (code + name) — no blank/broken slot
☐ Same item's display matches between chatbot and web/FE — not different in each

It should stop and ask you if: n/a.

If something breaks mid-way: n/a.

Sabotage bonus (+10): look up the same branded item in both chatbot and FE
back-to-back and compare exactly.

Poke it: Where does the brand value actually come from — is it pulled live
from AutoCount, or cached somewhere stale?

Loot to capture: two screenshots (chatbot + FE) of the same branded item.
```

```
MISSION M-15 — The Floor and the Book                            ★★ · 20 XP · ~10 min
Persona: Xiao Ling (attempts) + Marcus (approves)        Covers: AIP-06 (ST-01, ST-02, ST-03)

Precondition: Item G1 has a floor set per UOM (e.g. piece UOM floor 0.27);
one customer has a locked price-book entry for G1 below that floor (e.g. 0.25).

The situation: Floors aren't item-wide flat numbers here — they vary by UOM.
And some customers already have a pre-approved price that should skip the
usual approval dance, up to a point.

Your goal: Try pricing below the UOM-specific floor for a normal customer
(should trigger approval), then price at the price-book customer's locked
rate (should NOT trigger approval), then try going even lower than that
locked rate (should trigger approval again).

Win conditions:
☐ Below-floor price for the "piece" UOM correctly triggers approval — a
  different UOM's floor for the same item should not falsely trigger
☐ Price-book customer's exact locked rate goes through with NO approval needed
☐ Going below even the price-book rate DOES trigger approval

It should stop and ask you if: any price falls below the applicable floor for
that specific UOM.

If something breaks mid-way: n/a.

Sabotage bonus (+10): try pricing the same item at a different UOM (e.g. box
instead of piece) right at that UOM's own floor boundary.

Poke it: Does the approval prompt actually say which UOM's floor was
breached, or just a generic "too low" message?

Loot to capture: screenshots of all three scenarios (blocked, price-book pass,
blocked-again).
```

```
MISSION M-16 — Block at the Dock                                 ★★ · 20 XP · ~10 min
Persona: Xiao Ling (creates) + Marcus (approves)        Covers: AIP-05 (ST-04)

Precondition: Customer whose credit exposure would only exceed the limit if
the block point were at Delivery Note, not Sales Order.

The situation: This account fixed a real contradiction this week — credit
blocking now happens at Delivery Note stage, not order creation, so a sale
isn't killed before it even has a chance.

Your goal: Confirm the SO itself goes through cleanly, and the block/approval
only fires when the Delivery Note is created.

Win conditions:
☐ Creating the Sales Order does NOT block, even near/at the customer's
  credit limit
☐ Creating the Delivery Note for that same order DOES trigger the credit
  block/approval flow
☐ Marcus (approver) sees the relevant context before deciding

It should stop and ask you if: the DN creation step, specifically — not the SO step.

If something breaks mid-way: blocking at the wrong stage (SO instead of DN)
is a P2 — this is a recently-fixed real contradiction, watch it carefully.

Sabotage bonus (+10): create two SOs against the same near-limit customer
before either one reaches DO stage — does the second one behave correctly too?

Poke it: What information does Marcus actually see in the approval prompt —
current exposure, limit, AR owing?

Loot to capture: screenshot of the unblocked SO and the blocked DO.
```

```
MISSION M-17 — The Shelf Note                                    ★ · 10 XP · ~6 min
Persona: Asrul, logistics user        Covers: AIP-08 (ST-05)

Precondition: Item has a shelf number configured.

The situation: You're preparing a Delivery Note for picking — you need to know
exactly where the item sits without hunting through a separate system.

Your goal: Generate the DN and confirm the shelf number shows up where you'd
actually look for it.

Win conditions:
☐ Shelf number appears in the DN's additional-note field
☐ It's readable at a glance during picking, not buried

It should stop and ask you if: n/a.

If something breaks mid-way: n/a.

Sabotage bonus (+10): try an item with no shelf number set at all.

Poke it: If two items on the same DN sit on different shelves, does each line
show its own correct shelf?

Loot to capture: screenshot of the DN's additional-note field.
```

```
MISSION M-18 — Two Tongues                                       ★ · 10 XP · ~6 min
Persona: Xiao Ling, sales user        Covers: NS-09 (ST-06)

Precondition: Chatbot language preference set to Bahasa Malaysia.

The situation: You've set your reply language to Malay — you want to confirm
it actually holds.

Your goal: Send a message and get a reply in Bahasa Malaysia, consistently.

Win conditions:
☐ Chatbot replies in BM when preference is set to BM
☐ Preference persists across the conversation, doesn't randomly revert to English

It should stop and ask you if: n/a.

If something breaks mid-way: n/a.

Sabotage bonus (+10): send a message in Mandarin while your reply preference
is set to BM — does it still reply in BM, or get confused?

Poke it: Does switching preference mid-conversation take effect immediately?

Loot to capture: screenshot of a BM reply.
```

```
MISSION M-19 — Look Like AutoCount                               ★ · 10 XP · ~8 min
Persona: Nisa, finance user        Covers: NS-10 (ST-07)

Precondition: SO with a delivery-charge line exists.

The situation: Fixguru's team already trusts AutoCount's PDF look — a MAIA PDF
that looks totally different creates friction with customers.

Your goal: Generate a PDF for that SO and compare its layout style against
what AutoCount would produce.

Win conditions:
☐ PDF shows the delivery charge as its own distinct line
☐ Overall layout resembles AutoCount's own template style, not a generic default

It should stop and ask you if: n/a.

If something breaks mid-way: n/a — a mismatched PDF is a P4, annoying but not
account-breaking on its own.

Sabotage bonus (+10): generate the PDF for a document with FOC lines too —
does the layout stay clean with the extra line type?

Poke it: Would a Fixguru customer receiving this PDF notice anything odd
compared to what they're used to?

Loot to capture: the PDF, side-by-side note of any layout differences.
```

```
MISSION M-20 — I Speak Many Times The Same           ★★★ BOSS FIGHT · 35 XP · ~15 min
Persona: Marcus Lim, admin        Covers: AIP-01 full regression (VOC-005)

Precondition: All of M-03, M-04, M-05 already passed individually.

The situation: This is the mission that's claimed four previous UAT rounds.
Marcus has raised this same gap on 7 April, 14 May, 16 June, and 24 June —
every time, historical pricing wasn't fast enough, clear enough, or right.
Run the entire flow end-to-end, one more time, as if this is the fifth and
final chance.

Your goal: From a cold start — no prior context in this conversation — ask
for an item's price history, get the link, open it, read it in one glance,
and confirm a price, entirely inside a WhatsApp-realistic pace. Time yourself.

Say it your way: "011-xxxx — G3 100, G1 300, PM72 500" (a real multi-item
order format from the account's own history)

Win conditions:
☐ MAIA retrieves the customer by phone number, not name
☐ Historical pricing link opens within a few seconds, no re-navigation needed
☐ Table is genuinely one-glance — you should not need to scroll or squint to
  find the number that matters
☐ You can confirm a price and move to SO creation without leaving the flow
  or waiting on a slow response

It should stop and ask you if: n/a — smooth, fast completion IS the win.

If something breaks mid-way: if this flow is still slow, confusing, or wrong
in any way, log it as a **P1 with full evidence** — this is the single most
consequential bug this pack can catch. Treat it exactly as seriously as the
client has, across four real UAT rounds.

Sabotage bonus (+15): do this mission back-to-back for 3 different
customer/item pairs without pausing — does performance or accuracy degrade
under realistic multi-order pressure (remember: 4–10 concurrent orders is
Fixguru's real daily reality)?

Poke it: If you were Marcus, would you sign off after this? Be honest.

Loot to capture: timed screenshots of the full flow, start to finish.
```

### 3. Side Quests & Chaos Cards

**Side Quests (1–2 per persona):**
- *As Xiao Ling:* You're mid-conversation on one customer's order when a second, completely different customer messages you. Try switching context in the same chatbot session without losing either draft.
- *As Xiao Ling:* Push through 4 different customer orders back-to-back inside 10 minutes, the way a real busy morning would go. Note anywhere the chatbot made you slow down unnecessarily.
- *As Marcus:* Pick any single mission above and try to break it in a way nobody on this list thought of. That's the whole quest.
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

### 4. Field Manual

**How to log a result:** mission code · persona · what you typed (verbatim) · what happened · what you expected · severity (P1–P4) · evidence link · chaos cards played.

**Evidence rules:** screenshots + every document ID created (Quotation/SO/DO/Invoice/Credit Note numbers) + timestamps.

**Test Data Kit** — two sources, both real, kept separate:

*From actual AutoCount pricing-history export (`pricing_history.csv`, verified 14 Jul 2026 — use these for M-03, M-04, M-07, M-12, M-13):*
- **Flagship pair (10 real invoices, genuine price drift 41 → 49.8 → 47 over a year):** customer `300-S0048` SEA LARK SOLUTION LIMITED, item `BW 1mx100m (SL Clear) 4.5kg`
- **Zero-history pair:** SEA LARK SOLUTION LIMITED + item `PM72` (Sea Lark has 29 items on record, genuinely never bought this one)
- **Thin-history pairs (exactly 1 invoice each):** FLYBEAR SDN BHD + `AWB-350`, or FLYBEAR SDN BHD + `A3B`
- **Discount-drift pair (5% → 5% → 10% across 3 real invoices):** BOOKXCESS SDN BHD + item `BW 0.5mx100m (SL Clear)`, standard price RM27.70
- **Real delivery-charge SKU codes (not generic labels):** `3PL DC` (e.g. FLYBEAR, 2 invoices, RM30 then RM35.10), `IAM DC` (multiple customers — UMAKE DESIGN GROUP PLT has 7 invoices on this code)

*From meeting transcripts (24 Jun debrief — use for M-15, M-20):*
- Items G1 (standard 0.33, piece-UOM floor 0.27), G3, PM72 — the client's own worked minimum-price example
- Multi-item order format quoted directly by the client: "011-xxxx — G3 100, G1 300, PM72 500"
- FOC example from UAT Action Items: order 1000 billable + 10 FOC → stock −1010, revenue on 1000 only

`[GAP]` — no confirmed real phone/WhatsApp number exists in either source for customer lookup testing (AIP-03); use a sandbox test number and flag if one isn't provided separately.

Rule: tag every record you create with a test-round reference in remarks/notes where possible, so cleanup is easy.

**Scoring & Badges:**
- Mission XP: ★ = 10, ★★ = 20, ★★★ = 35.
- Bug bounty: P1 = 50, P2 = 30, P3 = 15, P4 = 5. First unique finder gets it.
- Chaos Card played meaningfully: +10. Sabotage bonus: as listed on the card.
- Badges: **First Blood** (first bug of the run) · **Method Actor** (all missions, zero copy-pasted phrasings) · **Chaos Agent** (5+ chaos cards) · **Boss Slayer** (survive M-20) · **Cartographer** (3+ useful Observations) · **Completionist** (100%).

**Help:** Ask Gareth directly during the window. Log anything you're unsure about as an *Observation* in the reporting channel rather than sitting on it — a wrong guess about whether something is a bug costs the run more than a question does.

### Appendix — Coverage Map

| Source (Scope Lock v2 / UAT Checklist) | Mission(s) |
|---|---|
| L-01 | M-02 |
| L-02 | M-01 |
| L-03 | M-06, M-07, M-08 |
| L-04 | M-09 |
| L-05 | M-10 |
| L-06 | M-11 |
| L-07 | M-12, M-13 |
| L-08 | M-14 |
| AIP-01 (promoted LOCKED 13 Jul) | M-03, M-04, M-20 |
| AIP-02 (promoted LOCKED 13 Jul) | M-05 |
| AIP-06 resolved sub-criteria (ST-01–03) | M-15 |
| AIP-05 resolved sub-criterion (ST-04) | M-16 |
| AIP-08 resolved sub-criterion (ST-05) | M-17 |
| NS-09 (ST-06) | M-18 |
| NS-10 (ST-07) | M-19 |
| AIP-03, AIP-04, AIP-07 (not fully locked) | Not tested this round — excluded per UAT Checklist §4b |
| OOS-01 to OOS-04 | Reflected in §5 Out of Bounds, not tested |

## See Also

- [[Fixguru — VoC Extraction]]
- [[UAT/Fixguru — UAT Checklist]]
- [[Fixguru — End-user & Process Map]]
- [[Fixguru — Lens Alignment Report]]

**14Jul26 - Macrofrozen MAIA UAT Field Guide**

**owner: Gareth\
status: draft\
last_reviewed: 2026-07-14\
lark_url: <https://eg69120xnei.sg.larksuite.com/docx/JIGUdDNTHorf79xLqXUljP4agEb>**

**(Macro Frozen / Macrofood --- Phase 1 Core)**

+:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Generated via the \"UAT Infopack --- Generator Prompt (v2.0)\" (Lark: RvJZwbbwtifhkkkCjrolz3U5g1f), from three source docs: **\[\[Macrofood --- VoC Extraction\]\]**, **\[\[Macrofood --- Scope Lock v1 (reconciled)\]\]**, **\[\[Macrofood --- UAT Checklist\]\]** (all last reviewed 2026-07-14).                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **v3 --- re-generated against Generator Prompt v2.0 (2026-07-14).** Every mission card now carries a **Precondition** line (new field in v2.0\'s template), sourced directly from the UAT Checklist\'s Precondition column --- no invented setup detail. Logistics (test window, environment, bug channel, time budget) filled in from confirmed operator input. Document chain corrected to match the locked mechanism exactly: WhatsApp → draft SO → pick-list-confirmed weight → amend SO → DO → Invoice → payment reconciliation, with the Credit Note split into SCN/CCN reflected wherever the chain is described.     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Carried over from the prior v2 (2026-07-14, same day): new missions for customer-agent assignment (SL-08), outdoor sales query-only (AS-04/AS-04b), customer activity log (AS-05), payment-escalation routing (NS-06, now resolved), and item historical pricing (NS-08, now resolved). **POD (NS-07) stays a hard client conflict** --- Grace explicitly rejects the photo-upload-to-Maya design. Warehouse manager persona is **Lai** (confirmed real name via Grace), not the earlier placeholder. M-23/M-25 (OOS missions for blasting/QR settlement) removed --- not worth tester time confirming a deliberate refusal. |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Added later same day:** M-45 --- customer PO upload & match (AS-08/NS-12), covering the 3 confirmed customers who issue formal POs instead of WhatsApp orders. Happy-path only, matching the UAT Checklist\'s own scope (see its §4c note on why this is a deliberate exception to LOCKED-only testing).                                                                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **v4 --- full audit pass (2026-07-14). Six defects fixed; two would have broken the session on the day.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **The pack didn\'t fit its own window.** 42 missions ≈ 385 min of testing against a 90-min budget --- and the old \"Speedrun\" was itself 125 min, also over. Replaced with an honest timing note, a **4-tier priority ladder** (Tier 1 = the P1 Core, 65 min), and a **6-tester squad split** that actually adds up. The shortfall is now visible before the session, not during it.                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **The pack said WhatsApp; the test channel is Telegram.** Every mission told testers to use a WhatsApp number that isn\'t live. Added a prominent channel note up front --- the swap is not a bug, and the persona\'s world stays WhatsApp-shaped.                                                                                                                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Fictional bakery content had leaked in from the generator prompt\'s worked example.** Ben\'s persona and Chaos Card 2 both referenced \"Café Bunga\" and \"sourdough.\" Macro Frozen sells frozen meat. Replaced with their real customers and SKUs.                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **M-43 had no runnable actor** --- it tests a Sales Manager\'s alert scoping, and no Sales Manager persona existed. Added the persona, flagged the mission as needing two people.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **The severity guide contradicted the missions.** M-35 and M-42 both call data fabrication a P1, but \"invents data\" wasn\'t in the P1 list. It is now.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Grace\'s real role was buried.** She isn\'t just finance --- *she is the person who types in every order.* That\'s now stated plainly in her persona card, because it changes who the \"sales/admin creates the SO\" missions are really about.                                                                                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Also added: an **Adoption Side Quest** (the two people this product depends on aren\'t yet convinced it saves them time --- that\'s the most valuable thing to learn today), an ADOPTION observation tag, a warning that **M-30\'s simulated SQL outage must be arranged in advance or it silently won\'t happen**, and a 13th Chaos Card for the KG-vs-boxes unit mismatch.                                                                                                                                                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**PART A --- READ BEFORE YOU PLAY (15--20 min)**

**1. Cover / Logistics**

+:-------------------------------+:--------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                |                                                                                                                                                               |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Project**                    | Macro Frozen (Macrofood) --- Phase 1 Core                                                                                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Product**                    | MAIA (WhatsApp order-to-cash assistant)                                                                                                                       |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Client**                     | Macro Frozen --- frozen-food wholesale/retail distributor                                                                                                     |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Test window**                | **Tue, 14 Jul 2026, 10:30am -- 12:00pm** (90 min --- see the timing note in Part B §1 before you plan)                                                        |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Environment & access**       | Web app: https://maia-fe-macrofrozen.vercel.app/                                                                                                              |
|                                |                                                                                                                                                               |
|                                | Chatbot: \@maia_macrofoods_bot                                                                                                                                |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Input Document**             | [Macrofrozen Sample PO](https://eg69120xnei.sg.larksuite.com/wiki/OXFswxcUiiJxIgkhqwEl5geLg86)                                                                |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Bug reporting**              | [eg69120xnei.sg.larksuite.com](https://eg69120xnei.sg.larksuite.com/share/base/form/shrlg6LvVeOJ3bucMFXHka4GDCf?prefill_What+Application+Are+you+Using?=MAIA) |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Tracker to update progress** | [QA Testing Tracker](https://eg69120xnei.sg.larksuite.com/wiki/CsWLwSjOgiO98JkitQ8lGfpPgF2?from=from_copylink)                                                |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Time budget per tester**     | 90 minutes (\~20 min reading Part A + **\~70 min actual testing**)                                                                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Testers needed**             | **6 for full coverage.** Fewer testers = run the tiered priority in Part B §1, don\'t try to rush all 42 missions.                                            |
+--------------------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+

+:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **⚠️ Read this first: WhatsApp vs Telegram**                                                                                                                                                                    |
|                                                                                                                                                                                                                 |
| Macro Frozen\'s **real-world** channel is WhatsApp --- that\'s how their customers order, and that\'s what the missions and personas describe, because that\'s the world you\'re role-playing.                  |
|                                                                                                                                                                                                                 |
| **For this test run, you will actually be typing into Telegram** (link above), because the client\'s WhatsApp Business number isn\'t live yet. Same bot, same behaviour, different app.                         |
|                                                                                                                                                                                                                 |
| So: read \"forward it into the MAIA WhatsApp number\" as **\"send it to the MAIA bot on Telegram.\"** The channel swap is *not* a bug --- don\'t log it. Everything else about the persona\'s world stays true. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**2. How to Play (one page)**

You are a person, not a script. Pick a persona, stay in character.

Type in your own words --- typos, shorthand, your usual mix of English/Chinese/Malay. Never copy-paste the sample phrasings below.

When MAIA asks you something, react the way your persona would --- impatient, brief, sometimes vague.

Break things on purpose. Curiosity scores points.

Out of bounds ≠ bug. Check the map (§4) before you log.

No loot, no glory: evidence (screenshots + document IDs) or it didn\'t happen.

Scoring in one line: XP for missions, bounty for bugs (P1 highest), bonus for Chaos Cards. Full detail in the Field Manual (Part B, §4).

**3. The World in Five Minutes**

**Macro Frozen is a frozen-food and meat distributor processing roughly 700 orders a month across a highly manual, WhatsApp-led operation.** Customer orders arrive as texts, voice notes, screenshots, or shorthand---"pork belly slight," for example, may actually mean a specific sliced, skin-on cut. Sales must translate that language into the correct customer, SKU, preparation method, quantity, and price before anything can move into SQL. fileciteturn0file4

The business is unusually sensitive to **weight accuracy**. Customers may order an estimated quantity, but warehouse staff still need to cut, pack, and weigh the physical product. The actual weight almost never matches the original order exactly. That confirmed warehouse weight---not the requested weight---must flow correctly into the Sales Order, Delivery Order, Invoice, stock movement, and customer balance. A small break in that chain does not merely create admin work; it creates silent margin leakage, incorrect billing, stock discrepancies, and customer disputes. fileciteturn0file0

**David is the owner, Managing Director, credit controller, and---in his own words---the person "coordinating everything."** He currently consolidates orders into driver routes, oversees paper pick lists, resolves pricing exceptions, approves credit overrides, and steps in when finance or warehouse processes break down. Macro Frozen therefore does not lack activity; it lacks enforceable operating controls that allow the business to run without David personally catching every exception. fileciteturn0file5

**What David is actually afraid of**

David's primary concern is not whether MAIA is fast or impressive. It is whether the system can make a financially or operationally significant mistake **without anyone noticing**:

A salesperson uses an outdated or below-floor price.

An invoice is generated before the warehouse's actual weight is checked.

The wrong cut or quantity is picked, but nobody can establish who picked it and who verified it.

A customer exceeds their credit limit, yet the order proceeds without approval.

MAIA and SQL disagree on the customer, item, stock, or document state.

Today, pricing is distributed through WhatsApp images generated with ChatGPT---"we don't update any system"---while driver-collected cash is tracked in a finance-maintained Excel sheet. Customers may pay by bank transfer, cash, or QR, and payment names do not always match the customer record. The operation works because people recognise the exceptions and David intervenes; very little is structurally enforced.

**What success must look like**

For David, success is not "the software has gone live." Success means **he is no longer the operating bottleneck, while retaining control over material exceptions**:

Sales representatives see and manage only their own customers.

Wholesale, retail, and customer-specific pricing is applied consistently.

Prices cannot fall below the approved floor without an explicit override.

Orders stop when either the customer's credit limit or payment terms are breached.

The warehouse's confirmed weight is always the quantity billed.

Documents follow the correct SO → DO → Invoice sequence.

SQL remains the system of record for customers and items and is never silently contradicted or overwritten.

Every high-risk action leaves a visible approval and audit trail. fileciteturn0file0 fileciteturn0file2

**The three failure modes that matter most**

**1. MAIA silently gets money or stock wrong.**

An incorrect price, weight, payment match, or document state is allowed through, and the error is discovered only after a customer complains or finance finds a discrepancy.

**2. MAIA tries to replace the business's existing operating reality.**

Macro Frozen is not buying a new ERP or a full warehouse-management system. MAIA must sit around SQL, WhatsApp, and the necessary paper controls---not pretend those dependencies can disappear immediately.

**3. The product works in a demonstration but not in daily operations.**

Warehouse, sales, and finance continue using their existing workarounds, leaving David to coordinate both the old process and the new system. That outcome would add another layer of administration without removing the existing bottleneck.

**Adoption is now the critical risk**

As of **14 July**, two independent user groups have raised unresolved adoption objections:

**Warehouse:** there is still no confirmed agreement that staff will replace or route their existing paper pick-list process through the MAIA-generated workflow. This matters because the pick list is not merely a document; it is how Macro Frozen groups deliveries by route, records actual weight, and assigns picker/checker accountability.

**Finance:** Grace does not yet see how moving her existing AR payment-matching work through MAIA saves time. A design walkthrough has not resolved that concern; the workflow must demonstrate a measurable reduction in manual checking or duplicate entry.

Grace has also explicitly rejected the proposed delivery-photo upload step. Her current process---drivers photograph the signed Delivery Order, or the delivered goods when nobody is available to sign, and post the evidence into a WhatsApp group---already works for her. She described uploading the same evidence into MAIA as **"more work, not less."**

This is not an unfinished feature request. It is a workflow decision that David needs to make: either MAIA replaces the existing proof-of-delivery process with a clearly better one, or the team should stop building an additional upload step that users have no reason to adopt.

**Bottom line:** Macro Frozen does not primarily need more automation. It needs controlled delegation---enough structure to remove David from routine coordination, without weakening the human checks that protect weight, price, credit, stock, and cash.

**4. The Product Map**

**What MAIA does this phase:** it sits **on top of SQL** (SQL stays the master for customers and items), takes WhatsApp orders, turns them into Sales Orders / Delivery Orders / Invoices / Credit Notes / Pro Forma Invoices, enforces pricing rules, checks credit before an order goes through, matches incoming payments to invoices, and keeps each sales rep\'s customers private to that rep.

**The document chain:**WhatsApp → draft SO → pick-list-confirmed weight → amend SO → DO → Invoice → payment reconciliation. The pick-list step is warehouse-**manager**-mediated, not generic \"warehouse confirms\": SO is converted to a pick-list PDF → the warehouse manager (Lai) shares it with the foreign-worker pickers → pickers record actual quantity on the PDF → Lai uploads it back → the SO is amended to that actual weight. A Credit Note isn\'t one behavior --- it splits into two doctypes: a **Sales Credit Note (SCN)** covers billing + stock refund together, or stock-return-only; a **Customer Credit Note (CCN)** covers billing/knock-off only, with no stock movement.

**The golden rules:**

Nothing gets pushed to SQL until a human confirms it.

The **billed weight is always the actual picked weight**, never the ordered weight.

SQL is never overwritten by MAIA --- MAIA references it, never replaces it.

A sales rep never sees another rep\'s customers.

Below-floor prices and over-credit-limit orders are blocked, not just flagged.

**Glossary**

  ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Term                Meaning

  SO                  Sales Order

  DO                  Delivery Order (a.k.a. Delivery Note)

  CN                  Credit Note --- general term; splits into **SCN** and **CCN** below, both reference an original invoice

  Pro Forma Invoice   A document titled \"invoice\" used to secure a deposit before the real invoice, for customers whose financiers require the word \"invoice\"

  GRN                 Goods Received Note (supplier-side receiving; not a Phase-1 MAIA feature --- parked)

  AR                  Accounts Receivable --- matching incoming payments to invoices

  SQL                 Macro Frozen\'s existing ERP; remains master for customer + item data

  Floor price         The minimum price a sales rep is allowed to sell at

  POD                 Proof of Delivery (signed DO / photo) --- 🚫 **client (Grace) explicitly rejects uploading this into Maya (14 Jul)** --- not \"coming soon,\" a live conflict needing David\'s decision

  AIP                 \"Agreed in Principle\" --- direction agreed, implementation details not locked; **not tested this round**

  SCN                 Sales Credit Note --- Maya doctype covering billing reversal + stock return together, or stock-return-only

  CCN                 Customer Credit Note --- Maya doctype for billing/knock-off only, no stock movement

  PO / CPO            Purchase Order --- a formal order document a small number of customers (3 confirmed) send instead of a WhatsApp message; MAIA matches it to customer + item records and converts it to a confirmed Sales Order (CPO) after review
  ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**5. In Bounds / Out of Bounds / Needs Scoping**

**In bounds --- things you can expect MAIA to do:**

Take a WhatsApp order and turn it into a draft SO using SQL customer/item data.

Hold the order at draft weight, then re-bill at the **actual** picked weight once warehouse confirms.

Generate SO, DO, Invoice, Credit Note, and Pro Forma Invoice PDFs.

Enforce a price floor and customer-specific fixed prices; block below-floor pricing.

Block an order that breaches a customer\'s credit limit or unpaid \"one invoice\" rule, and route the approval to David only.

Auto-suggest payment-to-invoice matches from an uploaded bank statement/slip, but never auto-post an ambiguous match.

Keep each sales rep\'s customer list private from every other rep.

Restrict Macro Frozen to a single MAIA WhatsApp number.

Route each customer to their correct sales agent (Ben, Quinny, or David by default) --- and keep CK\'s 3 driver-managed customers out of the normal sales pipeline entirely.

Let outdoor/field salespeople query price, outstanding, and customer info --- but never create an order directly; orders go through office admin via WhatsApp relay.

Let sales log notes/events/tasks on their own customer\'s profile (activity log).

Route overdue-invoice alerts to Finance, the responsible salesperson, their Sales Manager, and David.

Show the single latest invoiced price for an item at order entry --- nothing older, no cross-item view (that\'s a deliberate scope boundary now, not a gap).

For the 3 customers who issue formal POs: match an uploaded PO against customer + item records and let you review the match before submitting as a confirmed order. This is a narrow, low-volume path --- not the main order-intake channel.

**Out of bounds --- if you notice this missing, that\'s by design, don\'t log it as a bug** (note it as an *Observation* if it genuinely confused you as the persona):

AP (supplier payment) reconciliation.

Merchant/QR settlement reconciliation.

Delivery trip management, driver app, route planning.

Full WMS / barcode / QR scanning.

Volume-based pricing tiers.

A full B2C customer-ordering app/chatbot.

Automated WhatsApp blasting of the catalogue to Macro Frozen\'s customer list (this would get the number banned --- MAIA will only produce a catalogue for manual forwarding).

**Uploading proof-of-delivery photos into Maya at all** --- this isn\'t parked for later, the client operating it has said no. Don\'t log \"POD upload doesn\'t work\" as a bug; it isn\'t supposed to exist right now.

**Needs scoping --- don\'t expect a locked answer here, note anything odd as an Observation, not a bug:** product catalogue/image template (creation is David-only knowledge, not even Grace has visibility), credit-note numbering rule, customer master-field writability (address/phone/billing --- separate from the activity log, which IS tested), backend dashboard widgets, inventory-aging alert thresholds/recipients, quotation-before-order price-lock (real usage confirmed low --- may not get built at all), stock-expiry alert sales-inclusion, backup coverage if the logistics/finance manager is absent, warehouse device model (individual logins vs one shared phone).

**6. Persona Cards**

**David Chong --- Owner / MD / Credit Controller**

*My day:* I\'m on WhatsApp from 7am, fielding orders, chasing payments, and approving anything that needs my sign-off. I\'m the one everyone forwards a problem to.

*What I want from this product:* Get me out of being the mandatory middleman for every order, price check, and credit decision --- without me losing control of any of it.

*What makes me trust it / ditch it:* Trust it if it never silently changes money or stock without me knowing. I\'d ditch it the moment it does something wrong quietly and I only find out from an angry customer.

*How I talk:* Direct, transactional, sometimes terse. \"same as last week\", \"confirm now or not\", \"who approve this ah\".

*Patience level & quirks:* Low patience for back-and-forth on things he considers obvious; high attention to anything involving money.

**Ben --- Sales User**

*My day:* I manage my own list of restaurant/hotel and wholesale customers. Orders come in on WhatsApp all day, often at the worst moment.

*What I want from this product:* Get the order in fast, without re-typing everything, and without another rep or David breathing down my neck over my customers.

*What makes me trust it / ditch it:* Trust it if it applies my customer\'s price correctly without me having to remember it. Ditch it if it lets another rep see my customer\'s info, or blocks me on something that should just work.

*How I talk:* Fast, abbreviated, one thumb typing. Mixes English/Malay/Chinese without thinking about it. \"same as last week for xing rui but double the chicken leg\", \"got stock or not ah\", \"20kg boneless leg for oasis, friday\".

*Patience level & quirks:* Impatient; will try to route around a block if one shows up.

**Grace --- Finance / Ops Admin --- *and the person who actually keys in every order****(direct client voice, confirmed 2026-07-14 in a live call --- the most reliably-sourced persona in this pack)*

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Important:** the sales reps do *not* enter orders themselves. They WhatsApp the order to the office, and **Grace types it in.** In her own words: everything gets opened on her side. So when a mission says \"sales/admin creates the SO,\" that\'s usually Grace at a desk --- not Ben in the field. She is the single busiest touchpoint in the whole product; if MAIA adds steps to *her* day, the deployment fails no matter how good it looks to David.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*My day:* I reconcile whatever payments come in against outstanding invoices --- bank transfers, cash from drivers, QR scans --- and chase overdue accounts. I key in the orders the sales reps send me. I\'m also the one fielding most of the scope-clarification questions from the vendor side.

*What I want from this product:* Match the easy payments automatically, but let me decide the ambiguous ones myself. Never let something post before I confirm it. And don\'t add steps to my day --- if I\'m doing the same manual work just \"through Maya now,\" that\'s not a win.

*What makes me trust it / ditch it:* Trust it if a mismatched payer name gets flagged, not silently matched to the wrong customer. Ditch it if it invents a match, or if it adds a step (like uploading delivery photos) that I don\'t currently need.

*How I talk:* Precise about numbers, terse about everything else. \"payment RM2000 only, invoice is RM5000, where the rest\".

*Patience level & quirks:* Very low tolerance for anything that looks like it guessed instead of asking. Openly skeptical of new workflow until she\'s actually run it herself --- don\'t take a \"sure, sounds fine\" from her as adoption confirmed.

**CJ --- Sales Manager**

*My day:* I\'ve got two reps under me --- **Ben** and **Quinny**. I approve what they can\'t approve themselves, and I\'m on the hook when their customers don\'t pay.

*What I want from this product:* Show me *my* two reps\' problems --- overdue invoices, blocked orders --- without drowning me in everyone else\'s. If I have to approve every small thing, I\'m just another bottleneck.

*What makes me trust it / ditch it:* Trust it if the alerts it sends me are actually mine to act on. Ditch it if I\'m seeing accounts that aren\'t my reps\', or if I\'m approving things a rep should have handled.

*How I talk:* Short, managerial. \"who\'s chasing this one\", \"that\'s Ben\'s customer, not mine\".

*Patience level & quirks:* Cares about scope of responsibility --- will notice immediately if he\'s shown data outside his team.

⚠️ *Used in M-43. That mission cannot be run solo --- you need someone playing this role and someone checking David\'s/Finance\'s alerts at the same time.*

**Lai --- Warehouse Manager***(name confirmed via Grace, 2026-07-14 --- still not a direct warehouse voice; Lai himself has never been heard from directly in discovery, only described)*

*My day:* I receive the pick-list PDF, hand it to the foreign-worker pickers, collect it back once they\'ve marked actual quantities, and upload it to Maya. If I\'m out, right now **nobody else checks their work** --- a confirmed gap, not fixed by this UAT round.

*What I want from this product:* Something that doesn\'t slow the floor down. I\'m the single point of contact for this whole step --- no backup exists if I\'m sick or on leave.

*What makes me trust it / ditch it:* Doesn\'t matter much to me personally --- but if it makes me responsible for numbers I didn\'t personally verify, that\'s a problem.

*How I talk:* Minimal. Numbers and short phrases. \"8kg only\", \"not 10\".

*Patience level & quirks:* Will revert to the old paper process the moment the new one is friction --- **this is a live, unresolved adoption risk**, not solved by this test round. Also: if Lai is unavailable during your test window, there is currently no defined backup tester for his role --- flag this as an Observation if it blocks a mission.

**7. Trust Killers --- Severity Guide**

**P1 --- Client walks away:**

MAIA bills the **ordered** weight instead of the **actual picked** weight.

MAIA overwrites SQL\'s customer/item data as if it were master.

MAIA shows a record as successfully synced to SQL when the sync actually **failed** (false success).

**MAIA invents data** --- a price, a stock figure, a customer, an item --- instead of saying it doesn\'t know. Every number this product shows has to be traceable to SQL or it\'s worthless. If you catch it fabricating, that\'s a P1, full stop.

**P2 --- Client gets nervous:** below-floor price goes through; an over-credit-limit order is not blocked, or a non-David user can approve it; a duplicate invoice is created on an already-submitted SO; a payment gets auto-matched to the wrong customer; a sales rep sees another rep\'s customer data.

**P3 --- Annoying but survivable:** MAIA needs several rounds of clarification for an ambiguous item name; a price-template error isn\'t explained clearly; a rep has to fight the system to get an obviously-correct order through.

**P4 --- Cosmetic:** PDF formatting/layout doesn\'t match Macro Frozen\'s existing SQL document look.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **The one-line version of all of the above:** David\'s fear isn\'t that MAIA is slow --- it\'s that MAIA does something wrong to *money or stock*, quietly, and he only finds out when a customer shouts at him. Anything that could do that is a P1, even if it looks small.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**PART B --- THE MISSIONS**

**1. Campaign Overview**

  ------ --------------------------------------- --------------- ------------ ------ ---------- ----------------------------------
  Code   Title                                   Persona         Difficulty   XP     Est. min   Covers

  M-01   The First Forward                       Ben             ★            10     8          HP-01 · SL-06

  M-02   SQL Doesn\'t Lie                        Ben             ★            10     10         HP-02 · SL-01/SL-07

  M-03   The Weight That Actually Counts         Ben + Lai       ★★           20     12         HP-03 · AS-01

  M-04   Match It or Ask                         Grace           ★            10     10         HP-04 · SL-02

  M-05   Thirty SKUs, One Upload                 David           ★            10     10         HP-05, HP-05b · SL-03

  M-06   The Customer Who Gets a Special Price   Ben             ★            10     8          HP-06 · SL-03

  M-07   Under the Limit                         Ben             ★            10     8          HP-07 · SL-04

  M-08   My Customers Only                       Ben             ★            10     6          HP-08 · SL-05

  M-09   Three Documents, One Order              Ben             ★            10     10         HP-09 · SL-07

  M-10   The Word \"Invoice\" Matters            Ben             ★            10     8          HP-10 · NS-04

  M-11   Reverse It, Return It                   Grace           ★★           20     12         HP-11, HP-11b, UP-33 · SL-07

  M-12   Pork Belly Slight                       Ben             ★★           20     10         UP-01 · SL-01

  M-13   中文品名                                Ben             ★★           20     10         UP-02 · SL-01/SL-03

  M-14   Ten Ordered, Eight Real                 Lai/Ben         ★★           20     12         UP-03 · AS-01/SL-07

  M-15   Not Your Name on the Slip               Grace           ★★           20     12         UP-04 · SL-02

  M-16   Over the Limit                          Ben             ★★           20     10         UP-05 · SL-04

  M-17   Approve Yourself? No.                   Ben             ★★           20     8          UP-06 · SL-04

  M-18   Sell It Cheap Anyway                    Ben             ★★           20     8          UP-07 · SL-03

  M-19   Invoice It Twice                        Ben             ★★           20     10         UP-08 · SL-07

  M-20   More Than the DO Says                   Ben             ★★           20     10         UP-09 · SL-01/SL-07

  M-21   Someone Else\'s Customer                Ben (as B)      ★★           20     8          UP-10 · SL-05

  M-22   The Voice Note                          Ben             ★★           20     10         UP-11 · SL-06/SL-07

  M-24   Not Yet Confirmed                       Ben             ★★           20     10         UP-13 · SL-01/AS-01

  M-26   Edit SQL Directly?                      Ben             ★★           20     8          UP-15 · SL-01

  M-27   The Order With No Quantity              Ben             ★★           20     8          UP-16 · SL-07/SL-01

  M-28   Negative Kilos                          Lai             ★★           20     8          UP-17 · AS-01

  M-29   Partial Payment                         Grace           ★★           20     10         UP-18 · SL-02

  M-30   The SQL Blackout                        David           ★★★          35     15         UP-19 · SL-01/SL-07 (Boss Fight)

  M-31   No Price Group                          Ben             ★★           20     8          UP-20 · SL-03

  M-32   The Broken Template                     David           ★★           20     10         UP-21 · SL-03

  M-33   Same SKU, Two Prices                    David           ★★           20     8          UP-22 · SL-03

  M-35   Don\'t Make It Up                       Ben             ★★           20     8          UP-24 · SL-01/SL-03

  M-36   Not Your Rights                         Ben             ★★           20     8          UP-25 · SL-07/SL-04

  M-37   The Empty Credit Note                   Grace           ★★           20     8          UP-26 · SL-07

  M-38   No Billing Detail                       Ben             ★★           20     8          UP-27 · NS-04/SL-07

  M-39   Right Agent, Right Customer             Ben             ★            10     8          HP-12 · SL-08

  M-40   Not CK\'s to Touch                      Ben             ★★           20     8          UP-28 · SL-08

  M-41   Look, Don\'t Book                       Ben (outdoor)   ★            10     8          HP-13, UP-29 · AS-04/AS-04b

  M-42   Last Price, Not Last Ten                Ben             ★            10     8          HP-14, UP-30 · NS-08

  M-43   Everyone Who Should Know                Grace + David   ★            10     10         HP-15, UP-31 · NS-06

  M-44   A Note on the File                      Ben             ★            10     6          HP-16, UP-32 · AS-05/SL-05

  M-45   The Formal Customer                     Ben             ★            10     10         HP-17 · AS-08
  ------ --------------------------------------- --------------- ------------ ------ ---------- ----------------------------------

**⏱️ Read this before you plan the session --- the math matters**

All 42 missions total **≈385 minutes (6h25m)** of testing. Your window is **90 minutes per tester**, and \~20 of those go to reading Part A. That leaves **\~70 minutes of actual testing per person.**

**One person cannot run this pack.** Full coverage in a single 90-minute window needs **6 testers**, each taking \~70 minutes of missions. Plan for that, or deliberately cut scope using the tiers below --- don\'t discover the shortfall at 11:45am.

**If you have fewer than 6 testers, run the tiers in this order and stop when time runs out:**

**🔴 Tier 1 --- The P1 Core (65 min).** If only one person tests anything, it\'s this. Every mission here maps to a failure that, per the VoC, makes the client walk away.\
M-03 (12) · M-14 (12) · M-30 (15) · M-26 (8) · M-35 (8) · M-02 (10)\
--- wrong weight billed · big weight gap · false sync success · SQL overwritten · MAIA inventing data · draft not SQL-sourced.

**🟠 Tier 2 --- Trust & Control (66 min).** The money guardrails.\
M-04 (10) · M-15 (12) · M-16 (10) · M-17 (8) · M-18 (8) · M-19 (10) · M-20 (10)

**🟡 Tier 3 --- Core Loops (70 min).** The everyday flows.\
M-01 (8) · M-05 (10) · M-06 (8) · M-07 (8) · M-09 (10) · M-11 (12) · M-12 (10) · M-13 (10)

**🟢 Tier 4 --- Everything else (\~180 min).** Edge cases and the 2026-07-14 additions: M-08, M-10, M-21, M-22, M-24, M-27, M-28, M-29, M-31, M-32, M-33, M-36, M-37, M-38, M-39, M-40, M-41, M-42, M-43, M-44, M-45.

**Recommended order (within whatever tier you reach):** tutorial + core loops → unhappy paths → Boss Fight → edge cases → Side Quests.

**100% Completion:** all 42 missions + Side Quests + at least 3 Chaos Cards played. **This requires 6 testers.**

**Squad split --- 6 testers, \~70 min each, full coverage**

  -------- ------------------------------ --------------------------------------------------------- --------
  Tester   Persona focus                  Missions                                                  Est.

  **T1**   Ben --- sales core             M-01, M-02, M-06, M-07, M-08, M-09, M-10, M-12            68 min

  **T2**   Ben --- sales edge             M-13, M-16, M-17, M-18, M-19, M-20, M-21, M-22            74 min

  **T3**   Grace --- finance/AR           M-04, M-11, M-15, M-29, M-37, M-43\*                      68 min

  **T4**   David --- control & pricing    M-05, M-30 *(Boss Fight)*, M-31, M-32, M-33, M-36, M-38   67 min

  **T5**   Lai --- warehouse & weight     M-03, M-14, M-24, M-26, M-27, M-28, M-35                  66 min

  **T6**   New scope (14 Jul additions)   M-39, M-40, M-41, M-42, M-45                              42 min
  -------- ------------------------------ --------------------------------------------------------- --------

\* **M-43 needs two people** --- a Sales Manager and someone to check David\'s/Finance\'s alerts. T3 runs it with T4 or CJ persona (see §6). Coordinate before starting it.

**T6 has \~28 spare minutes** --- after finishing, take Side Quests, or pick up whatever T2/T5 didn\'t reach.

**2. Mission Cards**

  ------------------------------------------------------------------------------------------------------------------------------
  Format: template from the generator prompt. Sample phrasings are illustrative --- **type your own words**, don\'t copy them.

  ------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------
  MISSION M-01 --- The First Forward ★ · 10 XP · \~8 min\
  Persona: Ben, Sales User Covers: HP-01 · SL-06\
  \
  Precondition: MAIA number live; user authorised\
  \
  The situation: A regular customer just sent you a WhatsApp order. You forward\
  it into the one MAIA number Macro Frozen uses --- there\'s only supposed to be\
  one, not five scattered numbers per rep.\
  \
  Your goal: Get MAIA to acknowledge the order and hand you back a draft with\
  customer, item, and quantity extracted.\
  \
  Say it your way: \"3 boxes pork belly, deliver fri\" · \"cust wants pork belly x3 friday delivery\"\
  → now forget these and type it how YOU would.\
  \
  Win conditions:\
  ☐ MAIA replies in the same WhatsApp thread\
  ☐ A draft with customer, item, and quantity comes back --- not a blank acknowledgement\
  ☐ Nothing is created in SQL yet at this stage\
  \
  It should stop and ask you if: the item or customer can\'t be matched confidently.\
  \
  If something breaks mid-way: it tells you what it captured, what\'s missing, and asks\
  how to proceed --- never silently drops the order.\
  \
  Sabotage bonus (+10): forward the same message twice in a row and see what happens.\
  \
  Poke it: What happens if you send it from a number that isn\'t yours? Does it recognise you?\
  \
  Loot to capture: the draft it returns, screenshot of the thread.

  ------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------
  MISSION M-02 --- SQL Doesn\'t Lie ★ · 10 XP · \~10 min\
  Persona: Ben, Sales User Covers: HP-02 · SL-01/SL-07\
  \
  Precondition: Customer + item exist in SQL\
  \
  The situation: You\'ve got a real customer and a real item in your head --- the\
  kind that already exists in SQL. You want MAIA\'s draft to actually reflect\
  SQL\'s data, not something it invented.\
  \
  Your goal: Confirm a draft SO whose customer, item, and price all trace back\
  to SQL --- and get a real SO out of it.\
  \
  Say it your way: \"order for XING RUI SDN BHD, 20kg CHICKEN BONELESS LEG\"\
  \
  Win conditions:\
  ☐ The draft shows SQL-sourced customer + item + price\
  ☐ Confirming creates an actual SO referencing that SQL data\
  ☐ MAIA doesn\'t invent a customer or item that isn\'t in SQL\
  \
  It should stop and ask you if: the item or customer name is ambiguous against SQL.\
  \
  If something breaks mid-way: MAIA states what it couldn\'t confirm rather than guessing.\
  \
  Sabotage bonus (+10): use a customer name that\'s slightly misspelled from the SQL record.\
  \
  Poke it: Does the price shown match what\'s actually in SQL for that customer?\
  \
  Loot to capture: the SO number, screenshot of the SQL-sourced fields.

  ---------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------
  MISSION M-03 --- The Weight That Actually Counts ★★ · 20 XP · \~12 min\
  Persona: Ben + Lai Covers: HP-03 · AS-01\
  \
  Precondition: Draft SO created before picking\
  \
  The situation: You ordered 10kg of CHICKEN BONELESS LEG for a customer. It\'s the warehouse that\
  decides what actually ships --- today that\'s 9.5kg. Everything downstream ---\
  DO, invoice, amount owed --- has to reflect 9.5kg, not the number you typed.\
  \
  Your goal: Get a DO and Invoice that both bill the real 9.5kg, not the\
  original 10kg order.\
  \
  Say it your way: \"order 10kg confirmed 9.5 actual\"\
  \
  Win conditions:\
  ☐ Draft SO created at 10kg first\
  ☐ Warehouse-confirmed weight (9.5kg) updates the SO before DO/Invoice generate\
  ☐ DO and Invoice both show 9.5kg and the recalculated amount --- never 10kg\
  \
  It should stop and ask you if: the confirmed weight is missing or looks invalid.\
  \
  If something breaks mid-way: it says what stage it\'s stuck at (waiting on\
  confirmation) rather than generating documents at the wrong weight.\
  \
  Sabotage bonus (+10): try to generate the DO/Invoice before the weight is confirmed.\
  \
  Poke it: What if the confirmed weight comes back higher than ordered, not lower?\
  \
  Loot to capture: SO/DO/Invoice numbers, screenshot showing 9.5kg on all three.

  ---------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------
  MISSION M-04 --- Match It or Ask ★ · 10 XP · \~10 min\
  Persona: Grace, finance/accounts Covers: HP-04 · SL-02\
  \
  Precondition: Outstanding invoice + matching bank line exist\
  \
  The situation: A payment just came in that clearly matches an outstanding\
  invoice --- same amount, a recognisable reference. You want MAIA to suggest it,\
  not silently post it.\
  \
  Your goal: Get MAIA\'s suggested match, confirm it, and see the invoice knock\
  off --- nothing posts before you say so.\
  \
  Say it your way: \"payment RM2000 came in from XS BBQ ENTERPRISE, check against invoice {no.}\"\
  \
  Win conditions:\
  ☐ MAIA suggests the correct invoice match automatically\
  ☐ Nothing updates until you confirm\
  ☐ On confirm, the invoice is knocked off correctly\
  \
  It should stop and ask you if: the match is ambiguous.\
  \
  If something breaks mid-way: it flags the uncertainty rather than posting a guess.\
  \
  Sabotage bonus (+10): upload a slip with no clear reference at all and see what it does.\
  \
  Poke it: Does it show you \*why\* it thinks this is the match?\
  \
  Loot to capture: the matched invoice number, screenshot of the confirm step.

  --------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-05 --- Thirty SKUs, One Upload ★ · 10 XP · \~10 min\
  Persona: David, owner Covers: HP-05, HP-05b · SL-03\
  \
  Precondition: Price template available. For the desktop variant: David logged into the desktop app as price controller.\
  \
  The situation: Prices moved on \~30 SKUs. Right now this lives in a WhatsApp\
  image you made with ChatGPT. You want it to actually live somewhere enforced.\
  Sometimes it\'s a bulk template upload; other times you (as price controller)\
  just want to bump one item\'s price ad-hoc from the desktop app.\
  \
  Your goal: Upload the price template and confirm a new SO picks up the\
  updated price immediately. Then, separately, adjust a single item\'s price\
  directly on the desktop app and confirm that takes effect too.\
  \
  Say it your way: \"updated 30 items price, upload now\" --- e.g. CHICKEN SBB TH RM14.00 → RM15.50/kg in the bulk template; CHICKEN BONELESS LEG RM10.70 → RM12.00/kg as the desktop ad-hoc adjustment\
  \
  Win conditions:\
  ☐ Template upload changes prices in MAIA\
  ☐ A new SO for a changed item uses the new price, not the old one\
  ☐ Desktop ad-hoc adjustment (as price controller) also updates the item\'s price immediately\
  \
  It should stop and ask you if: the template has errors (see M-32 for that path).\
  \
  If something breaks mid-way: it tells you which rows succeeded/failed.\
  \
  Sabotage bonus (+10): include one SKU that doesn\'t exist in SQL yet.\
  \
  Poke it: Does the old price linger anywhere --- quotes, drafts --- after the update? Does the desktop ad-hoc adjustment override a price that was just set by template upload?\
  \
  Loot to capture: the updated price on the new SO, screenshot of the upload result, screenshot of the desktop price-controller adjustment.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-06 --- The Customer Who Gets a Special Price ★ · 10 XP · \~8 min\
  Persona: Ben, Sales User Covers: HP-06 · SL-03\
  \
  Precondition: Customer has a customer-specific fixed price\
  \
  The situation: One of your customers has a fixed negotiated price you don\'t\
  want to have to remember and type every time.\
  \
  Your goal: Create an SO for that customer and item and see the fixed price\
  apply itself.\
  \
  Say it your way: \"order for MEATMEET TRADING, BRAZIL BEEF HONEY COMB\" (item\'s normal selling price is RM28.50/kg --- the customer\'s negotiated fixed price should be lower, e.g. RM26.00/kg)\
  \
  Win conditions:\
  ☐ The fixed customer-specific price auto-applies\
  ☐ You don\'t have to manually enter it\
  \
  It should stop and ask you if: the customer has no fixed price configured for that item.\
  \
  If something breaks mid-way: it asks for the price rather than guessing one.\
  \
  Sabotage bonus (+10): order a different item for the same customer that has no fixed price.\
  \
  Poke it: What happens if you try to manually override the fixed price?\
  \
  Loot to capture: the SO showing the auto-applied price.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------
  MISSION M-07 --- Under the Limit ★ · 10 XP · \~8 min\
  Persona: Ben, Sales User Covers: HP-07 · SL-04\
  \
  Precondition: Customer within credit limit\
  \
  The situation: A customer is well within their credit limit. This should be\
  completely unremarkable.\
  \
  Your goal: Submit the order and confirm it goes through with zero friction.\
  \
  Say it your way: \"order for RESTORAN APOLO - MIXED RICE, well within limit\"\
  \
  Win conditions:\
  ☐ SO submits normally, no block, no approval needed\
  \
  It should stop and ask you if: nothing --- this is the boring, correct path.\
  \
  If something breaks mid-way: n/a for this mission --- if it blocks here, that\'s a bug.\
  \
  Sabotage bonus (+10): submit it right at the exact limit boundary, not comfortably under.\
  \
  Poke it: Does it show you the customer\'s remaining credit anywhere?\
  \
  Loot to capture: the SO number, no-block confirmation screenshot.

  --------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------
  MISSION M-08 --- My Customers Only ★ · 10 XP · \~6 min\
  Persona: Ben, Sales User Covers: HP-08 · SL-05\
  \
  Precondition: Rep A owns customer set A\
  \
  The situation: You manage your own book of customers. You shouldn\'t need to\
  see, or be shown, anyone else\'s.\
  \
  Your goal: Log in as yourself and confirm you only see your own customer list.\
  \
  Win conditions:\
  ☐ Only your own customers appear when you list/search\
  \
  It should stop and ask you if: n/a.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): search using a customer name you know belongs to another rep.\
  \
  Poke it: Does a fuzzy/partial name search leak another rep\'s customer into results?\
  \
  Loot to capture: screenshot of your customer list.

  ---------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------
  MISSION M-09 --- Three Documents, One Order ★ · 10 XP · \~10 min\
  Persona: Ben, Sales User Covers: HP-09 · SL-07\
  \
  Precondition: Confirmed SO exists\
  \
  The situation: An order is confirmed. Now you need the paperwork --- SO, DO,\
  Invoice --- and you want to check each one before it goes anywhere.\
  \
  Your goal: Generate all three PDFs and confirm they\'re reviewable and correct\
  before sending.\
  \
  Win conditions:\
  ☐ All three PDFs render with correct header, customer, line items, totals\
  ☐ You can review before anything is sent\
  \
  It should stop and ask you if: any required field is missing.\
  \
  If something breaks mid-way: it tells you which document failed to generate and why.\
  \
  Sabotage bonus (+10): try to send before reviewing.\
  \
  Poke it: Do the three documents agree with each other on quantity and price?\
  \
  Loot to capture: the three PDFs / screenshots.

  ---------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------
  MISSION M-10 --- The Word \"Invoice\" Matters ★ · 10 XP · \~8 min\
  Persona: Ben, Sales User Covers: HP-10 · NS-04\
  \
  Precondition: Customer needs a document titled \"invoice\" for deposit\
  \
  The situation: A customer\'s financier won\'t accept a Sales Order for a\
  deposit --- they need a document with the word \"invoice\" on it.\
  \
  Your goal: Generate a Pro Forma Invoice from the SO and confirm it\'s\
  explicitly titled that.\
  \
  Win conditions:\
  ☐ A document titled \"Pro Forma Invoice\" is produced with correct order detail\
  \
  It should stop and ask you if: billing detail is missing (see M-38 for that path).\
  \
  If something breaks mid-way: it names what\'s missing rather than producing a blank doc.\
  \
  Sabotage bonus (+10): request it for a 100% deposit case, not the usual 30%.\
  \
  Poke it: Does the pro forma reconcile against the real invoice later?\
  \
  Loot to capture: the Pro Forma Invoice PDF.

  -------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------
  MISSION M-11 --- Reverse It, Return It (NOT AVAILABLE) ★★ · 20 XP · \~12 min\
  Persona: Grace, finance/accounts Covers: HP-11, HP-11b · SL-07\
  \
  Precondition: Original invoice exists; correction reason agreed. For HP-11b: a second invoice\
  with a pricing-only correction (no goods returned).\
  \
  The situation: An invoice needs correcting. Sometimes it\'s a real return ---\
  goods coming back, stock needs to reflect that. Sometimes it\'s just a billing\
  fix --- a pricing error, nothing physically comes back. MAIA treats these as\
  two different doctypes, and you need to pick the right one.\
  \
  Your goal: Raise a \*\*Sales Credit Note (SCN)\*\* for the goods-return case and\
  confirm it reverses billing AND returns stock. Then raise a \*\*Customer Credit\
  Note (CCN)\*\* for the pricing-only case and confirm it knocks off billing with\
  NO stock movement.\
  \
  Say it your way: \"need to CN invoice {no.}, weight correction, goods coming back\" ·\
  \"CN invoice {no.}, pricing only, nothing returned\"\
  \
  Win conditions:\
  ☐ SCN case: references the original invoice + reason; billing reversed; stock returned;\
  PDF viewable\
  ☐ CCN case: references the original invoice + reason; billing knocked off;\
  \*\*no stock movement recorded\*\*\
  ☐ You can tell which doctype you\'re issuing before you submit\
  \
  It should stop and ask you if: reason or original invoice reference is missing (see M-37).\
  \
  If something breaks mid-way: it explains what part of the reversal failed.\
  \
  Sabotage bonus (+10): try to CN an invoice that\'s already been fully credited once.\
  \
  Poke it: Does the CN number relate to the invoice number in any visible way?\
  (Numbering rule is still open --- note as Observation, not a bug.)\
  Does it clearly distinguish SCN from CCN, or is the difference easy to miss?\
  \
  Loot to capture: the SCN number + screenshot of stock return; the CCN number + screenshot showing no stock change.

  --------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-12 --- Pork Belly Slight ★★ · 20 XP · \~10 min\
  Persona: Ben, Sales User Covers: UP-01 · SL-01\
  \
  Precondition: Item wording differs from SQL\
  \
  The situation: A customer texts \"pork belly slight.\" You know they mean pork\
  belly slice, skin-on. MAIA doesn\'t have your years of context.\
  \
  Your goal: Forward the order and see whether MAIA maps it correctly or\
  honestly asks instead of guessing wrong.\
  \
  Say it your way: \"pork belly slight for OASIS CAFE\" (real client quote --- keep the actual garbled phrasing, pair it with any real customer)\
  \
  Win conditions:\
  ☐ MAIA maps to the correct SQL SKU, OR surfaces the line for manual selection\
  ☐ It never silently picks the wrong item\
  \
  It should stop and ask you if: it\'s not confident in the mapping.\
  \
  If something breaks mid-way: n/a --- the \"ask\" behaviour IS the correct failure mode here.\
  \
  Sabotage bonus (+10): invent an even more garbled item name and see where the line is.\
  \
  Poke it: Does it remember your correction for next time?\
  \
  Loot to capture: the resolved item on the draft, screenshot of any clarification prompt.

  -------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------
  MISSION M-13 --- 中文品名 ★★ · 20 XP · \~10 min\
  Persona: Ben, Sales User Covers: UP-02 · SL-01/SL-03\
  \
  Precondition: Chinese price-list name ≠ English SQL name\
  \
  The situation: Your price list has this item in Chinese. SQL has it in\
  English. No direct string match exists.\
  \
  Your goal: Order using the Chinese name and see MAIA resolve it --- matched or\
  clarified, never invented.\
  \
  Win conditions:\
  ☐ MAIA matches via a learned mapping, OR asks you to confirm the SKU\
  ☐ No phantom/wrong line appears\
  \
  It should stop and ask you if: the mapping isn\'t confident.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): mix Chinese and English in the same message.\
  \
  Poke it: Does it ask the same clarifying question every time, or does it learn?\
  \
  Loot to capture: screenshot of the resolved SKU.

  ----------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------
  MISSION M-14 --- Ten Ordered, Eight Real ★★ · 20 XP · \~12 min\
  Persona: Lai (warehouse) + Ben Covers: UP-03 · AS-01/SL-07\
  \
  Precondition: Draft SO at ordered weight\
  \
  The situation: Order was for 10kg of BEEF SHORTRIBS BONELESS. Warehouse actually picked 8kg --- a bigger\
  gap than usual. This is the exact scenario David worries about most.\
  \
  Your goal: Confirm 8kg picked and verify the DO and Invoice both bill 8kg,\
  never 10kg.\
  \
  Win conditions:\
  ☐ DO shows 8kg\
  ☐ Invoice shows 8kg and the recalculated amount\
  ☐ Neither document shows the original 10kg anywhere as the billed figure\
  \
  It should stop and ask you if: the gap between ordered and picked is unusually large --- does it flag this, or process silently?\
  \
  If something breaks mid-way: it tells you exactly what\'s pending.\
  \
  Sabotage bonus (+10): make the gap even bigger (10kg ordered, 5kg picked).\
  \
  Poke it: Is there any trace of who confirmed the 8kg?\
  \
  Loot to capture: DO + Invoice showing 8kg.

  -----------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------
  MISSION M-15 --- Not Your Name on the Slip ★★ · 20 XP · \~12 min\
  Persona: Grace, finance/accounts Covers: UP-04 · SL-02\
  \
  Precondition: Payer name ≠ customer name\
  \
  The situation: A payment slip just came in. The payer\'s name doesn\'t match\
  the invoice\'s customer name at all --- this happens constantly in real life.\
  \
  Your goal: Upload it and confirm MAIA does NOT auto-map it to the wrong\
  customer.\
  \
  Win conditions:\
  ☐ MAIA flags the mismatch\
  ☐ It asks you to select the correct customer\
  ☐ Nothing updates before you choose\
  \
  It should stop and ask you if: always, on any payer/customer name mismatch.\
  \
  If something breaks mid-way: n/a --- refusing to auto-match IS success here.\
  \
  Sabotage bonus (+10): use a payer name that\'s close-but-not-quite a real customer\'s name.\
  \
  Poke it: Does it suggest candidates, or just say \"no match\"?\
  \
  Loot to capture: screenshot of the mismatch flag.

  ----------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------
  MISSION M-16 --- Over the Limit ★★ · 20 XP · \~10 min\
  Persona: Ben, Sales User Covers: UP-05 · SL-04\
  \
  Precondition: Customer over limit / unpaid last invoice\
  \
  The situation: This order would push the customer well past their credit\
  limit --- and they still owe on the last invoice too (\"one invoice\" rule).\
  \
  Your goal: Try to submit it and confirm MAIA blocks it and routes to David.\
  \
  Win conditions:\
  ☐ Order is blocked, not just warned\
  ☐ David is notified as approver\
  ☐ It cannot become a DO without his approval\
  \
  It should stop and ask you if: n/a --- the block itself is the expected behaviour.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try resubmitting the exact same order twice.\
  \
  Poke it: What does the block message actually say to you as the rep?\
  \
  Loot to capture: screenshot of the block + notification to David.

  -------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------
  MISSION M-17 --- Approve Yourself? No. ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-06 · SL-04\
  \
  Precondition: Over-limit order pending\
  \
  The situation: There\'s a blocked order sitting there. You\'re tempted to just\
  approve it yourself and move on with your day.\
  \
  Your goal: Try to self-approve and confirm it\'s refused --- only David can clear it.\
  \
  Win conditions:\
  ☐ Self-approval is refused\
  ☐ Only David (credit controller) can approve\
  ☐ The override attempt is recorded somewhere\
  \
  It should stop and ask you if: n/a --- refusal IS the win condition.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try a second account that also isn\'t David.\
  \
  Poke it: Is there any role that looks like it could slip through as \"David enough\"?\
  \
  Loot to capture: screenshot of the refusal.

  ----------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------
  MISSION M-18 --- Sell It Cheap Anyway ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-07 · SL-03\
  \
  Precondition: Item has a min-price floor\
  \
  The situation: You want to close a deal fast and you\'re tempted to shave the\
  price below the floor David set. SHOULDER SKINLESS INCARLOPSA 无皮前腿 sells at RM23.00/kg --- you try RM21.00.\
  \
  Your goal: Try to enter a below-floor price and confirm it\'s blocked or flagged.\
  \
  Win conditions:\
  ☐ SO cannot proceed at the below-floor price\
  ☐ MAIA blocks or clearly flags it\
  \
  It should stop and ask you if: n/a --- the block IS the win.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try a price exactly one cent below the floor.\
  \
  Poke it: Can you get around it by editing the SO after creation?\
  \
  Loot to capture: screenshot of the block/flag.

  ------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------
  MISSION M-19 --- Invoice It Twice ★★ · 20 XP · \~10 min\
  Persona: Ben, Sales User Covers: UP-08 · SL-07\
  \
  Precondition: SO already has a submitted invoice\
  \
  The situation: An SO already has a submitted invoice. You (accidentally or\
  on purpose) try to invoice it again.\
  \
  Your goal: Confirm MAIA blocks the duplicate.\
  \
  Win conditions:\
  ☐ Second invoice attempt is blocked on submit\
  \
  It should stop and ask you if: n/a --- the block is the win.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try creating the duplicate from a slightly different screen/path.\
  \
  Poke it: Does the error tell you the existing invoice number?\
  \
  Loot to capture: screenshot of the duplicate block.

  ------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  MISSION M-20 --- More Than the DO Says ★★ · 20 XP · \~10 min\
  Persona: Ben, Sales User Covers: UP-09 · SL-01/SL-07\
  \
  Precondition: DO qty = 8 kg\
  \
  The situation: The DO says 8kg. You try to invoice 10kg against it --- this\
  would break the SQL constraint that invoice qty can never exceed DO qty.\
  \
  Your goal: Confirm MAIA prevents it.\
  \
  Win conditions:\
  ☐ Invoice cannot exceed DO qty\
  ☐ MAIA prevents/blocks the attempt\
  \
  It should stop and ask you if: n/a --- prevention is the win.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try invoicing exactly 0.01kg over the DO qty.\
  \
  Poke it: Does the error explain \*why\*, referencing the DO?\
  \
  Loot to capture: screenshot of the prevented action.

  ------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------
  MISSION M-21 --- Someone Else\'s Customer ★★ · 20 XP · \~8 min\
  Persona: Ben (playing as Rep B) Covers: UP-10 · SL-05\
  \
  Precondition: Customer belongs to rep A\
  \
  The situation: You\'re logged in as a different rep than the one who owns\
  this customer. You try to look them up anyway.\
  \
  Your goal: Confirm access is denied --- no customer, pricing, or outstanding\
  data leaks through.\
  \
  Win conditions:\
  ☐ Access denied\
  ☐ No data of the other rep\'s customer is shown at all\
  \
  It should stop and ask you if: n/a --- denial is the win.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try a partial/fuzzy search instead of the exact customer name.\
  \
  Poke it: Does the denial message accidentally confirm the customer \*exists\* even without showing data?\
  \
  Loot to capture: screenshot of the denial.

  -----------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------
  MISSION M-22 --- The Voice Note ★★ · 20 XP · \~10 min\
  Persona: Ben, Sales User Covers: UP-11 · SL-06/SL-07\
  \
  Precondition: Free-form / voice-note order\
  \
  The situation: Instead of typing, you send a voice note --- mixed language,\
  vague on details, the way a real customer message often arrives.\
  \
  Your goal: Confirm MAIA extracts a best-effort draft but never auto-submits\
  without your review.\
  \
  Win conditions:\
  ☐ MAIA produces a best-effort draft\
  ☐ Human review/confirm is required before any SO is created\
  \
  It should stop and ask you if: any field is unclear from the voice note.\
  \
  If something breaks mid-way: it asks rather than guessing and submitting.\
  \
  Sabotage bonus (+10): send a voice note with background noise or two orders mixed together.\
  \
  Poke it: How much of the message does it actually get right without help?\
  \
  Loot to capture: the draft it extracted, screenshot.

  ----------------------------------------------------------------------------------------------

  --------------------------------------------------------------

  --------------------------------------------------------------

MISSION M-24 --- Not Yet Confirmed ★★ · 20 XP · \~10 min\
Persona: Ben, Sales User Covers: UP-13 · SL-01/AS-01

Precondition: Draft SO not yet confirmed

The situation: You\'ve created a draft SO. The weight hasn\'t been confirmed\
yet. You want to check nothing has leaked into SQL prematurely.

Your goal: Check SQL state before confirming and verify nothing pushed yet.

Win conditions:\
☐ Nothing is pushed to SQL until the SO is confirmed at final weight

It should stop and ask you if: n/a.

If something breaks mid-way: n/a --- if anything appears in SQL early, that\'s a P1.

Sabotage bonus (+10): leave the draft sitting for an unusually long time before confirming.

Poke it: Is there any visible \"pending\" state that reassures you nothing\'s live yet?

Loot to capture: screenshot showing SQL unaffected pre-confirm.

  --------------------------------------------------------------

  --------------------------------------------------------------

  ---------------------------------------------------------------------------------------
  MISSION M-26 --- Edit SQL Directly? ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-15 · SL-01\
  \
  Precondition: ---\
  \
  The situation: You want to quickly fix a customer\'s name or credit info\
  straight in MAIA, the way you might in a normal app.\
  \
  Your goal: Try to edit the master record and confirm MAIA doesn\'t overwrite SQL.\
  \
  Win conditions:\
  ☐ MAIA does not overwrite SQL as master\
  ☐ Edits route to SQL / are not treated as source of truth\
  \
  It should stop and ask you if: n/a.\
  \
  If something breaks mid-way: n/a. If the edit silently overwrites SQL, this is a P1.\
  \
  Sabotage bonus (+10): try editing a field that seems harmless (like a phone number).\
  \
  Poke it: Does it tell you where the edit \*should\* happen instead?\
  \
  Loot to capture: screenshot of the behaviour.

  ---------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------
  MISSION M-27 --- The Order With No Quantity ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-16 · SL-07/SL-01\
  \
  Precondition: Item master loaded\
  \
  The situation: A customer message names the item but never says how much.\
  \
  Your goal: Forward it and confirm MAIA asks for the missing quantity instead\
  of guessing.\
  \
  Say it your way: \"AGF wants pork belly skin-on, deliver PJ\" (no qty)\
  \
  Win conditions:\
  ☐ MAIA asks for the missing quantity/UOM\
  ☐ The draft stays incomplete until supplied\
  \
  It should stop and ask you if: quantity is missing --- always.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): supply a quantity with no unit (\"want 5\").\
  \
  Poke it: Does it guess a \"usual\" quantity for this customer instead of asking?\
  \
  Loot to capture: screenshot of the clarification prompt.

  -----------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------
  MISSION M-28 --- Negative Kilos ★★ · 20 XP · \~8 min\
  Persona: Lai, warehouse Covers: UP-17 · AS-01\
  \
  Precondition: Draft SO for kg-based item\
  \
  The situation: You\'re confirming the actual picked weight for CHICKEN SBB TH and you fat-finger\
  an invalid value.\
  \
  Your goal: Enter \"-3 kg\" or \"ten box\" and confirm MAIA rejects it cleanly.\
  \
  Win conditions:\
  ☐ MAIA rejects the invalid value\
  ☐ It asks for a valid numeric weight/UOM\
  ☐ No amount is recalculated from the invalid input\
  \
  It should stop and ask you if: input isn\'t a valid number/UOM.\
  \
  If something breaks mid-way: n/a --- rejection is the win.\
  \
  Sabotage bonus (+10): try a value with a stray decimal or currency symbol.\
  \
  Poke it: Does the error message actually explain what a valid value looks like?\
  \
  Loot to capture: screenshot of the rejection.

  ---------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------
  MISSION M-29 --- Partial Payment ★★ · 20 XP · \~10 min\
  Persona: Grace, finance/accounts Covers: UP-18 · SL-02\
  \
  Precondition: Customer has outstanding\
  \
  The situation: A customer only paid part of what they owe --- RM2,000 against\
  RM5,000 outstanding.\
  \
  Your goal: Confirm the match and check the remaining balance is shown correctly.\
  \
  Win conditions:\
  ☐ RM2,000 is allocated only after confirm\
  ☐ Remaining RM3,000 outstanding is shown\
  \
  It should stop and ask you if: the partial amount is ambiguous which invoice it applies to.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try a partial payment that\'s an odd, non-round number.\
  \
  Poke it: Does the outstanding figure update everywhere it\'s shown, consistently?\
  \
  Loot to capture: screenshot of the remaining balance.

  ----------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-30 --- The SQL Blackout ★★★ BOSS FIGHT · 35 XP · \~15 min\
  Persona: David, owner Covers: UP-19 · SL-01/SL-07\
  \
  Precondition: SQL sync temporarily down\
  \
  The situation: This one\'s claimed attention before --- SQL vendor access is a\
  live, unresolved go-live blocker for this account (VOC-028). Simulate SQL\
  being temporarily unreachable mid-submit.\
  \
  Your goal: Submit or refresh a record while sync is down, and confirm MAIA\
  never falsely claims success.\
  \
  Win conditions:\
  ☐ MAIA shows \"sync failure / pending retry\"\
  ☐ It does NOT show the record as successfully updated in SQL when it isn\'t\
  \
  It should stop and ask you if: n/a --- showing the true failure state IS the win.\
  \
  If something breaks mid-way: if MAIA shows false success here, treat it as a \*\*P1\*\* and report with full evidence --- this exact failure mode is the account\'s single biggest named risk.\
  \
  Sabotage bonus (+15): try the same action twice while sync is down --- does it queue correctly or duplicate?\
  \
  Poke it: What does the retry actually do once SQL comes back?\
  \
  Loot to capture: screenshots of both the outage state and the recovery.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------
  MISSION M-31 --- No Price Group ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-20 · SL-03\
  \
  Precondition: Customer has no group\
  \
  The situation: You\'re creating an order for a customer who was never\
  assigned a wholesale/retail price group.\
  \
  Your goal: Try to price the order and confirm MAIA flags the missing group.\
  \
  Win conditions:\
  ☐ MAIA flags the missing price group/rule\
  ☐ Requires assignment or an authorised price decision before proceeding\
  \
  It should stop and ask you if: the customer has no group --- always.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): try to force a price in anyway.\
  \
  Poke it: Who does it say can resolve this --- you, or David?\
  \
  Loot to capture: screenshot of the flag.

  ------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------
  MISSION M-32 --- The Broken Template ★★ · 20 XP · \~10 min\
  Persona: David, owner Covers: UP-21 · SL-03\
  \
  Precondition: Price upload active\
  \
  The situation: This price template has real problems --- a missing SKU column,\
  an invalid SKU, wrong UOM, a negative price. You want to see it fail cleanly,\
  not corrupt existing prices.\
  \
  Your goal: Upload it and confirm MAIA rejects the bad rows without touching\
  existing valid prices.\
  \
  Win conditions:\
  ☐ Invalid rows/file rejected with row-level errors\
  ☐ Existing prices are NOT overwritten by the bad data\
  \
  It should stop and ask you if: n/a --- rejection with clear errors is the win.\
  \
  If something breaks mid-way: if valid existing prices get corrupted, that\'s a P2.\
  \
  Sabotage bonus (+10): mix a few valid rows in among the bad ones.\
  \
  Poke it: Do the valid rows in a mixed file get applied, or does one bad row kill the whole upload?\
  \
  Loot to capture: screenshot of the row-level errors.

  -----------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-33 --- Same SKU, Two Prices ★★ · 20 XP · \~8 min\
  Persona: David, owner Covers: UP-22 · SL-03\
  \
  Precondition: Price list exists\
  \
  The situation: The same SKU appears twice in your template, at two different\
  prices --- a copy-paste mistake waiting to happen. E.g. CHICKEN BONELESS LEG (C0614) listed once at RM10.70 and again at RM12.00 in the same upload.\
  \
  Your goal: Upload it and confirm MAIA flags the conflict rather than picking one silently.\
  \
  Win conditions:\
  ☐ Duplicate/conflicting rows are flagged\
  ☐ Correction is required before the update is accepted\
  \
  It should stop and ask you if: n/a --- flagging is the win.\
  \
  If something breaks mid-way: if it silently picks one price, that\'s a P2.\
  \
  Sabotage bonus (+10): make the two prices only a few cents apart, not obviously different.\
  \
  Poke it: Does it tell you which two rows conflict?\
  \
  Loot to capture: screenshot of the conflict flag.

  -------------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-35 --- Don\'t Make It Up ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-24 · SL-01/SL-03\
  \
  Precondition: Item has no latest data\
  \
  The situation: You ask MAIA for the price/stock of an item whose data in SQL\
  is stale or missing entirely.\
  \
  Your goal: Confirm it names what\'s missing rather than inventing a number.\
  \
  Win conditions:\
  ☐ MAIA states the data is unavailable/stale\
  ☐ It does NOT invent a price or stock figure\
  \
  It should stop and ask you if: n/a --- honesty about the gap is the win.\
  \
  If something breaks mid-way: if it invents a number, that\'s a \*\*P1\*\* --- reliability of every quoted figure depends on this never happening.\
  \
  Sabotage bonus (+10): ask the same question three different ways and see if the answer stays honest each time.\
  \
  Poke it: Does it tell you \*when\* the data was last updated?\
  \
  Loot to capture: screenshot of the \"data unavailable\" response.

  ----------------------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------
  MISSION M-36 --- Not Your Rights ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-25 · SL-07/SL-04\
  \
  Precondition: Rep has no CN rights\
  \
  The situation: You (a regular sales rep) try to issue a Credit Note on your\
  own --- something that should require finance/management rights.\
  \
  Your goal: Confirm MAIA blocks you or routes it to approval instead.\
  \
  Win conditions:\
  ☐ MAIA blocks, or routes to finance/management approval\
  ☐ You cannot independently issue the CN\
  \
  It should stop and ask you if: n/a --- blocking/routing is the win.\
  \
  If something breaks mid-way: if you succeed in issuing it solo, that\'s a P2.\
  \
  Sabotage bonus (+10): try issuing it for a customer that\'s YOUR OWN customer, arguing it should be fine.\
  \
  Poke it: Who does it say needs to approve it?\
  \
  Loot to capture: screenshot of the block/route.

  ------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------
  MISSION M-37 --- The Empty Credit Note ★★ · 20 XP · \~8 min\
  Persona: Grace, finance/accounts Covers: UP-26 · SL-07\
  \
  Precondition: Invoice exists\
  \
  The situation: You start a Credit Note but leave the original invoice\
  reference and reason blank --- maybe you got interrupted.\
  \
  Your goal: Try to submit it and confirm MAIA refuses until both are supplied.\
  \
  Win conditions:\
  ☐ Submission is refused\
  ☐ MAIA asks for original invoice + correction reason before proceeding\
  \
  It should stop and ask you if: reference or reason is missing --- always.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): fill in only the reason, leave the invoice reference blank, and vice versa.\
  \
  Poke it: Does the error tell you exactly which field is missing?\
  \
  Loot to capture: screenshot of the refusal.

  ----------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------
  MISSION M-38 --- No Billing Detail ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-27 · NS-04/SL-07\
  \
  Precondition: Customer lacks billing detail\
  \
  The situation: A customer needs a Pro Forma Invoice, but their billing\
  address/detail was never entered.\
  \
  Your goal: Try to generate it and confirm MAIA flags the gap instead of\
  producing a broken document.\
  \
  Win conditions:\
  ☐ MAIA flags the missing billing detail\
  ☐ It does NOT generate a blank/invalid proforma\
  \
  It should stop and ask you if: billing detail is missing --- always.\
  \
  If something breaks mid-way: n/a.\
  \
  Sabotage bonus (+10): fill in a partial billing address (just a city, no street) and see where the line is.\
  \
  Poke it: Does it tell you exactly which field is missing?\
  \
  Loot to capture: screenshot of the flag.

  --------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------
  MISSION M-39 --- Right Agent, Right Customer ★ · 10 XP · \~8 min\
  Persona: Ben, Sales User Covers: HP-12 · SL-08\
  \
  Precondition: Customer assigned to Ben in SQL\
  \
  The situation: Every customer in SQL has an assigned sales agent --- you want\
  to confirm that mapping actually shows up correctly in Maya.\
  \
  Your goal: Look up a customer known to be under Ben\'s agent code and\
  confirm Maya shows the right responsible agent.\
  \
  Win conditions:\
  ☐ Maya shows Ben as the responsible agent\
  ☐ The customer appears in Ben\'s own customer list (ties to SL-05)\
  \
  It should stop and ask you if: n/a.\
  \
  If something breaks mid-way: if the wrong agent shows, that\'s a P2.\
  \
  Sabotage bonus (+10): look up a customer with no assigned agent --- does it correctly default to David?\
  \
  Poke it: Does the agent field match exactly what\'s in SQL\'s \"Maintain Customer\" screen?\
  \
  Loot to capture: screenshot of the customer\'s agent field.

  ----------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------
  MISSION M-40 --- Not CK\'s to Touch ★★ · 20 XP · \~8 min\
  Persona: Ben, Sales User Covers: UP-28 · SL-08\
  \
  Precondition: Customer is one of CK\'s 3 driver-managed customers\
  \
  The situation: CK is a third-party driver, not staff --- he has 3 customers\
  under his own agent code purely for commission tracking. These should never\
  show up in the normal sales pipeline.\
  \
  Your goal: Try to find or interact with one of CK\'s 3 customers through\
  normal sales workflows and confirm they\'re excluded.\
  \
  Win conditions:\
  ☐ CK\'s customers don\'t surface as belonging to Ben/Quinny/David\'s active pipeline\
  \
  It should stop and ask you if: n/a.\
  \
  If something breaks mid-way: if one of CK\'s customers shows up as a normal sales\
  lead, that\'s a P3 --- flag for scoping, not a functional break.\
  \
  Sabotage bonus (+10): try searching by one of CK\'s customer names directly.\
  \
  Poke it: Does Maya distinguish CK\'s agent code from the real sales team\'s at all?\
  \
  Loot to capture: screenshot showing the exclusion (or lack of it).

  ---------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------
  MISSION M-41 --- Look, Don\'t Book ★ · 10 XP · \~8 min\
  Persona: Ben, Sales User (outdoor/field) Covers: HP-13, UP-29 · AS-04/AS-04b\
  \
  Precondition: Customer + item exist; In the field, no admin access\
  \
  The situation: You\'re out in the field, away from the desk. You want to check\
  a customer\'s outstanding balance and an item\'s price --- but you should NOT be\
  able to create an order from here; that goes through office admin via WhatsApp.\
  \
  Your goal: Query price/outstanding/customer info successfully, then try to\
  create an order directly and confirm it\'s refused.\
  \
  Win conditions:\
  ☐ MAIA returns the requested price/outstanding/customer info, read-only\
  ☐ Attempting to create a Sales Order from this context is NOT allowed\
  \
  It should stop and ask you if: n/a --- refusal on the order-creation attempt is the win.\
  \
  If something breaks mid-way: if you succeed in creating an order directly from\
  the field context, that\'s a P2 --- this contradicts the confirmed real workflow\
  (sales relay via WhatsApp to admin).\
  \
  Sabotage bonus (+10): try phrasing the order attempt like a normal query (\"book 5 boxes for customer X\").\
  \
  Poke it: Does it tell you to relay via WhatsApp to admin, or just refuse silently?\
  \
  Loot to capture: screenshot of the successful query + the refused order attempt.

  --------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-42 --- Last Price, Not Last Ten ★ · 10 XP · \~8 min\
  Persona: Ben, Sales User Covers: HP-14, UP-30 · NS-08\
  \
  Precondition: Customer has at least one prior invoice for the item; Item has no prior invoice for this customer\
  \
  The situation: You\'re quoting a regular customer and want to check what they\
  were last charged for this item before entering a price.\
  \
  Your goal: Open the price field for an item with prior invoice history and\
  confirm the last invoiced price shows inline. Then try an item/customer pair\
  with NO history and confirm nothing is invented.\
  \
  Win conditions:\
  ☐ For an item WITH history: last invoiced price shows inline in the dropdown\
  ☐ For an item WITHOUT history: no price is shown/fabricated --- it\'s stated as unavailable\
  \
  It should stop and ask you if: n/a.\
  \
  If something breaks mid-way: if a price is shown for an item with zero prior\
  history, that\'s a P1 --- this is a \"don\'t invent data\" boundary, same severity\
  class as UP-24/UP-35.\
  \
  Sabotage bonus (+10): check the same item for two different customers --- does the price differ correctly?\
  \
  Poke it: Does it show a transaction date or just the price? (It should just be the price --- a date/multi-item view is explicitly out of scope, don\'t log its absence as a bug.)\
  \
  Loot to capture: screenshot of both cases (with and without history).

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-43 --- Everyone Who Should Know ★ · 10 XP · \~10 min\
  Persona: CJ + Grace (finance) --- ⚠️ NEEDS TWO PEOPLE Covers: HP-15, UP-31 · NS-06\
  \
  Precondition: Invoice overdue for a customer under Ben; a second overdue invoice under a rep OUTSIDE CJ\'s team (to prove the scoping). Multiple reps have overdue invoices.\
  \
  ⚠️ Coordinate before you start: one of you plays CJ (see §6), the\
  other checks what Finance/David receive. You cannot verify the routing rule solo ---\
  the whole point is that different roles see different things.\
  \
  The situation: An invoice has gone overdue. Multiple people are supposed to\
  be notified --- but a Sales Manager should only see his own reports\' overdue\
  accounts, not everyone\'s.\
  \
  Your goal: Let an invoice go overdue for a customer under Ben, and confirm\
  Finance, Ben, CJ, and David all get notified --- but CJ\'s view stays scoped to Ben and Quinny only.\
  \
  Win conditions:\
  ☐ Finance, Ben (responsible rep), Sales Manager, and David all receive the alert\
  ☐ Sales Manager\'s overdue view shows only Ben\'s and Quinny\'s accounts, not other reps\'\
  \
  It should stop and ask you if: n/a.\
  \
  If something breaks mid-way: if CJ sees overdue accounts outside\
  his own reports, that\'s a P3 (data-scope leak, not financial-impact).\
  \
  Sabotage bonus (+10): let two invoices under different reps go overdue simultaneously and check both alert sets.\
  \
  Poke it: How quickly after the due date does the alert actually fire?\
  \
  Loot to capture: screenshots of each recipient\'s notification.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-44 --- A Note on the File ★ · 10 XP · \~6 min\
  Persona: Ben, Sales User Covers: HP-16, UP-32 · AS-05/SL-05\
  \
  Precondition: Customer profile exists; Customer belongs to rep A\
  \
  The situation: You just had a call with one of your own customers about a\
  delivery delay. You want to log it against their profile for next time.\
  \
  Your goal: Add a note/event/task to your own customer\'s profile, then confirm\
  another rep can\'t see it on a customer that isn\'t theirs.\
  \
  Win conditions:\
  ☐ Note saves and is visible on your own customer\'s activity log\
  ☐ A different rep cannot view this note on a customer they don\'t own\
  \
  It should stop and ask you if: n/a.\
  \
  If something breaks mid-way: if another rep can see your note on your customer,\
  that\'s a P2 (same boundary as SL-05).\
  \
  Sabotage bonus (+10): try editing a customer\'s address or phone number in the same screen --- this should NOT be confirmed as working (master-field writability is still unlocked, AS-05 §4b) --- note what actually happens as an Observation, not a bug either way.\
  \
  Poke it: Does the note show who logged it and when?\
  \
  Loot to capture: screenshot of the saved note + the other rep\'s denied view.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------
  MISSION M-45 --- The Formal Customer ★ · 10 XP · \~10 min\
  Persona: Ben, Sales User Covers: HP-17 · AS-08\
  \
  Precondition: One of the 3 confirmed PO-issuing customers has sent a PO document\
  \
  The situation: Most customers just WhatsApp you an order. But a handful --- 3\
  confirmed accounts --- do things properly and issue a real Purchase Order\
  document. You want to get that PO turned into a confirmed order without\
  retyping everything by hand.\
  \
  Your goal: Upload the customer\'s PO to MAIA, review the matched customer and\
  item lines, and confirm a CPO (converted Sales Order) gets created.\
  \
  Say it your way: \"PO from customer, please process\" (this is a rare, low-volume flow --- only 3 accounts do this, so don\'t over-invent variety here)\
  \
  Win conditions:\
  ☐ MAIA matches the PO to the correct customer record\
  ☐ MAIA matches the PO\'s line items to the correct SKUs\
  ☐ You review the match before anything is submitted\
  ☐ A confirmed SO (CPO) is created referencing the matched data\
  \
  It should stop and ask you if: the customer or an item can\'t be confidently matched from the PO.\
  \
  If something breaks mid-way: it tells you what it matched, what it couldn\'t, and asks how to proceed --- it doesn\'t guess a customer or item.\
  \
  Sabotage bonus (+10): use a PO with an item name that doesn\'t cleanly match any SKU and see if MAIA invents a match instead of asking.\
  \
  Poke it: Does it show you a diff between what the PO says and what it matched, so you can catch a wrong match before confirming?\
  \
  Loot to capture: the CPO/SO number, screenshot of the match-review step.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------

**3. Boss Fights**

  --------------------------------------------------------------
  **\`\`**

  --------------------------------------------------------------

**M-30 --- The SQL Blackout** (see Mission Cards above). This area hasn\'t claimed a tester yet --- be the first.

+:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ⚠️ **Before the session, someone must decide how M-30 actually gets run.** It needs SQL sync to *fail* mid-submit --- you can\'t just wish that into existence during a 90-minute window on a live environment. Either the dev team simulates the outage (pull the connection, point at a dead endpoint, kill the sync worker), or the mission can\'t run and should be scheduled separately. |
|                                                                                                                                                                                                                                                                                                                                                                                               |
| **Do not skip it silently.** This is the single failure mode the client named as an account-killer --- a false \"synced!\" when nothing synced. If it can\'t be tested on the day, say so out loud and book it, rather than letting it quietly fall off the list. \[NEEDS INPUT: who arranges the simulated outage, and when\]                                                                |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**4. Side Quests & Chaos Cards**

**Side Quests** (open prompts --- no win-condition checklist, just go explore):

*As David:* What would irritate you most about a system that\'s supposed to remove you as the bottleneck, but keeps asking you to approve things? Go find where that line actually is.

*As Ben:* A regular customer messages you something completely off-script --- not an order, just a complaint or a random question. What does MAIA do with it?

*As Grace:* Try reconciling a payment that arrives with zero reference information at all. How far does MAIA get before it needs you?

*As Lai:* Try confirming a pick where you genuinely picked MORE than what was ordered, not less. Does anything treat that differently from underpicking?

*As CJ:* Go looking for a reason to complain that you\'re being shown someone else\'s problem. Can you see any account that isn\'t Ben\'s or Quinny\'s?

**🔥 The Adoption Side Quest --- the most valuable thing you can do today**

+:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Grace, the person who will actually use this every day, told us plainly: routing her existing manual work *through* MAIA isn\'t obviously a win. She\'d still upload each slip. She\'d still pick which invoice to knock off. Lai may just keep using his own paper pick list. **Two of the three people this product depends on are not yet convinced.** |
|                                                                                                                                                                                                                                                                                                                                                           |
| So, whichever persona you\'re playing, once per session ask yourself honestly:                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                                                           |
| **\"If this were my actual job --- would I use this tomorrow, or would I quietly go back to the old way?\"**                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                                                                                           |
| Then write down *the specific moment* that made you think that. Not \"the UI is clunky\" --- the exact step where you felt it was faster to just do it yourself. That answer is worth more to this project than any bug you find today. Log it as an **Observation**, tagged ADOPTION.                                                                    |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Chaos Card Deck** (play any card on any mission for bonus XP as noted on the mission, or +10 generic if unspecified):

**Typo\'d or ambiguous item name** --- reuse a garbled name from a different mission on a new order (\"chicken bonless leg\", \"shoulder skinles\").

**Two requests in one message** --- \"same as last week for xing rui but double the chicken leg, and also update their delivery address.\"

**Change your mind right after confirming** --- confirm an SO, then immediately try to cancel/modify it.

**An unreadable pick-list upload** --- upload a blurry, skewed, or partially-cut scan of the annotated pick-list PDF. Does MAIA read a wrong quantity off it, or does it say it can\'t read it? *(This is the highest-value chaos card in the deck --- the real warehouse will hand back creased, marker-scrawled paper, not a clean scan.)*

**\"Same as last time\" with no other detail** --- give MAIA nothing else to go on and see if it fabricates specifics.

**Interrupting mid-flow** --- start a price upload, then immediately ask an unrelated question before it finishes.

**Mixed-language message** --- order in a mix of English, Mandarin, and Malay in one message (this is normal here, not an edge case --- their team genuinely talks this way).

**A voice-note-style rambling message** --- long, meandering, buries the actual ask in the middle.

**Wrong customer, right item** --- deliberately reference the wrong customer name and see if it\'s caught.

**A number that\'s technically valid but absurd** --- order 10,000kg of one SKU and see what happens (not a system limit test, a sanity-check test).

**Retry storm** --- submit the same action three times in quick succession.

**The disappearing confirm** --- start confirming a weight update, then go silent for a while before finishing it.

**Two units, one order** --- their items are priced by KG, but the team talks in boxes/pieces too (\"3 boxes chicken chop\"). Order in a unit the system doesn\'t price in and see whether it converts, asks, or silently guesses.

**5. Field Manual**

**How to log a result:** mission code · persona · what you typed (verbatim) · what happened · what you expected · severity (P1--P4, or OBSERVATION) · evidence link · chaos cards played.

**Three things you can log --- know the difference:**

**Bug** --- MAIA did something it shouldn\'t, or failed to do something it should. Has a severity (P1--P4).

**Observation** --- not a bug, but it confused you *as the persona*. Out-of-bounds gaps go here. No severity.

**ADOPTION Observation** --- the moment you\'d have given up and done it the old way. Tag these explicitly; see the Adoption Side Quest above. **These are the highest-value thing in this run.**

**Evidence rules:** screenshots + every document ID created (SO/DO/Invoice/SCN/CCN/CPO number) + timestamps.

**Test Data Kit (updated 2026-07-14 --- real SQL export received):**

**Real customers:** XS BBQ ENTERPRISE, XING RUI SDN BHD, RESTORAN TONG YANG, Restoran Wang Chuang sarawak mee, OASIS CAFE, Hwa Lyuk Korean Grill Puchong, RESTORAN APOLO - MIXED RICE, MUNCHY FOOD PROCESSING SDN. BHD., MEATMEET TRADING, CHING GROUP SDN BHD (from a 700+ row customer export --- pick any real account for missions that don\'t require a specific agent-ownership fact).

**Real items:** BEEF SHORTRIBS BONELESS (B1108), BRAZIL BEEF HONEY COMB (B3406, RM28.50/kg), CHICKEN SBB TH (C0214, RM14.00/kg), CHICKEN BONELESS LEG (C0614, RM10.70/kg), WHOLE CHICKEN FREE SIZE 全鸡（冻）(C1210, RM10.50/kg), JC WHOLE LEG TH (C1814, RM13.50/kg), SHOULDER SKINLESS INCARLOPSA 无皮前腿 (P0101I, RM23.00/kg) --- from a 459-row item export.

**Still \[GAP: NEEDS CLIENT INPUT\]** --- not resolvable from this export: a real credit-limit figure per customer, a real payer-mismatch example, a sample GRN, a sample price-update template, and confirmation of which specific customers are assigned to Ben / Quinny\'s agent codes vs CK\'s 3 excluded ones (SL-08) --- the export shown didn\'t include the Agent field, so mission M-39/M-40 still need a real example pulled with that field visible before running. Also still needed for M-45 (AS-08): which of the 700+ customers are the 3 confirmed PO-issuers, and a sample real PO document to run the mission against --- not identifiable from the exports shown.

Tag every record you create with a UAT- marker in remarks/reference fields where possible, so cleanup after the run is easy.

**Scoring & Badges:**

Mission XP: ★ = 10, ★★ = 20, ★★★ = 35.

Bug bounty: P1 = 50, P2 = 30, P3 = 15, P4 = 5. First unique finder gets it.

Chaos Card played meaningfully: +10. Sabotage bonus: as listed on the card/mission.

Badges: **First Blood** (first bug of the run) · **Method Actor** (all missions, zero copy-pasted phrasings) · **Chaos Agent** (5+ chaos cards) · **Boss Slayer** (M-30 survived) · **Cartographer** (3+ useful Observations) · **Truth Teller** (an ADOPTION observation that changes what we build) · **Completionist** (100%).

**Help:**\[NEEDS INPUT: who testers ask questions of during the window\] --- with only 70 minutes of real testing time, a tester stuck for 10 minutes has lost 15% of their run. Name a person before the session starts.

**6. Appendix --- Coverage Map**

  ----------------------- --------------------
  Source test case        Mission code(s)

  HP-01                   M-01

  HP-02                   M-02

  HP-03                   M-03

  HP-04                   M-04

  HP-05, HP-05b           M-05

  HP-06                   M-06

  HP-07                   M-07

  HP-08                   M-08

  HP-09                   M-09

  HP-10                   M-10

  HP-11, HP-11b, UP-33    M-11

  UP-01                   M-12

  UP-02                   M-13

  UP-03                   M-14

  UP-04                   M-15

  UP-05                   M-16

  UP-06                   M-17

  UP-07                   M-18

  UP-08                   M-19

  UP-09                   M-20

  UP-10                   M-21

  UP-11                   M-22

  UP-13                   M-24

  UP-15                   M-26

  UP-16                   M-27

  UP-17                   M-28

  UP-18                   M-29

  UP-19                   M-30

  UP-20                   M-31

  UP-21                   M-32

  UP-22                   M-33

  UP-24                   M-35

  UP-25                   M-36

  UP-26                   M-37

  UP-27                   M-38

  HP-12                   M-39

  UP-28                   M-40

  HP-13, UP-29            M-41

  HP-14, UP-30            M-42

  HP-15, UP-31            M-43

  HP-16, UP-32            M-44

  HP-17                   M-45
  ----------------------- --------------------

  --------------------------- --------------------------------------------------------------------------------------
  Scope Lock item             Win conditions appear in

  SL-01                       M-02, M-12, M-13, M-20, M-24, M-26, M-30, M-35

  SL-02                       M-04, M-15, M-29

  SL-03                       M-05, M-06, M-13, M-18, M-31, M-32, M-33, M-35

  SL-04                       M-07, M-16, M-17, M-36

  SL-05                       M-08, M-21, M-44

  SL-06                       M-01, M-22

  SL-07                       M-02, M-03, M-09, M-11, M-14, M-19, M-20, M-22, M-24, M-30, M-36, M-37, M-38

  SL-08                       M-39, M-40

  AS-01                       M-03, M-14, M-24, M-28

  AS-04 / AS-04b              M-41

  AS-05 (activity log only)   M-44

  NS-04                       M-10, M-38

  NS-05                       (generic approval route, no dedicated mission --- see UAT Checklist §4a \"PARTIAL\")

  NS-06                       M-43

  NS-08                       M-42

  AS-08                       M-45 (happy path only)
  --------------------------- --------------------------------------------------------------------------------------

**Not tested this round (per Scope Lock/UAT §4b --- do not log as bugs, Observation only if genuinely confusing as a persona):** AS-02 (catalogue --- creation process is David-only knowledge), AS-03 (CN numbering rule), AS-05 master-data fields (address/phone/billing --- separate from the activity log, which IS tested in M-44), AS-06 (dashboard), AS-07 (quotation/price-lock --- real usage confirmed low), NS-02 (GRN, parked), NS-03 (aging alert, mechanism undefined), **NS-07 (POD --- 🚫 client conflict, not \"not yet built\"; do not attempt to test or report its absence as a bug)**, NS-09/NS-10/NS-11 (stock-expiry sales-inclusion, backup coverage, warehouse device model --- all need David\'s decision), and all explicit Out-of-Scope items (AP recon, QR settlement, delivery trip, WMS, volume pricing, B2C app, blasting). **No missions test OOS behavior at all (removed 2026-07-14)** --- testers shouldn\'t spend time probing what the product deliberately refuses to do; the boundary is documented here and in Part A §5 instead.

**Quality Gate --- self-check against the generator prompt**

~~Every source test case (HP-01...17 incl. HP-05b/HP-11b, UP-01...33 = 52 cases total, per UAT Checklist v3) maps to ≥1 mission (Appendix table above), **except UP-23, UP-12, and UP-14** (all removed 2026-07-14): UP-23 is a phone-number-shared-by-two-branches ambiguity carried over from an earlier ChatGPT-merged checklist with no confirmed real instance in the VoC, Grace\'s call, or the actual customer export; UP-12/UP-14 tested OOS (blasting, QR settlement) refusal behavior, which isn\'t worth tester time confirming a deliberate boundary. All three still exist in the UAT Checklist itself; only the gamified missions were cut. Note: not every remaining source case has a 1:1 mission --- some (e.g. HP-05b, HP-11b, UP-33) are covered as sabotage/poke-it variants within an existing mission rather than a separate mission card; flagged here for transparency, not a gap.~~

~~Every observable acceptance criterion from LOCKED scope appears as a win condition (SL-01...08, AS-01, AS-04/AS-04b, AS-05 activity log, NS-04, NS-06, NS-08 --- 16 testable items total, up from 10 in v1) --- plus AS-08 (M-45), a deliberate happy-path-only exception since it\'s AGREED IN PRINCIPLE, not LOCKED (documented in the UAT Checklist §4c and here).~~

~~Every out-of-scope/superseded item appears in Out of Bounds (Part A §5). No dedicated OOS missions this version (M-23/M-25 removed 2026-07-14) --- not worth tester time confirming a deliberate refusal.~~

Recorded-failure Boss Fights --- **\[GAP: none exist yet; substituted one risk-based Boss Fight, flagged as such\]**.

~~Every primary user role (David, Ben, Grace, **CJ**, Lai) has a persona card; every mission\'s persona exists. *(Sales Manager added 2026-07-14 --- M-43 previously had no runnable actor.)*~~

~~A newcomer could run M-01 using only this pack.~~

~~Unknowns flagged as \[GAP: \...\] / \[NEEDS INPUT: \...\] --- logistics variables, test data, Boss Fight history, help channel, Sales Manager\'s name, M-30 outage arrangement.~~

~~Sample phrasings match the real register found in the transcripts (Manglish, shorthand, code-switching). **Fixed 2026-07-14:** removed leaked bakery examples (\"Café Bunga\", \"sourdough\") from Ben\'s persona and Chaos Card 2 --- those came from the generator prompt\'s fictional illustration, not this client. Macro Frozen sells frozen meat.~~

~~**Tier 1 (the P1 Core, Part B §1) covers every P1-risk flow** --- wrong weight billed (M-03, M-14), SQL overwritten (M-26), false sync success (M-30), invented data (M-35), draft not SQL-sourced (M-02). *(Replaced the old \"Speedrun,\" which claimed full P1 coverage but omitted M-35 --- data fabrication --- and in any case didn\'t fit the 90-minute budget.)*~~

~~**The pack\'s scope fits its window.** 42 missions ≈ 385 min; the timing note and 6-tester squad split make that explicit rather than leaving the shortfall to be discovered on the day.~~

**See Also**

\[\[Macrofood --- VoC Extraction\]\]

\[\[Macrofood --- Scope Lock v1 (reconciled)\]\]

\[\[Macrofood --- UAT Checklist\]\]

\[\[Macrofood --- End-user & Process Map\]\]

\|（注：部分内容可能由 AI 生成）

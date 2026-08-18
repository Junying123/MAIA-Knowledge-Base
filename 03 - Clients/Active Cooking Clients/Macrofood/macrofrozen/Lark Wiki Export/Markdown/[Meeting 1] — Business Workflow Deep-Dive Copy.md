**\[Meeting 1\] --- Business Workflow Deep-Dive Copy**

**Meeting 1 --- Business Deep-Dive Facilitator Guide v2.0**

**Meeting Type:** Face-to-face at client site\
**Duration:** 1.5--2.5 hours\
**Attendees:**

Mindhive: Product lead, Tech lead

Client: Business owner/decision-maker, key users from sales, logistics, finance, warehouse (whoever touches the order-to-delivery flow)

**Pre-Meeting Checklist (Product Lead)**

Before this meeting happens, confirm:

\[ \] Sales narrative (v1+) received and reviewed

\[ \] Client\'s completed requirements questionnaire reviewed

\[ \] Sample data received (customer list, item list, pricelist, sample documents)

\[ \] Questionnaire gaps identified --- these become discussion items

\[ \] AI-generated meeting-specific questions prepared (from questionnaire gaps + narrative)

\[ \] Meeting agenda shared with client 2 days before (so they bring the right people)

\[ \] Client\'s ERP system identified (SAP B1, SQL Accounting, AutoCount, etc.)

\[ \] Number of business entities / companies confirmed from sales narrative

\[ \] Known pain points from sales conversations listed (to validate, not assume)

**If any of the first 4 items are missing, do not hold this meeting. Reschedule.**

**Meeting Objectives**

By the end of this meeting, the product team must be able to answer:

**What is the real daily workflow?** Not the ideal workflow, not the org chart workflow --- the actual sequence of events from \"customer contacts us\" to \"money in the bank.\"

**Where does the workflow break?** What are the exceptions, workarounds, and \"ask the boss\" moments?

**Who decides what?** Approval authorities, escalation chains, and override permissions.

**What must be printed on documents?** Specific fields, references, logos, legal text that their customers or regulators expect.

**What are the non-negotiable constraints?** Tax rules, credit policies, delivery windows, compliance requirements that MAIA must respect.

**What does the ERP actually do vs. what they say it does?** Where do they work outside the system? Where is the system fighting their actual workflow?

**What is the priority stack?** Which 2--3 problems, if solved, would justify the entire deployment?

**What is the integration surface area and expected cost exposure?** Is the ERP integration API-ready, and does the client understand there may be a vendor-side cost?

**What this meeting is NOT for:**

Collecting data (that should already be submitted via questionnaire)

Demonstrating MAIA features at length (brief contextual demos only --- to validate a pain point, not to sell)

Discussing pricing or contract terms (that\'s sales)

Scoping integration technical details (that\'s Meeting 2)

**Facilitation Principles (Read These Before Every Meeting)**

These are techniques extracted from high-performing sessions. A junior PM should internalize these before walking into the room.

**1. Follow the real order, not the org chart**

Ask the client to walk through the last real order they remember --- from the moment the customer contacted them. Don\'t let them describe the \"ideal process.\" If they start describing how it *should* work, redirect: *\"That\'s how it\'s designed --- but what actually happens day-to-day?\"*

**2. Validate pain points, don\'t assume them**

Sales will have told you the top pain points. Do NOT lead with these. Instead, surface them organically and confirm: *\"Based on what you\'ve described, would you say \[X\] is one of the top problems you want MAIA to solve? Or is there something higher on the list?\"*

**3. Distinguish configuration from customization in real time**

When the client describes a requirement, mentally classify it:

**Out of the box** --- MAIA already does this (say so)

**Configuration** --- MAIA can do this with setup work (note it)

**Customization** --- requires development (flag it explicitly, don\'t paper over it)

**Not MAIA\'s scope** --- belongs in the ERP or another system (say so clearly)

**4. Surface the system-vs-reality gap**

For every major workflow area, probe: *\"Is this managed inside \[ERP\] right now, or is it handled outside the system?\"* The gap between what the ERP should track and what\'s actually tracked in spreadsheets, WhatsApp, or people\'s heads is where MAIA\'s value lives.

**5. Set expectations on cost and scope early**

When integration work or migration comes up, don\'t defer to \"we\'ll figure that out later.\" Flag it: *\"There will likely be a cost here on the \[ERP vendor\] side. We need to assess this with your IT vendor.\"* Set the expectation in the room while the decision-makers are present.

**6. Ask \"who\" and \"what happens if they\'re not here\"**

For every critical decision point: *\"Who handles this? What happens if they\'re on leave for a week?\"* This surfaces tribal knowledge dependencies and single points of failure.

**7. Probe the business entity structure**

Multi-company clients are common. Get the full picture early: how many entities, same ERP instance or separate, same item codes or different, same customer base or separate, which entities are in scope for Phase 1.

**8. Don\'t solve during discovery**

When you see a solution, note it --- don\'t pitch it at length. Brief contextual references to MAIA capabilities are fine (\"MAIA can handle that with stock reservation\"). Extended demos break the discovery rhythm. Save them for the demo session.

**Agenda**

**Block 1 --- Introductions & Context Setting (10 min)**

**Objective:** Establish who\'s in the room, what they do, and what the meeting will cover.

**Facilitator script:**

Introduce the Mindhive team and their roles.

Ask each client attendee to state their name, role, and what they spend most of their day doing.

Set purpose: *\"We\'ve reviewed your questionnaire and sample data. Today we want to understand how your business actually operates day-to-day --- the real workflow, the exceptions, and the decisions that matter. This helps us configure MAIA correctly the first time.\"*

Set tone: *\"We\'ll be asking a lot of \'what happens when\...\' questions. There are no wrong answers. We want the real picture, not the textbook version.\"*

Set format: *\"Instead of a formal interview, let\'s have a working conversation. Jump in anytime --- the people doing the work daily have the best answers.\"*

**Block 2 --- Business Overview & Entity Structure (10 min)**

**Objective:** Confirm the business landscape --- entities, products, channels, and which parts are in scope.

**Questions:**

*\"Walk me through the different companies / business units under the group. How many entities are there?\"*

*\"Are they all in the same \[ERP\] instance, or separate systems?\"*

*\"For this deployment, which entities are in scope? All of them, or are we starting with one?\"*

*\"Do all entities share the same customer base and item database, or are they separate?\"*

*\"Which entity has the highest transaction volume? Which has the most complex workflow?\"*

*\"Are there different currencies across entities? Any export business?\"*

*\"How many branches / locations operate under each entity?\"*

**What you\'re actually mapping:**

Number of companies in MAIA instance

Multi-currency requirements

Branch/warehouse structure

Phase 1 scope boundary

**Block 3 --- Order-to-Cash Walkthrough (40 min)**

**Objective:** Map the complete flow from customer inquiry through to payment collection. Identify every decision point, branch, and exception.

**Facilitator approach:** Ask the client to walk through a recent real order. Pick one from the sample documents they provided if possible.

**Inquiry / Order Entry**

*\"Show me how a customer order comes in. Walk me through the last one you remember.\"*

*\"What\'s the first thing you do when you receive it?\"*

*\"How do you know what the customer is asking for? Is it always clear, or do you sometimes have to interpret?\"*

*\"What happens when a customer asks for something you don\'t stock or can\'t immediately identify?\"*

If multiple order channels indicated: *\"You mentioned orders come through \[WhatsApp/email/PO/phone/portal\]. Is the process different depending on the channel?\"*

*\"Who receives the order first --- the salesperson, a coordinator, or someone else?\"*

*\"How many orders does \[that person/role\] process per day on average?\"*

*\"What format do orders arrive in?\"* (voice message, Excel, PDF PO, WhatsApp text, online portal --- get specifics)

**Quotation / Pricing**

*\"How do you decide what price to quote?\"*

*\"Is pricing maintained inside \[ERP\], or is it managed outside the system?\"* (Probe: spreadsheets, memory, blanket agreements, rate cards)

*\"Do you have different price tiers or lists for different customer segments?\"* (How many? What defines each tier?)

*\"When do you check stock availability --- before quoting or after?\"*

*\"What happens when a customer pushes back on the price?\"*

*\"Are there situations where you quote without knowing your exact cost?\"* (Back-to-back / sourcing / import scenarios)

*\"Who can give special pricing or discounts? Is there a limit? Does it require approval?\"*

*\"How often do your costs change?\"* (Daily, weekly, monthly, by contract period)

*\"If costs change frequently, how does the person quoting get the latest price?\"* (This is the pricing workflow --- not just the price itself)

For import/sourcing businesses: *\"Walk me through how you calculate the landed cost for a sourced item. What inputs go into that calculation?\"*

**What you\'re actually mapping:**

Price list structure (how many tiers, how defined)

Where pricing data lives (ERP, spreadsheet, memory)

Pricing workflow (who sets, who approves, who overrides)

Margin protection mechanism (or lack thereof)

Sourced-item vs. stocked-item pricing differences

**Order Confirmation**

*\"When does an enquiry become a confirmed order? What triggers that?\"*

*\"Is there ever a situation where you start work before the customer formally confirms?\"* (verbal confirmation, deposit, trust-based)

*\"Do you need any approval internally before confirming an order?\"*

*\"When a customer confirms, does someone create a new record in \[ERP\], or does the quotation convert?\"*

*\"Are there items that need to be created in \[ERP\] at this point? What\'s the item creation process?\"* (Probe: do they create placeholder SKUs for quotation-stage items?)

**Inventory & Stock Reservation**

*\"For the items you sell, how much is from existing inventory vs. purchased/sourced to order?\"*

*\"Is your inventory managed inside \[ERP\]? What\'s tracked there --- quantities, locations, batches, serial numbers, expiry?\"*

*\"Do salespeople or account managers ever \'reserve\' stock before a confirmed order?\"* (Informal reservation)

*\"How do you prevent overselling --- where two salespeople sell the same stock?\"*

*\"What happens when stock is low on a popular item and multiple orders come in?\"* (Who decides allocation? Is it first-come-first-served, or does someone prioritize?)

*\"Do you track expiry dates? If yes, how --- inside \[ERP\] or externally?\"*

For manufacturing/processing: *\"Do you transform raw materials into finished goods? How does the system track that conversion?\"* (BOM, stock transformation, repackaging --- get specific)

For weight-based items: *\"Do you sell by weight (kg) or by piece/unit? Does the unit of measure change between purchasing and selling?\"*

**What you\'re actually mapping:**

Formal vs. informal stock reservation (MAIA-critical feature)

Inventory tracking gaps (batch, serial, expiry)

Unit of measure conflicts (weight vs. piece, raw vs. processed)

Manufacturing/processing transformation complexity

Stock allocation decision authority

**Delivery & Logistics**

*\"Walk me through how an order gets from your warehouse to the customer.\"*

*\"Who decides which orders go on which trip?\"*

*\"How is the pick list generated? Who picks and packs?\"*

*\"What happens when a delivery fails --- customer not in, wrong items, damaged goods?\"*

*\"Do drivers collect money (COD)? If yes, how does that get back to finance?\"*

*\"Do you have multiple warehouses or dispatch points?\"*

*\"Is the delivery order and invoice issued at the same time, or separately?\"*

**Invoicing & E-Invoicing**

*\"When do you issue the invoice --- at order confirmation, at delivery, or some other point?\"*

*\"Are there customers where the invoice timing is different?\"* (inspection-first, monthly billing, consolidated invoicing)

*\"What must appear on your invoice?\"* (Tax details, PO references, project references, specific formats)

*\"Is your e-invoicing workflow automated inside \[ERP\]?\"* (auto-sync to LHDN, or manual submission?)

*\"Do your customers prefer individual invoices or consolidated monthly invoices?\"* (Is it per-customer preference?)

*\"Do you have customers who want only a delivery order, not a separate invoice?\"*

*\"Who prints / generates the invoice document? What format?\"* (Crystal Reports, PDF generator, custom template)

*\"Can you show us a sample of your current invoice? What on this would your customers complain about if it changed?\"*

**Credit Notes & Returns**

*\"How do you handle returns? What triggers a return?\"*

*\"Do you issue credit notes? Who authorizes them?\"*

*\"What\'s the most common reason for credit notes?\"* (Wrong item, wrong serial number, pricing error, early payment discount, quality rejection)

*\"Walk me through the credit note workflow --- who initiates, who approves, how does it get to \[ERP\]?\"*

*\"Do you give early payment discounts? Is that a credit note, or a different mechanism?\"* (If credit note: this is high-volume --- quantify it)

*\"Can salespeople currently create credit notes, or only finance?\"*

**Payment & Collection**

*\"How do customers pay you? What\'s the most common method?\"*

*\"How does the payment notification reach finance?\"* (WhatsApp group, email, salesperson calls in --- get the real answer)

*\"How do you track who has paid and who hasn\'t?\"*

*\"What happens when a customer is overdue? Who chases?\"*

*\"Do you send Statements of Account (SOA)? How often? Manually or automated?\"*

*\"Have you had situations where payments were applied to the wrong invoice?\"*

**Block 4 --- Pain Point Prioritization (10 min)**

**Objective:** Force-rank the problems. Not everything is P1. Get the client to commit to a priority stack.

**Facilitator approach:** By this point, you should have surfaced 5--10 pain points. Summarize them back and ask for ranking.

*\"Based on what we\'ve discussed so far, I\'ve heard these as the key problems: \[list them\]. If you had to pick the top 2--3 that MAIA must solve in Phase 1 for this to be worth it --- which ones?\"*

*\"Is there anything we haven\'t talked about yet that\'s higher priority than any of these?\"*

*\"For the problems that didn\'t make the top 3 --- are those Phase 2, or nice-to-haves?\"*

**What you\'re actually doing:**

Confirming the Phase 1 inclusion list

Creating a shared record of what\'s explicitly deferred (prevents scope creep later)

Testing whether the sales-identified pain points match what the operations team actually cares about

**Block 5 --- Exceptions, Workarounds & Tribal Knowledge (15 min)**

**Objective:** Surface the things that go wrong, the workarounds, and the knowledge that lives in one person\'s head.

**Facilitator approach:** This is the highest-value block. Push beyond the happy path.

*\"What\'s the most common thing that goes wrong in your order process?\"*

*\"What\'s the thing that only \[owner/specific person\] knows how to handle?\"*

*\"If \[that person\] is on leave for a week, what falls apart?\"*

*\"Are there customers who get special treatment --- different process, different rules?\"*

*\"When was the last time something fell through the cracks? What happened?\"*

*\"What\'s the most annoying part of your current process --- the thing your team complains about most?\"*

*\"What information do you wish you had at your fingertips that you currently have to dig for?\"*

*\"Are there things your team does outside the system because the system doesn\'t support it?\"* (WhatsApp groups, personal spreadsheets, paper forms, phone calls)

*\"How does your team communicate internally about orders?\"* (If WhatsApp groups: how many? what\'s in each one? what gets lost?)

*\"Is there any manual data entry that happens because two systems don\'t talk to each other?\"* (double-entry problems)

**Block 6 --- Roles & Permissions (15 min)**

**Objective:** Map who should be able to do what in MAIA. This feeds directly into the permission matrix.

**Facilitator approach:** Walk through each role they identified in the questionnaire.

**Questions per role:**

*\"What should \[role\] be able to create?\"* (Quotations, orders, invoices, delivery notes\...)

*\"What should \[role\] be able to see but not create?\"*

*\"What should \[role\] definitely NOT be able to do?\"*

*\"Does \[role\] need to approve anything?\"*

*\"If \[role\] is unsure about something, who do they escalate to?\"*

**Specific permission scenarios to probe:**

*\"Can a salesperson submit an order without manager approval? Under what conditions?\"*

*\"Can a logistics user see invoice amounts? Should they?\"*

*\"Can a finance user modify a sales order?\"*

*\"Who can issue credit notes?\"*

*\"Who can override a credit limit?\"*

*\"Do your field salespeople currently have access to \[ERP\]? If not, why not?\"* (VPN issues, licensing cost, complexity --- understand the barrier)

*\"How many \[ERP\] licenses do you have? Do multiple users share a login?\"* (This affects integration architecture --- MAIA may need to impersonate a service account)

*\"Are permissions the same across all branches/entities, or different?\"*

**Block 7 --- ERP Integration Landscape (15 min)**

**Objective:** Understand the integration surface area, readiness, and cost exposure. NOT the technical details --- those go in Meeting 2.

**Facilitator approach:** Be direct about potential costs. Decision-makers are in the room now and may not be in Meeting 2.

*\"What \[ERP\] version are you using?\"* (Get exact version number)

*\"Is it hosted on-premise, cloud, or hybrid?\"*

*\"Is there an internal IT person managing \[ERP\], or is it fully outsourced to a vendor?\"*

*\"Have you done any integration projects with \[ERP\] before?\"* (API, FTP, custom reports --- anything)

*\"If not, your API access may not be enabled yet. There may be a cost from your \[ERP\] vendor to enable this. We will need to assess this together.\"*

*\"For this deployment, do you want MAIA to do the full end-to-end integration?\"* (List the touch points: customers, items, quotation, SO, invoice, credit note, debit note, payment, delivery note, return note, pick list)

*\"Is your \[ERP\] vendor responsive? How quickly do they typically turn around requests?\"*

*\"Can we get a meeting with your IT vendor this week or next?\"*

*\"Are there any customizations in your \[ERP\] that we should know about?\"* (Custom modules, custom reports, custom workflows --- these affect integration)

**What you\'re actually doing:**

Determining if API integration is feasible or if we fall back to FTP/file-based

Setting cost expectations with decision-makers present

Identifying the vendor relationship (responsive vs. bottleneck)

Scoping Meeting 2 attendees and agenda

Flagging ERP customizations that may complicate integration

**Data migration probe (only if client raises historical data):**

*\"Do you want historical transaction data inside MAIA, or are you comfortable with forward-only?\"*

If they want historical: *\"Migration is a separate scope item. The cost depends on how many years of data and the data quality. We\'ll need to assess after seeing a sample export.\"*

Set expectation: *\"Our standard deployment is forward-only. New transactions go through MAIA. Master data (customers, items) we will import. Historical transactions are a migration job --- feasible but separate.\"*

**Block 8 --- Document & Reporting Requirements (10 min)**

**Objective:** Understand what printed/generated documents must look like and what reports matter.

*\"Can you show us samples of your current quotation, invoice, delivery order, and pick list?\"*

*\"What on these is critical --- what would your customers complain about if it changed?\"*

*\"Are these generated by \[ERP\]\'s built-in report engine?\"* (Crystal Reports for SAP B1, etc.)

*\"Are there any legal or regulatory requirements on your documents?\"* (e-invoicing format, tax certificate references, company registration numbers)

*\"What reports do you look at regularly? Daily, weekly, monthly?\"*

*\"What\'s the one number you check every morning?\"*

*\"Is there a dashboard or report you currently build manually in Excel that you wish was automated?\"*

*\"For your salespeople --- what information would help them if they could see it on their phone every morning?\"* (Validate daily digest feature value)

**Block 9 --- MAIA Adoption & Change Management (5 min)**

**Objective:** Assess readiness for adoption and identify resistance risks.

*\"Who will be the internal project owner / main point of contact for the implementation?\"* (Get a name --- ideally someone operational, not just a department head)

*\"What communication channels does your team use daily?\"* (WhatsApp personal, WhatsApp Business, email, Teams, Line --- this determines chatbot channel)

*\"What languages do your team members primarily work in?\"* (English, Malay, Chinese --- affects chatbot and UI language config)

*\"Does your company currently have a Meta Business Account / WhatsApp Business API?\"*

*\"Have your team members used any AI tools or chatbots before?\"*

*\"Is there anyone on the team who you think will resist the change? Why?\"* (Don\'t force this --- note it if they volunteer it)

**Block 10 --- Wrap-Up & Next Steps (10 min)**

**Facilitator actions:**

Summarize key findings back to the client in 3--5 points: *\"Here\'s what we heard\...\"*

State the validated priority stack: *\"The top problems you want solved are: 1. \_\_\_, 2. \_\_\_, 3. \_\_\_\"*

Confirm any items that need clarification or follow-up

Confirm action items:

**Client side:** sample documents to provide, data exports, internal project owner assignment, SAP vendor introduction

**Mindhive side:** meeting summary, requirements questionnaire (if not yet sent), Meeting 2 scheduling (if needed)

If Meeting 2 (IT/Integration) is needed, propose timing and confirm who from the client should attend

Set expectation for next deliverable: *\"We\'ll prepare a narrative document summarizing what we discussed and the proposed MAIA configuration. You\'ll review it before we proceed.\"*

Thank them for their time

**Post-Meeting Actions (Product Lead)**

**Within 24 hours:**

\[ \] Consolidate meeting notes into structured format (use Meeting Notes Template below)

\[ \] Feed notes + questionnaire + narrative into AI → generate draft narrative document

\[ \] Review and edit AI-generated narrative for accuracy

\[ \] Identify any pending questions that need client follow-up

\[ \] Determine if Meeting 2 (IT/integration) is needed

**Within 48 hours:**

\[ \] Schedule tech lead briefing

\[ \] Send pending questions to client (if any)

\[ \] Begin data validation against received sample data

\[ \] Send follow-up data/document requests to client (with specific list)

**Meeting Notes Template**

Use this structure during the meeting. Fill in as you go. Not every field will apply to every client --- leave irrelevant ones blank, don\'t force-fit.

  --------------------------------------------------------------------------------------------------
  Plain Text\
  CLIENT: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  DATE: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  ATTENDEES:\
  Mindhive: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Client: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (Name / Role)\
  \
  ═══════════════════════════════════════════════════════\
  BUSINESS STRUCTURE\
  ═══════════════════════════════════════════════════════\
  Number of entities: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Entity names & types: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Entities in scope for Phase 1: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Single ERP instance or multiple: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Multi-currency: \[ \] Yes \[ \] No → Currencies: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Branches/locations: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  ═══════════════════════════════════════════════════════\
  ORDER FLOW SUMMARY\
  ═══════════════════════════════════════════════════════\
  Order channels: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (WhatsApp / Email / Phone / PO / Portal)\
  Order format: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (voice msg / text / Excel / PDF / online form)\
  Who receives order first: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Daily order volume (approx): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Average items per order: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  Quotation created by: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Quotation approved by: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Pricing source: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (ERP / spreadsheet / memory / blanket agreement)\
  Number of price tiers: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Price update frequency: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Margin protection mechanism: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  Order confirmed when: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Item creation process: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Placeholder SKUs used: \[ \] Yes \[ \] No\
  \
  Invoice issued when: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Invoice type: \[ \] Individual \[ \] Consolidated \[ \] Customer preference\
  E-invoice workflow: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (auto-sync / manual submit)\
  Document format: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (Crystal Reports / PDF / custom)\
  \
  Delivery arranged by: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Pick list process: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  DO + Invoice same time: \[ \] Yes \[ \] No\
  \
  Payment method(s): \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Payment notification path: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Payment reconciled by: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  SOA: \[ \] Yes \[ \] No → Frequency: \_\_\_ → Manual or auto: \_\_\_\
  \
  Credit note reasons: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Credit note initiated by: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Credit note approved by: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Early payment discount via CN: \[ \] Yes \[ \] No\
  \
  ═══════════════════════════════════════════════════════\
  PRIORITY STACK (VALIDATED WITH CLIENT)\
  ═══════════════════════════════════════════════════════\
  Priority 1: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Priority 2: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Priority 3: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Explicitly deferred to Phase 2+: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  ═══════════════════════════════════════════════════════\
  INVENTORY & STOCK\
  ═══════════════════════════════════════════════════════\
  Inventory in ERP: \[ \] Yes \[ \] Partial \[ \] No\
  Batch tracking: \[ \] Yes \[ \] No\
  Serial number tracking: \[ \] Yes \[ \] No\
  Expiry date tracking: \[ \] Yes \[ \] No → Where: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Stock reservation needed: \[ \] Formal (on confirmed SO) \[ \] Informal (pre-PO)\
  Oversell prevention mechanism: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Unit of measure conflicts: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Processing/transformation: \[ \] Yes \[ \] No → Type: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Repackaging: \[ \] Yes \[ \] No\
  \
  ═══════════════════════════════════════════════════════\
  EXCEPTIONS & TRIBAL KNOWLEDGE\
  ═══════════════════════════════════════════════════════\
  Exception 1: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Exception 2: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Exception 3: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Key person dependencies: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Systems worked around: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  WhatsApp groups used for: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Double-entry problems: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  ═══════════════════════════════════════════════════════\
  ROLES & PERMISSIONS\
  ═══════════════════════════════════════════════════════\
  Sales: creates \_\_\_ / sees \_\_\_ / cannot \_\_\_\
  Sales coordinator: creates \_\_\_ / sees \_\_\_ / cannot \_\_\_\
  Finance: creates \_\_\_ / sees \_\_\_ / cannot \_\_\_\
  Logistics/Warehouse: creates \_\_\_ / sees \_\_\_ / cannot \_\_\_\
  Management: creates \_\_\_ / sees \_\_\_ / cannot \_\_\_\
  Field salespeople have ERP access: \[ \] Yes \[ \] No → Reason: \_\_\_\
  Shared ERP logins: \[ \] Yes \[ \] No → Details: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  ═══════════════════════════════════════════════════════\
  ERP & INTEGRATION\
  ═══════════════════════════════════════════════════════\
  ERP system: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Version: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Hosting: \[ \] On-premise \[ \] Cloud \[ \] Hybrid\
  IT managed by: \[ \] Internal \[ \] Outsourced vendor → Name: \_\_\_\
  Prior integration projects: \[ \] Yes \[ \] No → Details: \_\_\_\
  API enabled: \[ \] Yes \[ \] No \[ \] Unknown\
  Full end-to-end integration wanted: \[ \] Yes \[ \] Partial\
  ERP customizations: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Historical data migration requested: \[ \] Yes \[ \] No → Years: \_\_\_\
  ERP vendor meeting needed: \[ \] Yes \[ \] No\
  ERP vendor responsiveness: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Cost expectation set with client: \[ \] Yes \[ \] No\
  \
  ═══════════════════════════════════════════════════════\
  DOCUMENTS & REPORTS\
  ═══════════════════════════════════════════════════════\
  Document samples collected: \[ \] QT \[ \] SO \[ \] INV \[ \] DO \[ \] CN \[ \] Pick List\
  Must-have fields on quotation: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Must-have fields on invoice: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Must-have fields on DO: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Critical reports: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Manual Excel reports to automate: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  ═══════════════════════════════════════════════════════\
  ADOPTION & CHANGE MANAGEMENT\
  ═══════════════════════════════════════════════════════\
  Internal project owner: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ (Name / Role)\
  Team communication channel: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Primary working languages: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Meta Business Account: \[ \] Exists \[ \] Needs setup\
  MAIA user groups: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Resistance risks: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  ═══════════════════════════════════════════════════════\
  ACTION ITEMS\
  ═══════════════════════════════════════════════════════\
  Client side:\
  1. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  2. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  3. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  Mindhive side:\
  1. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  2. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  3. \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  \
  MEETING 2 NEEDED? \[ \] Yes \[ \] No\
  If yes, with whom: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
  Proposed timing: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  --------------------------------------------------------------------------------------------------

**Appendix: Industry-Specific Probe Questions**

Use these when the client\'s industry matches. Not all will apply --- pick the relevant ones.

**A. Trading / Distribution (commodity-based or sourced items)**

*\"For sourced items --- how do you calculate the landed cost? What inputs go into that?\"*

*\"How often do supplier prices change? How do you get notified?\"*

*\"Do you hedge on forex? Or do you absorb the fluctuation?\"*

*\"Is there a formal purchasing requisition / approval before placing a purchase order?\"*

*\"Do you pre-purchase bulk stock before confirmed orders? How do you decide volume?\"*

**B. Food & Perishables**

*\"Do you track batch numbers? If not, how do you manage FIFO / expiry?\"*

*\"Do you do any processing --- cutting, portioning, repackaging, glazing?\"*

*\"If you process raw material into finished goods --- how does the system track the cost split across outputs?\"* (value maintenance / transformation costing)

*\"Do you sell by weight or by piece? Does the unit change between purchasing and selling?\"*

*\"How do you handle variance between ordered weight and actual delivered weight?\"*

*\"Are there cold chain or temperature requirements that affect your delivery scheduling?\"*

**C. Machinery / Equipment / Spare Parts**

*\"How critical are specifications (model, voltage, size) in order accuracy?\"*

*\"What\'s the most common order error --- wrong spec from customer, wrong spec from salesperson, or wrong part from supplier?\"*

*\"Do you track machine serial numbers? At what point --- sale, delivery, or installation?\"*

*\"Do you provide after-sales service --- warranty, maintenance, repairs?\"*

*\"Is spare parts identification visual (photos, part numbers) or description-based?\"*

*\"Do you keep backup spare parts in stock for specific customer equipment?\"*

**D. Manufacturing (light / assembly / packaging)**

*\"Do you use Bills of Material (BOM) in \[ERP\]? Or is production tracked differently?\"*

*\"Is production triggered by confirmed orders, or do you produce to stock?\"*

*\"Do you have a work order process? Who creates it, who closes it?\"*

*\"How do you handle yield variance --- when output quantity differs from expected?\"*

*MAIA by Mindhive --- Meeting 1 Facilitator Guide v2.0*

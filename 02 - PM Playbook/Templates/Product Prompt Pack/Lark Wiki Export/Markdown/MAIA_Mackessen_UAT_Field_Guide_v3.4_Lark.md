**MAIA_Mackessen_UAT_Field_Guide_v3.4_Lark**

**MAIA UAT Field Guide --- Play It Like a User**

**Table of Contents**

***Lark publishing action:** Insert Lark's native Table of Contents block here after import.*

**Navigation Index**

PART A --- READ BEFORE YOU PLAY

Section 0 --- Cover / Logistics

Section 1 --- How to Play

Section 2 --- The World in Five Minutes

Section 3 --- Product Map

Section 4 --- The Map

Section 5 --- Persona Cards

Persona P-01 --- Sales Desk --- Sales User

Persona P-02 --- Irene --- Credit Controller / Logistics PIC

Persona P-03 --- Angel --- Finance / AR PIC

Persona P-04 --- System Steward --- Admin

Persona P-05 --- Supply Chain / Logistics Checker

Persona P-06 --- Maye --- Client UAT Coordinator / Management

Persona P-07 --- Management Viewer --- Management User

Section 6 --- Trust Killers

PART B --- THE MISSIONS

Section 7 --- Campaign Overview

Section 8 --- Mission Cards

Mission M-01 --- Carry One Order Across the Relay · ★★★ · 35 XP · \~25 min

Mission M-02 --- Telegram Is the Front Door · ★ · 10 XP · \~8 min

Mission M-03 --- Read the Order Without Guessing · ★★★ · 35 XP · \~25 min

Mission M-04 --- One Customer, One PO, One CPO · ★★ · 20 XP · \~12 min

Mission M-05 --- SQL Has the Final Say · ★★★ · 35 XP · \~20 min

Mission M-06 --- Price Me Correctly · ★★ · 20 XP · \~12 min

Mission M-07 --- Below the Floor Needs Approval · ★★ · 20 XP · \~15 min

Mission M-08 --- Stop the Over-Credit Order at SO · ★★★ · 35 XP · \~18 min

Mission M-09 --- Irene's Bypass Follows the Role · ★★ · 20 XP · \~12 min

Mission M-10 --- The Clock on Payment Terms · ★★★ · 35 XP · \~25 min

Mission M-11 --- Warn, Record, Continue · ★★ · 20 XP · \~10 min

Mission M-12 --- Zero Stock Is Still Orderable · ★★ · 20 XP · \~10 min

Mission M-13 --- Wake Irene at the Threshold · ★★ · 20 XP · \~15 min

Mission M-14 --- The 9 AM Stock Brief · ★★ · 20 XP · \~12 min

Mission M-15 --- Three Days Late, Not Before · ★★ · 20 XP · \~12 min

Mission M-16 --- The 9 AM Operations Digest · ★★★ · 35 XP · \~15 min

Mission M-17 --- Keep the Remaining 400 kg Open · ★★ · 20 XP · \~15 min

Mission M-18 --- Fill the Customer, Not a Guess · ★★ · 20 XP · \~12 min

Mission M-19 --- Trust the SQL Description · ★★ · 20 XP · \~12 min

Mission M-20 --- Fetch the Real SQL Invoice · ★★ · 20 XP · \~12 min

Mission M-21 --- One Approval Means One · ★★ · 20 XP · \~10 min

Mission M-22 --- Date It, Then Trace the Change · ★★ · 20 XP · \~12 min

Mission M-23 --- Charge It as a SKU · ★★ · 20 XP · \~12 min

Mission M-24 --- Carry the Batch into the Credit Note · ★★★ · 35 XP · \~15 min

Mission M-25 --- Return First, Credit Note Second · ★★★ · 35 XP · \~18 min

Mission M-26 --- Finance Creates the Item · ★★ · 20 XP · \~12 min

Mission M-27 --- Match the COA to the Batch · ★★★ · 35 XP · \~18 min

Mission M-28 --- C3 Stops at Batch Level · ★★ · 20 XP · \~12 min

Mission M-29 --- Do Not Duplicate E-Invoice · ★★ · 20 XP · \~12 min

Mission M-30 --- Finance Chat Is Here Now · ★★ · 20 XP · \~10 min

Mission M-31 --- Say It Short · ★ · 10 XP · \~8 min

Mission M-32 --- Keep Talking Under Pressure · ★★★ · 50 XP · \~30 min

Mission M-33 --- Every Role Must Show Up · ★★ · 20 XP · \~15 min

Mission M-34 --- Cut Over Without Test Data Leakage · ★★★ · 50 XP · \~30 min

Mission M-35 --- The Supported Document Shelf · ★★★ · 50 XP · \~30 min

Section 9 --- Boss Fights

Boss Fight BF-01 --- The Bot Freeze · ★★★ · 50 XP · \~20 min

Boss Fight BF-02 --- The Wall of Text · ★★★ · 30 XP · \~10 min

Boss Fight BF-03 --- Correct Code, Wrong Description · ★★★ · 40 XP · \~15 min

Boss Fight BF-04 --- The Credit Block Arrives Too Late · ★★★ · 40 XP · \~15 min

Boss Fight BF-05 --- Permission Looks Like a Bug · ★★★ · 30 XP · \~12 min

Boss Fight BF-06 --- Warning Is Not a Duplicate Block · ★★★ · 40 XP · \~12 min

Boss Fight BF-07 --- Test SQL in Production · ★★★ · 50 XP · \~25 min

Boss Fight BF-08 --- Everyone Can Create Items · ★★★ · 35 XP · \~12 min

Boss Fight BF-09 --- Zero Stock Becomes a Wall · ★★★ · 30 XP · \~10 min

Boss Fight BF-10 --- The Fake Invoice PDF · ★★★ · 35 XP · \~12 min

Boss Fight BF-11 --- The Vanishing Batches · ★★★ · 40 XP · \~15 min

Boss Fight BF-12 --- Credit Before Goods Return · ★★★ · 40 XP · \~15 min

Section 10 --- Side Quests and Chaos Cards

Section 11 --- Field Manual

Section 12 --- Appendix --- Coverage and Readiness Map

**PART A --- READ BEFORE YOU PLAY**

**Section 0 --- Cover / Logistics**

  ------------------------------- --------------------------------------------------------------------------------------------------------------------------------------
  Item                            Details

  Project                         Mackessen × MAIA UAT

  Product                         MAIA --- SQL-backed operational coordination and chatbot layer for order, delivery, finance, alerts, documents, and audit.

  Client                          Mackessen

  Issued date                     14 July 2026

  Test window                     \[NEEDS INPUT: TEST_WINDOW\]

  Environment and access          \[NEEDS INPUT: ENVIRONMENT_AND_ACCESS\]

  Current chatbot channel         **Telegram**. WhatsApp is currently blocked and is not a go-live blocker.

  Input library                   \[NEEDS INPUT: INPUT_LIBRARY_FOLDER\]

  Test-data access                Use your assigned UAT account to select data matching each Mission's criteria. \[NEEDS INPUT: TEST_DATA_ACCESS_NOTES\]

  Bug reporting                   \[NEEDS INPUT: BUG_REPORTING_CHANNEL\]

  XP tracker                      \[NEEDS INPUT: XP_TRACKER_LINK\]

  UAT owner                       \[NEEDS INPUT: UAT_OWNER\]

  Time budget                     \[NEEDS INPUT: TIME_BUDGET_PER_TESTER\]

  Not testable by you             \[NEEDS INPUT: SYSTEMS_TESTERS_CANNOT_ACCESS\]. SQL/database truth checks are handoffs unless your account is explicitly authorized.
  ------------------------------- --------------------------------------------------------------------------------------------------------------------------------------

***Campaign warning:** Missing test data, unavailable configuration, or inaccessible client systems are not automatically product failures. Use **Blocked --- Test Data/Configuration** or complete the named handoff.*

**Section 1 --- How to Play**

**You are a person, not a script.** Choose the assigned Persona and stay in character.

**Type in your own words.** Use your normal shorthand and language mix. Do not copy the sample phrases.

**Select your own valid data.** Use any accessible customer, item, document, or record that meets every Mission criterion.

**Do not wait for bespoke test data.** The product team prepares reusable file pools only where the Mission genuinely needs an external input.

**Respect the precondition.** When no suitable record/configuration exists, record **Blocked --- Test Data/Configuration**, not Failed.

**Use fixed fixtures exactly.** Never edit or substitute a named regression fixture.

**React like the Persona.** Busy users are brief, sometimes vague, and expect MAIA to clarify only real blockers.

**Break locked workflows thoughtfully.** Use the sabotage bonus and Chaos Cards without testing excluded scope.

**Verify only what you can access.** Complete the tester-visible half and leave SQL/client-system verification to the named handoff owner.

**Out of bounds is not a bug.** Log an Observation only when the boundary genuinely confused you.

**No loot, no glory.** Capture the exact input, references, screenshots, timestamps, and approval/refusal evidence.

**A Fail can still earn full Mission XP.** Proper execution and evidence matter more than a green result.

**Section 2 --- The World in Five Minutes**

Mackessen's operation depends on structured customer, item, price, credit, tax, stock, delivery, invoice, batch, and document records. MAIA is not meant to replace SQL. It sits above that operating reality as the coordination and user-interaction layer.

A customer order is not just a line of text. It carries **customer identity, addresses, item descriptions, quantities, customer-specific price, PO number, delivery need, credit exposure, payment terms, tax treatment, and exceptions**. Today, people interpret and check these facts manually. Mackessen wants MAIA to reduce the repetitive work without weakening control.

The strongest customer expectation is practical: **take real incoming orders, understand them, validate them, create the right record safely, and show exactly what happened when something fails.** A confident wrong answer is worse than a short clarification.

The normal day crosses several roles:

**Sales** captures the order, checks customer/item/price, and handles commercial exceptions.

**Logistics/Irene** watches fulfilment, stock alerts, delays, partial deliveries, and operational handoffs.

**Finance/Admin** manages finance visibility, approvals, official invoice PDFs, returns, credit notes, tax, and batch traceability.

**Admin** controls roles, configuration, master-data integrity, schedules, and cutover conditions.

**Management/Maye** needs lifecycle visibility, role coverage, evidence, and a trustworthy sign-off path.

Success feels like **less manual entry, fewer duplicate or malformed records, safer exception handling, and one traceable lifecycle**. The three biggest fears are:

**Wrong or invented data** reaches a submitted order or official document.

**A duplicate, unauthorized, or out-of-sequence action** contaminates the next stage.

**The system hides what happened** through stale data, missing audit evidence, mixed chatbot context, or an unofficial document.

***Carry this into every Mission:** fast is valuable only when the customer, item, price, role, state, and source remain trustworthy.*

**Section 3 --- Product Map**

**Purpose**

MAIA coordinates Mackessen's current go-live operating scope through Telegram and MAIA web workspaces while SQL remains authoritative.

**Main lifecycle**

Customer order / text / photo / PDF → CPO → Sales Order → checks and approvals → Delivery Order / fulfilment → invoice retrieval → receipt / return / credit-note / COA handling → management visibility.

**Golden rules**

**SQL is the source of truth.**

**Telegram is the current go-live chatbot channel.**

**Ambiguous or risky input must be clarified before submission.**

**Same customer + same PO number is a hard duplicate block.**

**Stock quantity is informational and does not block Sales Order submission.**

**Price, credit, payment-term, document-date, item-creation, invoice-approval, and credit-note actions follow specific roles.**

**No downstream document may be created from an invalid upstream state.**

**Official invoice PDFs come from SQL.**

**Credit notes require physical return confirmation and preserve invoice batch traceability.**

**Routine chatbot replies should be short and direct.**

**Who may do what**

  ------------------------------ ---------------------------------------------------------- ----------------------------------------------
  Action                         Role(s)                                                    Refused role/direction

  Below-minimum price approval   Finance Manager, Credit Controller, Sales Manager, Admin   Sales user without an approval role

  Credit override                Finance Manager, Credit Controller, Sales Manager, Admin   Sales user without an approval role

  Document date change           Sales User, Sales Manager where configured                 Unauthorized role

  Credit-note issue              Finance/Admin after physical confirmation                  Sales; Finance/Admin before confirmation

  Item/product creation          Finance/Admin                                              Sales / Logistics

  Single invoice approval        Designated single-level approver                           Unauthorized user; no forced second approver

  Live SQL cutover               Admin + client PIC                                         General testers
  ------------------------------ ---------------------------------------------------------- ----------------------------------------------

**Glossary**

**CPO:** Customer Purchase Order record in the MAIA flow.

**SO:** Sales Order.

**DO:** Delivery Order.

**COA:** Certificate of Analysis.

**CN:** Credit Note.

**SQL:** Mackessen's authoritative backend data source in this scope.

**C3:** Order tax-exemption handling locked at batch level for go-live.

**UAT:** User Acceptance Testing.

**P1--P4:** Business-impact severity scale in Section 6.

**Fixed fixture:** A controlled input that must remain unchanged across test and retest.

**Section 4 --- The Map**

**In Bounds**

**LOCK-01 --- Core order-to-delivery operating flow.**

**LOCK-02 --- Telegram as current production chatbot platform.**

**LOCK-03 --- Order extraction from Telegram text, photo and PDF.**

**LOCK-04 --- Duplicate PO hard block at CPO stage.**

**LOCK-05 --- SQL as source of truth.**

**LOCK-06 --- Customer-specific pricing.**

**LOCK-07 --- Minimum-selling-price exception approval.**

**LOCK-08 --- Credit-limit block at Sales Order submission.**

**LOCK-09 --- Irene / Credit Controller bypass behaviour.**

**LOCK-10 --- Payment-term enforcement before go-live.**

**LOCK-11 --- Non-blocking warning modal and activity log.**

**LOCK-12 --- Stock is informational only.**

**LOCK-13 --- Configurable low-stock and out-of-stock notifications.**

**LOCK-14 --- Daily stock summary.**

**LOCK-15 --- Delayed-delivery alert.**

**LOCK-16 --- Daily 9:00 AM operational digest.**

**LOCK-17 --- Blanket-order and partial-delivery reminders.**

**LOCK-18 --- Customer master fields.**

**LOCK-19 --- Item descriptions match SQL.**

**LOCK-20 --- Invoice generation and PDF download from SQL.**

**LOCK-21 --- Single-level invoice approval.**

**LOCK-23 --- Document date handling.**

**LOCK-24 --- Surcharges as SQL SKU items.**

**LOCK-25 --- Credit-note batch-number carry-over.**

**LOCK-26 --- Credit-note permissions and return SOP.**

**LOCK-27 --- Item/product creation restricted to Finance/Admin.**

**LOCK-28 --- COA upload, indexing, linking and prompting.**

**LOCK-29 --- C3 / order tax exemption tracked at batch level.**

**LOCK-30 --- Tax / SST / e-invoice handling.**

**LOCK-31 --- Finance chatbot.**

**LOCK-32 --- Short and direct chatbot responses.**

**LOCK-33 --- Chatbot stability and performance.**

**LOCK-34 --- UAT ownership and role coverage.**

**LOCK-35 --- Live SQL cutover before production.**

**LOCK-36 --- Supported operational document set.**

**NS --- Needs Scoping / Do Not Test**

**NCI-01 --- Final role-permission matrix.** Known locked roles are testable, but final production permission sign-off remains blocked until the client approves the full matrix. Record missing matrix-dependent setup as **Blocked --- Test Data/Configuration**, not a product defect.

**Out of Bounds**

**LOCK-22:** Multi-level invoice approval; current scope is single-level only.

**OOS-01:** WhatsApp activation for go-live; Telegram is the locked channel.

**DEFER-01:** C3 item-quantity reservation and separate product-level allocation.

**DEFER-02:** Individual-user digest/reminder tailoring.

**OOS-02:** Moving e-invoice processing from SQL into MAIA.

**SOW-B-01:** Transporter management, route optimization, and delivery sequencing.

**SOW-B-02:** Pallet/rack/location automation, FIFO/FEFO, and batch-picking multi-select.

**SOW-B-03:** Automated bank-statement reconciliation.

**RG-FUT-01:** Forecasting, cross-sell/up-sell, and expiring-stock recommendations.

**RG-LOG-01:** Exact one-day/two-hour pre-delivery reminders.

**CJ-ORD-01:** RM200 minimum-delivery-order enforcement.

**UAT-Q-01:** Quotation revision/validity automation beyond SQL customer pricing.

**UAT-OPS-01:** Automatic Telegram-to-web failover.

**UAT-SLA-01:** Five-minute SQL sync SLA.

**FEATURE-POD:** Proof-of-delivery/driver photo/e-signature flow.

**FEATURE-LANG:** Multi-language chatbot acceptance.

**FEATURE-CRM:** CRM/sales-pipeline module.

**FEATURE-SOA:** Statement-of-account portal.

**FEATURE-CALC:** Custom calculators.

**DOC-VOUCHER:** Payment voucher generation.

*If an excluded boundary genuinely confused you as the Persona, log an **Observation**, not a defect.*

**Beyond Tester Reach**

  -------------------- ------------------------------------------------------------------------------ --------------------------------------------------------------------------------------------
  Handoff              Tester verifies                                                                Account owner/client verifies

  H-01                 Tester records values visible in MAIA and resulting drafts.                    SQL owner confirms source values, changes, sync state, and no conflicting production copy.

  H-02                 Tester downloads and checks visible invoice number/customer/lines/tax/total.   Finance/SQL owner confirms it is the current official SQL PDF.

  H-03                 Tester observes MAIA alert/block/status and no duplicate action.               Finance/SQL owner confirms invoice dates, balances, terms, tax, and e-invoice status.

  H-04                 Tester selects the approved batch and observes MAIA behaviour.                 Client confirms C3 batch record and downstream SQL tax output.

  H-05                 Tester/Admin records MAIA transaction and environment identifier.              Client owner verifies destination DB, no test write, and no duplicate.

  H-06                 Tester proves allowed/refused behaviour for known roles.                       Client approves the complete production matrix.
  -------------------- ------------------------------------------------------------------------------ --------------------------------------------------------------------------------------------

**Section 5 --- Persona Cards**

**Persona P-01 --- Sales Desk --- Sales User**

**Evidence basis:** Scope and UAT inferred; frontline Sales voice is under-sourced.

**A day in my life**

**Start of day.** I open Telegram and MAIA with customer requests already waiting. Some arrive as short messages, some as a PO photo or PDF, and some are incomplete because the customer assumes I know the item, branch, price, or delivery date.

**When the first request arrives.** I need to identify the correct SQL customer, select the correct item, confirm quantity, use the right customer-specific price, and understand whether credit, payment terms, stock warnings, or approval rules affect submission. I can choose suitable customers and items from my UAT account, but I cannot treat a convenient record as valid unless it meets the Mission Card's criteria.

**Before I submit.** I check customer master details, item descriptions, prices, PO number, delivery details, document date, warnings, and approval status. A quick answer is valuable only when the data is right. If MAIA is uncertain, I expect one focused clarification---not a confident guess.

**When something looks wrong.** I stop rather than forcing a bad order through. I ask the Sales Manager, Finance Manager, Credit Controller, or Admin when the issue crosses my authority. I may request a credit note, but I do not issue it myself.

**At handoff.** Logistics should receive a valid Sales Order, not a draft or blocked record. Finance should receive traceable commercial and return information. Management should be able to see where the order is without rebuilding the story from messages.

**End of day.** Done means the order is accurate, the right approvals exist, references are captured, and the next role knows what to do. Wrong customer, wrong item, wrong price, duplicate PO, or hidden block means the day gets longer and trust drops quickly.

**Business rules I live by**

**Always:** confirm customer, item, quantity, price basis, PO/reference, date, and current document state.

**Never:** guess an ambiguous item, approve my own restricted exception, issue a credit note, or bypass a block.

**Before I submit:** review extracted lines, warnings, credit/payment conditions, and required approval.

**Historical/reference checks:** use the current SQL-backed customer/item/price and existing linked documents; no Fixguru rule appears in the Mackessen sources.

**I can approve:** only actions granted to the Sales role by the final matrix; Sales is not one of the locked minimum-price/credit approvers unless separately assigned an approved role.

**I cannot approve:** below-minimum price or credit/payment-term override without a permitted approval role.

**I escalate to:** **Sales Manager**, **Finance Manager**, **Credit Controller**, or **Admin**, depending on the exception.

**What I want from this product**

"Take the repetitive entry away, but show me exactly what you understood before anything risky is submitted."

**What makes me trust it**

Correct customer and item resolution, current pricing, short clarifications, visible blocks, and references that survive every handoff.

**What would make me ditch it**

Wrong or invented data, duplicate orders, silent submission, hidden warnings, or a chatbot that makes me read an essay to find the action.

**How I talk**

""pls create CPO for this PO""

""customer confirm, submit SO""

""price below floor, send approval""

**Patience level and quirks**

Busy, brief, and willing to use shorthand. Low patience for repeated questions, but willing to clarify one real ambiguity.

**Persona P-02 --- Irene --- Credit Controller / Logistics PIC**

**Evidence basis:** Direct actor evidence plus Scope Lock and UAT behaviour.

**A day in my life**

**Start of day.** I need to know what is low, out of stock, delayed, partially delivered, or blocked. The 9:00 AM stock summary and operational reminders should help me prioritize rather than create more noise.

**When orders move.** I look at delivery status, outstanding quantities, stock warnings, and exceptions that need a decision. Stock quantity is informational for Sales submission, but alerts and summaries still matter operationally. For a partial delivery, the remaining balance must stay visible until it is completed or validly closed.

**When credit is involved.** My configured Credit Controller role may allow me to approve or bypass a credit block. That permission belongs to the role, not my name. If Admin removes the role, the permission should disappear.

**When something looks wrong.** An alert at exactly three days is too early; a delayed-delivery alert that remains after valid completion is stale. A reminder that closes a 1,000 kg order after only 600 kg is dangerous.

**At handoff.** Warehouse/Logistics confirms physical return quantity before Finance issues a credit note. I do not want Finance acting on an assumed quantity.

**End of day.** Done means open quantities, alerts, deliveries, and approvals tell one consistent story.

**Business rules I live by**

**Always:** act from the current configured role, delivery state, stock data, and outstanding quantity.

**Never:** let a name or old session retain authority after the role is removed.

**Before I submit:** confirm the exact order/delivery, remaining quantity, recipient, and status.

**Historical/reference checks:** use the linked SO/DO and current SQL-backed quantities.

**I can approve:** credit exceptions only while assigned a permitted approval role.

**I cannot approve:** actions not granted by the final matrix or issue Finance-only documents.

**I escalate to:** **Admin** for role/configuration and **Finance/Admin** for credit-note issuance.

**What I want from this product**

"Give me the late, low, blocked, and outstanding work at the right time---then let me act without hunting."

**What makes me trust it**

Exact boundaries, correct recipients, clean role enforcement, and reminders that stop only when the work is truly complete.

**What would make me ditch it**

Early/stale alerts, lost balances, wrong recipients, or permission that follows the person instead of the role.

**How I talk**

""show delayed delivery""

""balance 400kg still open?""

""approve credit override for this SO""

**Patience level and quirks**

Operational and direct. Tolerates a warning only when it is actionable and not repeated unnecessarily.

**Persona P-03 --- Angel --- Finance / AR PIC**

**Evidence basis:** Actor register identifies Angel as Finance/AR PIC; detailed workflow is scope-and-UAT inferred.

**A day in my life**

**Start of day.** I care about unpaid invoices, payment terms, approval queues, invoice PDFs, receipts, tax treatment, and credit-note requests. The records I see must remain tied to SQL because that is the authoritative finance source.

**When Sales needs help.** I review minimum-price or credit/payment exceptions only within my assigned role. I expect a clear order reference, reason, values, and audit trail. An override without context is not an approval I can trust.

**When returns happen.** Sales may request a credit note, but Warehouse/Logistics must confirm physical quantity before Finance/Admin issues it. The credit note must retain invoice and batch traceability.

**When documents are requested.** The invoice PDF must be the SQL invoice PDF. A MAIA-looking substitute or stale file is not acceptable. E-invoice continues in SQL; MAIA must not submit a second one.

**End of day.** Done means finance actions are authorized, traceable, tied to the right customer/invoice/batch, and do not create competing records.

**Business rules I live by**

**Always:** use SQL-backed invoice, payment-term, tax, batch, and PDF data.

**Never:** issue credit before return confirmation, duplicate e-invoice, or approve outside my role.

**Before I submit:** verify order/invoice, values, approval authority, return quantity, and batch links.

**Historical/reference checks:** follow the linked invoice and current SQL status.

**I can approve:** only the exception/approval actions granted to my Finance/Admin role.

**I cannot approve:** a second invoice level that is not part of go-live or an action outside the final matrix.

**I escalate to:** **Client SQL owner**, **Credit Controller**, **Sales Manager**, or **Admin** as required.

**What I want from this product**

"Let me see the real finance record, make the permitted decision, and leave an audit trail that explains it."

**What makes me trust it**

Official SQL PDFs, exact ageing boundaries, preserved batch links, and no duplicated tax/e-invoice action.

**What would make me ditch it**

Wrong invoice format, silent zero pricing, missing batches, or a credit note issued before returned goods are confirmed.

**How I talk**

""show unpaid invoices for this customer""

""approve this exception""

""create CN after return confirmed""

**Patience level and quirks**

Evidence-focused and sensitive to mismatches. Prefers a compact answer with the reference and next action first.

**Persona P-04 --- System Steward --- Admin**

**Evidence basis:** Scope and UAT inferred.

**A day in my life**

**Start of day.** I check role mappings, SQL-linked masters, thresholds, notifications, scheduled jobs, item creation, tax/C3 configuration, and environment connections. Other testers see the front end; I make sure the states they depend on are safe and reproducible.

**When the team needs data.** I configure designated UAT records instead of changing random production-like data. I record what was changed, why, and how it will be reset. If a tester can select a suitable customer or item in their account, I do not export another spreadsheet just for them.

**When permissions are tested.** I assign and temporarily remove roles under an approved plan. The final client role matrix is still required for production sign-off.

**When something looks wrong.** A local value conflicting with SQL, a duplicated master, an invalid threshold, or a wrong database connection is a stop condition. I do not let a test continue just to get a result.

**At cutover.** Live SQL testing occurs only in an approved window with client PIC and rollback ownership.

**End of day.** Done means the test setup can be explained, repeated, and safely reset.

**Business rules I live by**

**Always:** use designated records, authoritative SQL, approved roles, and documented reset plans.

**Never:** edit uncontrolled production data or allow an unclear environment/connection.

**Before I submit:** record before/after values, owner, expected propagation, and rollback.

**Historical/reference checks:** compare MAIA behaviour to the approved source record through the client-side owner.

**I can approve:** configuration and administrative actions granted to Admin.

**I cannot approve:** client business decisions or production permissions not confirmed by the matrix.

**I escalate to:** **Maye/client PIC** and the **client SQL owner**.

**What I want from this product**

"Give the testers stable, safe conditions without making the product team prepare a bespoke record for every mission."

**What makes me trust it**

Clear environment identity, role-based access, repeatable configuration, and no hidden second master.

**What would make me ditch it**

Test data leakage, dual writes, sticky permissions, or undocumented production changes.

**How I talk**

""set UAT threshold for this item""

""remove Credit Controller role temporarily""

""confirm live SQL connection before test""

**Patience level and quirks**

Methodical and risk-sensitive. Will block a mission rather than allow unsafe setup.

**Persona P-05 --- Supply Chain / Logistics Checker**

**Evidence basis:** Scope and UAT inferred; direct frontline voice is limited.

**A day in my life**

**Start of day.** I care about what is being delivered, returned, supported by COA evidence, and linked to the correct batch and document. I often receive a record created earlier by Sales.

**When documents arrive.** I need the correct Sales Order or Delivery Order state before continuing. For COAs, item, batch, supplier, and date must identify the right evidence. A plausible-looking document is not enough.

**When goods return.** I confirm physical quantity before Finance issues a credit note. I help protect the boundary between operational fact and financial action.

**When something looks wrong.** A mismatched batch, incomplete COA, closed partial order, or downstream action from a blocked SO must stop.

**End of day.** Done means the physical, batch, and document story is consistent.

**Business rules I live by**

**Always:** work from the correct upstream document and verify item, batch, quantity, location, and status.

**Never:** attach unrelated COA evidence or confirm a quantity that was not physically checked.

**Before I submit:** verify the source document is valid and the selected evidence matches it.

**Historical/reference checks:** follow linked SO/DO/invoice/batch references.

**I can approve:** only operational confirmations granted by the final matrix.

**I cannot approve:** Finance-only credit-note issuance or Sales pricing exceptions.

**I escalate to:** **Finance/Admin** for credit-note issuance and **Admin** for configuration/data issues.

**What I want from this product**

"Show me the right movement and evidence, and stop me before I attach the wrong batch or continue from the wrong state."

**What makes me trust it**

Matching batches, persistent balances, correct statuses, and clear handoffs.

**What would make me ditch it**

Wrong COA, lost outstanding quantity, or a downstream document created from an invalid upstream state.

**How I talk**

""link this COA to batch \[x\]""

""600kg delivered, balance open""

""return qty confirmed""

**Patience level and quirks**

Practical and record-driven. Wants the exact document/batch reference near the top.

**Persona P-06 --- Maye --- Client UAT Coordinator / Management**

**Evidence basis:** Direct actor and governance evidence.

**A day in my life**

**Start of day.** I need to know whether the system is genuinely ready, what is blocked by setup, and which client decisions are still required. My questions are practical: can MAIA pull from SQL, what must we configure, how do tax and approvals work, and who needs to test?

**During UAT.** I coordinate Sales, Logistics, Finance/Admin, Management, and relevant roles. A green dashboard means little if one role never tested, evidence is missing, or the result depends on an unapproved role matrix.

**When something looks wrong.** I separate product defects from missing test data, inaccessible SQL checks, and out-of-scope expectations. I expect the team to show evidence, not just say "passed."

**At sign-off.** Final approval follows the client process I coordinate. Multi-level invoice approval, WhatsApp activation, product-level C3 allocation, personalized digests, and other excluded items are not allowed to quietly become blockers.

**End of day.** Done means coverage, blockers, risk, and sign-off are traceable.

**Business rules I live by**

**Always:** require evidence-backed role coverage and distinguish defect, blocked setup, observation, and out-of-scope.

**Never:** accept incomplete sign-off or turn excluded work into a hidden go-live condition.

**Before I submit:** check role coverage, open blockers, retests, and owner confirmations.

**Historical/reference checks:** use the newest Scope Lock as the law.

**I can approve:** client UAT coordination/sign-off through the agreed process.

**I cannot approve:** technical or data changes outside the authorized owners.

**I escalate to:** the relevant client owner, Mindhive project lead, or SQL/configuration owner.

**What I want from this product**

"Tell me what is ready, what still needs us, and whether every role proved its part."

**What makes me trust it**

Clear scope boundaries, evidence, low setup friction, and issues explained in business terms.

**What would make me ditch it**

Surprise scope, guessed configuration, missing role coverage, or an AI demo that hides operational risk.

**How I talk**

""show coverage by role""

""what is blocking sign-off?""

""which checks need client SQL?""

**Patience level and quirks**

Practical, adoption-focused, and unwilling to accept vague readiness claims.

**Persona P-07 --- Management Viewer --- Management User**

**Evidence basis:** Scope and UAT inferred.

**A day in my life**

**Start of day.** I do not create every operational document. I need a trustworthy view of order lifecycle, exceptions, delays, finance status, and whether the teams are acting on the right records.

**When I inspect an order.** I expect customer, document references, current status, warnings, approvals, and handoffs to tell one story. I should not need unrestricted operational permissions just to understand progress.

**When something looks wrong.** Missing role coverage, a hidden block, an unexplained override, or a document that does not link to its source makes the management view unreliable.

**End of day.** Done means I can see what is moving, what is stuck, why, and who owns the next action.

**Business rules I live by**

**Always:** use lifecycle status and audit evidence rather than assumptions.

**Never:** perform restricted operational actions unless separately assigned the role.

**Before I submit:** verify that any management sign-off is based on complete role evidence.

**Historical/reference checks:** follow the linked CPO/SO/DO/invoice/receipt chain.

**I can approve:** only management actions granted by the final matrix.

**I cannot approve:** Finance/Sales/Admin workflow actions by default.

**I escalate to:** **Maye/UAT Coordinator** or the owning operational role.

**What I want from this product**

"Show me the real state and the next owner without giving me a false green picture."

**What makes me trust it**

Complete lifecycle visibility, traceable approvals, and clear blockers.

**What would make me ditch it**

Status that disagrees across roles or hides a failed handoff.

**How I talk**

""show order lifecycle""

""what is blocked and who owns it?""

""show UAT role coverage""

**Patience level and quirks**

Scans rather than operates. Values concise summaries backed by references.

**Section 6 --- Trust Killers**

  -------------------------------- ---------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------
  Severity                         Mackessen impact                                                                               Examples

  P1 --- Client walks away         Unsafe or unauthorized action changes/creates the wrong business record or production state.   Wrong customer/item/price; duplicate CPO; unauthorized approval/item creation; wrong SQL connection; duplicate e-invoice; cross-order contamination.

  P2 --- Client gets nervous       Traceability or control is unreliable but damage is contained.                                 Wrong/stale SQL description or invoice PDF; lost batch links; credit block at wrong stage; partial order closes early.

  P3 --- Annoying but survivable   The user can complete work with extra effort or unclear guidance.                              Long reply, repeated clarification, missing next-action wording, delayed non-critical notification.

  P4 --- Cosmetic                  Presentation issue with no meaningful workflow or trust impact.                                Spacing, label alignment, harmless wording inconsistency.
  -------------------------------- ---------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------

***Rule:** An unauthorized role successfully completing a gated action is always **P1**.*

**PART B --- THE MISSIONS**

**Section 7 --- Campaign Overview**

  ----------------------------------------------- --------------------- ------------ ---------- ---------- ---------------------------------------------------------
  Mission                                         Persona(s)              Difficulty         XP       Time Covers

  M-01 --- Carry One Order Across the Relay       P-01/P-02/P-03/P-07            ★★★         35     25 min LOCK-01: HP-001, UP-001, UP-002

  M-02 --- Telegram Is the Front Door             P-01                             ★         10      8 min LOCK-02: HP-002, UP-003, UP-004

  M-03 --- Read the Order Without Guessing        P-01                           ★★★         35     25 min LOCK-03: HP-003, HP-004, HP-005, UP-005, UP-006, UP-007

  M-04 --- One Customer, One PO, One CPO          P-01                            ★★         20     12 min LOCK-04: HP-006, UP-008, UP-009

  M-05 --- SQL Has the Final Say                  P-04                           ★★★         35     20 min LOCK-05: HP-007, UP-010, UP-011

  M-06 --- Price Me Correctly                     P-01                            ★★         20     12 min LOCK-06: HP-008, UP-012, UP-013

  M-07 --- Below the Floor Needs Approval         P-01                            ★★         20     15 min LOCK-07: HP-009, UP-014, UP-015

  M-08 --- Stop the Over-Credit Order at SO       P-01/P-03                      ★★★         35     18 min LOCK-08: HP-010, UP-016, UP-017, UP-018

  M-09 --- Irene's Bypass Follows the Role        P-02                            ★★         20     12 min LOCK-09: HP-011, UP-019, UP-020

  M-10 --- The Clock on Payment Terms             P-01/P-03                      ★★★         35     25 min LOCK-10: HP-012, UP-021, UP-022, UP-023, UP-024

  M-11 --- Warn, Record, Continue                 P-01                            ★★         20     10 min LOCK-11: HP-013, UP-025, UP-026

  M-12 --- Zero Stock Is Still Orderable          P-01                            ★★         20     10 min LOCK-12: HP-014, UP-027, UP-028

  M-13 --- Wake Irene at the Threshold            P-04/P-02                       ★★         20     15 min LOCK-13: HP-015, UP-029, UP-030

  M-14 --- The 9 AM Stock Brief                   P-02                            ★★         20     12 min LOCK-14: HP-016, UP-031, UP-032

  M-15 --- Three Days Late, Not Before            P-02                            ★★         20     12 min LOCK-15: HP-017, UP-033, UP-034

  M-16 --- The 9 AM Operations Digest             P-02/P-03/P-07                 ★★★         35     15 min LOCK-16: HP-018, UP-035, UP-036

  M-17 --- Keep the Remaining 400 kg Open         P-02/P-05                       ★★         20     15 min LOCK-17: HP-019, UP-037, UP-038

  M-18 --- Fill the Customer, Not a Guess         P-01                            ★★         20     12 min LOCK-18: HP-020, UP-039, UP-040

  M-19 --- Trust the SQL Description              P-01/P-04                       ★★         20     12 min LOCK-19: HP-021, UP-041, UP-042

  M-20 --- Fetch the Real SQL Invoice             P-03                            ★★         20     12 min LOCK-20: HP-022, UP-043, UP-044

  M-21 --- One Approval Means One                 P-03                            ★★         20     10 min LOCK-21: HP-023, UP-045, UP-046

  M-22 --- Date It, Then Trace the Change         P-01                            ★★         20     12 min LOCK-23: HP-024, UP-047, UP-048

  M-23 --- Charge It as a SKU                     P-01                            ★★         20     12 min LOCK-24: HP-025, UP-049, UP-050

  M-24 --- Carry the Batch into the Credit Note   P-03                           ★★★         35     15 min LOCK-25: HP-026, UP-051, UP-052

  M-25 --- Return First, Credit Note Second       P-01/P-05/P-03                 ★★★         35     18 min LOCK-26: HP-027, UP-053, UP-054, UP-055

  M-26 --- Finance Creates the Item               P-04/P-03                       ★★         20     12 min LOCK-27: HP-028, UP-056, UP-057

  M-27 --- Match the COA to the Batch             P-05                           ★★★         35     18 min LOCK-28: HP-029, UP-058, UP-059

  M-28 --- C3 Stops at Batch Level                P-03/P-04                       ★★         20     12 min LOCK-29: HP-030, UP-060, UP-061

  M-29 --- Do Not Duplicate E-Invoice             P-03                            ★★         20     12 min LOCK-30: HP-031, UP-062, UP-063

  M-30 --- Finance Chat Is Here Now               P-03                            ★★         20     10 min LOCK-31: HP-032, UP-064, UP-065

  M-31 --- Say It Short                           P-01/P-02/P-03/P-05              ★         10      8 min LOCK-32: HP-033, UP-066, UP-067

  M-32 --- Keep Talking Under Pressure            Cross-functional               ★★★         50     30 min LOCK-33: HP-034, UP-068, UP-069

  M-33 --- Every Role Must Show Up                P-06                            ★★         20     15 min LOCK-34: HP-035, UP-070, UP-071

  M-34 --- Cut Over Without Test Data Leakage     P-04/P-06                      ★★★         50     30 min LOCK-35: HP-036, UP-072, UP-073

  M-35 --- The Supported Document Shelf           P-01/P-02/P-03/P-05            ★★★         50     30 min LOCK-36: HP-037, UP-074, UP-075
  ----------------------------------------------- --------------------- ------------ ---------- ---------- ---------------------------------------------------------

**Recommended order**

Tutorial and access: M-02, M-31.

Core order safety: M-03, M-04, M-06, M-07, M-08, M-10.

Order-to-delivery and operational control: M-01, M-11--M-18.

Finance, batch, tax, and permissions: M-20--M-30.

Stress, coverage, cutover, and full document shelf: M-32--M-35.

**Speedrun**

Use M-03, M-04, M-05, M-07, M-08, M-10, M-12, M-20, M-25, M-27, M-32, M-34, and M-35. This touches the highest-risk extraction, duplicate, SQL, permission, credit, payment, stock, document, return, COA, stability, cutover, and supported-document boundaries.

**100% Completion**

Complete all 35 Missions, all assigned Boss Fights, one Side Quest for your Persona, and at least two Chaos Cards.

**Squad split**

  ------------------------------- -------------------- ------------------------------------------------------------------
  Squad                           Persona(s)           Missions

  Sales squad                     P-01                 M-02--M-04, M-06--M-08, M-11--M-12, M-18--M-19, M-22--M-23, M-31

  Irene/Logistics squad           P-02/P-05            M-01, M-09, M-13--M-17, M-25, M-27

  Finance squad                   P-03                 M-08, M-10, M-20--M-25, M-28--M-30

  Admin/data squad                P-04                 M-05, M-09, M-13--M-16, M-19, M-26, M-28--M-29, M-34

  Governance/management squad     P-06/P-07            M-01, M-16, M-33--M-35

  Cross-functional stress squad   Mixed                M-32 and BF-01
  ------------------------------- -------------------- ------------------------------------------------------------------

**Missions blocked by missing preparation**

At minimum, M-03, M-07--M-10, M-13--M-16, M-20--M-30, M-32--M-35 depend on role, data, schedule, file, or client-side preparation listed in the Launch Readiness Checklist.

**XP summary**

Base Mission XP is earned for a properly executed **Pass or Fail with evidence**.

A useful **Blocked --- Test Data/Configuration** result earns 5 XP when the missing condition is clearly identified.

Sabotage bonus is self-recorded when the named challenge was genuinely attempted.

Each additional meaningful Chaos Card earns 10 XP, capped at two cards per Mission unless the campaign owner changes the rule.

Verified first-finder bug bounty: P1 50 XP, P2 30 XP, P3 15 XP, P4 5 XP.

**Section 8 --- Mission Cards**

**Mission M-01 --- Carry One Order Across the Relay · ★★★ · 35 XP · \~25 min**

**Persona:** Cross-Functional Relay --- Sales, Logistics, Finance/Admin and Management\
**Covers:** HP-001 · UP-001 · UP-002 · LOCK-01\
**Mission type:** Core / Handoff

**The situation**

A normal customer order must travel from capture to fulfilment and financial visibility. **Every handoff must preserve the same customer, item, quantity, price basis, status, and document links.** A malformed or blocked record must stop before it contaminates the next stage.

***Why this matters:** Mackessen needs one controlled operating flow, not disconnected screens.*

**Precondition:** Use a live-SQL UAT customer with complete master data and item MK-221 -- Food Grade Phosphate (ZENIA); normal price/credit; delivery date supplied. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Existing UAT master data and an order request

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Use a live-SQL UAT customer with complete master data and item MK-221 -- Food Grade Phosphate (ZENIA); normal price/credit; delivery date supplied.

**Challenge condition (UP-001):** Order message contains a customer or item that does not exist in SQL.

**Challenge condition (UP-002):** CPO exists but SO is still draft, blocked or unapproved.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** creates/advances the order, **Logistics** handles delivery, **Finance/Admin** handles invoice/receipt work, and **Management** views lifecycle status.

**Always:** preserve the same business record and lifecycle status across every handoff.

**Never:** create a downstream document from a draft, blocked, or unapproved upstream record.

**Before submitting:** confirm the selected customer, item, price/credit condition, delivery date, and current document state.

**Escalate when:** a role cannot continue because the previous stage is incomplete or requires approval.

**Your goal**

Move one valid order through the roles and prove that each person sees the correct state without bypassing a blocked stage.

**Say it your way**

"create order for \[customer\], \[item\] qty \[x\], deliver \[date\]"

"SO ready, prepare the DO and show me the status"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Each role sees only its relevant workspace/actions; statuses move in order and remain visible; customer, item, price, credit and invoice values match SQL.

MAIA does not invent a customer/item or submit to SQL. It keeps the record unsubmitted and clearly asks the user to correct or select valid SQL data.

MAIA refuses the downstream action, shows the current blocking state, and creates no SQL DO.

**It should stop and ask you if**

the customer or item cannot be resolved from authoritative data

the Sales Order is draft, blocked, or unapproved

a role is asked to perform an action outside its workspace

**If something breaks mid-way**

It identifies the exact failed stage, preserves completed records, and explains who must act next. It **must not create a SQL Delivery Order or later document from an invalid Sales Order**.

**Sabotage bonus (+20 XP)**

Use a customer or item that does not exist in SQL.

Ask Logistics to create the Delivery Order while the Sales Order is still blocked.

**Poke it**

Can Management tell exactly where the order stopped?

Does every role see only the actions relevant to them?

**Loot to capture**

CPO/SO/DO/invoice/receipt references created or viewed

screenshots from each role

status timeline and timestamps

selected customer/item criteria

**Mission M-02 --- Telegram Is the Front Door · ★ · 10 XP · \~8 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-002 · UP-003 · UP-004 · LOCK-02\
**Mission type:** Core / Permission

**The situation**

The go-live channel is **Telegram**, not WhatsApp. A linked Sales user needs to start a normal order request, while an unregistered identity must be refused without seeing customer or order data.

***Why this matters:** The campaign must test the channel Mackessen will actually use and avoid treating WhatsApp's external blocker as a product failure.*

**Precondition:** Sales user\'s Telegram account is linked to MAIA. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Telegram message and linked/unlinked Telegram identities

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Sales user\'s Telegram account is linked to MAIA.

**Challenge condition (UP-003):** WhatsApp remains unavailable.

**Challenge condition (UP-004):** Telegram account is not linked to a MAIA user.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** A registered **Sales user** may work through Telegram. An **unregistered Telegram identity** must be refused.

**Always:** use Telegram for current go-live testing.

**Never:** treat unavailable WhatsApp as a go-live failure or expose data to an unlinked identity.

**Before submitting:** confirm which Telegram account is registered and which one is intentionally unregistered.

**Escalate when:** a legitimate tester account is not linked to the expected MAIA role.

**Your goal**

Prove that a registered Telegram user can work and an unregistered user cannot.

**Say it your way**

"create order for \[customer\]"

"help me draft CPO for this order"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Telegram accepts the request and creates/opens the expected draft record; no WhatsApp step is required.

The Telegram tests can proceed and WhatsApp unavailability is not marked as a go-live failure or blocker.

MAIA does not create an order. It gives a clear access/linking message without exposing customer or order data.

**It should stop and ask you if**

the Telegram identity is not linked

the request would expose customer or order data to an unregistered user

**If something breaks mid-way**

It gives a clear linking/access message and remains available to valid users. It **must not create an order for the unregistered identity**.

**Sabotage bonus (+10 XP)**

Send the same command from an unregistered Telegram account.

Mention that WhatsApp is unavailable and see whether the test can continue.

**Poke it**

Is the refusal clear without leaking data?

Can the valid user continue immediately after the invalid attempt?

**Loot to capture**

registered and unregistered account identifiers

response screenshots

created draft reference for the valid account

timestamps

**Mission M-03 --- Read the Order Without Guessing · ★★★ · 35 XP · \~25 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-003 · HP-004 · HP-005 · UP-005 · UP-006 · UP-007 · LOCK-03\
**Mission type:** Core / Edge / Regression

**The situation**

Orders arrive as messages, photos, and PDFs. **Customer identity must be correct, item-line accuracy must reach at least 90% across the approved pack, and uncertain fields must be exposed before submission.**

***Why this matters:** The customer is buying safe PO-to-SO automation, not confident guessing.*

**Precondition:** The required positive conditions are available: Client-provided text test: confirmed SQL customer; item MK-221; quantity 25 kg; delivery date.; Client-provided clear photo/handwritten order using a confirmed SQL customer and known SQL items.; Client-provided PDF/PO pack of at least 10 representative orders; expected item lines prepared by client. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Free-form text, clear photo/handwritten order, and PDF/PO files

**Choose or prepare:**

Use the relevant reusable samples from 01_Customer_Order_Inputs/, 02_Degraded_and_Invalid_Order_Files/, and 04_Special_Regression_Fixtures/.

Choose any active customer, item, document, batch, or record visible in your assigned UAT account that meets the criteria below.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Client-provided text test: confirmed SQL customer; item MK-221; quantity 25 kg; delivery date.

**Positive condition:** Client-provided clear photo/handwritten order using a confirmed SQL customer and known SQL items.

**Positive condition:** Client-provided PDF/PO pack of at least 10 representative orders; expected item lines prepared by client.

**Challenge condition (UP-005):** Use the observed ambiguous phrase \'roasted chicken seasoning\' where SQL contains several similar products (verify exact live codes, e.g. CR005P/EX03).

**Challenge condition (UP-006):** Blurred/cropped photo or PDF with unreadable customer/PO/item data.

**Challenge condition (UP-007):** Use an input that was previously extracted wrongly, then corrected and saved as the approved correction example.

**Fixed reference:** REG-01 --- REG-01_Extraction_Accuracy_Answer_Key.md; REG-02 --- approved corrected-extraction sample

**Roles and business rules**

**Roles and approvals:** A **Sales user** reviews and corrects extraction before any submitted Sales Order.

**Always:** review the extracted customer, contact/address, item, quantity, and date before submission.

**Never:** submit guessed or unreadable order data.

**Before submitting:** compare the extracted lines against the approved answer key and correct any uncertain mapping.

**Escalate when:** the order pack, answer key, or learning interval has not been approved.

**Your goal**

Extract the approved order set accurately, correct uncertainty, and demonstrate that a known corrected mistake does not return.

**Say it your way**

"pls read attached and draft order"

"customer wants \[item\] qty \[x\], deliver \[date\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Customer is correct; SQL contact/address auto-fill; item, quantity and date match the message.

Customer details auto-fill from SQL and extracted item lines count toward the ≥90% UAT item-accuracy result.

Customer extraction is correct for the test set and item-line accuracy is at least 90%; no submitted order bypasses review.

MAIA does not silently choose the wrong item. It asks a short clarification or flags the ambiguous line for human correction before submission.

MAIA clearly identifies the unreadable/missing fields, requests a better file or manual correction, and creates no submitted SO.

The same extraction mistake is not repeated. If confidence is still low, MAIA asks for review rather than reverting to the known wrong mapping.

**It should stop and ask you if**

a phrase matches several SQL items

the photo/PDF hides a critical customer, PO, item, or quantity field

the extracted customer cannot be confirmed

**If something breaks mid-way**

It names the unreadable or ambiguous line, requests a better file or correction, and remains usable for the next valid request. It **must not create a submitted SO from unresolved extraction**.

**Sabotage bonus (+20 XP)**

Use "roasted chicken seasoning" without a unique code.

Upload a cropped or blurred copy.

Repeat the approved corrected-extraction fixture.

**Poke it**

Does it identify exactly which line is uncertain?

Can one line be corrected without re-entering the full order?

Does the correction persist after the configured interval?

**Loot to capture**

input filename/message

chosen customer and item

expected-versus-actual line count

CPO/SO references

clarification and correction screenshots

**Mission M-04 --- One Customer, One PO, One CPO · ★★ · 20 XP · \~12 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-006 · UP-008 · UP-009 · LOCK-04\
**Mission type:** Core / Concurrency

**The situation**

Two customers may legitimately use the same PO number. The dangerous case is **the same customer plus the same PO number**, which must hard-block even when two Sales users submit almost together.

***Why this matters:** Duplicate prevention protects Mackessen from double processing and duplicate downstream documents.*

**Precondition:** Customer A and Customer B in SQL; use the same PO number PO-TEST-001 for both. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Tester-created CPO records and unique/reused PO numbers

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Reserve the shared reference or record so another tester does not accidentally consume it first.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Customer A and Customer B in SQL; use the same PO number PO-TEST-001 for both.

**Challenge condition (UP-008):** Existing active CPO for Customer A + PO-TEST-002.

**Challenge condition (UP-009):** Both users have the same Customer A + PO-TEST-003 and submit within the same test window.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales users** may create CPOs; duplicate rules apply even across two concurrent Sales users.

**Always:** treat customer plus PO number as the duplicate key.

**Never:** allow a warning-only bypass for the same customer and PO number.

**Before submitting:** reserve a unique UAT reference and coordinate the concurrency attempt.

**Escalate when:** another tester already owns the reference or the existing CPO state is unclear.

**Your goal**

Show that cross-customer reuse is allowed while same-customer duplication is hard-blocked.

**Say it your way**

"create CPO for \[customer\] PO \[unique-ref\]"

"same PO again for \[same customer\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Both CPOs are allowed because the customers differ; each points to the correct customer.

Creation is hard-blocked. A clear duplicate message appears and no second CPO/SO is created; warning-only behaviour is a Fail.

Only the first valid CPO is created. The second is hard-blocked and linked to the existing record; no duplicate downstream order exists.

**It should stop and ask you if**

the same customer and PO number already exist

two users submit the same duplicate at nearly the same time

**If something breaks mid-way**

It blocks the second same-customer CPO, points to the existing record, and creates no downstream duplicate. It **must not rely on a dismissible warning**.

**Sabotage bonus (+10 XP)**

Reuse one PO number for a different customer.

Have two Sales users submit the same customer/PO within the same test window.

**Poke it**

Is the existing record easy to find from the duplicate message?

Can either user accidentally continue downstream?

**Loot to capture**

customer names

PO references

first CPO ID

blocked-attempt screenshot

concurrency timestamps

**Mission M-05 --- SQL Has the Final Say · ★★★ · 35 XP · \~20 min**

**Persona:** System Steward --- Admin with Sales witness\
**Covers:** HP-007 · UP-010 · UP-011 · LOCK-05\
**Mission type:** Core / Data Integrity

**The situation**

MAIA coordinates work, but **SQL remains authoritative** for masters, pricing, stock, credit, orders, invoices, and tax data. A stale or conflicting local value must never quietly become production truth.

***Why this matters:** Mackessen will not trust MAIA if it creates a second hidden master.*

**Precondition:** Designated UAT SQL record; change one customer address and one item description/price in SQL. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Designated UAT records whose authoritative values can be changed by an approved SQL owner

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Designated UAT SQL record; change one customer address and one item description/price in SQL.

**Challenge condition (UP-010):** A MAIA field can be locally edited while SQL has a different authoritative value.

**Challenge condition (UP-011):** Temporarily use a controlled SQL-connection failure or stale-sync test condition.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Admin/client SQL owner** controls authoritative data. **Sales** verifies only the MAIA-visible half.

**Always:** use the current authoritative SQL-backed value.

**Never:** retain or submit a conflicting local production copy.

**Before submitting:** use only designated UAT records and have the SQL owner record before/after values.

**Escalate when:** a SQL change, connection failure, or production write requires client-side access.

**Your goal**

Prove that current SQL values are shown and that a sync failure does not cause MAIA to invent data.

**Say it your way**

"show \[customer\] details and price for \[item\]"

"refresh this item and create a draft"

***Now forget these examples and type it how YOU would.***

**Win conditions**

MAIA shows the authoritative SQL values and records a successful sync; downstream drafts use those values.

MAIA either prevents the local conflict or clearly restores/uses the SQL value. No hidden second production master remains.

MAIA shows a clear sync/availability error and does not fabricate values or submit with unknown authoritative data.

**It should stop and ask you if**

SQL is unavailable or stale

MAIA and SQL show conflicting values

the tester cannot verify the client-side source

**If something breaks mid-way**

It surfaces the sync/availability problem and refuses to fabricate values. The client-side SQL owner verifies the backend half separately.

**Sabotage bonus (+20 XP)**

Change a customer address and item description/price after an earlier MAIA view exists.

Use a controlled stale-sync or connection-failure condition.

**Poke it**

Does a new draft use the refreshed value?

Is the environment/source clearly identified?

**Loot to capture**

MAIA before/after screenshots

record IDs

SQL-owner verification reference

sync/error timestamp

**Mission M-06 --- Price Me Correctly · ★★ · 20 XP · \~12 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-008 · UP-012 · UP-013 · LOCK-06\
**Mission type:** Core / Data Integrity

**The situation**

The same item may have a different price for each customer. MAIA must use the **customer-specific SQL price**, visibly flag a missing price, and discard stale cached pricing.

***Why this matters:** Wrong pricing damages margin, trust, and customer relationships.*

**Precondition:** Confirmed SQL customer with a customer-specific price for MK-221. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Customer and item combinations visible in the tester account

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Confirmed SQL customer with a customer-specific price for MK-221.

**Challenge condition (UP-012):** Confirmed SQL customer/item combination with no customer-specific price.

**Challenge condition (UP-013):** Change the designated customer\'s SQL price after an earlier MAIA draft/cache exists.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** selects the customer and item. Any manual price exception follows the separate pricing-approval rule.

**Always:** use the selected customer's current SQL price.

**Never:** use zero, a guessed price, another customer's price, or an old cache silently.

**Before submitting:** choose one valid priced pair and, for the negative case, one confirmed pair with no price.

**Escalate when:** the customer-item price is missing or a manual override needs approval.

**Your goal**

Create a priced order using a valid pair, then prove missing and updated prices are handled safely.

**Say it your way**

"quote \[item\] for \[customer\]"

"add \[item\] qty \[x\] for this customer"

***Now forget these examples and type it how YOU would.***

**Win conditions**

The unit price auto-fills exactly from the customer\'s SQL price record without manual lookup.

Missing pricing is visibly flagged. MAIA does not silently use zero, a guessed price or another customer\'s price.

The current SQL customer price is shown. An old local/cached price is not treated as authoritative.

**It should stop and ask you if**

no customer-specific price exists

the displayed price differs from the current authoritative value

**If something breaks mid-way**

It visibly flags the missing or stale price and prevents silent submission with a guessed value.

**Sabotage bonus (+10 XP)**

Choose a valid customer/item combination with no price.

Have the SQL owner update the price after an earlier draft exists.

**Poke it**

Does the old draft refresh or clearly disclose its stale state?

Can you see which price source was used?

**Loot to capture**

customer/item selected

displayed price

missing-price warning

before/after draft screenshots

record IDs

**Mission M-07 --- Below the Floor Needs Approval · ★★ · 20 XP · \~15 min**

**Persona:** Sales Desk --- Sales User with Sales Manager approver\
**Covers:** HP-009 · UP-014 · UP-015 · LOCK-07\
**Mission type:** Core / Permission

**The situation**

A Sales user enters a price below the minimum selling price. **Finance Manager, Credit Controller, Sales Manager, or Admin** may approve; the Sales user may not self-approve.

***Why this matters:** Minimum-price approval protects margin and creates a traceable exception.*

**Precondition:** Customer/item has a configured minimum selling price; enter a price below it. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Customer/item with configured minimum selling price

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Customer/item has a configured minimum selling price; enter a price below it.

**Challenge condition (UP-014):** Below-minimum-price order is waiting for approval.

**Challenge condition (UP-015):** Below-minimum-price order has no approval.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** Approvers are **Finance Manager, Credit Controller, Sales Manager, and Admin**. A **Sales user** cannot approve their own exception.

**Always:** route below-minimum pricing to a permitted approver and log the decision.

**Never:** auto-approve or allow the requesting Sales user to approve.

**Before submitting:** confirm the configured minimum and use a price demonstrably below it.

**Escalate when:** the final role matrix conflicts with the locked approver list.

**Your goal**

Trigger the exception, approve it with a permitted role, and prove the unapproved path cannot continue.

**Say it your way**

"set price to \[below-minimum amount\]"

"customer insist this price, send for approval"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Order is held until approval, then released. Activity shows approver, timestamp and order reference.

Approval is denied; order remains locked and the attempt is visible in the audit trail if configured.

MAIA refuses further processing until an authorized approval exists; it does not auto-approve or silently accept the price.

**It should stop and ask you if**

the price is below minimum and no approval exists

the acting account lacks an approved role

**If something breaks mid-way**

It keeps the order locked, names the approval requirement, and preserves the request. It **must not continue without logged approval**.

**Sabotage bonus (+10 XP)**

Attempt approval from the Sales account.

Try to continue downstream without any approval.

**Poke it**

Does the log show approver, timestamp, and order?

Can the approver see the exact exception they are approving?

**Loot to capture**

order reference

minimum and entered price

approval/refusal screenshots

approver and timestamp

**Mission M-08 --- Stop the Over-Credit Order at SO · ★★★ · 35 XP · \~18 min**

**Persona:** Sales Desk with Finance Manager approver\
**Covers:** HP-010 · UP-016 · UP-017 · UP-018 · LOCK-08\
**Mission type:** Core / Permission / Regression

**The situation**

An order pushes a customer above the credit limit. The block must appear **at Sales Order submission**, not only later at invoice, and no downstream document may exist without a logged override.

***Why this matters:** A late credit block exposes Mackessen after the commercial commitment has already advanced.*

**Precondition:** UAT customer credit limit RM30,000; unpaid exposure RM32,000 (observed UAT example); authorized Finance Manager account. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Customer with controlled credit limit and exposure

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** UAT customer credit limit RM30,000; unpaid exposure RM32,000 (observed UAT example); authorized Finance Manager account.

**Challenge condition (UP-016):** Same over-limit customer and blocked SO.

**Challenge condition (UP-017):** Over-limit SO is blocked and has no approved override.

**Challenge condition (UP-018):** Over-limit customer; observe draft, SO submission and invoice stages.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** Override roles are **Finance Manager, Credit Controller, Sales Manager, and Admin**. **Sales** cannot override without one of these roles.

**Always:** block at SO submission and log an approved override.

**Never:** wait until invoice stage or allow downstream documents from an unapproved blocked SO.

**Before submitting:** use a client-approved over-limit UAT customer and assigned approver.

**Escalate when:** credit exposure cannot be safely prepared or the approver role is not confirmed.

**Your goal**

Trigger the SO-stage block, verify the Sales refusal, and complete one authorized override.

**Say it your way**

"submit this SO for \[over-limit customer\]"

"override credit block for \[SO\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

SO is blocked immediately at submission; authorized override releases it and logs approver, timestamp, reason/order.

Override is denied and SO remains blocked.

No downstream document is created. The user is directed to the credit approval requirement.

The block appears at SO submission, not only at invoice stage. A later-only block is a Fail.

**It should stop and ask you if**

the customer exceeds the credit limit

an unauthorized user attempts override

Logistics/Finance tries a downstream action before override

**If something breaks mid-way**

It leaves the SO blocked, exposes the reason, and creates no downstream document. A later-only invoice block is a failure.

**Sabotage bonus (+20 XP)**

Attempt override from Sales.

Try to create the next document without approval.

Observe draft, SO submission, and invoice stages to catch a late block.

**Poke it**

Is the customer-wide exposure understandable?

Does the audit identify who overrode what and when?

**Loot to capture**

credit limit/exposure criteria

SO reference

block screenshot

override log

downstream non-creation evidence

**Mission M-09 --- Irene's Bypass Follows the Role · ★★ · 20 XP · \~12 min**

**Persona:** Irene --- Credit Controller / Logistics PIC\
**Covers:** HP-011 · UP-019 · UP-020 · LOCK-09\
**Mission type:** Permission / Regression

**The situation**

Irene can bypass the credit block because her configured role permits it. **The permission must follow the role, not the person's name, memory, or previous session.**

***Why this matters:** Broad or sticky permissions are a P1 trust failure even when the expected user succeeds.*

**Precondition:** Irene\'s test account is assigned the authorized Credit Controller role; over-limit SO exists. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Over-limit SO and role-configured user accounts

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Irene\'s test account is assigned the authorized Credit Controller role; over-limit SO exists.

**Challenge condition (UP-019):** Sales account has no authorized override role; over-limit SO exists.

**Challenge condition (UP-020):** Temporarily remove the Credit Controller/authorized role from Irene\'s UAT account.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Irene** may bypass only while assigned **Credit Controller** or another locked approval role. **Sales** must be refused.

**Always:** derive bypass authority from the current configured role.

**Never:** grant permission based on name or cached prior access.

**Before submitting:** coordinate temporary role removal and restoration with Admin.

**Escalate when:** the final role matrix is not approved or role changes cannot be safely reversed.

**Your goal**

Prove Irene can act while authorized, Sales cannot, and Irene loses the bypass when the role is temporarily removed.

**Say it your way**

"approve credit override for \[SO\]"

"continue this blocked order"

***Now forget these examples and type it how YOU would.***

**Win conditions**

The action is allowed because of the role and is logged with Irene, timestamp and SO reference.

The action is denied and the SO remains blocked.

Bypass is denied. Permission follows configured role, not the person\'s name or prior session; restore role after test.

**It should stop and ask you if**

the current account lacks Credit Controller or another authorized role

the role change has not propagated

**If something breaks mid-way**

It denies the action when the role is absent and restores the expected access only after the role is restored.

**Sabotage bonus (+10 XP)**

Attempt the same bypass from Sales.

Remove Irene's authorized role temporarily and retry.

**Poke it**

Does logout/login change the result correctly?

Is the denial understandable without exposing restricted details?

**Loot to capture**

role assignment evidence

SO reference

successful bypass log

Sales refusal

post-removal refusal

**Mission M-10 --- The Clock on Payment Terms · ★★★ · 35 XP · \~25 min**

**Persona:** Sales Desk with Finance oversight\
**Covers:** HP-012 · UP-021 · UP-022 · UP-023 · UP-024 · LOCK-10\
**Mission type:** Core / Boundary

**The situation**

Payment terms create time-based controls: **COD blocks on any unpaid invoice; 30-day alerts on day 31 and blocks on day 61; 60-day alerts on day 61 and blocks on day 91.** Reminders repeat every 14 days.

***Why this matters:** Mackessen's credit discipline depends on exact boundaries, not approximate ageing.*

**Precondition:** Three customers: COD with no unpaid invoice; 30-day invoice aged 30 days; 60-day invoice aged 60 days. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Controlled COD, 30-day, and 60-day customer invoice states

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Three customers: COD with no unpaid invoice; 30-day invoice aged 30 days; 60-day invoice aged 60 days.

**Challenge condition (UP-021):** COD customer has any unpaid invoice in SQL.

**Challenge condition (UP-022):** 30-day customer: controlled SQL invoice dates at day 31 and day 61.

**Challenge condition (UP-023):** 60-day customer: controlled SQL invoice dates at day 61 and day 91.

**Challenge condition (UP-024):** Payment-term block is active.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** receives alert/block behaviour. An override must come from a role permitted by the final approved matrix.

**Always:** use SQL invoice and payment-term data and apply the rule customer-wide.

**Never:** block before the locked day or allow an unauthorized override.

**Before submitting:** have the data owner prepare controlled age states and record the configured dates.

**Escalate when:** safe invoice-age manipulation or the authorized override role is unavailable.

**Your goal**

Exercise the allowed, alert, block, reminder, and authorized override boundaries.

**Say it your way**

"create new order for \[customer\]"

"why is this customer blocked?"

***Now forget these examples and type it how YOU would.***

**Win conditions**

All three remain orderable because they are within the locked term rules; no premature customer-wide block occurs.

The customer is blocked from new orders until payment is cleared or an authorized override is logged.

Day 31 alerts without blocking; day 61 customer-wide block; reminders repeat at the configured 14-day cadence; authorized override is logged.

Day 61 alerts without blocking; day 91 customer-wide block; reminders repeat at the configured 14-day cadence; authorized override is logged.

Override is denied; no new SO proceeds.

**It should stop and ask you if**

COD has any unpaid invoice

the 30-day customer reaches day 61

the 60-day customer reaches day 91

an unauthorized override is attempted

**If something breaks mid-way**

It distinguishes alert from block, preserves the exact threshold, and records any permitted override. It **must not shift the boundary by a day**.

**Sabotage bonus (+20 XP)**

Test day 31/day 61 for 30-day terms.

Test day 61/day 91 for 60-day terms.

Attempt override from Sales.

**Poke it**

Do 14-day reminders repeat from the configured trigger?

Is the block customer-wide across new orders?

**Loot to capture**

customer/payment-term criteria

invoice ages

alert/block screenshots

reminder timestamps

override log

**Mission M-11 --- Warn, Record, Continue · ★★ · 20 XP · \~10 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-013 · UP-025 · UP-026 · LOCK-11\
**Mission type:** Recovery / Audit

**The situation**

A low-risk warning should interrupt just enough to be acknowledged, then let the user continue. **The activity log must retain user, timestamp, warning type, and order reference.**

***Why this matters:** Warnings are useful only when visible, traceable, and not accidentally converted into hard blocks.*

**Precondition:** Create an order that produces a non-blocking low-stock warning. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Order that produces a non-blocking warning

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Create an order that produces a non-blocking low-stock warning.

**Challenge condition (UP-025):** Non-blocking warning modal is open.

**Challenge condition (UP-026):** Acknowledged warning on a known order.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** acknowledges the warning. **Admin** may inspect the activity log.

**Always:** require acknowledgement and create a complete activity-log entry.

**Never:** let the warning disappear unrecorded or become a permanent business block after acknowledgement.

**Before submitting:** choose a valid order condition that triggers a non-blocking warning.

**Escalate when:** the warning type or expected recipient is not configured.

**Your goal**

Acknowledge one warning, continue the valid order, and inspect the audit record.

**Say it your way**

"continue with this order"

"acknowledge warning and submit"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Order can continue after acknowledgement; activity log records user, timestamp, warning type and order reference.

MAIA requires acknowledgement before continuing but does not convert the warning into a business block after acknowledgement.

Missing user, timestamp, warning type or order reference is a Fail; the log must point to the correct order.

**It should stop and ask you if**

the modal has not been acknowledged

the log does not identify the correct order

**If something breaks mid-way**

It retains the order and warning context, allows continuation after acknowledgement, and exposes any logging error.

**Sabotage bonus (+10 XP)**

Try to continue without acknowledging.

Compare the log fields to the actual user/order/time.

**Poke it**

Can you find the warning later from the order?

Does acknowledgement happen only once?

**Loot to capture**

order reference

warning screenshot

acknowledgement result

activity-log screenshot

timestamp

**Mission M-12 --- Zero Stock Is Still Orderable · ★★ · 20 XP · \~10 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-014 · UP-027 · UP-028 · LOCK-12\
**Mission type:** Core / Boundary / Regression

**The situation**

SQL stock may show zero full-pack quantity even when loose stock or operational judgement still allows the order. **Stock is informational only and must not hard-block submission.**

***Why this matters:** A false stock block prevents valid business and contradicts the locked operating rule.*

**Precondition:** SQL quantity is zero for a sellable item where loose quantity may exist (observed 25 kg full-pack/loose-stock scenario). If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Sellable items at zero and low stock

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** SQL quantity is zero for a sellable item where loose quantity may exist (observed 25 kg full-pack/loose-stock scenario).

**Challenge condition (UP-027):** Item SQL quantity is exactly zero.

**Challenge condition (UP-028):** Item SQL quantity is below the configured low-stock threshold but above zero.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** may submit when stock is low/zero, provided no other blocking rule applies.

**Always:** show stock information without turning it into an order block.

**Never:** hard-block solely because quantity is zero or below threshold.

**Before submitting:** select sellable items whose SQL quantities meet the zero and low-stock conditions.

**Escalate when:** another business rule, such as credit or missing price, is causing the block instead.

**Your goal**

Submit orders for one zero-stock and one low-stock item while preserving the warning.

**Say it your way**

"create order for \[zero-stock item\] qty \[x\]"

"submit despite stock warning"

***Now forget these examples and type it how YOU would.***

**Win conditions**

A stock warning may appear, but the SO remains orderable and can be submitted.

MAIA must not hard-block because of stock quantity. A stock-based submission block is a Fail.

MAIA must not hard-block the order; low-stock control remains informational/notification-only.

**It should stop and ask you if**

the only blocker presented is stock quantity

the tester cannot distinguish stock warning from another rule

**If something breaks mid-way**

It keeps the item orderable, shows the informational warning, and allows normal submission when all other rules pass.

**Sabotage bonus (+10 XP)**

Use stock exactly zero.

Use stock below threshold but above zero.

**Poke it**

Is the warning clear without sounding like a hard refusal?

Does the order remain valid downstream?

**Loot to capture**

item/stock criteria

warning screenshot

submitted order reference

evidence no stock-based block occurred

**Mission M-13 --- Wake Irene at the Threshold · ★★ · 20 XP · \~15 min**

**Persona:** System Steward --- Admin and Irene\
**Covers:** HP-015 · UP-029 · UP-030 · LOCK-13\
**Mission type:** Configuration / Notification

**The situation**

Admin sets a threshold for a UAT item. Crossing below it and reaching zero must notify **Irene/Logistics through both MAIA website notifications and Telegram**.

***Why this matters:** A threshold is useless if invalid values are accepted or the right people miss the alert.*

**Precondition:** Set threshold 50 for a UAT item; set SQL quantity 49, then 0. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Configurable low-stock threshold and recipient accounts

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Set threshold 50 for a UAT item; set SQL quantity 49, then 0.

**Challenge condition (UP-029):** Attempt threshold values: blank, negative and non-numeric.

**Challenge condition (UP-030):** Threshold is crossed for a UAT item.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Admin** configures thresholds. **Irene/Logistics** receives notifications.

**Always:** retain the last valid threshold and send alerts through both required channels.

**Never:** accept blank, negative, or non-numeric thresholds or notify the wrong recipient.

**Before submitting:** confirm the UAT item, threshold, recipient accounts, and safe quantity changes.

**Escalate when:** recipient mapping or production threshold is not approved.

**Your goal**

Configure one valid threshold, trigger low and zero stock, and reject invalid threshold inputs.

**Say it your way**

"set low stock threshold \[x\] for \[item\]"

"show stock alert settings"

***Now forget these examples and type it how YOU would.***

**Win conditions**

At 49, Irene receives a low-stock alert on both channels; at 0, an out-of-stock alert on both. Alert shows the correct item.

Invalid thresholds are rejected with a clear message; the last valid threshold remains active.

Missing website alert, missing Telegram alert, or delivery to the wrong recipient is a Fail.

**It should stop and ask you if**

the threshold value is invalid

recipient/channel configuration is missing

the item state cannot be safely changed

**If something breaks mid-way**

It rejects invalid values, preserves the last valid threshold, and identifies any failed notification channel.

**Sabotage bonus (+10 XP)**

Try blank, negative, and non-numeric values.

Cross the threshold, then set quantity to zero.

**Poke it**

Are low-stock and out-of-stock alerts distinguishable?

Does changing the threshold affect the next evaluation?

**Loot to capture**

item and threshold

invalid-input screenshots

website notification

Telegram notification

recipient/timestamp

**Mission M-14 --- The 9 AM Stock Brief · ★★ · 20 XP · \~12 min**

**Persona:** Irene --- Credit Controller / Logistics PIC\
**Covers:** HP-016 · UP-031 · UP-032 · LOCK-14\
**Mission type:** Scheduled / Notification

**The situation**

At **9:00 AM**, Irene needs one stock summary that separates low stock from out of stock and includes code, SQL description, and quantity.

***Why this matters:** A late, duplicated, or inaccurate summary creates the wrong priorities for the day.*

**Precondition:** Before 9:00 AM, prepare at least one low-stock and one zero-stock SQL item. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Prepared low-stock and zero-stock records plus scheduled summary

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Coordinate the scheduled trigger or approved time-shift simulation before starting.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Before 9:00 AM, prepare at least one low-stock and one zero-stock SQL item.

**Challenge condition (UP-031):** Same prepared stock data.

**Challenge condition (UP-032):** Known SQL code/description/quantity for two stock items.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Irene/Logistics** receives and validates the daily summary.

**Always:** send once at the scheduled time with code, description, and quantity.

**Never:** mix categories, omit required fields, or use values that conflict with SQL.

**Before submitting:** prepare at least one low-stock and one zero-stock item before the run.

**Escalate when:** the scheduler cannot be triggered/observed in the UAT window.

**Your goal**

Validate the scheduled summary's timing, categories, and authoritative values.

**Say it your way**

"show today stock summary"

"what is low and out of stock?"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Summary has separate low-stock and out-of-stock sections and shows item code, SQL description and quantity for each.

No summary at 9:00 AM, an unexplained late run, or duplicate daily runs is a Fail.

Mixed categories, missing code/description/quantity, or values that do not match SQL are a Fail.

**It should stop and ask you if**

the summary is missing or duplicated

a required item/category is absent

values cannot be reconciled by the data owner

**If something breaks mid-way**

It exposes the missing/late/duplicate run and preserves the prepared stock data for a controlled retest.

**Sabotage bonus (+10 XP)**

Place one item exactly in each category.

Check for a second unexpected run on the same day.

**Poke it**

Can Irene act directly from the summary?

Are descriptions short enough to scan?

**Loot to capture**

summary screenshot

scheduled timestamp

item codes/descriptions/quantities

duplicate-run check

**Mission M-15 --- Three Days Late, Not Before · ★★ · 20 XP · \~12 min**

**Persona:** Irene --- Logistics PIC\
**Covers:** HP-017 · UP-033 · UP-034 · LOCK-15\
**Mission type:** Scheduled / Boundary

**The situation**

A delivery delayed **more than three full days** must alert Irene through website and chatbot. Exactly three days is too early, and the alert must clear only after completion or valid rescheduling.

***Why this matters:** Early or stale delivery alerts create noise and hide the genuinely late cases.*

**Precondition:** Delivery remains incomplete for more than three full days. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Delivery records at exact and beyond-three-day delay states

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Coordinate the scheduled trigger or approved time-shift simulation before starting.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Delivery remains incomplete for more than three full days.

**Challenge condition (UP-033):** Delivery is delayed exactly three full days, not more.

**Challenge condition (UP-034):** Delayed alert is active.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Irene/Logistics** receives and resolves delayed-delivery alerts.

**Always:** trigger after more than three full days and clear only on valid closure/reschedule.

**Never:** alert at exactly three days or clear while the delivery remains unresolved.

**Before submitting:** use controlled delivery records with known timestamps and status.

**Escalate when:** time-state preparation cannot be safely controlled.

**Your goal**

Prove the trigger boundary and the correct clear conditions.

**Say it your way**

"show delayed deliveries"

"mark this delivery rescheduled to \[date\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Alert appears on both channels after the threshold and clears after completion/valid reschedule.

No delayed-delivery alert is sent yet; an early alert is a Fail.

The alert does not clear until this delivery is completed or validly rescheduled; clearing early or remaining after valid closure is a Fail.

**It should stop and ask you if**

the delivery is exactly three days late

completion/reschedule has not been validly recorded

**If something breaks mid-way**

It preserves the delayed record and explains the timing/status rather than silently dropping the alert.

**Sabotage bonus (+10 XP)**

Check one record at exactly three days.

Complete or validly reschedule an actively alerted delivery.

**Poke it**

Do both website and chatbot agree?

Does the alert identify the correct order/delivery?

**Loot to capture**

delivery reference

age calculation

website/chatbot alerts

clear-state evidence

timestamps

**Mission M-16 --- The 9 AM Operations Digest · ★★★ · 35 XP · \~15 min**

**Persona:** Cross-Functional Operations Team\
**Covers:** HP-018 · UP-035 · UP-036 · LOCK-16\
**Mission type:** Scheduled / Overview

**The situation**

At **9:00 AM**, the current MAIA digest must surface unpaid invoices, inactive customers, unclosed Sales Orders, reorder reminders, and partial-delivery reminders. Personalized digests are future work, not a go-live blocker.

***Why this matters:** The team needs one reliable morning view of what requires action.*

**Precondition:** Prepare SQL/MAIA data for: unpaid invoice, inactive customer, unclosed SO, reorder item and partial delivery. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Prepared records for all five digest categories

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Coordinate the scheduled trigger or approved time-shift simulation before starting.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Prepare SQL/MAIA data for: unpaid invoice, inactive customer, unclosed SO, reorder item and partial delivery.

**Challenge condition (UP-035):** Same prepared five-category data.

**Challenge condition (UP-036):** Prepared digest data and scheduled run.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** The **relevant operational team** receives the current generic digest; individual tailoring is deferred.

**Always:** include all configured categories and qualifying records once per scheduled day.

**Never:** fail the campaign because the digest is not personalized per user.

**Before submitting:** record the current inactive-customer and reorder rules and prepare one qualifying record per category.

**Escalate when:** the configured rule values or scheduler are unknown.

**Your goal**

Verify one complete, single daily digest using current configured logic.

**Say it your way**

"show today operations digest"

"what needs attention this morning?"

***Now forget these examples and type it how YOU would.***

**Win conditions**

All five categories are present with identifiable records/actions using current MAIA capability.

Any required category or qualifying record missing from the digest is a Fail.

Digest is available at 9:00 AM once per scheduled day. Missing, unexplained late or duplicated delivery is a Fail.

**It should stop and ask you if**

any required category is missing

the digest is late/duplicated without explanation

**If something breaks mid-way**

It identifies which category or scheduler event failed and leaves the source records available for retest.

**Sabotage bonus (+20 XP)**

Remove one qualifying record and confirm it disappears for the right reason.

Check for duplicate daily delivery.

**Poke it**

Are the next actions identifiable?

Can the team distinguish a partial-delivery reminder from an unclosed SO?

**Loot to capture**

digest screenshot

five qualifying record references

configured rule values

timestamp/duplicate check

**Mission M-17 --- Keep the Remaining 400 kg Open · ★★ · 20 XP · \~15 min**

**Persona:** Irene --- Logistics PIC\
**Covers:** HP-019 · UP-037 · UP-038 · LOCK-17\
**Mission type:** Core / Handoff

**The situation**

A **1,000 kg** Sales Order receives a first Delivery Order for **600 kg**. The remaining **400 kg** must stay open and remind Irene daily until final delivery or an authorized close.

***Why this matters:** Closing a partial order early loses customer demand and stock/document traceability.*

**Precondition:** SO quantity 1,000 kg; first DO delivers 600 kg. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Partially delivered Sales Order

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Reserve the shared reference or record so another tester does not accidentally consume it first.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** SO quantity 1,000 kg; first DO delivers 600 kg.

**Challenge condition (UP-037):** Same 1,000 kg SO and 600 kg first DO.

**Challenge condition (UP-038):** Partial order has remaining quantity and active reminders.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Logistics/Irene** manages partial delivery. Unauthorized closure must be refused under the final matrix.

**Always:** retain the outstanding quantity and daily reminder until valid completion/closure.

**Never:** close the Sales Order or lose the balance after the first delivery.

**Before submitting:** choose/create an SO whose quantity can be split and reserve it for this mission.

**Escalate when:** an authorized close role is needed but not defined in the final matrix.

**Your goal**

Submit the partial delivery, prove the remaining quantity persists, then complete the final delivery.

**Say it your way**

"deliver 600kg now, balance later"

"show outstanding quantity for \[SO\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

400 kg remains open and Irene receives daily reminder; after final delivery, open quantity becomes zero and reminders stop.

SO must not close or lose the remaining 400 kg. If it does, the test fails.

Closure is denied and reminders continue. Only full delivery or authorized close stops them.

**It should stop and ask you if**

the remaining quantity becomes zero too early

an unauthorized user attempts closure

**If something breaks mid-way**

It keeps the 400 kg open, preserves prior delivery evidence, and refuses unauthorized closure.

**Sabotage bonus (+10 XP)**

Attempt to close the outstanding balance from an unauthorized account.

Deliver the final 400 kg and check that reminders stop.

**Poke it**

Can Irene see every partial delivery?

Does the outstanding figure stay consistent across views?

**Loot to capture**

SO/DO references

initial and remaining quantities

reminder screenshot

final completion state

**Mission M-18 --- Fill the Customer, Not a Guess · ★★ · 20 XP · \~12 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-020 · UP-039 · UP-040 · LOCK-18\
**Mission type:** Core / Data Integrity

**The situation**

A selected customer should bring the **name, address, contact number, email, and TIN** from SQL. Missing fields must be exposed, and multiple delivery addresses must require a clear choice.

***Why this matters:** Wrong customer master data flows into every later document.*

**Precondition:** Confirmed SQL customer with name, address, contact number, email and TIN. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Customer records visible in the tester account

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Confirmed SQL customer with name, address, contact number, email and TIN.

**Challenge condition (UP-039):** SQL UAT customer is missing one required field, e.g. TIN or email.

**Challenge condition (UP-040):** Customer has multiple valid SQL delivery addresses.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** selects and confirms customer details and delivery address.

**Always:** use the SQL customer master and require address confirmation when several options exist.

**Never:** invent a missing field or silently choose the wrong address.

**Before submitting:** identify customers matching complete, missing-field, and multi-address criteria.

**Escalate when:** no suitable UAT customer exists or required-field behaviour is not configured.

**Your goal**

Use one complete customer, one incomplete customer, and one multi-address customer safely.

**Say it your way**

"create order for \[customer\]"

"use the \[branch/address\] delivery address"

***Now forget these examples and type it how YOU would.***

**Win conditions**

All five fields auto-fill from SQL and match the SQL customer master.

MAIA visibly flags the missing field and does not invent a value; submission behaviour follows the configured required-field rule.

MAIA shows the SQL addresses and requires a clear selection/confirmation rather than silently choosing the wrong address.

**It should stop and ask you if**

a required field is missing

more than one valid address exists

the customer match is ambiguous

**If something breaks mid-way**

It keeps the record reviewable, names the missing/ambiguous field, and prevents guessed data from becoming final.

**Sabotage bonus (+10 XP)**

Choose a customer missing TIN or email.

Choose a customer with several valid delivery addresses.

**Poke it**

Is the selected address visible before submission?

Do downstream documents preserve the chosen master data?

**Loot to capture**

customer references

five-field screenshot

missing-field warning

address-choice evidence

created document ID

**Mission M-19 --- Trust the SQL Description · ★★ · 20 XP · \~12 min**

**Persona:** Sales Desk with Admin data owner\
**Covers:** HP-021 · UP-041 · UP-042 · LOCK-19\
**Mission type:** Data Integrity / Regression

**The situation**

The SKU code alone is not enough. MAIA must show the **authoritative SQL item description**, including after a change, and must not replace it with brand/context text.

***Why this matters:** A correct code with a wrong description still leads users to choose the wrong product.*

**Precondition:** SQL item MK-221 has description \'Food Grade Phosphate\'. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Items visible in MAIA plus a designated item whose SQL description can be updated

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** SQL item MK-221 has description \'Food Grade Phosphate\'.

**Challenge condition (UP-041):** Use the observed roasted-chicken-seasoning example where the code is correct but description was missing/wrong (verify exact SQL code).

**Challenge condition (UP-042):** Change a UAT item description in SQL after an older MAIA value exists.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** uses the displayed item; **Admin/client SQL owner** controls the authoritative description.

**Always:** display the current SQL description.

**Never:** keep a missing, wrong, or stale description even when the code is correct.

**Before submitting:** use MK-221 immediately and verify any transcript-derived seasoning codes with the SQL owner.

**Escalate when:** the exact ambiguous item codes are not verified.

**Your goal**

Verify a known item description, challenge the ambiguous seasoning example, and refresh a changed UAT description.

**Say it your way**

"show item \[code\]"

"add \[item phrase\] to order"

***Now forget these examples and type it how YOU would.***

**Win conditions**

MAIA displays the same SQL description and brand/context does not replace the authoritative item description.

Any wrong, missing or conflicting description is a Fail even when the SKU code is correct.

New MAIA views/documents use the SQL description; the stale local description is not retained as production truth.

**It should stop and ask you if**

the phrase matches several items

the code and description conflict

a stale description remains after refresh

**If something breaks mid-way**

It asks for clarification or surfaces the data conflict and does not silently proceed with the wrong description.

**Sabotage bonus (+10 XP)**

Use "roasted chicken seasoning" without a code.

Have Admin update a UAT item description after an earlier MAIA view exists.

**Poke it**

Does a newly generated draft use the refreshed description?

Is the brand/context visually separate from the item description?

**Loot to capture**

item code

SQL-owner reference

MAIA description screenshot

clarification/result

before/after evidence

**Mission M-20 --- Fetch the Real SQL Invoice · ★★ · 20 XP · \~12 min**

**Persona:** Finance Desk --- Finance/Admin User\
**Covers:** HP-022 · UP-043 · UP-044 · LOCK-20\
**Mission type:** Core / Document / Regression

**The situation**

Invoices originate in SQL. MAIA must let users view and download the **matching SQL invoice PDF**, not a substitute MAIA template or stale file.

***Why this matters:** The official document must match the authoritative invoice record.*

**Precondition:** Submitted SQL invoice with known invoice number, customer, lines, tax and total. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Submitted SQL invoice records visible through MAIA

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Submitted SQL invoice with known invoice number, customer, lines, tax and total.

**Challenge condition (UP-043):** Same SQL invoice.

**Challenge condition (UP-044):** SQL PDF is updated or temporarily unavailable.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales/Finance** may view or download according to the final permission matrix. The client SQL owner verifies the official PDF source.

**Always:** return the PDF tied to the selected SQL invoice.

**Never:** fabricate a PDF, serve a mismatched/stale file, or substitute a MAIA format.

**Before submitting:** choose an invoice with known number, customer, lines, tax, total, and available PDF.

**Escalate when:** comparison to SQL requires the client/account owner.

**Your goal**

Download one valid invoice, reject a substitute, and handle an updated/unavailable PDF safely.

**Say it your way**

"download invoice \[number\]"

"show the PDF for this invoice"

***Now forget these examples and type it how YOU would.***

**Win conditions**

PDF is the SQL invoice PDF and matches the SQL invoice number, customer, lines, tax and total.

A MAIA-generated substitute template instead of the SQL PDF is a Fail.

MAIA returns the current matching SQL PDF, or a clear unavailable error. It must not serve a stale/mismatched or fabricated PDF.

**It should stop and ask you if**

the PDF is unavailable

the visible invoice and PDF do not match

the file appears to be a MAIA-generated substitute

**If something breaks mid-way**

It reports the file unavailable or mismatch clearly and does not serve a fabricated or stale document.

**Sabotage bonus (+10 XP)**

Use an invoice whose SQL PDF was updated.

Temporarily make the PDF unavailable through an approved test condition.

**Poke it**

Does the filename/reference identify the invoice?

Can users distinguish current from stale output?

**Loot to capture**

invoice number

downloaded PDF

visible invoice screenshot

client-side comparison reference

error screenshot

**Mission M-21 --- One Approval Means One · ★★ · 20 XP · \~10 min**

**Persona:** Finance Desk --- Single-Level Invoice Approver\
**Covers:** HP-023 · UP-045 · UP-046 · LOCK-21\
**Mission type:** Permission / Boundary

**The situation**

Go-live uses **single-level invoice approval**. One valid approval completes the requirement; an unauthorized user is refused, and the system must not demand a second approver.

***Why this matters:** Extra approval levels create unnecessary delay and contradict the signed boundary.*

**Precondition:** Invoice is ready for approval; designated single-level approver account. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Invoice awaiting approval and permitted/unpermitted accounts

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Invoice is ready for approval; designated single-level approver account.

**Challenge condition (UP-045):** Invoice has received the valid single approval.

**Challenge condition (UP-046):** Invoice awaits approval.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** One designated **invoice approver** completes the flow. An unauthorized user is refused.

**Always:** record the single permitted approval and timestamp.

**Never:** require a second approval or accept an unauthorized approver.

**Before submitting:** use the UAT approver assigned under the current matrix.

**Escalate when:** the final production approver identity is still unresolved.

**Your goal**

Complete one valid approval and prove both the unauthorized and forced-second-level paths are blocked.

**Say it your way**

"approve invoice \[number\]"

"show approval status"

***Now forget these examples and type it how YOU would.***

**Win conditions**

One valid approval completes the go-live approval requirement and records the approver/timestamp.

MAIA does not require a second approver. A mandatory two-level sequence is a Fail for current scope.

Approval is denied and invoice remains pending.

**It should stop and ask you if**

the acting account is unauthorized

the invoice already has its valid approval

**If something breaks mid-way**

It leaves the invoice pending after an unauthorized attempt and completes after one valid approval.

**Sabotage bonus (+10 XP)**

Attempt approval from an unauthorized account.

After valid approval, look for a forced second stage.

**Poke it**

Is the approver/timestamp easy to find?

Can the approved invoice continue immediately?

**Loot to capture**

invoice reference

authorized approval screenshot

unauthorized refusal

approval log

**Mission M-22 --- Date It, Then Trace the Change · ★★ · 20 XP · \~12 min**

**Persona:** Sales Desk --- Sales User / Sales Manager\
**Covers:** HP-024 · UP-047 · UP-048 · LOCK-23\
**Mission type:** Core / Permission / Audit

**The situation**

A document defaults to its creation date. **Sales User and Sales Manager** may change it later where configured, and the change must be logged; unauthorized or invalid edits must fail.

***Why this matters:** Document dates affect downstream interpretation and must remain traceable.*

**Precondition:** Create a new supported document today; choose an allowed revised date. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** New supported document and an allowed revised date

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Create a new supported document today; choose an allowed revised date.

**Challenge condition (UP-047):** Supported document exists.

**Challenge condition (UP-048):** Attempt blank, malformed or impossible date.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales User** and **Sales Manager** may change the date where configured. Other roles must be refused.

**Always:** apply today by default and log user, old/new date, timestamp, and document for valid edits.

**Never:** accept impossible/malformed dates or allow an unauthorized role to edit.

**Before submitting:** use a supported document/state where date editing is configured.

**Escalate when:** the legal edit state is not clear for the selected document.

**Your goal**

Verify the default, make one valid authorized change, and test unauthorized and invalid changes.

**Say it your way**

"change document date to \[valid date\]"

"why is this date rejected?"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Default is today\'s creation date; authorized change saves and log shows user, old/new date, timestamp and document.

Date edit is denied and original date remains.

Invalid date is rejected with a clear message and no corrupt date posts downstream.

**It should stop and ask you if**

the role is not Sales User/Sales Manager

the date is blank, malformed, or impossible

**If something breaks mid-way**

It retains the original valid date and gives a clear validation or permission message.

**Sabotage bonus (+10 XP)**

Try an impossible date.

Try the same edit from an unauthorized account.

**Poke it**

Does the activity log show both old and new values?

Does downstream output use the changed date?

**Loot to capture**

document reference

default date

changed date

audit log

refusal/validation screenshot

**Mission M-23 --- Charge It as a SKU · ★★ · 20 XP · \~12 min**

**Persona:** Sales Desk --- Sales User\
**Covers:** HP-025 · UP-049 · UP-050 · LOCK-24\
**Mission type:** Core / Data Integrity

**The situation**

Surcharges are not free-text notes. They must be selected as an **active SQL SKU**, appear once in totals, and post correctly downstream.

***Why this matters:** Unmapped charges create accounting, tax, and duplication errors.*

**Precondition:** NEEDS CLIENT INPUT: confirmed active SQL surcharge SKU and amount; example UAT amount RM75 was discussed. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Active SQL surcharge SKU and an order

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** NEEDS CLIENT INPUT: confirmed active SQL surcharge SKU and amount; example UAT amount RM75 was discussed.

**Challenge condition (UP-049):** Enter free-text \'delivery charge RM75\' without selecting a mapped SQL SKU.

**Challenge condition (UP-050):** Configured surcharge SKU is missing, inactive or cannot be found in SQL.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** selects the approved surcharge SKU. Any pricing/tax approval follows the configured rule.

**Always:** select the configured SQL surcharge item.

**Never:** post arbitrary free text or substitute a generic item.

**Before submitting:** the client confirms the active surcharge SKU, description, amount, and expected treatment.

**Escalate when:** the actual surcharge SKU has not been provided.

**Your goal**

Add one approved surcharge SKU and reject free-text, missing, or inactive alternatives.

**Say it your way**

"add delivery surcharge \[amount\]"

"include the approved surcharge SKU"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Surcharge appears as the correct SQL SKU, is included once in totals, and posts correctly downstream.

MAIA requires/flags the SQL surcharge SKU and does not post an arbitrary free-text charge as a valid item.

MAIA visibly flags the missing/inactive SKU and does not substitute a wrong generic item.

**It should stop and ask you if**

the SKU is missing/inactive

the user enters only free text

the surcharge would be added twice

**If something breaks mid-way**

It flags the missing/unmapped charge and prevents downstream posting as a valid item.

**Sabotage bonus (+10 XP)**

Enter "delivery charge RM75" without selecting a SKU.

Use an inactive or missing surcharge SKU.

**Poke it**

Is the surcharge included exactly once?

Can you trace the surcharge into downstream totals?

**Loot to capture**

order reference

surcharge SKU/amount

total before/after

warning/refusal screenshot

**Mission M-24 --- Carry the Batch into the Credit Note · ★★★ · 35 XP · \~15 min**

**Persona:** Finance Desk --- Finance/Admin User\
**Covers:** HP-026 · UP-051 · UP-052 · LOCK-25\
**Mission type:** Core / Batch / Regression

**The situation**

A credit note created from an invoice must carry the **relevant invoice batch numbers and quantities**. Unrelated batches and excessive quantities must be prevented.

***Why this matters:** Dropping batch traceability breaks product accountability and return reconciliation.*

**Precondition:** SQL invoice line totals 500 kg split across two or more known batches, e.g. 300 kg + 200 kg. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Invoice with quantities split across known batches

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** SQL invoice line totals 500 kg split across two or more known batches, e.g. 300 kg + 200 kg.

**Challenge condition (UP-051):** Invoice has known batch numbers.

**Challenge condition (UP-052):** Invoice uses batches A and B; unrelated batch C exists.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Finance/Admin** creates the credit note and preserves invoice batch traceability.

**Always:** preserve invoice-linked batch numbers and allowable quantities.

**Never:** drop batches, add unrelated batches, or exceed invoice/confirmed return quantity.

**Before submitting:** choose an invoice with at least two known batches and confirmed return quantities.

**Escalate when:** the client-side batch source cannot be verified.

**Your goal**

Create a credit note from a multi-batch invoice and challenge it with an unrelated batch.

**Say it your way**

"create credit note for returned qty from invoice \[number\]"

"use the invoice batches only"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Credit note carries the relevant invoice batch numbers and quantities; traceability back to the invoice is visible.

Missing/dropped batch numbers are a Fail.

Wrong/unrelated batch or excessive quantity is prevented or clearly flagged; only invoice-relevant batches can post.

**It should stop and ask you if**

the batch is unrelated to the invoice

the requested quantity exceeds the allowed quantity

**If something breaks mid-way**

It keeps the credit note incomplete, identifies the invalid batch/quantity, and preserves valid lines.

**Sabotage bonus (+20 XP)**

Try batch C when the invoice uses A and B.

Request a quantity above the invoice/return quantity.

**Poke it**

Can each credit-note line trace back to the invoice?

Are split quantities preserved correctly?

**Loot to capture**

invoice and CN references

batch numbers/quantities

refusal evidence

traceability screenshot

**Mission M-25 --- Return First, Credit Note Second · ★★★ · 35 XP · \~18 min**

**Persona:** Sales, Warehouse/Logistics and Finance/Admin Relay\
**Covers:** HP-027 · UP-053 · UP-054 · UP-055 · LOCK-26\
**Mission type:** Core / Handoff / Permission

**The situation**

Sales may request a credit note, but **only Finance/Admin may issue it**, and only after Warehouse/Logistics confirms the physical returned quantity.

***Why this matters:** Issuing credit before physical confirmation creates financial and stock mismatches.*

**Precondition:** Returned goods relate to one invoice; Sales has reason and expected quantity. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Returned-goods case linked to an invoice

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Returned goods relate to one invoice; Sales has reason and expected quantity.

**Challenge condition (UP-053):** Valid return request exists.

**Challenge condition (UP-054):** Sales requests CN but physical returned quantity is not confirmed.

**Challenge condition (UP-055):** Delivered order has an error/return.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales** requests, **Warehouse/Logistics** confirms physical quantity, and **Finance/Admin** issues the credit note.

**Always:** require Sales request, physical return confirmation, then Finance/Admin issuance.

**Never:** let Sales issue the credit note or bypass the process by cancelling a delivered order.

**Before submitting:** select one delivered/invoiced case with a reason and expected return quantity.

**Escalate when:** the return-confirmation role or final permission matrix is unresolved.

**Your goal**

Run the three-role SOP and prove Sales cannot issue or bypass it by cancelling a delivered order.

**Say it your way**

"request credit note for returned goods from invoice \[number\]"

"return qty confirmed, create CN"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Sales cannot issue; Finance/Admin can issue only after confirmation; CN links to the invoice and confirmed quantity.

Creation/submission is denied; Sales can only request.

MAIA holds/refuses issuance until quantity confirmation is recorded.

MAIA does not let Sales bypass the return/CN process; user is directed to request a credit note.

**It should stop and ask you if**

physical quantity is not confirmed

Sales tries to create/submit the CN directly

the user tries to cancel the delivered order instead

**If something breaks mid-way**

It holds the CN request, names the missing confirmation/role, and preserves the invoice link.

**Sabotage bonus (+20 XP)**

Let Sales try to issue directly.

Let Finance/Admin try before physical confirmation.

Ask Sales to cancel the delivered order instead.

**Poke it**

Is the confirmed quantity visible to Finance?

Can the request status be followed across roles?

**Loot to capture**

invoice/request/CN references

Sales refusal

return confirmation

Finance issuance log

**Mission M-26 --- Finance Creates the Item · ★★ · 20 XP · \~12 min**

**Persona:** Finance Desk --- Finance/Admin User\
**Covers:** HP-028 · UP-056 · UP-057 · LOCK-27\
**Mission type:** Permission / Master Data

**The situation**

Only **Finance/Admin** may create new item/product codes. Sales and Logistics must be denied, while duplicates or incomplete masters must not create conflicting records.

***Why this matters:** Uncontrolled item creation damages the SQL product master and every dependent workflow.*

**Precondition:** NEEDS CLIENT INPUT: confirmed item-creation route and unique UAT item code. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Authorized item-creation route and a unique UAT item code

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** NEEDS CLIENT INPUT: confirmed item-creation route and unique UAT item code.

**Challenge condition (UP-056):** User has no Finance/Admin role.

**Challenge condition (UP-057):** Existing SQL item code is reused or mandatory master fields are missing.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** Only **Finance/Admin** may create item/product codes. **Sales/Logistics** must be refused.

**Always:** use the authoritative SQL-linked item-creation process.

**Never:** let Sales/Logistics create items or accept duplicate/incomplete masters.

**Before submitting:** confirm the approved route, mandatory fields, and a unique UAT code.

**Escalate when:** the client has not confirmed the creation route or final permission matrix.

**Your goal**

Create one valid UAT item through the authorized route and reject unauthorized/duplicate attempts.

**Say it your way**

"create new item code \[UAT-code\]"

"add product with these master fields"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Authorized creation succeeds and the item becomes available from the authoritative SQL-linked process without a conflicting duplicate.

Creation is denied; no item appears in MAIA or SQL.

Duplicate/invalid item is rejected or held for correction; no conflicting product master is created.

**It should stop and ask you if**

the acting role is not Finance/Admin

the code already exists

mandatory master data is missing

**If something breaks mid-way**

It rejects or holds the invalid creation and creates no conflicting item in MAIA or SQL.

**Sabotage bonus (+10 XP)**

Attempt from Sales or Logistics.

Reuse an existing code or omit a required field.

**Poke it**

Does the new item become available only after authoritative sync?

Can you find any duplicate local copy?

**Loot to capture**

UAT item code

role screenshots

created item reference

duplicate/validation refusal

**Mission M-27 --- Match the COA to the Batch · ★★★ · 35 XP · \~18 min**

**Persona:** Supply Chain / Logistics Desk\
**Covers:** HP-029 · UP-058 · UP-059 · LOCK-28\
**Mission type:** Core / Document / Batch

**The situation**

A COA must be indexed by **item, lot/batch, supplier, and date**, linked to the correct DO/invoice, and prompted when relevant. Missing metadata or a batch mismatch must not auto-link.

***Why this matters:** The wrong COA is worse than no COA because it creates false compliance evidence.*

**Precondition:** Valid COA PDF with known item, lot/batch, supplier and date; related DO/invoice. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** COA PDFs and related DO/invoice records

**Choose or prepare:**

Use the relevant reusable samples from 03_COA_and_Batch_Evidence/.

Choose any active customer, item, document, batch, or record visible in your assigned UAT account that meets the criteria below.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Valid COA PDF with known item, lot/batch, supplier and date; related DO/invoice.

**Challenge condition (UP-058):** COA PDF lacks required index data such as batch or supplier.

**Challenge condition (UP-059):** COA belongs to batch A; DO/invoice uses batch B.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Supply Chain/Logistics** uploads, indexes, and links COAs within their configured permissions.

**Always:** match the COA to the correct item/batch/supplier/date and related shipment.

**Never:** silently auto-link incomplete or mismatched evidence.

**Before submitting:** choose an unambiguous related DO/invoice and prepare matching, incomplete, and mismatched COAs.

**Escalate when:** multiple-match precedence is unclear or client-side batch data cannot be confirmed.

**Your goal**

Upload a valid COA, find it by its indexes, link it correctly, and reject incomplete/mismatched samples.

**Say it your way**

"upload and link this COA to \[DO/invoice\]"

"find COA for batch \[x\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

COA is searchable by indexed fields, links to the correct DO/invoice, and MAIA prompts the user when relevant.

MAIA flags missing index data and does not silently auto-link it to a shipment.

Mismatch is prevented or clearly flagged; unrelated COA is not attached as valid evidence.

**It should stop and ask you if**

required index data is missing

the COA batch differs from the document batch

several COAs match without a locked precedence rule

**If something breaks mid-way**

It flags the missing/mismatched fields and leaves the COA unlinked until corrected.

**Sabotage bonus (+20 XP)**

Remove the batch or supplier from one sample.

Try linking a batch-A COA to a batch-B DO/invoice.

**Poke it**

Can users search by every locked index?

Does MAIA prompt only for relevant shipments?

**Loot to capture**

COA filenames

index values

DO/invoice reference

successful link

mismatch/refusal screenshots

**Mission M-28 --- C3 Stops at Batch Level · ★★ · 20 XP · \~12 min**

**Persona:** Sales and Finance Desk\
**Covers:** HP-030 · UP-060 · UP-061 · LOCK-29\
**Mission type:** Boundary / Tax

**The situation**

For go-live, C3/order tax exemption is tracked **at batch level only**. There is no item-quantity reservation and no separate product-level C3 allocation.

***Why this matters:** Testing or building beyond this boundary would create false go-live expectations.*

**Precondition:** SQL test data includes a C3-eligible batch and corresponding order tax-exemption handling. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** C3-eligible batch and order tax-exemption data

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** SQL test data includes a C3-eligible batch and corresponding order tax-exemption handling.

**Challenge condition (UP-060):** C3-eligible product/batch exists.

**Challenge condition (UP-061):** Order uses a batch without the C3 exemption record, or the selected batch differs from the approved C3 batch.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales/Finance** uses the approved batch-level exemption. **Admin** verifies the excluded allocation boundary.

**Always:** apply and trace C3 using the approved batch record.

**Never:** apply exemption to the wrong batch or create excluded product-level allocation/reservation.

**Before submitting:** the client supplies a confirmed SQL C3 batch and expected output.

**Escalate when:** approved C3 sample data is missing.

**Your goal**

Use a valid C3 batch, verify traceability, and prove product-level allocation/reservation is not required.

**Say it your way**

"apply C3 exemption for batch \[x\]"

"show tax exemption on this order"

***Now forget these examples and type it how YOU would.***

**Win conditions**

C3/order tax exemption is applied and traceable at batch level; downstream SQL data reflects the correct handling.

MAIA does not require or create those go-live behaviours; batch-level handling remains the boundary.

MAIA prevents/flags the mismatch and does not apply C3 exemption to the wrong batch.

**It should stop and ask you if**

the selected batch lacks C3

the order batch differs from the approved exemption batch

**If something breaks mid-way**

It flags the mismatch and leaves tax handling unapplied rather than extending scope.

**Sabotage bonus (+10 XP)**

Try applying C3 to a different batch.

Look for product-level allocation or item-quantity reservation and treat absence as expected.

**Poke it**

Is the batch-level exemption traceable downstream?

Does the UI communicate the boundary clearly?

**Loot to capture**

batch/order reference

tax/exemption screenshot

mismatch result

client-side SQL verification

**Mission M-29 --- Do Not Duplicate E-Invoice · ★★ · 20 XP · \~12 min**

**Persona:** Finance Desk --- Finance/Admin User\
**Covers:** HP-031 · UP-062 · UP-063 · LOCK-30\
**Mission type:** Boundary / Data Integrity

**The situation**

Mackessen continues e-invoice processing in SQL. MAIA may show related information but **must not duplicate, migrate, interrupt, or overwrite the authoritative SQL process**.

***Why this matters:** A duplicate e-invoice or overwritten tax record creates legal and accounting risk.*

**Precondition:** Invoice/e-invoice is processed in SQL using Mackessen\'s current practice. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Invoice/e-invoice already processed in SQL

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Invoice/e-invoice is processed in SQL using Mackessen\'s current practice.

**Challenge condition (UP-062):** SQL e-invoice already submitted/processed.

**Challenge condition (UP-063):** Tax/e-invoice data differs between a MAIA draft view and SQL.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Finance/Admin** continues e-invoice processing in SQL; MAIA must not duplicate it.

**Always:** preserve the current SQL e-invoice status and authoritative tax data.

**Never:** submit a second e-invoice or overwrite SQL from a conflicting MAIA draft.

**Before submitting:** choose an invoice whose SQL e-invoice status is known and approved for UAT.

**Escalate when:** client-side SQL status verification is unavailable.

**Your goal**

Continue the MAIA workflow around a processed invoice without creating a second e-invoice or changing SQL tax truth.

**Say it your way**

"show status for invoice \[number\]"

"continue MAIA workflow for this invoice"

***Now forget these examples and type it how YOU would.***

**Win conditions**

SQL e-invoice process/status remains intact; MAIA does not interrupt, duplicate or change the authoritative process.

MAIA does not submit a second e-invoice or migrate the process automatically.

MAIA does not overwrite authoritative SQL tax data; discrepancy is surfaced or SQL value is used.

**It should stop and ask you if**

a duplicate submission action appears

MAIA and SQL tax data conflict

**If something breaks mid-way**

It surfaces the discrepancy or uses the SQL value and does not perform a second submission.

**Sabotage bonus (+10 XP)**

Use an already submitted SQL e-invoice.

Create a controlled discrepancy between a MAIA draft view and SQL.

**Poke it**

Is the source-of-truth boundary obvious to Finance?

Can normal MAIA work continue without touching e-invoice?

**Loot to capture**

invoice reference

MAIA status screenshot

duplicate non-creation evidence

client-side verification

**Mission M-30 --- Finance Chat Is Here Now · ★★ · 20 XP · \~10 min**

**Persona:** Finance Desk --- Finance User\
**Covers:** HP-032 · UP-064 · UP-065 · LOCK-31\
**Mission type:** Core / Permission

**The situation**

The Finance chatbot is already in current scope and available through Telegram. A Finance user should get an allowed operational result, while Sales must not see restricted finance details.

***Why this matters:** Availability without permission control would either disappoint Finance or leak sensitive information.*

**Precondition:** Finance user is linked to Telegram and has finance access. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Linked Finance Telegram account and permitted finance records

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Finance user is linked to Telegram and has finance access.

**Challenge condition (UP-064):** Sales user has no finance-data permission.

**Challenge condition (UP-065):** Finance Telegram account is correctly linked.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** A permitted **Finance user** may use the Finance chatbot. A **Sales user** without finance permission must be refused.

**Always:** return only finance information permitted to the current role.

**Never:** describe the Finance chatbot as future-only/WhatsApp-only or expose restricted data to Sales.

**Before submitting:** link the Finance and Sales test accounts to their correct roles.

**Escalate when:** account linking or finance-data permissions are not configured.

**Your goal**

Prove current Telegram availability and role-appropriate data access.

**Say it your way**

"show unpaid invoices for \[customer\]"

"what approvals are pending?"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Finance chatbot is available in current scope and returns the permitted operational result.

Restricted data is not exposed; response states access is not permitted or shows only allowed information.

A message that the finance chatbot is unavailable, future-only or WhatsApp-only is a Fail; current Telegram availability must be demonstrable.

**It should stop and ask you if**

the account is unlinked

the requester lacks finance permission

the chatbot entry point is unavailable

**If something breaks mid-way**

It denies restricted details clearly while keeping the Finance path available.

**Sabotage bonus (+10 XP)**

Ask the same restricted question from Sales.

Open the Finance entry point from the correctly linked Finance account.

**Poke it**

Is the answer grounded in identifiable records?

Does it lead with the result and next action?

**Loot to capture**

account/role evidence

Finance response

Sales refusal

record references

timestamps

**Mission M-31 --- Say It Short · ★ · 10 XP · \~8 min**

**Persona:** Any Operational User\
**Covers:** HP-033 · UP-066 · UP-067 · LOCK-32\
**Mission type:** Usability / Clarification / Regression

**The situation**

Routine chatbot replies should be **short, direct, and operational**. When the message is ambiguous, MAIA should ask one focused question instead of guessing or producing a wall of text.

***Why this matters:** Long answers hide the action and slow down already-busy users.*

**Precondition:** Simple query such as \'Show unpaid invoices for \[test customer\]\' or \'Create order for \[customer\]\'. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Routine and ambiguous natural-language queries

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Simple query such as \'Show unpaid invoices for \[test customer\]\' or \'Create order for \[customer\]\'.

**Challenge condition (UP-066):** Simple routine query.

**Challenge condition (UP-067):** Ambiguous message mentioning two customers/orders or a non-unique item.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** Any operational user may ask routine questions within their role permissions.

**Always:** lead with the result/status and next required action.

**Never:** bury the answer in a long explanation or guess between multiple matches.

**Before submitting:** choose one simple query and one ambiguity involving two customers/orders or a non-unique item.

**Escalate when:** the expected operational answer is not available to the current role.

**Your goal**

Compare a simple result-first response with one concise clarification.

**Say it your way**

"show unpaid invoices for \[customer\]"

"create order for \[customer\] \[item\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

Reply leads with the result/status and the next required action in short, scannable language.

A long wall of text that hides the result or action is a Fail.

MAIA asks one short, direct clarification and does not guess or produce an unnecessarily long explanation.

**It should stop and ask you if**

the request has more than one valid interpretation

**If something breaks mid-way**

It asks one short clarification and remains ready to continue after the answer.

**Sabotage bonus (+10 XP)**

Mention two customers or orders in one message.

Use a non-unique item phrase.

**Poke it**

Can you understand the next action at a glance?

How many lines does a routine answer need?

**Loot to capture**

exact messages

response screenshots

response length/structure notes

clarification result

**Mission M-32 --- Keep Talking Under Pressure · ★★★ · 50 XP · \~30 min**

**Persona:** Cross-Functional UAT Team\
**Covers:** HP-034 · UP-068 · UP-069 · LOCK-33\
**Mission type:** Stress / Recovery / Regression

**The situation**

The Telegram bot must survive a continuous mixed sequence without **crash, lost request, duplicate document, or cross-order contamination**. A bad file must fail in isolation, and two users' contexts must remain separate.

***Why this matters:** One unstable or mixed-up order can halt UAT and destroy confidence.*

**Precondition:** NEEDS CLIENT INPUT: agreed stress-test duration/count. Pack must include text orders, photos, PDFs and document requests. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Text orders, order photos/PDFs, document requests, and one corrupt/unsupported file

**Choose or prepare:**

Use the relevant reusable samples from 01_Customer_Order_Inputs/, 02_Degraded_and_Invalid_Order_Files/, and 04_Special_Regression_Fixtures/.

Choose any active customer, item, document, batch, or record visible in your assigned UAT account that meets the criteria below.

Reserve the shared reference or record so another tester does not accidentally consume it first.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** NEEDS CLIENT INPUT: agreed stress-test duration/count. Pack must include text orders, photos, PDFs and document requests.

**Challenge condition (UP-068):** Include one corrupt/unsupported file between valid requests.

**Challenge condition (UP-069):** Two active order conversations with different customers/items.

**Fixed reference:** REG-03 --- REG-03_Stress_Test_Request_Sequence.md; REG-04 --- approved corrupt/unsupported order file

**Roles and business rules**

**Roles and approvals:** The **cross-functional UAT team** runs the approved sequence. Two **Sales users** are required for context-isolation testing.

**Always:** keep each request and each user context isolated and traceable.

**Never:** duplicate, lose, cross-attach, or block later valid requests because one file fails.

**Before submitting:** the owner approves the duration/count and prepares the reusable input pool and sequence.

**Escalate when:** the numeric stress target or safe test window is not confirmed.

**Your goal**

Run the approved sequence continuously, including a corrupt file and two interleaved Sales conversations.

**Say it your way**

"create order from this message"

"read attached PO"

"download document \[ref\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

No crash, lost request, duplicate document or cross-order contamination; requests complete in a usable sequence.

Bad file receives a clear error and does not crash/stall the bot or block later valid requests.

MAIA keeps context separate; no item, customer, PO or document is attached to the wrong order; no duplicates are produced.

**It should stop and ask you if**

the bot crashes/stalls

a request is lost/duplicated

customer/item/document context crosses users

**If something breaks mid-way**

It returns a clear error for the bad file and continues with later valid requests. It **must not require a full reset to recover**.

**Sabotage bonus (+20 XP)**

Insert one corrupt/unsupported file between two valid requests.

Interleave two users with different customers/items/files.

**Poke it**

Can every response be mapped to its originating request?

Does latency degrade into unusable sequencing?

**Loot to capture**

stress sequence/version

request IDs and timestamps

two-user context evidence

bad-file error

created document references

**Mission M-33 --- Every Role Must Show Up · ★★ · 20 XP · \~15 min**

**Persona:** Maye --- Client UAT Coordinator / Management\
**Covers:** HP-035 · UP-070 · UP-071 · LOCK-34\
**Mission type:** Governance / Coverage

**The situation**

UAT must include Sales, Logistics, Finance/Admin, Management, and relevant roles. **Maye coordinates client approval/sign-off**, and full coverage cannot be claimed while a required role or evidence is missing.

***Why this matters:** A system can appear ready while an entire role has never tested its real work.*

**Precondition:** Role accounts and assigned test cases prepared. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Role assignment and completed UAT result records

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Role accounts and assigned test cases prepared.

**Challenge condition (UP-070):** One required role group, e.g. Finance/Admin or Management, has no executed cases.

**Challenge condition (UP-071):** Test results are incomplete or sign-off is recorded by someone other than the authorized client process.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Maye** coordinates client sign-off. Sales, Logistics, Finance/Admin, Management, and relevant roles must all provide evidence.

**Always:** require named testers, completed results, evidence, and Maye-coordinated approval.

**Never:** accept incomplete role coverage or an unauthorized final sign-off.

**Before submitting:** assign accounts and missions to every required role group.

**Escalate when:** a role group has no tester/account or the client approval path is unclear.

**Your goal**

Prove role coverage, evidence completeness, and the correct sign-off path.

**Say it your way**

"show UAT coverage by role"

"prepare sign-off status"

***Now forget these examples and type it how YOU would.***

**Win conditions**

All required role groups have named testers, completed results and evidence; sign-off status is traceable to Maye\'s coordination.

Coverage remains incomplete/blocked; UAT cannot claim full role coverage.

Final sign-off is not accepted without completed evidence and Maye-coordinated client approval.

**It should stop and ask you if**

any required role has no executed case

evidence is incomplete

sign-off is attempted outside the authorized process

**If something breaks mid-way**

It leaves coverage/sign-off incomplete and identifies the missing role or evidence.

**Sabotage bonus (+10 XP)**

Remove one role group from the completion view.

Attempt sign-off before results are complete or through the wrong person.

**Poke it**

Can Maye see blockers without opening every test?

Are retests separated from initial results?

**Loot to capture**

role allocation

coverage summary

missing-role block

sign-off evidence

Maye coordination reference

**Mission M-34 --- Cut Over Without Test Data Leakage · ★★★ · 50 XP · \~30 min**

**Persona:** System Steward --- Admin with Client PIC\
**Covers:** HP-036 · UP-072 · UP-073 · LOCK-35\
**Mission type:** Restricted / Cutover / Data Integrity

**The situation**

Before production, MAIA must move from test SQL to the approved live SQL. **Test-only records must disappear, live records must match, and one controlled transaction must write only to live SQL---not test and not both.**

***Why this matters:** A wrong or dual connection can corrupt production and leak test data.*

**Precondition:** Approved live SQL connection; select 3 live customers, 3 live items and 3 live invoices for spot-check. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Approved live SQL connection and controlled production spot-check records

**Choose or prepare:**

Use only the record or environment state assigned by the UAT owner or client-side data owner.

Do not modify SQL, scheduled jobs, production connections, tax data, balances, or stock unless the approved owner is present.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Approved live SQL connection; select 3 live customers, 3 live items and 3 live invoices for spot-check.

**Challenge condition (UP-072):** Known test-only customer/item exists in test SQL but not live SQL.

**Challenge condition (UP-073):** Create one controlled production transaction after cutover.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** Only **Admin and the client PIC** execute the restricted cutover test in the approved window.

**Always:** run only in the authorized window with rollback ownership and clear environment identification.

**Never:** write to test SQL, both databases, or expose known test-only records in production.

**Before submitting:** the cutover time, credentials, rollback owner, sample records, and transaction are approved.

**Escalate when:** any production authorization, rollback step, or client-side verification is missing.

**Your goal**

Execute the approved cutover evidence pack with the client PIC and prove the destination.

**Say it your way**

"refresh production data after cutover"

"create controlled transaction \[approved ref\]"

***Now forget these examples and type it how YOU would.***

**Win conditions**

All records match live SQL and the environment/connection is clearly identified as production.

Test-only data is not visible in production. Its presence is a Fail.

Transaction writes only to approved live SQL, not test SQL and not both; no duplicate transaction exists.

**It should stop and ask you if**

the environment/connection is unclear

test-only data appears

a transaction destination cannot be verified

**If something breaks mid-way**

Stop the cutover test, preserve evidence, and activate the approved rollback/escalation path. This is not a general-tester mission.

**Sabotage bonus (+20 XP)**

Search for a known test-only record after cutover.

Verify one controlled transaction against both possible destinations.

**Poke it**

Is the production environment unmistakable?

Can the owner prove no duplicate write occurred?

**Loot to capture**

cutover approval

3 customer/3 item/3 invoice spot checks

test-only search

controlled transaction reference

client-side destination evidence

**Mission M-35 --- The Supported Document Shelf · ★★★ · 50 XP · \~30 min**

**Persona:** Sales, Logistics and Finance/Admin Document Owners\
**Covers:** HP-037 · UP-074 · UP-075 · LOCK-36\
**Mission type:** Core / Coverage / Boundary

**The situation**

The supported set is **quotation, CPO, Sales Order, proforma invoice, Delivery Order, picking list, SQL invoice PDF, credit note, receipt, and COA**. Each must use correct data, status, permissions, and lifecycle links.

***Why this matters:** The product must handle the promised documents without mislabelling unsupported outputs.*

**Precondition:** Client-approved test data for quotation, CPO, SO, proforma invoice, DO, picking list, SQL invoice PDF, credit note, receipt and COA. If this condition is unavailable, mark **Blocked --- Test Data/Configuration**, not Failed.

**Input recipe**

**Input type:** Records supporting the locked operational document set

**Choose or prepare:**

Choose any accessible UAT customer, item, document, or record that meets every condition below.

Create the prerequisite yourself when safe; otherwise reserve an existing record through the UAT tracker.

Use the campaign UAT reference convention for every new record you create.

**Your chosen data must satisfy:**

**Positive condition:** Client-approved test data for quotation, CPO, SO, proforma invoice, DO, picking list, SQL invoice PDF, credit note, receipt and COA.

**Challenge condition (UP-074):** Omit a required customer/item/date/batch field for a supported document.

**Challenge condition (UP-075):** Request an unscoped document/workflow such as a payment voucher or custom return note.

**Fixed reference:** NONE

**Roles and business rules**

**Roles and approvals:** **Sales, Logistics, Finance/Admin, and relevant document owners** handle only the document actions permitted to their roles.

**Always:** use the correct source record, role, required fields, status, and document type.

**Never:** finalize incomplete data or mislabel another output as an unsupported document.

**Before submitting:** testers can create/find records that satisfy each supported document's normal state.

**Escalate when:** a required document type or role account is unavailable.

**Your goal**

Create or view all ten supported document types and challenge one incomplete and one unsupported request.

**Say it your way**

"show/create \[supported document\] for \[record\]"

"generate payment voucher for this order"

***Now forget these examples and type it how YOU would.***

**Win conditions**

All ten document types are available as scoped, contain the correct source data and connect to the correct order/invoice lifecycle.

MAIA keeps it draft or asks for correction; it does not create a malformed final PDF or submit incomplete data to SQL.

MAIA clearly says it is unsupported/not configured and does not mislabel another document as the requested one.

**It should stop and ask you if**

required customer/item/date/batch data is missing

the requested document is not in the locked set

**If something breaks mid-way**

It keeps incomplete documents draft/asks for correction and clearly refuses unsupported document types.

**Sabotage bonus (+20 XP)**

Omit a required field from one supported document.

Request a payment voucher or custom return note.

**Poke it**

Can you follow the lifecycle links across all ten types?

Are role permissions consistent across view/download/create?

**Loot to capture**

ten document references or screenshots

source/lifecycle links

incomplete-document result

unsupported-request refusal

**Section 9 --- Boss Fights**

These are regression challenges built from observed UAT failures that remain inside locked scope.

**Boss Fight BF-01 --- The Bot Freeze · ★★★ · 50 XP · \~20 min**

**Persona:** P-01 / Cross-functional\
**Covers:** LOCK-33 · OBS-01

**Why this is a Boss Fight**

The chatbot previously became slow, stopped responding, and appeared to crash.

**Setup**

Run REG-03 with REG-04 inserted between valid requests; later requests complete without reset.

**Win conditions**

No crash, lost request, duplicate, or context contamination

the bad file fails in isolation.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-02 --- The Wall of Text · ★★★ · 30 XP · \~10 min**

**Persona:** Any operational persona\
**Covers:** LOCK-32 · OBS-02

**Why this is a Boss Fight**

Routine replies were previously too long and hard to scan.

**Setup**

Ask one simple operational question and one ambiguous question.

**Win conditions**

The simple answer leads with result/action

the ambiguous one asks one focused clarification.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-03 --- Correct Code, Wrong Description · ★★★ · 40 XP · \~15 min**

**Persona:** P-01\
**Covers:** LOCK-03/19 · OBS-03

**Why this is a Boss Fight**

A code could be right while the displayed description was missing or wrong.

**Setup**

Use the approved ambiguous phrase and corrected extraction fixture.

**Win conditions**

No silent wrong item

current SQL description is shown

known correction does not regress.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-04 --- The Credit Block Arrives Too Late · ★★★ · 40 XP · \~15 min**

**Persona:** P-01/P-03\
**Covers:** LOCK-08/10 · OBS-04

**Why this is a Boss Fight**

Credit control was previously demonstrated at invoice or inconsistently at SO.

**Setup**

Use an over-limit customer and observe draft, SO submission, and downstream attempts.

**Win conditions**

Block occurs at SO submission

no downstream document without logged override.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-05 --- Permission Looks Like a Bug · ★★★ · 30 XP · \~12 min**

**Persona:** P-02/P-04\
**Covers:** LOCK-09 · OBS-05

**Why this is a Boss Fight**

Irene's broad permission was initially treated as a defect.

**Setup**

Test with role present, Sales account, and role removed.

**Win conditions**

Permission follows the current role exactly and disappears when removed.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-06 --- Warning Is Not a Duplicate Block · ★★★ · 40 XP · \~12 min**

**Persona:** P-01\
**Covers:** LOCK-04 · OBS-06

**Why this is a Boss Fight**

Duplicate PO behaviour was warning-only.

**Setup**

Repeat same customer + same PO and run a near-concurrent attempt.

**Win conditions**

Second CPO is hard-blocked and no downstream duplicate exists.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-07 --- Test SQL in Production · ★★★ · 50 XP · \~25 min**

**Persona:** P-04/P-06\
**Covers:** LOCK-05/35 · OBS-07

**Why this is a Boss Fight**

UAT data did not match live SQL and created production concern.

**Setup**

During authorized cutover, search known live and test-only records.

**Win conditions**

Live records match

test-only data is absent

controlled write goes only to live SQL.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-08 --- Everyone Can Create Items · ★★★ · 35 XP · \~12 min**

**Persona:** P-04/P-03\
**Covers:** LOCK-27 · OBS-08

**Why this is a Boss Fight**

Item creation appeared too broadly available.

**Setup**

Try Finance/Admin, Sales, and Logistics with valid/duplicate codes.

**Win conditions**

Only Finance/Admin succeeds

unauthorized and duplicate attempts create nothing.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-09 --- Zero Stock Becomes a Wall · ★★★ · 30 XP · \~10 min**

**Persona:** P-01\
**Covers:** LOCK-12 · OBS-09

**Why this is a Boss Fight**

Zero stock previously risked blocking a valid order.

**Setup**

Submit zero-stock and low-stock orders with no other blockers.

**Win conditions**

Warnings remain informational and submission proceeds.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-10 --- The Fake Invoice PDF · ★★★ · 35 XP · \~12 min**

**Persona:** P-03\
**Covers:** LOCK-20 · OBS-10

**Why this is a Boss Fight**

A MAIA-format invoice appeared instead of the SQL PDF.

**Setup**

Download a known SQL invoice and compare through the client handoff.

**Win conditions**

The file is the current SQL PDF

substitute/stale output fails.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-11 --- The Vanishing Batches · ★★★ · 40 XP · \~15 min**

**Persona:** P-03\
**Covers:** LOCK-25 · OBS-11

**Why this is a Boss Fight**

Credit-note batch carry-over was missing.

**Setup**

Create CN from a multi-batch invoice and challenge with unrelated batch.

**Win conditions**

Invoice batches/quantities remain traceable

unrelated batch is refused.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Boss Fight BF-12 --- Credit Before Goods Return · ★★★ · 40 XP · \~15 min**

**Persona:** P-01/P-05/P-03\
**Covers:** LOCK-26 · OBS-12

**Why this is a Boss Fight**

The SOP requires Sales request, physical confirmation, then Finance issue.

**Setup**

Try each role out of sequence, then complete the valid relay.

**Win conditions**

Sales cannot issue

Finance cannot issue before confirmation

valid flow links to invoice/quantity.

**Extra chaos**

Add one relevant Chaos Card without changing the controlled regression fixture.

**Loot to capture**

Exact input/fixture and account role.

Before/after screenshots, references, and timestamps.

Evidence that the historical failure did or did not recur.

**Deferred / Retired Regression Alerts**

**OBS-16:** Multi-batch picking/FIFO/FEFO/multi-select workflow is not locked beyond CN/COA traceability. No XP and no active test instruction.

**OBS-17:** Quotation revision/validity automation is not locked beyond SQL customer-specific pricing. No XP and no active test instruction.

**OBS-18:** Automatic chatbot-to-website failover is not locked. No XP and no active test instruction.

**Section 10 --- Side Quests and Chaos Cards**

**Side Quests**

**P-01 Sales Desk:** Find the smallest ambiguity that would make a real Sales user stop before submitting. Test whether MAIA asks only what matters.

**P-02 Irene:** Create the busiest plausible morning view and judge whether the alerts help prioritize or create noise.

**P-03 Angel:** Follow one return from Sales request through physical confirmation to CN and identify any missing audit clue.

**P-04 Admin:** Try to create a conflict between a local view and the authoritative/configured state without causing unsafe data change.

**P-05 Supply Chain/Logistics:** Find the easiest way a plausible-looking but wrong COA could be attached, then prove MAIA prevents it.

**P-06 Maye:** Review the campaign as if signing today. Identify the first missing role, evidence, or client decision that should block sign-off.

**P-07 Management:** Open one complicated order and judge whether the lifecycle tells the truth without reading chat history.

**Chaos Cards**

**CC-01 --- Two Requests, One Message:** Combine two valid requests and see whether MAIA separates or sequences them safely.

**CC-02 --- Changed My Mind:** Change one value immediately after confirmation; inspect traceability and linked-document impact.

**CC-03 --- Ambiguous Customer:** Use a name that matches more than one customer or branch.

**CC-04 --- Ambiguous Item:** Use a phrase that matches several SQL items.

**CC-05 --- Missing Critical Field:** Omit customer, item, quantity, date, price basis, address, batch, or document reference where it blocks.

**CC-06 --- Wrong Role:** Repeat the action from an account that should be refused.

**CC-07 --- Wrong State:** Try the action before the upstream document is valid.

**CC-08 --- Duplicate Reference:** Reuse the same customer/reference or submit it concurrently.

**CC-09 --- Bad File in the Middle:** Insert one unsupported/corrupt file between valid requests.

**CC-10 --- Interrupt and Resume:** Ask an unrelated question mid-flow, then return to the original request.

**CC-11 --- Boundary Day/Quantity:** Test exactly at and immediately beyond the locked threshold.

**CC-12 --- Stale View:** Use a record whose authoritative value changed after an earlier draft/view.

**Section 11 --- Field Manual**

**How to log a result**

Use this minimal record:

Mission code · Persona · Tester · Result · What you typed · Chosen data criteria · What happened · What you expected · Severity · Evidence link · Sabotage/Chaos used · XP

Allowed Result values:

**Pass**

**Fail**

**Blocked --- Test Data/Configuration**

**Needs Clarification**

**Aborted**

**Evidence rules**

Paste the exact message you typed.

Record the customer/item/document criteria you chose; do not rely on memory.

Capture every created or reused document/reference ID.

Capture screenshots before and after the key action.

Record timestamps for scheduled, concurrency, and stress tests.

Capture both successful permission and refused permission where required.

Name the input filename or fixed fixture.

Do not upload confidential production data into the bug tracker.

**Test Data Selection Guide**

Read **Your chosen data must satisfy** before opening MAIA.

Search your assigned account for any suitable record.

Reserve shared/state-sensitive records in the tracker.

Create a fresh prerequisite when the Mission allows.

Use the reusable input library only for external files.

If no qualifying data exists, log **Blocked --- Test Data/Configuration** with the missing criterion.

**Scoring and bug bounties**

Full base XP: Pass or Fail with complete evidence.

5 XP: useful Blocked result identifying the exact missing condition.

Sabotage bonus: self-recorded when attempted honestly.

Chaos Card: +10 XP each, maximum two per Mission by default.

First Finder: P1 +50, P2 +30, P3 +15, P4 +5.

Contributor with useful reproduction evidence: +5 XP.

Duplicate/invalid bug: no bug bounty, but base Mission XP remains when the test was executed properly.

**Help and cleanup**

UAT owner: \[NEEDS INPUT: UAT_OWNER\]

Bug channel: \[NEEDS INPUT: BUG_REPORTING_CHANNEL\]

Use UAT-\[TESTER\]-\[MISSION\]-\[YYYYMMDD\]-\[SEQ\].

Do not overwrite fixed fixtures.

Release reserved records after the test or mark them for retest.

SQL/configuration resets belong to the approved owner.

**Section 12 --- Appendix --- Coverage and Readiness Map**

**Source test-case disposition**

  ------------------ ---------------- ----------------------------------------------- ---------------------------------------
  Source test case   Disposition      Active mission                                  Reason

  HP-001             ACTIVE MISSION   M-01 --- Carry One Order Across the Relay       LOCK-01 is locked in Scope Lock v3.1.

  UP-001             ACTIVE MISSION   M-01 --- Carry One Order Across the Relay       LOCK-01 is locked in Scope Lock v3.1.

  UP-002             ACTIVE MISSION   M-01 --- Carry One Order Across the Relay       LOCK-01 is locked in Scope Lock v3.1.

  HP-002             ACTIVE MISSION   M-02 --- Telegram Is the Front Door             LOCK-02 is locked in Scope Lock v3.1.

  UP-003             ACTIVE MISSION   M-02 --- Telegram Is the Front Door             LOCK-02 is locked in Scope Lock v3.1.

  UP-004             ACTIVE MISSION   M-02 --- Telegram Is the Front Door             LOCK-02 is locked in Scope Lock v3.1.

  HP-003             ACTIVE MISSION   M-03 --- Read the Order Without Guessing        LOCK-03 is locked in Scope Lock v3.1.

  HP-004             ACTIVE MISSION   M-03 --- Read the Order Without Guessing        LOCK-03 is locked in Scope Lock v3.1.

  HP-005             ACTIVE MISSION   M-03 --- Read the Order Without Guessing        LOCK-03 is locked in Scope Lock v3.1.

  UP-005             ACTIVE MISSION   M-03 --- Read the Order Without Guessing        LOCK-03 is locked in Scope Lock v3.1.

  UP-006             ACTIVE MISSION   M-03 --- Read the Order Without Guessing        LOCK-03 is locked in Scope Lock v3.1.

  UP-007             ACTIVE MISSION   M-03 --- Read the Order Without Guessing        LOCK-03 is locked in Scope Lock v3.1.

  HP-006             ACTIVE MISSION   M-04 --- One Customer, One PO, One CPO          LOCK-04 is locked in Scope Lock v3.1.

  UP-008             ACTIVE MISSION   M-04 --- One Customer, One PO, One CPO          LOCK-04 is locked in Scope Lock v3.1.

  UP-009             ACTIVE MISSION   M-04 --- One Customer, One PO, One CPO          LOCK-04 is locked in Scope Lock v3.1.

  HP-007             ACTIVE MISSION   M-05 --- SQL Has the Final Say                  LOCK-05 is locked in Scope Lock v3.1.

  UP-010             ACTIVE MISSION   M-05 --- SQL Has the Final Say                  LOCK-05 is locked in Scope Lock v3.1.

  UP-011             ACTIVE MISSION   M-05 --- SQL Has the Final Say                  LOCK-05 is locked in Scope Lock v3.1.

  HP-008             ACTIVE MISSION   M-06 --- Price Me Correctly                     LOCK-06 is locked in Scope Lock v3.1.

  UP-012             ACTIVE MISSION   M-06 --- Price Me Correctly                     LOCK-06 is locked in Scope Lock v3.1.

  UP-013             ACTIVE MISSION   M-06 --- Price Me Correctly                     LOCK-06 is locked in Scope Lock v3.1.

  HP-009             ACTIVE MISSION   M-07 --- Below the Floor Needs Approval         LOCK-07 is locked in Scope Lock v3.1.

  UP-014             ACTIVE MISSION   M-07 --- Below the Floor Needs Approval         LOCK-07 is locked in Scope Lock v3.1.

  UP-015             ACTIVE MISSION   M-07 --- Below the Floor Needs Approval         LOCK-07 is locked in Scope Lock v3.1.

  HP-010             ACTIVE MISSION   M-08 --- Stop the Over-Credit Order at SO       LOCK-08 is locked in Scope Lock v3.1.

  UP-016             ACTIVE MISSION   M-08 --- Stop the Over-Credit Order at SO       LOCK-08 is locked in Scope Lock v3.1.

  UP-017             ACTIVE MISSION   M-08 --- Stop the Over-Credit Order at SO       LOCK-08 is locked in Scope Lock v3.1.

  UP-018             ACTIVE MISSION   M-08 --- Stop the Over-Credit Order at SO       LOCK-08 is locked in Scope Lock v3.1.

  HP-011             ACTIVE MISSION   M-09 --- Irene's Bypass Follows the Role        LOCK-09 is locked in Scope Lock v3.1.

  UP-019             ACTIVE MISSION   M-09 --- Irene's Bypass Follows the Role        LOCK-09 is locked in Scope Lock v3.1.

  UP-020             ACTIVE MISSION   M-09 --- Irene's Bypass Follows the Role        LOCK-09 is locked in Scope Lock v3.1.

  HP-012             ACTIVE MISSION   M-10 --- The Clock on Payment Terms             LOCK-10 is locked in Scope Lock v3.1.

  UP-021             ACTIVE MISSION   M-10 --- The Clock on Payment Terms             LOCK-10 is locked in Scope Lock v3.1.

  UP-022             ACTIVE MISSION   M-10 --- The Clock on Payment Terms             LOCK-10 is locked in Scope Lock v3.1.

  UP-023             ACTIVE MISSION   M-10 --- The Clock on Payment Terms             LOCK-10 is locked in Scope Lock v3.1.

  UP-024             ACTIVE MISSION   M-10 --- The Clock on Payment Terms             LOCK-10 is locked in Scope Lock v3.1.

  HP-013             ACTIVE MISSION   M-11 --- Warn, Record, Continue                 LOCK-11 is locked in Scope Lock v3.1.

  UP-025             ACTIVE MISSION   M-11 --- Warn, Record, Continue                 LOCK-11 is locked in Scope Lock v3.1.

  UP-026             ACTIVE MISSION   M-11 --- Warn, Record, Continue                 LOCK-11 is locked in Scope Lock v3.1.

  HP-014             ACTIVE MISSION   M-12 --- Zero Stock Is Still Orderable          LOCK-12 is locked in Scope Lock v3.1.

  UP-027             ACTIVE MISSION   M-12 --- Zero Stock Is Still Orderable          LOCK-12 is locked in Scope Lock v3.1.

  UP-028             ACTIVE MISSION   M-12 --- Zero Stock Is Still Orderable          LOCK-12 is locked in Scope Lock v3.1.

  HP-015             ACTIVE MISSION   M-13 --- Wake Irene at the Threshold            LOCK-13 is locked in Scope Lock v3.1.

  UP-029             ACTIVE MISSION   M-13 --- Wake Irene at the Threshold            LOCK-13 is locked in Scope Lock v3.1.

  UP-030             ACTIVE MISSION   M-13 --- Wake Irene at the Threshold            LOCK-13 is locked in Scope Lock v3.1.

  HP-016             ACTIVE MISSION   M-14 --- The 9 AM Stock Brief                   LOCK-14 is locked in Scope Lock v3.1.

  UP-031             ACTIVE MISSION   M-14 --- The 9 AM Stock Brief                   LOCK-14 is locked in Scope Lock v3.1.

  UP-032             ACTIVE MISSION   M-14 --- The 9 AM Stock Brief                   LOCK-14 is locked in Scope Lock v3.1.

  HP-017             ACTIVE MISSION   M-15 --- Three Days Late, Not Before            LOCK-15 is locked in Scope Lock v3.1.

  UP-033             ACTIVE MISSION   M-15 --- Three Days Late, Not Before            LOCK-15 is locked in Scope Lock v3.1.

  UP-034             ACTIVE MISSION   M-15 --- Three Days Late, Not Before            LOCK-15 is locked in Scope Lock v3.1.

  HP-018             ACTIVE MISSION   M-16 --- The 9 AM Operations Digest             LOCK-16 is locked in Scope Lock v3.1.

  UP-035             ACTIVE MISSION   M-16 --- The 9 AM Operations Digest             LOCK-16 is locked in Scope Lock v3.1.

  UP-036             ACTIVE MISSION   M-16 --- The 9 AM Operations Digest             LOCK-16 is locked in Scope Lock v3.1.

  HP-019             ACTIVE MISSION   M-17 --- Keep the Remaining 400 kg Open         LOCK-17 is locked in Scope Lock v3.1.

  UP-037             ACTIVE MISSION   M-17 --- Keep the Remaining 400 kg Open         LOCK-17 is locked in Scope Lock v3.1.

  UP-038             ACTIVE MISSION   M-17 --- Keep the Remaining 400 kg Open         LOCK-17 is locked in Scope Lock v3.1.

  HP-020             ACTIVE MISSION   M-18 --- Fill the Customer, Not a Guess         LOCK-18 is locked in Scope Lock v3.1.

  UP-039             ACTIVE MISSION   M-18 --- Fill the Customer, Not a Guess         LOCK-18 is locked in Scope Lock v3.1.

  UP-040             ACTIVE MISSION   M-18 --- Fill the Customer, Not a Guess         LOCK-18 is locked in Scope Lock v3.1.

  HP-021             ACTIVE MISSION   M-19 --- Trust the SQL Description              LOCK-19 is locked in Scope Lock v3.1.

  UP-041             ACTIVE MISSION   M-19 --- Trust the SQL Description              LOCK-19 is locked in Scope Lock v3.1.

  UP-042             ACTIVE MISSION   M-19 --- Trust the SQL Description              LOCK-19 is locked in Scope Lock v3.1.

  HP-022             ACTIVE MISSION   M-20 --- Fetch the Real SQL Invoice             LOCK-20 is locked in Scope Lock v3.1.

  UP-043             ACTIVE MISSION   M-20 --- Fetch the Real SQL Invoice             LOCK-20 is locked in Scope Lock v3.1.

  UP-044             ACTIVE MISSION   M-20 --- Fetch the Real SQL Invoice             LOCK-20 is locked in Scope Lock v3.1.

  HP-023             ACTIVE MISSION   M-21 --- One Approval Means One                 LOCK-21 is locked in Scope Lock v3.1.

  UP-045             ACTIVE MISSION   M-21 --- One Approval Means One                 LOCK-21 is locked in Scope Lock v3.1.

  UP-046             ACTIVE MISSION   M-21 --- One Approval Means One                 LOCK-21 is locked in Scope Lock v3.1.

  HP-024             ACTIVE MISSION   M-22 --- Date It, Then Trace the Change         LOCK-23 is locked in Scope Lock v3.1.

  UP-047             ACTIVE MISSION   M-22 --- Date It, Then Trace the Change         LOCK-23 is locked in Scope Lock v3.1.

  UP-048             ACTIVE MISSION   M-22 --- Date It, Then Trace the Change         LOCK-23 is locked in Scope Lock v3.1.

  HP-025             ACTIVE MISSION   M-23 --- Charge It as a SKU                     LOCK-24 is locked in Scope Lock v3.1.

  UP-049             ACTIVE MISSION   M-23 --- Charge It as a SKU                     LOCK-24 is locked in Scope Lock v3.1.

  UP-050             ACTIVE MISSION   M-23 --- Charge It as a SKU                     LOCK-24 is locked in Scope Lock v3.1.

  HP-026             ACTIVE MISSION   M-24 --- Carry the Batch into the Credit Note   LOCK-25 is locked in Scope Lock v3.1.

  UP-051             ACTIVE MISSION   M-24 --- Carry the Batch into the Credit Note   LOCK-25 is locked in Scope Lock v3.1.

  UP-052             ACTIVE MISSION   M-24 --- Carry the Batch into the Credit Note   LOCK-25 is locked in Scope Lock v3.1.

  HP-027             ACTIVE MISSION   M-25 --- Return First, Credit Note Second       LOCK-26 is locked in Scope Lock v3.1.

  UP-053             ACTIVE MISSION   M-25 --- Return First, Credit Note Second       LOCK-26 is locked in Scope Lock v3.1.

  UP-054             ACTIVE MISSION   M-25 --- Return First, Credit Note Second       LOCK-26 is locked in Scope Lock v3.1.

  UP-055             ACTIVE MISSION   M-25 --- Return First, Credit Note Second       LOCK-26 is locked in Scope Lock v3.1.

  HP-028             ACTIVE MISSION   M-26 --- Finance Creates the Item               LOCK-27 is locked in Scope Lock v3.1.

  UP-056             ACTIVE MISSION   M-26 --- Finance Creates the Item               LOCK-27 is locked in Scope Lock v3.1.

  UP-057             ACTIVE MISSION   M-26 --- Finance Creates the Item               LOCK-27 is locked in Scope Lock v3.1.

  HP-029             ACTIVE MISSION   M-27 --- Match the COA to the Batch             LOCK-28 is locked in Scope Lock v3.1.

  UP-058             ACTIVE MISSION   M-27 --- Match the COA to the Batch             LOCK-28 is locked in Scope Lock v3.1.

  UP-059             ACTIVE MISSION   M-27 --- Match the COA to the Batch             LOCK-28 is locked in Scope Lock v3.1.

  HP-030             ACTIVE MISSION   M-28 --- C3 Stops at Batch Level                LOCK-29 is locked in Scope Lock v3.1.

  UP-060             ACTIVE MISSION   M-28 --- C3 Stops at Batch Level                LOCK-29 is locked in Scope Lock v3.1.

  UP-061             ACTIVE MISSION   M-28 --- C3 Stops at Batch Level                LOCK-29 is locked in Scope Lock v3.1.

  HP-031             ACTIVE MISSION   M-29 --- Do Not Duplicate E-Invoice             LOCK-30 is locked in Scope Lock v3.1.

  UP-062             ACTIVE MISSION   M-29 --- Do Not Duplicate E-Invoice             LOCK-30 is locked in Scope Lock v3.1.

  UP-063             ACTIVE MISSION   M-29 --- Do Not Duplicate E-Invoice             LOCK-30 is locked in Scope Lock v3.1.

  HP-032             ACTIVE MISSION   M-30 --- Finance Chat Is Here Now               LOCK-31 is locked in Scope Lock v3.1.

  UP-064             ACTIVE MISSION   M-30 --- Finance Chat Is Here Now               LOCK-31 is locked in Scope Lock v3.1.

  UP-065             ACTIVE MISSION   M-30 --- Finance Chat Is Here Now               LOCK-31 is locked in Scope Lock v3.1.

  HP-033             ACTIVE MISSION   M-31 --- Say It Short                           LOCK-32 is locked in Scope Lock v3.1.

  UP-066             ACTIVE MISSION   M-31 --- Say It Short                           LOCK-32 is locked in Scope Lock v3.1.

  UP-067             ACTIVE MISSION   M-31 --- Say It Short                           LOCK-32 is locked in Scope Lock v3.1.

  HP-034             ACTIVE MISSION   M-32 --- Keep Talking Under Pressure            LOCK-33 is locked in Scope Lock v3.1.

  UP-068             ACTIVE MISSION   M-32 --- Keep Talking Under Pressure            LOCK-33 is locked in Scope Lock v3.1.

  UP-069             ACTIVE MISSION   M-32 --- Keep Talking Under Pressure            LOCK-33 is locked in Scope Lock v3.1.

  HP-035             ACTIVE MISSION   M-33 --- Every Role Must Show Up                LOCK-34 is locked in Scope Lock v3.1.

  UP-070             ACTIVE MISSION   M-33 --- Every Role Must Show Up                LOCK-34 is locked in Scope Lock v3.1.

  UP-071             ACTIVE MISSION   M-33 --- Every Role Must Show Up                LOCK-34 is locked in Scope Lock v3.1.

  HP-036             ACTIVE MISSION   M-34 --- Cut Over Without Test Data Leakage     LOCK-35 is locked in Scope Lock v3.1.

  UP-072             ACTIVE MISSION   M-34 --- Cut Over Without Test Data Leakage     LOCK-35 is locked in Scope Lock v3.1.

  UP-073             ACTIVE MISSION   M-34 --- Cut Over Without Test Data Leakage     LOCK-35 is locked in Scope Lock v3.1.

  HP-037             ACTIVE MISSION   M-35 --- The Supported Document Shelf           LOCK-36 is locked in Scope Lock v3.1.

  UP-074             ACTIVE MISSION   M-35 --- The Supported Document Shelf           LOCK-36 is locked in Scope Lock v3.1.

  UP-075             ACTIVE MISSION   M-35 --- The Supported Document Shelf           LOCK-36 is locked in Scope Lock v3.1.
  ------------------ ---------------- ----------------------------------------------- ---------------------------------------

**Scope coverage**

  ------------------------------------------------------------------------------------------ --------------------------------- -----------------------------------------------
  Scope item                                                                                 Status                            Mission / boundary section

  LOCK-01 --- Core order-to-delivery operating flow                                          LOCKED                            M-01 --- Carry One Order Across the Relay

  LOCK-02 --- Telegram as current production chatbot platform                                LOCKED --- SUPERSEDED             M-02 --- Telegram Is the Front Door

  LOCK-03 --- Order extraction from Telegram text, photo and PDF                             LOCKED                            M-03 --- Read the Order Without Guessing

  LOCK-04 --- Duplicate PO hard block at CPO stage                                           LOCKED                            M-04 --- One Customer, One PO, One CPO

  LOCK-05 --- SQL as source of truth                                                         LOCKED                            M-05 --- SQL Has the Final Say

  LOCK-06 --- Customer-specific pricing                                                      LOCKED                            M-06 --- Price Me Correctly

  LOCK-07 --- Minimum-selling-price exception approval                                       LOCKED                            M-07 --- Below the Floor Needs Approval

  LOCK-08 --- Credit-limit block at Sales Order submission                                   LOCKED --- SUPERSEDED             M-08 --- Stop the Over-Credit Order at SO

  LOCK-09 --- Irene / Credit Controller bypass behaviour                                     LOCKED                            M-09 --- Irene's Bypass Follows the Role

  LOCK-10 --- Payment-term enforcement before go-live                                        LOCKED                            M-10 --- The Clock on Payment Terms

  LOCK-11 --- Non-blocking warning modal and activity log                                    LOCKED                            M-11 --- Warn, Record, Continue

  LOCK-12 --- Stock is informational only                                                    LOCKED --- SUPERSEDED             M-12 --- Zero Stock Is Still Orderable

  LOCK-13 --- Configurable low-stock and out-of-stock notifications                          LOCKED                            M-13 --- Wake Irene at the Threshold

  LOCK-14 --- Daily stock summary                                                            LOCKED                            M-14 --- The 9 AM Stock Brief

  LOCK-15 --- Delayed-delivery alert                                                         LOCKED                            M-15 --- Three Days Late, Not Before

  LOCK-16 --- Daily 9:00 AM operational digest                                               LOCKED                            M-16 --- The 9 AM Operations Digest

  LOCK-17 --- Blanket-order and partial-delivery reminders                                   LOCKED                            M-17 --- Keep the Remaining 400 kg Open

  LOCK-18 --- Customer master fields                                                         LOCKED                            M-18 --- Fill the Customer, Not a Guess

  LOCK-19 --- Item descriptions match SQL                                                    LOCKED                            M-19 --- Trust the SQL Description

  LOCK-20 --- Invoice generation and PDF download from SQL                                   LOCKED --- SUPERSEDED             M-20 --- Fetch the Real SQL Invoice

  LOCK-21 --- Single-level invoice approval                                                  LOCKED                            M-21 --- One Approval Means One

  LOCK-22 --- Multi-level invoice approval as customisation                                  OUT OF SCOPE / CUSTOMISATION      Section 4 --- Out of Bounds

  LOCK-23 --- Document date handling                                                         LOCKED                            M-22 --- Date It, Then Trace the Change

  LOCK-24 --- Surcharges as SQL SKU items                                                    LOCKED                            M-23 --- Charge It as a SKU

  LOCK-25 --- Credit-note batch-number carry-over                                            LOCKED                            M-24 --- Carry the Batch into the Credit Note

  LOCK-26 --- Credit-note permissions and return SOP                                         LOCKED                            M-25 --- Return First, Credit Note Second

  LOCK-27 --- Item/product creation restricted to Finance/Admin                              LOCKED                            M-26 --- Finance Creates the Item

  LOCK-28 --- COA upload, indexing, linking and prompting                                    LOCKED                            M-27 --- Match the COA to the Batch

  LOCK-29 --- C3 / order tax exemption tracked at batch level                                LOCKED                            M-28 --- C3 Stops at Batch Level

  LOCK-30 --- Tax / SST / e-invoice handling                                                 LOCKED                            M-29 --- Do Not Duplicate E-Invoice

  LOCK-31 --- Finance chatbot                                                                LOCKED                            M-30 --- Finance Chat Is Here Now

  LOCK-32 --- Short and direct chatbot responses                                             LOCKED                            M-31 --- Say It Short

  LOCK-33 --- Chatbot stability and performance                                              LOCKED                            M-32 --- Keep Talking Under Pressure

  LOCK-34 --- UAT ownership and role coverage                                                LOCKED                            M-33 --- Every Role Must Show Up

  LOCK-35 --- Live SQL cutover before production                                             LOCKED                            M-34 --- Cut Over Without Test Data Leakage

  LOCK-36 --- Supported operational document set                                             LOCKED                            M-35 --- The Supported Document Shelf

  NCI-01 --- Final role-permission matrix                                                    NEEDS CLIENT INPUT --- BLOCKING   Launch Readiness + Section 4

  OOS-01 --- WhatsApp activation for go-live; Telegram is the locked channel.                OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  DEFER-01 --- C3 item-quantity reservation and separate product-level allocation.           OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  DEFER-02 --- Individual-user digest/reminder tailoring.                                    OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  OOS-02 --- Moving e-invoice processing from SQL into MAIA.                                 OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  SOW-B-01 --- Transporter management, route optimization, and delivery sequencing.          OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  SOW-B-02 --- Pallet/rack/location automation, FIFO/FEFO, and batch-picking multi-select.   OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  SOW-B-03 --- Automated bank-statement reconciliation.                                      OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  RG-FUT-01 --- Forecasting, cross-sell/up-sell, and expiring-stock recommendations.         OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  RG-LOG-01 --- Exact one-day/two-hour pre-delivery reminders.                               OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  CJ-ORD-01 --- RM200 minimum-delivery-order enforcement.                                    OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  UAT-Q-01 --- Quotation revision/validity automation beyond SQL customer pricing.           OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  UAT-OPS-01 --- Automatic Telegram-to-web failover.                                         OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  UAT-SLA-01 --- Five-minute SQL sync SLA.                                                   OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  FEATURE-POD --- Proof-of-delivery/driver photo/e-signature flow.                           OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  FEATURE-LANG --- Multi-language chatbot acceptance.                                        OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  FEATURE-CRM --- CRM/sales-pipeline module.                                                 OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  FEATURE-SOA --- Statement-of-account portal.                                               OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  FEATURE-CALC --- Custom calculators.                                                       OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds

  DOC-VOUCHER --- Payment voucher generation.                                                OUT OF SCOPE / DEFERRED           Section 4 --- Out of Bounds
  ------------------------------------------------------------------------------------------ --------------------------------- -----------------------------------------------

**Input-requirement traceability**

  ------------------------------------------------------------------------ -------------------------- ---------------------
  Input category / fixture                                                 Mission(s)                 Readiness status

  Customer order inputs                                                    M-03, M-32                 MISSING --- PREPARE

  Degraded and invalid order files                                         M-03, M-32                 MISSING --- PREPARE

  COA and batch evidence                                                   M-27                       MISSING --- PREPARE

  Special regression fixtures                                              M-03, M-32; BF-01, BF-03   MISSING --- PREPARE

  REG-01 REG-01_Extraction_Accuracy_Answer_Key.md                          M-03                       MISSING --- PREPARE

  REG-02 REG-02_Corrected_Extraction_Sample.\[approved-format\]            M-03; BF-03                MISSING --- PREPARE

  REG-03 REG-03_Stress_Test_Request_Sequence.md                            M-32; BF-01                MISSING --- PREPARE

  REG-04 REG-04_Corrupt_or_Unsupported_Order_File.\[approved-extension\]   M-32; BF-01                MISSING --- PREPARE
  ------------------------------------------------------------------------ -------------------------- ---------------------

**Persona-rule traceability**

  ------------------- ------------------------------------------------------------------------------------- ----------------------------------------- ------------------------------------------
  Persona             Business rule                                                                         Source basis                              Mission(s)

  P-01 Sales          No guessed extraction; current customer/item/price; approval boundaries.              LOCK-03, 05--08, 18--19, 23--24, 26--27   M-03, M-05--M-08, M-18--M-19, M-22--M-26

  P-02 Irene          Role-based credit bypass; exact alert/delivery/partial boundaries.                    LOCK-09, 13--17                           M-09, M-13--M-17

  P-03 Finance        SQL invoice/tax truth; single-level approval; return before CN; batch traceability.   LOCK-20--21, 25--31                       M-20--M-21, M-24--M-30

  P-04 Admin          SQL authority, configuration safety, item permission, cutover control.                LOCK-05, 13--16, 19, 27, 35               M-05, M-13--M-16, M-19, M-26, M-34

  P-05 Supply Chain   Valid upstream state, physical confirmation, COA/batch matching.                      LOCK-01, 17, 26, 28                       M-01, M-17, M-25, M-27

  P-06 Maye           Evidence-backed role coverage and scoped sign-off.                                    LOCK-34 + NCI-01                          M-33, M-34

  P-07 Management     Lifecycle visibility without unrestricted operational action.                         LOCK-01, 16, 34                           M-01, M-16, M-33
  ------------------- ------------------------------------------------------------------------------------- ----------------------------------------- ------------------------------------------

**Beyond Tester Reach handoffs**

  -------------------- ------------------------ -----------------------------------------------
  Handoff ID           Owner                    Field-guide location

  H-01                 Client SQL owner         Section 4 and relevant Mission win conditions

  H-02                 Finance/client           Section 4 and relevant Mission win conditions

  H-03                 Finance/client           Section 4 and relevant Mission win conditions

  H-04                 Finance/client           Section 4 and relevant Mission win conditions

  H-05                 Client PIC + SQL owner   Section 4 and relevant Mission win conditions

  H-06                 Maye/client PIC          Section 4 and relevant Mission win conditions
  -------------------- ------------------------ -----------------------------------------------

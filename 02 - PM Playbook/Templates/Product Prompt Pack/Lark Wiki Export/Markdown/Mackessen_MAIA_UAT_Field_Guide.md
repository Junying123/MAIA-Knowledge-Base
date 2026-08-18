**Mackessen_MAIA_UAT_Field_Guide**

**MAIA UAT Field Guide --- Play It Like a User**

**Table of Contents**

Section 0 --- Cover and logistics

Section 1 --- How to test

Section 2 --- The client's world

Section 3 --- Product and workflow map

Section 4 --- Scope boundaries

Section 5 --- Persona Cards

The Order Coordinator

The Commercial Gatekeeper

The Fulfilment Controller

Irene, the Credit Gatekeeper

The Financial Control Desk

The Quality Traceability Keeper

The Operations Viewer

Maye, the Sign-off Coordinator

Section 6 --- Trust Killers

Section 7 --- Campaign coordination

Section 8 --- Mission overview

Section 9 --- Mission Cards

M-01 --- Carry One Order Across the Relay

M-02 --- Use the Right Front Door

M-03 --- Read the PO Without Guessing

M-04 --- Keep One Source of Truth

M-05 --- Price It, Then Ask the Right Person

M-06 --- Hold the Credit Line

M-07 --- Challenge the Payment Clock

M-08 --- Acknowledge the Warning, Keep the Order Moving

M-09 --- Ring the Stock Bell at Nine

M-10 --- Do Not Lose the Last 400 kg

M-11 --- Open the Nine O'Clock Operations Pulse

M-12 --- One Original Invoice, One Approval

M-13 --- Date It Correctly, Charge It as a SKU

M-14 --- Return Goods Without Breaking the Batch Trail

M-15 --- Guard the Product Master

M-16 --- Attach the Certificate to the Right Batch

M-17 --- Respect the Tax Boundary

M-18 --- Ask Finance, Reveal Only What the Role Allows

M-19 --- Earn the Sign-off

M-20 --- Cross the Live-SQL Bridge Safely

Section 10 --- Boss Fights

BF-01 --- The Duplicate PO Race

BF-02 --- The Telegram Marathon

BF-03 --- Catch the Credit Block at the Right Stage

BF-04 --- The Right Code with the Wrong Description

BF-05 --- Reject the Look-alike Invoice

BF-06 --- No Test Ghosts in Production

Section 11 --- Field Manual

Section 12 --- Compact coverage appendix

**PART A --- READ BEFORE YOU PLAY**

**Section 0 --- Cover and logistics**

  --------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                              Details

  Project                           Mackessen × MAIA UAT

  Product                           MAIA

  Client                            Mackessen

  Issued date                       \[NEEDS INPUT: ISSUED_DATE\]

  Test window                       \[NEEDS INPUT: TEST_WINDOW\]

  Environment/access                \[NEEDS INPUT: ENVIRONMENT_AND_ACCESS\]

  Bug-reporting channel             \[NEEDS INPUT: BUG_REPORTING_CHANNEL\]

  Support channel                   \[NEEDS INPUT: SUPPORT_CHANNEL\]

  UAT owner                         Maye coordinates client approval/sign-off; \[NEEDS INPUT: UAT_OWNER\] for internal execution ownership

  Remote support                    \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\]

  Time budget                       \[NEEDS INPUT: TIME_BUDGET_PER_TESTER\]

  Input-docs folder                 \[NEEDS INPUT: INPUT_DOCS_FOLDER\]

  Current input-folder contents     \[NEEDS INPUT: CURRENT_INPUT_FOLDER_CONTENTS\]

  Anything else testers must know   \[NEEDS INPUT: ANYTHING_ELSE_TESTERS_MUST_KNOW\]

  Systems testers cannot access     \[NEEDS INPUT: SYSTEMS_TESTERS_CANNOT_ACCESS\]. Use black-box testing only; do not inspect source code, APIs, queues, SQL tables, server logs, or hidden configuration.
  --------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

***Stop:** Do not run live-SQL cutover or production-write missions without the authorised client/product-team window, owner, and rollback plan.*

**Section 1 --- How to test**

Stay in your assigned **client persona** and use the matching **product role/account**.

Use your own natural wording. Sample phrases are prompts, not scripts.

Use only user-facing web screens, Telegram functions, downloads, notifications, and visible activity history.

Follow the checkpoints, but navigate naturally and notice confusing behaviour.

Try realistic edge cases without altering real customer balances, stock, tax, or production documents.

Use the mission's approved input-recovery path. Do not invent customers, items, prices, permissions, or hidden values.

Capture only the evidence needed to prove the result.

**Five-minute blocker rule:** If setup, access, input, or environment issues prevent progress for more than five minutes, record the blocker and continue with another mission.

A missing prerequisite is not automatically a product failure.

If an out-of-bounds behaviour confuses you as the persona, log an **Observation --- Out of Scope**, not a bug.

***Remember:** Judge what a real user can see and do. Backend or SQL verification belongs to a Product-Team / Client Handoff.*

**Section 2 --- The client's world**

Mackessen operates a structured order-to-cash environment where customer orders, items, prices, credit, delivery, invoices, returns, batches, and quality documents must stay connected. The immediate MAIA value is practical: reduce repetitive order entry and coordination while preserving control.

A normal Sales day begins with a customer PO, message, photo, or PDF. The user identifies the customer, checks delivery details, maps items, confirms quantities and prices, and creates the order records. Logistics then fulfils a valid Sales Order, monitors delivery and outstanding quantities, and reacts to stock or delay alerts. Finance and credit roles control exceptions, invoice access, returns, tax boundaries, and approvals. Management needs a coherent operational view.

**SQL-backed data is the source of truth.** Mackessen does not want users to re-key or maintain competing customer, product, price, credit, invoice, or tax masters inside MAIA. The product is expected to coordinate work, expose the authoritative values, and stop safely when data is missing or uncertain.

The customer is most afraid of bad automation:

the wrong customer or item chosen silently;

duplicate POs creating duplicate downstream work;

a credit or payment block firing too late;

low stock incorrectly stopping a legitimate order;

stale or mismatched invoice PDFs;

dropped batch traceability on returns or COAs;

unauthorised users approving or seeing protected information;

chatbot crashes, lost requests, or mixed order context;

test data appearing after production cutover.

Success feels like a controlled operating layer: MAIA reads real inputs, validates business rules, asks concise questions when uncertain, routes exceptions to the correct role, preserves audit evidence, and lets the next team continue from a trustworthy state.

***Why this matters:** Mackessen will judge MAIA by operational correctness and control---not by how conversational the chatbot sounds.*

**Section 3 --- Product and workflow map**

**What MAIA does in this phase**

MAIA coordinates the current order-to-delivery flow through web workspaces and Telegram. It captures orders, grounds customer/item data, applies visible checks and approvals, supports fulfilment and reminders, exposes official invoice documents, and maintains audit-friendly handoffs.

**Main workflow**

Customer order arrives through Telegram text, photo, or PO/PDF.

Sales reviews the extracted customer, address, items, quantities, price, PO number, and date.

The product applies duplicate, minimum-price, credit, payment-term, warning, and stock rules.

Authorised roles approve or override only where the locked scope permits.

Logistics fulfils the valid SO, records delivery, and keeps partial quantities open.

Finance/Admin retrieves the SQL invoice PDF, handles approved returns/credit notes, and preserves batch traceability.

Notifications, **9:00 AM** summaries, and operational digest surface outstanding work.

Management and Maye review lifecycle status, evidence, role coverage, and sign-off.

**Critical business rules**

Same customer + same PO number is a **hard block**; the same PO number for a different customer is allowed.

Customer extraction must be correct; item-line extraction target is **at least 90%** across the agreed pack.

Missing or ambiguous master data must be flagged; MAIA must not invent values.

Customer-specific price comes from the authoritative source; missing price is not silently zero.

Below-minimum price requires Finance Manager, Credit Controller, Sales Manager, or Admin approval.

Credit block occurs at **SO submission**; authorised overrides are logged.

Payment-term rules: COD unpaid blocks; 30-day alerts day 31/blocks day 61; 60-day alerts day 61/blocks day 91; reminders every 14 days.

Non-blocking warnings require acknowledgement and activity logging.

Low/zero stock is informational and **must not block** order submission.

Delayed-delivery alert starts only after more than three full days.

Partial quantity stays open until full delivery or authorised closure.

Invoice PDF is the original SQL invoice; go-live approval is single-level.

Sales requests credit notes; Finance/Admin issues only after physical return confirmation; invoice batches carry over.

C3 is batch-level only; e-invoice remains in SQL.

Telegram is the current channel. WhatsApp activation is not required for go-live.

**Glossary**

  ------------------------------- -----------------------------------------------------------------------------------------------
  Term                            Meaning in this guide

  MAIA                            The product being tested: the operating/chatbot and workflow layer.

  SQL                             Mackessen's authoritative operational data source. Testers do not inspect it directly.

  PO                              Purchase Order received from a customer.

  CPO                             The customer purchase-order record used in the MAIA workflow; the source pack uses this term.

  SO                              Sales Order. Credit controls must apply at submission.

  DO                              Delivery Order. It must not be created from an invalid SO.

  COA                             Certificate of Analysis linked by item/batch/supplier/date.

  C3                              Order tax-exemption handling locked at batch level for go-live.

  TIN                             Tax Identification Number.

  COD                             Cash on Delivery payment term.

  UAT                             User Acceptance Testing.

  Boss Fight                      A focused regression mission for a previously failed or fragile behaviour.
  ------------------------------- -----------------------------------------------------------------------------------------------

**Section 4 --- Scope boundaries**

**In scope**

Core order-to-delivery flow and supported document set.

Telegram as current chatbot channel.

Text/photo/PDF order extraction, SQL-backed auto-fill, 90% item-line target, and correction-learning demonstration.

Duplicate PO hard block.

Authoritative customer/item/pricing/credit/payment/invoice/tax data handling.

Customer-specific price and minimum-price approval.

Credit and payment-term controls with authorised overrides.

Warning acknowledgement and audit log.

Stock non-blocking behaviour, low/out-of-stock alerts, and 9:00 AM stock summary.

Delayed-delivery and partial-delivery reminders.

9:00 AM operational digest using current generic logic.

Original SQL invoice PDF and single-level approval.

Document date, surcharge SKU, credit note/returns, item-creation permissions, COA, batch-level C3, SQL e-invoice continuity, and Finance chatbot.

Chatbot stability, role coverage, and live-SQL cutover.

**Needs scoping --- do not test as committed behaviour**

\[GAP: final role-permission matrix and named accounts\]

\[GAP: stress-test duration/count and numeric response-time target\]

\[GAP: correction-learning interval\]

\[GAP: final recipients and exact inactive-customer/reorder selection logic\]

\[GAP: document states where date editing remains legal\]

\[GAP: COA precedence when multiple documents match\]

\[GAP: named single-level invoice approver(s)\]

\[GAP: live cutover window, credentials, rollback owner, and evidence pack\]

**Out of scope**

WhatsApp activation for go-live.

Multi-level invoice approval.

C3 item-quantity reservation and separate product-level C3 allocation.

Individual-user reminder/digest tailoring.

Migrating e-invoice processing from SQL into MAIA.

Transporter management, route optimisation, delivery sequencing.

Pallet/rack/location management, FIFO/FEFO, and batch-picking multi-select.

Automated bank-statement reconciliation.

Forecasting, cross-sell/up-sell, and expiring-stock sales suggestions.

Pre-delivery reminders at one day/two hours.

RM200 minimum-delivery-order enforcement.

Quotation revision/validity automation.

Automatic Telegram-to-website failover.

A five-minute SQL sync SLA.

Proof of delivery, multi-language chatbot, CRM, statement-of-account portal, custom calculators, and payment voucher generation.

**Superseded behaviour**

WhatsApp as mandatory go-live channel → Telegram is current.

Credit block at invoice stage → credit block at SO submission.

Zero stock blocks order → stock is informational only.

MAIA-generated invoice PDF → original SQL invoice PDF.

Multi-level approval expectation → single-level for go-live.

**Product-Team / Client Handoffs**

Supply expected visible values for seeded pricing, credit, payment-term, stock, invoice, batch, C3, and cutover records.

Verify actual SQL reads/writes and live/test destination; testers verify only the visible MAIA result.

Create/restore role assignments and confirm the final matrix.

Run safe time/history simulations for aged invoices, delayed deliveries, and scheduled jobs.

Confirm the original invoice PDF and SQL e-invoice status.

Own production cutover, rollback, cleanup, and final environment confirmation.

**Section 5 --- Persona Cards**

**The Order Coordinator --- Sales User / Sales User**

**Client role:** Sales User\
**Product role:** Sales User\
**Account to use:** \[GAP: named Sales User UAT account and linked Telegram identity\]

**A day in my life**

I start with customer messages, purchase orders, photos, or PDFs that must become clean operating records. I identify the customer, confirm the delivery address, check the item and quantity, review the customer-specific price, and make sure the PO number is not a duplicate. MAIA should remove repetitive entry, but I remain responsible for noticing ambiguity before I submit a Sales Order.

My day is interrupted by unclear item names, missing prices, low stock, credit blocks, and customers with several delivery addresses. I can keep normal work moving, but I must stop when the product cannot ground a customer or item in SQL, when approval is required, or when a return must follow the credit-note process. Done means the correct order is visible, the right checks have run, and the next team receives a safe, traceable record.

**Rules I work by**

**Always:** Confirm customer, address, PO number, item, quantity, date, and visible price before submission.

**Never:** Invent master data, ignore a duplicate hard block, approve my own price exception, override credit without the role, issue a credit note, or create a product code.

**Before I submit/confirm:** Resolve ambiguous extraction and required-field gaps; acknowledge non-blocking warnings.

**Historical/reference checks:** Visible duplicate-PO status, current customer price, credit/payment block, and order state.

**I can approve:** None unless a separate authorised product role is assigned.

**I cannot approve:** My own price exception, credit/payment override, or credit-note issue.

**I escalate to:** Sales Manager for price exceptions; Finance Manager/Credit Controller/Admin for credit or payment blocks; Finance/Admin for returns.

**Core behaviours I must prove**

Telegram text/photo/PDF order capture

Customer and item grounding

Duplicate protection

Pricing and approval handoff

Credit/payment blocks

Stock warnings that do not block

Short operational chatbot responses

**What I want from the product**

"Read the order accurately, show me the important checks, and stop safely when something is uncertain."

**What makes me trust it**

The customer, item, address, price, and status remain consistent; corrections are learned; approvals and warnings are traceable.

**What would make me stop trusting it**

A wrong item is chosen silently, a duplicate proceeds, a blocked SO creates downstream documents, or the bot loses context.

**How I talk**

"Create an order for this PO and show me anything I need to fix."

"Which address should I use for this customer?"

"Why is this Sales Order blocked?"

"I need to request a credit note for this delivered order."

**Patience level and quirks**

I am practical and time-sensitive. Give me the result and next action first; I will not read a long explanation to find the one field that is wrong.

↑ Back to Table of Contents

**The Commercial Gatekeeper --- Sales Manager / Sales Manager**

**Client role:** Sales Manager\
**Product role:** Sales Manager\
**Account to use:** \[GAP: named Sales Manager UAT account\]

**A day in my life**

Orders reach me when the selling price falls below the configured minimum or when a date/action needs manager authority. I need enough context to decide quickly: customer, item, proposed price, order reference, and who requested the exception.

I am not here to rescue bad data. If the customer, item, or price is not grounded, the request should remain unresolved rather than becoming an approval problem. Done means a valid exception is approved once, the decision is logged, and unauthorised users cannot imitate my action.

**Rules I work by**

**Always:** Review the exact order and exception before approving.

**Never:** Approve an ungrounded or incomplete order, or approve outside the final permission matrix.

**Before I submit/confirm:** Confirm the request is genuinely below the configured minimum and the correct order is referenced.

**Historical/reference checks:** Visible approval request and current customer/item price context.

**I can approve:** Below-minimum-price exceptions, subject to the final matrix.

**I cannot approve:** Finance/Admin actions not granted to Sales Manager.

**I escalate to:** Finance Manager/Admin when the issue is credit, payment terms, tax, invoice, or configuration.

**Core behaviours I must prove**

Minimum-price approval

Unauthorised refusal

Approval audit trail

Allowed document-date change

**What I want from the product**

"Show me the exception, the business context, and one clear approve/refuse action."

**What makes me trust it**

The decision is attached to the right order and records approver, time, and outcome.

**What would make me stop trusting it**

The order proceeds before approval or a Sales User can approve their own request.

**How I talk**

"Show me the below-minimum price request for this order."

"Approve this exception and record my decision."

**Patience level and quirks**

I expect concise evidence. I do not want a chatbot essay when a controlled decision is waiting.

↑ Back to Table of Contents

**The Fulfilment Controller --- Logistics / Logistics**

**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[GAP: named Logistics UAT account\]

**A day in my life**

I receive Sales Orders that are ready to fulfil. I create the delivery record, monitor stock signals, schedule or update delivery, and keep partial quantities open until the order is complete.

My work depends on clean state handoffs. A draft, blocked, or unapproved SO must not become a Delivery Order. Low or zero stock may warn me, but it must not automatically cancel a valid customer order. Done means the delivery status and remaining quantity are accurate, delayed deliveries are visible, and the next team sees the same lifecycle.

**Rules I work by**

**Always:** Act only on a valid SO and keep partial quantities visible.

**Never:** Create downstream delivery from a blocked/draft SO, close an outstanding balance without authority, or treat stock quantity as an automatic order block.

**Before I submit/confirm:** Confirm order status, customer, items, quantities, and delivery date.

**Historical/reference checks:** Prior delivered quantity, outstanding quantity, and active delayed-delivery status.

**I can approve:** Delivery completion or valid reschedule where permitted.

**I cannot approve:** Credit, invoice, or credit-note controls unless separately granted.

**I escalate to:** Sales for order correction; Finance/Admin for returns; Admin/product team for alert configuration.

**Core behaviours I must prove**

Valid-state handoff

Stock non-blocking behaviour

Delayed-delivery alerts

Partial-delivery remainder and reminders

Daily stock summary

**What I want from the product**

"Give me a reliable queue of what can ship, what is late, and what quantity remains."

**What makes me trust it**

Statuses and quantities survive handoffs and reminders stop only when the right order is resolved.

**What would make me stop trusting it**

A blocked order becomes a DO, an outstanding quantity disappears, or an alert clears against the wrong delivery.

**How I talk**

"Show deliveries delayed more than three days."

"Record 600 kg delivered and keep the remaining 400 kg open."

**Patience level and quirks**

I work across many orders. Wrong context or a stale status is more dangerous than a slightly slow screen.

↑ Back to Table of Contents

**Irene, the Credit Gatekeeper --- Credit Controller / Credit Controller**

**Client role:** Credit Controller\
**Product role:** Credit Controller\
**Account to use:** \[GAP: Irene UAT account with confirmed role and linked Telegram identity\]

**A day in my life**

I protect the business from orders that exceed credit limits or violate payment terms. My account may approve or bypass a credit block because of the configured role---not because the system recognises my name.

I also receive operational reminders assigned to Irene/Logistics. I need each exception tied to the correct customer and Sales Order, with a visible reason and audit trail. Done means valid orders are released by the right role, invalid attempts stay blocked, and removing my role removes the permission immediately.

**Rules I work by**

**Always:** Confirm the customer, exposure, payment-term condition, order reference, and reason before override.

**Never:** Let identity replace role-based permission or release a block without a traceable decision.

**Before I submit/confirm:** Verify the block appears at SO submission and that downstream documents do not exist yet.

**Historical/reference checks:** Visible customer exposure/payment status and prior approval state supplied for UAT.

**I can approve:** Credit/payment overrides when the configured role permits it.

**I cannot approve:** Anything outside the final role matrix.

**I escalate to:** Finance Manager/Admin for data disputes; client/product team when configured exposure or term history is wrong.

**Core behaviours I must prove**

Credit block timing

Authorised override

Role removal/refusal

Payment-term boundaries

Alert receipt

**What I want from the product**

"Stop risky orders at the right moment and make every exception accountable."

**What makes me trust it**

Permission follows role, the block is early, and every override is visible.

**What would make me stop trusting it**

A later invoice-only block, broad hidden permissions, or an override without reason and audit history.

**How I talk**

"Why is this customer blocked?"

"Approve this Sales Order override with this reason."

"Show me the customers at payment-term risk."

**Patience level and quirks**

I will challenge boundary dates and role changes. A happy path alone does not prove credit control.

↑ Back to Table of Contents

**The Financial Control Desk --- Finance Manager / Finance or Admin**

**Client role:** Finance Manager / Finance or Admin\
**Product role:** Finance Manager or Admin\
**Account to use:** \[GAP: separate named Finance Manager and Admin accounts if rights differ\]

**A day in my life**

I handle financial approvals, invoice retrieval, returns, credit notes, item creation, surcharge items, tax boundaries, and selected configuration. The original SQL invoice and SQL-backed data must remain authoritative.

I need strict separation of duties. Sales may request a credit note, but Finance/Admin issues it only after physical return quantity is confirmed. I must not duplicate an e-invoice already handled in SQL or replace the invoice with a MAIA-formatted substitute. Done means the financial record is accurate, authorised, and traceable to the source order, invoice, batch, and decision.

**Rules I work by**

**Always:** Use SQL-backed records, confirm source invoice/batches, and follow the approved role matrix.

**Never:** Issue a credit note before return confirmation, create duplicate/invalid product masters, duplicate SQL e-invoice submission, or accept a substitute invoice PDF.

**Before I submit/confirm:** Check customer, document, amounts, tax, batch, approval state, and physical-return confirmation.

**Historical/reference checks:** Prepared invoice/return/batch reference and approval history.

**I can approve:** Approved finance/admin actions granted by the final matrix.

**I cannot approve:** Anything outside the final matrix or without authoritative source data.

**I escalate to:** Client finance owner for authoritative record disputes; product team for configuration/integration failures.

**Core behaviours I must prove**

Original SQL invoice PDF

Single-level approval

Credit-note role/SOP

Batch carry-over

Item creation restriction

Surcharge SKU

C3 and e-invoice boundaries

Finance chatbot permissions

**What I want from the product**

"Keep the official financial record intact and make exceptions easy to audit."

**What makes me trust it**

Amounts, tax, invoice, batch, and approval history remain consistent with the approved reference.

**What would make me stop trusting it**

A stale PDF, duplicated e-invoice, dropped batch, or unauthorised user changing financial records.

**How I talk**

"Download the original invoice for this SQL invoice number."

"Create the credit note only after return quantity is confirmed."

"Show pending finance approvals."

**Patience level and quirks**

I care more about correctness and control than speed. A clear refusal is better than a silent wrong posting.

↑ Back to Table of Contents

**The Quality Traceability Keeper --- Supply Chain / \[GAP: Product Role\]**

**Client role:** Supply Chain / Quality\
**Product role:** \[GAP: map to product role/account\]\
**Account to use:** \[GAP: named COA-capable UAT account\]

**A day in my life**

I receive Certificates of Analysis (COAs) that must be searchable and attached to the correct shipment evidence. The useful keys are item, lot or batch, supplier, and date.

I must prevent a document from looking valid merely because it uploaded successfully. If a batch is missing or mismatched, the system should stop or clearly flag the link. Done means the right COA is easy to find from the related Delivery Order or invoice and an unrelated COA cannot be presented as valid evidence.

**Rules I work by**

**Always:** Check item, batch, supplier, date, and related DO/invoice before confirming a link.

**Never:** Silently link an incomplete or mismatched COA.

**Before I submit/confirm:** Confirm the index fields and shipment batch agree.

**Historical/reference checks:** Prepared batch and document references.

**I can approve:** COA link/confirmation only where the mapped role permits.

**I cannot approve:** Ungranted financial or master-data actions.

**I escalate to:** Product/client quality owner when matching precedence is ambiguous.

**Core behaviours I must prove**

COA upload and indexing

Correct shipment link

Missing-index handling

Batch mismatch refusal

**What I want from the product**

"Find the right quality document quickly and never attach the wrong batch evidence."

**What makes me trust it**

The matching fields are visible and a mismatch cannot pass silently.

**What would make me stop trusting it**

A document is auto-linked despite missing or conflicting batch data.

**How I talk**

"Find the COA for this batch."

"Link this COA to the matching Delivery Order."

**Patience level and quirks**

I will deliberately use a near-match. The product must distinguish similar documents, not merely find a PDF.

↑ Back to Table of Contents

**The Operations Viewer --- Management / Management**

**Client role:** Management\
**Product role:** Management\
**Account to use:** \[GAP: named Management UAT account\]

**A day in my life**

I need a reliable view of the order lifecycle, exceptions, delayed work, and operational digest without performing day-to-day transactions. I judge whether the business can see what is pending, blocked, approved, fulfilled, and completed.

My trust depends on consistency across teams. If Sales sees one state and Logistics or Finance sees another, the workflow is not under control. Done means the lifecycle and digest are understandable, source records are identifiable, and my account cannot change actions outside its role.

**Rules I work by**

**Always:** Use the management view to validate visibility and handoff consistency.

**Never:** Perform operational changes unless explicitly granted by the final matrix.

**Before I submit/confirm:** Confirm the record references and time window being reviewed.

**Historical/reference checks:** Visible lifecycle states and scheduled digest entries.

**I can approve:** Only actions explicitly granted by the final matrix.

**I cannot approve:** Operational changes by default.

**I escalate to:** Relevant operational owner for record correction; UAT lead for cross-role inconsistency.

**Core behaviours I must prove**

Lifecycle visibility

Operational digest

Role-limited access

Cross-team status consistency

**What I want from the product**

"Show me the truth of operations without making me reconstruct it from separate messages."

**What makes me trust it**

The same order has one coherent state and identifiable blockers.

**What would make me stop trusting it**

Missing categories, duplicate digests, or inconsistent cross-role status.

**How I talk**

"Show today's operational digest."

"What is blocking this order?"

**Patience level and quirks**

I scan. The product must make priority and ownership clear without burying them in detail.

↑ Back to Table of Contents

**Maye, the Sign-off Coordinator --- Client UAT Coordinator / \[GAP\]**

**Client role:** Client UAT Coordinator\
**Product role:** \[GAP: product role, if any\]\
**Account to use:** \[GAP: sign-off process/account\]

**A day in my life**

I coordinate Mackessen's UAT evidence and approval. I need every required client role represented, each result tied to a mission and account, and blockers separated from product failures.

I do not accept a green status because a few happy paths worked. Missing role coverage, incomplete evidence, or sign-off by the wrong process keeps UAT open. Done means the agreed locked scope has traceable results, unresolved blockers are explicit, and the final decision follows the client approval route.

**Rules I work by**

**Always:** Check role coverage, evidence, blocked reasons, and scope boundaries before sign-off.

**Never:** Approve incomplete coverage or treat missing setup as a product defect.

**Before I submit/confirm:** Confirm each required role has executed its assigned cases and urgent failures are resolved or accepted.

**Historical/reference checks:** Linked mission/test IDs and previous fragile behaviours in Boss Fights.

**I can approve:** Client sign-off according to the approved process.

**I cannot approve:** Missing role matrix or evidence outside the approved route.

**I escalate to:** Internal UAT owner and client decision-makers for unresolved P1/P2 issues or blocked scope.

**Core behaviours I must prove**

Role coverage

Evidence completeness

Correct result classification

Final sign-off governance

**What I want from the product**

"Give me an honest, traceable view of what was tested, what passed, and what remains blocked."

**What makes me trust it**

Every result has an input, role, visible outcome, and evidence.

**What would make me stop trusting it**

Untraceable pass claims, skipped roles, or out-of-scope observations presented as defects.

**How I talk**

"Which locked items are still untested?"

"Show the evidence for this permission refusal."

**Patience level and quirks**

I will reject vague statements such as "seems okay." Evidence and role coverage matter.

↑ Back to Table of Contents

**Section 6 --- Trust Killers**

  -------------------------------------------------- ---------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Severity                                           Client-impact definition                                                                       Mackessen examples

  **P1 --- Business-stopping or trust-destroying**   Work cannot safely continue or the product may create real financial/operational harm.         Wrong customer/item silently submitted; duplicate CPO/SO; credit/payment block absent or late; blocked SO creates downstream documents; unauthorised financial access/approval; test data in production; chatbot mixes customers/orders; duplicate e-invoice; wrong production destination.

  **P2 --- Serious operational risk**                Work can continue only with significant intervention or traceability/control is compromised.   Wrong/stale invoice PDF; dropped/wrong credit-note batches; COA linked to wrong batch; partial quantity disappears; alert clears against wrong delivery; missing digest categories; missing approval/warning audit.

  **P3 --- Workaround exists but causes friction**   User can continue, but the product adds avoidable manual work or confusion.                    Missing clear clarification; verbose chatbot response; one notification channel missing; ambiguous address handling; scheduled summary late or duplicated without immediate harm.

  **P4 --- Cosmetic or minor usability issue**       Behaviour remains correct and understandable.                                                  Spacing, wording, or visual inconsistency that does not hide state, action, value, or evidence.
  -------------------------------------------------- ---------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

***Remember:** Classify by business consequence, not how dramatic the screen looks.*

**PART B --- CAMPAIGN AND MISSIONS**

**Section 7 --- Campaign coordination**

**Squad split**

**Order Capture Squad:** Sales User + Sales Manager --- M-01 to M-05, BF-01, BF-04.

**Controls and Finance Squad:** Credit Controller + Finance Manager + Admin --- M-06 to M-08, M-12 to M-15, M-17 to M-18, BF-03, BF-05.

**Fulfilment and Quality Squad:** Logistics + Supply Chain --- M-09 to M-11, M-16.

**Governance and Cutover Squad:** Management + Maye + product/client owners --- M-19, M-20, BF-06.

**Regression group:** Two Sales users + support observer --- BF-02.

**Permission pairs**

  ---------------------------------------------------------------------------------------- ----------------------------------------------- --------------------
  Should succeed                                                                           Should be refused                               Missions

  Sales Manager/Finance Manager/Credit Controller/Admin approves minimum-price exception   Sales User self-approval                        M-05

  Credit Controller/authorised role overrides credit                                       Sales User; Irene after role removal            M-06, BF-03

  Authorised payment override                                                              Sales User                                      M-07

  Approved invoice approver                                                                Unauthorised account                            M-12

  Sales User/Manager edits allowed date                                                    Unauthorised role                               M-13

  Finance/Admin issues CN after confirmation                                               Sales User; Finance/Admin before confirmation   M-14

  Finance/Admin creates item                                                               Sales/Logistics                                 M-15

  Finance sees permitted finance data                                                      Sales sees restricted finance data              M-18
  ---------------------------------------------------------------------------------------- ----------------------------------------------- --------------------

**Remote testing support**

Ask in \[NEEDS INPUT: SUPPORT_CHANNEL\]. Include mission ID, persona/product role, missing prerequisite or failed action, what you searched or attempted, visible record ID, timestamp, and screenshot. Use \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\] for screen-sharing support.

While waiting, mark the correct blocked reason and continue with another mission that does not share the same dependency.

**Timebox protection**

***Five-minute blocker rule:** If setup, access, input, or environment issues prevent progress for more than five minutes, record the blocker and continue with another mission.*

**Record reservation**

Use a shared reservation sheet with: customer, PO number, CPO/SO/DO/invoice, item code, batch, tester, mission, reservation time, and cleanup status. Never use a record reserved by another tester. Coordinate concurrent cases explicitly rather than accidentally colliding.

**Section 8 --- Mission overview**

  --------- ------------------------------------------------ -------------------------------------------------------------------- -------------------------------------------------- ------------------------------ ------------ -------------------------------- ---------------------------------------------------------------------------------------------
  Mission   Title                                            Client role                                                          Product role                                       Type                           Difficulty   Time                             Main input

  M-01      Carry One Order Across the Relay                 Sales → Logistics → Finance/Admin → Management                       Role-matched accounts                              Core / Handoff                 ★★★          \~25 min                         A complete reserved order using a valid customer, valid item, quantity, price, PO numbe\...

  M-02      Use the Right Front Door                         Sales / any operational user                                         Linked and unlinked Telegram accounts              Core / Permission / Edge       ★★           \~15 min                         A normal order/status query, a simple routine query, and an ambiguous query involving t\...

  M-03      Read the PO Without Guessing                     Sales User                                                           Sales User via Telegram                            Core / Edge / Recovery         ★★★          \~30 min                         Complete text order, clear photo, at least 10 representative PO PDFs, blurred/cropped i\...

  M-04      Keep One Source of Truth                         Sales / Admin                                                        Sales User and Admin                               Core / Recovery                ★★★          \~25 min                         Complete customer, customer missing TIN/email, customer with multiple addresses, MK-221\...

  M-05      Price It, Then Ask the Right Person              Sales User + Sales Manager/Finance Manager/Credit Controller/Admin   Sales User + authorised approver                   Core / Permission              ★★★          \~25 min                         One normal priced line, one missing-price line, and one below-minimum exception.

  M-06      Hold the Credit Line                             Sales User + Credit Controller/Finance Manager/Admin                 Sales User + authorised override roles             Core / Permission              ★★★          \~25 min                         A documented over-limit scenario and role-separated accounts.

  M-07      Challenge the Payment Clock                      Sales + Finance/Credit Control                                       Sales User + authorised override role              Core / Permission / Edge       ★★★          \~30 min                         COD clear/unpaid, 30-day day 30/31/61, and 60-day day 60/61/91 scenarios.

  M-08      Acknowledge the Warning, Keep the Order Moving   Sales User                                                           Sales User                                         Core / Edge                    ★★           \~18 min                         A normal order for each reserved low/zero-stock item.

  M-09      Ring the Stock Bell at Nine                      Admin + Irene/Logistics                                              Admin + Credit Controller/Logistics                Core / Handoff / Edge          ★★★          \~20 + scheduled check min       A valid threshold, then blank, negative, and non-numeric threshold attempts.

  M-10      Do Not Lose the Last 400 kg                      Logistics / Irene                                                    Logistics + Credit Controller/recipient role       Core / Edge / Permission       ★★★          \~25 + scheduled follow-up min   Controlled delayed-delivery and partial-delivery records.

  M-11      Open the Nine O'Clock Operations Pulse           Management / relevant team                                           Management or permitted operational role           Core / Handoff                 ★★           \~15 + scheduled check min       A seeded dataset containing one identifiable record for each required category.

  M-12      One Original Invoice, One Approval               Finance/Admin + authorised invoice approver                          Finance/Admin + approved single-level approver     Core / Permission / Recovery   ★★★          \~22 min                         A documented invoice number, customer, lines, tax, total, original PDF, and unapproved \...

  M-13      Date It Correctly, Charge It as a SKU            Sales User / Sales Manager                                           Sales User / Sales Manager                         Core / Permission / Edge       ★★           \~20 min                         A supported document, valid/blank/malformed/impossible dates, an active surcharge SKU, \...

  M-14      Return Goods Without Breaking the Batch Trail    Sales + Warehouse/Logistics + Finance/Admin                          Sales User + confirmation role + Finance/Admin     Core / Handoff / Permission    ★★★          \~28 min                         An invoice split across known batches and a controlled physical-return scenario.

  M-15      Guard the Product Master                         Finance/Admin + Sales/Logistics                                      Admin/Finance + unauthorised roles                 Permission / Edge              ★★           \~15 min                         A reserved UAT code, a known duplicate code, and documented mandatory fields.

  M-16      Attach the Certificate to the Right Batch        Supply Chain / Quality                                               \[GAP: mapped COA-capable role\]                   Core / Edge                    ★★           \~18 min                         An approved COA pack with valid and negative variants.

  M-17      Respect the Tax Boundary                         Sales / Finance                                                      Sales/Finance role                                 Core / Boundary / Edge         ★★★          \~22 min                         A prepared exempt batch, non-exempt/mismatch batch, and already-processed SQL e-invoice.

  M-18      Ask Finance, Reveal Only What the Role Allows    Finance + Sales                                                      Finance chatbot with Finance and Sales accounts    Core / Permission              ★★           \~15 min                         A routine permitted query such as unpaid invoices or pending approvals for a reserved c\...

  M-19      Earn the Sign-off                                Maye + all required client roles                                     Role accounts + sign-off process                   Handoff / Governance           ★★           \~20 min                         Completed mission results and the approved role coverage list.

  M-20      Cross the Live-SQL Bridge Safely                 Admin + client PIC                                                   Admin / production environment                     Handoff / Recovery             ★★★          \~30 min                         Three live customers, three live items, three live invoices, and one controlled product\...

  BF-01     The Duplicate PO Race                            Two Sales users                                                      Two Sales User accounts                            Regression                     ★★★          \~15 min                         PO-TEST-001 for both customers; PO-TEST-002 already active for Customer A; PO-TEST-003 \...

  BF-02     The Telegram Marathon                            Cross-functional UAT team                                            Linked Telegram accounts and relevant MAIA roles   Regression                     ★★★          \~30 min                         Text orders, clear photos, clear PDFs, document requests, one corrupt/unsupported file,\...

  BF-03     Catch the Credit Block at the Right Stage        Sales and Finance Manager                                            Sales User and authorized override account         Regression                     ★★           \~10 min                         One reserved over-limit customer and a new order that would otherwise be valid.

  BF-04     The Right Code with the Wrong Description        Sales                                                                Sales User                                         Regression                     ★★           \~10 min                         The verified roasted-chicken-seasoning SKU and its expected visible description.

  BF-05     Reject the Look-alike Invoice                    Sales / Finance                                                      Invoice viewer/download permission                 Regression                     ★★           \~10 min                         The prepared invoice number plus the approved visible customer, lines, tax, and total r\...

  BF-06     No Test Ghosts in Production                     Admin + client PIC                                                   Production-authorized admin/read account           Regression                     ★★           \~10 min                         One known test-only customer or item identifier that does not exist in live SQL.
  --------- ------------------------------------------------ -------------------------------------------------------------------- -------------------------------------------------- ------------------------------ ------------ -------------------------------- ---------------------------------------------------------------------------------------------

**Section 9 --- Mission Cards**

**M-01 --- Carry One Order Across the Relay · ★★★ · \~25 min**

**Client role:** Sales → Logistics → Finance/Admin → Management\
**Product role:** Role-matched accounts\
**Covers:** HP-001, UP-001, UP-002, HP-037, UP-074, UP-075 · LOCK-01, LOCK-36\
**Mission type:** Core / Handoff

**Situation**

A normal customer order must travel from capture to fulfilment and financial visibility. **Every handoff must preserve the same customer, items, quantities, statuses, and document links.** A malformed or blocked record must stop before it contaminates the next stage.

***Why this matters:** Mackessen needs one controlled operating flow, not disconnected screens that allow unsafe downstream work.*

**Before you start**

**Precondition:** Role-separated accounts are active and one complete reserved customer/item order can be created safely.

**Input needed:** A complete reserved order using a valid customer, valid item, quantity, price, PO number, and delivery date; plus one deliberately incomplete record and one unsupported document request.

**How to obtain it:** Use a reserved complete customer and MK-221 where suitable. Sales may create the normal order. Product team seeds any state that cannot be safely reached.

**A suitable input must:**

uses a reserved customer and unique PO number

contains all required customer/item/date information

can be followed by each role without touching production data

**You may use instead:** Another reserved complete order that preserves the same workflow and role handoffs.

**Record what you use:** Customer, PO/CPO/SO references, document IDs, timestamps, and role used at each handoff.

**Rules for this persona**

**Always:** Act only on the current visible workflow state.

**Never:** Create a DO from a draft, blocked, or unapproved SO.

**Before confirming/submitting:** Verify customer, item, quantity, date, price, and status.

**Escalate when:** Required data is absent or the next role cannot see the expected record.

**Your mission**

Complete one valid lifecycle and prove incomplete, wrong-state, and unsupported-document attempts fail safely.

**Say it your way**

"Create this customer order and show me what needs attention."

"Open the next document for this order."

"Generate a payment voucher for this order."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

The valid order moves through the visible lifecycle in the correct sequence.

Each role sees the expected record and only its permitted actions.

A missing customer/item stays unsubmitted and no value is invented.

A DO cannot be created before the SO is valid.

Required document data is requested before final generation.

An unsupported document is identified as unsupported, not disguised as a supported one.

**If the input or setup is missing**

**First:** Find another reserved complete record through the product.

**Alternative:** Ask the product team to seed the exact blocked state.

**Ask the product team when:** A role, state, or document cannot be created safely.

**Do not:** Alter real customer balances, stock, or production documents.

**After five minutes:** Mark the correct blocked reason and continue.

**If the product fails mid-way**

Completed upstream work should remain saved as a draft or visible record. The product must identify the blocked stage and must never create a downstream document from an invalid state.

**Try to break it**

Remove one required field before final document generation.

Try to act as Logistics while the SO is still blocked.

Ask for an unscoped payment voucher or custom return note.

**Evidence**

Input used and reservation entry

CPO/SO/DO/invoice or receipt references

Screenshots of state transitions and refusal

Role/account and timestamps

↑ Back to Table of Contents

**M-02 --- Use the Right Front Door · ★★ · \~15 min**

**Client role:** Sales / any operational user\
**Product role:** Linked and unlinked Telegram accounts\
**Covers:** HP-002, UP-003, UP-004, HP-033, UP-066, UP-067 · LOCK-02, LOCK-32\
**Mission type:** Core / Permission / Edge

**Situation**

Telegram is the current go-live chatbot channel. A linked user needs a short, useful answer, while an unlinked user must receive a safe refusal. **WhatsApp being unavailable is not a go-live failure.**

***Why this matters:** The channel must be usable and secure without creating false expectations about WhatsApp.*

**Before you start**

**Precondition:** One linked operational Telegram account and one controlled unlinked identity are available.

**Input needed:** A normal order/status query, a simple routine query, and an ambiguous query involving two customers/orders or a non-unique item.

**How to obtain it:** Use grounded UAT wording. The unlinked identity must be supplied by the product team.

**A suitable input must:**

does not expose unrelated customer data

has an obvious expected action or clarification

can be repeated without accidental duplicate creation

**You may use instead:** Another simple operational query with the same permission and brevity objective.

**Record what you use:** Telegram identity, message, response, linked MAIA record if created, and timing observation.

**Rules for this persona**

**Always:** Use Telegram for go-live chatbot tests.

**Never:** Treat WhatsApp unavailability as a defect in current scope.

**Before confirming/submitting:** Check the returned customer/order context.

**Escalate when:** A linked account is refused or an unlinked account sees protected data.

**Your mission**

Prove the correct user can work through Telegram, the wrong user is refused, and routine answers stay short and direct.

**Say it your way**

"Show unpaid invoices for this test customer."

"Create an order for this customer."

"Show the order for Customer A and Customer B."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Linked account receives a usable result or opens the correct draft.

No WhatsApp step is required.

Unlinked account creates no order and sees no protected data.

Routine response leads with result/status and next action.

Ambiguous query triggers one short clarification rather than a guess.

A wall of text that hides the action is recorded as a failure.

**If the input or setup is missing**

**First:** Confirm the Telegram identity and retry once.

**Alternative:** Continue with unrelated web missions if Telegram is down.

**Ask the product team when:** Account linking or bot access is missing.

**Do not:** Share credentials or use another tester's identity.

**After five minutes:** Mark Blocked --- Access or Environment and continue.

**If the product fails mid-way**

No partial order should be submitted from an unauthorised or ambiguous conversation. A safe draft may remain only when the user is authorised and the context is clear.

**Try to break it**

Use an unlinked identity.

Mention two customers in one query.

Ask a routine question and assess whether the answer is unnecessarily long.

**Evidence**

Telegram message and response

Linked/unlinked account identity

Created record reference, if any

Screenshot of refusal or clarification

↑ Back to Table of Contents

**M-03 --- Read the PO Without Guessing · ★★★ · \~30 min**

**Client role:** Sales User\
**Product role:** Sales User via Telegram\
**Covers:** HP-003, HP-004, HP-005, UP-005, UP-006, UP-007 · LOCK-03\
**Mission type:** Core / Edge / Recovery

**Situation**

Real orders arrive as text, photos, and PDFs. MAIA must identify the customer, pull customer details from the authoritative source, extract item lines accurately, and stop for review when the document is ambiguous or unreadable. **The item-line target is at least 90% across the agreed UAT set.**

***Why this matters:** Bad automation creates more risk than manual entry if it silently posts the wrong customer or item.*

**Before you start**

**Precondition:** Approved representative PO pack, expected answers, linked Sales account, and a corrected-learning example are ready.

**Input needed:** Complete text order, clear photo, at least 10 representative PO PDFs, blurred/cropped input, ambiguous "roasted chicken seasoning" message, and one previously corrected example.

**How to obtain it:** Use only the approved input folder and expected-answer sheet. Do not substitute unapproved real customer documents.

**A suitable input must:**

expected customer and item lines are documented

files are safe for UAT and assigned to this tester

the pack includes clear, ambiguous, and unreadable examples

**You may use instead:** A client-approved equivalent pack with the same format and difficulty coverage.

**Record what you use:** File name, expected lines, extracted lines, corrections, final record ID, and accuracy calculation.

**Rules for this persona**

**Always:** Review customer, item, quantity, address, and date before submission.

**Never:** Accept a silently guessed item when the phrase is ambiguous.

**Before confirming/submitting:** Correct low-confidence or wrong lines.

**Escalate when:** The file is unreadable or the authoritative item/customer cannot be found.

**Your mission**

Process all three input types, calculate extraction accuracy, and prove safe clarification, rejection, and correction-learning.

**Say it your way**

"Create an order from this PO and show me the extracted fields."

"Please order 25 kg of roasted chicken seasoning."

"This item was corrected before---use the approved mapping."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Customer is correct for the agreed test set.

Contact details and address auto-fill visibly.

Item-line accuracy across the pack is at least 90%.

Unreadable fields are identified and no submitted SO is created.

Ambiguous item is clarified or held for review, not silently guessed.

The known corrected error does not recur after the agreed learning interval.

**If the input or setup is missing**

**First:** Retry with a clear approved copy or correct within the normal review flow.

**Alternative:** Use an equivalent approved document with expected answers.

**Ask the product team when:** Expected answers, learning interval, or mapping is missing.

**Do not:** Invent customer/item codes or submit a low-confidence order to force a pass.

**After five minutes:** Mark Blocked --- Test Data or Configuration and continue.

**If the product fails mid-way**

The product should preserve the reviewable draft and identify the exact unreadable or ambiguous fields. It must never submit a guessed customer/item or lose reviewed lines without warning.

**Try to break it**

Crop the PO so the PO number is missing.

Use the ambiguous seasoning phrase without a code.

Repeat the previously corrected example.

**Evidence**

Input files/messages

Expected-versus-extracted line sheet

Accuracy calculation

Clarification, correction, and final draft screenshots

↑ Back to Table of Contents

**M-04 --- Keep One Source of Truth · ★★★ · \~25 min**

**Client role:** Sales / Admin\
**Product role:** Sales User and Admin\
**Covers:** HP-007, UP-010, UP-011, HP-020, UP-039, UP-040, HP-021, UP-042 · LOCK-05, LOCK-18, LOCK-19\
**Mission type:** Core / Recovery

**Situation**

Customer and item data must stay aligned with SQL-backed authoritative values without asking black-box testers to inspect SQL directly. Missing fields, address choices, and source unavailability must be visible. **A stale local copy must not become production truth.**

***Why this matters:** Mackessen's trust depends on avoiding re-keying and conflicting customer or product data.*

**Before you start**

**Precondition:** Product/client team provides visible reference values or a controlled before/after change for designated UAT records.

**Input needed:** Complete customer, customer missing TIN/email, customer with multiple addresses, MK-221, a changed item description, and a controlled source-availability failure.

**How to obtain it:** Use reserved records plus product-team visible references. Testers verify user-facing behaviour only.

**A suitable input must:**

record is designated for UAT

expected visible fields are supplied or discoverable in the product

no direct SQL access is required

**You may use instead:** Equivalent reserved records with the same complete, missing, and multiple-address conditions.

**Record what you use:** Visible values before/after, selected address, error message, item code/description, and record IDs.

**Rules for this persona**

**Always:** Use the product's visible authoritative values.

**Never:** Invent missing TIN/email, silently pick an address, or keep a hidden conflicting master.

**Before confirming/submitting:** Compare the visible record with the approved reference.

**Escalate when:** Source data is unavailable or the reference is disputed.

**Your mission**

Prove complete and changed data appears correctly, missing/ambiguous data is surfaced, and source failure stops unsafe submission.

**Say it your way**

"Open this customer and show all available delivery addresses."

"Find MK-221 and show its description."

"Refresh this record after the approved source change."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Complete customer shows name, address, contact, email, and TIN.

Missing field is visibly flagged and not invented.

Multiple addresses require explicit selection or confirmation.

MK-221 displays "Food Grade Phosphate".

Approved changed description appears in new views/documents.

Source failure produces a clear error and prevents submission with unknown values.

**If the input or setup is missing**

**First:** Use another reserved reference record.

**Alternative:** Request a product-team before/after visible reference.

**Ask the product team when:** No approved reference or source-failure simulation exists.

**Do not:** Inspect SQL directly or overwrite authoritative data.

**After five minutes:** Mark Blocked --- Dependency or Test Data and continue.

**If the product fails mid-way**

A draft may remain available, but the product must identify unavailable authoritative fields and prevent final submission. It must never fill the gap with stale or guessed data.

**Try to break it**

Use a customer missing TIN.

Choose a customer with two valid addresses.

Interrupt the source connection in a controlled test.

**Evidence**

Approved visible reference

Before/after screenshots

Selected address and item description

Availability error and blocked submission

↑ Back to Table of Contents

**M-05 --- Price It, Then Ask the Right Person · ★★★ · \~25 min**

**Client role:** Sales User + Sales Manager/Finance Manager/Credit Controller/Admin\
**Product role:** Sales User + authorised approver\
**Covers:** HP-008, UP-012, UP-013, HP-009, UP-014, UP-015 · LOCK-06, LOCK-07\
**Mission type:** Core / Permission

**Situation**

A Sales User needs the customer-specific price automatically. Missing pricing must be visible, and a below-minimum price must wait for an authorised approval. **The order must not continue just because the user wants to finish quickly.**

***Why this matters:** Wrong or unapproved pricing directly affects revenue and customer trust.*

**Before you start**

**Precondition:** Known priced and unpriced pairs, minimum-price threshold, and separate Sales/approver accounts are configured.

**Input needed:** One normal priced line, one missing-price line, and one below-minimum exception.

**How to obtain it:** Use product/client-team seeded customer/item pairs with documented visible expected prices.

**A suitable input must:**

expected customer price is documented

minimum threshold and exception price are known

approver and non-approver accounts are separate

**You may use instead:** Equivalent seeded customer/item pairs.

**Record what you use:** Customer/item, expected price, displayed price, exception amount, approver/refusal, and audit entry.

**Rules for this persona**

**Always:** Use the current customer-specific price and inspect missing-price flags.

**Never:** Use zero, another customer's price, or self-approve as Sales User.

**Before confirming/submitting:** Resolve missing price or obtain authorised approval.

**Escalate when:** The visible price conflicts with the approved reference.

**Your mission**

Prove correct auto-fill, safe missing-price handling, authorised exception approval, and unauthorised refusal.

**Say it your way**

"Add this item for the prepared customer."

"Submit this below-minimum price for approval."

"Approve this exception for the referenced order."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Known customer price auto-fills exactly.

Missing price is flagged and is not silently zero or guessed.

A fresh order uses the current price rather than stale cache.

Below-minimum order remains held until approval.

Authorised role approves and audit records approver/time/order.

Sales User cannot self-approve or create downstream documents first.

**If the input or setup is missing**

**First:** Confirm the reserved customer/item pair.

**Alternative:** Use another product-team-approved pair.

**Ask the product team when:** Expected price, minimum threshold, or role assignment is missing.

**Do not:** Enter a convenient value unless the approved workflow explicitly permits it.

**After five minutes:** Mark Blocked --- Test Data or Configuration and continue.

**If the product fails mid-way**

The order should remain held with the exception visible. The product must not auto-approve, discard the request, or continue with a zero/guessed price.

**Try to break it**

Use an unpriced pair.

Attempt approval from Sales User.

Change the source price and create a fresh order.

**Evidence**

Approved price references

Order/line screenshot

Approval/refusal and audit entry

No-downstream-document evidence

↑ Back to Table of Contents

**M-06 --- Hold the Credit Line · ★★★ · \~25 min**

**Client role:** Sales User + Credit Controller/Finance Manager/Admin\
**Product role:** Sales User + authorised override roles\
**Covers:** HP-010, UP-016, UP-017, HP-011, UP-019, UP-020 · LOCK-08, LOCK-09\
**Mission type:** Core / Permission

**Situation**

An over-limit customer tries to place a new Sales Order. The product must block at SO submission, prevent downstream documents, and allow only a configured role to release it. **Irene's permission must come from the Credit Controller role, not her name.**

***Why this matters:** A late or weak credit control can expose Mackessen to avoidable financial risk.*

**Before you start**

**Precondition:** Seeded over-limit customer, blocked SO, authorised Irene/Credit Controller account, unauthorised Sales account, and controlled role-removal support.

**Input needed:** A documented over-limit scenario and role-separated accounts.

**How to obtain it:** Product team supplies the customer/exposure and manages temporary role removal/restoration.

**A suitable input must:**

credit breach is reproducible

SO is not already overridden

role changes can be refreshed in a new session

**You may use instead:** Another seeded over-limit customer with the same role conditions.

**Record what you use:** Customer, SO, block message, block stage, override reason, role/account, and audit entry.

**Rules for this persona**

**Always:** Verify the block appears at SO submission.

**Never:** Create DO/invoice from a blocked SO or let identity bypass role configuration.

**Before confirming/submitting:** Check customer and order reference.

**Escalate when:** Exposure or role state differs from the prepared scenario.

**Your mission**

Prove early block, downstream integrity, authorised override, unauthorised refusal, and role-based Irene behaviour.

**Say it your way**

"Submit this Sales Order."

"Override the credit block for this order with this reason."

"Try the same override after the Credit Controller role is removed."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

SO blocks immediately at submission.

No DO or invoice can be created before approved override.

Authorised role releases the correct SO and logs approver/time/reason.

Sales User is refused.

Irene succeeds only while the authorised role is assigned.

After role removal and fresh login, bypass is refused.

**If the input or setup is missing**

**First:** Confirm the prepared customer and current role assignment.

**Alternative:** Use another seeded over-limit record.

**Ask the product team when:** Exposure or role removal cannot be controlled safely.

**Do not:** Alter a real customer balance or reuse an old override.

**After five minutes:** Mark Blocked --- Test Data, Access, or Configuration and continue.

**If the product fails mid-way**

The blocked SO should remain visible and unchanged. The product must explain the credit requirement and must never create downstream records while approval is absent.

**Try to break it**

Try to create a DO while blocked.

Attempt override as Sales User.

Remove Irene's role, sign in again, and retry.

**Evidence**

Block at SO stage

No downstream document

Authorised audit entry

Unauthorised and role-removed refusals

↑ Back to Table of Contents

**M-07 --- Challenge the Payment Clock · ★★★ · \~30 min**

**Client role:** Sales + Finance/Credit Control\
**Product role:** Sales User + authorised override role\
**Covers:** HP-012, UP-021, UP-022, UP-023, UP-024 · LOCK-10\
**Mission type:** Core / Permission / Edge

**Situation**

Different customers follow COD, 30-day, or 60-day payment rules. The product must distinguish warning dates from block dates and apply the result customer-wide. **Exact day boundaries matter.**

***Why this matters:** Premature blocks disrupt sales; late blocks increase financial exposure.*

**Before you start**

**Precondition:** Product team seeds the required invoice ages and visible expected conditions.

**Input needed:** COD clear/unpaid, 30-day day 30/31/61, and 60-day day 60/61/91 scenarios.

**How to obtain it:** Use controlled seeded history; there is no safe tester-created alternative.

**A suitable input must:**

invoice age and term are known

customer is reserved for UAT

authorised and unauthorised roles are available

**You may use instead:** Equivalent seeded boundary records.

**Record what you use:** Customer, term, visible age/date, warning/block, reminder, override/refusal, and SO reference.

**Rules for this persona**

**Always:** Judge the rule from the prepared term and date.

**Never:** Override from Sales or treat an alert as a block before the locked threshold.

**Before confirming/submitting:** Verify the exact prepared day.

**Escalate when:** Invoice age or term is not visible/confirmed.

**Your mission**

Prove normal, alert, block, reminder, authorised override, and unauthorised refusal across all term types.

**Say it your way**

"Create a new order for this COD customer."

"Show the payment-term status for this 30-day customer."

"Override this payment block with the approved reason."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

COD clear remains orderable; any unpaid COD invoice blocks.

30-day customer alerts at day 31 and blocks at day 61.

60-day customer alerts at day 61 and blocks at day 91.

No premature block occurs within the valid term.

Reminder recurrence follows the configured 14-day cadence.

Unauthorised override is refused; authorised override is logged.

**If the input or setup is missing**

**First:** Verify the seeded record label and visible date/term.

**Alternative:** Use another seeded record at the same boundary.

**Ask the product team when:** Exact ageing history or reminder run is unavailable.

**Do not:** Edit real invoice dates or infer age from memory.

**After five minutes:** Mark Blocked --- Test Data or Dependency and continue.

**If the product fails mid-way**

The order should remain held only at the correct boundary. The product must preserve the order and state the payment issue without changing invoice history.

**Try to break it**

Test one day before and at each threshold.

Attempt override as Sales User.

Check customer-wide behaviour with another new SO.

**Evidence**

Prepared boundary reference

Warnings/blocks by day

Reminder evidence

Override/refusal audit

↑ Back to Table of Contents

**M-08 --- Acknowledge the Warning, Keep the Order Moving · ★★ · \~18 min**

**Client role:** Sales User\
**Product role:** Sales User\
**Covers:** HP-013, UP-025, UP-026, HP-014, UP-027, UP-028 · LOCK-11, LOCK-12\
**Mission type:** Core / Edge

**Situation**

Low or zero stock may warn the user, but the order remains valid because loose quantity may still exist. The user must acknowledge the warning and the activity log must identify what happened. **Stock quantity alone must never hard-block submission.**

***Why this matters:** Mackessen needs visibility without losing legitimate orders to an overly rigid stock rule.*

**Before you start**

**Precondition:** One low-stock item and one zero-stock sellable item are prepared; warning logging is enabled.

**Input needed:** A normal order for each reserved low/zero-stock item.

**How to obtain it:** Use reserved items. Sales creates the order normally.

**A suitable input must:**

item is active and sellable

visible stock state is known

no separate credit/payment block interferes

**You may use instead:** Another reserved low/zero-stock item.

**Record what you use:** Item, stock state, warning text, acknowledgement, order ID, and activity-log fields.

**Rules for this persona**

**Always:** Read and acknowledge non-blocking warnings.

**Never:** Treat low/zero stock as an automatic business block.

**Before confirming/submitting:** Confirm the item and quantity are still intended.

**Escalate when:** Submission is blocked solely by stock quantity.

**Your mission**

Submit low/zero-stock orders after acknowledgement and prove the warning audit is complete.

**Say it your way**

"Add this zero-stock item and continue after the warning."

"Show the activity for this warning."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Warning appears when configured.

User must acknowledge before continuing.

After acknowledgement, the order can submit.

Exactly zero stock does not hard-block.

Below-threshold positive stock does not hard-block.

Activity log shows user, timestamp, warning type, and correct order reference.

**If the input or setup is missing**

**First:** Use another prepared low/zero-stock item.

**Alternative:** Admin may adjust a reversible UAT threshold if authorised.

**Ask the product team when:** Warning or activity log is not configured.

**Do not:** Alter real stock quantities or bypass acknowledgement.

**After five minutes:** Mark Blocked --- Test Data or Configuration and continue.

**If the product fails mid-way**

The order should remain available with the warning unresolved. The product must not lose the order, submit without acknowledgement, or turn the warning into a permanent stock block.

**Try to break it**

Try to navigate away without acknowledging.

Use exactly zero stock.

Inspect the log for the wrong order or missing fields.

**Evidence**

Stock state reference

Warning and acknowledgement

Submitted order ID

Complete activity-log screenshot

↑ Back to Table of Contents

**M-09 --- Ring the Stock Bell at Nine · ★★★ · \~20 + scheduled check min**

**Client role:** Admin + Irene/Logistics\
**Product role:** Admin + Credit Controller/Logistics\
**Covers:** HP-015, UP-029, UP-030, HP-016, UP-031, UP-032 · LOCK-13, LOCK-14\
**Mission type:** Core / Handoff / Edge

**Situation**

An Admin sets a low-stock threshold, and Irene/Logistics must receive website and Telegram alerts. At **9:00 AM**, the stock summary must separate low-stock from out-of-stock items and use the correct item details. Invalid thresholds must not damage the last valid setup.

***Why this matters:** The team needs proactive stock visibility without manually searching item by item.*

**Before you start**

**Precondition:** Scheduled run date is reserved, recipients are confirmed, and two UAT items have known code/description/quantity.

**Input needed:** A valid threshold, then blank, negative, and non-numeric threshold attempts.

**How to obtain it:** Admin configures a reversible UAT threshold; product team controls quantities and schedule.

**A suitable input must:**

items are reserved and identifiable

recipient list is approved

test occurs before and at the scheduled run

**You may use instead:** Equivalent reserved items and a separate scheduled run.

**Record what you use:** Threshold values, item values, recipient/channel, alert timestamps, and summary content.

**Rules for this persona**

**Always:** Restore the approved threshold after testing.

**Never:** Accept invalid thresholds or notify the wrong recipient.

**Before confirming/submitting:** Check item and recipient.

**Escalate when:** Scheduled timing or recipient mapping is unknown.

**Your mission**

Prove threshold validation, dual-channel alerts, and one accurate 9:00 AM stock summary.

**Say it your way**

"Set the low-stock threshold for this UAT item to 50."

"Show today's stock summary."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Valid threshold saves and remains active.

Blank, negative, and non-numeric values are rejected; last valid value remains.

Low/out-of-stock alerts reach website and Telegram.

Alerts reach the approved recipient.

At 9:00 AM one summary appears with separate categories.

Code, description, and quantity match the approved visible reference.

**If the input or setup is missing**

**First:** Confirm the scheduled run date and recipient accounts.

**Alternative:** Reschedule to the next controlled 9:00 AM run.

**Ask the product team when:** Job, quantity, or recipients cannot be controlled.

**Do not:** Claim a manual refresh proves scheduled delivery.

**After five minutes:** Mark Blocked --- Configuration or Dependency and continue elsewhere.

**If the product fails mid-way**

A failed threshold save must leave the last valid value active. If one channel fails, the other result should remain visible, but dual-channel delivery still fails.

**Try to break it**

Enter a negative threshold.

Cross the threshold and check both channels.

Look for duplicate or unexplained late summaries.

**Evidence**

Threshold before/after

Website and Telegram alerts

9:00 AM timestamp

Summary-to-reference comparison

↑ Back to Table of Contents

**M-10 --- Do Not Lose the Last 400 kg · ★★★ · \~25 + scheduled follow-up min**

**Client role:** Logistics / Irene\
**Product role:** Logistics + Credit Controller/recipient role\
**Covers:** HP-017, UP-033, UP-034, HP-019, UP-037, UP-038 · LOCK-15, LOCK-17\
**Mission type:** Core / Edge / Permission

**Situation**

One delivery is late and another is only partly fulfilled. The product must wait until more than three full days before raising a delayed alert, keep the remaining quantity open, and remind Irene daily until valid resolution. **A partial delivery must not silently close the order.**

***Why this matters:** Lost outstanding quantities and wrong delay alerts lead directly to missed customer commitments.*

**Before you start**

**Precondition:** Seeded records at exactly three days and over three days; a 1,000 kg SO with first 600 kg delivery; authorised and unauthorised closure accounts.

**Input needed:** Controlled delayed-delivery and partial-delivery records.

**How to obtain it:** Product team prepares dated states; Logistics performs visible updates.

**A suitable input must:**

dates and quantities are documented

records are reserved

no unrelated order shares the same reference

**You may use instead:** Equivalent seeded records.

**Record what you use:** SO/DO, dates, delivered and remaining quantities, alert/reminder timestamps, resolution, and refusal.

**Rules for this persona**

**Always:** Keep outstanding quantity visible.

**Never:** Alert at exactly three days, clear the wrong order, or let an unauthorised user close the balance.

**Before confirming/submitting:** Verify order, date, delivered quantity, and remaining quantity.

**Escalate when:** The seeded clock or closure role is unclear.

**Your mission**

Prove correct delay threshold/clearance and the complete partial-delivery reminder lifecycle.

**Say it your way**

"Record 600 kg delivered for this 1,000 kg order."

"Show deliveries delayed more than three days."

"Close the remaining quantity."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

No delayed alert appears at exactly three full days.

Alert appears after more than three full days on required channels.

Alert clears only for completion or valid reschedule of the same delivery.

After 600 kg delivery, 400 kg remains open.

Irene receives the daily reminder until final delivery or authorised closure.

Unauthorised closure is refused and reminder continues.

**If the input or setup is missing**

**First:** Verify prepared dates/quantities and reserved record.

**Alternative:** Use another seeded record with the same boundary.

**Ask the product team when:** Time progression or reminder schedule cannot be controlled.

**Do not:** Change real delivery dates or close another tester's record.

**After five minutes:** Mark Blocked --- Test Data or Dependency and continue.

**If the product fails mid-way**

The remaining quantity and delivery state must remain saved. The product must not close early, clear the wrong alert, or stop reminders without valid resolution.

**Try to break it**

Check just before the fourth day.

Perform an invalid reschedule.

Try closing the partial balance as an unauthorised role.

**Evidence**

Date/quantity reference

Alert before/after threshold

Open 400 kg and reminder

Final resolution or refusal

↑ Back to Table of Contents

**M-11 --- Open the Nine O'Clock Operations Pulse · ★★ · \~15 + scheduled check min**

**Client role:** Management / relevant team\
**Product role:** Management or permitted operational role\
**Covers:** HP-018, UP-035, UP-036 · LOCK-16\
**Mission type:** Core / Handoff

**Situation**

At **9:00 AM**, the team needs one operational digest covering unpaid invoices, inactive customers, unclosed SOs, reorder reminders, and partial deliveries. Current generic logic is sufficient; individual personalisation is not required. Missing categories or duplicates make the digest unreliable.

***Why this matters:** The digest is meant to focus the day's work without manual cross-checking across separate queues.*

**Before you start**

**Precondition:** All five qualifying record types are prepared and the scheduled run is active.

**Input needed:** A seeded dataset containing one identifiable record for each required category.

**How to obtain it:** Product team seeds the records and publishes their visible identifiers.

**A suitable input must:**

one identifiable record exists for each category

records remain active through the run

recipient account is confirmed

**You may use instead:** Another scheduled date with a complete five-category dataset.

**Record what you use:** Digest timestamp, recipient, category entries, source record IDs, and duplicate/missing result.

**Rules for this persona**

**Always:** Compare all five categories with the prepared record list.

**Never:** Fail the test because the digest is generic rather than personalised.

**Before confirming/submitting:** Verify the run date and recipient.

**Escalate when:** Inactive/reorder selection rules are undocumented.

**Your mission**

Receive one timely digest with all required categories and traceable records.

**Say it your way**

"Show today's operational digest."

"Open the unclosed Sales Order from the digest."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Digest is available once at the scheduled 9:00 AM run.

All five categories appear.

Each prepared qualifying record is present and identifiable.

No unexplained duplicate digest appears.

Links/actions point to the correct records.

Lack of individual tailoring is not treated as a defect.

**If the input or setup is missing**

**First:** Confirm the scheduled run and prepared record list.

**Alternative:** Reschedule to the next controlled 9:00 AM run.

**Ask the product team when:** Category-selection configuration is unknown.

**Do not:** Use a manually assembled report as proof of scheduled digest.

**After five minutes:** Mark Blocked --- Dependency and continue.

**If the product fails mid-way**

If one category fails, the remaining digest should stay available for evidence. The product must not replace missing categories with unrelated records.

**Try to break it**

Remove one qualifying record and confirm selection changes only as configured.

Check for duplicate runs.

**Evidence**

Prepared five-record list

Digest screenshot and timestamp

Category-to-record comparison

Duplicate/missing observations

↑ Back to Table of Contents

**M-12 --- One Original Invoice, One Approval · ★★★ · \~22 min**

**Client role:** Finance/Admin + authorised invoice approver\
**Product role:** Finance/Admin + approved single-level approver\
**Covers:** HP-022, UP-044, HP-023, UP-045, UP-046 · LOCK-20, LOCK-21\
**Mission type:** Core / Permission / Recovery

**Situation**

The invoice originates in SQL and MAIA must expose that original PDF. Go-live approval is single-level: one authorised approval completes the requirement, and an unauthorised user is refused. **A stale, mismatched, fabricated, or second-approval requirement is wrong.**

***Why this matters:** Financial documents must remain official and approval must match the agreed go-live boundary.*

**Before you start**

**Precondition:** Prepared SQL invoice reference/PDF, approved single-level approver account, unauthorised account, and controlled unavailable/update scenario.

**Input needed:** A documented invoice number, customer, lines, tax, total, original PDF, and unapproved invoice state.

**How to obtain it:** Product/client team supplies the visible invoice reference and controls availability/update.

**A suitable input must:**

invoice values are documented

PDF is approved as the SQL original

approval state is ready and unapproved

**You may use instead:** Another approved SQL invoice with the same conditions.

**Record what you use:** Invoice ID, downloaded file, visible values, approval status, approver/time, refusal, and unavailable message.

**Rules for this persona**

**Always:** Use the original SQL invoice reference.

**Never:** Accept a MAIA substitute, stale/mismatched PDF, or mandatory second approval.

**Before confirming/submitting:** Verify invoice number/customer/amounts and approval role.

**Escalate when:** The approved reference or approver identity is missing.

**Your mission**

Download the correct official PDF, handle unavailability safely, complete one valid approval, and prove unauthorised refusal.

**Say it your way**

"Download the invoice for this prepared invoice number."

"Approve this invoice."

"Show why the invoice PDF is unavailable."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Downloaded PDF matches invoice number, customer, lines, tax, and total.

If unavailable, a clear error appears instead of stale/fabricated content.

One authorised approval completes the requirement.

Approver and timestamp are visible.

No second approver is required.

Unauthorised account is refused and invoice remains pending.

**If the input or setup is missing**

**First:** Verify the prepared invoice reference.

**Alternative:** Use another approved SQL invoice.

**Ask the product team when:** PDF reference, update simulation, or approver mapping is missing.

**Do not:** Compare against direct SQL or upload a replacement PDF to force a pass.

**After five minutes:** Mark Blocked --- Dependency, Access, or Test Data and continue.

**If the product fails mid-way**

The invoice record should remain intact. The product must show a safe unavailable state and must never substitute another invoice or mark approval complete without the correct role.

**Try to break it**

Temporarily make the PDF unavailable.

Attempt approval as an unauthorised user.

After one valid approval, check whether a second is wrongly required.

**Evidence**

Approved invoice reference

Downloaded PDF or unavailable message

Single approval audit

Unauthorised refusal

↑ Back to Table of Contents

**M-13 --- Date It Correctly, Charge It as a SKU · ★★ · \~20 min**

**Client role:** Sales User / Sales Manager\
**Product role:** Sales User / Sales Manager\
**Covers:** HP-024, UP-047, UP-048, HP-025, UP-049, UP-050 · LOCK-23, LOCK-24\
**Mission type:** Core / Permission / Edge

**Situation**

A supported document should default to its creation date and allow only the locked roles to make a valid later change. Any surcharge must be selected as an active SQL SKU, not typed as an arbitrary charge. **Invalid dates and free-text charges must not post downstream.**

***Why this matters:** Document dates and charges affect operational and financial correctness.*

**Before you start**

**Precondition:** Supported UAT document, authorised/unauthorised date-edit accounts, and active surcharge SKU reference are ready.

**Input needed:** A supported document, valid/blank/malformed/impossible dates, an active surcharge SKU, and a free-text "delivery charge RM75" attempt.

**How to obtain it:** Sales may create the document; product/client team supplies the approved surcharge SKU.

**A suitable input must:**

document is in a configured editable state

surcharge SKU is active and identifiable

accounts are role-separated

**You may use instead:** Another supported document and approved surcharge SKU.

**Record what you use:** Default date, old/new date, audit entry, role refusal, SKU, total, and invalid/free-text errors.

**Rules for this persona**

**Always:** Use the allowed role and active SQL SKU.

**Never:** Post an impossible date or free-text charge as a valid item.

**Before confirming/submitting:** Verify date, SKU, amount, and total.

**Escalate when:** Legal edit states or surcharge mapping are unknown.

**Your mission**

Prove date default/edit/audit and correct surcharge-SKU handling with safe refusals.

**Say it your way**

"Create this document and use today's date."

"Change the date to this valid date."

"Add delivery charge RM75."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

New document defaults to creation date.

Authorised Sales User/Manager can make an allowed change and audit shows old/new/user/time.

Unauthorised role is refused.

Blank, malformed, or impossible date is rejected.

Approved surcharge posts once as the correct SQL SKU.

Free-text or missing/inactive surcharge is flagged and not substituted.

**If the input or setup is missing**

**First:** Confirm the document state and surcharge reference.

**Alternative:** Use another allowed document/SKU.

**Ask the product team when:** Date-edit state or posting/tax treatment is unconfirmed.

**Do not:** Create a generic item or arbitrary charge to bypass setup.

**After five minutes:** Mark Blocked --- Configuration or Test Data and continue.

**If the product fails mid-way**

The document should keep its last valid date and lines. Invalid changes must not corrupt the record or create downstream posting.

**Try to break it**

Try an impossible date.

Attempt date edit from an unauthorised role.

Enter the surcharge as free text instead of selecting the SKU.

**Evidence**

Default and changed date

Audit entry and refusal

Surcharge SKU line and total

Invalid/missing SKU messages

↑ Back to Table of Contents

**M-14 --- Return Goods Without Breaking the Batch Trail · ★★★ · \~28 min**

**Client role:** Sales + Warehouse/Logistics + Finance/Admin\
**Product role:** Sales User + confirmation role + Finance/Admin\
**Covers:** HP-026, UP-051, UP-052, HP-027, UP-053, UP-054, UP-055 · LOCK-25, LOCK-26\
**Mission type:** Core / Handoff / Permission

**Situation**

A delivered order needs a credit note. Sales may request it, physical return quantity must be confirmed, and Finance/Admin may issue it using only invoice-relevant batches and quantities. **The return must not be solved by cancelling the delivered order or dropping batch traceability.**

***Why this matters:** Returns affect stock, finance, and traceability; an incorrect batch or quantity can corrupt all three.*

**Before you start**

**Precondition:** Prepared invoice with multiple batches, return request, confirmation role/process, and separate Sales/Finance accounts.

**Input needed:** An invoice split across known batches and a controlled physical-return scenario.

**How to obtain it:** Product team seeds the invoice/batches; testers execute the visible request, confirmation, and issue stages.

**A suitable input must:**

invoice batches and quantities are documented

physical-return confirmation can be recorded

roles are separated

**You may use instead:** Equivalent multi-batch invoice and return.

**Record what you use:** Invoice, batches, original/returned quantities, request, confirmation, CN ID, role refusals, and traceability link.

**Rules for this persona**

**Always:** Link the request/CN to the source invoice and confirmed quantity.

**Never:** Let Sales issue the CN, issue before confirmation, use unrelated batch, or cancel the delivered order as a shortcut.

**Before confirming/submitting:** Verify invoice, batch, and physical quantity.

**Escalate when:** Batch or confirmation ownership is unclear.

**Your mission**

Complete the valid request-to-credit-note chain and prove role, confirmation, quantity, and batch protections.

**Say it your way**

"Request a credit note for this delivered invoice."

"Confirm the physical returned quantity."

"Create the credit note from the invoice."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Sales can request but cannot issue the credit note.

Finance/Admin cannot issue before physical return confirmation.

After confirmation, Finance/Admin can issue the CN.

Relevant invoice batch numbers carry over.

Unrelated batch and excessive quantity are prevented or flagged.

Sales cannot cancel the delivered order to bypass the process.

CN remains linked to the source invoice and confirmed quantity.

**If the input or setup is missing**

**First:** Verify invoice/batches and confirmation state.

**Alternative:** Use another prepared multi-batch return.

**Ask the product team when:** Confirmation role or batch data is missing.

**Do not:** Add unrelated batch data or alter delivered production records.

**After five minutes:** Mark Blocked --- Test Data, Access, or Configuration and continue.

**If the product fails mid-way**

The request and confirmation state should remain visible. The product must not issue a hidden partial CN, lose batch data, or let an unauthorised role finish.

**Try to break it**

Attempt issue before confirmation.

Select unrelated batch C.

Try to cancel the delivered order as Sales.

**Evidence**

Request and source invoice

Physical confirmation

CN batches/quantities

Sales/unauthorised refusals

↑ Back to Table of Contents

**M-15 --- Guard the Product Master · ★★ · \~15 min**

**Client role:** Finance/Admin + Sales/Logistics\
**Product role:** Admin/Finance + unauthorised roles\
**Covers:** HP-028, UP-056, UP-057 · LOCK-27\
**Mission type:** Permission / Edge

**Situation**

Only Finance/Admin may create item or product codes. A unique valid UAT item should succeed through the approved route, while Sales/Logistics, duplicate codes, and incomplete masters must be refused. **No conflicting product may appear in MAIA or the authoritative process.**

***Why this matters:** Uncontrolled item creation causes pricing, ordering, and reporting errors.*

**Before you start**

**Precondition:** Final matrix, authorised/unauthorised accounts, one reserved unique code, one existing duplicate code, and cleanup plan.

**Input needed:** A reserved UAT code, a known duplicate code, and documented mandatory fields.

**How to obtain it:** Product team reserves codes and confirms the approved user-facing creation route.

**A suitable input must:**

unique code is clearly marked UAT

duplicate code is known

mandatory fields are documented

**You may use instead:** Another reserved unique/duplicate pair.

**Record what you use:** Role, entered fields, item code, success/refusal, and cleanup confirmation.

**Rules for this persona**

**Always:** Use the approved Finance/Admin route.

**Never:** Create from Sales/Logistics or reuse an existing code.

**Before confirming/submitting:** Verify mandatory fields and UAT prefix.

**Escalate when:** Creation route or cleanup owner is undefined.

**Your mission**

Create one valid UAT item and prove unauthorised, duplicate, and incomplete attempts fail safely.

**Say it your way**

"Create this reserved UAT item code."

"Try to create the same code again."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Authorised Finance/Admin creation succeeds.

Created item is visible through the authoritative linked process.

Sales/Logistics creation is refused.

Duplicate code is rejected.

Missing mandatory fields are rejected or held for correction.

No conflicting duplicate remains after the test.

**If the input or setup is missing**

**First:** Confirm reserved code and mandatory fields.

**Alternative:** Request another reserved code.

**Ask the product team when:** Route, permission, or cleanup is missing.

**Do not:** Create an unlabelled item or reuse a real code.

**After five minutes:** Mark Blocked --- Access or Test Data and continue.

**If the product fails mid-way**

An incomplete or duplicate attempt must not create a hidden master. The form may retain entered values for correction, but the item must remain inactive.

**Try to break it**

Attempt as Sales.

Reuse the existing code.

Omit one mandatory field.

**Evidence**

Authorised success

Unauthorised refusal

Duplicate/incomplete errors

Cleanup confirmation

↑ Back to Table of Contents

**M-16 --- Attach the Certificate to the Right Batch · ★★ · \~18 min**

**Client role:** Supply Chain / Quality\
**Product role:** \[GAP: mapped COA-capable role\]\
**Covers:** HP-029, UP-058, UP-059 · LOCK-28\
**Mission type:** Core / Edge

**Situation**

A Certificate of Analysis must be indexed and linked to the correct Delivery Order or invoice. Missing index data or a batch mismatch must not silently produce valid-looking evidence. **The right PDF attached to the wrong batch is still wrong.**

***Why this matters:** Batch quality traceability protects customers and supports investigations or audits.*

**Before you start**

**Precondition:** Valid COA, missing-index variant, mismatched-batch variant, related DO/invoice, and mapped role/account are ready.

**Input needed:** An approved COA pack with valid and negative variants.

**How to obtain it:** Use only the approved COA pack and reserved shipment records.

**A suitable input must:**

valid file has item, batch, supplier, and date

related shipment reference is known

negative variants preserve one clear failure condition

**You may use instead:** A grounded redacted UAT COA set.

**Record what you use:** File, index fields, search result, linked DO/invoice, prompt, and mismatch/missing-data response.

**Rules for this persona**

**Always:** Compare item, batch, supplier, date, and shipment.

**Never:** Confirm a silent auto-link with missing or mismatched batch data.

**Before confirming/submitting:** Verify all index fields.

**Escalate when:** Multiple COAs match and precedence is undefined.

**Your mission**

Upload/search/link the valid COA and prove incomplete or mismatched evidence is stopped or clearly flagged.

**Say it your way**

"Upload and index this COA."

"Find the COA for this batch."

"Link this COA to this Delivery Order."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Valid COA uploads and is searchable by locked index fields.

It links to the correct DO/invoice.

Relevant prompt appears when configured.

Missing index data is flagged and not silently linked.

Batch mismatch is prevented or clearly flagged.

Unrelated COA is not presented as valid evidence.

**If the input or setup is missing**

**First:** Verify the prepared file and shipment reference.

**Alternative:** Use another approved unambiguous COA set.

**Ask the product team when:** Role mapping or matching precedence is missing.

**Do not:** Edit the PDF or batch solely to force a match.

**After five minutes:** Mark Blocked --- Access, Test Data, or Configuration and continue.

**If the product fails mid-way**

The uploaded file may remain in an incomplete review state, but it must not become a valid shipment link until required fields match.

**Try to break it**

Remove the batch field.

Attempt to link batch A COA to batch B shipment.

**Evidence**

COA file and index

Search and correct link

Missing-data warning

Mismatch refusal

↑ Back to Table of Contents

**M-17 --- Respect the Tax Boundary · ★★★ · \~22 min**

**Client role:** Sales / Finance\
**Product role:** Sales/Finance role\
**Covers:** HP-030, UP-060, UP-061, HP-031, UP-062, UP-063 · LOCK-29, LOCK-30\
**Mission type:** Core / Boundary / Edge

**Situation**

C3/order tax exemption is tracked at batch level for go-live. Separate product-level allocation and item-quantity reservation are excluded. E-invoice continues in SQL, so MAIA must not submit a duplicate or overwrite authoritative tax data.

***Why this matters:** Tax handling must be correct while the go-live boundary remains clear and operationally safe.*

**Before you start**

**Precondition:** Confirmed C3 batch and mismatch batch, expected visible exemption result, existing SQL-processed e-invoice, and Finance access are ready.

**Input needed:** A prepared exempt batch, non-exempt/mismatch batch, and already-processed SQL e-invoice.

**How to obtain it:** Product/client team provides controlled records and visible references.

**A suitable input must:**

C3 status is known at batch level

mismatch batch is clearly different

e-invoice is already processed in SQL

**You may use instead:** Equivalent approved records.

**Record what you use:** Order/batch, exemption result, mismatch response, e-invoice status/reference, and duplicate/overwrite evidence.

**Rules for this persona**

**Always:** Apply/verify C3 only against the approved batch.

**Never:** Require product-level allocation/item reservation, apply exemption to wrong batch, or submit a second e-invoice.

**Before confirming/submitting:** Verify batch and SQL-process status.

**Escalate when:** Expected tax output or batch is not supplied.

**Your mission**

Prove batch-level exemption, wrong-batch protection, excluded-allocation boundary, and non-duplication of SQL e-invoice.

**Say it your way**

"Apply the C3 exemption for this prepared batch."

"Use this different batch for the exemption."

"Show the e-invoice status for this SQL-processed invoice."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Exemption is traceable to the approved batch.

Wrong/missing batch is prevented or flagged.

No product-level C3 allocation or item-quantity reservation is required.

Existing SQL e-invoice process/status remains intact.

MAIA does not submit a duplicate e-invoice.

Conflicting draft data does not overwrite authoritative tax data.

**If the input or setup is missing**

**First:** Verify the prepared batch and e-invoice reference.

**Alternative:** Use another approved pair.

**Ask the product team when:** Expected tax output or status is not visible.

**Do not:** Create product-level allocation or re-submit the e-invoice.

**After five minutes:** Mark Blocked --- Test Data or Dependency and continue.

**If the product fails mid-way**

The order/invoice must remain intact and unresolved if the batch or authoritative tax data is unavailable. No duplicate tax submission may occur.

**Try to break it**

Choose the wrong batch.

Look for excluded product-level reservation controls.

Act around an already processed SQL e-invoice.

**Evidence**

Approved batch/reference

Correct and wrong-batch result

E-invoice status

No-duplicate/no-overwrite evidence

↑ Back to Table of Contents

**M-18 --- Ask Finance, Reveal Only What the Role Allows · ★★ · \~15 min**

**Client role:** Finance + Sales\
**Product role:** Finance chatbot with Finance and Sales accounts\
**Covers:** HP-032, UP-064, UP-065 · LOCK-31\
**Mission type:** Core / Permission

**Situation**

The Finance chatbot is already in current scope and should be available through the working Telegram channel. A Finance user must receive permitted information, while a Sales user must not see restricted details. **Availability without access control is not acceptable.**

***Why this matters:** Fast finance visibility is useful only when sensitive information remains role-controlled.*

**Before you start**

**Precondition:** Role-linked Finance and Sales Telegram accounts and a permitted finance query are ready.

**Input needed:** A routine permitted query such as unpaid invoices or pending approvals for a reserved customer.

**How to obtain it:** Product team supplies accounts; use a grounded reserved record.

**A suitable input must:**

query has a visible expected permitted result

Sales is not granted finance-data access

no unrelated customer information is requested

**You may use instead:** Another permitted finance summary query.

**Record what you use:** Account/role, query, permitted result, refusal/redaction, and availability evidence.

**Rules for this persona**

**Always:** Use the correct linked role.

**Never:** Expose restricted finance data to Sales.

**Before confirming/submitting:** Verify customer/period in the query.

**Escalate when:** The chatbot is described as future-only or WhatsApp-only.

**Your mission**

Prove current availability, permitted Finance result, and protected Sales refusal.

**Say it your way**

"Show unpaid invoices for this test customer."

"Show pending finance approvals."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Finance chatbot entry point is available now through the current channel.

Finance account receives the permitted result.

Result is short and tied to the correct record.

Sales account does not receive restricted details.

Refusal/redaction is clear without exposing data.

The product does not claim the feature is future-only or WhatsApp-only.

**If the input or setup is missing**

**First:** Confirm account linking and approved query.

**Alternative:** Use another permitted finance query.

**Ask the product team when:** Finance permissions or test record are missing.

**Do not:** Use another person's Finance account.

**After five minutes:** Mark Blocked --- Access or Configuration and continue.

**If the product fails mid-way**

The query may fail safely, but no restricted data may leak. The next permitted request should remain usable after a refusal.

**Try to break it**

Ask as Sales for restricted details.

Run a permitted Finance query immediately after the refusal.

**Evidence**

Finance result

Sales refusal/redaction

Account/role proof

Telegram availability

↑ Back to Table of Contents

**M-19 --- Earn the Sign-off · ★★ · \~20 min**

**Client role:** Maye + all required client roles\
**Product role:** Role accounts + sign-off process\
**Covers:** HP-035, UP-070, UP-071 · LOCK-34\
**Mission type:** Handoff / Governance

**Situation**

UAT is not complete until Sales, Logistics, Finance/Admin, Management, and relevant roles have evidence-backed results. Maye coordinates client approval/sign-off. **Missing role coverage or the wrong sign-off route must keep the status open.**

***Why this matters:** A product can appear ready while a critical role or control has never been tested.*

**Before you start**

**Precondition:** Mission allocation, named testers, result records, evidence links, and client sign-off process are available.

**Input needed:** Completed mission results and the approved role coverage list.

**How to obtain it:** Use the coverage appendix and team evidence repository.

**A suitable input must:**

each result names persona/product role

evidence proves the visible outcome

blocked items have correct reasons and owners

**You may use instead:** No shortcut; missing role coverage must be completed or formally accepted.

**Record what you use:** Role coverage, mission result, evidence link, blocker owner, reviewer, and sign-off decision.

**Rules for this persona**

**Always:** Distinguish Fail from blocked setup/dependency.

**Never:** Sign off incomplete evidence or substitute an unauthorised approver.

**Before confirming/submitting:** Verify all required roles and locked items.

**Escalate when:** P1/P2 issues or blocking gaps remain.

**Your mission**

Produce a traceable role-coverage review and accept or refuse final sign-off through the correct process.

**Say it your way**

"Show which required roles have completed their missions."

"Open the evidence for this permission test."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

All required role groups have named testers and results.

Each result has input, role, visible outcome, result, and evidence.

Incomplete role coverage stays open.

Blocked setup is not mislabelled as product failure.

Maye's coordination and authorised client approval are traceable.

Final sign-off is refused when evidence or authority is incomplete.

**If the input or setup is missing**

**First:** Identify the exact missing role/mission/evidence.

**Alternative:** Reassign to another approved tester with the same role.

**Ask the product team when:** Evidence is inaccessible or account mapping unresolved.

**Do not:** Mark unexecuted work as Pass.

**After five minutes:** Record the governance blocker and continue elsewhere.

**If the product fails mid-way**

Partial coverage remains valid evidence but cannot become full sign-off. Completed results must remain visible while gaps stay open.

**Try to break it**

Remove Finance/Admin evidence and try to sign off.

Present sign-off from outside the approved process.

**Evidence**

Coverage matrix

Representative evidence links

Blocked/fail distinctions

Maye/client sign-off record

↑ Back to Table of Contents

**M-20 --- Cross the Live-SQL Bridge Safely · ★★★ · \~30 min**

**Client role:** Admin + client PIC\
**Product role:** Admin / production environment\
**Covers:** HP-036, UP-073 · LOCK-35\
**Mission type:** Handoff / Recovery

**Situation**

Before production use, MAIA must switch from test SQL to approved live SQL. The product/client team must spot-check live records and verify one controlled transaction writes only to the approved destination. **This mission is not safe for an unsupervised tester.**

***Why this matters:** Wrong-environment data can create real operational and financial damage.*

**Before you start**

**Precondition:** Authorised cutover window, credentials, rollback owner, environment label, live reference set, and transaction plan are confirmed.

**Input needed:** Three live customers, three live items, three live invoices, and one controlled production transaction.

**How to obtain it:** Product/client team supplies and supervises. Testers verify visible product results; technical destination verification is a handoff.

**A suitable input must:**

records are approved for spot-check

environment clearly says production/live

transaction has owner and rollback/cleanup plan

**You may use instead:** No safe unsupervised alternative. A staging rehearsal does not replace final evidence.

**Record what you use:** Cutover time, environment label, nine visible comparisons, transaction reference, handoff confirmation, and rollback owner.

**Rules for this persona**

**Always:** Run only in the authorised window with supervision.

**Never:** Change credentials, balances, stock, or production records outside the plan.

**Before confirming/submitting:** Verify environment label and transaction approval.

**Escalate when:** Any record resembles test data or destination cannot be confirmed.

**Your mission**

Confirm visible live data alignment and receive handoff proof that one controlled transaction wrote only to live SQL.

**Say it your way**

"Open the approved live customer/item/invoice references."

"Create the authorised controlled transaction."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

Environment is clearly identified as live/production.

Three customers, three items, and three invoices match references.

Controlled transaction appears once with expected reference.

Handoff confirms it wrote only to approved live SQL.

No duplicate transaction appears.

Rollback/cleanup owner confirms final state.

**If the input or setup is missing**

**First:** Stop if environment or approvals are unclear.

**Alternative:** Perform a staging rehearsal only as preparation.

**Ask the product/client owners when:** Destination or rollback cannot be confirmed.

**Do not:** Improvise a production test.

**After five minutes:** Mark Blocked --- Environment or Dependency and stop.

**If the product fails mid-way**

The product must not continue with an uncertain connection. Preserve safe evidence, stop new submissions, and invoke the rollback owner if needed.

**Try to break it**

Verify no duplicate transaction exists.

Search for a known test-only marker during BF-06, not by creating new data.

**Evidence**

Environment label

Nine spot-check references

Controlled transaction ID

Destination and cleanup confirmation

↑ Back to Table of Contents

**Section 10 --- Boss Fights**

These are focused regression missions for behaviour that previously failed or remained fragile during UAT.

**BF-01 --- The Duplicate PO Race · ★★★ · \~15 min**

**Client role:** Two Sales users\
**Product role:** Two Sales User accounts\
**Covers:** HP-006, UP-008, UP-009 · LOCK-04\
**Mission type:** Regression

**Situation**

Two Sales users receive orders at nearly the same time. **The same customer and PO number must produce only one CPO**, even when the submissions race. The same PO number for a different customer must still be allowed.

***Why this matters:** Duplicate orders create financial, fulfilment, and customer-service risk.*

**Before you start**

**Precondition:** Two Sales accounts, Customer A and Customer B, and unique test PO numbers are reserved.

**Input needed:** PO-TEST-001 for both customers; PO-TEST-002 already active for Customer A; PO-TEST-003 submitted concurrently for Customer A.

**How to obtain it:** Use the prepared duplicate-PO pack or reserve equivalent unique test PO numbers with the product team.

**A suitable input must:**

uses the exact same customer and PO number for the blocked cases

uses a different customer for the allowed control case

can be submitted from two accounts without touching production orders

**You may use instead:** Equivalent reserved customers and PO numbers that preserve the same duplicate conditions.

**Record what you use:** Customer names, PO numbers, CPO references, accounts, timestamps, and any linked existing record.

**Rules for this persona**

**Always:** Check both customer and PO number together.

**Never:** Treat a warning-only response as a pass for a true duplicate.

**Before confirming/submitting:** Verify that both racing users use the same reserved pair.

**Escalate when:** A second CPO appears or the block does not identify the existing record.

**Your mission**

Prove different-customer reuse is allowed, while same-customer duplicates are hard-blocked under normal and concurrent submission.

**Say it your way**

"Create this order for Customer A with PO-TEST-002."

"Submit PO-TEST-003 for Customer A now."

"Use PO-TEST-001 for Customer B."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

The same PO number is accepted for different customers.

An existing same-customer/PO duplicate is hard-blocked.

Only one concurrent submission creates a CPO.

The second racing user receives a clear duplicate message.

No second SO or downstream record exists.

**If the input or setup is missing**

**First:** Confirm the reserved PO was not used by another tester.

**Alternative:** Reserve a fresh equivalent PO set.

**Ask the product team when:** Concurrent submission cannot be coordinated or the existing record cannot be found.

**Do not:** Reuse a real customer PO.

**After five minutes:** Mark the correct blocked reason and continue.

**If the product fails mid-way**

The first valid CPO may remain. The second attempt must stop cleanly and must never create a hidden or downstream duplicate.

**Try to break it**

Submit from both accounts as close together as practical.

Retry the blocked duplicate after refreshing.

Change only the customer while keeping the PO number.

**Evidence**

Both inputs and timestamps

Created CPO reference

Duplicate refusal message

Search showing no second CPO/SO

↑ Back to Table of Contents

**BF-02 --- The Telegram Marathon · ★★★ · \~30 min**

**Client role:** Cross-functional UAT team\
**Product role:** Linked Telegram accounts and relevant MAIA roles\
**Covers:** HP-034, UP-068, UP-069 · LOCK-33\
**Mission type:** Regression

**Situation**

The chatbot previously became slow and appeared to stop responding. Run a continuous mix of text, photo, PDF, and document requests while two users keep separate order conversations active. **One corrupt file must not take the bot down or contaminate later requests.**

***Why this matters:** A chatbot that loses work or mixes customers cannot be trusted for live operations.*

**Before you start**

**Precondition:** An agreed stress duration/count, two linked accounts, and a reserved mixed-input pack are ready.

**Input needed:** Text orders, clear photos, clear PDFs, document requests, one corrupt/unsupported file, and two distinct customer/order threads.

**How to obtain it:** Use the product-team stress pack. \[GAP: agree the duration/count and any numeric response-time target before execution.\]

**A suitable input must:**

contains every locked request type

keeps the two customer/order contexts clearly distinguishable

includes one deliberately bad file between valid requests

**You may use instead:** No safe alternative without an agreed mixed-input pack and run size.

**Record what you use:** Request sequence, account, timestamp, input type, response, completion state, and record/document IDs.

**Rules for this persona**

**Always:** Keep each user's customer/order context distinct.

**Never:** Reset the bot between requests unless the run has already failed and the reset is documented.

**Before confirming/submitting:** Verify the extracted customer and order reference.

**Escalate when:** Requests stall, disappear, duplicate, or cross into another conversation.

**Your mission**

Complete the agreed continuous run without crash, lost work, duplicates, or cross-order contamination.

**Say it your way**

"Create this order from the attached PO."

"Show the document for my current order."

"Process this file and tell me what needs correction."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

All valid requests receive a usable response and completion state.

The corrupt file receives a clear error.

A bad file does not block the next valid request.

Customer, item, PO, and documents remain in the correct conversation.

No request or document is duplicated.

The bot does not crash or require an undocumented reset.

**If the input or setup is missing**

**First:** Record the last successful request and visible state.

**Alternative:** Resume only if the product visibly preserves the correct context.

**Ask the product team when:** The agreed pack, linked accounts, or run size is missing.

**Do not:** Reclassify a stalled or mixed-context run as a pass.

**After five minutes:** Mark the correct blocked reason and continue.

**If the product fails mid-way**

Completed records must remain intact. The bot should identify the failed input, allow a valid retry, and continue serving later requests without mixing or duplicating work.

**Try to break it**

Place the corrupt file between two valid requests.

Interleave requests from both accounts.

Ask for a document while another order conversation is active.

**Evidence**

Full request log with timestamps

Inputs used

Record/document IDs

Error and recovery screenshots

Any reset or support intervention

↑ Back to Table of Contents

**BF-03 --- Catch the Credit Block at the Right Stage · ★★ · \~10 min**

**Client role:** Sales and Finance Manager\
**Product role:** Sales User and authorized override account\
**Covers:** UP-018 · LOCK-08\
**Mission type:** Regression

**Situation**

Earlier behaviour allowed the credit problem to surface too late. Follow an over-limit order from draft to submission. **The first hard block must appear when the Sales Order is submitted, not only when an invoice is created.**

***Why this matters:** Late credit control lets risky orders progress into fulfilment and finance work.*

**Before you start**

**Precondition:** A prepared customer is over the credit limit and the visible expected exposure/limit is documented.

**Input needed:** One reserved over-limit customer and a new order that would otherwise be valid.

**How to obtain it:** Use the seeded credit-limit record from M-06; no tester-created substitute is safe.

**A suitable input must:**

is visibly identified as the prepared over-limit case

has no prior approved override

can be observed at draft, SO submission, and downstream stages

**You may use instead:** No safe alternative unless the product team seeds another controlled over-limit customer.

**Record what you use:** Customer, limit/exposure reference supplied by the team, SO reference, stage, message, and timestamp.

**Rules for this persona**

**Always:** Observe and record the first stage where the hard block appears.

**Never:** Accept an invoice-stage-only block.

**Before confirming/submitting:** Ensure no override already exists.

**Escalate when:** The SO submits despite the breach.

**Your mission**

Prove the order is stopped exactly at SO submission and cannot reach downstream documents without approval.

**Say it your way**

"Submit this Sales Order."

"Continue this order to delivery."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

The draft can be prepared without hiding the credit state.

The hard block appears on SO submission.

The message explains the credit approval requirement.

No DO or invoice can be created without an approved override.

**If the input or setup is missing**

**First:** Confirm the seeded exposure is still active.

**Ask the product team when:** The prepared customer is no longer over limit.

**Do not:** Change balances or credit settings yourself.

**After five minutes:** Mark Blocked --- Test Data or Configuration and continue.

**If the product fails mid-way**

The order should remain in a recoverable blocked state. It must not silently submit or create downstream documents.

**Try to break it**

Try to proceed directly to a DO.

Refresh and retry without approval.

**Evidence**

SO state before and after submission

Credit-block message

Timestamp of first block

Downstream refusal

↑ Back to Table of Contents

**BF-04 --- The Right Code with the Wrong Description · ★★ · \~10 min**

**Client role:** Sales\
**Product role:** Sales User\
**Covers:** UP-041 · LOCK-19\
**Mission type:** Regression

**Situation**

A prior UAT example showed that an SKU could be correct while its description was missing or misleading. Search the verified roasted-chicken-seasoning test item and compare its visible description with the approved reference. **A correct code does not excuse a wrong description.**

***Why this matters:** Users choose and communicate products by both code and description; a mismatch can cause the wrong goods to be supplied.*

**Before you start**

**Precondition:** The product team has verified the exact SQL code and expected visible description for the observed example.

**Input needed:** The verified roasted-chicken-seasoning SKU and its expected visible description.

**How to obtain it:** Request the verified reference from the product team. Transcript-derived examples such as CR005P/EX03 must not be used until confirmed.

**A suitable input must:**

has an exact approved code and expected description

is visible through normal item search

is reserved for this comparison

**You may use instead:** Another item with a documented prior description mismatch and an approved visible reference.

**Record what you use:** SKU, approved expected description, visible MAIA description, screen, and timestamp.

**Rules for this persona**

**Always:** Judge code and description separately.

**Never:** Pass the case because the code alone is correct.

**Before confirming/submitting:** Read the full visible description.

**Escalate when:** The reference is not verified.

**Your mission**

Prove the selected SKU displays the authoritative approved description everywhere the tester can see it.

**Say it your way**

"Find the roasted chicken seasoning item."

"Add this verified SKU to a draft order."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

The searched code is the intended code.

The visible description exactly matches the approved reference.

The order line uses the same description.

No blank, stale, or conflicting description appears.

**If the input or setup is missing**

**First:** Use the verified item reference.

**Alternative:** Ask for another approved mismatch-regression item.

**Ask the product team when:** The exact code/description is not confirmed.

**Do not:** Guess from transcript-derived codes.

**After five minutes:** Mark Blocked --- Test Data and continue.

**If the product fails mid-way**

The product must not silently substitute or retain a conflicting description. Stop before submission if the identity is uncertain.

**Try to break it**

Search by code and by description separately.

Open the item in a fresh draft after refresh.

**Evidence**

Approved reference

Search result screenshot

Order-line screenshot

SKU and timestamp

↑ Back to Table of Contents

**BF-05 --- Reject the Look-alike Invoice · ★★ · \~10 min**

**Client role:** Sales / Finance\
**Product role:** Invoice viewer/download permission\
**Covers:** UP-043 · LOCK-20\
**Mission type:** Regression

**Situation**

Earlier UAT showed a MAIA-formatted invoice where Mackessen expected the original SQL invoice PDF. Download the prepared invoice through MAIA. **A polished substitute is still a failure if it is not the SQL-origin PDF.**

***Why this matters:** Mackessen relies on the authoritative accounting document and cannot risk two competing invoice formats.*

**Before you start**

**Precondition:** A prepared invoice has an approved SQL-origin PDF and a visible reference summary.

**Input needed:** The prepared invoice number plus the approved visible customer, lines, tax, and total reference.

**How to obtain it:** Use the invoice seeded for M-12. The product team/client retains the inaccessible source-system verification.

**A suitable input must:**

has a downloadable PDF through MAIA

has an approved visible reference

has not been replaced by an intentionally regenerated test version

**You may use instead:** Another prepared SQL invoice with an approved visible reference.

**Record what you use:** Invoice number, downloaded filename, visible values, timestamp, and document appearance.

**Rules for this persona**

**Always:** Confirm the invoice number, customer, lines, tax, and total.

**Never:** Accept a MAIA-generated substitute template.

**Before confirming:** Ensure the record is the prepared SQL invoice.

**Escalate when:** The PDF origin cannot be established from the prepared reference.

**Your mission**

Prove MAIA returns the original matching SQL invoice PDF rather than a substitute.

**Say it your way**

"Open invoice \[number\]."

"Download the original invoice PDF."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

The PDF opens/downloads from the correct MAIA record.

Invoice number and customer match the approved reference.

Lines, tax, and total match the approved reference.

The document is the expected SQL invoice format, not a MAIA substitute.

**If the input or setup is missing**

**First:** Re-open the prepared record and retry once.

**Alternative:** Use another approved prepared invoice.

**Ask the product team when:** The PDF is unavailable or the reference is missing.

**Do not:** Inspect SQL directly or treat appearance alone as proof.

**After five minutes:** Mark the correct blocked reason and continue.

**If the product fails mid-way**

MAIA should show a clear unavailable error rather than a stale, mismatched, or fabricated PDF. The invoice record must remain intact.

**Try to break it**

Refresh before downloading.

Compare the viewer and downloaded copy.

**Evidence**

Invoice reference summary

Downloaded PDF/filename

Screenshots of key visible values

Error or mismatch evidence

↑ Back to Table of Contents

**BF-06 --- No Test Ghosts in Production · ★★ · \~10 min**

**Client role:** Admin + client PIC\
**Product role:** Production-authorized admin/read account\
**Covers:** UP-072 · LOCK-35\
**Mission type:** Regression

**Situation**

Test SQL previously contained records that did not match live SQL. After the authorised cutover, search for a marker known to exist only in test SQL. **That marker must not appear in production.**

***Why this matters:** Test-data leakage destroys confidence in every customer, item, price, and transaction shown after go-live.*

**Before you start**

**Precondition:** Cutover is authorised and the product team has supplied a harmless test-only marker and production search account.

**Input needed:** One known test-only customer or item identifier that does not exist in live SQL.

**How to obtain it:** Product-team support is required; the marker and cutover status must be documented before the search.

**A suitable input must:**

is guaranteed to exist only in test SQL

is safe to search without creating or editing data

has an approved expected result of no production match

**You may use instead:** Another documented test-only marker approved by the cutover owner.

**Record what you use:** Marker, environment label, account, search time, and visible search result.

**Rules for this persona**

**Always:** Confirm the environment is production before searching.

**Never:** Create, delete, or edit a production record for this regression test.

**Before confirming:** Capture the visible environment identifier.

**Escalate when:** The marker appears or the environment is ambiguous.

**Your mission**

Prove production does not expose known test-only data after cutover.

**Say it your way**

"Search for \[test-only marker\]."

"Show the current environment."

*Use your own words. Do not copy these exactly.*

**Checkpoints**

The visible environment is the authorised production environment.

The test-only marker returns no production record.

No tester action creates or changes production data.

Any unexpected match is treated as a critical failure and escalated immediately.

**If the input or setup is missing**

**First:** Confirm the cutover owner has approved execution.

**Alternative:** Use another approved harmless marker.

**Ask the product team when:** Environment identity or marker provenance is unclear.

**Do not:** Run writes, deletions, or improvised searches against real records.

**After five minutes:** Mark Blocked --- Environment and continue only if authorised.

**If the product fails mid-way**

Stop immediately if the environment is unclear or the marker appears. Preserve screenshots and do not attempt cleanup; the cutover owner must investigate.

**Try to break it**

Search using the exact marker and one partial variant.

Refresh and confirm the result remains absent.

**Evidence**

Environment identifier

Approved marker

Search screenshot

Timestamp and account

Escalation record if found

↑ Back to Table of Contents

**Section 11 --- Field Manual**

**Result options**

Use exactly one result:

**Pass**

**Fail**

**Blocked --- Test Data**

**Blocked --- Access**

**Blocked --- Configuration**

**Blocked --- Environment**

**Blocked --- Dependency**

**Observation**

**Observation --- Out of Scope**

A mission is **Fail** when the product\'s visible behaviour contradicts a locked checkpoint. Use a blocked result when the behaviour could not be reached because its prerequisite was unavailable.

**Minimal result record**

Record:

Mission ID

Persona / product role

What you entered or uploaded

Input source: **Provided**, **Generated**, **Seeded**, **Self-discovered**, **Tester-created**, or **Alternative**

What happened

What you expected

Result

Evidence

Notes

**Evidence rules**

Capture only what proves the result:

the relevant screenshot;

record or document ID;

timestamp;

input used;

visible before/after value;

approval or refusal;

exact error or clarification message.

Do not capture unrelated customer information. Redact sensitive data before sharing evidence outside the authorised UAT group.

**Help and blockers**

Ask in \[NEEDS INPUT: SUPPORT_CHANNEL\]. Include:

mission ID;

persona and product role;

missing prerequisite or failed action;

what you searched or attempted;

visible record/document ID;

timestamp;

screenshot where useful;

why the approved alternatives were unsuitable.

For urgent business-stopping behaviour, contact \[GAP: urgent blocker owner\] through \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\]. While waiting, reserve the record, mark the correct blocked result, and continue with a mission that does not depend on the same issue.

***Stop:** Do not "fix" a failed permission, price, credit, stock, tax, batch, or production-data case by changing hidden configuration during the run. Preserve the evidence and hand it to the product team.*

**Section 12 --- Compact coverage appendix**

**Test-case disposition**

The 112 source cases are consolidated into persona missions. Each source case appears exactly once below.

  ---------------------------------------------------------------- -------------------------------- --------------------
  Source test case(s)                                              Disposition                      Mission

  HP-001, UP-001, UP-002, HP-037, UP-074, UP-075                   ACTIVE MISSION                   M-01

  HP-002, UP-003, UP-004, HP-033, UP-066, UP-067                   ACTIVE MISSION                   M-02

  HP-003, HP-004, HP-005, UP-005, UP-006, UP-007                   ACTIVE MISSION                   M-03

  HP-006, UP-008, UP-009                                           ADAPTED MISSION --- Regression   BF-01

  HP-007, UP-010, UP-011, HP-020, UP-039, UP-040, HP-021, UP-042   ACTIVE MISSION                   M-04

  UP-041                                                           ADAPTED MISSION --- Regression   BF-04

  HP-008, UP-012, UP-013, HP-009, UP-014, UP-015                   ACTIVE MISSION                   M-05

  HP-010, UP-016, UP-017, HP-011, UP-019, UP-020                   ACTIVE MISSION                   M-06

  UP-018                                                           ADAPTED MISSION --- Regression   BF-03

  HP-012, UP-021, UP-022, UP-023, UP-024                           ACTIVE MISSION                   M-07

  HP-013, UP-025, UP-026, HP-014, UP-027, UP-028                   ACTIVE MISSION                   M-08

  HP-015, UP-029, UP-030, HP-016, UP-031, UP-032                   ACTIVE MISSION                   M-09

  HP-017, UP-033, UP-034, HP-019, UP-037, UP-038                   ACTIVE MISSION                   M-10

  HP-018, UP-035, UP-036                                           ACTIVE MISSION                   M-11

  HP-022, UP-044, HP-023, UP-045, UP-046                           ACTIVE MISSION                   M-12

  UP-043                                                           ADAPTED MISSION --- Regression   BF-05

  HP-024, UP-047, UP-048, HP-025, UP-049, UP-050                   ACTIVE MISSION                   M-13

  HP-026, UP-051, UP-052, HP-027, UP-053, UP-054, UP-055           ACTIVE MISSION                   M-14

  HP-028, UP-056, UP-057                                           ACTIVE MISSION                   M-15

  HP-029, UP-058, UP-059                                           ACTIVE MISSION                   M-16

  HP-030, UP-060, UP-061, HP-031, UP-062, UP-063                   ACTIVE MISSION                   M-17

  HP-032, UP-064, UP-065                                           ACTIVE MISSION                   M-18

  HP-034, UP-068, UP-069                                           ADAPTED MISSION --- Regression   BF-02

  HP-035, UP-070, UP-071                                           ACTIVE MISSION                   M-19

  HP-036, UP-073                                                   ACTIVE MISSION                   M-20

  UP-072                                                           ADAPTED MISSION --- Regression   BF-06
  ---------------------------------------------------------------- -------------------------------- --------------------

**Scope coverage**

  ------------------------------- ------------------------------------------------------------------------
  Scope item                      Mission or boundary section

  LOCK-01                         M-01

  LOCK-02                         M-02

  LOCK-03                         M-03

  LOCK-04                         BF-01

  LOCK-05                         M-04

  LOCK-06                         M-05

  LOCK-07                         M-05

  LOCK-08                         M-06, BF-03

  LOCK-09                         M-06

  LOCK-10                         M-07

  LOCK-11                         M-08

  LOCK-12                         M-08

  LOCK-13                         M-09

  LOCK-14                         M-09

  LOCK-15                         M-10

  LOCK-16                         M-11

  LOCK-17                         M-10

  LOCK-18                         M-04

  LOCK-19                         M-04, BF-04

  LOCK-20                         M-12, BF-05

  LOCK-21                         M-12

  LOCK-23                         M-13

  LOCK-24                         M-13

  LOCK-25                         M-14

  LOCK-26                         M-14

  LOCK-27                         M-15

  LOCK-28                         M-16

  LOCK-29                         M-17

  LOCK-30                         M-17

  LOCK-31                         M-18

  LOCK-32                         M-02

  LOCK-33                         BF-02

  LOCK-34                         M-19

  LOCK-35                         M-20, BF-06

  LOCK-36                         M-01

  LOCK-22                         Section 4 --- Out of scope: multi-level invoice approval customisation
  ------------------------------- ------------------------------------------------------------------------

**Non-active source behaviours**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------- --------------------------------------------------
  Behaviour                                                                                                                                                     Disposition                        Where handled

  WhatsApp activation for go-live                                                                                                                               OUT OF SCOPE / currently blocked   Section 4; Telegram remains the go-live channel

  C3 item-quantity reservation and product-level allocation                                                                                                     OUT OF SCOPE / deferred            Section 4; M-17 tests batch-level handling only

  Individual-user digest tailoring                                                                                                                              OUT OF SCOPE / deferred            Section 4; M-11 tests the current generic digest

  Move e-invoice processing from SQL into MAIA                                                                                                                  OUT OF SCOPE                       Section 4; M-17 verifies non-duplication

  Transport routing, warehouse-location/FIFO/FEFO automation, bank matching, forecasting, CRM, POD, multilingual chatbot, custom calculators, payment voucher   NEEDS SCOPING / OUT OF SCOPE       Section 4; observations only

  Automatic Telegram-to-website failover and numeric sync/performance SLA                                                                                       NEEDS SCOPING                      Section 4; not a committed pass/fail criterion
  ------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------- --------------------------------------------------

**Persona-rule coverage**

  --------------------------- -------------------------------------------------------------------------------------------------------------------------- -----------------------------------------
  Persona                     Business rule                                                                                                              Mission

  Sales User                  Validate customer/item data; use Telegram; do not self-approve; stock does not block; submit only complete valid orders.   M-01 to M-08, M-13; BF-01, BF-03, BF-04

  Sales Manager               Approve minimum-price exceptions; permitted date changes; no unrestricted finance/admin powers.                            M-05, M-13

  Logistics / Irene           Monitor stock and delays; preserve outstanding delivery quantity; act only on valid SOs.                                   M-09, M-10, M-11

  Credit Controller / Irene   May approve/override only while the configured authorised role is present.                                                 M-06, M-07, BF-03

  Finance/Admin               Issue CN only after physical return confirmation; create items; control invoice/tax/finance actions within permissions.    M-12 to M-15, M-17, M-18; BF-05

  Supply Chain / Quality      Index and link COAs by the correct item/batch/supplier/date; reject mismatches.                                            M-16

  Management                  View lifecycle and operational status without taking ungranted operational actions.                                        M-01, M-11

  Maye / UAT coordinator      Ensure all role groups execute evidence-backed cases and coordinate client sign-off.                                       M-19, M-20, BF-06
  --------------------------- -------------------------------------------------------------------------------------------------------------------------- -----------------------------------------

**Product-Team / Client Handoff summary**

The tester can verify only user-facing behaviour. The product team/client must retain evidence for:

authoritative SQL values and production connection;

seeded prices, credit exposure, payment ageing, stock quantities, batches, tax, and C3 data;

invoice-PDF origin;

notification scheduler execution where the timing engine is inaccessible;

Telegram account linkage and hidden role configuration;

production transaction destination and cutover rollback readiness.

↑ Back to Table of Contents

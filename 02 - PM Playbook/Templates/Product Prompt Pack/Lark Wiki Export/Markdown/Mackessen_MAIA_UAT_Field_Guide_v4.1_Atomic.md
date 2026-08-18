**Mackessen_MAIA_UAT_Field_Guide_v4.1_Atomic**

**MAIA UAT Field Guide --- Play It Like a User**

**Table of Contents**

Section 0 --- Cover and logistics

Section 1 --- How to test

Section 2 --- The client's world

Section 3 --- Product and workflow map

Section 4 --- Scope boundaries

Section 5 --- Persona Cards

Section 6 --- Trust Killers

Section 7 --- Campaign coordination

Section 8 --- Mission overview

Section 9 --- Atomic Mission Cards

Section 10 --- Boss Fights

Section 11 --- Field Manual

Section 12 --- Compact coverage appendix

**Persona Cards**

Sales User

Sales Manager

Logistics

Irene / Credit Controller

Finance/Admin

Supply Chain

Management

Maye / UAT Coordinator

**Atomic missions by campaign**

**C-01 --- Order Relay**

M-001 --- Submit One Complete Sales Order

M-002 --- Create a Delivery Order From a Valid Sales Order

M-003 --- Retrieve the Invoice and Receipt for the Same Order

M-004 --- View the Complete Order Lifecycle

M-005 --- Stop an Order With an Unknown Customer or Item

M-006 --- Refuse a Delivery Order From an Invalid Sales Order

**C-02 --- Telegram Order Capture**

M-007 --- Create an Order Through Linked Telegram

M-008 --- Continue UAT Without WhatsApp

M-009 --- Refuse an Unlinked Telegram User

M-010 --- Extract One Text Order

M-011 --- Extract One Photo Order

M-012 --- Reach 90% Accuracy Across the PO Pack

M-013 --- Clarify an Ambiguous Item

M-014 --- Reject an Unreadable Order File

M-015 --- Remember a Corrected Extraction

M-016 --- Return a Short Operational Chatbot Reply

M-017 --- Do Not Return a Wall of Text

M-018 --- Ask One Short Clarifying Question

**C-03 --- Duplicate and Master-Data Control**

M-019 --- Allow the Same PO Number for Different Customers

M-020 --- Block the Second Concurrent Duplicate

M-021 --- Refresh a Changed Customer Address

M-022 --- Refresh a Changed Item Description

M-023 --- Refresh a Changed Customer Price

M-024 --- Prevent a Conflicting Local Master Value

M-025 --- Stop Safely When Authoritative Data Is Unavailable

M-026 --- Auto-Fill All Required Customer Fields

M-027 --- Flag a Missing Customer Field

M-028 --- Ask the User to Select From Multiple Addresses

M-029 --- Show the SQL Item Description

M-030 --- Refresh a Changed Item Description

**C-04 --- Pricing, Credit, and Payment Gates**

M-031 --- Auto-Fill the Customer-Specific Price

M-032 --- Flag a Missing Customer Price

M-033 --- Refresh a Changed Customer Price

M-034 --- Submit a Below-Minimum Price Exception

M-035 --- Approve a Below-Minimum Price Exception

M-036 --- Refuse Sales Self-Approval of a Price Exception

M-037 --- Stop a Below-Minimum Order Without Approval

M-038 --- See an Over-Limit Sales Order Blocked

M-039 --- Override an Over-Limit Sales Order

M-040 --- Refuse a Sales Credit Override

M-041 --- Prevent Downstream Documents From a Credit-Blocked Order

M-042 --- Allow Irene to Override by Role

M-043 --- Refuse an Unauthorised Credit Bypass

M-044 --- Remove Irene's Bypass When Her Role Is Removed

M-045 --- Allow a Clear COD Customer to Order

M-046 --- Allow a 30-Day Customer at Day 30

M-047 --- Allow a 60-Day Customer at Day 60

M-048 --- Block a COD Customer With an Unpaid Invoice

M-049 --- Show a 30-Day Alert on Day 31

M-050 --- Block a 30-Day Customer on Day 61

M-051 --- Repeat the 30-Day Reminder After 14 Days

M-052 --- Override a 30-Day Payment Block

M-053 --- Show a 60-Day Alert on Day 61

M-054 --- Block a 60-Day Customer on Day 91

M-055 --- Repeat the 60-Day Reminder After 14 Days

M-056 --- Override a 60-Day Payment Block

M-057 --- Refuse an Unauthorised Payment-Term Override

**C-05 --- Warnings and Stock Signals**

M-058 --- Acknowledge a Warning and Continue

M-059 --- Require Warning Acknowledgement Before Continuing

M-060 --- Record the Complete Warning Audit Entry

M-061 --- Submit an Order With Zero Stock

M-062 --- Do Not Block an Order at Exactly Zero Stock

M-063 --- Do Not Block an Order Below the Low-Stock Threshold

M-064 --- Save a Valid Low-Stock Threshold

M-065 --- Receive a Low-Stock Alert at Quantity 49

M-066 --- Receive an Out-of-Stock Alert at Quantity Zero

M-067 --- Reject an Invalid Stock Threshold

M-068 --- Send Stock Alerts to Both Required Channels

M-069 --- Receive the 9:00 AM Stock Summary

M-070 --- Run the Stock Summary Once at 9:00 AM

M-071 --- Keep Stock Summary Values Consistent

**C-06 --- Delivery and Daily Operations**

M-072 --- Receive a Delay Alert After More Than Three Days

M-073 --- Clear a Delay Alert After Valid Resolution

M-074 --- Do Not Alert at Exactly Three Days

M-075 --- Clear a Delay Alert Only After Valid Resolution

M-076 --- Receive All Five Operational Digest Categories

M-077 --- Do Not Omit a Required Digest Category

M-078 --- Run the Operations Digest Once at 9:00 AM

M-079 --- Keep 400 kg Open After a 600 kg Delivery

M-080 --- Receive the Partial-Delivery Reminder

M-081 --- Stop the Reminder After the Final 400 kg

M-082 --- Keep the Remaining Partial-Delivery Quantity Open

M-083 --- Refuse an Unauthorised Partial-Order Closure

**C-07 --- Invoices, Dates, and Charges**

M-084 --- Download the Original SQL Invoice PDF

M-085 --- Download the Updated Current Invoice PDF

M-086 --- Show a Clear Error When the Invoice PDF Is Unavailable

M-087 --- Complete Invoice Approval With One Approver

M-088 --- Do Not Require a Second Invoice Approver

M-089 --- Refuse an Unauthorised Invoice Approval

M-090 --- Default a New Document to Today

M-091 --- Record an Authorised Document-Date Change

M-092 --- Refuse an Unauthorised Document-Date Edit

M-093 --- Reject an Invalid Document Date

M-094 --- Post a Surcharge as a SQL SKU

M-095 --- Reject a Free-Text Surcharge

M-096 --- Flag a Missing or Inactive Surcharge SKU

**C-08 --- Returns, Product Master, and COA**

M-097 --- Carry Invoice Batch Numbers Into a Credit Note

M-098 --- Do Not Drop Credit-Note Batch Numbers

M-099 --- Reject an Unrelated Credit-Note Batch

M-100 --- Reject a Credit-Note Quantity Above the Invoice Returnable Quantity

M-101 --- Submit a Credit-Note Request as Sales

M-102 --- Confirm the Physical Returned Quantity

M-103 --- Issue a Credit Note After Return Confirmation

M-104 --- Refuse Sales From Issuing a Credit Note

M-105 --- Hold a Credit Note Until Return Quantity Is Confirmed

M-106 --- Prevent Sales From Cancelling a Delivered Return

M-107 --- Create an Item Through Finance or Admin

M-108 --- Refuse Item Creation by Sales or Logistics

M-109 --- Reject a Duplicate Item Code

M-110 --- Hold an Item With Missing Mandatory Master Fields

M-111 --- Upload and Link a Valid COA

M-112 --- Hold a COA With Missing Index Data

M-113 --- Reject a COA Linked to the Wrong Batch

**C-09 --- Tax Boundary and Finance Chatbot**

M-114 --- Apply C3 Exemption at Batch Level

M-115 --- Do Not Create Product-Level C3 Allocation

M-116 --- Reject C3 Exemption on the Wrong Batch

M-117 --- Keep SQL E-Invoice Processing Intact

M-118 --- Do Not Submit a Duplicate E-Invoice

M-119 --- Do Not Overwrite SQL Tax Data

M-120 --- Use the Finance Chatbot With Finance Access

M-121 --- Hide Restricted Finance Data From Sales

M-122 --- Keep the Finance Chatbot Available in Telegram

**C-10 --- Governance, Cutover, and Documents**

M-123 --- Confirm Every Required Role Has Executed Evidence

M-124 --- Record Client Sign-Off Through Maye

M-125 --- Do Not Claim Role Coverage With a Missing Role

M-126 --- Refuse Final Sign-Off With Incomplete Evidence

M-127 --- Refuse Final Sign-Off From the Wrong Person

M-128 --- Verify the Live SQL Cutover

M-129 --- Write One Controlled Transaction Only Once

M-130 --- Handle One Quotation Through Its Supported Workflow

M-131 --- Handle One CPO Through Its Supported Workflow

M-132 --- Handle One Sales Order Through Its Supported Workflow

M-133 --- Handle One Proforma invoice Through Its Supported Workflow

M-134 --- Handle One Delivery Order Through Its Supported Workflow

M-135 --- Handle One Picking list Through Its Supported Workflow

M-136 --- Handle One SQL invoice PDF Through Its Supported Workflow

M-137 --- Handle One Credit note Through Its Supported Workflow

M-138 --- Handle One Receipt Through Its Supported Workflow

M-139 --- Handle One COA Through Its Supported Workflow

M-140 --- Hold a Supported Document With Missing Required Data

M-141 --- Reject an Unsupported Document Request\
**Boss Fights**

BF-001 --- Run the Continuous Telegram Stress Test

BF-002 --- Recover After a Corrupt File

BF-003 --- Keep Two Active Order Conversations Separate

BF-004 --- Hard-Block a Duplicate Customer and PO

BF-005 --- Do Not Show a Wrong Description for the Correct SKU

BF-006 --- Block Credit at Sales Order Submission

BF-007 --- Reject a MAIA-Generated Invoice Substitute

BF-008 --- Keep Test-Only Data Out of Production

**PART A --- READ BEFORE YOU PLAY**

**Section 0 Cover and logistics**

**Project:** Mackessen × MAIA UAT\
**Product:** MAIA\
**Client:** Mackessen\
**Issued date:** \[NEEDS INPUT: ISSUED_DATE\]\
**Scope baseline:** Scope Lock v3.1 --- 13 July 2026\
**Test window:** \[NEEDS INPUT: TEST_WINDOW\]\
**Environment/access:** \[NEEDS INPUT: ENVIRONMENT_AND_ACCESS\]\
**Bug-reporting channel:** \[NEEDS INPUT: BUG_REPORTING_CHANNEL\]\
**Support channel:** \[NEEDS INPUT: SUPPORT_CHANNEL\]\
**UAT owner:** \[NEEDS INPUT: UAT_OWNER\]\
**Remote support:** \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\]\
**Time budget:** \[NEEDS INPUT: TIME_BUDGET_PER_TESTER\]\
**Input-docs folder:** \[NEEDS INPUT: INPUT_DOCS_FOLDER\]\
**Current folder contents:** \[NEEDS INPUT: CURRENT_INPUT_FOLDER_CONTENTS\]\
**Systems testers cannot access:** \[NEEDS INPUT: SYSTEMS_TESTERS_CANNOT_ACCESS\] --- testers must not inspect SQL, APIs, queues, logs, servers, or source code

**Section 1 How to test**

Open **one atomic mission**. Read **Your one job**, **Account to use**, **Start here**, and **This mission is complete when** before acting.

Use only the account named on that card. Do not change roles unless the card explicitly tests a handoff.

Use the exact prepared input or visible selection rule. Do not guess prices, permissions, dates, statuses, or master data.

Perform the numbered actions in order. Use your own wording only for chatbot messages.

Judge only what you can see through MAIA or Telegram. Backend checks become Product-Team / Client Handoffs.

Mark **Pass**, **Fail**, or the exact **Blocked** reason. Missing setup is not a Fail.

Capture the minimum evidence and stop at the card's completion sentence. Do not continue into the next workflow stage.

Optional exploration happens only after the main result is recorded and never changes that result.

***Five-minute blocker rule:** If you cannot start or continue because of access, data, configuration, environment, or dependency for more than five minutes, record the blocker and move to another mission.*

**Section 2 The client's world**

Mackessen runs an order-to-cash operation where customer purchase orders must become accurate Sales Orders, deliveries, invoices, receipts, and traceable quality records. Customer and item information, prices, credit, terms, invoices, and tax data depend on the existing SQL environment. MAIA is expected to coordinate work without becoming a conflicting second source of truth.

A normal day starts with a customer order arriving as text, a photo, or a PDF. Sales must identify the right customer and item, confirm customer-specific price and delivery details, and submit safely. Logistics needs a valid Sales Order before fulfilment. Finance and Credit Control enforce price, credit, payment-term, return, approval, and invoice rules. Management needs visible lifecycle status rather than disconnected records.

The operational pressure is not simply speed. **Mackessen fears bad automation more than missing automation.** A wrong customer, wrong SKU, duplicate PO, stale price, late credit block, wrong invoice PDF, lost batch number, or mixed chatbot context can create financial and fulfilment errors. The system must stop safely when information is missing or ambiguous and explain what the user must do next.

Success feels like this: a user submits one clear order, MAIA keeps the correct data and state, the next role sees exactly what it needs, exceptions go only to the permitted role, and every approval, warning, document, and correction remains traceable.

***Why this matters:** Mackessen will trust MAIA only when it reduces manual work **without weakening operational control**.*

**Section 3 Product and workflow map**

**What MAIA does in this phase**

MAIA is the user-facing coordination layer for Telegram order capture, workflow records, approvals, notifications, document access, and operational visibility. SQL remains authoritative for master and financial data.

**Main workflow**

A Sales user sends or uploads an order through Telegram or works through MAIA.

MAIA extracts the customer, items, quantity, PO, and delivery details and asks for correction when needed.

The customer order/CPO and Sales Order pass pricing, duplicate, credit, payment-term, and warning controls.

Logistics fulfils a valid Sales Order through Delivery Order and delivery updates.

Finance/Admin retrieves the original SQL invoice PDF, handles receipt and approved return/credit-note work.

Stock, delay, partial-delivery, and daily operational notifications keep the relevant users informed.

Management and UAT coordinators review lifecycle status and evidence.

**Must-not-miss rules**

**Telegram is the current go-live chatbot channel. WhatsApp is not a go-live blocker.**

**Same customer + same PO number is a hard duplicate block.**

**Credit blocks at Sales Order submission.**

**Low or zero stock may warn but must not block order submission.**

**Single-level invoice approval only.**

**Invoice PDF comes from SQL.**

**Sales requests credit notes; Finance/Admin issues only after physical return quantity confirmation.**

**C3 is batch-level only; no item-quantity reservation or product-level allocation for go-live.**

**Mackessen continues e-invoice processing in SQL.**

**Glossary**

  ------------------------------- -----------------------------------------------------------------------------
  Term                            Meaning

  CPO                             Customer Purchase Order record in the scoped workflow.

  SO                              Sales Order.

  DO                              Delivery Order.

  COA                             Certificate of Analysis.

  C3                              The scoped order tax-exemption handling, locked at batch level for go-live.

  SQL                             Mackessen's authoritative business-data environment.

  UAT                             User Acceptance Testing.

  PIC                             Person in Charge.
  ------------------------------- -----------------------------------------------------------------------------

**Section 4 Scope boundaries**

**In scope**

The active missions cover all **35 testable locked items**: order lifecycle, Telegram, extraction, duplicates, SQL-backed values, pricing, approvals, credit and payment terms, warnings, stock, scheduled summaries, delivery alerts, partial deliveries, customer/item fields, original invoice PDF, single approval, dates, surcharge SKUs, credit notes, item permissions, COA, batch-level C3, SQL e-invoice boundary, finance chatbot, short responses, stability, role coverage, cutover, and the supported document set.

**Needs scoping --- do not test as committed behaviour**

Final production role-permission matrix is still required. Test only the roles explicitly stated in a mission and mark missing mappings as Blocked.

Exact stress-test count/duration and numeric response-time target.

Correction-learning interval.

Precise digest selection rules where current configuration is not documented.

COA precedence where several certificates match.

**Out of scope**

WhatsApp activation for go-live.

Multi-level invoice approval.

C3 item-quantity reservation or product-level allocation.

Individualised reminder/digest redesign.

Moving e-invoice processing from SQL into MAIA.

Route optimisation, transporter sequencing, pallet/rack/location, FIFO/FEFO, batch-picking multi-select.

Automated bank reconciliation, forecasting, cross-sell/up-sell, pre-delivery reminders, RM200 minimum-delivery enforcement, automatic chatbot-to-website failover, five-minute SQL sync SLA, POD, multilingual chatbot, CRM, statement-of-account portal, custom calculators, and payment vouchers.

***Remember:** If an out-of-scope behaviour confuses you as the persona, record **Observation --- Out of Scope**, not Fail.*

**Product-Team / Client Handoffs**

Testers verify only visible MAIA/Telegram behaviour. Product/client owners must separately verify authoritative SQL changes, live-database write destination, e-invoice non-duplication, cutover connection, exact source PDF/version, and prepared date/credit/stock states.

**Section 5 Persona Cards**

**The Order Coordinator --- Sales User / Sales User**

**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]

**A day in my life**

I start with customer orders arriving as messages, photos, or PDFs. I need to identify the correct customer and items, use the visible customer-specific price, provide a unique PO number and delivery date, and submit only when the order is complete. When MAIA is unsure, I correct the input rather than letting it guess. I hand a valid submitted Sales Order to Logistics and request approvals from the named commercial or finance role.

**Rules I work by**

**Always:** Confirm customer, item, quantity, price, PO, delivery date, and visible status before submission.

**Never:** Invent missing master data, approve my own price exception, override credit/payment blocks, issue a credit note, or create an item code.

**I can approve:** None unless the final matrix explicitly says otherwise.

**I escalate to:** Sales Manager for price exceptions; Finance Manager/Credit Controller/Admin for credit/payment controls; Finance/Admin for credit notes.

**Core behaviours I must prove**

Fast order capture that remains safe when data is ambiguous, incomplete, duplicated, blocked, or unavailable.

**What I want from the product**

"Fast order capture that remains safe when data is ambiguous, incomplete, duplicated, blocked, or unavailable."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**The Commercial Gatekeeper --- Sales Manager / Sales Manager**

**Client role:** Sales Manager\
**Product role:** Sales Manager\
**Account to use:** \[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]

**A day in my life**

I review commercial exceptions that Sales cannot approve. My decision must release only the correct order and leave an audit trail. I may also edit a document date where the locked workflow permits it. I do not bypass unrelated finance or logistics rules.

**Rules I work by**

**Always:** Check the order reference, price exception, and visible approval state.

**Never:** Approve without seeing the correct order and reason.

**I can approve:** Below-minimum price exceptions; other rights depend on the final matrix.

**I escalate to:** Finance/Credit Control when the issue is credit or payment terms.

**Core behaviours I must prove**

A short, traceable approval action with no ambiguity about which order was released.

**What I want from the product**

"A short, traceable approval action with no ambiguity about which order was released."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**The Fulfilment Controller --- Logistics / Logistics**

**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]

**A day in my life**

I receive submitted Sales Orders and turn valid work into Delivery Orders and delivery updates. I must not fulfil a draft, blocked, or unapproved order. I track delayed and partial deliveries, confirm physical return quantities where assigned, and preserve the remaining quantity until the order is genuinely complete.

**Rules I work by**

**Always:** Open the exact Sales Order and confirm its visible status before fulfilment.

**Never:** Create a DO from an invalid SO or close an outstanding quantity without authority.

**I can approve:** Operational confirmations assigned by the final matrix, not commercial/finance exceptions.

**I escalate to:** Sales for order data; Finance/Admin for credit note issuance; Admin/product team for missing setup.

**Core behaviours I must prove**

Clear fulfilment state, correct remaining quantities, and alerts that point to the right delivery.

**What I want from the product**

"Clear fulfilment state, correct remaining quantities, and alerts that point to the right delivery."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**Irene, the Credit Gatekeeper --- Credit Controller / Credit Controller**

**Client role:** Credit Controller\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]

**A day in my life**

I enforce credit rules and receive operational alerts. My ability to override must come from my configured role, not my name or a remembered session. I need low-stock, out-of-stock, delay, and partial-delivery notifications to identify the correct record and clear only after valid resolution.

**Rules I work by**

**Always:** Confirm the customer/order and reason before an override.

**Never:** Assume permission remains after the role is removed.

**I can approve:** Credit overrides where the configured role permits.

**I escalate to:** Admin for role/configuration issues and Finance for broader payment decisions.

**Core behaviours I must prove**

Role-based control and concise alerts that make the next action obvious.

**What I want from the product**

"Role-based control and concise alerts that make the next action obvious."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**The Financial Control Desk --- Finance Manager / Finance or Admin**

**Client role:** Finance Manager / Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]

**A day in my life**

I work with credit/payment exceptions, invoices, receipts, approval, returns, credit notes, product-master controls, tax boundaries, and finance chatbot information. The original SQL invoice and batch traceability matter. I must not issue a credit note before the physical return is confirmed or expose restricted finance data to Sales.

**Rules I work by**

**Always:** Check document reference, amount, batch, approval state, return confirmation, and audit result.

**Never:** Serve a substitute invoice, duplicate e-invoice, wrong batch, or unauthorised finance data.

**I can approve:** Only the actions listed for my final role, including configured commercial/credit/invoice controls.

**I escalate to:** Client/product owner for authoritative SQL, tax, or cutover discrepancies.

**Core behaviours I must prove**

Financial controls that are exact, visible, and fully traceable.

**What I want from the product**

"Financial controls that are exact, visible, and fully traceable."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**The Quality Traceability Keeper --- Supply Chain / \[GAP: Product Role\]**

**Client role:** Supply Chain\
**Product role:** \[GAP: Product Role\]\
**Account to use:** \[GAP: mapped COA-capable account\]

**A day in my life**

I upload and index Certificates of Analysis and connect them to the correct item, batch, supplier, date, Delivery Order, or invoice. I need the product to stop when index data is missing or the batch does not match.

**Rules I work by**

**Always:** Verify item, batch, supplier, date, and related shipment before linking.

**Never:** Attach an incomplete or wrong-batch COA as valid evidence.

**I can approve:** None defined.

**I escalate to:** Product team until the final role mapping and ambiguous-match rule are confirmed.

**Core behaviours I must prove**

One searchable certificate linked only to the correct shipment and batch.

**What I want from the product**

"One searchable certificate linked only to the correct shipment and batch."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**The Operations Viewer --- Management / Management**

**Client role:** Management\
**Product role:** Management\
**Account to use:** \[NEEDS INPUT: MANAGEMENT_UAT_ACCOUNT\]

**A day in my life**

I need a reliable lifecycle and operational view without editing day-to-day work. I look for orders stuck in the wrong state, unpaid invoices, inactive customers, unclosed Sales Orders, reorder needs, and partial deliveries.

**Rules I work by**

**Always:** Use visible lifecycle and digest references.

**Never:** Treat missing or stale records as complete visibility.

**I can approve:** None defined in the locked scope.

**I escalate to:** The operational owner shown by the record and the UAT owner for missing coverage.

**Core behaviours I must prove**

A concise, complete view of current operational state.

**What I want from the product**

"A concise, complete view of current operational state."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**Maye, the Sign-off Coordinator --- Client UAT Coordinator / \[GAP\]**

**Client role:** Client UAT Coordinator\
**Product role:** \[GAP: sign-off account or method\]\
**Account to use:** \[GAP: confirm Maye's sign-off product account or external approval method\]

**A day in my life**

I coordinate client approval and make sure every required role has actually tested its work with evidence. I do not accept "seems okay" or a result pack missing a role, record, screenshot, or authorised approval.

**Rules I work by**

**Always:** Confirm role coverage, result classification, and evidence completeness.

**Never:** Accept incomplete evidence or sign-off outside the approved client process.

**I can approve:** Final client acceptance only through the agreed process.

**I escalate to:** Internal UAT owner and product/client owners for unresolved P1/P2 or blocking gaps.

**Core behaviours I must prove**

An honest, traceable sign-off pack showing what passed, failed, and remained blocked.

**What I want from the product**

"An honest, traceable sign-off pack showing what passed, failed, and remained blocked."

**What makes me trust it**

The visible record, role, status, message, and evidence all agree.

**What would make me stop trusting it**

Silent guessing, wrong data, skipped controls, unclear refusals, duplicates, or missing traceability.

**How I talk**

"Show me the exact record and what I need to do next."

"Why is this blocked, and who is allowed to release it?"

**Patience level and quirks**

I will follow direct steps, but I will not infer hidden rules or guess which record is safe.

↑ Back to Table of Contents

**Section 6 Trust Killers**

  -------------------------------------------------- ----------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Severity                                           Client-impact definition                                                      Mackessen examples

  **P1 --- Business-stopping or trust-destroying**   Work cannot safely continue or may create real financial/operational harm.    Wrong customer/item submitted, duplicate CPO/SO, missing/late credit block, invalid SO creates DO, unauthorised finance access, test data in production, mixed chatbot contexts, duplicate e-invoice.

  **P2 --- Serious operational risk**                Work continues only with major intervention or traceability is compromised.   Wrong/stale invoice PDF, wrong/dropped batches, wrong COA, lost partial quantity, incorrect alert clearing, missing digest category, missing audit.

  **P3 --- Workaround exists but causes friction**   Correct work remains possible but requires avoidable manual effort.           Unclear clarification, verbose reply, one missing notification channel, confusing address selection, unexplained late schedule.

  **P4 --- Cosmetic or minor usability issue**       Behaviour is correct and understandable.                                      Visual or wording issue that does not hide state, value, action, or evidence.
  -------------------------------------------------- ----------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**PART B --- CAMPAIGN AND MISSIONS**

**Section 7 Campaign coordination**

**Squad split**

**C-01 --- Order Relay:** Create, hand off, and view valid order records without skipping workflow states.

**C-02 --- Telegram Order Capture:** Use Telegram, extract text/photo/PDF orders, clarify ambiguity, and recover safely.

**C-03 --- Duplicate and Master-Data Control:** Protect customer, item, address, description, and duplicate-order integrity.

**C-04 --- Pricing, Credit, and Payment Gates:** Apply pricing, approval, credit-limit, and payment-term rules at the correct point.

**C-05 --- Warnings and Stock Signals:** Keep stock non-blocking while acknowledgements, alerts, and summaries remain traceable.

**C-06 --- Delivery and Daily Operations:** Track delayed and partial deliveries and produce the daily operational digest.

**C-07 --- Invoices, Dates, and Charges:** Retrieve the correct invoice, approve it once, date documents correctly, and post charges as SKUs.

**C-08 --- Returns, Product Master, and COA:** Control credit notes, item creation, batch traceability, and certificates of analysis.

**C-09 --- Tax Boundary and Finance Chatbot:** Respect batch-level C3 and SQL e-invoice boundaries while protecting finance data.

**C-10 --- Governance, Cutover, and Documents:** Prove role coverage, cut over safely, and handle every supported document type.

**Permission pairs**

Run the success and refusal as separate mission results: price approval, credit override, payment-term override, invoice approval, document-date edit, credit-note issuance, item creation, finance-chatbot access, and final sign-off authority.

**Remote testing support**

Ask in \[NEEDS INPUT: SUPPORT_CHANNEL\]. Include mission ID, role/account, reserved record, attempted action, visible result, timestamp, and screenshot. Use \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\] for screen sharing.

**Timebox protection**

***Five-minute blocker rule:** If setup, access, input, environment, or dependency prevents progress for more than five minutes, record the exact Blocked result and continue with another atomic mission.*

**Record reservation**

Reserve customer, PO, Sales Order, Delivery Order, invoice, item, batch, document, scheduled record, tester, mission, start time, and cleanup status. Concurrent tests must be intentionally coordinated.

**Section 8 Mission overview**

A campaign is navigation only. **Complete and record each atomic mission separately.**

  ---------- --------- ---------------------------------------------------------------------- ----------------------------- --------------------------------------------------------------------------------------------------------------------------------- ------------ --------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Campaign   Mission   Your one job                                                           Client role                   Product role/account                                                                                                              Type         Time                        Completion trigger

  C-01       M-001     Submit One Complete Sales Order.                                       Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     A Sales Order reference is created, the status is visibly submitted or ready for the next role, and the entered customer, item, quantity, price, PO number, and delivery date remain correct + screenshot

  C-01       M-002     Create a Delivery Order From a Valid Sales Order.                      Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Handoff      \~8 min                     A Delivery Order reference is created and linked to the same customer, Sales Order, items, and quantities + screenshot

  C-01       M-003     Retrieve the Invoice and Receipt for the Same Order.                   Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Handoff      \~8 min                     The invoice and receipt are visible, linked to the same order/customer, and show consistent document references and amounts + screenshot

  C-01       M-004     View the Complete Order Lifecycle.                                     Management                    Management / \[NEEDS INPUT: MANAGEMENT_UAT_ACCOUNT\]                                                                              Handoff      \~8 min                     The lifecycle appears in the correct sequence and the linked records belong to the same customer and order + screenshot

  C-01       M-005     Stop an Order With an Unknown Customer or Item.                        Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA does not invent a customer/item or submit to SQL + screenshot

  C-01       M-006     Refuse a Delivery Order From an Invalid Sales Order.                   Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Edge         \~6 min                     MAIA refuses the downstream action, shows the current blocking state, and creates no SQL DO + screenshot

  C-02       M-007     Create an Order Through Linked Telegram.                               Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     Telegram accepts the request and creates/opens the expected draft record + screenshot

  C-02       M-008     Continue UAT Without WhatsApp.                                         UAT lead                      \[GAP: UAT coordination role\] / \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]                                                               Edge         \~6 min                     The Telegram tests can proceed and WhatsApp unavailability is not marked as a go-live failure or blocker + screenshot

  C-02       M-009     Refuse an Unlinked Telegram User.                                      Unregistered Telegram user    Unlinked Telegram identity / \[NEEDS INPUT: UNLINKED_TELEGRAM_TEST_ACCOUNT\]                                                      Permission   \~8 min                     MAIA does not create an order + screenshot

  C-02       M-010     Complete this test and confirm the expected visible result.            Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     Customer is correct + screenshot

  C-02       M-011     Complete this test and confirm the expected visible result.            Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     Customer details auto-fill from SQL and extracted item lines count toward the ≥90% UAT item-accuracy result + screenshot

  C-02       M-012     Reach 90% Accuracy Across the PO Pack.                                 Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~25 min                    Customer extraction is correct for the test set and item-line accuracy is at least 90% + screenshot

  C-02       M-013     Clarify an Ambiguous Item.                                             Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA does not silently choose the wrong item + screenshot

  C-02       M-014     Reject an Unreadable Order File.                                       Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA clearly identifies the unreadable/missing fields, requests a better file or manual correction, and creates no submitted SO + screenshot

  C-02       M-015     Remember a Corrected Extraction.                                       Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     The same extraction mistake is not repeated + screenshot

  C-02       M-016     Return a Short Operational Chatbot Reply.                              Any operational user          Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Core         \~6 min                     Reply leads with the result/status and the next required action in short, scannable language + screenshot

  C-02       M-017     Do Not Return a Wall of Text.                                          Any operational user          Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Edge         \~6 min                     A long wall of text that hides the result or action is a Fail + screenshot

  C-02       M-018     Ask One Short Clarifying Question.                                     Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA asks one short, direct clarification and does not guess or produce an unnecessarily long explanation + screenshot

  C-02       BF-001    Run the Continuous Telegram Stress Test.                               Cross-functional UAT team     Role-matched MAIA accounts / \[NEEDS INPUT: CROSS_FUNCTIONAL_UAT_ACCOUNTS\]                                                       Regression   \~30 min                    No crash, lost request, duplicate document or cross-order contamination + screenshot

  C-02       BF-002    Complete this test and confirm the expected visible result.            Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Regression   \~10 min                    Bad file receives a clear error and does not crash/stall the bot or block later valid requests + screenshot

  C-02       BF-003    Keep Two Active Order Conversations Separate.                          Two Sales users               Two Sales User accounts / \[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]                                                        Regression   \~10 min                    MAIA keeps context separate + screenshot

  C-03       M-019     Allow the Same PO Number for Different Customers.                      Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     Both CPOs are allowed because the customers differ + screenshot

  C-03       BF-004    Hard-Block a Duplicate Customer and PO.                                Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Regression   \~10 min                    Creation is hard-blocked + screenshot

  C-03       M-020     Block the Second Concurrent Duplicate.                                 Two Sales users               Two Sales User accounts / \[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]                                                        Edge         \~12 min                    Only the first valid CPO is created + screenshot

  C-03       M-021     Refresh a Changed Customer Address.                                    Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The new prepared address is shown and is used in a fresh order + screenshot

  C-03       M-022     Refresh a Changed Item Description.                                    Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The new prepared item description is displayed in search and on the new draft line + screenshot

  C-03       M-023     Refresh a Changed Customer Price.                                      Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The documented new price is shown + screenshot

  C-03       M-024     Prevent a Conflicting Local Master Value.                              Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     MAIA either prevents the local conflict or clearly restores/uses the SQL value + screenshot

  C-03       M-025     Stop Safely When Authoritative Data Is Unavailable.                    Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA shows a clear sync/availability error and does not fabricate values or submit with unknown authoritative data + screenshot

  C-03       M-026     Auto-Fill All Required Customer Fields.                                Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     All five fields auto-fill from SQL and match the SQL customer master + screenshot

  C-03       M-027     Flag a Missing Customer Field.                                         Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA visibly flags the missing field and does not invent a value + screenshot

  C-03       M-028     Ask the User to Select From Multiple Addresses.                        Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA shows the SQL addresses and requires a clear selection/confirmation rather than silently choosing the wrong address + screenshot

  C-03       M-029     Show the SQL Item Description.                                         Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     MAIA displays the same SQL description and brand/context does not replace the authoritative item description + screenshot

  C-03       BF-005    Do Not Show a Wrong Description for the Correct SKU.                   Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Regression   \~10 min                    Any wrong, missing or conflicting description is a Fail even when the SKU code is correct + screenshot

  C-03       M-030     Refresh a Changed Item Description.                                    Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     New MAIA views/documents use the SQL description + screenshot

  C-04       M-031     Auto-Fill the Customer-Specific Price.                                 Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The unit price auto-fills exactly from the customer\'s SQL price record without manual lookup + screenshot

  C-04       M-032     Flag a Missing Customer Price.                                         Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     Missing pricing is visibly flagged + screenshot

  C-04       M-033     Refresh a Changed Customer Price.                                      Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     The current SQL customer price is shown + screenshot

  C-04       M-034     Submit a Below-Minimum Price Exception.                                Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The order does not proceed normally + screenshot

  C-04       M-035     Approve a Below-Minimum Price Exception.                               Sales Manager                 Sales Manager / \[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]                                                                        Permission   \~8 min                     The order is released from the price hold and the activity visibly records the approver, timestamp, and order reference + screenshot

  C-04       M-036     Refuse Sales Self-Approval of a Price Exception.                       Sales user                    Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Permission   \~8 min                     Approval is denied + screenshot

  C-04       M-037     Stop a Below-Minimum Order Without Approval.                           Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA refuses further processing until an authorized approval exists + screenshot

  C-04       M-038     See an Over-Limit Sales Order Blocked.                                 Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     Submission is blocked immediately at the Sales Order stage and a clear credit-approval requirement is shown + screenshot

  C-04       M-039     Override an Over-Limit Sales Order.                                    Finance Manager               Finance Manager / \[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]                                                                    Permission   \~8 min                     The Sales Order is released and the override log shows the approver, timestamp, reason where required, and order reference + screenshot

  C-04       M-040     Refuse a Sales Credit Override.                                        Sales user                    Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Permission   \~8 min                     Override is denied and SO remains blocked + screenshot

  C-04       M-041     Prevent Downstream Documents From a Credit-Blocked Order.              Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Edge         \~6 min                     No downstream document is created + screenshot

  C-04       BF-006    Block Credit at Sales Order Submission.                                UAT lead                      \[GAP: UAT coordination role\] / \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]                                                               Regression   \~10 min                    The block appears at SO submission, not only at invoice stage + screenshot

  C-04       M-042     Allow Irene to Override by Role.                                       Irene / Credit Controller     Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Core         \~6 min                     The action is allowed because of the role and is logged with Irene, timestamp and SO reference + screenshot

  C-04       M-043     Refuse an Unauthorised Credit Bypass.                                  Sales user                    Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Permission   \~8 min                     The action is denied and the SO remains blocked + screenshot

  C-04       M-044     Complete this test and confirm the expected visible result.            Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     Bypass is denied + screenshot

  C-04       M-045     Allow a Clear COD Customer to Order.                                   Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The order remains orderable and no payment-term block appears + screenshot

  C-04       M-046     Allow a 30-Day Customer at Day 30.                                     Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The order remains orderable and no premature block appears + screenshot

  C-04       M-047     Allow a 60-Day Customer at Day 60.                                     Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The order remains orderable and no premature block appears + screenshot

  C-04       M-048     Block a COD Customer With an Unpaid Invoice.                           Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     The customer is blocked from new orders until payment is cleared or an authorized override is logged + screenshot

  C-04       M-049     Show a 30-Day Alert on Day 31.                                         Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Edge         \~6 min                     A day-31 alert is visible, but the customer is not yet blocked + screenshot

  C-04       M-050     Block a 30-Day Customer on Day 61.                                     Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     The customer is blocked from the new order at submission and the payment-term reason is visible + screenshot

  C-04       M-051     Repeat the 30-Day Reminder After 14 Days.                              Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Edge         \~5 min + scheduled check   One repeat reminder is visible for the correct customer/invoice at the configured cadence + screenshot

  C-04       M-052     Override a 30-Day Payment Block.                                       Finance Manager               Finance Manager / \[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]                                                                    Permission   \~8 min                     The order is released and the override is logged against the correct user, time, and order + screenshot

  C-04       M-053     Show a 60-Day Alert on Day 61.                                         Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Edge         \~6 min                     A day-61 alert is visible, but the customer is not yet blocked + screenshot

  C-04       M-054     Block a 60-Day Customer on Day 91.                                     Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     The customer is blocked from the new order at submission and the payment-term reason is visible + screenshot

  C-04       M-055     Repeat the 60-Day Reminder After 14 Days.                              Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Edge         \~5 min + scheduled check   One repeat reminder is visible for the correct customer/invoice at the configured cadence + screenshot

  C-04       M-056     Override a 60-Day Payment Block.                                       Finance Manager               Finance Manager / \[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]                                                                    Permission   \~8 min                     The order is released and the override is logged against the correct user, time, and order + screenshot

  C-04       M-057     Refuse an Unauthorised Payment-Term Override.                          Sales user                    Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Permission   \~8 min                     Override is denied + screenshot

  C-05       M-058     Complete this test and confirm the expected visible result.            Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     Order can continue after acknowledgement + screenshot

  C-05       M-059     Require Warning Acknowledgement Before Continuing.                     Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA requires acknowledgement before continuing but does not convert the warning into a business block after acknowledgement + screenshot

  C-05       M-060     Record the Complete Warning Audit Entry.                               Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     Missing user, timestamp, warning type or order reference is a Fail + screenshot

  C-05       M-061     Submit an Order With Zero Stock.                                       Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     A stock warning may appear, but the SO remains orderable and can be submitted + screenshot

  C-05       M-062     Do Not Block an Order at Exactly Zero Stock.                           Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA must not hard-block because of stock quantity + screenshot

  C-05       M-063     Do Not Block an Order Below the Low-Stock Threshold.                   Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA must not hard-block the order + screenshot

  C-05       M-064     Save a Valid Low-Stock Threshold.                                      Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Core         \~6 min                     The threshold saves successfully and remains visible as 50 after refresh + screenshot

  C-05       M-065     Receive a Low-Stock Alert at Quantity 49.                              Irene / Credit Controller     Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Handoff      \~5 min + scheduled check   One low-stock alert for the correct item appears in both places and identifies the item correctly + screenshot

  C-05       M-066     Receive an Out-of-Stock Alert at Quantity Zero.                        Irene / Credit Controller     Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Handoff      \~5 min + scheduled check   One out-of-stock alert for the correct item appears in both places and identifies the item correctly + screenshot

  C-05       M-067     Reject an Invalid Stock Threshold.                                     Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     Invalid thresholds are rejected with a clear message + screenshot

  C-05       M-068     Complete this test and confirm the expected visible result.            Irene                         Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Edge         \~6 min                     Missing website alert, missing Telegram alert, or delivery to the wrong recipient is a Fail + screenshot

  C-05       M-069     Receive the 9:00 AM Stock Summary.                                     Irene / Credit Controller     Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Core         \~5 min + scheduled check   Summary has separate low-stock and out-of-stock sections and shows item code, SQL description and quantity for each + screenshot

  C-05       M-070     Run the Stock Summary Once at 9:00 AM.                                 Irene                         Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Edge         \~5 min + scheduled check   No summary at 9:00 AM, an unexplained late run, or duplicate daily runs is a Fail + screenshot

  C-05       M-071     Keep Stock Summary Values Consistent.                                  Irene                         Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Edge         \~6 min                     Mixed categories, missing code/description/quantity, or values that do not match SQL are a Fail + screenshot

  C-06       M-072     Receive a Delay Alert After More Than Three Days.                      Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Core         \~5 min + scheduled check   A delayed-delivery alert is visible through the website and chatbot for the correct delivery + screenshot

  C-06       M-073     Clear a Delay Alert After Valid Resolution.                            Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Recovery     \~8 min                     The alert clears for that delivery and does not remain active after the valid resolution + screenshot

  C-06       M-074     Do Not Alert at Exactly Three Days.                                    Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Edge         \~6 min                     No delayed-delivery alert is sent yet + screenshot

  C-06       M-075     Clear a Delay Alert Only After Valid Resolution.                       Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Edge         \~6 min                     The alert does not clear until this delivery is completed or validly rescheduled + screenshot

  C-06       M-076     Receive All Five Operational Digest Categories.                        Relevant team                 Permitted digest recipient role / \[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]                                                   Core         \~6 min                     All five categories are present with identifiable records/actions using current MAIA capability + screenshot

  C-06       M-077     Do Not Omit a Required Digest Category.                                Relevant team                 Permitted digest recipient role / \[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]                                                   Edge         \~6 min                     Any required category or qualifying record missing from the digest is a Fail + screenshot

  C-06       M-078     Run the Operations Digest Once at 9:00 AM.                             Relevant team                 Permitted digest recipient role / \[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]                                                   Edge         \~5 min + scheduled check   Digest is available at 9:00 AM once per scheduled day + screenshot

  C-06       M-079     Keep 400 kg Open After a 600 kg Delivery.                              Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Core         \~6 min                     The Sales Order remains open and shows 400 kg outstanding + screenshot

  C-06       M-080     Receive the Partial-Delivery Reminder.                                 Irene / Credit Controller     Credit Controller / \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]                                                                Handoff      \~5 min + scheduled check   A reminder identifies the correct order and the 400 kg remaining quantity + screenshot

  C-06       M-081     Stop the Reminder After the Final 400 kg.                              Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Recovery     \~5 min + scheduled check   Outstanding quantity becomes zero, the order completes, and the partial-delivery reminder stops + screenshot

  C-06       M-082     Keep the Remaining Partial-Delivery Quantity Open.                     Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Edge         \~6 min                     SO must not close or lose the remaining 400 kg + screenshot

  C-06       M-083     Refuse an Unauthorised Partial-Order Closure.                          Unauthorized user             Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Permission   \~8 min                     Closure is denied and reminders continue + screenshot

  C-07       M-084     Download the Original SQL Invoice PDF.                                 Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Core         \~6 min                     PDF is the SQL invoice PDF and matches the SQL invoice number, customer, lines, tax and total + screenshot

  C-07       BF-007    Reject a MAIA-Generated Invoice Substitute.                            Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Regression   \~10 min                    A MAIA-generated substitute template instead of the SQL PDF is a Fail + screenshot

  C-07       M-085     Download the Updated Current Invoice PDF.                              Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Recovery     \~8 min                     The downloaded file is the current matching invoice PDF and not the earlier version + screenshot

  C-07       M-086     Show a Clear Error When the Invoice PDF Is Unavailable.                Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Recovery     \~8 min                     A clear unavailable error appears + screenshot

  C-07       M-087     Complete Invoice Approval With One Approver.                           Authorized invoice approver   Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Core         \~6 min                     One valid approval completes the go-live approval requirement and records the approver/timestamp + screenshot

  C-07       M-088     Do Not Require a Second Invoice Approver.                              Authorized approver           Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Edge         \~6 min                     MAIA does not require a second approver + screenshot

  C-07       M-089     Refuse an Unauthorised Invoice Approval.                               Unauthorized user             Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Permission   \~8 min                     Approval is denied and invoice remains pending + screenshot

  C-07       M-090     Default a New Document to Today.                                       Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The document date defaults to the day the document is created + screenshot

  C-07       M-091     Record an Authorised Document-Date Change.                             Sales Manager                 Sales Manager / \[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]                                                                        Permission   \~8 min                     The new date saves and the history shows the user, old date, new date, timestamp, and document reference + screenshot

  C-07       M-092     Refuse an Unauthorised Document-Date Edit.                             Unauthorized role             Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Permission   \~8 min                     Date edit is denied and original date remains + screenshot

  C-07       M-093     Reject an Invalid Document Date.                                       Sales User                    Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     Invalid date is rejected with a clear message and no corrupt date posts downstream + screenshot

  C-07       M-094     Post a Surcharge as a SQL SKU.                                         Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     Surcharge appears as the correct SQL SKU, is included once in totals, and posts correctly downstream + screenshot

  C-07       M-095     Reject a Free-Text Surcharge.                                          Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA requires/flags the SQL surcharge SKU and does not post an arbitrary free-text charge as a valid item + screenshot

  C-07       M-096     Flag a Missing or Inactive Surcharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA visibly flags the missing/inactive SKU and does not substitute a wrong generic item + screenshot

  C-08       M-097     Carry Invoice Batch Numbers Into a Credit Note.                        Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Core         \~6 min                     Credit note carries the relevant invoice batch numbers and quantities + screenshot

  C-08       M-098     Do Not Drop Credit-Note Batch Numbers.                                 Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Edge         \~6 min                     Missing/dropped batch numbers are a Fail + screenshot

  C-08       M-099     Reject an Unrelated Credit-Note Batch.                                 Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Edge         \~6 min                     Batch C cannot be posted as an invoice-related return batch and a clear refusal or validation message appears + screenshot

  C-08       M-100     Reject a Credit-Note Quantity Above the Invoice Returnable Quantity.   Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Edge         \~6 min                     The excessive quantity is prevented or clearly flagged and the credit note cannot be issued with it + screenshot

  C-08       M-101     Submit a Credit-Note Request as Sales.                                 Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Handoff      \~8 min                     A request reference is created and remains pending for physical return confirmation + screenshot

  C-08       M-102     Confirm the Physical Returned Quantity.                                Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Handoff      \~8 min                     The return confirmation is visible on the request and is available for Finance/Admin review + screenshot

  C-08       M-103     Issue a Credit Note After Return Confirmation.                         Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Handoff      \~8 min                     The credit note is issued, links to the invoice, and uses the confirmed returned quantity + screenshot

  C-08       M-104     Refuse Sales From Issuing a Credit Note.                               Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Permission   \~8 min                     Creation/submission is denied + screenshot

  C-08       M-105     Hold a Credit Note Until Return Quantity Is Confirmed.                 Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Edge         \~6 min                     MAIA holds/refuses issuance until quantity confirmation is recorded + screenshot

  C-08       M-106     Prevent Sales From Cancelling a Delivered Return.                      Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Edge         \~6 min                     MAIA does not let Sales bypass the return/CN process + screenshot

  C-08       M-107     Create an Item Through Finance or Admin.                               Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Core         \~6 min                     Authorized creation succeeds and the item becomes available from the authoritative SQL-linked process without a conflicting duplicate + screenshot

  C-08       M-108     Refuse Item Creation by Sales or Logistics.                            Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Permission   \~8 min                     Creation is denied + screenshot

  C-08       M-109     Reject a Duplicate Item Code.                                          Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Edge         \~6 min                     The duplicate item is rejected and no second conflicting item appears + screenshot

  C-08       M-110     Hold an Item With Missing Mandatory Master Fields.                     Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Edge         \~6 min                     The item is rejected or held for correction and is not created as a valid master record + screenshot

  C-08       M-111     Upload and Link a Valid COA.                                           Supply Chain                  \[GAP: mapped COA-capable MAIA role\] / \[GAP: map Supply Chain client role to a MAIA product account before testing\]            Core         \~6 min                     COA is searchable by indexed fields, links to the correct DO/invoice, and MAIA prompts the user when relevant + screenshot

  C-08       M-112     Hold a COA With Missing Index Data.                                    Supply Chain                  \[GAP: mapped COA-capable MAIA role\] / \[GAP: map Supply Chain client role to a MAIA product account before testing\]            Edge         \~6 min                     MAIA flags missing index data and does not silently auto-link it to a shipment + screenshot

  C-08       M-113     Reject a COA Linked to the Wrong Batch.                                Supply Chain                  \[GAP: mapped COA-capable MAIA role\] / \[GAP: map Supply Chain client role to a MAIA product account before testing\]            Edge         \~6 min                     Mismatch is prevented or clearly flagged + screenshot

  C-09       M-114     Apply C3 Exemption at Batch Level.                                     Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Core         \~6 min                     C3/order tax exemption is applied and traceable at batch level + screenshot

  C-09       M-115     Do Not Create Product-Level C3 Allocation.                             Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     MAIA does not require or create those go-live behaviours + screenshot

  C-09       M-116     Reject C3 Exemption on the Wrong Batch.                                Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Edge         \~6 min                     MAIA prevents/flags the mismatch and does not apply C3 exemption to the wrong batch + screenshot

  C-09       M-117     Keep SQL E-Invoice Processing Intact.                                  Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Core         \~6 min                     SQL e-invoice process/status remains intact + screenshot

  C-09       M-118     Do Not Submit a Duplicate E-Invoice.                                   Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Edge         \~6 min                     MAIA does not submit a second e-invoice or migrate the process automatically + screenshot

  C-09       M-119     Do Not Overwrite SQL Tax Data.                                         Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     MAIA does not overwrite authoritative SQL tax data + screenshot

  C-09       M-120     Use the Finance Chatbot With Finance Access.                           Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Core         \~6 min                     Finance chatbot is available in current scope and returns the permitted operational result + screenshot

  C-09       M-121     Hide Restricted Finance Data From Sales.                               Sales user                    Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Permission   \~8 min                     Restricted data is not exposed + screenshot

  C-09       M-122     Keep the Finance Chatbot Available in Telegram.                        Finance                       Finance / \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]                                                                                    Edge         \~6 min                     A message that the finance chatbot is unavailable, future-only or WhatsApp-only is a Fail + screenshot

  C-10       M-123     Confirm Every Required Role Has Executed Evidence.                     UAT lead                      \[GAP: UAT coordination role\] / \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]                                                               Handoff      \~8 min                     Every required role group is visibly complete, or the register clearly remains incomplete for the missing role + screenshot

  C-10       M-124     Record Client Sign-Off Through Maye.                                   Maye                          \[GAP: sign-off account or method\] / \[GAP: confirm Maye's sign-off product account or external approval method\]                Handoff      \~8 min                     The final approval is traceable to Maye's coordination and the approved client process + screenshot

  C-10       M-125     Do Not Claim Role Coverage With a Missing Role.                        UAT lead                      \[GAP: UAT coordination role\] / \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]                                                               Edge         \~6 min                     Coverage remains incomplete/blocked + screenshot

  C-10       M-126     Refuse Final Sign-Off With Incomplete Evidence.                        UAT lead                      \[GAP: UAT coordination role\] / \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]                                                               Edge         \~6 min                     Final sign-off remains unavailable or incomplete and the missing evidence is visible + screenshot

  C-10       M-127     Refuse Final Sign-Off From the Wrong Person.                           Project team                  \[GAP: authorised sign-off role\] / \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]                                                            Permission   \~8 min                     The attempt is not accepted as final client sign-off and the approved Maye-coordinated process remains required + screenshot

  C-10       M-128     Complete this test and confirm the expected visible result.            Admin + client PIC            Admin + Role-matched MAIA account / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\] + \[NEEDS INPUT: CLIENT_PIC_ACCOUNT_OR_APPROVAL_METHOD\]   Core         \~20 min                    All records match live SQL and the environment/connection is clearly identified as production + screenshot

  C-10       BF-008    Keep Test-Only Data Out of Production.                                 Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Regression   \~10 min                    Test-only data is not visible in production + screenshot

  C-10       M-129     Complete this test and confirm the expected visible result.            Admin                         Admin / \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]                                                                                        Edge         \~6 min                     Transaction writes only to approved live SQL, not test SQL and not both + screenshot

  C-10       M-130     Handle One Quotation Through Its Supported Workflow.                   Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The Quotation is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-131     Handle One CPO Through Its Supported Workflow.                         Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The CPO is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-132     Handle One Sales Order Through Its Supported Workflow.                 Sales                         Sales User / \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                                                                                   Core         \~6 min                     The Sales Order is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-133     Handle One Proforma invoice Through Its Supported Workflow.            Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Core         \~6 min                     The Proforma invoice is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-134     Handle One Delivery Order Through Its Supported Workflow.              Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Core         \~6 min                     The Delivery Order is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-135     Handle One Picking list Through Its Supported Workflow.                Logistics                     Logistics / \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]                                                                                Core         \~6 min                     The Picking list is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-136     Handle One SQL invoice PDF Through Its Supported Workflow.             Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Core         \~6 min                     The SQL invoice PDF is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-137     Handle One Credit note Through Its Supported Workflow.                 Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Core         \~6 min                     The Credit note is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-138     Handle One Receipt Through Its Supported Workflow.                     Finance/Admin                 Finance or Admin / \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]                                                                     Core         \~6 min                     The Receipt is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-139     Handle One COA Through Its Supported Workflow.                         Supply Chain                  \[GAP: mapped COA-capable MAIA role\] / \[GAP: map Supply Chain client role to a MAIA product account before testing\]            Core         \~6 min                     The COA is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record + screenshot

  C-10       M-140     Hold a Supported Document With Missing Required Data.                  Relevant document owner       Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Edge         \~6 min                     MAIA keeps it draft or asks for correction + screenshot

  C-10       M-141     Reject an Unsupported Document Request.                                Any user                      Role-matched MAIA account / \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]                                                             Edge         \~6 min                     MAIA clearly says it is unsupported/not configured and does not mislabel another document as the requested one + screenshot
  ---------- --------- ---------------------------------------------------------------------- ----------------------------- --------------------------------------------------------------------------------------------------------------------------------- ------------ --------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Section 9 Atomic Mission Cards**

**C-01 --- Order Relay**

Create, hand off, and view valid order records without skipping workflow states.

**M-001 --- Submit One Complete Sales Order · ★ · \~6 min**

**Your one job:** Submit One Complete Sales Order.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Core order-to-delivery flow**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a reserved UAT customer with complete visible customer data, item MK-221 -- Food Grade Phosphate, normal price and credit, a unique PO number, quantity, and delivery date

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create the customer order/CPO, review the visible customer and item values, then submit the Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A Sales Order reference is created, the status is visibly submitted or ready for the next role, and the entered customer, item, quantity, price, PO number, and delivery date remain correct.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **a Sales Order reference is created, the status is visibly submitted or ready for the next role, and the entered customer, item, quantity, price, PO number, and delivery date remain correct**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-001 · LOCK-01

↑ Back to Table of Contents

**M-002 --- Create a Delivery Order From a Valid Sales Order · ★★ · \~8 min**

**Your one job:** Create a Delivery Order From a Valid Sales Order.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Core order-to-delivery flow**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the submitted Sales Order reference produced by a reserved Sales test. Its visible status must allow fulfilment

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the submitted Sales Order using the normal order-search function, create the Delivery Order, and save or submit it.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A Delivery Order reference is created and linked to the same customer, Sales Order, items, and quantities.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **a Delivery Order reference is created and linked to the same customer, Sales Order, items, and quantities**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-001 · LOCK-01

↑ Back to Table of Contents

**M-003 --- Retrieve the Invoice and Receipt for the Same Order · ★★ · \~8 min**

**Your one job:** Retrieve the Invoice and Receipt for the Same Order.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Core order-to-delivery flow**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a reserved order that has reached the finance-visible stage and has an invoice and receipt available through the scoped workflow

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the order or invoice record, view or download the invoice, then open the related receipt.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The invoice and receipt are visible, linked to the same order/customer, and show consistent document references and amounts.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the invoice and receipt are visible, linked to the same order/customer, and show consistent document references and amounts**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-001 · LOCK-01

↑ Back to Table of Contents

**M-004 --- View the Complete Order Lifecycle · ★★ · \~8 min**

**Your one job:** View the Complete Order Lifecycle.\
**Client role:** Management\
**Product role:** Management\
**Account to use:** \[NEEDS INPUT: MANAGEMENT_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Core order-to-delivery flow**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use one reserved order that has visible CPO, Sales Order, Delivery Order, invoice, and receipt stages completed or available

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: MANAGEMENT_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the order lifecycle view and review the visible stages and linked document references.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The lifecycle appears in the correct sequence and the linked records belong to the same customer and order.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the lifecycle appears in the correct sequence and the linked records belong to the same customer and order**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: MANAGEMENT_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-001 · LOCK-01

↑ Back to Table of Contents

**M-005 --- Stop an Order With an Unknown Customer or Item · ★ · \~6 min**

**Your one job:** Stop an Order With an Unknown Customer or Item.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Core order-to-delivery flow** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Order message contains a customer or item that does not exist in SQL

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send the order and try to continue to SO submission.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not invent a customer/item or submit to SQL.

It keeps the record unsubmitted and clearly asks the user to correct or select valid SQL data.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not invent a customer/item or submit to SQL**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-001 · LOCK-01

↑ Back to Table of Contents

**M-006 --- Refuse a Delivery Order From an Invalid Sales Order · ★ · \~6 min**

**Your one job:** Refuse a Delivery Order From an Invalid Sales Order.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Core order-to-delivery flow** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** CPO exists but SO is still draft, blocked or unapproved

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Try to create/submit the DO before the SO is validly submitted.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA refuses the downstream action, shows the current blocking state, and creates no SQL DO.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA refuses the downstream action, shows the current blocking state, and creates no SQL DO**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-002 · LOCK-01

↑ Back to Table of Contents

**C-02 --- Telegram Order Capture**

Use Telegram, extract text/photo/PDF orders, clarify ambiguity, and recover safely.

**M-007 --- Create an Order Through Linked Telegram · ★ · \~6 min**

**Your one job:** Create an Order Through Linked Telegram.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Telegram go-live channel**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Sales user\'s Telegram account is linked to MAIA

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send a normal order command in Telegram and open the returned MAIA record.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Telegram accepts the request and creates/opens the expected draft record.

No WhatsApp step is required.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **telegram accepts the request and creates/opens the expected draft record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-002 · LOCK-02

↑ Back to Table of Contents

**M-008 --- Continue UAT Without WhatsApp · ★ · \~6 min**

**Your one job:** Continue UAT Without WhatsApp.\
**Client role:** UAT lead\
**Product role:** \[GAP: UAT coordination role\]\
**Account to use:** \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Telegram go-live channel** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** WhatsApp remains unavailable

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Run the Telegram go-live test pack and record WhatsApp as unavailable.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Telegram tests can proceed and WhatsApp unavailability is not marked as a go-live failure or blocker.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the Telegram tests can proceed and WhatsApp unavailability is not marked as a go-live failure or blocker**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-003 · LOCK-02

↑ Back to Table of Contents

**M-009 --- Refuse an Unlinked Telegram User · ★★ · \~8 min**

**Your one job:** Refuse an Unlinked Telegram User.\
**Client role:** Unregistered Telegram user\
**Product role:** Unlinked Telegram identity\
**Account to use:** \[NEEDS INPUT: UNLINKED_TELEGRAM_TEST_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Telegram go-live channel** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Telegram account is not linked to a MAIA user

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: UNLINKED_TELEGRAM_TEST_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send an order-creation command.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not create an order.

It gives a clear access/linking message without exposing customer or order data.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not create an order**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: UNLINKED_TELEGRAM_TEST_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-004 · LOCK-02

↑ Back to Table of Contents

**M-010 --- Extract One Text Order · ★ · \~6 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Order extraction**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Client-provided text test: confirmed SQL customer

**Item, document, or state:** item MK-221

**Quantity or value:** quantity 25 kg

**Other required condition:** delivery date

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send the complete order as free-form Telegram text, then open the extracted CPO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Customer is correct.

SQL contact/address auto-fill.

Item, quantity and date match the message.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **customer is correct**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-003 · LOCK-03

↑ Back to Table of Contents

**M-011 --- Extract One Photo Order · ★ · \~6 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Order extraction**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Client-provided clear photo/handwritten order using a confirmed SQL customer and known SQL items

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Upload photo in Telegram, request order extraction, review the CPO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Customer details auto-fill from SQL and extracted item lines count toward the ≥90% UAT item-accuracy result.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **customer details auto-fill from SQL and extracted item lines count toward the ≥90% UAT item-accuracy result**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-004 · LOCK-03

↑ Back to Table of Contents

**M-012 --- Reach 90% Accuracy Across the PO Pack · ★★★ · \~25 min**

**Your one job:** Reach 90% Accuracy Across the PO Pack.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Order extraction**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Client-provided PDF/PO pack of at least 10 representative orders

**Item, document, or state:** expected item lines prepared by client

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Upload each PDF through Telegram, review extraction, and calculate correct item lines ÷ total item lines.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Customer extraction is correct for the test set and item-line accuracy is at least 90%.

No submitted order bypasses review.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **customer extraction is correct for the test set and item-line accuracy is at least 90%**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-005 · LOCK-03

↑ Back to Table of Contents

**M-013 --- Clarify an Ambiguous Item · ★ · \~6 min**

**Your one job:** Clarify an Ambiguous Item.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Order extraction** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the observed ambiguous phrase \'roasted chicken seasoning\' where SQL contains several similar products (verify exact live codes, e.g. CR005P/EX03)

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send the order without a unique code and review the extraction.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not silently choose the wrong item.

It asks a short clarification or flags the ambiguous line for human correction before submission.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not silently choose the wrong item**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-005 · LOCK-03

↑ Back to Table of Contents

**M-014 --- Reject an Unreadable Order File · ★ · \~6 min**

**Your one job:** Reject an Unreadable Order File.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Order extraction** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Blurred/cropped photo or PDF with unreadable customer/PO/item data

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Upload the file and request CPO creation.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA clearly identifies the unreadable/missing fields, requests a better file or manual correction, and creates no submitted SO.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA clearly identifies the unreadable/missing fields, requests a better file or manual correction, and creates no submitted SO**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-006 · LOCK-03

↑ Back to Table of Contents

**M-015 --- Remember a Corrected Extraction · ★ · \~6 min**

**Your one job:** Remember a Corrected Extraction.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Order extraction** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use an input that was previously extracted wrongly, then corrected and saved as the approved correction example

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Repeat the same wording/file after the correction-learning period configured for UAT.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The same extraction mistake is not repeated.

If confidence is still low, MAIA asks for review rather than reverting to the known wrong mapping.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **the same extraction mistake is not repeated**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-007 · LOCK-03

↑ Back to Table of Contents

**M-016 --- Return a Short Operational Chatbot Reply · ★ · \~6 min**

**Your one job:** Return a Short Operational Chatbot Reply.\
**Client role:** Any operational user\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Short chatbot responses**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Simple query such as \'Show unpaid invoices for \[test customer\]\' or \'Create order for \[customer\]\'

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send the routine query.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Reply leads with the result/status and the next required action in short, scannable language.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **reply leads with the result/status and the next required action in short, scannable language**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-033 · LOCK-32

↑ Back to Table of Contents

**M-017 --- Do Not Return a Wall of Text · ★ · \~6 min**

**Your one job:** Do Not Return a Wall of Text.\
**Client role:** Any operational user\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Short chatbot responses** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Simple routine query

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send query and review response length/structure.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A long wall of text that hides the result or action is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **a long wall of text that hides the result or action is a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-066 · LOCK-32

↑ Back to Table of Contents

**M-018 --- Ask One Short Clarifying Question · ★ · \~6 min**

**Your one job:** Ask One Short Clarifying Question.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Short chatbot responses** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Ambiguous message mentioning two customers/orders or a non-unique item

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send message without enough context.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA asks one short, direct clarification and does not guess or produce an unnecessarily long explanation.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA asks one short, direct clarification and does not guess or produce an unnecessarily long explanation**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-067 · LOCK-32

↑ Back to Table of Contents

**C-03 --- Duplicate and Master-Data Control**

Protect customer, item, address, description, and duplicate-order integrity.

**M-019 --- Allow the Same PO Number for Different Customers · ★ · \~6 min**

**Your one job:** Allow the Same PO Number for Different Customers.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Duplicate PO hard block**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Customer A and Customer B in SQL

**Item, document, or state:** use the same PO number PO-TEST-001 for both

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create CPO for Customer A, then create CPO for Customer B with the same PO number.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Both CPOs are allowed because the customers differ.

Each points to the correct customer.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **both CPOs are allowed because the customers differ**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-006 · LOCK-04

↑ Back to Table of Contents

**M-020 --- Block the Second Concurrent Duplicate · ★★★ · \~12 min**

**Your one job:** Block the Second Concurrent Duplicate.\
**Client role:** Two Sales users\
**Product role:** Two Sales User accounts\
**Account to use:** \[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Duplicate PO hard block** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Both users have the same Customer A + PO-TEST-003 and submit within the same test window

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]**.

Confirm the visible record or starting state matches the **Start here** section.

Submit from both accounts as close together as practical.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Only the first valid CPO is created.

The second is hard-blocked and linked to the existing record.

No duplicate downstream order exists.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **only the first valid CPO is created**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-009 · LOCK-04

↑ Back to Table of Contents

**M-021 --- Refresh a Changed Customer Address · ★ · \~6 min**

**Your one job:** Refresh a Changed Customer Address.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **SQL source of truth**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Product team prepares one reserved customer and records the expected new visible address after an approved authoritative-data change

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the customer or start a new order after the refresh/sync point and inspect the auto-filled address.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The new prepared address is shown and is used in a fresh order.

The previous address is not presented as current.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the new prepared address is shown and is used in a fresh order**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-007 · LOCK-05

↑ Back to Table of Contents

**M-022 --- Refresh a Changed Item Description · ★ · \~6 min**

**Your one job:** Refresh a Changed Item Description.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **SQL source of truth**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Product team prepares one UAT item with a documented new visible description after an approved authoritative-data change

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Search for the prepared item and add it to a fresh draft.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The new prepared item description is displayed in search and on the new draft line.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the new prepared item description is displayed in search and on the new draft line**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-007 · LOCK-05

↑ Back to Table of Contents

**M-023 --- Refresh a Changed Customer Price · ★ · \~6 min**

**Your one job:** Refresh a Changed Customer Price.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **SQL source of truth**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Product team prepares one customer/item pair with a documented new visible price after an approved authoritative-data change

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create a fresh order for that customer and item and inspect the auto-filled unit price.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The documented new price is shown.

The previous cached price is not used.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the documented new price is shown**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-007 · LOCK-05

↑ Back to Table of Contents

**M-024 --- Prevent a Conflicting Local Master Value · ★ · \~6 min**

**Your one job:** Prevent a Conflicting Local Master Value.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **SQL source of truth** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** A MAIA field can be locally edited while SQL has a different authoritative value

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to save a conflicting production copy in MAIA, then refresh from SQL.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA either prevents the local conflict or clearly restores/uses the SQL value.

No hidden second production master remains.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA either prevents the local conflict or clearly restores/uses the SQL value**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-010 · LOCK-05

↑ Back to Table of Contents

**M-025 --- Stop Safely When Authoritative Data Is Unavailable · ★ · \~6 min**

**Your one job:** Stop Safely When Authoritative Data Is Unavailable.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **SQL source of truth** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Temporarily use a controlled SQL-connection failure or stale-sync test condition

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open customer/item/order data and try to submit an order that depends on unavailable authoritative values.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA shows a clear sync/availability error and does not fabricate values or submit with unknown authoritative data.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA shows a clear sync/availability error and does not fabricate values or submit with unknown authoritative data**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-011 · LOCK-05

↑ Back to Table of Contents

**M-026 --- Auto-Fill All Required Customer Fields · ★ · \~6 min**

**Your one job:** Auto-Fill All Required Customer Fields.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Customer master fields**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Confirmed SQL customer with name, address, contact number, email and TIN

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Select/extract the customer into a CPO/SO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

All five fields auto-fill from SQL and match the SQL customer master.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **all five fields auto-fill from SQL and match the SQL customer master**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-020 · LOCK-18

↑ Back to Table of Contents

**M-027 --- Flag a Missing Customer Field · ★ · \~6 min**

**Your one job:** Flag a Missing Customer Field.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Customer master fields** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** SQL UAT customer is missing one required field, e.g. TIN or email

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create an order and review customer details.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA visibly flags the missing field and does not invent a value.

Submission behaviour follows the configured required-field rule.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA visibly flags the missing field and does not invent a value**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-039 · LOCK-18

↑ Back to Table of Contents

**M-028 --- Ask the User to Select From Multiple Addresses · ★ · \~6 min**

**Your one job:** Ask the User to Select From Multiple Addresses.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Customer master fields** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Customer has multiple valid SQL delivery addresses

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create an order without specifying which address.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA shows the SQL addresses and requires a clear selection/confirmation rather than silently choosing the wrong address.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA shows the SQL addresses and requires a clear selection/confirmation rather than silently choosing the wrong address**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-040 · LOCK-18

↑ Back to Table of Contents

**M-029 --- Show the SQL Item Description · ★ · \~6 min**

**Your one job:** Show the SQL Item Description.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **SQL item descriptions**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** SQL item MK-221 has description \'Food Grade Phosphate\'

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Search/select MK-221 in MAIA.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA displays the same SQL description and brand/context does not replace the authoritative item description.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **MAIA displays the same SQL description and brand/context does not replace the authoritative item description**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-021 · LOCK-19

↑ Back to Table of Contents

**M-030 --- Refresh a Changed Item Description · ★ · \~6 min**

**Your one job:** Refresh a Changed Item Description.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **SQL item descriptions** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Change a UAT item description in SQL after an older MAIA value exists

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Refresh and generate a new draft/document line.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

New MAIA views/documents use the SQL description.

The stale local description is not retained as production truth.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **new MAIA views/documents use the SQL description**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-042 · LOCK-19

↑ Back to Table of Contents

**C-04 --- Pricing, Credit, and Payment Gates**

Apply pricing, approval, credit-limit, and payment-term rules at the correct point.

**M-031 --- Auto-Fill the Customer-Specific Price · ★ · \~6 min**

**Your one job:** Auto-Fill the Customer-Specific Price.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Customer-specific pricing**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Confirmed SQL customer with a customer-specific price for MK-221

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Select the customer and MK-221 in a new order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The unit price auto-fills exactly from the customer\'s SQL price record without manual lookup.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the unit price auto-fills exactly from the customer\'s SQL price record without manual lookup**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-008 · LOCK-06

↑ Back to Table of Contents

**M-032 --- Flag a Missing Customer Price · ★ · \~6 min**

**Your one job:** Flag a Missing Customer Price.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Customer-specific pricing** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Confirmed SQL customer/item combination with no customer-specific price

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Add the item to an order and review the unit price.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Missing pricing is visibly flagged.

MAIA does not silently use zero, a guessed price or another customer\'s price.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **missing pricing is visibly flagged**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-012 · LOCK-06

↑ Back to Table of Contents

**M-033 --- Refresh a Changed Customer Price · ★ · \~6 min**

**Your one job:** Refresh a Changed Customer Price.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Customer-specific pricing** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Change the designated customer\'s SQL price after an earlier MAIA draft/cache exists

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create a fresh order or refresh the line.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The current SQL customer price is shown.

An old local/cached price is not treated as authoritative.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **the current SQL customer price is shown**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-013 · LOCK-06

↑ Back to Table of Contents

**M-034 --- Submit a Below-Minimum Price Exception · ★ · \~6 min**

**Your one job:** Submit a Below-Minimum Price Exception.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Minimum-price approval**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a reserved customer/item with a configured minimum selling price and enter a lower test price

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create the order line at the below-minimum price and submit the exception for approval.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The order does not proceed normally.

It shows a visible pending-approval or held state with an order reference.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the order does not proceed normally**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-009 · LOCK-07

↑ Back to Table of Contents

**M-035 --- Approve a Below-Minimum Price Exception · ★★ · \~8 min**

**Your one job:** Approve a Below-Minimum Price Exception.\
**Client role:** Sales Manager\
**Product role:** Sales Manager\
**Account to use:** \[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This is the normal user-facing behaviour for **Minimum-price approval**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the pending price-exception reference created by a Sales tester and an approved Sales Manager account

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the pending exception, review it, and approve it.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The order is released from the price hold and the activity visibly records the approver, timestamp, and order reference.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the order is released from the price hold and the activity visibly records the approver, timestamp, and order reference**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-009 · LOCK-07

↑ Back to Table of Contents

**M-036 --- Refuse Sales Self-Approval of a Price Exception · ★★ · \~8 min**

**Your one job:** Refuse Sales Self-Approval of a Price Exception.\
**Client role:** Sales user\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Minimum-price approval** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Below-minimum-price order is waiting for approval

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

The Sales user attempts to approve their own exception.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Approval is denied.

Order remains locked and the attempt is visible in the audit trail if configured.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **approval is denied**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-014 · LOCK-07

↑ Back to Table of Contents

**M-037 --- Stop a Below-Minimum Order Without Approval · ★ · \~6 min**

**Your one job:** Stop a Below-Minimum Order Without Approval.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Minimum-price approval** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Below-minimum-price order has no approval

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Try to submit or generate downstream documents.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA refuses further processing until an authorized approval exists.

It does not auto-approve or silently accept the price.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA refuses further processing until an authorized approval exists**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-015 · LOCK-07

↑ Back to Table of Contents

**M-038 --- See an Over-Limit Sales Order Blocked · ★ · \~6 min**

**Your one job:** See an Over-Limit Sales Order Blocked.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Credit-limit block at SO submission**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the prepared customer with credit limit RM30,000 and exposure RM32,000, or another documented over-limit UAT customer

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create an otherwise valid order and submit the Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Submission is blocked immediately at the Sales Order stage and a clear credit-approval requirement is shown.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **submission is blocked immediately at the Sales Order stage and a clear credit-approval requirement is shown**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-010 · LOCK-08

↑ Back to Table of Contents

**M-039 --- Override an Over-Limit Sales Order · ★★ · \~8 min**

**Your one job:** Override an Over-Limit Sales Order.\
**Client role:** Finance Manager\
**Product role:** Finance Manager\
**Account to use:** \[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This is the normal user-facing behaviour for **Credit-limit block at SO submission**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the blocked Sales Order reference from the prepared over-limit test and an authorised Finance Manager account

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the blocked Sales Order, enter any required reason, and approve or override the credit block.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Sales Order is released and the override log shows the approver, timestamp, reason where required, and order reference.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Sales Order is released and the override log shows the approver, timestamp, reason where required, and order reference**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-010 · LOCK-08

↑ Back to Table of Contents

**M-040 --- Refuse a Sales Credit Override · ★★ · \~8 min**

**Your one job:** Refuse a Sales Credit Override.\
**Client role:** Sales user\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Credit-limit block at SO submission** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Same over-limit customer and blocked SO

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Sales attempts to override or continue.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Override is denied and SO remains blocked.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **override is denied and SO remains blocked**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-016 · LOCK-08

↑ Back to Table of Contents

**M-041 --- Prevent Downstream Documents From a Credit-Blocked Order · ★ · \~6 min**

**Your one job:** Prevent Downstream Documents From a Credit-Blocked Order.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Credit-limit block at SO submission** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Over-limit SO is blocked and has no approved override

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Try to create DO or invoice from the blocked SO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

No downstream document is created.

The user is directed to the credit approval requirement.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **no downstream document is created**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-017 · LOCK-08

↑ Back to Table of Contents

**M-042 --- Allow Irene to Override by Role · ★ · \~6 min**

**Your one job:** Allow Irene to Override by Role.\
**Client role:** Irene / Credit Controller\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Credit Controller bypass by role**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Irene\'s test account is assigned the authorized Credit Controller role

**Item, document, or state:** over-limit SO exists

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Approve/bypass the credit block from Irene\'s account.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The action is allowed because of the role and is logged with Irene, timestamp and SO reference.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the action is allowed because of the role and is logged with Irene, timestamp and SO reference**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-011 · LOCK-09

↑ Back to Table of Contents

**M-043 --- Refuse an Unauthorised Credit Bypass · ★★ · \~8 min**

**Your one job:** Refuse an Unauthorised Credit Bypass.\
**Client role:** Sales user\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Credit Controller bypass by role** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Sales account has no authorized override role

**Item, document, or state:** over-limit SO exists

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt the same bypass/approval.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The action is denied and the SO remains blocked.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the action is denied and the SO remains blocked**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-019 · LOCK-09

↑ Back to Table of Contents

**M-044 --- Remove Irene's Bypass When Her Role Is Removed · ★ · \~6 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Credit Controller bypass by role** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Temporarily remove the Credit Controller/authorized role from Irene\'s UAT account

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Log back in and attempt bypass.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Bypass is denied.

Permission follows configured role, not the person\'s name or prior session.

Restore role after test.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **bypass is denied**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-020 · LOCK-09

↑ Back to Table of Contents

**M-045 --- Allow a Clear COD Customer to Order · ★ · \~6 min**

**Your one job:** Allow a Clear COD Customer to Order.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Payment-term enforcement**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared COD customer with no unpaid invoice

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create and submit a normal Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The order remains orderable and no payment-term block appears.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the order remains orderable and no payment-term block appears**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-012 · LOCK-10

↑ Back to Table of Contents

**M-046 --- Allow a 30-Day Customer at Day 30 · ★ · \~6 min**

**Your one job:** Allow a 30-Day Customer at Day 30.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Payment-term enforcement**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 30-day customer whose oldest relevant unpaid invoice is exactly 30 days old

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create and submit a normal Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The order remains orderable and no premature block appears.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the order remains orderable and no premature block appears**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-012 · LOCK-10

↑ Back to Table of Contents

**M-047 --- Allow a 60-Day Customer at Day 60 · ★ · \~6 min**

**Your one job:** Allow a 60-Day Customer at Day 60.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Payment-term enforcement**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 60-day customer whose oldest relevant unpaid invoice is exactly 60 days old

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create and submit a normal Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The order remains orderable and no premature block appears.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the order remains orderable and no premature block appears**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-012 · LOCK-10

↑ Back to Table of Contents

**M-048 --- Block a COD Customer With an Unpaid Invoice · ★ · \~6 min**

**Your one job:** Block a COD Customer With an Unpaid Invoice.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** COD customer has any unpaid invoice in SQL

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Submit a new SO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The customer is blocked from new orders until payment is cleared or an authorized override is logged.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the customer is blocked from new orders until payment is cleared or an authorized override is logged**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-021 · LOCK-10

↑ Back to Table of Contents

**M-049 --- Show a 30-Day Alert on Day 31 · ★ · \~6 min**

**Your one job:** Show a 30-Day Alert on Day 31.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 30-day customer with a relevant unpaid invoice exactly 31 days old

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the customer/payment-term alert view or receive the configured notification and then confirm the customer can still place an order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A day-31 alert is visible, but the customer is not yet blocked.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **a day-31 alert is visible, but the customer is not yet blocked**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-022 · LOCK-10

↑ Back to Table of Contents

**M-050 --- Block a 30-Day Customer on Day 61 · ★ · \~6 min**

**Your one job:** Block a 30-Day Customer on Day 61.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 30-day customer with a relevant unpaid invoice exactly 61 days old

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create an otherwise valid order and submit the Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The customer is blocked from the new order at submission and the payment-term reason is visible.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the customer is blocked from the new order at submission and the payment-term reason is visible**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-022 · LOCK-10

↑ Back to Table of Contents

**M-051 --- Repeat the 30-Day Reminder After 14 Days · ★★ · \~5 min + scheduled check**

**Your one job:** Repeat the 30-Day Reminder After 14 Days.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 30-day overdue record that has already produced its first reminder and has reached the configured 14-day repeat point

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or receive the next scheduled reminder for the same customer/invoice.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

One repeat reminder is visible for the correct customer/invoice at the configured cadence.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **one repeat reminder is visible for the correct customer/invoice at the configured cadence**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-022 · LOCK-10

↑ Back to Table of Contents

**M-052 --- Override a 30-Day Payment Block · ★★ · \~8 min**

**Your one job:** Override a 30-Day Payment Block.\
**Client role:** Finance Manager\
**Product role:** Finance Manager\
**Account to use:** \[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a Sales Order blocked by the 30-day payment rule and an authorised override account

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the blocked order, provide any required reason, and approve the override.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The order is released and the override is logged against the correct user, time, and order.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **the order is released and the override is logged against the correct user, time, and order**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-022 · LOCK-10

↑ Back to Table of Contents

**M-053 --- Show a 60-Day Alert on Day 61 · ★ · \~6 min**

**Your one job:** Show a 60-Day Alert on Day 61.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 60-day customer with a relevant unpaid invoice exactly 61 days old

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the customer/payment-term alert view or receive the configured notification and then confirm the customer can still place an order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A day-61 alert is visible, but the customer is not yet blocked.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **a day-61 alert is visible, but the customer is not yet blocked**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-023 · LOCK-10

↑ Back to Table of Contents

**M-054 --- Block a 60-Day Customer on Day 91 · ★ · \~6 min**

**Your one job:** Block a 60-Day Customer on Day 91.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 60-day customer with a relevant unpaid invoice exactly 91 days old

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create an otherwise valid order and submit the Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The customer is blocked from the new order at submission and the payment-term reason is visible.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the customer is blocked from the new order at submission and the payment-term reason is visible**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-023 · LOCK-10

↑ Back to Table of Contents

**M-055 --- Repeat the 60-Day Reminder After 14 Days · ★★ · \~5 min + scheduled check**

**Your one job:** Repeat the 60-Day Reminder After 14 Days.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared 60-day overdue record that has already produced its first reminder and has reached the configured 14-day repeat point

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or receive the next scheduled reminder for the same customer/invoice.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

One repeat reminder is visible for the correct customer/invoice at the configured cadence.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **one repeat reminder is visible for the correct customer/invoice at the configured cadence**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-023 · LOCK-10

↑ Back to Table of Contents

**M-056 --- Override a 60-Day Payment Block · ★★ · \~8 min**

**Your one job:** Override a 60-Day Payment Block.\
**Client role:** Finance Manager\
**Product role:** Finance Manager\
**Account to use:** \[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a Sales Order blocked by the 60-day payment rule and an authorised override account

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the blocked order, provide any required reason, and approve the override.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The order is released and the override is logged against the correct user, time, and order.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **the order is released and the override is logged against the correct user, time, and order**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_MANAGER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-023 · LOCK-10

↑ Back to Table of Contents

**M-057 --- Refuse an Unauthorised Payment-Term Override · ★★ · \~8 min**

**Your one job:** Refuse an Unauthorised Payment-Term Override.\
**Client role:** Sales user\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Payment-term enforcement** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Payment-term block is active

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to override without an authorized role.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Override is denied.

No new SO proceeds.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **override is denied**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-024 · LOCK-10

↑ Back to Table of Contents

**C-05 --- Warnings and Stock Signals**

Keep stock non-blocking while acknowledgements, alerts, and summaries remain traceable.

**M-058 --- Acknowledge a Warning and Continue · ★ · \~6 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Warning acknowledgement and audit**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Create an order that produces a non-blocking low-stock warning

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Acknowledge the warning modal and submit the order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Order can continue after acknowledgement.

Activity log records user, timestamp, warning type and order reference.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **order can continue after acknowledgement**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-013 · LOCK-11

↑ Back to Table of Contents

**M-059 --- Require Warning Acknowledgement Before Continuing · ★ · \~6 min**

**Your one job:** Require Warning Acknowledgement Before Continuing.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Warning acknowledgement and audit** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Non-blocking warning modal is open

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Close, bypass or navigate away without acknowledging, then try to continue.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA requires acknowledgement before continuing but does not convert the warning into a business block after acknowledgement.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA requires acknowledgement before continuing but does not convert the warning into a business block after acknowledgement**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-025 · LOCK-11

↑ Back to Table of Contents

**M-060 --- Record the Complete Warning Audit Entry · ★ · \~6 min**

**Your one job:** Record the Complete Warning Audit Entry.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Warning acknowledgement and audit** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Acknowledged warning on a known order

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the order activity log.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Missing user, timestamp, warning type or order reference is a Fail.

The log must point to the correct order.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **missing user, timestamp, warning type or order reference is a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-026 · LOCK-11

↑ Back to Table of Contents

**M-061 --- Submit an Order With Zero Stock · ★ · \~6 min**

**Your one job:** Submit an Order With Zero Stock.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Stock is informational**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** SQL quantity is zero for a sellable item where loose quantity may exist (observed 25 kg full-pack/loose-stock scenario)

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Add the item and submit the SO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A stock warning may appear, but the SO remains orderable and can be submitted.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **a stock warning may appear, but the SO remains orderable and can be submitted**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-014 · LOCK-12

↑ Back to Table of Contents

**M-062 --- Do Not Block an Order at Exactly Zero Stock · ★ · \~6 min**

**Your one job:** Do Not Block an Order at Exactly Zero Stock.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Stock is informational** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Item SQL quantity is exactly zero

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Submit the SO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA must not hard-block because of stock quantity.

A stock-based submission block is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA must not hard-block because of stock quantity**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-027 · LOCK-12

↑ Back to Table of Contents

**M-063 --- Do Not Block an Order Below the Low-Stock Threshold · ★ · \~6 min**

**Your one job:** Do Not Block an Order Below the Low-Stock Threshold.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Stock is informational** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Item SQL quantity is below the configured low-stock threshold but above zero

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Submit the SO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA must not hard-block the order.

Low-stock control remains informational/notification-only.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA must not hard-block the order**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-028 · LOCK-12

↑ Back to Table of Contents

**M-064 --- Save a Valid Low-Stock Threshold · ★ · \~6 min**

**Your one job:** Save a Valid Low-Stock Threshold.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Low/out-of-stock alerts**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a reserved UAT item and the test threshold value 50

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the item's low-stock threshold control, enter 50, and save.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The threshold saves successfully and remains visible as 50 after refresh.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the threshold saves successfully and remains visible as 50 after refresh**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-015 · LOCK-13

↑ Back to Table of Contents

**M-065 --- Receive a Low-Stock Alert at Quantity 49 · ★★ · \~5 min + scheduled check**

**Your one job:** Receive a Low-Stock Alert at Quantity 49.\
**Client role:** Irene / Credit Controller\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Low/out-of-stock alerts**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Product team prepares the same threshold-50 item at visible quantity 49 and confirms the alert run is ready

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Check the MAIA website notification area and the linked Telegram account.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

One low-stock alert for the correct item appears in both places and identifies the item correctly.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **one low-stock alert for the correct item appears in both places and identifies the item correctly**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-015 · LOCK-13

↑ Back to Table of Contents

**M-066 --- Receive an Out-of-Stock Alert at Quantity Zero · ★★ · \~5 min + scheduled check**

**Your one job:** Receive an Out-of-Stock Alert at Quantity Zero.\
**Client role:** Irene / Credit Controller\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Low/out-of-stock alerts**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Product team prepares the same threshold-50 item at visible quantity 0 and confirms the alert run is ready

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Check the MAIA website notification area and the linked Telegram account.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

One out-of-stock alert for the correct item appears in both places and identifies the item correctly.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **one out-of-stock alert for the correct item appears in both places and identifies the item correctly**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-015 · LOCK-13

↑ Back to Table of Contents

**M-067 --- Reject an Invalid Stock Threshold · ★ · \~6 min**

**Your one job:** Reject an Invalid Stock Threshold.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Low/out-of-stock alerts** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Attempt threshold values: blank, negative and non-numeric

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Save each value.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Invalid thresholds are rejected with a clear message.

The last valid threshold remains active.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **invalid thresholds are rejected with a clear message**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-029 · LOCK-13

↑ Back to Table of Contents

**M-068 --- Send Stock Alerts to Both Required Channels · ★ · \~6 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Irene\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Low/out-of-stock alerts** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Threshold is crossed for a UAT item

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Check both channels and recipient.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Missing website alert, missing Telegram alert, or delivery to the wrong recipient is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **missing website alert, missing Telegram alert, or delivery to the wrong recipient is a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-030 · LOCK-13

↑ Back to Table of Contents

**M-069 --- Receive the 9:00 AM Stock Summary · ★★ · \~5 min + scheduled check**

**Your one job:** Receive the 9:00 AM Stock Summary.\
**Client role:** Irene / Credit Controller\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **9:00 AM stock summary**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Before 9:00 AM, prepare at least one low-stock and one zero-stock SQL item

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

At 9:00 AM open the daily stock summary.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Summary has separate low-stock and out-of-stock sections and shows item code, SQL description and quantity for each.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **summary has separate low-stock and out-of-stock sections and shows item code, SQL description and quantity for each**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-016 · LOCK-14

↑ Back to Table of Contents

**M-070 --- Run the Stock Summary Once at 9:00 AM · ★★ · \~5 min + scheduled check**

**Your one job:** Run the Stock Summary Once at 9:00 AM.\
**Client role:** Irene\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **9:00 AM stock summary** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Same prepared stock data

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Check whether a summary arrives at the scheduled 9:00 AM run.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

No summary at 9:00 AM, an unexplained late run, or duplicate daily runs is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **no summary at 9:00 AM, an unexplained late run, or duplicate daily runs is a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-031 · LOCK-14

↑ Back to Table of Contents

**M-071 --- Keep Stock Summary Values Consistent · ★ · \~6 min**

**Your one job:** Keep Stock Summary Values Consistent.\
**Client role:** Irene\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **9:00 AM stock summary** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Known SQL code/description/quantity for two stock items

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Compare the summary to SQL.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Mixed categories, missing code/description/quantity, or values that do not match SQL are a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **mixed categories, missing code/description/quantity, or values that do not match SQL are a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-032 · LOCK-14

↑ Back to Table of Contents

**C-06 --- Delivery and Daily Operations**

Track delayed and partial deliveries and produce the daily operational digest.

**M-072 --- Receive a Delay Alert After More Than Three Days · ★★ · \~5 min + scheduled check**

**Your one job:** Receive a Delay Alert After More Than Three Days.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Delayed-delivery alert**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared delivery that has remained incomplete for more than three full days

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the relevant notifications and the delivery record.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A delayed-delivery alert is visible through the website and chatbot for the correct delivery.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **a delayed-delivery alert is visible through the website and chatbot for the correct delivery**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-017 · LOCK-15

↑ Back to Table of Contents

**M-073 --- Clear a Delay Alert After Valid Resolution · ★★ · \~8 min**

**Your one job:** Clear a Delay Alert After Valid Resolution.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Recovery

**Why you are doing this**

This is the normal user-facing behaviour for **Delayed-delivery alert**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared delivery with an active delayed-delivery alert

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Mark the delivery completed or apply a valid reschedule, then refresh the delivery and notification views.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The alert clears for that delivery and does not remain active after the valid resolution.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **the alert clears for that delivery and does not remain active after the valid resolution**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-017 · LOCK-15

↑ Back to Table of Contents

**M-074 --- Do Not Alert at Exactly Three Days · ★ · \~6 min**

**Your one job:** Do Not Alert at Exactly Three Days.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Delayed-delivery alert** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Delivery is delayed exactly three full days, not more

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Check alerts before the fourth day begins.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

No delayed-delivery alert is sent yet.

An early alert is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **no delayed-delivery alert is sent yet**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-033 · LOCK-15

↑ Back to Table of Contents

**M-075 --- Clear a Delay Alert Only After Valid Resolution · ★ · \~6 min**

**Your one job:** Clear a Delay Alert Only After Valid Resolution.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Delayed-delivery alert** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Delayed alert is active

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Try an incomplete/invalid reschedule or update an unrelated order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The alert does not clear until this delivery is completed or validly rescheduled.

Clearing early or remaining after valid closure is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **the alert does not clear until this delivery is completed or validly rescheduled**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-034 · LOCK-15

↑ Back to Table of Contents

**M-076 --- Receive All Five Operational Digest Categories · ★ · \~6 min**

**Your one job:** Receive All Five Operational Digest Categories.\
**Client role:** Relevant team\
**Product role:** Permitted digest recipient role\
**Account to use:** \[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **9:00 AM operational digest**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Prepare SQL/MAIA data for: unpaid invoice, inactive customer, unclosed SO, reorder item and partial delivery

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

At 9:00 AM open the operational digest.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

All five categories are present with identifiable records/actions using current MAIA capability.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **all five categories are present with identifiable records/actions using current MAIA capability**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-018 · LOCK-16

↑ Back to Table of Contents

**M-077 --- Do Not Omit a Required Digest Category · ★ · \~6 min**

**Your one job:** Do Not Omit a Required Digest Category.\
**Client role:** Relevant team\
**Product role:** Permitted digest recipient role\
**Account to use:** \[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **9:00 AM operational digest** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Same prepared five-category data

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Compare the digest to source records.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Any required category or qualifying record missing from the digest is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **any required category or qualifying record missing from the digest is a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-035 · LOCK-16

↑ Back to Table of Contents

**M-078 --- Run the Operations Digest Once at 9:00 AM · ★★ · \~5 min + scheduled check**

**Your one job:** Run the Operations Digest Once at 9:00 AM.\
**Client role:** Relevant team\
**Product role:** Permitted digest recipient role\
**Account to use:** \[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **9:00 AM operational digest** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Prepared digest data and scheduled run

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Check timing and duplicate delivery.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Digest is available at 9:00 AM once per scheduled day.

Missing, unexplained late or duplicated delivery is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **digest is available at 9:00 AM once per scheduled day**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: DIGEST_RECIPIENT_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-036 · LOCK-16

↑ Back to Table of Contents

**M-079 --- Keep 400 kg Open After a 600 kg Delivery · ★ · \~6 min**

**Your one job:** Keep 400 kg Open After a 600 kg Delivery.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Partial-delivery reminders**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a prepared Sales Order for 1,000 kg with no completed delivery yet

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create or submit the first Delivery Order for 600 kg, then reopen the Sales Order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Sales Order remains open and shows 400 kg outstanding.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Sales Order remains open and shows 400 kg outstanding**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-019 · LOCK-17

↑ Back to Table of Contents

**M-080 --- Receive the Partial-Delivery Reminder · ★★ · \~5 min + scheduled check**

**Your one job:** Receive the Partial-Delivery Reminder.\
**Client role:** Irene / Credit Controller\
**Product role:** Credit Controller\
**Account to use:** \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Partial-delivery reminders**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the 1,000 kg order after a 600 kg partial delivery and wait for or trigger the configured daily reminder run

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Check the website notification area and linked Telegram account for the outstanding order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A reminder identifies the correct order and the 400 kg remaining quantity.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The expected alert, reminder, summary, or digest is missing, early, late, duplicated, or attached to the wrong record.

The visible value, category, recipient, quantity, or timing differs from the prepared state.

No clear final message, status, or identifiable record is available as evidence.

**This mission is complete when**

This mission is complete when **a reminder identifies the correct order and the 400 kg remaining quantity**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-019 · LOCK-17

↑ Back to Table of Contents

**M-081 --- Stop the Reminder After the Final 400 kg · ★★ · \~5 min + scheduled check**

**Your one job:** Stop the Reminder After the Final 400 kg.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Recovery

**Why you are doing this**

This is the normal user-facing behaviour for **Partial-delivery reminders**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the same order with 400 kg still outstanding and an active partial-delivery reminder

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Record the final 400 kg delivery, confirm the order is complete, and check the reminder after the next refresh/run.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Outstanding quantity becomes zero, the order completes, and the partial-delivery reminder stops.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **outstanding quantity becomes zero, the order completes, and the partial-delivery reminder stops**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-019 · LOCK-17

↑ Back to Table of Contents

**M-082 --- Keep the Remaining Partial-Delivery Quantity Open · ★ · \~6 min**

**Your one job:** Keep the Remaining Partial-Delivery Quantity Open.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Partial-delivery reminders** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Same 1,000 kg SO and 600 kg first DO

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Submit partial delivery and inspect SO status/quantity.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

SO must not close or lose the remaining 400 kg.

If it does, the test fails.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **SO must not close or lose the remaining 400 kg**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-037 · LOCK-17

↑ Back to Table of Contents

**M-083 --- Refuse an Unauthorised Partial-Order Closure · ★★ · \~8 min**

**Your one job:** Refuse an Unauthorised Partial-Order Closure.\
**Client role:** Unauthorized user\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Partial-delivery reminders** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Partial order has remaining quantity and active reminders

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to close/cancel the outstanding balance without authorized closure.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Closure is denied and reminders continue.

Only full delivery or authorized close stops them.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **closure is denied and reminders continue**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-038 · LOCK-17

↑ Back to Table of Contents

**C-07 --- Invoices, Dates, and Charges**

Retrieve the correct invoice, approve it once, date documents correctly, and post charges as SKUs.

**M-084 --- Download the Original SQL Invoice PDF · ★ · \~6 min**

**Your one job:** Download the Original SQL Invoice PDF.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **SQL invoice PDF**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Submitted SQL invoice with known invoice number, customer, lines, tax and total

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open invoice in MAIA and download PDF.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

PDF is the SQL invoice PDF and matches the SQL invoice number, customer, lines, tax and total.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **pDF is the SQL invoice PDF and matches the SQL invoice number, customer, lines, tax and total**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-022 · LOCK-20

↑ Back to Table of Contents

**M-085 --- Download the Updated Current Invoice PDF · ★★ · \~8 min**

**Your one job:** Download the Updated Current Invoice PDF.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Recovery

**Why you are doing this**

This test challenges **SQL invoice PDF** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Product team prepares one SQL invoice whose PDF has a documented updated version and expected visible invoice reference

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Refresh the invoice in MAIA and download the PDF.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The downloaded file is the current matching invoice PDF and not the earlier version.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **the downloaded file is the current matching invoice PDF and not the earlier version**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-044 · LOCK-20

↑ Back to Table of Contents

**M-086 --- Show a Clear Error When the Invoice PDF Is Unavailable · ★★ · \~8 min**

**Your one job:** Show a Clear Error When the Invoice PDF Is Unavailable.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Recovery

**Why you are doing this**

This test challenges **SQL invoice PDF** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Product team prepares a controlled invoice whose SQL PDF is temporarily unavailable

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the invoice and attempt to view or download the PDF.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A clear unavailable error appears.

No stale, mismatched, or fabricated PDF is served.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **a clear unavailable error appears**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-044 · LOCK-20

↑ Back to Table of Contents

**M-087 --- Complete Invoice Approval With One Approver · ★ · \~6 min**

**Your one job:** Complete Invoice Approval With One Approver.\
**Client role:** Authorized invoice approver\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Single-level invoice approval**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Invoice is ready for approval

**Item, document, or state:** designated single-level approver account

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Approve once and continue the flow.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

One valid approval completes the go-live approval requirement and records the approver/timestamp.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **one valid approval completes the go-live approval requirement and records the approver/timestamp**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-023 · LOCK-21

↑ Back to Table of Contents

**M-088 --- Do Not Require a Second Invoice Approver · ★ · \~6 min**

**Your one job:** Do Not Require a Second Invoice Approver.\
**Client role:** Authorized approver\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Single-level invoice approval** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Invoice has received the valid single approval

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to continue or inspect approval status.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not require a second approver.

A mandatory two-level sequence is a Fail for current scope.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not require a second approver**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-045 · LOCK-21

↑ Back to Table of Contents

**M-089 --- Refuse an Unauthorised Invoice Approval · ★★ · \~8 min**

**Your one job:** Refuse an Unauthorised Invoice Approval.\
**Client role:** Unauthorized user\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Single-level invoice approval** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Invoice awaits approval

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt approval from an unauthorized account.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Approval is denied and invoice remains pending.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **approval is denied and invoice remains pending**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-046 · LOCK-21

↑ Back to Table of Contents

**M-090 --- Default a New Document to Today · ★ · \~6 min**

**Your one job:** Default a New Document to Today.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Document date handling**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Create one new supported document on the test date

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Start the document and inspect its document date before changing anything.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The document date defaults to the day the document is created.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the document date defaults to the day the document is created**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-024 · LOCK-23

↑ Back to Table of Contents

**M-091 --- Record an Authorised Document-Date Change · ★★ · \~8 min**

**Your one job:** Record an Authorised Document-Date Change.\
**Client role:** Sales Manager\
**Product role:** Sales Manager\
**Account to use:** \[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This is the normal user-facing behaviour for **Document date handling**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a supported document whose date may be edited in its current configured state and choose an allowed revised date

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Change the date, save, and open the visible activity/history entry.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The new date saves and the history shows the user, old date, new date, timestamp, and document reference.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the new date saves and the history shows the user, old date, new date, timestamp, and document reference**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-024 · LOCK-23

↑ Back to Table of Contents

**M-092 --- Refuse an Unauthorised Document-Date Edit · ★★ · \~8 min**

**Your one job:** Refuse an Unauthorised Document-Date Edit.\
**Client role:** Unauthorized role\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Document date handling** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Supported document exists

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to change document date.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Date edit is denied and original date remains.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **date edit is denied and original date remains**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-047 · LOCK-23

↑ Back to Table of Contents

**M-093 --- Reject an Invalid Document Date · ★ · \~6 min**

**Your one job:** Reject an Invalid Document Date.\
**Client role:** Sales User\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Document date handling** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Attempt blank, malformed or impossible date

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Save the document date.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Invalid date is rejected with a clear message and no corrupt date posts downstream.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **invalid date is rejected with a clear message and no corrupt date posts downstream**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-048 · LOCK-23

↑ Back to Table of Contents

**M-094 --- Post a Surcharge as a SQL SKU · ★ · \~6 min**

**Your one job:** Post a Surcharge as a SQL SKU.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Surcharge SQL SKU**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** NEEDS CLIENT INPUT: confirmed active SQL surcharge SKU and amount

**Item, document, or state:** example UAT amount RM75 was discussed

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Add the surcharge as the SQL item/SKU and submit the order.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Surcharge appears as the correct SQL SKU, is included once in totals, and posts correctly downstream.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **surcharge appears as the correct SQL SKU, is included once in totals, and posts correctly downstream**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-025 · LOCK-24

↑ Back to Table of Contents

**M-095 --- Reject a Free-Text Surcharge · ★ · \~6 min**

**Your one job:** Reject a Free-Text Surcharge.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Surcharge SQL SKU** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Enter free-text \'delivery charge RM75\' without selecting a mapped SQL SKU

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Try to submit.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA requires/flags the SQL surcharge SKU and does not post an arbitrary free-text charge as a valid item.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA requires/flags the SQL surcharge SKU and does not post an arbitrary free-text charge as a valid item**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-049 · LOCK-24

↑ Back to Table of Contents

**M-096 --- Flag a Missing or Inactive Surcharge SKU · ★ · \~6 min**

**Your one job:** Flag a Missing or Inactive Surcharge SKU.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Surcharge SQL SKU** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Configured surcharge SKU is missing, inactive or cannot be found in SQL

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Add the surcharge and submit.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA visibly flags the missing/inactive SKU and does not substitute a wrong generic item.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA visibly flags the missing/inactive SKU and does not substitute a wrong generic item**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-050 · LOCK-24

↑ Back to Table of Contents

**C-08 --- Returns, Product Master, and COA**

Control credit notes, item creation, batch traceability, and certificates of analysis.

**M-097 --- Carry Invoice Batch Numbers Into a Credit Note · ★ · \~6 min**

**Your one job:** Carry Invoice Batch Numbers Into a Credit Note.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Credit-note batch carry-over**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** SQL invoice line totals 500 kg split across two or more known batches, e.g. 300 kg + 200 kg

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Generate a credit note from the invoice for the returned quantities.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Credit note carries the relevant invoice batch numbers and quantities.

Traceability back to the invoice is visible.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **credit note carries the relevant invoice batch numbers and quantities**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-026 · LOCK-25

↑ Back to Table of Contents

**M-098 --- Do Not Drop Credit-Note Batch Numbers · ★ · \~6 min**

**Your one job:** Do Not Drop Credit-Note Batch Numbers.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Credit-note batch carry-over** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Invoice has known batch numbers

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Generate credit note and inspect batch fields.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Missing/dropped batch numbers are a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **missing/dropped batch numbers are a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-051 · LOCK-25

↑ Back to Table of Contents

**M-099 --- Reject an Unrelated Credit-Note Batch · ★ · \~6 min**

**Your one job:** Reject an Unrelated Credit-Note Batch.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Credit-note batch carry-over** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use an invoice containing batches A and B while unrelated batch C is also available

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create a credit note from the invoice and attempt to select batch C.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Batch C cannot be posted as an invoice-related return batch and a clear refusal or validation message appears.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **batch C cannot be posted as an invoice-related return batch and a clear refusal or validation message appears**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-052 · LOCK-25

↑ Back to Table of Contents

**M-100 --- Reject a Credit-Note Quantity Above the Invoice Returnable Quantity · ★ · \~6 min**

**Your one job:** Reject a Credit-Note Quantity Above the Invoice Returnable Quantity.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Credit-note batch carry-over** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use an invoice with a known line and batch quantity and a smaller confirmed returned quantity

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create a credit note and enter a quantity above the invoice or confirmed returnable quantity.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The excessive quantity is prevented or clearly flagged and the credit note cannot be issued with it.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the excessive quantity is prevented or clearly flagged and the credit note cannot be issued with it**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-052 · LOCK-25

↑ Back to Table of Contents

**M-101 --- Submit a Credit-Note Request as Sales · ★★ · \~8 min**

**Your one job:** Submit a Credit-Note Request as Sales.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Credit-note permissions and return SOP**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a delivered invoice with a documented return reason and expected return quantity

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create and submit a credit-note request without attempting to issue the credit note.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A request reference is created and remains pending for physical return confirmation.

Sales does not receive issuance capability.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **a request reference is created and remains pending for physical return confirmation**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-027 · LOCK-26

↑ Back to Table of Contents

**M-102 --- Confirm the Physical Returned Quantity · ★★ · \~8 min**

**Your one job:** Confirm the Physical Returned Quantity.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Credit-note permissions and return SOP**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the pending credit-note request created by Sales and the prepared physically returned quantity

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the return request, record the confirmed returned quantity, and save the confirmation.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The return confirmation is visible on the request and is available for Finance/Admin review.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the return confirmation is visible on the request and is available for Finance/Admin review**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-027 · LOCK-26

↑ Back to Table of Contents

**M-103 --- Issue a Credit Note After Return Confirmation · ★★ · \~8 min**

**Your one job:** Issue a Credit Note After Return Confirmation.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **Credit-note permissions and return SOP**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the pending request after the physical returned quantity has been confirmed

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the request, verify the confirmation and invoice link, then create and issue the credit note.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The credit note is issued, links to the invoice, and uses the confirmed returned quantity.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the credit note is issued, links to the invoice, and uses the confirmed returned quantity**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-027 · LOCK-26

↑ Back to Table of Contents

**M-104 --- Refuse Sales From Issuing a Credit Note · ★★ · \~8 min**

**Your one job:** Refuse Sales From Issuing a Credit Note.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Credit-note permissions and return SOP** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Valid return request exists

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Sales attempts to create/submit the credit note directly.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Creation/submission is denied.

Sales can only request.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **creation/submission is denied**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-053 · LOCK-26

↑ Back to Table of Contents

**M-105 --- Hold a Credit Note Until Return Quantity Is Confirmed · ★ · \~6 min**

**Your one job:** Hold a Credit Note Until Return Quantity Is Confirmed.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Credit-note permissions and return SOP** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Sales requests CN but physical returned quantity is not confirmed

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Finance/Admin attempts to issue CN.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA holds/refuses issuance until quantity confirmation is recorded.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA holds/refuses issuance until quantity confirmation is recorded**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-054 · LOCK-26

↑ Back to Table of Contents

**M-106 --- Prevent Sales From Cancelling a Delivered Return · ★ · \~6 min**

**Your one job:** Prevent Sales From Cancelling a Delivered Return.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Credit-note permissions and return SOP** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Delivered order has an error/return

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Try to solve it by cancelling the delivered order instead of following CN SOP.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not let Sales bypass the return/CN process.

User is directed to request a credit note.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not let Sales bypass the return/CN process**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-055 · LOCK-26

↑ Back to Table of Contents

**M-107 --- Create an Item Through Finance or Admin · ★ · \~6 min**

**Your one job:** Create an Item Through Finance or Admin.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Item creation permissions**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** NEEDS CLIENT INPUT: confirmed item-creation route and unique UAT item code

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create the item/product code using the authorized Finance/Admin flow and sync.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Authorized creation succeeds and the item becomes available from the authoritative SQL-linked process without a conflicting duplicate.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **authorized creation succeeds and the item becomes available from the authoritative SQL-linked process without a conflicting duplicate**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-028 · LOCK-27

↑ Back to Table of Contents

**M-108 --- Refuse Item Creation by Sales or Logistics · ★★ · \~8 min**

**Your one job:** Refuse Item Creation by Sales or Logistics.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Item creation permissions** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** User has no Finance/Admin role

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to create a new item/product code from web or chatbot.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Creation is denied.

No item appears in MAIA or SQL.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **creation is denied**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-056 · LOCK-27

↑ Back to Table of Contents

**M-109 --- Reject a Duplicate Item Code · ★ · \~6 min**

**Your one job:** Reject a Duplicate Item Code.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Item creation permissions** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use an item code that already exists in the authoritative item master

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to create a new item using the same code.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The duplicate item is rejected and no second conflicting item appears.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the duplicate item is rejected and no second conflicting item appears**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-057 · LOCK-27

↑ Back to Table of Contents

**M-110 --- Hold an Item With Missing Mandatory Master Fields · ★ · \~6 min**

**Your one job:** Hold an Item With Missing Mandatory Master Fields.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Item creation permissions** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a new reserved UAT item code but omit one documented mandatory item-master field

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to create or submit the item.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The item is rejected or held for correction and is not created as a valid master record.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the item is rejected or held for correction and is not created as a valid master record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-057 · LOCK-27

↑ Back to Table of Contents

**M-111 --- Upload and Link a Valid COA · ★ · \~6 min**

**Your one job:** Upload and Link a Valid COA.\
**Client role:** Supply Chain\
**Product role:** \[GAP: mapped COA-capable MAIA role\]\
**Account to use:** \[GAP: map Supply Chain client role to a MAIA product account before testing\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **COA indexing and linking**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Valid COA PDF with known item, lot/batch, supplier and date

**Item, document, or state:** related DO/invoice

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[GAP: map Supply Chain client role to a MAIA product account before testing\]**.

Confirm the visible record or starting state matches the **Start here** section.

Upload and index the COA.

Create/open the related DO/invoice.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

COA is searchable by indexed fields, links to the correct DO/invoice, and MAIA prompts the user when relevant.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **COA is searchable by indexed fields, links to the correct DO/invoice, and MAIA prompts the user when relevant**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[GAP: map Supply Chain client role to a MAIA product account before testing\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-029 · LOCK-28

↑ Back to Table of Contents

**M-112 --- Hold a COA With Missing Index Data · ★ · \~6 min**

**Your one job:** Hold a COA With Missing Index Data.\
**Client role:** Supply Chain\
**Product role:** \[GAP: mapped COA-capable MAIA role\]\
**Account to use:** \[GAP: map Supply Chain client role to a MAIA product account before testing\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **COA indexing and linking** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** COA PDF lacks required index data such as batch or supplier

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[GAP: map Supply Chain client role to a MAIA product account before testing\]**.

Confirm the visible record or starting state matches the **Start here** section.

Upload and try to link automatically.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA flags missing index data and does not silently auto-link it to a shipment.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA flags missing index data and does not silently auto-link it to a shipment**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[GAP: map Supply Chain client role to a MAIA product account before testing\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-058 · LOCK-28

↑ Back to Table of Contents

**M-113 --- Reject a COA Linked to the Wrong Batch · ★ · \~6 min**

**Your one job:** Reject a COA Linked to the Wrong Batch.\
**Client role:** Supply Chain\
**Product role:** \[GAP: mapped COA-capable MAIA role\]\
**Account to use:** \[GAP: map Supply Chain client role to a MAIA product account before testing\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **COA indexing and linking** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** COA belongs to batch A

**Item, document, or state:** DO/invoice uses batch B

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[GAP: map Supply Chain client role to a MAIA product account before testing\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to link the COA.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Mismatch is prevented or clearly flagged.

Unrelated COA is not attached as valid evidence.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **mismatch is prevented or clearly flagged**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[GAP: map Supply Chain client role to a MAIA product account before testing\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-059 · LOCK-28

↑ Back to Table of Contents

**C-09 --- Tax Boundary and Finance Chatbot**

Respect batch-level C3 and SQL e-invoice boundaries while protecting finance data.

**M-114 --- Apply C3 Exemption at Batch Level · ★ · \~6 min**

**Your one job:** Apply C3 Exemption at Batch Level.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Batch-level C3 exemption**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** SQL test data includes a C3-eligible batch and corresponding order tax-exemption handling

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Create order using that batch and inspect tax/exemption information.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

C3/order tax exemption is applied and traceable at batch level.

Downstream SQL data reflects the correct handling.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **C3/order tax exemption is applied and traceable at batch level**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-030 · LOCK-29

↑ Back to Table of Contents

**M-115 --- Do Not Create Product-Level C3 Allocation · ★ · \~6 min**

**Your one job:** Do Not Create Product-Level C3 Allocation.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Batch-level C3 exemption** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** C3-eligible product/batch exists

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Inspect configuration/order allocation and attempt to create separate product-level C3 allocation or item-quantity reservation.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not require or create those go-live behaviours.

Batch-level handling remains the boundary.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not require or create those go-live behaviours**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-060 · LOCK-29

↑ Back to Table of Contents

**M-116 --- Reject C3 Exemption on the Wrong Batch · ★ · \~6 min**

**Your one job:** Reject C3 Exemption on the Wrong Batch.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Batch-level C3 exemption** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Order uses a batch without the C3 exemption record, or the selected batch differs from the approved C3 batch

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to apply the exemption.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA prevents/flags the mismatch and does not apply C3 exemption to the wrong batch.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA prevents/flags the mismatch and does not apply C3 exemption to the wrong batch**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-061 · LOCK-29

↑ Back to Table of Contents

**M-117 --- Keep SQL E-Invoice Processing Intact · ★ · \~6 min**

**Your one job:** Keep SQL E-Invoice Processing Intact.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **SQL e-invoice boundary**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Invoice/e-invoice is processed in SQL using Mackessen\'s current practice

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open related record in MAIA and continue MAIA workflow.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

SQL e-invoice process/status remains intact.

MAIA does not interrupt, duplicate or change the authoritative process.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **SQL e-invoice process/status remains intact**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-031 · LOCK-30

↑ Back to Table of Contents

**M-118 --- Do Not Submit a Duplicate E-Invoice · ★ · \~6 min**

**Your one job:** Do Not Submit a Duplicate E-Invoice.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **SQL e-invoice boundary** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** SQL e-invoice already submitted/processed

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Use MAIA actions around the same invoice.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not submit a second e-invoice or migrate the process automatically.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not submit a second e-invoice or migrate the process automatically**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-062 · LOCK-30

↑ Back to Table of Contents

**M-119 --- Do Not Overwrite SQL Tax Data · ★ · \~6 min**

**Your one job:** Do Not Overwrite SQL Tax Data.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **SQL e-invoice boundary** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Tax/e-invoice data differs between a MAIA draft view and SQL

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Refresh/open the record and attempt to save.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA does not overwrite authoritative SQL tax data.

Discrepancy is surfaced or SQL value is used.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA does not overwrite authoritative SQL tax data**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-063 · LOCK-30

↑ Back to Table of Contents

**M-120 --- Use the Finance Chatbot With Finance Access · ★ · \~6 min**

**Your one job:** Use the Finance Chatbot With Finance Access.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Finance chatbot**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Finance user is linked to Telegram and has finance access

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open finance chatbot and ask for a routine allowed summary, e.g. unpaid invoices or pending approvals.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Finance chatbot is available in current scope and returns the permitted operational result.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **finance chatbot is available in current scope and returns the permitted operational result**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-032 · LOCK-31

↑ Back to Table of Contents

**M-121 --- Hide Restricted Finance Data From Sales · ★★ · \~8 min**

**Your one job:** Hide Restricted Finance Data From Sales.\
**Client role:** Sales user\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **Finance chatbot** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Sales user has no finance-data permission

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Ask finance chatbot for restricted finance details.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Restricted data is not exposed.

Response states access is not permitted or shows only allowed information.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **restricted data is not exposed**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-064 · LOCK-31

↑ Back to Table of Contents

**M-122 --- Keep the Finance Chatbot Available in Telegram · ★ · \~6 min**

**Your one job:** Keep the Finance Chatbot Available in Telegram.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Finance chatbot** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Finance Telegram account is correctly linked

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open the finance-chatbot entry point.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A message that the finance chatbot is unavailable, future-only or WhatsApp-only is a Fail.

Current Telegram availability must be demonstrable.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **a message that the finance chatbot is unavailable, future-only or WhatsApp-only is a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-065 · LOCK-31

↑ Back to Table of Contents

**C-10 --- Governance, Cutover, and Documents**

Prove role coverage, cut over safely, and handle every supported document type.

**M-123 --- Confirm Every Required Role Has Executed Evidence · ★★ · \~8 min**

**Your one job:** Confirm Every Required Role Has Executed Evidence.\
**Client role:** UAT lead\
**Product role:** \[GAP: UAT coordination role\]\
**Account to use:** \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **UAT role coverage and sign-off**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the shared UAT result register after assigned Sales, Logistics, Finance/Admin, and Management missions have been run

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Review each required role group and verify it has named testers, recorded results, and evidence.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Every required role group is visibly complete, or the register clearly remains incomplete for the missing role.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **every required role group is visibly complete, or the register clearly remains incomplete for the missing role**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-035 · LOCK-34

↑ Back to Table of Contents

**M-124 --- Record Client Sign-Off Through Maye · ★★ · \~8 min**

**Your one job:** Record Client Sign-Off Through Maye.\
**Client role:** Maye\
**Product role:** \[GAP: sign-off account or method\]\
**Account to use:** \[GAP: confirm Maye's sign-off product account or external approval method\]\
**Mission type:** Handoff

**Why you are doing this**

This is the normal user-facing behaviour for **UAT role coverage and sign-off**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a result pack with completed required-role coverage and no unresolved sign-off blocker

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[GAP: confirm Maye's sign-off product account or external approval method\]**.

Confirm the visible record or starting state matches the **Start here** section.

Review the evidence summary and record or coordinate the approved client sign-off through the agreed method.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The final approval is traceable to Maye's coordination and the approved client process.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the final approval is traceable to Maye's coordination and the approved client process**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[GAP: confirm Maye's sign-off product account or external approval method\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-035 · LOCK-34

↑ Back to Table of Contents

**M-125 --- Do Not Claim Role Coverage With a Missing Role · ★ · \~6 min**

**Your one job:** Do Not Claim Role Coverage With a Missing Role.\
**Client role:** UAT lead\
**Product role:** \[GAP: UAT coordination role\]\
**Account to use:** \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **UAT role coverage and sign-off** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** One required role group, e.g. Finance/Admin or Management, has no executed cases

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to mark role coverage complete.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Coverage remains incomplete/blocked.

UAT cannot claim full role coverage.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **coverage remains incomplete/blocked**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-070 · LOCK-34

↑ Back to Table of Contents

**M-126 --- Refuse Final Sign-Off With Incomplete Evidence · ★ · \~6 min**

**Your one job:** Refuse Final Sign-Off With Incomplete Evidence.\
**Client role:** UAT lead\
**Product role:** \[GAP: UAT coordination role\]\
**Account to use:** \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **UAT role coverage and sign-off** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a result pack where at least one required mission result or evidence item is missing

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to move the UAT pack to final sign-off.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Final sign-off remains unavailable or incomplete and the missing evidence is visible.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **final sign-off remains unavailable or incomplete and the missing evidence is visible**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-071 · LOCK-34

↑ Back to Table of Contents

**M-127 --- Refuse Final Sign-Off From the Wrong Person · ★★ · \~8 min**

**Your one job:** Refuse Final Sign-Off From the Wrong Person.\
**Client role:** Project team\
**Product role:** \[GAP: authorised sign-off role\]\
**Account to use:** \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]\
**Mission type:** Permission

**Why you are doing this**

This test challenges **UAT role coverage and sign-off** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use a complete result pack but a user who is not part of the approved client sign-off process

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Attempt to record the final client approval.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The attempt is not accepted as final client sign-off and the approved Maye-coordinated process remains required.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the attempt is not accepted as final client sign-off and the approved Maye-coordinated process remains required**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-071 · LOCK-34

↑ Back to Table of Contents

**M-128 --- Verify the Live SQL Cutover · ★★★ · \~20 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Admin + client PIC\
**Product role:** Admin + Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\] + \[NEEDS INPUT: CLIENT_PIC_ACCOUNT_OR_APPROVAL_METHOD\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Live SQL cutover**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Approved live SQL connection

**Item, document, or state:** select 3 live customers, 3 live items and 3 live invoices for spot-check

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\] + \[NEEDS INPUT: CLIENT_PIC_ACCOUNT_OR_APPROVAL_METHOD\]**.

Confirm the visible record or starting state matches the **Start here** section.

Switch to live SQL, refresh MAIA and compare all nine records.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

All records match live SQL and the environment/connection is clearly identified as production.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **all records match live SQL and the environment/connection is clearly identified as production**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\] + \[NEEDS INPUT: CLIENT_PIC_ACCOUNT_OR_APPROVAL_METHOD\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-036 · LOCK-35

↑ Back to Table of Contents

**M-129 --- Write One Controlled Transaction Only Once · ★ · \~6 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Live SQL cutover** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Create one controlled production transaction after cutover

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Verify destination database and document reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Transaction writes only to approved live SQL, not test SQL and not both.

No duplicate transaction exists.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **transaction writes only to approved live SQL, not test SQL and not both**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-073 · LOCK-35

↑ Back to Table of Contents

**M-130 --- Handle One Quotation Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One Quotation Through Its Supported Workflow.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the Quotation stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the Quotation through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Quotation is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Quotation is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-131 --- Handle One CPO Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One CPO Through Its Supported Workflow.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the CPO stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the CPO through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The CPO is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the CPO is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-132 --- Handle One Sales Order Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One Sales Order Through Its Supported Workflow.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the Sales Order stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the Sales Order through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Sales Order is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Sales Order is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-133 --- Handle One Proforma invoice Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One Proforma invoice Through Its Supported Workflow.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the Proforma invoice stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the Proforma invoice through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Proforma invoice is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Proforma invoice is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-134 --- Handle One Delivery Order Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One Delivery Order Through Its Supported Workflow.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the Delivery Order stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the Delivery Order through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Delivery Order is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Delivery Order is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-135 --- Handle One Picking list Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One Picking list Through Its Supported Workflow.\
**Client role:** Logistics\
**Product role:** Logistics\
**Account to use:** \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the Picking list stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the Picking list through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Picking list is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Picking list is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-136 --- Handle One SQL invoice PDF Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One SQL invoice PDF Through Its Supported Workflow.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the SQL invoice PDF stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the SQL invoice PDF through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The SQL invoice PDF is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the SQL invoice PDF is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-137 --- Handle One Credit note Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One Credit note Through Its Supported Workflow.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the Credit note stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the Credit note through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Credit note is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Credit note is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-138 --- Handle One Receipt Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One Receipt Through Its Supported Workflow.\
**Client role:** Finance/Admin\
**Product role:** Finance or Admin\
**Account to use:** \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the Receipt stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the Receipt through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The Receipt is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the Receipt is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-139 --- Handle One COA Through Its Supported Workflow · ★ · \~6 min**

**Your one job:** Handle One COA Through Its Supported Workflow.\
**Client role:** Supply Chain\
**Product role:** \[GAP: mapped COA-capable MAIA role\]\
**Account to use:** \[GAP: map Supply Chain client role to a MAIA product account before testing\]\
**Mission type:** Core

**Why you are doing this**

This is the normal user-facing behaviour for **Supported document set**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use client-approved UAT data and a reserved lifecycle record that is ready for the COA stage

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[GAP: map Supply Chain client role to a MAIA product account before testing\]**.

Confirm the visible record or starting state matches the **Start here** section.

Open or create the COA through the normal user-facing workflow, then review its visible data, status, and linked order or invoice reference.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The COA is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **the COA is available as a supported document, contains the correct visible source data, and links to the correct lifecycle record**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[GAP: map Supply Chain client role to a MAIA product account before testing\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-037 · LOCK-36

↑ Back to Table of Contents

**M-140 --- Hold a Supported Document With Missing Required Data · ★ · \~6 min**

**Your one job:** Hold a Supported Document With Missing Required Data.\
**Client role:** Relevant document owner\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Supported document set** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Omit a required customer/item/date/batch field for a supported document

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Try to generate/submit the document.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA keeps it draft or asks for correction.

It does not create a malformed final PDF or submit incomplete data to SQL.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA keeps it draft or asks for correction**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-074 · LOCK-36

↑ Back to Table of Contents

**M-141 --- Reject an Unsupported Document Request · ★ · \~6 min**

**Your one job:** Reject an Unsupported Document Request.\
**Client role:** Any user\
**Product role:** Role-matched MAIA account\
**Account to use:** \[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]\
**Mission type:** Edge

**Why you are doing this**

This test challenges **Supported document set** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Request an unscoped document/workflow such as a payment voucher or custom return note

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Ask MAIA to generate it.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA clearly says it is unsupported/not configured and does not mislabel another document as the requested one.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA clearly says it is unsupported/not configured and does not mislabel another document as the requested one**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ROLE-MATCHED_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-075 · LOCK-36

↑ Back to Table of Contents

**Section 10 Boss Fights**

Each Boss Fight tests **one historical failure** that remains in locked scope. Record it separately.

**BF-001 --- Run the Continuous Telegram Stress Test · ★★★ · \~30 min**

**Your one job:** Run the Continuous Telegram Stress Test.\
**Client role:** Cross-functional UAT team\
**Product role:** Role-matched MAIA accounts\
**Account to use:** \[NEEDS INPUT: CROSS_FUNCTIONAL_UAT_ACCOUNTS\]\
**Mission type:** Regression

**Why you are doing this**

This is the normal user-facing behaviour for **Chatbot stability**. Complete only this stage and stop at the stated result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** NEEDS CLIENT INPUT: agreed stress-test duration/count. Pack must include text orders, photos, PDFs and document requests

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: CROSS_FUNCTIONAL_UAT_ACCOUNTS\]**.

Confirm the visible record or starting state matches the **Start here** section.

Run the agreed continuous sequence without resetting the bot.

Record request IDs, response and completion.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

No crash, lost request, duplicate document or cross-order contamination.

Requests complete in a usable sequence.

The result belongs to the correct reserved record and role.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The required action cannot be completed even though every stated prerequisite is present.

The visible customer, item, quantity, document, status, or reference differs from the prepared input.

The product creates a duplicate, unrelated, or unsafe downstream result.

**This mission is complete when**

This mission is complete when **no crash, lost request, duplicate document or cross-order contamination**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: CROSS_FUNCTIONAL_UAT_ACCOUNTS\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

Any completed upstream work should remain saved as a draft or visible record. The product should identify the failed stage, avoid duplicate or partial downstream records, and allow a safe retry after the issue is corrected.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

Role/account and timestamp

**Organiser traceability:** HP-034 · LOCK-33

↑ Back to Table of Contents

**BF-002 --- Recover After a Corrupt File · ★★★ · \~10 min**

**Your one job:** Complete this test and confirm the expected visible result.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Regression

**Why you are doing this**

This test challenges **Chatbot stability** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Include one corrupt/unsupported file between valid requests

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Send valid request, corrupt file, then another valid request.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Bad file receives a clear error and does not crash/stall the bot or block later valid requests.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **bad file receives a clear error and does not crash/stall the bot or block later valid requests**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-068 · LOCK-33

↑ Back to Table of Contents

**BF-003 --- Keep Two Active Order Conversations Separate · ★★★ · \~10 min**

**Your one job:** Keep Two Active Order Conversations Separate.\
**Client role:** Two Sales users\
**Product role:** Two Sales User accounts\
**Account to use:** \[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]\
**Mission type:** Regression

**Why you are doing this**

This test challenges **Chatbot stability** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Two active order conversations with different customers/items

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]**.

Confirm the visible record or starting state matches the **Start here** section.

Interleave text, photo/PDF and document requests from both accounts.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

MAIA keeps context separate.

No item, customer, PO or document is attached to the wrong order.

No duplicates are produced.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **MAIA keeps context separate**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: TWO_SEPARATE_SALES_UAT_ACCOUNTS\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-069 · LOCK-33

↑ Back to Table of Contents

**BF-004 --- Hard-Block a Duplicate Customer and PO · ★★★ · \~10 min**

**Your one job:** Hard-Block a Duplicate Customer and PO.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Regression

**Why you are doing this**

This test challenges **Duplicate PO hard block** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Existing active CPO for Customer A + PO-TEST-002

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Upload or enter the same Customer A + PO-TEST-002 again and press Create CPO.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Creation is hard-blocked.

A clear duplicate message appears and no second CPO/SO is created.

Warning-only behaviour is a Fail.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **creation is hard-blocked**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-008 · LOCK-04

↑ Back to Table of Contents

**BF-005 --- Do Not Show a Wrong Description for the Correct SKU · ★★★ · \~10 min**

**Your one job:** Do Not Show a Wrong Description for the Correct SKU.\
**Client role:** Sales\
**Product role:** Sales User\
**Account to use:** \[NEEDS INPUT: SALES_UAT_ACCOUNT\]\
**Mission type:** Regression

**Why you are doing this**

This test challenges **SQL item descriptions** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Use the observed roasted-chicken-seasoning example where the code is correct but description was missing/wrong (verify exact SQL code)

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Search the code and compare MAIA to SQL.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Any wrong, missing or conflicting description is a Fail even when the SKU code is correct.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **any wrong, missing or conflicting description is a Fail even when the SKU code is correct**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: SALES_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-041 · LOCK-19

↑ Back to Table of Contents

**BF-006 --- Block Credit at Sales Order Submission · ★★★ · \~10 min**

**Your one job:** Block Credit at Sales Order Submission.\
**Client role:** UAT lead\
**Product role:** \[GAP: UAT coordination role\]\
**Account to use:** \[NEEDS INPUT: UAT_OWNER_ACCOUNT\]\
**Mission type:** Regression

**Why you are doing this**

This test challenges **Credit-limit block at SO submission** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Record or customer:** Over-limit customer

**Item, document, or state:** observe draft, SO submission and invoice stages

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Submit the SO and note when the block first appears.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

The block appears at SO submission, not only at invoice stage.

A later-only block is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **the block appears at SO submission, not only at invoice stage**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: UAT_OWNER_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-018 · LOCK-08

↑ Back to Table of Contents

**BF-007 --- Reject a MAIA-Generated Invoice Substitute · ★★★ · \~10 min**

**Your one job:** Reject a MAIA-Generated Invoice Substitute.\
**Client role:** Finance\
**Product role:** Finance\
**Account to use:** \[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]\
**Mission type:** Regression

**Why you are doing this**

This test challenges **SQL invoice PDF** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Same SQL invoice

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

Download/view invoice through MAIA.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

A MAIA-generated substitute template instead of the SQL PDF is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The prohibited action succeeds, or the required refusal, validation, or clarification does not appear.

The product creates or changes a downstream record that should remain untouched.

The message points to the wrong record, hides the reason, or gives the user an unsafe next step.

**This mission is complete when**

This mission is complete when **a MAIA-generated substitute template instead of the SQL PDF is a Fail**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: FINANCE_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-043 · LOCK-20

↑ Back to Table of Contents

**BF-008 --- Keep Test-Only Data Out of Production · ★★★ · \~10 min**

**Your one job:** Keep Test-Only Data Out of Production.\
**Client role:** Admin\
**Product role:** Admin\
**Account to use:** \[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]\
**Mission type:** Regression

**Why you are doing this**

This test challenges **Live SQL cutover** using a controlled edge case. The product must fail safely and explain the result.

***Why this matters:** A wrong result could let Mackessen act on incorrect, unauthorised, duplicated, stale, or incomplete operational data.*

**Start here**

Use this exact input or state:

**Required test state:** Known test-only customer/item exists in test SQL but not live SQL

**How to obtain it:** Follow the preparation checklist. Use the named seeded record or a reserved equivalent only when every visible criterion above is preserved.

***Stop:** Do not inspect or alter SQL, APIs, queues, logs, source code, real balances, real stock, or unrelated production records.*

**Do this**

Sign in using **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]**.

Confirm the visible record or starting state matches the **Start here** section.

After cutover search for the test-only record.

Record the final visible status, message, or reference before leaving the screen.

**Pass when**

Test-only data is not visible in production.

Its presence is a Fail.

No prohibited downstream record, duplicate, or data exposure occurs.

A clear final status, message, or reference is visible.

**Fail when**

Mark **Fail** when any of these occurs:

The visible result does not match the Pass conditions for the prepared boundary or state.

The result occurs for the wrong record, user, date, quantity, or workflow stage.

The product creates a duplicate, unsafe, or hidden downstream result.

**This mission is complete when**

This mission is complete when **test-only data is not visible in production**, the final record/message/reference is noted, and one screenshot proves the result. **Stop here; do not continue into another role or scenario.**

**If you cannot start**

**Blocked --- Access:** The required account **\[NEEDS INPUT: ADMIN_UAT_ACCOUNT\]** is unavailable, incorrectly linked, or lacks the screen/action needed to start.

**Blocked --- Test Data:** The exact prepared record, document, status, or visible selection criteria cannot be found.

**Blocked --- Configuration:** The required role rule, threshold, schedule, approval, notification, or workflow state has not been configured.

**Blocked --- Environment:** MAIA, Telegram, or the approved UAT environment cannot be opened or used reliably.

**Blocked --- Dependency:** A scheduled run, prior handoff, controlled data change, or client/product-team action has not occurred.

After five minutes, select the correct blocked result, capture the visible issue, and continue with another mission.

**If the product fails mid-way**

The attempted unsafe action must remain uncompleted. Existing valid work must stay intact, no prohibited downstream record may be created, and the product should show a clear reason plus a safe correction or retry path.

**Evidence to capture**

Final record, document, message, or reference ID

Exact input or prepared state used

One screenshot proving the final result

One screenshot proving the refusal, warning, clarification, or error

Role/account and timestamp

**Organiser traceability:** UP-072 · LOCK-35

↑ Back to Table of Contents

**Section 11 Field Manual**

**Result options**

Pass

Fail

Blocked --- Test Data

Blocked --- Access

Blocked --- Configuration

Blocked --- Environment

Blocked --- Dependency

Observation

Observation --- Out of Scope

**Minimal result record**

Mission ID

Persona / product role

Input used

Input source: Provided / Generated / Seeded / Self-discovered / Tester-created / Alternative

What happened

What was expected

Result

Evidence

Notes

**Evidence rules**

Capture only the input, relevant record/document ID, timestamp, final status/message, and one screenshot proving the result. Permission/refusal missions also need the refusal message. Do not capture unrelated client data.

**Help and blockers**

Ask in \[NEEDS INPUT: SUPPORT_CHANNEL\] with the mission ID, role/account, record, attempted action, exact visible problem, timestamp, and screenshot. Do not wait on the same mission after five minutes.

**Section 12 Compact coverage appendix**

**Test-case disposition**

  ------------------ ----------------- ---------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------
  Source test case   Disposition       Atomic mission(s)                                                      Reason split or retained

  HP-001             ADAPTED MISSION   M-001, M-002, M-003, M-004                                             Split because the source row contained different roles, starting states, actions, or completion points.

  HP-002             ACTIVE MISSION    M-007                                                                  Retained as one atomic objective with one defined final outcome.

  HP-003             ACTIVE MISSION    M-010                                                                  Retained as one atomic objective with one defined final outcome.

  HP-004             ACTIVE MISSION    M-011                                                                  Retained as one atomic objective with one defined final outcome.

  HP-005             ACTIVE MISSION    M-012                                                                  Retained as one atomic objective with one defined final outcome.

  HP-006             ACTIVE MISSION    M-019                                                                  Retained as one atomic objective with one defined final outcome.

  HP-007             ADAPTED MISSION   M-021, M-022, M-023                                                    Split because the source row contained different roles, starting states, actions, or completion points.

  HP-008             ACTIVE MISSION    M-031                                                                  Retained as one atomic objective with one defined final outcome.

  HP-009             ADAPTED MISSION   M-034, M-035                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  HP-010             ADAPTED MISSION   M-038, M-039                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  HP-011             ACTIVE MISSION    M-042                                                                  Retained as one atomic objective with one defined final outcome.

  HP-012             ADAPTED MISSION   M-045, M-046, M-047                                                    Split because the source row contained different roles, starting states, actions, or completion points.

  HP-013             ACTIVE MISSION    M-058                                                                  Retained as one atomic objective with one defined final outcome.

  HP-014             ACTIVE MISSION    M-061                                                                  Retained as one atomic objective with one defined final outcome.

  HP-015             ADAPTED MISSION   M-064, M-065, M-066                                                    Split because the source row contained different roles, starting states, actions, or completion points.

  HP-016             ACTIVE MISSION    M-069                                                                  Retained as one atomic objective with one defined final outcome.

  HP-017             ADAPTED MISSION   M-072, M-073                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  HP-018             ACTIVE MISSION    M-076                                                                  Retained as one atomic objective with one defined final outcome.

  HP-019             ADAPTED MISSION   M-079, M-080, M-081                                                    Split because the source row contained different roles, starting states, actions, or completion points.

  HP-020             ACTIVE MISSION    M-026                                                                  Retained as one atomic objective with one defined final outcome.

  HP-021             ACTIVE MISSION    M-029                                                                  Retained as one atomic objective with one defined final outcome.

  HP-022             ACTIVE MISSION    M-084                                                                  Retained as one atomic objective with one defined final outcome.

  HP-023             ACTIVE MISSION    M-087                                                                  Retained as one atomic objective with one defined final outcome.

  HP-024             ADAPTED MISSION   M-090, M-091                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  HP-025             ACTIVE MISSION    M-094                                                                  Retained as one atomic objective with one defined final outcome.

  HP-026             ACTIVE MISSION    M-097                                                                  Retained as one atomic objective with one defined final outcome.

  HP-027             ADAPTED MISSION   M-101, M-102, M-103                                                    Split because the source row contained different roles, starting states, actions, or completion points.

  HP-028             ACTIVE MISSION    M-107                                                                  Retained as one atomic objective with one defined final outcome.

  HP-029             ACTIVE MISSION    M-111                                                                  Retained as one atomic objective with one defined final outcome.

  HP-030             ACTIVE MISSION    M-114                                                                  Retained as one atomic objective with one defined final outcome.

  HP-031             ACTIVE MISSION    M-117                                                                  Retained as one atomic objective with one defined final outcome.

  HP-032             ACTIVE MISSION    M-120                                                                  Retained as one atomic objective with one defined final outcome.

  HP-033             ACTIVE MISSION    M-016                                                                  Retained as one atomic objective with one defined final outcome.

  HP-034             ACTIVE MISSION    BF-001                                                                 Retained as one atomic objective with one defined final outcome.

  HP-035             ADAPTED MISSION   M-123, M-124                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  HP-036             ACTIVE MISSION    M-128                                                                  Retained as one atomic objective with one defined final outcome.

  HP-037             ADAPTED MISSION   M-130, M-131, M-132, M-133, M-134, M-135, M-136, M-137, M-138, M-139   Split because the source row contained different roles, starting states, actions, or completion points.

  UP-001             ACTIVE MISSION    M-005                                                                  Retained as one atomic objective with one defined final outcome.

  UP-002             ACTIVE MISSION    M-006                                                                  Retained as one atomic objective with one defined final outcome.

  UP-003             ACTIVE MISSION    M-008                                                                  Retained as one atomic objective with one defined final outcome.

  UP-004             ACTIVE MISSION    M-009                                                                  Retained as one atomic objective with one defined final outcome.

  UP-005             ACTIVE MISSION    M-013                                                                  Retained as one atomic objective with one defined final outcome.

  UP-006             ACTIVE MISSION    M-014                                                                  Retained as one atomic objective with one defined final outcome.

  UP-007             ACTIVE MISSION    M-015                                                                  Retained as one atomic objective with one defined final outcome.

  UP-008             ACTIVE MISSION    BF-004                                                                 Retained as one atomic objective with one defined final outcome.

  UP-009             ACTIVE MISSION    M-020                                                                  Retained as one atomic objective with one defined final outcome.

  UP-010             ACTIVE MISSION    M-024                                                                  Retained as one atomic objective with one defined final outcome.

  UP-011             ACTIVE MISSION    M-025                                                                  Retained as one atomic objective with one defined final outcome.

  UP-012             ACTIVE MISSION    M-032                                                                  Retained as one atomic objective with one defined final outcome.

  UP-013             ACTIVE MISSION    M-033                                                                  Retained as one atomic objective with one defined final outcome.

  UP-014             ACTIVE MISSION    M-036                                                                  Retained as one atomic objective with one defined final outcome.

  UP-015             ACTIVE MISSION    M-037                                                                  Retained as one atomic objective with one defined final outcome.

  UP-016             ACTIVE MISSION    M-040                                                                  Retained as one atomic objective with one defined final outcome.

  UP-017             ACTIVE MISSION    M-041                                                                  Retained as one atomic objective with one defined final outcome.

  UP-018             ACTIVE MISSION    BF-006                                                                 Retained as one atomic objective with one defined final outcome.

  UP-019             ACTIVE MISSION    M-043                                                                  Retained as one atomic objective with one defined final outcome.

  UP-020             ACTIVE MISSION    M-044                                                                  Retained as one atomic objective with one defined final outcome.

  UP-021             ACTIVE MISSION    M-048                                                                  Retained as one atomic objective with one defined final outcome.

  UP-022             ADAPTED MISSION   M-049, M-050, M-051, M-052                                             Split because the source row contained different roles, starting states, actions, or completion points.

  UP-023             ADAPTED MISSION   M-053, M-054, M-055, M-056                                             Split because the source row contained different roles, starting states, actions, or completion points.

  UP-024             ACTIVE MISSION    M-057                                                                  Retained as one atomic objective with one defined final outcome.

  UP-025             ACTIVE MISSION    M-059                                                                  Retained as one atomic objective with one defined final outcome.

  UP-026             ACTIVE MISSION    M-060                                                                  Retained as one atomic objective with one defined final outcome.

  UP-027             ACTIVE MISSION    M-062                                                                  Retained as one atomic objective with one defined final outcome.

  UP-028             ACTIVE MISSION    M-063                                                                  Retained as one atomic objective with one defined final outcome.

  UP-029             ACTIVE MISSION    M-067                                                                  Retained as one atomic objective with one defined final outcome.

  UP-030             ACTIVE MISSION    M-068                                                                  Retained as one atomic objective with one defined final outcome.

  UP-031             ACTIVE MISSION    M-070                                                                  Retained as one atomic objective with one defined final outcome.

  UP-032             ACTIVE MISSION    M-071                                                                  Retained as one atomic objective with one defined final outcome.

  UP-033             ACTIVE MISSION    M-074                                                                  Retained as one atomic objective with one defined final outcome.

  UP-034             ACTIVE MISSION    M-075                                                                  Retained as one atomic objective with one defined final outcome.

  UP-035             ACTIVE MISSION    M-077                                                                  Retained as one atomic objective with one defined final outcome.

  UP-036             ACTIVE MISSION    M-078                                                                  Retained as one atomic objective with one defined final outcome.

  UP-037             ACTIVE MISSION    M-082                                                                  Retained as one atomic objective with one defined final outcome.

  UP-038             ACTIVE MISSION    M-083                                                                  Retained as one atomic objective with one defined final outcome.

  UP-039             ACTIVE MISSION    M-027                                                                  Retained as one atomic objective with one defined final outcome.

  UP-040             ACTIVE MISSION    M-028                                                                  Retained as one atomic objective with one defined final outcome.

  UP-041             ACTIVE MISSION    BF-005                                                                 Retained as one atomic objective with one defined final outcome.

  UP-042             ACTIVE MISSION    M-030                                                                  Retained as one atomic objective with one defined final outcome.

  UP-043             ACTIVE MISSION    BF-007                                                                 Retained as one atomic objective with one defined final outcome.

  UP-044             ADAPTED MISSION   M-085, M-086                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  UP-045             ACTIVE MISSION    M-088                                                                  Retained as one atomic objective with one defined final outcome.

  UP-046             ACTIVE MISSION    M-089                                                                  Retained as one atomic objective with one defined final outcome.

  UP-047             ACTIVE MISSION    M-092                                                                  Retained as one atomic objective with one defined final outcome.

  UP-048             ACTIVE MISSION    M-093                                                                  Retained as one atomic objective with one defined final outcome.

  UP-049             ACTIVE MISSION    M-095                                                                  Retained as one atomic objective with one defined final outcome.

  UP-050             ACTIVE MISSION    M-096                                                                  Retained as one atomic objective with one defined final outcome.

  UP-051             ACTIVE MISSION    M-098                                                                  Retained as one atomic objective with one defined final outcome.

  UP-052             ADAPTED MISSION   M-099, M-100                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  UP-053             ACTIVE MISSION    M-104                                                                  Retained as one atomic objective with one defined final outcome.

  UP-054             ACTIVE MISSION    M-105                                                                  Retained as one atomic objective with one defined final outcome.

  UP-055             ACTIVE MISSION    M-106                                                                  Retained as one atomic objective with one defined final outcome.

  UP-056             ACTIVE MISSION    M-108                                                                  Retained as one atomic objective with one defined final outcome.

  UP-057             ADAPTED MISSION   M-109, M-110                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  UP-058             ACTIVE MISSION    M-112                                                                  Retained as one atomic objective with one defined final outcome.

  UP-059             ACTIVE MISSION    M-113                                                                  Retained as one atomic objective with one defined final outcome.

  UP-060             ACTIVE MISSION    M-115                                                                  Retained as one atomic objective with one defined final outcome.

  UP-061             ACTIVE MISSION    M-116                                                                  Retained as one atomic objective with one defined final outcome.

  UP-062             ACTIVE MISSION    M-118                                                                  Retained as one atomic objective with one defined final outcome.

  UP-063             ACTIVE MISSION    M-119                                                                  Retained as one atomic objective with one defined final outcome.

  UP-064             ACTIVE MISSION    M-121                                                                  Retained as one atomic objective with one defined final outcome.

  UP-065             ACTIVE MISSION    M-122                                                                  Retained as one atomic objective with one defined final outcome.

  UP-066             ACTIVE MISSION    M-017                                                                  Retained as one atomic objective with one defined final outcome.

  UP-067             ACTIVE MISSION    M-018                                                                  Retained as one atomic objective with one defined final outcome.

  UP-068             ACTIVE MISSION    BF-002                                                                 Retained as one atomic objective with one defined final outcome.

  UP-069             ACTIVE MISSION    BF-003                                                                 Retained as one atomic objective with one defined final outcome.

  UP-070             ACTIVE MISSION    M-125                                                                  Retained as one atomic objective with one defined final outcome.

  UP-071             ADAPTED MISSION   M-126, M-127                                                           Split because the source row contained different roles, starting states, actions, or completion points.

  UP-072             ACTIVE MISSION    BF-008                                                                 Retained as one atomic objective with one defined final outcome.

  UP-073             ACTIVE MISSION    M-129                                                                  Retained as one atomic objective with one defined final outcome.

  UP-074             ACTIVE MISSION    M-140                                                                  Retained as one atomic objective with one defined final outcome.

  UP-075             ACTIVE MISSION    M-141                                                                  Retained as one atomic objective with one defined final outcome.
  ------------------ ----------------- ---------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------

**Scope coverage**

  ---------------------------------------------------- -------------------------------------------------------------------------------------------
  Scope item                                           Mission or boundary section

  LOCK-01 --- Core order-to-delivery flow              M-001, M-002, M-003, M-004, M-005, M-006

  LOCK-02 --- Telegram go-live channel                 M-007, M-008, M-009

  LOCK-03 --- Order extraction                         M-010, M-011, M-012, M-013, M-014, M-015

  LOCK-04 --- Duplicate PO hard block                  M-019, BF-004, M-020

  LOCK-05 --- SQL source of truth                      M-021, M-022, M-023, M-024, M-025

  LOCK-06 --- Customer-specific pricing                M-031, M-032, M-033

  LOCK-07 --- Minimum-price approval                   M-034, M-035, M-036, M-037

  LOCK-08 --- Credit-limit block at SO submission      M-038, M-039, M-040, M-041, BF-006

  LOCK-09 --- Credit Controller bypass by role         M-042, M-043, M-044

  LOCK-10 --- Payment-term enforcement                 M-045, M-046, M-047, M-048, M-049, M-050, M-051, M-052, M-053, M-054, M-055, M-056, M-057

  LOCK-11 --- Warning acknowledgement and audit        M-058, M-059, M-060

  LOCK-12 --- Stock is informational                   M-061, M-062, M-063

  LOCK-13 --- Low/out-of-stock alerts                  M-064, M-065, M-066, M-067, M-068

  LOCK-14 --- 9:00 AM stock summary                    M-069, M-070, M-071

  LOCK-15 --- Delayed-delivery alert                   M-072, M-073, M-074, M-075

  LOCK-16 --- 9:00 AM operational digest               M-076, M-077, M-078

  LOCK-17 --- Partial-delivery reminders               M-079, M-080, M-081, M-082, M-083

  LOCK-18 --- Customer master fields                   M-026, M-027, M-028

  LOCK-19 --- SQL item descriptions                    M-029, BF-005, M-030

  LOCK-20 --- SQL invoice PDF                          M-084, BF-007, M-085, M-086

  LOCK-21 --- Single-level invoice approval            M-087, M-088, M-089

  LOCK-23 --- Document date handling                   M-090, M-091, M-092, M-093

  LOCK-24 --- Surcharge SQL SKU                        M-094, M-095, M-096

  LOCK-25 --- Credit-note batch carry-over             M-097, M-098, M-099, M-100

  LOCK-26 --- Credit-note permissions and return SOP   M-101, M-102, M-103, M-104, M-105, M-106

  LOCK-27 --- Item creation permissions                M-107, M-108, M-109, M-110

  LOCK-28 --- COA indexing and linking                 M-111, M-112, M-113

  LOCK-29 --- Batch-level C3 exemption                 M-114, M-115, M-116

  LOCK-30 --- SQL e-invoice boundary                   M-117, M-118, M-119

  LOCK-31 --- Finance chatbot                          M-120, M-121, M-122

  LOCK-32 --- Short chatbot responses                  M-016, M-017, M-018

  LOCK-33 --- Chatbot stability                        BF-001, BF-002, BF-003

  LOCK-34 --- UAT role coverage and sign-off           M-123, M-124, M-125, M-126, M-127

  LOCK-35 --- Live SQL cutover                         M-128, BF-008, M-129

  LOCK-36 --- Supported document set                   M-130, M-131, M-132, M-133, M-134, M-135, M-136, M-137, M-138, M-139, M-140, M-141

  LOCK-22 --- Multi-level invoice approval             Section 4 --- Out of scope
  ---------------------------------------------------- -------------------------------------------------------------------------------------------

**Persona-rule coverage**

  --------------------------- ----------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------
  Persona                     Business rule                                                                                               Mission source coverage

  Sales User                  Complete order data; no guessing; request approvals; no self-approval/override/CN issuance/item creation.   LOCK-01, LOCK-03, LOCK-06--10, LOCK-18--19, LOCK-23, LOCK-26--27

  Sales Manager               Approve minimum-price exception and edit date only where permitted.                                         LOCK-07, LOCK-23

  Logistics                   Fulfil only valid SOs; preserve partial quantity; confirm returns where assigned.                           LOCK-01, LOCK-15, LOCK-17, LOCK-26

  Credit Controller / Irene   Role-based credit override and operational alerts.                                                          LOCK-09, LOCK-13--15, LOCK-17

  Finance/Admin               Original invoice, approvals, returns, batches, item master, tax boundary, finance access.                   LOCK-08, LOCK-10, LOCK-20--31

  Supply Chain                Index and link only the correct COA.                                                                        LOCK-28

  Management                  View lifecycle and complete operational digest.                                                             LOCK-01, LOCK-16

  Maye / UAT coordinator      Require role coverage, evidence, and approved sign-off.                                                     LOCK-34
  --------------------------- ----------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------

**Excluded source boundaries**

  ------------------------------------------------------------------------------------------------------------------ ---------------------------------------------------------
  Boundary                                                                                                           Disposition

  Multi-level invoice approval                                                                                       OUT OF SCOPE / customisation

  WhatsApp activation                                                                                                OUT OF SCOPE / currently blocked, not a go-live failure

  Product-level or item-quantity C3 allocation                                                                       DEFERRED / explicitly excluded

  Individual-user reminder tailoring                                                                                 DEFERRED

  Move e-invoice into MAIA                                                                                           OUT OF SCOPE

  Phase B logistics, warehouse, reconciliation, forecasting, POD, language, CRM, portal, calculator, voucher items   Observation only; not active missions
  ------------------------------------------------------------------------------------------------------------------ ---------------------------------------------------------

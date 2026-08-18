**05Aug26_MacroFrozen_Role_Workflows_Before_After_MAIA_v0.2**

**Role Workflows --- Before / After MAIA**

**Document Version History**

  ------------ --------------- ------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------
  Version      Date            Prepared By         What Changed From the Previous Version                                                                                                                                                                                                                                                                                                                                                              Status

  v0.1         31 July 2026    MAIA Project Team   First full Macro Frozen workflow draft prepared from the available project files and Fireflies meeting evidence.                                                                                                                                                                                                                                                                                    Draft --- being prepared

  v0.2         5 August 2026   MAIA Project Team   Rebuilt the document using Prompt Pack v1.2; added collapsible process, role and handoff sections; simplified the language; split the warehouse picker and checker into separate roles; separated permanent workflows from temporary implementation issues; and recorded the unresolved conflicts concerning Sales Order submission timing, the MAIA pick-list scope and proof-of-delivery scope.   Ready for client validation
  ------------ --------------- ------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------

**1. Document Overview**

  ---------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Field                                    Details

  Client                                   Macro Frozen Sdn. Bhd. / Macrofood

  Project                                  Macro Frozen × MAIA Implementation

  Document version                         v0.2

  Document status                          **Ready for client validation**

  Date                                     5 August 2026

  Business coverage                        Macro Frozen's customer-order-to-payment workflow, including sales, commercial approval, warehouse picking, actual-weight confirmation, delivery documents, payment matching, customer records, prices, catalogue updates and stock alerts

  Main client representatives referenced   David, CJ, Lai and Grace

  Processes covered                        Customer order to invoice; price and credit approval; pick-list preparation and actual-weight confirmation; delivery and proof of delivery; payment matching and overdue follow-up; customer and lead records; price and catalogue updates; low-stock and near-expiry alerts; credit-note correction

  Processes not covered                    Purchasing and Purchase Orders; supplier invoice matching; Goods Received Note entry in MAIA; Accounts Payable; merchant or QR settlement reconciliation; full warehouse management; barcode scanning; stock counting; automated purchasing; route planning; full delivery-trip management; fleet GPS or temperature integration; automated customer ordering; automated WhatsApp broadcasting; final bank reconciliation

  Locations covered                        The overall Macro Frozen operation. The evidence mentions five warehouses, but the user assignment for each warehouse is not defined.

  Purpose                                  This document explains how Macro Frozen performs the work today and how the same work is intended to operate after MAIA is introduced. It shows who acts, what they do, when they act, why the step is needed and who receives the work next.

  Intended use                             Client workflow validation, user acceptance testing preparation, role-based training, trainer briefing, adoption planning and go-live preparation

  Main limitation                          No signed Scope Lock or signed workflow-approval record was found in the currently available project files. July training and UAT evidence shows a later working model, but attendance or testing alone does not prove final approval.
  ---------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**2. How to Read This Document**

**Before MAIA** shows the working practice described by Macro Frozen during discovery.

**After MAIA** shows the strongest supported future workflow. Where July evidence differs from the June discovery decision, the difference is stated.

**Confirmed** means the relevant user and process owner have agreed to the workflow.

**Needs confirmation** means a usable draft exists, but a specific owner, rule, exception or handoff still requires a client decision.

**Not defined** means the available evidence is not sufficient to describe the role or workflow safely.

Temporary system limitations and unfinished functions appear only in the supporting appendices. They do not change the intended permanent workflow.

**3. People and Roles Covered**

**Internal Client Roles**

  --------------------------- ----------------------------------------------------------------------- ----------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------- --------------------
  Role                        Named User or Representative                                            Process Owner                                                                 Main Responsibility                                                                                                        Status

  Salesperson                 Candidate representatives: Queenie and Benz --- confirmation required   CJ                                                                            Interprets customer orders, reviews draft Sales Orders and maintains own customer or lead information                      Needs confirmation

  Sales Order Submitter       CJ                                                                      CJ, with David controlling commercial exceptions                              Reviews a draft Sales Order and submits it when it is ready for the next team                                              Needs confirmation

  Credit Controller           David                                                                   David                                                                         Decides whether an order with a credit problem may proceed                                                                 Needs confirmation

  Price Controller            David                                                                   David                                                                         Decides whether a requested selling price may proceed and maintains price rules                                            Needs confirmation

  Catalogue Maintainer        David                                                                   David                                                                         Reviews product and price information and prepares customer-facing catalogue images                                        Needs confirmation

  Pick-List Coordinator       Lai                                                                     Lai for daily warehouse coordination; David for overall operating policy      Receives ready orders, groups them, prepares the pick list, records confirmed actuals and prepares a draft Delivery Note   Needs confirmation

  Warehouse Picker            Named representative: Not yet identified                                Lai                                                                           Picks the product and records the actual quantity or weight                                                                Not defined

  Warehouse Checker           Named representative: Not yet identified                                Lai                                                                           Checks the picked item, actual weight and written record before the result is used                                         Not defined

  Finance and Accounts User   Grace                                                                   Grace for document and payment work; David for credit and collection policy   Reviews Delivery Notes and invoices, handles credit notes, confirms payment matches and follows up outstanding accounts    Needs confirmation

  Driver                      Named representative: Not yet identified                                Owner not confirmed                                                           Delivers the goods, obtains proof of delivery and hands payment information or cash references to Finance                  Not defined
  --------------------------- ----------------------------------------------------------------------- ----------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------- --------------------

David performs three separate roles in this document: Credit Controller, Price Controller and Catalogue Maintainer. These roles are shown separately because the decisions and training needs differ.

**External Parties and Systems**

  ------------------------------------ ---------------------------------------------------------------------------------------------------
  Party or System                      Role in the Work

  Customer                             Sends the order, answers questions, receives goods and documents, and provides payment evidence

  SQL                                  Keeps the accounting and existing customer, item and transaction records

  WhatsApp                             Remains the customer communication channel and is also used for several current internal handoffs

  External finance consultant          Completes the final bank reconciliation outside MAIA

  Third-party delivery provider        May deliver goods and return proof of delivery; access to MAIA is not defined

  SQL vendor or support provider       Supports access, field mapping and transfer problems between MAIA and SQL

  Paper pick list and weighing scale   Remain part of the physical warehouse process

  Excel packing list                   Currently carries detailed weight information; its future use is not confirmed
  ------------------------------------ ---------------------------------------------------------------------------------------------------

**4. Overall Workflow at a Glance**

**Before MAIA**

  --------------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order through WhatsApp\
  ↓\
  SALESPERSON Interprets the message → Forwards the order to the company group\
  ↓\
  DAVID Consolidates orders → Plans the warehouse and delivery work\
  ↓\
  WAREHOUSE Picks the goods → Weighs them → Writes the actual quantity on paper\
  ↓\
  GRACE Re-enters the final quantity in SQL → Creates the DO and invoice\
  ↓\
  DRIVER Delivers the goods → Returns signed proof through WhatsApp\
  ↓\
  GRACE Matches the payment → Records it in SQL and supporting Excel records\
  ↓\
  CONSULTANT Completes the final bank reconciliation outside MAIA

  --------------------------------------------------------------------------------

**After MAIA --- Current Working Model for Validation**

  -----------------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order through WhatsApp\
  ↓\
  SALESPERSON Sends the order to MAIA → Reviews and corrects the draft Sales Order\
  ↓\
  MAIA Shows item, quantity, price, credit and customer information\
  ↓\
  CJ Submits a ready Sales Order\
  ↓\
  DAVID Reviews only an order that needs price or credit approval\
  ↓\
  LAI Groups the ready orders → Prints the pick list\
  ↓\
  PICKER Picks and weighs the goods → Records actual quantities\
  ↓\
  CHECKER Checks the item, weight and written result\
  ↓\
  LAI Updates the actuals → Prepares a draft Delivery Note\
  ↓\
  GRACE Reviews the Delivery Note → Creates the invoice → Confirms SQL transfer\
  ↓\
  DRIVER Delivers → Returns proof of delivery\
  ↓\
  GRACE Confirms the payment match → Updates the accounting record\
  ↓\
  CONSULTANT Completes the final bank reconciliation outside MAIA

  -----------------------------------------------------------------------------------

**Main Changes**

Customer orders are changed from free-form internal handoffs into reviewed Sales Orders in MAIA.

CJ becomes the named person who submits a normal Sales Order; David handles price and credit problems.

Lai receives ready orders and becomes responsible for the pick-list-to-draft-Delivery-Note handoff.

Physical picking, checking, weighing, route planning and cash custody remain human activities.

Grace reviews prepared documents and payment suggestions instead of rebuilding every record from separate messages and papers.

SQL remains the accounting system, while final bank reconciliation remains outside MAIA.

**5. Detailed Process Workflows**

**Customer Order to Invoice --- How a customer request becomes a confirmed invoice**

**Why This Process Exists**

Macro Frozen sells products whose final weight may differ from the customer's requested quantity. The process must preserve the customer's order, the actual warehouse result and the final quantity used for the Delivery Note and invoice.

**When It Starts**

The process starts when a customer sends an order to a salesperson through WhatsApp.

**When It Ends**

The process ends when Grace has reviewed the final quantity, created the invoice and confirmed that the required record is in SQL.

**Who Is Involved**

The **Salesperson** interprets and checks the customer's request.

**CJ** submits a ready Sales Order.

**David** handles a price or credit problem.

**Lai** prepares the pick list and records the confirmed actual result.

The **Warehouse Picker** and **Warehouse Checker** perform and verify the physical work.

**Grace** completes the Delivery Note and invoice.

**Before MAIA**

  --------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order by WhatsApp, PO, voice note or informal message\
  ↓\
  SALESPERSON Interprets the product, cut, quantity and delivery request\
  ↓\
  SALESPERSON Forwards the understood order to the company WhatsApp group\
  ↓\
  DAVID Consolidates orders and arranges the warehouse work\
  ↓\
  WAREHOUSE Picks → Weighs → Writes the actual quantity on paper\
  ↓\
  GRACE Re-enters the final quantity in SQL\
  ↓\
  GRACE Creates the DO → Creates the invoice

  --------------------------------------------------------------------------

**After MAIA**

  ----------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order through WhatsApp\
  ↓\
  SALESPERSON Sends the order to MAIA\
  ↓\
  MAIA Creates a draft Sales Order\
  ↓\
  SALESPERSON Checks customer, item, UOM, quantity, price and remarks\
  ↓\
  Is the order ready?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  CJ Submits SALESPERSON corrects or asks the customer\
  ↓\
  LAI Prepares the pick list\
  ↓\
  PICKER Picks and weighs the goods\
  ↓\
  CHECKER Confirms the item and actual quantity\
  ↓\
  LAI Records the actuals → Prepares a draft Delivery Note\
  ↓\
  GRACE Reviews the Delivery Note → Creates the invoice\
  ↓\
  SQL Receives the confirmed records that are supported

  ----------------------------------------------------------------------

**What Changes**

The salesperson checks a structured draft rather than relying only on a forwarded message.

A saved draft is not ready for the warehouse until an authorised user submits it.

Lai receives the submitted order and prepares the warehouse work.

Actual weight remains a warehouse result and must be used in the later documents.

Grace reviews prepared information instead of retyping the full process from separate sources.

**What Stays the Same**

Customers continue to send orders through WhatsApp.

Salespeople still interpret product shorthand and ask the customer when information is unclear.

Warehouse staff still pick, weigh and check the physical goods.

SQL remains the accounting system.

A person still checks the final quantity before the invoice is completed.

**Why the Changes Matter**

The change reduces repeated typing and makes it clearer which order is still a draft, which order is ready for the warehouse and which quantity is the final warehouse-confirmed amount.

**Important Rules**

A saved draft is not ready for picking.

A price or credit problem must be decided before the order proceeds.

The final Delivery Note and invoice must use the confirmed actual quantity.

MAIA does not decide the final commercial exception or the physical quantity.

**Important Exception Flow**

  --------------------------------------------------------------
  Plaintext\
  SALESPERSON Reviews the draft Sales Order\
  ↓\
  What is wrong?\
  ↙ ↓ ↘\
  MISSING DETAIL PRICE ISSUE CREDIT ISSUE\
  ↓ ↓ ↓\
  SALESPERSON Asks customer DAVID reviews\
  ↓ ↓ ↓\
  SALESPERSON Corrects draft Approve, revise or reject\
  \\ \| /\
  \\ \| /\
  ↓\
  CJ Submits only after the problem is resolved

  --------------------------------------------------------------

**Needs Confirmation**

Does CJ submit the Sales Order before picking, as used in the July working model, or is it submitted only after the actual weight is entered, as stated in the 4 June target workflow?

After CJ submits the Sales Order, who may change the ordered quantity to the actual warehouse quantity?

Is the MAIA pick list part of the go-live workflow or a later phase?

Which document moves to SQL at each stage, and what is the manual fallback when a transfer does not work?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** Current practice was explained by David, CJ and the Finance representative during the 4 June workshop.

**How it was confirmed:** Current-process walkthrough, later training and UAT.

**Still missing:** A single approved future sequence for Sales Order submission, actual-weight update, pick-list use and document transfer to SQL.

**Price and Credit Approval --- How an order with a commercial problem is decided**

**Why This Process Exists**

Macro Frozen needs to prevent sales below an accepted price and prevent further exposure when a customer has exceeded the agreed credit position.

**When It Starts**

The process starts when MAIA shows that a requested price or customer credit position needs approval.

**When It Ends**

The process ends when David approves, returns or rejects the order and the salesperson knows the decision.

**Who Is Involved**

The **Salesperson** prepares the draft and explains the request.

**David**, as Price Controller or Credit Controller, decides the exception.

**CJ** submits the order after the issue is resolved, unless David is authorised to submit it directly.

**Before MAIA**

  ----------------------------------------------------------------------------------
  Plaintext\
  SALESPERSON Checks the price or customer position using SQL, messages or memory\
  ↓\
  SALESPERSON Notices a special-price or payment concern\
  ↓\
  SALESPERSON Contacts David through WhatsApp, phone or conversation\
  ↓\
  DAVID Reviews the customer and commercial situation\
  ↓\
  DAVID Says proceed, revise or stop\
  ↓\
  SALESPERSON Changes or continues the order

  ----------------------------------------------------------------------------------

**After MAIA**

  -----------------------------------------------------------------------------
  Plaintext\
  SALESPERSON Saves the reviewed draft Sales Order\
  ↓\
  MAIA Shows the price and credit result\
  ↓\
  Does the order need approval?\
  ↙ ↘\
  NO YES\
  ↓ ↓\
  CJ Submits SALESPERSON sends the request to David\
  ↓ ↓\
  LAI Receives order DAVID reviews the order and customer\
  ↓\
  Approve, return or reject\
  ↙ ↘\
  APPROVE NOT APPROVED\
  ↓ ↓\
  SUBMITTER NOT CONFIRMED Submits after approval SALESPERSON revises or stops

  -----------------------------------------------------------------------------

**What Changes**

The price or credit problem is shown against the Sales Order.

David's decision is recorded with the order rather than existing only in a separate message.

The salesperson cannot quietly continue through an unresolved problem.

The person who requested the approval should be told the decision.

The exact submission authority after approval still needs to be fixed.

**What Stays the Same**

David remains the person who makes the commercial decision.

Human judgment is still required.

Sales still speaks with the customer when the requested price, payment or order must change.

**Why the Changes Matter**

The change makes it easier to prove who decided the exception and prevents the warehouse from starting work on an order that has not been commercially cleared.

**Important Rules**

MAIA may show or block the problem, but David makes the decision.

A standard salesperson cannot approve their own exception.

The order must not proceed until the required decision is recorded.

**Important Exception Flow**

  -------------------------------------------------------------------------
  Plaintext\
  DAVID Reviews the price or credit request\
  ↓\
  What is the decision?\
  ↙ ↓ ↘\
  APPROVE REVISE REJECT\
  ↓ ↓ ↓\
  ORDER SUBMITTER Releases order SALESPERSON updates Order stays stopped\
  ↓\
  Re-submit for review if required

  -------------------------------------------------------------------------

**Needs Confirmation**

Is David the only credit and price controller?

Who acts when David is unavailable?

May CJ override credit, or may CJ only submit a normal order?

Does MAIA keep the salesperson's requested below-minimum price for David to review, or replace it with the minimum price?

Is the credit rule based on amount limit, overdue period, the previous unpaid invoice, or a defined combination?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** David's role as Credit Controller and price decision-maker is supported by the June workshop and July working sessions.

**How it was confirmed:** Discovery discussion, scope clarification, training and UAT.

**Still missing:** Final delegation, exact rule behaviour and the person who submits after approval.

**Pick List and Actual Weight --- How the warehouse result is prepared and confirmed**

**Why This Process Exists**

The requested quantity is not always the quantity that can be delivered. Macro Frozen needs a clear record of what was picked, what each box weighed, who performed the pick and who checked it.

**When It Starts**

The process starts when Lai receives an order that is ready for warehouse action.

**When It Ends**

The process ends when Lai has the checked actual quantity and can prepare the draft Delivery Note.

**Who Is Involved**

**Lai** groups the orders and prepares the pick list.

The **Warehouse Picker** picks and weighs the goods.

The **Warehouse Checker** checks the item, quantity and written result.

The **Salesperson** or **CJ** handles a change that affects the customer.

**Before MAIA**

  ----------------------------------------------------------------
  Plaintext\
  SALESPERSON Sends the order to the company WhatsApp group\
  ↓\
  OWNER NOT CONFIRMED Groups orders by delivery place or driver\
  ↓\
  OFFICE Types or prepares the paper pick list\
  ↓\
  PICKER Picks the goods → Weighs them → Writes the result\
  ↓\
  CHECKER Checks the item and quantity\
  ↓\
  OWNER NOT CONFIRMED Re-enters the result in Excel or SQL

  ----------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  CJ Submits an order that is ready for picking\
  ↓\
  LAI Selects the orders → Groups them by the required run\
  ↓\
  LAI Creates and prints the pick list\
  ↓\
  PICKER Picks the correct product → Weighs each required box\
  ↓\
  PICKER Writes the actual quantity and box breakdown\
  ↓\
  CHECKER Checks the product, total and written breakdown\
  ↓\
  CHECKER Signs or identifies the completed check\
  ↓\
  LAI Records the confirmed actuals in MAIA\
  ↓\
  LAI Prepares the draft Delivery Note for Grace

  --------------------------------------------------------------

**What Changes**

The pick list can be prepared from ready Sales Orders instead of being rebuilt from messages.

Lai becomes the named owner of the warehouse handoff.

Actual quantity is recorded once for later documents.

Picker and checker accountability becomes more visible.

The exact treatment of the existing Excel packing list is not settled.

**What Stays the Same**

Warehouse staff still use physical goods, a scale and a printed working document.

Different boxes may have different weights.

A human must check the physical result.

The warehouse must stop and correct a wrong item or wrong quantity.

**Why the Changes Matter**

The process is intended to reduce wrong items, wrong weights and repeated re-entry while preserving the physical checks that the business relies on.

**Important Rules**

The ordered quantity is not automatically the final quantity.

The picker records the actual result.

The checker must verify the result before Lai uses it.

A customer-impacting shortage or substitution must be confirmed before invoicing.

**Important Exception Flow**

  ---------------------------------------------------------------
  Plaintext\
  CHECKER Finds a wrong item, short pick or weight difference\
  ↓\
  Can the warehouse correct it immediately?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  PICKER Re-picks or reweighs LAI stops the document\
  ↓ ↓\
  CHECKER Checks again SALESPERSON contacts customer if needed\
  \\ /\
  \\ /\
  ↓\
  LAI Records the result only after the issue is resolved

  ---------------------------------------------------------------

**Needs Confirmation**

Is the MAIA pick list now part of the agreed go-live scope, or does the warehouse continue using the existing external pick list?

Which fields must appear on the printed pick list?

Is the detailed box-weight breakdown kept in MAIA, Excel, the printed document or more than one place?

Who are the named Picker and Checker?

Must the Picker and Checker be different people?

What size of shortage or weight difference requires customer confirmation?

Who is allowed to change the quantity after the Sales Order has been submitted?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** The current paper process and actual-weight requirement were explained in the June workshop. Lai's proposed future responsibility was used in July training and UAT.

**How it was confirmed:** Current-process walkthrough, training and UAT.

**Still missing:** Named warehouse users, final document design, quantity-change rights and confirmation that the MAIA pick list is in the go-live scope.

**Delivery and Proof of Delivery --- How delivery evidence is returned to Finance**

**Why This Process Exists**

Macro Frozen needs to prove that the correct goods were delivered and make the signed document or photograph easy to find when a customer asks a question.

**When It Starts**

The process starts when Grace has completed the delivery documents and the goods are ready for the driver.

**When It Ends**

The process ends when Grace can retrieve the proof against the correct delivery and handle any delivery problem.

**Who Is Involved**

**Grace** prepares the delivery documents.

The **Driver** delivers the goods and obtains proof.

The **Customer** signs or provides delivery confirmation.

The **Salesperson** or **Grace** handles a failed or disputed delivery.

**Before MAIA**

  ----------------------------------------------------------------
  Plaintext\
  GRACE Creates and prints the DO and invoice\
  ↓\
  DRIVER Receives the goods and paper documents\
  ↓\
  DRIVER Plans the route using the existing method\
  ↓\
  DRIVER Delivers the goods → Obtains a signed DO or photograph\
  ↓\
  DRIVER Sends the proof to a WhatsApp group\
  ↓\
  GRACE Identifies and stores the proof manually

  ----------------------------------------------------------------

**After MAIA --- Proposed Working Model**

  -------------------------------------------------------------------
  Plaintext\
  GRACE Confirms the Delivery Note and invoice\
  ↓\
  DRIVER Receives the goods and authorised delivery record\
  ↓\
  DRIVER Plans the route manually\
  ↓\
  DRIVER Delivers the goods → Obtains signed proof or a photograph\
  ↓\
  DRIVER Opens the relevant delivery → Adds the proof\
  ↓\
  GRACE Reviews the delivery status and retrieves the evidence

  -------------------------------------------------------------------

**What Changes**

Proof is intended to sit with the relevant delivery rather than only in a general WhatsApp group.

The driver should see only the deliveries and actions required for the role.

Grace should be able to find the proof without searching an entire chat history.

Full route planning and delivery-trip management remain outside the current workflow.

Driver access and the final proof method have not been approved.

**What Stays the Same**

The driver physically delivers the goods.

The route is planned manually.

Paper documents may still travel with the goods.

A person must handle a rejected, partial or failed delivery.

**Why the Changes Matter**

The change reduces the risk that proof is missing or attached to the wrong delivery when Finance or Sales needs it later.

**Important Rules**

The driver must not cancel or change accounting documents.

Proof must identify the relevant delivery.

A failed delivery must be reported before a redelivery, return or credit decision is made.

**Important Exception Flow**

  -----------------------------------------------------------------------------
  Plaintext\
  DRIVER Cannot complete the delivery\
  ↓\
  What happened?\
  ↙ ↓ ↘\
  CUSTOMER ABSENT GOODS REJECTED PARTIAL DELIVERY\
  ↓ ↓ ↓\
  DRIVER Records the reason and evidence\
  ↓\
  GRACE Reviews the delivery problem\
  ↓\
  OWNER NOT CONFIRMED Agrees redelivery, return, credit or customer follow-up

  -----------------------------------------------------------------------------

**Needs Confirmation**

Who is the named driver representative and process owner?

Will the driver use MAIA, or continue returning proof through WhatsApp?

What is the minimum acceptable proof?

How is a third-party delivery handled?

Who records a failed, rejected or partial delivery?

Is proof-of-delivery attachment in the current go-live scope, given that the full delivery module was previously described as a later add-on?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** The current proof-of-delivery problem was explained in the June workshop.

**How it was confirmed:** Discovery walkthrough and later implementation discussion.

**Still missing:** Actual driver review, approved access, proof standard and go-live scope.

**Payment Matching and Outstanding Follow-Up --- How customer payments are confirmed**

**Why This Process Exists**

A payment may use a different payer name, may cover part of an invoice or several invoices, or may be collected in cash. Finance must decide the correct customer and invoice before updating the accounting record.

**When It Starts**

The process starts when Grace receives a payment slip, bank-statement entry or driver cash reference.

**When It Ends**

The process ends when Grace has confirmed the allocation and the payment is recorded for the external consultant's final bank reconciliation.

**Who Is Involved**

**Grace** checks and confirms the payment.

The **Customer** provides the payment slip or reference.

The **Driver** provides cash collection information where relevant.

The **Salesperson** follows up an overdue customer when Finance asks.

**David** handles serious collection escalation.

The **External Finance Consultant** completes final bank reconciliation.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends a payment slip or makes a bank transfer\
  ↓\
  DRIVER Returns cash information when cash was collected\
  ↓\
  GRACE Checks WhatsApp, the bank statement and Excel records\
  ↓\
  GRACE Identifies the customer and invoice\
  ↓\
  GRACE Records the payment in SQL and supporting records\
  ↓\
  SALESPERSON Chases the customer when Finance escalates\
  ↓\
  DAVID Handles serious overdue cases\
  ↓\
  CONSULTANT Completes final bank reconciliation

  --------------------------------------------------------------

**After MAIA**

  ----------------------------------------------------------------------
  Plaintext\
  What payment evidence was received?\
  ↙ ↘\
  BANK / TRANSFER CASH\
  ↓ ↓\
  CUSTOMER Provides a payment slip DRIVER provides the cash reference\
  \\ /\
  \\ /\
  ↓\
  GRACE Sends or uploads the evidence to MAIA\
  ↓\
  MAIA Reads the payer, amount, date and reference\
  ↓\
  MAIA Suggests a customer and invoice match\
  ↓\
  GRACE Checks the suggestion\
  ↓\
  Is the match clear?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  GRACE Confirms GRACE corrects, allocates or holds the payment\
  ↓\
  SQL Receives the confirmed payment record\
  ↓\
  CONSULTANT Completes final bank reconciliation

  ----------------------------------------------------------------------

**What Changes**

MAIA suggests a match instead of Grace starting every search manually.

Grace remains responsible for confirming the customer and invoice.

Unclear payer names are not decided automatically.

Payment evidence and the related invoice can be easier to trace.

Final bank reconciliation remains outside MAIA.

**What Stays the Same**

Human review remains mandatory.

Cash custody and physical handover remain manual.

Sales and David still participate in collection follow-up.

Merchant or QR settlement reconciliation remains outside scope.

**Why the Changes Matter**

The process reduces search and typing while protecting against a payment being allocated to the wrong customer or invoice.

**Important Rules**

MAIA suggests; Grace confirms.

An unclear payer alias must not be accepted automatically.

A partial or multi-invoice payment must be allocated deliberately.

The external consultant still completes the final bank reconciliation.

**Important Exception Flow**

  -------------------------------------------------------------------
  Plaintext\
  GRACE Reviews the suggested payment match\
  ↓\
  What is unclear?\
  ↙ ↓ ↘\
  PAYER NAME PARTIAL PAYMENT MANY INVOICES\
  ↓ ↓ ↓\
  GRACE Checks supporting details → Selects the correct allocation\
  ↓\
  GRACE Confirms only when the allocation is understood

  -------------------------------------------------------------------

**Needs Confirmation**

What is the approved treatment for partial payments?

How should one payment across several invoices be allocated?

How should one invoice paid by several transfers be handled?

How is cash collected by a driver acknowledged by Grace?

Who receives overdue alerts, and at what point does Sales or David take over?

Which payment information moves to SQL automatically, and what is the fallback?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** The current payment and bank-reconciliation practice was explained in the June workshop. Grace's future Finance role was used in July working sessions.

**How it was confirmed:** Discovery, training and UAT.

**Still missing:** Approved exception rules, cash handover, alert recipients and accepted SQL transfer behaviour.

**Customer and Lead Records --- How Sales keeps customer information and follow-up notes**

**Why This Process Exists**

Sales needs a shared record of customer and lead information so that important notes and follow-up activity do not depend only on memory or personal WhatsApp messages.

**When It Starts**

The process starts when a salesperson receives a new enquiry or learns new information about a customer.

**When It Ends**

The process ends when the approved record and notes are available to the correct salesperson for the next follow-up or order.

**Who Is Involved**

The **Salesperson** creates or updates the lead and notes.

**CJ** controls the sales process and may review wider sales activity.

An **authorised user** creates or changes the final customer record.

**Before MAIA**

  ---------------------------------------------------------------------
  Plaintext\
  SALESPERSON Receives an enquiry or learns new customer information\
  ↓\
  SALESPERSON Keeps details in WhatsApp, memory or personal notes\
  ↓\
  SALESPERSON Follows up manually\
  ↓\
  OWNER NOT CONFIRMED Creates or updates the customer in SQL\
  ↓\
  SALESPERSON Uses personal knowledge for the next order

  ---------------------------------------------------------------------

**After MAIA**

  ---------------------------------------------------------------------
  Plaintext\
  SALESPERSON Receives an enquiry or customer update\
  ↓\
  SALESPERSON Creates a lead or opens the customer in MAIA\
  ↓\
  SALESPERSON Records notes and the next follow-up\
  ↓\
  Is a new customer record required?\
  ↙ ↘\
  NO YES\
  ↓ ↓\
  SALESPERSON Continues follow-up AUTHORISED USER checks the details\
  ↓\
  SYSTEM NOT CONFIRMED Keeps the approved customer record\
  ↓\
  SALESPERSON Uses the record for the next order

  ---------------------------------------------------------------------

**What Changes**

Customer and lead notes become shared and searchable.

Sales users are intended to see their own customers.

A simpler lead flow was used in July rather than separate lead and prospect stages.

Customer-record changes become permission-controlled.

Exact creation, reassignment and cross-visibility rights remain unresolved.

**What Stays the Same**

Sales remains responsible for understanding and following up the customer.

Customer communication remains through the existing channels.

The final customer record must remain consistent with SQL.

**Why the Changes Matter**

The change reduces dependence on one person's memory and helps the next order use the correct customer information.

**Important Rules**

A salesperson should see only the customer records allowed for that role.

A customer must not be duplicated because the name is written differently.

A new or changed customer record requires an authorised user.

**Needs Confirmation**

Which users may create a customer?

Which users may change customer details?

May CJ see all customers and leads?

Can a customer be reassigned from one salesperson to another?

Which system keeps the final approved customer record?

Is the July simplified lead flow the final agreed process?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** Own-customer visibility and a simplified lead flow were discussed and used in July.

**How it was confirmed:** Scope clarification, training and UAT.

**Still missing:** Final user permissions, ownership rules and approved customer-record transfer.

**Price and Catalogue Updates --- How approved prices become usable by Sales and customers**

**Why This Process Exists**

Prices change with the market and may differ by customer type or individual customer. Macro Frozen also sends visual catalogue images because many customers prefer images to a PDF or long message.

**When It Starts**

The process starts when David decides that a product price or catalogue must change.

**When It Ends**

The process ends when the approved price is available for Sales Orders and the reviewed catalogue image is ready for manual forwarding.

**Who Is Involved**

**David**, as Price Controller, decides and maintains the prices.

**David**, as Catalogue Maintainer, selects products and reviews the visual output.

The **Salesperson** uses the approved price and manually forwards the reviewed catalogue.

**Before MAIA**

  ---------------------------------------------------------------------
  Plaintext\
  DAVID Decides the new price\
  ↓\
  DAVID Updates Excel, a message or a working list\
  ↓\
  DAVID Uses product images and ChatGPT to prepare a catalogue image\
  ↓\
  DAVID Sends the image or assigns a salesperson to send it\
  ↓\
  SALESPERSON Uses the available version when preparing an order

  ---------------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------------
  Plaintext\
  DAVID Decides a standard, customer or minimum price\
  ↓\
  DAVID Updates the approved price information in MAIA\
  ↓\
  DAVID Checks the effective price\
  ↓\
  MAIA Uses the maintained price during Sales Order preparation\
  ↓\
  DAVID Selects products and generates the catalogue output\
  ↓\
  DAVID Reviews the image and price information\
  ↓\
  DAVID Sends the approved image or assigns a salesperson to send it

  --------------------------------------------------------------------

**What Changes**

The selling price is kept in a structured place rather than only in a message or image.

Sales Orders can use the maintained standard, customer and minimum prices.

Catalogue generation follows a repeatable template.

David reviews the output before it is sent.

Automated customer broadcasting remains outside scope.

**What Stays the Same**

David decides the commercial price.

Product images and a visual catalogue remain important.

The final catalogue is manually reviewed and sent.

Customers still receive the catalogue through WhatsApp.

**Why the Changes Matter**

The change reduces the chance that Sales uses an old price and makes the catalogue easier to update consistently.

**Important Rules**

A catalogue image does not replace the structured price used by the Sales Order.

David must review the effective price and the final catalogue output.

MAIA does not send the catalogue automatically to all customers.

**Needs Confirmation**

What is the final order of precedence between standard, wholesale, retail, customer-specific and minimum prices?

Who maintains prices when David is unavailable?

What catalogue template, fields, photos and number of products per image are approved?

Are separate wholesale and retail catalogue outputs required every time?

Does the catalogue include only in-stock products?

Is volume-based pricing excluded from the current workflow?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** Current pricing and catalogue practice was described in June. Bulk price maintenance was shown in July.

**How it was confirmed:** Discovery, training and UAT.

**Still missing:** Approved price hierarchy, backup user and final catalogue template.

**Low-Stock and Near-Expiry Alerts --- How responsible users are told about stock risk**

**Why This Process Exists**

Macro Frozen needs earlier notice of slow-moving, near-expiry or low-stock items so that David can decide whether to sell, discount, replenish or otherwise act.

**When It Starts**

The process starts when the agreed stock or aging condition is reached.

**When It Ends**

The process ends when the responsible person reviews the information and records or communicates the business action.

**Who Is Involved**

**MAIA** checks the agreed stock and aging information.

**David** decides the commercial response.

**Lai** may need operational visibility.

**Sales** may carry out an approved sales action.

**Before MAIA**

  -----------------------------------------------------------------------
  Plaintext\
  DAVID Remembers to open or print a SQL stock or aging report\
  ↓\
  DAVID Reviews the items and quantities\
  ↓\
  DAVID Decides whether to replenish, promote, discount or clear stock\
  ↓\
  DAVID Gives a specific instruction to Lai or Sales

  -----------------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  MAIA Checks the agreed low-stock and near-expiry conditions\
  ↓\
  MAIA Sends the agreed report or notification\
  ↓\
  DAVID Reviews the item, quantity and aging information\
  ↓\
  DAVID Decides the business action\
  ↓\
  ASSIGNED USER Carries out David's specific instruction

  --------------------------------------------------------------

**What Changes**

The information is sent proactively instead of depending only on a remembered report.

David receives a focused list of items needing attention.

The system does not automatically discount, purchase or dispose of stock.

The final recipients and fields still need approval.

**What Stays the Same**

David makes the commercial decision.

Replenishment remains in the purchasing process outside MAIA.

Sales or operations carries out the chosen action.

**Why the Changes Matter**

The change makes slow-moving, near-expiry or low-stock items harder to miss.

**Important Rules**

An alert is information, not an automatic commercial decision.

Any purchase action remains outside MAIA.

Recipients must be agreed so that the alert reaches the person who can act.

**Needs Confirmation**

Who receives each alert?

What defines low stock?

What defines near expiry or high aging?

Which fields must appear in the report?

Is a PDF, a message or both required?

Who records that action was taken?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** The need for proactive aging and expiry alerts was agreed during the June workshop.

**How it was confirmed:** Discovery and later UAT demonstration.

**Still missing:** Final thresholds, recipients, format and acceptance by the users.

**Credit Note Correction --- How an agreed billing problem is corrected**

**Why This Process Exists**

A return, rejection, wrong quantity, wrong price or other agreed billing problem may require a credit note. The correction must be linked to the original transaction and must use the correct stock treatment.

**When It Starts**

The process starts when Grace receives an approved reason to correct an invoice.

**When It Ends**

The process ends when the correct credit note is recorded and can be traced to the original invoice.

**Who Is Involved**

**Grace** reviews the original transaction and prepares the correction.

**David** approves the business treatment where required.

**Sales** provides customer or delivery context.

**SQL** keeps the final accounting record.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  CUSTOMER Reports a return, rejection or billing problem\
  ↓\
  GRACE Checks the original invoice and evidence\
  ↓\
  GRACE Decides the required SQL credit-note treatment\
  ↓\
  GRACE Creates the credit note in SQL\
  ↓\
  CUSTOMER Receives the correction reference

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  CUSTOMER Reports the correction requirement\
  ↓\
  GRACE Opens the original transaction in MAIA\
  ↓\
  GRACE Selects the required SCN or CCN treatment\
  ↓\
  GRACE Enters the reason, quantity, value and reference\
  ↓\
  GRACE Reviews and submits the credit note\
  ↓\
  SQL Receives the supported confirmed record

  --------------------------------------------------------------

**What Changes**

The correction is intended to remain linked to the original transaction.

Grace chooses the correct stock or non-stock treatment.

The customer-facing reference can be easier to trace.

The final SCN and CCN behaviour still requires Finance acceptance.

SQL remains the final accounting record.

**What Stays the Same**

Grace makes the accounting correction.

Human review is required.

The original invoice and supporting evidence must be checked.

**Why the Changes Matter**

The change reduces the risk of an incorrect stock movement or a credit note that the customer cannot relate to the original invoice.

**Important Rules**

Grace must select the correct correction type.

The reason and original transaction must be recorded.

A credit note must not be used to hide an unresolved delivery or quantity dispute.

**Needs Confirmation**

When is SCN used and when is CCN used?

Which correction changes stock?

Does the credit-note number need to reference the original invoice number?

Who approves a credit note above an agreed value?

What is the SQL fallback if the MAIA credit-note transfer is unavailable?

**Validation**

**Status:** Needs confirmation

**Confirmed by:** Credit-note needs and numbering concerns were discussed in June; SCN and CCN were included in the later implementation work.

**How it was confirmed:** Discovery and UAT preparation.

**Still missing:** Finance acceptance of the final treatment, numbering and SQL transfer.

**6. Role Workflows**

**Salesperson --- What the sales user does before and after MAIA**

**Role Owner**

**Role:** Salesperson

**Named representative:** Candidate representatives: Queenie and Benz --- confirmation required

**Process owner:** CJ

**Main processes:** Customer order, customer and lead records, price or credit request

**Status:** Needs confirmation

**Why This Role Is Involved**

The salesperson receives the customer's message, understands the requested product and prepares the information needed for the order. CJ, David, Lai and Grace depend on the salesperson entering the correct customer, item, unit, quantity and remarks.

**When This Role Acts**

**Starts:** When the customer sends an order or enquiry.

**Ends:** When the draft is complete and has been handed to CJ, or when the salesperson has resolved an information, price or credit problem.

**Before MAIA**

  ----------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order or enquiry\
  ↓\
  SALESPERSON Interprets the message\
  ↓\
  SALESPERSON Checks price, customer and item using available records\
  ↓\
  SALESPERSON Forwards the understood order to the company group\
  ↓\
  DAVID Receives the order for coordination

  ----------------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order or enquiry\
  ↓\
  SALESPERSON Sends the message to MAIA\
  ↓\
  MAIA Creates a draft or opens the customer record\
  ↓\
  SALESPERSON Checks and corrects the information\
  ↓\
  Is there a problem?\
  ↙ ↘\
  NO YES\
  ↓ ↓\
  CJ Receives draft CUSTOMER or DAVID resolves the issue

  --------------------------------------------------------------

**What This User Must Do**

Check the customer, item, unit of measurement, requested quantity and preparation remarks.

Correct information that MAIA could not understand.

Ask the customer when the order is unclear.

Send a price or credit problem to David.

Hand a complete normal draft to CJ.

**Why This Matters**

An incorrect item, unit or customer at this stage can cause the warehouse to pick the wrong product and Finance to issue the wrong document.

**What Changes for This User**

Uses a structured draft rather than only a free-form group message.

Must recognise the difference between draft, blocked and submitted.

Cannot approve their own price or credit problem.

Records lead and customer notes in a shared place.

Continues to speak with the customer when information is unclear.

**What Stays the Same**

Customer communication remains through WhatsApp.

Product knowledge and human interpretation remain important.

Sales still owns clarification with the customer.

**Who Receives the Work Next**

**Normal order:** CJ receives the complete draft.

**Price or credit problem:** David receives the specific approval request.

**Missing information:** The customer receives the clarification question before the draft moves forward.

**Important Exceptions**

Wrong or unclear product name.

Kg, carton, box or piece uncertainty.

Requested price below the accepted level.

Customer credit or overdue problem.

Duplicate or uncertain customer record.

**What the User Must Learn**

Starting an order from WhatsApp.

Reviewing a draft carefully.

Correcting item, UOM and remarks.

Recognising a price or credit problem.

Sending the correct handoff to CJ or David.

**Needs Confirmation**

Final named sales representatives.

Whether a salesperson may submit a normal Sales Order.

Whether a salesperson may change another salesperson's draft.

Own-customer and cross-customer visibility.

Customer-creation and reassignment rights.

**Role Validation**

**Status:** Needs confirmation

**Validated by:** July training and UAT included sales-user scenarios, but attendance does not prove approval.

**What was validated:** Draft preparation, customer/lead use and own-customer visibility at a working level.

**Still missing:** Final permissions and representative sign-off.

**Sales Order Submitter --- What CJ does before and after MAIA**

**Role Owner**

**Role:** Sales Order Submitter

**Named representative:** CJ

**Process owner:** CJ for normal sales execution; David for commercial exceptions

**Main processes:** Sales Order review, submission and handoff to Lai

**Status:** Needs confirmation

**Why This Role Is Involved**

CJ provides a final sales review before a normal order becomes warehouse work. Lai depends on CJ's submission to know that the order is ready.

**When This Role Acts**

**Starts:** When a salesperson completes a normal draft or when David has resolved an exception.

**Ends:** When the order is submitted to Lai or returned to the salesperson.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  SALESPERSON Sends order details through the company group\
  ↓\
  CJ Reviews using messages and existing records\
  ↓\
  CJ Tells the office or warehouse to continue

  --------------------------------------------------------------

**After MAIA**

  -------------------------------------------------------------------------
  Plaintext\
  SALESPERSON Completes the draft Sales Order\
  ↓\
  CJ Checks customer, item, quantity, price, credit and delivery details\
  ↓\
  Is the order complete and allowed?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  CJ Submits the order CJ returns it to Sales or David\
  ↓\
  LAI Receives the ready order

  -------------------------------------------------------------------------

**What This User Must Do**

Check that the draft contains enough information for the warehouse.

Confirm that any required approval has been completed.

Submit only a ready order.

Return an incomplete order to the salesperson.

Make sure Lai receives the handoff.

**Why This Matters**

Submitting too early can start warehouse work on the wrong item, quantity, price or customer condition. Failing to submit can leave a ready order unseen.

**What Changes for This User**

Becomes the visible submission point for a normal Sales Order.

Reviews a structured order instead of a group message.

Must distinguish a normal order from one needing David.

Creates a clear handoff to Lai.

**What Stays the Same**

Sales judgment remains human.

CJ still coordinates the sales team.

Customer clarification remains with the salesperson.

**Who Receives the Work Next**

Lai receives the submitted normal order. David receives a price or credit exception before Lai receives it.

**Important Exceptions**

Incomplete delivery details.

Unresolved price or credit problem.

Actual-weight timing conflict.

Duplicate order.

**What the User Must Learn**

Finding and reviewing another user's draft.

Returning a draft with a clear reason.

Confirming that approval is complete.

Submitting and verifying the Lai handoff.

**Needs Confirmation**

Whether CJ submits before or after the actual weight is entered.

Whether CJ may override credit or price.

Whether David or CJ submits an approved exception.

Which notification tells Lai that work is ready.

**Role Validation**

**Status:** Needs confirmation

**Validated by:** CJ's submission role was used in July working sessions.

**What was validated:** Review and submission of a normal Sales Order.

**Still missing:** Final authority, actual-weight timing and handoff method.

**Credit Controller --- What David does before and after MAIA**

**Role Owner**

**Role:** Credit Controller

**Named representative:** David

**Process owner:** David

**Main processes:** Credit approval and serious overdue escalation

**Status:** Needs confirmation

**Why This Role Is Involved**

David decides whether Macro Frozen accepts the risk of supplying a customer whose credit position does not meet the normal rule.

**When This Role Acts**

**Starts:** When a Sales Order shows a credit or overdue problem.

**Ends:** When David approves, returns or rejects the request and the requester receives the result.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  SALESPERSON Notices a credit or payment concern\
  ↓\
  SALESPERSON Contacts David\
  ↓\
  DAVID Checks the customer and outstanding position\
  ↓\
  DAVID Says proceed, revise or stop\
  ↓\
  SALESPERSON Acts on the instruction

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  MAIA Shows a credit problem against the Sales Order\
  ↓\
  SALESPERSON Sends the request to David\
  ↓\
  DAVID Opens the order and checks the customer position\
  ↓\
  DAVID Approves, returns or rejects\
  ↓\
  REQUESTER Receives the result\
  ↓\
  SUBMITTER NOT CONFIRMED Submits only after approval

  --------------------------------------------------------------

**What This User Must Do**

Review the exact order and customer.

Check the relevant outstanding and payment-term information.

Record a clear decision.

Avoid approving an order without understanding the exposure.

Make sure the requester knows the result.

**Why This Matters**

The decision protects cash flow and prevents warehouse work from starting on an order the business does not intend to release.

**What Changes for This User**

Reviews the issue against the Sales Order.

Leaves a traceable decision.

Needs a defined backup arrangement.

May receive clearer overdue and credit information.

**What Stays the Same**

David makes the risk decision.

Commercial judgment remains human.

Serious collections may still escalate to David.

**Who Receives the Work Next**

CJ receives an approved order for submission unless David is given submission authority. The salesperson receives a returned or rejected order.

**Important Exceptions**

David unavailable.

Credit data missing or out of date.

One-invoice customer with a previous unpaid invoice.

Customer within amount limit but beyond payment terms.

**What the User Must Learn**

Opening the correct approval request.

Reading the credit information.

Recording approve, return or reject.

Checking that the requester receives the decision.

**Needs Confirmation**

Backup approver.

Exact credit rule.

Submission authority after approval.

Missing-credit-data fallback.

**Role Validation**

**Status:** Needs confirmation

**Validated by:** David's role is consistently stated, but the full rule and delegation are not approved.

**What was validated:** David makes the commercial credit decision.

**Still missing:** Rule details, backup and submission handoff.

**Price Controller --- What David does before and after MAIA**

**Role Owner**

**Role:** Price Controller

**Named representative:** David

**Process owner:** David

**Main processes:** Price maintenance and price-exception approval

**Status:** Needs confirmation

**Why This Role Is Involved**

David decides the accepted selling price and protects the business from stale or below-floor pricing.

**When This Role Acts**

**Starts:** When prices change or a salesperson requests a price outside the normal rule.

**Ends:** When the effective price is checked or the request is approved, returned or rejected.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  DAVID Decides a new price or special price\
  ↓\
  DAVID Updates a working file, image or WhatsApp message\
  ↓\
  DAVID Tells Sales which price to use\
  ↓\
  SALESPERSON Uses the available information

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  DAVID Decides the price\
  ↓\
  DAVID Updates the structured price information in MAIA\
  ↓\
  DAVID Checks the effective result\
  ↓\
  MAIA Uses the price during order preparation\
  ↓\
  DAVID Reviews any below-minimum request\
  ↓\
  SALESPERSON Receives the decision

  --------------------------------------------------------------

**What This User Must Do**

Maintain standard, customer and minimum prices correctly.

Check the effective price after an update.

Review below-minimum requests.

Correct an error before Sales uses it.

**Why This Matters**

A stale or incorrect price can cause a direct margin loss and can also create a customer dispute after delivery.

**What Changes for This User**

Price maintenance moves from scattered messages and images into structured records.

Price exceptions are linked to the order.

Bulk updates become possible.

A backup maintainer is needed.

**What Stays the Same**

David decides the price.

Market changes may still require frequent updates.

Sales still needs to explain an approved change to the customer.

**Who Receives the Work Next**

Sales receives the maintained price or the decision on a price request.

**Important Exceptions**

Customer-specific price.

Below-minimum request.

Price upload error.

David unavailable.

**What the User Must Learn**

Bulk price update.

Effective-price checking.

Price hierarchy.

Approval and rejection of a request.

Correcting a price safely.

**Needs Confirmation**

Price hierarchy and effective dates.

Backup maintainer.

Below-minimum behaviour.

Volume-pricing boundary.

**Role Validation**

**Status:** Needs confirmation

**Validated by:** Current pricing practice is known and a bulk-price function was demonstrated.

**What was validated:** David owns the price decision.

**Still missing:** Final hierarchy, backup user and approved exception behaviour.

**Catalogue Maintainer --- What David does before and after MAIA**

**Role Owner**

**Role:** Catalogue Maintainer

**Named representative:** David

**Process owner:** David

**Main processes:** Product catalogue preparation and review

**Status:** Needs confirmation

**Why This Role Is Involved**

Macro Frozen's customers prefer a visual product and price image. David selects the information and confirms that the image is correct before it is sent.

**When This Role Acts**

**Starts:** When products, prices or customer communication need an updated catalogue.

**Ends:** When David has reviewed the output and it is ready for manual forwarding.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  DAVID Selects products and prices\
  ↓\
  DAVID Uses product images and ChatGPT to prepare the visual\
  ↓\
  DAVID Reviews the image\
  ↓\
  DAVID Sends it or assigns a salesperson to send it

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  DAVID Selects the approved product and price information\
  ↓\
  MAIA Places the information into the agreed template\
  ↓\
  DAVID Checks products, prices, images and wording\
  ↓\
  DAVID Approves the output\
  ↓\
  DAVID Sends it or assigns a salesperson to send it manually

  --------------------------------------------------------------

**What This User Must Do**

Select the correct catalogue type.

Confirm product images and price data.

Review every output before sending.

Stop an incorrect image from reaching customers.

**Why This Matters**

A catalogue error is customer-facing and can create a price dispute across many orders.

**What Changes for This User**

Uses a repeatable template.

Reduces manual redesign.

Keeps human review and manual sending.

Must agree the final catalogue rules.

**What Stays the Same**

Visual images remain the preferred customer format.

David remains responsible for the content.

WhatsApp remains the sending channel.

**Who Receives the Work Next**

Sales receives the reviewed catalogue for manual customer forwarding, or David sends it directly.

**Important Exceptions**

Missing product photo.

Old or conflicting price.

Product not in stock.

Wrong wholesale or retail version.

**What the User Must Learn**

Selecting the correct template.

Generating the output.

Reviewing data and images.

Correcting and re-generating safely.

**Needs Confirmation**

Final template.

Required fields and product count.

Wholesale and retail variants.

In-stock filtering.

Backup user.

**Role Validation**

**Status:** Needs confirmation

**Validated by:** The requirement is clear, but the final output design was not approved in the evidence reviewed.

**What was validated:** Image-based output and manual review/send.

**Still missing:** Final template and acceptance criteria.

**Pick-List Coordinator --- What Lai does before and after MAIA**

**Role Owner**

**Role:** Pick-List Coordinator

**Named representative:** Lai

**Process owner:** Lai for daily coordination; David for overall policy

**Main processes:** Order handoff, grouping, pick list, actual quantity and draft Delivery Note

**Status:** Needs confirmation

**Why This Role Is Involved**

Lai connects the submitted order to the physical warehouse work and then passes the confirmed result to Grace.

**When This Role Acts**

**Starts:** When a Sales Order is ready for warehouse action.

**Ends:** When the checked actual quantity and draft Delivery Note are handed to Grace.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  SALESPERSON Sends orders through the company group\
  ↓\
  DAVID Groups orders by location or driver\
  ↓\
  LAI Prepares or receives the paper list\
  ↓\
  WAREHOUSE Returns written actual quantities\
  ↓\
  GRACE Re-enters the result

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  CJ Submits a ready Sales Order\
  ↓\
  LAI Reviews the list of ready orders\
  ↓\
  LAI Groups orders → Creates and prints the pick list\
  ↓\
  PICKER Returns the actual result\
  ↓\
  CHECKER Confirms the result\
  ↓\
  LAI Records the actual quantity\
  ↓\
  LAI Prepares the draft Delivery Note\
  ↓\
  GRACE Receives the draft

  --------------------------------------------------------------

**What This User Must Do**

Check all ready orders.

Group them using the agreed delivery method.

Print a usable pick list.

Make sure the picker and checker complete the actual values.

Record only the checked result.

Hand the draft Delivery Note to Grace.

**Why This Matters**

Lai's handoff determines whether the warehouse works on the correct order and whether Grace receives the correct final quantity.

**What Changes for This User**

Uses a list of ready orders instead of searching a mixed group.

Produces the pick list from Sales Orders.

Records actuals in MAIA.

Creates a draft Delivery Note rather than leaving Finance to rebuild it.

Needs clear rights and notifications.

**What Stays the Same**

Lai still makes practical grouping decisions.

Paper remains on the warehouse floor.

Physical actuals come from the picker and checker.

**Who Receives the Work Next**

The Warehouse Picker receives the printed pick list. Grace receives the draft Delivery Note after the Warehouse Checker confirms the result.

**Important Exceptions**

Missing order.

Wrong delivery information.

Short pick or wrong item.

Unclear box-weight breakdown.

Grace rejects the draft.

**What the User Must Learn**

Finding ready orders.

Grouping and printing.

Recording actuals.

Handling a variance.

Preparing and handing off the draft Delivery Note.

**Needs Confirmation**

Whether the MAIA pick list is in the go-live scope.

Required print fields and layout.

Exact quantity-edit rights.

Draft Delivery Note rights.

Notification to Grace.

**Role Validation**

**Status:** Needs confirmation

**Validated by:** Lai's role was used in July training and UAT.

**What was validated:** Pick-list preparation, actual update and draft Delivery Note at a working level.

**Still missing:** Process-owner approval, final document and handoff rules.

**Warehouse Picker --- What the picker does before and after MAIA**

**Role Owner**

**Role:** Warehouse Picker

**Named representative:** Not yet identified

**Process owner:** Lai

**Main processes:** Physical picking and weighing

**Status:** Not defined

**Why This Role Is Involved**

The picker turns the paper instruction into the physical goods that will be delivered. The accuracy of the product and actual weight directly affects the customer and invoice.

**When This Role Acts**

**Starts:** When Lai gives the picker the pick list.

**Ends:** When the picker has recorded the actual result and handed the goods and document to the checker.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  LAI Gives the picker a paper list\
  ↓\
  PICKER Locates the product\
  ↓\
  PICKER Picks and weighs the goods\
  ↓\
  PICKER Writes the actual result\
  ↓\
  CHECKER Receives the goods and paper

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  LAI Gives the picker the MAIA-generated pick list\
  ↓\
  PICKER Locates the correct product\
  ↓\
  PICKER Picks and weighs each required box or unit\
  ↓\
  PICKER Writes the actual total and breakdown\
  ↓\
  CHECKER Receives the goods and completed document

  --------------------------------------------------------------

**What This User Must Do**

Match the product to the printed instruction.

Record the actual result, not the requested estimate.

Record different box weights clearly.

Stop and ask Lai when the instruction is unclear.

Hand the goods and record to the checker.

**Why This Matters**

A picking mistake can become a delivery mistake, invoice error or customer dispute.

**What Changes for This User**

The paper list may be generated from MAIA.

The picker's identity and actual values should be traceable.

Physical work remains unchanged.

**What Stays the Same**

Picking and weighing remain physical.

The scale and paper remain important.

The picker must use product knowledge.

**Who Receives the Work Next**

The Warehouse Checker receives the goods and completed pick list.

**Important Exceptions**

Product not found.

Wrong cut or item.

Insufficient quantity.

Unequal box weights.

Damaged product.

**What the User Must Learn**

Reading the final pick-list format.

Recording total and box-level values.

Escalating a problem before the goods move forward.

**Needs Confirmation**

Named picker.

User access, if any.

Required written fields.

Damage and short-pick procedure.

**Role Validation**

**Status:** Not defined

**Validated by:** No named picker review was found.

**What was validated:** The activity is known from the process walkthrough.

**Still missing:** Named user, direct observation and approval of the working document.

**Warehouse Checker --- What the checker does before and after MAIA**

**Role Owner**

**Role:** Warehouse Checker

**Named representative:** Not yet identified

**Process owner:** Lai

**Main processes:** Physical verification and warehouse sign-off

**Status:** Not defined

**Why This Role Is Involved**

The checker provides a second human check before the actual result is used for the Delivery Note and invoice.

**When This Role Acts**

**Starts:** When the picker presents the goods and completed pick list.

**Ends:** When the checker has confirmed or rejected the result and returned it to Lai.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  PICKER Presents the goods and written result\
  ↓\
  CHECKER Checks the item and quantity\
  ↓\
  CHECKER Signs, corrects or returns the paper\
  ↓\
  LAI Receives the result

  --------------------------------------------------------------

**After MAIA**

  ----------------------------------------------------------------
  Plaintext\
  PICKER Presents the goods and completed MAIA pick list\
  ↓\
  CHECKER Checks product, total and box breakdown\
  ↓\
  Is the result correct?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  CHECKER Signs or identifies check PICKER corrects the problem\
  ↓\
  LAI Receives the confirmed result

  ----------------------------------------------------------------

**What This User Must Do**

Verify the exact product.

Verify the actual quantity and box breakdown.

Reject an incorrect result.

Identify who performed the check.

Return only a confirmed result to Lai.

**Why This Matters**

The checker is the last warehouse control before the quantity is used in customer and accounting documents.

**What Changes for This User**

Uses the final MAIA-generated document.

Must leave a traceable check result.

Physical checking remains unchanged.

**What Stays the Same**

The check remains a human responsibility.

The checker must inspect the goods and written values.

**Who Receives the Work Next**

Lai receives a confirmed result. The Picker receives a rejected result for correction.

**Important Exceptions**

Wrong item.

Total does not match box breakdown.

Quantity differs from the order.

Checker and picker are the same person.

**What the User Must Learn**

Using the final check fields.

Rejecting and correcting a result.

Knowing when Sales or the customer must be contacted.

**Needs Confirmation**

Named checker.

Whether picker and checker must be different.

Required sign-off.

Variance rule.

**Role Validation**

**Status:** Not defined

**Validated by:** No named checker review was found.

**What was validated:** The need for a separate check was described by David.

**Still missing:** Named user, direct observation and approved control rule.

**Finance and Accounts User --- What Grace does before and after MAIA**

**Role Owner**

**Role:** Finance and Accounts User

**Named representative:** Grace

**Process owner:** Grace for daily document and payment work; David for credit and collection policy

**Main processes:** Delivery Note, invoice, credit note, payment matching and outstanding follow-up

**Status:** Needs confirmation

**Why This Role Is Involved**

Grace completes the customer and accounting documents, confirms payment allocations and protects the accuracy of the SQL records.

**When This Role Acts**

**Starts:** When Lai sends a draft Delivery Note, when a correction is required, or when payment evidence arrives.

**Ends:** When the document or payment is confirmed in SQL or the issue is returned to the correct person.

**Before MAIA**

  ----------------------------------------------------------------
  Plaintext\
  WAREHOUSE Returns paper actual quantities\
  ↓\
  GRACE Re-enters the result in SQL\
  ↓\
  GRACE Creates the DO and invoice\
  ↓\
  DRIVER Returns proof or cash information\
  ↓\
  GRACE Matches payments using bank, WhatsApp and Excel records\
  ↓\
  CONSULTANT Receives the records for final reconciliation

  ----------------------------------------------------------------

**After MAIA**

  ----------------------------------------------------------------------
  Plaintext\
  LAI Sends a draft Delivery Note with confirmed actuals\
  ↓\
  GRACE Checks customer, item, quantity and supporting result\
  ↓\
  GRACE Submits the Delivery Note → Creates the invoice\
  ↓\
  SQL Receives the supported confirmed documents\
  ↓\
  What payment evidence was received?\
  ↙ ↘\
  BANK / TRANSFER CASH\
  ↓ ↓\
  CUSTOMER Provides a payment slip DRIVER provides the cash reference\
  \\ /\
  \\ /\
  ↓\
  MAIA Suggests a match\
  ↓\
  GRACE Confirms, corrects or holds the payment\
  ↓\
  CONSULTANT Completes final bank reconciliation

  ----------------------------------------------------------------------

**What This User Must Do**

Check the draft Delivery Note against the confirmed warehouse result.

Return an incorrect draft to Lai.

Create and submit the invoice using the confirmed quantity.

Choose the correct credit-note treatment.

Confirm payment matches.

Escalate overdue accounts using the agreed sequence.

**Why This Matters**

An incorrect Finance decision can affect stock, customer balances, tax documents and payment records.

**What Changes for This User**

Reviews prepared documents instead of rebuilding every record.

Uses MAIA's payment suggestion but keeps the final decision.

Handles linked credit-note corrections.

Needs a clear SQL fallback for every document type.

**What Stays the Same**

Grace remains the final document and payment checker.

SQL remains the accounting system.

Final bank reconciliation remains external.

Cash handover remains manual.

**Who Receives the Work Next**

The Driver receives the approved delivery documents.

SQL receives confirmed supported transactions.

The External Finance Consultant receives the records for final reconciliation.

Lai receives an incorrect draft Delivery Note for correction.

**Important Exceptions**

Delivery Note does not match actual weight.

Duplicate invoice.

Credit-note stock treatment.

Payment payer-name mismatch.

Partial or multi-invoice payment.

SQL transfer unavailable.

**What the User Must Learn**

Reviewing and returning a draft Delivery Note.

Creating the invoice from confirmed actuals.

Processing SCN and CCN correctly.

Confirming a payment match.

Using the approved fallback.

**Needs Confirmation**

Exact Delivery Note and invoice permissions.

Credit-note rules and numbering.

Payment exception rules.

Cash handover acknowledgment.

Document-by-document SQL transfer and fallback.

**Role Validation**

**Status:** Needs confirmation

**Validated by:** Grace's document and Finance responsibilities were used in July working sessions.

**What was validated:** Delivery Note and invoice review at a working level.

**Still missing:** Full Finance acceptance of credit notes, payment exceptions and SQL fallback.

**Driver --- What the delivery user does before and after MAIA**

**Role Owner**

**Role:** Driver

**Named representative:** Not yet identified

**Process owner:** Not confirmed

**Main processes:** Delivery, proof of delivery and cash information

**Status:** Not defined

**Why This Role Is Involved**

The driver completes the physical delivery and returns the evidence that Finance needs.

**When This Role Acts**

**Starts:** When Grace releases the goods and delivery documents.

**Ends:** When proof and any payment information have been returned to Grace.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  GRACE Gives the driver goods and paper documents\
  ↓\
  DRIVER Plans the route\
  ↓\
  DRIVER Delivers the goods\
  ↓\
  DRIVER Obtains signed proof or a photograph\
  ↓\
  DRIVER Sends proof through WhatsApp\
  ↓\
  GRACE Receives the proof and cash information

  --------------------------------------------------------------

**After MAIA --- Proposed Working Model**

  --------------------------------------------------------------
  Plaintext\
  GRACE Releases the delivery\
  ↓\
  DRIVER Receives the goods and permitted delivery details\
  ↓\
  DRIVER Plans the route manually → Delivers the goods\
  ↓\
  DRIVER Obtains signed proof or a photograph\
  ↓\
  DRIVER Adds the proof to the relevant delivery\
  ↓\
  GRACE Receives the status, proof and payment reference

  --------------------------------------------------------------

**What This User Must Do**

Deliver the correct goods and documents.

Obtain acceptable proof.

Report a failed, rejected or partial delivery.

Hand over cash and the related reference using the agreed method.

Avoid changing or cancelling accounting documents.

**Why This Matters**

Missing proof or unclear cash information creates customer disputes and Finance follow-up work.

**What Changes for This User**

May use a restricted MAIA view for the relevant delivery.

Proof is intended to be attached to the delivery.

Route planning and physical delivery remain unchanged.

**What Stays the Same**

Physical delivery, paper handling and route planning remain manual.

The driver still communicates with Grace when a problem occurs.

**Who Receives the Work Next**

Grace receives the delivery result, proof and any cash reference.

**Important Exceptions**

Customer absent.

Goods rejected.

Partial delivery.

No internet or device access.

Third-party driver.

Cash collected.

**What the User Must Learn**

Finding the correct delivery.

Adding proof.

Reporting a failed delivery.

Recording the cash reference.

Understanding restricted permissions.

**Needs Confirmation**

Named driver.

Process owner.

MAIA access.

Proof standard.

Failed-delivery method.

Third-party process.

Cash handover.

**Role Validation**

**Status:** Not defined

**Validated by:** No direct driver validation was found.

**What was validated:** The current WhatsApp proof method was described by the client.

**Still missing:** Actual driver review and approved future method.

**7. Important Handoffs**

**Salesperson to CJ --- Complete draft Sales Order**

**Who Sends the Work**

The Salesperson.

**Who Receives the Work**

CJ.

**When the Handoff Happens**

After the salesperson has checked the customer, item, UOM, quantity, price and remarks, and no unresolved approval problem remains.

**What Is Handed Over**

A complete draft Sales Order and any supporting customer message or PO.

**Why It Matters**

CJ must know that the draft is ready for final sales review rather than still waiting for customer clarification.

**Before MAIA**

The salesperson forwards the understood order into the company WhatsApp group, where its readiness may be unclear.

**After MAIA**

The salesperson leaves a complete draft in MAIA for CJ's review and submission.

**Needs Confirmation**

The notification or list CJ uses to identify a ready draft.

**CJ to Lai --- Submitted normal Sales Order**

**Who Sends the Work**

CJ.

**Who Receives the Work**

Lai.

**When the Handoff Happens**

After CJ confirms that the normal order is complete and allowed.

**What Is Handed Over**

The submitted Sales Order, delivery date, address and preparation remarks.

**Why It Matters**

Lai should begin warehouse work only when the order is ready.

**Before MAIA**

David, CJ or Sales communicates the order through the company group.

**After MAIA**

CJ submits the Sales Order and Lai receives it in the agreed work list or notification.

**Needs Confirmation**

Whether the handoff occurs before or after actual weight, and which MAIA notification is the official instruction.

**David to Lai --- Approved price or credit exception**

**Who Sends the Work**

David.

**Who Receives the Work**

Lai.

**When the Handoff Happens**

After David approves a price or credit problem and the order is submitted.

**What Is Handed Over**

The approved and submitted Sales Order.

**Why It Matters**

Lai must not act on an exception that is still awaiting a decision.

**Before MAIA**

David gives an instruction through conversation, phone or WhatsApp.

**After MAIA**

The approval is recorded against the order before Lai receives it.

**Needs Confirmation**

Whether David submits the order or returns it to CJ for submission.

**Lai to Warehouse Picker --- Printed pick list**

**Who Sends the Work**

Lai.

**Who Receives the Work**

The Warehouse Picker.

**When the Handoff Happens**

After Lai groups the ready orders and prints the warehouse document.

**What Is Handed Over**

The printed pick list with item, UOM, requested quantity, customer or order reference and required preparation remarks.

**Why It Matters**

The picker needs a clear and complete instruction.

**Before MAIA**

The office prepares a manually typed paper list based on WhatsApp orders.

**After MAIA**

Lai prints the list from the agreed MAIA workflow.

**Needs Confirmation**

The final fields, layout and whether the MAIA pick list is in the go-live scope.

**Warehouse Picker to Warehouse Checker --- Picked goods and actual quantities**

**Who Sends the Work**

The Warehouse Picker.

**Who Receives the Work**

The Warehouse Checker.

**When the Handoff Happens**

After the goods are picked and weighed.

**What Is Handed Over**

The physical goods and the written total or box-level actual quantities.

**Why It Matters**

A second person must confirm the result before it is used.

**Before MAIA**

The picker passes the goods and paper result for checking.

**After MAIA**

The same physical handoff continues using the approved MAIA-generated document.

**Needs Confirmation**

Named users, required signatures and whether the picker and checker must be different people.

**Warehouse Checker to Lai --- Confirmed actual result**

**Who Sends the Work**

The Warehouse Checker.

**Who Receives the Work**

Lai.

**When the Handoff Happens**

After the checker confirms the item and quantities.

**What Is Handed Over**

The completed pick list, actual total, box breakdown and checker identification.

**Why It Matters**

Lai must use only a checked result when preparing the draft Delivery Note.

**Before MAIA**

The checked paper is returned to the office for re-entry.

**After MAIA**

Lai records the checked actual result in MAIA.

**Needs Confirmation**

The required check evidence and variance rule.

**Lai to Grace --- Draft Delivery Note with confirmed actuals**

**Who Sends the Work**

Lai.

**Who Receives the Work**

Grace.

**When the Handoff Happens**

After the warehouse result is confirmed and recorded.

**What Is Handed Over**

A draft Delivery Note and the supporting pick result.

**Why It Matters**

Grace must review the final quantity before issuing the invoice.

**Before MAIA**

Grace receives paper or Excel information and rebuilds the document in SQL.

**After MAIA**

Grace receives a prepared draft linked to the Sales Order and actual quantity.

**Needs Confirmation**

Lai's edit rights, Grace's return rights and the notification that tells Grace the draft is ready.

**Grace to Driver --- Goods and approved delivery documents**

**Who Sends the Work**

Grace.

**Who Receives the Work**

The Driver.

**When the Handoff Happens**

After Grace confirms the Delivery Note and required invoice document.

**What Is Handed Over**

The goods, paper documents and permitted delivery details.

**Why It Matters**

The driver must deliver the correct goods to the correct customer.

**Before MAIA**

Grace provides printed documents and the driver follows the existing route method.

**After MAIA**

The driver may also receive a restricted view of the relevant delivery.

**Needs Confirmation**

Driver access, assignment method and whether a third-party driver receives MAIA access.

**Driver to Grace --- Delivery proof and payment information**

**Who Sends the Work**

The Driver.

**Who Receives the Work**

Grace.

**When the Handoff Happens**

After a successful, failed or partial delivery.

**What Is Handed Over**

Delivery status, signed proof or photograph, exception reason and any cash reference.

**Why It Matters**

Grace needs evidence for customer follow-up and correct payment handling.

**Before MAIA**

The driver sends proof to a WhatsApp group and returns cash information separately.

**After MAIA**

The proof is intended to be attached to the relevant delivery, while physical cash still follows a manual handover.

**Needs Confirmation**

Minimum proof, failed-delivery method and cash acknowledgment.

**Grace to External Finance Consultant --- Records for final bank reconciliation**

**Who Sends the Work**

Grace.

**Who Receives the Work**

The External Finance Consultant.

**When the Handoff Happens**

After customer payments have been identified and recorded.

**What Is Handed Over**

SQL payment records, bank information and any unresolved items.

**Why It Matters**

The consultant completes the final bank reconciliation outside MAIA.

**Before MAIA**

Grace prepares the records using SQL, Excel and bank information.

**After MAIA**

MAIA may assist with matching, but the consultant's final reconciliation role remains unchanged.

**Needs Confirmation**

The exact unresolved-item report or handoff format.

**8. Decisions Needed**

**Decisions Needed --- Questions that must be answered before the workflows are final**

  ------------------------------------------------------------------------------------------------------------------------- --------------------------------------------- ------------------------------------------------------------------------------------------------ --------------------------------------- ------------
  Decision Needed                                                                                                           Who Must Decide                               Why It Matters                                                                                   What It Blocks                          Status

  Does CJ submit the Sales Order before picking, or is the Sales Order submitted only after actual weight is entered?       David, CJ, Lai and Grace                      The June and July working models differ; the answer changes permissions and document sequence.   Validation, UAT, training and go-live   Open

  Is the MAIA pick list part of the current go-live scope or a later phase?                                                 David and MAIA project owner                  The warehouse cannot be trained on two different permanent methods.                              Validation, UAT and training            Open

  Which users may create, amend and submit Sales Orders?                                                                    David and CJ                                  Defines accountability and prevents unauthorised changes.                                        Configuration, UAT and training         Open

  After submission, who may replace the requested quantity with the actual warehouse quantity?                              David, CJ, Lai and Grace                      The final Delivery Note and invoice depend on the answer.                                        Configuration, UAT and go-live          Open

  May CJ approve a credit exception, or is David the only Credit Controller?                                                David                                         Prevents unauthorised credit release.                                                            Configuration and UAT                   Open

  Who approves when David is unavailable?                                                                                   David                                         Prevents orders from remaining blocked without a decision.                                       Go-live                                 Open

  What exact rule creates a credit problem: amount limit, overdue days, previous unpaid invoice or a defined combination?   David and Grace                               Incorrect rules can block good orders or release risky ones.                                     Configuration and UAT                   Open

  What happens when a requested price is below the minimum price?                                                           David and MAIA product owner                  Sales, David and CJ need one clear action sequence.                                              Configuration, UAT and training         Open

  Which users may create or change customer records, and may CJ see all customers?                                          David and CJ                                  Protects customer ownership and prevents duplicate records.                                      Configuration and training              Open

  What fields must appear on the printed pick list?                                                                         Lai, David and Grace                          The warehouse and Finance need a usable and complete document.                                   UAT and training                        Open

  Where is the box-level weight breakdown kept: MAIA, Excel, paper or more than one place?                                  Lai, Grace and David                          Actual-weight evidence must be available without repeated entry.                                 Future workflow approval and UAT        Open

  Who are the named Warehouse Picker and Warehouse Checker, and must they be different people?                              David and Lai                                 The process cannot be validated or trained without real users.                                   UAT and training                        Open

  What warehouse variance requires customer confirmation?                                                                   David, CJ and Lai                             Prevents an unapproved quantity change reaching the invoice.                                     UAT and go-live                         Open

  What may Lai do to a Delivery Note, and what may only Grace do?                                                           David, Lai and Grace                          Prevents duplicate or unauthorised documents.                                                    Configuration, UAT and training         Open

  When is SCN used, when is CCN used, and which one changes stock?                                                          Grace and David                               Prevents an incorrect accounting or stock correction.                                            UAT and go-live                         Open

  How are partial payments, several invoices, several transfers and payer-name differences handled?                         Grace and David                               Finance needs a safe rule for common payment exceptions.                                         UAT and go-live                         Open

  How is driver cash handed to Grace and acknowledged?                                                                      Grace and the named Driver                    Protects cash accountability.                                                                    Training and go-live                    Open

  Will the Driver use MAIA, and what proof is required?                                                                     David, Grace and the named Driver             Determines access, training and delivery evidence.                                               Configuration, UAT and training         Open

  Which documents and payment records move between MAIA and SQL, and what is the fallback for each?                         MAIA technical owner, SQL support and Grace   Users need to know when work is complete and when to continue in SQL.                            UAT, training and go-live               Open

  Who receives low-stock and near-expiry alerts, and what thresholds and fields are used?                                   David and Lai                                 An alert is useful only when it reaches the right person with actionable information.            Configuration and acceptance            Open

  What is the final price hierarchy and who maintains prices when David is unavailable?                                     David                                         Prevents incorrect selling prices.                                                               Configuration, UAT and training         Open

  What catalogue template and output rules are approved?                                                                    David                                         Prevents inconsistent or incorrect customer-facing images.                                       UAT and training                        Open

  Is a separate pro forma invoice required?                                                                                 David and Grace                               Some customers may need a document containing the word "invoice" before paying.                  Scope and configuration                 Open
  ------------------------------------------------------------------------------------------------------------------------- --------------------------------------------- ------------------------------------------------------------------------------------------------ --------------------------------------- ------------

**9. Workflow Validation**

**Workflow Validation --- Who has reviewed and confirmed each workflow**

  -------------------------------------------- ---------------------------------------- --------------------- -------------------- ------------------------------------------------------------------------------------------------
  Workflow                                     User Representative                      Process Owner         Status               What Is Still Missing

  Customer Order to Invoice                    CJ, Grace and candidate sales users      David and CJ          Needs confirmation   One approved sequence for submission, actual weight, pick list, Delivery Note, invoice and SQL

  Price and Credit Approval                    David and CJ                             David                 Needs confirmation   Exact rule, backup, requester notification and submission authority

  Pick List and Actual Weight                  Lai; Picker and Checker not identified   Lai and David         Needs confirmation   Named users, go-live scope, printed fields, box breakdown and variance rule

  Delivery and Proof of Delivery               Driver not identified; Grace             Owner not confirmed   Not defined          Driver review, process owner, access, proof and failed-delivery rule

  Payment Matching and Outstanding Follow-Up   Grace                                    Grace and David       Needs confirmation   Exception rules, cash handover, overdue routing and SQL fallback

  Customer and Lead Records                    Candidate sales users and CJ             CJ                    Needs confirmation   Customer permissions, reassignment and final lead flow

  Price Updates                                David                                    David                 Needs confirmation   Price hierarchy, effective date and backup maintainer

  Catalogue Updates                            David                                    David                 Needs confirmation   Final template, fields, variants and acceptance

  Low-Stock and Near-Expiry Alerts             David; Lai may be involved               David                 Needs confirmation   Thresholds, recipients, output and action record

  Credit Note Correction                       Grace                                    Grace and David       Needs confirmation   SCN/CCN rule, numbering, approval and SQL fallback
  -------------------------------------------- ---------------------------------------- --------------------- -------------------- ------------------------------------------------------------------------------------------------

No workflow in this version is marked **Confirmed** because the available evidence does not show both the real user and the process owner approving the complete normal path, important exceptions and next handoff.

**10. External Parties and Systems**

**External Parties and Systems --- Work that happens outside the internal MAIA user workflow**

**Customer**

The customer sends orders, answers clarification questions, receives goods and documents, and provides payment evidence. Customer communication remains manual through WhatsApp. The customer does not use MAIA directly in the current scope.

**SQL**

SQL keeps the existing accounting and business records. MAIA is intended to read or send supported customer, item, Sales Order, Delivery Note, invoice, credit-note and payment information. The exact list and fallback are not yet approved. Purchasing and Goods Received Note work remains in SQL.

**WhatsApp**

WhatsApp remains the customer communication channel. Staff sends customer orders to MAIA through the agreed number. Manual forwarding may still be used for catalogue images, customer questions and any temporary handoff not yet available in MAIA.

**Paper Pick List and Weighing Scale**

The printed document and scale remain part of the permanent physical warehouse process. MAIA may prepare the document and store the result, but MAIA does not perform the physical check.

**Excel Packing List**

Excel currently carries detailed packing or weight information. The project has not confirmed whether it will be retired, retained for selected work or used alongside MAIA.

**Bank Statements and Payment Slips**

These provide evidence of payment. MAIA may read the information and suggest a match. Grace still confirms the correct customer and invoice.

**External Finance Consultant**

The consultant receives the completed accounting and bank information and performs the final bank reconciliation. This remains manual and outside MAIA.

**Third-Party Delivery Provider**

A third-party driver may deliver and return proof. The project has not defined whether the provider receives MAIA access or continues using the existing manual method.

**SQL Vendor or Support Provider**

This party supports access and transfer problems. Users need an agreed manual fallback in SQL whenever a MAIA transfer is unavailable.

**Fleet GPS and Temperature Service**

The existing service remains separate. No MAIA integration is included in the current workflow.

**Warehouse Management or Barcode System**

A full warehouse management system, bin control and barcode scanning are outside the current scope.

**11. Supporting Appendices**

**Appendix A --- Source and Evidence Notes**

  -------------------------------------------------------- -------------------- ---------------------------------------------------------------------------------------------- ------------------------------------------------ -----------------------------------------------------------------------------------------------------------------------------------------------
  Source                                                   Date                 Used For                                                                                       Evidence Type                                    Reliability Note

  Macro Frozen × MAIA proposal                             13 May 2026          High-level solution direction and commercial context                                           Proposed future direction                        Not proof of detailed client workflow approval

  Macro Frozen customer narrative                          May 2026             Current problems, intended product direction and terminology                                   Current-practice synthesis and proposed design   Internal/pre-sales document; internal commentary was not used in the client-facing workflow

  Business workflow deep-dive guide                        Before 4 June 2026   Questions and areas requiring discovery                                                        Discovery preparation                            A question guide is not proof that a workflow exists

  Macro Frozen meeting notes                               4 June 2026          Current process, roles, agreed early phase decisions and exclusions                            Client workshop record                           Strong for the June position; some later July working sessions differ

  Macrofood requirements-gathering transcript              4 June 2026          Detailed current practice, actual-weight problem, pick list, payment, delivery and documents   Direct workshop transcript                       Speaker labels are imperfect; ownership was cross-checked with notes

  Macro Frozen project chat and setup transcript           June 2026            Onboarding, SQL access and project handoffs                                                    Project communication                            Useful for readiness, not formal process approval

  Voice of Customer extraction summary                     July 2026            Cross-source synthesis of pains, business needs and boundaries                                 Secondary synthesis                              Used to cross-check, not as the sole source for approval

  Fireflies: Macrofrozen Client Scope Lock Clarification   13 July 2026         Roles, permissions, proof, customer ownership and alert questions                              Scope-clarification transcript                   Discussion still requires process-owner approval

  Fireflies: MAIA \<\> Macrofood Training                  16 July 2026         Role walkthrough and intended user actions                                                     Training transcript                              Training attendance is not approval

  Fireflies: MRR & Macrofood                               17 July 2026         Implementation and workflow follow-up                                                          Meeting record                                   Full decision evidence was limited

  Fireflies: Macrofrozen Discussion                        23 July 2026         Box-level weight and packing-list concerns                                                     Meeting record                                   Later than discovery, but final approval was not shown

  Fireflies: Macro Frozen UAT and Macrofrozen 2nd UAT      28 July 2026         Named working roles and end-to-end testing                                                     UAT record                                       Testing does not by itself prove process-owner approval

  Fireflies: Macro Frozen Debrief                          29 July 2026         Temporary readiness issues and remaining gaps                                                  Internal implementation review                   Used only in the readiness appendix; internal sentiment was excluded

  Fireflies live search performed for this update          5 August 2026        Meeting coverage check using Macro Frozen, Macrofrozen and Macrofood title searches            Connector search                                 Several later transcript records could not be fetched in this run; this lowers confidence in any detail not already captured in project files
  -------------------------------------------------------- -------------------- ---------------------------------------------------------------------------------------------- ------------------------------------------------ -----------------------------------------------------------------------------------------------------------------------------------------------

**Material Evidence Conflicts**

**Sales Order timing:** The 4 June notes describe draft Sales Order → pick → actual weight → submit Sales Order. July working sessions assign CJ to submit the Sales Order before Lai prepares the pick list. This document uses the newer July sequence as the working model, but keeps the decision open.

**Pick-list scope:** The 4 June notes place the MAIA pick-list flow in a later phase and allow an external pick list at early go-live. July sessions trained and tested MAIA pick-list actions. The go-live scope must be confirmed.

**Delivery scope:** Full delivery-trip management was described as a later add-on. A restricted driver proof-of-delivery role was later discussed. This document does not treat full delivery management as approved.

**Warehouse stock entry:** Early narrative material proposed simple Goods Received Note entry. The later discovery conclusion was that the main issue was picking and checking error, while purchasing and GRN remain outside the current MAIA workflow.

**Appendix B --- Implementation Readiness**

  ---------------------------------- ------------------------------------------------------------------------------------- ------------------------------------------------------------------ ------------------------------------------------------------------------ ---------------------------------------------------------------
  Workflow                           Issue                                                                                 Effect on the User                                                 Temporary Method                                                         Required Action

  Price and credit approval          The complete request, decision and requester-notification path is not accepted        Sales may not know that David has acted                            Use the agreed manual message and do not start picking until confirmed   Configure and test the complete approval handoff

  Sales Order to Lai                 Ready-order notification and delivery-date visibility need confirmation               Lai may miss an order or check several places                      Use the agreed manual notification alongside MAIA                        Approve one official handoff and test it

  Pick list                          Final layout, writing space, special characters and required fields need acceptance   Warehouse users may be unable to use the printed document safely   Continue the current paper or Excel format where required                Print-test the final document with real items

  Box-weight breakdown               The detailed per-box values are not fully supported in the accepted workflow          Lai or Grace may still need Excel or paper re-entry                Keep the current breakdown document                                      Approve where the breakdown is stored and printed

  Lai to Grace                       Draft-Delivery-Note notification and return method need confirmation                  Grace may not know that the draft is ready                         Use direct manual confirmation                                           Configure and test the handoff

  Mobile and chatbot continuity      A user may see an old order state after another screen was changed                    The user may act on outdated information                           Refresh and verify the current record before submission                  Complete technical testing and user acceptance

  Credit notes                       SCN and CCN behaviour and SQL transfer are not accepted                               Grace may create the correction in the wrong place                 Continue the approved SQL method                                         Complete Finance UAT and approve fallback

  Payment matching                   Common exceptions are not accepted                                                    Grace must continue manual matching                                Use SQL, bank records and current supporting Excel                       Run Finance UAT with real exception examples

  Low-stock and near-expiry alerts   Recipients, fields and thresholds are not final                                       The alert may be incomplete or sent to the wrong person            Continue the SQL report                                                  Approve and acceptance-test the final output

  SQL data                           Test data may use different cut-off dates by record type                              Recent documents or payments may appear missing                    Verify the record in SQL                                                 Complete a controlled data comparison before go-live

  WhatsApp production route          Testing has used other channels during implementation                                 Production behaviour may differ                                    Keep the current manual route until verified                             Complete WhatsApp setup and repeat critical tests

  Driver workflow                    No named driver, access or proof rule is approved                                     Proof continues through the existing group method                  Continue the current WhatsApp proof process                              Name the user, configure restricted access and run mobile UAT
  ---------------------------------- ------------------------------------------------------------------------------------- ------------------------------------------------------------------ ------------------------------------------------------------------------ ---------------------------------------------------------------

**Appendix C --- UAT Preparation**

  ----------------------------------- -------------------------------------- ------------------------------------------------------ ----------------------------------------------------------------------------------------- ------------------------------------------------------------
  Scenario                            Who Performs It                        What They Are Trying to Do                             What Should Happen                                                                        Test Fails When

  Clear customer order                Salesperson                            Create a normal draft from WhatsApp                    Correct customer, item, UOM, quantity and remarks appear for review                       Information is wrong or cannot be corrected

  Ambiguous product or UOM            Salesperson                            Correct an unclear item or unit                        User is required to review and correct before handoff                                     The order proceeds with an uncertain item or unit

  Normal Sales Order submission       CJ                                     Review and submit a complete order                     Lai receives the ready order once                                                         Lai does not receive it or receives duplicates

  Below-minimum price                 Salesperson and David                  Request and decide a price exception                   David can approve, return or reject and the requester sees the result                     Sales can bypass the rule or does not receive the decision

  Credit problem                      Salesperson and David                  Decide whether a customer may proceed                  The order stays stopped until the decision                                                Picking starts before approval

  Grouped pick list                   Lai                                    Group several ready orders and print one usable list   All selected orders and required fields appear                                            Orders or fields are missing

  Unequal box weights                 Picker, Checker and Lai                Record several boxes with different weights            The breakdown and total are understandable and later documents use the confirmed result   Total cannot be reconciled or is lost

  Wrong item or short pick            Picker, Checker, Lai and Salesperson   Stop and correct a warehouse problem                   The issue is resolved before the Delivery Note                                            Incorrect goods or quantity proceeds

  Draft Delivery Note handoff         Lai and Grace                          Prepare, receive, return or accept a draft             Grace sees the correct draft and can return an error                                      Grace cannot find or correct the handoff

  Invoice from actual quantity        Grace                                  Create the invoice using the checked result            Invoice quantity matches the confirmed Delivery Note                                      Invoice uses the requested estimate

  Credit note                         Grace                                  Process one stock and one non-stock correction         Correct type and reference are used                                                       Stock or customer balance changes incorrectly

  Payment payer mismatch              Grace                                  Allocate a payment from a different payer name         MAIA suggests; Grace selects and confirms                                                 MAIA auto-accepts the wrong customer

  Partial and multi-invoice payment   Grace                                  Allocate a complex payment                             Allocation is deliberate and traceable                                                    Amount is lost, duplicated or misapplied

  Delivery proof                      Driver and Grace                       Attach proof to the correct delivery                   Grace can retrieve the proof against that delivery                                        Proof is missing or attached to the wrong record

  Failed delivery                     Driver, Grace and Sales                Record a failed or rejected delivery                   The reason and next decision are clear                                                    Delivery is marked complete without evidence

  Low-stock or near-expiry alert      David and Lai                          Review a real alert and decide an action               Correct items and fields reach the right recipients                                       The alert is late, incomplete or misdirected

  SQL transfer failure                Relevant user and Grace                Continue safely when a transfer fails                  User follows the approved SQL fallback without duplicates                                 No one knows whether the record exists
  ----------------------------------- -------------------------------------- ------------------------------------------------------ ----------------------------------------------------------------------------------------- ------------------------------------------------------------

**Appendix D --- Training Preparation**

  --------------------------- -------------------------------------------------------------- -------------------------------------------------------------- ------------------------------------------------ --------------------------- ---------------------------------------------------
  Role                        New Responsibility                                             New System Action                                              Important Exception                              Next Handoff                Practice or Job Aid Required

  Salesperson                 Produce a complete reviewed draft                              Create and correct a Sales Order in MAIA                       Ambiguous item, price or credit                  CJ or David                 Draft-review checklist and real customer examples

  Sales Order Submitter       Decide when a normal order is ready                            Review and submit                                              Unresolved approval or missing delivery detail   Lai                         Submission checklist

  Credit Controller           Record a traceable credit decision                             Approve, return or reject                                      Missing or stale credit data                     CJ or Salesperson           Credit decision guide

  Price Controller            Maintain and verify structured prices                          Bulk update and check effective price                          Below-minimum request                            Sales                       Price hierarchy guide

  Catalogue Maintainer        Review repeatable catalogue output                             Generate, inspect and re-create                                Wrong photo, price or version                    Sales                       Approved template and review checklist

  Pick-List Coordinator       Own the order-to-warehouse and warehouse-to-Finance handoffs   Group, print, record actuals and prepare draft Delivery Note   Short pick, wrong item or rejected draft         Picker, Checker and Grace   Printed process card

  Warehouse Picker            Record accurate actuals                                        Use the printed MAIA list                                      Wrong item, shortage or unequal boxes            Checker                     Visual pick-list example

  Warehouse Checker           Verify before document creation                                Complete check fields                                          Failed check or large variance                   Lai or Picker               Check-and-reject guide

  Finance and Accounts User   Review prepared documents and payment suggestions              Submit documents, process corrections and confirm payments     SQL failure, payer mismatch, SCN/CCN             Driver, SQL or Consultant   Finance exception guide

  Driver                      Return proof against the correct delivery                      Restricted delivery view and proof upload, if approved         Failed delivery or cash collected                Grace                       Mobile one-page job aid
  --------------------------- -------------------------------------------------------------- -------------------------------------------------------------- ------------------------------------------------ --------------------------- ---------------------------------------------------

**Appendix E --- Terms Used**

  ---------------------------------- ---------------------------------------------------------------------------------------------------------------------------------
  Term                               Meaning in This Document

  Sales Order                        The reviewed customer order record prepared before warehouse and billing work

  Draft                              A saved record that is not yet ready for the next team

  Submit                             The action that marks the record ready for the next agreed step

  Pick list                          The printed warehouse instruction showing what must be picked

  Actual quantity or actual weight   The quantity confirmed after the warehouse physically picks and weighs the goods

  Delivery Note                      The document prepared from the confirmed delivery quantity; also referred to as DO or Delivery Order in some client discussions

  Invoice                            The customer billing document prepared from the confirmed quantity

  Credit problem                     A customer limit, overdue or payment condition that requires a decision

  Minimum price                      The lowest price allowed without approval

  SCN and CCN                        Two credit-note treatments referenced during implementation; their exact stock and accounting rules still require confirmation

  AR                                 Accounts Receivable: customer invoices, outstanding amounts and incoming payments

  GRN                                Goods Received Note for incoming supplier goods; this remains outside the current MAIA workflow

  SQL                                Macro Frozen's existing accounting and transaction system

  Proof of delivery                  A signed document, photograph or other agreed evidence showing the delivery result
  ---------------------------------- ---------------------------------------------------------------------------------------------------------------------------------

**12. Completion Check**

**Completion Check --- Whether this document is ready for validation, UAT and training use**

  --------------------------------------------------------------------------------- -------------------- ---------------------------------------------------------------------------------------------------
  Completion Requirement                                                            Status               Evidence or Remaining Gap

  Every covered process has a Before MAIA flow                                      Confirmed            Nine current workflows are documented

  Every covered process has an After MAIA flow                                      Confirmed            Nine future drafts are documented

  Every internal role has a named user or a clearly stated missing representative   Confirmed            Picker, Checker and Driver are explicitly marked as not identified

  Every workflow explains who, what, when, why and what happens next                Confirmed            Process and role sections contain the required elements

  Every confirmed step has one clear owner                                          Confirmed            Different owners are shown only under explicit conditions

  Every important handoff has one sender and one receiver                           Confirmed            Nine handoffs are documented separately

  Manual work and external-system work are visible                                  Confirmed            Physical picking, weighing, paper, WhatsApp, SQL, cash and final reconciliation remain visible

  Proposed steps are not presented as confirmed                                     Confirmed            All future workflows with material gaps are marked Needs confirmation or Not defined

  All unresolved decisions are recorded once                                        Confirmed            Decisions are consolidated in Section 8

  The real user and process owner have approved every workflow                      Needs confirmation   No complete set of user and process-owner approvals was found

  Approved implementation scope is available                                        Needs confirmation   No signed Scope Lock was found in the currently available files

  Sales Order submission timing is agreed                                           Needs confirmation   June and July working models differ

  MAIA pick-list go-live scope is agreed                                            Needs confirmation   June phase decision and July working sessions differ

  Picker, Checker and Driver workflows are directly validated                       Not defined          Named representatives and direct validation are missing

  Finance exception workflows are accepted                                          Needs confirmation   Credit-note, payment-allocation and SQL-fallback rules remain open

  The document is ready for client workflow validation                              Confirmed            The strongest supported draft and all material gaps are visible

  The document is ready for final UAT scripts                                       Needs confirmation   Core order and document tests can be drafted; warehouse, Finance and driver decisions remain open

  The document is ready for final role-based training                               Needs confirmation   Training can be outlined, but permissions, handoffs and job aids require final decisions
  --------------------------------------------------------------------------------- -------------------- ---------------------------------------------------------------------------------------------------

**Overall Assessment**

**Ready for client validation.** The main current workflow and the strongest supported future working model are documented. Final approval, UAT completion and training release remain blocked by the Sales Order timing conflict, pick-list scope, warehouse user ownership, Finance exception rules, SQL fallback and Driver workflow.

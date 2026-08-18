**05Aug26_MacroFrozen_Role_Workflows_Before_After_MAIA_v0.5**

**Role Workflows --- Before / After MAIA**

**Document Version History**

  ------------ ------------------- ----------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------
  Version      Date                Prepared By             What Changed From the Previous Version                                                                                                                                                                                                                                                                                                                                                                                                                                       Status

  v0.1         31 July 2026        MAIA Project Team       First full Macro Frozen workflow draft prepared from the available project and meeting evidence.                                                                                                                                                                                                                                                                                                                                                                             Draft --- being prepared

  v0.2         5 August 2026       MAIA Project Team       Rebuilt the document using Prompt Pack v1.2 and added detailed process, role, handoff and supporting sections.                                                                                                                                                                                                                                                                                                                                                               Ready for client validation

  v0.3         5 August 2026       MAIA Project Team       Rebuilt the workflows against Scope Lock v3 and Voice of Customer v3; corrected salesperson self-submission, price and credit approvals, notifications to Lai and Grace, explicit Delivery Note and Invoice actions, SQL timing and unresolved warehouse and proof-of-delivery decisions.                                                                                                                                                                                    Ready for client validation

  v0.4         5 August 2026       MAIA Project Team       Rebuilt the document using Prompt Pack v1.5; changed it to a role-first format, applied the named-real-user rule and moved incomplete decisions into the affected role sections.                                                                                                                                                                                                                                                                                             Draft --- Role Coverage Incomplete

  **v0.5**     **5 August 2026**   **MAIA Project Team**   **Rebuilt the document using Prompt Pack v1.6 and the updated Scope Lock v3 and Voice of Customer v3. Removed detailed exception, training, decision, validation and supporting sections. Limited each role to its current work, supported future work, changes, unchanged responsibilities and next handoff. Reclassified the customer credit-settings, stock-and-expiry and warehouse roles where the future workflow is not locked or cannot yet be safely described.**   **Draft --- Role Coverage Incomplete**
  ------------ ------------------- ----------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------

**1. Document Overview**

  -------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                             Details

  **Client**                       Macro Frozen Sdn. Bhd. / Macrofood

  **Project**                      Macro Frozen × MAIA Implementation

  **Document version**             v0.5

  **Date**                         5 August 2026

  **Document status**              **Draft --- Role Coverage Incomplete**

  **Business processes covered**   Customer order and Sales Order preparation; customer ownership; price approval; credit approval; selling-price maintenance; customer credit settings; stock and expiry review; warehouse picking and checking; Delivery Note and Invoice preparation; customer-payment matching

  **Purpose**                      This document explains how each client role performs their work today and how the same work will be performed after MAIA is introduced. It shows who performs the work, what they do, when they do it, why the step is needed and who receives the work next.

  **Completion standard**          This document is complete only when every in-scope role has a named real user and every role has a validated Before MAIA and After MAIA workflow.

  **Main completion blockers**     The Warehouse Picker and Warehouse Checker are not identified by name. No complete role workflow has been validated by the named real user. The customer credit-settings owner is inconsistent in the updated scope. The stock-and-expiry operating rule is not defined. The warehouse method for recording actual quantities remains agreed in principle rather than locked.
  -------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**2. Role Coverage**

  ------------------------------------------- ----------------------------------------------------- --------------------
  Role                                        Named Real User                                       Workflow Status

  Salesperson                                 Queenie, Ben and CJ Tan                               Needs Confirmation

  Sales Manager and Mid-Tier Price Approver   CJ Tan                                                Needs Confirmation

  Credit and Highest-Tier Price Approver      David Chong                                           Needs Confirmation

  Selling-Price Maintainer                    David Chong                                           Needs Confirmation

  Customer Credit-Settings Maintainer         Apple                                                 Not Defined

  Stock and Expiry Reviewer                   David Chong                                           Not Defined

  Warehouse Manager                           Lim Jun Yan (Lai)                                     Not Defined

  Warehouse Picker                            **Not yet identified --- Doc 4 completion blocker**   Not Defined

  Warehouse Checker                           **Not yet identified --- Doc 4 completion blocker**   Not Defined

  Finance Manager and Accounts User           Grace                                                 Needs Confirmation
  ------------------------------------------- ----------------------------------------------------- --------------------

**Total in-scope roles:** 10

**Roles with named real users:** 8

**Roles with validated workflows:** 0

**Roles preventing completion:** Salesperson; Sales Manager and Mid-Tier Price Approver; Credit and Highest-Tier Price Approver; Selling-Price Maintainer; Customer Credit-Settings Maintainer; Stock and Expiry Reviewer; Warehouse Manager; Warehouse Picker; Warehouse Checker; Finance Manager and Accounts User

**3. Overall Workflow at a Glance**

**Before MAIA**

  ---------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order through WhatsApp\
  ↓\
  SALESPERSON Interprets the item, unit, quantity, price and delivery need\
  ↓\
  DAVID Coordinates orders and handles price or credit questions\
  ↓\
  LAI Prepares the warehouse work\
  ↓\
  PICKER Picks and weighs the goods\
  ↓\
  CHECKER Checks the item and actual quantity\
  ↓\
  GRACE Enters the final result in SQL\
  → Creates the Delivery Note and Invoice\
  ↓\
  GRACE Checks and records customer payments

  ---------------------------------------------------------------------------

**After MAIA**

  -----------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order through WhatsApp\
  ↓\
  SALESPERSON Forwards it to MAIA → Checks and submits the Sales Order\
  ↓\
  MAIA Checks price and credit rules\
  ↓\
  Which result applies?\
  ↙ ↓ ↘\
  NO APPROVAL MIDDLE PRICE CREDIT / HIGHEST PRICE\
  ↓ ↓ ↓\
  LAI Receives order CJ reviews DAVID reviews\
  \\ \| /\
  \\ \| /\
  ↓\
  LAI Receives the approved submitted order\
  ↓\
  WAREHOUSE Picks, weighs and checks the goods manually\
  ↓\
  GRACE Reviews the confirmed documents\
  → Submits the Delivery Note and Invoice\
  ↓\
  GRACE Reviews MAIA\'s payment suggestion\
  → Confirms the correct customer and Invoice

  -----------------------------------------------------------------------

The method for recording the warehouse\'s actual quantity in MAIA is not yet locked. Physical picking, weighing and checking remain manual.

**Main Changes Across Roles**

Salespeople prepare and submit their own Sales Orders.

CJ handles the middle price range; David handles credit and the highest price range.

MAIA sends every approved submitted order to Lai and every created draft Delivery Note to Grace.

Physical picking, weighing and checking remain manual.

Grace reviews prepared documents and payment suggestions instead of rebuilding every record from the beginning.

SQL remains the main system where final customer, item and accounting records are kept.

**4. Role Workflows**

**Salesperson --- Queenie, Ben and CJ Tan --- Needs Confirmation**

**Role Details**

**Role:** Salesperson

**Named real user:** Queenie, Ben and CJ Tan

**Workflow status:** Needs Confirmation

**Why This Role Is Involved**

The salesperson receives the customer\'s message and turns it into a clear order. The salesperson must make sure the customer, item, unit, quantity, price and delivery details are correct before the order moves forward.

**When This Role Acts**

**Starts when:** A customer sends an enquiry, order, voice note or Purchase Order.

**Ends when:** The Sales Order is submitted or sent for the required price or credit approval.

**Before MAIA**

  ---------------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends an order through WhatsApp, voice note or Purchase Order\
  ↓\
  SALESPERSON Interprets the product name, cut, unit, quantity and delivery need\
  ↓\
  SALESPERSON Checks an available price list, message or previous order\
  ↓\
  SALESPERSON Sends the understood order to the company WhatsApp group\
  ↓\
  DAVID Receives the order for coordination

  ---------------------------------------------------------------------------------

**After MAIA**

  ------------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends the order to the salesperson\
  ↓\
  SALESPERSON Forwards the order to the one MAIA WhatsApp number\
  ↓\
  MAIA Prepares a draft Sales Order\
  ↓\
  SALESPERSON Checks customer, item, unit, quantity, price, notes and address\
  ↓\
  SALESPERSON Corrects errors → Submits the Sales Order\
  ↓\
  MAIA Checks the price and credit rules\
  ↓\
  Which result applies?\
  ↙ ↓ ↘\
  NO APPROVAL MIDDLE PRICE CREDIT OR HIGHEST PRICE\
  ↓ ↓ ↓\
  LAI Receives order CJ receives request DAVID receives request

  ------------------------------------------------------------------------------

**What Changes for This User**

The salesperson prepares and submits their own Sales Order.

MAIA prepares the first draft from the forwarded customer message.

The salesperson reviews and corrects the draft before submission.

MAIA checks the price and credit rules.

The salesperson receives the approval result.

Standard salespeople see only their own customers and orders.

MAIA applies the customer payment term first, then the company term, then cash in advance, then leaves it blank if none exists.

**What Stays the Same**

Customers continue ordering through WhatsApp or a Purchase Order.

The salesperson still asks the customer when the product, unit, quantity or delivery instruction is unclear.

Product knowledge remains a human responsibility.

The salesperson still explains the price and delivery expectation to the customer.

Formal quotations remain uncommon.

**Why the Change Matters**

This removes repeated order entry while keeping the person who understands the customer responsible for the order. It also makes it clearer whether the order is ready or waiting for approval.

**Who Receives the Work Next**

After the salesperson submits an order that passes the price and credit checks, **Lim Jun Yan (Lai) receives the submitted Sales Order and Order PDF**.

When approval is required:

  -------------------------------------------------------------------
  Plaintext\
  Which approval is needed?\
  ↙ ↓ ↘\
  MIDDLE PRICE HIGHEST PRICE CREDIT\
  ↓ ↓ ↓\
  CJ receives request DAVID receives request DAVID receives request

  -------------------------------------------------------------------

**Sales Manager and Mid-Tier Price Approver --- CJ Tan --- Needs Confirmation**

**Role Details**

**Role:** Sales Manager and Mid-Tier Price Approver

**Named real user:** CJ Tan

**Workflow status:** Needs Confirmation

**Why This Role Is Involved**

CJ manages the sales team and handles a price request that is below the normal customer price but still at or above the minimum price.

**When This Role Acts**

**Starts when:** MAIA sends CJ a middle-price request from a salesperson.

**Ends when:** CJ approves the price or sends it back to the salesperson.

**Before MAIA**

  -----------------------------------------------------------------------
  Plaintext\
  SALESPERSON Sends CJ a message or speaks to CJ about a special price\
  ↓\
  CJ Checks the customer and available price information\
  ↓\
  CJ Approves, changes or sends the request to David\
  ↓\
  SALESPERSON Receives CJ\'s instruction

  -----------------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  MAIA Sends CJ the Sales Order and requested price\
  ↓\
  CJ Checks customer, item, requested price and minimum price\
  ↓\
  Did CJ create this Sales Order?\
  ↙ ↘\
  NO YES\
  ↓ ↓\
  CJ Approves or returns DAVID reviews the request\
  ↓\
  SALESPERSON Receives the recorded decision

  --------------------------------------------------------------

**What Changes for This User**

CJ receives a defined price range to approve.

CJ receives the exact Sales Order instead of searching a general message group.

CJ records the decision against the Sales Order.

The salesperson is told the result.

CJ does not approve CJ\'s own price exception.

**What Stays the Same**

CJ manages the sales team.

CJ remains an active salesperson.

Customer and market knowledge remain part of the decision.

David remains responsible for prices below the minimum or above the maximum.

**Why the Change Matters**

This gives Sales a faster path for a moderate price change while preventing a salesperson from quietly using an unauthorised price.

**Who Receives the Work Next**

After CJ approves or returns the request, **the salesperson receives the decision and either submits the order or revises the price**. CJ\'s own price request goes to **David Chong**.

**Credit and Highest-Tier Price Approver --- David Chong --- Needs Confirmation**

**Role Details**

**Role:** Credit and Highest-Tier Price Approver

**Named real user:** David Chong

**Workflow status:** Needs Confirmation

**Why This Role Is Involved**

David carries the final commercial risk when a customer has a credit problem or when the requested price is below the minimum or above the maximum.

**When This Role Acts**

**Starts when:** MAIA sends David a credit request, a below-minimum price request, an above-maximum price request or CJ\'s own price request.

**Ends when:** David approves, returns or rejects the request and the salesperson receives the result.

**Before MAIA**

  ---------------------------------------------------------------------------
  Plaintext\
  SALESPERSON Contacts David through WhatsApp, phone or conversation\
  ↓\
  DAVID Checks the customer, price, outstanding amount and payment history\
  ↓\
  DAVID Says proceed, revise or stop\
  ↓\
  SALESPERSON Acts on David\'s instruction

  ---------------------------------------------------------------------------

**After MAIA**

  ------------------------------------------------------------------------------
  Plaintext\
  MAIA Sends David the Sales Order and reason for approval\
  ↓\
  DAVID Checks customer, requested price, outstanding amount and payment term\
  ↓\
  What is David\'s decision?\
  ↙ ↓ ↘\
  APPROVE RETURN REJECT\
  ↓ ↓ ↓\
  ORDER Can continue SALESPERSON revises ORDER remains stopped\
  ↓\
  SALESPERSON Receives the recorded decision

  ------------------------------------------------------------------------------

The strictness of the credit block and overdue tolerance is not yet confirmed, but David\'s approval path after a credit problem occurs is defined.

**What Changes for This User**

David receives a request linked to the exact Sales Order.

MAIA shows why the order needs approval.

David records the decision and reason.

The salesperson receives the outcome.

The approval must work on David\'s normal mobile device.

**What Stays the Same**

David remains the final person for credit approval.

David remains the final person for prices below the minimum or above the maximum.

David checks real payment evidence when SQL has not yet been updated.

The commercial decision remains human.

**Why the Change Matters**

This protects cash flow and margin while preventing a blocked order from being forgotten. It also gives the salesperson a clear answer.

**Who Receives the Work Next**

After David approves, **the salesperson receives the decision and the submitted order can move to Lim Jun Yan (Lai)**. After David returns or rejects it, **the salesperson receives the reason and revises or stops the order**.

**Selling-Price Maintainer --- David Chong --- Needs Confirmation**

**Role Details**

**Role:** Selling-Price Maintainer

**Named real user:** David Chong

**Workflow status:** Needs Confirmation

**Why This Role Is Involved**

David decides the accepted selling prices and keeps them current when the market changes. The price-approval rules depend on the maintained prices being correct.

**When This Role Acts**

**Starts when:** David decides that one or more selling prices must change.

**Ends when:** David checks that the new prices appear correctly for sample customers and items.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  DAVID Decides the new selling price\
  ↓\
  DAVID Updates Excel, an image or a WhatsApp message\
  ↓\
  DAVID Shares the new price with Sales\
  ↓\
  SALESPERSON Uses the available price when preparing an order

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  DAVID Prepares the approved price changes\
  ↓\
  DAVID Opens the desktop bulk-price page\
  ↓\
  DAVID Updates the required selling prices\
  ↓\
  MAIA Makes the new prices available in the Sales Order\
  ↓\
  DAVID Checks sample customers and items\
  ↓\
  SALESPERSON Receives the effective price

  --------------------------------------------------------------

**What Changes for This User**

David uses a structured, Excel-like page instead of relying only on files and images.

The updated price is available during Sales Order preparation.

The maintained minimum price controls the approval path.

David checks the result after a bulk update.

**What Stays the Same**

David decides the selling price.

Market knowledge remains a human responsibility.

Urgent price changes may still require direct communication to Sales.

Sales still explains the price to the customer.

Cost and buying prices remain separate from the locked selling-price workflow.

**Why the Change Matters**

This reduces stale prices and gives the approval rule a reliable price to check. David\'s review remains important because one bulk update can affect many customers.

**Who Receives the Work Next**

After David checks the updated prices, **Salespeople receive the effective price when they prepare the next Sales Order**.

**Customer Credit-Settings Maintainer --- Apple --- Not Defined**

**Role Details**

**Role:** Customer Credit-Settings Maintainer

**Named real user:** Apple

**Workflow status:** Not Defined

**Why This Role Is Involved**

The credit check needs an accurate customer credit limit and payment term. The approved setting must be entered by one clearly responsible person.

**When This Role Acts**

**Starts when:** A customer is created or the approved credit limit or payment term changes.

**Ends when:** The correct setting is available for the next Sales Order check.

**Before MAIA**

  -----------------------------------------------------------------
  Plaintext\
  DAVID Decides the customer\'s credit arrangement\
  ↓\
  FINANCE USER Updates the customer setting in SQL\
  ↓\
  SALESPERSON Uses the available information during order review\
  ↓\
  DAVID Handles any one-time exception

  -----------------------------------------------------------------

The evidence does not clearly confirm whether Apple or CJ currently enters every customer setting.

**After MAIA**

***Future workflow not defined. The workflow must be confirmed with the named real user before this role can be validated.***

The updated scope assigns customer credit limits and terms to Apple in one place and to CJ at customer creation in another. The future role cannot be shown as agreed until one owner is confirmed.

**What Changes for This User**

The change cannot be stated safely until the owner and permitted customer fields are confirmed.

**What Stays the Same**

The customer credit arrangement remains a human business decision.

SQL remains the main customer record.

David handles a one-time credit exception.

**Why the Change Matters**

An incorrect limit or payment term can block a good order or release a risky order. The person maintaining it must be unambiguous.

**Who Receives the Work Next**

Once the ownership is confirmed and the approved setting is entered, **Salespeople and David use it during Sales Order and credit-approval work**.

**Stock and Expiry Reviewer --- David Chong --- Not Defined**

**Role Details**

**Role:** Stock and Expiry Reviewer

**Named real user:** David Chong

**Workflow status:** Not Defined

**Why This Role Is Involved**

David needs to notice low-stock, slow-moving and near-expiry items early enough to decide what the business should do.

**When This Role Acts**

**Starts when:** A stock or aging report is available.

**Ends when:** David gives a clear instruction to the person who must act.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  DAVID Opens or prints a SQL stock or aging report\
  ↓\
  DAVID Checks item, quantity and age\
  ↓\
  DAVID Decides the required action\
  ↓\
  Which action is needed?\
  ↙ ↘\
  WAREHOUSE ACTION SALES ACTION\
  ↓ ↓\
  LAI Receives instruction SALESPERSON receives instruction

  --------------------------------------------------------------

**After MAIA**

***Future workflow not defined. The workflow must be confirmed with the named real user before this role can be validated.***

The alert feature exists, but the trigger, recipient, timing and information shown have not been agreed. MAIA must not automatically purchase, discount or clear stock.

**What Changes for This User**

The change cannot be stated safely until the alert rule and recipients are confirmed.

**What Stays the Same**

David makes the business decision.

Purchasing remains outside MAIA.

Warehouse and Sales carry out David\'s instruction.

No stock action happens automatically.

**Why the Change Matters**

A useful alert can make stock risks harder to miss, but an unclear alert can create noise or send work to the wrong person.

**Who Receives the Work Next**

After David decides the action, **Lim Jun Yan (Lai) receives a warehouse instruction** or **the salesperson receives a customer-selling instruction**, depending on the action.

**Warehouse Manager --- Lim Jun Yan (Lai) --- Not Defined**

**Role Details**

**Role:** Warehouse Manager

**Named real user:** Lim Jun Yan (Lai)

**Workflow status:** Not Defined

**Why This Role Is Involved**

Lai turns submitted orders into warehouse work and passes the checked result to Grace.

**When This Role Acts**

**Starts when:** MAIA sends Lai a submitted Sales Order and Order PDF.

**Ends when:** The checked actual quantity is ready for Grace\'s customer documents.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  COMPANY GROUP Contains orders from several salespeople\
  ↓\
  LAI Finds the orders → Groups them by area or delivery need\
  ↓\
  LAI Prepares or receives the paper warehouse instruction\
  ↓\
  PICKER Returns written actual quantities\
  ↓\
  LAI Checks the returned information\
  ↓\
  GRACE Receives paper or Excel details

  --------------------------------------------------------------

**After MAIA**

***Future workflow not defined. The workflow must be confirmed with the named real user before this role can be validated.***

Two parts are locked: MAIA sends every submitted Sales Order and Order PDF to Lai, and MAIA sends every created draft Delivery Note and PDF to Grace. The steps between those handoffs are not locked. Macro Frozen may retain its own pick list, and the person who records the final actual quantity in MAIA is not confirmed.

**What Changes for This User**

Lai receives every submitted order through a named handoff.

The full warehouse method cannot be stated until the pick-list and actual-quantity decisions are confirmed.

**What Stays the Same**

Lai groups work using practical warehouse and delivery knowledge.

Physical picking, weighing and checking remain manual.

Paper remains necessary in the warehouse.

Different boxes can have different weights.

Lai checks the warehouse result before Finance acts.

**Why the Change Matters**

The new handoff should make submitted orders harder to miss. The remaining warehouse steps must preserve the proof and control that the current paper and Excel process provides.

**Who Receives the Work Next**

After the warehouse method is confirmed and Lai prepares the final handoff, **Grace receives the draft Delivery Note and confirmed quantity for review**.

**Warehouse Picker --- Named Real User Missing --- Not Defined**

**Role Details**

**Role:** Warehouse Picker

**Named real user:** **Not yet identified --- Doc 4 completion blocker**

**Workflow status:** Not Defined

**Why This Role Is Involved**

The Picker selects and weighs the physical goods. The recorded actual quantity affects the customer\'s Delivery Note and Invoice.

**When This Role Acts**

**Starts when:** Lai gives the Picker the warehouse instruction.

**Ends when:** The Picker gives the goods and recorded result to the Warehouse Checker.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  LAI Gives the Picker a paper list\
  ↓\
  PICKER Finds the item → Picks the goods → Weighs the goods\
  ↓\
  PICKER Writes the actual quantity on paper\
  ↓\
  CHECKER Receives the goods and written result

  --------------------------------------------------------------

This current workflow is described by other people. No named Picker has confirmed it directly.

**After MAIA**

***Future workflow not defined. The workflow must be confirmed with the named real user before this role can be validated.***

Physical picking and weighing will remain manual, but the final printed document, information to record and MAIA access method are not approved.

**What Changes for This User**

The change cannot be stated safely until the named Picker and final warehouse method are confirmed.

**What Stays the Same**

The Picker physically finds, picks and weighs the goods.

A scale and printed instruction remain necessary.

The Picker records the actual result rather than the ordered estimate.

Product knowledge remains important.

**Why the Change Matters**

The Picker\'s result affects billing and customer disputes. The workflow cannot be completed using only a manager\'s description of the work.

**Who Receives the Work Next**

After the Picker completes the physical work, **the Warehouse Checker receives the goods and recorded actual quantity**.

**Warehouse Checker --- Named Real User Missing --- Not Defined**

**Role Details**

**Role:** Warehouse Checker

**Named real user:** **Not yet identified --- Doc 4 completion blocker**

**Workflow status:** Not Defined

**Why This Role Is Involved**

The Checker confirms that the correct item and actual quantity are ready before the result is used for the customer documents.

**When This Role Acts**

**Starts when:** The Picker presents the goods and recorded actual quantity.

**Ends when:** The Checker confirms the result or sends it back for correction.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  PICKER Gives the Checker the goods and written result\
  ↓\
  CHECKER Checks the item and actual quantity\
  ↓\
  Is the result correct?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  LAI Receives the result PICKER receives it for correction

  --------------------------------------------------------------

This current workflow is described by other people. No named Checker has confirmed it directly.

**After MAIA**

***Future workflow not defined. The workflow must be confirmed with the named real user before this role can be validated.***

A human check remains necessary, but the check record, sign-off method and MAIA access are not defined.

**What Changes for This User**

The change cannot be stated safely until the named Checker and final check method are confirmed.

**What Stays the Same**

The Checker physically checks the item and quantity.

The Checker sends an incorrect result back for correction.

The check happens before Lai uses the quantity for the Finance handoff.

**Why the Change Matters**

Without a clear Checker step, a wrong pick can become a wrong Delivery Note and Invoice. Macro Frozen also wants to know who performed the check.

**Who Receives the Work Next**

When the result is correct, **Lim Jun Yan (Lai) receives the checked actual quantity**. When the result is wrong, **the Warehouse Picker receives it for correction**.

**Finance Manager and Accounts User --- Grace --- Needs Confirmation**

**Role Details**

**Role:** Finance Manager and Accounts User

**Named real user:** Grace

**Workflow status:** Needs Confirmation

**Why This Role Is Involved**

Grace checks the final customer documents and customer-payment records. This prevents the customer from being billed for the wrong quantity and prevents a payment from being posted to the wrong customer or Invoice.

**When This Role Acts**

**Starts when:** Grace receives a draft Delivery Note, a payment slip or a bank item.

**Ends when:** The correct document or payment is completed in SQL, or the work is returned for correction.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  LAI Gives Grace paper or Excel actual quantities\
  ↓\
  GRACE Re-enters the information in SQL\
  ↓\
  GRACE Creates the Delivery Note → Creates the Invoice\
  ↓\
  CUSTOMER Receives the documents

  --------------------------------------------------------------

  --------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends payment proof or makes a transfer\
  ↓\
  GRACE Checks WhatsApp, bank information, SQL and Excel\
  ↓\
  GRACE Identifies the customer and Invoice\
  ↓\
  GRACE Records the payment in SQL\
  ↓\
  FINANCE CONSULTANT completes final bank reconciliation

  --------------------------------------------------------------

**After MAIA**

  -----------------------------------------------------------------
  Plaintext\
  GRACE Receives a draft Delivery Note and PDF from MAIA\
  ↓\
  GRACE Checks customer, item, actual quantity and credit result\
  ↓\
  Is the draft correct?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  GRACE Submits the Delivery Note LAI receives it for correction\
  ↓\
  GRACE Requests the Invoice → Checks and submits it\
  ↓\
  SQL Receives the final document information

  -----------------------------------------------------------------

  ----------------------------------------------------------------------
  Plaintext\
  GRACE Uploads or forwards a payment slip or bank item\
  ↓\
  MAIA Reads payer, date, amount and reference\
  → Suggests the customer and Invoice\
  ↓\
  GRACE Checks the suggestion\
  ↓\
  Is the match clear?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  GRACE Confirms the match GRACE selects, splits or holds it manually\
  ↓\
  SQL Receives the confirmed payment information

  ----------------------------------------------------------------------

**What Changes for This User**

Grace receives every created draft Delivery Note and PDF.

Grace checks prepared information instead of rebuilding every warehouse detail.

Grace explicitly submits the Delivery Note and then requests and submits the Invoice.

MAIA suggests a customer-payment match.

Grace confirms, changes or holds the payment.

Payment status changes only after Grace confirms it.

**What Stays the Same**

Grace remains responsible for the final document and payment check.

SQL remains the main accounting system.

Grace handles unclear or complex payments manually.

Final bank reconciliation remains with the external Finance consultant.

Purchasing, supplier records, Goods Received Notes and Accounts Payable remain in SQL.

The existing SQL method remains in use for credit notes until that future workflow is accepted.

**Why the Change Matters**

This reduces repeated entry while keeping Finance in control. It also protects the business from billing the wrong actual quantity or posting an uncertain payment automatically.

**Who Receives the Work Next**

After Grace submits the Delivery Note and Invoice, **SQL receives the final document information and the customer receives the reviewed documents**.

After Grace confirms a payment, **SQL receives the confirmed payment information and the Finance consultant uses the records for final bank reconciliation**.

When a draft Delivery Note is wrong, **Lim Jun Yan (Lai) receives it for correction**.

**5. Final Completion Assessment**

**Final Completion Assessment --- Whether Doc 4 meets its definition of done**

  ------------------------------------------------- -------------------- ------------------------------------------------------------------------------------------------
  Completion Requirement                            Result               Remaining Gap

  Every in-scope role has a named real user         **Not Met**          Warehouse Picker and Warehouse Checker are not identified by name

  Every role has a validated Before MAIA workflow   **Not Met**          No named real user has confirmed the complete current workflow and next handoff for their role

  Every role has a validated After MAIA workflow    **Not Met**          No role has completed full future-workflow validation; four future workflows are not defined
  ------------------------------------------------- -------------------- ------------------------------------------------------------------------------------------------

**Completion Summary**

**Total in-scope roles:** 10

**Roles with named real users:** 8

**Roles with validated workflows:** 0

**Roles blocking completion:** Salesperson; Sales Manager and Mid-Tier Price Approver; Credit and Highest-Tier Price Approver; Selling-Price Maintainer; Customer Credit-Settings Maintainer; Stock and Expiry Reviewer; Warehouse Manager; Warehouse Picker; Warehouse Checker; Finance Manager and Accounts User

**Overall document status:** **Draft --- Role Coverage Incomplete**

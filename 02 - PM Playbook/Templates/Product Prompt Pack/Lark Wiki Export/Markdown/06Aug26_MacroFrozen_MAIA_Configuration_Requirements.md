**06Aug26_MacroFrozen_MAIA_Configuration_Requirements**

**Client-Specific MAIA Configuration Requirements**

**Client:** Macro Frozen Sdn. Bhd. (also referred to as Macrofood)\
**Prepared from:** *Macro Frozen --- Scope Lock v3* (29 Jul 2026), *Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3* (29 Jul 2026), and supporting project records referenced by those two superseding documents\
**Status:** Working document for Product, Technical and business review\
**Date:** 6 Aug 2026

**Table of Contents**

Section 1 --- How to Use This Document

Section 2 --- Client and Configuration Summary

Section 3 --- Users and Roles

David Chong --- Owner, price controller and final approver

CJ Tan --- Sales Manager and price approver

Salespeople --- CJ, Ben and Queenie

Grace --- Finance Manager

Apple --- Finance user for customer credit settings

Lai --- Warehouse and Logistics Manager

People not yet confirmed as MAIA users

Section 4 --- Notifications and Reminders

Approved notification list and suppression rule

Credit approval notifications

Price approval notifications

Order, warehouse and finance handoff notifications

Notifications not yet configurable

Section 5 --- Warnings and Blocking Rules

Credit and payment-term controls

Selling-price controls

Customer and information visibility

SQL document integrity

Payment matching controls

Section 6 --- Automatic Actions and Calculations

SQL customer and item data

Customer ownership and default assignments

Selling prices and payment terms

Approval routing

Documents and SQL updates

Payment extraction and matching

Section 7 --- Decisions Required Before Configuration

Credit-control decisions

Pricing decisions

Finance and warehouse handoff decisions

Stock-aging notification decisions

User-access and backup decisions

Other notification decisions

Section 8 --- Possible Scope Changes

Order, picking and warehouse changes

Sales, catalogue and customer-information changes

Finance and delivery changes

Explicitly excluded future items

Section 9 --- Source and Evidence Notes --- Internal Review

**Section 1 --- How to Use This Document**

This document captures the settings, permissions, warnings, notifications and automatic actions that are specific to **Macro Frozen**.

It does not repeat normal MAIA behaviour unless Macro Frozen needs it to work differently or Product must confirm whether a separate setting is required.

Each requirement has a reference ID so reviewers can approve, reject or amend it independently.

Items under **What is still unclear** require a decision. Items under **Suggestions for Product to consider** are not confirmed client requirements. Items under **Possible Scope Changes** have been discussed but are not yet approved as part of the current configuration.

The latest Scope Lock determines whether an item is confirmed, still open or outside the current scope. The latest Voice of Customer document is used to explain why the requirement matters to Macro Frozen.

**Section 2 --- Client and Configuration Summary**

**Client**

**Macro Frozen Sdn. Bhd.**

**Business process covered**

Macro Frozen distributes frozen food and meat products. Customers normally place orders through WhatsApp. A salesperson must identify the customer and product, check the selling price and the customer's unpaid amount, and create a Sales Order. Many products are sold by actual weight, so the quantity and final amount may change after warehouse preparation. MAIA is intended to support the order, approval, document and payment workflow while SQL remains the source for customer and item records. The exact digital picking and final-weight process is still not fully approved and is therefore listed under **Possible Scope Changes** rather than treated as a confirmed configuration.

**Main users**

  -------------------------------- ------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------
  Person or role                   Main responsibility in MAIA                                                                                                          Status

  David Chong                      Controls selling prices, decides high-risk price exceptions, decides customer credit exceptions, and receives unassigned customers   Confirmed; one credit-authority question remains open

  CJ Tan                           Manages his own customers, submits Sales Orders, and approves the middle selling-price tier                                          Confirmed; credit-limit maintenance boundary is unclear

  Ben and Queenie                  Submit orders for their own customers and respond to approval outcomes                                                               Confirmed

  Grace                            Reviews payment matches, controls the Delivery Note and Invoice handoff, and receives finance handoff notifications                  Confirmed; Credit Note and Pick List details remain partly open

  Apple                            Maintains finance-related customer credit settings and payment terms                                                                 Confirmed role; exact split with CJ and final override authority are unclear

  Lai                              Receives submitted Sales Orders and performs the warehouse-to-finance handoff                                                        Confirmed role; exact Pick List and login model remain unclear

  Warehouse pickers                Prepare goods and record actual quantities, mainly using paper today                                                                 User accounts not confirmed

  Delivery driver                  Possible future user for Delivery Note visibility and proof of delivery                                                              Possible future user; not approved

  External accounting consultant   Performs final bank reconciliation outside MAIA                                                                                      No MAIA account currently required
  -------------------------------- ------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------

**Main client-specific settings**

Macro Frozen will use **one MAIA WhatsApp number** for authorised staff to send order and workflow messages.

SQL remains the source for customers and items. MAIA must not replace SQL or create documents in a sequence that SQL cannot accept.

Each salesperson sees only customers assigned to that salesperson. Unassigned or legacy customers default to David.

Salespeople create, review and submit their own draft Sales Orders instead of relaying every order to an office administrator.

Selling prices use a three-level control: normal price proceeds, a lower price that is still above the minimum goes to CJ, and a price below the minimum goes to David.

Customer credit amount and payment terms are checked at Sales Order and Delivery Note stages, but the exact warn-versus-stop behaviour is still unresolved.

Credit and price exceptions must not fail silently. The correct approver and the salesperson must receive the relevant notification.

Only an approved list of notifications may be sent. MAIA's other default notifications must be switched off for Macro Frozen.

Every submitted Sales Order is sent to Lai. Every draft Delivery Note created by Lai is sent to Grace. These two notifications are not batched.

Grace must request Delivery Note and Invoice generation separately after the order is ready. MAIA must not automatically generate them merely because an amended Sales Order was submitted.

Payment records are updated only after Finance confirms the customer and invoice match.

Payment terms follow a client-specific default sequence: customer default, then company default, then cash in advance, then blank when no default exists.

Warehouse users must not see the Purchasing tab or buying-cost information intended to remain restricted.

**Important unclear areas**

Whether a failed credit check gives a warning or completely stops the order.

The overdue tolerance period before credit control applies.

Whether David alone can approve credit exceptions or Apple may also approve them.

Whether CJ or Apple creates and maintains customer credit limits, or whether their responsibilities are split by stage.

The exact Pick List event that sends a notification to Grace.

Who covers Lai and Finance duties during absence.

Whether warehouse staff use individual accounts or one shared device/account.

The threshold, recipient and frequency for near-expiry and slow-moving-stock alerts.

Whether the future proof-of-delivery process is performed by Accounts or by a driver with a MAIA account.

Whether the fresh-weight, Pick List breakdown, catalogue, Credit Note, dashboard and other agreed-in-principle items will be formally added to the approved configuration.

**Key client terms**

  -------------------------------- ------------------------------------------------------------------------------------------------------------------
  Client term                      Plain-language meaning

  Sales Order                      The internal order record prepared before the final delivery and billing documents

  Pick List                        The warehouse document showing what must be prepared and the quantity actually picked

  Delivery Note / Delivery Order   The document that accompanies or records goods delivered to the customer

  Invoice                          The final billing document sent to the customer

  Credit terms                     The allowed time or payment condition before a customer's next order is restricted

  Minimum price                    The lowest selling price that Sales may use without David's approval

  Proof of Delivery                Evidence that delivery occurred, such as a signed Delivery Note or delivery photo

  SCN / CCN                        Two Credit Note types used for different financial or stock effects; the exact SQL behaviour still needs testing
  -------------------------------- ------------------------------------------------------------------------------------------------------------------

**Section 3 --- Users and Roles**

**David Chong --- Owner, price controller and final approver**

**David Chong --- Owner, price controller and final approver**

**Role in the client's business**

David is Macro Frozen's owner and the person currently coordinating many order, price and credit decisions. MAIA must reduce routine dependence on him without removing his control over high-risk price and credit exceptions.

**Known users**

David Chong.

One named account is required.

No confirmed backup approver exists.

**Documents and information used**

Customer record and assigned salesperson.

Sales Order and Delivery Note.

Customer unpaid amount and payment-term status.

Normal customer price, minimum price and maximum price where configured.

Price and credit exception reason.

**What this person needs to do**

**DAVID-01 --- Maintain the current selling prices**

David needs to upload or maintain Macro Frozen's latest selling prices through the desktop or administrative price interface.

This is needed because Macro Frozen currently manages prices through WhatsApp images and informal lists, and market prices may change monthly or more often.

**Source:** Scope Lock v3 --- SL-03; VoC v3 --- VOC-010, VOC-011, VOC-013.

**DAVID-02 --- Decide prices outside the lowest permitted level**

David needs to approve or reject a requested selling price below the minimum permitted price. The approved result must be returned to the salesperson who requested it.

This is needed because Macro Frozen wants salespeople to use current prices without being able to sell below the business's protected floor without David's decision.

**Source:** Scope Lock v3 --- SL-03, SL-11; VoC v3 --- VOC-013, VOC-043.

**DAVID-03 --- Decide customer credit exceptions**

David needs to approve or reject an order that fails the confirmed credit-control rule. The request must show the customer, order value, unpaid amount, payment-term problem and reason for the exception.

This is needed because Macro Frozen commonly applies a "pay the previous invoice before the next order" discipline, while still needing a controlled one-order exception in some cases.

**Source:** Scope Lock v3 --- SL-04, SL-10; VoC v3 --- VOC-016, VOC-017, VOC-061.

**DAVID-04 --- Receive customers with no salesperson assignment**

When a SQL customer has no active salesperson assignment, David needs to become the default owner in MAIA.

This prevents older or unassigned customers from disappearing from the operating workflow.

**Source:** Scope Lock v3 --- SL-08; VoC v3 --- VOC-032.

**What this person must not be allowed to do**

**DAVID-05 --- Do not treat every notification as David's responsibility**

MAIA must send David only the events assigned to him in the approved notification list. Routine warehouse and finance handoffs must go to Lai and Grace instead of being copied to David by default.

This is needed because the purpose of the implementation is to stop David from having to coordinate every ordinary handoff personally.

**Source:** Scope Lock v3 --- SL-09 to SL-12; VoC v3 --- VOC-061 to VOC-063 and Phase 5 inference on David's coordination bottleneck.

**What is still unclear**

**DAVID-06 --- Final credit authority**

The Scope Lock states that David is the sole final credit approver, while the open credit-control decision asks whether Apple may also override.

**Decision needed:** Is David the only person who can approve a credit exception, or may Apple also approve one?\
**Why it matters:** The credit approval role and notification recipient cannot be finalised while both positions remain in the superseding Scope Lock.\
**Source:** Scope Lock v3 --- SL-10 and NS-20.

**Suggestions for Product to consider**

**DAVID-07 --- Planned-absence approval cover**

Define a temporary approval-delegation process for periods when David is unavailable, with a start date, end date and named substitute.

This reduces the risk that Sales Orders remain blocked when the sole final approver is absent.

**This is a suggestion, not a confirmed client requirement.**

**CJ Tan --- Sales Manager and price approver**

**CJ Tan --- Sales Manager and price approver**

**Role in the client's business**

CJ is an active salesperson and Sales Manager. He manages his own customers and is the approved decision-maker for the middle selling-price tier.

**Known users**

CJ Tan.

One named account is required.

CJ is mainly expected to work from a mobile device.

**Documents and information used**

Customers assigned to CJ.

Draft and submitted Sales Orders.

Normal customer price and minimum price.

Price approval request.

Customer credit settings, subject to the unresolved CJ/Apple responsibility split.

**What this person needs to do**

**CJ-01 --- Submit orders for his assigned customers**

CJ needs to forward a customer order to the single MAIA WhatsApp number, review the draft Sales Order, correct it and submit it himself.

This removes the superseded office-administrator relay step and allows the salesperson who understands the customer's shorthand to confirm the order.

**Source:** Scope Lock v3 --- AS-04, SL-05, SL-06; VoC v3 --- VOC-002, VOC-019.

**CJ-02 --- Approve the middle price tier**

CJ needs to approve or reject a price below the customer's normal or default price when the requested price is still at or above the minimum price.

This allows routine commercial reductions to be decided without sending every case to David, while David retains control of prices below the protected minimum.

**Source:** Scope Lock v3 --- SL-03.

**What this person must not be allowed to do**

**CJ-03 --- Do not approve prices below the minimum**

CJ must not approve a price below the configured minimum price. Those requests must go to David.

**Source:** Scope Lock v3 --- SL-03, SL-11.

**CJ-04 --- Do not approve his own credit exception**

CJ must not approve a Sales Order that fails the customer credit check. The final credit decision belongs to David unless the open authority decision changes this.

**Source:** Scope Lock v3 --- SL-10; VoC v3 --- VOC-017.

**CJ-05 --- Do not view other salespeople's customers**

CJ must not see customer, price or unpaid-balance information assigned to Ben or Queenie merely because he is Sales Manager.

This preserves Macro Frozen's confirmed salesperson-customer separation.

**Source:** Scope Lock v3 --- SL-05; VoC v3 --- VOC-019, VOC-057.

**What is still unclear**

**CJ-06 --- Credit-limit responsibility at customer setup**

One statement assigns credit-limit setup at customer creation to CJ, while another statement assigns customer credit limits and terms to Apple.

**Decision needed:** Does CJ set the initial credit limit when a customer is created?\
**Why it matters:** Product cannot set Create and Write permissions for customer credit fields without knowing CJ's exact responsibility.\
**Source:** Scope Lock v3 --- SL-04; VoC v3 --- VOC-031.

**Salespeople --- CJ, Ben and Queenie**

**Salespeople --- CJ, Ben and Queenie**

**Role in the client's business**

Salespeople receive or interpret customer orders, confirm customer-specific product wording, review the draft Sales Order and submit it for the next step.

**Known users**

CJ Tan.

Ben.

Queenie.

Three active salespeople are confirmed.

**Documents and information used**

Their assigned customers.

Customer contact and delivery information.

Current selling prices and customer-specific prices.

Customer unpaid amount and payment-term status.

Draft Sales Order and submitted Sales Order PDF.

Approval decision and reason.

**What this person needs to do**

**SALES-01 --- Create a draft Sales Order from a customer message**

A salesperson needs to forward a customer WhatsApp order to the single MAIA number so that MAIA prepares a draft Sales Order. The salesperson must review the customer, product, quantity, selling price and remarks before submission.

This is needed because customer orders may use informal product names and the salesperson often knows what the customer actually means.

**Source:** Scope Lock v3 --- AS-04, SL-06; VoC v3 --- VOC-001, VOC-002.

**SALES-02 --- Correct and submit the draft order**

A salesperson needs to correct the draft Sales Order and submit it without waiting for an office administrator.

**Source:** Scope Lock v3 --- AS-04.

**SALES-03 --- See only the current price information needed for the order**

A salesperson needs to see the latest normal price, customer-specific price and the permitted approval route for the assigned customer.

This prevents salespeople from relying on stale WhatsApp price images while preserving price control.

**Source:** Scope Lock v3 --- SL-03, SL-05; VoC v3 --- VOC-010, VOC-013, VOC-043.

**SALES-04 --- See the credit outcome before continuing**

When an order fails a credit check, the salesperson needs to see who must decide the exception and later receive the approval or rejection result.

Silence on a blocked order makes the client believe the system has failed rather than waiting for a decision.

**Source:** Scope Lock v3 --- SL-10; VoC v3 --- VOC-061.

**What this person must not be allowed to do**

**SALES-05 --- No cross-salesperson customer access**

A salesperson must not view or edit a customer assigned to another salesperson, including that customer's price and unpaid amount.

**Source:** Scope Lock v3 --- SL-05; VoC v3 --- VOC-019.

**SALES-06 --- No final approval of restricted prices**

A salesperson must not approve their own below-normal or below-minimum selling price.

**Source:** Scope Lock v3 --- SL-03, SL-11.

**SALES-07 --- No final approval of failed credit checks**

A salesperson must not approve their own customer credit exception.

**Source:** Scope Lock v3 --- SL-04, SL-10.

**What is still unclear**

**SALES-08 --- Buying-cost visibility**

The VoC records a concern that certain roles, apparently Sales, must not see buying-cost information, but the Scope Lock only explicitly hides the Purchasing tab for warehouse users.

**Decision needed:** Must all salespeople be prevented from viewing buying cost and purchasing information?\
**Why it matters:** The Sales role cannot be finalised until the commercially sensitive fields are identified.\
**Source:** VoC v3 --- VOC-045; Scope Lock v3 --- SL-04 warehouse visibility note and AS-09.

**Grace --- Finance Manager**

**Grace --- Finance Manager**

**Role in the client's business**

Grace is the main Finance user for payment review and the operational gate between warehouse completion, Delivery Note creation and Invoice creation.

**Known users**

Grace.

One named account is required.

No confirmed backup Finance user exists for Grace's duties.

**Documents and information used**

Bank statement and payment slip.

Customer, Invoice and unpaid amount.

Payment match and payment entry.

Draft Delivery Note and Delivery Note PDF.

Pick List completion information.

Sales Order, Delivery Note and Invoice.

Credit Note information, subject to scope approval and testing.

**What this person needs to do**

**GRACE-01 --- Review suggested payment matches**

Grace needs to review MAIA's suggested customer and Invoice match for each payment, correct unclear matches and confirm the payment before any payment status is updated.

This is needed because payer names and payment references often do not match the customer or Invoice exactly, and Macro Frozen does not want uncertain matches posted automatically.

**Source:** Scope Lock v3 --- SL-02; VoC v3 --- VOC-007, VOC-033, VOC-048, VOC-049.

**GRACE-02 --- Request Delivery Note and Invoice generation separately**

After the order is ready, Grace needs to request the Delivery Note and Invoice as separate actions. Submitting an amended Sales Order must not automatically create either document.

This preserves human control over the final quantity and billing handoff.

**Source:** Scope Lock v3 --- SL-07.

**GRACE-03 --- Review the generated documents before sending**

Grace needs to review the Delivery Note and Invoice PDF before it is sent to the customer or recorded in SQL.

**Source:** Scope Lock v3 --- SL-07; VoC v3 --- VOC-027.

**GRACE-04 --- Receive every draft Delivery Note created by Lai**

Grace needs to receive each draft Delivery Note with its PDF when Lai creates it. These notifications must not be combined into a digest.

This is needed because missing a single warehouse-to-finance handoff delays document creation and causes Grace to chase the order manually.

**Source:** Scope Lock v3 --- SL-12; VoC v3 --- VOC-062.

**What this person must not be allowed to do**

**GRACE-05 --- Do not post an uncertain payment automatically**

Grace must remain the person who confirms or corrects an uncertain payment match. MAIA must not post a mismatched payer or reference without her confirmation.

**Source:** Scope Lock v3 --- SL-02; VoC v3 --- VOC-007, VOC-033.

**What is still unclear**

**GRACE-06 --- Pick List notification trigger**

The Scope Lock describes Grace being notified when a Pick List is "submitted/confirmed" and also says the notification is "on demand." These descriptions do not define one exact trigger.

**Decision needed:** Is Grace notified when the Pick List is submitted, when it is confirmed, or only when Lai requests the notification?\
**Why it matters:** The notification cannot be configured or tested with more than one possible trigger.\
**Source:** Scope Lock v3 --- SL-12.

**GRACE-07 --- Credit Note authority and workflow**

Credit Note support, including SCN and CCN behaviour, is not locked and the connector has not completed the required SQL tests.

**Decision needed:** What Credit Note actions will Grace perform in MAIA after the feature is approved?\
**Why it matters:** Create, Submit and stock-effect permissions cannot be finalised before the Credit Note workflow is accepted.\
**Source:** Scope Lock v3 --- AS-03, NS-18; VoC v3 --- VOC-021, VOC-074.

**Apple --- Finance user for customer credit settings**

**Apple --- Finance user for customer credit settings**

**Role in the client's business**

Apple's role is Finance-specific. She is associated with customer credit limits, credit terms and other finance-related customer settings, but she is not intended to have the same broad authority as David.

**Known users**

Apple / Applle.

One named account is expected.

The exact division of work with CJ is unresolved.

**Documents and information used**

Customer record.

Credit limit.

Payment terms.

Credit-control settings.

**What this person needs to do**

**APPLE-01 --- Maintain confirmed finance-related customer settings**

Apple needs to maintain the customer credit settings that are assigned to Finance after the CJ/Apple responsibility split is confirmed.

**Source:** Scope Lock v3 --- SL-04.

**What this person must not be allowed to do**

**APPLE-02 --- No blanket administrator access**

Apple must not receive general administrator authority merely because she maintains finance settings. Her access must be limited to the confirmed Finance fields and actions.

**Source:** Scope Lock v3 --- SL-04 role correction.

**What is still unclear**

**APPLE-03 --- Credit-limit maintenance boundary**

The current Scope Lock both associates CJ with credit-limit setup and associates Apple with credit limits and payment terms.

**Decision needed:** Which customer credit fields may Apple create or edit, and at what stage?\
**Why it matters:** Finance and Sales permissions would otherwise overlap or leave a field with no owner.\
**Source:** Scope Lock v3 --- SL-04; VoC v3 --- VOC-031.

**APPLE-04 --- Credit-exception approval**

The locked approval flow names David as final approver, but the open decision asks whether Apple may also override.

**Decision needed:** May Apple approve a failed credit check?\
**Why it matters:** This changes the approval recipient, role permissions and audit record.\
**Source:** Scope Lock v3 --- SL-10, NS-20.

**Lai --- Warehouse and Logistics Manager**

**Lai --- Warehouse and Logistics Manager**

**Role in the client's business**

Lai manages the warehouse and logistics handoff. He must know which submitted orders require warehouse action and must pass the completed delivery information to Grace.

**Known users**

Lai / Lim Jun Yan.

One named Warehouse Manager account is expected.

The access model for other warehouse staff is not confirmed.

No confirmed backup exists.

**Documents and information used**

Submitted Sales Order PDF.

Customer delivery address and requested delivery information.

Pick List and actual picked quantity, subject to approval of the future-state workflow.

Draft Delivery Note and Delivery Note PDF.

**What this person needs to do**

**LAI-01 --- Receive every submitted Sales Order**

Lai needs to receive the Sales Order PDF every time a salesperson submits an order. The notification must be sent for every occurrence rather than in a digest.

This is needed because missed orders have already caused operational disputes and the client explicitly wants Lai notified each time.

**Source:** Scope Lock v3 --- SL-12; VoC v3 --- VOC-040, VOC-063.

**LAI-02 --- Create the draft Delivery Note for Finance handoff**

Lai needs to create the draft Delivery Note when the warehouse step is ready, causing the confirmed notification to Grace.

**Evidence note:** The ability is derived from the locked notification flow, which states that the draft Delivery Note is created by Lai. The detailed Pick List and final-weight workflow remains agreed in principle rather than locked.

**Source:** Scope Lock v3 --- SL-12 and AS-01.

**What this person must not be allowed to do**

**LAI-03 --- Hide Purchasing and buying-cost information**

Lai and any Warehouse role must not see the Purchasing tab or buying-cost information that is not required for picking and delivery.

**Source:** Scope Lock v3 --- SL-04 warehouse visibility note; VoC v3 --- VOC-045.

**What is still unclear**

**LAI-04 --- Warehouse account model**

It is not confirmed whether warehouse staff will use individual accounts or one shared device/account.

**Decision needed:** Will Lai and the pickers use individual named accounts or one shared warehouse account/device?\
**Why it matters:** Accountability, access, activity history and training depend on this choice.\
**Source:** Scope Lock v3 --- NS-11; VoC v3 --- VOC-041.

**LAI-05 --- Actual-quantity and Pick List responsibility**

The detailed flow in which the warehouse records actual quantities and MAIA amends the Sales Order is agreed in principle but not locked.

**Decision needed:** Is Lai responsible for uploading and confirming the final Pick List quantities in MAIA?\
**Why it matters:** The final-weight workflow cannot be configured until the accountable person is confirmed.\
**Source:** Scope Lock v3 --- AS-01; VoC v3 --- VOC-005, VOC-047.

**Suggestions for Product to consider**

**LAI-06 --- Preserve picker and checker accountability**

Where the final Pick List workflow is approved, record the named picker and checker separately rather than only recording Lai as the uploader.

This addresses the client's actual warehouse concern: proving who picked and who checked when the physical quantity is wrong.

**This is a suggestion, not a confirmed client requirement.**

**People not yet confirmed as MAIA users**

**Krystle:** Operations or administration coordinator. She is a project and UAT contact, but no client-specific operational permission has been confirmed.

**Sean:** Operations or IT administration contact. No production workflow permission has been confirmed.

**Warehouse pickers:** Their direct system access is unclear; the current process is heavily paper-based.

**Delivery driver / "Uncle":** A dedicated Driver role is agreed in principle only and is listed under SCOPE-11.

**CK:** A third-party driver and explicitly excluded from sales-territory assignment.

**External accounting consultant:** Performs final bank reconciliation outside MAIA and currently does not require a MAIA account.

**Macro Frozen's end customers:** MAIA is an internal operations tool in the current scope, not a customer-facing ordering application.

**Section 4 --- Notifications and Reminders**

A notification is sent because an event occurred and another person needs to know or take action. A message shown to a user because their current action is blocked belongs under Warnings and Blocking Rules.

**Approved notification list and suppression rule**

**NOTIF-01 --- Send only approved Macro Frozen notifications**

**When it is sent**

This rule applies whenever MAIA considers sending a notification for Macro Frozen.

**Who receives it**

Only the named person or role assigned to that approved event.

**What they need to receive**

Only the information required for the approved action.

No unrelated default MAIA notification.

**Why they need it**

Macro Frozen wants critical handoffs to be visible but has also experienced unwanted default notifications. A precise approved list is needed so important events are not silent and unrequested events do not create noise.

**What they do next**

The recipient completes the stated approval or handoff action.

**Source**

Scope Lock v3 --- SL-09; VoC v3 --- VOC-037, VOC-061 to VOC-063.

**Credit approval notifications**

**NOTIF-02 --- Credit exception request to David**

**When it is sent**

After a salesperson assigns a Sales Order that has failed the confirmed credit-control rule to the credit controller.

**Who receives it**

David, subject to the unresolved question of whether Apple may also approve.

**What they need to receive**

Customer name.

Salesperson.

Sales Order reference and value.

Customer unpaid amount.

Payment-term failure or credit-limit failure.

Reason entered for the exception.

Action to approve or reject.

**Why they need it**

The order cannot continue until Macro Frozen decides whether to accept the additional customer-payment risk.

**What they do next**

David approves or rejects the exception.

**What is still unclear**

Whether the credit check gives a warning or a hard stop, the tolerance period, the calculation basis and whether Apple may also approve.

**Decision needed:** Complete DECISION-01 to DECISION-04.

**Source**

Scope Lock v3 --- SL-04, SL-10, NS-20; VoC v3 --- VOC-016, VOC-017, VOC-061.

**NOTIF-03 --- Credit decision returned to the salesperson**

**When it is sent**

Immediately after the credit approver approves or rejects the exception.

**Who receives it**

The salesperson who submitted the Sales Order.

**What they need to receive**

Sales Order reference.

Approval or rejection result.

Approver name.

Decision reason or condition where recorded.

Next permitted action.

**Why they need it**

The salesperson must know whether to continue the order, correct it or contact the customer. A silent decision leaves the order appearing stuck.

**What they do next**

Continue the order if approved, or revise/stop it if rejected.

**Source**

Scope Lock v3 --- SL-10; VoC v3 --- VOC-061.

**Price approval notifications**

**NOTIF-04 --- Middle-tier price request to CJ**

**When it is sent**

When a salesperson requests a price below the customer's normal or default price but still at or above the minimum price.

**Who receives it**

CJ.

**What they need to receive**

Customer and salesperson.

Item.

Normal or default price.

Requested price.

Minimum price.

Sales Order or Quotation reference.

Reason for the reduction.

Action to approve or reject.

**Why they need it**

CJ handles routine lower-price decisions so they do not all wait for David, while the minimum-price boundary remains protected.

**What they do next**

Approve or reject the price request.

**Source**

Scope Lock v3 --- SL-03.

**NOTIF-05 --- Price outside the protected range sent to David**

**When it is sent**

When a requested price is below the configured minimum or above the configured maximum and the salesperson chooses to request approval.

**Who receives it**

David.

**What they need to receive**

Customer and salesperson.

Item.

Normal or customer-specific price.

Requested price.

Minimum and maximum price.

Document reference.

Reason for the exception.

Action to approve or reject.

**Why they need it**

Prices outside the protected range create a higher commercial risk and must remain under David's control.

**What they do next**

Approve or reject the price exception.

**What is still unclear**

The exact reset behaviour for an above-maximum price is not stated clearly.

**Decision needed:** Complete DECISION-06.

**Source**

Scope Lock v3 --- SL-11; VoC v3 --- VOC-013, VOC-043.

**NOTIF-06 --- Price decision returned to the salesperson**

**When it is sent**

Immediately after CJ or David approves or rejects a price request.

**Who receives it**

The salesperson who requested the price.

**What they need to receive**

Document reference.

Item and approved price.

Approval or rejection result.

Approver name.

Next permitted action.

**Why they need it**

The salesperson must know which price may be used before completing the customer order.

**What they do next**

Continue with the approved price or revise the order.

**Source**

Scope Lock v3 --- SL-11.

**Order, warehouse and finance handoff notifications**

**NOTIF-07 --- Every submitted Sales Order sent to Lai**

**When it is sent**

Every time a salesperson submits a Sales Order.

**Who receives it**

Lai.

**What they need to receive**

Sales Order PDF.

Sales Order reference.

Customer.

Requested delivery information.

Order remarks needed by warehouse.

**Why they need it**

Lai must include every submitted order in warehouse planning. The client explicitly wants every event sent rather than a digest because missed orders have occurred.

**What they do next**

Begin the warehouse preparation process.

**Source**

Scope Lock v3 --- SL-12; VoC v3 --- VOC-040, VOC-063.

**NOTIF-08 --- Every draft Delivery Note sent to Grace**

**When it is sent**

Every time Lai creates a draft Delivery Note.

**Who receives it**

Grace.

**What they need to receive**

Delivery Note PDF.

Delivery Note reference.

Related Sales Order.

Customer.

Delivery quantity and status information available at that point.

**Why they need it**

Grace must complete the finance and Invoice handoff. The client explicitly requested every event and rejected batching for this flow.

**What they do next**

Review the Delivery Note and continue the document process.

**Source**

Scope Lock v3 --- SL-12; VoC v3 --- VOC-062.

**Notifications not yet configurable**

**NOTIF-09 --- Pick List event to Grace**

**When it is sent**

Not confirmed. The source alternates between Pick List submission, confirmation and an on-demand notification.

**Who receives it**

Grace.

**What they need to receive**

Pick List reference.

Related Sales Order.

Actual picked quantities.

Any shortage or discrepancy.

**Why they need it**

Grace needs the completed warehouse information before final delivery and billing documents are prepared.

**What they do next**

Continue or hold the Delivery Note and Invoice process.

**What is still unclear**

**Decision needed:** Complete DECISION-08.

**Source**

Scope Lock v3 --- SL-12; VoC v3 --- VOC-039, VOC-047.

**NOTIF-10 --- Near-expiry and slow-moving-stock alert**

**When it is sent**

Not confirmed. The stock-age or expiry threshold and frequency have not been decided.

**Who receives it**

Not confirmed. David is a likely business decision-maker, but the Scope Lock does not confirm the recipient and separately asks whether Sales should receive it.

**What they need to receive**

Item.

Current stock quantity.

Age or expiry information.

The threshold that triggered the alert.

Suggested next business action is not confirmed.

**Why they need it**

Macro Frozen wants to act before frozen stock becomes difficult to sell or expires, rather than relying on David to print and inspect aging reports manually.

**What they do next**

Not confirmed.

**What is still unclear**

**Decision needed:** Complete DECISION-11 to DECISION-14.

**Source**

Scope Lock v3 --- NS-03, NS-09; VoC v3 --- VOC-022.

**NOTIF-11 --- Daily Pick List digest**

**When it is sent**

A daily Pick List digest is named in the approved notification architecture, but its time and exact purpose are not stated.

**Who receives it**

Not confirmed.

**What they need to receive**

Not confirmed.

**Why they need it**

The client's reason for this specific digest was not clearly stated. It may be intended to show pending warehouse work, but that is an inference and must not be treated as confirmed.

**What they do next**

Not confirmed.

**What is still unclear**

**Decision needed:** Complete DECISION-17 and DECISION-18.

**Source**

Scope Lock v3 --- SL-09.

**NOTIF-12 --- Selling-price update reminder**

**When it is sent**

A selling-price reminder is named in the approved notification architecture, but no schedule is confirmed.

**Who receives it**

Not confirmed.

**What they need to receive**

The price-update task or affected price list.

The date of the last update, if this is the intended trigger.

**Why they need it**

Prices may change with the market and currently depend on David's manual process, but the exact reason and schedule for this reminder were not separately confirmed.

**What they do next**

Review or upload the current selling prices.

**What is still unclear**

**Decision needed:** Complete DECISION-19 and DECISION-20.

**Source**

Scope Lock v3 --- SL-09; VoC v3 --- VOC-010, VOC-011.

**Section 5 --- Warnings and Blocking Rules**

**Credit and payment-term controls**

**VALID-01 --- Credit amount and payment-term check**

**What the user is trying to do**

A salesperson is trying to submit a Sales Order or a Delivery Note for a customer.

**When MAIA must intervene**

When either of these conditions fails:

The customer's unpaid amount exceeds the permitted credit amount; or

The customer has exceeded the permitted payment terms.

The check is performed at Sales Order and Delivery Note stages, not at Invoice stage.

**What MAIA must do**

The exact action is not confirmed because the Scope Lock contains both a locked blocking description and an open warn-versus-hard-block decision.

**What MAIA must explain**

Which credit condition failed.

The customer's relevant unpaid amount or overdue status.

Who must decide the exception.

How the salesperson assigns the case for approval.

**What happens next**

The case follows NOTIF-02 and NOTIF-03 after the enforcement decisions are completed.

**Why this rule is needed**

Macro Frozen often expects a customer to pay the previous Invoice before placing the next order, but its SQL payment update may lag the real payment by about one week. The rule must protect cash collection without making most valid orders appear broken.

**What is still unclear**

Complete DECISION-01 to DECISION-04.

**Source**

Scope Lock v3 --- SL-04, SL-10, NS-20; VoC v3 --- VOC-016, VOC-017, VOC-061.

**Selling-price controls**

**VALID-02 --- Lower-than-normal price requires CJ approval**

**What the user is trying to do**

A salesperson is trying to use a price below the customer's normal or default price on a Sales Order or other approved price-sensitive document.

**When MAIA must intervene**

When the requested price is lower than the customer's normal or default price but is still at or above the minimum price.

**What MAIA must do**

Stop the price from being treated as approved and request CJ's decision.

**What MAIA must explain**

The normal or default price.

The requested price.

The minimum price.

That CJ must approve or reject it.

The next action available to the salesperson.

**What happens next**

The request follows NOTIF-04 and NOTIF-06.

**Why this rule is needed**

Macro Frozen wants controlled flexibility for routine price reductions without allowing each salesperson to set any price independently.

**Source**

Scope Lock v3 --- SL-03.

**VALID-03 --- Below-minimum price resets and requires David**

**What the user is trying to do**

A salesperson is trying to use a price below the configured minimum on a Quotation, Sales Order or Invoice.

**When MAIA must intervene**

When the requested price is below the minimum permitted price.

**What MAIA must do**

Reset the price to the minimum, show a warning and offer the action to request David's approval.

**What MAIA must explain**

The requested price is below the minimum.

The permitted minimum price.

David is the approver.

The salesperson may use the minimum price or request an exception.

**What happens next**

If approval is requested, the case follows NOTIF-05 and NOTIF-06.

**Why this rule is needed**

Macro Frozen needs a price floor because prices are not reliably enforced in its current process and market changes create a risk of salespeople using stale or loss-making prices.

**Source**

Scope Lock v3 --- SL-03, SL-11; VoC v3 --- VOC-010, VOC-013, VOC-043.

**VALID-04 --- Above-maximum price control**

**What the user is trying to do**

A salesperson is trying to use a price above the configured maximum on a Quotation, Sales Order or Invoice.

**When MAIA must intervene**

When the requested price is above the configured maximum.

**What MAIA must do**

The Scope Lock confirms that the maximum-price case is controlled and routed to David, but it does not state a single clear reset value for this case.

**What MAIA must explain**

The requested price is above the permitted maximum.

The maximum price.

David must decide the exception.

The salesperson's next available action.

**What happens next**

The case follows NOTIF-05 and NOTIF-06 after DECISION-06 is completed.

**Why this rule is needed**

The client's reason for a maximum-price control was not clearly stated.

**What is still unclear**

Complete DECISION-06.

**Source**

Scope Lock v3 --- SL-11.

**Customer and information visibility**

**VALID-05 --- Salesperson customer isolation**

**What the user is trying to do**

A salesperson is trying to search for, open or edit a customer assigned to another salesperson.

**When MAIA must intervene**

When the customer's SQL Agent assignment does not match the logged-in salesperson.

**What MAIA must do**

Stop access to the customer and the customer's price and unpaid-balance information.

**What MAIA must explain**

The customer is assigned to another salesperson.

The salesperson cannot view or change that customer.

Who can correct the customer assignment if it is wrong is not yet documented.

**What happens next**

The salesperson contacts the person responsible for customer-agent assignments.

**Why this rule is needed**

Macro Frozen explicitly requires salespeople to manage only their own customers.

**Source**

Scope Lock v3 --- SL-05, SL-08; VoC v3 --- VOC-019, VOC-032, VOC-057.

**VALID-06 --- Warehouse Purchasing and cost information hidden**

**What the user is trying to do**

Lai or another Warehouse user is opening an item or related record.

**When MAIA must intervene**

When the Warehouse role attempts to access the Purchasing tab or buying-cost information.

**What MAIA must do**

Hide the Purchasing tab and prevent access to buying-cost information.

**What MAIA must explain**

No customer-facing error message is required when the tab is hidden. If access is attempted through a direct link, MAIA must state that the Warehouse role does not have permission.

**What happens next**

The Warehouse user continues with the selling, quantity and delivery information needed for the warehouse task.

**Why this rule is needed**

Buying and cost information is commercially sensitive and is not required for picking and delivery work.

**Source**

Scope Lock v3 --- SL-04 warehouse visibility note; VoC v3 --- VOC-045.

**SQL document integrity**

**VALID-07 --- Prevent document states SQL cannot accept**

**What the user is trying to do**

Grace or another permitted user is trying to submit a Delivery Note or Invoice to SQL.

**When MAIA must intervene**

When the document would break SQL's required document flow, including:

Creating a duplicate Invoice from the same source.

Creating an Invoice quantity greater than the related Delivery Note quantity.

Overriding a running document number that SQL controls.

**What MAIA must do**

Stop the submission and require correction.

**What MAIA must explain**

Which SQL document rule failed.

The conflicting source document and quantity or number.

What must be corrected before submission.

**What happens next**

The permitted user corrects the document or source relationship and submits again.

**Why this rule is needed**

Macro Frozen's accounting records must remain consistent with SQL, and the client explicitly warned that duplicate or mismatched document states would break the operational flow.

**Source**

Scope Lock v3 --- SL-01, SL-07; VoC v3 --- VOC-027.

**Payment matching controls**

**VALID-08 --- Hold uncertain payment matches for Finance review**

**What the user is trying to do**

Grace is trying to confirm a payment from a payment slip or bank statement.

**When MAIA must intervene**

When the payer name, payment reference, amount or Invoice relationship is not clear enough to identify one customer and Invoice confidently.

**What MAIA must do**

Do not update the payment. Show the possible matches and require Grace to choose or correct the customer and Invoice.

**What MAIA must explain**

Which payment detail is unclear.

The possible customer or Invoice matches.

That no payment will be posted until Finance confirms.

**What happens next**

Grace selects the correct customer and Invoice or records that the payment is not yet resolved.

**Why this rule is needed**

Customers may pay from another company's bank account, show a payment that was later cancelled, or provide a reference that does not match the Invoice.

**Source**

Scope Lock v3 --- SL-02; VoC v3 --- VOC-007, VOC-033, VOC-048, VOC-049.

**Section 6 --- Automatic Actions and Calculations**

Only automatic behaviour that requires a client-specific condition, value, mapping, sequence or outcome is included. Normal MAIA behaviour is excluded.

**SQL customer and item data**

**AUTO-01 --- Use SQL customer and item records**

**When it happens**

When an authorised person searches for a customer or item or creates an order document.

**Information MAIA uses**

SQL customer records.

SQL item records.

SQL Agent assignment.

Other SQL values only where the integration provides them.

**What MAIA does automatically**

MAIA uses the SQL-derived customer and item information instead of creating a separate competing master list.

**Expected result**

The user selects the same customer and item that Macro Frozen recognises in SQL.

**Why the client needs it**

SQL remains Macro Frozen's accounting and operational record. MAIA must sit on top of it rather than replace it.

**What is still unclear**

The exact fields that may be written back from MAIA are not fully documented for every record type.

**Source**

Scope Lock v3 --- SL-01.

**Customer ownership and default assignments**

**AUTO-02 --- Copy the SQL salesperson assignment**

**When it happens**

When a customer is loaded or refreshed from SQL.

**Information MAIA uses**

The customer's SQL Agent field or code.

Active salesperson mapping for CJ, Ben and Queenie.

**What MAIA does automatically**

MAIA assigns the customer to the matching salesperson.

**Expected result**

The customer appears only to the assigned salesperson and to any separately authorised manager or administrator.

**Why the client needs it**

Macro Frozen already uses the SQL Agent field to identify customer ownership and requires salespeople to remain separated.

**What is still unclear**

Who may correct an incorrect Agent assignment from MAIA is not confirmed.

**Source**

Scope Lock v3 --- SL-05, SL-08; VoC v3 --- VOC-032.

**AUTO-03 --- Assign unassigned customers to David**

**When it happens**

When a customer has no active SQL Agent assignment.

**Information MAIA uses**

Customer Agent field.

Active salesperson list.

**What MAIA does automatically**

MAIA assigns the customer to David.

**Expected result**

The customer remains visible and owned instead of becoming inaccessible to all salespeople.

**Why the client needs it**

Macro Frozen has legacy or unassigned customers and needs a clear fallback owner.

**Source**

Scope Lock v3 --- SL-08; VoC v3 --- VOC-032.

**Selling prices and payment terms**

**AUTO-04 --- Apply the latest Macro Frozen selling price**

**When it happens**

When MAIA prepares or updates a Sales Order or other approved price-sensitive document.

**Information MAIA uses**

Latest price uploaded to MAIA.

Customer-specific price where one exists.

Wholesale or retail price group.

Minimum and maximum price controls.

**What MAIA does automatically**

MAIA proposes the current applicable selling price and determines whether approval is required.

**Expected result**

The salesperson sees the current customer price rather than relying on an old WhatsApp image or memory.

**Why the client needs it**

Macro Frozen's prices change with the market and were not previously maintained in an enforceable system.

**What is still unclear**

The customers whose prices must be locked completely are not identified.

**Source**

Scope Lock v3 --- SL-03, SL-11; VoC v3 --- VOC-010 to VOC-013, VOC-044.

**AUTO-05 --- Update selling prices from the approved template**

**When it happens**

When David or an approved administrator uploads the price-update template.

**Information MAIA uses**

Item identifier.

Price group or customer-specific price.

New selling price.

Minimum or maximum values where included in the approved template.

**What MAIA does automatically**

MAIA updates the latest selling prices used for new order pricing.

**Expected result**

New Sales Orders use the newly uploaded price after successful validation.

**Why the client needs it**

Macro Frozen may change many item prices at once and needs a controlled alternative to manual WhatsApp price lists.

**What is still unclear**

Whether any user other than David may upload the template is not confirmed.

**Source**

Scope Lock v3 --- SL-03; VoC v3 --- VOC-010, VOC-011.

**AUTO-06 --- Apply the payment-term default sequence**

**When it happens**

When a new Sales Order is created.

**Information MAIA uses**

Customer default payment term.

Company default payment term.

**What MAIA does automatically**

MAIA applies the first available value in this order:

Customer default payment term.

Company default payment term.

Cash in advance.

Blank, when none of the above is configured.

**Expected result**

The Sales Order shows one predictable payment term without the salesperson inventing a value.

**Why the client needs it**

Macro Frozen's customer terms vary and a missing payment term caused live workflow difficulty.

**Source**

Scope Lock v3 --- SL-13; VoC v3 --- VOC-069.

**Approval routing**

**AUTO-07 --- Route price requests by price tier**

**When it happens**

When a salesperson enters a price that is not the normal approved price.

**Information MAIA uses**

Normal or customer-specific price.

Requested price.

Minimum price.

Maximum price where configured.

**What MAIA does automatically**

Normal approved price: no approval.

Below normal but at or above minimum: assign to CJ.

Below minimum: assign to David.

Above maximum: assign to David, with reset behaviour still to be confirmed.

**Expected result**

The request reaches the correct approver without the salesperson choosing an arbitrary person.

**Why the client needs it**

Macro Frozen wants routine reductions handled by CJ and higher-risk exceptions retained by David.

**Source**

Scope Lock v3 --- SL-03, SL-11.

**AUTO-08 --- Assign a credit exception to the credit approver**

**When it happens**

When a salesperson selects the action to assign a failed credit check for approval.

**Information MAIA uses**

Customer.

Salesperson.

Sales Order.

Failed credit condition.

Approved credit-role mapping.

**What MAIA does automatically**

MAIA creates the approval request and assigns it to David, subject to the open Apple override decision.

**Expected result**

The salesperson sees the named approver and the request appears for the approver.

**Why the client needs it**

A blocked order must not stop silently with no clear owner.

**What is still unclear**

The enforcement condition and final approver are covered by DECISION-01 to DECISION-04.

**Source**

Scope Lock v3 --- SL-10, NS-20; VoC v3 --- VOC-061.

**Documents and SQL updates**

**AUTO-09 --- Generate Delivery Note or Invoice only after Grace requests it**

**When it happens**

When Grace explicitly requests a Delivery Note or an Invoice from the confirmed order state.

**Information MAIA uses**

Confirmed order information.

Related Sales Order or Delivery Note.

SQL document-sequence rules.

**What MAIA does automatically**

MAIA prepares only the document Grace requested and its PDF. It does not automatically create a Delivery Note or Invoice merely because an amended Sales Order was submitted.

**Expected result**

Grace reviews the requested document before sending or submission.

**Why the client needs it**

The final quantity may differ from the original order, and Macro Frozen wants a human check before final delivery and billing documents are produced.

**What is still unclear**

The final-weight source remains part of SCOPE-01 rather than confirmed configuration.

**Source**

Scope Lock v3 --- SL-07; VoC v3 --- VOC-001, VOC-027.

**AUTO-10 --- Send confirmed documents and payments to SQL**

**When it happens**

After the permitted user confirms a Sales Order, Delivery Note, Invoice or Payment and the integration supports that record.

**Information MAIA uses**

Confirmed document or payment.

Related SQL customer, item and source-document references.

**What MAIA does automatically**

MAIA sends the confirmed record to SQL without replacing SQL as the main record system.

**Expected result**

The corresponding SQL record is created or updated and follows SQL's document rules.

**Why the client needs it**

The client wants to reduce duplicate manual entry while keeping the accounting records in SQL.

**What is still unclear**

The exact write-back coverage for every document type, particularly Credit Notes, is not fully accepted.

**Source**

Scope Lock v3 --- SL-01, SL-02, SL-07; VoC v3 --- VOC-027, VOC-028.

**Payment extraction and matching**

**AUTO-11 --- Extract payment details and suggest matches**

**When it happens**

When Grace uploads or forwards a payment slip or bank statement record.

**Information MAIA uses**

Payer name.

Payment date.

Amount.

Bank reference.

Customer and outstanding Invoice information.

**What MAIA does automatically**

MAIA extracts the payment details and suggests likely customer and Invoice matches.

**Expected result**

Clear matches are presented for confirmation and unclear matches are held for manual selection under VALID-08.

**Why the client needs it**

Payment references and payer names are inconsistent, and Finance currently spends time matching payments manually.

**What is still unclear**

The real payment-alias patterns and partial-payment examples have not been tested in the supplied evidence.

**Suggestions for Product to consider**

Test the matching rules against a sample of real Macro Frozen bank rows, payment slips and confirmed Invoice allocations before treating match accuracy as accepted.

**This is a suggestion, not a confirmed client requirement.**

**Source**

Scope Lock v3 --- SL-02; VoC v3 --- VOC-007 to VOC-009, VOC-048, VOC-049.

**Section 7 --- Decisions Required Before Configuration**

**Credit-control decisions**

**DECISION-01 --- Warning or hard stop for failed credit checks**

**Decision needed**

When a customer fails the credit check, does MAIA warn the salesperson and allow assignment, or completely stop the Sales Order and Delivery Note until approval?

**Why it must be answered**

VALID-01, NOTIF-02 and AUTO-08 cannot be configured or tested with two different enforcement modes.

**Who should decide**

David, with Finance input.

**Affected requirements**

VALID-01

NOTIF-02

AUTO-08

**DECISION-02 --- Overdue tolerance period**

**Decision needed**

How many days after the payment due date may an order continue before the credit rule applies?

**Why it must be answered**

SQL payment knock-off may lag the real payment by about one week, so a zero-day rule may stop valid orders.

**Who should decide**

David and Grace.

**Affected requirements**

VALID-01

NOTIF-02

AUTO-08

**DECISION-03 --- Credit calculation basis**

**Decision needed**

Does the credit rule compare the customer's unpaid amount alone, or the unpaid amount plus the new order value?

**Why it must be answered**

The system cannot determine whether the customer has exceeded the permitted amount without one calculation rule.

**Who should decide**

David and Finance.

**Affected requirements**

VALID-01

NOTIF-02

AUTO-08

**DECISION-04 --- Credit exception approver**

**Decision needed**

Is David the only final approver, or may Apple also approve a credit exception?

**Why it must be answered**

The approval role, recipient, permission and activity record depend on this answer.

**Who should decide**

David.

**Affected requirements**

DAVID-03

DAVID-06

APPLE-04

NOTIF-02

AUTO-08

**DECISION-05 --- CJ and Apple credit-setting responsibilities**

**Decision needed**

Does CJ set the initial customer credit limit while Apple maintains it afterward, or does one person own the entire credit-limit process?

**Why it must be answered**

The current Scope Lock assigns overlapping responsibility and Product cannot safely grant both roles broad write access without a confirmed division.

**Who should decide**

David, CJ and Apple.

**Affected requirements**

CJ-06

APPLE-01

APPLE-03

**Pricing decisions**

**DECISION-06 --- Above-maximum price behaviour**

**Decision needed**

When a price is above the maximum, what value should MAIA restore before David decides the exception?

**Why it must be answered**

The Scope Lock confirms that maximum-price cases are controlled but does not define one unambiguous reset value.

**Who should decide**

David.

**Affected requirements**

NOTIF-05

VALID-04

AUTO-07

**DECISION-07 --- Customers with fully locked prices**

**Decision needed**

Which customers must have their customer-specific price completely locked so Sales cannot request a different price?

**Why it must be answered**

SL-11 allows customer-specific prices to be locked entirely, but no customer list or rule is provided.

**Who should decide**

David and CJ.

**Affected requirements**

AUTO-04

VALID-02

VALID-03

**Finance and warehouse handoff decisions**

**DECISION-08 --- Pick List notification trigger for Grace**

**Decision needed**

Should Grace receive the Pick List notification when the Pick List is submitted, when it is confirmed, or only when Lai requests it?

**Why it must be answered**

NOTIF-09 cannot be configured with multiple possible triggers.

**Who should decide**

Grace and Lai.

**Affected requirements**

GRACE-06

NOTIF-09

**DECISION-09 --- Lai's backup**

**Decision needed**

Who performs Lai's order, Pick List and Delivery Note duties when Lai is absent?

**Why it must be answered**

Orders may stop at the warehouse handoff if only Lai can perform the required actions.

**Who should decide**

David and Lai.

**Affected requirements**

LAI-01

LAI-02

NOTIF-07

NOTIF-08

**DECISION-10 --- Finance backup**

**Decision needed**

Who reviews payment matches and completes the Delivery Note and Invoice handoff when Grace is absent?

**Why it must be answered**

Payments and final documents may remain pending when the only confirmed Finance operator is unavailable.

**Who should decide**

David and Grace.

**Affected requirements**

GRACE-01

GRACE-02

GRACE-04

VALID-08

AUTO-11

**Stock-aging notification decisions**

**DECISION-11 --- Stock-aging or expiry trigger**

**Decision needed**

What exact stock age, expiry window or slow-moving condition sends the alert?

**Why it must be answered**

NOTIF-10 cannot identify a triggering event without a threshold.

**Who should decide**

David.

**Affected requirements**

NOTIF-10

**DECISION-12 --- Stock-aging alert recipient**

**Decision needed**

Who receives the near-expiry and slow-moving-stock alert first?

**Why it must be answered**

The notification requires one confirmed owner who will decide whether to discount, promote or clear the stock.

**Who should decide**

David.

**Affected requirements**

NOTIF-10

**DECISION-13 --- Stock-aging alert frequency**

**Decision needed**

How often should MAIA check and send the near-expiry and slow-moving-stock alert?

**Why it must be answered**

The notification schedule cannot be configured without a cadence.

**Who should decide**

David.

**Affected requirements**

NOTIF-10

**DECISION-14 --- Sales inclusion in stock-aging alerts**

**Decision needed**

Should CJ, Ben and Queenie also receive the stock-aging alert?

**Why it must be answered**

The Scope Lock records this as an open recipient decision.

**Who should decide**

David.

**Affected requirements**

NOTIF-10

**User-access and backup decisions**

**DECISION-15 --- Warehouse login model**

**Decision needed**

Will warehouse staff use individual named accounts or one shared warehouse account/device?

**Why it must be answered**

The choice changes accountability, security, activity history and the ability to prove who picked and checked.

**Who should decide**

David and Lai.

**Affected requirements**

LAI-04

LAI-06

VALID-06

**DECISION-16 --- Sales buying-cost visibility**

**Decision needed**

Must all Sales users be prevented from viewing buying-cost and Purchasing information?

**Why it must be answered**

The VoC raises the concern, but the current Scope Lock only explicitly restricts Warehouse users.

**Who should decide**

David.

**Affected requirements**

SALES-08

**Other notification decisions**

**DECISION-17 --- Daily Pick List digest recipient**

**Decision needed**

Who receives the daily Pick List digest named in the approved notification list?

**Why it must be answered**

NOTIF-11 has no confirmed recipient.

**Who should decide**

David and Lai.

**Affected requirements**

NOTIF-11

**DECISION-18 --- Daily Pick List digest content and time**

**Decision needed**

What pending Pick List information must the digest contain, and at what time is it sent?

**Why it must be answered**

NOTIF-11 cannot be configured or tested without a defined output and schedule.

**Who should decide**

Lai and Grace.

**Affected requirements**

NOTIF-11

**DECISION-19 --- Selling-price reminder recipient**

**Decision needed**

Who receives the selling-price update reminder?

**Why it must be answered**

NOTIF-12 has no confirmed recipient.

**Who should decide**

David.

**Affected requirements**

NOTIF-12

**DECISION-20 --- Selling-price reminder schedule**

**Decision needed**

What event or schedule sends the selling-price update reminder?

**Why it must be answered**

Macro Frozen changes prices monthly or when the market changes, but no fixed reminder rule is confirmed.

**Who should decide**

David.

**Affected requirements**

NOTIF-12

**Section 8 --- Possible Scope Changes**

The items below were discussed but are not locked as current configuration requirements. They must not be treated as committed behaviour until the required approval, clarification or technical assessment is completed.

**Order, picking and warehouse changes**

**SCOPE-01 --- Fresh-weight and external Pick List workflow**

**What was discussed**

Create a draft Sales Order, generate or use a Pick List, record actual warehouse quantities, update the Sales Order with the confirmed quantity, and only then generate the Delivery Note and Invoice.

**Why it may be useful**

Frozen products may be sold by actual weight, and the final quantity often differs from the customer's initial order. The client also wants evidence of who picked and checked the goods.

**Why it is not yet included**

The item is agreed in principle rather than locked. Macro Frozen may continue using its own paper Pick List, the responsible user is not fully confirmed, and the warehouse access model is open.

**Decision needed**

Confirm the final Pick List source, responsible user, upload format, quantity-confirmation step and adoption approach.

**Source**

Scope Lock v3 --- AS-01, NS-10, NS-11; VoC v3 --- VOC-001, VOC-004, VOC-005, VOC-041, VOC-047.

**SCOPE-02 --- Picked-quantity breakdown and pieces as a unit**

**What was discussed**

Store and print a breakdown such as separate box or piece quantities and weights on the Pick List and Delivery Note, including support for "pieces" as an order unit.

**Why it may be useful**

Individual boxes or pieces do not all weigh the same. Macro Frozen needs a breakdown that can be shown to the customer as proof and used internally when picked and delivered quantities differ.

**Why it is not yet included**

The item is agreed in principle, depends on technical feasibility, and the customer-facing presentation has not been approved.

**Decision needed**

Approve a sample Pick List and Delivery Note layout and confirm technical feasibility before removing the current Excel breakdown.

**Source**

Scope Lock v3 --- AS-11; VoC v3 --- VOC-064 to VOC-066.

**SCOPE-03 --- SKU replacement during picking**

**What was discussed**

Allow the warehouse to replace an unavailable item during picking and carry the approved replacement through the Pick List, amended Sales Order, Delivery Note and Invoice.

**Why it may be useful**

The warehouse may discover that the ordered SKU is unavailable only during preparation.

**Why it is not yet included**

The approval route is not defined.

**Decision needed**

Decide whether Sales, CJ, David, Grace or the customer approves a replacement.

**Source**

Scope Lock v3 --- AS-10.

**SCOPE-04 --- Damage and batch-quality photo record**

**What was discussed**

Allow warehouse staff to record damaged, discoloured or questionable stock with a photo and batch reference.

**Why it may be useful**

The client wants evidence of damaged stock and a record that can support accountability.

**Why it is not yet included**

The VoC contains the request, but the latest Scope Lock has no approved scope item for it.

**Decision needed**

Decide whether this is handled through an existing issue record or separately scoped.

**Source**

VoC v3 --- VOC-023 and Scope Lock Alignment note.

**SCOPE-05 --- Customer search by address and contact-person database**

**What was discussed**

Search customers by billing or delivery area and maintain people as contacts separately from the legal company name, such as distinguishing two contacts with the same first name at different companies.

**Why it may be useful**

Sales remembers the person, while warehouse planning may depend on delivery area rather than the registered company name.

**Why it is not yet included**

Address search and a separate contact entity require more design and may be broader cross-client product work.

**Decision needed**

Decide whether this is a Macro Frozen commitment or a general product-roadmap item.

**Source**

Scope Lock v3 --- NS-17; VoC v3 --- VOC-072, VOC-073.

**Sales, catalogue and customer-information changes**

**SCOPE-06 --- Fixed-format product catalogue image**

**What was discussed**

Generate a customer-facing image catalogue using current product photos and prices, with wholesale and retail variants and manual review before forwarding.

**Why it may be useful**

Macro Frozen's customers prefer image-based information and may not open a long PDF.

**Why it is not yet included**

The item is agreed in principle but the template, fields, item count, image source and output format are not locked.

**Decision needed**

Approve one fixed template and define the permitted fields and review process.

**Source**

Scope Lock v3 --- AS-02; VoC v3 --- VOC-015, VOC-029.

**SCOPE-07 --- Customer information updates, notes and preferences**

**What was discussed**

Allow approved staff to maintain customer contact information, addresses, remarks and preferences, with an activity history.

**Why it may be useful**

Salespeople need current customer details and a record of important customer-specific instructions.

**Why it is not yet included**

The activity history is accepted, but which SQL or MAIA master-data fields may be edited is not confirmed.

**Decision needed**

Define the editable customer fields and the role allowed to edit each one.

**Source**

Scope Lock v3 --- AS-05.

**SCOPE-08 --- Backend dashboard and daily reminders**

**What was discussed**

Provide a backend view of orders, pending actions and per-salesperson activity, with reminders for agreed tasks.

**Why it may be useful**

Macro Frozen wants better visibility of work that has not moved to the next stage.

**Why it is not yet included**

The item is agreed in principle, and there is unresolved duplication between six Sunday reports and a planned per-salesperson dashboard.

**Decision needed**

Choose the report or dashboard path and define the intended users and information.

**Source**

Scope Lock v3 --- AS-06, NS-19; VoC v3 --- VOC-077.

**SCOPE-09 --- Quotation before order**

**What was discussed**

Allow a formal Quotation before the Sales Order for customers that request one.

**Why it may be useful**

Some larger customers request a quotation before confirming an order.

**Why it is not yet included**

The feature is agreed in principle, but Grace later stated that formal quotations are rarely used and David's current priority is not confirmed.

**Decision needed**

Confirm whether the limited real usage justifies including Quotation configuration now.

**Source**

Scope Lock v3 --- AS-07; VoC v3 --- VOC-014.

**SCOPE-10 --- Customer purchase-order upload and matching**

**What was discussed**

Allow a customer purchase order to be uploaded, interpreted and matched to the correct customer and items.

**Why it may be useful**

Three confirmed customers use formal purchase orders instead of ordinary WhatsApp order messages.

**Why it is not yet included**

The supported document formats, extraction method and match rules are not defined.

**Decision needed**

Collect real purchase-order samples and confirm the matching process.

**Source**

Scope Lock v3 --- AS-08, NS-12; VoC v3 --- VOC-035.

**SCOPE-11 --- Cost and buying-price tracking**

**What was discussed**

Track or bulk update buying cost separately from the selling-price process.

**Why it may be useful**

Buying cost changes independently from selling price and may be needed for commercial decisions.

**Why it is not yet included**

The template, authorised user and downstream use are undefined. Supplier and purchase-invoice data remain in SQL.

**Decision needed**

Confirm whether a separate cost template is required and who may use it.

**Source**

Scope Lock v3 --- AS-09, NS-13; VoC v3 --- VOC-036, VOC-045.

**Finance and delivery changes**

**SCOPE-12 --- Credit Note support and SCN/CCN SQL behaviour**

**What was discussed**

Create Credit Notes, including the separate SCN and CCN cases, and send the accepted result to SQL.

**Why it may be useful**

Macro Frozen needs Credit Notes for returns, corrections and the rare case that also changes stock.

**Why it is not yet included**

The feature is not locked, the SQL connector has not passed the required tests, and the client preference for Credit Note numbers to mirror Invoice numbers conflicts with system-controlled running numbers.

**Decision needed**

Complete SQL testing, decide the numbering rule and obtain business acceptance.

**Source**

Scope Lock v3 --- AS-03, NS-18; VoC v3 --- VOC-021, VOC-074.

**SCOPE-13 --- Dedicated finance workspace and accelerated bank reconciliation**

**What was discussed**

Add a dedicated finance workspace that reconciles confirmed payment entries against an imported bank statement and then sends the result to SQL.

**Why it may be useful**

Finance wants a clearer view of bank reconciliation and unpaid customer exposure.

**Why it is not yet included**

The baseline customer-payment matching flow is locked under SL-02, but the dedicated workspace and accelerated timeline are only agreed in principle and have no committed delivery date.

**Decision needed**

Confirm whether this is part of the current Macro Frozen commitment or later shared product work.

**Source**

Scope Lock v3 --- SL-02, AS-13; VoC v3 --- VOC-050, VOC-052.

**SCOPE-14 --- Delivery Driver role and mandatory proof of delivery**

**What was discussed**

Give a driver a MAIA account that can view and update a Delivery Note, require proof of delivery before marking it delivered, allow further proof to be added and prevent the driver from deleting proof.

**Why it may be useful**

Macro Frozen currently searches WhatsApp photos during delivery disputes and wants the proof tied to the correct Delivery Note.

**Why it is not yet included**

The item expands the user population, is agreed in principle only, and conflicts with an earlier design in which Accounts rather than the driver uploads the proof.

**Decision needed**

David must choose either Accounts upload or a dedicated Driver account before any build or user commitment.

**Source**

Scope Lock v3 --- AS-12, NS-07; VoC v3 --- VOC-024, VOC-075, VOC-076.

**Explicitly excluded future items**

**SCOPE-15 --- Supplier-payment reconciliation**

**What was discussed**

Reconcile supplier Invoices, goods-received records and supplier payments.

**Why it may be useful**

It could reduce manual supplier-payment checking.

**Why it is not yet included**

Supplier payment reconciliation is explicitly outside the current customer-payment scope.

**Decision needed**

Separate future commercial and process scoping.

**Source**

Scope Lock v3 --- Out-of-Scope: AP reconciliation.

**SCOPE-16 --- Merchant and QR settlement reconciliation**

**What was discussed**

Match customer QR payments against the combined merchant settlement shown in the bank statement.

**Why it may be useful**

The merchant may combine a full day of QR payments into one bank line.

**Why it is not yet included**

It is explicitly outside the current customer-Invoice payment matching scope.

**Decision needed**

Separate future finance scoping if the client wishes to automate merchant settlement.

**Source**

Scope Lock v3 --- Out-of-Scope: merchant/QR settlement; VoC v3 --- VOC-008.

**SCOPE-17 --- Full delivery route and trip management**

**What was discussed**

Plan delivery routes, trips and driver assignments through a dedicated logistics module.

**Why it may be useful**

Macro Frozen groups orders by delivery area and driver route.

**Why it is not yet included**

The client explicitly does not want a full route-planning module in the current scope; the proposed Driver role is intentionally narrower.

**Decision needed**

Separate future logistics scoping if the client later requires route planning.

**Source**

Scope Lock v3 --- Out-of-Scope delivery trip/route management; VoC v3 --- VOC-038, VOC-076.

**SCOPE-18 --- Full warehouse management, barcode or QR scanning**

**What was discussed**

Use a full warehouse-management system, barcode or QR scanning, labels and related integration.

**Why it may be useful**

It could improve physical stock traceability and reduce manual picking errors.

**Why it is not yet included**

It is explicitly outside the current scope and may depend on a separate warehouse system and vendor.

**Decision needed**

Wait until the warehouse-system vendor and integration surface are known, then scope separately.

**Source**

Scope Lock v3 --- Out-of-Scope WMS, barcode/QR scanning and WMS integration; VoC v3 --- VOC-004, VOC-025.

**SCOPE-19 --- Automated customer price or announcement blasting**

**What was discussed**

Automatically send product prices, catalogues, internal memos or announcements to large customer lists through WhatsApp.

**Why it may be useful**

David wants customers to see that Macro Frozen is active and receive current prices.

**Why it is not yet included**

Automated WhatsApp blasting is explicitly outside scope and may risk the WhatsApp number being restricted. The catalogue boundary is manual review and forwarding.

**Decision needed**

Do not include without separate commercial, technical and platform-policy approval.

**Source**

Scope Lock v3 --- Out-of-Scope automated WhatsApp blasting and customer memo/announcement blast; VoC v3 --- VOC-026, VOC-029.

**SCOPE-20 --- Facebook lead capture and automatic reply**

**What was discussed**

Capture leads from Facebook and send an automatic reply or handoff.

**Why it may be useful**

It could reduce manual lead follow-up.

**Why it is not yet included**

It is an explicit change-request candidate and the team must first assess available off-the-shelf options.

**Decision needed**

Separate commercial and product assessment.

**Source**

Scope Lock v3 --- Out-of-Scope Facebook lead capture and auto-reply.

**SCOPE-21 --- Volume-based selling-price tiers**

**What was discussed**

Apply different selling prices according to ordered quantity or volume.

**Why it may be useful**

Wholesale and larger orders may require quantity-related pricing.

**Why it is not yet included**

The current MAIA price control does not support volume-based tiers, and the item is explicitly outside the current scope.

**Decision needed**

Separate future pricing design and commercial approval.

**Source**

Scope Lock v3 --- Out-of-Scope volume-based pricing; VoC v3 --- VOC-013.

**SCOPE-22 --- Full customer-facing ordering application**

**What was discussed**

Allow customers to place orders directly through a dedicated customer application or ordering chatbot.

**Why it may be useful**

It could reduce staff order-entry work.

**Why it is not yet included**

MAIA is positioned as an internal operations assistant for this implementation, and a full customer-facing ordering application is explicitly outside scope.

**Decision needed**

Separate future product and commercial scoping.

**Source**

Scope Lock v3 --- Out-of-Scope full B2C ordering app.

**SCOPE-23 --- Packing-list Excel extraction**

**What was discussed**

Automatically read the client's existing Excel packing list and extract its detailed quantities into MAIA.

**Why it may be useful**

It could preserve the client's current evidence format while reducing re-entry.

**Why it is not yet included**

It is explicitly treated as a custom change request. The preferred proposed alternative is SCOPE-02, subject to feasibility.

**Decision needed**

Only reconsider if the picked-quantity breakdown is not technically viable or the client rejects its presentation.

**Source**

Scope Lock v3 --- Out-of-Scope packing-list Excel extraction; AS-11.

**SCOPE-24 --- Fleet location and temperature information**

**What was discussed**

Bring vehicle location and cold-chain temperature evidence into the delivery workflow.

**Why it may be useful**

It could support disputes about delayed collection, goods left in the sun or cold-chain handling.

**Why it is not yet included**

Macro Frozen already uses a separate fleet-monitoring service and this is explicitly sequenced behind the proof-of-delivery work.

**Decision needed**

Reassess only after a proof-of-delivery process is approved and operating.

**Source**

Scope Lock v3 --- Out-of-Scope fleet GPS/temperature telemetry; VoC v3 --- VOC-075.

**SCOPE-25 --- Supplier and purchase-invoice stock entry**

**What was discussed**

Create inbound stock entries from supplier or purchase documents through MAIA.

**Why it may be useful**

The client originally described difficulty updating warehouse stock and supplier quantities.

**Why it is not yet included**

The later discovery concluded that the main issue is physical weighing and checking error, not document extraction. Supplier and purchase-invoice stock entry remains outside the current scope.

**Decision needed**

Do not include unless separately scoped after the client defines a new inbound-stock problem that MAIA can actually solve.

**Source**

Scope Lock v3 --- Out-of-Scope supplier/purchase-invoice stock entry; VoC v3 --- VOC-006, VOC-025.

**Section 9 --- Source and Evidence Notes --- Internal Review**

***Internal review only --- remove before sharing directly with the client when appropriate.***

**Sources reviewed**

**Macro Frozen --- Scope Lock v3**, dated 29 Jul 2026. This is the superseding authority for locked, agreed-in-principle, needs-scoping and out-of-scope status.

**Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3**, dated 29 Jul 2026. This is the superseding source for client problems, business reasons, actor confidence and customer-voice evidence.

**Client-Specific MAIA Configuration Requirements Prompt**, supplied with this request.

Supporting records already represented in the two superseding documents, including the proposal, customer narrative, 4 Jun requirements meeting, WhatsApp export, 13 Jul clarification, 17 Jul training, 28 Jul UAT feedback and 29 Jul debrief.

**Important missing sources**

The 6 May Fireflies meeting remains an identified coverage gap.

No formally called green, yellow or red result and no named UAT signatory were recorded for the 28 Jul UAT.

The actual approved list of company and customer payment-term values was not supplied.

The actual list of customers with fully locked prices was not supplied.

Real payment-slip, bank-row and Invoice-mapping samples were not supplied in the superseding documents.

Real Pick List samples and an approved future-state Pick List format were not supplied.

The exact editable SQL fields and write-back coverage were not fully listed.

**Areas with limited direct client evidence**

Warehouse and picker requirements are mostly described by David or vendor summaries rather than by the actual pickers.

Lai's new-round workflow details are mainly checklist paraphrases; direct isolated quotes are limited.

Grace's standing Finance role is well supported, but some 28 Jul claims attributed to her are not preserved as clean direct quotes.

Driver and cold-chain requirements are partly vendor-retold rather than direct client voice.

Macro Frozen's end customers and the SQL vendor are not directly represented.

Mobile-rendering incidents show that named users need workable mobile access, but they are implementation defects rather than separate configuration requirements and were therefore not converted into main requirements.

**Important source conflicts**

**CONFLICT-01 --- Credit check is "blocked" but enforcement mode is open**

**Source A states:** SL-04 says either a failed credit amount or payment-term condition blocks the order.\
**Source B states:** NS-20 asks whether the system should warn only or hard block and says this must be decided before rollout.\
**Impact:** VALID-01, NOTIF-02 and AUTO-08 cannot be finalised. See DECISION-01.

**CONFLICT-02 --- David-only credit approval versus Apple override**

**Source A states:** SL-10 says David is the sole final approver and CJ cannot self-approve.\
**Source B states:** NS-20 asks whether David only or Apple may override.\
**Impact:** Approval roles and notifications remain unresolved. See DECISION-04.

**CONFLICT-03 --- CJ versus Apple credit-limit ownership**

**Source A states:** SL-04 says CJ sets the credit limit at customer creation and VoC VOC-031 says the Sales Manager, not Finance, sets it.\
**Source B states:** The same SL-04 section says Apple sets customer credit limits and controls customer credit terms.\
**Impact:** Customer credit-field permissions are unresolved. See DECISION-05.

**CONFLICT-04 --- Accounts-upload proof versus Driver-account proof**

**Source A states:** NS-07 records Grace's rejection of the photo-upload-to-MAIA design and a prior proposal for Accounts to upload.\
**Source B states:** AS-12 proposes a dedicated Driver account with mandatory proof of delivery.\
**Impact:** SCOPE-14 cannot be approved until David chooses one mechanism.

**CONFLICT-05 --- Client's own Pick List versus MAIA Pick List workflow**

**Source A states:** AS-01 describes a MAIA-supported Pick List and quantity-update flow.\
**Source B states:** VOC-005 records David's preference to maintain his own Pick List and send the confirmed quantity back to MAIA.\
**Impact:** SCOPE-01 requires an explicit adoption and document-source decision.

**CONFLICT-06 --- Credit Note number preference versus system running number**

**Source A states:** VOC-021 records Finance's preference for a Credit Note number that mirrors the original Invoice.\
**Source B states:** AS-03 records that the Credit Note has its own running number and cannot simply mirror the Invoice.\
**Impact:** SCOPE-12 requires a customer-facing numbering decision.

**CONFLICT-07 --- Sunday reports versus dashboard**

**Source A states:** The notification architecture includes recurring Sunday reports.\
**Source B states:** AS-06 and NS-19 record a planned dashboard with substantial overlap and require one path to be chosen.\
**Impact:** SCOPE-08 cannot be sized cleanly until the duplicated output is resolved.

**CONFLICT-08 --- Remove Excel packing list versus feasibility dependency**

**Source A states:** The client was told that the Excel packing list could be removed or replaced.\
**Source B states:** AS-11 says the replacement breakdown is only agreed in principle and must pass a technical feasibility gate; otherwise the Excel stays.\
**Impact:** SCOPE-02 must not be presented as a committed replacement until feasibility and PDF presentation are accepted.

**CONFLICT-09 --- Quotation request versus low actual usage**

**Source A states:** VOC-014 records an original request for formal quotation before order.\
**Source B states:** Grace later confirmed formal quotations are barely used in practice.\
**Impact:** SCOPE-09 should not be prioritised without renewed confirmation from David.

**Evidence and confidence statement**

The configuration document is strong for the locked core: SQL boundary, salesperson self-service order entry, customer visibility, selling-price tiers, document request behaviour, payment matching, role-based notification suppression, Sales Order-to-Lai and draft-Delivery-Note-to-Grace handoffs, and the payment-term default sequence.

Confidence is lower for the physical warehouse workflow, credit enforcement mode, role ownership of credit fields, Pick List confirmation, proof of delivery, Credit Notes, catalogue output, dashboards and the other agreed-in-principle items. These are deliberately separated as decisions or possible scope changes rather than silently converted into confirmed requirements.

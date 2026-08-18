**03Aug26_MacroFrozen_Client_Specific_MAIA_Configuration_Requirements**

**Client-Specific MAIA Configuration Requirements**

**Client:** Macro Frozen Sdn. Bhd.\
**Prepared from:** Macro Frozen --- Scope Lock v3 (29 Jul 2026); Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3 (29 Jul 2026); 4 Jun 2026 requirements-gathering transcript and meeting notes; Fireflies Macrofrozen Client Scope Lock Clarification (13 Jul 2026); Fireflies MAIA \<\> Macrofood Training (16 Jul 2026); 28 Jul 2026 UAT evidence; Fireflies Macro Frozen Debrief / Meet -- Macro Debrief (29 Jul 2026)\
**Status:** Working document for Product and Technical review\
**Date:** 3 Aug 2026

**How to Read This Document**

This document contains only Macro Frozen-specific configurations, restrictions, rules, recipients and unresolved decisions. Standard MAIA behaviour is excluded.

Confirmed requirements, uncertainties and analyst suggestions are kept separate. Each requirement has a stable reference ID so Product, Technical and business reviewers can approve, reject or amend it independently.

The Scope Lock is used to decide what is approved. An item described only as **Agreed in Principle**, **Needs Scoping** or **Blocked by Client Conflict** is not presented as a confirmed production configuration.

**Section 1 --- Configuration Summary**

**Main workflows covered**

Customer orders forwarded through one MAIA WhatsApp number.

Salesperson self-service Sales Order preparation and submission.

Customer ownership and visibility by SQL sales-agent assignment.

Customer-specific, wholesale and retail pricing with tiered approval.

Credit-limit and overdue-payment checks at Sales Order and Delivery Note.

Sales Order, Delivery Note and Invoice generation with SQL constraints.

Role-specific handoff notifications between Sales, Lai, Grace, CJ and David.

Customer-payment evidence extraction, matching and Finance confirmation.

MAIA-to-SQL synchronisation where integration permits.

**Named users and evidenced roles**

  ----------------------------------------- -------------------------------------------------------------------------------- ---------------------------------------------------
  Person / role                             Evidence-supported use                                                           Current status

  David Chong                               Owner; final credit approver; price controller; below-floor price approver       Confirmed

  CJ Tan                                    Sales Manager; active salesperson; middle price-approval tier                    Confirmed

  Ben                                       Active salesperson                                                               Confirmed name variation remains

  Queenie                                   Active salesperson                                                               Confirmed

  Grace                                     Finance Manager; Delivery Note / Invoice and AR user                             Confirmed

  Apple / Applle                            Finance-specific user for credit limits, terms and finance customer settings     Role supported; authority boundary partly unclear

  Lai / Lim Jun Yan                         Warehouse / Logistics Manager; Sales Order and Delivery Note handoff recipient   Supported; direct warehouse voice is thin

  Warehouse pickers / checkers              Physical picking and quantity confirmation                                       Users and account model not identified

  Krystle / Sean                            Operations / setup contacts                                                      Production MAIA permissions not established

  Third-party drivers                       Delivery and POD source                                                          MAIA role is a possible scope change, not locked

  External bank-reconciliation consultant   Final bank reconciliation outside MAIA                                           No confirmed MAIA role
  ----------------------------------------- -------------------------------------------------------------------------------- ---------------------------------------------------

**Main configuration areas**

Named-user and role permissions.

Customer visibility by assigned sales agent.

Price bands, price-controller authority and customer-specific price locks.

Credit checks, block behaviour and approval routing.

Whitelist-only notifications.

Sales-to-warehouse and warehouse-to-Finance handoffs.

Default payment terms.

SQL customer/item source, document sequence and synchronisation.

AR matching with mandatory Finance confirmation.

**Important source limitations**

David and Grace are strongly represented in direct client evidence.

CJ and Lai are repeatedly assigned responsibilities, but their isolated direct voice is limited.

Warehouse pickers, drivers, Macro Frozen customers and the SQL vendor are not directly represented.

Some July 28--29 details were formalised by vendor-side synthesis and internal debrief; they are treated as confirmed only where Scope Lock v3 explicitly locks them.

A Fireflies scan through 3 Aug 2026 found no newer Macro Frozen meeting after the 29 Jul debrief.

**Possible scope changes --- confirmation required**

The following are not locked production configurations and are therefore excluded from confirmed requirements:

Full fresh-weight / annotated-pick-list workflow details.

Product catalogue generation.

Credit Note support and SCN/CCN connector behaviour.

Customer notes and master-data editing.

Dashboard and recurring-report design.

Formal Quotation workflow.

Customer PO upload and matching.

Cost / buying-price maintenance.

SKU replacement during picking.

Per-box or (quantity, UOM) picked-quantity breakdown.

Dedicated Delivery Driver account and mandatory POD.

Accelerated AR workspace timeline.

Separate contact database.

Explicitly out of scope include AP reconciliation, QR-merchant settlement, full delivery-route management, WMS/barcode scanning, volume-based pricing, customer WhatsApp blasting, supplier stock-entry workflow, packing-list Excel OCR, Facebook lead capture and fleet telemetry.

**Section 2 --- Users and Role Requirements**

**Salesperson**

**Role in the client's business**

Salespeople receive customer orders, interpret customer wording and prepare their own Sales Orders. They must work only with their assigned customers and must send price or credit exceptions to the authorised approver.

**Known users**

CJ Tan.

Ben

Queenie.

Confirmed active count in Scope Lock v3: three.

Any additional salesperson is not identified.

**Relevant MAIA documents**

Customer.

Product price.

Sales Order.

Quotation and Invoice only where price validation applies.

Customer outstanding information.

**Can**

**SALES-01 --- Use the single MAIA WhatsApp number**

A Salesperson can forward a customer order to the one authorised MAIA WhatsApp number.

This keeps the client on one shared assistant channel and avoids separate routing rules for different staff numbers.

**Applies to:** Sales Order intake\
**Source:** Scope Lock v3 --- SL-06 and AS-04

**SALES-02 --- Review and submit own Sales Orders**

A Salesperson can review, correct and submit the Sales Order that MAIA drafts from the forwarded customer order.

The superseded office-admin relay model must not be used as the default because salesperson self-service entry is the locked workflow.

**Applies to:** Sales Order\
**Source:** Scope Lock v3 --- AS-04

**SALES-03 --- Work only with assigned customers**

A Salesperson can view and manage customers assigned to that Salesperson through the SQL Agent field.

This preserves Macro Frozen's customer-territory separation.

**Applies to:** Customer\
**Source:** Scope Lock v3 --- SL-05 and SL-08; VoC v3 --- VOC-019 and VOC-032

**SALES-04 --- View assigned-customer commercial information**

A Salesperson can view the pricing and outstanding information for customers assigned to that Salesperson.

The information is needed to prepare a Sales Order without asking the office to check every customer.

**Applies to:** Customer, Product price, customer outstanding information\
**Source:** Scope Lock v3 --- SL-05; VoC v3 --- VOC-019

**SALES-05 --- Adjust price only inside the allowed price rules**

A Salesperson can change a price on a Quotation, Sales Order or Invoice only when the entered price remains inside the configured rules for that customer and item.

This allows legitimate order preparation without allowing Sales to bypass David's minimum-price control.

**Applies to:** Quotation, Sales Order, Invoice, Product price\
**Source:** Scope Lock v3 --- SL-03 and SL-11

**Cannot**

**SALES-06 --- No access to another salesperson's customers**

A Salesperson cannot access another Salesperson's customer list, customer pricing or customer outstanding information.

This is a confirmed client restriction, not merely a default view preference.

**Applies to:** Customer, Product price, customer outstanding information\
**Source:** Scope Lock v3 --- SL-05; VoC v3 --- VOC-019

**SALES-07 --- Cannot approve own credit exception**

A Salesperson cannot approve a Sales Order or Delivery Note that fails the credit check.

David is the sole final credit approver under the locked escalation design.

**Applies to:** Sales Order, Delivery Note\
**Source:** Scope Lock v3 --- SL-10

**SALES-08 --- Cannot approve a below-floor or above-maximum price**

A Salesperson cannot approve a price below the minimum or above the maximum on a Quotation, Sales Order or Invoice.

The price must be routed to David.

**Applies to:** Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-11

**SALES-09 --- Cannot use a Prospect stage**

Sales users cannot use a separate Prospect module because Macro Frozen's configured customer lifecycle is Lead to Customer, with the Prospect module hidden.

**Applies to:** Lead, Customer\
**Source:** Scope Lock v3 --- Supersessions Log

**Unsure**

**SALES-10 --- Customer master-data editing**

It is unclear which Customer fields a Salesperson can create or edit after the Customer is created.

**Decision needed:** Can Salespeople create and edit all non-finance Customer fields for their assigned customers, or only selected fields?\
**Why it matters:** Scope Lock v3 keeps customer information updates agreed in principle rather than locked, while Grace's 13 Jul call supported Sales editing own customer details.\
**Source:** VoC v3 --- VOC-031; Scope Lock v3 --- AS-05

**SALES-11 --- Customer-specific price lock coverage**

It is unclear which customers must have their customer-specific price completely locked against Salesperson editing.

**Decision needed:** Provide the customer list or rule that determines when Sales cannot change the customer-specific price at all.\
**Why it matters:** SL-11 permits a complete customer-specific price lock, but no customer or condition is identified.\
**Source:** Scope Lock v3 --- SL-11

**Suggested**

**SALES-12 --- Use individual accounts for each salesperson**

Consider requiring a separate named MAIA account for CJ, Ben / Arben and Queenie because customer ownership, approval requests and submission history must be attributable to the correct Salesperson.

**This is a suggestion, not a confirmed client requirement.**

**CJ Tan --- Sales Manager and Middle Price Approver**

**Role in the client's business**

CJ is an active Salesperson and the approval tier for a price below the customer/default price but not below the minimum. CJ is not the final credit approver.

**Known users**

CJ Tan.

Confirmed count for this named authority: one.

**Relevant MAIA documents**

Customer.

Product price.

Sales Order.

Quotation.

Invoice.

Credit approval request.

**Can**

**CJ-01 --- Approve middle-tier price exceptions**

CJ can approve or reject a price that is below the customer/default price but remains at or above the minimum price.

This keeps routine commercial exceptions with the Sales Manager while reserving below-floor decisions for David.

**Applies to:** Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-03

**CJ-02 --- Submit Sales Orders as a Salesperson**

CJ can prepare and submit Sales Orders for customers assigned to CJ.

CJ remains one of the three active sales agents as well as the Sales Manager.

**Applies to:** Sales Order\
**Source:** Scope Lock v3 --- AS-04 and SL-08

**CJ-03 --- Pass a credit-blocked document to David**

CJ can pass or assign a credit-blocked Sales Order or Delivery Note to David when the credit approval chain reaches CJ.

This is part of the locked Queenie → CJ → David escalation chain, but it does not make CJ the final approver.

**Applies to:** Sales Order, Delivery Note\
**Source:** Scope Lock v3 --- SL-10

**Cannot**

**CJ-04 --- Cannot approve a below-minimum or above-maximum price**

CJ cannot approve a price below the minimum or above the maximum.

David must decide that exception.

**Applies to:** Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-11

**CJ-05 --- Cannot self-approve a credit block**

CJ cannot give final approval to a Sales Order or Delivery Note that fails the credit check.

**Applies to:** Sales Order, Delivery Note\
**Source:** Scope Lock v3 --- SL-10

**Unsure**

**CJ-06 --- Visibility across the sales team**

It is unclear whether CJ can view the Customer, pricing and outstanding information for Ben / Arben and Queenie.

**Decision needed:** Should CJ see all customers assigned to the sales team, or only customers assigned to CJ?\
**Why it matters:** Salesperson isolation is locked, but the Sales Manager exception is not documented.\
**Source:** Scope Lock v3 --- SL-05; no explicit manager exception found

**CJ-07 --- Initial customer credit-limit authority**

It is unclear whether CJ sets or approves the initial Customer credit limit.

**Decision needed:** Does CJ set the initial credit limit, does Apple set it, or does CJ approve a value entered by Apple?\
**Why it matters:** The 13 Jul Grace call assigns credit-limit setting to the Sales Manager, while later Scope Lock material assigns credit-limit maintenance to Apple's Finance role.\
**Source:** VoC v3 --- VOC-031; Scope Lock v3 --- SL-04 role note and Supersessions Log

**Suggested**

**CJ-08 --- Record the reason for a price approval**

Consider requiring CJ to enter a short approval reason when accepting a middle-tier price exception, because Macro Frozen wants price changes and exceptions to be traceable.

**This is a suggestion, not a confirmed client requirement.**

**David Chong --- Owner, Price Controller and Final Credit Approver**

**Role in the client's business**

David maintains the selling-price source and makes the final decision on below-floor pricing and credit exceptions.

**Known users**

David Chong / Choy Kien Yang.

Confirmed count for this named authority: one.

**Relevant MAIA documents**

Product price.

Customer.

Customer credit limit and payment terms.

Quotation.

Sales Order.

Delivery Note.

Invoice.

**Can**

**DAVID-01 --- Maintain selling prices**

David can upload the structured price-update template or use the desktop price workspace to update Macro Frozen's selling prices.

The new prices must become the source used by later Sales Orders.

**Applies to:** Product price\
**Source:** Scope Lock v3 --- SL-03

**DAVID-02 --- Approve below-minimum and above-maximum prices**

David can approve or reject a price below the minimum or above the maximum on a Quotation, Sales Order or Invoice.

David is the named price controller for this approval level.

**Applies to:** Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-03 and SL-11

**DAVID-03 --- Give final credit approval**

David can approve or reject a Sales Order or Delivery Note that fails the credit check after the item is assigned to him.

This preserves David's existing control over customer exposure.

**Applies to:** Sales Order, Delivery Note\
**Source:** Scope Lock v3 --- SL-04 and SL-10

**DAVID-04 --- Receive unassigned customers**

David is the default sales-agent owner for SQL customers whose Agent field is unassigned or belongs to a former salesperson.

This prevents legacy customers from becoming invisible in MAIA.

**Applies to:** Customer\
**Source:** Scope Lock v3 --- SL-08; VoC v3 --- VOC-032

**Unsure**

**DAVID-05 --- Whether Apple shares credit override authority**

It is unclear whether David is the only person who can release a credit-blocked Sales Order or Delivery Note, or whether Apple can also do so.

**Decision needed:** Is final credit approval David-only, or may Apple approve defined Finance cases?\
**Why it matters:** SL-10 states David is the sole final approver, while NS-20 explicitly asks whether Apple can override.\
**Source:** Scope Lock v3 --- SL-10 and NS-20

**DAVID-06 --- Backup price controller**

It is unclear who can maintain Product prices when David is unavailable.

**Decision needed:** Name the backup user, or confirm that price updates wait for David.\
**Why it matters:** The price source cannot be safely maintained without a defined authority.\
**Source:** No backup user found after reviewing SL-03, role evidence and the 13 Jul clarification

**Suggested**

**DAVID-07 --- Require an approval reason for final exceptions**

Consider requiring David to record a reason when approving a below-floor price or credit exception, because Macro Frozen wants exceptions to be attributable and reviewable.

**This is a suggestion, not a confirmed client requirement.**

**Grace --- Finance Manager, Delivery Note / Invoice and AR User**

**Role in the client's business**

Grace reviews the warehouse handoff, controls final document generation and confirms customer-payment matching before SQL is updated.

**Known users**

Grace.

Confirmed count for the named Finance Manager authority: one.

Another Finance / account user was present in discovery, but the name and final permissions are not confirmed.

**Relevant MAIA documents**

Pick List.

Delivery Note.

Invoice.

Payment.

Customer outstanding information.

Bank statement and payment evidence.

**Can**

**GRACE-01 --- Receive the draft Delivery Note handoff**

Grace must receive every draft Delivery Note created by Lai, together with the Delivery Note PDF.

The client requested every event rather than a digest so Finance does not miss the handoff.

**Applies to:** Delivery Note\
**Source:** Scope Lock v3 --- SL-12; client instruction preserved as "yes, spam Grace"

**GRACE-02 --- Receive the confirmed Pick List handoff**

Grace must receive a notification when the Pick List is submitted or confirmed.

The notification tells Finance that actual quantities are ready for the next document step.

**Applies to:** Pick List\
**Source:** Scope Lock v3 --- SL-12

**GRACE-03 --- Request Delivery Note and Invoice generation**

Grace can separately request the Delivery Note or Invoice after the Sales Order or final quantity is confirmed.

MAIA must not automatically create those documents merely because an amended Sales Order was submitted.

**Applies to:** Delivery Note, Invoice, Sales Order\
**Source:** Scope Lock v3 --- SL-07 explicit-request nuance

**GRACE-04 --- Review generated PDFs before sending**

Grace can review the generated Delivery Note and Invoice PDFs before they are sent.

Macro Frozen requires human control over final documents.

**Applies to:** Delivery Note, Invoice\
**Source:** Scope Lock v3 --- SL-07

**GRACE-05 --- Upload payment evidence**

Grace can upload or forward a bank statement or customer payment slip to MAIA.

This starts the client-specific AR matching workflow.

**Applies to:** Payment, bank statement, payment evidence\
**Source:** Scope Lock v3 --- SL-02

**GRACE-06 --- Confirm or correct a payment match**

Grace must confirm the suggested Customer and Invoice match, or manually select the correct Customer and Invoice, before MAIA updates the Payment.

This prevents a payer-name mismatch from posting to the wrong account.

**Applies to:** Payment, Customer, Invoice\
**Source:** Scope Lock v3 --- SL-02; VoC v3 --- VOC-007, VOC-048 and VOC-049

**Cannot**

**GRACE-07 --- Cannot be bypassed for payment posting**

A Payment cannot be updated or posted merely because MAIA found a possible match; Grace or another authorised Finance user must confirm it first.

**Applies to:** Payment\
**Source:** Scope Lock v3 --- SL-02

**Unsure**

**GRACE-08 --- Draft Delivery Note ownership**

It is unclear whether Lai creates the draft Delivery Note and Grace only reviews/submits it, or whether Grace must request creation of the Delivery Note after picking.

**Decision needed:** Confirm the exact creator, reviewer and submitter for the Delivery Note.\
**Why it matters:** SL-12 says Lai creates the draft Delivery Note, while SL-07 says Grace separately requests Delivery Note generation.\
**Source:** Scope Lock v3 --- SL-07 and SL-12

**GRACE-09 --- Finance backup user**

It is unclear who performs Delivery Note, Invoice and AR duties when Grace is absent.

**Decision needed:** Name the backup Finance user and the exact permissions that user receives.\
**Why it matters:** The 13 Jul client call confirmed there is no defined Finance backup.\
**Source:** Scope Lock v3 --- NS-10; VoC v3 --- VOC-034

**GRACE-10 --- Credit Note permissions**

It is unclear whether Grace can create, submit and reconcile Sales Credit Notes and Customer Credit Notes in MAIA.

**Decision needed:** Confirm Grace's exact Credit Note permissions after the SCN/CCN scope is accepted.\
**Why it matters:** Credit Note support is only agreed in principle and the connector case remains under NS-18.\
**Source:** Scope Lock v3 --- AS-03 and NS-18

**Suggested**

**GRACE-11 --- Separate document and payment responsibilities from full administration**

Consider giving Grace only the Delivery Note, Invoice, Payment and related Customer-outstanding permissions required for Finance, rather than unrestricted administrator access.

**This is a suggestion, not a confirmed client requirement.**

**Apple / Applle --- Finance Credit Settings User**

**Role in the client's business**

Apple maintains finance-related Customer settings, including credit limits and payment terms. The source expressly narrows Apple's role from full administrator access to a Finance-specific role.

**Known users**

Apple / Applle.

Confirmed named count: one.

**Relevant MAIA documents**

Customer.

Customer credit limit.

Customer payment terms.

Finance-related customer settings.

Credit-blocked Sales Order and Delivery Note only if override authority is later confirmed.

**Can**

**APPLE-01 --- Maintain Customer credit limits**

Apple can maintain the credit limit on a Customer record.

This is part of Apple's Finance-specific role.

**Applies to:** Customer credit limit\
**Source:** Scope Lock v3 --- SL-04 role note and Supersessions Log

**APPLE-02 --- Maintain Customer payment terms**

Apple can maintain the payment terms on a Customer record.

The value is used by the credit check and the Sales Order payment-term default.

**Applies to:** Customer payment terms\
**Source:** Scope Lock v3 --- SL-04 role note and SL-13

**Cannot**

**APPLE-03 --- No unrestricted administrator access**

Apple cannot receive unrestricted access to Sales, pricing, warehouse and every other MAIA area solely because Apple maintains Finance settings.

Apple's role is Finance-specific and is not the same as David's administrator authority.

**Applies to:** User and role access\
**Source:** Scope Lock v3 --- Supersessions Log

**Unsure**

**APPLE-04 --- Credit override authority**

It is unclear whether Apple can approve or release a credit-blocked Sales Order or Delivery Note.

**Decision needed:** May Apple approve defined credit exceptions, or may Apple only maintain Customer limits and terms?\
**Why it matters:** This changes the credit-approval route and conflicts with SL-10's David-only rule.\
**Source:** Scope Lock v3 --- SL-10 and NS-20

**APPLE-05 --- Initial limit versus ongoing maintenance**

It is unclear whether Apple sets the initial Customer credit limit or only maintains a limit approved by CJ or David.

**Decision needed:** Who enters, approves and changes the first credit-limit value for a new Customer?\
**Why it matters:** Grace's direct call assigned initial setting to the Sales Manager, while the later role definition assigns credit-limit maintenance to Apple.\
**Source:** VoC v3 --- VOC-031; Scope Lock v3 --- SL-04

**Suggested**

**APPLE-06 --- Split edit and approval authority**

Consider allowing Apple to prepare a credit-limit change while requiring CJ or David to approve the change, because the current sources mix Finance maintenance with Sales/owner authority.

**This is a suggestion, not a confirmed client requirement.**

**Lai / Lim Jun Yan --- Warehouse and Logistics Manager**

**Role in the client's business**

Lai receives submitted Sales Orders for warehouse planning and hands the draft Delivery Note or confirmed picking result to Grace.

**Known users**

Lai / Lim Jun Yan.

Confirmed named count: one.

No backup user identified.

**Relevant MAIA documents**

Sales Order.

Pick List.

Delivery Note.

Item.

**Can**

**LAI-01 --- Receive each submitted Sales Order**

Lai must receive every submitted Sales Order with the Order PDF.

Macro Frozen specifically requested notification on every occurrence because warehouse orders had been missed.

**Applies to:** Sales Order\
**Source:** Scope Lock v3 --- SL-12; client instruction preserved as "yes, spam Lai"

**LAI-02 --- Create the draft Delivery Note**

Lai can create the draft Delivery Note that is sent to Grace.

This is the named handoff in the locked warehouse-to-Finance notification flow.

**Applies to:** Delivery Note\
**Source:** Scope Lock v3 --- SL-12

**LAI-03 --- Submit or confirm the Pick List**

Lai can submit or confirm the Pick List after warehouse quantities have been captured.

This permission is derived from the locked notification event that sends the confirmed Pick List to Grace; the detailed fresh-weight process remains not locked.

**Applies to:** Pick List\
**Source:** Derived from Scope Lock v3 --- SL-12; detailed method remains AS-01

**Cannot**

**LAI-04 --- No Purchasing tab on Item Detail**

Lai and other warehouse users cannot see the Purchasing tab on the Item record.

This prevents warehouse users from seeing purchasing information that is not needed for their job.

**Applies to:** Item\
**Source:** Scope Lock v3 --- SL-04 warehouse/purchasing visibility note

**Unsure**

**LAI-05 --- Warehouse account model**

It is unclear whether Lai and the warehouse workers use individual MAIA accounts or one shared warehouse device/account.

**Decision needed:** Choose individual named accounts, a shared warehouse account, or a paper-only worker flow with Lai as the sole MAIA user.\
**Why it matters:** The answer changes accountability, audit history and the number of production users.\
**Source:** Scope Lock v3 --- NS-11; VoC v3 --- VOC-041

**LAI-06 --- Warehouse backup**

It is unclear who creates or confirms Pick Lists and draft Delivery Notes when Lai is absent.

**Decision needed:** Name the backup Warehouse user and grant only the required permissions.\
**Why it matters:** The client confirmed that no current backup process exists.\
**Source:** Scope Lock v3 --- NS-10; VoC v3 --- VOC-034

**LAI-07 --- Actual-quantity amendment owner**

It is unclear whether Lai, Grace or another user changes the Sales Order when the actual picked quantity differs from the ordered quantity.

**Decision needed:** Who is allowed to amend the Sales Order with the actual quantity, and who approves that amendment?\
**Why it matters:** The weight-based flow cannot be configured safely without a single owner.\
**Source:** VoC v3 --- VOC-047; Scope Lock v3 --- AS-01, not locked

**LAI-08 --- SKU replacement authority**

It is unclear whether Lai can replace an unavailable item during picking and who must approve the replacement.

**Decision needed:** Is approval required from Sales, CJ, David, Grace or the customer?\
**Why it matters:** SKU replacement is agreed in principle but has no approval route.\
**Source:** Scope Lock v3 --- AS-10

**Suggested**

**LAI-09 --- Preserve named warehouse actions**

Consider using Lai's individual account for Pick List confirmation and draft Delivery Note creation even if warehouse workers use paper, because the client wants to know who completed each handoff.

**This is a suggestion, not a confirmed client requirement.**

**Warehouse Picker / Checker**

**Role in the client's business**

Warehouse workers physically pick, cut, weigh and check goods. Their final quantities are needed before the Delivery Note and Invoice are finalised.

**Known users**

No named picker or checker.

User count not provided.

Account requirement not decided.

**Relevant MAIA documents**

Pick List.

Sales Order actual quantity, only if workers interact with MAIA.

**Can**

No confirmed MAIA permission can be assigned to this role from the current locked scope.

**Cannot**

No confirmed MAIA restriction can be assigned beyond the warehouse Purchasing-tab restriction already recorded for warehouse users.

**Unsure**

**PICKER-01 --- Whether pickers need MAIA accounts**

It is unclear whether individual pickers and checkers use MAIA directly.

**Decision needed:** Do workers enter quantities themselves, use one shared device, or write on paper for Lai to enter?\
**Why it matters:** This determines production-user count and training.\
**Source:** Scope Lock v3 --- NS-11; VoC v3 --- VOC-003, VOC-004 and VOC-041

**PICKER-02 --- Picker and checker identity**

It is unclear whether MAIA must record both the person who picked and the person who checked each Pick List.

**Decision needed:** Are both identities mandatory for every Pick List, or is Lai's confirmation sufficient?\
**Why it matters:** David's stated concern is proving who picked and who checked when quantities are wrong.\
**Source:** VoC v3 --- VOC-004

**Suggested**

**PICKER-03 --- Record picker and checker separately**

Consider recording the picker and checker as separate named fields when the final Pick List is confirmed, because this directly addresses David's accountability concern without requiring a full WMS.

**This is a suggestion, not a confirmed client requirement.**

**Operations / Administrative Contacts**

**Role in the client's business**

Krystle and Sean appear as operations, coordination or setup contacts. The evidence does not establish a permanent production MAIA responsibility.

**Known users**

Krystle Wong.

Sean Looi.

Production-user count: not confirmed.

**Relevant MAIA documents**

Not established.

**Can**

No client-specific production permission is confirmed.

**Cannot**

No client-specific production restriction is confirmed.

**Unsure**

**OPS-01 --- Production account requirement**

It is unclear whether Krystle or Sean needs a production MAIA account and which documents either person would use.

**Decision needed:** Confirm whether either person is an operational user rather than only an implementation contact.\
**Why it matters:** Attendance and setup activity must not be converted into unnecessary production access.\
**Source:** VoC v3 --- Actor and Role Register; WhatsApp setup evidence

**Delivery Driver --- Possible Scope Change**

**Role in the client's business**

Third-party drivers deliver goods, return signed Delivery Notes or delivery photos and may return cash. A dedicated MAIA Driver role is not locked.

**Known users**

Drivers are third-party.

Three driver WhatsApp groups were described in the 13 Jul Grace call.

No named production user confirmed.

**Relevant MAIA documents**

Delivery Note.

Proof of Delivery attachment.

Payment only indirectly where cash is collected.

**Can**

No Driver permission is confirmed in the current locked scope.

**Cannot**

No Driver restriction is confirmed in the current locked scope.

**Unsure**

**DRIVER-01 --- Whether drivers receive MAIA accounts**

It is unclear whether a driver receives a MAIA account or continues using the existing WhatsApp group.

**Decision needed:** Choose Driver account, Finance-uploaded POD or no formal MAIA POD flow.\
**Why it matters:** AS-12 proposes a Driver role, but NS-07 records Grace's rejection of extra Finance upload work.\
**Source:** Scope Lock v3 --- AS-12 and NS-07; VoC v3 --- VOC-024 and VOC-076

**DRIVER-02 --- Proposed narrow Delivery Note access**

It is unclear whether a Driver can view and update only assigned Delivery Notes and upload, but not delete, Proof of Delivery.

**Decision needed:** Confirm or reject this proposed permission set before adding drivers to the production user population.\
**Why it matters:** The permission is agreed in principle only and expands scope.\
**Source:** Scope Lock v3 --- AS-12; Fireflies Macro Frozen Debrief, 29 Jul 2026

**Suggested**

**DRIVER-03 --- Restrict any future Driver role to assigned Delivery Notes**

Consider limiting any future Driver role to assigned Delivery Notes and adding POD without deletion rights, because drivers are third-party and should not see customer pricing, credit or other deliveries.

**This is a suggestion, not a confirmed client requirement.**

**External Bank-Reconciliation Consultant**

**Role in the client's business**

The consultant completes final bank reconciliation outside MAIA after Macro Frozen Finance performs customer-invoice payment matching.

**Known users**

Name not provided.

Confirmed count: one external consultant in the 4 Jun meeting notes.

**Relevant MAIA documents**

No confirmed MAIA document.

**Cannot**

**CONSULTANT-01 --- Final bank reconciliation remains outside MAIA**

The external consultant is not a confirmed MAIA user for final bank reconciliation.

The approved MAIA scope covers customer-invoice AR matching, not the consultant's final bank reconciliation work.

**Applies to:** Payment / bank reconciliation\
**Source:** 4 Jun 2026 Macro Frozen Meeting Notes --- AR Reconciliation

**Section 3 --- Notifications and Reminders**

*A notification is sent because an event occurred and another person needs to know or take action. A message shown to a user because their current action is blocked belongs under Validations and Blocking Rules.*

**NOTIF-01 --- Credit exception assigned to David**

**When it is sent**

After a Sales Order or Delivery Note fails the configured credit check and the user assigns it to the credit controller.

**Who receives it**

David.

**What they need to receive**

Sales Order or Delivery Note reference.

Customer.

Credit limit and current outstanding information used by the check.

Payment-term or overdue reason.

Requesting Salesperson.

Order value.

Link or action to approve or reject.

**Why they need it**

David is the sole final credit approver in the locked workflow.

**What they do next**

Approve, reject or submit on the Salesperson's behalf as permitted by the final configuration.

**Unsure**

It is still unclear whether the credit check is warn-only or a complete stop, and whether Apple may approve some cases.

**Source:** Scope Lock v3 --- SL-10 and NS-20

**NOTIF-02 --- Credit decision returned to the Salesperson**

**When it is sent**

After David approves or rejects the credit exception.

**Who receives it**

The Salesperson who submitted the Sales Order or Delivery Note.

**What they need to receive**

Document reference.

Decision.

Approver.

Any reason recorded.

Whether the document may proceed.

**Why they need it**

The Salesperson must know whether the customer order can continue rather than seeing a silent blocked document.

**What they do next**

Continue the document or contact the customer based on the decision.

**Source:** Scope Lock v3 --- SL-10; VoC v3 --- VOC-061

**NOTIF-03 --- Middle-tier price exception sent to CJ**

**When it is sent**

When a Salesperson enters a price below the customer/default price but at or above the minimum price.

**Who receives it**

CJ.

**What they need to receive**

Quotation, Sales Order or Invoice reference.

Customer and item.

Customer/default price.

Proposed price.

Minimum price.

Requesting Salesperson.

**Why they need it**

CJ is the confirmed approval tier for this price band.

**What they do next**

Approve or reject the price.

**Source:** Scope Lock v3 --- SL-03

**NOTIF-04 --- Final price exception sent to David**

**When it is sent**

When a Salesperson attempts a price below the minimum or above the maximum and chooses to request approval.

**Who receives it**

David.

**What they need to receive**

Quotation, Sales Order or Invoice reference.

Customer and item.

Proposed price.

Minimum and maximum price.

Customer/default price.

Requesting Salesperson.

**Why they need it**

David is the named price controller for exceptions outside the allowed range.

**What they do next**

Approve, reject or enter the authorised price.

**Source:** Scope Lock v3 --- SL-11

**NOTIF-05 --- Price decision returned to the Salesperson**

**When it is sent**

After CJ or David approves or rejects the requested price.

**Who receives it**

The requesting Salesperson.

**What they need to receive**

Document reference.

Decision.

Approved price, if changed.

Approver.

Any reason recorded.

**Why they need it**

Sales must know whether the document can proceed and what price is authorised.

**What they do next**

Continue or correct the Quotation, Sales Order or Invoice.

**Source:** Scope Lock v3 --- SL-03 and SL-11

**NOTIF-06 --- Submitted Sales Order sent to Lai**

**When it is sent**

Every time a Sales Order is submitted successfully.

**Who receives it**

Lai.

**What they need to receive**

Sales Order reference.

Customer.

Delivery date.

Items and quantities.

Order PDF.

Submitting Salesperson.

**Why they need it**

Lai must include all submitted orders in warehouse planning; the client identified missed orders as an operating failure.

**What they do next**

Prepare the Pick List and warehouse plan.

**Suggested**

Consider sending an escalation to the named warehouse backup only when Lai has not opened or acknowledged the notification within a client-approved period.

**This is a suggestion, not a confirmed client requirement.**

**Source:** Scope Lock v3 --- SL-12

**NOTIF-07 --- Draft Delivery Note sent to Grace**

**When it is sent**

Every time Lai creates a draft Delivery Note.

**Who receives it**

Grace.

**What they need to receive**

Delivery Note reference.

Customer.

Related Sales Order.

Final quantities.

Delivery Note PDF.

Creator.

**Why they need it**

Grace must review the Finance handoff without manually checking a queue or WhatsApp group.

**What they do next**

Review the Delivery Note and continue the Invoice workflow.

**Source:** Scope Lock v3 --- SL-12

**NOTIF-08 --- Confirmed Pick List sent to Grace**

**When it is sent**

When the Pick List is submitted or confirmed.

**Who receives it**

Grace.

**What they need to receive**

Pick List reference.

Related Sales Orders.

Customer.

Actual quantities.

Any shortage or variance.

Person who confirmed the Pick List.

**Why they need it**

Finance needs confirmation that the physical quantities are ready for Delivery Note and Invoice work.

**What they do next**

Review the final quantities and request or review the next document.

**Unsure**

SL-12 says "notify Grace on demand" but its acceptance criteria also say all three events fire on every occurrence.

**Decision needed:** Must this notification fire automatically for every confirmed Pick List, or only when Lai selects a notify action?

**Source:** Scope Lock v3 --- SL-12

**NOTIF-09 --- Overdue Invoice notification**

**When it is sent**

When an Invoice becomes overdue under the client's agreed payment terms.

**Who receives it**

Finance.

The Salesperson assigned to that Customer.

CJ for the sales team.

David.

**What they need to receive**

Customer.

Invoice reference.

Due date.

Outstanding amount.

Assigned Salesperson.

Days overdue.

**Why they need it**

Macro Frozen's chase sequence is Finance → Sales → David, and each Salesperson should see only their own customers while CJ sees the team position.

**What they do next**

Finance checks the Payment position; Sales contacts the Customer; David escalates if required.

**Unsure**

The exact reminder cadence and repeat/escalation timing are not stated.

**Decision needed:** Send once when overdue, repeat on a schedule, or escalate by age band?

**Source:** VoC v3 --- VOC-020; Fireflies Macrofrozen Client Scope Lock Clarification, 13 Jul 2026; Scope Lock v3 --- NS-06 resolved

**NOTIF-10 --- Near-expiry or aging-stock notification**

**When it is sent**

When stock meets the client-approved near-expiry or aging threshold.

**Who receives it**

David.

Lai / Warehouse and Logistics Manager.

Sales recipients are undecided.

**What they need to receive**

Item.

Quantity.

Warehouse.

Age or expiry information.

Threshold that was crossed.

**Why they need it**

David needs to decide whether to discount, offer or clear the stock, while Lai needs warehouse awareness.

**What they do next**

Review stock and decide the action.

**Unsure**

The threshold, cadence, exact data source and whether Salespeople receive the notification are not decided.

**Decision needed:** Define the threshold, recipients, cadence and source of expiry/aging data.

**Source:** Scope Lock v3 --- NS-03 and NS-09; VoC v3 --- VOC-022

**NOTIF-11 --- Low-stock notification**

**When it is sent**

The event is listed in the locked notification whitelist, but the exact low-stock condition is not defined.

**Who receives it**

Not confirmed.

**What they need to receive**

Item.

Available quantity.

Warehouse.

Threshold crossed.

Outstanding Sales Order demand, if required.

**Why they need it**

The recipient needs to respond before customer orders cannot be fulfilled.

**What they do next**

Not confirmed.

**Unsure**

**Decision needed:** What quantity rule triggers low stock, who receives it and what action follows?

**Source:** Scope Lock v3 --- SL-09; no complete client configuration found

**NOTIF-12 --- Daily Pick List digest**

**When it is sent**

Daily, but no time or cutoff is confirmed.

**Who receives it**

Not confirmed; Lai is the likely operational recipient but this is not directly stated.

**What they need to receive**

Sales Orders waiting for picking.

Delivery dates.

Customer and items.

Any unconfirmed Pick Lists.

**Why they need it**

The digest would support daily warehouse planning without relying on manual queue checking.

**What they do next**

Prepare the day's Pick Lists.

**Unsure**

**Decision needed:** Who receives the digest, at what time and which order statuses are included?

**Source:** Scope Lock v3 --- SL-09; mechanism not otherwise defined

**NOTIF-13 --- Price-update reminder**

**When it is sent**

The reminder event is listed in the locked notification whitelist, but no cadence or condition is confirmed.

**Who receives it**

David is the likely price controller, but the recipient is not explicitly stated for this reminder.

**What they need to receive**

Date of last price update.

Items or price lists requiring review, if applicable.

**Why they need it**

Macro Frozen changes prices according to the market and needs the MAIA price source to remain current.

**What they do next**

Review and upload new prices where required.

**Unsure**

**Decision needed:** Is the reminder calendar-based, triggered by price age, or manually scheduled, and should David be the only recipient?

**Source:** Scope Lock v3 --- SL-09; VoC v3 --- VOC-011

**NOTIF-14 --- Sunday sales reports --- possible scope change**

**When it is sent**

A set of reports was discussed for Sunday at 08:00.

**Who receives it**

Not fully confirmed.

**What they need to receive**

The exact six report outputs discussed in the July evidence, if this path is selected.

**Why they need it**

The reports would provide recurring sales visibility.

**What they do next**

Review salesperson and overall performance.

**Unsure**

The Sunday report set overlaps with the planned per-salesperson dashboard.

**Decision needed:** Choose scheduled Sunday reports, dashboard, or an explicitly approved combination.

**Source:** Scope Lock v3 --- NS-19; VoC v3 --- VOC-077

**Section 4 --- Validations and Blocking Rules**

**VALID-01 --- Credit check on Sales Order and Delivery Note**

**What the user is trying to do**

A Salesperson is submitting a Sales Order, or an authorised user is submitting a Delivery Note.

**When MAIA must intervene**

When the applicable Customer credit-limit or overdue-payment rule fails.

**What MAIA must do**

MAIA must apply the configured intervention at Sales Order and Delivery Note, but not at Invoice. Whether the intervention is a warning or a complete stop is not decided.

**What MAIA must explain to the user**

Whether the credit-limit or overdue rule failed.

Customer limit, outstanding and relevant term information.

That David is the final approver under the locked route.

How to assign the document to the credit controller.

**Why the rule is needed**

Macro Frozen wants to stop further exposure when the Customer has exceeded the agreed credit position or has not paid according to terms.

**What happens next**

The user assigns the document to David; David approves or rejects; the user receives the outcome.

**Unsure**

Warn-only or complete stop?

What overdue tolerance applies?

Block on order value plus outstanding, or outstanding alone?

Can Apple override?

**Applies to:** Sales Order, Delivery Note\
**Source:** Scope Lock v3 --- SL-04, SL-10 and NS-20

**VALID-02 --- Independent credit-control switches**

**What the user is trying to do**

An authorised Finance user is setting Customer credit controls.

**When MAIA must intervene**

When the system evaluates the Customer for a Sales Order or Delivery Note.

**What MAIA must do**

MAIA must separately respect:

Credit limit enforced: Yes/No.

Overdue block enabled: Yes/No.

**What MAIA must explain to the user**

Which control is enabled and which control caused the intervention.

**Why the rule is needed**

Macro Frozen distinguishes amount exposure from overdue-payment control.

**What happens next**

The applicable rule is checked; disabled rules do not block that Customer.

**Applies to:** Customer, Sales Order, Delivery Note\
**Source:** Scope Lock v3 --- SL-04 toggle naming note

**VALID-03 --- Middle price band requires CJ approval**

**What the user is trying to do**

A Salesperson is saving or submitting a Quotation, Sales Order or Invoice at a price below the customer/default price but at or above the minimum.

**When MAIA must intervene**

When the entered price falls in that middle band.

**What MAIA must do**

MAIA must hold the price for CJ's approval rather than allowing it to proceed automatically.

**What MAIA must explain to the user**

Customer/default price.

Proposed price.

Minimum price.

CJ as the approver.

How to send the request.

**Why the rule is needed**

Macro Frozen wants Sales flexibility above the floor while retaining Sales Manager control.

**What happens next**

CJ approves or rejects; the Salesperson receives the outcome.

**Applies to:** Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-03

**VALID-04 --- Price outside minimum or maximum**

**What the user is trying to do**

A Salesperson is setting a price below the minimum or above the maximum on a Quotation, Sales Order or Invoice.

**When MAIA must intervene**

When the price is outside the configured range.

**What MAIA must do**

MAIA must not accept the entered price. The locked behaviour states that the price returns to the minimum, a warning is shown and the user is offered a route to David.

**What MAIA must explain to the user**

Proposed price.

Minimum and maximum price.

That David must authorise the exception.

How to request approval.

**Why the rule is needed**

David wants MAIA to prevent staff from using a stale or commercially unacceptable price.

**What happens next**

David approves or rejects; the Salesperson is notified.

**Unsure**

For an above-maximum price, confirm whether returning the value to the minimum is genuinely intended or whether it should return to the maximum.

**Applies to:** Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-11

**VALID-05 --- Customer-specific price may be fully locked**

**What the user is trying to do**

A Salesperson is changing a customer-specific price.

**When MAIA must intervene**

When that Customer's pricing configuration is marked as fully locked.

**What MAIA must do**

MAIA must prevent the Salesperson from changing the price.

**What MAIA must explain to the user**

That the Customer uses a locked price and who may authorise a change.

**Why the rule is needed**

Some Macro Frozen customers have fixed prices that Sales should not alter.

**What happens next**

The user uses the locked price or contacts the authorised price controller.

**Unsure**

The customers or rule used to apply the full lock are not identified.

**Applies to:** Customer, Product price, Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-03 and SL-11; VoC v3 --- VOC-013

**VALID-06 --- Salesperson customer access restriction**

**What the user is trying to do**

A Salesperson is searching for or opening a Customer.

**When MAIA must intervene**

When the Customer is assigned to a different active Salesperson.

**What MAIA must do**

MAIA must prevent access to that Customer's record, pricing and outstanding information.

**What MAIA must explain to the user**

That the Customer is not assigned to the current user.

**Why the rule is needed**

Macro Frozen expressly prohibits cross-salesperson customer visibility.

**What happens next**

The user contacts the authorised owner or manager outside the restricted record.

**Applies to:** Customer, Product price, customer outstanding information\
**Source:** Scope Lock v3 --- SL-05; VoC v3 --- VOC-019

**VALID-07 --- Invoice quantity cannot exceed Delivery Note quantity**

**What the user is trying to do**

Grace or another authorised Finance user is creating or submitting an Invoice.

**When MAIA must intervene**

When an Invoice quantity exceeds the related Delivery Note quantity.

**What MAIA must do**

MAIA must completely stop the Invoice from proceeding until the quantity is corrected.

**What MAIA must explain to the user**

Which item and quantity exceed the Delivery Note.

**Why the rule is needed**

Macro Frozen's SQL document flow requires Invoice quantities to stay within the delivered quantity.

**What happens next**

Finance corrects the Invoice or the underlying Delivery Note through the authorised process.

**Applies to:** Delivery Note, Invoice\
**Source:** VoC v3 --- VOC-027; Scope Lock v3 --- SL-07

**VALID-08 --- Prevent duplicate Invoice**

**What the user is trying to do**

An authorised user is submitting an Invoice from a Sales Order or Delivery Note that already has a submitted Invoice.

**When MAIA must intervene**

When the same source would create a duplicate Invoice.

**What MAIA must do**

MAIA must stop submission.

**What MAIA must explain to the user**

The existing Invoice reference and the source document already used.

**Why the rule is needed**

Macro Frozen identified duplicate Invoice creation as an unacceptable accounting error.

**What happens next**

The user opens the existing Invoice or corrects the source relationship.

**Applies to:** Sales Order, Delivery Note, Invoice\
**Source:** VoC v3 --- VOC-027; Scope Lock v3 --- SL-07

**VALID-09 --- SQL running numbers cannot be overridden**

**What the user is trying to do**

A user is creating a Sales Order, Delivery Note, Invoice or other SQL-synchronised document.

**When MAIA must intervene**

When the user attempts to replace or override the running document ID.

**What MAIA must do**

MAIA must prevent the override.

**What MAIA must explain to the user**

That the document number follows the controlled sequence.

**Why the rule is needed**

Macro Frozen requires document numbering to conform to SQL.

**What happens next**

The document uses the generated number.

**Applies to:** Sales Order, Delivery Note, Invoice\
**Source:** VoC v3 --- VOC-027; Scope Lock v3 --- SL-07

**VALID-10 --- Ambiguous payment must not post automatically**

**What the user is trying to do**

Finance is matching a bank statement entry or payment slip to a Customer and Invoice.

**When MAIA must intervene**

When payer name, reference, amount or Invoice information does not produce a clear match.

**What MAIA must do**

MAIA must require Finance to select or correct the Customer and Invoice before posting.

**What MAIA must explain to the user**

Extracted payer, date, amount and reference.

Possible Customers and Invoices.

Why the match is uncertain.

**Why the rule is needed**

Macro Frozen receives payments from names that may differ from the Customer name and needs to prevent incorrect knock-off.

**What happens next**

Finance confirms the match; only then may MAIA update SQL.

**Applies to:** Payment, Customer, Invoice\
**Source:** Scope Lock v3 --- SL-02; VoC v3 --- VOC-007 and VOC-049

**VALID-11 --- Do not generate Delivery Note or Invoice automatically after amended Sales Order**

**What the user is trying to do**

A user has submitted an amended Sales Order and expects downstream documents.

**When MAIA must intervene**

After the amended Sales Order is submitted.

**What MAIA must do**

MAIA must wait for Grace's separate request rather than automatically generating a Delivery Note or Invoice.

**What MAIA must explain to the user**

That the Sales Order is confirmed and the next document requires a separate Finance action.

**Why the rule is needed**

Grace retains human control over final document generation.

**What happens next**

Grace requests the required Delivery Note or Invoice.

**Applies to:** Sales Order, Delivery Note, Invoice\
**Source:** Scope Lock v3 --- SL-07 explicit-request nuance

**Section 5 --- Client-Specific Automated Rules**

*Only automatic behaviour that requires a client-specific condition, value, mapping, sequence or outcome is included. Standard MAIA behaviour is excluded.*

**AUTO-01 --- Create a draft Sales Order from the forwarded order**

**When it happens**

A Salesperson forwards a customer order to the single MAIA WhatsApp number.

**Information MAIA uses**

Customer message or PO content.

SQL Customer and Item data.

MAIA Product prices.

Customer assignment and available notes.

**What MAIA must do automatically**

Prepare a draft Sales Order for the Salesperson to review, correct and submit.

**Expected result**

The Salesperson performs self-service order entry rather than sending the paperwork to an office administrator.

**Why the client needs it**

The locked workflow replaces the superseded office-admin order relay.

**Unsure**

Customer PO extraction and matching are not locked; the rule is confirmed for general forwarded orders, not the full PO mechanism.

**Applies to:** Sales Order\
**Source:** Scope Lock v3 --- AS-04, SL-01 and SL-06

**AUTO-02 --- Map Customer ownership from the SQL Agent field**

**When it happens**

Customer data is read from SQL or refreshed in MAIA.

**Information MAIA uses**

The SQL Customer Agent field/code.

**What MAIA must do automatically**

Assign each Customer to the matching active Salesperson.

**Expected result**

MAIA customer visibility mirrors Macro Frozen's SQL ownership.

**Why the client needs it**

The client uses the Agent field as the existing source of customer ownership.

**Unsure**

The spelling/code mapping for Ben / Arben must be verified against SQL.

**Applies to:** Customer\
**Source:** Scope Lock v3 --- SL-08; VoC v3 --- VOC-032

**AUTO-03 --- Default unassigned and legacy Customers to David**

**When it happens**

A Customer has no active matching Agent, or the Agent belongs to a former salesperson.

**Information MAIA uses**

The SQL Customer Agent field and active-salesperson list.

**What MAIA must do automatically**

Assign the Customer to David.

**Expected result**

Unassigned and legacy Customers remain visible to an accountable owner.

**Why the client needs it**

Grace confirmed this is how Macro Frozen treats unassigned customers.

**Applies to:** Customer\
**Source:** Scope Lock v3 --- SL-08; VoC v3 --- VOC-032

**AUTO-04 --- Exclude CK customers from normal sales-territory logic**

**When it happens**

A Customer's SQL Agent is CK.

**Information MAIA uses**

The SQL Agent code.

**What MAIA must do automatically**

Keep those Customers outside the active CJ / Ben / Queenie territory mapping unless Macro Frozen later reassigns them.

**Expected result**

Third-party driver/commission customers are not incorrectly treated as ordinary salesperson-owned Customers.

**Why the client needs it**

CK is a third-party driver/agent rather than an active Macro Frozen salesperson.

**Applies to:** Customer\
**Source:** Scope Lock v3 --- SL-08; Fireflies Macrofrozen Client Scope Lock Clarification, 13 Jul 2026

**AUTO-05 --- Apply the latest MAIA selling price**

**When it happens**

A Salesperson creates or edits a Quotation, Sales Order or Invoice.

**Information MAIA uses**

Customer-specific price.

Wholesale or retail price.

Minimum and maximum price.

Latest price updated by David.

**What MAIA must do automatically**

Use the applicable latest MAIA price as the starting price and apply the configured approval rules to any change.

**Expected result**

Sales starts from the controlled current price rather than an old WhatsApp image or memory.

**Why the client needs it**

Macro Frozen currently has no enforceable price source.

**Unsure**

The exact priority between customer-specific, wholesale and retail price when more than one value exists should be confirmed if not already inherent in the price master.

**Applies to:** Product price, Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-03; VoC v3 --- VOC-010, VOC-012 and VOC-013

**AUTO-06 --- Update prices from the structured template**

**When it happens**

David or an authorised price-maintenance user uploads the Macro Frozen price template.

**Information MAIA uses**

The item identifiers and price fields in the approved template.

**What MAIA must do automatically**

Update the applicable MAIA selling prices.

**Expected result**

Future Sales Orders use the newly approved prices.

**Why the client needs it**

Macro Frozen changes multiple item prices according to market conditions and cannot rely on scattered WhatsApp messages.

**Unsure**

No backup authorised uploader is identified.

**Applies to:** Product price\
**Source:** Scope Lock v3 --- SL-03; VoC v3 --- VOC-010 and VOC-011

**AUTO-07 --- Default the Sales Order payment term**

**When it happens**

A Sales Order is created.

**Information MAIA uses**

Customer default payment term.

Company default payment term.

Cash-in-advance term.

**What MAIA must do automatically**

Apply the first available value in that order; leave the field empty if none exists.

**Expected result**

The Sales Order receives the intended client-specific payment term without an arbitrary value.

**Why the client needs it**

The credit check depends on consistent Customer terms.

**Applies to:** Sales Order, Customer payment terms\
**Source:** Scope Lock v3 --- SL-13

**AUTO-08 --- Extract payment details**

**When it happens**

Finance uploads or forwards a bank statement or payment slip.

**Information MAIA uses**

The uploaded evidence.

**What MAIA must do automatically**

Extract payer name, date, amount and reference.

**Expected result**

Finance starts matching from structured payment information.

**Why the client needs it**

Payment references and payer names frequently differ from the SQL Customer name.

**Applies to:** Payment\
**Source:** Scope Lock v3 --- SL-02; VoC v3 --- VOC-007

**AUTO-09 --- Suggest clear Customer and Invoice payment matches**

**When it happens**

Payment details have been extracted.

**Information MAIA uses**

Payer name.

Date.

Amount.

Reference.

Customer and outstanding Invoice information.

**What MAIA must do automatically**

Suggest clear Customer and Invoice matches without posting them.

**Expected result**

Finance can confirm easy matches and focus attention on uncertain cases.

**Why the client needs it**

Macro Frozen wants assistance without autonomous financial posting.

**Unsure**

The confidence rule that separates a clear match from an ambiguous match is not stated as a client-configured value.

**Applies to:** Payment, Customer, Invoice\
**Source:** Scope Lock v3 --- SL-02

**AUTO-10 --- Synchronise confirmed records to SQL**

**When it happens**

An authorised user confirms or submits an in-scope Sales Order, Delivery Note, Invoice or Payment.

**Information MAIA uses**

The confirmed MAIA document and the available SQL integration.

**What MAIA must do automatically**

Push or synchronise the confirmed record to SQL where the integration supports that document.

**Expected result**

SQL remains the accounting/customer/item reference without requiring duplicate entry for supported records.

**Why the client needs it**

MAIA is an operational layer above SQL, not a replacement.

**Unsure**

Any unsupported SQL write operation must have a documented manual fallback; the exact integration coverage is not fully stated in the business sources.

**Applies to:** Sales Order, Delivery Note, Invoice, Payment\
**Source:** Scope Lock v3 --- SL-01, SL-02 and SL-07

**AUTO-11 --- Move stock only at Invoice or Sales Credit Note**

**When it happens**

An Invoice or Sales Credit Note is issued.

**Information MAIA uses**

The submitted document and item quantities.

**What MAIA must do automatically**

Apply the inbound/outbound stock movement at Invoice or Sales Credit Note issuance, not at Sales Order or Delivery Note.

**Expected result**

MAIA follows Macro Frozen's agreed stock-movement timing.

**Why the client needs it**

The client's SQL flow uses those documents as the stock-moving point.

**Unsure**

Sales Credit Note behaviour remains part of the not-yet-locked Credit Note scope and NS-18 testing.

**Applies to:** Invoice, Sales Credit Note, stock movement\
**Source:** Scope Lock v3 --- SL-07 stock movement timing; AS-03 and NS-18 caveat

**AUTO-12 --- Use whitelist-only notifications**

**When it happens**

Any MAIA event occurs.

**Information MAIA uses**

The Macro Frozen notification whitelist and role recipient.

**What MAIA must do automatically**

Send only explicitly agreed notification events and disable all other default notifications for Macro Frozen.

**Expected result**

Users receive the handoffs they requested without unrelated notification noise.

**Why the client needs it**

The client asked for complete visibility on specific events, not blanket notifications.

**Unsure**

Several whitelist entries---daily digest, reminder, low stock and Sunday reports---still lack complete trigger and recipient details.

**Applies to:** Notification settings\
**Source:** Scope Lock v3 --- SL-09

**AUTO-13 --- Record handoff notifications in the activity trail**

**When it happens**

A submitted Sales Order is sent to Lai or a draft Delivery Note is sent to Grace.

**Information MAIA uses**

The source document, event time, sender/creator and recipient.

**What MAIA must do automatically**

Create an activity-trail entry for the notification.

**Expected result**

Macro Frozen can verify that the handoff occurred.

**Why the client needs it**

The client treats silence as a failed workflow and wants provable visibility.

**Unsure**

Whether the confirmed Pick List notification also requires the same activity entry should be made explicit.

**Applies to:** Sales Order, Delivery Note, Pick List, activity history\
**Source:** Scope Lock v3 --- SL-12; VoC v3 --- VOC-061 to VOC-063

**AUTO-14 --- Route price approval by price band**

**When it happens**

A Salesperson enters a price outside the normal/customer price.

**Information MAIA uses**

Customer/default price.

Minimum price.

Maximum price.

Proposed price.

**What MAIA must do automatically**

Route a below-default but at/above-minimum price to CJ.

Route a below-minimum or above-maximum price to David.

**Expected result**

The correct person receives each price exception.

**Why the client needs it**

Macro Frozen has a three-tier approval ladder.

**Applies to:** Quotation, Sales Order, Invoice\
**Source:** Scope Lock v3 --- SL-03 and SL-11

**AUTO-15 --- Route a triggered credit exception to David**

**When it happens**

A Sales Order or Delivery Note fails an enabled credit check and the user selects the assign action.

**Information MAIA uses**

Customer credit controls.

Outstanding and payment-term information.

Document value.

Current user and document.

**What MAIA must do automatically**

Assign the exception to David and provide the approval context.

**Expected result**

A blocked document does not remain silent and unowned.

**Why the client needs it**

The client complained that blocked actions appeared broken when no one was notified.

**Unsure**

The credit trigger itself is not configurable until DECISION-01 is answered.

**Applies to:** Sales Order, Delivery Note, credit approval\
**Source:** Scope Lock v3 --- SL-10 and NS-20; VoC v3 --- VOC-061

**AUTO-16 --- Same-day delivery cutoff rule --- unresolved component**

**When it happens**

A Sales Order is created after the client's same-day delivery cutoff.

**Information MAIA uses**

Order time.

Requested delivery date.

The approved cutoff time.

**What MAIA must do automatically**

The intended date adjustment or warning is not sufficiently documented to state as a confirmed rule.

**Expected result**

A Sales Order should not receive an impossible same-day delivery date.

**Why the client needs it**

The July evidence identifies a specific cutoff rule, but contains a 1pm versus 2pm conflict.

**Unsure**

Obtain one written rule stating the cutoff and the resulting delivery date.

**Applies to:** Sales Order delivery date\
**Source:** Scope Lock v3 --- DG-3 / Client Confirmation Agenda

**Section 6 --- Blocking Configuration Decisions**

**DECISION-01 --- Credit warning or complete stop**

**Decision needed**

When a Customer fails the credit-limit or overdue check, should MAIA only warn the user or completely stop the Sales Order and Delivery Note? Also define the overdue tolerance, calculation basis and whether Apple can override.

**Why it must be answered**

The credit-block escalation cannot be configured or released without knowing what creates the block.

**Who should decide**

David, with Ivan facilitating the documented decision.

**Affected requirements**

DAVID-03, DAVID-05, APPLE-04, NOTIF-01, NOTIF-02, VALID-01, AUTO-15

**DECISION-02 --- Customer credit-limit ownership**

**Decision needed**

Who enters, approves and changes a Customer credit limit: CJ, Apple, David or a defined combination?

**Why it must be answered**

The current sources conflict, so role permissions cannot be finalised without risking Finance performing Sales authority or Sales changing Finance controls.

**Who should decide**

David, CJ and Grace / Apple.

**Affected requirements**

CJ-07, APPLE-01, APPLE-05, APPLE-06

**DECISION-03 --- Delivery Note creator and submitter**

**Decision needed**

Does Lai create the draft Delivery Note for Grace to review/submit, or does Grace request and create the Delivery Note after the Pick List handoff?

**Why it must be answered**

The locked sources assign both a Lai-created draft and a Grace explicit request. Product cannot configure ownership and notification order until one sequence is approved.

**Who should decide**

Grace, Lai and David.

**Affected requirements**

GRACE-01, GRACE-03, GRACE-08, LAI-02, NOTIF-07, VALID-11

**DECISION-04 --- Warehouse account model**

**Decision needed**

Will warehouse staff use individual accounts, one shared warehouse account/device, or paper with Lai as the only MAIA user?

**Why it must be answered**

User count, permissions, audit history and picker/checker accountability depend on this choice.

**Who should decide**

David and Lai.

**Affected requirements**

LAI-05, PICKER-01, PICKER-02, PICKER-03

**DECISION-05 --- Backup users for Lai and Grace**

**Decision needed**

Who takes over Lai's Pick List / Delivery Note duties and Grace's Delivery Note / Invoice / AR duties when either person is absent?

**Why it must be answered**

No backup path exists, so required handoffs can stop even when the primary workflow is configured correctly.

**Who should decide**

David.

**Affected requirements**

DAVID-06, GRACE-09, LAI-06, and backup recipients for NOTIF-06 to NOTIF-10

**DECISION-06 --- Aging and near-expiry alert settings**

**Decision needed**

What stock age or expiry threshold triggers the alert, how often does it repeat, what source supplies the expiry data and should Salespeople receive it?

**Why it must be answered**

The feature is accepted in direction, but the notification cannot be configured without the trigger and recipients.

**Who should decide**

David, with Lai and Sales consulted.

**Affected requirements**

NOTIF-10

**DECISION-07 --- Proof of Delivery scope and owner**

**Decision needed**

Should POD remain in driver WhatsApp groups, be uploaded by Finance, or be handled by a dedicated Driver MAIA account?

**Why it must be answered**

The current sources conflict, and adding a Driver role expands the user population beyond locked scope.

**Who should decide**

David, after Grace and Lai confirm the operational burden.

**Affected requirements**

DRIVER-01, DRIVER-02, DRIVER-03

**DECISION-08 --- Pick List notification trigger**

**Decision needed**

Should Grace receive the Pick List notification automatically on every confirmation or only when Lai selects a notify action?

**Why it must be answered**

SL-12 uses both "on demand" and "all three fire on every occurrence."

**Who should decide**

Grace and Lai.

**Affected requirements**

GRACE-02, NOTIF-08, AUTO-13

**DECISION-09 --- Same-day delivery cutoff**

**Decision needed**

Is the cutoff 1pm, 2pm or two different rules, and what delivery-date result applies after the cutoff?

**Why it must be answered**

The scheduled delivery-date rule cannot be configured from contradictory times.

**Who should decide**

David.

**Affected requirements**

AUTO-16

**Section 7 --- Source Coverage Note**

Reviewed sources include the latest Scope Lock v3, VoC v3, the 4 Jun discovery transcript and notes, the 13 Jul direct call with Grace, July training and UAT materials, and relevant Fireflies meetings through 29 Jul. A fresh Fireflies title search found no later Macro Frozen meeting through 3 Aug 2026.

Direct evidence is strongest for David, Grace, pricing, credit control, Sales territory isolation, payment matching and the notification handoffs. Evidence is weaker for CJ's manager-wide visibility, Lai's exact permissions, picker/checker system use, backups and the driver/POD design. The 29 Jul debrief is vendor-side only; it is used only where Scope Lock v3 subsequently records a locked or open requirement.

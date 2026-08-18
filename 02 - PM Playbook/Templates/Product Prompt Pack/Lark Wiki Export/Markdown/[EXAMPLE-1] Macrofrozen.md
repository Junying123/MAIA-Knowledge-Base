**\[EXAMPLE-1\] Macrofrozen**

**Document Information**

  ------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Field                           Details

  Client name                     Macro Frozen Sdn. Bhd. / Macrofood

  Project name                    Macro Frozen × MAIA Implementation

  Document version                v3.0

  Document status                 **Partially complete --- core workflows ready for validation**

  Date                            31 July 2026

  Processes covered               Customer order to invoice; price and credit approval; picking and actual-quantity confirmation; delivery and proof of delivery; payment matching and AR follow-up; customer and lead maintenance; price and catalogue maintenance; credit notes; low-stock and near-expiry alerts

  Business coverage               Macro Frozen's order-to-cash operation. Five warehouses were referenced, but the exact users and role deployment by warehouse were not provided.

  Scope exclusions                Purchasing module and purchasing page; MAIA-created GRN/stock receipt; AP reconciliation; merchant/QR settlement reconciliation; full WMS; warehouse barcode/QR scanning; route planning and full delivery-trip management; automated customer WhatsApp blasting; Facebook lead capture/auto-reply; fleet GPS/temperature integration; full ERP replacement

  Main project sources reviewed   13 May proposal; customer narrative; 4 June meeting notes and requirements-gathering transcript; requirements questionnaire; WhatsApp project chat and 8 June recap; Voice-of-Customer extraction; MAIA setup transcript

  Fireflies meetings reviewed     **Full transcripts:** Macrofrozen Client Scope Lock Clarification, 13 July; MAIA \<\> Macrofood Training, 16 July; Macrofrozen 2nd UAT, 28 July; Macro Frozen Debrief, 29 July. **Summary/metadata for corroboration:** Macrofrozen setup, 29 June; MRR & Macrofood, 17 July; Macrofrozen Discussion, 23 July; Macro Frozen UAT, 28 July

  Fireflies discovery coverage    Title searches were run for **Macro Frozen**, **Macrofrozen**, **Macrofood**, **David**, **Grace**, **CJ** and **Lai**. No title results were returned for the individual names. Participant-domain matching could not be completed because a confirmed Macro Frozen email domain was not provided.

  Key evidence limitations        No signed Scope Lock or signed workflow-approval record was found in the reviewed project files. The proposal, narrative and Voice of Customer explain needs but do not independently prove approved scope. Fireflies speaker labels are unreliable in mixed-language meetings. The 29 July debrief is internal implementation evidence, not client approval. Evidence for the warehouse picker/checker and driver roles is materially thinner than evidence for David, CJ, Lai and Grace.
  ------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Evidence Reference Key**

  -------------------- ------------------------------------------------------------------------ --------------------------------------------------------------
  Ref.                 Source                                                                   Use

  E1                   *Macro Frozen × MAIA Proposal*, 13 May 2026                              Proposed Phase 1 direction; not treated as signed approval

  E2                   *\[REQ\] Macro Frozen Customer Narrative Document*                       Business and sales-handover context; not treated as approval

  E3                   *4 Jun 26 --- Macro Frozen Meeting Notes*                                Discovery decisions, roles, exclusions and current workflow

  E4                   *\[F2F\] Macrofood Requirements Gathering* transcript, 4 June 2026       Primary current-state walkthrough and client questions

  E5                   Macro Frozen WhatsApp project chat, including 8 June recap               Project communications and interim handoffs

  E6                   Fireflies: *Macrofrozen Client Scope Lock Clarification*, 13 July 2026   Role, permission and workflow clarification

  E7                   Fireflies: *MAIA \<\> Macrofood Training*, 16 July 2026                  Role and product walkthrough corroboration

  E8                   Fireflies: *Macrofrozen 2nd UAT*, 28 July 2026                           End-to-end UAT and named-role alignment

  E9                   Fireflies: *Macro Frozen Debrief*, 29 July 2026                          Internal UAT findings and readiness defects

  E10                  Fireflies: *Macrofrozen Discussion*, 23 July 2026                        Packing-list and quantity-breakdown corroboration
  -------------------- ------------------------------------------------------------------------ --------------------------------------------------------------

**1. Purpose and Scope**

This document shows how Macro Frozen's main order-to-cash processes operate today and how the supported future process is intended to operate with MAIA. It is designed for client workflow validation, UAT briefing, scenario design, trainer preparation, role-based training and go-live readiness review.

The code-space flows are the primary process representation. Role cards explain only the effect on each user. Temporary defects and unfinished functions are kept in the Implementation Readiness Appendix so that they do not redefine the intended permanent workflow.

Validation labels mean:

**Directly supported:** stated or demonstrated in strong project evidence.

**Proposed future state:** operationally plausible and discussed, but not yet approved or accepted.

**Pending client/process-owner/MAIA confirmation:** a material rule, permission or behaviour remains unresolved.

**Partially validated:** the flow has been walked through or tested, but a material handoff, rule or exception is still open.

Physical weighing, paper warehouse work, route planning, cash custody, purchasing/GRN entry and final bank reconciliation remain outside MAIA.

**2. Role and Actor Coverage**

**2.1 Internal Client Roles**

  ------------------------------------------- ---------------------------------------------------------------------- ------------------------------------------------------------------ ------------------------------------------------------------------- ------------------------------- ------------------------------------------------------------------
  Role                                        Named or Candidate Representative                                      Process Owner                                                      Processes Involved                                                  Validation Status               Main Gap

  Standard Salesperson                        Candidate representatives: Queenie or Benz --- confirmation required   CJ; David is overall commercial owner                              Orders, leads, customer notes and draft SO                          Partially validated             Final draft, amendment and submission permissions

  Sales Manager / Order Submitter             CJ                                                                     CJ for sales execution; David for exception policy                 SO review, submission and exception routing                         Partially validated             Boundary between CJ submission and credit override

  Director / Credit and Price Controller      David                                                                  David                                                              Credit override, controlled price and stock-alert decisions         Partially validated             Delegation and closed-loop approval notifications

  Pricing and Catalogue Maintainer            David                                                                  David                                                              Bulk prices, customer prices, minimum prices and catalogue images   Partially validated             Final price governance, backup maintainer and catalogue template

  Warehouse Manager / Pick-List Coordinator   Lai                                                                    Lai operationally; David overall                                   Pick-list grouping, actual quantities and draft DN                  Partially validated             Final packing-list and quantity-breakdown method

  Warehouse Picker / Checker                  Named representative: Not yet identified                               Lai operationally; confirmation required                           Physical pick, weigh, check and sign-off                            Draft --- validation required   Named users, segregation and variance rule

  Finance / Accounts                          Grace                                                                  Grace operationally; David owns policy --- confirmation required   DN, invoice, credit note, payment matching and overdue follow-up    Partially validated             Final permissions, credit-note behaviour and AR readiness

  Driver / Delivery User                      Named representative: Not yet identified                               Not yet identified                                                 Delivery status, POD and cash handoff                               Draft --- validation required   Driver identity, permissions and third-party route
  ------------------------------------------- ---------------------------------------------------------------------- ------------------------------------------------------------------ ------------------------------------------------------------------- ------------------------------- ------------------------------------------------------------------

David performs two distinct roles: commercial controller and price/catalogue maintainer. CJ is both an active salesperson and the sales manager/order submitter.

**2.2 External Actors**

  ---------------------------------- -------------------------------------------------------------------------------------------- ---------------------------------------------------------- -------------------------------------------------
  Actor                              Role in the Workflow                                                                         Validation Relevance                                       Main Gap

  Customer                           Sends orders, confirms ambiguities, receives goods/documents and provides payment evidence   Validate message formats and delivery/payment exceptions   No single standard order format

  External finance consultant        Completes final bank reconciliation                                                          Confirm handoff boundary from Grace                        Exact exception handoff not documented

  Third-party delivery provider      May deliver goods and return POD                                                             Confirm whether access is required                         Access and POD method unresolved

  SQL vendor / integration support   Supports SQL data access and connector issues                                                Technical confirmation only                                Document-level sync and fallback matrix pending
  ---------------------------------- -------------------------------------------------------------------------------------------- ---------------------------------------------------------- -------------------------------------------------

**2.3 Systems and Operational Dependencies**

  --------------------------------------- ----------------------------------------------------------------------- ----------------------------------------------------------------
  System / Dependency                     Role                                                                    Source of Truth / Boundary

  MAIA chatbot and web/mobile             Workflow, drafts, controls, documents, notifications and reports        Intended operational workflow layer

  SQL / SQLC                              Accounting records and existing master/transaction data                 Accounting source of truth; exact document sync matrix pending

  WhatsApp                                Customer orders, customer communication and current internal handoffs   Remains the customer communication channel

  Printed pick list and warehouse scale   Physical picking and actual-weight evidence                             Physical source for actual picked quantity

  Excel packing list                      Existing breakdown and duplicate-entry working document                 Permanent future use unresolved

  Bank statement and payment slips        Payment evidence                                                        Human confirmation remains required

  Paper DN / invoice / signed DO          Delivery execution and evidence                                         Remains operationally relevant

  Fleet GPS/temperature service           Separate delivery evidence                                              Integration is out of current scope

  WMS / barcode system                    Potential future warehouse control                                      Out of current scope
  --------------------------------------- ----------------------------------------------------------------------- ----------------------------------------------------------------

**3. End-to-End Before / After Operating Model**

**Before MAIA**

  ------------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends WhatsApp order / PO / voice note\
  ↓\
  SALESPERSON Interprets shorthand → Forwards order to company WhatsApp group\
  ↓\
  DAVID / OFFICE Consolidates mixed orders → Coordinates picking and delivery\
  ↓\
  WAREHOUSE Receives paper list → Picks → Weighs → Writes actuals by hand\
  ↓\
  GRACE Re-keys actuals in SQL → Creates DN → Creates invoice\
  ↓\
  DRIVER Delivers goods → Returns signed DO / photo through WhatsApp\
  ↓\
  GRACE Matches payments manually → Records in SQL / Excel\
  ↓\
  CONSULTANT Completes final bank reconciliation outside MAIA

  ------------------------------------------------------------------------------

**After MAIA**

  -----------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends WhatsApp order / PO / voice note\
  ↓\
  SALESPERSON Forwards to MAIA → Reviews and corrects draft Sales Order\
  ↓\
  MAIA Checks customer, item, UOM, price, credit and order details\
  ↓\
  CJ / CONTROLLER Submits conforming SO or resolves a controlled exception\
  ↓\
  LAI Receives submitted SO → Groups orders → Prints pick list\
  ↓\
  PICKER/CHECKER Picks → Weighs → Records actual kg / box detail on paper\
  ↓\
  LAI Updates actuals in MAIA → Creates draft Delivery Note\
  ↓\
  GRACE Reviews / submits DN → Creates invoice → Sends supported data to SQL\
  ↓\
  DRIVER Delivers → Attaches proof of delivery to the DN\
  ↓\
  GRACE Confirms payment match → Sends supported payment record to SQL\
  ↓\
  CONSULTANT Completes final bank reconciliation outside MAIA

  -----------------------------------------------------------------------------

**Main Operating Changes**

Order information moves from a mixed internal WhatsApp group into a structured MAIA Sales Order.

CJ and authorised controllers become explicit submission and exception points.

Lai becomes the formal owner of the submitted-order-to-draft-DN handoff.

Warehouse picking and weighing remain physical and paper-supported; MAIA records the confirmed result.

Grace reviews derived documents instead of rebuilding every document from a separate packing list.

Route planning, cash custody, purchasing/GRN entry and final bank reconciliation remain manual or outside MAIA.

**4. Major Process Flows**

**4.1 Customer Order to Invoice**

**Process Purpose**

The process begins when a customer sends an order to a salesperson. It produces a confirmed Sales Order, physically picked goods, a Delivery Note and an invoice. Sales, the controller, Lai, warehouse staff and Grace participate.

**Before MAIA**

  -------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends order by WhatsApp / PO / voice note\
  ↓\
  SALESPERSON Interprets item, cut, quantity and delivery request\
  ↓\
  SALESPERSON Forwards understood order to internal WhatsApp group\
  ↓\
  DAVID / OFFICE Consolidates orders → Prepares warehouse work\
  ↓\
  WAREHOUSE Picks goods → Weighs actual quantity → Writes on paper\
  ↓\
  GRACE Re-keys final quantity into SQL\
  ↓\
  GRACE Creates DN → Creates invoice\
  ↓\
  DRIVER Receives documents and delivers goods

  -------------------------------------------------------------------

**After MAIA**

  -----------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends order by WhatsApp / PO / voice note\
  ↓\
  SALESPERSON Forwards / enters order in MAIA\
  ↓\
  MAIA Creates draft Sales Order\
  ↓\
  SALESPERSON Reviews customer, item, UOM, quantity, price and remarks\
  ↓\
  CJ / CONTROLLER Submits conforming SO or resolves exception\
  ↓\
  LAI Receives SO → Creates and prints pick list\
  ↓\
  WAREHOUSE Picks → Weighs → Records actual quantities\
  ↓\
  LAI Updates actuals → Creates draft DN\
  ↓\
  GRACE Reviews / submits DN → Creates and submits invoice\
  ↓\
  SQL Receives supported confirmed documents

  -----------------------------------------------------------------------

**What Changes**

The salesperson reviews a structured draft rather than relying only on free-form group messages.

A saved draft is not operationally ready until an authorised user submits it.

Lai receives the submitted order and owns pick-list preparation.

Actual quantity remains a human-confirmed warehouse result.

Grace becomes the final document controller, not the first person to re-key every warehouse detail.

**Main Exception Flow**

  --------------------------------------------------------------
  Plaintext\
  SALESPERSON Reviews draft Sales Order\
  ↓\
  MAIA Checks price, credit and required information\
  ↓\
  Exception found?\
  ↙ ↘\
  NO YES\
  ↓ ↓\
  CJ Submits SALES saves draft and requests controller action\
  ↓ ↓\
  LAI Receives CONTROLLER approves, rejects or returns\
  ↓\
  SALES / CJ revises or resumes

  --------------------------------------------------------------

**Process Validation**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Validation status:** Partially validated.

**Validation basis:** Current workflow was walked through on 4 June; the future end-to-end path was trained and exercised in July. \[E3, E4, E6, E7, E8\]

**Main unresolved decision:** Sales permissions and the exact price/credit exception chain. See OD-01 to OD-04 and OD-17.

**4.2 Price and Credit Approval**

**Process Purpose**

This process prevents unauthorised low prices and unacceptable credit exposure. It begins when MAIA detects a controlled price or credit condition and ends when an authorised controller approves, rejects or returns the order.

**Before MAIA**

  ---------------------------------------------------------------------------
  Plaintext\
  SALESPERSON Checks price / customer status using SQL, WhatsApp or memory\
  ↓\
  SALESPERSON Notices special price or payment concern\
  ↓\
  SALESPERSON Contacts David through WhatsApp / phone / conversation\
  ↓\
  DAVID Reviews customer history and commercial context\
  ↓\
  DAVID Gives informal proceed / revise / stop instruction\
  ↓\
  SALES / OFFICE Continues or changes the order

  ---------------------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  SALESPERSON Saves reviewed draft Sales Order\
  ↓\
  MAIA Applies configured minimum-price and credit checks\
  ↓\
  Controlled exception?\
  ↙ ↘\
  NO YES\
  ↓ ↓\
  CJ Submits SO SALES requests authorised review\
  ↓ ↓\
  LAI Receives SO DAVID / CONTROLLER reviews order\
  ↓\
  Approve / reject / return\
  ↓\
  Order owner resumes or revises

  --------------------------------------------------------------

**What Changes**

Price and credit controls become visible against the Sales Order.

The decision remains human; MAIA does not decide commercial exceptions.

The order stays traceable rather than being approved only in a separate conversation.

An authorised user---not a standard salesperson---releases the controlled order.

The exact controller delegation and system behaviour remain to be locked.

**Main Exception Flow**

  -------------------------------------------------------------------------
  Plaintext\
  MAIA Blocks / warns on price or credit\
  ↓\
  SALESPERSON Saves draft → Requests controller action\
  ↓\
  CONTROLLER Reviews customer, order, limit, overdue and requested price\
  ↓\
  Decision\
  ↙ ↓ ↘\
  APPROVE REVISE REJECT\
  ↓ ↓ ↓\
  CONTROLLER Submits SALES updates Order remains stopped\
  ↓ ↓\
  ORDER OWNER Receives outcome / continues customer follow-up

  -------------------------------------------------------------------------

**Process Validation**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Validation status:** Partially validated; approval mechanics are pending MAIA and client confirmation.

**Validation basis:** David's controller role is directly supported. UAT exposed incomplete escalation and notification behaviour. \[E3, E6, E8, E9\]

**Main unresolved decision:** OD-02 to OD-04.

**4.3 Picking and Actual-Quantity Confirmation**

**Process Purpose**

This process converts a submitted Sales Order into physically confirmed goods and actual quantities. It begins when Lai receives a submitted SO and ends when the checked actual quantity is ready for the draft DN.

**Before MAIA**

  ------------------------------------------------------------------
  Plaintext\
  DAVID / OFFICE Consolidates customer orders from WhatsApp\
  ↓\
  DAVID / OFFICE Prepares paper / Excel picking or packing list\
  ↓\
  WAREHOUSE Receives list → Locates and picks goods\
  ↓\
  PICKER Weighs actual kg / boxes → Writes values on paper\
  ↓\
  CHECKER Checks item and quantity → Signs / returns paper\
  ↓\
  LAI / GRACE Re-enters customer, item and weight into Excel / SQL

  ------------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  CJ / CONTROLLER Submits Sales Order\
  ↓\
  MAIA Places order in Lai\'s operational queue\
  ↓\
  LAI Selects / groups orders by delivery need or area\
  ↓\
  LAI Creates and prints MAIA pick list\
  ↓\
  PICKER Picks goods → Weighs each relevant box / unit\
  ↓\
  CHECKER Verifies product, total and box breakdown\
  ↓\
  LAI Updates actual quantity in MAIA\
  ↓\
  LAI Creates draft Delivery Note for Grace

  --------------------------------------------------------------

**What Changes**

The pick list is generated from submitted orders instead of retyped from mixed messages.

Lai owns the operational queue and grouping decision.

Physical picking, weighing and written warehouse evidence remain manual.

Actual kg---not the requested estimate---drives the downstream document.

The future treatment of a separate Excel packing list and box-level breakdown remains unresolved.

**Main Exception Flow**

  ----------------------------------------------------------------------------
  Plaintext\
  PICKER / CHECKER Finds short pick, wrong item or material weight variance\
  ↓\
  LAI Stops downstream document preparation\
  ↓\
  Can warehouse correct directly?\
  ↙ ↘\
  YES NO / CUSTOMER IMPACT\
  ↓ ↓\
  WAREHOUSE Re-picks / reweighs SALES / CJ confirms revised outcome\
  ↓ ↓\
  CHECKER Rechecks LAI records approved actual quantity\
  \\ /\
  ↓ ↓\
  LAI Creates draft DN only after confirmed result

  ----------------------------------------------------------------------------

**Process Validation**

**Current-state completeness:** Partial; the physical flow is known, but named picker/checker ownership is missing.

**Future-state completeness:** Partial.

**Validation status:** Draft for warehouse validation.

**Validation basis:** Actual-weight and carton/box problems were repeatedly described and exercised, but the final box-breakdown design was still proposed. \[E3, E4, E8, E9, E10\]

**Main unresolved decision:** OD-07, OD-10 and OD-17.

**4.4 Delivery and Proof of Delivery**

**Process Purpose**

This process provides the driver with the delivery documents and preserves evidence that the goods were delivered. It begins after Grace confirms the DN/invoice and ends when Finance can retrieve the POD against the delivery.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  GRACE Creates / prints DN and invoice\
  ↓\
  DRIVER Receives documents and goods\
  ↓\
  DRIVER Plans route using existing knowledge\
  ↓\
  DRIVER Delivers goods → Obtains signed DO / takes photo\
  ↓\
  DRIVER Sends proof to delivery WhatsApp group\
  ↓\
  GRACE Identifies and stores proof manually\
  ↓\
  GRACE Searches WhatsApp evidence when a dispute occurs

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  GRACE Submits DN / invoice and prepares delivery documents\
  ↓\
  DRIVER Views authorised DN and receives paper documents\
  ↓\
  DRIVER Plans route manually\
  ↓\
  DRIVER Delivers goods → Obtains signed DO / photo\
  ↓\
  DRIVER Marks delivery → Uploads POD against the DN\
  ↓\
  MAIA Keeps POD with the transaction\
  ↓\
  GRACE Retrieves evidence directly for follow-up or dispute

  --------------------------------------------------------------

**What Changes**

POD moves from a general WhatsApp group to the specific Delivery Note.

The driver receives restricted document access rather than wider sales or finance permissions.

Route planning remains manual and outside the MAIA delivery-trip module.

Grace no longer needs to catalogue every POD from a group chat.

The actual driver account and minimum POD standard still require approval.

**Main Exception Flow**

  -------------------------------------------------------------------------
  Plaintext\
  DRIVER Cannot complete normal delivery\
  ↓\
  Reason?\
  ↙ ↓ ↘\
  CUSTOMER GOODS OTHER\
  ABSENT REJECTED ISSUE\
  \\ \| /\
  ↓ ↓ ↓\
  DRIVER Records evidence and contacts Grace / responsible user\
  ↓\
  GRACE / SALES Decides redelivery, return, credit or customer follow-up\
  ↓\
  MAIA / SQL Updates only after the approved business decision

  -------------------------------------------------------------------------

**Process Validation**

**Current-state completeness:** Partial.

**Future-state completeness:** Partial.

**Validation status:** Proposed future state --- driver validation required.

**Validation basis:** Current WhatsApp POD problems and the proposed restricted driver role are supported, but the actual driver did not validate the workflow. \[E4, E8, E9\]

**Main unresolved decision:** OD-14 and OD-15.

**4.5 Payment Matching and AR Follow-Up**

**Process Purpose**

This process identifies who paid, allocates the payment to the correct customer and invoice, and passes confirmed records into accounting. It begins with a payment slip, bank-statement item or driver cash handoff and ends with the confirmed entry and external bank reconciliation.

**Before MAIA**

  --------------------------------------------------------------------
  Plaintext\
  CUSTOMER / DRIVER Sends payment slip or returns cash information\
  ↓\
  GRACE Reviews WhatsApp, bank statement and Excel records\
  ↓\
  GRACE Identifies customer / invoice using name, amount and memory\
  ↓\
  GRACE Records payment / collector details in SQL and Excel\
  ↓\
  SALES Chases overdue customer when Finance escalates\
  ↓\
  DAVID Handles serious collection escalation\
  ↓\
  CONSULTANT Completes final bank reconciliation

  --------------------------------------------------------------------

**After MAIA**

  -----------------------------------------------------------------------
  Plaintext\
  CUSTOMER / DRIVER Provides payment slip, bank item or cash reference\
  ↓\
  GRACE Uploads / forwards evidence to MAIA\
  ↓\
  MAIA Extracts payer, amount, date and reference\
  ↓\
  MAIA Suggests customer / invoice match\
  ↓\
  GRACE Confirms, corrects or allocates the payment\
  ↓\
  SQL Receives supported confirmed payment entry\
  ↓\
  GRACE / SALES Follows up unresolved or overdue accounts\
  ↓\
  CONSULTANT Completes final bank reconciliation

  -----------------------------------------------------------------------

**What Changes**

MAIA is intended to suggest a match; Grace remains the approving human.

Payer-name mismatch and allocation exceptions remain Finance decisions.

Physical cash custody and handover remain manual.

Final bank reconciliation remains with the external consultant.

AR workflow acceptance and exception rules are not yet complete.

**Main Exception Flow**

  -----------------------------------------------------------------
  Plaintext\
  MAIA Suggests payment match\
  ↓\
  GRACE Confident match?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  GRACE Confirms Checks payer alias, amount, date and references\
  ↓ ↓\
  SQL Records One payment / many invoices / partial payment?\
  ↓\
  GRACE allocates manually or holds unresolved

  -----------------------------------------------------------------

**Process Validation**

**Current-state completeness:** Complete at operational-summary level.

**Future-state completeness:** Partial.

**Validation status:** Proposed future state --- finance UAT required.

**Validation basis:** The current mismatch and manual reconciliation problem is well supported; the dedicated future AR workspace and exceptions were not accepted. \[E3, E4, E9\]

**Main unresolved decision:** OD-12, OD-13 and OD-15.

**4.6 Customer and Lead Maintenance**

**Process Purpose**

This process records sales opportunities, customer knowledge and the customer record used by orders. It begins when Sales identifies a lead or new customer information and ends when the authorised record is available for future sales work.

**Before MAIA**

  ------------------------------------------------------------------------
  Plaintext\
  SALESPERSON Receives enquiry / lead through ads, WhatsApp or referral\
  ↓\
  SALESPERSON Keeps details in WhatsApp, memory or personal notes\
  ↓\
  SALESPERSON Nurtures lead manually\
  ↓\
  SALES / OFFICE Creates or updates customer information in SQL\
  ↓\
  SALESPERSON Uses personal knowledge for future orders and preferences

  ------------------------------------------------------------------------

**After MAIA**

  ----------------------------------------------------------------------
  Plaintext\
  SALESPERSON Receives enquiry / identifies lead\
  ↓\
  SALESPERSON Creates lead and records notes in MAIA\
  ↓\
  SALESPERSON Updates follow-up information\
  ↓\
  Ready to become customer?\
  ↙ ↘\
  NO YES\
  ↓ ↓\
  SALESPERSON Continues lead AUTHORISED USER confirms customer record\
  ↓\
  MAIA / SQL Makes approved customer data available for orders

  ----------------------------------------------------------------------

**What Changes**

Lead and customer knowledge becomes searchable and less dependent on memory.

Macro Frozen's July direction was to use a simpler lead flow rather than separate lead and prospect stages.

Standard sales users are expected to see their own records; wider access is permission-controlled.

Customer-master creation and amendment remain governed actions.

Exact ownership, reassignment and SQL synchronisation rules require confirmation.

**Process Validation**

**Current-state completeness:** Partial.

**Future-state completeness:** Partial.

**Validation status:** Partially validated.

**Validation basis:** The simplified lead flow and own-customer visibility were included in training/UAT, but master-data governance was not fully approved. \[E6, E7, E8\]

**Main unresolved decision:** OD-05.

**4.7 Price and Catalogue Maintenance**

**Process Purpose**

This process maintains the price data used by Sales and produces customer-facing catalogue images. It begins when David decides a price change or catalogue update and ends when the structured price is available and the reviewed catalogue is manually sent.

**Before MAIA**

  ----------------------------------------------------------------------
  Plaintext\
  DAVID Decides price changes\
  ↓\
  DAVID Maintains working prices in Excel / messages\
  ↓\
  DAVID Uses ChatGPT / product images to create catalogue artwork\
  ↓\
  DAVID / SALES Shares latest image or price message through WhatsApp\
  ↓\
  SALESPERSON Uses the version available when preparing an order

  ----------------------------------------------------------------------

**After MAIA**

  ---------------------------------------------------------------------
  Plaintext\
  DAVID Decides standard, customer or minimum-price change\
  ↓\
  DAVID Updates MAIA bulk price grid / approved upload\
  ↓\
  DAVID Reviews effective price records\
  ↓\
  MAIA Uses maintained price in Sales Order preparation and controls\
  ↓\
  DAVID Generates catalogue image using approved products / template\
  ↓\
  DAVID Reviews catalogue\
  ↓\
  DAVID / SALES Forwards catalogue manually through WhatsApp

  ---------------------------------------------------------------------

**What Changes**

A price message or image alone no longer completes the operational price update.

Structured MAIA price data becomes the source used by the order workflow.

Minimum and customer-specific pricing can support visible order controls.

Catalogue forwarding remains manual; automated customer blasting is out of scope.

The final catalogue format, price hierarchy and backup maintainer remain open.

**Process Validation**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Validation status:** Partially validated.

**Validation basis:** Bulk price maintenance was shown during UAT; final catalogue and governance decisions were not approved in the evidence reviewed. \[E3, E4, E7, E8\]

**Main unresolved decision:** OD-03 and OD-08.

**4.8 Low-Stock and Near-Expiry Alerts**

**Process Purpose**

This process gives responsible users proactive visibility of low-stock and near-expiry items so that they can decide replenishment, promotion or stock-clearance action.

**Before MAIA**

  -----------------------------------------------------------------------
  Plaintext\
  DAVID / USER Remembers to open or print SQL stock / aging report\
  ↓\
  DAVID Reviews low-stock or aging items\
  ↓\
  DAVID Decides replenishment, discount or sales action\
  ↓\
  DAVID / SALES Communicates instruction manually\
  ↓\
  SALES / OFFICE Executes follow-up outside a controlled alert workflow

  -----------------------------------------------------------------------

**After MAIA**

  ----------------------------------------------------------------
  Plaintext\
  MAIA Runs scheduled low-stock / near-expiry check\
  ↓\
  MAIA Sends agreed PDF / notification to configured recipients\
  ↓\
  DAVID / LAI Reviews item, quantity and aging information\
  ↓\
  DAVID Decides replenishment, price or sales action\
  ↓\
  SALES / OFFICE Executes the approved business response

  ----------------------------------------------------------------

**What Changes**

Users receive proactive information instead of relying only on a remembered report.

MAIA surfaces the issue but does not automatically discount, purchase or dispose of stock.

David remains the commercial decision-maker; Lai may need operational visibility.

Final recipients, fields, thresholds and acceptance criteria remain open.

Purchasing action, if required, continues in SQL/outside MAIA.

**Process Validation**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Validation status:** Partially validated; report awaiting acceptance.

**Validation basis:** The requirement was agreed in discovery and a preliminary version was shown in July, but it was not accepted as final. \[E3, E8, E9\]

**Main unresolved decision:** OD-16.

**4.9 Credit Note and Billing Correction**

**Process Purpose**

This process corrects a return, rejection, overbilling, weight difference or other agreed billing issue. It begins after Finance receives an approved reason for correction and ends when the appropriate credit note is recorded and linked to the original transaction.

**Before MAIA**

  --------------------------------------------------------------
  Plaintext\
  CUSTOMER / SALES Reports return, rejection or billing issue\
  ↓\
  GRACE Reviews original invoice and operational evidence\
  ↓\
  GRACE Decides SQL credit-note treatment\
  ↓\
  GRACE Creates credit note in SQL\
  ↓\
  GRACE Applies stock or non-stock treatment\
  ↓\
  CUSTOMER Receives correction / reference

  --------------------------------------------------------------

**After MAIA**

  --------------------------------------------------------------
  Plaintext\
  CUSTOMER / SALES Reports approved correction requirement\
  ↓\
  GRACE Opens original transaction in MAIA\
  ↓\
  GRACE Selects the appropriate SCN / CCN treatment\
  ↓\
  GRACE Enters reason, quantity, value and reference\
  ↓\
  GRACE Reviews and submits credit note\
  ↓\
  SQL Receives supported confirmed credit-note record

  --------------------------------------------------------------

**What Changes**

The correction is intended to remain linked to the original transaction.

Grace must choose the correct stock or non-stock treatment.

The accounting decision remains human.

The SCN/CCN connector and exact rules were not accepted during the evidence period.

Until accepted, Finance may need to continue the transaction in SQL.

**Process Validation**

**Current-state completeness:** Partial.

**Future-state completeness:** Partial.

**Validation status:** Proposed future state --- Finance and connector acceptance required.

**Validation basis:** The business need and distinct stock effects are supported; implementation was newly completed and untested. \[E3, E4, E8, E9\]

**Main unresolved decision:** OD-11 and OD-13.

**5. Role Change Cards**

**5.1 Standard Salesperson**

**Role Snapshot**

**Named representative:** Candidate representatives: Queenie or Benz --- confirmation required.

**Process owner:** CJ; David is overall commercial owner.

**Relevant processes:** Customer orders, leads, customer notes and draft SO.

**Current systems/channels:** Customer WhatsApp, internal WhatsApp group, SQL and personal knowledge.

**Future systems/channels:** MAIA chatbot/WhatsApp, MAIA web/mobile and SQL-derived data.

**Change impact:** High.

**Validation status:** Partially validated.

**Validation basis:** Standard-sales responsibilities were described and exercised in July, but no formal representative or final permission matrix was approved. \[E6, E8\]

**Role's Future Working Flow**

  -----------------------------------------------------------------------------
  Plaintext\
  CUSTOMER Sends order / enquiry\
  ↓\
  SALESPERSON Forwards to MAIA or creates lead\
  ↓\
  MAIA Produces draft / displays available customer information\
  ↓\
  SALESPERSON Reviews and corrects customer, item, UOM, quantity and remarks\
  ↓\
  MAIA Applies price and credit controls\
  ↓\
  CJ / CONTROLLER Receives conforming draft or exception request

  -----------------------------------------------------------------------------

**What Changes for This User**

Reviews and corrects a structured draft instead of relying only on free-form internal messages.

Must distinguish draft, blocked and submitted status.

Cannot silently override controlled price or credit conditions.

Maintains lead/customer notes in a shared system.

Continues to interpret customer shorthand and clarify ambiguous orders.

**What the User Must Learn**

How to start an order from WhatsApp or MAIA.

Which fields must be checked before saving.

How to confirm UOM and customer-specific preparation remarks.

How to recognise a price or credit block.

Who receives the draft or exception next.

**UAT Scenarios Required**

Clear customer order creates the correct draft.

Ambiguous item/UOM requires correction.

Minimum-price or credit block routes correctly.

User sees only permitted leads, customers and orders.

**Open Decision**

OD-01, OD-05 and OD-17.

**Role Readiness**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Named representative:** Candidate.

**Representative validation:** Partial.

**Process-owner approval:** Partial.

**Ready for UAT design:** With conditions.

**Ready for training design:** With conditions.

**Main blocker:** Final permission boundary and approval handoff.

**5.2 Sales Manager / Order Submitter**

**Role Snapshot**

**Named representative:** CJ.

**Process owner:** CJ for sales execution; David for exception policy.

**Relevant processes:** Draft review, SO submission and exception routing.

**Current systems/channels:** WhatsApp, SQL, phone and customer knowledge.

**Future systems/channels:** MAIA chatbot/web/mobile and SQL integration.

**Change impact:** High.

**Validation status:** Partially validated.

**Validation basis:** CJ was explicitly described as sales manager and SO submitter in July UAT. \[E6, E8\]

**Role's Future Working Flow**

  ---------------------------------------------------------------------
  Plaintext\
  SALESPERSON Completes draft Sales Order\
  ↓\
  CJ Reviews customer, item, UOM, price, credit and delivery details\
  ↓\
  Conforming order?\
  ↙ ↘\
  YES NO\
  ↓ ↓\
  CJ Submits Returns draft or routes controller exception\
  ↓ ↓\
  LAI Receives SALES / CONTROLLER acts

  ---------------------------------------------------------------------

**What Changes for This User**

Becomes the explicit operational submission point for conforming orders.

Reviews a structured order rather than an informal group message.

Must not treat a saved draft as warehouse-ready.

Routes controlled exceptions rather than bypassing them.

Gains broader sales visibility than a standard salesperson.

**What the User Must Learn**

How to locate and review another user's draft.

Which checks must be completed before submission.

Which cases require David or another controller.

How to return an incomplete order.

How submission hands the order to Lai.

**UAT Scenarios Required**

Submit a conforming order created by another salesperson.

Return an incomplete or incorrect draft.

Route a controlled exception.

Confirm Lai receives the submitted order.

**Open Decision**

OD-01, OD-02 and OD-06.

**Role Readiness**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Named representative:** Yes.

**Representative validation:** Partial.

**Process-owner approval:** Partial.

**Ready for UAT design:** With conditions.

**Ready for training design:** With conditions.

**Main blocker:** Final CJ authority and reliable warehouse handoff.

**5.3 Director / Credit and Price Controller**

**Role Snapshot**

**Named representative:** David.

**Process owner:** David.

**Relevant processes:** Credit override, controlled price, alerts and escalation.

**Current systems/channels:** WhatsApp, SQL, printed reports and personal oversight.

**Future systems/channels:** MAIA chatbot/web/mobile, alerts and SQL-derived data.

**Change impact:** High.

**Validation status:** Partially validated.

**Validation basis:** David's credit and price authority is directly supported, but delegation and notification mechanics remain open. \[E3, E6, E8, E9\]

**Role's Future Working Flow**

  ---------------------------------------------------------------------
  Plaintext\
  SALES Requests controlled exception\
  ↓\
  MAIA Presents Sales Order and available price / credit information\
  ↓\
  DAVID Reviews customer history and commercial context\
  ↓\
  Approve, revise or reject\
  ↓\
  DAVID Submits approved order or returns / stops it\
  ↓\
  ORDER OWNER Receives outcome and continues customer follow-up

  ---------------------------------------------------------------------

**What Changes for This User**

Acts against the transaction rather than only in a separate WhatsApp conversation.

Makes the same commercial decision with better visibility and traceability.

Must use the correct price or credit authority.

Receives proactive stock alerts where configured.

Needs a documented backup-controller arrangement.

**What the User Must Learn**

How to open the exact blocked order.

Which credit and price information is available.

Which action releases the order.

How to reject or return an order without losing the draft.

How the order owner is informed.

**UAT Scenarios Required**

Approve and reject a credit exception.

Approve and reject a below-minimum price.

Process a request while another user owns the order.

Test the unavailable-controller fallback.

**Open Decision**

OD-02 to OD-04 and OD-16.

**Role Readiness**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Named representative:** Yes.

**Representative validation:** Partial.

**Process-owner approval:** Partial.

**Ready for UAT design:** With conditions.

**Ready for training design:** With conditions.

**Main blocker:** Delegation and closed-loop approval notification.

**5.4 Pricing and Catalogue Maintainer**

**Role Snapshot**

**Named representative:** David.

**Process owner:** David.

**Relevant processes:** Bulk pricing, customer prices, minimum prices and catalogues.

**Current systems/channels:** Excel, ChatGPT, product images and WhatsApp.

**Future systems/channels:** MAIA price grid/upload, catalogue output and WhatsApp forwarding.

**Change impact:** High.

**Validation status:** Partially validated.

**Validation basis:** Current price/catalogue practice is directly supported; bulk pricing was shown, but final governance and catalogue design remain open. \[E3, E4, E7, E8\]

**Role's Future Working Flow**

  -----------------------------------------------------------------
  Plaintext\
  BUSINESS NEED Requires price or catalogue update\
  ↓\
  DAVID Decides new price / product selection\
  ↓\
  DAVID Updates MAIA price data\
  ↓\
  DAVID Verifies effective standard, customer and minimum prices\
  ↓\
  MAIA Uses price in Sales Order workflow\
  ↓\
  DAVID Generates and reviews catalogue image\
  ↓\
  DAVID / SALES Forwards catalogue manually

  -----------------------------------------------------------------

**What Changes for This User**

Must update structured price data, not only circulate an image.

Becomes responsible for verifying the effective system price.

Customer-specific and minimum-price controls affect the sales workflow.

Catalogue generation becomes more repeatable.

Manual review and customer forwarding remain.

**What the User Must Learn**

How to use the bulk price grid or approved upload.

How standard, customer and minimum prices interact.

How to verify the effective result.

How to generate and review the catalogue.

How to correct an incorrect price safely.

**UAT Scenarios Required**

Bulk price update and verification.

Customer-specific price.

Minimum-price control on a new order.

Wholesale/retail catalogue sample.

**Open Decision**

OD-03 and OD-08.

**Role Readiness**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Named representative:** Yes.

**Representative validation:** Partial.

**Process-owner approval:** Partial.

**Ready for UAT design:** With conditions.

**Ready for training design:** With conditions.

**Main blocker:** Price governance and final catalogue acceptance.

**5.5 Warehouse Manager / Pick-List Coordinator**

**Role Snapshot**

**Named representative:** Lai.

**Process owner:** Lai operationally; David overall.

**Relevant processes:** Submitted-order intake, pick list, actual quantity and draft DN.

**Current systems/channels:** WhatsApp group, Excel, paper and route knowledge.

**Future systems/channels:** MAIA web/mobile, printed MAIA pick list and draft DN.

**Change impact:** High.

**Validation status:** Partially validated.

**Validation basis:** Lai was explicitly assigned pick-list and draft-DN ownership in July. \[E6, E8, E9\]

**Role's Future Working Flow**

  --------------------------------------------------------------
  Plaintext\
  CJ / CONTROLLER Submits Sales Order\
  ↓\
  LAI Receives order and checks delivery information\
  ↓\
  LAI Groups orders → Creates and prints pick list\
  ↓\
  PICKER/CHECKER Returns checked actual quantities\
  ↓\
  LAI Updates actuals in MAIA\
  ↓\
  LAI Creates draft DN\
  ↓\
  GRACE Receives draft for review and submission

  --------------------------------------------------------------

**What Changes for This User**

Owns a formal order queue rather than searching a mixed group.

Generates the pick list from submitted Sales Orders.

Records the confirmed actual quantity once in MAIA.

Creates a draft DN but does not submit it.

Continues to make practical grouping decisions and use paper on the warehouse floor.

**What the User Must Learn**

How to identify all submitted orders requiring action.

How to group and print the pick list.

How to update actual and box-level values.

How to stop and escalate a variance.

How to create and hand off the draft DN.

**UAT Scenarios Required**

Multiple orders grouped by area/delivery date.

Kg, carton and unequal-box actuals.

Short pick or correction.

Draft DN notification to Grace.

**Open Decision**

OD-06, OD-07, OD-09, OD-10 and OD-17.

**Role Readiness**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Named representative:** Yes.

**Representative validation:** Partial.

**Process-owner approval:** Partial.

**Ready for UAT design:** With conditions.

**Ready for training design:** With conditions.

**Main blocker:** Final quantity-breakdown and Lai-to-Grace handoff.

**5.6 Warehouse Picker / Checker**

**Role Snapshot**

**Named representative:** Not yet identified.

**Process owner:** Lai operationally; confirmation required.

**Relevant processes:** Physical picking, weighing, checking and sign-off.

**Current systems/channels:** Paper pick list, scale, goods and verbal/WhatsApp escalation.

**Future systems/channels:** Printed MAIA pick list and physical process; system update by an authorised user.

**Change impact:** High.

**Validation status:** Draft --- validation required.

**Validation basis:** The activity is well described, but no named picker/checker validated the role or final document. \[E3, E4, E8\]

**Role's Future Working Flow**

  --------------------------------------------------------------
  Plaintext\
  LAI Provides printed MAIA pick list\
  ↓\
  PICKER Locates and prepares the correct product\
  ↓\
  PICKER Weighs each relevant box / unit → Writes actuals\
  ↓\
  CHECKER Verifies product, total, breakdown and remarks\
  ↓\
  PICKER/CHECKER Signs / returns completed paper\
  ↓\
  LAI Updates the confirmed result in MAIA

  --------------------------------------------------------------

**What Changes for This User**

Receives a MAIA-generated document instead of a manually rebuilt list.

Continues to perform all physical picking and weighing.

Must record actual---not ordered---quantity clearly.

Needs traceable picker/checker sign-off.

Does not gain WMS or barcode automation in this phase.

**What the User Must Learn**

How to read the new pick-list fields.

How to record unequal box weights.

How to handle wrong item, short pick and reweighing.

When to stop and escalate.

How sign-off supports the downstream DN.

**UAT Scenarios Required**

Normal kg pick.

Multiple boxes with different weights.

Wrong item / short pick.

Picker and checker accountability.

**Open Decision**

OD-07 and OD-10.

**Role Readiness**

**Current-state completeness:** Partial.

**Future-state completeness:** Partial.

**Named representative:** No.

**Representative validation:** No.

**Process-owner approval:** Partial.

**Ready for UAT design:** No.

**Ready for training design:** No.

**Main blocker:** Named representatives and approved warehouse control rules.

**5.7 Finance / Accounts**

**Role Snapshot**

**Named representative:** Grace.

**Process owner:** Grace operationally; David owns credit/payment policy --- confirmation required.

**Relevant processes:** DN, invoice, credit note, payment matching and overdue follow-up.

**Current systems/channels:** SQL, Excel, WhatsApp, bank statements and paper.

**Future systems/channels:** MAIA finance/document workspace, SQL integration and payment uploads.

**Change impact:** High.

**Validation status:** Partially validated.

**Validation basis:** Grace's DN/invoice responsibility is directly supported; CN and AR future workflows remain unaccepted. \[E6, E8, E9\]

**Role's Future Working Flow**

  --------------------------------------------------------------------
  Plaintext\
  LAI Sends draft DN with confirmed actual quantities\
  ↓\
  GRACE Reviews customer, item, quantity and supporting pick result\
  ↓\
  GRACE Submits DN → Creates / submits invoice\
  ↓\
  SQL Receives supported documents\
  ↓\
  CUSTOMER/DRIVER Provides payment evidence / cash reference\
  ↓\
  MAIA Suggests payment match\
  ↓\
  GRACE Confirms allocation → Sends supported payment entry to SQL

  --------------------------------------------------------------------

**What Changes for This User**

Reviews a draft DN rather than rebuilding it from a separate list.

Remains the final control for DN and invoice.

Uses MAIA assistance for payment matching but retains approval responsibility.

Must choose the correct credit-note treatment.

Continues to support external final bank reconciliation.

**What the User Must Learn**

How to review, return and submit a draft DN.

How to create the invoice from confirmed quantities.

How to process the correct credit-note type.

How to confirm or correct a suggested payment match.

Which records remain in SQL and when to use the fallback.

**UAT Scenarios Required**

DN quantity mismatch and return.

Invoice from confirmed actual quantity.

Stock and non-stock credit note.

Payer mismatch, partial payment and multi-invoice allocation.

**Open Decision**

OD-09, OD-11 to OD-13 and OD-15.

**Role Readiness**

**Current-state completeness:** Complete.

**Future-state completeness:** Partial.

**Named representative:** Yes.

**Representative validation:** Partial.

**Process-owner approval:** Partial.

**Ready for UAT design:** With conditions for DN/invoice; No for CN/AR until readiness items close.

**Ready for training design:** With conditions.

**Main blocker:** Final permissions, credit-note acceptance and AR exception rules.

**5.8 Driver / Delivery User**

**Role Snapshot**

**Named representative:** Not yet identified. The regular driver was referred to only as "Uncle" in an internal debrief.

**Process owner:** Not yet identified.

**Relevant processes:** Delivery, POD and cash handoff.

**Current systems/channels:** Paper DO, WhatsApp delivery group, phone camera and cash.

**Future systems/channels:** Proposed restricted MAIA driver role plus paper documents.

**Change impact:** Medium.

**Validation status:** Draft --- validation required.

**Validation basis:** Current POD pain is supported, but the future driver role was proposed internally and not validated with the actual user. \[E4, E9\]

**Role's Future Working Flow**

  --------------------------------------------------------------
  Plaintext\
  GRACE Confirms delivery documents\
  ↓\
  DRIVER Receives authorised DN and paper documents\
  ↓\
  DRIVER Plans route manually → Delivers goods\
  ↓\
  DRIVER Obtains signed DO / photo\
  ↓\
  DRIVER Marks delivery and uploads POD\
  ↓\
  GRACE Retrieves proof and handles follow-up

  --------------------------------------------------------------

**What Changes for This User**

Gains restricted access to relevant delivery records.

Attaches POD to the specific DN rather than only sending it to a group.

Continues to self-manage the route.

Cannot cancel accounting documents or delete controlled evidence.

Physical cash handover remains manual.

**What the User Must Learn**

How to find the correct delivery.

What evidence is required.

How to mark delivered and upload proof.

What to do for failed, rejected or partial delivery.

How to reference cash collected.

**UAT Scenarios Required**

Normal delivery with signed DO.

Photo POD and later-added proof.

Failed/rejected delivery.

Permission test and cash handoff.

**Open Decision**

OD-14 and OD-15.

**Role Readiness**

**Current-state completeness:** Partial.

**Future-state completeness:** Partial.

**Named representative:** No.

**Representative validation:** No.

**Process-owner approval:** Partial.

**Ready for UAT design:** With conditions.

**Ready for training design:** No.

**Main blocker:** Driver identity, account permissions and approved POD/cash procedure.

**6. Cross-Role Handoffs**

  ---------------------- --------------------- -------------------------------------- --------------------------------------------------- --------------------------------- ---------------------------------------------
  From                   To                    Trigger                                Output / Handoff                                    Future Channel                    Main Gap

  Standard Salesperson   CJ / Controller       Draft reviewed or exception detected   Draft SO and exception reason                       MAIA assignment / notification    Draft/submit boundary and notification

  CJ / Controller        Lai                   SO submitted                           Submitted SO, delivery date, address and remarks    MAIA queue plus notification      Controlling handoff method

  Lai                    Picker / Checker      Picking run prepared                   Printed pick list                                   MAIA PDF on paper                 Final fields and print acceptance

  Picker / Checker       Lai                   Picking/check complete                 Actual total, box breakdown and sign-off            Completed paper                   Named users and variance rule

  Lai                    Grace                 Actuals confirmed                      Draft DN and supporting pick result                 MAIA draft and notification       Edit/reject rights and notification

  Grace                  Driver                DN/invoice ready                       Delivery documents and authorised delivery record   MAIA restricted view plus paper   Driver access and assignment

  Driver                 Grace                 Delivery completed or failed           POD, status, exception and cash reference           MAIA plus manual cash handoff     Proof standard and failed-delivery path

  Grace                  External consultant   Payment records prepared               Confirmed payment entries and unresolved items      SQL / existing process            Final reconciliation boundary

  Pricing Maintainer     Sales roles           Price update verified                  Effective standard/customer/minimum prices          MAIA price records                Backup ownership and effective-date control
  ---------------------- --------------------- -------------------------------------- --------------------------------------------------- --------------------------------- ---------------------------------------------

**7. Open Decisions and Validation Register**

  ---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------- -------------------------------------------- -------------------------------------------------------------------------- ---------------------------------
  ID         Decision or Question                                                                                                                                                   Related Process / Role              Required From                                Why It Matters                                                             Blocking Level

  OD-01      Which named users may create drafts, submit conforming SOs and amend an SO created by another user?                                                                    Order to Invoice; Salesperson; CJ   David and CJ                                 Defines accountability, permissions and training paths                     Blocking future-state approval

  OD-02      Is CJ authorised to override credit blocks, or is David the sole main controller? Who is the backup when David is unavailable?                                         Price/Credit; CJ; David             David                                        Prevents blocked orders and unauthorised exposure                          Blocking future-state approval

  OD-03      For a below-minimum price, may Sales save the requested value, does MAIA clamp it, and must the controller edit and submit the order?                                  Price/Credit; Sales; David          David and MAIA product owner                 Determines the real approval behaviour and audit trail                     Blocking configuration or build

  OD-04      Confirm the credit block: amount limit, overdue terms, previous unpaid invoice or configured combination. Confirm payment-term fallback when customer data is blank.   Price/Credit; Finance               David and Grace                              Incorrect rules can block normal orders or expose credit                   Blocking go-live readiness

  OD-05      Which sales users may create/amend customer master data, reassign customers and view another salesperson's customers?                                                  Customer/Lead; Sales                David and CJ                                 Protects customer ownership and SQL master data                            Blocking training preparation

  OD-06      Must every submitted SO immediately notify Lai, and is the MAIA queue or pushed PDF the controlling work instruction?                                                  Order; Picking                      David and Lai                                Prevents missed orders and duplicate WhatsApp work                         Blocking UAT preparation

  OD-07      Will the existing Excel packing list be retired, retained for selected orders or replaced by MAIA quantity breakdown? Which fields must print?                         Picking; Lai; Finance               David, Lai and Grace                         Determines the permanent warehouse/document workflow                       Blocking future-state approval

  OD-08      Approve price hierarchy, backup maintainer and catalogue design: wholesale/retail variants, fields, photos and output format.                                          Price/Catalogue                     David                                        Required to finish pricing and catalogue UAT/training                      Blocking training preparation

  OD-09      Confirm Lai's and Grace's exact DN rights: create, amend, return, submit, cancel and reopen.                                                                           Picking; Finance                    David, Lai and Grace                         Prevents duplicate or unauthorised documents                               Blocking future-state approval

  OD-10      Name picker/checker users, decide whether they must be different people, and define what variance requires Sales/customer reconfirmation.                              Picking; Warehouse                  David and Lai                                Required for accountability and unhappy-path UAT                           Blocking UAT preparation

  OD-11      Define when to use SCN versus CCN, which correction changes stock, and how the original invoice is referenced.                                                         Credit Note; Finance                Grace and David                              Prevents incorrect stock/accounting treatment                              Blocking UAT preparation

  OD-12      Approve AR rules for partial payment, one payment across invoices, payer-name mismatch, cash collection and overdue escalation.                                        Payment/AR; Finance                 Grace and David                              Required for safe finance UAT and posting                                  Blocking go-live readiness

  OD-13      Publish the document-level SQL integration matrix and fallback for SO, DN, invoice, CN and payment entry.                                                              All transaction roles               MAIA technical owner, SQL vendor and Grace   Training must not claim unsupported sync behaviour                         Blocking go-live readiness

  OD-14      Identify driver/process owner, approve permissions and minimum POD, and define third-party and failed-delivery handling.                                               Delivery; Driver                    David and Grace                              Required for account setup and delivery UAT                                Blocking training preparation

  OD-15      Define the cash handover and acknowledgment between driver and Finance.                                                                                                Delivery; Payment                   Grace and driver representative              Protects cash accountability                                               Blocking future-state approval

  OD-16      Confirm recipients, thresholds and required fields for low-stock and near-expiry alerts.                                                                               Stock Alerts; David; Lai            David                                        Prevents missed action or excessive alerts                                 Blocking configuration or build

  OD-17      Confirm the approved behaviour for kg, carton, box and piece orders, including whether any placeholder is used and when actual kg replaces requested quantity.         Order; Picking; Sales; Warehouse    David, Lai, Grace and MAIA product owner     Incorrect UOM behaviour can produce wrong pick, DN or invoice quantities   Blocking UAT preparation
  ---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------- -------------------------------------------- -------------------------------------------------------------------------- ---------------------------------

**8. UAT and Training Readiness**

  --------------------------------- --------------------------------------------------------------------------------------------- ------------------------------------------------------- ---------------------------------------------- ----------------------------------------
  Role                              Critical UAT Scenarios                                                                        Main Training Focus                                     Readiness                                      Condition

  Standard Salesperson              Clear order; ambiguous item/UOM; wrong customer; price/credit block; own-record permissions   Draft review, status, correction and escalation         With conditions                                OD-01, OD-03 to OD-05 and OD-17

  Sales Manager / Order Submitter   Review another user's draft; submit; return; route exception; handoff to Lai                  Submission responsibility and permission boundary       With conditions                                OD-01, OD-02 and OD-06

  Credit / Price Controller         Approve/reject price and credit; unavailable approver                                         Transaction-based approval and outcome handling         With conditions                                OD-02 to OD-04; IR-01 and IR-03

  Pricing / Catalogue Maintainer    Bulk update; customer price; minimum price; catalogue sample                                  Structured price source, verification and publication   With conditions                                OD-08 and accepted production data

  Warehouse Manager                 Receive/group orders; print; update actuals; draft DN                                         Queue ownership, actual quantities and Grace handoff    With conditions                                OD-06, OD-07, OD-09, OD-10 and OD-17

  Picker / Checker                  Normal pick; unequal boxes; short pick; correction/sign-off                                   Physical accuracy and traceable checking                No                                             Named representatives and OD-10

  Finance / Accounts                DN mismatch; invoice; stock/non-stock CN; payment mismatch/partial allocation                 Document control, human confirmation and SQL boundary   With conditions for DN/invoice; No for CN/AR   OD-09, OD-11 to OD-13; IR-08 and IR-09

  Driver / Delivery User            Normal POD; later proof; failed delivery; permission; cash                                    Restricted access, proof standard and cash reference    No                                             Named user, OD-14 and OD-15
  --------------------------------- --------------------------------------------------------------------------------------------- ------------------------------------------------------- ---------------------------------------------- ----------------------------------------

**9. External Systems and Dependencies**

  ------------------------------- ------------------------------------------ ----------------------------------------------------------------------------------- -------------------------------------- --------------------------------------------------------------------------------------------
  System / Party                  Role in Workflow                           Information Moving To / From It                                                     Interaction                            Source of Truth / Fallback

  SQL / SQLC                      Accounting and existing business records   Customers, items, stock references, SO, DN, invoice, CN, payments and outstanding   Integrated where supported             Accounting source of truth; purchasing and GRN remain in SQL; other fallback pending OD-13

  SQL vendor / API support        Integration access and issue resolution    Credentials, field mappings, sync status and errors                                 Technical                              Manual SQL work remains possible, but document fallback must be approved

  Customer WhatsApp               Order and customer communication           Orders, voice notes, payment slips and catalogue images                             Manual customer interaction            Remains the customer channel; automated blasting out of scope

  MAIA chatbot / web / mobile     Operational workflow                       Drafts, documents, controls, notifications, notes and reports                       Integrated within MAIA                 Intended workflow layer; state must remain consistent across interfaces

  Printed pick list / scale       Physical warehouse execution               Ordered quantity, actual kg, box breakdown and sign-off                             Manual                                 Physical evidence remains authoritative for actual quantity

  Excel packing list              Existing detailed working record           Customer, item and box/weight breakdown                                             Manual                                 Permanent future use pending OD-07

  Bank statement / payment slip   Payment evidence                           Payer, amount, date, reference and invoice information                              File/image plus human review           Grace confirms ambiguous matches

  External finance consultant     Final bank reconciliation                  SQL/payment records and bank information                                            Manual/external                        Final reconciliation remains outside MAIA

  Third-party delivery provider   Delivery and POD                           Delivery documents and proof                                                        Manual or proposed restricted access   MAIA access not approved; see OD-14

  Fleet GPS/temperature service   Location/temperature evidence              Truck location and temperature                                                      Separate external system               Integration out of scope

  WMS/barcode system              Potential future warehouse control         Location, barcode and inventory movement                                            Not integrated                         Full WMS and barcode/QR scanning out of scope
  ------------------------------- ------------------------------------------ ----------------------------------------------------------------------------------- -------------------------------------- --------------------------------------------------------------------------------------------

**10. Implementation Readiness Appendix**

  ---------- ------------------------------- --------------------------------------------------------------------------------------------- ------------------------------------------------------------------------- -------------------------------------------------------------------- ----------------------------------
  ID         Affected Process                Readiness Issue                                                                               Current Operational Effect                                                Required Resolution                                                  Owner if Known

  IR-01      Credit approval                 Chatbot lacked a complete request/notify/approve chain                                        Sales can save a blocked draft without a reliable controller handoff      Implement and acceptance-test closed-loop notification               MAIA product/technical team

  IR-02      Sales-to-warehouse handoff      Submitted-order notification and delivery-date visibility were incomplete                     Lai may need to inspect the list manually and can miss work               Configure pushed handoff and delivery-date visibility                MAIA team

  IR-03      Price approval                  Below-minimum warning and controller action were not finalised                                Sales may receive a warning without a usable approval route               Confirm behaviour and acceptance-test override                       MAIA product team / David

  IR-04      Pick-list document              Print layout, special characters, header fields and writing space had defects/open feedback   Printed working document may be incomplete or hard to use                 Print-test final PDF with real items and printer                     MAIA team / Lai

  IR-05      Lai-to-Grace handoff            Draft-DN and submitted-pick notifications were not fully configured                           Grace may not know a document is ready                                    Configure role-based notification and test full handoff              MAIA team

  IR-06      Quantity breakdown              MAIA stored total quantity; box-level breakdown was proposed after UAT                        Existing Excel/paper breakdown may still be required                      Implement or approve final pick-list/DN breakdown                    MAIA product/technical team

  IR-07      Mobile and chatbot continuity   Responsive layout and stale chatbot context caused confusion after web edits                  User may see outdated order details or blocked fields                     Fix layout and refresh active-order context                          MAIA technical team

  IR-08      Credit notes                    SCN/CCN connector was newly completed and not fully tested                                    Finance may need to continue CN in SQL                                    Complete connector testing and finance acceptance                    MAIA technical team / Grace

  IR-09      AR/payment matching             Finance workspace and exception rules were not accepted                                       Finance continues manual matching and SQL work                            Complete dedicated AR UAT with real exception cases                  MAIA product team / Grace

  IR-10      Stock alerts                    Low-stock and near-expiry output was not accepted as final                                    Users may receive incomplete or unsuitable output                         Agree recipients/fields and accept final report                      MAIA team / David

  IR-11      SQL test data                   UAT data used different sync cutoff dates by record type                                      Recent orders/invoices/payments may appear missing                        Perform controlled sync and verify counts before go-live             MAIA technical team / SQL vendor

  IR-12      Messaging channel               UAT used Telegram while the production WhatsApp path was pending verification                 Training behaviour may differ from production                             Complete WhatsApp verification and repeat critical tests             MAIA team / Macro Frozen

  IR-13      Sales reports/dashboard         Weekly summaries, conversion reports and dashboard were later-work discussions                Management reporting is not part of the validated core transaction flow   Keep outside core go-live until scope and acceptance are confirmed   MAIA product team / David

  IR-14      Driver role                     Restricted driver permissions were proposed but not configured with the actual driver         POD remains dependent on WhatsApp group practice                          Identify user, configure role and run mobile POD UAT                 Macro Frozen / MAIA team
  ---------- ------------------------------- --------------------------------------------------------------------------------------------- ------------------------------------------------------------------------- -------------------------------------------------------------------- ----------------------------------

**11. Final Completion Assessment**

  ------------------------------------------------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------------------
  Completion Criterion                                          Status               Evidence or Gap

  Approved scope established                                    Partial              Proposal, discovery and July clarification exist; no signed Scope Lock or workflow approval was found

  Relevant project sources reviewed                             Complete             Proposal, narrative, discovery notes/transcripts, chat, questionnaire and VoC reviewed

  Relevant Fireflies meetings reviewed or unavailable           Complete             Alias/title searches completed; four material full transcripts and supporting meeting metadata reviewed; domain search unavailable

  All major processes mapped before and after MAIA              Partial              Core order-to-invoice flows mapped; driver, CN and AR remain less mature

  All in-scope internal roles identified                        Partial              Main roles mapped; exact picker/checker and driver deployment remains unconfirmed

  Every internal role has a named or candidate representative   Partial              David, CJ, Lai and Grace identified; sales candidates identified; picker/checker and driver unnamed

  Material handoffs are documented                              Complete             Sales, approval, warehouse, finance, delivery and reconciliation handoffs mapped

  Manual and external-system activities are visible             Complete             Paper, weighing, Excel, SQL, WhatsApp, cash and external reconciliation remain explicit

  Open decisions are consolidated                               Complete             Material questions are contained in Section 7

  Validation status is evidence-based                           Complete             Attendance and internal discussion were not treated as client approval

  Workflows are ready for UAT design                            Partial              Sales/SO/DN/invoice conditionally ready; picker/checker, CN, AR and driver are not fully ready

  Workflows are ready for training design                       Partial              Role content is usable, but final permissions, documents and handoffs must be reflected before training is final
  ------------------------------------------------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------------------

**Overall Status: Partially Complete --- Core Workflows Ready for Validation**

The core customer-order-to-invoice operating model is sufficiently evidenced for a focused client validation session and conditional UAT/training preparation. It is not complete and validated because the signed scope baseline is missing, the sales/controller permission matrix is not fully locked, the warehouse quantity-breakdown design is unfinished, and the driver, credit-note and AR workflows still require named-user validation and operational acceptance.

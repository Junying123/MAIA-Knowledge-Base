**\[EXAMPLE-5\] Macrofrozen**

**Macro Frozen --- MAIA Configuration Requirements Blueprint**

**Date:** 31 Jul 2026\
**Client:** Macro Frozen Sdn. Bhd.\
**Prepared from:** Macro Frozen --- Scope Lock v3 (29 Jul 2026) and Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3 (29 Jul 2026).\
**Prompt basis:** Client Configuration Requirements Extraction Prompt supplied on 31 Jul 2026 (Pasted markdown(10).md).

*Both controlling references are marked draft. This blueprint treats them as the latest supplied operating references, not as proof of formal client acceptance. Scope Lock v3 also records that the 2nd UAT had no formal green/yellow/red verdict and no named signatory.*

**Source application note:** Scope Lock v3 controls approval and exclusions; VoC v3 controls client outcomes, pain points and evidence confidence. The directly supplied SOW/proposal, customer narrative, 4 Jun meeting notes and transcript, requirements questionnaire, setup transcript and WhatsApp export were used as supporting context only and were not allowed to override the two controlling references. The standalone 20 Jul before/after workflow, 28 Jul bug-fix checklist/raw UAT transcripts and client Lark feedback were not separately attached in this run; their consolidated findings are represented inside Scope Lock v3 and VoC v3.

**Evidence labels:** Confirmed · Strongly Inferred · Unresolved · Recommended\
**Configuration assessments:** Configurable · Likely Configurable --- Validation Required · Technical Assessment Required · Business Decision Required · Possible Product Gap · Outside Approved Scope

**Source Reference Key**

  ------------------------------------------------------------------ --------------------------------------------------------------------------------------------------------------------
  Reference                                                          Use in this blueprint

  Scope Lock v3                                                      Approval boundary, locked requirements, open decisions, exclusions and dependencies.

  VoC v3                                                             Client outcomes, operational pain, actor evidence and confidence.

  Ordermaia x MacroFrozen.pdf                                        SOW/proposal baseline; not used to override later scope decisions.

  \[REQ\] Macro Frozen Customer Narrative Document                   Sales-handover operating context and intended Phase 1 model; internal statements were not treated as client voice.

  4 Jun 26 - Macro Frozen Meeting Notes and F2F transcript           Workflow, role counts, pricing, credit, AR and picking context.

  Requirements questionnaire, setup transcript and WhatsApp export   Gaps, setup dependencies and observed implementation behaviour.
  ------------------------------------------------------------------ --------------------------------------------------------------------------------------------------------------------

**Section 1 --- Configuration Overview**

  ------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Field                                Details

  Client                               Macro Frozen Sdn. Bhd. / Macrofood

  Approved references used             **Controlling:** Scope Lock v3 and VoC v3, both dated 29 Jul 2026. **Supporting:** 13 May proposal/SOW; sales-handover customer narrative; 4 Jun meeting notes and F2F transcript; requirements questionnaire; 8 Jun setup transcript; WhatsApp export. Later before/after and 28--29 Jul UAT materials are represented through the controlling documents rather than separate standalone files in this run.

  In-scope processes                   SQL-backed customer/item lookup; one-number WhatsApp order intake; salesperson self-service draft SO review and submission; selling-price update and tiered approval; credit-limit/payment-term control; customer territory visibility; SO/DO/Invoice generation with human review; customer-to-agent assignment; AR customer-invoice matching with human confirmation; role-routed whitelist notifications; default payment-term cascade.

  In-scope MAIA touchpoints            User and Role Management; Customer Management; Product or Item Management; Sales Order; Order Approval; Credit Control; Pricing; Pick List; Warehouse; Delivery; Invoice; Payment; Dashboard; Reporting; Notification; Document Management; ERP Integration; Audit and History.

  Known or estimated user population   Confirmed operational names: David, CJ, Ben, Queenie, Grace, Apple and Lai. Krystle and Sean are known implementation/ops contacts but their production permissions are unresolved. Picker/checker count is unknown. A Delivery Driver population of 1--2 is agreed in principle only and is not locked.

  User groups identified               Owner/MD and final controller; Sales Manager; Sales Executives; Finance Manager/AR and document gate; Finance settings/credit terms; Warehouse Manager/Logistics; Warehouse Pickers/Checkers; Ops/IT support; possible Delivery Driver; external bank-reconciliation consultant outside MAIA.

  Main configuration areas             Least-privilege roles; customer ownership; price lists/floors/approval tiers; credit checks and overrides; order-to-pick-to-document handoffs; payment matching; notification whitelist and routing; SQL integration constraints; document preview; mobile access; audit history.

  Material source limitations          The controlling references remain draft. The 2nd UAT had no formal acceptance verdict or named signer; actual WhatsApp parity is untested because that round ran on Telegram; SQL access remains a dependency; warehouse/picker voice is thin; Grace/Lai claims from the latest round are partly based on checklist paraphrase; the 6 May Fireflies meeting remains uncovered. Standalone later UAT/before-after files were not independently re-read in this run.

  Possible scope changes found         AS-01 fresh-weight flow; AS-02 catalogue; AS-03 credit-note support; AS-05 customer notes; AS-06 dashboard/reminders; AS-07 quotation; AS-08 customer PO; AS-09 cost-price tracking; AS-10 SKU replacement; AS-11 quantity-breakdown tuples; AS-12 driver role/POD; AS-13 accelerated AR workspace. These are not locked and must not be treated as committed configuration without confirmation.
  ------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Macro Frozen requires a controlled order-to-cash workflow on top of SQL. Sales captures and submits orders, Warehouse confirms the real picked quantity, Finance controls payment matching and downstream documents, CJ handles the middle pricing tier, and David retains final authority over credit and high-risk pricing exceptions. MAIA must make each block and handoff visible; the client treats silent failure as system failure. SQL remains the customer, item and accounting master.

**Section 2 --- Users and Role Configurations**

**2.1 User and Role Summary**

  ------------------------------------------ ----------------------------------- -------- -------------------------- ---------------------------------------------------- ------------------------------------------------------------------------------------------------ -----------------------------------------------------
  User Group / Role                          Known Users                            Count Count Status               Role Assignment Status                               Main MAIA Responsibility                                                                         Evidence Status

  Owner / MD / Credit and Price Controller   David Chong                                1 Confirmed                  Assigned                                             Final credit approval, high-risk price approval, selling-price control and exception oversight   Confirmed --- Scope Lock SL-03, SL-04, SL-10, SL-11

  Sales Manager                              CJ Tan                                     1 Confirmed                  Assigned; credit-setup split with Apple unresolved   Own-customer order entry, middle-tier price approval, sales oversight                            Confirmed with unresolved authority split

  Sales Executives                           Ben, Queenie                               2 Confirmed                  Assigned through SQL Agent mapping                   Capture, review and submit orders for assigned customers                                         Confirmed --- SL-05, SL-08, AS-04

  Finance Manager / AR and Document Gate     Grace                                      1 Confirmed                  Assigned; split with Apple partly unresolved         Payment matching, draft-DN handoff and explicit document generation                              Confirmed

  Finance Settings / Credit Terms            Apple / Applle                             1 Confirmed                  Assigned broadly; lifecycle authority unresolved     Maintain finance-related customer settings, limits and terms                                     Confirmed with unresolved authority split

  Warehouse Manager / Logistics              Lai / Lim Jun Yan                          1 Confirmed                  Assigned                                             Receive orders, manage picking, confirm actual quantity and create draft DN                      Confirmed / partly dependent on AS-01

  Warehouse Pickers / Checkers               Names not supplied                       --- Unknown                    Access model unresolved                              Physically pick/check goods and record real quantity/weight                                      Strongly Inferred

  Ops / IT / Implementation Support          Krystle Wong, Sean Looi                    2 Confirmed known contacts   Production role unresolved                           Setup, coordination and support; no transaction authority evidenced                              Unresolved

  Delivery Driver                            "Uncle"; exact user(s) unresolved       1--2 Estimated                  Agreed in principle, not locked                      View/update DN and attach mandatory POD without route planning                                   Confirmed intent; possible scope change

  External Bank-Reconciliation Consultant    Name not supplied                          1 Confirmed existence        Outside MAIA                                         Final bank reconciliation outside MAIA                                                           Confirmed exclusion
  ------------------------------------------ ----------------------------------- -------- -------------------------- ---------------------------------------------------- ------------------------------------------------------------------------------------------------ -----------------------------------------------------

**2.2 Role Configuration Blocks**

**Role: Owner / MD / Credit and Price Controller --- David**

**Business mission**

David uses MAIA to keep control of financial-loss exceptions without remaining the manual coordinator of every routine order. He is the final credit approver and final controller for out-of-range pricing.

**Known users or expected population**

David Chong; count 1, confirmed. Assignment is clear. The breadth of general administrator access beyond these responsibilities is not fully documented.

**MAIA documents and touchpoints**

Customer; Item; Pricing; Sales Order; Quotation; Invoice; Order Approval; Credit Control; Notification; Dashboard; Audit and History; ERP Integration.

  ---------------- ------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------- ----------------- ------------------------------ ---------------------------------------------
  Behaviour Type   Business Requirement                                                                       Condition / Restriction                                                                                        Authority Level   Evidence Status                Configuration Assessment

  CAN              Upload and maintain the latest selling prices through the desktop price-update workflow.   Covers wholesale, retail and customer-specific selling prices. Exact template fields remain to be validated.   Person-specific   Confirmed --- SL-03            Likely Configurable --- Validation Required

  MAY APPROVE      Approve below-minimum or above-maximum price exceptions.                                   Override must be saved and auditable. CJ cannot replace David for the final tier.                              Person-specific   Confirmed --- SL-03, SL-11     Likely Configurable --- Validation Required

  MAY APPROVE      Approve or reject credit-blocked orders.                                                   Current locked design names David as sole final approver.                                                      Person-specific   Confirmed --- SL-04, SL-10     Likely Configurable --- Validation Required

  CAN              Submit a blocked order on the originating Sales user\'s behalf after approval.             Originating user, reason and override outcome must be recorded.                                                Person-specific   Confirmed --- SL-10            Likely Configurable --- Validation Required

  MAY VIEW         View the customer, order, credit and pricing information needed for approval.              Full unrestricted administrator visibility beyond business need is not evidenced.                              Person-specific   Strongly Inferred              Configurable

  MUST             Act on credit and final-price escalation notifications and create a recorded decision.     Notification ownership and rollout remain open dependencies.                                                   Person-specific   Confirmed --- SL-09 to SL-11   Likely Configurable --- Validation Required
  ---------------- ------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------- ----------------- ------------------------------ ---------------------------------------------

**Role-specific unresolved decisions**

Should credit control start as warn-only or hard block, what overdue tolerance applies, and is the basis outstanding alone or order value plus outstanding?

Can Apple ever override a blocked order, or does David remain sole final approver?

Which non-approval administrator functions, if any, does David require?

**Role: Sales Manager --- CJ**

**Business mission**

CJ sells to assigned customers, reviews Sales Orders and provides the middle approval tier when a proposed price is below the normal/customer price but remains at or above the minimum.

**Known users or expected population**

CJ Tan; count 1, confirmed. Mobile access is operationally important because the sources state he has no company laptop.

**MAIA documents and touchpoints**

Customer; Sales Order; Pricing; Order Approval; Credit Control; Notification; Audit and History.

  ---------------- ------------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------- --------------------------- -------------------------------------------- ---------------------------------------------
  Behaviour Type   Business Requirement                                                                                                     Condition / Restriction                                                                                  Authority Level             Evidence Status                              Configuration Assessment

  CAN              Forward customer orders to MAIA, review the draft and submit orders for assigned customers.                              Submission remains subject to price and credit controls.                                                 Role-level                  Confirmed --- AS-04, SL-05                   Configurable

  MAY APPROVE      Approve prices below the customer/default price but at or above the minimum.                                             Must not approve the final below-minimum/above-maximum tier. Self-approval behavior must be validated.   Person/role-specific        Confirmed --- SL-03                          Likely Configurable --- Validation Required

  CANNOT           Approve the final credit exception.                                                                                      David is the sole final credit approver under the current design.                                        Role-level                  Confirmed --- SL-10                          Configurable

  CANNOT           See other Sales users\' customer lists, pricing or outstanding data unless a manager exception is explicitly approved.   Scope Lock does not define a manager-wide visibility exception.                                          Role-level                  Confirmed baseline --- SL-05                 Business Decision Required

  CAN              Set a customer credit limit at customer creation.                                                                        This conflicts with Apple\'s finance role and must be reconciled before setup.                           Person-specific / unclear   Confirmed but conflicting --- SL-04          Business Decision Required

  MUST             Be able to receive and act on approval-related information through a mobile-usable channel.                              Actual WhatsApp channel parity remains untested.                                                         Person-specific             Confirmed operational dependency --- SL-10   Technical Assessment Required
  ---------------- ------------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------- --------------------------- -------------------------------------------- ---------------------------------------------

**Role-specific unresolved decisions**

Does CJ have own-territory visibility only, or team-wide Sales Manager visibility?

Does CJ create the initial credit limit while Apple maintains it, or does Apple own both?

Can CJ approve a request created from his own order?

**Role: Sales Executives --- Ben and Queenie**

**Business mission**

Sales Executives convert customer WhatsApp orders into reviewed Sales Orders for their own assigned customers. They must correct uncertain extraction and cannot bypass price or credit controls.

**Known users or expected population**

Ben and Queenie; count 2, confirmed. Customer ownership is assigned through the SQL Agent field.

**MAIA documents and touchpoints**

Customer; Sales Order; Pricing; Credit Control; Notification; Product or Item Management; Audit and History.

  ---------------- --------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------- ----------------- -------------------------------------------------------- ---------------------------------------------
  Behaviour Type   Business Requirement                                                                                Condition / Restriction                                                            Authority Level   Evidence Status                                          Configuration Assessment

  CAN              Forward customer messages to the single MAIA WhatsApp number.                                       Authorized staff only; no multi-number routing.                                    Role-level        Confirmed --- SL-06, AS-04                               Configurable

  CAN              Review, correct and submit the MAIA-created draft SO.                                               Must confirm customer, item, UOM, quantity, price and remarks before submission.   Role-level        Confirmed --- AS-04; VoC order-interpretation evidence   Configurable

  MAY VIEW         View assigned customers\' relevant prices, outstanding and order data.                              No cross-territory access.                                                         Role-level        Confirmed --- SL-05, SL-08                               Configurable

  CANNOT           View another Sales user\'s customer list, pricing or outstanding data.                              Customer ownership mirrors SQL Agent mapping.                                      Role-level        Confirmed --- SL-05                                      Configurable

  CANNOT           Approve credit exceptions or final price exceptions.                                                CJ handles the middle price tier; David handles final price and credit.            Role-level        Confirmed --- SL-03, SL-10, SL-11                        Configurable

  MUST             Receive an explicit explanation and next action when submission is blocked.                         Silent dead-end is not acceptable.                                                 Role-level        Confirmed --- SL-10; VoC silent-failure complaint        Likely Configurable --- Validation Required

  CAN              Update own-customer notes/preferences only if AS-05 is promoted and writable fields are approved.   AS-05 is not locked; SQL master-data boundaries apply.                             Role-level        Confirmed intent --- not locked                          Business Decision Required
  ---------------- --------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------- ----------------- -------------------------------------------------------- ---------------------------------------------

**Role-specific unresolved decisions**

Which customer fields are editable by Sales and which remain read-only from SQL?

Can Sales amend an SO after submission, or only while draft?

What UOM choices are supported before AS-11 is confirmed, particularly pcs and carton-to-kg cases?

**Role: Finance Manager / AR and Document Gate --- Grace**

**Business mission**

Grace controls customer-payment matching and the handoff from picked order to Delivery Note and Invoice. MAIA must reduce searching without auto-posting uncertain finance records.

**Known users or expected population**

Grace; count 1, confirmed. Her division of AR and finance settings with Apple is not fully defined.

**MAIA documents and touchpoints**

Payment; Customer; Invoice; Delivery Note/Order; Credit Note; Sales Order; Pick List; Notification; Document Management; Audit and History; ERP Integration.

  ---------------- ------------------------------------------------------------------------------------------------ ----------------------------------------------------------------------------------------- ---------------------- ------------------------------------------------------- ---------------------------------------------
  Behaviour Type   Business Requirement                                                                             Condition / Restriction                                                                   Authority Level        Evidence Status                                         Configuration Assessment

  CAN              Upload or forward payment slips and bank-statement data for customer-invoice matching.           AP and merchant/QR settlement are excluded.                                               Role-level             Confirmed --- SL-02                                     Likely Configurable --- Validation Required

  CAN              Review suggested matches and manually select the correct customer/invoice.                       Must support payer-name/reference mismatch.                                               Role-level             Confirmed --- SL-02; VoC payer-mismatch evidence        Likely Configurable --- Validation Required

  MUST             Confirm a match before payment status is updated or a knock-off is pushed to SQL.                Uncertain matches must not auto-post.                                                     Role-level             Confirmed --- SL-02                                     Configurable

  MUST             Receive every draft-DN event from Lai with the DN PDF and activity-trail entry.                  No batching or digest.                                                                    Person/role-specific   Confirmed --- SL-12                                     Likely Configurable --- Validation Required

  CAN              Explicitly request DN/Invoice generation after the amended/final order is ready.                 MAIA must not auto-generate merely because an amended SO was submitted.                   Role-level             Confirmed --- SL-07                                     Likely Configurable --- Validation Required

  MAY VIEW         View submitted/confirmed pick information needed for final documents.                            Exact "on demand" notification trigger remains undefined.                                 Role-level             Confirmed requirement; mechanism unresolved --- SL-12   Business Decision Required

  CAN              Work with SCN/CCN only after AS-03 and NS-18 are promoted and connector behavior is validated.   Credit-note support is not locked.                                                        Role-level             Confirmed intent --- not locked                         Technical Assessment Required

  CANNOT           Be assumed to own the driver-POD upload process.                                                 Grace rejected one earlier design; AS-12 proposes a different driver-account mechanism.   Person-specific        Confirmed conflict --- NS-07, AS-12                     Business Decision Required
  ---------------- ------------------------------------------------------------------------------------------------ ----------------------------------------------------------------------------------------- ---------------------- ------------------------------------------------------- ---------------------------------------------

**Role-specific unresolved decisions**

Is Grace the only AR operator, or does Apple also use the AR workspace?

What exact state/action triggers the pick-list notification to Grace?

Who creates, submits and approves SCN/CCN after connector validation?

Who backs Grace up during absence?

**Role: Finance Settings / Credit Terms --- Apple**

**Business mission**

Apple maintains finance-related customer controls such as credit limits and payment terms. Her role must remain narrower than David\'s and must not inherit blanket administrator rights.

**Known users or expected population**

Apple / Applle; count 1, confirmed. The exact create-versus-maintain split with CJ is unresolved.

**MAIA documents and touchpoints**

Customer Management; Credit Control; Payment Terms; User and Role Management; Audit and History.

  ---------------- --------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------- ---------------------- ------------------------------------------------------- ---------------------------------------------
  Behaviour Type   Business Requirement                                                        Condition / Restriction                                                                        Authority Level        Evidence Status                                         Configuration Assessment

  CAN              Maintain customer credit limits and finance-related customer settings.      Initial-creation ownership versus later maintenance is unresolved.                             Person/role-specific   Confirmed --- SL-04 role correction                     Business Decision Required

  CAN              Maintain customer payment terms.                                            Changes should be auditable; effective-date behavior is not specified.                         Role-level             Confirmed --- SL-04                                     Likely Configurable --- Validation Required

  CANNOT           Receive blanket Admin parity with David.                                    Finance-specific access only.                                                                  Role-level             Confirmed --- SL-04                                     Configurable

  CANNOT           Approve a credit-blocked order under the current SL-10 design.              NS-20 asks whether this should change.                                                         Role-level             Confirmed current design; future authority unresolved   Business Decision Required

  MAY VIEW         View finance-related customer fields needed to maintain limits and terms.   Selling-price, cost-price, order and AR visibility must be assigned explicitly, not assumed.   Role-level             Strongly Inferred                                       Configurable
  ---------------- --------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------- ---------------------- ------------------------------------------------------- ---------------------------------------------

**Role-specific unresolved decisions**

Does Apple create initial limits, maintain them, or both?

Can Apple override blocked orders or only maintain the underlying customer setting?

Does Apple require payment/AR access, or is that Grace-only?

**Role: Warehouse Manager / Logistics --- Lai**

**Business mission**

Lai receives submitted orders, coordinates picking, confirms actual quantity and begins the document handoff to Finance. MAIA must fit a paper-based operating reality while reducing missed orders.

**Known users or expected population**

Lai / Lim Jun Yan; count 1, confirmed. Backup assignment and device/login model are unresolved.

**MAIA documents and touchpoints**

Sales Order; Pick List; Warehouse; Inventory; Delivery Note/Order; Notification; Document Management; Audit and History.

  ---------------- ------------------------------------------------------------------------------------- ----------------------------------------------------------------- ---------------------- ------------------------------------------------------- ---------------------------------------------
  Behaviour Type   Business Requirement                                                                  Condition / Restriction                                           Authority Level        Evidence Status                                         Configuration Assessment

  MUST             Receive every submitted SO with the Order PDF and activity-trail entry.               No batching or digest.                                            Person/role-specific   Confirmed --- SL-12                                     Likely Configurable --- Validation Required

  CAN              Create or manage the pick list and upload the annotated/confirmed result.             Client may retain its own paper pick list; AS-01 is not locked.   Role-level             Confirmed intent --- AS-01                              Business Decision Required

  MUST             Record or confirm actual picked quantity before final DN/Invoice generation.          Real quantity may differ from ordered quantity.                   Role-level             Confirmed intent --- AS-01; VoC fresh-weight workflow   Likely Configurable --- Validation Required

  CAN              Create a draft DN that triggers Grace\'s handoff notification.                        Exact action sequence requires validation.                        Role-level             Confirmed handoff --- SL-12                             Likely Configurable --- Validation Required

  CANNOT           View the Purchasing tab or costing information in Item Detail.                        Warehouse role must not expose purchasing/cost data.              Role-level             Confirmed --- SL-04 visibility note                     Configurable

  MUST             Capture box count, kg per box and actual total kg if AS-01 is promoted.               AS-01 is agreed in principle, not locked.                         Role-level             Confirmed intent --- AS-01                              Technical Assessment Required

  CAN              Select a replacement SKU only if AS-10 is promoted and approval routing is defined.   Replacement must flow to amended SO and final documents.          Role-level             Confirmed intent --- AS-10                              Business Decision Required
  ---------------- ------------------------------------------------------------------------------------- ----------------------------------------------------------------- ---------------------- ------------------------------------------------------- ---------------------------------------------

**Role-specific unresolved decisions**

Named individual login, shared warehouse device or Lai-only MAIA operation?

Who backs Lai up?

What exact pick-list input format is accepted?

Who approves a replacement SKU before the amended SO and customer documents?

**Role: Warehouse Pickers / Checkers**

**Business mission**

Pickers and Checkers physically prepare the goods and produce the real quantity used by downstream documents. Accountability is a major client pain, but direct MAIA use by these workers is not confirmed.

**Known users or expected population**

Names and count unknown. Sources indicate multiple workers and possible language/device constraints.

**MAIA documents and touchpoints**

Pick List; Warehouse; Inventory; Audit and History. Direct access remains unresolved.

  ---------------- ----------------------------------------------------------------------------------- --------------------------------------------------------------------- ---------------------- ----------------------------------------------------- ----------------------------
  Behaviour Type   Business Requirement                                                                Condition / Restriction                                               Authority Level        Evidence Status                                       Configuration Assessment

  MUST             Record actual quantity/weight and identify who picked and who checked.              Whether MAIA records per-worker identity directly is not confirmed.   Role-level / unclear   Strongly Inferred from VoC accountability need        Business Decision Required

  CANNOT           View selling prices, cost prices, customer outstanding or purchasing information.   Least-privilege warehouse access.                                     Role-level             Strongly Inferred; purchasing restriction confirmed   Configurable

  CAN              Use MAIA directly only if the warehouse access model is approved.                   Shared device versus named logins remains open.                       Role-level             Unresolved --- NS-11                                  Business Decision Required
  ---------------- ----------------------------------------------------------------------------------- --------------------------------------------------------------------- ---------------------- ----------------------------------------------------- ----------------------------

**Role-specific unresolved decisions**

Are picker/checker identities mandatory fields, signatures or paper annotations?

Does every worker receive a named account?

What languages and device form factors must the warehouse interface support?

**Role: Ops / IT / Implementation Support --- Krystle and Sean**

**Business mission**

Krystle and Sean support setup, access, training and operational coordination. No source grants them transactional or approval authority.

**Known users or expected population**

Krystle Wong and Sean Looi; count 2, confirmed as contacts. Production role assignment is unresolved.

**MAIA documents and touchpoints**

User and Role Management; Notification setup; implementation support; possibly Dashboard. Transaction touchpoints are not evidenced.

  ---------------- ---------------------------------------------------------------------------------------------- ----------------------------------------- ----------------- ----------------------------------- ----------------------------
  Behaviour Type   Business Requirement                                                                           Condition / Restriction                   Authority Level   Evidence Status                     Configuration Assessment

  CAN              Support account setup, access and training coordination.                                       Does not imply transaction permissions.   Person-specific   Confirmed as operational contacts   Configurable

  CANNOT           Receive Sales, Finance, Warehouse or approval rights without explicit assignment.              Use deny-by-default.                      Role-level        Strongly Inferred                   Configurable

  MAY VIEW         View configuration or support information only if required for their support responsibility.   Exact support view remains undefined.     Unclear           Unresolved                          Business Decision Required
  ---------------- ---------------------------------------------------------------------------------------------- ----------------------------------------- ----------------- ----------------------------------- ----------------------------

**Role-specific unresolved decisions**

Do either need a production MAIA account?

If yes, is the role support-only, read-only operations or backup operator?

**Role: Delivery Driver --- Conditional / Possible Scope Change**

**Business mission**

The proposed driver role would attach delivery proof to the correct DN and mark delivery without providing route-planning capability.

**Known users or expected population**

"Uncle"; estimated 1--2 users. AS-12 is agreed in principle, not locked, expands licensed users and conflicts with NS-07.

**MAIA documents and touchpoints**

Delivery; Delivery Note; Document Management; Audit and History; Notification.

  ---------------- --------------------------------------------------- ----------------------------------------------------------- ----------------- --------------------------------- ---------------------------------------------
  Behaviour Type   Business Requirement                                Condition / Restriction                                     Authority Level   Evidence Status                   Configuration Assessment

  MAY VIEW         View assigned Delivery Notes needed for delivery.   Only if AS-12 is commercially and operationally approved.   Role-level        Confirmed intent --- not locked   Business Decision Required

  CAN              Update delivery status and attach POD.              POD must be tied to the correct DN.                         Role-level        Confirmed intent --- AS-12        Likely Configurable --- Validation Required

  CANNOT           Submit or cancel the DN.                            Driver is not a document approver.                          Role-level        Confirmed intent --- AS-12        Configurable

  MUST             Attach POD before marking delivered.                Additional proof may be appended later.                     Role-level        Confirmed intent --- AS-12        Technical Assessment Required

  CANNOT           Delete POD.                                         Append-only for driver role.                                Role-level        Confirmed intent --- AS-12        Technical Assessment Required

  CANNOT           Access trip/route planning.                         Full route management is outside scope.                     Role-level        Confirmed exclusion               Outside Approved Scope
  ---------------- --------------------------------------------------- ----------------------------------------------------------- ----------------- --------------------------------- ---------------------------------------------

**Role-specific unresolved decisions**

Driver account versus Accounts uploading on the driver\'s behalf?

Who owns the licence/commercial impact?

What qualifies as acceptable POD and what happens when connectivity is unavailable?

**Role: External Bank-Reconciliation Consultant --- Excluded**

**Business mission**

The external consultant performs final bank reconciliation outside MAIA.

**Known users or expected population**

One external consultant exists; name not supplied. No MAIA account is required under current scope.

**MAIA documents and touchpoints**

None in current scope.

  ---------------- ------------------------------------------------------------------------- ---------------------------------------------------------------------------------------- ----------------- --------------------- --------------------------
  Behaviour Type   Business Requirement                                                      Condition / Restriction                                                                  Authority Level   Evidence Status       Configuration Assessment

  CANNOT           Be configured as the operator of final bank reconciliation inside MAIA.   Final reconciliation remains outside MAIA. AP and merchant/QR settlement are excluded.   Role-level        Confirmed exclusion   Outside Approved Scope
  ---------------- ------------------------------------------------------------------------- ---------------------------------------------------------------------------------------- ----------------- --------------------- --------------------------

**Role-specific unresolved decisions**

None for current configuration.

**Section 3 --- Notifications and Reminders**

Client-required notifications are whitelist-only. Default unrequested notifications are disabled. The Grace and Lai handoffs are every-event notifications, not digests.

  ------ --------------------------------------------- -------------------------- ------------------------------------------------------------ ---------------------------------------------- ------------------------------------------------------------ -------------------------------------------------------------------------------------------- ------------------------------------- -------------------------------------- ---------------------------------------------- ----------------------------------------------------- ---------------------------------------------
  ID     Purpose                                       Trigger Type               Trigger or Cadence                                           Triggering Condition                           Recipient                                                    Information Required                                                                         Why Needed                            Expected Follow-Up                     MAIA Touchpoint                                Evidence Status                                       Configuration Assessment

  N-00   Suppress unrequestednotifications             Manual                     Account setup and whitelist changes                          Event is not explicitly whitelisted            No recipient; suppress                                       Event name, enabled/disabled state, configuration version                                    Prevents noise and restores trust     Product owner maintains event list     Notification; Audit and History                Confirmed --- SL-09                                   Likely Configurable --- Validation Required

  N-01   Explain a credit block to Sales               Event-based                Immediately on blocked submission                            Credit or term check fails                     Originating Sales user                                       SO reference, customer, failed control, approver, next action                                Prevents silent dead-end              Assign to controller or correct data   Credit Control; Notification                   Confirmed --- SL-10                                   Likely Configurable --- Validation Required

  N-02   Request credit approval                       Escalation                 Immediately after assignment                                 Sales assigns blocked order                    David                                                        SO reference, customer, order value, outstanding/term failure, requester, decision actions   Enables final decision                Approve, reject or submit for Sales    Credit Control; Order Approval; Notification   Confirmed --- SL-10; enforcement policy open          Business Decision Required

  N-03   Return credit decision                        Event-based                Immediately after David acts                                 Approved or rejected                           Originating Sales user; CJ only if approved chain requires   SO reference, decision, approver, next permitted action, reason if rejected                  Sales must know outcome               Continue, correct or inform customer   Notification; Sales Order                      Confirmed --- SL-10                                   Likely Configurable --- Validation Required

  N-04   Request middle-tier price approval            Escalation                 On price validation                                          Below customer/default and at/above minimum    CJ                                                           Document reference, customer, item, proposed/default/minimum price, requester                Controlled flexibility                Approve or reject                      Pricing; Order Approval; Notification          Confirmed --- SL-03                                   Likely Configurable --- Validation Required

  N-05   Request final price approval                  Escalation                 On price validation                                          Below minimum or above maximum                 David                                                        Document reference, customer, item, proposed price, min/max, requester                       Protects margin/risk                  Approve override or reject             Pricing; Order Approval; Notification          Confirmed --- SL-11                                   Likely Configurable --- Validation Required

  N-06   Return price decision                         Event-based                Immediately after approver acts                              Approved or rejected                           Originating Sales user                                       Document reference, final price/decision, approver, next action                              Makes outcome usable                  Continue or revise                     Pricing; Notification                          Confirmed --- SL-03, SL-11                            Likely Configurable --- Validation Required

  N-07   Hand draft DN to Finance                      Event-based                Every draft DN creation; no batching                         Lai creates draft DN                           Grace                                                        DN reference, customer, delivery date, linked SO, PDF, time, activity link                   Removes queue checking                Review and request downstream action   Delivery; Notification; Document Management    Confirmed --- SL-12                                   Likely Configurable --- Validation Required

  N-08   Hand submitted order to Warehouse             Event-based                Every SO submission; no batching                             SO becomes submitted                           Lai                                                          SO reference, customer, delivery data, Order PDF, submitter, time                            Prevents missed orders                Start fulfilment/picking               Sales Order; Pick List; Notification           Confirmed --- SL-12                                   Likely Configurable --- Validation Required

  N-09   Tell Finance picking is ready                 Event-based or Manual      "On demand"; exact action unresolved                         Pick list submitted or confirmed               Grace                                                        Pick reference, linked SO, actual quantities, discrepancies, submitter/time                  Starts final document review          Review and request DN/Invoice          Pick List; Notification                        Confirmed requirement; trigger unresolved --- SL-12   Business Decision Required

  N-10   Daily pick-list visibility                    Recurring cadence          Daily; exact time unresolved                                 Open/new/overdue pick-list filter              Recipient unresolved                                         Pick references, delivery date, status, owner, age                                           Reduces missed fulfilment             Review pending work                    Pick List; Reporting; Notification             Confirmed whitelist event --- SL-09                   Business Decision Required

  N-11   Price-update reminder                         Scheduled / recurring      Cadence unresolved                                           Price-update due rule is met                   Recipient unresolved                                         Last update, affected price set/items, required action                                       Keeps market prices current           Upload/confirm latest prices           Pricing; Notification                          Confirmed whitelist event --- SL-09                   Business Decision Required

  N-12   Low-stock / near-expiry / slow-moving alert   Scheduled or event-based   Threshold and cadence unresolved                             Stock rule crosses threshold                   David; Sales inclusion unresolved                            Item, warehouse, stock/age/expiry, threshold                                                 Enables clearance/discount decision   Review and act                         Inventory; Reporting; Notification             Confirmed need --- NS-03, NS-09; VoC                  Business Decision Required

  N-13   Sunday management reports                     Recurring cadence          Sunday 08:00 evidenced; report-versus-dashboard unresolved   Weekly schedule                                Likely David; final list unresolved                          Agreed report outputs, period, salesperson filter                                            Fits management review window         Review weekly performance/exceptions   Reporting; Dashboard; Notification             Strongly Inferred; NS-19 unresolved                   Business Decision Required

  N-14   Overdue-payment chasing escalation            Escalation / scheduled     Trigger, aging and repeat cadence unresolved                 Customer remains overdue under approved rule   Finance, then assigned Sales, then David                     Customer, invoices, aging, last chase, assigned agent                                        Mirrors operating chain               Chase and escalate                     Payment; Customer; Notification                Strongly Inferred from VoC and resolved lineage       Business Decision Required
  ------ --------------------------------------------- -------------------------- ------------------------------------------------------------ ---------------------------------------------- ------------------------------------------------------------ -------------------------------------------------------------------------------------------- ------------------------------------- -------------------------------------- ---------------------------------------------- ----------------------------------------------------- ---------------------------------------------

**Section 4 --- Automated Rules and Hooks**

  ------ ---------------------------------------------------- ----------------------------------- ------------------------------------------------------------ ------------------------------------------------------------------------ ----------------------------------------------------------------- -------------------------------------------------- --------------------------------------------------------------- ------------------------------------------ ------------------------------------------------- ---------------------------------------------
  ID     Business Purpose                                     Initiating Event                    Condition or Input                                           Rule, Validation or Calculation                                          Automatic System Action                                           Business Outcome                                   Exception or Override                                           MAIA Touchpoint                            Evidence Status                                   Configuration Assessment

  A-01   Keep SQL as master                                   Lookup, draft or confirmation       Customer/item/document data needed                           Use SQL-derived customer/item data; do not create a competing master     Display/reference SQL data and push confirmed supported records   One workflow without breaking accounting control   Failed or unsupported sync must not appear complete             ERP Integration; Customer; Item            Confirmed --- SL-01                               Technical Assessment Required

  A-02   Convert a customer message into a reviewable order   Authorized user forwards message    Text/voice/forward contains order detail                     Extract/map customer, item, quantity and remarks; preserve uncertainty   Create draft SO                                                   Less re-keying with human control                  User corrects ambiguity before submit                           Sales Order; Item                          Confirmed --- SL-06, AS-04                        Likely Configurable --- Validation Required

  A-03   Assign customer ownership                            Customer data sync/creation         SQL Agent code                                               Map CJ, Ben and Queenie; exclude CK; default unassigned to David         Set MAIA customer owner/visibility                                Correct territory ownership                        Manager visibility exception unresolved                         Customer; ERP Integration                  Confirmed --- SL-08                               Technical Assessment Required

  A-04   Enforce Sales territory isolation                    User opens/searches customer data   Logged-in Sales owner differs from Agent mapping             Deny cross-owner customer, pricing and outstanding access                Hide/deny record                                                  Protects customer silos                            CJ manager exception unresolved                                 User and Role; Customer                    Confirmed --- SL-05                               Configurable

  A-05   Update selling prices in bulk                        Authorized upload                   Valid price-update template                                  Validate and apply approved selling-price fields                         Update MAIA price source                                          Current controlled pricing                         Invalid rows rejected; exact validation unresolved              Pricing; Item                              Confirmed --- SL-03                               Technical Assessment Required

  A-06   Select applicable selling price                      Draft line created                  Customer-specific, wholesale/retail and current price data   Apply approved price hierarchy                                           Populate price on document                                        Consistent pricing                                 Customer lock behavior requires exact setup                     Pricing; Sales Order                       Confirmed --- SL-03                               Likely Configurable --- Validation Required

  A-07   Let normal price proceed                             Document validation                 Price within approved range                                  No approval required                                                     Permit save/submit                                                Routine orders flow quickly                        None                                                            Pricing; Order Approval                    Confirmed --- SL-03                               Configurable

  A-08   Route middle-tier price exception                    Document validation                 Below customer/default but at/above minimum                  Hold affected action and route to CJ                                     Create approval request                                           Controlled commercial flexibility                  Approval/rejection recorded; self-approval check required       Pricing; Order Approval                    Confirmed --- SL-03                               Likely Configurable --- Validation Required

  A-09   Route final price exception                          Quotation/SO/Invoice validation     Below minimum or above maximum                               Snap back to minimum with warning and offer controller escalation        Create request to David; apply override only after approval       Protects floor/ceiling                             David override; customer-specific lock may prohibit override    Pricing; Order Approval                    Confirmed --- SL-11                               Technical Assessment Required

  A-10   Enforce customer-specific price lock                 Price edit attempted                Customer price marked locked                                 Prevent edit or require approved exception according to final rule       Deny or route                                                     Protects negotiated pricing                        Exact lock/override policy unresolved                           Pricing                                    Confirmed capability direction --- SL-11          Business Decision Required

  A-11   Check credit at approved gate points                 SO submit or DN action              SQL credit amount and payment-term data                      Run at SO and DN, not Invoice; either failure qualifies                  Block or warn according to NS-20                                  Controls exposure                                  Enforcement mode, tolerance and override authority unresolved   Credit Control; Sales Order; Delivery      Confirmed rule; mechanism open --- SL-04, NS-20   Business Decision Required

  A-12   Escalate and release credit exception                User selects assign action          Credit failure exists                                        Route to David, record decision, release/submit only after approval      Notify approver and originating user; update order state          Visible controlled exception                       David current final approver; Apple option unresolved           Credit Control; Order Approval             Confirmed --- SL-10                               Likely Configurable --- Validation Required

  A-13   Set default payment term                             SO creation                         Customer default, company default or no term                 Cascade: customer → company → cash-in-advance → blank                    Populate payment term                                             Consistent order defaults                          User edit rights after default unresolved                       Sales Order; Customer                      Confirmed --- SL-13                               Configurable

  A-14   Prevent premature downstream documents               Amended/final SO submitted          Final quantity ready                                         Do not auto-create DN/Invoice; require explicit Grace request            Keep documents pending until request                              Preserves human control                            Exact request action needs validation                           Sales Order; Delivery; Invoice             Confirmed --- SL-07                               Likely Configurable --- Validation Required

  A-15   Respect SQL document flow                            Document generation/sync            SO/DO/Invoice constraints and linked quantities              Prevent duplicate/inconsistent downstream documents                      Generate/push only valid records                                  Accounting integrity                               Connector errors require visible recovery                       ERP Integration; Document Management       Confirmed --- SL-07 and VoC SQL constraints       Technical Assessment Required

  A-16   Move stock at approved document stage                Invoice or SCN issuance             Valid document issued                                        Move inbound/outbound stock only at Invoice/SCN issuance                 Update stock through SQL-supported flow                           Correct stock timing                               SCN connector correctness remains open                          Inventory; ERP Integration                 Confirmed --- SL-07                               Technical Assessment Required

  A-17   Suggest AR matches without auto-posting              Payment slip/bank data uploaded     Payer, date, amount, reference and outstanding invoices      Auto-suggest clear matches; hold ambiguous matches                       Present suggestions for Finance confirmation                      Faster matching with human control                 Manual customer/invoice selection                               Payment; ERP Integration                   Confirmed --- SL-02                               Technical Assessment Required

  A-18   Update payment only after confirmation               Finance confirms match              Selected customer/invoice allocation                         Create/update payment entry and push where supported                     Update payment status/knock-off                                   Prevents wrong posting                             Failed SQL push remains unresolved                              Payment; Audit; ERP Integration            Confirmed --- SL-02                               Technical Assessment Required

  A-19   Fire only whitelisted role notifications             Configured business event occurs    Event enabled with role recipient                            Resolve role recipient and suppress all non-whitelisted events           Send notification and log activity                                Precise low-noise handoff                          Missing recipient/config must fail visibly                      Notification; Audit                        Confirmed --- SL-09                               Technical Assessment Required

  A-20   Handoff SO and draft DN                              SO submitted or draft DN created    Valid event                                                  Send Order PDF to Lai; send DN PDF to Grace; no batching                 Notify recipient and write trail                                  Prevents missed work                               Delivery retry/failure handling unresolved                      Notification; Document Management          Confirmed --- SL-12                               Technical Assessment Required

  A-21   Amend SO from picked quantities                      Pick confirmed/uploaded             Actual quantity differs from ordered                         Replace/update SO quantities before final documents                      Amend SO and preserve actual values                               Final documents reflect real goods                 AS-01 not locked; adoption/input method unresolved              Pick List; Sales Order                     Confirmed intent --- possible scope change        Business Decision Required

  A-22   Store quantity breakdown tuples                      Picker records boxes/weights/UOM    Multiple (qty, uom) entries per item                         Persist, total, propagate to DN and render on PDFs                       Update item breakdown and totals                                  Replaces customer-facing Excel proof if viable     Technical feasibility and layout not approved                   Pick List; Delivery; Document Management   Confirmed intent --- AS-11 not locked             Possible Product Gap

  A-23   Replace unavailable SKU during picking               Warehouse selects replacement       Original SKU unavailable                                     Record approved replacement and propagate to amended SO/final docs       Update linked records                                             Preserves traceable substitution                   Approval owner/customer consent unresolved                      Pick List; Item; Sales Order               Confirmed intent --- AS-10 not locked             Business Decision Required

  A-24   Require POD before delivered status                  Driver marks delivered              POD absent/present                                           Block delivered status without POD; allow append; deny driver deletion   Save proof against DN and update status                           Searchable dispute evidence                        Mechanism conflicts with NS-07; offline behavior unknown        Delivery; Document Management              Confirmed intent --- AS-12 not locked             Technical Assessment Required

  A-25   Generate aging/expiry alerts                         Scheduled/event check               Item age, expiry or stock threshold                          Compare to approved thresholds                                           Notify approved recipients/report                                 Earlier commercial action                          Threshold, cadence and Sales inclusion unresolved               Inventory; Reporting; Notification         Confirmed need                                    Business Decision Required

  A-26   Support SCN/CCN when validated                       Credit-note action                  SQLC variant and stock-reducing case                         Apply correct connector behavior and numbering                           Create/sync credit note                                           Removes SQL workaround                             Not locked; connector untested                                  Credit Note; ERP Integration               Confirmed intent --- AS-03/NS-18                  Technical Assessment Required

  A-27   Use one production assistant number                  Authorized workflow message         Production channel is WhatsApp                               Route all Phase 1 staff interactions through one MAIA number             Process message under user identity                               Simple shared entry point                          Verification and Telegram-to-WhatsApp parity unresolved         Notification; Sales Order                  Confirmed --- SL-06                               Technical Assessment Required
  ------ ---------------------------------------------------- ----------------------------------- ------------------------------------------------------------ ------------------------------------------------------------------------ ----------------------------------------------------------------- -------------------------------------------------- --------------------------------------------------------------- ------------------------------------------ ------------------------------------------------- ---------------------------------------------

**Section 5 --- Recommended Configurations**

***All items in this section are PROPOSED and are not confirmed client requirements. Product Owner and client validation are required before implementation.***

  ------ ------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------- ---------------------------------------------------------------------- --------------------------------------------- ------------------------------------------ --------------------------------------------- ------------------------------------------------------ -------------------------------
  ID     Proposed Configuration                                                                                                                                       Business Basis                                                                        Problem or Risk Addressed                                              Expected Benefit                              MAIA Touchpoint                            Configuration Assessment                      Scope Impact                                           Decision Owner

  R-01   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Maintain a signed role-permission matrix with deny-by-default access.                                   Multiple named roles have narrow, different authorities and source conflicts exist.   Accidental admin parity, cross-customer access and approval overlap.   Safer UAT and auditable access.               User and Role Management                   Configurable                                  No scope expansion                                     Product Owner + David

  R-02   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Configure explicit backup assignees for Lai and Finance workflows.                                      NS-10 confirms no backup process.                                                     Orders and AR work stop during absence.                                Operational continuity.                       User and Role; Notification                Configurable                                  No scope expansion if existing users are used          David

  R-03   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Require an override reason and immutable audit entry for every credit/price exception.                  The client wants control and proof of who acted.                                      Untraceable exceptions and repeated disputes.                          Stronger accountability.                      Order Approval; Audit and History          Likely Configurable --- Validation Required   No scope expansion                                     Product Owner + David

  R-04   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Add a visible failed-sync queue with owner and retry status for SQL writes.                             SQL remains master and integration is a go-live dependency.                           Users may assume MAIA completed a record that SQL rejected.            Prevents silent data divergence.              ERP Integration; Dashboard                 Technical Assessment Required                 No business-scope expansion; technical work possible   Technical Lead

  R-05   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Use a mobile-role UAT profile for David, CJ and Krystle on their real devices.                          Approval-critical mobile failures were observed.                                      Correct workflow may still be unusable in practice.                    Validates real approval access.               User and Role; Other --- mobile UI         Technical Assessment Required                 No business-scope expansion                            QA Lead + Product Owner

  R-06   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Version the notification whitelist with event, role recipient, channel, frequency and payload fields.   SL-09 requires only written approved events.                                          Notification noise or inconsistent "spam Grace/Lai" interpretation.    Testable and safer notification changes.      Notification; Audit and History            Likely Configurable --- Validation Required   No scope expansion                                     Notification owner

  R-07   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Configure a visible block reason and one recommended next action on every validation failure.           Silent failures caused direct client concern.                                         Users retry or abandon work without understanding.                     Faster recovery and lower support demand.     Sales Order; Pricing; Credit Control       Likely Configurable --- Validation Required   No scope expansion                                     Product Owner

  R-08   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Separate selling-price maintenance from cost/buying-price visibility and permission sets.               SL-03 is locked; AS-09 is separate and not locked.                                    Accidental cost disclosure or scope mixing.                            Clearer security and scope control.           Pricing; Product or Item                   Configurable                                  No scope expansion                                     Product Owner + David

  R-09   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Require document preview and explicit send confirmation for customer-facing PDFs.                       Human control and SQL document constraints are central to the workflow.               Wrong quantity/price/document sent externally.                         Reduces irreversible customer-facing error.   Document Management; Invoice; Delivery     Likely Configurable --- Validation Required   No scope expansion                                     Grace + Product Owner

  R-10   **PROPOSED --- NOT A CONFIRMED CLIENT REQUIREMENT:** Mock up the AS-11 breakdown on Pick List and DN PDFs before approving development.                      Client value depends on what the customer sees, not only stored data.                 A technically correct field may not replace the Excel proof.           Avoids wasted build and unmet expectation.    Pick List; Delivery; Document Management   Technical Assessment Required                 Possible scope component                               Product Owner + David + Grace
  ------ ------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------- ---------------------------------------------------------------------- --------------------------------------------- ------------------------------------------ --------------------------------------------- ------------------------------------------------------ -------------------------------

**Brief Decision Register**

  ------------- --------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------- ---------------------------------------------- -------------------------------- ------------------------------------------
  Decision ID   Specific Decision Needed                                                                                  Why It Matters                                                            Affected Role / Rule / Notification            Recommended Decision Owner       Blocking Level

  D-01          Decide credit enforcement mode, tolerance, blocking basis and whether Apple can override.                 SL-10 cannot roll out safely without the trigger policy.                  David, Apple, Sales; A-11/A-12; N-01 to N-03   David + Product Owner            **Blocks configuration**

  D-02          Assign the internal owner for notification requirements and whitelist maintenance.                        Locked notification work has no accountable owner.                        SL-09 to SL-12; all notifications              Ivan / Product Owner             **Blocks configuration**

  D-03          Resolve CJ versus Apple ownership of initial credit-limit creation, later maintenance and term changes.   Conflicting authority risks duplicate or excessive access.                CJ, Apple; Customer/Credit setup               David                            **Blocks configuration**

  D-04          Confirm whether CJ has team-wide visibility or own-territory visibility only.                             The Sales Manager exception is not defined.                               CJ; A-04                                       David                            **Blocks one component**

  D-05          Choose warehouse access model: named picker accounts, shared device or Lai-only.                          Determines permissions, accountability and UAT.                           Lai, Pickers; AS-01; NS-11                     David + Lai                      **Blocks one component**

  D-06          Name backup users for Lai and Finance/AR.                                                                 Absence stops critical work.                                              Warehouse, Grace/Apple; notification routing   David                            **Can proceed with approved assumption**

  D-07          Choose POD mechanism: Accounts upload or driver\'s own account.                                           NS-07 and AS-12 conflict and AS-12 adds users.                            Grace, Driver; A-24                            David + Commercial Owner         **Blocks one component**

  D-08          Clear AS-11 feasibility and approve exact breakdown layout.                                               Excel-removal commitment depends on it.                                   Lai, Grace; A-22                               Technical Lead + David/Grace     **Blocks one component**

  D-09          Define aging/expiry thresholds, recipients and cadence, including Sales inclusion.                        Feature cannot be configured operationally.                               David, Sales; N-12/A-25                        David                            **Blocks one component**

  D-10          Decide Sunday scheduled reports versus dashboard and confirm report contents/recipients.                  Building both duplicates work.                                            David; N-13                                    Product Owner + David            **Blocks one component**

  D-11          Define exact trigger for Grace\'s pick-list notification.                                                 "On demand" is not implementable without a state/action.                  Grace, Lai; N-09                               Product Owner + Grace/Lai        **Blocks one component**

  D-12          Complete SQL access and confirm supported read/write mappings and error behavior.                         SQL remains master and go-live depends on integration.                    All roles; A-01, A-15 to A-18                  Product Owner + SQL vendor       **Blocks configuration**

  D-13          Complete WhatsApp verification and channel-parity smoke test.                                             UAT used Telegram, not the locked production channel.                     All chat users; A-27                           Ops / Technical Lead             **Blocks configuration**

  D-14          Name client UAT signatory and record a formal verdict.                                                    Current baseline has no formal acceptance.                                Entire configuration                           Onboarding PM + David            **Blocks one component**

  D-15          Confirm price floors, ceilings, customer lock flags and ownership of values.                              Approval rule is locked but the actual configuration values are absent.   David, CJ, Sales; A-05 to A-10                 David                            **Blocks configuration**

  D-16          Confirm delivery-date cutoff: 1pm, 2pm or two separate rules.                                             Affects scheduling/reporting logic.                                       Delivery, Pick List, Reporting                 David                            **Blocks one component**

  D-17          Confirm SCN/CCN users, stock-reducing case and connector acceptance.                                      Credit-note workflow is not yet safe to configure.                        Grace; A-26                                    Product/Technical Lead + Grace   **Blocks one component**
  ------------- --------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------- ---------------------------------------------- -------------------------------- ------------------------------------------

**Brief Validation Items**

  --------------- -------------------------------------------------------- -------------------------------------------------------------------------------------------------------------- ------------------------------------------------------ -------------------------------------
  Validation ID   Requirement                                              Reason Validation Is Needed                                                                                    Current Assessment                                     Required Owner

  V-01            SQL customer/item/document/payment integration           Read/write mappings, error recovery and stock timing are ERP-specific.                                         Technical Assessment Required                          Technical Lead + SQL vendor

  V-02            Role-based whitelist notification engine                 Role resolution, channel delivery, suppression, logging and retry behavior must be confirmed.                  Technical Assessment Required                          Notification owner + Technical Lead

  V-03            Three-tier price approval on Quotation, SO and Invoice   Multi-doctype snap-back, min/max, customer lock and self-approval controls may require combined logic.         Technical Assessment Required                          Product Owner + Technical Lead

  V-04            Credit checks at SO and DN, not Invoice                  Gate points, warn/hard mode and tolerance must be supported without false blocks from delayed SQL knock-off.   Business Decision Required plus technical validation   Product Owner + Technical Lead

  V-05            Picked-quantity tuple breakdown propagated to DN/PDF     Scope explicitly proposes new item-level structure and PDF rendering.                                          Possible Product Gap                                   Technical Lead

  V-06            Mandatory append-only POD against DN                     Driver permissions, required attachment, immutability and offline handling span several controls.              Technical Assessment Required                          Product Owner + Technical Lead

  V-07            SCN/CCN SQL connector                                    SQLC variants and rare stock-reducing case are untested.                                                       Technical Assessment Required                          Connector owner

  V-08            WhatsApp channel and mobile-device parity                Actual production channel and named devices have not passed end-to-end UAT.                                    Technical Assessment Required                          QA Lead + Ops

  V-09            Accelerated AR finance workspace                         AS-13 is not locked and timing/capability is not committed.                                                    Technical Assessment Required                          Product Owner

  V-10            Customer Agent mapping to row-level security             Combines ERP mapping, default-to-David and excluded-driver handling.                                           Technical Assessment Required                          Technical Lead
  --------------- -------------------------------------------------------- -------------------------------------------------------------------------------------------------------------- ------------------------------------------------------ -------------------------------------

**Completeness Result**

**Users and role groups:** Partial

**Role missions and permissions:** Partial

**Notifications:** Partial

**Automated rules:** Partial

**Configuration assessment:** Requires validation

**Configuration readiness:** Ready with decisions

**Most important remaining issue:**\
Resolve NS-20 credit-block enforcement mode before configuring and releasing the locked credit approval loop.

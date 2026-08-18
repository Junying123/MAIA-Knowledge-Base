**16JUL26 UAT Acceptance & Sign-Off Checklist**

**owner: Gareth\
status: draft\
last_reviewed: 2026-07-16\
lark_url: <https://eg69120xnei.sg.larksuite.com/docx/Ki3tdXhIPotbu2xQWDPlsjKQgRg>**

**MACRO FROZEN SDN. BHD.**

**MAIA --- UAT Acceptance & Sign-Off Checklist**

**Reference format:** built from 18June26_Ultimax_MAIA_UAT_Signoff_Checklist.docx (the same checklist structure used for Ultimax\'s signed UAT acceptance), adapted to Macro Frozen\'s own scope per Macrofood --- Scope Lock v1 (reconciled).md and the UAT Field Guide / Launch Readiness Checklist for this account.

**Purpose.** This checklist records User Acceptance Testing sign-off for the MAIA implementation at Macro Frozen Sdn. Bhd., against the signed proposal effective 15 May 2026 and Macro Frozen\'s current operating model. Section 4 is completed by circling Pass or Fail for each item during the in-person UAT session. The signed and annotated copy serves as the acceptance record. Where the signed proposal and Macro Frozen\'s current operating model differ, the current operating model prevails for acceptance; this checklist does not expand the signed commercial scope.

**1. Parties & Agreement Reference**

  ------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                  

  Proposal / SOW effective date   15 May 2026

  Service provider                AutorunBiz PLT (Mindhive delivery team)

  Client                          Macro Frozen Sdn. Bhd. (Reg. 202301011565 / 1505487-K)

  Client address                  Jalan Bayu Permai 5, Taman Bayu Permai, 48000 Rawang, Selangor Darul Ehsan

  System                          MAIA --- internal WhatsApp-based AI assistant for order intake, actual-weight reconciliation, pricing/credit control, and AR support, sitting on top of the client\'s existing SQL/AutoCount ERP

  UAT demo / sign-off date        \[TO FILL --- 16 Jul 2026 session, or later if retested\]
  ------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**2. MAIA Scope for Macro Frozen**

MAIA is deployed as an internal, WhatsApp-based AI assistant for Macro Frozen\'s sales, finance and warehouse users. Macro Frozen operates a frozen-food wholesale/retail distribution model: customer orders arrive informally over WhatsApp (occasionally as a formal Purchase Order for 3 confirmed customers), are converted to a Sales Order referencing SQL master data, picked and weighed against the ordered quantity (frozen goods vary from ordered to actual picked weight as a daily norm), amended to the real weight, then billed. The table below states how MAIA supports that model and is the basis for the checklist that follows.

  ----------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Area                          How MAIA supports Macro Frozen

  Operations focus              MAIA supports order intake, SO creation, actual-weight reconciliation, pricing/credit enforcement, and payment-match assistance. SQL/AutoCount remains the authoritative system of record for customer and item master data --- MAIA references it, never overwrites it.

  Conversational input          Sales reps and customers work WhatsApp-first. MAIA accepts natural, informal, sometimes garbled multi-language (English/Malay/Chinese) order messages.

  Order initiation              Orders usually begin as an informal WhatsApp message relayed by a sales rep to the office for entry. A small number of customers (3 confirmed) instead issue a formal Customer Purchase Order, which MAIA accepts, matches, and converts to an order.

  Actual-weight billing         The full ordered quantity is picked, weighed, and the Sales Order is manually amended to the real picked weight before Delivery Order / Invoice generation --- the gap between ordered and actual weight is the daily norm, not an edge case.

  Pricing & credit control      David (owner/MD) is the sole price controller and the final credit-limit approver; a below-floor price or over-limit order must stop and wait for his explicit approval. Bulk price updates are supported via template upload.

  Customer → agent assignment   Every SQL customer record carries an Agent field; MAIA\'s territory logic must mirror the SQL structure exactly (CJ Tan as Sales Manager, Ben and Queenie as reps, CK excluded as a third-party arrangement, unassigned customers default to David).

  Confirmation before posting   Any record that moves money, stock, or credit status requires human confirmation before it posts --- no silent changes.

  Billing support output        MAIA generates Delivery Order and Sales Invoice documents once the Sales Order is confirmed at the real picked weight; Payment Entry / matching assists AR reconciliation, with ambiguous matches routed to Finance for manual confirmation.
  ----------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**3. Scope Boundaries**

In scope: the capabilities listed in Section 2 and demonstrated in the Section 4 checklist, per Scope Lock items marked **LOCKED**.\
Out of scope (this UAT round): the items below.

  ----------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Out of scope this round                                                                                                                         Treatment

  Proof-of-Delivery (POD) photo upload into MAIA                                                                                                  **Rejected by client, not merely unbuilt** --- Grace has explicitly rejected uploading delivery photos into MAIA; her current WhatsApp-group process is what she wants preserved. Not accepted as intended behaviour. Do not test; do not log its absence as a bug. Awaiting David\'s decision --- see Section 6.

  AR auto-reconciliation (full auto-match)                                                                                                        SL-02 is locked in principle but **ships next sprint** --- excluded from this UAT session; Grace has also flagged adoption skepticism (no clear time-save vs. her current manual process) as a live, unresolved risk.

  Credit Note (SCN/CCN) end-to-end flow                                                                                                           Known SQL/MAIA mismatch --- client is using a SQL workaround. Kept as a reference mission card, not run this round.

  Quotation-before-order price-lock enforcement (AS-07)                                                                                           Proposed, not yet walked through with the client. Formal quotations are barely used in practice today (real flow skips QTN even for new items/customers) --- do not test; David\'s confirmation needed.

  Product catalogue / product-update image (AS-02), backend dashboard & daily reminders (AS-06), customer notes/preferences persistence (AS-05)   Agreed in principle, implementation not locked --- do not test as pass/fail acceptance items this round; observe only if encountered.

  Warehouse foreign-worker direct MAIA access                                                                                                     Not part of this delivery --- foreign-worker pickers work on paper only and never log into MAIA; Lai (Logistics/Warehouse Manager) is the sole system user for this step, by design.
  ----------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**4. Functional Acceptance Checklist**

**How to complete.** During the in-person UAT session, circle Pass or Fail in the Result column for each item. Items marked Fail are recorded as open / deferred items in the Section 7 declaration.

  ---------------------------------------- ----------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -------------
  \#                                       Capability                          What is demonstrated                                                                                                                                                                                                                                                                                   Result

  **A. Access & Input**                                                                                                                                                                                                                                                                                                                                                               

  1                                        Registered-user access              MAIA WhatsApp/chatbot access is restricted to registered/authorised users.                                                                                                                                                                                                                             Pass / Fail

  2                                        Conversational order intake         MAIA handles natural, informal, sometimes garbled multi-language order messages without requiring fixed commands.                                                                                                                                                                                      Pass / Fail

  **B. Master Data Management**                                                                                                                                                                                                                                                                                                                                                       

  3                                        Customer records                    Sales reps/office can retrieve, and (per their permission level) create/amend, customer records --- contact, address, and standard fields --- referencing SQL as master.                                                                                                                               Pass / Fail

  4                                        Customer notes / activity log       A quick note can be logged against a customer after a call or interaction.                                                                                                                                                                                                                             Pass / Fail

  5                                        Item / pricing records              Item and price-list data is retrieved correctly from SQL, including the single latest-invoice historical price lookup.                                                                                                                                                                                 Pass / Fail

  **C. Order Capture**                                                                                                                                                                                                                                                                                                                                                                

  6                                        Informal WhatsApp order intake      A draft Sales Order is created from an informal, relayed WhatsApp order message, correctly resolving customer, item, and price.                                                                                                                                                                        Pass / Fail

  7                                        Customer PO upload & match          For one of the 3 confirmed PO-issuing customers, a real Customer PO document is uploaded, matched to customer/item, and converted to a draft order --- happy path only.                                                                                                                                Pass / Fail

  8                                        Sales rep field access              A field sales rep (Ben/Queenie) can retrieve a customer\'s price and outstanding balance, create/update customer info directly, and create an order in MAIA --- per Role Permission sheet, Sales User has READ/WRITE/CREATE on Customer and Sales Order (submit remains with Sales Manager/Finance).   Pass / Fail

  **D. Standard Document Flow**                                                                                                                                                                                                                                                                                                                                                       

  9                                        Sales Order (SO)                    A confirmed order becomes a Sales Order, referencing SQL customer/item data, with the correct role able to submit it.                                                                                                                                                                                  Pass / Fail

  10                                       Pick List                           The confirmed SO generates a pick-list PDF for the warehouse.                                                                                                                                                                                                                                          Pass / Fail

  11                                       Actual-weight amendment             The SO is manually amended to the real picked weight once the annotated pick list is uploaded back --- never auto-recalculated.                                                                                                                                                                        Pass / Fail

  12                                       Delivery Order (DO)                 Finance (Grace) creates and submits the Delivery Order reflecting the real picked weight, not the original order quantity.                                                                                                                                                                             Pass / Fail

  13                                       Sales Invoice (SI)                  Finance (Grace) creates and submits the Sales Invoice from the confirmed DO; invoice quantity never exceeds DO quantity; no duplicate invoice on an already-submitted SO.                                                                                                                              Pass / Fail

  **E. Inventory & Stock**                                                                                                                                                                                                                                                                                                                                                            

  14                                       Stock Entry / stock visibility      Stock entries and item stock visibility are correctly reflected before a dispatch decision.                                                                                                                                                                                                            Pass / Fail

  15                                       Pick List CRUDs                     Pick-list records can be created, read, updated as needed through the fulfilment flow.                                                                                                                                                                                                                 Pass / Fail

  **F. Pricing & Credit Control**                                                                                                                                                                                                                                                                                                                                                     

  16                                       Price-controller enforcement        Only David (desktop) can update a price; a below-floor price is blocked pending his approval.                                                                                                                                                                                                          Pass / Fail

  17                                       Bulk price update                   A valid bulk price-update template updates multiple item prices correctly; a broken template (missing column, invalid SKU, duplicate SKU, negative price) is rejected cleanly.                                                                                                                         Pass / Fail

  18                                       Credit-limit gate                   An order that would breach a customer\'s credit limit is blocked, not just warned, pending David\'s explicit override.                                                                                                                                                                                 Pass / Fail

  **G. Sales Territory & Notifications**                                                                                                                                                                                                                                                                                                                                              

  19                                       Customer → sales-agent assignment   Each customer routes to the correct agent (CJ Tan / Ben / Queenie); CK\'s 3 customers stay excluded from normal sales workflows; unassigned customers default to David.                                                                                                                                Pass / Fail

  20                                       Sales visibility isolation          A sales rep cannot view another rep\'s customer records or accounts; the Sales Manager (CJ Tan) sees only his own two reps\' overdue accounts, never anyone else\'s; David sees all accounts across every rep.                                                                                         Pass / Fail

  21                                       Payment escalation alerts           Overdue-payment alerts route correctly to Finance, the responsible salesperson, the Sales Manager, and David.                                                                                                                                                                                          Pass / Fail

  **H. Billing & Payment Support**                                                                                                                                                                                                                                                                                                                                                    

  22                                       Payment matching                    A clean payment (matching payer name and amount) auto-matches to the correct invoice; a mismatched-payer-name payment is flagged for Finance\'s manual confirmation, never silently matched.                                                                                                           Pass / Fail

  23                                       Confirmation before posting         No record (price, credit, stock, or payment match) posts without explicit human confirmation.                                                                                                                                                                                                          Pass / Fail
  ---------------------------------------- ----------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -------------

**5. Acceptance Criteria**

Each criterion below is accepted when demonstrated successfully during the UAT session. These criteria carry forward the locked items of the Scope Lock.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------
  Acceptance criterion                                                                                                                                                       Result

  Orders captured with the correct customer, item, quantity and pricing basis, from both informal WhatsApp messages and formal Customer PO intake                            Pass / Fail

  Actual-picked-weight reconciliation correctly overrides ordered quantity before DO/Invoice generation, with no auto-recalculation bypassing the manual confirmation step   Pass / Fail

  Standard document flow operates correctly across Sales Order, Pick List, Delivery Order and Sales Invoice, with the correct role (Finance) owning DO/Invoice creation      Pass / Fail

  Credit-limit and price-floor gates block correctly, with David as sole approver                                                                                            Pass / Fail

  Sales territory isolation (customer→agent assignment, rep-to-rep visibility) is enforced correctly                                                                         Pass / Fail

  Payment matching flags ambiguous cases for Finance rather than silently matching                                                                                           Pass / Fail
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------

**6. Open Decision --- Order-Entry & Proof-of-Delivery Handling**

**To confirm in this session.** Two related items surfaced during scope clarification remain undecided and directly affect what this UAT checklist can score as Pass:

**6a. Who keys in the relayed WhatsApp order?** Earlier working assumptions in this pack named Grace (Finance Manager) as the order-entry person; this was corrected 2026-07-15 --- Grace\'s role is Finance only (AR, payment matching, DO/Invoice creation), not order entry. Who performs SO data entry for a relayed order is still open.

  ------------------------------------------ ------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Option                                     MAIA behaviour                                                                        Trade-off

  A --- Sales rep enters directly            Ben/Queenie key the order into MAIA themselves once field access is confirmed live.   Requires unlocking SO create/submit rights beyond the current \"query only\" outdoor-sales design (AS-04) --- a permission-model change, not just a process one.

  B --- Dedicated office/admin role enters   A named office or Admin user (e.g. Applle) keys in every relayed order.               Matches the original garbled-transcript assumption\'s workload shape, but needs an explicit named owner --- not yet confirmed with David.
  ------------------------------------------ ------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------

**6b. Proof-of-delivery photo upload into MAIA.** Grace has explicitly rejected this design (see Section 3) --- her current WhatsApp-group process has no system status and she wants it preserved.

  --------------------------------------------------------- ----------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------
  Option                                                    MAIA behaviour                                                                Trade-off

  A --- No POD gate in MAIA (client\'s stated preference)   \"Delivered\" status, if tracked at all, is not gated by an uploaded photo.   Matches Grace\'s explicit ask; leaves the current SQL gap (no \"mark DO complete\" status) unresolved.

  B --- POD photo gates \"delivered\" status                A photo is required before MAIA marks a delivery complete.                    Adds a step Grace has said she doesn\'t want; contradicts her direct feedback unless David overrides this as owner.
  --------------------------------------------------------- ----------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------

Decision (to confirm in this session): 6a --- \[ \] Option A \[ \] Option B • 6b --- \[ \] Option A \[ \] Option B

**7. Acceptance Declaration**

**Client acceptance statement.** By signing this checklist, Macro Frozen Sdn. Bhd. confirms that the MAIA implementation has been demonstrated and reviewed against the scope in Section 2 and the criteria in Sections 4 and 5.

**Pass / Fail annotation.** Items marked Pass are accepted as meeting the relevant expectation. Items marked Fail are recorded as open, deferred or retest items before final operational acceptance, unless both parties agree in writing to exclude them.

**Commercial milestone.** Where all relevant items are marked Pass and this checklist is signed by the authorised client representative, the UAT acceptance milestone under the signed proposal is treated as achieved.

**Evidence.** This checklist intentionally excludes internal test notes, screenshots and chat logs. The signed and annotated copy serves as the acceptance record.

**Sign-off selection:**

Accepted --- all relevant items marked Pass.

Accepted with exceptions --- failed / deferred items annotated above.

Not accepted --- retest required before UAT sign-off.

**8. Authorised Signatures**

  ----------------------------- ---------------------------------
  For Macro Frozen Sdn. Bhd.    

  Signature                     

  Name                          Choy Kien Yang (\"David\")

  Position                      Managing Director

  Date                          
  ----------------------------- ---------------------------------

  ------------------------- -------------------
  For AutorunBiz PLT        

  Signature                 

  Name                      \[TO FILL\]

  Position                  \[TO FILL\]

  Date                      
  ------------------------- -------------------

**See Also**

\[\[MAIA_UAT_Field_Guide_Play_It_Like_A_User\]\]

\[\[MAIA_UAT_Launch_Readiness_Checklist\]\]

\[\[Macrofood --- Scope Lock v1 (reconciled)\]\]

\|（注：部分内容可能由 AI 生成）

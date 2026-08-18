**Dalson Industrial Supplies --- UAT Preparation**

**owner: Gareth\
status: draft\
last_reviewed: 2026-07-31\
lark_url: <https://eg69120xnei.sg.larksuite.com/wiki/N5Fgw8KfnicRISkp7j3lt4e3gYf>**

Everything a tester needs in one doc: who Dalson is, what\'s actually locked to test, the before/after story, and the full hands-on test case set. Summarised from \[\[Dalson Industrial Supplies Customer Narrative Document\]\], Scope Lock v2 (Lark), \[\[Dalson --- VoC Extraction\]\], \[\[Dalson --- Before vs After MAIA and E2E Flow\]\] --- test cases pulled in full from \[\[Dalson --- UAT Checklist\]\]. Go to source docs for citations/detail.

**1. Client & Business Snapshot**

**Dalson Industrial Supplies** --- small B2B industrial hardware trader (Malaysia). Customers: auto shops, automotive- and construction-related businesses.

**\~50--100 orders/month.** Orders come in via calls, WhatsApp, some email --- team manually interprets and processes each one today.

**System of record: AutoCount.** MAIA is an operational layer on top, not a replacement.

**Registered MAIA users (3):Yap Li Min** (Owner, dual role as Sales Coordinator), **Asilah** (Sales Coordinator), **Joseph** (Store Keeper). **Lalamove** handles delivery (external courier, not a MAIA user).

**Core pain (why this project exists):** SKU/item-description mismatch risk (customer wording vs internal SKU naming), manual invoicing key-in when AutoCount records are incomplete, and fragmented order/delivery visibility across WhatsApp threads.

**VoC bottom line:** Yap Li Min isn\'t buying \"an AI layer\" --- she\'s buying relief from personally carrying operational memory: which document went where, what a new customer needs before invoicing, what an order costs. She actively corrects wrong assumptions (credit notes, receipts) rather than accepting defaults --- a good UAT engagement sign, but means nothing should be assumed without her direct confirmation.

**2. Scope Status (Scope Lock v2) --- what\'s actually testable**

**LOCKED (build-ready, testable):**

  ------- ---------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ID      Item                                                 Note

  SL-1    MAIA as layer on AutoCount                           AutoCount = ledger, never replaced

  SL-2    Order intake, unstructured channels                  Telegram (superseded from WhatsApp)

  SL-3    Messaging channel = Telegram                         Superseded from original WhatsApp plan

  SL-4    SKU alias matching                                   Staff confirms match, no auto-commit

  SL-5    POD capture                                          Lalamove hands POD to staff; staff attaches to DN

  SL-6    AutoCount access + migration                         Access + historical data done

  SL-7    No separate approval gate                            Any of 3 users submits directly (superseded 2026-07-20)

  SL-8    Credit note = invoice-level only                     Never account-level

  SL-9    No stock-count tracking for B2B                      Only small retail slice tracked

  SL-10   Pricing logic                                        Chatbot shows price history, staff confirms; standard price if no history

  SL-11   Customer/item creation via chatbot                   No manual AutoCount entry needed

  SL-13   SO stage reinterpreted (quotation stays MAIA-only)   **MED confidence** --- downgraded 2026-07-31, pending a properly attributed re-verification of Dalson\'s live AutoCount instance. Test steps below already reflect the correct (\"MAIA-only\") behavior.

  SL-17   Receipts                                             On request only, never automatic

  SL-14   Document templates                                   LOCKED 2026-07-31 --- MAIA\'s own PDF template, all 5 doc types (SO/SI/DO/CN/QTN). **No test cases written yet --- see Excluded table.**
  ------- ---------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**LOCKED but no test cases written yet:** SL-14 (document templates --- confirmed 2026-07-31, MAIA\'s own PDF template for all 5 doc types; needs UAT Checklist test cases added before it can be executed).

**NOT tested this cycle (design-locked-but-inactive / NS / OOS):** SL-12 (AutoCount 2-way sync --- design confirmed direct DB access, but **not turned on yet** in Dalson\'s live environment, do not test), SL-15/SL-16 (out of scope), e-invoice mandatory fields (needs re-verify), SKU-matching confidence thresholds (refinement on SL-4).

**BLOCKING --- confirmed gap, not yet scoped, not testable:**

**Cash Sales Invoice support** --- confirmed 2026-07-31: Dalson does handle walk-in/cash sales (no PO, no formal customer record). MAIA has no cash-invoice type today --- no front-end payment UI, chatbot can\'t handle it, backend schema missing, PDF/reporting doesn\'t surface it. Not sized. (Needs-Scoping Register row 12 --- flag to backend before UAT.)

**3. Before → After (compressed)**

  ----------------------- ------------------------------------------------------- --------------------------------------------------------------------------------
                          Before MAIA                                             After MAIA

  Order intake            PO via WhatsApp/call/email, staff interprets manually   Forwarded to MAIA via Telegram, drafted + SKU-matched automatically

  New customer/item       Manual AutoCount key-in, daily bottleneck               Created directly via chatbot

  Pricing                 From staff memory only                                  Chatbot shows price history, staff confirms

  Order stage             No SO, PO goes straight to packing                      Same --- no formal SO stage; quotation/SO-equivalent stays in MAIA only

  Submission              N/A (informal)                                          Any of 3 users submits directly, no approval gate

  Fulfillment             Joseph packs directly, no pick list                     Same --- no pick list introduced

  Delivery/POD            Lalamove delivers, POD lost in WhatsApp threads         Lalamove delivers, staff (Asilah/Yap Li Min) uploads POD to DN --- retrievable

  Credit note / receipt   Invoice-level credit note; receipt on request only      Unchanged --- same rules, just system-enforced
  ----------------------- ------------------------------------------------------- --------------------------------------------------------------------------------

**E2E flow (one line):** Quotation created in MAIA (stays MAIA-only) → Customer PO → Staff forwards via Telegram → MAIA drafts + matches SKU → staff confirms match + price → submit (any of 3 users, no gate) → AutoCount → Joseph packs (no pick list) → DN + Invoice created in AutoCount → Lalamove delivers, returns POD → staff attaches POD to DN → credit note (if return) / receipt (if requested).

**Core problems MAIA fixes:** operational memory scattered across WhatsApp/paper, daily manual customer/item onboarding, no structured SKU matching, pricing living in staff\'s head not the system.

**Not fixed / newly found:** cash sales unsupported (blocking, not testable this cycle).

**4. UAT Test Cases (hands-on session --- full set)**

Testers: Yap Li Min, Asilah, Joseph (coordinator/warehouse identities per End-user & Process Map --- confirm named testers before execution). Use real Dalson sample data (customer records, SKUs, sample POs) --- do not fabricate test data at execution time.

**SL-1 --- MAIA as operational layer on top of AutoCount**

  --------- --------- -------------- ------------ -------------------------------------------------- ------------------------------------------------------------------------------------------------------------- ---------------------------------------------- ----------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type   Role/actor   Precondition                                       Steps                                                                                                         Test data                                      Expected result                                                                                                         Pass/Fail   Tester & date

  HP-01     Happy     ---            Yap Li Min   MAIA connected to AutoCount, staging data loaded   1\. Ask MAIA to look up a known customer. 2. Confirm details match AutoCount.                                 Existing customer name from AutoCount export   Customer details shown in MAIA match AutoCount record exactly; no invented fields                                                   

  UP-01     Unhappy   Missing data   Asilah       Customer not yet in AutoCount                      1\. Forward PO for an unlisted customer. 2. Observe MAIA\'s response.                                         PO from a customer not in AutoCount export     MAIA flags customer as not found and asks staff to key in / confirm --- does NOT invent or auto-create a ledger entry               

  UP-02     Unhappy   Must-NOT       Yap Li Min   Draft SO prepared in MAIA                          1\. Prepare a draft SO via MAIA. 2. Attempt to treat the draft as final without explicit confirmation step.   Any draft order                                MAIA does NOT push the order to AutoCount as a finalized ledger entry without an explicit human confirmation action                 

  UP-03     Unhappy   Interruption   Yap Li Min   Mid-draft order in progress                        1\. Start an order draft. 2. Simulate/observe an AutoCount sync interruption. 3. Resume.                      In-progress draft                              MAIA surfaces the sync failure to the user rather than silently completing or losing the order                                      
  --------- --------- -------------- ------------ -------------------------------------------------- ------------------------------------------------------------------------------------------------------------- ---------------------------------------------- ----------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**SL-2 --- Core order intake via unstructured channels**

  --------- --------- ---------------------- ------------ ---------------------------------------- ------------------------------------------------------------------------------------------------------ ----------------------------------------------- ----------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type           Role/actor   Precondition                             Steps                                                                                                  Test data                                       Expected result                                                                                       Pass/Fail   Tester & date

  HP-02     Happy     ---                    Asilah       MAIA channel live                        1\. Forward a real customer PO image/text into MAIA. 2. Review the extracted draft.                    Sample PO                                       MAIA produces an order draft with items/quantities matching the PO                                                

  UP-04     Unhappy   Conflict/duplicate     Asilah       Same PO available twice                  1\. Forward the same PO into MAIA twice. 2. Observe behavior.                                          Duplicate PO                                    MAIA warns of a likely duplicate order rather than silently creating two orders                                   

  UP-05     Unhappy   Invalid input          Asilah       ---                                      1\. Forward a garbled/partial PO (e.g. cropped image, incomplete text). 2. Observe MAIA\'s handling.   Deliberately incomplete PO                      MAIA flags missing/unclear information and asks for clarification rather than guessing a full order               

  UP-06     Unhappy   Downstream integrity   Yap Li Min   Order placed and delivered weeks prior   1\. Ask MAIA/backend workspace to retrieve the DO for a specific past order. 2. Confirm it\'s found.   A live order reference from a completed order   The correct DO is retrievable by order reference                                                                  
  --------- --------- ---------------------- ------------ ---------------------------------------- ------------------------------------------------------------------------------------------------------ ----------------------------------------------- ----------------------------------------------------------------------------------------------------- ----------- ---------------

**SL-3 --- Messaging channel = Telegram**

  --------- --------- --------------- --------------------- -------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------- ------------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type    Role/actor            Precondition                     Steps                                                                                                                                                     Test data                                   Expected result                                                                                                           Pass/Fail   Tester & date

  HP-03     Happy     ---             Yap Li Min / staff    Dalson Telegram account set up   1\. Send a message from a registered staff Telegram account. 2. Confirm MAIA responds.                                                                    Registered account                          MAIA responds correctly via Telegram                                                                                                  

  UP-07     Unhappy   Wrong actor     Unregistered person   ---                              1\. Message MAIA\'s Telegram account from an unknown/unregistered number. 2. Observe response.                                                            Any non-staff Telegram account              MAIA does not process the message as a valid staff order/action                                                                       

  UP-19     Unhappy   Invalid input   Yap Li Min / staff    Dalson Telegram account set up   1\. Send a non-text message (photo, sticker, voice note with no text) to MAIA\'s Telegram account from a registered staff account. 2. Observe response.   Registered account, non-text message type   MAIA does not misinterpret the message as an order/action --- either prompts for valid text input or rejects gracefully               
  --------- --------- --------------- --------------------- -------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------- ------------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**SL-4 --- SKU alias mapping / matching**

  --------- --------- --------------- ------------ ------------------------- ------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------- ----------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type    Role/actor   Precondition              Steps                                                                                                              Test data                                                Expected result                                                                                 Pass/Fail   Tester & date

  HP-04     Happy     ---             Asilah       Item master loaded        1\. Forward PO with an item description that closely matches one SKU. 2. Confirm MAIA\'s match.                    e.g. \"WD40 spray lube\" → matches catalogued WD40 SKU   MAIA correctly matches to the right SKU                                                                     

  UP-08     Unhappy   Invalid input   Asilah       ---                       1\. Forward PO using customer\'s own wording that differs from internal SKU naming. 2. Observe match/suggestion.   Customer-style description vs internal SKU name          MAIA either matches correctly or surfaces a closest-match suggestion for staff confirmation                 

  UP-09     Unhappy   Ambiguity       Asilah       Two+ similar SKUs exist   1\. Forward PO with a description matching multiple similar SKUs. 2. Observe MAIA\'s handling.                     e.g. two similar valve sizes/models                      MAIA flags ambiguity and asks staff to confirm the correct SKU rather than auto-selecting one               
  --------- --------- --------------- ------------ ------------------------- ------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------- ----------------------------------------------------------------------------------------------- ----------- ---------------

**SL-5 --- POD capture (photo)**

  --------- --------- ---------------------- ------------------------ --------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------- ------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type           Role/actor               Precondition                      Steps                                                                                                                                                          Test data                 Expected result                                                                             Pass/Fail   Tester & date

  HP-05     Happy     ---                    Asilah (or Yap Li Min)   Delivery completed via Lalamove   1\. Receive POD (photo/signed doc) from Lalamove after delivery. 2. Upload and attach it to the DN in MAIA. 3. Confirm it\'s linked to the correct order/DO.   Sample delivery + POD     POD is stored and linked to the correct order/DO record                                                 

  UP-10     Unhappy   Missing data           Asilah                   Delivery completed                1\. Complete a delivery via Lalamove. 2. Do NOT attach a POD to the DN. 3. Check order status in backend.                                                      ---                       Order/DO status reflects missing POD rather than silently marking delivery fully complete               

  UP-11     Unhappy   Downstream integrity   Yap Li Min               POD uploaded previously           1\. Retrieve a past order. 2. Confirm the POD is still viewable from the order/DO trail.                                                                       Past completed delivery   POD remains retrievable and correctly linked                                                            
  --------- --------- ---------------------- ------------------------ --------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------- ------------------------------------------------------------------------------------------- ----------- ---------------

**SL-6 --- AutoCount integration (access + data migration)**

  --------- --------- --------------------------- ------------ -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------- ----------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type                Role/actor   Precondition         Steps                                                                                                                                                            Test data             Expected result                                                                     Pass/Fail   Tester & date

  HP-06     Happy     ---                         Yap Li Min   Migrated data live   1\. Confirm a sample of migrated customer/item records in MAIA match AutoCount. 2. Push a confirmed SO from MAIA. 3. Verify it appears correctly in AutoCount.   Sample record set     Data matches 1:1; pushed record appears correctly in AutoCount                                  

  UP-12     Unhappy   Interruption                Yap Li Min   ---                  1\. Simulate AutoCount unavailability. 2. Attempt to push a confirmed order. 3. Observe MAIA\'s response.                                                        Any confirmed order   MAIA surfaces the failure clearly, does not silently drop or duplicate the record               

  UP-13     Unhappy   Missing / incomplete data   Yap Li Min   ---                  1\. Identify a record in AutoCount not present in the migrated data. 2. Query it via MAIA.                                                                       Edge-case record      MAIA does not fabricate data for a record it cannot find; flags as not found                    
  --------- --------- --------------------------- ------------ -------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------- ----------------------------------------------------------------------------------- ----------- ---------------

**SL-7 --- Submission flow (no separate approval gate)**

  --------- --------- -------------------------- ----------------------------------- ------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------ ----------- ---------------
  Test ID   Path      Trigger type               Role/actor                          Precondition                                Steps                                                                                                                                                                  Test data            Expected result                                                                                                          Pass/Fail   Tester & date

  HP-07     Happy     ---                        Asilah (or Yap Li Min, or Joseph)   Draft SO/Invoice ready                      1\. Any of the 3 registered users submits the draft directly. 2. Confirm it proceeds to AutoCount without requiring a second person\'s sign-off.                       Sample draft order   Order proceeds to AutoCount on the registered user\'s own submission --- no second approval step exists or is required               

  UP-14     Unhappy   Must-NOT                   ---                                 Draft SO/Invoice ready, not yet submitted   1\. Leave the draft unsubmitted. 2. Confirm MAIA itself never auto-pushes it to AutoCount without one of the 3 registered users explicitly taking the submit action.   Same sample draft    Draft remains pending until a registered user explicitly submits                                                                     

  UP-15     Unhappy   Wrong actor / permission   Unregistered person                 Draft SO/Invoice ready                      1\. An unregistered/non-staff account attempts to submit the draft. 2. Observe system response.                                                                        Same sample draft    System refuses --- only the 3 registered users (Yap Li Min, Asilah, Joseph) can submit                                               
  --------- --------- -------------------------- ----------------------------------- ------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------ ----------- ---------------

**SL-8 --- Credit note handling (invoice-level)**

  --------- --------- ------------------ ---------------------- --------------------------------------- --------------------------------------------------------------------------------------------------------------------------------- ---------------------------------- ----------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type       Role/actor             Precondition                            Steps                                                                                                                             Test data                          Expected result                                                                           Pass/Fail   Tester & date

  HP-08     Happy     ---                Yap Li Min / finance   Existing invoice with a returned item   1\. Issue a credit note referencing the specific invoice ID and item. 2. Confirm it\'s recorded correctly.                        Sample invoice + return item       Credit note is tied to the correct invoice ID, not the customer account                               

  UP-16     Unhappy   Must-NOT           Yap Li Min / finance   ---                                     1\. Attempt to issue a credit note at the customer-account level (no specific invoice reference). 2. Observe system response.     Customer account, no invoice ref   System does not allow account-level credit note                                                       

  UP-17     Unhappy   Boundary / limit   Yap Li Min / finance   ---                                     1\. Attempt to issue a credit note against an invoice ID that doesn\'t exist or is already fully credited. 2. Observe response.   Invalid/exhausted invoice ID       System rejects with a clear error, does not create an orphaned or duplicate credit note               
  --------- --------- ------------------ ---------------------- --------------------------------------- --------------------------------------------------------------------------------------------------------------------------------- ---------------------------------- ----------------------------------------------------------------------------------------- ----------- ---------------

**SL-9 --- Warehouse / stock update responsibility**

  --------- --------- ---------------------- ------------ ----------------- --------------------------------------------------------------------------------------------------------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Path      Trigger type           Role/actor   Precondition      Steps                                                                                                                             Test data            Expected result                                                                                                      Pass/Fail   Tester & date

  HP-09     Happy     ---                    Joseph       Order confirmed   1\. Confirm an order. 2. Confirm stock levels update to reflect the fulfilled order.                                              Sample stocked SKU   Stock quantity reflects the order without manual re-entry                                                                        

  UP-18     Unhappy   Downstream integrity   Joseph       ---               1\. Fulfill an order for an item marked as one that doesn\'t require stock-count tracking. 2. Confirm system behaves correctly.   Non-tracked SKU      System respects the item\'s tracking configuration; does not force an update where the client doesn\'t track stock               
  --------- --------- ---------------------- ------------ ----------------- --------------------------------------------------------------------------------------------------------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**SL-10 --- Pricing logic (ad hoc, per-customer)**

  --------- --------- ---------------------- -------------------- ----------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------ ----------- ---------------
  Test ID   Path      Trigger type           Role/actor           Precondition                                                                              Steps                                                                                                                                                                                                                                                                                         Test data                                        Expected result                                                                                                                      Pass/Fail   Tester & date

  HP-13     Happy     ---                    Yap Li Min / staff   Customer has ordered this item at least once before                                       1\. Start a new order for a repeat customer + item they\'ve bought before. 2. Open the pricing step in the chatbot. 3. Confirm the chatbot displays price(s) charged on that customer\'s last few orders for this item. 4. Enter/confirm the price for this order referencing that history.   Repeat customer, item with prior order history   Chatbot surfaces the last few order prices for that customer+item combo; staff can reference it before confirming the line price                 

  UP-26     Unhappy   Missing precondition   Yap Li Min / staff   New customer, or first order of this item for this customer --- no price history exists   1\. Start a new order for a customer/item combo with no prior order history. 2. Observe pricing step.                                                                                                                                                                                         New customer or new item for existing customer   MAIA auto-applies the standard AutoCount item price as the default; staff can still override it --- no blank/undefined price field               

  UP-27     Unhappy   Must-NOT               ---                  Repeat customer with price history                                                        1\. Confirm the chatbot does not silently auto-fill a single \"last price\" without staff confirmation.                                                                                                                                                                                       Repeat customer order                            Staff always sees and confirms the price line --- history is a reference, not an auto-committed value                                            
  --------- --------- ---------------------- -------------------- ----------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------ ----------- ---------------

**SL-11 --- Customer & item/SKU creation via chatbot**

  --------- --------- ---------------------- ---------------- -------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------- ------------------------------------------------------------------------------------------------------------ ----------- ---------------
  Test ID   Path      Trigger type           Role/actor       Precondition                     Steps                                                                                                                                                                     Test data                         Expected result                                                                                              Pass/Fail   Tester & date

  HP-10     Happy     ---                    Asilah / staff   Chatbot access to MAIA           1\. Create a new customer via the chatbot for a first-time buyer. 2. Confirm it pushes correctly to AutoCount. 3. Repeat for a new SKU/item not yet in the item master.   New customer + new item details   Both new customer and new item are created and reflected correctly in AutoCount, no manual key-in required               

  UP-20     Unhappy   Invalid input          Asilah / staff   ---                              1\. Attempt to create a new customer via chatbot with a mandatory field missing (e.g. no tax identity). 2. Observe response.                                              Incomplete customer details       MAIA flags the missing mandatory field and does not push an incomplete record to AutoCount                               

  UP-21     Unhappy   Conflict / duplicate   Asilah / staff   Customer or SKU already exists   1\. Attempt to create a customer/SKU that already exists in AutoCount. 2. Observe response.                                                                               Existing customer or SKU name     MAIA detects the duplicate, does not create a second record, prompts staff to use the existing one                       
  --------- --------- ---------------------- ---------------- -------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------- ------------------------------------------------------------------------------------------------------------ ----------- ---------------

**SL-13 --- SO stage reinterpreted (quotation/SO-equivalent stays MAIA-only)**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  MED confidence --- pending a properly attributed re-verification of Dalson\'s live AutoCount instance (or direct client re-confirmation). Test the behavior below as currently defined; flag any live-system discrepancy found during testing back to product immediately.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------- --------- -------------- ------------ ---------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------- ------------------------------------------------------------------------------------------------------------------------ ----------- ---------------
  Test ID   Path      Trigger type   Role/actor   Precondition                                               Steps                                                                                                                                                                                                                             Test data                  Expected result                                                                                                          Pass/Fail   Tester & date

  HP-11     Happy     ---            Yap Li Min   New customer requiring upfront payment                     1\. Generate the MAIA-side proforma/SO-style document for a new customer. 2. Confirm the customer pays. 3. Confirm Invoice + DO push to AutoCount as normal, while the SO/quotation-equivalent document stays inside MAIA only.   New customer order         Proforma document generated correctly; only Invoice + DO reach AutoCount, no formal SO record created there                          

  UP-22     Unhappy   Must-NOT       ---          Any order at SO/quotation stage                            1\. Confirm the SO/quotation-equivalent document is never pushed to AutoCount as a formal Sales Order record.                                                                                                                     Any order                  AutoCount never receives a Sales Order record from MAIA --- only Invoice and DO                                                      

  UP-23     Unhappy   Wrong state    ---          SO/quotation document exists in MAIA, not yet an invoice   1\. Attempt to push the MAIA-side SO/quotation document directly to AutoCount without going through the Invoice step. 2. Observe response.                                                                                        In-progress SO/quotation   System blocks or rejects --- the only valid path to AutoCount is via Invoice, not directly from the SO/quotation stage               
  --------- --------- -------------- ------------ ---------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------- ------------------------------------------------------------------------------------------------------------------------ ----------- ---------------

**SL-17 --- Receipts**

  --------- --------- ---------------------- -------------------- ----------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------ ----------- ---------------
  Test ID   Path      Trigger type           Role/actor           Precondition                                    Steps                                                                                                                         Test data                                   Expected result                                                                                                                            Pass/Fail   Tester & date

  HP-12     Happy     ---                    Yap Li Min / staff   Customer has paid, proof of payment attached    1\. Customer explicitly requests a receipt. 2. Staff generates it via one click in MAIA, tied to the related order/invoice.   Paid order with proof of payment attached   Receipt is generated correctly and linked to the correct order/invoice                                                                                 

  UP-24     Unhappy   Must-NOT               ---                  Proof of payment attached to an order/invoice   1\. Attach a proof of payment to an order or invoice. 2. Confirm no receipt is auto-generated.                                Any paid order                              No receipt is generated automatically --- receipt generation only happens on explicit request                                                          

  UP-25     Unhappy   Missing precondition   Yap Li Min / staff   No proof of payment attached                    1\. Attempt to generate a receipt for an order with no attached proof of payment. 2. Observe response.                        Unpaid or unconfirmed order                 System flags the missing precondition or requires explicit confirmation --- does not silently generate a receipt with nothing to back it               
  --------- --------- ---------------------- -------------------- ----------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------ ----------- ---------------

**Excluded --- not tested this cycle**

  ------- ----------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------
  ID      Item                                                  Reason not tested

  ---     Cash Sales Invoice support                            NEEDS SCOPING, **BLOCKING** --- confirmed 2026-07-31, MAIA has no cash-invoice type built yet

  ---     Customer master e-invoice mandatory fields            NS --- PARTIAL, needs re-verification specific to Dalson before testable

  SL-12   AutoCount integration: ongoing 2-way sync mechanism   LOCKED (design), but **not turned on yet** in Dalson\'s live environment --- confirmed 2026-07-31, do not test this cycle

  SL-14   Document generation (SO/Invoice/DO PDFs)              LOCKED 2026-07-31 (MAIA\'s own PDF template, all 5 doc types) --- **no test cases written yet**, needs UAT Checklist update before it\'s executable

  SL-15   Supplier-side procurement automation                  OOS --- explicitly excluded from Phase 1

  SL-16   Full ERP replacement                                  OOS --- MAIA is overlay only
  ------- ----------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------

**5. Open Items Before/During UAT**

**Cash Sales Invoice gap** --- blocking, needs sizing before UAT; not testable.

**SL-13 quotation destination** --- MED confidence, needs a named, attributed re-verification of Dalson\'s live AutoCount instance (or direct client re-confirmation) --- testers should flag any discrepancy found live.

**UAT signatory** --- sole (Yap Li Min) or multi-signatory (Asilah/Joseph each sign their portion)?

**Asilah\'s visibility scope** --- own customers only, or all of Dalson\'s?

**SKU-matching confidence thresholds, e-invoice mandatory fields** --- still open in Needs-Scoping Register, not testable this cycle.

**Named testers for coordinator/warehouse roles** --- confirm actual people before execution (per End-user & Process Map sign-off agenda).

**See Also**

\[\[Dalson Industrial Supplies Customer Narrative Document\]\]

\[\[Dalson --- VoC Extraction\]\]

\[\[Dalson --- Before vs After MAIA and E2E Flow\]\]

\[\[Dalson --- UAT Checklist\]\]

\[\[Dalson --- End-user & Process Map\]\]

\[\[Dalson --- Lens Alignment Report\]\]

Scope Lock v2 --- Dalson Industrial Supplies (Lark, doc token VHQPdEnCbopM9pxRapJliGiXgrb)

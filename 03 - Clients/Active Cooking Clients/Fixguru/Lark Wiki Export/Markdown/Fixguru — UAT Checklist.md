**Fixguru --- UAT Checklist**

**Fixguru --- UAT Checklist**

**MISSING SOURCE:** Customer Narrative --- not present for Fixguru. Unhappy-path coverage below is built from raw transcripts (2026-05-14 on-site, 2026-06-24 debrief) and the VoC Extraction instead; treat as a partial substitute.\
**MISSING SOURCE:** Forensic / actor dossier --- not present. Actor/role names below come from Scope Lock v2 and meeting attendee lists only.

Sources used: \[\[Scope Lock v1 --- Fixguru\]\] (superseded), Scope Lock v2 (Lark, <https://eg69120xnei.sg.larksuite.com/wiki/AdBgwaw2TiMhFOkChoVlJVKGgng> --- fetched 13 Jul 2026, post-resolution), \[\[Fixguru --- VoC Extraction\]\].

**Step 1 --- Scope Inventory**

  ------------------ ------------------------------------------------ -------------------------------------------------- ---------------------------------------------------------------------- -----------------------------------------------------------------------------------
  Scope ID           Item name                                        Status                                             Client agreed?                                                         Testable?

  L-01               AutoCount as master system of record             LOCKED                                             YES                                                                    YES

  L-02               Internal WhatsApp chatbot, not customer-facing   LOCKED                                             YES                                                                    YES

  L-03               Core sales document flow                         LOCKED                                             YES                                                                    YES

  L-04               Draft editability before final submission        LOCKED                                             YES                                                                    YES

  L-05               RSC + Diecut calculator only                     LOCKED (SUPERSEDED)                                YES                                                                    YES

  L-06               FOC quantity handling                            LOCKED                                             YES                                                                    YES

  L-07               Delivery method / charge as SKU line item        LOCKED                                             YES                                                                    YES

  L-08               Brand in item display string                     LOCKED                                             YES                                                                    YES

  AIP-01             Historical pricing + discount visibility         LOCKED (promoted 13 Jul 2026, was AIP)             YES                                                                    YES

  AIP-02             Chat + web dual-interface (FE link-out)          LOCKED (promoted 13 Jul 2026, was AIP)             YES                                                                    YES

  AIP-03             Customer search by phone/WhatsApp number         AGREED IN PRINCIPLE                                Partial (phone-first YES; partial-search UNKNOWN)                      NO --- not fully locked

  AIP-04             Historical delivery method recommendation        AGREED IN PRINCIPLE                                Partial (last-5 YES; source doctype UNKNOWN)                           NO --- not fully locked

  AIP-05             Credit limit / credit exposure approval          AGREED IN PRINCIPLE                                Partial (DN-block YES-pending-test; formula/approver role UNKNOWN)     NO --- not fully locked

  AIP-06             Minimum price / below-threshold approval         AGREED IN PRINCIPLE                                Partial (item+UOM YES, price-book bypass YES; approver role UNKNOWN)   NO --- not fully locked

  AIP-07             Price-book / customer-specific pricing bypass    AGREED IN PRINCIPLE                                Partial (bypass rule YES; storage/API mechanics UNKNOWN)               NO --- not fully locked

  AIP-08             Warehouse / shelf / branch stock configuration   AGREED IN PRINCIPLE                                Partial (shelf-in-DN-note YES; warehouse source-of-truth UNKNOWN)      NO --- not fully locked

  NS-05              Payment proof vs AutoCount AR timing             Needs-Scoping, parked                              NO (deliberately parked)                                               NO

  NS-07              Delivery method history doctype source           Needs-Scoping, open                                NO                                                                     NO

  NS-09              Multilingual chatbot quality                     Needs-Scoping, \"implemented --- needs testing\"   Partial                                                                Smoke-test only, not full case

  NS-10              PDF / document template (AutoCount parity)       Needs-Scoping, \"implemented --- needs testing\"   Partial                                                                Smoke-test only, not full case

  NS-11              SST/tax visibility                               Needs-Scoping, RESOLVED                            YES                                                                    Behavior implied by L-03/AIP-01 docs; no dedicated case needed beyond a PDF check

  S-01 to S-04       Supersessions                                    Client agreed YES (per Scope Lock v2)              YES                                                                    Folded into L-04/L-07/AIP-01/AIP-02 cases above --- no separate cases

  OOS-01 to OOS-04   Out-of-scope exclusions                          N/A                                                N/A                                                                    NO --- must-NOT cases only, see Step 2
  ------------------ ------------------------------------------------ -------------------------------------------------- ---------------------------------------------------------------------- -----------------------------------------------------------------------------------

**Note on AIP-03 through AIP-08:** these are not promoted to LOCKED because at least one sub-criterion remains genuinely open (see Scope Lock v2 \"Acceptance criteria still to lock\" under each). Per the SOW/AIP status is not testable end-to-end this round --- no full test case written for these. Where a *specific* sub-criterion is fully resolved (e.g. AIP-06\'s item+UOM threshold, AIP-06\'s price-book bypass), a targeted case is added under a \"Resolved sub-criteria --- smoke test only\" banner in Step 3, since these are effectively-locked facts even though the parent item isn\'t promoted.

**Step 2 --- Unhappy-Path Bank**

  ------ -------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------
  \#     Trigger type               Real situation from the docs                                                                                                                                                                                                Stresses

  1      Invalid input              Discount entered as flat currency (\"3 ringgit\") when system expects percentage --- \"3% of 60 ringgit is not 3 ringgit\... they capture 3 ringgit instead of 3%\" (14 May transcript)                                     AIP-01, L-03

  2      Missing/incomplete data    User states \"Lalamove\" as delivery method without stating a charge amount --- bot must NOT silently book a SKU line (Scope Alignment doc: bare \"Lalamove\" = fulfillment method only, price must be stated explicitly)   L-07

  3      Boundary/limit breach      Item price entered below floor --- e.g. item G1, standard 0.33, floor 0.27 (24 Jun debrief)                                                                                                                                 AIP-06 (resolved sub-criteria only)

  4      Boundary/limit breach      Customer\'s credit exposure exceeds credit limit at DN creation (AR owing RM10,000, current DO RM5,000, credit limit RM10,000 scenario, 14 May transcript)                                                                  AIP-05 (resolved DN-block sub-criterion only)

  5      Ambiguity                  Item created in MAIA as \"G7\", pushed to AutoCount, AutoCount assigns different external code --- MAIA must resolve to AutoCount\'s ID, not keep its own (14 May / UAT Action Items)                                       L-01, L-08

  6      Wrong actor/permission     Non-management user attempts to approve a below-floor or over-credit-limit order                                                                                                                                            AIP-05, AIP-06 (resolved sub-criteria)

  7      Conflict/duplicate         Two SOs created for the same customer/quotation reference in the same session --- \"I only have one customer now, I also cannot proceed\" (14 May transcript, confusion from duplicate quotation IDs)                       L-03, L-04

  8      Interruption/wrong state   User tries to edit a Sales Order after it has already been confirmed/submitted to AutoCount                                                                                                                                 L-04

  9      Downstream integrity       FOC quantity: order 1000 billable + 10 FOC --- stock must decrement 1010, revenue must reflect 1000 × rate only (L-06 acceptance criteria)                                                                                  L-06

  10     Downstream integrity       Delivery charge (e.g. Lalamove RM10) must appear as its own line --- not folded into product revenue, or it breaks e-invoice profit claim (Scope Alignment doc)                                                             L-07

  11     Must-NOT                   Chatbot must NOT respond to customers directly --- internal-only (L-02 acceptance criteria)                                                                                                                                 L-02

  12     Must-NOT                   MAIA must NOT create a duplicate/conflicting accounting record when syncing to AutoCount (L-01 acceptance criteria)                                                                                                         L-01

  13     Must-NOT                   Chatbot must NOT silently submit a draft SO before explicit user confirmation (L-04 acceptance criteria)                                                                                                                    L-04

  14     Must-NOT                   Calculator must NOT offer Pizza Box, Layer Pad, or 5-panel --- RSC + Diecut only (L-05, OOS-02)                                                                                                                             L-05

  15     Must-NOT                   Item display must NOT omit brand even if a customer/item has no brand configured in AutoCount --- must degrade gracefully, not error (L-08)                                                                                 L-08

  16     Ambiguity                  Chatbot receives an item query where the historical pricing FE URL cannot resolve a match (\"not found = not found\" --- no over-enrichment)                                                                                AIP-01

  17     Boundary/limit breach      Item has fewer than 5 historical transactions (e.g. only 2 invoices exist) --- table must show what exists, not pad or error                                                                                                AIP-01
  ------ -------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------

**Step 3 --- Test Cases**

**L-01 --- AutoCount as master system of record**

  --------- ----------- --------- ------------------------- ------------------- -------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------- ------------------------------------------------------------------------------------------------------------------------------ ----------- ---------------
  Test ID   Scope ref   Path      Trigger type              Role/actor          Precondition                                                               Steps                                                                                                                                             Test data                                Expected result                                                                                                                Pass/Fail   Tester & date

  HP-01     L-01        Happy     ---                       Sales agent         Customer, item, SO exist in MAIA                                           1\. Create and submit a Sales Order in MAIA. 2. Check AutoCount sandbox for the corresponding record.                                             Customer CUST-000004, item G1, qty 100   SO appears in AutoCount sandbox with matching customer, item, qty, and MAIA\'s document referencing AutoCount\'s external ID               

  UP-01     L-01        Unhappy   Must-NOT                  Sales agent         SO already synced to AutoCount once                                        Attempt to resubmit/re-sync the same SO a second time                                                                                             Same SO as HP-01                         System does NOT create a second/duplicate AutoCount record for the same SO                                                                 

  UP-02     L-01        Unhappy   Ambiguity                 Sales agent / Ops   Item \"G7\" created in MAIA, then synced                                   1\. Create item G7 in MAIA. 2. Sync to AutoCount, where AutoCount auto-assigns a different code (e.g. G8). 3. Reference the item again in MAIA.   Item G7 → AutoCount G8                   MAIA displays/uses AutoCount\'s assigned code (G8) going forward, not its own original G7 label                                            

  UP-03     L-01        Unhappy   Must-NOT / interruption   Sales agent         AutoCount sync temporarily fails (simulate network drop or sandbox down)   Submit a document while sync is failing                                                                                                           Any SO                                   Sync failure is visible to internal user/management (error/notification), not silently swallowed                                           
  --------- ----------- --------- ------------------------- ------------------- -------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------- ------------------------------------------------------------------------------------------------------------------------------ ----------- ---------------

**L-02 --- Internal WhatsApp chatbot, not customer-facing**

  --------- ----------- --------- -------------- ------------------------ ---------------------------------------------------------------------- --------------------------------------------------------------------- ---------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type   Role/actor               Precondition                                                           Steps                                                                 Test data                                      Expected result                                                                                                                                   Pass/Fail   Tester & date

  HP-02     L-02        Happy     ---            Sales agent              Sales agent has WhatsApp chatbot access                                Message chatbot to create a quotation for an internal test customer   Customer CUST-000004                           Chatbot responds and creates the quotation for the internal sales user                                                                                        

  UP-04     L-02        Unhappy   Must-NOT       Any actor                End customer (not internal staff) has the chatbot\'s WhatsApp number   End customer messages the bot directly asking for a quote             External phone number not on internal roster   Chatbot does NOT process this as an order-creation request the way it would for internal staff (must not act as a customer-facing ordering bot)               

  UP-05     L-02        Unhappy   Wrong actor    Driver (delivery role)   Driver account only has delivery-status permissions                    Driver attempts to create a Sales Order via chatbot                   Driver\'s WhatsApp number                      Chatbot refuses or the action is not available to the driver role                                                                                             
  --------- ----------- --------- -------------- ------------------------ ---------------------------------------------------------------------- --------------------------------------------------------------------- ---------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**L-03 --- Core sales document flow**

  --------- ----------- --------- -------------------- ------------- ---------------------------------------------------------------- -------------------------------------------------------------------------------------------- ------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type         Role/actor    Precondition                                                     Steps                                                                                        Test data                                   Expected result                                                                                                                                                   Pass/Fail   Tester & date

  HP-03     L-03        Happy     ---                  Sales agent   ---                                                              Create Quotation → confirm to Sales Order → create DO → create Invoice, in sequence          Customer CUST-000004, item G3 qty 300       Each document is created in order, invoice traces back to the originating SO/DO with correct AutoCount external IDs                                                           

  HP-04     L-03        Happy     ---                  Sales agent   One SO exists                                                    Create two separate DOs against the same SO (partial deliveries)                             SO with items G1 + PM72                     Both DOs link back to the same parent SO; SO shows partial-delivery status correctly                                                                                          

  UP-06     L-03        Unhappy   Invalid input        Sales agent   ---                                                              Enter a discount as a flat ringgit amount (e.g. \"3\") when the field expects a percentage   3% intended, \"3\" entered on a RM60 line   System does not silently misapply \"3\" as RM3 discount instead of 3% --- either rejects, prompts for clarification, or clearly labels the unit before applying               

  UP-07     L-03        Unhappy   Conflict/duplicate   Sales agent   Two quotations exist for the same customer under similar names   Reference \"quotation for Milky Way\" without specifying which of the two quotation IDs      Customer with 2 open quotations             Chatbot asks user to specify the exact quotation ID rather than guessing/applying to the wrong one                                                                            
  --------- ----------- --------- -------------------- ------------- ---------------------------------------------------------------- -------------------------------------------------------------------------------------------- ------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**L-04 --- Draft editability before final submission**

  --------- ----------- --------- -------------------------- ------------- -------------------------------------------------------------- ------------------------------------------------------------------- ---------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type               Role/actor    Precondition                                                   Steps                                                               Test data                                                        Expected result                                                                                                      Pass/Fail   Tester & date

  HP-05     L-04        Happy     ---                        Sales agent   Draft SO exists, not yet submitted                             Edit item quantity and delivery method on the draft, then confirm   Draft SO, item G1 qty 100 → 150                                  Draft accepts the edit; SO reflects qty 150 after confirm                                                                        

  UP-08     L-04        Unhappy   Interruption/wrong state   Sales agent   SO has been confirmed/submitted to AutoCount                   Attempt to edit an item or quantity on the already-submitted SO     Submitted SO                                                     System blocks the edit or requires an explicit amendment flow --- must not silently overwrite a submitted document               

  UP-09     L-04        Unhappy   Must-NOT                   Sales agent   Draft SO with incomplete info (e.g. missing delivery charge)   User is mid-conversation, has not said \"confirm\"                  Chatbot must NOT auto-submit the draft to AutoCount on its own   Draft remains editable, no silent submission occurs                                                                              
  --------- ----------- --------- -------------------------- ------------- -------------------------------------------------------------- ------------------------------------------------------------------- ---------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**L-05 --- RSC + Diecut calculator only**

  --------- ----------- --------- ----------------------- ------------- --------------------- --------------------------------------------------------------------------------------- ------------------------- -------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type            Role/actor    Precondition          Steps                                                                                   Test data                 Expected result                                                                              Pass/Fail   Tester & date

  HP-06     L-05        Happy     ---                     Sales agent   ---                   Open RSC calculator, enter dimensions, generate price, apply to quotation line          Box dims: 30x20x15cm      Price calculates and populates into the quotation line correctly                                         

  HP-07     L-05        Happy     ---                     Sales agent   ---                   Open Diecut calculator, enter dimensions, generate price, apply to quotation line       Box dims: 25x18x10cm      Price calculates and populates into the quotation line correctly                                         

  UP-10     L-05        Unhappy   Must-NOT                Sales agent   ---                   Look for Pizza Box, Layer Pad, or 5-panel calculator options                            ---                       These calculator types are NOT available/offered (out of scope, OOS-02)                                  

  UP-11     L-05        Unhappy   Boundary/limit breach   Sales agent   RSC calculator open   Enter a box where width \> length (physically un-printable per Fixguru\'s constraint)   Width 40cm, Length 30cm   Calculator validates and rejects/flags before allowing submission (length must be ≥ width)               
  --------- ----------- --------- ----------------------- ------------- --------------------- --------------------------------------------------------------------------------------- ------------------------- -------------------------------------------------------------------------------------------- ----------- ---------------

**L-06 --- FOC quantity handling**

  --------- ----------- --------- ---------------------- ------------------- ----------------------------------- ------------------------------------------------------------------- -------------------------------- ----------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type           Role/actor          Precondition                        Steps                                                               Test data                        Expected result                                                                                 Pass/Fail   Tester & date

  HP-08     L-06        Happy     ---                    Sales agent         ---                                 Create SO with billable qty 1000 and FOC qty 10 for the same item   Item G1, billable 1000, FOC 10   Document shows both lines clearly; revenue calculates on 1000 only                                          

  UP-12     L-06        Unhappy   Downstream integrity   Sales agent / Ops   SO with FOC as above is delivered   Check stock deduction after DO is created                           Same SO as HP-08                 Stock decrements by 1010 (billable + FOC), not just 1000                                                    

  UP-13     L-06        Unhappy   Downstream integrity   Finance             Invoice generated from the FOC SO   Check invoice total                                                 Same SO as HP-08                 Invoice revenue reflects 1000 × rate only --- FOC quantity does not inflate the billed amount               
  --------- ----------- --------- ---------------------- ------------------- ----------------------------------- ------------------------------------------------------------------- -------------------------------- ----------------------------------------------------------------------------------------------- ----------- ---------------

**L-07 --- Delivery method / delivery charge as SKU line item**

  --------- ----------- --------- ------------------------- ------------- ----------------------------------- ------------------------------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type              Role/actor    Precondition                        Steps                                                                                            Test data                                                                                            Expected result                                                                                                                         Pass/Fail   Tester & date

  HP-09     L-07        Happy     ---                       Sales agent   ---                                 Create order stating fulfillment method AND delivery charge explicitly in the same instruction   \"Create order for CUST-000004, items G1 x100, fulfillment method Lalamove, delivery charge RM10\"   Delivery charge appears as its own SKU/item line (from AutoCount\'s charge master, per NS-09 answer), not folded into product revenue               

  UP-14     L-07        Unhappy   Missing/incomplete data   Sales agent   ---                                 State only \"Lalamove\" as delivery method, without stating a charge amount                      \"fulfillment method is Lalamove\" (no price stated)                                                 System sets fulfillment method only --- does NOT auto-add a SKU/item line without an explicit charge amount                                         

  UP-15     L-07        Unhappy   Downstream integrity      Finance       Delivery charge added as SKU line   Generate invoice, check accounting treatment of the delivery line                                SO from HP-09                                                                                        Delivery charge line is NOT treated as product revenue --- accounting code is preserved separately                                                  
  --------- ----------- --------- ------------------------- ------------- ----------------------------------- ------------------------------------------------------------------------------------------------ ---------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**L-08 --- Brand in item display string**

  --------- ----------- --------- ------------------------- ------------- ------------------------------------------------------ -------------------------------------------------------- ---------------------------------- ------------------------------------------------------------------------------------------------------ ----------- ---------------
  Test ID   Scope ref   Path      Trigger type              Role/actor    Precondition                                           Steps                                                    Test data                          Expected result                                                                                        Pass/Fail   Tester & date

  HP-10     L-08        Happy     ---                       Sales agent   Item G1 has a brand set in AutoCount item master       Look up item G1 via chatbot or FE                        Item G1, brand \"XMD\" (example)   Display string shows item code + brand + item name, e.g. \"G1 --- XMD --- \[item name\]\"                          

  UP-16     L-08        Unhappy   Missing/incomplete data   Sales agent   Item exists but has no brand configured in AutoCount   Look up that item                                        Item with blank brand field        Display degrades gracefully (shows code + name without a blank/broken brand slot) --- does not error               

  UP-17     L-08        Unhappy   Consistency               Sales agent   Same item viewed in both chatbot and FE                Compare item display string in chatbot output vs FE UI   Item G1                            Brand appears consistently in both surfaces, not only one                                                          
  --------- ----------- --------- ------------------------- ------------- ------------------------------------------------------ -------------------------------------------------------- ---------------------------------- ------------------------------------------------------------------------------------------------------ ----------- ---------------

**AIP-01 --- Historical pricing + discount visibility (promoted to LOCKED 13 Jul 2026)**

  --------- ----------- --------- --------------- ------------- ---------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------- ---------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type    Role/actor    Precondition                                                     Steps                                                                                                             Test data                                      Expected result                                                                                                                                                               Pass/Fail   Tester & date

  HP-11     AIP-01      Happy     ---             Sales agent   Item has ≥5 past invoice transactions                            Query item historical pricing via chatbot for a specific customer + item                                          Customer CUST-000004, item COFFEE-NESTLE-001   Chatbot returns a URL; opening it shows ALL past invoice transactions with columns: item code, item name, date, invoice no, quantity, standard price, discount %, net price               

  HP-12     AIP-01      Happy     ---             Sales agent   ---                                                              Tap the returned FE URL from WhatsApp                                                                             URL per NS-01 example format                   FE page opens directly to the item/customer/history tab (matches tab=history param), no extra navigation needed                                                                           

  UP-18     AIP-01      Unhappy   Ambiguity       Sales agent   Item has zero past invoices for this customer                    Query historical pricing for a never-before-ordered item/customer pair                                            New item, new customer                         System clearly shows \"not found\" / no history --- does NOT fabricate or show unrelated records (\"not found = not found\")                                                              

  UP-19     AIP-01      Unhappy   Boundary        Sales agent   Item has only 2 past invoices (fewer than the old \"5\" floor)   Query historical pricing for this item                                                                            Item with 2 invoices only                      Table shows the 2 available rows, does not pad with blank/fake rows or error out                                                                                                          

  UP-20     AIP-01      Unhappy   Invalid input   Sales agent   ---                                                              Query historical pricing using a source other than Sales Invoice (e.g. only a Quotation exists, no Invoice yet)   Item with QTN history only, no SI              View correctly shows no invoice-sourced history (per NS-02: SI only for this view), does not substitute QTN/SO data silently                                                              
  --------- ----------- --------- --------------- ------------- ---------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------- ---------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**AIP-02 --- Chat + web dual-interface workflow (promoted to LOCKED 13 Jul 2026)**

  --------- ----------- --------- -------------- ------------- ---------------------------- ---------------------------------------------------------------------------------------------------- ----------------------------- ------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref   Path      Trigger type   Role/actor    Precondition                 Steps                                                                                                Test data                     Expected result                                                                                                                       Pass/Fail   Tester & date

  HP-13     AIP-02      Happy     ---            Sales agent   ---                          Request historical pricing in chat, receive URL, tap to open on mobile                               Any item/customer pair        URL opens correctly on mobile browser from WhatsApp, page renders within a few seconds                                                            

  UP-21     AIP-02      Unhappy   Must-NOT       Sales agent   ---                          Check that chatbot does NOT attempt to render the full pricing table as inline WhatsApp text/image   Any multi-row history query   Chatbot returns the link-out, not a bulky inline table (per resolution: link-out replaces the image-attachment idea)                              

  UP-22     AIP-02      Unhappy   Interruption   Sales agent   URL generated for one item   Query a second, different item before opening the first URL                                          Two sequential item queries   Each query returns its own correct, distinct URL --- second query does not silently overwrite/corrupt the first link\'s target data               
  --------- ----------- --------- -------------- ------------- ---------------------------- ---------------------------------------------------------------------------------------------------- ----------------------------- ------------------------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**Resolved sub-criteria only --- smoke test (parent AIP not fully locked)**

  --------- ------------------------------------------------------ ------- -------------- -------------------------- ----------------------------------------------------------------------------------- --------------------------------------------------------------------------------- ------------------------------------ -------------------------------------------------------------------------------------------------------------------- ----------- ---------------
  Test ID   Scope ref                                              Path    Trigger type   Role/actor                 Precondition                                                                        Steps                                                                             Test data                            Expected result                                                                                                      Pass/Fail   Tester & date

  ST-01     AIP-06 (item+UOM threshold, resolved)                  Smoke   Boundary       Sales agent                Item G1, UOM \"piece\", floor 0.27 for this UOM                                     Attempt to price a line below 0.27 for the piece UOM                              G1, piece UOM, price 0.25            Approval trigger fires for this specific UOM\'s threshold, not a single item-wide number                                         

  ST-02     AIP-06 (price-book bypass, resolved)                   Smoke   ---            Sales agent                Customer has a locked price-book entry for item G1 at 0.25 (below standard floor)   Create SO at the price-book price                                                 G1 at price-book rate 0.25           No approval triggered --- price-book-locked price bypasses standard min-price approval                                           

  ST-03     AIP-06 (price-book bypass exception, resolved)         Smoke   Boundary       Sales agent                Same price-book customer as ST-02                                                   Attempt to price even lower than the locked price-book rate (e.g. 0.20)           G1 at 0.20 (below price-book rate)   Approval IS triggered --- going below even the locked price-book price still requires approval                                   

  ST-04     AIP-05 (DN-level block, resolved-pending-test)         Smoke   Boundary       Sales agent / Management   Customer credit exposure would exceed limit only if the block were at DN            Create SO (should NOT block), then create DO for same order (SHOULD block/flag)   Customer at/near credit limit        SO creation proceeds unblocked; DO creation triggers the credit block/approval, confirming DN-level (not SO-level)               

  ST-05     AIP-08 (shelf-in-DN-note, resolved)                    Smoke   ---            Ops/Warehouse              Item has a shelf number configured                                                  Generate a Delivery Note for that item                                            Item with shelf \"A-12\"             Shelf number appears in the DN\'s additional-note field                                                                          

  ST-06     NS-09 (multilingual, implemented-needs-test)           Smoke   ---            Sales agent                Chatbot language preference set to Bahasa Malaysia                                  Send a message in Malay, check response language                                  Preference = BM                      Chatbot replies in Bahasa Malaysia                                                                                               

  ST-07     NS-10 (PDF AutoCount parity, implemented-needs-test)   Smoke   ---            Sales agent                SO with a delivery charge line exists                                               Generate PDF for the SO                                                           SO from L-07 HP-09                   PDF shows delivery charge as its own line, layout resembles AutoCount-style template                                             
  --------- ------------------------------------------------------ ------- -------------- -------------------------- ----------------------------------------------------------------------------------- --------------------------------------------------------------------------------- ------------------------------------ -------------------------------------------------------------------------------------------------------------------- ----------- ---------------

**Step 4 --- Coverage & Traceability**

**4a. Traceability**

  ---------- ----------------------------------- -------------- --------------------- ----------
  Scope ID   Locked item                         Happy cases    Unhappy cases         Covered?

  L-01       AutoCount master system of record   HP-01          UP-01, UP-02, UP-03   YES

  L-02       Internal chatbot only               HP-02          UP-04, UP-05          YES

  L-03       Core sales document flow            HP-03, HP-04   UP-06, UP-07          YES

  L-04       Draft editability                   HP-05          UP-08, UP-09          YES

  L-05       RSC + Diecut calculator only        HP-06, HP-07   UP-10, UP-11          YES

  L-06       FOC quantity handling               HP-08          UP-12, UP-13          YES

  L-07       Delivery charge as SKU line         HP-09          UP-14, UP-15          YES

  L-08       Brand in item display               HP-10          UP-16, UP-17          YES

  AIP-01     Historical pricing (promoted)       HP-11, HP-12   UP-18, UP-19, UP-20   YES

  AIP-02     Chat + web link-out (promoted)      HP-13          UP-21, UP-22          YES
  ---------- ----------------------------------- -------------- --------------------- ----------

**4b. Excluded (not tested)**

  -------- ------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------
  ID       Item                                        Reason not tested

  AIP-03   Customer search by phone/WhatsApp           Not locked --- partial-number search and duplicate-display behavior unconfirmed

  AIP-04   Historical delivery method recommendation   Not locked --- source doctype (invoice/SO/DO) still pending (NS-07)

  AIP-05   Credit limit/exposure approval (full)       Not locked --- exact credit formula and approver role unconfirmed; only DN-block sub-criterion smoke-tested (ST-04)

  AIP-06   Minimum price approval (full)               Not locked --- approver role/location unconfirmed; item+UOM and price-book sub-criteria smoke-tested (ST-01--03)

  AIP-07   Price-book bypass (full)                    Not locked --- where price-book is maintained, AutoCount API availability, upload/import requirement all unconfirmed

  AIP-08   Warehouse/shelf/branch config (full)        Not locked --- warehouse source-of-truth module and multi-warehouse display unconfirmed; shelf-in-DN-note sub-criterion smoke-tested (ST-05)

  NS-05    Payment proof vs AR timing override         Parked/deferred by deliberate client-side choice, not a lock

  NS-07    Delivery method history doctype             Needs-scoping, open --- pending tech + client alignment

  NS-09    Multilingual chatbot quality                \"Implemented --- needs testing\" but not a locked acceptance-criteria set; smoke-tested only (ST-06)

  NS-10    PDF/document template parity                \"Implemented --- needs testing\" but not a locked acceptance-criteria set; smoke-tested only (ST-07)

  OOS-01   WhatsApp reply-function targeting           Explicitly out of scope

  OOS-02   Pizza/Layer Pad/5-panel calculators         Explicitly out of scope (covered as a must-NOT case, UP-10)

  OOS-03   Updated RSC/Diecut formula versions         Explicitly out of scope, treated as CR

  OOS-04   Hardware/on-premise infrastructure          Explicitly out of scope
  -------- ------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------

**4c. Assumptions & gaps**

**NEEDS CLIENT INPUT:** Real test data for items, customers, and phone numbers used above (G1, G3, PM72, COFFEE-NESTLE-001, CUST-000004, 60123456789) are drawn from example URLs and transcript excerpts, not a confirmed live sandbox dataset. Confirm actual sandbox seed data before running.

**NEEDS CLIENT INPUT:** Brand value used in L-08 test cases (\"XMD\") is a placeholder from a transcript example, not a real Fixguru item brand --- substitute real brand/item pairs.

**Assumption:** AIP-01 and AIP-02 were promoted from AGREED-IN-PRINCIPLE to LOCKED today (13 Jul 2026) because their \"acceptance criteria still to lock\" were fully resolved this session. This checklist treats that promotion as valid; if Gareth or the client want to keep them formally AIP pending sign-off, downgrade HP-11--13/UP-18--22 to smoke-test status like the ST- cases.

**Assumption:** For AIP-05/06/07/08, only the specific resolved sub-criteria got smoke-test cases (ST-01 to ST-07), not full happy+unhappy coverage --- consistent with the skill\'s testability rule (whole item must be LOCKED for full coverage). Revisit once each parent AIP is fully closed.

**Doc disagreement carried forward, not resolved here:** Scope Lock v2 itself notes (C-02) that a prior 2nd UAT plan marked historical pricing as \"ready/tested\" while the 24 June transcript showed it still failing --- this checklist assumes the 13 Jul resolutions are the current truth, but the pattern of premature \"ready\" marking is a known risk for this account; don\'t skip HP-11/12 as a formality.

**Final Self-Check**

~~Scope Inventory printed before test cases~~

~~Unhappy-Path Bank printed before test cases~~

~~Every LOCKED item (L-01--08, AIP-01, AIP-02) has ≥1 happy and ≥2 unhappy~~

~~Every \"must NOT\" line from Scope Lock v2 → a Must-NOT test case (UP-04, UP-09, UP-10, UP-12/13 for FOC-not-inflate, UP-14, UP-21)~~

~~Every expected result is observable (specific field/behavior named, not \"works correctly\")~~

~~Real data used where available; placeholders explicitly flagged as NEEDS CLIENT INPUT~~

~~No test cases for NS/OOS/not-locked items --- listed in 4b instead~~

~~Plain language, runnable by a non-technical Fixguru tester~~

**See Also**

\[\[Scope Lock v1 --- Fixguru\]\]

\[\[Fixguru --- VoC Extraction\]\]

\[\[Fixguru --- Lens Alignment Report\]\]

\[\[UAT/Fixguru UAT Readiness Checklist\]\]

\[\[UAT/MAIA UAT Form - Fixguru - 2026-05 (Full)\]\] --- prior round, superseded by this checklist

\|（注：部分内容可能由 AI 生成）

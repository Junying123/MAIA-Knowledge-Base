# Suggested Test Data

Replace these examples with actual Ultimax UAT records if needed.

| Data type              | Example values                                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Customers              | ADVENTIST HOSPITAL & CLINIC SERVICES (M), USAINS HEALTHCARE S/B, SUNWAY MEDICAL CENTRE IPOH S/B, Sunway Medical Centre Damansara, ZENTAVA SUPPLY SDN BHD                                                     |
| Parent selling bundles | T0004 - Proximal Femoral Nail Short, T0005 - Proximal Femoral Nail Long, T0003 - Interlocking Tibial Nail, T0007 - Supra Patella Tibial Nail, T0032 - 4.0mm Cannulated Screw, T0033 - 7.3mm Cannulated Screw |
| Operational bundles    | I0006 - Neogen AR set (Instruments), S0006 - Neogen AR set (Screws), I0010 - 7.3mm KCS set, I0002 - VA 2.7/3.5 mm set                                                                                        |
| Component examples     | Depth Gauge for Locking Screws, Cannulated Drill Bit Diameter 3.0mm, KCS 4.0mm 45mm, KCS 7.3mm 80mm                                                                                                          |
| People / context       | Surgeon, patient, operation date, delivery time, hospital branch, sales owner, driver                                                                                                                        |

## Coverage Map

| Flow area                                       | Covered by   |
| ----------------------------------------------- | ------------ |
| RFQ / quotation creation                        | TC-01, TC-02 |
| Quotation approval and Sales Order creation     | TC-03        |
| Multiple same-customer quotations / orders      | TC-04        |
| Same-as-last-time quotation reuse               | TC-05        |
| Submitted Quotation amendment                   | TC-06        |
| Chain command across multiple documents         | TC-07        |
| Delivery Note and operational bundles           | TC-08        |
| Return Note and used / unused / missing items   | TC-09, TC-10 |
| Sales Invoice                                   | TC-11        |
| Receipt and payment proof                       | TC-12        |
| Search, status check, and references            | TC-13        |
| Mixed command, pause / resume, natural language | TC-14        |
| ID parsing and safeguards                       | TC-15        |
| PDF / CSV exports                               | TC-16        |

## Test Cases

### TC-01 - Create Quotation From Hospital RFQ

| Field                        | Detail                                                                                                                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales                                                                                                                                                                                                                                                                           |
| Workflow to confirm          | Sales receives hospital RFQ and creates a Quotation using parent selling bundle only                                                                                                                                                                                            |
| Flexible user input examples | - `Adventist ask quote for Dr Tan case tomorrow, short PFN one set, delivery before 8am.`&#xA;- `Can prep quotation for Sunway Ipoh, T0032 qty 1, patient name Lee, surgeon Dr Wong.`&#xA;- `USAINS need quote for distal tibia plate, operation 18 May, put parent item only.` |
| Expected MAIA behaviour      | Resolve customer, item, quantity, patient/surgeon/operation remarks, and draft or submit Quotation depending on user confirmation                                                                                                                                               |
| Should MAIA ask if missing   | Customer is unclear, item has multiple matches, quantity missing, operation date required, or patient/surgeon info is mandatory                                                                                                                                                 |

#### Test result

##### Test 1:&#x20;

1. Success&#x20;

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-14.png>)



### TC-02 - Handle Ambiguous Quotation Details

| Field                        | Detail                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary user                 | Sales                                                                                                                                                                                |
| Workflow to confirm          | MAIA should ask only the blocking clarification when the RFQ is incomplete or ambiguous                                                                                              |
| Flexible user input examples | - `Sunway wants tibial nail for Thu, check stock then quote.`&#xA;- `Add bone graft also, small one.`&#xA;- `Create quote for Adventist, 4.0 screw set.`                             |
| Expected MAIA behaviour      | Show likely matching customers/items, ask for exact option, and avoid guessing where there is risk                                                                                   |
| Good clarification examples  | `Do you mean T0003 Interlocking Tibial Nail or T0007 Supra Patella Tibial Nail?`&#xA;`Which Bone Graft size should I add?`&#xA;`I found two Sunway branches. Which one is this for?` |

### TC-03 - Convert Approved Quotation To Sales Order

| Field                        | Detail                                                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales / Operations                                                                                                                                                        |
| Workflow to confirm          | Once customer approves a Quotation, MAIA converts it to a Sales Order using parent selling bundle only                                                                    |
| Flexible user input examples | - `Customer confirm QT-1042, convert to SO.`&#xA;- `USAINS approved the distal tibia quote, make SO and set op date 18 May.`&#xA;- `QT005 sudah approve, help create SO.` |
| Expected MAIA behaviour      | Find submitted Quotation, confirm it is not already converted, create Sales Order, preserve customer/item/pricing/remarks, and return SO number                           |
| Blocked case                 | If Quotation already has a linked SO, MAIA should not create duplicate SO and should show the existing SO                                                                 |

### TC-04 - Bulk Create Quotations / Sales Orders For Same Customer

| Field                        | Detail                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Workflow to confirm          | User sends one structured message containing multiple orders for the same customer, and MAIA creates separate records while preserving each patient's remarks                                                                                                                                                                                                                                                                                                                                                                                                     |
| Flexible user input examples | - `create 3 quotation untuk Sunway Damansara`&#xA;- `order 1: 4.0 cannulated screw set x 1; remarks patient name Stanley, IC 999999-99-9999, MRN 234234, surgery 03/06/2026, surgeon Sean Lee`&#xA;- `order 2: femoral nail standard set x 1; remarks patient name Harith Zain, IC 660606-06-6606, MRN 445566, surgery 06/06/2026, surgeon Dr Kumar Raj`&#xA;- `order 3: distal radius 2.7mm two column set x 1; remarks patient name Marcus Ho, IC 232323-23-2323, MRN 556677, surgery 10/06/2026, surgeon Dr Ng Chee Seng`&#xA;- `delivery semua on 02/06/2026` |
| Expected MAIA behaviour      | Resolve Sunway Damansara, create 3 separate draft Quotations or Sales Orders depending on user wording, assign the correct item and quantity to each record, add the correct patient/IC/MRN/surgery/surgeon details into remarks, and apply delivery date 02/06/2026 to all 3 records                                                                                                                                                                                                                                                                             |
| Chain validation             | MAIA should preserve the grouping of order 1, order 2, and order 3. Patient remarks must not be mixed between records                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Should MAIA ask if missing   | If customer branch is ambiguous, item name has multiple matches, document type is unclear between Quotation and SO, or submission is requested but required fields are incomplete                                                                                                                                                                                                                                                                                                                                                                                 |
| Partial failure behaviour    | If one order has an unresolved item, MAIA should say which order is blocked and ask whether to create the other valid records first or hold all 3                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Test result

##### Test 1:&#x20;

1. Success. Remarks did not get added to the document. tt was added to item remarks&#x20;


![](<images/Ultimax Core Flow Client Validation Test Cases Results-image.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-1.png>)

### TC-05 - Same As Last Week Quotation And Sales Order

| Field                        | Detail                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales                                                                                                                                                                                                                                                               |
| Workflow to confirm          | User asks MAIA to reuse a previous similar operation/order instead of retyping the item details                                                                                                                                                                     |
| Flexible user input examples | - `sunway ipoh ada same operation as last week. buat quotation terus submit and SO`&#xA;- `Same as last week punya Sunway Ipoh case, create quotation and convert to SO.`&#xA;- `Repeat previous Sunway Ipoh operation, submit quote and make SO if details match.` |
| Expected MAIA behaviour      | Search recent Sunway Ipoh quotations/orders from the previous week, identify the matching operation if unambiguous, create the new Quotation, submit it if requested, then create the Sales Order                                                                   |
| Chain validation             | MAIA should not guess if more than one Sunway Ipoh operation exists last week. It should show likely matches and ask the user to choose before creating documents                                                                                                   |
| Should MAIA ask if missing   | Operation date, patient details, surgeon, item/set, or which previous case to copy if multiple matches exist                                                                                                                                                        |
| Partial failure behaviour    | If the Quotation can be created but cannot be submitted or converted to SO, MAIA should stop, explain the blocker, and show which document was created                                                                                                              |

#### Test result:&#x20;

##### Test 1:&#x20;

1. Failed, hallucinated with other previous chat context&#x20;

2. Defaulted to the most recent order, did not ask confirmation on which SO it should reference&#x20;

3. When asked to list the orders from last week, it did not mention items when it's relevant to this situation. Need user to ask for it

4. Keep asking user for confirmation for chain command.&#x20;

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-2.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-3.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-4.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-5.png>)

### TC-06 - Fix Wrong Price On Submitted Quotation

| Field                        | Detail                                                                                                                                                                                                                                                                                              |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales                                                                                                                                                                                                                                                                                               |
| Workflow to confirm          | User asks MAIA to amend a submitted Quotation because the quoted price is wrong                                                                                                                                                                                                                     |
| Flexible user input examples | - `eh for QT-2026-00071 hospital said quoted for the wrong price, they will use is RM 2000. cancel and tukar for this`&#xA;- `QT-2026-00071 price salah, hospital confirm should be RM2000, cancel and amend.`&#xA;- `For this submitted quotation, change price to RM2000 and resubmit if needed.` |
| Expected MAIA behaviour      | Find QT-2026-00071, confirm current status, cancel/amend the submitted Quotation if required, update the item price to RM2,000, and ask before resubmitting or sending updated PDF                                                                                                                  |
| Chain validation             | MAIA should treat `cancel and tukar` as an amendment flow, not as a permanent cancellation without recreation                                                                                                                                                                                       |
| Should MAIA ask if missing   | If the Quotation has multiple line items, if the item to reprice is unclear, or if downstream Sales Order / Delivery Note / Invoice already exists                                                                                                                                                  |
| Partial failure behaviour    | If downstream documents exist, MAIA should stop and explain what must be cancelled or amended first before changing the Quotation price                                                                                                                                                             |

##### Test 1:&#x20;

1. Failed, able to understand but it did not execute all of the commands, kept asking for confirmation even after saying so.&#x20;

2. Bot hallucinated, replacement quotation created using the wrong details. Used from QT-00072.

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-6.png>)

![Cancelled](<images/Ultimax Core Flow Client Validation Test Cases Results-image-7.png>)

!["Fixed" quotation](<images/Ultimax Core Flow Client Validation Test Cases Results-image-8.png>)

![Copied from quotation](<images/Ultimax Core Flow Client Validation Test Cases Results-image-9.png>)

### TC-07 - Chain Command From Quotation To Delivery Note

| Field                        | Detail                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary user                 | Sales / Operations                                                                                                                                                                                                                                                                                                             |
| Workflow to confirm          | User gives one compound instruction and MAIA executes the document chain in the correct order                                                                                                                                                                                                                                  |
| Flexible user input examples | - `Submit quotation, give SOCSO PDF, create sales order, submit sales order, create delivery note.`&#xA;- `For this quotation, submit first, generate the SOCSO PDF, then make SO, submit SO, and prepare DN.`&#xA;- `QT-1042 confirmed. Submit quote, send me SOCSO PDF, convert to SO, submit, then create DN for delivery.` |
| Expected MAIA behaviour      | Confirm the target Quotation, submit it, generate the requested SOCSO PDF, create Sales Order from the submitted Quotation, submit the Sales Order, then create a Draft Delivery Note from the submitted SO                                                                                                                    |
| Order validation             | MAIA must not skip steps. It should only create SO after Quotation submission succeeds, and only create DN after SO submission succeeds                                                                                                                                                                                        |
| Should MAIA ask if missing   | If the Quotation is unclear, already submitted, already converted, missing required details, or the PDF type is unclear                                                                                                                                                                                                        |
| Partial failure behaviour    | If one step fails, MAIA should stop at that step, explain what completed, and ask how to proceed rather than continuing blindly                                                                                                                                                                                                |

#### Test result

##### Test 1:&#x20;

1. Created but hallucinated and created delivery notes without the user asking.

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-10.png>)



####

##### Test 2:&#x20;

1. Executed partially. Could not create invoice because user did not instruct bot to submit the SO.


![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-11.png>)

##### Test 3:&#x20;

1. Success. able to execute with creating two different doc type&#x20;

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-12.png>)

### TC-08 - Create Delivery Note From Sales Order With Operational Bundles

| Field                        | Detail                                                                                                                                                                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics                                                                                                                                                                                                                                                       |
| Workflow to confirm          | DN is created from SO and may include operational instrument/screw bundles in addition to the parent selling bundle context                                                                                                                                     |
| Flexible user input examples | - `SO-221 Sunway Damansara confirm, create DN for tomorrow morning, add Neogen AR instrument tray and AR screws.`&#xA;- `Create delivery note from SO-0310, add I0010 set, scheduled 7.30am.`&#xA;- `Prepare DN for Adventist case and include the screw tray.` |
| Expected MAIA behaviour      | Create DN from the correct SO, carry customer/address/reference, add operational bundles, set delivery timing, and ask before submit if needed                                                                                                                  |
| Should MAIA ask if missing   | Delivery date/time, warehouse, branch/address, or operational bundle is unclear                                                                                                                                                                                 |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                                                                                                |
| Client notes                 |                                                                                                                                                                                                                                                                 |

#### Test result

##### Test 1:&#x20;

1. Failed due to delivery note and warehouse configuration

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-13.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-15.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-16.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-17.png>)

![](<images/Ultimax Core Flow Client Validation Test Cases Results-image-18.png>)

### TC-09 - Return Note With Used, Unused, Missing, Or Damaged Items

| Field                        | Detail                                                                                                                                                                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics / Warehouse                                                                                                                                                                                                                                           |
| Workflow to confirm          | After surgery/delivery, returned sets are checked and Return Note records used implants, unused returns, missing items, or damaged instruments                                                                                                                  |
| Flexible user input examples | - `DN-0341 set came back, surgeon used AR blade 10.3 x 85 and two locking screws 5.0 x 40. Others return unused.`&#xA;- `Adventist DN-0338 return check, depth gauge missing, keep RN open.`&#xA;- `For DN046, hospital used 60mm screw only, return the rest.` |
| Expected MAIA behaviour      | Create RN from DN, explode only relevant bundle if required, mark used/missing/damaged items, keep unresolved RN open, and submit only after confirmation                                                                                                       |
| Should MAIA ask if missing   | Exact screw size, quantity used, missing item identity, or whether to submit/keep draft                                                                                                                                                                         |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                                                                                                |
| Client notes                 |                                                                                                                                                                                                                                                                 |

### TC-10 - Chain Command Return Flow For Used KCS Screw

| Field                        | Detail                                                                                                                                                                                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics / Warehouse                                                                                                                                                                                                                                                                    |
| Workflow to confirm          | User creates a Return Note from a Delivery Note containing T0032 - 4.0mm Cannulated Screw, and records one used KCS screw in the same command                                                                                                                                            |
| Flexible user input examples | - `From DN with T0032 - 4.0mm Cannulated Screw, create return note, hospital used KCS 30mm one.`&#xA;- `DN-046 return: T0032 set came back, create RN, used KCS 4.0mm 30mm one piece.`&#xA;- `For this DN, make return note and remove the 4.0 KCS 30mm screw because hospital used it.` |
| Expected MAIA behaviour      | Create Return Note from the correct DN, explode bundle T0032 - 4.0mm Cannulated Screw, remove KCS 4.0mm (30mm) from the returned items because it was used, and keep the rest of the bundle as returned/unused                                                                           |
| Chatbot response to validate | MAIA should clearly say it exploded T0032 - 4.0mm Cannulated Screw and removed KCS 4.0mm (30mm) as the used item                                                                                                                                                                         |
| Should MAIA ask if missing   | If the DN is unclear, T0032 is not on the DN, the screw size has multiple matches, or quantity is unclear                                                                                                                                                                                |
| Partial failure behaviour    | If the bundle cannot be exploded or KCS 4.0mm (30mm) is not found, MAIA should stop and ask for the exact item rather than creating an incorrect RN                                                                                                                                      |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                                                                                                                         |
| Client notes                 |                                                                                                                                                                                                                                                                                          |

### TC-11 - Create Sales Invoice From Sales Order

| Field                        | Detail                                                                                                                                                                                  |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Finance                                                                                                                                                                                 |
| Workflow to confirm          | Finance creates Sales Invoice from SO, usually after delivery/return rules are satisfied                                                                                                |
| Flexible user input examples | - `SO-221 return settled already? If yes invoice Sunway Damansara.`&#xA;- `Create invoice from SO-0310, use parent bundle only.`&#xA;- `Generate invoice for delivered unbilled order.` |
| Expected MAIA behaviour      | Check SO status, delivery/return dependency if required by Ultimax, create Invoice with parent selling bundle only, submit to UNPAID after review                                       |
| Blocked case                 | If SO is on HOLD, MAIA should require Resume to TO BILL before creating Invoice                                                                                                         |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                        |
| Client notes                 |                                                                                                                                                                                         |

### TC-12 - Record Receipt From Payment Proof

| Field                        | Detail                                                                                                                                                                                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary user                 | Finance / Sales                                                                                                                                                                                                                            |
| Workflow to confirm          | Payment proof can be matched to one or more invoices and turned into Receipt                                                                                                                                                               |
| Flexible user input examples | - `Sunway paid for SO221 and SO225, screenshot attached. If amount matches create receipt.`&#xA;- `Customer paid RM12,500, match with SI-0334 and SI-0335.`&#xA;- `Payment from owner personal account, confirm belongs to this customer.` |
| Expected MAIA behaviour      | Extract amount/date/reference/sender from image if attached, resolve SO to linked Invoice, match outstanding amount, create Receipt, upload proof, and support full/partial/multi-invoice allocation                                       |
| Should MAIA ask if missing   | No image attached, image unreadable, amount mismatch, sender name differs, or multiple invoices match                                                                                                                                      |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                                                                           |
| Client notes                 |                                                                                                                                                                                                                                            |

### TC-13 - Status Search And Cross-Document Lookup

| Field                        | Detail                                                                                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | All roles                                                                                                                                                                                |
| Workflow to confirm          | Users can ask where a case/order stands without knowing the exact document type                                                                                                          |
| Flexible user input examples | - `Where are we at for Adventist 7.3 KCS case? Quote approve or still waiting?`&#xA;- `Show latest order for Sunway Ipoh.`&#xA;- `Open 046.`&#xA;- `Show delivered SO not yet invoiced.` |
| Expected MAIA behaviour      | Search across customer, item, document ID, and status; summarize linked documents such as QT, SO, DN, RN, SI, Receipt                                                                    |
| Should MAIA ask if missing   | If a running number could refer to multiple document types, ask whether it is QT, SO, DN, RN, SI, Receipt, etc.                                                                          |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                         |
| Client notes                 |                                                                                                                                                                                          |

### TC-14 - Mixed Command, Pause, And Resume

| Field                        | Detail                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales / Logistics / Finance                                                                                                                                                                                                                                         |
| Workflow to confirm          | One message may contain multiple actions; MAIA should list actions and ask before executing risky changes                                                                                                                                                           |
| Flexible user input examples | - `Adventist approve QT1061 make SO. Sunway Ipoh still pending remind Lisa tomorrow. Check Sunway Damansara payment too.`&#xA;- `Customer confirm already, convert QT005 to SO, then prepare DN but hold invoice.`&#xA;- `Also check payment for Sunway Damansara.` |
| Expected MAIA behaviour      | Break message into separate actions, confirm sequence, pause if clarification is needed, and resume from the paused step after the user answers                                                                                                                     |
| Pause rule                   | If MAIA is waiting for a clarification and user sends an unrelated request, MAIA should ask whether to continue the pending task or cancel it                                                                                                                       |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                                                                                                    |
| Client notes                 |                                                                                                                                                                                                                                                                     |

### TC-15 - ID Parsing And Safeguards

| Field                        | Detail                                                                                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics / Warehouse / Finance                                                                                                                                   |
| Workflow to confirm          | Users may refer to document IDs in shorthand; MAIA should parse safely and confirm before action                                                                  |
| Flexible user input examples | - `DN401 and DN402 are done.`&#xA;- `Open QT1042.`&#xA;- `Check SO221.`&#xA;- `Find invoice 046 for Sunway.`                                                      |
| Expected MAIA behaviour      | Normalize IDs, infer document type where safe, ask if the same number could refer to multiple document types, and show the resolved document before taking action |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                  |
| Client notes                 |                                                                                                                                                                   |

### TC-16 - PDF, CSV, And Document Output Checks

| Field                        | Detail                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary user                 | Sales / Logistics / Finance                                                                                                                                                          |
| Workflow to confirm          | Client can download/share required documents from MAIA                                                                                                                               |
| Flexible user input examples | - `Generate quotation PDF.`&#xA;- `Give SOCSO PDF for this quotation.`&#xA;- `Download sales order PDF.`&#xA;- `Send receipt PDF to customer.`&#xA;- `Export invoice CSV if needed.` |
| Expected MAIA behaviour      | Generate/download the correct requested output for Quotation, SOCSO PDF, Sales Order, Delivery Note, Return Note if in scope, Invoice, Receipt, and CSV export if required           |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                     |
| Client notes                 |                                                                                                                                                                                      |

## Client Sign-Off Summary

| Test case | Workflow confirmed? | Amendments needed | Owner | Date |
| --------- | ------------------- | ----------------- | ----- | ---- |
| TC-01     |                     |                   |       |      |
| TC-02     |                     |                   |       |      |
| TC-03     |                     |                   |       |      |
| TC-04     |                     |                   |       |      |
| TC-05     |                     |                   |       |      |
| TC-06     |                     |                   |       |      |
| TC-07     |                     |                   |       |      |
| TC-08     |                     |                   |       |      |
| TC-09     |                     |                   |       |      |
| TC-10     |                     |                   |       |      |
| TC-11     |                     |                   |       |      |
| TC-12     |                     |                   |       |      |
| TC-13     |                     |                   |       |      |
| TC-14     |                     |                   |       |      |
| TC-15     |                     |                   |       |      |
| TC-16     |                     |                   |       |      |

## Open Questions For Ultimax

* [ ] Should Invoice creation wait until Return Note is settled, or can Invoice be created immediately after Delivery Note?

* [ ] For surgical sets, which bundles/components must appear on DN and RN?

* [ ] Should missing/damaged instrument cases block RN submission or stay open for follow-up?

* [ ] What exactly should be included in the SOCSO PDF, and at which step should it be generated?

* [ ] Which document outputs are required for UAT: Quotation PDF, SOCSO PDF, SO PDF, CSV, receipt PDF, delivery/return documents?

* [ ] Should MAIA send customer-facing messages directly, or only draft them for staff approval?


## Test Results Analysis

Analysis date: 2026-05-18

### Tested Coverage

| Test case | Result summary | Referenced issue |
| --- | --- | --- |
| TC-01 - Create Quotation From Hospital RFQ | Passed. MAIA successfully created the quotation from the hospital RFQ flow. | No issue recorded. |
| TC-04 - Bulk Create Quotations / Sales Orders For Same Customer | Partially passed. Records were created, but patient/order remarks were not added to the document-level remarks. The note `tt` was added to item remarks instead. | Remark placement issue. |
| TC-05 - Same As Last Week Quotation And Sales Order | Failed. MAIA hallucinated from previous chat context, defaulted to the most recent order without asking which SO to reference, did not include item details when listing last week's orders, and repeatedly asked for confirmation during a chain command. | Context hallucination, unsafe default selection, incomplete search result summary, repeated confirmation loop. |
| TC-06 - Fix Wrong Price On Submitted Quotation | Failed. MAIA understood the amendment request but did not execute the full command sequence after confirmation. It also created the replacement quotation using the wrong source details from QT-00072. | Incomplete execution, repeated confirmation loop, wrong source document / hallucinated replacement details. |
| TC-07 - Chain Command From Quotation To Delivery Note | Mixed result. Test 1 created a DN that the user did not request. Test 2 executed partially because the SO was not submitted, blocking invoice creation. Test 3 succeeded in creating two different document types. | Chain-command boundary issue, step dependency handling, unintended document creation. |
| TC-08 - Create Delivery Note From Sales Order With Operational Bundles | Failed due to Delivery Note and warehouse configuration. | Configuration blocker, not necessarily chatbot reasoning failure. |

### Most Common Occurrence / Issue

The most common issue is **MAIA not reliably controlling document context and chain-command execution**. This appears across TC-05, TC-06, and TC-07.

Recurring patterns:

| Pattern | Test cases referenced | Occurrence count | Impact |
| --- | --- | ---: | --- |
| Hallucinated or wrong document context/details | TC-05, TC-06, TC-07 | 3 | High. MAIA may create or amend documents using the wrong prior chat context, wrong quotation, or unrequested document flow. |
| Chain command execution problems | TC-05, TC-06, TC-07 | 3 | High. MAIA either over-executes by creating unrequested documents, under-executes by stopping early, or loops on confirmation after the user has already confirmed. |
| Confirmation handling issue | TC-05, TC-06 | 2 | Medium to high. Repeated confirmation interrupts the expected workflow and prevents full completion of multi-step tasks. |
| Missing or misplaced remarks/details | TC-04, TC-05 | 2 | Medium. Patient/order details or item details may be omitted or stored in the wrong field, reducing document accuracy. |
| Configuration blocker | TC-08 | 1 | Medium. DN creation depends on warehouse / Delivery Note setup and should be separated from chatbot behaviour defects. |

### Key Findings

1. **Context and source-document safety needs strengthening.** TC-05 and TC-06 show MAIA using prior or nearby context too aggressively. For `same as last week` and amendment flows, MAIA should show the exact candidate documents, including customer, item, date, and status, then ask the user to choose before creating or replacing records.

2. **Chain commands need clearer execution boundaries.** TC-07 shows both over-execution and dependency blocking. MAIA should execute only the steps explicitly requested, stop when a required status transition is missing, and summarize what was completed before asking for the next instruction.

3. **Confirmation should be remembered within the active task.** TC-05 and TC-06 show repeated confirmation prompts after the user has already confirmed. Once confirmed, MAIA should continue the approved sequence unless a new blocker appears.

4. **Document field mapping requires validation.** TC-04 shows remarks being placed at item level instead of document level. Ultimax workflows rely heavily on patient, surgeon, surgery date, IC, MRN, and delivery details, so field placement should be verified before UAT sign-off.

5. **TC-08 should be retested after configuration is fixed.** The failure appears tied to Delivery Note / warehouse setup, so it should not be treated as a chatbot logic failure until the configuration dependency is resolved.

### Functionality Summary

Based on the recorded notes and results, MAIA was able to complete straightforward document creation tasks but became less reliable when the workflow required context reuse, amendment logic, or multi-step execution.

What MAIA was able to achieve:

| Functionality area | Evidence | Summary |
| --- | --- | --- |
| Basic quotation creation | TC-01 | MAIA successfully handled a direct hospital RFQ and created the quotation as expected. |
| Bulk document creation | TC-04 | MAIA was able to create records for multiple same-customer orders, but the supporting patient/order remarks were not placed correctly. |
| Multi-document execution | TC-07 Test 3 | MAIA successfully executed a chain involving two different document types in one test, showing that chained workflows are possible when the context is clear and dependencies are satisfied. |
| Intent understanding | TC-06 | MAIA understood the user's amendment intent, but the execution was incomplete and the replacement quotation used wrong source details. |

What MAIA was not able to achieve reliably:

| Functionality gap | Test cases referenced | Summary |
| --- | --- | --- |
| Safe reuse of previous records | TC-05 | MAIA defaulted to the most recent order instead of asking the user which prior SO or case to reference. This is risky for `same as last week` workflows because multiple similar cases may exist. |
| Accurate source-document selection | TC-06 | The replacement quotation was created using wrong details from QT-00072, showing a source-document mismatch. |
| Controlled chain-command execution | TC-05, TC-06, TC-07 | MAIA either asked for confirmation repeatedly, stopped before completing the requested sequence, or created a Delivery Note when the user did not ask for one. |
| Complete and relevant search summaries | TC-05 | When listing orders from last week, MAIA did not include item details even though item comparison was important for selecting the correct previous case. |
| Correct field mapping | TC-04 | Remarks were not added to the document-level remarks and were instead placed at item remarks. |
| Delivery Note with operational bundle flow | TC-08 | The test failed due to Delivery Note and warehouse configuration, so this flow still requires retesting after setup is corrected. |

The main functional failure point is **not basic intent recognition**. In several failed cases, MAIA understood what the user wanted, but failed during execution because it selected the wrong context, reused the wrong document, asked for repeated confirmations, or performed steps outside the requested scope.

### User Experience Summary

From a user experience perspective, the bot is promising for simple, direct workflows but currently feels inconsistent for real operational usage where users rely on shorthand, previous records, and chained instructions.

Positive UX points:

| UX area | Test cases referenced | Summary |
| --- | --- | --- |
| Natural language intake | TC-01, TC-04, TC-06 | MAIA can understand practical user phrasing, including informal instructions and operational shorthand. |
| Ability to execute multiple actions | TC-07 Test 3 | The bot can complete more than one document action in a single flow when the sequence is clear. |
| Partial workflow awareness | TC-07 Test 2 | MAIA recognized that invoice creation could not proceed because the SO had not been submitted, which is the correct dependency awareness. |

UX and reliability concerns:

| UX concern | Test cases referenced | User impact |
| --- | --- | --- |
| Chatbot hallucination | TC-05, TC-06, TC-07 | Users may lose trust if MAIA pulls details from unrelated previous chat context, creates from the wrong quotation, or creates documents that were not requested. |
| Repeated confirmation prompts | TC-05, TC-06 | The workflow feels stuck or inefficient when the user has already confirmed but MAIA continues asking for confirmation instead of proceeding. |
| Incomplete response details | TC-05 | Search/list responses are less useful when they omit important fields such as item details, especially when the user needs to choose between similar prior cases. |
| Inconsistent chain-command reliability | TC-05, TC-06, TC-07 | Users cannot yet rely on the bot to complete a multi-step instruction cleanly from start to finish. |
| Risk of silent data quality issues | TC-04 | Incorrect remark placement may not be obvious immediately, but it can cause downstream confusion for sales, logistics, and finance users. |

Overall, the bot's response quality needs to be more explicit and evidence-based during higher-risk workflows. For each chain command or previous-record reuse request, the bot should clearly show:

1. Which document it is using as the source.
2. Which steps it is about to perform.
3. Which steps were completed.
4. Which step failed or is blocked, if any.
5. What confirmation has already been received.

This would make the bot feel more reliable, reduce hallucination risk, and give users enough visibility to catch mistakes before documents are created or amended.

### Recommended Follow-Up

| Priority | Action | Related test cases |
| --- | --- | --- |
| P1 | Add a strict source-document confirmation step for reuse/amendment flows before creating replacement quotations, SOs, or DNs. | TC-05, TC-06 |
| P1 | Improve chain-command planner so MAIA executes only explicitly requested steps and stops cleanly at dependency blockers. | TC-05, TC-06, TC-07 |
| P1 | Prevent hallucinated context reuse by requiring visible candidate document selection when multiple recent records exist. | TC-05, TC-06 |
| P2 | Fix confirmation memory so one approved chain command does not repeatedly ask the same confirmation. | TC-05, TC-06 |
| P2 | Validate document-level vs item-level remark mapping for bulk quotation / SO creation. | TC-04 |
| P2 | Resolve DN and warehouse configuration, then rerun operational bundle DN tests. | TC-08 |

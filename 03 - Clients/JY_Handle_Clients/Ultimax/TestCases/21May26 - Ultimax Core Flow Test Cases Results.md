---
owner: Gareth
status: draft
last_reviewed: 2026-05-21
lark_url:
tags: [draft, client, qa, testing]
---

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

| Field                        | Detail                                                                                                                                                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales                                                                                                                                                                                                                                                                                             |
| Workflow to confirm          | Sales receives hospital RFQ and creates a Quotation using parent selling bundle only                                                                                                                                                                                                              |
| Flexible user input examples | - `Adventist ask quote for Dr Tan case tomorrow, short PFN one set, delivery before 8am.`&#xA;- `Can prep quotation for Sunway Ipoh, T0032 qty 1, patient name Lee, surgeon Dr Wong.`&#xA;- `USAINS need quote for distal tibia plate, operation 31 May.Patient name John, Surgeon name Dr Ali.`  |
| Expected MAIA behaviour      | Resolve customer, item, quantity, patient/surgeon/operation remarks, and draft or submit Quotation depending on user confirmation                                                                                                                                                                 |
| Should MAIA ask if missing   | Customer is unclear, item has multiple matches, quantity missing, operation date required, or patient/surgeon info is mandatory                                                                                                                                                                   |

#### 21st May

##### 1. Success&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-14.png>)

##### 2. Success

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image.png>)

* Pdf generation has issue&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-1.png>)

### TC-02 - Handle Ambiguous Quotation Details

| Field                             | Detail                                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary user                      | Sales                                                                                                                                                                                |
| Workflow to confirm               | MAIA should ask only the blocking clarification when the RFQ is incomplete or ambiguous                                                                                              |
| Flexible user input examples      | - `Sunway wants tibial nail for Thu, check stock then quote.`&#xA;- `Add bone graft also, small one.`&#xA;- `Create quote for Adventist, 4.0 screw set.`                             |
| Expected MAIA behaviour           | Show likely matching customers/items, ask for exact option, andy avoid guessing where there is risk                                                                                  |
| Good clarification examples<br /> | `Do you mean T0003 Interlocking Tibial Nail or T0007 Supra Patella Tibial Nail?`&#xA;`Which Bone Graft size should I add?`&#xA;`I found two Sunway branches. Which one is this for?` |

#### 21st May&#x20;

##### 1. Bot did clarify, but it hallucinated and could not get the standard price of the item.&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-2.png>)

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-3.png>)

##### 2. Success, restested with the same prompt, the bot was hallucinating

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-4.png>)

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-5.png>)

### TC-03 - Convert Approved Quotation To Sales Order

| Field                        | Detail                                                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales / Operations                                                                                                                                                        |
| Workflow to confirm          | Once customer approves a Quotation, MAIA converts it to a Sales Order using parent selling bundle only                                                                    |
| Flexible user input examples | - `Customer confirm QT-1042, convert to SO.`&#xA;- `USAINS approved the distal tibia quote, make SO and set op date 18 May.`&#xA;- `QT005 sudah approve, help create SO.` |
| Expected MAIA behaviour      | Find submitted Quotation, confirm it is not already converted, create Sales Order, preserve customer/item/pricing/remarks, and return SO number                           |
| Blocked case                 | If Quotation already has a linked SO, MAIA should not create duplicate SO and should show the existing SO                                                                 |

#### 21st May

##### 1. Success&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-6.png>)

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

#### 21st May

##### 1. Success&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-7.png>)



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

#### 21st May

##### 1. Failed. Could not fetch and surface document based on the parameters asked.&#x20;

1. Asked for orders created last week but it's not.

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-8.png>)

##### 2. Partial Success only after narrowing down and specifying what I'm looking for.&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-9.png>)

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-10.png>)

##### 3. Success.&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-11.png>)

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-12.png>)

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

#### 21st May

##### 1. Partial success. Took too many confirmation on the same thing.&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-13.png>)

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-15.png>)

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-16.png>)

##### 2. Success.

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-17.png>)

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-18.png>)

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

#### 21st May

##### 1. Success&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-19.png>)

### TC-08 - Create Delivery Note From Sales Order With Operational Bundles

| Field                        | Detail                                                                                                                                                                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics                                                                                                                                                                                                                                                       |
| Workflow to confirm          | DN is created from SO and may include operational instrument/screw bundles in addition to the parent selling bundle context                                                                                                                                     |
| Flexible user input examples | - `SO-221 Sunway Damansara confirm, create DN for tomorrow morning, add Neogen AR instrument tray and AR screws.`&#xA;- `Create delivery note from SO-0310, add I0010 set, scheduled 7.30am.`&#xA;- `Prepare DN for Adventist case and include the screw tray.` |
| Expected MAIA behaviour      | Create DN from the correct SO, carry customer/address/reference, add operational bundles, set delivery timing, and ask before submit if needed                                                                                                                  |
| Should MAIA ask if missing   | Delivery date/time, warehouse, branch/address, or operational bundle is unclear                                                                                                                                                                                 |

#### 21st May

1. BE issue. Adding new bundles to the delivery note removes the source warehouse.&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-20.png>)

![before adding items](<images/21May26 - Ultimax Core Flow Test Cases Results-image-21.png>)

![after adding items](<images/21May26 - Ultimax Core Flow Test Cases Results-image-22.png>)

* Could not set source warehouse after adding items. This issue would not appear if the warehouse was not removed after adding items.&#x20;

  1. Bot lied, saying it worked and submit with the new source warehouse but it didnt.&#x20;

  ![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-23.png>)

### TC-09 - Return Note With Used, Unused, Missing, Or Damaged Items

| Field                        | Detail                                                                                                                                                                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics / Warehouse                                                                                                                                                                                                                                           |
| Workflow to confirm          | After surgery/delivery, returned sets are checked and Return Note records used implants, unused returns, missing items, or damaged instruments                                                                                                                  |
| Flexible user input examples | - `DN-0341 set came back, surgeon used AR blade 10.3 x 85 and two locking screws 5.0 x 40. Others return unused.`&#xA;- `Adventist DN-0338 return check, depth gauge missing, keep RN open.`&#xA;- `For DN046, hospital used 60mm screw only, return the rest.` |
| Expected MAIA behaviour      | Create RN from DN, explode only relevant bundle if required, mark used/missing/damaged items, keep unresolved RN open, and submit only after confirmation                                                                                                       |
| Should MAIA ask if missing   | Exact screw size, quantity used, missing item identity, or whether to submit/keep draft                                                                                                                                                                         |

### TC-10 - Chain Command Return Flow For Used item

| Field                        | Detail                                                                                                                                                                                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics / Warehouse                                                                                                                                                                                                                                                                    |
| Workflow to confirm          | User creates a Return Note from a Delivery Note containing T0032 - 4.0mm Cannulated Screw, and records one used KCS screw in the same command                                                                                                                                            |
| Flexible user input examples | - `From DN with T0032 - 4.0mm Cannulated Screw, create return note, hospital used KCS 30mm one.`&#xA;- `DN-046 return: T0032 set came back, create RN, used KCS 4.0mm 30mm one piece.`&#xA;- `For this DN, make return note and remove the 4.0 KCS 30mm screw because hospital used it.` |
| Expected MAIA behaviour      | Create Return Note from the correct DN, explode bundle T0032 - 4.0mm Cannulated Screw, remove KCS 4.0mm (30mm) from the returned items because it was used, and keep the rest of the bundle as returned/unused                                                                           |
| Chatbot response to validate | MAIA should clearly say it exploded T0032 - 4.0mm Cannulated Screw and removed KCS 4.0mm (30mm) as the used item                                                                                                                                                                         |
| Should MAIA ask if missing   | If the DN is unclear, T0032 is not on the DN, the screw size has multiple matches, or quantity is unclear                                                                                                                                                                                |
| Partial failure behaviour    | If the bundle cannot be exploded or KCS 4.0mm (30mm) is not found, MAIA should stop and ask for the exact item rather than creating an incorrect RN                                                                                                                                      |

### TC-11 - Create Sales Invoice From Sales Order

| Field                        | Detail                                                                                                                                                                                  |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Finance                                                                                                                                                                                 |
| Workflow to confirm          | Finance creates Sales Invoice from SO, usually after delivery/return rules are satisfied                                                                                                |
| Flexible user input examples | - `SO-221 return settled already? If yes invoice Sunway Damansara.`&#xA;- `Create invoice from SO-0310, use parent bundle only.`&#xA;- `Generate invoice for delivered unbilled order.` |
| Expected MAIA behaviour      | Check SO status, delivery/return dependency if required by Ultimax, create Invoice with parent selling bundle only, submit to UNPAID after review                                       |
| Blocked case                 | If SO is on HOLD, MAIA should require Resume to TO BILL before creating Invoice                                                                                                         |

#### 21st May&#x20;

1. Success, able to complete while being part of the chain command from QT to DN/SI&#x20;

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

#### 21st May&#x20;

##### 1. Failed. When asking bot to list based on certain criteria it does not reference the correct document/ID

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-24.png>)

### TC-14 - Mixed Command, Pause, And Resume

| Field                        | Detail                                                                                                                                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales / Logistics / Finance                                                                                                                                                                                                                                         |
| Workflow to confirm          | One message may contain multiple actions; MAIA should list actions and ask before executing risky changes                                                                                                                                                           |
| Flexible user input examples | - `Adventist approve QT1061 make SO. Sunway Ipoh still pending remind Lisa tomorrow. Check Sunway Damansara payment too.`&#xA;- `Customer confirm already, convert QT005 to SO, then prepare DN but hold invoice.`&#xA;- `Also check payment for Sunway Damansara.` |
| Expected MAIA behaviour      | Break message into separate actions, confirm sequence, pause if clarification is needed, and resume from the paused step after the user answers                                                                                                                     |
| Pause rule                   | If MAIA is waiting for a clarification and user sends an unrelated request, MAIA should ask whether to continue the pending task or cancel it                                                                                                                       |

### TC-15 - ID Parsing And Safeguards

| Field                        | Detail                                                                                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics / Warehouse / Finance                                                                                                                                   |
| Workflow to confirm          | Users may refer to document IDs in shorthand; MAIA should parse safely and confirm before action                                                                  |
| Flexible user input examples | - `DN401 and DN402 are done.`&#xA;- `Open QT1042.`&#xA;- `Check SO221.`&#xA;- `Find invoice 046 for Sunway.`                                                      |
| Expected MAIA behaviour      | Normalize IDs, infer document type where safe, ask if the same number could refer to multiple document types, and show the resolved document before taking action |

### TC-16 - PDF, CSV, And Document Output Checks

| Field                        | Detail                                                                                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales / Logistics / Finance                                                                                                                                                |
| Workflow to confirm          | Client can download/share required documents from MAIA                                                                                                                     |
| Flexible user input examples | - `Generate quotation PDF.`&#xA;- `Give SOCSO PDF for this quotation.`&#xA;- `Download sales order PDF.`&#xA;- `Send receipt PDF to customer.`                             |
| Expected MAIA behaviour      | Generate/download the correct requested output for Quotation, SOCSO PDF, Sales Order, Delivery Note, Return Note if in scope, Invoice, Receipt, and CSV export if required |

##### 1. Document delivery failed. Already working on the fix.&#x20;

## 21st May Test Results Analysis

Analysis date: 2026-05-21

Source scope: This analysis uses the recorded **21st May** test results only, including the appendix checks. Each recorded numbered result or explicit result checkpoint is counted as one test run. **Partial success is counted as Failed** in the pass/fail percentage, but is called out separately in the summary.

### Result Summary

| Metric | Count | Percentage |
|---|---:|---:|
| Total recorded test runs | 18 | 100.0% |
| Success | 9 | 50.0% |
| Failed | 9 | 50.0% |
| Partial success, counted under Failed | 2 | 11.1% |

The 21st May run is evenly split between Success and Failed outcomes. The strongest results are still the direct sales flows: Quotation creation, Quotation-to-Sales Order conversion, bulk creation, chain-command execution, and Sales Invoice creation as part of a chain. The two partial successes were TC-05 Test 2 and TC-06 Test 1; both worked only after extra narrowing or repeated confirmation, so they are treated as Failed for the overall score.

### Tested Coverage

| Area tested | Test reference | Result |
|---|---|---|
| Create Quotation from hospital RFQ | TC-01 Test 1 | Success |
| Create Quotation from hospital RFQ | TC-01 Test 2 | Success, with PDF issue noted |
| Ambiguous Quotation details | TC-02 Test 1 | Failed |
| Ambiguous Quotation details retest | TC-02 Test 2 | Success |
| Convert approved Quotation to Sales Order | TC-03 Test 1 | Success |
| Bulk create Quotations / Sales Orders | TC-04 Test 1 | Success |
| Same-as-last-week lookup, broad request | TC-05 Test 1 | Failed |
| Same-as-last-week lookup after narrowing | TC-05 Test 2 | Partial success, counted as Failed |
| Same-as-last-week creation after narrowing | TC-05 Test 3 | Success |
| Submitted Quotation amendment confirmation flow | TC-06 Test 1 | Partial success, counted as Failed |
| Submitted Quotation amendment retest | TC-06 Test 2 | Success |
| Chain command from Quotation to downstream documents | TC-07 Test 1 | Success |
| Delivery Note with operational bundles / source warehouse | TC-08 Test 1 | Failed |
| Sales Invoice from Sales Order as part of chain | TC-11 Test 1 | Success |
| Status search and cross-document lookup | TC-13 Test 1 | Failed |
| PDF / document delivery | TC-16 Test 1 | Failed |
| Delete vs cancel response consistency | Appendix Test 1 | Failed |
| PDF generation / delivery stability | Appendix Test 2 | Failed |

No 21st May execution results were recorded for TC-09, TC-10, TC-12, TC-14, or TC-15.

### What Succeeded

MAIA performed best on direct execution flows where the user gave a clear target and the workflow did not depend heavily on broad search. TC-01 succeeded twice for Quotation creation, TC-03 succeeded for Quotation-to-Sales Order conversion, TC-04 succeeded for bulk creation, TC-07 succeeded for a chain command, and TC-11 succeeded for Sales Invoice creation as part of the chain from QT to DN/SI.

The retests also show improvement in some areas. TC-02 succeeded when retested with the same prompt after the first ambiguous-quotation attempt hallucinated, and TC-06 succeeded on the second amendment attempt after the first run required too many confirmations.

### What Failed

The main failures remain in lookup accuracy, confirmation control, backend state handling, and document output. TC-02 Test 1 failed because MAIA clarified but hallucinated and could not retrieve the standard item price. TC-05 Test 1 failed because MAIA could not fetch and surface the correct document from the requested parameters, while TC-05 Test 2 is only a partial success because it worked after the user narrowed the request.

TC-06 Test 1 is also a partial success counted as Failed because MAIA took too many confirmations for the same amendment action. TC-08 failed because adding new bundles to the Delivery Note removed the source warehouse, and MAIA then claimed the source warehouse update worked even though it did not. TC-13 failed because the bot listed or referenced the wrong document/ID when asked to search by criteria.

Document output remains unstable. TC-16 recorded document delivery failure, and the appendix records another PDF failure. The appendix also caught a delete/cancel wording issue where MAIA first said it could only cancel a Quotation, then responded as if it had deleted it.

### Most Common Occurrence / Issue

The most common 21st May issue is **MAIA needing stronger verification before presenting a workflow as complete or correct**. This appears in hallucinated item pricing, broad previous-document lookup, repeated amendment confirmations, Delivery Note source warehouse handling, status search, and PDF/document delivery.

Recurring patterns:

1. Direct creation and conversion flows are improving.
2. Broad lookup still fails unless the user narrows the request.
3. Partial successes are still operationally risky because they require extra user correction.
4. MAIA sometimes reports success when the backend state or delivered output does not support it.
5. PDF/document delivery remains a repeated blocker.

### Recommended Fix Priority

| Priority | Area | Why it matters |
|---|---|---|
| P0 | Verify backend state before reporting success | Prevents false success messages for warehouse updates, document delivery, and linked actions |
| P0 | Fix PDF / document delivery reliability | Required for Quotation, SOCSO, Sales Order, and other document-sharing workflows |
| P1 | Improve broad document lookup and candidate surfacing | Needed for same-as-last-week and criteria-based status searches |
| P1 | Fix Delivery Note source warehouse preservation after adding bundles | Required before logistics workflows can be trusted |
| P1 | Reduce repeated confirmations for amendment flows | Turns partial success into clean success |
| P2 | Standardize delete vs cancel language | Prevents contradictory user-facing responses |

### Appendix&#x20;

#### 1. Bot said it can't delete quotation, can only cancel. Once i said cancel it replies deleted.&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-25.png>)

#### 2. PDF go boom&#x20;

![](<images/21May26 - Ultimax Core Flow Test Cases Results-image-26.png>)

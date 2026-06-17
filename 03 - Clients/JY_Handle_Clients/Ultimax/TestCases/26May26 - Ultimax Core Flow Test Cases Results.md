---
owner: Gareth
status: draft
last_reviewed: 2026-05-26
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

| Field                              | Detail                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                       | Sales                                                                                                                                                                                                                                                                                             |
| Workflow to confirm                | Sales receives hospital RFQ and creates a Quotation using parent selling bundle only                                                                                                                                                                                                              |
| Flexible user input examples<br /> | - `Adventist ask quote for Dr Tan case tomorrow, short PFN one set, delivery before 8am.`&#xA;- `Can prep quotation for Sunway Ipoh, T0032 qty 1, patient name Lee, surgeon Dr Wong.`&#xA;- `USAINS need quote for distal tibia plate, operation 31 May.Patient name John, Surgeon name Dr Ali.`  |
| Expected MAIA behaviour            | Resolve customer, item, quantity, patient/surgeon/operation remarks, and draft or submit Quotation depending on user confirmation                                                                                                                                                                 |
| Should MAIA ask if missing         | Customer is unclear, item has multiple matches, quantity missing, operation date required, or patient/surgeon info is mandatory                                                                                                                                                                   |

#### 22st May

##### 1. Success

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-14.png>)

##### 2. Success

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-13.png>)

##### 3. Success&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image.png>)

### TC-02 - Handle Ambiguous Quotation Details

| Field                             | Detail                                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary user                      | Sales                                                                                                                                                                                |
| Workflow to confirm               | MAIA should ask only the blocking clarification when the RFQ is incomplete or ambiguous                                                                                              |
| Flexible user input examples      | - `Sunway wants tibial nail for Thu, check stock then quote.`&#xA;- `Add bone graft also, small one.`&#xA;- `Create quote for Adventist, 4.0 screw set.`                             |
| Expected MAIA behaviour           | Show likely matching customers/items, ask for exact option, andy avoid guessing where there is risk                                                                                  |
| Good clarification examples<br /> | `Do you mean T0003 Interlocking Tibial Nail or T0007 Supra Patella Tibial Nail?`&#xA;`Which Bone Graft size should I add?`&#xA;`I found two Sunway branches. Which one is this for?` |

#### 22nd May&#x20;

##### 4. Success.&#x20;

1. Comment: the bot maintained language from previous chat and stayed in chinese even when the query does include chinese&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-1.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-2.png>)

##### 5. Success

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-3.png>)

### TC-03 - Convert Approved Quotation To Sales Order

| Field                        | Detail                                                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales / Operations                                                                                                                                                        |
| Workflow to confirm          | Once customer approves a Quotation, MAIA converts it to a Sales Order using parent selling bundle only                                                                    |
| Flexible user input examples | - `Customer confirm QT-1042, convert to SO.`&#xA;- `USAINS approved the distal tibia quote, make SO and set op date 18 May.`&#xA;- `QT005 sudah approve, help create SO.` |
| Expected MAIA behaviour      | Find submitted Quotation, confirm it is not already converted, create Sales Order, preserve customer/item/pricing/remarks, and return SO number                           |
| Blocked case                 | If Quotation already has a linked SO, MAIA should not create duplicate SO and should show the existing SO                                                                 |

#### 22nd May

##### 6. Success&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-4.png>)

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

#### 22nd May

##### 7. Success&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-5.png>)

##### 8. Success

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-6.png>)

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

#### 22nd May

##### 9. Success.&#x20;

1. If user is straight forward and ask bot to duplicate details from existing order/document.&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-7.png>)

##### 10. Success, but it's not the most direct.

* The bot asks for double confirmation.

* Bot response saying it can't find tool, "create Quotation from Sales Order", tool does not exist.&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-8.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-9.png>)

*

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

#### 22nd May

##### 11. Failed. Did not get the ID correct initially. `@Ivan`

1. Bot hallucinated. Able to cancel the correct ID, but when duplicating the new quotation, it used items from the wrong quotation that originally referenced.&#x20;

2. In the response when creating QT, it halucinated and reference a different item name and code.&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-10.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-11.png>)

##### 12. Success&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-12.png>)

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

### TC-08 - Create Delivery Note From Sales Order With Operational Bundles

| Field                            | Detail                                                                                                                                                                                                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                     | Logistics                                                                                                                                                                                                                                                       |
| Workflow to confirm              | DN is created from SO and may include operational instrument/screw bundles in addition to the parent selling bundle context                                                                                                                                     |
| Flexible user input examples     | - `SO-221 Sunway Damansara confirm, create DN for tomorrow morning, add Neogen AR instrument tray and AR screws.`&#xA;- `Create delivery note from SO-0310, add I0010 set, scheduled 7.30am.`&#xA;- `Prepare DN for Adventist case and include the screw tray.` |
| Expected MAIA behaviour          | Create DN from the correct SO, carry customer/address/reference, add operational bundles, set delivery timing, and ask before submit if needed                                                                                                                  |
| Should MAIA ask if missing<br /> | Delivery date/time, warehouse, branch/address, or operational bundle is unclear                                                                                                                                                                                 |

##### 13. Failed&#x20;

* Could not set the source warehouse after adding items to the delivery note.&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-15.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-16.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-17.png>)

##### 14. Failed&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-18.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-19.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-20.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-26.png>)

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

#### 22nd May&#x20;

##### 15. Success, able to complete while being part of the chain command from QT to DN/SI&#x20;

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

##### 16. Failed&#x20;

* Document intelligence. The bot could not extract form the payment proof&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-21.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-22.png>)

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-23.png>)

### TC-13 - Status Search And Cross-Document Lookup (currently oos)&#x20;

| Field                        | Detail                                                                                                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | All roles                                                                                                                                                                                |
| Workflow to confirm          | Users can ask where a case/order stands without knowing the exact document type                                                                                                          |
| Flexible user input examples | - `Where are we at for Adventist 7.3 KCS case? Quote approve or still waiting?`&#xA;- `Show latest order for Sunway Ipoh.`&#xA;- `Open 046.`&#xA;- `Show delivered SO not yet invoiced.` |
| Expected MAIA behaviour      | Search across customer, item, document ID, and status; summarize linked documents such as QT, SO, DN, RN, SI, Receipt                                                                    |
| Should MAIA ask if missing   | If a running number could refer to multiple document types, ask whether it is QT, SO, DN, RN, SI, Receipt, etc.                                                                          |

#### 22nd May&#x20;



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

##### 17. Failed

* Bot hallucinated different ID formats. Causing it to not be found.&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-24.png>)

### TC-16 - PDF, CSV, And Document Output Checks

| Field                        | Detail                                                                                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Sales / Logistics / Finance                                                                                                                                                |
| Workflow to confirm          | Client can download/share required documents from MAIA                                                                                                                     |
| Flexible user input examples | - `Generate quotation PDF.`&#xA;- `Give SOCSO PDF for this quotation.`&#xA;- `Download sales order PDF.`&#xA;- `Send receipt PDF to customer.`                             |
| Expected MAIA behaviour      | Generate/download the correct requested output for Quotation, SOCSO PDF, Sales Order, Delivery Note, Return Note if in scope, Invoice, Receipt, and CSV export if required |

##### 18. Success document delivery&#x20;



## 26th May Test Results Analysis

Analysis date: 2026-05-26

Source scope: This analysis uses the latest numbered results recorded in this file, from TC-01-1 through TC-16-18. Test references use the format `TC-08-13`, where the first part is the test case ID and the last number is the recorded result number.

### Result Summary

| Metric | Count | Percentage |
|---|---:|---:|
| Total recorded test runs | 18 | 100.0% |
| Success | 13 | 72.2% |
| Failed | 5 | 27.8% |

The latest run shows that MAIA is strong on direct Sales flows: Quotation creation, ambiguous Quotation handling, Quotation-to-Sales Order conversion, bulk creation, same-as-last-time duplication, one submitted Quotation amendment retest, Sales Invoice creation, and document delivery all succeeded. The failures are concentrated around Delivery Note source warehouse handling, submitted Quotation amendment source accuracy, payment-proof extraction, and ID parsing.

### Tested Coverage

| Reference | Area tested | Result |
|---|---|---|
| TC-01-1 | Create Quotation from hospital RFQ | Success |
| TC-01-2 | Create Quotation from hospital RFQ | Success |
| TC-01-3 | Create Quotation from hospital RFQ | Success |
| TC-02-4 | Ambiguous Quotation details | Success, with language carryover note |
| TC-02-5 | Ambiguous Quotation details | Success |
| TC-03-6 | Convert approved Quotation to Sales Order | Success |
| TC-04-7 | Bulk create Quotations / Sales Orders | Success |
| TC-04-8 | Bulk create Quotations / Sales Orders | Success |
| TC-05-9 | Same-as-last-time duplication | Success |
| TC-05-10 | Same-as-last-time duplication | Success, with UX issues |
| TC-06-11 | Submitted Quotation amendment | Failed |
| TC-06-12 | Submitted Quotation amendment retest | Success |
| TC-08-13 | Delivery Note with operational bundles / source warehouse | Failed |
| TC-08-14 | Delivery Note with operational bundles / source warehouse | Failed |
| TC-11-15 | Sales Invoice from Sales Order as part of chain | Success |
| TC-12-16 | Receipt from payment proof | Failed |
| TC-15-17 | ID parsing and safeguards | Failed |
| TC-16-18 | PDF / document delivery | Success |

No latest execution results were recorded for TC-07, TC-09, TC-10, TC-13, or TC-14.

### What Succeeded

MAIA performed well on direct document workflows. TC-01-1, TC-01-2, and TC-01-3 all succeeded for Quotation creation. TC-02-4 and TC-02-5 succeeded for ambiguous Quotation handling, although TC-02-4 carried over Chinese from previous chat context. TC-03-6 succeeded for Quotation-to-Sales Order conversion, and TC-04-7 and TC-04-8 succeeded for bulk creation.

The same-as-last-time flow also improved. TC-05-9 succeeded when the user clearly asked MAIA to duplicate details from an existing order or document. TC-05-10 also succeeded, but the notes say it was not the most direct. TC-06-12 succeeded on the submitted Quotation amendment retest, TC-11-15 succeeded for Sales Invoice creation as part of the QT to DN/SI chain, and TC-16-18 succeeded for document delivery.

### What Failed

TC-06-11 failed because MAIA did not correctly infer which ID should be duplicated. After the user corrected it, MAIA referenced the correct ID, but the created order used items from the wrong reference order ID.

TC-08-13 failed because MAIA could not set the source warehouse after adding items to the Delivery Note. TC-08-14 also failed in the Delivery Note operational-bundle flow. TC-12-16 failed because document intelligence could not extract information from the payment proof. TC-15-17 failed because MAIA hallucinated different ID formats, causing the document not to be found.

### UX Notes

The latest comments show several UX issues even in flows that were marked as Success.

1. **Language/context carryover needs control.** In TC-02-4, the bot stayed in Chinese because of previous chat context even though the user started a new query for different documents and the query itself did not include Chinese.

2. **Some successful flows are still not direct enough.** In TC-05-10, the flow succeeded, but the note says it was "not the most direct."

3. **Double confirmation adds friction.** TC-05-10 notes that the bot asked for double confirmation.

4. **Tool-awareness messaging is confusing.** TC-05-10 notes that the bot said it could not find a tool named "create Quotation from Sales Order", but that tool does not exist.

5. **Wrong references damage user confidence.** In TC-06-11, MAIA used the wrong reference order items after the user corrected the intended ID.

6. **Document intelligence failure blocks receipt flow.** TC-12-16 failed because the bot could not extract from the payment proof.

### Most Common Occurrence / Issue

The most common issue is **reference accuracy when MAIA needs to choose or carry document context across steps**. Direct creation and conversion flows are stable, but MAIA still struggles when source document IDs, source warehouse values, payment-proof extraction, or ID formats need to be carried correctly into the next action.

Recurring patterns:

1. Direct Sales flows are mostly stable.
2. Duplicate-from-existing workflows work best when the user gives a clear source document.
3. Delivery Note operational-bundle flows still fail around source warehouse handling.
4. Payment proof extraction is not reliable enough for Receipt creation.
5. ID format hallucination still causes lookup failure.

### Recommended Fix Priority

| Priority | Area | Why it matters |
|---|---|---|
| P0 | Fix Delivery Note source warehouse handling after adding items | TC-08-13 and TC-08-14 both failed in this area |
| P0 | Verify source document and carried line items before creating replacement documents | Prevents TC-06-11-style wrong-reference failures |
| P1 | Improve payment proof extraction | Required for TC-12-16 Receipt flow |
| P1 | Normalize and verify document ID formats before lookup | Prevents TC-15-17 lookup failure |
| P2 | Reduce double confirmation and confusing tool-awareness responses | Improves UX for TC-05-10-style successful-but-clunky flows |



### Appendix&#x20;

#### 1. Bot said it can't delete quotation, can only cancel. Once i said cancel it replies deleted.&#x20;

![](<images/22May26 - Ultimax Core Flow Test Cases Results-image-25.png>)

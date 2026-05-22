---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
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

#### Test result

##### 18th May&#x20;

###### Test 1:&#x20;

1. Success&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image.png>)



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

#### Test result:&#x20;

##### 18th May&#x20;

###### Test 1:

1. Able to convert from QT to SO.&#x20;

2. Chain command asked for PDF, bot said delivered the pdf but it didnt.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-1.png>)



Suspected:

1. Tool called, but error on sending PDF to Chatwoot



20th May&#x20;

Test 1:&#x20;

1. Success. But the response is long, afiq is looking into this.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-2.png>)

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

##### 18th May

###### Test 1:&#x20;

1. Success. Remarks did not get added to the document. tt was added to item remarks&#x20;


![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-3.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-4.png>)

Outcome:
1\. Default to document remarks in chatbot, then when user specific instruct to add to item remarks, then do it.

* Chatbot side item level remarks vs document level remarks

  1. Formatting sample

     1. T0023 - Item name .1 Nos . Price

        1. Remarks: custom item remarks

        2. Batch no:

        3. SN:&#x20;

        4. Tax Reference: \<Tax Code> : \<Cert Num>

        5. Tags: Poisin&#x20;

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

##### 18th May

###### Test 1:&#x20;

1. Failed, hallucinated with other previous chat context&#x20;

2. Defaulted to the most recent order, did not ask confirmation on which SO it should reference&#x20;

3. When asked to list the orders from last week, it did not mention items when it's relevant to this situation. Need user to ask for it

4. Keep asking user for confirmation for chain command.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-5.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-6.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-7.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-8.png>)

1. Commnets:
   Ambiguous query, the intent of the query is to create a quotation based on the past confirmed order for the surgery.

   1. Sample thought process, since the user wants to replicate a previous quotation or order last week,

   2. Most likely the top candidates will come from, submitted/in progress sales order (draft, cancelled, excluded), quotation (submitted/won, expired (probably), not draft and not lost)

   3. To find the lowest effort highest impact in between current vs gold standard above

   4.

2. When back referencing the quotaion/SO/doctypes, when there are more than 1 candidates, always assist the user to choose

3. Looking into the response API to, migrate from structured output to Response API.

4. Tool response to return structured data instead of text formatting.

5.



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

##### 18th May

###### Test 1:&#x20;

1. Failed, able to understand but it did not execute all of the commands, kept asking for confirmation even after saying so.&#x20;

2. Bot hallucinated, replacement quotation created using the wrong details. Used from QT-00072.

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-9.png>)

![Cancelled](<images/18May26 - Ultimax Core Flow Test Cases Results-image-10.png>)

!["Fixed" quotation](<images/18May26 - Ultimax Core Flow Test Cases Results-image-11.png>)

![Copied from quotation](<images/18May26 - Ultimax Core Flow Test Cases Results-image-12.png>)

Comments:
1\. Look into the trace to identified how it mistaken 71 for 72. `@Afiq Aqil`

Suspect from memory.



##### 20th May

###### Test 1:&#x20;

1. Success but the bot went crazy, kept asking for confirmation even after stating its the last confirmation.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-13.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-14.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-15.png>)

###### Test 2:&#x20;

1. Success, worked well.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-16.png>)

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

##### 18th May

###### Test 1:&#x20;

1. Created but hallucinated and created delivery notes without the user asking.

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-17.png>)



###### Comments:&#xA;1\. Why it created delivery note without asking.?

###### Test 2:&#x20;

1. Executed partially. Could not create invoice because user did not instruct bot to submit the SO.


![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-18.png>)

Comments:


1. Chatbot will autosubmit the sales order and then create the invoice.

2. On the create tool, add an submit, one flag to direct submit.

3. &#x20;



###### Test 3:&#x20;

1. Success. able to execute with creating two different doc type&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-19.png>)

#### 19th May&#x20;

##### 1. Bot hallucinate. In the response, it mentions a sales order was created from the quotation. The id the bot give is from an existing SO (SO-2026-00136) while saying its created from the quotation. It did not create the sales order.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-20.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-21.png>)

![orignal quotation](<images/18May26 - Ultimax Core Flow Test Cases Results-image-22.png>)

!["created" SO that the bot reference](<images/18May26 - Ultimax Core Flow Test Cases Results-image-23.png>)



##### 20th May

###### Test 1:&#x20;

1. Success. Able to complete the task that was directed. &#x20;

2. Bot hallucinated and duplicated the quotation as a draft.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-24.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-25.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-26.png>)

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

##### 18th May

###### Test 1:&#x20;

1. Failed due to delivery note and warehouse configuration

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-27.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-28.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-29.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-30.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-31.png>)

1. Comments

   1. Warehouse API fixed, remove hardcode in old warehouse API

   2. Halucination of the sku code.

   3. Refering warehouse by both code and name, should not only have code.

   4. To retest with newly fixed API

##### 19th May

###### &#x20;test 1

1. Could not create and add items to the DN in one command.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-32.png>)

##### 20th May

###### Test 1&#x20;

1. List of quotation bot responds with are ones that are already ordered/submitted. What i was looking for was a draft.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-33.png>)

##### Test 2:&#x20;

1. Successfully complete chain and cross-doc queries. Improved UX as it does not ask for confirmation at each step&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-34.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-35.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-36.png>)



![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-44.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-43.png>)

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

#### Test results

##### 20th May:&#x20;

###### Test 1:&#x20;

1. Success. Able to create and remove items. Not the smoothest as it requires user to mention it step by step

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-37.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-38.png>)

### TC-10 - Chain Command Return Flow&#x20;

| Field                         | Detail                                                                                                                                                                                                                                                                                   |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                  | Logistics / Warehouse                                                                                                                                                                                                                                                                    |
| Workflow to confirm           | User creates a Return Note from a Delivery Note containing T0032 - 4.0mm Cannulated Screw, and records one used KCS screw in the same command                                                                                                                                            |
| Flexible user input examples  | - `From DN with T0032 - 4.0mm Cannulated Screw, create return note, hospital used KCS 30mm one.`&#xA;- `DN-046 return: T0032 set came back, create RN, used KCS 4.0mm 30mm one piece.`&#xA;- `For this DN, make return note and remove the 4.0 KCS 30mm screw because hospital used it.` |
| Expected MAIA behaviour<br /> | Create Return Note from the correct DN, explode bundle T0032 - 4.0mm Cannulated Screw, remove KCS 4.0mm (30mm) from the returned items because it was used, and keep the rest of the bundle as returned/unused                                                                           |
| Chatbot response to validate  | MAIA should clearly say it exploded T0032 - 4.0mm Cannulated Screw and removed KCS 4.0mm (30mm) as the used item                                                                                                                                                                         |
| Should MAIA ask if missing    | If the DN is unclear, T0032 is not on the DN, the screw size has multiple matches, or quantity is unclear                                                                                                                                                                                |
| Partial failure behaviour     | If the bundle cannot be exploded or KCS 4.0mm (30mm) is not found, MAIA should stop and ask for the exact item rather than creating an incorrect RN                                                                                                                                      |
| Client confirmation           | Confirm / Amend / Not Applicable                                                                                                                                                                                                                                                         |
| Client notes                  |                                                                                                                                                                                                                                                                                          |

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

#### 19th May&#x20;

##### Test 1

1. Failed. Could not find the document based on the item, even after giving the exact item name.&#x20;

   1. UX improvement: When the bot ask for clarification on which customer, it should mention the name not customer ID.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-39.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-40.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-41.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-42.png>)

##### Test 2

1. Success. Does not assume and ask the user for confirmation.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-45.png>)

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

#### 19th May&#x20;

##### Test 1

1. Failed. The bot confused with an older ID. SAL-QTN-2026-00077 vs QT-2026-00077, did not ask for clarification on which id the user is referring to.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-46.png>)

* Success. But already have message clearing up any confusion but still asked for a confirmation.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-47.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-48.png>)

### TC-15 - ID Parsing And Safeguards

| Field                        | Detail                                                                                                                                                            |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary user                 | Logistics / Warehouse / Finance                                                                                                                                   |
| Workflow to confirm          | Users may refer to document IDs in shorthand; MAIA should parse safely and confirm before action                                                                  |
| Flexible user input examples | - `DN401 and DN402 are done.`&#xA;- `Open QT1042.`&#xA;- `Check SO221.`&#xA;- `Find invoice 046 for Sunway.`                                                      |
| Expected MAIA behaviour      | Normalize IDs, infer document type where safe, ask if the same number could refer to multiple document types, and show the resolved document before taking action |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                  |
| Client notes                 |                                                                                                                                                                   |

#### 19th May&#x20;

##### Test 1&#x20;

1. Success, both are able to identify.

2. There might be issue identifying with confusion due to the old (SAL-QTN-2026-00077) and new id (QT-2026-00077). &#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-49.png>)

### TC-16 - PDF, CSV, And Document Output Checks

| Field                        | Detail                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary user                 | Sales / Logistics / Finance                                                                                                                                                          |
| Workflow to confirm          | Client can download/share required documents from MAIA                                                                                                                               |
| Flexible user input examples | - `Generate quotation PDF.`&#xA;- `Give SOCSO PDF for this quotation.`&#xA;- `Download sales order PDF.`&#xA;- `Send receipt PDF to customer.`&#xA;- `Export invoice CSV if needed.` |
| Expected MAIA behaviour      | Generate/download the correct requested output for Quotation, SOCSO PDF, Sales Order, Delivery Note, Return Note if in scope, Invoice, Receipt, and CSV export if required           |
| Client confirmation          | Confirm / Amend / Not Applicable                                                                                                                                                     |
| Client notes                 |                                                                                                                                                                                      |

## 18th May Test Results Analysis

Analysis date: 2026-05-18

### Tested Coverage

### Most Common Occurrence / Issue

The most common issue is **MAIA not reliably controlling document context and chain-command execution**. This appears across TC-05, TC-06, and TC-07.

Recurring patterns:

### Key Findings

1. **Context and source-document safety needs strengthening.** TC-05 and TC-06 show MAIA using prior or nearby context too aggressively. For `same as last week` and amendment flows, MAIA should show the exact candidate documents, including customer, item, date, and status, then ask the user to choose before creating or replacing records.

2. **Chain commands need clearer execution boundaries.** TC-07 shows both over-execution and dependency blocking. MAIA should execute only the steps explicitly requested, stop when a required status transition is missing, and summarize what was completed before asking for the next instruction.

3. **Confirmation should be remembered within the active task.** TC-05 and TC-06 show repeated confirmation prompts after the user has already confirmed. Once confirmed, MAIA should continue the approved sequence unless a new blocker appears.

4. **Document field mapping requires validation.** TC-04 shows remarks being placed at item level instead of document level. Ultimax workflows rely heavily on patient, surgeon, surgery date, IC, MRN, and delivery details, so field placement should be verified before UAT sign-off.

5. **TC-08 should be retested after configuration is fixed.** The failure appears tied to Delivery Note / warehouse setup, so it should not be treated as a chatbot logic failure until the configuration dependency is resolved.

### Functionality Summary

Based on the recorded notes and results, MAIA was able to complete straightforward document creation tasks but became less reliable when the workflow required context reuse, amendment logic, or multi-step execution.

What MAIA was able to achieve:

What MAIA was not able to achieve reliably:

The main functional failure point is **not basic intent recognition**. In several failed cases, MAIA understood what the user wanted, but failed during execution because it selected the wrong context, reused the wrong document, asked for repeated confirmations, or performed steps outside the requested scope.

### User Experience Summary

From a user experience perspective, the bot is promising for simple, direct workflows but currently feels inconsistent for real operational usage where users rely on shorthand, previous records, and chained instructions.

Positive UX points:

UX and reliability concerns:

Overall, the bot's response quality needs to be more explicit and evidence-based during higher-risk workflows. For each chain command or previous-record reuse request, the bot should clearly show:

1. Which document it is using as the source.

2. Which steps it is about to perform.

3. Which steps were completed.

4. Which step failed or is blocked, if any.

5. What confirmation has already been received.

This would make the bot feel more reliable, reduce hallucination risk, and give users enough visibility to catch mistakes before documents are created or amended.

## 19th May Test Results Analysis

Analysis date: 2026-05-19

Source scope: This analysis uses the recorded **19th May** core-flow results and the **19th May ad hoc appendix tests** only. The 18th May results are intentionally excluded from the findings below.

### Tested Coverage

The 19th May test run covered the higher-risk operational areas in the Ultimax flow rather than the full TC-01 to TC-16 suite.

Overall result: MAIA can still handle some confirmation-safe lookup and ID parsing scenarios, but the 19th May run shows unresolved reliability gaps in document chain execution, Delivery Note handling, document search, and response strictness.

### Most Common Occurrence / Issue

The most common issue is **MAIA presenting or acting on an incorrect execution state**. This appears across TC-07, TC-08, TC-13, TC-14, and the appendix tests.

Recurring patterns:

1. MAIA says an action was completed when the underlying document was not actually created.

2. MAIA offers options that are incomplete, invalid, or not visible enough for the user to choose safely.

3. MAIA loses precision when old and new document ID formats are both present.

4. MAIA partially executes a chain command, then asks for clarification after the user has already selected the intended path.

5. MAIA uses system-facing IDs or unclear references where user-facing names and document context are needed.

### Key Findings

1. **Chain-command execution is not trustworthy enough for UAT sign-off.** In TC-07, MAIA claimed a Sales Order was created from the Quotation, but the referenced `SO-2026-00136` was an existing Sales Order and no new SO was created. This is a critical issue because the user receives a false completion signal.

2. **Delivery Note creation still fails for multi-step operational commands.** In TC-08 and Appendix Test 2, MAIA could not reliably create a DN and add extra operational items in one command. It also created the DN only halfway before asking for clarification again. The warehouse suggestion was also incorrect because it did not use the parent warehouse that covers the leaf warehouses; the expected parent is `Main Warehouse (WH-00346)`.

3. **Search and cross-document lookup are inconsistent.** TC-13 Test 1 failed because MAIA could not find the relevant document based on item context, even when the exact item name was provided. TC-13 Test 2 passed because MAIA did not assume and asked for confirmation. This suggests the confirmation behaviour is improving, but retrieval quality remains weak.

4. **Old and new document ID formats create ambiguity.** TC-14 failed when MAIA confused `SAL-QTN-2026-00077` with `QT-2026-00077` and did not ask which ID the user intended. TC-15 passed basic ID recognition, but the same old-format/new-format ambiguity remains a known risk.

5. **Response quality needs stricter grounding.** The appendix shows several response-level failures: asking the user to pick from options without showing the options, presenting invalid actions such as resubmitting an already submitted Quotation, listing a different number of confirmation items than stated, and hallucinating that a document cannot be deleted.

6. **Confirmation handling is better but still noisy.** Some 19th May cases show MAIA asking for confirmation instead of assuming, which is positive. However, TC-14 also shows MAIA asking for confirmation even after the user had already cleared the confusion, creating unnecessary friction.

### Functionality Summary

Based on the 19th May results, MAIA is partially functional for simple lookup and ID parsing, but not yet reliable for operational document creation chains.

What MAIA was able to achieve:

1. It successfully avoided assumption in one TC-13 status/search scenario by asking the user for confirmation.

2. It successfully identified both documents in the TC-15 ID parsing test.

3. It can execute some commands, but the result must be independently verified because response accuracy is inconsistent.

What MAIA was not able to achieve reliably:

1. Create a Sales Order from a Quotation and report the result accurately.

2. Create a Delivery Note and add operational items in one continuous command.

3. Retrieve the correct document from item-based context, even when the exact item name is supplied.

4. Safely disambiguate old and new document ID formats before acting.

5. Produce strict, complete, user-actionable responses when presenting choices or confirmations.

The main functional failure point is **execution-state integrity**. In multiple cases, MAIA either performed only part of the requested workflow, referenced the wrong document, or described the outcome incorrectly. This is more serious than a normal clarification gap because the user may believe a document exists or has been updated when it has not.

### User Experience Summary

From a user experience perspective, the 19th May run shows that MAIA needs to be more explicit, strict, and evidence-based before it can support Ultimax's operational users confidently.

Positive UX points:

1. MAIA showed better caution in at least one search scenario by asking for confirmation instead of assuming.

2. Basic ID recognition is working in simple cases.

3. The bot can guide the user toward a possible next action, but those options need stronger validation before being shown.

UX and reliability concerns:

1. The bot sometimes expects the user to choose from options that were not clearly displayed.

2. The bot may present invalid options, such as submitting an already submitted Quotation or converting a document that is already converted.

3. The bot sometimes uses unclear IDs instead of user-friendly customer or document names.

4. The bot may ask for confirmation again after the user has already confirmed or clarified the intended action.

5. The bot may hallucinate system rules, such as saying a document cannot be deleted.

For each chain command, document lookup, or previous-document reference, MAIA should clearly show:

1. Which document it is using as the source.

2. Which steps it is about to perform.

3. Which steps were completed.

4. Which step failed or is blocked, if any.

5. What confirmation has already been received.

This would make the bot feel more reliable, reduce hallucination risk, and give users enough visibility to catch mistakes before documents are created, amended, submitted, or deleted.

## 20th May Test Results Analysis

Analysis date: 2026-05-20

Source scope: This analysis uses the recorded **20th May** test notes only: the TC-03 conversion retest and the two 20th May appendix tests. The 18th and 19th May results are excluded from this section.

### Tested Coverage

The 20th May test run was narrower than the previous two days. It focused on Quotation-to-Sales Order conversion response quality, Sales Order linkage/status accuracy, and warehouse display correctness.

| Area tested | Test reference | Result |
|---|---|---|
| Convert approved Quotation to Sales Order | TC-03 20th May Test 1 | Passed with response-quality issue |
| Quotation / Sales Order linkage status | Appendix 20th May Test 1 | Failed |
| Parent warehouse display and grouping | Appendix 20th May Test 2 | Failed / needs correction |

Overall result: MAIA showed progress on the basic Quotation-to-Sales Order conversion path, but still failed on truthfulness and data presentation when reporting linked Sales Orders and warehouse information.

### Most Common Occurrence / Issue

The main 20th May issue is **response accuracy after lookup or execution**. MAIA can perform or retrieve some workflow information, but the response still needs stricter grounding before it is safe for operational use.

Recurring patterns:

1. MAIA may report an incorrect document state.
2. MAIA may over-explain successful actions, creating noisy responses.
3. MAIA may expose backend-oriented warehouse details that are not useful to the user.

### Key Findings

1. **Quotation-to-Sales Order conversion improved.** TC-03 passed on 20th May, which indicates the basic conversion flow can work. The remaining issue is response length; the reply was too long and is already being reviewed by Afiq.

2. **Sales Order linkage reporting is still unsafe.** Appendix 20th May Test 1 failed because MAIA hallucinated or gave a misleading answer about `QT 86-88`. Those Quotations already had linked / created Sales Orders, so the bot must verify the actual linked document state before answering.

3. **Warehouse display needs cleaner user-facing wording.** Appendix 20th May Test 2 confirmed the correct parent warehouse should be shown as `Main Warehouse (WH-00346)`. The response should not show the company when the relevant concept is a warehouse group.

### Functionality Summary

What MAIA was able to achieve:

1. Convert an approved Quotation to a Sales Order.

What MAIA was not able to achieve reliably:

1. Accurately report whether Quotations already have linked Sales Orders.
2. Present parent warehouse information in a clean, user-facing way.
3. Keep successful workflow responses concise enough for operational users.

The main functional risk on 20th May is **false or misleading status reporting**. Even when the underlying workflow is improving, users still cannot fully trust the response unless MAIA verifies linked documents and presents the result plainly.

### User Experience Summary

The 20th May experience is better for basic execution but still uneven for operational follow-up questions. The successful TC-03 flow shows progress, but the long response adds friction. The failed appendix checks show that status and warehouse answers need to be shorter, more accurate, and more aligned with how Ultimax users refer to documents and warehouses.

### Recommended Fix Priority

| Priority | Area | Why it matters |
|---|---|---|
| P0 | Verify linked Sales Order state before responding | Prevents MAIA from lying or hallucinating about whether QTs already have SOs |
| P1 | Standardize parent warehouse display as `Main Warehouse (WH-00346)` | Prevents confusion between warehouse groups, warehouse IDs, and company names |
| P1 | Shorten successful conversion responses | Keeps routine operational responses usable in chat |

### Appendix Coverage Note

The appendix below includes both the 19th May ad hoc evidence and the 20th May appendix tests. The 20th May appendix tests are treated as supporting evidence for Sales Order linkage accuracy and parent warehouse display.

## Appendix&#x20;

### 19th May adhoc test

#### Test 1:

1. The bot Executed the command but the bot response was bad, it did not mention any option but asks the user to pick from the numbers. Bot thinks I'm a mind reader.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-50.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-51.png>)

* Options bot give is incorrect.&#x20;

  1. Option 1, Quotation has already been submitted and cannot submit again. Correctly reflects the status of "Open" quotation.&#x20;

  2. Option 3, already converted but still give the option to.&#x20;



#### Test 2: Delivery note and warehouse config.&#x20;

1. Bot suggested option *\[Create a Delivery Note that includes only the SO item (T0026) and add the two extra items as separate lines on the DN (these will be unlinked to the SO).].* I picked but it only did halfway, created DN, and it asked for clarification again before adding the items

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-52.png>)

* The suggested warehouse is not a parent warehouse that covers all leaf warehouses.&#x20;

  1. The parent warehouse that covers the leaf warehouse is Main Warehouse (WH-00346)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-53.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-54.png>)

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-55.png>)

#### Test 3:&#x20;

1. Bot response 2 things needing confirmation but lists 3 things.

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-56.png>)

#### Test 4:

1. Bot hallucinates and say cannot delete document.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-57.png>)



#### Test 5:&#x20;

1. Requires strict response&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-58.png>)



### 20th May

#### Test 1

1. Bot lying/hallucinate. QT 86-88 are ones that have a sales order linked/created.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-59.png>)

#### Test 2

1. Warehouse name for the parent warehouse is "Main Warehouse", the warehouse ID is WH-00346.&#x20;

2. Should not show which company, is group.&#x20;

![](<images/18May26 - Ultimax Core Flow Test Cases Results-image-60.png>)

---
owner: Gareth
status: draft
last_reviewed: 2026-05-18
lark_url:
tags: [draft, client, qa, testing]
---

# Ultimax Core Flow Client Validation Test Cases

This document is a client-facing workflow validation checklist for Ultimax. It is based on the shared UAT briefing conversation, [[Ultimax Chatbot Natural Test Cases]], [[Company Context - Ultimax Supply Sdn Bhd]], and MAIA's core [[Quote-to-Cash Flow]].

The goal is to let the Ultimax team confirm whether these test cases match their real daily workflow before final UAT scripts are locked. The example user inputs are intentionally flexible. They are not exact scripts; users may type or say the same intent in their own wording, with shorthand, typos, Malaysian English, Bahasa Malaysia, or mixed language.

## How To Review

For each scenario, please confirm:

| Review area | What to check |
|---|---|
| Workflow fit | Does this reflect how Ultimax actually works? |
| User wording | Would your users naturally say or type something like this? |
| Expected MAIA behaviour | Should MAIA create, update, block, or ask for clarification as described? |
| Missing scenarios | Are there common cases we should add before UAT? |

Use these confirmation options:

| Option | Meaning |
|---|---|
| Confirm | This matches Ultimax workflow |
| Amend | This is close, but needs changes |
| Not Applicable | This does not apply to Ultimax |

## Working Assumptions To Confirm

| Area | Assumption | Client confirmation |
|---|---|---|
| Commercial document item level | Quotation, Sales Order, and Sales Invoice should show the parent selling bundle only | Confirm / Amend / Not Applicable |
| Operational document item level | Delivery Note and Return Note may need instrument bundles, screw bundles, used items, unused returns, missing items, or damaged items | Confirm / Amend / Not Applicable |
| Main flow | Quotation -> Sales Order -> Delivery Note / Return Note -> Sales Invoice -> Receipt | Confirm / Amend / Not Applicable |
| Payment proof | Users may send payment screenshots to MAIA for matching and receipt creation | Confirm / Amend / Not Applicable |
| Language style | Users may use short, mixed, typo-heavy mobile messages | Confirm / Amend / Not Applicable |

## Suggested Test Data

Replace these examples with actual Ultimax UAT records if needed.

| Data type | Example values |
|---|---|
| Customers | ADVENTIST HOSPITAL & CLINIC SERVICES (M), USAINS HEALTHCARE S/B, SUNWAY MEDICAL CENTRE IPOH S/B, Sunway Medical Centre Damansara, ZENTAVA SUPPLY SDN BHD |
| Parent selling bundles | T0004 - Proximal Femoral Nail Short, T0005 - Proximal Femoral Nail Long, T0003 - Interlocking Tibial Nail, T0007 - Supra Patella Tibial Nail, T0032 - 4.0mm Cannulated Screw, T0033 - 7.3mm Cannulated Screw |
| Operational bundles | I0006 - Neogen AR set (Instruments), S0006 - Neogen AR set (Screws), I0010 - 7.3mm KCS set, I0002 - VA 2.7/3.5 mm set |
| Component examples | Depth Gauge for Locking Screws, Cannulated Drill Bit Diameter 3.0mm, KCS 4.0mm 45mm, KCS 7.3mm 80mm |
| People / context | Surgeon, patient, operation date, delivery time, hospital branch, sales owner, driver |

## Coverage Map

| Flow area | Covered by |
|---|---|
| RFQ / quotation creation | TC-01, TC-02 |
| Quotation approval and Sales Order creation | TC-03 |
| Multiple same-customer quotations / orders | TC-04 |
| Same-as-last-time quotation reuse | TC-05 |
| Submitted Quotation amendment | TC-06 |
| Chain command across multiple documents | TC-07 |
| Delivery Note and operational bundles | TC-08 |
| Return Note and used / unused / missing items | TC-09, TC-10 |
| Sales Invoice | TC-11 |
| Receipt and payment proof | TC-12 |
| Search, status check, and references | TC-13 |
| Mixed command, pause / resume, natural language | TC-14 |
| ID parsing and safeguards | TC-15 |
| PDF / CSV exports | TC-16 |

## Test Cases

### TC-01 - Create Quotation From Hospital RFQ

| Field | Detail |
|---|---|
| Primary user | Sales |
| Workflow to confirm | Sales receives hospital RFQ and creates a Quotation using parent selling bundle only |
| Flexible user input examples | - `Adventist ask quote for Dr Tan case tomorrow, short PFN one set, delivery before 8am.`<br>- `Can prep quotation for Sunway Ipoh, T0032 qty 1, patient Lee, surgeon Dr Wong.`<br>- `USAINS need quote for distal tibia plate, operation 18 May, put parent item only.` |
| Expected MAIA behaviour | Resolve customer, item, quantity, patient/surgeon/operation remarks, and draft or submit Quotation depending on user confirmation |
| Should MAIA ask if missing | Customer is unclear, item has multiple matches, quantity missing, operation date required, or patient/surgeon info is mandatory |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-02 - Handle Ambiguous Quotation Details

| Field | Detail |
|---|---|
| Primary user | Sales |
| Workflow to confirm | MAIA should ask only the blocking clarification when the RFQ is incomplete or ambiguous |
| Flexible user input examples | - `Sunway wants tibial nail for Thu, check stock then quote.`<br>- `Add bone graft also, small one.`<br>- `Create quote for Adventist, 4.0 screw set.` |
| Expected MAIA behaviour | Show likely matching customers/items, ask for exact option, and avoid guessing where there is risk |
| Good clarification examples | `Do you mean T0003 Interlocking Tibial Nail or T0007 Supra Patella Tibial Nail?`<br>`Which Bone Graft size should I add?`<br>`I found two Sunway branches. Which one is this for?` |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-03 - Convert Approved Quotation To Sales Order

| Field | Detail |
|---|---|
| Primary user | Sales / Operations |
| Workflow to confirm | Once customer approves a Quotation, MAIA converts it to a Sales Order using parent selling bundle only |
| Flexible user input examples | - `Customer confirm QT-1042, convert to SO.`<br>- `USAINS approved the distal tibia quote, make SO and set op date 18 May.`<br>- `QT005 sudah approve, help create SO.` |
| Expected MAIA behaviour | Find submitted Quotation, confirm it is not already converted, create Sales Order, preserve customer/item/pricing/remarks, and return SO number |
| Blocked case | If Quotation already has a linked SO, MAIA should not create duplicate SO and should show the existing SO |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-04 - Bulk Create Quotations / Sales Orders For Same Customer

| Field | Detail |
|---|---|
| Primary user | Sales |
| Workflow to confirm | User sends one structured message containing multiple orders for the same customer, and MAIA creates separate records while preserving each patient's remarks |
| Flexible user input examples | - `create 3 quotation untuk Sunway Damansara`<br>- `order 1: 4.0 cannulated screw set x 1; remarks patient name Stanley, IC 999999-99-9999, MRN 234234, surgery 03/06/2026, surgeon Sean Lee`<br>- `order 2: femoral nail standard set x 1; remarks patient name Harith Zain, IC 660606-06-6606, MRN 445566, surgery 06/06/2026, surgeon Dr Kumar Raj`<br>- `order 3: distal radius 2.7mm two column set x 1; remarks patient name Marcus Ho, IC 232323-23-2323, MRN 556677, surgery 10/06/2026, surgeon Dr Ng Chee Seng`<br>- `delivery semua on 02/06/2026` |
| Expected MAIA behaviour | Resolve Sunway Damansara, create 3 separate draft Quotations or Sales Orders depending on user wording, assign the correct item and quantity to each record, add the correct patient/IC/MRN/surgery/surgeon details into remarks, and apply delivery date 02/06/2026 to all 3 records |
| Chain validation | MAIA should preserve the grouping of order 1, order 2, and order 3. Patient remarks must not be mixed between records |
| Should MAIA ask if missing | If customer branch is ambiguous, item name has multiple matches, document type is unclear between Quotation and SO, or submission is requested but required fields are incomplete |
| Partial failure behaviour | If one order has an unresolved item, MAIA should say which order is blocked and ask whether to create the other valid records first or hold all 3 |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-05 - Same As Last Week Quotation And Sales Order

| Field | Detail |
|---|---|
| Primary user | Sales |
| Workflow to confirm | User asks MAIA to reuse a previous similar operation/order instead of retyping the item details |
| Flexible user input examples | - `sunway ipoh ada same operation as last week. buat quotation terus submit and SO`<br>- `Same as last week punya Sunway Ipoh case, create quotation and convert to SO.`<br>- `Repeat previous Sunway Ipoh operation, submit quote and make SO if details match.` |
| Expected MAIA behaviour | Search recent Sunway Ipoh quotations/orders from the previous week, identify the matching operation if unambiguous, create the new Quotation, submit it if requested, then create the Sales Order |
| Chain validation | MAIA should not guess if more than one Sunway Ipoh operation exists last week. It should show likely matches and ask the user to choose before creating documents |
| Should MAIA ask if missing | Operation date, patient details, surgeon, item/set, or which previous case to copy if multiple matches exist |
| Partial failure behaviour | If the Quotation can be created but cannot be submitted or converted to SO, MAIA should stop, explain the blocker, and show which document was created |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-06 - Fix Wrong Price On Submitted Quotation

| Field | Detail |
|---|---|
| Primary user | Sales |
| Workflow to confirm | User asks MAIA to amend a submitted Quotation because the quoted price is wrong |
| Flexible user input examples | - `eh for QT-2026-00071 hospital said quoted for the wrong price, they will use is RM 2000. cancel and tukar for this`<br>- `QT-2026-00071 price salah, hospital confirm should be RM2000, cancel and amend.`<br>- `For this submitted quotation, change price to RM2000 and resubmit if needed.` |
| Expected MAIA behaviour | Find QT-2026-00071, confirm current status, cancel/amend the submitted Quotation if required, update the item price to RM2,000, and ask before resubmitting or sending updated PDF |
| Chain validation | MAIA should treat `cancel and tukar` as an amendment flow, not as a permanent cancellation without recreation |
| Should MAIA ask if missing | If the Quotation has multiple line items, if the item to reprice is unclear, or if downstream Sales Order / Delivery Note / Invoice already exists |
| Partial failure behaviour | If downstream documents exist, MAIA should stop and explain what must be cancelled or amended first before changing the Quotation price |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-07 - Chain Command From Quotation To Delivery Note

| Field | Detail |
|---|---|
| Primary user | Sales / Operations |
| Workflow to confirm | User gives one compound instruction and MAIA executes the document chain in the correct order |
| Flexible user input examples | - `Submit quotation, give SOCSO PDF, create sales order, submit sales order, create delivery note.`<br>- `For this quotation, submit first, generate the SOCSO PDF, then make SO, submit SO, and prepare DN.`<br>- `QT-1042 confirmed. Submit quote, send me SOCSO PDF, convert to SO, submit, then create DN for delivery.` |
| Expected MAIA behaviour | Confirm the target Quotation, submit it, generate the requested SOCSO PDF, create Sales Order from the submitted Quotation, submit the Sales Order, then create a Draft Delivery Note from the submitted SO |
| Order validation | MAIA must not skip steps. It should only create SO after Quotation submission succeeds, and only create DN after SO submission succeeds |
| Should MAIA ask if missing | If the Quotation is unclear, already submitted, already converted, missing required details, or the PDF type is unclear |
| Partial failure behaviour | If one step fails, MAIA should stop at that step, explain what completed, and ask how to proceed rather than continuing blindly |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-08 - Create Delivery Note From Sales Order With Operational Bundles

| Field | Detail |
|---|---|
| Primary user | Logistics |
| Workflow to confirm | DN is created from SO and may include operational instrument/screw bundles in addition to the parent selling bundle context |
| Flexible user input examples | - `SO-221 Sunway Damansara confirm, create DN for tomorrow morning, add Neogen AR instrument tray and AR screws.`<br>- `Create delivery note from SO-0310, add I0010 set, scheduled 7.30am.`<br>- `Prepare DN for Adventist case and include the screw tray.` |
| Expected MAIA behaviour | Create DN from the correct SO, carry customer/address/reference, add operational bundles, set delivery timing, and ask before submit if needed |
| Should MAIA ask if missing | Delivery date/time, warehouse, branch/address, or operational bundle is unclear |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-09 - Return Note With Used, Unused, Missing, Or Damaged Items

| Field | Detail |
|---|---|
| Primary user | Logistics / Warehouse |
| Workflow to confirm | After surgery/delivery, returned sets are checked and Return Note records used implants, unused returns, missing items, or damaged instruments |
| Flexible user input examples | - `DN-0341 set came back, surgeon used AR blade 10.3 x 85 and two locking screws 5.0 x 40. Others return unused.`<br>- `Adventist DN-0338 return check, depth gauge missing, keep RN open.`<br>- `For DN046, hospital used 60mm screw only, return the rest.` |
| Expected MAIA behaviour | Create RN from DN, explode only relevant bundle if required, mark used/missing/damaged items, keep unresolved RN open, and submit only after confirmation |
| Should MAIA ask if missing | Exact screw size, quantity used, missing item identity, or whether to submit/keep draft |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-10 - Chain Command Return Flow For Used KCS Screw

| Field | Detail |
|---|---|
| Primary user | Logistics / Warehouse |
| Workflow to confirm | User creates a Return Note from a Delivery Note containing T0032 - 4.0mm Cannulated Screw, and records one used KCS screw in the same command |
| Flexible user input examples | - `From DN with T0032 - 4.0mm Cannulated Screw, create return note, hospital used KCS 30mm one.`<br>- `DN-046 return: T0032 set came back, create RN, used KCS 4.0mm 30mm one piece.`<br>- `For this DN, make return note and remove the 4.0 KCS 30mm screw because hospital used it.` |
| Expected MAIA behaviour | Create Return Note from the correct DN, explode bundle T0032 - 4.0mm Cannulated Screw, remove KCS 4.0mm (30mm) from the returned items because it was used, and keep the rest of the bundle as returned/unused |
| Chatbot response to validate | MAIA should clearly say it exploded T0032 - 4.0mm Cannulated Screw and removed KCS 4.0mm (30mm) as the used item |
| Should MAIA ask if missing | If the DN is unclear, T0032 is not on the DN, the screw size has multiple matches, or quantity is unclear |
| Partial failure behaviour | If the bundle cannot be exploded or KCS 4.0mm (30mm) is not found, MAIA should stop and ask for the exact item rather than creating an incorrect RN |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-11 - Create Sales Invoice From Sales Order

| Field | Detail |
|---|---|
| Primary user | Finance |
| Workflow to confirm | Finance creates Sales Invoice from SO, usually after delivery/return rules are satisfied |
| Flexible user input examples | - `SO-221 return settled already? If yes invoice Sunway Damansara.`<br>- `Create invoice from SO-0310, use parent bundle only.`<br>- `Generate invoice for delivered unbilled order.` |
| Expected MAIA behaviour | Check SO status, delivery/return dependency if required by Ultimax, create Invoice with parent selling bundle only, submit to UNPAID after review |
| Blocked case | If SO is on HOLD, MAIA should require Resume to TO BILL before creating Invoice |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-12 - Record Receipt From Payment Proof

| Field | Detail |
|---|---|
| Primary user | Finance / Sales |
| Workflow to confirm | Payment proof can be matched to one or more invoices and turned into Receipt |
| Flexible user input examples | - `Sunway paid for SO221 and SO225, screenshot attached. If amount matches create receipt.`<br>- `Customer paid RM12,500, match with SI-0334 and SI-0335.`<br>- `Payment from owner personal account, confirm belongs to this customer.` |
| Expected MAIA behaviour | Extract amount/date/reference/sender from image if attached, resolve SO to linked Invoice, match outstanding amount, create Receipt, upload proof, and support full/partial/multi-invoice allocation |
| Should MAIA ask if missing | No image attached, image unreadable, amount mismatch, sender name differs, or multiple invoices match |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-13 - Status Search And Cross-Document Lookup

| Field | Detail |
|---|---|
| Primary user | All roles |
| Workflow to confirm | Users can ask where a case/order stands without knowing the exact document type |
| Flexible user input examples | - `Where are we at for Adventist 7.3 KCS case? Quote approve or still waiting?`<br>- `Show latest order for Sunway Ipoh.`<br>- `Open 046.`<br>- `Show delivered SO not yet invoiced.` |
| Expected MAIA behaviour | Search across customer, item, document ID, and status; summarize linked documents such as QT, SO, DN, RN, SI, Receipt |
| Should MAIA ask if missing | If a running number could refer to multiple document types, ask whether it is QT, SO, DN, RN, SI, Receipt, etc. |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-14 - Mixed Command, Pause, And Resume

| Field | Detail |
|---|---|
| Primary user | Sales / Logistics / Finance |
| Workflow to confirm | One message may contain multiple actions; MAIA should list actions and ask before executing risky changes |
| Flexible user input examples | - `Adventist approve QT1061 make SO. Sunway Ipoh still pending remind Lisa tomorrow. Check Sunway Damansara payment too.`<br>- `Customer confirm already, convert QT005 to SO, then prepare DN but hold invoice.`<br>- `Also check payment for Sunway Damansara.` |
| Expected MAIA behaviour | Break message into separate actions, confirm sequence, pause if clarification is needed, and resume from the paused step after the user answers |
| Pause rule | If MAIA is waiting for a clarification and user sends an unrelated request, MAIA should ask whether to continue the pending task or cancel it |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-15 - ID Parsing And Safeguards

| Field | Detail |
|---|---|
| Primary user | Logistics / Warehouse / Finance |
| Workflow to confirm | Users may refer to document IDs in shorthand; MAIA should parse safely and confirm before action |
| Flexible user input examples | - `DN401 and DN402 are done.`<br>- `Open QT1042.`<br>- `Check SO221.`<br>- `Find invoice 046 for Sunway.` |
| Expected MAIA behaviour | Normalize IDs, infer document type where safe, ask if the same number could refer to multiple document types, and show the resolved document before taking action |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

### TC-16 - PDF, CSV, And Document Output Checks

| Field | Detail |
|---|---|
| Primary user | Sales / Logistics / Finance |
| Workflow to confirm | Client can download/share required documents from MAIA |
| Flexible user input examples | - `Generate quotation PDF.`<br>- `Give SOCSO PDF for this quotation.`<br>- `Download sales order PDF.`<br>- `Send receipt PDF to customer.`<br>- `Export invoice CSV if needed.` |
| Expected MAIA behaviour | Generate/download the correct requested output for Quotation, SOCSO PDF, Sales Order, Delivery Note, Return Note if in scope, Invoice, Receipt, and CSV export if required |
| Client confirmation | Confirm / Amend / Not Applicable |
| Client notes |  |

## Client Sign-Off Summary

| Test case | Workflow confirmed? | Amendments needed | Owner | Date |
|---|---|---|---|---|
| TC-01 |  |  |  |  |
| TC-02 |  |  |  |  |
| TC-03 |  |  |  |  |
| TC-04 |  |  |  |  |
| TC-05 |  |  |  |  |
| TC-06 |  |  |  |  |
| TC-07 |  |  |  |  |
| TC-08 |  |  |  |  |
| TC-09 |  |  |  |  |
| TC-10 |  |  |  |  |
| TC-11 |  |  |  |  |
| TC-12 |  |  |  |  |
| TC-13 |  |  |  |  |
| TC-14 |  |  |  |  |
| TC-15 |  |  |  |  |
| TC-16 |  |  |  |  |

## Open Questions For Ultimax

- [ ] Should Invoice creation wait until Return Note is settled, or can Invoice be created immediately after Delivery Note?
- [ ] For surgical sets, which bundles/components must appear on DN and RN?
- [ ] Should missing/damaged instrument cases block RN submission or stay open for follow-up?
- [ ] What exactly should be included in the SOCSO PDF, and at which step should it be generated?
- [ ] Which document outputs are required for UAT: Quotation PDF, SOCSO PDF, SO PDF, CSV, receipt PDF, delivery/return documents?
- [ ] Should MAIA send customer-facing messages directly, or only draft them for staff approval?

## See Also

- [[Ultimax Chatbot Natural Test Cases]]
- [[MAIA Chatbot — Compound Multistep Query Examples]]
- [[Company Context - Ultimax Supply Sdn Bhd]]
- [[Quote-to-Cash Flow]]
- [[Known Limitations]]

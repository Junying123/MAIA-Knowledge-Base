---
owner: Gareth
status: draft
last_reviewed: 2026-05-13
lark_url:
tags: [draft, client, qa, testing]
---

# Ultimax Chatbot Natural Test Cases

This UAT note adapts [[MAIA Chatbot — Compound Multistep Query Examples]] for Ultimax Supply Sdn Bhd. The examples use Ultimax working customers, item bundles, item codes, and the Ultimax workflow rule: Quotation, Sales Order, and Sales Invoice use the parent selling bundle only, while Delivery Note and Return Note can use operational instrument or screw bundles.

The user messages are intentionally natural and slightly messy. The example chatbot replies are in English.

## Working Data

### Customers

| Customer | Debtor Code | Credit Term | Sales Agent |
|---|---:|---|---|
| ADVENTIST HOSPITAL & CLINIC SERVICES (M) | 300-A00A | Net 60 days | Jocelyn Ch'ng Wen Pin |
| ZENTAVA SUPPLY SDN BHD (202501017600) | 300-Z00A | C.O.D. |  |
| USAINS HEALTHCARE S/B | 300-U00B | Net 60 days | Eng Yiven |
| SUNWAY MEDICAL CENTRE IPOH S/B | 300-S00G | Net 30 days | Lisa Khor |
| Sunway Medical Centre Damansara | 300-S00I | Net 30 days | Lim Bao Sen |

### Parent Selling Bundles

| Code | Name | Standard Selling Price |
|---:|---|---:|
| T0004 | Proximal Femoral Nail Short | RM1,700 |
| T0005 | Proximal Femoral Nail Long | RM2,400 |
| T0003 | Interlocking Tibial Nail | RM1,300 |
| T0007 | Supra Patella Tibial Nail | RM2,000 |
| T0032 | 4.0mm Cannulated Screw | RM500 |
| T0033 | 7.3mm Cannulated Screw | RM500 |
| T0010 | VA Distal Radius Two-Column LCP 2.7mm | RM2,500 |
| T0026 | VA Distal Tibial LCP 3.5mm | RM2,700 |
| T0030 | VA Proximal Femoral LCP 4.5/5.0mm | RM3,500 |
| BG001 | Bone Graft | Variable by selected graft item and size |

### Operational Bundles And Components

| Code | Name | Use |
|---:|---|---|
| I0006 | Neogen AR set (Instruments) | DN/RN operational detail |
| S0006 | Neogen AR set (Screws) | DN/RN operational detail |
| I0005 | Neogen ILN set (Instruments) | DN/RN operational detail |
| S0005 | Neogen ILN set (Screws) | DN/RN operational detail |
| I0009 | 4.0mm KCS set (Insturment) | DN/RN operational detail; source spelling retained |
| I0010 | 7.3mm KCS set (Insturment) | DN/RN operational detail; source spelling retained |
| I0002 | VA 2.7/3.5 mm set (Instruments) | DN/RN operational detail |
| S0002 | VA 2.7/3.5 mm set (Screws) | DN/RN operational detail |
| 267220 | Depth Gauge for Locking Screws | Return check, missing item |
| 267350 | Screwdriver for AR Blade | Return check, missing item |
| 241160 | Cannulated Drill Bits Diameter 5.0mm | Return check, used or missing item |
| 246180 | Cannulated Drill Bit Diameter 3.0mm | Return check, used or missing item |
| 31421045 | KCS 4.0mm, 45mm | Used implant item |
| 31401080 | KCS 7.3mm, 16mm Thread, 80mm | Used implant item |

## Failure Types To Cover

| Code | Ultimax Example |
|---|---|
| `F-NOT-FOUND` | Customer shorthand, quotation, DN, or item code cannot be found |
| `F-AMBIGUOUS` | Bone Graft size, Sunway branch, or multiple matching cases |
| `F-BLOCKED` | C.O.D. customer release, submitted DN/RN, already converted QT |
| `F-DESTRUCTIVE` | Bulk date changes, bulk delivery confirmation, chain cancellation |
| `F-MISSING-DATA` | Operation date, graft size, payment amount, missing attachment |
| `F-PARTIAL` | Some DNs or pick lists succeed while others fail |
| `F-DEPENDENCY` | Amending QT/SO after DN, RN, SI, or payment exists |
| `F-IMAGE` | Payment screenshot unreadable or sender mismatch |

## 1. Sales User

Sales users work across hospital RFQ, Quotation, Sales Order, Delivery readiness, and Sales Invoice. Ultimax sales messages often mention operation date, surgeon, hospital branch, and the commercial parent bundle.

### S-01 - RFQ To Quotation For Adventist `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
Adventist asked for quote, Dr Tan hip fracture tomorrow. Use Proximal Femoral Nail Short, one set. Can prepare QT first and keep delivery before 8am?
```

**Happy path:**

1. Resolve Adventist to ADVENTIST HOSPITAL & CLINIC SERVICES (M).
2. Resolve item to T0004 - Proximal Femoral Nail Short.
3. Draft Quotation with parent selling bundle only.
4. Add operation/delivery timing to remarks.
5. Ask before submit/send.

**Example chatbot reply:**

```text
I found ADVENTIST HOSPITAL & CLINIC SERVICES (M) and T0004 - Proximal Femoral Nail Short.

I will draft a quotation for 1 set with delivery requested before 8:00 AM tomorrow. Should I submit the quotation now?
```

**Failure scenario - missing operation date** `F-MISSING-DATA`

```text
I can prepare the quotation, but I need the operation date before booking delivery timing.

What is the operation date for Dr Tan's case?
```

### S-02 - Availability Before Quote For Sunway Ipoh `[AMBIGUOUS]` `[CHAIN]`

**User message:**

```text
Sunway Ipoh need tibial nail for Thursday case. Check T0003 and T0007 availability first, if either one available then quote them.
```

**Happy path:**

1. Resolve customer to SUNWAY MEDICAL CENTRE IPOH S/B.
2. Check T0003 - Interlocking Tibial Nail and T0007 - Supra Patella Tibial Nail.
3. If one is available, ask user to confirm quotation creation.
4. If both are available, ask which bundle to quote.

**Example chatbot reply:**

```text
Both items are available:
1. T0003 - Interlocking Tibial Nail
2. T0007 - Supra Patella Tibial Nail

Which item should I use for the quotation to SUNWAY MEDICAL CENTRE IPOH S/B?
```

**Failure scenario - stock unavailable** `F-BLOCKED`

```text
T0003 and T0007 are both unavailable for Thursday.

Do you want me to hold the quotation until warehouse confirms availability, or create a draft quotation marked "pending stock confirmation"?
```

### S-03 - Convert Approved QT To SO For USAINS `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
USAINS approved QT-1042 for VA Distal Tibial LCP. Convert to SO and book it, operation date 18 May. SO only show parent bundle ya.
```

**Happy path:**

1. Resolve USAINS to USAINS HEALTHCARE S/B.
2. Find QT-1042.
3. Confirm item is T0026 - VA Distal Tibial LCP 3.5mm.
4. Convert to SO using parent selling bundle only.
5. Record operation date as 18 May 2026.

**Example chatbot reply:**

```text
QT-1042 is submitted and linked to USAINS HEALTHCARE S/B.

I will create the Sales Order using T0026 - VA Distal Tibial LCP 3.5mm only, with operation date 18 May 2026. Proceed?
```

**Failure scenario - QT already converted** `F-BLOCKED`

```text
QT-1042 already has a linked Sales Order: SO-0221.

I cannot convert it again. Do you want me to update SO-0221 with the operation date instead?
```

### S-04 - C.O.D. Customer Booking For Zentava `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
Zentava wants 7.3mm cannulated screw for tomorrow. Prepare QT and if they confirm later make SO, but remind me COD before release.
```

**Happy path:**

1. Resolve customer to ZENTAVA SUPPLY SDN BHD (202501017600).
2. Detect C.O.D. credit term.
3. Draft QT using T0033 - 7.3mm Cannulated Screw.
4. Add reminder that payment must be confirmed before release.

**Example chatbot reply:**

```text
ZENTAVA SUPPLY SDN BHD is a C.O.D. customer.

I will draft the quotation with T0033 - 7.3mm Cannulated Screw and add an internal reminder: payment must be confirmed before release. Should I submit the quotation?
```

**Failure scenario - user asks to release before payment** `F-BLOCKED`

```text
ZENTAVA SUPPLY SDN BHD is C.O.D., so release should be blocked until payment is confirmed.

Do you still want to create the SO now and keep delivery on hold?
```

### S-05 - Amend Quotation Because Surgeon Changed Implant `[AMEND]` `[CROSS-DOC]`

**User message:**

```text
USAINS QT-1050 change item. Doctor wants VA Proximal Femoral LCP 4.5/5.0 instead of Proximal Femoral Nail Long. Update before they approve.
```

**Happy path:**

1. Resolve USAINS HEALTHCARE S/B.
2. Find QT-1050.
3. Replace T0005 - Proximal Femoral Nail Long with T0030 - VA Proximal Femoral LCP 4.5/5.0mm.
4. If QT is submitted, cancel/amend/resubmit.
5. Do not touch downstream documents unless they exist.

**Example chatbot reply:**

```text
QT-1050 is submitted, so I need to amend it before changing the item.

I will replace T0005 - Proximal Femoral Nail Long with T0030 - VA Proximal Femoral LCP 4.5/5.0mm and resubmit the quotation. Proceed?
```

**Failure scenario - SO and DN already exist** `F-DEPENDENCY`

```text
QT-1050 has already been converted to SO-0234, and SO-0234 has DN-0401 submitted.

To change the implant, I need to cancel or amend the downstream documents first. This may affect delivery planning. Do you want to hold and check with logistics first?
```

### S-06 - Bone Graft Size Ambiguity `[AMBIGUOUS]`

**User message:**

```text
Sunway Ipoh also ask add Bone Graft to the quote. Put one unit first.
```

**Happy path:**

There is no safe happy path without clarification because BG001 has multiple graft item and size options.

**Example chatbot reply:**

```text
Bone Graft has multiple options. Which one should I add for SUNWAY MEDICAL CENTRE IPOH S/B?

1. BioNgraft Granules 5cc
2. BioNgraft Granules 10cc
3. Grafton Putty 1cc
4. Grafton Putty 5cc
5. Infuse Bone Graft Small Kit 2.8cc
6. Infuse Bone Graft Large Kit 8cc
```

**Failure scenario - user gives vague follow-up** `F-MISSING-DATA`

```text
"Small one" could mean BioNgraft 5cc or Infuse Bone Graft Small Kit 2.8cc.

Which exact Bone Graft item should I use?
```

## 2. Logistics User

Logistics users work across SO, DN, delivery timing, returned sets, and operational bundle accuracy.

### L-01 - Create DN With Instrument And Screw Bundles `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
SO-221 for Sunway Damansara confirmed. Create DN for tomorrow morning. Add Neogen AR instrument set and Neogen AR screws also, then submit.
```

**Happy path:**

1. Resolve customer to Sunway Medical Centre Damansara from SO-221.
2. Create DN from SO-221.
3. Add I0006 - Neogen AR set (Instruments).
4. Add S0006 - Neogen AR set (Screws).
5. Submit DN after confirmation.

**Example chatbot reply:**

```text
I will create a Delivery Note from SO-221 for Sunway Medical Centre Damansara and add:
1. I0006 - Neogen AR set (Instruments)
2. S0006 - Neogen AR set (Screws)

Delivery timing: tomorrow morning. Submit the DN after creation?
```

**Failure scenario - DN already exists** `F-BLOCKED`

```text
SO-221 already has DN-0339 in Draft status.

Do you want me to update DN-0339 with I0006 and S0006, or create a separate Delivery Note?
```

### L-02 - Delivery Timing Change After DN Submitted `[AMEND]` `[CHAIN]`

**User message:**

```text
Sunway Ipoh moved case earlier. DN-0402 with VA 2.7/3.5 instruments must reach by 7.30am tomorrow, not afternoon. Update and tell driver.
```

**Happy path:**

1. Find DN-0402.
2. Confirm customer is SUNWAY MEDICAL CENTRE IPOH S/B.
3. Confirm operational bundle I0002 - VA 2.7/3.5 mm set (Instruments).
4. Update delivery time if trip is not dispatched.
5. Notify assigned driver.

**Example chatbot reply:**

```text
DN-0402 is submitted but the trip has not been dispatched yet.

I will update the delivery time to 7:30 AM tomorrow and notify the assigned driver. Proceed?
```

**Failure scenario - trip already dispatched** `F-BLOCKED`

```text
DN-0402 is already in a dispatched trip, so I cannot edit the trip timing directly.

I can message the driver now and add an internal note on DN-0402. Proceed?
```

### L-03 - Bulk Mark Delivered With Mixed DN List `[BULK]` `[DESTRUCTIVE]`

**User message:**

```text
done liao DN 401, 402, 402, 405-408 for Sunway cases. mark delivered and create return reminder for tomorrow.
```

**Parsing:**

- DN-401
- DN-402, duplicate removed
- DN-405 to DN-408
- Total unique records: 6

**Example chatbot reply:**

```text
I will mark 6 Delivery Notes as Delivered:
DN-401, DN-402, DN-405, DN-406, DN-407, DN-408

Duplicate removed: DN-402.

After delivery, I will create return reminders for tomorrow. Proceed?
```

**Failure scenario - partial state failure** `F-PARTIAL`

```text
From the 6 Delivery Notes:
1. 4 DNs can be marked Delivered.
2. DN-402 is still Draft.
3. DN-407 is already Delivered.

Proceed with the 4 valid DNs and skip DN-402 and DN-407?
```

### L-04 - Returned Set With Used Neogen AR Screws `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
DN-0341 from Sunway Damansara came back. Used AR Blade 10.3 x 85 and two Neogen Locking Screws 5.0 x 40. Create RN, explode screw bundle only, unused all return.
```

**Happy path:**

1. Create RN from DN-0341.
2. Explode S0006 - Neogen AR set (Screws) only.
3. Mark AR Blade 10.3mm x 85mm x 1 as used.
4. Mark Neogen Locking Screws 5.0mm x 40mm x 2 as used.
5. Return all unused items.

**Example chatbot reply:**

```text
I will create a Return Note from DN-0341 and explode S0006 - Neogen AR set (Screws) only.

Used items:
1. AR Blade 10.3mm x 85mm x 1
2. Neogen Locking Screws 5.0mm x 40mm x 2

All other delivered items will be marked as returned unused. Submit the RN?
```

**Failure scenario - missing screw size** `F-MISSING-DATA`

```text
I need the screw size before submitting the Return Note.

Which Neogen Locking Screw size was used?
```

### L-05 - Missing Instrument On Return `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
For Adventist DN-0338 return, Depth Gauge for Locking Screws not back. Other Neogen ILN instruments ok. Flag Jocelyn and don't close RN yet.
```

**Happy path:**

1. Resolve Adventist customer.
2. Find DN-0338 and latest linked RN.
3. Mark 267220 - Depth Gauge for Locking Screws as missing.
4. Keep RN draft/open.
5. Create ToDo for Jocelyn Ch'ng Wen Pin.

**Example chatbot reply:**

```text
I found DN-0338 for ADVENTIST HOSPITAL & CLINIC SERVICES (M).

I will mark 267220 - Depth Gauge for Locking Screws as missing on the return check, keep the RN open, and create a ToDo for Jocelyn Ch'ng Wen Pin. Proceed?
```

**Failure scenario - RN already submitted** `F-BLOCKED`

```text
RN-0118 for DN-0338 is already submitted.

To update the missing instrument, I need to cancel and amend the Return Note. Proceed?
```

## 3. Finance User

Finance users need invoices and payments to stay aligned with the parent selling bundle and the hospital's payment terms.

### F-01 - Invoice Parent Bundle After Return Settled `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
SO-221 return settled already? If yes invoice Sunway Damansara. Invoice should show T0004 only, not the Neogen AR tray details.
```

**Happy path:**

1. Check SO-221 delivery status.
2. Check linked RN completion.
3. Create SI from SO-221.
4. Use parent selling bundle T0004 only.

**Example chatbot reply:**

```text
SO-221 delivery and return are completed.

I will generate the Sales Invoice for Sunway Medical Centre Damansara using T0004 - Proximal Femoral Nail Short only. Proceed to submit the invoice?
```

**Failure scenario - RN still draft** `F-BLOCKED`

```text
SO-221 has DN-0339 marked Delivered, but RN-0112 is still Draft.

Do you want me to hold the invoice until warehouse submits the Return Note?
```

### F-02 - Payment Proof For Sunway Damansara `[IMAGE]` `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
Sunway Damansara paid for SO-221 and SO-225, screenshot attached. If amount tally then receipt send back to procurement.
```

**Happy path:**

1. Extract amount, date, reference, and sender from screenshot.
2. Resolve SO-221 and SO-225 to linked Sales Invoices.
3. Match total outstanding.
4. Create Payment Entry.
5. Generate receipt and ask whether to send.

**Example chatbot reply:**

```text
Payment proof received.

I will match the extracted amount against invoices linked to SO-221 and SO-225 for Sunway Medical Centre Damansara. If the amount matches, I can create the Payment Entry and generate the receipt for procurement. Proceed?
```

**Failure scenario A - no image attached** `F-MISSING-DATA`

```text
I do not see a payment screenshot attached.

Do you want to attach the receipt first, or should I create a draft Payment Entry without proof for Finance review?
```

**Failure scenario B - sender mismatch** `F-AMBIGUOUS`

```text
The sender name on the receipt is "SUNWAY HEALTHCARE TREASURY", while the customer is Sunway Medical Centre Damansara.

Please confirm this payment belongs to Sunway Medical Centre Damansara for SO-221 and SO-225.
```

### F-03 - C.O.D. Payment Hold For Zentava `[CHAIN]` `[BULK]`

**User message:**

```text
Zentava confirm but COD, don't release until payment screenshot. If got any SO for them today put hold first.
```

**Happy path:**

1. Resolve Zentava to ZENTAVA SUPPLY SDN BHD (202501017600).
2. Find today's SOs for Zentava.
3. Put release/payment hold on matching SOs.
4. Create reminder for payment screenshot.

**Example chatbot reply:**

```text
I found 2 Sales Orders for ZENTAVA SUPPLY SDN BHD today: SO-0301 and SO-0302.

Because the customer is C.O.D., I will put both on payment hold until a payment screenshot is received. Proceed?
```

**Failure scenario - large or ambiguous scope** `F-DESTRUCTIVE`

```text
I found 9 open Zentava Sales Orders, not just today's orders.

Do you want to hold only today's orders, or show the full list first?
```

## 4. Warehouse User

Warehouse users may type short, typo-heavy messages from the floor. The bot should normalize document IDs, preserve gaps, and ask only the blocking clarification.

### W-01 - Confirm Pick And Create DN `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
PL-0088 for Adventist 7.3 kcs all picked. confirm pick and create dn, add I0010 also.
```

**Happy path:**

1. Mark PL-0088 picked.
2. Confirm linked case is Adventist 7.3mm KCS.
3. Create DN.
4. Add I0010 - 7.3mm KCS set (Insturment).

**Example chatbot reply:**

```text
PL-0088 is linked to ADVENTIST HOSPITAL & CLINIC SERVICES (M).

I will confirm the pick, create the Delivery Note, and add I0010 - 7.3mm KCS set (Insturment). Proceed?
```

**Failure scenario - short pick discovered** `F-MISSING-DATA`

```text
PL-0088 contains T0033 - 7.3mm Cannulated Screw and I0010 - 7.3mm KCS set (Insturment).

Were all quantities picked, or was there any short pick?
```

### W-02 - Damaged Instrument During Pick `[CHAIN]` `[CROSS-DOC]`

**User message:**

```text
time pick Sunway Ipoh DN-0402, cannulated drill bit 3.0mm rosak. cannot send. update and inform Lisa.
```

**Happy path:**

1. Resolve DN-0402 and Sunway Ipoh.
2. Identify 246180 - Cannulated Drill Bit Diameter 3.0mm.
3. Flag damaged item.
4. Notify Lisa Khor.
5. Hold DN or request replacement confirmation.

**Example chatbot reply:**

```text
I found DN-0402 for SUNWAY MEDICAL CENTRE IPOH S/B.

I will flag 246180 - Cannulated Drill Bit Diameter 3.0mm as damaged and notify Lisa Khor. Do you want me to hold the DN until a replacement is confirmed?
```

**Failure scenario - DN already dispatched** `F-BLOCKED`

```text
DN-0402 is already dispatched.

I cannot change the picked item now. I can notify Lisa Khor and the driver immediately, then create a follow-up ToDo for replacement handling. Proceed?
```

## 5. Mixed Messages And Pause/Resume

### M-01 - Multiple Customer Updates In One Message `[BULK]` `[CHAIN]` `[AMBIGUOUS]`

**User message:**

```text
Quick one: Adventist approved QT-1061, make SO. Sunway Ipoh still pending, remind Lisa tomorrow. Zentava confirm but COD, don't release until payment screenshot.
```

**Happy path:**

1. Convert QT-1061 for Adventist to SO.
2. Create reminder for Lisa Khor to follow up Sunway Ipoh tomorrow.
3. Put Zentava confirmed SO on payment hold.

**Example chatbot reply:**

```text
I found 3 actions:
1. Convert QT-1061 for ADVENTIST HOSPITAL & CLINIC SERVICES (M) to Sales Order.
2. Create a reminder for Lisa Khor to follow up SUNWAY MEDICAL CENTRE IPOH S/B tomorrow.
3. Put the confirmed ZENTAVA SUPPLY SDN BHD order on payment hold until a payment screenshot is received.

Should I proceed with all 3?
```

**Failure scenario - paused task then unrelated message** `F-AMBIGUOUS`

If the bot is waiting for which Zentava SO to hold and the user sends `also check Sunway Damansara payment`, the bot should reply:

```text
There is a pending task: choose which Zentava Sales Order should be placed on payment hold.

Do you want to continue that task or cancel it first?
```

### M-02 - Natural Status Check Across Documents `[CROSS-DOC]` `[AMBIGUOUS]`

**User message:**

```text
Where are we for Adventist 7.3 KCS case ah? Quote approved already or still waiting? Need tell warehouse whether to prep I0010.
```

**Happy path:**

1. Search Adventist cases involving T0033 - 7.3mm Cannulated Screw.
2. Include operational bundle I0010 - 7.3mm KCS set (Insturment) in recommendation.
3. Summarize QT/SO/DN status.

**Example chatbot reply:**

```text
I found the Adventist 7.3mm KCS case: QT-1068 is submitted but not yet approved. No Sales Order or Delivery Note exists yet.

Warehouse should not prepare I0010 unless you want to reserve the set manually.
```

**Failure scenario - multiple matching cases** `F-AMBIGUOUS`

```text
I found 2 Adventist 7.3mm KCS cases:
1. QT-1068 - Dr Tan - operation 16 May - pending approval
2. SO-0310 - Dr Lim - operation 17 May - DN not created

Which case are you checking?
```

## Coverage Notes

| Source Pattern | Ultimax Coverage |
|---|---|
| Convert QT to SO and generate downstream docs | S-03, F-01 |
| Bulk or multi-action messages | L-03, F-03, M-01 |
| Amend submitted commercial documents | S-05 |
| Same customer/name ambiguity | S-02, M-02 |
| C.O.D. or release blockers | S-04, F-03 |
| DN operational bundle handling | L-01, W-01 |
| RN bundle explosion and return checks | L-04, L-05 |
| Payment proof via image | F-02 |
| Mixed ID range parsing | L-03 |
| Pause/resume contract | M-01 |
| Slang and natural Malaysian phrasing | L-03, W-02, M-02 |

## See Also

- [[Company Context - Ultimax Supply Sdn Bhd]]
- [[Workflow]]
- [[MAIA Chatbot — Compound Multistep Query Examples]]
- [[Sales Agent Persona]]

---
owner: Gareth
status: draft
last_reviewed: 2026-06-14
client: Fixguru
uat_round: 2
scope: Chatbot + AutoCount sync in setup sandbox
source_refs:
  - "[[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-14 Fixguru UAT On-site - Transcript]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-15 Fixguru UAT Action Items]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru Retesting Feedback]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru 2nd UAT Backward Plan]]"
---

# MAIA User Acceptance Test (UAT) - Fixguru
## Round 2 - Chatbot + AutoCount Sync

---

## Before You Start

**UAT Scope:** Chatbot flows + AutoCount sync in setup sandbox only  
**Environment:** setup sandbox only  
**Production Rule:** Do not push test documents to Fixguru production or production AutoCount.

### UAT Flow

| Phase | Who | What happens |
| --- | --- | --- |
| 1. Gareth run-through | Gareth | Run each test case first, record pass/fail/issues, and confirm sandbox data is ready. |
| 2. Dev fix / clarification | MAIA team | Fix or clarify issues found during Gareth's run-through. |
| 3. Fixguru retest | Fixguru team | Retest the same test cases using Gareth's run-through notes. |
| 4. Sign-off / punch list | Gareth + Fixguru | Confirm pass items, open issues, deferred items, and next owner. |

**Scope note:** This round is not a full FE role-permission UAT. Fixguru will mainly test chatbot behavior and AutoCount sync behavior. Gareth may still use the MAIA web app to verify records created by chatbot or synced from AutoCount.

**Chatbot:** Fixguru test chatbot channel to be confirmed before UAT  
**Web App:** setup sandbox, verification only  
**AutoCount Sync:** Use the same setup sandbox integration only

## Your Login / Access Details

| System | Access | Notes |
| --- | --- | --- |
| Setup sandbox | Gareth / MAIA team / Fixguru if available | Used to verify chatbot-created documents, AutoCount sync records, customer, item, SO, invoice, stock, credit, and branch data. |
| Fixguru test chatbot | Fixguru testers + Gareth | Main UAT channel for this round. |

---

## How to Use This Document

1. Gareth runs each test first.
2. For each test, fill **Result**, **issue notes**, **tested by**, and **date**.
3. If the test fails, record the exact chatbot wording, document ID, customer, item, AutoCount reference, and expected behavior.
4. After fixes or clarification, Fixguru repeats the same test case.
5. Mark final status only after Fixguru confirms the behavior in sandbox.

**Result options:**
- **Pass** - Worked as expected
- **Fail** - Did not work as expected
- **Issue** - Could not complete or needs clarification
- **Deferred** - Valid item, but not ready / out of current UAT scope

**Reporting issues:** Record the issue directly in this form. If the issue is visual or hard to explain, attach a Jam recording or screenshot.

---

## Setup Checklist *(For MAIA team / Gareth before Fixguru retest)*

| ID | Check | Expected | Result | Notes |
| --- | --- | --- | --- | --- |
| SETUP-01 | setup sandbox accessible | Gareth can inspect chatbot-created documents. |  |  |
| SETUP-02 | AutoCount sync connected in setup sandbox | Test sync does not touch production AutoCount. |  |  |
| SETUP-03 | Cutoff / snapshot policy confirmed | Pre-cutoff docs do not sync unless explicitly included. |  |  |
| SETUP-04 | Test customers seeded | Includes HQ customer, branch customer, and customer with credit exposure data. |  |  |
| SETUP-05 | Test items seeded | Includes external SKU, brand, stock, UOM, shelf attribute, minimum price, FOC item, and delivery SKU. |  |  |
| SETUP-06 | Historical pricing records seeded | Customer x item history exists across quotation / SO / invoice where needed. |  |  |
| SETUP-07 | AutoCount external IDs mapped | MAIA and chatbot can show AutoCount-facing IDs instead of internal IDs. |  |  |

---

## Retest Coverage From Previous UAT

| Previous issue / action | Retest case |
| --- | --- |
| Historical price, last discount %, net price, and current list price must show for customer x item. | Test 1.3, Test 1.4 |
| Chatbot confused customer name and item name in historical pricing lookup. | Test 1.3 |
| Item-level discount was missing or calculated incorrectly. | Test 1.4 |
| QTN and SO should stay draft until final confirmation, then sync / advance when submitted. | Test 1.1, Test 2.3 |
| Fixguru wants AutoCount-style pro-forma flow from SO draft / AutoCount PDF. | Test 2.3, Test 2.4 |
| Chatbot item display should use AutoCount external SKU and brand, not MAIA internal ID. | Test 1.1, Test 2.3 |
| FOC item with zero price was blocked unless free-item flag is set. | Test 1.6 |
| MAIA FOC format is separate lines, not AutoCount child lines. | Test 1.6, Test 2.3 |
| Delivery method should be added as SKU item line. | Test 1.10 |
| Credit exposure requires AutoCount outstanding invoices + unbilled SO amount. | Test 1.11, Test 2.7 |
| AutoCount external ID mapping must be stored back in MAIA after submitted doctype sync. | Test 2.3 |

---

## Tests

---

### E2E Workflow Index (Use This Sequence During Session)

#### 1. Quotation / Sales Order Creation And Pricing
- `1.1 Create Quotation / Sales Order via Chatbot [Chatbot + setup sandbox]`
- `1.2.1 RSC Calculator Full Flow [Web App + setup sandbox]`
- `1.2.2 Diecut Calculator Full Flow [Web App + setup sandbox]`
- `1.3 Historical Pricing For Correct Customer x Item [Chatbot]`
- `1.4 Apply Historical Price Or Discount To Draft Line [Chatbot + setup sandbox]`
- `1.5 Minimum Price Guardrail [Chatbot]`
- `1.6 FOC Item Through Chatbot [Chatbot + setup sandbox]`
- `1.10 Delivery Method As SKU Line Item [Chatbot + setup sandbox]`
- `1.11 Credit Exposure From AutoCount Snapshot [Chatbot + setup sandbox]`
- `1.13 Language Preference And Ambiguity Handling [Chatbot]`

#### 2. Sales Order / Proforma / AutoCount Sync
- `2.2 Credit Limit Block on SO Submission [Chatbot + setup sandbox]`
- `2.3 Submitted Doctype Sync: QTN, SO/PI, SI, DN, CN, Item, Customer 2-Way Sync [setup sandbox]`
- `2.4 PDF Handoff: QTN, SO/PI, SI, DN, CN, Payment Receipt [setup sandbox]`
- `2.7 Credit Limit / Exposure Sync [Chatbot + setup sandbox]`

#### 3. Delivery
- `3.1 Create Delivery Order and Mark as Delivered [Chatbot + setup sandbox]`
- `3.3 Delivery Delay Reminder [Chatbot + setup sandbox]`
- `3.4 Stock Alerts - Out of Stock and Low Stock [Chatbot + setup sandbox]`

#### 4. Invoice And Payment
- `4.1 Create / Submit Invoice and Generate PDF [Chatbot + setup sandbox]`
- `4.3 Create Payment Receipt / Record Payment [Chatbot + setup sandbox]`

#### 5. Post-Invoice Adjustment
- `5.1 Create Credit Note and Debit Note [Chatbot + setup sandbox]`

#### 6. Access And Role Permission Checks
- `6.2 Sales Access Check [setup sandbox]`
- `6.3 Warehousing Access Check [setup sandbox]`
- `6.4 Finance Manager Access Check [setup sandbox]`
- `6.5 Finance Assistant Access Check [setup sandbox]`
- `6.6 Admin Access Check [setup sandbox]`
- `6.7 Role Approval Flow [setup sandbox]`

---

### 1. Quotation / Sales Order Creation And Pricing

*Who tests this section: Gareth first, then Fixguru testers.*

---

#### Test 1.1 - Create Quotation / Sales Order via Chatbot

*This test confirms chatbot can create both Quotation and Sales Order drafts, use customer/item names or external SKUs, and display Fixguru-facing item identity.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Send: "Create a quotation for [Customer]. Add 10 units of [AutoCount SKU or item name]. Keep it as draft." | Chatbot confirms customer, item, quantity, UOM, price, and draft intent. |
| 2 | Ask chatbot for the created quotation reference. | Chatbot returns QTN draft reference and current status. |
| 3 | Send: "Create a sales order for [Customer]. Add 10 units of [AutoCount SKU or item name]. Keep it as draft." | Chatbot confirms the SO details and keeps the SO in Draft. |
| 4 | Ask chatbot for the created SO reference. | Chatbot returns SO draft reference and current status. |
| 5 | Gareth verifies both documents in setup sandbox. | QTN and SO exist in Draft. Item code shown to user is AutoCount external SKU, not MAIA internal ID. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

##### Test 1.2.1 - RSC Calculator Full Flow

*This brings back the previous RSC calculator UAT case. Use setup sandbox only.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Open a draft Quotation or Sales Order in setup sandbox and open the custom box calculator. | Calculator modal opens. |
| 2 | Select RSC and enter valid dimensions, board quality, quantity, printing/transport settings if needed. | Calculator accepts inputs and produces pricing. |
| 3 | Add the calculated SKU/item to the draft document. | Item line is added with calculated price and expected SKU/model details. |
| 4 | Save the draft document. | Draft retains calculated item, price, qty, and any calculator details required for sync/PDF. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

##### Test 1.2.2 - Diecut Calculator Full Flow

*This brings back the previous Diecut calculator UAT case. Use setup sandbox only.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Open a draft Quotation or Sales Order in setup sandbox and open the custom box calculator. | Calculator modal opens. |
| 2 | Select Diecut and enter valid dimensions, board quality, quantity, printing/transport settings if needed. | Calculator accepts inputs and produces pricing. |
| 3 | Add the calculated SKU/item to the draft document. | Item line is added with calculated price and expected SKU/model details. |
| 4 | Save the draft document. | Draft retains calculated item, price, qty, and any calculator details required for sync/PDF. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.3 - Historical Pricing For Correct Customer x Item

*This confirms chatbot retrieves historical price for the exact customer x item pair and does not confuse customer name with item name.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask: "For [Customer], what was the last price and discount for [Item/SKU]?" | Chatbot identifies the customer and item correctly. |
| 2 | Ask: "Show recent history for the same customer and item." | Chatbot shows source doc, qty, unit price, discount %, net price, date, and current list price. |
| 3 | Gareth cross-checks one result in setup sandbox. | Chatbot result matches the historical record. |
| 4 | Ask a similar prompt with customer/item order reversed. | Chatbot still maps customer and item correctly, or asks clarification if ambiguous. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.4 - Apply Historical Price Or Discount To Draft Line

*This retests item-level discount behavior and the historical pricing decision flow.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Create or use a QTN/SO draft with at least two items. | Draft has multiple lines. |
| 2 | Ask: "Use the last transaction discount for this item on the current QTN/SO." | Chatbot asks which line/item if ambiguous and confirms exact line before applying. |
| 3 | Gareth verifies calculation. | Discount % and net unit price are mathematically correct vs current list price. |
| 4 | Ask chatbot for updated document summary. | Summary shows chosen price/discount on the correct line only. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.5 - Minimum Price Guardrail

*This confirms chatbot blocks or warns when a user applies a price below item minimum price.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Use an item with configured minimum price. | Test item minimum price is known. |
| 2 | Ask chatbot to set the item price below minimum. | Chatbot flags the issue before finalizing. |
| 3 | Confirm what happens after warning. | Behavior matches configured approval/blocking policy. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.6 - FOC Item Through Chatbot

*This retests zero-price FOC handling from previous feedback.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Send: "Add 100 units of [Item/SKU] and 10 FOC units to this SO." | Chatbot confirms sold qty and FOC qty separately. |
| 2 | Ask chatbot to create/update the draft. | setup sandbox stores FOC as separate line or agreed MAIA format. |
| 3 | Try final confirmation/submission in sandbox flow. | Zero-price FOC line is not blocked if `is_free_item` is set. |
| 4 | Verify setup sandbox sync if available. | setup sandbox receives correct FOC representation or known mapped format. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.10 - Delivery Method As SKU Line Item

*This confirms chatbot can add transport/delivery charge as an item line for e-invoice claiming.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask: "Add 3PL Lalamove delivery charge as an item line." | Chatbot finds the delivery SKU/item. |
| 2 | Confirm adding to draft. | Delivery charge appears as item line in setup sandbox. |
| 3 | Confirm sync payload if available. | setup sandbox receives delivery charge as item line. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.11 - Credit Exposure From AutoCount Snapshot

*This confirms chatbot can show credit limit, exposure, and available balance using AutoCount-backed data.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask chatbot for a customer's credit standing. | Chatbot returns credit limit, current exposure, and available balance. |
| 2 | Ask to create SO that stays within limit. | Chatbot allows draft and shows remaining balance. |
| 3 | Ask to create SO that exceeds limit. | Chatbot warns/blocks according to configured policy. |
| 4 | Gareth cross-checks with setup sandbox snapshot/source data. | Figures match seeded sandbox credit data. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

#### Test 1.13 - Language Preference And Ambiguity Handling

*This confirms chatbot uses the user's response language preference and asks clarification when intent is unclear.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask chatbot to set reply language preference to English or Malay. | Chatbot confirms the preference. |
| 2 | Send a normal order prompt. | Chatbot replies in the preferred supported language. |
| 3 | Send an ambiguous prompt with unclear customer/item. | Chatbot asks clarification before creating any document. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

### 2. Sales Order / Proforma / AutoCount Sync

*Who tests this section: Gareth first, then Fixguru testers if they have sandbox access.*

---

#### Test 2.2 - Credit Limit Block on SO Submission

*This brings back the previous SO credit-limit block test and connects it with chatbot credit exposure.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Use a customer with known credit limit / exposure in setup sandbox. | Credit data is available before testing. |
| 2 | Ask chatbot to create an SO that would exceed the available credit balance. | Chatbot warns/blocks according to configured policy. |
| 3 | If an SO draft is created, try to submit it. | Submission is blocked or routed according to credit policy. |
| 4 | Record message shown to user. | Message is understandable and explains credit limit/exposure reason. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.3 - Submitted Doctype Sync: QTN, SO/PI, SI, DN, CN, Item, Customer 2-Way Sync

*This is the main submitted-doctype sync test for setup sandbox. Test only submitted/confirmed records, not draft-only records.*

| Doctype | What to test | What you should see |
| --- | --- | --- |
| QTN | Submit/confirm a quotation created from chatbot or setup sandbox. | Submitted QTN is synced / represented correctly in setup sandbox integration. |
| SO / PI | Submit/confirm SO and check proforma path. | SO/PI keeps correct customer, branch, item lines, discounts, FOC, delivery SKU, and external doc ID. |
| SI | Submit invoice from the flow. | SI sync has correct customer, items, totals, tax, and external reference. |
| DN | Submit delivery note. | DN sync has correct customer, item, qty, warehouse/delivery data where applicable. |
| CN | Submit credit note linked to invoice. | CN sync keeps correct original invoice reference and credited amount/items. |
| Item | Create/update item and sync both ways where supported. | Item external SKU/code mapping is correct and chatbot shows AutoCount-facing code. |
| Customer | Create/update customer and sync both ways where supported. | Customer external ID, branch/contact, and address mapping remain correct. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.4 - PDF Handoff: QTN, SO/PI, SI, DN, CN, Payment Receipt

*This checks that the generated / handed-off PDF for each business document is usable for Fixguru's workflow.*

| Document | What to test | What you should see |
| --- | --- | --- |
| QTN | Generate/check quotation PDF handoff. | Customer, item code, item name, qty, price, discount, and totals match the document. |
| SO / PI | Generate/check SO or proforma PDF handoff. | Format/data is usable as Fixguru proforma; customer, branch, items, discounts, FOC, delivery SKU match. |
| SI | Generate/check sales invoice PDF handoff. | Invoice PDF matches submitted SI and sync data. |
| DN | Generate/check delivery note PDF handoff. | DN PDF has correct customer, delivery details, item qty, and any scoped warehouse/shelf details. |
| CN | Generate/check credit note PDF handoff. | CN PDF references original invoice and shows credited amount/items correctly. |
| Payment Receipt | Generate/check payment receipt PDF handoff. | Receipt PDF matches payment amount, customer, invoice reference, and receipt date. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.7 - Credit Limit Snapshot / Exposure Sync

*This confirms credit exposure uses setup sandbox credit limit and open invoice data.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Confirm setup sandbox customer credit limit and outstanding invoice amount. | Source values are recorded. |
| 2 | Trigger/import credit snapshot to setup sandbox. | MAIA stores credit limit and open exposure. |
| 3 | Ask chatbot for customer's credit standing. | Chatbot matches setup sandbox credit data. |
| 4 | Ask chatbot to create SO that exceeds available balance. | Chatbot warns/blocks according to configured rule. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

### 3. Delivery

*Who tests this section: Gareth first, then Fixguru testers.*

---

#### Test 3.1 - Create Delivery Order and Mark as Delivered

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Continue from a submitted SO with deliverable items. | SO is available for delivery flow. |
| 2 | Create Delivery Note / Delivery Order in setup sandbox. | DN is created with correct customer, branch/address, item, qty, and delivery details. |
| 3 | Submit or mark delivered according to current flow. | Delivery status updates correctly and is visible in setup sandbox. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 3.3 - Delivery Delay Reminder

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Use an order/delivery that meets the delay reminder condition. | Test data is eligible for reminder. |
| 2 | Ask chatbot or check reminder trigger. | Reminder appears or chatbot explains delayed delivery status. |
| 3 | Confirm reminder content. | Reminder references correct customer, document, delivery date/status, and next action. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 3.4 - Stock Alerts - Out of Stock and Low Stock

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask chatbot to add an out-of-stock item to QTN/SO. | Chatbot warns that item is out of stock. |
| 2 | Ask chatbot to add a low-stock item to QTN/SO. | Chatbot warns that stock is low and shows available qty where supported. |
| 3 | Cross-check stock in setup sandbox. | Chatbot stock warning matches setup sandbox stock data. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

### 4. Invoice And Payment

*Who tests this section: Gareth first, then Fixguru testers.*

---

#### Test 4.1 - Create / Submit Invoice and Generate PDF

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Continue from a submitted SO / delivered order where invoice creation is allowed. | Source document is ready for invoice creation. |
| 2 | Ask chatbot to create an invoice, or create the invoice in setup sandbox if chatbot does not support that step yet. | Invoice is created with the correct customer, branch/address, item lines, qty, price, discount, FOC handling, delivery SKU, and totals. |
| 3 | Submit the invoice according to current role/approval flow. | Invoice status becomes submitted and any AutoCount sync reference is stored where supported. |
| 4 | Generate/check invoice PDF handoff. | Invoice PDF matches submitted invoice data and uses customer-facing item codes/details. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 4.3 - Create Payment Receipt / Record Payment

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Continue from a submitted invoice with outstanding amount. | Invoice is available for payment / receipt. |
| 2 | Ask chatbot to record payment, or create the payment receipt in setup sandbox if chatbot does not support that step yet. | Payment receipt is created with correct customer, invoice reference, amount, payment date, and payment method where required. |
| 3 | Submit/save the receipt according to current flow. | Invoice outstanding amount updates correctly and receipt status/reference is visible. |
| 4 | Generate/check payment receipt PDF handoff. | Receipt PDF matches payment amount, customer, invoice reference, and receipt date. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

### 5. Post-Invoice Adjustment

*Who tests this section: Gareth first, then Fixguru testers.*

---

#### Test 5.1 - Create Credit Note and Debit Note

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Continue from a submitted invoice that can be adjusted. | Invoice is available as the source document for adjustment. |
| 2 | Ask chatbot to create a Credit Note for the invoice, or create it in setup sandbox if chatbot does not support that step yet. | Credit Note is created with correct customer, original invoice reference, credited item/amount, reason, and totals. |
| 3 | Submit the Credit Note according to current role/approval flow. | Credit Note status becomes submitted and sync/PDF references are available where supported. |
| 4 | Ask chatbot to create a Debit Note for the invoice/customer, or create it in setup sandbox if chatbot does not support that step yet. | Debit Note is created with correct customer, reference, debit item/amount, reason, and totals. |
| 5 | Submit the Debit Note according to current role/approval flow. | Debit Note status becomes submitted and sync/PDF references are available where supported. |
| 6 | Check invoice/customer balance impact. | Credit/debit adjustments affect the related invoice/customer balance correctly. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

### 6. Access And Role Permission Checks

*These are selected from the earlier UAT form. Run only the role checks below.*

---

#### Test 6.2 - Sales Access Check

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Log in / act as Sales User in setup sandbox. | Sales user can access sales workflows needed for QTN/SO creation. |
| 2 | Try to create/edit QTN or SO draft. | User can create/edit draft where permitted. |
| 3 | Try a restricted submit/management action if applicable. | Restricted action is blocked or unavailable. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 6.3 - Warehousing Access Check

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Log in / act as Warehousing user in setup sandbox. | User can access delivery / warehouse workflows assigned to warehousing. |
| 2 | Try to create or process delivery-related records. | Permitted delivery actions are available. |
| 3 | Try a restricted finance/admin action. | Restricted action is blocked or unavailable. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 6.4 - Finance Manager Access Check

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Log in / act as Finance Manager in setup sandbox. | User can access invoice, receipt/payment, credit note, and finance workflows. |
| 2 | Try to submit finance documents where permitted. | Submit action is available for finance manager scope. |
| 3 | Check restricted sales/warehouse/admin-only actions. | Restricted actions are blocked or unavailable. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 6.5 - Finance Assistant Access Check

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Log in / act as Finance Assistant in setup sandbox. | User can access assigned finance records. |
| 2 | Try to create/edit finance records where permitted. | Permitted create/edit actions work. |
| 3 | Try to submit a restricted finance document if applicable. | Restricted submit action is blocked or unavailable. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 6.6 - Admin Access Check

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Log in / act as Admin in setup sandbox. | Admin can access required sales, delivery, finance, and configuration workflows for UAT. |
| 2 | Try to submit documents that Admin should own in Fixguru flow. | Submit actions are available where expected. |
| 3 | Confirm no unexpected restriction blocks the UAT flow. | Admin can complete the expected end-to-end workflow. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 6.7 - Role Approval Flow

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Trigger a workflow that requires role-based approval or higher-role action. | System routes/blocks according to role permission rules. |
| 2 | Approver/Admin completes the action where configured. | Approval or override is recorded and document proceeds. |
| 3 | Check audit/status trail. | Status, owner/action, and document state are clear. |

**Result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

## Results Summary

| Test ID | What was tested | Mode | Result | Final status | Blocker owner | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| SETUP-01 to SETUP-07 | Sandbox readiness | setup sandbox |  |  |  |  |
| 1.1 | Create QTN/SO by chatbot / external SKU | Chatbot |  |  |  |  |
| 1.2.1 | RSC calculator full flow | Web App |  |  |  |  |
| 1.2.2 | Diecut calculator full flow | Web App |  |  |  |  |
| 1.3 | Historical pricing lookup | Chatbot |  |  |  |  |
| 1.4 | Apply historical price / discount | Chatbot |  |  |  |  |
| 1.5 | Minimum price guardrail | Chatbot |  |  |  |  |
| 1.6 | FOC item | Chatbot + setup sandbox |  |  |  |  |
| 1.10 | Delivery method as SKU | Chatbot + setup sandbox |  |  |  |  |
| 1.11 | Credit exposure chatbot | Chatbot + setup sandbox |  |  |  |  |
| 1.13 | Language / ambiguity | Chatbot |  |  |  |  |
| 2.2 | Credit limit block on SO submission | Chatbot + setup sandbox |  |  |  |  |
| 2.3 | Submitted doctype sync: QTN, SO/PI, SI, DN, CN, Item, Customer 2-way | setup sandbox |  |  |  |  |
| 2.4 | PDF handoff: QTN, SO/PI, SI, DN, CN, Payment Receipt | setup sandbox |  |  |  |  |
| 2.7 | Credit limit / exposure sync | Chatbot + setup sandbox |  |  |  |  |
| 3.1 | Create Delivery Order and mark delivered | Chatbot + setup sandbox |  |  |  |  |
| 3.3 | Delivery delay reminder | Chatbot + setup sandbox |  |  |  |  |
| 3.4 | Stock alerts - out of stock / low stock | Chatbot + setup sandbox |  |  |  |  |
| 4.1 | Create / submit invoice and generate PDF | Chatbot + setup sandbox |  |  |  |  |
| 4.3 | Create payment receipt / record payment | Chatbot + setup sandbox |  |  |  |  |
| 5.1 | Create Credit Note and Debit Note | Chatbot + setup sandbox |  |  |  |  |
| 6.2 | Sales access check | setup sandbox |  |  |  |  |
| 6.3 | Warehousing access check | setup sandbox |  |  |  |  |
| 6.4 | Finance Manager access check | setup sandbox |  |  |  |  |
| 6.5 | Finance Assistant access check | setup sandbox |  |  |  |  |
| 6.6 | Admin access check | setup sandbox |  |  |  |  |
| 6.7 | Role approval flow | setup sandbox |  |  |  |  |

| Pass | Fail | Issue | Deferred |
| --- | --- | --- | --- |
|  |  |  |  |

---

## Issue Log

| Issue ID | Test ID | Found by | Environment | Document / customer / item | What happened | Expected behavior | Owner | Status | Retest notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Gareth / Fixguru | setup sandbox |  |  |  |  |  |  |

---

## Overall Feedback

**What worked well:**


**Main issues found:**


**Items to defer / confirm later:**


---

## Sign-Off

By signing below, the Fixguru team confirms that the chatbot + setup sandbox UAT has been completed and the results above are accurate.

| Name | Role | Signature / Status | Date | Notes |
| --- | --- | --- | --- | --- |
| Gareth | PM run-through owner |  |  |  |
| Fixguru representative | Client tester |  |  |  |
| MAIA dev/support | Issue owner acknowledgement |  |  |  |

**Overall outcome:**
- [ ] Approved - Ready to proceed
- [ ] Conditional - Proceed with the following items to fix first
- [ ] Not approved - Further fixes required before sign-off

**Conditions / punch list:**


---

## See Also

- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru Retesting Feedback]]
- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru 2nd UAT Backward Plan]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-15 Fixguru UAT Action Items]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-14 Fixguru UAT On-site - Transcript]]

# 1. Executive Summary

The meeting aligned on the initial implementation scope for MAIA at SJY Sports Asia. The main priority is to streamline the B2B order and invoicing process, especially reducing manual work around sales order creation, invoice generation, packing coordination, and SQL syncing.

For Phase 1, MAIA will not attempt full real-time inventory integration with Site Giant. Instead, SJY will provide a daily inventory export from Site Giant through Google Sheets. MAIA will use this as a stock visibility reference, while accepting that B2C stock movements during the day may cause differences.

The agreed operational direction is to keep the process simple. MAIA will assist with order extraction, sales order creation, draft invoice generation, final invoice submission, delivery order creation, credit note handling, and payment status updates. However, key confirmation points will still require human review.

A major decision was that MAIA should not block order creation even when stock appears unavailable. Stock visibility should act as a suggestion, not a hard restriction, because SJY may still fulfill items from other stock sources or handle pre-orders separately.

***

# 2. Key Discussion Points

## 2.1 MAIA Accuracy and Human Confirmation

MAIA will extract order details from natural language messages and help create documents such as sales orders, invoices, pick/pack lists, and delivery orders.

It was clarified that MAIA will not blindly execute critical actions. Before creating or submitting key documents, MAIA should request user confirmation. This keeps a human in the loop and reduces the risk of incorrect document creation.

**Decision / Direction:**

MAIA should support automation, but final document creation and submission should still go through user confirmation.

**Action Points**

**Mindhive**

* &#x20;Ensure MAIA prompts users for confirmation before performing key actions such as creating orders, creating invoices, or submitting final documents.&#x20;

* &#x20;Configure the flow so users can review extracted order details before proceeding.&#x20;

**SJY Sports Asia**

* &#x20;Test MAIA’s extraction accuracy using real order messages.&#x20;

* &#x20;Provide feedback on cases where item names, SKU interpretation, or quantities are not extracted correctly.&#x20;

***

## 2.2 Inventory Source and Daily Stock Upload

SJY clarified that inventory is currently maintained in Site Giant, while SQL is mainly used for invoicing and sales order records. SQL does not hold the full live inventory picture across all selling platforms.

SJY already pulls daily inventory from Site Giant into Google Sheets. The team discussed using this file as the stock source for MAIA.

**Decision / Direction:**

For Phase 1, SJY will upload or provide the daily inventory Google Sheet to MAIA. MAIA will use this as the starting stock reference for the day.

This will not be real-time. Any B2C orders or platform movements after the daily upload may not be reflected immediately.

**Action Points**

**Mindhive**

* &#x20;Support daily inventory ingestion from SJY’s Google Sheet.&#x20;

* &#x20;Configure MAIA to read item availability, low-stock, and out-of-stock status from the uploaded data.&#x20;

* &#x20;Treat inventory data as reference only, not as a blocking rule.&#x20;

**SJY Sports Asia**

* &#x20;Provide the current Google Sheet inventory format exported from Site Giant.&#x20;

* &#x20;Confirm the required columns for MAIA to read, such as SKU, item name, warehouse, stock quantity, stock status, and category.&#x20;

* &#x20;Continue preparing the inventory export daily, ideally in the morning.&#x20;

***

## 2.3 Stock Accuracy Limitation

The team acknowledged that stock shown in MAIA may not fully match live Site Giant stock during the day because B2C channels may continue selling the same items.

SJY accepted this limitation for Phase 1 because the daily stock snapshot is still useful for quick reference.

**Decision / Direction:**

MAIA should provide stock visibility based on the latest uploaded inventory snapshot and any B2B orders processed through MAIA, but it should not be treated as the absolute live inventory source.

**Action Points**

**Mindhive**

* &#x20;Clearly design MAIA’s stock display as “latest uploaded stock” or equivalent wording.&#x20;

* &#x20;Avoid implementing a hard stock-blocking mechanism in Phase 1.&#x20;

**SJY Sports Asia**

* &#x20;Internally align that MAIA’s stock view is not fully real-time for Phase 1.&#x20;

* &#x20;Continue using operational judgment when confirming large or urgent orders.&#x20;

***

## 2.4 B2B and B2C Warehouse Handling

SJY explained that B2B and B2C stock are separated by warehouse in Site Giant. Different channels may pull from different warehouse locations, such as the SJY warehouse and the pickleball-related warehouse.

For the initial scope, SJY preferred to focus on one main warehouse first instead of handling the full multi-warehouse setup.

**Decision / Direction:**

Phase 1 should focus on the main B2B warehouse flow first. More advanced warehouse handling can be reviewed later.

**Action Points**

**Mindhive**

* &#x20;Configure the first implementation around the agreed primary warehouse.&#x20;

* &#x20;Avoid overcomplicating Phase 1 with full multi-warehouse logic unless required.&#x20;

**SJY Sports Asia**

* &#x20;Confirm which warehouse should be treated as the primary Phase 1 warehouse.&#x20;

* &#x20;Provide sample inventory data for that warehouse.&#x20;

***

## 2.5 SQL and Site Giant Syncing

SJY clarified that invoices created in SQL can be synced to Site Giant, and Site Giant will deduct stock based on SKU and quantity. However, SJY currently prefers to keep this syncing manual to avoid premature stock deduction.

The team discussed that MAIA should sync finalized invoices to SQL, and SJY will continue handling the SQL-to-Site Giant sync process.

**Decision / Direction:**

MAIA should sync to SQL only after the invoice is finalized, not immediately at early draft or sales order stage.

**Action Points**

**Mindhive**

* &#x20;Configure MAIA so finalized invoice submission is the trigger point for syncing data to SQL.&#x20;

* &#x20;Avoid syncing incomplete draft orders to SQL as final transactions.&#x20;

**SJY Sports Asia**

* &#x20;Confirm the current SQL sync process and expected trigger point.&#x20;

* &#x20;Continue manually syncing SQL to Site Giant after order fulfillment, based on current business practice.&#x20;

***

## 2.6 Sales Order and Invoice Workflow

The team discussed several possible workflows. The final direction leaned toward a simple process:

1. &#x20;Customer sends order to SJY.&#x20;

2. &#x20;MK or SJY team forwards the order internally.&#x20;

3. &#x20;Amira picks and confirms available items.&#x20;

4. &#x20;Final available list is sent to MAIA.&#x20;

5. &#x20;MAIA creates the sales order and draft invoice.&#x20;

6. &#x20;Authorized user reviews and submits invoice.&#x20;

7. &#x20;Official invoice syncs to SQL.&#x20;

8. &#x20;Invoice PDF is generated and sent to customer.&#x20;

**Decision / Direction:**

The invoice should be generated after the available items are confirmed, to avoid repeated amendments caused by stock shortage.

**Action Points**

**Mindhive**

* &#x20;Configure MAIA to support sales order creation from the finalized picked list.&#x20;

* &#x20;Allow draft invoice review before submission.&#x20;

* &#x20;Ensure official invoice generation happens only after user confirmation.&#x20;

**SJY Sports Asia**

* &#x20;Confirm who will send finalized picked order details into MAIA.&#x20;

* &#x20;Confirm who is authorized to review and submit invoices.&#x20;

* &#x20;Provide real sample customer orders for workflow testing.&#x20;

***

## 2.7 Pick and Pack Process

The team reviewed how pick and pack can work in MAIA. MAIA can generate a pick/pack list from a sales order, and warehouse staff can either print the PDF or use the web interface.

However, SJY noted that in the current workflow, Amira may already be picking based on the message from MK before the final order is created in MAIA.

**Decision / Direction:**

For Phase 1, the workflow should remain practical. Amira can confirm the available items first, then MAIA can generate the formal sales order and invoice based on the confirmed list.

**Action Points**

**Mindhive**

* &#x20;Support pick/pack list generation where needed.&#x20;

* &#x20;Support web interface access for warehouse users to view outstanding orders or packing tasks.&#x20;

* &#x20;Consider variance handling for future enhancement.&#x20;

**SJY Sports Asia**

* &#x20;Confirm whether Amira will use MAIA’s pick/pack list actively in Phase 1, or only after the current manual picking flow.&#x20;

* &#x20;Provide sample packing scenarios, especially cases with missing stock or partial fulfillment.&#x20;

***

## 2.8 Handling Stock Variance

The meeting discussed what should happen when the quantity ordered is different from the quantity actually available or packed.

The agreed direction is that the user should be able to adjust the final order before invoice submission.

**Decision / Direction:**

Variance should be handled before final invoice submission. The invoice should reflect actual confirmed items, not the original requested quantity if stock is unavailable.

**Action Points**

**Mindhive**

* &#x20;Ensure draft documents can be amended before submission.&#x20;

* &#x20;Support workflow where unavailable items are removed or reduced before final invoice generation.&#x20;

* &#x20;Explore notification logic for variance updates.&#x20;

**SJY Sports Asia**

* &#x20;Provide real examples of orders where only partial stock was available.&#x20;

* &#x20;Confirm whether variance updates should be handled by Amira, MK, or another authorized user.&#x20;

***

## 2.9 Invoice Template Customization

SJY reviewed the invoice template and confirmed that MAIA’s template is acceptable with minor amendments.

Required additions include SJY company details, logo, address, and bank account information.

**Decision / Direction:**

Mindhive can use the MAIA invoice template and customize it with SJY’s branding and company information.

**Action Points**

**Mindhive**

* &#x20;Customize the invoice template with SJY’s company logo, address, and bank details.&#x20;

* &#x20;Ensure invoice PDF layout is suitable for customer sharing.&#x20;

**SJY Sports Asia**

* &#x20;Provide sample invoice template or current invoice reference.&#x20;

* &#x20;Provide company logo, company address, bank account details, and any required invoice footer or remarks.&#x20;

***

## 2.10 Discount Handling

SJY clarified that retail prices are generally fixed, but discounts are flexible and relationship-based. Discounts may differ by customer, order, item category, or business context.

No formal approval flow is required for discounts at this stage because MK and partners handle the sales decisions.

**Decision / Direction:**

Discounts should be manually provided in the order instruction. MAIA should parse the discount from the message and apply it to the correct items.

**Action Points**

**Mindhive**

* &#x20;Configure MAIA to recognize discount instructions in text.&#x20;

* &#x20;Support grouped discount instructions where possible, such as applying one discount rate to a batch of items.&#x20;

* &#x20;Test whether MAIA can correctly identify item groups and discount percentages.&#x20;

**SJY Sports Asia**

* &#x20;Define the preferred format for providing discounts in messages.&#x20;

* &#x20;Provide sample orders with different discount structures.&#x20;

* &#x20;Confirm whether discounts are applied by item, category, or grouped batch.&#x20;

***

## 2.11 SKU, Item Description, and Packaging Interpretation

SJY explained that most products have distinct item names and detailed descriptions, but certain products, especially balls, may have packaging differences such as loose unit or box.

Some SKUs encode packaging quantity into the SKU name, for example one SKU for loose item and another for box quantity.

**Decision / Direction:**

MAIA needs to correctly interpret SKU, item name, quantity, and packaging type. For items where packaging matters, SJY should make the naming clear enough for MAIA to distinguish loose items from box items.

**Action Points**

**Mindhive**

* &#x20;Review SJY’s SKU list and identify items with packaging variations.&#x20;

* &#x20;Configure MAIA to distinguish loose-unit and box-based SKUs where applicable.&#x20;

* &#x20;Test item matching using actual order messages.&#x20;

**SJY Sports Asia**

* &#x20;Provide the latest SKU and item master list from SQL.&#x20;

* &#x20;Identify items where packaging may cause confusion.&#x20;

* &#x20;Confirm whether only ball products have loose/box handling issues.&#x20;

***

## 2.12 WhatsApp and MAIA Chat Interface

The team discussed how users will interact with MAIA through WhatsApp. Users can chat with MAIA directly to create sales orders, invoices, pick lists, and other documents.

It was clarified that MAIA works through individual chats. Automated WhatsApp group messaging is limited because of WhatsApp policy and account-ban risk.

**Decision / Direction:**

MAIA will primarily work through direct WhatsApp interaction and web interface access. Group chat automation should not be relied on for Phase 1.

**Action Points**

**Mindhive**

* &#x20;Set up MAIA for individual WhatsApp user interactions.&#x20;

* &#x20;Clarify user access and permission structure.&#x20;

* &#x20;Avoid risky automated WhatsApp group messaging flows.&#x20;

**SJY Sports Asia**

* &#x20;Confirm the list of users who need MAIA access.&#x20;

* &#x20;Confirm whether each user will use personal chat with MAIA or mainly the web dashboard.&#x20;

* &#x20;Align internally that group chat automation may not be supported in the same way as normal manual WhatsApp usage.&#x20;

***

## 2.13 User Access and Permissions

SJY discussed access for MK, partners, Amira, and other operational users.

The key concern is that not everyone should have the same level of authority. Some users may create draft documents, while only selected users can submit final invoices.

**Decision / Direction:**

User roles and permissions need to be configured so final invoice submission is limited to authorized users.

**Action Points**

**Mindhive**

* &#x20;Define MAIA user roles for sales, operations, warehouse, and admin users.&#x20;

* &#x20;Restrict invoice submission to authorized users.&#x20;

* &#x20;Allow operational users to create or prepare draft documents where needed.&#x20;

**SJY Sports Asia**

* &#x20;Provide the list of users and their required access level.&#x20;

* &#x20;Confirm which users can create sales orders, create draft invoices, submit invoices, issue credit notes, and mark payments as paid.&#x20;

***

## 2.14 Delivery Order and Proof of Delivery

SJY currently does not have a strict delivery order sign-off process, but the team agreed it would be useful, especially for larger orders or future disputes.

The delivery order can be generated after the invoice is finalized. The customer can sign the DO, and the signed copy or photo can be uploaded back into MAIA as proof.

**Decision / Direction:**

SJY should start using delivery orders as proof of delivery where practical.

**Action Points**

**Mindhive**

* &#x20;Support delivery order generation from confirmed order/invoice data.&#x20;

* &#x20;Allow users to upload signed DO photos or delivery proof into MAIA.&#x20;

* &#x20;Link proof of delivery back to the relevant sales order or invoice.&#x20;

**SJY Sports Asia**

* &#x20;Confirm who will generate and print the DO.&#x20;

* &#x20;Confirm who will upload the signed DO or proof of delivery.&#x20;

* &#x20;Start practicing DO sign-off for relevant deliveries.&#x20;

***

## 2.15 Credit Note Handling

SJY confirmed that credit notes are needed, especially for returns, damaged goods, or cases where a customer does not want an exchange but requires a credit adjustment.

Credit notes should be linked to the original invoice and synced back to SQL.

**Decision / Direction:**

MAIA should support credit note creation and syncing to SQL.

**Action Points**

**Mindhive**

* &#x20;Set up credit note functionality in MAIA.&#x20;

* &#x20;Ensure credit notes can reference original invoices and selected returned items.&#x20;

* &#x20;Ensure credit note records can sync back to SQL.&#x20;

**SJY Sports Asia**

* &#x20;Provide sample credit note cases.&#x20;

* &#x20;Confirm how credit notes are currently created in SQL.&#x20;

* &#x20;Confirm whether any approval is required for credit notes. Current direction: no approval required.&#x20;

***

## 2.16 Payment Status and Statement of Account

SJY discussed the need to track whether invoices have been paid and to view outstanding balances by customer.

The current process involves checking bank records manually, then marking payment status. The direction is to allow users to mark invoices as paid in MAIA, and MAIA will update SQL accordingly.

Statement of Account functionality was also discussed as a useful future capability.

**Decision / Direction:**

For Phase 1, payment reconciliation remains manual. After payment is confirmed manually, users can mark the invoice as paid in MAIA, and MAIA should sync the paid status to SQL.

**Action Points**

**Mindhive**

* &#x20;Support manual payment status updates in MAIA.&#x20;

* &#x20;Sync paid/unpaid status from MAIA to SQL.&#x20;

* &#x20;Explore customer outstanding balance / SOA query functionality.&#x20;

**SJY Sports Asia**

* &#x20;Confirm the current payment marking process in SQL.&#x20;

* &#x20;Confirm who is responsible for marking invoices as paid.&#x20;

* &#x20;Provide examples of how SJY wants to ask MAIA for outstanding balances, such as “Does Customer X owe us anything?”&#x20;

***

## 2.17 Dedicated Phone Number for MAIA

The team discussed the requirement for a dedicated WhatsApp phone number for MAIA.

This number should be used only for MAIA chatbot operations and should not be used as a normal personal or staff WhatsApp number.

**Decision / Direction:**

SJY needs to provide or prepare a dedicated number for MAIA.

**Action Points**

**Mindhive**

* &#x20;Guide SJY on the requirements for the dedicated MAIA WhatsApp number.&#x20;

* &#x20;Set up the number for MAIA chatbot use once provided.&#x20;

**SJY Sports Asia**

* &#x20;Prepare a dedicated phone number for MAIA.&#x20;

* &#x20;Ensure the number is active and able to receive setup verification.&#x20;

* &#x20;Do not use the number for normal WhatsApp messaging once configured for MAIA.&#x20;

***

# 3. Consolidated Action Items by Party

## Mindhive Action Items

1. &#x20;Configure MAIA to create sales orders, draft invoices, final invoices, delivery orders, and credit notes.&#x20;

2. &#x20;Ensure MAIA asks for user confirmation before key document actions.&#x20;

3. &#x20;Support daily inventory upload from SJY’s Google Sheet.&#x20;

4. &#x20;Treat inventory as reference only and avoid blocking orders due to insufficient stock.&#x20;

5. &#x20;Configure invoice submission as the trigger for syncing finalized data to SQL.&#x20;

6. &#x20;Customize the invoice template with SJY logo, address, company details, and bank account details.&#x20;

7. &#x20;Configure discount parsing from natural language messages.&#x20;

8. &#x20;Test SKU, item description, packaging, and quantity interpretation.&#x20;

9. &#x20;Set up user roles and permissions for sales, operations, warehouse, and admin users.&#x20;

10. &#x20;Support delivery order generation and signed proof upload.&#x20;

11. &#x20;Set up credit note creation and SQL syncing.&#x20;

12. &#x20;Support manual payment status updates and sync paid status to SQL.&#x20;

13. &#x20;Guide SJY on dedicated WhatsApp phone number setup for MAIA.&#x20;

***

## SJY Sports Asia Action Items

1. &#x20;Provide the daily inventory Google Sheet format exported from Site Giant.&#x20;

2. &#x20;Confirm the primary warehouse to be used for Phase 1.&#x20;

3. &#x20;Provide the latest SKU and item master list from SQL.&#x20;

4. &#x20;Identify SKUs with special packaging handling, especially loose item vs box quantity.&#x20;

5. &#x20;Provide sample real customer orders for testing.&#x20;

6. &#x20;Provide sample orders with discount instructions.&#x20;

7. &#x20;Define the preferred message format for discount grouping.&#x20;

8. &#x20;Provide sample invoice template or current invoice reference.&#x20;

9. &#x20;Provide SJY company logo, address, bank details, and invoice footer information.&#x20;

10. &#x20;Confirm user list and permission levels.&#x20;

11. &#x20;Confirm who can submit invoices, create credit notes, and mark payments as paid.&#x20;

12. &#x20;Provide credit note examples and current SQL credit note process.&#x20;

13. &#x20;Confirm current payment marking process and SOA expectation.&#x20;

14. &#x20;Prepare a dedicated phone number for MAIA WhatsApp setup.&#x20;

15. &#x20;Test MAIA with real operational scenarios and provide feedback.&#x20;

***

# 4. Phase 1 Scope Direction

Phase 1 should focus on:

1. &#x20;Daily stock reference from Google Sheet.&#x20;

2. &#x20;Sales order creation from order messages.&#x20;

3. &#x20;Draft invoice generation.&#x20;

4. &#x20;Invoice review and final submission.&#x20;

5. &#x20;SQL sync after final invoice submission.&#x20;

6. &#x20;Pick/pack support where practical.&#x20;

7. &#x20;Delivery order generation.&#x20;

8. &#x20;Proof of delivery upload.&#x20;

9. &#x20;Credit note creation.&#x20;

10. &#x20;Manual payment status update.&#x20;



Not included as full Phase 1 automation:

1. &#x20;Full real-time Site Giant inventory integration.&#x20;

2. &#x20;Automatic SQL-to-Site Giant syncing.&#x20;

3. &#x20;Automated payment reconciliation from bank statements.&#x20;

4. &#x20;Complex multi-warehouse stock logic.&#x20;

5. &#x20;Automated WhatsApp group messaging.&#x20;

6. &#x20;Hard stock blocking during order creation.&#x20;

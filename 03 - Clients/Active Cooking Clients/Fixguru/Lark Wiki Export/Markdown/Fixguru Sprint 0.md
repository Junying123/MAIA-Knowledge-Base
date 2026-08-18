**Fixguru Sprint 0**

**Who\'s Fixguru?**

They sell boxes *like any type of boxes\....*

Already made boxes

Custom boxes

Sell to who ?

Small to large businesses

Johnson\'s childhood friend

**Current Business process**

**Quotation → Proforma → pick list → schedule delivery → issue Invoice → Credit Note (if needed)**

![](../Fixguru MAIA - Product Specification Baseline (SOW)/Fixguru Sprint 0_assets/media/image1.jpeg){width="5.75in" height="5.75in"}

**MAIA Business process**

**MAIA Business process**

**Quotation → Sales Order (SO) → Proforma → Delivery Note (DN/DO) → Invoice → Credit Note (if needed)**

![](../Fixguru MAIA - Product Specification Baseline (SOW)/Fixguru Sprint 0_assets/media/image2.jpeg){width="5.75in" height="2.7083333333333335in"}

**Order-Centric Record Grouping**

MAIA adopts an **order-centric record grouping model**, where the **Sales Order acts as the central record**. All related documents are linked to the SO, providing:

**Traceability**: A clear audit trail from quotation to invoice, ensuring every action is tied to a single order reference.

**Editability During Proforma Stage**: By grouping related documents under the SO, any changes made at the **proforma invoice stage** remain easy to edit and manage. This allows teams to refine order details (quantities, pricing, discounts) before finalization.

**Final Invoice Accuracy**: The final invoice will always reflect the last agreed-upon version, minimizing errors and disputes.

**Invoice Traceability**\
Every invoice is linked directly back to its originating Sales Order (SO). This means stakeholders can always trace invoices to the specific order they belong to, even in cases where **one order may generate multiple invoices** (e.g., partial deliveries or staged billing).

**Refund Handling**:

**Refund Note**: Used to record and track refunds or return transactions giving finance team visibility into adjustments.

**Credit Note**: Only issued **after the invoice is finalized**, ensuring compliance with accounting standards and maintaining accurate financial reporting.

List of Documents under 1 **Sales Order**

+:--------------------------------------+:---------------------------------+
| Type of documents under 1 Sales order |                                  |
+---------------------------------------+----------------------------------+
| Sales Order                           | Quotation                        |
|                                       +----------------------------------+
|                                       | Proforma                         |
|                                       +----------------------------------+
|                                       | Pick list                        |
|                                       +----------------------------------+
|                                       | Delivery Note (DO)               |
|                                       +----------------------------------+
|                                       | Delivery Trip                    |
|                                       +----------------------------------+
|                                       | Invoice                          |
|                                       +----------------------------------+
|                                       | Credit note                      |
|                                       +----------------------------------+
|                                       | Receipt                          |
|                                       +----------------------------------+
|                                       | Refund Note                      |
+---------------------------------------+----------------------------------+

**Business Process Steps**

The following steps outline the end-to-end order-to-cash workflow within MAIA, ensuring consistency, traceability, and alignment between sales, logistics, and finance.

**Step 1: Quotation Creation**

A Sales Representative creates a **quotation** to capture initial pricing, terms, and product details for the customer.

This document serves as the starting point of the sales lifecycle.

**Step 2: Proforma Invoice Generation**

A **Proforma Invoice** is generated once the quotation is reviewed and the customer provides confirmation.

This acts as a formal order confirmation before fulfillment begins.

**Step 3: Picklist Preparation**

A **Picklist** is generated and shared with the warehouse or operations team.

The picklist outlines all items, quantities, and storage locations to guide accurate picking and packing.

**Step 4: Delivery Note (DO) Creation**

A **Delivery Note (DO)** is generated once items are picked and packed.

The DO serves as the official record of goods ready to be shipped.

**Step 5: Delivery Trip & Shipment Scheduling**

A **Delivery Trip** is created to consolidate all Delivery Notes scheduled for dispatch within the same day.

This document enables drivers and logistics teams to efficiently manage deliveries across multiple orders.

**Step 6: Invoice**

Once delivery is completed, a final **invoice** is generated.

The invoice reflects the agreed terms, final product quantities, and payment requirements, serving as the legal and financial record of the transaction.

**Customization points**

1\. **API Integrations**

Direct integration with third-party systems such as CRMs and ERPs.

Initial integration target: **AutoCount**.

**Warehouse Management System (WMS) integration** for inventory sync and operational alignment.

**Workflow Automation**

Automation of key processes unique to the client's operations, e.g.:

Automatic creation of a **Delivery Note (DO)** upon finalization of a Sales Order.

**UI/UX Modifications**

Tailored dashboards and analytics to enhance usability, such as:

Overall sales overview.

Outstanding payments monitoring.

**Custom Modules**

**Calculation Logic**

> **Custom Box Quotation calculation Module designed based on IAM's Excel models: [RSC Box Calculator](https://eg69120xnei.sg.larksuite.com/wiki/NhiLwHD3QiSicskOpP1lQNXdgKf?from=from_copylink)**

**\[RSC Custom Made Calculation.pdf\]**

> **RSC Sheet (calculation logic provided by IAM Worldwide Sdn Bhd).**

**\[Custom Made - RSC 1024 (1).xlsx\]**

> **Diecut Sheet (calculation logic provided by IAM Worldwide Sdn Bhd).**

**\[Custom Made - Diecut 0825.xlsx\]**

**Chatbot**

**ERP**

**Approval Processes**

MAIA incorporates a robust approval workflow engine to safeguard compliance and ensure management oversight across critical business processes. Approvals are not tied to individual users but instead operate on a **role-based model**, meaning any user assigned to the designated role group can perform the required approval. This ensures flexibility, accountability, and continuity even if specific users are unavailable.

+:---------------------------------------------------------------------------------------------------------------------------------------+:-------------------------------------------------------------------------------------------------------------------------+:---------------------+
| Approval process                                                                                                                       | Triggers                                                                                                                 | Who needs to approve |
+----------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+----------------------+
| Quotation / Sales Order approval when selling price falls below minimum threshold.                                                     | Selling price \< minumum price (get from autocount)                                                                      | Management           |
+----------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+----------------------+
| Management approval required if a customer approaches their credit limit prior to creating a Sales Order.                              | Set reminder at 80%                                                                                                      | Management           |
+----------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+----------------------+
| Delivery Note(DO) approval required if the Delivery Note or Deliver Note items differ from the original Sales Order.                   | DN Product item != Sales Order Product items                                                                             | Sales                |
|                                                                                                                                        |                                                                                                                          |                      |
|                                                                                                                                        |                                                                                                                          | Management           |
+----------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+----------------------+
| Delivery Note(DO) Approval required if the order is Cash payment                                                                       | Payment to confirm before issue DO                                                                                       | Sales                |
|                                                                                                                                        |                                                                                                                          |                      |
|                                                                                                                                        | How to confirm payment                                                                                                   | Management           |
|                                                                                                                                        |                                                                                                                          |                      |
|                                                                                                                                        | Once customer confirmed with signature, then only it will be deemed as confirmed sales and proceed to issue packing list |                      |
+----------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+----------------------+
| Credit terms to follow customer credit terms (any outstanding payment following their credit term will need to be sent to get approval | Credit customer who has outstanding payment from their existing credit term                                              | Management           |
+----------------------------------------------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------+----------------------+

+------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Quotation / Sales Order approval when selling price falls below minimum threshold.                                                                               |
|                                                                                                                                                                  |
| Management                                                                                                                                                       |
|                                                                                                                                                                  |
| Get from autocount from \"Stock Item\"                                                                                                                           |
|                                                                                                                                                                  |
| Management approval required if a customer approaches their credit limit prior to creating a Sales Order.                                                        |
|                                                                                                                                                                  |
| Set reminder at 80%                                                                                                                                              |
|                                                                                                                                                                  |
| Delivery Note(DO) approval required if the Delivery Note or Deliver Note items differ from the original Sales Order.                                             |
|                                                                                                                                                                  |
| Admin                                                                                                                                                            |
|                                                                                                                                                                  |
| Reminder sent to sales and management                                                                                                                            |
|                                                                                                                                                                  |
| Delivery Note(DO) Approval required if the order is Cash payment                                                                                                 |
|                                                                                                                                                                  |
| Admin and management                                                                                                                                             |
|                                                                                                                                                                  |
| Cash cus to pay before issue DO                                                                                                                                  |
|                                                                                                                                                                  |
| Credit terms to follow customer credit terms (any outstanding payment following thier credit term will need to send got approval)\<\-\-- Management for approval |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Custom Notification**

Automated reminders to drive timely actions and improve operational efficiency:

Notification is sent to dedicated user( order process)

Stock availability notifications.

+:---------------------+:------------------------------------------------+:-------------------------------------------------------------------------------------------------------+:-----------------------+
| Notifications        | Scenarios                                       | Triggers                                                                                               | Notification to siapa? |
+----------------------+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+------------------------+
| low stock product    | Notification trigger when item is low in stock  | When the item is at the lowest minimum threshold                                                       | Sales\                 |
|                      |                                                 |                                                                                                        | Admin                  |
|                      |                                                 | Explore to see whether you can explore using the Past 3 Months average sales quantity as the threshold |                        |
|                      |                                                 |                                                                                                        | Management             |
+----------------------+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+------------------------+
| out of stock product | Notification triggers when item is out of stock | Product quantity = 0                                                                                   | Sales\                 |
|                      |                                                 |                                                                                                        | Admin                  |
|                      |                                                 |                                                                                                        |                        |
|                      |                                                 |                                                                                                        | Management             |
+----------------------+-------------------------------------------------+--------------------------------------------------------------------------------------------------------+------------------------+

Delivery status updates.

+:-----------------+:-------------------------------------+
| Status           | Status sent to whom ?                |
+------------------+--------------------------------------+
| Packing          | *Dedic**ated Sales agent***          |
+------------------+                                      |
| Packed           |                                      |
+------------------+                                      |
| Schdeuled        |                                      |
+------------------+                                      |
| loading          |                                      |
+------------------+                                      |
| Out for delivery |                                      |
+------------------+                                      |
| Delivered        |                                      |
+------------------+--------------------------------------+

Follow-up reminders for quotations.

> Alerts if Sales Order is not converted to DO within 7 days.

Dedicated sales agent reminder

  ------------------------------------------------------------- --------------------------------------- -----------------------------
  Reminder to sent                                              Triggers                                Status sent to whom ?

  Alerts if Sales Order is not converted to DO within 7 days.   No Delivery note created after 7 Days   Sales Agent (User Specific)
  ------------------------------------------------------------- --------------------------------------- -----------------------------

Customer inactivity reminders (no orders for every 30 days). From last invoice date

+:----------+:------------------------+:----------------------------+:----------------------+
| How often | Triggers                | Who receives notification ? | Is it user specific ? |
+-----------+-------------------------+-----------------------------+-----------------------+
| 30 days   | *Eg. Event or Schedule* | *eg.Sales agent*            | *Eg. Yes*             |
|           |                         |                             |                       |
| 60 days   |                         |                             |                       |
|           |                         |                             |                       |
| 90 days   |                         |                             |                       |
|           |                         |                             |                       |
|           |                         |                             |                       |
|           |                         |                             |                       |
|           |                         |                             |                       |
+-----------+-------------------------+-----------------------------+-----------------------+

Outstanding payment reminders

Credit term

Credit limit

Any outstanding payment of the respective customers

  --------------------------------------------------------------------------------------------------- ---------- ----------------------------------- -----------------------------
  Status                                                                                              Triggers   Scenarios                           Who receives notification ?

  Customer outstanding payments nearing end of Credit terms                                           *Event*    10 days before end of credit term   *Dedicated Sales agent*

  Credit limit alerts for customers almost exceeding their limit.                                     Event      80% credit limit                    *Dedicated Sales agent*

  Reminder for Overpaid customer                                                                      Event      Overpaid amount \> 0                *Dedicated Sales agent*

  Dedicated Sales Agent reminders to send a copy of invoice to customers once delivery is completed   Event      When final invoice is generated     *Dedicated Sales agent*
  --------------------------------------------------------------------------------------------------- ---------- ----------------------------------- -----------------------------

**Inventory Management (Baseline & Integration)**

**Objective:** Ensure accurate stock availability throughout the order-to-fulfillment cycle, while keeping accounting stock authoritative in AutoCount (or integrated systems).

**Stock Tracking Steps**

**SKU Synchronization:** Sync **unique SKUs** (catalog/inventory master) from the Warehouse Management System (WMS) or accounting system into MAIA.

**Quantity Ownership:** MAIA **does not maintain stock count** as the system of record; quantities remain authoritative in AutoCount/WMS.

**Real-Time Validation:** During SO/DN creation, MAIA **validates stock quantity** against AutoCount (or WMS) to prevent oversell.

**Delivery Note Creation:** Delivery note (DO) issuance **reflects into AutoCount immediately** (created on the spot) to keep inventory movement aligned.

Any stock returns from Return Note - push back into Autocount \"Sales - Delivery Returns

**Notes**

Day-to-day **stock movements are tracked through orders** in MAIA for operational visibility; **replenishment/restock** is **performed in AutoCount/WMS** and can be pulled into MAIA via sync.

Optional enhancements: safety stock rules, low-stock alerts, channel allocation rules, and per-outlet availability displays.

![](../Fixguru MAIA - Product Specification Baseline (SOW)/Fixguru Sprint 0_assets/media/image3.png)

**点击图片可查看完整表格**

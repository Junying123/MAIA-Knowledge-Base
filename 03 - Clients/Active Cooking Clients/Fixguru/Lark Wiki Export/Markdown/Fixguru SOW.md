**Fixguru SOW**

The Services Agreement is made effective as of 22nd July 2025

  ------------- ---------------------------------------------------------------------------------------------------------------------------------------------------
  **BETWEEN**   **Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor.

  **AND**       **IAM Worldwide Sdn Bhd** ("Fixguru"), with its office located at 18931, Jalan Telok Gong, Kampung Telok Gong, 42000 Pelabuhan Klang, Selangor.
  ------------- ---------------------------------------------------------------------------------------------------------------------------------------------------

1\. **Project Overview**

Fixguru seeks to streamline its B2B order-to-delivery operations by deploying an internal WhatsApp-based AI chatbot tightly integrated with an in-house Maia and AutoCount accounting. The solution will automate routine order handling, synchronise master data nightly, and provide real-time status updates to Sales, Operations and Drivers---eliminating manual double-entry, late-night coordination calls and missed follow-ups.

+:-----------------------------------------------------------------------------------------------------------+
| **Objectives**                                                                                             |
|                                                                                                            |
| Eliminate manual data re-keying between chatbot, Maia and AutoCount, reducing processing effort and errors |
|                                                                                                            |
| Shorten order-to-invoice cycle for \~30 or more confirmed orders/day                                       |
|                                                                                                            |
| Provide automated reminders to internal teams (e.g., customers with no orders \> 30 days)                  |
|                                                                                                            |
| Enforce credit-limit/credit-term checks before issuing invoices                                            |
|                                                                                                            |
| Done before converting Sales order to DO                                                                   |
|                                                                                                            |
| **Key Results**                                                                                            |
|                                                                                                            |
| ≥ 50 % reduction in manual WhatsApp coordination between Sales & Operations                                |
|                                                                                                            |
| Cut order processing time from quotation to DO generation by ≥ 40 %                                        |
|                                                                                                            |
| 100 % automated nightly sync of customers, products, invoices and receipts to AutoCount                    |
|                                                                                                            |
| On-time delivery adherence ≥ 95 % through cut-off (2 pm) and routing automation                            |
+------------------------------------------------------------------------------------------------------------+

2\. **Scope of Work**

2.1 **Integrations**

  ---------------------------------------------------- --------------- --------------- --------------------------------------------------------------------------------- --------------------------------
  **System**                                           **Direction**   **Frequency**   **Data Objects**                                                                  **Notes**

  Maia ⇆ AutoCount                                     Push/Pull       Every EOD       Quotes, Customers, Products, Invoices, Credit Notes, Receipts, Payment Vouchers   Master data lives in AutoCount

  Chatbot → Maia                                       Push            Real-time       Sales Orders, DO, Invoice status, Quotation                                       Full order creation via bot

  Payment Channels (Bank Tx, Card, Cash, QR Pay,TNG)   Pull            On-event        Payment confirmation & proof                                                      Supported tender types

  Lalamove API                                         Push            On-demand       Same-day pickup requests & fees                                                   For "on-the-spot" orders
  ---------------------------------------------------- --------------- --------------- --------------------------------------------------------------------------------- --------------------------------

**Chatbot Deployment**

WhatsApp API integration

2.2 **High Level User Flow**

**Order Capture** -- Sales agent chats with customer; bot drafts quotation & pro-forma invoice.

Live agents can forward customer queries, including images, PDF files, or messages, via WhatsApp to this chatbot for order processing.

**Payment & Credit Check** -- Agent uploads proof; bot validates credit limit/terms before DO & invoice is issued

**Update Payment Status Completed**: Sales admin can update the payment status to paid/COD by sending the following information:

Order/Invoice ID

Text message \"PAID\" / \"COD\"

Able to update payment status on Sales order id before converting to DO for any Cash/COD customers(orders)

**Invoice and DO Generation**:

Generates pro-forma invoice and delivery orders(DO) upon order confirmation.

**Cut-off Logic** -- Orders confirmed ≤ 2 pm are routed for next-day delivery; later orders roll to following schedule.

**Picking & Routing** -- Operations receive a digital picking list; items packed and route finalised by EOD .

Update offline order picking completion status.

**Dispatch & Proof** -- Driver sends photo proof via bot; bot returns image to Sales

**Nightly Sync** -- ERP pushes daily transactions to AutoCount at 23:00.

Upon DO is completed, the DO is to be converted to Sales invoice if there is no dispute

Sales team to send copy to customers (a reminder will be included, *[Refer to Reminder Section]{.underline}*)

2.3 **Functional Modules**

Order & Quotation Management

Custom box Quotation module based on IAM excel sheet

Credit-Limit / Credit-Term Enforcement

Inventory & Stock Tracking (incl. out-of-stock update via bot)

Sync with Autocount to check product availability.

Delivery & Driver Module (photo proof, Lalamove booking)

Auto Generation

Auto generate sales invoice upon completion and remind sales team to send a copy to customer

Approval Engine

Approval for Quotation/Sales order (Performa invoice) status if the selling price hits below min selling price

Custom boxes, uses Profit by RM and % (calculation will be discussed and align with **IAM Worldwide Sdn Bhd)**

Manual approval from management when customers near exceeding credit limit before creating sales order

Approval if there are any changes to DO or DO item is not same as Performa invoice

Reminder Engine

Reminder of stock availability

Reminder of delivery status

Reminder of follow up quotations

Reminder for sales team if the quotation/ sales order has not been converted to DO after 7 days

Reminder for management and sales team if customer last order more than 30 days. 60 days, 90 days

Reminder for sales team on outstanding payment

Upon sales order and before converting to DO for cash customer

Reminder for sales team about credit term customers approaching their credit term deadline

Reminder for sales order status to sales team

Reminder for sales team to send a copy of sales invoice to customers upon DO is completed and conversion to sales invoice has no dispute

Dashboard & Analytics (overall sales, outstanding payments)

4\. **Non-Functional Requirements**

Languages: English, Malay, Mandarin

Peak capacity: ≥ 60 concurrent internal chats / 30+ orders per day

Access: WhatsApp Business only; internal users during business hours

3\. **Acceptance Criteria**

100 % automated DO & Invoice generation for qualifying orders

Credit checks block invoice creation when limits exceeded

Proof-of-delivery image stored and viewable within 5 minutes of driver upload

Nightly sync logs show ≤ 0.1 % failed records over a 30-day UAT window

*Note: A more detailed breakdown of the acceptance criteria will be provided to Fixguru during the UAT period*

4\. **Out-of-Scope**

Customer-facing (B2C) chat flows

Handling of product refunds and returns (manual process remains)

Promo-code and seasonal campaign logic (not required)

5\. **Assumptions & Dependencies**

Fixguru provides active WhatsApp Business number for bot deployment.

AutoCount API and server access are available for nightly sync.

Lalamove account credentials supplied by Fixguru.

Internal roles (Sales, Operations, Driver, Accounts, Management) are allocated and trained

6\. **Estimated Timeline**

  --------------------------- ------------------
  **Activity**                **Duration**

  Requirements Finalisation   Week 1

  Development Commence        Week 2

  UAT Commence                Week 6
  --------------------------- ------------------

7\. **Commercial**

7.1 **One-off Development Cost**

+:------------------------------------+:----------+
| Item                                | Price     |
+-------------------------------------+-----------+
| MAIA Internal Chatbot               | RM 48,000 |
|                                     |           |
| Customizations:                     |           |
|                                     |           |
| Dashboard & Analytics               |           |
|                                     |           |
| Approval Flow                       |           |
|                                     |           |
| Payment & Credit Check              |           |
|                                     |           |
| Integration to Lalamove API         |           |
|                                     |           |
| Periodic System and Feature Updates |           |
|                                     |           |
| Storage, Model Training, Ingestion  |           |
+-------------------------------------+-----------+

7.2 **Fixguru\'s Monthly Maintenance**

+:----------------------------------------+:-----------------------+
| **Item**                                | Estimated              |
+-----------------------------------------+------------------------+
| OpenAI cost                             | \~ RM 1,000            |
|                                         |                        |
| Platform Costs                          | *\*depending on usage* |
+-----------------------------------------+------------------------+
| Server Costs                            | RM 200                 |
+-----------------------------------------+------------------------+

7.3 **Payment Terms**

  ------------------------------------ ---------------- ------------------
  **Milestone**                        **Percentage**   **Price**

  Milestone 1 - Project Confirmation   50%              RM 24,000

  Milestone 2 - UAT Completion         50%              RM 24,000
  ------------------------------------ ---------------- ------------------

8\. **Service Level Agreement (SLA) and Maintenance**

8.1 **Service Commitment**

Mindhive shall provide maintenance and support services for the Fixguru version consistent with the service levels described in the attached SLA. The SLA shall govern response times, system uptime, scheduled maintenance, and remediation procedures for service failures.

8.2 **Service Levels and Performance Metrics**

**Service Availability**

The chatbot will be available **99.5% of the time**, excluding planned maintenance periods.

Planned maintenance will be scheduled outside of regular working hours with prior notification to users at least **24 hours in advance**.

**Support Response Times**

**Critical Issues (High Impact):** Response within **2 hours** during business hours (Monday to Friday, 9 AM to 6 PM). Issues that severely impact application functionality or data integrity.

**Major Issues (Medium Impact):** Response within **4 hours**. Issues that affect non-essential features but still impair user experience or productivity.

**Minor Issues (Low Impact):** Response within **1 business day**. Issues that have minimal effect on functionality or user experience.

**Resolution Times**

Standard cases will follow the schedule outlined below. For special cases, Mindhive will provide a root cause analysis and an estimated timeline for resolution.

**Critical Issues:** Resolution or workaround provided within **8 business hours**.

**Major Issues:** Resolution or workaround provided within **1 business day**.

**Minor Issues:** Resolution or workaround provided within **3 business days**.

**Performance Monitoring**

Regular monitoring of the chatbot will be conducted to ensure optimal performance, including **chatbot response times, query resolution speed, and message processing efficiency**.

Any performance issues affecting user experience will be addressed within **24 hours**.

**Uptime and Maintenance**

Maintenance schedules will be communicated in advance and will typically occur **during off-peak hours** to minimize disruption.

Any **unplanned downtime**, whether for system errors or maintenance, will be communicated promptly, and a **resolution plan will be provided**.

8.3 **Performance Metrics and Remedies**

In the event of service disruptions or failure conditions affecting system performance, Mindhive shall:

Provide a response within the timeframes specified in the SLA.

Take commercially reasonable steps to restore normal operations promptly.

Implement remedial measures as detailed in the SLA, including escalation protocols.

8.4 **Exclusions**

The obligations under this section shall not be construed to prevent either party from invoking force majeure or other standard contractual remedies.

9\. **Refund Policy**

Mindhive is committed to delivering the project as outlined in the Scope of Work and achieving the key objectives and acceptance criteria agreed upon by both parties. In the event that Mindhive fails to fulfill the core requirements as defined in this Statement of Work---specifically:

The solution fails to perform the key deliverables stated in Section 2 (Scope of Work) and Section 3 (Acceptance Criteria),

And after remediation efforts defined under Section 8 (SLA and Maintenance) have been exhausted without resolution,

Fixguru shall be entitled to a **partial or full refund**, proportionate to the specific milestone(s) or deliverables that remain incomplete or non-functional.

Refunds will be processed under the following conditions:

**Good Faith Resolution First:** Both parties agree to make reasonable efforts to resolve the issue collaboratively, including allowing Mindhive sufficient opportunity to troubleshoot and rectify any deficiencies within a mutually agreed timeframe.

**Written Notice**: Fixguru must submit a written request for refund within 14 business days of identifying the unresolved issue, clearly stating the nature of the failure and referencing the affected deliverables or criteria.

**Assessment & Refund Scope**:

Deposit of RM24,000 to proceed with the project.

A full 100% refund if failure to go live post UAT phase.

**Exclusions**: No refund shall be issued for delays or failures resulting from:

Fixguru's failure to provide timely access, feedback, or required information within reasonable timeline (mutually agreed)

Changes to scope initiated by Fixguru after project commencement;

Force majeure or third-party system failures beyond Mindhive's control.

All refund claims shall be reviewed in good faith, and Mindhive shall endeavor to process any agreed refunds within **30 days of confirmation**.

**Sign**

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first

above written.

For Fixguru

+:---------------------------------------------------------+
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                                                          |
| Signature                                                |
+----------------------------------------------------------+
| Name:                                                    |
|                                                          |
| Position:                                                |
|                                                          |
| Date:                                                    |
+----------------------------------------------------------+

For Mindhive

+:---------------------------------------------------------+
| \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |
|                                                          |
| Signature                                                |
+----------------------------------------------------------+
| Name: Johnson Goh                                        |
|                                                          |
| Position: CEO of Mindhive                                |
|                                                          |
| Date:                                                    |
+----------------------------------------------------------+

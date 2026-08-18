**SOW for \[MAIA\] Holsen**

**The Services Agreement is made effective as of 10th December 2025**

  ------------- ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **BETWEEN**   The Vendor   Mindhive Sdn Bhd ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor.

  **AND**       The Client   HOLSEN INTERCHEM SDN. BHD. (\"Holsen\"), with its office located at No.16, Jalan Anggerik Mokara 31/44, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor D.E., Malaysia.
  ------------- ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1\. **Introduction**

> **About MAIA**
>
> MAIA is a next-generation business platform that unifies sales, fulfillment, communications, logistics, and finance into a single ecosystem. It is designed as a modular, cloud-based solution where each module can function independently yet integrates seamlessly into the wider MAIA environment. This ensures flexibility for smaller businesses while delivering enterprise-level scalability and control.
>
> Our vision is to help organizations manage their entire sales and operational lifecycle from a single, intelligent system --- increasing efficiency, improving customer engagement, and enabling growth.
>
> **Purpose of Document**
>
> This document establishes the baseline specifications, service level commitments, and commercial framework for the deployment and ongoing use of MAIA between the Vendor and the Client.
>
> **Mutual Commitment**
>
> This document sets out the expectations and obligations of both parties to ensure a successful business engagement.

1.1 **Enterprise Baseline Modules**

> The following sections outline the baseline modules included in MAIA Enterprise, with their scope and product specifications:

Internal Chatbots

User Workspaces

2\. **Product Specifications**

> The following section highlights in detail the modules that **Holsen** will be receiving and the features of those modules. Each module is carefully designed with scalability, configurability, and high availability in mind, ensuring it can fit into Holsen's business process. The system is engineered to support the high volume of transactions *(70-90 POs daily)* required by Holsen.
>
> MAIA is delivered in phases to ensure clarity, predictable rollout, and controlled risk.
>
> **Phase Definitions**

**Phase A1 Core MAIA (Baseline Order → Delivery Note Flow)**\
Core MAIA modules and features required to support the standard order-to-delivery-note lifecycle (e.g., baseline internal chatbots, core workspaces, and base integration).

**Phase A3 Enhancements (Within Core Flow, Delivered Under Phase A)\**
Phase A3 includes echancements capabilities that still follow MAIA's core order → delivery note flow, but require deeper tailoring or additional logic**.**

3\. **Phase A1 Core MAIA (Baseline Order → Delivery Note(DO) Flow)**

> Phase A1 delivers the **foundation** of MAIA that Holsen receives. It includes standard order creation (*without any custom business rules, approvals, or additional SOP logic*)
>
> **Phase A1 focuses on:**

Core Internal Chatbots (Sales & Supply Chain)

Core Workspaces (Sales & Supply Chain & Finance)

Core Document Generation

Core Data Sync Touchpoints

Baseline process flow (Order → Delivery Note)

> Phase A1 ensures receives a **fully working, end-to-end operating system** before any customization.

3.1 **Internal Chatbot**

3.1.1 **Sales Co Ordinator Assistant (Core)**

> The Sales Agent Assistant enables Holsen's Sales team to generate quotations, receive customer Purchase Orders (PO), and convert them into Sales Orders (SO) directly through WhatsApp or by forwarding customer emails to MAIA.

**Platform:**

WhatsApp (MAIA Sales Agent Chatbot)

Email (for forwarding customer POs)

**Included in Phase A1:**

**Sales Intent Capture & Intelligent Document Processing (IDP):**

**Omni Channel Input:** Sales agents can forward customer requests in various unstructured formats directly to the MAIA bot or email. Supported formats include:

**Text messages:** Forwarded directly from client chats.

**Images:** Photos of handwritten notes or physical POs

**PDFs:** Formal Customer Purchase Orders

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Extracted information may not always be fully accurate, especially for handwritten documents or low-quality images. Users will have the option to review and edit extracted fields before confirming the generated document.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Data Extraction:** The system automatically identifies and extracts:

Customer Name.

SKUs and Quantities (example:, \"10 drums of Copper Sulfate\")\*

Delivery Date (if mentioned, example: specific date)

  -------------------------------------------------------------------
  SKUs in the PO need to be present in MAIA\'s inventory SKU for it

  -------------------------------------------------------------------

**Dynamic Pricing , Quotation and SO Generation**

Manual Price Entry: Recognizing that pricing varies (Specially for Commodity based items ) and usually negotiated verbally or via \"Boss Approval\", MAIA will not enforce fixed pricing in this Phase

The bot will prompt the agent to confirm or input the selling price for the specific quote.

Minimum price safeguards will be ensured.

For the conversion of Quotation to SO, the logic applied while generating the quotation is persistent, which can be reviewed and used again.

**Stock Availability Display:**

Inventory will be checked, which is managed by MAIA.

It displays **\"Total Available Quantity\"** to the agent for reference (example., \"Stock Available: 50 Tons\")

*Note:* C3 items are set up as separate SKUs, so MAIA already enforces stock and batch restrictions at this stage. Only compliant C3 stock is shown.

**Product Attribute Tagging (SKU Level)**

MAIA identifies the classification of every SKU on the order and displays specific instructions to the Logistics team:

**Trading**

*Definition:* Finished goods that are bought and sold without alteration

*Action:* Signals to the warehouse that the item is \"Pick-and-Pack\" ready from the shelf.

**Manufacturing**

*Definition:* Items that require internal processing before delivery (e.g., repacking bulk solids from 1-ton bulk bags into 20kg or 50kg packs

*Action:* Visual cue for Logistics to **check with Production** immediately to ensure the repacking job is scheduled, rather than simply looking for finished stock on the rack.

**Poison / Hazardous Goods:**

*Definition:* Controlled chemical items that require specific government-mandated transport documentation

*Action:* **CRITICAL ALERT.** Displays a bold warning: **\"POISON FORM REQUIRED.\"** This signals the Admin/Logistics staff that they must manually prepare and print the physical Poison Form to hand to the driver, ensuring legal compliance during transport

**Commodity:**

*Definition:* Items with highly variable, market dependent pricing

*Action:* Signals the Sales Agent during the Quotation phase to **manually verify the current** before quoting or confirming the order

**Customer Requirements Tagging**

MAIA looks up the Customer Profile and makes the instructions for the order visible, ensuring client specific rules are respected:

This information will be visible in the Delivery Note (DO) to ensure that the packaging is done as per the mentioned instructions:

**COA (Certificate of Analysis) Requirement**

Specifies the exact type of technical documentation the client demands for the shipment.

Displays the specific format required, so Logistics prints the correct file:

Standard: Generic COA.

Detailed: COA

**Labeling & Brand Strictness**

Instructions regarding product substitution. While Holsen often swaps brands based on stock availability, certain clients strictly require specific brands (e.g., \"Must use Brand X only

Displays **\"NO SUBSTITUTION\"** or **\"PREFERRED BRAND: \[Brand Name\]\"** to prevent the warehouse from picking an alternative brand that would result in a client rejection.

**Documentation & Copies**

Administrative preferences for physical paperwork.

Specifies quantity instructions, such as **\"Needs 2 Invoice Copies\"** or \"Include Delivery Note with price hidden,\" ensuring the driver arrives with the exact paperwork packet the client\'s receiving department expects

**Sales Order Creation:** To create sales orders as instructed by sales agents through WhatsApp messages and emails (natural language; no rigid keywords required).

**Output Document Generation:** To generate output documents. List of output documents supported:

Quotation

Sales Order

Proforma Invoice

Invoice

Credit Note/ Debit Note

**Daily Digests**

Sales agent chatbot is able to send a daily digest that consists of unprocessed / incomplete orders and pending actions to the sales agents on a daily basis.

**Unclosed Sales Orders**\
Alerts sales staff when orders remain in draft/pending status beyond the expected timeframe.\
**Sent to:** Sales Representative

The Sales Rep will be able to declare the Fulfillment Method as either delivery or pickup

3.1.2 **Sales Order Output**

MAIA generates a structured Sales Order CSV for bulk upload into UBS according to format required by UBS.

**Features (wherever needed to be uploaded to UBS):**

Includes customer name, address, and delivery type.

Contains all SKUs and quantities from the Sales Order.

Includes COA/label/brand requirements, delivery date, and PO notes.

Order remarks

  --------------------------------------------------------------------------------------------------------------------
  **Once SQL/Autocount integration is available, MAIA can switch from CSV to full API/connector-based integration.**

  --------------------------------------------------------------------------------------------------------------------

3.1.3 **Supply Chain Agent Assistant (Core)**

The logistics agent assistant chatbot serves as an assistant to help logistics agents manage order fulfillment for B2B clients.

> **Platform:**

WhatsApp

> **Included in Phase A1:**

**Delivery Note (DO) Creation:** To create Delivery Order (DO) as instructed by Logistic agents through WhatsApp messages (natural language; no rigid keywords required).

**Output Document Generation:** To generate output documents. List of output documents supported:

Delivery Order

Picking List

**Daily Digests:** The logistics agent chatbot automatically sends a daily summary of all orders requiring attention, including those pending scheduling, scheduled for delivery, out for delivery, and completed deliveries. This ensures logistics agents have full visibility of daily operational tasks.

**Delivery Delays**\
Triggered when a Delivery Note has **not been generated** for an invoice after *X days*

**Expiring Items**\
Alerts users when products are approaching their expiry date.

The information mentioned above will be highlighted (pinned) in the daily digest, which can be accessed both through the chatbot and the workspace.

> 3.1.3.1 **Supply Chain Notification Reminders**
>
> MAIA supports automated logistics reminders to strengthen SOP adherence and prevent delays.

**Inventory Management & Alerts**

**Out of Stock**\
Triggered when product quantity reaches zero.\
**Sent to:** Logistics Representative & Sales Representative

**Low Stock**\
Triggered when quantity falls below the configured minimum threshold.\
**Sent to:** Logistics Representative & Sales Representative

The information mentioned above will be highlighted (pinned) in the daily digest, which can be accessed both through the chatbot and the workspace.

3.2 **User Workspaces**

> The Sales Agent Workspace provides Sales teams with a clean, centralised interface to review orders created via the MAIA WhatsApp chatbot. This workspace does not replace WhatsApp based order creation; instead, it allows Sales to reference and retrieve information after the order has been confirmed. This is a Desktop Web where users can login and interact with the System.
>
> 3.2.1 **User Workspace**
>
> Desktop Web, where users can login and interact with the System.
>
> 3.2.2 **Sales Agent Workspace (Core)**
>
> A web-based workspace that allows sales agents to manage order status and customer information.
>
> **Included in Phase A1:**

**Sales Order Management:** Create, modify, and track sales orders.

Sales Management includes reminder notification for users

**Inactive customers**: customer who did not order for 60 days (*subject to change if required*) from the last invoice date

Notification is sent to Sales Representative

**Unclosed Sales orders:** pending orders that have not been closed by sales agents

Notification is sent to Sales Representative

**Order Lifecycle Overview:** Users are able to manage and have an overview of the statuses of the orders ( o schedule, scheduled, out for delivery, delivered ).

**Output Documents Management:** View and download the created output documents (e.g., invoice, DO, receipt).

**Customer Management:** View and manage the details of each client, including credit terms/limits recorded in MAIA

> 3.2.3 **Supply Chain Agent Workspace (Core)**
>
> **Included in Phase A1:**

**Fullfillment Management:** Create, modify, and track Delivery notes(DO).

**Order Lifecycle Overview:** Users are able to manage and have an overview of the statuses of the orders (draft, to Schedule, Scheduled, Out for Delivery, Delivered).

**Output Documents:** View the created output documents (Pick List,Delivery Note(DO)

**Inventory Management:** View and manage the details of each Product

**Delivery Request Classification**

+:------------------------------------------------------------------------------+
| Urgent orders involving 3rd party transporters are arranged **outside** MAIA. |
|                                                                               |
| MAIA provides all required supporting documents:                              |
|                                                                               |
| Delivery Note (DO)                                                            |
|                                                                               |
| Pick List                                                                     |
|                                                                               |
| Other Required Documents (optional)                                           |
+-------------------------------------------------------------------------------+

> 3.2.4 **Duplicate Order Prevention**

**Context:** To prevent human error where a PO might be processed twice

**Feature:** MAIA performs a real-time check on every incoming order.

**Logic:** IF Customer Name + PO Number matches an existing active order.

**Action:** The system flags the order as a \" Duplicate Order\" and prevents it from creation

> 3.2.5 **Customer based pricing**
>
> To ensure sales agents create orders with **correct Retail or Dealer pricing**, based on the customer's category, without requiring manual cross-checking or manager approvals.
>
> The objective is to make it simple and fool-proof for sales to generate accurate orders that follow Holsen\'s retail/dealer price structures.
>
> 3.2.5.1 **Customer-Based Pricing Configuration (User Setup)**
>
> When Users (Admins/Sales Coordinators) create or edit a customer in MAIA, they can configure:

Customer-specific price per product

> 3.2.5.2 **Customer Pricing From New Product Creation**
>
> ⁠When a new product item is created in MAIA:

⁠Users can optionally set pricing for specific customers

Users can also apply default price that applies to all customers

> This makes pricing flexible and consistent across the business.
>
> 3.2.5.3 **Automatic Price Retrieval During Order Creation**
>
> When a Sales Representative creates a Sales Order:

Sales selects the customer

The system retrieves the exact pricing configuration for that customer

MAIA automatically fills in the correct price for each item

> Sales do not need to cross-check any pricing list manually
>
> 3.2.6 **Role Specific Approval**
>
> Once the Sales Order is created, it stays as draft. Finance team members to check the accuracy before proceeding to creation of Delivery note(DO). Pricing and credit information are visible to approvers for reference, but no automated pricing or credit validations are executed in Phase A1.

Approval Checks

Approvers manually review each order to ensure it is workable and correctly captured

Customer requirements

Order Accuracy , check with PO

Credit Limit and Credit Term Check

Approval Actions

Approve → Order Marked as \"Submitted\" are able to proceed to create Delivery note(DO)

Ammend → The sales agent can amend the order if needed and proceed

Request Clarification → Order is paused until clarification is provided

4\. **Phase A3 Enhancements (Within Core Flow)**

> Phase A3 includes **echancements** **capabilities** that still follow MAIA's core order → delivery note flow, but require deeper tailoring or additional logic.

4.1 **Compliance, Batch Handling & Document Automation**

> This phase introduces batch metadata intake, compliance enforcement, customer eligibility checks, and the generation of COA/C3 documents. This ensures that all deliveries comply with regulatory and customer specific requirements.
>
> 4.1.1 **Advanced Batch Intake**
>
> When new stock arrives, the Warehouse team enters the following mandatory attributes into MAIA:

**Batch / Lot Number:** The unique identifier on the item

**Expiry Date:** Critical for FEFO (First Expired, First Out) logic.

**K1 Form Number:** (Mandatory for C3/Imported Goods) The Customs Declaration number associated with this specific shipment.

**COA Data:** Upload the Supplier COA PDF.

**Tax & Restriction Status:**

Free Stock (Can be sold to anyone).

C1 Stock (Restricted to customers covered under a valid C1 certificate. The eligibility is determined by presence of it on the Customer Profile)

C3 Stock (Imported on Behalf, Restricted to specific C3 Customer).

> 4.1.2 **Compliance & Eligibility Enforcement**
>
> MAIA will surface all the batch related information before any order proceeds.

**C3 Allocation (Import on Behalf):**

If a batch is tagged **\"C3 - Customer A\"**, it is hard locked to that client.

If a Sales Agent tries to order this SKU for **Customer B**, MAIA will display **\"0 Stock Available\"** (hiding the C3 stock) to prevent illegal allocation.

**C1 certificate validation:**

When a Sales Agent adds a C1 Product to an order, the system checks the Customer Profile for valid certifications and its Expiry Date and makes it visbile

**K1 Traceability:**

The K1 number captured during batch intake is permanently linked to the stock.

MAIA automatically retrieves and shows this **\"Ref K1 Number\"** on the Delivery Order and Invoice

> 4.1.3 **COA handling**
>
> MAIA supports the handling of compliance documents by storing, attaching, and presenting required files during order preparation.

**COA Handling:**

COAs are received from suppliers or Holsen's laboratory as PDFs and uploaded during Batch Intake.

**Customer Preference Logic:** When an order is placed, MAIA checks the Customer Profile (Standard vs. Blinded).

**Masking/Blinding:** If the customer requires a \"Blinded COA\" (Supplier details hidden), MAIA provides the necessary data/instructions to allow the user to mask specific fields (e.g., Supplier Name) before generating the final PDF for the driver.

5\. **Estimated Timelines**

**Phase A Delivery Timeline Summary**

The table below consolidates the estimated timelines for all three Phase A delivery stages based on onboarding, configuration, and UAT activities.

+:--------:+:---------------------------------------------------------------------------------:+:-----------------------:+:-------------:+:-----------------------:+
| Phase    | Scope                                                                             | **Build & Integration** | Expected Date | **Go-Live & Hypercare** |
+----------+-----------------------------------------------------------------------------------+-------------------------+---------------+-------------------------+
| Phase A1 | **Sales & Logistics Chatbots:** WhatsApp-based Inquiry -\> Quote -\> DO.          | 2 Weeks                 | 30th January  | 1-2 weeks               |
|          |                                                                                   |                         |               |                         |
|          | **User Workspaces:** Web dashboards for Sales, Supply Chain, and Approvers.       |                         |               |                         |
|          |                                                                                   |                         |               |                         |
|          | **Role-Specific Approval:** Mandatory \"Manager Check\" before logistics handoff. |                         |               |                         |
|          |                                                                                   |                         |               |                         |
|          | Document Generation of Quotation, SO, Picking List, DO, Invoice.                  |                         |               |                         |
|          |                                                                                   |                         |               |                         |
|          | Customer Specific Pricing                                                         |                         |               |                         |
+----------+-----------------------------------------------------------------------------------+-------------------------+---------------+-------------------------+
| Phase A3 | Compliance, Batch & COA/C3 Handling                                               | 5 Weeks                 | 15th March    | 1-2 weeks               |
|          |                                                                                   |                         |               |                         |
|          | Batch Intake Module                                                               |                         |               |                         |
|          |                                                                                   |                         |               |                         |
|          | Batch Eligibility Enforcement (C3, LMW, C1, Poison rules)                         |                         |               |                         |
|          |                                                                                   |                         |               |                         |
|          | COA, C3, K1 File Handling                                                         |                         |               |                         |
+----------+-----------------------------------------------------------------------------------+-------------------------+---------------+-------------------------+

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  The delivery dates above are indicative and may change depending on external factors, such as the availability of required information (e.g., SQL integration methods, data formats, access credentials), timely client feedback, and other dependencies outside MAIA's control. Any timeline adjustments will be communicated accordingly.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6\. **Commercial Structure**

**Pricing Model**: One-off Development Cost

**Payment Terms**: **Paid the phases of Delivery Specified in [6.2](https://eg69120xnei.sg.larksuite.com/wiki/CurbweufViP0cAkJg3wlFA2vgQh#XS2pdL1A5oNJxYxTXoHlyGB2g8g)**

6.1 **One-off Development Cost**

**Phase A**

+:-------------------------------------------------------------------------------------------------------------------+:-------------------+
| Item                                                                                                               | Price              |
+--------------------------------------------------------------------------------------------------------------------+--------------------+
| **[Phase A1]{.underline}**                                                                                         | RM 24,000          |
|                                                                                                                    |                    |
| Sales & Logistics Chatbots: WhatsApp-based Inquiry -\> Quote -\> DO.                                               |                    |
|                                                                                                                    |                    |
| User Workspaces: Web dashboards for Sales, Supply Chain, and Approvers.                                            |                    |
|                                                                                                                    |                    |
| Role Specific Approval: Mandatory \"Manager Check (order details + credit enforcement)\" before logistics handoff. |                    |
|                                                                                                                    |                    |
| Document Generation of Quotation, SO, Picking List, DO, Invoice.                                                   |                    |
|                                                                                                                    |                    |
| Customer Specific Pricing                                                                                          |                    |
+--------------------------------------------------------------------------------------------------------------------+--------------------+
| **[Phase A3]{.underline}**                                                                                         | RM 24,000          |
|                                                                                                                    |                    |
| Compliance, Batch & COA/C3 Handling                                                                                |                    |
|                                                                                                                    |                    |
| Batch Intake Module                                                                                                |                    |
|                                                                                                                    |                    |
| Batch Eligibility Enforcement (C3, LMW, C1, Poison rules)                                                          |                    |
|                                                                                                                    |                    |
| COA, C3, K1 File Handling                                                                                          |                    |
|                                                                                                                    |                    |
| Delivery Type Enforcement (if not locked in A1)                                                                    |                    |
+--------------------------------------------------------------------------------------------------------------------+--------------------+
| **Grand Total**                                                                                                    | RM 48,000          |
+--------------------------------------------------------------------------------------------------------------------+--------------------+

  -----------------------------------------------------------------------------
  *AWS subsidisation is available, subject to AWS approval and availability.*

  -----------------------------------------------------------------------------

6.2 **Payment Terms for Phase A**

  ---------------------------- ---------------- ----------------- ---------------------------
  **Milestone**                **Percentage**   **Amount (RM)**   **Payment Trigger**

  **Upfront Payment**          50%              **RM 24,000**     Upon project commencement

  **Completion of Phase A1**   25%              **RM 12,000**     Upon delivery of Phase A1

  **Completion of Phase A3**   25%              **RM 12,000**     Upon delivery of Phase A3
  ---------------------------- ---------------- ----------------- ---------------------------

7\. **Caveats & Exclusions**

**Third-Party Dependencies**: Mindhive is not liable for downtime/issues on external platforms (Google Sheet, etc.)

**Connectivity**: Client responsible for internet and device readiness

**Client-side Integrations**: Any unsupported third-party integrations outside approved scope

**Data Accuracy**: Responsibility lies with Client for correctness of provided data

8\. **Service Level Agreements (SLAs)**

8.1 **Mindhive Commitments**

**System Availability:** 99.5% uptime (excluding scheduled maintenance).

**Support Response Times:**

**Critical (P1):** Within 2 hours

**High (P2):** Within 8 hours

**Normal (P3):** Within 2 business days

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours.

**Data Protection:** Regular backups and defined disaster recovery commitments to safeguard client data.

**Lifetime Upgrades & Support:** Clients will continue to receive ongoing product upgrades, security enhancements, and support for the lifetime of their subscription, ensuring the platform remains current, secure, and aligned with evolving business needs.

8.2 **Client Commitments**

**User Access & Permissions:** Client to designate system administrators and enforce internal user policies.

**Data Provisioning:** Provide accurate, complete, and timely data uploads to enable smooth onboarding and continued operations.

**Timely Feedback:** Provide approvals, clarifications, and input during customization and implementation phases to avoid project delays.

**Compliance:** Adhere to licensing terms, security practices, and applicable regulations.

**Point of Contact:** Designate a primary point of contact (POC) for Mindhive communications. The client commits to responding to vendor queries, requests, or approvals within **2--3 working days**.

**Payments:** Ensure timely settlement of subscription fees, invoices, and any approved change request costs as per the agreed commercial terms.

9\. **Appendix**

9.1 **Delivery Model**

**Cloud-Hosted Platform:** MAIA is delivered securely from the cloud, ensuring continuous availability and ease of access without the need for local installations.

**Flexible Tiers:**

**Freemium:** Entry-level access with shared hosting and essential features.

**Pro:** Dedicated environment per company with advanced features.

**Enterprise:** Fully isolated environment with dedicated infrastructure, compliance support, and custom options.

**Deployment Regions:** Data hosting can be tailored to regional compliance or performance requirements (e.g., APAC, EU, US).

9.2 **System Interfaces**

**Web Application:**

Accessible via all modern browsers.

Provides intuitive dashboards and role-based views for managers, finance teams, operations, and administrators.

Real-time updates for transactions, approvals, and customer interactions.

**Mobile-Responsive Access:**

Optimized for smartphones and tablets.

Designed for sales teams, delivery agents, and field users to perform tasks such as order management, approvals, and proof-of-delivery on the go.

**Specialized Workspaces:**

**Sales Workspace:** Tailored for sales agents to manage quotations, orders, and customer interactions.

**Operations & Delivery Workspace:** Enables drivers and logistics staff to update statuses and capture proof of delivery or payment.

**Managerial Dashboards:** Provide leadership teams with visibility into performance, revenue, and outstanding actions.

**Integration Interfaces:**

Standardized APIs for extending functionality and connecting with external platforms.

Pre-built integrations with major sales channels (Shopee, Lazada, TikTok, Shopify, WooCommerce) and communication tools (WhatsApp, Telegram, WeChat, Messenger, Email).

9.3 **Core System Capabilities**

**Unified Business Foundation:** A robust digital core that consolidates sales, finance, inventory, logistics, and communications into one environment.

**Customizable Workflows:** Business processes can be tailored to reflect each company's policies and approval steps.

**Scalable Data Models:** Flexible structures accommodate both standardized records and unique, platform-specific requirements.

**Extensibility:** Companies can configure new rules, workflows, and integrations without disrupting existing processes.

9.4 **Security & Compliance**

**Authentication:** The system currently supports secure, role-based access with standard authentication. Additional options such as two-factor authentication (2FA) and single sign-on (SSO) will be introduced in future releases to further strengthen enterprise security.

**Data Isolation:** Company-level isolation; Enterprise clients get fully isolated database instances, ensuring data encryption in transit and at rest.

**Encryption:** TLS 1.2/1.3 in transit, AES-256 at rest.

**Compliance Roadmap:** SOC2, ISO27001, GDPR readiness, and customer-managed encryption keys (Enterprise).

9.5 **Availability & Performance**

**High Availability:** Built-in redundancy and automated failover to minimize downtime.

**Scalability:** Infrastructure expands automatically to handle seasonal sales peaks and large transaction volumes.

**Uptime Commitment:** 99.9% uptime SLA for Pro and Enterprise clients.

**Performance Monitoring:** Proactive system monitoring and optimization to maintain speed and reliability.

9.6 **Customization & Extensibility**

**Workflow Customization:** Clients may request adjustments to approval flows, SOPs, and operational processes. Such requests will be reviewed and delivered through formal change requests or variation orders, subject to feasibility and vendor assessment.

**Data Flexibility:** While standard business records are provided out-of-the-box, additional configurable fields or data models can be introduced upon request. These enhancements are subject to evaluation by the vendor's development team and may require separate approval.

**Branding Options:** Enterprise clients may request white-labeling of the system with their own branding and domains. Branding changes outside the standard scope will be handled as a variation order.

**Integration Points:** New integrations with external platforms (via APIs, event triggers, or modular connectors) can be developed upon request. The vendor will assess the complexity and impact of such integrations, which will be delivered through formal change requests.

10\. **Acknowledgement & Agreement**

This document serves as a baseline specification and framework for Maia's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive**:

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

**For Holsen**:

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

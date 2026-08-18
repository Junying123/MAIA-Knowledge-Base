**Holsen SOW**

The Services Agreement is made effective as of **11th November 2025**

  ------------- ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **BETWEEN**   The Vendor   Mindhive Sdn Bhd ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor.

  **AND**       The Client   HOLSEN INTERCHEM SDN. BHD. (\"Holsen\"), with its office located at No.16, Jalan Anggerik Mokara 31/44, Kota Kemuning, Seksyen 31, 40460 Shah Alam, Selangor D.E., Malaysia.
  ------------- ------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1\. **Introduction**

**About MAIA**

MAIA is a next-generation business platform that unifies sales, fulfillment, communications, logistics, and finance into a single ecosystem. It is designed as a modular, cloud-based solution where each module can function independently yet integrates seamlessly into the wider MAIA environment. This ensures flexibility for smaller businesses while delivering enterprise-level scalability and control. Our vision is to help organizations manage their entire sales and operational lifecycle from a single, intelligent system --- increasing efficiency, improving customer engagement, and enabling growth.

**Purpose of Document**

To establish the baseline specifications, service level commitments, and commercial framework for the deployment and ongoing use of MAIA between the Vendor and the Client.

**Mutual Commitment**

This document sets out the expectations and obligations of both parties to ensure a successful business engagement.

1.1 **Enterprise Baseline Modules**

The following sections outline the baseline modules included in MAIA Enterprise, with their scope and product specifications:

Internal Chatbots

User Workspaces

2\. **Product Specifications**

The following section highlights in detail the modules that Mackessen would be receiving and also the features of the modules. Each module is carefully designed with scalability, configurability, and high availability in mind, ensuring it can fit into Holsen's business process. The system is engineered with support for handling hundreds of thousands of transactions per day.

2.1 **Internal Chatbot (B2B Sales)**

2.1.1 **Sales Agent Assistant**

The sales agent assistant chatbot serves as an assistant to help sales agents to create orders for B2B clients.

**Platform:**

WhatsApp

**Features:**

**Intelligent Document Processing (IDP):** To process documents such as images of handwritten notes, Purchase Orders, images of orders, payment slips, etc.

**Pre-Order Creation Checkings:** Sales agent chatbot will perform necessary checkings before creating an order such as:

Customer credit limit/terms compliance (from internal MAIA list).

Price consistency check vs last invoice/configured markup bands (e.g., 12--15%); flag discount breaches for approval.

**Sales Order Creation:** To create sales orders as instructed by sales agents through WhatsApp messages and emails (natural language; no rigid keywords required).

**Output Document Generation:** To generate output documents. List of output documents supported:

Quotation

Sales Order

Proforma Invoice

Invoice

Credit Note

Receipt

Payment Voucher

**Daily Digests:** Sales agent chatbot is able to send a daily digest that consists of unprocessed / incomplete orders and pending actions to the sales agents on a daily basis.

**Sales Process SOP:** Sales processes such as approvals (if applicable: price override, credit limit exceeded) will be implemented in the chatflow.

2.1.2 **Logistics Agent Assistant**

The logistics agent assistant chatbot serves as an assistant to help logistics agents manage order fulfillment for B2B clients.

**Platform:**

WhatsApp

**Features:**

**Transporter Management:** Manage dispatch for local third-party contractors and outstation partners (e.g., TiongNam, GMAX).

Delivery eligibility rules (e.g., minimum order value RM200 for delivery) and basic routing prompts.

(Optional) Inventory count check where shared/available.

**Delivery Note (DO) Creation:** To create Delivery note(DO) as instructed by Logistic agents through WhatsApp messages (natural language; no rigid keywords required).

**Output Document Generation:** To generate output documents. List of output documents supported:

Delivery Order

Picking List

**Daily Digests:** The logistics agent chatbot automatically sends a daily summary of all orders requiring attention, including those pending scheduling, scheduled for delivery, out for delivery, and completed deliveries. This ensures logistics agents have full visibility of daily operational tasks.

2.2 **User Workspaces**

Desktop Web and/or Mobile Responsive Web interfaces, where users can login and interact with the System.

2.2.1 **Sales Agent Workspace**

**Features:**

**Sales Order Management:** Create, modify, and track sales orders.

**Order Lifecycle Overview:** Users are able to manage and have an overview of the statuses of the orders (draft, confirmed, fulfilled, billed).

**Output Documents Management:** View and manage the created output documents (e.g., invoice, DO, receipt).

**Customer Management:** View and manage the details of each client, including credit terms/limits recorded in MAIA

2.2.2 **Logistics Agent Workspace**

**Features:**

**Fullfillment Management:** Create, modify, and track Delivery notes.

**Order Lifecycle Overview:** Users are able to manage and have an overview of the statuses of the orders (draft, to Schedule, Scheduled, Out for Delivery, Delivered).

**Output Documents Management:** View and manage the created output documents (Pick List,Delivery Note(DO)).

**Inventory Management:** View and manage the details of each Product

2.2.3 **Integration & Data Sync with UBS (Accounting)**

To push and synchronise data with Holsen's UBS-based accounting/ERP, the following connectivity is required. Final method is subject to confirmation with the client's IT/vendor.

**Integration Method:**

**Preferred:** Secure file-based import/export (CSV/XML via SFTP) or ODBC extract if available.

**Alternate:** REST/SDK/API, if provided by the UBS vendor/module in use.

**Core Touchpoints:**

**Master Data (Read):** Customers, Items, Price Lists/Markup rules, Credit Terms/Limit, (optional) Inventory availability.

**Transactions (Write):** Sales Orders (from MAIA into UBS system).

**Status/Docs (Read/Write as applicable):** Delivery Order status, Invoice status/number, Receipts (AR).

**(If required later):** Returns/Credit Notes references.

**Dependencies:**

UBS hosting type (on-prem vs hosted VM), access path, and vendor contact for format/specs.

Sample exports: Customers, Items, Price/Discount rules to verify field mapping and transformations.

3\. **Customization & Extensions**

MAIA provides a baseline suite of standard features out-of-the-box. However, recognizing that every business has unique workflows, the system supports a broad range of customization and extension options. These are carefully scoped, estimated, and mutually agreed upon prior to execution, ensuring alignment with both business requirements and technical feasibility.

3.1 **Customisations**

3.1.1 **Operational Document Expansion & Compliance**

3.1.1.1 **Comprehensive Document Generation: Support the generation of all required operational and compliance documents, matching Holsen's specific layouts. This includes:**

Certificate of Analysis (COA)

C3 and C1 forms

Blanket POs

Consignment Notes (for outstation 3PLs like GMAX)

3.1.1.2 **Dynamic COA Management:**

Support standard (generic) COAs and customer-specific \"COA with details\".

Allow for customer-specific COA templates that can include details like expiry dates, manufacturing dates, DO numbers, invoice numbers, or modified column orders (e.g., \"Result\" before \"Specification\").

Ability to modify and issue COAs for both manufactured goods and imported trading goods.

3.1.1.3 **Compliance & Batch Data Mapping:**

Assign the correct compliance document (COA, C3, C1) based on customer and order-specific rules.

Ensure that critical tracking data (Batch Number, Lot Number, K1 Number) is captured during inventory intake and appears consistently across all related documents (Pick List, DO, Invoice, COA).

3.1.2 **Inventory & Blanket PO Management**

3.1.2.1 **Batch-Level Inventory Tracking:**

Track all inventory by Batch Number / Lot Number.

Manage inventory by specific packing sizes (e.g., 25kg bag, 50kg bag) as distinct SKUs.

Include a conversion calculator (KG-to-Bags) to assist in picking, as orders are placed in KG but picked in bags.

3.1.2.2 **Reserved vs. Available Stock Visibility:**

Provide a clear distinction between Total Stock and Available Stock.

\"Available Stock\" must reflect Total Stock minus all reserved quantities from confirmed Blanket POs to prevent overselling reserved stock.

3.1.2.3 **Blanket PO & C3-Specific Tracking:**

Digitize and track all Blanket POs, including their total quantity, remaining balance, and expiry.

Link specific deliveries (DOs) back to a specific Blanket PO to track utilization.

Manage and track C3-specific stock, which must be reserved only for the specific customers listed on the C3 import document.

3.1.3 **Multi-Level Approval Workflows**

3.1.3.1 **Price Check Approval:**

For commodity items with fluctuating prices, implement a workflow for sales agents to request a price from management. The approved price is then used in the quotation or sales order.

3.1.3.2 **Delivery Order (DO) Approval:**

All Sales Orders must be routed to a Logistics Approval queue.

The logistics approver must verify stock availability (checking against reserved/blanket stock) before approving the order for picking and DO creation.

3.1.3.3 **Invoice Approval:**

All generated invoices must be routed to an Accounts Approval queue for verification before being finalized and sent to the customer or submitted for e-invoicing.

3.1.3.4 **Payment Term Management & Approvals:**

Implement an approval workflow for changing a customer\'s payment terms.

Allow management to flag \"bad paymasters\" and switch their status to \"Cash Before Delivery\", which the system will enforce on future orders.

3.1.4 **Automation & Reminders**

3.1.4.1 **Automated Document Queuing:**

Automatically queue a draft DO for logistics approval after a Sales Order is confirmed.

Automatically queue a draft Invoice for accounts approval after a delivery is marked \"Completed\".

3.1.4.2 **Blanket PO & Stock Reminders:**

Notify sales and management when a Blanket PO is running low on quantity or approaching its expiry date.

3.1.4.3 **Trigger Low Stock Alerts based on two criteria:**

When inventory hits a pre-defined reorder threshold (safety stock).

When Available Stock (Total Stock - Reserved) is lower than the total outstanding Blanket Order commitments.

3.1.4.4 **Payment Chasing Automation:**

Automate payment reminders for outstanding invoices.

Generate and display a real-time \"Debtors List\" (based on UBS data) showing overdue accounts, which is currently a time-consuming manual task.

3.1.5 **Operational Enhancements & Analytics**

3.1.5.1 **Commodity Price Tracking:**

Create a module to track and log commodity price changes for management review and to correlate with market data (e.g., LME).

3.1.5.2 **Compliance & Batch Traceability Reporting:**

Provide enhanced reporting and dashboard visibility for C3/C1/K1 and batch number tracking to simplify audits and compliance checks.

3.1.5.3 **Reorder Assistance (Forecasting Support):**

Develop a reorder planning tool based on the management\'s current Excel model.

The tool will allow management to input a manual \"Estimated Pooling\" (Forecast) per item.

The system will use this forecast, along with actual delivered quantities (from DOs) and inbound shipment data, to provide a clear timeline of when new stock must be ordered.

4\. **Estimated Timelines**

**Phase 1: Base MAIA System (per Section 2: Product Specifications)**\
Deliver and go-live with the baseline MAIA features outlined in **Section 2**. Indicative activities and durations:

  ------------------------------- ---------------------------
  **Item**                        **Indicative Time Taken**

  Onboarding & Setup              1-2 weeks

  Configuration & Customisation   1-2 weeks

  User Training & UAT             1-2 weeks
  ------------------------------- ---------------------------

**Phase 2: Customization & Extensions (per Section 3)**

In addition to Phase 1, we will design, build, and release the agreed customisations listed in **Section 3**.

  --------------------------- ---------------------------
  **Item**                    **Indicative Time Taken**

  Design & Detailed Scoping   1-2 weeks

  Build & Integration         3-6 weeks

  User Training & UAT         1-2 weeks

  Go-Live & Hypercare         1-2 weeks
  --------------------------- ---------------------------

*Notes: All durations are indicative and depend on scope complexity and client responsiveness (approvals/clarifications typically within **2--3 working days** as outlined in Client Commitments).*

5\. **Commercial Structure**

**Pricing Model**: Subscription-based (monthly), with tiered pricing (Enterprise)

**Customization Fees**: Quoted separately on a time-and-materials or fixed-price basis

**Payment Terms**: Net 30 days (unless otherwise agreed)

**Renewal & Escalation**: Annual price review, inflationary adjustments, or additional usage-based charges

5.1 **One-off Development Cost**

+:--------------------------------------------+:-------------------+
| Item                                        | Price              |
+---------------------------------------------+--------------------+
| [Core]{.underline}                          | RM 48,000          |
|                                             |                    |
| Baseline Enterprise MAIA System             |                    |
|                                             |                    |
| Periodic System and Feature Updates         |                    |
|                                             |                    |
| Storage, Model Training, Ingestion          |                    |
+---------------------------------------------+--------------------+
| [Customizations]{.underline}                |                    |
|                                             |                    |
| Operational Document Expansion & Compliance |                    |
|                                             |                    |
| Inventory & Blanket PO Management           |                    |
|                                             |                    |
| Multi-Level Approval Workflows              |                    |
|                                             |                    |
| Automation & Reminders                      |                    |
|                                             |                    |
| Operational Enhancements & Analytics        |                    |
+---------------------------------------------+--------------------+
| **Grand Total**                             | RM 48,000          |
+---------------------------------------------+--------------------+

*\*Subject to AWS subsidisation. If that doesn\'t happen, Mindhive will provide all the **customizations (item 2)** above the RM48,000 base for free.*

5.2 **Payment Terms**

  ------------------------------------ ---------------- ------------------
  **Milestone**                        **Percentage**   **Price**

  Milestone 1 - Phase One Initiation   50%              RM 24,000

  Milestone 2 - UAT Sign Off           50%              RM 24,000
  ------------------------------------ ---------------- ------------------

6\. **Caveats & Exclusions**

**Third-Party Dependencies**: Mindhive is not liable for downtime/issues on external platforms (Google Sheet, etc.)

**Connectivity**: Client responsible for internet and device readiness

**Client-side Integrations**: Any unsupported third-party integrations outside approved scope

**Data Accuracy**: Responsibility lies with Client for correctness of provided data

7\. **Service Level Agreements (SLAs)**

7.1 **Mindhive Commitments**

**System Availability:** 99.5% uptime (excluding scheduled maintenance).

**Support Response Times:**

**Critical (P1):** Within 2 hours

**High (P2):** Within 8 hours

**Normal (P3):** Within 2 business days

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours.

**Data Protection:** Regular backups and defined disaster recovery commitments to safeguard client data.

**Lifetime Upgrades & Support:** Clients will continue to receive ongoing product upgrades, security enhancements, and support for the lifetime of their subscription, ensuring the platform remains current, secure, and aligned with evolving business needs.

7.2 **Client Commitments**

**User Access & Permissions:** Client to designate system administrators and enforce internal user policies.

**Data Provisioning:** Provide accurate, complete, and timely data uploads to enable smooth onboarding and continued operations.

**Timely Feedback:** Provide approvals, clarifications, and input during customization and implementation phases to avoid project delays.

**Compliance:** Adhere to licensing terms, security practices, and applicable regulations.

**Point of Contact:** Designate a primary point of contact (POC) for Mindhive communications. The client commits to responding to vendor queries, requests, or approvals within **2--3 working days**.

**Payments:** Ensure timely settlement of subscription fees, invoices, and any approved change request costs as per the agreed commercial terms.

8\. **Appendix**

8.1 **Delivery Model**

**Cloud-Hosted Platform:** MAIA is delivered securely from the cloud, ensuring continuous availability and ease of access without the need for local installations.

**Flexible Tiers:**

**Freemium:** Entry-level access with shared hosting and essential features.

**Pro:** Dedicated environment per company with advanced features.

**Enterprise:** Fully isolated environment with dedicated infrastructure, compliance support, and custom options.

**Deployment Regions:** Data hosting can be tailored to regional compliance or performance requirements (e.g., APAC, EU, US).

8.2 **System Interfaces**

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

8.3 **Core System Capabilities**

**Unified Business Foundation:** A robust digital core that consolidates sales, finance, inventory, logistics, and communications into one environment.

**Customizable Workflows:** Business processes can be tailored to reflect each company's policies and approval steps.

**Scalable Data Models:** Flexible structures accommodate both standardized records and unique, platform-specific requirements.

**Extensibility:** Companies can configure new rules, workflows, and integrations without disrupting existing processes.

8.4 **Security & Compliance**

**Authentication:** The system currently supports secure, role-based access with standard authentication. Additional options such as two-factor authentication (2FA) and single sign-on (SSO) will be introduced in future releases to further strengthen enterprise security.

**Data Isolation:** Company-level isolation; Enterprise clients get fully isolated database instances, ensuring data encryption in transit and at rest.

**Encryption:** TLS 1.2/1.3 in transit, AES-256 at rest.

**Compliance Roadmap:** SOC2, ISO27001, GDPR readiness, and customer-managed encryption keys (Enterprise).

8.5 **Availability & Performance**

**High Availability:** Built-in redundancy and automated failover to minimize downtime.

**Scalability:** Infrastructure expands automatically to handle seasonal sales peaks and large transaction volumes.

**Uptime Commitment:** 99.9% uptime SLA for Pro and Enterprise clients.

**Performance Monitoring:** Proactive system monitoring and optimization to maintain speed and reliability.

8.6 **Customization & Extensibility**

**Workflow Customization:** Clients may request adjustments to approval flows, SOPs, and operational processes. Such requests will be reviewed and delivered through formal change requests or variation orders, subject to feasibility and vendor assessment.

**Data Flexibility:** While standard business records are provided out-of-the-box, additional configurable fields or data models can be introduced upon request. These enhancements are subject to evaluation by the vendor's development team and may require separate approval.

**Branding Options:** Enterprise clients may request white-labeling of the system with their own branding and domains. Branding changes outside the standard scope will be handled as a variation order.

**Integration Points:** New integrations with external platforms (via APIs, event triggers, or modular connectors) can be developed upon request. The vendor will assess the complexity and impact of such integrations, which will be delivered through formal change requests.

9\. **Acknowledgement & Agreement**

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

**For Lean Giap**:

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

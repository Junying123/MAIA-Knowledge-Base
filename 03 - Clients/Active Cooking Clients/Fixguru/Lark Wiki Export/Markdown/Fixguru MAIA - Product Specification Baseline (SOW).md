**Fixguru MAIA - Product Specification Baseline (SOW)**

**Maia -- Baseline Product Specification Document**

The Services Agreement is made effective as of

  ------------- ------------ ---------------------------------------------------------------------------------------------------------------------------------------------------
  **BETWEEN**   The Vendor   **Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor.

  **AND**       The Client   **IAM Worldwide Sdn Bhd** ("Fixguru"), with its office located at 18931, Jalan Telok Gong, Kampung Telok Gong, 42000 Pelabuhan Klang, Selangor.
  ------------- ------------ ---------------------------------------------------------------------------------------------------------------------------------------------------

1\. **Introduction**

**About Maia**:

MAIA is a next-generation business platform that unifies sales, fulfillment, communications, logistics, and finance into a single ecosystem.

It is designed as a **modular, cloud-based solution** where each module can function independently yet integrates seamlessly into the wider MAIA environment. This ensures flexibility for smaller businesses while delivering enterprise-level scalability and control.

Our vision is to help organizations manage their entire sales and operational lifecycle from a single, intelligent system --- increasing efficiency, improving customer engagement, and enabling growth.

**Purpose of Document**

To establish the baseline specifications, service level commitments, and commercial framework for the deployment and ongoing use of Maia between the Vendor and the Client.

**Mutual Commitment**

This document sets out the expectations and obligations of both parties to ensure a successful business engagement.

2\. **Product Specifications**

MAIA is delivered as a **modular, cloud-based business platform** designed for enterprises and SMEs. Each module can function independently while also integrating seamlessly into the wider MAIA ecosystem.

The system is engineered with **scalability, configurability, and high availability** in mind, ensuring it can support both small businesses and enterprise-grade deployments handling hundreds of thousands of transactions per day.

**2.1 Delivery Model**

**Cloud-Hosted Platform:** MAIA is delivered securely from the cloud, ensuring continuous availability and ease of access without the need for local installations.

**Flexible Tiers:**

> **Freemium:** Entry-level access with shared hosting and essential features.
>
> **Pro:** Dedicated environment per company with advanced features.
>
> **Enterprise:** Fully isolated environment with dedicated infrastructure, compliance support, and custom options.

**Deployment Regions:** Data hosting can be tailored to regional compliance or performance requirements (e.g., APAC, EU, US).

**2.2 System Interfaces**

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

**2.3 Core System Capabilities**

**Unified Business Foundation:** A robust digital core that consolidates sales, finance, inventory, logistics, and communications into one environment.

**Customizable Workflows:** Business processes can be tailored to reflect each company's policies and approval steps.

**Scalable Data Models:** Flexible structures accommodate both standardized records and unique, platform-specific requirements.

**Extensibility:** Companies can configure new rules, workflows, and integrations without disrupting existing processes.

**2.4 Security & Compliance**

**Authentication:** The system currently supports secure, role-based access with standard authentication. Additional options such as two-factor authentication (2FA) and single sign-on (SSO) will be introduced in future releases to further strengthen enterprise security.

**Data Isolation:** Company-level isolation; Enterprise clients get fully isolated database instances, ensuring data encryption in transit and at rest.

**Encryption:** TLS 1.2/1.3 in transit, AES-256 at rest.

**Compliance Roadmap:** SOC2, ISO27001, GDPR readiness, and customer-managed encryption keys (Enterprise).

**2.5 Availability & Performance**

**High Availability:** Built-in redundancy and automated failover to minimize downtime.

**Scalability:** Infrastructure expands automatically to handle seasonal sales peaks and large transaction volumes.

**Uptime Commitment:** 99.9% uptime SLA for Pro and Enterprise clients.

**Performance Monitoring:** Proactive system monitoring and optimization to maintain speed and reliability.

**2.6 Customization & Extensibility**

**Workflow Customization:** Clients may request adjustments to approval flows, SOPs, and operational processes. Such requests will be reviewed and delivered through formal change requests or variation orders, subject to feasibility and vendor assessment.

**Data Flexibility:** While standard business records are provided out-of-the-box, additional configurable fields or data models can be introduced upon request. These enhancements are subject to evaluation by the vendor's development team and may require separate approval.

**Branding Options:** Enterprise clients may request white-labeling of the system with their own branding and domains. Branding changes outside the standard scope will be handled as a variation order.

**Integration Points:** New integrations with external platforms (via APIs, event triggers, or modular connectors) can be developed upon request. The vendor will assess the complexity and impact of such integrations, which will be delivered through formal change requests.

**2.7 Baseline Modules (Enterprise Edition)**

The following sections outline the baseline modules included in **MAIA Enterprise**, with their scope and specifications:

**Business Process Flow**

**User Workspaces**

**Internal Chatbot Assistants**

**Document Generation & Exports**

**Omnichannel Chat**

3\. **Module Specifications**

3.1 **Business Process Flow**

MAIA supports a unified business process flow designed to streamline multi-channel sales, order management, and fulfillment operations. The system clearly defines which actions are automated by the platform and which require user intervention, ensuring efficiency, accuracy, and role-based accountability.

3.1.1 **End-to-End Business Journey with MAIA**

The MAIA platform unifies the entire order-to-fulfillment lifecycle into a seamless flow. From capturing customer demand to completing delivery and payment reconciliation, every step is digitized, automated where possible, and connected across sales, operations, logistics, and finance teams.

3.1.1.1.1 **Step 1: Sales Order Creation**

A customer places an order through integrated sales channels (Shopee, Lazada, TikTok, Shopify, WooCommerce, WhatsApp chatbot, or B2B portal).

Sales agents can also create sales orders directly via the MAIA Sales Workspace.

MAIA automatically generates supporting documents during this stage:

**Quotation** → provided to the customer before confirmation.

**Sales Order** → created once the quotation is accepted or direct order placed.

3.1.1.1.2 **Step 2: Payment & Validation**

Payment options are shared automatically via integrated gateways (FPX, e-wallets, card payments, or manual bank transfer with proof upload).

MAIA validates payment status in real time or through proof-of-payment confirmation flows.

Once validated, the **Invoice** is automatically generated and synced with the accounting system (e.g., AutoCount).

3.1.1.1.3 **Step 3: Inventory & Stock Allocation**

The system checks stock availability using synced inventory rules and safety stock buffers.

Products are reserved or deducted from available stock depending on order confirmation.

Any low-stock or stock-out scenarios trigger system alerts for replenishment.

3.1.1.1.4 **Step 4: Fulfillment Preparation**

Operations teams receive a **Picking List** that consolidates all items to be prepared.

Once items are packed, a **Delivery Order (DO)** is generated.

Orders are then allocated to either:

**Internal logistics/driver pool** (self-fulfillment).

**3PL or platform-managed logistics** (e.g., Shopee Logistics, NinjaVan).

3.1.1.1.5 **Step 5: Dispatch & Delivery**

Drivers receive assigned delivery tasks via the MAIA Driver Workspace.

Proof of delivery (photo, signature, or receipt upload) is captured in real time.

Delivery status is automatically updated to "To Deliver", "In Progress", and "Completed".

3.1.1.1.6 **Step 6: Post-Fulfillment & Notifications**

Customers receive automated status notifications through integrated message channels (WhatsApp, Telegram, Email, SMS).

MAIA sends reminders for recurring subscriptions, follow-ups for unpaid invoices, and notifications for stock or delivery issues.

**Receipt & Payment Voucher** records are finalized in the system.

3.1.1.1.7 **Step 7: Accounting & Reconciliation**

All finalized documents (Invoices, Receipts, Credit Notes, Payment Vouchers) are synced to AutoCount during nightly EOD sync.

Finance teams can track outstanding payments, reconcile bank transfers, and manage credit terms directly from the accounting integration.

3.2 **Business Process Tracking**

3.2.1 **Sales Channel Onboarding**

MAIA provides seamless integration with multiple sales platforms, allowing businesses to centralize operations across different channels.

**Supported Channels**: Shopee\*, Lazada\*, TikTok\*, Shopify\*, WooCommerce, B2B, and other web-based platforms.

**Onboarding Steps**:

**Company Setup**: Configure company details including name, address, business registration number/tax ID, logo, default currency, timezone, invoice configurations, and optional accounting integrations.

**Sales Channel Setup**: Connect and configure multiple accounts per platform.

Platform selection (Shopee, Lazada, etc.)

Account nickname and login method (API key / OAuth)

Sync rules for orders, inventory, and customers (real-time or scheduled).

SKU mapping and alignment.

**Outlet Mapping**: Each connected sales channel is treated as an "outlet" within MAIA.

Assign outlet name/code, business unit, operating hours, and cutoff times.

Configure stock location mapping and fulfillment logic (self-fulfill, 3PL, or platform logistics).

  ----------------------------------------------------------------------------------
  Note: Sales channel support for Shopee and Lazada is planned for future releases

  ----------------------------------------------------------------------------------

3.2.2 **Customer Communication Channels**

To ensure consistent interaction with customers, MAIA allows configuration of multiple communication platforms.

**Supported Channels**: WhatsApp, Telegram, SMS, Email, in-app chat.

**Configuration**:

Connect via integrations (e.g., WhatsApp Cloud API, Twilio).

Define default notification templates (e.g., order confirmed, out for delivery).

Establish escalation rules to live agents for unresolved cases.

3.2.3 **User & Role Management**

Role-based access ensures accountability and proper segregation of duties.

**User Setup**: Add team members with defined roles.

**Roles Supported**: Admin, Order Manager, Fulfillment Staff, Driver.

**Access Control**: Configure outlet/company access rights per role.

3.2.4 **Product & Inventory Setup**

Centralized product and inventory configuration ensures consistency across all connected channels.

**Product Import**: From ERP system of record (e.g., ERPNext) or via reverse sync from channels.

**Inventory Sync Rules**: Define outlet sync rules and safety stock parameters.

**SKU Linking**: Map platform SKUs to internal SKUs for accurate reconciliation.

3.2.5 **Logistics & Fulfillment**

MAIA supports both self-managed fulfillment and external integrations.

**Self-Fulfillment**:

Assign internal driver pools.

Enable proof-of-delivery (POD) and proof-of-payment (POP) uploads.

**3PL Integrations**: Connect to external providers such as NinjaVan or J&T.

**Platform Fulfillment**: Support "Fulfilled by Platform" services (Shopee, Lazada) and third-party warehouses.

3.2.6 **Payments & Accounting**

Payment collection and financial reconciliation are streamlined through integration and automation.

**Payment Gateway Integration**: Connect to FPX, e-wallets, or card processors to collect payout and reconcile reports.

**Bank Transfer Handling**: Manage manual bank transfers with proof-of-payment uploads and validation workflows.

**Invoicing Rules**: Automatically generate invoices based on sales channel, with flexible formats and payment terms.

**Accounting Integration**: Sync invoices, receipts, and payment data with accounting systems such as AutoCount.

3.3 **User Workspaces**

MAIA provides **role-based workspaces** accessible via desktop web and mobile-responsive web interfaces. Each workspace is designed to streamline tasks for specific user groups, ensuring clarity, accountability, and efficiency across the sales and fulfillment lifecycle.

3.3.1 **Sales Order Management**

The **Sales Management** module consolidates both **Sales Manager oversight** and **Sales Order execution**, providing a comprehensive workspace for managing the entire sales cycle. It empowers sales agents to handle day-to-day order activities while enabling managers to monitor performance, enforce financial accuracy, and ensure customer engagement standards are met.

**Features**

**Sales Order Management**

Create, modify, and track sales orders across their full lifecycle (draft, confirmed, fulfilled, billed).

Integration with inventory and delivery modules to ensure real-time accuracy.

Unified management of quotations, invoices, and credit-related workflows.

**Sales Oversight & Control**

Oversight of agent performance and customer interactions.

KPI dashboards for pipeline conversion, outstanding invoices, and fulfillment SLAs.

Approval workflows for special cases, including discounts, refunds, or escalations.

Outputs

A **unified view** of all inbound sales orders across multiple platforms.

**Consolidated performance dashboards** giving managers visibility into sales operations.

**Control mechanisms** that enforce financial accuracy and ensure consistent customer engagement.

3.3.2 **Fulfillment Management**

The **Fulfillment Management** workspace is designed for logistics and operations teams, focusing on the preparation, dispatch, and delivery of customer orders. It provides flexibility to support multiple fulfillment models, ensuring scalability for both internal operations and external partnerships. In addition to managing deliveries, this workspace also integrates inventory controls, enabling efficient stock handling and order fulfillment.

**Features**

**Delivery & Dispatch**

Delivery note (Delivery Order) generation.

Proof of delivery capture (photo, e-signature, uploaded receipt).

Allocation of orders to drivers and logistics providers.

Status tracking: "to deliver", "to fulfill", "completed".

**Fulfillment Models**

**Self-Fulfillment:** Orders managed with internal drivers and company-owned vehicles.

**3rd Party Fulfillment:** Orders dispatched via external logistics providers, enabling extended coverage (e.g., Fulfilled by Shopee, external warehouses, or 3PLs).

**Inventory Management**

Real-time stock validation before order confirmation.

Automatic stock deduction once orders are finalized and assigned.

Picking List generation for warehouse staff to guide item selection and packing.

Safety stock rules and alerts when items are running low.

Syncing inventory channels to prevent overselling.

**Fulfillment Oversight**

Delivery Checklist: Ensures drivers verify items against the order before dispatch.

Exception Handling: Notifications for shortages, mismatches, or failed deliveries.

Integrated dashboards to track fulfillment performance, pending deliveries, and SLA adherence.

**Outputs**

**Delivery and fulfillment dashboards** for operations teams, giving visibility into live orders, dispatch progress, and proof-of-delivery records.

**Inventory reconciliation reports** linking stock movement with fulfilled orders.

**Exception reports** highlighting failed or delayed deliveries, missing items, or stock variances.

3.3.3 **System Administration & Integrations**

**Features**:

Company-level administration (roles, permissions, policies).

Integration APIs for ERPNext, CRM, accounting, and third-party platforms.

Multi-company, multi-channel management with configurable permissions.

**Outputs**: Secure and scalable foundation layer for enterprise operations.

  ------------------ --------------- --------------- --------------------------------------------------------------------------------- --------------------------------
  **System**         **Direction**   **Frequency**   **Data Objects**                                                                  **Notes**

  Maia ⇆ AutoCount   Push/Pull       Every EOD       Quotes, Customers, Products, Invoices, Credit Notes, Receipts, Payment Vouchers   Master data lives in AutoCount

  Chatbot → Maia     Push            Real-time       Sales Orders, Delivery note(DO), Delivery Trip, Invoice status, Quotation         Full order creation via bot
  ------------------ --------------- --------------- --------------------------------------------------------------------------------- --------------------------------

3.3.4 **User Management**

The system includes a structured user management framework designed to streamline onboarding, enforce role-based access, and ensure secure handling of user data. This module provides the foundation for organizing and controlling access across different operational roles within the platform.

**New User Onboarding**

Users are registered through a standardized onboarding process.

Mandatory information captured during registration:

Full Name

Contact Number

Email Address

Data is validated and securely stored to maintain consistency across the system.

**User Roles Assignment**

Once a user is created, role assignment ensures they can only access functions relevant to their responsibilities.

Roles currently available in the system include:

**Management:** Full system visibility, reporting dashboards, and administrative controls.

**Sales Agent:** Access to customer records, order creation, invoices, and payment handling.

**Logistics:** Access to delivery orders, trips, and warehouse operations.

**Driver:** Access to delivery trip management, proof-of-delivery uploads, and real-time updates.

3.3.4.1 **Company Profile Management**

The **Company Profile Page** centralizes all company-level data, ensuring compliance, operational alignment, and accurate system configuration across subsidiaries, outlets, and channels.

3.3.4.1.1 **General Information**

Company ID (system-assigned, non-editable)

Company Name, Logo, Website/Domain

Phone Numbers (main line, hotline) and Email (general/support)

Description/About Us section

Category/Tags (e.g., Policies, SOPs, Training, FAQ)

3.3.4.1.2 **Registration & Compliance**

Business Registration Number / License ID

Tax Identification Number (TIN / VAT / GST ID)

Legal Entity Type (LLC, Partnership, Sole Proprietorship)

Year Established / Incorporation Date

3.3.4.1.3 **Location & Operations**

Headquarters, branch, and warehouse addresses

Outlet details (name, code, address, geotag, operating hours, assigned contact)

Status: Active / Closed

3.3.4.1.4 **Contacts**

Primary Contact Person

Multiple contacts supported (e.g., Finance, Sales, Support)

3.3.4.1.5 **Application-Specific Configurations**

Default Payment Methods (bank transfer, card, e-wallets)

Default Shipping/Delivery Preferences

Order Approval Workflow (auto/manual approval rules)

3.3.4.2 **Company Business Profile**

Annual Revenue (range -- optional, for analytics)

Number of Employees

Market/Region of Operation (domestic or international)

Preferred Currency

3.3.4.2.1 **Subsidiaries**

Subsidiary Name and ID (system-assigned)

Registration & Compliance details

Address, Contacts, Status (Active/Closed)

3.3.4.2.2 **Outlets (Retail)**

Outlet Name and ID (system-assigned)

Location (address, geotag, map link)

Assigned Contact Person & Phone

Operating Hours and Status (Active/Closed)

3.3.4.2.3 **POS Information (per Outlet)**

POS Provider and Terminal IDs

Supported Payment Methods (cash, card, QR)

Receipt Configuration (logo, headers/footers, tax ID)

Integration Status: Active / Disabled

3.3.4.3 **Company Sales Channels**

Channel Name (Shopee, Lazada, Amazon, Shopify, etc.)

Channel Type (Marketplace / Storefront)

API Credentials (key, secret, webhook URL)

Sync Settings (orders, inventory, customers)

Status: Active / Inactive

3.3.4.4 **Company Billing & Payment**

3.3.4.4.1 **Billing Information**

Billing ID (system-assigned, linked to Payex)

Billing Address (default = HQ address, editable)

Invoice Recipient (person/department)

Invoice Email Address and Billing Contact Number

3.3.4.4.2 **Payment Methods**

Default and stored accounts (bank, corporate card, e-wallets)

Preferred Payment Currency

Payment Terms (Net 30, Net 60, Due on Receipt, etc.)

**Invoices & Statements**

Invoice Frequency (monthly, quarterly, annual)

Delivery Method (email, portal download, both)

Invoice Format (PDF, E-invoice, API integration)

Tax Settings (VAT/GST, exemptions)

**Approvals & Controls**

Order Approval Workflow (auto/manual)

Spending Limit Rules (per transaction, monthly cap)

Role-Based Approval Matrix (custom approval levels)

**Payex Auto-Configuration**

Payex account automatically provisioned once company details are complete

Defaults include currency payment, tax handling, and payment method

Users may override settings via Billing & Payments configuration

3.4 **Internal Chatbot Assistants**

The platform provides dedicated **AI-powered assistants** for different roles within the sales and fulfillment cycle. Each assistant is tailored to streamline daily operations, reduce manual effort, and ensure real-time synchronization with the central ERP system.

3.4.1 **Sales Agent Assistant**

The Sales Agent Assistant is designed to support field and inside sales teams by automating key sales tasks and providing a consolidated workspace.

**Features**:

Quotations,Sales Order, invoices, receipts creation.

Payment collection tracking (COD, transfer confirmation).

Sales dashboard (performance, pipeline, outstanding tasks).

Configurable reminders (e.g. payment follow-up, order status).

**Outputs**: Productivity workspace for field and inside sales teams.

3.4.2 **Logistics Agent Assistant**

The Logistics Agent Assistant optimizes delivery management by integrating route planning and real-time order status updates into a single operational workspace.

**Features**:

Logistic workspace for Delivery task assignment.

Route planning & management

Status updates synced in real-time with fulfillment module.

**Outputs**: Productivity workspace for Operation Management

3.4.3 **Driver Assistant**

The Driver Assistant is designed to support delivery staff, focusing on delivery management and proof-of-delivery capture.

**Features**:

Driver workspace for delivery management.

proof-of-delivery uploads.

Status updates synced in real-time with fulfillment module.

**Outputs**: Driver-level task lists and proof-of-delivery repository.

3.5 **Document Generation & Exports**

The system supports comprehensive **document generation and export capabilities** to streamline operational, financial, and logistics workflows. Each document is automatically generated based on user actions within the ERP or chatbot interface, ensuring consistency, accuracy, and compliance.

**Supported Document Types**

**Sales**

**Quotation:** Generated during the order capture stage, providing customers with pricing and terms before confirmation.

**Sales Order:** Created once a quotation is accepted or a direct order is placed, serving as the official customer order record.

**Invoice:** Issued after order confirmation, reflecting final amounts, taxes, discounts, and payment terms.

**Credit Note:** Produced in cases of returns, adjustments, or discounts, ensuring accurate financial reconciliation.

**Receipt:** Provided once payment is confirmed, serving as official proof of payment.

**Payment Voucher:** Used to document outgoing payments, particularly supplier or operational disbursements.

**Logistics**

**Delivery Note :** Generated for logistics, detailing items to be delivered, quantities, and delivery instructions.

**Picking List:** Shared with warehouse teams to guide item selection and packing processes.

**Delivery Checklist:** Provided to drivers to verify that all items in an order are packed and delivered correctly. This serves as a final validation tool, ensuring completeness and reducing the risk of errors during dispatch.

**Document Customization**

All system-generated documents can be customized to align with company standards and branding guidelines. This flexibility ensures professional presentation while meeting compliance requirements.

**Layout**: Configurable structure for headers, footers, tables, and sections to match organizational needs.

**Document Naming**: Custom naming conventions (e.g., prefixes, outlet codes, timestamps) for easier tracking and archiving.

**Visual Identity**: Branding options such as custom colors, fonts, and company logos applied consistently across all document types.

**Company Information**: Mandatory details embedded in all documents, including:

Registered Company Name and Address

SSM Registration Number and Tax Identification Number

Contact Information (Phone, Email, Website)

**Compliance-Ready**: Ensures all generated documents adhere to legal, tax, and audit standards relevant to the business and regulatory authorities.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Note on Document Naming Conventions**\
  In practice, the same type of document may be referred to by different names depending on the company, industry, or regional standards. MAIA supports flexible document naming to align with client terminology and ensure smooth adoption across teams.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3.6 **Omnichannel Chat**

The platform supports a robust **omnichannel communication module**, enabling users to interact with MAIA seamlessly across multiple digital channels. This ensures consistent engagement, faster responses, and unified tracking of conversations, regardless of where users reach out.

**Supported Channels**

**WhatsApp**

**Email**

**Shopee**

**Telegram**

**Instagram**

**Messenger (Facebook)**

**Lazada**

**TikTok**

**3.6 Account system intergration**

MAIA provides seamless integration with third-party accounting systems, ensuring that all financial records are legally compliant and aligned with statutory requirements such as **e-invoicing**. These integrations reduce manual data entry, eliminate reconciliation errors, and ensure finance teams maintain a single source of truth across operational and accounting platforms.

**Supported Integrations**

SQL Accounting

AutoCount Accounting

Other accounting platforms (upon request and subject to connector availability)

**Data Synchronization Scope**\
The following financial and master data objects are automatically pushed from MAIA into the connected accounting system:

**Invoices** -- Issued for completed sales orders, including tax and discount details.

**Credit Notes** -- Generated for returns, adjustments, or customer rebates.

**Receipts** -- Proof of incoming payments across all payment methods (e.g., FPX, e-wallets, bank transfers).

**Payment Vouchers** -- Outgoing payments for suppliers, operational expenses, or disbursements.

**Debit Notes** -- Issued where additional charges or corrections are required.

**Customer Records** (optional) -- Customer details synchronized to support debtor management and e-invoicing requirements.

**Product Master Data** -- Product catalog synchronization, including:

Product name and code

Product quantity updates (real-time or scheduled sync)

**Compliance & Reporting**\
By integrating directly with accounting systems, MAIA ensures that all records generated within the operational workflow are automatically transferred for financial reporting, tax compliance, and statutory audits. This reduces delays in month-end closing and improves accuracy in financial reconciliation.

4\. **Service Level Agreements (SLAs)**

4.1 **Mindhive Commitments**

**System Availability:** 99.5% uptime (excluding scheduled maintenance).

**Support Response Times:**

**Critical (P1):** Within 2 hours

**High (P2):** Within 8 hours

**Normal (P3):** Within 2 business days

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours.

**Data Protection:** Regular backups and defined disaster recovery commitments to safeguard client data.

**Lifetime Upgrades & Support:** Clients will continue to receive ongoing product upgrades, security enhancements, and support for the lifetime of their subscription, ensuring the platform remains current, secure, and aligned with evolving business needs.

4.2 **Client Commitments**

**User Access & Permissions:** Client to designate system administrators and enforce internal user policies.

**Data Provisioning:** Provide accurate, complete, and timely data uploads to enable smooth onboarding and continued operations.

**Timely Feedback:** Provide approvals, clarifications, and input during customization and implementation phases to avoid project delays.

**Compliance:** Adhere to licensing terms, security practices, and applicable regulations.

**Point of Contact:** Designate a primary point of contact (POC) for Mindhive communications. The client commits to responding to vendor queries, requests, or approvals within **2--3 working days**.

**Payments:** Ensure timely settlement of subscription fees, invoices, and any approved change request costs as per the agreed commercial terms.

5\. **Customization & Extensions**

MAIA provides a baseline suite of standard features out-of-the-box. However, recognizing that every business has unique workflows, the system supports a broad range of **customization and extension options**. These are carefully scoped, estimated, and mutually agreed upon prior to execution, ensuring alignment with both business requirements and technical feasibility.

5.1 **Baseline Scope**

Delivery of **standard MAIA features** as defined in the core specifications.

Role-based workspaces (Sales, Logistics, Driver, Management).

Integration-ready foundation for ERP, CRM.

5.2 **Business Process flow**

**Standard Sales Document Flow (Ideal Flow):**

MAIA is able to\
**Quotation → Sales Order (SO) → Proforma → Delivery Note (DN/DO) → Invoice → Credit Note (if needed)**

![](../Fixguru MAIA - Product Specification Baseline (SOW)_assets/media/image1.jpeg){width="5.75in" height="2.7083333333333335in"}

**Order-Centric Record Grouping**

MAIA adopts an **order-centric record grouping model**, where the **Sales Order acts as the central record**. All related documents are linked to the SO, providing:

**Traceability**: A clear audit trail from quotation to invoice, ensuring every action is tied to a single order reference.

**Editability During Proforma Stage**: By grouping related documents under the SO, any changes made at the **proforma invoice stage** remain easy to edit and manage. This allows teams to refine order details (quantities, pricing, discounts) before finalization.

**Final Invoice Accuracy**: The final invoice will always reflect the last agreed-upon version, minimizing errors and disputes.

**Invoice Traceability**\
Every invoice is linked directly back to its originating Sales Order (SO). This means stakeholders can always trace invoices to the specific order they belong to, even in cases where **one order may generate multiple invoices** (e.g., partial deliveries or staged billing).

**Refund Handling**:

**Payment Voucher**: Used to record and track refunds or return transactions giving finance team visibility into adjustments.

**Credit Note**: Only issued **after the invoice is finalized**, ensuring compliance with accounting standards and maintaining accurate financial reporting.

List of Documents under 1 **Sales Order**

+:--------------------------------------+:---------------------------------+
| Type of documents under 1 Sales order |                                  |
+---------------------------------------+----------------------------------+
| Sales Order                           | Quotation                        |
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
|                                       | Payment Voucher                  |
+---------------------------------------+----------------------------------+

5.3 **Customization Options**

**API Integrations**

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

**Custom Box Quotation Module** designed based on IAM's Excel models:

RSC Sheet (calculation logic provided by IAM Worldwide Sdn Bhd).

**\[Custom Made - RSC 1024 (1).xlsx\]**

Diecut Sheet (calculation logic provided by IAM Worldwide Sdn Bhd).

**\[Custom Made - Diecut 0825.xlsx\]**

5.4 **Approval Processes**

MAIA incorporates a robust approval workflow engine to safeguard compliance and ensure management oversight across critical business processes. Approvals are not tied to individual users but instead operate on a **role-based model**, meaning any user assigned to the designated role group can perform the required approval. This ensures flexibility, accountability, and continuity even if specific users are unavailable.

Quotation / Sales Order approval when selling price falls below minimum threshold.

Management approval required if a customer approaches their credit limit prior to creating a Sales Order.

Delivery Note(DO) approval required if the Delivery Note or Deliver Note items differ from the original Sales Order.

Delivery Note(DO) Approval required if the order is Cash payment

5.5 **Custom Notification**

Automated reminders to drive timely actions and improve operational efficiency:

Stock availability notifications.

  ---------------------- ------------------------------------------------ ----------------------------------------------
  Notifications          Scenarios                                        Triggers

  low stock product      Notification trigger when item is low in stock   When item is at the lowest minimum threshold

  out of stock product                                                    

  back in stock                                                           

  Extra stock                                                             
  ---------------------- ------------------------------------------------ ----------------------------------------------

Delivery status updates.

  ------------------ ------------------------------------------------------
  Status             Status sent to whom ?

  Packing            *(eg . Sales representative, Logistics, Management)*

  Packed             

  Schdeuled          

  loading            

  Out for delivery   

  Delivered          
  ------------------ ------------------------------------------------------

Follow-up reminders for quotations.

Alerts if Sales Order is not converted to DO within 7 days.

Daily reminders ?

Customer inactivity reminders (no orders for 30, 60, 90 days).

  ----------- ------------------------- ----------------------------- -----------------------
  How often   Triggers                  Who receives notification ?   Is it user specific ?

  30 days     *Eg. Event or Schedule*   *eg.Sales agent*              *Eg. Yes*

  60 days                                                             

  90 days                                                             
  ----------- ------------------------- ----------------------------- -----------------------

Outstanding payment reminders

Credit term

  ----------------------------------------------------------- ------------------------- ------------------ ----------------------------- -----------------------
  Status                                                      Triggers                  Scenarios          Who receives notification ?   Is it User Specific ?

  Customer outstanding payments nearing end of Credit terms   *Eg. Event or Schedule*                      *eg.Sales agent*              *Eg. Yes*

                                                                                                                                         
  ----------------------------------------------------------- ------------------------- ------------------ ----------------------------- -----------------------

Credit terms and credit limit alerts for customers nearing their deadline and almost exceeding their limit.

Sales team reminders to send a copy of invoice to customers once delivery is completed (and invoice is not undisputed).

5.6 **Inventory Management (Baseline & Integration)**

**Objective:** Ensure accurate stock availability throughout the order-to-fulfillment cycle, while keeping accounting stock authoritative in AutoCount (or integrated systems).

**Stock Tracking Steps**

**SKU Synchronization:** Sync **unique SKUs** (catalog/inventory master) from the Warehouse Management System (WMS) or accounting system into MAIA.

**Quantity Ownership:** MAIA **does not maintain stock count** as the system of record; quantities remain authoritative in AutoCount/WMS.

**Real-Time Validation:** During SO/DN creation, MAIA **validates stock quantity** against AutoCount (or WMS) to prevent oversell.

**Delivery Note Creation:** Delivery note (DO) issuance **reflects into AutoCount immediately** (created on the spot) to keep inventory movement aligned.

**Notes**

Day-to-day **stock movements are tracked through orders** in MAIA for operational visibility; **replenishment/restock** is **performed in AutoCount/WMS** and can be pulled into MAIA via sync.

Optional enhancements: safety stock rules, low-stock alerts, channel allocation rules, and per-outlet availability displays.

6\. **Estimated Timelines (Indicative)**

**Onboarding & Setup**: 2--4 weeks

**Configuration & Customisation**: 4--8 weeks (depending on scope)

**User Training & UAT**: 2 weeks

**Go-Live & Hypercare**: 1--2 weeks\
*(These are indicative durations, actual timelines depend on client responsiveness, scope, and complexity.)*

7\. **Commercial Structure**

**Pricing Model**: Subscription-based (monthly/annual), with tiered pricing (Freemium / Pro / Enterprise)

**Customization Fees**: Quoted separately on a time-and-materials or fixed-price basis

**Payment Terms**: Net 30 days (unless otherwise agreed)

**Renewal & Escalation**: Annual price review, inflationary adjustments, or additional usage-based charges

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

8\. **Caveats & Exclusions**

**Third-Party Dependencies**: Mindhive not liable for downtime/issues in external platforms (Shopee, Lazada, etc.)

**Connectivity**: Client responsible for internet and device readiness

**Client-side Integrations**: Any unsupported third-party integrations outside approved scope

**Data Accuracy**: Responsibility lies with Client for correctness of provided data

9\. **Out of Scope**

Hardware procurement or on-premise infrastructure

Business process re-engineering outside agreed workflows

Training beyond the agreed initial program

Ongoing management of third-party accounts unless explicitly contracted

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

**For \[Client Name\]**:

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

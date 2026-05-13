---
owner: Gareth
status: draft
last_reviewed: 2026-05-04
client: JDX
lark_url:
---

# SOW — MAIA for JDX Tea (九鼎香)

The Services Agreement is made effective as of [TBC].

| BETWEEN | The Vendor | **Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor. |
|---|---|---|
| AND | The Client | **JDX Gift and Food Sdn. Bhd.** ("JDX"), with its office located at 203, Jalan 1, Taman Perusahaan Ehsan Jaya, Kepong, 52100 Kuala Lumpur, Malaysia. |

---

# 1. Executive Summary

JDX Gift and Food Sdn. Bhd. (JDX Tea / 九鼎香) is a Kepong-based distributor of premium Chinese teas, specialty foods, and seasonal gift hampers. The company's primary revenue engine is seasonal B2B corporate hamper orders — placed by corporate buyers during Chinese New Year, Hari Raya, and Mooncake Festival — each often requiring delivery to 10–50+ individual recipient addresses with specific customisation instructions per order.

Today, the entire order-to-delivery cycle is managed manually across WhatsApp threads, SQL Accounting, and Excel. Sales coordinators capture customisation remarks and customer preferences (ribbon colour, greeting card wording, item substitution, price tag on/off, preferred delivery timing or delivery handling notes) in WhatsApp but must re-enter those instructions at every downstream step — pro forma invoice, invoice, and each individual delivery note per recipient. There is no consolidated view of payment status, delivery progress, or order fulfilment across sales, finance, and logistics.

Beyond the seasonal hamper business, JDX also operates year-round consignment kiosks at AEON hypermarket locations. Daily stock reporting, monthly consignment sales orders, and end-of-month AEON billing are currently reconciled manually from promoter-supplied figures across multiple kiosk locations.

This SOW defines a phased implementation of MAIA that introduces:

- a B2B hamper order flow with customisation remarks and customer preferences captured once and propagated automatically through pro forma invoice, invoice, and all delivery documents — no retyping required
- multi-drop delivery management — one sales order split into multiple DOs per recipient address via WhatsApp chat, with delivery status tracked per drop
- payment matching and pro forma → invoice conversion with receipt generation via WhatsApp
- SQL Accounting integration for master data sync and transaction push-back for accounting compliance
- a consignment kiosk operations layer for AEON locations covering daily stock reporting, monthly cumulative sales orders, and consolidated end-of-month billing

The current documented implementation investment is **RM 27,500**, subject to final commercial confirmation, payment terms, and dependency validation.

## 1.1 Enterprise Baseline Modules

The following sections outline the baseline modules included in the MAIA implementation for JDX:

- Internal Chatbots
- User Workspaces
- Sales Document Lifecycle
- Integration and Data Sync with SQL
- Delivery Order Management and Multi-Drop Delivery

# 2. Product Specifications (Phase One)

The following section highlights the baseline MAIA modules that JDX will receive first. Each module is designed with scalability, configurability, and high availability in mind, while fitting into JDX's current seasonal hamper distribution process across WhatsApp, SQL Accounting, and Excel.

Phase One focuses on JDX's seasonal B2B hamper distribution business — the highest-revenue, highest-pain workflow — covering pro forma invoice creation with customisation remarks and customer preferences, payment matching, delivery order generation, and multi-address delivery tracking.

## 2.1 Internal Chatbots

### 2.1.1 Sales Agent Chatbot

The Sales Agent Chatbot serves as a WhatsApp-based assistant for JDX's sales coordinators to capture orders, generate pro forma invoices, and manage payment and invoicing without logging into the MAIA web application.

- **Platform:**
  - WhatsApp

- **Features:**
  - **Pre-Order Inventory Check:** Check available item quantities before confirming an order.
  - **Sales Order Creation:** Create sales orders via natural language — specify customer name, items, quantities, and customisation remarks or customer preferences (ribbon colour, greeting card wording, item substitution, delivery date, price tag on/off, preferred delivery timing or handling notes) directly in WhatsApp.
  - **Pro Forma Invoice Generation:** Generate and return the pro forma invoice PDF to the sales coordinator in WhatsApp after order creation, ready to forward to the customer.
  - **Invoice Conversion:** Convert sales order to invoice via chat once payment is confirmed.
  - **Receipt Creation:** Attach customer payment slip and create receipt directly in WhatsApp.
  - **Order Status Queries:** Query sales order status at any time via chat.
  - **Next-Step Reminders:** Receive reminders when an order is ready for logistics follow-up.

Notes:

- Chatbot interactions are natural language, not rigid command keywords.
- All chatbot-initiated actions are subject to the same data validation as the web workspace.

### 2.1.2 Logistics Agent Chatbot

The Logistics Agent Chatbot serves as a WhatsApp-based assistant for JDX's logistics coordinators to create delivery orders, manage multi-drop splits, and update delivery status without logging into the MAIA web application.

- **Platform:**
  - WhatsApp

- **Features:**
  - **Delivery Order Creation:** Create Delivery Orders via natural language — specify the sales order reference, quantities, and delivery date in WhatsApp. All customisation remarks (ribbon colour, greeting card wording, item substitution, price tag on/off) are inherited automatically from the source sales order.
  - **Multi-Drop Splitting:** Split one sales order into multiple DOs for multi-address deliveries via chat. Specify quantities per drop in natural language. Remaining unfulfilled quantity stays on the sales order after each split.
  - **Delivery Status Queries:** Query live delivery status by category (Draft, To Schedule, Scheduled, Success) at any time via chat.
  - **Invoice-Ready Alerts:** Receive alerts when an invoice is ready for DO creation.
  - **Status Updates:** Mark a DO as delivered (Success), reschedule the delivery date, or mark as failed via chat.
  - **Delivery Delay Alerts:** Receive alerts when a DO has not been scheduled within a defined threshold.

Notes:

- Ad-hoc delivery address handling (recipient addresses not pre-registered as customer records) must be confirmed by the tech team before multi-drop delivery is committed to Phase One scope.

## 2.2 User Workspaces

Desktop web interfaces where users can log in and interact with the system based on their role and permissions.

### 2.2.1 Sales Workspace

- **Features:**
  - **Pro Forma Invoice Creation:** Create sales order in MAIA with a remarks text area to capture customisation instructions and customer preferences (ribbon colour, greeting card wording, item substitution, delivery date, price tag on/off, preferred delivery timing or handling notes). MAIA generates a pro forma invoice PDF for the customer from the sales order record.
  - **Customer Preference Visibility:** Store customer-specific fulfilment preferences on the customer record where applicable, and surface them to the sales coordinator during order creation for reference.
  - **PDF Document Generation:** Generate all sales documents as downloadable PDFs — Pro Forma Invoice, Sales Order, Invoice, Credit Note, Receipt.
  - **Daily Digest:** View unclosed sales orders, pending payment confirmation, and outstanding invoices.

### 2.2.2 Finance Workspace

- **Features:**
  - **Pro Forma → Invoice Conversion:** One-click conversion from pro forma to invoice once payment is confirmed. Invoice inherits all line items, pricing, and customer details from the pro forma.
  - **Receipt Creation:** Record the customer's payment against the open pro forma and issue an official receipt.
  - **Invoice Visibility:** View and manage all invoices, outstanding balances, and conversion status across all orders.
  - **Approval Tracking:** Approve or hold orders pending payment confirmation before DO creation proceeds. Logged with timestamp and user.

### 2.2.3 Logistics Workspace

- **Features:**
  - **Delivery Order Creation:** DO created from the sales order once the finance staff has issued the invoice. All customisation remarks propagate automatically — no retyping required.
  - **Multi-Drop Delivery:** One sales order generates multiple DOs per drop, each linked to the source sales order. Remaining unfulfilled quantity stays on the sales order for subsequent DOs.
  - **Delivery Date Scheduling:** Each DO has its own delivery date set independently.
  - **Delivery Status Tracking:** Each DO tracks its own status — Draft → To Schedule → Scheduled → Success (or Failed). All DOs for an order are viewable in one place.
  - **Output Documents:** Delivery Note (DO)

### 2.2.4 Management Workspace

- **Features:**
  - **Operational Visibility:** View sales orders, delivery status, and outstanding accounts across the full operation.
  - **Outstanding Account Visibility:** Review debtor summaries and outstanding balances.
  - **Role-Based Oversight:** View cross-functional records according to approved management access rights.

Notes:

- Final workspace access permissions and role boundaries to be confirmed with JDX before implementation.

## 2.3 Sales Document Lifecycle

JDX's B2B hamper order lifecycle runs from pro forma invoice creation through payment confirmation and invoice issuance, with customisation remarks and customer preferences captured once and propagated to all downstream documents.

- **Current Sales Flow:**
  - Customer places seasonal hamper order through WhatsApp or email.
  - Sales coordinator prepares pro forma invoice with customisation remarks and any customer-specific preferences.
  - Customer confirms and makes payment.
  - Finance staff converts pro forma to invoice and issues receipt.
  - Logistics coordinator creates Delivery Order and arranges delivery.
  - Delivery Note issued per drop.

- **Baseline MAIA Coverage:**
  - pro forma invoice creation with remarks text area
  - customer preference reference on customer record
  - sales order creation
  - invoice generation
  - delivery note generation
  - credit note support
  - receipt creation
  - customer record visibility
  - role-based access
  - document download and retrieval

## 2.4 Integration and Data Sync with SQL

To push and synchronise data with SQL Accounting, the following connectivity is required. Final method is subject to confirmation with JDX's SQL vendor or IT team.

- **Integration Method:**
  - Preferred: API, service connector, or supported SQL integration endpoint, subject to vendor confirmation.
  - Alternate: Secure file-based import/export via CSV, Excel, XML, or agreed file transfer method if API access is restricted.

- **Core Touchpoints:**
  - Master Data (Read): Customers, items, pricing references, and price lists from SQL into MAIA at go-live.
  - Transactions (Write): Sales orders, invoices, receipts, and credit notes created in MAIA pushed back to SQL for accounting records.
  - Status / Documents (Read/Write as applicable): Invoice status, document numbers, and related accounting references.

- **Dependencies:**
  - SQL Accounting version, network accessibility, and vendor contact for API or import/export specifications.
  - Sample data exports to verify field mapping.
  - Client-side permission and access approval.

Notes:

- SQL Accounting is expected to remain the accounting system of record unless otherwise agreed.
- Mindhive will not guarantee API integration until access and technical feasibility are confirmed.

## 2.5 Delivery Order Management and Multi-Drop Delivery

JDX's corporate hamper orders frequently require delivery to 10–50+ recipient addresses per order. MAIA supports multi-drop delivery through a blanket order splitting model where one sales order generates multiple DOs, each with its own recipient and delivery date.

- **Key Behaviours:**
  - One sales order → multiple DOs via blanket order split.
  - Each DO inherits all customisation remarks from the source sales order automatically.
  - Remaining unfulfilled quantity stays visible on the sales order after each DO is created.
  - Delivery status tracked per DO: Draft → To Schedule → Scheduled → Success (or Failed).
  - Coordinator marks DO as delivered, reschedules, or marks as failed manually.

- **Dependencies:**
  - Confirmation of whether ad-hoc delivery addresses (recipient addresses not pre-registered as customer records) are supported per DO.
  - Sample multi-drop delivery orders from current workflow to confirm split logic and address handling.

Notes:

- Delivery Trip grouping, route planning, and driver assignment are not in scope.
- No 3PL or courier API integration is in scope.
- Ad-hoc delivery recipient address handling must be confirmed by the tech team before this feature is committed to Phase One.

# 3. Customisation & Extensions (Phase Two Onwards)

MAIA provides a baseline suite of standard features out of the box. However, JDX's AEON consignment kiosk operations require customisation because daily stock reporting per outlet, monthly consignment sales orders, and consolidated AEON billing are distinct from the standard B2B order flow. These customisations will be scoped, estimated, refined, and mutually agreed before execution.

## 3.1 Customisations (Phase Two)

### 3.1.1 Inventory Management

- **Platform:** MAIA Web Application

- **Core Features:**
  - **Stock Level Visibility:** View current stock levels per SKU across all kiosk locations.
  - **Stock Movement History:** View replenishment in, sales out, and reconciliation adjustments per kiosk.
  - **Low Stock Alerts:** Flag low stock per kiosk location when quantity drops below a defined threshold.

Notes:

- Complex tea SKU treatment (year, factory, grade, batch codes) is not in scope. Phase Two uses a simplified product catalogue consistent with Phase One.

### 3.1.2 Consignment Kiosk Daily Stock Reporting

- **Platform:** MAIA Web Application

- **Core Features:**
  - **Warehouse Hierarchy:** Configure parent warehouse (mall or region) and child warehouse records per kiosk location.
  - **Opening Stock:** Record opening stock balance per kiosk per day via stock reconciliation.
  - **Stock Received (GRN):** Record stock received at the kiosk via Material Receipt / Goods Received Note.
  - **Closing Stock:** Record closing stock balance per kiosk per day via stock reconciliation.
  - **Daily Variance Calculation:** Calculate daily stock variance per kiosk based on opening stock, stock received, and closing stock.
  - **Output Documents:** Goods Received Note (GRN)

Notes:

- Data accuracy depends on consistent promoter-side reporting and timely operations staff entry.

### 3.1.3 AEON Consignment Monthly Sales Order and Billing

- **Platform:** MAIA Web Application

- **Core Features:**
  - **Monthly Sales Order:** One Sales Order per kiosk per calendar month as the cumulative AEON consignment record for that period.
  - **Daily Quantity Updates:** Allow quantity updates to the monthly Sales Order as confirmed daily sales are entered.
  - **Delivery Note Generation:** Generate Delivery Notes from the monthly Sales Order per approved posting period with the correct transaction date.
  - **Audit Trail:** Maintain an auditable link between the monthly Sales Order and all Delivery Notes issued under it in the same period.
  - **Monthly Invoice:** Issue a single customer invoice to AEON per monthly Sales Order for the closed billing period.
  - **Commission Adjustment:** Apply invoice-level discount or adjustment reflecting AEON's fixed commission under the consignment arrangement.

Notes:

- Giant/AEON B2B portal billing (monthly commission deductions and display charges billed through the grocer's own portal) is not in scope.
- AEON's fixed commission rate per location must be confirmed before configuration.

## 3.2 Customisations (Phase Three)

### 3.2.1 Future Extensions Subject to Separate Validation

- **Platform:** MAIA Web Application and related integrations, subject to future scoping

- **Potential Future Features:**
  - **Complex Tea SKU Management:** Per-unit tracking by year, factory, grade, and batch codes for the full 3,000+ tea SKU catalogue.
  - **Tiered Discount Auto-Application:** Automatic discount tier assignment based on order value thresholds.
  - **B2C Channel Fulfilment:** Integration with Shopify, Facebook, or other e-commerce channels.
  - **Delivery Trip Management:** Route planning, driver assignment, and delivery trip grouping.
  - **3PL Integration:** Courier API integration for automated delivery tracking.
  - **Advanced Inventory Intelligence:** Predictive low-stock alerts and demand forecasting based on seasonal patterns.

Notes:

- Phase Three items are not included in the current confirmed scope unless separately agreed.
- These items require separate discovery, pricing, timeline confirmation, and change request approval.

# 4. Estimated Timelines - Two Phase Delivery

**Phase 1: Core MAIA System (per Section 2: Product Specifications)**

Deliver and go-live with the baseline MAIA features outlined in Section 2.

| Item | Indicative Time Taken |
|---|---:|
| Onboarding & Setup | 1 week |
| SQL Integration (customers, items, pricing sync) | 1–2 weeks |
| Configuration & Build (chatbots, workspaces, remarks propagation, multi-drop DO) | 2–3 weeks |
| User Training & UAT | 1 week |
| Go-Live & Hypercare | 1 week |

**Phase 2: Customisation & Extensions (per Section 3.1)**

After Phase 1 go-live, Mindhive will design, build, and release the agreed customisations listed in Section 3.1. Timelines are confirmed via detailed scoping per item.

| Item | Indicative Time Taken |
|---|---:|
| Design & Detailed Scoping | 1 week |
| Build & Integration (kiosk stock reporting, AEON monthly SO & billing, GRN) | 2–3 weeks |
| User Training & UAT | 1 week |
| Go-Live & Hypercare | 1 week |

Notes: All durations are indicative and depend on scope complexity, sample document readiness, integration feasibility, vendor responsiveness, and client responsiveness. Approvals and clarifications are typically expected within 2–3 working days as outlined in Client Commitments. JDX is a seasonal business — Phase 1 go-live must land before the next peak season (CNY, Hari Raya, or Mooncake) to deliver its intended value.

# 5. Commercial Structure

- **Pricing Model:** One-off implementation investment with any recurring subscription, maintenance, hosting, or third-party costs to be confirmed.
- **Customisation Fees:** Current documented investment is RM 27,500. Any additional scope outside this SOW will be quoted separately on a fixed-price or time-and-materials basis.
- **Payment Terms:** 50/50 split — 50% upon project commencement, 50% upon UAT sign-off.
- **Renewal & Escalation:** TBC.

## 5.1 One-Off Development Cost

| Item | Price |
|---|---:|
| **Phase One — Core MAIA**<br>- Sales Agent Chatbot<br>- Logistics Agent Chatbot<br>- Sales, Finance, Logistics, and Management Workspaces<br>- Sales Document Lifecycle (Pro Forma, Invoice, Receipt, Credit Note, DO)<br>- Remarks Propagation (Sales Order → Invoice → DO)<br>- Multi-Drop Delivery (Blanket Order Splitting)<br>- SQL Integration (Master Data Sync + Transaction Push-Back)<br>- Periodic System and Feature Updates<br>- Storage, Model Training, Ingestion | RM 20,000 |
| **Phase Two — Customisations & Extensions**<br>- Inventory Management (Stock Levels, Movement, Low Stock Alerts)<br>- Consignment Kiosk Daily Stock Reporting (GRN, Opening/Closing Stock, Variance)<br>- AEON Consignment Monthly SO and Billing (Monthly SO, DN Generation, Monthly Invoice, Commission Adjustment) | RM 7,500 |
| **Grand Total** | **RM 27,500** |

## 5.2 Payment Terms

| Milestone | Percentage | Price |
|---|---:|---:|
| Milestone 1 — Phase One Initiation | 50% | RM 13,750 |
| Milestone 2 — UAT Sign-Off | 50% | RM 13,750 |

## 5.3 Monthly Maintenance and Third-Party Costs

| Item | Estimated |
|---|---:|
| Monthly platform maintenance | RM 2,500 |
| Hosting or infrastructure | TBC |
| WhatsApp, AI, or document-processing usage | TBC |
| External vendor or integration fees | TBC |
| **Estimated Monthly Total** | **RM 2,500+** |

# 6. Caveats & Exclusions

- **Third-Party Dependencies:** Mindhive is not liable for downtime, access restrictions, API limitations, data errors, or performance issues caused by SQL Accounting, WhatsApp, email providers, or other external platforms.
- **Connectivity:** JDX is responsible for internet, devices, internal network readiness, and user access readiness.
- **Client-Side Integrations:** Unsupported third-party integrations outside the approved scope are excluded and require change request approval.
- **Data Accuracy:** JDX is responsible for the correctness, completeness, and timeliness of provided data, including customer lists, product catalogues, pricing files, and sample documents.
- **SQL Integration:** Integration method is subject to confirmation with JDX's SQL Accounting vendor or IT team. Mindhive will not guarantee API integration until access and technical feasibility are confirmed.
- **Multi-Drop Delivery Addresses:** The ability to enter ad-hoc delivery addresses per DO (not tied to the customer module) must be confirmed by the tech team before this feature is committed to Phase One scope.
- **Manual Decisions:** MAIA does not auto-confirm orders, auto-progress document status, or automate collections in the current scope.
- **Future Scope:** Complex SKU management, tiered discount auto-application, B2C channel fulfilment, Delivery Trip management, 3PL integration, and advanced inventory intelligence are excluded unless separately scoped and agreed.
- **AEON Commission Rate:** AEON's fixed commission rate per kiosk location must be confirmed before Phase Two billing configuration can begin.

# 7. Service Level Agreements (SLAs)

## 7.1 Mindhive Commitments

**System Availability:** 99.5% uptime excluding scheduled maintenance, subject to final hosting and support package confirmation.

**Support Response Times:**

- **Critical (P1):** Within 2 hours
- **High (P2):** Within 8 hours
- **Normal (P3):** Within 2 business days

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours where practical.

**Data Protection:** Regular backups and reasonable disaster recovery practices to safeguard client data, subject to final deployment model.

**Lifetime Upgrades & Support:** JDX continues to receive ongoing product upgrades, security enhancements, and support for the lifetime of the active subscription or support arrangement.

## 7.2 Client Commitments

**User Access & Permissions:** JDX will designate system administrators and confirm internal user roles, permissions, and access boundaries.

**Data Provisioning:** JDX will provide accurate, complete, and timely data uploads, sample documents, and workflow inputs required for onboarding and implementation, including SQL data exports, sample pro forma invoices, delivery notes, and kiosk stock reports.

**Timely Feedback:** JDX will provide approvals, clarifications, and input during configuration, customisation, implementation, and UAT to avoid project delays.

**Compliance:** JDX will adhere to licensing terms, security practices, and applicable operational regulations.

**Point of Contact:** JDX will designate a primary point of contact for Mindhive communications. JDX commits to responding to vendor queries, requests, or approvals within 2–3 working days.

**Payments:** JDX will ensure timely settlement of subscription fees, invoices, and approved change request costs according to agreed commercial terms.

# 8. Acknowledgement & Agreement

## 8.1 Delivery Model

MAIA is expected to be delivered as a cloud-hosted platform. Final deployment setup, hosting, support package, and environment details remain subject to technical and commercial confirmation.

## 8.2 System Interfaces

- **Web Application:** Browser-based access for sales, finance, logistics, and management users.
- **Mobile-Responsive Access:** Subject to final user workflow needs and supported screens.
- **WhatsApp:** Used for order intake, DO creation, delivery status updates, and payment attachment via the Sales Agent and Logistics Agent chatbots.
- **Integration Interfaces:** SQL Accounting touchpoints are subject to vendor access, data samples, and technical validation.

## 8.3 Core System Capabilities

MAIA provides a unified business foundation for sales documents, customer records, role-based access, document generation, workflow visibility, and operational traceability. For JDX, this includes the remarks propagation engine ensuring customisation instructions flow from sales order through invoice and delivery documents without re-entry.

## 8.4 Security & Compliance

MAIA access will be configured based on user roles and approved permission rules. Final authentication, data isolation, encryption, backup, and compliance commitments depend on the agreed deployment and support package.

## 8.5 Availability & Performance

MAIA is designed for high availability and scalable performance. Final uptime, monitoring, and support commitments are governed by the agreed support arrangement.

## 8.6 Customisation & Extensibility

Future workflow changes, new integrations, additional document formats, complex SKU management, B2C channel fulfilment, or additional modules will be handled through separate scoping and change request approval.

# 9. Acknowledgement & Agreement

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive Sdn Bhd:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

**For JDX Gift and Food Sdn. Bhd.:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

## See Also

- [[03 - Clients/We're cooked discovery/Requirement Gathering/JDX/Customer Narrative - JDX]]
- [[03 - Clients/We're cooked discovery/Requirement Gathering/JDX/Meeting Notes/2026-03-27-JDX-Requirements-Gathering]]
- [[03 - Clients/We're cooked discovery/Requirement Gathering/JDX/JDX SOW Review Discussion - 2026-04-24]]

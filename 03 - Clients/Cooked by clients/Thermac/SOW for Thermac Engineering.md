|   |   |   |
|---|---|---|
|BETWEEN|The Vendor|**Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor.|
|AND|The Client|**Thermac Engineering Sdn Bhd** ("Thermac"), with its office located at 26A, Jalan Permata 8/KS9, 41200 Klang, Selangor.|

---

1. # Executive Summary
    

Thermac Engineering Sdn Bhd operates a regional mechanical equipment and service business covering heat exchangers, pumps, maintenance, repairs, chemical cleaning, hydro-testing, regasketing, refurbishment, spare parts, and related field service work. The company manages both product sales and service jobs, with orders and enquiries currently flowing through WhatsApp, email, Excel templates, AutoCount, Esoft, Monday.com calendars, physical work order forms, and manual coordination.

The product-sales side of Thermac's business follows a relatively standard quotation-to-delivery lifecycle. Customers enquire through WhatsApp or email, sales users prepare quotations, official purchase orders are received by email, sales orders are created, stock or supplier availability is checked, invoices are issued, delivery is arranged, and delivery notes are signed by customers.

Thermac's quotation workflow requires additional flexibility because not every quote can be handled through a rigid SKU-only item table. Sales users need to prepare quotations that can combine existing SKU items, ad hoc charges, draft items, pricing calculation inputs, and historical price references before the quotation is confirmed into downstream sales documents.

The service side is more operationally complex. Service jobs require quotation, approval, scheduling, technician assignment, work order preparation, on-site execution, worksheet sign-off, parts-used tracking, invoicing, and future maintenance follow-up. Today, the service workflow depends heavily on individual memory, WhatsApp threads, physical forms, and disconnected calendars. This creates scheduling opacity, limited service history, manual price archaeology, and weak institutional memory.

  

  

This SOW defines a phased implementation of MAIA that introduces:

- a standard MAIA product-sales operating foundation for quotations, sales orders, invoices, delivery notes, and related records
    
- a flexible quotation workspace for SKU rows, draft items, ad hoc charges, pricing calculation inputs, and historical price guidance
    
- a service operations layer for work orders, technician scheduling, service history, and maintenance reminders
    
- pricing intelligence, PO-to-sales order conversion, quotation loss tracking, statement of account visibility, and role-based permissions
    
- integration and data handling assumptions for AutoCount, Esoft, email, WhatsApp, and client-provided sample files
    

The current documented implementation investment is **RM 35,000**, subject to final commercial confirmation, payment terms, and dependency validation.

2. # Product Specifications (Phase One)
    

The following section highlights the baseline MAIA modules that Thermac will receive first. Each module is designed with scalability, configurability, and high availability in mind, while fitting into Thermac's current product-sales process across WhatsApp, email, AutoCount, and internal operations.

Phase One focuses on Thermac's product-sales business, where the current workflow follows a standard order lifecycle: enquiry, quotation, purchase order, sales order, invoice, delivery, and signed delivery note.

1. ## Internal Chatbot (Sales and Order Intake)
    

2. ### Sales Agent Assistant
    

The Sales Agent Assistant serves as an assistant to help Thermac's sales team capture customer enquiries, process purchase orders, prepare sales records, and reduce repetitive manual order entry.

- **Platform:**
    
    - WhatsApp
        
    - Email intake for customer purchase orders
        
    - MAIA web workspace for review and confirmation
        
- **Features:**
    
    - **Intelligent Document Processing (IDP):** MAIA parses customer purchase orders received through supported document formats and extracts key order information for user review.
        
    - **PO-to-Sales Order Conversion:** MAIA creates a draft CPO or review record from the customer PO. The user reviews, edits, and confirms before MAIA creates the sales order.
        
    - **Human Review Before Confirmation:** MAIA does not auto-confirm customer orders. Users remain responsible for validating extracted items, quantities, descriptions, and pricing.
        
    - **Historical Pricing Visibility:** MAIA surfaces historical pricing context for customer-item pairs where data is available, including the last five transactions and lifetime average.
        
    - **Flexible Quotation Drafting Support:** Users can prepare quotations using a flexible item table that supports existing SKU items, ad hoc charge rows, and draft item rows, subject to final row-type configuration.
        
    - **Quotation Pricing Inputs:** Users can capture agreed commercial and calculation inputs such as freight, clearance, transportation fee, forex, margin, discount, and other pricing factors required for Thermac's quotation workflow.
        
    - **Draft Item Handling:** Users can include temporary or draft items during quotation preparation. Draft items are subject to confirmation rules before they become official item master records or flow into downstream documents.
        
    - **Ad Hoc Charge Handling:** Users can include agreed charges such as delivery fee, packaging fee, freight, clearance, or other approved commercial charges as quotation line items where configured.
        
    - **Sales Order Creation:** Users create or confirm sales orders after quotation acceptance or official purchase order receipt.
        
    - **Output Document Generation:** To generate output documents. List of output documents supported:
        
        - Quotation
            
        - Sales Order
            
        - Invoice
            
        - Delivery Note
            
        - Credit Note
            
    - **Quotation Loss Tracking:** Users can mark quotations as lost with a structured reason and free-text explanation for management reporting.
        

Notes:

- PO extraction accuracy depends on the quality and consistency of the customer's purchase order document.
    
- Pricing intelligence is advisory and does not block or enforce pricing.
    
- Flexible quotation rows, draft items, ad hoc charges, and pricing calculation inputs are subject to final field mapping, workflow confirmation, and downstream document validation.
    

2. ## User Workspaces
    

Desktop Web interfaces where users can log in and interact with the system based on their role and permissions.

1. ### Sales Agent Workspace
    

- **Features:**
    
    - **Quotation Management:** Create, review, revise, and track quotations for product sales and relevant service-related enquiries.
        
    - **Sales Order Management:** Create, modify, and track sales orders after customer confirmation.
        
    - **Customer Management:** View customer records, payment terms, historical transactions, interaction notes, and service context where authorised.
        
    - **Output Document Management:** View and download generated documents such as quotations, sales orders, invoices, delivery notes, and credit notes.
        
    - **Pricing Reference View:** Display customer-item historical pricing context where available.
        
    - **Quotation Price Guidance:** Display previous price, average price, minimum price, maximum price, standard price, and customer-specific price where the required historical data is available.
        
    - **Lost Quotation Reporting:** Capture lost quotation reasons and support management review.
        

Notes:

- Flexible quotation behaviour depends on the final approved quotation table design, item master rules, and downstream document mapping.
    
- Draft item creation, approval, and conversion into official item master data must be confirmed before implementation.
    

2. ### Finance Workspace
    

- **Features:**
    
    - **Invoice Visibility:** View invoice records and customer payment status where integrated or available.
        
    - **Statement of Account View:** Display open invoices, overdue invoices, and outstanding balances per customer.
        
    - **Overdue Flagging:** Flag overdue accounts based on invoice due date plus a configured grace period.
        
    - **Finance Follow-Up Support:** Provide visibility for finance users to follow up manually.
        

Notes:

- MAIA does not automate collections in Phase One.
    
- Customer-facing Statement of Account links or QR access remain subject to confirmation.
    

3. ### Logistics Workspace
    

- **Features:**
    
    - **Inventory Reference Access:** View product and stock-related operational information where available through confirmed data sync or upload.
        
    - **Role-Based Access:** Storekeeper users can access operational inventory functions without requiring full financial access.
        
    - **Delivery Support:** View relevant order and delivery records required for fulfilment coordination.
        

4. ### Management Workspace
    

- **Features:**
    
    - **Operational Visibility:** View sales, quotation, work order, customer, and finance summaries where configured.
        
    - **Quotation Loss Reporting:** Review lost quotation reasons and trends.
        
    - **Outstanding Account Visibility:** Review debtor and Statement of Account summaries.
        
    - **Role-Based Oversight:** View cross-functional records according to approved management access rights.
        

3. ## Product Sales Document Lifecycle
    

Thermac's product-sales workflow is supported through baseline MAIA modules.

- **Current Product Sales Flow:**
    
    - The customer sends an enquiry through WhatsApp or email.
        
    - The salesperson prepares quotations using pricing and historical context.
        
    - Customer sends official purchase order by email.
        
    - Sales order is created in MAIA after user validation.
        
    - Inventory is checked through available stock references or existing operational processes.
        
    - Invoice and delivery note are generated.
        
    - Delivery is arranged by self-delivery, courier, freight, or shipping depending on order type.
        
    - Customer signs the delivery note.
        
- **Baseline MAIA Coverage:**
    
    - Quotation creation
        
    - Sales order creation
        
    - Invoice generation
        
    - Delivery note generation
        
    - Credit note support
        
    - Customer record visibility
        
    - Role-based access
        
    - Document download and retrieval
        

4. ## Integration and Data Sync with AutoCount
    

To push and synchronise data with AutoCount, the following connectivity is required. Final method is subject to confirmation with Thermac's AutoCount vendor or IT team.

- **Integration Method:**
    
    - Preferred: API, service connector, or supported AutoCount integration endpoint, subject to vendor confirmation.
        
    - Alternate: Secure file-based import/export via CSV, Excel, XML, or agreed file transfer method if API access is restricted.
        
- **Core Touchpoints:**
    
    - Master Data (Read): Customers, items, pricing references, credit terms, and available inventory references where accessible.
        
    - Transactions (Write): Sales orders, invoices, delivery notes, credit notes, or other agreed document records from MAIA to AutoCount.
        
    - Status / Documents (Read/Write as applicable): Invoice status, document numbers, delivery status, and related accounting references.
        
    - Additional modules, if required: Payment status, statement records, receipts, and inventory movement, subject to validation.
        
- **Dependencies:**
    
    - AutoCount hosting type, network accessibility, domain or server information, and vendor contact for API or import/export specifications.
        
    - Sample exports to verify field mapping.
        
    - Confirmation of whether AutoCount remains fully on-premise and office-only.
        
    - Client-side permission and access approval.
        

Notes:

- AutoCount is expected to remain the accounting system of record unless otherwise agreed.
    
- Mindhive will not guarantee API integration until access and technical feasibility are confirmed.
    

3. # Customisation & Extensions (Phase Two Onwards)
    

MAIA provides a baseline suite of standard features out of the box. However, Thermac's service operations require customisation because service work orders, technician scheduling, and maintenance reminders are distinct from the standard product-sales flow. These customisations will be scoped, estimated, refined, and mutually agreed before execution.

1. ## Customisations (Phase Two)
    

2. ### Service Work Order Management
    

- **Platform:** MAIA Web Workspace
    
- **Core Features:**
    
    - **Work Order Creation from Sales Order:** Create a service work order after a service job is sold and approved.
        
    - **Customer Linkage:** Link work orders to the relevant customer.
        
    - **Job Scope Capture:** Capture quoted job scope, service type, required parts, technician instructions, scheduled date, and assigned technician.
        
    - **Actual Work Performed:** Record actual work completed, deviations from the original plan, technician comments, and customer sign-off details.
        
    - **Parts Planned vs Parts Used:** Track parts planned for the job and parts actually used on-site.
        
    - **Attachment Handling:** Attach job photos, worksheets, signed forms, and other supporting documents to the work order.
        
    - **2-Page Work Order PDF:** Generate a work order PDF reflecting pre-job details and post-job completion information.
        
    - **Audit Trail:** Record who created, updated, and completed the work order where supported.
        

Notes:

- Job progression is manual. MAIA will not automatically move work orders between statuses without user action.
    
- Final work order fields depend on Thermac providing completed work order samples.
    
- Large service jobs above approximately RM50,000 may require down payment before scheduling, subject to final workflow confirmation.
    

2. ### Calendar and Gantt Scheduling Views
    

- **Platform:** MAIA Web Workspace
    
- **Core Features:**
    
    - **Shared Calendar View:** Display active work orders and scheduled job dates in a shared operations calendar.
        
    - **Gantt View:** Display work order timelines and technician assignments in a Gantt-style view.
        
    - **Scheduling Conflict Visibility:** Surface overlapping assignments or conflicting job dates for manual review.
        
    - **Creation-to-Completion Timestamps:** Capture when jobs are created, scheduled, and completed for operational visibility.
        
    - **Technician Workload View:** Support planning visibility across assigned technicians.
        

Notes:

- MAIA does not provide AI-driven scheduling optimisation.
    
- Manager approval continues to be a business decision when scheduling conflicts arise.
    
- Advanced manpower capacity planning is listed as later customisation scope.
    

3. ### Customer Service History
    

- **Platform:** MAIA Web Workspace
    
- **Core Features:**
    
    - **Service Timeline:** Aggregate completed work orders, service notes, and interaction logs under the customer record.
        
    - **Technician Notes:** Retain technician comments and actual work performed as part of service history.
        
    - **Authorised Visibility:** Allow sales, service, operations, and management users to view service context based on permissions.
        

Notes:

- This is intended as customer-level service history.
    
- It is not a full per-serial-number asset lifecycle platform unless separately scoped.
    
- The value of this feature depends on consistent user logging.
    

4. ### Proactive Service Reminders
    

- **Platform:** MAIA Web Workspace and notification channel TBC
    
- **Core Features:**
    
    - **Next Maintenance Date Field:** Capture next maintenance date on applicable maintenance-type work orders.
        
    - **Reminder Trigger:** Notify the configured salesperson or service user when a follow-up is due.
        
    - **Customer Follow-Up Context:** Allow the user to review service history before contacting the customer.
        

Notes:

- Reminder recipient, timing, and notification channel are subject to confirmation.
    
- Predictive maintenance intelligence is not included in Phase Two.
    

5. ### Statement of Account Customer View
    

- **Platform:** MAIA Web Workspace and secure customer-facing link or QR code
    
- **Core Features:**
    
    - **Internal Debtor View:** Show open invoices, overdue invoices, and outstanding amounts by customer.
        
    - **Overdue Flagging:** Flag overdue accounts based on invoice due date plus configured grace period.
        
    - **Customer-Facing View:** Provide an optional secure Statement of Account view for customers.
        

Notes:

- Collections remain manually driven by Thermac's finance team.
    
- External access method is subject to security and workflow confirmation.
    

  

4. # Estimated Timelines - Two Phase Delivery
    

**Phase 1: Base MAIA System (per Section 2: Product Specifications)**

Deliver and go-live with the baseline MAIA features outlined in Section 2.

|Item|Indicative Time Taken|
|---|---|
|Onboarding & Setup|1-2 weeks|
|Configuration & Customisation|1-2 weeks|
|User Training & UAT|1-2 weeks|

**Phase 2: Customisation & Extensions (per Section 3.1)**

After Phase 1 go-live, Mindhive will design, build, and release the agreed customisations listed in Section 3.1. Timelines are confirmed via detailed scoping per item.

|Item|Indicative Time Taken|
|---|---|
|Design & Detailed Scoping|1-2 weeks|
|Build & Integration|4-8 weeks|
|User Training & UAT|1-2 weeks|
|Go-Live & Hypercare|1-2 weeks|

Notes: All durations are indicative and depend on scope complexity, sample document readiness, integration feasibility, vendor responsiveness, and client responsiveness. Approvals and clarifications are typically expected within 2-3 working days as outlined in Client Commitments.

5. # Commercial Structure
    

- **Pricing Model:** One-off implementation investment with any recurring subscription, maintenance, hosting, or third-party costs to be confirmed.
    
- **Customisation Fees:** Current documented investment is RM 35,000. Any additional scope outside this SOW will be quoted separately on a fixed-price or time-and-materials basis.
    

  

  

1. ## One-Off Development Cost
    

|Item|Price|
|---|---|
|**Core**<br><br>- Baseline Enterprise MAIA System<br>    <br>- Product Sales Document Lifecycle<br>    <br>- Sales Agent Assistant<br>    <br>- Sales, Finance, Logistics, and Management Workspaces<br>    <br>- Role-Based Permissions<br>    <br>- Pricing Intelligence<br>    <br>- Quotation Loss Tracking<br>    <br>- Statement of Account Internal View<br>    <br>- Periodic System and Feature Updates<br>    <br>- Storage, Model Training, Ingestion|Included in total|
|**Customisations**<br><br>- Service Work Order Management<br>    <br>- Calendar and Gantt Scheduling Views<br>    <br>- Customer Service History and Proactive Service Reminders<br>    <br>- PO-to-Sales Order Conversion<br>    <br>- Statement of Account Customer View, subject to confirmation|Included in total|
|**Grand Total**|**RM 35,000**|

2. ## Payment Terms
    

|Milestone|Percentage|Price|
|---|---|---|
|Milestone 1 - Phase One Initiation|50%|RM17,500|
|Milestone 2 - UAT Sign Off|50%|RM17,500|

  

3. ## Yearly Maintenance and Third-Party Costs
    

|Item|Estimated|
|---|---|
|Yearly platform maintenance|RM 10,000 / year|
|Hosting or infrastructure|~RM1,000 / month|
|WhatsApp, email, AI, OCR, or document-processing usage|
|External vendor or integration fees|

6. # Caveats & Exclusions
    

- **Third-Party Dependencies:** Mindhive is not liable for downtime, access restrictions, API limitations, data errors, or performance issues caused by AutoCount, Esoft, WhatsApp, email providers, or other external platforms.
    
- **Connectivity:** Thermac is responsible for internet, devices, internal network readiness, and user access readiness.
    
- **Client-Side Integrations:** Unsupported third-party integrations outside the approved scope are excluded and require change request approval.
    
- **Data Accuracy:** Thermac is responsible for the correctness, completeness, and timeliness of provided data, including customer lists, product catalogues, historical transactions, pricing files, and sample documents.
    
- **AutoCount Integration:** Integration method is subject to confirmation with Thermac's AutoCount vendor or IT team.
    

7. # Service Level Agreements (SLAs)
    

8. ## Mindhive Commitments
    

**System Availability:** 99.5% uptime excluding scheduled maintenance, subject to final hosting and support package confirmation.

**Support Response Times:**

- **Critical (P1):** Within 2 hours
    
- **High (P2):** Within 8 hours
    
- **Normal (P3):** Within 2 business days
    

**Maintenance Windows:** Pre-communicated, typically scheduled during weekends or off-peak hours where practical.

**Data Protection:** Regular backups and reasonable disaster recovery practices to safeguard client data, subject to final deployment model.

**Lifetime Upgrades & Support:** Thermac continues to receive ongoing product upgrades, security enhancements, and support for the lifetime of the active subscription or support arrangement.

2. ## Client Commitments
    

**User Access & Permissions:** Thermac will designate system administrators and confirm internal user roles, permissions, and access boundaries.

**Data Provisioning:** Thermac will provide accurate, complete, and timely data uploads, sample documents, templates, and workflow inputs required for onboarding and implementation.

**Timely Feedback:** Thermac will provide approvals, clarifications, and input during configuration, customisation, implementation, and UAT to avoid project delays.

**Compliance:** Thermac will adhere to licensing terms, security practices, and applicable operational regulations.

**Point of Contact:** Thermac will designate a primary point of contact for Mindhive communications. Thermac commits to responding to vendor queries, requests, or approvals within 2-3 working days.

**Payments:** Thermac will ensure timely settlement of subscription fees, invoices, and approved change request costs according to agreed commercial terms.

8. # Acknowledgement & Agreement
    

9. ## Delivery Model
    

MAIA is expected to be delivered as a cloud-hosted platform. Final deployment setup, hosting, support package, and environment details remain subject to technical and commercial confirmation.

2. ## System Interfaces
    

- **Web Application:** Browser-based access for sales, finance, operations, storekeeper, technician, and management users.
    
- **Mobile-Responsive Access:** Subject to final user workflow needs and supported screens.
    
- **WhatsApp and Email:** Used for customer communication, order intake context, and PO document handling where applicable.
    
- **Integration Interfaces:** AutoCount and Esoft touchpoints are subject to vendor access, file samples, and technical validation.
    

3. ## Core System Capabilities
    

MAIA provides a unified business foundation for sales documents, customer records, service context, role-based access, document generation, workflow visibility, and operational traceability.

4. ## Security & Compliance
    

MAIA access will be configured based on user roles and approved permission rules. Final authentication, data isolation, encryption, backup, and compliance commitments depend on the agreed deployment and support package.

5. ## Availability & Performance
    

MAIA is designed for high availability and scalable performance. Final uptime, monitoring, and support commitments are governed by the agreed support arrangement.

6. ## Customisation & Extensibility
    

Future workflow changes, new integrations, additional document formats, advanced scheduling, predictive service intelligence, or additional modules will be handled through separate scoping and change request approval.

9. # Acknowledgement & Agreement
    

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive:**

**For Thermac Engineering Sdn Bhd:**

|   |
|---|
|____________________________ Signature|
|Name:<br><br>Position:<br><br>Date:|

|                                        |
| -------------------------------------- |
| ____________________________ Signature |
| Name:<br><br>Position:<br><br>Date:    |
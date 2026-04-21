---
owner: Jun Ying
status: draft
last_reviewed: 2026-04-13
client: Thermac
document_type: sow
created: 2026-04-13
source_notes:
  - 03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/03-04-26_Customer Narrative - Thermac.md
  - 03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/Meeting Notes/2026-03-26-Thermac-Requirements-Gathering.md
---

The Services Agreement is made effective as of 2026-04-13.

| BETWEEN | **Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor. |
|---|---|
| AND | **Thermac Engineering Sdn Bhd** ("Thermac"), with its registered or operating address to be confirmed. |

# Scope of Work (SOW) - MAIA for Thermac Engineering

# 1. Executive Summary

Thermac Engineering Sdn Bhd operates a regional mechanical equipment and service business covering heat exchangers, pumps, maintenance, repairs, chemical cleaning, hydro-testing, regasketing, refurbishment, spare parts, and related field service work. The company manages both product sales and service jobs, with orders and enquiries currently flowing through WhatsApp, email, Excel templates, AutoCount, Esoft, Monday.com calendars, physical work order forms, and manual coordination.

The product-sales side of Thermac's business follows a relatively standard quotation-to-delivery lifecycle. Customers enquire through WhatsApp or email, sales users prepare quotations, official purchase orders are received by email, sales orders are created, stock or supplier availability is checked, invoices are issued, delivery is arranged, and delivery notes are signed by customers.

The service side is more operationally complex. Service jobs require quotation, approval, scheduling, technician assignment, work order preparation, on-site execution, worksheet sign-off, parts-used tracking, invoicing, and future maintenance follow-up. Today, the service workflow depends heavily on individual memory, WhatsApp threads, physical forms, and disconnected calendars. This creates scheduling opacity, limited service history, manual price archaeology, and weak institutional memory.

This SOW defines a phased implementation of MAIA that introduces:

- a standard MAIA product-sales operating foundation for quotations, sales orders, invoices, delivery notes, and related records
- a service operations layer for work orders, technician scheduling, service history, and maintenance reminders
- pricing intelligence, PO-to-sales order conversion, quotation loss tracking, statement of account visibility, and role-based permissions
- integration and data handling assumptions for AutoCount, Esoft, email, WhatsApp, and client-provided sample files

The current documented implementation investment is **RM 35,000**, subject to final commercial confirmation, payment terms, and dependency validation.

# 2. Phased Delivery Approach

## 2.1 Process Flow

- **Phase 01 - Sales Operations Foundation**
  - Customer enquiries enter through WhatsApp or email.
  - Sales users prepare quotations in MAIA using product and customer context available in the system.
  - Customer purchase orders received by email are parsed through the PO-to-sales order conversion flow where applicable.
  - MAIA presents extracted order data for human review and correction before any sales order is confirmed.
  - MAIA supports the standard sales document lifecycle covering quotation, sales order, invoice, delivery note, and credit note.
  - AutoCount remains the accounting system of record unless otherwise confirmed during integration design.
  - Failed extraction, incomplete information, or mismatched item data remains in review status and is not auto-confirmed.

- **Phase 02 - Service Operations and Work Order Layer**
  - Approved service jobs are converted into structured work orders linked to the customer.
  - Work orders capture job type, job scope, technician assignment, scheduled date, planned parts, actual work performed, deviations, actual parts used, photos, worksheets, and customer sign-off attachments.
  - Calendar and Gantt views display active work orders, scheduling dates, assigned technicians, and scheduling conflicts.
  - Technicians and operations users manually update work order status as work progresses.
  - Completed work orders update the customer service timeline and equipment service history.
  - Maintenance-type work orders capture a next maintenance date used for follow-up reminders.
  - MAIA does not auto-schedule jobs, auto-progress job statuses, or replace human scheduling decisions.

- **Phase 03 - Future Extension Scope**
  - Future scope may include deeper per-unit asset lifecycle tracking, warranty context, advanced scheduling intelligence, exchange-rate impact analysis, or deeper Esoft integration.
  - Phase 03 items are not committed in the current RM 35,000 scope unless separately confirmed through a variation order or change request.

## 2.2 Phase 01 | Common Platform Capabilities

### 2.2.1 Master Data and Document Inputs

**Purpose**  
To provide MAIA with enough structured input to support Thermac's quotation, sales order, service, and document workflows.

**Applies To**  
Sales, finance, operations, storekeeper, technician, and management users.

**Inputs Required**

1. Pricing quotation Excel template
2. Service costing Excel template
3. Sample sales orders, invoices, delivery orders, credit notes, and quotations
4. Inventory product catalogue and pricing list
5. Completed work order sample form
6. Anonymised customer list
7. User roles and permissions matrix

**MAIA Provides**

- structured setup for customer, product, document, and user-role configuration
- review surfaces for imported or extracted transaction data
- auditability of created and updated records where supported by the implemented workflow

**System Behaviour**

Records that are incomplete, ambiguous, or unsupported by available master data remain subject to user review. MAIA does not treat incomplete extracted data as automatically approved transaction data.

**Dependencies / Notes**

- Final field mapping depends on sample files from Thermac.
- Client-provided data accuracy remains Thermac's responsibility.
- Document formats and required fields are subject to confirmation during implementation.

### 2.2.2 Role-Based Permissions

**Purpose**  
To reduce operational fragmentation by allowing each role to access the system areas required for their work without exposing unnecessary pricing or finance information.

**Applies To**  
Storekeeper, technician, sales, finance, operations/admin, and management.

**Inputs Required**

1. Final role list
2. Permission matrix
3. Record access rules by department or user group

**MAIA Provides**

- role-based workspace access
- restricted visibility for pricing, financial, operational, and service records based on user role
- separate operational access for storekeeper and technician use cases

**System Behaviour**

Users only see configured modules, records, and actions relevant to their assigned role. Permissions are configured according to Thermac's approved access matrix.

**Dependencies / Notes**

- The current pain point is that storekeepers cannot access AutoCount, creating double-entry between Esoft and AutoCount. MAIA permissions are intended to reduce this operational duplication where feasible.
- Final access rules cannot be completed until Thermac confirms the permissions matrix.

### 2.2.3 Pricing Intelligence

**Purpose**  
To reduce time spent opening old quotations and improve pricing consistency for returning customers.

**Applies To**  
Sales users preparing quotations, sales orders, and sales invoices.

**Inputs Required**

1. Historical quotation, sales order, and invoice data where available
2. Customer and item mapping
3. Product and service price references where available

**MAIA Provides**

- last five transactions for the same customer-item pair
- lifetime average price visibility
- 90-day moving average visibility
- pricing context displayed at the point of quotation, sales order, or invoice preparation

**System Behaviour**

Pricing intelligence is advisory. MAIA displays reference pricing but does not block, approve, or reject the sales user's final price.

**Dependencies / Notes**

- Historical pricing accuracy depends on clean historical data and customer-item matching.
- Service pricing formulas from Excel templates remain subject to mapping and validation.
- Drop-ship or purchase-on-demand items with market-fluctuating supplier prices may require manual user judgement.

### 2.2.4 Quotation Loss Tracking

**Purpose**  
To give management structured data on why quotations are lost and support future commercial decision-making.

**Applies To**  
Sales and management.

**Inputs Required**

1. Confirmed lost reason dropdown values
2. Reporting requirements
3. Any required relationship between quotations and opportunities

**MAIA Provides**

- lost status capture on quotations
- structured loss reason selection
- free-text explanation field
- reporting view for lost quotation analysis

**System Behaviour**

Users mark quotations as lost and select the applicable reason. The loss outcome is retained for reporting and review.

**Dependencies / Notes**

- Final backend reporting design is subject to implementation confirmation.
- This is not a full CRM pipeline replacement.

### 2.2.5 Statement of Account Visibility

**Purpose**  
To give finance users a clearer view of outstanding customer balances and overdue accounts.

**Applies To**  
Finance, management, and optionally customer-facing recipients.

**Inputs Required**

1. Invoice and payment records
2. Customer payment terms
3. Overdue grace-period rules
4. Confirmation of customer-facing access method

**MAIA Provides**

- internal debtor statement view
- open invoice visibility
- overdue account flagging
- optional customer-facing Statement of Account access through a secure link or similar controlled method

**System Behaviour**

MAIA flags overdue accounts based on invoice due date plus the configured grace period. Finance users remain responsible for follow-up and collections.

**Dependencies / Notes**

- MAIA does not automate collections.
- Customer-facing Statement of Account delivery method remains subject to confirmation.

## 2.3 Phase 01 | Product Sales and PO Conversion Workflow

### 2.3.1 Product Sales Order Intake

**Purpose**  
To support Thermac's standard product-sales document lifecycle inside MAIA.

**Applies To**  
Sales, finance, operations, and management.

**Inputs Required**

1. Customer details
2. Product catalogue
3. Quotation and sales document formats
4. Payment terms by customer type
5. Inventory availability references where applicable

**MAIA Provides**

- quotation creation and record keeping
- sales order creation and tracking
- invoice generation
- delivery note generation
- credit note support within standard MAIA behaviour
- customer and order visibility for authorised users

**System Behaviour**

Sales users review and confirm order details before downstream documents are generated. New customer payment terms, regular customer credit terms, and large-order deposit requirements remain subject to configured business rules and user confirmation.

**Dependencies / Notes**

- Product-sales workflow is expected to use standard MAIA capabilities with Thermac-specific configuration.
- AutoCount integration details remain subject to final technical validation.

### 2.3.2 PO-to-Sales Order Conversion

**Purpose**  
To reduce manual re-keying of customer purchase orders received by email.

**Applies To**  
Sales and order-processing users.

**Inputs Required**

1. Customer PO documents
2. Product catalogue and item mapping
3. Customer mapping
4. Required PO fields for sales order creation

**MAIA Provides**

- PO document parsing through the CPO flow
- extraction of line items, quantities, descriptions, pricing, and relevant order data where detectable
- draft review screen for user validation
- sales order creation after user confirmation

**System Behaviour**

MAIA creates a draft CPO or equivalent review record. Users correct extracted information where needed. MAIA creates the sales order only after user confirmation.

**Dependencies / Notes**

- MAIA does not auto-confirm orders.
- Extraction accuracy depends on PO document quality and consistency.
- Ambiguous, low-quality, or unmapped inputs require manual correction.

### 2.3.3 Phase 01 Deliverables

- configured product-sales document lifecycle for quotations, sales orders, invoices, delivery notes, and credit notes
- PO-to-sales order conversion with human review
- pricing intelligence visibility for applicable customer-item pairs
- role-based workspace access foundation
- quotation loss tracking
- Statement of Account visibility
- CRM interaction logging for customer records

## 2.4 Phase 02 | Service Operations and Work Order Layer

### 2.4.1 Work Order Management

**Purpose**  
To create a structured system of record for Thermac service jobs from sale to completion.

**Applies To**  
Sales, service coordinators, technicians, operations/admin, and management.

**Inputs Required**

1. Completed work order sample form
2. Confirmed service job types
3. Required work order fields
4. Customer and equipment 
5. Technician role and assignment rules
6. Parts-planned and parts-used fields

**MAIA Provides**

- work order creation from sales order
- customer linkage
- job type, job scope, technician assignment, scheduled date, and status fields
- planned parts and actual parts-used tracking
- actual work performed and deviation capture
- photo and document attachments
- customer sign-off attachment storage
- 2-page work order PDF output
- audit trail for created and updated work orders

**System Behaviour**

Users manually update work order status as the job progresses. Completed work orders are retained in customer and equipment service history. Maintenance-type work orders can capture a next maintenance date for reminder purposes.

**Dependencies / Notes**

- MAIA does not automatically move a job from one status to another without user action.
- Final field structure depends on Thermac's completed work order sample.
- Large service jobs above approximately RM50,000 may require down payment before scheduling, subject to final process confirmation.

### 2.4.2 Calendar and Gantt Scheduling Views

**Purpose**  
To give service coordinators shared visibility over technician assignments, job dates, and schedule conflicts.

**Applies To**  
Service coordinators, operations/admin, management, and relevant technicians.

**Inputs Required**

1. Technician list
2. Work order dates
3. Job duration or planned schedule fields
4. Scheduling conflict rules, if any

**MAIA Provides**

- calendar view of active work orders
- Gantt-style work order schedule view
- technician assignment visibility
- creation, scheduling, and completion timestamps
- visual visibility into scheduling conflicts and workload patterns

**System Behaviour**

Scheduling changes are reflected in the work order schedule views. Users remain responsible for deciding how to resolve conflicts and reschedule jobs.

**Dependencies / Notes**

- MAIA does not provide AI-driven scheduling optimisation in the current scope.
- Advanced manpower capacity planning and absence-aware scheduling are future extension items.

### 2.4.3 Customer Service History

**Purpose**  
To preserve service history, equipment context, and technician notes at customer level.

**Applies To**  
Sales, technicians, service coordinators, operations/admin, and management.

**Inputs Required**

1. Customer list
2. Equipment records or initial equipment information
3. Work order links to customer and equipment
4. Technician notes and completion details

**MAIA Provides**

- equipment records under customer profiles
- work order linkage to customer and equipment
- customer service timeline
- technician comments and service history retention
- service context visible to authorised users

**System Behaviour**

Completed work orders and logged interactions form part of the customer service history. Equipment records accumulate service context as work orders are completed.

**Dependencies / Notes**

- The value of this capability depends on consistent logging by Thermac users.
- Deep individual asset lifecycle analytics, warranty tracking, and service interval analytics are future scope unless separately agreed.

### 2.4.4 Proactive Service Reminders

**Purpose**  
To turn completed service jobs into future follow-up opportunities.

**Applies To**  
Sales and service coordination users.

**Inputs Required**

1. Next maintenance date
2. Reminder threshold
3. Reminder recipients
4. Customer ownership or assigned salesperson

**MAIA Provides**

- next maintenance date field on maintenance-type work orders
- reminder trigger when the configured threshold is reached
- notification to the relevant user or role

**System Behaviour**

MAIA notifies the configured recipient when a maintenance follow-up is due. The user remains responsible for contacting the customer and scheduling any future service.

**Dependencies / Notes**

- Reminder rules, channels, and recipients remain subject to final confirmation.
- Predictive maintenance and automated interval analysis are excluded from the current scope.

### 2.4.5 Phase 02 Deliverables

- custom work order record and status flow
- 2-page work order PDF generation
- planned versus actual parts-used tracking
- attachments for photos, worksheets, and sign-off documents
- calendar and Gantt scheduling views
- customer service timeline
- equipment-linked work order history
- next maintenance date reminder trigger

## 2.5 Phase 03 | Future Scope Not Included in Current Delivery

The following items are intentionally parked as future extension scope:

- individual asset or equipment lifecycle tracking by serialised unit
- warranty status and advanced service interval analytics
- predictive or AI-assisted maintenance intelligence
- advanced scheduling optimisation and capacity planning
- exchange-rate impact analysis for imported product margin decisions
- deeper Esoft integration if technical validation shows additional custom work is required
- automated collections or payment recovery workflow
- full CRM pipeline management beyond interaction logging and quotation loss tracking

# 3. Estimated Timelines

All durations are indicative and depend on scope complexity, access readiness, data availability, third-party responsiveness, sample document quality, and client approvals.

| Phase | Scope Summary | Indicative Time Taken | Dependencies | Acceptance Trigger |
|---|---|---:|---|---|
| Phase 01 - Sales Operations Foundation | Product-sales document lifecycle, PO conversion, pricing intelligence, role-based access, quotation loss tracking, SOA visibility | 4-6 weeks | Sample sales documents, customer list, product catalogue, pricing files, AutoCount validation | Core product-sales workflow and agreed Phase 01 deliverables accepted in UAT |
| Phase 02 - Service Operations and Work Order Layer | Work order management, calendar/Gantt scheduling, service history, equipment records, service reminders | 6-8 weeks | Completed work order sample, service process confirmation, technician list, equipment data, reminder rules | Service work order and scheduling workflow accepted in UAT |
| Phase 03 - Future Extension Scope | Asset lifecycle, advanced scheduling, exchange-rate analysis, deeper integrations | TBC | Separate discovery and estimation | Separate sign-off or change request |

# 4. Commercial Structure

- **Pricing Model:** One-off implementation investment for the currently documented scope.
- **One-off Development Cost:** RM 35,000, subject to final commercial confirmation.
- **Customization Fees:** Any work outside the stated current scope requires separate estimation and approval.
- **Payment Terms:** TBC.
- **Renewal & Escalation:** TBC.

## 4.1 One-Off Development Cost

| Phase | Scope Summary | Fee Allocation | Amount |
|---|---|---:|---:|
| Phase 01 - Sales Operations Foundation | Product-sales lifecycle, PO conversion, pricing intelligence, permissions, quotation loss tracking, SOA visibility | TBC | TBC |
| Phase 02 - Service Operations and Work Order Layer | Work orders, scheduling views, service history, equipment records, maintenance reminders | TBC | TBC |
|  | **Grand Total** | **100%** | **RM 35,000** |

Note: The source material states a total investment of RM 35,000 but does not provide a confirmed phase-by-phase fee allocation.

## 4.2 Monthly Maintenance

| Item | Estimated |
|---|---:|
| Platform maintenance and support | TBC |
| Hosting or infrastructure support | TBC |
| AI or document-processing support, if applicable | TBC |
| **Grand Total** | **TBC** |

## 4.3 Estimated Third-Party Cost

| Item | Estimated Cost |
|---|---:|
| WhatsApp Business or messaging charges, if applicable | TBC |
| AI/OCR/document processing usage, if applicable | TBC |
| Hosting, storage, or infrastructure usage | TBC |
| External integration or vendor charges | TBC |
| **Estimated Total** | **TBC** |

Notes:

- Third-party charges are not confirmed in the source material.
- Any client-owned third-party account, API key, vendor subscription, or integration fee remains subject to confirmation.

## 4.4 Payment Terms

| Milestone | Percentage | Amount | Payment Trigger |
|---|---:|---:|---|
| Milestone 0 - Contract Signing | TBC | TBC | Upon mutual signing of SOW or commercial agreement |
| Milestone 1 - Phase 01 Completion and Acceptance | TBC | TBC | Upon UAT acceptance of Phase 01 deliverables |
| Milestone 2 - Phase 02 Completion and Acceptance | TBC | TBC | Upon UAT acceptance of Phase 02 deliverables |

# 5. Caveats & Exclusions

- Mindhive is not responsible for downtime, errors, performance issues, or data restrictions caused by AutoCount, Esoft, email systems, WhatsApp, or other client-designated third-party systems.
- Esoft integration is not assumed as a standard capability and requires technical validation.
- AutoCount remains the accounting system of record unless a different ownership model is explicitly agreed.
- Client is responsible for stable internet, user devices, staff readiness, internal access, and third-party account availability.
- Any integration not explicitly listed in this SOW is excluded and requires a change request.
- Client is responsible for accurate, complete, and timely data, including master files, historical transactions, product catalogue, customer records, pricing references, and sample documents.
- MAIA does not auto-confirm extracted purchase orders, auto-progress work orders, auto-schedule jobs, or automate collections in the current scope.
- Advanced asset lifecycle tracking, predictive maintenance, advanced manpower capacity planning, and exchange-rate impact analysis are excluded from the current scope.
- Any material change to document formats, workflow rules, integration requirements, or user permissions after sign-off may affect timeline and cost.

# 6. Service Level Agreements (SLAs)

## 6.1 Mindhive Commitments

- **System Availability:** Target availability to be confirmed based on final hosting and support package.
- **Support Response Times:** TBC unless governed by a separate master services agreement or support package.
- **Maintenance Windows:** Scheduled maintenance, where required, will be communicated in advance where practical.
- **Data Protection:** Mindhive will apply reasonable platform data protection practices based on the final deployment model.
- **Implementation Support:** Mindhive will support agreed configuration, workflow setup, UAT clarification, and issue triage for the scoped deliverables.
- **Scope Control:** Mindhive will flag requests that fall outside the agreed scope and route them through change request discussion.

## 6.2 Client Commitments

- **Point of Contact:** Thermac will assign a primary point of contact for project coordination and decision-making.
- **Timely Feedback:** Thermac will provide reviews, approvals, and clarifications within agreed turnaround times to avoid delivery delays.
- **Data Provisioning:** Thermac will provide complete and accurate files, sample documents, user roles, process rules, and integration details required for implementation.
- **User Access and Permissions:** Thermac will confirm user roles, access boundaries, and internal responsibilities before permission setup.
- **Third-Party Access:** Thermac will coordinate access to AutoCount, Esoft, email, WhatsApp, or other external systems where required.
- **Payments:** Thermac will make payments according to the agreed commercial milestones and payment terms once confirmed.

# 7. Appendix

## 7.1 Delivery Model

MAIA is expected to be delivered as a cloud-based platform with web workspace access for authorised users. Final deployment, hosting, support, and environment details remain subject to commercial and technical confirmation.

## 7.2 System Interfaces

| Interface | Intended Use | Notes |
|---|---|---|
| MAIA Web Workspace | Sales, finance, operations, management, and service coordination workflows | Primary workspace for structured records and dashboards |
| WhatsApp | Customer/order communication context and MAIA interaction where applicable | Exact bot or assistant flows subject to implementation design |
| Email | Customer PO receipt and document intake | Used for PO-to-sales order conversion where documents are suitable |
| AutoCount | Accounting and financial record system of record | Integration method subject to validation |
| Esoft | Inventory reference or operational stock context | Integration not standard; requires assessment |

## 7.3 Current Business Context

| Dimension | Detail |
|---|---|
| Business type | B2B product sales and service/maintenance operations |
| Monthly confirmed sales orders | Below 100 |
| Service inquiries | Approximately 7-8 per month |
| Sales team | 4 salespeople |
| Order channels | WhatsApp and email |
| Current accounting system | AutoCount, on-premise and office-access dependent |
| Current inventory system | Esoft |
| Current pricing method | Excel templates and historical quotation checking |

## 7.4 Core System Capabilities

The scoped MAIA implementation is intended to provide:

- structured customer, order, document, and service records
- human-reviewed PO extraction and order creation
- standard sales document lifecycle support
- service work order tracking from sale to completion
- role-based user access
- pricing reference visibility
- work order scheduling visibility
- service history and equipment record visibility
- reminder triggers based on configured service dates

## 7.5 Security and Compliance

Access will be configured based on user roles and approved permission rules. Final authentication, data isolation, backup, and compliance arrangements depend on the agreed deployment and support package.

## 7.6 Customisation and Extensibility

Future requests outside this SOW may be handled through change request, separate estimation, or a later-phase SOW. This includes advanced scheduling, deeper integrations, additional document formats, predictive maintenance, per-unit lifecycle analytics, or new workflow modules not explicitly committed in this document.

# 8. Acknowledgement & Agreement

This document serves as the baseline specification and framework for MAIA's implementation for Thermac Engineering Sdn Bhd. By signing below, both parties agree to the commitments, responsibilities, caveats, and exclusions set out herein.

**For Mindhive:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

**For Thermac Engineering Sdn Bhd:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

## See Also

- [[03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/03-04-26_Customer Narrative - Thermac]]
- [[03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/Meeting Notes/2026-03-26-Thermac-Requirements-Gathering]]
- [[02 - PM Playbook/Templates/[Template] SOW Writing Guide]]

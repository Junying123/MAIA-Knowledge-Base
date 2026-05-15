---
owner: Jun Ying
status: draft
last_reviewed: 2026-04-16
client: Thermac
document_type: sow
version: v2
created: 2026-04-16
source_notes:
  - "03 - Clients/JY_Handle_Clients/Thermac/SOW/13 Apr 2026 Thermac SOW.md"
  - "03 - Clients/JY_Handle_Clients/Thermac/Meeting Notes/16th_Apr_2026_client_proposal_meeting_notes_summary.md"
  - "03 - Clients/JY_Handle_Clients/Thermac/Narrative/16_Apr_2026_Thermac_client_narrative.md"
  - "03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/03-04-26_Customer Narrative - Thermac.md"
  - "03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/Meeting Notes/2026-03-26-Thermac-Requirements-Gathering.md"
---

The Services Agreement is made effective as of 2026-04-16.

| BETWEEN | **Mindhive Sdn Bhd** ("Mindhive"), with its office located at 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor. |
|---|---|
| AND | **Thermac Engineering Sdn Bhd** ("Thermac"), with its registered or operating address to be confirmed. |

# Scope of Work (SOW) - MAIA for Thermac Engineering v2

# 1. Executive Summary

Thermac Engineering Sdn Bhd operates a regional mechanical equipment and service business covering heat exchangers, pumps, maintenance, repairs, chemical cleaning, hydro-testing, regasketing, refurbishment, spare parts, and related field service work. The company manages both product sales and service jobs, with orders and enquiries currently flowing through WhatsApp, email, Excel templates, AutoCount, Esoft, Monday.com calendars, physical work order forms, and manual coordination.

The product-sales side of Thermac's business follows a quotation-to-delivery lifecycle. Customers enquire through WhatsApp or email, sales users prepare quotations, official purchase orders are received by email, sales orders are created, stock or supplier availability is checked, invoices are issued, delivery is arranged, and delivery notes are signed by customers.

The 16 Apr 2026 proposal review clarified that Thermac's quotation workflow is not a simple SKU-only quotation process. The quotation layer needs to support flexible pricing structures, historical price guidance, ad hoc charge rows, draft item handling, calculation inputs, salesperson-specific visibility, stock reservation governance, and integration-safe document controls. This SOW v2 therefore treats Phase 01 as a sales and quotation foundation rather than only a standard sales document setup.

The service side remains operationally complex. Service jobs require quotation, approval, scheduling, technician assignment, work order preparation, on-site execution, worksheet sign-off, parts-used tracking, invoicing, and future maintenance follow-up. Today, the service workflow depends heavily on individual memory, WhatsApp threads, physical forms, and disconnected calendars. This creates scheduling opacity, limited service history, manual price archaeology, and weak institutional memory.

This SOW v2 retains the core features from the 13 Apr 2026 SOW and adds the new quotation-related requirements raised during the 16 Apr 2026 proposal review:

- a MAIA product-sales operating foundation for quotations, sales orders, invoices, delivery notes, credit notes, and related records
- a flexible quotation workspace that can mix SKU rows, free-text rows, ad hoc charge rows, and draft items in the quotation table
- quotation calculation support for agreed pricing inputs such as freight, clearance, transportation fee, forex, margin, discount, and technical component inputs
- pricing intelligence at quotation entry, including previous price, average price, minimum price, maximum price, standard price, and customer-specific price where data is available
- draft item and ad hoc charge governance so flexible quotation entry does not corrupt item master data or downstream reporting
- salesperson-specific visibility rules for quotations, sales orders, and related records, with broader access for management, finance, operations, and admins where approved
- stock reservation governance to prevent double booking while avoiding premature stock deduction
- PO-to-sales order conversion with human review before confirmation
- quotation loss tracking, Statement of Account visibility, CRM interaction logging, and role-based permissions
- a service operations layer for work orders, technician scheduling, service history, equipment records, and maintenance reminders
- integration and data handling assumptions for AutoCount, Esoft, email, WhatsApp, and client-provided sample files

The current documented implementation investment is **RM 35,000**, subject to final commercial confirmation, payment terms, quotation design validation, integration validation, and dependency confirmation. The 16 Apr 2026 meeting also referenced an **annual subscription of RM 10,000**, reduced from RM 12,000, subject to final commercial agreement.

# 2. Phased Delivery Approach

## 2.1 Process Flow

- **Phase 01 - Sales Operations and Quotation Foundation**
  - Customer enquiries enter through WhatsApp or email.
  - Sales users prepare quotations in MAIA using product data, customer context, historical pricing, and the agreed flexible quotation structure.
  - Quotation users can mix existing SKU rows, free-text rows, ad hoc charge rows, and draft item rows where the final design supports these row types.
  - Quotation calculation inputs may include agreed cost and pricing factors such as freight, clearance, transportation fee, forex, margin, discount, plate price, gasket price, frame price, connection price, frame parts, number of plates, and number of gaskets.
  - Draft items and ad hoc charge rows remain subject to governance rules before they become official master data or sync downstream.
  - Customer purchase orders received by email are parsed through the PO-to-sales order conversion flow where applicable.
  - MAIA presents extracted order data for human review and correction before any sales order is confirmed.
  - MAIA supports the standard sales document lifecycle covering quotation, sales order, invoice, delivery note, and credit note.
  - AutoCount remains the accounting system of record unless otherwise confirmed during integration design.
  - Submitted or integrated documents may require cancellation and regeneration instead of direct editing, subject to AutoCount, MAIA, ERPNext, and implementation constraints.
  - Failed extraction, incomplete information, unmapped item data, or unsupported flexible rows remain in review status and are not auto-confirmed.

- **Phase 02 - Service Operations and Work Order Layer**
  - Approved service jobs are converted into structured work orders linked to the customer and relevant equipment record.
  - Work orders capture job type, job scope, technician assignment, scheduled date, planned parts, actual work performed, deviations, actual parts used, photos, worksheets, and customer sign-off attachments.
  - Calendar and Gantt views display active work orders, scheduling dates, assigned technicians, and scheduling conflicts.
  - Technicians and operations users manually update work order status as work progresses.
  - Completed work orders update the customer service timeline and equipment service history.
  - Maintenance-type work orders capture a next maintenance date used for follow-up reminders.
  - MAIA does not auto-schedule jobs, auto-progress job statuses, or replace human scheduling decisions.

- **Phase 03 - Future Extension Scope**
  - Future scope may include deeper per-unit asset lifecycle tracking, warranty context, advanced scheduling intelligence, exchange-rate impact analysis, deeper Esoft integration, advanced quotation costing models, or additional AutoCount workflow automation.
  - Phase 03 items are not committed in the current RM 35,000 scope unless separately confirmed through a variation order or change request.

## 2.2 Phase 01 | Common Platform Capabilities

### 2.2.1 Master Data and Document Inputs

**Purpose**  
To provide MAIA with enough structured input to support Thermac's quotation, sales order, service, document, pricing, item, and integration workflows.

**Applies To**  
Sales, finance, operations, storekeeper, technician, and management users.

**Inputs Required**

1. Pricing quotation Excel template, including quotation layout and calculation worksheet
2. Service costing Excel template
3. Sample sales orders, invoices, delivery orders, credit notes, and quotations
4. Inventory product catalogue and pricing list
5. Customer-specific pricing list, where available
6. Historical quotation, sales order, invoice, and pricing history data where available
7. Completed work order sample form
8. Anonymised customer list
9. User roles and permissions matrix
10. Draft item approval rules and minimum item master fields
11. Ad hoc charge categories, such as delivery fee, packaging fee, freight, clearance, transportation fee, or other agreed charge types
12. Stock reservation rules, including trigger, duration, release, override, and expiry logic
13. AutoCount integration constraints, document amendment rules, and field mapping requirements

**MAIA Provides**

- structured setup for customer, product, document, pricing, item, and user-role configuration
- review surfaces for imported or extracted transaction data
- configuration surfaces or workflows for agreed quotation row types
- auditability of created and updated records where supported by the implemented workflow
- a foundation for linking quotations, sales orders, invoices, delivery notes, credit notes, customer records, pricing references, and service records

**System Behaviour**

Records that are incomplete, ambiguous, unsupported, or inconsistent with available master data remain subject to user review. MAIA does not treat incomplete extracted data, draft item data, flexible quotation rows, or unmapped pricing inputs as automatically approved transaction data.

**Dependencies / Notes**

- Final field mapping depends on sample files from Thermac.
- Client-provided data accuracy remains Thermac's responsibility.
- Document formats and required fields are subject to confirmation during implementation.
- The flexible quotation design depends on technical validation of how row types, calculations, downstream documents, and AutoCount sync should behave.

### 2.2.2 Role-Based Permissions and Salesperson Visibility

**Purpose**  
To reduce operational fragmentation by allowing each role to access the system areas required for their work without exposing unnecessary pricing, finance, customer ownership, or commercial information.

**Applies To**  
Storekeeper, technician, sales, sales manager, finance, operations/admin, and management.

**Inputs Required**

1. Final role list
2. Permission matrix
3. Record access rules by department, owner, salesperson, or user group
4. Approved exceptions for manager, finance, operations, admin, and cross-team access
5. Rules for draft item creation, approval, and override access
6. Rules for stock reservation release, override, and visibility

**MAIA Provides**

- role-based workspace access
- restricted visibility for pricing, financial, operational, and service records based on user role
- salesperson-specific visibility for quotations, sales orders, and related sales records where technically feasible and approved
- broader oversight for managers, finance, operations, admins, and management where configured
- separate operational access for storekeeper and technician use cases

**System Behaviour**

Users only see configured modules, records, and actions relevant to their assigned role. Sales users can be restricted to their own quotations, sales orders, and related records, while approved oversight roles can view broader team data. Permissions are configured according to Thermac's approved access matrix.

**Dependencies / Notes**

- The current pain point is that storekeepers cannot access AutoCount, creating double-entry between Esoft and AutoCount. MAIA permissions are intended to reduce this operational duplication where feasible.
- Final access rules cannot be completed until Thermac confirms the permissions matrix.
- Salesperson-only visibility must be validated against MAIA, ERPNext, reporting, integration, and operational handoff needs.

### 2.2.3 Flexible Quotation Workspace

**Purpose**  
To support Thermac's real quotation workflow, which requires commercial flexibility, pricing calculation, historical reference, and structured downstream controls.

**Applies To**  
Sales users preparing quotations, sales managers reviewing pricing, finance or operations users relying on confirmed quotation data, and management reviewing quotation performance.

**Inputs Required**

1. Current quotation Excel workbook, including customer-facing quotation layout
2. Current quotation calculation worksheet and formulas
3. Required quotation table columns
4. Required row types, such as SKU item, free-text row, ad hoc charge row, draft item row, or service row
5. Required calculation input fields
6. Required output document format
7. Rules for which row types can convert to sales order, invoice, delivery note, and AutoCount sync
8. Rules for quotation revision, cancellation, regeneration, approval, and loss marking

**MAIA Provides**

- quotation creation and record keeping
- configurable quotation table structure based on confirmed row types
- ability to include existing SKU items in quotations
- ability to include agreed flexible or free-text rows in quotations
- ability to include agreed ad hoc charge rows, such as delivery fee, packaging fee, freight, clearance, transportation fee, or similar commercial charges
- ability to capture draft items during quotation where approved
- calculation fields for agreed pricing inputs, margin, discount, and cost factors
- display of historical pricing context during quotation entry where data is available
- quotation PDF or output document generation based on approved format
- quotation revision and status tracking within supported MAIA behaviour

**System Behaviour**

Quotation users can prepare commercially flexible quotations while MAIA preserves structure for confirmation, reporting, and downstream document creation. Flexible rows and draft items are not automatically treated as permanent item master records unless the agreed governance flow has been completed. Confirmed quotations may be converted into downstream sales records only when required validation, row mapping, and approval rules are satisfied.

**Dependencies / Notes**

- This is a custom quotation workflow, not only a standard SKU item picker.
- MAIA should preserve the business logic of Thermac's Excel-based quotation process, but it is not assumed to clone the Excel workbook screen-for-screen unless separately agreed.
- Final calculation logic depends on formula review and technical validation.
- Final row behaviour depends on downstream sales order, invoice, delivery note, AutoCount, pricing history, and reporting requirements.
- If quotation scope expands beyond the confirmed design, timeline and commercial impact may need reassessment.

### 2.2.4 Quotation Calculation and Commercial Inputs

**Purpose**  
To allow quotation users to calculate and justify quoted amounts using agreed technical and commercial pricing inputs.

**Applies To**  
Sales users preparing product and service quotations, sales managers reviewing margins, and management reviewing commercial decisions.

**Inputs Required**

1. Confirmed calculation formulas from Thermac's Excel quotation workbook
2. Required technical input fields
3. Required commercial input fields
4. Margin and discount rules
5. Currency and forex assumptions
6. Rules for how calculated values appear in customer-facing output documents

**MAIA Provides**

- capture of agreed component pricing fields, such as plate price, gasket price, frame price, and connection price
- capture of agreed quantity fields, such as frame parts, number of plates, and number of gaskets
- capture of agreed commercial factors, such as freight, clearance, transportation fee, forex, margin, and discount
- calculation support for agreed formulas where confirmed during implementation
- quotation amount output based on agreed calculation rules
- auditability of quotation inputs where supported by the implemented workflow

**System Behaviour**

Users enter or review calculation inputs inside the quotation workflow. MAIA calculates the quote amount based on agreed formulas and displays the result for user review before the quotation is sent or confirmed. Users remain responsible for final commercial judgement and customer-facing pricing decisions.

**Dependencies / Notes**

- Exact calculation scope is subject to formula review and implementation validation.
- Currency conversion, forex, supplier cost fluctuation, margin rules, and discount logic must be confirmed before development lock.
- Advanced margin simulation, exchange-rate impact analysis, or full pricing optimisation is excluded unless separately scoped.

### 2.2.5 Pricing Intelligence

**Purpose**  
To reduce time spent opening old quotations and improve pricing consistency for returning customers.

**Applies To**  
Sales users preparing quotations, sales orders, and sales invoices.

**Inputs Required**

1. Historical quotation, sales order, and invoice data where available
2. Customer and item mapping
3. Product and service price references where available
4. Customer-specific pricing data where available
5. Agreed calculation basis for average, minimum, maximum, standard, and previous prices

**MAIA Provides**

- latest or previous price visibility
- last five transactions for the same customer-item pair where available
- lifetime average price visibility where available
- 90-day moving average visibility where available
- minimum and maximum price visibility where available
- standard price visibility where available
- customer-specific price visibility where available
- pricing context displayed at the point of quotation, sales order, or invoice preparation

**System Behaviour**

Pricing intelligence is advisory. MAIA displays reference pricing but does not block, approve, or reject the sales user's final price. Users remain responsible for interpreting historical prices, market movement, forex changes, freight costs, customer-specific arrangements, and margin expectations.

**Dependencies / Notes**

- Historical pricing accuracy depends on clean historical data and customer-item matching.
- Service pricing formulas from Excel templates remain subject to mapping and validation.
- Drop-ship, purchase-on-demand, or imported items with market-fluctuating supplier prices may require manual user judgement.
- Thermac and Mindhive must confirm the calculation basis for previous, average, minimum, maximum, and standard price before these metrics are locked.

### 2.2.6 Draft Item and Ad Hoc Charge Governance

**Purpose**  
To let Thermac quote flexibly without turning the item master, pricing history, reporting, or downstream integrations into uncontrolled data.

**Applies To**  
Sales users, sales managers, operations/admin, finance, and item master administrators.

**Inputs Required**

1. Definition of draft item
2. Definition of ad hoc charge row
3. Minimum data required for draft item creation
4. Approval rules for converting draft items into official items
5. Charge categories and naming rules
6. Rules for what appears in downstream sales orders, invoices, delivery notes, and AutoCount
7. Rules for whether flexible rows are included in pricing history

**MAIA Provides**

- ability to capture agreed draft item information at quotation stage
- ability to include agreed ad hoc charge rows inside the quotation item table
- governance status or review handling for draft items where configured
- conversion path from draft item to official item master record where approved
- downstream mapping rules for agreed row types

**System Behaviour**

Draft items can be added during quotation only within the agreed governance rules. A draft item does not become an official item record until the required approval or confirmation conditions are met. Ad hoc charges can appear as quotation line items where agreed, but their downstream behaviour must follow the confirmed row mapping.

**Dependencies / Notes**

- Draft item and ad hoc charge behaviour affects item master governance, pricing history integrity, reporting consistency, and AutoCount sync.
- Final approval roles and required fields must be confirmed before implementation.
- Unsupported row types remain subject to manual handling or change request.

### 2.2.7 Stock Reservation Governance

**Purpose**  
To prevent double booking of stock while giving users visibility before stock is formally deducted.

**Applies To**  
Sales, operations, storekeeper, finance, and management.

**Inputs Required**

1. Reservation trigger event
2. Reservation duration or expiry rules
3. Release and override permissions
4. Rules for quotation-stage, approval-stage, and sales-order-stage reservation
5. Rules for whether reservation appears in MAIA, AutoCount, Esoft, or another reference layer
6. Stock visibility and availability data source

**MAIA Provides**

- visibility of reserved stock where data and rules are available
- reservation status or reference fields where configured
- release, override, or expiry handling based on approved permissions
- stock availability visibility without immediate deduction where the final process supports it

**System Behaviour**

MAIA applies the approved reservation rules when the agreed trigger occurs. Reserved stock remains visible according to configured permissions. Users with approved authority can release, override, or extend reservations where supported by the implemented workflow.

**Dependencies / Notes**

- The trigger for reservation is not yet confirmed and must be clarified before scope lock.
- MAIA does not assume premature stock deduction at quotation stage unless explicitly agreed.
- Reservation behaviour depends on inventory source of truth, AutoCount, Esoft, and final operating rules.

### 2.2.8 Quotation Loss Tracking

**Purpose**  
To give management structured data on why quotations are lost and support future commercial decision-making.

**Applies To**  
Sales and management.

**Inputs Required**

1. Confirmed lost reason dropdown values
2. Reporting requirements
3. Any required relationship between quotations and opportunities
4. Rules for quotation revision and loss marking

**MAIA Provides**

- lost status capture on quotations
- structured loss reason selection
- free-text explanation field
- reporting view for lost quotation analysis

**System Behaviour**

Users mark quotations as lost and select the applicable reason. The loss outcome is retained for reporting and review. Where multiple quotation revisions exist, final reporting logic must follow the confirmed relationship between quotation records and opportunity or deal records.

**Dependencies / Notes**

- Final backend reporting design is subject to implementation confirmation.
- This is not a full CRM pipeline replacement.

### 2.2.9 Statement of Account Visibility

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

## 2.3 Phase 01 | Product Sales, PO Conversion, and Document Controls

### 2.3.1 Product Sales Order Intake

**Purpose**  
To support Thermac's product-sales document lifecycle inside MAIA while allowing the quotation stage to remain flexible and governed.

**Applies To**  
Sales, finance, operations, and management.

**Inputs Required**

1. Customer details
2. Product catalogue
3. Quotation and sales document formats
4. Payment terms by customer type
5. Inventory availability references where applicable
6. Rules for flexible quotation row conversion to downstream documents
7. AutoCount document mapping and amendment rules

**MAIA Provides**

- flexible quotation creation and record keeping
- sales order creation and tracking
- invoice generation
- delivery note generation
- credit note support within standard MAIA behaviour
- customer and order visibility for authorised users
- document review before downstream confirmation

**System Behaviour**

Sales users review and confirm order details before downstream documents are generated. New customer payment terms, regular customer credit terms, large-order deposit requirements, flexible row conversion, and stock reservation remain subject to configured business rules and user confirmation.

**Dependencies / Notes**

- Product-sales workflow is expected to use standard MAIA capabilities with Thermac-specific quotation configuration.
- AutoCount integration details remain subject to final technical validation.
- If flexible quotation rows cannot map cleanly downstream, agreed manual handling or change request may be required.

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
5. Rules for handling unmapped items, draft items, flexible row references, and ad hoc charge lines

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

### 2.3.3 AutoCount Integration and Document Amendment Controls

**Purpose**  
To reduce duplicate entry while preserving accounting integrity for submitted and integrated documents.

**Applies To**  
Sales, finance, operations/admin, and management.

**Inputs Required**

1. AutoCount technical access method
2. AutoCount vendor or IT confirmation
3. Field mapping for customers, items, prices, sales orders, invoices, delivery notes, credit notes, and related documents
4. Rules for submitted document edits, cancellation, regeneration, and resubmission
5. Rules for flexible quotation rows, draft items, and ad hoc charges that need to sync downstream

**MAIA Provides**

- integration design based on confirmed AutoCount capabilities
- review and validation before transaction creation
- document control rules for confirmed records
- audit visibility where supported by the implemented workflow

**System Behaviour**

Documents that have been submitted, confirmed, or synced downstream may be restricted from direct editing. Amendments may require cancellation and regeneration, depending on final AutoCount, MAIA, ERPNext, and implementation constraints.

**Dependencies / Notes**

- The 16 Apr proposal review raised submitted-document edit restrictions as a key workflow concern.
- Final restrictions must be validated with the technical team and AutoCount integration method.
- Integration-safe controls may limit how flexible quotation data can be changed after confirmation.

### 2.3.4 Phase 01 Deliverables

- configured product-sales document lifecycle for quotations, sales orders, invoices, delivery notes, and credit notes
- flexible quotation workspace with agreed SKU, free-text, ad hoc charge, and draft item handling
- quotation calculation support for agreed technical and commercial inputs
- pricing intelligence visibility for applicable customer-item pairs
- draft item and ad hoc charge governance
- stock reservation governance based on confirmed rules
- salesperson-specific visibility and role-based workspace access foundation
- PO-to-sales order conversion with human review
- AutoCount integration and document control behaviour subject to technical validation
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
4. Customer and equipment records
5. Technician role and assignment rules
6. Parts-planned and parts-used fields
7. Linkage rules from quotation, sales order, or approved service job into work order

**MAIA Provides**

- work order creation from sales order
- customer and equipment linkage
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

### 2.4.3 Customer Service History and Equipment Records

**Purpose**  
To preserve service history, equipment context, and technician notes at customer and equipment level.

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
- advanced exchange-rate impact analysis for imported product margin decisions
- deeper Esoft integration if technical validation shows additional custom work is required
- advanced quotation costing, pricing optimisation, or margin simulation beyond agreed Phase 01 calculation support
- automated collections or payment recovery workflow
- full CRM pipeline management beyond interaction logging and quotation loss tracking
- additional document formats, row types, or integration behaviours not explicitly confirmed in this SOW v2

# 3. Estimated Timelines

All durations are indicative and depend on scope complexity, access readiness, data availability, third-party responsiveness, sample document quality, quotation design confirmation, integration validation, and client approvals.

| Phase | Scope Summary | Indicative Time Taken | Dependencies | Acceptance Trigger |
|---|---|---:|---|---|
| Phase 01 - Sales Operations and Quotation Foundation | Flexible quotation workspace, product-sales document lifecycle, quotation calculation support, draft items, ad hoc charges, stock reservation governance, PO conversion, pricing intelligence, role-based access, quotation loss tracking, SOA visibility, AutoCount controls | 6-8 weeks | Quotation Excel workbook, quotation formulas, sample sales documents, customer list, product catalogue, pricing files, permission matrix, reservation rules, AutoCount validation | Core quotation and product-sales workflow accepted in UAT |
| Phase 02 - Service Operations and Work Order Layer | Work order management, calendar/Gantt scheduling, service history, equipment records, service reminders | 6-8 weeks | Completed work order sample, service process confirmation, technician list, equipment data, reminder rules | Service work order and scheduling workflow accepted in UAT |
| Phase 03 - Future Extension Scope | Asset lifecycle, advanced scheduling, exchange-rate analysis, deeper integrations, advanced quotation costing | TBC | Separate discovery and estimation | Separate sign-off or change request |

Note: The 13 Apr SOW estimated Phase 01 at 4-6 weeks. The 16 Apr proposal review identified quotation as a larger design area. The Phase 01 estimate in this v2 should be treated as indicative and subject to technical scoping.

# 4. Commercial Structure

- **Pricing Model:** One-off implementation investment for the currently documented scope, with recurring subscription, maintenance, hosting, and third-party costs to be confirmed.
- **One-off Development Cost:** RM 35,000, subject to final commercial confirmation.
- **Annual Subscription:** RM 10,000 was discussed on 2026-04-16, reduced from RM 12,000, subject to final commercial confirmation.
- **Customization Fees:** Any work outside the stated current scope requires separate estimation and approval.
- **Payment Terms:** TBC.
- **Renewal & Escalation:** TBC.

## 4.1 One-Off Development Cost

| Phase | Scope Summary | Fee Allocation | Amount |
|---|---|---:|---:|
| Phase 01 - Sales Operations and Quotation Foundation | Flexible quotation workspace, product-sales lifecycle, PO conversion, pricing intelligence, draft items, ad hoc charges, permissions, stock reservation, quotation loss tracking, SOA visibility, AutoCount controls | TBC | TBC |
| Phase 02 - Service Operations and Work Order Layer | Work orders, scheduling views, service history, equipment records, maintenance reminders | TBC | TBC |
|  | **Grand Total** | **100%** | **RM 35,000** |

Note: The source material states a total implementation investment of RM 35,000 but does not provide a confirmed phase-by-phase fee allocation.

## 4.2 Recurring Subscription and Maintenance

| Item | Estimated |
|---|---:|
| Annual MAIA subscription | RM 10,000, subject to confirmation |
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
| AutoCount vendor support or integration charges, if applicable | TBC |
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
- AutoCount integration method, submitted-document edit restrictions, cancellation rules, regeneration behaviour, and sync constraints require final validation.
- Client is responsible for stable internet, user devices, staff readiness, internal access, and third-party account availability.
- Any integration not explicitly listed in this SOW v2 is excluded and requires a change request.
- Client is responsible for accurate, complete, and timely data, including master files, historical transactions, product catalogue, customer records, pricing references, quotation formulas, sample documents, and sample purchase orders.
- MAIA does not auto-confirm extracted purchase orders, auto-progress work orders, auto-schedule jobs, or automate collections in the current scope.
- MAIA does not replace user commercial judgement for quotation pricing, margin decisions, customer negotiation, stock reservation override, or final approval.
- Flexible quotation rows, draft items, ad hoc charge handling, quotation formulas, stock reservation rules, and salesperson-only visibility are subject to final design and technical validation.
- MAIA is not assumed to clone Thermac's Excel quotation workbook screen-for-screen unless separately agreed. The intent is to preserve agreed business logic in a structured quotation workflow.
- Advanced asset lifecycle tracking, predictive maintenance, advanced manpower capacity planning, full pricing optimisation, advanced forex impact analysis, and full CRM pipeline management are excluded from the current scope.
- Any material change to document formats, workflow rules, integration requirements, quotation calculation rules, reservation rules, or user permissions after sign-off may affect timeline and cost.

# 6. Service Level Agreements (SLAs)

## 6.1 Mindhive Commitments

- **System Availability:** Target availability to be confirmed based on final hosting and support package.
- **Support Response Times:** TBC unless governed by a separate master services agreement or support package.
- **Maintenance Windows:** Scheduled maintenance, where required, will be communicated in advance where practical.
- **Data Protection:** Mindhive will apply reasonable platform data protection practices based on the final deployment model.
- **Implementation Support:** Mindhive will support agreed configuration, workflow setup, quotation design clarification, UAT clarification, and issue triage for the scoped deliverables.
- **Scope Control:** Mindhive will flag requests that fall outside the agreed scope and route them through change request discussion.

## 6.2 Client Commitments

- **Point of Contact:** Thermac will assign a primary point of contact for project coordination and decision-making.
- **Timely Feedback:** Thermac will provide reviews, approvals, and clarifications within agreed turnaround times to avoid delivery delays.
- **Data Provisioning:** Thermac will provide complete and accurate files, sample documents, quotation templates, quotation formulas, user roles, process rules, and integration details required for implementation.
- **Quotation Design Confirmation:** Thermac will confirm required quotation row types, calculation inputs, approval rules, and output document behaviour before development lock.
- **User Access and Permissions:** Thermac will confirm user roles, access boundaries, salesperson visibility rules, and internal responsibilities before permission setup.
- **Stock Reservation Rules:** Thermac will confirm reservation trigger, duration, release, override, expiry, and data source rules before implementation.
- **Third-Party Access:** Thermac will coordinate access to AutoCount, Esoft, email, WhatsApp, or other external systems where required.
- **Payments:** Thermac will make payments according to the agreed commercial milestones and payment terms once confirmed.

# 7. Appendix

## 7.1 Delivery Model

MAIA is expected to be delivered as a cloud-based platform with web workspace access for authorised users. Final deployment, hosting, support, and environment details remain subject to commercial and technical confirmation.

## 7.2 System Interfaces

| Interface | Intended Use | Notes |
|---|---|---|
| MAIA Web Workspace | Sales, finance, operations, management, and service coordination workflows | Primary workspace for structured records, quotation entry, dashboards, approvals, and review workflows |
| WhatsApp | Customer/order communication context and MAIA interaction where applicable | Exact bot or assistant flows subject to implementation design |
| Email | Customer PO receipt and document intake | Used for PO-to-sales order conversion where documents are suitable |
| AutoCount | Accounting and financial record system of record | Integration method, document amendment rules, and sync behaviour subject to validation |
| Esoft | Inventory reference or operational stock context | Integration not standard; requires assessment |
| Quotation Excel Workbook | Source reference for Thermac quotation layout and calculation logic | Used for design and formula validation; not assumed to be cloned screen-for-screen |

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
| Current pricing method | Excel templates, quotation calculation worksheet, and historical quotation checking |
| Current quotation concern | Standard SKU-only flow is insufficient for Thermac's flexible commercial pricing process |

## 7.4 Core System Capabilities

The scoped MAIA implementation is intended to provide:

- structured customer, order, document, quotation, pricing, and service records
- flexible quotation entry with agreed row types and calculation inputs
- historical pricing guidance inside quotation workflow
- draft item and ad hoc charge governance
- human-reviewed PO extraction and order creation
- standard sales document lifecycle support
- stock reservation governance based on confirmed business rules
- service work order tracking from sale to completion
- role-based user access, including salesperson-specific record visibility where approved
- pricing reference visibility
- work order scheduling visibility
- service history and equipment record visibility
- reminder triggers based on configured service dates

## 7.5 Quotation Scope Clarifications Required

| Topic | Clarification Required |
|---|---|
| Hybrid quotation table | What row types are required, and which rows sync downstream? |
| Ad hoc charges | Should delivery, packaging, freight, clearance, transportation fee, and similar charges be items, service items, charge rows, or text rows? |
| Draft items | Who can create them, who approves them, and when do they become official master data? |
| Pricing references | How are previous, average, minimum, maximum, and standard prices calculated? |
| Forex and margin logic | Is MAIA expected to calculate these values or only display/store them? |
| Salesperson visibility | Which roles can see across all salesperson records? |
| Stock reservation | What event triggers reservation, and who can release or override it? |
| AutoCount constraints | Which document restrictions come from AutoCount, MAIA, ERPNext, or implementation design? |
| Service workflow | What is the minimum viable Phase 02 work order and scheduling scope? |

## 7.6 Security and Compliance

Access will be configured based on user roles and approved permission rules. Final authentication, data isolation, backup, and compliance arrangements depend on the agreed deployment and support package.

## 7.7 Customisation and Extensibility

Future requests outside this SOW v2 may be handled through change request, separate estimation, or a later-phase SOW. This includes advanced scheduling, deeper integrations, additional document formats, additional quotation row types, predictive maintenance, per-unit lifecycle analytics, advanced quotation costing, or new workflow modules not explicitly committed in this document.

# 8. Acknowledgement & Agreement

This document serves as the updated baseline specification and framework for MAIA's implementation for Thermac Engineering Sdn Bhd. By signing below, both parties agree to the commitments, responsibilities, caveats, and exclusions set out herein.

**For Mindhive:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

**For Thermac Engineering Sdn Bhd:**

| Signature |
|---|
| Name: TBC<br>Position: TBC<br>Date: TBC |

## See Also

- [[13 Apr 2026 Thermac SOW]]
- [[16th_Apr_2026_client_proposal_meeting_notes_summary]]
- [[16_Apr_2026_Thermac_client_narrative]]
- [[03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/03-04-26_Customer Narrative - Thermac]]
- [[03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/Meeting Notes/2026-03-26-Thermac-Requirements-Gathering]]
- [[02 - PM Playbook/Templates/[Template] SOW Writing Guide]]

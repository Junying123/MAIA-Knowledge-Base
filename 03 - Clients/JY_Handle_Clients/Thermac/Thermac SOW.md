---
owner: Jun Yan
status: draft
last_reviewed: 2026-04-07
client: Thermac
source_notes:
  - 03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/03-04-26_Customer Narrative - Thermac.md
  - 03 - Clients/We're cooked discovery/Requirement Gathering/Thermac/Meeting Notes/2026-03-26-Thermac-Requirements-Gathering.md
---

# Scope of Work (SOW) - MAIA for Thermac Engineering

## Overview

This document sets out the proposed scope of work for implementing MAIA for Thermac Engineering Sdn Bhd. It is based on the Thermac customer narrative and the requirements gathering session held on 2026-03-26, and is intended to align delivery scope, assumptions, dependencies, and commercial expectations for both the standard product-sales flow and the custom service operations layer.

## Introduction

### About MAIA

MAIA is a WhatsApp-first, workflow-driven business operating system that supports quotation, sales order, invoicing, delivery, customer coordination, and role-based workspace operations. For Thermac, MAIA is intended to support both the standard product-sales document lifecycle and the more tailored service work order lifecycle that sits behind Thermac's maintenance and repair business.

### Purpose of This Document

This SOW defines:

- what is proposed for delivery in the current scope
- what is expected to be configured within MAIA's existing baseline capabilities
- what requires deeper enhancement within the same operational flow
- what remains outside the current scope or subject to future confirmation

### Mutual Commitment

This document is intended to support expectation alignment between Mindhive and Thermac before implementation proceeds. Items that depend on sample files, integration validation, user access decisions, or further process confirmation are marked as subject to confirmation or `TBC`.

## Product Specifications

Thermac operates two connected business motions:

- a product-sales business covering quotation, sales order, delivery, and invoice issuance
- a service business covering maintenance, repair, technician scheduling, customer equipment history, and work order execution

The product-sales flow aligns well with MAIA's standard baseline capabilities. The service flow requires a more tailored work order and scheduling layer to capture job planning, execution, and after-service follow-up in a structured way.

### Phase Definitions

| Phase | Name | Description |
|---|---|---|
| A1 | Core MAIA Baseline | Standard quotation-to-invoice flow, role-based workspaces, document generation, and baseline operational records |
| A2 | Business Rule and SOP Configuration | Pricing context, reminders, role-based access controls, and operating rules inside the core flow |
| A3 | Enhancements Within Core Flow | Work order, scheduling, service history, and service reminder enhancements tied to Thermac's service operations |
| B | Future / Custom Extension Scope | More advanced asset lifecycle logic, deeper scheduling intelligence, or other items requiring separate validation |

## Phase A1 - Core MAIA Baseline

Phase A1 covers the standard operating foundation for Thermac's product business and the baseline records needed to support implementation.

### 1. Product Sales Document Flow

**Purpose**  
To digitize Thermac's standard product-sales lifecycle using MAIA's existing baseline capabilities.

**Users / Roles**  
Sales, operations, finance, and management.

**Platform**  
Desktop web workspace, with order capture inputs originating from WhatsApp and email.

**Included in Scope**

- quotation creation and management
- sales order creation and tracking
- invoice generation
- delivery note generation
- credit note support within MAIA's standard document lifecycle
- customer and order record visibility for authorised users

**Supported Outputs / Documents**

- quotation
- sales order
- invoice
- delivery note
- credit note

**Important Notes / Limitations**

- Product sales are expected to run primarily on MAIA's out-of-the-box document lifecycle with configuration rather than bespoke development.
- Purchase order inputs are received through email and order communications often originate via WhatsApp or email.
- Payment terms vary by customer profile, including upfront payment for new customers and up to 90-day credit terms for regular customers.

### 2. Role-Based User Workspaces

**Purpose**  
To provide each user group with the records and actions relevant to their responsibilities without exposing unrelated information.

**Users / Roles**  
Storekeeper, technician, sales, finance, operations or admin, and management.

**Platform**  
Desktop web workspace.

**Included in Scope**

- role-based access to customer, order, work order, and finance views as configured
- access separation so operational users do not need to share full accounting visibility
- workspace access aligned to Thermac's permissions model once finalised

**Important Notes / Limitations**

- Final permissions remain subject to the client-provided access-rights list.
- Access design should reduce the current double-entry burden created by separating Esoft and AutoCount access by role.

### 3. CRM Interaction Logging

**Purpose**  
To provide a basic customer interaction trail so account context is not lost across staff members.

**Users / Roles**  
Sales, authorised operations users, and management.

**Platform**  
Desktop web workspace.

**Included in Scope**

- call notes
- visit notes
- follow-up notes
- account-level interaction history

**Important Notes / Limitations**

- This is intended as lightweight CRM interaction tracking, not a full pipeline CRM replacement.
- The value of this module depends on consistent user adoption and logging discipline.

## Phase A2 - Business Rule and SOP Configuration

Phase A2 covers policy, controls, and reminder logic that sits inside Thermac's operating flow without introducing a separate business architecture.

### 4. Pricing Intelligence

**Purpose**  
To reduce time spent searching historical quotations and improve pricing consistency when quoting repeat customers.

**Users / Roles**  
Sales and authorised finance or management users.

**Platform**  
Quotation, sales order, and invoice screens in MAIA.

**Included in Scope**

- last 5 transactions shown for the same customer-item pair
- lifetime average price visibility for the item
- 90-day moving average visibility for the item
- advisory pricing context surfaced during quotation, sales order, and invoice preparation

**Important Notes / Limitations**

- This is advisory logic, not price enforcement.
- Accuracy and usefulness depend on historical transaction availability and clean item matching.
- Thermac's separate Excel-based service costing logic may still require process mapping and reference inputs during implementation.

### 5. Proactive Service Reminder Triggers

**Purpose**  
To support recurring maintenance follow-up and reduce reliance on individual memory for service renewals.

**Users / Roles**  
Sales and authorised service coordinators.

**Platform**  
MAIA notifications and related customer or work order records.

**Included in Scope**

- next maintenance date captured on applicable maintenance-type work orders
- reminder trigger for follow-up when the configured threshold is reached

**Important Notes / Limitations**

- Reminder timing, recipients, and thresholds remain subject to final confirmation.
- This is a baseline reminder layer, not predictive maintenance intelligence.

### 6. Quotation Loss Tracking

**Purpose**  
To create structured visibility into lost quotations and improve future pricing and sales review.

**Users / Roles**  
Sales and management.

**Platform**  
Quotation records and reporting views in MAIA.

**Included in Scope**

- lost quotation status handling
- structured loss reason capture
- optional free-text explanation
- reporting visibility for management review

**Important Notes / Limitations**

- The preferred implementation approach is to preserve quotation-level user handling while syncing the loss outcome to a reporting-friendly backend model, subject to final design confirmation.

### 7. Statement of Account View

**Purpose**  
To improve overdue-account visibility for finance users and reduce manual follow-up effort.

**Users / Roles**  
Finance, management, and optionally customer-facing recipients through a secure external view.

**Platform**  
Desktop web workspace and secure external access method subject to confirmation.

**Included in Scope**

- internal debtor view
- open-invoice and overdue visibility
- configurable overdue flagging based on invoice due date plus grace period
- customer-facing statement view via secure link or similar controlled method

**Important Notes / Limitations**

- This does not automate collections activity.
- Final customer-facing delivery method remains subject to confirmation.

## Phase A3 - Enhancements Within Core Flow

Phase A3 covers the tailored service operations layer that turns Thermac's currently fragmented service workflow into a structured system of record.

### 8. Work Order Management

**Purpose**  
To create a formal end-to-end operating record for service jobs from sale through completion.

**Users / Roles**  
Sales, service coordinators, technicians, operations, and management.

**Platform**  
Desktop web workspace, with technician updates recorded against the work order.

**Included in Scope**

- work order creation from sales order
- customer and equipment linkage
- job type capture such as installation, repair, maintenance, or cleaning
- scheduled date and technician assignment
- planned scope and parts required
- actual work performed and deviation logging
- planned versus actual parts-used tracking
- photo and signed-document attachment to the work order
- 2-page PDF output reflecting pre-job and post-job information
- audit trail of creation and updates

**Supported Outputs / Documents**

- work order PDF
- attached photos
- signed worksheets or job documents

**Important Notes / Limitations**

- Job progression is expected to remain manually updated by users rather than auto-advanced by system logic.
- Large service-order rules such as down payment before scheduling may require final confirmation during process mapping.
- Final field structure should be validated against the completed work order samples requested from the client.

### 9. Calendar and Gantt Scheduling Views

**Purpose**  
To give Thermac a shared planning view for technician allocation and service job timing.

**Users / Roles**  
Service coordinators, operations, and management.

**Platform**  
Desktop web workspace.

**Included in Scope**

- calendar-based work order scheduling view
- Gantt-style work order timeline visibility
- shared view of active scheduled jobs
- timestamps for job creation, scheduling, and completion
- visibility into workload and scheduling conflicts

**Important Notes / Limitations**

- This does not include algorithmic auto-scheduling or route optimisation.
- Capacity planning logic, daily manpower balancing, and advanced scheduling automation are outside the current scope unless separately agreed.

### 10. Customer Service History and Equipment Records

**Purpose**  
To build institutional memory around what equipment each customer has, what service was performed, and when follow-up is due.

**Users / Roles**  
Sales, service coordinators, technicians, and management, subject to access permissions.

**Platform**  
Desktop web workspace.

**Included in Scope**

- equipment records linked under the customer record
- work order linking to the relevant equipment
- service timeline visibility by customer
- technician comments and service notes retained as part of job history
- maintenance-related context retained for future follow-up

**Important Notes / Limitations**

- This scope supports customer-level service history and equipment-linked work order history.
- More granular per-unit lifecycle analytics, warranty logic, or advanced asset intelligence belong in a later extension phase.
- The usefulness of this module depends on consistent record maintenance by the Thermac team.

### 11. PO-to-Sales Order Conversion

**Purpose**  
To reduce manual re-keying of customer purchase orders and lower data-entry error rates.

**Users / Roles**  
Sales and authorised order-processing users.

**Platform**  
Email-sourced PO input with review in MAIA.

**Included in Scope**

- customer purchase order parsing through MAIA's CPO flow
- structured extraction of line items, quantities, descriptions, and other relevant order details
- draft record review and manual correction by the user
- sales order creation after user confirmation

**Important Notes / Limitations**

- This remains human-in-the-loop and does not auto-confirm orders.
- Extraction quality depends on the quality and consistency of incoming PO documents.

## Phase B - Future / Custom Extension Scope

The items below are not proposed as committed scope in the current build. They are listed to preserve future direction and to prevent scope leakage into the current project.

### 12. Future Extensions Subject to Separate Validation

- per-unit asset lifecycle tracking, including machine-specific maintenance history and warranty context
- proactive maintenance intelligence based on interval analysis rather than only manually set next-maintenance dates
- advanced manpower and capacity scheduling logic
- exchange-rate impact support for imported product margin analysis
- deeper Esoft integration beyond currently validated capabilities

## Integration and Data Dependencies

### 13. System Touchpoints

| System | Direction | Intended Use | Status |
|---|---|---|---|
| MAIA <-> AutoCount | Subject to validated integration design | Accounting compliance, invoice and related financial record support | Expected capability, final method subject to confirmation |
| MAIA <-> Esoft | Subject to technical validation | Inventory visibility and reduction of double-entry burden | Not standard, requires assessment |
| Email -> MAIA | Inbound | Customer PO receipt and conversion flow | In scope |
| WhatsApp -> MAIA | Inbound / operational context | Order communication and ongoing coordination context | In scope as part of MAIA operating model |

### 14. Dependencies and Required Inputs

Implementation remains dependent on the client providing the following items:

- pricing quotation Excel template
- service costing Excel template
- sample quotations, sales orders, invoices, delivery orders, and credit notes
- inventory product catalogue and pricing references
- completed work order sample form
- anonymised customer list
- permissions and access-rights list

## Estimated Timelines

The dates below are indicative and should be refined after sample documents, integration inputs, and final scope confirmation are completed.

| Phase | Scope Summary | Indicative Duration | Target Timing | Notes |
|---|---|---|---|---|
| A1 | Product-sales baseline, role-based workspace foundation, CRM interaction logging | 2-4 weeks | TBC | Depends on document samples, role setup, and baseline configuration decisions |
| A2 | Pricing intelligence, reminders, quotation loss tracking, SOA configuration | 2-4 weeks | TBC | Depends on historical data structure, notification rules, and finance review requirements |
| A3 | Work order, scheduling views, service history, PO conversion | 4-8 weeks | TBC | Depends on work order sample mapping, process confirmation, and integration readiness |
| B | Future custom extensions | TBC | TBC | Requires separate discovery and estimation |

## Commercial Structure

### 15. Pricing Summary

Based on the current Thermac narrative, the documented implementation investment for the scoped solution is:

- **One-off implementation investment:** `RM 35,000`

This should be treated as the current working commercial reference for the scope described in the Thermac narrative, subject to final commercial confirmation.

### 16. Payment Terms

Payment terms were not fully confirmed in the source material and should be finalised commercially.

| Milestone | Percentage | Amount | Payment Trigger |
|---|---:|---:|---|
| Project confirmation | TBC | TBC | TBC |
| UAT / delivery milestone | TBC | TBC | TBC |

### 17. Recurring / Ongoing Fees

- Subscription, hosting, support, or maintenance charges are not confirmed in the source material and remain `TBC`.

## Caveats and Exclusions

### 18. Caveats

- Esoft integration is not assumed as a guaranteed standard capability and requires technical validation.
- Final permissions and role boundaries depend on the access-rights matrix to be provided by the client.
- Work order structure and final PDF design depend on client sample documents and implementation confirmation.
- Any items that materially expand into asset lifecycle analytics, advanced scheduling automation, or non-standard process flows should be handled through a separate change request or later-phase scope.

### 19. Out of Scope

- automated job progression without user action
- AI-driven scheduling optimisation
- automated collections execution
- full CRM pipeline management
- auto-confirmation of orders or transactions
- any unvalidated third-party integration outside the scope described above

## Service Level and Commitments

### 20. Mindhive Commitments

- deliver the agreed scope based on mutually confirmed process mapping and dependencies
- flag technical or scope risks where validation is still required
- configure the baseline MAIA flow and agreed enhancement layers within the documented scope
- support UAT and delivery alignment subject to timely client feedback and required inputs

### 21. Thermac Commitments

- provide the requested source files, sample documents, and role requirements in a timely manner
- validate business rules, work order structure, and operational exceptions during implementation
- assign the appropriate stakeholders for business, finance, and operational approvals
- provide timely review feedback to avoid scope and schedule delays

## Appendix

### 22. Business Context Summary

| Dimension | Detail |
|---|---|
| Business model | Product sales plus service and maintenance operations |
| Monthly confirmed sales orders | Below 100 |
| Service inquiry volume | Approximately 7-8 per month |
| Sales team size | 4 salespeople |
| Current systems | AutoCount, Esoft, Excel pricing and service costing templates |
| Primary channels | WhatsApp and email |

### 23. Current Pain Points Addressed

- repetitive manual order entry from customer POs
- hard-to-access historical pricing context
- no shared service scheduling visibility
- no structured work order tracking from sale to completion
- missing equipment and service history records
- lost quotation reasons not formally tracked
- double-entry burden between Esoft and AutoCount
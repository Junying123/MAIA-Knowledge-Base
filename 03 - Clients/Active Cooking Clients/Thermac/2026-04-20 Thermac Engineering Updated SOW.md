---
owner: Gareth
status: draft
last_reviewed: 2026-04-20
client: Thermac
document_type: sow
version: v2.1
source_notes:
  - "03 - Clients/Active Cooking Clients/Thermac/Thermac_SOW_First_Draft.md"
  - "03 - Clients/Active Cooking Clients/Thermac/2026-04-17 Customer Narrative - Thermac.md"
  - "03 - Clients/Active Cooking Clients/Thermac/Customer Narrative - Thermac.md"
---

# Scope of Work (SOW) - MAIA for Thermac Engineering

**Between:** Mindhive Sdn Bhd ("Mindhive") - 7, Jln Penyajak U1/45A, Hicom-glenmarie Industrial Park, 40150 Shah Alam, Selangor

**And:** Thermac Engineering Sdn Bhd ("Thermac") - 26A, Jalan Permata 8/KS9, 41200 Klang, Selangor

**Date:** 20 Apr 2026

---

## Executive Summary

Thermac Engineering operates a regional mechanical equipment and service business covering heat exchangers, pumps, maintenance, repairs, chemical cleaning, hydro-testing, regasketing, refurbishment, spare parts, and related field service work. Thermac manages both product sales and service jobs.

**Current tools:** WhatsApp, email, Excel quotation templates, AutoCount, Esoft, Monday.com calendars, physical work order forms, photos, worksheets, signed forms, and manual coordination.

This updated SOW defines a two-phase implementation:

- **Phase 1 - Base MAIA:** product sales foundation, quotation workflow, PO-to-sales order conversion, user workspaces, pricing reference, Statement of Account visibility, role-based access, and AutoCount/Esoft integration context.
- **Phase 2 - Customisation / Work Order:** service work order management, calendar and Gantt scheduling views, customer service history, equipment records, planned vs actual parts tracking, attachment handling, service reminders, and work order PDF output.

The key update from the earlier SOW is Thermac's quotation workflow. Thermac currently creates quotations in Excel. The workbook has two main sheets: the first sheet is the customer-facing quotation layout, and the second sheet is a formula-driven calculation table used to calculate the amount quoted to customers. This calculation table includes fields such as plate price, gasket price, frame price, connection price, frame parts, number of plates, number of gaskets, margin, and discount.

Thermac wants MAIA to preserve this quotation calculation behaviour while also surfacing old historical pricing so the salesperson has a point of reference before sending a quote.

**Current investment reference: RM35,000**

---

## Pain Points Covered

| Pain Point | Scope Response |
|---|---|
| Quotation pricing logic lives in Excel | Phase 1 includes a Thermac quotation calculator layer |
| Quotation has separate layout and formula sheet | Phase 1 preserves both customer-facing output and working calculation logic |
| Sales users manually search old quotations for pricing reference | Phase 1 includes historical pricing visibility |
| Margin, discount, forex, and component-cost assumptions are hard to carry | Phase 1 includes quotation calculation fields for agreed commercial inputs |
| Customer POs are manually re-keyed | Phase 1 includes PO-to-sales order conversion with human review |
| Esoft and AutoCount create duplicate work | Phase 1 includes integration context and role-based workspace access |
| Different teams need different visibility | Phase 1 includes role-based access and workspaces |
| Finance manually tracks outstanding balances | Phase 1 includes Statement of Account and overdue visibility |
| Service scheduling lives in calendars, WhatsApp, and memory | Phase 2 includes calendar and Gantt scheduling views |
| Service jobs are not tracked end to end | Phase 2 includes service work order management |
| Planned parts and actual parts used are not clearly tracked | Phase 2 includes planned vs actual parts tracking |
| Photos, worksheets, and signed forms are scattered | Phase 2 includes attachment handling on work orders |
| Customer equipment and service history are scattered | Phase 2 includes customer service history and equipment records |
| Service follow-up depends on memory | Phase 2 includes next maintenance date and reminder triggers |
| Lost quotation reasons are informal | Phase 1 includes quotation loss tracking |

---

## Phase 1 - Base MAIA

Phase 1 covers the base MAIA system required to support Thermac's product sales, quotation, order intake, document lifecycle, finance visibility, access control, and integration context.

### Internal Chatbot / Order Intake

**Platform:** WhatsApp, Email, MAIA web workspace

**Features:**

- Intelligent Document Processing (IDP) for customer PO parsing
- PO-to-Sales Order Conversion
- Draft CPO / review record for user validation
- Human review before confirmation
- No auto-confirmation of customer orders
- Sales Order creation after user confirmation
- Customer and order context visible to authorised users

### Quotation Management

**Baseline MAIA quotation scope:**

- Create quotation manually
- Customer and biller details
- Multi-line items with SKU, quantity, unit price, UoM, and notes
- Charges and discounts
- Payment terms
- Convert quotation to sales order
- Mark quotation as lost
- Quotation status visibility
- Output quotation document, subject to final template confirmation

### Thermac Quotation Calculator

Thermac's current Excel quotation workflow must be represented in MAIA as a structured quotation calculator.

**Current Excel model:**

| Sheet | Purpose |
|---|---|
| Sheet 1 - Quotation Layout | Customer-facing quotation format |
| Sheet 2 - Calculation Table | Formula table used to calculate the quote amount |

**Calculation inputs to be mapped, subject to final Excel review:**

- Plate price
- Gasket price
- Frame price
- Connection price
- Frame parts
- Number of plates
- Number of gaskets
- Margin
- Discount
- Freight, clearance, transportation fee, and other commercial cost inputs where confirmed
- Forex reference input where confirmed

**Expected behaviour:**

- User enters agreed calculation inputs in MAIA.
- MAIA calculates the quotation amount based on confirmed formula logic.
- The calculated amount flows into the customer-facing quotation.
- Salesperson can still exercise commercial judgement before sending.
- Final formula behaviour depends on Thermac providing the actual Excel file and confirming calculation rules.

### Historical Pricing Visibility

Thermac wants the salesperson creating a quotation to have old pricing as a point of reference.

**Pricing references to be surfaced where data is available:**

- Last 5 relevant transactions
- Previous or latest price
- Lifetime average price
- 90-day moving average where supported
- Minimum historical price
- Maximum historical price
- Standard price
- Customer-specific price where available

**Notes:**

- Historical pricing is advisory, not an approval rule.
- Historical pricing accuracy depends on historical data quality and customer-item matching.
- MAIA will not block a salesperson from quoting based on pricing history.

### Product Sales Document Lifecycle

Thermac's product sales flow will follow the standard MAIA document lifecycle:

```text
Quotation -> Sales Order -> Invoice -> Delivery Note -> Customer Signs DO
```

**Included output documents:**

- Quotation
- Sales Order
- Invoice
- Delivery Note
- Credit Note

**Known MAIA constraints:**

- Invoice cannot be created directly from HOLD sales order status.
- Multiple credit notes per invoice are not currently supported.
- Bulk record operations are not included.
- Currency behaviour follows current MAIA capability and should be confirmed before committing multi-currency behaviour.

### Quotation Loss Tracking

**Features:**

- Mark quotation as lost
- Capture lost reason
- Capture free-text explanation where supported
- Lost quotation reporting for management

### User Workspaces

**Sales Agent Workspace:**

- Quotation management
- Thermac quotation calculator
- Historical pricing reference view
- Sales order management
- Customer management
- Output document management
- Lost quotation reporting

**Finance Workspace:**

- Invoice visibility
- Statement of Account view
- Overdue flagging
- Finance follow-up support
- Outstanding account visibility

**Operations and Storekeeper Workspace:**

- Inventory reference access
- Delivery support
- Role-based operational access
- Reduced need for finance-system exposure

**Management Workspace:**

- Operational visibility
- Quotation loss reporting
- Outstanding account visibility
- Role-based oversight
- Sales and service visibility across teams

### Statement of Account

**Features:**

- Internal debtor view
- Open invoice visibility
- Overdue flagging
- Outstanding customer balance view
- Finance follow-up support
- Customer-facing SOA view, subject to final confirmation

**Note:** MAIA will not automate collections. Finance remains responsible for follow-up.

### Integration with AutoCount and Esoft

**Target systems:**

- AutoCount for accounting and financial record reference
- Esoft for physical inventory reference, subject to validation
- MAIA for sales, service, workflow, document preparation, and role-based operational visibility

**Integration method:**

- API preferred
- File-based import/export as alternate, using CSV, Excel, or XML where required

**Master data read, subject to technical validation:**

- Customers
- Items
- Pricing
- Credit terms
- Inventory reference

**Transactions write, subject to technical validation:**

- Sales Orders
- Invoices
- Delivery Notes
- Credit Notes

**Notes:**

- Final integration scope depends on AutoCount and Esoft access, vendor support, technical feasibility, and data quality.
- Esoft replacement is not included unless separately scoped.

---

## Phase 2 - Customisation / Work Order

Phase 2 covers Thermac's custom service operations layer. This phase is focused on work orders, technician scheduling, service history, equipment records, parts tracking, and service follow-up.

### Service Work Order Management

**Features:**

- Work Order creation from Sales Order or agreed service trigger
- Customer linkage
- Equipment linkage
- Job scope capture
- Job type
- Technician assignment
- Scheduled date
- Job status
- Actual work performed
- Deviation from planned work
- Parts planned vs parts used
- Photo attachment handling
- Worksheet attachment handling
- Signed form attachment handling
- Customer sign-off reference
- Audit trail
- 2-page Work Order PDF, subject to final template confirmation

**Notes:**

- Work order progression is manual and user-driven.
- MAIA will not automatically move jobs from one status to another without user action.
- Final work order fields depend on Thermac's completed work order sample.

### Planned Parts vs Actual Parts Used

**Features:**

- Planned parts captured before job execution
- Actual parts used captured after job execution
- Difference visible on the work order
- Parts usage retained in customer and equipment history

**Purpose:**

- Reduce stock drift
- Improve service costing visibility
- Preserve service execution details
- Support future reporting

### Calendar and Gantt Scheduling Views

**Features:**

- Shared calendar view
- Gantt view
- Active work order visibility
- Technician assignment visibility
- Job date visibility
- Scheduling conflict visibility
- Technician workload view
- Management and coordinator visibility

**Notes:**

- MAIA will not provide AI-driven scheduling optimisation in this scope.
- Planner remains responsible for final schedule decisions.

### Customer Service History

**Features:**

- Customer-linked service timeline
- Completed work order history
- Technician notes
- Service dates
- Parts used
- Attachment references
- Authorised visibility by role

**Purpose:**

- Reduce reliance on staff memory
- Preserve service knowledge when personnel changes
- Help sales and service teams understand past work before future follow-up

### Equipment Records

**Features:**

- Equipment records linked to customer
- Work orders linked to equipment
- Service history per equipment record
- Maintenance date context where captured
- Technician notes and work performed visible to authorised users

### Proactive Service Reminders

**Features:**

- Next Maintenance Date field
- Reminder trigger
- Follow-up recipient or role
- Follow-up context visible to authorised users

**Notes:**

- Reminder rules, recipients, channel, and timing must be confirmed by Thermac.
- Predictive maintenance is not included in this scope.

### Statement of Account Customer View

Phase 2 may include customer-facing Statement of Account access if confirmed.

**Features:**

- Internal debtor view
- Overdue flagging
- Customer-facing view through controlled link or access method

**Note:** Final customer-facing access method is subject to confirmation.

---

## Out of Scope / Future Extensions

The following items are not included unless separately scoped and approved:

- AI-driven scheduling optimisation
- Predictive maintenance
- Automated service interval prediction
- Fully automated collections
- Auto-confirmation of customer orders
- Automatic work order status progression
- Full CRM pipeline replacement
- Full Esoft replacement
- Deep Esoft integration beyond validated scope
- Mobile technician app beyond confirmed MAIA access
- Bulk operations
- Multiple credit notes per invoice
- Invoice creation directly from HOLD sales order status

---

## Estimated Timelines

### Phase 1: Base MAIA System

| Item | Indicative Time |
|---|---:|
| Onboarding and setup | 1-2 weeks |
| Base configuration | 1-2 weeks |
| Thermac quotation calculator mapping | 1-2 weeks |
| Historical pricing setup | 1-2 weeks |
| Integration validation | 1-2 weeks |
| User training and UAT | 1-2 weeks |

### Phase 2: Customisation / Work Order

| Item | Indicative Time |
|---|---:|
| Detailed scoping and work order mapping | 1-2 weeks |
| Work order build and configuration | 4-8 weeks |
| Calendar and Gantt setup | 1-2 weeks |
| Service history and equipment records | 1-2 weeks |
| Reminder configuration | 1 week |
| User training and UAT | 1-2 weeks |
| Go-live and hypercare | 1-2 weeks |

**Timeline notes:**

- Timelines depend on source files, formula confirmation, historical data quality, AutoCount/Esoft access, work order sample availability, and UAT turnaround.
- Any major change to formulas, document templates, integrations, or service workflow may affect timeline.

---

## Commercial Structure

### One-off Development Cost

| Item | Price |
|---|---:|
| Phase 1 - Base MAIA system, product sales, workspaces, RBAC, PO-to-SO, pricing intelligence, quotation calculator, SOA, integration validation | Included |
| Phase 2 - Customisation / Work Order, calendar/Gantt, service history, equipment records, reminders, parts tracking, work order PDF | Included |
| **Grand Total** | **RM35,000** |

### Payment Terms

| Milestone | Percentage | Price |
|---|---:|---:|
| Milestone 1 - Phase One Initiation | 50% | RM17,500 |
| Milestone 2 - UAT Sign Off | 50% | RM17,500 |

### Yearly Maintenance and Third-Party Costs

| Item | Estimated |
|---|---:|
| Annual subscription / platform maintenance reference | RM10,000 |
| Hosting or infrastructure | TBC |
| WhatsApp, email, AI, OCR, document processing | TBC |
| External vendor or integration fees | TBC |

---

## Required Client Inputs

Thermac will provide:

- Excel quotation template
- Quotation calculation formulas
- Sample customer quotations
- Historical quotation, sales order, and invoice records
- Product and item catalogue
- Customer list
- Pricing and credit term references, where available
- AutoCount access or vendor coordination
- Esoft access or vendor coordination, where applicable
- User role and permission matrix
- Completed work order sample
- Technician list
- Service scheduling rules
- Service reminder rules

---

## Assumptions and Caveats

- Final quotation calculator behaviour depends on Thermac's Excel formulas.
- Historical pricing visibility depends on historical data quality.
- AutoCount and Esoft integration are subject to technical validation.
- MAIA does not auto-confirm customer POs.
- MAIA does not auto-progress service work orders.
- MAIA does not automate collections.
- Work order PDF output depends on final template confirmation.
- Any scope beyond this document requires separate confirmation.

---

## SLAs

### Mindhive

- **System Availability:** 99.5% uptime target, subject to final hosting and support terms
- **Critical (P1):** Response within 2 hours
- **High (P2):** Response within 8 hours
- **Normal (P3):** Response within 2 business days
- **Lifetime Upgrades and Support:** Subject to active subscription and support arrangement

### Client Commitments

- Designate system administrators
- Provide accurate and timely data
- Provide quotation templates and formula logic
- Provide AutoCount/Esoft access or vendor support where required
- Confirm roles, permissions, and workflows
- Participate in UAT and training
- Respond within 2-3 working days during implementation

---

## Acceptance Summary

| Area | Acceptance Trigger |
|---|---|
| Base MAIA sales workflow | Quotation, sales order, invoice, delivery note, and credit note flows work within agreed MAIA behaviour |
| Quotation calculator | Agreed Thermac calculation inputs produce the required quotation amount and output |
| Historical pricing | Agreed historical pricing references appear during quotation preparation where data supports it |
| PO-to-SO | User can review parsed PO data and create a sales order after confirmation |
| Workspaces and access | Users see only agreed modules and records by role |
| Statement of Account | Finance can view outstanding and overdue account information |
| Work Order | User can create and update a service work order with agreed fields |
| Scheduling | Calendar and Gantt views show active work orders and technician assignments |
| Parts tracking | Planned parts and actual parts used are visible on work orders |
| Service history | Completed work orders appear in customer/equipment service context |
| Reminders | Next maintenance date can trigger agreed follow-up reminders |

---

## Signed

| Party | Name | Position | Signature | Date |
|---|---|---|---|---|
| Mindhive Sdn Bhd | TBC | TBC | TBC | TBC |
| Thermac Engineering Sdn Bhd | TBC | TBC | TBC | TBC |

## See Also

- [[Thermac_SOW_First_Draft]]
- [[2026-04-17 Customer Narrative - Thermac]]
- [[Customer Narrative - Thermac]]
- [[2026-03-26-Thermac-Requirements-Gathering]]

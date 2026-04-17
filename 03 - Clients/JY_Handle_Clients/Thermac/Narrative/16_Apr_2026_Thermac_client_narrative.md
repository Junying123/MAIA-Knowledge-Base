---
owner: Jun Yan
status: draft
last_reviewed: 2026-04-17
client: Thermac
document_type: client_narrative
meeting_date: 2026-04-16
source_notes:
  - "03 - Clients/JY_Handle_Clients/Thermac/Narrative/3 Apr 26 - MAIA for Thermac Engineering.md"
  - "03 - Clients/JY_Handle_Clients/Thermac/Meeting Notes/16th_Apr_2026_client_proposal_meeting_notes_summary.md"
  - "03 - Clients/JY_Handle_Clients/Thermac/13 Apr 2026 Thermac SOW.md"
---

# MAIA For Thermac Engineering - Updated Client Narrative

## Bringing Structure To Sales, Service, And Commercial Decision-Making

This narrative regenerates the Thermac story using the original 3 Apr 2026 narrative as the business foundation, then updates it with the 16 Apr 2026 proposal review context. The earlier narrative correctly framed Thermac as a regional mechanical equipment and service business whose biggest operational gaps sit in service coordination, work order tracking, customer equipment history, pricing memory, and fragmented systems.

The proposal review sharpened that story. Thermac's service operations remain a major custom layer, but the latest discussion showed that Phase 1 sales operations are not a simple standard quotation-to-invoice implementation. Thermac's quotation process is flexible, technical, calculation-heavy, and commercially sensitive. A successful MAIA implementation must therefore support both sides of the business:

- a flexible but governed sales operating layer for quotation, pricing, item handling, sales orders, stock reservation, permissions, and AutoCount integration
- a structured service operations layer for work orders, scheduling, technician assignment, parts usage, service history, equipment records, and follow-up reminders

The simple version of the narrative is this:

> MAIA gives Thermac one structured operating system for products and service, while preserving the commercial flexibility that makes Thermac responsive to complex customer requests.

## Who Thermac Is

Thermac Engineering Sdn Bhd is a specialist mechanical equipment supplier headquartered in Klang, Selangor, with offices in Singapore and Thailand and a partner network extending to Vietnam, Indonesia, and South Korea. Founded in 2014 with two to three people, the company has grown into a regional force in heat transfer technology and fluid handling, having supplied over 300 units of equipment across Southeast Asia to date.

The business operates across two tightly connected arms.

**The product business** is built around heat exchangers, pumps, spare parts, and related technical equipment. Thermac is the exclusive Southeast Asian representative for ARES, a European plate heat exchanger manufacturer. They carry plate, welded, brazed, and finned tube heat exchangers, alongside a pumps division covering progressive cavity, metering, air-operated double diaphragm, submersible, gear, and lobe pumps under the FLOMAC brand. Their market spans HVAC, district cooling, oil and gas, pharmaceutical, pulp and paper, palm oil, food and beverage, glove manufacturing, and power generation.

**The service business** covers maintenance, repair, chemical cleaning, UV inspection, hydro-testing, regasketing, pump refurbishment, spare parts supply, retrofitting, and field service work. This is not a side activity. It is a recurring relationship engine. A customer who buys a plate heat exchanger from Thermac may become a long-term service customer. A customer whose equipment was supplied by another vendor may still come to Thermac for service, parts, and technical expertise.

These two arms feed each other. Product sales create installed base. Service work protects customer relationships. Service history creates future sales opportunities. Spare parts and maintenance needs bring customers back into Thermac's orbit. That is why MAIA cannot treat Thermac as only a sales-order business or only a service-work-order business. Thermac needs both.

## The Updated Project Frame

The 16 Apr proposal review aligned directionally around a two-phase deployment.

| Phase | Focus |
|---|---|
| Phase 1 | Sales operations, quotation, sales order generation, credit note handling, AutoCount integration |
| Phase 2 | Service operations, work orders, scheduling, service history, parts usage, follow-up flows |

The commercial discussion referenced:

| Item | Amount |
|---|---:|
| Implementation fee | RM35,000 |
| Annual subscription | RM10,000 |

The annual subscription was discussed as reduced from RM12,000 to RM10,000.

The direction is still strong: replace fragmented tools, reduce manual work, centralise workflows, improve data visibility, and integrate with AutoCount to reduce duplicate entry and data inconsistency.

The important update is that Phase 1 is not just "turn on sales modules." The client made it clear that the quotation workflow must be flexible enough for Thermac's real commercial process. That means Phase 1 needs deliberate design around hybrid quotation rows, ad hoc charges, draft items, pricing references, stock reservation, role visibility, and integration-safe document controls.

## Before MAIA: How Thermac Operates Today

Thermac's current operation works because people know what to do. Salespeople know how to quote unusual requests. Coordinators know which technician can handle which job. Management knows when a scheduling conflict is serious. Storekeepers know where stock physically sits. Finance knows which documents need to be clean before they flow into accounting.

That human knowledge is valuable. The problem is that too much of it lives outside the system.

### The Quotation Workspace Lives In People's Heads

Every Thermac quotation is shaped by context. The salesperson may need to quote a standard SKU, include a delivery fee, add packaging, account for freight, handle clearance charges, factor in transportation cost, consider forex movement, apply margin logic, and still make the document readable to the customer.

Today, this sales quotation workflow is built around Excel. The file is not just a document template; it is also the working calculator that helps sales decide what number should be quoted.

The workbook currently has two important parts:

| Sheet | Purpose |
|---|---|
| Sheet 1 - Quotation layout | The customer-facing quotation format used to prepare the quote that will be sent out |
| Sheet 2 - Calculation table | A formula-driven working table where users input commercial and technical values to calculate the quote amount |

The second sheet is especially important because it captures Thermac's real pricing logic. Users enter values such as plate price, gasket price, frame price, connection price, frame parts, number of plates, and number of gaskets. The sheet then uses formulas to calculate the amount used in the quotation. It is also used to calculate margin and discount, so the quoted price is not just manually typed. It is derived from a working pricing model that the salesperson understands and adjusts.

Examples of fields used in the calculation table include:

- plate price
- gasket price
- frame price
- connection price
- frame parts
- number of plates
- number of gaskets
- margin
- discount
- exchange rate
- shipping
- clearance 

This is why Thermac pushed back against a rigid SKU-only quotation flow. Their users need a quotation table that can mix structured SKU items with flexible rows. A quote may include official catalogue items and non-standard commercial lines in the same working area. Delivery fee and packaging fee are examples, but the deeper requirement is that the quotation must support the real deal structure, not only the clean item master.

The old narrative already identified quotation as a time sink. Salespeople spend time opening past quotations to check what a returning customer paid previously. They need to avoid sending a price that is hard to defend. If a customer's new price swings too far from the previous one, the customer flags it. That creates back-and-forth, delays approvals, and weakens confidence.

The proposal review added more detail. Thermac wants visibility of:

- previous price
- average price
- minimum price
- maximum price
- standard price

They also want the new quotation flow to preserve the calculation behaviour they already rely on in Excel. MAIA should let the user calculate quote amounts using the relevant pricing inputs, margin, and discount logic, while also surfacing old historical pricing so the salesperson has a point of reference before sending the quote to the customer.

The real pain is not only document generation. It is the absence of a structured quotation workspace where calculation, judgement, and historical pricing reference come together in one place.

### Draft Items Exist Before Master Data Is Ready

Thermac also needs to handle items that are not yet confirmed in the SKU list. In real sales work, a temporary item may need to be quoted before the official database is clean. The client expects that a draft item can be added during quotation, then become part of the database after the quotation is confirmed.

This is a useful workflow, but it needs governance. If temporary rows become official items too easily, the item master becomes messy. If approval is too strict, sales loses speed. If draft items do not sync cleanly downstream, reporting and AutoCount integration become fragile.

This is the core tension Thermac is asking MAIA to solve: keep sales flexible without letting the data become chaotic.

### The Scheduling Black Box

Thermac's service jobs are coordinated through a combination of WhatsApp messages, individual Monday.com calendars, phone calls, physical work order forms, and coordinator memory. There is no unified view of which technician is assigned where, when jobs are due, how long jobs actually take, or where conflicts are forming.

The stakes are high because many industrial clients have dedicated maintenance downtime windows. If Thermac misses the window, the client's equipment may not be available again for weeks or months. If the work must be completed inside that window no matter what, Thermac may need to pull technicians from breaks or other assignments, creating overtime cost, stress, and disruption to other jobs.

Today, there is no reliable record of the delta between when a job was created, when it was scheduled, and when it was completed. There is no easy way to see that three jobs are stacked in one week while the next week is underused. The planning function works because experienced people keep it moving, but the system does not carry the load.

### The Invisible Job Lifecycle

When a service job is sold, the handoff from sales to operations runs through a manual flow: quotation, approval, scheduling, technician assignment, work order preparation, on-site execution, worksheet sign-off, invoicing, and follow-up. The work order form is physical. Photos and signed worksheets move through chat. Completion status lives in replies and memory.

This means Thermac has limited institutional memory of service work. When a client asks what was done previously, the answer may depend on finding the right technician or the right chat history. When a coordinator changes, service context must be rebuilt. When management wants utilisation, throughput, delay, or quality visibility, there is no clean service record to query.

Parts usage adds another issue. Technicians may bring standby parts to site, but the difference between planned parts and actual parts used is not consistently recorded against a job. This creates inventory drift and makes service costing harder to analyse later.

### The Purchase Order Bottleneck

Customer purchase orders arrive by email. Details such as line items, quantities, descriptions, and pricing must be manually re-keyed. For a team handling fewer than 100 confirmed sales orders monthly, every manual entry step is a small drag that compounds. It also creates error risk: wrong quantity, wrong part number, wrong price, or missed detail.

### Customer And Equipment Records Are Scattered

Thermac wants better CRM-style visibility into customers, equipment units, service records, historical issues, parts used, and future maintenance timing. Today, much of this context lives informally. When a different salesperson or technician handles the same account, they may not inherit the full relationship history. When staff leave, knowledge leaves with them.

There are also no reliable automated reminders for periodic service. Follow-up relies on memory, habit, or individual discipline rather than a structured system.

### The Duplication Tax

Thermac currently works across AutoCount, Esoft, Excel, Monday.com, email, WhatsApp, and physical forms. Inventory data may need to be entered separately into Esoft for physical stock control and AutoCount for accounting. Storekeepers may be restricted from AutoCount to protect financial data, but that restriction creates parallel systems and duplicate work.

The real problem is not that Thermac lacks tools. The problem is that the tools do not form one operating picture.

## After MAIA: What Changes

MAIA should give Thermac a structured operating system across both product sales and service operations.

A sales user preparing a quotation should not be forced into a rigid SKU-only form. They should be able to build the quote around the commercial reality: SKU items, ad hoc charges, draft items, delivery or packaging fees, freight, clearance, forex assumptions, and margin context where required. They should also be able to perform the kind of calculation currently handled in Excel, using input fields such as plate price, gasket price, frame price, connection price, frame parts, number of plates, number of gaskets, margin, and discount. At the same time, MAIA should show pricing memory at the point of decision so the user does not need to search old quotations manually.

A customer purchase order should not need to be retyped line by line. MAIA should parse the PO through the CPO flow, extract the order data, and present it for human review. The user validates, corrects where needed, and confirms. MAIA handles the repetitive extraction work while humans remain responsible for judgement.

A service coordinator should open MAIA in the morning and see every active work order on a shared calendar or Gantt view. They can see assigned technicians, scheduled jobs, overdue work, upcoming service windows, and scheduling conflicts. When a client reschedules, the coordinator can see the operational impact immediately instead of reconstructing it through chats and memory.

A technician should complete the work and record what actually happened: work performed, deviations, actual parts used, photos, signed worksheets, and customer sign-off. The completed work order becomes part of the customer's service timeline and the equipment's history.

A salesperson should receive follow-up prompts when maintenance is due. Instead of relying on memory, they can open the customer record and see the service history before contacting the customer. That turns service records into future pipeline.

Finance and management should have clearer visibility across outstanding accounts, quotation losses, work order progress, and operational activity without asking someone to compile the picture manually.

Each user should see what they need. Sales should not necessarily see every salesperson's documents. Storekeepers should not need finance access to update operational stock context. Technicians should not need pricing visibility to update job progress. Managers, finance, operations, and admins may still need broader access. The permission model should protect commercial privacy without breaking operational continuity.

## The Core Design Principle

Thermac does not need MAIA to replace the judgement of its team. It needs MAIA to structure the environment around that judgement.

The best design principle for Thermac is:

> Flexible at quotation, governed at confirmation, auditable downstream.

At quotation stage, users need room to reflect real commercial cases. At confirmation stage, draft items, ad hoc charges, reservation rules, and pricing decisions need enough structure to become reliable business data. Downstream, sales orders, invoices, work orders, service records, and AutoCount sync need controls so the business can trust the record.

## Feature Narrative

### 1. Flexible Quotation Workspace

This is now the most important Phase 1 design area.

Thermac's quotation process needs to support both structured and flexible entry. A salesperson may need to select a known SKU, add a custom line, include delivery fee, include packaging, add other ad hoc charges, or build a quotation around temporary details that are not yet in the item master.

The client specifically wants a free-text style table with columns, while still being able to mix existing SKU items into that same structure. This means the quotation experience needs to feel like a working commercial table, not just a clean item picker.

The current Excel workflow should be treated as the reference model. Sheet 1 is the quotation layout. Sheet 2 is the calculation table that lets the user enter pricing and technical inputs, then calculate the amount used in the customer-facing quote. The new MAIA quotation should preserve this logic in a more structured way. It should not only store the final quoted amount; it should support the working calculation that leads to that amount.

For Thermac, that calculation layer may need to support inputs such as:

| Input Area | Example Fields |
|---|---|
| Component pricing | Plate price, gasket price, frame price, connection price |
| Parts and quantities | Frame parts, number of plates, number of gaskets |
| Commercial adjustment | Margin, discount |
| Other cost factors | Freight, clearance, transportation fee, forex |

The intent is not to blindly recreate Excel screen-for-screen. The intent is to preserve the business logic that Excel currently carries: technical inputs plus commercial adjustments produce the quote amount that the customer sees.

The design question is how to model those flexible rows:

- as generic items
- as service items
- as text rows
- as draft items waiting for approval
- as separate charge types

The answer matters because each option affects downstream sales orders, invoices, AutoCount sync, pricing history, reporting, and item master governance.

### 2. Pricing Intelligence

Pricing intelligence remains one of MAIA's strongest value points for Thermac.

Today, sales users need to search through old quotations and documents to understand whether a price is defensible. This historical lookup sits alongside the Excel calculation workflow: the salesperson calculates a new amount, then still needs a reference point to judge whether the result makes sense against old quotes and customer expectations.

MAIA should bring that historical context into the quotation screen. Based on the original narrative and latest proposal review, useful pricing visibility includes:

- previous or latest price
- average price
- minimum price
- maximum price
- standard price
- customer-specific price, where available
- item-level pricing history

This should be advisory, not enforcement. MAIA should not block the user from quoting. It should reduce blind quoting by making the commercial context visible at the point of entry.

The ideal experience is that the salesperson can calculate the quote amount and compare it against historical pricing in the same workflow. If the calculated amount is materially higher or lower than previous customer pricing, the user sees that before the quotation is sent out. That gives the salesperson a point of reference, helps them defend the quote, and reduces avoidable customer pushback.

The calculation rules still need to be clarified. "Average price" can mean average across all customers, average for the same customer-item pair, average over a date range, average from past five orders, or another basis. Thermac and Mindhive should agree which metrics matter before the feature is treated as locked.

### 3. Draft Items And Ad Hoc Charges

Thermac needs to quote items that may not yet exist in the master list. They also need to include ad hoc charges such as delivery fee, packaging fee, and similar commercial rows directly inside the item table.

This should be treated as a governed workflow, not a simple free-text field.

The workflow needs to define:

- who can create draft items
- what minimum information is required
- whether draft items require approval
- when a draft item becomes an official item
- how ad hoc charge rows appear in downstream documents
- whether flexible rows affect pricing history
- what gets sent to AutoCount

The business goal is clear: Thermac should not lose sales speed just because the master data is not perfect yet. But the system also cannot let the item master become uncontrolled.

### 4. PO-To-Sales Order Conversion

When a customer purchase order arrives by email, MAIA's CPO flow should extract line items, quantities, descriptions, pricing, and relevant order data into a review record. The user then validates and confirms before the sales order is created.

This is human-in-the-loop by design. MAIA reduces re-keying and error risk, but it does not auto-confirm customer orders.

### 5. Role-Based Permissions And Salesperson Visibility

The proposal review surfaced a specific access requirement: each salesperson should only be able to see their own quotations, sales orders, and related records.

This is commercially understandable. Quotes, pricing, margin behaviour, and customer ownership can be sensitive. But Thermac still needs broader visibility for the right roles.

The permission model should answer:

- what sales users can see
- what sales managers can see
- what finance can see
- what operations and admin can see
- what technicians can see
- what storekeepers can see
- who can override or review restricted records

The goal is not simply to hide data. The goal is to protect commercial ownership while keeping the business operationally connected.

### 6. Stock Reservation Governance

Stock reservation needs further clarification. Thermac wants to prevent double booking and maintain stock visibility without deducting stock prematurely.

The implementation should clarify:

- what triggers stock reservation
- whether reservation starts at quotation, approval, sales order, or another stage
- how long reservation lasts
- whether reservation can expire
- who can release or override reserved stock
- whether reservation appears in MAIA only, AutoCount, Esoft, or another reference layer

This is not just inventory display. It is allocation governance. If handled too loosely, teams still argue over available stock. If handled too rigidly, sales may be blocked too early.

### 7. Work Order Management

Work order management remains the core Phase 2 service build.

When a service job is sold, MAIA should create a structured work order linked to the customer and relevant equipment. The work order should capture the job scope, required parts, assigned technician, scheduled date, job type, status, planned parts, actual parts used, photos, signed worksheets, customer sign-off, and audit trail.

This replaces the scattered combination of physical forms, WhatsApp threads, memory, and manual follow-up. It gives Thermac a proper service record from sale to completion.

The system should not auto-progress job status. Field service is too situational for blind automation. Technicians and coordinators should update status based on real progress.

### 8. Calendar And Gantt Scheduling Views

Thermac needs shared visibility over service scheduling. Calendar and Gantt views should show active work orders, assigned technicians, dates, workload patterns, and conflicts.

This is especially important because industrial service windows are costly to miss. If Thermac can see conflicts earlier, the team can adjust before a customer downtime window is wasted or before technicians are overextended.

MAIA should support visibility and decision-making, not auto-scheduling. The planner remains responsible for the final schedule.

### 9. Customer Service History And Equipment Records

Thermac needs customer and equipment history that stays with the business. Each work order, interaction note, logged activity, technician comment, photo, worksheet, and completion record should contribute to a service timeline.

When a customer calls about past work, the answer should be in MAIA rather than inside someone's memory. When a technician visits a site, they should have context. When a different salesperson handles the account, they should inherit the service story instead of starting from zero.

This is not a full enterprise CRM replacement. It is a practical customer and service memory layer.

### 10. Proactive Service Reminders

Service history should create future follow-up. Maintenance-type work orders can capture a next maintenance date or next expected service timing. MAIA can then notify the relevant salesperson or role when follow-up is due.

This turns completed service work into future pipeline. Instead of relying on memory, Thermac can create a repeatable follow-up rhythm from its own service data.

### 11. Statement Of Account

MAIA can provide a Statement of Account view for finance users, showing open invoices, overdue balances, and customer outstanding amounts. Where agreed, customer-facing access can be exposed through a secure link or controlled sharing method.

This does not automate collections. Finance still drives follow-up. The value is visibility and trigger discipline rather than replacing finance judgement.

### 12. CRM Interaction Logging And Quotation Loss Tracking

MAIA should support lightweight CRM interaction logging: call notes, visit notes, follow-up reminders, and account updates. These records help preserve context across sales, service, and management.

Quotation loss tracking should allow users to mark a quotation as lost with a structured reason and free-text explanation. This gives management better data on why deals are lost and supports future sales strategy.

### 13. AutoCount Integration And Document Controls

AutoCount integration is a major part of the value proposition because it reduces duplicate entry and supports accounting consistency.

The proposal review also raised a constraint: submitted documents may not be editable, and amendments may require cancellation and regeneration. This needs validation. The team should confirm whether this is an AutoCount constraint, MAIA behaviour, ERPNext behaviour, or an implementation design decision.

The narrative should be realistic:

> MAIA can keep the front-end sales process flexible, but confirmed documents need integration-safe controls.

That gives Thermac flexibility where it matters and discipline where accounting integrity matters.

## Phase Narrative

### Phase 1 - Sales Operations Foundation

Phase 1 should establish the sales operating layer:

- quotation creation
- flexible quotation table design
- pricing reference visibility
- draft item and ad hoc charge handling
- sales order generation
- credit note handling within supported behaviour
- PO-to-sales order conversion
- role-based access and salesperson visibility rules
- stock reservation governance
- AutoCount integration controls
- Statement of Account visibility
- quotation loss tracking
- CRM interaction logging

The key message is that Phase 1 should not be scoped only as standard sales documents. The quotation layer is the most important design point.

### Phase 2 - Service Operations Layer

Phase 2 should structure the service side:

- work order management
- technician assignment
- calendar and Gantt scheduling
- job status tracking
- planned versus actual parts used
- photos, worksheets, and sign-off attachments
- customer service timeline
- equipment records
- next maintenance date and reminder triggers
- UAT and training around real service workflows

The service direction is correct, but the actual process detail still needs deeper confirmation before the scope is fully locked.

## Scope Clarifications Needed

The following items should be clarified before final scope lock:

| Topic | Clarification Needed |
|---|---|
| Hybrid quotation table | What row types are required, and which rows sync downstream? |
| Ad hoc charges | Should delivery, packaging, freight, clearance, and similar charges be items, service items, charge rows, or text rows? |
| Draft items | Who can create them, who approves them, and when do they become official master data? |
| Pricing references | How are previous, average, minimum, maximum, and standard prices calculated? |
| Forex and margin logic | Is MAIA expected to calculate these values or only display/store them? |
| Salesperson visibility | Which roles can see across all salesperson records? |
| Stock reservation | What event triggers reservation, and who can release or override it? |
| AutoCount constraints | Which document restrictions come from AutoCount, MAIA, ERPNext, or implementation design? |
| Service workflow | What is the minimum viable Phase 2 work order and scheduling scope? |

## Working Scope Summary

Based on the old narrative, SOW, and proposal review, the current working value areas are:

- flexible quotation and pricing intelligence
- PO-to-sales order conversion
- role-based access and salesperson visibility
- stock reservation governance
- AutoCount integration
- work order management
- calendar and Gantt scheduling
- customer service history and equipment records
- proactive service reminders
- Statement of Account visibility
- CRM interaction logging
- quotation loss tracking

The RM35,000 implementation frame remains the commercial reference, with final scope confidence dependent on the quotation design and integration assumptions being clarified.

## The Design Principle

MAIA does not replace Thermac's team. It structures the environment they operate in.

For a company that has grown from a small team into a regional service and equipment business, the gap between operational ambition and operational infrastructure is real. That gap creates firefighting, missed follow-ups, scheduling risk, repeated data entry, pricing archaeology, and dependence on individual memory.

Thermac's product distribution business needs a stronger sales operating layer. Its service business needs a proper work order and scheduling backbone. Its management team needs visibility. Its users need guardrails that do not slow them down.

The most important balance is:

> MAIA should preserve Thermac's flexibility at the front of the process, then add structure, control, and auditability as work moves toward confirmation, fulfilment, service delivery, finance, and reporting.

That is the updated Thermac story. The project is not just about digitising forms. It is about turning Thermac's flexible, people-driven operating model into a shared system that sales, service, finance, operations, and management can trust.

## See Also

- [[3 Apr 26 - MAIA for Thermac Engineering]]
- [[16th_Apr_2026_client_proposal_meeting_notes_summary]]
- [[13 Apr 2026 Thermac SOW]]
- [[2026-03-26-Thermac-Requirements-Gathering]]

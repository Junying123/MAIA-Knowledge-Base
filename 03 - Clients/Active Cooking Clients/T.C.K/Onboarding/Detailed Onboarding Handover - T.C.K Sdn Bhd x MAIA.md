---
owner: Gareth
status: review
last_reviewed: 2026-07-02
---

# T.C.K Sdn Bhd x MAIA — Detailed Onboarding Handover Document

Prepared for MAIA Onboarding, Product, Engineering, and Customer Success Teams

Client: T.C.K Sdn Bhd, discussed in sales cycle as Maxfresh
Signed Proposal Date: 26 June 2026
Package Structure: Signed Proposal PDF is separate from this handover document

> **Important:** This handover document is for internal implementation context only. The signed proposal PDF is a separate file in the ZIP package and remains the source of truth for contracted scope, commercials, exclusions, and payment terms.

## 1. Package Structure

| Folder / File | Purpose |
| --- | --- |
| 01_Signed_Proposal / Signed Proposal - T.C.K Sdn Bhd x MAIA Proposal.pdf | Client-signed proposal. Use this as the legal and commercial source of truth. |
| 02_Onboarding_Handover_Document / Detailed Onboarding Handover - T.C.K Sdn Bhd x MAIA.docx | Internal onboarding handover. Explains client workflow, stakeholders, implementation context, decisions, risks, and kickoff checklist. |

## 2. Executive Summary

T.C.K Sdn Bhd is implementing MAIA as an internal B2B sales order processing and operational workflow layer on top of AutoCount.

The current workflow depends heavily on WhatsApp, manual order interpretation, manual key-in into AutoCount, and separate warehouse coordination through picking lists and internal communication.

The main goal of MAIA is to reduce manual sales/admin workload, improve pricing control, create cleaner order workflows, improve visibility, and support a smoother handoff from sales/admin to warehouse/logistics.

MAIA is not replacing AutoCount. AutoCount remains the system of record for official accounting, document numbering, finance, and historical records.

MAIA acts as the operating layer before and around AutoCount, especially for WhatsApp order intake, draft order creation, pricing checks, approval flow, document handling, pick list support, and backend visibility.

| Commercial Item | Confirmed Position |
| --- | --- |
| One-time implementation fee | RM20,000 |
| Customization value | RM8,000, waived / FOC by Mindhive |
| Monthly subscription | RM2,500/month |
| Included volume | Up to 2,500 orders/month |
| Third-party costs | Not included unless explicitly stated in writing. Includes cloud hosting, ChatGPT/OpenAI API key or usage fees, WhatsApp Business API, WhatsApp number/BSP charges, AutoCount vendor charges, and other third-party platform fees. |

## 3. Meeting Recording Links

| Meeting | Implementation Relevance | Fireflies Link |
| --- | --- | --- |
| Intro Meeting | First discovery and business process understanding | https://app.fireflies.ai/view/Mindhive-x-Maxfresh-Sdn-Bhd-Introductory-Meeting::01KN3YQ7NEE125K00JR90D95Z0 |
| Proposal Walkthrough | Proposal scope, pricing, timeline, and demo walkthrough | https://app.fireflies.ai/view/Mindhive-x-Maxfresh-Proposal-Walkthrough::01KPYXM8ZFHN3PV2V4QEC3E8QF |
| Proposal Finalization 1 | Scope confirmation, demo request, support expectations, commercial alignment | https://app.fireflies.ai/view/Max-Fresh-Proposal-Finalization::01KTN0HVZTN5HM9KNNKG17SWW6 |
| Proposal Finalization 2 | Sales team demo feedback, AutoCount numbering, onboarding approach, inventory sync discussion | https://app.fireflies.ai/view/Maxfresh-proposal-finalization::01KV7QTQCJFR723ESD495Y70CS |
| Proposal Finalization 3 | Logistics feedback, picking workflow, stock deduction, hosting, technical cost clarification | https://app.fireflies.ai/view/Max-Fresh-Proposal-Finalization::01KVCN76P7NVTVNHNDCW1PQBB9 |
| Proposal Finalization 4 | Final confirmation, hosting preference, vendor coordination, signing and payment plan | https://app.fireflies.ai/view/Maxfresh-Finalization::01KVSBTRFBPVEBSJEF4KGPZ6KN |

## 4. Known Stakeholders

### 4.1 Client Stakeholders

| Name / Group | Role | Implementation Notes |
| --- | --- | --- |
| Andrew Tay | Boss / management sponsor / main decision-maker | Main client-side decision-maker. Cares about system fit, AutoCount integration, usability, logistics workflow, support quality, hosting/performance, and implementation smoothness. Expected to oversee execution but not run daily setup. |
| Cheryl | Sales team lead / key sales-side evaluator | Mentioned as one of the main people who needed to test the demo. Likely key for sales-side workflow validation, training, and UAT. Exact title and responsibilities to confirm during kickoff. |
| Sales team / sales admins | Daily order intake and order processing users | Receive customer orders, forward WhatsApp messages, check pricing, create/review orders, and coordinate with warehouse/logistics. Names to confirm during kickoff. |
| Logistics / warehouse team | Fulfillment and pick list users | Responsible for picking, packing, delivery preparation, pick list feedback, and status updates. Their feedback was a key final decision blocker. Names to confirm during kickoff. |
| IT team | Technical validation and hosting / integration contact | To coordinate with Mindhive CTO/technical team on hosting, AutoCount access, integration method, and deployment environment. Names to confirm. |
| AutoCount vendor / accounting system vendor | Third-party system vendor | Required for integration access and vendor coordination. Vendor responsiveness may affect timeline. Contact to collect early. |
| Finance team | AutoCount finance users | Finance likely continues using AutoCount for GL/accounts. Phase 1 should not force finance workflow changes unless specifically agreed. |

### 4.2 Mindhive Stakeholders

| Name / Group | Role | Implementation Notes |
| --- | --- | --- |
| Jeremy Chan | Primary commercial and handover contact | Led sales process, proposal walkthroughs, finalization calls, and handover. Should remain escalation contact during early onboarding. |
| Mindhive CTO / Technical lead | Integration and deployment lead | To coordinate technical feasibility, AutoCount integration, hosting, API/database access, and deployment constraints with client IT/vendor. Name to assign internally. |
| Onboarding / Implementation team | Project delivery team | Conduct requirements gathering, workflow mapping, configuration, UAT coordination, training, and go-live support. |
| Product / Engineering team | Build and configuration team | Configure agreed workflows, implement customizations, handle AutoCount integration, and resolve delivery issues. |
| Account Manager / Customer Success | Post-signing communication owner | Support client communication during development and hypercare. Exact person to assign. |

## 5. Client Business Context

- Current estimated order volume: approximately 50 orders per day and roughly 1,000 orders per month.
- Customers commonly place orders through WhatsApp groups.
- Weekly product offerings or price updates are sent to customers.
- Fresh produce pricing changes frequently and may depend on base price, stock availability, customer group, rebates, or markup rules.
- AutoCount is the core system for official records, document numbering, accounting, finance, and historical reference.
- Warehouse/logistics currently relies on manually prepared or semi-manual picking instructions and internal communication.
- Management wants better visibility and control without a disruptive full ERP replacement.

## 6. Current Process Flow As Understood From Meetings

### 6.1 Weekly Sales And Pricing Flow

Current process:
1. T.C.K prepares weekly product offerings or price updates.
2. Pricing may change weekly based on stock, product availability, base price, and market conditions.
3. Customers receive weekly quotation/product availability information.
4. Different customers may have different markups, rebates, or pricing treatment.
5. Sales/admin staff manually reference latest pricing and customer-specific rules when processing orders.

Pain points / onboarding implications:
- Pricing depends on manual checks and staff memory.
- Weekly price changes increase risk of wrong selling price.
- Customer-specific treatment is not structured enough.
- Margin leakage can happen if markup or minimum price logic is missed.

### 6.2 Customer Order Intake Flow

Current process:
1. Customer sends an order through an existing WhatsApp group.
2. Sales/admin staff read and interpret the order.
3. Order details may include customer name, item name, SKU/code, quantity, brand, delivery details, or remarks.
4. If the customer message is unclear, staff clarify manually.
5. Staff forward or copy the order into internal communication channels.

Pain points / onboarding implications:
- Orders are unstructured.
- Customer messages may be incomplete.
- Staff manually interpret customer intent.
- Multiple WhatsApp groups create fragmented context.
- Important details may be missed during copying or forwarding.

### 6.3 Sales/Admin Processing Flow

Current process:
1. Sales/admin receives order details from WhatsApp.
2. Staff manually check customer, item, pricing, stock, and payment terms.
3. Staff key the order into AutoCount.
4. Documents such as invoice, sales order, delivery order, or picking list are generated.
5. If corrections are needed, staff manually edit or reprocess.

Pain points / onboarding implications:
- Repeated manual key-in.
- Risk of wrong customer, item, quantity, price, or payment terms.
- Manual work is slower and harder to scale.
- Some information is stored in staff memory instead of structured rules.

### 6.4 Warehouse / Logistics Flow

Current process:
1. After the order is keyed into AutoCount, warehouse/logistics receives picking instructions.
2. Current picking instructions may be compiled manually or sent through documents/lists.
3. Warehouse team picks the items.
4. Picking progress may be communicated manually.
5. Delivery order / delivery-related documents are prepared.
6. Fulfillment status is not always visible in one central place.

Pain points / onboarding implications:
- Picking lists can be manually prepared or fragmented.
- Logistics team needs clear pick list flow and status visibility.
- Picking completion and timestamps are important for accountability.
- Management wants to know whether orders are pending, in progress, completed, or canceled.

### 6.5 Finance Flow

Current process:
1. Finance currently continues to rely on AutoCount.
2. Finance uses AutoCount for GL/accounts and accounting records.
3. Andrew prefers that finance does not need to immediately move into MAIA.
4. Sales and billing can be phased into MAIA first while finance remains in AutoCount.

Pain points / onboarding implications:
- Phase 1 should not force finance team process changes unless specifically required.
- MAIA should support sales/billing operational flow while preserving AutoCount as official system of record.

## 7. Proposed Future Process Flow With MAIA

### 7.1 Future Sales Order Intake Flow

1. Customer sends an order through WhatsApp.
2. Internal staff forwards the customer order to MAIA via WhatsApp.
3. MAIA extracts customer, item, quantity, and order details.
4. MAIA references preloaded customer, item, stock, and payment term data.
5. If required fields are missing, MAIA asks follow-up questions or flags the order for human review.
6. MAIA prepares a draft order.
7. Sales/admin reviews the draft before final submission.
8. Once approved, the order is submitted into AutoCount based on the agreed integration method.

Implementation notes: Create a structured WhatsApp order template early. Suggested fields: customer name, item/SKU, brand, quantity, delivery date/urgency, remarks, salesperson name if required.

### 7.2 Future Pricing Flow

1. T.C.K updates weekly base prices using MAIA provided upload template.
2. MAIA validates uploaded item/base price data.
3. Customers are assigned to customer groups.
4. Each customer group can have a markup applied.
5. During order creation, MAIA applies latest uploaded base price, customer group markup, and min/max selling price guardrails.
6. If price falls outside guardrails, MAIA flags the order.
7. If order value exceeds configured threshold, approval flow is triggered.

Implementation notes: Confirm customer groups, group mapping, markup rules, weekly price owner, price upload format, min/max selling price logic, and approval threshold.

### 7.3 Future AutoCount Submission Flow

1. MAIA prepares draft order.
2. User confirms order.
3. MAIA submits confirmed order into AutoCount.
4. Official document numbering follows AutoCount running numbers.
5. MAIA displays or stores document references for visibility and tracking.

Implementation notes: Do not create a separate official numbering sequence in MAIA. AutoCount running number continuity is important because client has many years of historical records.

### 7.4 Future Inventory And Cutoff Flow

1. Historical records remain in AutoCount unless separately scoped.
2. MAIA starts operational tracking from agreed cutoff date.
3. Inventory can be loaded from AutoCount as of cutoff date.
4. New transactions are processed forward from that date.
5. Sales orders may reserve stock but should not necessarily deduct stock immediately.
6. Stock deduction event must be confirmed, likely delivery order or invoice creation depending on client workflow.
7. Canceled or incomplete orders should avoid polluting AutoCount data.

Implementation notes: Confirm cutoff date, opening stock source, stock sync direction, stock deduction event, canceled order handling, and whether only confirmed/completed data is pushed to AutoCount.

### 7.5 Future Warehouse / Logistics Flow

1. Confirmed order becomes ready for fulfillment.
2. MAIA generates pick list based on confirmed order.
3. Pick list can be viewed through WhatsApp/backend and potentially displayed on larger screens or iPads.
4. Warehouse/logistics staff perform picking.
5. Staff updates MAIA when picking is in progress or completed.
6. Completion status becomes visible in backend and/or WhatsApp.
7. Delivery-related documents can be prepared based on the agreed flow.
8. Time/date stamping for picking completion was requested and should be evaluated/configured if within agreed setup.

Implementation notes: Pick list support is Phase 1. Full WMS, route planning, driver app, and deeper warehouse execution are excluded unless separately scoped.

### 7.6 Proof Of Delivery / Delivery Confirmation Flow

1. Physical sign-off may remain.
2. Photo upload of signed delivery note / pick list can be used as supporting evidence if aligned with existing document trail capability.
3. Digital signature capture was discussed but is not confirmed as Phase 1 scope.
4. Full digital POD/signature workflow should not be assumed included unless separately scoped.

Implementation notes: Keep existing physical signature process if client prefers. Avoid introducing a full POD module unless separately scoped.

## 8. Confirmed Phase 1 Scope From Signed Proposal

### 8.1 Included Workflows

- Internal order intake forwarding from customer WhatsApp messages to MAIA
- Draft sales order preparation for review and confirmation
- Stock availability and customer reference checks before submission
- Customer grouping and markup reference during order preparation
- Weekly base price upload/update using MAIA provided template
- Min/max selling price guardrail checks
- Approval flow for orders exceeding a certain order value
- Generation of agreed sales and fulfillment-related documents
- Order and operational status tracking through backend workspace
- Pick list support and fulfillment status updates through MAIA-assisted workflow

### 8.2 Included Capabilities

- Internal-facing WhatsApp workflow for staff
- Request intake forwarding
- Draft preparation for review
- Confirmation flow before final submission
- Agreed business-rule support
- Item, customer, and pricing reference support
- Customer group markup logic
- Weekly base price upload/update
- Min/max selling price checks
- High-value order approval flow
- Document handling for agreed flows
- Activity trail and document trail
- Order and workflow status tracking
- Backend visibility for agreed operational flows
- Role-based access for relevant internal users

### 8.3 Documents Included

- Sales order
- Invoice
- Delivery order / delivery-related support
- Pick list

> Implementation note: Final document formats must be collected from the client. Invoice layout should match current AutoCount format. Official document numbering should follow AutoCount.

## 9. Confirmed Customizations And Setup Items

| Item | Description | Commercial Treatment |
| --- | --- | --- |
| Customer Grouping With Markup | Group customers into pricing groups and apply agreed markup by group during order creation. | Part of RM8,000 customization value, waived / FOC. |
| Weekly Base Price Upload / Update | Users update weekly item base prices using MAIA provided upload template. Latest uploaded base prices are used in order preparation. | Part of RM8,000 customization value, waived / FOC. |
| Min / Max Selling Price Guardrails | Configure minimum and maximum selling price limits for order pricing checks. | Setup item included. |
| Approval Flow For Orders Exceeding Certain Order Value | Configure threshold so high-value orders route for approval before final submission into AutoCount. | Setup item included. |

## 10. Integration And Hosting Notes

### 10.1 AutoCount Role

| AutoCount Remains | MAIA Acts As |
| --- | --- |
| Source of truth for official accounting records | Order intake and workflow layer |
| Source of official document running numbers | Sales/admin productivity layer |
| Finance/GL system | Pricing and approval control layer |
| Historical record holder | Backend visibility and AutoCount-linked operational layer |

### 10.2 Historical Data

- Do not migrate all historical data into MAIA for Phase 1 unless separately scoped.
- Historical data remains in AutoCount.
- MAIA starts operational tracking from the agreed cutoff date.
- Historical analytics inside MAIA would be future scope if required.

### 10.3 Hosting

- Final discussion favored client-side hosting to reduce latency and align with existing AutoCount/cloud setup.
- Client IT/vendor should advise on hosting environment.
- Mindhive CTO/technical team should validate deployment method.
- Hosting costs are not included in monthly subscription unless explicitly stated.

> Third-party costs are excluded unless explicitly stated in writing: cloud hosting, cloud infrastructure charges, ChatGPT/OpenAI API key or usage fees, WhatsApp Business API charges, WhatsApp number registration/subscription fees, WhatsApp vendor/BSP charges, AutoCount vendor charges, and other third-party platform fees.

### 10.4 Integration Questions To Confirm

- Who is the AutoCount vendor contact?
- What AutoCount version/setup is used?
- Is AutoCount hosted on cloud, on-premise, or client/vendor-managed server?
- Is API access available?
- Is database access available?
- Are there vendor restrictions?
- What document types must be created from MAIA?
- What data should be pushed to AutoCount?
- What data should be pulled from AutoCount?
- Should canceled orders stay only in MAIA?
- What is the agreed cutoff date?
- What is the stock deduction event?
- What is the fallback process if AutoCount integration is temporarily unavailable?

## 11. User Roles And Access Considerations

| User Group | Expected Usage |
| --- | --- |
| Sales/admin users | Forward WhatsApp orders to MAIA, review draft orders, confirm sales orders, check customer/item/pricing details, generate documents. |
| Salespeople | Mainly use WhatsApp for quick information such as stock, outstanding amounts, past quotation, or order creation. Backend usage should be minimized. |
| Sales coordinator | Likely heavier backend user. May use laptop/iPad to review orders, update workflows, monitor status, and handle exceptions. |
| Logistics / warehouse users | Receive pick list, update picking status, potentially use WhatsApp/iPad/larger screens. |
| Management / Andrew | Monitor backend visibility, operational progress, issues, and adoption progress. |
| Finance | Continues using AutoCount for GL/accounts. May not need full MAIA adoption in Phase 1. |
| IT / vendor | Supports technical access, hosting, integration, and deployment dependencies. |

### 11.2 Device Usage Guidance

- WhatsApp should be the primary interface for quick daily use.
- Backend is better on laptop or iPad.
- Phone browser backend is possible but less ideal.
- Salespeople should not need to frequently use backend if MAIA WhatsApp assistant answers common queries.
- Warehouse/logistics may use phones or iPads depending on actual picking flow.

## 12. Training, UAT, And Hypercare

### 12.1 Training Expectations

- Client prefers hands-on / on-site training.
- Training should use real business scenarios and real order examples.
- Cover WhatsApp order forwarding, order template, draft review, pricing checks, customer grouping, weekly price upload, approval flow, document generation, pick list flow, status updates, backend vs WhatsApp usage, and escalation process.

### 12.2 UAT Expectations

- Order intake from WhatsApp
- Customer matching
- Item/SKU matching
- Payment term/customer info preloading
- Weekly price upload
- Customer group markup logic
- Min/max selling price guardrails
- Order value approval flow
- Draft order confirmation
- AutoCount submission
- Official document numbering from AutoCount
- Invoice/DO/pick list document format
- Picking status update
- Canceled order handling
- Backend visibility
- User roles and permission access
- Error handling and fallback process

### 12.3 Hypercare / Support

- Dedicated support after go-live was discussed.
- Jeremy is primary contact initially, supported by account manager/onboarding team.
- One-month hypercare was discussed during finalization.
- Set up communication channel, likely WhatsApp group plus internal issue tracking.
- Avoid committing unsupported SLA unless agreed internally. Define support channel, escalation process, and issue categories.

## 13. Scope Boundaries And Risks

### 13.1 Not Included Unless Separately Agreed

- Full ERP replacement
- Major restructuring of accounting or inventory system
- Full warehouse management system
- Deeper warehouse execution logic beyond basic pick-list support
- E-invoicing-specific timing logic
- Full customer-facing B2B self-service ordering rollout
- Customer-facing ordering chatbot
- Complex multi-level approval matrices beyond agreed high-value order approval flow
- Custom dashboards or reports beyond standard backend visibility
- Third-party implementation work outside Mindhive agreed scope
- Additional customizations not listed
- Guarantee of flawless voice-message conversion accuracy
- Third-party costs such as hosting, ChatGPT/OpenAI API, WhatsApp number/BSP charges, AutoCount vendor charges

### 13.2 Discussed But Not Necessarily Signed Scope

- Customer-facing MAIA chatbot
- B2B self-service ordering for customers
- Third-party chatbot integrations into MAIA
- Full digital signature / electronic POD
- Full WMS features
- Route planning
- Driver app
- Advanced picker assignment system
- Complex hardware display setup like McDonald style production screen
- Historical data migration into MAIA
- Full finance module migration from AutoCount
- Complex multi-level approvals beyond agreed high-value order approval flow
- Advanced quotation/report generator beyond confirmed weekly base price/customer grouping scope

### 13.3 Key Risk Areas

| Risk Area | Why It Matters | Mitigation |
| --- | --- | --- |
| AutoCount vendor responsiveness | Vendor delay may delay integration and timeline. | Engage vendor early. Get access and contact details during kickoff. |
| Hosting decision | Client-side hosting preferred but details must be confirmed. | CTO/IT to validate environment before deployment. |
| Data quality | Customer/item/pricing data must be clean for MAIA to work well. | Request master data early. Validate mappings during UAT. |
| Weekly price update discipline | Pricing accuracy depends on timely updates. | Confirm price owner, upload schedule, and approval process. |
| Logistics flow ambiguity | Logistics team had concerns and feedback cycles. | Run logistics requirement workshop early. |
| Scope creep | Many future features were discussed. | Anchor to signed Phase 1 scope and log future requests separately. |
| User adoption | Sales/logistics may default to old WhatsApp/manual process. | Conduct onsite training using real scenarios. |
| Device usability | Backend not ideal on phone. | Use WhatsApp for frontline and laptop/iPad for backend. |

## 14. Immediate Onboarding Checklist

### 14.1 Client Details To Confirm

- Exact legal entity name for implementation records
- Primary client PIC
- Andrew Tay preferred communication channel
- Cheryl role and involvement
- Sales team user list
- Logistics/warehouse user list
- Finance user involvement, if any
- IT contact person
- AutoCount vendor contact
- Hosting vendor/contact
- WhatsApp Business number owner
- OpenAI/ChatGPT API key owner, if client-owned

### 14.2 Data Required From Client

- Customer master list
- Item/SKU master list
- Current SKU codes
- Pricing list
- Weekly base price format
- Customer group list
- Customer-to-group mapping
- Markup rules by group
- Min/max selling price references
- Payment terms
- Credit terms, if required
- Stock/inventory data as of cutoff date
- Sample sales order
- Sample invoice
- Sample delivery order
- Sample pick list
- Existing SOP documents, if any
- Current WhatsApp order examples
- Existing Excel/Word picking list examples
- Approval threshold and approver list

### 14.3 Workflow Decisions To Confirm

- Final order input format
- Who forwards customer orders to MAIA
- Who reviews draft orders
- Who approves orders above threshold
- What happens when price is outside min/max guardrail
- What happens when customer/item is not recognized
- What happens when stock is insufficient
- What happens when an order is canceled
- What status should be pushed to AutoCount
- Whether stock is deducted at invoice or delivery order
- Whether canceled orders stay only in MAIA
- Who receives pick list
- Who marks picking complete
- Whether timestamp is required for picking completion
- Whether physical printout is required
- Whether photo upload is required for delivery/picking proof
- Cutoff date for MAIA go-live

## 15. Recommended Kickoff Agenda

| Kickoff Session | Suggested Attendees | Agenda |
| --- | --- | --- |
| Business Workflow Confirmation | Andrew Tay, Cheryl, sales/admin PICs, logistics/warehouse PICs, Mindhive onboarding team, Jeremy | Confirm signed scope, objectives, current sales order process, pricing process, logistics/pick list process, approval requirements, UAT success criteria, timeline and PICs. |
| Technical And Integration Confirmation | Client IT, AutoCount vendor, hosting vendor if applicable, Mindhive CTO/technical team, onboarding lead | Confirm AutoCount setup, hosting environment, access method, API/database/vendor support, data sync direction, document creation method, running number handling, cutoff date, technical risks and dependencies. |
| Data And Configuration Collection | Sales/admin PIC, pricing owner, logistics PIC, Mindhive onboarding team | Collect customer data, item/SKU data, price data, customer groups, markup rules, price upload template requirements, document templates, WhatsApp order template, and training users. |

## 16. Suggested Implementation Phases

| Phase | Focus | Key Activities |
| --- | --- | --- |
| Phase 1 | Kickoff and Data Collection | Confirm stakeholders, workflow, data, technical access, AutoCount vendor coordination, hosting approach, and cutoff date. |
| Phase 2 | Configuration and Integration Setup | Set up MAIA workspace, users/roles, customer/item references, AutoCount integration, document handling, backend visibility, and agreed workflows. |
| Phase 3 | Customization Setup | Configure customer grouping with markup, weekly base price upload, min/max selling price guardrails, high-value order approval flow, pick list support, and fulfillment status flow. |
| Phase 4 | UAT | Test WhatsApp order intake, pricing logic, AutoCount submission, document output, pick list workflow, role permissions, exceptions, and errors. |
| Phase 5 | Training and Go-Live | Conduct onsite training, train sales/admin, logistics, and management users, confirm go-live readiness, start hypercare, monitor usage and adoption. |

## 17. Final Notes For Onboarding Team

- This client is not buying MAIA as a generic chatbot. They are buying MAIA as an operating layer to improve a real daily order workflow.
- The highest-priority areas are WhatsApp-to-order workflow, AutoCount integration and running number continuity, weekly pricing update process, customer group markup logic, sales/admin usability, logistics pick list flow, and clear scope boundaries.
- Andrew is commercially aligned but cares strongly about execution quality, integration smoothness, post-sales support, and team adoption.
- Avoid over-expanding scope during kickoff. New requests should be classified as included in signed Phase 1, configurable within setup, future scope/separately quoted, or technical dependency requiring validation.
- The goal is to deliver a stable Phase 1 operating layer first, then expand only after internal workflow is working properly.

## See Also

- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/02_Project Scope and Meeting Links - T.C.K Sdn Bhd x MAIA]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/01_Signed Proposal - T.C.K Sdn Bhd x MAIA Proposal]]

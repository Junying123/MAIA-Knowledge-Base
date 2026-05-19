**Streamline quotation, order processing, and operational coordination with MAIA**

Prepared for: **GST Fine Foods** Prepared by: **Mindhive Asia** Date: **12/03/2026**

---

1. # Executive Summary
    

GST Fine Foods currently manages important parts of its quotation, order processing, approval, and operational coordination workflow through SAP Business One together with a significant amount of manual effort. The current process works, but it still depends heavily on staff checking quotation files manually, matching products based on experience, validating stock and pricing, following up on approvals, and coordinating next steps across teams.

As quotation complexity, customer-specific product descriptions, credit checks, payment verification, and stock-related follow-up increase, this creates avoidable delays, inconsistency, and reliance on experienced staff members. It also makes it harder for management to maintain visibility and control as volume grows.

MAIA is proposed as an operational layer that sits on top of SAP Business One to help GST Fine Foods handle day-to-day workflows more consistently through WhatsApp and a structured backend workspace.

MAIA is not positioned as a replacement for SAP Business One. Instead, it is designed to improve how the team captures requests, applies business rules, prepares drafts, generates documents, tracks status, and manages follow-up.

This proposal recommends a Phase 1 rollout focused on the highest-priority operational workflows first. The objective is to establish a practical working foundation that delivers visible business improvement early, while keeping deeper client-specific requirements clearly separated under a dedicated customization section.

With the recommended rollout, GST Fine Foods should expect:

- less manual quotation review and repeated checking
    
- more consistent handling of pricing, stock, and credit-related decisions
    
- reduced dependency on staff memory for product matching
    
- cleaner approval and exception handling
    
- better operational visibility for users and management
    
- a stronger foundation to support growth without increasing admin workload in the same proportion
    

2. # Our Understanding of the Current Business Issues
    

3. ## Quotation handling still depends heavily on manual work
    

GST Fine Foods currently handles quotation requests, especially Excel-based quotation files, through a manual review process. The team still needs to open the file, identify the requested products, check which items can be fulfilled, decide the correct pricing, and prepare the quotation output before sending it back to the customer.

Today, this means the team often has to spend time reviewing quotation lines one by one, which slows response time and increases the risk of missed items, wrong pricing, or quoting stock that is not actually available.

2. ## Product matching relies too much on individual experience
    

GST Fine Foods also faces operational difficulty in product matching because customer wording does not always match the company’s internal item naming exactly. Some quotation lines require users to interpret descriptions, understand product characteristics, and rely on familiarity with the business’s product structure before deciding on the correct item match.

Because this is handled manually today, it increases the risk of mismatches, inconsistent interpretation, and heavier dependency on a smaller number of experienced staff.

3. ## Important business checks still depend on manual follow-up
    

Another key issue is that stock availability, customer pricing, credit status, and customer-specific requirements still require manual checking before quotation confirmation or order creation.

This means the team is not just processing work. The team is also spending time interpreting, checking, and coordinating what should happen next before an order can safely proceed.

4. ## Approval and finance-related exceptions are not structured enough
    

Operational exceptions such as credit issues and payment slip verification still depend on manual checking and follow-up. This makes it harder to maintain a clean approval trail, enforce consistency, and review who approved what when exceptions occur.

5. ## Inventory visibility and planning support can be stronger
    

GST Fine Foods raised the need for better visibility around available stock, low-stock items, replenishment-related follow-up, and aging or slow-moving stock. There is also a need for operational data to be available in Excel format for planning and review in cases where dashboard visibility alone may not be enough.

6. ## Why this matters commercially
    

The issues above do not only create admin inconvenience. They also affect the business more broadly by causing:

- slower quotation and order turnaround
    
- heavier reliance on manual staff effort
    
- increased risk of wrong pricing, wrong item, or incomplete validation
    
- more back-and-forth across teams for approval and finance-related exceptions
    
- weaker control over stock-related and customer-specific treatment
    
- difficulty scaling operations cleanly
    
- reduced management visibility over execution and exceptions
    

3. # Proposed Solution Overview
    

4. ## What MAIA is in this proposal
    

In this rollout, MAIA will act as an internal sales and operational coordination layer on top of GST Fine Foods’ SAP Business One environment.

2. ## How MAIA will fit into GST Fine Foods’ environment
    

MAIA will work together with SAP Business One, Excel quotation workflows, WhatsApp-based internal interactions, and the agreed operational processes.

Rather than replacing SAP Business One, MAIA is designed to improve the operational layer around it. This includes helping staff capture quotation requests more cleanly, reference the correct business logic, prepare drafts, support product matching, manage approval handling, support payment verification, generate agreed documents, track workflow status, and surface issues for review.

3. ## What changes after implementation
    

After implementation, the team should no longer need to rely only on manual interpretation and scattered follow-up to move work forward.

Instead:

- quotation files can be forwarded into MAIA
    
- MAIA can help interpret item descriptions and prepare draft outputs
    
- MAIA can reference agreed rules for stock, pricing, and credit checks
    
- users review and confirm where needed
    
- exceptions can be surfaced through cleaner approval handling
    
- operational data can be tracked more clearly through the backend workspace
    
- management gets stronger visibility across quotations, orders, approvals, stock-related issues, and follow-up items
    

4. # Phase 1 Scope Included in This Proposal
    

5. ## Phase 1 objective
    

Phase 1 is designed to establish the core standard sales order, document, and management visibility workflow first, so GST Fine Foods can start seeing practical improvement without waiting for every advanced use case to be built upfront.

2. ## Included workflows
    

The recommended Phase 1 rollout includes the following agreed workflows:

- standard sales order creation and confirmation flow
    
- standard sales order product matching support
    
- approval support for selected exception cases
    
- basic payment slip review and mismatch handling support
    
- stock query and stock reminder visibility
    
- backend visibility for operational tracking
    
- agreed document generation and document trail support
    

3. ## Included capabilities
    

Phase 1 includes:

- internal-facing WhatsApp workflow for staff
    
- confirmation flow before final submission
    
- agreed business-rule support for stock, pricing, credit, and customer-specific requirements
    
- product matching support against GST Fine Foods’ internal item references
    
- basic payment slip capture and structured review support
    
- item, customer, and pricing reference support
    
- document handling for agreed flows
    
- activity trail
    
- document trail
    
- order or workflow status tracking
    
- backend visibility for agreed operational flows
    

4. ## Documents included
    

The following document support is included in the agreed Phase 1 scope:

- sales order
    
- invoice
    
- invoice PDF
    
- credit-note-related output or references
    
- delivery-related output or references
    

## 4.5 What goes live at the end of Phase 1

At the end of Phase 1, GST Fine Foods will have a working operational workflow where the agreed internal users can use MAIA to handle standard order creation, product matching support, approval-related exceptions, basic payment slip review, stock visibility, agreed document flows, and backend operational tracking through the workspace.

5. # Customization Scope Client-Specific Requirements
    

6. ## How we define customization
    

Customization refers to workflows, rules, approvals, document behavior, reporting requirements, or exception handling logic that go beyond MAIA’s standard rollout structure and require client-specific design, configuration, validation, or build work.

These are usually needed where the client has:

- account-specific business rules
    
- non-standard approvals
    
- special pricing or product matching behavior
    
- special document behavior
    
- deeper exception handling
    
- custom dashboards, exports, or monitoring pages
    

2. ## Customization handling principle
    

To avoid confusion, client-specific customizations should be separated clearly from standard rollout scope.

Each customization below explains:

- the business need
    
- the current challenge
    
- what MAIA will do
    
- why it is treated as customization
    
- the recommended phase
    
- its commercial treatment
    

3. ## Customization write-up format
    

### Customization 1: Customer-specific quotation matching logic

**Business need** GST Fine Foods needs MAIA to help match customer quotation wording to GST Fine Foods’ internal item structure more accurately, especially when customers use different product names, specifications, cuts, sizes, weights, or customer-specific terminology.

**Current challenge** Today, quotation matching depends too much on staff memory and product familiarity. This creates inconsistency, slower quotation turnaround, and higher dependence on experienced team members.

**What MAIA will do** MAIA can be extended to support deeper quotation matching logic by:

1. reading the customer’s item descriptions from quotation files
    
2. comparing the wording against GST Fine Foods’ internal item master
    
3. referencing configured product characteristics such as type, cut, size, weight, and descriptive patterns
    
4. using customer-specific naming references where applicable
    
5. surfacing the most likely internal item matches for user review before quotation preparation
    

**Why this is considered customization** Basic item lookup is standard, but deeper product-matching logic that maps customer wording to GST Fine Foods’ internal item references is client-specific and requires additional setup, configuration, and validation.

**Recommended phase** Phase 2, or Phase 1 only if GST Fine Foods chooses to scope it in early.

**Commercial treatment** Included within the customization bundle.

### Customization 2: Aging and clearance reminder logic for sales follow-up

**Business need** GST Fine Foods wants stock-aging or non-movement logic that can surface clearance or slow-moving items to the sales team for follow-up.

**Current challenge** Without this, aging stock or low-movement items may not be surfaced to the right team in a timely way, which can reduce sell-through and create unnecessary stock pressure.

**What MAIA will do** MAIA can be extended to support aging and clearance reminder logic by:

1. reading agreed stock-aging or movement indicators
    
2. identifying items that match GST Fine Foods’ defined conditions
    
3. surfacing those items in backend visibility
    
4. sending reminders or digest summaries to the relevant team
    
5. helping management monitor which items may require sales push or replenishment review
    

**Why this is considered customization** Basic stock alerts and visibility can be part of the standard flow, but custom aging rules, reminder thresholds, and clearance prioritization logic are client-specific.

**Recommended phase** Phase 2.

**Commercial treatment** Included within the customization bundle.

### Customization 3: Excel export support for planning and operational review

**Business need** GST Fine Foods wants selected operational data to be exportable into Excel format for review, filtering, and planning work.

**Current challenge** Dashboard visibility alone may not always be enough for larger planning or replenishment tasks. The team may still need working files in Excel format for downstream action.

**What MAIA will do** MAIA can support this by:

1. allowing users to request agreed operational datasets
    
2. compiling the relevant information into a structured format
    
3. generating an Excel export for planning and review
    
4. enabling the team to use the file for operational follow-up
    

**Why this is considered customization** If GST Fine Foods requires specific export structures, custom layouts, or planning-oriented output formats beyond standard export support, this becomes client-specific work.

**Recommended phase** Phase 1 or Phase 2 depending on priority.

**Commercial treatment** Included within the customization bundle.

### Customization 4: Customer Purchase Request Note tracking flow

**Business need** GST Fine Foods may require a way to track customer purchase commitments before an actual confirmed sales order is raised.

**Current challenge** Today, future purchase commitments can be difficult to monitor in a structured way before they become actual orders. This creates weaker visibility around customer purchase intent, usage tracking, and future demand follow-up.

**What MAIA will do** MAIA can introduce a new internal document type called Customer Purchase Request Note, or CPRN.

Under this flow:

1. the sales team raises a CPRN through the chatbot or frontend
    
2. MAIA records the CPRN details, such as customer, item, quantity, expected timing, salesperson in charge, and relevant remarks
    
3. once the CPRN is created, the relevant finance team is notified
    
4. MAIA provides a dedicated frontend page to track CPRN usage and outstanding CPRNs
    
5. management can review CPRN trends, including which customers have the highest CPRN volume
    

**Why this is considered customization** This requires a new client-specific internal document type, dedicated frontend tracking logic, notification behavior, and management visibility specific to GST Fine Foods’ requested flow.

**Recommended phase** Phase 2, unless GST Fine Foods specifically chooses to scope it earlier.

**Commercial treatment** Included within the customization bundle.

### Customization 5: Statement of account generation support

**Business need** GST Fine Foods wants support for statement of account generation for internal review or customer follow-up.

**Current challenge** Without a structured flow, statement preparation can remain manual and depend on SAP-side handling or additional internal effort.

**What MAIA will do** MAIA can support this by:

1. allowing users to request a statement of account
    
2. retrieving the relevant account-related information based on the agreed document and integration flow
    
3. preparing the output for review or onward sharing
    
4. supporting internal follow-up or customer communication
    

**Why this is considered customization** Because the final statement generation approach depends on SAP-side feasibility, document access, and agreed integration behavior, this should be treated as a client-specific scoped item unless confirmed otherwise during technical validation.

**Recommended phase** Phase 1 if prioritized and feasible, otherwise Phase 2.

**Commercial treatment** Included within the customization bundle.

4. ## Customization summary
    

The current customization candidates raised for GST Fine Foods are:

- customer-specific quotation matching logic
    
- aging and clearance reminder logic for sales follow-up
    
- Excel export support for planning and operational review
    
- Customer Purchase Request Note tracking flow
    
- statement of account generation support, subject to SAP-side feasibility
    

6. # Key Workflow Scenarios
    

7. ## Scenario A: Order creation, checking, and approval handling
    

8. The internal user prepares or confirms the customer order details in MAIA.
    
9. MAIA structures the order for review and checks stock, pricing, credit status, and customer-specific requirements.
    
10. If an exception is found, such as over-credit, insufficient stock, or pricing mismatch, MAIA flags it clearly.
    
11. Where required, MAIA routes the case into the approval flow and records what issue was flagged, who reviewed it, and what action was taken.
    
12. Once checks or approvals are completed, the user confirms the order.
    
13. MAIA creates the Sales Order and supports the next operational step.
    

14. ## Scenario B: Quotation intake, product matching, and quotation preparation
    

15. A customer sends a quotation request, usually in Excel format.
    
16. The sales coordinator or internal team forwards the quotation file into MAIA.
    
17. MAIA reads the file and extracts the key quotation details.
    
18. MAIA helps match customer wording against GST Fine Foods’ internal item structure and surfaces likely matches for user review.
    
19. MAIA checks key business conditions such as stock availability, pricing reference, and customer-specific pricing where relevant.
    
20. MAIA outputs what can be matched and what cannot be matched in the form of text
    
21. The user reviews the message and confirms it and fills up the quotation themselves before sending it to the clients themselves.
    

22. ## Scenario C: Payment slip review
    

23. A staff member forwards a payment slip or payment proof into MAIA.
    
24. MAIA reads the visible payment details, such as amount, date, and available references.
    
25. MAIA compares the slip against the expected transaction amount.
    
26. If the slip appears matched, short-paid, or mismatched, the relevant user is alerted for review.
    
27. If GST Fine Foods chooses the deeper customization, MAIA can also support advanced suspicious-case logic and approval handling before the process proceeds.
    

28. ## Scenario D: Planning support, CPRN tracking, and statement follow-up
    

29. A user requests operational data such as low-stock items, replenishment-related items, or other agreed views.
    
30. MAIA compiles the information and prepares it in Excel format for review and planning.
    
31. If GST Fine Foods adopts the CPRN customization, the sales team can raise CPRNs through chatbot or frontend, finance is notified, and management can track CPRN usage through a dedicated frontend page.
    
32. If GST Fine Foods adopts the statement of account scope, MAIA can support statement preparation subject to agreed integration flow and technical feasibility.
    

33. # Implementation Approach
    

34. ## Implementation stages
    

Implementation is expected to proceed in the following order:

1. Kickoff and workflow confirmation
    
2. Logic and configuration design
    
3. System setup
    
4. Integration setup
    
5. User acceptance testing
    
6. Training
    
7. Go-live support
    

8. ## What Mindhive will do
    

Mindhive will:

- confirm the agreed workflow design
    
- configure the agreed business rules
    
- set up the required quotation, order, and visibility workflows
    
- configure product-matching support and operational references
    
- implement the agreed SAP Business One integration approach
    
- support testing and issue clarification
    
- conduct training for the agreed users
    
- support rollout for the agreed scope
    

3. ## What GST Fine Foods will need to provide
    

GST Fine Foods will need to provide:

- relevant SAP Business One access or vendor coordination
    
- customer, item, pricing, and product-reference data
    
- sample quotation files and existing flow references
    
- clarification on rules, exceptions, and desired outcomes
    
- current document outputs and expected format references
    
- internal PICs for review and sign-off
    
- UAT users and timely feedback during testing
    

This is important to ensure the project moves smoothly and expectations remain aligned.

8. # Timeline
    

9. ## Indicative timeline
    

|**Phase**|**Scope**|**Estimated Timeline**|
|---|---|---|
|Phase 1|**Core: B2B Sales Agent chatbot + backend integration**<br><br>Includes:<br><br>- Standard Sales Order Generation<br>    <br>- Standard Sales Order Business Rule Checkings<br>    <br>- Finance approvals for payments<br>    <br>- Credit limit exceeding approvals<br>    <br>- Backend Dashboard<br>    <br>- SAP integration<br>    <br>- Training and go-live support|~ 3 to 4 Weeks|
|Phase 2|**Customization Modules**<br><br>Includes:<br><br>- Request for Quotation generation and product matching<br>    <br>- Sales contract commitment tracker / CPRN tracking<br>    <br>- Aging and clearance reminders<br>    <br>- Custom Excel export support<br>    <br>- Statement of account generation support|To be confirmed until scoping|

2. ## Timeline notes
    

Timeline may vary depending on:

- access to SAP Business One and vendor environment
    
- turnaround time for item, pricing, and product-matching clarification
    
- speed of internal review and feedback
    
- the depth of client-specific customization required
    
- final technical approach for statement of account support if included
    

9. # Commercials
    

10. ## Commercial summary
    

The pricing below covers Phase 1 only. Customization items are separately scoped as a bundle.

2. ## Phase 1 one-time implementation fee
    

|**Category**|**Component / Module**|**One-time fee (RM)**|
|---|---|---|
|**B2B MAIA (Phase 1)**|**Core: B2B Sales Agent chatbot + backend integration**<br><br>Includes:<br><br>- Standard Sales Order Generation<br>    <br>- Standard Sales Order Business Rule Checkings<br>    <br>- Finance approvals for payments<br>    <br>- Credit limit exceeding approvals<br>    <br>- Backend Dashboard<br>    <br>- SAP integration<br>    <br>- Training and go-live support|~~RM48,000~~<br><br>**RM 20,000**|
|Total|   |**RM 20,000**|

3. ## Customization bundle
    

|**Category**|**Component / Module**|**One-time fee (RM)**|
|---|---|---|
|**B2B MAIA (Phase 1)**|**Customization Modules**<br><br>Includes:<br><br>- Request for Quotation generation and product matching<br>    <br>- Sales contract commitment tracker / CPRN tracking<br>    <br>- Aging and clearance reminders<br>    <br>- Custom Excel export support<br>    <br>- Statement of account generation support|**RM 7,500**|
|Total|   |**RM 7,500**|

4. ## Monthly subscription for current scope
    

### KL Branch

- estimated volume: approximately 4,000 orders per month
    
- monthly fee: **RM 2,500 per month**
    

5. ## Commercial top-up for additional branches
    

MAIA coverage can be extended beyond the current KL Branch through modular monthly top-ups based on estimated branch volume.

### Penang Branch top-up

- estimated volume: approximately 4,000 orders per month
    
- monthly top-up: **RM 2,000 per month**
    
- one-time implementation fee for additional branch: **RM 10,000**
    

### Langkawi Branch top-up

- estimated volume: approximately 2,000 orders per month
    
- monthly top-up: **RM 1,000 per month**
    
- one-time implementation fee for additional branch: **RM 10,000**
    

6. ## Monthly total
    

### KL only

- branches covered: 1
    
- monthly fee: **RM 2,500**
    

### KL + Penang

- branches covered: 2
    
- monthly fee: **RM 4,500**
    

### KL + Penang + Langkawi

- branches covered: 3
    
- monthly fee: **RM 5,500**
    

7. ## What the monthly subscription covers
    

The monthly subscription covers:

- platform access
    
- hosting and maintenance for the agreed environment
    
- standard support for agreed scope
    
- ongoing system usage
    
- bug fixes within agreed scope
    
- standard operational maintenance for the subscribed setup
    

8. ## Payment terms
    

|**Milestone**|**Amount (RM)**|**Payment Trigger**|
|---|---|---|
|Phase 1 UAT Completion|RM 20,000|Payable only after Phase 1 passes UAT|
|Phase 2 UAT Completion|RM 7,500|Payable only after Phase 2 passes UAT|

9. ## Commercial notes
    

- all monthly fees are billed monthly
    
- each additional branch top-up is modular and can be added or removed based on operational needs
    
- each additional branch incurs a one-time RM10,000 implementation fee
    
- customization scope is not included in the RM20,000 Phase 1 implementation fee unless specifically agreed
    
- statement of account generation support remains subject to technical validation and SAP-side feasibility
    
- any third-party fees, vendor-side costs, API charges, or special integration charges should be confirmed separately if applicable
    

10. # Project Closure Criteria
    

11. ## How the acceptance framework should work
    

The project should be considered successful only if MAIA meets the agreed thresholds across the agreed UAT sample set for the in-scope features.

2. ## Recommended testing approach
    

The project will be considered successfully delivered when MAIA achieves the agreed pass thresholds across the agreed UAT sample set for the in-scope features. The UAT sample set should be jointly defined by GST Fine Foods and Mindhive before testing begins. Phase 1 one-time fees and Phase 2 customization fees are only payable after the relevant phase passes UAT. Monthly billing will begin once Phase 1 passes UAT and production use starts.

3. ## Payment linkage to UAT pass
    

For avoidance of doubt:

- **Phase 1 one-time fee becomes payable only after the agreed Phase 1 UAT is passed**
    
- **Phase 1 monthly billing begins only after the agreed Phase 1 UAT is passed and production use starts**
    
- **Phase 2 customization fee becomes payable only after the agreed Phase 2 UAT is passed**
    

11. # Assumptions and Exclusions
    

12. ## Assumptions
    

This proposal assumes that:

- MAIA will sit on top of SAP Business One, not replace it
    
- the agreed workflows can be clearly documented during kickoff
    
- required master data, quotation examples, and rule references will be provided by GST Fine Foods
    
- ambiguous or edge-case scenarios may still require human confirmation unless specifically customized
    
- implementation progress depends partly on the availability of client-side reviewers and vendor responsiveness where relevant
    
- statement of account generation flow can only be finalized after technical validation if included
    
- the UAT sample set for acceptance testing will be jointly agreed before formal testing begins
    

2. ## Exclusions
    

Unless otherwise stated, this proposal does not include:

- full ERP replacement
    
- major restructuring of SAP Business One
    
- custom workflows outside the agreed Phase 1 scope
    
- advanced approval matrices unless specifically scoped
    
- custom dashboards or reports beyond agreed standard visibility
    
- Customer Purchase Request Note flow unless separately approved as customization
    
- third-party implementation work outside Mindhive’s agreed scope
    
- additional customizations not listed in this proposal
    

12. # Success Criteria for Phase 1 and Phase 2
    

13. ## Phase 1 success criteria
    

Phase 1 will be considered successfully delivered when:

- the agreed base-scope workflows are configured and available for use
    
- the agreed users are trained
    
- agreed test cases pass during Phase 1 UAT
    
- the agreed document flows are functioning as intended
    
- the agreed operational visibility features are live
    
- the agreed acceptance metrics for Phase 1 are achieved
    
- GST Fine Foods signs off on the agreed Phase 1 rollout scope
    

2. ## Phase 2 success criteria
    

Phase 2 will be considered successfully delivered when:

- the agreed customization scope is built and available for use
    
- agreed test cases pass during Phase 2 UAT
    
- the agreed customization outputs function as intended
    
- GST Fine Foods signs off on the agreed Phase 2 customization rollout scope
    

13. # Recommended Next Steps
    

To proceed, we recommend the following next steps:

1. Confirm acceptance of the proposed **Phase 1 base scope**
    
2. Confirm the **Phase 1 commercial structure**, including payment only after Phase 1 UAT pass
    
3. Confirm whether **Penang and Langkawi branch coverage** should be included now or later
    
4. Jointly define the **UAT sample set and pass thresholds** for Phase 1
    
5. Appoint implementation PICs from both sides
    
6. Schedule kickoff workshop
    
7. Begin data, rule, and workflow confirmation for setup
    
8. After Phase 1 is proven and live, confirm which **customization items move into Phase 2**
    
9. Run Phase 2 as a separate scoped rollout with separate UAT and separate post-UAT payment trigger
    

10. # Acknowledgement & Agreement
    

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive Sdn. Bhd.**:

**For GST Fine Foods Sdn. Bhd.**:

|   |
|---|
|____________________________<br><br>Signature|
|Name:<br><br>Position:<br><br>Date:|

|                                               |
| --------------------------------------------- |
| ____________________________<br><br>Signature |
| Name:<br><br>Position:<br><br>Date:           |
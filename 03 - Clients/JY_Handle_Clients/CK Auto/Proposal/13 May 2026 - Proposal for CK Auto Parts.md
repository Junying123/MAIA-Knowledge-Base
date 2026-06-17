---
owner: Gareth
status: draft
last_reviewed: 2026-05-13
---

# Proposal for CK Auto Parts

**Prepared by Mindhive | 13 May 2026**

***

*Phase 1 - Core MAIA Order Taking + Required Integration | Future Customisation - Automotive Intelligence, B2C Chatbot, iPad Outlet Flow, and Advanced Accounting Visibility*

***

## 1. Executive Summary

CK Auto Parts is a specialist B2B automotive parts distributor serving workshops, repair centres, and trade accounts across Malaysia. Their customers - foremen, mechanics, and workshop owners - operate in fast-moving environments where speed, stock accuracy, and correct order capture are critical.

Today, many enquiries and orders still depend on manual effort: WhatsApp conversations, salesperson knowledge, stock checking, follow-up messages, and separate system updates. The business works because the team knows the products and customers well, but this also means order processing depends heavily on individual staff and manual discipline.

MAIA will support CK Auto Parts by providing a WhatsApp-first operational layer for internal order taking. In Phase 1, the implementation should stay focused on core MAIA order taking plus the required integration only. The goal is to establish a reliable, staff-assisted order workflow first, before introducing CK Auto-specific automation such as vehicle registry, advanced vehicle-part matching, stock reservation, direct customer ordering, iPad outlet flows, approval automation, or expanded accounting visibility.

> **The Phase 1 goal is simple:** help CK Auto Parts process internal sales order-taking workflows through MAIA, while keeping advanced vehicle intelligence, customer-facing chatbot flows, stock hold, and accounting visibility as future customisation packages unless separately scoped and priced.

For CK Auto Parts, the immediate Phase 1 focus areas are:

* Internal staff-assisted order taking using core MAIA workflows

* Product and parts recommendation using MAIA knowledge base, subject to data quality and mapping readiness

* Structured capture of customer order requests

* Human review and confirmation before order submission

* Clear separation between Phase 1 core scope and future customisation

* Alignment with the external accounting or sales system provider before committing inventory, invoice, credit, credit note, tax, or financial-status visibility

***

## 2. CK Auto Parts' Current Operational Challenges

CK Auto Parts runs multiple workflows that are high-frequency, coordination-heavy, and dependent on information moving correctly between sales staff, warehouse, backend systems, and customers.

### A) Parts Enquiries and Orders Are Still Highly Manual

When a workshop foreman messages in asking about parts availability, the salesperson often needs to interpret the request, confirm the customer, check the relevant item, and coordinate follow-up actions manually. This process works, but it is difficult to scale consistently as enquiry volume increases.

### B) Automotive Parts Matching Requires Structured Data

Automotive parts ordering often depends on vehicle model, engine capacity, transmission, year, and naming variations. MAIA's knowledge base can support product recommendation, but accuracy depends on CK Auto Parts having clean item data and structured vehicle-part compatibility mapping. A full vehicle registry, vehicle taxonomy engine, or automated compatibility model remains custom scope.

### C) Inventory Visibility, Stock Hold, and Fulfilment Rules Need Alignment

CK Auto Parts may need stock visibility across multiple outlets and locations. A stock check during enquiry and another check during order confirmation does not fully prevent another salesperson from selling the same stock in between. If CK Auto Parts requires stock hold or reservation, that must be treated as a separate fulfilment workflow requiring clear business rules and integration confirmation.

### D) Approval and Access Controls Need More Detail

Approval threshold logic, role-based access, and Chatwoot approval notifications require more detailed requirements. These rules affect operational control, accountability, and auditability, so they should not be assumed without a dedicated scoping session.

### E) Credit, Invoice, and Tax Visibility Depend on External APIs

Credit limit checks, customer credit exposure, invoice retrieval, credit note touchpoints, tax checks, and customer financial-status visibility depend on what the external accounting or sales system exposes through API. If those endpoints are not available, MAIA cannot calculate or display those values reliably.

### F) Direct Customer Ordering Creates a Separate Product Scope

Allowing B2B or B2C customers to order directly through WhatsApp is a different workflow from internal staff-assisted order taking. It requires customer-facing chatbot design, registration logic, approval rules, escalation handling, pricing visibility controls, and separate UAT. This should be treated as a future phase after Phase 1 stabilises.

***

## 3. What CK Auto Parts Will Get After Implementing MAIA

### A) A Core MAIA Internal Order-Taking Workflow

In Phase 1, MAIA operates as an internal tool for CK Auto Parts staff. The salesperson or internal user messages the chatbot, searches or identifies suitable parts, checks item availability where supported, confirms the order, and creates the order in MAIA.

Phase 1 will use core MAIA capability and the required integration only. It does not include custom CK Auto-specific vehicle registries, vehicle taxonomy, stock reservation, customer-facing chatbot ordering, iPad outlet flows, automatic document delivery, or bespoke approval automation.

> **Business outcome:** CK Auto Parts gets a structured starting point for internal order taking without overcommitting to custom automation before requirements, dependencies, and data readiness are confirmed.

### B) Clear Human Control During Phase 1

Phase 1 keeps CK Auto Parts staff in control of the order lifecycle. Staff confirm customer requirements, review order information, and handle any manual steps outside the agreed core MAIA workflow. This reduces rollout risk and gives the team time to validate how MAIA fits day-to-day operations.

> **Business outcome:** the team can adopt MAIA progressively while keeping business-critical judgement with human users.

### C) Product Recommendation Supported by Data Readiness

MAIA can support product recommendation through a knowledge base, including part descriptions, SKU references, and compatibility notes. However, the quality of the recommendation depends on CK Auto Parts providing structured product and vehicle-part compatibility data. If the data is incomplete, inconsistent, or only held manually in spreadsheets, the recommendation flow will need data cleanup before it can be relied on operationally.

> **Business outcome:** CK Auto Parts can start using MAIA to assist internal parts sourcing, while treating deeper automotive intelligence as a data-backed enhancement rather than an assumed automation promise.

### D) A Foundation for Future Automotive Customisation

Several valuable CK Auto-specific capabilities can be added later, but they should be scoped and quoted separately. These include vehicle profile registry, multi-vehicle support per customer, vehicle alias mapping, compatibility filtering, symptom-based parts search, and direct B2B ordering via WhatsApp.

> **Business outcome:** Phase 1 creates an operational foundation, while future customisation can be sold and delivered as focused packages once CK Auto Parts has validated the core workflow.

### E) Integration Scope Alignment With External System Provider

The current understanding is that the previously agreed integration scope is only order taking and pushing the relevant order data to the accounting or sales system. Any expanded workflow - such as accurate stock visibility, stock reservation, credit limit checks, credit exposure display, invoice retrieval, credit note touchpoints, tax checks, inventory deduction, invoice generation, delivery note generation, or document retrieval - must be aligned with the external system provider before it is committed as a deliverable.

> **Business outcome:** integration commitments remain realistic and dependency-driven, reducing the risk of promising functionality that depends on third-party readiness.

***

## 4. How MAIA Works

### Scenario A - Salesman Handles a B2B Enquiry (Phase 1)

1. Customer contacts CK Auto Parts through the existing channel, such as WhatsApp, phone call, or walk-in.

2. Salesman or internal staff confirms the customer request manually.

3. Staff opens MAIA and uses the agreed core workflow to capture the order request.

4. MAIA helps source or identify relevant parts based on the customer request and available knowledge base data.

5. MAIA checks whether the item exists and returns quantity or availability where supported by the agreed integration.

6. Staff confirms the order with the customer and reviews the order information before proceeding.

7. MAIA creates the order and pushes the relevant order data to the accounting or sales system if the required integration is confirmed.

8. Invoice delivery, delivery note handling, customer WhatsApp document delivery, stock reservation, and any advanced fulfilment actions remain manual or future scope unless separately agreed.

*Outcome: CK Auto Parts receives a controlled internal order-taking workflow using core MAIA, with clear boundaries around manual and future-scope items.*

***

### Scenario B - Customer Orders Directly via WhatsApp (Future Phase)

Direct customer ordering through WhatsApp is not included in Phase 1. This is a future phase that should be scoped after Phase 1 has been operated, tested, and stabilised. CK Auto Parts has also raised concern that a public chatbot may expose pricing to competitors, so any future customer-facing flow must confirm whether it is limited to selected customers, outlet iPads, or another controlled channel.

A future direct-ordering workflow may include:

1. Customer sends a WhatsApp message to CK Auto Parts' number.

2. Chatwoot receives the message and identifies whether the contact is registered.

3. AI chatbot guides the customer through an ordering conversation.

4. Customer reviews quotation or order details through WhatsApp.

5. Approval, escalation, and order submission rules are applied based on confirmed requirements.

6. Live agent takes over when the chatbot cannot complete the request.

*Outcome: this may allow selected B2B or B2C customers to place orders directly, but it requires separate discovery, requirements gathering, commercial quotation, and UAT.*

***

## 5. Delivery Scope

### Phase 1 - Core MAIA Internal Order Taking + Required Integration

Phase 1 builds the starting operational workflow. CK Auto Parts staff use MAIA internally to support order taking and push relevant order data to the confirmed external system where integration is available. Customers do not interact with an AI chatbot directly in this phase.

**Includes:**

1. Internal staff-assisted order-taking workflow using core MAIA

2. Standard MAIA configuration for the agreed Phase 1 flow

3. Customer/order detail capture based on base platform capability

4. Product and parts search through MAIA knowledge base, subject to clean product and compatibility data

5. Item/order entry based on confirmed customer requirements

6. Availability or quantity check where supported by confirmed integration

7. Human review before order submission

8. Standard user setup based on available core MAIA roles

9. Training for CK Auto Parts users on the agreed Phase 1 workflow

10. Go-live and hypercare support for the agreed Phase 1 rollout

11. Required order-taking integration only if confirmed and aligned with the external system provider

**Scope clarifications from review comments:**

| Feature / Request | Phase 1 Scope Decision | Comment |
|---|---|---|
| Vehicle profile registry | Out of scope | Requires customisation. Plate number, vehicle model, engine capacity, transmission, year, and multi-vehicle support are not included in Phase 1. |
| Vehicle taxonomy engine | Out of scope | Requires customisation. Alias-to-standard-code resolution and admin-managed taxonomy require separate design and build. |
| Knowledge base product recommendation | In scope only with data readiness | MAIA can support recommendation, but CK Auto Parts must provide clean product and compatibility data. Advanced vehicle matching still requires custom structure. |
| Multi-outlet inventory query | Partially dependent | Basic inventory visibility depends on agreed integration capability. Outlet fallback, fulfilment routing, and estimated delivery time require confirmation. |
| Stock hold / reservation | Out of scope unless separately scoped | Double stock checking does not reserve stock. Reservation rules require custom workflow and external system support. |
| Approval threshold logic with Chatwoot notification | Requires further requirements gathering | RM 1,000 default threshold, one-tap confirm/reject, approver routing, and notification rules need more context before scoping. |
| Auto-cancellation of unactioned orders | Out of scope | To remain a manual workflow in Phase 1. Configurable timeout and inventory release require custom workflow design. |
| External system integration | To align with external provider | Previously agreed scope was only order taking / order push. Sales Order push, inventory deduction, invoice generation, delivery note generation, and document retrieval must be reconfirmed. |
| Credit limit and credit exposure | Dependent on external APIs | Requires invoice, credit, credit note, and customer financial data endpoints. MAIA cannot calculate this reliably if APIs are unavailable. |
| Invoice to customer via WhatsApp and delivery note to internal team | Dependent on external system scope | Not included unless document generation/retrieval and delivery flow are confirmed. |
| Phase 2 - B2B Customer Direct Ordering via WhatsApp | Not in Phase 1 | Requirements to be gathered after Phase 1. To be quoted separately. |
| Symptom-Based Parts Search | Out of scope | This is a B2C/customer-facing chatbot-style feature requiring knowledge base retrieval and compatibility logic. |
| Outlet iPad chatbot | Out of scope | Future B2C or controlled-channel workflow. Requires separate design due to pricing visibility and customer access concerns. |
| Shopee or e-commerce integration | Out of scope | Not supported unless separately scoped and priced. |
| WhatsApp document delivery to customer | Out of scope | Outside MAIA Phase 1. User will perform this manually unless later scoped. |
| Role-based access | Requires further requirements gathering | Roles, permissions, and access boundaries must be confirmed before inclusion. |

***

### Phase 2 - Customer Direct Ordering via WhatsApp

Phase 2 is not included in the current Phase 1 proposal. It should be considered only after Phase 1 has been operated, tested, and stabilised.

**Potential future scope, subject to requirements gathering and separate quotation:**

1. Customer-facing AI chatbot via WhatsApp

2. Contact identification and registered customer recognition

3. Guided ordering conversation for selected B2B customers

4. Quotation or order review via WhatsApp

5. Approval threshold rules for direct customer orders

6. Live agent escalation through Chatwoot

7. Customer-facing document delivery, if supported by integration and approved workflow

***

### Future State - Not in Current Scope

B2C public retail access, walk-in self-service flows, outlet iPad chatbot flows, customer-facing symptom-based search, public chatbot ordering, and Shopee or e-commerce integrations are not part of the current proposal. These use cases may be explored later, but they require separate requirements gathering because they introduce new customer-facing behaviour, data risks, pricing visibility considerations, and operational controls.

### Explicitly Out of Scope

The following are excluded from Phase 1 unless separately scoped and quoted:

* Vehicle profile registry and multi-vehicle support per customer

* Vehicle taxonomy engine and alias-to-standard-code resolution

* Vehicle compatibility filtering by model, engine capacity, transmission, or year

* Symptom-based parts search and knowledge base retrieval for parts recommendation

* Stock hold or stock reservation

* B2B customer direct ordering via WhatsApp

* B2C chatbot flows, outlet iPad chatbot flows, or walk-in self-service flows

* Automatic approval threshold routing

* Chatwoot one-tap approval or rejection

* Automatic cancellation of unactioned orders

* Automatic inventory release after timeout

* Estimated delivery time by outlet or transfer route

* Credit limit checks, credit exposure display, tax checks, credit note touchpoints, invoice visibility, or customer financial status visibility unless the external system provides confirmed APIs

* Automatic WhatsApp document delivery to customers

* Custom role-based access rules

* Sales Order push, inventory deduction, invoice generation, delivery note generation, or document retrieval unless confirmed with the external accounting or sales system provider

* Payment processing, point-of-sale functionality, e-commerce storefront, Shopee integration, automated collections, or finance workflow automation

***

## 6. Customisation Areas

The core MAIA platform provides the starting workflow for internal order taking. The following capabilities require custom development or expanded integration specific to CK Auto Parts' business and can be positioned as future upsell packages.

### A) Automotive Vehicle Intelligence Package

This package may include:

* Vehicle profile registry

* Plate number linked to vehicle model, engine capacity, transmission, and year

* Multi-vehicle support per customer

* Vehicle alias-to-standard-code resolution

* Admin-managed vehicle taxonomy

### B) Smart Parts Search Package

This package may include:

* Vehicle-compatible parts recommendation

* Symptom-based parts search

* Knowledge base retrieval for SKU matching

* Follow-up questions to narrow down the correct item

* Compatibility matrix between parts and vehicle profiles

### C) Advanced Inventory and Fulfilment Package

This package may include:

* Multi-outlet inventory fallback rules

* Main warehouse versus outlet fulfilment routing

* Estimated delivery time by outlet or transfer route

* Stock hold or stock reservation

* Partial fulfilment logic

* Automated inventory release after timeout

* Auto-cancellation rules for unactioned orders

### D) Approval and Governance Package

This package may include:

* Approval thresholds by amount, role, customer, or order type

* RM 1,000 default threshold if confirmed by CK Auto Parts

* Chatwoot approval notification

* One-tap approve/reject workflow

* Role-based access control

* Approval audit trail

### E) External System Advanced Integration Package

This package may include, subject to confirmation with the accounting or sales system provider:

* Sales Order push into the external system

* Inventory deduction

* Accurate stock availability

* Invoice generation

* Delivery note generation

* Invoice and delivery note retrieval

* Document routing to customer or internal team

* Credit limit check

* Credit exposure visual cue

* Credit note and invoice touchpoints

* Tax-related checks

* Customer financial status visibility

### F) Customer Direct Ordering Package

This package may include:

* B2B customer direct ordering via WhatsApp

* Registered customer recognition

* Guided ordering conversation

* Live agent escalation

* Customer-facing quotation or order confirmation flow

* Outlet iPad chatbot flow

* Pricing visibility controls for public or semi-public channels

### G) E-Commerce Integration Package

This package may include:

* Shopee order integration

* Other e-commerce marketplace or storefront integrations

* Order import and fulfilment handoff rules

***

## 7. Setting Up (After Proposal Confirmation)

### Step 1 - Kickoff Workshop (Scope Confirmation)

* Confirm Phase 1 as core MAIA order taking plus required integration only

* Confirm the internal order-taking SOP flow

* Confirm which steps are handled in MAIA and which remain manual

* Confirm what has already been signed or agreed commercially

* Confirm whether the external system is Xeersoft, SalesSoft, or another provider for this implementation

* Confirm whether any external system dependency is required for Phase 1 go-live

* Identify items that should be parked for future customisation quotation

* Confirm whether credit limit, stock hold, approval threshold, and B2C chatbot expectations are mandatory or future scope

### Step 2 - Data and User Preparation

* Confirm required customer and order fields for the base workflow

* Prepare any customer or product data needed for agreed Phase 1 usage

* Prepare product and SKU data for MAIA knowledge base setup

* Prepare vehicle-part compatibility data if product recommendation is expected in Phase 1

* Confirm staff users who will use MAIA

* Confirm standard user access based on core MAIA capability

* Record future data requirements for vehicle registry, taxonomy, and parts compatibility if CK Auto Parts wants to explore customisation later

### Step 3 - System Configuration and Integration Alignment

* Configure the agreed core MAIA workflow

* Set up users for the agreed Phase 1 process

* Align with the external system provider on the previously agreed order-taking scope

* Confirm whether any expanded integration work is excluded, dependent, or separately quoted

* Confirm available APIs for inventory, invoice, credit, credit note, tax, and customer data

* Document manual handoff steps outside MAIA

### Step 4 - Testing (UAT)

* Test internal order-taking scenarios

* Test staff review and confirmation steps

* Test any confirmed external system order-taking handoff

* Test product recommendation against CK Auto Parts' supplied knowledge base data

* Test manual handoff points for inventory, document handling, and customer communication

* Capture enhancement requests for future customisation packages

### Step 5 - Training, Go-Live, and Hypercare

* Train CK Auto Parts staff on the Phase 1 internal workflow

* Clarify what is included in core MAIA and what remains manual

* Confirm support process during the hypercare period

* Collect Phase 1 feedback before scoping Phase 2 or custom features

***

## 8. What We Provide vs What You Need

| Mindhive Provides | CK Auto Parts Provides |
|---|---|
| Core MAIA configuration for the agreed Phase 1 workflow | Confirmation of the internal order-taking SOP |
| User setup based on available core MAIA roles | List of staff users and required access |
| Training for Phase 1 users | User availability for training and UAT |
| Go-live and hypercare support | Timely feedback during UAT and hypercare |
| External system alignment support for agreed order-taking scope | External system contact point, API/context confirmation, and dependency support |
| Knowledge base setup support for agreed Phase 1 usage | Clean product, SKU, and compatibility data where recommendation is expected |
| Future customisation scoping support, if requested | Requirements, business rules, sample data, and approval for separate quotation |

***

## 9. Timeline

> Delivery dates are indicative and may change depending on external factors such as availability of external system support, completeness of required product and compatibility data, timely client feedback, and other dependencies outside MAIA's control. Any adjustments will be communicated accordingly.

| Stage | Activity | Indicative Timing |
|---|---|---|
| 1 | Kickoff, commercial-scope confirmation, and internal proposal review | To be confirmed |
| 2 | External system alignment and API confirmation | To be confirmed |
| 3 | Core MAIA configuration and knowledge base preparation | To be confirmed |
| 4 | User setup, workflow preparation, and UAT | To be confirmed |
| 5 | Training, go-live, and hypercare | To be confirmed |

***

## 10. Commercials

### A) One-Time Implementation Fee

Phase 1 pricing should reflect core MAIA order taking plus required integration only.

Any out-of-scope or custom feature will require separate requirements gathering, timeline confirmation, and quotation. This includes, but is not limited to, vehicle registry, vehicle taxonomy, advanced vehicle-part compatibility structures, stock hold, advanced approval logic, automated document delivery, customer direct ordering, outlet iPad chatbot flow, Shopee or e-commerce integration, role-based access customisation, credit/invoice/tax visibility, and expanded external system integration.

***

### B) Payment Terms

Payment terms to be confirmed in the commercial agreement.

***

### C) Monthly Subscription

Monthly subscription to be confirmed in the commercial agreement.

*Subscription excludes cloud hosting and AI inference costs unless otherwise stated. GPT usage, if applicable, will depend on actual transaction volume and enabled AI workflows.*

***

## 11. Acknowledgement & Agreement

This document serves as the updated baseline scope and commercial framework for MAIA's Phase 1 implementation at CK Auto Parts. By signing below, both parties acknowledge that Phase 1 is limited to core MAIA order taking plus required integration, and that custom features listed as out of scope require separate confirmation and quotation.

**For Mindhive:**

Signature: _______________________________

Name: _______________________________

Position: _______________________________

Date: _______________________________

***

**For CK Auto Parts:**

Signature: _______________________________

Name: _______________________________

Position: _______________________________

Date: _______________________________

***

*MAIA structures the workflow. Humans remain the decision-makers.*

*Prepared by Mindhive | 13 May 2026*

## See Also

* [[11 May 2026 - Proposal for CK Auto Parts]]
* [[Xeersoft x CK Auto]]
* [[MAIA Product]]

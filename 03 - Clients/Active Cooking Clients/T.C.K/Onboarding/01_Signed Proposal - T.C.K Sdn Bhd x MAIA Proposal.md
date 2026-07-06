---
owner: Gareth
status: review
last_reviewed: 2026-07-02
---

# T.C.K Sdn Bhd x MAIA Proposal

Prepared for: T.C.K Sdn Bhd
Prepared by: Mindhive Sdn. Bhd.
Date: 26 June 2026

## 1. Executive Summary

T.C.K Sdn Bhd currently manages important parts of its sales and operational workflow through a process that still depends heavily on WhatsApp coordination, manual checking, repeated follow-up, and internal handoffs. Orders come in through WhatsApp groups, are manually forwarded internally, then keyed into AutoCount before documents are generated and warehouse picking is coordinated separately.

At the current volume of around 50 orders per day and roughly 1,000 orders per month, this creates avoidable delays, inconsistent execution, and dependency on specific experienced staff.

MAIA is proposed as an operational layer that sits on top of AutoCount and T.C.K Sdn Bhd's existing WhatsApp-driven workflow. MAIA is not positioned as a replacement for AutoCount. Instead, MAIA helps the team capture orders more cleanly, prepare sales order drafts, apply agreed pricing and approval rules, support document handling, track status, and improve internal visibility.

This proposal recommends a Phase 1 rollout focused on:
- Internal WhatsApp order intake
- Draft sales order preparation
- Human review before submission
- AutoCount-linked order submission
- Document handling
- Pick list support
- Backend status visibility
- Customer grouping with markup
- Weekly base price upload/update
- Min/max selling price guardrails
- Approval flow for orders exceeding a certain order value

The total customization value for T.C.K Sdn Bhd is RM8,000, covering customer grouping with markup and weekly base price upload/update. However, Mindhive will cover this customization cost for T.C.K Sdn Bhd, so the customization fee will be shown as waived / FOC in this proposal.

With the recommended rollout, T.C.K Sdn Bhd should expect:
- Less manual checking and repeated key-in work
- More consistent handling of orders, pricing, stock checks, and documents
- Better control over customer group pricing and weekly price changes
- Reduced dependency on staff memory and manual chat coordination
- Clearer internal visibility and accountability
- A stronger operational foundation to support growth without increasing admin workload in the same proportion

## 2. Our Understanding of the Current Business Issues

### 2.1 Order Intake Is Still Heavily Dependent On WhatsApp And Manual Forwarding

T.C.K Sdn Bhd currently receives customer orders mainly through WhatsApp groups. Every Monday, the team sends out a weekly quotation or product offering, and customers reply with their required items and quantities.

Those orders are then manually copied or forwarded into another internal WhatsApp group before staff key them into AutoCount.

Today, this means the team has to repeatedly interpret messages, re-enter information, and manually pass work from one person to another. This creates unnecessary delay, inconsistency, and dependency on individual staff judgment.

### 2.2 Document Handling And Warehouse Handoff Remain Manual

Once orders are keyed into AutoCount, staff generate invoices, picking orders, and delivery orders. The warehouse then receives manually compiled Excel or Word-style order lists for picking.

Because this is handled manually today, it increases the risk of wrong document preparation, slower internal handoff, and fragmented execution between sales and warehouse.

### 2.3 Pricing Is Operationally Difficult Because It Changes Weekly

A key issue for T.C.K Sdn Bhd is that pricing is fluid. Prices can change weekly and may involve base price logic, customer groups, rebates, or markups.

This means the team is not just processing orders. The team is also spending time interpreting pricing logic, checking customer-specific treatment, and coordinating what should happen next.

### 2.4 Customer Group Pricing Needs To Be More Structured

Different customers may have different pricing treatment. Without a structured customer grouping and markup system, staff may need to rely on memory or manual checking.

This creates risk of:
- Wrong pricing being used
- Margin leakage
- Customer disputes
- Inconsistent treatment across sales/admin users

### 2.5 Management Visibility Is Affected By Fragmented Execution

Management visibility is affected because order updates, warehouse progress, and supporting documents are spread across chats, staff actions, AutoCount, and manual internal follow-up.

Without a stronger operational layer, it becomes harder to maintain control, review exceptions, and scale workflows consistently as volume increases.

### 2.6 Why This Matters Commercially

The issues above do not only create admin inconvenience. They also affect the business more broadly by causing:
- Slower processing time
- Heavier reliance on manual staff effort
- Increased risk of wrong pricing, wrong item, or wrong document handling
- More back-and-forth across teams
- Weaker control over customer-specific treatment
- Difficulty scaling operations cleanly
- Reduced management visibility over execution and exceptions

## 3. Proposed Solution Overview

### 3.1 What MAIA Is In This Proposal

In this rollout, MAIA will act as an internal B2B order processing and control layer for T.C.K Sdn Bhd.

MAIA will help staff process orders through a structured workflow while keeping AutoCount as the core ERP and record-keeping system.

### 3.2 How MAIA Will Fit Into The Client's Environment

MAIA will work together with:
- AutoCount
- T.C.K Sdn Bhd's current WhatsApp-based order intake process
- T.C.K Sdn Bhd's customer and item references
- Agreed pricing and approval rules
- Internal sales/admin and warehouse workflows

Rather than replacing the client's current system, MAIA is designed to improve the operational layer around it. This includes helping staff capture requests more cleanly, reference the correct business logic, prepare drafts, support document handling, track workflow status, and surface issues for review.

### 3.3 What Changes After Implementation

After implementation, the team should no longer need to rely only on manual interpretation and scattered follow-up to move work forward.

Instead:
- Requests can be forwarded into MAIA through WhatsApp
- MAIA references the agreed customer, item, stock, and pricing logic
- MAIA prepares the next step or draft document
- Users review and confirm where needed before submission
- Orders can be submitted into AutoCount after confirmation
- Status and documents are tracked more clearly in the backend workspace
- Management gets better operational visibility through the backend workspace

## 4. Phase 1 Scope

### 4.1 Phase 1 Objective

Phase 1 is designed to establish the core internal B2B operational workflow first, so T.C.K Sdn Bhd can start seeing practical improvement without waiting for every advanced use case to be built upfront.

### 4.2 Included Workflows

The recommended Phase 1 rollout includes the following agreed workflows:
- Internal order intake forwarding from customer WhatsApp messages to MAIA
- Draft sales order preparation for review and confirmation
- Stock availability and customer reference checks before submission
- Customer grouping and markup reference during order preparation
- Weekly base price upload/update using MAIA's provided template
- Min/max selling price guardrail checks
- Approval flow for orders exceeding a certain order value
- Generation of agreed sales and fulfillment-related documents
- Order and operational status tracking through the backend workspace
- Pick list support and fulfillment status updates through MAIA-assisted workflow

### 4.3 Included Capabilities

Phase 1 includes:
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
- Activity trail
- Document trail
- Order and workflow status tracking
- Backend visibility for agreed operational flows
- Role-based access for relevant internal users

### 4.4 Documents Included

The following document support is included in the agreed Phase 1 scope:
- Sales order
- Invoice
- Delivery order / delivery-related support
- Pick list

### 4.5 What Goes Live At The End Of Phase 1

At the end of Phase 1, T.C.K Sdn Bhd will have a working internal operational workflow where agreed users can use MAIA to handle B2B order intake, prepare and review sales orders, apply pricing and approval checks, generate agreed documents, trigger fulfillment-related actions, and track operational progress through the backend workspace.

## 5. Customization And Setup Scope

### 5.1 Confirmed Customizations

The following customizations are included in this proposal. The total customization value is RM8,000, but Mindhive will cover this cost for T.C.K Sdn Bhd. Therefore, the payable customization fee for T.C.K Sdn Bhd is RM0.

| Customization | Description | Commercial Treatment |
| --- | --- | --- |
| Customer Grouping With Markup | Allows T.C.K Sdn Bhd to group customers into pricing groups and apply the agreed markup by group during order creation. | FOC |
| Weekly Base Price Upload / Update | Allows T.C.K Sdn Bhd users to update weekly item base prices using a MAIA-provided upload template. MAIA will use the latest uploaded base prices when preparing orders. | RM8,000 |

### 5.2 Setup Items Included

The following items are treated as setup items, not customizations.

| Setup Item | Description |
| --- | --- |
| Min / Max Selling Price Guardrails | Configure minimum and maximum selling price limits so MAIA can check order pricing against agreed limits. |
| Approval Flow For Orders Exceeding Certain Order Value | Configure an order value threshold so orders exceeding the threshold are routed for approval before final submission into AutoCount. |

### 5.3 Future To Scope Items

The following are not included unless separately agreed:
- Deeper warehouse execution logic beyond basic pick-list support
- Full warehouse management system
- Customer-facing ordering chatbot
- Complex multi-level approval matrices beyond the agreed high-value order approval flow
- Custom dashboards or reports beyond the agreed backend visibility
- Any integrations not specifically stated in this proposal

## 6. Key Workflow Scenarios

### 6.1 Scenario A: Standard Order Intake And Sales Order Preparation

1. Customer sends an order through the existing WhatsApp group.
2. Internal staff forwards the order into MAIA through WhatsApp.
3. MAIA extracts the relevant customer, item, quantity, and order details.
4. MAIA references agreed customer, item, stock, and pricing information.
5. MAIA prepares a draft sales order.
6. Internal user reviews and confirms the draft.
7. MAIA submits the agreed output into AutoCount and updates the backend workspace.

### 6.2 Scenario B: Repeat Order And Document Generation Workflow

1. A customer places a repeat order through WhatsApp.
2. Staff forwards the request to MAIA.
3. MAIA prepares the draft using the customer and item references already available.
4. User confirms the order.
5. MAIA generates the agreed document output, such as invoice or delivery-related document.
6. The backend workspace reflects the latest status and document trail.

### 6.3 Scenario C: Fulfillment And Warehouse Handoff Workflow

1. A confirmed sales order is ready for fulfillment.
2. MAIA generates the pick list based on the sales order.
3. Warehouse or relevant staff uses the pick list to execute picking.
4. Staff updates MAIA on pick progress or completion.
5. Fulfillment progress is reflected in the backend workspace for visibility.

### 6.4 Scenario D: Pricing-Controlled Order Workflow

1. Customer places an order for items with weekly-changing produce prices.
2. Staff forwards the request to MAIA.
3. MAIA references the latest uploaded base price.
4. MAIA identifies the customer's assigned pricing group.
5. MAIA applies the agreed group markup.
6. MAIA checks the final selling price against min/max selling price guardrails.
7. If the order exceeds the agreed order value threshold, MAIA routes the order for approval.
8. Staff reviews and confirms the final draft before submission.
9. Final document and order records are created based on the confirmed pricing result.

## 7. Implementation Approach

### 7.1 Implementation Stages

Implementation is expected to proceed in the following order:
1. Kickoff and workflow confirmation
2. Logic and configuration design
3. System setup
4. Integration setup
5. User acceptance testing
6. Training
7. Go-live support

### 7.2 What Mindhive Will Do

Mindhive will:
- Confirm the agreed workflow design
- Configure the agreed business rules
- Set up the required operational references
- Implement the agreed integrations
- Configure customer grouping and markup logic
- Set up the weekly base price upload/update template
- Configure min/max selling price guardrails
- Configure high-value order approval flow
- Support testing and issue clarification
- Conduct training for the agreed users
- Support rollout for the agreed scope

### 7.3 What T.C.K Sdn Bhd Will Need To Provide

T.C.K Sdn Bhd will need to provide:
- Relevant system access or vendor coordination
- Customer, item, and pricing references
- Customer grouping rules
- Markup rules by customer group
- Weekly base price structure or existing price format
- Min/max selling price references
- Order value approval threshold
- Approver names or roles
- Sample documents and existing flow references
- Clarification on rules, exceptions, and desired outcomes
- Internal PICs for review and sign-off
- UAT users and timely feedback during testing

This is important to ensure the project moves smoothly and expectations remain aligned.

## 8. Timeline

### 8.1 Standard Implementation Timeline

| Stage | Timeline | Scope |
| --- | --- | --- |
| Kickoff and Workflow Confirmation | Week 1 | Confirm order flow, user roles, AutoCount access, pricing rules, approval rules, document formats, and implementation PICs. |
| Configuration and Integration Setup | Week 2 to Week 3 | Set up MAIA workflows, AutoCount integration, customer/item references, document handling, backend workspace, pricing setup, and approval rules. |
| Customization Setup | Week 3 to Week 4 | Configure customer grouping with markup and weekly base price upload/update template. |
| User Acceptance Testing | Week 5 | Test agreed workflows, document outputs, AutoCount submission, pricing logic, approval flow, and backend visibility. |
| Training and Go-Live Support | Week 6 | Train agreed users, support go-live, monitor initial usage, and resolve issues within agreed scope. |

### 8.2 Timeline Notes

The standard target timeline is approximately 6 weeks, subject to:
- Access to AutoCount environment, API, database, or vendor coordination
- Turnaround time for data and rule clarification
- Availability of customer, item, pricing, and approval references
- Speed of internal review and feedback
- Complexity of existing AutoCount setup
- Confirmation of final document formats

## 9. Commercials

### 9.1 One-Time Fees

| Category | Scope | What It Covers | One-Time Fee |
| --- | --- | --- | --- |
| B2B MAIA Phase 1 Implementation | Internal WhatsApp Order Assistant and AutoCount-linked workflow | Turns WhatsApp/PO/voice/image orders into ready-to-confirm sales orders. Staff confirms before submission into AutoCount. Includes document handling, pick-list support, backend visibility, activity trail, document trail, stock/customer reference checks, and training. | RM20,000 |
| Customizations | Customer grouping with group-based markup and weekly base price upload/update using MAIA's template | Initially valued at RM8,000. Mindhive will cover this customization cost for T.C.K Sdn Bhd. | FOC (RM8,000) |

### 9.2 Monthly Subscription

Based on T.C.K Sdn Bhd's current order volume of approximately 1,000 orders per month, the proposed subscription tier is:

| Tier | Monthly Order Volume | Monthly Subscription |
| --- | --- | --- |
| T1 | Up to 2,500 orders/month | RM2,500/month |

If actual sustained order volume exceeds 2,500 orders per month, the subscription tier or overage pricing will be reviewed and agreed separately in writing before any additional charges apply.

### 9.3 What The Monthly Subscription Covers

The monthly subscription covers:
- Platform access
- Standard support for agreed scope
- Ongoing system usage
- Bug fixes within agreed scope
- Standard operational maintenance for the subscribed setup
- Hosting is not included in the monthly subscription unless explicitly stated in writing. Hosting, cloud infrastructure, WhatsApp vendor fees, API charges, and AutoCount vendor charges are treated separately if applicable.

For avoidance of doubt, the monthly subscription does not include cloud hosting, cloud infrastructure charges, ChatGPT / OpenAI API key or usage fees, WhatsApp Business API charges, WhatsApp number registration or subscription fees, WhatsApp vendor / BSP charges, AutoCount vendor charges, or any other third-party platform fees unless explicitly stated in writing.

### 9.4 Payment Terms

| Milestone | Percentage | Amount | Payment Trigger |
| --- | --- | --- | --- |
| Upfront Payment | 50% | RM10,000 | Upon project commencement |
| Completion of UAT | 50% | RM10,000 | Upon completion of UAT |

### 9.5 Commercial Notes

- The RM8,000 customization fee covers customer grouping with markup and weekly base price upload/update.
- Mindhive will cover the RM8,000 customization cost for T.C.K Sdn Bhd, so the customization fee is waived / FOC.
- Min/max selling price guardrails and high-value order approval flow are included as setup items.
- Third-party API, WhatsApp vendor, hosting, or AutoCount access charges, if applicable, are treated separately unless stated otherwise.
- Any additional customizations outside the confirmed scope will be separately scoped and quoted.
- This proposal is valid for 14 days from the proposal date

## 10. Assumptions And Exclusions

### 10.1 Assumptions

This proposal assumes that:
- MAIA will sit on top of AutoCount, not replace it.
- The agreed workflows can be clearly documented during kickoff.
- Required master data and rule references will be provided by T.C.K Sdn Bhd.
- Customer grouping and markup rules will be confirmed by T.C.K Sdn Bhd before configuration.
- Weekly base price updates will follow the MAIA-provided template.
- Min/max selling price references will be provided by T.C.K Sdn Bhd.
- The order value approval threshold and approver list will be confirmed by T.C.K Sdn Bhd.
- Ambiguous or edge-case scenarios may still require human confirmation unless specifically customized.
- Implementation progress depends partly on the availability of client-side reviewers and vendor responsiveness where relevant.
- Phase 1 is focused on internal B2B order operations first, not a full customer-facing ordering rollout.

### 10.2 Exclusions

Unless otherwise stated, this proposal does not include:
- Full ERP replacement
- Major restructuring of the client's accounting or inventory system
- Full warehouse management system
- Deeper warehouse execution logic beyond basic pick-list support
- E-invoicing-specific timing logic
- Full customer-facing B2B self-service ordering rollout
- Customer-facing ordering chatbot
- Complex multi-level approval matrices beyond the agreed high-value order approval flow
- Custom dashboards or reports beyond agreed standard backend visibility
- Third-party implementation work outside Mindhive's agreed scope
- Additional customizations not listed in this proposal
- Guarantee of flawless voice-message conversion accuracy, since voice handling accuracy depends on pronunciation and input quality
- Cloud hosting, cloud infrastructure charges, ChatGPT / OpenAI API key or usage fees, WhatsApp Business API charges, WhatsApp number registration or subscription fees, WhatsApp vendor / BSP charges, AutoCount vendor charges, and other third-party platform fees, unless explicitly stated in writing.

## 11. Success Criteria For Phase 1

Phase 1 will be considered successfully delivered when:
- The agreed workflows are configured and available for use.
- The agreed users are trained.
- Agreed test cases pass during UAT.
- The agreed document flows are functioning as intended.
- MAIA can support internal WhatsApp order intake and draft preparation.
- MAIA can support AutoCount-linked order submission within the agreed scope.
- Customer grouping with markup is configured and tested.
- Weekly base price upload/update is configured and tested.
- Min/max selling price guardrails are configured and tested.
- High-value order approval flow is configured and tested.
- The agreed operational visibility features are live.
- T.C.K Sdn Bhd signs off on the agreed rollout scope.

## 12. Recommended Next Steps

To proceed, we recommend the following next steps:
1. Confirm acceptance of the proposed Phase 1 scope.
2. Confirm commercial acceptance.
3. Appoint implementation PICs from both sides.
4. Schedule kickoff workshop.
5. Begin data, rule, and workflow confirmation for setup.
6. Confirm customer groups and markup rules.
7. Confirm weekly base price template requirements.
8. Confirm min/max selling price guardrails.
9. Confirm order value approval threshold and approver roles.

## 13. Acknowledgement And Agreement

This document serves as a baseline specification and framework for MAIA's implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**Signed** — T.C.K Sdn Bhd x MAIA Proposal, 26 June 2026 (see original PDF for signature block).

## See Also

- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/Detailed Onboarding Handover - T.C.K Sdn Bhd x MAIA]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/02_Project Scope and Meeting Links - T.C.K Sdn Bhd x MAIA]]

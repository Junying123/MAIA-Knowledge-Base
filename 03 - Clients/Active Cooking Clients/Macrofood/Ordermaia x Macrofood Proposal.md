---
owner: Gareth
status: approved
last_reviewed: 2026-06-03
client: Macro Frozen Sdn. Bhd.
signed_date: 2026-05-15
---

# Macro Frozen x MAIA Proposal

**Prepared for:** Macro Frozen Sdn. Bhd.
**Prepared by:** AutorunBiz PLT
**Date:** 13 May 2026

---

## 1. Executive Summary

Macro Frozen currently operates a sales and fulfillment workflow that depends heavily on WhatsApp coordination, manual order interpretation, manual SQL entry, fresh weight adjustments, delivery document preparation, invoice updates, and payment follow-up.

Macro Frozen's workflow is not a simple order-entry process. Customers may place an order first, but the actual final weight and final amount may only be confirmed after the goods are prepared, weighed, and finalized. On top of that, the team also needs to manage customer-specific pricing, changing item prices, payment slips, bank statement checking, outstanding balances, and outdoor sales requests.

MAIA is proposed as a WhatsApp-based operational assistant that sits on top of Macro Frozen's existing SQL system. MAIA is not intended to replace SQL. Instead, MAIA helps Macro Frozen capture customer orders from WhatsApp, prepare structured Sales Orders, support fresh weight adjustment, generate the required sales and delivery documents, process payment slips and bank statements, and provide management with better visibility over daily operations.

This proposal focuses on helping Macro Frozen solve the immediate operational bottleneck without forcing customers to download a new app. Instead of building a custom B2C app from scratch, Macro Frozen can continue using WhatsApp as the customer-facing channel while MAIA supports the internal team with order processing, pricing checks, SQL integration, document generation, and payment tracking.

**Recommended Package:**

| Module |
|--------|
| Base MAIA Phase 1 Implementation |
| Customer Grouping With Markup |
| Price Update Assistant |
| Approval Flows |

The recommended package focuses on:

- WhatsApp order intake
- Sales Order preparation
- SQL integration
- Fresh weight adjustment workflow
- Delivery Order and invoice workflow
- Payment slip and bank statement processing
- Outdoor sales support through MAIA
- Customer information updates through MAIA
- Backend dashboard visibility
- Customer grouping with markup
- Price update assistant
- Approval flows

With the recommended rollout, Macro Frozen should expect:

- Less manual SQL key-in work
- Fewer order, pricing, quantity, and document mistakes
- Faster handling of fresh weight adjustments
- Clearer payment and outstanding visibility
- Better support for outdoor salespeople
- Better control over customer group pricing and price updates
- Better approval control for special cases and exceptions
- Lower dependency on individual staff memory
- A stronger operational foundation for growth without immediately building a custom app

---

## 2. Our Understanding of Macro Frozen's Current Business Issues

### 2.1 Orders Are Still Heavily Dependent on WhatsApp and Manual Processing

Macro Frozen receives customer orders mainly through WhatsApp. These orders may come in different message formats, including text messages, voice messages, customer-specific wording, and informal instructions.

Today, the team needs to interpret these orders manually, identify the customer, check the item, confirm the quantity, verify pricing, and key the information into SQL. This creates unnecessary manual work and increases the risk of mistakes.

### 2.2 Fresh Weight and Final Price Cannot Always Be Confirmed Immediately

Macro Frozen's workflow involves fresh meat or frozen food products where the final weight may only be known after the warehouse prepares, cuts, packs, or weighs the goods.

This means the team cannot always issue the final invoice immediately when the customer first places the order. The process requires an order to be captured first, then the actual weight and final price need to be updated before the final document is generated.

This is a key workflow that MAIA must support as part of the base implementation for Macro Frozen.

### 2.3 Manual SQL Entry Creates Errors and Delays

The current process depends on staff manually entering order details into SQL. When the team is busy, this can lead to:

- Wrong quantity
- Wrong item
- Wrong price
- Wrong customer
- Delayed order entry
- Delayed document generation
- Delayed payment updates

These issues affect both internal efficiency and customer satisfaction.

### 2.4 Payment Collection and Payment Updates Are a Major Pain Point

Macro Frozen also faces operational challenges around payment tracking and collection. Customers may pay by cash, bank transfer, or other methods. In some cases, payment slips may not clearly state the invoice number or customer name. In other cases, the payer name may differ from the customer/company name in SQL.

This causes payment matching and payment updates to be delayed. When payments are not updated quickly, salespeople may not have the latest outstanding information when following up with customers.

### 2.5 Customer Pricing and Product Pricing Need Better Structure

Macro Frozen's pricing may change based on item price changes, product availability, customer type, or customer group. Without a structured pricing process, staff may need to rely on memory or manual checking.

This creates risks such as:

- Wrong pricing being used
- Margin leakage
- Inconsistent customer treatment
- Confusion between sales and admin
- Slower order confirmation

### 2.6 Outdoor Salespeople Need Faster Access to Information

Macro Frozen's outdoor sales team may need to check item prices, item availability, customer outstanding status, or generate customer-facing documents while they are outside the office.

Today, these tasks may depend on calling or messaging admin staff. MAIA can help reduce this dependency by allowing salespeople to query information and request documents through WhatsApp.

---

## 3. Proposed Solution Overview

### 3.1 What MAIA Is in This Proposal

In this proposal, MAIA will act as a WhatsApp-based order processing and operational control layer for Macro Frozen.

MAIA will help the team:

- Capture customer orders from WhatsApp
- Prepare structured Sales Orders
- Check customer, item, price, and outstanding information
- Support fresh weight updates before final invoicing
- Generate agreed documents
- Process payment slips and bank statements
- Provide outdoor sales support
- Track order, delivery, document, and payment statuses
- Sync confirmed information into Macro Frozen's SQL system where applicable

MAIA will not replace SQL. SQL remains the core accounting/order system. MAIA sits on top of the workflow to make day-to-day execution faster, clearer, and less manual.

### 3.2 How MAIA Will Fit into Macro Frozen's Environment

MAIA will work together with:

- Macro Frozen's SQL system
- Macro Frozen's WhatsApp-based order intake
- Macro Frozen's customer master data
- Macro Frozen's item/SKU data
- Macro Frozen's pricing references
- Macro Frozen's customer grouping and markup rules
- Macro Frozen's payment and outstanding tracking workflow
- Macro Frozen's sales, admin, finance, and outdoor sales process

### 3.3 What Changes After Implementation

After implementation, Macro Frozen's team should no longer need to rely only on manual WhatsApp interpretation, manual SQL key-in, and scattered follow-up.

Instead:

- Staff can forward WhatsApp orders to MAIA
- MAIA extracts the order details
- MAIA references customer, item, price, and outstanding data
- MAIA prepares a draft Sales Order
- Staff reviews and confirms the draft
- Fresh weight adjustments can be updated before final documents are generated
- Confirmed records can be submitted into SQL
- Payment slips and bank statement records can be processed through MAIA-assisted matching
- Outdoor salespeople can query prices, customer status, and documents through WhatsApp
- Management can view the operational status through the backend workspace

---

## 4. Phase 1 Scope

### 4.1 Phase 1 Objective

Phase 1 is designed to establish the core WhatsApp-to-SQL operational workflow for Macro Frozen.

The goal is to help Macro Frozen reduce manual order processing work, support fresh weight adjustment, improve document handling, improve payment visibility, and provide better management control over daily operations.

### 4.2 Included Base MAIA Workflows

The following workflows are included in the Base MAIA Phase 1 scope.

#### 4.2.1 WhatsApp Order Capture

Macro Frozen's team can forward customer WhatsApp orders to MAIA. MAIA will help extract key order information such as:

- Customer name
- Item/product
- Quantity requested
- Remarks
- Delivery or collection details where applicable
- Order notes or special instructions

Where voice messages are used, MAIA can assist in interpreting the message, subject to pronunciation, audio quality, and language clarity. Human review is required before final submission.

#### 4.2.2 Sales Order Preparation and SQL Integration

MAIA will prepare a draft Sales Order based on the extracted order details.

Before final submission, MAIA will reference available customer, item, pricing, and outstanding information where integrated or configured. The user will review and confirm the draft before it is submitted into SQL.

#### 4.2.3 Fresh Weight Adjustment Workflow

Fresh weight adjustment is included as Base MAIA scope because it is required to support Macro Frozen's actual business process.

The workflow will support:

1. Customer places order through WhatsApp.
2. MAIA prepares the draft Sales Order.
3. Goods are prepared, cut, packed, or weighed.
4. Actual weight is updated into MAIA.
5. MAIA recalculates the final amount based on the confirmed weight and pricing logic.
6. User reviews and confirms the final order.
7. The relevant document is generated and/or submitted into SQL.

#### 4.2.4 Delivery Order and Invoice Workflow

MAIA will support Macro Frozen's document flow where Delivery Order / delivery-related documents and invoice generation are required from the confirmed order.

The Sales Order will act as the source of truth. After confirmation and weight adjustment, MAIA can support generation of agreed documents such as:

- Sales Order
- Delivery Order / Delivery Note
- Invoice
- Proforma Invoice where required
- Credit Note where applicable

#### 4.2.5 Credit Note Support

MAIA will support credit note generation for agreed scenarios such as returns, rejected goods, overbilling, weight adjustments, or other billing corrections where applicable.

#### 4.2.6 Payment Slip and Bank Statement Processing

Payment slip and bank statement processing are included under Base MAIA.

MAIA will assist Macro Frozen by reading payment slips and/or bank statement records, extracting relevant payment information such as:

- Payment date
- Amount
- Payer name
- Bank reference
- Transaction reference
- Uploaded proof of payment

MAIA will then suggest possible matching records based on available invoice, customer, and payment information.

#### 4.2.7 Payment Discrepancy Review

If there is a discrepancy between payer name, customer name, company name, invoice reference, or bank reference, MAIA will not automatically decide the customer mapping.

Instead, MAIA will flag the payment for review and allow the user to select which customer/company the payment belongs to before the payment is updated into SQL.

This gives Macro Frozen better control and reduces the risk of incorrect payment posting.

#### 4.2.8 Outdoor Sales Assistant

Macro Frozen's outdoor sales team can use MAIA through WhatsApp while serving customers outside the office.

The outdoor sales assistant can support:

- Querying latest item prices
- Checking item availability where data is available
- Checking customer outstanding/payment status where integrated
- Generating customer-facing documents on the go
- Requesting invoice or proforma invoice generation where required
- Updating customer information
- Recording customer notes or preferences

#### 4.2.9 Customer Information Updates Through MAIA

Authorized users can update customer information through MAIA, subject to confirmation and permission controls.

This may include:

- Customer contact persons
- Phone numbers
- Delivery addresses
- Billing addresses
- Customer remarks
- Customer preferences
- Notes from salesperson/customer discussions

Confirmed updates can be synced into SQL where integration allows.

#### 4.2.10 Backend Dashboard and Operational Visibility

MAIA will include backend visibility for agreed workflows, allowing management and authorized users to track:

- Orders received
- Draft orders pending review
- Orders submitted
- Orders pending weight update
- Orders pending document generation
- Delivery/order status where updated
- Payment matching status
- Unmatched payment records
- Customer/payment exceptions
- Activity trail
- Document trail

#### 4.2.11 Daily Reminders and Pending Task Visibility

MAIA can support reminders and pending task visibility for agreed operational items such as:

- Orders pending review
- Orders pending weight update
- Orders pending final confirmation
- Orders pending document generation
- Payments pending matching
- Payments requiring user review
- Exception cases requiring approval

---

## 5. Recommended Package and Customization Scope

The recommended package for Macro Frozen is designed to remove decision friction and allow Macro Frozen to proceed with the modules that are most relevant to its current workflow and that similar food/distribution clients are taking.

**Recommended package:**

| Module |
|--------|
| Base MAIA Phase 1 Implementation |
| Customer Grouping With Markup |
| Price Update Assistant |
| Approval Flows |

### 5.1 Customer Grouping With Markup

This module allows Macro Frozen to group customers into pricing groups and apply agreed markup rules during order creation.

Example customer groups may include:

- Wholesale customers
- Retail customers
- Hawker/food service customers
- Corporate customers
- Special price customers
- Other customer groups defined by Macro Frozen

During order creation, MAIA will identify the customer's assigned group and apply the agreed markup or pricing treatment based on the configured rule.

This helps reduce manual pricing checks and improves consistency across sales and admin users.

### 5.2 Price Update Assistant

The Price Update Assistant allows Macro Frozen to bulk update item prices using a MAIA-provided template.

This module will support:

- Price update through structured upload template
- Bulk update of item price references
- Use of latest uploaded prices when preparing Sales Orders
- Use of latest uploaded prices when generating invoices or proforma invoices where applicable
- Use of latest uploaded prices when outdoor salespeople query MAIA for item prices

This is useful because Macro Frozen's product prices may change frequently and the team needs a structured way to maintain updated pricing.

### 5.3 Approval Flows

Approval flows can be configured for selected business scenarios where Macro Frozen wants management, finance, or authorized users to approve before proceeding.

Approval scenarios may include:

- High-value orders
- Special pricing
- Price override requests
- Orders outside pricing guardrails
- Payment confirmation exceptions
- Customer outstanding exceptions
- Other approval conditions agreed during implementation

Complex multi-level approval matrices are not included unless separately scoped.

### 5.4 Optional Good-to-Have Add-On: Product Update Assistant

The Product Update Assistant is not included in the recommended package unless separately confirmed in writing.

This optional module allows Macro Frozen's team to request MAIA to generate a ready-to-forward message containing currently available products and prices.

This module can support:

- Generating a customer-facing product update message on request
- Including currently in-stock items where stock data is available
- Including latest prices based on the latest price update data
- Including product details such as carton/box information where available
- Producing a message that Macro Frozen's team can review and manually forward to customer groups

This module does not include automated WhatsApp blasting or automated sending into customer groups unless separately agreed and technically/policy-wise supported.

---

## 6. Documents Included

The following document support is included for the agreed Phase 1 scope:

- Sales Order
- Delivery Order / Delivery Note
- Invoice
- Proforma Invoice where required
- Credit Note where applicable
- Payment receipt/payment record support where applicable

Final document formats will be confirmed during implementation based on Macro Frozen's existing document requirements and SQL integration capability.

---

## 7. Key Workflow Scenarios

### 7.1 Scenario A: Standard WhatsApp Order to Sales Order

1. Customer sends an order through WhatsApp.
2. Macro Frozen staff forwards the message to MAIA.
3. MAIA extracts customer, item, quantity, and remarks.
4. MAIA checks customer, item, and pricing references where available.
5. MAIA prepares a draft Sales Order.
6. User reviews and confirms the draft.
7. MAIA submits the confirmed Sales Order into SQL where integration allows.
8. The backend workspace reflects the latest order status.

### 7.2 Scenario B: Fresh Weight Adjustment Workflow

1. Customer places an order through WhatsApp.
2. MAIA prepares a draft Sales Order.
3. Warehouse prepares, cuts, packs, or weighs the goods.
4. Actual weight is updated into MAIA.
5. MAIA recalculates the final amount based on the confirmed weight and price.
6. User reviews and confirms the final order.
7. MAIA generates the agreed document such as Delivery Order and/or invoice.
8. Final confirmed information is reflected in SQL where integration allows.

### 7.3 Scenario C: DO and Invoice Workflow

1. Sales Order is confirmed.
2. MAIA supports the generation of the Delivery Order / Delivery Note.
3. Goods are delivered according to the agreed process.
4. Invoice is generated based on the confirmed final order information.
5. Document trail is maintained in the backend workspace.

### 7.4 Scenario D: Payment Slip / Bank Statement Matching

1. Customer sends a payment slip or finance uploads a bank statement.
2. MAIA extracts payment details such as date, amount, payer name, and reference.
3. MAIA suggests possible invoice/customer matching where possible.
4. If the match is clear, user can confirm the payment update.
5. If there is a discrepancy, MAIA asks the user to select the correct customer/company.
6. Once confirmed, payment information is updated into SQL where integration allows.
7. Payment status is reflected in MAIA's backend workspace.

### 7.5 Scenario E: Outdoor Sales Query

1. Salesperson messages MAIA on WhatsApp.
2. Salesperson asks for an item price, availability, or customer outstanding.
3. MAIA retrieves the latest available information.
4. Salesperson can request invoice/proforma invoice generation where required.
5. Salesperson can update customer contact or address information through MAIA.
6. Confirmed updates are reflected in the backend workspace and synced to SQL where applicable.

### 7.6 Scenario F: Customer Group Markup and Price-Controlled Order

1. Customer places an order.
2. MAIA identifies the customer profile.
3. MAIA checks the customer's assigned group.
4. MAIA applies the configured group markup or pricing logic.
5. MAIA references the latest uploaded price where applicable.
6. User reviews the pricing before confirmation.
7. If approval is required, MAIA routes the case to the approver.
8. Once approved/confirmed, the order proceeds to document generation and SQL submission.

### 7.7 Scenario G: Product and Price Update Message (Optional Add-On)

*This scenario applies only if Macro Frozen decides to proceed with the optional Product Update Assistant.*

1. Macro Frozen updates latest prices using MAIA's price update template.
2. Macro Frozen's team asks MAIA to generate a product/price update message.
3. MAIA prepares a ready-to-forward message using the latest item, price, and stock information available.
4. Macro Frozen's team reviews the message.
5. Macro Frozen's team manually forwards the message to customers.

---

## 8. Implementation Approach

### 8.1 Implementation Stages

Implementation is expected to proceed in the following order:

1. Kickoff and workflow confirmation
2. SQL access and integration confirmation
3. Data and document collection
4. Base MAIA setup
5. Fresh weight workflow configuration
6. Payment slip and bank statement workflow setup
7. Outdoor sales workflow setup
8. Recommended customization setup
9. User acceptance testing
10. Training
11. Go-live support

### 8.2 What AutorunBiz PLT Will Do

AutorunBiz PLT will:

- Confirm the agreed workflow design
- Configure the agreed MAIA workflows
- Set up the WhatsApp-based internal assistant flow
- Configure Sales Order preparation workflow
- Configure fresh weight adjustment workflow
- Configure document generation workflow
- Configure payment slip and bank statement processing workflow
- Configure payment discrepancy review process
- Configure outdoor sales assistant workflow
- Configure customer information update workflow
- Configure backend workspace visibility
- Implement agreed SQL integration where access allows
- Configure Customer Grouping With Markup
- Configure Price Update Assistant
- Configure Approval Flows
- Support testing and clarification
- Train agreed users
- Support rollout within the agreed scope

### 8.3 What Macro Frozen Will Need to Provide

Macro Frozen will need to provide:

- SQL system access or vendor coordination
- Customer master data
- Item/SKU master data
- Existing price references
- Customer grouping rules
- Markup rules by customer group
- Product and price update structure
- Sample WhatsApp order messages
- Sample voice order messages where applicable
- Sample payment slips
- Sample bank statement format
- Existing document samples
- Fresh weight adjustment rules
- Current DO/invoice workflow details
- Approval threshold and approver list
- User list and role/access requirements
- Internal PICs for review and feedback
- UAT users and timely testing feedback

---

## 9. Timeline

### 9.1 Standard Implementation Timeline

| Stage | Timeline | Scope |
|-------|----------|-------|
| Kickoff and Workflow Confirmation | Week 1 | Confirm order flow, SQL access, document formats, user roles, pricing rules, payment flow, and implementation PICs. |
| Configuration and Integration Setup | Week 2 to Week 3 | Set up MAIA workflows, SQL integration, customer/item references, document handling, backend workspace, and base workflow logic. |
| Fresh Weight and Payment Workflow Setup | Week 3 to Week 4 | Configure fresh weight adjustment flow, payment slip processing, bank statement workflow, and payment discrepancy review. |
| Recommended Customization Setup | Week 4 to Week 5 | Configure customer grouping with markup, price update assistant, and approval flows. |
| User Acceptance Testing | Week 5 to Week 6 | Test WhatsApp order intake, SQL submission, fresh weight adjustment, document generation, payment matching, outdoor sales assistant, and agreed customizations. |
| Training and Go-Live Support | Week 6 | Train agreed users, support go-live, monitor initial usage, and resolve issues within agreed scope. |

### 9.2 Timeline Notes

The standard target timeline is approximately 6 weeks, subject to:

- SQL access availability
- SQL vendor coordination where required
- Availability of customer, item, pricing, and payment references
- Confirmation of document formats
- Confirmation of fresh weight adjustment logic
- Confirmation of customer grouping and markup rules
- Confirmation of approval rules
- Speed of client-side review and feedback
- Complexity of existing SQL setup
- Any third-party limitations

---

## 10. Commercials

### 10.1 Recommended Package

| Category | Scope | One-Time Fee |
|----------|-------|-------------|
| Base MAIA Phase 1 Implementation | WhatsApp Order Processing, Fresh Weight Adjustment, SQL Integration, Payment Processing Workflow, Outdoor Sales Assistant | RM20,000 |
| Customer Grouping With Markup | Group customers and apply agreed markup rules during order creation | RM8,000 |
| Price Update Assistant | Bulk update item prices using a MAIA-provided template | RM8,000 |
| Approval Flows | Approval routing for high-value orders, special pricing, price overrides, payment exceptions, or outstanding exceptions | RM4,000 |

**Recommended Package Total: RM40,000** ~~(RM42,000)~~

### 10.2 Optional Add-On

| Optional Module | Scope | Fee |
|----------------|-------|-----|
| Product Update Assistant | Generate ready-to-forward product/price messages using current in-stock items and latest prices | RM8,000 |

### 10.3 Monthly Subscription

Based on Macro Frozen's current order volume of approximately 700 orders per month, the proposed subscription tier is:

| Tier | Monthly Order Volume | Monthly Subscription |
|------|---------------------|---------------------|
| MAIA Growth | Up to 2,500 successful orders/month | RM2,500/month |

If actual sustained order volume exceeds 2,500 successful orders per month, the subscription tier or overage arrangement will be reviewed and agreed separately in writing before any additional charges apply.

### 10.4 Hosting, Infrastructure, and Third-Party Costs

| Item | Estimated Cost |
|------|---------------|
| Hosting / Infrastructure / Third-Party Costs | Approx. RM500–RM700/month |

Hosting, infrastructure, WhatsApp API, AI usage, SQL vendor charges, and third-party platform fees are estimated at approximately **RM500–RM700/month**, depending on actual usage, vendor requirements, hosting requirements, WhatsApp API usage, AI usage, and third-party system requirements.

These costs are **not included** in the recommended package fee or the RM2,500/month MAIA subscription, and will be **borne by Macro Frozen where applicable**.

### 10.5 What Counts as an Order

An order is counted only when an order is successfully created in Macro Frozen's system through the agreed MAIA workflow.

General messages, enquiries, draft attempts, failed submissions, or internal clarifications are not counted as successful orders.

### 10.6 What the Monthly Subscription Covers

The monthly subscription covers:

- Platform access
- Ongoing MAIA usage
- Standard support for agreed scope
- Bug fixes within agreed scope
- Standard operational maintenance for the subscribed setup
- Access to the agreed MAIA workflow after go-live

The monthly subscription does not include:

- Hosting or server costs
- Cloud infrastructure costs
- WhatsApp API or WhatsApp vendor fees
- AI model usage costs where applicable
- SQL vendor charges
- Third-party API charges
- New customization or scope expansion
- Major changes to workflow logic after sign-off

### 10.7 Payment Terms

| Milestone | Percentage | Amount | Payment Trigger |
|-----------|-----------|--------|----------------|
| Upfront Payment | 50% | RM20,000 | Upon project commencement |
| Completion of UAT | 50% | RM20,000 | Upon completion of UAT |

Monthly subscription of RM2,500/month starts upon go-live.

Hosting, infrastructure, WhatsApp API, AI usage, SQL vendor charges, and third-party platform fees are estimated at approximately RM500–RM700/month and will be borne by Macro Frozen where applicable.

### 10.8 Commercial Notes

- The recommended package covers Base MAIA Phase 1 Implementation, Customer Grouping With Markup, Price Update Assistant, and Approval Flows.
- Product Update Assistant is treated as an optional good-to-have add-on and is not included in the package unless separately confirmed in writing.
- Monthly MAIA subscription is RM2,500/month, covering up to 2,500 successful orders/month.
- Hosting, infrastructure, WhatsApp API, AI usage, SQL vendor charges, and third-party platform fees are estimated at approximately RM500–RM700/month and will be borne by Macro Frozen where applicable.
- Any additional customizations outside the confirmed scope will be separately scoped and quoted.
- Proposal validity period to be stated in final commercial issuance.

---

## 11. Assumptions and Exclusions

### 11.1 Assumptions

This proposal assumes that:

- MAIA will sit on top of SQL and will not replace SQL.
- Macro Frozen will provide the required SQL access or vendor coordination.
- Required customer, item, pricing, payment, and document references will be provided by Macro Frozen.
- Fresh weight adjustment rules can be clearly documented during kickoff.
- Customer grouping and markup rules will be confirmed before configuration.
- Price updates will follow the MAIA-provided template.
- Ambiguous payment records will require user review before being updated.
- Payment discrepancy handling will allow users to choose the correct customer/company.
- Voice message processing accuracy depends on audio quality, pronunciation, and language clarity.
- Implementation progress depends on client-side responsiveness and third-party/vendor access where relevant.
- Phase 1 focuses on internal B2B operations, not a customer-facing B2C app.

### 11.2 Exclusions

Unless otherwise stated in writing, this proposal does not include:

- Full ERP replacement
- Full custom B2C app development
- Customer-facing ordering app
- Customer-facing ordering chatbot
- Fully automated WhatsApp broadcast/blasting
- Full warehouse management system
- Full inventory forecasting
- Procurement recommendation or auto-purchasing
- Complex multi-level approval matrices beyond agreed approval flows
- Custom dashboards or reports beyond agreed standard backend visibility
- Any integrations not specifically stated in this proposal
- Third-party implementation work outside AutorunBiz PLT's agreed scope
- Hosting, infrastructure, WhatsApp API, AI usage, SQL vendor charges, and third-party platform fees (not included in the recommended package or RM2,500/month MAIA subscription; will be borne by Macro Frozen where applicable)
- Guarantee of flawless voice-message conversion accuracy
- Automatic payment alias mapping without user confirmation
- Additional customizations not listed in this proposal
- Product Update Assistant unless separately confirmed in writing

---

## 12. Success Criteria for Phase 1

Phase 1 will be considered successfully delivered when:

- The agreed workflows are configured and available for use.
- The agreed users are trained.
- Agreed test cases pass during UAT.
- MAIA can support WhatsApp order intake and draft Sales Order preparation.
- MAIA can support SQL-linked order submission within the agreed scope.
- MAIA can support fresh weight adjustment workflow within the agreed scope.
- MAIA can generate agreed documents within the agreed scope.
- MAIA can support payment slip and bank statement processing within the agreed scope.
- MAIA can flag unclear payment matches for user review.
- MAIA can support outdoor sales queries and agreed customer information updates.
- Customer Grouping With Markup is configured and tested.
- Price Update Assistant is configured and tested.
- Approval Flows are configured and tested.
- The backend workspace shows agreed workflow and status visibility.
- Macro Frozen signs off on the agreed rollout scope.

Product Update Assistant success criteria will only apply if Macro Frozen separately confirms this optional add-on in writing.

---

## 13. Recommended Next Steps

To proceed, we recommend the following next steps:

1. Confirm acceptance of the proposed Phase 1 scope.
2. Confirm commercial acceptance for the recommended package.
3. Confirm monthly subscription of RM2,500/month for up to 2,500 successful orders/month.
4. Confirm that hosting, infrastructure, WhatsApp API, AI usage, SQL vendor, and third-party platform fees are estimated at approximately RM500–RM700/month and will be borne by Macro Frozen where applicable.
5. Appoint implementation PICs from both sides.
6. Schedule kickoff workshop.
7. Begin data, rule, document, and workflow confirmation.
8. Begin implementation after kickoff and required access are provided.

---

## 14. Acknowledgement and Agreement

This document serves as a baseline specification and commercial framework for MAIA's implementation and usage for Macro Frozen.

By signing below, both parties agree to the scope, assumptions, responsibilities, exclusions, commercials, and payment terms set out in this proposal.

**For AutorunBiz PLT:**
Name: Krystle Wong
Position: Co-founder
Date: 15/5/2026

**For Macro Frozen Sdn. Bhd.:**
Name: Choy Kien Yang
Position: Managing Director
Date: 15/5/2026
Company Reg: 202301011565 (1505487-K)
Address: Jalan Bayu Permai 5, Taman Bayu Permai, 48000 Rawang, Selangor Darul Ehsan
Tel: 012-721 3149
Email: david012123@gmail.com

---

## See Also

- [[03 - Clients/Active Cooking Clients/Macrofood/Client Overview]]
- [[03 - Clients/Active Cooking Clients/Macrofood/Onboarding Status]]

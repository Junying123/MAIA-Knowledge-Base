<title>4May26 - Ivan Req Gat Complete notes</title>

# GST Fine Foods — Requirements Gathering Meeting Minutes

**Meeting:** GST Fine Foods Requirements Gathering  
**Date:** 4 May 2026  
**Time:** 2:43 PM  
**Purpose:** Requirements gathering for MAIA implementation, SAP B1 integration assessment, workflow gap identification, and customization scoping.

---

## Attendees

<sheet sheet-id="gX6w47" token="YsXjstbQvhwdzXtfH3ilcAqOgfg"></sheet>

---

## Meeting Objectives

The meeting started with MAIA’s side clarifying the purpose of the session:

1. **Understand GST Fine Foods’ business process in detail**

   - How orders are received.
   - How sales, operations, warehouse, finance, and management currently work.
   - How GST currently uses SAP B1.
2. **Identify workflow gaps between GST’s real operations and MAIA’s current product capabilities**

   - Especially around seafood processing, order taking, pricing, stock movement, credit control, and branch visibility.
3. **Identify enhancement and customization areas**

   - GST is treated as a beta / early client for MAIA.
   - Any must-have gaps for adoption should be captured early.

---

# Company & Business Background

GST Fine Foods explained that the business is part of the broader GST group and is involved in seafood operations, including farming, hatchery, processing, trading, and distribution.

The business focuses mainly on:

- **Frozen seafood**
- **Chilled seafood**
- **Live seafood**
- **B2B supply**
- Domestic market distribution
- Supermarket / hotel / restaurant customers
- Processing and trading operations

Majority of business volume is frozen seafood, but chilled and live seafood are also part of the operation.

---

# Current Order Intake Process

## 4.1 Main Sales Channels

GST receives orders through several channels:

- WhatsApp groups
- Salesperson communication
- Sales coordinator input
- Online portals
- Customer purchase orders
- Voice messages
- Excel / PDF documents
- B2B and some B2C channels

## 4.2 Roles Involved

The current flow involves:

- Salesperson
- Sales coordinator
- Warehouse / inventory team
- Finance
- Manager / superior approval
- Customer

## 4.3 Current Pain

A lot of order information still comes through WhatsApp and informal communication. This creates operational dependency on humans remembering, forwarding, approving, and re-keying information correctly.

---

# Item, SKU, UOM & Seafood Processing Discussion

## 5.1 Salmon / Fish UOM Problem

A key discussion was around how to set up fish items such as salmon.

GST’s operational reality:

- Fish may be received as whole fish.
- Whole fish has variable weight.
- Sales and pricing are often based on **KG**.
- Operational tracking may sometimes need to know **NOS / number of fish**.
- Each fish can have different weight.
- Processing may convert whole fish into fillet, head, tail, or other outputs.

Example raised:

- One fish may be 5kg.
- Another fish may be 4kg.
- Another fish may be 3kg.
- Static conversion from NOS to KG is inaccurate.

## 5.2 Conclusion on UOM

The meeting concluded that a simple static UOM conversion is not enough for variable-weight fish.

Possible approaches discussed:

<sheet sheet-id="UteO0E" token="YsXjstbQvhwdzXtfH3ilcAqOgfg"></sheet>

**Decision direction:**  
For current phase, GST likely should not overcomplicate fish tracking to serial-number level unless the operation is ready for the extra workload. The practical approach is to keep KG as the commercial / costing base and handle NOS carefully only where operationally necessary.

---

# Processing, Repacking & Stock Transformation

## 6.1 Processing Use Cases

GST explained several stock transformation scenarios:

1. **Whole fish → fillet / head / tail**
2. **Original 1kg pack → repacked into smaller 200g packs**
3. **Raw material → retail packaging**
4. **Glazing process**

   - Example: 10% glazing to match market practice.
   - Pricing comparison depends on whether products are glazed or non-glazed.

## 6.2 Important Accounting Constraint

GST emphasized that when stock is transformed, the **total input value must equal total output value**.

Example:

- Input: Salmon worth RM100
- Output: Fillet + salmon head
- Total output value must still equal RM100

If the output value does not reconcile to input value, accounting will have issues.

## 6.3 Current SAP Customization

GST indicated SAP has been customized to enforce transformation value consistency.

The system must ensure:

- Input value equals output value.
- Certain outputs may have fixed cost assumptions.
- Balance value is allocated to remaining output items.
- Users cannot create the transformation document if value does not reconcile.

## 6.4 Outcome

This is a **major custom workflow** and cannot be treated as standard BOM only.

**Action required:** GST to provide a screen recording or walkthrough of the current SAP stock transformation process so MAIA team can study the logic properly.

---

# Customer Preferences & Processing Instructions

## 7.1 Requirement

GST needs to capture customer-specific preferences at every interaction.

Examples:

- Shangri-La wants butterfly cut.
- Another customer wants cleaned and gutted fish.
- Customers may have preferred cut, processing method, packaging style, or remarks.

## 7.2 Current Practice

Preferences are currently remembered manually by sales or inserted into remarks.

## 7.3 MAIA Requirement

MAIA should support customer preference capture that can flow into:

- Quotation
- Sales Order
- Pick List
- Processing instructions
- Delivery / fulfillment remarks
- Chatbot context

## 7.4 Outcome

Customer preferences should not just sit in a customer profile as passive notes. They need to be operationalized into transaction creation and fulfillment.

---

# Item Description / Name Override in Sales Documents

## 8.1 Requirement

GST requires the ability to override item name or item description in sales documents.

Reason:

- Same SKU may need different customer-facing descriptions.
- Processing instructions or customer-preferred descriptions may vary.
- Sales documents may need to display a customized description without changing the item master.

## 8.2 Outcome

MAIA should support transaction-level item description override while preserving the underlying SKU identity.

This is important because changing the item master directly would create data pollution and break consistency.

---

# Pricing & Blanket Agreement

## 9.1 Pricing Model

GST clarified that they do not simply use generic “special price” logic. Instead, different customers may have different agreed prices.

Pricing can depend on:

- Customer
- Item
- Contract / tender
- Weekly market fluctuation
- Case-by-case business agreement

There are roughly **four pricing tiers**, but actual customer pricing can be more specific.

## 9.2 SAP Blanket Agreement

GST currently uses **SAP B1 Blanket Agreement** in Penang to secure agreed customer pricing.

Workflow:

1. Customer agrees to a quoted price.
2. Price is keyed into SAP Blanket Agreement.
3. When Sales Order / Invoice is created, SAP automatically detects the customer-specific pricing.

## 9.3 KL vs Penang

It was noted that Penang uses Blanket Agreement. GST needs to confirm whether KL follows the same practice.

## 9.4 Outcome

MAIA must support or integrate with SAP’s customer-specific pricing / blanket agreement logic.

This is not optional. If MAIA cannot resolve agreed prices correctly, order creation becomes dangerous.

---

# Blanket Order / Informal Stock Reservation / Confirmed Order Reservation

## 10.1 Initial Discussion

There was discussion around whether GST needs informal stock booking for customers who pre-inform demand before official PO.

Example concept:

- Hotel tells salesperson they may need large volume in future.
- No confirmed PO yet.
- Business wants to plan purchasing or reserve stock.

## 10.2 Clarification

After discussion, the stronger GST use case appears to be less about informal reservation before PO, and more about **preventing overselling once an order is confirmed**.

## 10.3 Confirmed Order Reservation

GST needs MAIA to show stock already committed to confirmed orders so salespeople do not sell stock that is already intended for another customer.

## 10.4 Order Not Moving / Dead Reservation Signal

GST also needs visibility when a confirmed order is not being consumed or fulfilled.

Example:

- Customer ordered 200 pieces of salmon.
- Only 50 fulfilled.
- Remaining 150 sits unfulfilled for too long.
- System should alert users that stock / order movement is stagnant.

## 10.5 Outcome

MAIA should support:

- Stock reservation visibility for confirmed orders.
- Warning when stock is already committed.
- Alert for confirmed orders with no movement.
- Future enhancement: informal stock booking before PO, if confirmed as needed.

---

# Pick List & Actual Picked Quantity

## 11.1 Current Workflow

GST currently operates this way:

1. Pick list is generated.
2. Warehouse picks items.
3. Warehouse manually annotates actual picked quantity on printed pick list.
4. Sales support receives the annotated pick list.
5. Sales support re-enters actual picked quantity into MAIA / system.

## 11.2 Pain Point

This creates:

- Double data entry
- Manual delay
- Risk of error
- Lack of real-time stock accuracy
- Dependency on sales support

## 11.3 Requirement

MAIA should allow actual picked quantity to be captured directly in system.

## 11.4 Outcome

This should be treated as an operational execution gap, not just a PDF formatting issue.

---

# Substitution Rules for Out-of-Stock Items

## 12.1 Discussion

GST discussed substitution when ordered SKU is out of stock.

Example:

- Customer orders one size/specification.
- GST may propose a similar item with different size/specification.

## 12.2 Current Practice

Salesperson communicates with customer to confirm whether substitution is acceptable.

## 12.3 Requirement

MAIA should surface substitute item suggestions when stock is insufficient.

## 12.4 Outcome

Substitution logic should be advisory first, not automatic. Customer confirmation remains necessary.

---

# Inventory Notifications & Stock Movement Alerts

## 13.1 No Activity Stock Item Notification

GST requested notifications for items with no activity or no movement.

This includes:

- No stock movement
- No sales movement
- Slow-moving items
- Items that may need attention for purchasing or sales action

## 13.2 Expiry / Batch Limitation

GST currently does not track batch numbers in SAP.

Because of that:

- Expiry-date-based notification is not possible unless batch / expiry data is captured.
- MAIA cannot surface batch-level expiry alerts if SAP does not hold the data.

## 13.3 Practical Outcome

For Phase 1, MAIA can surface stock movement signals based on available transaction data.

Batch / expiry alerting should be treated as Phase 2 and depends on batch-level data discipline.

---

# Credit Limit, Credit Approval & Credit Block

## 14.1 Current Credit Setup

GST manages credit terms based on customer credit application forms.

Credit terms include:

- 30 days
- 60 days
- 90 days
- 7 days
- 3 days
- Other customer-specific terms

## 14.2 Current Credit Block Process

SAP blocks customers based on credit limit / overdue status.

Approval is required from manager / superior before goods can be released.

## 14.3 Pain Point

Credit approval currently happens in WhatsApp group.

Problem:

- Manager may miss the message.
- Approval can be delayed by 2–3 hours.
- Order-taking process slows down.

## 14.4 Requirement

MAIA should support structured credit approval workflow:

- Credit block signal
- Approval request
- Approval status
- Notification to approver
- Audit trail
- Faster release process

---

# Statement of Account (SOA)

## 15.1 Current Practice

GST sends SOA to customers monthly before the 3rd day of the month.

SOA applies to all B2B customers except cash sales customers.

## 15.2 Requirement

GST wants:

- Automated monthly SOA email
- Customer-specific SOA
- Ability for customers to view invoice details
- Potential link-based self-service SOA page

## 15.3 Security Concern

GST raised concern that if a customer forwards the SOA link to others, unauthorized people may see all transaction information.

## 15.4 MAIA Direction

MAIA proposed:

- Secure encrypted link
- Time-limited validity
- Controlled access
- Further design needed on security and authentication

## 15.5 Outcome

SOA automation is an important requirement, but link security must be designed carefully.

---

# Invoice Retrieval by Salesperson / Customer

## 16.1 Current Pain

Salespeople frequently ask backend / finance to resend invoices to customers.

Customers say:

- “I don’t have this invoice.”
- “Please send me again.”

Backend may miss the request, causing delays of up to days.

## 16.2 Requirement

Salesperson should be able to retrieve and send invoice copies without depending on backend support.

## 16.3 Expected Benefit

- Faster customer response
- Faster payment collection
- Less backend interruption
- Reduced WhatsApp follow-up

---

# Delivery Note, Invoice & Customer Confusion

## 17.1 Current SAP Process

GST currently prints SO / DO / Invoice through SAP.

There are separate document numbers:

- SO number
- DO number
- Invoice number

Customers, especially hotels, find this confusing.

## 17.2 Current Workaround

GST changed template behavior so that DO and invoice use the same number / similar reference to avoid customer confusion.

## 17.3 Outcome

MAIA document generation must consider GST’s existing document numbering and customer-facing format expectations.

Sample PDFs / Crystal Reports are required.

---

# Credit Notes, Returns & Batch Tracking

## 18.1 Current Return Process

When goods are returned, GST identifies the original invoice based on:

- Which invoice customer refers to
- Which day the goods were sent
- Matching return to delivery / invoice

Returns usually happen on the same day or a few days later.

## 18.2 Batch Tracking

GST currently does not track batch numbers.

They previously tried batch tracking many years ago but found the practice too slow and not mature enough.

## 18.3 Outcome

Credit note and return logic should rely on invoice / delivery linkage first, not batch-level tracking for Phase 1.

---

# Payment Collection & Payment Proof Handling

## 19.1 Current Process

Customers pay and inform salesperson through WhatsApp.

Salesperson forwards payment proof into a WhatsApp group.

Finance checks and reconciles manually.

## 19.2 Pain Point

This is very manual and messages can be missed.

## 19.3 MAIA Direction

Salesperson can forward proof to MAIA.

MAIA can create a draft payment entry.

Finance then verifies and allocates payment to invoices.

The system should support:

- Payment proof attachment
- Draft payment entry
- Allocation to multiple invoices
- Finance approval / reconciliation
- Comments and tagging on the document
- Notification when users are tagged

## 19.4 Outcome

Payment workflow should move from WhatsApp group tracking to document-based workflow inside MAIA.

---

# Reports, Dashboards & Planning Exports

## 20.1 Sales Dashboard

Management requested visibility into salesperson performance, including up-to-date sales versus budget.

## 20.2 Role-Based Dashboards

MAIA explained dashboards can be customized by function:

- Salesperson dashboard
- Logistics dashboard
- Finance dashboard
- Management dashboard

## 20.3 Planning Excel / Purchasing Decision Support

GST has manual Excel-based planning to decide what stock to order.

They currently need to pull many data sources into Excel to determine:

- Which items are fast-moving
- Which items are slow-moving
- Which items need replenishment
- How long a container / purchase will take to clear
- Whether management should approve purchase requisition

## 20.4 Clarification

This is not just “export to Excel.” It is a purchasing / stock planning decision workflow.

## 20.5 Action Required

GST should provide a sample of the Excel planning sheet so MAIA can understand the calculations and required data fields.

---

# Item Master, Photos & Public Item Information

## 21.1 Item Database Requirements

GST asked whether MAIA can support richer item database features compared with SAP / standard ERP.

Requested or discussed:

- Product photos
- Special attributes
- Customer-facing item links
- Public SKU information
- Item information sharing
- Quotation PDF with item images / descriptions

## 21.2 Current Practice

For some cases, item image may be included in description or document format.

Need to confirm sample formats.

## 21.3 Outcome

MAIA should support richer item data, but exact GST usage requires sample quotation / PDF documents.

---

# Quotation Process

## 22.1 Current Quotation Context

GST may use Excel / PDF / customer PO formats.

Quotation lifecycle was discussed, including statuses such as:

- Draft
- Open
- Partially ordered
- Lost
- Ordered

## 22.2 Requirement

MAIA should support quotation lifecycle visibility and conversion into downstream sales documents.

---

# Crystal Report / PDF Format Requirement

## 23.1 Clarification

GST uses SAP Crystal Reports for document layouts, including:

- Picking List
- Sales Order
- Delivery Order
- Invoice

## 23.2 Requirement

MAIA needs to follow GST’s PDF document formats where required.

## 23.3 Action Required

GST to provide sample PDFs / Crystal Report layouts.

MAIA team also needs to discuss with SAP vendor whether existing PDF generator or formats can be reused.

---

# Branch / Outlet / Data Ownership

## 24.1 Current SAP Setup

GST has Penang and KL branches in the same SAP database and same SSM/company.

SAP uses **data ownership** to control branch-level visibility.

Users are tagged to KL or Penang.

Documents are attributed to branches.

This controls which users can see which documents.

## 24.2 Customer Handling

Customers are unique. GST does not create duplicate customer accounts for Penang and KL.

If a customer belongs to KL, it is handled by KL. If Penang, handled by Penang.

## 24.3 MAIA Requirement

MAIA must support:

- Branch attribution on business documents
- Branch attribution on users
- Branch-level data visibility
- Same-company, multi-branch access control
- Similar behavior to SAP data ownership

## 24.4 Outcome

This is a critical setup requirement. MAIA must mimic SAP’s branch / data ownership model.

---

# SAP B1 Integration

## 25.1 SAP Version

GST is using SAP Business One, around version 10.0 / 10.0.11 based on discussion.

## 25.2 Hosting

SAP access appears to require VPN.

## 25.3 Integration Dependency

Many GST processes depend on SAP data:

- Item master
- Customer master
- Pricing / blanket agreements
- Credit limits
- Sales Orders
- Invoices
- SOA
- Stock
- Branch ownership

## 25.4 Outcome

SAP B1 integration is the main blocker and requires a separate technical discussion with GST’s SAP vendor.

A three-party meeting should be arranged between:

- GST
- Mindhive / MAIA team
- SAP vendor

---

# MAIA Pilot / Testing Approach

## 26.1 Integration Should Not Block Early Testing

MAIA proposed spinning up a test/demo instance before full SAP integration is complete.

GST can provide sample exported data from SAP.

## 26.2 Sample Data Needed

GST to provide:

- 200–300 item records
- Price list information
- 50–100 customer records
- Customer names
- Customer codes
- Customer addresses
- Customer emails
- Registration numbers
- Credit terms
- Credit limit information
- Sample inventory data
- Sample users / roles

## 26.3 Goal

Use the sample data to configure a MAIA test instance so GST users can test workflows early and give feedback before full go-live.

---

# UAT Plan

MAIA explained that UAT will likely be a physical session.

Expected format:

- 2–3 hour session
- Important users involved
- Walkthrough of configured workflows
- Test key features
- Capture gaps and feedback

Initial phase should focus on **Penang branch first**, because most B2B volume is there.

---

# Infrastructure & Account Setup Requirements

GST will need to prepare several technical and commercial setup items.

## Required from GST

1. **Company phone number**

   - For MAIA WhatsApp usage.
2. **Meta Business Account**

   - Required for WhatsApp Business API setup.
3. **WhatsApp Business configuration**

   - MAIA will mainly use WhatsApp.
4. **AWS account**

   - Hosting expected to be under GST’s own AWS account.
   - GST bears raw server cost directly.
   - Mindhive deploys into GST AWS account with granted access.
5. **AWS billing setup**

   - Company credit card / billing configuration required.
6. **OpenAI API key**

   - Required for LLM features.
7. **Internal project owner**

   - Joey was identified as GST’s internal product/project owner for coordination.

---

# Key Outcomes of the Meeting

## 29.1 Business Process Understanding Achieved

The MAIA team gained a clearer understanding of GST’s operations across:

- Order taking
- Seafood processing
- Pricing
- Credit control
- Inventory movement
- Branch control
- Payment proof handling
- SOA and invoice retrieval
- SAP B1 dependency

## 29.2 Critical Customization Areas Identified

The meeting identified several high-priority customization / configuration areas:

1. Fish UOM and variable-weight item handling
2. Stock transformation and value-preserving processing
3. Customer-specific preferences and processing instructions
4. Item description override in sales documents
5. SAP Blanket Agreement / customer-specific pricing
6. Confirmed order reservation to prevent overselling
7. Actual picked quantity capture
8. Branch-level access and document ownership
9. SAP Crystal Report document format matching
10. SOA automation and secure customer access
11. Payment proof workflow from WhatsApp into MAIA
12. Stock movement and inactive item notifications
13. Planning Excel / purchasing decision support

## 29.3 SAP Vendor Meeting Required

A separate technical meeting with the SAP vendor is required before integration design can be finalized.

## 29.4 Early Test Instance Proposed

Instead of waiting for full SAP integration, GST can provide sample data so MAIA can set up a test environment for early workflow validation.

---

# Action Items

<sheet sheet-id="BRDBA8" token="YsXjstbQvhwdzXtfH3ilcAqOgfg"></sheet>

---

# Professional Meeting Summary

The meeting was a detailed requirements discovery session between GST Fine Foods and the MAIA team. GST walked through its seafood trading and processing operations, including order capture, SAP B1 usage, customer-specific pricing, credit control, inventory handling, branch visibility, document generation, and operational pain points.

Several important business-specific requirements were uncovered. The most critical are variable-weight seafood item handling, value-preserving stock transformation, customer-specific pricing via SAP Blanket Agreements, branch-based document visibility, actual picked quantity capture, and the need to reduce manual WhatsApp-based coordination across sales, finance, and warehouse teams.

The meeting concluded that SAP B1 integration is a major dependency and requires a dedicated technical discussion with GST’s SAP vendor. However, MAIA can proceed with an early test instance using exported sample data from GST, allowing users to validate workflows before full integration is completed.

The immediate next steps are to arrange the SAP vendor meeting, collect sample SAP data and document formats, set up required infrastructure accounts, and begin preparing a GST-specific MAIA pilot environment.

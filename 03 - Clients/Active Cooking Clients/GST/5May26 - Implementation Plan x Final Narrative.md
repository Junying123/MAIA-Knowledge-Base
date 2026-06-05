# GST Fine Foods — MAIA Implementation Plan

## Phased Scope, Narrative & Gameplan

**Working draft:** v0.5  
**Date:** 5 May 2026

---

## Part A — The Narrative

### 1. Who GST Fine Foods Is

GST Fine Foods is part of the GST Group, a Malaysian seafood operation spanning farming, hatchery, processing, trading, and distribution. The business runs out of Penang, KL (Rawang), and Langkawi, supplying frozen, chilled, and live seafood to hotels, restaurants, supermarkets, and food service operators across peninsular Malaysia.

Its product range includes:

- Barramundi
- Tiger prawns
- Whole fish
- Fillets and portions
- Salmon and trout
- Squid
- Shellfish
- Poultry, meat, and other frozen products

Most volume is in frozen seafood. The operation also holds Best Aquaculture Practices certification for its barramundi value chain and maintains retail presence on Shopee and Lazada.

The operational backbone is SAP Business One version 10.00.919, used across Penang and KL under a single SSM/company with branch-level data ownership controlling which users see which documents. SAP handles:

- Item and customer masters
- Pricing through Blanket Agreements
- Credit limits and terms
- Stock management
- Document generation via Crystal Reports
- The full invoice-to-payment cycle

That is not the problem. The problem is everything that happens around SAP.

### 2. Before MAIA — How GST Operates Today

GST Fine Foods does not have a software problem. It has a coordination problem.

The company runs on WhatsApp, not as a casual supplement, but as the operational nervous system. There is an incoming order group, a pick list group, a delivery group, an invoicing group, and a credit note group. Every operational function has its own WhatsApp channel, and every department head and operations manager sits in most of them simultaneously.

For Tim, the operations manager, this means being submerged in a constant stream of:

- Order confirmations
- Picking instructions
- Delivery status updates
- Invoice queries
- Credit note requests
- Payment proof screenshots
- Exception escalations

All of this flows through the same interface and must be mentally sorted in real time.

When volume is low, the groups work. When volume rises, messages get missed, approvals get delayed, payment proofs sit unseen, and teams compensate by calling each other, re-forwarding messages, and repeatedly asking whether someone saw a message in the group.

#### 2.1 The quotation treadmill

A customer sends a quotation request, usually an Excel file, sometimes a PDF, occasionally a voice message. The sales coordinator opens the file, reads the line items, and starts translating the customer wording into GST's internal item master.

Example:

- Customer wording: `Norwegian salmon fillet 200g x 5 tray`
- Internal item may be: `SALMON ATL FILLET IQF 200G`

The coordinator then needs to:

- Identify the correct item
- Check stock availability
- Verify customer pricing
- Confirm credit standing

Each step depends on a different system, a different person, or a different WhatsApp group.

This knowledge is often held in the coordinator's head. Experienced staff know item naming, pricing habits, and who to call. New staff are slower and more error-prone. The knowledge is locked in people, not in a system.

#### 2.2 The pricing trap

GST does not use simple price lists. It uses SAP Blanket Agreements: long-term customer-item pricing agreements valid within a specific time period.

Penang uses this consistently. Whether KL follows the same practice is still unconfirmed.

The issue is that quotation work often happens outside SAP, in Excel, WhatsApp, and memory. By the time the order reaches SAP, customer pricing may already have been communicated based on outdated spreadsheets or human recall rather than the live Blanket Agreement.

#### 2.3 The credit approval bottleneck

SAP blocks customers who exceed their credit limit or are overdue. But the release decision does not happen cleanly in SAP.

Today's process:

1. Salesperson fills out a manual credit override form.
2. The form is photographed or sent as PDF.
3. It is pushed into a WhatsApp approval group.
4. A manager reviews and signs it.
5. The manager goes into SAP to release the block.

This creates:

- Delayed approvals
- Buried messages
- No structured routing
- No proper audit trail
- Weak traceability when management reviews past decisions

#### 2.4 The payment proof shuffle

Customers send payment proofs to salespeople through WhatsApp. Salespeople screenshot or forward those proofs into a payment group. Finance then scrolls through the group, finds the proof, cross-references it against invoices, and reconciles manually.

If the group is busy, the proof gets buried. Finance may not see it until the next day. The customer follows up with the salesperson, the salesperson follows up with finance, and the loop repeats.

#### 2.5 The pick list and transformation chain

GST's warehouse process is more complex than a standard pick-and-ship workflow.

A pick list is generated, often across multiple sales orders because warehouse picking is done by item and location rather than per order. The warehouse is split into two teams:

- Frozen produce team
- Ready-packed stock team

The pick list is printed twice, one copy for each team.

For frozen items, the process continues into stock transformation. After raw material is picked, it may be:

- Repackaged
- Cut
- Portioned

Example:

- Whole salmon becomes fillets
- A 1 KG pack becomes five 200g portions

The floor worker notes input materials, output products, quantities, and glazing on paper, then photographs the completed pick list and handwritten transformation record. That photo is sent via WhatsApp to the inventory executive, who manually keys the transformation into SAP.

This handoff chain is:

`Pick list printed → floor worker picks → floor worker transforms → floor worker photographs paper → inventory exec receives photo in WhatsApp → inventory exec keys into SAP`

It works, but every handoff adds delay and risk.

#### 2.6 The stock visibility lag

The stock lag created by transformation is a daily operational risk.

Illustrative sequence:

- Frozen team starts picking at 8:00 AM
- Transformation runs through the morning
- Floor worker finishes a batch at 10:00 AM
- Photo may only be seen by inventory exec at 10:30 AM
- SAP entry happens around 11:00 AM
- SAP stock updates around 11:05 AM

During that gap:

- Raw material may already be consumed physically
- SAP still shows it as available
- Finished goods may already exist physically
- SAP does not yet reflect them

This leads to:

- Overselling raw material already consumed
- Missing sales opportunities on finished goods not yet shown in system
- Constant warehouse double-check calls from sales

#### 2.7 The invoice retrieval loop

SAP is accessed via VPN and is effectively office-bound. Salespeople on the road cannot retrieve invoices directly.

When a customer asks for an invoice copy:

1. Salesperson messages backend or sales coordinator
2. Coordinator logs into SAP
3. Coordinator pulls the invoice
4. Coordinator sends it back
5. Salesperson forwards to customer

If the coordinator is busy, the request waits. Customer service slows down and collection is delayed.

#### 2.8 What management sees

Management sees what WhatsApp shows: a message stream.

There is no consolidated view of:

- Pending orders
- Stuck orders
- Over-credit customers
- Non-moving stock
- Sales performance by user

Tim can reconstruct this manually from SAP and WhatsApp, but that takes time he does not have during operations.

### 3. After MAIA — What Changes

MAIA does not replace SAP Business One. SAP remains:

- The accounting backbone
- The stock transformation engine
- The batch processing system
- The document-of-record generator

MAIA replaces the coordination layer now being handled by WhatsApp groups.

Instead of a chat stream, MAIA provides a structured operational layer where:

- Every document has a trail
- Every task has an owner
- Every exception has a routing path
- Every user sees only what they need to act on

#### 3.1 Quotation intake becomes structured

Joey, GST's internal project owner, forwards a customer's Excel quotation into MAIA. MAIA reads the file, identifies likely line items, and matches them to GST's item master. Where wording is ambiguous, MAIA suggests likely matches and lets Joey confirm.

Instead of 30 to 45 minutes of manual translation, Joey gets a structured draft that only requires targeted review.

#### 3.2 Pricing is pulled from the real source

When Joey creates the sales order, MAIA pulls customer-specific pricing from SAP Blanket Agreements.

- If there is an agreed price, it auto-applies
- If there is no agreement, standard pricing applies
- If there is no price, MAIA prompts for one

Pricing no longer depends on memory or side spreadsheets.

#### 3.3 Credit review becomes visible and traceable

MAIA checks the customer's credit standing before order confirmation.

If the customer is over limit:

- MAIA flags the order
- Credit controller gets a notification and ToDo
- Review decision is recorded
- Comments and review history stay attached to the transaction

The SAP-side release remains manual in Phase 1, but the decision trail becomes structured.

#### 3.4 Payment proofs become document-based

Instead of forwarding screenshots into a WhatsApp group, the salesperson forwards the payment proof into MAIA.

MAIA:

- Creates a draft payment entry
- Stores the attachment against the document
- Routes it to finance
- Allows allocation to invoices

The proof becomes part of a workflow, not a message thread.

#### 3.5 Invoice retrieval becomes self-service for sales

If a salesperson needs an invoice copy while on the road, they search for it in MAIA. The invoice record is synced from SAP, so the salesperson can retrieve and forward it directly without waiting for backend support.

#### 3.6 Customer preferences stop living in people's heads

When Joey writes remarks like `butterfly cut` or `skinless fillet, no glaze`, MAIA captures them semantically.

Over time, the system can surface contextual hints such as:

`Past orders for this customer typically specify butterfly cut, skinless.`

This turns tribal knowledge into reusable system knowledge.

#### 3.7 Stock visibility becomes safer, even before transformation is digitised

Phase 1 does not eliminate the transformation lag, but it makes the lag visible and manageable.

MAIA can show:

- Last synced timestamp
- Warning during processing hours
- Committed stock separately from total stock

Even if absolute stock is lagged, committed quantities are still useful because they come from MAIA's own confirmed order data.

#### 3.8 Phase 2 reduces lag further

Once transformation capture moves from paper-and-WhatsApp to a structured MAIA form, the inventory exec receives the record immediately in a queue instead of noticing it later in a chat group. This reduces the lag between floor completion and SAP entry from hours to minutes.

#### 3.9 Management gets a decision view, not a chat stream

Tim no longer needs to sit in every WhatsApp group. MAIA shows him:

- Pending credit reviews
- Stale orders
- Delivery issues
- Business-health exceptions

For Soo Chin, this creates a structured view of what is stuck, overdue, at risk, and waiting for action.

### 4. What MAIA Honestly Cannot Do

#### 4.1 It cannot solve the salmon weight problem by itself

Salmon is priced in KG. Each fish has a different weight. SAP stores stock in KG because a static NOS-to-KG conversion is inaccurate. ERPNext has the same limitation.

Phase 1 position:

- KG remains the base UOM
- NOS can be captured as an informational field
- NOS is not system-enforced for stock calculations

#### 4.2 It does not replace SAP's stock transformation workflow in Phase 1

GST's repackaging, cutting, and portioning logic, especially where input value must equal output value, remains in SAP.

Phase 1:

- Factory floor still records transformations manually
- Inventory exec still keys them into SAP
- MAIA reads resulting stock positions afterward

#### 4.3 It does not fully eliminate stock lag in Phase 1

As long as the transformation handoff remains:

`paper → photo → WhatsApp → manual SAP entry`

the lag still exists. MAIA can:

- Show timestamps
- Warn users during vulnerable windows
- Make committed stock visible

Phase 2 compresses the lag. Phase 3 can only eliminate it if transformation itself moves into MAIA.

#### 4.4 Its intelligence depends on data quality

Product matching, quotation drafting, exception surfacing, and customer preference retrieval all depend on:

- Clean item master data
- Accurate customer information
- Reliable pricing data
- Usable business rules

MAIA is only as good as the data GST provides.

---

## Part B — Structural Gaps & New Doctype Requirements

### Gap 1 — The Salmon Problem (Variable-Weight Item Handling)

**Current reality**

- Salmon is priced in KG
- Each fish weighs differently
- GST does not use batch or serial number tracking
- ERPNext cannot handle non-static UOM conversion cleanly
- Reverse-calculation from finished goods back to raw material is limited

**Phase 1 position**

- KG is the base UOM
- Informational NOS field available on transaction lines
- Not system-enforced

### Gap 2 — Stock Transformation / Value-Preserving Processing

**Current reality**

- Transformation is closer to repackaging/cutting than manufacturing
- Input value must equal output value
- SAP has already been customised to enforce value preservation
- Floor worker records on paper and inventory exec keys into SAP

**Phase 1**

- Transformation stays in SAP
- MAIA reads post-transformation inventory
- Floor-to-SAP handoff unchanged

**Phase 2 opportunity**

- MAIA captures transformation record digitally
- Routes it to inventory exec's workspace for SAP entry
- Improves handoff without replacing SAP

**Phase 3 opportunity**

- Full transformation engine in MAIA
- Estimated effort: 20 to 30 mandays

### Gap 3 — SAP B1 Integration Gate

**Known facts**

- SAP B1 version: 10.00.919
- Access appears to require VPN
- Service Layer exposes `BlanketAgreementsService`

**Unknown**

- Whether GST's instance has Service Layer deployed and network-accessible

### Gap 4 — Blanket Order Doctype (New MAIA Extension)

ERPNext has no native equivalent to SAP Blanket Agreements.

**Custom doctype requirements**

- Customer link
- Agreement method
- Validity period
- Status lifecycle
- Line items with item code, agreed price, planned and fulfilled quantity, and UOM
- Auto-pricing hook on QT/SO creation
- SAP → MAIA sync in read-only mode

**Estimated effort**

- 5 to 8 mandays

**Priority**

- Phase 1 critical

### Gap 5 — Branch / Outlet Doctype (New MAIA Extension)

GST's branch setup has implications across visibility, inventory, reporting, and accounting.

**What branch means at GST**

- Each branch has its own address
- Each branch has its own inventory allocation
- Each branch has sales and accounting implications
- Every business document is branch-scoped
- Users are branch-attributed
- Customers remain global

**What MAIA must build**

- Custom `Branch` doctype with name, code, address, linked warehouse, default cost centre
- Branch field on QT, SO, SI, DN, CN, Pick List, Payment Entry
- Branch field on User profile
- `UserPermission` scoping by branch
- Default branch assignment from user profile
- Cross-branch access for management
- Branch-level reporting

**Important clarification**

Customers are global. Branch scoping applies to documents and users, not customer master duplication.

**Architecture note**

Branch may also be modelled as an Accounting Dimension to support branch-level P&L and balance sheet reporting.

**Estimated effort**

- 3 to 5 mandays

**Priority**

- Phase 1 foundational

### Gap 6 — Consolidated Pick List with Warehouse Team Split

GST's pick list is consolidated across multiple SOs and split operationally between two warehouse teams.

**ERPNext native support**

- Consolidated pick list from multiple SOs: supported
- Actual picked quantity update before submission: supported
- Pick list to DN creation: supported, but split-back to per-customer DN needs testing

**What MAIA still needs**

- Team-specific pick list print/view
- Possible custom split-back logic if ERPNext native behavior is insufficient

**Transformation step between pick and DN**

```text
Pick List generated (consolidated across SOs)
        │
        ▼
Pick list printed — TWO COPIES
  ├─ Copy 1 → Frozen produce team
  └─ Copy 2 → Ready-packed team
        │
        ▼
Frozen team picks raw materials
        │
        ▼
Stock transformation happens here
  (paper → photo → WhatsApp → SAP entry)
        │
        ▼
SAP stock updates
        │
        ▼
Actual picked quantities updated
        │
        ▼
Pick list submitted → DN created
```

**Phase 1 position**

- MAIA handles pick list creation, team-split view/print, actual quantity capture, and pick list → DN flow
- SAP handles transformation entry and value reconciliation

**Risk**

DN creation depends on post-transformation SAP stock being updated. This is an integration timing question that must be addressed.

### Gap 7 — Customer Preference Semantic Capture

GST currently captures customer-specific preferences informally in memory, remarks, and conversations.

**Phase 1 approach**

- Remarks on QT, SO, SI, DN act as capture points
- Remarks are embedded per customer
- MAIA retrieves relevant historical remarks on future document creation
- Suggestions are surfaced to the user, not auto-applied

**What this is not in Phase 1**

- Not the full 15-section Customer Intelligence Profile
- Not structured fields for cut type, glaze preference, and similar
- Not operationalised warehouse instructions yet

**Phase 1 value**

- Prevents customer preferences from being locked in one coordinator's memory
- Delivers visible intelligence with limited custom build

**Phase 2**

- Structured preference fields on customer master
- Auto-population into operational documents

### Gap 8 — Historical Data Migration

One-time sync from SAP to MAIA.

This content is only supported in a Lark Docs

Historical order data is important because it seeds the customer preference RAG. Without historical remarks and preference patterns, the system starts cold.

**If available, GST should export**

- 6 to 12 months of SO/QT data
- Remarks history

**Estimated effort**

- 3 to 5 mandays, depending on SAP export format

---

## Part C — UX Journey: How the User Experiences Key Touchpoints

### 1. Credit Limit — UX by Phase

#### Today

Joey creates a sales order. SAP blocks it because the customer is over limit. Joey fills in a paper credit override form, photographs it, and sends it into a WhatsApp approval group. Tim reviews it later, signs off, and manually releases the block in SAP. There is delay and no clean digital record.

#### After MAIA Phase 1

Before submission, MAIA shows a structured credit warning and creates a review task for the credit controller.

**What improves**

- Credit status is visible upfront
- Review is routed to the right person
- Review actions are recorded
- Joey is notified of outcome

**What MAIA records**

- Who reviewed
- When they reviewed
- Credit position at time of review
- Action taken

**What MAIA does not do in Phase 1**

- Digitise the paper override form
- Auto-release SAP credit block
- Enforce approval hierarchy

#### Phase 2 enhancement

- Digital credit override form
- SAP auto-release if API supports it
- Amount-based routing
- Escalation rules

### 2. Stock Transformation — UX by Phase

#### Today

Floor worker records transformation on paper, photographs it, sends it by WhatsApp, and inventory exec keys it into SAP.

#### After MAIA Phase 1

The transformation workflow itself does not change. What changes is the salesperson's visibility.

MAIA can show:

- Stock availability
- Committed quantity
- Last synced timestamp
- Warning during processing hours

**Phase 1 stock-lag mitigation**

1. Timestamp on stock query
2. Processing-window warning
3. Accurate committed stock from MAIA order data
4. Faster sync cadence where possible

#### Phase 2 enhancement

- Digital transformation capture by floor worker
- Structured queue for inventory exec
- Shorter lag between transformation completion and SAP update
- Read-only transformation visibility for management

#### Phase 3 enhancement

- Full transformation engine in MAIA
- Immediate MAIA stock update
- Push completed transformation into SAP

### 3. Pick List — UX by Phase

#### Today

Pick list is printed twice. Warehouse writes actual quantities on paper. Sales support re-enters them later.

#### After MAIA Phase 1

**Step 1 — Pick list creation**

Warehouse manager creates consolidated pick list from multiple pending SOs.

**Step 2 — Team-split view**

Items are grouped for:

- Frozen produce team
- Ready-packed team

**Step 3 — Frozen-item transformation**

Still handled in SAP.

**Step 4 — Actual quantity update**

Warehouse updates actual picked quantities directly in MAIA.

**Step 5 — Pick list submission**

DN is created using actual quantities without second data entry.

**Phase 1 wins**

- Removes paper re-entry loop
- Gives each team a relevant view
- Captures actual quantity at source
- Reduces dependency on sales support

### 4. Customer Preferences — UX by Phase

#### Today

Customer-specific instructions often depend on who remembers them.

#### After MAIA Phase 1

MAIA captures remarks like:

- `butterfly cut`
- `skinless`
- `no glaze`

On future orders for the same customer, MAIA surfaces those preferences as contextual suggestions.

**How it works**

- Remarks are the capture point
- Remarks are embedded per customer
- New document creation triggers retrieval
- Suggestions are shown, not auto-applied

#### Phase 2 enhancement

- Structured preference fields
- Operationalised flow-through into Pick List and DN

---

## Part D — Phase 1 Scope

### Objective

Core MAIA features that hit acceptance metrics and create enough visible value for adoption. No customisations beyond what is necessary for go-live viability.

### Deployment

- Penang and KL enabled simultaneously
- Same SAP instance
- Same MAIA instance
- Branch-scoped access

### What's In

**New MAIA extensions**

This content is only supported in a Lark Docs

**Core MAIA document flow**

`cRFQ → Quotation → Sales Order → Pick List → Delivery Note → Sales Invoice → Payment Entry`

**SAP B1 integration (READ)**

- Customer master
- Item master
- Inventory
- Pricing
- Credit data
- Active Blanket Agreements
- Webhook preferred, cron polling fallback

**SAP B1 integration (WRITE)**

- SO
- SI
- DN
- CN
- Payment Entry push from MAIA to SAP

**Branch-level access control**

- Branch doctype
- Branch field on all transactional doctypes
- UserPermission scoping
- Cross-branch access for management
- Customers remain global

**Quotation intake from Excel/PDF**

- File-to-structured draft flow
- Product matching
- 0→80% automation ceiling
- Supports acceptance metrics 1 to 4

**Customer-specific pricing**

- Blanket Agreement-based pricing on QT/SO
- Supports metric 7

**Credit standing visibility + notification/ToDo**

- Credit data sync
- Pre-submission credit check
- Credit controller review workflow
- Audit trail
- Manual SAP-side release remains
- Supports metric 9

**Actual picked quantity capture**

- Consolidated pick list
- Team-split view
- Direct warehouse quantity update
- Supports metric 11

**Payment proof workflow**

- Proof to draft payment entry
- Finance review
- Supports metric 12

**Invoice retrieval by salesperson**

- Search and resend from MAIA
- No VPN dependency
- Supports metric 13

**Customer preference semantic capture**

- Remarks-based capture
- RAG retrieval on future document creation
- Historical data seeding
- Adoption-facing wow feature

**Substitution advisory**

- Suggest same-category items with available stock
- Advisory only

**Item description override**

- Customer-facing description override at transaction line level

**Confirmed order reservation visibility**

- Available minus committed
- Stale-order alerts

**Notification & ToDo base**

- Credit block notification
- Stale SO alerts
- Payment proof routing
- Pick list ready alerts
- Comment tags

**Document generation**

- QT
- SO
- DN/DO
- Invoice
- Pick List
- CN
- Layout aligned to Crystal Report samples
- Supports metric 14

**Historical data migration**

- Customer master
- Item master
- Blanket agreements
- Price lists
- Open SOs
- Outstanding balances
- Historical order data for preference mining
- Supports metric 15

### What's Out (Phase 2+ After Adoption)

This content is only supported in a Lark Docs

---

## Part E — Phase 2 Scope (After Adoption)

**Gate:** Phase 1 live for minimum 30 days with demonstrated adoption.

### Customisation bundle

**Commercial:** RM 7,500 after Phase 2 UAT pass

Includes:

- Customer-specific quotation matching logic
- Aging / clearance reminders
- Excel export for planning
- CPRN tracking
- SOA generation, subject to SAP feasibility

### Additional Phase 2 items

- Digital credit approval override form
- SAP credit auto-release
- Digital transformation capture for floor worker
- Structured customer preferences on master
- Role-specific dashboards
- Stock movement / inactive item notifications
- RAG-based substitution with graph injection
- Proactive chatbot substitution on triggers
- Item master enrichment
- Batch tracking, if SAP discipline is established
- Langkawi branch deployment: RM 10,000 one-time + RM 1,000/month

---

## Part F — Phase 3 (Vertical Depth)

- Stock transformation visibility from SAP, read-only
- Stock transformation engine in MAIA, if justified
- Catch-weight handling
- Advanced substitution with customer preference awareness
- Management dashboards for margin analysis and purchasing automation

---

## Part G — Pre-Phase 1 Gates

This content is only supported in a Lark Docs

### Infrastructure (parallel)

- Company phone number
- Meta Business Account
- WABA
- AWS
- OpenAI API key
- Internal project owner: Joey (done)

---

## Part H — Commercial Structure

Per signed proposal v2 (Goh Soo Chin, 24/4/26). Do first, get paid on delivery metrics.

This content is only supported in a Lark Docs

**Monthly pricing after Phase 1 UAT + production**

- KL + Penang: RM 4,500/month
- Langkawi add-on: RM 10,000 one-time + RM 1,000/month

---

## Part I — Acceptance Framework (Phase 1)

This content is only supported in a Lark Docs

---

## Part J — Open Questions

1. Is SAP B1 Service Layer deployed and network-accessible from AWS?
2. Which Blanket Agreement fields are exposed through API?
3. Does KL follow the same Blanket Agreement practice as Penang?
4. How exactly is SAP branch data ownership implemented?
5. Do DO and Invoice truly share the same numbering scheme?
6. Is credit approval authority single-level or tiered, and what are the paper form fields?
7. What network routing is required between SAP VPN and AWS?
8. Is glazing percentage stored as an item attribute or handled as a separate SKU logic?
9. What is the format and volume of historical data export?
10. Is consolidated pick list → per-customer DN split supported natively?
11. How does GST determine frozen vs ready-packed team allocation?
12. How long is the typical gap between pick and SAP stock update after transformation?
13. Can GST export 6 to 12 months of SO/QT data with remarks?

---

## Part K — Risk Register

This content is only supported in a Lark Docs

---

## Changelog

This content is only supported in a Lark Docs

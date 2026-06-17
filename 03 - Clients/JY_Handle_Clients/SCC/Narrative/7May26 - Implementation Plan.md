# SCC Corporation Sdn Bhd — MAIA Implementation Plan

## Phased Scope, Narrative & Gameplan

*Working draft v0.1 — 6 May 2026*

***

# Part A — The Narrative

## Who SCC Is

SCC Holdings Berhad is a publicly listed Malaysian investment holding company (Bursa Malaysia ACE Market, listed 2010), founded in 1972. The group operates through several subsidiaries across animal health product distribution, foodservice equipment sales and servicing, and food manufacturing.

This deployment covers **SCC Corporation Sdn Bhd only** — the principal operating subsidiary handling both the Animal Health Products Division (AHPD) and the Foodservice Equipment Division (FSED). The other four entities under the SCC Holdings group (SCC Holdings itself, Anitox (M), SCC Food Manufacturing, and S-Cnergy Cambodia) are excluded from Phase 1 scope and would be assessed separately if and when SCC wants to expand.

SCC Corporation runs on SAP Business One 10.0 — a single instance shared across all five entities, managed by an outsourced IT vendor with one on-site support person. SAP handles accounting, inventory (for machinery/equipment), invoicing, credit limits, and approval flows. An e-invoice module exists as an add-on. No SAP API integration has ever been undertaken.

That is the system. Here is the problem.

***

## Before MAIA — How SCC Corporation Operates Today

### Salespeople are data couriers, not relationship builders

A salesperson at SCC Corporation today spends a disproportionate amount of time relaying information between customers and the office — not selling. They cannot access SAP from the field. SAP is locally hosted with impractical VPN access and per-head licensing, so not all salespeople have accounts. Multiple users share a single login credential. Most salespeople — particularly those outstation or in the field — have never used SAP directly and are not trained on it.

When a customer inquiry comes in, the salesperson calls or WhatsApps sales support to check pricing, stock availability, credit status, or order history. Sales support looks it up in SAP and relays it back. The salesperson passes it to the customer. Every touchpoint is a phone call, a WhatsApp message, a wait.

The sales support executive — one person — carries the entire operational burden. Every system interaction routes through them. They are the single bottleneck for order entry, pricing lookups, credit checks, and document requests across the entire sales team. They are overloaded not because the work is complex, but because they are the only gateway between the sales team and the system.

### Pricing is a bottleneck, not a lookup

For equipment and spare parts that SCC carries as branded stock, pricing is relatively stable. But for items that must be sourced — imported equipment, spare parts for unfamiliar models, consumable ingredients subject to commodity swings — pricing requires manual calculation of the landed cost. The purchasing manager must factor in supplier price (which may change twice a year), forex rates, import duties, and freight. Freight alone varies: air for one unit is fast but expensive; consolidating a sea shipment across multiple orders is far cheaper. The landed cost is not a fixed number.

The deeper problem is sequencing: salespeople must quote a price before purchasing has committed to a buy. They quote based on estimates. When the actual landed cost exceeds the quoted price, SCC absorbs the margin loss. There is no centralised record of how a price was derived, no visibility into which quotes are at risk of margin erosion, and no way to flag when a quoted price no longer holds against current conditions.

Critically, the purchasing manager does not maintain a master price list for all items. Pricing is tracked in an Excel sheet, but only for items that have been specifically requested. Prices are set one-to-one, by request, and communicated directly to the salesperson — often without updating SAP. Quotations are valid for two weeks. Customer-specific pricing is dynamic and manually applied.

### Stock reservation is invisible

SCC's consumable business — corn seeds, popcorn supplies, smoothie mixes — operates on a model where experienced salespeople mentally reserve stock for their key accounts. A senior salesperson managing cinema chains knows that five or six accounts need approximately 800 packs of corn seeds per month. They mentally earmark that stock. This reservation exists nowhere in SAP. SAP has no reservation module for this.

When an ad hoc customer wants 100 packs, someone has to manually check: how much is actually available after accounting for the invisible reservations? The decision to release stock from one salesperson's mental allocation to serve another requires human judgment — but right now that judgment is based on someone remembering the numbers correctly.

SCC wants visibility of who is holding existing stock, which sales order, which salesman, which customer. They want the ability to negotiate reallocation when stock is constrained. They want reminders when stock has been held for an unreasonably long time.

### Spare parts are a knowledge problem

Technicians servicing equipment at customer sites often need to identify and source spare parts for machines across dozens of brands and hundreds of models. They work from photos, partial model numbers, and memory. When a spare part does not exist in SAP, they describe what they need, someone sources it, and a new SKU is created only after order confirmation — to avoid polluting the item master with codes for parts that never sell. Wrong specs, wrong voltage, wrong model compatibility — these errors are common because identification is manual and knowledge-dependent.

### Credit notes are a multi-step paper chase

Credit notes at SCC arise from several sources: early-payment discounts (3–5%), pricing corrections from quotation-invoice mismatches, wrong serial numbers, and post-delivery adjustments. Each requires a manual request from the salesperson to sales support, finance approval, and SAP processing. The volume creates administrative drag across sales support and finance.

A common scenario: the technical team issues a quotation manually outside SAP, the job is completed, and an invoice is raised at standard pricing because SAP has no record of the quoted price. Finance cancels the invoice, issues a credit note, re-issues at the correct amount. Each step requires approval. Each approval requires someone reachable.

### The technical division operates outside the system

Quotations from the technical/service side are not created in SAP. They are issued manually — often as physical or emailed documents. This disconnect between the quoted price and the invoiced price is a structural source of credit note volume. The technical division effectively operates in a parallel workflow invisible to the core system.

### Customer intelligence is scattered

When a salesperson learns that a customer is planning a promotion, expanding to a new location, or has a complaint — that information goes into a WhatsApp message, a mental note, or a personal notebook. There is no centralised customer activity log. When a salesperson is unavailable or leaves, the customer knowledge goes with them.

### Physical documents live outside the system

Historical documents are split between SAP (active transactions) and a network drive (NAS) for older scanned copies. Customers occasionally request copies of old invoices or delivery orders that require manual retrieval. Some delivery orders carry chopped signatures that are only stored as physical or scanned documents. SCC wants these digitised and searchable within MAIA.

***

## After MAIA — What Changes for SCC Corporation

MAIA does not replace SAP. SAP remains SCC Corporation's accounting engine, inventory ledger, and e-invoice submission system. What MAIA does is give every person in the business — salespeople in the field, technicians at customer sites, sales support in the office, finance approving transactions — a single operational layer that connects their work to SAP without requiring them to touch SAP directly.

### Salespeople become self-sufficient

A salesperson in the field opens MAIA on their phone. They check a customer's credit status, recent order history, outstanding payments, and available stock — instantly, without calling anyone. They create a quotation, submit it for approval, and when the customer confirms, the quotation converts to a sales order. The sales order flows into SAP. No phone call to the office. No waiting for sales support to key it in.

### Pricing becomes disciplined

For items with stable pricing, MAIA surfaces the current price from the synced item database. For items without a confirmed price — where the purchasing manager has not yet set a landed cost — MAIA stores a null price. When the salesperson attempts to create a quotation or order with these items, MAIA blocks progression: this item does not have a confirmed price, check with purchasing before proceeding.

MAIA notifies the purchasing manager that a price is needed for a specific item. The purchasing manager sets the price in MAIA. The price reflects back to the salesperson. Once set, the audit trail records who set it, when, and on what basis. Customer-specific and tiered pricing is applied automatically based on customer classification.

This does not automate the landed cost calculation. It enforces discipline: no document advances with an unvalidated price.

### Stock reservation becomes visible

MAIA introduces a stock reservation module that SAP does not have. Salespeople can reserve stock against their accounts — per salesperson, per item, per customer — with real-time balance visibility. Reservations are visible to the entire team. Available-to-sell quantity is computed after all reservations. When an ad hoc order comes in, the system shows actual available stock after reservations. The decision to release reserved stock to another customer is still a human decision — but now it is an informed decision, not a memory test.

### Sales support is liberated from data-entry relay

With salespeople able to check information and create documents directly in MAIA, the sales support executive is no longer the sole gateway. The volume of "can you check this" and "can you key this in" requests drops structurally. Sales support can redirect time toward coordination, exception handling, and work that actually requires human judgment.

### Credit notes become workflow, not paperwork

When a salesperson wants to issue a credit note — whether for an early-payment discount, a pricing correction, or a post-delivery adjustment — they create a draft credit note inside MAIA with full context: linked to the original invoice, reason code, amount. Finance reviews and approves within MAIA. The approved credit note pushes to SAP. No phone call. No hunting for context.

### Customer intelligence is centralised

Salespeople log meeting notes, customer preferences, follow-up tasks, and activity via voice notes or text through the chatbot. MAIA compiles these into a customer workspace. Any team member can retrieve a customer briefing before a visit. Customer knowledge becomes organisational, not personal.

### Daily digests replace report hunting

Every morning, each salesperson sees a personalised digest: high-impact quotations to close, orders needing attention, overdue payments to chase, stock alerts. Finance sees pending approvals and collection priorities. Warehouse sees today's picks and dispatch schedule. No one needs to go looking for what to do.

***

## What MAIA Honestly Cannot Do

**MAIA does not calculate landed costs.** The landed cost depends on supplier price, forex, import duties, freight strategy, and order consolidation — variables that require purchasing judgment. MAIA enforces the discipline that no document progresses without a validated price, and it records price history for reference. But the calculation itself stays with the purchasing manager.

**MAIA does not replace SAP approvals that must stay in SAP.** E-invoice submission approval, for example, remains SAP-side. Where an approval moves to MAIA, the SAP integration must bypass SAP's internal approval logic to prevent double work. Each approval step happens in exactly one system, never both.

**MAIA's intelligence is proportional to the data SCC provides.** Product matching, quotation drafting, exception surfacing — these work because the system is loaded with SCC's item master, pricing data, customer information, and business rules. If the data is incomplete or stale, the outputs are too.

***

# Part B — Structural Gaps & Design Decisions

## Gap 1 — SAP B1 Integration Gate

SCC runs SAP Business One 10.0 on a single instance across five entities, managed by an outsourced IT vendor. No prior API integration has been attempted. MAIA deployment for SCC Corporation requires API access to this shared SAP instance, filtered to SCC Corporation's data only.

The three-party vendor meeting (SCC, SAP vendor, Mindhive) is in progress. Outstanding confirmations:

* Service Layer vs DI API / middleware approach

* Sandbox / backup environment availability

* API endpoints per document type

* Approval behaviour — can MAIA-approved documents bypass SAP's internal approval?

* Service account credential setup

* SCC-side vendor cost for API enablement

**Effort:** Integration development included in MAIA deployment scope. SAP vendor enablement is SCC-side cost.

**Status: In progress.** Three-party meeting initiated. Timeline cannot be locked until confirmations received.

## Gap 2 — Single-Entity Filtering on Shared SAP Instance

SCC Corporation is one of five entities on the shared SAP instance. All master data, items, customers, and transactions coexist. MAIA must filter all READ and WRITE operations to SCC Corporation's company context only.

* Customer master: filter by company association

* Item master: filter by company (items may be shared across entities — confirm with SCC)

* Transactional documents: filter by company code on all API calls

* Inventory: filter by SCC Corporation warehouses only

**Decision needed:** Confirm whether items and customers are entity-specific or shared across entities in SAP. This determines whether filtering is by company code or by a broader visibility rule.

## Gap 3 — Stock Reservation Module (New MAIA Extension)

ERPNext has no native stock reservation module of the kind SCC needs. This is a custom build.

**What SCC needs:**

* Per-salesperson, per-item stock reservation with customer linkage

* Real-time balance: total stock minus all reservations = available-to-sell

* Visibility: who reserved, how much, for which customer, which SO (if linked)

* Release workflow: salesperson or manager can release/reallocate reserved stock

* Stale reservation alerts: notifications when stock is held beyond a configurable threshold

**What must be confirmed before build:**

* At what document stage does reservation happen? (SO creation? Earlier?)

* Who can create reservations? Only salespeople, or also sales support?

* Who can release or override? Salesperson who reserved, any manager, or specific roles?

* Is there a maximum hold duration? What triggers escalation?

* Does reservation reduce available-to-sell automatically, or is it advisory?

**Effort:** 5–8 mandays. Phase 1 — this is SCC's signature pain point and the primary adoption driver.

## Gap 4 — Pricing Workflow (Null-Price Enforcement + Notification)

Pricing at SCC is not a clean master data lookup — it is a dynamic, request-driven process managed by the purchasing manager via Excel.

**Phase 1 build:**

* SKUs without a confirmed price stored with null price

* MAIA blocks quotation/SO creation with null-price items

* Notification to purchasing manager: "Salesperson X needs price for item Y for customer Z"

* Purchasing manager sets price in MAIA (or updates via SAP sync)

* Price reflected back to salesperson

* Audit trail: who set, when, basis

* Tiered pricing auto-applied by customer classification

* Historical pricing recorded for landed cost reference

**What must be confirmed (follow-up with Karen, purchasing manager):**

* How is the Excel calculator/formula structured?

* Which items have tracked prices vs ad hoc pricing?

* Does the purchasing manager want to set prices in MAIA or in SAP?

* What is the typical turnaround time for pricing requests?

**Effort:** 3–5 mandays. Phase 1 — without pricing discipline, every quotation is a margin risk.

## Gap 5 — Customer and Item Creation Source of Truth

SCC's current process: new customers are created in SAP by finance, initiated by salespeople via a form. New SKUs are only created after order confirmation to avoid item master pollution.

**Phase 1 approach:**

* Customer master: SAP → MAIA (READ only). New customers created in SAP, synced to MAIA. MAIA does not write customers back.

* Item master: SAP → MAIA (READ only). New items created in SAP after order confirmation, synced to MAIA.

* Placeholder/custom SKU: MAIA supports a draft line item at quotation stage that references a description rather than a formal SAP item code. Proper SKU creation happens in SAP after confirmation; the item then syncs to MAIA and links to the existing document.

**Decision needed:** Confirm this approach with SCC. If SCC wants customer creation to originate in MAIA in future, that is Phase 2+ scope.

## Gap 6 — Approval Workflow Ownership

SAP currently handles approval flows for invoices, credit notes, credit limit overrides, and e-invoicing. Moving approvals to MAIA requires a document-by-document decision:

**Decision needed:** SCC must confirm this matrix. The SAP vendor must confirm whether SAP can accept MAIA-approved documents without triggering redundant internal approval (bypass mode).

## Gap 7 — Data Migration & Physical Document Digitisation

Three migration streams:

**Stream 1 — Master data (included in base MAIA):**

* Customer master, Item master, Pricing/Price lists

* One-time sync from SAP at go-live

**Stream 2 — Historical transactional data (separate scope):**

* SCC has requested assessment for migrating historical data from SAP

* Scope: orders, invoices, delivery notes, credit notes, payments

* Date range: to be confirmed (originally discussed as 5 years)

* Format: SAP export → transformation → MAIA import

* Cost depends on: volume, data quality, SAP vendor cooperation in extraction

* Classification: read-only archive vs fully queryable records — to be confirmed

**Stream 3 — Physical/NAS document digitisation (separate scope, pending samples):**

* Old invoices, delivery orders with chopped signatures, historical documents living outside SAP on a NAS/network drive

* SCC wants these searchable and retrievable within MAIA

* Scope cannot be sized until SCC provides sample documents to assess: volume, format, quality, OCR feasibility

* Classification: this is a document archive/search feature, not transactional migration

**Status:** SCC to provide sample data exports (Stream 2) and sample NAS documents (Stream 3). Pricing will be quoted separately per stream once scope is clear.

***

# Part C — Scope Classification (vs Signed Proposal)

The signed proposal is the commercial baseline: B2B sales chatbot/order assistant, finance SOA knock-off, outdoor sales meeting logger, backend dashboard/audit trail, basic ERP integration, role-based access, and optional maintenance quotation module.

The requirement gathering findings introduce scope that was not explicitly committed. Each finding must be classified:

***

# Part D — Phase 1 Scope

## Objective

Core MAIA for SCC Corporation + stock reservation module + pricing enforcement. Salespeople can self-serve from the field. Sales support load drops structurally. Pricing discipline is enforced. Stock visibility is real.

## Deployment

SCC Corporation Sdn Bhd only. Single MAIA instance, single SAP company filter.

## What's In

**New MAIA extensions (must-build):**

**Core MAIA document flow:**

**SAP B1 integration (READ):**

* Customer master, Item master, Inventory, Pricing, Credit data

* Filtered to SCC Corporation company context

* Sync: webhook preferred, cron poll 15–30 min fallback

**SAP B1 integration (WRITE):**

* SO, SI, DN, CN, Payment Entry push from MAIA → SAP

* Single SAP service account credential

* MAIA-approved documents bypass SAP internal approval where confirmed

**Quotation management:**

* Create, amend, submit for approval, convert to SO

* Full audit trail

* Placeholder line items for items not yet in SAP item master

* Null-price blocking with purchasing notification

**Sales Order management:**

* Full lifecycle: draft → submitted → in-progress → completed/cancelled

* Links to downstream DN, SI, PE, CN

* Stock reservation can be linked at SO stage

**Sales Invoice & Credit Note / Debit Note:**

* Invoice generation linked to SO

* Credit note draft by salespeople, finance approval in MAIA

* Push to SAP for accounting and e-invoice

**Payment Entry:**

* Payment recording with proof-of-payment upload

* Links to invoices for allocation

**Delivery Note:**

* Delivery tracking from confirmed SO

* Proof-of-delivery capture

**Pick List:**

* Warehouse pick list from confirmed orders

* EOD generation for next-day packing (SCC's current workflow)

* Regional grouping for delivery planning (Klang Valley grouping as starting point)

**Stock reservation module:**

* Per-salesperson, per-item, per-customer reservation

* Available-to-sell = total stock minus reservations

* Visibility: who holds what, for which customer/SO

* Release/reallocate workflow

* Stale reservation alerts

* Rules to be confirmed with SCC before build

**Pricing enforcement:**

* Null-price items block quotation/SO progression

* Notification to purchasing manager on price request

* Purchasing manager updates price → reflects to salesperson

* Audit trail on all price setting

* Tiered pricing auto-applied by customer classification

* Historical pricing recorded

**Salesman activity tracking:**

* Voice note or text via chatbot after customer meeting

* Captures: company visited, discussion topics, follow-ups

* Compiled into a structured sales activity report

* Report format: to be confirmed with Thomas

**Customer intelligence workspace:**

* Centralised customer profile with contacts, credit status, order history

* Activity log from salesman meeting reports

* Follow-up tasks

* Accessible via web and chatbot

**Daily digest:**

* Role-specific morning briefing

* Salespeople: quotations to close, overdue payments, stock alerts, upcoming follow-ups

* Finance: pending approvals, credit notes awaiting review, collection priorities

* Warehouse: today's picks and dispatch

**Credit standing visibility:**

* Credit data synced from SAP

* Company-level overdue grouping across departments (machine sales + technical/repair for same company)

* Pre-submission credit check on QT/SO creation

**Mobile + chatbot access:**

* Full MAIA functionality via mobile web and WhatsApp chatbot

* Designed for salespeople who have never used an ERP and operate from their phone

## What's Out (Phase 2+ After Adoption)

***

# Part E — Phase 2 Scope (After Adoption)

**Gate:** Phase 1 live for minimum 30 days with demonstrated adoption (daily MAIA transaction count monitoring).

**Phase 2 scope (confirm priority and commercial with SCC):**

* Technical division quotation-to-invoice flow (eliminates credit note mismatch source)

* Spare parts identification + equipment records database

* Maintenance/service quotation module (signed as optional — promote to committed if SCC confirms)

* Full approval workflow migration (invoice, CN, credit limit override moved to MAIA where SAP vendor confirms bypass)

* SOA generation

* Company-level exposure/finance dashboard

* Credit note semi-automation (early-payment discount templating)

* Role-specific dashboards

* Customer creation originating in MAIA (if justified)

***

# Part F — Phase 3 (Vertical Depth)

* Spare parts knowledge graph (cross-brand compatibility, model-to-part mapping)

* Purchasing visibility (landed cost history, margin risk flagging on quoted vs actual)

* Demand forecasting / reorder intelligence for consumables

* Multi-entity expansion (Anitox, SCC Food Manufacturing — if SCC wants)

* Management dashboards: margin analysis, salesperson performance, customer churn

***

# Part G — Pre-Phase 1 Gates

**Infrastructure (parallel):**

* Company phone number, Meta Business Account, WABA setup

* AWS provisioning

* OpenAI API key

* Internal project owner: confirm with SCC

***

# Part H — Commercial Structure

**Signed proposal** is the commercial baseline. Stock reservation module and data migration streams are scope deltas that require commercial treatment.

***

# Part I — Acceptance Framework (Phase 1)

***

# Part J — Open Questions

1. **SAP API readiness** — Service Layer or DI API? Endpoints available? Approval bypass possible? (Three-party meeting in progress)

2. **Entity filtering** — Are items and customers shared across entities or entity-specific in SAP? How does SCC Corporation filter its own data?

3. **Stock reservation rules** — At what stage? Who can reserve/release? Maximum hold duration? Auto-reduce available-to-sell or advisory?

4. **Pricing workflow with Karen** — How is the Excel calculator structured? Which items tracked vs ad hoc? Price set in MAIA or SAP? Turnaround time?

5. **Sales report template from Thomas** — What fields? What format? How compiled today?

6. **Role permission matrix** — Who can create/approve/view/cancel/amend each document type?

7. **Approval matrix** — Which SAP approvals move to MAIA? Can SAP accept bypassed documents?

8. **Customer overdue grouping** — Outstanding based on salesperson, department, or whole company? Confirm company-level grouping across machine + technical.

9. **New item/SKU procurement process** — What triggers new SKU creation in SAP? Who initiates? What information is required?

10. **Pick list workflow** — EOD generation confirmed. Regional grouping (Klang Valley) — any other groupings? Lorry assignment logic?

11. **Historical migration** — Date range? Volume estimate? Read-only archive or fully queryable?

12. **NAS documents** — Volume? Format (PDF, scanned images, mixed)? OCR quality? Metadata structure?

13. **SCC internal project owner** — Who is the day-to-day contact for requirements and UAT?

***

# Part K — Risk Register

***

# Part L — Immediate Next Actions (Ordered)

1. **Complete three-party SAP vendor meeting.** Get confirmations on: API method, endpoints, approval bypass, sandbox, service account, SCC-side cost. This is the critical path — nothing ships without it.

2. **Schedule stock reservation requirements session with SCC sales team.** Lock the business rules before building.

3. **Schedule pricing workflow session with Karen (purchasing manager).** Understand the Excel calculator, pricing request process, and where prices should be set.

4. **Get sales report template from Thomas.** Defines the salesman activity tracking output.

5. **Request role permission matrix from SCC.** Required for MAIA permission model design.

6. **Request sample data exports from SCC.** Customer list, item list, pricing, sample transactions.

7. **Request sample NAS documents from SCC.** Required to scope digitisation effort and quote.

8. **Draft approval matrix.** Send to SCC for confirmation — which approvals in MAIA vs SAP.

9. **Confirm historical migration scope.** Date range, volume, queryable vs archive.

10. **Issue separate quotes.** Once samples received: (a) historical data migration, (b) NAS document digitisation.

***

## Changelog


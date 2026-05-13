---
owner: JY
status: draft
last_reviewed: 2026-05-12
client: SCC
---

# MAIA Pre-Onboarding Requirements Questionnaire - SCC Corporation Sdn Bhd

*Pre-filled by Mindhive using SCC narrative notes, requirements gathering notes, and the 7 May 2026 implementation plan. Items marked "To confirm" still require SCC validation.*

***

**Client Name:** SCC Corporation Sdn Bhd
**Completed By:** Mindhive Product Team (pre-filled from known SCC notes; pending client validation)
**Date:** 2026-05-12
**Account Manager (Mindhive):** To confirm

***

## Section 1 - Business Structure

**1.1** How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

Known answer: SCC Holdings Berhad group has five entities referenced in the implementation plan:

| Entity | Phase 1 Scope |
|---|---|
| SCC Corporation Sdn Bhd | In scope |
| SCC Holdings Berhad | Out of Phase 1 |
| Anitox (M) | Out of Phase 1 |
| SCC Food Manufacturing | Out of Phase 1 |
| S-Cnergy Cambodia | Out of Phase 1 |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

Known answer: The group runs on a single shared SAP Business One 10.0 instance across all five entities.

**1.3** Do the entities share the same customer database and item database, or are they separate?

Known answer: To confirm. The implementation plan notes that all master data, items, customers, and transactions coexist in the shared SAP instance, but SCC must confirm whether customers and items are entity-specific or shared across entities.

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

Known answer: To confirm. Phase 1 is limited to SCC Corporation Sdn Bhd. SCC Corporation covers Animal Health Products Division and Foodservice Equipment Division.

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?

Known answer: To confirm. Notes mention forex as part of landed cost calculation for sourced/imported items, but do not confirm operating currencies.

***

## Section 2 - Team & Roles

**2.1** How many people in your company will use MAIA day-to-day? (Approximate is fine.)

Known answer: To confirm.

**2.2** What roles or departments will use the system, and roughly how many people per role?

Known roles/departments:

| Role / Department | Notes |
|---|---|
| Salespeople / outdoor sales | Need mobile access, customer information, quotation/order support, stock visibility, pricing requests, activity logging |
| Sales support | Current operational bottleneck for SAP lookups, order entry, pricing checks, credit checks, and document requests |
| Purchasing manager | Provides/validates dynamic pricing; Karen named as key pricing workflow contact |
| Finance | Handles approvals, credit notes, credit limits, SOA/knock-off, collections, reporting |
| Warehouse | Uses pick/pack lists and delivery planning information |
| Management / managers | Approval, visibility, reporting, stock reallocation decisions |
| Technicians / technical service | Field staff; technical quotation flow is mainly Phase 2+ unless confirmed otherwise |

Headcount per role: To confirm.

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?

Known answer: To confirm.

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?

Known answer: Yes. Outdoor salespeople and service technicians work in the field. Delivery/lorry planning is also referenced, but driver roles need confirmation.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not? (e.g., no mobile access, VPN too slow, system too complex, licensing cost)

Known answer: Most salespeople do not access SAP directly. SAP is locally hosted, VPN access is impractical, per-head licensing is a constraint, multiple users share one login, and many salespeople are not trained on SAP.

***

## Section 3 - Current Systems & ERP

**3.1** What is your main ERP / accounting system?

Known answer: SAP Business One 10.0.

**3.2** Have you ever done any integration project with your ERP before? (e.g., connecting it to another system, enabling API access, automated data sync) If yes, describe briefly.

Known answer: No SAP API integration has been undertaken before. A three-party SAP vendor meeting is in progress to confirm integration approach.

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features? (e.g., custom approval workflows, custom report templates, custom modules, special data fields) If yes, describe briefly.

Known answer: SAP currently handles approval flows for invoices, credit notes, credit limit overrides, and e-invoicing. An e-invoice module exists as an SAP add-on. Customization details still need confirmation with SCC/SAP vendor.

**3.4** Do multiple users share a single ERP login, or does each user have their own account?

Known answer: Multiple users share a single SAP login credential.

**3.5** Does your ERP have a test/UAT environment separate from the live system?

Known answer: To confirm. Sandbox/backup environment availability is an open item with the SAP vendor.

**3.6** What other systems or tools do you use alongside the ERP?

Known tools:

| Tool / Channel | Current Use |
|---|---|
| WhatsApp | Customer enquiries, internal coordination, salesperson updates, voice notes |
| Email | Customer and document communication |
| Phone calls | Sales-to-office lookups and coordination |
| Fax / pictures | Mentioned as current operational channels |
| Excel | Dynamic pricing calculator/history maintained by purchasing for requested items |
| NAS / network folders | Older scanned/physical documents, old invoices, signed/chopped delivery orders |
| SAP e-invoice add-on | E-invoice module exists in SAP |

**3.7** Which of these systems would you want MAIA to connect to?

Known answer: SAP Business One is required. WhatsApp/WABA setup is planned. Historical NAS/network document access or digitisation is requested for assessment as separate scope.

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?

Known answer: MAIA will not replace SAP. SAP remains the accounting engine, inventory ledger, and e-invoice submission system. MAIA is intended as the operational layer for sales, finance, warehouse, and field workflows.

***

## Section 4 - Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?

Known answer: To confirm.

**4.2** How often are new items added? (e.g., 5/month, rarely, constantly)

Known answer: New SKUs are created only after order confirmation, especially for spare parts or unfamiliar sourced items, to avoid polluting the SAP item master.

**4.3** Do you use product categories, brands, or groupings? If yes, describe briefly.

Known answer: SCC Corporation operates across Animal Health Products Division and Foodservice Equipment Division. Product types referenced include machinery/equipment, spare parts, consumables such as corn seeds, popcorn supplies, smoothie mixes, and animal health/feed-related products.

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.

Known answer: To confirm. SAP handles inventory for machinery/equipment, and MAIA must filter inventory to SCC Corporation warehouses only, but warehouse/location list is not yet documented.

**4.5** Which of the following apply to your products? (Check all that apply.)

* [ ] Expiry dates / shelf life - To confirm

* [ ] Batch numbers - To confirm

* [x] Serial numbers - Known issue: wrong serial numbers can trigger credit notes

* [ ] Multiple units of measure - To confirm

* [ ] Bundle / kit products - To confirm

* [x] Product variants - Known examples include model/voltage/spec compatibility for equipment and spare parts

* [x] Product images are important for identification or quotation documents - Spare part identification may rely on photos, partial model numbers, and field knowledge

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods? If yes, describe what types.

Known answer: To confirm. No processing/transformation workflow is confirmed in the narrative notes.

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed? If yes, how is this tracked today?

Known answer: Yes. Experienced salespeople mentally reserve stock for key accounts, especially consumables. This reservation is not visible in SAP and is currently tracked through memory/informal coordination rather than a system module.

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)

* [ ] One standard price list for all customers

* [x] Multiple price lists / tiers for different customer segments - Tiered pricing by customer classification is planned/expected

* [x] Customer-specific pricing (negotiated per customer)

* [ ] Blanket agreements / contract pricing with individual customers - To confirm

* [ ] Volume-based or quantity-based discounts - To confirm

* [ ] Discount-based tiers - To confirm

* [x] Price varies based on sourcing / import cost at time of order

* [x] Other: Pricing may be set one-to-one by purchasing request and may not be immediately updated in SAP

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?

Known answer: To confirm. Notes mention customer classification/tiered pricing but do not define number of tiers.

**4.10** Where is pricing data maintained today? (Check all that apply.)

* [x] Inside the ERP system

* [x] In a separate spreadsheet / Excel file

* [x] In the salesperson's memory / experience

* [x] Other: Direct confirmation from purchasing manager; Excel tracks only requested items and price history, not a complete master price list

**4.11** How frequently do your costs or selling prices change? (e.g., daily for commodities, monthly, annually, by contract period)

Known answer: Dynamic/ad hoc. Supplier prices may change around twice a year, while landed cost and quote price can vary based on forex, duties, freight method, consolidation timing, commodity swings, customer-specific negotiation, and request context. Quotations are typically valid for two weeks.

**4.12** Is there a person or role responsible for setting or updating prices? If yes, who?

Known answer: Purchasing manager, specifically Karen/Miss Karen in the notes, is the key person for pricing workflow clarification and price validation.

***

## Section 5 - Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)

* [x] WhatsApp (text, voice message, or image)

* [x] Email

* [x] Phone call

* [ ] Walk-in / counter - To confirm

* [ ] Customer portal / website - To confirm

* [ ] Marketplace (Shopee, Lazada, etc.) - To confirm

* [x] Purchase Order document (PDF, Excel, or other format) - To confirm format, but customer documents are referenced as part of sample transaction requests

* [x] Other: Fax and pictures are mentioned in requirements narrative

**5.2** Approximately how many sales orders are processed per day?

Known answer: Around 200 sales orders per month. Daily average to confirm based on working days.

**5.3** How many line items does a typical order contain? (e.g., 5-10 items, 20-50 items, 100+)

Known answer: To confirm.

**5.4** Who creates quotations? Who approves them?

Known answer: Salespeople create/request quotations; sales support or manager approval is required before pushing documents to SAP. Technical/service quotations are currently issued manually outside SAP and are a Phase 2+ concern unless SCC changes scope.

**5.5** Who creates or confirms sales orders? Is there an approval process?

Known answer: Today, sales support is a major gateway for SAP interactions and order entry. Target MAIA flow is salesperson creates quotation/order in MAIA, required approval happens in MAIA, then the document pushes to SAP. Exact approval matrix is still to confirm.

**5.6** Are there situations where a quotation or order needs special approval? (e.g., large order value, credit limit exceeded, special pricing, non-standard items, new customer)

Known answer: Yes. Known approval-sensitive areas include credit limit/overdue issues, special/dynamic pricing, null-price items, credit notes, invoices, and documents that need SAP posting. Exact thresholds and approvers are to confirm.

**5.7** Do you handle any of the following? (Check all that apply.)

* [ ] Customer returns / exchanges - To confirm

* [x] Credit notes

* [x] Debit notes - Included in Phase 1 document scope; confirm actual usage

* [ ] Advance payments or deposits before delivery - To confirm

* [ ] Partial deliveries - To confirm

* [ ] Back orders - To confirm

* [ ] Consignment stock at customer sites - To confirm

* [ ] Substitution of alternative items when requested item is out of stock - To confirm

**5.8** What are the most common reasons your team issues credit notes? (e.g., pricing error, wrong item delivered, early payment discount, quality rejection, wrong serial number)

Known answer: Early-payment discounts of 3-5%, pricing corrections from quotation-invoice mismatches, wrong serial numbers, and post-delivery adjustments.

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?

Known answer: Credit notes require finance approval and SAP processing. Phase 1 target is salesperson creates draft credit note in MAIA with reason/context, finance approves in MAIA, then approved credit note pushes to SAP.

***

## Section 6 - Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)

* [x] Own fleet / in-house drivers - Implied by lorry assignment planning; confirm exact setup

* [ ] Freelance / contract drivers - To confirm

* [ ] Third-party courier / logistics company - To confirm

* [ ] Customer self-pickup - To confirm

* [ ] Other: To confirm

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?

Known answer: Warehouse gets pick/pack information from SAP. End of day, the team generates a list of items to pack for the next day and plans what to pack, quantity, and lorry assignment. Grouping delivery orders by region was suggested, with Klang Valley as a starting point.

**6.3** Do drivers currently capture proof of delivery (signature, photo)?

Known answer: Signed/chopped delivery orders exist and some are stored as physical/scanned documents outside SAP. Current capture method is to confirm.

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?

Known answer: To confirm.

**6.5** Is the delivery order and invoice issued at the same time, or separately?

Known answer: To confirm.

***

## Section 7 - Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)

* [ ] Bank transfer - To confirm

* [ ] Cheque - To confirm

* [ ] Cash - To confirm

* [ ] Cash on delivery (COD) - To confirm

* [x] Credit terms (net 30, net 60, etc.) - Credit terms/limits are referenced; exact terms to confirm

* [ ] Online payment gateway - To confirm

* [ ] Other: To confirm

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms? (e.g., 7 days, 30 days, 60 days)

Known answer: Yes, credit terms and credit limits are referenced. Standard terms are to confirm.

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit? (e.g., order blocked, requires manager approval, warning only)

Known answer: Yes, credit limits exist and are managed in SAP. Credit limit approval is updated into SAP. Exact behavior when exceeded is to confirm.

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?

Known answer: Managed in SAP today. MAIA is expected to show credit standing and perform pre-submission credit checks.

**7.5** How do customers notify you when they've made a payment? (e.g., WhatsApp message to salesperson, email to finance, upload to portal)

Known answer: To confirm. MAIA Phase 1 includes payment recording with proof-of-payment upload.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how? (e.g., monthly PDF email, manual process)

Known answer: SOA handling/submission and extraction are referenced as finance workflow needs. Frequency and current method are to confirm.

**7.7** What is your e-invoicing status?

* [ ] Already compliant and automated (auto-sync to LHDN)

* [ ] Compliant but manual submission

* [x] In progress / SAP-side module exists - To confirm operational status

* [ ] Not started

* [ ] Not applicable

Known note: An e-invoice module exists as a SAP add-on. SAP remains the e-invoice submission system.

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices? (Is it a per-customer preference?)

Known answer: To confirm.

**7.9** Are there any tax exemption scenarios relevant to your business? (e.g., C1, C3, A57 certificates, LMW, export exemptions)

Known answer: To confirm.

***

## Section 8 - Documents & Reports

**8.1** What documents do you currently generate for customers? (Check all that apply.)

* [x] Quotation

* [ ] Proforma invoice - To confirm

* [x] Sales order confirmation

* [x] Invoice

* [x] Delivery order / delivery note

* [x] Pick list (internal)

* [x] Credit note

* [x] Debit note - Included in Phase 1 scope; confirm actual usage

* [x] Payment receipt - Payment entry/receipt included in Phase 1 scope; confirm current document

* [x] Statement of Account (SOA)

* [x] Other: Salesperson activity report / customer visit report, technical/service quotation documents

**8.2** Are your document templates generated by the ERP's built-in report engine (e.g., Crystal Reports for SAP B1)? If yes, which documents?

Known answer: To confirm. Pick/pack information currently comes from SAP, while technical/service quotations are issued manually outside SAP.

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require? (e.g., PO reference, project number, company registration, specific logo placement)

Known answer: To confirm with sample documents. SCC has been asked to share quotations, sales orders, invoices, delivery orders, credit notes, customer POs, pick lists, price sheets, service forms, and SAP screens.

**8.4** What reports do you look at regularly? (e.g., daily sales summary, outstanding AR aging, stock movement, salesperson performance)

Known reports/visibility needs:

| Report / View | Notes |
|---|---|
| Daily sales reporting | Requested for finance/management visibility |
| Salesperson activity report | Voice/text meeting updates compiled into structured report; Thomas to confirm format |
| Outstanding/overdue exposure | Should likely group at whole-company level across departments; final rule to confirm |
| Stock reservation visibility | Who holds stock, quantity, item, customer, salesperson, linked SO |
| Pick/pack and dispatch planning | EOD next-day packing list and regional grouping |
| Pending approvals | Finance/manager approvals, credit notes, credit/overdue exceptions |

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?

Known answer: Pricing is maintained/tracked in Excel for requested items and price history. Other manual Excel reports are to confirm.

***

## Section 9 - Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?

Known answer: To confirm. Pre-Phase 1 gates include company phone number, Meta Business Account, and WABA setup.

**9.2** Would you want MAIA to communicate with your customers via WhatsApp? (e.g., order confirmations, delivery updates, payment reminders)

Known answer: Yes, customer communication through WhatsApp is part of the MAIA chatbot/order assistant direction. Exact customer-facing message types to confirm.

**9.3** Would you want MAIA to help your internal team via WhatsApp? (e.g., sales staff creating orders through chat, drivers receiving trip details, payment proof forwarding)

Known answer: Yes. Internal WhatsApp/chatbot use cases include salespeople checking customer/stock/credit data, creating quotations/orders, logging customer meetings by voice note or text, finance receiving reports/alerts, and payment proof forwarding/recording.

**9.4** What primary languages does your team use in daily operations? (e.g., English, Malay, Chinese - specify Mandarin/Cantonese if relevant)

Known answer: To confirm.

**9.5** What primary languages do your customers communicate in?

Known answer: To confirm.

***

## Section 10 - Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve? (In your own words - be as specific as possible.)

1. Reduce manual coordination and repetitive work between salespeople, sales support, finance, warehouse, and management.

2. Make stock reservation visible: who is holding stock, for which customer/order, and whether stock can be released or reallocated.

3. Control dynamic pricing and quotation risk by ensuring items with unconfirmed prices cannot proceed without purchasing validation.

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?

Known answer: Salespeople repeatedly ask sales support to check pricing, stock, credit status, order history, and documents in SAP. Sales support is the bottleneck because many field users cannot access SAP directly.

**10.3** Is there anything that currently "falls through the cracks" - orders missed, documents lost, follow-ups forgotten?

Known answer: Customer intelligence and follow-ups are scattered across WhatsApp, voice notes, personal memory, and notebooks. Historical invoices and signed/chopped delivery orders may live outside SAP in folders/NAS, making retrieval manual.

**10.4** If MAIA could only do one thing for your business, what would it be?

Known answer: The implementation plan positions Phase 1 around making salespeople self-sufficient while reducing the sales support bottleneck, with stock reservation and pricing discipline as the primary adoption drivers.

**10.5** Is there anything your team currently does outside the ERP system (in WhatsApp, spreadsheets, paper, or memory) that you believe should be in a system? Describe briefly.

Known answer:

| Outside ERP Today | Desired MAIA Handling |
|---|---|
| Dynamic pricing Excel and direct purchasing confirmations | Pricing request, validation, audit trail, history |
| Mental stock reservation by experienced salespeople | Visible reservation module with owner/customer/SO linkage |
| Sales visit voice notes and informal updates | Structured activity log and customer intelligence workspace |
| Technical/service manual quotations | Phase 2+ technical quotation-to-invoice flow |
| NAS/physical old invoices and signed/chopped DOs | Separate scope for searchable archive/digitisation |

***

## Section 11 - Data Readiness

**11.1** Can you provide the following in Excel or CSV format? (Check all you can provide.)

* [ ] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit) - Requested from SCC

* [ ] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive status) - Requested from SCC

* [ ] Price list(s) - standard and/or customer-specific - Requested from SCC

* [ ] Current stock balances (item, warehouse, quantity) - Requested from SCC

* [ ] Supplier list (if relevant for purchasing) - To confirm

Known answer: SCC has been asked to provide sample data exports. Availability is pending.

**11.2** For each item checked above, who in your team will prepare this data?

Known answer: To confirm.

**11.3** Please provide 3-5 sample transaction documents. These help us understand your document formats, field requirements, and workflow. (e.g., a recent quotation, sales order, invoice, delivery order, credit note, customer PO, pick list)

Known answer: Requested samples include quotation, sales order, invoice, delivery order, credit note, customer PO, pick list, price sheets, service forms, and SAP screens. SCC also needs to provide NAS/historical document samples for digitisation scoping.

**11.4** Do you want historical transaction data (old orders, invoices, etc.) available inside MAIA, or are you comfortable starting fresh with forward-only data?

* [ ] Forward-only (new transactions from go-live onwards) - standard

* [x] Want historical data migrated - Approximate date range: To confirm; originally discussed as 5 years

* [ ] Unsure - to discuss

Known answer: SCC requested assessment for historical SAP transaction migration and NAS/physical document digitisation/search. These are separate scope items pending sample exports, sample documents, volume, format, and date range confirmation.

***

## Section 12 - Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline? (e.g., tied to a contract, season, audit, or event)

Known answer: Initial note says "maybe 2 months" to go live. Timeline cannot be locked until SAP API readiness, sandbox, approval bypass, service account, and vendor enablement are confirmed.

**12.2** Who from your team will be the internal project owner - the day-to-day contact during onboarding? (Ideally someone operational who understands the daily workflow, not only a department head.)

Known answer: To confirm. SCC internal project owner is listed as a pre-Phase 1 gate.

**12.3** Who will be the decision-maker if we need approvals during setup? (e.g., on workflows, permissions, integrations, scope decisions)

Known answer: To confirm.

**12.4** Are there any upcoming events that might affect your availability during onboarding? (e.g., holidays, audits, travel, peak season)

Known answer: To confirm.

***

## What Happens Next

Once SCC validates this questionnaire and provides sample data items, Mindhive will:

1. Review responses and prepare a focused agenda for the next deep-dive meeting.

2. Complete SAP vendor scoping for API method, endpoints, approval behavior, sandbox, service account, and SCC-side vendor cost.

3. Schedule follow-up sessions for stock reservation rules, pricing workflow with Karen, sales report template with Thomas, role permission matrix, and approval matrix.

4. Scope historical data migration and NAS/physical document digitisation after receiving sample exports and sample documents.

***

## See Also

- [[7May26 - Implementation Plan]]
- [[07_Apr_2026_SCC_client_narrative]]
- [[10_Apr_2026_SCC_client_narrative]]
- [[06_Apr_2026_SCC_Requirements_Gathering_Meeting_Notes]]
- [[SCC - Consolidated Follow-up Questionnaire - 2026-05-07]]

***

*MAIA by Mindhive - Client Onboarding Questionnaire v2.0*

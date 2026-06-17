_To be completed by client before the first deep-dive meeting_

---

**Client Name:** SJY Sports Asia **Completed By:** TO BE ANSWERED (Name / Role) **Date:** TO BE ANSWERED **Account Manager (Mindhive):** TO BE ANSWERED

---

## How to Use This Document

This questionnaire collects factual information about your business so we can prepare for a focused and productive first meeting. The meeting itself will focus on _how_ your workflows actually run and _where_ they break — not on collecting this baseline data.

**Guidelines:**

- Answer as completely as you can. Partial answers are fine — write "unsure" or "to discuss" for anything unclear, rather than leaving it blank.
    
- For tables, add or remove rows as needed.
    
- If a question doesn't apply to your business, write "N/A."
    
- Please return this document within **5 business days** of receipt. Your meeting will be scheduled once this is received.
    

---

## Section 1 — Business Structure

_We need to understand the full picture of your business entities before the meeting — even if only one entity is in scope for Phase 1. Multi-entity structures affect system configuration, data filtering, and integration design._

**1.1** How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

|   |   |   |
|---|---|---|
|Entity / Company Name|Business Type (e.g., trading, manufacturing, distribution, services)|In Scope for MAIA? (Yes / No / Later)|
|SJY Sports Asia|Distributor of Franklin pickleball products, including paddles, equipment, accessories, and apparel, to B2B customers such as pickleball courts and retail stores|Yes - Phase 1 B2B order-to-document workflow|
||||

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

**Answer:** SQL Accounting is used for accounting/document generation and SiteGiant is the master inventory system

**1.3** Do the entities share the same customer database and item database, or are they separate?

**Answer:** YES

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

|   |   |   |
|---|---|---|
|Location Name|Type (office / warehouse / both)|Entity It Belongs To|
||||
||||

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?

**Answer:** TO BE ANSWERED.

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day? (Approximate is fine.)

**Answer:** TO BE ANSWERED.

**2.2** What roles or departments will use the system, and roughly how many people per role?

|   |   |   |
|---|---|---|
|Role / Department|Number of People|Key Responsibilities|
||||
||||
||||
||||


**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?

**Answer:** TO BE ANSWERED.

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?

**Answer:** TO BE ANSWERED.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not? (e.g., no mobile access, VPN too slow, system too complex, licensing cost)

**Answer:** TO BE ANSWERED.

---

## Section 3 — Current Systems & ERP

_This section is critical for integration planning. Please be as specific as possible — it directly affects cost and timeline._

**3.1** What is your main ERP / accounting system?

|   |   |
|---|---|
||Your Answer|
|System name|SQL Accounting|
|Version number|TO BE ANSWERED|
|Hosting|TO BE ANSWERED|
|Managed by|TO BE ANSWERED|
|Vendor company name|TO BE ANSWERED|
|Vendor contact person|TO BE ANSWERED|

**3.2** Have you ever done any integration project with your ERP before? (e.g., connecting it to another system, enabling API access, automated data sync) If yes, describe briefly.

**Answer:** TO BE ANSWERED.

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features? (e.g., custom approval workflows, custom report templates, custom modules, special data fields) If yes, describe briefly.

**Answer:** TO BE ANSWERED.

**3.4** Do multiple users share a single ERP login, or does each user have their own account?

**Answer:** TO BE ANSWERED.

**3.5** Does your ERP have a test/UAT environment separate from the live system?

**Answer:** TO BE ANSWERED.

**3.6** What other systems or tools do you use alongside the ERP?

|   |   |   |
|---|---|---|
|Function|Current Tool|Managed By (internal / vendor)|
|Inventory / stock management|SiteGiant is the master inventory system for the wider business; relevant inventory information is also maintained in SQL Accounting for Phase 1 B2B order processing|TO BE ANSWERED. Proposal states SJY Sports Asia is responsible for maintaining/updating relevant SQL Accounting inventory information|
|Customer records (CRM)||TO BE ANSWERED|
|Delivery / logistics tracking||TO BE ANSWERED|
|Purchasing / supplier orders||TO BE ANSWERED|
|Communication with customers||TO BE ANSWERED|
|Internal team communication||TO BE ANSWERED|
|Document storage / filing||TO BE ANSWERED|
|Reporting / dashboards||TO BE ANSWERED|
|Other: B2C marketplaces||TO BE ANSWERED|

**3.7** Which of these systems would you want MAIA to connect to?

**Answer:** WhatsApp-based internal B2B order workflow and SQL Accounting for the agreed Phase 1 document/inventory reference flow, subject to technical confirmation. Direct SiteGiant integration and B2C marketplace integrations are excluded from Phase 1.

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?

**Answer:** No replacement is proposed. MAIA is not positioned as a replacement for SQL Accounting or SiteGiant; SiteGiant remains the master inventory system.

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?

**Answer:** TO BE ANSWERED.

**4.2** How often are new items added? (e.g., 5/month, rarely, constantly)

**Answer:** TO BE ANSWERED.

**4.3** Do you use product categories, brands, or groupings? If yes, describe briefly.

**Answer:** TO BE ANSWERED.

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.

**Answer:** TO BE ANSWERED. 

**4.5** Which of the following apply to your products? (Check all that apply.)

- [ ] Expiry dates / shelf life
    
- [ ] Batch numbers
    
- [ ] Serial numbers
    
- [ ] Multiple units of measure (e.g., sold in pieces but stocked in cartons, or sold by weight but received by piece)
    
- [ ] Bundle / kit products (one SKU = multiple items)
    
- [ ] Product variants (e.g., size, colour, material, voltage, model)
    
- [ ] Product images are important for identification or quotation documents
    

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods? If yes, describe what types. (e.g., fish filleting, bulk repackaging into smaller units, assembly)

**Answer:** TO BE ANSWERED.

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed? If yes, how is this tracked today?

**Answer:** TO BE ANSWERED.

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)

- [ ] One standard price list for all customers
    
- [ ] Multiple price lists / tiers for different customer segments
    
- [x] Customer-specific pricing (negotiated per customer)
    
- [ ] Blanket agreements / contract pricing with individual customers
    
- [ ] Volume-based or quantity-based discounts
    
- [ ] Discount-based tiers (e.g., Tier 1 = 20% off, Tier 2 = 15% off)
    
- [ ] Price varies based on sourcing / import cost at time of order
    
- [ ] Other: _______________
    
**Answer:** TO BE ANSWERED.

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?

**Answer:** TO BE ANSWERED.

**4.10** Where is pricing data maintained today? (Check all that apply.)

- [ ] Inside the ERP system
    
- [ ] In a separate spreadsheet / Excel file
    
- [ ] In the salesperson's memory / experience
    
- [ ] Other: _______________
    
**Answer:** TO BE ANSWERED.

**4.11** How frequently do your costs or selling prices change? (e.g., daily for commodities, monthly, annually, by contract period)

**Answer:** TO BE ANSWERED.

**4.12** Is there a person or role responsible for setting or updating prices? If yes, who?

**Answer:** TO BE ANSWERED.

---

## Section 5 — Sales & Order Workflow

_In this section, we are collecting facts about your process — not a detailed walkthrough. The walkthrough happens in the meeting._

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)

- [x] WhatsApp (text, voice message, or image)
    
- [ ] Email
    
- [ ] Phone call
    
- [ ] Walk-in / counter
    
- [ ] Customer portal / website
    
- [x] Marketplace (Shopee, Lazada, etc.)
    
- [ ] Purchase Order document (PDF, Excel, or other format)
    
- [ ] Other: _______________
    
**Answer:** B2B orders are primarily received through WhatsApp. B2C sales channels mentioned in the proposal are Shopee, Lazada, and TikTok, but B2C marketplace integration is outside Phase 1 scope.

**5.2** Approximately how many sales orders are processed per day?

**Answer:** Approximately 200 B2B orders per month. Daily order count is TO BE ANSWERED.

**5.3** How many line items does a typical order contain? (e.g., 5–10 items, 20–50 items, 100+)

**Answer:** TO BE ANSWERED.

**5.4** Who creates quotations? Who approves them?

**Answer:** TO BE ANSWERED.

**5.5** Who creates or confirms sales orders? Is there an approval process?

**Answer:** Customers send confirmed B2B orders primarily through WhatsApp. Staff currently interpret the order, identify customer/product details, and manually prepare documents through SQL Accounting. 

**5.6** Are there situations where a quotation or order needs special approval? (e.g., large order value, credit limit exceeded, special pricing, non-standard items, new customer)

**Answer:** TO BE ANSWERED. 

**5.7** Do you handle any of the following? (Check all that apply.)

- [ ] Customer returns / exchanges
    
- [ ] Credit notes
    
- [ ] Debit notes
    
- [ ] Advance payments or deposits before delivery
    
- [ ] Partial deliveries (order split across multiple shipments)
    
- [ ] Back orders (items ordered but not currently in stock)
    
- [ ] Consignment stock at customer sites
    
- [ ] Substitution of alternative items when requested item is out of stock
    
**Answer:** TO BE ANSWERED. 

**5.8** What are the most common reasons your team issues credit notes? (e.g., pricing error, wrong item delivered, early payment discount, quality rejection, wrong serial number)

**Answer:** TO BE ANSWERED.

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?

**Answer:** TO BE ANSWERED.

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)

- [ ] Own fleet / in-house drivers
    
- [ ] Freelance / contract drivers
    
- [x] Third-party courier / logistics company
    
- [ ] Customer self-pickup
    
- [x] Other: Lalamove, local freight, interstate freight to Sabah/Sarawak, and international freight are mentioned
    

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?

**Answer:** TO BE ANSWERED. 

**6.3** Do drivers currently capture proof of delivery (signature, photo)?

**Answer:** TO BE ANSWERED.

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?

**Answer:** TO BE ANSWERED.

**6.5** Is the delivery order and invoice issued at the same time, or separately?

**Answer:** TO BE ANSWERED.

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)

- [ ] Bank transfer
    
- [ ] Cheque
    
- [ ] Cash
    
- [ ] Cash on delivery (COD)
    
- [ ] Credit terms (net 30, net 60, etc.)
    
- [ ] Online payment gateway
    
- [ ] Other: _______________
    
**Answer:** TO BE ANSWERED.

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms? (e.g., 7 days, 30 days, 60 days)

**Answer:** TO BE ANSWERED.

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit? (e.g., order blocked, requires manager approval, warning only)

**Answer:** TO BE ANSWERED.

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?

**Answer:** TO BE ANSWERED.

**7.5** How do customers notify you when they've made a payment? (e.g., WhatsApp message to salesperson, email to finance, upload to portal)

**Answer:** TO BE ANSWERED.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how? (e.g., monthly PDF email, manual process)

**Answer:** TO BE ANSWERED.

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated (auto-sync to LHDN)
    
- [ ] Compliant but manual submission
    
- [ ] In progress
    
- [ ] Not started
    
- [ ] Not applicable
    
**Answer:** TO BE ANSWERED.

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices? (Is it a per-customer preference?)

**Answer:** TO BE ANSWERED.

**7.9** Are there any tax exemption scenarios relevant to your business? (e.g., C1, C3, A57 certificates, LMW, export exemptions)

**Answer:** TO BE ANSWERED.

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers? (Check all that apply.)

- [ ] Quotation
    
- [ ] Proforma invoice
    
- [ ] Sales order confirmation
    
- [x] Invoice
    
- [x] Delivery order / delivery note
    
- [ ] Pick list (internal)
    
- [ ] Credit note
    
- [ ] Debit note
    
- [ ] Payment receipt
    
- [ ] Statement of Account (SOA)
    
- [ ] Other: _______________
    
**Answer:** TO BE ANSWERED.

**8.2** Are your document templates generated by the ERP's built-in report engine (e.g., Crystal Reports for SAP B1)? If yes, which documents?

**Answer:** TO BE ANSWERED. 

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require? (e.g., PO reference, project number, company registration, specific logo placement) Write "to discuss" if easier to show in the meeting.

**Answer:** TO BE ANSWERED. Invoice and Delivery Order formats are to be confirmed during implementation.

**8.4** What reports do you look at regularly? (e.g., daily sales summary, outstanding AR aging, stock movement, salesperson performance)

**Answer:** TO BE ANSWERED. The proposal identifies a need for backend visibility over B2B order progress/status, document trail, and activity trail.

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?

**Answer:** TO BE ANSWERED.

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?

**Answer:** TO BE ANSWERED. 

**9.2** Would you want MAIA to communicate with your customers via WhatsApp? (e.g., order confirmations, delivery updates, payment reminders)

**Answer:** Phase 1 focuses on an internal WhatsApp-based workflow where staff forward confirmed customer orders into MAIA; direct outbound customer communication is not confirmed.

**9.3** Would you want MAIA to help your internal team via WhatsApp? (e.g., sales staff creating orders through chat, drivers receiving trip details, payment proof forwarding)

**Answer:** Yes, for authorised internal staff. Phase 1 includes an internal-facing WhatsApp workflow for forwarding confirmed B2B orders into MAIA for structured review and document preparation.

**9.4** What primary languages does your team use in daily operations? (e.g., English, Malay, Chinese — specify Mandarin/Cantonese if relevant)

**Answer:** TO BE ANSWERED.

**9.5** What primary languages do your customers communicate in?

**Answer:** TO BE ANSWERED.

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve? (In your own words — be as specific as possible.)

**Answer:**

1. Reduce manual processing of confirmed WhatsApp B2B orders.
2. Reduce dependency on one staff member for B2B document generation.
3. Improve visibility and traceability of order details, invoices, Delivery Orders, fulfilment status, document trail, and activity history.

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?

**Answer:** Manual interpretation of WhatsApp orders, identifying customers/products/quantities, and preparing invoices and Delivery Orders through SQL Accounting.

**10.3** Is there anything that currently "falls through the cracks" — orders missed, documents lost, follow-ups forgotten?

**Answer:** The proposal highlights risk of operational delay, document error, manual tracing of documents/activities, limited visibility over pending/completed orders, and delays in warehouse/delivery coordination.

**10.4** If MAIA could only do one thing for your business, what would it be?

**Answer:** Make confirmed WhatsApp B2B orders faster and more structured to process into invoices and Delivery Orders.

**10.5** Is there anything your team currently does outside the ERP system (in WhatsApp, spreadsheets, paper, or memory) that you believe should be in a system? Describe briefly.

**Answer:** Confirmed B2B orders are received primarily through WhatsApp and currently require manual interpretation, customer/item identification, document preparation, and manual tracing of documents and activities. MAIA is proposed to structure this workflow and maintain the order/document trail.

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format? (Check all you can provide.)

- [x] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit)
    
- [x] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive status)
    
- [x] Price list(s) — standard and/or customer-specific
    
- [x] Current stock balances (item, warehouse, quantity)
    
- [ ] Supplier list (if relevant for purchasing)
    

**11.2** For each item checked above, who in your team will prepare this data?

|   |   |   |
|---|---|---|
|Data Item|Person Responsible|Estimated Ready By|
|Customer master data|TO BE ANSWERED|TO BE ANSWERED|
|Item/product master data|TO BE ANSWERED|TO BE ANSWERED|
|Pricing reference information|TO BE ANSWERED|TO BE ANSWERED|
|SQL Accounting inventory reference/current stock information|TO BE ANSWERED|TO BE ANSWERED|

**11.3** Please provide 3–5 sample transaction documents. These help us understand your document formats, field requirements, and workflow. (e.g., a recent quotation, sales order, invoice, delivery order, credit note, customer PO, pick list)

**Answer:** TO PROVIDE

**11.4** Do you want historical transaction data (old orders, invoices, etc.) available inside MAIA, or are you comfortable starting fresh with forward-only data?

- [ ] Forward-only (new transactions from go-live onwards) — _standard_
    
- [ ] Want historical data migrated — Approximate date range: _______________
    
- [ ] Unsure — to discuss
    
**Answer:** TO BE ANSWERED.

_Note: Historical data migration is a separate scope item. We will assess feasibility and cost based on the volume and quality of your data._

---

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline? (e.g., tied to a contract, season, audit, or event)

**Answer:** End of this month, June

**12.2** Who from your team will be the **internal project owner** — the day-to-day contact during onboarding? (Ideally someone operational who understands the daily workflow, not only a department head.)

|   |   |   |
|---|---|---|
|Name|Role|Contact (phone/email)|
|TO BE ANSWERED|Internal project owner / day-to-day onboarding contact|TO BE ANSWERED|

**12.3** Who will be the **decision-maker** if we need approvals during setup? (e.g., on workflows, permissions, integrations, scope decisions)

|   |   |   |
|---|---|---|
|Name|Role|Contact (phone/email)|
|TO BE ANSWERED|Decision-maker for workflow, permission, integration, and scope approvals|TO BE ANSWERED|

**12.4** Are there any upcoming events that might affect your availability during onboarding? (e.g., holidays, audits, travel, peak season)

**Answer:** TO BE ANSWERED.

---

## What Happens Next

Once you return this questionnaire and the sample data items, we will:

1. Review your responses and prepare a focused agenda for the deep-dive meeting
    
2. Schedule **Meeting 1** (business workflow deep-dive) at your office — 1.5 to 2.5 hours
    
3. If integration with your ERP or third-party systems is needed, schedule **Meeting 2** (IT/integration scoping) — this can be remote and may include your IT vendor
    
**Questions about any item?** Reply to this message — we're happy to clarify.

---

_MAIA by Mindhive — Client Onboarding Questionnaire v2.0_

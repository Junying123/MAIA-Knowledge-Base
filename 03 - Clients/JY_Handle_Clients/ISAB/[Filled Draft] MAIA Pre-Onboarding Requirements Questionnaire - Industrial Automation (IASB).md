_Pre-filled by Mindhive using the Industrial Automation (IASB) customer narrative and limited public company context from https://iasb.com.my. Questions not clearly answered are marked `TO BE ANSWERED`._

---

**Client Name:** Industrial Automation (M) Sdn Bhd / IASB  
**Completed By:** Mindhive (pre-filled draft for client review)  
**Date:** 2026-06-19  
**Account Manager (Mindhive):** TO BE ANSWERED

---

## How to Use This Document

This draft only fills in information that is explicitly stated in the customer narrative or visible on the client's public website. IASB should review, correct, and complete all items marked `TO BE ANSWERED`.

Key Phase 1 boundary: IASB is proceeding with Option 1. MAIA will not directly integrate with Navision in Phase 1. MAIA will rely on exported Navision data, with final Navision updates remaining the client's responsibility unless separately scoped.

---

## Section 1 - Business Structure

**1.1** How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

| Entity / Company Name | Business Type | In Scope for MAIA? |
|---|---|---|
| Industrial Automation (M) Sdn Bhd / IASB | B2B industrial automation / electrical and electronics distribution | Yes |
| VITAR Group of Companies | Group context; IASB is described publicly as the distribution arm of VITAR Group | TO BE ANSWERED |
| Other related entities | TO BE ANSWERED | TO BE ANSWERED |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?  
IASB currently uses Navision. Whether all related entities share the same Navision instance is `TO BE ANSWERED`.

**1.3** Do the entities share the same customer database and item database, or are they separate?  
Phase 1 customer, item, pricing, stock, credit, and overdue checks will rely on exported Navision data. Whether databases are shared across entities is `TO BE ANSWERED`.

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

Public website context states IASB has 12 sales offices nationwide and lists these locations. Exact in-scope branches, warehouses, and office/warehouse roles are `TO BE ANSWERED`.

| Location Name | Type | Entity It Belongs To |
|---|---|---|
| Klang, Selangor / Wisma VITAR | HQ / sales office, exact operation type TO BE ANSWERED | IASB |
| Butterworth, Penang | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Ipoh, Perak | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Batu Pahat, Johor | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Johor Bahru, Johor | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Melaka | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Sungai Petani, Kedah | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Kuantan, Pahang | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Kuching, Sarawak | Branch / sales office, exact operation type TO BE ANSWERED | IASB |
| Other sales offices / warehouses | TO BE ANSWERED | TO BE ANSWERED |

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?  
TO BE ANSWERED.

---

## Section 2 - Team & Roles

**2.1** How many people in your company will use MAIA day-to-day?  
Public website context states IASB has a dedicated team of 100 staff. Exact MAIA day-to-day user count is `TO BE ANSWERED`.

**2.2** What roles or departments will use the system, and roughly how many people per role?

| Role / Department | Number of People | Key Responsibilities |
|---|---|---|
| Salespeople / sales team | TO BE ANSWERED | Receive customer inquiries/orders via WhatsApp, identify customer/item needs, review MAIA drafts, manage follow-ups |
| Sales operations / order processing | TO BE ANSWERED | Prepare or confirm quotations, Sales Orders, invoices, and document flow |
| Finance / credit control | TO BE ANSWERED | Credit limit and overdue payment checks; approval for credit exceptions |
| Warehouse / fulfilment | TO BE ANSWERED | Pick and pack, fulfilment status, delivery document support |
| Delivery team | TO BE ANSWERED | Delivery handling and POD attachment where required |
| Management / approvers | TO BE ANSWERED | Approval rules for discounts, price exceptions, credit exceptions, and customer creation/profile changes |
| IT | Subra confirmed as IT Manager / primary PIC | Navision exports, data file format/frequency, technical coordination |

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?  
TO BE ANSWERED.

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?  
Yes. Sales activity tracking is in scope and includes salesperson location, documents, and photos for record keeping. Delivery team involvement is also mentioned. Exact field roles are `TO BE ANSWERED`.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not?  
TO BE ANSWERED.

---

## Section 3 - Current Systems & ERP

**3.1** What is your main ERP / accounting system?

| | Your Answer |
|---|---|
| System name | Navision |
| Version number | TO BE ANSWERED |
| Hosting | TO BE ANSWERED |
| Managed by | TO BE ANSWERED; Subra, IT Manager, is confirmed as primary PIC |
| Vendor company name | TO BE ANSWERED |
| Vendor contact person | TO BE ANSWERED |

Additional context: Microsoft Dynamics is a possible future ERP, but it is not part of Phase 1.

**3.2** Have you ever done any integration project with your ERP before?  
TO BE ANSWERED. Phase 1 is confirmed as no direct Navision integration.

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features?  
TO BE ANSWERED. The signed MAIA scope includes MAIA approval flow customisation and sales activity tracking customisation, but Navision customisations were not confirmed.

**3.4** Do multiple users share a single ERP login, or does each user have their own account?  
TO BE ANSWERED.

**3.5** Does your ERP have a test/UAT environment separate from the live system?  
TO BE ANSWERED.

**3.6** What other systems or tools do you use alongside the ERP?

| Function | Current Tool | Managed By |
|---|---|---|
| Inventory / stock management | Navision / exported Navision data if provided | TO BE ANSWERED |
| Customer records (CRM) | Navision customer list export for Phase 1 matching | TO BE ANSWERED |
| Delivery / logistics tracking | Manual / current process TO BE ANSWERED; MAIA Phase 1 supports document/status visibility only | TO BE ANSWERED |
| Purchasing / supplier orders | TO BE ANSWERED | TO BE ANSWERED |
| Communication with customers | WhatsApp | Internal |
| Internal team communication | WhatsApp / manual coordination | Internal |
| Document storage / filing | TO BE ANSWERED | TO BE ANSWERED |
| Reporting / dashboards | Manual / Excel tracking mentioned for sales activity and follow-up; exact reports TO BE ANSWERED | Internal |
| Other: Sales activity records | Manual today; MAIA customisation in scope | Internal |

**3.7** Which of these systems would you want MAIA to connect to?  
Phase 1: no direct Navision connection. MAIA should use exported Navision customer, item, pricing, stock, credit, and overdue data where provided. WhatsApp is the main intake channel. Future Navision or Microsoft Dynamics integration is separate scope.

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?  
MAIA will not replace Navision. It is positioned as an internal WhatsApp-based sales operations and order coordination assistant. Any tools/processes to stop using are `TO BE ANSWERED`.

---

## Section 4 - Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?  
TO BE ANSWERED.

**4.2** How often are new items added?  
TO BE ANSWERED.

**4.3** Do you use product categories, brands, or groupings? If yes, describe briefly.  
Yes. Public website context lists product categories including Electrical & Industrial Components, Installation, Lighting, Air Movement & Ventilation, Controller & Drives, Measurement & Protection, Low Voltage, and Heating & Thermal. The website also lists brands such as ABB, Circutor, Fukuden, Gewiss, Honeywell, IDEC, Kraus & Naimer, Nissei, Pepperl + Fuchs, Philips, Shinko, Siemens, Toyo, and others. Exact Navision item categories/groupings are `TO BE ANSWERED`.

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.  
TO BE ANSWERED. Phase 1 stock checking is only possible if stock data is included in the Navision export.

**4.5** Which of the following apply to your products? (Check all that apply.)

- [ ] Expiry dates / shelf life - TO BE ANSWERED
- [ ] Batch numbers - TO BE ANSWERED
- [ ] Serial numbers - TO BE ANSWERED
- [ ] Multiple units of measure - TO BE ANSWERED
- [ ] Bundle / kit products - TO BE ANSWERED
- [ ] Product variants - TO BE ANSWERED
- [ ] Product images are important for identification or quotation documents - TO BE ANSWERED

Known requirement: MAIA needs item/SKU matching using exported item master data. Required fields include item code, item name, description, and UOM.

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods? If yes, describe what types.  
TO BE ANSWERED.

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed? If yes, how is this tracked today?  
TO BE ANSWERED.

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)

- [ ] One standard price list for all customers - TO BE ANSWERED
- [ ] Multiple price lists / tiers for different customer segments - TO BE ANSWERED
- [x] Customer-specific pricing (negotiated per customer) - mentioned as relevant in the narrative, subject to export availability
- [ ] Blanket agreements / contract pricing with individual customers - TO BE ANSWERED
- [ ] Volume-based or quantity-based discounts - TO BE ANSWERED
- [ ] Discount-based tiers - TO BE ANSWERED
- [ ] Price varies based on sourcing / import cost at time of order - TO BE ANSWERED
- [ ] Other: Minimum selling price / pricing exception approval rules may apply; exact rules TO BE ANSWERED

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?  
TO BE ANSWERED.

**4.10** Where is pricing data maintained today? (Check all that apply.)

- [x] Inside the ERP system - pricing data to be referenced from exported Navision data in Phase 1
- [ ] In a separate spreadsheet / Excel file - TO BE ANSWERED
- [ ] In the salesperson's memory / experience - TO BE ANSWERED
- [ ] Other: TO BE ANSWERED

**4.11** How frequently do your costs or selling prices change?  
TO BE ANSWERED.

**4.12** Is there a person or role responsible for setting or updating prices? If yes, who?  
TO BE ANSWERED.

---

## Section 5 - Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)

- [x] WhatsApp (text, voice message, or image) - main communication channel
- [ ] Email - TO BE ANSWERED
- [ ] Phone call - TO BE ANSWERED
- [ ] Walk-in / counter - TO BE ANSWERED
- [ ] Customer portal / website - TO BE ANSWERED
- [ ] Marketplace (Shopee, Lazada, etc.) - TO BE ANSWERED
- [x] Purchase Order document (PDF, Excel, or other format) - PO/PDF/image extraction mentioned
- [x] Other: forwarded WhatsApp messages, photos, screenshots, informal order confirmations

**5.2** Approximately how many sales orders are processed per day?  
Narrative states approximately 1,350 orders per month. Daily volume is `TO BE ANSWERED`.

**5.3** How many line items does a typical order contain?  
TO BE ANSWERED.

**5.4** Who creates quotations? Who approves them?  
Current workflow: salesperson reviews messages manually and prepares quotations. Approval may be required depending on discount, pricing exception, or credit condition. Exact creators, approvers, and approval matrix are `TO BE ANSWERED`.

**5.5** Who creates or confirms sales orders? Is there an approval process?  
MAIA Phase 1 should prepare draft Sales Orders for user review. Final Navision update remains manual under Option 1. Exact Sales Order creator/confirmation role and approval process are `TO BE ANSWERED`.

**5.6** Are there situations where a quotation or order needs special approval?  
Yes. Confirmed approval triggers include discount, pricing exception / below minimum selling price rule, credit limit exceeded, overdue payment, and customer creation/profile update control. Exact thresholds and approver routing are `TO BE ANSWERED`.

**5.7** Do you handle any of the following? (Check all that apply.)

- [ ] Customer returns / exchanges - TO BE ANSWERED
- [ ] Credit notes - TO BE ANSWERED
- [ ] Debit notes - TO BE ANSWERED
- [ ] Advance payments or deposits before delivery - TO BE ANSWERED
- [ ] Partial deliveries (order split across multiple shipments) - TO BE ANSWERED
- [ ] Back orders (items ordered but not currently in stock) - TO BE ANSWERED
- [ ] Consignment stock at customer sites - TO BE ANSWERED
- [ ] Substitution of alternative items when requested item is out of stock - TO BE ANSWERED

**5.8** What are the most common reasons your team issues credit notes?  
TO BE ANSWERED.

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?  
TO BE ANSWERED.

---

## Section 6 - Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)

- [ ] Own fleet / in-house drivers - TO BE ANSWERED
- [ ] Freelance / contract drivers - TO BE ANSWERED
- [ ] Third-party courier / logistics company - TO BE ANSWERED
- [ ] Customer self-pickup - TO BE ANSWERED
- [ ] Other: TO BE ANSWERED

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?  
TO BE ANSWERED. Route optimisation and fleet scheduling are out of Phase 1 scope unless separately scoped.

**6.3** Do drivers currently capture proof of delivery (signature, photo)?  
Proof of Delivery attachment is in Phase 1 document scope. Current POD process and whether POD is mandatory for every delivery are `TO BE ANSWERED`.

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?  
TO BE ANSWERED.

**6.5** Is the delivery order and invoice issued at the same time, or separately?  
Delivery Note and Sales Invoice are both in the confirmed document scope. Timing/process is `TO BE ANSWERED`.

---

## Section 7 - Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)

- [ ] Bank transfer - TO BE ANSWERED
- [ ] Cheque - TO BE ANSWERED
- [ ] Cash - TO BE ANSWERED
- [ ] Cash on delivery (COD) - TO BE ANSWERED
- [x] Credit terms - credit customers, credit limit, and overdue checks are relevant
- [ ] Online payment gateway - TO BE ANSWERED
- [ ] Other: TO BE ANSWERED

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms?  
Yes, credit customers are relevant and credit limit/overdue checks are in scope. Standard terms are `TO BE ANSWERED`.

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit?  
Yes, credit limit checks are in scope based on exported Navision data if provided. If exceeded, MAIA should flag or trigger approval based on agreed rules. Hard stop vs warning, thresholds, and approvers are `TO BE ANSWERED`.

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?  
Credit data is expected from exported Navision data if provided. Current enforcement method is `TO BE ANSWERED`.

**7.5** How do customers notify you when they've made a payment?  
TO BE ANSWERED.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how?  
TO BE ANSWERED.

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated (auto-sync to LHDN) - TO BE ANSWERED
- [ ] Compliant but manual submission - TO BE ANSWERED
- [ ] In progress - TO BE ANSWERED
- [ ] Not started - TO BE ANSWERED
- [ ] Not applicable - TO BE ANSWERED

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices?  
TO BE ANSWERED.

**7.9** Are there any tax exemption scenarios relevant to your business?  
TO BE ANSWERED.

---

## Section 8 - Documents & Reports

**8.1** What documents do you currently generate for customers? (Check all that apply.)

- [x] Quotation - confirmed document scope
- [ ] Proforma invoice - TO BE ANSWERED
- [x] Sales order confirmation - Sales Order is confirmed document scope
- [x] Invoice - Sales Invoice is confirmed document scope
- [x] Delivery order / delivery note - Delivery Note is confirmed document scope
- [x] Pick list (internal) - Pick and Pack List is confirmed document scope
- [ ] Credit note - TO BE ANSWERED
- [ ] Debit note - TO BE ANSWERED
- [ ] Payment receipt - TO BE ANSWERED
- [ ] Statement of Account (SOA) - TO BE ANSWERED
- [x] Other: Proof of Delivery attachment

**8.2** Are your document templates generated by the ERP's built-in report engine? If yes, which documents?  
TO BE ANSWERED.

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require?  
TO BE ANSWERED. Samples are required for Quotation, Sales Order, Sales Invoice, Pick and Pack List, Delivery Note, and POD format/upload requirement.

**8.4** What reports do you look at regularly?  
Open quotation visibility and pending order/status visibility are required. Sales activity tracking is also required. Exact regular management reports are `TO BE ANSWERED`.

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?  
Sales activity and follow-up are currently manual / Excel-tracked according to the narrative. Exact reports to automate are `TO BE ANSWERED`.

---

## Section 9 - Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?  
WhatsApp is the main communication channel. WhatsApp Business / WABA status is `TO BE ANSWERED`.

**9.2** Would you want MAIA to communicate with your customers via WhatsApp?  
No for Phase 1 based on signed scope. MAIA is internal-facing first; customer-facing WhatsApp/chatbot flow is out of scope unless separately approved.

**9.3** Would you want MAIA to help your internal team via WhatsApp?  
Yes. Phase 1 positioning is an internal WhatsApp-based sales operations and order coordination assistant. Staff forward inquiries, quotation requests, POs, or orders to MAIA.

**9.4** What primary languages does your team use in daily operations?  
Narrative says English is likely used for product/business terms, and Malay or Chinese terms may appear depending on salesperson/customer usage. Exact languages are `TO BE ANSWERED`.

**9.5** What primary languages do your customers communicate in?  
TO BE ANSWERED.

---

## Section 10 - Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve?

1. Heavy WhatsApp dependency: inquiries, quotation requests, and orders are scattered across conversations.
2. Manual checking and document preparation: customer, item, pricing, stock, credit, overdue, quotation, and Sales Order checks are manual.
3. Approval and visibility gaps: discounts, pricing exceptions, credit conditions, open quotations, pending orders, and salesperson activity need structured visibility and control.

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?  
Manual WhatsApp review, customer/item identification, pricing/stock/credit checks, quotation preparation, and manual transfer of information into the Navision-related process.

**10.3** Is there anything that currently "falls through the cracks" - orders missed, documents lost, follow-ups forgotten?  
The narrative identifies limited visibility over open quotations, pending orders, document trails, activity trails, and sales activity records.

**10.4** If MAIA could only do one thing for your business, what would it be?  
Help internal staff convert WhatsApp inquiries, quotation requests, POs, and order requests into reviewed draft quotations or Sales Orders using exported Navision reference data.

**10.5** Is there anything your team currently does outside the ERP system that you believe should be in a system?  
Yes. WhatsApp inquiry/order handling, manual follow-up, manual quotation preparation, approval tracking, sales activity/location/photo/document tracking, and manual transfer of information into Navision-related processes.

---

## Section 11 - Data Readiness

**11.1** Can you provide the following in Excel or CSV format? (Check all you can provide.)

- [x] Customer list - required from Navision export for customer matching
- [x] Product / item list - required from Navision export for item/SKU matching
- [x] Price list(s) - required from exported pricing data where available
- [ ] Current stock balances - required if stock check is in Phase 1; export availability TO BE ANSWERED
- [ ] Supplier list - TO BE ANSWERED if relevant

Additional data needed if available: credit limit, outstanding balance, overdue payment status, customer-specific pricing, minimum selling price rules, assigned salesperson, item category/grouping, alternative item names, internal shorthand, and customer wording examples.

**11.2** For each item checked above, who in your team will prepare this data?

| Data Item | Person Responsible | Estimated Ready By |
|---|---|---|
| Customer list export | Subra / IT / finance TO BE CONFIRMED | TO BE ANSWERED |
| Item list export | Subra / IT TO BE CONFIRMED | TO BE ANSWERED |
| Pricing export | Subra / IT / sales / finance TO BE CONFIRMED | TO BE ANSWERED |
| Stock export | TO BE ANSWERED | TO BE ANSWERED |
| Credit / overdue / outstanding export | TO BE ANSWERED | TO BE ANSWERED |
| Document samples | TO BE ANSWERED | TO BE ANSWERED |

**11.3** Please provide 3-5 sample transaction documents.  
Required samples: recent Quotation, Sales Order, Sales Invoice, Pick and Pack List, Delivery Note, POD format/upload example, and customer PO examples if available.

**11.4** Do you want historical transaction data available inside MAIA, or are you comfortable starting fresh with forward-only data?

- [ ] Forward-only (new transactions from go-live onwards) - TO BE ANSWERED
- [ ] Want historical data migrated - Approximate date range: TO BE ANSWERED
- [ ] Unsure - TO BE ANSWERED

Note: The narrative says repeat order behavior should only suggest previous order details if historical data is available in MAIA.

---

## Section 12 - Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline?  
TO BE ANSWERED.

**12.2** Who from your team will be the internal project owner?

| Name | Role | Contact |
|---|---|---|
| Subra | IT Manager / primary PIC | TO BE ANSWERED |
| Operational day-to-day owner | TO BE ANSWERED | TO BE ANSWERED |

**12.3** Who will be the decision-maker if we need approvals during setup?

| Name | Role | Contact |
|---|---|---|
| TO BE ANSWERED | TO BE ANSWERED | TO BE ANSWERED |

**12.4** Are there any upcoming events that might affect your availability during onboarding?  
TO BE ANSWERED.

---

## Client Clarification Questions

### Business and Locations

1. Please confirm the full list of legal entities under VITAR Group that are relevant to IASB and whether each is in Phase 1 scope.
2. Please confirm which of the public website branch locations are in scope for MAIA, and which are sales offices, warehouses, or both.
3. Please confirm whether the 12 sales offices share one Navision database or use separate instances/databases.
4. Please confirm whether IASB operates in any currencies other than MYR.

### Team and Access

1. How many users will use MAIA daily by role: sales, sales admin/order processing, finance, warehouse, delivery, management, IT?
2. Which field roles need MAIA: salespeople, drivers, technicians, or others?
3. Do field staff currently have Navision access? If not, what blocks access: licensing, mobile/VPN, permissions, complexity, or another reason?
4. What are the normal operating hours, weekend operations, and holiday support expectations?

### Navision and Data Exports

1. Which Navision version is currently used, and is it on-premise or cloud-hosted?
2. Who manages Navision: internal IT, external vendor, or both?
3. Is there a Navision vendor contact we need for export format or future integration scoping?
4. Can Navision export customer, item, pricing, stock, credit limit, outstanding balance, and overdue status data?
5. What file format can be provided: Excel, CSV, API export file, database extract, or another format?
6. How often can each export be refreshed: daily, multiple times per day, weekly, manual on request?
7. Is there a separate test/UAT environment or sample database?

### Product, Stock, and Pricing

1. What is the approximate SKU count?
2. Do items have serial numbers, batch numbers, expiry/shelf life, multiple UOMs, kits/bundles, or variants?
3. Do salespeople use shorthand names or customer-specific item descriptions in WhatsApp?
4. Can IASB provide real WhatsApp examples where customer wording does not match Navision item names?
5. How is pricing structured: standard price list, tiers, customer-specific pricing, contract pricing, volume discounts, or discount tiers?
6. Who maintains price data, and how often do prices change?
7. What are the minimum selling price rules and approval thresholds?
8. Can stock be exported by branch/warehouse/location?

### Sales, Approval, and Credit Control

1. Who creates quotations today, and who approves them?
2. Who creates or confirms Sales Orders today?
3. What exact rules trigger approval: discount %, below minimum price, credit exceeded, overdue, new customer, large value, or non-standard item?
4. Is overdue payment a hard stop, warning, or approval-required case?
5. Does credit checking apply at quotation stage, Sales Order stage, or both?
6. Who approves credit limit exceptions and overdue cases?
7. What customer creation/profile update changes require approval?

### Delivery, Documents, and Reporting

1. How are deliveries handled today: own fleet, courier, customer pickup, contract drivers, or mixed?
2. Is POD required for every delivery? What format is used: signature, photo, uploaded document, or other?
3. Are Delivery Note and Sales Invoice issued together or separately?
4. Please provide document samples for Quotation, Sales Order, Sales Invoice, Pick and Pack List, Delivery Note, and POD.
5. What fields or formatting are mandatory on customer-facing documents?
6. What reports does management need regularly: open quotations, pending orders, salesperson activity, credit exceptions, delivery status, or other reports?

### WhatsApp and Scope Boundaries

1. Which WhatsApp number will staff use to forward requests to MAIA?
2. Will multiple salespeople forward messages to MAIA?
3. Is there a shared sales/admin WhatsApp number?
4. Does IASB already use WhatsApp Business App or WABA?
5. Please confirm that customer-facing WhatsApp automation is not required in Phase 1.
6. Please confirm that route optimisation, driver GPS tracking, warehouse automation, payment reconciliation, and live Navision sync are out of Phase 1 unless separately scoped.

---

## Source Notes

- Customer narrative: `Industrial Automation (IASB) Customer Narrative.md`
- Public company context: https://iasb.com.my, reviewed 2026-06-19

---

_MAIA by Mindhive - Client Onboarding Questionnaire v2.0_

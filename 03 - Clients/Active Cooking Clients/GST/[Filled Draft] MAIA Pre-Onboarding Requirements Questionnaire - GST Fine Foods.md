_Pre-filled by Mindhive based on the 2026-05-04 GST requirements gathering meeting. Please review, correct, and complete any item marked **[Client to confirm]** or **[Not covered in meeting]**._

---

**Client Name:** GST Fine Foods  
**Completed By:** Mindhive (draft based on meeting transcript)  
**Date:** 2026-05-11  
**Account Manager (Mindhive):** Gareth Ng

---

## How to Use This Document

This draft is pre-filled from our 4 May 2026 discussion so your team only needs to:

- confirm what is already captured
- correct anything inaccurate
- fill in the remaining blanks / unanswered questions

If a question does not apply, please write `N/A`.

---

## Section 1 — Business Structure

**1.1** How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

| Entity / Company Name | Business Type | In Scope for MAIA? |
|---|---|---|
| GST Fine Foods / GST Group trading division | Food trading / distribution | Yes |
| Penang operation (`P30` in SAP) | Distribution / sales | Phase 1 priority |
| KL operation (`K30` in SAP) | Distribution / sales | Yes / confirm rollout timing |
| Langkawi operation | **[Client to confirm exact business type]** | Later / not priority for current phase |

**Note:** The meeting mentioned GST Group, Penang, KL, and Langkawi. Please confirm the full legal entity / company list, since the meeting focused more on operating branches than registered entities.

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?  
Based on the meeting, Penang and KL appear to be on the same SAP Business One environment/database with separate company codes (`P30` and `K30`). Langkawi was mentioned as using AutoCount. **[Client to confirm final structure]**

**1.3** Do the entities share the same customer database and item database, or are they separate?  
The meeting suggests Penang and KL are separated by company code and customer ownership, not fully shared. **[Client to confirm whether customer master and item master are shared or segmented]**

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

| Location Name | Type | Entity It Belongs To |
|---|---|---|
| Penang | Office / operations / warehouse | GST Fine Foods |
| KL | Office / operations / warehouse | GST Fine Foods |
| Langkawi | **[Client to confirm]** | GST Group |

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?  
Main business appears to be in Malaysia, with some Singapore business mentioned. **[Client to confirm whether multi-currency is active in ERP and which currencies are used]**

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day?  
Meeting indicates users will include sales, sales coordinators, finance, store/logistics, and management. Exact total user count was not finalised. **[Client to confirm final user count by branch and role]**

**2.2** What roles or departments will use the system, and roughly how many people per role?

| Role / Department | Number of People | Key Responsibilities |
|---|---|---|
| Salespeople | Meeting mentioned `~6` in one branch discussion; Penang priority scope also referenced separately | Customer relationship, order intake, quotation follow-up, invoice/SOA requests |
| Sales Coordinators / Internal Sales | Meeting mentioned `~6` in one branch discussion; Penang priority scope also referenced separately | Key in orders, convert incoming requests into SAP sales orders, coordinate with finance / store |
| Finance | **[Client to confirm]** | Credit control, SOA, approval, invoice / payment handling |
| Store / Logistics / Inventory | **[Client to confirm]** | Stock checking, stock transformation, fulfillment support |
| Management | **[Client to confirm]** | Approvals, oversight, escalation |

**Note:** Please confirm the exact headcount by branch. The meeting contained branch-specific examples but not one final user matrix.

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?  
**[Not covered in meeting]**

**2.4** Do any of your staff work in the field? If yes, which roles?  
Yes. Outdoor salespeople were specifically mentioned.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not?  
Outdoor salespeople do not have practical SAP access while in the field. They mainly use phones, and retrieving or sending invoice PDFs from SAP is difficult without office/computer support.

---

## Section 3 — Current Systems & ERP

**3.1** What is your main ERP / accounting system?

|   | Your Answer |
|---|---|
| System name | SAP Business One |
| Version number | SAP B1 `10.191` / `10.x` was mentioned in the meeting |
| Hosting | On-premise |
| Managed by | Both internal IT and outsourced SAP vendor |
| Vendor company name | **[Client to confirm]** |
| Vendor contact person | **[Client to confirm]** |

**3.2** Have you ever done any integration project with your ERP before?  
**[Not covered in meeting]**

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features?  
The meeting referenced:

- Crystal Reports document layouts
- Blanket Agreements for customer pricing / reservation-related workflow
- stock transformation workflow for fish cutting / processing

Please confirm which of the above are standard SAP configuration vs customisation / UDF / custom workflow.

**3.4** Do multiple users share a single ERP login, or does each user have their own account?  
Each user appears to have their own SAP account. The team also mentioned a separate UAT account/environment.

**3.5** Does your ERP have a test/UAT environment separate from the live system?  
Yes, a UAT environment/account was mentioned.

**3.6** What other systems or tools do you use alongside the ERP?

| Function | Current Tool | Managed By |
|---|---|---|
| Inventory / stock management | SAP B1 + manual checks with store/logistics | Internal |
| Customer records (CRM) | SAP B1 customer master | Internal |
| Delivery / logistics tracking | Store / logistics team coordination | **[Client to confirm]** |
| Purchasing / supplier orders | SAP B1 + planning exports / Excel | Internal |
| Communication with customers | WhatsApp, email, phone | Internal |
| Internal team communication | WhatsApp groups | Internal |
| Document storage / filing | **[Not covered in meeting]** | **[Client to confirm]** |
| Reporting / dashboards | SAP reports + manual Excel exports | Internal |
| Other | Excel quotation prep / costing / planning files | Internal |

**3.7** Which of these systems would you want MAIA to connect to?  
SAP Business One is the primary required integration. WhatsApp / Meta Business is also intended as a core channel. Email may also be used for notifications and SOA sending.

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?  
The main target is to reduce dependence on WhatsApp group coordination, manual SOA sending, manual invoice retrieval, and manual order key-in. **[Client to confirm if any systems will be formally retired]**

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?  
The meeting referenced sharing about `200` items for testing/demo setup. Please confirm actual live SKU count.

**4.2** How often are new items added?  
Approximately `~10 new SKUs per month` was mentioned.

**4.3** Do you use product categories, brands, or groupings?  
Yes. The meeting referenced different brands/operations and product distinctions by species, cut, size, origin, and pack format. **[Client to confirm official category/group structure]**

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.  
Yes, across at least Penang and KL. **[Client to confirm whether there are multiple warehouses/bins within each branch]**

**4.5** Which of the following apply to your products?

- [x] Expiry dates / shelf life
- [ ] Batch numbers
- [ ] Serial numbers
- [x] Multiple units of measure
- [ ] Bundle / kit products
- [x] Product variants
- [x] Product images are important for identification or quotation documents

**Notes:**  
- Expiry / aging matters operationally, but batch usage in SAP was raised as a follow-up item and not confirmed as active.  
- Multiple UOM issues were discussed, including selling by piece but pricing by kg.  
- Product images were specifically requested for quotation use cases.

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods?  
Yes. Fish cutting / stock transformation is a major workflow. Examples mentioned:

- whole fish to fillet + head + tail
- processed cuts on demand
- repackaging bulk into smaller retail packs

**4.7** Do your salespeople ever "reserve" stock for specific customers before a confirmed order is placed?  
Yes, this happens informally / manually in practice, especially for important customers or expected future demand. It is not clearly tracked in a structured system today.

### Pricing

**4.8** How do you manage pricing?

- [ ] One standard price list for all customers
- [ ] Multiple price lists / tiers for different customer segments
- [x] Customer-specific pricing
- [x] Blanket agreements / contract pricing with individual customers
- [ ] Volume-based or quantity-based discounts
- [ ] Discount-based tiers
- [x] Price varies based on sourcing / import cost at time of order
- [x] Other: quotation pricing may be prepared through Excel / manual review before sending

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?  
The meeting suggested pricing is often maintained customer-by-customer via Blanket Agreements rather than simple shared tiers. **[Client to confirm structure and count]**

**4.10** Where is pricing data maintained today?

- [x] Inside the ERP system
- [x] In a separate spreadsheet / Excel file
- [ ] In the salesperson's memory / experience
- [x] Other: quotation review / costing logic may still involve manual validation

**4.11** How frequently do your costs or selling prices change?  
Weekly pricing was mentioned in some cases; some accounts may also be contract-priced. **[Client to confirm by product/customer type]**

**4.12** Is there a person or role responsible for setting or updating prices?  
**[Not fully covered in meeting]**

---

## Section 5 — Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive?

- [x] WhatsApp
- [x] Email
- [x] Phone call
- [ ] Walk-in / counter
- [ ] Customer portal / website
- [ ] Marketplace (Shopee, Lazada, etc.)
- [x] Purchase Order document (PDF, Excel, or other format)
- [x] Other: handwritten notes / voice messages were also mentioned in practice

**5.2** Approximately how many sales orders are processed per day?  
Penang priority branch was referenced as `3,000+ orders/month`, which is roughly `~100/day` if spread across a month. **[Client to confirm actual daily order volume by branch]**

**5.3** How many line items does a typical order contain?  
**[Not covered clearly in meeting]**

**5.4** Who creates quotations? Who approves them?  
Sales/salesperson initiates the quotation. The meeting indicated superior/manager approval is needed before it is sent to the customer.

**5.5** Who creates or confirms sales orders? Is there an approval process?  
Sales coordinators / internal sales currently key in sales orders into SAP. Approval is needed in exception cases such as credit block or special pricing.

**5.6** Are there situations where a quotation or order needs special approval?  
Yes. Examples mentioned:

- credit limit exceeded / overdue customer
- special pricing / quotation review
- manager approval before sending quotation in some cases

**5.7** Do you handle any of the following?

- [ ] Customer returns / exchanges
- [x] Credit notes
- [ ] Debit notes
- [ ] Advance payments or deposits before delivery
- [x] Partial deliveries
- [x] Back orders
- [ ] Consignment stock at customer sites
- [x] Substitution of alternative items when requested item is out of stock

**Notes:**  
Partial fulfillment / open orders and substitution were discussed. Credit notes are in the document set and process context. Returns, debit notes, deposits, and consignment were not clearly covered.

**5.8** What are the most common reasons your team issues credit notes?  
**[Not covered in meeting]**

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?  
**[Not covered in meeting]**

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers?

- [ ] Own fleet / in-house drivers
- [ ] Freelance / contract drivers
- [ ] Third-party courier / logistics company
- [ ] Customer self-pickup
- [x] Other: logistics / store team fulfills based on order flow, but delivery method was not clearly broken down in the meeting

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?  
**[Not covered in meeting]**

**6.3** Do drivers currently capture proof of delivery (signature, photo)?  
**[Not covered in meeting]**

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?  
**[Not covered in meeting]**

**6.5** Is the delivery order and invoice issued at the same time, or separately?  
The meeting indicated invoices are generally individual per delivery unless customer arrangement requires consolidation. Please confirm whether DO and invoice are issued together or as separate steps operationally.

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use?

- [x] Bank transfer
- [ ] Cheque
- [ ] Cash
- [ ] Cash on delivery (COD)
- [x] Credit terms
- [ ] Online payment gateway
- [ ] Other: _______________

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms?  
Yes. The meeting mentioned terms such as `30 / 60 / 90 days`, with some internal grace logic also described. Please confirm the exact standard terms by customer type.

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit?  
Yes. Credit limits are maintained per customer. If exceeded / overdue, the case is blocked and requires approval through a manual credit approval process.

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?  
Both. SAP handles the credit standing / block logic, but approval routing is still manual via form + WhatsApp + sign-off.

**7.5** How do customers notify you when they've made a payment?  
Typically through WhatsApp to the salesperson / sales team, who then coordinates with finance.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how?  
Yes. SOA is currently generated from SAP / Crystal Reports and sent manually, typically monthly, by email.

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated
- [ ] Compliant but manual submission
- [ ] In progress
- [ ] Not started
- [ ] Not applicable

**[Not covered in meeting]**

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices?  
Default appears to be individual invoices per delivery. Consolidation may depend on customer preference / agreement. **[Client to confirm exact policy]**

**7.9** Are there any tax exemption scenarios relevant to your business?  
**[Not covered in meeting]**

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers?

- [x] Quotation
- [ ] Proforma invoice
- [ ] Sales order confirmation
- [x] Invoice
- [x] Delivery order / delivery note
- [x] Pick list (internal)
- [x] Credit note
- [ ] Debit note
- [x] Payment receipt
- [x] Statement of Account (SOA)
- [ ] Other: _______________

**Notes:**  
Quotation, invoice, DO, pick list, CN, payment receipt, and SOA were all discussed directly or implied by current workflow and requested sample docs.

**8.2** Are your document templates generated by the ERP's built-in report engine?  
Yes. Crystal Reports / SAP document layouts were specifically mentioned and are important to preserve or match.

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require?  
Yes. GST wants MAIA outputs to match existing SAP Crystal Report layouts as closely as possible. The meeting also mentioned:

- invoice / document formatting matters
- quotation may need product photos
- existing document numbering / presentation has customer-facing importance

Please provide sample PDFs for confirmation.

**8.4** What reports do you look at regularly?  
The meeting referenced:

- SOA / AR-related outputs
- planning / historical sales analysis
- historical production / planning exports
- stock movement / stock availability review

Please confirm the final report list used operationally and by management.

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?  
Yes. Planning-related exports were specifically mentioned, including historical sales, production, and other raw data pulled into Excel for forecasting / planning.

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account?  
The meeting indicated a dedicated company number and Meta Business / WhatsApp Business setup is still needed. So this appears to be planned but not yet fully set up. **[Client to confirm current status]**

**9.2** Would you want MAIA to communicate with your customers via WhatsApp?  
Yes. This was a core use case discussed.

**9.3** Would you want MAIA to help your internal team via WhatsApp?  
Yes. Sales, finance, and order/payment/invoice coordination through chat was a major part of the discussion.

**9.4** What primary languages does your team use in daily operations?  
English, Malay, and Chinese were all referenced depending on branch/team. SAP interface usage was mentioned in English.

**9.5** What primary languages do your customers communicate in?  
The meeting suggests a mixed operating environment, but this was not formally enumerated. **[Client to confirm primary customer languages]**

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve?

1. Missed / messy order capture from WhatsApp, email, and other fragmented channels
2. Poor stock visibility and overselling risk, especially where raw stock must be converted into processed fulfillment
3. Manual coordination across sales, finance, and operations for credit approval, invoice retrieval, payment updates, and SOA

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?  
Manual order key-in, item matching, stock checking, quotation prep, invoice retrieval for outdoor sales, and manual SOA/payment coordination.

**10.3** Is there anything that currently "falls through the cracks"?  
Yes. The meeting explicitly described:

- orders being missed when volume is high
- inconsistent item naming / matching
- invoice requests being delayed or sent to the wrong person
- stock commitments not being tracked clearly across salespeople

**10.4** If MAIA could only do one thing for your business, what would it be?  
Based on the meeting, the clearest priority is likely: automate order intake / matching from WhatsApp or PO into a structured sales order workflow while reducing manual coordination. **[Client to confirm wording]**

**10.5** Is there anything your team currently does outside the ERP system that should be in a system?  
Yes. Examples discussed:

- WhatsApp-based order intake and internal coordination
- manual stock reservation / salesperson commitments
- manual credit approval routing
- invoice retrieval requests
- planning exports in Excel
- pricing / quotation preparation in Excel

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format?

- [x] Customer list
- [x] Product / item list
- [x] Price list(s)
- [x] Current stock balances
- [ ] Supplier list

**Notes:**  
The meeting included a proposed starter dataset of about `200` items and `50` customers for testing/demo. Supplier list was not specifically discussed.

**11.2** For each item checked above, who in your team will prepare this data?

| Data Item | Person Responsible | Estimated Ready By |
|---|---|---|
| Customer list | GST IT / sales coordination team — **[Client to confirm exact owner]** | **[Client to confirm]** |
| Product / item list | GST IT / inventory team — **[Client to confirm exact owner]** | **[Client to confirm]** |
| Price list(s) / Blanket Agreements | GST sales / finance / IT — **[Client to confirm exact owner]** | **[Client to confirm]** |
| Current stock balances | GST IT / store / inventory team — **[Client to confirm exact owner]** | **[Client to confirm]** |

**11.3** Please provide 3–5 sample transaction documents.  
Requested / discussed:

- 3–5 anonymised customer PO files
- sample quotation / SO / invoice / DO PDFs
- credit approval form
- Blanket Agreement screenshot/export
- screen recording of SAP order entry process

**11.4** Do you want historical transaction data available inside MAIA, or are you comfortable starting fresh?

- [ ] Forward-only
- [x] Want historical data migrated
- [ ] Unsure

Approximate date range: at least `6–12 months` of historical order / quotation data was referenced as useful for planning, preference mining, and analysis. **[Client to confirm final migration range]**

---

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline?  
**[Not covered in meeting]**

**12.2** Who from your team will be the internal project owner?

| Name | Role | Contact |
|---|---|---|
| Joey Ong | Sales / operational coordination was referenced repeatedly | **[Client to confirm contact + whether Joey is the official day-to-day owner]** |

**12.3** Who will be the decision-maker if we need approvals during setup?

| Name | Role | Contact |
|---|---|---|
| Soo Chin / Tim Wong / management team | **[Client to confirm final decision-maker]** | **[Client to confirm]** |

**12.4** Are there any upcoming events that might affect your availability during onboarding?  
**[Not covered in meeting]**

---

## What Happens Next

Please review this draft and:

1. confirm or correct the pre-filled answers
2. complete all items marked **[Client to confirm]** or **[Not covered in meeting]**
3. return the questionnaire together with sample files / documents where available

---

_MAIA by Mindhive — Pre-Onboarding Requirements Questionnaire (GST Fine Foods draft pre-fill)_

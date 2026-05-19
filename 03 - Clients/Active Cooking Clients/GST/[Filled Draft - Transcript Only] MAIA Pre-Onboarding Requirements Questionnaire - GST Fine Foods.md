_Pre-filled by Mindhive using only information stated in the 2026-05-04 GST Fine Foods requirements gathering transcript. If an answer was not explicitly stated in the transcript, it is marked `**CLIENT TO COMPLETE**`._

---

**Client Name:** GST Fine Foods / GST Group  
**Completed By:** Mindhive (transcript-only draft)  
**Date:** 2026-05-12  
**Account Manager (Mindhive):** Gareth Ng

---

## How to Use This Document

This version only includes answers that were explicitly mentioned in the RG transcript on 4 May 2026.

- If an item is marked `**CLIENT TO COMPLETE**`, GST still needs to fill it.
- If an answer is incomplete, GST should correct or expand it.

## Client Completion Note

Please review all fields marked **CLIENT TO COMPLETE** and fill them in before returning this questionnaire.

---

## Section 1 — Business Structure

**1.1** How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

| Entity / Company Name | Business Type | In Scope for MAIA? |
|---|---|---|
| GST Fine Foods / GST Group trading division | Trading | Yes |
| Langkawi | Not explicitly stated in transcript | Later / not priority in current phase |
| KL | Not explicitly stated in transcript | Yes |
| B9 | Not explicitly stated in transcript | Not explicitly stated in transcript |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?  
Transcript states Langkawi uses AutoCount, while the current project discussion is focused on SAP for the other in-scope operations. Penang and KL were discussed in the context of the same SAP setup with separate company codes / ownership constraints.

**1.3** Do the entities share the same customer database and item database, or are they separate?  
Transcript indicates Penang customers and KL customers are separate by ownership in SAP: `Penang is Penang, KL is KL`, and each customer is unique.

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

| Location Name | Type | Entity It Belongs To |
|---|---|---|
| Penang | Office / operations | GST Fine Foods / GST Group |
| KL | Office / operations | GST Fine Foods / GST Group |
| Langkawi | **CLIENT TO COMPLETE** | GST Group |

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?  
Main business coverage is in Malaysia. Some business in Singapore was mentioned. Exact currencies were not explicitly stated.

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day?  
Transcript states MAIA users would include sales, finance, warehouse/store, and management. Exact total user count: **CLIENT TO COMPLETE**.

**2.2** What roles or departments will use the system, and roughly how many people per role?

| Role / Department | Number of People | Key Responsibilities |
|---|---|---|
| Sales / salespeople | `4` mentioned for KL hotel/restaurant side | Customer-facing sales |
| Online sales | `2` mentioned for KL online/Lazada side | Online sales |
| Sales coordinators / sales coordinators | `6` coordinators mentioned in one discussion | Key in orders into system |
| Finance | Not explicitly stated | Finance / approvals / SOA |
| Store / warehouse / logistics | Not explicitly stated | Stock checking / stock transformation |
| Management | Not explicitly stated | Approval / oversight |

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?  
**CLIENT TO COMPLETE**.

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?  
Yes. Outdoor salespeople were explicitly mentioned.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not?  
Outdoor salespeople do not have practical SAP access on mobile. They use phones, and invoice retrieval / sending PDFs is difficult unless someone inside the office helps them.

---

## Section 3 — Current Systems & ERP

**3.1** What is your main ERP / accounting system?

|   | Your Answer |
|---|---|
| System name | SAP Business One |
| Version number | `10` / `10.1910` / `10.191` was mentioned in the transcript |
| Hosting | Not explicitly stated as on-premise/cloud in RG transcript |
| Managed by | Internal team + IT / vendor involvement implied |
| Vendor company name | **CLIENT TO COMPLETE** |
| Vendor contact person | **CLIENT TO COMPLETE** |

**3.2** Have you ever done any integration project with your ERP before?  
**CLIENT TO COMPLETE**.

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features?  
Transcript explicitly mentioned:

- Crystal Reports for documents
- Blanket Agreement usage
- stock transformation workflow
- quotation function in SAP is not used because it cannot handle photos the way they want

**3.4** Do multiple users share a single ERP login, or does each user have their own account?  
Transcript indicates they do not have a shared customer account for viewing SAP setup, and users have their own accounts. A UAT account/environment was also mentioned.

**3.5** Does your ERP have a test/UAT environment separate from the live system?  
Yes. UAT account / UAT access was explicitly discussed.

**3.6** What other systems or tools do you use alongside the ERP?

| Function | Current Tool | Managed By (internal / vendor) |
|---|---|---|
| Inventory / stock management | SAP + manual checks / people checking | Internal |
| Customer records (CRM) | SAP | Internal |
| Delivery / logistics tracking | Store / logistics coordination | Internal |
| Purchasing / supplier orders | **CLIENT TO COMPLETE** | **CLIENT TO COMPLETE** |
| Communication with customers | WhatsApp, email | Internal |
| Internal team communication | WhatsApp groups | Internal |
| Document storage / filing | **CLIENT TO COMPLETE** | **CLIENT TO COMPLETE** |
| Reporting / dashboards | SAP reports, Excel | Internal |
| Other: quotation prep | Excel | Internal |

**3.7** Which of these systems would you want MAIA to connect to?  
SAP Business One and WhatsApp were explicitly central to the discussion.

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?  
Transcript clearly indicates GST wants to reduce reliance on WhatsApp group coordination and manual back-and-forth for order handling, SOA requests, invoice retrieval, and payment follow-up.

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?  
Transcript mentioned exporting about `203` items for testing/demo purposes. Total live SKU count: **CLIENT TO COMPLETE**.

**4.2** How often are new items added?  
Transcript suggests around `10` in one discussion, but the exact question/answer pairing is not fully clear. Treat as `approximately 10` only if GST confirms.

**4.3** Do you use product categories, brands, or groupings? If yes, describe briefly.  
Yes. Transcript explicitly mentioned different brands / operations including Langkawi, KL, and B9.

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.  
Transcript indicates at least Penang and KL operational separation. Warehouse/bin detail was not explicitly covered.

**4.5** Which of the following apply to your products? (Check all that apply.)

- [ ] Expiry dates / shelf life
- [ ] Batch numbers
- [ ] Serial numbers
- [x] Multiple units of measure
- [ ] Bundle / kit products
- [x] Product variants
- [x] Product images are important for identification or quotation documents

**Basis from transcript:**  
- UOM issues were explicitly discussed: e.g. piece vs kg.  
- Variants/cut/size differences were explicitly discussed.  
- Product photos were explicitly discussed as a reason SAP quotation is not used.

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods? If yes, describe what types.  
Yes. Transcript explicitly described whole fish being transformed into fillet, head, tail, and other processed forms using a stock transformation process.

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed? If yes, how is this tracked today?  
Yes, there are cases where stock is informally kept for certain customers based on salesperson judgment / manual handling. It is described as manual and based on relationship/context, not a structured system process.

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)

- [ ] One standard price list for all customers
- [ ] Multiple price lists / tiers for different customer segments
- [x] Customer-specific pricing (negotiated per customer)
- [x] Blanket agreements / contract pricing with individual customers
- [ ] Volume-based or quantity-based discounts
- [ ] Discount-based tiers
- [x] Price varies based on sourcing / import cost at time of order
- [ ] Other: _______________

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?  
Transcript explicitly states each customer can have their own agreed price via Blanket Agreement. Number of tiers was not explicitly covered.

**4.10** Where is pricing data maintained today? (Check all that apply.)

- [x] Inside the ERP system
- [x] In a separate spreadsheet / Excel file
- [ ] In the salesperson's memory / experience
- [ ] Other: _______________

**Basis from transcript:**  
- ERP pricing / Blanket Agreement was discussed.  
- Excel quotation prep / pricing with photos was discussed.

**4.11** How frequently do your costs or selling prices change? (e.g., daily for commodities, monthly, annually, by contract period)  
Transcript indicates pricing can be by contract or weekly price.

**4.12** Is there a person or role responsible for setting or updating prices? If yes, who?  
**CLIENT TO COMPLETE**.

---

## Section 5 — Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)

- [x] WhatsApp (text, voice message, or image)
- [x] Email
- [ ] Phone call
- [ ] Walk-in / counter
- [ ] Customer portal / website
- [ ] Marketplace (Shopee, Lazada, etc.)
- [x] Purchase Order document (PDF, Excel, or other format)
- [ ] Other: _______________

**Basis from transcript:** WhatsApp, email, PO, and customer group communication were explicitly mentioned. Phone call was not clearly stated in the RG transcript segment used here.

**5.2** Approximately how many sales orders are processed per day?  
Transcript gave an example of `10` orders with `8` processed and `2` missed, but did not explicitly state actual daily order volume.

**5.3** How many line items does a typical order contain?  
**CLIENT TO COMPLETE**.

**5.4** Who creates quotations? Who approves them?  
Transcript indicates the salesperson reviews the quotation, and superior / manager approval is needed before it goes to the customer.

**5.5** Who creates or confirms sales orders? Is there an approval process?  
Transcript states sales coordinators / customer coordinators key the order into the system. Approval process exists for credit approval cases.

**5.6** Are there situations where a quotation or order needs special approval?  
Yes. Transcript explicitly mentioned:

- credit/overdue situations requiring credit approval form
- quotation needing superior sign-off before sending

**5.7** Do you handle any of the following? (Check all that apply.)

- [ ] Customer returns / exchanges
- [ ] Credit notes
- [ ] Debit notes
- [ ] Advance payments or deposits before delivery
- [ ] Partial deliveries (order split across multiple shipments)
- [ ] Back orders (items ordered but not currently in stock)
- [ ] Consignment stock at customer sites
- [x] Substitution of alternative items when requested item is out of stock

**Only substitution was explicitly clear from the RG transcript.** The others were not explicitly answered in the transcript.

**5.8** What are the most common reasons your team issues credit notes?  
**CLIENT TO COMPLETE**.

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?  
**CLIENT TO COMPLETE**.

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)

- [ ] Own fleet / in-house drivers
- [ ] Freelance / contract drivers
- [ ] Third-party courier / logistics company
- [ ] Customer self-pickup
- [ ] Other: _______________

**CLIENT TO COMPLETE**.

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?  
**CLIENT TO COMPLETE**.

**6.3** Do drivers currently capture proof of delivery (signature, photo)?  
**CLIENT TO COMPLETE**.

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?  
**CLIENT TO COMPLETE**.

**6.5** Is the delivery order and invoice issued at the same time, or separately?  
**CLIENT TO COMPLETE**.

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)

- [ ] Bank transfer
- [ ] Cheque
- [ ] Cash
- [ ] Cash on delivery (COD)
- [x] Credit terms (net 30, net 60, etc.)
- [ ] Online payment gateway
- [ ] Other: _______________

Only credit terms were explicitly discussed. Payment notification by WhatsApp was also discussed, but payment method itself was not fully enumerated.

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms? (e.g., 7 days, 30 days, 60 days)  
Yes. Transcript explicitly mentioned `30 days`, `60 days`, and `90 days`.

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit? (e.g., order blocked, requires manager approval, warning only)  
Yes. Credit standing / credit block exists in SAP. If overdue/over limit, internal sales needs to fill in a credit approval form and get approval.

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?  
Both. Transcript indicates SAP has credit block / popup behavior, but approval handling is manual through form + WhatsApp + sign-off.

**7.5** How do customers notify you when they've made a payment? (e.g., WhatsApp message to salesperson, email to finance, upload to portal)  
Transcript states customers notify the sales team, and this happens via another WhatsApp flow/group.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how? (e.g., monthly PDF email, manual process)  
Yes. Transcript explicitly states SOA is emailed to customers, for all customers, monthly, and currently handled manually one by one from SAP export / Crystal flow.

**7.7** What is your e-invoicing status?  
**CLIENT TO COMPLETE**.

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices? (Is it a per-customer preference?)  
This was raised as a question in the transcript, but GST’s actual answer was not explicitly captured.

**7.9** Are there any tax exemption scenarios relevant to your business? (e.g., C1, C3, A57 certificates, LMW, export exemptions)  
**CLIENT TO COMPLETE**.

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers? (Check all that apply.)

- [x] Quotation
- [ ] Proforma invoice
- [ ] Sales order confirmation
- [x] Invoice
- [ ] Delivery order / delivery note
- [ ] Pick list (internal)
- [ ] Credit note
- [ ] Debit note
- [ ] Payment receipt
- [x] Statement of Account (SOA)
- [ ] Other: _______________

Only quotation, invoice, and SOA were clearly explicit in the RG transcript used here.

**8.2** Are your document templates generated by the ERP's built-in report engine (e.g., Crystal Reports for SAP B1)? If yes, which documents?  
Yes. Crystal Reports was explicitly mentioned for SAP documents / formats.

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require?  
Yes. Transcript explicitly indicates GST cares about Crystal Report document formatting, and quotation needs product photos.

**8.4** What reports do you look at regularly?  
Transcript explicitly mentioned SOA and planning-related Excel/report needs. Sales dashboard/reporting was also asked about in the meeting.

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?  
Yes. Transcript explicitly mentioned planning-related Excel pulling of production, planning, and sales historical data.

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?  
Transcript indicates Meta Business account and WhatsApp Business setup still need to be created as action items.

**9.2** Would you want MAIA to communicate with your customers via WhatsApp? (e.g., order confirmations, delivery updates, payment reminders)  
Yes. This is central to the requested workflow.

**9.3** Would you want MAIA to help your internal team via WhatsApp? (e.g., sales staff creating orders through chat, drivers receiving trip details, payment proof forwarding)  
Yes. This is central to the requested workflow.

**9.4** What primary languages does your team use in daily operations? (e.g., English, Malay, Chinese — specify Mandarin/Cantonese if relevant)  
Transcript explicitly states this depends on staff. KL staff were described as Malay-speaking, Chinese is used in the meeting, and SAP/subtitles/interface was referred to in English.

**9.5** What primary languages do your customers communicate in?  
Client to complete.

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve? (In your own words — be as specific as possible.)

1. Too much manual order handling from WhatsApp / email into SAP  
2. Stock / reservation / availability handling is manual and causes issues  
3. Finance coordination for credit approval, SOA, invoice retrieval, and payment follow-up is manual

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?  
Manual key-in from WhatsApp / PO into system, invoice retrieval for outdoor salespeople, manual SOA emailing, and payment follow-up via WhatsApp.

**10.3** Is there anything that currently "falls through the cracks" — orders missed, documents lost, follow-ups forgotten?  
Yes. Transcript explicitly gives the example that when order volume is high, they may receive 10 orders but only key in 8 and miss 2.

**10.4** If MAIA could only do one thing for your business, what would it be?  
Transcript strongly centers on automating order intake / mapping from WhatsApp into SAP and reducing manual coordination around that flow.

**10.5** Is there anything your team currently does outside the ERP system (in WhatsApp, spreadsheets, paper, or memory) that you believe should be in a system? Describe briefly.  
Yes. Transcript explicitly mentioned:

- order intake and coordination via WhatsApp groups
- manual quotation work in Excel
- manual credit approval form via WhatsApp
- manual SOA sending
- invoice retrieval requests through internal back-and-forth

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format? (Check all you can provide.)

- [x] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit)
- [x] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive status)
- [ ] Price list(s) — standard and/or customer-specific
- [ ] Current stock balances (item, warehouse, quantity)
- [ ] Supplier list (if relevant for purchasing)

**Basis from transcript:** Mindhive asked GST to export about `203` items and `50` customers for demo/testing. The other data types were not explicitly confirmed as available in the transcript.

**11.2** For each item checked above, who in your team will prepare this data?

| Data Item | Person Responsible | Estimated Ready By |
|---|---|---|
| Customer list | **CLIENT TO COMPLETE** | **CLIENT TO COMPLETE** |
| Product / item list | **CLIENT TO COMPLETE** | **CLIENT TO COMPLETE** |

**11.3** Please provide 3–5 sample transaction documents. These help us understand your document formats, field requirements, and workflow. (e.g., a recent quotation, sales order, invoice, delivery order, credit note, customer PO, pick list)  
Transcript explicitly asked GST to provide sample data and even screen recordings of how SAP order handling works. Customer PO / quotation / invoice examples were clearly relevant in the discussion.

**11.4** Do you want historical transaction data (old orders, invoices, etc.) available inside MAIA, or are you comfortable starting fresh with forward-only data?

- [ ] Forward-only (new transactions from go-live onwards) — _standard_
- [ ] Want historical data migrated — Approximate date range: _______________
- [ ] Unsure — to discuss

**CLIENT TO COMPLETE**.

---

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline? (e.g., tied to a contract, season, audit, or event)  
**CLIENT TO COMPLETE**.

**12.2** Who from your team will be the **internal project owner** — the day-to-day contact during onboarding? (Ideally someone operational who understands the daily workflow, not only a department head.)

| Name | Role | Contact (phone/email) |
|---|---|---|
| Joey | Mindhive explicitly said they would work with Joey on follow-up action items | **CLIENT TO COMPLETE** |

**12.3** Who will be the **decision-maker** if we need approvals during setup? (e.g., on workflows, permissions, integrations, scope decisions)

| Name | Role | Contact (phone/email) |
|---|---|---|
| **CLIENT TO COMPLETE** | **CLIENT TO COMPLETE** | **CLIENT TO COMPLETE** |

**12.4** Are there any upcoming events that might affect your availability during onboarding? (e.g., holidays, audits, travel, peak season)  
**CLIENT TO COMPLETE**.

---

## What Happens Next

GST should:

1. review the pre-filled transcript-only answers
2. correct anything inaccurate
3. fill all fields marked **CLIENT TO COMPLETE**

---

_MAIA by Mindhive — Client Onboarding Questionnaire v2.0 (transcript-only GST draft)_

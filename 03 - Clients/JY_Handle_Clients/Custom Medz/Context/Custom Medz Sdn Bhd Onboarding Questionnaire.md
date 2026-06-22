***

**Client Name:**  Custom Medz Sdn. Bhd.&#x20;

**Completed By:**  Jason Thean (Pharmacist)

**Date:** 09.06.2026

***

## How to Use This Document

This questionnaire collects factual information about your business so we can prepare for a focused and productive first meeting. The meeting itself will focus on *how* your workflows actually run and *where* they break, not on collecting this baseline data.

**Guidelines:**

* Answer as completely as you can. Partial answers are fine. Write "unsure" or "to discuss" for anything unclear, rather than leaving it blank.

* For tables, add or remove rows as needed.

* If a question does not apply to your business, write "N/A."

* Please return this document within **5 business days** of receipt. Your meeting will be scheduled once this is received.

***

## Section 1 - Business Structure

*We need to understand the full picture of your business entities before the meeting, even if only one entity is in scope for Phase 1. Multi-entity structures affect system configuration, data filtering, and integration design.*

**1.1** How many companies or business entities are in your group? List all of them, even if they will not use MAIA immediately.

> **We have 2 branches, one in KL and another in Penang**

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

> **Same accounting system (Autocount)**

**1.3** Do the entities share the same customer database and item database, or are they separate?

> **Different databases**&#x20;

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?

> **No**

***

## Section 2 - Team & Roles

**2.1** How many people in your company will use MAIA day-to-day? (Approximate is fine.)

> **10**

**2.2** What roles or departments will use the system, and roughly how many people per role?

| Role / Department | Expected MAIA usage based on known narrative                                                                     | Count |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- | ----- |
| Management        | Checking daily sales, generating sales reports and statements, checking staff attendance, checking collections   | 3     |
| Pharmacy          | Checking on orders                                                                                               | 2     |
| Accounts          | Invoicing, pricing, sales reports                                                                                | 4     |
| Admin             | Invoicing, delivery orders, Checking delivery and logistics, pulling out tracking numbers from lalamove and Gdex | 2     |
| Sales             | Invoicing (with approval), price request, statement requests, placing orders                                     | 5     |

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?

> **Mon - Fri 9-6pm, closed on weekends and public holidays**

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?

> **We have 5 sales people in the KL branch and 2 sales people in the Penang branch&#x20;**

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not? (e.g., no mobile access, VPN too slow, system too complex, licensing cost)

> **No, they are not allowed to access the accounting system directly, any queries to be forwarded to the accounts department**

***

## Section 3 - Current Systems & ERP

*This section is critical for integration planning. Please be as specific as possible. It directly affects cost and timeline.*

**3.1** What is your main ERP / accounting system?

**Autocount Vendor contact&#x20;**

**3.2** Have you ever done any integration project with your ERP before? (e.g., connecting it to another system, enabling API access, automated data sync) If yes, describe briefly.

> **No&#x20;**

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features? (e.g., custom approval workflows, custom report templates, custom modules, special data fields) If yes, describe briefly.

> **No**

**3.4** Do multiple users share a single ERP login, or does each user have their own account?

> **1 single login**

**3.5** Does your ERP have a test/UAT environment separate from the live system?

> **No&#x20;**

**3.6** What other systems or tools do you use alongside the ERP?

**3.7** Which of these systems would you want MAIA to connect to?

> **Autocount, Whatsapp, Google Sheets**

***

## Section 4 - Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?

> **1000**

**4.2** How often are new items added? (e.g., 5/month, rarely, constantly)

> **10/month**

**4.3** Do you use product categories, brands, or groupings? If yes, describe briefly.

> **No**

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.

> **Yes, transfers of raw materials between KL and Penang branch**

**4.5** Which of the following apply to your products? (Check all that apply.)

* \[/] Expiry dates / shelf life -&#x20;

* \[/] Batch numbers -

* \[ ] Serial numbers

* \[/] Multiple units of measure (e.g., grams, mg, ml, bottles, tubes, capsules, cartons) -&#x20;

* \[ ] Bundle / kit products (one SKU = multiple items)

* \[/] Product variants (e.g., strength, dosage form, packaging size, route of administration)

* \[ ] Product images are important for identification or quotation documents

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods? If yes, describe what types. (e.g., fish filleting, bulk repackaging into smaller units, assembly)

> **Yes, compounding of raw materials into final medication forms e.g capsules, creams etc**

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed? If yes, how is this tracked today?

> **No, not allowed by law**

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)

* \[ ] One standard price list for all customers

* \[ / ] Multiple price lists / tiers for different customer segments - separate price list between doctors and end customers

* \[ / ] Customer-specific pricing (negotiated per customer)

* \[ / ] Doctor / clinic-specific pricing

* \[ ] Blanket agreements / contract pricing with individual customers

* \[ / ] Volume-based or quantity-based discounts&#x20;

* \[ / ] Discount-based tiers (e.g., Tier 1 = 20% off, Tier 2 = 15% off)

* \[ ] Price varies based on sourcing / import cost at time of order

* \[ ] Other: \_\_\_\_\_\_\_\_



**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?

> **Doctors get a different pricing, customers different. We also have tiers for doctors 10+2, 20+5, 50+15**

**4.10** Where is pricing data maintained today? (Check all that apply.)

* \[ / ] Inside AutoCount

* \[ ] In a separate spreadsheet / Excel file

* \[ ] In the salesperson's or staff's memory / experience

* \[  ] Other: Some pricing still in the old ABSS system

**4.11** How frequently do your costs or selling prices change? (e.g., daily for commodities, monthly, annually, by contract period)

> **Rarely**

**4.12** Is there a person or role responsible for setting or updating prices? If yes, who?

> **Only Dev**

***

## Section 5 - Sales & Order Workflow

*In this section, we are collecting facts about your process, not a detailed walkthrough. The walkthrough happens in the meeting.*

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)

* \[/] WhatsApp (text, voice message, or image)

* \[/] Handwritten prescription&#x20;

* \[ ] Phone call

* \[ ] Walk-in / counter

* \[ ] Customer portal / website

* \[ ] Marketplace (Shopee, Lazada, etc.)

* \[ ] Purchase Order document (PDF, Excel, or other format)

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**5.2** Approximately how many sales orders are processed per day?

> **Averagely 50&#x20;**

**5.3** How many line items does a typical order contain? (e.g., 5-10 items, 20-50 items, 100+)

> **Averagely 3&#x20;**

**5.4** Who creates quotations? Who approves them?

> **Admin creates invoices, accounts approves**

**5.5** Who creates or confirms sales orders? Is there an approval process?

> **Sales will put in orders through whatsapp group. Admin captures and creates invoice**

**5.6** Are there situations where a quotation or order needs special approval? (e.g., large order value, credit limit exceeded, special pricing, non-standard items, new customer)

> **No&#x20;**

**5.7** Do you handle any of the following? (Check all that apply.)

* \[ / ] Customer returns / exchanges

* \[ / ] Credit notes

* \[ ] Debit notes

* \[ ] Advance payments or deposits before delivery

* \[ / ] Partial deliveries (order split across multiple shipments)

* \[ / ] Back orders (items ordered but not currently in stock)

* \[ ] Consignment stock at customer sites

* \[ ] Substitution of alternative items when requested item is out of stock

**5.8** What are the most common reasons your team issues credit notes? (e.g., pricing error, wrong item delivered, early payment discount, quality rejection, wrong serial number)

> **Pricing error**

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?

> **Accounts only**

***

## Section 6 - Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)

* \[ ] Own fleet / in-house drivers

* \[ ] Freelance / contract drivers

* \[ / ] Third-party courier / logistics company - lalamove and Gdex

* \[ ] Customer self-pickup

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?

> **Admin will plan by area and deliver via lalamove in batches&#x20;**

**6.3** Do drivers currently capture proof of delivery (signature, photo)?

> **Yes, in the app**

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?

> **No&#x20;**

**6.5** Is the delivery order and invoice issued at the same time, or separately?

> **At the same time&#x20;**

***

## Section 7 - Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)

* \[ / ] Bank transfer

* \[ / ] Cheque

* \[ ] Cash

* \[ ] Cash on delivery (COD)

* \[ ] Credit terms (net 30, net 60, etc.)

* \[ ] Online payment gateway

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**7.2** How do customers notify you when they have made a payment? (e.g., WhatsApp message to salesperson, email to finance, upload to portal)

> **Whatsapp screenshots of payment slip to whatsapp group**

**7.3&#x20;**&#x44;o you extend credit terms to customers? If yes, what are your standard terms? (e.g., 7 days, 30 days, 60 days)

> **30 days&#x20;**

**7.4** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit? (e.g., order blocked, requires manager approval, warning only)

> **No limit for orders, but restrictions when customers have outstanding payment more than 30 days&#x20;**

**7.5** Is your credit limit enforcement managed inside the AutoCount or tracked manually?

> **Inside Autocount&#x20;**

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how? (e.g., monthly PDF email, manual process)

> **Monthly manual and also PDF&#x20;**

**7.7** What is your e-invoicing status?

* \[ / ] Already compliant and automated (auto-sync to LHDN)

* \[ ] Compliant but manual submission

* \[ ] In progress

* \[ ] Not started

* \[ ] Not applicable

**7.9** Do customers prefer individual invoices per delivery, or consolidated monthly invoices? (Is it a per-customer preference?)

> &#x20;**Invoices per delivery, statement of accounts monthly**

**7.10** Are there any tax exemption scenarios relevant to your business? (e.g., C1, C3, A57 certificates, LMW, export exemptions)

> **No&#x20;**

***

## Section 8 - Documents & Reports

**8.1** Which of the following documents are currently used in your order-to-billing workflow?

**8.2** Are your document templates generated by the ERP's built-in report engine (e.g., Crystal Reports for SAP B1)? If yes, which documents?

> **Invoices, delivery orders, purchase orders generated by AutoCount**

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require? (e.g., PO reference, project number, company registration, specific logo placement) Write "to discuss" if easier to show in the meeting.

> **Just our logo on the documents&#x20;**

**8.4** What reports do you look at regularly? (e.g., daily sales summary, outstanding AR aging, stock movement, salesperson performance)

> **Daily sales, daily payments&#x20;**

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?

> **Known answer:** Finished-goods inventory/reserved stock visibility and SOA/customer document links are known customization areas.
>

***

## Section 9 - Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?

> **Regular**

**9.2** Would you want MAIA to help your internal team via WhatsApp? (e.g., sales staff creating orders through chat, drivers receiving trip details, payment proof forwarding)

> **Known answer:** MAIA is expected to support internal staff through WhatsApp for prescription/order forwarding, price questions, draft review, payment evidence, and workflow status.

**9.3** What primary languages does your team use in daily operations? (e.g., English, Malay, Chinese - specify Mandarin/Cantonese if relevant)

> **English**

**9.4** What primary languages do your customers communicate in?

> **English**

***

## Section 10 - Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve? (In your own words, be as specific as possible.)

| Priority | Known problem from narrative                                                                                                                                  | Custom Medz confirmation / ranking |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| 1        | Messy prescription and order intake through WhatsApp, including inconsistent message formats, photos, handwritten prescriptions, and follow-up clarifications | **Custom Medz to confirm**         |
| 2        | Important delivery remarks and customer-specific handling instructions are not carried forward consistently                                                   | **Custom Medz to confirm**         |
| 3        | Payment slips, payment dates, payment amounts, and unresolved balances need clearer visibility and follow-up                                                  | **Custom Medz to confirm**         |
| 4        | Management has limited visibility because workflow status is spread across WhatsApp, manual checking, and staff memory                                        | **Custom Medz to confirm**<br />   |
| 5        |                                                                                                                                                               |                                    |

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?

> &#x20;Manual interpretation of prescriptions/order requests, checking customer/item/pricing information, preserving remarks, and following up on payments.
> &#x20;

**10.3** Is there anything that currently "falls through the cracks" - orders missed, documents lost, follow-ups forgotten?

> **Your Answer: Missed orders, Mistakes in generated invoices**

**10.4** What kind of information is usually included in delivery remarks or customer-specific handling instructions that must be carried forward? (e.g., receiving hours, lunch break closures, delivery contact person, special address instructions, patient-specific handling notes, payment or document remarks)

> **Known answer:** Some customers have special receiving times, early lunch closures, or other handling expectations that may be communicated verbally or remembered informally.
>

**10.5** If MAIA could only do one thing for your business, what would it be?

> **Known answer:** Phase 1 focus is turning messy WhatsApp prescription/order intake into a structured staff-reviewed draft workflow with backend visibility.
>

**10.6** Is there anything your team currently does outside the ERP system (in WhatsApp, spreadsheets, paper, or memory) that you believe should be in a system? Describe briefly.

> **Your Answer: To discuss**

***

## Section 11 - Data Readiness

**11.1** Can you provide the following data in Excel or CSV format?

**11.2** Do you want historical transaction data (old orders, invoices, etc.) available inside MAIA, or are you comfortable starting fresh with forward-only data?

* \[ ] Forward-only (new transactions from go-live onwards) — *standard*

* \[ ] Want historical data migrated — Approximate date range: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

* \[ ] Unsure — to discuss

> *Note: Historical data migration is a separate scope item. We will assess feasibility and cost based on the volume and quality of your data.*

***

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline? (e.g., tied to a contract, season, audit, or event)

> **As soon as MAIA is matured enough to be implemented officially**

**12.2** Who from your team will be the **internal project owner** — the day-to-day contact during onboarding? (Ideally someone operational who understands the daily workflow, not only a department head.)

**12.3** Who will be the **decision-maker** if we need approvals during setup? (e.g., on workflows, permissions, integrations, scope decisions)

**12.4** Are there any upcoming events that might affect your availability during onboarding? (e.g., holidays, audits, travel, peak season)

> **Your Answer:&#x20;**



***

## What Happens Next

Once you return this questionnaire and the sample data items, we will:

1. Review your responses and prepare a focused agenda for the deep-dive meeting.

2. Schedule Meeting 1 (business workflow deep-dive) — approximately 1.5 to 2.5 hours.

3. Schedule Meeting 2 (IT/integration scoping with your AutoCount vendor if required)&#x20;

4. Begin data collection and AutoCount access setup in parallel.

**Please return this document to:** JunYan
**Questions about any item?** Do message us in the group chat. We're happy to clarify.

***

*MAIA by Mindhive - Custom Medz MAIA Onboarding Questionnaire*

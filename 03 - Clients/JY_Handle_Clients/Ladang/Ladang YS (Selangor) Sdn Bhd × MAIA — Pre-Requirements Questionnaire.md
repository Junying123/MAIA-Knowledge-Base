> **To be completed before the deep-dive meeting.**
>
> &#x20;For anything unclear, write **"unsure"** or **"to discuss"**  do not leave it blank

***

**Client Name:** Ladang YS (Selangor) Sdn. Bhd.&#x20;

**Completed By:**  *(Name / Role)*

**Date:**&#x20;



***

## Section 1 — Business Structure

*We need to confirm the legal and operational structure before setup. This affects how MAIA handles user access, documents, and SQL Accounting integration.*

How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

> *few accounting software & share*

**1.3** Do the entities share the same customer database and item database, or are they separate?

> *separate*

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?

> Yes, Singapore (CMM MARKETING MANAGEMENT PTE LTD)

***

## Section 2 — Team & Users

*This helps us set up the right user roles and WhatsApp workflow access in MAIA.*

**2.1** How many people in your company will use MAIA day-to-day? (Approximate is fine.)

> *(Your answer here)*

**2.2** What roles or departments will use the system, and roughly how many people per role?

***

**2.3** Do any staff work in the field (e.g., outdoor sales, drivers, farm workers)? If yes, list their roles and whether they'll need MAIA access.

> *Yes, drivers will need to access MAIA for invoice and delivery record.*

***

**2.4** What are your standard operating hours? Do you operate on weekends or public holidays?

> * *5am until 9pm (special case for lotus and singapore)*
>
> * Yes, we operate on weekends and also public holidays for internal. 7am - 6pm
>

***

## Section 3 — Current Systems

*This section is critical for SQL Accounting integration. Please be as specific as possible.*

**3.1** You are currently using **SQL Accounting**. Please confirm:

**SQL Vendor contact&#x20;**

***

**3.2** You currently use **Google Sheets** to compile orders before keying into SQL. Please describe what your Google Sheet looks like — what columns/fields does it capture?

> Orders received by WhatsApp, the sales team will be entered into a Google Form. After the order is generated in Google Sheets, the data will be copied into the daily sales sheet for production processing and invoice generation.
>
>
> 1. Order fill in google form
>
> ![](<images/Ladang YS (Selangor) Sdn Bhd × MAIA — Pre-Requirements Questionnaire-1. Order fill in google form..png>)

2. All order will generate in google sheet.

![](<images/Ladang YS (Selangor) Sdn Bhd × MAIA — Pre-Requirements Questionnaire-image-1.png>)

* We will sort the order based on the delivery date.

![](<images/Ladang YS (Selangor) Sdn Bhd × MAIA — Pre-Requirements Questionnaire-image.png>)

* Next step will be key orders in SQL and keep the document in the google sheet for reference.

***

**3.3** Have you done any integration with SQL Accounting before (e.g., connecting it to another app, exporting data automatically)? If yes, describe briefly.

> No

***

**3.4** Are there any customizations in your SQL Accounting that are not standard out-of-the-box? (e.g., custom report templates, custom fields, special modules - Not too sure

***

**3.5** Besides SQL Accounting and Google Sheets, what other tools does the team use day-to-day?

***

**3.6** Which B2B portals do your hypermart customers use to place orders? (e.g., Aeon, Mydin, or others) Please list the portal names and the customers that use them.

***

## Section 4 — Products & Inventory

*MAIA needs to identify your products accurately from WhatsApp messages and customer POs. The more detail here, the better MAIA can be configured.*

**4.1** Please list all your active product types/SKUs. Include the internal code you use in SQL Accounting and any common names customers use when ordering.

***

**4.2** Do your products have any of the following? *(Check all that apply)*

* \[/ ] Expiry dates / shelf life ← *important for coconut freshness tracking*

* \[/] Batch or lot numbers

* \[/ ] Multiple units of measure (e.g., ordered by piece but delivered by carton or crate)

* \[/ ] Weight-based pricing or selling (e.g., priced per kg)

* \[/ ] Product variants (e.g., size grading, cut type)

* \[/ ] Product images are important for identification

***

**4.3** When coconuts are rejected or cannot be sold fresh (e.g., overripe), what happens to them? (e.g., sold to manufacturers, written off as wastage, transferred) How is this tracked today?

> Create an end product such as water in a can, coconut bottle 1.5L, ice cream, Coconut Milk, Grated Coconut, Coconut flesh.

***

**4.4** How do you currently track stock levels? *(Check all that apply)*

* \[ ] Inside SQL Accounting

* \[/] In a Google Sheet

* \[/] Physically counted at the warehouse / farm

* \[ ] Not formally tracked

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**4.5** Approximately how many total active SKUs do you carry?

> 50

***

**4.6** How often are new products or SKUs added? (e.g., rarely, a few per month)

> a few per month

***

## Section 5 — Pricing

*MAIA will check pricing from SQL Accounting during order processing. We need to understand your pricing structure to configure this correctly.*

**5.1** How do you manage pricing? *(Check all that apply)*

* \[ ] One standard price list for all customers

* \[/ ] Different prices per customer type (e.g., hypermart vs. small buyer)

* \[/ ] Negotiated price per individual customer

* \[/ ] Price varies based on coconut quality, size, or market rate

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**5.2** If you have customer-specific pricing, how many customers have their own agreed price? Approximately how many price tiers or custom prices are there?

> Case by case basis

***

**5.3** Where is pricing maintained today? *(Check all that apply)*

* \[/ ] Inside SQL Accounting

* \[ ] In a Google Sheet

* \[/ ] In the owner's memory

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**5.4** How often do your prices change? (e.g., weekly based on market, monthly, by contract period)

> Yearly

***

**5.5** Who is responsible for setting or updating prices?

> Management

***

## Section 6 — Sales & Order Workflow

*This section confirms how orders move from the customer to a confirmed invoice. The meeting will walk through this in detail — we just need the high-level facts here.*

**6.1** You've confirmed orders arrive mainly via **WhatsApp** and **B2B portal PO**. For each channel, who in your team receives the order?

***

**6.2** Approximately how many orders, POs, or invoices are processed per **week**? (The proposal mentions \~100/week — please confirm or correct.)

> Correct

***

**6.3** How many line items does a typical order contain? (e.g., 1–3 items, 5–10 items)

> 1-5

***

**6.4** When a customer sends a WhatsApp order, the product name often doesn't match your internal SKU name exactly. How many mismatches or unclear items do you typically encounter per order? Can you give an example of a customer product name vs. your actual SKU name?

> Example; In SQL it is Uncut coconut but for customers it is raw coconut

***

**6.5** Who currently creates the invoice in SQL Accounting? Is there any approval required before it's issued?

> Account & Sales Team. No approval inquiry.

***

**6.6** You mentioned wanting the **Delivery Order (DO) and Invoice combined into one document**. Can you describe or show a sample of what this combined document should look like? Please attach a sample if possible.

(Drag & drop file here)&#x20;





***

**6.7** Do you handle any of the following? *(Check all that apply)*

* \[/] Partial deliveries (one order split across multiple trips)

* \[/] Back orders (item ordered but not in stock, fulfilled later)

* \[ ] Product substitution (different coconut type when requested one is unavailable)

* \[/ ] Customer returns or rejections after delivery

* \[/] Credit notes

* \[/ ] Advance payments or deposits before delivery

***

**6.8** Are there situations where an order needs special handling or approval before issuing? (e.g., new customer, very large order, customer with outstanding balance)

> Yes&#x20;

***

## Section 7 — Delivery & Logistics

**7.1** How do you deliver goods to customers? *(Check all that apply)*

* \[/] Own lorry / in-house driver

* \[ ] Freelance / contract driver

* \[/] Third-party courier or logistics company

* \[/] Customer self-pickup

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**7.2** Do you currently plan delivery routes or group deliveries by area? If yes, how is this done today?

> Yes

***

**7.3** Do drivers currently capture any proof of delivery — e.g., customer signature, photo of goods received?

> Yes, they do.



***

***

**7.5** Is the delivery order issued at the same time as the invoice, or separately?

> Yes issue delivery order at the same time.

***

## Section 8 — Finance & Payments

**8.1** What payment methods do your customers use? *(Check all that apply)*

* \[x ] Bank transfer

* \[x ] Cash

* \[x ] Cash on delivery (COD)

* \[ ] Cheque

* \[x ] Credit terms (invoice now, pay later)

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**8.2** Do you extend credit terms to customers? If yes, what are the standard terms? (e.g., 7 days, 30 days)

>

***

**8.3** Do you set credit limits per customer? What happens when a customer exceeds their limit — is the order blocked, or just flagged?

> Yes, SQL can not generate invoice and delivery order.

***

**8.4** You mentioned customers send **payment slips via WhatsApp**. Who receives these slips today, and what do they do with them? (e.g., forward to finance, update SQL manually)

> sales team forward to finance & finance update SQL next working day

***

**8.6** What is your **e-invoicing (MyInvois / LHDN)** status?

* \[ ] Already live and fully automated

* \[x] Compliant but submitted manually

* \[ ] In progress

* \[ ] Not started yet

* \[ ] Not applicable

***

**8.7** Do B2B customers prefer individual invoices per delivery, or a consolidated monthly invoice?

> individual invoices per delivery

***

## Section 9 — Documents & Templates

*We need your actual document samples to configure MAIA's document flow correctly. Please prepare these before the meeting.*

**9.1** What documents do you currently issue to customers? *(Check all that apply)*

* \[ ] Quotation

* \[ ] Sales order confirmation

* \[/] Delivery Order (DO)

* \[/] Invoice

* \[/] Combined DO + Invoice *(as requested)*

* \[/] Credit note

* \[ ] Payment receipt

* \[/] Statement of Account (SOA)

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**9.3** Are there specific fields your customers or hypermarts require on your documents? (e.g., their PO reference number, project code, company registration, specific logo placement)

> Purchase order number only.

***

**9.4** Please attach **3–5 sample transaction documents** — these are critical for the meeting. Examples:

* A recent customer WhatsApp order message (screenshot is fine)

* A sample B2B portal PO (PDF or screenshot)

* A sample invoice from SQL Accounting

* A sample delivery order

* Your Google Sheet order log (a screenshot or export)

> *(Note which samples are attached here)*

***

## Section 10 — WhatsApp & Communication

**10.1** Do you have a **WhatsApp Business account**? If yes, is it:

* \[/] Regular WhatsApp Business app (free, personal phone number)

* \[ ] WhatsApp Business API / WABA (connected to a business platform)

* \[ ] Not sure

***

**10.2** What phone number(s) does your business currently use to receive customer orders on WhatsApp?

> 0163327872 (Carey's Coconut)

***

**10.3** What languages does your team use day-to-day when handling orders? *(Check all that apply)*

* \[/] English

* \[/] Bahasa Malaysia

* \[/] Mandarin

* \[/] Cantonese

* \[ ] Other: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

***

**10.4** What languages do your customers primarily communicate in?

> Malay, English & Mandarin/Cantonese

***

## Section 11 — Pain Points & Priorities

*Please be as specific and honest as possible here. This directly shapes how we configure MAIA for your business.*

**11.1** The three main problems we understand you want MAIA to solve are:

1. Eliminate manual WhatsApp → Google Sheets → SQL triple-handling

2. Reduce dependency on the owner for order processing and follow-up

3. Get clearer visibility over pending orders, stock, and payments

Is this accurate? Are there any other problems or priorities we've missed?

>

***

**11.2** What currently takes the most time in your daily operations that you wish was faster or easier?

> Creating invoice and delivery order, also credit note.&#x20;

***

**11.3** Is there anything that currently **"falls through the cracks"** — orders missed, payments not followed up, documents lost, items expiring unnoticed?

> Yes, for example, like inv miss out or customer change ordering last min.

***

**11.4** If MAIA could only do **one thing** for your business right now, what would it be?

> Besides invoice, delivery order and credit note. MAIA helps in terms of stock cart data based on daily sales.&#x20;

***

**11.5** Is there anything your team currently does in **WhatsApp, Google Sheets, or from memory** that you feel should be in a proper system?

> Stock raw mat in and produce out to the customer.

***

## Section 12 — Data Readiness

*MAIA needs clean reference data to check customers, items, pricing, and stock during order processing. Please prepare these before onboarding begins.*

**12.1** Can you provide the following in Excel or CSV format? *(Check all you can provide)*

* \[ ] Customer list (company name, contact person, phone, email, address, credit terms, credit limit)

* \[ ] Product / SKU list (code, name, description, unit of measure, active/inactive status)

* \[ ] Price list(s) — standard and/or customer-specific

* \[ ] Current stock balances (item, quantity, expiry date if tracked)

* \[ ] Expiry / batch data if tracked

***

**12.2** For each item checked above, who in your team will prepare this data, and by when?

***

**12.3** Do you want **historical transaction data** (old orders, invoices) available inside MAIA, or are you comfortable starting fresh from go-live?

* \[ ] **Start fresh** — new transactions from go-live onwards *(standard, recommended)*

* \[/] **Want historical data migrated** — approximate date range: \_\_\_\_\_JAN2026 onwards\_\_\_\_\_\_\_\_\_\_

* \[ ] **Unsure** — to discuss in meeting

> *Note: Historical data migration is a separate scope item and will be assessed for feasibility and cost based on data volume and quality.*

***

## Section 13 — Timeline & Project Ownership

**13.1** Is there a target go-live date or hard deadline for MAIA to be operational? (e.g., tied to a peak season, contract, or audit)

> *(Your answer here)*

***

**13.2** Who from your team will be the **day-to-day contact** (internal PIC) during onboarding? This should be someone who understands the daily workflow — ideally not only a department head.

***

**13.3** Who is the **final decision-maker** if approvals are needed during setup? (e.g., on workflows, document formats, integration scope)

***

**13.4** Are there any upcoming events that might affect your team's availability during onboarding? (e.g., peak harvest season, public holidays, travel, audit period)

> *(Your answer here)*

***

## What Happens Next

Once you return this questionnaire and the sample documents, Mindhive will:

1. Review your responses and prepare a focused agenda for the deep-dive meeting

**Please return this document and all sample files to:** Brendan Ou Yong

Questions about any item? Reply directly — we're happy to clarify before the meeting.

---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
client: Macrofood
---

_Pre-filled by AutorunBiz PLT based on our sales discussion. Please review, correct, and complete any item marked **[Client to confirm]**._

---

**Client Name:** Macro Frozen / Macro Food
**Completed By:** AutorunBiz PLT (draft — awaiting client review)
**Date:** 2026-05-20
**Account Manager:** Jeremy

---

## How to Use This Document

This draft is pre-filled from our sales discussion so your team only needs to:

- confirm what is already captured
- correct anything inaccurate
- fill in all items marked **[Client to confirm]**

If a question does not apply, please write `N/A`.

---

## Section 1 — Business Structure

**1.1** How many companies or business entities are in your group?

| Entity / Company Name | Business Type | In Scope for MAIA? |
|---|---|---|
| Macro Frozen / Macro Food | Food distribution / frozen food / meat distribution | Yes |
| **[Client to confirm if there are other related entities]** | **[Client to confirm]** | **[Client to confirm]** |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?
Our discussion confirmed the system is SQL Accounting.
> **[Client to confirm whether all entities share the same SQL instance or each has its own]**

**1.3** Do the entities share the same customer database and item database, or are they separate?
> **[Client to confirm | State whether customer database is shared or separate by entity | State whether item database is shared or separate by entity]**

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

| Location Name | Type (office / warehouse / both) | Entity It Belongs To |
|---|---|---|
| **[Client to confirm]** | **[Client to confirm]** | Macro Frozen |

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities?
> **[Client to confirm | State whether multiple currencies are used | List currencies used | State which entity uses each currency]**

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day?
> **[Client to confirm total user count]**

**2.2** What roles or departments will use the system, and roughly how many people per role?

| Role / Department | Number of People | Key Responsibilities |
|---|---|---|
| Order Processing / Admin | 1 (confirmed in our discussion — 1 person keys all 700 orders/month into SQL) | WhatsApp order intake, keying Sales Orders and invoices into SQL |
| Sales | **[Client to confirm headcount]** | Customer relationship, lead follow-up, forwarding orders to admin |
| Sales Manager | 1 (confirmed in our discussion) | Oversees sales team, approvals |
| Finance / AR | **[Client to confirm]** | Payment slip processing, AR reconciliation |
| Warehouse | **[Client to confirm]** | Stock entry, GRN, fresh weight confirmation before invoicing |
| Drivers / Delivery | **[Client to confirm]** | Delivery, proof of delivery capture |
| Management / Owner | 1 | Final decision-maker on pricing, scope, approvals |

**Please confirm headcount per role and add any missing roles.**

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?
> **[Client to confirm | State normal operating hours | State whether you operate on weekends | State whether you operate on public holidays]**

**2.4** Do any of your staff work in the field? If yes, which roles?
Yes — outdoor salespeople need to query customer info and outstanding balances while away from the office.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not?
Currently, outdoor salespeople rely on calling the office or WhatsApp to check customer and outstanding information. ERP access on the go is not available.
> **[Client to confirm | State whether this is still accurate | Explain any current mobile or remote ERP access method if available]**

---

## Section 3 — Current Systems & ERP

**3.1** What is your main ERP / accounting system?

| | Your Answer |
|---|---|
| System name | SQL Accounting — confirmed in our discussion |
| Version number | **[Client to confirm]** |
| Hosting | **[Client to confirm — on-premise or cloud]** |
| Managed by | **[Client to confirm — internal IT or outsourced vendor]** |
| Vendor company name | **[Client to confirm]** |
| Vendor contact person | **[Client to confirm]** |

**Note:** We may need to coordinate with your SQL vendor for integration. Please provide vendor contact details so we can include them in the technical scoping discussion.

**3.2** Have you ever done any integration project with your ERP before?
> **[Client to confirm | State whether you have done ERP integrations before | List the systems involved | Briefly describe the integration if yes]**

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box?
Our discussion referenced a fresh weight billing workflow where final quantity and price are only confirmed after warehouse preparation — this may require non-standard document flows.
> **[Client to confirm what is standard vs customised in your current SQL setup]**

**3.4** Do multiple users share a single ERP login, or does each user have their own account?
> **[Client to confirm | State whether users share logins or have individual accounts | Add any role-based access limitations if relevant]**

**3.5** Does your ERP have a test/UAT environment separate from the live system?
> **[Client to confirm | State whether a separate test or UAT environment exists | State whether testing must be done in the live environment if no]**

**3.6** What other systems or tools do you use alongside the ERP?

| Function | Current Tool | Managed By |
|---|---|---|
| Order intake | WhatsApp | Internal |
| Customer communication | WhatsApp | Internal |
| Internal team communication | WhatsApp | Internal |
| Inventory / stock management | SQL Accounting | Internal / Vendor |
| Document storage / filing | **[Client to confirm]** | **[Client to confirm]** |
| Reporting / dashboards | **[Client to confirm]** | **[Client to confirm]** |
| Pricing management | Excel / SQL (confirmed in our discussion) | **[Client to confirm]** |
| Product catalogue | Manual image shared via WhatsApp (confirmed in our discussion) | Internal |

**3.7** Which of these systems would you want MAIA to connect to?
SQL Accounting is the primary integration required — for customers, items, pricing, stock, Sales Orders, Delivery Orders, invoices, payment records, and outstanding balances.
> **[Client to confirm | Confirm SQL Accounting is the main integration system | List any other systems MAIA should connect to]**

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?
MAIA will operate as an assistant layer on top of your existing SQL system. Your accounting system will remain in use.
> **[Client to confirm | List any tools that will be replaced | List any manual processes that should stop once MAIA is live]**

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?
> **[Client to confirm | Provide approximate SKU count]**

**4.2** How often are new items added?
> **[Client to confirm | State how often new items are added]**

**4.3** Do you use product categories, brands, or groupings?
Yes — our discussion confirmed products are categorised by meat type: pork, chicken, duck, beef, and lamb.
> **[Client to confirm full category list and whether sub-categories by cut or packaging exist]**

**4.4** Do you manage stock across multiple warehouses or locations?
> **[Client to confirm | List all warehouse and storage locations]**

**4.5** Which of the following apply to your products?

- [x] Expiry dates / shelf life — yes (frozen and fresh meat products have shelf life considerations)
- [ ] Batch numbers — **[Client to confirm if batch tracking is used in SQL]**
- [ ] Serial numbers — N/A
- [x] Multiple units of measure — yes (weight-based; orders placed by piece or carton but billed by actual kg after warehouse weighing — confirmed in our discussion)
- [ ] Bundle / kit products — **[Client to confirm]**
- [x] Product variants — yes (different cuts of the same meat type, e.g., belly pork — confirmed in our discussion)
- [x] Product images are important — yes (weekly price catalogue image to be sent to customers is a requested feature)

**Please confirm or adjust the above.**

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials?
Yes — meat products are cut, weighed, and packed before fulfillment. Final weight is only confirmed after warehouse preparation. This directly affects when the final invoice amount can be issued.

**4.7** Do salespeople ever "reserve" stock for specific customers before a confirmed order is placed?
> **[Client to confirm | State whether stock is reserved before confirmed order | Describe how the reservation is tracked today if yes]**

### Pricing

**4.8** How do you manage pricing?

- [ ] One standard price list for all customers
- [x] Customer-specific pricing — confirmed in our discussion
- [ ] Multiple price lists / tiers for different customer segments
- [ ] Volume-based or quantity-based discounts
- [x] Price varies based on sourcing / import cost at time of order — confirmed in our discussion (prices fluctuate based on import/supply)
- [ ] Other: **[Client to confirm if there are additional pricing methods]**

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?
> **[Client to confirm | Describe pricing structure | State number of price tiers or lists if applicable]**

**4.10** Where is pricing data maintained today?

- [x] Inside the ERP system
- [x] In a separate spreadsheet / Excel file — confirmed in our discussion
- [ ] In the salesperson's memory / experience
- [ ] Other: **[Client to confirm]**

**4.11** How frequently do your costs or selling prices change?
Prices change frequently due to commodity sourcing and import costs. A Price Update Assistant is in scope to manage bulk price updates.
> **[Client to confirm typical update frequency — e.g., weekly, daily for certain items]**

**4.12** Is there a person or role responsible for setting or updating prices?
> **[Client to confirm | State who controls pricing decisions | State who updates prices in the system]**

---

## Section 5 — Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive?

- [x] WhatsApp (text, voice message, or image) — primary channel, confirmed in our discussion
- [ ] Email
- [x] Phone call — confirmed in our discussion; some customers call directly
- [ ] Walk-in / counter
- [ ] Customer portal / website
- [ ] Marketplace (Shopee, Lazada, etc.)
- [ ] Purchase Order document (PDF, Excel, or other)
- [ ] Other: **[Client to confirm if any other channels are used]**

**5.2** Approximately how many sales orders are processed per day?
700 orders/month confirmed in our discussion. Wholesale customers order approximately once per week; retail customers approximately 1–2 times per week. All 700 orders are currently keyed by 1 person.
> **[Client to confirm | State whether current order volume is still accurate | Provide updated daily or monthly volume if changed]**

**5.3** How many line items does a typical order contain?
> **[Client to confirm | Provide typical number of line items per order | Provide a usual range if it varies]**

**5.4** Who creates quotations? Who approves them?
> **[Client to confirm | State whether quotations are used regularly | State whether workflow goes directly to Sales Order or Proforma Invoice instead]**

**5.5** Who creates or confirms sales orders? Is there an approval process?
1 admin person currently keys all orders from WhatsApp into SQL and generates Delivery Orders and invoices — confirmed in our discussion.
> **[Client to confirm | State who approves exception cases | List examples such as overdue balances or special pricing]**

**5.6** Are there situations where a quotation or order needs special approval?
Yes — discussed in our meeting. Scenarios include customers with overdue balances, special pricing requests, or non-standard orders.
> **[Client to confirm | List all approval trigger scenarios]**

**5.7** Do you handle any of the following?

- [ ] Customer returns / exchanges — **[Client to confirm]**
- [x] Credit notes — yes (in scope)
- [ ] Debit notes — **[Client to confirm]**
- [ ] Advance payments or deposits before delivery — **[Client to confirm]**
- [x] Partial deliveries — yes (weight-based fulfillment; final weight confirmed after warehouse preparation)
- [ ] Back orders — **[Client to confirm]**
- [x] Consignment stock at customer sites — yes, confirmed in our discussion; large customers are on consignment arrangements
- [ ] Item substitution — **[Client to confirm]**

**Please confirm or adjust the above.**

**5.8** What are the most common reasons your team issues credit notes?
> **[Client to confirm | List the most common credit note reasons | Examples: weight discrepancy, pricing correction, returns]**

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?
> **[Client to confirm | State whether salespeople can create credit notes | State whether finance approval or finance-only access is required]**

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers?

- [x] Own fleet / in-house drivers — confirmed in our discussion
- [ ] Freelance / contract drivers — **[Client to confirm]**
- [ ] Third-party courier / logistics company — **[Client to confirm]**
- [ ] Customer self-pickup — **[Client to confirm]**
- [ ] Other: **[Client to confirm]**

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?
Currently done manually. Our discussion confirmed interest in grouping orders by delivery area (e.g., all orders in one area per trip) so drivers can be assigned by zone.
> **[Client to confirm | Describe current routing process | State number of delivery zones or areas]**

**6.3** Do drivers currently capture proof of delivery (signature, photo)?
Currently drivers collect a signature on the Delivery Order. Our discussion confirmed interest in having drivers send a photo of the signed DO so it can be stored against the Sales Order as proof of delivery.
> **[Client to confirm | Describe current proof-of-delivery process | State whether photo capture is practical for drivers]**

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?
Yes — confirmed in our discussion. Smaller customers pay COD. Some customers have requested bank transfer instead and delayed payment.
> **[Client to confirm | Describe COD reconciliation process | State who is responsible for reconciliation]**

**6.5** Is the delivery order and invoice issued at the same time, or separately?
Separately — confirmed in our discussion. Final weight is only known the morning after goods are collected and weighed. The Delivery Order is prepared first; the final invoice is issued after weight confirmation.
> **[Client to confirm | Describe the exact document sequence used today]**

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use?

- [x] Bank transfer — confirmed in our discussion
- [ ] Cheque — **[Client to confirm]**
- [ ] Cash — **[Client to confirm]**
- [x] Cash on delivery (COD) — yes, confirmed in our discussion (smaller customers)
- [x] Credit terms — yes, confirmed in our discussion (large customers on consignment / credit)
- [ ] Online payment gateway — **[Client to confirm]**
- [ ] Other: **[Client to confirm]**

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms?
Yes — credit and outstanding visibility is a key workflow requirement.
> **[Client to confirm | State standard credit terms | Examples: 30 / 60 / 90 days]**

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit?
Our discussion referenced a bad debt case where a customer owed a significant overdue amount and was unable to pay. Outstanding tracking is done in SQL.
> **[Client to confirm | State whether formal credit limits are set in SQL | State what happens when a customer exceeds the limit | Examples: blocked, flagged for approval, warning only]**

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?
Outstanding tracking is in SQL but collection escalation is handled manually.
> **[Client to confirm | State whether SQL enforces credit blocks | State whether SQL only reports outstanding balances]**

**7.5** How do customers notify you when they've made a payment?
Customers send payment slips via WhatsApp to the salesperson or admin team. This is a key pain point — an AR support workflow is in scope to process payment slips and match them to invoices.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how?
> **[Client to confirm | State whether you send Statements of Account | State how often they are sent | State how they are sent]**

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated (auto-sync to LHDN)
- [ ] Compliant but manual submission
- [ ] In progress
- [ ] Not started
- [ ] Not applicable

> **[Client to confirm | Tick the applicable e-invoicing status option]**

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices?
> **[Client to confirm | State whether customers prefer individual invoices per delivery or consolidated monthly invoices]**

**7.9** Are there any tax exemption scenarios relevant to your business?
> **[Client to confirm | List any tax exemption scenarios relevant to your business]**

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers?

- [ ] Quotation — **[Client to confirm if quotations are used regularly]**
- [x] Proforma invoice — confirmed in our discussion
- [x] Sales order confirmation
- [x] Invoice
- [x] Delivery order / delivery note
- [ ] Pick list (internal) — **[Client to confirm]**
- [x] Credit note
- [ ] Debit note — **[Client to confirm]**
- [ ] Payment receipt — **[Client to confirm]**
- [ ] Statement of Account (SOA) — **[Client to confirm]**
- [ ] Other: **[Client to confirm]**

**Please confirm or adjust the above, and bring sample PDFs to the first meeting.**

**8.2** Are your document templates generated by the SQL built-in report engine? If yes, which documents?
> **[Client to confirm | State which SQL-generated document templates are in use | State whether any templates are custom-designed]**

**8.3** Are there specific fields, references, or formatting your customers or regulators require on documents?
> **[Client to confirm | List any required document fields, references, or formatting | Bring sample documents to the first meeting]**

**8.4** What reports do you look at regularly?
> **[Client to confirm | List the reports you review regularly | Examples: daily order summary, AR aging, outstanding balances, stock movement]**

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?
Price update management and AR reconciliation were referenced as manual processes in our discussion.
> **[Client to confirm | List all reports or analyses currently built manually in Excel that should be automated]**

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account? Is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?
One sales WhatsApp number is used as the main contact for all customers — confirmed in our discussion. Customers message this number directly (1-to-1).
> **[Client to confirm | State whether this is WhatsApp Business App or WABA | State who manages the account]**

**9.2** Would you want MAIA to communicate with your customers via WhatsApp?
Our discussion confirmed interest in a customer-facing chatbot on the sales number to handle enquiries and product updates. A weekly price catalogue blast via WhatsApp was also discussed.
> **[Client to confirm | List customer-facing features needed in Phase 1 | List features that can wait until later phases]**

**9.3** Would you want MAIA to help your internal team via WhatsApp?
Yes — this is the core interaction model. Staff input orders, payment slips, and GRN photos through WhatsApp; MAIA processes and presents summaries for staff confirmation before any record is created.

**9.4** What primary languages does your team use in daily operations?
Mandarin is the primary language. Mixed usage of Mandarin, English, and Malay is expected day-to-day.
> **[Client to confirm | State preferred language for system training | State preferred language for onboarding communication]**

**9.5** What primary languages do your customers communicate in?
Mandarin and mixed Chinese dialects are expected. Voice messages may include informal dialect terms.
> **[Client to confirm | State the main languages or dialects your customers use]**

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve?

1. **Manual order entry** — all 700 orders/month are currently keyed manually from WhatsApp into SQL by 1 person. The priority is for Sales Orders to be created automatically and pushed directly into SQL.
2. **Fresh weight adjustment** — final weight and price are only confirmed the morning after warehouse collection. The invoice cannot be issued at the point of order because the price fluctuates based on sourcing. A manual update step is required before final documents can be generated.
3. **AR and payment collection** — customers send payment slips via WhatsApp; matching them to invoices is manual and error-prone. Outstanding balances are tracked in SQL but collection follow-up is managed manually.

**Please confirm or add your own priority items.**

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?
Manual order keying into SQL. Fresh weight update before Delivery Order and invoice. Chasing overdue payments.
> **[Client to confirm | Confirm whether these are still the main time-consuming tasks | Add any others]**

**10.3** Is there anything that currently "falls through the cracks"?
Our discussion confirmed that sales leads are shared into a WhatsApp group but there is no system to track whether sales staff follow up with each lead.
> **[Client to confirm | List other things that currently fall through the cracks]**

**10.4** If MAIA could only do one thing for your business, what would it be?
Based on our discussion, the top stated priority was: Sales Orders going directly from WhatsApp into SQL without manual re-entry.
> **[Client to confirm | State whether this is still the single top priority]**

**10.5** Is there anything your team currently does outside the ERP system (WhatsApp, spreadsheets, paper, memory) that should be in a system?
Yes — confirmed in our discussion:
- WhatsApp order intake and daily order sharing with the warehouse team
- Payment collection tracking and overdue account management
- Sales lead assignment and follow-up tracking
- Weekly price and product catalogue distribution to customers
- Delivery route planning by area
- Proof of delivery capture by drivers

> **[Client to confirm | Confirm the listed outside-ERP activities | Add any additional items that should be in a system]**

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format?

- [x] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit)
- [x] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive)
- [x] Price list(s) — standard and/or customer-specific
- [x] Current stock balances (item, warehouse, quantity)
- [ ] Supplier list — **[Client to confirm if relevant for your stock receiving / GRN workflow]**

**11.2** For each item checked above, who in your team will prepare this data?

| Data Item | Person Responsible | Estimated Ready By |
|---|---|---|
| Customer list | **[Client to confirm]** | **[Client to confirm]** |
| Product / item list | **[Client to confirm]** | **[Client to confirm]** |
| Price list(s) | **[Client to confirm]** | **[Client to confirm]** |
| Current stock balances | **[Client to confirm]** | **[Client to confirm]** |

**11.3** Please provide 3–5 sample transaction documents.
Please bring the following to the first meeting:
- A recent Sales Order
- A Delivery Order
- An Invoice
- A sample payment slip (can be anonymised)
- A sample WhatsApp order message from a customer

**11.4** Do you want historical transaction data available inside MAIA, or are you comfortable starting fresh?

- [x] Forward-only (new transactions from go-live onwards) — recommended for Phase 1
- [ ] Want historical data migrated — Approximate date range: **[Client to confirm if applicable]**
- [ ] Unsure — to discuss

_Note: Historical data migration is a separate scope item. We will assess feasibility and cost based on volume and data quality._

---

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline?
> **[Client to confirm | State target go-live timing | State whether there is a hard deadline]**

**12.2** Who from your team will be the internal project owner — the day-to-day contact during onboarding?

| Name | Role | Contact (phone / email) |
|---|---|---|
| **[Client to confirm]** | **[Client to confirm]** | **[Client to confirm]** |

**12.3** Who will be the decision-maker if we need approvals during setup?

| Name | Role | Contact (phone / email) |
|---|---|---|
| Owner / Boss | Decision-maker — pricing, scope, approval flows | **[Client to confirm name and contact]** |

**12.4** Are there any upcoming events that might affect your availability during onboarding?
> **[Client to confirm | List any upcoming events that may affect onboarding availability | Examples: festive seasons, audits, peak sales periods]**

---

## What Happens Next

Please review this draft and:

1. confirm or correct the pre-filled answers
2. complete all items marked **[Client to confirm]**
3. return this document together with the sample transaction documents listed in Section 11.3

---

_MAIA by AutorunBiz PLT — Pre-Onboarding Requirements Questionnaire | Macro Frozen_

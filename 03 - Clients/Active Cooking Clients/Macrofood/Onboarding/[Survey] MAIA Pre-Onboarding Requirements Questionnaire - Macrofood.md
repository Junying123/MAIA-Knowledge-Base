---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
client: Macrofood
---

_Pre-filled by AutorunBiz PLT based on the GTM handover document and the 6 May 2026 sales call recording. Please review, correct, and complete any item marked **[Client to confirm]** or **[Not covered in meeting]**._

---

**Client Name:** Macro Frozen / Macro Food
**Completed By:** AutorunBiz PLT (draft based on GTM handover)
**Date:** 2026-05-20
**Account Manager:** Jeremy

---

## How to Use This Document

This draft is pre-filled from our sales discussion so your team only needs to:

- confirm what is already captured
- correct anything inaccurate
- fill in the remaining blanks marked **[Client to confirm]** or **[Not covered in meeting]**

If a question does not apply, please write `N/A`.

---

## Section 1 — Business Structure

**1.1** How many companies or business entities are in your group?

| Entity / Company Name | Business Type | In Scope for MAIA? |
|---|---|---|
| Macro Frozen / Macro Food | Food distribution / frozen food / meat distribution | Yes |
| **[Client to confirm if there are other related entities]** | | |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?
The 6 May sales call confirmed the system is **SQL** (boss said "accounting software — SQL"). **[Client to confirm whether all entities share the same SQL instance]**

**1.3** Do the entities share the same customer database and item database, or are they separate?
**[Client to confirm]**

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

| Location Name | Type (office / warehouse / both) | Entity It Belongs To |
|---|---|---|
| **[Client to confirm]** | | Macro Frozen |

**1.5** Do you operate in multiple currencies?
Main business appears to be Malaysia-based. **[Client to confirm whether multi-currency applies]**

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day?
**[Client to confirm total user count by role]**

**2.2** What roles or departments will use the system, and roughly how many people per role?

| Role / Department | Number of People | Key Responsibilities |
|---|---|---|
| Order Processing / Admin | 1 (confirmed in 6 May call — 1 person keys all 700 orders/month into SQL) | WhatsApp order intake, keying Sales Orders and invoices into SQL |
| Sales | **[Client to confirm headcount]** | Customer relationship, lead follow-up, forwarding orders to admin |
| Sales Manager | 1 (mentioned in call — ~46 years old, traditional sales style) | Oversees sales team, approvals |
| Finance / AR | **[Client to confirm]** | Payment slip processing, AR reconciliation |
| Warehouse | **[Client to confirm]** | Stock entry, GRN, fresh weight confirmation before invoicing |
| Drivers / Delivery | **[Client to confirm]** | Delivery, proof of delivery capture |
| Management / Boss | 1 | Final decision-maker on pricing, scope, approvals |

**Note:** The 6 May call confirmed only 1 person currently handles all order entry. Please confirm full team size and whether any roles are missing.

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?
**[Not covered in meeting]**

**2.4** Do any of your staff work in the field?
Yes — outdoor salespeople were specifically mentioned as needing to query customer info and outstanding balances while away from office.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not?
Outdoor salespeople currently rely on calling the office or WhatsApp to check customer and outstanding information. ERP access on the go is not available in practice. **[Client to confirm]**

---

## Section 3 — Current Systems & ERP

**3.1** What is your main ERP / accounting system?

| | Your Answer |
|---|---|
| System name | **SQL** — confirmed by client in 6 May sales call |
| Version number | **[Client to confirm]** |
| Hosting | **[Client to confirm — on-premise or cloud]** |
| Managed by | **[Client to confirm — internal IT or outsourced vendor]** |
| Vendor company name | **[Client to confirm]** |
| Vendor contact person | **[Client to confirm]** |

**Note:** We may need to coordinate with your system vendor for integration. Please provide vendor contact details so we can include them in the technical scoping discussion.

**3.2** Have you ever done any integration project with your ERP before?
**[Not covered in meeting]**

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box?
The GTM handover referenced a weight-based / fresh weight billing workflow where the final quantity and price are only confirmed after warehouse preparation. This may require custom fields or non-standard document flows. **[Client to confirm what is standard vs customized in your current setup]**

**3.4** Do multiple users share a single ERP login, or does each user have their own account?
**[Client to confirm]**

**3.5** Does your ERP have a test/UAT environment separate from the live system?
**[Client to confirm]**

**3.6** What other systems or tools do you use alongside the ERP?

| Function | Current Tool | Managed By |
|---|---|---|
| Order intake | WhatsApp | Internal |
| Customer communication | WhatsApp | Internal |
| Internal team communication | WhatsApp | Internal |
| Inventory / stock management | SQL | Internal / Vendor |
| Document storage / filing | **[Not covered in meeting]** | **[Client to confirm]** |
| Reporting / dashboards | **[Not covered in meeting]** | **[Client to confirm]** |
| Pricing management | Excel / ERP (referenced in discussion) | **[Client to confirm]** |
| Product catalogue | Manual image via WhatsApp (referenced in discussion) | Internal |

**3.7** Which of these systems would you want MAIA to connect to?
SQL is the primary required integration — for customers, items, pricing, stock, Sales Orders, Delivery Orders, invoices, payment records, and outstanding balances. The 6 May call specifically described wanting Sales Orders to push directly into SQL ("sales order 直接去到 accounting software"). **[Client to confirm and add any other systems]**

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?
MAIA will operate as an assistant layer on top of your existing system. Your accounting/order system will remain in use. **[Client to confirm if any tools or manual processes will be retired]**

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?
**[Not covered in GTM handover — please provide approximate SKU count]**

**4.2** How often are new items added?
**[Client to confirm frequency]**

**4.3** Do you use product categories, brands, or groupings?
Yes — the 6 May call confirmed products are categorised by meat type: pork (猪肉), chicken (鸡肉), duck (鸭肉), beef (牛肉/beef), lamb (羊肉/lamb). **[Client to confirm full category list and whether sub-categories by cut/packaging exist]**

**4.4** Do you manage stock across multiple warehouses or locations?
**[Client to confirm — include all warehouse/storage locations]**

**4.5** Which of the following apply to your products?

- [x] Expiry dates / shelf life — yes (frozen and fresh meat products have shelf life considerations)
- [ ] Batch numbers — **[Client to confirm if batch tracking is used in SQL]**
- [ ] Serial numbers — N/A
- [x] Multiple units of measure — yes (weight-based; ordered by piece/carton but billed by actual kg after warehouse weighing — confirmed in 6 May call)
- [ ] Bundle / kit products — **[Client to confirm]**
- [x] Product variants — yes (different cuts of same meat type, e.g., 五花肉/belly pork mentioned in call)
- [x] Product images are important — yes (weekly price catalogue image blast to customers is a requested feature)

**Please confirm or adjust the above.**

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials?
Yes — frozen food and meat products are cut, weighed, and packed before fulfillment. The final weight is only confirmed after warehouse preparation. This is a key workflow driver and affects when the final invoice amount is known.

**4.7** Do salespeople ever "reserve" stock for specific customers before a confirmed order is placed?
**[Not covered in meeting]**

### Pricing

**4.8** How do you manage pricing?

- [ ] One standard price list for all customers
- [x] Customer-specific pricing (negotiated per customer)
- [ ] Multiple price lists / tiers for different customer segments
- [ ] Volume-based or quantity-based discounts
- [x] Price varies based on sourcing / import cost at time of order
- [ ] Other: **[Client to confirm if there are additional pricing methods]**

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?
**[Client to confirm pricing structure and number of tiers]**

**4.10** Where is pricing data maintained today?

- [x] Inside the ERP system
- [x] In a separate spreadsheet / Excel file (referenced in Price Update Assistant discussion)
- [ ] In the salesperson's memory / experience
- [ ] Other: **[Client to confirm]**

**4.11** How frequently do your costs or selling prices change?
Price changes were described as frequent due to commodity/fresh food sourcing. A Price Update Assistant is in scope specifically to manage bulk price updates. **[Client to confirm typical frequency — e.g., weekly, daily for certain items]**

**4.12** Is there a person or role responsible for setting or updating prices?
**[Not covered in GTM handover — please confirm who controls pricing]**

---

## Section 5 — Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive?

- [x] WhatsApp (text, voice message, or image) — primary channel (confirmed in 6 May call; orders flow into a WhatsApp group then admin keys into SQL)
- [ ] Email
- [x] Phone call — mentioned in 6 May call; some customers call directly
- [ ] Walk-in / counter
- [ ] Customer portal / website
- [ ] Marketplace (Shopee, Lazada, etc.)
- [ ] Purchase Order document (PDF, Excel, or other)
- [ ] Other: **[Client to confirm if any other channels are used]**

**5.2** Approximately how many sales orders are processed per day?
700 orders/month confirmed by client in the 6 May call. Wholesale customers order ~once/week; retail customers ~1–2 times/week. All 700 orders are currently keyed by 1 person. **[Client to confirm if volume has changed since the meeting]**

**5.3** How many line items does a typical order contain?
**[Not covered in meeting]**

**5.4** Who creates quotations? Who approves them?
**[Not covered in meeting]** — Please confirm whether your team uses quotations regularly, or whether the workflow goes directly to Sales Order or Proforma Invoice.

**5.5** Who creates or confirms sales orders? Is there an approval process?
1 admin person currently keys all orders from WhatsApp into SQL and generates Delivery Orders and invoices (confirmed in 6 May call). Approval flows are in scope for exception cases. **[Client to confirm who approves and under what conditions — e.g., bad debt risk, special pricing]**

**5.6** Are there situations where a quotation or order needs special approval?
Yes — approval controls were discussed. Examples include credit limit exceeded, special pricing, non-standard orders. **[Client to confirm all approval trigger scenarios]**

**5.7** Do you handle any of the following?

- [ ] Customer returns / exchanges — **[Client to confirm]**
- [x] Credit notes — yes (in scope)
- [ ] Debit notes — **[Client to confirm]**
- [ ] Advance payments or deposits before delivery — **[Client to confirm]**
- [x] Partial deliveries — yes (weight-based fulfillment; final weight confirmed after warehouse prep)
- [ ] Back orders — **[Client to confirm]**
- [x] Consignment stock at customer sites — yes, confirmed in 6 May call; large customers are on consignment arrangement
- [ ] Item substitution — **[Client to confirm]**

**Please confirm or adjust the above.**

**5.8** What are the most common reasons your team issues credit notes?
**[Not covered in meeting]** — Likely weight discrepancy (final weight differs from ordered quantity) or pricing correction. **[Client to confirm]**

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?
**[Not covered in meeting]**

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers?

- [x] Own fleet / in-house drivers — referenced in discussion
- [ ] Freelance / contract drivers
- [ ] Third-party courier / logistics company
- [ ] Customer self-pickup
- [ ] Other: **[Client to confirm delivery method]**

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?
Currently done manually. The 6 May call confirmed the boss wants MAIA to group orders by delivery area (e.g., all Rawang orders in one trip, all Shah Alam orders in another) so drivers can be assigned by area. **[Client to confirm current routing process and number of delivery zones]**

**6.3** Do drivers currently capture proof of delivery (signature, photo)?
Currently drivers get a signature on the Delivery Order. The 6 May call confirmed the boss wants drivers to send a photo of the signed DO to MAIA so it is stored against the Sales Order as proof of delivery. **[Client to confirm current process and whether photo capture is feasible for your drivers]**

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?
Yes — confirmed in 6 May call. Smaller customers pay COD. Some customers initially agreed to COD then requested bank transfer (line transfer) instead and delayed payment. **[Client to confirm COD reconciliation process]**

**6.5** Is the delivery order and invoice issued at the same time, or separately?
Separately — confirmed in 6 May call. Final weight is only known the morning after goods are collected and weighed in the warehouse. DO is prepared first; final invoice is issued after weight confirmation. **[Client to confirm the exact document sequence]**

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use?

- [x] Bank transfer — yes, confirmed in 6 May call (called "line transfer" by client)
- [ ] Cheque — **[Client to confirm]**
- [ ] Cash — **[Client to confirm]**
- [x] Cash on delivery (COD) — yes, confirmed in 6 May call (smaller customers)
- [x] Credit terms — yes (large customers on consignment / credit; confirmed in 6 May call)
- [ ] Online payment gateway — **[Client to confirm]**
- [ ] Other: **[Client to confirm]**

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms?
Yes — credit and outstanding balance visibility is a key workflow requirement for outdoor sales and approval flows. **[Client to confirm standard credit terms, e.g., 30 / 60 / 90 days]**

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit?
The 6 May call confirmed bad debt is the boss's biggest fear — there was a case where a customer owed RM55,000+ and eventually couldn't pay. The boss reviews backlogs and escalates collection personally for larger amounts; smaller amounts are chased by the sales team. **[Client to confirm whether formal credit limits are set in SQL, or managed by experience/judgement]**

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?
Based on the 6 May call, outstanding tracking is done in SQL ("accounting software") but collection escalation is manual. **[Client to confirm whether SQL enforces credit blocks or just reports]**

**7.5** How do customers notify you when they've made a payment?
Customers send payment slips via WhatsApp to the salesperson or admin team. This is a core pain point — AR support workflow is in scope to process these payment slips and match them to invoices.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how?
**[Not covered in meeting]**

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated (auto-sync to LHDN)
- [ ] Compliant but manual submission
- [ ] In progress
- [ ] Not started
- [ ] Not applicable

**[Not covered in GTM handover — please tick the applicable option]**

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices?
**[Not covered in meeting]**

**7.9** Are there any tax exemption scenarios relevant to your business?
**[Not covered in meeting]**

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers?

- [ ] Quotation — **[Client to confirm if quotations are used regularly]**
- [x] Proforma invoice — likely used in some cases
- [x] Sales order confirmation
- [x] Invoice
- [x] Delivery order / delivery note
- [ ] Pick list (internal)
- [x] Credit note
- [ ] Debit note
- [ ] Payment receipt
- [ ] Statement of Account (SOA) — **[Client to confirm]**
- [ ] Other: **[Client to confirm]**

**Please confirm or adjust the above, and bring sample PDFs to the first meeting.**

**8.2** Are your document templates generated by the ERP's built-in report engine? If yes, which documents?
**[Client to confirm — e.g., whether SQL / AutoCount built-in templates are used and whether any are custom]**

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require?
**[Client to confirm — please bring sample documents to the first meeting]**

**8.4** What reports do you look at regularly?
**[Not covered in meeting]** — Please confirm the key reports used daily or weekly (e.g., daily order summary, AR aging, stock movement).

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?
Price update management and AR reconciliation were referenced as manual processes. **[Client to confirm full list]**

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account? Is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?
One sales WhatsApp number is used as the main contact number for customers. The 6 May call confirmed customers PM this number directly. The sales team recommended PM (1-to-1) over group chat — WhatsApp restricts chatbot activity in groups and risks account bans. **[Client to confirm whether the number is already on WhatsApp Business API or regular app, and who owns/manages it]**

**9.2** Would you want MAIA to communicate with your customers via WhatsApp?
In the 6 May call the boss expressed interest in a customer-facing chatbot on the sales number to handle enquiries and product updates. However, Phase 1 is internal-facing. The sales rep recommended starting with PM-based chatbot for customers rather than group chat. Weekly price catalogue blast via WhatsApp Business API was discussed as a feature. **[Client to confirm priority for customer-facing chatbot and broadcast]**

**9.3** Would you want MAIA to help your internal team via WhatsApp?
Yes — this is the core interaction model. Staff input orders, payment slips, and GRN photos through WhatsApp; MAIA processes and presents summaries for confirmation before any record is created.

**9.4** What primary languages does your team use in daily operations?
Mandarin is the primary language. Mixed Mandarin-English-Malay is expected in daily usage. Requirements gathering and training may need to be conducted partially in Chinese. **[Client to confirm preferred language for system training and communication]**

**9.5** What primary languages do your customers communicate in?
Mandarin and mixed Chinese dialects (Cantonese, Hokkien) are expected. Voice messages may include dialect-style wording. **[Client to confirm]**

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve?

1. **Sales Order → SQL direct push** — boss's exact words in 6 May call: "I want sales order to go directly into accounting software, skip one manual process." Currently all 700 orders/month are keyed manually by 1 person.
2. **Fresh weight adjustment** — final weight and price only confirmed the morning after warehouse collection. Cannot issue invoice at order time because price fluctuates by source/import cost. Manual update step required before invoicing.
3. **AR / payment collection** — boss's biggest fear is customers running away without paying. Currently tracks outstanding in SQL but collection escalation is manual. Customers sometimes switch from COD to bank transfer and delay, or give cheques that don't clear.

**Please confirm or add your own priority items.**

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?
Manual order keying into SQL (1 person handling all 700/month). Fresh weight update before DO and invoice. Chasing payments and managing bad debt risk. **[Client to confirm or add]**

**10.3** Is there anything that currently "falls through the cracks"?
Yes — confirmed in 6 May call: sales leads are thrown into a WhatsApp group and the boss has no visibility on whether sales staff follow up. At least one customer called the boss directly because nobody had contacted them. **[Client to confirm other scenarios]**

**10.4** If MAIA could only do one thing for your business, what would it be?
Based on 6 May call, boss's stated priority: **Sales Orders going directly from WhatsApp into SQL** without manual re-entry. **[Client to confirm if this is still the top priority]**

**10.5** Is there anything your team currently does outside the ERP system (WhatsApp, spreadsheets, paper, memory) that should be in a system?
Yes — confirmed in 6 May call:
- WhatsApp order intake and internal order sharing (daily order list in WhatsApp group)
- Payment collection tracking and bad debt management
- Sales lead assignment and follow-up tracking
- Weekly price and product catalogue distribution to customers
- Delivery route planning by area
- Proof of delivery capture

**[Client to confirm or add]**

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format?

- [x] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit)
- [x] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive)
- [x] Price list(s) — standard and/or customer-specific
- [x] Current stock balances (item, warehouse, quantity)
- [ ] Supplier list — **[Client to confirm if relevant for GRN/stock entry workflow]**

**11.2** For each item checked above, who in your team will prepare this data?

| Data Item | Person Responsible | Estimated Ready By |
|---|---|---|
| Customer list | **[Client to confirm]** | **[Client to confirm]** |
| Product / item list | **[Client to confirm]** | **[Client to confirm]** |
| Price list(s) | **[Client to confirm]** | **[Client to confirm]** |
| Current stock balances | **[Client to confirm]** | **[Client to confirm]** |

**11.3** Please provide 3–5 sample transaction documents.
Requested for the first meeting:
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
**[Not covered in meeting]**

**12.2** Who from your team will be the internal project owner — the day-to-day contact during onboarding?

| Name | Role | Contact (phone / email) |
|---|---|---|
| **[Client to confirm]** | **[Client to confirm]** | **[Client to confirm]** |

**12.3** Who will be the decision-maker if we need approvals during setup?

| Name | Role | Contact (phone / email) |
|---|---|---|
| Boss / Owner | Decision-maker — pricing, scope, approval flows (referenced in GTM handover) | **[Client to confirm]** |

**12.4** Are there any upcoming events that might affect your availability during onboarding?
**[Not covered in meeting]** — Please flag any festive seasons, audits, or peak periods that may affect scheduling.

---

## What Happens Next

Please review this draft and:

1. confirm or correct the pre-filled answers
2. complete all items marked **[Client to confirm]** or **[Not covered in meeting]**
3. return the questionnaire together with sample documents where available

---

_MAIA by AutorunBiz PLT — Pre-Onboarding Requirements Questionnaire (Macro Frozen pre-fill draft based on GTM handover)_

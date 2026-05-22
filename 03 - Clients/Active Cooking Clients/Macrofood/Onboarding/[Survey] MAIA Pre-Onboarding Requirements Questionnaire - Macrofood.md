---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
client: Macrofood
---

_Pre-filled by AutorunBiz PLT based on the GTM handover document (proposal signed 2026-05-20). Please review, correct, and complete any item marked **[Client to confirm]** or **[Not covered in GTM handover]**._

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
- fill in the remaining blanks marked **[Client to confirm]** or **[Not covered in GTM handover]**

If a question does not apply, please write `N/A`.

---

## Section 1 — Business Structure

**1.1** How many companies or business entities are in your group?

| Entity / Company Name | Business Type | In Scope for MAIA? |
|---|---|---|
| Macro Frozen / Macro Food | Food distribution / frozen food / meat distribution | Yes |
| **[Client to confirm if there are other related entities]** | | |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?
SQL / AutoCount-related system was referenced in our discussion. **[Client to confirm exact system and whether all entities share the same instance]**

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
| Sales / Admin | **[Client to confirm]** | Order intake from WhatsApp, Sales Order creation |
| Finance / AR | **[Client to confirm]** | Payment slip processing, bank statement matching, AR reconciliation |
| Warehouse | **[Client to confirm]** | Stock entry, GRN photo processing |
| Outdoor Sales | **[Client to confirm]** | Customer queries, outstanding balance checks on the go |
| Management | **[Client to confirm]** | Approval controls, dashboard visibility |

**Note:** Roles above were identified from the GTM handover. Please confirm headcount per role and whether any roles or departments are missing.

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?
**[Not covered in GTM handover]**

**2.4** Do any of your staff work in the field?
Yes — outdoor salespeople were specifically mentioned as needing to query customer info and outstanding balances while away from office.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not?
Outdoor salespeople currently rely on calling the office or WhatsApp to check customer and outstanding information. ERP access on the go is not available in practice. **[Client to confirm]**

---

## Section 3 — Current Systems & ERP

**3.1** What is your main ERP / accounting system?

| | Your Answer |
|---|---|
| System name | SQL Accounting or AutoCount — **[Client to confirm exact system]** |
| Version number | **[Client to confirm]** |
| Hosting | **[Client to confirm — on-premise or cloud]** |
| Managed by | **[Client to confirm — internal IT or outsourced vendor]** |
| Vendor company name | **[Client to confirm]** |
| Vendor contact person | **[Client to confirm]** |

**Note:** We may need to coordinate with your system vendor for integration. Please provide vendor contact details so we can include them in the technical scoping discussion.

**3.2** Have you ever done any integration project with your ERP before?
**[Not covered in GTM handover]**

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
| Inventory / stock management | SQL / AutoCount | Internal / Vendor |
| Document storage / filing | **[Not covered in GTM handover]** | **[Client to confirm]** |
| Reporting / dashboards | **[Not covered in GTM handover]** | **[Client to confirm]** |
| Pricing management | Excel / ERP (referenced in discussion) | **[Client to confirm]** |
| Product catalogue | Manual image via WhatsApp (referenced in discussion) | Internal |

**3.7** Which of these systems would you want MAIA to connect to?
SQL / AutoCount is the primary required integration — for customers, items, pricing, stock, Sales Orders, Delivery Orders, invoices, payment records, and outstanding balances. **[Client to confirm and add any other systems]**

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
**[Not covered in GTM handover]** — Please describe how items are grouped or categorised (e.g., by product type, species, cut, packaging).

**4.4** Do you manage stock across multiple warehouses or locations?
**[Client to confirm — include all warehouse/storage locations]**

**4.5** Which of the following apply to your products?

- [ ] Expiry dates / shelf life
- [ ] Batch numbers
- [ ] Serial numbers
- [x] Multiple units of measure — yes (weight-based products; orders may be placed by piece or carton but billed by actual kg after weighing)
- [ ] Bundle / kit products
- [ ] Product variants (e.g., size, cut, packaging)
- [x] Product images are important — yes (product catalogue/image output is in scope)

**Please confirm or adjust the above, and check any additional items that apply.**

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials?
Yes — frozen food and meat products are cut, weighed, and packed before fulfillment. The final weight is only confirmed after warehouse preparation. This is a key workflow driver and affects when the final invoice amount is known.

**4.7** Do salespeople ever "reserve" stock for specific customers before a confirmed order is placed?
**[Not covered in GTM handover]**

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

- [x] WhatsApp (text, voice message, or image) — primary channel
- [ ] Email
- [ ] Phone call
- [ ] Walk-in / counter
- [ ] Customer portal / website
- [ ] Marketplace (Shopee, Lazada, etc.)
- [ ] Purchase Order document (PDF, Excel, or other)
- [ ] Other: **[Client to confirm if any other channels are used]**

**5.2** Approximately how many sales orders are processed per day?
Approximately 700 orders/month, which is roughly 23–25 orders per day. **[Client to confirm actual daily volume]**

**5.3** How many line items does a typical order contain?
**[Not covered in GTM handover]**

**5.4** Who creates quotations? Who approves them?
**[Not covered in GTM handover]** — Please confirm whether your team uses quotations regularly, or whether the workflow goes directly to Sales Order or Proforma Invoice.

**5.5** Who creates or confirms sales orders? Is there an approval process?
Sales / admin staff create Sales Orders. Approval flows are in scope for exception cases. **[Client to confirm who approves and under what conditions]**

**5.6** Are there situations where a quotation or order needs special approval?
Yes — approval controls were discussed. Examples include credit limit exceeded, special pricing, non-standard orders. **[Client to confirm all approval trigger scenarios]**

**5.7** Do you handle any of the following?

- [ ] Customer returns / exchanges
- [x] Credit notes — yes (in scope)
- [ ] Debit notes
- [ ] Advance payments or deposits before delivery
- [x] Partial deliveries — yes (weight-based fulfillment may result in partial quantities)
- [ ] Back orders
- [ ] Consignment stock at customer sites
- [ ] Item substitution

**Please confirm or adjust the above.**

**5.8** What are the most common reasons your team issues credit notes?
**[Not covered in GTM handover]** — Likely weight discrepancy (final weight differs from ordered quantity) or pricing correction. **[Client to confirm]**

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?
**[Not covered in GTM handover]**

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers?

- [x] Own fleet / in-house drivers — referenced in discussion
- [ ] Freelance / contract drivers
- [ ] Third-party courier / logistics company
- [ ] Customer self-pickup
- [ ] Other: **[Client to confirm delivery method]**

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?
**[Not covered in GTM handover]**

**6.3** Do drivers currently capture proof of delivery (signature, photo)?
**[Not covered in GTM handover]**

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?
**[Not covered in GTM handover]**

**6.5** Is the delivery order and invoice issued at the same time, or separately?
Likely separately — the final weight and price are only confirmed after warehouse preparation, so the Delivery Order may be issued before the final invoice amount is known. **[Client to confirm actual process]**

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use?

- [x] Bank transfer — primary method referenced
- [ ] Cheque
- [ ] Cash
- [ ] Cash on delivery (COD)
- [x] Credit terms — yes (credit/outstanding visibility is a key use case)
- [ ] Online payment gateway
- [ ] Other: **[Client to confirm]**

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms?
Yes — credit and outstanding balance visibility is a key workflow requirement for outdoor sales and approval flows. **[Client to confirm standard credit terms, e.g., 30 / 60 / 90 days]**

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit?
**[Client to confirm — whether blocked, flagged for approval, or warning only]**

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?
**[Client to confirm]**

**7.5** How do customers notify you when they've made a payment?
Customers send payment slips via WhatsApp to the salesperson or admin team. This is a core pain point — AR support workflow is in scope to process these payment slips and match them to invoices.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how?
**[Not covered in GTM handover]**

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated (auto-sync to LHDN)
- [ ] Compliant but manual submission
- [ ] In progress
- [ ] Not started
- [ ] Not applicable

**[Not covered in GTM handover — please tick the applicable option]**

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices?
**[Not covered in GTM handover]**

**7.9** Are there any tax exemption scenarios relevant to your business?
**[Not covered in GTM handover]**

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
**[Not covered in GTM handover]** — Please confirm the key reports used daily or weekly (e.g., daily order summary, AR aging, stock movement).

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?
Price update management and AR reconciliation were referenced as manual processes. **[Client to confirm full list]**

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account? Is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?
One WhatsApp number is used by the entire team. All staff forward or input messages through this single number. **[Client to confirm whether it is WhatsApp Business App or WABA, and whether the number is already registered]**

**9.2** Would you want MAIA to communicate with your customers via WhatsApp?
Phase 1 is internal-facing. MAIA generates the product catalogue output, but your team reviews and forwards it to customers manually. Automated customer-facing messaging is not in Phase 1 scope. **[Client to confirm if customer-facing WhatsApp is a future priority]**

**9.3** Would you want MAIA to help your internal team via WhatsApp?
Yes — this is the core interaction model. Staff input orders, payment slips, and GRN photos through WhatsApp; MAIA processes and presents summaries for confirmation before any record is created.

**9.4** What primary languages does your team use in daily operations?
Mandarin is the primary language. Mixed Mandarin-English-Malay is expected in daily usage. Requirements gathering and training may need to be conducted partially in Chinese. **[Client to confirm preferred language for system training and communication]**

**9.5** What primary languages do your customers communicate in?
Mandarin and mixed Chinese dialects (Cantonese, Hokkien) are expected. Voice messages may include dialect-style wording. **[Client to confirm]**

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve?

1. **Manual WhatsApp order processing** — orders arrive via WhatsApp and staff manually interprets and keys them into the accounting system. Error-prone and time-consuming.
2. **Fresh weight adjustment** — the final weight and invoice amount are only known after warehouse preparation. The current process requires staff to manually update the order before final document generation.
3. **AR / payment slip processing** — customers send payment slips via WhatsApp; finance manually matches them to invoices. Slow, error-prone, and hard to track.

**Please confirm or add your own priority items.**

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?
Order intake from WhatsApp → manual ERP keying. Fresh weight update before final documents. Payment slip matching and AR reconciliation. **[Client to confirm or add]**

**10.3** Is there anything that currently "falls through the cracks"?
**[Client to confirm]** — Possibly: payment slips received but not matched in time; stock not updated causing blocked order entry; price changes not communicated consistently to all sales staff.

**10.4** If MAIA could only do one thing for your business, what would it be?
**[Client to confirm]**

**10.5** Is there anything your team currently does outside the ERP system (WhatsApp, spreadsheets, paper, memory) that should be in a system?
Yes — WhatsApp order intake, payment slip matching, price update distribution, product catalogue generation, and outdoor sales customer/outstanding queries are all currently handled outside the system. **[Client to confirm or add]**

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
**[Not covered in GTM handover]**

**12.2** Who from your team will be the internal project owner — the day-to-day contact during onboarding?

| Name | Role | Contact (phone / email) |
|---|---|---|
| **[Client to confirm]** | **[Client to confirm]** | **[Client to confirm]** |

**12.3** Who will be the decision-maker if we need approvals during setup?

| Name | Role | Contact (phone / email) |
|---|---|---|
| Boss / Owner | Decision-maker — pricing, scope, approval flows (referenced in GTM handover) | **[Client to confirm]** |

**12.4** Are there any upcoming events that might affect your availability during onboarding?
**[Not covered in GTM handover]** — Please flag any festive seasons, audits, or peak periods that may affect scheduling.

---

## What Happens Next

Please review this draft and:

1. confirm or correct the pre-filled answers
2. complete all items marked **[Client to confirm]** or **[Not covered in GTM handover]**
3. return the questionnaire together with sample documents where available

---

_MAIA by AutorunBiz PLT — Pre-Onboarding Requirements Questionnaire (Macro Frozen pre-fill draft based on GTM handover)_

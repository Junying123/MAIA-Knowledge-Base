---
owner: Gareth
status: draft
last_reviewed: 2026-07-21
---

# [Survey] MAIA Pre-Onboarding Requirements Questionnaire 

*To be completed by client before the first deep-dive meeting*

---

**Client Name:** T.C.K Sdn Bhd (Maxfresh)
**Completed By:** Gareth Ng, PM (Mindhive) - prefilled from sales handover docs and discovery call transcripts; pending client review/confirmation
**Date:** 2026-07-02
**Account Manager (Mindhive):** Gareth

---

## How to Use This Document

This questionnaire collects business info for a focused first meeting.

Answers are shown in code blocks. Mindhive has pre-filled some from the proposal/handover/call recordings - please confirm or correct these. Blocks marked `[TO BE FILLED BY CLIENT]` need your input.

**Guidelines:**

- Write "unsure" or "to discuss" rather than leaving a code block empty.
- For tables, add/remove rows as needed.
- Not applicable? Write "N/A".
- Return within **4 business days**.

---

## Section 1 — Business Structure

*We need to understand the full picture of your business entities before the meeting — even if only one entity is in scope for Phase 1. Multi-entity structures affect system configuration, data filtering, and integration design.*

**1.1** How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

> | Entity / Company Name | Business Type | In Scope for MAIA? |
> |---|---|---|
> | T.C.K Sdn Bhd (Maxfresh) | Distribution / trading (fresh produce B2B) | Yes - Phase 1 |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

> `Single entity confirmed so far - N/A for shared/separate ERP instances across entities.`

**1.3** Do the entities share the same customer database and item database, or are they separate?

> `Not applicable - single entity confirmed so far.`

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

> | Location Name | Type | Entity It Belongs To |
> |---|---|---|
> | *(blank — not yet provided by client)* | | |

> `[TO BE FILLED BY CLIENT]`

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?

> `we only deal with RM `

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day? (Approximate is fine.)

> `Approx. 3-4 sales/admin staff currently process ~50 orders/day manually. Total MAIA user base is unlimited (no per-seat fee) - sales, sales coordinator, logistics/warehouse, and management (Andrew) expected as day-to-day users.`

**2.2** What roles or departments will use the system, and roughly how many people per role?

> | Role / Department | Number of People | Key Responsibilities |
> |---|---|---|
> | Sales / admin | ~3-4 | Order intake from WhatsApp, order key-in to AutoCount |
> | Sales coordinator | 5 people | Heavier backend user - review orders, monitor status |
> | Logistics / warehouse | 5 people | Picking, pick list updates, delivery prep |
> | Management (Andrew Tay) | 1 | Visibility / monitoring, not daily ops |

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?

> `we operate almost 24hrs, `

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?

> `Yes - logistics/warehouse pickers and delivery drivers. Sales team is WhatsApp-first rather than desk-bound.`

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not? (e.g., no mobile access, VPN too slow, system too complex, licensing cost)

> `Field/warehouse staff do not currently use AutoCount directly - orders are relayed via WhatsApp and keyed in by office-based sales/admin. Specific reason not stated in discovery calls; likely no mobile-friendly access for warehouse ops. To confirm.`

---

## Section 3 — Current Systems & ERP

*This section is critical for integration planning. Please be as specific as possible — it directly affects cost and timeline.*

**3.1** What is your main ERP / accounting system?

> **AutoCount** — confirmed primary ERP, integration target for Phase 1

**3.2** Have you ever done any integration project with your ERP before? (e.g., connecting it to another system, enabling API access, automated data sync) If yes, describe briefly.

> `no `

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features? (e.g., custom approval workflows, custom report templates, custom modules, special data fields) If yes, describe briefly.

> `Not explicitly detailed. Client requires existing AutoCount SKU codes and document running-number sequence preserved as-is (no changes). Deeper ERP customizations to confirm with AutoCount vendor.`

**3.4** Do multiple users share a single ERP login, or does each user have their own account?
each of us have our own autocount details 

**3.5** Does your ERP have a test/UAT environment separate from the live system?

> `no `

**3.6** What other systems or tools do you use alongside the ERP?

> | Tool | Used For | Status |
> |---|---|---|
> | WhatsApp | Order intake (customer + internal) | Primary channel - groups + voice messages |
> | Excel | Picking lists / pricing references | Manual today |

**3.7** Which of these systems would you want MAIA to connect to?

> `AutoCount (confirmed, Phase 1 scope). WhatsApp Business also relevant as the order-intake channel - WABA vs regular app status to confirm.`

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?

> `[TO BE FILLED BY CLIENT]`

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?

> ` around 350 SKUs`

**4.2** How often are new items added? (e.g., 5/month, rarely, constantly)

> `everyday we have at least 5-6 containers of new arrival, it can be the same sku or different `

**4.3** Do you use product categories, brands, or groupings? If yes, describe briefly.

> `Yes for customer-side grouping (e.g. a "Hotels" customer category with its own pricing markup template was mentioned). Product-side categories/brands not detailed - to confirm. No we use code for example, - Egypt Midnight Beauty 1x10 will coded as EMB1x10`

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.

> `yes within our own vicinity `

**4.5** Which of the following apply to your products? (Check all that apply.)
- [ ] Expiry dates / shelf life
- [ ] Batch numbers
- [ ] Serial numbers
- [ ] Multiple units of measure (e.g., sold in pieces but stocked in cartons, or sold by weight but received by piece)
- [ ] Bundle / kit products (one SKU = multiple items)
- [ ] Product variants (e.g., size, colour, material, voltage, model)
- [ ] Product images are important for identification or quotation documents

> `[TO BE FILLED BY CLIENT]`

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods? If yes, describe what types. (e.g., fish filleting, bulk repackaging into smaller units, assembly)

> ` yes only for supermarket `

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed? If yes, how is this tracked today?

> `yes, we track manually using a handwritten table, `

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)
- [ ] One standard price list for all customers
- [x] Multiple price lists / tiers for different customer segments
- [ ] Customer-specific pricing (negotiated per customer)
- [ ] Blanket agreements / contract pricing with individual customers
- [ ] Volume-based or quantity-based discounts
- [ ] Discount-based tiers (e.g., Tier 1 = 20% off, Tier 2 = 15% off)
- [x] Price varies based on sourcing / import cost at time of order
- [ ] Other: _______________

> `(4.8 note): Confirmed from calls - multiple price lists/tiers by customer group/category exist (e.g. "Hotels" category, generic groups referenced as A/B/C), and pricing varies with sourcing/market cost (fresh produce base price changes ~weekly). Whether pricing is also individually negotiated per customer not confirmed - to discuss.`

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?

> `At least one named group/category ("Hotels") with its own markup template was mentioned; groups referenced generically as A/B/C in the intro call. Exact number of tiers and defining criteria to confirm with client.`

**4.10** Where is pricing data maintained today? (Check all that apply.)

> `Currently communicated via weekly WhatsApp broadcast to customers plus staff judgment/memory when processing orders - not confirmed to live structurally inside AutoCount today. To confirm exact source of truth.`
- [ ] Inside the ERP system
- [ ] In a separate spreadsheet / Excel file
- [ ] In the salesperson's memory / experience
- [ ] Other: _______________

**4.11** How frequently do your costs or selling prices change? (e.g., daily for commodities, monthly, annually, by contract period)

> `Weekly - T.C.K sends weekly product/price updates to customers based on stock, availability, and market/sourcing conditions (fresh produce).`

**4.12** Is there a person or role responsible for setting or updating prices? If yes, who?

> `yes our staff Wei wei `

---

## Section 5 — Sales & Order Workflow

*In this section, we are collecting facts about your process — not a detailed walkthrough. The walkthrough happens in the meeting.*

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)
- [x] WhatsApp (text, voice message, or image)
- [ ] Email
- [ ] Phone call
- [ ] Walk-in / counter
- [ ] Customer portal / website
- [ ] Marketplace (Shopee, Lazada, etc.)
- [ ] Purchase Order document (PDF, Excel, or other format)
- [ ] Other: _______________

> `(5.1 note): Confirmed - majority of customer orders arrive via WhatsApp (text, voice message, or image; voice messages processed by MAIA in Malaysian languages at ~70-80% accuracy). Other channels (email, phone, PO document) not confirmed as currently used - to verify with client.`

**5.2** Approximately how many sales orders are processed per day?

> `~50 orders/day (~1,000/month) today, processed manually. Client wants to scale toward ~2,000/month, which is not feasible with the current manual process.`

**5.3** How many line items does a typical order contain? (e.g., 5–10 items, 20–50 items, 100+)

> `Varies - large orders can span up to ~50 line items across multiple POs (per Proposal Finalization 3 call). Typical/average order size not otherwise quantified - to confirm.`

**5.4** Who creates quotations? Who approves them?

> `Not explicitly named - sales/admin staff create quotations manually today using weekly pricing and stock information. Formal approval step not detailed - to confirm.`

**5.5** Who creates or confirms sales orders? Is there an approval process?

> `Sales/admin staff create and confirm sales orders manually, keying into AutoCount. No formal approval process detailed today beyond planned MAIA high-value order threshold.`

**5.6** Are there situations where a quotation or order needs special approval? (e.g., large order value, credit limit exceeded, special pricing, non-standard items, new customer)

> `Yes (planned) - orders priced below the minimum selling-price guardrail, or above a configured order value, are intended to require management approval per the signed proposal. Exact thresholds to be configured during onboarding (min/max selling price + high-value order approval flow).`

**5.7** Do you handle any of the following? (Check all that apply.)
- [ ] Customer returns / exchanges
- [x] Credit notes
- [x] Debit notes
- [ ] Advance payments or deposits before delivery
- [ ] Partial deliveries (order split across multiple shipments)
- [x] Back orders (items ordered but not currently in stock)
- [ ] Consignment stock at customer sites
- [ ] Substitution of alternative items when requested item is out of stock

> `(5.7 note): Confirmed as relevant - credit notes and debit notes (MAIA syncs these real-time with AutoCount per proposal), and back orders (Phase 1 stock model: sales order reserves stock without deducting, so unfulfillable lines behave like back orders). Returns/exchanges, advance payments, partial deliveries, consignment, and substitutions not confirmed - to discuss.`

**5.8** What are the most common reasons your team issues credit notes? (e.g., pricing error, wrong item delivered, early payment discount, quality rejection, wrong serial number)

> `yes sometimes will be pricing error,
rejection 
or discount on quality issues`

**5.9** Can salespeople currently create credit notes, or is that restricted to finance
yes they can 

**5.10** When a customer reports damaged or defective items, what is your return process today? (e.g., how it is reported, whether the driver collects the item, whether inspection happens before approval)

> `customer will send back if they are at local within KL
outstation customer will sort and request for discount and credit note will be issued `

**5.11** How is a return documented today - do you issue a Credit Note, a physical Return/Goods-Return note, or both? Who is authorised to approve a return?

> `yes credit note will be issued on the spot `

**5.12** What happens to the damaged/returned stock physically - is it put back into sellable stock, scrapped/written off, or held separately (e.g., a damaged-goods location)? How is this reflected in your stock records today (AutoCount or manual)?

> `return stock will be notified by taking photo and posting it into the whatsap group, stating customer name, date, quantity and what item,, 
after QC, need to inform whether fruit is damage, mouldy, soft, overripe and etc
scrap item wil be written into a book then we will do stock adjustment`

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)
- [x] Own fleet / in-house drivers
- [x] Freelance / contract drivers
- [x] Third-party courier / logistics company
- [x] Customer self-pickup
- [ ] Other: _______________

> `all sorts`

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?

> `Not discussed - route planning not currently covered by MAIA Phase 1. A picker/delivery assignment feature was flagged as a future ask (to avoid duplicate picking), earmarked for the requirements-gathering phase, not yet built.`

**6.3** Do drivers currently capture proof of delivery (signature, photo)?

> `No digital e-signature currently - physical signed delivery note is used, with photo upload of the signed note serving as supporting evidence to trigger order closure in MAIA.`

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?
No cash on delivery, normally cash will be received on the spot 

**6.5** Is the delivery order and invoice issued at the same time, or separately?

> `yes invoice create on autocount will create do at the same time
if customer take product at non office hours, a manual DO will be open for reference purposes`

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)
- [x] Bank transfer
- [x] Cheque
- [x] Cash
- [x] Cash on delivery (COD)
- [x] Credit terms (net 30, net 60, etc.)
- [ ] Online payment gateway
- [ ] Other: _______________

> `all sorts `

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms? (e.g., 7 days, 30 days, 60 days)

> `yes sometimes customer might exceed their Credit terms, our lady boss is overseeing and will keep chasing using phone`

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit? (e.g., order blocked, requires manager approval, warning only)

> `Credit-limit checks are planned as part of MAIA order validation (system is designed to check "stock, credit limits, pricing" before staff confirm an order) - exact limit figures and enforcement behaviour (hard block vs warning) not yet specified. To confirm.`

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?

> `not really `

**7.5** How do customers notify you when they've made a payment? (e.g., WhatsApp message to salesperson, email to finance, upload to portal)

> `use whatsapp, email, fax `

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how? (e.g., monthly PDF email, manual process)

> `SOA is send in the beginning of each month through pdf on email or whatsaap `

**7.7** What is your e-invoicing status?
- [x] Already compliant and automated (auto-sync to LHDN)
- [ ] Compliant but manual submission
- [ ] In progress
- [ ] Not started
- [ ] Not applicable

> `(7.7 note): Status not formally declared in discovery calls. Andrew flagged e-invoice sync-within-72-hours as an important LHDN compliance requirement during the intro call, and Mindhive confirmed the system supports scheduled/delayed sync to accommodate this. Exact current LHDN compliance status (manual vs automated) to confirm directly with client finance team.`

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices? (Is it a per-customer preference?)

> `individual invoices after each purchase `

**7.9** Are there any tax exemption scenarios relevant to your business? (e.g., C1, C3, A57 certificates, LMW, export exemptions)

> `[TO BE FILLED BY CLIENT]`

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers? (Check all that apply.)
- [ ] Quotation
- [ ] Proforma invoice
- [x] Sales order confirmation
- [x] Invoice
- [x] Delivery order / delivery note
- [x] Pick list (internal)
- [ ] Credit note
- [ ] Debit note
- [ ] Payment receipt
- [ ] Statement of Account (SOA)
- [ ] Other: _______________

> `(8.1 note): Confirmed Phase 1 documents per signed proposal - Sales order confirmation, Invoice, Delivery order/delivery note, and Pick list (internal). Quotation, proforma invoice, credit note, debit note, payment receipt and SOA not explicitly confirmed as current outputs - to verify with client.`

**8.2** Are your document templates generated by the ERP's built-in report engine (e.g., Crystal Reports for SAP B1)? If yes, which documents?

> `Not explicitly confirmed which report engine AutoCount uses. MAIA-generated documents (invoice, DO, pick list) are committed to be customized to match the existing AutoCount template/layout as a baseline requirement.`

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require? (e.g., PO reference, project number, company registration, specific logo placement) Write "to discuss" if easier to show in the meeting.

> `[TO BE FILLED BY CLIENT]`

**8.4** What reports do you look at regularly? (e.g., daily sales summary, outstanding AR aging, stock movement, salesperson performance)

> `Not confirmed - specific recurring reports not discussed. MAIA proposes a daily digest covering unprocessed orders, pending quotations, invoices to issue, payment follow-ups, and delivery statuses, which may cover some existing manual reporting needs.`

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?

> `Picking lists are currently Excel-based / manually compiled - a known pain point explicitly flagged for automation via MAIA. Other manual Excel reports not confirmed.`

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?

> `WhatsApp is used extensively for order intake via groups. Regular WhatsApp Business app vs WhatsApp Business API (WABA) status not explicitly confirmed - WABA account cost (~RM20-30/month) was discussed as a pass-through third-party cost, implying WABA provisioning will likely be needed during onboarding. To confirm current status and number ownership.`

**9.2** Would you want MAIA to communicate with your customers via WhatsApp? (e.g., order confirmations, delivery updates, payment reminders)

> `Not in signed Phase 1 scope. Customer-facing WhatsApp communication (order confirmations, delivery updates, payment reminders) was discussed as a longer-term roadmap item (separate customer-facing chatbot), not confirmed for Phase 1.`

**9.3** Would you want MAIA to help your internal team via WhatsApp? (e.g., sales staff creating orders through chat, drivers receiving trip details, payment proof forwarding)

> `Yes - this is the core signed Phase 1 scope. Sales staff forward WhatsApp orders to MAIA for draft order creation; logistics/pickers receive and update pick lists via WhatsApp; a daily internal digest is also planned.`

**9.4** What primary languages does your team use in daily operations? (e.g., English, Malay, Chinese — specify Mandarin/Cantonese if relevant)

> `[TO BE FILLED BY CLIENT]`

**9.5** What primary languages do your customers communicate in?

> `[TO BE FILLED BY CLIENT]`

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve? (In your own words — be as specific as possible.)

- `Manual order entry/interpretation from WhatsApp is slow and error-prone, and does not scale past ~1,000 orders/month without adding headcount.`
- `Pricing accuracy depends on staff memory and manual weekly updates - risk of wrong selling price, margin leakage, and disruption if key staff are unavailable.`
- `Fragmented visibility for management (Andrew) - no single view of order status, pending quotations, deliveries, and payment follow-ups without manually chasing staff.`

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?

> `Manual key-in of orders into AutoCount from WhatsApp messages, plus manually compiling Excel-based picking lists - both explicitly flagged as the most time-consuming daily tasks.`

**10.3** Is there anything that currently "falls through the cracks" — orders missed, documents lost, follow-ups forgotten?

> `yes sometimes, order forgotten to be picked 
`

**10.4** If MAIA could only do one thing for your business, what would it be?

> `Automate/structure the WhatsApp-to-AutoCount order pipeline (extract, validate, draft, confirm) - this was the anchor use case across all discovery calls.`

**10.5** Is there anything your team currently does outside the ERP system (in WhatsApp, spreadsheets, paper, or memory) that you believe should be in a system? Describe briefly.

> `Yes - weekly pricing/customer-group markup logic and picking-list coordination currently live outside AutoCount, in WhatsApp and Excel/manual processes. Client wants these brought into a structured system via MAIA.`

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format? (Check all you can provide.)
- [ ] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit)
- [ ] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive status)
- [ ] Price list(s) — standard and/or customer-specific
- [ ] Current stock balances (item, warehouse, quantity)
- [ ] Supplier list (if relevant for purchasing)

> `We can provide you with our SKU code, some are active some are inactive,, Total active SKUs now is around 250++ 
price list is updated weekly on words and send up through whatsap `

**11.2** For each item checked above, who in your team will prepare this data?

> `[TO BE FILLED BY CLIENT]`

**11.3** Please provide 3–5 sample transaction documents. These help us understand your document formats, field requirements, and workflow. (e.g., a recent quotation, sales order, invoice, delivery order, credit note, customer PO, pick list)

> `[TO BE FILLED BY CLIENT]`

**11.4** Do you want historical transaction data (old orders, invoices, etc.) available inside MAIA, or are you comfortable starting fresh with forward-only data?
- [x] Forward-only (new transactions from go-live onwards) — standard
- [ ] Want historical data migrated — Approximate date range: _______________
- [ ] Unsure — to discuss

> `(11.4 note): Forward-only approach is confirmed as the agreed model - historical data stays in AutoCount, MAIA starts operational tracking from an agreed cutoff date (example cutoff date "1 July" was discussed during finalization calls, not yet formally fixed).`

*Note: Historical data migration is a separate scope item. We will assess feasibility and cost based on the volume and quality of your data.*

---

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline? (e.g., tied to a contract, season, audit, or event)

> `Timeline confirmed during finalization - Phase 1 targeted live within 1-2 weeks of kickoff, full deployment including customizations ~1 month total. No hard external deadline (contract/audit/event) was mentioned; pace is driven by the client's own operational urgency to reduce manual workload.`

**12.2** Who from your team will be the **internal project owner** — the day-to-day contact during onboarding? (Ideally someone operational who understands the daily workflow, not only a department head.)

> `Not finalized. Cheryl (sales team lead) was the main demo evaluator alongside two other designated staff, making her a likely candidate for day-to-day operational PIC - to be confirmed with client. `

**12.3** Who will be the **decision-maker** if we need approvals during setup? (e.g., on workflows, permissions, integrations, scope decisions)

> `Andrew Tay - company owner/management sponsor, confirmed as the main decision-maker throughout the sales cycle (approved hosting, timeline, and pricing decisions; signed the proposal).`

**12.4** Are there any upcoming events that might affect your availability during onboarding? (e.g., holidays, audits, travel, peak season)

> `no we operate almost 24hrs 
`

---

## What Happens Next

Once you return this questionnaire and the sample data items, we will:

- Review your responses and prepare a focused agenda for the deep-dive meeting
- Schedule **Meeting 1** (business workflow deep-dive) at your office — 1.5 to 2.5 hours
- If integration with your ERP or third-party systems is needed, schedule **Meeting 2** (IT/integration scoping) — this can be remote and may include your IT vendor

**Please return this document to:** [Product team contact]
**Questions about any item?** Reply to this message — we're happy to clarify.

---

*MAIA by Mindhive — Client Onboarding Questionnaire v2.0*


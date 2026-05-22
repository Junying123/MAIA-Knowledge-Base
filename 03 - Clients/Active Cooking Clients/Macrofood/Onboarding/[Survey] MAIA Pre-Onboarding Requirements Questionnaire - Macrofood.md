---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
client: Macrofood
---

_To be completed by client before the first deep-dive meeting_

---

**Client Name:** Macro Frozen / Macro Food
**Completed By:** ___________________________________ (Name / Role)
**Date:** 2026-05-20
**Account Manager (Mindhive):** Jeremy

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

**1.1** How many companies or business entities are in your group?

| Entity / Company Name | Business Type | In Scope for MAIA? |
|---|---|---|
| Macro Frozen / Macro Food | Food distribution / frozen food / meat distribution | Yes |
| [To confirm at kickoff] | | |

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

SQL / AutoCount-related system — to confirm at kickoff whether shared or separate.

**1.3** Do the entities share the same customer database and item database, or are they separate?

To confirm at kickoff.

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

| Location Name | Type | Entity It Belongs To |
|---|---|---|
| [To fill at kickoff] | Warehouse / Office | Macro Frozen |

**1.5** Do you operate in multiple currencies?

To confirm at kickoff. Likely MYR only.

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day?

To confirm at kickoff.

**2.2** What roles or departments will use the system?

| Role / Department | Number of People | Key Responsibilities |
|---|---|---|
| Sales / Admin | [TBC] | Order intake from WhatsApp, SO creation |
| Finance / AR | [TBC] | Payment slip processing, bank statement matching |
| Warehouse | [TBC] | Stock entry, GRN processing |
| Outdoor Sales | [TBC] | Customer queries, order checks on the go |
| Management | [TBC] | Approval controls, dashboard visibility |

**2.3** What are your standard operating hours?

To confirm at kickoff. Food distribution may include early morning or weekend operations.

**2.4** Do any staff work in the field?

Yes — outdoor salespeople need to query customer info and outstanding balances on the go.

**2.5** Do field staff currently have access to your ERP / accounting system?

Likely no — ERP access is typically office-only. Outdoor staff rely on calling office or WhatsApp to check info. To confirm at kickoff.

---

## Section 3 — Current Systems & ERP

**3.1** What is your main ERP / accounting system?

| | Your Answer |
|---|---|
| System name | SQL Accounting / AutoCount — to confirm exact system at kickoff |
| Version number | To confirm |
| Hosting | On-premise (likely) — to confirm |
| Managed by | Internal / Outsourced vendor — to confirm |
| Vendor company name | To confirm |
| Vendor contact person | To confirm |

**3.2** Have you ever done any integration project with your ERP before?

To confirm at kickoff.

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box?

To confirm at kickoff. Fresh weight / weight-based billing may require custom fields.

**3.4** Do multiple users share a single ERP login, or does each user have their own account?

To confirm at kickoff.

**3.5** Does your ERP have a test/UAT environment?

To confirm at kickoff.

**3.6** What other systems or tools do you use alongside the ERP?

| Function | Current Tool | Managed By |
|---|---|---|
| Order intake | WhatsApp | Internal |
| Customer communication | WhatsApp | Internal |
| Internal team communication | WhatsApp | Internal |
| Inventory / stock management | SQL / AutoCount (likely) | Internal / Vendor |
| Document storage / filing | [To confirm] | |
| Reporting / dashboards | Manual / ERP built-in (likely) | |
| Pricing management | Excel / ERP (likely) | |
| Product catalogue | Manual image / WhatsApp (likely) | |

**3.7** Which of these systems would you want MAIA to connect to?

SQL / AutoCount — for customers, items, pricing, stock, SO, DO, invoice, payment records, outstanding balances.

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?

MAIA is an operational assistant layer on top of existing system. Client is not replacing their ERP.

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?

To confirm at kickoff.

**4.2** How often are new items added?

To confirm at kickoff. Food distribution likely has moderate frequency updates.

**4.3** Do you use product categories, brands, or groupings?

To confirm. Likely by product type (frozen, fresh, meat, poultry, etc.).

**4.4** Do you manage stock across multiple warehouses or locations?

To confirm at kickoff.

**4.5** Which of the following apply to your products?

- [ ] Expiry dates / shelf life — **likely yes** (frozen food)
- [ ] Batch numbers — to confirm
- [ ] Serial numbers — N/A
- [x] Multiple units of measure — **yes** (weight-based products; ordered by piece/carton but may be billed by kg)
- [ ] Bundle / kit products — to confirm
- [ ] Product variants — to confirm
- [x] Product images are important — **yes** (product catalogue/image output is in scope)

**4.6** Do you do any processing, cutting, repackaging, or transformation?

Yes — frozen food / meat products are cut, weighed, packed before fulfillment. Final weight only known after warehouse preparation. This is a key workflow driver.

**4.7** Do salespeople ever "reserve" stock for specific customers before confirmed order?

To confirm at kickoff.

### Pricing

**4.8** How do you manage pricing?

- [ ] One standard price list — unlikely; food distribution typically has customer-specific pricing
- [x] Customer-specific pricing — **likely yes**
- [x] Price varies based on sourcing / import cost at time of order — **likely yes** (commodity food pricing)
- [ ] Other: Price Update Assistant required — boss wants structured bulk price update process

**4.9** How many price lists or tiers?

To confirm at kickoff.

**4.10** Where is pricing data maintained today?

- [x] Inside the ERP system — likely
- [x] In a separate spreadsheet / Excel file — likely (Price Update Assistant implies Excel-based updates)
- [x] In the salesperson's memory / experience — likely for customer-specific deals

**4.11** How frequently do costs or selling prices change?

Frequent — food / frozen food commodity pricing can change regularly. Price Update Assistant is in scope specifically to manage this.

**4.12** Is there a person or role responsible for setting or updating prices?

To confirm at kickoff. Likely management/boss controls pricing approval.

---

## Section 5 — Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive?

- [x] WhatsApp (text, voice message, or image) — **primary channel**
- [ ] Email
- [ ] Phone call
- [ ] Walk-in / counter
- [ ] Customer portal / website
- [ ] Marketplace
- [ ] Purchase Order document

**5.2** Approximately how many sales orders processed per day?

~700 orders/month → approximately 23–25 orders/day.

**5.3** How many line items does a typical order contain?

To confirm at kickoff.

**5.4** Who creates quotations? Who approves them?

To confirm. Product team to verify whether Macro Frozen uses quotations or goes directly to SO/Invoice/Proforma Invoice.

**5.5** Who creates or confirms sales orders? Is there an approval process?

Sales / admin creates SOs. Approval flows are in scope for exceptions (credit exceeded, special pricing, non-standard orders).

**5.6** Are there situations where a quotation or order needs special approval?

Yes — approval controls are in scope. Scenarios include credit limit exceeded, special pricing, business exceptions.

**5.7** Do you handle any of the following?

- [ ] Customer returns / exchanges — to confirm
- [x] Credit notes — **yes** (in scope)
- [ ] Debit notes — to confirm
- [ ] Advance payments or deposits — to confirm
- [x] Partial deliveries — **likely** (weight-based fulfillment may result in partial quantities)
- [ ] Back orders — to confirm
- [ ] Consignment stock — to confirm
- [ ] Item substitution — to confirm

**5.8** Most common reasons for credit notes?

To confirm at kickoff. Likely weight discrepancy (final weight differs from ordered), pricing error, or returns.

**5.9** Can salespeople create credit notes, or is that restricted to finance?

To confirm at kickoff. Recommend restricting to finance/management in Phase 1.

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers?

- [x] Own fleet / in-house drivers — likely (food distribution)
- [ ] Freelance / contract drivers — to confirm
- [ ] Third-party courier — to confirm
- [ ] Customer self-pickup — to confirm

**6.2** Do you plan delivery routes or trips?

To confirm at kickoff. Delivery Order is in scope; route planning is not.

**6.3** Do drivers currently capture proof of delivery?

To confirm at kickoff.

**6.4** Do you handle cash-on-delivery (COD)?

To confirm at kickoff.

**6.5** Is the delivery order and invoice issued at the same time, or separately?

Likely separately — final weight/price confirmed after warehouse prep, so DO may precede final invoice. To confirm at kickoff.

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do customers use?

- [x] Bank transfer — likely primary
- [ ] Cheque — to confirm
- [x] Cash — possible for smaller customers
- [x] Cash on delivery — possible
- [x] Credit terms — yes (credit/outstanding visibility is in scope)
- [ ] Online payment gateway — to confirm

**7.2** Do you extend credit terms?

Yes — credit/outstanding visibility is a key use case for outdoor sales and approval flows.

**7.3** Do you set credit limits per customer?

To confirm. Credit limit checking and flagging for approval is in scope.

**7.4** Is credit limit enforcement managed inside the ERP or tracked manually?

Likely ERP where available; some manual tracking. To confirm at kickoff.

**7.5** How do customers notify you when they've made a payment?

WhatsApp payment slip to salesperson or admin — this is a core pain point addressed by AR support workflow.

**7.6** Do you send Statements of Account (SOA) to customers?

To confirm at kickoff.

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated
- [ ] Compliant but manual submission
- [ ] In progress
- [ ] Not started
- [ ] Not applicable

_To confirm at kickoff._

**7.8** Do customers prefer individual invoices per delivery or consolidated monthly invoices?

To confirm at kickoff.

**7.9** Are there any tax exemption scenarios?

To confirm at kickoff. Food products may have specific tax treatment.

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers?

- [ ] Quotation — to confirm if used regularly
- [x] Proforma invoice — likely for some customers
- [x] Sales order confirmation — yes (in scope)
- [x] Invoice — yes (in scope)
- [x] Delivery order / delivery note — yes (in scope)
- [ ] Pick list (internal) — to confirm
- [x] Credit note — yes (in scope)
- [ ] Debit note — to confirm
- [ ] Payment receipt — to confirm
- [ ] Statement of Account (SOA) — to confirm

**8.2** Are document templates generated by ERP built-in report engine?

Likely yes (SQL / AutoCount typically uses built-in report templates). To confirm at kickoff.

**8.3** Are there specific fields or formatting requirements on documents?

To confirm at kickoff. Clients to bring sample documents to first meeting.

**8.4** What reports do you look at regularly?

To confirm at kickoff. Likely: daily order summary, AR aging / outstanding, stock movement.

**8.5** Are there reports built manually in Excel that should be automated?

To confirm. Price update management and AR reconciliation likely candidates.

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account?

Yes — one WhatsApp number used by entire team. All staff forward/input messages through this single number. To confirm whether it is WhatsApp Business App or WABA at kickoff.

**9.2** Would you want MAIA to communicate with customers via WhatsApp?

Not in Phase 1 scope — MAIA is internal-facing first. Catalogue output is generated by MAIA but forwarded manually by team.

**9.3** Would you want MAIA to help internal team via WhatsApp?

Yes — this is the core interaction model: staff input orders, payment slips, GRN photos via WhatsApp; MAIA processes and presents for confirmation.

**9.4** What primary languages does your team use?

Mandarin (primary) / mixed Mandarin-English-Malay. Chinese language support needed for requirements gathering and training.

**9.5** What primary languages do customers communicate in?

Mandarin, mixed Chinese dialects (Cantonese, Hokkien), some Malay/English in informal messages. Voice notes may include dialect terms.

---

## Section 10 — Pain Points & Priorities

**10.1** Top 3 problems you want MAIA to solve:

1. **Manual WhatsApp order processing** — orders come via WhatsApp; staff manually interprets and keys into ERP. Error-prone and slow.
2. **Fresh weight adjustment** — final weight and price only known after warehouse prep; current process requires manual update before invoicing.
3. **AR / payment slip processing** — customers send payment slips via WhatsApp; finance manually matches to invoices. Slow, error-prone, and hard to track.

**10.2** What currently takes the most time in daily operations?

Order intake from WhatsApp → manual ERP keying. Fresh weight update before final documents. Payment slip matching.

**10.3** Is there anything that currently "falls through the cracks"?

Likely: payment slips received via WhatsApp but not matched in time; stock not updated causing blocked order entry; price changes not communicated consistently to all sales staff.

**10.4** If MAIA could only do one thing, what would it be?

Extract WhatsApp orders and create draft Sales Orders in the system automatically.

**10.5** Is there anything done outside the ERP today that should be in a system?

Yes — WhatsApp order intake, payment slip matching, price update broadcasting, product catalogue generation, outdoor sales customer/outstanding queries.

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format?

- [x] Customer list — yes (required for MAIA to match customer from order messages)
- [x] Product / item list — yes (required for item matching)
- [x] Price list(s) — yes (required; multiple price tiers likely)
- [x] Current stock balances — yes (required for order blocking logic)
- [ ] Supplier list — to confirm if needed for GRN/stock entry

**11.2** Who will prepare this data?

| Data Item | Person Responsible | Estimated Ready By |
|---|---|---|
| Customer list | [TBC at kickoff] | [TBC] |
| Product / item list | [TBC at kickoff] | [TBC] |
| Price list(s) | [TBC at kickoff] | [TBC] |
| Current stock balances | [TBC at kickoff] | [TBC] |

**11.3** Please provide 3–5 sample transaction documents:

Required: sample Sales Order, Delivery Order, Invoice, payment slip format, and a sample WhatsApp order message. Bring to first meeting.

**11.4** Do you want historical transaction data available in MAIA?

- [x] Forward-only (new transactions from go-live onwards) — **recommended**
- [ ] Want historical data migrated
- [ ] Unsure — to discuss

_Note: Historical data migration is separate scope. Recommend forward-only for Phase 1._

---

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational?

To confirm at kickoff.

**12.2** Who from your team will be the internal project owner?

| Name | Role | Contact |
|---|---|---|
| [To confirm at kickoff] | | |

**12.3** Who will be the decision-maker for approvals during setup?

| Name | Role | Contact |
|---|---|---|
| Boss / Owner | Decision-maker (pricing, scope, approval flows) | [To confirm] |

**12.4** Are there any upcoming events that might affect availability during onboarding?

To confirm at kickoff. Food distribution has peak periods around festive seasons.

---

## What Happens Next

Once you return this questionnaire and sample data, we will:

1. Review responses and prepare focused agenda for the deep-dive meeting
2. Schedule **Meeting 1** (business workflow deep-dive) — 1.5 to 2.5 hours
3. If ERP integration is needed, schedule **Meeting 2** (IT/integration scoping) — may include SQL/AutoCount vendor

**Please return this document to:** [Product team contact]
**Questions about any item?** Reply to this message.

---

## ⚠️ Items to Confirm at Kickoff

The following are marked "to confirm" and should be resolved in the first meeting:

- [ ] Exact ERP system name and version (SQL Accounting or AutoCount — which one?)
- [ ] Whether ERP is cloud or on-premise
- [ ] ERP vendor name and contact person
- [ ] Number of MAIA users by role
- [ ] Number of warehouses / locations
- [ ] Whether quotations are used or team goes directly to SO/Proforma
- [ ] Whether COD is in use
- [ ] E-invoicing compliance status
- [ ] Who is the internal project owner (day-to-day contact)
- [ ] Target go-live date
- [ ] Sample documents: WhatsApp order message, SO, DO, Invoice, payment slip
- [ ] Language of ERP UI and whether Chinese language support needed

---

_MAIA by Mindhive — Client Onboarding Questionnaire v2.0 | Pre-filled from GTM handover — Macro Frozen_

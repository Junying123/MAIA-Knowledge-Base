---
owner: Gareth
status: draft
last_reviewed: 2026-08-07
client: Maxfresh (T.C.K Sdn Bhd)
---

# Sample Data Checklist — Maxfresh (T.C.K Sdn Bhd)

*What to prepare after the first meeting with us. MAIA by Mindhive — Sample Data Checklist v1.1*

**Client Name:** T.C.K Sdn Bhd (Maxfresh)
**Date Sent:** 2026-07-24
**Contact:** Gareth (Mindhive)

## How to Send

- Upload all documents into the Google Drive folder: https://drive.google.com/drive/folders/1UOLw98_CHa9Roygiu-MOFWe7AC9abdC3?usp=sharing
- Ping the Mindhive WhatsApp group when completed
- Do not send passwords, API keys, or system credentials in this submission

## Why We Need This

To make the first onboarding session effective, we need a realistic sample of the client's data first. The goal is to quickly understand data shape, variation, and document formats by eyeballing real examples.

## Checklist

Tick off each item as it's prepared. Items marked ★ are blockers — kickoff cannot proceed without them.

| Data Item | Uploaded? | Est. Ready By | Storage Location |
|---|---|---|---|
| Customer list (name, code, phone, address, credit terms, credit limit) | [ ] | | Customer Data |
| Item / SKU list (code, name, aliases, UOM, category, standard price) | [ ] | | Item Data |
| User list and WhatsApp phone numbers (authorised MAIA users) | [ ] | | MAIA User List |
| Sample PDF doc format from AutoCount — Quotation, Proforma Invoice, Invoice, Delivery Order, Credit Note | [ ] | | Transaction Docs |
| Product catalogue or brochure | [ ] | | Product & Catalogue |
| Customer pricing | [ ] | | Customer Pricing |
| 3–5 sample real WhatsApp order messages (text) | [ ] | | Order Intake |
| 1–2 sample voice message orders (audio file) | [ ] | | Order Intake |
| 8–10 sample PO documents received from customers | [ ] | | Order Intake |

### Data Exports

- [ ] ★ Customer database export from AutoCount (debtor maintenance) — Excel or CSV **[BLOCKER]**
- [ ] ★ Item / SKU list export from AutoCount (full item master with code, name, UOM, price, category, brand)
- [ ] ★ Customer PO samples — 20 to 100 documents from different customers (all formats accepted)
- [ ] Historical order / sales history export from AutoCount — last 6–12 months if possible (optional but valuable)
- [ ] Any informal Excel pricing notes per customer (optional)

### Sample Documents

- [ ] ★ 3 sample invoices (PDF as sent to customers via AutoCount)
- [ ] ★ 3 sample delivery orders / DO (PDF handed to customer at delivery)
- [ ] 3 sample quotations (PDF as sent to customers)
- [ ] 3 sample proforma invoices (for new customers requiring upfront payment)
- [ ] 3 sample credit notes (if available)
- [ ] 3 sample payment receipts (if available)
- [ ] Weekly text-based catalogue template (current format, before redesign)
- [ ] Handwritten order notes (photo/scan of 2–3 real examples)
- [ ] Any sample WhatsApp order conversations (helps design the coordinator chat flow)

### Optional but Helpful

- [ ] Product catalogue or brochure (helps with product naming and positioning)
- [ ] Current AutoCount report samples (daily sales, stock movement)

## Required Items — Detail

### 1. Customer Database Sample (high variation)

Provide a sample customer list with high variation (different customer types, pricing terms, regions, and buying patterns).

**Minimum fields:** customer/company name, contact person name, phone number, email, billing address, delivery address (if different)

**Recommended fields (if available):** customer code, customer type/segment (retail, wholesale, distributor, key account, etc.), payment terms, credit limit, assigned sales rep, region/country

**Sample size guidance:** prefer a representative sample with enough variety (e.g. 50–200 rows if available); include edge cases (inactive customer, missing contact, multiple delivery addresses, etc.)

**Format:** Excel or CSV preferred

### 2. Product / Item Database Sample (high variation)

Provide a sample product list with high variation (different categories, units, pricing behavior, and packaging).

**Minimum fields:** item code / SKU, item name / description, unit of measure, standard selling price

**Recommended fields (if available):** category/group, brand, alternate UOM + conversion (e.g. 1 carton = 12 pieces), cost price, barcode, stock on hand, region restrictions (if any)

**Sample size guidance:** prefer a representative sample with enough variety (e.g. 50–200 rows if available); include edge cases (discontinued item, zero price placeholder, bundled item, etc.)

**Format:** Excel or CSV preferred

### 3. Pricing Structure Data

Understand how pricing is applied in the business. Provide any available pricing tables/rules for:

- Tier-based pricing (by customer tier/class)
- Volume-based pricing (by quantity breaks)
- Region-based pricing (country/state/zone)
- Contract-based pricing (customer- or agreement-specific)
- Promotion/temporary pricing (if applicable)

For each pricing table/rule, include where possible: effective start/end date, currency, tax inclusive/exclusive indicator, customer scope (all customers, segment, or named accounts), product scope (all items, category, or specific SKU).

**Format:** Excel or CSV preferred

### 4. Sample Transaction Documents

Real examples of working documents to understand field layout and process flow.

- 3–5 standard documents total, selected from: Quotation, Sales order / order confirmation, Invoice, Delivery order / delivery note, Credit note (if applicable)
- 10+ customer purchase orders (POs) with high variation (different customers, formats, item counts, terms, and special notes)

**Format:** PDF, scanned image, or screenshot (as normally used by the team)

**Tip:** If possible, include related documents from the same transaction chain to see mapping across stages.

### 5. If No Accounting / 3rd-Party System (Excel-based Operations)

If operations are mainly in Excel files, start preparing the full database export in parallel. This can include: full customer master, full product/item master, full price lists and pricing rules, open sales transactions (if available).

The sample set can still be sent first for onboarding, with the full export provided in the next step.

## Questions?

If the data is messy or incomplete, send what's currently available — it's better to review real data early and refine during onboarding.

## See Also

- [[02 - PM Playbook/Processes/Client Onboarding Checklist]]
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]

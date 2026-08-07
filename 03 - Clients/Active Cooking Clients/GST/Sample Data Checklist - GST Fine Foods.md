---
owner: Gareth
status: draft
last_reviewed: 2026-08-07
client: GST Fine Foods
---

# Sample Data Checklist — GST Fine Foods

*What to prepare before the first onboarding session. MAIA by Mindhive — Sample Data Checklist v1.1*

**Client Name:** GST Fine Foods (trading division of GST Group)
**Date Sent:** [TO FILL]
**Contact:** Gareth (Mindhive)

## Why We Need This

To make the first onboarding session effective, we need a realistic sample of the client's data first. The goal is to quickly understand data shape, variation, and document formats by eyeballing real examples.

Please share these items together with the completed Requirement Gathering Questionnaire, at least 3 business days before the meeting.

## Required Items

### 1. Customer Database Sample (high variation)

Provide a sample customer list with high variation (different customer types, pricing terms, regions, and buying patterns) — Penang branch (Phase 1 focus) should be represented.

**Minimum fields:**
- [ ] Customer/company name
- [ ] Contact person name
- [ ] Phone number
- [ ] Email
- [ ] Billing address
- [ ] Delivery address (if different)

**Recommended fields (if available):**
- [ ] Customer code
- [ ] Customer type/segment (hotel, restaurant, supermarket, key account, etc.)
- [ ] Payment terms
- [ ] Credit limit
- [ ] Assigned sales rep
- [ ] Region/country

**Sample size guidance:** prefer a representative sample with enough variety (e.g. 50–200 rows if available); include edge cases (inactive customer, missing contact, multiple delivery addresses, etc.)

**Format:** Excel or CSV preferred — export from SAP B1 (Penang company code P30) if possible.

### 2. Product / Item Database Sample (high variation)

Provide a sample product list with high variation (different categories, units, pricing behavior, and packaging) — including raw (whole fish) and processed (fillet, portion pack) SKUs so the raw-to-processed conversion pattern is visible.

**Minimum fields:**
- [ ] Item code / SKU
- [ ] Item name / description
- [ ] Unit of measure
- [ ] Standard selling price

**Recommended fields (if available):**
- [ ] Category / group
- [ ] Brand
- [ ] Alternate UOM + conversion (e.g. whole fish kg → fillet kg yield %)
- [ ] Cost price
- [ ] Barcode
- [ ] Stock on hand
- [ ] Region restrictions (if any)

**Sample size guidance:** prefer a representative sample with enough variety (e.g. 50–200 rows if available); include edge cases (discontinued item, zero price placeholder, bundled/repackaged item, etc.)

**Format:** Excel or CSV preferred — export from SAP B1.

### 3. Pricing Structure Data

We need to understand how pricing is applied — GST's SAP Blanket Agreements are customer-specific rather than tiered, so real examples matter here.

Please provide any available pricing tables/rules for:
- [ ] Customer-specific pricing (SAP Blanket Agreement)
- [ ] Tier-based pricing (by customer tier/class), if used
- [ ] Volume-based pricing (by quantity breaks), if used
- [ ] Region-based pricing (Penang vs KL), if used
- [ ] Promotion/temporary pricing (if applicable)

For each pricing table/rule, include where possible: effective start/end date, currency, tax inclusive/exclusive indicator, customer scope (all customers, segment, or named accounts), product scope (all items, category, or specific SKU).

**Format:** Excel or CSV preferred.

### 4. Sample Transaction Documents

Real examples of working documents to understand field layout and process flow.

- [ ] 3–5 standard documents total, selected from: Quotation, Sales order / order confirmation, Invoice, Delivery order / delivery note, Credit note (if applicable)
- [ ] 10+ customer purchase orders (POs) with high variation — include WhatsApp text orders, handwritten notes (Penang branch), and voice message orders if available, since these are the current intake channels

**Format:** PDF, scanned image, screenshot, or audio file (as normally used by the team).

**Tip:** If possible, include related documents from the same transaction chain so we can see mapping across stages.

### 5. If No Accounting / 3rd-Party System (Excel-based Operations)

Not applicable — GST runs on SAP B1 (Penang + KL on the same database, separate company codes P30/K30). Data samples should be exported directly from SAP rather than compiled manually.

## Optional but Helpful

| Item | Why It Helps |
|---|---|
| Supplier list (name, contact, what they supply) | Useful if MAIA will support purchasing |
| Product catalogue / brochure | Helps us understand product positioning and naming |
| Current report samples (daily sales, monthly summary, SOA / Crystal Report exports) | Helps us shape initial dashboards and the auto-SOA feature |
| Organisation chart / team structure | Helps role and permission setup (sales, sales coordinators, finance, logistics) |

## How to Send

- Email all items to: [Product team email]
- Subject line: `MAIA Onboarding - GST Fine Foods - Sample Data`
- If files are too large for email, we will provide a secure upload link
- Do not send passwords, API keys, or system credentials in this submission

## Questions?

If the data is messy or incomplete, send what's currently available — it's better to review real data early and refine during onboarding.

Contact: Gareth (Mindhive)

## See Also

- [[03 - Clients/Active Cooking Clients/GST/GST Fine Foods — Requirement Gathering Questionnaire]]
- [[03 - Clients/Active Cooking Clients/GST/Requirement Gathering Output - GST Fine Foods - 2026-05]]
- [[02 - PM Playbook/Processes/Client Onboarding Checklist]]

<title>3May26 - Requirement Gathering Meeting </title>

# GST Fine Foods — Requirement Gathering Questionnaire

**Purpose:** Structured questions for the post-sign RG session so Phase 1 / Phase 2 scope, SAP integration, and UAT can be pinned down without rework.

---

## Org model and rollout

- Which branches go live in Phase 1 — KL only, or Penang / Langkawi included from day one?
- What is the SAP B1 structure across branches — separate databases, shared database with separate company codes, or one company?
- Does stock move between branches — can one branch sell stock owned by another?
- Two branches using the same inventory source?
- Confirm named PICs by role: sales coordination, finance, operations / inventory, IT / SAP vendor. How many users will use MAIA?
- Confirm actual monthly order volume per branch (proposal estimates: KL \~4k, Penang \~4k, Langkawi \~2k).
- Is anything currently listed as Phase 2 that GST expects to be included in Phase 1?

---

## RFQ / quotation intake

- Who are their customers mostly, hotels, restaurants, hypermarket?
- How do customers send RFQs — email, WhatsApp, walk-in, or a mix?
- How long does GST quote for the quotation? How many quotation day/week/month
- Do customers use a standard Excel template, their own format, or free-form? Can we get 3–5 anonymised sample files?
- How many line items are in a typical RFQ?
- When GST cannot fulfil a line exactly, what is the default, substitute, leave blank, or call the customer first?
- How GST matches their product with the customer's requested items?
- After MAIA returns match results, who fills in the price — always manual 
- Do GST have customer pricing for their order? Will MAIA pull from SAP price list?  Do u have min/max/std price? How does GST decide/quote the price?
- What is the target turnaround time for an RFQ response today vs what GST wants?

---

## Product matching rules and master data

### 2a. SAP item master structure

- How is a product identified in SAP — does one SKU represent one specific cut, or does one code cover a species with cut and weight as attributes?
- Which attributes are mandatory to uniquely identify a product — species, origin, cut, weight band, pack format, pack size, brand, fresh vs frozen?
- What is the primary unit of measure for selling — KG, packet, carton, piece count? If selling by KG but invoicing by carton, how does the invoice line show it?
- What is the UOM — e.g. 1 pack = 20kg, 1 carton = 10 packs?

### 2b. Customer naming vs internal naming

- Do customers use their own product names that differ from GST's SAP item names?
- Is there a cross-reference table mapping customer names to GST internal items — in SAP, in Excel, or only in people's heads?
- When a customer writes something ambiguous (e.g. just "salmon" with no cut or weight), what does the salesperson do today?

### 2c. Substitution rules

- Who is authorised to decide a substitution — any salesperson, or does a supervisor need to approve?
- Which substitution dimensions are acceptable without asking the customer — different origin, different cut, different weight band, different pack size, different brand?

### 2d. BOM and processing (whole fish → cut)

- When a customer orders "whole fish" but warehouse processes it into cuts, when does the SKU change happen in SAP — before SO is confirmed, during warehouse processing, or at DO stage?
- After processing, does one whole fish produce one SAP line or multiple lines (e.g. head + fillet + offcut as separate lines)?
- Who updates SAP when the cut or BOM changes — salesperson, warehouse, or finance?
- When a SKU changes mid-order, does the price change too?

### 2e. Item master maintenance

- How often are new items added or existing items changed — quarterly, monthly, weekly, or ad hoc?
- Who owns item master updates in SAP?
- When a new item is added, how quickly does the sales team know — immediately, or with a delay?

---

## Inventory visibility and source of truth

- What is the authoritative stock figure sales uses to make promises — SAP live, the daily Excel extract, or a verbal check with warehouse?
- Who prepares the daily inventory Excel extract, how often is it refreshed, and what fields does it include?
- When a large order lands between refreshes, what happens?
- When stock is shown to a salesperson, should it be gross qty or net of existing reservations and CPRN earmarks?
- Before confirming a large order, does a salesperson always call or message someone to double-check — or do they trust the system?
- At what level should MAIA show stock — per branch, per warehouse/bin, or company-wide?
- Is stock ever soft-reserved for a customer before an SO is created today, and if so how is it tracked?
- What defines "expiring soon" or "aged" for frozen product — fixed days before expiry, days without movement, or something else?

---

## Standard sales order creation

- Besides RFQ-driven orders, how else do orders come in — repeat phone call, WhatsApp text, walk-in, email?
- Before confirming an SO, which checks are hard blocks (order cannot proceed) vs warnings (flag but allow) — stock, credit limit, price list, MOQ, delivery date?
- Does Phase 1 need Delivery Order workflow, or is SO → Invoice sufficient for go-live?
- Are credit notes and returns in scope for Phase 1 document testing?

---

## Pricing, discounts, and customer conditions

- How many price lists exist in SAP — one standard, or customer-specific / tier-based lists?
- Who is allowed to give a discount, and is there an approval threshold?
- How are customer-specific prices maintained today — in SAP, in Excel, or verbally?
- Are there any special tax or rounding rules on invoices beyond the standard Crystal layout?

---

## Credit limits, payment slips, and finance approvals

- How is credit limit structured — per customer, per branch, or group-level combined exposure?
- When a customer exceeds their credit limit, what happens — automatic block, warning only, or finance approval required?
- Does warehouse ever ship while credit approval is still pending?
- What format do customers typically use to send payment proof — mobile banking screenshot, PDF, TT advice?
- What key does the team use to match a payment slip to an invoice — invoice number, amount, customer name?
- How are partial payments and multi-invoice combined transfers handled today?
- Is there a pro forma or deposit step in practice, even if not formally named?

---

## Documents and Crystal Reports

- Which documents must MAIA generate with Crystal Reports-matching layout — quotation, SO, proforma invoice, invoice, DO, credit note, receipt?
- How is document numbering structured — per branch, per entity, or centralised? Does it reset annually?
- Who manages and allocates new number series?
- Confirm GST will provide PDF samples of gold-standard Crystal outputs per document type before build begins.

---

## CPRN (Customer Purchase Request Notes) — Phase 2 or pulled forward

### 8a. Definition and type

- What does GST actually call this internally — commitment, reservation, blanket note, or no name?
- Is it a verbal-only commitment, a partially-paid reservation, or a formal agreement without delivery schedule?
- Is it tracked anywhere today — in a spreadsheet, SAP, WhatsApp thread, or only in people's heads?

### 8b. Consumption tracking

- Walk through a real example: customer commits to 10,000 units, sales releases 10 — what happens to the remaining 9,990 today?
- Who updates the remaining balance after each release?
- What unit is the commitment tracked in — KG, cartons, pieces?
- Can a single release be partial, or is each release a complete order?
- Normally, customer will need one orders with all items straight or a blanket order with partially shipment

### 8c. Conflict between salespeople

- When stock is earmarked for Customer A, can another salesperson see it as available or does it appear locked?
- When the conflict is caught today, how is it resolved?
- Who should be able to release a CPRN hold in MAIA — the owning salesperson, a manager, or purchasing?
- If the holding salesperson is unavailable, is there an escalation path?

### 8d. Hold expiry and reminders

- Should a CPRN hold expire automatically if there is no consumption after a set period, or is it permanent until manually released?
- Who receives the "still want this block?" reminder, and how often?
- Which channel should reminders go through — WhatsApp, workspace, or both?

### 8e. Purchasing and advance buying

- When a large commitment is made, does purchasing get notified to buy ahead — automatically or manually?
- Is there a buffer rule for how much to buy vs the committed qty?
- When purchased goods arrive, is the earmarked quantity ring-fenced in the warehouse or does it sit in general stock?

### 8f. Conversion to SO

- What triggers conversion from a commitment to a real Sales Order — customer giving a delivery date, sending a PO, or salesperson decision?
- Is conversion always full, or can it be partial (e.g. release 500 of 10,000)?
- Must the converted SO reference the original CPRN number for traceability?
- After conversion, who keys the SO into SAP — does MAIA push it, or does someone key it manually?

---

## Aging and clearance reminders — Phase 2

- What defines "aging" or "near-expiry" for frozen seafood — fixed days before expiry, days without movement, or category-specific rules?
- Who should receive aging and clearance alerts — the assigned salesperson, sales manager, all sales, or a combination?
- How should alerts be delivered — WhatsApp digest, workspace flag, or both?
- How often should alerts fire — daily, real-time on breach, or weekly?

---

## Excel exports for planning — Phase 2

- Which datasets need to be exportable — stock aging summary, open SO list, CPRN outstanding, customer AR buckets, stock snapshot?
- Is there a mandatory column layout or template GST already uses?
- Who will use these exports — sales, purchasing, management, finance?

---

## Statement of account (SOA) — Phase 2, subject to SAP feasibility

- How often should SOA be sent — monthly fixed cycle, on request, or both?
- Which customers receive SOA — all B2B, selected large accounts, or only those with outstanding balances?
- Must the format match the existing SAP Crystal SOA layout?
- Should multi-branch AR be consolidated into one SOA or shown per entity?

---

## WhatsApp and user setup

- Which user groups will use MAIA via WhatsApp — sales, finance, warehouse, management?
- Which user groups need workspace (web) access only?
- Language preference for prompts — English, Bahasa Malaysia, or mixed?
- How many named users are expected for Phase 1 — broken down by role?

---

## SAP integration and technical setup

- What SAP B1 version is running, and is it on-premise or cloud-hosted?
- What is the preferred integration method — Service Layer API, DI API, or file-based CSV/SFTP?
- Who is the SAP vendor contact for integration coordination?
- What is the acceptable sync latency per data type — items, stock, customers, price lists, SO push, invoice push?
- Is a SAP test / sandbox environment available before production integration begins?
- Are there IT security requirements — VPN, static IP whitelist, service account?

---

## UAT definition

- Agree UAT sample size per workflow: RFQ files, SO scenarios, payment slip cases, credit exception cases, CPRN scenarios, document types.
- Confirm pass thresholds from proposal: draft completeness, match acceptance rate, stock accuracy, approval routing, SAP sync accuracy, document generation, Crystal layout match.
- Who signs off Phase 1 UAT, and who signs off Phase 2 UAT?

---

## Artefacts to collect before kickoff

- ~~3–5 anonymised RFQ Excel sample files (simple, messy, and large)~~
- PDF samples of gold-standard Crystal outputs — one per document type
- Item master excerpt from SAP (anonymised if needed)
- Customer-specific naming / cross-reference sheet if it exists
- Org chart or RACI for approvals
- Current process map or SOP if available

---

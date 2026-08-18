---
owner: Gareth
status: draft
last_reviewed: 2026-08-03
---

# [Survey] MAIA Pre-Onboarding Requirements Questionnaire

*To be completed by client before the first deep-dive meeting*

---

**Client Name:** Dalson Industrial Supplies Sdn Bhd
**Completed By:** Gareth Ng, PM (Mindhive) — prefilled from requirements-gathering transcript, Scope Lock v2, VoC Extraction, UAT Checklist, End-user & Process Map, UAT Field Guide, Customer Narrative, AutoCount integration doc, and Phase 1 Timeline; pending Yap Li Min's review/confirmation live
**Date:** 2026-08-03
**Account Manager (Mindhive):** Gareth

---

## How to Use This Document

This questionnaire collects factual information about your business so we can prepare for a focused and productive session. Mindhive has pre-filled what's already known from prior meetings, scope docs, and testing — your team only needs to:

- confirm what's already captured
- correct anything inaccurate
- fill in the remaining blanks, marked **[GAP — ask live]**

For anything unclear, write "unsure" or "to discuss" rather than leaving it blank.

---

## Section 1 — Business Structure

**1.1** How many companies or business entities are in your group? List all of them, even if they won't use MAIA immediately.

> | Entity / Company Name | Business Type | In Scope for MAIA? |
> |---|---|---|
> | Dalson Industrial Supplies Sdn Bhd (Reg. 202401010775, inc. March 2024) | B2B industrial supplies trading | Yes — Phase 1 |
>
> **[GAP — ask live]** Is "Dalson Multi Supply" (the registered contact email is `dalsonmultisupply@gmail.com`) the same legal entity as above, or a separate one? Flagged in the original onboarding doc, never resolved.

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

> `Single entity confirmed so far — N/A for shared/separate ERP instances across entities. Confirm live.`

**1.3** Do the entities share the same customer database and item database, or are they separate?

> `Not applicable — single entity confirmed so far.`

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

> | Location Name | Type | Entity It Belongs To |
> |---|---|---|
> | Bandar Sunway (No 8, Jalan PJS 11/8, 46150 PJ) | Retail shop + warehouse | Dalson Industrial Supplies Sdn Bhd |
>
> Delivery covers all states in Malaysia (via Lalamove, see §6.1).

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?

> `MYR only — assumed, all known customers are domestic (auto shops, construction-related businesses). [GAP — ask live] confirm no foreign-currency suppliers.`

---

## Section 2 — Team & Roles

**2.1** How many people in your company will use MAIA day-to-day? (Approximate is fine.)

> `3 registered MAIA users — Yap Li Min (Owner, dual role as Sales Coordinator), Asilah Amirah binti Khairuddin (Sales Coordinator), Joseph (Admin/Store Keeper). Source: MAIA User List (Sample Data Checklist, Lark), cross-confirmed in End-user & Process Map.`

**2.2** What roles or departments will use the system, and roughly how many people per role?

> | Role / Department | Number of People | Key Responsibilities |
> |---|---|---|
> | Sales coordinator | 2 (Yap Li Min + Asilah) | Order intake, SKU/price confirmation, direct submission (no approval gate) |
> | Store keeper / warehouse | 1 (Joseph) | Receives confirmed order, packs directly |
> | Delivery | 0 internal — Lalamove (external courier) | Hands POD to staff after delivery — not a MAIA user |

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?

> `[GAP — ask live] never asked in any source.`

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?

> `Yap Li Min is field/mobile-based (owner, "always out"). UAT Field Guide (2026-07-19) states no internal driver — delivery is 100% via Lalamove. [GAP — ask live] End-user & Process Map (one day later, 2026-07-20) still lists "Driver(s)" as an open NEEDS CLIENT INPUT item — these two sources conflict. Confirm definitively: is there ever an internal driver, or always Lalamove?`

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not?

> `[GAP — ask live] Yap Li Min is mobile-based; unconfirmed whether she accesses AutoCount directly or only through Asilah/Joseph.`

---

## Section 3 — Current Systems & ERP

**3.1** What is your main ERP / accounting system?

> | | Your Answer |
> |---|---|
> | System name | AutoCount |
> | Version number | 2.2 (build 2.2.90) |
> | Hosting | Cloud (vendor server) |
> | Managed by | Ms Tan, AutoCount Software Support |
> | Vendor contact | `easysoftprosolution@gmail.com`, +60192392686 |

**3.2** Have you ever done any integration project with your ERP before?

> `No — MAIA is the first integration project for Dalson's AutoCount. Direct DB access method confirmed 2026-07-24 (SL-12, LOCKED design — not yet turned on in the live environment).`

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features?

> `Integration checklist describes it as "a standard installation with no major customisations" — not independently verified with the client. [GAP — ask live] E-invoice mandatory customer-master fields still NEEDS SCOPING/PARTIAL, needs Dalson-specific re-verification.`

**3.4** Do multiple users share a single ERP login, or does each user have their own account?

> `[GAP — ask live] never asked. Note: the AutoCount credentials shared for integration testing use a generic admin/admin login — confirm this isn't how staff log in day-to-day.`

**3.5** Does your ERP have a test/UAT environment separate from the live system?

> `[GAP — ask live] dev built/tested against a cloned test DB, but unclear whether Dalson itself has a client-side UAT AutoCount environment.`

**3.6** What other systems or tools do you use alongside the ERP?

> | Function | Current Tool | Managed By |
> |---|---|---|
> | Order intake / POD / payment proof | WhatsApp (informal, pre-MAIA) | Internal |
> | Stock tracking | Possibly Excel — unconfirmed | **[GAP — ask live]** |

**3.7** Which of these systems would you want MAIA to connect to?

> `AutoCount (confirmed) + Telegram (internal staff channel). No other integrations in Phase 1 scope. Note: original scoping walked the owner through a WhatsApp Business setup; production channel was switched to Telegram, confirmed with client 2026-07-12.`

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?

> `[GAP — ask live] never asked.`

---

## Section 4 — Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?

> `[GAP — ask live] never answered anywhere. ★ Top priority — directly affects SKU-matching design, the account's most-cited pain point.`

**4.2** How often are new items added?

> `Not asked directly for items. New customers are confirmed daily-frequency (VOC-016); SL-11 chatbot creation covers both customers and items, implying similar frequency. [GAP — ask live] confirm.`

**4.3** Do you use product categories, brands, or groupings?

> `Yes — full taxonomy already built (dalson_industrial_supplies_facet.md): 18 Level-2 categories — Tools & Workshop Equipment, Safety & PPE, Plumbing & Sanitary, Electrical & Lighting, Welding & Gas, Adhesives/Sealants/Chemicals, Cleaning & Janitorial, Lifting/Handling/Storage, Building & Maintenance Materials, Automotive Supplies, Pumps/Valves/Fluid Control, Measuring & Testing Instruments, Office/Signage/Facility Supplies, Fasteners & Hardware, Paint/Surface Treatment/Abrasives, Packaging/Tapes/Strapping, Machinery & Power Equipment, Furniture & Fixtures. Brands include Bosch, 3M, Kärcher, Loctite, Facom, Kennedy, CTEK, JTC, Alpen, Sanwa, DCA. [GAP — ask live] confirm this matches how items are categorised inside AutoCount itself.`

**4.4** Do you manage stock across multiple warehouses or locations?

> `Assumed single warehouse, Bandar Sunway. Confirm live.`

**4.5** Which of the following apply to your products? (Check all that apply.)

- [ ] Expiry dates / shelf life
- [ ] Batch numbers
- [ ] Serial numbers
- [ ] Multiple units of measure (e.g., sold in pieces but stocked in cartons, or sold by weight but received by piece)
- [ ] Bundle / kit products (one SKU = multiple items)
- [ ] Product variants (e.g., size, colour, material, voltage, model)
- [ ] Product images are important for identification or quotation documents

> `[GAP — ask live] none of these ever answered anywhere. Multi-UOM and variants are named in Scope Lock as the most common SKU-mismatch cause — press for a clear answer.`

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods?

> `[GAP — ask live] never asked.`

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed?

> `[GAP — ask live] never asked.`

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)

- [ ] One standard price list for all customers
- [x] Customer-specific pricing (negotiated per customer)
- [ ] Multiple price lists / tiers for different customer segments
- [ ] Blanket agreements / contract pricing with individual customers
- [ ] Volume-based or quantity-based discounts
- [ ] Discount-based tiers
- [ ] Price varies based on sourcing / import cost at time of order
- [ ] Other: _______________

> `Customer-specific pricing, negotiated ad hoc — no fixed price list, single standard price per item in AutoCount, staff sets real price case-by-case from memory/history (SL-10, LOCKED 2026-07-22).`

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?

> `N/A — no formal tiers, ad hoc negotiation only.`

**4.10** Where is pricing data maintained today? (Check all that apply.)

- [x] Inside the ERP system
- [ ] In a separate spreadsheet / Excel file
- [x] In the salesperson's memory / experience
- [ ] Other: _______________

> `AutoCount (standard item price) + salesperson's memory/experience (actual negotiated price).`

**4.11** How frequently do your costs or selling prices change?

> `[GAP — ask live] never asked.`

**4.12** Is there a person or role responsible for setting or updating prices?

> `Implied Yap Li Min / staff, case-by-case — not explicitly named as a policy owner. [GAP — ask live] confirm.`

---

## Section 5 — Sales & Order Workflow

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)

- [x] WhatsApp (text, voice message, or image)
- [x] Email — some
- [x] Phone call
- [x] Walk-in / counter — B2C retail only
- [x] Purchase Order document (PDF, Excel, or other format)
- [ ] Customer portal / website
- [ ] Marketplace (Shopee, Lazada, etc.)
- [ ] Other: _______________

> `[GAP — ask live] template doesn't ask the mix/ratio between channels — what % of the ~50–100 orders/month is PO document vs WhatsApp text/voice/image vs phone call? Matters directly: PO-doc orders need document parsing, WhatsApp-style orders need OCR/voice parsing, phone orders can't be touched at intake at all (pure staff transcription). Also note: production channel is Telegram, not WhatsApp — confirm channel-mix answer live translates 1:1 onto Telegram (text/voice/image forwarding), not just the original WhatsApp-era answer.`

**5.2** Approximately how many sales orders are processed per day?

> `~50–100 orders/month (~2–5/day) — well within MAIA T1 subscription cap of 2,500 orders/month.`

**5.3** How many line items does a typical order contain?

> `[GAP — ask live] never asked.`

**5.4** Who creates quotations? Who approves them?

> `Any of the 3 registered users (Yap Li Min, Asilah, Joseph) creates and submits directly — no separate approval gate (SL-7, superseded 2026-07-20; client confirmed safe given only 3 people use MAIA).`

**5.5** Who creates or confirms sales orders? Is there an approval process?

> `Same as above — no approval process. Any of the 3 registered users submits directly.`

**5.6** Are there situations where a quotation or order needs special approval?

> `None — approval gate explicitly removed for this 3-person team (SL-7).`

**5.7** Do you handle any of the following? (Check all that apply.)

- [ ] Customer returns / exchanges
- [x] Credit notes
- [ ] Debit notes
- [ ] Advance payments or deposits before delivery
- [ ] Partial deliveries (order split across multiple shipments)
- [ ] Back orders (items ordered but not currently in stock)
- [ ] Consignment stock at customer sites
- [ ] Substitution of alternative items when requested item is out of stock

> `Credit notes confirmed — invoice-level only (SL-8, LOCKED), never account-level. [GAP — ask live] the rest (debit notes, deposits, partial deliveries, back orders, consignment, substitutions) never asked.`

**5.8** What are the most common reasons your team issues credit notes?

> `[GAP — ask live] never asked, only that they're invoice-level.`

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?

> `Implied any of the 3 registered users can — not explicitly restricted to a finance role. [GAP — ask live] confirm.`

---

## Section 6 — Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)

- [ ] Own fleet / in-house drivers
- [ ] Freelance / contract drivers
- [x] Third-party courier / logistics company — Lalamove
- [ ] Customer self-pickup
- [ ] Other: _______________

> `[GAP — ask live] the original onboarding doc pre-filled "own fleet / in-house drivers." Every later source (VoC, Scope Lock, Field Guide) says Lalamove (external courier, not a MAIA user) instead. Confirm own-fleet is fully retired and was never actually in play.`

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?

> `N/A — Lalamove handles routing, not Dalson.`

**6.3** Do drivers currently capture proof of delivery (signature, photo)?

> `Lalamove hands the POD (photo/signed doc) to staff after delivery; staff (Asilah or Yap Li Min) uploads and attaches it to the DN in MAIA (SL-5, LOCKED). Previously informal via WhatsApp threads, described as genuinely hard to retrieve later (VOC-011/012) — this is the fix MAIA delivers.`

**6.4** Do you handle cash-on-delivery (COD)?

> `[GAP — ask live] never asked.`

**6.5** Is the delivery order and invoice issued at the same time, or separately?

> `DN and Invoice both created in AutoCount after packing, same step — not combined into a single document. (Client had asked about combining SO+invoice into one doc during original scoping; resolved as separate DN/Invoice per current flow.)`

---

## Section 7 — Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)

- [ ] Bank transfer
- [ ] Cheque
- [ ] Cash
- [ ] Cash on delivery (COD)
- [ ] Credit terms (net 30, net 60, etc.)
- [ ] Online payment gateway
- [ ] Other: _______________

> `[GAP — ask live] never explicitly confirmed. Bank transfer + cash assumed for a small trader.`

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms?

> `New customers typically pay immediately, no credit period (VOC-013, believed). [GAP — ask live] confirm whether any repeat/existing customers get net terms.`

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit?

> `[GAP — ask live] never asked.`

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?

> `[GAP — ask live] never asked.`

**7.5** How do customers notify you when they've made a payment?

> `Customer sends payment slip via WhatsApp; staff updates AutoCount manually; MAIA stores the receipt against the related order trail.`

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how?

> `[GAP — ask live] never asked.`

**7.7** What is your e-invoicing status?

- [ ] Already compliant and automated (auto-sync to LHDN)
- [ ] Compliant but manual submission
- [ ] In progress
- [ ] Not started
- [ ] Not applicable

> `[GAP — ask live] never independently confirmed for Dalson specifically. MAIA is scoped to trigger e-invoice generation via AutoCount, but Dalson's own compliance stage was never answered. ★ Critical.`

**7.8** Do customers prefer individual invoices per delivery, or consolidated monthly invoices?

> `[GAP — ask live] never asked.`

**7.9** Are there any tax exemption scenarios relevant to your business?

> `[GAP — ask live] never asked.`

---

## Section 8 — Documents & Reports

**8.1** What documents do you currently generate for customers? (Check all that apply.)

- [ ] Quotation (standalone)
- [ ] Proforma invoice — new-customer upfront-payment case only
- [x] Sales order confirmation — MAIA-only, does not push to AutoCount (SL-13)
- [x] Invoice
- [x] Delivery order / delivery note
- [ ] Pick list (internal) — not used
- [x] Credit note
- [ ] Debit note
- [x] Payment receipt — on request only (SL-17)
- [ ] Statement of Account (SOA)
- [ ] Other: _______________

**8.2** Are your document templates generated by the ERP's built-in report engine?

> `No — SL-14 (LOCKED 2026-07-31) confirms MAIA uses its own PDF template for all 5 doc types (SO/SI/DO/CN/QTN), not AutoCount's report engine. [GAP — ask live] confirm this matches what Dalson expects, since branding/format wasn't independently reconfirmed with the client. Note: SL-14 has no UAT test cases written yet.`

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require?

> `Standard invoice fields only, nothing unusual required (VOC-014, confirmed). Owner previously offered to bring 3–5 sample documents (PO, quotation, invoice, DO). [GAP — ask live] confirm these were actually collected and used for SL-14 template design, or are still outstanding.`

**8.4** What reports do you look at regularly?

> `[GAP — ask live] never asked.`

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?

> `[GAP — ask live] never asked.`

---

## Section 9 — Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?

> `Superseded — production channel is Telegram (@maia_dalson_bot), confirmed with client 2026-07-12. Original WhatsApp Business setup questions are moot for Phase 1.`

**9.2** Would you want MAIA to communicate with your customers via WhatsApp?

> `Out of Phase 1 scope — internal-facing only.`

**9.3** Would you want MAIA to help your internal team via WhatsApp?

> `Yes — core of Phase 1, via Telegram. Staff forward orders, receive drafts, confirm submissions, forward payment proofs.`

**9.4** What primary languages does your team use in daily operations?

> `English primary, possibly Mandarin and/or Malay — never explicitly confirmed. [GAP — ask live].`

**9.5** What primary languages do your customers communicate in?

> `[GAP — ask live] never asked.`

---

## Section 10 — Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve? (In your own words — be as specific as possible.)

1. `Manual order intake — too much time spent interpreting and keying in orders.`
2. `SKU mismatch — customer descriptions don't match internal item names, causing errors.`
3. `Fragmented visibility — POD and follow-up records scattered across WhatsApp and AutoCount.`

> Pre-filled from VoC synthesis clusters — present back to Yap Li Min to confirm or amend in her own words live.

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?

> `[GAP — ask live] open-ended, best asked live.`

**10.3** Is there anything that currently "falls through the cracks" — orders missed, documents lost, follow-ups forgotten?

> `[GAP — ask live] open-ended, best asked live.`

**10.4** If MAIA could only do one thing for your business, what would it be?

> `[GAP — ask live] open-ended, best asked live.`

**10.5** Is there anything your team currently does outside the ERP system (in WhatsApp, spreadsheets, paper, or memory) that you believe should be in a system?

> `[GAP — ask live] open-ended, best asked live.`

---

## Section 11 — Data Readiness

**11.1** Can you provide the following in Excel or CSV format? (Check all you can provide.)

- [x] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit)
- [x] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive status)
- [x] Price list(s) — standard and/or customer-specific
- [x] Current stock balances (item, warehouse, quantity)
- [ ] Supplier list — not requested/relevant per sources

> `Owner explicitly wants these exported: full order history, customer info, credit limit/terms, inventory, and pricing (VOC-005, confirmed). Migration reportedly done (SL-6, LOCKED) — [GAP — ask live] confirm it's complete and current, not stale.`

**11.2** For each item checked above, who in your team will prepare this data?

> `Implied Ms Tan (AutoCount dealer) — not explicitly assigned. [GAP — ask live].`

**11.3** Please provide 3–5 sample transaction documents.

> `Owner previously offered to provide these (VOC-008): PO, quotation, invoice, DO. [GAP — ask live] confirm they were actually received and used for SL-14 template design, or are still outstanding.`

**11.4** Do you want historical transaction data (old orders, invoices, etc.) available inside MAIA, or are you comfortable starting fresh with forward-only data?

- [ ] Forward-only (new transactions from go-live onwards) — standard
- [x] Want historical data migrated — approximate date range: **[GAP — ask live, not specified anywhere]**
- [ ] Unsure — to discuss

> `SL-6 implies migration happened, but the scope/date-range of historical data brought in is not explicit anywhere. Confirm forward-only vs. migrated range.`

*Note: Historical data migration is a separate scope item. We will assess feasibility and cost based on the volume and quality of your data.*

---

## Section 12 — Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline?

> `Per Phase 1 Timeline, go-live was targeted 2026-07-20–22, training 22–27, hypercare Aug 3 — but this predates the still-open blocking items (Cash Sales Invoice, SL-13 re-verification), so the real live-session date/timeline needs re-confirming as current. [GAP — ask live].`

**12.2** Who from your team will be the internal project owner — the day-to-day contact during onboarding?

> `Yap Li Min is the clear primary contact throughout every source — not formally named as "project owner" in any doc. [GAP — ask live] confirm.`

**12.3** Who will be the decision-maker if we need approvals during setup?

> `Yap Li Min — she personally sets and corrects business rules throughout (credit note policy, receipt policy) per VoC. [GAP — ask live] UAT signatory role still explicitly open: is she the sole signatory, or do Asilah/Joseph sign off their own portions?`

**12.4** Are there any upcoming events that might affect your availability during onboarding?

> `[GAP — ask live] never asked.`

---

## What Happens Next

Once this questionnaire and the sample data items are returned/confirmed, we will:

1. Review responses and prepare a focused agenda for the deep-dive/sign-off session
2. Resolve blocking items (Cash Sales Invoice sizing, SL-13 re-verification) before UAT sign-off
3. Lock the go-live date once the open timeline question (§12.1) is answered

---

## Appendix — Priority Gap List for Tomorrow's Session

Pulled together from the sections above, ordered by blast radius:

**Blocking / ★Critical — must resolve before UAT sign-off:**
1. **Cash Sales Invoice support** — confirmed gap 2026-07-31: Dalson does handle walk-in/cash sales, MAIA has no cash-invoice type built. Not sized.
2. **SKU count (§4.1)** — never answered anywhere.
3. **§4.5 product-attribute checklist** (expiry/batch/serial/multi-UOM/bundles/variants/images) — never answered; multi-UOM and variants are the most common SKU-mismatch trigger.
4. **E-invoicing/LHDN status (§7.7)** — never confirmed specifically for Dalson.
5. **SL-13 re-verification** — "quotation stays MAIA-only" downgraded HIGH→MED confidence (2026-07-31) after an uncited claim was rejected; needs a properly attributed live-AutoCount check or direct re-confirmation.

**Identity / role gaps:**
6. "Dalson Multi Supply" vs "Dalson Industrial Supplies Sdn Bhd" (§1.1) — same entity or separate?
7. Driver identity conflict (§2.4) — Field Guide says no internal driver; Process Map still lists it open.
8. UAT signatory (§12.3) — sole (Yap Li Min) or multi-signatory?
9. Asilah's visibility scope — own customers only, or all of Dalson's?
10. Delivery method drift (§6.1) — original doc said own fleet, every later source says Lalamove.
11. Order-intake channel mix (§5.1) — template never asks the % split between PO document / WhatsApp-style (text, voice, image) / phone call. Each needs a different parsing capability from MAIA. Confirm the split translates onto Telegram, the actual production channel.

---

*MAIA by Mindhive — Client Onboarding Questionnaire v2.0 (Dalson Industrial Supplies, prefilled draft)*

## See Also
- [[Dalson — Consolidated Overview]]
- [[Dalson — VoC Extraction]]
- [[Dalson — Before vs After MAIA and E2E Flow]]
- [[Dalson — UAT Checklist]]
- [[Dalson — End-user & Process Map]]
- [[Dalson — Lens Alignment Report]]
- [[Dalson Industrial Supplies Customer Narrative Document]]
- [[Dalson MAIA autocount integration]]
- [[Dalson Phase 1 Timeline]]
- Scope Lock v2 — Dalson Industrial Supplies (Lark, doc token `VHQPdEnCbopM9pxRapJliGiXgrb`)
- [MAIA Pre-Onboarding Requirements Questionnaire (Lark template)](https://eg69120xnei.sg.larksuite.com/wiki/FlCrwNJzdiVCadkCHzyliV0KgSe)

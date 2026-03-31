---
owner: [Your Name]
status: draft
last_reviewed: 2026-03-26
meeting_date: YYYY-MM-DD
client: JDX
meeting_type: discovery
---
@
# Discovery Meeting Notes — JDX Tea (九鼎香) — [Date]

**Date:** YYYY-MM-DD
**Time:** HH:MM – HH:MM
**Location / Platform:** [Zoom / Google Meet / In-person]
**Attendees:**
- [PM Name] — MAIA PM
- [GTM Name] — MAIA GTM
- [Boss Name, Title] — JDX
- [Name, Title] — JDX

**Reference:** [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Discovery Call Questionnaire]]

---

> **Context before this call:**
> JDX Tea (九鼎香) — JDX GIFT AND FOOD SDN. BHD — is a premium Chinese tea brand operating across **5 sales channels** and **6 physical stores** in Klang Valley (Kepong HQ/store, Metro Prima, Klang, Puchong, Desa Parkcity, SS2 PJ). They are the official **大益 (TaeTea/Dayi)** distributor in Malaysia. Product range: teas, teaware, marine delicacies (abalone, dried seafood), wellness products, and seasonal hampers (CNY + Hari Raya). Current systems: SQL ERP + unnamed third-party salesman app, disconnected. Boss also owns a palm oil B2B business. GTM flagged customisation as likely needed.
>
> **How to use:** Fill each section live during the call. Use `>` blockquotes for direct quotes. Mark anything unresolved with `⚠️`. Flag items needing follow-up with `→ FU`.

---

## 1. Company & Business Overview

**Goal:** Confirm the full business scope — channels, locations, team, priorities.

### Business overview
- Full product range in scope for MAIA (all 5 categories, or prioritise?):
- Number of active SKUs total:
- How they describe their biggest operational bottleneck today:

### Sales channel split — confirm and fill in
| Channel | Confirmed? | Est. % revenue | Priority for MAIA? |
|---------|-----------|---------------|-------------------|
| Wholesale consignment (Giant / AEON) | ~50% from GTM | | |
| Field salesman (bottle/packet shops) | ~20–30% from GTM | | |
| 6 retail stores (walk-in) | Confirmed via website | | |
| B2C online (Shopify + WhatsApp) | Confirmed via website | | |
| Corporate B2B (hampers, tea service) | Confirmed via website | | |

### Team structure
- Who manages warehouse / inventory:
- Who manages the 6 retail stores:
- Who manages wholesale accounts (Giant / AEON):
- Who manages finance / AR:
- Finance team size:
- CS team size:

### Decision maker
- Boss name confirmed:
- Who else has sign-off authority:

⚠️ Follow-ups:
-

---

## 2. Channel 1 — Wholesale Consignment (Giant / AEON)

**Goal:** Map the full consignment cycle. No PO — JDX places stock, invoices on sell-through.

### Outlets & product placement
- Which Giant / AEON outlets (how many, which states):
- Do different outlets carry different product mixes (e.g. Pu'er only vs full range):
- Who decides what goes to Giant vs AEON vs bottle shops:

### Placement decision
- How is quantity per product per outlet decided:
- Is this the "by feeling" forecasting the boss mentioned, or a separate process:
- Who makes the final placement call:

### Sell-through tracking
- How does JDX know what was sold at each outlet:
  - Giant/AEON sends a sell-through report: (frequency / format / system):
  - Or JDX physically checks:
  - Or via EDI / system connection:
- Who on JDX's side monitors this:

### Invoicing
- When is the invoice created — on placement, on sell-through data received, or on a fixed schedule:
- Who creates it and in which system (SQL ERP?):

### Replenishment
- What triggers a replenishment visit:
- Who physically replenishes the shelf:
- How is the replenishment quantity calculated (top up to fixed level / based on sell-through):

⚠️ Follow-ups:
-

---

## 3. Channel 2 — Field Salesman (Bottle / Packet Shops)

**Goal:** Map the salesman app workflow. No PO — salesperson visits, invoices and collects payment on the spot.

### Field sales team
- Number of salespeople:
- How are routes/territories divided:
- Visit frequency per shop:

### Order flow (step by step — fill live)
1. Salesperson arrives at bottle/packet shop:
2. How order is taken (verbal / app catalog):
3. Order entered into app:
4. Invoice issued on spot via app (Y/N):
5. Payment collected on spot (Y/N):
   - Cash / QR / transfer:
6. Goods delivered — same visit or scheduled separately:

### The salesman app
- App name / provider:
- What it handles today: order capture / invoice / payment / inventory:
- What it cannot do (known gaps):
- Does app sync back to SQL ERP (Y/N):
  - If no — how does sales data get into main system:
- Replace with MAIA or integrate:

⚠️ Follow-ups:
-

---

## 4. Channel 3 — Retail Stores (6 Outlets)

**Goal:** Understand how 6 stores operate — this was not mentioned in the GTM call, need full picture.

### Store operations
- Do the 6 stores use a POS system today:
  - If yes — which one, and does it connect to SQL ERP:
- How is inventory managed per store — centrally or each store independently:
- How does stock move from HQ warehouse to each store:
  - Transfer order process:
  - Frequency:
- Who manages each store (store manager / staff count):

### Sales at store level
- Do stores issue invoices / receipts, or just POS receipts:
- Do they accept B2B orders at store (e.g. corporate walks in to order hampers):
- Do stores run their own promotions, or central pricing only:

### Stock visibility
- Can HQ see real-time stock at each store today (Y/N):
- If a customer calls HQ asking if SS2 store has a product — how does CS check:

### Are stores in scope for MAIA?
- Want MAIA to cover retail stores too, or focus on wholesale + HQ first:

⚠️ Follow-ups:
-

---

## 5. Channel 4 — B2C Online (Shopify + WhatsApp)

**Goal:** Understand e-commerce volume and integration appetite with MAIA.

### Online sales
- Average website orders per month:
- Average order value (rough):
- WhatsApp ordering flow — how does it work end to end:
- Loyalty points — how are they managed today (Shopify app / manual):

### Fulfilment
- Who picks and packs online orders — same warehouse as wholesale:
- Delivery partner for online orders (PosLaju / J&T / DHL / others):
- Delivery SLA (same day / next day / standard):
- Self-collect from store option available (Y/N):

### Shopify integration appetite
- Would they want MAIA to sync with Shopify (inventory, orders):
- Or handle online separately and focus MAIA on B2B/wholesale:

⚠️ Follow-ups:
-

---

## 6. Channel 5 — Corporate B2B (Hampers + Tea Service)

**Goal:** Understand hamper assembly workflow and corporate tea service — both are distinct from standard MAIA flows.

### Corporate hamper orders
- Volume: approx. how many corporate hamper orders per CNY season:
- How do corporate orders come in (WhatsApp, email, walk-in, dedicated sales):
- Are hampers pre-configured sets or fully custom per customer:
- Minimum order quantity for corporate:
- Is there a quotation step before confirmation:

### Hamper assembly workflow (kitting)
- Who assembles the hampers — internal team or outsourced:
- How is the BOM (bill of materials) managed — which products go into which hamper set:
- How is assembly tracked — when items are pulled from main inventory, how is that recorded:
- Are hampers assembled in advance (forecast-based) or only after order confirmed:
- Peak period: how many hampers assembled per day during CNY / Hari Raya:
- Does the current SQL ERP handle kitting / assembly at all:

### Tea service for events/offices
- What does this service involve (equipment, tea master, products):
- How is it booked and invoiced:
- Volume (how many events per month):

⚠️ Follow-ups:
-

---

## 7. Inventory Management

**Goal:** Understand how stock is tracked across a very complex multi-location, multi-category setup.

### Current state
- Single inventory pool or separated by channel/location:
- System used (SQL ERP / separate WMS / Excel):
- Who is responsible for inventory accuracy:
- Is there a regular stock count process (cycle count / full count):

### Multi-location stock
- How is stock allocated between HQ warehouse and 6 stores:
  - Transfer process:
  - Replenishment trigger:
- How is consignment stock at Giant/AEON tracked (separate from warehouse stock):
- How is stock on the salesman's van tracked (if field sales carry stock):

### Product-specific considerations
- Pu'er tea: does aging / vintage matter for inventory tracking (older stock vs new):
- Marine delicacies (seafood): any expiry / shelf life tracking needed:
- Hamper components: how are bundled items tracked before and after assembly:

### Pain points
-
-

⚠️ Follow-ups:
-

---

## 8. Demand Forecasting & Seasonal Planning

**Goal:** Understand the real process behind the "gut feel" — especially critical with CNY AND Hari Raya peaks across 6 stores + wholesale.

### Forecasting today
- Boss said "by feeling" — is there any data / Excel behind it (per store / per outlet / per SKU):
- Who does the forecasting — boss personally or a dedicated person:
- How far ahead do they plan for CNY: (1 month / 2 months / 3 months prior):
- How far ahead for Hari Raya:

### Seasonal demand pattern
- CNY: how much does volume spike vs normal months (rough %):
- Hari Raya: similar spike or different scale:
- Any other seasonal peaks (Mooncake Festival / year-end gifting):
- Which products see the biggest swings during peak season:

### Allocation decisions
- For CNY hampers: how many units of each hamper type to produce in advance:
- For store stock: how much extra to push to each store pre-CNY:
- For consignment (Giant / AEON): how much more to place vs normal months:
- Have they ever been caught with too little or too much stock during CNY:

⚠️ Follow-ups:
-

---

## 9. Finance & Payment

**Goal:** Map payment flows across all 5 channels — each works differently.

### Payment by channel
| Channel | Payment timing | Method | Credit terms |
|---------|---------------|--------|--------------|
| Consignment (Giant / AEON) | | | |
| Field salesman (bottle shops) | | | |
| Retail stores | | | |
| B2C online | | | |
| Corporate hampers | | | |

### Credit management
- Which customers are on credit (likely Giant / AEON / corporate):
- How is credit limit set and who approves:
- What happens when a customer exceeds their limit:
- AR aging — how is it monitored today:

### Invoicing
- Who issues invoices for each channel — one team or per channel:
- Invoice numbering — single sequence or separate per channel:
- Is the current SQL ERP used for all invoicing or just some:

### Bank reconciliation
- Who does it, how often:
- Any manual matching of payments today:

⚠️ Follow-ups:
-

---

## 10. Warehouse, Delivery & Fulfilment

**Goal:** Understand the physical goods flow — complex with 6 stores, wholesale, field sales, online, and hamper assembly all drawing from the same warehouse.

### HQ warehouse
- Location: Kepong HQ confirmed — is there only one warehouse:
- How is the warehouse organized (zones for different product types):
- Who manages warehouse operations:

### Outbound — by channel
| Channel | How goods move | Who arranges | Lead time |
|---------|---------------|-------------|-----------|
| Consignment replenishment (Giant/AEON) | | | |
| Field salesman (does van carry stock?) | | | |
| Store replenishment (HQ → 6 stores) | | | |
| Online orders | | | |
| Corporate hamper delivery | | | |

### Third-party logistics
- Couriers used (PosLaju, J&T, DHL, others — for which channels):
- Own vehicles / drivers (Y/N — how many):

### Proof of delivery
- Do B2B customers sign a physical DO:
- Digital POD for any channel:

### Failed delivery handling
- Process and rescheduling for managed deliveries:

⚠️ Follow-ups:
-

---

## 11. Returns & Credit Notes

**Goal:** Understand how returns work across categories — especially important for perishable marine delicacies and seasonal hampers.

### Return scenarios
- Consignment: does Giant/AEON return unsold stock back to JDX (especially post-CNY):
- Field sales: does salesperson handle returns at the shop on next visit:
- Retail stores: walk-in customer return process:
- Online: how does customer return an item (ship back / return to store):
- Corporate hamper: return / exchange policy for corporate gifts:

### Product assessment
- Non-damaged → exchanged. Is this a new invoice or a swap:
- Damaged → inventory adjusted and disposed. Who approves:
- For marine delicacies / wellness: shelf life / expiry — does this affect return eligibility:

### Credit notes
- Who creates CNs and in which system:
- Can CN offset future invoice or cash refund only:

⚠️ Follow-ups:
-

---

## 12. Current Systems & Integrations

**Goal:** Map every tool in use — SQL ERP, salesman app, Shopify, and anything else.

### Full system list
| System | Purpose | Used by | Integrated to anything? |
|--------|---------|---------|------------------------|
| SQL ERP / SQL Accounting | Main ERP + accounting | HQ | |
| Third-party salesman app (name TBC) | Field sales, spot invoicing | Salespeople | |
| Shopify | B2C website, loyalty points | CS / marketing | |
| POS system (if any) | Retail store sales | Store staff | |
| Excel | Forecasting / ad hoc | Boss / ops | |
| | | | |

### Key data flow gaps
- Salesman app sales → SQL ERP: manual or auto:
- Shopify orders → SQL ERP / warehouse: how:
- Store POS → SQL ERP: how:
- Consignment sell-through data → SQL ERP: how:

### MAIA scope — what they want replaced vs integrated
- SQL ERP: replace or keep alongside MAIA:
- Salesman app: replace with MAIA or integrate:
- Shopify: integrate (sync inventory + orders) or keep separate:
- Store POS: in scope for MAIA or keep separate:

⚠️ Follow-ups:
-

---

## 13. Palm Oil Sister Business

**Goal:** Assess secondary MAIA opportunity — clean B2B PO-based fit.

- Company name:
- Product / market (B2B export to Philippines confirmed — expand):
- Current system:
- Order flow (PO → SO → DO → Invoice):
- Volume / team size:
- Boss open to MAIA for this business (Y/N):
- Separate or shared engagement with JDX:

⚠️ Follow-ups:
-

---

## 14. Samples to Collect

Ask at the end. Mark what's received.

**Documents:**
- [ ] Sales Order (any channel)
- [ ] Invoice — consignment sell-through
- [ ] Invoice — salesman app (screenshot)
- [ ] Delivery Order (DO)
- [ ] Credit Note
- [ ] Quotation (if used for corporate)
- [ ] Hamper BOM / assembly list

**Data / lists:**
- [ ] Product/SKU list (full catalog)
- [ ] Price list (per channel if different)
- [ ] Customer list (structure, anonymised)
- [ ] Store list with addresses (confirm 6 locations)
- [ ] Sell-through report sample from Giant / AEON
- [ ] Any forecasting file (Excel or otherwise)
- [ ] Shopify order export sample

---

## Parking Lot

| # | Item | Raised By | Action |
|---|------|-----------|--------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Key Takeaways

> PM's synthesis after the call — fill after, not during.

- **Channel 1 — Consignment:**
- **Channel 2 — Field Sales:**
- **Channel 3 — Retail Stores (6):**
- **Channel 4 — Online B2C:**
- **Channel 5 — Corporate / Hampers:**
- **Biggest pain point:**
- **Hamper assembly complexity:**
- **Fit assessment (first read):**

---

## Action Items

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Next Steps

- [ ] Fill in full `[[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Requirement Gathering]]`
- [ ] Complete Fit Assessment table
- [ ] Share with KB Lead for fit verdict
- [ ] Update pipeline tracker: `[[03 - Clients/Discovery Pipeline/README]]`
- [ ] Schedule follow-up / demo if proceeding: [Date TBC]

---

**See Also:**
- [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Discovery Call Questionnaire]]
- [[03 - Clients/Discovery Pipeline/GTM Briefs/JDX/JDX]] — updated GTM brief
- [[03 - Clients/Discovery Pipeline/GTM Briefs/JDX/JDX Transcript]] — pre-sales transcript
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]

---
owner: [GTM Owner Name]
status: draft
last_reviewed: 2026-03-26
client: JDX
prospect_stage: gtm_brief
---

# GTM Brief — JDX Tea (九鼎香)

**Prepared by:** [GTM team member]
**Date:** 2026-03-26
**PM Assigned:** [PM name]
**Source:** [Referral / Outbound / Inbound / Event]

> This brief is for the PM to read **before** the discovery call. Keep it high-level — details come out in the meeting.

---

## Company Snapshot

| Field | Details |
|-------|---------|
| Company | JDX GIFT AND FOOD SDN. BHD (九鼎香) — Reg: 1018369-U |
| Industry | Premium Chinese Tea — Wholesale, Retail & Gifting (FMCG / Specialty F&B) |
| HQ | 203, Jalan 1, Taman Perusahaan Ehsan Jaya, Kepong, 52100 KL |
| Retail stores | 6 physical outlets across Klang Valley (Kepong, Klang, Puchong, Desa Parkcity, SS2 PJ) |
| Website | jdx.com.my (Shopify, with loyalty points programme) |
| Company size | [No. of employees — TBC] |
| Est. users on MAIA | [TBC — likely covers warehouse, retail, finance, CS, sales team] |
| Current system | SQL-based ERP + third-party salesman mobile app (fragmented, not integrated) |
| Decision maker | Boss (name TBC) — also owns a separate palm oil business |
| Go-live urgency | Exploring — needs full flow mapped before committing |

---

## What They Sell

JDX is a premium Chinese tea brand and multi-category specialty retailer. Much wider than tea alone:

| Category | Products |
|----------|---------|
| **Teas** | Pu'er (普洱), Oolong (乌龙), Liubao (六堡), Flower (花茶), Black (红茶), Jasmine |
| **Premium brand** | Official 大益 (TaeTea/Dayi) distributor — China's #1 Pu'er brand |
| **Teaware** | Tea sets, Yi Gong Fang products, travel tea sets |
| **Marine Delicacies** | Abalone, dried seafood |
| **Daily Wellness** | Bird's nest (Borneo), Tiger Milk Mushroom + Propolis (ActiBoost), ELITEA Essence |
| **Seasonal Gifting** | CNY hampers & gift sets, Hari Raya hampers |
| **Services** | Modern Chinese tea service for events/offices |

**Key insight:** Hampers are a major revenue line — custom-assembled gift sets for CNY and Hari Raya. This is a distinct fulfilment workflow (assembly, not pick-and-ship).

---

## Sales Channels (5, not 3)

*More complex than the GTM conversation suggested — website reveals full picture:*

| Channel | Description | % est. |
|---------|-------------|--------|
| **Wholesale consignment** | Products placed at Giant Grocer, AEON on consignment; invoiced on sell-through | ~50% |
| **Salesman direct (field sales)** | Salespeople visit bottle/packet shops, issue invoice + collect payment on spot via third-party app | ~20–30% |
| **Retail stores (6 outlets)** | Walk-in customers at 6 physical stores across Klang Valley | TBC |
| **B2C online** | Shopify website, WhatsApp ordering (+603 9212 0997), loyalty points | TBC |
| **Corporate B2B** | Corporate hamper orders, tea service for events/offices | TBC |

---

## Why They're Looking

Top pain points surfaced during GTM conversation:

1. **No proper consignment tracking** — JDX places products at Giant Grocer and AEON on consignment. They track how many units per outlet, monitor sell-through, and invoice only based on what's sold. Currently managed manually / via a fragmented ERP — error-prone at scale.

2. **Demand forecasting by gut feel** — The boss said forecasting is "by feeling". Allocation per outlet is seasonal (CNY shifts demand significantly across 6 stores + all wholesale outlets simultaneously). No structured system — likely some Excel underneath, but unconfirmed. This is a known gap.

3. **Fragmented multi-channel system** — Multiple sales channels (consignment, field sales, 6 stores, online, corporate) running on separate tools with no integration. SQL ERP and salesman app don't talk to each other. Inventory truth is unclear.

---

## High-Level Business Workflows

> Tick what's in scope. Don't go deep — the PM will dig into details during the discovery call.

**Sales**
- [ ] Quotation → Sales Order *(only applies to some B2B — consignment and spot sales skip PO)*
- [ ] Multi-currency pricing *(MYR only, likely — confirm)*
- [ ] Credit limit management *(large grocers likely on credit)*
- [x] Batch / periodic invoicing *(consignment sell-through invoicing)*
- [x] Seasonal pricing / promotions *(CNY and Hari Raya hamper pricing)*
- [x] Corporate/bulk order handling *(hampers, tea service)*

**Sales Channels**
- [x] **Wholesale consignment (Giant / AEON ~50%)** — placement → sell-through → invoice cycle
- [x] **Field salesman (bottle/packet shops ~20–30%)** — third-party app, spot invoice + payment
- [x] **Retail stores (6 locations)** — walk-in sales, likely POS; inventory per store
- [x] **B2C online (Shopify + WhatsApp)** — website orders, loyalty points, delivery
- [x] **Corporate B2B** — hamper bulk orders, tea service bookings

**Logistics / Warehouse**
- [x] Inventory management *(critical — stock across HQ warehouse + 6 stores + consignment outlets)*
- [x] Inbound GRN / receiving *(tea imports, marine delicacies)*
- [x] Outbound delivery / DO *(delivery to wholesale, online orders, corporate)*
- [x] Multi-location stock management *(6 stores + HQ warehouse)*
- [x] Hamper assembly / kitting *(seasonal — assemble multiple SKUs into gift sets)*

**Finance**
- [x] AR / collections *(consignment sell-through + corporate credit)*
- [ ] AP / payments
- [x] Credit & debit notes *(returns, damaged goods)*
- [ ] Financial reporting

**Integrations (known)**
- [ ] Salesman app: third-party (name unknown)
- [ ] E-commerce: Shopify (website)
- [ ] Accounting: SQL ERP (likely SQL Accounting)

---

## Initial Fit Hypothesis

**Fit level:** 🟡 Partial — more complex than a typical MAIA client, customisation likely needed

**Reasoning:**
JDX is a multi-channel specialty retailer with 6 physical stores, wholesale consignment, a field sales app, an online store, and a hamper assembly business. The standard MAIA Quote-to-Cash flow covers the wholesale B2B side reasonably well, but:
- Consignment model (no PO, invoice on sell-through) is non-standard
- Retail POS across 6 stores may be out of MAIA's scope
- Hamper kitting / assembly is a distinct workflow MAIA may not support out of the box
- Shopify integration needed for B2C

GTM already flagged this to the boss — customisation is expected. Boss acknowledged and is open. The palm oil sister business remains a cleaner quick-win if JDX's complexity is too high for phase 1.

---

## Suggested Questions for PM

1. Which channel is the biggest operational headache right now — the consignment tracking, field sales, multi-store inventory, or online?
2. How do they manage inventory across 6 stores today — one central system, or each store independently?
3. Walk us through the hamper assembly process — how are hampers built, tracked, and dispatched during CNY peak?
4. Behind the "gut feel" forecasting — is there any Excel or data per store, per outlet, per season?
5. The Shopify site is live — is e-commerce a priority for MAIA integration, or back-office first?
6. Tell us more about the palm oil business — is that in scope, or just JDX for now?

---

## Next Steps

- [ ] PM reads this brief before the discovery call
- [ ] Discovery call scheduled: 2026-03-25 (per transcript — confirm if follow-up needed)
- [ ] After the call: PM creates `[[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX]]`
- [ ] Update pipeline tracker in `[[03 - Clients/Discovery Pipeline/README]]`

---

**See Also:**
- [[JDX Transcript]] — raw GTM conversation transcript
- [[03 - Clients/Discovery Pipeline/GTM Briefs]] — all GTM briefs
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]] — PM fills this after the call

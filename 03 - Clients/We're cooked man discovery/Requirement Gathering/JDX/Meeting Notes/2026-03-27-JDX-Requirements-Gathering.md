---
owner: Gareth
status: draft
last_reviewed: 2026-03-30
meeting_date: 2026-03-27
client: JDX Tea (九鼎香)
meeting_type: requirements_gathering
fireflies_id: 01KMHSPX3PM8R0S7Y0V0YSPMSB
---

# Requirements Gathering — JDX Tea (九鼎香) — 2026-03-27

**Date:** 2026-03-27
**Duration:** ~109 min
**Platform:** Google Meet
**Attendees:**
- Jeremy Chan — Mindhive (organiser)
- Brendan Ou Yong — Mindhive PM
- Johnson — Mindhive
- Jun Ying — Mindhive
- Mr. Kong — JDX Tea (client)

---

## Context

JDX Tea (九鼎香) is a premium Chinese tea brand in Malaysia. They are the official **大益 (TaeTea/Dayi)** distributor. Business is primarily **seasonal** — peak during CNY and Hari Raya with up to hundreds of orders per day. Off-season volume is very low.

This was the first requirements gathering / demo session. Jeremy walked through MAIA's capabilities, then Brendan and the team gathered process details from Mr. Kong.

---

## Business Overview

| Dimension | Detail |
|-----------|--------|
| Business type | B2B distributor — tea, marine delicacies, seasonal hampers |
| Sales model | Consignment (Giant/AEON) + direct corporate + tea retail |
| Peak seasons | CNY, Hari Raya |
| Off-season | Very low daily volume (near zero some days) |
| Primary pain | Manual billing and delivery tracking during peak |

---

## Sales Channels

### Channel 1 — Wholesale Consignment (Giant / AEON)
- JDX places stock at Giant/AEON outlets without a PO
- Invoiced on sell-through data
- Volume tracking is manual / report-based from grocer

### Channel 2 — Corporate B2B Hampers (~80% of peak revenue)
- Custom hampers with **8–12 items per set**; ~30–40% common components
- Customisations captured in remarks on pro forma invoices (not via separate SKU codes)
- Corporate clients use their own B2B portals for large orders
- Payment: mostly cash before delivery; pro forma invoice → payment → actual invoice
- Special requests: packaging, greeting cards, delivery instructions in remarks

### Channel 3 — Tea Retail / Regular B2B
- Regular sales to tea shops and restaurants at low volumes
- Managed via tablet POS system integrated to SQL

### Channel 4 — B2C Online / Shopify
- Not the primary focus for MAIA in this engagement

---

## Current Process (Pain Points)

| Pain Point | Detail |
|------------|--------|
| Manual order handling | Excel + WhatsApp for seasonal orders; manual reconciliation between promoters, coordinators, warehouse |
| Billing complexity | Pro forma invoices issued pre-payment; actual invoice only after payment received |
| Delivery tracking | Multiple deliveries per order (outstation, multi-drop); tracked manually via photos and third-party systems |
| Consignment reconciliation | Sell-through data from grocers requires manual matching |
| Inventory | Mostly manual; SQL used mainly for accounting codes, not live stock management |
| Scaling during peak | Need more staff each peak season without proportional headcount increase |

---

## Pro Forma Invoice Flow

1. Corporate client places order (WhatsApp / email / B2B portal)
2. JDX issues **pro forma invoice** — includes item breakdown + customisation remarks
3. Client pays (online transfer / cheque) — usually before delivery
4. JDX issues **actual invoice** upon payment confirmation
5. Goods delivered (potentially multi-location)
6. Delivery tracked via photos / third-party courier

---

## Pricing Structure

- Tiered discounts based on order value: **5%–15%** depending on order size and season
- Seasonal pricing adjustments (slightly different rates per CNY / Hari Raya)
- Customised orders (client brings own packaging): discounts voided, no surcharge
- Prices set annually; minor manual overrides allowed per salesperson

---

## Inventory

- **Mostly manual** — Excel-based
- SQL used for accounting codes only, not real-time stock management
- Procurement: **70% accuracy forecast**, supplemented by just-in-time local sourcing
- Hybrid sourcing: China (main) + local suppliers (buffer for seasonal peaks)
- Stock transfers by promoters reported daily via WhatsApp group

---

## MAIA Fit Assessment (First Read)

| Area | Fit | Notes |
|------|-----|-------|
| Order capture via WhatsApp | ✅ Strong | Core MAIA capability — directly addresses their pain |
| Pro forma invoice generation | ✅ Strong | MAIA can generate and track PFI → Invoice flow |
| Delivery tracking | ✅ Strong | Multi-drop coordination is a key ask |
| Consignment sell-through invoicing | ⚠️ Complex | Depends on grocer data format; needs investigation |
| Hamper kitting / BOM | ⚠️ Complex | Product bundles in MAIA — multi-SKU composition mapping needed |
| Seasonal volume spikes | ✅ Strong | No extra staff needed if MAIA handles order intake |
| SQL API integration | ⚠️ TBC | Depends on vendor API availability and cost |
| Inventory management | 🔴 Low fit | Client sees this as low priority; SQL/manual is acceptable |

---

## Action Items

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | Request sample documents: pro forma invoices, DOs, credit notes, customer list, inventory samples | Brendan | ASAP |
| 2 | Coordinate with client's SQL vendor — check API availability and cost | Jeremy | TBC |
| 3 | Prepare customised proposal focused on billing automation + delivery tracking | Mindhive team | After samples received |
| 4 | Schedule follow-up demo using client's actual business scenarios and data | Jeremy | After samples received |

---

## Key Takeaways

- **Primary ask:** Automate billing (pro forma → invoice) and delivery tracking during peak season — this is the client's version of a "Jarvis"
- **Biggest complexity:** Hamper customisation remarks flow and multi-location delivery coordination
- **Low priority:** Inventory management, tea retail POS integration
- **SQL integration:** Possible but cost/availability TBC with vendor
- **Client commitment:** Agreed to provide sample documents and data sets for proposal development

---

## Next Steps

- [ ] Brendan to collect sample documents
- [ ] Jeremy to check SQL API availability
- [ ] Fill in questionnaire gaps from this session: [[03 - Clients/We're cooked man discovery/Requirement Gathering/JDX/Discovery Call Questionnaire]]
- [ ] Prepare customised MAIA proposal once samples received
- [ ] Update pipeline tracker: [[03 - Clients/We're cooked man discovery/README]]

---

**See Also:**
- [[03 - Clients/We're cooked man discovery/Requirement Gathering/JDX/Discovery Call Questionnaire]]
- [[JDX]]

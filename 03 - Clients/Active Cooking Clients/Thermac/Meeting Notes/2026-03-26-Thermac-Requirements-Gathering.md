---
owner: Gareth
status: draft
last_reviewed: 2026-03-30
meeting_date: 2026-03-26
client: Thermac
meeting_type: requirements_gathering
fireflies_id: 01KMEX0S6SSFST6F5Q621EZFJJ
---

# Requirements Gathering — Thermac — 2026-03-26

**Date:** 2026-03-26
**Duration:** ~104 min
**Platform:** Google Meet
**Attendees:**
- Jeremy Chan — Mindhive (organiser)
- Brendan Ou Yong — Mindhive PM
- Johnson — Mindhive
- Jun Ying — Mindhive
- Lim Jun Yan — Mindhive
- Meena Aran — Thermac (primary contact)
- Weng Phoon Leong — Thermac (leadership)
- leong@thermacgroup.com — Thermac

---

## Context

Thermac is a B2B company handling both **product sales** and **service/maintenance work orders**. Monthly volume is under 100 confirmed sales orders, managed by a team of 4 salespeople. Orders primarily come through WhatsApp and email.

Current systems:
- **AutoCount** — on-premise accounting (ERP)
- **Esoft** — physical inventory management (separate system, double-entry required)
- **Excel templates** — pricing quotations and service costing

---

## Business Overview

| Dimension | Detail |
|-----------|--------|
| Monthly sales orders | < 100 confirmed SOs |
| Service inquiries | ~7–8 per month |
| Sales team | 4 salespeople |
| Order channels | WhatsApp + email; official POs via email |
| ERP | AutoCount (on-premise, accessible in-office only) |
| Inventory system | Esoft (separate from AutoCount — double entry) |
| Pricing | Customer-specific; Excel template per salesperson |

---

## Order Flow — Product Sales

1. Customer sends enquiry via WhatsApp or email
2. Salesperson prepares quotation using Excel template (checks historical prices per customer/item)
3. Quotation sent to customer
4. Customer sends official PO (email)
5. Sales order created in AutoCount
6. Inventory checked: if stocked → pick from warehouse; if not → purchase from supplier
7. Invoice generated (upfront for new customers; credit terms up to 90 days for regulars)
8. Delivery arranged (self-delivery local / courier / export)
9. Delivery note issued; customer signs DO

---

## Order Flow — Service Work Orders

1. Customer requests service → quotation raised by sales/admin
2. Customer approves → PO received
3. Work order prepared (2-page form with job scope, parts, technician instructions)
4. Scheduling: propose dates to customer; manager approval only needed for conflicts
5. Technician completes job → customer signs work sheet
6. Invoice issued per payment terms
7. Large orders (>~RM50K): down payment required before scheduling

---

## Inventory & Pricing

### Inventory
- **Stocked items:** Maintained in Esoft; common parts replenished proactively
- **Drop-ship / non-stocked:** Ordered from supplier on demand; no centralized price list
- **Lead times:** Parts: weeks; large products: 1–2 months
- **Pain:** Storekeepers cannot access AutoCount → manual double-entry into both Esoft and AutoCount causes discrepancies

### Pricing
- **Product sales:** Customer-specific pricing via Excel; checked against historical quotations
- **Service:** Separate Excel costing template; calculated per unit/plate with adjustable margins per customer
- **Drop-ship products:** Market-fluctuating supplier prices — no fixed list; shared via email
- **Discounts:** Negotiated per order; no formal tracking of lost bids/quotations

---

## Delivery & Logistics

| Type | Method |
|------|--------|
| Local | Self-delivery |
| Regional | Courier services |
| Export | Freight / shipping |

- No fixed delivery slots or area-based routing
- Delivery scheduling is order-by-order
- Proof of delivery: customer signs physical DO

---

## Finance & Credit Terms

| Customer Type | Payment Terms |
|---------------|---------------|
| New customers | Full upfront or up to 50% down payment |
| Regular customers | Credit terms up to 90 days |
| Overseas customers | Orders held if overdue |
| Large service orders (>RM50K) | Down payment required before scheduling |

- Partial payments, milestone payments, and retention used for large contracts
- Credit limit monitoring is informal; local customers' orders proceed regardless

---

## CRM & Customer Equipment Tracking (Gap)

- **Currently missing:** No system to record customer equipment history, serial numbers, or service records
- **Desired capability:** CRM to track units per customer + automated service reminders + historical issues/parts
- Shared calendar desired for coordinating technician availability and service jobs

---

## Current Pain Points

| Pain Point | Detail |
|------------|--------|
| Manual data handling | Sales order entry repetitive and error-prone; pricing history hard to access |
| Double inventory entry | Esoft (inventory) + AutoCount (accounting) are separate — storekeeper cannot use AutoCount |
| No quotation loss tracking | Lost bids not recorded; no data for bid strategy improvement |
| No CRM | Customer equipment records and service history maintained informally |
| Scheduling visibility | No shared calendar; manpower capacity not accounted for in scheduling |
| Drop-ship pricing | No centralized price list; fluctuates with market; sourced via email |

---

## MAIA Fit Assessment (First Read)

| Area | Fit | Notes |
|------|-----|-------|
| Sales order capture via WhatsApp | ✅ Strong | Core MAIA capability |
| Invoice + DO generation | ✅ Strong | Direct MAIA capability |
| AutoCount integration | ✅ Strong | MAIA feeds AutoCount for accounting compliance |
| Customer-specific pricing | ✅ Good | Configurable per customer |
| Service work orders | ⚠️ Complex | MAIA handles product SOs well; service WO is a distinct flow requiring mapping |
| Inventory sync (Esoft) | ⚠️ Complex | Esoft integration not standard; may require custom work or bridge |
| CRM / equipment tracking | 🔴 Gap | Not a core MAIA feature today; would need roadmap discussion |
| Quotation loss tracking | 🔴 Gap | Not in current MAIA scope |
| Scheduling calendar | ⚠️ Partial | Basic approval flows possible; full capacity scheduling is a gap |

---

## Documents Requested from Client

- [ ] Pricing quotation Excel template
- [ ] Service costing Excel template
- [ ] Sample sales orders, invoices, delivery orders, credit notes, quotations
- [ ] Inventory product catalog + pricing list
- [ ] Completed work order sample form
- [ ] Customer list (anonymised)
- [ ] Permissions / access rights list (roles) — Brendan to send template

---

## Action Items

| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | Send pricing quotation and service costing Excel templates | Meena | ASAP |
| 2 | Provide sample documents (SO, invoice, DO, CN, quotation, customer list, inventory) | Meena | ASAP |
| 3 | Send completed work order sample form | Meena | ASAP |
| 4 | Prepare and send permissions/access rights list for roles | Brendan | ASAP |
| 5 | Add meeting participants to group chat | Weng Phoon | Done |
| 6 | Compile gathered info and design proposed workflow/solution | Brendan | After samples received |
| 7 | Review process flow and identify improvements | Weng Phoon | TBC |

---

## Key Takeaways

- **Primary ask:** Automate order processing, document generation, and reduce double-entry between Esoft and AutoCount
- **Biggest complexity:** Service work order flow is distinct from standard product SO — needs dedicated mapping
- **Strategic insight from Weng Phoon:** Look to remove/change inefficient steps, not just digitise them; shared data and calendar visibility is the goal
- **CRM gap:** Equipment tracking + service reminders is a clear desire but outside MAIA's current core — flag for product roadmap
- **Inventory sync:** Esoft ↔ AutoCount double-entry is a major operational pain; solution depends on integration feasibility

---

## Next Steps

- [ ] Collect sample documents from Meena
- [ ] Map service work order flow in detail once samples received
- [ ] Assess Esoft integration feasibility
- [ ] Prepare MAIA solution proposal
- [ ] Update pipeline tracker: [[03 - Clients/We're cooked discovery/README]]

---

**See Also:**
- [[03 - Clients/We're cooked discovery/README]]
- [[01 - MAIA Product/Overview/Known Limitations]]

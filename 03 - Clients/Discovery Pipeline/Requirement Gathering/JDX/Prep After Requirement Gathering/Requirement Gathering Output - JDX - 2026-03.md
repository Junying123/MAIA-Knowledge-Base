---
owner: [Your Name]
status: draft
last_reviewed: 2026-03-31
client: JDX Tea (九鼎香)
meeting_date: 2026-03-27
transcript_ref: "[[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Meeting Notes/JDX Meeting Transcript - YYYY-MM-DD]]"
---

# Requirement Gathering Output — JDX Tea (九鼎香) — 2026-03

| Field | Details |
|-------|---------|
| **Client** | JDX Tea (九鼎香) — JDX GIFT AND FOOD SDN. BHD |
| **Meeting date** | 2026-03-27 |
| **Attendees** | Brendan Ou Yong (MAIA), Jeremy Chan (MAIA), Kong Kong (JDX) |
| **Purpose** | Initial requirement gathering — business workflow discovery |
| **Raw transcript** | [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Meeting Notes/JDX Meeting Transcript - YYYY-MM-DD]] |

---

## Captured Requirements

### Sales Workflow

- Highly seasonal business — peaks during CNY, Hari Raya, Mooncake Festival, Deepavali; near-zero orders off-season
- 5 sales channels: consignment (Giant/AEON hypermarkets), field van sales (bottle/packet shops), retail walk-in (6 stores), B2C online (Facebook/website → WhatsApp), corporate B2B (hamper orders)
- No purchase orders from Giant/AEON — consignment basis; their B2B portal handles billing monthly
- **Pro forma invoice** used in place of sales order — customers need the word "invoice" to process internal payment
- Customisation handled via **remarks column** on pro forma invoice (ribbon colour, greeting card wording, item substitutions, delivery date)
- General rule: payment collected **before** delivery; pro forma converts to invoice only after payment confirmed
- Van sales (~10–15 clients/day) handled via QSoft tablet + mini printer, integrated to SQL

### Finance Workflow

- Payment methods: bank transfer, Touch & Go, cheque — mostly cash upfront
- Only ~2 dealer accounts on credit terms; credit notes very rare
- Giant/AEON billed monthly via their B2B portal — deduct commission/display charges from final payment; client says this is low MAIA priority
- Pro forma → Invoice conversion happens once payment is received

### Logistics / Warehouse Workflow

- Inventory managed **manually in Excel** — SQL only captures accounting (boom code); no production or inventory module used in SQL
- Delivery modes: own vehicles (lorry, double-deck van, normal van) for Klang Valley; contracted courier for local; 3PL (JT, Skynet, CityLink) for outstation
- Driver takes photo on delivery as proof; physical DO signed by customer
- Multi-location delivery common for corporate orders (e.g. 50 hampers to 50 different addresses)
- Outlet promoters submit daily stock reports via WhatsApp group; top-up requests also via WhatsApp

### Integration Requirements

- Current system: SQL ERP (accounting only) + QSoft (van sales, integrated to SQL)
- No accounting integration needed — Finance handles manually
- QSoft (van sales tablet) — assess whether to replace with MAIA or integrate
- WhatsApp is the backbone of operations — not replacing, but MAIA should reduce reliance on it for order tracking and billing

### Special Workflows

- **Consignment — Giant/AEON:** Seasonal kiosks with own promoters; daily stock report; top-up via WhatsApp request; monthly billing via hypermarket B2B portal; client says low MAIA priority
- **Van sales (field salesman):** ~10–15 clients/day; QSoft tablet issues bill on spot; currently integrated to SQL — assess replacement
- **Corporate hamper orders:** Customer may order 50+ pieces to be delivered to multiple separate addresses; highly manual coordination today

---

## Gaps & Open Questions

| # | Question | Raised by | Status |
|---|----------|-----------|--------|
| 1 | QSoft — keep and integrate, or replace with MAIA van sales module? | Brendan | open — needs clarification with JDX |
| 2 | Multi-address delivery (one order → 50 locations) — feasible in MAIA? | PM | open — discuss with tech team |
| 3 | Sample documents requested from JDX — for product demo prep; JDX to action | Brendan | open — pending client |

---

## Client preparation — samples & documents (briefed)

MAIA has briefed JDX to prepare the following **samples**. They are inputs for a **credible product demo** (realistic documents, line items, and remarks), proposal accuracy, and integration scoping — not paperwork for its own sake. Use the checkboxes when each item is received (file in client folder or link in frontmatter / tracker).

**Demo rule of thumb:** If a sample is still missing, demo that flow using **clearly labelled synthetic data** inspired by the questionnaire — and note the gap in the demo recap.

### Commercial documents

- [ ] **Pro forma invoice** — example(s) showing real layout, numbering, and **remarks / customisation** column usage
- [ ] **Invoice** — post-payment / standard invoice example (after pro forma, if different)
- [ ] **Delivery order (DO)** — including multi-drop or outstation examples if available
- [ ] **Credit note** — example (even if rare); needed to confirm edge cases and wording

### Customer data

- [ ] **Customer** — at least one **example customer record** (master data: billing entity, terms, contacts — anonymise if required)
- [ ] **Customer list** — **example extract** (structure only OK if anonymised: columns, typical B2B vs corporate rows)

### Inventory & stock

- [ ] **Inventory** — how they represent stock today (context: they use Excel + manual process)
- [ ] **Sample inventory list** — export or spreadsheet sample (SKU, location, qty, or however they track)

### Product & information

- [ ] **Product catalog** — list or export (categories, hamper vs single SKU if split)
- [ ] **Product information** — spec sheets, packaging notes, or whatever they use for descriptions (PDF/Sheet OK)
- [ ] **FAQ** — ordering / product / seasonal hamper **FAQ** they give staff or clients (doc, page, or message template)

---

## Demo Readiness — product demo

### Client samples → what we show in demo

Use this table so the **product demo** uses JDX-shaped data where possible. Rows align with **Client preparation — samples & documents** above.

| Product demo scenario | JDX sample / data to have first | If missing |
|----------------------|----------------------------------|------------|
| Pro forma with **remarks** (ribbon, greeting card, delivery date) | Pro forma example + **product catalog** + **product information** + **example customer** | Synthetic hamper + one corporate customer; call out “sample only” |
| **Pro forma → invoice** after payment | **Invoice** example (pair with pro forma if they differ) | Walk through state change with generic line items |
| **Delivery order** + status | **DO** sample; multi-drop / outstation DO if available | Single-DO happy path + describe multi-drop from notes |
| **Multi-address** (one order → many drops) | DO or order sheet showing multiple delivery lines / addresses | Diagram + one synthetic split |
| **Credit note** (edge case) | **Credit note** example | Skip live CN or show generic; note rarity with JDX |
| **Customer master** / list behaviour | **Customer** record + **customer list** extract | One anonymised B2B + one corporate-style row |
| **Catalogue** navigation / hamper mix | **Product catalog** + **FAQ** (if ordering wording matters) | Subset of SKUs loaded for demo env only |
| **Inventory** context (what “in stock” means to them) | **Sample inventory list** + short note on **inventory** process | Say inventory is manual today; light demo or omit deep stock |

### Scenarios to rehearse / build in demo environment (MAIA)

> JDX asked to see these flows. Check off when the demo build is ready — not when the client sends files.

- [ ] Create pro forma invoice with customisation remarks (ribbon colour, greeting card wording, delivery date)
- [ ] Convert pro forma invoice → invoice on payment received
- [ ] Issue delivery order and track delivery status per order (customer-visible)
- [ ] Multi-address delivery: one order dispatched to multiple locations
- [ ] Van sales flow — create and issue bill on spot (QSoft comparison)
- [ ] Outlet stock top-up request and delivery scheduling

### Demo day checklist (quick)

- [ ] Confirm which JDX samples arrived; update checkboxes in **Client preparation**
- [ ] Open with “today we’re using your samples / anonymised examples — here’s what’s real vs illustrative”
- [ ] Capture gaps and questions live → **Gaps & Open Questions** after the session

---

## Next Action Checklist

- [ ] Convert requirements → feature requests (log in [[09 - Intake & Triage/Request Intake Inbox]])
- [ ] Brief tech team on requirements and expected flows
- [ ] Brief tech team on feasibility — flag constraints (pro forma invoice type, multi-address DO, QSoft integration)
- [ ] Prepare product demo (see **Demo Readiness — product demo**: sample-to-scenario map + rehearsal checklist)
- [ ] Prepare proposal (high-level scope, for JDX boss alignment)
- [ ] Draft SOW (detailed scope, flows, constraints, exclusions)
- [ ] SOW → PRD + internal specs (for implementation and UAT test cases)
- [ ] Align SOW with client (sign-off that scope = how the project is closed and tested)

---

## Artefact Tracker

| Artefact | Owner | Status | Due |
|----------|-------|--------|-----|
| Samples & documents from JDX — see **Client preparation — samples & documents (briefed)** (pro forma, invoice, DO, credit note, customer example + list, inventory + sample list, product catalog + product info, FAQ) | JDX (Kong Kong) | pending client | |
| Feature request log | | not started | |
| Tech brief — requirements | | not started | |
| Tech brief — feasibility (pro forma type, multi-address DO, QSoft) | | not started | |
| Demo script / scenarios | | not started | |
| Proposal deck | | not started | |
| SOW document | | not started | |
| PRD | | not started | |

---

## See Also

- Prep outputs for JDX live in this folder: `Prep After Requirement Gathering` (same as “JDX Prep” in conversation)
- [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Meeting Notes/2026-03-27-JDX-Requirements-Gathering]] — structured notes from requirements session (sample requests also in action items)
- [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Meeting Notes/JDX Meeting Transcript - YYYY-MM-DD]] — raw Fireflies transcript
- [[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX/Meeting Notes/JDX Discovery Call - YYYY-MM-DD]] — discovery call questionnaire
- [[09 - Intake & Triage/Request Intake Inbox]] — log feature requests here
- [[02 - PM Playbook/Templates/[Template] PRD]] — next step after SOW
- [[02 - PM Playbook/Templates/[Template] Requirement Gathering Output]] — template this file was based on

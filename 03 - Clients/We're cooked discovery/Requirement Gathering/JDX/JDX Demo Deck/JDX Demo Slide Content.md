---
owner: Gareth
status: draft
last_reviewed: 2026-04-18
client: JDX Tea (九鼎香)
doctype: demo-slide-content
---

# JDX Demo Slide Content

_Demo slide content for MAIA presentation to JDX Tea. Structured around the E2E workflow — each step shows the current pain and how MAIA solves it, demonstrated via web app and WhatsApp chatbot in parallel._

---

## Slide 1 — Cover

**Title:** MAIA for JDX Tea (九鼎香)
**Subtitle:** From Festival Chaos to Frictionless Orders

---

## Slide 2 — JDX Today: The Pain in One Picture

**Title:** Hundreds of Orders. One WhatsApp Thread.

- Peak season: hundreds of corporate hamper orders/day — processed via WhatsApp groups, manual SQL pro formas, Excel spreadsheets
- Every order requires: pro forma created manually → remarks retyped at every handoff → payment slip matched manually → DO created manually → multi-drop tracked on spreadsheet
- When something goes wrong (wrong item, late delivery, wrong date) — coordinator chases by phone and WhatsApp with no central record
- Solution: hire part-timers every festival cycle who don't know the process

> *"If MAIA can optimise our human power in terms of billing and delivery tracking — if these two parts MAIA can do more efficiently than temporarily hiring newbies, that would help a lot already."*
> — Mr. Kong

---

## Slide 3 — The E2E Flow MAIA Replaces

**Title:** Current Process → MAIA Process

| Step                      | Today                                                                                                                                                                                   | With MAIA                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Order intake**          | Orders arrive via WhatsApp, Facebook, website, and kiosk promoters — no central log; each channel feeds a separate conversation thread                                                  | SO created in MAIA (web app or chatbot) — all orders in one place         |
| **Pro forma creation**    | Accounts assistant manually creates pro forma in SQL one by one; customisation (ribbon colour, greeting card, item swap, delivery date, price tag) typed as free text in remarks column | SO + structured remarks → pro forma PDF generated instantly               |
| **Discount applied**      | Coordinator applies discount tier from memory — part-timers often get it wrong; rules change each season                                                                                | Discount tiers configured in MAIA; applied at SO stage                    |
| **Send to customer**      | Pro forma printed or forwarded manually via WhatsApp                                                                                                                                    | PDF sent from MAIA directly                                               |
| **Payment confirmation**  | Customer sends bank slip to a dedicated WhatsApp payment group; coordinator reads group, manually matches each slip to the right pro forma; someone stands by overnight during peak     | Coordinator attaches slip in MAIA; one-click invoice conversion           |
| **DO creation**           | DO created manually after payment matched; customisation remarks retyped or copy-pasted from pro forma — details drop at every handoff                                                  | DO auto-created from invoice; remarks propagate automatically             |
| **Warehouse packing**     | Warehouse reads printed DO or WhatsApp screenshot; cross-checks remarks manually; customised orders pulled out and repacked separately                                                  | Warehouse opens DO in MAIA — all remarks already there                    |
| **Multi-drop scheduling** | 50+ delivery addresses per corporate order tracked on a spreadsheet built per order; addresses captured verbally or via WhatsApp                                                        | One SO → multiple DOs in MAIA; each drop has own date and status          |
| **Delivery tracking**     | KV: driver photos sent to WhatsApp group; coordinator matches photos to drops manually. Outstation: coordinator chases 3PL for tracking numbers and screenshots                         | Mark delivered/failed/reschedule in MAIA or chatbot; live status per drop |
| **Failed delivery**       | Coordinator reschedules by phone and WhatsApp; no central record; each failure takes disproportionate time                                                                              | Flag DO as failed in MAIA; reschedule logged; full context retained       |
| **Invoice conversion**    | Manual pro forma → invoice conversion in SQL after delivery confirmed                                                                                                                   | Triggered on payment confirmation; one click                              |

---

## Slide 4 — Demo Step 1: Create Order + Pro Forma

**Pain:** Accounts assistant manually creates pro forma in SQL; customisation remarks typed as free text; no central order log

**MAIA solves it:**
- Create Sales Order — customer, items, quantities, customisation remarks (ribbon colour, greeting card, delivery date, price tag on/off)
- Pro Forma Invoice PDF generated instantly
- Sent to customer from MAIA

**Demo — Web App:** Create SO in Sales Workspace → Generate PDF → Pro Forma Invoice
**Demo — Chatbot:** WhatsApp → "Create order for [customer], [item], [qty]" → add remarks → send pro forma

---

## Slide 5 — Demo Step 2: Payment + Invoice Conversion

**Pain:** Customer sends payment slip to WhatsApp group; coordinator manually matches to pro forma; coordinators stay up overnight during peak

**MAIA solves it:**
- Coordinator attaches payment slip to the order in MAIA
- One-click Pro Forma → Invoice conversion
- All line items, remarks, customer details carry through automatically

**Demo — Web App:** Finance Workspace → attach payment slip → Convert to Invoice
**Demo — Chatbot:** WhatsApp → "Convert SO-0001 to invoice" → attach slip → receipt created

---

## Slide 6 — Demo Step 3: Remarks Propagation

**Pain:** Same customisation remarks retyped or copy-pasted at every handoff — pro forma → DO → warehouse → ops; details drop; warehouse repacks too late

**MAIA solves it:**
- Remarks entered once at Sales Order
- Same remarks flow automatically: SO → Invoice → Delivery Order → Warehouse view
- No retyping. No copy-paste. No WhatsApp forwarding.

**Demo — Web App:** Show remarks field on the SO — point out where customisation is captured
**Demo — Chatbot:** Show remarks added in the same chat thread when creating the SO
> ⚠ Do not click through to Invoice or DO — remarks propagation is not yet live in MAIA. Explain verbally: "This is built for JDX in Phase 1 — when configured, these remarks will carry through automatically to the DO and warehouse view. We won't demo it live today."

---

## Slide 7 — Demo Step 4: Multi-Drop Delivery

**Pain:** One corporate order = 50+ delivery addresses tracked on a spreadsheet; no live view; failed deliveries handled by phone

**MAIA solves it:**
- One SO → multiple DOs (Blanket Order); each DO has own delivery date and status
- All drops linked to source SO; viewable in one place
- Coordinator schedules, tracks, and updates each drop independently

**Demo — Web App:** Logistics Workspace → create multiple DOs from one SO → each with own date and status
**Demo — Chatbot:** WhatsApp → "Split SO-0001 to 3 DOs: 20/15/15" → MAIA confirms DOs created

---

## Slide 8 — Demo Step 5: Delivery Status Tracking

**Pain:** Coordinator scrolls WhatsApp group to match driver photos to drops; failed deliveries rescheduled by phone with no record

**MAIA solves it:**
- Each DO status: To Schedule → Scheduled → Out for Delivery → Completed / Failed
- Mark delivered, failed, or reschedule from web app or WhatsApp chatbot
- All drops for an order visible in one view — no spreadsheet needed
- Daily Digest each morning: Pending / Scheduled / Out for Delivery / Completed
- Alert when DO not scheduled after X days from invoice creation

**Demo — Web App:** Logistics Workspace → update DO status → view all drops for one order
**Demo — Chatbot:** WhatsApp → "Mark DO-001 as delivered" → Daily Digest preview

---

## Slide 9 — Phase 1 Scope Summary

**Title:** What's In, What's Out

**Phase 1 — Included:**
- Sales Order creation + Pro Forma Invoice PDF
- Customisation remarks — structured, auto-propagation through all documents
- Payment matching + Invoice conversion
- Delivery Order creation from Invoice
- Multi-Drop Delivery (Blanket Order) — one SO → multiple DOs
- Delivery status tracking
- Sales Agent Chatbot (WhatsApp)
- Logistics Agent Chatbot (WhatsApp)
- PDF output: Pro Forma Invoice, Invoice, Credit Note, Receipt, Delivery Note, Picking List

**Phase 2:**
- Consignment kiosk daily stock reporting
- QSoft van sales integration or replacement
- Inventory management

**Not in scope:**
- Giant/AEON B2B portal billing
- SQL accounting integration
- Automated bank reconciliation
- Delivery route optimisation

---

## See Also

- [[Requirement Gathering Output - JDX - 2026-03]]
- [[2026-03-27-JDX-Requirements-Gathering]]
- [[Customer Narrative - JDX]]
- [[SOW for MAIA JDX]]

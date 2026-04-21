---
owner: Gareth
status: draft
last_reviewed: 2026-04-21
---

# JDX Demo Script — Presenter Notes

Use this alongside the demo deck. Each section maps to one slide. The script is a guide — speak naturally, not verbatim.

---

## Slide 1 — Cover

> **"From Festival Chaos to Frictionless Orders"**

**Say:**
"Thanks for having us today, Mr. Kong. What we want to show you is not a product brochure — we want to walk you through a live demo of how MAIA would handle the exact workflow your team runs every CNY and Hari Raya. From order creation all the way through to delivery confirmation. Let's start with the problem we're trying to solve."

---

## Slide 2 — The Pain

**Say:**
"Mr. Kong, when we spoke in March, you told us — and I want to quote you directly — *'If MAIA can reduce the need to temporarily hire newbies for billing and delivery tracking, that would help a lot already.'* That's exactly what we built Phase 1 around.

Let me show you the four areas where your team is absorbing the most pain today."

**Walk through each card:**

- **01 — Order intake:** "Every channel — WhatsApp, Facebook, website — feeds a different thread. No central log. Your coordinator has to be in three places at once."
- **02 — Document handling:** "Each pro forma is created manually in SQL. Customisation remarks — ribbon colour, greeting card, delivery date — typed as free text. No structure. And those remarks have to travel with the order all the way to the warehouse."
- **03 — Payment matching:** "Customers send bank slips to a WhatsApp payment group. Someone on your side has to read that group, figure out which slip belongs to which pro forma, and manually move the order forward. During peak — that's overnight work."
- **04 — Multi-drop delivery:** "One corporate order, 50 addresses. Tracked on a per-order spreadsheet. Driver photos in a WhatsApp group. When a delivery fails, rescheduling is all by phone. No record."

"These four problems are not unique to JDX — but they compound hard at your volume during a two-week CNY window. Let me show you how MAIA handles all four."

---

## Slide 3 — E2E Flow

**Say:**
"This is the full MAIA order-to-cash flow for JDX. Let me walk you through it once so you have the map, then we'll go step by step in the demo.

A coordinator creates the Sales Order in MAIA — on the web app or via WhatsApp chatbot. MAIA generates the Pro Forma Invoice PDF immediately. Customer receives it, pays, and the coordinator attaches the payment slip in MAIA. One click converts the pro forma to a final Invoice. From there, the Delivery Order is created — and for corporate multi-address orders, one SO can split into multiple DOs, one per drop. Each drop has its own status. The logistics coordinator tracks everything in one view, or via the WhatsApp chatbot."

*[Pause — let Mr. Kong absorb the flow diagram]*

"What I want you to notice is that remarks entered at the Sales Order stage — ribbon colour, greeting card, customisation details — flow automatically through every document. Pro Forma. Invoice. Delivery Order. The warehouse sees the same remarks your accounts team typed at the beginning. No retyping. No forwarding screenshots.

Let's demo this live."

---

## Slide 4 — Demo 1: Create Order + Pro Forma

**Say:**
"Let's start from the beginning. A corporate client — say Nexus Capital — contacts your coordinator to order 10 Corporate Hamper sets for Hari Raya. They want gold ribbon, a specific greeting card message, and no price tag on the hampers.

Today, your accounts assistant opens SQL and creates a pro forma manually. Remarks go in a free-text field. On the web app, your coordinator does this:"

**Demo on web app:**
- Sales Workspace → New Sales Order
- Select customer: Nexus Capital
- Add item: Corporate Hamper 108 × 10
- Fill structured remarks: ribbon colour, greeting card, delivery date, price tag
- Generate Pro Forma Invoice PDF
- Show the PDF — point out remarks are printed on it

"And on the chatbot — if your coordinator is away from the desk:"

*[Point to the WhatsApp chat mockup on slide]*

"One message. SO-0042 is created, remarks captured, pro forma PDF sent. The coordinator doesn't need to be at a computer. This works after hours too."

**Key point to land:** "Notice the remarks aren't in a notes box — they're structured fields. That structure is what lets them travel automatically to the warehouse later."

---

## Slide 5 — Demo 2: Payment + Invoice

**Say:**
"Order is out. Nexus Capital transfers payment and sends the bank slip — as usual, via WhatsApp. But instead of that slip going to a group where someone has to fish it out, your coordinator opens MAIA:"

**Demo on web app:**
- Finance Workspace → find SO-0042
- Attach payment slip against the order
- Review amount matches → confirm
- Click: Convert to Invoice → INV-0087 generated
- Point out: all line items, remarks, pricing carried over — nothing retyped

*[Point to the WhatsApp chat mockup on slide]*

"On chatbot — coordinator can do the same thing in WhatsApp. Attach slip, confirm, invoice done. Receipt issued. Order status moves to Paid."

**Key point to land:** "Nobody stayed up to match this slip. The order moved forward the moment the coordinator recorded the payment — whether that's 10am or 11pm during peak."

---

## Slide 6 — Demo 3: Remarks Propagation

**Say:**
"This is the one your warehouse team will feel most. Right now, the remarks your accounts team types into the pro forma have to be retyped — or copy-pasted if someone remembers — into the delivery order. Then forwarded to warehouse via WhatsApp screenshot. Then checked again on the packing floor.

Every handoff is a chance for a detail to drop. When it does, your team discovers it mid-pack and has to unpick the whole batch."

*[Show SO remarks field on demo]*

"In MAIA, remarks are entered once at the Sales Order. They carry automatically to the Invoice, the Delivery Order, and the warehouse view. The packer opens the DO and sees: gold ribbon, 'Happy Hari Raya from Nexus Capital,' no price tag. Same text. No chase required."

> **Presenter note:** Show the SO remarks field only. Do NOT click through to Invoice or DO during this demo.
> Say: *"This is being built specifically for JDX in Phase 1. When configured, remarks carry through automatically — we won't demo the downstream docs live today, but the propagation is part of the build."*

---

## Slide 7 — Demo 4: Multi-Drop Delivery

**Say:**
"Nexus Capital wants the 50 hampers delivered to 50 different addresses across Klang Valley. Today, your coordinator builds a new spreadsheet for that order. Addresses in rows, status tracked manually, driver photos in a WhatsApp group.

In MAIA, the coordinator splits the Sales Order into multiple Delivery Orders — one per drop — directly from the web app, or:"

*[Point to the WhatsApp chat mockup on slide]*

"One message in the chatbot: 'Split SO-0042 to 3 DOs: 20, 15, 15.' MAIA creates three Delivery Orders — DO-0081, DO-0082, DO-0083 — each linked back to SO-0042, each with its own delivery date and status.

The coordinator sets delivery dates for each DO, assigns vehicles or a 3PL courier, and logs the tracking number in MAIA."

**Demo on web app:**
- Logistics Workspace → SO-0042 → Create DOs
- Show list view: 3 DOs, each To Schedule
- Set delivery date on DO-0081
- Point out all remarks are inherited on each DO

**Key point to land:** "Every drop has a record. The coordinator's job is now managing exceptions — not reconstructing what happened."

---

## Slide 8 — Demo 5: Delivery Tracking

**Say:**
"The driver completes the first drop. DO-0081 — 20 units — delivered to the first address. The coordinator marks it done in MAIA, or:"

*[Point to WhatsApp chat mockup]*

"'Mark DO-0081 as delivered.' Done in WhatsApp. MAIA instantly shows the summary for the full order: DO-0081 delivered, DO-0082 scheduled for April 22, DO-0083 still to schedule.

If a delivery fails — recipient not at office, wrong address — the coordinator marks it failed in MAIA with a reason. Reschedules from the same screen. No phone call to reconstruct context."

**Demo on web app:**
- Logistics Workspace → SO-0042 → DO list
- Mark DO-0081 as Delivered
- Show order summary: 1 delivered, 1 scheduled, 1 pending
- Show rescheduling a failed DO

**Key point to land:** "During peak, your coordinator isn't scrolling a WhatsApp group matching photos. They open MAIA and see the full delivery status of every corporate order in one view."

---

## Slide 9 — Phase 1 Scope

**Say:**
"Let me be clear about what's in Phase 1 so there are no surprises.

Everything you saw in the demo today is in scope: Sales Order and Pro Forma, payment matching and invoice conversion, remarks propagation, multi-drop delivery with Delivery Orders, delivery status tracking, and both the Sales and Logistics WhatsApp chatbots. All PDF documents — Pro Forma, Invoice, Receipt, Credit Note, Delivery Note.

Phase 2, once Phase 1 is stable: consignment kiosk stock reporting and inventory management. We've scoped these for Phase 2 because Phase 1 solves your highest-pain workflow first — the corporate hamper B2B channel.

Not in scope for Phase 1: Giant/AEON B2B portal, SQL accounting integration, automated bank reconciliation, delivery route optimisation."

**If Mr. Kong asks about SQL:** "MAIA and SQL can coexist. SQL stays as your accounting ledger. MAIA handles the operational workflow — orders, billing, delivery. We can explore a sync bridge in Phase 2 once the core is stable."

---

## Slide 10 — Close

**Say:**
"Mr. Kong — peak season doesn't wait. CNY is a fixed window. Every year, your team absorbs that volume through extra hours and extra headcount because the systems weren't built for it.

MAIA takes the administrative work off your team: pro forma creation, payment matching, delivery tracking. Your coordinators focus on decisions only they can make.

We're ready to move into agreement scope with your team. The next step is aligning on go-live date, confirming the data migration plan for your product catalogue and customer records, and kicking off the onboarding sequence.

What questions do you have before we move forward?"

---

## Handling Common Questions

| Question | How to answer |
|---|---|
| "Can MAIA connect to SQL?" | MAIA and SQL coexist. SQL stays as the accounting ledger. MAIA handles operations. Phase 2 can explore a sync bridge. |
| "What happens to our 3,000 tea SKUs?" | We load your product catalogue during onboarding. Your team verifies it before go-live. |
| "Can customers upload payment slips themselves?" | Phase 1: coordinator attaches slip in MAIA. Direct customer upload is a Phase 2 enhancement. |
| "What about tiered discounts?" | Tech team is confirming Phase 1 feasibility. If auto-application isn't ready for Phase 1, coordinator applies manually — the audit trail is still there. |
| "How long is implementation?" | Align on this in the SOW scope meeting. Depends on go-live date, data readiness, and team availability for UAT. |

---

## See Also

- [[JDX Demo Deck Enhanced]] (HTML deck)
- [[SOW for MAIA JDX]]
- [[Customer Narrative - JDX]]
- [[JDX - Customer Profile]]

Yvonne's Issue: "Collect money before sending stock"
pl
Her actual flow: Proforma Invoice -> Customer pays -> Then release stock

That's prepayment enforcement - different from credit exposure. Credit exposure tracks what's owed, not whether payment was received before delivery.

---

What Credit Exposure DOES help with

| Yvonne concern | Credit exposure covers it? |
| --- | --- |
| Block SO if customer has unpaid overdue invoices | Yes - `block_on_overdue` flag does exactly this |
| Sales can see how much customer owes before creating SO | Yes - L1 panel on customer profile + chatbot surfaces it |
| Block SO if customer would exceed credit limit | Yes - breach check at SO submit (L1 + L2 + new SO > limit) |

What Credit Exposure does NOT cover

| Gap | Why |
| --- | --- |
| Force proforma invoice -> collect payment -> THEN allow delivery | Different flow entirely - needs a "payment received" gate on DO/shipment, not SO |
| Approve SO bypass when credit blocked | FQ5 - approval chain still an open gap in spec, not built yet |

---

Bottom Line

Credit exposure solves the visibility + blocking half of her problem. Sales can't create SO if customer is overdue or over limit.

It does not solve the prepayment-before-delivery requirement - that needs a separate delivery hold mechanism (block DO until receipt posted).

Approval workflow (FQ5) would complement it - manager can override the block with audit trail, instead of going around the system.

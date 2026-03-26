---
owner: [GTM Owner Name]
status: draft
last_reviewed: 2026-03-26
client: JDX
prospect_stage: gtm_brief
---

# GTM Brief — JDX

**Prepared by:** [GTM team member]
**Date:** 2026-03-26
**PM Assigned:** [PM name]
**Source:** [Referral / Outbound / Inbound / Event]

> This brief is for the PM to read **before** the discovery call. Keep it high-level — details come out in the meeting.

---

## Company Snapshot

| Field | Details |
|-------|---------|
| Company | JDX |
| Industry | F&B / Consumer Goods (FMCG) — food products sold to supermarkets, bottle shops, and B2C |
| HQ / Region | Malaysia |
| Company size | [No. of employees — TBC] |
| Est. users on MAIA | [TBC] |
| Current system | SQL-based ERP + third-party salesman mobile app (fragmented, not integrated) |
| Decision maker | Boss (name TBC) — also owns a separate palm oil business |
| Go-live urgency | Exploring — needs full flow mapped before committing |

---

## Why They're Looking

Top pain points surfaced during GTM conversation:

1. **No proper consignment tracking** — JDX places products at Giant Grocer and AEON on consignment. They manage how many units to put in each outlet, track sell-through, and invoice only based on what's sold. This is currently tracked manually / via a legacy ERP and is error-prone.

2. **Demand forecasting is done by gut feel** — The boss openly said forecasting is "by feeling". Allocation per outlet is seasonal (e.g. Chinese New Year shifts demand significantly). There's no structured system — likely Excel underneath, but unconfirmed. This is a known gap they want solved.

3. **Three disconnected sales channels, no unified system** — JDX runs three very different workflows simultaneously: (1) consignment to large grocers (Giant, AEON), (2) direct spot-sales via salesman app to bottle/packet shops, and (3) B2C via website and pop-up events. Each runs on a different tool with no integration.

---

## High-Level Business Workflows

> Tick what's in scope. Don't go deep — the PM will dig into details during the discovery call.

**Sales**
- [ ] Quotation → Sales Order *(not applicable for most channels — consignment and spot sales skip PO entirely)*
- [ ] Multi-currency pricing
- [ ] Credit limit management
- [x] Batch invoicing *(invoicing based on consignment sell-through, not upfront)*

**Sales Channels (unique to JDX)**
- [x] **Consignment to large grocers (~50%)** — products placed at Giant / AEON; invoiced based on sell-through periodically
- [x] **Salesman direct sales (~20–30%)** — field salespeople visit bottle/packet shops, take orders on the spot, issue invoice immediately, collect payment on the spot. No PO. Currently done via a third-party app.
- [x] **B2C (~remaining %)** — website + pop-up sales, pure direct consumer

**Logistics / Warehouse**
- [x] Inventory management *(critical — need to track stock placed at each outlet)*
- [ ] Inbound GRN / receiving
- [ ] Outbound delivery / DO *(delivery timing TBC — may be same-day or next-day for salesman channel)*
- [x] Multi-warehouse / multi-outlet stock placement

**Finance**
- [x] AR / collections *(consignment sell-through invoicing)*
- [ ] AP / payments
- [ ] Credit & debit notes
- [ ] Financial reporting

**Integrations (known)**
- [ ] Accounting system: [TBC]
- [ ] Salesman app: third-party (name unknown) — field sales, spot invoicing, payment collection

---

## Initial Fit Hypothesis

**Fit level:** 🟡 Partial — significant gaps likely, customisation expected

**Reasoning:**
JDX's core workflows don't map cleanly to MAIA's standard Quote-to-Cash. Two of their three sales channels (consignment and salesman spot-sales) have no PO and no standard SO flow. GTM already flagged this to the client: *"your case is a little bit different — most likely we need to go with customisation."* The boss acknowledged this and is open to it.

**Silver lining:** The boss also owns a separate palm oil company that sells B2B to the Philippines — pure PO-based, zero consignment. That business is a much cleaner MAIA fit out of the box. If JDX is too complex or costly to customise, the palm oil business could be a quicker win.

---

## Suggested Questions for PM

1. Walk us through the consignment cycle end-to-end — how do you decide quantity per outlet, track sell-through, trigger replenishment, and issue the invoice?
2. What does the current salesman app do today, and what's missing? Would the team want MAIA to replace it or integrate with it?
3. Behind the "feeling-based" forecasting — is there Excel or any data being used? How do you actually decide allocation per outlet per season?
4. Which problem is most urgent: consignment tracking, the salesman workflow, or forecasting?
5. Can you tell us more about the palm oil business? Is that in scope for MAIA too, or are we just focusing on JDX for now?

---

## Next Steps

- [ ] PM reads this brief before the discovery call
- [ ] Discovery call scheduled: 2026-03-25 (per transcript — confirm if follow-up needed)
- [ ] After the call: PM creates `[[03 - Clients/Discovery Pipeline/Requirement Gathering/JDX]]`
- [ ] Update pipeline tracker in `[[03 - Clients/Discovery Pipeline/README]]`

---

**See Also:**
- [[03 - Clients/Discovery Pipeline/GTM Briefs/JDX/JDX Transcript]] — raw GTM conversation transcript
- [[03 - Clients/Discovery Pipeline/GTM Briefs]] — all GTM briefs
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]] — PM fills this after the call

---
owner: Gareth
status: review
last_reviewed: 2026-03-10
---

# Holsen Feature Requests — 5 March Training

**Source:** `[[Holsen_Meeting___Training_v3_5_March]]`
**Date:** 5 March 2026
**Purpose:** Structured feature request summary for Ivan to review before briefing the dev team. Grouped by product area.

---

## Group 1: Compliance & Tax Documentation (C1/C2/C3)

> **Context:** C1/C3 = tax exemption certificates (business compliance). Jadual C2 = the schedule/table used to compile C3 transactions.

- [ ] C3 delivery tracking with date filters (past week, past N days)
- [ ] Reminder/notification to prompt users to log C3 transactions — prevents missed entries
- [ ] Record C3 transactions into Jadual C2 table
- [ ] Filter view combining C1 and C3 records
- [ ] Auto-export document bundle every 2 months: customer invoice + supplier invoice + delivery note (scoped to C1/C3 records)
- [ ] Sign DO by admin → tag to SO for C1/C3 compliance
- [ ] Lumpsum C1 per customer within Jadual C2
- [ ] e-Invoice (LHDN) approval step before submission — configurable: auto-approve or manual

---

## Group 2: COA (Certificate of Analysis)

> **Context:** COA = Certificate of Analysis, issued per batch/lot. Holsen has existing COA templates (in imported PDFs).

- [ ] Customer-level COA config: some customers need 1 COA, some need 2 (exact requirement still to be confirmed with client)
- [ ] Different COA fields per customer — same template base, different visible fields per customer
- [ ] COA linked to lot number / batch

---

## Group 3: Delivery Order (DO) Management

- [ ] DO format: 1 DO = 1 page; every page must carry the DO number
- [ ] Multiple DOs can be bundled into one PDF, attached to one invoice
- [ ] Tie invoice ↔ DO (many-to-many linkage)
- [ ] Bulk upload DO, auto-tag to corresponding SO
- [ ] DO inherits invoice number from accounting system *(low priority)*
- [ ] Audit report: list invoices with no linked DO

---

## Group 4: Order Management

- [ ] Same item, different shape/SKU/lot — product master must support this variation
- [ ] Blanket order tracking: 1st delivery fulfilled, 2nd/3rd delivery pending — system must not drop unfulfilled lines
- [ ] Alert: orders missed for delivery (avoid blanket order fulfillment gaps)
- [ ] Verbal order capture: lightweight process to log informally received orders before they are formalised

---

## Group 5: Inventory & Lot Management

- [ ] Full picklist workflow: SO → picklist (select lot number via dropdown) → confirm pick (lot + qty) → notify logistics → DO → Invoice
- [ ] Picklist UI: available lot numbers shown as dropdown, with remark field (e.g. wrong lot number)
- [ ] Reserved qty: once delivery is confirmed, qty is locked against that lot
- [ ] Sticker label: per product, tied to batch + date; different label format per customer (templates exist from Holsen)
- [ ] Projected qty: open item — clarify actual vs. projected qty logic with tech team before scoping

---

## Group 6: Finance & Invoice Approval Workflow

- [ ] 2-step approval for proforma invoice: Aili approves → Sales receives and sends to customer
- [ ] Payment received → triggers e-Invoice generation → 2nd approval (Miss Wong) → issue
- [ ] Credit term orders: Aili checks SO + DO → Miss Wong generates e-Invoice + invoice → payment triggers issuance
- [ ] Logistics submits invoice → Finance approves → pushes to accounting *(low priority)*
- [ ] Configurable option: MAIA auto-approval vs. manual approval per workflow step

---

## Group 7: Access Control & Role Permissions

- [ ] Salesperson: can only view their own customers; no access to full customer DB
- [ ] New customer onboarding: admin creates or approves, then assigns to salesperson
- [ ] Role-based approval: define who can approve proforma invoice per role
- [ ] *(Future)* Role-based dashboard customization

---

## Group 8: Pricing & Product Master

- [ ] Same customer, different price at item level (customer-item price matrix)
- [ ] Product taxonomy: review "class" column in product list *(open item)*
- [ ] Product data sheet + safety data sheet — Holsen to provide files

---

## Group 9: Analytics & Dashboard

- [ ] Daily digest: key metrics (high-value customers, revenue trends)
- [ ] Navigation: add direct link/shortcut to daily digest
- [ ] Item-level query: highest/lowest sales per product
- [ ] *(Future)* Customizable dashboard per role

---

## Open Items

| # | Gap | Owner | Action |
|---|-----|-------|--------|
| 1 | Notification triggers — what events, what timing, who receives | Holsen + PM | Clarify with client |
| 2 | Projected qty — current logic vs. desired state | Tech team | Schedule discussion |
| 3 | Sticker label templates — per-customer formats | Holsen | Request files |
| 4 | COA templates — confirm which PDFs contain them | PM | Review imported PDFs |
| 5 | Verbal order — exact capture process Holsen wants | Holsen | Clarify |
| 6 | Blanket order — precise definition + partial fulfillment tracking rules | Holsen + PM | Document workflow |
| 7 | Peak season handling — no requirements captured | Holsen | Follow up |
| 8 | Role permission diagram — needs to be drafted | PM | Draft mapping |

---

## See Also

- [[03 - Clients/Holsen/Holsen_Meeting___Training_v3_5_March]]
- [[03 - Clients/Holsen]]
- [[06 - Glossary & Taxonomy/Glossary]]
- [[01 - MAIA Product/Overview/Known Limitations]]

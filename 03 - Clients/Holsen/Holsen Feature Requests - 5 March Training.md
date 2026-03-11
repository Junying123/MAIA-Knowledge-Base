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

> **Context:**
> - **C1** = Customer's manufacturer tax exemption cert (perpetual, reusable). Holsen holds the client's C1; records cert number on invoice. C1 can be mixed with other items on the same invoice.
> - **C3** = Per-order import-on-behalf exemption. Applied per PO + appointment letter. Quantity-based. Always standalone DO + invoice.
> - **Jadual C2** = SST compliance schedule maintained by Holsen (not a MAIA feature). Records both C3 stock movements (individual transactions: incoming/outgoing qty) and C1 sales (lumpsum per customer). Submitted periodically to SST for audit. **MAIA's role is to provide the structured data and exports that Holsen uses to populate this report — not to build or host the Jadual C2 table itself.**

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with current compliance tracking in MAIA.

### Requests

- [ ] **C3 delivery tracking with date filters (past week, past N days)**
  - A dedicated tracking view listing all C3 transactions (import-on-behalf deliveries), filterable by delivery date range (e.g. past 7 days, past N days).
  - Since C3 is quantity-based and tied to a specific PO + appointment letter, the compliance team needs to quickly audit recent C3 activity — especially before preparing the Jadual C2 submission.
  

- [ ] **Reminder/notification to prompt users to log C3 transactions — prevents missed entries**
  - C3 exemptions are per-order, not perpetual — a missing entry in MAIA means Holsen's data will be incomplete when they fill in their Jadual C2, creating SST audit risk.
  - Trigger: when a DO is confirmed for a C3-tagged SO, the system should push a notification to the responsible user (e.g. logistics or compliance) to ensure the C3 transaction details are properly recorded in MAIA so the data is available for Holsen's compliance reporting.
  

- [ ] **Record C3 transactions in MAIA (to feed Holsen's Jadual C2)**
  - MAIA must capture each C3 stock movement as a structured record: both **incoming qty** (when C3 stock arrives) and **outgoing qty** (when C3 stock is delivered to customer).
  - Holsen then uses this data to populate their Jadual C2 compliance report — MAIA is the data source, not the report itself.
  - Required fields per record: date, PO ref, appointment letter ref, item/SKU, incoming qty, outgoing qty, linked DO/invoice number.
  

- [ ] **Filter view combining C1 and C3 records**
  - A single unified view in MAIA displaying both C1 and C3 records, since both feed into Holsen's Jadual C2 report.
  - C1 rows = aggregated per customer per period; C3 rows = individual transactions per delivery.
  - Holsen's compliance officer uses this view to review and extract the data they need before manually completing the Jadual C2 — without having to cross-reference separate modules.

- [ ] **Auto-export document bundle every 2 months: customer invoice + supplier invoice + delivery note (scoped to C1/C3 records)**
  - At the close of each reporting period (frequency TBC — see Open Item #9), MAIA should compile and export a document bundle that Holsen attaches to their Jadual C2 submission for SST audit.
  - Bundle per transaction: customer invoice + corresponding supplier invoice + delivery note.
  - Export format: single PDF or zipped package, organised by customer or by PO.
  - Only records tagged C1 or C3 are included — non-exempt transactions are excluded.

- [ ] **Sign DO by admin → tag to SO for C1/C3 compliance**
  - When an user reviews and signs off a DO (digital approval action), the system should automatically tag the corresponding SO as either C1 or C3, based on the exemption type linked to that order.
  - This tagging ensures MAIA's data is correctly categorised so Holsen can accurately separate C1 vs C3 records when filling in their Jadual C2 report.
  - **Open item (#11):** Exact definition of "signing" (is it a status change, a signature field, or an approval button?) and the logic for determining C1 vs C3 tagging (is it driven by customer cert on file, or by the PO/appointment letter?) must be confirmed with Holsen.

- [ ] **Lumpsum C1 per customer — aggregated view in MAIA (to feed Holsen's Jadual C2)**
  - Unlike C3 (individual transaction records), C1 exemptions are reported as a **single aggregated figure per customer per reporting period** in Jadual C2 — the total tax-exempt sales volume for that customer.
  - MAIA should calculate and surface this lumpsum per customer per period so Holsen can copy or export it directly into their Jadual C2 without manual calculation.
  - **Open item (#10):** Whether "lumpsum" means total invoice value, total qty, or total tax-exempt line items must be confirmed with Holsen before this view can be designed.

- [ ] **e-Invoice (LHDN) approval step before submission — configurable: auto-approve or manual**
  - Before an e-Invoice is submitted to LHDN (Malaysia's Inland Revenue Board), a configurable approval gate must be inserted in the workflow.
  - **Auto-approve mode:** system submits the e-Invoice automatically once the upstream trigger is met (e.g. payment received, or DO confirmed).
  - **Manual approval mode:** a designated approver (e.g. Miss Wong per Group 6 workflow) must review and explicitly approve the e-Invoice before it is sent to LHDN.
  - The approval mode should be configurable per company or per document type, not hardcoded.
  - This checkpoint connects directly to the Group 6 finance approval flows — see Open Item #12 for clarification on whether these are the same workflow or separate variants.

---

## Group 2: COA (Certificate of Analysis)

> **Context:** COA = Certificate of Analysis, issued per batch/lot. Holsen has existing COA templates (in imported PDFs).

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on how they currently handle COA in MAIA and what's not working.

### Requests

- [ ] Customer-level COA config: some customers need 1 COA, some need 2 (exact requirement still to be confirmed with client)
- [ ] Different COA fields per customer — same template base, different visible fields per customer
- [ ] COA linked to lot number / batch

---

## Group 3: Delivery Order (DO) Management

### Client Feedback

> [!quote] Client Feedback on MAIA
> - PO fields are showing up empty on DO and invoice records in MAIA

### Requests

- [ ] DO format: 1 DO = 1 page; every page must carry the DO number
- [ ] Multiple DOs can be bundled into one PDF, attached to one invoice
- [ ] Tie invoice ↔ DO (many-to-many linkage)
- [ ] Bulk upload DO, auto-tag to corresponding SO
- [ ] DO inherits invoice number from accounting system *(low priority)*
- [ ] Audit report: list invoices with no linked DO

---

## Group 4: Order Management

### Client Feedback

> [!quote] Client Feedback on MAIA
> - No alert in MAIA when a scheduled delivery is overdue — orders are being missed
> - After the 1st delivery on a blanket order is fulfilled, MAIA drops the remaining unfulfilled lines

### Requests

- [ ] Same item, different shape/SKU/lot — product master must support this variation
- [ ] Blanket order tracking: 1st delivery fulfilled, 2nd/3rd delivery pending — system must not drop unfulfilled lines
- [ ] Alert: orders missed for delivery (avoid blanket order fulfillment gaps)
- [ ] Verbal order capture: lightweight process to log informally received orders before they are formalised

---

## Group 5: Inventory & Lot Management

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with current inventory and lot management in MAIA.

### Requests

- [ ] Full picklist workflow: SO → picklist (select lot number via dropdown) → confirm pick (lot + qty) → notify logistics → DO → Invoice
- [ ] Picklist UI: available lot numbers shown as dropdown, with remark field (e.g. wrong lot number)
- [ ] Reserved qty: once delivery is confirmed, qty is locked against that lot
- [ ] Sticker label: per product, tied to batch + date; different label format per customer (templates exist from Holsen)
- [ ] Projected qty: open item — clarify actual vs. projected qty logic with tech team before scoping

---

## Group 6: Finance & Invoice Approval Workflow

### Client Feedback

> [!quote] Client Feedback on MAIA
> - Logistics and Finance work in disconnected flows in MAIA — no unified approval chain, causing coordination gaps between teams
> - e-Invoice generation is disconnected from DO confirmation and payment triggers

### Requests

- [ ] 2-step approval for proforma invoice: Aili approves → Sales receives and sends to customer
- [ ] Payment received → triggers e-Invoice generation → 2nd approval (Miss Wong) → issue
- [ ] Credit term orders: Aili checks SO + DO → Miss Wong generates e-Invoice + invoice → payment triggers issuance
- [ ] Logistics submits invoice → Finance approves → pushes to accounting *(low priority)*
- [ ] Configurable option: MAIA auto-approval vs. manual approval per workflow step

---

## Group 7: Access Control & Role Permissions

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on current access control issues they have observed in MAIA.

### Requests

- [ ] Salesperson: can only view their own customers; no access to full customer DB
- [ ] New customer onboarding: admin creates or approves, then assigns to salesperson
- [ ] Role-based approval: define who can approve proforma invoice per role
- [ ] *(Future)* Role-based dashboard customization

---

## Group 8: Pricing & Product Master

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with current pricing and product master configuration in MAIA.

### Requests

- [ ] Same customer, different price at item level (customer-item price matrix)
- [ ] Product taxonomy: review "class" column in product list *(open item)*
- [ ] Product data sheet + safety data sheet — Holsen to provide files

---

## Group 9: Analytics & Dashboard

### Client Feedback

> [!quote] Client Feedback on MAIA
> - No direct link or shortcut to the daily digest from main MAIA navigation — users cannot find it easily

### Requests

- [ ] Daily digest: key metrics (high-value customers, revenue trends)
- [ ] Navigation: add direct link/shortcut to daily digest
- [ ] Item-level query: highest/lowest sales per product
- [ ] *(Future)* Customizable dashboard per role

---

## Group 10: PSO (Poison Sign Back Order)

> **Context:** PSO is required by Malaysian Pharmacy (KKM) for all deliveries of Poison License B items. Standard form — same format every time, with item name and quantity filled in. Only applies to SKUs categorised as poison items. One PSO covers one DO (e.g. a DO with 2 items, only the poison item goes on the PSO). Currently generated manually. Captured in Feb 10 transcript but not raised in March 5 session.

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with PSO generation in MAIA (or outside MAIA if not yet supported).

### Requests

- [ ] Auto-generate PSO when a DO is confirmed for poison-category items
- [ ] PSO scoped to poison SKUs only — non-poison items on the same DO are excluded
- [ ] PSO linked to the corresponding DO

---

## Group 11: Reminders & Alerts

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on whether they currently receive any system notifications from MAIA, and through what channel (in-app, email, Lark).

### Requests

- [ ] **C3 transaction logging reminder** — trigger when a C3-tagged SO/DO is confirmed but no Jadual C2 entry has been recorded within X days. Prevents missed compliance entries. *(depends on Open Item #1 and #9)*
- [ ] **Overdue delivery alert** — trigger when a scheduled delivery date has passed and the DO is not yet confirmed/fulfilled. Notify relevant user to follow up. *(depends on Open Item #1)*
- [ ] **Jadual C2 export reminder** — periodic reminder aligned to submission cycle (see Open Item #9) to prompt the compliance document bundle export for C1/C3 records. *(depends on Open Item #1 and #9)*

---

## Open Items

| #   | Gap                                                                                                                                                                                 | Owner       | Action                                             |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------- |
| 1   | Notification triggers — what events, what timing, who receives                                                                                                                      | Holsen + PM | Clarify with client                                |
| 2   | Projected qty — current logic vs. desired state                                                                                                                                     | Tech team   | Schedule discussion                                |
| 3   | Sticker label templates — per-customer formats                                                                                                                                      | Holsen      | Request files                                      |
| 4   | COA templates — confirm which PDFs contain them                                                                                                                                     | PM          | Review imported PDFs                               |
| 5   | Verbal order — exact capture process Holsen wants                                                                                                                                   | Holsen      | Clarify                                            |
| 6   | Blanket order — precise definition + partial fulfillment tracking rules                                                                                                             | Holsen + PM | Document workflow                                  |
| 7   | Peak season handling — no requirements captured                                                                                                                                     | Holsen      | Follow up                                          |
| 8   | Role permission diagram — needs to be drafted                                                                                                                                       | PM          | Draft mapping                                      |
| 9   | Jadual C2 submission frequency — Feb 10 transcript says every 3 months; March 5 notes say every 2 months. Which is correct?                                                         | Holsen + PM | Confirm with client                                |
| 10  | C1 in Jadual C2 — what exactly is lumpsum C1 per customer? Total tax-exempt sales volume per customer per period?                                                                   | Holsen + PM | Clarify and define columns                         |
| 11  | "Sign DO by admin → tag to SO for C1/C3 compliance" — what does signing mean? What determines if a DO is tagged C1 vs C3?                                                           | Holsen + PM | Clarify with client                                |
| 12  | Group 6 approval flows — proforma invoice approval (Aili → Sales) and credit term order flow (Aili + Miss Wong) — are these two separate workflows or the same flow with a variant? | Holsen + PM | Map both flows separately                          |
| 13  | Full COA vs Mask COA — Feb 10 transcript mentions both types; which customers get which?                                                                                            | PM          | Review Feb 10 transcript + request samples         |
| 14  | K1 document — import customs form tied to C3 batch/stock entry; needs to be stored in system against the batch. Not captured in March 5 requests.                                   | PM          | Add to Group 2 or create new compliance docs group |

---

## See Also

- [[03 - Clients/Holsen/Holsen_Meeting___Training_v3_5_March]]
- [[03 - Clients/Holsen]]
- [[06 - Glossary & Taxonomy/Glossary]]
- [[01 - MAIA Product/Overview/Known Limitations]]

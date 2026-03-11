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

## Group 1: Compliance & Tax Documentation (C1/C3)

> **Context:**
> - **C1** = Customer's manufacturer tax exemption cert (perpetual, reusable). Holsen holds the client's C1; records cert number on invoice. C1 can be mixed with other items on the same invoice.
> - **C3** = Per-order import-on-behalf exemption. Applied per PO + appointment letter. Quantity-based. Always standalone DO + invoice.
> - **Jadual C2** = SST compliance schedule maintained by Holsen (not a MAIA feature). Records both C3 stock movements (individual transactions: incoming/outgoing qty) and C1 sales (lumpsum per customer). Submitted periodically to SST for audit. **MAIA's role is to provide the structured data and exports that Holsen uses to populate this report — not to build or host the Jadual C2 table itself.**

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with current compliance tracking in MAIA.

### User Stories & Acceptance Criteria

---

#### 1. C3 Delivery Tracking with Date Filters

> **Role:** Admin *(compliance tasks currently sit with Admin — dedicated Compliance role TBC, see Open Item #8)*

**User Story**
1. As an Admin, I want to view all C3 deliveries filtered by date range, so I can audit recent C3 activity before preparing the Jadual C2 submission.
   1. Scenario: Reviewing last week's C3 deliveries before Jadual C2 prep
      1. Admin opens the C3 tracking view in MAIA
      2. Selects a date filter (e.g. past 7 days or custom range)
      3. System returns all C3 transactions within that range

**Acceptance Criteria**
1. A dedicated C3 tracking view exists in MAIA listing all C3-tagged transactions
2. Date filter options include: past 7 days, past 14 days, past 30 days, and custom date range
3. Each row displays: PO ref, appointment letter ref, item/SKU, qty delivered, delivery date, linked DO number
4. Results are sortable by date and filterable by customer

---

#### 2. Reminder / Notification to Log C3 Transactions

> **Role:** Logistics *(confirms the DO and triggers the event)* → notifies **Admin** *(responsible for C3 record logging)*

**User Story**
1. As a Logistics user, I want the system to send a notification to Admin when I confirm a C3 DO and no C3 transaction has been recorded in MAIA, so the Admin doesn't miss entries needed for the Jadual C2.
   1. Scenario: DO confirmed for a C3-tagged SO with no transaction recorded
      1. Logistics user confirms a DO linked to a C3-tagged SO
      2. System checks whether a C3 transaction record exists for that DO
      3. If no record exists, system sends a notification to Admin

**Acceptance Criteria**
1. Notification is triggered when a DO is confirmed and its linked SO is tagged C3
2. Notification is only sent if no corresponding C3 transaction record has been logged in MAIA
3. Notification includes: SO number, DO number, customer name, delivery date
4. Notification recipient role and channel (in-app / email / Lark) to be confirmed — see Open Item #1

---

#### 3. Record C3 Transactions in MAIA

> **Role:** Admin *(logs stock entries and links to compliance records)*

**User Story**
1. As an Admin, I want to record each C3 stock movement (incoming and outgoing qty) in MAIA, so Holsen has accurate and complete data to populate their Jadual C2 report.
   1. Scenario: Recording incoming C3 stock on arrival
      1. C3 stock arrives against a PO + appointment letter
      2. Admin creates an incoming C3 transaction record in MAIA
      3. System saves the record and links it to the corresponding PO and appointment letter
   2. Scenario: Recording outgoing C3 stock on delivery
      1. Logistics confirms the DO for a C3 delivery
      2. Admin records outgoing qty in MAIA
      3. System links the record to the DO and invoice

**Acceptance Criteria**
1. System allows creation of a C3 transaction record with the following fields: date, PO ref, appointment letter ref, item/SKU, incoming qty, outgoing qty, linked DO number, linked invoice number
2. Both incoming and outgoing entries are supported as separate record types
3. Records are linked to the corresponding SO and DO
4. All C3 records appear in the C3 tracking view (see Story 1)
5. Records are tagged C3 and excluded from non-exempt reporting views

---

#### 4. Unified Filter View for C1 and C3 Records

> **Role:** Admin *(reviews and exports compliance data for Jadual C2 preparation)*

**User Story**
1. As an Admin, I want a single view in MAIA showing both C1 and C3 records together, so I can review all exemption activity in one place when preparing the Jadual C2.
   1. Scenario: Preparing data for Jadual C2 submission
      1. Admin opens the unified compliance view
      2. Applies a period filter for the current reporting cycle
      3. System displays C1 aggregated rows per customer and C3 individual transaction rows in the same view

**Acceptance Criteria**
1. A unified compliance view displays both C1 and C3 records (toggled or combined in one list)
2. C1 rows show: customer name, total exempt sales for the period (lumpsum figure)
3. C3 rows show: transaction date, PO ref, appointment letter ref, item/SKU, qty, linked DO/invoice
4. View is filterable by: date range, exemption type (C1 / C3 / both), customer
5. View is exportable to CSV or PDF for use in Jadual C2 preparation

---

#### 5. Auto-Export Document Bundle (C1/C3 Records)

> **Role:** Admin *(triggers export and submits bundle to SST)*

**User Story**
1. As an Admin, I want MAIA to compile and export a document bundle of all C1/C3 records at the end of each reporting period, so I have supporting documents ready to attach to the Jadual C2 SST audit submission.
   1. Scenario: End-of-period export triggered
      1. Admin triggers export at the close of the reporting period (manual trigger or scheduled)
      2. System compiles customer invoice + supplier invoice + delivery note for each C1/C3 transaction in the period
      3. System generates a single PDF or ZIP package

**Acceptance Criteria**
1. Export is scoped to C1 and C3 records only within the selected period — non-exempt records are excluded
2. Bundle includes per transaction: customer invoice + supplier invoice + delivery note
3. Export can be triggered manually; scheduled auto-trigger at period close is optional
4. Output format: single merged PDF or ZIP package, organised by customer or by PO
5. Reporting period frequency to be confirmed — see Open Item #9

---

#### 6. Admin Signs DO → Auto-Tag SO for C1/C3 Compliance

> **Role:** Admin *(performs DO sign-off; Logistics creates the DO)*

**User Story**
1. As an Admin, I want to sign off a DO and have the system automatically tag the corresponding SO as C1 or C3, so compliance records are correctly categorised without requiring manual re-entry.
   1. Scenario: Admin signs a DO for a C3 order
      1. Admin reviews the DO in MAIA
      2. Admin performs the sign-off action (mechanism TBC — Open Item #11)
      3. System identifies the exemption type from the linked SO or customer record
      4. System tags the SO as C3
      5. Transaction appears in the C3 tracking view

**Acceptance Criteria**
1. Admin can perform a sign-off action on a DO (exact UI mechanism to be confirmed — Open Item #11)
2. Upon sign-off, system automatically tags the corresponding SO as C1 or C3
3. C1 vs C3 tagging logic to be confirmed with Holsen — Open Item #11 (customer cert on file vs PO/appointment letter)
4. The SO tag is visible on the SO record
5. Tagged SOs appear in the correct compliance view (C1 filter or C3 tracking view)

---

#### 7. Lumpsum C1 per Customer — Aggregated View

> **Role:** Admin *(reviews aggregated C1 data and uses it to fill in Jadual C2)*

**User Story**
1. As an Admin, I want MAIA to display a lumpsum C1 figure per customer per reporting period, so I can copy or export it directly into the Jadual C2 without manual calculation.
   1. Scenario: Reviewing C1 lumpsum before Jadual C2 submission
      1. Admin opens the C1 summary view
      2. Selects the reporting period
      3. System displays one row per customer with the aggregated C1 figure for that period

**Acceptance Criteria**
1. View shows one aggregated row per customer for the selected reporting period
2. Aggregation includes only C1-tagged invoices/SOs — C3 and non-exempt records are excluded
3. View is filterable by reporting period
4. Data is exportable (CSV or PDF) for direct use in Jadual C2
5. Definition of "lumpsum" (total invoice value / total qty / total tax-exempt line items) to be confirmed before implementation — see Open Item #10

---

#### 8. e-Invoice (LHDN) Configurable Approval Step

> **Roles involved:**
> - **Finance – Aili** — approves proforma invoice; confirms SO + DO for credit term orders
> - **Finance – Miss Wong** — generates e-Invoice + invoice; final approval before LHDN submission
> - **Sales** — receives approved proforma from Aili and sends to customer
> - **Admin** — configures approval mode (auto vs manual) at the system level

**User Story**
1. As Finance (Miss Wong), I want a configurable approval gate before e-Invoices are submitted to LHDN, so I can review and authorise submissions or allow the system to auto-submit based on company policy.
   1. Scenario: Manual approval mode — credit term order
      1. Aili confirms SO + DO; trigger condition is met
      2. System creates a pending e-Invoice and notifies Miss Wong
      3. Miss Wong reviews and approves or rejects
      4. On approval, system submits the e-Invoice to LHDN
   2. Scenario: Auto-approve mode — standard order with payment received
      1. Payment received trigger is met
      2. System auto-approves and submits e-Invoice to LHDN without manual intervention

**Acceptance Criteria**
1. System supports two approval modes: **auto-approve** and **manual**
2. Approval mode is configurable per company or per document type — not hardcoded
3. In manual mode: designated approver receives a notification, can approve or reject; submission to LHDN only proceeds on approval
4. In auto mode: e-Invoice is submitted to LHDN immediately upon the trigger condition being met
5. Approver role is configurable (not hardcoded to a specific user)
6. Trigger conditions and workflow variants to be confirmed — see Open Item #12 and Group 6 approval flows

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

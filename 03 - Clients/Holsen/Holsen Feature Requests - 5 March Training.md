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

> **Role:** Admin *(Ong Siow Chui / Tam Ze Xin — compliance tracking sits with Admin; dedicated Compliance role not defined, see Open Item #8)*

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

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(confirms the DO; has SUBMIT on DO)*
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(receives notification; responsible for logging C3 record)*

**User Story**
1. As a Logistics Manager (Logistics), I want the system to notify Admin when I confirm a C3 DO and no C3 transaction has been recorded in MAIA, so Admin doesn't miss entries needed for the Jadual C2.
   1. Scenario: DO confirmed for a C3-tagged SO with no transaction recorded
      1. Logistics Manager (Noor Aili Nafiah) confirms a DO linked to a C3-tagged SO
      2. System checks whether a C3 transaction record exists for that DO
      3. If no record exists, system sends a notification to Admin

**Acceptance Criteria**
1. Notification is triggered when a DO is confirmed and its linked SO is tagged C3
2. Notification is only sent if no corresponding C3 transaction record has been logged in MAIA
3. Notification includes: SO number, DO number, customer name, delivery date
4. Notification recipient role and channel (in-app / email / Lark) to be confirmed — see Open Item #1

---

#### 3. Record C3 Transactions in MAIA

> **Roles:**
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(logs C3 incoming stock entries; has WRITE on Incoming Goods)*
> - **Logistics Manager (Procurement)** — Intan Atikah *(also has WRITE on Incoming Goods; may co-own this step)*
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(confirms the DO for outgoing C3 delivery)*

**User Story**
1. As an Admin, I want to record each C3 stock movement (incoming and outgoing qty) in MAIA, so Holsen has accurate and complete data to populate their Jadual C2 report.
   1. Scenario: Recording incoming C3 stock on arrival
      1. C3 stock arrives against a PO + appointment letter
      2. Admin (or Logistics Procurement) creates an incoming C3 transaction record in MAIA
      3. System saves the record and links it to the corresponding PO and appointment letter
   2. Scenario: Recording outgoing C3 stock on delivery
      1. Logistics Manager (Noor Aili Nafiah) confirms the DO for a C3 delivery
      2. Admin records the outgoing qty against the confirmed DO
      3. System links the record to the DO and invoice

**Acceptance Criteria**
1. System allows creation of a C3 transaction record with the following fields: date, PO ref, appointment letter ref, item/SKU, incoming qty, outgoing qty, linked DO number, linked invoice number
2. Both incoming and outgoing entries are supported as separate record types
3. Records are linked to the corresponding SO and DO
4. All C3 records appear in the C3 tracking view (see Story 1)
5. Records are tagged C3 and excluded from non-exempt reporting views

---

#### 4. Unified Filter View for C1 and C3 Records

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(reviews and exports compliance data for Jadual C2 preparation)*

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

#### 5. Bi-Monthly Reminder to Export C1/C3 Document Bundle

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(receives reminder and manually triggers the export)*

**User Story**
1. As an Admin, I want MAIA to remind me every 2 months to export the C1/C3 document bundle, so I never miss the Jadual C2 submission cycle and always have the supporting documents ready for SST audit.
   1. Scenario: Bi-monthly reminder triggered
      1. Every 2 months, MAIA sends a reminder to Admin to export the C1/C3 document bundle
      2. Admin opens MAIA and triggers the export manually
      3. System compiles customer invoice + supplier invoice + delivery note for all C1/C3 transactions within the period
      4. System generates a single PDF or ZIP package ready for SST submission attachment

**Acceptance Criteria**
1. System sends a reminder to Admin every 2 months to trigger the C1/C3 document bundle export
2. Reminder channel (in-app / email / Lark) to be confirmed — see Open Item #1
3. Export is scoped to C1 and C3 records only within the 2-month period — non-exempt records are excluded
4. Bundle includes per transaction: customer invoice + supplier invoice + delivery note
5. Output format: single merged PDF or ZIP package, organised by customer or by PO
6. Export is manually triggered by Admin — system does not auto-export without Admin action

---

#### 6. Lumpsum C1 per Customer — Aggregated View

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(reviews aggregated C1 data and uses it to fill in Jadual C2)*

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

#### 7. e-Invoice (LHDN) Configurable Approval Step

> **Roles involved:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(approves proforma invoice / SO; confirms SO + DO for credit term orders — has SUBMIT on SO+PI and DO)*
> - **Finance Manager** — Wong Shui Fern (Miss Wong) *(generates e-Invoice + invoice; final approval before LHDN — has SUBMIT on INV)*
> - **Sales Manager** — Ng Tze Chien / Tam Ze Xin *(receives approved proforma from Aili and sends to customer)*
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(configures approval mode: auto vs manual)*

**User Story**
1. As a Finance Manager (Wong Shui Fern), I want a configurable approval gate before e-Invoices are submitted to LHDN, so I can review and authorise submissions or allow the system to auto-submit based on company policy.
   1. Scenario: Manual approval mode — credit term order
      1. Logistics Manager (Noor Aili Nafiah) confirms SO + DO; trigger condition is met
      2. System creates a pending e-Invoice and notifies Finance Manager (Miss Wong)
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

### User Stories & Acceptance Criteria

---

#### 1. Customer-Level COA Configuration

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(configures per-customer COA settings)*

**User Story**
1. As an Admin, I want to configure whether a customer receives 1 or 2 COAs per order, so the correct number of COA documents is generated without manual intervention.
   1. Scenario: Setting COA count for a customer
      1. Admin opens the customer record in MAIA
      2. Sets the COA count to 1 or 2 for that customer
      3. When a delivery is processed, system generates the configured number of COAs

**Acceptance Criteria**
1. Admin can configure a COA count (1 or 2) per customer record
2. System generates the correct number of COAs automatically based on the customer configuration
3. Exact COA count requirement per customer to be confirmed with Holsen — see Open Item #4

---

#### 2. Different COA Fields per Customer

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(configures customer-specific field visibility on COA template)*

**User Story**
1. As an Admin, I want to configure which fields are visible on the COA for each customer, so the same base template can produce different outputs per customer without maintaining separate templates.
   1. Scenario: Configuring COA field visibility for a customer
      1. Admin opens customer COA settings
      2. Toggles which fields are visible or hidden for that customer
      3. When COA is generated for that customer, only the configured fields appear

**Acceptance Criteria**
1. COA uses a single shared base template across all customers
2. Admin can toggle field visibility per customer (show/hide individual fields)
3. Generated COA only shows fields configured as visible for that customer
4. Full COA vs Masked COA distinction to be confirmed — see Open Item #13

---

#### 3. COA Linked to Lot Number / Batch

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(manages inventory, batch, and serial numbers)*
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(reads COA attachments)*

**User Story**
1. As a Logistics Manager (Logistics), I want each COA to be linked to its corresponding lot number and batch in MAIA, so the correct COA is always retrievable against a specific delivery.
   1. Scenario: COA generated for a batch delivery
      1. Logistics Manager creates or confirms a delivery for a specific lot/batch
      2. COA is generated and automatically linked to that lot number and batch record
      3. COA is retrievable by searching the lot number or batch

**Acceptance Criteria**
1. Every COA record is linked to a specific lot number and batch in MAIA
2. COA is retrievable from the lot/batch record view
3. COA templates to be confirmed from Holsen's imported PDFs — see Open Item #4

---

## Group 3: Delivery Order (DO) Management

### Client Feedback

> [!quote] Client Feedback on MAIA
> - PO fields are showing up empty on DO and invoice records in MAIA

### User Stories & Acceptance Criteria

---

#### 1. DO Format: 1 Page per DO, DO Number on Every Page

> **Role:** Logistics Manager (Logistics) — Noor Aili Nafiah *(creates and submits DOs)*

**User Story**
1. As a Logistics Manager (Logistics), I want each DO to be exactly 1 page and carry the DO number on every page, so printed DOs are unambiguous and compliant with Holsen's document standards.
   1. Scenario: Generating a DO for a delivery
      1. Logistics Manager creates and confirms a DO in MAIA
      2. System generates a PDF where each DO is exactly 1 page
      3. The DO number appears in the header or footer of every page

**Acceptance Criteria**
1. Each DO is rendered as exactly 1 page in the generated PDF
2. The DO number is printed on every page of the DO document
3. If content exceeds 1 page, system should truncate or flag rather than overflow silently

---

#### 2. Bundle Multiple DOs into One PDF Attached to One Invoice

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(creates DOs)*
> - **Finance Manager** — Wong Shui Fern *(creates invoice and attaches document bundle)*

**User Story**
1. As a Finance Manager, I want to bundle multiple DOs into a single PDF and attach it to one invoice, so customers receive a consolidated document package per invoice.
   1. Scenario: Invoice with multiple deliveries
      1. Finance Manager creates an invoice linked to multiple DOs
      2. System allows selection of all associated DOs
      3. System merges selected DOs into a single PDF and attaches it to the invoice

**Acceptance Criteria**
1. Finance Manager can select multiple DOs when creating or editing an invoice
2. System generates a merged PDF containing all selected DOs
3. Merged PDF is attached to the invoice record in MAIA
4. Individual DOs remain accessible as standalone records

---

#### 3. Tie Invoice ↔ DO (Many-to-Many Linkage)

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(creates DOs)*
> - **Finance Manager** — Wong Shui Fern *(creates invoices)*

**User Story**
1. As a Finance Manager, I want to link invoices and DOs in a many-to-many relationship in MAIA, so one invoice can reference multiple DOs and one DO can be associated with multiple invoices where needed.
   1. Scenario: Linking a DO to an existing invoice
      1. Finance Manager opens an invoice record
      2. Links one or more DOs to that invoice
      3. System saves the relationship and makes it visible on both the invoice and DO records

**Acceptance Criteria**
1. An invoice can be linked to multiple DOs
2. A DO can be linked to multiple invoices
3. The linked DOs are visible from the invoice record and vice versa
4. The PO field on DO and invoice records must be populated correctly — this resolves the current client bug where PO fields appear empty

---

#### 4. Bulk Upload DO, Auto-Tag to Corresponding SO

> **Role:** Logistics Manager (Logistics) — Noor Aili Nafiah / Admin — Ong Siow Chui *(both have WRITE on DO)*

**User Story**
1. As a Logistics Manager (Logistics), I want to bulk upload multiple DOs and have the system automatically tag each one to its corresponding SO, so I don't have to manually link each DO one by one.
   1. Scenario: Bulk uploading DOs after a busy delivery period
      1. Logistics Manager prepares a batch of DOs in the required upload format
      2. Uploads the batch via the bulk upload function in MAIA
      3. System matches each DO to its corresponding SO based on PO ref or order number
      4. Unmatched DOs are flagged for manual review

**Acceptance Criteria**
1. System supports bulk upload of DOs (CSV or PDF batch)
2. System auto-tags each uploaded DO to the corresponding SO based on PO ref or order identifier
3. Successfully matched DOs are linked to the SO automatically
4. Unmatched or ambiguous DOs are flagged in an error report for manual resolution

---

#### 5. DO Inherits Invoice Number from Accounting System *(Low Priority)*

> **Role:** Finance Manager — Wong Shui Fern / Admin *(manage invoice and accounting integration)*

**User Story**
1. As a Finance Manager, I want the DO to automatically inherit the invoice number from the accounting system (UBS), so I don't have to manually enter or cross-reference invoice numbers between systems.
   1. Scenario: DO generated after invoice is confirmed in UBS
      1. Invoice is confirmed in UBS accounting system
      2. MAIA pulls the invoice number from UBS and populates it on the linked DO record

**Acceptance Criteria**
1. When an invoice number is assigned in UBS, the corresponding DO in MAIA is automatically updated with that invoice number
2. Invoice number field on DO is read-only (system-populated, not manually editable)
3. Integration mechanism with UBS to be confirmed with tech team

---

#### 6. Admin Sign-Off on DO (Dispatch Authorisation)

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(creates and submits the DO)*
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(performs the authorised signature sign-off before dispatch)*

**User Story**
1. As an Admin, I want to digitally sign off a DO in MAIA before it is dispatched, so the authorised signature step that currently happens on paper is replicated in the system and the DO cannot be sent out without formal approval.
   1. Scenario: Admin signs off a DO before dispatch
      1. Logistics Manager (Noor Aili Nafiah) creates and submits a DO in MAIA
      2. Admin reviews the DO
      3. Admin performs the sign-off action in MAIA — the digital equivalent of the "Authorised Signature" on the physical DO
      4. DO status moves to approved and is ready for dispatch
      5. Logistics proceeds with physical delivery

**Acceptance Criteria**
1. A sign-off action is available on the DO for Admin only
2. DO cannot be dispatched until Admin has signed off
3. Sign-off is recorded on the DO record with the Admin's name and timestamp
4. UI mechanism for sign-off (button / approval action / signature field) to be confirmed — see Open Item #11

---

#### 7. Audit Report: List Invoices with No Linked DO

> **Roles:**
> - **Finance Manager** — Wong Shui Fern *(reviews invoices)*
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(runs compliance audit)*

**User Story**
1. As an Admin, I want to run an audit report that lists all invoices with no linked DO, so I can identify and resolve any documentation gaps before SST submission or client disputes.
   1. Scenario: Running a pre-submission audit
      1. Admin opens the audit report view
      2. Runs the "Invoices without DO" report
      3. System returns a list of all invoices that have no DO linked

**Acceptance Criteria**
1. System provides an audit report listing all invoices with no associated DO
2. Report is filterable by date range and customer
3. Each row shows: invoice number, customer, invoice date, invoice amount
4. Report is exportable to CSV or PDF

---

## Group 4: Order Management

### Client Feedback

> [!quote] Client Feedback on MAIA
> - No alert in MAIA when a scheduled delivery is overdue — orders are being missed
> - After the 1st delivery on a blanket order is fulfilled, MAIA drops the remaining unfulfilled lines

### User Stories & Acceptance Criteria

---

#### 1. Product Master: Same Item, Different Shape / SKU / Lot

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(manages product master)*

**User Story**
1. As an Admin, I want to configure the same product item with different shapes, SKUs, or lot numbers in the product master, so each variation is tracked and ordered independently without being conflated.
   1. Scenario: Setting up a product with two shape variants
      1. Admin opens the product master
      2. Creates or edits a product with multiple variants (e.g. different shapes or lot numbers)
      3. Each variant has its own SKU and can be selected independently on SOs and DOs

**Acceptance Criteria**
1. Product master supports multiple variants per product (shape, SKU, lot number)
2. Each variant has a unique SKU that can be selected on SOs, DOs, and invoices
3. Inventory is tracked separately per variant/lot

---

#### 2. Blanket Order Tracking: Unfulfilled Lines Must Not Be Dropped

> **Roles:**
> - **Sales Manager** — Ng Tze Chien / Tam Ze Xin *(creates SOs and blanket orders)*
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(fulfils deliveries against the blanket order)*

**User Story**
1. As a Sales Manager, I want MAIA to retain all unfulfilled delivery lines on a blanket order after the first delivery is completed, so subsequent deliveries are not lost and can be fulfilled on schedule.
   1. Scenario: First delivery fulfilled on a 3-delivery blanket order
      1. Sales Manager creates a blanket order with 3 scheduled deliveries
      2. Logistics Manager fulfils and confirms the 1st delivery
      3. System retains the 2nd and 3rd delivery lines as pending — they are not dropped

**Acceptance Criteria**
1. Blanket order supports multiple scheduled delivery lines
2. Confirming one delivery does not remove or close remaining unfulfilled lines
3. Each pending delivery line shows: scheduled date, item, qty, status
4. Blanket order definition and partial fulfilment rules to be confirmed — see Open Item #6

---

#### 3. Overdue Delivery Alert

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(responsible for delivery fulfilment)*
> - **Admin** — Ong Siow Chui *(receives escalation alerts)*

**User Story**
1. As a Logistics Manager (Logistics), I want to receive an alert when a scheduled delivery date has passed and the DO has not been confirmed, so I can follow up immediately and avoid missed deliveries.
   1. Scenario: Delivery date passes with no DO confirmed
      1. A scheduled delivery date passes for an open SO line
      2. System detects no confirmed DO against that SO line
      3. System sends an overdue delivery alert to Logistics Manager

**Acceptance Criteria**
1. System triggers an alert when a scheduled delivery date passes and no DO has been confirmed for that SO line
2. Alert is sent to the Logistics Manager (Logistics) role
3. Alert includes: SO number, customer, item, scheduled delivery date, days overdue
4. Notification timing and channel to be confirmed — see Open Item #1

---

#### 4. Verbal Order Capture

> **Role:** Sales Manager — Ng Tze Chien / Tam Ze Xin *(receives and logs verbal orders from customers)*

**User Story**
1. As a Sales Manager, I want a lightweight way to log a verbally received order in MAIA before it is formalised as an SO, so no order is lost between the verbal instruction and the official paperwork.
   1. Scenario: Customer calls in an order before sending a formal PO
      1. Sales Manager receives a verbal order from the customer
      2. Opens a "verbal order" capture form in MAIA
      3. Logs the customer, item, estimated qty, and date received
      4. Verbal order sits in a pending state until formalised as an SO

**Acceptance Criteria**
1. System provides a lightweight verbal order capture form (customer, item, estimated qty, date, notes)
2. Verbal order is saved in a pending/draft state separate from confirmed SOs
3. Verbal order can be converted to a formal SO once the customer's PO is received
4. Exact capture process to be confirmed with Holsen — see Open Item #5

---

## Group 5: Inventory & Lot Management

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with current inventory and lot management in MAIA.

### User Stories & Acceptance Criteria

---

#### 1. Full Picklist Workflow

> **Role:** Logistics Manager (Logistics) — Noor Aili Nafiah *(owns picklist end-to-end; has full CRUD on Pick List)*

**User Story**
1. As a Logistics Manager (Logistics), I want a full picklist workflow from SO through to invoice, so every delivery is picked against a confirmed lot number and quantity before a DO is raised.
   1. Scenario: Processing a pick for a confirmed SO
      1. SO is confirmed by Sales
      2. Logistics Manager opens the picklist for that SO
      3. Selects the lot number via dropdown and confirms the pick with qty
      4. System notifies Logistics that picking is confirmed
      5. DO is generated from the confirmed picklist
      6. Invoice is raised from the DO

**Acceptance Criteria**
1. Picklist is created from a confirmed SO
2. Logistics Manager can select lot number via dropdown and enter pick qty
3. Confirmed pick locks the qty against that lot (reserved qty — see Story 3)
4. DO can only be created from a confirmed picklist
5. Invoice is raised from the confirmed DO

---

#### 2. Picklist UI: Lot Number Dropdown with Remark Field

> **Role:** Logistics Manager (Logistics) — Noor Aili Nafiah *(uses picklist UI to select stock)*

**User Story**
1. As a Logistics Manager (Logistics), I want the picklist UI to show available lot numbers as a dropdown and include a remark field, so I can select the correct lot and flag any issues (e.g. wrong lot number) during picking.
   1. Scenario: Picking stock with a lot number issue
      1. Logistics Manager opens the picklist for a delivery
      2. Sees available lot numbers in a dropdown for the item
      3. Notices the suggested lot number is incorrect
      4. Adds a remark (e.g. "wrong lot number") and selects the correct lot

**Acceptance Criteria**
1. Lot number field on the picklist is a dropdown populated with available lots for that item
2. Dropdown shows lot number, available qty, and expiry date (if applicable)
3. A free-text remark field is available per pick line
4. Remarks are saved against the picklist record and visible to Admin

---

#### 3. Reserved Qty: Lock Against Lot on Delivery Confirmation

> **Role:** Logistics Manager (Logistics) — Noor Aili Nafiah *(confirms delivery and triggers qty lock)*

**User Story**
1. As a Logistics Manager (Logistics), I want the system to lock (reserve) the qty against a lot once a delivery is confirmed, so the same stock cannot be double-allocated to another order.
   1. Scenario: Delivery confirmed for a lot
      1. Logistics Manager confirms delivery via DO
      2. System marks the picked qty as reserved/locked against that lot
      3. Reserved qty is no longer available for selection on other picklists

**Acceptance Criteria**
1. Once a DO is confirmed, the picked qty is locked (reserved) against the corresponding lot
2. Reserved qty is deducted from the available qty shown in the lot dropdown on other picklists
3. Reserved qty is released back to available if the DO is cancelled

---

#### 4. Sticker Label per Product, Tied to Batch and Date

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(triggers label generation on delivery/picking)*
> - **Logistics Manager (Production)** — Murugesu A/L Palanivello *(physical labelling in warehouse)*
> - **Admin** — Ong Siow Chui *(configures label templates per customer)*

**User Story**
1. As a Logistics Manager (Logistics), I want MAIA to generate a sticker label per product tied to its batch and date, using the correct label format for each customer, so labels are produced consistently and ready for physical labelling in the warehouse.
   1. Scenario: Generating labels for a batch delivery
      1. Logistics Manager confirms a batch delivery in MAIA
      2. System generates sticker labels for each product in the delivery
      3. Labels are in the format configured for that customer
      4. Labels show: product name, batch number, date, customer-specific fields

**Acceptance Criteria**
1. System generates sticker labels per product, linked to batch number and date
2. Label format is configurable per customer (different templates per customer)
3. Label is triggered on delivery/picklist confirmation
4. Holsen to provide existing label template files — see Open Item #3

---

#### 5. Projected Qty *(Open Item — Not Yet Scoped)*

> **Role:** Tech team discussion required before scoping

**User Story**
1. *(Pending)* — Projected qty logic (actual vs. projected) must be clarified with the tech team before this story can be written.

**Acceptance Criteria**
1. Blocked — see Open Item #2: confirm current projected qty logic vs. desired state with tech team

---

## Group 6: Finance & Invoice Approval Workflow

### Client Feedback

> [!quote] Client Feedback on MAIA
> - Logistics and Finance work in disconnected flows in MAIA — no unified approval chain, causing coordination gaps between teams
> - e-Invoice generation is disconnected from DO confirmation and payment triggers

### User Stories & Acceptance Criteria

---

#### 1. 2-Step Proforma Invoice Approval: Aili Approves → Sales Sends to Customer

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(approves proforma invoice; has SUBMIT on SO+PI)*
> - **Sales Manager** — Ng Tze Chien / Tam Ze Xin *(receives approved proforma and sends to customer)*

**User Story**
1. As a Logistics Manager (Logistics), I want to review and approve a proforma invoice before it is sent to the customer, so Sales can only send proformas that have been checked and confirmed.
   1. Scenario: Proforma invoice raised and pending approval
      1. Logistics Manager (Noor Aili Nafiah) reviews the proforma invoice in MAIA
      2. Approves the proforma
      3. System notifies Sales Manager that the proforma is approved and ready to send
      4. Sales Manager sends the approved proforma to the customer

**Acceptance Criteria**
1. Proforma invoice requires approval from Logistics Manager (Logistics) before it can be sent to the customer
2. Sales Manager cannot send a proforma that has not been approved
3. On approval, system notifies Sales Manager
4. Sales Manager can then send the proforma to the customer from within MAIA
5. Whether this is a separate workflow from the credit term flow to be confirmed — see Open Item #12

---

#### 2. Payment Received → Triggers e-Invoice → Finance Approval → Issue

> **Role:** Finance Manager — Wong Shui Fern / Miss Wong *(generates and approves e-Invoice; has SUBMIT on INV)*

**User Story**
1. As a Finance Manager, I want MAIA to automatically trigger e-Invoice generation when payment is received, and require my approval before the e-Invoice is issued, so every e-Invoice is reviewed before going to the customer.
   1. Scenario: Payment received for a standard order
      1. Payment is recorded in MAIA (Receipt confirmed)
      2. System automatically generates a pending e-Invoice
      3. Finance Manager (Miss Wong) is notified to review
      4. Finance Manager approves the e-Invoice
      5. System issues the e-Invoice to the customer

**Acceptance Criteria**
1. Receipt confirmation triggers automatic e-Invoice generation
2. Generated e-Invoice is in pending/draft state until approved by Finance Manager
3. Finance Manager receives a notification when an e-Invoice is pending approval
4. Finance Manager can approve or reject; rejected e-Invoices return to draft with a comment
5. Approved e-Invoice is issued and logged in MAIA

---

#### 3. Credit Term Orders: Aili Checks SO + DO → Miss Wong Generates e-Invoice → Payment Triggers Issuance

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(checks and confirms SO + DO)*
> - **Finance Manager** — Wong Shui Fern / Miss Wong *(generates e-Invoice + invoice; triggers issuance on payment)*

**User Story**
1. As a Logistics Manager (Logistics), I want to confirm the SO and DO for a credit term order before Finance generates the e-Invoice, so the document chain is verified before any billing occurs.
   1. Scenario: Credit term order fulfilment
      1. Noor Aili Nafiah checks and confirms both the SO and DO for the credit term order
      2. System notifies Finance Manager (Miss Wong) that SO + DO are confirmed
      3. Miss Wong generates the e-Invoice and invoice in MAIA
      4. Payment is received; system triggers issuance of the e-Invoice to the customer

**Acceptance Criteria**
1. Credit term orders require SO + DO confirmation by Logistics Manager before Finance can generate the e-Invoice
2. Finance Manager is notified once SO + DO are confirmed
3. Finance Manager generates the e-Invoice and invoice after confirmation
4. e-Invoice issuance is triggered by payment receipt, not by document generation
5. Whether this is a variant of Story 1 or a separate workflow to be confirmed — see Open Item #12

---

#### 4. Logistics Submits Invoice → Finance Approves → Pushes to Accounting *(Low Priority)*

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(submits invoice)*
> - **Finance Manager** — Wong Shui Fern *(approves and pushes to accounting)*

**User Story**
1. As a Logistics Manager (Logistics), I want to submit an invoice to Finance for approval, so Finance can verify it before it is pushed to the accounting system.
   1. Scenario: Logistics submits invoice for Finance review
      1. Logistics Manager submits the invoice in MAIA
      2. Finance Manager receives notification and reviews
      3. Finance Manager approves; system pushes invoice to accounting system

**Acceptance Criteria**
1. Logistics Manager can submit an invoice for Finance approval
2. Finance Manager receives a notification on submission
3. Finance Manager can approve or reject; rejected invoices return to Logistics with a comment
4. Approved invoices are pushed to the accounting system automatically

---

#### 5. Configurable Auto vs Manual Approval per Workflow Step

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(configures approval settings)*

**User Story**
1. As an Admin, I want to configure whether each workflow approval step (proforma, e-Invoice, invoice) is auto-approved or requires manual approval, so the approval model matches Holsen's operational preference without hardcoding.
   1. Scenario: Configuring manual approval for e-Invoice
      1. Admin opens the approval settings in MAIA
      2. Sets e-Invoice approval to "manual"
      3. System requires Finance Manager approval before any e-Invoice is issued

**Acceptance Criteria**
1. Each approval step (proforma / e-Invoice / invoice) can be independently set to auto or manual
2. Configuration is per company or per document type — not hardcoded
3. Changes to approval mode take effect immediately for new documents
4. Existing in-progress documents are not affected by mode changes

---

## Group 7: Access Control & Role Permissions

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on current access control issues they have observed in MAIA.

### User Stories & Acceptance Criteria

---

#### 1. Sales Manager: View Own Customers Only

> **Role:** Sales Manager — Ng Tze Chien / Tam Ze Xin *(restricted customer visibility)*

**User Story**
1. As a Sales Manager, I want to see only the customers assigned to me in MAIA, so I cannot access or modify another salesperson's customer records.
   1. Scenario: Sales Manager logs in and views customer list
      1. Sales Manager opens the customer list in MAIA
      2. System only shows customers assigned to that Sales Manager
      3. Other customers are not visible or accessible

**Acceptance Criteria**
1. Sales Manager's customer list is filtered to show only their assigned customers
2. Sales Manager cannot search for or access customers assigned to other salespeople
3. SOs, QTs, and POs created by the Sales Manager are scoped to their own customers only

---

#### 2. New Customer Onboarding: Admin Creates/Approves, Assigns to Sales Manager

> **Roles:**
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(creates or approves new customer records and assigns to salesperson)*
> - **Sales Manager** — Ng Tze Chien / Tam Ze Xin *(receives assignment and can then transact with the customer)*

**User Story**
1. As an Admin, I want to create or approve new customer records and assign them to a Sales Manager, so new customers are only accessible to the salesperson responsible for them.
   1. Scenario: New customer onboarding
      1. Admin creates a new customer record in MAIA
      2. Admin assigns the customer to the relevant Sales Manager
      3. Sales Manager can now see and transact with that customer

**Acceptance Criteria**
1. Only Admin can create new customer records (Sales Manager cannot create independently)
2. Admin assigns the customer to a specific Sales Manager upon creation or approval
3. Assigned customer immediately appears in that Sales Manager's customer list
4. Unassigned customers are not visible to any Sales Manager

---

#### 3. Role-Based Approval: Define Who Can Approve Proforma Invoice per Role

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(configures approval roles)*

**User Story**
1. As an Admin, I want to configure which role is responsible for approving the proforma invoice, so the approval responsibility is formally defined and enforced in MAIA rather than handled informally.
   1. Scenario: Configuring proforma invoice approval role
      1. Admin opens the role-based approval settings
      2. Assigns the proforma invoice approval action to Logistics Manager (Logistics) role
      3. System enforces that only users with that role can approve proforma invoices

**Acceptance Criteria**
1. Admin can configure the approval role for each document type (proforma, invoice, e-Invoice)
2. Only users assigned the configured role can perform the approval action
3. Approval role configuration is reflected in the role permission diagram — see Open Item #8

---

#### 4. Role-Based Dashboard Customisation *(Future)*

> **Role:** All roles *(each role sees a dashboard relevant to their function)*

**User Story**
1. *(Future)* As any MAIA user, I want my dashboard to show metrics and shortcuts relevant to my role, so I can find the information I need without navigating through unrelated sections.

**Acceptance Criteria**
1. *(Future — not in current scope)* Dashboard content is configurable per role
2. Each role sees only the modules, metrics, and shortcuts relevant to their function

---

## Group 8: Pricing & Product Master

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with current pricing and product master configuration in MAIA.

### User Stories & Acceptance Criteria

---

#### 1. Customer-Item Price Matrix

> **Roles:**
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(manages price; has WRITE on Price)*
> - **Finance Manager** — Wong Shui Fern *(also has WRITE on Price)*

**User Story**
1. As an Admin, I want to configure different prices for the same item per customer, so the correct price is automatically applied when a Sales Manager creates an SO for that customer.
   1. Scenario: Setting item-level price for a specific customer
      1. Admin opens the pricing configuration in MAIA
      2. Sets a specific price for Item A for Customer X
      3. When Sales Manager creates an SO for Customer X with Item A, the configured price is pre-filled

**Acceptance Criteria**

1. Admin can configure a price per customer per item (customer-item price matrix)
2. When an SO is created for a customer, the item price is pre-filled from the customer-item price matrix
3. If no customer-specific price exists, system falls back to the default item price
4. Price matrix is editable by Admin and Finance Manager only

---

#### 2. Product Taxonomy: Review "Class" Column *(Open Item)*

> **Role:** Admin / System Admin — Chin Zhao Heng *(manages product master and taxonomy)*

**User Story**
1. *(Pending)* — The "class" column in the product list requires review and clarification before a user story can be written.

**Acceptance Criteria**
1. Blocked — Admin and PM to review the "class" column in the product list and define the intended taxonomy before scoping

---

#### 3. Product Data Sheet and Safety Data Sheet

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(attaches documents to product records)*

**User Story**
1. As an Admin, I want to attach a product data sheet and safety data sheet to each product record in MAIA, so the documents are accessible to the relevant team members directly from the product.
   1. Scenario: Uploading product documents
      1. Admin opens a product record in MAIA
      2. Uploads the product data sheet and safety data sheet as attachments
      3. Documents are accessible from the product record

**Acceptance Criteria**
1. Admin can upload a product data sheet and safety data sheet per product record
2. Documents are accessible from the product record view
3. Holsen to provide the data sheet and safety data sheet files for upload

---

## Group 9: Analytics & Dashboard

### Client Feedback

> [!quote] Client Feedback on MAIA
> - No direct link or shortcut to the daily digest from main MAIA navigation — users cannot find it easily

### User Stories & Acceptance Criteria

---

#### 1. Daily Digest: Growth-Oriented Business Metrics

> **Roles:** Sales Manager, Finance Manager, Admin *(primary consumers of daily metrics)*

**User Story**
1. As a Sales Manager, I want to see a daily digest of growth-oriented business metrics in MAIA — such as high-value customers, revenue trends, and top/bottom performing items — so I can make informed decisions that actively grow the business, not just monitor it.
   1. Scenario: Sales Manager checks daily digest at start of day
      1. Sales Manager opens MAIA
      2. Views the daily digest showing actionable growth metrics: high-value customers, revenue trends, item performance
      3. Uses the insights to prioritise follow-ups, upsells, or at-risk accounts for that day

**Acceptance Criteria**
1. Daily digest displays growth-oriented metrics including: high-value customers, revenue trends, top/bottom selling items — exact metric list to be confirmed with Holsen
2. Metrics are framed as actionable insights (e.g. "top 5 customers by revenue this month") not just raw data
3. Digest is refreshed daily
4. Visible to Sales Manager, Finance Manager, and Admin

---

#### 2. Navigation: Direct Link to Daily Digest

> **Role:** All users

**User Story**
1. As any MAIA user, I want a direct navigation link or shortcut to the daily digest from the main MAIA menu, so I can access it without having to search for it every time.
   1. Scenario: User navigates to daily digest from main menu
      1. User opens MAIA
      2. Sees a direct link or shortcut to the daily digest in the main navigation
      3. Clicks link and is taken directly to the daily digest view

**Acceptance Criteria**
1. A direct link or shortcut to the daily digest appears in the main MAIA navigation bar
2. Link is accessible from all pages, not just the home screen

---

#### 3. Item-Level Sales Query: Highest and Lowest Sales per Product

> **Roles:** Sales Manager, Finance Manager, Admin

**User Story**
1. As a Sales Manager, I want to query which items have the highest and lowest sales in MAIA, so I can identify top-performing products and those that need attention.
   1. Scenario: Sales Manager reviews product performance
      1. Sales Manager opens the item-level analytics view
      2. Queries products sorted by sales volume (highest to lowest)
      3. System displays each product with total sales quantity and value

**Acceptance Criteria**
1. System provides an item-level sales query view
2. Products are sortable by total sales qty and total sales value (ascending and descending)
3. View is filterable by date range and customer
4. Exportable to CSV or PDF

---

#### 4. Customisable Dashboard per Role *(Future)*

> **Role:** All roles

**User Story**
1. *(Future)* As any MAIA user, I want my dashboard to be customisable based on my role, so each team member sees only the metrics and shortcuts relevant to their function.

**Acceptance Criteria**
1. *(Future — not in current scope)* Each role can have a default dashboard layout configured by Admin
2. Users can optionally personalise their own dashboard within their role's allowed widgets

---

## Group 10: PSO (Poison Sign Back Order)

> **Context:** PSO is required by Malaysian Pharmacy (KKM) for all deliveries of Poison License B items. Standard form — same format every time, with item name and quantity filled in. Only applies to SKUs categorised as poison items. One PSO covers one DO (e.g. a DO with 2 items, only the poison item goes on the PSO). Currently generated manually. Captured in Feb 10 transcript but not raised in March 5 session.

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on their experience with PSO generation in MAIA (or outside MAIA if not yet supported).

### User Stories & Acceptance Criteria

---

#### 1. Auto-Generate PSO for Poison-Category Items on DO Confirmation

> **Role:** Logistics Manager (Logistics) — Noor Aili Nafiah *(confirms DO; has SUBMIT on DO)*

**User Story**
1. As a Logistics Manager (Logistics), I want MAIA to automatically generate a PSO when I confirm a DO that contains poison-category items, so I don't have to manually produce the PSO form for every poison delivery.
   1. Scenario: DO confirmed with poison-category item
      1. Logistics Manager confirms a DO that includes at least one poison-category SKU
      2. System automatically generates a PSO in the standard KKM format
      3. PSO is populated with the poison item name and quantity from the DO
      4. PSO is linked to the DO record

**Acceptance Criteria**
1. System auto-generates a PSO when a DO containing poison-category SKU(s) is confirmed
2. PSO uses the standard KKM format (item name + quantity)
3. PSO is populated automatically from the DO line items — no manual data entry required
4. PSO is linked to the corresponding DO and accessible from the DO record

---

#### 2. PSO Scoped to Poison SKUs Only

> **Role:** System behaviour *(driven by SKU category configuration set by Admin)*

**User Story**
1. As an Admin, I want poison SKUs to be flagged in the product master so that PSO generation is triggered only for those items, even when a DO contains a mix of poison and non-poison items.
   1. Scenario: DO with mixed poison and non-poison items
      1. DO contains 2 items: 1 poison SKU and 1 non-poison SKU
      2. System generates a PSO containing only the poison SKU and its qty
      3. Non-poison item is excluded from the PSO

**Acceptance Criteria**
1. Product master supports a "Poison License B" category flag per SKU
2. PSO is generated only for items flagged as poison — non-poison items on the same DO are excluded
3. If a DO has no poison SKUs, no PSO is generated

---

#### 3. PSO Linked to the Corresponding DO

> **Role:** Logistics Manager (Logistics) — Noor Aili Nafiah / Admin

**User Story**
1. As a Logistics Manager (Logistics), I want the generated PSO to be linked to its corresponding DO in MAIA, so both documents are retrievable together and the audit trail is complete.

**Acceptance Criteria**
1. Each PSO is linked to exactly one DO
2. PSO is accessible from the DO record view
3. DO record shows whether a PSO has been generated for it

---

## Group 11: Reminders & Alerts

### Client Feedback

> [!note] Client Feedback on MAIA
> Not yet captured — follow up with Holsen on whether they currently receive any system notifications from MAIA, and through what channel (in-app, email, Lark).

### User Stories & Acceptance Criteria

---

#### 1. C3 Transaction Logging Reminder

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(confirms DO; event trigger)*
> - **Admin** — Ong Siow Chui / Tam Ze Xin *(receives reminder to log C3 transaction)*

**User Story**
1. As an Admin, I want to receive a reminder if a C3-tagged SO/DO has been confirmed but no C3 transaction record has been logged in MAIA within a set number of days, so I don't miss compliance entries needed for the Jadual C2.
   1. Scenario: C3 DO confirmed with no transaction logged after X days
      1. Logistics Manager confirms a C3 DO
      2. X days pass with no C3 transaction recorded in MAIA
      3. System sends a reminder to Admin

**Acceptance Criteria**
1. Reminder is triggered when a C3-tagged SO/DO is confirmed and no transaction record is logged within X days
2. Reminder is sent to Admin
3. X (number of days before reminder) to be confirmed — see Open Item #1
4. Notification channel (in-app / email / Lark) to be confirmed — see Open Item #1

---

#### 2. Overdue Delivery Alert

> **Roles:**
> - **Logistics Manager (Logistics)** — Noor Aili Nafiah *(primary recipient; responsible for delivery)*
> - **Admin** — Ong Siow Chui *(secondary escalation)*

**User Story**
1. As a Logistics Manager (Logistics), I want to receive an alert when a scheduled delivery date has passed and the DO has not been confirmed, so I can follow up before the delay escalates.
   1. Scenario: Delivery date passes with no DO confirmed
      1. Scheduled delivery date for an open SO line passes
      2. No confirmed DO exists for that SO line
      3. System sends an overdue alert to Logistics Manager (Logistics)

**Acceptance Criteria**
1. System triggers an overdue delivery alert when a scheduled delivery date passes with no confirmed DO
2. Alert is sent to Logistics Manager (Logistics) with: SO number, customer, item, scheduled date, days overdue
3. Alert timing and escalation rules (e.g. escalate to Admin after N days) to be confirmed — see Open Item #1
4. Notification channel to be confirmed — see Open Item #1

---

#### 3. Jadual C2 Export Reminder

> **Role:** Admin — Ong Siow Chui / Tam Ze Xin *(responsible for Jadual C2 document bundle export)*

**User Story**
1. As an Admin, I want to receive a periodic reminder aligned to the Jadual C2 submission cycle to export the C1/C3 document bundle from MAIA, so I don't miss the SST submission deadline.
   1. Scenario: Submission period approaching
      1. System detects that the Jadual C2 reporting period is nearing its end
      2. System sends a reminder to Admin to trigger the document bundle export

**Acceptance Criteria**
1. System sends a periodic reminder to Admin aligned to the Jadual C2 submission cycle
2. Reminder includes: reporting period dates, reminder to trigger export from MAIA
3. Submission cycle frequency to be confirmed — see Open Item #9
4. Notification channel to be confirmed — see Open Item #1

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
| 15  | Sticker label per-customer format — label generation in MAIA is feasible but different formats per customer adds significant complexity. Which customers require a custom format and what specifically differs? Feature cannot be scoped without this. | Holsen + PM | Confirm affected customers and request their label template files |

---

## See Also

- [[03 - Clients/Holsen/Holsen_Meeting___Training_v3_5_March]]
- [[03 - Clients/Holsen]]
- [[06 - Glossary & Taxonomy/Glossary]]
- [[01 - MAIA Product/Overview/Known Limitations]]

---
owner: Gareth
status: draft
last_reviewed: 2026-03-17
client: Holsen
---

# Holsen SOW — Feature Build Checklist

Use this checklist to track which SOW features have been built, tested, and validated in MAIA for Holsen. Update status as features are confirmed during UAT.

Items marked `[v3]` were surfaced during the March 5 training and extend the base SOW feature. Items in the **Feature Requests** section are net-new (no SOW equivalent).

**Status key:**
- `[ ]` Not started / unknown
- `[x]` Built and confirmed
- `[~]` Partially built / in progress
- `[!]` Blocked / not building (post-go-live or out of scope)

---

## Phase A1 — Core MAIA

### 1. Sales Coordinator Assistant (Chatbot)

**Platform**
- [ ] WhatsApp chatbot (MAIA Sales Agent Chatbot)
- [ ] Email forwarding (customer POs forwarded to MAIA)

**Omni-Channel Input (IDP)**
- [x] Text messages — forwarded from client chats
- [x] Images — photos of handwritten notes or physical POs
- [x] PDFs — formal customer Purchase Orders

**Data Extraction**
- [x] Customer Name extraction
- [x] SKUs and Quantities extraction (e.g., "10 drums of Copper Sulfate")
- [ ] Delivery Date extraction (if mentioned)

**Dynamic Pricing, Quotation & SO Generation**
- [x] Manual price entry prompt (bot prompts agent to confirm/input price)
- [x] Minimum price safeguards enforced
- [x] Quotation-to-SO logic persistence (quotation logic carries over on conversion)

**Stock Availability Display**
- [x] Total Available Quantity shown to agent
- [ ] C3 stock hidden from non-C3 customers (shows "0 Stock Available")

**Product Attribute Tagging (SKU Level)**
- [ ] Trading — "Pick-and-Pack" signal to warehouse
- [ ] Manufacturing — "Check with Production" visual cue
- [ ] Poison / Hazardous Goods — **"POISON FORM REQUIRED"** critical alert
- [ ] Commodity — manual price verification prompt to sales agent

**Customer Requirements Tagging**
- [ ] COA requirement displayed on DO (Standard vs. Detailed)
- [ ] Brand strictness displayed ("NO SUBSTITUTION" / "PREFERRED BRAND: X")
- [ ] Documentation & Copies instructions displayed (e.g., "Needs 2 Invoice Copies")

**Sales Order Creation**
- [ ] SO creation via WhatsApp (natural language, no rigid keywords)
- [ ] SO creation via email forwarding

**Output Document Generation**
- [x] Quotation
- [x] Sales Order
- [x] Proforma Invoice
- [x] Invoice
- [x] Credit Note / Debit Note

**Daily Digests — Sales**
- [ ] Unclosed Sales Orders digest (sent to Sales Representative)
- [ ] Fulfillment Method declaration (delivery or pickup)

---

### 2. Sales Order Output (UBS CSV Export)

- [x] CSV generated with customer name, address, delivery type
- [x] CSV includes all SKUs and quantities
- [ ] CSV includes COA/label/brand requirements, delivery date, PO notes, order remarks

---

### 3. Supply Chain Agent Assistant (Chatbot)

**Platform**
- [ ] WhatsApp chatbot (Logistics)

**DO Creation**
- [ ] Delivery Order (DO) creation via WhatsApp (natural language)

**Output Document Generation**
- [x] Delivery Order (DO)
- [x] Picking List

**Daily Digests — Logistics**
- [x] Delivery Delays digest (DO not generated after X days from invoice)
- [ ] Expiring Items alert (products approaching expiry date)

**Supply Chain Notification Reminders**
- [x] Out of Stock alert (sent to Logistics Rep & Sales Rep)
- [x] Low Stock alert (below configured minimum threshold)

---

### 4. User Workspaces

**General**
- [x] Desktop Web login for all users

**Sales Agent Workspace**
- [x] Sales Order Management — create, modify, track SOs
- [ ] Inactive customer notification (no order in 60 days)
- [ ] Unclosed Sales Orders notification
- [ ] Order Lifecycle Overview (to schedule → scheduled → out for delivery → delivered)
- [ ] Output Documents Management — view and download (invoice, DO, receipt)
- [ ] Customer Management — view/manage customer details, credit terms/limits

**Supply Chain Agent Workspace**
- [x] Fulfillment Management — create, modify, track DOs
- [ ] Order Lifecycle Overview (draft → to schedule → scheduled → out for delivery → delivered)
- [x] Output Documents — view Pick List, DO
- [ ] Inventory Management — view and manage product details
- [ ] Delivery Request Classification (3rd party transport documented outside MAIA)
- [ ] `[v3]` Full picklist workflow — SO triggers picklist, Logistics confirms lot + qty, DO generated from confirmed pick, invoice follows
- [ ] `[v3]` Picklist UI: lot number dropdown showing available lots with qty and expiry, plus remark field for discrepancies

---

### 5. Duplicate Order Prevention

- [x] Real-time duplicate check on every incoming order
- [x] Logic: Customer Name + PO Number match → flagged as "Duplicate Order"
- [x] Duplicate order blocked from creation

---

### 6. Customer-Based Pricing

- [ ] Customer-specific price per product (configurable in Customer Profile)
- [ ] Default price applicable to all customers (set during product creation)
- [ ] Automatic price retrieval when SO is created (customer selected → price auto-filled)

---

### 7. Role-Specific Approval

**Role assignments configured by dev (as of 2026-03-13):**

| Role Title | Product Role | Name(s) | Notes |
|------------|-------------|---------|-------|
| Sales Manager | Sales | Ng Tze Chien, Tam Ze Xin | |
| Logistics Manager (Logistics) | Logistics | Noor Aili Nafiah | Different access within Logistics role |
| Logistics Manager (Procurement) | Logistics | Intan Atikah | Different access within Logistics role |
| Logistics Manager (Production) | Logistics | Murugesu A/L Palanivello | Different access within Logistics role |
| Finance Manager | Finance | Wong Shui Fern | |
| Admin | Admin | Ong Siow Chui, Tam Ze Xin | Full access to everything |
| System Admin | System Admin | Chin Zhao Heng | Full access to all documents |

**Document permission matrix configured by dev:**

> **Legend:** SUBMIT = approve/finalise. `–` = no access.

**Quotation**
- [ ] Sales Manager — READ, WRITE, CREATE, DELETE, SUBMIT
- [ ] Logistics Manager (Logistics) — READ
- [ ] Logistics Manager (Procurement) — READ
- [ ] Logistics Manager (Production) — no access
- [ ] Finance Manager — READ
- [ ] Admin — READ, WRITE, CREATE, DELETE, SUBMIT

**Purchase Order (PO)**
- [ ] Sales Manager — READ, WRITE, CREATE, DELETE, SUBMIT
- [ ] Logistics Manager (Logistics) — READ
- [ ] Logistics Manager (Procurement) — READ
- [ ] Logistics Manager (Production) — no access
- [ ] Finance Manager — READ
- [ ] Admin — READ, WRITE, CREATE, DELETE, SUBMIT

**Sales Order + Proforma Invoice (SO + PI)**
- [x] Sales Manager — READ
- [x] Logistics Manager (Logistics) — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Logistics Manager (Procurement) — READ, SUBMIT
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Admin — READ, WRITE, CREATE, DELETE, SUBMIT

**Invoice (INV)**
- [x] Sales Manager — READ
- [x] Logistics Manager (Logistics) — READ, WRITE, CREATE, DELETE
- [x] Logistics Manager (Procurement) — READ
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Admin — READ, WRITE, CREATE, DELETE, SUBMIT

**Payment / Receipt (RCT)**
- [x] Sales Manager — READ
- [x] Logistics Manager (Logistics) — READ
- [x] Logistics Manager (Procurement) — READ
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Admin — READ, SUBMIT

**Delivery Order (DO)**
- [x] Sales Manager — READ
- [x] Logistics Manager (Logistics) — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Logistics Manager (Procurement) — READ, SUBMIT
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Admin — READ, WRITE, CREATE, DELETE, SUBMIT

**Inventory / Stock (Item, Batch, Serial No., Warehouse, Stock Recon, Stock Entry)**
- [x] Sales Manager — READ
- [x] Logistics Manager (Logistics) — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Logistics Manager (Procurement) — READ
- [x] Logistics Manager (Production) — READ
- [x] Finance Manager — READ
- [x] Admin — READ

**Pick List (PL)**
- [x] Sales Manager — no access
- [x] Logistics Manager (Logistics) — READ, WRITE, CREATE, DELETE, SUBMIT
- [x] Logistics Manager (Procurement) — no access
- [x] Logistics Manager (Production) — READ
- [x] Finance Manager — no access
- [x] Admin — READ, WRITE, CREATE, DELETE, SUBMIT

**Price**
- [x] Sales Manager — READ
- [x] Logistics Manager (Logistics) — READ, WRITE, CREATE, DELETE
- [x] Logistics Manager (Procurement) — READ
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — READ, WRITE, CREATE, DELETE
- [x] Admin — READ, WRITE, CREATE, DELETE

**Incoming (Goods Received from Supplier)**
- [x] Sales Manager — no access
- [x] Logistics Manager (Logistics) — READ, WRITE, CREATE, DELETE
- [x] Logistics Manager (Procurement) — READ, WRITE, CREATE, DELETE
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — READ
- [x] Admin — READ, WRITE, CREATE, DELETE

**Outgoing (Goods Dispatched to Customer)**
- [x] Sales Manager — READ
- [x] Logistics Manager (Logistics) — READ
- [x] Logistics Manager (Procurement) — READ
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — READ
- [x] Admin — READ

**Viewable Attachments**
- [x] Sales Manager — PO, COA
- [x] Logistics Manager (Logistics) — PO, COA
- [x] Logistics Manager (Procurement) — PO, BOL
- [x] Logistics Manager (Production) — no access
- [x] Finance Manager — PO
- [x] Admin — PO, COA

**Workflow behaviour (to confirm during UAT):**
- [ ] SO draft → submit flow tested and working
- [ ] Approval action: **Amend** → sales agent can amend and resubmit
- [ ] Approval action: **Request Clarification** → order paused until resolved

---

## PSO — Poison Signed Order (Compliance)

Triggered at DN generation. Mandated by Poison License B / FARMASI/KKM. Intake status: WIP (v1.6 — 3 open questions remain on feature ID, NFR performance target, and requestor confirmation).

### SKU Setup

- [ ] Poison/non-poison boolean flag on each SKU in MAIA SKU master (Admin/Compliance role only)
- [ ] Audit trail of SKU poison flag changes — who, when, before/after value (7-year retention)
- [ ] 18 poison SKUs pre-seeded from PSO Sample.xlsx (with packing UOM)

### PSO Auto-Generation

- [ ] PSO auto-generated when DN contains ≥1 poison-flagged SKU line
- [ ] No PSO generated when DN has zero poison lines
- [ ] Mixed DNs: PSO scoped to poison lines only — non-poison lines excluded from PSO

### PSO Document Layout

- [ ] FROM block: customer name, address, phone (from MAIA customer master)
- [ ] TO block: Holsen Interchem Sdn Bhd name and address
- [ ] PSO/DO Number and Delivery Date fields
- [ ] Line item table: No., Description, Quantity Ordered, Packing/UOM
- [ ] Signature & Chop by Receiver block (on every page)
- [ ] Remark field included in layout — blank in generated PDF for manual annotation on print
- [ ] Return-copy instruction note
- [ ] Multi-page: continuous line numbering, no repeated PSO header on continuation pages, "Page X of Y", MAIA footer on every page

### Print Pack & Document Access

- [ ] PSO appended to DN printout pack — combined A4 PDF (DN pages first, PSO pages after)
- [ ] User can view, download, and reprint PSO per DN (Logistics, Admin, Finance, Procurement, System Manager)
- [ ] PSO linked to parent DN for traceability
- [ ] "PSO" and "Signed PSO Copy" valid as DN-level document attachment types
- [ ] Optional: upload scanned signed PSO copy as "Signed PSO Copy" attachment on DN record

---

## Phase A3 — Compliance & Batch Enhancements

### 8. Advanced Batch Intake

- [ ] Batch / Lot Number field (mandatory)
- [ ] Expiry Date field (mandatory, drives FEFO logic)
- [ ] K1 Form Number field (mandatory for C3 / imported goods)
- [ ] COA PDF upload (supplier COA attached to batch)
- [ ] Tax & Restriction Status tagging:
  - [ ] Free Stock (sellable to anyone)
  - [ ] C1 Stock (restricted to customers with valid C1 certificate)
  - [ ] C3 Stock (hard locked to specific C3 customer)

---

### 9. Compliance & Eligibility Enforcement

**C3 Allocation**
- [ ] C3 stock hard locked to designated customer
- [ ] Non-C3 customers shown "0 Stock Available" for C3 SKUs
- [ ] `[v3]` Admin can record C3 stock movements in MAIA — incoming qty logged on stock arrival, outgoing qty logged against confirmed DO for Jadual C2 audit

**C1 Certificate Validation**
- [ ] C1 product check against Customer Profile for valid certificate
- [ ] Certificate expiry date surfaced to agent during order

**K1 Traceability**
- [ ] K1 number linked permanently to batch
- [ ] K1 number auto-populated on Delivery Order
- [ ] K1 number auto-populated on Invoice

---

### 10. COA Handling

**Storage & Linking**
- [ ] Supplier COA PDFs stored per batch (uploaded at batch intake)
- [ ] COA auto-linked to lot/batch record on delivery confirmation — searchable by lot number `[v3]`

**Customer COA Configuration** `[v3]`
- [ ] Admin configures COA count per customer (1 or 2 COAs per order) — system generates the configured number automatically on delivery
- [ ] Admin toggles visible COA fields per customer on a shared base template — generated COA only shows fields configured for that customer

**Blinded COA**
- [ ] Customer Preference Logic applied (Standard vs. Blinded COA)
- [ ] Blinded COA — masking/blinding instructions provided before PDF generation

---

## Feature Requests — March 5 Training

These items have no direct SOW equivalent. Classify each as go-live blocker or post-go-live during the ending phase meeting.

### 11. C1/C3 Compliance Workflow

| # | Feature | Status |
|---|---------|--------|
| FR-01 | **C3 Delivery Tracking with Date Filters** — Admin filters all C3 deliveries by date range to audit activity before Jadual C2 prep. Returns transactions with PO ref, qty, and linked DO. | [ ] |
| FR-02 | **Reminder to Log C3 Transactions** — System checks for a missing C3 record when a C3 DO is confirmed, and notifies Admin to log the entry before it's missed. | [ ] |
| FR-03 | **Unified Filter View for C1 and C3 Records** — Admin applies a period filter and sees C1 lumpsum rows per customer alongside C3 individual transaction rows in one compliance view. | [ ] |
| FR-04 | **Bi-Monthly Reminder to Export C1/C3 Document Bundle** — MAIA reminds Admin every 2 months to export the C1/C3 bundle for SST audit. MAIA compiles customer invoice + supplier invoice + DO into a single package. | [ ] |
| FR-05 | **C1 Compliance Workflow — DO Sign-Off, UBS Invoice Reference & Lumpsum** — Logistics submits DO, Admin signs off with UBS invoice number recorded. At period close MAIA surfaces one aggregated C1 lumpsum per customer ready for Jadual C2 export. | [ ] |

---

### 12. DO Management

| # | Feature | Status |
|---|---------|--------|
| FR-06 | **Bundle Multiple DOs into One PDF** — Finance Manager selects associated DOs on an invoice; system merges them into one PDF and attaches it to the invoice record. | [ ] |

---

### 13. Inventory & Labels

| # | Feature | Status |
|---|---------|--------|
| FR-07 | **Sticker Label per Product, Tied to Batch and Date** — On delivery confirmation, MAIA generates customer-specific sticker labels per product showing product name, batch number, and date in the format configured for that customer. | [ ] |

---

### 14. Analytics & Dashboard

| # | Feature | Status |
|---|---------|--------|
| FR-08 | **Daily Digest: Growth-Oriented Business Metrics** — Sales Manager views actionable growth metrics (high-value customers, revenue trends, item performance) to prioritise follow-ups, upsells, and at-risk accounts. | [ ] |
| FR-09 | **Item-Level Sales Query** — Sales Manager queries items by highest and lowest sales volume, sorts results, and exports for review. | [ ] |

---

## Summary Tracker

| Area | Total | Built `[x]` | In Progress `[~]` | Blocked `[!]` | Not Started `[ ]` |
|------|-------|-------------|-------------------|---------------|-------------------|
| Sales Chatbot | 24 | | | | |
| UBS CSV Export | 3 | | | | |
| Supply Chain Chatbot | 7 | | | | |
| User Workspaces | 16 | | | | |
| Duplicate Prevention | 3 | | | | |
| Customer Pricing | 3 | | | | |
| Role Approval | 5 | | | | |
| PSO — Poison Signed Order | 19 | | | | |
| Batch Intake | 7 | | | | |
| Compliance Enforcement | 10 | | | | |
| COA Handling | 7 | | | | |
| FR: C1/C3 Compliance | 5 | | | | |
| FR: DO Management | 1 | | | | |
| FR: Inventory & Labels | 1 | | | | |
| FR: Analytics | 2 | | | | |
| **TOTAL** | **113** | | | | |

---

**See Also:**
- [[Product/SOW for MAIA Holsen]]
- [[Feature Requests/Holsen Feature Requests - 5 March Training]]
- [[Meetings/Holsen v3 prep work]]
- [[Meetings/2026-03-16-ending-phase-agenda]]

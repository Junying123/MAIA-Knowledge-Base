---
owner: Gareth
status: draft
doctype: Invoice
last_reviewed: 2026-04-15
---

# Invoice — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Formal billing document sent to the customer; triggers payment collection and can spawn receipts, credit notes, debit notes, and delivery notes |
| Primary user | Sales Agent (creation), Finance Team (collection) |
| Workspace | Sales (`/sales/invoices`), Finance (`/finance/invoices`), Logistics (`/logistics/invoices`) |
| URL | `/sales/invoices` |
| Entry points | 1. Create New (manual) 2. Convert from Sales Order (TO BILL) |
| Downstream creates | Receipt (DRAFT), Credit Note (DRAFT), Debit Note (DRAFT), Delivery Note (DRAFT) |

---

## 2. Capability List

- [x] Create Invoice manually (standalone)
- [x] Create from Sales Order with full data carryover
- [x] Submit Invoice (DRAFT → UNPAID)
- [x] Delete Invoice (DRAFT only — simple confirm)
- [x] Delete Invoice (UNPAID — extra confirmation, financial impact warning)
- [x] Cancel Invoice from UNPAID (two-step, terminal)
- [x] Print PDF from DRAFT (with "DRAFT" watermark)
- [x] Print PDF from UNPAID (official, no watermark)
- [x] Create Receipt from UNPAID
- [x] Create Credit Note from UNPAID
- [x] Create Debit Note from UNPAID
- [x] Create Delivery Note from UNPAID
- [x] Multi-line items (same as SO items section)
- [x] Payment terms (same as SO payment terms)
- [x] Charges and discounts
- [x] Tax settings
- [ ] [TO FILL] — Invoice numbering format (ACC-SINV-YYYY-NNNNN)
- [ ] [TO FILL] — Partial payment tracking (PARTLY PAID status)
- [ ] [TO FILL] — OVERDUE status and trigger logic
- [ ] [TO FILL] — E-invoice compliance (Malaysia LHDN requirements)
- [ ] [TO FILL] — Email/send invoice to customer

---

## 3. Feature Specs

---

### F-01: Create Invoice

| Attribute | Detail |
|---|---|
| Description | Invoice created either manually or auto-populated from a Sales Order |
| Business Rule | DRAFT is fully editable; must pass validation before Submit |
| Field Behaviour | When from SO: all data pre-filled but still editable in DRAFT |
| Edge Cases | Creating standalone (no SO link) is valid for direct billing scenarios |
| Client Examples | All clients |

**Subfeatures:**
- From SO: carries Biller info, Customer info, all Items (SKU/qty/price), Payment Terms, Charges, Discounts, Tax settings, SO reference number
- Standalone: manual entry of all fields
- DRAFT allows free editing of all fields
- Validation before Submit: customer selected, items with qty > 0 and price, payment terms with due date, Grand Total > 0, tax calculations correct
- `[TO FILL]` — Biller/Customer field dependency chain (same as SO?)
- `[TO FILL]` — Invoice date and due date defaults

---

### F-02: Status Management

| Attribute | Detail |
|---|---|
| Description | Invoice moves from DRAFT (editable) to UNPAID (locked) to optional downstream statuses |
| Business Rule | UNPAID is locked — use Credit Note for reductions, Debit Note for additions |
| Field Behaviour | No editing once UNPAID; all downstream actions available from UNPAID |
| Edge Cases | DRAFT cannot be cancelled — delete instead; UNPAID cannot be simply deleted without extra confirmation |
| Client Examples | All clients |

**Status flow:**
```
Create New / From SO → DRAFT → [Submit] → UNPAID → [Cancel (two-step)] → CANCELLED (terminal)
                         ↓                   ↓
                      Delete             Create: Receipt / Credit Note / Debit Note / Delivery Note
                         ↓
                      Removed
```

**Subfeatures:**
- DRAFT: fully editable; Delete (simple confirm); Print PDF (watermark); no downstream document creation
- UNPAID: locked; Cancel (two-step); Delete (extra confirmation with financial impact warning); Print PDF (official); create Receipt/CN/DN/Delivery Note
- CANCELLED: terminal; no further actions; retained for audit trail; cannot create downstream docs
- Cancel from UNPAID is two-step: Cancel → Go Back (no change) OR Confirm Cancel → CANCELLED
- UNPAID delete requires extra confirmation warning about financial impact
- `[TO FILL]` — PARTLY PAID status: when does invoice move from UNPAID to PARTLY PAID?
- `[TO FILL]` — PAID status: when fully paid, does status auto-update?
- `[TO FILL]` — OVERDUE status: trigger logic (days past due date?)

---

### F-03: PDF Generation

| Attribute | Detail |
|---|---|
| Description | Generate a PDF of the invoice at any status |
| Business Rule | DRAFT PDF shows "DRAFT" watermark; UNPAID PDF is official with no watermark |
| Field Behaviour | PDF generation does not change invoice status |
| Edge Cases | CANCELLED invoice can be viewed/printed for audit records |
| Client Examples | All clients |

**Subfeatures:**
- DRAFT: "Print PDF" button → PDF with "DRAFT" watermark
- UNPAID: "Print PDF" button → official PDF (no watermark)
- Status unchanged after PDF generation
- `[TO FILL]` — PDF template design / fields shown on PDF
- `[TO FILL]` — Can PDF be emailed directly from MAIA?

---

### F-04: Downstream Document Creation (from UNPAID)

| Attribute | Detail |
|---|---|
| Description | From an UNPAID invoice, four downstream documents can be created; invoice remains UNPAID |
| Business Rule | Invoice stays UNPAID regardless of how many downstream docs are created |
| Field Behaviour | Each downstream doc created in DRAFT; references this invoice number |
| Edge Cases | Cannot create any downstream docs from DRAFT or CANCELLED |
| Client Examples | All clients |

**Subfeatures:**
- Create Receipt → Receipt DRAFT → tracks payment; invoice stays UNPAID (until payment processing changes status)
- Create Credit Note → CN DRAFT → for returns, adjustments, price corrections
- Create Debit Note → DN DRAFT → for additional charges
- Create Delivery Note → DN DRAFT → for tracking goods shipment
- All downstream docs reference parent invoice number
- Multiple downstream docs of different types can exist for one invoice
- `[TO FILL]` — Can multiple Receipts be created from one invoice? (partial payments)
- Known limitation: only ONE Credit Note per invoice (critical limitation)

---

### F-05: Items, Payment Terms, Summary

| Attribute | Detail |
|---|---|
| Description | Same structure as Sales Order — items, payment terms, charges, discounts |
| Business Rule | Identical validation and calculation rules as SO |
| Field Behaviour | All editable in DRAFT; all locked in UNPAID |
| Edge Cases | [TO FILL] |
| Client Examples | All clients |

**Subfeatures:**
- Items: SKU auto-population, UoM read-only, Amount = Qty × Unit Price, Row 1 protected, searchable SKU dropdown
- Payment Terms: CIA default, 8 term options, multi-installment, Portion % must = 100%
- Summary: Subtotal, Charges, Discount, Grand Total cascade
- Tax: `[TO FILL]` — tax types available, tax calculation logic
- `[TO FILL]` — Are charges and discounts the same options as SO?

---

## 4. User Stories

### US-01: Invoice from Sales Order
**As a** sales agent, **I can** convert a Sales Order directly to an Invoice **so that** all order data is pre-filled and I avoid manual re-entry.
**Priority:** High
**Dependencies:** SO in TO BILL status

### US-02: Collect Payment via Receipt
**As a** finance team member, **I can** create a Receipt from an UNPAID Invoice **so that** I can record and track customer payment.
**Priority:** High
**Dependencies:** Invoice in UNPAID status

### US-03: Issue Credit Note for Return
**As a** sales agent, **I can** create a Credit Note from an UNPAID Invoice **so that** I can process a customer return or refund.
**Priority:** High
**Dependencies:** Invoice in UNPAID status

### US-04: Add Charges via Debit Note
**As a** finance team member, **I can** create a Debit Note from an UNPAID Invoice **so that** I can bill additional charges without editing the original invoice.
**Priority:** Medium
**Dependencies:** Invoice in UNPAID status

### US-05: Official PDF for Customer
**As a** sales agent, **I can** print an official PDF from an UNPAID Invoice **so that** I can send the customer a formal invoice document.
**Priority:** High
**Dependencies:** Invoice in UNPAID status

---

## 5. Acceptance Criteria

### AC-01 (US-01: From SO)
- **Given** a Sales Order in TO BILL status
- **When** I click "Convert to Invoice"
- **Then** an Invoice in DRAFT is created with all SO data pre-filled and the SO reference number visible

### AC-02 (US-02: Receipt from Invoice)
- **Given** an Invoice in UNPAID status
- **When** I click "Create Receipt"
- **Then** a Receipt in DRAFT is created referencing this invoice number and the Invoice remains UNPAID

### AC-03 (US-03: CN from Invoice)
- **Given** an Invoice in UNPAID status
- **When** I click "Create Credit Note"
- **Then** a Credit Note in DRAFT is created with invoice items pre-filled and the invoice reference number visible

### AC-04 (US-04: DRAFT blocks downstream)
- **Given** an Invoice in DRAFT status
- **When** I view available actions
- **Then** "Create Receipt", "Create Credit Note", "Create Debit Note", "Create Delivery Note" are NOT available

### AC-05 (US-05: PDF watermark)
- **Given** an Invoice in DRAFT status
- **When** I click "Print PDF"
- **Then** PDF downloads with "DRAFT" watermark and invoice status remains DRAFT

---

## 6. Known Limitations

- [ ] Cannot create multiple Credit Notes from the same Invoice — Workaround: consolidate all returns into one CN before submitting — Status: 🔴 Critical
- [ ] Cannot edit Invoice once UNPAID — Workaround: use Credit Note for reductions, Debit Note for additions — Status: ✅ Expected behaviour
- [ ] PAID status not yet in current UI — Workaround: [TO FILL] — Status: 🟡 Medium
- [ ] [TO FILL] — E-invoice (LHDN) compliance status
- [ ] [TO FILL] — Other limitations

---

## 7. See Also

- [[Invoice Workflow Guide]]
- [[Sales Order Spec]]
- [[Credit Note Spec]]
- [[Receipt Spec]]
- [[Quote-to-Cash Flow]]
- [[Known Limitations]]

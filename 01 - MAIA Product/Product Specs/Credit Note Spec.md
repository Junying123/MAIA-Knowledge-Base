---
owner: Gareth
status: draft
doctype: Credit Note
last_reviewed: 2026-04-15
---

# Credit Note — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that reduces a customer's outstanding balance — used for returns, refunds, price adjustments, or goodwill credits |
| Primary user | Sales Agent (creation), Finance Team (processing) |
| Workspace | Sales (`/sales/credit-notes`), Finance (`/finance/credit-notes`) |
| URL | `/sales/credit-notes` |
| Entry points | 1. Create New (manual/standalone) 2. Create from Invoice (UNPAID status) |
| Downstream creates | Payment Voucher (UNSAVED CHANGES) |

---

## 2. Capability List

- [x] Create Credit Note manually (standalone)
- [x] Create from Invoice with data carryover (UNPAID status)
- [x] Submit Credit Note (DRAFT → OPEN)
- [x] Delete Credit Note (DRAFT only)
- [x] Cancel Credit Note from OPEN (two-step, terminal)
- [x] Print PDF from DRAFT (with "DRAFT" watermark)
- [x] Generate PDF from OPEN (official, no watermark)
- [x] Create Payment Voucher from OPEN (for refund processing)
- [x] Multiple vouchers from one Credit Note (total ≤ CN amount)
- [x] Partial credit (adjust quantities/amounts from invoice data)
- [x] Customer credit balance adjustment on OPEN
- [x] Credit reversal on CANCELLED
- [ ] [TO FILL] — Credit Note applied to future invoices (offset)
- [ ] [TO FILL] — CN numbering format
- [ ] [TO FILL] — Return reason field / categorisation
- [ ] [TO FILL] — Stock reversal when CN issued for returned goods
- [ ] [TO FILL] — Column filters and sort on CN list view

---

## 3. Feature Specs

---

### F-01: Create Credit Note

| Attribute | Detail |
|---|---|
| Description | CN created standalone (promotional credits, goodwill) or from an UNPAID Invoice (returns, corrections) |
| Business Rule | From Invoice: Invoice must be in UNPAID status; DRAFT fully editable before Submit |
| Field Behaviour | When from Invoice: customer, items, tax settings, charges, invoice reference pre-filled |
| Edge Cases | Partial credit supported — adjust item quantities/amounts from the pre-filled invoice data |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Standalone use cases: promotional credits, goodwill credits, price adjustments not linked to a specific invoice
- From Invoice use cases: product returns, invoice corrections, service not delivered, disputes
- When from Invoice: Customer details, all items (SKU/qty/price), tax settings, charges, invoice reference carried over
- Amounts editable in DRAFT for partial credit scenarios (e.g., return only 2 of 5 items)
- `[TO FILL]` — Return reason / category field present?
- `[TO FILL]` — Can CN be linked to multiple invoices?

---

### F-02: Status Management

| Attribute | Detail |
|---|---|
| Description | CN moves DRAFT → OPEN, with CANCELLED as terminal; OPEN activates customer credit |
| Business Rule | OPEN cannot be deleted (must cancel first); OPEN cannot be edited; CANCELLED reverses customer credit |
| Field Behaviour | DRAFT: editable; OPEN: locked; CANCELLED: read-only |
| Edge Cases | Cannot delete from OPEN — cancel and recreate if changes needed |
| Client Examples | All clients |

**Status flow:**
```
Create New / From Invoice → DRAFT → [Submit] → OPEN → [Cancel (two-step)] → CANCELLED (terminal)
                              ↓                   ↓
                           Delete           Create Voucher
                              ↓
                           Removed
```

**Subfeatures:**
- DRAFT: all fields editable; Delete (simple confirm, no audit trail); Print PDF (watermark); cannot create vouchers
- OPEN: locked; Generate PDF (official); Create Voucher; Cancel (two-step); cannot delete; customer credit active
- CANCELLED: terminal; no further actions; customer credit reversed/voided; retained for audit
- Cancel is two-step: Cancel → Go Back (no change) OR Confirm Cancel → CANCELLED
- `[TO FILL]` — Is there an Amend flow for CN (similar to SO)?

---

### F-03: PDF Generation

| Attribute | Detail |
|---|---|
| Description | PDF export at DRAFT (watermarked) or OPEN (official) |
| Business Rule | PDF generation does not change CN status |
| Field Behaviour | DRAFT: "Print PDF"; OPEN: "Generate PDF" (different button label, same result minus watermark) |
| Edge Cases | [TO FILL] |
| Client Examples | All clients |

**Subfeatures:**
- DRAFT → "Print PDF" → PDF with "DRAFT" watermark
- OPEN → "Generate PDF" → official PDF (no watermark)
- Status unchanged after PDF generation
- `[TO FILL]` — PDF template fields / design

---

### F-04: Create Payment Voucher (from OPEN)

| Attribute | Detail |
|---|---|
| Description | Process a customer refund by creating a Payment Voucher from an OPEN Credit Note |
| Business Rule | Total voucher amount cannot exceed CN amount; multiple vouchers allowed |
| Field Behaviour | Voucher created in UNSAVED CHANGES status; CN remains OPEN |
| Edge Cases | Cannot create vouchers from DRAFT or CANCELLED |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Multiple vouchers can be created from one CN (e.g., Voucher 1 for RM400, Voucher 2 for RM600 from CN of RM1,000)
- CN remains OPEN after voucher creation
- Voucher starts in UNSAVED CHANGES status
- `[TO FILL]` — Voucher workflow after UNSAVED CHANGES
- `[TO FILL]` — What happens when total vouchers = CN amount? Does CN auto-close?
- `[TO FILL]` — Voucher payment methods available

---

### F-05: Partial Credit

| Attribute | Detail |
|---|---|
| Description | When creating CN from Invoice, agent can adjust quantities or amounts to issue a partial credit |
| Business Rule | Credit amount must be > 0; cannot exceed original invoice amount |
| Field Behaviour | Item quantities and amounts editable in DRAFT before Submit |
| Edge Cases | [TO FILL] — can unit price be changed or only quantity? |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Pre-filled from invoice: all items, quantities, prices
- Adjust qty down (e.g., invoice had 5 items, return only 2 → edit qty to 2)
- Amount recalculates automatically
- `[TO FILL]` — Can specific line items be removed from CN while keeping others?

---

## 4. User Stories

### US-01: Credit Note from Invoice (Product Return)
**As a** sales agent, **I can** create a Credit Note from an UNPAID Invoice **so that** I can process a customer's product return and reduce their outstanding balance.
**Priority:** High
**Dependencies:** Invoice in UNPAID status

### US-02: Partial Credit
**As a** sales agent, **I can** adjust the quantities on a Credit Note created from an Invoice **so that** I can issue a partial credit for a partial return.
**Priority:** High
**Dependencies:** CN in DRAFT status (from Invoice)

### US-03: Multiple Payment Vouchers
**As a** finance team member, **I can** create multiple Payment Vouchers from one Credit Note **so that** I can process the refund in installments.
**Priority:** Medium
**Dependencies:** CN in OPEN status

### US-04: Standalone Credit Note
**As a** sales agent, **I can** create a Credit Note without linking to an invoice **so that** I can issue goodwill credits or promotional adjustments.
**Priority:** Medium
**Dependencies:** Customer master data

---

## 5. Acceptance Criteria

### AC-01 (US-01: CN from Invoice)
- **Given** an Invoice in UNPAID status with 3 line items
- **When** I click "Create Credit Note"
- **Then** a CN in DRAFT is created with all 3 items pre-filled, amounts editable, and the Invoice reference number visible

### AC-02 (US-02: Partial credit)
- **Given** a CN in DRAFT with 5 units of Item A at RM100 each
- **When** I change the quantity to 2
- **Then** the Amount updates to RM200 and Grand Total recalculates accordingly

### AC-03 (US-03: Multiple vouchers)
- **Given** a CN in OPEN status with Grand Total RM1,000
- **When** I create Voucher 1 for RM600 and then create Voucher 2 for RM400
- **Then** both vouchers are created and reference the same CN; CN remains OPEN

### AC-04 (OPEN cannot be deleted)
- **Given** a CN in OPEN status
- **When** I view available actions
- **Then** "Delete" is NOT available; only "Cancel", "Generate PDF", and "Create Voucher" are shown

### AC-05 (Cancel reverses credit)
- **Given** a CN in OPEN status with customer credit active
- **When** I cancel the CN (two-step confirm)
- **Then** CN moves to CANCELLED, customer credit is reversed, and no further actions are available

---

## 6. Known Limitations

- [ ] **Cannot create multiple Credit Notes from the same Invoice** — Workaround: consolidate all returns into one CN before submitting — Status: 🔴 Critical (blocks sequential return workflows, partial credits from multiple transactions)
- [ ] Cannot delete CN from OPEN status — Workaround: cancel and recreate — Status: ✅ Expected behaviour
- [ ] [TO FILL] — Stock reversal for returned goods: does CN trigger stock movement?
- [ ] [TO FILL] — CN offset against future invoices (apply as credit, not cash refund)
- [ ] [TO FILL] — Other limitations

---

## 7. See Also

- [[Credit Note Workflow Guide]]
- [[Invoice Spec]]
- [[Invoice Workflow Guide]]
- [[Quote-to-Cash Flow]]
- [[Known Limitations]]

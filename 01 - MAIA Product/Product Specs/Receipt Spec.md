---
owner: Gareth
status: draft
doctype: Receipt
last_reviewed: 2026-04-15
---

# Receipt — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that records a customer payment — links payment to one or more invoices and updates the customer's AR balance |
| Primary user | Finance Team, Sales Agent |
| Workspace | Sales (`/sales/receipts`), Finance (`/finance/receipts`) |
| URL | `/sales/receipts` |
| Entry points | 1. From Receipts list (standalone) 2. From Invoice (UNPAID / PARTLY PAID / OVERDUE) 3. From Debit Note (UNPAID) |
| Downstream creates | PDF / Proof of Payment document only |

---

## 2. Capability List

- [x] Create Receipt standalone (advance payment, deposit, no invoice link)
- [x] Create Receipt from Invoice (UNPAID / PARTLY PAID / OVERDUE)
- [x] Create Receipt from Debit Note (UNPAID — payment collection)
- [x] Submit Receipt (DRAFT → IN PROGRESS)
- [x] Mark as Completed (IN PROGRESS → COMPLETED — payment posted)
- [x] Close Receipt (COMPLETED → CLOSED — reconciled/archived)
- [x] Cancel Receipt from IN PROGRESS (two-step, terminal)
- [x] Cancel Receipt from COMPLETED (two-step, if policy allows)
- [x] Delete Receipt (DRAFT only)
- [x] Upload proof of payment (DRAFT)
- [x] Print PDF from DRAFT (with watermark)
- [x] Generate PDF from IN PROGRESS / COMPLETED / CLOSED (official)
- [x] Partial payment (invoice remains PARTLY PAID)
- [x] Full payment (invoice moves to PAID)
- [x] Multi-invoice allocation (one receipt across multiple invoices)
- [x] Multiple payment methods supported
- [x] Transaction ID / Reference field
- [x] Remarks field
- [ ] [TO FILL] — Available payment methods (Cash / Bank Transfer / Cheque / etc.)
- [ ] [TO FILL] — Bank reconciliation workflow
- [ ] [TO FILL] — Receipt numbering format (ACC-RCV-YYYY-NNNNN)
- [ ] [TO FILL] — Overdue receipt / late fee handling
- [ ] [TO FILL] — Column filters and sort on Receipt list view

---

## 3. Feature Specs

---

### F-01: Create Receipt

| Attribute | Detail |
|---|---|
| Description | Receipt records a customer payment either linked to specific invoice(s) or as a standalone advance |
| Business Rule | Cannot create Receipt from CANCELLED invoice; required fields: customer, payment method, receipt date, due date, paid amount > 0 |
| Field Behaviour | When from Invoice: customer and biller pre-filled, invoice reference and amounts pre-loaded for allocation |
| Edge Cases | Standalone receipt with no invoice = advance payment → becomes customer credit |
| Client Examples | All clients |

**Subfeatures:**
- Required fields (all creation methods): Customer, Payment Method, Receipt Date, Due Date, Paid Amount (> 0)
- Optional fields: Transaction ID, Transaction Date, Payment References (invoice allocations), Proof of Payment upload, Remarks
- From Invoice: Customer & biller auto-filled, invoice reference and amount pre-loaded
- From Debit Note UNPAID: `[TO FILL]` — which fields carry over
- Blocked from CANCELLED invoices — creation button disabled
- Standalone advance payment: Paid Amount applied as customer credit until allocated to future invoice
- `[TO FILL]` — Can receipt date be backdated?

---

### F-02: Status Management

| Attribute | Detail |
|---|---|
| Description | Receipt has the most statuses of any doctype: DRAFT → IN PROGRESS → COMPLETED → CLOSED, with CANCELLED as terminal from IN PROGRESS or COMPLETED |
| Business Rule | CLOSED is fully read-only with no cancel; cancelling a COMPLETED receipt reverses the payment impact |
| Field Behaviour | DRAFT: fully editable; IN PROGRESS: limited edits; COMPLETED: locked; CLOSED: read-only |
| Edge Cases | Cannot cancel from CLOSED; once CLOSED, no further actions except Generate PDF |
| Client Examples | All clients |

**Status flow:**
```
Create (list / invoice / debit note) → DRAFT → [Submit] → IN PROGRESS → [Mark Completed] → COMPLETED → [Close] → CLOSED
                                          ↓          ↓                        ↓
                                       Delete     Cancel                   Cancel (if policy allows)
                                          ↓          ↓                        ↓
                                       Removed   CANCELLED (terminal)     CANCELLED (terminal)
```

**Subfeatures:**
- DRAFT: fully editable; Delete (simple confirm); Print PDF (watermark); proof of payment upload; not visible in payment history
- IN PROGRESS: limited edits (core payment fields may be restricted); Generate PDF; Cancel (two-step); Mark as Completed
- COMPLETED: locked; Generate PDF; Cancel (two-step, if policy allows); payment applied to customer balance
- CLOSED: fully read-only; Generate PDF only; no cancel/edit/delete
- CANCELLED: terminal; void but retained for audit; payment impact reversed; no docs can be created
- Cancel is two-step: Cancel → Go Back (no change) OR Confirm Cancel → CANCELLED
- `[TO FILL]` — Which core fields lock in IN PROGRESS (vs remain editable)?
- `[TO FILL]` — Is cancel from COMPLETED available for all clients or policy-dependent?

---

### F-03: Proof of Payment Upload

| Attribute | Detail |
|---|---|
| Description | Attach payment evidence (bank slip, screenshot, cheque copy) to the Receipt in DRAFT |
| Business Rule | Upload only available in DRAFT; file retained in later statuses |
| Field Behaviour | File attachment stored alongside receipt; accessible in IN PROGRESS and COMPLETED views |
| Edge Cases | [TO FILL] — file size limits, accepted file types |
| Client Examples | All clients |

**Subfeatures:**
- Upload available only in DRAFT status
- File retained and viewable after submission (IN PROGRESS, COMPLETED, CLOSED)
- Use cases: bank transfer slip, card payment receipt, cheque copy, screenshot of payment confirmation
- `[TO FILL]` — Accepted file types (PDF, JPG, PNG?)
- `[TO FILL]` — File size limit
- `[TO FILL]` — Multiple attachments or single file only?

---

### F-04: Payment Allocation

| Attribute | Detail |
|---|---|
| Description | Allocate receipt amount to one or multiple invoices; supports partial and full payment |
| Business Rule | Allocations must sum correctly; partial allocation leaves invoice as PARTLY PAID |
| Field Behaviour | When from Invoice: allocation pre-filled; standalone: manual allocation |
| Edge Cases | Overpayment: receipt for invoice amount; overage → customer credit. Underpayment: invoice stays PARTLY PAID |
| Client Examples | All clients |

**Subfeatures:**
- Full payment: allocate full paid amount to one invoice → invoice → PAID
- Partial payment: allocate partial amount → invoice remains PARTLY PAID; further receipts can be created for same invoice
- Multi-invoice: split one receipt across multiple invoices using payment references/allocations
- Advance payment (standalone): no invoice linked; amount becomes customer credit
- Overpayment: first receipt covers invoice amount; overage → customer credit or triggers refund process
- Duplicate payment: second receipt → customer credit (finance to handle)
- `[TO FILL]` — UI for multi-invoice allocation (how does agent split amounts?)
- `[TO FILL]` — Does PARTLY PAID status automatically appear on invoice or is it manual?

---

### F-05: PDF Generation

| Attribute | Detail |
|---|---|
| Description | Export Receipt as PDF across all active statuses |
| Business Rule | DRAFT PDF has watermark; all other statuses produce official PDF |
| Field Behaviour | PDF generation does not change receipt status |
| Edge Cases | CLOSED receipt: read-only but Generate PDF still available |
| Client Examples | All clients |

**Subfeatures:**
- DRAFT → "Print PDF" → watermarked PDF
- IN PROGRESS / COMPLETED / CLOSED → "Generate PDF" → official PDF (no watermark)
- Status unchanged after PDF generation
- `[TO FILL]` — PDF template fields / design

---

## 4. User Stories

### US-01: Record Full Payment
**As a** finance team member, **I can** create a Receipt from an UNPAID Invoice and allocate the full amount **so that** the invoice is marked as PAID and the customer's AR balance is updated.
**Priority:** High
**Dependencies:** Invoice in UNPAID status

### US-02: Record Partial Payment
**As a** finance team member, **I can** create a Receipt for a partial amount against an UNPAID Invoice **so that** the invoice shows PARTLY PAID and I can create additional receipts for the remainder.
**Priority:** High
**Dependencies:** Invoice in UNPAID status

### US-03: Advance Payment
**As a** finance team member, **I can** create a standalone Receipt without linking to an invoice **so that** I can record a customer's advance payment or deposit as a customer credit.
**Priority:** Medium
**Dependencies:** Customer master data

### US-04: Upload Proof of Payment
**As a** finance team member, **I can** attach a proof of payment (bank slip, screenshot) to a Receipt in DRAFT **so that** payment evidence is stored alongside the receipt record for audit purposes.
**Priority:** High
**Dependencies:** Receipt in DRAFT status

### US-05: Multi-Invoice Payment
**As a** finance team member, **I can** allocate a single Receipt across multiple Invoices **so that** a customer's lump-sum payment can be applied to all outstanding invoices at once.
**Priority:** Medium
**Dependencies:** Multiple UNPAID invoices for same customer

---

## 5. Acceptance Criteria

### AC-01 (US-01: Full payment)
- **Given** an Invoice in UNPAID status for RM500
- **When** I create a Receipt for RM500, submit it, and mark as Completed
- **Then** the Invoice status changes to PAID and customer AR balance reduces by RM500

### AC-02 (US-02: Partial payment)
- **Given** an Invoice in UNPAID status for RM1,000
- **When** I create a Receipt for RM400 and mark as Completed
- **Then** the Invoice status changes to PARTLY PAID and a second Receipt can be created for the remaining RM600

### AC-03 (US-04: Proof of payment retained)
- **Given** a Receipt in DRAFT with a proof of payment file attached
- **When** I submit the Receipt to IN PROGRESS
- **Then** the attached proof of payment file is still accessible in the IN PROGRESS view

### AC-04 (Blocked from cancelled invoice)
- **Given** an Invoice in CANCELLED status
- **When** I navigate to the Invoice
- **Then** "Create Receipt" is NOT available / disabled

### AC-05 (CLOSED is read-only)
- **Given** a Receipt in CLOSED status
- **When** I view the Receipt
- **Then** no edit, cancel, or delete actions are available; only "Generate PDF" is accessible

### AC-06 (Cancel reverses payment)
- **Given** a Receipt in COMPLETED status with payment applied to an Invoice
- **When** I cancel the Receipt (two-step confirm)
- **Then** Receipt moves to CANCELLED, the Invoice AR balance is reversed, and the Invoice returns to UNPAID or PARTLY PAID

---

## 6. Known Limitations

- [ ] Cannot create Receipt from CANCELLED Invoice — Workaround: create standalone Receipt, handle as customer credit — Status: ✅ Expected behaviour
- [ ] Cannot edit a COMPLETED Receipt — Workaround: cancel (if policy allows) and recreate — Status: ✅ Expected behaviour
- [ ] CLOSED Receipt has no cancel action — Workaround: [TO FILL] — Status: [TO FILL]
- [ ] [TO FILL] — Whether cancel from COMPLETED is universally available or policy-dependent per client
- [ ] [TO FILL] — Late fee / overdue penalty handling not documented
- [ ] [TO FILL] — Other limitations

---

## 7. See Also

- [[Receipt Workflow Guide]]
- [[Invoice Spec]]
- [[Invoice Workflow Guide]]
- [[Quote-to-Cash Flow]]
- [[Receipt & Payment Workflows]]

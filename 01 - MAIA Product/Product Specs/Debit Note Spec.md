---
owner: Gareth
status: draft
doctype: Debit Note
last_reviewed: 2026-04-19
---

# Debit Note — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that increases a customer's outstanding balance — used for additional charges after an invoice has been issued |
| Primary user | Sales Agent, Finance Team |
| Workspace | Sales (`/sales/debit-notes`), Finance (`/finance/debit-notes`) |
| URL | `/sales/debit-notes` |
| Entry points | 1. Create New (manual/standalone) 2. Create from Invoice (UNPAID status) |
| Downstream creates | Receipt (DRAFT) — for collecting the additional charge |

---

## 2. Capability List

- [x] Create Debit Note manually (standalone)
- [x] Create from Invoice (UNPAID)
- [x] Submit Debit Note (DRAFT → UNPAID)
- [x] Create Receipt from UNPAID (to collect the additional charge)
- [x] Charges: 5 types — Delivery, Handling, Service, Packaging, Insurance
- [x] Discount: fixed RM amount
- [x] Payment Terms (CIA default, same options as SO/Invoice)
- [x] Remarks and Terms and Conditions fields
- [x] Reversal Reason field
- [x] Status flow: Draft → Unpaid → Partly Paid → Paid → Overdue → Cancelled
- [x] List view columns: Debit Note ID, Customer, Status, Total, Created at, Updated at
- [ ] [TO FILL] — Cancel flow details (two-step like Invoice?)
- [ ] [TO FILL] — PDF generation (watermark in DRAFT, official in UNPAID?)
- [ ] [TO FILL] — Delete rules (DRAFT only?)
- [ ] [TO FILL] — Debit Note numbering format
- [ ] [TO FILL] — What data carries from Invoice when created from Invoice
- [ ] [TO FILL] — Overdue trigger logic (days past Payment Due Date?)

---

## 3. Feature Specs

---

### F-01: Create Debit Note

| Attribute | Detail |
|---|---|
| Description | DN created standalone for additional charges, or from an UNPAID Invoice |
| Business Rule | DRAFT is fully editable; Payment Due Date required |
| Field Behaviour | Biller and Customer sections same dependency chain as Invoice |
| Edge Cases | Reversal Reason field — purpose unclear; may relate to credit reversal scenarios |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Date (today default), Payment Due Date (required, no default observed)
- Currency (MYR default), Incoterm (optional)
- Biller Information: Contact Person, Address, Fulfillment Method, Tax
- Customer Information: Customer → Billing Contact, Shipping Contact, Billing Address, Shipping Address
- Items section (customer must be selected first)
- Remarks (free text, optional)
- Terms and Conditions (free text, optional)
- **Reversal Reason** field — `[TO FILL]` — dropdown or free text? Use case?
- Summary: Subtotal, Charges (Delivery / Handling / Service / Packaging / Insurance), Discount (fixed RM), Grand Total
- Payment Terms: CIA default, same 8 options as Invoice, multi-installment supported

---

### F-02: Status Management

| Attribute | Detail |
|---|---|
| Description | Debit Note lifecycle mirrors Invoice — DRAFT editable, UNPAID locked, payment tracked |
| Business Rule | PARTLY PAID and PAID auto-triggered by Receipts; OVERDUE based on due date |
| Field Behaviour | All fields editable in DRAFT; locked from UNPAID onward |
| Edge Cases | [TO FILL] — cancel from UNPAID: two-step like Invoice? |
| Client Examples | All clients |

**Status flow:**
```
Create (manual / from Invoice) → DRAFT → [Submit] → UNPAID → [Receipt partial] → PARTLY PAID
                                    ↓                         → [Receipt full] → PAID
                                 Delete                       → [Due date passed] → OVERDUE
                                    ↓                         → [Cancel] → CANCELLED (terminal)
                                 Removed
```

**Subfeatures:**
- DRAFT: fully editable; Delete; `[TO FILL]` — Print PDF with watermark?
- UNPAID: locked; Create Receipt; `[TO FILL]` — Cancel (two-step?); `[TO FILL]` — Generate PDF
- PARTLY PAID: partial receipt completed; further receipts can be created
- PAID: all receipts sum to Grand Total; auto-triggered
- OVERDUE: `[TO FILL]` — trigger logic (days past Payment Due Date?)
- CANCELLED: terminal; `[TO FILL]` — reverses customer debit balance?

---

### F-03: Create Receipt from Debit Note

| Attribute | Detail |
|---|---|
| Description | Create a Receipt to collect the additional charge represented by the Debit Note |
| Business Rule | Available from UNPAID; same Receipt flow as collecting an Invoice |
| Field Behaviour | `[TO FILL]` — which fields carry from Debit Note to Receipt |
| Edge Cases | `[TO FILL]` |
| Client Examples | All clients |

**Subfeatures:**
- `[TO FILL]` — Data carried from Debit Note to Receipt
- `[TO FILL]` — Multiple Receipts for partial payment of Debit Note?

---

## 4. User Stories

### US-01: Add Charges After Invoice
**As a** finance team member, **I can** create a Debit Note from an UNPAID Invoice **so that** I can bill additional charges (e.g., late fees, freight adjustments) without modifying the original invoice.
**Priority:** Medium
**Dependencies:** Invoice in UNPAID status

### US-02: Collect Debit Note Payment
**As a** finance team member, **I can** create a Receipt from an UNPAID Debit Note **so that** the additional charge is collected and the customer's balance is updated.
**Priority:** Medium
**Dependencies:** Debit Note in UNPAID status

---

## 5. Acceptance Criteria

### AC-01 (US-01: Create from Invoice)
- **Given** an Invoice in UNPAID status
- **When** I click "Create Debit Note"
- **Then** a Debit Note in DRAFT is created with `[TO FILL — which fields carry over]` and the Invoice reference visible

### AC-02 (US-02: Receipt from Debit Note)
- **Given** a Debit Note in UNPAID status
- **When** I click "Create Receipt"
- **Then** a Receipt in DRAFT is created referencing the Debit Note

---

## 6. Known Limitations

- [ ] [TO FILL] — Cancel flow details not confirmed
- [ ] [TO FILL] — Reversal Reason field purpose unclear
- [ ] [TO FILL] — Whether Debit Note triggers stock movement

---

## 7. See Also

- [[Invoice Spec]]
- [[Receipt Spec]]
- [[Quote-to-Cash Flow]]
- [[Known Limitations]]

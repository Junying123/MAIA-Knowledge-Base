---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Invoice Workflow Guide

**Status Flow:** `DRAFT → UNPAID → CANCELLED`

---

## High-Level Overview

```
Create New / From SO → DRAFT ──Submit──> UNPAID ──Cancel──> CANCELLED
                         ↓                 ↓
                      Delete           Create:
                         ↓             • Receipt
                     Removed           • Debit Note
                                       • Credit Note
                                       • Delivery Note
```

**Key Points:**
- Can be created **standalone** or **from Sales Order** (TO BILL status)
- DRAFT is freely editable; UNPAID is locked
- UNPAID unlocks 4 downstream document types
- CANCELLED is terminal — retained for audit
- PAID is a future status (not yet in current UI)

---

## Status 1: DRAFT

**Available Actions:**

| Action | Result |
|--------|--------|
| Delete | Removed from system (permanent; simple confirmation) |
| Submit | → UNPAID (locked) |
| Print PDF | Draft watermark; status unchanged |

**Business Rules:**
- All fields editable freely
- Must validate before Submit (customer, items, payment terms, grand total > 0)
- PDF in DRAFT shows "DRAFT" watermark
- Cannot create Receipt/DN/CN from DRAFT

---

## Status 2: UNPAID

**Available Actions:**

| Action | Result |
|--------|--------|
| Cancel Invoice | Two-step: Go Back / Confirm Cancel → CANCELLED |
| Delete | Extra confirmation (financial impact); permanent removal |
| Create Receipt | Receipt created in DRAFT; invoice remains UNPAID |
| Create Debit Note | Debit Note created in DRAFT; invoice remains UNPAID |
| Create Credit Note | Credit Note created in DRAFT; invoice remains UNPAID |
| Create Delivery Note | Delivery Note created in DRAFT; invoice remains UNPAID |
| Print PDF | Official PDF (no watermark); status unchanged |

**Business Rules:**
- Invoice is locked for editing
- Customer has been formally invoiced
- All created documents reference this invoice number
- Invoice remains UNPAID even after downstream documents are created
- Cannot edit — use CN for reductions, DN for additional charges

---

## Status 3: CANCELLED (Terminal)

- No further actions
- Invoice retained in system for audit trail
- Cannot create any documents from CANCELLED invoice

---

## Creation Methods

### Standalone (New)
- Manual entry: customer, items, payment terms, charges
- Use for: direct billing, simple transactions, rush orders

### From Sales Order (TO BILL)
Data carried over automatically:
- ✅ Biller & Customer info, all items (SKU/qty/price), payment terms, charges, discounts, tax settings
- ✅ SO reference number
- ⚠️ Still editable in DRAFT before Submit

---

## Status Transition Table

| From | Action | To | Note |
|------|--------|----|------|
| N/A | Create New | DRAFT | Manual entry |
| N/A | From SO | DRAFT | Data carryover |
| DRAFT | Delete | Removed | Simple confirmation |
| DRAFT | Submit | UNPAID | Locked |
| DRAFT | Print PDF | DRAFT | Unchanged |
| UNPAID | Cancel → Go Back | UNPAID | No change |
| UNPAID | Cancel → Confirm | CANCELLED | Terminal |
| UNPAID | Delete | Removed | Extra confirmation required |
| UNPAID | Print PDF | UNPAID | Unchanged |

---

## Document Creation from UNPAID

| Action | Creates | Initial Status | Purpose |
|--------|---------|----------------|---------|
| Create Receipt | Receipt | DRAFT | Track payment received |
| Create Debit Note | Debit Note | DRAFT | Additional charges to customer |
| Create Credit Note | Credit Note | DRAFT | Refund or adjustment |
| Create Delivery Note | Delivery Note | DRAFT | Track goods delivery |

---

## Key Business Rules

### Draft Rules
✅ Edit all fields | ✅ Delete (simple) | ✅ Print PDF (with watermark)
❌ Cannot create documents (Receipt/DN/CN/DN) | ❌ Cannot cancel (delete instead)

### Unpaid Rules
❌ Cannot edit directly | ✅ Cancel (two-step) | ✅ Delete (with extra confirmation)
✅ Create Receipt | ✅ Create Debit Note | ✅ Create Credit Note | ✅ Create Delivery Note
✅ Print official PDF | ⚠️ All actions require proper authorization

### Cancelled Rules
❌ No actions | ✅ View/print for records

---

## DRAFT vs UNPAID Deletion

| | DRAFT | UNPAID |
|---|-------|--------|
| Confirmation | Single | Extra (warns about financial impact) |
| Check related docs | Not needed | Should verify no receipts/CNs/DNs exist |
| Audit log | Not required | Should be captured |

---

## Validation (before Submit)
- Customer selected with contact info
- At least one item, quantity > 0, unit price entered
- Payment terms defined with due date
- Grand Total > 0, tax calculations correct

---

## Key Testing Scenarios

**Basic flow:**
Create Invoice → DRAFT → Submit → UNPAID → Create Receipt

**From SO:**
SO in TO BILL → Convert to Invoice → DRAFT → verify all SO data carried over (items, charges, discounts, payment terms, SO reference) → Submit → UNPAID

**Multiple document creation:**
Invoice UNPAID → Create Receipt → back to invoice (still UNPAID) → Create Credit Note → back to invoice (still UNPAID) → Create Delivery Note → all reference same invoice

**Two-step cancel:**
Invoice UNPAID → Cancel → Go Back (no change) → Cancel again → Confirm Cancel → CANCELLED

**PDF behavior:**
DRAFT → Print PDF → "DRAFT" watermark | UNPAID → Print PDF → official (no watermark) | neither changes status

**Validation:**
Submit without customer → error | Submit without items → error | Submit with empty items section → blocked

---

## Document Relationships

```
SALES ORDER (TO BILL)
    │
    └──> INVOICE (DRAFT) ──> INVOICE (UNPAID)
                                  │
                                  ├──> RECEIPT (DRAFT)
                                  ├──> DEBIT NOTE (DRAFT)
                                  ├──> CREDIT NOTE (DRAFT)
                                  └──> DELIVERY NOTE (DRAFT)
```

---

## Status Indicators

- **DRAFT:** 🟡 Yellow — Editable, not final
- **UNPAID:** 🔴 Red — Payment pending
- **CANCELLED:** ⚫ Gray — Voided

---

## FAQ

**Can I edit after submitting?** No. UNPAID is locked. Use CN for reductions, DN for additions.

**Can I cancel a DRAFT invoice?** No. Delete DRAFT; only UNPAID can be cancelled.

**Does creating a Receipt change the invoice status?** Invoice remains UNPAID until payment is fully recorded (handled in invoice module).

**Can I delete an UNPAID invoice that has a Receipt?** System should warn you; check with finance for proper procedure.

---

## See Also

- [[Sales Order Workflow Guide]]
- [[Credit Note Workflow Guide]]
- [[Debit Note Workflow Guide]]
- [[Receipt Workflow Guide]]
- [[Sales Workspace Modules]]

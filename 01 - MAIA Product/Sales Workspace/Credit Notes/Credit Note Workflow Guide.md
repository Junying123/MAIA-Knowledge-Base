---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Credit Note Workflow Guide

**Status Flow:** `DRAFT → OPEN → CANCELLED`

---

## High-Level Overview

```
Create New / From Invoice → DRAFT ──Submit──> OPEN ──Cancel──> CANCELLED
                              ↓                  ↓
                           Delete            Create Voucher
                              ↓
                          Removed
```

**Key Points:**
- Can be created **standalone** or **from Invoice** (UNPAID status)
- DRAFT is freely editable; OPEN is locked
- OPEN enables Payment Voucher creation (refund processing)
- Cancel is a two-step process (Go Back / Confirm Cancel)
- CANCELLED is terminal — retained for audit

---

## Status 1: DRAFT

**Available Actions:**

| Action | Result |
|--------|--------|
| Delete | Removed from system (permanent, no audit trail) |
| Submit | → OPEN (locked) |
| Print PDF | Draft watermark; status unchanged |

**Business Rules:**
- All fields editable freely
- Must validate before Submit (customer required, at least one item, amount > 0)
- PDF in DRAFT shows "DRAFT" watermark
- Cannot create vouchers from DRAFT

---

## Status 2: OPEN

**Available Actions:**

| Action | Result |
|--------|--------|
| Generate PDF | Official PDF (no watermark); status unchanged |
| Cancel Credit Note | Two-step: Go Back (no change) / Confirm Cancel → CANCELLED |
| Create Voucher | Payment Voucher created in UNSAVED CHANGES; CN remains OPEN |

**Business Rules:**
- CN is locked for editing
- Customer credit is active and reflected in balance
- Multiple vouchers can be created (total cannot exceed CN amount)
- Cannot delete from OPEN — must cancel first

---

## Status 3: CANCELLED (Terminal)

- No further actions
- CN remains in system for audit trail
- Customer credit is reversed/voided
- Cannot create vouchers from CANCELLED

---

## Creation Methods

### Standalone (New)
- Manual entry: customer, items to credit, reason, amounts
- Use for: promotional credits, goodwill, price adjustments

### From Invoice (UNPAID)
Data carried over automatically:
- ✅ Customer details, all items (SKU/qty/price), tax settings, charges
- ✅ Invoice reference number
- ⚠️ Amounts can be adjusted for partial vs full credit

Use for: product returns, invoice corrections, service not delivered, disputes

---

## Status Transition Table

| From | Action | To | Note |
|------|--------|----|------|
| N/A | Create New | DRAFT | Manual entry |
| N/A | From Invoice | DRAFT | Data carryover |
| DRAFT | Delete | Removed | Permanent |
| DRAFT | Submit | OPEN | Locked; credit active |
| DRAFT | Print PDF | DRAFT | Unchanged |
| OPEN | Generate PDF | OPEN | Unchanged |
| OPEN | Cancel → Go Back | OPEN | No change |
| OPEN | Cancel → Confirm | CANCELLED | Terminal |
| OPEN | Create Voucher | OPEN | Creates Voucher (UNSAVED CHANGES) |

---

## Document Creation from OPEN

| Action | Creates | Purpose |
|--------|---------|---------|
| Create Voucher | Payment Voucher | Process refund or apply credit to customer account |

---

## Key Business Rules

### Draft Rules
✅ Edit all fields freely | ✅ Delete | ✅ Print PDF (with watermark)
❌ Cannot create vouchers | ❌ Cannot cancel (delete instead)

### Open Rules
❌ Cannot edit | ✅ Cancel (two-step) | ✅ Create Payment Voucher | ✅ Generate PDF
❌ Cannot delete | ⚠️ All actions affect customer balance

### Cancelled Rules
❌ No actions | ✅ View/print for records | ⚠️ Customer credit reversed

---

## Validation (before Submit)
- Customer selected
- At least one item with quantity > 0
- Credit amount > 0
- If from Invoice: invoice reference present

---

## Key Testing Scenarios

**Basic flow:**
Create CN → DRAFT → Submit → OPEN → Create Voucher

**From Invoice:**
Invoice UNPAID with 3 items → Create CN → DRAFT → verify all 3 items carried over → adjust to 1 item (partial) → Submit → OPEN → verify invoice reference

**Two-step cancel:**
CN OPEN → Cancel → dialog shows Go Back / Confirm Cancel → Go Back → still OPEN → Cancel again → Confirm Cancel → CANCELLED (terminal)

**Multiple vouchers:**
CN OPEN with MYR 1,000 → Create Voucher #1 (MYR 400) → CN still OPEN → Create Voucher #2 (MYR 600) → both reference same CN

**PDF behavior:**
DRAFT → Print PDF → "DRAFT" watermark | OPEN → Generate PDF → official (no watermark) | neither changes status

---

## Document Relationships

```
INVOICE (UNPAID)
    │
    └──> CREDIT NOTE (DRAFT) ──> CREDIT NOTE (OPEN)
                                       │
                                       └──> PAYMENT VOUCHER (UNSAVED CHANGES)
```

---

## Key Differences vs Invoice

| Aspect | Invoice | Credit Note |
|--------|---------|-------------|
| Purpose | Collect payment | Issue refund/credit |
| Financial impact | Increases AR | Decreases AR |
| Second status | UNPAID | OPEN |
| Delete from 2nd status | Yes (with confirmation) | No (must cancel) |
| Cancel process | Single confirmation | Two-step (Go Back / Confirm) |
| Creates documents | Receipt, DN, CN, Delivery Note | Payment Voucher only |

---

## FAQ

**Can I edit after submitting?** No. OPEN is locked. Cancel and recreate if changes needed.

**Can I cancel a DRAFT CN?** No. Delete DRAFT; only OPEN can be cancelled.

**Do vouchers affect CN status?** No. CN remains OPEN when vouchers are created.

**Can I create vouchers from CANCELLED CN?** No. Terminal status.

---

## See Also

- [[Invoice Workflow Guide]]
- [[Debit Note Workflow Guide]]
- [[Receipt Workflow Guide]]
- [[Sales Workspace Modules]]

---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Debit Note Workflow Guide

**Status Flow:** `DRAFT → UNPAID → CANCELLED`

> ⚠️ **Critical:** Debit Notes can **ONLY** be created from an Invoice (UNPAID, OVERDUE, or PARTLY PAID). They cannot be created as standalone documents.

---

## High-Level Overview

```
Invoice (UNPAID/OVERDUE/PARTLY PAID) → Create DN → DRAFT ──Submit──> UNPAID ──Cancel──> CANCELLED
                                                      ↓                 ↓
                                                   Delete           Create:
                                                      ↓             • Receipt
                                                  Removed           • Credit Note
```

**Key Points:**
- Debit Notes can **ONLY** be created from Invoice (not standalone)
- Eligible invoice statuses: **UNPAID, OVERDUE, PARTLY PAID**
- DRAFT is freely editable; UNPAID is locked
- UNPAID enables Receipt and Credit Note creation
- Two-step cancel (Go Back / Confirm Cancel)
- CANCELLED is terminal — retained for audit

---

## Status 1: DRAFT

**Available Actions:**

| Action | Result |
|--------|--------|
| Delete | Removed from system (permanent, no audit trail) |
| Submit | → UNPAID (locked; customer balance increases) |
| Print PDF | Draft watermark; status unchanged |

**Business Rules:**
- All fields editable freely
- Customer & invoice reference auto-filled from source invoice
- Must validate before Submit (at least one item, charge amount > 0)
- Cannot create receipts from DRAFT

---

## Status 2: UNPAID

**Available Actions:**

| Action | Result |
|--------|--------|
| Generate PDF | Official PDF (no watermark); status unchanged |
| Cancel Debit Note | Two-step: Go Back / Confirm Cancel → CANCELLED |
| Create Receipt | Receipt created in DRAFT; DN remains UNPAID |
| Create Credit Note | Credit Note created in DRAFT; DN remains UNPAID |

**Business Rules:**
- DN is locked for editing
- Additional charge is active in customer account (balance increased)
- Multiple receipts can be created for partial payments
- Cannot delete from UNPAID — must cancel first

---

## Status 3: CANCELLED (Terminal)

- No further actions
- DN retained in system for audit trail
- Additional charge is reversed/voided
- Cannot create receipts from CANCELLED

---

## Creation: From Invoice Only

**Eligible Invoice Statuses:**
- ✅ UNPAID
- ✅ OVERDUE
- ✅ PARTLY PAID
- ❌ PAID, DRAFT, CANCELLED — cannot create DN

**Process:**
1. Navigate to Invoice with eligible status
2. Click "Create Debit Note"
3. Data auto-transferred: Customer details, invoice reference, tax settings, biller info
4. Add items for additional charges (modify or add new)
5. Submit → UNPAID

**Use Cases:**
- Additional shipping/handling fees after invoice issued
- Rush/expedited order fees
- Storage or special handling charges
- Price corrections (increase)
- Late payment penalties (OVERDUE invoices)
- Extra services provided after original billing

---

## Decision: Debit Note vs New Invoice

| Use Debit Note when | Use New Invoice when |
|---------------------|----------------------|
| Adjustment to same customer/contract/invoice | New sale or different scope |
| Need audit-linked addition | Different payer/entity/PO |
| Want AR/aging to reflect original invoice chain | Original invoice is closed |

**If you need to reduce/offset after a debit note:** Issue a Credit Note linked to the same chain.

---

## Status Transition Table

| From | Action | To | Note |
|------|--------|----|------|
| N/A | From Invoice | DRAFT | Data carryover; only from Invoice |
| DRAFT | Delete | Removed | Permanent |
| DRAFT | Submit | UNPAID | Locked; charge active |
| DRAFT | Print PDF | DRAFT | Unchanged |
| UNPAID | Generate PDF | UNPAID | Unchanged |
| UNPAID | Cancel → Go Back | UNPAID | No change |
| UNPAID | Cancel → Confirm | CANCELLED | Terminal |
| UNPAID | Create Receipt | UNPAID | Creates Receipt (DRAFT) |
| UNPAID | Create Credit Note | UNPAID | Creates CN (DRAFT) |

---

## Document Creation from UNPAID

| Action | Creates | Purpose |
|--------|---------|---------|
| Create Receipt | Receipt | Collect payment for additional charges |
| Create Credit Note | Credit Note | Issue reduction/offset against debit amount |

---

## Key Business Rules

### Draft Rules
✅ Edit all fields | ✅ Delete | ✅ Print PDF (with watermark)
❌ Cannot create receipts | ❌ Cannot cancel (delete instead)
⚠️ Can ONLY be created from Invoice (UNPAID/OVERDUE/PARTLY PAID)

### Unpaid Rules
❌ Cannot edit | ✅ Cancel (two-step) | ✅ Create Receipt | ✅ Create Credit Note | ✅ Generate PDF
❌ Cannot delete | ⚠️ All actions affect customer balance

### Cancelled Rules
❌ No actions | ✅ View/print for records | ⚠️ Additional charge reversed

---

## Validation (before Submit)
- Customer present (auto-filled from invoice)
- Invoice reference present (auto-filled)
- At least one item with quantity > 0
- Charge amount > 0
- Tax calculations correct

---

## Key Testing Scenarios

**Basic flow:**
Invoice UNPAID → Create Debit Note → DRAFT → add "Rush Shipping" item MYR 200 → Submit → UNPAID → Create Receipt to collect

**Customer balance impact:**
Invoice MYR 1,000 (UNPAID) → Create DN MYR 200 → submit → customer now owes MYR 1,200

**Data carryover:**
Invoice with 3 items, GST 6%, total MYR 318 → Create DN → verify customer details & invoice reference → add new item "Rush Shipping" MYR 50 → verify total recalculates → Submit → UNPAID

**Two-step cancel:**
DN UNPAID → Cancel → Go Back (no change) → Cancel again → Confirm Cancel → CANCELLED

**Standalone attempt (should fail):**
Navigate to Debit Notes list → Create New → verify no standalone option exists or is blocked

**Cannot delete UNPAID:**
DN in UNPAID → verify Delete option not available → must use Cancel

---

## Document Relationships

```
INVOICE (UNPAID / OVERDUE / PARTLY PAID)
    │
    └──> DEBIT NOTE (DRAFT) ──> DEBIT NOTE (UNPAID)
                                      │
                                      ├──> RECEIPT (DRAFT)
                                      └──> CREDIT NOTE (DRAFT)
```

---

## Key Differences vs Credit Note

| Aspect | Credit Note | Debit Note |
|--------|-------------|------------|
| Purpose | Issue refund/credit | Charge additional amount |
| Financial impact | Decreases AR | Increases AR |
| Standalone creation | ✅ Yes | ❌ No — Invoice only |
| Second status | OPEN | UNPAID |
| Downstream docs | Payment Voucher | Receipt, Credit Note |
| Customer balance | Decreases amount owed | Increases amount owed |

---

## What NOT to Do

- Don't use a debit note for a brand-new sale (create a new invoice instead)
- Don't add penalties/interest without contractual basis or required approvals
- Don't detach it from the parent invoice — always keep reference for audit
- Don't mix different customers/entities or unrelated scopes

---

## FAQ

**Can I create a standalone Debit Note?** No. Must always be created from an Invoice in UNPAID, OVERDUE, or PARTLY PAID status.

**Can I edit after submitting?** No. UNPAID is locked. Cancel and recreate if changes needed.

**Do receipts affect DN status?** No. DN remains UNPAID when receipts are created.

**Can I create receipts from CANCELLED DN?** No. Terminal status.

---

## See Also

- [[Invoice Workflow Guide]]
- [[Credit Note Workflow Guide]]
- [[Receipt Workflow Guide]]
- [[Debit Note TC-DN-001 Testing Guide]]
- [[Sales Workspace Modules]]

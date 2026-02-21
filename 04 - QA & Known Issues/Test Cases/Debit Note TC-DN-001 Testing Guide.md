---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# TC-DN-001: Missing Product Item from Invoice

**Test Case ID:** TC-DN-001
**Scenario Type:** Error Correction
**Purpose:** Verify creating a debit note for an item delivered but missing from the original invoice.

---

## What This Validates

1. Can create debit note from UNPAID invoice
2. Additional items can be added to debit note
3. Customer balance increases correctly
4. Original invoice status remains unchanged
5. Data is properly carried over from invoice

---

## Business Context

**Situation:** 2 units of Product B (RM100 each = RM200) were delivered but missing from a RM1,000 invoice.
**Solution:** Create a debit note for the missing RM200.

---

## Prerequisites

- Invoice with status: **UNPAID**, amount: **RM1,000.00**
- Invoice must be submitted (not Draft)
- Product B available in item catalog (RM100/unit)

---

## Test Steps

### Step 1 — Navigate to Invoice
Go to **Sales > Invoices** → Open UNPAID invoice → Confirm "Create Debit Note" button is visible.

### Step 2 — Create Debit Note
Click **"Create Debit Note"** → Debit note opens in **DRAFT** status.

### Step 3 — Verify Data Carryover
- ✅ Customer name, contact, billing/shipping address
- ✅ Invoice reference number (read-only)
- ✅ Biller info: contact, address, tax settings
- ✅ Currency (MYR)

### Step 4 — Add Missing Item

In Items section → **"Add Item"**:
- SKU: Product B
- Quantity: **2**
- Unit Price: **RM100.00**
- Amount: **RM200.00** (auto-calculated)

### Step 5 — Verify Summary

| Field | Expected |
|-------|----------|
| Subtotal | RM200.00 |
| Charges | RM0.00 |
| Grand Total | **RM200.00** |

### Step 6 — Submit
Click **"Submit"** → Status changes **DRAFT → UNPAID** → Fields become read-only.

### Step 7 — Verify Customer Balance

| Component | Amount |
|-----------|--------|
| Original invoice | RM1,000.00 |
| Debit note | RM200.00 |
| **Total outstanding** | **RM1,200.00** |

### Step 8 — Verify Original Invoice
Navigate to original invoice → Status still **UNPAID**, amount still **RM1,000.00**, no changes.

---

## Expected Results

| Aspect | Expected |
|--------|----------|
| Debit note status flow | DRAFT → UNPAID |
| Debit note amount | RM200.00 |
| Invoice status | UNPAID (unchanged) |
| Customer balance impact | +RM200.00 |
| Editable in DRAFT | All fields |
| Locked in UNPAID | All fields (read-only) |
| Items requirement | Mandatory (at least 1 item) |

---

## Common Issues to Watch

| Issue | Indicates |
|-------|-----------|
| Cannot create DN from UNPAID invoice | Permission or status bug |
| Data not carried over | Carryover bug |
| Customer balance unchanged | Balance update bug |
| Invoice status changes | Critical bug |
| Can edit after submit | Lock bug |
| Submit fails with valid item | Validation bug |

---

## Test Completion Checklist

- [ ] Prerequisites met (UNPAID invoice exists)
- [ ] Debit note created in DRAFT status
- [ ] Data carryover verified
- [ ] Product B (2 × RM100 = RM200) added
- [ ] Grand total = RM200.00
- [ ] Status changed DRAFT → UNPAID
- [ ] Fields locked after submit
- [ ] Customer balance = RM1,200.00
- [ ] Original invoice unchanged (UNPAID, RM1,000)

---

## See Also

- [[Debit Note Business Value]]
- [[Debit Note Creation Summary]]
- [[Debit Note Test Summary]]

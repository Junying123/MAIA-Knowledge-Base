---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
lark_url:
---

# Workarounds Library

Practical workarounds for known MAIA limitations and bugs.

## Critical Limitations

### Multiple Credit Notes per Invoice

**Problem:**
Cannot create more than one credit note from same invoice.

**Workaround:**
1. **Wait and consolidate:** If customer will return items in batches, wait until all returns complete
2. **Single consolidated CN:** Create one credit note with all returned items
3. **Document timeline:** Keep notes of when each batch was returned for audit trail

**Related:** [[Known Bugs & Limitations]] — Issue BUG-001

---

### Invoicing from HOLD Status

**Problem:**
Cannot create invoice directly from Sales Order in HOLD status.

**Workaround:**
1. Open the Sales Order in HOLD
2. Click "Resume" to change status to TO BILL
3. Then click "Create Invoice"
4. If needed, put SO back on HOLD after invoice creation

**Related:** [[Known Bugs & Limitations]] — Issue BUG-002

---

## Process Workarounds

### Deleting UNPAID Invoices

**Problem:**
Cannot delete invoices once submitted (UNPAID status).

**Workaround:**
Use "Cancel Invoice" instead of delete. This is the correct approach for submitted invoices.

**Note:** This is not a bug — it's expected behavior for financial documents.

---

### Testing Lost Quotation Flow

**Problem:**
Native browser confirms cannot be automated with Playwright.

**Workaround:**
Manual testing required for "Mark as LOST" workflow.

**Related:** [[Test Scenarios Index]] — US-09

---

## Client-Specific Workarounds

[Add client-specific workarounds here as they're discovered]

---

## See Also

- [[Known Bugs & Limitations]] — Full bug list
- [[01 - MAIA Product/Overview/Known Limitations]] — Product gaps
- [[Feature Gap Tracker]] — Missing features

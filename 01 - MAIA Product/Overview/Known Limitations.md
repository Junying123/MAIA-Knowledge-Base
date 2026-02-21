---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Known Limitations

This page documents **current product limitations, gaps, and workarounds** for MAIA.

## Critical Limitations

### 1. Cannot Create Multiple Credit Notes from Same Invoice

**Status:** 🔴 CRITICAL — Blocks real business workflows

**Description:**
- System only allows **one credit note per invoice**
- If a customer returns items in multiple batches, only the first batch can be credited
- Attempting to create a second credit note fails

**Business Impact:**
- Cannot handle sequential returns over time
- Cannot handle partial credits across multiple transactions
- Forces consolidation of all returns into a single credit note

**Workaround:**
- Consolidate all returns into a single credit note before submission
- For staged returns, wait until all items are returned before issuing credit

**Related Test Scenarios:**
- INT-02: Medium Complexity (10 items) — BLOCKED
- INT-06: Sequential Returns — BLOCKED
- INT-07: Partial Credits from Multiple Invoices — BLOCKED

**Recommendation:** URGENT product fix needed

---

### 2. Cannot Invoice Directly from HOLD Status

**Status:** 🟡 MEDIUM — Confusing UX, workaround exists

**Description:**
- Sales Orders in HOLD status cannot be directly converted to Invoice
- "Convert to Invoice" button is not available when SO is on HOLD
- Must resume SO to TO BILL status first

**Business Impact:**
- Extra step required (HOLD → Resume → Invoice)
- Confusing for users who expect to bill from HOLD

**Workaround:**
1. Resume Sales Order to TO BILL status
2. Then create Invoice

**Related Test Scenarios:**
- SCN-03: Hold SO, Create Invoice, Resume — PENDING
- US-21: Create Invoice from SO on HOLD — BLOCKED

**Recommendation:** Either enable HOLD → Invoice OR remove button from UI when HOLD

---

### 3. Cannot Delete UNPAID Invoices

**Status:** ✅ EXPECTED BEHAVIOR — Not a bug

**Description:**
- Invoices can only be deleted in DRAFT status
- Once submitted (UNPAID), invoices must be CANCELLED instead of deleted

**Business Impact:**
- None — cancellation is the correct approach for submitted invoices

**Workaround:**
- Use Cancel Invoice action for UNPAID invoices

**Related Test Scenarios:**
- SCN-35: Delete Invoice with Extra Confirmation — N/A

**Recommendation:** Document this clearly in user guide

---

## Known UI Issues

### 4. Native Browser Confirm Dialogs Not Automatable

**Status:** 🟡 MEDIUM — Affects test automation

**Description:**
- Some actions (e.g., "Mark Quotation as LOST") use native `window.confirm()` instead of component library modals
- Playwright cannot automate native browser dialogs

**Business Impact:**
- Manual testing required for these workflows
- Test automation coverage gap

**Workaround:**
- Manual testing for affected scenarios

**Related Test Scenarios:**
- US-09: Handle Lost Quotation — FAILED (automation issue)

**Recommendation:** Replace `window.confirm()` with component library modal

---

## Feature Gaps

### 5. Bulk Operations Not Available

**Status:** 🟡 MEDIUM — Scalability concern

**Description:**
- No bulk select/operate functionality for documents
- Cannot perform batch operations (e.g., submit 20 quotations at once)

**Business Impact:**
- Manual, repetitive work for large volumes
- Scalability concerns for high-volume clients

**Workaround:**
- Process documents individually

**Related Test Scenarios:**
- SCN-05: Bulk Document Conversions — Not Tested
- SCN-06: Comprehensive Bulk Operations — Not Tested
- US-25: Bulk Document Operations — Not Tested

**Recommendation:** Implement bulk select + operate for common actions

---

### 6. Delivery Notes Workflow Incomplete

**Status:** 🟡 MEDIUM — Limits warehouse operations

**Description:**
- Delivery Note module exists but workflow testing incomplete
- Integration with Sales Orders and Invoices not fully validated

**Business Impact:**
- Warehouse teams may face workflow gaps

**Workaround:**
- Manual coordination between sales and warehouse

**Related Test Scenarios:**
- US-10: Generate Delivery Note — PENDING
- US-19: Create DN from SO — Not Tested
- US-20: Multiple DNs for Partial Shipments — Not Tested

**Recommendation:** Complete DN workflow testing and documentation

---

## See Also

- [[04 - QA & Known Issues/Workarounds Library]] — Detailed workarounds
- [[04 - QA & Known Issues/Known Bugs & Limitations]] — Full bug list
- [[Document Status Flows]] — Status transition rules
- [[07 - Decisions/Decision Log]] — Decisions about handling limitations

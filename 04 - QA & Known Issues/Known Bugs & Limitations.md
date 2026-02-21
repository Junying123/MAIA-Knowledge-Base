---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
lark_url:
---

# Known Bugs & Limitations

Centralized tracking of all known bugs, limitations, and product gaps.

## Critical Issues (Blockers)

### 🔴 Cannot Create Multiple Credit Notes from Same Invoice

**Status:** BLOCKING
**Impact:** High — Affects returns and refund workflows
**Reported:** 2024-12-22
**Test Reference:** INT-02, INT-06, INT-07

**Description:**
System only allows one credit note per invoice. Sequential or partial returns cannot be processed.

**Workaround:**
Consolidate all returns into single credit note before submission.

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

---

### 🔴 Cannot Invoice from HOLD Status

**Status:** UX Issue
**Impact:** Medium — Confusing but workaround exists
**Reported:** 2024-12-22

**Description:**
Sales Orders in HOLD cannot be directly converted to Invoice.

**Workaround:**
Resume SO to TO BILL before creating invoice.

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

---

## Medium Priority Issues

### 🟡 Native Browser Confirms Not Automatable

**Status:** Test Automation Issue
**Impact:** Low — Manual testing required
**Test Reference:** US-09

**Description:**
Some actions use native `window.confirm()` instead of component modals.

**Recommendation:**
Replace with component library modals for better UX and test automation.

---

## Feature Gaps

### 🟢 Bulk Operations Missing

**Status:** Feature Request
**Impact:** Medium — Affects scalability
**Test Reference:** SCN-05, SCN-06, US-25

**Description:**
No bulk select/operate functionality for documents.

**See:** [[Feature Gap Tracker]]

---

### 🟢 Delivery Notes Workflow Incomplete

**Status:** Documentation Gap
**Impact:** Low — Module exists but testing incomplete
**Test Reference:** US-10, US-19, US-20

**See:** [[Feature Gap Tracker]]

---

## Bug Tracking

| Bug ID | Summary | Priority | Status | Owner | Target Fix |
|--------|---------|----------|--------|-------|------------|
| BUG-001 | Multiple CN limitation | Critical | Open | Dev Team | v1.2 |
| BUG-002 | HOLD → Invoice UX | Medium | Open | Product | v1.3 |
| BUG-003 | Native confirm dialogs | Low | Backlog | Dev Team | TBD |

## See Also

- [[01 - MAIA Product/Overview/Known Limitations]] — Product limitations
- [[Workarounds Library]] — Detailed workarounds
- [[Feature Gap Tracker]] — Missing features
- [[Test Scenarios Index]] — Test coverage

---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Feature Gap Tracker

Track missing features and enhancement requests.

## Active Gaps

| Gap ID | Feature | Priority | Impact | Status | Target Release |
|--------|---------|----------|--------|--------|----------------|
| GAP-001 | Multiple credit notes | Critical | High | Planned | v1.2 |
| GAP-002 | Bulk operations | High | Medium | Backlog | v1.3 |
| GAP-003 | Delivery notes workflow | Medium | Low | Backlog | TBD |
| GAP-004 | Payment tracking | High | High | Not Started | TBD |
| GAP-005 | Debit notes workflow | Medium | Medium | Not Started | TBD |

## Gap Details

### GAP-001: Multiple Credit Notes per Invoice

**Status:** 🔴 Critical
**Current:** One credit note per invoice
**Requested:** Multiple partial credit notes over time
**Use Case:** Sequential returns, staged refunds
**Client Impact:** High — Blocks real business workflows

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

---

### GAP-002: Bulk Operations

**Status:** 🟡 High
**Current:** Individual document operations only
**Requested:** Bulk select and operate (submit, cancel, etc.)
**Use Case:** High-volume clients processing many documents
**Client Impact:** Medium — Manual, repetitive work

---

### GAP-003: Delivery Notes Complete Workflow

**Status:** 🟢 Medium
**Current:** Module exists but workflow testing incomplete
**Requested:** Full DN integration with SO and Invoice
**Use Case:** Warehouse teams tracking shipments
**Client Impact:** Low — Workarounds exist

---

## Gap Submission Process

Use [[02 - PM Playbook/Templates/[Template] Feature Gap Analysis]] to document new gaps.

## See Also

- [[Known Bugs & Limitations]]
- [[02 - PM Playbook/Templates/[Template] Feature Gap Analysis]]
- [[05 - Releases & Updates/Upcoming Features]]

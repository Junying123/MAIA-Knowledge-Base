---
owner: [Name]
status: draft
doctype: [Quotation | Sales Order | Invoice | Credit Note | Debit Note | Receipt | Voucher | Delivery Note | Return Note | Customer | Items]
last_reviewed: YYYY-MM-DD
---

# [Doctype] — Product Spec

> **Usage:** Copy this template. Replace all `[placeholders]` and `[TO FILL]` markers. Never edit this file directly.

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | [1–2 sentence description] |
| Primary user | [Sales Agent / Finance Team / Logistics Team / All] |
| Workspace | [Sales / Finance / Logistics] |
| URL | `/[workspace]/[path]` |
| Entry points | [How this document gets created — list all methods] |
| Downstream creates | [What documents this doctype can generate] |

---

## 2. Capability List

Quick reference — all capabilities this doctype supports. Detail in Section 3.

- [ ] [Capability 1]
- [ ] [Capability 2]
- [ ] [Capability 3]
- [ ] [TO FILL] — additional capabilities known but not yet documented

---

## 3. Feature Specs

One subsection per capability. Each includes subfeatures — the small but important behaviours inside.

---

### F-01: [Capability Name]

| Attribute | Detail |
|---|---|
| Description | [What this feature does] |
| Business Rule | [Key constraint or logic] |
| Field Behaviour | [Which fields involved; when editable/locked] |
| Edge Cases | [Known edge behaviours or exceptions] |
| Client Examples | [Which clients use this — Holsen / Fixguru / etc.] |

**Subfeatures:**
- [Small behaviour inside this capability]
- [Auto-populate rule, validation trigger, UI behaviour, calculation]
- [TO FILL]

---

### F-02: [Capability Name]

| Attribute | Detail |
|---|---|
| Description | |
| Business Rule | |
| Field Behaviour | |
| Edge Cases | |
| Client Examples | |

**Subfeatures:**
- [TO FILL]

---

## 4. User Stories

### US-01: [Story name]
**As a** [role], **I can** [action] **so that** [outcome].
**Priority:** High / Medium / Low
**Dependencies:** [other modules or features, if any]

### US-02: [Story name]
**As a** [role], **I can** [action] **so that** [outcome].
**Priority:** High / Medium / Low
**Dependencies:** [TO FILL]

---

## 5. Acceptance Criteria

### AC-01 (for US-01)
- **Given** [context / precondition]
- **When** [user action]
- **Then** [expected system response]

### AC-02 (for US-02)
- **Given** [TO FILL]
- **When** [TO FILL]
- **Then** [TO FILL]

---

## 6. Known Limitations

- [ ] [Limitation] — Workaround: [if any] — Status: 🔴 Critical / 🟡 Medium / ✅ Expected
- [ ] [TO FILL]

---

## 7. See Also

- [[Workflow Guide link]]
- [[Related Spec]]
- [[Quote-to-Cash Flow]]

---
owner: Gareth
status: draft
doctype: Debit Note
last_reviewed: 2026-04-15
---

# Debit Note — Product Spec

> **Status:** Stub — `[TO FILL]` sections need Gareth's product knowledge

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that increases a customer's outstanding balance — used for additional charges after an invoice has been issued |
| Primary user | Sales Agent, Finance Team |
| Workspace | Sales (`/sales/debit-notes`), Finance (`/finance/debit-notes`) |
| URL | `/sales/debit-notes` |
| Entry points | 1. Create New (manual) 2. Create from Invoice (UNPAID status) |
| Downstream creates | Receipt (DRAFT) — for collecting the additional charge |

---

## 2. Capability List

- [x] Create Debit Note manually
- [x] Create from Invoice (UNPAID)
- [x] Submit Debit Note (DRAFT → UNPAID)
- [x] Create Receipt from UNPAID (to collect the additional charge)
- [ ] [TO FILL] — Cancel flow
- [ ] [TO FILL] — PDF generation (watermark in DRAFT?)
- [ ] [TO FILL] — Status flow (DRAFT → UNPAID → PAID? or same as Invoice?)
- [ ] [TO FILL] — Delete rules (DRAFT only?)
- [ ] [TO FILL] — DN numbering format
- [ ] [TO FILL] — What data carries from Invoice?
- [ ] [TO FILL] — Column filters and sort on DN list view

---

## 3. Feature Specs

### F-01: Create Debit Note
**[TO FILL]** — document entry points, field behaviour, business rules

**Subfeatures:**
- From Invoice: `[TO FILL]` — which fields carry over?
- Use cases: `[TO FILL]` — e.g., late delivery fees, additional handling charges, price adjustments upward
- `[TO FILL]` — required fields

---

### F-02: Status Management
**[TO FILL]** — full status flow, available actions per status, terminal states

---

### F-03: Receipt from Debit Note
**[TO FILL]** — creating a Receipt to collect the debit note charge

---

## 4. User Stories

### US-01: [TO FILL]
**As a** [role], **I can** [TO FILL] **so that** [TO FILL].

---

## 5. Acceptance Criteria

### AC-01: [TO FILL]
- **Given** [TO FILL]
- **When** [TO FILL]
- **Then** [TO FILL]

---

## 6. Known Limitations

- [ ] [TO FILL]

---

## 7. See Also

- [[Debit Note Workflow Guide]]
- [[Debit Note Business Value]]
- [[Invoice Spec]]
- [[Invoice Workflow Guide]]

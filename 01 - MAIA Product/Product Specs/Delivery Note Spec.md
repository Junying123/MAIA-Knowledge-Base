---
owner: Gareth
status: draft
doctype: Delivery Note
last_reviewed: 2026-04-15
---

# Delivery Note — Product Spec

> **Status:** Stub — `[TO FILL]` sections need Gareth's product knowledge. Delivery Note workflow testing is incomplete (see Known Limitations).

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that tracks goods shipment to the customer — links fulfillment to a Sales Order or Invoice |
| Primary user | Logistics Team, Sales Agent |
| Workspace | Sales (`/sales/delivery-notes`), Logistics (`/logistics/delivery-notes`) |
| URL | `/sales/delivery-notes` |
| Entry points | 1. Create from Sales Order (TO BILL or HOLD) 2. Create from Invoice (UNPAID) 3. [TO FILL] — standalone? |
| Downstream creates | [TO FILL] |

---

## 2. Capability List

- [x] Create from Sales Order (TO BILL status)
- [x] Create from Sales Order (HOLD status)
- [x] Create from Invoice (UNPAID status)
- [ ] [TO FILL] — Status flow (DRAFT → ? → ?)
- [ ] [TO FILL] — Delivery trip linking
- [ ] [TO FILL] — Driver / vehicle assignment
- [ ] [TO FILL] — Multiple DNs per SO (partial shipments)
- [ ] [TO FILL] — Customer signature / proof of delivery
- [ ] [TO FILL] — PDF / delivery receipt
- [ ] [TO FILL] — Return Note creation from Delivery Note
- [ ] [TO FILL] — Integration with Logistics workspace (Pick Lists, Packing Lists)

---

## 3. Feature Specs

### F-01: Create Delivery Note
**[TO FILL]**

**Subfeatures:**
- From SO (TO BILL): carries Biller info, Customer info, Items & Quantities, Delivery Address, SO reference
- From SO (HOLD): `[TO FILL]` — same carryover as TO BILL?
- From Invoice: `[TO FILL]` — which fields carry?
- `[TO FILL]` — Can multiple DNs be created from one SO (partial shipments)?

---

### F-02: Status Management
**[TO FILL]** — complete status flow unknown; workflow testing incomplete

---

### F-03: Logistics Integration
**[TO FILL]** — Pick Lists, Packing Lists, Delivery Trips linkage

---

## 4. User Stories

### US-01: [TO FILL]
**As a** [role], **I can** [TO FILL] **so that** [TO FILL].

---

## 5. Acceptance Criteria

### AC-01: [TO FILL]

---

## 6. Known Limitations

- [ ] Delivery Note workflow testing incomplete — integration with SO and Invoice not fully validated — Status: 🟡 Medium
- [ ] Multiple DNs per SO (partial shipments) — not yet tested — Status: 🟡 Medium
- [ ] [TO FILL]

---

## 7. See Also

- [[Delivery Notes]] (Fulfillment folder)
- [[Sales Order Spec]]
- [[Invoice Spec]]
- [[Known Limitations]]

---
owner: Gareth
status: draft
doctype: Delivery Note
last_reviewed: 2026-04-15
---

# Delivery Note — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that tracks a single goods shipment to the customer; one SO can spawn multiple DNs (Blanket Order pattern) |
| Primary user | Logistics Team, Sales Agent |
| Workspace | Sales (`/sales/delivery-notes`), Logistics (`/logistics/delivery-notes`) |
| URL | `/sales/delivery-notes` |
| Entry points | 1. From Sales Order (TO BILL) 2. From Sales Order (HOLD) 3. From Invoice (UNPAID) |
| Downstream creates | Return Note (DRAFT) |

> **Blanket Order (multiple DNs from one SO):** See [[Blanket Order Spec]] for full capability — qty splits, different dates/addresses, chatbot splitting.

---

## 2. Capability List

- [x] Create DN from Sales Order (TO BILL)
- [x] Create DN from Sales Order (HOLD)
- [x] Create DN from Invoice (UNPAID)
- [x] Partial qty delivery (DN qty < SO total qty)
- [x] Multiple DNs per SO — Blanket Order pattern (see [[Blanket Order Spec]])
- [x] Different delivery date per DN
- [x] Different delivery address per DN
- [x] Chatbot-initiated DN splitting (see [[Blanket Order Spec]])
- [ ] [TO FILL] — Status flow (DRAFT → ? → ?)
- [ ] [TO FILL] — PDF / delivery receipt generation
- [ ] [TO FILL] — Driver / vehicle / warehouse assignment
- [ ] [TO FILL] — Proof of delivery (customer signature, photo)
- [ ] [TO FILL] — Packing List / Pick List integration
- [ ] [TO FILL] — Delivery Trip linking
- [ ] [TO FILL] — Return Note creation from DN
- [ ] [TO FILL] — DN numbering format
- [ ] [TO FILL] — Column filters and sort on DN list view

---

## 3. Feature Specs

---

### F-01: Create DN from Sales Order

| Attribute | Detail |
|---|---|
| Description | Creates a Delivery Note in DRAFT pre-filled with SO data; qty per line item editable to support partial/split delivery |
| Business Rule | Available from TO BILL or HOLD; SO status unchanged; DN qty ≤ remaining unfulfilled qty on SO |
| Field Behaviour | DN form opens with SO items pre-filled; agent edits qty for this delivery |
| Edge Cases | From HOLD: allowed (unlike Invoice which requires Resume first); remaining qty stays on SO for future DNs |
| Client Examples | All clients |

**Subfeatures:**
- Data carried from SO: Biller info, Customer info, Items & Quantities, Delivery Address, SO reference
- Qty per line item editable — set qty for this DN only
- Remaining unfulfilled qty stays on SO for subsequent DNs
- Creating DN does NOT change SO status
- `[TO FILL]` — Items section UI: same fields as SO items? Can items be removed from DN?
- `[TO FILL]` — Default qty when creating DN (full remaining qty? or blank?)

For multi-DN splitting, flexible qty, different dates/addresses, chatbot → see [[Blanket Order Spec]]

---

### F-02: Create DN from Invoice

| Attribute | Detail |
|---|---|
| Description | Create a DN from an UNPAID Invoice — for cases where goods are dispatched after invoice is raised |
| Business Rule | Invoice must be UNPAID |
| Field Behaviour | `[TO FILL]` — which fields carry from Invoice to DN |
| Edge Cases | `[TO FILL]` |
| Client Examples | `[TO FILL]` |

**Subfeatures:**
- `[TO FILL]` — Data carried from Invoice to DN
- `[TO FILL]` — Multiple DNs from one Invoice?

---

### F-03: Status Management

| Attribute | Detail |
|---|---|
| Description | `[TO FILL]` — DN status flow not yet fully validated |
| Business Rule | `[TO FILL]` |
| Field Behaviour | `[TO FILL]` |
| Edge Cases | `[TO FILL]` |
| Client Examples | All clients |

**Status flow:** `[TO FILL]`

**Subfeatures:**
- `[TO FILL]` — DRAFT → ? → ? → terminal
- `[TO FILL]` — Actions available per status
- `[TO FILL]` — PDF / delivery receipt per status
- `[TO FILL]` — Proof of delivery capture (signature, photo)

---

### F-04: Logistics Integration

| Attribute | Detail |
|---|---|
| Description | `[TO FILL]` — DN linkage to Pick Lists, Packing Lists, Delivery Trips |
| Business Rule | `[TO FILL]` |
| Field Behaviour | `[TO FILL]` |
| Edge Cases | `[TO FILL]` |
| Client Examples | `[TO FILL]` |

**Subfeatures:**
- `[TO FILL]` — Pick List creation from DN
- `[TO FILL]` — Packing List linkage
- `[TO FILL]` — Delivery Trip assignment (driver, vehicle, route)

---

## 4. User Stories

### US-01: Create Single DN from SO
**As a** logistics agent, **I can** create a Delivery Note from a Sales Order **so that** I can track and dispatch the goods for this order.
**Priority:** High
**Dependencies:** SO in TO BILL or HOLD status

### US-02: Create DN from HOLD SO
**As a** logistics agent, **I can** create a Delivery Note from an SO in HOLD status **so that** fulfillment can begin even when billing is paused.
**Priority:** Medium
**Dependencies:** SO in HOLD status

> For Blanket Order user stories (multiple DNs, split qty, chatbot): see [[Blanket Order Spec]]

---

## 5. Acceptance Criteria

### AC-01 (US-01: DN from SO)
- **Given** an SO in TO BILL with 100 units of Item A
- **When** I click "Create Delivery Note" and set qty to 50
- **Then** a DN in DRAFT is created with 50 units, SO reference, and SO status remains TO BILL

### AC-02 (US-02: DN from HOLD)
- **Given** an SO in HOLD status
- **When** I click "Create Delivery Note"
- **Then** a DN in DRAFT is created; SO remains in HOLD; "Convert to Invoice" is NOT available on SO

> For Blanket Order ACs (4 DNs from 1 SO, uneven splits, chatbot): see [[Blanket Order Spec]]

---

## 6. Known Limitations

- [ ] Delivery Note workflow testing incomplete — full status flow not yet validated — Status: 🟡 Medium
- [ ] Multiple DNs per SO (Blanket Order): `[TO FILL]` — system validation of total qty vs SO qty
- [ ] `[TO FILL]` — Maximum DNs per SO
- [ ] `[TO FILL]` — Other limitations

---

## 7. See Also

- [[Blanket Order Spec]] — Multiple DNs from one SO, qty splits, chatbot splitting
- [[Sales Order Spec]]
- [[Return Note Spec]]
- [[Quote-to-Cash Flow]]
- [[Known Limitations]]

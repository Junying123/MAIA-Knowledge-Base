---
owner: Gareth
status: draft
doctype: Return Note
last_reviewed: 2026-04-19
---

# Return Note — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | Document that tracks goods returned by the customer — linked to a Delivery Note or standalone |
| Primary user | Logistics Team, Sales Agent |
| Workspace | Sales (`/sales/return-notes`), Logistics (`/logistics/return-notes`) |
| URL | `/sales/return-notes` |
| Entry points | 1. Create New (manual/standalone) 2. `[TO FILL]` — from Delivery Note (Return Issued status)? |
| Downstream creates | `[TO FILL]` — triggers Credit Note? triggers stock reversal? |

---

## 2. Capability List

- [x] Create Return Note standalone
- [x] Expected Return Date field (defaults to 7 days from today)
- [x] Source Warehouse selection (unlocks address/contact)
- [x] PO Number field
- [x] Customer Information section (same as DN)
- [x] Remarks and Terms and Conditions fields
- [x] Status flow: Draft → Return → Cancelled
- [x] List view columns: Return Note ID, Customer, City, State, Postcode, Country, Fulfillment Method, No. of Items, Weight, Status, Total, Created at, Updated at
- [ ] [TO FILL] — Create from Delivery Note (when DN reaches Return Issued status)
- [ ] [TO FILL] — Items returned: quantity tracking, condition
- [ ] [TO FILL] — Return reason categorisation
- [ ] [TO FILL] — Stock reversal / inventory impact
- [ ] [TO FILL] — Link to Credit Note (does Return Note trigger CN?)
- [ ] [TO FILL] — PDF / return receipt generation
- [ ] [TO FILL] — Customer signature capture
- [ ] [TO FILL] — Actions per status (what triggers DRAFT → Return?)
- [ ] [TO FILL] — Return Note numbering format

---

## 3. Feature Specs

---

### F-01: Create Return Note

| Attribute | Detail |
|---|---|
| Description | Return Note tracks goods coming back from customer — mirrors Delivery Note structure |
| Business Rule | `[TO FILL]` — entry from DN (Return Issued) vs standalone |
| Field Behaviour | Warehouse selection unlocks Address and Contact; Customer selection unlocks contact/address fields |
| Edge Cases | `[TO FILL]` |
| Client Examples | `[TO FILL]` |

**Form fields (confirmed from UI):**
- Date (today default), Expected Return Date (7 days default), Currency, Incoterm
- **Warehouse Information**: Source Warehouse → unlocks Address and Contact
- Fulfillment Method (required)
- **Customer Information**: Customer → Billing Contact, Shipping Contact, Billing Address, Shipping Address
- PO Number (optional)
- Items section (customer must be selected first)
- Remarks (free text, optional)
- Terms and Conditions (free text, optional)
- `[TO FILL]` — Summary section (monetary total? weight?)

---

### F-02: Status Management

| Attribute | Detail |
|---|---|
| Description | Simple 3-state flow: Draft (editable) → Return (goods received back) → Cancelled |
| Business Rule | `[TO FILL]` — what triggers DRAFT → Return? |
| Field Behaviour | `[TO FILL]` |
| Edge Cases | `[TO FILL]` |
| Client Examples | All clients |

**Status flow:**
```
Create → DRAFT → [Confirm return] → RETURN (terminal positive)
           ↓
        [Cancel] → CANCELLED (terminal)
```

**Subfeatures:**
- DRAFT: editable; `[TO FILL]` — actions
- RETURN: goods received back; `[TO FILL]` — triggers stock reversal? triggers CN creation?
- CANCELLED: terminal; `[TO FILL]` — any balance reversals?

---

## 4. User Stories

### US-01: Track Returned Goods
**As a** logistics agent, **I can** create a Return Note for goods coming back from a customer **so that** the return is tracked and stock can be updated.
**Priority:** Medium
**Dependencies:** `[TO FILL]` — Delivery Note in Return Issued status?

---

## 5. Acceptance Criteria

### AC-01: [TO FILL]
- **Given** `[TO FILL]`
- **When** `[TO FILL]`
- **Then** `[TO FILL]`

---

## 6. Known Limitations

- [ ] Return Note workflow not fully explored — status transition triggers unknown
- [ ] `[TO FILL]` — whether stock reversal is automatic or manual
- [ ] `[TO FILL]` — whether Return Note auto-creates a Credit Note

---

## 7. See Also

- [[Delivery Note Spec]]
- [[Credit Note Spec]]
- [[Blanket Order Spec]]
- [[Known Limitations]]

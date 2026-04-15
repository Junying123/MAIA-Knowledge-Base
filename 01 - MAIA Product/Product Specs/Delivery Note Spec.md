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
| What it is | Document that tracks a single goods shipment to the customer — one Sales Order can generate multiple Delivery Notes (Blanket Order pattern) for staged fulfillment across different dates or addresses |
| Primary user | Logistics Team, Sales Agent |
| Workspace | Sales (`/sales/delivery-notes`), Logistics (`/logistics/delivery-notes`) |
| URL | `/sales/delivery-notes` |
| Entry points | 1. Create from Sales Order (TO BILL status) 2. Create from Sales Order (HOLD status) 3. Create from Invoice (UNPAID status) |
| Downstream creates | Return Note (DRAFT) — for goods returned from this delivery |

---

## 2. Capability List

- [x] Create Delivery Note from Sales Order (TO BILL)
- [x] Create Delivery Note from Sales Order (HOLD)
- [x] Create Delivery Note from Invoice (UNPAID)
- [x] **Blanket Order — split 1 SO into multiple DNs** (different qty per DN)
- [x] **Different delivery date per DN**
- [x] **Different delivery address per DN**
- [x] **Chatbot-initiated DN splitting** — natural language query splits SO into DNs with qty allocation
- [x] Partial qty delivery (DN qty < SO total qty; remaining qty available for future DNs)
- [ ] [TO FILL] — Status flow (DRAFT → ? → ?)
- [ ] [TO FILL] — PDF / delivery receipt generation
- [ ] [TO FILL] — Driver / vehicle / warehouse assignment
- [ ] [TO FILL] — Proof of delivery (customer signature, photo)
- [ ] [TO FILL] — Packing List / Pick List integration
- [ ] [TO FILL] — Delivery Trip linking
- [ ] [TO FILL] — Return Note creation from DN
- [ ] [TO FILL] — DN numbering format
- [ ] [TO FILL] — Column filters and sort on DN list view
- [ ] [TO FILL] — What SO data carries to each DN

---

## 3. Feature Specs

---

### F-01: Blanket Order — Multiple DNs from One SO

| Attribute | Detail |
|---|---|
| Description | One Sales Order can be fulfilled across multiple Delivery Notes — each with its own qty split, delivery date, and delivery address. This is the "Blanket Order" pattern |
| Business Rule | Total DN quantities across all DNs cannot exceed SO total quantity; each DN is independent once created |
| Field Behaviour | When creating a DN from SO, agent specifies the qty to assign to this DN (not required to take full SO qty) |
| Edge Cases | If SO has 100 units and 3 DNs created for 25/25/25, remaining 25 units stay unfulfilled until another DN is created |
| Client Examples | [TO FILL] |

**Subfeatures:**
- One SO → multiple DNs supported (no stated upper limit on number of DNs)
- Each DN carries: specific qty allocation, specific delivery date, specific delivery address
- Remaining undelivered qty stays on SO — future DNs can be created until fully fulfilled
- Example: SO with 100 units → DN1 (25 units, 2026-05-01, Address A) + DN2 (25 units, 2026-05-08, Address B) + DN3 (25 units, 2026-05-15, Address A) + DN4 (25 units, 2026-05-22, Address C)
- Each DN is independently tracked (own status, own delivery date, own address)
- SO remains in TO BILL throughout — does not auto-close when all qty is assigned to DNs
- `[TO FILL]` — Does SO status change when all qty is fully delivered?
- `[TO FILL]` — Can a DN be created for 0 qty?
- `[TO FILL]` — Can qty be edited on a DN after creation (before dispatch)?

---

### F-02: Flexible Qty Splitting

| Attribute | Detail |
|---|---|
| Description | When creating a DN from SO, the qty per line item is configurable — not required to match SO qty |
| Business Rule | DN qty per item ≤ remaining unfulfilled qty on SO for that item |
| Field Behaviour | Qty field editable per line item in DN; defaults to `[TO FILL]` (full remaining? or 0?) |
| Edge Cases | Uneven splits supported — e.g., 50/20/20/10 across 4 DNs from a 100-unit SO |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Flexible split: 100 units can be split as 50/20/20/10 (not just equal splits)
- Equal split: 100 units → 4 × 25 also supported
- Per-item splitting: if SO has multiple items, each item can have different split ratios across DNs
- `[TO FILL]` — UI for qty entry when creating DN from SO (inline edit? modal?)
- `[TO FILL]` — Validation: does system block if DN qty > remaining unfulfilled qty?

---

### F-03: Different Delivery Date per DN

| Attribute | Detail |
|---|---|
| Description | Each Delivery Note can have its own delivery date — enabling staged delivery scheduling from a single SO |
| Business Rule | Delivery date is set per DN at creation time |
| Field Behaviour | Date picker on DN creation form |
| Edge Cases | [TO FILL] — Can delivery date be edited after DN creation? |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Each DN independently scheduled (not tied to SO date)
- Use case: weekly delivery runs from one bulk order — DN1 (Week 1), DN2 (Week 2), etc.
- `[TO FILL]` — Default delivery date (today? SO date? blank?)
- `[TO FILL]` — Delivery time slot (not just date)?

---

### F-04: Different Delivery Address per DN

| Attribute | Detail |
|---|---|
| Description | Each Delivery Note can have its own delivery address — enabling split delivery to different locations from a single SO |
| Business Rule | Delivery address is set per DN; defaults from SO shipping address but overridable |
| Field Behaviour | Address field on DN creation form; selectable from customer's registered addresses |
| Edge Cases | [TO FILL] — Can a custom address be entered or only registered addresses? |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Use case: customer with multiple warehouses/outlets orders in bulk, each DN ships to different site
- Default: SO's shipping address (pre-filled, but editable)
- `[TO FILL]` — Address source: customer master addresses only, or free text also?
- `[TO FILL]` — Multiple addresses per customer — how many can be registered?

---

### F-05: Chatbot-Initiated DN Splitting

| Attribute | Detail |
|---|---|
| Description | Via MAIA's WhatsApp AI agent, users can instruct the chatbot to split an SO into multiple DNs using a natural language query |
| Business Rule | Chatbot interprets qty allocation and creates DNs accordingly; same rules as frontend splitting apply |
| Field Behaviour | User sends chat message; bot confirms split and creates DNs |
| Edge Cases | Ambiguous splits (e.g., "split equally" when qty not divisible) — `[TO FILL]` how bot handles |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Simple query examples:
  - "Split SO-0001 into 4 equal DNs"
  - "Split SO-0001 to 3 DNs: 50 for first, 20 for second, 30 for third"
  - "Split the SO to 4 DN: 50/20/20/10"
- Chatbot creates the DNs in system based on instruction
- `[TO FILL]` — Can delivery date and address be specified in the chatbot query?
- `[TO FILL]` — Does bot ask for confirmation before creating DNs?
- `[TO FILL]` — Error handling: what if split qty > SO remaining qty?

---

### F-06: Create DN from SO (Single)

| Attribute | Detail |
|---|---|
| Description | Standard single DN creation from a Sales Order — takes all or partial qty in one delivery |
| Business Rule | Available from SO in TO BILL or HOLD status |
| Field Behaviour | DN created in DRAFT with SO data pre-filled |
| Edge Cases | Can create DN from HOLD (unlike Invoice which requires Resume first) |
| Client Examples | All clients |

**Subfeatures:**
- Available from: SO in TO BILL or HOLD status
- Data carried from SO: Biller info, Customer info, Items & Quantities, Delivery Address, SO reference number
- DN created as DRAFT
- Creating DN does NOT change SO status
- `[TO FILL]` — Items section on DN: same SKU/qty fields as SO? Can items be removed?

---

### F-07: Create DN from Invoice

| Attribute | Detail |
|---|---|
| Description | Create a Delivery Note from an UNPAID Invoice — for cases where goods are dispatched after invoice is raised |
| Business Rule | Invoice must be in UNPAID status |
| Field Behaviour | `[TO FILL]` — which fields carry from Invoice to DN |
| Edge Cases | `[TO FILL]` |
| Client Examples | `[TO FILL]` |

**Subfeatures:**
- `[TO FILL]` — Data carried from Invoice to DN
- `[TO FILL]` — Multiple DNs from one Invoice?

---

### F-08: Status Management

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
- `[TO FILL]` — PDF / delivery receipt generation per status
- `[TO FILL]` — Proof of delivery capture

---

## 4. User Stories

### US-01: Blanket Order — Split SO into Multiple DNs
**As a** logistics agent, **I can** create multiple Delivery Notes from a single Sales Order with different quantities, dates, and addresses per DN **so that** I can fulfill a bulk order in stages across different locations and schedules.
**Priority:** High
**Dependencies:** SO in TO BILL status; Blanket Order feature enabled

### US-02: Flexible Qty Split
**As a** logistics agent, **I can** specify a custom quantity per DN (e.g., 50/20/20/10) when splitting an SO **so that** delivery runs are optimised to vehicle capacity or customer site needs.
**Priority:** High
**Dependencies:** SO with partial fulfillment support

### US-03: Chatbot DN Splitting
**As a** sales agent, **I can** instruct MAIA's WhatsApp chatbot to split an SO into multiple DNs with specified quantities **so that** I can schedule deliveries without logging into the frontend.
**Priority:** High
**Dependencies:** Chatbot connected to SO; DN creation API

### US-04: Different Address per DN
**As a** logistics agent, **I can** assign a different delivery address to each DN from the same SO **so that** a customer with multiple sites can receive their order in separate deliveries to the correct location.
**Priority:** High
**Dependencies:** Customer with multiple registered addresses

### US-05: Create DN from HOLD SO
**As a** logistics agent, **I can** create a Delivery Note from an SO in HOLD status **so that** I can begin preparing the delivery even when billing is paused.
**Priority:** Medium
**Dependencies:** SO in HOLD status

---

## 5. Acceptance Criteria

### AC-01 (US-01: Blanket Order — 4 DNs from 1 SO)
- **Given** an SO in TO BILL with 100 units of Item A
- **When** I create 4 DNs with 25 units each
- **Then** each DN is created independently with its own delivery date, address, and 25-unit qty; SO remains in TO BILL; total allocated qty = 100

### AC-02 (US-02: Uneven split)
- **Given** an SO in TO BILL with 100 units
- **When** I create DN1 for 50 units, DN2 for 20 units, DN3 for 20 units, DN4 for 10 units
- **Then** all 4 DNs are created with the specified quantities and total = 100 units

### AC-03 (US-03: Chatbot split)
- **Given** an SO SO-0001 with 100 units
- **When** I send "Split SO-0001 to 4 DN: 50/20/20/10" to the MAIA chatbot
- **Then** the bot creates 4 DNs with the specified quantities and confirms creation in chat

### AC-04 (US-04: Different address)
- **Given** an SO with shipping address = "Warehouse A"
- **When** I create DN1 with address "Warehouse A" and DN2 with address "Outlet B"
- **Then** each DN has its own delivery address independent of the other

### AC-05 (US-05: DN from HOLD)
- **Given** an SO in HOLD status
- **When** I click "Create Delivery Note"
- **Then** a DN in DRAFT is created with SO data pre-filled; SO remains in HOLD

---

## 6. Known Limitations

- [ ] Delivery Note workflow testing incomplete — integration with SO and Invoice not fully validated — Status: 🟡 Medium
- [ ] `[TO FILL]` — Maximum number of DNs per SO
- [ ] `[TO FILL]` — Whether system validates total DN qty against SO qty
- [ ] `[TO FILL]` — What happens when total DN qty exceeds SO qty
- [ ] `[TO FILL]` — Multiple DNs per Invoice (partial shipments from invoice)

---

## 7. See Also

- [[Sales Order Spec]] (F-08: Create Delivery Note)
- [[Sales Order Workflow Guide]]
- [[Return Note Spec]]
- [[Quote-to-Cash Flow]]
- [[Known Limitations]]

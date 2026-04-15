---
owner: Gareth
status: draft
doctype: Blanket Order
last_reviewed: 2026-04-15
---

# Blanket Order — Product Spec

---

## 1. Overview

| Attribute | Detail |
|---|---|
| What it is | A fulfillment pattern where one Sales Order is staged across multiple Delivery Notes — each with its own quantity split, delivery date, and delivery address |
| Primary user | Sales Agent (SO creation), Logistics Team (DN management) |
| Workspaces involved | Sales (`/sales/orders`, `/sales/delivery-notes`), Logistics (`/logistics/orders`, `/logistics/delivery-notes`) |
| Entry point | Sales Order in TO BILL or HOLD status → Create Delivery Note |
| Chatbot support | Yes — agent can split SO into DNs via WhatsApp natural language query |
| Spans doctypes | Sales Order + Delivery Note |

**When to use:** Customer places one bulk order (SO) but requires goods delivered in batches — different quantities, on different dates, to different locations.

---

## 2. Capability List

- [x] 1 SO → multiple Delivery Notes (no stated upper limit)
- [x] Custom qty per DN (partial fulfillment — DN qty < SO total qty)
- [x] Flexible uneven splits (e.g., 50/20/20/10 across 4 DNs)
- [x] Equal splits (e.g., 4 × 25 from 100-unit SO)
- [x] Different delivery date per DN
- [x] Different delivery address per DN
- [x] Create DN from SO in TO BILL status
- [x] Create DN from SO in HOLD status
- [x] Chatbot-initiated splitting via WhatsApp natural language
- [x] Remaining unfulfilled qty stays on SO for future DNs
- [x] SO stays in TO BILL throughout all DN creations
- [ ] [TO FILL] — SO auto-close when all qty fully delivered across all DNs
- [ ] [TO FILL] — System validation: block DN creation if total allocated qty > SO qty
- [ ] [TO FILL] — Per-item split tracking (multi-item SOs with different split ratios per item)
- [ ] [TO FILL] — Delivery date/address specifiable via chatbot query
- [ ] [TO FILL] — Maximum number of DNs per SO
- [ ] [TO FILL] — Can DN qty be edited after creation (before dispatch)?

---

## 3. Feature Specs

---

### F-01: Blanket Order — Core Split Mechanism

| Attribute | Detail |
|---|---|
| Description | From one SO, agent creates multiple DNs — each taking a portion of the SO qty; unfulfilled qty remains on SO for subsequent DNs |
| Business Rule | DN qty per item ≤ remaining unfulfilled qty on SO; SO status does not change when DNs are created |
| Field Behaviour | When creating a DN from SO, qty field per line item is editable — agent sets the qty for this DN only |
| Edge Cases | If SO has 100 units and DN1 takes 50, the next DN can take at most 50 (remaining); `[TO FILL]` — does system enforce this or trust the agent? |
| Client Examples | [TO FILL] |

**Subfeatures:**
- SO created normally (via UI or converted from Quotation)
- From SO (TO BILL): click "Create Delivery Note" → DN form opens with SO items pre-filled
- Agent edits qty per item to the amount for this DN
- DN created in DRAFT with SO reference
- Remaining qty on SO = SO qty − all allocated DN qtys
- Repeat to create next DN with remaining qty
- Example:
  - SO: 100 units Item A
  - DN1: 25 units → remaining 75
  - DN2: 25 units → remaining 50
  - DN3: 25 units → remaining 25
  - DN4: 25 units → remaining 0

---

### F-02: Flexible Quantity Splits

| Attribute | Detail |
|---|---|
| Description | Qty allocation per DN is fully flexible — not required to be equal; agent specifies exact qty for each DN |
| Business Rule | Each DN qty must be > 0 and ≤ remaining unfulfilled qty on SO |
| Field Behaviour | Qty field editable per line item on DN creation form |
| Edge Cases | Unequal splits fully supported; rounding for odd totals `[TO FILL]` |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Equal split: SO 100 units → DN1 (25) + DN2 (25) + DN3 (25) + DN4 (25)
- Uneven split: SO 100 units → DN1 (50) + DN2 (20) + DN3 (20) + DN4 (10)
- Any valid combination summing ≤ SO total
- `[TO FILL]` — Can remaining qty on SO be viewed on the SO detail page?
- `[TO FILL]` — Multi-item SOs: can each item have a different split ratio per DN?

---

### F-03: Different Delivery Date per DN

| Attribute | Detail |
|---|---|
| Description | Each Delivery Note can be scheduled for a different delivery date, enabling staged delivery over time from a single bulk order |
| Business Rule | Delivery date set independently per DN |
| Field Behaviour | Date picker on DN creation; no dependency on SO date |
| Edge Cases | `[TO FILL]` — Can delivery date be edited after DN creation? |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Each DN has its own delivery date (date picker on DN form)
- Not tied to SO date
- Use case: weekly delivery runs — DN1 (Week 1), DN2 (Week 2), DN3 (Week 3), DN4 (Week 4)
- `[TO FILL]` — Delivery time slot (not just date)?
- `[TO FILL]` — Default delivery date when creating DN (today? SO date? blank?)

---

### F-04: Different Delivery Address per DN

| Attribute | Detail |
|---|---|
| Description | Each Delivery Note can have a different delivery address — enabling split delivery to multiple customer sites from one SO |
| Business Rule | Address defaults from SO shipping address but is overridable per DN |
| Field Behaviour | Address field on DN creation form; selectable from customer's registered addresses |
| Edge Cases | `[TO FILL]` — Custom address (free text) or registered addresses only? |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Default: SO's shipping address (pre-filled, editable)
- Override to any registered customer address per DN
- Use case: customer with multiple warehouses/outlets — each site gets its own DN
- `[TO FILL]` — Source: customer master addresses only, or free text entry?
- `[TO FILL]` — How many delivery addresses can be registered per customer?

---

### F-05: Create DN from SO in HOLD

| Attribute | Detail |
|---|---|
| Description | Delivery Notes can be created from an SO in HOLD status — fulfillment can proceed even when billing is paused |
| Business Rule | Same split rules apply as from TO BILL; SO stays in HOLD |
| Field Behaviour | "Create Delivery Note" action available in HOLD status |
| Edge Cases | Unlike Invoice (requires Resume first), DN can be created directly from HOLD |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Available actions from HOLD: Resume, Create Delivery Note
- "Convert to Invoice" NOT available from HOLD (must Resume first)
- Creating DN from HOLD does not change SO status

---

### F-06: Chatbot-Initiated DN Splitting

| Attribute | Detail |
|---|---|
| Description | Sales agent instructs MAIA's WhatsApp AI agent to split an SO into multiple DNs using a natural language query — without logging into the frontend |
| Business Rule | Same qty rules apply; chatbot interprets the split instruction and creates DNs in the system |
| Field Behaviour | User sends message; bot processes and creates DNs; bot confirms in chat |
| Edge Cases | Ambiguous split (e.g., "split equally" when qty not evenly divisible) — `[TO FILL]` how bot handles |
| Client Examples | [TO FILL] |

**Subfeatures:**
- Query examples:
  - "Split SO-0001 into 4 equal DNs"
  - "Split SO-0001 to 3 DNs: 50 for first, 20 for second and third, 10 for fourth"
  - "Split SO-0001 to 4 DN: 50/20/20/10"
- Chatbot creates DNs in system based on instruction
- `[TO FILL]` — Can delivery date be specified in chatbot query (e.g., "DN1 on May 1, DN2 on May 8")?
- `[TO FILL]` — Can delivery address be specified in chatbot query?
- `[TO FILL]` — Does bot ask for confirmation before creating DNs?
- `[TO FILL]` — Error handling: bot response if split qty > SO remaining qty?
- `[TO FILL]` — What chatbot message format is expected / understood?

---

## 4. User Stories

### US-01: Stage Bulk Order into Multiple Deliveries
**As a** logistics agent, **I can** create multiple Delivery Notes from a single Sales Order with different quantities, dates, and addresses **so that** a bulk order can be fulfilled in stages aligned to customer delivery schedules and site locations.
**Priority:** High
**Dependencies:** SO in TO BILL status; DN creation enabled

### US-02: Flexible Uneven Split
**As a** logistics agent, **I can** specify a custom qty per DN (e.g., 50/20/20/10) when splitting an SO **so that** delivery runs are optimised to vehicle capacity, customer receiving schedules, or batch sizes.
**Priority:** High
**Dependencies:** SO with qty > 1; partial fulfillment support

### US-03: Chatbot Split
**As a** sales agent, **I can** instruct the MAIA WhatsApp chatbot to split an SO into multiple DNs with specified quantities **so that** I can schedule deliveries without logging into the frontend.
**Priority:** High
**Dependencies:** Chatbot connected to SO; DN creation API

### US-04: Multi-Site Delivery
**As a** sales agent, **I can** assign a different delivery address to each DN from the same SO **so that** a customer with multiple sites receives their order at the correct location.
**Priority:** High
**Dependencies:** Customer with multiple registered addresses

### US-05: Staged Delivery Scheduling
**As a** logistics agent, **I can** assign a different delivery date to each DN from the same SO **so that** goods are delivered across multiple scheduled runs (weekly, bi-weekly, etc.).
**Priority:** High
**Dependencies:** DN creation form with date picker

### US-06: Fulfillment During Hold
**As a** logistics agent, **I can** create a Delivery Note from an SO in HOLD status **so that** I can begin fulfillment preparation even when billing is paused.
**Priority:** Medium
**Dependencies:** SO in HOLD status

---

## 5. Acceptance Criteria

### AC-01 (US-01: 4 DNs from 1 SO)
- **Given** an SO in TO BILL with 100 units of Item A
- **When** I create 4 DNs with 25 units each (on different dates)
- **Then** all 4 DNs are created independently with their own delivery dates; SO remains TO BILL; total allocated = 100 units

### AC-02 (US-02: Uneven split)
- **Given** an SO in TO BILL with 100 units
- **When** I create DN1 (50 units), DN2 (20 units), DN3 (20 units), DN4 (10 units)
- **Then** all 4 DNs are created with the specified quantities; total = 100 units

### AC-03 (US-03: Chatbot split)
- **Given** SO SO-0001 with 100 units
- **When** I send "Split SO-0001 to 4 DN: 50/20/20/10" to the MAIA chatbot
- **Then** chatbot creates 4 DNs with the specified quantities and confirms creation in the WhatsApp chat

### AC-04 (US-04: Multi-site)
- **Given** an SO with default shipping address "Warehouse A"
- **When** I create DN1 with "Warehouse A" and DN2 with "Outlet B"
- **Then** each DN has its own delivery address; DN2 address is "Outlet B", not "Warehouse A"

### AC-05 (US-05: Different dates)
- **Given** an SO with 100 units
- **When** I create DN1 (delivery date: 2026-05-01) and DN2 (delivery date: 2026-05-08)
- **Then** each DN has its own delivery date independent of the other and of the SO date

### AC-06 (US-06: HOLD → DN)
- **Given** an SO in HOLD status
- **When** I click "Create Delivery Note"
- **Then** a DN in DRAFT is created with SO data pre-filled; SO remains in HOLD; "Convert to Invoice" is NOT available

---

## 6. Known Limitations

- [ ] `[TO FILL]` — System validation: does MAIA block if total DN qty > SO qty?
- [ ] `[TO FILL]` — SO auto-close behaviour when all qty fully delivered
- [ ] `[TO FILL]` — Maximum DNs per SO
- [ ] `[TO FILL]` — Per-item split tracking for multi-item SOs
- [ ] `[TO FILL]` — Chatbot error handling for ambiguous or over-qty splits

---

## 7. See Also

- [[Sales Order Spec]]
- [[Delivery Note Spec]]
- [[Sales Order Workflow Guide]]
- [[Quote-to-Cash Flow]]

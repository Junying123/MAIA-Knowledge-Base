---
owner: Gareth
status: draft
last_reviewed: 2026-07-27
lark_url: https://eg69120xnei.sg.larksuite.com/docx/TlqRdfxCPou1nJxaiG4lKgyTgkf
---

# E2E Flow - Macrofrozen

## Before MAIA — Current (As-Is) Flow

- Customer sends an order to the salesperson.
- Salesperson forwards the order into the **company WhatsApp group** — orders from different salespeople/customers mix together in one thread.
- **David** reads the group, manually consolidates all the orders himself.
- David prepares and prints one or more **Picking Lists** — grouped by delivery route, driver, area, schedule, or warehouse efficiency; one Picking List can span multiple customers, and one customer can span multiple orders.
- Warehouse picks the physical stock; actual picked quantity may differ from ordered quantity; workers write the actual picked qty **by hand on the paper** Picking List.
- The Warehouse Manager checks the completed picking work — the annotated paper list becomes the operational source of truth.
- **Grace** manually transfers the handwritten final quantities into the accounting system: reviews the paper list against the original order, identifies quantity/SKU differences, keys the final quantity in by hand, creates the **Delivery Note**, then creates the **Invoice** — checking both match what the warehouse actually picked.
- Driver delivers the goods; customer signs the Delivery Order/Note; driver returns or sends back the signed document as **Proof of Delivery**; Accounts files it as evidence delivery happened.
- **Credit control today:** a customer's previous invoice must be cleared before they can place a new order; Grace/Finance checks manually whether payment has cleared; credit limit is generally set off the customer's average order value (e.g. average order RM5,000 → indicative limit RM5,000).

##### Problems this creates
- **Heavy dependence on David** — reads every order, interprets messages, consolidates, groups by route, prepares every Picking List, handles all exceptions. If he's unavailable, the whole order flow slows or stops.
- **Heavy dependence on Grace** — the sole person reconciling handwritten warehouse changes into the accounting system and generating documents. If she's busy/unavailable, documents and delivery stall.
- **Orders are unstructured** — informal WhatsApp language risks wrong product, wrong quantity, wrong unit, missed special instructions, duplicate orders, orders overlooked in the group.
- **Limited traceability** — hard to tell who submitted the order, who changed the quantity and why, who approved a price, who picked a replacement SKU, or whether payment was actually verified; the trail is scattered across WhatsApp, paper, handwriting, the accounting system, and physical signed documents.
- **Manual quantity amendments** — every handwritten pick-list change has to be manually re-typed by Grace, risking wrong Delivery Note/Invoice quantities or billing the ordered amount instead of what was actually delivered.
- **Duplicate data entry** — the same order information gets handled four times (salesperson → David consolidates → warehouse writes actual qty → Grace re-types it), each pass adding time and error risk.
- **Limited role separation** — day-to-day coordination relies on personal trust, not system permissions; no clear system control over who can see customer records, approve price changes, edit credit terms/limits, see product cost, amend Sales Orders, or submit financial documents.
- **Credit control is strict but manual** — sales may not know a customer is blocked until they ask; a customer may have already paid but the payment isn't verified yet; new orders can be delayed waiting on Grace/Finance; exceptions get handled inconsistently.

---

## After MAIA — E2E Flow: Order Intake → Invoice

### 1. Order Intake & Sales Order

Customer sends order to Salesperson (Queenie / Ben / CJ).

**Salesperson:** forwards the order to the MAIA WhatsApp chat.

**MAIA:** interprets the message, prepares a draft Sales Order (customer, product, SKU, qty, unit, price, notes).

**Salesperson:** reviews, corrects, and submits the SO themselves — no admin relay.

##### Two order-unit cases (2026-07-27)

**Case 1 — ordered in kg**
- Customer orders a weight, e.g. **20kg**.
- Some variance against actual picked weight is expected and normal, e.g. picked **19.71kg**.
- SO qty = the ordered figure (20kg).
- Final billed qty = whatever the pick list confirms (19.71kg).

**Case 2 — ordered in cartons**
- Customer orders by carton, not by weight, e.g. **2 cartons**.
- No meaningful kg figure exists yet at this stage.
- Real total weight only appears once the pick list confirms each carton's actual weight, e.g. **10.44kg + 11.82kg = 22.26kg total**.
- At order intake, the salesperson:
  - Records the carton count in the SO's **Additional Notes** (e.g. "2 cartons").
  - Sets the SO **qty field to a placeholder of 1kg**.
- The real qty gets confirmed later from the pick list — not guessed at intake.

##### Check — Price (3-tier)
- At/above approved price → auto-proceed.
- Below customer/default, above minimum → approve: **CJ** (Sales Manager).
- Below minimum → approve: **David** (Owner).

##### Check — Credit
- Outstanding balance / credit limit / overdue / "previous invoice cleared."
- Order blocked if any check fails → approve: **David** (override).

### 2. Warehouse — Pick List & Picking

**Lai (Warehouse Manager):** every morning, reviews available Sales Orders; groups SOs into a Pick List (by route / driver / area / delivery date); prints the Pick List — includes customer name, SO number, SKU, product notes, ordered qty/unit, box count, kg-per-box field, replacement-SKU field, route, driver. No separate "Packing List" doc — pack detail lives on the Pick List itself.

**Warehouse Workers:** pick and pack the physical goods; record actual kg, number of boxes, kg per box; record a replacement SKU if the original is unavailable and flag it to Lai.

**Lai (Warehouse Manager):** checks completed picking matches the Pick List; photographs the completed Pick List; uploads the confirmed Pick List to MAIA.

### 3. Pick List → Amended SO → Invoice

**MAIA:** auto-prepares an amended Sales Order from Lai's confirmed Pick List (final qty, boxes, kg-per-box, replacement SKU — no manual retype).

**Grace (Accounts / Finance Manager):** checks original vs final SKU/qty/boxes/kg-per-box/price/credit status; reviews and submits the amended SO.

**Grace:** explicitly asks MAIA to generate the Invoice and Delivery Note — this is not automatic on SO-amendment submission.

**MAIA:** generates the requested Invoice and Delivery Note.

**Grace:** reviews the generated Invoice and DN, submits/confirms them.

---

## Per-Role: What Each User Does

### David — Owner (Boss)

##### Does
- Approves prices below the minimum price (top tier).
- Approves credit-limit overrides / exceptional commercial decisions.
- Monitors sales, warehouse, delivery, financial activity (dashboard, all data).
- Handles major exceptions, high-risk overrides.
- Makes the product catalogue himself (ChatGPT-based, outside MAIA).

##### Can view
All leads, prospects, customers, Sales Orders, approvals, warehouse progress, delivery status, financial status.

##### No longer does (moved off him by MAIA)
- Manually consolidating every order.
- Preparing every Pick List.

##### Risk
Remains a bottleneck if too many transactions need his approval; must stay reachable for below-minimum-price and credit-override requests.

---

### CJ — Sales Manager

##### Does
- Approves prices below customer/default price, above minimum price (submits the SO to approve, or rejects it).
- Oversees the sales team, reviews pricing exceptions.
- Monitors customer and Sales Order activity across all reps.
- Supports salespeople when they need approval.

##### Can view
All salespeople's leads, prospects, customers, Sales Orders, pending sales approvals — not just his own.

##### Cannot
Approve a price below the minimum — that's David's tier only.

##### Risk
Can get flooded with approval requests if pricing data isn't maintained.

---

### Queenie / Ben — Sales Reps

##### Does
- Receives customer order (call/WhatsApp from customer).
- Forwards the order to the MAIA WhatsApp chat.
- Reviews MAIA's draft SO interpretation (customer/product/SKU/qty/unit/price/notes).
- Corrects anything MAIA misread.
- Submits the Sales Order themselves — no admin does it for them.
- Creates/maintains own leads and prospects.
- Converts own leads/prospects into customers.
- Uploads customer payment proof where applicable.
- Follows up on inactive/recurring customers.

##### Can view / do
Only their own leads, prospects, customers, Sales Orders; can view own customers' credit status.

##### Cannot
- Create a customer directly from a raw record.
- View another rep's customers.
- Edit credit terms or credit limits.
- Bypass a pricing approval or approve their own exception.

##### Risk
Must review MAIA's draft carefully — a wrong forward means a wrong SO.

---

### Grace — Accounts / Finance Manager

##### Does
- Receives notification when Lai's Pick List → amended SO is ready.
- Reviews the amended SO (original vs final SKU/qty/boxes/kg-per-box/price/credit).
- Submits the amended SO.
- Explicitly asks MAIA to generate the Invoice and Delivery Note — this step does not happen automatically, it's her call.
- Reviews the generated Invoice and DN, submits/confirms them.
- Uploads Proof of Delivery (POD) — not the driver, Grace does this.
- Reviews payment proof, checks the company bank account.
- Confirms money received, submits the payment receipt.
- Knocks off the Invoice.

##### Can
Review warehouse-confirmed quantities, review/submit SO amendments, request Invoice/DN generation, confirm payment receipts, knock off invoices.

##### Cannot
MAIA must not generate Invoice/DN before she asks; must not auto-submit financial docs without her confirming.

##### Risk
Final control point everywhere — can become the bottleneck if she's slow, unavailable, or misses a notification; bank verification stays a manual step for her regardless.

---

## See Also

- Source: `20Jul26 - Macrofrozen Before vs After MAIA` §4.1–4.11, §6.1–6.5 (Lark, re-verified rev 129)
- `[[Macrofood — Scope Lock v2]]`
- Macro Frozen — End-user & Process Map

> **Note (Gareth, 2026-07-27):** this doc lists Grace uploading POD as a normal DOES item. Scope Lock v2 / NS-07 still marks POD as **BLOCKED — client conflict** (Grace has directly rejected any photo-upload-to-Maya design). Treat this doc's POD line as aspirational/pre-conflict, not current locked scope, until David makes a decision.

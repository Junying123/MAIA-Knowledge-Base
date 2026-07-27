---
owner: Gareth
status: draft
last_reviewed: 2026-07-27
lark_url: https://eg69120xnei.sg.larksuite.com/docx/TlqRdfxCPou1nJxaiG4lKgyTgkf
---

# E2E Flow - Macrofrozen

## Before MAIA — Current (As-Is) Flow

- **Customer sends an order to the salesperson.**
- **Salesperson forwards the order into the company WhatsApp group.**
  - Orders from different salespeople and customers mix together in one thread.
- **David manually consolidates all the orders himself.**
  - Reads every message in the group.
  - Interprets what's actually being ordered.
- **David prepares the Pick List.**
  - Grouped by delivery route, driver, area, schedule, or warehouse efficiency.
  - Based on customer, order, item, and item qty.
  - One Pick List can span multiple customers.
  - One customer can span multiple orders on the same list.
- **Lai follows David's Pick List to pick the item qty.**
  - Actual picked quantity may differ from ordered quantity.
- **Lai breaks down the picked qty** (2026-07-27 detail).
  - E.g. Item A ordered as 200kg comes back picked as 4 separate lots: 50kg, 50kg, 50kg, 50kg.
  - This breakdown gets entered into a separate **Packing List**, organised by customer/product.
- **Lai maintains the Packing List in Excel — double entry, no SQL.**
  - Updates the Packing List with the picked breakdown.
  - Once done, has to copy a fresh template and **manually re-enter the same data again** into that new Packing List — a second manual pass on top of the first.
  - Lai does not touch SQL at all in this process.
- **Lai sends the completed Packing List to Grace.**
- **Grace manually enters the Packing List into SQL, line by line.**
  - Each broken-down quantity becomes its own line item on the customer's Delivery Note and Invoice.
  - E.g. a 200kg Sales Order for Item A ends up as multiple separate invoice lines — 50kg, 50kg, 50kg, 50kg — not one combined 200kg line.
  - Creates the **Delivery Note**.
  - Creates the **Invoice**.
  - Checks both match what the warehouse actually picked.
- **Driver delivers the goods.**
  - Customer signs the Delivery Order/Note.
  - Driver returns or sends back the signed document as **Proof of Delivery**.
  - Accounts files it as evidence delivery happened.
- **Credit control today.**
  - A customer's previous invoice must be cleared before they can place a new order.
  - Grace/Finance checks manually whether payment has cleared.
  - Credit limit is generally set off the customer's average order value (e.g. average order RM5,000 → indicative limit RM5,000).

##### Problems this creates

- **Heavy dependence on David.**
  - Reads every order, interprets messages, consolidates, groups by route, prepares every Picking List, handles all exceptions.
  - If he's unavailable, the whole order flow slows or stops.
- **Heavy dependence on Grace.**
  - Sole person reconciling handwritten warehouse changes into the accounting system and generating documents.
  - If she's busy or unavailable, documents and delivery stall.
- **Orders are unstructured.**
  - Informal WhatsApp language risks wrong product, wrong quantity, wrong unit.
  - Missed special instructions, duplicate orders, orders overlooked in the group.
- **Limited traceability.**
  - Hard to tell who submitted the order, who changed the quantity and why.
  - Hard to tell who approved a price or picked a replacement SKU.
  - Hard to confirm whether payment was actually verified.
  - Trail is scattered across WhatsApp, paper, handwriting, the accounting system, and physical signed documents.
- **Manual quantity amendments.**
  - Every handwritten pick-list change has to be manually re-typed by Grace.
  - Risks wrong Delivery Note/Invoice quantities.
  - Risks billing the ordered amount instead of what was actually delivered.
- **Duplicate data entry.**
  - Same order information handled four times: salesperson → David consolidates → warehouse writes actual qty → Grace re-types it.
  - Each pass adds time and error risk.
- **Limited role separation.**
  - Day-to-day coordination relies on personal trust, not system permissions.
  - No clear system control over who can see customer records, approve price changes, edit credit terms/limits, see product cost, amend Sales Orders, or submit financial documents.
- **Credit control is strict but manual.**
  - Sales may not know a customer is blocked until they ask.
  - A customer may have already paid but the payment isn't verified yet.
  - New orders can be delayed waiting on Grace/Finance.
  - Exceptions get handled inconsistently.

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
- **Gate points (2026-07-27):** the credit check runs at **SO** and again at **DN** — not at Invoice.
  - At SO, it's the earliest point to catch an over-limit order, before any picking effort is spent.
  - At DN, it's re-checked because the picked/amended qty can change the actual billed exposure from what the SO originally showed.
  - Not Invoice-only — by Invoice time the DN already exists and goods have already physically left (DN issues alongside dispatch); blocking at Invoice only stops the paperwork, not the goods already with the customer. Checking only at Invoice would also leave the whole SO→DN window unchecked, since Grace only generates the Invoice on her own explicit request and that can happen well after the DN. SO and DN are the two points where a block still actually stops something — picking effort and dispatch — which is why the check lives there.

> **Decision (2026-07-27):** two approaches were put to the client for replacing the current Excel Packing List double-entry (see Before-MAIA flow above). **Approach 1 is adopted now** — Pick List → DN line-item breakdown, described below. **Approach 2 is deferred to a future session** (not yet defined/scheduled).

### 2. Warehouse — Pick List & Picking

**Lai (Warehouse Manager):** checks what needs picking today across different Sales Orders.

- **Pick List can have orders/items added to it.** Macrofrozen currently picks based on order (not consolidated by item across orders).
- **Lai / Grace / David consolidate customer SOs into one Pick List** together.
- The Pick List shows the **total qty from each SO** as a reference.
- Lai checks that total and updates the **Picked Qty column** against it.
- Lai uploads/updates the Pick List (PDF or in-app UI) back into MAIA.

**Warehouse Workers:** pick and pack the physical goods; record actual kg, number of boxes, kg per box; flag a replacement SKU to Lai if the original is unavailable.

**Lai (Warehouse Manager):** once all Picked Qty values are updated and the Pick List is complete, marks the Pick List as **Completed**.

### 3. Pick List → Draft DN → Invoice (Approach 1 — adopted 2026-07-27)

**Lai:** converts the completed Pick List into a **draft Delivery Note (DN)**.

- The total picked qty **propagates from the Pick List into the DN as one line** (e.g. 100kg for Item A).
- Instead of Lai manually re-keying a breakdown into a separate Excel Packing List, **the breakdown now happens directly inside the DN** — the same breakdown work the old Packing List did, done once, in MAIA.
- Example: 100kg propagated from the Pick List can be broken into DN line items — 20kg, 20kg, 20kg, 20kg, 20kg — instead of one combined 100kg line.
- This removes the double-entry step entirely: no separate Excel file, no re-typing the same breakdown twice.

**Grace (Accounts / Finance Manager):** gets a reminder/notification to review the picked qty for every DN line item.

- Reviews each broken-down line for accuracy.
- Submits the DN.
- Issues the Invoice **from the DN**.

### 3b. Pick List → DN (Approach 2 — documented, deferred to a future session)

Same start as Approach 1: Lai checks the Pick List across SOs, consolidates customer SOs into one Pick List (with Grace/David), checks the total qty from each SO, updates the Picked Qty column, and uploads the Pick List back into MAIA.

**Where it diverges from Approach 1:**

- **Lai keeps updating the Packing List in their current Excel** — this approach does **not** remove that step.
- Lai **uploads the Packing List as a CSV attachment**; the Pick List links to this uploaded file.
- Lai marks the Pick List as **Completed**.
- **Grace is notified** and converts the Pick List into a DN.
- The attached Packing List **propagates to the DN as well** (as a linked reference, not as broken-out line items automatically).
- **Grace exports the Packing List** and manually updates the DN line items **one by one**, based on what the Packing List shows.
- Grace **cross-checks the DN line items against the Packing List** before proceeding.
- Only then does she submit the DN and convert it into the Invoice.

##### Sub-workaround — screenshot per customer (2026-07-27)

The Packing List spans multiple customers, orders, and products on one sheet — it isn't naturally split per customer.

- Grace **breaks down the Packing List and takes a screenshot** of just the relevant rows for each customer/order/product.
- She **attaches that screenshot to each corresponding DN** — one screenshot per customer's DN, not the whole Packing List dumped on every DN.
- This gives each DN its own visual proof of the picked breakdown that produced it, without needing the DN line-item entry itself to reference the full multi-customer sheet.

**Why this is deferred, not adopted:** the Excel Packing List and its double-entry are still in the loop — Lai still maintains it, and Grace still manually keys DN line items off an exported file rather than the breakdown happening natively inside MAIA (as Approach 1 does). This is a smaller change from the current as-is process, kept as a fallback/next-session option if Approach 1 turns out too disruptive to adopt in one go.

### 3c. Pick List → SO amendment → Invoice, then Pick List → DN (Approach 3 — documented, deferred, most tedious)

Same start as Approach 1/2: Pick List completed, Grace is notified.

- **Grace checks the variance** between ordered qty and picked qty on the Pick List.
- She goes **back to the Sales Order(s) linked to that Pick List** and **amends the SO qty** to match the picked qty.
- After the amendment, she **creates the Invoice directly from the amended SO** — a separate path from the DN.
- She then goes **back to the Pick List** and **converts it to a DN** — from this point on, it's the **same as Approach 2**: Excel Packing List, CSV attachment, Grace exports and manually keys DN lines, cross-checks, screenshot-per-customer sub-workaround if used.

**Why this is deferred, not adopted:** this is the most tedious of the three — it duplicates work across two separate documents (Invoice built from the amended SO, DN built separately from the Pick List via Approach 2's process) instead of one document driving the other. Kept as a documented fallback only; not a candidate for adoption unless both Approach 1 and Approach 2 turn out unworkable.

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

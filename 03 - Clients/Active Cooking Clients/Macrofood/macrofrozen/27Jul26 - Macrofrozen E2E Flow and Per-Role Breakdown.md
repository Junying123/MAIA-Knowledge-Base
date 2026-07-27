---
owner: Gareth
status: draft
last_reviewed: 2026-07-27
lark_url: https://eg69120xnei.sg.larksuite.com/docx/TlqRdfxCPou1nJxaiG4lKgyTgkf
---

# E2E Flow - Macrofrozen

## E2E Flow: Order Intake → Invoice

### 1. Order Intake & Sales Order

Customer sends order to Salesperson (Queenie / Ben / CJ).

**Salesperson:** forwards the order to the MAIA WhatsApp chat.

**MAIA:** interprets the message, prepares a draft Sales Order (customer, product, SKU, qty, unit, price, notes).

**Salesperson:** reviews, corrects, and submits the SO themselves — no admin relay.

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

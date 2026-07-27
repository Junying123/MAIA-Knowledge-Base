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
- **Lai consolidates customer SOs into one Pick List** himself.
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

Same start as Approach 1: Lai checks the Pick List across SOs, consolidates customer SOs into one Pick List himself, checks the total qty from each SO, updates the Picked Qty column, and uploads the Pick List back into MAIA.

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

##### Sub-workaround — 1 Pick List per customer (Approach 2b, 2026-07-27)

An alternative to the screenshot workaround above: instead of one Pick List covering multiple customers and manually screenshotting per customer afterward, split the Pick List itself by customer from the start.

- **Lai converts each SO into its own single Pick List** — one Pick List per customer, not one consolidated multi-customer list.
- Lai **attaches the Packing List for that one customer** to that customer's Pick List.
- **Grace is notified.**
- When the DN is created from that Pick List, the **single-customer Packing List propagates to the DN automatically as an attachment** — no manual screenshot or export step needed, since the Pick List only ever held one customer's data to begin with.

**What this achieves:**
- Same per-customer separation as the screenshot sub-workaround.
- Done **structurally** (one Pick List = one customer = one Packing List = one DN) instead of manually (one big Pick List, cut up after the fact).
- Still deferred alongside the rest of Approach 2 — same double-entry caveat applies, since Lai still maintains the Packing List in Excel.

**Why this is deferred, not adopted:**
- The Excel Packing List and its double-entry are still in the loop.
- Lai still maintains it.
- Grace still manually keys DN line items off an exported file rather than the breakdown happening natively inside MAIA (as Approach 1 does).
- This is a smaller change from the current as-is process, kept as a fallback/next-session option if Approach 1 turns out too disruptive to adopt in one go.

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

##### Responsibilities
- Oversees the full operation.
- Reviews major exceptions.
- Approves prices below the minimum price — bottom tier of the 3-tier SO price-approval ladder (auto → CJ → David).
- Approves credit-limit overrides at **both gate points** — SO submission and DN stage — since picked/amended qty can shift real exposure by the time DN is reached.
- Monitors sales, warehouse, delivery, and financial activity.
- **Only David can access cost/buying price** (AS-09) — no other role, including CJ and Sales, has visibility into item cost/buying price.
- Views the sales dashboard with a **per-salesperson filter** (NS-14, resolved 2026-07-23) — same filter access as CJ.
- Receives the overdue-payment escalation alert (NS-06) alongside Finance, the responsible salesperson, and the Sales Manager.

##### Permissions — can view
- All leads, all prospects, all customers, all Sales Orders, all approvals.
- Warehouse progress, delivery status, financial status.
- Item cost/buying price — David only.
- Sales dashboard filtered by salesperson.

##### Approvals — David approves
- Selling prices below the minimum price (SO stage).
- Credit-limit/override requests blocked at SO or DN stage.
- Exceptional commercial decisions.
- High-risk overrides, where required.

##### Benefits
- No longer needs to consolidate every order manually.
- Does not need to prepare every Pick List.
- Can focus on exceptions and higher-risk decisions.
- Gains visibility without coordinating every routine activity.

##### Risks
- May remain a bottleneck if too many transactions require approval.
- Pricing rules must be configured correctly.
- Staff may keep using the company WhatsApp group instead of forwarding orders to the MAIA WhatsApp chat unless the workflow is enforced.

---

### CJ — Sales Manager

##### Responsibilities
- Oversees the sales team.
- Reviews pricing exceptions — middle tier of the 3-tier SO price-approval ladder (auto → **CJ** → David).
- Monitors customer and Sales Order activity.
- Supports salespeople where approval is needed — approves (submits) or rejects the SO at this tier.
- Views the sales dashboard with a **per-salesperson filter** (NS-14, resolved 2026-07-23) — same filter access as David.
- Receives the overdue-payment escalation alert (NS-06) for his own two reps' accounts, alongside Finance, the responsible salesperson, and David.
- **Also has the same access as a Sales Rep** (2026-07-27) — can run his own customer/order workflow on top of his manager-level duties, not manager-view only.

##### Permissions — can view
- All salespeople's leads, all prospects, all customers, all Sales Orders, pending sales approvals — not just his own.
- Sales dashboard filtered by salesperson.

##### Permissions — can do (same as a Sales Rep, 2026-07-27)
- Create leads, create prospects, convert leads/prospects into customers.
- Forward orders to the MAIA WhatsApp chat, review MAIA-generated Sales Order drafts, submit his own Sales Orders.
- View his own customers' credit status, upload payment proof.

##### Cannot
- View item cost/buying price — David-only.

##### Approvals — CJ approves
- Prices below the default selling price, above the minimum — at **SO submission**.
- Prices below the customer-specific price, above the minimum.
- Cannot approve below the minimum price — that tier is David's only.

##### Benefits
- Clear sales-team visibility.
- Formal approval queue.
- Better pricing discipline.
- Reduced need to search through WhatsApp group messages.

##### Risks
- May receive too many approval requests if pricing data is not maintained.
- The distinction between default, customer, and minimum prices must be clear.
- The system must prevent CJ from approving prices below the minimum.

---

### Queenie / Ben — Sales Reps

##### Responsibilities
- Receives customer orders.
- Forwards customer orders to the MAIA WhatsApp chat.
- Reviews MAIA's interpretation.
- Corrects any incorrectly interpreted information.
- Submits Sales Orders through MAIA themselves — no admin relay.
- **Sets the correct order-unit case at intake (2026-07-27):**
  - **Kg orders:** SO qty = the ordered weight (e.g. 20kg); some variance against picked weight is normal.
  - **Carton orders:** records the carton count in the SO's **Additional Notes** (e.g. "2 cartons") and sets the SO qty field to a **1kg placeholder** — the real qty is confirmed later from the Pick List.
- Maintains leads and prospects.
- Converts leads or prospects into customers.
- Uploads customer payment proof where applicable.
- Follows up on inactive or recurring customers.
- Receives the overdue-payment escalation alert (NS-06) for their own customers, alongside Finance, CJ, and David.

##### Permissions — can view/do (own records only)
- Own leads, own prospects, own customers, own Sales Orders.
- Create leads, create prospects.
- Convert leads or prospects into customers.
- Forward orders to the MAIA WhatsApp chat.
- Review MAIA-generated Sales Order drafts.
- Submit Sales Orders themselves — subject to the SO price-approval ladder (auto/CJ/David) and the SO-stage credit check.
- View own customers' credit status.
- Upload payment proof.
- **Cannot** view item cost/buying price — David-only.

##### Cannot
- Create a customer directly from a raw record.
- View another salesperson's customers.
- Edit credit terms.
- Edit credit limits.
- Bypass pricing approvals.
- Approve their own pricing exception.

##### Benefits
- Can continue working through WhatsApp.
- Faster order entry, less manual retyping.
- Clear approval status.
- Better visibility of customer credit issues.
- Recurring-order and inactive-customer reminders.
- CRM notes and customer history.
- Lower duplicate-customer risk.

##### Risks
- Must review MAIA's interpretation carefully.
- Forwarding the wrong message or an incomplete order may create an inaccurate draft.
- Incorrect SKU selection remains possible where product names are ambiguous.
- Orders may be delayed while approvals are pending.
- Strict credit controls may block urgent orders.
- Staff may keep forwarding orders to the old internal group instead of MAIA.

---

### Apple — Finance Manager

##### Responsibilities
- Sets customer credit limits.
- Maintains finance-related customer settings.
- Controls customer credit terms.
- Ensures customer financial settings are accurate.

##### Permissions — Apple can manage
- Credit limits.
- Credit terms.
- Credit-control settings.
- Finance-related customer configuration.

##### Benefits
- Central control over customer credit exposure.
- Reduced unauthorised changes by Sales.
- Better separation between Sales and Finance.
- More consistent application of credit rules.

##### Risks
- Credit limits based only on average order value may not reflect total payment risk.
- Zero-credit-limit treatment must be clearly defined.
- Incorrect settings may block valid orders or allow excessive exposure.

---

### Grace — Accounts / Finance User

##### Responsibilities
- Receives notification once Lai marks the Pick List **Completed**.
- **Approach 1 (adopted):** reviews the picked qty for every DN line item — the breakdown now happens directly inside the DN (propagated from the Pick List), replacing the old Excel Packing List double-entry.
- **Approach 2 / 2b / 3 (deferred, documented only):** converts the Pick List into the DN herself; exports the linked Packing List (whole-sheet in Approach 2, single-customer in 2b) and cross-checks it against the DN line items before proceeding; under Approach 3, first goes back to amend the linked SO to the picked qty and creates the Invoice from that amended SO, then separately converts the Pick List to DN.
- Reviews the Sales Order amendment prepared by MAIA (where applicable).
- Confirms the final quantity and SKU.
- Submits the amended Sales Order / DN.
- Explicitly asks MAIA to generate the Invoice and Delivery Note — not automatic.
- Reviews the generated Invoice and Delivery Note.
- Submits or confirms the financial documents.
- Uploads Proof of Delivery.
- Reviews payment proof.
- Confirms receipt of money in the bank.
- Submits payment receipts.
- Knocks off Invoices.
- **Handles Customer PO intake (AS-08)** — for the 3 confirmed customers who issue a formal PO instead of an informal WhatsApp order, Grace uploads/matches the PO against customer + item records and **converts the PO into a Sales Order**.
- Receives the overdue-payment escalation alert (NS-06) alongside the responsible salesperson, CJ, and David.

##### Permissions — Grace can
- Review warehouse-confirmed quantities and DN line items.
- Review Sales Order amendments; amend a linked SO to match picked qty (Approach 3).
- Submit amended Sales Orders.
- Convert a completed Pick List into a DN; export a linked Packing List.
- Upload and match a Customer PO and convert it to an SO (AS-08).
- Request MAIA to generate an Invoice; request MAIA to generate a Delivery Note.
- Review and submit financial documents.
- Confirm payment receipts; perform Invoice knock-off.

##### Cannot
- View item cost/buying price — David-only.

##### Explicit document-generation control
- Submitting the amended Sales Order does **not** automatically generate the Invoice or Delivery Note.
- Grace must separately instruct MAIA to generate them.
- She submits the amended SO.
- She asks MAIA to generate the Invoice and DN.
- MAIA generates them.
- She reviews and submits.

##### Benefits
- No need to manually re-enter warehouse quantities.
- Lower risk of transcription errors.
- Faster document preparation.
- Retains control over when financial documents are generated.
- Clear relationship between Sales Order, Pick List, Delivery Note, Invoice, POD, and payment.
- Easier audit trail; payment receipts can be drafted automatically.

##### Risks
- May become a bottleneck if every order requires individual review and a separate generation request.
- Automatic amendments must be clearly highlighted.
- SKU and quantity changes must be easy to compare.
- MAIA must not generate the Invoice or Delivery Note before Grace requests it.
- MAIA must not submit financial documents without Grace's confirmation.
- Bank verification remains a manual step for her regardless.

---

### Lai — Warehouse Manager

##### Responsibilities
- Checks what needs picking today across different Sales Orders.
- Adds orders/items to the Pick List — Macrofrozen currently picks based on order, not consolidated by item.
- Consolidates customer SOs into one Pick List himself.
- Checks the total qty shown from each SO and updates the **Picked Qty** column against it.
- Records kilograms per box, box count, and any replacement SKU (flags substitutions to Grace/David where approval is unclear).
- Uploads/updates the Pick List (PDF or in-app UI) back into MAIA.
- Marks the Pick List **Completed** once all Picked Qty values are in.
- **Approach 1 (adopted):** converts the completed Pick List into a **draft DN** himself — the total picked qty propagates in as one line, then gets broken into DN line items directly (e.g. 100kg → 20kg × 5) instead of a separate Excel Packing List.
- **Approach 2 / 2b / 3 (deferred, documented only):** still maintains the Packing List in Excel — breaks down picked qty per customer/product, uploads it as a CSV attachment linked to the Pick List (in 2b, one Pick List and one Packing List per customer); does **not** convert to DN himself under these approaches — that becomes Grace's step.

##### Permissions — Lai can view
- Sales Orders, product information required for picking.
- Pick Lists, customer names, Sales Order notes, delivery information.

##### Permissions — Lai can
- Group/consolidate Sales Orders into one Pick List, add orders/items to a Pick List.
- Generate Pick Lists, update the Picked Qty column, confirm quantities.
- Record kilograms per box, record replacement SKUs.
- Mark a Pick List Completed, upload completed Pick Lists.
- Convert a completed Pick List to a draft DN (Approach 1 only).

##### Cannot view
- Product cost price, product margin.
- Sensitive customer financial information.
- Accounting records unrelated to warehouse work.

##### Benefits
- Better visibility of all orders requiring picking.
- Easier grouping by delivery route and driver.
- Clear customer and Sales Order references.
- Structured quantity confirmation.
- Ability to record replacement SKUs.
- Reduced dependence on David.

##### Risks
- Warehouse still depends on printed Pick Lists unless a digital workflow is adopted.
- Handwriting may be difficult for MAIA to interpret.
- Unit conversions must be configured correctly.
- Warehouse users must understand the difference between number of boxes, kilograms per box, and total kilograms.
- SKU replacement may require approval.

---

### Warehouse Workers

##### Responsibilities
- Receive the Pick List.
- Pick the products.
- Pack the products.
- Record or confirm actual quantities.
- Inform the Warehouse Manager when stock is unavailable.
- Follow customer-specific preparation notes.

##### Permissions — may see
- Customer name, SKU, product description, sales notes.
- Ordered quantity, packing instructions, route or delivery grouping.

##### Permissions — should not see
- Product cost, margin.
- Customer credit information, sensitive financial data, internal pricing approvals.

##### Benefits
- Clearer picking instructions.
- Customer names displayed on Pick Lists.
- Additional Sales Order notes.
- Less confusion over formal SKU names.
- Better handling of multiple orders on one Pick List.

##### Risks
- Printed documents can be lost or damaged.
- Handwriting may remain ambiguous.
- Notes must be captured accurately.
- Workers may select an incorrect replacement SKU without clear rules.

---

### Driver

##### Responsibilities
- Receives the goods and Delivery Note.
- Delivers according to the assigned route.
- Obtains the customer's signature.
- Returns or sends the signed Proof of Delivery.

##### Permissions — should only receive
- Delivery route, customer address, customer contact.
- Delivery Note, delivery instructions, goods assigned for delivery.

##### Permissions — should not see
- Product cost, customer credit limit.
- Internal pricing approvals, internal financial information.

##### Benefits
- Clearer route assignment.
- Correct delivery documents linked to each order.
- Easier POD submission.
- Reduced risk of carrying the wrong documents.

##### Risks
- POD quality may be poor if submitted as a low-quality photo.
- Driver may forget to obtain a signature.
- Failed or partial deliveries require a separate exception process.

---

## See Also

- Source: `20Jul26 - Macrofrozen Before vs After MAIA` §4.1–4.11, §6.1–6.5 (Lark, re-verified rev 129)
- `[[Macrofood — Scope Lock v2]]`
- Macro Frozen — End-user & Process Map

> **Note (Gareth, 2026-07-27):** this doc lists Grace uploading POD as a normal DOES item. Scope Lock v2 / NS-07 still marks POD as **BLOCKED — client conflict** (Grace has directly rejected any photo-upload-to-Maya design). Treat this doc's POD line as aspirational/pre-conflict, not current locked scope, until David makes a decision.

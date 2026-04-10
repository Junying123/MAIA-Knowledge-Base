---
owner: Gareth
status: draft
last_reviewed: 2026-04-09
lark_url:
---

# MAIA for JDX Tea (九鼎香)

### From Festival Chaos to Frictionless Orders

_Prepared by Mindhive for JDX Gift and Food Sdn. Bhd._

---

## Who JDX Is

JDX Gift and Food Sdn. Bhd., trading as JDX Tea (九鼎香), is a Kuala Lumpur-based distributor and retailer of premium Chinese teas, specialty foods, and seasonal gift hampers. The company is the official Malaysian distributor of 大益 (DaYi), one of China's most recognised Pu'er tea brands. It runs a multi-channel business serving corporate buyers, hypermarket chains, and individual consumers. Headquarters is in Kepong. Own fleet covers Klang Valley deliveries; J&T, Skynet, and CityLink handle outstation.

The business has three distinct arms. Corporate hamper B2B is the revenue engine, accounting for roughly 80% of peak sales: companies order hamper sets for CNY, Hari Raya, and Mooncake Festival gifting, some with specific instructions for ribbon colour, greeting card wording, and item substitutions captured in pro forma remarks. The second arm is hypermarket consignment, where JDX places seasonal kiosks in Giant and AEON outlets staffed by its own promoters, who report daily sell-through and request top-ups via WhatsApp. The third arm is regular van sales: a salesperson visiting tea shops, restaurants, and bottle shops on a fixed route, billing on the spot using a QSoft tablet integrated with SQL.

During peak season, JDX runs hundreds of orders a day. Off-season, that number drops to near zero on some days. The company carries roughly 3,000 tea SKUs across DaYi grades, production years, and batch codes, plus marine delicacies, wellness products, and daily foods, sold through retail stores, online channels, and the corporate hamper channel. Behind those orders sits coordination infrastructure built on WhatsApp groups, SQL accounting entries, and Excel spreadsheets.

The seasonal hamper B2B arm, from pro forma invoice through payment matching, delivery order creation, and multi-address dispatch, maps directly onto MAIA's standard modules. That's where Phase 1 begins. Consignment kiosk reporting and the van sales QSoft integration are real opportunities but need further scoping with the tech team before they can be committed to scope.

---

## Before MAIA: How JDX Operates Today

JDX's order-to-cash process runs on people who know what needs to happen next. That works when volume is low and the same five people have handled the same flows for years. When peak season arrives and the team doubles with part-timers, that institutional knowledge doesn't transfer, and the cracks show fast.

### The Pro Forma Treadmill

Corporate orders come in through several routes: kiosk promoters at Giant and AEON pass large or customised orders back to JDX's back end; customers who find JDX through Facebook, Xiao Hong Shu, or the website get directed to WhatsApp to continue the conversation; others reach out directly. There's no central log — each channel feeds into the same manual process.

Corporate customers need to see the word "invoice" before they can process internal payment approval. So JDX issues a pro forma invoice, not a sales order or a quote, as the first formal document in every B2B transaction. An accounts assistant creates each pro forma manually in SQL: line items, quantities, prices, and a remarks column where all the customisation lives. Ribbon colour. Greeting card wording. Delivery date. Whether to include a price tag. Whether the customer wants mushroom swapped for pineapple tart. When they do, the warehouse has to pull those hampers out of the pre-packed batch and repack them individually.

Once the pro forma leaves SQL, those remarks have to travel with the order: to the warehouse, to the packing team, to the driver. There's no automated handoff. Coordinators retype or copy-paste the remarks into the delivery order. Ops staff read printed documents or screenshots forwarded through WhatsApp groups. Every step is a chance for a detail to drop.

During peak, an accounts assistant creates dozens of pro formas a day. Each one carries customisation remarks in free text: ribbon colour, greeting card wording, item substitutions. Those remarks travel manually through four handoffs: pro forma to delivery order, delivery order to warehouse, warehouse to operations. There's no system checking that a remark made it through intact. When one gets missed, the warehouse finds out too late and has to unpick and repack that batch. By then, the next batch of pro formas is already queued.

### The WhatsApp Payment Chase

Before a delivery order goes out, JDX needs payment confirmed. That's a sound policy: almost all corporate customers pay upfront. But the mechanics of confirming payment are manual at every step.

After sending a pro forma, the accounts team waits. The customer transfers funds and sends a screenshot of the bank slip to a WhatsApp group set aside for payment advice. Someone on JDX's side reads that group, figures out which pro forma the slip belongs to, and manually authorises the delivery order to proceed. If the slip is unclear, if the group is busy, or if the message arrives at 11pm, the coordinator is still the one who resolves it.

There's no matching system, no status flag, no automatic trigger. The pro forma stays open in SQL. The delivery order stays uncreated. The customer, who has already paid, waits. During peak, the backlog of unmatched payment slips grows faster than one person can process. Some coordinators stay up through the early hours to keep orders moving.

### The Multi-Drop Coordination Nightmare

One corporate hamper order can mean 50 delivery addresses. A company ordering gifts for its clients doesn't want them all shipped to headquarters: each set goes directly to the recipient. That means one order fans out into dozens of individual drops, some in Klang Valley on JDX's own fleet, some going outstation via 3PL courier with separate tracking numbers.

JDX tracks multi-address orders on spreadsheets. Drivers send delivery photos to a WhatsApp group. Coordinators scroll through the group, match each photo to the right drop, and log the result manually. A refused delivery, wrong item, wrong date, driver arrived late, means rescheduling by phone and WhatsApp, piecing together context across multiple threads.

The coordinator's day during peak is mostly a recovery operation. Most deliveries go fine. The ones that don't each take disproportionate time, and there's no central view of what's resolved and what's still open.

### Peak Season, Skeleton Crew

JDX's volume doesn't build gradually to a peak. It arrives all at once. The team that handles near-zero orders on a Tuesday in February is the same team processing hundreds of orders a day two weeks later when CNY orders surge. The answer has always been to hire part-timers for each festival window, train them fast, split the coordinator duties across more hands, and hope the process holds.

It mostly holds. But part-timers don't know the discount rules: 5% for orders under RM500, 10% for RM500 to RM1,500, 15% above. They don't know which seasons those rules change for, or that custom hamper orders void the standard discount, or that some corporate clients have negotiated rates outside the standard tiers. That knowledge lives with the senior staff, who are too busy running their own workload during peak to field constant questions.

Corporate customers also don't restrict themselves to office hours. Orders, queries, and payment advice arrive in the evening and overnight. Someone has to be available to issue or re-send a pro forma so the customer can pay and the order can move. During peak that's a real operational burden, not an edge case.

### The Promoter Report Loop

At each Giant and AEON kiosk during festival season, JDX deploys its own promoters to manage the stand. Every day, each promoter fills out a fixed-format stock report, opening balance, inflow, transfers, adjustments, returns, closing balance, and sends it via WhatsApp group to the ops coordinator.

The coordinator reads each report, checks it against the previous day's closing balance, and decides whether to approve a top-up request. Promoters sometimes over-order out of caution, and the coordinator has to challenge the request and negotiate back to a reasonable quantity. No system records the decision. No approval trail. No central view of stock levels across all kiosks at any moment.

By the time a discrepancy surfaces, a number that doesn't add up or a transfer that wasn't logged, the promoter may already be mid-shift at the kiosk and slow to respond. The coordinator chases over WhatsApp and waits.

---

## After MAIA: What Changes

**An accounts coordinator** opens MAIA and creates a pro forma invoice for a new corporate order. The product catalogue is already loaded. She selects the hamper set, enters the quantity, and fills in the structured remarks fields: ribbon colour (gold), greeting card message, delivery date, price tag preference. Those remarks are attached to the order record. They don't need to be retyped. When the delivery order is generated, the warehouse team sees the same remarks on their screen.

**A corporate customer** receives a link to their pro forma and sees the line items and customisation details laid out clearly. When they transfer payment, they upload the bank slip directly into MAIA against that order. The system matches the payment to the pro forma, marks it confirmed, and triggers delivery order creation. Nobody has to scan a WhatsApp group. The customer's order moves forward the moment payment is recorded.

**A warehouse operator** opens the delivery order for a corporate hamper batch. The remarks column is right there: gold ribbon, "Happy Hari Raya from the Team at Nexus Capital," no price tag, pineapple tart instead of mushroom. He doesn't need the original pro forma. He doesn't need to ask the coordinator. The instruction came with the order.

**A coordinator** receives delivery confirmation from the driver, either via photo or signed delivery note. She opens MAIA and marks that drop as delivered. The customer-facing tracking link updates in real time. If the driver reports a delivery was refused or failed, she flags it in MAIA with the reason. All drop statuses for that order are visible in one view, so rescheduling is straightforward.

**Management** opens MAIA during CNY peak and sees the full order pipeline: pro formas issued, payments pending, deliveries in transit, deliveries completed. Not a count from a spreadsheet someone updated this morning. A live view. If the boss asks how many orders are still waiting on payment confirmation, the answer is on the screen.

---

## Feature Deep Dive

### 1. Sales Order with Pro Forma Invoice Generation

JDX doesn't use a standard sales order for invoicing, but MAIA uses a sales order as the operational backbone. Accounts staff create a sales order with structured remarks, and MAIA generates a pro forma invoice PDF to send to the customer — the document JDX actually uses for payment requests.

**What it does:** Accounts staff create a sales order in MAIA, selecting products from the loaded catalogue and filling in structured customisation fields: ribbon colour, greeting card wording, item substitutions, delivery date, price tag preference. MAIA generates a pro forma invoice PDF from that sales order, which is sent to the customer. All remarks fields are stored against the sales order record and carry through to the delivery order and warehouse view automatically.

**What it won't do:** MAIA won't validate that a customisation request is feasible, for example whether a specific ribbon colour is in stock. That judgment stays with the coordinator. MAIA also won't enforce which remarks fields are mandatory: the team decides which fields to use per order type.

**Why it matters:** Customisation details today live in the remarks column of a SQL pro forma, then get retyped into delivery orders and forwarded via WhatsApp screenshots. Every handoff is a chance for a detail to be missed or misread. Structured remarks in MAIA mean the ribbon colour and greeting card message written at order creation are the same ones the warehouse reads on packing day.

---

### 2. Pro Forma → Invoice Conversion

JDX's billing flow requires a pro forma first, then an actual invoice only after payment is received. MAIA supports this two-stage flow without requiring the accounts team to create two separate documents from scratch.

**What it does:** Once payment is confirmed against a pro forma, the coordinator converts it to a final invoice in one click. The invoice inherits all line items, pricing, discount applied, and customer details from the pro forma. The conversion is logged with a timestamp and the name of the user who actioned it.

**What it won't do:** MAIA won't issue the invoice automatically. A human confirms the conversion. The system won't back-date invoices or override payment status to force the conversion.

**Why it matters:** In SQL, creating the actual invoice means manually re-entering data from the pro forma, or at best copy-pasting. During peak, when dozens of pro formas are waiting to convert at once, that manual work compounds. One-click conversion removes the duplication and ensures each invoice is tied to the correct pro forma in the same system.

---

### 3. Payment Advice Recording and Matching

The gap between a customer paying and JDX knowing about it is a WhatsApp group and a coordinator reading through it manually. MAIA closes that gap.

**What it does:** When a customer receives their pro forma, they send the payment slip via WhatsApp to JDX. The coordinator receives the slip, attaches it to the receipt module in MAIA against that pro forma order, and the system matches it to the open pro forma. Once the payment is confirmed, MAIA triggers delivery order creation automatically. Coordinators see payment status on the order record in real time.

**What it won't do:** MAIA won't automatically verify bank transfer amounts against the pro forma value. A coordinator reviews and confirms the amount matches. MAIA doesn't connect to banking systems or process payments directly. Customers still send slips via WhatsApp; there's no direct upload channel for them.

**Why it matters:** During CNY peak, payment slips arrive at all hours across a busy WhatsApp group. Today, a coordinator has to manually match each slip to the right pro forma and then manually trigger delivery order creation. Recording the payment in MAIA and attaching the slip means the slip lands in the right place and triggers the next step automatically, without a coordinator having to chase it through a chat thread.

---

### 4. Multi-Address Delivery Scheduling

Corporate orders with multiple delivery destinations are where JDX's process strains most visibly. MAIA handles the split at the order level.

**What it does:** For orders with multiple delivery addresses, the coordinator enters each address as a separate delivery line within the same order. MAIA generates individual delivery orders per drop, each with the full order details and customisation remarks. The coordinator assigns vehicles or 3PL couriers per drop and sets delivery dates. Each drop has its own status: pending, in transit, delivered, or failed. Coordinators see the full picture across all drops in one order view.

**What it won't do:** MAIA won't automatically route drops across vehicles or optimise delivery sequences. That planning stays with the coordinator. MAIA won't book 3PL couriers: the coordinator books externally and logs the tracking number in MAIA.

**Why it matters:** A 50-address corporate order today lives on a spreadsheet built for that specific order. Status updates come in via WhatsApp photos. Failed deliveries get flagged by phone. There's no single place to see overall delivery status. MAIA gives every drop a record, a status, and a home, so the coordinator's day is about exceptions, not reconstruction.

---

### 5. Photo POD Capture (Mobile)

Proof of delivery today is a photo sent to a WhatsApp group and found later by whoever needs it. MAIA attaches it to the delivery record.

**What it does:** When a driver completes a delivery, they open MAIA on their phone, navigate to the delivery drop, mark it delivered, and upload a photo. The photo attaches to that specific delivery record, timestamped, and visible to the coordinator immediately. If a delivery is refused or fails, the driver selects a reason: wrong item, wrong date, not home, or refused. The drop is flagged for coordinator action with the driver's notes attached.

**What it won't do:** MAIA won't verify that the photo shows the correct location or recipient. The driver's confirmation is the record. MAIA won't automatically reschedule failed deliveries: the coordinator reviews the flagged drop and decides next steps.

**Why it matters:** Coordinators scroll WhatsApp groups during peak looking for delivery photos and matching each photo to the right drop by memory. When a customer asks if their order was delivered, finding the answer means hunting through a group chat. MAIA makes POD retrieval a one-click action on the order record, and failed deliveries surface the moment the driver flags them.

---

### 6. Tiered Discount Configuration

JDX's discount structure has fixed rules by order value, adjusted each season. Coordinators apply these from memory or by checking a reference document. MAIA makes the rules part of the system.

**What it does:** Admins configure discount tiers in MAIA: 5% for orders under RM500, 10% for RM500 to RM1,500, 15% above RM1,500, with settings per season. When a coordinator creates a pro forma, the system applies the correct discount based on order value. For customised or bring-your-own-packaging orders, the coordinator flags the order as custom, which voids the standard tier and requires manual input. Tier settings can be updated by an admin at the start of each season without a developer.

**What it won't do:** MAIA won't apply client-specific negotiated rates automatically. Those exceptions require coordinator override, and the override is logged. MAIA won't prevent a coordinator from adjusting a discount manually: the adjustment is visible in the audit trail.

**Why it matters:** Part-timers who don't know the discount rules either apply the wrong tier or ask a senior coordinator every time. Errors in discount application affect the final invoice and, if caught late, require credit notes. With the rules in the system, the discount is right by default. Deviations are visible, logged, and intentional.

---

## Scope Summary

### Included

- **Pro Forma Invoice with Structured Remarks** — structured pro forma creation with customisation remarks propagated to delivery order and warehouse view
- **Pro Forma → Invoice Conversion** — one-click conversion on payment confirmation, logged with timestamp and user
- **Payment Advice Matching** — customer or coordinator uploads payment slip against open pro forma; triggers DO creation on confirmation
- **Multi-Address Delivery Scheduling** — one order split into individual drops, each with status tracking and coordinator view
- **Photo POD Capture (Mobile)** — driver logs delivery photo and status in MAIA mobile; failed deliveries flagged immediately
- **Tiered Discount Configuration** — admin-configurable discount rules applied at pro forma stage; custom order flag for exceptions

### Designed For, Not Included (Phase 2)

- **Consignment Kiosk Daily Stock Reporting** — the promoter reporting workflow is lower priority per JDX. Phase 1 uses the same order and stock movement framework, so extending into this in Phase 2 is straightforward.
- **QSoft Van Sales Integration or Replacement** — the van sales flow runs on QSoft integrated to SQL. Whether to keep and integrate or replace with MAIA requires a feasibility assessment with the tech team and JDX's SQL vendor before committing to scope.
- **Inventory Management** — JDX flagged inventory as low priority until the billing and delivery bottleneck is solved. Phase 1 does not include live stock management.

### Requires Clarification

- **QSoft van sales: integrate or replace?** JDX uses a QSoft tablet for roughly 10 to 15 van route visits per day, integrated to SQL. The decision to keep QSoft and build an API bridge, or replace it with MAIA mobile, affects Phase 2 scope and SQL vendor engagement.
- **Multi-address delivery feasibility** — MAIA's multi-drop delivery scheduling at the scale JDX describes, one order to 50 addresses, needs a tech team feasibility confirmation before the feature is committed to scope.

### Not in Scope

- Giant/AEON B2B portal billing (monthly commission deductions, display charges: JDX confirmed low priority)
- Deep inventory management or live stock level tracking
- B2C online / Shopify channel
- Tea retail POS for walk-in stores
- SQL accounting system integration

---

## The Design Principle

JDX's coordinators, accounts staff, and ops team are not the problem. They know the business, know the customers, know the products. The problem is the systems around them weren't built for the volume or complexity of what JDX runs during peak. MAIA takes on the administrative work: pro formas, payment matching, delivery tracking. The team focuses on the decisions only they can make.

JDX dispatches hundreds of customised hamper orders across Klang Valley in a two-week window. That takes real coordination. But every peak season, the team absorbs that load through extra hours and extra headcount, because nothing in the process was built for that volume. Senior staff field questions from part-timers who don't know the discount rules. Coordinators stay up to match payment slips. Account assistants retype the same remarks into four different documents. MAIA is how that changes.

Phase 1 delivers the core billing and delivery workflow: structured pro forma creation, payment matching, delivery order generation, multi-address tracking, and photo POD capture. That's the foundation. Kiosk reporting and van sales extend off the same platform once the core workflow is stable and the team has seen how the system handles peak.

_MAIA structures the workflow. Humans remain the decision-makers._

---

## See Also

- [[JDX - Customer Profile]]
- [[Requirement Gathering Output - JDX - 2026-03]]
- [[2026-03-27-JDX-Requirements-Gathering]]

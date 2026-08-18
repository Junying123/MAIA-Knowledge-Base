**Fixguru - Client Narrative v2**

**Source Coverage**

**Who / Company Reality --- Strong**

The sources identify the client as IAM Worldwide Sdn Bhd, operating publicly as Fixguru. The public website and catalogue position Fixguru as a Malaysia-based packaging and carton box supplier focused on e-commerce sellers, with ready-stock packaging, carton boxes, bubble mailers, parcel bags, thermal stickers, custom carton boxes, and custom printing. The public material also gives scale markers: a 65,000 sq ft facility and roughly 1,000 SKUs.

**Before / Current Operations --- Strong**

The discovery notes and scope documents describe the current operating model clearly: AutoCount is the main database, sales agents process customer orders through WhatsApp, operations plan picking and routing, drivers provide proof of delivery, and the team relies on manual coordination across Sales, Operations, Drivers, Accounts, and Management. The sources also identify the core pains: sales-operation miscommunication, stock visibility, lack of reminders, no raw material tracking, pricing/discount complexity, credit-limit checks, and manual rework.

**After / Scoped MAIA Capabilities --- Strong**

The SOW and UAT plan define the MAIA scope: internal WhatsApp chatbot, order and quotation management, custom box calculator based on IAM Excel sheets, credit-limit and credit-term enforcement, inventory and stock tracking, Lalamove integration, proof-of-delivery capture, approval engine, reminder engine, dashboard and analytics, AutoCount sync, multilingual support, and internal-only usage.

**Discovery Gaps to Close**

The sources do not provide confirmed headcount.

The sources do not provide branch count beyond customer HQ/branch delivery-address behaviour.

The sources do not provide exact monthly order volume, only 30+ confirmed orders per day and UAT references to one sales team handling around 30 invoices per day.

The sources do not provide named Fixguru executive roles beyond names appearing in UAT testing context.

The sources do not confirm whether MAIA should support all five calculators requested later, beyond the current decision that Phase 1 supports RSC and Diecut only, with Pizza, Layer Pad, and 5 Panels treated as change requests.

The sources do not provide a final approved go-live date or signed-off UAT outcome.

**MAIA for Fixguru**

**A coordination layer for Fixguru's B2B carton box operation --- from quotation to delivery, without replacing AutoCount**

*Prepared by Mindhive for IAM Worldwide Sdn Bhd*\
*Investment: RM 48,000*

**Who Fixguru Is**

Fixguru is the trading face of IAM Worldwide Sdn Bhd.

Publicly, Fixguru presents itself as a Malaysia-based packaging and carton box supplier serving e-commerce sellers, SMEs, and scaling brands. Its catalogue and website position the business around practical packaging supply: corrugated carton boxes, pizza boxes, parcel bags, bubble mailers, thermal stickers, custom carton boxes, and custom printing.

This is not a generic trading business.

Fixguru sits in the middle of a high-mix, fast-moving packaging operation. Some products are ready-stock SKUs. Some are custom-made carton boxes. Some require calculator-driven pricing. Some depend on raw material availability before Sales can confidently commit a delivery date.

The operation already has a backbone.

That backbone is AutoCount.

AutoCount holds the customer records, product records, inventory records, pricing references, credit limits, credit terms, quotations, pro-forma invoices, delivery orders, invoices, credit notes, receipts, and payment vouchers. Fixguru's team already trusts AutoCount's document numbers, templates, customer records, item codes, and financial logic.

That is not the problem.

The problem is everything that happens around AutoCount.

**Before MAIA --- How Fixguru Operates Today**

Fixguru does not have a software problem.

It has a coordination problem.

AutoCount is the record. WhatsApp is the workbench. Human memory is the glue.

That glue is now carrying too much.

**Sales is moving faster than the system around them**

A Fixguru sales agent does not work on one clean order at a time.

During UAT, the reality surfaced clearly: salespeople may be handling 4 to 10 active customer orders simultaneously. One sales team may process around 30 invoices a day. They edit here, submit there, switch context, check prices, check stock, check credit, confirm payment, and still need to answer the customer quickly.

A sequential chatbot flow cannot survive that environment.

If the bot expects one clean conversation, one customer, one draft, and one next step, it becomes slower than AutoCount. And once the salesperson feels AutoCount is faster, MAIA stops being a productivity layer and becomes another place to key in data.

The cost is not just speed.

The cost is adoption.

**Pricing is not a price list. It is a customer memory problem.**

Fixguru's quoting depends on customer-specific pricing behaviour.

For B2B customers, discounts can differ by customer, product, and historical treatment. A customer may have received 15% to 20% discount before. Some customers have fixed pricing arrangements. Some prices are below standard but pre-approved because the customer relationship justifies it. Some discounts are one-time decisions.

The salesperson does not only need the item's current standard price.

They need to know the last transacted price, the discount percentage given, and the net price after discount. Without that, the salesperson still needs to go back into AutoCount or ask another person before issuing a quotation.

That is the duplication tax.

MAIA may be able to create the quotation, but if it cannot show the pricing memory that Sales uses to make the quotation correct, Sales will not trust it.

**AutoCount document identity is operational language**

Fixguru's team references work by AutoCount document IDs.

The document number is not just a backend field. It is how the sales team thinks, searches, confirms, and follows up. During UAT, the gap was clear: if MAIA shows its own internal ID instead of Fixguru's AutoCount running number, the user has to translate between two systems.

That translation creates friction.

A salesperson should not need to ask whether "this MAIA order" is the same as "that AutoCount SBI/SO/SI document". The system must speak the same document language as Fixguru.

**Delivery charges are not just delivery methods**

In Fixguru's accounting logic, delivery charges such as 3PL or Lalamove are treated as item lines, not merely as a delivery method label.

That matters because item codes determine accounting treatment.

If MAIA treats "3PL Lalamove RM20" as a fulfilment method instead of a line item, the document may look acceptable at the surface level but create the wrong downstream accounting treatment. The sales order may be created, but the finance meaning is wrong.

This is why Fixguru keeps insisting on AutoCount-compatible templates, item codes, and document behaviour.

The form is not cosmetic.

The form carries accounting logic.

**Operations still depends on manual picking and routing coordination**

Once sales confirms an order, the information moves to operations.

The current rhythm is practical: order comes in, the sales team communicates the items, operations prepares picking, routes are planned by end of day, and drivers depart the next morning. Orders confirmed by the 2pm cut-off move into the next-day delivery flow. Same-day or on-the-spot deliveries may involve Lalamove.

Before MAIA, the picking workflow still depends heavily on copied item lists, checklist behaviour, Google Keep, and manual coordination.

The cost is visibility.

Sales wants to know whether the order is being picked, packed, loaded, out for delivery, or completed. Operations wants the correct DO, stock, warehouse, shelf, and item information. Drivers need the right delivery task and a simple way to send proof.

Without a shared operational layer, everyone keeps asking everyone else for status.

**Stock is more than finished goods**

Fixguru's stock problem is not only "how many finished boxes are on hand".

For custom carton boxes, Sales may need to know whether there is finished stock and whether raw material can be converted into finished boxes. A 1,000-unit demand may depend on finished custom box availability, raw material availability, and the known conversion ratio.

The business also has yield variance.

A raw material batch expected to produce 4,000 finished boxes may produce 3,900 because of production loss or defects. That difference matters when Sales commits quantities and when Operations plans fulfilment.

This is why simple stock balance is not enough.

Fixguru needs stock visibility that reflects how boxes are actually bought, converted, picked, and delivered.

**Credit approval needs context, not just blocking**

Fixguru uses credit terms and credit limits for B2B customers.

When a customer is within limit and term, the order can proceed. When the customer is near or over the limit, Management needs to approve before the process continues. But approval is not a blind yes/no action.

The approver needs context: current outstanding, overdue amount, credit limit, current order value, available balance, and whether payment can unlock enough credit for the order to proceed.

Without that context, the approver has to open AutoCount anyway.

That defeats the point.

**Follow-up is easy to forget because no one owns the reminder layer**

Fixguru identified reminders as a major requirement from the beginning.

Sales needs reminders for quotations not converted to orders. The team needs reminders when orders have not moved to DO. Sales needs to follow up with customers who have not ordered in 30, 60, or 90 days. Accounts and Sales need reminders around outstanding payment, credit terms, and invoice copies after delivery.

These reminders are not nice-to-have notifications.

They are the missing operational layer between "the work exists" and "someone actually follows through".

**After MAIA --- What Changes**

MAIA does not replace AutoCount.

MAIA replaces the scattered coordination around AutoCount.

AutoCount remains the accounting and master-data backbone. MAIA becomes the daily operating layer that helps Sales, Operations, Drivers, Accounts, and Management move the order from conversation to document to delivery with less re-keying and fewer missed steps.

**Sales starts from WhatsApp, but the work lands in structure**

A sales agent receives an order through WhatsApp.

Instead of manually rebuilding the order across messages, notes, and AutoCount, the agent forwards the customer request, files, images, or order details to the MAIA chatbot. MAIA drafts the quotation or pro-forma invoice and keeps the work tied to the right customer, item, delivery method, payment condition, and AutoCount-facing document flow.

The salesperson still decides.

MAIA prepares the structure.

**Pricing becomes visible at the point of decision**

When the sales agent quotes an item, MAIA surfaces the pricing context that matters: standard price, historical discount, and net price after discount where available.

For customer-specific pricing, MAIA helps the salesperson see whether the price is locked, historically used, or requires management attention. If the requested price falls below the minimum selling price or custom box profit rule, the system routes it into approval instead of silently allowing the wrong margin through.

MAIA does not decide the discount.

MAIA shows the basis for the human decision.

**The custom box calculator moves into the sales flow**

For custom boxes, MAIA supports the RSC and Diecut calculator flow based on IAM's calculation logic.

A salesperson can calculate the box price and use that result inside the quotation and sales order flow. This keeps calculator-driven work closer to the actual document instead of forcing the user to move between Excel, WhatsApp, and AutoCount.

Phase 1 supports the agreed calculators.

Additional calculators such as Pizza, Layer Pad, and 5 Panels should be treated as a separate scope decision, because calculator formulas are operational pricing logic, not a simple UI extension.

**Operations sees what needs to be picked, routed, and delivered**

Once an order is confirmed, MAIA gives Operations the structured handover.

The delivery order and picking information are no longer just copied manually into a checklist. Operations can see what needs to be prepared, which stock or warehouse information is relevant, and what needs to be routed by end of day.

The 2pm cut-off becomes part of the operating rhythm.

Orders confirmed by cut-off move into the next-day delivery route. Later orders roll into the next available schedule. Same-day orders can be routed into the Lalamove flow when required.

MAIA does not replace the logistics planner.

MAIA gives the planner a cleaner queue.

**Drivers update delivery status without creating another admin burden**

Drivers receive their delivery tasks through the driver flow.

When the delivery is completed, the driver uploads proof of delivery through the chatbot. MAIA stores the proof and returns the image/status back to Sales, giving the sales agent visibility without calling Operations or chasing the driver.

This is the operational value.

The driver performs one simple action.

Everyone else gets the status.

**Accounts and Management get approval context earlier**

For credit-limit and credit-term cases, MAIA surfaces the information needed before the document moves too far.

If the customer is over limit or approaching credit risk, MAIA can block the next step and route the case for approval. The approver sees the available credit context before deciding whether to approve, reject, or ask Sales to collect payment first.

This keeps the human in control.

The system does not approve credit.

It prevents blind approval.

**The reminder layer becomes automatic**

MAIA watches for operational silence.

A quotation not converted after seven days triggers a follow-up reminder. A customer with no orders after 30, 60, or 90 days can be flagged to Sales. Outstanding payment and credit-term reminders can be routed to the right team. Delivery status reminders keep Sales updated when work moves from created to packed, loaded, out for delivery, and completed.

The point is not notification volume.

The point is to remove memory as the operating system.

**AutoCount stays authoritative**

At the end of the day, MAIA syncs with AutoCount.

Customers, products, quotations, invoices, credit notes, receipts, and payment vouchers flow between the systems according to the agreed integration design. AutoCount remains the trusted financial and master-data record. MAIA helps the team create cleaner operational records before they become accounting records.

The boundary is important.

MAIA coordinates the work.

AutoCount remains the source of accounting truth.

**Feature Deep Dive**

1\. **Internal WhatsApp Chatbot**

**What it does**\
Allows internal users to create and manage quotations, sales orders, delivery orders, invoice status updates, payment status updates, and delivery proof through WhatsApp.

**What it will not do**\
It will not serve B2C customers directly in Phase 1. The chatbot is for internal Sales, Operations, Drivers, Accounts, and Management usage.

**Why it matters**\
Fixguru's work already starts in WhatsApp. MAIA turns that conversation channel into a structured workflow layer instead of forcing users to copy work across multiple systems.

2\. **AutoCount Integration**

**What it does**\
Synchronises key records between MAIA and AutoCount, including customers, products, quotations, invoices, credit notes, receipts, and payment vouchers. AutoCount remains the master record for accounting and operational reference data.

**What it will not do**\
It will not replace AutoCount. It also should not invent MAIA-only item codes, document IDs, or PDF formats where Fixguru expects AutoCount-compatible behaviour.

**Why it matters**\
Fixguru's team trusts AutoCount. MAIA must reduce double-entry without breaking the document language the business already uses.

3\. **Order and Quotation Management**

**What it does**\
Supports the flow from customer request to quotation, pro-forma invoice, sales order, delivery order, and invoice, with document traceability across the order lifecycle.

**What it will not do**\
It will not force a single rigid order path where Fixguru's actual workflow requires draft edits before submission.

**Why it matters**\
Fixguru's sales work is iterative. Orders change before final confirmation. MAIA must support that reality instead of locking users too early.

4\. **Custom Box Calculator**

**What it does**\
Supports RSC and Diecut quotation calculation based on IAM's calculator logic, allowing custom box pricing to flow into quotation and sales order creation.

**What it will not do**\
It will not automatically absorb every future Excel formula revision without review. Updated formulas and additional calculators should be handled as change requests unless already locked into the agreed scope.

**Why it matters**\
The calculator is not just maths. It is pricing logic, margin control, and sales confidence.

5\. **Historical Pricing and Discount Context**

**What it does**\
Shows relevant historical pricing context such as standard price, discount provided, and net price after discount where available.

**What it will not do**\
It will not decide the right discount for the salesperson. It should not silently apply discounts where management approval or customer-specific validation is required.

**Why it matters**\
Fixguru's B2B pricing is relationship-driven. Sales cannot quote confidently without seeing the customer's past treatment.

6\. **Credit-Limit and Credit-Term Enforcement**

**What it does**\
Checks customer credit status before allowing the order to proceed into downstream document creation. When limits or terms require approval, MAIA routes the case to Management with supporting context.

**What it will not do**\
It will not automatically override credit controls. A human approver remains responsible for the decision.

**Why it matters**\
Credit control is a finance risk. MAIA's role is to make the risk visible before the wrong document is issued.

7\. **Delivery and Driver Module**

**What it does**\
Supports delivery task visibility, proof-of-delivery upload, delivery status updates, and Lalamove/on-the-spot delivery handling.

**What it will not do**\
It will not replace human route planning. Operations still decides how to plan the route and handle exceptions.

**Why it matters**\
Sales needs delivery visibility without constantly interrupting Operations. Drivers need a simple update path. Operations needs fewer status-chasing messages.

8\. **Reminder Engine**

**What it does**\
Triggers reminders for quotation follow-up, sales order not converted to DO, stock availability, delivery status, customer inactivity, outstanding payments, credit terms, and invoice-copy follow-up after delivery.

**What it will not do**\
It will not replace human follow-up. It only ensures the right person is prompted at the right point.

**Why it matters**\
Fixguru's current risk is not that people do not know their jobs. The risk is that too many jobs are happening at once and follow-up slips through the cracks.

9\. **Dashboard and Analytics**

**What it does**\
Provides visibility into overall sales, outstanding payments, delivery status, and operational movement.

**What it will not do**\
It will not become a full BI system unless separately scoped.

**Why it matters**\
Management needs a clearer view of operational health without waiting for manual updates or scattered WhatsApp messages.

**Scope Summary**

**Included in RM48,000**

MAIA internal WhatsApp chatbot

Order and quotation management

Custom box quotation support for agreed calculator scope

Dashboard and analytics

Approval flow

Payment and credit check

Credit-limit and credit-term enforcement

Inventory and stock tracking visibility

Lalamove API integration for on-the-spot delivery handling

Delivery and driver module with proof-of-delivery capture

Reminder engine

AutoCount integration for agreed data objects

English, Malay, and Mandarin support as scoped

WhatsApp Business deployment for internal users

**Designed For, Not Included as Automatic Phase 1 Expansion**

Additional calculators beyond RSC and Diecut

Future formula versioning without formal review

Deeper raw-material-to-finished-goods production planning

Full stock assembly or manufacturing variance workflows

Advanced volume-metric reporting beyond agreed display fields

Full historical migration of all AutoCount documents if not specifically scoped and planned

Broader customer-facing chatbot flows

**Requires Clarification**

Final handling for updated RSC and Diecut Excel formulas

Whether volume metrics are display-only or operationally calculated

Exact approval behaviour for customer-specific fixed pricing below standard price

Final document template parity expectation between MAIA draft PDFs and AutoCount PDFs

Whether all historical QTN, SO, and SI records must be migrated or only current snapshot/forward-moving documents

Final treatment of branch-level contacts and delivery addresses across all customer records

Final performance threshold for chatbot response time under concurrent sales usage

**Not in Scope**

Customer-facing B2C chatbot flows

Product refunds and returns automation

Promo-code and seasonal campaign logic

WhatsApp reply-thread targeting as workflow context

Automatic acceptance of new calculator types without CR

Automatic formula upgrades without CR

Full replacement of AutoCount

Fully automated credit approval

Fully automated delivery scheduling

**The Design Principle**

Fixguru does not need MAIA to become another system of record.

It needs MAIA to become the operating layer between conversation, document, stock, delivery, and follow-up.

AutoCount already holds the business truth. MAIA should not fight that. It should make that truth easier to use at the moment work happens.

A salesperson should see the customer's pricing history before quoting.

Operations should receive structured picking and delivery work without copying from WhatsApp.

Drivers should update delivery proof without admin overhead.

Management should approve credit and margin exceptions with the right context.

Accounts should receive cleaner records because the operational steps before accounting were cleaner.

MAIA structures the environment.

Humans remain the decision-makers.

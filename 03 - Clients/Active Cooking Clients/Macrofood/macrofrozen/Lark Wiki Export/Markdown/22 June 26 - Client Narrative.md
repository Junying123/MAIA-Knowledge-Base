**22 June 26 - Client Narrative**

**Source Coverage**

**Who / Macro Frozen Is --- Strong**

Coverage is strong enough to identify the client as Macro Frozen, a food / frozen food / meat-related distributor operating under the client-facing name "Macro Frozen". The sources establish that Macro Frozen sells frozen meat and poultry products, uses SQL / AutoCount-related workflows as its core system, operates mainly through WhatsApp, has approximately 700 orders per month, and should be handled client-facing as AutorunBiz PLT x MAIA.

The public website supports Macro Frozen's external positioning as a frozen meat and poultry supplier with a catalogue of meat products and food processing / food lab capability.

Remaining gaps:

Exact SQL product name and version remain to be confirmed.

Full SKU count is not confirmed. The website shows a public catalogue, but internal SKU count is not sourced.

Exact headcount is partial: the sources confirm 3 sales users, David, finance/account, and one warehouse user, but not total company headcount.

Full company group structure is partial. The F2F transcript mentions other companies / import-export and processing-related activity, but Phase 1 is focused on Macro Frozen.

**Before MAIA / How Macro Frozen Operates Today --- Strong**

Coverage is strong. The meeting notes, F2F transcript, WhatsApp summary, and handover narrative all describe the same operating pattern: orders arrive through WhatsApp, staff interpret them manually, records are created or updated in SQL, warehouse prepares/cuts/packs/weighs goods, actual weight may differ from the initial order, documents are generated, and finance reconciles customer payments through payment slips and bank statements.

The sources also support the major pain points:

Manual WhatsApp order processing.

Fresh weight adjustment before final invoicing.

AR / payment slip / bank statement matching.

Price updates outside a structured system.

Product catalogue image generation.

Credit control and override approval.

Warehouse stock entry and picking/checking errors.

Overdependence on David for coordination and credit decisions.

Delivery trip management and WMS are explicitly not Phase 1.

Remaining gaps:

Exact average time spent per order is not sourced.

Exact monthly AR reconciliation volume is not sourced.

Exact value lost from wrong picks, wrong weights, or late collection is not quantified.

Exact number of WhatsApp groups and customer broadcast groups is not fully sourced.

**After MAIA / What Changes --- Strong for Phase 1, Partial for Later Phases**

Coverage is strong for the Phase 1 target workflow and scoped capabilities. The agreed direction is: customer WhatsApp order, MAIA-assisted order capture / draft SO, pick and actual weight confirmation, SO / DO / invoice creation, push to SQL where integration allows, and AR/payment reconciliation with human confirmation. The source also states that SQL remains the master for customer and item list, while pricing is managed and enforced in MAIA.

Coverage is partial for post-Phase 1 and future capabilities. Delivery trip management, AP reconciliation, barcode / QR WMS, full B2C ordering app, automated WhatsApp blasting, full forecasting, and procurement recommendation are explicitly out of scope unless separately approved.

Remaining gaps:

Exact sequencing of core deployment versus customisations still depends on implementation timeline.

Exact SQL integration method and vendor access remain blockers / dependencies.

Product catalogue format remains to be finalised from client samples.

GRN photo-based stock entry remains feasibility-dependent and needs clarification on whether it is included in RM40,000 or separately priced.

**Discovery Gaps to Close**

Confirm exact SQL / AutoCount system name, version, hosting model, and integration method.

Confirm whether SQL integration supports write-back for SO, DO, Invoice, CN, payment records, stock movement, and customer/item updates.

Confirm the final Phase 1 document flow: whether Macro Frozen will upload confirmed physical pick list into MAIA first, or create draft SO in MAIA before picking.

Confirm whether GRN photo-based stock entry is truly in scope, deferred, or requires separate pricing.

Confirm Product Update Assistant format:

Pork / Chicken / Duck variants.

Number of products per image.

Whether templates come from Canva, image, Excel, ChatGPT output, or another format.

Whether only in-stock products are included.

Whether Chinese item names need to map to English SQL SKU names.

Confirm who owns UAT on client side and who can approve workflow decisions without escalating every small point to David.

Confirm approval triggers:

Credit limit exceeded.

Payment terms exceeded.

Below minimum price.

Special pricing.

High-value order.

Confirm pro forma invoice requirement.

Confirm whether customer lead management is in scope or Phase 2.

Confirm whether inventory aging / expiry alert is in Phase 1 or parked as post-Phase 1.

**MAIA for Macro Frozen**

**A WhatsApp-first operations layer for frozen meat orders, weight adjustments, pricing control, and payment reconciliation**

*Prepared by AutorunBiz PLT x MAIA for Macro Frozen*

*Investment: RM 40,000*

**Who Macro Frozen Is**

Macro Frozen is a food distribution business in the frozen food and meat category.

Externally, the business presents itself as a supplier of frozen meat and poultry products. Its public catalogue includes cut, sliced, minced, rolled, marinated, and steamboat-ready meat products. Its positioning is direct: quality products, suitable cuts, and products that are ready for the way customers actually cook and buy.

Internally, Macro Frozen is not a simple catalogue business.

It is a weight-based, WhatsApp-heavy, B2B distribution operation. Customers do not always order through neat purchase forms. They send messages, voice notes, informal product names, repeated orders, negotiated prices, and customer-specific preparation preferences. Some customers are wholesale buyers. Some are retail or restaurant customers. Some are inactive customers who need product updates before they come back. Some customers care more about price movement than catalogue completeness.

Macro Frozen runs its core accounting, customer, item, stock, order, document, and payment reference workflow through SQL / AutoCount-related systems. That system remains important. It is where accounting discipline, customer and item references, invoices, credit notes, payment entries, and stock records need to end up.

MAIA does not replace that.

The relevant business problem is not that SQL exists.

The problem is everything that happens around SQL.

**Before MAIA --- How Macro Frozen Operates Today**

Macro Frozen does not have a simple software problem.

It has a coordination problem sitting between WhatsApp, SQL, warehouse reality, price movement, delivery documents, and customer payment behaviour.

**Orders arrive in WhatsApp, but operations happen in SQL**

The customer starts in WhatsApp.

The business has to finish in SQL.

Between those two points, a human has to interpret the message, identify the customer, identify the item, confirm the quantity, check the price, check whether the customer has outstanding payment issues, and then create or update the order in SQL.

That creates the first tax on the business: every order has to be translated before it can be processed.

When the message is clean, this is clerical work.

When the message is informal, voice-based, written in mixed language, missing the exact item name, using a customer's own shorthand, or referring to a preparation style instead of a SKU, the work becomes interpretation.

That interpretation currently depends on people who already know the customer.

This is workable at 700 orders per month.

It is not clean infrastructure.

**Fresh weight means the first order amount is not always the final invoice amount**

Macro Frozen's workflow cannot assume that an order becomes an invoice immediately.

A customer may ask for a quantity, but the warehouse only knows the final actual weight after preparing, cutting, packing, or weighing the goods.

That means the business has a two-stage order problem.

First, the order is received and prepared.

Then the actual weight is confirmed.

Only after that can the final amount be confirmed and the DO / invoice flow proceed.

This is not a minor detail. It changes the whole design.

If MAIA treated every WhatsApp order as a final invoice, it would be wrong for Macro Frozen. The system has to support the gap between requested quantity and actual fulfilled weight.

Today, that gap creates rework. Staff have to update final weight and price manually before final documents are generated. Every manual update is another place for quantity, price, item, or document mistakes to enter the process.

**Price is a control point, but today it lives outside a proper control system**

Macro Frozen's pricing changes with market movement.

David currently updates prices through manually generated WhatsApp / image / word-style messages. Price changes can happen monthly, and more frequently when market conditions shift. The typical update discussed is around 30 SKUs.

There are at least three pricing realities in the business:

global wholesale pricing

global retail pricing

customer-specific fixed pricing

There is also minimum price protection.

The risk is not only that an admin keys in the wrong number. The deeper risk is that sales, admin, and customers are not always operating from the same current price memory.

When a customer has an agreed price, the order should not silently follow an old standard price.

When a salesperson adjusts a price, the business needs to know whether that is permitted.

When the market moves, the latest price has to become operationally usable, not just visually circulated.

Pricing is not just communication.

It is margin control.

**Product updates are sales activity, but the current catalogue process is manual**

Macro Frozen uses product update images rather than PDFs because customers, especially older customers, are less likely to open PDFs. The product update is not just a catalogue. It is a sales nudge for inactive customers, new customers, and customers who are price-sensitive or comparing suppliers.

The business has Pork, Chicken, and Duck catalogue variants.

David currently updates the price list in Excel and reloads it into GPT to generate catalogue-style visuals. The item names in the price list may be Chinese, while SQL item names are English or English-Chinese, which creates a mapping problem between what customers read and what the system stores.

That is the duplication tax.

The same product truth has to exist in multiple forms:

SQL SKU / item record

price update Excel

customer-facing Chinese product name

catalogue image

WhatsApp-forwarded customer update

order interpretation logic

If those are not connected, every product update becomes a manual reconstruction exercise.

**AR is not only "has the customer paid?"**

Finance has to deal with payment slips, bank statements, invoice matching, customer names, payer names, partial payments, and ambiguous references.

Some customers pay by bank transfer.

Some pay by cash collected by drivers.

Some pay through QR merchant scan.

The in-scope AR problem is customer invoice AR. The out-of-scope merchant settlement problem is different and should not be blended into Phase 1.

The current pain is not that finance cannot see money entering the bank. The pain is knowing which payment knocks off which invoice, especially when the payer name does not match the customer name, when the payment reference is unclear, or when one payment covers more than one invoice.

That is where delay becomes commercial risk.

If payment records are updated late, sales may chase a customer who already paid, or continue serving a customer whose outstanding is not properly reflected.

Both are bad.

One damages trust.

The other damages cash control.

**David is both director and control point**

David is the director and credit controller.

That matters because Macro Frozen's credit policy is not just a static number in a system. Most customers operate on a "one invoice" basis: the previous invoice should be paid before the next order is allowed. But in practice, terms vary. Some customers operate on 30 days, some on 60 days, some on two weeks, and some on patterns closer to 45 days.

Macro Frozen controls exposure by setting customer credit limits according to buying patterns. An example discussed was a customer ordering around RM5,000 per week.

When a customer exceeds credit limit or terms, someone needs to decide whether to block, release, or override.

That someone is David.

Without structured routing, David becomes the bottleneck and the safety valve at the same time. If the business depends on him remembering, checking, approving, and coordinating everything manually, then the system has not reduced risk. It has concentrated risk in one person.

**Warehouse accuracy is not solved by extracting a document**

The original stock-entry discussion sounded like a GRN or stock-entry problem.

The deeper issue is human error in weighing, picking, checking, and keying.

The examples are operational:

order says 33.9 kg, but the picker takes 32 kg

checker misses the difference

wrong cut is picked, such as belly versus outer belly

paper pick list is updated manually

warehouse and checker responsibility becomes hard to prove after a customer complaint

This is not a pure AI extraction problem.

If the wrong item was picked or the wrong weight was written before data reaches MAIA, extracting that data more efficiently only digitises the wrong input.

The real fix is process rigidity: clearer SOP, confirmation steps, responsibility capture, and later, possibly WMS / barcode / QR scanning.

But full WMS is a separate investment class and not Phase 1.

**Delivery is coordinated today, but not yet systematised**

Pick lists are currently paper-based.

Orders are grouped by delivery route or driver. David consolidates orders by location and communicates through WhatsApp groups. Drivers collect signed DOs or send proof back into groups.

That works because people know the routes, customers, and habits.

But it is not a delivery management system.

Delivery trip management, driver app, route-level POD, and structured stop tracking are valuable, but they are post-Phase 1.

For Phase 1, MAIA should respect the current paper pick list and driver flow rather than pretend Macro Frozen is ready for a full delivery module on day one.

**After MAIA --- What Changes**

MAIA does not replace SQL.

MAIA replaces the manual coordination layer around SQL.

It becomes the operating layer where WhatsApp orders, customer context, item matching, pricing rules, fresh weight adjustment, document preparation, payment matching, and approval routing are structured before confirmed records move into SQL.

**The day starts with work already organised**

A sales or admin user opens MAIA and sees the orders that need attention.

The customer's WhatsApp order is no longer just another message in a long chat thread. It becomes a draft workflow record.

MAIA extracts the likely customer, item, quantity, remarks, delivery notes, and special preparation requirements where available. If the message is unclear, MAIA does not silently decide. It asks for review.

The user checks the draft.

If the customer name is wrong, they correct it.

If the SKU is ambiguous, they select the right one.

If the customer has a special product preference, that preference is surfaced instead of relying on memory.

Then the order proceeds.

The human remains the reviewer.

MAIA becomes the structure.

**Fresh weight becomes a designed workflow, not a workaround**

A customer places an order.

MAIA prepares the order information, but the system does not assume the first requested quantity is final.

Warehouse prepares, cuts, packs, or weighs the goods.

The actual weight is updated.

MAIA recalculates the final amount using the confirmed weight and pricing logic.

Only then does the user confirm and generate the relevant documents.

This is the core design principle for Macro Frozen: the Sales Order anchors the workflow, but the final commercial document waits for operational reality.

The system stops forcing staff to choose between speed and correctness.

**Pricing moves from memory and messages into control**

David or an authorised user uploads the latest price update through a structured template.

MAIA stores the latest price references.

When a salesperson or admin prepares an order, MAIA applies the relevant pricing logic:

wholesale

retail

customer-specific fixed price

minimum price protection

If the price falls below an agreed floor, MAIA flags or blocks according to configuration.

If a customer has a fixed price, MAIA uses that instead of letting the order follow an outdated general price.

If volume-based pricing is required, that remains a gap unless separately scoped.

This matters because pricing errors are not admin errors.

They are margin leakage.

**The catalogue becomes generated from the same product truth**

A Macro Frozen user updates price and product data.

Then the user asks MAIA to generate the product update catalogue.

MAIA uses a fixed template.

It updates item names, prices, stock status, product details, and images where available.

The output is designed as a WhatsApp-ready visual because that is how Macro Frozen's customers read product updates.

The user reviews it.

The user manually forwards it.

MAIA does not blast customers automatically unless separately scoped and technically supported.

That boundary matters. Catalogue generation is in scope. Fully automated WhatsApp broadcasting is not.

**Finance gets suggestions, not silent posting**

A customer sends a payment slip.

Finance uploads or forwards the slip, or uploads a bank statement record.

MAIA extracts the payer name, amount, date, reference, and likely matching invoice or customer.

If the match is clear, MAIA suggests it.

If the payer name differs from the customer name, MAIA flags it.

If the reference is unclear, MAIA asks for manual confirmation.

Finance chooses the correct customer or invoice before updating.

This is not a fully autonomous finance system.

It is assisted AR matching, with finance still in the seat.

That is the correct risk posture for Macro Frozen.

**Sales can check before promising**

A salesperson in the field asks MAIA for the customer's latest price, outstanding status, or customer context.

MAIA retrieves what is available.

The salesperson no longer needs to call the office for every price, credit, or document question.

If the customer has overdue payment or is near the credit limit, MAIA can surface that context before the salesperson commits to a new order.

This changes field sales from "ask the office" to "check the operating truth".

It does not remove judgement.

It puts judgement earlier in the conversation.

**Credit control becomes routed instead of remembered**

When an order hits a credit issue, MAIA blocks or flags it according to configuration.

David receives the approval request as credit controller.

David approves, rejects, or allows a one-time override.

The order proceeds only after the approval condition is cleared.

The important part is not just blocking.

The important part is that the exception is visible, assigned, and recorded.

That reduces the risk of sales pushing through orders while finance discovers exposure later.

**Warehouse stock entry becomes simpler, but not a full WMS**

For stock entry, the intended design is deliberately simple.

If GRN photo processing is feasible, the warehouse user takes a photo of the GRN and sends it to MAIA. MAIA extracts item, quantity, UOM, supplier/reference where available, shows a stock entry summary, and asks for confirmation.

If GRN photo processing is not feasible in Phase 1, the fallback is a guided WhatsApp stock key-in flow:

"Add stock."

MAIA asks for item.

MAIA asks for quantity or weight.

MAIA asks for warehouse or location if needed.

MAIA shows a summary.

The user confirms.

This does not solve wrong picking, wrong weighing, poor checking, or SOP non-compliance.

It solves the narrower problem of making stock update easier and less dependent on a slow, high-friction key-in process.

The full warehouse control problem remains a Phase 2 / WMS discussion.

**Management sees the work without chasing everyone**

The backend dashboard gives authorised users visibility into:

orders received

draft orders pending review

orders submitted

orders pending weight update

orders pending document generation

delivery / order status where available

payment matching status

unmatched payment records

customer/payment exceptions

activity trail

document trail

This is where MAIA changes David's role.

Today, David coordinates by memory, WhatsApp, paper, and experience.

After MAIA, David should be able to monitor the work instead of personally carrying every handoff.

That is the operational upgrade.

**Feature Deep Dive**

1\. **WhatsApp Order Capture**

**What it does**

MAIA receives forwarded or input customer WhatsApp orders, extracts customer, item, quantity, remarks, and delivery/collection notes where available, then prepares a draft workflow record for review.

It supports informal messages, mixed language, and voice-message-style inputs subject to quality and clarity.

**What it won't do**

MAIA will not submit every WhatsApp message blindly into SQL.

Human review is required before final submission, especially where item, customer, quantity, voice transcription, or preparation preference is unclear.

**Why it matters**

Macro Frozen's customer-facing reality is WhatsApp. The system should not force customers into a new ordering app in Phase 1. It should structure the existing channel.

2\. **Sales Order Preparation and SQL Integration**

**What it does**

MAIA prepares draft Sales Orders based on extracted and reviewed order information. Where integration allows, confirmed records are pushed into SQL.

SQL remains the master accounting/order reference system.

**What it won't do**

MAIA will not replace SQL.

MAIA will not bypass SQL's required document dependencies or accounting constraints.

**Why it matters**

Macro Frozen still needs clean accounting and document records. MAIA improves the operational front layer without ripping out the system that finance and records depend on.

3\. **Fresh Weight Adjustment Workflow**

**What it does**

MAIA supports the gap between requested quantity and actual fulfilled weight. The user can update actual weight after warehouse preparation, and MAIA recalculates the final amount before document generation.

**What it won't do**

MAIA will not assume the initial customer order is the final invoice quantity.

MAIA also will not know whether the physical weighing was correct unless the human process captures the correct weight.

**Why it matters**

This is the centre of Macro Frozen's workflow. The system must fit weight-based frozen meat operations, not generic fixed-quantity order entry.

4\. **Delivery Order and Invoice Workflow**

**What it does**

MAIA supports generation of Sales Order, Delivery Order / Delivery Note, Invoice, Proforma Invoice where required, and Credit Note where applicable, subject to final document format confirmation and SQL integration capability.

**What it won't do**

MAIA will not automatically send documents to customers without user review unless separately configured and approved.

MAIA will not override SQL numbering or accounting requirements where SQL controls the final document sequence.

**Why it matters**

Documents are where operations become accountable. Wrong document sequence, wrong quantity, or wrong price creates downstream finance and customer service problems.

5\. **AR Support Workflow**

**What it does**

MAIA supports payment slip and bank statement processing. It extracts payer name, amount, date, and reference, suggests matching customer/invoice records, and asks the user to confirm before updating the payment record where integration allows.

**What it won't do**

MAIA will not automatically decide unclear payer aliases.

MAIA will not handle merchant / QR settlement reconciliation in Phase 1.

MAIA will not become a full custom finance AR system.

**Why it matters**

The goal is faster, cleaner knock-off without exposing Macro Frozen to silent misallocation of customer payments.

6\. **Price Update Assistant**

**What it does**

MAIA allows authorised users to bulk update item prices through a structured template. It supports latest price references, wholesale / retail pricing, customer-specific pricing, and minimum price protection.

**What it won't do**

MAIA will not support full volume-based pricing enforcement in the current scope.

MAIA will not allow uncontrolled price changes unless permissions and approval rules allow it.

**Why it matters**

Pricing is the margin layer. If pricing lives in memory and WhatsApp images, the business leaks control.

7\. **Product Update / Catalogue Assistant**

**What it does**

MAIA generates product update visuals using a standardised template, latest product data, latest prices, and product images where available. The expected variants include Pork, Chicken, and Duck.

**What it won't do**

MAIA will not create a fully redesigned catalogue every time.

MAIA will not automatically broadcast or blast WhatsApp customers unless separately scoped and technically/policy-wise supported.

**Why it matters**

Macro Frozen's customers respond better to images than PDFs or long text lists. The catalogue is a sales reactivation tool, not just a product list.

8\. **Credit Limit Control and Approval**

**What it does**

MAIA checks customer outstanding status, credit limit, and payment terms where data is available. If the customer exceeds limit or terms, MAIA flags or blocks the order and routes approval to David as credit controller.

**What it won't do**

MAIA will not become a full credit scoring engine.

MAIA will not decide commercial risk on behalf of David.

**Why it matters**

Credit control needs speed and discipline. The system should stop risky orders from slipping through while still allowing David to approve exceptions intentionally.

9\. **Outdoor Sales Assistant**

**What it does**

Salespeople can query MAIA for current item price, customer-specific price, customer outstanding, customer details, and document generation support where allowed.

**What it won't do**

MAIA will not replace the salesperson's relationship work.

MAIA will not expose all customer data across sales users if role permissions restrict visibility.

**Why it matters**

Outdoor sales becomes less dependent on office callbacks. Sales can answer faster while staying inside Macro Frozen's pricing and credit controls.

10\. **Customer Information Updates**

**What it does**

Authorised users can update customer contact persons, phone numbers, delivery addresses, billing addresses, remarks, preferences, and meeting notes through MAIA, subject to confirmation and permissions.

**What it won't do**

MAIA will not allow uncontrolled customer master changes from unauthorised users.

**Why it matters**

Customer preferences matter in this business: cut thickness, packing size, wrapping, delivery habits, and pricing expectations. Those details should not live only in someone's head.

11\. **Stock Entry Support**

**What it does**

MAIA supports simple stock entry either through GRN photo extraction where feasible or a guided WhatsApp stock key-in fallback. The design should be low-typing, confirmation-based, and suitable for a non-technical warehouse user.

**What it won't do**

MAIA will not become a full WMS.

It will not include bin-level warehouse management, picker app, route planning, barcode scanning, stock forecasting, or cycle count workflows unless separately scoped.

**Why it matters**

Stock update friction blocks order processing. The first target is fast and simple stock update, not full warehouse automation.

12\. **Backend Dashboard and Reminders**

**What it does**

MAIA gives management and authorised users visibility into pending work, order statuses, payment matching status, exceptions, document trails, and activity records.

**What it won't do**

MAIA will not replace managerial judgement.

It will not create unlimited custom dashboards outside the agreed scope.

**Why it matters**

The business needs fewer "who is handling this?" moments. The dashboard makes work visible before it becomes an escalation.

**Scope Summary**

**Included in RM40,000**

Base MAIA Phase 1 implementation.

WhatsApp order capture.

Sales Order preparation.

SQL integration where access allows.

Fresh weight adjustment workflow.

Delivery Order and invoice workflow.

Credit Note support where applicable.

Proforma Invoice support where confirmed.

AR support workflow for payment slip and bank statement processing.

User-confirmed payment matching.

Payment discrepancy review.

Outdoor sales assistant.

Customer information updates.

Backend dashboard and daily reminders.

Customer Grouping with Markup.

Price Update Assistant.

Approval Flows.

\[INFERENCE: Product Update Assistant is treated as committed based on sales handover, but the final implementation format depends on catalogue samples, templates, and mapping files.\]

**Designed For, Not Included or Not Fully Included Unless Confirmed**

Product Update Assistant with standardised image/catalogue output, if final scope confirms inclusion.

GRN photo-based stock entry, if feasibility and commercial inclusion are confirmed.

Inventory aging / expiry alerts.

Delivery trip management.

Driver app and structured proof-of-delivery workflow.

Batch tracking.

Damage stock reporting beyond issue-ticket workaround.

AP reconciliation / supplier payment matching.

Procurement planning / purchasing recommendation.

Customer lead management and CRM follow-up tracking.

Customer-facing ordering chatbot.

B2C fresh market expansion.

**Requires Clarification**

Exact SQL / AutoCount system and version.

SQL integration method and vendor-side access.

Whether the deployment is API, database-level, file-based, or another integration method.

Whether the client's SQL vendor will charge integration fees.

Whether MAIA creates SO first or creates SO only after confirmed physical pick list upload.

Whether pro forma invoice is required as a dedicated document.

Whether GRN stock entry is Phase 1, post-Phase 1, or separately priced.

Product catalogue template format and ownership.

Catalogue mapping between Chinese price-list item names and English SQL SKU names.

Final approval thresholds and approver rules.

Final user permission matrix.

Whether sales lead management is in scope or parked.

Whether inventory aging / expiry alerts are Phase 1 or future.

**Not in Scope**

Full ERP replacement.

Replacing SQL / AutoCount-related accounting workflow.

Full B2C customer ordering app.

Customer-facing ordering chatbot in Phase 1.

Fully automated WhatsApp broadcast / blasting.

Full warehouse management system.

Barcode / QR warehouse scanning.

Bin-level stock management.

Route planning.

Driver app / delivery trip management in Phase 1.

Full inventory forecasting.

Procurement recommendation / auto-purchasing.

AP reconciliation unless separately approved.

Merchant / QR settlement reconciliation.

Full credit scoring engine.

Fully autonomous payment posting.

Automatic payer alias mapping without user confirmation.

Complex multi-level approval matrix beyond agreed flows.

Unlimited custom dashboards.

Any additional module raised after sign-off without commercial approval.

**The Design Principle**

Macro Frozen does not need MAIA to become another system that people have to serve.

It needs MAIA to organise the work already happening around WhatsApp, SQL, warehouse, pricing, documents, and payments.

That means the design must stay practical.

Customers keep ordering the way they already order.

SQL remains the accounting and operational record system.

Warehouse keeps its physical process where Phase 1 requires it.

Finance remains responsible for confirming payment matches.

David remains the credit decision-maker.

MAIA sits between those people and structures the handoffs.

It turns messages into draft records.

It turns prices into controls.

It turns fresh weight into a recognised workflow.

It turns payment slips into reviewable matches.

It turns exceptions into approvals.

It turns memory into visible operating context.

That is the real value for Macro Frozen.

Not automation for its own sake.

Operational discipline without forcing the business to change shape overnight.

*MAIA structures the workflow. Humans remain the decision-makers.*

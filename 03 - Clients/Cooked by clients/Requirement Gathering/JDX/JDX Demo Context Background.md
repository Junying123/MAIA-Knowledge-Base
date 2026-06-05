---
owner: Gareth
status: draft
last_reviewed: 2026-04-21
---

# JDX Demo — Context Background

Use this as pre-read before the demo. Each section maps to a slide and explains the real story behind every bullet point — where it came from, why it matters, and what to expect from Mr. Kong.

---

## Slide 2 — The Pain

### 01 · Order Intake: "All channels feed a separate thread; no central log"

**What's really happening:**
JDX receives corporate hamper orders through at least four channels: WhatsApp direct messages, Facebook inquiries, website contact form, and orders passed back from promoters at Giant/AEON kiosks. There is no CRM, no inbox aggregation, no ticketing system. Every inquiry lands in a different place and gets handled by whoever picks it up first.

During off-peak, this is manageable — volume is low, the team knows most customers by name. During CNY or Hari Raya, when volume spikes from near-zero to hundreds of orders a day within days, the lack of a central log means orders fall through the gaps. A Facebook message seen but not acted on. A WhatsApp query that arrived when the team was at capacity. There is no way to see what's open, what's been responded to, and what's still waiting.

**Why Mr. Kong cares:**
His team is small and permanent. The part-timers he hires for peak don't know which channel to monitor or how to triage incoming inquiries. Senior staff end up managing inbound chaos instead of managing the business.

---

### 02 · Document Handling: "Pro formas created manually in SQL; customisation remarks as free text"

**What's really happening:**
JDX's corporate B2B customers require a pro forma invoice — not a quote, not a sales order — before they can process internal payment approval. This is a corporate procurement policy requirement, not a JDX preference. So the first formal document in every B2B transaction is a pro forma.

That pro forma is created manually in SQL Accounting. The accounts assistant opens SQL, creates a new invoice record, adds line items and quantities, and then types all customisation details into a free-text remarks field: ribbon colour (gold, red, or custom), greeting card wording (sometimes a full sentence), whether the customer wants a price tag on the hamper, whether they want a specific item swapped (e.g. mushroom replaced with pineapple tart for certain recipients).

That free-text remarks field is the only place this information exists in the system. It doesn't have a schema. It's not searchable. And it is the single source of truth for everything the warehouse needs to pack those hampers correctly.

**Why Mr. Kong cares:**
When the remarks are wrong, the packing is wrong. When the packing is wrong, the batch has to be unpicked and repacked. By then, the next wave of orders is already in the queue. Mr. Kong described this explicitly during the RG session — the repack issue is not occasional, it is recurring.

---

### 03 · Payment Matching: "Coordinators match slips manually — overnight during peak"

**What's really happening:**
JDX policy: no delivery order goes out until payment is confirmed. This is sound credit control for a business dealing with hundreds of B2B orders per peak season. Corporate customers are required to pay upfront, then send proof of payment before their order moves forward.

That proof of payment — a bank transfer screenshot — arrives in a WhatsApp group set aside for payment advice. During peak, multiple coordinators are monitoring this group. When a slip arrives, someone has to:
1. Open the slip image
2. Identify which customer it belongs to (the customer name on the slip may not match exactly)
3. Cross-reference the amount against the open pro forma in SQL
4. Manually flag that pro forma as paid
5. Trigger creation of the delivery order

This matching process is entirely manual. There is no reference number system linking slips to pro formas. Ambiguous slips — wrong amount, illegible sender name, partial payment — require a coordinator to follow up with the customer before the order can move.

During CNY peak, payment slips arrive at all hours. Corporate customers don't follow office hours. A coordinator staying up until midnight or later to process slips is not unusual — Mr. Kong described this directly. The coordinator's availability is the bottleneck. If they step away, orders queue.

**Why Mr. Kong cares:**
He named this as one of the two biggest pain points alongside delivery tracking. The overnight requirement is a real operational burden, and it falls on his most experienced staff — the people he cannot afford to burn out during peak.

---

### 04 · Multi-Drop Delivery: "50+ addresses on a spreadsheet; no live status"

**What's really happening:**
A corporate hamper order from a company like a bank, law firm, or property developer means one purchase order, one payment — but 50, 80, sometimes over 100 individual delivery destinations. The company is buying gifts for its clients, and those recipients are spread across Klang Valley, with some going outstation via 3PL.

JDX handles this by building a bespoke spreadsheet for each large corporate order. Columns: recipient name, address, contact number, delivery date, status, notes. Rows: one per drop. That spreadsheet is the delivery coordinator's operating document for the entire lifecycle of that order.

Drivers go out with printed delivery notes (or WhatsApp-forwarded screenshots). When a drop is completed, the driver takes a photo of the signed delivery note or the delivered package and sends it to a WhatsApp group. The coordinator then scrolls the group, matches each photo to the correct row on the spreadsheet, and updates the status.

When a delivery fails — recipient not at the address, refused at the gate, wrong item — the coordinator chases by phone. There is no structured failure reason, no rescheduling workflow. The coordinator reconstructs the context from memory and messages across multiple threads.

**Why Mr. Kong cares:**
He mentioned this alongside billing as the two areas where MAIA could reduce the need for temporary headcount. The multi-drop coordination problem is where his logistics coordinator spends most of their peak season — and it's the hardest thing to hand off to a part-timer because it requires knowing the context of each order.

---

## Slide 3 — E2E Flow

### "Remarks entered at Sales Order stage flow automatically through every document"

**Background:**
The remarks propagation flow is the core design decision in MAIA's Phase 1 build for JDX. Today, customisation information is created at the pro forma stage and then manually carried — by people — through every subsequent document. Pro forma to delivery order: coordinator copies the remarks. Delivery order to warehouse: coordinator forwards a screenshot. Warehouse to packing team: team lead reads aloud or writes on a whiteboard.

Every handoff is a potential failure point. MAIA's answer is to structure the remarks at entry (not free text — distinct fields per customisation type) and then bind them to the order record so every downstream document inherits them automatically.

This is not a trivial capability. It requires the data model to treat remarks as structured attributes of the order, not as a text annotation. That's what MAIA's Phase 1 build for JDX delivers.

---

## Slide 4 — Demo 1: Create Order + Pro Forma

### "Accounts assistant manually creates pro forma in SQL one by one"

**Background:**
Each pro forma is a standalone SQL entry. There is no order template, no quick-duplicate, no bulk creation. If a customer orders the same hamper set they ordered last year, the assistant still creates a new pro forma from scratch. During peak, an accounts assistant may create 30–50 pro formas in a single day. The manual entry cost compounds fast.

SQL Accounting is designed as an accounting ledger, not an order management system. Its pro forma feature is a workaround, not a purpose-built tool. The interface is not optimised for rapid order creation, and it doesn't support the kind of structured customisation fields JDX needs.

### "Customisation remarks typed as free text — no structure; details drop at handoff"

**Background:**
There is no standard format for remarks in SQL. One assistant might write "gold ribbon, HRY card, no price tag." Another might write "ribbon: gold — card: Happy Hari Raya — price tag: remove." A part-timer might abbreviate in a way that's ambiguous to the warehouse. None of these variations are caught by the system — they're caught by a human, or they're not caught at all.

The warehouse team reads these remarks on a printed delivery order or a screenshot. If the remark is cut off, unclear, or missing, they either guess or call the coordinator. During peak, the coordinator is busy. The call goes to voicemail. The warehouse makes a decision. Sometimes it's wrong.

### "No central order log — orders arrive via WhatsApp, Facebook, website"

**Background:**
This means there is no single view of what orders exist, what stage they're at, and what's outstanding. If Mr. Kong wants to know how many pro formas are open right now, someone has to check SQL manually and cross-reference with the team's memory. There is no dashboard, no pipeline view, no alert system.

For a part-timer who joins during peak, this is especially disorienting. They don't know which orders are their responsibility, which are urgent, or which have already been handled by someone else. Duplications and missed orders both happen.

---

## Slide 5 — Demo 2: Payment + Invoice

### "Customer sends payment slip to a WhatsApp payment group"

**Background:**
The payment advice WhatsApp group is a dedicated group — not the general operations group. Customers are instructed to send bank transfer screenshots there. During peak, multiple corporate customers may send slips within the same hour. The group becomes noisy fast.

Customers sometimes send slips with incorrect amounts (they miscalculated the discount, or they paid a round number instead of the exact pro forma value). These create additional back-and-forth before the order can move. All of that conversation happens in WhatsApp, outside any system.

### "Coordinator manually matches each slip to the right pro forma"

**Background:**
The matching is done by memory and cross-referencing. The coordinator looks at the customer name on the bank slip, opens SQL, finds the open pro forma for that customer, checks the amount matches, and marks it paid. If there are two open pro formas for the same customer (e.g. they ordered two separate hamper configurations), the coordinator has to determine which slip corresponds to which order.

There is no unique reference number that the customer puts on their bank transfer. Most corporate transfers just include the company name and sometimes a partial description. The matching process is often a judgment call.

### "Someone stands by overnight during peak to keep orders moving"

**Background:**
Corporate buyers don't process payments during business hours only. Finance departments often run approval workflows in the evening. Payments arrive at 10pm, 11pm, midnight. If no one processes them until the next morning, the delivery order doesn't get created, and the warehouse queue for that day is shorter than it should be.

JDX's solution has been to have a coordinator available late into the night during CNY and Hari Raya weeks. This is not a formal roster — it's a cultural expectation. Senior staff absorb the burden. It's one of the reasons Mr. Kong wants to reduce dependency on people for this step.

---

## Slide 6 — Demo 3: Remarks Propagation

### "Same remarks retyped or copy-pasted at 4 handoffs"

**Background:**
The four handoffs are: (1) pro forma creation in SQL, (2) delivery order creation (coordinator manually replicates remarks from pro forma), (3) warehouse briefing (coordinator sends DO screenshot or printout to warehouse team), (4) packing team allocation (team lead reads out or rewrites remarks for each packer assigned to that batch).

Each of these steps is a manual data transfer by a human. There is no automated flow. The accuracy of the remarks at step 4 depends entirely on whether steps 1–3 were all executed correctly by four different people under time pressure during peak.

### "Details drop — warehouse discovers missed instructions mid-pack"

**Background:**
Mr. Kong described a specific failure mode during the RG session: the warehouse team is mid-way through packing a batch when they realise the remarks say "pineapple tart substitute" for some recipients, but they have already packed mushrooms for the whole batch. They have to stop, pull out the affected hampers, repack them, and re-seal. Meanwhile, the next batch of delivery orders is queued and waiting for that packing station.

This is not a warehouse discipline problem. The warehouse team is working from the information they received. If the remark was missing from the delivery order because it didn't get copied across, they could not have known. The failure is systemic, not individual.

### "Batch has to be unpicked and repacked; next batch already queued"

**Background:**
JDX packs hampers in batches timed to delivery schedules. During peak, the packing floor is running batches back-to-back. A repack on one batch disrupts the entire queue. The next corporate order's delivery date may be at risk if the repack takes too long.

This downstream consequence — a delivery date missed because a remarks field was incorrectly copied — is the operational cost of the current system. It's rarely attributed to the root cause (the data handoff failure) because by the time the delivery is late, everyone is focused on firefighting, not root cause analysis.

---

## Slide 7 — Demo 4: Multi-Drop Delivery

### "One corporate order = 50+ delivery addresses on a spreadsheet"

**Background:**
The spreadsheet is typically built fresh for each large corporate order. There is no standard template — coordinators build it however they prefer. Some use Google Sheets, some use Excel. The structure varies. When a part-timer takes over mid-peak, they're working with a spreadsheet they didn't build, in a format they're not familiar with, for an order with 50 rows of recipient details.

Address data comes from the corporate customer in various formats: some send Excel files, some send tables in WhatsApp messages, some call in addresses verbally. Coordinators transcribe these into their spreadsheet. Data entry errors — wrong postal code, wrong building name, wrong unit number — cause failed deliveries that are only discovered when the driver is on-site.

### "No live view of what's pending, in progress, or complete"

**Background:**
The spreadsheet status column is updated manually by the coordinator as information comes in from drivers via WhatsApp. If the coordinator is handling another issue when a driver sends a delivery confirmation, that row stays un-updated until the coordinator gets back to it. The "current view" in the spreadsheet is always behind real time.

Management has no visibility. If Mr. Kong wants to know how many of the 50 drops for a specific corporate order are complete, someone has to look up the spreadsheet and count manually. There is no dashboard, no completion percentage, no alert for drops that are overdue.

### "Failed deliveries rescheduled by phone — no record kept"

**Background:**
When a delivery fails — recipient unavailable, wrong address, refused at security — the driver calls the coordinator. The coordinator calls the customer's recipient or the corporate buyer's contact person. A new date is agreed verbally. The coordinator updates the spreadsheet row with a note.

There is no structured failure reason captured. No standard rescheduling workflow. No notification to the corporate buyer that a drop failed. If the same drop fails a second time, the coordinator has to reconstruct the entire context from memory and old WhatsApp messages. For a 50-address order with 3 failed deliveries, that's three separate recovery threads running in parallel with no system tracking any of them.

---

## Slide 8 — Demo 5: Delivery Tracking

### "Coordinator scrolls WhatsApp to match driver photos to the right drop"

**Background:**
JDX uses a WhatsApp group for its delivery team during peak. Drivers send proof-of-delivery photos — a photo of the signed delivery note, or a photo of the delivered package at the address. The group receives dozens of these photos on a busy day.

The coordinator has to open each photo, read the delivery note reference or the address visible in the photo, then match it to the correct row in the relevant spreadsheet. If multiple drivers are active simultaneously, photos from different orders arrive interleaved in the same group.

This is the most manually intensive part of the logistics coordinator's day during peak. It requires sustained attention and good memory. It is not something a part-timer can be handed with minimal training.

### "Outstation: chasing 3PL for tracking numbers and screenshots"

**Background:**
For deliveries outside Klang Valley, JDX uses J&T Express, Skynet, and CityLink. The coordinator books these couriers separately (externally, not through MAIA in Phase 1), receives tracking numbers from the couriers, and manually logs them against the relevant delivery row in the spreadsheet.

Tracking status for outstation parcels comes from the courier's own tracking system. The coordinator has to check multiple courier portals for parcels from a single corporate order. There is no aggregated tracking view. If a corporate customer calls to ask about a specific recipient's delivery, the coordinator has to look up the courier portal, find the tracking number for that parcel, and relay the status — all while managing everything else during peak.

### "Failed deliveries rescheduled by phone — no record, no context retained"

**Background:**
Same issue as slide 7, but at the tracking level. After a delivery is marked failed in the system (or not — sometimes it just stays in limbo until the coordinator notices), rescheduling requires reconstructing the context: what was the original delivery date, why did it fail, what was agreed as the new date, who was notified.

None of this is structured. It lives in the coordinator's memory and across scattered WhatsApp messages. During a peak season where hundreds of deliveries are happening, carrying that context for three failed drops simultaneously while managing the rest of the queue is genuinely difficult. People get things wrong. Coordinators burn out.

---

## Slide 9 — Phase 1 Scope

### "Sales Agent + Logistics Agent WhatsApp Chatbots"

**Background:**
MAIA's WhatsApp chatbots are not separate apps or portals — they are natural language interfaces to the same MAIA backend, accessible from the messaging platform JDX's team already lives in. This matters for JDX specifically because:

1. Part-timers hired for peak don't need to learn a new system interface — they can interact with MAIA through WhatsApp, a platform they already use.
2. After-hours operations (payment confirmations, late delivery status updates) can happen without a coordinator logging into a web app from a laptop.
3. Mr. Kong explicitly mentioned reducing dependency on senior staff for routine steps — the chatbot is the mechanism that allows junior staff or part-timers to perform MAIA operations with guardrails.

### "PDF output: Pro Forma, Invoice, Receipt, Credit Note, DO, Pick List"

**Background:**
JDX issues multiple document types across the order lifecycle. The pro forma is the customer-facing payment request. The invoice is the official billing record after payment. The receipt acknowledges payment received. The delivery order travels with the goods. The picking list guides the warehouse team.

Today, these are generated separately in SQL (pro forma, invoice) or created manually (delivery order, picking list). In MAIA, all six documents generate from the same data record. The customisation remarks entered at SO stage print on every document that needs them — warehouse sees remarks on the picking list; driver sees them on the DO; customer sees them on the invoice.

### "Phase 2: Consignment kiosk stock reporting"

**Background:**
JDX's kiosk promoters at Giant and AEON file daily WhatsApp reports — opening stock, inflow, adjustments, closing stock, top-up request. The ops coordinator reads each report, validates it against the previous day's closing, and approves or negotiates the top-up quantity. This is a real pain point but Mr. Kong ranked it below the billing and delivery bottleneck.

Phase 2 scope for kiosk reporting requires designing the promoter-facing input format (likely a structured WhatsApp form or a simple mobile interface), the ops approval workflow, and the stock reconciliation logic against MAIA's inventory module. That design work hasn't been done yet.

### "Not in scope: SQL accounting integration"

**Background:**
SQL is JDX's accounting system — it records journal entries, tax codes, and stock transfer entries. It is not used for live order management, real-time inventory, or operational decisions. Those run through WhatsApp and Excel. MAIA replaces the operational layer (order creation, billing, delivery) without needing to integrate with SQL for Phase 1.

Post-Phase 1, if JDX wants invoice records or van sales transactions to auto-sync to SQL for the accounting team, that's a Phase 2 integration item. The tech team would need to scope the SQL API or flat-file sync capability before committing to that.

---

---

## Raw Transcript Excerpts

Verbatim quotes from the RG session on 2026-03-27 (Fireflies transcript, ~109 min). Source: `[[JDX Meeting Transcript - YYYY-MM-DD]]`. Speaker: **kong kong** = Mr. Kong (JDX). Timestamps in original.

---

### Peak season volume & staffing

> **kong kong (46:23):**
> "Just our seasonal business. It will be close to like maybe hundred of orders in a day during the pickers of the few pickers day of the year. Other than that, after off season they might not be even one order a day. No order for next few months say."

> **kong kong (51:47):**
> "Actually the regular one with or without AI I don't think it can help us. I mean in terms of efficiency wise, I don't think it will make a great difference — it's just that, you know, during all these seasonal occasions, like what you said, we need to suddenly find a lot of operational and sales assistant because we need people to, you know, support different outlets, promoter their query. Maybe you have stock or not and then they need to open bill. Sometimes the customer would contact them after office hours to confirm their order. And then you have to need someone to stand by the next day early in the morning or the midnight itself to issue invoice for customer and then they will have to resend to the customer. So this is the part I think whereby the system can might be able to help."

> **kong kong (01:08:26):**
> "So what we do now is that we will hire a bunch of newbies during this festival period. And then these people would we will train them like educate them of the potential possible scenario. And then we'll divide all these outlets, say like five outlet or six outlets with promoters being taken care by one coordinator."

---

### Pro forma invoice + remarks column

> **kong kong (53:48):**
> "That one normally we will do will not reflect on the stock code itself, it will reflect on the pro forma invoice. Because before the customer pay, we normally don't give them an invoice. What we do is we give them a pro forma invoice that serves like a sales order. But because a lot of customers say hey, I need to invoice my account department in order to give you a payment. So instead of having a sales order, normally we have pro forma invoice instead. Because the customer site would like to see the word invoice before they can proceed with payment. But our rules is that we need to see their payment before we can deliver the stock. So we only have pro forma invoice most of the time. And then all these specific requirements would be written in a remark column under the pro forma invoice, including say if they're specific when it has to be sent... Because our general rule is that we send our stocks maybe in five to seven working days. But say that certain customers, they are very nervous one, they want it very urgent basis. So we promise them the next day delivery sale. So it will be specified in the pro forma invoice. And then say if, let's say that ribbon color they want to change or the organza color they want to change... Or some of them, they prefer us not to use the organza. They want us to shrink wrap the hamper using the transparent, you know, the plastic kind of paper... And then maybe some of them, they specify the greeting cards that they have certain wording or certain, you know, blessing preference, they want us what to write on there. And then some of them, they might specify whether we want to take out the price tag or not."

---

### Remarks flowing through to warehouse and ops

> **kong kong (56:20):**
> "Yes, yes. So that once we saw this pro forma invoice, okay, once the customer saw this pro forma invoice, they are contented because they think that whatever specific instructions that they given us, we already stated it out. Okay. And then once they make payment already this pro forma invoice being converted into invoice. And then when we start doing delivery, the same piece of instruction will also flow to each of our department so that the delivery guy, the operational guy, you know, all of us, we can check, hey, whether this batch of stocks is being you know, addressed and arranged, being prepared according to all these specific requirements."

---

### Hamper customisation — repack scenario

> **kong kong (57:12):**
> "It has been packed. One normally has been packed. It's just that whether our standard products meets their requirement, if it doesn't meet their requirement, then we have to go to production and say hey, you see, despite our stocks having 300 pieces of 108 hamper now got one customer, they want to order 50 pieces. Say, for example, so my warehouse rightfully I have enough stocks for him, right? But because his customised requirement, my standard product is not, you know, what's not suitable for him. It's not what he want. And I already promised that I accept his order. But I need to change the mushroom to pineapple cuts. So I will not dismantle 50 out of the 300 pieces... Rather I would process another 50 pieces according to this requirement."

---

### Payment matching + two WhatsApp groups

> **kong kong (01:27:55):**
> "Pro forma invoice first, then only the delivery pack... they collect all the payment advice already. Then they matches against the pro forma invoice already. Then only they come up with the delivery order."

> **kong kong (01:27:34) [full context]:**
> "All this WhatsApp conversation group we have with our promoter, each of them different outlets. So once they request their billing requirement ready, then our accounts assistant will send out the bill to their group... And then once their customer receives the pro forma invoice ready, then they will send back to our accounts... So then the other group would be the payment advice group whereby they collect all the payment advice already. Then they matches against the pro forma invoice already. Then only they come up with the delivery order."

---

### Multi-drop delivery — the single order, many addresses problem

> **kong kong (01:15:07):**
> "There's customer that order 50 or 100 pieces from us. Then 50 pieces deliver all to different place one. Then another 50 pieces go to outstation one and then maybe outstation a part of it they go to their sales office. So like eight piece eight piece a particular location. Then the rest is all like separate one go to other places. So like all these are those single order one. Then that one we would have a separate operation team who do the packaging, the carton box piling up and then we'll deliver to the express company, our career service partner. So once they are done they send us back the consignee bill already or they have a system in place. Then we will send a link to our customer telling them on the delivery status — that would need a lot of coordinator to do the follow up work because sometimes we don't send to the customer but the customer will come and chase us."

---

### Delivery proof — WhatsApp photo group

> **kong kong (01:15:37):**
> "The coordinator they would have to go and find out what's the delivery status like. They have to talk to our express — I mean the career service partner. And then they will need to collect their evidence because we have partners who send locally one — they would pass over to the recipient already. Then they will take photo one so we have one group for all this photo. The customer wants delivery proof. Then we'll have to update them with the photo or the consignee note — like JT, like Skynet — they also have their own system one so we can screenshot the system or we can give them the tracing checking number the customer from can check from their end for those outstation cases."

---

### Failed delivery — "chaotic even if infrequent"

> **kong kong (01:12:32):**
> "There's only cases whereby special cases are that it's up a lot of time and complication I create — is that maybe we mistaken the order already we send there but we send something else wrong. So customer refused to sign and then we take back the stocks and then we arrange another day delivery. So this is a bit chaotic. Or maybe we send it but then we send at the wrong date. Then they say they don't want to receive now so I have to send back now... this special case despite the number can be just a few but it takes up a lot of time."

---

### Tiered discounts

> **kong kong (01:36:57):**
> "We have a general rule. Say for example any purchases of a single piece of hamper above 200 ringgit our customers is entitled for free delivery. But that free delivery is only entitled within Klang Valley area. Say for example then if let's say we have customers who order below 500 value ringgit value of stuff they are normally entitled for 5% discount. Then above 500 to 1500 maybe the most percentage they could get is 10%. And then those order above 1500 then it's 15%. So this is like fixed being a general rule of thumb. But then if let's say they order maybe some customisation — or they bring their own wine, you know, own souvenirs, and they need our team to redesign how the hamper looks — and then that is different. So then they are not entitled for the discount."

> **kong kong (01:37:34):**
> "But this kind of occasion we can only do you know like human intervention. We cannot expect the AI to tell us what to do."

> **kong kong (01:37:48):**
> "Every season change one. If let's say that there's one occasion whereby that time is during the COVID period because everyone was doing online and online 80 100 dollars people said free already. So we have to adjust our 200 benchmark to 150 despite we know that actually affects a lot of our margin. So every time the occasion change, we do prompt decision as into whether to change or not."

---

### SQL — accounting only, not inventory

> **kong kong (01:16:45):**
> "No, we do manual checking only. Our SQL only captures accounting part their boom code. We don't use their production. All this is being done manually."

> **kong kong (01:17:35):**
> "I mean it is critical, but it's not critical to an extent that we need to use system to handle this... last time we tried updating all our procurement stuff and all these items into our system. But then the system becomes so messy that actually doesn't compensate the effort of being accurate."

---

### The core ask — Mr. Kong's own words

> **kong kong (01:24:48):**
> "You to make things shorter and sweeter — to make things simple. If let's say your MAIA can replace and you know like optimize our human power in terms of billing and in terms of order tracking meaning a delivery status tracking. If these two parts MAIA can do, you know, much more efficient than you know, having us to temporary hire a lot of newbies to do this, then that would help a lot already."

> **kong kong (01:29:08) [on "Jarvis" expectation]:**
> "The way Jeremy was telling me, I imagine MAIA as if like a Jarvis to the iron man. So it's like I talk to the air only then suddenly everything is there already. But I know in actual it cannot be so simple — say if let's say it's only changes in terms of how we do things only — maybe last time we carry from left hand to right hand. Now with the system we carry right hand from left hand. So what's the purpose?"

---

## See Also

- [[JDX Demo Script]] — Slide-by-slide presenter script
- [[Customer Narrative - JDX]] — Full narrative with Mr. Kong quotes
- [[JDX - Customer Profile]] — Company overview and stakeholder map
- [[SOW for MAIA JDX]] — Full scope and feature list
- [[JDX Meeting Transcript - YYYY-MM-DD]] — Full raw Fireflies transcript

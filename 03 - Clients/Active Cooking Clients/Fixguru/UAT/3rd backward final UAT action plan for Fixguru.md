Below is the **lead-review action plan** based on the **24 June 2026 Fireflies transcript** and cross-checked against existing Fixguru UAT gaps / scope documents.

## Source truth summary

Main conclusion from 24 June UAT: **client still cannot proceed confidently because the first sales-order pricing step is not solved.** The blocker is not only “data correctness”; it is **how MAIA presents historical price, discount, net price, and next action in a way sales users can understand in one glance.**

This repeats earlier UAT gaps: Fixguru needs historical pricing + discount %, item-level discount, AutoCount-style document/ID alignment, correct customer/branch/contact sync, delivery method as item/SKU, credit limit exposure, and simpler chatbot actions. The 2nd UAT plan also already marked item historical pricing, customer pricing enforcement, credit limit exposure, language preference, HQ + branch contact, delivery method SKU, and PDF template as in-scope items needing retest/fix. The functional requirement baseline also supports credit-limit approval, minimum price approval, order-to-DO flow, stock reminders, and WhatsApp/internal workflow as core requirements.

---

# Fixguru Action Plan — Product Side

|Priority|Product action|Why it matters|Output for tech|
|---|---|---|---|
|P0|**Redesign pricing decision flow**|Client said users abandon when too much text / unclear pricing. First step must be fixed before next flow.|Final UX spec for “Historical Pricing Review before QTN/SO creation”.|
|P0|**Define exact historical pricing table fields**|Client wants quick comparison, not long chatbot text.|Table columns: Date, Item Code, Qty, Standard Unit Price, Discount %, Net Price, Source Doc / Invoice ID.|
|P0|**Clarify source of historical pricing**|Client confirmed historical price should come from actual invoice / transacted history, not only order draft.|Rule: pull last 5 invoice transactions per customer + item where possible.|
|P0|**Simplify chatbot copywriting**|Client users “don’t like reading”; chatbot must work one step at a time.|Rewrite chatbot prompts into short action format: “Review price → choose discount → generate QTN/SO”.|
|P0|**Decide hybrid UX pattern**|Chat alone cannot show rich tables well. 24 June discussion suggested chat + web/table view.|Product decision: WhatsApp for command/input, web view or image/table card for pricing review.|
|P1|**Define delivery method recommendation UX**|Client wants last 3–5 delivery methods to help decide courier / Lalamove / pickup.|Add “Historical Delivery Method” section: last 5 orders with delivery method and charge item.|
|P1|**Define customer search behaviour**|Client often only has WhatsApp/phone number, not exact customer name.|Search priority: phone/mobile → customer match → branch/contact match → show confirmation.|
|P1|**Define approval UX**|Credit and minimum-price approval cannot block too early; quotation can be prepared, but SO/DO confirmation needs control.|Approval states: Draft allowed, Submit/Convert blocked if price below minimum or credit breached.|
|P1|**Confirm scope vs CR**|Avoid another UAT mismatch.|Mark as: must-fix in current scope vs future CR. Especially calculator versioning, extra calculators, raw material planning.|
|P2|**Create retest script based on real Fixguru flow**|Previous test was too feature-by-feature, not user-flow-based.|One golden test script: WhatsApp order → historical price review → discount select → QTN PDF → delivery method → SO approval check.|

---

# Fixguru Action Plan — Tech Side

|Priority|Tech action|Expected fix|Acceptance criteria|
|---|---|---|---|
|P0|**Historical pricing API/data fix**|Return last 5 invoice-level transactions by customer + item.|For each ordered item, MAIA shows date, qty, standard price, discount %, net price, source doc ID.|
|P0|**Discount calculation fix**|Discount must be treated as percentage when user gives %, not wrongly as RM amount.|3%, 5%, 10% discounts calculate correctly against standard unit price / price list rate.|
|P0|**Item-level discount support**|Different items can have different discount %.|Same order can hold item A 3%, item B 10%, item C no discount.|
|P0|**Chatbot response formatter**|Replace long paragraph responses with short structured table/card.|User can understand all item pricing info in one glance without scrolling through long text.|
|P0|**Order creation flow guardrail**|Bot should not proceed too early before price confirmation.|Bot asks: “Use which discount/net price?” before generating QTN/SO.|
|P0|**Hybrid table/web view feasibility**|Render pricing table in web UI or image/card if WhatsApp table is poor.|Product + tech agree one implementation path within current timeline.|
|P1|**Customer search by phone/mobile**|Match customer using WhatsApp number / phone / mobile.|User can paste phone number and MAIA finds correct customer and branches.|
|P1|**Branch/contact sync check**|Correct branch delivery address and contact person must populate.|SO/DO uses selected branch contact, not HQ contact by default.|
|P1|**Delivery method as SKU/item**|Lalamove / courier charge must be added as charge item, not only delivery method label.|Delivery charge appears as item line with correct item code/accounting treatment.|
|P1|**Historical delivery method retrieval**|Surface last 5 delivery methods by customer.|Bot/table shows previous delivery method and delivery charge item where available.|
|P1|**Credit limit / AR exposure calculation**|Show AR, current pending DO/SO amount, credit limit, available balance, and whether approval is needed.|Approver can see enough info to approve/reject without opening AutoCount.|
|P1|**Minimum price approval block**|Below-minimum item price requires approval before final submit.|Quotation draft allowed; final SO/DO submit blocked until approval.|
|P1|**AutoCount external ID consistency**|Use Fixguru’s running number / external doc ID after push.|Submitted doc displays AutoCount ID, not only MAIA internal ID.|
|P2|**Warehouse / shelf configuration review**|Confirm AutoCount warehouse/shelf model and map correctly.|Picking list / DN can show shelf/warehouse info correctly.|
|P2|**Performance test on real usage**|Sales team handles many active orders and 30 invoices/day.|Chatbot/web response remains usable under concurrent order scenarios.|

---

# Immediate execution plan

## Day 1 — Alignment lock

**Product lead + tech lead + PM align on one critical outcome:**

Fix the **pricing decision step** first. Do not spread effort across all remaining features until this is usable.

Product to deliver:

- Final pricing table mockup.
    
- Final chatbot prompt wording.
    
- Exact happy-path flow.
    
- Scope classification: must-fix / defer / CR.
    

Tech to confirm:

- Where historical invoice data comes from.
    
- Whether discount %, net price, standard price are available reliably.
    
- Whether WhatsApp can display the table cleanly, or whether web/image table is needed.
    

## Day 2–3 — Build P0 fixes

Tech focuses only on:

1. Historical pricing API.
    
2. Discount calculation.
    
3. Item-level discount.
    
4. Short chatbot response/table formatter.
    
5. Stop premature QTN/SO generation before price confirmation.
    

Product supports with live examples and expected output.

## Day 4 — Internal retest

Run one full Fixguru scenario:

Customer sends WhatsApp order → MAIA identifies customer → shows last 5 historical prices per item → user chooses discount → MAIA generates QTN/SO → PDF/checkpoint → delivery method selected → approval check if needed.

Pass criteria: **user should not need to open AutoCount for pricing decision.**

## Day 5 — Client retest

Show Fixguru only the corrected flow first. Do not demo all features. The goal is to prove that the main blocker is fixed before moving to delivery, credit, PDF, and warehouse flows.

---

# Lead-review recommendation

For product and tech leads, I would treat this as the current **P0 recovery scope**:

1. Historical pricing + discount decision UX.
    
2. Correct item-level discount calculation.
    
3. One-glance chatbot/table output.
    
4. Phone/customer search.
    
5. Delivery method as item/SKU.
    
6. Credit/minimum price approval visibility.
    

Everything else should be secondary until Fixguru confirms the first sales pricing flow is finally usable.
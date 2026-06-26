**


Meeting: Fixguru UAT (on-site) Mindhive: Bryan (tech/product), Gareth (junior PM), Ivan (organizer) · Fixguru: Yvonne & Marcus (sign-off authorities) Sources: Fireflies transcript (01KVVSWST9…) + Ivan's raw notes + whiteboard sketches + AutoCount credit-control screenshots

  

---

## Headline verdict

The showcase did not meet requirements. The step-1 blocker — surface historical pricing per item and let sales confirm a discount in a single glance — is the same issue raised on 7 Apr, failed on 14 May, and worked again on 16 Jun. It is still not delivered. Every downstream conversation (delivery method, credit, picking, e-invoice) is blocked behind it.

  

Client sentiment: patient but eroding. Fixguru (Yvonne/Marcus): "I speak many times the same… I don't know how to tell you." Mindhive acknowledged the root gap openly — a disconnect between the developer view and the real blue-collar user. That candour is good; it does not reset the clock.

  

Commercial stake: Milestone-2 (RM24,000) is contractually tied to UAT completion. Four UATs in, we have no signed acceptance on step 1.

  

---

## Understanding Fixguru — what we must build for

This meeting was, more than anything, a lesson in who the user is. Three things to internalize across product and tech:

  

1. The real competitor is AutoCount, not "no system." We are not replacing nothing — we are replacing a tool that already works and is faster for them today. The bar is not "MAIA integrated with AutoCount"; it is "MAIA beats AutoCount at the daily quoting bench." The moment MAIA is slower or more confusing than keying it into AutoCount, the user reverts — and we lose. Every design decision is measured against that fallback, not against a blank slate.

  

2. The user is the constraint — design for the lowest-literacy person in the chain. Fixguru's sales users are blue-collar; they don't like reading and want quick action. Ivan's framing: if a head of department needs five minutes to digest a screen, their team needs far longer. So MAIA must be super direct — single message, one-glance, yes/no. Anything that asks them to read, parse, or hunt across numbers gets abandoned. This is the disconnect Bryan named out loud: rich data feels easy to people who write code; to the real user it's "a scare." One-glance simplicity is an acceptance condition, not polish.

  

3. What they are actually buying is one decision, made fast. Strip away the features and the job-to-be-done is: "For this customer, this item, this volume — what discount do I give, and let me confirm it in seconds." Pricing at Fixguru is customer-specific, volume-based, and drifts over time, so that decision is the heart of the sales work — and it can only be made well with history (past invoice price, discount %, qty, date) in front of them. Everything else (PDF, delivery, credit) is downstream of getting this one moment right.

  

What matters most to them, ranked:

  

|Priority|What they care about|What it means for MAIA|
|---|---|---|
|1|Make the discount decision fast, with history visible|Invoice-sourced historical table, one glance, per item|
|2|Speed & simplicity over completeness|Single message, yes/no, no grand-total noise|
|3|Reach the customer record by phone|Phone-first retrieval; customers are WhatsApp numbers, often nameless|
|4|Keep money moving|Don't block orders early; approve credit on cash-in (bank-in slip)|
|5|Operational fidelity to how they actually work|Delivery-method history, FOC, custom items, AutoCount parity|

  

The mindset shift for Mindhive: their operational instincts — don't block the order, approve on bank-in, surface the last five, default to one-glance — are not edge cases or "unusual requests." They are revenue logic and floor-level usability from people who run this business daily. Build to their reality, not to what is elegant to engineer. The fastest path to sign-off is to stop translating their workflow into our system and start mirroring it.

  

---

## The pattern that actually matters

This is no longer a feature gap. It is a delivery-credibility problem with one repeating root cause: we keep demoing the standard chatbot flow and patching at the prompt level, when the client needs (a) a purpose-built historical-pricing surface and (b) a radically shorter confirmation path. The account history already flagged this — "historical pricing needs a first-class module, not prompt-level patching." The 24 Jun meeting confirms the patch approach has hit its ceiling.

  

|UAT touchpoint|Step-1 status|
|---|---|
|7 Apr (brief)|Raised as cannot-sign-off condition|
|14 May (on-site)|Failed; "wasting time"; AutoCount faster|
|16 Jun (retest)|Still being tested|
|24 Jun (this meeting)|Still not delivered — "same as last meeting"|

  

---

## The one acceptance bar to lock (what "done" means for step 1)

Make this explicit and get it signed before the next build. From the transcript + whiteboard sketches, the target flow is:

  

1. User pastes order + phone number, e.g. 011-xxxx — G3 100, G1 300, PM72 500.
    

  

2. MAIA retrieves the customer by phone number (mobile/landline), not name.
    

  

3. Per item, MAIA returns a one-glance historical table sourced from invoices (not orders) — mirroring AutoCount's per-item quick view, which lists the last 10 invoices with date, qty, price and discount:
    

  

|Date|Std unit price|Discount %|Net price|Qty|
|---|---|---|---|---|
|06/2026|RM0.10|3%|0.097|100|
|05/2026|RM0.10|10%|0.090|1000|
|01/2025|RM0.05|5%|0.0475|500|

  

Benchmark: replicate AutoCount's quick view — up to the last 10 invoices per item. 5 rows is the acceptable working minimum at this phase (client: "3 is too few, 5 is good"). Date matters — it signals price drift vs. the current standard price.

  

4. MAIA asks one question: "Which price should I proceed with?"
    

  

5. User replies per item (G3 3%, G1 5%, PM72 none) → MAIA generates SO/quotation → PDF.
    

  

Hard UX constraints (non-negotiable per client):

  

- Single message, readable in one glance. No grand-total noise (total lives in the PDF).
    
- Columns shown: standard price, discount %, net price. Nothing else.
    
- Yes/no interactions only. Too many words = abandonment → user reverts to AutoCount.
    
- "Not found = not found." No over-enrichment of prior records.
    

  

---

## What's new / sharpened this meeting (beyond the repeat blocker)

- Direction decided — chat enrichment, NOT dual interface. Bryan floated a chat-input + rich-web (≈70/30 "co-work") split. Ivan's call: the dual interface is far-fetched and masks the shortcomings of both platforms — it should remain a possible mode of usage, not the solve. The mandate is to make the chat interface itself surface and handle rich tabular information the way a web view can. The concrete benchmark already exists: AutoCount's per-item quick view (last 10 invoices: date, qty, price, discount). Replicate that in chat.
    
- Phone-number-first retrieval: customers WhatsApp in, often with no name/company; existing customers can look new. Search by phone (mobile + landline columns).
    
- Historical delivery-method surfacing: show last 5 confirmed delivery methods (courier / Lalamove / self-pickup) so sales can recap with the customer.
    
- Customer context bank: minimum 5 confirmed documents per customer, considered at every turn (pricing + delivery method).
    
- Credit / approval logic — now evidenced by AutoCount screenshots: Credit control is enabled at Delivery Order and Cash Sale level only — Quotation and Sales Order are unchecked (confirms "block at DN, not order"). Override mechanism is "Need Password" (i.e. approval). When a DO violates the limit, AutoCount fires a Document's Credit Control Approval dialog showing the full exposure breakdown — Outstanding in A/R, D/O, S/O, PD cheque, Total Outstanding, Original/Increased Credit Limit, and Exceeded Credit — with Approve / Reject. This is the exact flow MAIA must mirror. AR-negative (customer prepaid) and credit-exceed cases are approved case-by-case on the bank-in slip.
    
- Minimum price by item: e.g. G1 standard 0.33, floor 0.27 — below floor needs approval, but the quotation can still be generated pending approval. No maximum price. (Min-price block is separate from credit control; screenshot still to come from Azib.)
    

  

---

## Actionables

### CLIENT — Fixguru (owner: Ivan to chase)

|#|Item|From|Why it's blocking|
|---|---|---|---|
|C1|Real WhatsApp order-intake message samples, to capture & store as a format reference|Yvonne|Defines the actual intake string MAIA must parse|
|C2|Min-price block screenshot + which roles can bypass min price|Azib|Credit-control config now received; min-price block still missing|
|C3|Minimum price floor per item (std + floor, e.g. G1 0.33 / 0.27)|Marcus / Yvonne|Approval logic can't be built without floors|
|C4|Standard price list (global, fluctuating) — share in group|Marcus / Yvonne|Needed to compute discount % vs. current standard|
|C5|Updated RSC/Diecut formulas + volume metrics (carryover from prior UAT)|Fixguru|Calculator accuracy still pending|
|C6|Agree a written acceptance plan + sign-off date with Yvonne & Marcus (the signatories)|Ivan ↔ Yvonne/Marcus|No signed acceptance = milestone-2 stays unpaid|

### PRODUCT (owner: Ivan / product team)

|#|Item|Note|
|---|---|---|
|P1|Lock & socialize the step-1 acceptance bar above before any further build|This is the single highest-leverage action|
|P2|Make the chat interface surface AutoCount-quick-view-level richness (last 10 invoices: date/qty/price/discount, per item, one glance). Dual web interface is a possible future mode, not the solve|Ivan's explicit call: dual interface masks both platforms' weaknesses — fix chat, don't route around it|
|P3|Spec the customer context bank: min 5 confirmed docs, evaluated each turn (pricing + delivery method)|Shared dependency across pricing & delivery features|
|P4|Spec phone-first customer retrieval (mobile + landline) + fallback when existing customer looks new|High client value, "very easy for us" per Bryan|
|P5|Write the block-level rule: DN, not order|Direct client instruction; prevents lost-revenue blocking|
|P6|Define approval workflow: below-floor price OR credit-exceed → generate quotation/SO pending approval → route to Ivan|Must not hard-stop the user mid-flow|
|P7|Conciseness/UX rules as product policy: one-glance, single language, "not found = not found", no enrichment|These are acceptance conditions, not nice-to-haves|
|P8|FOC rule: production overage free (order 1000, produce 1050 → free 50); bill billable qty, deduct billable + FOC from stock|Small commercially, important operationally|
|P9|Custom-item handling: base item (e.g. G5) spawns {Customer Name} G5 variants|Affects item retrieval & matching|
|P10|Item-retrieval fallback: on no exact match, return the customer's historically ordered items|Reduces dead-ends in the flow|

### TECH (owner: Jermaine + leads)

|#|Item|Lead|
|---|---|---|
|T1|Build historical pricing as a first-class module sourced from invoices, rendering a clean table that mirrors AutoCount's quick view (last 10 invoices: date/qty/price/discount) — stop patching at prompt level|Afiq / Wei Yon|
|T2|Investigate WhatsApp latency vs. Telegram (observed slower on WhatsApp)|Wei Yon|
|T3|Fix language bug: quick replies switching to Malay mid-English conversation|Afiq|
|T4|In-chat rich rendering — make WhatsApp display the historical table legibly (table-as-image / label rendering if needed) so chat matches the web's information density. Dual interface deprioritized to optional future mode|Afiq / Amirul|
|T5|Warehouse/shelf config: sub-warehouse tree, branch-level picking (weight, cubic, shelf) — identify correct AutoCount module|Wei Yon|
|T6|Credit/approval module mirroring AutoCount: enforce credit control at DO + Cash Sale level only (not Quotation/SO); "Need Password" = approval gate; on violation, surface the exposure breakdown (A/R, D/O, S/O outstanding, total outstanding, credit limit, exceeded credit) and route Approve/Reject to management. Handle AR-negative (prepaid) + bank-in-slip override cases|Wei Yon|

  

---

## Risk / pre-mortem (this is consequential — relationship + payment + reference value)

It's 12 months later and Fixguru churned or never signed off. What killed it?

  

- We retreated to the dual interface to dodge the hard problem. Ivan has already named it: the split masks the shortcomings of both platforms — it lets us ship something that looks rich without making chat actually work for the floor user. The failure mode is using it as an escape hatch instead of fixing chat's information density. Chat must reach AutoCount-quick-view parity; the web view is optional, not the prerequisite.
    
- We kept prompt-patching the pricing display instead of building the invoice-sourced module. Same ceiling, fifth meeting.
    
- We never pinned a signed acceptance bar with Yvonne & Marcus, so "done" stayed subjective and the demo-fail loop repeated indefinitely → milestone-2 RM24k unpaid, account becomes a reference liability.
    

  

Load-bearing assumptions to verify before committing the next demo date:

  

|Assumption|Status|If wrong|
|---|---|---|
|AutoCount exposes clean per-customer+SKU historical price/discount/qty from invoices via API (the data behind its own quick view)|Unverified|Step-1 module can't be built as specced|
|Chat can render an AutoCount-quick-view-equivalent table (up to 10 rows × N items) legibly in WhatsApp|Unverified|If unachievable in text, needs table-as-image rendering — solve in chat, not via the web fallback|
|Yvonne & Marcus will accept the step-1 spec as the sign-off condition|Confirmed signatories; spec not yet agreed|Lock the acceptance bar with them in writing before the next demo|

  

---

## Open decisions (need an explicit call)

1. How to reach chat parity with AutoCount's quick view — text table vs. table-as-image rendering in WhatsApp. (Decided: not by routing to a separate web interface.)
    
2. Block level — confirmed at DO + Cash Sale (not Quotation/SO) per AutoCount screenshots; lock this in the spec.
    
3. UAT sign-off — authority resolved (Yvonne & Marcus); still need a written acceptance plan + date.
    
4. Min-price block — get Azib's screenshot + role-bypass rules; spec separately from credit control.
    

  
**
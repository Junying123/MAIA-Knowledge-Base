**24 June 2026 - Fixguru Key Takeaways**

**Executive takeaway**

The 24 June session was **not a sign-off meeting outcome**. The main client feedback is that **MAIA still does not solve the real first-step pain point in Fixguru's sales flow: pricing decisioning from historical prices and discounts**. The client's view is basically: if the sales team still needs to go back to AutoCount to check historical pricing, discount, quantity, date, delivery method, and credit context, they will abandon MAIA and just use AutoCount.

This is especially important because the 2nd UAT plan's intended end goal was "Client conducts 2nd UAT → sign-off" and the final UAT phase expected live testing, triage, and sign-off or conditional sign-off. But the 24 June transcript shows the client repeatedly saying the flow is still stuck at the historical pricing step and cannot proceed to the next discussion meaningfully.

**Key takeaways from 24 June UAT**

**Historical pricing is the core blocker, not a nice-to-have.**\
The client said every customer has different and changing discounts, sometimes dependent on volume. They need to see historical quantity, unit price, discount percentage, net/discounted price, and date to decide what price to quote now. They specifically rejected a flow that skips discount or asks them to proceed without seeing the right historical context. This matches the earlier UAT gap where "Historical Pricing & Discount Percentage Not Captured" was already called out, and quoting was said to depend on last transacted price plus discount percentage per customer.

**The chatbot output is too verbose and not operationally usable.**\
The client said their users "don't like reading," want "quick action simple things," and need the output to be simplified. They asked for table-style / one-glance information, not long chatbot paragraphs. This repeats the UAT gap that the client prefers more actionable chatbot responses after each process step.

**MAIA is currently solving the "standard version," but Fixguru's real workflow is non-standard.**\
The client's comment was that MAIA can handle the standard flow, but not the actual Fixguru pricing decision flow. Their most troublesome AutoCount step is manually checking historical item info one by one before generating the PDF/quotation, and they expected MAIA to remove that pain. This is consistent with the original scope-gathering note that each customer has their own pricing and discount set, and that the bot should check credit limit / credit term before issuing documents.

**The proposed solution direction is likely a hybrid chat + interface flow.**\
During the meeting, Gareth/Bryan explored that chat alone may not surface rich item-level information well, especially for many items. The idea discussed was a side-by-side or dual workflow where the chatbot processes the order, while MAIA surfaces richer historical pricing in a structured interface. This should be treated as a **solution-design decision to scope carefully**, because the requirement is locked, but the UX implementation is not yet locked.

**Client wants the historical display to be specific and minimal.**\
For each item, they want something like: current/standard unit price, discount %, discounted/net price, historical quantity, historical date, and maybe latest five historical entries. They explicitly said total/grand total is less important at that stage because the PDF can show it later. Earlier UAT gaps also captured the expected chatbot interface fields as "Standard price, Discount Provided (historical), Nett Price after Discount."

**Search by customer phone number is operationally important.**\
The client explained that many WhatsApp orders come in by phone number, not by exact company name. Sales/back-up staff may not know the customer name, so they need to search by mobile/phone number to identify the customer and then retrieve history. The 2nd UAT plan had "Search customer by phone number" listed as already passing / smoke-check only, but the transcript shows this still matters in the real flow and should be retested end-to-end with historical pricing.

**Delivery method history is also useful, but secondary to pricing.**\
The client said seeing the last few delivery methods would help the team decide whether to use courier, pickup, Lalamove, etc., because some customers have patterns while others change based on urgency. They suggested five historical records would be enough. This relates to the existing gap where Fixguru treats delivery method / delivery charge as an item/SKU, not merely a delivery field.

**Credit approval logic needs to happen at the right stage.**\
The client clarified that orders can be discussed/created, but credit and payment approval becomes critical before conversion / issuance. They described case-by-case approval using AR balance, payment slips, outstanding, credit limit, and current order value. This maps to the SOW acceptance criterion that credit checks block invoice creation when limits are exceeded.

**Client-side feedback**

The client feedback is quite direct:

They feel MAIA still forces too much prompting and reading. They said if the historical pricing message is not "proper," users will get stuck, abandon the chatbot, and go back to AutoCount because prompting takes too much time.

They want MAIA to reduce AutoCount work, not become another place where they still need to check AutoCount manually. The client said the main pain in AutoCount is keying and checking item info one by one, and MAIA has not yet solved that "most troublesome part."

They want one-step-at-a-time simplicity. The client's wording was essentially: simplify the system, simplify the people, simplify the final use. Too many numbers, long explanations, or unclear labels create confusion.

They want pricing labels to match business meaning: "standard/unit price," "discount percentage," and "discounted/net price," not unclear "amount" labels. They also do not care about total price at the decision stage; they care about confirming the item price and discount before generating documents.

They are patient but clearly frustrated because they feel they have explained the same historical pricing issue multiple times. The client said this has been the same issue from the previous meeting and that without solving it, they cannot move to the next part.

**What is locked vs needs scoping**

**Locked / should be treated as committed:**\
Historical pricing must be shown in a usable way. The 2nd UAT plan already listed item historical pricing as in-scope and for retest, and the UAT gaps already documented historical pricing expectations.\
Phone-number customer search should remain locked and tested as part of the real WhatsApp order flow, not just as an isolated function.\
Credit limit / exposure / approval visibility is locked because it is in the UAT plan and tied to the SOW acceptance criteria.\
Delivery method as SKU/line item is locked enough to fix because it was already in the UAT plan as "auto-populate shipping method SKU as line item" and in UAT gaps as a known misunderstanding.

**Needs scoping / decision before build:**\
The exact UX for historical pricing: pure chatbot table, generated image/card, web side panel, or hybrid chat + interface. The requirement is locked, but the presentation mechanism needs a design lock.\
Historical delivery method summary, especially "last five delivery methods," should be scoped as either part of historical decision support or a separate enhancement.\
Customer price-book bypass / pre-approved special pricing needs deeper scoping because the client described cases where special customer prices should bypass repeated approval.\
Warehouse/shelf/stock movement configuration needs technical scoping, because the meeting touched on AutoCount warehouse/shelf structure and stock movement reports.\
Updated calculator formulas, extra calculator types, raw-to-finished conversion, and multi-level stock visibility should remain CR unless separately approved; the UAT gaps already marked updated formulas / extra calculators and manufacturing-style stock conversion as CR or out-of-scope-type items.

**Key learnings**

**Personal learning**

The biggest personal learning is that being "technically correct" is not the same as being "operationally usable." The system may retrieve or calculate data, but if the user cannot make a decision in one glance, it fails the workflow. The client's real concern is not just whether historical pricing exists; it is whether a busy sales user can confidently decide price and discount faster than AutoCount.

A second learning is that joining the client's actual working context earlier matters. In the transcript, Gareth acknowledged that hearing the real user angle made the expected outcome much clearer. For future accounts, the PM should observe the real system-of-record workflow before locking chatbot UX.

**Team learning**

The team's main learning is that UAT should not be a checklist of features only. The 2nd UAT plan had many items marked ready, done, or ready to test, including calculator, FOC, external SKU item code, historical pricing fixes, delivery method SKU, and credit exposure. But the client still failed the flow because the end-to-end pricing decision journey was not validated against real user behaviour.

The second team learning is that chatbot output design needs QA, not just backend/API QA. The team needs test cases for "can the sales rep make the next decision without opening AutoCount?" For Fixguru, a passing test should include messy real WhatsApp input, customer lookup by phone, historical price table, discount selection, delivery method selection, PDF generation, and credit decision.

The third team learning is to separate **requirement lock** from **solution lock**. Historical pricing is not optional anymore, but whether it is delivered via chat table, card/image, or side-by-side interface needs a proper design decision before the dev team keeps patching prompts.

**Client-side learning**

The client's learning is also important: they need to show exact real examples, not just describe the process verbally. The clearest part of the 24 June meeting was when they walked through specific item examples and explained what fields they need: quantity, standard price, discount, net price, and date.

They also need to accept that some requests are operationally adjacent but not all are the same scope. Historical pricing, phone search, and credit exposure are core to adoption; updated calculator formulas, five calculator types, raw material conversion, and manufacturing yield variance are likely CR items unless separately approved.

**Recommended next action**

Do not push for sign-off yet. Run one internal "golden path" redesign around the first 10 minutes of the sales flow: WhatsApp order → identify customer by phone/name → show last five historical pricing rows per item in a clear table/card → user selects discount/price → generate quotation/SO draft → ask delivery method → check credit/payment context. Once that is mocked and agreed, then resume UAT from pricing onward.

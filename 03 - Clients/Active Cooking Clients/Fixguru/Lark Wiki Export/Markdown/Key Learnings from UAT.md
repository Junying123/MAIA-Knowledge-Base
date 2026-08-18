**Key Learnings from UAT**

Based on the **24 June Fixguru UAT Fireflies transcript**, the biggest learning is: **the product still does not match the client's real working flow at the first and most important step --- pricing decision before quotation/SO.** Because that step is not solved, the client cannot confidently move to the next workflow.

**Key learning --- personal side**

Need to listen deeper to the **real user behaviour**, not just the written scope.

Client has repeated the same pain many times: **historical pricing, discount, net price, and simple display**.

We understood the feature technically, but not enough from the user's daily working reality.

The client's team does not want long chatbot replies. They need **one-glance, simple, action-based information**.

We should not defend the current flow too much during UAT. Better to acknowledge quickly, extract the exact expected behaviour, and align next steps.

Need to catch frustration earlier. Yvonne was still explaining patiently, but the frustration is clear because the same issue has been repeated for months.

**Mistakes to highlight --- personal**

Did not lock the **pricing decision flow** clearly enough before UAT.

Treated chatbot output as "functionally correct", but the client judged it by **speed and usability**.

Did not test using the client's real working pattern: customer WhatsApp order → check historical price → decide discount → generate quotation.

Too much focus on "can the system do it?" instead of "can the sales team use it faster than AutoCount?"

Did not simplify the conversation flow enough before showing client.

**Key learning --- team coordination**

PM, product, BE, FE, and chatbot team were not fully aligned on the **real expected output format**.

The requirement was known, but the final experience was not owned end-to-end by one person.

Chatbot team may fix the prompt, BE may provide data, FE may display data --- but nobody fully validated the complete user journey.

Internal testing should not only check "pass/fail"; it must test against **client speed, clarity, and adoption**.

Before UAT, team should run one full realistic scenario using actual client examples and ask: "Would Fixguru abandon this and go back to AutoCount?"

**Mistakes to highlight --- team coordination**

UAT readiness was too optimistic.

Existing repeated feedback from earlier UAT gaps was not fully closed before the next client session.

We did not make one shared "critical path" clear enough: **historical pricing display must be solved first before other flows matter**.

There was no strong enough final internal gate to stop UAT if the main pain point was still weak.

The team may have worked on many items, but the client only cares whether the main working flow is usable.

**Product-side learning**

The chatbot cannot just reply with long summaries. For Fixguru, it must act like a **pricing decision assistant**.

Historical pricing must show in a simple table:

item

past quantity

standard/unit price

discount %

net price

date

preferably last 3--5 invoice records

Grand total is not the main decision point at this stage. The user needs to decide **what unit price and discount to apply**.

Historical pricing should come from **actual invoice history**, not only quotation or sales order history.

The product must support phone number / WhatsApp number search because users often know the customer by phone number, not exact company name.

Delivery method should also show historical pattern, because it affects the next step after quotation.

Approval logic for discount/minimum price and credit limit must show enough context for approvers to make decisions.

**Product mistakes to highlight**

Historical pricing output is still not clear enough.

Chatbot wording is too long and confusing.

The system asks too many questions before giving the user the exact information they need.

The product flow is still too "standard ERP", while Fixguru's actual flow is more decision-heavy before document creation.

The system does not yet create enough confidence for users to leave AutoCount.

Data display is not designed for "one glance" usage.

**Key action points**

1\. **Make historical pricing the first priority**

Build the exact expected output before continuing other flows:

Last 3--5 invoice history per customer + item.

Show quantity, standard/unit price, discount %, net price, and date.

Present it in table format or image/table view.

Ask user simply: "Which price/discount do you want to proceed with?"

2\. **Redesign chatbot flow to be shorter**

One step at a time.

Avoid long paragraph replies.

Remove unnecessary totals during pricing decision.

Use simple labels: **Standard Price / Discount % / Net Price / Last Invoice Date**.

3\. **Validate with real Fixguru scenarios**

Use actual test cases from client style:

Customer sends WhatsApp order.

User searches customer by phone number.

Bot identifies customer.

Bot shows historical pricing.

User chooses discount.

Bot generates quotation.

User selects delivery method.

Then only proceed to SO / delivery / credit checks.

4\. **Align whole team before next client retest**

PM to document exact expected flow.

BE to confirm data source from invoice history.

Chatbot team to format response.

FE to support table/rich display if chatbot alone is not enough.

QA to test against real user behaviour, not just technical pass/fail.

5\. **Create a stricter internal UAT gate**

Before showing client again, confirm:

Can the user complete the pricing decision faster than AutoCount?

Can the user understand the chatbot response in one glance?

Can the system show the correct historical discount and net price?

Can the user proceed without asking multiple clarification prompts?

Can the team demo the full flow without workaround?

**Main conclusion**

The core issue is not just bugs --- it is **product-market workflow fit**. Fixguru will only accept MAIA if the first pricing and discount decision flow becomes faster, clearer, and easier than AutoCount.

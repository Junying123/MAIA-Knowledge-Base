**Macro Frozen --- Open Questions for Grace / David**

**owner: Gareth\
status: review\
last_reviewed: 2026-07-14\
lark_url: <https://eg69120xnei.sg.larksuite.com/docx/Bo8VdouaJoUTSfx9oDllMGyOglg>**

**Updated 2026-07-14 (v3)** --- reconciled against the direct Grace clarification call (\"Macrofrozen Client Scope Lock Clarification,\" 13 Jul). Several items are now resolved and removed (item historical pricing, payment-escalation routing, POD\'s original \"all vs some\" framing --- superseded by a harder conflict, see the new David-only section). Added a new **\"For David Directly\"** section for items Grace explicitly said only David can answer.

Hi Grace / David --- a few things we need to confirm before we finalize the build and get everything ready for testing on **Thursday, 16 July**. Answers here directly unblock the catalog, pricing, credit note, delivery, and reporting pieces.

**1. Product catalog**

How many templates do you want for your product catalog, and how many products/SKUs per image or page?

For each catalog image, which SKU does each product/price tie to?

Should the output be image-only, PDF, or both?

**2. Pick list workflow**

The new pick-list flow gives us visibility at the **warehouse manager** level --- any quantity shortfall is caught before the order is finalized. Is that enough for your accountability needs, or do you need to know exactly **which individual picker** picked a short or wrong line (so it can be traced back to a specific person)?

After the pick list confirms actual weight/quantity, should MAIA automatically generate the DO/Invoice for your review, or wait for someone to explicitly say \"confirm and generate\"?

**3. Credit note**

The credit note will carry the original invoice number as a reference field, but will run its own separate number series rather than copying the invoice number exactly. Does that meet your need to avoid confusing customers, or do you specifically need the CN number itself to match the invoice number?

**4. Customer info (CRM)**

Beyond logging notes/events/tasks against a customer (which is confirmed), which customer master fields --- address, phone, billing address, contact --- should sales/admin be able to edit directly in MAIA, and which should require approval before syncing back to SQL?

**5. Dashboard & reminders**

Who should have access to the dashboard --- David only, David + Finance, David + Finance + Sales, or everyone including the warehouse manager?

Should dashboard access differ by role --- e.g. should Sales only see their own customers\' orders, the same way they can only see their own customers today?

What should the dashboard show first --- order status, payment/AR exceptions, pending credit approvals, or something else?

Who should get daily reminders --- the same people as the dashboard, or a narrower list?

Should reminders trigger on a fixed daily schedule, or immediately when something happens (e.g. an order gets blocked, a payment goes overdue)?

Should reminders show up inside MAIA only, or also get pushed to WhatsApp/Telegram?

**6. Credit control**

When an order is blocked for exceeding a customer\'s credit limit, who exactly should approve it? Should the system record a reason when someone overrides the block?

**7. Cash & stock record-keeping**

Do you want MAIA to also record cash collected by drivers (replacing your current Excel log), or should that stay a separate process outside MAIA?

Do you want warehouse staff to be able to photo-log damaged or discoloured stock against a batch inside MAIA (as a record for later reference), or should that stay outside the system for now?

**For David Directly**

Grace was explicit that these need David\'s own knowledge or decision --- not something she can answer, and not just the general 16 Jul training group discussion.

**Pricing update mechanism:** You update prices roughly weekly via an Excel file --- can you walk us through exactly how that works, so we can map it into Maya? (Grace doesn\'t know the mechanism.)

**Catalog creation process:** You make the product catalog yourself using ChatGPT --- can you walk us through that process so we can properly scope the Phase 1 catalog feature?

**Proof of delivery --- a decision needed:** Grace explicitly does not want delivery photos uploaded into Maya (your current process --- WhatsApp photo only, no formal \"delivered\" status in SQL --- already works for her). Do you still want a formal proof-of-delivery / mark-as-delivered feature built in Maya, or should we leave delivery confirmation exactly as it is today (WhatsApp photo only, no system status)?

**Quotation / price-lock --- is it actually wanted:** Grace confirmed formal quotations are barely used day-to-day --- orders mostly go straight from a WhatsApp price chat to an order. Do you still want the quotation-with-price-lock feature built, or should we deprioritize it given how the team actually operates?

**Stock-expiry alert --- include Sales?** You and the warehouse/logistics manager will get the stock-expiry alert --- should sales also receive it?

**Backup coverage:** If your logistics manager (Mr. Lai) or your finance staff is out, who should back up pick-list verification, AR entries, or approvals? There\'s currently no process for this --- right now nobody double-checks the foreign workers\' picked quantities if Mr. Lai is absent.

**Warehouse Maya access:** Should each foreign-worker picker get their own Maya login, or should the warehouse team share one company phone/device for Maya?

Please get back to us by **Thursday, 16 July** so we can lock these in ahead of testing. Happy to jump on a quick call if easier --- just let us know.

\|（注：部分内容可能由 AI 生成）

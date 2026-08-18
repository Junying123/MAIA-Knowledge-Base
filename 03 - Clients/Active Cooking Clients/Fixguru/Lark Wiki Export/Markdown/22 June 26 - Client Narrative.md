**22 June 26 - Client Narrative**

**Source Coverage**

**Who Fixguru by IAM Worldwide Is --- Strong**

Coverage is strong for the legal entity, trading reference, business category, AutoCount dependency, broad product range, public company scale, packaging focus, manufacturing/wholesale operating model and commercial investment.

The supplied sources support the following: IAM Worldwide Sdn Bhd is the legal entity behind Fixguru; Fixguru is a packaging supplier with ready-made and custom packaging products; AutoCount is the business system of record; and the MAIA deployment is priced at RM48,000.

Gaps:

AutoCount version is still not identified.

AutoCount API limitations are partially visible through UAT issues, but the formal API capability matrix is not supplied.

Department-level headcount for Sales, Operations, Accounts, Logistics and Drivers is not supplied.

**Before MAIA --- Strong**

Coverage is strong for the current operational problem: sales-to-operations miscommunication, manual re-keying, reliance on WhatsApp, customer-specific pricing, historical pricing gaps, AutoCount document dependency, custom box calculation, stock visibility, raw-material visibility, credit checks, delivery planning and proof-of-delivery coordination.

The strongest evidence is not that Fixguru lacks software. The strongest evidence is that Fixguru already has software, but the work around AutoCount still depends on people manually carrying context across chat, PDFs, spreadsheets and document numbers.

Gaps:

Current average processing time per order is not quantified.

Current error rate, rework rate and late delivery rate are not quantified.

The direct financial cost of manual coordination is not quantified.

**After MAIA --- Partial to Strong**

Coverage is strong for the intended operating model: MAIA as an internal coordination layer, not an AutoCount replacement; WhatsApp-based internal chatbot; MAIA workspace; quotation, SO, DO and invoice support; custom box calculator; historical pricing; credit exposure; FOC; external SKU; delivery method as SKU; HQ/branch contact handling; language preference; volume fields; warehouse/shelf visibility; submitted-document sync and cut-off snapshot.

Coverage is partial because several items were still marked as retest, testing, dev in progress or UAT-planning items in the latest materials.

Gaps:

Final 2nd UAT sign-off and punch-list are still to be planned out.

Final cut-off date for the snapshot is not stated.

Final owner, file format and reconciliation process for the cut-off snapshot are not stated.

AutoCount version and API capability remain open.

**Discovery Gaps to Close**

Confirm AutoCount version and formal API limitations.

Plan final 2nd UAT sign-off, punch-list handling and go-live readiness criteria.

Confirm the cut-off date for the historical snapshot.

Confirm who provides the snapshot, in what format, and who reconciles it.

Confirm whether public website figures should remain in the client-facing version after Fixguru review.

Confirm which agreed fixes are contractually included versus handled as goodwill UAT remediation.

Confirm final wording for "submitted documents only" so Fixguru does not expect draft quotations or draft sales orders to be pushed into AutoCount.

Confirm whether future RSC and die-cut calculator formula changes are governed as maintenance, CR, or separate versioning work.

**MAIA for Fixguru by IAM Worldwide**

**The operating layer that turns AutoCount into a usable sales-to-delivery workflow**

*Prepared by Mindhive for IAM Worldwide Sdn Bhd ("Fixguru by IAM Worldwide")*\
*Investment: RM 48,000*

**Who Fixguru by IAM Worldwide Is**

Fixguru by IAM Worldwide is a packaging business built around volume, variety and operational responsiveness.

Publicly, Fixguru positions itself as a Selangor-based packaging supplier serving online sellers, SMEs, fast-growing brands, retail customers and wholesale buyers. Its facility is stated at 65,000 sq ft, with nearly 1,000 SKUs, more than 50 employees, and a catalogue covering carton boxes, courier bags, bubble wrap, thermal stickers, tape, paper bags, racks, packaging tables and other fulfilment supplies.

That breadth matters.

Fixguru is not selling one uniform product through one clean channel.

It sells ready-made packaging products. It also supports custom packaging requirements, including RSC boxes, die-cut boxes, custom printing, carton boxes, paper bags, poly-mailers and bubble wrap. Public material describes the business as having both manufacturing capability and wholesale distribution capability.

Operationally, that creates two different kinds of sales work.

For ready-stock products, the sales workflow is about item code, quantity, customer pricing, stock, credit exposure, delivery method and fulfilment.

For custom boxes, the workflow is heavier. The sales decision can depend on dimensions, box type, paper quality, flute type, sheet-board cost, minimum liner metre, formula logic, raw-material availability, conversion ratio, yield variance and customer-specific margin treatment.

AutoCount is the business backbone.

Customer records, product records, stock records, document numbers, quotations, sales orders, delivery orders, invoices, credit notes, receipts and e-invoice handling all sit around AutoCount. Fixguru users are already trained to think in AutoCount's language: customer codes, item codes, SBI references, AutoCount document flow and AutoCount-style PDFs.

That is not the problem.

The problem is everything that has to happen around AutoCount before the work is clean enough to submit.

**Before MAIA --- How Fixguru Operates Today**

Fixguru does not have a software problem.

It has a coordination problem.

Sales, Operations, Drivers, Accounts and Management are all involved in the same order, but they do not experience the order as one shared workflow. They experience it as fragments: WhatsApp messages, AutoCount screens, PDFs, Google Keep picking notes, calculator spreadsheets, screenshots, payment proof, customer branches, delivery instructions and follow-up reminders.

That fragmentation is the real cost.

**Sales needs AutoCount speed, but also context AutoCount does not surface cleanly**

Fixguru's sales team is not quoting from a generic price book.

Each B2B customer can have their own pricing and discount treatment. The sales agent needs to know what the customer paid last time, what discount was given, what the standard price was, and what the net price became after discount.

This is why historical pricing is not a "nice to have".

It is the basis for quoting with continuity.

When that information is not surfaced inside the active sales workflow, the agent has to leave the conversation, search AutoCount, ask someone else, or recreate the decision from memory. That slows down quotation and creates pricing inconsistency.

The customer sees a quote.

Fixguru absorbs the archaeology behind it.

**The salesperson is managing 4--10 orders, not one chatbot thread**

The first UAT exposed a hard reality: Fixguru's salespeople work concurrently.

A salesperson may be handling four to ten active customer orders at the same time. They may be creating one sales order, editing another, checking historical pricing on a third, clarifying a branch address on a fourth, and adding a delivery charge to another.

That is why a clean sequential chatbot demo is not enough.

If MAIA can create multiple sales orders but cannot support mid-flow edits, document targeting and context switching, the system becomes slower than AutoCount. The user will fall back to the tool that lets them move fastest.

For this account, speed is not cosmetic.

Speed is adoption.

**AutoCount document numbers are the operational anchor**

Fixguru users reference work by AutoCount document IDs, including SBI-style references.

That is how Sales, Operations and Accounts know which order they are talking about. That is how edits are requested. That is how document history is traced. That is how the business avoids mixing one customer's live order with another customer's live order.

If MAIA shows its own internal ID instead of the AutoCount-facing ID, it may be technically valid but operationally wrong.

For Fixguru, the document number is not metadata.

It is the handle people use to run the business.

**Custom box quoting carries margin risk**

The custom box calculator is not a simple price calculator.

It is a production-sensitive quoting tool.

RSC and die-cut pricing depends on formula logic. Inputs such as length, width, height, box type, paper quality, flute, SB cost, unit conversion and formula version can change the commercial answer. Fixguru also expects unit prices to include SST, with no item-level tax displayed on its quotation, sales order or invoice PDFs.

That creates a governance problem.

Fixguru updates its RSC and die-cut formula Excel files. If MAIA's calculator does not follow the current approved formula, the system can generate confidence in the wrong number.

A wrong calculator is worse than no calculator.

No calculator forces human checking.

A wrong calculator quietly leaks margin.

**Stock commitment is not only finished-goods stock**

Fixguru's stock picture includes both ready stock and raw material that can be converted into custom boxes.

A sales agent may need to commit a delivery date for a custom box order by looking at two levels of availability: finished custom boxes already on hand and raw material that can be converted into finished boxes.

The conversion is not always perfectly clean. A raw-material quantity may imply a target finished-goods output, but actual production can produce less because of defects, yield loss or variance. The UAT material uses the example of raw material expected to produce 4,000 boxes but yielding 3,900.

The business impact is direct.

If Sales promises based only on finished stock, it may under-commit.

If Sales promises based on theoretical raw-material conversion without seeing variance, it may over-commit.

Both are bad.

**FOC quantity affects stock even when it does not affect revenue**

Fixguru has a real FOC workflow.

A customer may order 1,000 custom boxes as billable quantity and receive 10 additional pieces FOC. Revenue should apply to 1,000 pieces. Stock should decrement by 1,010 pieces.

That is simple for the salesperson to understand.

It is not simple if the ERP model does not naturally support billable quantity and FOC quantity side by side on the same logical line.

If MAIA does not model this correctly, Finance sees one truth, Warehouse sees another, and Sales has to explain the mismatch later.

**Operations still translates sales documents into picking work**

Fixguru's operations flow depends on picking lists and delivery orders.

The source notes describe a Google Keep workaround: Operations copies the item list from the DO and puts it into Google Keep as a picking checklist.

That is the coordination tax in plain form.

The business already has the order data. But because the fulfilment workflow is not structured tightly enough, people recreate the same information in a second tool to make it operational.

That is not digitisation.

That is manual work with digital surfaces.

**Delivery status and proof still travel through chat**

Drivers need delivery tasks.

Sales needs to know when goods go out.

Customers ask Sales for updates.

The driver sends proof, and Sales needs that proof back in a form that can be referenced later.

Without MAIA, proof-of-delivery risks becoming just another image in a chat thread. It exists, but it is not cleanly attached to the order record, delivery status and sales follow-up flow.

The order is complete physically before it is complete operationally.

**Credit exposure is checked too late unless the workflow forces it earlier**

Fixguru has B2B customers with credit terms and customer-specific limits.

Sales needs to know whether a customer is within limit and within term before the order proceeds to downstream fulfilment and invoicing. The original scope requires credit-limit and credit-term checks before issuing invoices and before converting sales orders to DO where relevant.

This is not an accounting nicety.

It is a control point.

If credit risk is discovered after Sales has already committed stock and delivery, the team has to unwind an expectation that should never have been created.

**E-invoice decisions must remain controlled**

AutoCount already handles e-invoice submission logic for Fixguru.

The e-invoice discovery notes show that AutoCount sends e-invoices to registered e-invoice emails, submits to LHDN when invoices are submitted, and can fail because of due-date or TIN issues. Fixguru also consolidates customers who do not need individual e-invoices and wants customers to retain the choice between individual and consolidated treatment.

That means MAIA should not behave as if every invoice is automatically an individual e-invoice decision.

The correct posture is controlled visibility, not blind automation.

**After MAIA --- What Changes**

MAIA does not replace AutoCount.

MAIA replaces the coordination layer around AutoCount.

AutoCount remains the accounting source of truth. MAIA becomes the operating layer that lets Sales, Operations, Drivers, Accounts and Management act from the same structured workflow before the final submitted documents are pushed into AutoCount.

Draft work happens in MAIA.

Only submitted documents are pushed to AutoCount.

That boundary matters. It prevents AutoCount from being polluted by half-formed drafts, while still giving Fixguru users a structured way to prepare, review, amend and submit clean documents.

**A sales agent starts with the customer context**

A sales agent opens MAIA or the internal chatbot and starts from the customer.

MAIA brings forward the context the agent needs: customer record, branch address, contact person, product code, item description, historical pricing, prior discount, credit exposure and stock context.

The agent does not have to ask a separate person to check the previous price.

The agent does not have to manually search for the last discount.

The agent does not have to guess whether the current quote is commercially consistent.

MAIA surfaces the memory of the account.

The sales agent still makes the decision.

**Historical pricing becomes part of the active quote**

When the agent asks for pricing history, MAIA shows the relevant commercial trail: last transacted price, standard price, discount provided and net price after discount.

This maps directly to Fixguru's UAT expectation.

The system should not simply say "this item was sold before". It should show the pricing information that lets the salesperson decide what to quote today.

That is how MAIA removes the duplication tax.

Not by hiding AutoCount.

By making the right AutoCount-derived context available at the moment of quoting.

**Custom boxes are quoted through controlled calculation**

For RSC and die-cut boxes, the salesperson uses MAIA's calculator instead of manually recreating the Excel workflow.

The calculator captures the required dimensions, box type, quality, cost and relevant formula inputs. It supports the agreed user experience fixes: length greater than width, SST handled according to Fixguru's unit-price convention, SB cost visibility, unit switching and stateful movement between steps.

The output flows into the quotation or sales order.

Where pricing falls below minimum or requires approval, MAIA routes the exception.

It does not silently approve margin risk.

**Draft documents stay usable without contaminating AutoCount**

Fixguru expects documents to look and behave like Fixguru documents.

That does not mean every draft should be pushed into AutoCount.

The agreed boundary is clearer: MAIA prepares and previews the draft. MAIA uses Fixguru-compatible document identity, item codes and PDF structure where required. Once the document is ready and submitted, MAIA pushes the submitted document to AutoCount.

This is the right design.

It protects AutoCount as the formal record.

It still gives Sales a usable draft workflow.

**The workflow speaks Fixguru's language**

MAIA uses Fixguru's item codes and external document references.

It handles branch-specific delivery addresses and contact persons.

It recognises delivery methods that must be treated as SKU line items, such as 3PL or Lalamove charges, instead of reducing them to generic delivery metadata.

It carries volume fields into item profiles and delivery documents.

It keeps shelf and warehouse context visible where Operations needs it.

That is what makes MAIA usable inside Fixguru.

The system does not ask the user to translate MAIA into AutoCount.

It aligns itself to how Fixguru already runs.

**Credit exposure becomes visible before operational commitment**

Before a sales order proceeds, MAIA surfaces credit limit, exposure and available balance.

If the customer is within limit and term, the order can proceed.

If the customer is near or over the limit, MAIA routes the case to management approval.

This is advisory enforcement.

MAIA does not become the boss.

It makes the risk visible before Sales creates a downstream problem.

**Operations receives work that is already structured**

Once the sales order is ready, Operations receives a structured picking and fulfilment view.

The relevant item, quantity, FOC quantity, UOM, warehouse, shelf, stock and delivery information are no longer scattered across a chat thread and copied checklist.

For partial fulfilment, MAIA preserves the relationship between one sales order, multiple delivery orders and invoices generated by delivery date.

That matters because Fixguru's workflow is not always one SO, one DO, one invoice.

The system needs to preserve the real document chain.

**Drivers close the loop inside the record**

A driver receives the delivery task.

After delivery, the driver uploads proof.

MAIA returns proof to Sales and attaches the delivery evidence to the operational flow.

Sales no longer has to chase for proof in a separate thread.

Operations no longer has to rely on memory.

The order becomes visible from quote to delivery proof.

**Historical exposure is snapshotted, not migrated wholesale**

Fixguru has a large historical transaction base, including e-commerce invoice volume.

The agreed direction is not to migrate everything.

MAIA will work from a cut-off snapshot.

That snapshot should capture the current credit exposure needed for go-live: customer credit limit, outstanding balance, overdue amount and relevant open exposure as of the cut-off date. From that point forward, submitted documents and relevant updates are synced according to the agreed integration design.

This is the right trade.

It gives MAIA enough starting truth to support live operations without turning Phase 1 into a historical data migration project.

**Finance remains protected**

MAIA supports the upstream discipline around payments, credit, invoices and reminders.

It does not take e-invoice judgement away from AutoCount and Finance.

AutoCount remains the authoritative environment for LHDN submission and e-invoice handling. MAIA helps by ensuring that the workflow leading to invoice creation is structured, visible and controlled.

That keeps the finance boundary clean.

**Feature Deep Dive**

1\. **Internal WhatsApp Chatbot and MAIA Workspace**

**What it does**

MAIA gives Fixguru internal users a structured way to create, review and manage quotations, sales orders, delivery-related information, invoice status, payment status, customer context and operational updates through the MAIA workspace and internal chatbot.

It supports the Sales, Operations, Driver, Accounts and Management workflow.

**What it will not do**

It will not become a customer-facing B2C chatbot.

It will not replace AutoCount.

It will not guarantee that a free-form chat message is always sufficient when the user is handling multiple live documents. Where ambiguity exists, MAIA should ask for document targeting and confirmation.

**Why it matters**

Fixguru already runs through conversation.

MAIA turns conversation into structured work.

2\. **AutoCount Integration**

**What it does**

MAIA integrates with AutoCount for the agreed scope of submitted business documents and master-data visibility. AutoCount remains the source of truth for accounting, item records, customer records and final document records.

The operational rule is: draft in MAIA, submit to AutoCount when ready.

**What it will not do**

MAIA will not push every draft document into AutoCount.

MAIA will not migrate the full historical AutoCount database before cut-off.

MAIA will not override AutoCount as the finance master.

**Why it matters**

Fixguru trusts AutoCount because it is the formal record.

MAIA succeeds only if it makes work easier without corrupting that record.

3\. **Historical Pricing and Item-Level Discount Visibility**

**What it does**

MAIA surfaces customer-item history, including last transacted price, standard price, discount percentage and net price after discount.

It supports the sales agent at the point of quotation.

**What it will not do**

MAIA will not decide the final discount automatically without business rules and human confirmation.

MAIA will not infer an unverified pricing policy where historical records are incomplete or ambiguous.

**Why it matters**

Fixguru's B2B pricing depends on customer-specific history.

If the sales agent still has to open AutoCount to confirm the previous price, MAIA has not removed the real pain.

4\. **RSC and Die-Cut Calculator**

**What it does**

MAIA supports custom box quoting through the agreed calculator workflow, including RSC and die-cut logic, dimensions, box type, quality inputs, unit conversion, SB cost visibility and Fixguru's SST-in-unit-price convention.

**What it will not do**

MAIA will not automatically stay aligned to future Excel formula changes unless formula versioning is planned and governed.

It will not silently adopt unapproved calculation logic.

**Why it matters**

Custom box quoting is where sales speed and margin discipline collide.

The calculator must protect both.

5\. **Credit Exposure and Approval Control**

**What it does**

MAIA shows credit limit, exposure and available balance before orders move downstream. Where the customer exceeds or approaches a limit, MAIA routes the case for management approval.

**What it will not do**

MAIA will not make credit decisions independently.

MAIA will not bypass management where the policy requires approval.

**Why it matters**

Credit risk must be surfaced before stock, delivery and customer expectations are committed.

6\. **Submitted-Document Sync and Cut-Off Snapshot**

**What it does**

MAIA uses a cut-off snapshot for historical credit exposure and live operational starting state. After cut-off, submitted documents are synced according to the agreed integration scope.

**What it will not do**

MAIA will not perform full historical migration of every prior invoice, quotation, SO, DO, receipt, credit note and e-commerce document unless separately scoped and costed.

MAIA will not push draft documents to AutoCount.

**Why it matters**

This prevents Phase 1 from becoming a data migration project.

It also preserves AutoCount as the formal record while giving MAIA enough current truth to operate.

7\. **FOC Quantity**

**What it does**

MAIA supports the Fixguru FOC workflow where billable quantity and FOC quantity affect revenue and stock differently. For example, 1,000 billable pieces plus 10 FOC pieces should bill 1,000 pieces but deduct 1,010 pieces from stock.

**What it will not do**

MAIA will not treat FOC as ordinary paid quantity.

MAIA will not hide stock impact just because the FOC quantity is zero-revenue.

**Why it matters**

FOC is small commercially but important operationally.

If it is modelled wrongly, Sales, Warehouse and Finance will disagree.

8\. **Branch, Contact and Delivery Address Handling**

**What it does**

MAIA supports customers with HQ and branch-level contact and delivery information. The sales agent can assign the correct branch and delivery address to the order.

**What it will not do**

MAIA will not invent missing branch data.

If the AutoCount source record is incomplete or inconsistent, the user still needs to correct or confirm the record.

**Why it matters**

Fixguru has customers where the same account can have multiple delivery addresses and contacts.

Wrong branch selection creates wrong delivery, wrong document and avoidable rework.

9\. **Delivery Method as SKU**

**What it does**

MAIA supports delivery charges that need to appear as itemised lines, such as 3PL or Lalamove charges, where Fixguru's invoicing and accounting treatment requires that structure.

**What it will not do**

MAIA will not automatically treat every delivery instruction as a chargeable item unless the item and business rule are clear.

**Why it matters**

For Fixguru, some delivery charges are not just logistics metadata.

They affect document structure and finance treatment.

10\. **Warehouse, Shelf, UOM and Volume Fields**

**What it does**

MAIA carries operational fulfilment fields such as warehouse, shelf number, UOM conversion and volume metrics into the relevant item, delivery and picking context.

**What it will not do**

MAIA will not become a full warehouse management system or manufacturing planning system in Phase 1.

It will expose and structure the fulfilment information required for the agreed order-to-delivery workflow.

**Why it matters**

Operations needs more than item name and quantity.

It needs the information required to pick, pack, route and fulfil correctly.

11\. **Language Preference**

**What it does**

MAIA supports the agreed language handling for internal users so staff can operate in the supported languages required by the project.

**What it will not do**

MAIA will not guarantee perfect multilingual interpretation for every ambiguous free-form message, especially where item names, codes, branch names or delivery instructions overlap.

**Why it matters**

Language is adoption infrastructure.

If internal staff cannot read or trust the response, they will not use the system.

12\. **Fixguru-Compatible PDF Output**

**What it does**

MAIA supports Fixguru-compatible document output so users and customers see familiar document structure, item codes, delivery fields and relevant external document references.

For draft documents, MAIA renders a usable Fixguru-style preview.

For submitted documents, MAIA pushes to AutoCount according to the agreed boundary.

**What it will not do**

MAIA will not push draft documents into AutoCount just to obtain an AutoCount PDF.

It will not create a second formal accounting record before submission.

**Why it matters**

Fixguru users judge system trust through documents.

A wrong PDF makes the system feel wrong even when the backend data is correct.

**Scope Summary**

**Included in RM48,000**

The Phase 1 scope is the original SOW plus agreed UAT fixes required to make that scope usable for Fixguru's actual workflow.

Included:

MAIA internal chatbot.

MAIA workspace for the order-to-delivery workflow.

AutoCount integration for agreed submitted documents and master-data visibility.

WhatsApp Business API deployment.

Order and quotation management.

Sales order, delivery order and invoice-status support.

Custom box quotation module based on IAM/Fixguru calculator logic.

RSC and die-cut calculator improvements agreed during UAT.

Payment and credit check support.

Credit-limit and credit-term visibility.

Management approval flow for pricing and credit exceptions.

Inventory and stock tracking visibility.

Out-of-stock update via bot where scoped.

Delivery and driver module with proof-of-delivery flow.

Lalamove integration for on-the-spot delivery support where credentials and API access are available.

Reminder engine for follow-up quotations, stock availability, delivery status, customer inactivity, outstanding payment, credit-term deadline and invoice-copy follow-up.

Dashboard and analytics for overall sales and outstanding payments.

External SKU / Fixguru item code handling.

External document ID visibility.

FOC quantity handling.

Customer pricing enforcement.

Item historical pricing.

Item-level discount auto-computation where rules are clear.

Delivery method as SKU.

HQ and branch contact handling.

Language preference handling.

Warehouse, shelf, UOM and volume-field visibility where agreed.

Fixguru-compatible draft PDF rendering.

Submitted-document sync to AutoCount.

Cut-off snapshot for current exposure and go-live starting position.

**Designed For, Not Included Unless Separately Scoped**

These are architecture seeds, not Phase 1 commitments:

Full historical migration of all AutoCount records before cut-off.

Full migration of all 143k+ historical invoices and e-commerce invoices.

Multi-year transaction search across all pre-cut-off AutoCount history from MAIA.

Full manufacturing/MRP planning for raw-material-to-finished-goods production.

Advanced route optimisation.

Full warehouse management system.

Automated collections workflow.

Full CRM and marketing campaign automation.

Future formula versioning governance for every RSC and die-cut Excel change.

Full multilingual quality assurance beyond agreed supported behaviour.

Deep e-invoice automation outside the agreed AutoCount boundary.

**Requires Clarification**

AutoCount version.

AutoCount API capability matrix.

Final 2nd UAT schedule, sign-off process and punch-list closure.

Cut-off date for historical snapshot.

Snapshot owner, source report, file format and reconciliation method.

Exact submitted-document sync rules by document type.

Whether partial fulfilment and one-SO-to-many-DO-to-many-invoice logic is fully tested for all edge cases.

Final formula governance for RSC and die-cut calculator updates.

Final scope line between agreed UAT fixes and new CRs.

Final language behaviour for Chinese input and Chinese output.

**Not in Scope --- and Why**

**Draft documents pushed into AutoCount**

Not in scope.

Reason: The confirmed direction is to push only submitted documents. Draft work should remain in MAIA to avoid polluting AutoCount with incomplete, duplicate or abandoned documents.

**Full historical AutoCount migration**

Not in scope.

Reason: The agreed approach is a cut-off snapshot. Full historical migration would turn Phase 1 into a data migration and reconciliation project, especially given the large invoice base and e-commerce document volume.

**Customer-facing B2C chatbot**

Not in scope.

Reason: The original deployment is for internal operations: Sales, Operations, Drivers, Accounts and Management. Customer-facing chat flows introduce a different support, liability and UX scope.

**Refunds and returns automation**

Not in scope.

Reason: Product refunds and returns are explicitly left as a manual process in the original scope.

**Promo-code and seasonal campaign logic**

Not in scope.

Reason: Fixguru discovery states no promo requirement, and the original SOW excludes promo-code and seasonal campaign logic.

**Reply-to-specific WhatsApp message context**

Not in scope.

Reason: This is a chatbot interaction enhancement, not a core order-to-delivery requirement. It also increases ambiguity risk when users handle multiple active documents.

**Auto-approval of discounts, credit exceptions or e-invoice decisions**

Not in scope.

Reason: MAIA is advisory and human-in-the-loop. Pricing, credit and compliance exceptions require human confirmation or management approval.

**Full MRP or production planning**

Not in scope.

Reason: Phase 1 supports stock and raw-material visibility where needed for sales commitment. It does not replace a manufacturing planning system.

**Full catalogue-wide price-lock governance**

Not in scope unless rules are provided.

Reason: The agreed fix is customer pricing enforcement and read-only behaviour where scoped. A complete price-lock policy across all items requires a defined rule table and exception process.

**AutoCount as replaced system**

Not in scope.

Reason: AutoCount remains the master record and finance backbone. MAIA coordinates the operating workflow around it.

**The Design Principle**

Fixguru by IAM Worldwide is not short of tools.

It has AutoCount, WhatsApp, PDFs, spreadsheets, catalogue channels, delivery workflows, customer history, payment records, stock records and e-invoice handling.

The problem is that these tools do not behave like one operating environment.

Sales carries pricing memory.

Operations reconstructs picking work.

Drivers send proof into chat.

Accounts protects credit and invoice truth after the commercial conversation has already moved.

Management gets pulled in when exceptions have already become urgent.

MAIA changes the shape of that work.

It does not remove AutoCount.

It does not remove judgement.

It does not turn every business exception into automation.

It structures the workflow so each person sees the right context before they act.

Sales gets pricing history, customer context, branch details, credit exposure and stock visibility.

Operations gets structured fulfilment information.

Drivers get clear delivery tasks and proof-of-delivery capture.

Accounts keeps AutoCount as the formal financial truth.

Management sees exceptions before they become downstream damage.

That is the right boundary for Fixguru.

*MAIA structures the workflow. Humans remain the decision-makers.*

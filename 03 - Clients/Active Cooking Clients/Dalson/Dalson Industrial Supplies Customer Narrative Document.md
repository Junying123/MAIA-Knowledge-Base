Dalson Industrial Supplies Customer 

Narrative Document 

1. Purpose of This Document 

This document provides the next internal owner with the full client context needed to take over 

Dalson Industrial Supplies after the proposal stage. 

It combines: 

the client’s business and workflow context 

the key pain points raised during discussion 

the agreed Phase 1 proposal direction 

setup items that must be handled during implementation 

out-of-scope boundaries that must not be overpromised 

the latest commercials from the signed proposal 

Important clarification: Dalson uses AutoCount. The next owner should treat AutoCount as the 

accounting and invoicing core system for this project. MAIA is positioned as the operational 

layer on top of AutoCount, not as a replacement. 

2. Client Snapshot

Item 

Details 

Client 

Dalson Industrial Supplies 

Business type 

B2B industrial supplies 

Main customer types 

Auto shops, automotive-related customers, construction-related customers 

Main order channels

Calls, WhatsApp, some email 

Main system 

AutoCount 

Approximate order 

50 to 100 orders per month 

volume mentioned in 

meeting 

Team mentioned 

2 sales coordinators, plus warehouse and delivery involvement 

Main language 

English 

context 

Current MAIA fit 

Internal sales-order handling and operational coordination layer on top of 

AutoCount 

Source: meeting transcript and signed proposal. 

3. Business Context 

Dalson Industrial Supplies is a small B2B industrial supply business serving mainly auto-related 

and construction-related customers. Orders currently come through a mix of calls, WhatsApp, 

and email, and the team manually interprets and processes these requests. 

The business uses AutoCount as its main system for invoicing and operational record handling. 

The client also deals with customer-specific pricing and item descriptions that may not match 

internal SKU naming exactly. This is important because a large part of the operational pain 

comes not just from document preparation, but from the repeated interpretation and checking 

required before the team can confidently create the right document. 

The client is also cost-sensitive. During the meeting, the client stated that the company is small, 

was broadly okay with the monthly subscription logic, but was sensitive to the one-time setup 

fee. This is an important commercial context point for any future discussion. 

4. Current Business Process 

4.1 How orders currently come in 

Orders come in through calls, WhatsApp, and some email. 

Staff then interpret the customer request manually. 

4.2 How the internal sales process currently happens 

1. Customer sends request or PO. 

2. Sales admin / coordinator reviews and interprets the request. 

3. Team checks customer details, item details, and pricing. 

4. Team keys or processes the required information in AutoCount. 

5. Relevant sales document is generated. 

6. Delivery and follow-up continue through internal coordination. 

4.3 How item handling currently works 

Customer item descriptions may differ from internal SKU naming. 

•••
Similar SKUs can create confusion. 

This means experienced staff knowledge currently plays a big role in getting the item 

selection right. 

4.4 How invoicing currently works 

AutoCount remains the invoicing core. 

If the customer is not properly found in AutoCount, staff still need to manually key in invoice 

details before the invoice or e-invoice process can be completed. 

4.5 How delivery and follow-up currently work 

Delivery is a downstream operational step after sales processing. 

Proof of delivery and related records are not naturally tied together in one clean operational 

layer today. 

Order progress, follow-up, and supporting documents can be fragmented across system 

records and WhatsApp conversations. 

5. Core Business Issues 

5.1 Manual order intake and processing effort 

Dalson currently receives customer orders through unstructured channels and relies on the 

team to manually interpret, check, key in, and generate documents. This creates unnecessary 

delay, inconsistency, and reliance on individual staff judgment. 

5.2 SKU and item-description mismatch risk 

Customer PO descriptions may not match internal SKU naming. Similar SKUs can also be 

confusing. This increases the risk of wrong item selection, wrong document output, and slower 

processing due to repeated checking. 

5.3 Invoicing still depends on manual key-in 

When customer records or invoice data are incomplete in AutoCount, the team still has to 

manually key in invoice details. This slows the invoicing flow and adds more admin dependency. 

5.4 Fragmented follow-up and visibility 

Management visibility is affected because order progress, follow-up, and supporting records are 

not naturally tied together in one clean operational layer. This weakens control and makes 

scaling harder. 

5.5 Why this matters commercially 

•
These issues affect the business by causing: 

slower processing time 

heavier reliance on manual staff effort 

higher risk of wrong pricing, wrong item, or wrong document handling 

more back-and-forth across teams 

weaker control over customer-specific treatment 

difficulty scaling operations cleanly 

reduced management visibility over execution and exceptions 

6. Agreed MAIA Positioning 

For Dalson, MAIA is positioned as a WhatsApp-based operational assistant with backend 

visibility, sitting on top of AutoCount. 

MAIA is expected to improve the operational layer around: 

request capture 

business-rule support 

draft preparation 

document support 

status tracking 

follow-up visibility 

AutoCount remains the source of truth for accounting and invoicing. MAIA does not replace 

AutoCount. 

7. Phase 1 Scope in the Signed Proposal 

7.1 Included workflows 

The signed proposal includes: 

internal sales order intake through WhatsApp 

forwarding of customer PO, text, and supported voice inputs into MAIA 

sales order draft preparation with user confirmation before submission 

sales document generation support through the AutoCount-connected environment 

backend order tracking for sales, logistics, and management visibility 

daily digest and pending-task visibility for follow-up 

•••••••••••••
proof of delivery and related document trail storage for agreed delivery-related flows 

7.2 Included capabilities 

Phase 1 includes: 

internal-facing WhatsApp workflow for staff 

request intake forwarding 

draft preparation for review 

confirmation flow before final submission 

agreed business-rule support 

item, customer, and pricing reference support 

document handling for agreed flows 

activity trail 

document trail 

order or workflow status tracking 

backend visibility for agreed operational flows 

duplicate-order warning and confirmation guardrail 

closest-match item suggestion with user confirmation for ambiguous SKU or description 

cases 

7.3 Documents included 

The signed proposal includes support for: 

sales order 

invoice support through AutoCount-connected workflow 

e-invoice generation trigger support through AutoCount, subject to setup and data 

availability 

PDF sales order generation 

PDF invoice generation 

delivery-related support, including proof of delivery attachment to the related order trail 

amendment or revision support where aligned to the agreed workflow

8. Setup Requirements Included in Implementation 

These are important because they are not treated as separate customizations, but they still 

must be properly confirmed during implementation. 

•••••••••••••••
8.1 E-invoice detail handling setup 

This is included as implementation setup. It is needed because the client currently has manual 

effort when customer invoice details are missing or incomplete in AutoCount. During 

implementation, the team must confirm: 

required customer master data fields 

required invoice-related fields 

how invoice and e-invoice handling should work in the AutoCount-connected environment 

what the client team must maintain for data readiness 

8.2 Inventory update flow setup 

This is also included as implementation setup. During implementation, both sides must confirm: 

how inventory updates should happen in the agreed workflow 

which user or team is responsible for each stock-related step 

what information MAIA should reference during order handling 

what remains within AutoCount or the client’s current process 

9. Out of Scope 

9.1 Supplier-linked procurement logic 

This is explicitly out of scope. 

The client asked whether MAIA would understand which supplier an item comes from and 

whether incoming stock updates and supplier-side SKU handling are part of the scope. The 

signed proposal clearly states this is not included in the current Phase 1. MAIA’s current fit for 

Dalson is on the sales-order handling and operational coordination layer, not procurement-side 

supplier orchestration. 

9.2 Other exclusions 

Unless separately scoped later, the proposal excludes: 

full ERP replacement 

major restructuring of the client’s accounting or inventory system 

custom workflows outside agreed Phase 1 

advanced approval matrices unless specifically scoped 

custom dashboards or reports beyond standard visibility 

third-party implementation work outside Mindhive’s agreed scope 

••••••••
full procurement automation 

supplier-side purchase workflow automation 

deep master-data correction work inside AutoCount beyond what is reasonably needed for 

agreed setup 

10. Key Workflow Scenarios the Next Owner Should Understand 

10.1 Scenario A, New order received through WhatsApp or forwarded PO 

1. Customer order or PO is received by staff. 

2. Staff forwards the request into MAIA through WhatsApp. 

3. MAIA reads the request, identifies customer and item intent, and references item, customer, 

stock, and pricing information. 

4. If item descriptions are ambiguous, MAIA suggests the closest match and asks for user 

confirmation. 

5. MAIA prepares the sales order draft. 

6. Staff reviews and confirms. 

7. Order is created and tracked in the backend workspace. 

10.2 Scenario B, Sales document generation 

1. Staff asks MAIA to generate the relevant sales order or invoice output. 

2. MAIA references the connected AutoCount environment and agreed document logic. 

3. MAIA prepares the requested PDF output. 

4. Staff reviews. 

5. Staff forwards to customer if correct. 

6. Document and activity are stored against the related order trail. 

10.3 Scenario C, Daily follow-up and task visibility 

1. MAIA generates a daily digest. 

2. Digest highlights pending billing, payment follow-up, and delivery-related next actions. 

3. Users click through to the backend workspace. 

4. Team acts on the next step with better visibility and less reliance on memory. 

10.4 Scenario D, Delivery proof and order trail visibility 

1. Delivery is completed. 

•••
2. Proof of delivery is sent into MAIA. 

3. MAIA stores the proof against the related order. 

4. Users and management can view the full document trail and activity history from the 

backend workspace. 

11. Commercials in the Signed Proposal 

This section is important because the signed proposal differs from the initial meeting quote. 

11.1 One-time implementation fee 

RM15,000 

Covers: 

internal WhatsApp order assistant and backend operational workflow 

pricing and customer rule support 

sales document support 

duplicate-order and ambiguity guardrails 

backend order tracking 

proof of delivery document trail 

training and go-live support 

11.2 Monthly subscription 

RM2,500 per month 

Cap: up to 2,500 orders per month

11.3 Promotional note in signed proposal 

If proposal is signed by 30 April, monthly subscription becomes RM2,000 per month for one 

year. 

11.4 Cloud fee note 

Cloud hosting fee is excluded from the above pricing. 

11.5 Payment terms 

30% upfront upon project commencement 

70% upon completion of UAT 

11.6 Important commercial handover note 

••◦◦◦◦◦◦◦••••••
In the original meeting, the verbal quote mentioned: 

RM20,000 one-time fee 

RM2,500 per month 

500 orders/month cap 

The signed proposal later changed this to: 

RM15,000 one-time fee 

RM2,500 per month 

2,500 orders/month cap

with a promotional RM2,000/month for one year if signed by 30 April 

The next owner should treat the signed proposal as the current commercial reference, but 

should be aware that the client had already raised pricing sensitivity during the meeting. 

12. Implementation Notes for the Next Internal Owner 

The next internal owner should keep the following front of mind: 

Dalson is a small company, so keep implementation practical and grounded. 

Do not position MAIA as replacing AutoCount. 

Do not promise procurement-side supplier logic. 

Be very careful with SKU-alias / item-description matching because this is one of the 

client’s most real pain points. 

E-invoice handling and inventory update flow are included as setup items, but they still 

require real confirmation work during implementation. 

The client already sees value in MAIA because the current process is manual and 

troublesome, so the implementation story should stay focused on reducing hassle, speeding 

up work, and improving control. 

13. What the Client Must Provide 

Per the signed proposal, Dalson must provide: 

relevant system access or vendor coordination for AutoCount integration 

customer, item, and pricing references 

sample documents and existing flow references 

clarification on rules, exceptions, and desired outcomes 

internal PICs for review and sign-off 

UAT users and timely feedback during testing 

•••••••••••••
required data and workflow clarification for invoice detail readiness and inventory update 

handling 

14. Recommended Next Internal Actions 

1. Treat the signed proposal as the latest commercial and scope reference. 

2. Prepare kickoff around the confirmed Phase 1 workflows only. 

3. Build an implementation checklist specifically for: 

SKU alias / description handling 

invoice detail readiness 

inventory update flow responsibilities 

proof of delivery capture method 

4. Confirm the exact internal PICs from Dalson for sales, invoicing, and stock-related workflow 

clarification. 

5. Keep out-of-scope boundaries clear from day one. 

If you want, I can turn this into a cleaner one-page internal handover summary as well. 

•◦◦◦◦
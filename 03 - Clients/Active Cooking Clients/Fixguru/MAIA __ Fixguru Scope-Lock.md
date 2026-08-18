# MAIA \<\> Fixguru Scope\-Lock









Below is **Fixguru by IAM Worldwide — Scope Lock v1**\. I’m treating this as **UAT / late in\-build** because the 2nd UAT plan explicitly targets client UAT and sign\-off after internal live testing\. fileciteturn2file2



---



# Fixguru by IAM Worldwide — Scope Lock v1



**Date:** 22 Jun 2026  

**Build stage:** UAT / late in\-build  

**Scope posture:** conservative — items are only “LOCKED” where there is clear baseline scope plus current build/test definition\. Where later decisions appear internal\-only or where client sign\-off is not evidenced, the item is **NEEDS SCOPING** or **AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED**\.



## 1\. Source Manifest



|Source|Date / range|Processed status|Citation key|
|---|---|---|---|
|Fixguru SOW|Effective 22 Jul 2025|Processed for contractual baseline|`[SOW]` fileciteturn2file0|
|Fixguru Scope Gathering|17 Jul 2025|Processed for original discovery|`[SG]` fileciteturn3file7|
|Fixguru Functional Requirements|20 Aug 2025 notes|Processed for detailed workflow|`[FR]` fileciteturn3file2|
|RSC Box Calculator|undated|Processed for calculator specifics|`[RSC]` fileciteturn3file3|
|E\-Invoice Sync notes|3 Mar 2026|Processed for e\-invoice rules|`[EI]` fileciteturn3file0|
|UAT Brief transcript|7 Apr 2026|Processed for UAT/e\-invoice clarification|`[UAT-B]` fileciteturn3file19|
|UAT On\-site transcript \+ UAT Gaps|14 May 2026|Processed for UAT divergences|`[UAT-G]` fileciteturn2file1|
|2nd UAT Plan|Created 6 Jun 2026; updated 7 Jun 2026|Processed for current build/test state|`[UAT2]` fileciteturn2file2|



### Fireflies live scan coverage



Fireflies connector was available\. Search was run by title keyword `Fixguru`, title keyword `IAM Worldwide`, and participant `marcus@iamworldwide.com``.my`\. The connector returned 12 Fixguru\-title meetings and 7 Marcus\-participant matches\. Meetings found in Fireflies but not clearly present as project files are treated as **coverage holes**\.



|Fireflies meeting|Date|Participants / clue|Matched by|Already in project?|
|---|---|---|---|---|
|Fixguru \<\> Mindhive \- UAT \(On\-site\)|14 May 2026|Mindhive \+ client Gmail accounts|title|Y|
|Fixguru \<\> Mindhive \- UAT Brief|7 Apr 2026|Brendan \+ client Gmail|title|Y|
|Fixguru \<\> MH Meta account finalization|17 Mar 2026|Brendan \+ Marcus|title / participant|N|
|Fixguru E\-Invoicing Brief|12 Mar 2026|Ashleigh, Ivan, Brendan, Azib|title|N|
|Mindhive x Fixguru MAIA Sync|3 Mar 2026|Ivan, Yvonne, Marcus|title / participant|Partial — notes present|
|Fixguru \<\> MH Role Permission Discussion|26 Jan 2026|Brendan, Marcus, Yvonne|title / participant|N|
|Fixguru \<\> MH GO\-Live Checklist|4 Dec 2025|Brendan, Marcus, Yvonne|title / participant|N|
|Ultimax \& Fixguru Inventory with Ivan|25 Nov 2025|Brendan, Sadman, Ivan|title|N|
|Fixguru \<\> MH Discussion|13 Nov 2025|Brendan, Marcus, Yvonne|title / participant|N|
|Fixguru \<\> MH Custom Order Discussion|18 Sep 2025|Brendan, Ivan, Marcus|title / participant|Partial — RSC notes present|
|Fixguru \<\> MH MAIA Confirmation Discussion|9 Sep 2025|Brendan, Ivan, Marcus, Yvonne, Steven|title / participant|N|
|Fixguru \<\> MH Meta account finalization|17 Mar 2026, silent/skipped|Brendan \+ Marcus|title / participant|N|



**Coverage warning:** the Scope Lock below is good enough to run a confirmation conversation, but not good enough to claim final contractual certainty\. Several Fireflies meetings found by connector are not present as project files, and the Forensic Account Dossier / Client Narrative were not found as standalone uploaded source files in this workspace\. That weakens confidence around supersession authority\.



---



## 2\. Scope Lock Summary



### Status counts



|Status|Count|
|---|---|
|LOCKED|7|
|LOCKED \(SUPERSEDED\)|0|
|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|8|
|NEEDS SCOPING|9|
|OUT OF SCOPE|5|



### Blocking open items



|Priority|Blocking item|Why it blocks|
|---|---|---|
|1|**Credit limit exposure \+ 2\-way/snapshot policy**|SOW requires credit checks before invoice / DO flow, while UAT gaps show current exposure depends on migration snapshot and forward sync rules\. fileciteturn2file0 fileciteturn2file1|
|2|**AutoCount document/template parity**|Client expects AutoCount\-style PDF/document output, but current notes show wrong templates and draft\-PDF expectation mismatch\. fileciteturn2file1|
|3|**HQ / branch / contact sync**|Multiple branches, contacts, and delivery addresses are current UAT blockers, not merely polish\. fileciteturn2file1 fileciteturn2file2|
|4|**Historical pricing \+ item\-level discount**|Fixguru quoting depends on last transacted price and discount %, and item\-level discount was not supported at first UAT\. fileciteturn2file1|
|5|**Delivery method as SKU**|Fixguru treats some delivery charges as itemized SKUs for invoicing/accounting; the chatbot had treated “3PL Lalamove” as a delivery method instead\. fileciteturn3file15|



### Top items to confirm with client



1. **Confirm the migration cut\-off model:** “Do you accept that MAIA will only query documents after the agreed cut\-off date, with pre\-cut\-off credit exposure loaded as a snapshot?” fileciteturn2file1  

2. **Confirm PDF/document behaviour:** “Do you require exact AutoCount PDF output in draft mode, or is MAIA draft PDF acceptable until submission pushes to AutoCount?” fileciteturn2file1  

3. **Confirm calculator boundary:** “For go\-live, are only RSC \+ Diecut calculators included, with Pizza / Layer Pad / 5 Panels as change requests?” fileciteturn2file1  

4. **Confirm branch/contact source of truth:** “Should MAIA always pull customer branch, delivery address, and contact person from AutoCount, and block order creation when branch resolution is ambiguous?” fileciteturn2file1  

5. **Confirm historical pricing acceptance criteria:** “Should pricing history show standard price, historical discount %, and nett price from last invoice / average price / quotation history?” fileciteturn3file16  

    

---



## 3\. Locked Scope



### LOCK\-01 — Internal WhatsApp MAIA chatbot for order\-to\-delivery flow



**Status:** LOCKED  

**SOW origin:** Fixguru bought an internal WhatsApp\-based AI chatbot integrated with MAIA and AutoCount to reduce manual re\-keying, shorten order\-to\-invoice processing for 30\+ orders/day, and coordinate Sales, Operations, and Drivers\. fileciteturn2file0  

**Current definition:** Internal users use WhatsApp/chatbot to draft quotations/pro\-forma invoices, handle order workflow, update payment status, coordinate DO/invoice flow, and send operational status back to the relevant internal team\. fileciteturn2file0  

**User\-facing flow:** Sales receives customer request → Sales forwards chat/files/images to chatbot → chatbot drafts quotation / pro\-forma invoice → Sales reviews and proceeds through payment/credit check → MAIA creates downstream Sales Order / DO / invoice status updates\. fileciteturn2file0  

**Acceptance criteria:** Chatbot can create the core sales documents in MAIA; internal users can use the chatbot during business operations; the flow remains internal, not customer\-facing\. fileciteturn2file0  

**Confidence:** HIGH for inclusion; MED for exact chatbot behaviours because several chatbot items remain in retest / first\-time test in UAT2\. fileciteturn2file2  



---



### LOCK\-02 — AutoCount as master data / accounting source



**Status:** LOCKED  

**SOW origin:** MAIA ↔ AutoCount push/pull sync is scoped for quotes, customers, products, invoices, credit notes, receipts, and payment vouchers, with master data living in AutoCount\. fileciteturn2file0  

**Current definition:** AutoCount remains authoritative for customer/product/accounting data; MAIA consumes and writes operational documents according to integration rules\. fileciteturn2file0  

**User\-facing flow:** User selects customers/items in MAIA/chatbot → MAIA uses AutoCount\-backed records → submitted documents sync to AutoCount according to agreed direction/frequency\. fileciteturn2file0  

**Acceptance criteria:** Customer/product records used in MAIA match AutoCount identities, especially external SKU/item code, which UAT2 marks as done\. fileciteturn2file2  

**Confidence:** MED\. External SKU item code is marked done, but broader branch/contact and 2\-way sync remain unresolved\. fileciteturn2file2  



---



### LOCK\-03 — RSC \+ Diecut calculator, price flows into quotation / sales order



**Status:** LOCKED  

**SOW origin:** SOW includes a custom box quotation module based on IAM Excel\. fileciteturn2file0  

**Current definition:** MAIA supports the RSC \+ Diecut calculators for UAT/go\-live; UAT2 marks “Calculator \(RSC \+ Diecut\) — price flows into QTN \+ SO” as an already\-passing smoke\-check item\. fileciteturn2file2  

**User\-facing flow:** Sales opens quotation/SO → launches calculator → enters box parameters → calculator computes price → calculated result populates the quotation / SO line\. fileciteturn2file2  

**Acceptance criteria:** RSC \+ Diecut calculator outputs populate QTN \+ SO correctly during smoke test\. fileciteturn2file2  

**Confidence:** HIGH for RSC \+ Diecut inclusion; LOW for future formula\-version handling because updated Excel formulas are explicitly flagged as a CR / future\-versioning issue\. fileciteturn2file1  



---



### LOCK\-04 — FOC quantity handling



**Status:** LOCKED  

**SOW origin:** Order and stock handling are part of order\-to\-delivery and inventory scope\. fileciteturn2file0  

**Current definition:** FOC items are in the build and marked done / already passing in UAT2\. fileciteturn2file2  

**User\-facing flow:** Sales enters billable quantity plus FOC quantity → system records the commercial quantity and free quantity → stock decrements for both, while revenue only follows billable quantity\. fileciteturn2file1  

**Acceptance criteria:** UAT2 smoke\-check passes “FOC items — submit works, correct lines\.” fileciteturn2file2  

**Confidence:** MED\. The behaviour is marked done, but the exact AutoCount\-vs\-ERPNext row modelling still needs implementation\-level validation\. fileciteturn2file1  



---



### LOCK\-05 — Pick shipping method \+ search customer by phone number



**Status:** LOCKED  

**SOW origin:** Delivery method and same\-day pickup/Lalamove support are part of SOW integration and delivery flow\. fileciteturn2file0  

**Current definition:** UAT2 marks “Pick shipping method” and “Search customer by phone number” as ready\-for\-UAT / already\-passing smoke\-check items\. fileciteturn2file2  

**User\-facing flow:** Sales searches customer by phone number → selects customer → picks shipping method → order proceeds into quotation/SO flow\. fileciteturn2file2  

**Acceptance criteria:** Both flows pass smoke check in the internal live test session\. fileciteturn2file2  

**Confidence:** MED\. Basic selection is passing, but “delivery method as SKU” is separate and not locked\. fileciteturn2file2  



---



### LOCK\-06 — Non\-draft document locking / read\-only behaviour



**Status:** LOCKED  

**SOW origin:** SOW requires approval if DO changes or DO item differs from pro\-forma invoice\. fileciteturn2file0  

**Current definition:** Functional requirements distinguish draft vs non\-draft actions: draft records can be edited/submitted/deleted/exported, while non\-draft records are usually not editable/submittable/deletable, except customers\. fileciteturn3file10  

**User\-facing flow:** User edits draft document → submits document → submitted document becomes read\-only except allowed workflow actions\. fileciteturn3file10  

**Acceptance criteria:** Non\-draft invoices show read\-only header, address, item, pricing, terms, and conditions fields\. fileciteturn3file4  

**Confidence:** MED\. Functional spec is clear, but UAT on multi\-edit chatbot behaviour remains problematic\. fileciteturn2file1  



---



### LOCK\-07 — Explicit exclusions: B2C chat, refunds/returns automation, promo code logic



**Status:** OUT OF SCOPE / locked exclusion  

**SOW origin:** SOW explicitly excludes customer\-facing B2C chat flows, product refunds/returns handling, and promo\-code / seasonal campaign logic\. fileciteturn2file0  

**Current definition:** These should not be built unless separately scoped as a variation/change request\. fileciteturn2file0  

**Acceptance criteria:** UAT and client confirmation exclude B2C customer chatbot, automated refund/return processing, and promo\-code/campaign rules\. fileciteturn2file0  

**Confidence:** HIGH\.



---



## 4\. Needs\-Scoping Register



|ID|Item|Status|What is unclear|Blocking?|Decision needed|
|---|---|---|---|---|---|
|NS\-01|Credit limit exposure|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|SOW requires credit checks before invoice/DO, but UAT gaps show exposure depends on snapshot, outstanding balance, overdue amount, and forward 2\-way sync\. fileciteturn2file0 fileciteturn2file1|Yes|Confirm cut\-off date, source file, fields, refresh frequency, and what happens to invoices created outside MAIA\.|
|NS\-02|2\-way sync after cut\-off|NEEDS SCOPING|UAT gaps say two\-way sync for all docs is required and migration uses a cut\-off; UAT2 still marks 2\-way sync as testing / needs alignment\. fileciteturn2file1 fileciteturn2file2|Yes|Confirm document types, cut\-off date, conflict policy, and direction of truth for post\-cut\-off edits\.|
|NS\-03|Historical pricing \+ item discount|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|Client quoting depends on last transacted price \+ discount %, but item\-level discount was not supported in first UAT and remains a retest item\. fileciteturn2file1 fileciteturn3file16|Yes|Confirm whether source history is last invoice, average price, quotation history, or all three\.|
|NS\-04|Draft Fixguru custom PDF template|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|Client expects Fixguru/AutoCount\-style templates; UAT gaps say wrong PDF templates were pushed and draft chatbot PDFs are default\. fileciteturn2file1|Yes|Confirm exact draft vs submitted PDF behaviour and template source\.|
|NS\-05|Delivery method as SKU line item|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|UAT gaps show Fixguru treats delivery method/charges as SKU/itemized lines for accounting, while chatbot treated “3PL Lalamove” as delivery method\. fileciteturn3file15|Yes|Confirm which delivery methods are SKUs, whether price is editable, and whether they appear on QTN/SO/SI/DO\.|
|NS\-06|HQ \+ branch contacts / delivery addresses|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|UAT gaps identify multiple contacts and branch\-specific delivery addresses as not captured; UAT2 marks HQ \+ branch contact as pending/blocker/dev fixing\. fileciteturn2file1 fileciteturn2file2|Yes|Confirm branch matching rule and fallback when customer name/phone maps to multiple branches\.|
|NS\-07|Volume fields / m³ on item profile and DN PDF|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|UAT gaps say volume metric m³ must show on delivery note; UAT2 marks volume fields as in progress / first\-time test\. fileciteturn2file1 fileciteturn2file2|Medium|Confirm fields, formulas, source, and PDF placement\.|
|NS\-08|Item shelf in DN additional note|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|UAT2 says item shelf is scoped as “populate shelf no\. in additional note \(DN only\)” but still fixing/retest\. fileciteturn2file2|Medium|Confirm whether shelf belongs only on DN note or also picking list / warehouse view\.|
|NS\-09|UOM conversion / multi\-UOM chatbot|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|UAT2 says multi\-UOM chatbot was broken, single UOM works, and multi\-item UOM requires retest\. fileciteturn2file2|Medium|Confirm all UOM pairs and conversion authority from AutoCount\.|
|NS\-10|2\-warehouse item handling|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|UAT2 marks 2\-warehouse chatbot as bug/fix/retest\. fileciteturn2file2|Medium|Confirm warehouse selection, stock\-check priority, and fallback if stock exists in another warehouse\.|
|NS\-11|Language preference|AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED|SOW requires English, Malay, Mandarin; UAT gaps say multi\-language response was not working and note English/BM response with Chinese intake ambiguity\. fileciteturn2file0 fileciteturn2file1|Medium|Confirm final supported input/output languages for go\-live\.|
|NS\-12|Raw material → finished goods backward visibility|NEEDS SCOPING|UAT gaps describe finished stock \+ raw\-material convertible quantity and raw→finished yield variance, but notes say to ask Fixguru whether to customise/quote/spec and charge\. fileciteturn2file1|Medium|Confirm whether this is go\-live scope, chargeable CR, or manual AutoCount process\.|
|NS\-13|Additional calculators beyond RSC \+ Diecut|OUT OF SCOPE unless CR|UAT gaps state MAIA supports 2 calculators, while Fixguru now has 5; decision says allow only 2 and treat more as CR\. fileciteturn2file1|No|Confirm Pizza / Layer Pad / 5 Panels are post\-go\-live CRs\.|
|NS\-14|Updated RSC \+ Diecut formulas|NEEDS SCOPING / likely CR|UAT gaps say Fixguru updated Excel formula versions and asks how future versioning is handled; same note says updated RSC/Diecut Excel is a CR\. fileciteturn2file1|Medium|Confirm whether current implementation uses old formula, and whether latest Excel is included or chargeable\.|
|NS\-15|WhatsApp reply\-context targeting|OUT OF SCOPE|UAT gaps explicitly list reply functions in WhatsApp to target a certain chat as out of scope\. fileciteturn2file1|No|Confirm not included in UAT acceptance\.|



---



## 5\. Supersessions Log



|Risk|SOW said|Now intended|Changed by / when|Client agreed?|
|---|---|---|---|---|
|High|SOW says 100% automated nightly sync of customers, products, invoices, and receipts to AutoCount and MAIA↔AutoCount EOD sync for quotes/customers/products/invoices/CN/receipts/payment vouchers\. fileciteturn2file0|Current UAT approach discusses snapshot of credit exposure, migration cut\-off, and two\-way sync after cut\-off\. fileciteturn2file1|Internal UAT\-gap notes, May/Jun 2026\. fileciteturn2file1|NOT EVIDENCED — confirm with client\.|
|High|SOW says chatbot drafts quotation \& pro\-forma invoice and generates pro\-forma invoice / DO on confirmation\. fileciteturn2file0|Client appears to expect AutoCount PDF/template parity even in draft mode; internal note suggests push upon submission / mimic template\. fileciteturn2file1|UAT gap notes after 14 May UAT\. fileciteturn2file1|NOT EVIDENCED — confirm draft PDF behaviour\.|
|Medium|SOW says custom box quotation module based on IAM Excel sheet\. fileciteturn2file0|Current decision limits included calculators to RSC \+ Diecut; additional calculators are CR\. fileciteturn2file1|Internal UAT\-gap decision\. fileciteturn2file1|NOT EVIDENCED — confirm with client\.|
|Medium|SOW requires English, Malay, Mandarin\. fileciteturn2file0|UAT gaps suggest Chinese intake may be accepted but Chinese response may not be included, while English/BM response is noted\. fileciteturn2file1|Internal UAT\-gap note\. fileciteturn2file1|NOT EVIDENCED — confirm final language output\.|
|Medium|SOW includes inventory/stock tracking and product availability checks\. fileciteturn2file0|Raw\-material conversion / BOM\-aware committable quantity is treated as something to ask Fixguru about, quote/spec, and potentially charge\. fileciteturn2file1|Internal UAT\-gap note\. fileciteturn2file1|NOT EVIDENCED — confirm inclusion or CR\.|



---



## 6\. Out\-of\-Scope / Explicit Exclusions



|Item|Reason|Source|
|---|---|---|
|Customer\-facing B2C chat flows|Explicit SOW exclusion|fileciteturn2file0|
|Product refunds and returns automation|Explicit SOW exclusion; manual process remains|fileciteturn2file0|
|Promo\-code / seasonal campaign logic|Explicit SOW exclusion|fileciteturn2file0|
|WhatsApp reply\-context targeting|Explicitly listed as out of scope in UAT gaps|fileciteturn2file1|
|Additional calculators beyond RSC \+ Diecut|UAT\-gap decision says only 2 calculators are included; extra calculators are CR|fileciteturn2file1|



---



## 7\. Source\-Conflict Register



|Conflict|Source A|Source B|Resolution|
|---|---|---|---|
|**Nightly EOD sync vs cut\-off / snapshot / two\-way sync**|SOW says 100% automated nightly sync and EOD push/pull for key objects\. fileciteturn2file0|UAT gaps discuss snapshot, cut\-off, and two\-way sync for all docs\. fileciteturn2file1|Unresolved\. Treat as client\-confirmation blocker\.|
|**SOW language support vs UAT language behaviour**|SOW requires English, Malay, Mandarin\. fileciteturn2file0|UAT gaps say multi\-language response was not working and note ambiguity around Chinese response\. fileciteturn2file1|Unresolved\. Confirm input/output languages\.|
|**MAIA draft documents vs AutoCount draft\-template expectation**|SOW says bot drafts quotation/pro\-forma and downstream docs\. fileciteturn2file0|UAT gaps say wrong PDF templates and client seems to expect AutoCount PDF from start to end, including draft mode\. fileciteturn2file1|Unresolved\. Confirm draft and submitted PDF behaviour\.|
|**Inventory tracking vs raw\-material conversion planning**|SOW includes inventory/stock tracking and AutoCount availability checks\. fileciteturn2file0|UAT gaps describe raw→finished conversion and mark customisation/spec/charge discussion\. fileciteturn2file1|Treat raw\-material committable planning as not locked\.|
|**Custom box module vs formula/version changes**|SOW says custom box quotation module based on IAM Excel sheet\. fileciteturn2file0|UAT gaps say updated RSC \+ Diecut formula versions require assessment and may be CR\. fileciteturn2file1|Current RSC \+ Diecut implementation locked only to tested formula version; updated formulas need confirmation/CR\.|



---



## 8\. Client Confirmation Agenda



Send\-ready list:



1. **Credit exposure cut\-off:** “Please confirm the cut\-off date for credit exposure migration\. From that date forward, should all QTN/SO/SI/CN/receipts/payment vouchers sync two\-way between MAIA and AutoCount?”  

2. **Pre\-cut\-off history:** “Do you accept that documents before the cut\-off date will not be fully queryable in MAIA, except for agreed snapshot fields such as credit limit, outstanding balance, overdue amount, and current exposure?”  

3. **Historical pricing:** “For pricing history, should MAIA show last invoice price, average price, quotation history, or all three — and must it show standard price, discount %, and nett price?”  

4. **PDF template:** “Do you require Fixguru’s AutoCount\-style PDF template before document submission, or only after submission to AutoCount?”  

5. **Delivery charge as SKU:** “Please confirm the exact delivery\-charge SKUs, for example 3PL Lalamove, and whether chatbot should always add them as item lines rather than delivery methods\.”  

6. **Branch/contact handling:** “When one customer has multiple branches or delivery contacts, should MAIA require the user to choose the branch before creating QTN/SO?”  

7. **Language support:** “For go\-live, should chatbot support English, Malay, and Mandarin both as input and output, or only English/BM output with Chinese input tolerated?”  

8. **Volume/shelf fields:** “Please confirm where volume m³ and shelf number must appear: item profile, picking list, delivery note PDF, chatbot response, or all of these\.”  

9. **Raw material conversion:** “Do you want MAIA to compute committable custom\-box quantity from finished stock plus convertible raw material, or will that remain a manual AutoCount planning process for now?”  

10. **Calculator boundary:** “Please confirm RSC \+ Diecut are the only go\-live calculators, and Pizza / Layer Pad / 5 Panels plus updated formulas are handled as change requests\.”

    

---



## 9\. Bottom Line



The safe build line is: **finish and UAT the existing MAIA order/chatbot flow, RSC\+Diecut calculator, FOC, external SKU, basic shipping selection, and customer phone search; do not claim lock on credit exposure, 2\-way sync, historical pricing, branch contacts, draft AutoCount PDF parity, delivery method\-as\-SKU, language output, or raw\-material conversion until client confirms\.**



The highest\-risk false lock is **pretending the migration/sync model is already agreed**\. It is not evidenced as client\-agreed in the sources available here\.


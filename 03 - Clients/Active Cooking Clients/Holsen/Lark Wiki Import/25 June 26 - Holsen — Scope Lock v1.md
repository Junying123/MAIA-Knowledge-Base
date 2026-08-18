<title>25 June 26 - Holsen — Scope Lock v1</title>

# Holsen — Scope Lock v1

**Date:** 23 Jun 2026  

**Build stage:** In-build / UAT  

**Overall lock posture:** Conservative. Several important items are buildable, but the invoice/DO/SQL transition, C3 enforcement model, user permissions, and low/out-of-stock alerts should not be treated as fully locked without client confirmation. ⚠️



---



## 1. Source Manifest



| Source | Date / range | Processed | Notes |
|-|-|-|-|
| `[SOW]` SOW for [MAIA] Holsen | Effective 10 Dec 2025 | Targeted extraction, not full read | Contractual baseline. Defines MAIA phases, A1 order→DO flow, document generation, pricing, approvals, A3 compliance/batch/COA/C3 handling. fileciteturn3file0 |
| `[CP-08Jan]` Compliance Certifications — Current Process | 8 Jan 2026 | Targeted extraction | C1/C3/COA current process and decision rules. fileciteturn3file5 |
| `[CP-11Feb]` Compliance Certification | 11 Feb 2026 | Targeted extraction | C1/C3/A57, batch tracking, UBS/SQL transition, PSO, K1/COA docs. fileciteturn2file1 |
| `[UAT-11May]` C1/C3 UAT briefing | 11 May 2026 | Targeted extraction | Batch selection, picklist, low/out-of-stock reminder, C3 testing fragments. fileciteturn3file10 |
| `[UAT-15May]` C1/C3 UAT | 15 May 2026 | Targeted extraction | C1 certificate extraction, C3 tax behaviour, PSO, batch selection, stock alert defects. fileciteturn2file2 |
| `[UAT-22May]` C1/C3 Testing | 22 May 2026 | Targeted extraction | Stock alert / front-end warning and testing issues. fileciteturn1file11 |
| `[Setup-18Mar]` MAIA setup/testing | 18 Mar 2026 | Targeted extraction | Roles, dashboards, pricing, UOM/product ambiguity. fileciteturn3file12 |
| Fireflies live scan | Jan–Feb 2026 | Full connector fetch for 3 meetings | Found: Jan 12 Tax Exempt Order Handling, Feb 10 Product Demo, Feb 11 C1/C3 Discussion. Feb 10 and Jan 12 were not obviously duplicated as uploaded transcript files. |
| WhatsApp / chat exports | Not found | Not processed | No explicit WhatsApp export surfaced in project-file search. Do not infer WhatsApp commitments. |



**Queries run:** SOW scope, C1/C3, COA, PSO, K1, UBS/SQL, UAT, low stock, permissions, pricing, delivery note, invoice, picklist, Fireflies Holsen/title/participant scans.  

**Coverage gap:** Fireflies has live meetings not all represented as uploaded raw files. Confidence is **medium**, not high.



---



## 2. Scope Lock Summary



| Status | Count |
|-|-|
| **LOCKED** | 3 |
| **LOCKED (SUPERSEDED)** | 3 |
| **AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED** | 6 |
| **NEEDS SCOPING** | 6 |
| **OUT OF SCOPE / EXPLICITLY DEFERRED** | 3 |



### Blocking open items



| Priority | Item | Why it blocks |
|-|-|-|
| 1 | **UBS/SQL transition behaviour** | Determines whether MAIA generates official DO/SI, uploads UBS invoice PDFs, or later defers to SQL-generated PDFs. Current direction is clear but final operating SOP still needs confirmation. fileciteturn2file1 |
| 2 | **C3 enforcement model** | SOW says C3 stock can be hard locked by customer; later notes say C3 must be item + customer + quantity/quota and UAT still discusses batch choice and validation. fileciteturn3file3 fileciteturn3file5 |
| 3 | **Batch selection at DN/picklist creation** | Client said picklist without batch number is “pointless”; this affects fulfillment usability. fileciteturn3file18 |
| 4 | **Role/permission matrix** | UAT surfaced permission issues across logistics/sales/admin roles; exact permission matrix is not locked. fileciteturn2file2 |
| 5 | **Low/out-of-stock alert behaviour** | Raised in UAT as missing/not fixed; not enough acceptance criteria. fileciteturn2file2 |



---



# 3. Locked Scope



## L-01 — Sales PO intake → draft quotation / sales order



**Status:** LOCKED  

**Confidence:** MEDIUM-HIGH



**SOW origin:** Phase A1 includes a Sales Agent Assistant for WhatsApp/email PO intake, extraction of customer/SKU/quantity/delivery date, review/edit before confirmation, and quotation/SO generation. fileciteturn3file1



**Current locked definition:**  

Sales users can submit customer order information via WhatsApp/email or chatbot prompt. MAIA extracts the order fields, creates a draft quotation or sales order, and allows user review/edit before submission. For commodity / negotiated pricing, the user must confirm or input the selling price rather than relying blindly on fixed pricing. fileciteturn3file1



**User-facing flow:**  

Sales user receives PO → forwards/uploads/prompts MAIA → MAIA extracts customer, SKU, quantity, delivery date → user reviews extracted draft → user enters/confirms price → MAIA generates draft quotation/SO → user amends or submits.



**Acceptance criteria:**  

1. PDF/image/text PO can create an editable draft order.  
2. Extracted fields include at least customer, SKU, quantity, and delivery date where available.  
3. User can edit extracted fields before submission.  
4. Commodity/manual-price items prompt for price confirmation.  
5. Missing SKU or SKU not in MAIA inventory is surfaced rather than silently accepted.

---



## L-02 — Order lifecycle dashboard / daily digest for pending actions



**Status:** LOCKED  

**Confidence:** MEDIUM



**SOW origin:** SOW includes Daily Digests for unprocessed/incomplete orders, pending actions, and unclosed Sales Orders. fileciteturn2file0



**Current locked definition:**  

MAIA should expose pending/draft order states and send daily digest reminders to sales users for orders requiring action. Role-specific dashboard visibility is not fully locked and is handled separately under `NS-04`.



**User-facing flow:**  

Order remains draft/pending → MAIA identifies incomplete state → digest/dashboard shows action needed → sales user opens order and resolves.



**Acceptance criteria:**  

1. Draft/pending orders appear in dashboard/digest.  
2. Digest identifies order ID/customer/status/action needed.  
3. User can navigate from digest/dashboard to the relevant order.  
4. Role-specific visibility follows the confirmed permission matrix once `NS-04` is resolved.

---



## L-03 — C1 current-process rule: customer + tariff-code coverage



**Status:** LOCKED  

**Confidence:** HIGH



**SOW origin:** SOW says C1 stock is restricted to customers covered by a valid C1 certificate on the customer profile. fileciteturn3file3



**Current locked definition:**  

C1 is treated as customer-level certificate coverage tied to tariff/HS code and manufactured goods. Holsen stores the latest C1 under the customer, archives older copies, and checks whether ordered manufactured goods match C1 tariff coverage before treating order lines as tax exempt. fileciteturn3file5



**User-facing flow:**  

Admin uploads latest C1 certificate under customer → order is created → MAIA checks customer C1 coverage and item tariff/HS code → if covered, line can be treated as tax exempt → certificate reference is available for audit trail.



**Acceptance criteria:**  

1. Customer profile supports latest active C1 certificate attachment.  
2. Older C1 versions can be retained/archived.  
3. C1 eligibility checks customer + tariff/HS code coverage.  
4. C1 does not require MAIA quantity/quota depletion.  
5. C1-exempt order lines can be differentiated from non-exempt lines.

---



# 4. Locked Scope — Superseded Items



## LS-01 — Invoice handling during UBS period



**Status:** LOCKED (SUPERSEDED)  

**Confidence:** MEDIUM-HIGH



**SOW said:** MAIA supports output generation including invoice, proforma invoice, credit note/debit note. fileciteturn2file0



**Now intended:** During the UBS period, UBS remains the official invoicing/e-invoice source. MAIA may track the order/invoice lifecycle, but UBS invoice PDFs are manually uploaded into MAIA because native MAIA invoice PDFs are not compliant e-invoices. fileciteturn2file1



**Changed by:** Feb 11 C1/C3 discussion / UBS-SQL transition decision; reflected in compliance summary. fileciteturn2file1



**Client agreed?** YES, based on meeting-summary evidence that manual UBS invoice upload will continue until SQL fully replaces UBS. fileciteturn3file8



**User-facing flow:**  

MAIA creates/tracks order → Holsen generates official invoice in UBS → user uploads UBS invoice PDF into MAIA → MAIA uses uploaded invoice to close billing visibility / order status.



**Acceptance criteria:**  

1. MAIA invoice record supports manual upload of official UBS invoice PDF.  
2. Uploaded UBS invoice is returned/displayed when user requests the invoice.  
3. MAIA does not present native invoice PDF as official e-invoice during UBS period.  
4. Order lifecycle can show invoice uploaded / invoice missing.

---



## LS-02 — Delivery note / batch number / picklist handling



**Status:** LOCKED (SUPERSEDED) for direction, **implementation details still need scoping**  

**Confidence:** MEDIUM



**SOW said:** Phase A1 includes Order → Delivery Note flow and document generation for Picking List, DO, and Invoice; Phase A3 links K1 and batch data to delivery/invoice documents. fileciteturn3file4



**Now intended:** UAT clarified that the delivery note must allow batch-number selection and picklist generation based on the delivery note; client explicitly says picklist/document generation without batch number is not useful. fileciteturn3file10 fileciteturn3file18



**Changed by:** May UAT feedback.



**Client agreed?** YES on need for batch number selection; NOT FULLY EVIDENCED on final UI/validation behaviour.



**User-facing flow:**  

User creates DN from SO/invoice → user selects batch number(s) for each relevant item → MAIA deducts/allocates batch stock → MAIA generates DN and picklist with batch reference.



**Acceptance criteria:**  

1. Draft DN allows batch selection before submission.  
2. Picklist generated from DN includes selected batch numbers.  
3. Batch stock deducts from selected batch, not arbitrary stock.  
4. If no batch is selected for batch-controlled item, system blocks or warns according to confirmed rule.

---



## LS-03 — PSO automation instead of manual-only poison alert



**Status:** LOCKED (SUPERSEDED)  

**Confidence:** MEDIUM



**SOW said:** Poison/hazardous items trigger a “POISON FORM REQUIRED” alert and signal Admin/Logistics to manually prepare and print the physical Poison Form. fileciteturn3file1



**Now intended:** Later C1/C3 compliance notes say PSO is currently manual but automating PSO generation could reduce workload and improve compliance; UAT shows PSO generation being tested for poison-tagged items. fileciteturn2file1 fileciteturn2file2



**Changed by:** Feb 11 compliance discussion and May UAT.



**Client agreed?** YES in principle, because PSO generation was tested and accepted as possible for poison-tagged products. Exact PSO template fields still need final template confirmation.



**User-facing flow:**  

Order/DN includes poison-category SKU → MAIA detects poison flag → MAIA generates PSO using shipment/customer/item/quantity data → user prints PSO for customer acknowledgement.



**Acceptance criteria:**  

1. Item master has poison/non-poison flag.  
2. DN containing poison SKU triggers PSO generation.  
3. PSO includes only poison SKUs, not non-poison items on the same DN.  
4. PSO uses Holsen-approved template.  
5. User can print/download PSO alongside DN/picklist.

---



# 5. Agreed in Principle — Implementation Not Locked



## AIP-01 — C3 compliance model



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**Confidence:** MEDIUM



**Agreed direction:** C3 is not generic “this item is C3.” It must be tracked as item → customer → approved quantity/quota, and must reserve/deduct inventory against that customer’s approved C3 allocation. fileciteturn3file5



**Open implementation decisions:**  

1. Is C3 enforced as stock hidden from non-authorized customers, as hard block, or as warning + confirmation?  
2. Is C3 represented as batch restriction, order-level allocation, item-line exemption, or all three?  
3. How should overlapping C1/C3 coverage on the same customer PO be handled? UAT shows overlap and user prompting, but final rule is not cleanly locked. fileciteturn2file2

**Precise client question:**  

“When a PO contains both C3-covered and non-C3/C1-covered items, should MAIA split the order automatically, warn and allow user choice, or block until the user separates lines?”



---



## AIP-02 — COA handling and masking/blinding



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**Confidence:** MEDIUM



**Agreed direction:** COA is batch-tied and customer-dependent; during batch ingestion Holsen attaches COA, and during fulfillment MAIA surfaces the relevant COA in the customer-required format. fileciteturn3file13



**Open implementation decisions:**  

1. What exact COA formats exist: standard, detailed, masked/blinded?  
2. Should MAIA store both full and masked copies, or generate masking instructions?  
3. Which customer profile field determines COA format?  
4. Which document bundle includes COA by default?

**Precise client question:**  

“For each customer, should MAIA default to no COA, standard COA, detailed COA, or masked COA — and will Holsen upload pre-masked files or expect MAIA to generate masking?”



---



## AIP-03 — Batch intake / K1 / stock-entry document package



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**Confidence:** MEDIUM



**Agreed direction:** Batch intake should capture batch/lot, expiry, K1 where relevant, COA PDF, and tax/restriction status. SOW also defines K1 as mandatory for C3/imported goods and tied to stock. fileciteturn3file4



**Open implementation decisions:**  

1. Minimum required batch fields for go-live.  
2. Whether K1 is extracted into structured fields or only attached as a tagged document.  
3. Whether supply invoice, packing list, BL, SDS are structured attachments or generic attachments.  
4. What fields are required for SST reporting / Jados C02.

**Precise client question:**  

“For go-live, which batch documents must be structured fields versus simple attachments: K1, COA, supply invoice, packing list, BL, SDS?”



---



## AIP-04 — Customer-specific pricing / manual commodity pricing



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**Confidence:** MEDIUM



**SOW baseline:** SOW contains both customer-specific pricing configuration / automatic retrieval and manual price entry for negotiated commodity pricing. fileciteturn3file1 fileciteturn3file3



**Why not locked:** The SOW itself contains two pricing patterns; later setup/UAT discussions mention unit price input, customer-specific price, minimum price, and permissions. The exact rule hierarchy is not locked.



**Precise client question:**  

“For each product category, should MAIA price by customer-specific price list, default item price, manual price entry, or minimum-price guardrail only?”



---



## AIP-05 — Dashboard / role-based visibility



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**Confidence:** MEDIUM



**Agreed direction:** Different roles need different dashboard views; production/logistics should not see all sales/finance data, while admin can see broader views. Setup discussion indicates role-dependent visibility and dashboard simplification. fileciteturn3file14



**Open implementation decisions:**  

1. Exact roles: Sales, Finance, Logistics, Production, Admin, Super Admin.  
2. Which dashboard widgets each role can see.  
3. Which actions each role can perform.  
4. Whether users can self-configure permissions or Mindhive must configure.

**Precise client question:**  

“Please confirm the permission matrix by role: view dashboard, create SO, approve SO, create DN, select batch, submit DN, generate PSO, upload invoice, edit customer/item/pricing.”



---



## AIP-06 — SQL transition / API integration



**Status:** AGREED IN PRINCIPLE — IMPLEMENTATION NOT LOCKED  

**Confidence:** MEDIUM



**Agreed direction:** Holsen targets SQL go-live on 1 Aug, with testing/data onboarding starting in May; SQL API integration is desired, and MAIA should maintain UBS-aligned data until SQL transition. fileciteturn2file1



**Open implementation decisions:**  

1. Which SQL vendor / API option is confirmed.  
2. Whether SQL Cloud API is available.  
3. Whether MAIA pushes to SQL, pulls from SQL, or both.  
4. Cutover approach: fresh instance vs parallel run vs migration.

**Precise client question:**  

“Has Holsen selected the SQL vendor/API option, and should MAIA prepare for push-only, pull-only, or two-way sync after SQL cutover?”



---



# 6. Needs-Scoping Register



| ID | Item | What is unclear | Who decides | Blocking? | Sources |
|-|-|-|-|-|-|
| NS-01 | Low/out-of-stock alerts | UAT says no low/out-of-stock notification and asks for warning/alert; threshold, channel, recipient, and timing are not defined. | Holsen + Mindhive delivery | Yes | fileciteturn2file2 fileciteturn1file11 |
| NS-02 | C3 mixed-order handling | Customer POs may mix C1/C3/non-exempt lines; whether MAIA splits, prompts, blocks, or allows is not locked. | Holsen compliance owner | Yes | fileciteturn2file2 |
| NS-03 | Batch validation strictness | UAT confirms batch selection is needed, but not whether missing/wrong batch blocks submission or only warns. | Holsen ops/compliance | Yes | fileciteturn3file16 |
| NS-04 | Permission matrix | UAT shows permission problems for customer updates, sales/logistics users, and submission rights. Exact role matrix absent. | Holsen admin + Mindhive | Yes | fileciteturn2file2 |
| NS-05 | UBS/MAIA document authority | Later direction says UBS remains official for invoice, while MAIA may generate DN/SO; whether MAIA DN is operationally accepted before SQL needs explicit sign-off. | Chin / Tam | Yes | fileciteturn2file1 |
| NS-06 | COA / document bundle defaults | COA requirement varies by customer; full batch package and per-customer default not locked. | Holsen lab/compliance | No, unless COA automation is in current sprint | fileciteturn3file13 |



---



# 7. Supersessions Log



| Risk | SOW said | Now intended | Changed by / when | Rationale | Client agreed? |
|-|-|-|-|-|-|
| High | MAIA generates Invoice as an output document. fileciteturn2file0 | UBS remains official invoice/e-invoice source during transition; UBS invoice manually uploaded to MAIA. fileciteturn2file1 | Feb 11 C1/C3 discussion | UBS e-invoice compliance and SQL transition path. | YES, evidenced in summary. |
| High | MAIA retrieves/shows K1 reference on Delivery Order and Invoice. fileciteturn3file4 | Tax exemption/certificate references appear primarily in invoice; DN external visibility is narrower. | Feb 11 discussion / compliance summary | Holsen current practice and external-facing DN concerns. | PARTIAL — needs explicit final doc-layout sign-off. |
| High | C3 set up as separate SKU / compliant stock shown. fileciteturn3file1 | C3 tracked as item + customer + quantity/quota; cannot be generic item flag. fileciteturn3file5 | Jan/Feb compliance discussions | C3 is customer/order/quantity based, not pure SKU classification. | YES on principle; implementation not locked. |
| Medium | Poison form is manual alert only. fileciteturn3file1 | MAIA should generate PSO for poison-category SKUs. fileciteturn2file1 | Feb/May UAT | Reduce manual workload; UAT tested poison-to-PSO generation. | YES in principle; template fields pending. |
| Medium | Automatic customer pricing retrieval. fileciteturn3file3 | Commodity/manual pricing and minimum-price safeguards coexist with customer pricing. fileciteturn3file1 | SOW itself + later setup/UAT | Holsen pricing varies by commodity/customer/negotiation. | PARTIAL — rule hierarchy not locked. |



---



# 8. Out-of-Scope / Explicit Exclusions



| Item | Reason | Source |
|-|-|-|
| A57 active workflow | A57 is understood but currently not used by Holsen; treat as not in current build unless explicitly added. | fileciteturn2file1 |
| UN code / hazard class / JPJ transport sophistication | Client indicated poison PSO matters now; UN/hazard/JPJ transport handling can come later / not much value currently. | Fireflies Feb 11 fetch; reflected indirectly by PSO priority in compliance notes. fileciteturn2file1 |
| Unsupported third-party integrations outside approved scope | SOW caveat excludes unsupported third-party integrations outside approved scope. | fileciteturn1file15 |



---



# 9. Source-Conflict Register



| Conflict | Source A | Source B | Resolution |
|-|-|-|-|
| Invoice generated by MAIA vs official UBS invoice | SOW includes invoice output generation. fileciteturn2file0 | Later compliance notes say UBS invoices manually uploaded into MAIA until SQL replaces UBS. fileciteturn2file1 | Treat as **LOCKED (SUPERSEDED)**: UBS official invoice during transition. |
| C3 as separate SKU vs C3 as customer/item/quota allocation | SOW says C3 items set up as separate SKUs and compliant C3 stock shown. fileciteturn3file1 | Current process says C3 must be item → customer → quantity/quota, not generic item flag. fileciteturn3file5 | Treat C3 SKU approach as insufficient; final C3 enforcement is **AIP**, not locked. |
| K1 on DO + invoice vs invoice-only reference practice | SOW says K1 number appears on Delivery Order and Invoice. fileciteturn3file4 | Later discussion narrows exemption number visibility; DN is front-facing and may not need cert reference. | Needs final document-layout confirmation. |
| MAIA DO vs UBS DO | SOW has MAIA DO generation. fileciteturn3file0 | Later notes say UBS still generates invoices/DOs while MAIA may be used internally. fileciteturn2file1 | Not locked. Confirm whether MAIA DO is operational document pre-SQL. |



---



# 10. Client Confirmation Agenda



Send this list into the next Holsen confirmation conversation.



1. **Invoice authority:** Until SQL go-live, should MAIA treat UBS invoice PDFs as the only official invoices and require manual upload into MAIA? Yes/No.
2. **Delivery note authority:** Until SQL go-live, is MAIA’s Delivery Note acceptable for operational use, or must UBS DO remain the official delivery document? Choose one.
3. **C3 mixed PO handling:** If a customer PO contains C3-covered, C1-covered, and taxable items, should MAIA split automatically, warn and let the user decide, or block until the user separates the order?
4. **C3 enforcement:** Should MAIA hard-block non-authorized C3 stock use, hide unavailable C3 stock, or warn but allow override by admin?
5. **Batch requirement:** For batch-controlled items, should DN submission be blocked unless a batch number is selected? Yes/No.
6. **Picklist:** Must every picklist include selected batch number(s)? Yes/No.
7. **Low/out-of-stock alerts:** What exact thresholds trigger low stock and out-of-stock alerts, who receives them, and through which channel?
8. **PSO template:** Please confirm the final PSO template and required fields. Should PSO include only poison SKUs on a mixed DN? Yes/No.
9. **COA default:** For each customer, should the default be no COA, standard COA, detailed COA, or masked COA?
10. **COA masking:** Will Holsen upload pre-masked COA files, or should MAIA support masking instructions/generated masking?
11. **Batch document package:** For go-live, which documents must be structured/tagged: K1, COA, supplier invoice, packing list, BL, SDS, PSO?
12. **Pricing rule hierarchy:** For each product category, should price come from customer price list, default product price, manual user entry, or minimum-price guardrail?
13. **Permission matrix:** Confirm which roles can create SO, approve SO, create DN, select batch, submit DN, generate PSO, upload invoice, edit customer/item/pricing, and view dashboards.
14. **SQL path:** Has Holsen selected SQL vendor/API option, and should Mindhive prepare for push-only, pull-only, or two-way API sync?

---



## Bottom line



Do **not** let the build team treat C3, invoice/DO authority, batch validation, role permissions, or stock alerts as locked. Those are exactly the areas where a false lock will detonate at UAT. The stable buildable core is: PO intake → editable draft order, C1 customer/tariff coverage, daily action visibility, PSO direction, and manual UBS invoice upload during transition.

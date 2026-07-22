---
owner: Gareth
status: draft
last_reviewed: 2026-07-22
lark_url: https://eg69120xnei.sg.larksuite.com/docx/MwuMdwysXokg3nxOOSJl90E9g8c
---

# T.C.K Sdn Bhd (Maxfresh) — Kickoff Clarification Questions

Compiled from [[T.C.K — Scope Lock]], [[T.C.K — VoC Extraction]], the signed proposal, project scope doc, detailed onboarding handover, and the pre-onboarding questionnaire. Covers items the questionnaire leaves blank, items never asked in the questionnaire at all, and execution details behind items already marked LOCKED in scope.

## Scope gap — needs a decision, not just an answer

1. `[FF-PF2]` has Jeremy telling Andrew MAIA will build a free "catalog for catalog quotation" — a customer-facing list of available stock + prices — as a third customization on top of the two (customer grouping, weekly base price) actually named in the signed proposal. DH §13.2 lists this as discussed-but-not-signed. **Is a customer-facing catalog/quotation generator something you expect in Phase 1?** If yes, this needs its own scope line and commercial conversation — it was never part of the RM8,000 customization fee.

## Blocking (Scope Lock cannot finalize without these)

2. What date should MAIA start tracking orders/inventory from — is there a specific cutoff date we can lock in now?
3. Should stock be deducted when the invoice is created, or when the delivery order is created?
4. When a customer asks "what's my price" for a specific item, does the group-level markup (e.g. "Hotels +X%") always answer that correctly, or are there specific customers who need their own price different from their group?
5. What order value should trigger mandatory approval before submission, and who should approve it — you, or someone else?
6. What are the actual minimum and maximum selling-price limits we should guardrail against?
7. Can you confirm in writing that MAIA will run on the same cloud environment as AutoCount? Who from your IT side signs off on this?
8. Who is your day-to-day contact for onboarding — is it Cheryl, or someone else?
9. Who is your AutoCount vendor/reseller contact, and can they confirm whether API or database access is available?

## Workflow detail

10. For pick-list assignment: should any picker be able to pick any order, or do you want orders assigned to a specific named picker?
11. Do you want a timestamp recorded automatically when a picking list is marked complete?
12. Do you want photo-upload of the signed delivery note/pick-list as proof of delivery going forward, or keep the physical-only process?
13. Do you expect MAIA to generate the invoice itself, or is it acceptable for MAIA to pull/link an invoice that's already been created in AutoCount?
14. When a product has multiple brand variants under one generic name (e.g. "apple" → Brand A/B/C), should MAIA always ask which brand, or do you want to standardize a WhatsApp order template (item/brand/quantity/customer) to speed this up?
15. Do you want the weekly customer-facing price/catalog list sent in text format — is this something you want built into Phase 1, and who owns sending it out?

## Weekly Base Price Upload — Guided Template Questions

This customization (`[P]` §5.1, waived/FOC) is locked in principle, but the upload template itself isn't designed yet. These questions are phrased so the answer can go straight into the template — answer inline where possible, or attach a real example.

16. What day of the week do you currently finalize new base prices, and by what time do they need to be live for staff to start using them?
17. What unique identifier should each row in the upload use — your existing SKU code (e.g. `EMB1x10`)? Confirm yes/no, and flag any items that don't yet have a code.
18. What unit is the base price quoted in — per kg, per carton, per piece — and does this vary by item? If it varies, give 2-3 examples showing the different units.
19. Please paste one real row from your current weekly price list exactly as you write it today (item, unit, price, any other column you track) — this becomes the baseline for the upload template's columns.
20. If an item's price hasn't changed from last week, do you still want to re-list it in the upload, or should the template only require changed items (with unchanged items keeping last week's price automatically)?
21. If an item is missing from a given week's upload entirely, should MAIA keep using its last known price, or hold that item's orders until a new price is uploaded?
22. Who is authorized to perform the weekly upload — is it always Wei Wei? Should we set up a named backup uploader in case she's unavailable?
23. If a correction needs to be uploaded again on the same day (e.g. a mistake in the first upload), should the newest upload simply overwrite the earlier one, or do you want a confirmation step before it takes effect?

## Bulk Item Pricing Update — Guided Clarification Questions

The weekly upload (above) is the *recurring cadence*; this section is about the *bulk mechanism itself* — what a single upload actually does to the price list, and how MAIA should behave when a bulk file is applied. Answer these so we can design the validation and rollback logic correctly the first time.

24. When you upload prices, is it usually the full item list (~350 SKUs) every time, or only the items that changed that week?
25. Should a bulk upload fully replace the existing price list, or only update the rows included in the file and leave everything else untouched?
26. What file format do you want to use for the bulk upload — Excel, CSV, or a Google Sheet link?
27. If a row in the bulk file has an error (missing SKU, blank price, negative or zero price, a SKU listed twice), should MAIA reject just that row and apply the rest, or reject the whole file until it's fixed?
28. Before a bulk price update goes live, do you want a preview/confirmation step (e.g. "here's what will change — confirm to apply"), or should it apply immediately on upload?
29. If a bulk upload turns out to be wrong after it's already applied, do you need a way to roll back to the previous price list, or is uploading a corrected file good enough?
30. Should a bulk price update take effect immediately, or do you want to schedule it for a specific date/time (e.g. midnight, start of business day)?
31. Besides Wei Wei, should anyone else be able to trigger a bulk price update, and should any bulk update require a second person's approval before it applies?
32. Do you want a confirmation/summary sent back after each bulk update (e.g. "142 items updated, 3 skipped due to errors") so you can verify it went through correctly?

## Business structure

33. How many branches, warehouses, or office locations do you operate, and where are they?
34. Why don't your field/warehouse staff currently access AutoCount directly — no mobile access, too complex, licensing cost, or something else?

## Systems & ERP

35. Beyond preserving SKU codes and running numbers, are there any other custom workflows, approval rules, or report templates already built into your AutoCount setup that we should know about?
36. Is your WhatsApp currently a regular WhatsApp Business app, or WhatsApp Business API (WABA)? Who owns/registered the number?
37. Are there any systems you plan to stop using once MAIA is live?
38. What report engine does AutoCount use to generate your documents (e.g. Crystal Reports)?

## Products, inventory, pricing

39. Besides your own SKU coding, do you use any other product categories or brand groupings?
40. Do any of your products have expiry dates/shelf life, batch numbers, serial numbers, multiple units of measure, bundle/kit structures, product variants, or need product images for identification?
41. Exactly how many pricing tiers/groups do you have, and what defines each one?
42. Where does your pricing data actually live today — inside AutoCount, in a spreadsheet, or only in staff memory?

## Sales & order workflow

43. Aside from WhatsApp, do any orders currently come in by email, phone call, or PO document?
44. What's a typical order size in line items — is the ~50-line-item case common, or unusual?
45. Who creates quotations today, and who approves them?
46. Do you handle customer returns/exchanges, advance payments/deposits, partial deliveries, consignment stock, or item substitutions? Any of these relevant to Phase 1?

## Finance

47. What's your current e-invoicing/LHDN compliance status — already automated, or manual submission?
48. Are there any tax exemption scenarios relevant to your business (C1, C3, A57, LMW, export)?
49. What happens when a customer exceeds their credit limit — hard block, requires approval, or just a warning?
50. Can you confirm the 72-hour e-invoice sync window actually satisfies your LHDN compliance needs, or is there a stricter requirement?

## Documents & reports

51. Beyond sales order, invoice, delivery order, and pick list — do you need quotations, proforma invoices, credit notes, debit notes, payment receipts, or statements of account generated too?
52. Are there specific fields, references, or formatting your customers or regulators require on documents (PO reference, project number, company registration, logo placement)?
53. What reports do you look at regularly today (daily sales, AR aging, stock movement, salesperson performance)?

## Communication

54. What languages does your team use day-to-day — English, Malay, Mandarin, Cantonese, a mix?
55. What languages do your customers typically communicate in?

## Data readiness

56. Who on your side will prepare the customer list, item list, price list, and stock balances for us?
57. Can you send us 3-5 real sample documents — a recent quotation, sales order, invoice, delivery order, and pick list?
58. Can you send the customer-to-group mapping (which customers belong to which pricing group)?
59. Can you send the exact markup rules per group (the actual percentages, not just "Hotels get more")?
60. Can you send existing SOP documents, if any exist, for current order/pricing/picking processes?
61. Can you send real WhatsApp order examples (actual message threads) so we calibrate the extraction logic against real phrasing, not just a generic demo?
62. Can you send your existing Excel/Word picking-list examples?

## Execution details behind items already marked LOCKED

63. What exact fields should the WhatsApp order template capture (customer name, item/SKU, brand, quantity, delivery urgency, remarks, salesperson) — can we lock this format with you before training?
64. Who specifically forwards customer WhatsApp orders into MAIA — named individuals, not just "sales/admin"?
65. Who specifically reviews and confirms draft orders before submission — named individuals?
66. Who receives the pick list, and who is authorized to mark picking complete — named individuals?
67. Is a physical printout of the pick list still required going forward, or is digital-only acceptable once MAIA is live?
68. What should happen when an order's price falls outside the min/max guardrail — hard block, warning only, or auto-route to approval?
69. What should happen when MAIA can't recognize a customer or item from a forwarded message — reject, flag for manual entry, or hold for review?
70. What should happen when stock is insufficient for a requested item — block the order, allow a back-order, or flag for manual decision?
71. What should happen when an order gets canceled after it's already in MAIA — does it stay MAIA-only, or does something still need to reflect in AutoCount for audit purposes?
72. What's the fallback process if the AutoCount integration is temporarily down — do staff revert to manual key-in, or does MAIA queue and retry?
73. Where does the opening stock balance (as of cutoff date) come from — do you extract and send it to us, or do we pull it directly from AutoCount?

## Client/stakeholder details

74. What's T.C.K's exact legal entity name for implementation/contract records?
75. What's Andrew's preferred communication channel during onboarding — WhatsApp group, email, calls?
76. What's Cheryl's actual title and scope of involvement — is she just the sales-side demo evaluator, or does she own more of the rollout?
77. Can you give us the full list of sales/admin staff who'll use MAIA daily?
78. Can you give us the full list of logistics/warehouse staff who'll use MAIA?
79. Will anyone from finance need MAIA access, or does finance stay 100% in AutoCount?
80. Who's your internal IT contact person (name, not just "IT team")?
81. If hosting isn't on T.C.K's own cloud, who's the hosting vendor/contact?
82. If you already have an OpenAI/ChatGPT API key, who owns/manages it — or should Mindhive provision one?

## Process/relationship — from VoC signals

83. Can we get 30-60 minutes directly with 2-3 sales/admin staff (not just through Andrew) to watch how they process a real order today?
84. Can Cheryl share her own hands-on feedback from the demo, in her own words, before we finalize the sales-side workflow?
85. Can we run a dedicated logistics/warehouse workshop early — separate from the general kickoff — given the handover doc itself flags logistics feedback as a "key final decision blocker"?
86. What response time and escalation process do you actually expect from us during hypercare — can we agree on something concrete (e.g. "urgent issues acknowledged within X minutes in the WhatsApp group") rather than leaving "responsive support" undefined?
87. Given your past experience with a laggy cloud setup, is there a specific performance expectation (e.g. max acceptable order-processing time) we should design/test against?

## See Also

- [[03 - Clients/Active Cooking Clients/T.C.K/T.C.K — Scope Lock]]
- [[03 - Clients/Active Cooking Clients/T.C.K/T.C.K — VoC Extraction]]
- [[03 - Clients/Active Cooking Clients/T.C.K/Onboarding/03_Pre-Onboarding Questionnaire - T.C.K Sdn Bhd x MAIA]]

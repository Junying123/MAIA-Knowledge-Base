---
owner: Gareth
status: draft
last_reviewed: 2026-05-29
client: Fixguru
feature: Item Historical Pricing
dev_status: in_progress
---

# UAT - Item Historical Pricing - Fixguru

## Context

Fixguru wants MAIA to surface item historical pricing during quotation creation so sales users can reuse prior pricing context without opening old documents manually.

Based on the current Fixguru UAT form, the 2026-05-15 action items, and the feedback sync, the intended direction is:

- Front end unit price dropdown / price list pop-up shows last transactions for the customer-item pair
- Chatbot can return the latest historical price and recent history for the same customer-item pair
- History should include document reference, qty, unit price, and discount percentage vs current list price
- Current list price should remain visible as the present pricing baseline
- Historical pricing must not treat FOC lines as normal selling prices

> Scope note: this file isolates Item Historical Pricing only. Calculator, approval flow, and general quotation creation are tested elsewhere.
>
> Testing priority note: Fixguru prefers chatbot usage over FE for this workflow, so chatbot coverage should be treated as the main acceptance path. FE tests remain as support checks.

## Feedback and Improvement Needed

From the Fixguru meeting notes, the main feedback and product-ready requirements are:

- The chatbot previously failed a basic retrieval by confusing the customer name with the item, so customer-item matching must be tested explicitly.
- Fixguru wants historical pricing to surface the last transaction net price and the last item-level discount for that same customer-item pair.
- The history display must show clearly in business terms, not just raw system values.
- Fixguru's real usage preference is chatbot-first, so the most important tests are the ones that validate retrieval, pricing choice, and draft creation from chatbot.
- Current list price must remain visible as the benchmark when showing historical discount / markup context.
- If the user updates the unit price manually after seeing history, the historical reference should remain intact and not be overwritten.
- Minimum price behavior must still work when users reuse historical pricing.

---

## Test Strategy

- Primary acceptance: chatbot flow must work end to end for real sales usage
- Secondary acceptance: FE history display should support validation and fallback checking
- Product-ready bar: chatbot must retrieve the correct customer-item history, show usable pricing context, allow safe price selection, and preserve guardrails

## Test Cases

**Total: 14 test cases**

---

### Section 1 - Chatbot Primary Flow (8 cases)

---

#### IHP-1.1 - Chatbot returns latest historical price for correct customer-item pair

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the MAIA chatbot, ask: *"What is the last price for [Customer] for [Item]?"* | Chatbot returns the latest historical price for that customer-item pair. |
| 2 | Check the details returned. | Response includes at least the source document reference, unit price, and date. |
| 3 | Cross-check against the latest real record in MAIA. | The chatbot answer matches the latest record. |
| 4 | Check the interpreted customer and item in the reply. | Chatbot has matched the correct customer and the correct item. It does not confuse the customer name as the item name or vice versa. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.2 - Chatbot returns recent history with qty, price, and discount context

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the MAIA chatbot, ask: *"Show me the price history for [Customer] for [Item]."* | Chatbot returns recent history for the same customer-item pair. |
| 2 | Inspect the returned entries. | Each relevant entry shows document reference, qty, unit price, and discount % or equivalent discount context vs current list price where supported. |
| 3 | Cross-check one or two entries against the actual records in MAIA. | Returned history matches the real records. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.3 - Chatbot shows last net price and last discount clearly in business language

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Ask the chatbot for history for a customer-item pair where the previous transaction had a discount applied. | Chatbot returns the relevant history. |
| 2 | Read the pricing explanation in the reply. | The reply makes it clear what the last net price was and what discount / discount % was previously given. |
| 3 | Check that the wording is understandable for a sales user. | The response is readable in business terms and not just raw backend fields or IDs. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.4 - Chatbot keeps current list price visible as pricing benchmark

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Ask the chatbot for price history for a customer-item pair where the latest historical price differs from the current list price. | Chatbot returns history with benchmark context. |
| 2 | Inspect the reply. | Current list price is shown or clearly referenced as the benchmark for comparison. |
| 3 | Recalculate one comparison manually if needed. | The quoted discount / markup context vs current list price is correct. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.5 - Chatbot offers usable pricing choices after surfacing history

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the MAIA chatbot, create or add an item for a customer-item pair that already has prior history. | Chatbot surfaces historical pricing context for that same customer-item pair. |
| 2 | Inspect the reply after the item is recognized. | Reply shows recent history in a usable business format and presents clear next pricing choices such as last transaction price, current list price, or custom price. |
| 3 | Choose the historical price option. | Chatbot applies the selected historical price correctly to the draft quotation / sales document line. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.6 - Chatbot preserves historical reference after user changes price

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Add an item through chatbot and surface the historical pricing options first. | Historical pricing context is shown. |
| 2 | Instead of choosing the historical price, reply with a different custom unit price. | Chatbot updates the draft line with the new price. |
| 3 | Ask again for the item's history or amend the same line. | The original historical reference remains intact and is not overwritten by the newly entered custom price. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.7 - Chatbot handles no-history case correctly

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Ask the chatbot for item history for a customer-item pair with no prior records. | Chatbot does not invent history. |
| 2 | Check the response wording. | Chatbot clearly says there is no prior history for that customer-item pair and does not return an error. |
| 3 | Continue the pricing flow. | Chatbot falls back cleanly to current list price or custom price options. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.8 - Chatbot historical pricing works during real quotation creation flow

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the chatbot, create a new quotation for a known customer and add an item with existing history. | Chatbot identifies the customer-item pair and surfaces relevant historical pricing context during the flow. |
| 2 | Choose one of the suggested pricing options. | The chosen price is applied to the quotation line correctly. |
| 3 | Let the chatbot create the draft quotation. | The draft quotation reflects the selected price and remains consistent with the history surfaced earlier. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

### Section 2 - Front End Support Checks (3 cases)

---

#### IHP-2.1 - FE unit price dropdown shows latest historical price

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Log in to the web app. Create a new Quotation for a customer-item pair that already has quotation / transaction history. Add the item to the quotation. | Item is added successfully. |
| 2 | Click the unit price field for that item. | The dropdown opens and shows a historical pricing row for the same customer-item pair. |
| 3 | Cross-check against the latest real record in MAIA. | The surfaced latest price matches the latest record. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-2.2 - FE shows current list price and comparison context

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Use a customer-item pair where the latest historical price differs from the current list price. Open the unit price dropdown. | Pricing options are shown. |
| 2 | Check the current list price row / baseline in the dropdown. | Current list price is visible as the present pricing reference. |
| 3 | Check the historical price row. | Comparison context such as discount / markup vs current list price is shown correctly. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-2.3 - FE history view shows recent entries with qty, price, and reference

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the quotation item pricing area, open the history tooltip / pop-up / chart for a customer-item pair with multiple prior records. | History view opens. |
| 2 | Inspect the entries shown in the history view. | Recent entries show document reference, qty, unit price, and date for the same customer-item pair. |
| 3 | Cross-check one earlier entry against the actual source record in MAIA. | The historical entry details match the real record. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

### Section 3 - Validation / Edge Cases (3 cases)

---

#### IHP-3.1 - Historical pricing does not treat FOC line as normal selling price

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Use or inspect a customer-item pair where one prior document contains a paid line and a separate FOC line for the same item. | Historical records are available for review. |
| 2 | Retrieve history from the chatbot and, if needed, from the FE support view. | The normal paid price remains the primary historical reference. |
| 3 | Inspect how the FOC line is represented. | FOC is either excluded from normal price history or clearly marked as a free line. It is not treated as RM0 selling price for history comparison. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-3.2 - Minimum price guardrail still works when historical price is reused

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Use a customer-item pair where the surfaced historical price would now fall below the item's current minimum price. | Historical pricing is shown in the chatbot reply or FE support view. |
| 2 | Select or apply that historical price to the quotation line. | System evaluates the applied price against the current minimum price rule. |
| 3 | Check the result. | If the historical price is below minimum, the system triggers the correct alert / block / approval behavior instead of silently accepting it. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-3.3 - Historical pricing should not break when item search / matching is ambiguous

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the chatbot, ask for history using a customer and item where names may be similar to other customers or items. | Chatbot attempts to resolve the correct customer-item pair safely. |
| 2 | Check the response behavior. | If the match is unclear, chatbot asks a clarifying question instead of returning the wrong history. |
| 3 | Confirm the correct option and continue. | History returned after clarification matches the intended customer-item pair. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

## Results Summary

| ID | Case | Area | Mode | Result | Tested By | Date |
|----|------|------|------|--------|-----------|------|
| IHP-1.1 | Chatbot returns latest historical price for correct customer-item pair | Chatbot Primary | Chatbot | | | |
| IHP-1.2 | Chatbot returns recent history with qty, price, and discount context | Chatbot Primary | Chatbot | | | |
| IHP-1.3 | Chatbot shows last net price and last discount clearly in business language | Chatbot Primary | Chatbot | | | |
| IHP-1.4 | Chatbot keeps current list price visible as pricing benchmark | Chatbot Primary | Chatbot | | | |
| IHP-1.5 | Chatbot offers usable pricing choices after surfacing history | Chatbot Primary | Chatbot | | | |
| IHP-1.6 | Chatbot preserves historical reference after user changes price | Chatbot Primary | Chatbot | | | |
| IHP-1.7 | Chatbot handles no-history case correctly | Chatbot Primary | Chatbot | | | |
| IHP-1.8 | Chatbot historical pricing works during real quotation creation flow | Chatbot Primary | Chatbot | | | |
| IHP-2.1 | FE unit price dropdown shows latest historical price | FE Support | FE | | | |
| IHP-2.2 | FE shows current list price and comparison context | FE Support | FE | | | |
| IHP-2.3 | FE history view shows recent entries with qty, price, and reference | FE Support | FE | | | |
| IHP-3.1 | FOC line is not treated as normal historical price | Validation | FE + Chatbot | | | |
| IHP-3.2 | Minimum price guardrail still works when historical price is reused | Validation | FE + Chatbot | | | |
| IHP-3.3 | Historical pricing should not break when item search / matching is ambiguous | Validation | Chatbot | | | |

**Total: 14 test cases**

| Pass | Fail | Issue | Blocked |
|------|------|-------|---------|
| | | | |

---

## Source Notes

Based on:

- `MAIA UAT Form - Fixguru - 2026-05 (Full)` Test `1.3.2` and Test `1.3.3`
- `2026-05-15 Fixguru UAT Action Items`
- `2026-05-15 Fixguru feedback sync - Transcript`
- FOC historical-pricing guardrail already noted in `MAIA UAT Form - Fixguru - FOC Items - Sortable`

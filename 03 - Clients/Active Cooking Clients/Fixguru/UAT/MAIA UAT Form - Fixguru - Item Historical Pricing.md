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

Based on the current Fixguru UAT form and the 2026-05-15 action items, the intended direction is:

- Front end unit price dropdown / price list pop-up shows last transactions for the customer-item pair
- Chatbot can return the latest historical price and recent history for the same customer-item pair
- History should include document reference, qty, unit price, and discount percentage vs current list price
- Current list price should remain visible as the present pricing baseline
- Historical pricing must not treat FOC lines as normal selling prices

> Scope note: this file isolates Item Historical Pricing only. Calculator, approval flow, and general quotation creation are tested elsewhere.

---

## Test Cases

**Total: 8 test cases**

---

### Section 1 - Front End Quotation Flow (4 cases)

---

#### IHP-1.1 - Unit price dropdown shows latest historical price

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Log in to the web app. Create a new Quotation for a customer-item pair that already has quotation / transaction history. Add the item to the quotation. | Item is added successfully. |
| 2 | Click the unit price field for that item. | The dropdown opens and shows a historical pricing row for the same customer-item pair. |
| 3 | Check the latest historical price row. | The latest historical price is shown together with its source document reference. |
| 4 | Cross-check against the latest real record in MAIA. | The surfaced latest price matches the latest record. It is not replaced with a newly derived value. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.2 - Current list price and derived comparison are visible

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Use a customer-item pair where the latest historical price differs from the current list price. Open the unit price dropdown. | Pricing options are shown. |
| 2 | Check the current list price row / baseline in the dropdown. | Current list price is visible as the present pricing reference. |
| 3 | Check the latest historical price row. | A secondary comparison line is shown, such as discount / markup percentage vs current list price. |
| 4 | Recalculate the comparison manually using the shown historical price and current list price. | The displayed percentage is correct. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.3 - History tooltip / pop-up shows recent entries with qty, price, and reference

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the quotation item pricing area, open the history tooltip / pop-up / chart for a customer-item pair with multiple prior records. | History view opens. |
| 2 | Inspect the entries shown in the history view. | Recent entries show document reference, qty, unit price, and date for the same customer-item pair. |
| 3 | Check whether discount % vs current list price is shown in the tooltip / pop-up. | Discount / markup context is visible where applicable. |
| 4 | Cross-check one earlier entry against the actual source record in MAIA. | The historical entry details match the real record. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-1.4 - No history case falls back cleanly to current list price

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Create a Quotation for a customer-item pair with no prior history. | Item is added successfully. |
| 2 | Click the unit price field. | The dropdown opens without any fake or blank history entries. |
| 3 | Check the available pricing rows. | Current list price still appears as the usable baseline. A clear no-history state is shown or no historical row is shown. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

### Section 2 - Chatbot Retrieval Flow (3 cases)

---

#### IHP-2.1 - Chatbot returns latest historical price for customer-item pair

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the MAIA chatbot, ask: *"What is the last price for [Customer] for [Item]?"* | Chatbot returns the latest historical price for that customer-item pair. |
| 2 | Check the details returned. | Response includes at least the source document reference, unit price, and date. |
| 3 | Cross-check against the latest real record in MAIA. | The chatbot answer matches the latest record. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-2.2 - Chatbot returns recent history with qty, price, and discount context

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | In the MAIA chatbot, ask: *"Show me the price history for [Customer] for [Item]."* | Chatbot returns recent history for the same customer-item pair. |
| 2 | Inspect the returned entries. | Each relevant entry shows document reference, qty, unit price, and discount % or equivalent discount context vs current list price where supported. |
| 3 | Cross-check one or two entries against the actual records in MAIA. | Returned history matches the real records. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

#### IHP-2.3 - Chatbot handles no-history case correctly

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Ask the chatbot for item history for a customer-item pair with no prior records. | Chatbot does not invent history. |
| 2 | Check the response wording. | Chatbot clearly says there is no prior history for that customer-item pair and does not return an error. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

### Section 3 - Validation / Edge Cases (1 case)

---

#### IHP-3.1 - Historical pricing does not treat FOC line as normal selling price

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Use or inspect a customer-item pair where one prior document contains a paid line and a separate FOC line for the same item. | Historical records are available for review. |
| 2 | Retrieve history from the front end dropdown / tooltip or from the chatbot. | The normal paid price remains the primary historical reference. |
| 3 | Inspect how the FOC line is represented. | FOC is either excluded from normal price history or clearly marked as a free line. It is not treated as RM0 selling price for history comparison. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:**  
**Date:**  

---

## Results Summary

| ID | Case | Area | Mode | Result | Tested By | Date |
|----|------|------|------|--------|-----------|------|
| IHP-1.1 | Unit price dropdown shows latest historical price | FE Quotation | FE | | | |
| IHP-1.2 | Current list price and derived comparison are visible | FE Quotation | FE | | | |
| IHP-1.3 | History tooltip / pop-up shows recent entries | FE Quotation | FE | | | |
| IHP-1.4 | No history fallback is clean | FE Quotation | FE | | | |
| IHP-2.1 | Chatbot returns latest historical price | Chatbot | Chatbot | | | |
| IHP-2.2 | Chatbot returns recent history with qty and discount context | Chatbot | Chatbot | | | |
| IHP-2.3 | Chatbot handles no-history case correctly | Chatbot | Chatbot | | | |
| IHP-3.1 | FOC line is not treated as normal historical price | Validation | FE + Chatbot | | | |

**Total: 8 test cases**

| Pass | Fail | Issue | Blocked |
|------|------|-------|---------|
| | | | |

---

## Source Notes

Based on:

- `MAIA UAT Form - Fixguru - 2026-05 (Full)` Test `1.3.2` and Test `1.3.3`
- `2026-05-15 Fixguru UAT Action Items`
- FOC historical-pricing guardrail already noted in `MAIA UAT Form - Fixguru - FOC Items - Sortable`


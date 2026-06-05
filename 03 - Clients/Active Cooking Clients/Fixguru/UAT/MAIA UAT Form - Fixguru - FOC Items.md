---
owner: Gareth
status: draft
last_reviewed: 2026-05-24
client: Fixguru
feature: FOC Items
dev_status: not_built
---

# UAT — FOC (Free of Charge) Items — Fixguru

## Context

Fixguru's sales workflow includes Free of Charge (FOC) items — units given to a customer at no cost alongside a paid order. Example: sell 100 boxes, give 10 FOC.

FOC items must:
- Appear as separate line items on all documents (QT, SO, DO, Invoice)
- Show RM 0.00 — never inflate document totals
- Still deduct from stock on delivery
- Sync to AutoCount with correct account code (not revenue)

> ⚠️ **Feature status: Not built.** Zero tests runnable until FOC line item support is implemented.

---

## Test Cases

**Total: 20 test cases**

---

### Section 1 — Quotation: Web App (4 cases)

---

#### FOC-1.1 — Single item, has FOC

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Log in. Create new Quotation. Add **1 item** (e.g. RSC Box 200×500×100, qty 100). In the FOC qty field, enter **10**. | Line shows: Sold Qty = 100, FOC Qty = 10. |
| 2 | Check unit price and line total. | Unit price applies to sold qty only. FOC qty shows RM 0.00. Quotation total = 100 × unit price. |
| 3 | Save the Quotation. | Both sold qty and FOC qty are retained correctly in Draft. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-1.2 — 2 items, both have FOC

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Create new Quotation. Add **Item A** (qty 100, FOC 10) and **Item B** (qty 50, FOC 5). | Two lines. Each line shows its own sold qty + FOC qty independently. |
| 2 | Check each line total and the quotation grand total. | Item A total = 100 × price A. Item B total = 50 × price B. Grand total = sum of both sold lines only. FOC lines = RM 0.00. |
| 3 | Save. | All four qty values (sold + FOC × 2 items) retained correctly. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-1.3 — 2 items with FOC + 1 item without FOC

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Create new Quotation. Add **Item A** (qty 100, FOC 10), **Item B** (qty 50, FOC 5), **Item C** (qty 30, no FOC). | Three lines. Items A and B each have sold + FOC qty. Item C has sold qty only — no FOC field filled or FOC shows 0. |
| 2 | Check each line total and grand total. | Item A = 100 × price A. Item B = 50 × price B. Item C = 30 × price C. Grand total = A + B + C sold lines only. |
| 3 | Verify Item C has no FOC line or FOC = 0. | No phantom FOC applied to Item C. |
| 4 | Save. | All values retained correctly. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-1.4 — 1 item with FOC, 1 item without FOC (mixed)

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Create new Quotation. Add **Item A** (qty 80, FOC 8) and **Item B** (qty 60, no FOC). | Item A shows sold + FOC qty. Item B shows sold qty only. |
| 2 | Check totals. | Grand total = (80 × price A) + (60 × price B). FOC line for Item A = RM 0.00. |
| 3 | Save and verify no FOC accidentally applied to Item B. | Item B total unchanged. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

### Section 2 — Quotation: Chatbot (7 cases)

*Use Telegram (`@maia_fixguru_bot`) during UAT.*

---

#### FOC-2.1 — Single item, FOC specified in message

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Send: *"Quote for [Customer]. 100 boxes of RSC 200x500x100, 10 FOC."* | Chatbot extracts: customer, item, sold qty = 100, FOC qty = 10. Chatbot confirms details before creating. |
| 2 | Confirm the order. | Quotation created. Sold qty = 100, FOC qty = 10, FOC price = RM 0.00. Total based on 100 units only. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-2.2 — Single item, FOC via voice note

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Send a **voice note**: *"Quote for [Customer]. One hundred boxes of RSC box, ten free of charge."* | Chatbot transcribes voice, extracts: item, sold qty = 100, FOC qty = 10. Shows confirmation. |
| 2 | Confirm. | Quotation created with correct sold + FOC qty. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-2.3 — 2 items, both have FOC (chatbot text)

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Send: *"Quote for [Customer]. Item A: 100 units, 10 FOC. Item B: 50 units, 5 FOC."* | Chatbot extracts both items with their respective sold qty and FOC qty. Confirmation shows 4 values: A sold 100, A FOC 10, B sold 50, B FOC 5. |
| 2 | Confirm. | Quotation created. Each item line has correct sold + FOC split. Grand total = A sold + B sold only. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-2.4 — 2 items with FOC + 1 item without FOC (chatbot text)

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Send: *"Quote for [Customer]. Item A: 100 units, 10 FOC. Item B: 50 units, 5 FOC. Item C: 30 units."* | Chatbot extracts 3 items. Items A and B each have FOC qty. Item C has no FOC. Confirmation shows all values. |
| 2 | Confirm. | Quotation created. Item C has no FOC line. Grand total = A + B + C sold only. |
| 3 | Open the Quotation in the web app and verify Item C. | Item C sold qty = 30, FOC = 0 or blank. No accidental FOC applied. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-2.5 — 1 item with FOC, 1 without FOC (chatbot text)

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Send: *"Quote for [Customer]. Item A: 80 units, 8 FOC. Item B: 60 units."* | Chatbot correctly assigns FOC only to Item A. Item B has no FOC. Confirmation shows this clearly. |
| 2 | Confirm. | Quotation created. Item B total unaffected by FOC logic. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-2.6 — Chatbot asks for clarification on ambiguous FOC message

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Send an ambiguous message: *"Quote for [Customer]. 100 boxes plus 10 extra."* (no explicit "FOC" keyword) | Chatbot asks: *"Are the 10 extra units free of charge (FOC) or a separate paid item?"* |
| 2 | Reply: *"FOC."* | Chatbot updates: sold qty = 100, FOC qty = 10. Shows corrected confirmation. |
| 3 | Confirm. | Quotation created correctly. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-2.7 — Chatbot rejects FOC qty exceeding sold qty

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Send: *"Quote for [Customer]. Item A: 10 units, 50 FOC."* (FOC > sold qty — likely a data entry error) | Chatbot flags the anomaly: *"FOC quantity (50) is larger than sold quantity (10). Please confirm this is correct."* |
| 2 | Reply: *"Yes, confirm."* | Chatbot accepts and creates Quotation with sold 10, FOC 50 — as instructed. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

### Section 3 — Document Carry-Through (2 cases)

---

#### FOC-3.1 — QT → SO: FOC qty carries through

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Submit a Quotation that has FOC items (use result from FOC-1.3 or FOC-2.4). Convert to Sales Order. | SO created. All items carry through. FOC qty on each line matches the Quotation. |
| 2 | Check SO total. | Total = sold lines only. FOC lines = RM 0.00. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-3.2 — SO → DO: FOC qty appears on Delivery Order

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | From submitted SO with FOC items, create a Delivery Order. | DO created. FOC qty appears alongside sold qty — warehouse needs to pick and deliver FOC units too. |
| 2 | Check DO PDF. | FOC items clearly labelled on DO PDF so picker/driver knows to include them. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

### Section 4 — PDF Output (3 cases)

---

#### FOC-4.1 — Quotation PDF shows FOC lines correctly

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Generate PDF from a submitted Quotation that has mixed FOC and non-FOC items (e.g. from FOC-1.3). | PDF downloads. |
| 2 | Check PDF content for each line. | FOC lines show qty, item name, and RM 0.00. Non-FOC lines show qty and full unit price. Grand total = sold lines only. FOC lines clearly labelled (e.g. "FOC" tag or note). |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-4.2 — DO PDF shows FOC lines for picking

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Generate PDF from a submitted DO with FOC items. | DO PDF shows both sold qty and FOC qty per item. FOC items labelled clearly so warehouse knows to include them. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-4.3 — Charged item appears before matching FOC item

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Create or open a Quotation / DO / Invoice that has at least 1 paid item with a matching FOC item for the same SKU. Generate the document view or PDF. | Document renders successfully. |
| 2 | Check the item ordering for each paid + FOC pair. | The charged item is listed first, and the matching FOC item appears directly below it. |
| 3 | Check that FOC items are not grouped separately or sorted above the charged items. | FOC items do not float to another section or appear before their related charged items. The ordering is consistent and easy for users to read. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

### Section 5 — Stock & Inventory (1 case)

---

#### FOC-5.1 — Stock deducted by sold qty + FOC qty on delivery

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Note stock level of Item A before delivery (e.g. 200 units). Create and submit a DO with Item A: sold 100, FOC 10. Mark as Delivered. | DO marked Delivered. |
| 2 | Check stock level of Item A. | Stock reduced by **110** (100 sold + 10 FOC). Not just 100. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

### Section 6 — Invoice & AutoCount (3 cases)

---

#### FOC-6.1 — Invoice total excludes FOC qty

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Create and submit an Invoice from a SO with FOC items (sold 100, FOC 10 for Item A; sold 50, no FOC for Item B). | Invoice created. |
| 2 | Check Invoice total. | Total = (100 × price A) + (50 × price B). FOC line for Item A shows RM 0.00 and does not inflate total. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-6.2 — Invoice PDF shows FOC lines but does not bill them

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Generate Invoice PDF for an invoice with FOC items. | PDF shows FOC qty as a visible line (RM 0.00) so customer can see they received FOC units — but it does not appear in the subtotal or grand total calculation. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

#### FOC-6.3 — AutoCount sync: FOC line uses correct account code

*Prerequisite: AutoCount access available.*

| Step | What to do | What you should see |
|------|------------|---------------------|
| 1 | Submit Invoice with FOC items. Check AutoCount sync status. | Invoice pushed to AutoCount. |
| 2 | In AutoCount, open the synced Invoice and check the account code for the FOC line. | FOC line mapped to a non-revenue account code (e.g. promotional/cost account) — not the sales revenue account. This is required for e-invoice compliance. |

**Result:** ☐ Pass ☐ Fail ☐ Issue  
**Tested by:** **Date:**

---

## Results Summary

| ID | Case | Stage | Mode | Result | Tested By | Date |
|----|------|-------|------|--------|-----------|------|
| FOC-1.1 | Single item with FOC (web app) | Quotation | FE | | | |
| FOC-1.2 | 2 items, both have FOC | Quotation | FE | | | |
| FOC-1.3 | 2 items FOC + 1 item no FOC | Quotation | FE | | | |
| FOC-1.4 | 1 item FOC, 1 item no FOC | Quotation | FE | | | |
| FOC-2.1 | Single item FOC — chatbot text | Chatbot | Chatbot | | | |
| FOC-2.2 | Single item FOC — voice note | Chatbot | Chatbot | | | |
| FOC-2.3 | 2 items both FOC — chatbot text | Chatbot | Chatbot | | | |
| FOC-2.4 | 2 items FOC + 1 no FOC — chatbot text | Chatbot | Chatbot | | | |
| FOC-2.5 | 1 item FOC, 1 no FOC — chatbot text | Chatbot | Chatbot | | | |
| FOC-2.6 | Chatbot clarifies ambiguous FOC message | Chatbot | Chatbot | | | |
| FOC-2.7 | Chatbot flags FOC qty > sold qty | Chatbot | Chatbot | | | |
| FOC-3.1 | QT → SO FOC carry-through | Carry-through | FE | | | |
| FOC-3.2 | SO → DO FOC carry-through | Carry-through | FE | | | |
| FOC-4.1 | Quotation PDF — FOC lines correct | PDF | FE | | | |
| FOC-4.2 | DO PDF — FOC lines for picking | PDF | FE | | | |
| FOC-4.3 | Charged item appears before matching FOC item | PDF | FE | | | |
| FOC-5.1 | Stock deducted by sold + FOC qty | Inventory | FE | | | |
| FOC-6.1 | Invoice total excludes FOC | Invoice | FE | | | |
| FOC-6.2 | Invoice PDF shows FOC at RM 0.00 | Invoice | FE | | | |
| FOC-6.3 | AutoCount: FOC uses correct account code | AutoCount | FE + AC | | | |

**Total: 20 test cases**

| Pass | Fail | Issue | Blocked (not built) |
|------|------|-------|---------------------|
| | | | 20 |

---

## Gap Notes (from UAT transcripts)

From **2026-05-14 UAT On-site** and **2026-05-15 Feedback Sync**:

| Gap | Source | Owner |
|-----|--------|-------|
| No FOC qty field on QT/SO line items | UAT on-site 2026-05-14 | Dev |
| Item-level discount not supported (blocker for FOC pricing model) | UAT on-site 03:49 | Dev |
| Chatbot has no FOC keyword handling | Feedback sync 2026-05-15 | Dev |
| AutoCount FOC account code mapping unclear | Feedback sync 2026-05-15 | Dev + Fixguru to confirm code |
| FOC qty vs stock deduction behaviour undefined | Inferred from workflow | Dev + PM to confirm |

---

## Scope Decision Required

> ⚠️ FOC feature is **not in the original Fixguru SOW**. Before dev begins, confirm:
> 1. Is FOC a go-live blocker or Phase 2?
> 2. Is this chargeable (CR) or included?
> 3. What AutoCount account code should FOC lines use? (Get from Fixguru finance team)

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - 2026-05 (Full)]] — main UAT form
- [[UAT/Issue]] — active issue log
- [[Feature Requests & Gaps]] — feature gap tracker
- [[Meetings/2026-05-14 Fixguru UAT Action Items]] — UAT on-site notes
- [[SOW/Fixguru SOW]] — scope of work

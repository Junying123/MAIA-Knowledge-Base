---
owner: Gareth
status: draft
last_reviewed: 2026-06-14
client: Fixguru
uat_round: 2
scope: Chatbot + AutoCount sync in setup sandbox
source_refs:
  - "[[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-14 Fixguru UAT On-site - Transcript]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-15 Fixguru UAT Action Items]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru Retesting Feedback]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru 2nd UAT Backward Plan]]"
---

# MAIA User Acceptance Test (UAT) - Fixguru
## Round 2 - Chatbot + AutoCount Sync

---

## Before You Start

**UAT Scope:** Chatbot flows + AutoCount sync in setup sandbox only  
**Environment:** setup sandbox only  
**Production Rule:** Do not push test documents to Fixguru production or production AutoCount.

### UAT Flow

| Phase | Who | What happens |
| --- | --- | --- |
| 1. Gareth run-through | Gareth | Run each test case first, record pass/fail/issues, and confirm sandbox data is ready. |
| 2. Dev fix / clarification | MAIA team | Fix or clarify issues found during Gareth's run-through. |
| 3. Fixguru retest | Fixguru team | Retest the same test cases using Gareth's run-through notes. |
| 4. Sign-off / punch list | Gareth + Fixguru | Confirm pass items, open issues, deferred items, and next owner. |

**Scope note:** This round is not a full FE role-permission UAT. Fixguru will mainly test chatbot behavior and AutoCount sync behavior. Gareth may still use the MAIA web app to verify records created by chatbot or synced from AutoCount.

**Chatbot:** Fixguru test chatbot channel to be confirmed before UAT  
**Web App:** setup sandbox, verification only  
**AutoCount Sync:** Use the same setup sandbox integration only

## Your Login / Access Details

| System | Access | Notes |
| --- | --- | --- |
| Setup sandbox | Gareth / MAIA team / Fixguru if available | Used to verify chatbot-created documents, AutoCount sync records, customer, item, SO, invoice, stock, credit, and branch data. |
| Fixguru test chatbot | Fixguru testers + Gareth | Main UAT channel for this round. |

---

## How to Use This Document

1. Gareth runs each test first.
2. For each test, Gareth fills **Gareth run-through result**, **issue notes**, **tested by**, and **date**.
3. If the test fails, record the exact chatbot wording, document ID, customer, item, AutoCount reference, and expected behavior.
4. After fixes or clarification, Fixguru repeats the same test case.
5. Fixguru fills **Fixguru retest result** and notes.
6. Mark final status only after Fixguru confirms the behavior in sandbox.

**Result options:**
- **Pass** - Worked as expected
- **Fail** - Did not work as expected
- **Issue** - Could not complete or needs clarification
- **Deferred** - Valid item, but not ready / out of current UAT scope

**Reporting issues:** Record the issue directly in this form. If the issue is visual or hard to explain, attach a Jam recording or screenshot.

---

## Setup Checklist *(For MAIA team / Gareth before Fixguru retest)*

| ID | Check | Expected | Result | Notes |
| --- | --- | --- | --- | --- |
| SETUP-01 | setup sandbox accessible | Gareth can inspect chatbot-created documents. |  |  |
| SETUP-02 | AutoCount sync connected in setup sandbox | Test sync does not touch production AutoCount. |  |  |
| SETUP-03 | Cutoff / snapshot policy confirmed | Pre-cutoff docs do not sync unless explicitly included. |  |  |
| SETUP-04 | Test customers seeded | Includes HQ customer, branch customer, and customer with credit exposure data. |  |  |
| SETUP-05 | Test items seeded | Includes external SKU, brand, stock, UOM, shelf attribute, minimum price, FOC item, and delivery SKU. |  |  |
| SETUP-06 | Historical pricing records seeded | Customer x item history exists across quotation / SO / invoice where needed. |  |  |
| SETUP-07 | AutoCount external IDs mapped | MAIA and chatbot can show AutoCount-facing IDs instead of internal IDs. |  |  |

---

## Retest Coverage From Previous UAT

| Previous issue / action | Retest case |
| --- | --- |
| Historical price, last discount %, net price, and current list price must show for customer x item. | Test 1.3, Test 1.4 |
| Chatbot confused customer name and item name in historical pricing lookup. | Test 1.3 |
| Item-level discount was missing or calculated incorrectly. | Test 1.4 |
| Chatbot could not reliably edit the same draft and created extra documents. | Test 1.2 |
| SO should stay draft until final confirmation, then sync / advance. | Test 1.1, Test 1.2, Test 2.3 |
| Fixguru wants AutoCount-style pro-forma flow from SO draft / AutoCount PDF. | Test 2.3, Test 2.4 |
| Chatbot item display should use AutoCount external SKU and brand, not MAIA internal ID. | Test 1.1, Test 2.1, Test 2.2 |
| FOC item with zero price was blocked unless free-item flag is set. | Test 1.6 |
| MAIA FOC format is separate lines, not AutoCount child lines. | Test 1.6, Test 2.3 |
| UOM split chatbot response did not match saved MAIA document. | Test 1.7 |
| Shelf lookup queried warehouse/bin instead of item attributes. | Test 1.8 |
| Delivery method should be added as SKU item line. | Test 1.10 |
| Credit exposure requires AutoCount outstanding invoices + unbilled SO amount. | Test 1.11, Test 2.7 |
| HQ + branch contact must sync and assign correct branch on SO. | Test 1.12, Test 2.8 |
| AutoCount external ID mapping must be stored back in MAIA after push. | Test 2.1, Test 2.2, Test 2.3 |

---

## Tests

---

### E2E Workflow Index (Use This Sequence During Session)

#### 1. Chatbot Order And Pricing Retest
- `1.1 Create SO Draft By Chatbot, External SKU Display [Chatbot + setup sandbox]`
- `1.2 Edit Same Draft Without Creating Extra Documents [Chatbot + setup sandbox]`
- `1.3 Historical Pricing For Correct Customer x Item [Chatbot]`
- `1.4 Apply Historical Price Or Discount To Draft Line [Chatbot + setup sandbox]`
- `1.5 Minimum Price Guardrail [Chatbot]`
- `1.6 FOC Item Through Chatbot [Chatbot + setup sandbox]`
- `1.7 UOM Split And Chatbot Summary Matches Saved Document [Chatbot + setup sandbox]`
- `1.8 Shelf / Item Attribute Lookup [Chatbot]`
- `1.9 Two-Warehouse Item Handling [Chatbot + setup sandbox]`
- `1.10 Delivery Method As SKU Line Item [Chatbot + setup sandbox]`
- `1.11 Credit Exposure From AutoCount Snapshot [Chatbot + setup sandbox]`
- `1.12 HQ And Branch Contact Selection [Chatbot + setup sandbox]`
- `1.13 Language Preference And Ambiguity Handling [Chatbot]`

#### 2. AutoCount Sync Retest
- `2.1 Customer And Item Master Sync Uses External IDs [setup sandbox + Chatbot]`
- `2.2 MAIA-Created Item Pushes To AutoCount And Stores Assigned Code [setup sandbox]`
- `2.3 SO Draft Final Confirmation Syncs In Setup Sandbox [Chatbot + setup sandbox]`
- `2.4 AutoCount Pro-Forma / PDF Handoff [setup sandbox]`
- `2.5 Invoice / Standalone Invoice Sync To Setup Sandbox [setup sandbox]`
- `2.6 Stock Snapshot / Daily Reconciliation [setup sandbox + Chatbot]`
- `2.7 Credit Limit Snapshot / Exposure Sync [setup sandbox + Chatbot]`
- `2.8 HQ + Branch Contact Sync [setup sandbox + Chatbot]`

---

### 1. Chatbot Order And Pricing Retest

*Who tests this section: Gareth first, then Fixguru testers.*

---

#### Test 1.1 - Create SO Draft By Chatbot, External SKU Display

*This test confirms chatbot can create a sales order draft using customer and item names/SKUs, and display Fixguru-facing item identity.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Send: "Create a sales order for [Customer]. Add 10 units of [AutoCount SKU or item name]. Keep it as draft." | Chatbot confirms customer, item, quantity, UOM, price, and draft intent. |
| 2 | Ask chatbot for the created document reference. | Chatbot returns MAIA SO draft reference and current status. |
| 3 | Gareth verifies the draft in setup sandbox. | SO exists in Draft. Item code shown to user is AutoCount external SKU, not MAIA internal ID. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.2 - Edit Same Draft Without Creating Extra Documents

*This retests the previous issue where chatbot could not reliably edit the same draft and might create extra quotations/SOs.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Continue from Test 1.1 and ask: "For the same SO, change item 1 to 20 units." | Same SO reference is updated. |
| 2 | Ask to remove one line or change one line price. | Same SO reference is updated. |
| 3 | Ask chatbot: "Show me the current SO summary." | Summary matches the latest draft state. |
| 4 | Gareth checks setup sandbox document count. | No duplicate SO/QTN was created accidentally. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.3 - Historical Pricing For Correct Customer x Item

*This confirms chatbot retrieves historical price for the exact customer x item pair and does not confuse customer name with item name.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask: "For [Customer], what was the last price and discount for [Item/SKU]?" | Chatbot identifies the customer and item correctly. |
| 2 | Ask: "Show recent history for the same customer and item." | Chatbot shows source doc, qty, unit price, discount %, net price, date, and current list price. |
| 3 | Gareth cross-checks one result in setup sandbox. | Chatbot result matches the historical record. |
| 4 | Ask a similar prompt with customer/item order reversed. | Chatbot still maps customer and item correctly, or asks clarification if ambiguous. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.4 - Apply Historical Price Or Discount To Draft Line

*This retests item-level discount behavior and the historical pricing decision flow.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Create or use an SO draft with at least two items. | Draft has multiple lines. |
| 2 | Ask: "Use the last transaction discount for this item on the current SO." | Chatbot asks which line/item if ambiguous and confirms exact line before applying. |
| 3 | Gareth verifies calculation. | Discount % and net unit price are mathematically correct vs current list price. |
| 4 | Ask chatbot for updated SO summary. | Summary shows chosen price/discount on the correct line only. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.5 - Minimum Price Guardrail

*This confirms chatbot blocks or warns when a user applies a price below item minimum price.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Use an item with configured minimum price. | Test item minimum price is known. |
| 2 | Ask chatbot to set the item price below minimum. | Chatbot flags the issue before finalizing. |
| 3 | Confirm what happens after warning. | Behavior matches configured approval/blocking policy. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.6 - FOC Item Through Chatbot

*This retests zero-price FOC handling from previous feedback.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Send: "Add 100 units of [Item/SKU] and 10 FOC units to this SO." | Chatbot confirms sold qty and FOC qty separately. |
| 2 | Ask chatbot to create/update the draft. | setup sandbox stores FOC as separate line or agreed MAIA format. |
| 3 | Try final confirmation/submission in sandbox flow. | Zero-price FOC line is not blocked if `is_free_item` is set. |
| 4 | Verify setup sandbox sync if available. | setup sandbox receives correct FOC representation or known mapped format. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.7 - UOM Split And Chatbot Summary Matches Saved Document

*This retests the mismatch where chatbot described consolidated UOM but MAIA saved split lines.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Send: "Add [Item A] as 1 x 8PCS and 5 x 1PCS, and [Item B] as 1 x 8PCS and 5 x 1PCS." | Chatbot confirms split line structure. |
| 2 | Ask chatbot for saved document summary. | Summary shows the same line structure as setup sandbox. |
| 3 | Gareth verifies in setup sandbox. | Saved lines, UOM, qty, and notes match chatbot output. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.8 - Shelf / Item Attribute Lookup

*This retests shelf lookup using item attributes, not warehouse/bin lookup.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask: "Where is [Item/SKU] kept? Show me the shelf." | Chatbot returns item attribute shelf value. |
| 2 | If in delivery flow, ask chatbot to add shelf note to Delivery Note. | Shelf appears in the agreed additional note field where scoped. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.9 - Two-Warehouse Item Handling

*This retests chatbot handling for items split across two warehouses.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask chatbot to add an item with two-warehouse stock context. | Chatbot shows available stock by warehouse or asks which warehouse to use. |
| 2 | Confirm selected warehouse logic. | Saved draft reflects selected warehouse/allocation behavior. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.10 - Delivery Method As SKU Line Item

*This confirms chatbot can add transport/delivery charge as an item line for e-invoice claiming.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask: "Add 3PL Lalamove delivery charge as an item line." | Chatbot finds the delivery SKU/item. |
| 2 | Confirm adding to draft. | Delivery charge appears as item line in setup sandbox. |
| 3 | Confirm sync payload if available. | setup sandbox receives delivery charge as item line. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.11 - Credit Exposure From AutoCount Snapshot

*This confirms chatbot can show credit limit, exposure, and available balance using AutoCount-backed data.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask chatbot for a customer's credit standing. | Chatbot returns credit limit, current exposure, and available balance. |
| 2 | Ask to create SO that stays within limit. | Chatbot allows draft and shows remaining balance. |
| 3 | Ask to create SO that exceeds limit. | Chatbot warns/blocks according to configured policy. |
| 4 | Gareth cross-checks with setup sandbox snapshot/source data. | Figures match seeded sandbox credit data. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.12 - HQ And Branch Contact Selection

*This retests branch assignment when Fixguru customer has HQ and branch contacts.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask chatbot to create SO for a customer with multiple branches. | Chatbot selects correct branch or asks which branch. |
| 2 | Confirm branch. | SO draft stores correct branch/contact/address. |
| 3 | Gareth verifies in setup sandbox and setup sandbox if synced. | Branch mapping remains correct after sync. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 1.13 - Language Preference And Ambiguity Handling

*This confirms chatbot uses the user's response language preference and asks clarification when intent is unclear.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Ask chatbot to set reply language preference to English or Malay. | Chatbot confirms the preference. |
| 2 | Send a normal order prompt. | Chatbot replies in the preferred supported language. |
| 3 | Send an ambiguous prompt with unclear customer/item. | Chatbot asks clarification before creating any document. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

### 2. AutoCount Sync Retest

*Who tests this section: Gareth first, then Fixguru testers if they have sandbox access.*

---

#### Test 2.1 - Customer And Item Master Sync Uses External IDs

*This confirms MAIA stores and displays AutoCount external customer/item IDs after sync.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Sync or inspect seeded customer and item from setup sandbox. | MAIA has external customer/item ID mapping. |
| 2 | Ask chatbot to search item/customer by external code and name. | Chatbot finds the correct record. |
| 3 | Ask chatbot to show item details. | Output includes external SKU + brand + item name, not MAIA internal ID. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.2 - MAIA-Created Item Pushes To AutoCount And Stores Assigned Code

*This retests item code override rule: if MAIA creates item with a code that AutoCount changes, MAIA must store the AutoCount assigned code.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Create or trigger test item push from setup sandbox to setup sandbox. | AutoCount creates item and returns assigned item code. |
| 2 | Inspect setup sandbox item mapping. | AutoCount assigned code is stored. |
| 3 | Ask chatbot to search/display the item. | Chatbot uses AutoCount assigned code, not stale MAIA-entered code. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.3 - SO Draft Final Confirmation Syncs In Setup Sandbox

*This confirms chatbot-created SO stays draft until final confirmation, then syncs to setup sandbox only.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Use chatbot to create SO draft. | SO remains draft in setup sandbox. |
| 2 | Edit draft using chatbot. | Same SO reference updates. |
| 3 | Tell chatbot: "Confirm this SO and sync in setup sandbox." | SO is finalized according to configured flow and sync starts. |
| 4 | Check the setup sandbox. | Matching SO appears in setup sandbox only. |
| 5 | Check the setup sandbox. | AutoCount external doc ID is stored and visible where required. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.4 - AutoCount Pro-Forma / PDF Handoff

*This confirms Fixguru can use setup sandbox output as pro-forma after MAIA chatbot SO flow.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Continue from Test 2.3. | Synced SO exists in setup sandbox. |
| 2 | Generate or inspect AutoCount pro-forma/PDF output if available. | Output reflects expected Fixguru-facing format/data. |
| 3 | Compare against chatbot SO summary. | Customer, branch, item lines, discounts, FOC, and delivery item match. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.5 - Invoice / Standalone Invoice Sync To setup sandbox

*This confirms setup sandbox invoice sync behavior after cutoff, including standalone invoices from migration/testing period.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Confirm cutoff date used in sandbox config. | Cutoff is documented in notes. |
| 2 | Create or inspect post-cutoff setup sandbox invoice. | Invoice is eligible for sync. |
| 3 | Trigger or wait for sync in setup sandbox. | MAIA receives invoice with correct customer, item, amount, and external ID. |
| 4 | Check pre-cutoff control document. | It does not sync unexpectedly. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.6 - Stock Snapshot / Daily Reconciliation

*This confirms setup sandbox stock snapshot can update setup sandbox stock used by chatbot.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Confirm stock value in setup sandbox for test item. | Source stock is known. |
| 2 | Run or wait for stock sync. | setup sandbox stock updates. |
| 3 | Ask chatbot for item availability. | Chatbot returns stock based on setup sandbox sync, not stale value. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.7 - Credit Limit Snapshot / Exposure Sync

*This confirms credit exposure uses setup sandbox credit limit and open invoice data.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Confirm setup sandbox customer credit limit and outstanding invoice amount. | Source values are recorded. |
| 2 | Trigger/import credit snapshot to setup sandbox. | MAIA stores credit limit and open exposure. |
| 3 | Ask chatbot for customer's credit standing. | Chatbot matches setup sandbox credit data. |
| 4 | Ask chatbot to create SO that exceeds available balance. | Chatbot warns/blocks according to configured rule. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

#### Test 2.8 - HQ + Branch Contact Sync

*This confirms AutoCount sync contact sync supports HQ and branch selection in chatbot SO flow.*

| Step | What to do | What you should see |
| --- | --- | --- |
| 1 | Inspect seeded HQ + branch customer in setup sandbox. | Branch/contact data exists. |
| 2 | Create SO by chatbot for branch-specific customer/address. | Chatbot asks clarification if needed and saves correct branch. |
| 3 | Sync to setup sandbox. | setup sandbox document uses correct branch/contact mapping. |

**Gareth run-through result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Issue notes / observation:**

**Fixguru retest result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue
- [ ] Deferred

**Tested by:**  
**Date:**  
**Fixguru notes:**

---

## Results Summary

| Test ID | What was tested | Mode | Gareth result | Fixguru result | Final status | Blocker owner | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SETUP-01 to SETUP-07 | Sandbox readiness | setup sandbox |  |  |  |  |  |
| 1.1 | Create SO draft / external SKU | Chatbot |  |  |  |  |  |
| 1.2 | Edit same draft | Chatbot |  |  |  |  |  |
| 1.3 | Historical pricing lookup | Chatbot |  |  |  |  |  |
| 1.4 | Apply historical price / discount | Chatbot |  |  |  |  |  |
| 1.5 | Minimum price guardrail | Chatbot |  |  |  |  |  |
| 1.6 | FOC item | Chatbot + setup sandbox |  |  |  |  |  |
| 1.7 | UOM split | Chatbot |  |  |  |  |  |
| 1.8 | Shelf / item attributes | Chatbot |  |  |  |  |  |
| 1.9 | Two-warehouse handling | Chatbot |  |  |  |  |  |
| 1.10 | Delivery method as SKU | Chatbot + setup sandbox |  |  |  |  |  |
| 1.11 | Credit exposure chatbot | Chatbot + setup sandbox |  |  |  |  |  |
| 1.12 | HQ + branch contact | Chatbot + setup sandbox |  |  |  |  |  |
| 1.13 | Language / ambiguity | Chatbot |  |  |  |  |  |
| 2.1 | External IDs master sync | setup sandbox |  |  |  |  |  |
| 2.2 | MAIA item -> AutoCount code override | setup sandbox |  |  |  |  |  |
| 2.3 | SO sync in setup sandbox | Chatbot + setup sandbox |  |  |  |  |  |
| 2.4 | AutoCount pro-forma / PDF handoff | AutoCount |  |  |  |  |  |
| 2.5 | Invoice sync after cutoff | setup sandbox |  |  |  |  |  |
| 2.6 | Stock snapshot sync | Chatbot + setup sandbox |  |  |  |  |  |
| 2.7 | Credit limit / exposure sync | Chatbot + setup sandbox |  |  |  |  |  |
| 2.8 | HQ + branch contact sync | Chatbot + setup sandbox |  |  |  |  |  |

| Pass | Fail | Issue | Deferred |
| --- | --- | --- | --- |
|  |  |  |  |

---

## Issue Log

| Issue ID | Test ID | Found by | Environment | Document / customer / item | What happened | Expected behavior | Owner | Status | Retest notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Gareth / Fixguru | setup sandbox |  |  |  |  |  |  |

---

## Overall Feedback

**What worked well:**


**Main issues found:**


**Items to defer / confirm later:**


---

## Sign-Off

By signing below, the Fixguru team confirms that the chatbot + setup sandbox UAT has been completed and the results above are accurate.

| Name | Role | Signature / Status | Date | Notes |
| --- | --- | --- | --- | --- |
| Gareth | PM run-through owner |  |  |  |
| Fixguru representative | Client tester |  |  |  |
| MAIA dev/support | Issue owner acknowledgement |  |  |  |

**Overall outcome:**
- [ ] Approved - Ready to proceed
- [ ] Conditional - Proceed with the following items to fix first
- [ ] Not approved - Further fixes required before sign-off

**Conditions / punch list:**


---

## See Also

- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru Retesting Feedback]]
- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru 2nd UAT Backward Plan]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-15 Fixguru UAT Action Items]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-14 Fixguru UAT On-site - Transcript]]

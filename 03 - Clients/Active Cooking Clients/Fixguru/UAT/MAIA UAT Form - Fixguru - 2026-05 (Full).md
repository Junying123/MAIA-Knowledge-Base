---
owner: Gareth
status: draft
last_reviewed: 2026-06-14
client: Fixguru
uat_round: 2
scope: Chatbot + AutoCount sandbox sync
source_refs:
  - "[[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-14 Fixguru UAT On-site - Transcript]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-15 Fixguru UAT Action Items]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru Retesting Feedback]]"
  - "[[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru 2nd UAT Backward Plan]]"
---

# MAIA UAT Form - Fixguru - Chatbot + AutoCount Sandbox Sync

## UAT Purpose

This UAT round focuses only on:

- MAIA chatbot flows used by Fixguru sales/admin users
- AutoCount sandbox sync into / out of the MAIA setup sandbox
- Retesting issues found during the last Fixguru UAT and retesting sessions

This is not a full web-app UAT. The MAIA web app can be used by Gareth to verify records created by the chatbot, but Fixguru's test path is chatbot-first.

## Testing Roles

| Role | Person | Responsibility |
| --- | --- | --- |
| PM run-through owner | Gareth | Run every updated test case first, record issue notes, confirm sandbox data is ready before client testing. |
| Client tester | Fixguru team | Retest the same cases based on Gareth's run-through notes. |
| Dev support | MAIA team | Fix issues found during Gareth run-through or Fixguru retest. |

## Environment Rules

| Rule | Requirement |
| --- | --- |
| MAIA environment | Use MAIA setup sandbox only. Do not test against Fixguru production. |
| AutoCount environment | Use AutoCount sandbox/test company only. Do not push test documents to production AutoCount. |
| Chatbot channel | Use the Fixguru test chatbot channel confirmed by MAIA team before UAT. |
| Web app use | Gareth may open MAIA sandbox to verify records created by chatbot or sync. Fixguru does not need to run FE test cases. |
| Test data | Use seeded sandbox customers, items, prices, stock, branches, and credit data. Do not use live production data unless explicitly copied into sandbox. |

## How To Fill This Form

For each test case:

1. Gareth runs the test first and fills **Gareth run-through result**.
2. If there is an issue, Gareth fills **Issue / observation** with exact chatbot wording, document ID, customer, item, and expected behavior.
3. Dev fixes if needed.
4. Fixguru repeats the test and fills **Fixguru retest result**.
5. Mark final status only after Fixguru confirms the behavior in sandbox.

**Result options:** Pass / Fail / Issue / Deferred

## Sandbox Readiness Checklist

| ID | Check | Expected | Gareth result | Notes |
| --- | --- | --- | --- | --- |
| SETUP-01 | MAIA setup sandbox accessible | Gareth can log in and inspect chatbot-created documents. |  |  |
| SETUP-02 | AutoCount sandbox connected | Test customer/item/SO/invoice sync does not touch production AutoCount. |  |  |
| SETUP-03 | Cutoff/snapshot policy confirmed | Documents before cutoff are not synced unless explicitly in test scope. |  |  |
| SETUP-04 | Test customers seeded | At least one HQ customer, one branch customer, and one customer with credit exposure data are available. |  |  |
| SETUP-05 | Test items seeded | Items include external SKU, brand, stock, UOM, shelf attribute, minimum price, and FOC-capable item. |  |  |
| SETUP-06 | Historical pricing records seeded | Customer x item history exists across quotation/SO/invoice where needed. |  |  |
| SETUP-07 | AutoCount item/customer IDs mapped | MAIA can show AutoCount external IDs instead of MAIA internal IDs. |  |  |

## Retest Coverage From Previous UAT

| Previous issue / action | Covered by |
| --- | --- |
| Chatbot must show historical price, last discount %, net price, and current list price for customer x item. | CHAT-03, CHAT-04 |
| Chatbot confused customer name and item name in historical pricing lookup. | CHAT-03 |
| Item-level discount was missing or calculated incorrectly. | CHAT-04 |
| Chatbot could not reliably edit the same quotation / SO draft and created extra documents. | CHAT-02 |
| Sales order should stay draft until final confirmation; only then sync/advance. | CHAT-01, CHAT-02, AC-03 |
| Fixguru wants AutoCount-style pro-forma flow from SO draft / AutoCount PDF. | AC-03, AC-04 |
| Chatbot item display should use AutoCount external SKU and brand, not MAIA internal ID. | CHAT-01, AC-01, AC-02 |
| FOC item with zero price was blocked unless free-item flag is set. | CHAT-06 |
| MAIA FOC format is separate lines, not AutoCount child lines. | CHAT-06, AC-03 |
| UOM split chatbot response did not match saved MAIA document. | CHAT-07 |
| Shelf lookup queried warehouse/bin instead of item attributes. | CHAT-08 |
| Delivery method should be added as SKU item line when requested. | CHAT-10 |
| Credit exposure requires AutoCount outstanding invoices + unbilled SO amount. | CHAT-11, AC-07 |
| HQ + branch contact must sync and assign correct branch on SO. | CHAT-12, AC-08 |
| AutoCount external ID mapping must be stored back in MAIA after push. | AC-01, AC-02, AC-03 |

---

# Test Cases

## A. Chatbot Order And Pricing Retest

### CHAT-01 - Create SO Draft By Chatbot, External SKU Display

| Field | Details |
| --- | --- |
| Purpose | Confirm chatbot can create a sales order draft using customer and item names/SKUs, and displays Fixguru-facing item identity. |
| Example prompt | "Create a sales order for [Customer]. Add 10 units of [AutoCount SKU or item name]. Keep it as draft." |
| Expected | Chatbot identifies the correct customer and item, shows AutoCount external SKU + brand + item name where available, creates a MAIA SO draft, and does not submit/sync until confirmation. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Send the example prompt to the Fixguru test chatbot. | Chatbot confirms customer, item, quantity, UOM, price, and draft intent. |
| 2 | Ask chatbot for the created document reference. | Chatbot returns MAIA SO draft reference and current status. |
| 3 | Verify the draft in MAIA sandbox. | SO exists in Draft. Item code shown to user is external SKU, not MAIA internal ID. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-02 - Edit Same Draft Without Creating Extra Documents

| Field | Details |
| --- | --- |
| Purpose | Retest the previous UAT issue where chatbot could not reliably edit the same draft and might create extra quotations/SOs. |
| Example prompt | "For the same SO, change item 1 to 20 units, remove item 2, then add delivery item 3PL Lalamove." |
| Expected | Chatbot edits the existing draft only. It does not create a new SO unless user explicitly asks for a new document. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Continue from CHAT-01 and ask to change quantity on the same draft. | Same SO reference is updated. |
| 2 | Ask to remove one line or change one line price. | Same SO reference is updated. |
| 3 | Ask chatbot "show me the current SO summary". | Summary matches the latest draft state. |
| 4 | Check MAIA sandbox document count. | No duplicate SO/QTN was created accidentally. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-03 - Historical Pricing For Correct Customer x Item

| Field | Details |
| --- | --- |
| Purpose | Confirm chatbot retrieves historical price for the exact customer x item pair and does not confuse customer name with item name. |
| Example prompt | "For [Customer], what was the last price and discount for [Item/SKU]?" |
| Expected | Chatbot returns latest relevant transaction for the same customer x item, including source doc, qty, unit price, discount %, net price, date, and current list price benchmark. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Ask for last price for seeded customer x item. | Chatbot identifies customer and item correctly. |
| 2 | Ask for recent history for same customer x item. | Chatbot shows recent transactions with doc ref, qty, unit price, discount %, and current list price. |
| 3 | Cross-check one result in MAIA sandbox. | Chatbot result matches MAIA historical record. |
| 4 | Ask a similar prompt with customer/item order reversed. | Chatbot still maps customer and item correctly or asks clarification if ambiguous. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-04 - Apply Historical Price Or Discount To Draft Line

| Field | Details |
| --- | --- |
| Purpose | Retest item-level discount behavior and the expected historical pricing decision flow. |
| Example prompt | "Use the last transaction discount for this item on the current SO." |
| Expected | Chatbot asks which line/item if ambiguous, applies price or discount to the correct line, derives unit price/discount correctly, and keeps the historical reference visible. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Create or use an SO draft with at least two items. | Draft has multiple lines. |
| 2 | Ask chatbot to apply the last transaction discount to one item. | Chatbot confirms exact line before applying. |
| 3 | Verify calculation. | Discount % and net unit price are mathematically correct vs current list price. |
| 4 | Ask chatbot for updated SO summary. | Summary shows the chosen price/discount on the correct line only. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-05 - Minimum Price Guardrail

| Field | Details |
| --- | --- |
| Purpose | Confirm chatbot blocks or warns when user applies a price below item minimum price. |
| Example prompt | "Set [Item/SKU] price to RM [below minimum] for this SO." |
| Expected | Chatbot detects below-minimum pricing and does not silently apply unsafe price. It should block, warn, or route to approval based on current configured behavior. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Use an item with configured minimum price. | Test item minimum price is known. |
| 2 | Ask chatbot to set price below minimum. | Chatbot flags the issue before finalizing. |
| 3 | Confirm what happens after warning. | Behavior matches configured approval/blocking policy. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-06 - FOC Item Through Chatbot

| Field | Details |
| --- | --- |
| Purpose | Retest zero-price FOC handling from previous feedback. |
| Example prompt | "Add 100 units of [Item/SKU] and 10 FOC units to this SO." |
| Expected | Chatbot separates paid qty and FOC qty, asks/sets free-item flag when unit price is zero, keeps document total based only on paid qty, and allows submit/sync if FOC flag is set. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Add paid qty + FOC qty by chatbot. | Chatbot confirms sold qty and FOC qty separately. |
| 2 | Ask chatbot to create/update the draft. | MAIA sandbox stores FOC as separate line or agreed MAIA format. |
| 3 | Try final confirmation/submission in sandbox flow. | Zero-price FOC line is not blocked if `is_free_item` is set. |
| 4 | Verify AutoCount sync behavior if available. | AutoCount sandbox receives correct FOC representation or known mapped format. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-07 - UOM Split And Chatbot Summary Matches Saved Document

| Field | Details |
| --- | --- |
| Purpose | Retest prior mismatch where chatbot summary said consolidated UOM but MAIA saved split lines. |
| Example prompt | "Add [Item A] as 1 x 8PCS and 5 x 1PCS, and [Item B] as 1 x 8PCS and 5 x 1PCS." |
| Expected | Chatbot response matches actual saved MAIA lines, UOM labels, quantities, and additional notes. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Send multi-item, multi-UOM prompt. | Chatbot confirms split line structure. |
| 2 | Ask chatbot for saved document summary. | Summary shows same line structure as MAIA sandbox. |
| 3 | Verify in MAIA sandbox. | Saved lines, UOM, qty, and notes match chatbot output. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-08 - Shelf / Item Attribute Lookup

| Field | Details |
| --- | --- |
| Purpose | Retest shelf lookup using item attributes, not warehouse/bin lookup. |
| Example prompt | "Where is [Item/SKU] kept? Show me the shelf." |
| Expected | Chatbot retrieves shelf from item attributes and does not incorrectly report no shelf because warehouse bin is empty. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Ask for shelf location of seeded item. | Chatbot returns item attribute shelf value. |
| 2 | Ask to add shelf note to Delivery Note if in flow. | Shelf appears in agreed additional note field where scoped. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-09 - Two-Warehouse Item Handling

| Field | Details |
| --- | --- |
| Purpose | Retest chatbot handling for items split across two warehouses. |
| Example prompt | "Create SO for [Customer] with [Item/SKU]. Use stock from [Warehouse A] and [Warehouse B] if needed." |
| Expected | Chatbot handles stock/source warehouse correctly or asks clarification instead of silently choosing wrong warehouse. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Ask chatbot to add item with two-warehouse stock context. | Chatbot shows available stock by warehouse or asks which warehouse to use. |
| 2 | Confirm selected warehouse logic. | Saved draft reflects selected warehouse/allocation behavior. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-10 - Delivery Method As SKU Line Item

| Field | Details |
| --- | --- |
| Purpose | Confirm chatbot can add transport/delivery charge as an item line for e-invoice claiming. |
| Example prompt | "Add 3PL Lalamove delivery charge as an item line." |
| Expected | Chatbot searches delivery-type item/SKU and adds it as a normal line item, not only as delivery method metadata. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Ask chatbot to add delivery item by name. | Chatbot finds delivery SKU/item. |
| 2 | Confirm adding to draft. | Delivery charge appears as item line in MAIA sandbox. |
| 3 | Confirm sync payload if available. | AutoCount sandbox receives delivery charge as item line. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-11 - Credit Exposure From AutoCount Snapshot

| Field | Details |
| --- | --- |
| Purpose | Confirm chatbot can show credit limit, exposure, and available balance using AutoCount-backed data. |
| Example prompt | "Can this customer place a new SO for RM [amount]? Show credit limit and exposure." |
| Expected | Chatbot shows credit limit, current exposure, available balance, and warns/blocks if new SO would exceed limit. Exposure should include unbilled SO amount plus outstanding unpaid invoices where synced. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Ask chatbot for customer credit standing. | Chatbot returns credit limit, exposure, and available balance. |
| 2 | Ask to create SO that stays within limit. | Chatbot allows draft and shows remaining balance. |
| 3 | Ask to create SO that exceeds limit. | Chatbot warns/blocks according to configured policy. |
| 4 | Cross-check with AutoCount sandbox snapshot/source data. | Figures match seeded sandbox credit data. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-12 - HQ And Branch Contact Selection

| Field | Details |
| --- | --- |
| Purpose | Retest branch assignment when Fixguru customer has HQ and branch contacts. |
| Example prompt | "Create SO for [Customer branch name/address]." |
| Expected | Chatbot identifies the correct branch/contact, asks clarification when multiple branches match, and saves the correct branch on SO. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Ask chatbot to create SO for customer with multiple branches. | Chatbot selects correct branch or asks which branch. |
| 2 | Confirm branch. | SO draft stores correct branch/contact/address. |
| 3 | Verify in MAIA sandbox and AutoCount sandbox if synced. | Branch mapping remains correct after sync. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### CHAT-13 - Language Preference And Ambiguity Handling

| Field | Details |
| --- | --- |
| Purpose | Confirm chatbot uses the user's response language preference and asks clarification when intent is unclear. |
| Example prompt | "Set my reply language to Malay." / ambiguous mixed-language order prompt |
| Expected | Chatbot stores language preference in DB/context and replies in allowed language. For unclear intent, chatbot asks clarification instead of guessing. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Set language preference. | Chatbot confirms preference. |
| 2 | Send normal order prompt. | Chatbot replies in preferred supported language. |
| 3 | Send ambiguous prompt with unclear customer/item. | Chatbot asks clarification before creating document. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

---

## B. AutoCount Sandbox Sync Retest

### AC-01 - Customer And Item Master Sync Uses External IDs

| Field | Details |
| --- | --- |
| Purpose | Confirm MAIA stores and displays AutoCount external customer/item IDs after sync. |
| Expected | Chatbot and MAIA sandbox show AutoCount external SKU/customer code where user-facing code is required. MAIA internal IDs should not appear in chatbot/PDF-facing output. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Sync or inspect seeded customer and item from AutoCount sandbox. | MAIA has external customer/item ID mapping. |
| 2 | Ask chatbot to search item/customer by external code and name. | Chatbot finds correct record. |
| 3 | Ask chatbot to show item details. | Output includes external SKU + brand + item name. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### AC-02 - MAIA-Created Item Pushes To AutoCount And Stores Assigned Code

| Field | Details |
| --- | --- |
| Purpose | Retest item code override rule: if MAIA creates item with code that AutoCount changes, MAIA must store AutoCount assigned code. |
| Expected | If MAIA sends item code D10 but AutoCount assigns D11, MAIA updates/stores D11 as external SKU and chatbot uses D11 going forward. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Create or trigger test item push from MAIA sandbox to AutoCount sandbox. | AutoCount creates item and returns assigned item code. |
| 2 | Inspect MAIA sandbox item mapping. | AutoCount assigned code is stored. |
| 3 | Ask chatbot to search/display the item. | Chatbot uses AutoCount assigned code, not stale MAIA-entered code. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### AC-03 - SO Draft Final Confirmation Syncs To AutoCount Sandbox

| Field | Details |
| --- | --- |
| Purpose | Confirm chatbot-created SO stays draft until final confirmation, then syncs to AutoCount sandbox only. |
| Expected | Draft can be edited before confirmation. After final confirmation, SO syncs to AutoCount sandbox, AutoCount external doc ID is stored back in MAIA, and no production AutoCount document is created. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Use chatbot to create SO draft. | SO remains draft in MAIA sandbox. |
| 2 | Edit draft using chatbot. | Same SO reference updates. |
| 3 | Tell chatbot "confirm this SO and sync to AutoCount sandbox". | SO is finalized according to configured flow and sync starts. |
| 4 | Check AutoCount sandbox. | Matching SO appears in AutoCount sandbox only. |
| 5 | Check MAIA sandbox. | AutoCount external doc ID is stored and visible where required. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### AC-04 - AutoCount Pro-Forma / PDF Handoff

| Field | Details |
| --- | --- |
| Purpose | Confirm Fixguru can use AutoCount sandbox output as pro-forma after MAIA chatbot SO flow. |
| Expected | AutoCount sandbox contains synced SO/pro-forma source with correct customer, items, discounts, delivery SKU, FOC representation, and external IDs. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Continue from AC-03. | Synced SO exists in AutoCount sandbox. |
| 2 | Generate or inspect AutoCount pro-forma/PDF output if available. | Output reflects expected Fixguru-facing format/data. |
| 3 | Compare against chatbot SO summary. | Customer, branch, item lines, discounts, FOC, and delivery item match. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### AC-05 - Invoice / Standalone Invoice Sync To MAIA Sandbox

| Field | Details |
| --- | --- |
| Purpose | Confirm AutoCount sandbox invoice sync behavior after cutoff, including standalone invoices from migration/testing period. |
| Expected | Eligible AutoCount sandbox invoices after cutoff sync to MAIA sandbox. Pre-cutoff docs stay untouched unless explicitly included. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Confirm cutoff date used in sandbox config. | Cutoff is documented in notes. |
| 2 | Create or inspect post-cutoff AutoCount sandbox invoice. | Invoice is eligible for sync. |
| 3 | Trigger/wait for sync to MAIA sandbox. | MAIA receives invoice with correct customer, item, amount, and external ID. |
| 4 | Check pre-cutoff control document. | It does not sync unexpectedly. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### AC-06 - Stock Snapshot / Daily Reconciliation

| Field | Details |
| --- | --- |
| Purpose | Confirm AutoCount sandbox stock snapshot can update MAIA sandbox stock used by chatbot. |
| Expected | MAIA sandbox stock reflects AutoCount sandbox snapshot after sync/reconciliation. Chatbot uses updated stock when answering availability questions. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Confirm stock value in AutoCount sandbox for test item. | Source stock is known. |
| 2 | Run or wait for stock sync. | MAIA sandbox stock updates. |
| 3 | Ask chatbot for item availability. | Chatbot returns stock based on MAIA/AutoCount sandbox sync, not stale value. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### AC-07 - Credit Limit Snapshot / Exposure Sync

| Field | Details |
| --- | --- |
| Purpose | Confirm credit exposure uses AutoCount sandbox credit limit and open invoice data. |
| Expected | MAIA sandbox imports customer credit limit and outstanding exposure from AutoCount snapshot. Chatbot credit response matches imported values. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Confirm AutoCount sandbox customer credit limit and outstanding invoice amount. | Source values are recorded. |
| 2 | Trigger/import credit snapshot to MAIA sandbox. | MAIA stores credit limit and open exposure. |
| 3 | Ask chatbot for customer's credit standing. | Chatbot matches MAIA/AutoCount sandbox credit data. |
| 4 | Ask chatbot to create SO that exceeds available balance. | Chatbot warns/blocks according to configured rule. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

### AC-08 - HQ + Branch Contact Sync

| Field | Details |
| --- | --- |
| Purpose | Confirm AutoCount/MAIA sandbox contact sync supports HQ and branch selection in chatbot SO flow. |
| Expected | MAIA has branch contact/address mappings, chatbot selects correct branch, and synced AutoCount sandbox document keeps correct branch/customer contact. |

| Step | What Gareth should do | Expected result |
| --- | --- | --- |
| 1 | Inspect seeded HQ + branch customer in MAIA sandbox. | Branch/contact data exists. |
| 2 | Create SO by chatbot for branch-specific customer/address. | Chatbot asks clarification if needed and saves correct branch. |
| 3 | Sync to AutoCount sandbox. | AutoCount sandbox document uses correct branch/contact mapping. |

| Result field | Fill in |
| --- | --- |
| Gareth run-through result |  |
| Issue / observation |  |
| Fixguru retest result |  |
| Final status |  |

---

## Result Summary

| Test ID | Area | Gareth result | Fixguru result | Final status | Issue owner | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| SETUP-01 to SETUP-07 | Sandbox readiness |  |  |  |  |  |
| CHAT-01 | Create SO draft / external SKU |  |  |  |  |  |
| CHAT-02 | Edit same draft |  |  |  |  |  |
| CHAT-03 | Historical pricing lookup |  |  |  |  |  |
| CHAT-04 | Apply historical price/discount |  |  |  |  |  |
| CHAT-05 | Minimum price guardrail |  |  |  |  |  |
| CHAT-06 | FOC item |  |  |  |  |  |
| CHAT-07 | UOM split |  |  |  |  |  |
| CHAT-08 | Shelf/item attributes |  |  |  |  |  |
| CHAT-09 | Two-warehouse handling |  |  |  |  |  |
| CHAT-10 | Delivery method as SKU |  |  |  |  |  |
| CHAT-11 | Credit exposure chatbot |  |  |  |  |  |
| CHAT-12 | HQ + branch contact |  |  |  |  |  |
| CHAT-13 | Language / ambiguity |  |  |  |  |  |
| AC-01 | External IDs master sync |  |  |  |  |  |
| AC-02 | MAIA item -> AutoCount code override |  |  |  |  |  |
| AC-03 | SO sync to AutoCount sandbox |  |  |  |  |  |
| AC-04 | AutoCount pro-forma/PDF handoff |  |  |  |  |  |
| AC-05 | Invoice sync after cutoff |  |  |  |  |  |
| AC-06 | Stock snapshot sync |  |  |  |  |  |
| AC-07 | Credit limit/exposure sync |  |  |  |  |  |
| AC-08 | HQ + branch contact sync |  |  |  |  |  |

## Issue Log

| Issue ID | Test ID | Found by | Environment | Document/customer/item | What happened | Expected behavior | Owner | Status | Retest notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Gareth / Fixguru | MAIA sandbox / AutoCount sandbox |  |  |  |  |  |  |

## Sign-Off

| Name | Role | Sign-off status | Date | Notes |
| --- | --- | --- | --- | --- |
| Gareth | PM run-through owner |  |  |  |
| Fixguru representative | Client tester |  |  |  |
| MAIA dev/support | Issue owner acknowledgement |  |  |  |

## See Also

- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru Retesting Feedback]]
- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/Fixguru 2nd UAT Backward Plan]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-15 Fixguru UAT Action Items]]
- [[03 - Clients/Active Cooking Clients/Fixguru/Meetings/2026-05-14 Fixguru UAT On-site - Transcript]]

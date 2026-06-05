---
owner: Gareth
status: draft
last_reviewed: 2026-04-08
client: Fixguru
uat_round: 2
---

# MAIA User Acceptance Test (UAT) — Fixguru
## Phase 2 · Custom Box Calculator & eInvoice

---

## Before You Start

**Status:** 🚧 Draft — pending feature completion
**UAT Period:** TBD
**Sign-Off Deadline:** TBD
**Go-Live (Phase 2):** TBD

| Feature | Dev Status | Ready for UAT |
| ------- | ---------- | ------------- |
| Custom Box Calculator (RSC Sheet) | In testing — bug fix in progress | ❌ Not yet |
| Custom Box Calculator (Diecut Sheet) | In testing — bug fix in progress | ❌ Not yet |
| eInvoice / AutoCount Sync | Dev in progress | ❌ Not yet |
| Historical Pricing & Discount % (web app) | In testing | ❌ Not yet |
| Historical Pricing via Chatbot | In testing | ❌ Not yet |

**Scope note:** This UAT covers Phase 2 features — the Custom Box Calculator (RSC and Diecut), eInvoice integration with AutoCount, Historical Pricing & Discount % (web app and chatbot). Phase 1 core MAIA is covered in the Phase 1 UAT form.

**Web App:** https://maia-fe-fixguru.vercel.app/login

---

## Your Login Details

| Name         | Role (Client)      | Role (MAIA)     | Email                          | Password |
| ------------ | ------------------ | --------------- | ------------------------------ | -------- |
| Xiao Ling    | Sales              | Sales User      | xiaoling@iamworldwide.com.my   | 123456   |
| Hayati       | Sales              | Sales User      | hayati@iamworldwide.com.my     | 123456   |
| Zuha         | Sales              | Sales User      | zuha@iamworldwide.com.my       | 123456   |
| Syahira      | Sales              | Sales User      | syahira@iamworldwide.com.my    | 123456   |
| Abishaah     | Finance Manager    | Finance Manager | abishaah@iamworldwide.com.my   | 123456   |
| Wendy Wang   | Finance Manager    | Finance Manager | wendy@iamworldwide.com.my      | 123456   |
| Nisa         | Finance Assistant  | Finance User    | nisa@iamworldwide.com.my       | 123456   |
| Marcus Lim   | Admin              | Admin           | marcus@iamworldwide.com.my     | 123456   |

---

## How to Use This Document

1. Work through each test **in order**.
2. For each step, do what is described and check that what you see matches the **"What you should see"** column.
3. After each test, tick your result and write any notes in the feedback box.
4. If something does not work as expected, mark it **Fail** and describe what happened.
5. If you are unsure or something is not loading, mark it **Issue** and contact Gareth.

**Result options:**
- ✅ **Pass** — Everything worked as described
- ❌ **Fail** — Something did not work correctly
- ⚠️ **Issue** — Could not complete the test (e.g., button missing, page not loading)

**Reporting issues:** If you find a bug or something is not working correctly, use **Jam** to record your screen and share the issue with the MAIA team.
→ [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

---

## Tests

---

### Group 1 — Custom Box Calculator

*Who tests this group: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

*The Custom Box Calculator appears inside the Quotation when adding items. It calculates the box price based on dimensions and material type using Fixguru's RSC and Diecut formulas.*

---

#### Test 1 — RSC Sheet Calculator

*Who tests this: **Xiao Ling** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| **— Step 1: Setup —** | | |
| 1 | Log in. Create a new **Quotation**. In the item section, click **Calculate Custom Box**. | The Fixguru Calculator modal opens. The stepper shows 4 steps: Setup → Board Quality → Production → Quote. Step 1 (Setup) is active. |
| 2 | Select **RSC** as the Calculator Type. | RSC tile is highlighted with an orange border. |
| 3 | Select a **Board Quality** — e.g. **A-flute (AF)**. | Selected tile is highlighted. |
| 4 | Enter **Length**, **Width**, and **Height** in mm (e.g. 200 / 500 / 100). | The **Ref Open Size (MM) (L × W)** field below auto-calculates and shows a value (e.g. "700 × 600"). The Continue button becomes active. |
| 5 | Click **Continue**. | Step 1 gets a checkmark. Step 2 (Board Quality) becomes active. |
| **— Step 2: Board Quality —** | | |
| 6 | Review the **Board Recipe**: set Outer Liner material + GSM, Medium material + GSM, Inner Liner material + GSM using the dropdowns and number inputs. | All three rows (Outer Liner, Medium, Inner Liner) show selected material and GSM. The system auto-calculates and shows **Board price (RM/m²)**, **LM guide**, and **Recommended qty (~pcs)** at the bottom of the section. |
| 7 | Click **Continue**. | Step 2 gets a checkmark. Step 3 (Production) becomes active. |
| **— Step 3: Production —** | | |
| 8 | Set the **Order quantity** using the +/- buttons or by typing directly (e.g. 150 PCS). | The progress bar updates. If quantity meets the LM guide, the bar turns green and shows *"Above board guide (X LM ≥ Y LM)"*. The live unit price (excl. SST) is shown at the bottom with an LM status pill. |
| 9 | Leave **Printing** and **Transport** toggles off. (Or enable them and verify the unit price updates accordingly.) | Toggles respond correctly. Unit price updates if toggles are changed. |
| 10 | Click **Continue**. | Step 3 gets a checkmark. Step 4 (Quote) becomes active. |
| **— Step 4: Quote —** | | |
| 11 | Review the **SKU** section: Model name is auto-generated (e.g. "RSC 200 x 500 x 100 AF"), Customer is pre-filled, Quote date shows today. Edit the Model name if needed. | Auto-generated model name matches the type, dimensions, and board quality selected. Customer name and date are correct. |
| 12 | Review the **Pricing**, **Impact**, and **Costs** sections: check Recommended price (toggle No SST / With SST), Gross Margin %, Gross Profit, and Costs breakdown. Then click **Add SKU**. | Item is added to the Quotation with the calculated price. The calculator modal closes. The new line item appears in the Quotation items list. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 2 — Diecut Sheet Calculator

*Who tests this: **Hayati** (Sales)*

| Step                          | What to do                                                                                                                                                                        | What you should see                                                                                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **— Step 1: Setup —**         |                                                                                                                                                                                   |                                                                                                                                                                           |
| 1                             | Log in. Create a new **Quotation**. In the item section, click **Calculate Custom Box**.                                                                                          | The Fixguru Calculator modal opens. The stepper shows 4 steps: Setup → Board Quality → Production → Quote. Step 1 (Setup) is active.                                      |
| 2                             | Select **Diecut** as the Calculator Type.                                                                                                                                         | Diecut tile is highlighted with an orange border.                                                                                                                         |
| 3                             | Select a **Board Quality** — e.g. **B-flute (BF)**.                                                                                                                               | Selected tile is highlighted.                                                                                                                                             |
| 4                             | Enter **Length**, **Width**, and **Height** in mm.                                                                                                                                | The **Ref Open Size (MM) (L × W)** field auto-calculates and shows a value. The Continue button becomes active.                                                           |
| 5                             | Click **Continue**.                                                                                                                                                               | Step 1 gets a checkmark. Step 2 (Board Quality) becomes active.                                                                                                           |
| **— Step 2: Board Quality —** |                                                                                                                                                                                   |                                                                                                                                                                           |
| 6                             | Review the **Board Recipe**: set Outer Liner material + GSM, Medium material + GSM, Inner Liner material + GSM using the dropdowns and number inputs.                             | All three rows show selected material and GSM. The system shows **Board price (RM/m²)**, **LM guide**, and **Recommended qty (~pcs)** at the bottom of the section.       |
| 7                             | Click **Continue**.                                                                                                                                                               | Step 2 gets a checkmark. Step 3 (Production) becomes active.                                                                                                              |
| **— Step 3: Production —**    |                                                                                                                                                                                   |                                                                                                                                                                           |
| 8                             | Set the **Order quantity** (e.g. 150 PCS).                                                                                                                                        | Progress bar updates. If quantity meets the LM guide, the bar turns green and shows *"Above board guide (X LM ≥ Y LM)"*. Live unit price (excl. SST) shown at the bottom. |
| 9                             | Leave **Printing** and **Transport** toggles off. (Or enable them and verify the unit price updates.)                                                                             | Toggles respond correctly. Unit price updates if toggles are changed.                                                                                                     |
| 10                            | Click **Continue**.                                                                                                                                                               | Step 3 gets a checkmark. Step 4 (Quote) becomes active.                                                                                                                   |
| **— Step 4: Quote —**         |                                                                                                                                                                                   |                                                                                                                                                                           |
| 11                            | Review the **SKU** section: Model name is auto-generated (e.g. "Diecut 300 x 400 x 200 BF"), can adjust it as well, Customer is pre-filled, Quote date shows today.               | Auto-generated model name matches the type, dimensions, and board quality selected. Customer name and date are correct.                                                   |
| 12                            | Review the **Pricing**, **Impact**, and **Costs** sections: check Recommended price/ adjust the price, Gross Margin %, Gross Profit, and Costs breakdown. Then click **Add SKU**. | Item is added to the Quotation with the calculated price. The calculator modal closes. The new line item appears in the Quotation items list.                             |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 3 — Calculator Price Flows into Quotation Correctly

*Who tests this: **Xiao Ling** (Sales) and **Marcus Lim** (Admin)*

*This checks that clicking Add SKU correctly populates the Quotation line item, and that the price carries through to submission and Sales Order.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Complete the calculator for an RSC or Diecut box (all 4 steps). On Step 4 (Quote), click **Add SKU**. | The calculator modal closes. A new line item is added to the Quotation with: **Item name** (matching the model name from Step 4), **Quantity** (matching the order quantity from Step 3), **Unit price** (matching the recommended price from Step 4), and **Description** populated with the box spec details (type, board quality, dimensions, board recipe). |
| 2 | Check the line item description field. | Spec details are present — e.g. box type (RSC/Diecut), board quality (AF/BF/DW), dimensions (L × W × H mm), Outer/Medium/Inner liner material and GSM. |
| 3 | Repeat Step 1 for a second item using different dimensions or type. | A second line item is added with its own item name, quantity, price, and description. Both items show independently correct data. |
| 4 | Save the Quotation. | Quotation saved in Draft. Item name, quantity, unit price, and description are all retained correctly for both line items. |
| 5 | **Marcus Lim** (Admin) submits the Quotation. | Quotation submitted. Status changes to **OPEN**. All line item data is unchanged. |
| 6 | Convert the Quotation to a **Sales Order**. | Sales Order created. Item name, quantity, unit price, and description carry over correctly from the Quotation. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 2 — eInvoice

*Who tests this group: **Abishaah** or **Wendy Wang** (Finance Manager)*

*🚧 This group is pending dev completion. Steps will be filled in once the eInvoice integration is ready for testing. Note: Invoice sync to AutoCount is handled automatically — this group covers eInvoice generation and submission only.*

---

#### Test 4 — eInvoice Push to AutoCount

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

*This test checks that when an Invoice is submitted in MAIA, the system correctly determines the e-invoice mode and pushes the invoice to AutoCount with the right flags. MAIA's scope ends at the push — what AutoCount does with it (submission to MyInvois/LHDN) is not tested here.*

**Part A — Individual e-Invoice (invoice above RM 10,000)**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in as Finance Manager. Open a submitted Sales Order with a total above **RM 10,000**. Generate an Invoice from it and submit. | Invoice is submitted. Status shows **UNPAID**. |
| 2 | Open the submitted Invoice. Look for the **e-Invoice** section or status field. | `E-Invoice Mode` shows **Individual**. `E-Invoice Status` shows **Queued** — this confirms MAIA has pushed the invoice to AutoCount. |

**Part A result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part B — Consolidated e-Invoice (invoice below RM 10,000)**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a submitted Sales Order with a total **below RM 10,000**. Generate an Invoice and submit. | Invoice is submitted. Status shows **UNPAID**. |
| 2 | Open the submitted Invoice. Check the e-Invoice status field. | `E-Invoice Mode` shows **Consolidated**. `E-Invoice Status` shows **Queued** — MAIA has pushed to AutoCount with the consolidated flag. |

**Part B result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 3 — Historical Pricing & Discount %

*Who tests this group: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

*Background: Fixguru's standard prices change frequently. The team needs to see what discount % was given to each customer, and when the standard price changes, the system should automatically suggest the new unit price based on the same discount — without the team having to calculate it manually.*

---

#### Test 5 — Edit Customer Discount % and Price in Customer Profile

*Who tests this: **Marcus Lim** (Admin)*

*This checks that the team can set and edit each customer's discount % and customer price from the Customer Profile page. Only one can be entered at a time — entering one automatically derives the other. This drives the Customer Price shown in the unit price dropdown when quoting.*

| Step | What to do                                                                                                                                               | What you should see                                                                                                                                                                       |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Log in. Go to a **Customer Profile** and open the **Price List** tab.                                                                                    | A table shows all items with columns: SKU, Item Name, Standard Price, Discount %, Customer Price, Min Price, Max Price, UOM. Standard Price, Min Price, Max Price, and UOM are read-only. |
| 2    | Find an item. Enter a value in the **Discount %** column (e.g. 10%).                                                                                     | The Customer Price column automatically shows the derived price in italic — e.g. Standard RM 10.00 at 10% = **RM 9.00**. The Discount % field shows your entered value in normal weight.  |
| 3    | Now enter a value in the **Customer Price** column for the same item.                                                                                    | The Discount % field clears your entered value and instead shows the derived discount % in italic. Only one field is stored at a time — entering Customer Price clears the Discount %.    |
| 4    | Save the changes.                                                                                                                                        | Customer Price is saved. The derived Discount % is shown in italic.                                                                                                                       |
| 5    | Find a different item. Enter a **Discount %** that would produce a price **below the Min Price** (e.g. 90% discount on an item with Min Price RM 10.00). | System blocks the save and shows an error: *"Discount produces price outside allowed range. Adjust discount or update min/max."*                                                          |
| 6    | Adjust the discount to a valid value and save.                                                                                                           | Changes are saved successfully.                                                                                                                                                           |
| 7    | Create a new **Quotation** for this customer and add the items edited above. Click the unit price field for each item.                                   | The dropdown shows a **Customer Price** option reflecting the values set in the Customer Profile — either the entered price or the price derived from the stored discount %.              |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 6 — Customer Price Auto-Derived When Standard Price Changes

*Who tests this: **Xiao Ling** (Sales)*

*This checks that when a customer's discount % is stored in the system, and the standard price has changed, MAIA automatically shows the correct new unit price — the team does not need to calculate it.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in. Create a new **Quotation** for a customer that has a stored discount % in their Customer Profile. Add an item. | Item is added to the Quotation. |
| 2 | Click the **unit price field** for the item. | The dropdown opens and shows a **Customer Price** option at the top with the discount % — e.g. *"-10% vs current Standard"*. |
| 3 | Check the Customer Price value. For example, if the customer's discount is 10% and the Standard Selling Price is RM 14.30, the Customer Price should show **RM 12.87**. | Price is correctly derived from the stored discount % and current Standard Selling Price. The team does not need to calculate this manually. |
| 4 | Select the Customer Price option and save the Quotation. | Unit price is set to the derived price. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 7 — Discount % Shown in Unit Price Dropdown

*Who tests this: **Hayati** (Sales)*

*This checks that all price options in the unit price dropdown show their discount % vs the current Standard Selling Price — so the team can compare options at a glance before selecting.*

| Step | What to do                                                                          | What you should see                                                                                                                                                            |
| ---- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Log in. Create a new **Quotation**. Add an item. Click the **unit price field**.    | The unit price dropdown opens showing available price options.                                                                                                                 |
| 2    | Check the **Customer Price** row.                                                   | Shows the price and a secondary line *"-X% vs current Standard"* — discount % calculated against today's Standard Selling Price. Customer Price appears first in the dropdown. |
| 3    | Check the **Latest Quotation Price** row.                                           | Shows the last quoted price for this customer and item, with a secondary line *"-X% vs Standard"*.                                                                             |
| 4    | Check the **Avg Lifetime Quotation Price** row.                                     | Shows the average price across all past quotations. No discount % line shown.                                                                                                  |
| 5    | Check the **Maximum Selling Price** and other price list rows.                      | Price is shown. No discount % secondary line shown for these rows.                                                                                                             |
| 6    | Add an item that has **no Standard Selling Price** set. Click the unit price field. | No discount % secondary line appears for any option in the dropdown.                                                                                                           |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 4 — Historical Pricing via Chatbot

*Who tests this group: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

*The MAIA chatbot can answer pricing questions about a customer's history. This group checks that the chatbot returns correct last price, average price, and quotation history when asked.*

---

#### Test 8 — Chatbot Returns Last Invoice Price for a Customer Item

*Who tests this: **Xiao Ling** (Sales)*

*This checks that when you ask the chatbot what the last price billed to a customer for a specific item was, it returns the correct invoice price with supporting detail.*

| Step | What to do                                                                                                                                                      | What you should see                                                                                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | In the MAIA chatbot, ask: *"What was the last price we sold [Item X] to [Customer Y]?"* (use a real item and customer that has at least one submitted Invoice). | Chatbot responds with a unit price (e.g. RM 9.00 / Box), the invoice date, and the invoice number.                                   |
| 2    | Cross-check the price against the actual Invoice in MAIA for that customer and item.                                                                            | Price, date, and document number match the most recent submitted Invoice.                                                            |
| 3    | Ask the same question for a customer that has **no invoice history** for that item.                                                                             | Chatbot responds that there is no prior invoice history for this customer and item — it does not return an error or a made-up price. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 9 — Chatbot Returns Average and Quotation History

*Who tests this: **Hayati** (Sales)*

*This checks that the chatbot can return the lifetime average price and recent quotation history for a customer and item.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In the MAIA chatbot, ask: *"What is the average price [Customer Y] has paid for [Item X]?"* (use a customer with multiple submitted Invoices). | Chatbot responds with an average price, the number of invoices counted, and the date range covered (e.g. "Average RM 8.75 / Box across 12 invoices, Jun 2025 – Mar 2026"). |
| 2 | Ask: *"Have we quoted [Item X] to [Customer Y] recently?"* | Chatbot responds with the last Quotation price, quotation date, and document number — or confirms no recent quotation exists. |
| 3 | Ask about a customer+item pair with **no history at all** (new customer or new item). | Chatbot responds that there is no prior history — does not return an error or a made-up value. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

## Results Summary

| Test #  | What was tested                                                         | Result (Pass / Fail / Issue) | Tested by | Date |
| ------- | ----------------------------------------------------------------------- | ---------------------------- | --------- | ---- |
| Test 1  | RSC Sheet Calculator                                                    |                              |           |      |
| Test 2  | Diecut Sheet Calculator                                                 |                              |           |      |
| Test 3  | Calculator price flows into Quotation and SO correctly                  |                              |           |      |
| Test 4A | eInvoice push to AutoCount — individual mode (> RM 10,000)              |                              |           |      |
| Test 4B | eInvoice push to AutoCount — consolidated mode (< RM 10,000)            |                              |           |      |
| Test 5  | Edit customer discount % and price in Customer Profile                  |                              |           |      |
| Test 6  | Customer price auto-derived from discount % when standard price changes |                              |           |      |
| Test 7  | Discount % shown in unit price dropdown                                 |                              |           |      |
| Test 8  | Chatbot — last invoice price for a customer item                        |                              |           |      |
| Test 9  | Chatbot — average price and quotation history                           |                              |           |      |

**Total: 9 tests (10 parts)**

| Pass | Fail | Issue |
|------|------|-------|
|      |      |       |

---

## Overall Feedback

**Any general comments about the calculator or eInvoice feature?**



**Any fields or calculations that were confusing or incorrect?**



---

## Sign-Off

By signing below, the Fixguru team confirms that Phase 2 UAT has been completed and the results above are accurate.

| Name | Role | Signature | Date |
| ---- | ---- | --------- | ---- |
|      |      |           |      |
|      |      |           |      |

**Overall outcome:**
- [ ] **Approved — Ready to go live**
- [ ] **Conditional — Go live with the following items to fix first:**

*Conditions:*


- [ ] **Not approved — Further fixes required before go live**

---

## See Also

- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/MAIA UAT Form - Fixguru - 2026-04]] — Phase 1 UAT
- [[03 - Clients/Active Cooking Clients/Fixguru/Client Overview]]
- [[Fixguru Timeline]]
- [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

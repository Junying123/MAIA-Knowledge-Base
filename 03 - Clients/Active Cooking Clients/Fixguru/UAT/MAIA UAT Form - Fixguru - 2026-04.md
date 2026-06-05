---
owner: Gareth
status: draft
last_reviewed: 2026-03-31
client: Fixguru
uat_round: 1
---

# MAIA User Acceptance Test (UAT) — Fixguru
## April 2026 · Full UAT

---

## Before You Start

**UAT Period:** 2 April 2026 – 9 April 2026
**Sign-Off Deadline:** 9 April 2026
**Go-Live (Core MAIA — Phase 1):** 16 April 2026

### UAT Timeline

| Date      | Milestone                                    | Who          |
| --------- | -------------------------------------------- | ------------ |
| 2 Apr     | UAT starts — work through all test groups    | Fixguru team |
| 2 Apr     | WhatsApp chatbot setup begins                | MAIA team    |
| 9 Apr     | All tests completed and signed off           | Fixguru team |
| 9–14 Apr  | UAT bug fixes (if any)                       | MAIA team    |
| 15–16 Apr | Product ready confirmation                   | MAIA team    |
| 16 Apr    | **Phase 1 Sign Off & Go-Live**               | All          |

**Scope note:** This UAT covers all MAIA features for Fixguru — chatbot order intake, document flow (QT → SO → Invoice → Payment), approval flows (min price, credit limit), delivery, inventory alerts, role permissions, Custom Box Calculator (RSC & Diecut), eInvoice / AutoCount sync, and Historical Pricing & Discount % (web app and chatbot).

**Web App:** https://maia-fe-fixguru.vercel.app/login
**Chatbot (during UAT):** Telegram — @maia_fixguru_bot *(scan the QR code provided)*
![[Pasted image 20260407144220.png|209]]
**Chatbot (after go-live):** WhatsApp (+6012‑491 2154)

## Your Login Details

| Name         | Role (Client)      | Role (MAIA)     | Email                          | Password |
| ------------ | ------------------ | --------------- | ------------------------------ | -------- |
| Xiao Ling    | Sales              | Sales User      | xiaoling@iamworldwide.com.my   | 123456   |
| Hayati       | Sales              | Sales User      | hayati@iamworldwide.com.my     | 123456   |
| Zuha         | Sales              | Sales User      | zuha@iamworldwide.com.my       | 123456   |
| Syahira      | Sales              | Sales User      | syahira@iamworldwide.com.my    | 123456   |
| Asrul        | Warehousing        | Logistics User  | asrul@iamworldwide.com.my      | 123456   |
| Fadzil       | Warehousing        | Logistics User  | fadzil@iamworldwide.com.my     | 123456   |
| Azizah       | Warehousing        | Logistics User  | azizah@iamworldwide.com.my     | 123456   |
| Abishaah     | Finance Manager    | Finance Manager | abishaah@iamworldwide.com.my   | 123456   |
| Wendy Wang   | Finance Manager    | Finance Manager | wendy@iamworldwide.com.my      | 123456   |
| Nisa         | Finance Assistant  | Finance User    | nisa@iamworldwide.com.my       | 123456   |
| Marcus Lim   | Admin              | Admin           | marcus@iamworldwide.com.my     | 123456   |
| Steven Gan   | Admin              | Admin           | steven@iamworldwide.com.my     | 123456   |
| Yvonne Choo  | Admin              | Admin           | yvonne@iamworldwide.com.my     | 123456   |
| Jennifer Gan | Admin              | Admin           | jennifer@iamworldwide.com.my   | 123456   |

**Note:** There is no Sales Manager or Logistics Manager role at Fixguru. Document submission responsibilities that would normally belong to those roles are handled by **Admin**.

---

## Role Permission Summary

Quick reference for Group 3 tests. Fixguru has no Sales Manager or Logistics Manager.

| Document / Feature      | Sales User | Warehousing (Logistics User) | Finance Manager | Finance Asst (Finance User) | Admin       |
| ----------------------- | ---------- | ---------------------------- | --------------- | --------------------------- | ----------- |
| Quotation               | Create     | —                            | Create          | Create                      | **Submit**  |
| Sales Order             | Create     | —                            | Create          | Create                      | **Submit**  |
| Invoice                 | View only  | —                            | **Submit**      | Create                      | **Submit**  |
| Payment / Receipt       | View only  | —                            | **Submit**      | **Submit**                  | **Submit**  |
| Credit Note             | View only  | —                            | **Submit**      | Create                      | —           |
| Delivery Note           | Create     | Create                       | Create          | Create                      | **Submit**  |
| Inventory / Pick List   | View only  | Create                       | View only       | View only                   | **Submit**  |
| Stock Reservation Entry | Create     | Create                       | **Submit**      | Create                      | **Submit**  |

*"Create" = Read / Write / Create but NOT submit. "Submit" = full access including submit. "—" = no access.*

⚠️ **Pick List note:** Since there is no Logistics Manager at Fixguru, only **Admin** can submit Pick Lists.

---

## How to Use This Document

1. Work through each test **in order** — some tests use data created in earlier steps.
2. For each step, do what is described and check that what you see matches the **"What you should see"** column.
3. After each test, tick your result and write any notes in the feedback box.
4. If something does not work as expected, mark it **Fail** and describe what happened.
5. If you are unsure or something is not loading, mark it **Issue** and contact Gareth.
6. Sign off at the end when you are done.

**About these test cases:** All tests are based on the agreed MAIA scope for Fixguru. If any step does not match how your business works, do not guess — contact Gareth directly and we will review the test case before you proceed.

**Result options:**
- ✅ **Pass** — Everything worked as described
- ❌ **Fail** — Something did not work correctly
- ⚠️ **Issue** — Could not complete the test (e.g., button missing, page not loading)

**Reporting issues:** If you find a bug or something is not working correctly, use **Jam** to record your screen and share the issue with the MAIA team. Jam works in Chrome, Edge, and Firefox.
→ [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

---

## Setup Checklist *(For MAIA team to complete before UAT starts)*

- [ ] All user accounts created and login details confirmed above
- [ ] Customer records loaded (at least 3 test customers with name and address)
- [ ] Product catalogue loaded (at least 5 products with descriptions and pricing)
- [ ] Minimum selling prices configured per product
- [ ] Stock quantities loaded (at least 1 product at zero stock, 1 at low-stock level)
- [ ] Low-stock threshold configured
- [ ] Delivery delay reminder threshold configured

---

## Tests

---

### Group 1 — End-to-End Workflow

*Work through tests in order — data created in earlier tests is used in later ones.*

---

#### Quotation

---

##### Test 1 — Send a Quotation via Chatbot (Text Message and Voice Note)

*Who tests this: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

*Test the chatbot twice — once by typing, once by voice note.*

**Part A — Text Message**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open **@maia_fixguru_bot** in Telegram using the QR code provided. | The chatbot replies and is ready to receive your message. |
| 2 | Type a quotation request like: *"Customer: [Customer Name]. Items: 10 units [Product A], 5 boxes [Product B]."* | Chatbot receives the message. |
| 3 | Wait a moment. | The chatbot shows the details it picked up — customer name, products, and quantities — and prepares a Quotation. |
| 4 | Check that the details are correct. | Customer name, product names, and quantities match what you typed. A Quotation is created. |

**Part A result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part B — Voice Note**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In the same Telegram chat, record a voice note. Say something like: *"Quote for [Customer Name] — 10 units of [Product A] and 5 boxes of [Product B]."* | Voice note is sent to the chatbot. |
| 2 | Wait a moment. | The chatbot transcribes your voice note and shows the details — customer name, products, and quantities — and prepares a Quotation. |
| 3 | Check that the details are correct. | Details match what you said. A Quotation is created. |

**Part B result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### Test 2 — Pricing and Stock Check (Chatbot)

*Continue from Test 1. Tests chatbot price and stock validation during quotation intake.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | After the chatbot shows the quotation details, proceed to the pricing step. | Chatbot asks you to confirm or enter the price for each item. |
| 2 | Enter a price **above** the minimum selling price for one item. | Price is accepted. No warning shown. |
| 3 | Enter a price **below** the minimum selling price for another item. For example, type `RM 1.00` for a product with a minimum of `RM 1.20`. | Chatbot rejects the price and says it is below the minimum selling price. It offers to set the price to the minimum allowed (e.g. `RM 1.20`) or lets you adjust the quantity or choose a different item. |
| 4 | Reply to accept the minimum price suggested by the chatbot. | Price is updated to the minimum. You can continue with the quotation. |
| 5 | Ask the chatbot for the available quantity of a product. For example, type *"What is the quantity of [Product]?"* | Chatbot replies with the available stock quantity for that product. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### Test 3 — Price Below Minimum Auto-Adjusts (Web App)

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit*

*Checks the min price guard on the web app — system blocks below-min input and auto-adjusts on both Quotation and SO.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Xiao Ling** (Sales) | Log in. Create a new **Quotation**. Add a product and enter a price **below** the minimum selling price. | The system blocks the input immediately and shows: *"Unit Price set is too low, auto adjusting to the closest allowed price range."* The price is automatically adjusted to the minimum. |
| 2 | **Xiao Ling** (Sales) | Check the price field after the auto-adjustment. | Price has been updated to the minimum allowed price. Save the Quotation. |
| 3 | **Marcus Lim** (Admin) | Open the Quotation and submit it. | Quotation submits successfully. Status changes to **OPEN**. |
| 4 | **Xiao Ling** (Sales) | Create a new **Sales Order**. Add a product and enter a price **below** the minimum. | The system blocks the input and shows: *"Unit Price set is too low, auto adjusting to the closest allowed price range."* Price is auto-adjusted to the minimum. |
| 5 | **Marcus Lim** (Admin) | Open the Sales Order and submit it. | Sales Order submits successfully. Status changes to **TO BILL**. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### 1.2 Quotation — Custom Item via Calculator

*Who tests this: **Xiao Ling** (Sales) and **Hayati** (Sales)*

*The Custom Box Calculator appears inside the Quotation when adding items. It calculates box price based on dimensions and material using Fixguru's RSC and Diecut formulas.*

---

###### Test 19 — RSC Sheet Calculator

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

###### Test 20 — Diecut Sheet Calculator

*Who tests this: **Hayati** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| **— Step 1: Setup —** | | |
| 1 | Log in. Create a new **Quotation**. In the item section, click **Calculate Custom Box**. | The Fixguru Calculator modal opens. The stepper shows 4 steps: Setup → Board Quality → Production → Quote. Step 1 (Setup) is active. |
| 2 | Select **Diecut** as the Calculator Type. | Diecut tile is highlighted with an orange border. |
| 3 | Select a **Board Quality** — e.g. **B-flute (BF)**. | Selected tile is highlighted. |
| 4 | Enter **Length**, **Width**, and **Height** in mm. | The **Ref Open Size (MM) (L × W)** field auto-calculates and shows a value. The Continue button becomes active. |
| 5 | Click **Continue**. | Step 1 gets a checkmark. Step 2 (Board Quality) becomes active. |
| **— Step 2: Board Quality —** | | |
| 6 | Review the **Board Recipe**: set Outer Liner material + GSM, Medium material + GSM, Inner Liner material + GSM using the dropdowns and number inputs. | All three rows show selected material and GSM. The system shows **Board price (RM/m²)**, **LM guide**, and **Recommended qty (~pcs)** at the bottom of the section. |
| 7 | Click **Continue**. | Step 2 gets a checkmark. Step 3 (Production) becomes active. |
| **— Step 3: Production —** | | |
| 8 | Set the **Order quantity** (e.g. 150 PCS). | Progress bar updates. If quantity meets the LM guide, the bar turns green and shows *"Above board guide (X LM ≥ Y LM)"*. Live unit price (excl. SST) shown at the bottom. |
| 9 | Leave **Printing** and **Transport** toggles off. (Or enable them and verify the unit price updates.) | Toggles respond correctly. Unit price updates if toggles are changed. |
| 10 | Click **Continue**. | Step 3 gets a checkmark. Step 4 (Quote) becomes active. |
| **— Step 4: Quote —** | | |
| 11 | Review the **SKU** section: Model name is auto-generated (e.g. "Diecut 300 x 400 x 200 BF"), Customer is pre-filled, Quote date shows today. Edit the Model name if needed. | Auto-generated model name matches the type, dimensions, and board quality selected. Customer name and date are correct. |
| 12 | Review the **Pricing**, **Impact**, and **Costs** sections: check Recommended price (toggle No SST / With SST), Gross Margin %, Gross Profit, and Costs breakdown. Then click **Add SKU**. | Item is added to the Quotation with the calculated price. The calculator modal closes. The new line item appears in the Quotation items list. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

###### Test 21 — Calculator Price Flows into Quotation Correctly

*Who tests this: **Xiao Ling** (Sales) and **Marcus Lim** (Admin)*

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

##### 1.3 Quotation — Item Historical Pricing (FE)

*Who tests this: **Marcus Lim** (Admin) for Test 23; any **Sales** user for Tests 24 & 25*

*Fixguru's standard prices change frequently. The team needs to see what discount % was given to each customer. When the standard price changes, the system suggests a new unit price based on the same discount — without manual calculation.*

---

###### Test 23 — Edit Customer Discount % and Price in Customer Profile

*Who tests this: **Marcus Lim** (Admin)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in. Go to a **Customer Profile** and open the **Price List** tab. | A table shows all items with columns: SKU, Item Name, Standard Price, Discount %, Customer Price, Min Price, Max Price, UOM. Standard Price, Min Price, Max Price, and UOM are read-only. |
| 2 | Find an item. Enter a value in the **Discount %** column (e.g. 10%). | The Customer Price column automatically shows the derived price in italic — e.g. Standard RM 10.00 at 10% = **RM 9.00**. |
| 3 | Now enter a value in the **Customer Price** column for the same item. | The Discount % field clears your entered value and instead shows the derived discount % in italic. Only one field is stored at a time. |
| 4 | Save the changes. | Customer Price is saved. The derived Discount % is shown in italic. |
| 5 | Find a different item. Enter a **Discount %** that would produce a price **below the Min Price** (e.g. 90% discount on an item with Min Price RM 10.00). | System blocks the save and shows an error: *"Discount produces price outside allowed range. Adjust discount or update min/max."* |
| 6 | Adjust the discount to a valid value and save. | Changes are saved successfully. |
| 7 | Create a new **Quotation** for this customer and add the items edited above. Click the unit price field for each item. | The dropdown shows a **Customer Price** option reflecting the values set in the Customer Profile — either the entered price or the price derived from the stored discount %. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

###### Test 24 — Customer Price Auto-Derived When Standard Price Changes

*Who tests this: **Xiao Ling** (Sales)*

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

###### Test 25 — Discount % Shown in Unit Price Dropdown

*Who tests this: **Hayati** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in. Create a new **Quotation**. Add an item. Click the **unit price field**. | The unit price dropdown opens showing available price options. |
| 2 | Check the **Customer Price** row. | Shows the price and a secondary line *"-X% vs current Standard"* — discount % calculated against today's Standard Selling Price. Customer Price appears first in the dropdown. |
| 3 | Check the **Latest Quotation Price** row. | Shows the last quoted price for this customer and item, with a secondary line *"-X% vs Standard"*. |
| 4 | Check the **Avg Lifetime Quotation Price** row. | Shows the average price across all past quotations. No discount % line shown. |
| 5 | Check the **Maximum Selling Price** and other price list rows. | Price is shown. No discount % secondary line shown for these rows. |
| 6 | Add an item that has **no Standard Selling Price** set. Click the unit price field. | No discount % secondary line appears for any option in the dropdown. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### 1.3.4 Quotation — Historical Pricing via Chatbot

*Who tests this: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

*The MAIA chatbot can answer pricing questions about a customer's history. This group checks that the chatbot returns correct last price, average price, and quotation history when asked.*

---

###### Test 26 — Chatbot Returns Last Invoice Price for a Customer Item

*Who tests this: **Xiao Ling** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In the MAIA chatbot, ask: *"What was the last price we sold [Item X] to [Customer Y]?"* (use a real item and customer that has at least one submitted Invoice). | Chatbot responds with a unit price (e.g. RM 9.00 / Box), the invoice date, and the invoice number. |
| 2 | Cross-check the price against the actual Invoice in MAIA for that customer and item. | Price, date, and document number match the most recent submitted Invoice. |
| 3 | Ask the same question for a customer that has **no invoice history** for that item. | Chatbot responds that there is no prior invoice history for this customer and item — it does not return an error or a made-up price. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

###### Test 27 — Chatbot Returns Average and Quotation History

*Who tests this: **Hayati** (Sales)*

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

#### Sales Order + Proforma

---

##### Test 4 — Credit Limit Check on Sales Order Submission

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit; **Steven Gan** (Admin) to approve*

*Tests (A) system blocks SO submission at credit limit and (B) Admin can approve to override.*

⚠️ **Note:** Use **ZARA BIOTECH SDN BHD** — credit limit pre-set to 80% usage for this account.

**Part A — Credit Limit Block**

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Xiao Ling** (Sales) | Log in. Create a new **Sales Order** for **ZARA BIOTECH SDN BHD**. Fill in the items and save. | Sales Order is saved in Draft. |
| 2 | **Marcus Lim** (Admin) | Open the Sales Order and try to **submit** it. | The system checks the customer's credit usage. An error message appears — the customer has reached or exceeded their credit limit. Submission is blocked. |
| 3 | **Marcus Lim** (Admin) | Note the error message shown. | Error message is clear and mentions the credit limit issue. |

**Part A result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part B — Management Approval to Override**

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 4 | **Marcus Lim** (Admin) | After the block in Part A, look for an option to **request approval** or escalate the Sales Order for management review. | An approval request is sent or the SO enters a pending approval state. |
| 5 | **Steven Gan** (Admin) | Log in. Check for a pending approval notification or approval queue. Open the flagged Sales Order. | The Sales Order is visible in the approval queue with a note about the credit limit. |
| 6 | **Steven Gan** (Admin) | **Approve** the Sales Order. | Sales Order is approved and status changes to **TO BILL**. The credit limit override is recorded. |

**Part B result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### Test 7 — Create and Manage Sales Orders on the Web App

*Who tests this: **Hayati** (Sales) and **Abishaah** (Finance Manager) for creation; **Marcus Lim** (Admin) for submission*

*Checks that Sales and Finance can create SOs but must tag Admin to submit.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Hayati** (Sales) | Log in. Create a new Sales Order and save it. | Sales Order saved with status **Draft**. |
| 2 | **Hayati** (Sales) | Try to **submit** the Sales Order. | 🚫 Submit button is not available — only Admin can submit Sales Orders. |
| 3 | **Hayati** (Sales) | In the **sidebar comment**, tag **@Marcus Lim** (Admin) to notify him to submit. | Marcus Lim receives a notification that a Sales Order is ready for submission. |
| 4 | **Marcus Lim** (Admin) | Open the Draft Sales Order and click **Submit**. | Sales Order status changes to **TO BILL**. |
| 5 | **Abishaah** (Finance Manager) | Log in. Create a new Sales Order and save it. | Sales Order saved with status **Draft**. Finance Manager can create. |
| 6 | **Abishaah** (Finance Manager) | Try to **submit** the Sales Order. | 🚫 Submit button is not available — only Admin can submit Sales Orders. |
| 7 | **Abishaah** (Finance Manager) | In the **sidebar comment**, tag **@Marcus Lim** (Admin) to notify him to submit. | Marcus Lim receives a notification that a Sales Order is ready for submission. |
| 8 | **Marcus Lim** (Admin) | Open the Draft Sales Order and click **Submit**. | Sales Order status changes to **TO BILL**. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Delivery

---

##### Test 8 — Full Delivery Flow (SO → Picklist → DO → Mark as Delivered)

*Who tests this: **Asrul** (Warehousing) for creation; **Marcus Lim** (Admin) for submissions and marking delivery*

*Only Admin can submit Picking Lists and Delivery Orders at Fixguru.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Marcus Lim** (Admin) | Open a submitted **Sales Order**. | Sales Order is visible with status **TO BILL**. |
| 2 | **Asrul** (Warehousing) | From the Sales Order, create a **Picking List** and save it. | Picking List is created and saved in Draft. Shows all items and quantities to pick. |
| 3 | **Marcus Lim** (Admin) | Open the Draft Picking List and click **Submit**. | Picking List is submitted. |
| 4 | **Asrul** (Warehousing) | From the Sales Order, create a **Delivery Order (DO)** and save it. | Delivery Order is created and saved in Draft. Shows customer address, products, quantities, and a DO reference. |
| 5 | **Asrul** (Warehousing) | Try to **submit** the Delivery Order. | 🚫 Submit button is not available — only Admin can submit Delivery Orders. |
| 6 | **Marcus Lim** (Admin) | Open the Draft Delivery Order and click **Submit**. | Delivery Order status changes to **To Schedule**. |
| 7 | **Marcus Lim** (Admin) | On the submitted Delivery Order, click **Actions → Mark as Delivered**. | Delivery Order status changes to **Delivered**. Delivery is recorded as completed. |
| 8 | Any user | Download the Picking List and Delivery Order as PDFs. | Both documents download successfully as PDFs. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### Test 10 — Delivery Delay Reminder

*Who tests this: **Asrul** (Warehousing)*

*System sends a notification when an SO has been submitted but no DO created within 5 hours.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in as **Asrul** (Warehousing). Check the notification area. | A notification is shown — flagging that a Sales Order has no Delivery Order created after 5 hours. The notification shows the Sales Order reference. |
| 2 | Check the details of the notification. | The Sales Order reference and customer name are correct. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Invoice + eInvoice

---

##### Test 5 — Generate Documents (Quotation → Sales Order → Proforma → Invoice)

*Coordinate across roles — see who does each step.*

**Role note:** Sales and Finance can **create** but not **submit**. Only **Admin** submits Quotations and Sales Orders. **Finance Manager** or **Admin** submits Invoices.

**Proforma Invoice note:** Not a separate document — it's a PDF export from the Sales Order. Used for cash-in-advance customers only.

| Step | Who | What to do | What you should see |
| ---- | ---- | ---------- | ------------------- |
| 1 | **Xiao Ling** (Sales) | Log in. Create a **Quotation** and save it. | Quotation is created and saved. Status shows **Draft**. |
| 2 | **Marcus Lim** (Admin) | Open the Draft Quotation and click **Submit**. | Quotation status changes to **OPEN**. |
| 3 | **Xiao Ling** (Sales) or **Abishaah** (Finance Manager) | Open the submitted Quotation and convert it to a **Sales Order**. | Quotation status changes to **ORDERED**. New Sales Order created with status **Draft**. |
| 4 | **Marcus Lim** (Admin) | Open the Draft Sales Order and click **Submit**. | Sales Order status changes to **TO BILL**. |
| 5 | **Abishaah** or **Wendy Wang** (Finance Manager) | Open the submitted Sales Order. Click **Generate PDF** and select **Proforma Invoice**. Download the PDF. | A Proforma Invoice PDF is downloaded. No separate record is created in the system. |
| 6 | **Abishaah** or **Wendy Wang** (Finance Manager) | From the Sales Order, generate the final **Invoice** and click **Submit**. | An Invoice is created and submitted. Status shows **UNPAID**. |
| 7 | Any user | Download the Quotation, Sales Order, and Invoice each as PDF. | All three documents download successfully as PDFs. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### eInvoice — AutoCount Push

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

*MAIA determines the e-invoice mode and pushes to AutoCount. MAIA's scope ends at the push — AutoCount's submission to MyInvois/LHDN is not tested here.*

---

###### Test 22 — eInvoice Push to AutoCount

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

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

**Tested by:**
**Date:**

**Notes:**


---

#### Post Invoice

---

##### Test 6 — Create a Credit Note and Debit Note

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open an existing submitted **Invoice**. | Invoice record is visible. |
| 2 | Look for the option to create a **Credit Note** and click it. | Credit Note creation screen appears. |
| 3 | Fill in the amount, adjust the items, then confirm and submit. | Credit Note is created and submitted. It references the original Invoice and shows the credited amount. |
| 4 | Open the same or a different Invoice. Look for the option to create a **Debit Note** and click it. | Debit Note creation screen appears. |
| 5 | Fill in the amount & adjust the items, then confirm. | Debit Note is created and saved. It references the original Invoice and shows the debited amount. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Cross Workflow

---

##### Test 9 — Stock Alerts (Out of Stock and Low Stock)

*Who tests this: **Asrul** (Warehousing) and **Xiao Ling** (Sales) — both should see the alerts*

**Part A — Out of Stock Alert**

⚠️ **Setup:** Use a product with exactly 100 units available. Submit a Sales Order that uses all 100 — stock hits zero and triggers the out-of-stock notification.

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create and submit a Sales Order that uses up all available stock of a product (e.g. 100 units). | Sales Order is submitted successfully. |
| 2 | Log in as **Asrul** (Warehousing). Check the notification area. | An Out-of-Stock alert is shown for that product — stock is now at zero. |
| 3 | Log out. Log in as **Xiao Ling** (Sales). Check the notification area. | The same Out-of-Stock alert is visible to Sales users as well. |

**Part B — Low Stock Alert**

⚠️ **Setup:** In the Item module, set a safety quantity (e.g. 50). Ensure available quantity drops below it.

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in as **Asrul** (Warehousing). Go to the **Item module**. Find a product and set its **safety quantity** (e.g. 50 units). | Safety quantity is saved for that product. |
| 2 | Ensure the available quantity for that product is below the safety quantity. | Available quantity is lower than the safety quantity. |
| 3 | Check the notification area. | A Low-Stock alert is shown for that product. |
| 4 | Log out. Log in as **Xiao Ling** (Sales). Check the notification area. | The same Low-Stock alert is visible to Sales users as well. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### Test 11 — Create and Submit a Stock Reservation Entry

*Who tests this: **Asrul** (Warehousing) for creation; **Marcus Lim** or **Abishaah** (Admin or Finance Manager) for submission*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Asrul** (Warehousing) | Log in. Navigate to the **Stock Reservation Entry** section. Create a new entry — select a product and quantity to reserve. Save it. | Stock Reservation Entry is created and saved in Draft. Shows product name, quantity, and reference. |
| 2 | **Asrul** (Warehousing) | Try to **submit** the Stock Reservation Entry. | 🚫 Submit button is not available — Warehousing can create but not submit. |
| 3 | **Marcus Lim** (Admin) | Log in. Open the Draft Stock Reservation Entry and click **Submit**. | Stock Reservation Entry is submitted. The reserved quantity is reflected in stock. |
| 4 | **Abishaah** (Finance Manager) | Log in. Create a second Stock Reservation Entry and click **Submit**. | Stock Reservation Entry is submitted. Finance Manager also has submit access. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 2 — Logging In

---

#### Test 12 — All Users Can Log In

*Who tests this: **Everyone** — all 14 users log in with their own account*

| Step | What to do                                                                            | What you should see                                            |
| ---- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1    | Open https://maia-fe-fixguru.vercel.app/login in **Google Chrome** on a laptop or desktop. | The MAIA login page loads.                                |
| 2    | Each person logs in using their **email and password** from the table above.          | Login is successful. Your workspace and dashboard are visible. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 3 — What Each Person Can and Cannot Do

*Each person tests their own account. Check that you can do the things listed, and that you are blocked from things outside your role.*

---

#### Test 13 — Sales Access Check

*Who tests this: **Zuha** or **Syahira** (Sales — different person from Group 1)*

| Step | What to do                                                | What you should see                                                                     |
| ---- | --------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 1    | Try to **create** a Quotation and save it.                | ✅ You can create and edit Quotations. Saved with status **Draft**.                     |
| 2    | Try to **submit** the Quotation.                          | 🚫 Submit button is not available — only Admin can submit Quotations.                   |
| 3    | Try to **create** a Sales Order and save it.              | ✅ You can create and edit Sales Orders. Saved with status **Draft**.                   |
| 4    | Try to **submit** the Sales Order.                        | 🚫 Submit button is not available — only Admin can submit Sales Orders.                 |
| 5    | Try to **create** a Delivery Order and save it.           | ✅ You can create and edit Delivery Orders. Saved with status **Draft**.                |
| 6    | Try to **submit** the Delivery Order.                     | 🚫 Submit button is not available — only Admin can submit Delivery Orders.              |
| 7    | Try to view an **Invoice**.                               | ✅ You can view Invoices — read only. No create or edit button.                         |
| 8    | Try to view **Inventory** (stock levels).                 | ✅ Inventory page is accessible — read only. No create or edit button.                 |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 14 — Warehousing Access Check

*Who tests this: **Fadzil** or **Azizah** (Warehousing — different person from Test 8)*

| Step | What to do                                                                   | What you should see                                                                           |
| ---- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 1    | Try to **create** an inventory record (e.g., Stock Entry) and save it.       | ✅ You can create and edit inventory records. Saved with status **Draft**.                    |
| 2    | Try to **submit** the inventory record.                                      | 🚫 Submit button is not available — only Admin can submit inventory records at Fixguru.       |
| 3    | Try to **create** a Picking List and save it.                                | ✅ You can create a Picking List. Saved with status **Draft**.                                |
| 4    | Try to **submit** the Picking List.                                          | 🚫 Submit button is not available — only Admin can submit Picking Lists at Fixguru.           |
| 5    | Try to **create** a Delivery Order and save it.                              | ✅ You can create and edit Delivery Orders. Saved with status **Draft**.                      |
| 6    | Try to **submit** the Delivery Order.                                        | 🚫 Submit button is not available — only Admin can submit Delivery Orders.                    |
| 7    | Try to **create** a **Stock Reservation Entry** and save it.                 | ✅ You can create a Stock Reservation Entry. Saved with status **Draft**.                     |
| 8    | Try to **submit** the Stock Reservation Entry.                               | 🚫 Submit button is not available — only Admin or Finance Manager can submit.                 |
| 9    | Try to open a **Quotation** or **Sales Order**.                              | 🚫 Not accessible — Warehousing has no access to Quotations or Sales Orders.                 |
| 10   | Try to view an **Invoice** or **Payment**.                                   | 🚫 Not accessible — Warehousing has no access to Invoices or Payments.                       |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 15 — Finance Manager Access Check

*Who tests this: **Wendy Wang** (Finance Manager — use the other Finance Manager from Test 6)*

| Step | What to do                                                                   | What you should see                                                                                 |
| ---- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1    | Try to create and **submit** an **Invoice**.                                 | ✅ You can create, edit, and submit Invoices. After submit, status shows **UNPAID**.                |
| 2    | Try to create and **submit** a **Payment / Receipt**.                        | ✅ You can create and submit Receipts. Invoice moves to **PAID** when fully paid.                   |
| 3    | Try to create and **submit** a **Credit Note**.                              | ✅ You can create, edit, and submit Credit Notes.                                                   |
| 4    | Try to **create** a Sales Order and save it.                                 | ✅ You can create and edit Sales Orders. Saved with status **Draft**.                               |
| 5    | Try to **submit** the Sales Order.                                           | 🚫 Submit button is not available — only Admin can submit Sales Orders.                             |
| 6    | Try to **create** a Delivery Order and save it.                              | ✅ You can create and edit Delivery Orders. Saved with status **Draft**.                            |
| 7    | Try to **submit** the Delivery Order.                                        | 🚫 Submit button is not available — only Admin can submit Delivery Orders.                          |
| 8    | Try to view **Inventory** (stock levels).                                    | ✅ Inventory page is accessible — read only. No create or edit button.                             |
| 9    | Open a Draft **Stock Reservation Entry** and click **Submit**.               | ✅ You can submit Stock Reservation Entries. Finance Manager has submit access.                     |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 16 — Finance Assistant Access Check

*Who tests this: **Nisa** (Finance Assistant / Finance User)*

| Step | What to do                                                      | What you should see                                                                        |
| ---- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1    | Try to **create** an Invoice and save it.                       | ✅ You can create and edit Invoices. Saved with status **Draft**.                          |
| 2    | Try to **submit** the Invoice.                                  | 🚫 Submit button is not available — only Finance Manager or Admin can submit Invoices.     |
| 3    | Try to create and **submit** a **Payment / Receipt**.           | ✅ You can create and submit Receipts. Finance Assistant has submit access on Payments.    |
| 4    | Try to **create** a Credit Note and save it.                    | ✅ You can create and edit Credit Notes. Saved with status **Draft**.                      |
| 5    | Try to **submit** the Credit Note.                              | 🚫 Submit button is not available — only Finance Manager can submit Credit Notes.          |
| 6    | Try to **create** a Sales Order and save it.                    | ✅ You can create and edit Sales Orders. Saved with status **Draft**.                      |
| 7    | Try to **submit** the Sales Order.                              | 🚫 Submit button is not available — only Admin can submit Sales Orders.                    |
| 8    | Try to view **Inventory** (stock levels).                       | ✅ Inventory page is accessible — read only.                                               |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 17 — Admin Access Check

*Who tests this: **Steven Gan** or **Yvonne Choo** (Admin — different person from other tests)*

| Step | What to do                                                                                 | What you should see                                                              |
| ---- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| 1    | Try to create and **submit** a **Quotation**.                                              | ✅ Full access — you can create, edit, and submit Quotations.                    |
| 2    | Try to create and **submit** a **Sales Order**.                                            | ✅ Full access — you can create, edit, and submit Sales Orders.                  |
| 3    | Open a Draft **Delivery Order** (created by another user) and **submit** it.              | ✅ You can submit Delivery Orders. Admin is the only role that can.               |
| 4    | Open a Draft **Picking List** and **submit** it.                                           | ✅ You can submit Picking Lists. Admin is the only role that can at Fixguru.     |
| 5    | Try to create and **submit** an **Invoice**.                                               | ✅ Full access — you can create, edit, and submit Invoices.                      |
| 6    | Try to create and **submit** a **Payment / Receipt**.                                      | ✅ Full access — you can create and submit Receipts.                             |
| 7    | Try to create and **submit** an **Inventory** record (e.g., Stock Entry).                 | ✅ Full access — you can manage and submit inventory records.                    |
| 8    | Open a Draft **Stock Reservation Entry** (created by Warehousing) and **submit** it.      | ✅ Full access — Admin can submit Stock Reservation Entries.                     |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 18 — Role Approval Flow

*Who tests this: **All roles** — coordinate as a group across all steps*

**Part A — Quotation (Sales or Finance creates; Admin submits)**

| Step | Who                              | What to do                                                    | What you should see                                                        |
| ---- | -------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1    | **Syahira** (Sales)              | Create a new Quotation and save it.                           | Quotation saved. Status shows **Draft**. Syahira cannot submit.            |
| 2    | **Jennifer Gan** (Admin)         | Open the Draft Quotation. Click Submit.                       | Quotation status changes to **OPEN**. Only Admin can submit.               |

**Part B — Sales Order (Sales or Finance creates; Admin submits)**

| Step | Who                              | What to do                                                    | What you should see                                                        |
| ---- | -------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 3    | **Zuha** (Sales)                 | Create a new Sales Order — leave it in **Draft**.             | Sales Order saved. Status shows **Draft**. Zuha cannot submit.             |
| 4    | **Jennifer Gan** (Admin)         | Open the Draft Sales Order. Click Submit.                     | Sales Order status changes to **TO BILL**.                                 |
| 5    | **Nisa** (Finance Assistant)     | Create a second Sales Order — leave it in **Draft**.          | Sales Order saved. Finance Assistant can create.                           |
| 6    | **Yvonne Choo** (Admin)          | Open the second Draft Sales Order. Click Submit.              | Sales Order status changes to **TO BILL**.                                 |

**Part C — Delivery Order (any role creates; Admin submits)**

| Step | Who                              | What to do                                                    | What you should see                                                        |
| ---- | -------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 7    | **Fadzil** (Warehousing)         | Create a Delivery Order from a **TO BILL** Sales Order.       | Delivery Order saved in Draft. Warehousing can create.                     |
| 8    | **Yvonne Choo** (Admin)          | Open the Draft Delivery Order. Click Submit.                  | Delivery Order submitted. Admin is the only role that can submit.          |

**Part D — Pick List (Admin submits — no Logistics Manager at Fixguru)**

| Step | Who                              | What to do                                                    | What you should see                                                        |
| ---- | -------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 9    | **Asrul** (Warehousing)          | Create a Pick List from the **Sales Order** and save it.      | Pick List saved in Draft. Warehousing can create.                          |
| 10   | **Steven Gan** (Admin)           | Open the Draft Pick List. Click Submit.                       | Pick List submitted. Admin submits Pick Lists at Fixguru.                  |

**Part E — Invoice (Finance Manager submits)**

| Step | Who                              | What to do                                                    | What you should see                                                        |
| ---- | -------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 11   | **Nisa** (Finance Assistant)     | Open a **TO BILL** Sales Order. Create an Invoice and save it. | Invoice saved in Draft. Finance Assistant can create but not submit.      |
| 12   | **Wendy Wang** (Finance Manager) | Open the Draft Invoice. Click Submit.                         | Invoice status changes to **UNPAID**. Finance Manager can submit Invoices. |

**Part F — Payment / Receipt (Finance Assistant or Finance Manager submits)**

| Step | Who                              | What to do                                                    | What you should see                                                             |
| ---- | -------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 13   | **Nisa** (Finance Assistant)     | Create a Receipt against the **UNPAID** Invoice. Submit it.  | Receipt submitted. Invoice status changes to **PAID**. Finance Assistant can submit Payments. |
| 14   | **Nisa** (Finance Assistant)     | Create a second Receipt against a different **UNPAID** Invoice — leave it in **Draft**. | Receipt saved in Draft. Invoice still shows **UNPAID**. |
| 15   | **Wendy Wang** (Finance Manager) | Open the Draft Receipt. Click Submit.                         | Receipt submitted. Finance Manager can also submit Payments.                    |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:** (coordinate across team)
**Date:**

**Notes (note the step number if any step failed):**


---

## Results Summary

| Test # | What was tested                                                           | Result (Pass / Fail / Issue) | Tested by | Date |
| ------ | ------------------------------------------------------------------------- | ---------------------------- | --------- | ---- |
| Test 1   | Send quotation by text message and voice note                            |                              |           |      |
| Test 2   | Pricing and stock check (chatbot)                                        |                              |           |      |
| Test 3   | Price below minimum auto-adjusts (web app)                               |                              |           |      |
| Test 4A  | Credit limit block on Sales Order submission                             |                              |           |      |
| Test 4B  | Management approval to override credit limit block                       |                              |           |      |
| Test 5   | Generate documents (Quotation → SO → Invoice; Proforma as PDF export)    |                              |           |      |
| Test 6   | Create Credit Note and Debit Note (Finance Manager)                      |                              |           |      |
| Test 7   | Create and manage Sales Orders (Sales/Finance create; Admin submits)     |                              |           |      |
| Test 8   | Full delivery flow (SO → Picklist → DO → Invoice → Mark as Delivered)    |                              |           |      |
| Test 9   | Stock alerts (Out of Stock / Low Stock)                                  |                              |           |      |
| Test 10  | Delivery delay reminder                                                  |                              |           |      |
| Test 11  | Create and submit Stock Reservation Entry                                |                              |           |      |
| Test 12  | All users can log in                                                     |                              |           |      |
| Test 13  | Sales (Zuha / Syahira) — access check                                    |                              |           |      |
| Test 14  | Warehousing (Fadzil / Azizah) — access check                             |                              |           |      |
| Test 15  | Finance Manager (Wendy Wang) — access check                              |                              |           |      |
| Test 16  | Finance Assistant / Nisa — access check                                  |                              |           |      |
| Test 17  | Admin (Steven Gan / Yvonne Choo) — access check                          |                              |           |      |
| Test 18  | Role approval flow (QT → SO → DO → PL → INV → RCT)                      |                              |           |      |
| Test 19  | RSC Sheet Calculator — full 4-step flow                                  |                              |           |      |
| Test 20  | Diecut Sheet Calculator — full 4-step flow                               |                              |           |      |
| Test 21  | Calculator price flows into Quotation and SO correctly                   |                              |           |      |
| Test 22A | eInvoice push to AutoCount — individual mode (> RM 10,000)              |                              |           |      |
| Test 22B | eInvoice push to AutoCount — consolidated mode (< RM 10,000)            |                              |           |      |
| Test 23  | Edit customer discount % and price in Customer Profile                   |                              |           |      |
| Test 24  | Customer price auto-derived from discount % when standard price changes  |                              |           |      |
| Test 25  | Discount % shown in unit price dropdown                                  |                              |           |      |
| Test 26  | Chatbot — last invoice price for a customer item                         |                              |           |      |
| Test 27  | Chatbot — average price and quotation history                            |                              |           |      |

**Total: 27 tests (29 parts)**

| Pass | Fail | Issue |
|------|------|-------|
|      |      |       |

---

## Overall Feedback

**Any general comments about the system?**



**Any features that were confusing or difficult to use?**



---

## Sign-Off

By signing below, the Fixguru team confirms that UAT has been completed and the results above are accurate.

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

- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/MAIA UAT Form - Fixguru - Phase 2 - Draft]] — Phase 2 source draft
- [[03 - Clients/Active Cooking Clients/Fixguru/Client Overview]]
- [[Fixguru Timeline]]
- [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)
- [[03 - Clients/Active Cooking Clients/Fixguru/Config Overlay]]
- [[MAIA_Role_Permission_Fixguru_Completed.csv]]

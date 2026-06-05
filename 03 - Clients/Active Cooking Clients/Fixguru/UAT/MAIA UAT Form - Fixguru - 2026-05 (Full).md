---
owner: Gareth
status: draft
last_reviewed: 2026-03-31
client: Fixguru
uat_round: 1
---

# MAIA User Acceptance Test (UAT) — Fixguru (Full)
## May 2026 · Full UAT

---

## Before You Start

**UAT Period:** 14 May 2026 (Full E2E)
**Sign-Off Deadline:** 3 June 2026
**Go-Live (Core MAIA — Phase 1):** 3 June 2026

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

Quick reference for role permission tests. Fixguru has no Sales Manager or Logistics Manager.

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

### E2E Workflow Index (Use This Sequence During Session)

Use this as the high-level UAT content index (main section → subsection → sub-subsection).  
Format per line: `ID. Title [Mode]`

#### 1. Quotation Phase
- `1.1 Quotation Creation via Web App / Chatbot (Text + Voice) [FE + Chatbot]`
- `1.2 Quotation: Custom Item via Calculator [FE]`
- `1.2.1 RSC Calculator Full Flow [FE]`
- `1.2.2 Diecut Calculator Full Flow [FE]`
- `1.2.3 Calculator Price Flows into Quotation Correctly [FE]`
- `1.3 Quotation: Item Historical Pricing [FE]`
- `1.3.1 Edit Customer Discount % and Price (Optional) [FE]`
- `1.3.2 Unit Price Dropdown: Last Quotation Price, Discount %, and History Tooltip (Optional) [FE]`
- `1.3.3 Chatbot Quotation History: Last Price + Line Item Discount [Chatbot]`
- `1.4 Price and Stock Check [Chatbot]`
- `1.5 Quotation Approval Flow [FE]`
- `1.5.1 Price Below Minimum Auto-Adjusts [FE]`
- `1.5.2 Generate Quotation PDF [FE + Chatbot]`

#### 2. Sales Order + Proforma Phase
- `2.1 Create and Manage Sales Orders [FE + Chatbot]`
- `2.2 Credit Limit Block on SO Submission [FE + Chatbot]`
- `2.3 Management Approval Override for Credit Limit [FE + Chatbot]`
- `2.4 Proforma Invoice PDF Generation [FE + Chatbot]`

#### 3. Delivery Phase
- `3.1 Create Delivery Order and Mark as Delivered [FE + Chatbot]`
- `3.4 Stock Alerts (Out of Stock and Low Stock) [FE + Chatbot]`
- `3.3 Delivery Delay Reminder [Chatbot / FE]`
- `3.2 Create and Submit a Pick List [FE]`

#### 4. Invoice Phase
- `4.1 Submit Invoice and Generate PDF [FE + Chatbot]`
- `4.2 eInvoice / AutoCount Sync [FE]`
- `4.3 Receipt / Record Payment [FE + Chatbot]`

#### 5. Post-Invoice Adjustment + Payment Phase
- `5.1 Create a Credit Note and Debit Note [FE + Chatbot]`

#### 6. Cross-Workflow Control Layer
- `6.1 All Users Can Log In [FE]`
- `6.2 Sales Access Check [FE]`
- `6.3 Warehousing Access Check [FE]`
- `6.4 Finance Manager Access Check [FE]`
- `6.5 Finance Assistant Access Check [FE]`
- `6.6 Admin Access Check [FE]`
- `6.7 Role Approval Flow [FE]`

#### 7. AutoCount Sync Section
- `7.1 AutoCount Customer and Item Sync (Optional) [FE + AutoCount]`

---

### 1. Quotation

*Who tests this section: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

---

#### Test 1.1 — Create a Quotation via Web App / Chatbot (Text + Voice)

*This test covers three ways to create a Quotation: directly in the web app, through a chatbot text message, and through a chatbot voice note.*

---

**Part A — Web App**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in to the MAIA **web app**. Open **Quotation** and click **Create**. | The Create Quotation form opens. |
| 2 | Select a customer and add items manually, for example 10 units of **Product A** and 5 boxes of **Product B**. | Customer, items, and quantities can be entered successfully. |
| 3 | Save the Quotation. | Quotation is created and saved in **Draft**. |
| 4 | Check the saved Quotation details. | Customer name, product names, quantities, and prices match what you entered. |

**Part A result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part B — Chatbot Text Message**

| Step | What to do                                                                                                                                                            | What you should see                                                                                              |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1    | Open the chatbot in **Telegram** or **WhatsApp**. Use **Telegram** (`@maia_fixguru_bot`) during UAT, or use the WhatsApp number if it is already enabled for testing. | The chatbot replies and is ready to receive your message.                                                        |
| 2    | Type a quotation request like: *"Customer: [Customer Name]. Items: 10 units [Product A], 5 boxes [Product B]."*                                                       | Chatbot receives the message.                                                                                    |
| 3    | Wait a moment.                                                                                                                                                        | The chatbot shows the details it picked up — customer name, products, and quantities — and prepares a Quotation. |
| 4    | Check that the details are correct.                                                                                                                                   | Customer name, product names, and quantities match what you typed. A Quotation is created.                       |

**Part B result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part C — Chatbot Voice Note**

| Step | What to do                                                                                                                                     | What you should see                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1    | In the same **Telegram** or **WhatsApp** chat, record a voice note. Say something like: *"Quote for [Customer Name] — 10 units of [Product A] and 5 boxes of [Product B]."* | Voice note is sent to the chatbot. |
| 2    | Wait a moment.                                                                                                                                 | The chatbot transcribes your voice note and shows the details — customer name, products, and quantities — and prepares a Quotation. |
| 3    | Check that the details are correct.                                                                                                            | Details match what you said. A Quotation is created.                                                                                |

**Part C result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Tested by:**
**Date:**


---

#### Test 1.2 — Quotation: Custom Item via Calculator

*Who tests this section: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

*The Custom Box Calculator is used in the web app Quotation form when adding items. You can start from a new Quotation created directly in the web app, or open a Draft Quotation that was first created from the chatbot and continue editing it in the web app. It calculates box price based on dimensions and material using Fixguru's RSC and Diecut formulas.*

---

##### Test 1.2.1 — RSC Sheet Calculator

*Who tests this: **Xiao Ling** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| **— Step 1: Setup —** | | |
| 1 | Log in to the web app. Create a new **Quotation**, or open a Draft Quotation created earlier from the chatbot. In the item section, click **Calculate Custom Box**. | The Fixguru Calculator modal opens. The stepper shows 4 steps: Setup → Board Quality → Production → Quote. Step 1 (Setup) is active. |
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

##### Test 1.2.2 — Diecut Sheet Calculator

*Who tests this: **Hayati** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| **— Step 1: Setup —** | | |
| 1 | Log in to the web app. Create a new **Quotation**, or open a Draft Quotation created earlier from the chatbot. In the item section, click **Calculate Custom Box**. | The Fixguru Calculator modal opens. The stepper shows 4 steps: Setup → Board Quality → Production → Quote. Step 1 (Setup) is active. |
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

##### Test 1.2.3 — Calculator Price Flows into Quotation Correctly

*Who tests this: **Xiao Ling** (Sales) and **Marcus Lim** (Admin)*

*This checks that clicking Add SKU correctly populates the Quotation line item, whether the Quotation started in the web app or was first created by chatbot, and that the price carries through to submission and Sales Order.*

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


#### Test 1.3 — Quotation: Item Historical Pricing (FE)

*Who tests this section: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira) and **Marcus Lim** (Admin) for Test 1.3.1*

*Fixguru's standard prices change frequently. The team needs to see what discount % was given to each customer. After a Quotation is available in the web app, whether it was created directly there or first created through the chatbot, the system should suggest a new unit price based on the same discount — without manual calculation.*

---

##### Test 1.3.1 — Edit Customer Discount % and Price in Customer Profile (Optional)

*Who tests this: **Marcus Lim** (Admin)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in. Go to a **Customer Profile** and open the **Price List** tab. | A table shows all items with columns: SKU, Item Name, Standard Price, Discount %, Customer Price, Min Price, Max Price, UOM. Standard Price, Min Price, Max Price, and UOM are read-only. |
| 2 | Find an item. Enter a value in the **Discount %** column (e.g. 10%). | The Customer Price column automatically shows the derived price in italic — e.g. Standard RM 10.00 at 10% = **RM 9.00**. |
| 3 | Now enter a value in the **Customer Price** column for the same item. | The Discount % field clears your entered value and instead shows the derived discount % in italic. Only one field is stored at a time. |
| 4 | Save the changes. | Customer Price is saved. The derived Discount % is shown in italic. |
| 5 | Find a different item. Enter a **Discount %** that would produce a price **below the Min Price** (e.g. 90% discount on an item with Min Price RM 10.00). | System blocks the save and shows an error: *"Discount produces price outside allowed range. Adjust discount or update min/max."* |
| 6 | Adjust the discount to a valid value and save. | Changes are saved successfully. |
| 7 | Create a new **Quotation** for this customer in the web app, or open a Draft Quotation for this customer that was created from the chatbot. Add the items edited above and click the unit price field for each item. | The dropdown shows a **Customer Price** option reflecting the values set in the Customer Profile — either the entered price or the price derived from the stored discount %. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### Test 1.3.2 — Unit Price Dropdown: Last Quotation Price, Discount %, and History Tooltip

*Who tests this: **Xiao Ling** (Sales)*

*Scenario example:* Xiao Ling is preparing a **current quotation** for **ABC Packaging** for **Item A**. This customer already has **previous quotation history** in MAIA:

- **Previous Quotation 1 (latest):** Quotation No. `QT-00045`, dated `14 May 2026`, line item price **RM12.40**
- **Previous Quotation 2 (earlier):** Quotation No. `QT-00031`, dated `02 May 2026`, line item price **RM11.80**

Today, Xiao Ling opens a **new current quotation** for the same customer and item. The **current Standard Selling Price** in MAIA is now **RM11.40**.

What Xiao Ling needs to see in the current quotation:

- In the unit price dropdown, the system should surface the **Latest Quotation Price = RM12.40**
- The dropdown should compare that latest quoted price against today's standard and show **+8.8% vs current Standard**
- If Xiao Ling opens the quotation history graph / tooltip, she should also be able to see the earlier quotation entry **RM11.80**, together with its own comparison against today's standard

So the surfaced comparison in the current quotation should read like this:

- **Latest Quotation Price:** `RM12.40`
  `+8.8% vs current Standard (RM11.40)`
- **Earlier Quotation History:** `RM11.80`
  `+3.5% vs current Standard (RM11.40)`

This gives Xiao Ling the full story in one place: what was quoted most recently, what was quoted earlier, what today's standard is, and how those previous quotation prices compare against the current pricing baseline before she decides what to put on the new quotation.

*User story:* As a salesperson, I want to see the customer's last quotation price, its comparison against the current Standard Selling Price, and the recent quotation history tooltip in one place, so that I can reuse past pricing context without manually recalculating or opening old quotations one by one.

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in to the web app. Create a new **Quotation**, or open a Draft Quotation created from the chatbot, for a customer+item pair that already has prior quotation history. | Item is added to the Quotation. |
| 2 | Ensure the item's current **Standard Selling Price** is different from the standard/market context used in the earlier quotation history. Then click the **unit price field** for the item. | The dropdown opens and shows a **Latest Quotation Price** / historical quotation price row for that customer and item. |
| 3 | Check the **Customer Price** row. | Shows the customer price and a secondary line such as *"-X% vs current Standard"* — discount % calculated against today's Standard Selling Price. |
| 4 | Check the **Latest Quotation Price** row for the same customer and item. | The latest quotation price is surfaced. The price itself matches the last quotation record, while the secondary discount / markup line is shown relative to the **current Standard Selling Price** — e.g. *"+8.8% vs current Standard"*. |
| 5 | Cross-check the displayed **Latest Quotation Price** against the latest quotation record in MAIA. | The surfaced price matches the latest quotation record. It is not replaced with a new derived price; only the comparison against the current standard is derived dynamically. |
| 6 | Click the tooltip icon in the average price area to open the quotation history chart. | The graph opens and shows the last few quotation prices for the customer-item pair. |
| 7 | Click the tooltip points on the graph. | Each tooltip shows the quotation price and discount / markup information for that point/date, such as the earlier quotation price **RM11.80** with its comparison against the current standard. |
| 8 | Check the **Avg Lifetime Quotation Price** row and the other price rows in the dropdown. | Average quotation price is shown. Other price rows still display correctly. Rows without relevant standard comparison do not show unnecessary discount lines. |
| 9 | Select the **Latest Quotation Price** option and save the Quotation. | Unit price is set to the surfaced last quotation price, and the user can use it without manual calculation. |
| 10 | Add an item with **no Standard Selling Price** set and open the unit price dropdown. | No discount comparison line appears for rows that require Standard Selling as a reference. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

##### Test 1.3.3 — Chatbot Quotation History: Last Price + Line Item Discount

*Who tests this: **Xiao Ling** (Sales)*

*The MAIA chatbot should return both the latest quotation price and the line-item price / discount history for a customer's quotation history.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In the MAIA chatbot, ask for the latest quotation price for a customer item, for example: *"What is the last quotation price for [Customer Y] for [Item X]?"* | Chatbot responds with the latest quotation price, quotation reference, and quotation date for that customer and item. |
| 2 | Ask a follow-up about quotation history, for example: *"Show me the quotation history for [Customer Y] for [Item X]."* | Chatbot returns recent quotation line-item history for that customer and item. |
| 3 | Check the response details. | Chatbot shows the last few quotation entries with line-item **price**, **discount** (or discount %), and quotation reference / date for each relevant record. |
| 4 | Cross-check one or two returned entries against the actual Quotation records in MAIA. | The latest quotation price, line-item prices, discounts, quotation dates, and quotation references match the quotation history in MAIA. |
| 5 | Ask about a customer+item pair with **no quotation history**. | Chatbot responds that there is no prior quotation history for that customer and item — it does not return an error or made-up values. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 1.4 — Pricing and Stock Check (Chatbot)

*Continue from **Test 1.1 Part B or Part C**. This tests the chatbot's price and stock checks during chatbot quotation intake.*

| Step | What to do                                                                                                                                 | What you should see                                                                                                                                                                                      |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | After the chatbot shows the quotation details, proceed to the pricing step.                                                                | Chatbot asks you to confirm or enter the price for each item.                                                                                                                                            |
| 2    | Enter a price **above** the minimum selling price for one item.                                                                            | Price is accepted. No warning shown.                                                                                                                                                                     |
| 3    | Enter a price **below** the minimum selling price for another item. For example, type `RM 1.00` for a product with a minimum of `RM 1.20`. | Chatbot rejects the price and says it is below the minimum selling price. It offers to set the price to the minimum allowed (e.g. `RM 1.20`) or lets you adjust the quantity or choose a different item. |
| 4    | Reply to accept the minimum price suggested by the chatbot.                                                                                | Price is updated to the minimum. You can continue with the quotation.                                                                                                                                    |
| 5    | Ask the chatbot for the available quantity of a product. For example, type *"What is the quantity of [Product]?"*                          | Chatbot replies with the available stock quantity for that product.                                                                                                                                      |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 1.5 — Quotation Approval Flow

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit*

*This checks the Quotation approval/submission flow. Sales can create and edit the Quotation, but only Admin can submit it.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Xiao Ling** (Sales) | Create a new **Quotation** — via web app or chatbot — and save it as **Draft**. | Quotation is created successfully with status **Draft**. |
| 2 | **Xiao Ling** (Sales) | Open the Draft Quotation and try to **submit** it. | 🚫 Submit button is not available to Sales users. |
| 3 | **Xiao Ling** (Sales) | Tag or notify **Marcus Lim** to review the Draft Quotation. | Admin is notified to review the Quotation. |
| 4 | **Marcus Lim** (Admin) | Open the Draft Quotation, review the details, and click **Submit**. | Quotation is submitted successfully. Status changes to **OPEN**. |
| 5 | **Xiao Ling** (Sales) | Reopen the submitted Quotation and check the final details. | Submitted Quotation shows the correct customer, items, quantities, prices, and status. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 1.5.1 — Price Below Minimum Auto-Adjusts (Web App)

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit*

*Test 1.4 checks the chatbot blocks a low price during intake. This test checks the same rule on the web app — when a price below the minimum is entered on a Quotation or Sales Order, the system immediately blocks the input and auto-adjusts the price to the minimum allowed.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Xiao Ling** (Sales) | Log in to the web app. Create a new **Quotation**, or open a Draft Quotation created from the chatbot. Add a product and enter a price **below** the minimum selling price. | The system blocks the input immediately and shows: *"Unit Price set is too low, auto adjusting to the closest allowed price range."* The price is automatically adjusted to the minimum. |
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

#### Test 1.5.2 — Generate Quotation PDF

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit*

*Checks that a submitted Quotation can be exported as a PDF with correct details. PDF can be generated via the web app or by requesting it through the chatbot.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Xiao Ling** (Sales) | Create a Quotation — via web app (log in, fill form, save) or chatbot (send quotation message by text or voice note, then confirm). | Quotation saved with status **Draft**. |
| 2 | **Marcus Lim** (Admin) | Open the Draft Quotation and click **Submit**. | Quotation status changes to **OPEN**. |
| 3 | **Xiao Ling** (Sales) | Generate the PDF — via web app (open Quotation, click **Generate PDF**) or chatbot (request PDF for the quotation). Download the PDF. | Quotation PDF downloads. Correct customer name, line items, quantities, unit prices, and totals. |
| 4 | **Xiao Ling** (Sales) | Check the PDF contents. | All details match the Quotation. No blank or incorrect fields. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### 2. Sales Order + Proforma

💡 **Note:** Tests in this group can be done via the **web app** (https://maia-fe-fixguru.vercel.app/login) or the **chatbot** — both are supported.

---

#### Test 2.1 — Create and Manage Sales Orders (Web App + Chatbot)

*Who tests this: **Hayati** (Sales), **Abishaah** (Finance Manager), **Zuha** (Sales via chatbot); **Marcus Lim** (Admin) for submission*

*Sales Orders can be created via the web app (log in and fill in the form) or via the chatbot (send an order message to @maia_fixguru_bot). Either way, only Admin can submit. Test all three users using whichever channel they prefer.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Hayati** / **Abishaah** / **Zuha** | Create a new Sales Order — either create it directly via the web app, create it from an existing **Quotation**, or create it via the chatbot (send order message, confirm details). | Sales Order saved with status **Draft**. Items, quantities, and customer are correct. |
| 2 | **Hayati** / **Abishaah** / **Zuha** | Try to **submit** the Sales Order. | 🚫 Submit button not available — only Admin can submit Sales Orders. |
| 3 | **Hayati** / **Abishaah** / **Zuha** | Tag **@Marcus Lim** in the sidebar comment to notify him. | Marcus Lim receives a notification. |
| 4 | **Marcus Lim** (Admin) | Open each Draft Sales Order and click **Submit**. | Status changes to **TO BILL** for each order. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 2.2 — Credit Limit Block on Sales Order Submission

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit*

*System blocks SO submission when customer exceeds credit limit. SO can be created via web app or chatbot.*

⚠️ **Note:** Use **ZARA BIOTECH SDN BHD** — credit limit already set to 80% usage for this test.

| Step | Who                    | What to do                                                                                                                | What you should see                                                            |
| ---- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1    | **Xiao Ling** (Sales)  | Create a Sales Order for Customer A — via web app (log in, fill form, save) or via chatbot (send order message, confirm). | Sales Order saved in **Draft**.                                                |
| 2    | **Marcus Lim** (Admin) | Open the Sales Order and try to **submit** it.                                                                            | Submission blocked. Error message appears — customer has reached credit limit. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 2.3 — Management Approval Override for Credit Limit

*Who tests this: **Marcus Lim** (Admin) to escalate; **Steven Gan** (Admin) to approve*

*Continue from Test 2.2. Manager approves the blocked SO to override the credit limit.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Marcus Lim** (Admin) | From the blocked Sales Order, request approval or escalate for management review. | Approval request sent. SO enters pending approval state. |
| 2 | **Steven Gan** (Admin) | Check approval queue. Open the flagged Sales Order and **Approve** it. | SO approved. Status changes to **TO BILL**. Override recorded. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 2.4 — Proforma Invoice PDF Generation

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

*Proforma Invoice is not a separate document — it is a PDF export from a submitted Sales Order. Used for cash-in-advance customers only. PDF can be generated via web app or chatbot.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Abishaah** / **Wendy Wang** | Generate the Proforma Invoice PDF — via web app (open submitted SO, click **Generate PDF** → **Proforma Invoice**) or chatbot (request Proforma Invoice PDF for the SO). | Proforma Invoice PDF downloads using the configured **Proforma Invoice template**. No new record is created in the system. |
| 2 | **Abishaah** / **Wendy Wang** | Check the PDF contents: customer name, items, quantities, unit prices, total, and document layout. | All details match the Sales Order. The PDF uses the client's configured Proforma Invoice template. No blank or incorrect fields. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### 3. Delivery

#### Test 3.1 — Create Delivery Order and Mark as Delivered

*Who tests this: **Asrul** (Warehousing) for creation; **Marcus Lim** (Admin) for submission and marking delivery*

*Delivery Order can be created via web app or chatbot. Submission and mark-as-delivered done via web app by Admin only.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Asrul** (Warehousing) | Create a **Delivery Order (DO)** from a submitted Sales Order or Invoice — via web app (open document, create DO, save) or chatbot (request DO creation for the SO/Invoice). | DO created and saved in Draft. Shows customer address, products, quantities, and DO reference. |
| 2 | **Asrul** (Warehousing) | Try to **submit** the Delivery Order. | 🚫 Submit button not available — only Admin can submit. |
| 3 | **Marcus Lim** (Admin) | Open the Draft DO and click **Submit**. | Status changes to **To Schedule**. |
| 4 | **Marcus Lim** (Admin) | Click **Actions → Mark as Delivered**. | Status changes to **Delivered**. Delivery recorded as complete. |
| 5 | Any user | Download the DO PDF — via web app or chatbot. | Delivery Order PDF downloads. Details are correct. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 3.4 — Stock Alerts (Out of Stock and Low Stock)

*Who tests this: **Asrul** (Warehousing) and **Xiao Ling** (Sales) — both should see the alerts*

**Part A — Out of Stock Alert**

⚠️ **Setup:** Use a product that has exactly 100 units available. Create a Sales Order that uses all 100 units. Once the order is submitted, the stock hits zero and should trigger the out-of-stock notification.

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create and submit a Sales Order that uses up all available stock of a product (e.g. 100 units for a product with 100 units available). | Sales Order is submitted successfully. |
| 2 | Log in as **Asrul** (Warehousing). Check the notification area. | An Out-of-Stock alert is shown for that product — stock is now at zero. |
| 3 | Log out. Log in as **Xiao Ling** (Sales). Check the notification area. | The same Out-of-Stock alert is visible to Sales users as well. |

**Part B — Low Stock Alert**

⚠️ **Setup:** Go to the **Item module** and set a safety quantity for a product (e.g. set safety quantity to 50). Then make sure the available quantity for that product drops below 50. This will trigger the low stock notification.

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in as **Asrul** (Warehousing). Go to the **Item module**. Find a product and set its **safety quantity** (e.g. 50 units). | Safety quantity is saved for that product. |
| 2 | Ensure the available quantity for that product is below the safety quantity you just set. | Available quantity is lower than the safety quantity. |
| 3 | Check the notification area. | A Low-Stock alert is shown for that product — remaining quantity is below the safety level. |
| 4 | Log out. Log in as **Xiao Ling** (Sales). Check the notification area. | The same Low-Stock alert is visible to Sales users as well. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 3.3 — Delivery Delay Reminder

*Who tests this: **Asrul** (Warehousing)*

*The system sends a notification when a Sales Order has been submitted but no Delivery Order has been created within 5 hours.*


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

#### Test 3.2 — Create and Submit a Pick List

*Who tests this: **Asrul** (Warehousing) for creation; **Marcus Lim** (Admin) for submission*

⚠️ **Note:** Only Admin can submit Pick Lists — there is no Logistics Manager at Fixguru.

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Asrul** (Warehousing) | Log in. Open a submitted **Sales Order**. Create a **Pick List** from it and save it. | Pick List created and saved in Draft. Shows products, quantities, and SO reference. |
| 2 | **Asrul** (Warehousing) | Try to **submit** the Pick List. | 🚫 Submit button not available — only Admin can submit Pick Lists. |
| 3 | **Marcus Lim** (Admin) | Open the Draft Pick List and click **Submit**. | Pick List submitted. Status changes to confirmed. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### 4. Invoice

*Who tests this section: **Abishaah** or **Wendy Wang** (Finance Manager)*

---

#### Test 4.1 — Submit Invoice and Generate PDF

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

*Invoice can be created from a submitted Sales Order (TO BILL) or a submitted Delivery Order. PDF can be generated via web app or chatbot.*

| Step | Who                                              | What to do                                                                                                                       | What you should see                                                                               |
| ---- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1    | **Abishaah** or **Wendy Wang** (Finance Manager) | Create an Invoice — from a submitted **Sales Order** (status **TO BILL**) or from a  **Delivery Order**. Save it.                | Invoice created with status **Draft**. Items, quantities, and customer match the source document. |
| 2    | **Abishaah** or **Wendy Wang** (Finance Manager) | Click **Submit** on the Invoice.                                                                                                 | Invoice status changes to **UNPAID**.                                                             |
| 3    | Any user                                         | Generate the Invoice PDF — via web app (open Invoice, click **Download PDF**) or chatbot (request Invoice PDF for the document). | Invoice PDF downloads using the configured **Invoice template**. Details are correct.            |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 4.2 — eInvoice / AutoCount Sync

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

*This checks that MAIA decides the correct e-invoice mode on Invoice submission and pushes the Invoice to AutoCount. MAIA's scope ends at the push. What AutoCount does after receiving it is out of scope for this UAT.*

**Part A — Individual e-Invoice (invoice above RM 10,000)**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in as Finance Manager. Open a submitted Sales Order with a total above **RM 10,000**. Generate an Invoice from it and submit. | Invoice is submitted. Status shows **UNPAID**. |
| 2 | Open the submitted Invoice. Check the **e-Invoice** section or status field. | `E-Invoice Mode` shows **Individual**. `E-Invoice Status` shows **Queued** — confirming MAIA has pushed the Invoice to AutoCount. |

**Part A result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part B — Consolidated e-Invoice (invoice at or below RM 10,000)**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a submitted Sales Order with a total at or below **RM 10,000**. Generate an Invoice from it and submit. | Invoice is submitted. Status shows **UNPAID**. |
| 2 | Open the submitted Invoice. Check the **e-Invoice** section or status field. | `E-Invoice Mode` shows **Consolidated**. `E-Invoice Status` shows **Queued** — confirming MAIA has pushed the Invoice to AutoCount with consolidated mode. |

**Part B result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 4.3 — Create Receipt / Record Payment

*Who tests this: **Nisa** (Finance Assistant) or **Abishaah** / **Wendy Wang** (Finance Manager)*

*Receipt can be created via web app or chatbot. On the chatbot, upload the payment slip and reference the Invoice number — the system creates the receipt automatically.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Nisa** / **Abishaah** / **Wendy Wang** | Create a Receipt against an **UNPAID** Invoice — via web app (open Invoice, create Receipt, enter payment amount, submit) or chatbot (upload payment slip and say *"Pay for Invoice [Invoice No.]"*). | Receipt created and submitted. Invoice status changes to **PAID**. |
| 2 | **Nisa** / **Abishaah** / **Wendy Wang** | Create a second Receipt against a different **UNPAID** Invoice — save as **Draft** only, do not submit. | Receipt saved in Draft. Invoice still shows **UNPAID**. |
| 3 | **Abishaah** or **Wendy Wang** (Finance Manager) | Open the Draft Receipt and click **Submit**. | Receipt submitted. Invoice status changes to **PAID**. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### 5. Post-Invoice Adjustment + Payment

#### Test 5.1 — Create a Credit Note and Debit Note

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

*Credit Note and Debit Note can be created via web app or chatbot.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Abishaah** / **Wendy Wang** | Create a **Credit Note** from a submitted Invoice — via web app (open Invoice, click Create Credit Note, fill in amount and items, submit) or chatbot (request Credit Note for the Invoice). | Credit Note created and submitted. References the original Invoice and shows the credited amount. |
| 2 | **Abishaah** / **Wendy Wang** | Create a **Debit Note** from a submitted Invoice — via web app (open Invoice, click Create Debit Note, fill in amount and items, confirm) or chatbot (request Debit Note for the Invoice). | Debit Note created and saved. References the original Invoice and shows the debited amount. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### 6. Cross-Workflow Control Layer

---

#### Test 6.1 — All Users Can Log In

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

#### Access and Role Permission Checks

*Each person tests their own account. Check that you can do the things listed, and that you are blocked from things outside your role.*

---

#### Test 6.2 — Sales Access Check

*Who tests this: **Zuha** or **Syahira** (Sales — different person from Test 1.1)*

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

#### Test 6.3 — Warehousing Access Check

*Who tests this: **Fadzil** or **Azizah** (Warehousing — different person from Test 3.1)*

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

#### Test 6.4 — Finance Manager Access Check

*Who tests this: **Wendy Wang** (Finance Manager — use the other Finance Manager from Test 5.1)*

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

#### Test 6.5 — Finance Assistant Access Check

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

#### Test 6.6 — Admin Access Check

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

#### Test 6.7 — Role Approval Flow

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

### 7. AutoCount Sync 

*This section is optional. Run it only if AutoCount access is available during UAT.*

#### Test 7.1 — AutoCount Customer and Item Sync (Optional)

*Who tests this: **Marcus Lim** (Admin) together with a user who has AutoCount access*

*This checks that newly created master data in AutoCount can be pulled into MAIA in two ways: manually via the **Sync** button in the Customer and Item modules, and automatically via the polling job that runs every **30 minutes**.*

**Part A — Manual Customer Sync from AutoCount**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In **AutoCount**, create a **new customer** using a unique customer name/code that does not already exist in MAIA. Save the customer record. | New customer is created successfully in AutoCount. |
| 2 | In **MAIA**, log in as **Marcus Lim** (Admin). Open the **Customer** module and click the **Sync** button. | Sync starts successfully. No error is shown. |
| 3 | Refresh or search the Customer list in MAIA for the newly created AutoCount customer. | The new customer appears in MAIA with the expected customer name/code pulled from AutoCount. |

**Part A result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part B — Manual Item Sync from AutoCount**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In **AutoCount**, create a **new item** using a unique item code/name that does not already exist in MAIA. Save the item record. | New item is created successfully in AutoCount. |
| 2 | In **MAIA**, open the **Item** module and click the **Sync** button. | Sync starts successfully. No error is shown. |
| 3 | Refresh or search the Item list in MAIA for the newly created AutoCount item. | The new item appears in MAIA with the expected item code/name pulled from AutoCount. |

**Part B result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part C — Automatic Polling Sync Every 30 Minutes**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | In **AutoCount**, create another **new customer** and another **new item** using unique code/name values that do not already exist in MAIA. Save both records. | The new customer and item are created successfully in AutoCount. |
| 2 | In **MAIA**, do **not** click any Sync button. Note the current time and wait for the next polling cycle. | No manual sync is triggered in MAIA. |
| 3 | After up to **30 minutes**, refresh the **Customer** and **Item** modules and search for the newly created records. | The new customer and new item appear in MAIA automatically, confirming the polling sync pulled the latest data from AutoCount. |

**Part C result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

---

## Results Summary

| E2E ID | What was tested                                         | Mode           | Result (Pass / Fail / Issue) | Tested by | Date | Blocker Owner | ETA |
| ------ | ------------------------------------------------------- | -------------- | ---------------------------- | --------- | ---- | ------------- | --- |
| 1.1    | Quotation creation via web app / chatbot (text + voice) | FE + Chatbot   |                              |           |      |               |     |
| 1.2.1  | RSC calculator full flow                                | FE             |                              |           |      |               |     |
| 1.2.2  | Diecut calculator full flow                             | FE             |                              |           |      |               |     |
| 1.2.3  | Calculator price flows into quotation correctly         | FE             |                              |           |      |               |     |
| 1.3.1  | Historical pricing: edit customer discount % and price (optional) | FE      |                              |           |      |               |     |
| 1.3.2  | Historical pricing: last quotation price, discount, and history tooltip (optional) | FE |                              |           |      |               |     |
| 1.3.3  | Chatbot: latest quotation price + line item quotation history | Chatbot |                              |           |      |               |     |
| 1.4    | Price and stock check (chatbot)                         | Chatbot        |                              |           |      |               |     |
| 1.5    | Quotation approval flow                                 | FE             |                              |           |      |               |     |
| 1.6    | Price below minimum auto-adjust (web app)               | FE             |                              |           |      |               |     |
| 1.7    | Generate quotation PDF                                  | FE + Chatbot   |                              |           |      |               |     |
| 2.1    | SO create/manage + Admin submit notify flow             | FE + Chatbot   |                              |           |      |               |     |
| 2.2    | Credit limit block on SO submission                     | FE + Chatbot   |                              |           |      |               |     |
| 2.3    | Management approval to override credit limit block      | FE + Chatbot   |                              |           |      |               |     |
| 2.4    | Proforma Invoice PDF generation                         | FE + Chatbot   |                              |           |      |               |     |
| 3.1    | Create Delivery Order and mark as delivered             | FE + Chatbot   |                              |           |      |               |     |
| 3.2    | Pick List create and submit                             | FE             |                              |           |      |               |     |
| 3.3    | SO→DO delivery delay reminder                           | Chatbot / FE   |                              |           |      |               |     |
| 3.4    | Stock alerts (out-of-stock / low-stock)                 | FE + Chatbot   |                              |           |      |               |     |
| 4.1    | Invoice submit and generate PDF                         | FE + Chatbot   |                              |           |      |               |     |
| 4.2    | eInvoice / AutoCount sync                               | FE             |                              |           |      |               |     |
| 4.3    | Create receipt / record payment                         | FE + Chatbot   |                              |           |      |               |     |
| 5.1    | Credit note and debit note flow                         | FE + Chatbot   |                              |           |      |               |     |
| 6.1    | Login baseline for all users                            | FE             |                              |           |      |               |     |
| 6.2    | Sales access control check                              | FE             |                              |           |      |               |     |
| 6.3    | Warehousing access control check                        | FE             |                              |           |      |               |     |
| 6.4    | Finance Manager access check                            | FE             |                              |           |      |               |     |
| 6.5    | Finance Assistant access check                          | FE             |                              |           |      |               |     |
| 6.6    | Admin access control check                              | FE             |                              |           |      |               |     |
| 6.7    | Cross-doc role approval flow                            | FE             |                              |           |      |               |     |
| 7.1    | AutoCount customer and item sync (optional)             | FE + AutoCount |                              |           |      |               |     |

**Total: 31 E2E checkpoints**

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

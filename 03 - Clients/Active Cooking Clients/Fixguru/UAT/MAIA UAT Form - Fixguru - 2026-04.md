---
owner: Gareth
status: draft
last_reviewed: 2026-03-31
client: Fixguru
uat_round: 1
---

# MAIA User Acceptance Test (UAT) — Fixguru
## April 2026 · Round 1

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

**Scope note:** This UAT covers Phase 1 core MAIA — chatbot order intake, document flow (QT → SO → Invoice → Payment), approval flows (min price, credit limit), delivery, inventory alerts, and role permissions. E-invoice integration and the Custom Box Calculator are covered separately in a later phase.

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

Quick reference for Group 5 tests. Fixguru has no Sales Manager or Logistics Manager.

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

### Group 1 — Chatbot: Sending a Quotation

*Who tests this group: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

---

#### Test 1 — Send a Quotation via Text Message and Voice Note

*Test the chatbot twice — once by typing, and once by sending a voice note. The chatbot will create a Quotation from what you send.*

---

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

**Notes:**

---

**Tested by:**
**Date:**


---

#### Test 2 — Pricing and Stock Check (Chatbot)

*Continue from **Test 1** (text message quotation). This tests the chatbot's price and stock checks during quotation intake.*

| Step | What to do                                                                | What you should see                                                  |
| ---- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1    | After the chatbot shows the extracted quotation details, proceed to the pricing step. | Chatbot asks you to confirm or enter the price for each item. |
| 2    | Enter a price **above** the minimum selling price for one item.           | Price is accepted. No warning shown.                                 |
| 3    | Enter a price **below** the minimum selling price for another item. For example, type `RM 1.00` for a product with a minimum of `RM 1.20`. | Chatbot rejects the price and says it is below the minimum selling price. It offers to set the price to the minimum allowed (e.g. `RM 1.20`) or lets you adjust the quantity or choose a different item. |
| 4    | Reply to accept the minimum price suggested by the chatbot.               | Price is updated to the minimum. You can continue with the quotation. |
| 5    | Ask the chatbot for the available quantity of a product. For example, type *"What is the quantity of [Product]?"* | Chatbot replies with the available stock quantity for that product. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 2 — Web App: Managing Orders

---

#### Test 3 — Price Below Minimum Auto-Adjusts (Web App)

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit*

*Test 2 checks the chatbot blocks a low price during intake. This test checks the same rule on the web app — when a price below the minimum is entered on a Quotation or Sales Order, the system immediately blocks the input and auto-adjusts the price to the minimum allowed.*

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

#### Test 4 — Credit Limit Check on Sales Order Submission

*Who tests this: **Xiao Ling** (Sales) to create; **Marcus Lim** (Admin) to submit; **Steven Gan** (Admin) to approve*

*This tests two things: (A) the system blocks SO submission when a customer is near their credit limit, and (B) a manager can approve the SO to override the block.*

⚠️ **Note:** Use **ZARA BIOTECH SDN BHD** as the test customer — the credit limit has already been set to 80% usage for this account.

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

#### Test 5 — Generate Documents (Quotation → Sales Order → Invoice)

*Coordinate across roles — see who does each step.*

**Role note:** Sales and Finance can **create** but not **submit**. Only **Admin** submits Quotations and Sales Orders. **Finance Manager** or **Admin** submits Invoices.

**Proforma Invoice note:** Not a separate document — it's a PDF export from the Sales Order. Used for cash-in-advance customers only.

| Step | Who                                                     | What to do                                                                                                | What you should see                                                                                                  |
| ---- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1    | **Xiao Ling** (Sales)                                   | Log in at https://maia-fe-fixguru.vercel.app/login. Create a **Quotation** and save it.                   | Quotation is created and saved. Status shows **Draft**.                                                              |
| 2    | **Marcus Lim** (Admin)                                  | Log in as Admin. Open the Draft Quotation and click **Submit**.                                           | Quotation status changes to **OPEN**. Only Admin can submit Quotations.                                              |
| 3    | **Xiao Ling** (Sales) or **Abishaah** (Finance Manager) | Open the submitted Quotation and convert it to a **Sales Order**.                                         | Quotation status changes to **ORDERED**. A new Sales Order is created with status **Draft**.                         |
| 4    | **Marcus Lim** (Admin)                                  | Open the Draft Sales Order and click **Submit**.                                                          | Sales Order status changes to **TO BILL**. Only Admin can submit Sales Orders.                                       |
| 5    | **Abishaah** or **Wendy Wang** (Finance Manager)        | Open the submitted Sales Order. Click **Generate PDF** and select **Proforma Invoice**. Download the PDF. | A Proforma Invoice PDF is downloaded. It uses the Sales Order details — no separate record is created in the system. |
| 6    |                                                         | From the Sales Order, generate the final **Invoice** and click **Submit**.                                | An Invoice is created and submitted. Status shows **UNPAID**.                                                        |
| 7    | Any user                                                | Download the Quotation, Sales Order, and Invoice each as PDF.                                             | All three documents download successfully as PDFs.                                                                   |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 6 — Create a Credit Note and Debit Note

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

| Step | What to do                                                                                         | What you should see                                                                                    |
| ---- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1    | Open an existing submitted **Invoice**.                                                            | Invoice record is visible.                                                                             |
| 2    | Look for the option to create a **Credit Note** and click it.                                      | Credit Note creation screen appears.                                                                   |
| 3    | Fill in the amount, adjust the items, then confirm and submit.                                     | Credit Note is created and submitted. It references the original Invoice and shows the credited amount. |
| 4    | Open the same or a different Invoice. Look for the option to create a **Debit Note** and click it. | Debit Note creation screen appears.                                                                    |
| 5    | Fill in the amount & adjust the items, then confirm.                                               | Debit Note is created and saved. It references the original Invoice and shows the debited amount.      |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 7 — Create and Manage Sales Orders on the Web App

*Who tests this: **Hayati** (Sales) and **Abishaah** (Finance Manager) for creation; **Marcus Lim** (Admin) for submission*

**Note:** Sales and Finance can create and edit Sales Orders but **cannot submit** them. Only **Admin** can submit.

| Step | What to do                                                                              | What you should see                                                                         |
| ---- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1    | Log in as **Hayati** (Sales). Create a new Sales Order directly from the web app.       | A form appears. Fill in customer and product details. Saved with status **Draft**.          |
| 2    | Try to **submit** the Sales Order as Hayati.                                            | 🚫 Submit button is not available — only Admin can submit Sales Orders.                     |
| 3    | Log in as **Abishaah** (Finance Manager). Create a new Sales Order.                    | Sales Order saved with status **Draft**. Finance Manager can create.                        |
| 4    | Try to **submit** the Sales Order as Abishaah.                                          | 🚫 Submit button is not available — only Admin can submit Sales Orders.                     |
| 5    | Log in as **Marcus Lim** (Admin). Open both Draft Sales Orders and submit them.        | Both Sales Orders change to **TO BILL**. Admin is the only role that can submit.            |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 8 — Export Invoice / Credit Note / Debit Note as CSV

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

| Step | What to do                                              | What you should see                                                       |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1    | Log in as **Finance Manager**. Open the **Invoice** page. | Invoice listing is visible.                                               |
| 2    | Click the export or download button and select **CSV**. | A CSV file is downloaded to your computer.                                |
| 3    | Open the CSV. Check the contents.                       | File contains invoice details — customer, line items, quantities, prices. |
| 4    | Open a **Credit Note** and repeat the export.           | CSV downloaded. File contains credit note details.                        |
| 5    | Open a **Debit Note** and repeat the export.            | CSV downloaded. File contains debit note details.                         |

⚠️ **Note:** This CSV is used by Finance to create eInvoice records in the accounting system. eInvoices are not generated inside MAIA.

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 3 — Warehousing: Deliveries and Stock Alerts

---

#### Test 9 — Create a Delivery Order, Picking List, and Mark as Delivered

*Who tests this: **Asrul** (Warehousing) for creation; **Marcus Lim** (Admin) for DO submission, Pick List submission, and marking delivery*

**Note:** All roles can **create** Delivery Orders, but only **Admin** can submit them. Since Fixguru has no Logistics Manager, **Admin** also submits Pick Lists and marks deliveries as completed.

| Step | What to do                                                                                      | What you should see                                                                                              |
| ---- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1    | Log in as **Asrul** (Warehousing). Open a submitted Invoice with status **UNPAID**.             | Invoice record is visible.                                                                                       |
| 2    | Create a **Delivery Order (DO)** from the Invoice and save it.                                  | Delivery Order is created and saved in Draft. Shows customer address, products, quantities, and a DO reference. |
| 3    | Try to **submit** the Delivery Order as Asrul.                                                  | 🚫 Submit button is not available — only Admin can submit Delivery Orders.                                       |
| 4    | Log in as **Marcus Lim** (Admin). Open the Draft Delivery Order and click **Submit**.           | Delivery Order status changes to **To Schedule**.                                                                |
| 5    | From the Delivery Order, create a **Picking List** and click **Submit** (Admin).               | Picking List is created and submitted. Shows all items to pick from the warehouse with quantities.               |
| 6    | Download both the DO and the Picking List as PDFs.                                              | Both documents download successfully as PDFs.                                                                    |
| 7    | On the submitted Delivery Order, click **Actions → Mark as Delivered**.                         | Delivery Order status changes to **Delivered**. Delivery is recorded as completed.                               |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 10 — Stock Alerts (Out of Stock and Low Stock)

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

#### Test 11 — Delivery Delay Reminder

*Who tests this: **Asrul** (Warehousing)*

| Step | What to do                                                                                                                                    | What you should see                                                                      |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1    | Log in as **Asrul**. Find an Invoice where no Delivery Order has been created yet, and it has been open for more than the allowed number of days. | Invoice identified.                                                                   |
| 2    | Check the daily digest or notification area.                                                                                                  | A delivery delay alert is shown for that Invoice — flagging that no DO has been created. |

⚠️ **Note:** If you cannot find an overdue Invoice, please contact Gareth to set one up.

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 12 — Create and Submit a Stock Reservation Entry

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

### Group 4 — Logging In

---

#### Test 13 — All Users Can Log In

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

### Group 5 — What Each Person Can and Cannot Do

*Each person tests their own account. Check that you can do the things listed, and that you are blocked from things outside your role.*

---

#### Test 14 — Sales Access Check

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

#### Test 15 — Warehousing Access Check

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

#### Test 16 — Finance Manager Access Check

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

#### Test 17 — Finance Assistant Access Check

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

#### Test 18 — Admin Access Check

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

#### Test 19 — Role Approval Flow

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
| 9    | **Asrul** (Warehousing)          | Create a Pick List from the Delivery Order and save it.       | Pick List saved in Draft. Warehousing can create.                          |
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

| Test # | What was tested                                                       | Result (Pass / Fail / Issue) | Tested by | Date |
| ------ | --------------------------------------------------------------------- | ---------------------------- | --------- | ---- |
| Test 1  | Send quotation by text message and voice note                        |                              |           |      |
| Test 2  | Pricing and stock check (chatbot)                                    |                              |           |      |
| Test 3  | Price below minimum auto-adjusts (web app)                           |                              |           |      |
| Test 4A | Credit limit block on Sales Order submission                         |                              |           |      |
| Test 4B | Management approval to override credit limit block                   |                              |           |      |
| Test 5  | Generate documents (Quotation → SO → Invoice; Proforma as PDF export) |                              |           |      |
| Test 6  | Create Credit Note and Debit Note (Finance Manager)                  |                              |           |      |
| Test 7  | Create and manage Sales Orders (Sales/Finance create; Admin submits) |                              |           |      |
| Test 8  | Export Invoice / Credit Note / Debit Note as CSV (Finance)           |                              |           |      |
| Test 9  | Create Delivery Order, Picking List, and Mark as Delivered           |                              |           |      |
| Test 10 | Stock alerts (Out of Stock / Low Stock)                              |                              |           |      |
| Test 11 | Delivery delay reminder                                              |                              |           |      |
| Test 12 | Create and submit Stock Reservation Entry                            |                              |           |      |
| Test 13 | All users can log in                                                 |                              |           |      |
| Test 14 | Sales (Zuha / Syahira) — access check                                |                              |           |      |
| Test 15 | Warehousing (Fadzil / Azizah) — access check                         |                              |           |      |
| Test 16 | Finance Manager (Wendy Wang) — access check                          |                              |           |      |
| Test 17 | Finance Assistant / Nisa — access check                              |                              |           |      |
| Test 18 | Admin (Steven Gan / Yvonne Choo) — access check                      |                              |           |      |
| Test 19 | Role approval flow (QT → SO → DO → PL → INV → RCT)                  |                              |           |      |

**Total: 19 tests (20 parts)**

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

- [[03 - Clients/Active Cooking Clients/Fixguru/Client Overview]]
- [[Fixguru Timeline]]
- [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)
- [[03 - Clients/Active Cooking Clients/Fixguru/Config Overlay]]
- [[MAIA_Role_Permission_Fixguru_Completed.csv]]

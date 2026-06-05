---
owner: Gareth
status: draft
last_reviewed: 2026-04-28
client: Holsen
uat_round: 1
---

# MAIA User Acceptance Test (UAT) — Holsen
## March 2026 · Round 1

---

## Before You Start

**UAT Period:** 18 March 2026 – 25 March 2026
**Sign-Off Deadline:** 25 March 2026
**Go-Live (Core MAIA):** 31 March 2026

### UAT Timeline — Phase 1

| # | Milestone                        | Start      | End        | Owner     | Status      |
|---|----------------------------------|------------|------------|-----------|-------------|
| 1 | UAT Brief                        | 18 Mar     | 18 Mar     | Gareth Ng | Completed   |
| 2 | UAT Testing                      | 18 Mar     | 03 Apr     | Gareth Ng | In Progress |
| 3 | UAT Follow Up                    | 31 Mar     | 31 Mar     | Gareth Ng | Not Started |
| 4 | Meta Account Setup               | 03 Apr     | 03 Apr     | Gareth Ng | Not Started |
| 5 | Product Ready                    | 07 Apr     | 07 Apr     | Gareth Ng | Not Started |
| 6 | Poison Signing Order Form (Phase 2) | 30 Mar  | 31 Mar     | Gareth Ng | In Progress |
| 7 | Customer Group for Sales User    | 31 Mar     | 02 Apr     | Gareth Ng | Not Started |
| 8 | UAT Bug Fixes                    | 31 Mar     | 04 Apr     | Gareth Ng | Not Started |
| 9 | Phase 1 Sign Off                 | 08 Apr     | 08 Apr     | Gareth Ng | Not Started |

**Scope note:** This UAT covers core MAIA only. C1/C3 compliance features and A57 tax exemption enforcement are not included in this round — they will be tested separately after go-live.
**Web App:** https://maia-fe-holsen.vercel.app/login
**Chatbot (during UAT):** Telegram — scan the QR code provided to open the MAIA Holsen chatbot
![[Pasted image 20260317232736.png|239]]
**Chatbot (after go-live):** WhatsApp *(same features — WhatsApp setup is in progress)*

---

## Your Login Details

| Name                       | Email (Username)            | Password |
| -------------------------- | --------------------------- | -------- |
| Ng Tze Chien               | holsensales@gmail.com       | 123456   |
| Tam Ze Xin                 | enquiry@holseninterchem.com | 123456   |
| Noor Aili Nafiah           | sales@holseninterchem.com   | 123456   |
| Intan Nor Atikah           | holsen@holseninterchem.com  | 123456   |
| Murugesu A/L Palanivello   | holsenchem@gmail.com        | 123456   |
| Wong Shui Fern (Miss Wong) | wongsf@holseninterchem.com  | 123456   |
| Ong Siow Chui              | holsenlab@gmail.com         | 123456   |
| Chin Zhao Heng             | chinzh@holseninterchem.com  | 123456   |

---

## How to Use This Document

1. Work through each test **in order** — some tests use data created in earlier steps.
2. For each step, do what is described and check that what you see matches the **"What you should see"** column.
3. After each test, tick your result and write any notes in the feedback box.
4. If something does not work as expected, mark it **Fail** and describe what happened.
5. If you are unsure or something is not loading, mark it **Issue** and contact **Gareth**.
6. Sign off at the end when you are done.

**About these test cases:** All tests in this document are based on the agreed MAIA scope in the Holsen SOW. If any test case does not match how your business works, or if you notice a step that seems incorrect, please do not guess — contact **Gareth** directly and we will review and update the test case before you proceed.

**Result options:**
- ✅ **Pass** — Everything worked as described
- ❌ **Fail** — Something did not work correctly
- ⚠️ **Issue** — Could not complete the test (e.g., button missing, page not loading)

**Reporting issues:** If you find a bug or something is not working correctly, use **Jam** to record your screen and share the issue with the MAIA team. Jam works in Chrome, Edge, and Firefox.
→ [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

---

## Setup Checklist *(For MAIA team to complete before UAT starts)*

- [ ] All user accounts created and login details filled in above
- [ ] Customer records loaded (at least 3 test customers with name and address)
- [ ] Product catalogue loaded (at least 5 products with descriptions and pricing)
- [ ] Stock quantities loaded (at least 1 product at zero stock, 1 at low-stock level)
- [ ] Low-stock threshold configured (Safety Qty in Item)
- [ ] Delivery delay reminder threshold configured
- [ ] At least 1 product flagged as Poison in the system
- [ ] Test customer has full address and phone number 

---

## Tests

---

### Group 1 — Chatbot: Sending Orders

---

#### Test 1 — Send an Order by Text Message

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager)*

| Step | What to do                                                                                                   | What you should see                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 1    | Open the **MAIA Holsen chatbot** in Telegram using the QR code provided.                                     | The chatbot replies and is ready to receive your message.                                   |
| 2    | Type a message like: *"Customer: [Customer Name]. Order: 10 drums Copper Sulfate, 5 bags Sodium Hydroxide."* | Chatbot receives the message.                                                               |
| 3    | Wait a moment.                                                                                               | The chatbot shows the order details it extracted — customer name, products, and quantities. |
| 4    | Check that the details are correct.                                                                          | Customer name, product names, and quantities match what you typed.                          |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**


---

#### Test 2 — Send an Order by Photo (PO)

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager)*

| Step | What to do                                                                                                           | What you should see                                                                                                                      |
| ---- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Take a photo of a **printed PO or handwritten order**.                                                               | Photo is ready on your phone.                                                                                                            |
| 2    | Send the photo to the **MAIA Holsen chatbot** on Telegram with a short message, e.g. *"pls process this for CPO"*.   | Chatbot replies: *"The upload was successful and I am handling it in the background."*                                                   |
| 3    | Wait a moment.                                                                                                       | Chatbot replies: *"Document processing is complete."* A CPO number is shown (e.g. **CPO-2026-00022**). The CPO status shows **Pending**. |

⚠️ **Note:** After the chatbot confirms the CPO is created, go to the web app to review the extracted details and convert the CPO to a Sales Order. This is covered in the Group 2 web app tests.

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 3 — Send an Order by PDF

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager)*

| Step | What to do                                                                                | What you should see                                                                                                                      |
| ---- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Prepare a customer PO in PDF format.                                                      | PDF file is ready on your phone or computer.                                                                                             |
| 2    | Open chatbot on Telegram. Send the PDF with a short message, e.g. *"pls process this for CPO"*. | Chatbot replies: *"The upload was successful and I am handling it in the background."*                                              |
| 3    | Wait a moment.                                                                            | Chatbot replies: *"Document processing is complete."* A CPO number is shown (e.g. **CPO-2026-00022**). The CPO status shows **Pending**. |

⚠️ **Note:** After the chatbot confirms the CPO is created, go to the web app to review the extracted details and convert the CPO to a Sales Order. This is covered in the Group 2 web app tests.

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 4 — Pricing and Stock Check

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager) — continue from **Test 1 only** (text message order). Tests 2 and 3 go directly to a CPO in the web app — pricing for those is reviewed there, not in the chatbot.*

| Step | What to do                                                                | What you should see                                                  |
| ---- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1    | After the chatbot shows the extracted order, proceed to the pricing step. | Chatbot asks you to confirm or enter the price for each item.        |
| 2    | Enter a price **above** the minimum selling price for one item.           | Price is accepted. No warning shown.                                 |
| 3    | Enter a price **below** the minimum selling price for another item.       | Chatbot shows a warning or blocks the price — minimum price not met. |
| 4    | Correct the price to be at or above the minimum.                          | Price accepted. You can continue.                                    |
| 5    | Check the stock quantity shown for a product.                             | Available stock quantity is displayed next to the product.           |

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

#### Test 5 — Review CPO and Convert to Sales Order

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager) for review; **Noor Aili** (Logistics) or **Miss Wong** (Finance) for submission*

*Continue from Test 2 or Test 3 — the CPO was created by the chatbot from a photo or PDF.*

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager) | Log in to https://maia-fe-holsen.vercel.app/login. Navigate to the CPO list and open the CPO created in Test 2 or Test 3. | The CPO record is visible. Status shows **Pending**. |
| 2 | **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager) | Review the extracted details — check customer name, product names, and quantities against the original photo or PDF. | Extracted details are correct and match the source document. |
| 3 | **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager) | If any detail is wrong, edit it directly in the CPO. | Changes are saved. The CPO reflects the corrected information. |
| 4 | **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager) | Convert the CPO to a **Sales Order**. | A Sales Order is created. The CPO status updates to show it has been converted. |
| 5 | **Noor Aili** (Logistics) or **Miss Wong** (Finance) | Open the Sales Order and click **Submit**. | Sales Order status changes to **TO BILL**. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 6 — Generate Documents (Quotation → Sales Order → Proforma Invoice → Invoice)

*Who tests this: **Ng Tze Chien / Tam Ze Xin** (Sales Manager) for Step 1; **Noor Aili** (Logistics) or **Miss Wong** (Finance) for Steps 2–5*

*Continue from the order created in Test 4. Different roles handle different steps — coordinate as needed.*

**Why different roles?** Sales Manager can create Quotations but cannot create or edit Sales Orders (view only). SO creation and Invoice submission must be done by Logistics or Finance.

| Step | Who                                                  | What to do                                                                     | What you should see                                                                                |
| ---- | ---------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 1    | **Sales Manager** (Ng Tze Chien / Tam Ze Xin)        | Log in to the web app. Generate a **Quotation** and submit it.                 | A Quotation is created and submitted. Status shows **OPEN**.                                       |
| 2    | **Noor Aili** (Logistics) or **Miss Wong** (Finance) | Log in to the web app. Open the Quotation and convert it to a **Sales Order**. | The Quotation status changes to **ORDERED**. A new Sales Order is created with status **TO BILL**. |
| 3    | **Noor Aili** or **Miss Wong**                       | From the Sales Order, generate a **Proforma Invoice**.                         | A Proforma Invoice is created with its own reference number. Details match the Sales Order.        |
| 4    | **Miss Wong** (Finance)                              | From the Sales Order, generate the final **Invoice** and submit it.            | An Invoice is created and submitted. Status shows **UNPAID**.                                      |
| 5    | Any user                                             | Download each document (Quotation, SO, Proforma Invoice, Invoice) as PDF.      | All documents download successfully as PDFs.                                                       |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 7 — Create a Credit Note and Debit Note

*Who tests this: **Miss Wong** (Finance)*

*Use an existing Invoice from Test 6.*

| Step | What to do                                                                                         | What you should see                                                                                 |
| ---- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1    | Open an existing submitted **Invoice**.                                                            | Invoice record is visible.                                                                          |
| 2    | Look for the option to create a **Credit Note** and click it.                                      | Credit Note creation screen appears.                                                                |
| 3    | Fill in the amount, adjust the items, then confirm.                                                | Credit Note is created and saved. It references the original Invoice and shows the credited amount. |
| 4    | Open the same or a different Invoice. Look for the option to create a **Debit Note** and click it. | Debit Note creation screen appears.                                                                 |
| 5    | Fill in the amount & adjust the items, then confirm.                                               | Debit Note is created and saved. It references the original Invoice and shows the debited amount.   |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 8 — Duplicate Order is Blocked

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager)*

**Note:** The duplicate check triggers when an existing order with the same PO number is already in **TO BILL** (submitted) status. Draft orders are not checked.

| Step | What to do                                                                                                              | What you should see                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1    | Log in as **Ng Tze Chien** or **Tam Ze Xin**. Send a customer order via the chatbot — include a PO Number e.g. **"PO-001"**. | Order is received by the chatbot. A CPO is created and converted to a Sales Order.     |
| 2    | The Sales Order is submitted by Logistics/Finance and reaches **TO BILL** status.                                       | Sales Order status shows **TO BILL**.                                                  |
| 3    | Send the **same order again** via chatbot — same customer and same PO Number **"PO-001"**.                              | A warning appears — this order already exists. The duplicate is blocked and not saved. |
| 4    | Send a new order for the same customer but with a **different PO Number "PO-002"**.                                     | Order is accepted. A new CPO and Sales Order are created. No warning shown.            |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 9 — Manage Sales Orders on the Web App

*Who tests this: **Noor Aili** (Logistics) or **Miss Wong** (Finance) for SO creation; **Ng Tze Chien** (Sales Manager) for view-only check*

**Note:** Sales Manager has view-only access to Sales Orders. SO creation and editing is done by Logistics (Noor Aili) or Finance (Miss Wong).

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in to the web app as **Noor Aili** (Logistics) or **Miss Wong** (Finance). | Your dashboard is visible. |
| 2 | Create a new Sales Order directly from the web app (not the chatbot). | A form appears. Fill in customer and product details. The order is saved with status **Draft**. |
| 3 | Open an existing Sales Order and change a quantity. | The change is saved. Updated quantity is shown. |
| 4 | Submit the Sales Order. | Status changes to **TO BILL**. The order is locked and ready for invoicing. |
| 5 | Log out. Log in as **Sales Manager** (Ng Tze Chien). Try to edit or create a Sales Order. | 🚫 Sales Manager cannot create or edit Sales Orders — view only. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 10 — Export Sales Order / Sales Invoice / Delivery Note as CSV

*Who tests this: **Miss Wong** (Finance)*

Finance exports these document types from MAIA as CSV files for downstream processing and checking.

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log into the web app. Open the **Sales Order** page. Export a Sales Order as **CSV**. | A CSV file is downloaded successfully. |
| 2 | Open the exported Sales Order CSV and check the contents. | File contains the Sales Order details, such as customer, line items, quantities, and prices. |
| 3 | Open the **Sales Invoice** page. Export a Sales Invoice as **CSV**. | A CSV file is downloaded successfully. |
| 4 | Open the exported Sales Invoice CSV and check the contents. | File contains the Sales Invoice details, such as customer, line items, quantities, and prices. |
| 5 | Open the **Delivery Note** page. Export a Delivery Note as **CSV**. | A CSV file is downloaded successfully. |
| 6 | Open the exported Delivery Note CSV and check the contents. | File contains the Delivery Note details, such as customer, line items, quantities, and delivery information. |

⚠️ **Note:** This test is to confirm that the required document types can be exported correctly as CSV from MAIA.

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 3 — Logistics: Deliveries and Stock Alerts

---

#### Test 11 — Create a Delivery Order and Picking List

*Who tests this: **Noor Aili** (Logistics)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in to the web app as **Noor Aili**. Open a submitted Invoice. Invoice status should be **UNPAID**. | Invoice record is visible. |
| 2 | Create a **Delivery Order (DO)** from the Invoice. Submit it. | Delivery Order is created and submitted. It shows the customer's delivery address, products, quantities, and a DO reference number. |
| 3 | From the Delivery Order, generate a **Picking List**. Submit it. | Picking List is created and submitted. It shows all items to pick from the warehouse with quantities. |
| 4 | Download both the DO and the Picking List. | Both documents download successfully as PDFs. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 11A — Delivery Note Batch Number Carries Over to Pick List

*Who tests this: **Noor Aili** (Logistics)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in to the web app as **Noor Aili**. Open a submitted Invoice and create a new **Delivery Order (DO)**. | Delivery Order opens successfully. |
| 2 | Add or review a batch-tracked item line, for example **ACETIC ACID**. In the **Batch Number** field, select a specific batch number such as **DUMMY-ACA030-01**. | The selected batch number is shown on the Delivery Order line item. |
| 3 | Submit the Delivery Order. | Delivery Order is submitted successfully and keeps the selected batch number. |
| 4 | From the same Delivery Order, generate a **Picking List**. | Picking List is created successfully from the Delivery Order. |
| 5 | Open the Picking List item section and check the batch number for the same item. | The same batch number selected on the Delivery Order is automatically carried over to the Picking List line item. |
| 6 | Submit the Picking List and reopen it if needed. | The Picking List remains saved correctly and the batch number still matches the Delivery Order. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 11B — Exact Selected Batch Number Stays Correct and Visible in Pick List

*Who tests this: **Noor Aili** (Logistics)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Create a new **Delivery Order** for a batch-tracked product that has more than 1 available batch number, for example **DUMMY-ACA030-01** and **300445**. | Delivery Order opens and item can be added or reviewed. |
| 2 | In the Delivery Order line item, select the second batch option instead of the first one. | The exact selected batch number is shown on the Delivery Order line item. |
| 3 | Generate a **Picking List** from that Delivery Order. | Picking List is created successfully. |
| 4 | Review the batch number shown on the Picking List line item. | The Picking List shows the exact same batch number selected on the Delivery Order, not another available batch. |
| 5 | Check whether the batch number is clearly visible for warehouse picking verification. | The batch number is visible and readable on the Picking List line item. |
| 6 | Compare the Picking List against the original Delivery Order. | Both records show the same batch number for the same item. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 12 — Stock Alerts (Out of Stock and Low Stock)

*Who tests this: **Noor Aili** (Logistics) and **Ng Tze Chien / Tam Ze Xin** (Sales Manager) — both should see the alerts*

| Step | What to do                                                                     | What you should see                                                                   |
| ---- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| 1    | Log in as **Noor Aili**. Check the notification area.                          | Notifications are visible.                                                            |
| 2    | Look for a product that has **zero stock**.                                    | An Out-of-Stock alert is shown for that product.                                      |
| 3    | Look for a product that is below the safety stock level.                       | A Low-Stock alert is shown for that product.                                          |
| 4    | Confirm the notification shows the product name and the current stock quantity. | Product name and quantity are correct on the alert.                                   |
| 5    | Log out. Log in as **Sales Manager** (Ng Tze Chien). Check the same alerts.   | Both Out-of-Stock and Low-Stock alerts are visible to Sales Manager as well.          |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 13 — Delivery Delay Reminder

*Who tests this: **Noor Aili** (Logistics)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in as **Noor Aili**. Find an Invoice where no Delivery Order has been created yet, and it has been open for more than the allowed number of days. | Invoice identified. |
| 2 | Check the daily digest or notification area. | A delivery delay alert is shown for that Invoice — flagging that no DO has been created. |

⚠️ **Note:** If you cannot find an overdue Invoice to test this, please contact Gareth to set one up.

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

#### Test 14 — All Users Can Log In

*Who tests this: **Everyone** — all 8 users log in with their own account*

| Step | What to do                                                                                | What you should see                                            |
| ---- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1    | Open https://maia-fe-holsen.vercel.app/login in **Google Chrome** on a laptop or desktop. | The MAIA login page loads.                                     |
| 2    | Each person logs in using their **assigned email and password** from the table above.     | Login is successful. Your workspace and dashboard are visible. |

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

#### Test 15 — Sales Manager Access Check

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Quotation**. | ✅ You can create, edit, and submit Quotations. After submit, status shows **OPEN**. |
| 2 | Try to create and submit a **Purchase Order**. | ✅ You can create, edit, and submit Purchase Orders. |
| 3 | Try to create a new **Sales Order**. | 🚫 You cannot create a Sales Order — view only. No create button visible. |
| 4 | Try to submit (finalise) an **Invoice**. | 🚫 You cannot submit an Invoice — view only. |
| 5 | Try to create a **Delivery Order**. | 🚫 You cannot create a Delivery Order — view only. |
| 6 | Try to open the **Picking List**. | 🚫 Picking List is not visible or accessible. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 16 — Logistics / Operations Access Check

*Who tests this: **Noor Aili** (Logistics — Operations)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Sales Order**. | ✅ You can create, edit, and submit Sales Orders. After submit, status shows **TO BILL**. |
| 2 | Try to create and submit a **Delivery Order**. | ✅ You can create, edit, and submit Delivery Orders. |
| 3 | Try to create and manage a **Picking List**. | ✅ You can create, edit, and submit Picking Lists. |
| 4 | Try to view **Inventory** (stock levels). | ✅ Inventory page is accessible and shows stock quantities. |
| 5 | Try to **create** an Invoice from a **TO BILL** Sales Order. | ✅ You can create and edit Invoices. Invoice is saved but stays in **Draft**. |
| 6 | Try to **submit (finalise)** the Invoice you just created. | 🚫 Submit button is not available — Invoice submit is Finance only. |
| 7 | Try to create a **Quotation**. | 🚫 You cannot create a Quotation — view only. No create button visible. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 17 — Logistics / Procurement Access Check

*Who tests this: **Intan Atikah** (Logistics — Procurement)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to submit (approve) a **Sales Order**. | ✅ You can submit/approve Sales Orders. |
| 2 | Try to submit (approve) a **Delivery Order**. | ✅ You can submit/approve Delivery Orders. |
| 3 | Try to create a new **Incoming goods** record (goods received from supplier). | ✅ You can create and edit Incoming records. |
| 4 | Try to open the **Picking List**. | 🚫 Picking List is not visible or accessible. |
| 5 | Try to submit (finalise) an **Invoice**. | 🚫 You cannot finalise an Invoice. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 18 — Logistics / Production Access Check

*Who tests this: **Murugesu** (Logistics — Production)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to view the **Picking List**. | ✅ You can view the Picking List. |
| 2 | Try to view **Inventory** (stock levels). | ✅ You can view inventory. |
| 3 | Try to create or submit a **Sales Order** or **Delivery Order**. | 🚫 Not available — you cannot create or submit these documents. |
| 4 | Try to open **Quotations**, **Invoices**, or **Purchase Orders**. | 🚫 Not visible or accessible. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 19 — Finance Manager Access Check

*Who tests this: **Miss Wong** (Finance)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and finalise an **Invoice**. | ✅ You can create, edit, and submit Invoices. After submit, status shows **UNPAID**. |
| 2 | Try to create and submit a **Payment / Receipt**. | ✅ You can create and submit Receipts. Invoice moves to **PAID** when fully paid. |
| 3 | Try to create and submit a **Sales Order**. | ✅ You can create, edit, and submit Sales Orders. After submit, status shows **TO BILL**. |
| 4 | Try to create and submit a **Delivery Order**. | ✅ You can create, edit, and submit Delivery Orders. |
| 5 | Export an **Invoice**, a **Credit Note**, and a **Debit Note** as CSV files. | ✅ All three export successfully as CSV files. |
| 6 | Try to open the **Picking List**. | 🚫 Picking List is not visible or accessible. |
| 7 | Try to create a new **Incoming goods** record. | 🚫 You cannot create Incoming records — view only. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 20 — Admin Access Check

*Who tests this: **Ong Siow Chui** or **Tam Ze Xin** (Admin)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Quotation**, **Sales Order**, **Invoice**, and **Delivery Order**. | ✅ Full access to all of these. |
| 2 | Try to create and manage a **Picking List**. | ✅ Full access. |
| 3 | Try to create an **Incoming goods** record. | ✅ Full write access. |
| 4 | Try to submit a **Payment / Receipt**. | ✅ You can submit Receipts. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 21 — System Admin Access Check

*Who tests this: **Chin Zhao Heng** (System Admin)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Quotation**, **Sales Order**, **Invoice**, and **Delivery Order**. | ✅ Full access to all of these. |
| 2 | Try to create and manage a **Picking List**. | ✅ Full access. |
| 3 | Try to submit a **Payment / Receipt**. | ✅ You can submit Receipts. |
| 4 | Try to open **User Management** (add or edit user accounts). | ✅ User management is accessible — you can view and manage user accounts. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 22 — Role Approval Flow

*Who tests this: **All roles** — coordinate as a group across all steps*

**Part A — Quotation & Purchase Order (Sales Manager submits)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 1 | **Ng Tze Chien / Tam Ze Xin** (Sales Manager) | Create a new Quotation and click Submit. | Quotation status changes to **OPEN**. |
| 2 | **Ng Tze Chien / Tam Ze Xin** (Sales Manager) | Create a new Purchase Order and click Submit. | Purchase Order is submitted and saved. |

**Part B — Sales Order submission (Logistics and Finance can create and submit)**

**Note:** Sales Manager has view-only access on Sales Orders — SO drafts are created by Logistics or Finance.

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 3 | **Miss Wong** (Finance) | Create a new Sales Order — leave it in **Draft**. Do not submit. | Sales Order is saved. Status shows **Draft**. |
| 4 | **Noor Aili** (Logistics) | Open the Draft Sales Order. Click Submit. | Sales Order status changes to **TO BILL**. Noor Aili can submit. |
| 5 | **Noor Aili** (Logistics) | Create a second new Sales Order — leave it in **Draft**. | Sales Order is saved. Status shows **Draft**. |
| 6 | **Intan Atikah** (Logistics — Procurement) | Open the second Draft Sales Order. Click Submit. | Sales Order status changes to **TO BILL**. Intan can submit (view + submit only — cannot create or edit). |
| 7 | **Noor Aili** (Logistics) | Create a third new Sales Order — leave it in **Draft**. | Sales Order is saved. Status shows **Draft**. |
| 8 | **Miss Wong** (Finance) | Open the third Draft Sales Order. Click Submit. | Sales Order status changes to **TO BILL**. Miss Wong can submit. |

**Part C — Delivery Order submission (Logistics and Finance can submit)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 9 | **Noor Aili** (Logistics) | Create a Delivery Order from one of the **TO BILL** Sales Orders. Click Submit. | Delivery Order is submitted. Noor Aili can create and submit. |
| 10 | **Intan Atikah** (Logistics — Procurement) | Open a different Delivery Order that is still in Draft. Click Submit. | Delivery Order is submitted. Intan can submit but not create. |
| 11 | **Miss Wong** (Finance) | Open another Draft Delivery Order. Click Submit. | Delivery Order is submitted. Miss Wong can submit. |

**Part D — Pick List submission (Logistics — Noor Aili)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 12 | **Noor Aili** (Logistics) | Create and submit a Pick List from a confirmed Delivery Order. | Pick List is submitted. Noor Aili has full access to Pick Lists. |

**Part E — Invoice submission (Finance submits)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 13 | **Miss Wong** (Finance) | Open a **TO BILL** Sales Order. Create an Invoice and click Submit. | Invoice status changes to **UNPAID**. |

**Part F — Receipt / Payment submission (Finance creates; Finance and Admin can submit)**

**Note:** Admin can submit Receipts but cannot create them. Finance (Miss Wong) creates the Receipt; Admin can then submit it.

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 14 | **Miss Wong** (Finance) | Create a Receipt against the **UNPAID** Invoice from Step 13. Enter the full amount. Submit it. | Receipt is submitted. The Invoice status changes to **PAID**. |
| 15 | **Miss Wong** (Finance) | Create a second Receipt against a different **UNPAID** Invoice — leave it in **Draft**. Do not submit. | Receipt is saved. Status shows **Draft**. Invoice still shows **UNPAID**. |
| 16 | **Ong Siow Chui** (Admin) | Open the **Draft** Receipt from Step 15. Click Submit. | Receipt is submitted. Admin can submit Receipts but cannot create them. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:** (coordinate across team)
**Date:**

**Notes (note the step number if any step failed):**


---

### Group 6 — Poison Signed Order (PSO)

**What is this?** Holsen requires to attach a signed Poison Signed Order (PSO) form to every delivery that contains poison products. MAIA generates this form automatically when needed.

---

#### Test 23 — Poison Signed Order (PSO) — Full Test

*Who tests this:  **Noor Aili** (Logistics) 

| Step | What to do                                                                                                                      | What you should see                                                                                                                                                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Find a product in the catalogue that is not marked as Poison. Turn on the Poison flag and save.                                 | The Poison flag is saved. The system records a log of who made the change and when.                                                                                                                               |
| 2    | Try to change the Poison flag on the same product.                                                                              | 🚫 The Poison flag cannot be changed — it is not editable for Sales Manager.                                                                                                                                      |
| 3    | Create a Delivery Order that contains **only non-poison products**. Generate the PDF.                                           | PDF is generated. **No PSO is attached** — the delivery has no poison items.                                                                                                                                      |
| 4    | Create a second Delivery Order that includes **at least 1 poison product**. Generate the PDF.                                   | PDF is generated. It contains the Delivery Order pages first, followed by the **PSO form** appended at the end — all in one PDF.                                                                                  |
| 5    | Create a third Delivery Order with a **mix of poison and non-poison products** (e.g., 2 poison + 3 regular). Generate the PDF.  | PSO is attached. The PSO only lists the **poison products** — the non-poison products do not appear on the PSO. The DO itself still shows all products.                                                           |
| 6    | Open the PSO from Step 5. Check the top section (FROM).                                                                         | Shows **Holsen Interchem Sdn Bhd** name and address — Holsen is the sender.                                                                                                                                       |
| 7    | Check the TO section.                                                                                                           | Shows the **customer's name, address, and phone number** — the customer is the recipient.                                                                                                                     |
| 8    | Check the table of items on the PSO.                                                                                            | Lists each poison product with: item number, description, quantity, and unit/packing.                                                                                                                             |
| 9    | Check the bottom of the PSO.                                                                                                    | Contains a **Signature and Company Stamp** section for the customer to sign. A blank Remarks field is present. A note about returning a signed copy is shown. The MAIA footer shows the generation date and time. |
| 10   | Download the PSO. Then upload a scanned copy back to the Delivery Order and select **"Signed PSO Copy"** as the document type.  | Download works. Signed copy uploads successfully with the correct label. Miss Wong can view the PSO.                                                                                                              |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (if any step failed, note the step number and describe what happened):**


---

## 7. Tax Reference / Certificate (C1 & C3)

---

#### Test 24 — Create C1 Certificate Manually

*Who tests this: **[Admin]** or **[Sales Manager]***

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Go to Customer Details → Certificates tab → Click **Create** | Create button is visible; form opens |
| 2 | Select Type: **C1** → Fill in: Certificate Title, Tax Registration Number, Status, Customer Address, Customer Contact | All fields accept input; C1 shows 5 item category sections (Raw Materials, Components, Packaging Materials, Manufacturing Aids, Cleanroom Equipment) |
| 3 | Add at least one item row — enter HS Code and Description | Row is added to the table |
| 4 | Click **Submit** | Certificate saved; appears in the listing with type C1; detail view shows all entered fields including HS Code, Description, Classification columns |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 25 — Upload C1 Certificate via PDF

*Who tests this: **[Admin]** or **[Sales Manager]***
*Channel: **FE + Chatbot***

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | **Either FE or chatbot:** FE path — Certificates tab → Click **Upload**. Chatbot path — open **[chatbot]** and upload a C1 certificate PDF with a message (e.g. *"attach C1 cert for [Customer Name]"*). | Upload dialog/chatbot intake is available |
| 2 | Submit the C1 certificate PDF from the chosen channel (FE: confirm type as C1 → **Submit**; chatbot: send file + message). | System shows processing indicator |
| 3 | Wait for processing to complete | Certificate appears in the listing; certificate type, tax registration number, and dates are populated from the PDF |
| 4 | **Either FE or chatbot:** FE path — click the certificate row to open detail view. Chatbot path — ask chatbot to check/show the certificate detail for the uploaded cert. | Certificate detail is returned (in FE detail page or chatbot response); parent fields are populated and reference item tables are empty (PDF-uploaded certificates store raw extracted data separately) |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 26 — Apply C1 Certificate on Sales Order — All Items Covered

*Who tests this: **[Sales Manager]** or **[Finance / Logistics]***
*Channel: **FE + Chatbot***

**Part A — Get the Sales Order via Chatbot**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the **[chatbot]** → create a new **Sales Order** for the customer. | Chatbot confirms the Sales Order flow is started for the selected customer |
| 2 | Check the customer's available certificate in chatbot → select/apply the certificate. | Selected certificate is shown as applied to the order |
| 3 | Add items that are covered by the selected certificate and assign quantity for each item. | Covered items are accepted with entered quantities |
| 4 | Try to submit the order. | Submission succeeds; certificate remains linked and global tax is disabled |

**Part B — Get the Sales Order via Web App**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in to the web app → go to Sales Orders → create a new Sales Order | New SO form opens |
| 2 | Select customer → in the **Biller** section, select tax certificate from the certificate dropdown (no Tax Reference section). | Certificate is applied from Biller section |
| 3 | Click the **View More** icon for the selected certificate. | Certificate details (title, tax registration number, dates, status) are shown |
| 4 | Add items that are all listed in the selected certificate, assign quantity, then try submit. | Submission succeeds and global tax is disabled |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 27 — Apply C1 Certificate — Partial Coverage + Save

*Who tests this: **[Sales Manager]** or **[Finance / Logistics]***
*Channel: **FE + Chatbot***

**Part A — Get the Sales Order via Chatbot**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the **[chatbot]** → create a new **Sales Order** for the customer. | Chatbot confirms the Sales Order flow is started for the selected customer |
| 2 | Check the customer's available certificate in chatbot → select/apply the certificate. | Selected certificate is shown as applied to the order |
| 3 | Add a mix of items — some covered by the selected certificate and at least one not covered — then assign quantity. | Covered items are accepted; uncovered item remains taxable |
| 4 | For uncovered item, adjust manual tax in **Tax on Items** field, then try submit. | Order submits successfully; covered items use cert exemption and uncovered item keeps manual tax |

**Part B — Get the Sales Order via Web App**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in to the web app → create a new Sales Order → select customer. | New SO form opens for selected customer |
| 2 | In the **Biller** section, select tax certificate from certificate dropdown (no Tax Reference section). | Certificate is applied from Biller section |
| 3 | Add a mix of items (some covered by selected certificate, at least one not covered) and assign quantity. | Covered items show cert exemption; uncovered item remains editable for tax |
| 4 | On uncovered item, manually set tax in **Tax on Items** field, then click **Save**. | Order saves successfully with cert-exempt covered items and manual tax on uncovered item |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 28 — Create C3 Certificate Manually

*Who tests this: **[Admin]** or **[Sales Manager]***

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Go to Customer Details → Certificates tab → Click **Create** | Form opens |
| 2 | Select Type: **C3** → Fill in: Certificate Title, Tax Registration Number, Status, Eligible Customer, Company Address, Customer Contact, Customer Address | C3-specific fields are visible; 5 item category sections shown |
| 3 | Add at least one item row with HS Code and Description | Row saved in table |
| 4 | Click **Submit** | C3 certificate saved; detail view shows eligible customer, company address, and 5 item category sections with HS Code, Description, Classification, Effective Date columns |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 29 — Upload C3 Certificate via PDF

*Who tests this: **[Admin]** or **[Sales Manager]***
*Channel: **FE + Chatbot***

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | **Either FE or chatbot:** FE path — Certificates tab → Click **Upload**. Chatbot path — open **[chatbot]** and upload a C3 certificate PDF with a message (e.g. *"attach C3 cert for [Customer Name]"*). | Upload dialog/chatbot intake is available |
| 2 | Submit the C3 certificate PDF from the chosen channel (FE: **Submit**; chatbot: send file + message). | System processes the file; loading indicator shown |
| 3 | Wait for processing | Certificate appears in listing with correct type and tax registration number from the PDF |
| 4 | **Either FE or chatbot:** FE path — click the certificate to open detail view. Chatbot path — ask chatbot to check/show the certificate detail for the uploaded cert. | Certificate detail is returned (in FE detail page or chatbot response); parent fields (type, tax reg no, dates) populated; reference item tables are empty |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 30 — Apply C3 Certificate on Sales Order — All Items Covered

*Who tests this: **[Sales Manager]** or **[Finance / Logistics]***
*Channel: **FE + Chatbot***

**Part A — Get the Sales Order via Chatbot**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the **[chatbot]** → create a new **Sales Order** for the customer. | Chatbot confirms the Sales Order flow is started for the selected customer |
| 2 | Check the customer's available certificate in chatbot → select/apply the active C3 certificate. | Selected C3 certificate is shown as applied to the order |
| 3 | Add items that are all covered by the selected C3 certificate and assign quantity. | Covered items are accepted with entered quantities |
| 4 | Try to submit the order. | Submission succeeds; certificate remains linked and global tax is disabled |

**Part B — Get the Sales Order via Web App**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in to the web app → create a new Sales Order → select customer. | New SO form opens for selected customer |
| 2 | In the **Biller** section, select the active C3 certificate from the certificate dropdown (no Tax Reference section). | Certificate is applied from Biller section |
| 3 | Click the **View More** icon for the selected certificate. | Certificate details (title, tax registration number, dates, status) are shown |
| 4 | Add items that are all covered by the selected C3 certificate, assign quantity, then click **Save**. | Order saves successfully; certificate stays linked and global tax is disabled |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 31 — C3 Certificate — Ineligible Items Removal Prompt

*Who tests this: **[Sales Manager]** or **[Finance / Logistics]***
*Channel: **FE + Chatbot***

**Part A — Get the Sales Order via Chatbot**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the **[chatbot]** → create a new **Sales Order** for the customer. | Chatbot confirms the Sales Order flow is started for the selected customer |
| 2 | Check the customer's available certificate in chatbot → select/apply the active C3 certificate. | Selected C3 certificate is shown as applied to the order |
| 3 | Add a mix of items — some covered by selected C3 certificate, at least one not covered — and assign quantity. | Mixed items are added; uncovered item is identified as not covered |

**Part B — Get the Sales Order via Web App**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in to the web app → create a new Sales Order → select customer. | New SO form opens for selected customer |
| 2 | In the **Biller** section, select the active C3 certificate from certificate dropdown (no Tax Reference section). | Certificate is applied from Biller section |
| 3 | Add a mix of items (some covered by selected C3 certificate, at least one not covered). | Mixed items are added; uncovered item remains not covered |

**Part C — Apply C3 Certificate and Test Removal Prompt (both paths continue here)**

| Step | What to do                                                                                                                                  | What you should see                                                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Confirm/select the C3 certificate from the **Biller** section certificate dropdown.                                                         | A confirmation prompt appears listing items not covered by the certificate: *"The following items are not covered by this certificate and will be removed. Continue?"* |
| 2    | Try to submit the SO                                                                                                                        | Ineligible items are removed from the order; C3 certificate is applied; remaining items are covered Show the acknowledgement prompt                                    |
| 3    | Repeat Parts A or B to create a new order with the same mix of items → select/confirm the C3 certificate again → this time click **Cancel** | Certificate selection is reverted; all original items remain on the order unchanged                                                                                    |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 32 — Link Certificate to CPO at Upload Time (C1 + C3)

*Who tests this: **[Admin]** or **[Sales Manager]***
*Channel: **FE + Chatbot***

**Part A — via Chatbot**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the **[chatbot]** → upload a CPO PDF with a message that includes the certificate reference (e.g. *"CPO for [Customer Name], attach cert [Certificate ID]."*) | Chatbot confirms it received the CPO and the certificate reference |
| 2 | Log in to the web app → open the CPO created by the chatbot | CPO is visible; in the **Biller** section, certificate field shows the linked certificate with type, tax registration number, and Active status |

**Part B — via Web App**

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in to the web app → upload a new CPO → in the **Biller** section certificate dropdown, select a C3 certificate → Submit | CPO created; Biller section shows the C3 certificate linked with full details |
| 2 | Repeat with a C1 certificate | C1 certificate linked correctly; same detail display |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 33 — CPO with Certificate Converts to SO — Cert Carries Over

*Who tests this: **[Admin]** or **[Sales Manager]***
*Channel: **FE only***

*Continue from Test 32 — a CPO with a certificate already linked.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open the CPO that has a certificate linked | CPO is visible with the certificate in the **Biller** section certificate field |
| 2 | Convert the CPO to a **Sales Order** | Sales Order is created |
| 3 | Open the new Sales Order → check the **Biller** section certificate field | The same certificate from the CPO is shown on the SO with the correct type, tax registration number, and dates; no need to re-select the certificate manually |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 34 — SO Submit Blocked — C3 Missing Required Attachments

*Who tests this: **[Sales Manager]** or **[Finance / Logistics]***
*Channel: **FE + Chatbot***

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | **Either FE or chatbot start:** create/get an order from chatbot or FE, then open the Sales Order in FE with a C3 certificate selected. | C3 certificate is shown in the Tax Reference section |
| 2 | Do **not** upload the PO attachment or appointment letter → click **Save** | Save is blocked; an error appears indicating that PO attachment and appointment letter are required for C3 orders |
| 3 | Upload the required attachments (PO attachment + appointment letter) → click **Save** again | Order saves successfully with all required documents attached |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 35 — SO Submit Blocked — Item HS Code Not in Certificate

*Who tests this: **[Sales Manager]** or **[Finance / Logistics]***
*Channel: **FE + Chatbot***

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | **Either FE or chatbot start:** create/get an order from chatbot or FE, then open the Sales Order in FE with a C1 or C3 certificate selected. | Certificate is shown in the Tax Reference section |
| 2 | Add a line item whose HS code is **not** listed in the certificate's reference data → click **Save** | Save is blocked; error indicates the item's HS code is not covered by the certificate |
| 3 | Remove the ineligible item (or switch to a certificate that covers it) → click **Save** | Order saves successfully |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test 36 — Tagging and Trading Item Price Prompt Alert

*Who tests this: **Ng Tze Chien** or **Tam Ze Xin** (Sales Manager)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open any SO, SI, or Item record → click the **right comment sidebar** → under **Tags**, click **Manage** → type a new tag name in the input field → click the **Add** (`+`) button. | New tag is created and available in the system. |
| 2 | On the same document, apply a tag at the **doctype level**: in the Tags panel, search for the tag → click `+` to apply it. | The tag appears **below the doctype ID** (e.g., below the SO number) on the document. Repeat with up to 4 tags — a maximum of 4 doctype-level tags can be applied. |
| 3 | Open a Sales Order → add a line item that has the **Trading** attribute tag. | Under the SKU cell for that line item, the **Trading** tag is displayed. |
| 4 | Observe the page after adding the Trading item. | A **toast message** appears, alerting the user to manually input the unit price — the unit price defaults to **RM 0** for Trading items. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

## Results Summary

| Test # | What was tested | Result (Pass / Fail / Issue) | Tested by | Date |
|--------|----------------|------------------------------|-----------|------|
| Test 1 | Send order by text message | | | |
| Test 2 | Send order by photo | | | |
| Test 3 | Send order by PDF | | | |
| Test 4 | Pricing and stock check | | | |
| Test 5 | Review CPO and convert to Sales Order (chatbot photo/PDF → web app) | | | |
| Test 6 | Generate documents (Quotation → SO → Proforma Invoice → Invoice) | | | |
| Test 7 | Create Credit Note and Debit Note (Finance) | | | |
| Test 8 | Duplicate order is blocked | | | |
| Test 9 | Manage Sales Orders on web app (Logistics/Finance create; Sales Manager view only) | | | |
| Test 10 | Export Sales Order / Sales Invoice / Delivery Note as CSV (Finance) | | | |
| Test 11 | Create Delivery Order and Picking List | | | |
| Test 11A | Delivery Order batch number carries over to Pick List | | | |
| Test 11B | Exact selected batch number stays correct and visible in Pick List | | | |
| Test 12 | Stock alerts (Out of Stock / Low Stock) | | | |
| Test 13 | Delivery delay reminder | | | |
| Test 14 | All users can log in | | | |
| Test 15 | Sales Manager (Ng Tze Chien / Tam Ze Xin) — access check | | | |
| Test 16 | Logistics / Noor Aili — access check | | | |
| Test 17 | Logistics / Intan — access check | | | |
| Test 18 | Logistics / Murugesu — access check | | | |
| Test 19 | Finance / Miss Wong — access check | | | |
| Test 20 | Admin — access check | | | |
| Test 21 | System Admin / Chin Zhao Heng — access check | | | |
| Test 22 | Role approval flow (QT → PO → SO → DO → PL → INV → RCT) | | | |
| Test 23 | Poison Signed Order (PSO) — full test | | | |
| Test 24 | Create C1 certificate manually | | | |
| Test 25 | Upload C1 certificate via PDF | | | |
| Test 26 | Apply C1 certificate on Sales Order — all items covered | | | |
| Test 27 | Apply C1 certificate — partial coverage + save | | | |
| Test 28 | Create C3 certificate manually | | | |
| Test 29 | Upload C3 certificate via PDF | | | |
| Test 30 | Apply C3 certificate on Sales Order — all items covered | | | |
| Test 31 | C3 certificate — ineligible items removal prompt | | | |
| Test 32 | Link certificate to CPO at upload time (C1 + C3) | | | |
| Test 33 | CPO with certificate converts to SO — cert carries over | | | |
| Test 34 | SO submit blocked — C3 missing required attachments | | | |
| Test 35 | SO submit blocked — item HS code not in certificate | | | |
| Test 36 | Tagging and trading item price prompt alert | | | |

**Total: 36 tests**

| Pass | Fail | Issue |
|------|------|-------|
| | | |

---

## Overall Feedback

**Any general comments about the system?**



**Any features that were confusing or difficult to use?**



---

## Sign-Off

By signing below, the Holsen team confirms that UAT has been completed and the results above are accurate.

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

- [[Holsen SOW Feature Checklist]]
- [[SOW for MAIA Holsen]]
- [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)
- [[2026-03-16-ending-phase-agenda]]

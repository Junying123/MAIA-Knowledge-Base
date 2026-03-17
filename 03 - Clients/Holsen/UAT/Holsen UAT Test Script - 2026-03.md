---
owner: Gareth
status: draft
last_reviewed: 2026-03-17
client: Holsen
uat_round: 1
---

# MAIA User Acceptance Test (UAT) — Holsen
## March 2026 · Round 1

---

## Before You Start

**UAT Date:** [To be confirmed]
**Web App:** https://maia-fe-holsen.vercel.app/login
**Chatbot (during UAT):** Telegram — @maia_holsen_bot
![[Pasted image 20260317183109.png|179]]
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
5. If you are unsure or something is not loading, mark it **Issue** and contact Gareth.
6. Sign off at the end when you are done.

**Result options:**
- ✅ **Pass** — Everything worked as described
- ❌ **Fail** — Something did not work correctly
- ⚠️ **Issue** — Could not complete the test (e.g., button missing, page not loading)

---

## Setup Checklist *(For MAIA team to complete before UAT starts)*

- [ ] All user accounts created and login details filled in above
- [ ] Customer records loaded (at least 3 test customers with name and address)
- [ ] Product catalogue loaded (at least 5 products with descriptions and pricing)
- [ ] Minimum selling prices configured per product
- [ ] Stock quantities loaded (at least 1 product at zero stock, 1 at low-stock level)
- [ ] Low-stock threshold configured
- [ ] Delivery delay reminder threshold configured
- [ ] At least 1 product flagged as Poison in the system
- [ ] Test customer has full address and phone number (needed for Poison form)

---

## Tests

---

### Group 1 — Chatbot: Sending Orders
*Who tests this: Sales team*

---

#### Test 1 — Send an Order by Text Message

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open Telegram and search for **@maia_holsen_bot**. Start a chat. | The chatbot replies and is ready to receive your message. |
| 2 | Type a message like: *"Customer: [Customer Name]. Order: 10 drums Copper Sulfate, 5 bags Sodium Hydroxide."* | Chatbot receives the message. |
| 3 | Wait a moment. | The chatbot shows the order details it extracted — customer name, products, and quantities. |
| 4 | Check that the details are correct. | Customer name, product names, and quantities match what you typed. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 2 — Send an Order by Photo

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Take a photo of a handwritten order or a printed PO. | Photo is ready on your phone. |
| 2 | Send the photo to **@maia_holsen_bot** on Telegram. | Chatbot accepts the photo and starts processing. |
| 3 | Wait a moment. | The chatbot shows the order details it read from the photo — customer name, products, and quantities. |
| 4 | Check that the details match the photo. | Information extracted is correct. If anything is wrong, you can edit before confirming. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 3 — Send an Order by PDF

| Step | What to do                                                                                                                                  | What you should see                                                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Prepare a customer PO in PDF format.                                                                                                        | PDF file is ready on your phone or computer.                                                                                                                           |
| 2    | Open **@maia_holsen_bot** on Telegram. Send the PDF with a short message, e.g. *"pls process this for CPO"*.                                | Chatbot replies: *"The upload was successful and I am handling it in the background."*                                                                                 |
| 3    | Wait a moment.                                                                                                                              | Chatbot replies again: *"Document processing is complete."* It identifies the file as a Purchase Order and gives you a CPO reference number (e.g. **CPO-2026-00022**). |
| 4    | Click the link in the chatbot message to open the web app                                                                                   | The CPO record opens. It shows the customer name, products, and quantities extracted from the PDF.                                                                     |
| 5    | Review the extracted details carefully. Check that customer name, product names, and quantities are correct. Fix anything that looks wrong. | All details match the original PDF. Any corrections can be made before the next step.                                                                                  |
| 6    | Click **"Create Sales Order"** from the CPO.                                                                                                | A Sales Order is created from the CPO. The CPO status changes to **Success**.                                                                                          |

> ⚠️ **Note:** The chatbot reads the PDF automatically, but always review the details in step 5 before creating the Sales Order. If a product name or quantity looks wrong, fix it first.

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 4 — Pricing and Stock Check

*Continue from Test 1, 2, or 3.*

| Step | What to do                                                                | What you should see                                                  |
| ---- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1    | After the chatbot shows the extracted order, proceed to the pricing step. | Chatbot asks you to confirm or enter the price for each item.        |
| 2    | Enter a price **above** the minimum selling price for one item.           | Price is accepted. No warning shown.                                 |
| 3    | Enter a price **below** the minimum selling price for another item.       | Chatbot shows a warning or blocks the price — minimum price not met. |
| 4    | Correct the price to be at or above the minimum.                          | Price accepted. You can continue.                                    |
| 5    | Check the stock quantity shown for a product.                             | Available stock quantity is displayed next to the product.           |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 5 — Generate Documents (Quotation → Sales Order → Invoice)

*Continue from the order created in Test 4.*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Generate a **Quotation** from the chatbot. | A Quotation document is created. It shows the customer name, products, quantities, prices, and date. |
| 2 | Convert the Quotation to a **Sales Order**. | A Sales Order is created. Prices from the Quotation are carried over — no changes. A Sales Order number is assigned. |
| 3 | From the Sales Order, generate a **Proforma Invoice**. | A Proforma Invoice is created. It shows the same details and has its own reference number. |
| 4 | Generate the final **Invoice** from the Sales Order. | An Invoice is created with a unique invoice number. It shows all billing details. |
| 5 | Download any of the documents above. | Document downloads successfully as a PDF. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 6 — Create a Credit Note

*Use an existing Invoice from Test 5.*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open an existing Invoice. | Invoice record is visible. |
| 2 | Look for the option to create a **Credit Note** and click it. | Credit Note creation screen appears. |
| 3 | Fill in the reason and amount, then confirm. | Credit Note is created. It references the original Invoice and shows the credited amount. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

### Group 2 — Web App: Managing Orders
*Who tests this: Sales team*

---

#### Test 7 — Duplicate Order is Blocked

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Create a Sales Order for a customer with PO Number **"PO-001"**. | Order is created successfully. |
| 2 | Try to create another order for the **same customer** with the **same PO Number "PO-001"**. | System shows a warning — this order already exists. The duplicate is blocked. |
| 3 | Create a new order for the same customer but with a **different PO Number "PO-002"**. | Order is created successfully — no warning shown. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 8 — Manage Sales Orders on the Web App

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in to the web app at https://maia-fe-holsen.vercel.app/login as **Sales Manager**. | Your Sales dashboard is visible. |
| 2 | Create a new Sales Order directly from the web app (not the chatbot). | A form appears. You can fill in customer and product details. Order is saved. |
| 3 | Open an existing Sales Order and change a quantity. | The change is saved. Updated quantity is shown. |
| 4 | Check the status of the order (e.g., Draft, Submitted). | Current status is visible on the order. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 9 — Export a Sales Order to CSV

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open a completed Sales Order on the web app. | Sales Order record is open. |
| 2 | Click the export or download button to get a **CSV file**. | A CSV file is downloaded to your computer. |
| 3 | Open the CSV file. | File contains: customer name, address, delivery type, all products, and quantities. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

### Group 3 — Logistics: Deliveries and Stock Alerts
*Who tests this: Noor Aili*

---

#### Test 10 — Create a Delivery Order and Picking List

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open a confirmed Invoice on the web app (logged in as **Noor Aili**). | Invoice record is visible. |
| 2 | Create a **Delivery Order (DO)** from the Invoice. | Delivery Order is created. It shows the customer's delivery address, products, quantities, and a DO reference number. |
| 3 | From the Delivery Order, generate a **Picking List**. | Picking List is created. It shows all items to pick from the warehouse with quantities. |
| 4 | Download both the DO and the Picking List. | Both documents download successfully as PDFs. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 11 — Stock Alerts (Out of Stock and Low Stock)

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Check the notification area (logged in as **Noor Aili** or **Sales Manager**). | Notifications are visible. |
| 2 | Look for a product that has **zero stock**. | An Out-of-Stock alert is shown for that product. Both Logistics and Sales can see it. |
| 3 | Look for a product that is below the minimum stock level. | A Low-Stock alert is shown for that product. Both Logistics and Sales can see it. |
| 4 | Confirm the alert shows the product name and the current stock quantity. | Product name and quantity are correct on the alert. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

#### Test 12 — Delivery Delay Reminder

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Find an Invoice where no Delivery Order has been created yet, and it has been open for more than the allowed number of days. | Invoice identified. |
| 2 | Check the daily digest or notification area. | A delivery delay alert is shown for that Invoice — flagging that no DO has been created. |

> ⚠️ **Note:** If you cannot find an overdue Invoice to test this, please contact Gareth to set one up.

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

### Group 4 — Logging In
*Who tests this: Everyone*

---

#### Test 13 — All Users Can Log In

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open https://maia-fe-holsen.vercel.app/login in **Google Chrome** on a laptop or desktop. | The MAIA login page loads. |
| 2 | Each person logs in using their **assigned email and password** from the table above. | Login is successful. Your workspace and dashboard are visible. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

### Group 5 — What Each Person Can and Cannot Do
*Each person tests their own account. Check that you can do the things listed, and that you are blocked from things outside your role.*

---

#### Test 14 — Sales User (Ng Tze Chien / Tam Ze Xin)

Log in as **Sales User** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Quotation**. | ✅ You can create, edit, and submit Quotations. |
| 2 | Try to create and submit a **Purchase Order**. | ✅ You can create, edit, and submit Purchase Orders. |
| 3 | Try to create a new **Sales Order**. | 🚫 You cannot create a Sales Order — view only. |
| 4 | Try to submit (finalise) an **Invoice**. | 🚫 You cannot submit an Invoice — view only. |
| 5 | Try to create a **Delivery Order**. | 🚫 You cannot create a Delivery Order — view only. |
| 6 | Try to open the **Picking List**. | 🚫 Picking List is not visible or accessible. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 15 — Logistics / Operations (Noor Aili)

Log in as **Logistics (Noor Aili)** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Sales Order**. | ✅ You can create, edit, and submit Sales Orders. |
| 2 | Try to create and submit a **Delivery Order**. | ✅ You can create, edit, and submit Delivery Orders. |
| 3 | Try to create and manage a **Picking List**. | ✅ You can create, edit, and submit Picking Lists. |
| 4 | Try to view **Inventory** (stock levels). | ✅ You can view inventory. |
| 5 | Try to submit (finalise) an **Invoice**. | 🚫 You cannot finalise an Invoice. |
| 6 | Try to create a **Quotation**. | 🚫 You cannot create a Quotation — view only. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 16 — Logistics / Procurement (Intan Atikah)

Log in as **Logistics User (Intan Atikah)** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to submit (approve) a **Sales Order**. | ✅ You can submit/approve Sales Orders. |
| 2 | Try to submit (approve) a **Delivery Order**. | ✅ You can submit/approve Delivery Orders. |
| 3 | Try to create a new **Incoming goods** record (goods received from supplier). | ✅ You can create and edit Incoming records. |
| 4 | Try to open the **Picking List**. | 🚫 Picking List is not visible or accessible. |
| 5 | Try to submit (finalise) an **Invoice**. | 🚫 You cannot finalise an Invoice. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 17 — Logistics / Production (Murugesu)

Log in as **Logistics (Murugesu)** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to view the **Picking List**. | ✅ You can view the Picking List. |
| 2 | Try to view **Inventory** (stock levels). | ✅ You can view inventory. |
| 3 | Try to create or submit a **Sales Order** or **Delivery Order**. | 🚫 Not available — you cannot create or submit these documents. |
| 4 | Try to open **Quotations**, **Invoices**, or **Purchase Orders**. | 🚫 Not visible or accessible. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 18 — Finance Manager (Miss Wong)

Log in as **Finance Manager (Miss Wong)** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and finalise an **Invoice**. | ✅ You can create, edit, and finalise Invoices. |
| 2 | Try to create and submit a **Payment / Receipt**. | ✅ You can create and submit Receipts. |
| 3 | Try to create and submit a **Sales Order**. | ✅ You can create, edit, and submit Sales Orders. |
| 4 | Try to create and submit a **Delivery Order**. | ✅ You can create, edit, and submit Delivery Orders. |
| 5 | Try to open the **Picking List**. | 🚫 Picking List is not visible or accessible. |
| 6 | Try to create a new **Incoming goods** record. | 🚫 You cannot create Incoming records — view only. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 19 — Admin (Ong Siow Chui / Tam Ze Xin)

Log in as **Admin** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Quotation**, **Sales Order**, **Invoice**, and **Delivery Order**. | ✅ Full access to all of these. |
| 2 | Try to create and manage a **Picking List**. | ✅ Full access. |
| 3 | Try to create an **Incoming goods** record. | ✅ Full write access. |
| 4 | Try to submit a **Payment / Receipt**. | ✅ You can submit Receipts. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 20 — System Admin (Chin Zhao Heng)

Log in as **System Admin (Chin Zhao Heng)** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to create and submit a **Quotation**, **Sales Order**, **Invoice**, and **Delivery Order**. | ✅ Full access to all of these. |
| 2 | Try to create and manage a **Picking List**. | ✅ Full access. |
| 3 | Try to submit a **Payment / Receipt**. | ✅ You can submit Receipts. |
| 4 | Try to open **User Management** (add or edit user accounts). | ✅ User management is accessible — you can view and manage user accounts. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 21 — Sales Order Approval Flow

*This test requires two people: a Sales Manager and either Noor Aili or Miss Wong.*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in as **Sales Manager**. Create a new Sales Order. | Sales Order is created with status **Draft**. |
| 2 | Log out. Log in as **Noor Aili (Logistics)**. Open the Draft Sales Order. | The Sales Order is visible. A Submit/Approve button is available. |
| 3 | Submit/Approve the Sales Order. | Sales Order status changes to **Submitted** or **Approved**. |
| 4 | Confirm that a Delivery Order can now be created from this Sales Order. | The option to create a Delivery Order is now available. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes:**
>

---

### Group 6 — Poison Signed Order (PSO)
*Who tests this: Admin (Steps 1–2), Noor Aili (Steps 3–10)*

> **What is this?** Malaysian law (Poison License B) requires Holsen to attach a signed Poison Signed Order (PSO) form to every delivery that contains poison products. MAIA generates this form automatically when needed.

---

#### Test 22 — Poison Signed Order (PSO) — Full Test

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in as **Admin**. Find a product in the catalogue that is not marked as Poison. Turn on the Poison flag and save. | The Poison flag is saved. The system records a log of who made the change and when. |
| 2 | Log out. Log in as **Sales Manager**. Try to change the Poison flag on the same product. | 🚫 The Poison flag cannot be changed — it is not editable for Sales Manager. |
| 3 | Log out. Log in as **Noor Aili (Logistics)**. Create a Delivery Order that contains **only non-poison products**. Generate the PDF. | PDF is generated. **No PSO is attached** — the delivery has no poison items. |
| 4 | Create a second Delivery Order that includes **at least 1 poison product**. Generate the PDF. | PDF is generated. It contains the Delivery Order pages first, followed by the **PSO form** appended at the end — all in one PDF. |
| 5 | Create a third Delivery Order with a **mix of poison and non-poison products** (e.g., 2 poison + 3 regular). Generate the PDF. | PSO is attached. The PSO only lists the **poison products** — the non-poison products do not appear on the PSO. The DO itself still shows all products. |
| 6 | Open the PSO from Step 5. Check the top section (FROM). | Shows the **customer's name, address, and phone number**. |
| 7 | Check the TO section. | Shows **Holsen Interchem Sdn Bhd** name and address. |
| 8 | Check the table of items on the PSO. | Lists each poison product with: item number, description, quantity, and unit/packing. |
| 9 | Check the bottom of the PSO. | Contains a **Signature and Company Stamp** section for the customer to sign. A blank Remarks field is present. A note about returning a signed copy is shown. The MAIA footer shows the generation date and time. |
| 10 | Download the PSO. Then upload a scanned copy back to the Delivery Order and select **"Signed PSO Copy"** as the document type. Log in as Miss Wong and check she can view the PSO. | Download works. Signed copy uploads successfully with the correct label. Miss Wong can view the PSO. |

> **Your result:**
> ☐ Pass    ☐ Fail    ☐ Issue
>
> **Tested by:** _______________    **Date:** _______________
>
> **Notes (if any step failed, note the step number and describe what happened):**
>

---

## Results Summary

| Test # | What was tested | Result | Tested by | Date |
|--------|----------------|--------|-----------|------|
| Test 1 | Send order by text message | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 2 | Send order by photo | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 3 | Send order by PDF | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 4 | Pricing and stock check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 5 | Generate documents (Quotation → Invoice) | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 6 | Create a Credit Note | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 7 | Duplicate order is blocked | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 8 | Manage orders on the web app | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 9 | Export Sales Order to CSV | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 10 | Create Delivery Order and Picking List | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 11 | Stock alerts (Out of Stock / Low Stock) | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 12 | Delivery delay reminder | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 13 | All users can log in | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 14 | Sales Manager — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 15 | Logistics / Noor Aili — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 16 | Logistics / Intan — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 17 | Logistics / Murugesu — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 18 | Finance / Miss Wong — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 19 | Admin — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 20 | System Admin / Chin Zhao Heng — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 21 | Sales Order approval flow | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 22 | Poison Signed Order (PSO) — full test | ☐ Pass ☐ Fail ☐ Issue | | |

**Total: 22 tests**

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
|------|------|-----------|------|
| | | | |
| | | | |

**Overall outcome:**
☐ **Approved — Ready to go live**
☐ **Conditional — Go live with the following items to fix first:**

*Conditions:*


☐ **Not approved — Further fixes required before go live**

---

## See Also

- [[Feature Requests/Holsen SOW Feature Checklist]]
- [[Product/SOW for MAIA Holsen]]
- [[Meetings/2026-03-16-ending-phase-agenda]]

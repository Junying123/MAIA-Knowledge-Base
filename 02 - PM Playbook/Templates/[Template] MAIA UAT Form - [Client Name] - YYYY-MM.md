---
owner: [Your Name]
status: draft
last_reviewed: YYYY-MM-DD
client: [Client Name]
uat_round: [1]
---

# MAIA User Acceptance Test (UAT) — [Client Name]
## [Month Year] · Round [1]

---

## Before You Start

**UAT Date:** [To be confirmed]
**Web App:** [Web App URL]
**Chatbot (during UAT):** Telegram — [Bot Name / Handle]
**Chatbot (after go-live):** WhatsApp *(same features — WhatsApp setup is in progress)*

---

## Your Login Details

| Name | Email (Username) | Password |
| ---- | ---------------- | -------- |
| [Name] | [email@client.com] | [password] |
| [Name] | [email@client.com] | [password] |
| [Name] | [email@client.com] | [password] |

*Add or remove rows to match the number of test users.*

---

## How to Use This Document

1. Work through each test **in order** — some tests use data created in earlier steps.
2. For each step, do what is described and check that what you see matches the **"What you should see"** column.
3. After each test, tick your result and write any notes in the feedback box.
4. If something does not work as expected, mark it **Fail** and describe what happened.
5. If you are unsure or something is not loading, mark it **Issue** and contact your MAIA PM.
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
- [ ] At least 1 product flagged as Poison in the system *(if applicable)*
- [ ] Test customer has full address and phone number *(needed for Poison form, if applicable)*

---

## Tests

---

### Group 1 — Chatbot: Sending Orders
*Who tests this: Sales team*

---

#### Test 1 — Send an Order by Text Message

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open Telegram and search for **[Bot Name / Handle]**. Start a chat. | The chatbot replies and is ready to receive your message. |
| 2 | Type a message like: *"Customer: [Customer Name]. Order: 10 drums [Product A], 5 bags [Product B]."* | Chatbot receives the message. |
| 3 | Wait a moment. | The chatbot shows the order details it extracted — customer name, products, and quantities. |
| 4 | Check that the details are correct. | Customer name, product names, and quantities match what you typed. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

#### Test 2 — Send an Order by Photo

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Take a photo of a handwritten order or a printed PO. | Photo is ready on your phone. |
| 2 | Send the photo to **[Bot Name / Handle]** on Telegram. | Chatbot accepts the photo and starts processing. |
| 3 | Wait a moment. | The chatbot shows the order details it read from the photo — customer name, products, and quantities. |
| 4 | Check that the details match the photo. | Information extracted is correct. If anything is wrong, you can edit before confirming. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

#### Test 3 — Send an Order by PDF

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Prepare a customer PO in PDF format. | PDF file is ready on your phone or computer. |
| 2 | Open **[Bot Name / Handle]** on Telegram. Send the PDF with a short message, e.g. *"pls process this for CPO"*. | Chatbot replies: *"The upload was successful and I am handling it in the background."* |
| 3 | Wait a moment. | Chatbot replies again: *"Document processing is complete."* It identifies the file as a Purchase Order and gives you a CPO reference number (e.g. **CPO-2026-00022**). |
| 4 | Click the link in the chatbot message to open the web app. | The CPO record opens. It shows the customer name, products, and quantities extracted from the PDF. |
| 5 | Review the extracted details carefully. Check that customer name, product names, and quantities are correct. Fix anything that looks wrong. | All details match the original PDF. Any corrections can be made before the next step. |
| 6 | Click **"Create Sales Order"** from the CPO. | A Sales Order is created from the CPO. The CPO status changes to **Success**. |

> ⚠️ **Note:** The chatbot reads the PDF automatically, but always review the details in step 5 before creating the Sales Order. If a product name or quantity looks wrong, fix it first.

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

#### Test 4 — Pricing and Stock Check

*Continue from Test 1, 2, or 3.*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | After the chatbot shows the extracted order, proceed to the pricing step. | Chatbot asks you to confirm or enter the price for each item. |
| 2 | Enter a price **above** the minimum selling price for one item. | Price is accepted. No warning shown. |
| 3 | Enter a price **below** the minimum selling price for another item. | Chatbot shows a warning or blocks the price — minimum price not met. |
| 4 | Correct the price to be at or above the minimum. | Price accepted. You can continue. |
| 5 | Check the stock quantity shown for a product. | Available stock quantity is displayed next to the product. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
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
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
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
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
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
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

#### Test 8 — Manage Sales Orders on the Web App

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in to the web app at **[Web App URL]** as **[Sales Manager Role]**. | Your Sales dashboard is visible. |
| 2 | Create a new Sales Order directly from the web app (not the chatbot). | A form appears. You can fill in customer and product details. Order is saved. |
| 3 | Open an existing Sales Order and change a quantity. | The change is saved. Updated quantity is shown. |
| 4 | Check the status of the order (e.g., Draft, Submitted). | Current status is visible on the order. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

#### Test 9 — Export Invoice / Credit Note / Debit Note as CSV *(Finance)*

Finance exports these documents from MAIA as CSV files. The exported data is used to create eInvoice records in the client's accounting system.

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in as **[Finance Role] ([Person Name])**. Open a submitted **Invoice**. | Invoice record is open. |
| 2 | Click the export or download button and select **CSV**. | A CSV file is downloaded to your computer. |
| 3 | Open the CSV. Check the contents. | File contains invoice details — customer, line items, quantities, prices. |
| 4 | Open a **Credit Note** and repeat the export. | CSV downloaded. File contains credit note details. |
| 5 | Open a **Debit Note** and repeat the export. | CSV downloaded. File contains debit note details. |

> ⚠️ **Note:** This CSV is used by the Finance team to create eInvoice records in the accounting system. eInvoices are not generated inside MAIA.

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

### Group 3 — Logistics: Deliveries and Stock Alerts
*Who tests this: [Logistics Person]*

---

#### Test 10 — Create a Delivery Order and Picking List

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open a confirmed Invoice on the web app (logged in as **[Logistics Person]**). | Invoice record is visible. |
| 2 | Create a **Delivery Order (DO)** from the Invoice. | Delivery Order is created. It shows the customer's delivery address, products, quantities, and a DO reference number. |
| 3 | From the Delivery Order, generate a **Picking List**. | Picking List is created. It shows all items to pick from the warehouse with quantities. |
| 4 | Download both the DO and the Picking List. | Both documents download successfully as PDFs. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

#### Test 11 — Stock Alerts (Out of Stock and Low Stock)

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Check the notification area (logged in as **[Logistics Person]** or **[Sales Manager Role]**). | Notifications are visible. |
| 2 | Look for a product that has **zero stock**. | An Out-of-Stock alert is shown for that product. Both Logistics and Sales can see it. |
| 3 | Look for a product that is below the safety stock level. | A Low-Stock alert is shown for that product. Both Logistics and Sales can see it. |
| 4 | Confirm the notification shows the product name and the current stock quantity. | Product name and quantity are correct on the alert. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

#### Test 12 — Delivery Delay Reminder

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Find an Invoice where no Delivery Order has been created yet, and it has been open for more than the allowed number of days. | Invoice identified. |
| 2 | Check the daily digest or notification area. | A delivery delay alert is shown for that Invoice — flagging that no DO has been created. |

> ⚠️ **Note:** If you cannot find an overdue Invoice to test this, please contact your MAIA PM to set one up.

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
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
| 1 | Open **[Web App URL]** in **Google Chrome** on a laptop or desktop. | The MAIA login page loads. |
| 2 | Each person logs in using their **assigned email and password** from the table above. | Login is successful. Your workspace and dashboard are visible. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
>

---

### Group 5 — What Each Person Can and Cannot Do
*Each person tests their own account. Check that you can do the things listed, and that you are blocked from things outside your role.*

> *(This group is client-specific — define one test per role based on the client's permission setup. The examples below are common MAIA roles. Add, remove, or rename tests to match this client's configuration.)*

---

#### Test 14 — [Role Name] ([Person Name / Person A])

Log in as **[Role Name]** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to [action this role can do]. | ✅ You can [perform this action]. |
| 2 | Try to [another allowed action]. | ✅ You can [perform this action]. |
| 3 | Try to [action this role cannot do]. | 🚫 You cannot [perform this action] — [view only / not accessible]. |
| 4 | Try to [another restricted action]. | 🚫 You cannot [perform this action] — [view only / not accessible]. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes (list any step that did not behave as expected):**
>

---

#### Test 15 — [Role Name] ([Person Name / Person B])

Log in as **[Role Name]** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to [action this role can do]. | ✅ You can [perform this action]. |
| 2 | Try to [another allowed action]. | ✅ You can [perform this action]. |
| 3 | Try to [action this role cannot do]. | 🚫 You cannot [perform this action] — [view only / not accessible]. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes (list any step that did not behave as expected):**
>

---

*Add one test block per role. Repeat the pattern above.*

---

#### Test [N] — Role Approval Flow

*This test follows the full document lifecycle. Each step is done by a different person — coordinate as a group.*

**Part A — Quotation & Purchase Order ([Sales Role] submits)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 1 | **[Sales Role] ([Person Name])** | Create a new Quotation and click Submit. | Quotation status changes to **Submitted / Open**. |
| 2 | **[Sales Role] ([Person Name])** | Create a new Purchase Order and click Submit. | Purchase Order status changes to **Submitted**. |

**Part B — Sales Order submission ([Logistics / Finance Role] can submit)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 3 | **[Sales Role] ([Person Name])** | Create a new Sales Order — leave it in **Draft**. Do not submit. | Sales Order is in Draft status. |
| 4 | **[Logistics Role] ([Person Name])** | Open the Draft Sales Order. Click Submit. | Sales Order status changes to **Submitted**. [Logistics Role] can submit. |
| 5 | **[Sales Role] ([Person Name])** | Create a second new Sales Order — leave it in **Draft**. | Second Sales Order is in Draft. |
| 6 | **[Finance Role] ([Person Name])** | Open the second Draft Sales Order. Click Submit. | Sales Order status changes to **Submitted**. [Finance Role] can submit. |

**Part C — Delivery Order submission ([Logistics / Finance Role] can submit)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 7 | **[Logistics Role] ([Person Name])** | Create a Delivery Order from one of the submitted Sales Orders. Click Submit / Confirm. | Delivery Order status changes to **Confirmed / Submitted**. |
| 8 | **[Finance Role] ([Person Name])** | Open a different Draft Delivery Order. Click Submit / Confirm. | Delivery Order is confirmed. [Finance Role] can submit. |

**Part D — Pick List submission ([Logistics Role])**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 9 | **[Logistics Role] ([Person Name])** | Create and submit a Pick List from a confirmed Delivery Order. | Pick List is submitted. [Logistics Role] has full access to Pick Lists. |

**Part E — Invoice submission ([Finance Role] submits)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 10 | **[Finance Role] ([Person Name])** | Open a submitted Sales Order. Create an Invoice and click Submit. | Invoice status changes to **Submitted / Unpaid**. |

**Part F — Receipt / Payment submission ([Finance / Admin Role])**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 11 | **[Finance Role] ([Person Name])** | Create a Receipt against the Invoice from Step 10. Submit it. | Receipt is submitted. Invoice status updates. |
| 12 | **[Admin Role] ([Person Name])** | Create and submit a Receipt against a different Invoice. | Receipt is submitted. [Admin Role] can submit Receipts. |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:** (coordinate across team)
> **Date:**
>
> **Notes (note the step number if any step failed):**
>

---

### Group 7 — Optional: Client-Specific Features

> *(Include only if applicable — e.g., compliance forms, regulated product workflows, custom integrations, or business-specific rules agreed in the SOW.)*

---

#### Test [N+1] — [Feature Name]

> *(Optional — include if this feature is enabled for this client)*

*Who tests this: [Role]*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | [Describe the step specific to this feature.] | [Expected result.] |
| 2 | [Next step.] | [Expected result.] |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
>
> **Notes:**
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
| Test 9 | Export Invoice / Credit Note / Debit Note as CSV (Finance) | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 10 | Create Delivery Order and Picking List | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 11 | Stock alerts (Out of Stock / Low Stock) | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 12 | Delivery delay reminder | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 13 | All users can log in | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 14 | [Role Name] — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test 15 | [Role Name] — access check | ☐ Pass ☐ Fail ☐ Issue | | |
| Test [N] | Role approval flow (QT → PO → SO → DO → PL → INV → RCT) | ☐ Pass ☐ Fail ☐ Issue | | |
| Test [N+1] | [Client-specific feature] *(if applicable)* | ☐ Pass ☐ Fail ☐ Issue | | |

*[Adjust row count to match tests — add one row per role access test in Group 5, and per optional test in Group 7.]*

**Total: [N] tests**

| Pass | Fail | Issue |
|------|------|-------|
| | | |

---

## Overall Feedback

**Any general comments about the system?**



**Any features that were confusing or difficult to use?**



---

## Sign-Off

By signing below, the [Client Name] team confirms that UAT has been completed and the results above are accurate.

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

- [[02 - PM Playbook/Templates/[Template] UAT Test Script]]
- [[Client Role Permission]]
- [[Client SOW]]

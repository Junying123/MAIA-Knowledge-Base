---
owner: [Your Name]
status: draft
last_reviewed: 2026-04-17
client: [Client Name]
uat_round: [1]
---

# MAIA User Acceptance Test (UAT) — [Client Name]
## [Month Year] · Round [1]

---

## Before You Start

**UAT Period:** [Start Date] – [End Date]
**Sign-Off Deadline:** [Date]
**Go-Live (Core MAIA):** [Date]

### UAT Timeline

| Date | Milestone | Who |
| ---- | --------- | --- |
| [Date] | UAT starts — work through all test groups | [Client] team |
| [Date] | WhatsApp chatbot setup begins | MAIA team |
| [Date] | All tests completed and signed off | [Client] team |
| [Date] | **Go-live — core MAIA** | All |
| Post-go-live | [Any Phase 2 items] | TBD |

**Scope note:** [Describe what is and is not included in this UAT round.]

**Web App:** [Web App URL]
**Chatbot (during UAT):** Telegram — [Bot Name / Handle]
**Chatbot (after go-live):** WhatsApp *(same features — WhatsApp setup is in progress)*

---

## Your Login Details

| Name | Role (Client) | Role (MAIA) | Email | Password |
| ---- | ------------- | ----------- | ----- | -------- |
| [Name] | [e.g. Sales] | [e.g. Sales User] | [email@client.com] | [password] |
| [Name] | [e.g. Finance] | [e.g. Finance Manager] | [email@client.com] | [password] |
| [Name] | [e.g. Warehouse] | [e.g. Logistics User] | [email@client.com] | [password] |

*Add or remove rows to match the number of test users.*

**Note:** If the client has no [Role Name] role, add a note here explaining which role covers those responsibilities (e.g. "There is no Sales Manager at [Client] — Admin handles document submission.").

---

## Role Permission Summary

*Quick reference for Group 5 access tests. Adjust columns to match this client's roles.*

| Document / Feature | [Role A] | [Role B] | [Role C] | [Role D] |
| ------------------ | -------- | -------- | -------- | -------- |
| Quotation | [Create / Submit / View / —] | | | |
| Sales Order | | | | |
| Invoice | | | | |
| Payment / Receipt | | | | |
| Credit Note | | | | |
| Delivery Note | | | | |
| Inventory / Pick List | | | | |

*"Create" = Read/Write/Create but NOT submit. "Submit" = full access including submit. "—" = no access.*

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

**Reporting issues:** If you find a bug or something is not working correctly, use **Jam** to record your screen and share the issue with the MAIA team. Jam works in Chrome, Edge, and Firefox.
→ [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

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

#### Test 1 — Send an Order by Text Message and Voice Note

*Test the chatbot twice — once by typing, and once by sending a voice note.*

**Part A — Text Message**

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open the **MAIA [Client Name] chatbot** in Telegram using the QR code provided. | The chatbot replies and is ready to receive your message. |
| 2 | Type a message like: *"Customer: [Customer Name]. Order: 10 drums [Product A], 5 bags [Product B]."* | Chatbot receives the message. |
| 3 | Wait a moment. | The chatbot shows the order details it extracted — customer name, products, and quantities. |
| 4 | Check that the details are correct. | Customer name, product names, and quantities match what you typed. |

**Part A result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Part B — Voice Note** *(include only if voice note intake is enabled for this client)*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | In the same Telegram chat, record a voice note. Say something like: *"Order for [Customer Name] — 10 drums of [Product A] and 5 bags of [Product B]."* | Voice note is sent to the chatbot. |
| 2 | Wait a moment. | The chatbot transcribes your voice note and shows the extracted details — customer name, products, and quantities. |
| 3 | Check that the details are correct. | Details match what you said. |

**Part B result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Notes:**

---

**Tested by:**
**Date:**


---

#### Test 2 — Send an Order by Photo (PO)

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Take a photo of a **printed PO or handwritten order**. | Photo is ready on your phone. |
| 2 | Send the photo to **[Bot Name / Handle]** on Telegram with a short message, e.g. *"pls process this for CPO"*. | Chatbot replies: *"The upload was successful and I am handling it in the background."* |
| 3 | Wait a moment. | Chatbot replies: *"Document processing is complete."* A CPO number is shown (e.g. **CPO-2026-00022**). The CPO status shows **Pending**. |

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

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Prepare a customer PO in PDF format. | PDF file is ready on your phone or computer. |
| 2 | Open **[Bot Name / Handle]** on Telegram. Send the PDF with a short message, e.g. *"pls process this for CPO"*. | Chatbot replies: *"The upload was successful and I am handling it in the background."* |
| 3 | Wait a moment. | Chatbot replies: *"Document processing is complete."* A CPO number is shown (e.g. **CPO-2026-00022**). The CPO status shows **Pending**. |

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

*Continue from **Test 1 only** (text message order). Tests 2 and 3 go directly to a CPO in the web app — pricing for those is reviewed there, not in the chatbot.*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | After the chatbot shows the extracted order, proceed to the pricing step. | Chatbot asks you to confirm or enter the price for each item. |
| 2 | Enter a price **above** the minimum selling price for one item. | Price is accepted. No warning shown. |
| 3 | Enter a price **below** the minimum selling price for another item. | Chatbot shows a warning or blocks the price — minimum price not met. |
| 4 | Correct the price to be at or above the minimum. | Price accepted. You can continue. |
| 5 | Check the stock quantity shown for a product. | Available stock quantity is displayed next to the product. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 2 — Web App: Managing Orders
*Who tests this: Sales team*

---

#### Test 5 — Review CPO and Convert to Sales Order

*Who tests this: [Sales Role] for review; [Logistics / Finance Role] for submission*

*Continue from Test 2 or Test 3 — the CPO was created by the chatbot from a photo or PDF.*

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 1 | **[Sales Role]** | Log in to the web app. Navigate to the CPO list and open the CPO created in Test 2 or Test 3. | The CPO record is visible. Status shows **Pending**. |
| 2 | **[Sales Role]** | Review the extracted details — check customer name, product names, and quantities against the original photo or PDF. | Extracted details are correct and match the source document. |
| 3 | **[Sales Role]** | If any detail is wrong, edit it directly in the CPO. | Changes are saved. The CPO reflects the corrected information. |
| 4 | **[Sales Role]** | Convert the CPO to a **Sales Order**. | A Sales Order is created. The CPO status updates to show it has been converted. |
| 5 | **[Logistics / Finance / Admin Role]** | Open the Sales Order and click **Submit**. | Sales Order status changes to **TO BILL**. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 6 — Generate Documents (Quotation → Sales Order → Invoice)

*Continue from the order created in Test 4. Different roles handle different steps — coordinate as needed.*

**Why different roles?** Sales Manager can create Quotations but cannot create or edit Sales Orders (view only). SO creation and Invoice submission must be done by Logistics or Finance.

**Proforma Invoice note:** Not a separate document — it is a PDF export from the Sales Order. Used for cash-in-advance customers only. No separate record is created in the system.

| Step | Who | What to do | What you should see |
| ---- | --- | ---------- | ------------------- |
| 1 | **[Sales Role] ([Person Name])** | Log in to the web app. Generate a **Quotation** and submit it. | A Quotation is created and submitted. Status shows **OPEN**. |
| 2 | **[Logistics Role] ([Person Name])** or **[Finance Role] ([Person Name])** | Log in to the web app. Open the Quotation and convert it to a **Sales Order**. | The Quotation status changes to **ORDERED**. A new Sales Order is created with status **TO BILL**. |
| 3 | **[Logistics Role]** or **[Finance Role]** | From the Sales Order, generate a **Proforma Invoice**. | A Proforma Invoice is created with its own reference number. Details match the Sales Order. |
| 4 | **[Finance Role] ([Person Name])** | From the Sales Order, generate the final **Invoice** and submit it. | An Invoice is created and submitted. Status shows **UNPAID**. |
| 5 | Any user | Download each document (Quotation, SO, Proforma Invoice, Invoice) as PDF. | All documents download successfully as PDFs. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 7 — Create a Credit Note and Debit Note

*Use an existing Invoice from Test 6.*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open an existing submitted **Invoice**. | Invoice record is visible. |
| 2 | Look for the option to create a **Credit Note** and click it. | Credit Note creation screen appears. |
| 3 | Fill in the amount, adjust the items, then confirm. | Credit Note is created and saved. It references the original Invoice and shows the credited amount. |
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

#### Test 8 — Duplicate Order is Blocked

**Note:** The duplicate check triggers when an existing order with the same PO number is already in **TO BILL** (submitted) status. Draft orders are not checked.

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Send a customer order via the chatbot — include a PO Number e.g. **"PO-001"**. | Order is received by the chatbot. A CPO is created and converted to a Sales Order. |
| 2 | The Sales Order is submitted by Logistics/Finance and reaches **TO BILL** status. | Sales Order status shows **TO BILL**. |
| 3 | Send the **same order again** via chatbot — same customer and same PO Number **"PO-001"**. | A warning appears — this order already exists. The duplicate is blocked and not saved. |
| 4 | Send a new order for the same customer but with a **different PO Number "PO-002"**. | Order is accepted. A new CPO and Sales Order are created. No warning shown. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 9 — Manage Sales Orders on the Web App

**Note:** [Sales Role] has view-only access to Sales Orders. SO creation and editing is done by [Logistics Role] or [Finance Role].

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in to the web app as **[Logistics Role]** or **[Finance Role]**. | Your dashboard is visible. |
| 2 | Create a new Sales Order directly from the web app (not the chatbot). | A form appears. Fill in customer and product details. The order is saved with status **Draft**. |
| 3 | Open an existing Sales Order and change a quantity. | The change is saved. Updated quantity is shown. |
| 4 | Submit the Sales Order. | Status changes to **TO BILL**. The order is locked and ready for invoicing. |
| 5 | Log out. Log in as **[Sales Role]**. Try to edit or create a Sales Order. | 🚫 [Sales Role] cannot create or edit Sales Orders — view only. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 10 — Export Invoice / Credit Note / Debit Note as CSV *(Finance)*

Finance exports these documents from MAIA as CSV files. The exported data is used to create eInvoice records in the client's accounting system.

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in as **[Finance Role] ([Person Name])**. Open the **Invoice** page. | Invoice listing is visible. |
| 2 | Click the export or download button and select **CSV**. | A CSV file is downloaded to your computer. |
| 3 | Open the CSV. Check the contents. | File contains invoice details — customer, line items, quantities, prices. |
| 4 | Open a **Credit Note** and repeat the export. | CSV downloaded. File contains credit note details. |
| 5 | Open a **Debit Note** and repeat the export. | CSV downloaded. File contains debit note details. |

⚠️ **Note:** This CSV is used by the Finance team to create eInvoice records in the accounting system. eInvoices are not generated inside MAIA.

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 3 — Logistics: Deliveries and Stock Alerts
*Who tests this: [Logistics Person]*

---

#### Test 11 — Create a Delivery Order and Picking List

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in to the web app as **[Logistics Person]**. Open a submitted Invoice. Invoice status should be **UNPAID**. | Invoice record is visible. |
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

#### Test 12 — Stock Alerts (Out of Stock and Low Stock)

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in as **[Logistics Person]**. Check the notification area. | Notifications are visible. |
| 2 | Look for a product that has **zero stock**. | An Out-of-Stock alert is shown for that product. |
| 3 | Look for a product that is below the safety stock level. | A Low-Stock alert is shown for that product. |
| 4 | Confirm the notification shows the product name and the current stock quantity. | Product name and quantity are correct on the alert. |
| 5 | Log out. Log in as **[Sales Role]**. Check the same alerts. | Both Out-of-Stock and Low-Stock alerts are visible to Sales as well. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 13 — Delivery Delay Reminder

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Log in as **[Logistics Person]**. Find an Invoice where no Delivery Order has been created yet, and it has been open for more than the allowed number of days. | Invoice identified. |
| 2 | Check the daily digest or notification area. | A delivery delay alert is shown for that Invoice — flagging that no DO has been created. |

⚠️ **Note:** If you cannot find an overdue Invoice to test this, please contact your MAIA PM to set one up.

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 4 — Logging In
*Who tests this: Everyone*

---

#### Test 14 — All Users Can Log In

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Open **[Web App URL]** in **Google Chrome** on a laptop or desktop. | The MAIA login page loads. |
| 2 | Each person logs in using their **assigned email and password** from the table above. | Login is successful. Your workspace and dashboard are visible. |

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

*(This group is client-specific — define one test per role based on the client's permission setup. The examples below are common MAIA roles. Add, remove, or rename tests to match this client's configuration.)*

---

#### Test 15 — [Role Name] ([Person Name / Person A])

Log in as **[Role Name]** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to [action this role can do]. | ✅ You can [perform this action]. |
| 2 | Try to [another allowed action]. | ✅ You can [perform this action]. |
| 3 | Try to [action this role cannot do]. | 🚫 You cannot [perform this action] — [view only / not accessible]. |
| 4 | Try to [another restricted action]. | 🚫 You cannot [perform this action] — [view only / not accessible]. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

#### Test 16 — [Role Name] ([Person Name / Person B])

Log in as **[Role Name]** and check the following:

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | Try to [action this role can do]. | ✅ You can [perform this action]. |
| 2 | Try to [another allowed action]. | ✅ You can [perform this action]. |
| 3 | Try to [action this role cannot do]. | 🚫 You cannot [perform this action] — [view only / not accessible]. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes (list any step that did not behave as expected):**


---

*Add one test block per role. Repeat the pattern above.*

---

#### Test [N] — Role Approval Flow

*This test follows the full document lifecycle. Each step is done by a different person — coordinate as a group.*

**Part A — Quotation & Purchase Order ([Sales Role] submits)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 1 | **[Sales Role] ([Person Name])** | Create a new Quotation and click Submit. | Quotation status changes to **OPEN**. |
| 2 | **[Sales Role] ([Person Name])** | Create a new Purchase Order and click Submit. | Purchase Order is submitted and saved. |

**Part B — Sales Order submission ([Logistics / Finance Role] can create and submit)**

**Note:** [Sales Role] has view-only access on Sales Orders — SO drafts are created by [Logistics Role] or [Finance Role].

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 3 | **[Finance Role] ([Person Name])** | Create a new Sales Order — leave it in **Draft**. Do not submit. | Sales Order is saved. Status shows **Draft**. |
| 4 | **[Logistics Role] ([Person Name])** | Open the Draft Sales Order. Click Submit. | Sales Order status changes to **TO BILL**. [Logistics Role] can submit. |
| 5 | **[Logistics Role] ([Person Name])** | Create a second new Sales Order — leave it in **Draft**. | Sales Order is saved. Status shows **Draft**. |
| 6 | **[Finance Role] ([Person Name])** | Open the second Draft Sales Order. Click Submit. | Sales Order status changes to **TO BILL**. [Finance Role] can submit. |

**Part C — Delivery Order submission ([Logistics / Finance Role] can submit)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 7 | **[Logistics Role] ([Person Name])** | Create a Delivery Order from one of the **TO BILL** Sales Orders. Click Submit. | Delivery Order is submitted. [Logistics Role] can create and submit. |
| 8 | **[Finance Role] ([Person Name])** | Open a different Draft Delivery Order. Click Submit. | Delivery Order is submitted. [Finance Role] can submit. |

**Part D — Pick List submission ([Logistics Role])**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 9 | **[Logistics Role] ([Person Name])** | Create and submit a Pick List from a confirmed Delivery Order. | Pick List is submitted. [Logistics Role] has full access to Pick Lists. |

**Part E — Invoice submission ([Finance Role] submits)**

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 10 | **[Finance Role] ([Person Name])** | Open a **TO BILL** Sales Order. Create an Invoice and click Submit. | Invoice status changes to **UNPAID**. |

**Part F — Receipt / Payment submission ([Finance / Admin Role])**

**Note:** [Admin Role] can submit Receipts but cannot create them. [Finance Role] creates the Receipt; [Admin Role] can then submit it.

| Step | Who | What to do | What you should see |
|------|-----|-----------|---------------------|
| 11 | **[Finance Role] ([Person Name])** | Create a Receipt against the **UNPAID** Invoice from Step 10. Enter the full amount. Submit it. | Receipt is submitted. The Invoice status changes to **PAID**. |
| 12 | **[Finance Role] ([Person Name])** | Create a second Receipt against a different **UNPAID** Invoice — leave it in **Draft**. Do not submit. | Receipt is saved. Status shows **Draft**. Invoice still shows **UNPAID**. |
| 13 | **[Admin Role] ([Person Name])** | Open the **Draft** Receipt from Step 12. Click Submit. | Receipt is submitted. [Admin Role] can submit Receipts but cannot create them. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:** (coordinate across team)
**Date:**

**Notes (note the step number if any step failed):**


---

### Group 7 — Optional: Client-Specific Features

*(Include only if applicable — e.g., compliance forms, regulated product workflows, custom integrations, or business-specific rules agreed in the SOW.)*

---

#### Test [N+1] — [Feature Name]

*(Optional — include if this feature is enabled for this client)*

*Who tests this: [Role]*

| Step | What to do | What you should see |
|------|-----------|---------------------|
| 1 | [Describe the step specific to this feature.] | [Expected result.] |
| 2 | [Next step.] | [Expected result.] |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

## Results Summary

| Test #     | What was tested                                                  | Result (Pass / Fail / Issue) | Tested by | Date |
| ---------- | ---------------------------------------------------------------- | ---------------------------- | --------- | ---- |
| Test 1     | Send order by text message                                       |                              |           |      |
| Test 2     | Send order by photo                                              |                              |           |      |
| Test 3     | Send order by PDF                                                |                              |           |      |
| Test 4     | Pricing and stock check                                          |                              |           |      |
| Test 5     | Review CPO and convert to Sales Order (chatbot photo/PDF → web app) |                           |           |      |
| Test 6     | Generate documents (Quotation → SO → Proforma Invoice → Invoice) |                              |           |      |
| Test 7     | Create Credit Note and Debit Note                                |                              |           |      |
| Test 8     | Duplicate order is blocked                                       |                              |           |      |
| Test 9     | Manage Sales Orders on web app                                   |                              |           |      |
| Test 10     | Export Invoice / Credit Note / Debit Note as CSV (Finance)       |                              |           |      |
| Test 11    | Create Delivery Order and Picking List                           |                              |           |      |
| Test 12    | Stock alerts (Out of Stock / Low Stock)                          |                              |           |      |
| Test 13    | Delivery delay reminder                                          |                              |           |      |
| Test 14    | All users can log in                                             |                              |           |      |
| Test 15    | [Role Name] — access check                                       |                              |           |      |
| Test 16    | [Role Name] — access check                                       |                              |           |      |
| Test [N]   | Role approval flow (QT → PO → SO → DO → PL → INV → RCT)          |                              |           |      |
| Test [N+1] | [Client-specific feature] *(if applicable)*                      |                              |           |      |

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
- [ ] **Approved — Ready to go live**
- [ ] **Conditional — Go live with the following items to fix first:**

*Conditions:*


- [ ] **Not approved — Further fixes required before go live**

---

## See Also

- [[02 - PM Playbook/Templates/[Template] UAT Test Script]]
- [[Client Role Permission]]
- [[Client SOW]]
- [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

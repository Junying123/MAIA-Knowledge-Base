---
owner: [PM Name]
status: draft
last_reviewed: 2026-03-30
client: Fixguru
uat_round: 1
---

# MAIA User Acceptance Test (UAT) — Fixguru
## [Month Year] · Round 1

---

## Before You Start

**UAT Period:** [Start Date] – [End Date]
**Sign-Off Deadline:** [Date]
**Go-Live (Core MAIA):** [Date]

### UAT Timeline

| Date         | Milestone                                         | Who          |
| ------------ | ------------------------------------------------- | ------------ |
| [Date]       | UAT starts — work through all test groups         | Fixguru team |
| [Date]       | WhatsApp chatbot setup begins                     | MAIA team    |
| [Date]       | All tests completed and signed off                | Fixguru team |
| [Date]       | **Go-live — core MAIA**                           | All          |
| Post-go-live | [Any Phase 2 items, if applicable]                | TBD          |

> **Scope note:** [Describe what is and is not included in this UAT round.]

**Web App:** [Web App URL — TBD]
**Chatbot (during UAT):** Telegram — [Bot Name / Handle — TBD]
**Chatbot (after go-live):** WhatsApp *(same features — WhatsApp setup is in progress)*

---

## Your Login Details

| Name          | Role              | Email (Username) | Password |
| ------------- | ----------------- | ---------------- | -------- |
| [TBD]         | Sales Manager     | [TBD]            | [TBD]    |
| Xiao Ling     | Sales User        | [TBD]            | [TBD]    |
| Hayati        | Sales User        | [TBD]            | [TBD]    |
| Zuha          | Sales User        | [TBD]            | [TBD]    |
| Syahira       | Sales User        | [TBD]            | [TBD]    |
| [TBD]         | Logistics Manager | [TBD]            | [TBD]    |
| Asrul         | Logistics User    | [TBD]            | [TBD]    |
| Fadzil        | Logistics User    | [TBD]            | [TBD]    |
| Azizah        | Logistics User    | [TBD]            | [TBD]    |
| Abishaah      | Finance Manager   | [TBD]            | [TBD]    |
| Wendy Wang    | Finance Manager   | [TBD]            | [TBD]    |
| Nisa          | Finance User      | [TBD]            | [TBD]    |
| Marcus Lim    | Admin             | [TBD]            | [TBD]    |
| Steven Gan    | Admin             | [TBD]            | [TBD]    |
| Yvonne Choo   | Admin             | [TBD]            | [TBD]    |
| Jennifer Gan  | Admin             | [TBD]            | [TBD]    |

---

## How to Use This Document

1. Work through each test **in order** — some tests use data created in earlier steps.
2. For each step, do what is described and check that what you see matches the **"What you should see"** column.
3. After each test, tick your result and write any notes in the feedback box.
4. If something does not work as expected, mark it **Fail** and describe what happened.
5. If you are unsure or something is not loading, mark it **Issue** and contact your MAIA PM.
6. Sign off at the end when you are done.

> **About these test cases:** All tests in this document are based on the agreed MAIA scope in the Fixguru SOW. If any test case does not match how your business works, or if you notice a step that seems incorrect, please do not guess — contact your MAIA PM directly and we will review and update the test case before you proceed.

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

---

## Tests

---

### Group 1 — Chatbot: Sending Orders

---

#### Test 1 — Send an Order by Text Message

*Who tests this: **Sales Manager** or **Sales User** (e.g., Xiao Ling)*

| Step | What to do                                                                                              | What you should see                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 1    | Open the **MAIA Fixguru chatbot** in Telegram using the QR code provided.                               | The chatbot replies and is ready to receive your message.                                   |
| 2    | Type a message like: *"Customer: [Customer Name]. Order: 10 units [Product A], 5 boxes [Product B]."*   | Chatbot receives the message.                                                               |
| 3    | Wait a moment.                                                                                          | The chatbot shows the order details it extracted — customer name, products, and quantities. |
| 4    | Check that the details are correct.                                                                     | Customer name, product names, and quantities match what you typed.                          |

> **Your result:**
> - [ ] Pass
> - [ ] Fail
> - [ ] Issue
>
> **Tested by:**
> **Date:**
> **Notes:**
>

---

#### Test 2 — Send an Order by Photo

*Who tests this: **Sales Manager** or **Sales User** (e.g., Xiao Ling)*

| Step | What to do                                           | What you should see                                                                                   |
| ---- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1    | Take a photo of a handwritten order or a printed PO. | Photo is ready on your phone.                                                                         |
| 2    | Send the photo to the chatbot on Telegram.           | Chatbot accepts the photo and starts processing.                                                      |
| 3    | Wait a moment.                                       | The chatbot shows the order details it read from the photo — customer name, products, and quantities. |
| 4    | Check that the details match the photo.              | Information extracted is correct. If anything is wrong, you can edit before confirming.               |

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

*Who tests this: **Sales Manager** or **Sales User** (e.g., Xiao Ling)*

| Step | What to do                                                                                      | What you should see                                                                                                                      |
| ---- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Prepare a customer PO in PDF format.                                                            | PDF file is ready on your phone or computer.                                                                                             |
| 2    | Open the chatbot on Telegram. Send the PDF with a short message, e.g. *"pls process this for CPO"*. | Chatbot replies: *"The upload was successful and I am handling it in the background."*                                              |
| 3    | Wait a moment.                                                                                  | Chatbot replies: *"Document processing is complete."* A CPO number is shown (e.g. **CPO-2026-00001**). The CPO status shows **Pending**. |

> ⚠️ **Note:** After the chatbot confirms the CPO is created, go to the web app to review the extracted details and convert the CPO to a Sales Order. This is covered in the Group 2 web app tests.

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

*Who tests this: **Sales Manager** or **Sales User** — continue from Test 1, 2, or 3.*

| Step | What to do                                                                | What you should see                                                  |
| ---- | ------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1    | After the chatbot shows the extracted order, proceed to the pricing step. | Chatbot asks you to confirm or enter the price for each item.        |
| 2    | Enter a price **above** the minimum selling price for one item.           | Price is accepted. No warning shown.                                 |
| 3    | Enter a price **below** the minimum selling price for another item.       | Chatbot shows a warning or blocks the price — minimum price not met. |
| 4    | Correct the price to be at or above the minimum.                          | Price accepted. You can continue.                                    |
| 5    | Check the stock quantity shown for a product.                             | Available stock quantity is displayed next to the product.           |

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

---

#### Test 5 — Generate Documents (Quotation → Sales Order → Proforma Invoice → Invoice)

*Who tests this: **Sales Manager** or **Sales User** for Steps 1–2; **Admin** (e.g., Marcus Lim) for submitting; **Finance Manager** (Abishaah or Wendy Wang) for Steps 4–5*

*Continue from the order created in Test 4. Different roles handle different steps — coordinate as needed.*

> **Why different roles?** Sales Manager and Sales User can **create** Quotations and Sales Orders but **cannot submit** them — only Admin can submit. Invoice submission is done by Finance Manager or Admin.

| Step | Who                                                           | What to do                                                                     | What you should see                                                                                |
| ---- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 1    | **Sales Manager or Sales User** (e.g., Xiao Ling)             | Log in to the web app. Create a **Quotation** and save it (do not submit yet). | A Quotation is created and saved. Status shows **Draft**.                                          |
| 2    | **Admin** (e.g., Marcus Lim)                                  | Log in as Admin. Open the Draft Quotation and submit it.                       | Quotation status changes to **OPEN**. Only Admin can submit.                                       |
| 3    | **Sales Manager**, **Sales User**, or **Finance Manager**     | Open the submitted Quotation and convert it to a **Sales Order**.              | The Quotation status changes to **ORDERED**. A new Sales Order is created with status **Draft**.   |
| 4    | **Admin** (e.g., Marcus Lim)                                  | Open the Draft Sales Order and submit it.                                      | Sales Order status changes to **TO BILL**. Only Admin can submit Sales Orders.                     |
| 5    | **Finance Manager** (Abishaah or Wendy Wang)                  | From the Sales Order, generate a **Proforma Invoice**.                         | A Proforma Invoice is created with its own reference number. Details match the Sales Order.        |
| 6    | **Finance Manager** (Abishaah or Wendy Wang)                  | From the Sales Order, generate the final **Invoice** and submit it.            | An Invoice is created and submitted. Status shows **UNPAID**.                                      |
| 7    | Any user                                                      | Download each document (Quotation, SO, Proforma Invoice, Invoice) as PDF.      | All documents download successfully as PDFs.                                                       |

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

#### Test 6 — Create a Credit Note and Debit Note

*Who tests this: **Finance Manager** (Abishaah or Wendy Wang)*

*Use an existing Invoice from Test 5.*

| Step | What to do                                                                                         | What you should see                                                                                 |
| ---- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1    | Open an existing submitted **Invoice**.                                                            | Invoice record is visible.                                                                          |
| 2    | Look for the option to create a **Credit Note** and click it.                                      | Credit Note creation screen appears.                                                                |
| 3    | Fill in the amount, adjust the items, then confirm.                                                | Credit Note is created and saved. It references the original Invoice and shows the credited amount. |
| 4    | Open the same or a different Invoice. Look for the option to create a **Debit Note** and click it. | Debit Note creation screen appears.                                                                 |
| 5    | Fill in the amount & adjust the items, then confirm.                                               | Debit Note is created and saved. It references the original Invoice and shows the debited amount.   |

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

#### Test 7 — Duplicate Order is Blocked

*Who tests this: **Sales Manager** or **Sales User** (e.g., Xiao Ling)*

> **Note:** The duplicate check triggers when an existing order with the same PO number is already in **TO BILL** (submitted) status. Draft orders are not checked.

| Step | What to do                                                                                           | What you should see                                                                    |
| ---- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1    | Send a customer order via the chatbot — include a PO Number e.g. **"PO-001"**.                       | Order is received by the chatbot. A CPO is created and converted to a Sales Order.     |
| 2    | Admin submits the Sales Order so it reaches **TO BILL** status.                                      | Sales Order status shows **TO BILL**.                                                  |
| 3    | Send the **same order again** via chatbot — same customer and same PO Number **"PO-001"**.           | A warning appears — this order already exists. The duplicate is blocked and not saved. |
| 4    | Send a new order for the same customer but with a **different PO Number "PO-002"**.                  | Order is accepted. A new CPO and Sales Order are created. No warning shown.            |

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

#### Test 8 — Create and Manage Sales Orders on the Web App

*Who tests this: **Sales Manager**, **Sales User**, or **Finance Manager** for creation; **Admin** for submission; **Sales Manager**/**Sales User** to confirm submit is blocked*

> **Note:** Sales Manager and Sales User can **create and edit** Sales Orders but **cannot submit** them. Only Admin can submit. This is different from some other MAIA clients.

| Step | What to do                                                                                                | What you should see                                                                              |
| ---- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1    | Log in as **Sales User** (e.g., Xiao Ling). Create a new Sales Order directly from the web app.           | A form appears. Fill in customer and product details. The order is saved with status **Draft**.  |
| 2    | Try to **submit** the Sales Order as Sales User.                                                          | 🚫 Submit button is not available — only Admin can submit Sales Orders.                          |
| 3    | Log out. Log in as **Admin** (e.g., Marcus Lim). Open the Draft Sales Order and submit it.               | Status changes to **TO BILL**. The order is locked and ready for invoicing.                      |
| 4    | Log in as **Finance Manager** (Abishaah or Wendy Wang). Create a new Sales Order.                        | Sales Order is created and saved with status **Draft**. Finance Manager can create.              |
| 5    | Try to **submit** the Sales Order as Finance Manager.                                                     | 🚫 Submit button is not available — only Admin can submit Sales Orders.                          |

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

#### Test 9 — Export Invoice / Credit Note / Debit Note as CSV

*Who tests this: **Finance Manager** (Abishaah or Wendy Wang)*

Finance exports these documents from MAIA as CSV files. The exported data is used to create eInvoice records in the client's accounting system.

| Step | What to do                                              | What you should see                                                       |
| ---- | ------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1    | Log in as **Finance Manager**. Open the **Invoice** page. | Invoice listing is visible.                                               |
| 2    | Click the export or download button and select **CSV**. | A CSV file is downloaded to your computer.                                |
| 3    | Open the CSV. Check the contents.                       | File contains invoice details — customer, line items, quantities, prices. |
| 4    | Open a **Credit Note** and repeat the export.           | CSV downloaded. File contains credit note details.                        |
| 5    | Open a **Debit Note** and repeat the export.            | CSV downloaded. File contains debit note details.                         |

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

---

#### Test 10 — Create a Delivery Order and Picking List

*Who tests this: **Logistics User** (e.g., Asrul) for creation; **Admin** (e.g., Marcus Lim) for DO submission; **Logistics Manager** for Picking List submission*

> **Note:** Logistics User can create Delivery Orders but cannot submit them — only Admin can submit Delivery Orders. Logistics Manager can submit Picking Lists; Logistics User cannot.

| Step | What to do                                                                                       | What you should see                                                                                                                          |
| ---- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Log in as **Logistics User** (e.g., Asrul). Open a submitted Invoice. Status should be **UNPAID**. | Invoice record is visible.                                                                                                                   |
| 2    | Create a **Delivery Order (DO)** from the Invoice and save it.                                   | Delivery Order is created and saved in Draft. Shows customer's delivery address, products, quantities, and a DO reference number.             |
| 3    | Try to **submit** the Delivery Order as Logistics User.                                          | 🚫 Submit button is not available — only Admin can submit Delivery Orders.                                                                   |
| 4    | Log out. Log in as **Admin** (e.g., Marcus Lim). Open the Draft Delivery Order and submit it.   | Delivery Order is submitted. Status updated.                                                                                                 |
| 5    | Log in as **Logistics Manager**. From the Delivery Order, generate a **Picking List** and submit it. | Picking List is created and submitted. Shows all items to pick from the warehouse with quantities. Logistics Manager can submit Picking Lists. |
| 6    | Download the DO and the Picking List as PDFs.                                                    | Both documents download successfully as PDFs.                                                                                                |

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

*Who tests this: **Logistics User** (e.g., Asrul) and **Sales Manager**/**Sales User** — both should see the alerts*

| Step | What to do                                                                      | What you should see                                                                  |
| ---- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 1    | Log in as **Logistics User** (e.g., Asrul). Check the notification area.        | Notifications are visible.                                                           |
| 2    | Look for a product that has **zero stock**.                                     | An Out-of-Stock alert is shown for that product.                                     |
| 3    | Look for a product that is below the safety stock level.                        | A Low-Stock alert is shown for that product.                                         |
| 4    | Confirm the notification shows the product name and the current stock quantity. | Product name and quantity are correct on the alert.                                  |
| 5    | Log out. Log in as **Sales User** (e.g., Xiao Ling). Check the same alerts.    | Both Out-of-Stock and Low-Stock alerts are visible to Sales User as well.            |

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

*Who tests this: **Logistics User** (e.g., Asrul)*

| Step | What to do                                                                                                                             | What you should see                                                                      |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1    | Log in as **Logistics User**. Find an Invoice where no Delivery Order has been created yet, and it has been open for more than the allowed number of days. | Invoice identified.                                                                      |
| 2    | Check the daily digest or notification area.                                                                                           | A delivery delay alert is shown for that Invoice — flagging that no DO has been created. |

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

---

#### Test 13 — All Users Can Log In

*Who tests this: **Everyone** — all users log in with their own account*

| Step | What to do                                                                                | What you should see                                            |
| ---- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1    | Open **[Web App URL]** in **Google Chrome** on a laptop or desktop.                       | The MAIA login page loads.                                     |
| 2    | Each person logs in using their **assigned email and password** from the table above.     | Login is successful. Your workspace and dashboard are visible. |

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

---

#### Test 14 — Sales Manager Access Check

*Who tests this: **Sales Manager***

| Step | What to do                                                         | What you should see                                                                         |
| ---- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 1    | Try to **create** a Quotation.                                     | ✅ You can create and edit Quotations. Saved with status **Draft**.                         |
| 2    | Try to **submit** the Quotation.                                   | 🚫 Submit button is not available — only Admin can submit Quotations.                       |
| 3    | Try to **create** a Sales Order.                                   | ✅ You can create and edit Sales Orders. Saved with status **Draft**.                       |
| 4    | Try to **submit** the Sales Order.                                 | 🚫 Submit button is not available — only Admin can submit Sales Orders.                     |
| 5    | Try to view an **Invoice**.                                        | ✅ You can view Invoices — read only. No create or edit button.                             |
| 6    | Try to view **Inventory** (stock levels).                          | ✅ Inventory page is accessible — read only.                                                |
| 7    | Try to **create** or **submit** a Delivery Order.                  | 🚫 You cannot create or submit Delivery Orders.                                             |

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

#### Test 15 — Sales User Access Check

*Who tests this: **Sales User** (e.g., Hayati, Zuha, or Syahira)*

| Step | What to do                                                         | What you should see                                                                         |
| ---- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 1    | Try to **create** a Quotation.                                     | ✅ You can create and edit Quotations. Saved with status **Draft**.                         |
| 2    | Try to **submit** the Quotation.                                   | 🚫 Submit button is not available — only Admin can submit Quotations.                       |
| 3    | Try to **create** a Sales Order.                                   | ✅ You can create and edit Sales Orders. Saved with status **Draft**.                       |
| 4    | Try to **submit** the Sales Order.                                 | 🚫 Submit button is not available — only Admin can submit Sales Orders.                     |
| 5    | Try to view an **Invoice**.                                        | ✅ You can view Invoices — read only. No create or edit button.                             |
| 6    | Try to view **Inventory** (stock levels).                          | ✅ Inventory page is accessible — read only.                                                |
| 7    | Try to **create** or **submit** a Delivery Order.                  | 🚫 You cannot create or submit Delivery Orders.                                             |

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

#### Test 16 — Logistics Manager Access Check

*Who tests this: **Logistics Manager***

| Step | What to do                                                                          | What you should see                                                                              |
| ---- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1    | Try to view and manage **Inventory** (stock levels, items, warehouse).              | ✅ Full access — you can create, edit, and submit inventory records.                             |
| 2    | Try to create and submit a **Picking List**.                                        | ✅ You can create, edit, and submit Picking Lists.                                               |
| 3    | Try to **create** a Delivery Order.                                                 | ✅ You can create and edit Delivery Orders. Saved with status **Draft**.                         |
| 4    | Try to **submit** a Delivery Order.                                                 | 🚫 Submit button is not available — only Admin can submit Delivery Orders.                       |
| 5    | Try to create or submit a **Sales Order**.                                          | 🚫 You cannot create or submit Sales Orders — not within your role.                              |
| 6    | Try to submit an **Invoice**.                                                       | 🚫 You cannot submit Invoices — Finance Manager or Admin only.                                   |

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

#### Test 17 — Logistics User Access Check

*Who tests this: **Logistics User** (e.g., Fadzil or Azizah)*

| Step | What to do                                                                          | What you should see                                                                              |
| ---- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1    | Try to view **Inventory** (stock levels).                                           | ✅ You can view and edit inventory records. Create is available.                                 |
| 2    | Try to **submit** an inventory record (e.g., Stock Entry).                          | 🚫 Submit button is not available — only Logistics Manager or Admin can submit.                  |
| 3    | Try to **create** a Delivery Order.                                                 | ✅ You can create and edit Delivery Orders. Saved with status **Draft**.                         |
| 4    | Try to **submit** a Delivery Order.                                                 | 🚫 Submit button is not available — only Admin can submit Delivery Orders.                       |
| 5    | Try to **create** or **submit** a Picking List.                                     | 🚫 You can create a Picking List but cannot submit — Logistics Manager or Admin only.            |

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

#### Test 18 — Finance Manager Access Check

*Who tests this: **Finance Manager** (Abishaah or Wendy Wang)*

| Step | What to do                                                                    | What you should see                                                                                  |
| ---- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1    | Try to create and submit an **Invoice**.                                      | ✅ You can create, edit, and submit Invoices. After submit, status shows **UNPAID**.                 |
| 2    | Try to create and submit a **Payment / Receipt**.                             | ✅ You can create and submit Receipts. Invoice moves to **PAID** when fully paid.                    |
| 3    | Try to create and submit a **Credit Note**.                                   | ✅ You can create, edit, and submit Credit Notes.                                                    |
| 4    | Try to **create** a Sales Order.                                              | ✅ You can create and edit Sales Orders. Saved with status **Draft**.                                |
| 5    | Try to **submit** the Sales Order.                                            | 🚫 Submit button is not available — only Admin can submit Sales Orders.                              |
| 6    | Try to **create** or **submit** a Delivery Order.                             | 🚫 You cannot create or submit Delivery Orders — not within Finance role.                            |
| 7    | Export an **Invoice**, a **Credit Note**, and a **Debit Note** as CSV files. | ✅ All three export successfully as CSV files.                                                       |

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

#### Test 19 — Finance User Access Check

*Who tests this: **Finance User** (Nisa)*

| Step | What to do                                                                 | What you should see                                                                              |
| ---- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1    | Try to **create** an Invoice.                                              | ✅ You can create and edit Invoices. Saved with status **Draft**.                                |
| 2    | Try to **submit** the Invoice.                                             | 🚫 Submit button is not available — Finance Manager or Admin can submit Invoices.                |
| 3    | Try to create and submit a **Payment / Receipt**.                          | ✅ You can create and submit Receipts.                                                           |
| 4    | Try to create a **Credit Note**.                                           | ✅ You can create and edit Credit Notes. Saved with status **Draft**.                            |
| 5    | Try to **submit** the Credit Note.                                         | 🚫 Submit button is not available — Finance Manager or Admin only.                               |

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

#### Test 20 — Admin Access Check

*Who tests this: **Admin** (e.g., Marcus Lim or Steven Gan)*

| Step | What to do                                                                                             | What you should see                                           |
| ---- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| 1    | Try to create and **submit** a **Quotation**.                                                          | ✅ Full access — you can create, edit, and submit Quotations. |
| 2    | Try to create and **submit** a **Sales Order**.                                                        | ✅ Full access — you can create, edit, and submit Sales Orders. |
| 3    | Try to **submit** a **Delivery Order** that is in Draft status.                                        | ✅ You can submit Delivery Orders — Admin is the only role that can. |
| 4    | Try to create and **submit** an **Invoice**.                                                           | ✅ Full access — you can create, edit, and submit Invoices.   |
| 5    | Try to create and **submit** a **Payment / Receipt**.                                                  | ✅ Full access — you can create and submit Receipts.          |
| 6    | Try to create and **submit** **Inventory** records (e.g., Stock Entry).                               | ✅ Full access — you can manage and submit inventory records. |
| 7    | Try to **create** a Receipt — then log out and log back in as another Admin user and **submit** it.   | ✅ Any Admin can submit Receipts. |

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

#### Test 21 — Role Approval Flow

*Who tests this: **All roles** — coordinate as a group across all steps*

**Part A — Quotation (Sales creates; Admin submits)**

| Step | Who                                              | What to do                                                               | What you should see                                                           |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 1    | **Sales User** (e.g., Xiao Ling)                 | Create a new Quotation and save it.                                      | Quotation is saved. Status shows **Draft**.                                   |
| 2    | **Admin** (e.g., Marcus Lim)                     | Open the Draft Quotation. Click Submit.                                  | Quotation status changes to **OPEN**. Sales User could not submit — Admin did. |

**Part B — Sales Order (Sales or Finance creates; Admin submits)**

| Step | Who                                              | What to do                                                               | What you should see                                                             |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 3    | **Sales User** (e.g., Xiao Ling)                 | Create a new Sales Order — leave it in **Draft**.                        | Sales Order is saved. Status shows **Draft**.                                   |
| 4    | **Admin** (e.g., Marcus Lim)                     | Open the Draft Sales Order. Click Submit.                                | Sales Order status changes to **TO BILL**. Admin submitted.                     |
| 5    | **Finance Manager** (Abishaah or Wendy Wang)     | Create a second new Sales Order — leave it in **Draft**.                 | Sales Order is saved. Status shows **Draft**. Finance Manager can create.       |
| 6    | **Admin** (e.g., Steven Gan)                     | Open the second Draft Sales Order. Click Submit.                         | Sales Order status changes to **TO BILL**. Admin submitted.                     |

**Part C — Delivery Order (Logistics creates; Admin submits)**

| Step | Who                                              | What to do                                                               | What you should see                                                             |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 7    | **Logistics User** (e.g., Asrul)                 | Create a Delivery Order from a **TO BILL** Sales Order. Save it.         | Delivery Order is saved in Draft. Logistics User can create.                    |
| 8    | **Admin** (e.g., Marcus Lim)                     | Open the Draft Delivery Order. Click Submit.                             | Delivery Order is submitted. Admin is the only role that can submit.            |

**Part D — Pick List (Logistics Manager submits)**

| Step | Who                                              | What to do                                                               | What you should see                                                             |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 9    | **Logistics Manager**                            | Create and submit a Pick List from a confirmed Delivery Order.           | Pick List is submitted. Logistics Manager has submit access to Picking Lists.   |

**Part E — Invoice (Finance Manager or Admin submits)**

| Step | Who                                              | What to do                                                               | What you should see                                                             |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 10   | **Finance Manager** (Abishaah or Wendy Wang)     | Open a **TO BILL** Sales Order. Create an Invoice and click Submit.      | Invoice status changes to **UNPAID**. Finance Manager can submit Invoices.      |

**Part F — Payment / Receipt (Finance Manager or Admin submits)**

| Step | Who                                              | What to do                                                               | What you should see                                                             |
| ---- | ------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| 11   | **Finance Manager** (Abishaah or Wendy Wang)     | Create a Receipt against the **UNPAID** Invoice. Enter full amount. Submit it. | Receipt is submitted. The Invoice status changes to **PAID**.              |
| 12   | **Finance User** (Nisa)                          | Create a second Receipt against a different **UNPAID** Invoice — leave it in **Draft**. | Receipt is saved. Status shows **Draft**. Invoice still shows **UNPAID**. |
| 13   | **Admin** (e.g., Marcus Lim)                     | Open the **Draft** Receipt from Step 12. Click Submit.                   | Receipt is submitted. Admin can submit Receipts.                                |

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

## Results Summary

| Test # | What was tested                                                   | Result (Pass / Fail / Issue) | Tested by | Date |
| ------ | ----------------------------------------------------------------- | ---------------------------- | --------- | ---- |
| Test 1  | Send order by text message                                       |                              |           |      |
| Test 2  | Send order by photo                                              |                              |           |      |
| Test 3  | Send order by PDF                                                |                              |           |      |
| Test 4  | Pricing and stock check                                          |                              |           |      |
| Test 5  | Generate documents (Quotation → SO → Proforma Invoice → Invoice) |                              |           |      |
| Test 6  | Create Credit Note and Debit Note                                |                              |           |      |
| Test 7  | Duplicate order is blocked                                       |                              |           |      |
| Test 8  | Create and manage Sales Orders (Sales/Finance create; Admin submits) |                          |           |      |
| Test 9  | Export Invoice / Credit Note / Debit Note as CSV (Finance)       |                              |           |      |
| Test 10 | Create Delivery Order and Picking List                           |                              |           |      |
| Test 11 | Stock alerts (Out of Stock / Low Stock)                          |                              |           |      |
| Test 12 | Delivery delay reminder                                          |                              |           |      |
| Test 13 | All users can log in                                             |                              |           |      |
| Test 14 | Sales Manager — access check                                     |                              |           |      |
| Test 15 | Sales User — access check                                        |                              |           |      |
| Test 16 | Logistics Manager — access check                                 |                              |           |      |
| Test 17 | Logistics User — access check                                    |                              |           |      |
| Test 18 | Finance Manager — access check                                   |                              |           |      |
| Test 19 | Finance User — access check                                      |                              |           |      |
| Test 20 | Admin — access check                                             |                              |           |      |
| Test 21 | Role approval flow (QT → SO → DO → PL → INV → RCT)              |                              |           |      |

**Total: 21 tests**

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

- [[03 - Clients/Active Clients/Fixguru/Client Overview]]
- [[03 - Clients/Active Clients/Fixguru/Config Overlay]]
- [[03 - Clients/Active Clients/Fixguru/Role Permission/MAIA_Role_Permission_Fixguru_Completed.csv]]

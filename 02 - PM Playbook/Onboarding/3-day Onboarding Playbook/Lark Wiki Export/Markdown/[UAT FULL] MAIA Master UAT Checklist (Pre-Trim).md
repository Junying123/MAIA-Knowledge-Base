**\[UAT FULL\] MAIA Master UAT Checklist (Pre-Trim)**

description: Comprehensive UAT superset covering all MAIA modules. AI trims this to a client-specific UAT using the confirmed narrative + tech brief before Day 3 UAT.

owner: \[Your Name\]

status: draft

last_reviewed: YYYY-MM-DD

client: \[Client Name\]

uat_round: \[1\]

**MAIA User Acceptance Test (UAT) --- \[Client Name\]**

**\[Month Year\] · Round \[1\]**

**How This Document Is Used**

This is the **master UAT superset**. It covers every MAIA feature and workflow across all modules. For each client, the AI trims this document down to a client-specific UAT based on:

The confirmed client narrative (what workflows they actually use)

The tech brief (what modules are in scope, what integrations are connected)

The permission matrix (what roles the client has)

**Applicability tags** at the start of each test make the trimming deterministic:

  -------------------------------- --------------------------------------------------------------------------------
  Tag                              Meaning

  \[CORE\]                         Always included --- every MAIA client runs this

  \[MODULE: \<name\>\]             Include only if the named module is in scope

  \[INTEGRATION: \<name\>\]        Include only if the named integration is connected

  \[ROLE: \<name\>\]               Include only if the client has this role

  \[CONDITIONAL: \<condition\>\]   Include only if the condition holds (e.g., \"client uses in-house logistics\")
  -------------------------------- --------------------------------------------------------------------------------

If all tags on a test evaluate to true for this client, the test is kept. Otherwise it is removed.

**Before You Start**

**UAT Period:** \[Start Date\] -- \[End Date\]

**Sign-Off Deadline:** \[Date\]

**Go-Live (Core MAIA):** \[Date\]

**UAT Timeline**

  -------------------- --------------------------------------------- --------------------
  Date                 Milestone                                     Who

  \[Date\]             UAT starts --- work through all test groups   \[Client\] team

  \[Date\]             WhatsApp chatbot setup begins (if deferred)   MAIA team

  \[Date\]             All tests completed and signed off            \[Client\] team

  \[Date\]             Go-live --- core MAIA                         All

  Post-go-live         \[Any Phase 2 items\]                         TBD
  -------------------- --------------------------------------------- --------------------

**Scope note:** \[Describe what is and is not included in this UAT round.\]

**Web App:** \[Web App URL\]

**Chatbot (during UAT):** Telegram --- \[Bot Name / Handle\]

**Chatbot (after go-live):** WhatsApp (same features --- WhatsApp setup in progress)

**Your Login Details**

  --------------- ---------------------- --------------- ---------------
  Name            Email (Username)       Password        Role

  \[Name\]        \[email@client.com\]   \[password\]    \[Role\]

  \[Name\]        \[email@client.com\]   \[password\]    \[Role\]

  \[Name\]        \[email@client.com\]   \[password\]    \[Role\]
  --------------- ---------------------- --------------- ---------------

Add or remove rows to match the number of test users.

**How to Use This Document**

Work through each test in order --- some tests use data created in earlier steps.

For each step, do what is described and check that what you see matches the \"What you should see\" column.

After each test, tick your result and write any notes in the feedback box.

If something does not work as expected, mark it **Fail** and describe what happened.

If you are unsure or something is not loading, mark it **Issue** and contact your MAIA PM.

Sign off at the end when you are done.

**Result options:**

✅ **Pass** --- Everything worked as described

❌ **Fail** --- Something did not work correctly

⚠️ **Issue** --- Could not complete the test (e.g., button missing, page not loading)

**Setup Checklist (For MAIA team to complete before UAT starts)**

All user accounts created with correct role assignments; login details filled in above

Customer records loaded (at least 3 test customers with name, full address, and phone number)

Product catalogue loaded (at least 5 products with descriptions, UOM, and pricing)

Minimum selling prices configured per product

Price list configured (standard + any channel/tier lists applicable to client)

Customer-specific pricing configured for at least 1 test customer (if applicable)

Stock quantities loaded: at least 1 product at zero stock, 1 at low-stock level, 1 fully stocked

Low-stock threshold configured per item

Safety stock / reorder level configured per item

Delivery delay reminder threshold configured

Warehouse tree configured per client\'s physical structure

Tax classes and rates configured

Document numbering series configured (Quotation, SO, INV, DN, etc.)

Company branding applied (logo, colours) to PDF templates

WhatsApp Business API connected --- OR Telegram bot configured for UAT fallback

Test customer has at least 1 overdue invoice (for delivery delay and ageing tests)

At least 1 product flagged as Poison / regulated (if applicable)

Credit limit configured for at least 1 test customer

At least 1 test customer with outstanding invoices (for payment tests)

**Tests**

**Group 1 --- Master Data Management**

**Who tests this:** Admin, Catalog Manager, Finance

**Test 1.1 --- Create and Edit a Customer \[CORE\]**

  -------------------- ---------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------
  Step                 What to do                                                                                                       What you should see

  1                    Log in as Admin or Sales Manager. Navigate to Customers. Click **Create New**.                                   Customer creation form appears.

  2                    Fill in: customer type (Individual / Company), name, contact, at least one address, tax ID (if Company). Save.   Customer is saved. Customer ID is generated.

  3                    Open the new customer and edit the contact number. Save.                                                         Change is saved. Activity log shows the edit with timestamp and user.

  4                    Try to create a second customer with the same email or registration number.                                      Duplicate detection warning appears. Save is blocked.

  5                    Archive the customer.                                                                                            Customer is hidden from active listings. Historical links preserved.
  -------------------- ---------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 1.2 --- Create and Edit an Item \[CORE\]**

  -------------------- ---------------------------------------------------------------------------------------------------------- --------------------------------------------------
  Step                 What to do                                                                                                 What you should see

  1                    Log in as Catalog Manager. Navigate to Items. Click **Create New**.                                        Item creation form appears.

  2                    Fill in: SKU, name, UOM, category, tax class, standard sell price, min sell price, max sell price. Save.   Item is saved and appears in item listing.

  3                    Upload at least one product image.                                                                         Image preview appears on the item record.

  4                    Try to save an item with Min Sell \> Standard Sell.                                                        Validation error: price integrity rule violated.

  5                    Edit the item\'s reorder level and safety stock. Save.                                                     Changes saved. Stock settings visible on item.
  -------------------- ---------------------------------------------------------------------------------------------------------- --------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 1.3 --- Volume-Based Pricing \[MODULE: volume-pricing\]**

  -------------------- ------------------------------------------------------------------------------------------------------- ------------------------------------------
  Step                 What to do                                                                                              What you should see

  1                    Open an item. Configure tiered pricing: e.g., 1--9 units = RM10, 10--49 units = RM9, 50+ units = RM8.   Tiers saved.

  2                    Create a Quotation with quantity 5 of that item.                                                        Unit price shows RM10.

  3                    Change quantity to 20.                                                                                  Unit price automatically updates to RM9.

  4                    Change quantity to 100.                                                                                 Unit price automatically updates to RM8.
  -------------------- ------------------------------------------------------------------------------------------------------- ------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 1.4 --- Customer-Specific Pricing \[MODULE: customer-specific-pricing\]**

  -------------------- ------------------------------------------------------------------- --------------------------------------------------------------------
  Step                 What to do                                                          What you should see

  1                    Configure a special price for Item X when sold to Customer A.       Customer-specific price saved.

  2                    Create a Quotation for Customer A with Item X.                      Unit price reflects the customer-specific price, not the standard.

  3                    Create a Quotation for Customer B (no special price) with Item X.   Unit price reflects the standard price.
  -------------------- ------------------------------------------------------------------- --------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 1.5 --- Credit Limit Setup and Enforcement \[CORE\]**

  -------------------- ---------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------
  Step                 What to do                                                                                                 What you should see

  1                    Log in as Finance. Open a customer. Set a credit limit of RM5,000. Save.                                   Credit limit saved. Notification sent to Account Manager (check notifications area).

  2                    Create a Sales Invoice for RM4,000 for that customer. Submit.                                              Invoice submitted. Outstanding = RM4,000.

  3                    Attempt to create a new Sales Invoice for RM2,000 (would bring outstanding to RM6,000 \> RM5,000 limit).   Credit limit breach warning appears. Submission blocked or requires Finance override.

  4                    Record a payment against the first invoice to reduce outstanding.                                          New invoice submission now allowed.
  -------------------- ---------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 1.6 --- Bundle / Kit Item \[MODULE: bundles\]**

  -------------------- ----------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  Step                 What to do                                                                                                              What you should see

  1                    Create a Bundle item. Add 2 component SKUs with quantities. Choose pricing mode (Bundle priced or Sum of components).   Bundle saved with components.

  2                    Create a Sales Order for the bundle (quantity 1).                                                                       Order accepts the bundle. Stock shown reflects component availability.

  3                    Submit the Delivery Note for the bundle.                                                                                Component stock is deducted according to bundle rules. Stock Ledger shows the deduction per component.
  -------------------- ----------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 1.7 --- Merge Duplicate Customers \[CONDITIONAL: client has duplicate customer records\]**

  -------------------- --------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  Step                 What to do                                                                  What you should see

  1                    Log in as Admin. Identify two duplicate customer records. Initiate merge.   Merge screen shows both records side-by-side.

  2                    Select the survivor record. Confirm merge with approval.                    Customers merged. All linked documents now reference the surviving record. Audit trail logs the merge.
  -------------------- --------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 2 --- Chatbot: Sending Orders**

**Who tests this:** Sales team, Customers (B2C)

**Test 2.1 --- Send an Order by Text Message \[CORE\]**

  -------------------- --------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------
  Step                 What to do                                                                                                                        What you should see

  1                    Open the chatbot. Send a text message with items and quantities, e.g., \"Please send 5 units of \[SKU\] to \[Customer Name\].\"   Chatbot acknowledges receipt and starts processing.

  2                    Wait for the chatbot to extract the order.                                                                                        Chatbot replies with extracted order details: customer, items, quantities. Asks for confirmation.

  3                    Confirm the order.                                                                                                                A Customer Purchase Order (CPO) is created. Chatbot confirms the CPO ID.
  -------------------- --------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 2.2 --- Send an Order by Voice Note \[MODULE: voice-intake\]**

  -------------------- ----------------------------------------------------------------------------------- -----------------------------------------
  Step                 What to do                                                                          What you should see

  1                    Send a voice note via chatbot describing the order (customer, items, quantities).   Chatbot transcribes the voice note.

  2                    Chatbot extracts the order details.                                                 Extracted order shown for confirmation.

  3                    Confirm the order.                                                                  CPO is created. Chatbot confirms.
  -------------------- ----------------------------------------------------------------------------------- -----------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 2.3 --- Send an Order by Photo (PO) \[CORE\]**

  -------------------- --------------------------------------------------------------------- --------------------------------------------------------------------------------------
  Step                 What to do                                                            What you should see

  1                    Take a photo of a paper PO or screenshot of a PO. Send via chatbot.   Chatbot acknowledges and begins OCR extraction.

  2                    Wait for extraction.                                                  Chatbot shows extracted details: customer, items, quantities, PO number.

  3                    Confirm details.                                                      CPO is created. ⚠️ Review extracted details in web app and convert to SO (Test 4.1).
  -------------------- --------------------------------------------------------------------- --------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 2.4 --- Send an Order by PDF \[CORE\]**

  -------------------- --------------------------------- ---------------------------------------------------------
  Step                 What to do                        What you should see

  1                    Send a PDF of a PO via chatbot.   Chatbot acknowledges and begins extraction.

  2                    Wait for extraction.              Extracted order details shown for confirmation.

  3                    Confirm details.                  CPO is created. ⚠️ Review in web app and convert to SO.
  -------------------- --------------------------------- ---------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 2.5 --- Pricing and Stock Check During Order Intake \[CORE\]**

Continue from Test 2.1, 2.3, or 2.4.

  -------------------- --------------------------------------------------------------------------- ---------------------------------------------------------------
  Step                 What to do                                                                  What you should see

  1                    After the chatbot shows the extracted order, proceed to the pricing step.   Chatbot asks you to confirm or enter the price for each item.

  2                    Enter a price **above** the minimum selling price for one item.             Price accepted. No warning shown.

  3                    Enter a price **below** the minimum selling price for another item.         Chatbot shows warning or blocks --- minimum price not met.

  4                    Correct the price to be at or above the minimum.                            Price accepted. Continue.

  5                    Check the stock quantity shown for a product.                               Available stock quantity is displayed next to the product.
  -------------------- --------------------------------------------------------------------------- ---------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 2.6 --- Credit Limit Warning at Order Intake \[CORE\]**

  -------------------- --------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------
  Step                 What to do                                                                                          What you should see

  1                    Send an order via chatbot for a customer whose outstanding + new order would exceed credit limit.   Chatbot surfaces a credit limit warning, notifies Finance/Sales. Order may be held pending approval per client config.

  2                    Send an order for a customer well within credit limit.                                              No warning. Order proceeds normally.
  -------------------- --------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 3 --- Chatbot: Customer Inquiries**

**Who tests this:** Customers (B2B/B2C) via chatbot

**Test 3.1 --- Order Status Check via Chatbot \[CORE\]**

  -------------------- ------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------
  Step                 What to do                                                                            What you should see

  1                    Ask the chatbot: \"What is the status of my last order?\" or \"Status of SO-XXXX\".   Chatbot returns the current status (Draft / TO BILL / Delivered / Paid) and linked documents.
  -------------------- ------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 3.2 --- Outstanding Balance Check via Chatbot \[CORE\]**

  -------------------- ------------------------------------------ ------------------------------------------------------------------------------
  Step                 What to do                                 What you should see

  1                    Ask: \"What is my outstanding balance?\"   Chatbot returns outstanding amount and lists unpaid invoices with due dates.
  -------------------- ------------------------------------------ ------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 3.3 --- Stock / Price Inquiry via Chatbot \[CORE\]**

  -------------------- ---------------------------------------- ------------------------------------------------------------------------------
  Step                 What to do                               What you should see

  1                    Ask: \"Do you have \[SKU\] in stock?\"   Chatbot returns current available stock quantity.

  2                    Ask: \"What is the price of \[SKU\]?\"   Chatbot returns the standard or customer-specific price (based on identity).
  -------------------- ---------------------------------------- ------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 3.4 --- Request Invoice / Document Copy via Chatbot \[CORE\]**

  -------------------- ------------------------------------------- --------------------------------------------------------------
  Step                 What to do                                  What you should see

  1                    Ask: \"Send me the invoice for SO-XXXX.\"   Chatbot returns a download link or attaches the invoice PDF.
  -------------------- ------------------------------------------- --------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 3.5 --- Upload Payment Proof via Chatbot \[CORE\]**

  -------------------- ---------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------
  Step                 What to do                                                                                     What you should see

  1                    As a customer, send a photo/screenshot of bank transfer via chatbot, referencing an invoice.   Chatbot acknowledges. A draft Payment Receipt is created in MAIA for Finance verification.

  2                    Log in as Finance. Find the draft payment.                                                     Draft payment visible with uploaded proof attached.

  3                    Finance verifies and submits the payment.                                                      Payment submitted. Invoice status updates to Paid or Partly Paid.
  -------------------- ---------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 3.6 --- Request Return via Chatbot \[CONDITIONAL: client supports customer returns\]**

  -------------------- ------------------------------------------------------------------------------------------------ ----------------------------------------------------------------
  Step                 What to do                                                                                       What you should see

  1                    As a customer, ask chatbot to initiate a return: \"I\'d like to return 2 units from DN-XXXX.\"   Chatbot confirms, creates a draft Return Note in MAIA.

  2                    Log in as Warehouse. Find the draft Return Note.                                                 Draft RN visible, linked to the source DN. Pending inspection.
  -------------------- ------------------------------------------------------------------------------------------------ ----------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 4 --- Web App: Sales Documents**

**Who tests this:** Sales, Logistics, Finance

**Test 4.1 --- Generate Full Document Flow (Quotation → SO → Proforma → Invoice) \[CORE\]**

Continue from the CPO created in Group 2. Coordinate across roles.

  --------------- ---------------------------------------- ----------------------------------------------------- ---------------------------------------------------------------------------
  Step            Who                                      What to do                                            What you should see

  1               \[Sales Role\]                           Log in to web app. Generate a Quotation and submit.   Quotation created and submitted. Status: OPEN.

  2               \[Logistics Role\] or \[Finance Role\]   Open the Quotation and convert to Sales Order.        Quotation status → ORDERED. New SO created with status TO BILL.

  3               \[Logistics Role\] or \[Finance Role\]   From the SO, generate a Proforma Invoice.             Proforma Invoice created with its own reference number. Details match SO.

  4               \[Finance Role\]                         From the SO, generate final Invoice and submit.       Invoice created and submitted. Status: UNPAID.

  5               Any user                                 Download each document as PDF.                        All PDFs download successfully.
  --------------- ---------------------------------------- ----------------------------------------------------- ---------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 4.2 --- Duplicate Order is Blocked \[CORE\]**

**Note:** Duplicate check triggers when an existing order with the same PO number is in TO BILL (submitted) status. Draft orders are not checked.

  -------------------- ------------------------------------------------------------------------- -------------------------------------------------------------------
  Step                 What to do                                                                What you should see

  1                    Send a customer order via chatbot with PO Number \"PO-001\".              Order received. CPO created, converted to SO.

  2                    Submit the SO to reach TO BILL status.                                    SO status: TO BILL.

  3                    Send the same order again: same customer, same PO Number \"PO-001\".      Warning appears --- this order already exists. Duplicate blocked.

  4                    Send a new order for same customer with different PO Number \"PO-002\".   Order accepted. New CPO and SO created. No warning.
  -------------------- ------------------------------------------------------------------------- -------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 4.3 --- Manage Sales Orders on the Web App \[CORE\]**

**Note:** \[Sales Role\] has view-only access to SO. SO creation and editing is done by \[Logistics Role\] or \[Finance Role\].

  -------------------- ----------------------------------------------------------------- --------------------------------------------------------------------------
  Step                 What to do                                                        What you should see

  1                    Log in as \[Logistics Role\] or \[Finance Role\].                 Dashboard visible.

  2                    Create a new SO directly from the web app (not chatbot).          Form appears. Fill customer/product details. SO saved with status Draft.

  3                    Open an existing SO and change a quantity.                        Change saved. Updated quantity shown.

  4                    Submit the SO.                                                    Status → TO BILL. Order is locked.

  5                    Log out. Log in as \[Sales Role\]. Try to edit or create an SO.   🚫 \[Sales Role\] cannot create or edit SO --- view only.
  -------------------- ----------------------------------------------------------------- --------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 4.4 --- Create Credit Note and Debit Note \[CORE\]**

Use an existing Invoice from Test 4.1.

  -------------------- ------------------------------------------------------------ --------------------------------------------------------------------------------
  Step                 What to do                                                   What you should see

  1                    Open an existing submitted Invoice.                          Invoice record visible.

  2                    Click Create Credit Note.                                    Credit Note creation screen appears.

  3                    Fill amount, adjust items, confirm.                          Credit Note created. References the original Invoice with the credited amount.

  4                    From the same or another Invoice, click Create Debit Note.   Debit Note creation screen appears.

  5                    Fill amount, adjust items, confirm.                          Debit Note created. References the original Invoice with the debited amount.
  -------------------- ------------------------------------------------------------ --------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 4.5 --- Tax Computation and Discounts \[CORE\]**

  -------------------- --------------------------------------------------------------- ------------------------------------------------------------------------
  Step                 What to do                                                      What you should see

  1                    Create a Quotation with a taxable item and a zero-rated item.   Tax column shows correct rate per line; subtotals correct.

  2                    Apply a line-level discount (e.g., 10%).                        Line total reflects discount. Tax recalculated on discounted value.

  3                    Apply a document-level discount in addition.                    Grand total reflects both discounts. Tax recalculated correctly.

  4                    Submit and export PDF.                                          PDF shows all line totals, discounts, tax breakdowns, and grand total.
  -------------------- --------------------------------------------------------------- ------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 4.6 --- Item Charges (Freight, Handling, Other) \[CONDITIONAL: client uses item charges\]**

  -------------------- ------------------------------------------------------------------------------ ---------------------------------------------------------------------
  Step                 What to do                                                                     What you should see

  1                    On a Sales Invoice, add a freight charge of RM50 and a handling fee of RM20.   Charges appear as additional lines.

  2                    Submit the invoice.                                                            Grand total includes the charges. PDF shows them as separate lines.
  -------------------- ------------------------------------------------------------------------------ ---------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 4.7 --- Export Invoice / Credit Note / Debit Note as CSV \[ROLE: Finance\]**

Finance exports documents from MAIA as CSV for eInvoice creation in accounting system.

  -------------------- ------------------------------------------ -----------------------------------------------------------------------------
  Step                 What to do                                 What you should see

  1                    Log in as Finance. Open Invoice listing.   Invoice listing visible.

  2                    Click export → CSV.                        CSV file downloads.

  3                    Open CSV.                                  File contains invoice details --- customer, line items, quantities, prices.

  4                    Repeat for Credit Note and Debit Note.     CSVs downloaded with correct details.
  -------------------- ------------------------------------------ -----------------------------------------------------------------------------

⚠️ **Note:** CSV is used by Finance to create eInvoice records in the accounting system. eInvoices are not generated inside MAIA.

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 5 --- Web App: Logistics & Delivery**

**Who tests this:** Logistics team

**Test 5.1 --- Full Delivery Flow (SO → Pick List → DN → Mark Delivered) \[CORE\]**

**Note:** Check the client\'s Role Permission Matrix --- only certain roles can submit Pick Lists and DNs.

  --------------- ------------------------- ----------------------------------------------------- ----------------------------------------------------------------------------------------------------------
  Step            Who                       What to do                                            What you should see

  1               \[Logistics Role\]        Open a submitted SO (TO BILL). Create a Pick List.    Pick List draft created with items from SO.

  2               \[Pick List submitter\]   Submit the Pick List.                                 Pick List submitted.

  3               \[Logistics Role\]        Create a Delivery Note from the SO.                   DN draft created with items.

  4               \[DN submitter\]          Submit the DN.                                        DN status → In Transit. Stock deducted from source warehouse (verify in Stock Ledger).

  5               \[Logistics / Driver\]    Mark DN as Delivered. Upload POD (photo/signature).   DN status → Delivered. POD file attached. Customer receives dispatch/delivery notification (if enabled).

  6               Verify                    Check linked SO.                                      SO per_delivered = 100%. SO ready for invoicing.
  --------------- ------------------------- ----------------------------------------------------- ----------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 5.2 --- Partial Delivery \[CORE\]**

  -------------------- -------------------------------------------------------------------------- --------------------------------------------------------------
  Step                 What to do                                                                 What you should see

  1                    Open an SO with quantity 10 of an item. Create a DN for quantity 6 only.   DN created for 6 units.

  2                    Submit and mark DN delivered.                                              SO per_delivered = 60%. Remaining 4 units in \"To Deliver\".

  3                    Create a second DN for the remaining 4 units.                              Second DN auto-pulls the balance.

  4                    Submit and deliver.                                                        SO per_delivered = 100%.
  -------------------- -------------------------------------------------------------------------- --------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 5.3 --- Create Delivery Trip with Multiple Stops \[CONDITIONAL: client uses in-house logistics\]**

  -------------------- ---------------------------------------------------------------------------- ---------------------------------------------------
  Step                 What to do                                                                   What you should see

  1                    Log in as Logistics. Create a Delivery Trip. Assign driver, vehicle, date.   Trip created in Draft.

  2                    Add 3 Delivery Notes to the trip.                                            3 Delivery Stops auto-created, one per DN.

  3                    Drag to reorder stop sequence.                                               Sequence updated.

  4                    Mark trip as Loaded.                                                         Trip status → Out for Delivery. Checklist locked.

  5                    At each stop, driver marks Delivered and uploads POD.                        Stop status → Delivered. Linked DN auto-updates.

  6                    After all stops complete, trip auto-closes.                                  Trip status → Completed.
  -------------------- ---------------------------------------------------------------------------- ---------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 5.4 --- COD Collection at Stop \[CONDITIONAL: client accepts COD\]**

  -------------------- -------------------------------------------------------------------------------------- -------------------------------------------------------------
  Step                 What to do                                                                             What you should see

  1                    On a trip with a COD stop, driver marks Delivered and records cash amount collected.   COD recorded on the stop. POP (proof of payment) uploaded.

  2                    Trip summary shows COD collected vs expected.                                          Discrepancies flagged. Finance notified for reconciliation.
  -------------------- -------------------------------------------------------------------------------------- -------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 5.5 --- Create Return Note (Partial) \[CORE\]**

  -------------------- -------------------------------------------------------------------- ---------------------------------------------------
  Step                 What to do                                                           What you should see

  1                    Open a submitted DN with quantity 10. Click Create Return Note.      RN draft created linked to the DN.

  2                    Enter return quantity 3. Set reason (e.g., Damaged). Attach photo.   RN saved.

  3                    Mark RN as Received, then Inspected → Accepted.                      Stock restored to warehouse (check Stock Ledger).

  4                    Verify linked Credit Note is triggered (if configured).              Credit Note draft created for the returned value.
  -------------------- -------------------------------------------------------------------- ---------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 5.6 --- Return Note: Exceed Quantity Blocked \[CORE\]**

  -------------------- ---------------------------------------------------------------------- ------------------------------------------------------------------------------------
  Step                 What to do                                                             What you should see

  1                    From a DN with quantity 10, attempt to create an RN for quantity 15.   Validation blocks submission --- return quantity cannot exceed delivered quantity.
  -------------------- ---------------------------------------------------------------------- ------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 5.7 --- Deliver via 3rd Party Shipment \[INTEGRATION: 3pl\]**

  -------------------- -------------------------------------------------------------------------------------- --------------------------------------------------------------
  Step                 What to do                                                                             What you should see

  1                    On a DN, create an Outbound Shipment. Enter courier, tracking number, dispatch time.   Shipment linked to DN.

  2                    Mark Shipment as Delivered.                                                            DN auto-updates to Delivered. Tracking number visible on DN.
  -------------------- -------------------------------------------------------------------------------------- --------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 5.8 --- Mark Delivery as External (Delivered Outside System) \[CONDITIONAL: client uses external/walk-in deliveries\]**

  -------------------- -------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------
  Step                 What to do                                                                                               What you should see

  1                    On a DN, choose \"Mark as Delivered (External)\". Upload POD, enter reason (e.g., \"Walk-in pickup\").   DN marked Delivered. POD retained. User, timestamp, and reason logged.
  -------------------- -------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 6 --- Web App: Stock & Warehouse**

**Who tests this:** Warehouse team, Inventory Manager

**Test 6.1 --- View Stock Levels by Warehouse \[CORE\]**

  -------------------- -------------------------------------------------------------------- --------------------------------------------------------------
  Step                 What to do                                                           What you should see

  1                    Log in as Warehouse/Inventory Manager. Navigate to Warehouse Tree.   Warehouse hierarchy visible.

  2                    Select a warehouse.                                                  Stock quantities, occupancy, and sub-level totals displayed.

  3                    Filter by SKU.                                                       Filtered view shown for that SKU across selected warehouse.
  -------------------- -------------------------------------------------------------------- --------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 6.2 --- View Stock Levels by SKU (All Warehouses) \[CORE\]**

  -------------------- --------------------------------------------------------------------- -----------------------------------------------------------------------------------
  Step                 What to do                                                            What you should see

  1                    Open an item. View stock tab.                                         Shows Actual Qty, Reserved, Incoming, Projected, Available across all warehouses.

  2                    Verify numbers reconcile: Projected = Actual − Reserved + Incoming.   Math correct.
  -------------------- --------------------------------------------------------------------- -----------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 6.3 --- Stock Transfer Between Warehouses \[CONDITIONAL: client has multiple warehouses\]**

  -------------------- ------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------
  Step                 What to do                                                                            What you should see

  1                    Create a Material Transfer from Warehouse A to Warehouse B, quantity 20 of an item.   Transfer saved as Draft.

  2                    Submit the transfer.                                                                  Stock deducted from A, added to B. Stock Ledger shows both entries. Valuation unchanged unless rule differs.
  -------------------- ------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 6.4 --- Stock Reconciliation (By Warehouse) \[CORE\]**

  -------------------- ------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------
  Step                 What to do                                                                                              What you should see

  1                    Initiate Stock Reconciliation for a warehouse. System lists all SKUs with system-recorded quantities.   SKU list with current quantities.

  2                    For one SKU, enter a different physical count. Provide reason (e.g., \"Count correction\").             Variance calculated.

  3                    Submit.                                                                                                 Adjustment entry posted to Stock Ledger. Stock aligned to physical count.
  -------------------- ------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 6.5 --- Stock Reservation Entry \[MODULE: stock-reservation\]**

  --------------- ---------------------- -------------------------------------------------------------------------------------- --------------------------------------------------
  Step            Who                    What to do                                                                             What you should see

  1               \[Logistics\]          Create a Stock Reservation Entry for an SO, reserving qty from a specific warehouse.   Reservation saved as Draft.

  2               \[Finance or Admin\]   Submit the reservation.                                                                Reserved Qty increases. Available Qty decreases.
  --------------- ---------------------- -------------------------------------------------------------------------------------- --------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 6.6 --- View and Export Stock Ledger \[CORE\]**

  -------------------- ------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  Step                 What to do                                                          What you should see

  1                    Open Stock Ledger. Filter by Warehouse, Date Range, Voucher Type.   Filtered ledger entries shown.

  2                    Export to CSV.                                                      File downloaded with all columns: date, voucher, item, warehouse, in/out qty, balance, valuation rate.
  -------------------- ------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 6.7 --- Stock Alerts (Out of Stock, Low Stock, Near Expiry) \[CORE\]**

  -------------------- ------------------------------------------------------- ----------------------------------------------------------
  Step                 What to do                                              What you should see

  1                    Log in as Logistics. Check notifications.               Notifications visible.

  2                    Look for product at zero stock.                         Out-of-Stock alert shown.

  3                    Look for product below safety stock level.              Low-Stock alert shown.

  4                    Look for batch nearing expiry.                          Near-Expiry alert shown (if batch tracking enabled).

  5                    Confirm alert shows product name and current qty.       Details correct.

  6                    Log out. Log in as \[Sales Role\]. Check same alerts.   Both Out-of-Stock and Low-Stock alerts visible to Sales.
  -------------------- ------------------------------------------------------- ----------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 7 --- Web App: Payments & Finance**

**Who tests this:** Finance, Admin

**Test 7.1 --- Create Payment Receipt Linked to Single Invoice \[CORE\]**

  -------------------- ---------------------------------------------------------------------------------------- -------------------------------------------
  Step                 What to do                                                                               What you should see

  1                    Log in as Finance. Create Payment Receipt. Select customer. Enter full invoice amount.   Unpaid invoices for customer appear.

  2                    Link to one invoice. Enter mode (Bank Transfer), reference, attach proof.                Allocation set.

  3                    Submit.                                                                                  Receipt submitted. Invoice status → Paid.
  -------------------- ---------------------------------------------------------------------------------------- -------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 7.2 --- Multi-Invoice FIFO Allocation \[CORE\]**

  -------------------- --------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------
  Step                 What to do                                                                                                                        What you should see

  1                    Customer has 3 unpaid invoices (oldest to newest). Create Payment Receipt for amount covering the first two plus partial third.   System auto-allocates FIFO: Invoice 1 fully, Invoice 2 fully, Invoice 3 partially.

  2                    Submit.                                                                                                                           Invoices 1 & 2 → Paid. Invoice 3 → Partly Paid.
  -------------------- --------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 7.3 --- Advance Payment (Unallocated) \[CORE\]**

  -------------------- --------------------------------------------------------------------------------------- -------------------------------------------------------------------------
  Step                 What to do                                                                              What you should see

  1                    Create a Payment Receipt for an amount greater than total outstanding for a customer.   Excess shown as unallocated/advance balance.

  2                    Submit.                                                                                 Advance balance visible on customer record.

  3                    Create a new Invoice for that customer.                                                 System offers to apply advance balance. Invoice is reduced accordingly.
  -------------------- --------------------------------------------------------------------------------------- -------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 7.4 --- Manual Reallocation of Payment \[CORE\]**

  -------------------- -------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------
  Step                 What to do                                                                                                           What you should see

  1                    Create a Payment Receipt. System suggests FIFO allocation. Override manually to allocate to a later invoice first.   Manual allocation saved.

  2                    Submit.                                                                                                              Allocated invoice status updates per manual allocation.
  -------------------- -------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 7.5 --- Payment Voucher (Outgoing) \[CONDITIONAL: client uses outgoing payments/refunds\]**

  -------------------- --------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------
  Step                 What to do                                                                                          What you should see

  1                    Create a Payment Voucher for a supplier or customer refund. Enter amount, mode, reference, proof.   Voucher draft saved.

  2                    Link to a Purchase Invoice or Credit Note.                                                          Linkage applied.

  3                    Submit.                                                                                             Voucher submitted. Linked document updates (e.g., Purchase Invoice → Paid).
  -------------------- --------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 7.6 --- Refund via Credit Note + Payment Voucher \[CONDITIONAL: client processes refunds\]**

  -------------------- --------------------------------------------------------------------------- --------------------------------------------------------------------------
  Step                 What to do                                                                  What you should see

  1                    Identify an overpayment (customer paid RM200 more than invoice total).      Excess visible on customer record.

  2                    Create a Credit Note for the overpayment.                                   CN saved.

  3                    Create a linked Payment Voucher for the refund. Attach proof of transfer.   Voucher submitted. Customer balance adjusted. Accounting sync triggered.
  -------------------- --------------------------------------------------------------------------- --------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 7.7 --- Unreconcile / Cancel Submitted Payment \[ROLE: Finance\]**

  -------------------- ------------------------------------------------------ -------------------------------------------------
  Step                 What to do                                             What you should see

  1                    Open a submitted Payment Receipt. Click Unreconcile.   Allocation reversed. Invoice returns to Unpaid.

  2                    Click Cancel Payment. Enter reason.                    Payment cancelled. Audit trail updated.
  -------------------- ------------------------------------------------------ -------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 8 --- Notifications, Digests & Dashboards**

**Who tests this:** All roles (each tests their own persona)

**Test 8.1 --- Delivery Delay Reminder \[CORE\]**

  -------------------- ------------------------------------------------------------------------------------------------------------- --------------------------------------------------------
  Step                 What to do                                                                                                    What you should see

  1                    Log in as Logistics. Find an Invoice with no DN created yet, open for more than the allowed number of days.   Invoice identified.

  2                    Check the daily digest or notification area.                                                                  Delivery delay alert shown --- flagging no DN created.
  -------------------- ------------------------------------------------------------------------------------------------------------- --------------------------------------------------------

⚠️ **Note:** If you cannot find an overdue invoice to test this, contact your MAIA PM to set one up.

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 8.2 --- Credit Limit Breach Alert \[CORE\]**

  -------------------- ------------------------------------------------------------------------------ --------------------------------------------------------------------
  Step                 What to do                                                                     What you should see

  1                    Attempt to submit an order/invoice that pushes a customer over credit limit.   Alert sent to Finance + Account Manager. Visible in notifications.
  -------------------- ------------------------------------------------------------------------------ --------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 8.3 --- Daily Digest Delivery (Role-Specific) \[CORE\]**

  -------------------- ------------------------------------------------------- -------------------------------------------------------------------------------------------------------
  Step                 What to do                                              What you should see

  1                    Log in as Sales. Check daily digest (in-app / email).   Sales-specific digest shows: new orders, pending quotations, customers approaching credit limit, etc.

  2                    Log in as Logistics. Check daily digest.                Logistics digest shows: new DNs, delayed deliveries, partial/failed, pending POD, pending returns.

  3                    Log in as Finance. Check daily digest.                  Finance digest shows: new payments received, overdue invoices, unallocated advance balances.
  -------------------- ------------------------------------------------------- -------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 8.4 --- Dashboard Widgets Load & Drill-Down \[CORE\]**

  -------------------- ------------------------------------------------ ----------------------------------------------------------------------------------
  Step                 What to do                                       What you should see

  1                    Log in. Land on Home Workspace.                  Dashboard loads. Role-specific widgets visible (KPI cards, mini tables, charts).

  2                    Click a widget (e.g., \"Pending Quotations\").   Filtered list of pending quotations opens.

  3                    Click into a document from the list.             Document detail view opens.
  -------------------- ------------------------------------------------ ----------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 8.5 --- Multi-Role Dashboard Tabs \[CONDITIONAL: at least one user has multiple personas\]**

  -------------------- ------------------------------------------------------------------- -----------------------------------------------------------
  Step                 What to do                                                          What you should see

  1                    Log in as a user assigned multiple roles (e.g., Sales + Manager).   Dashboard shows role tabs (\"My Sales\", \"Team Sales\").

  2                    Switch between tabs.                                                Widgets update to reflect the selected persona.
  -------------------- ------------------------------------------------------------------- -----------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 9 --- Issue Tickets**

**Who tests this:** Sales, Support / Account Manager, Customer (via chatbot)

**Test 9.1 --- Create Ticket from Customer Chatbot \[MODULE: issue-tickets\]**

  -------------------- --------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------
  Step                 What to do                                                                                                What you should see

  1                    Customer messages chatbot with a complaint (e.g., \"Item arrived damaged\"). Optionally attaches photo.   Chatbot creates a ticket. Confirms Ticket ID to customer.

  2                    Log in as Account Manager. Find the new ticket.                                                           Ticket visible with: source = Chatbot, customer, linked documents (if detected), attachments. SLA timer started.
  -------------------- --------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 9.2 --- Create Ticket Manually (Sales on Behalf of Customer) \[MODULE: issue-tickets\]**

  -------------------- ------------------------------------------------------------------------------------------ ---------------------------------------------------
  Step                 What to do                                                                                 What you should see

  1                    Log in as Sales. Create a ticket tied to a specific customer and SO. Set type, priority.   Ticket saved. Assignee defaults per triage rules.
  -------------------- ------------------------------------------------------------------------------------------ ---------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 9.3 --- Ticket Lifecycle \[MODULE: issue-tickets\]**

  -------------------- ------------------------------------------------------------------------------------ -------------------------------------------------------
  Step                 What to do                                                                           What you should see

  1                    Open a ticket. Change status New → Acknowledged → In Progress → Resolved → Closed.   Each transition saves. Notifications sent per config.

  2                    On resolution, fill Resolution Summary and Root Cause (mandatory for bug).           Fields required before closing.
  -------------------- ------------------------------------------------------------------------------------ -------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 10 --- Document Generation (PDF Export)**

**Who tests this:** All roles

**Test 10.1 --- Export PDF for Each Document Type \[CORE\]**

  -------------------- -------------------- ---------------------------------------------------------------------------------
  Step                 Document             What you should see

  1                    Quotation            PDF downloads. Client branding (logo, colours) applied. Totals and tax correct.

  2                    Sales Order          PDF downloads with correct SO fields.

  3                    Proforma Invoice     PDF downloads.

  4                    Invoice              PDF downloads. Grand total and tax breakdown correct.

  5                    Credit Note          PDF downloads. References original invoice.

  6                    Debit Note           PDF downloads. References original invoice.

  7                    Delivery Note        PDF downloads. Includes items, addresses, signature block. No financial totals.

  8                    Return Note          PDF downloads. References source DN.

  9                    Payment Receipt      PDF downloads. Shows allocation breakdown.
  -------------------- -------------------- ---------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 10.2 --- Draft Watermark Behaviour \[CORE\]**

  -------------------- ------------------------------------ ---------------------------------------------------------------
  Step                 What to do                           What you should see

  1                    Open a Draft Invoice. Export PDF.    PDF shows \"DRAFT --- Not Official\" watermark and/or banner.

  2                    Submit the invoice. Re-export PDF.   Watermark removed. PDF is now official.
  -------------------- ------------------------------------ ---------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 10.3 --- Attachment Inclusion in PDF \[CONDITIONAL: client uses attachments on documents\]**

  -------------------- ----------------------------------------------------------- -----------------------------------------------------------------------------------------
  Step                 What to do                                                  What you should see

  1                    On a document with a PDF or image attachment, export PDF.   Exported PDF includes attachment pages appended after main body, with auto page titles.
  -------------------- ----------------------------------------------------------- -----------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 11 --- Logging In & User Management**

**Who tests this:** Everyone

**Test 11.1 --- All Users Can Log In \[CORE\]**

  -------------------- --------------------------------------------------------------- ----------------------------------------------------
  Step                 What to do                                                      What you should see

  1                    Open \[Web App URL\] in Google Chrome on a laptop or desktop.   MAIA login page loads.

  2                    Each person logs in with assigned email/password.               Login successful. Workspace and dashboard visible.
  -------------------- --------------------------------------------------------------- ----------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 11.2 --- Password Reset \[CORE\]**

  -------------------- ---------------------------------------------------------- ---------------------------------------------------
  Step                 What to do                                                 What you should see

  1                    From login page, click \"Forgot password\". Enter email.   Reset email sent.

  2                    Follow the link in email. Set a new password.              Password reset. Able to log in with new password.
  -------------------- ---------------------------------------------------------- ---------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 11.3 --- User Profile Self-Edit \[CORE\]**

  -------------------- ------------------------------------------------------- --------------------------------------------
  Step                 What to do                                              What you should see

  1                    User edits their own profile (name, phone, language).   Changes saved.

  2                    User attempts to change their role or permissions.      🚫 Blocked --- role changes require Admin.
  -------------------- ------------------------------------------------------- --------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 12 --- Role Permissions (Per Role)**

Each person tests their own account. Check that you can do the things listed, and that you are blocked from things outside your role.

(This group is client-specific --- define one test per role based on the client\'s permission setup. Add, remove, or rename tests to match this client\'s configuration.)

**Test 12.1 --- \[Role Name\] (\[Person Name / Person A\])**

Log in as \[Role Name\] and check the following:

  -------------------- ---------------------------------------- -----------------------------------------------
  Step                 What to do                               What you should see

  1                    Try to \[action this role can do\].      ✅ You can \[perform this action\].

  2                    Try to \[another allowed action\].       ✅ You can \[perform this action\].

  3                    Try to \[action this role cannot do\].   🚫 You cannot --- view only / not accessible.

  4                    Try to \[another restricted action\].    🚫 You cannot --- view only / not accessible.
  -------------------- ---------------------------------------- -----------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 12.2 --- \[Role Name\] (\[Person Name / Person B\])**

\[Repeat the pattern above for each role in client\'s permission matrix.\]

**Test 12.N --- Full Role Approval Flow**

This test follows the full document lifecycle. Each step is done by a different person --- coordinate as a group.

**Part A --- Quotation & Purchase Order (\[Sales Role\] submits)**

  --------------- ---------------- ---------------------------------- --------------------------
  Step            Who              What to do                         What you should see

  1               \[Sales Role\]   Create new Quotation and Submit.   Quotation status → OPEN.

  2               \[Sales Role\]   Create new PO and Submit.          PO submitted and saved.
  --------------- ---------------- ---------------------------------- --------------------------

**Part B --- Sales Order Submission**

Note: \[Sales Role\] has view-only access on SO. SO drafts created by \[Logistics Role\] or \[Finance Role\].

  --------------- -------------------- -------------------------------- ---------------------------------------------
  Step            Who                  What to do                       What you should see

  3               \[Finance Role\]     Create SO, leave Draft.          SO saved as Draft.

  4               \[Logistics Role\]   Open Draft SO, Submit.           Status → TO BILL. \[Logistics\] can submit.

  5               \[Logistics Role\]   Create second SO, leave Draft.   SO saved as Draft.

  6               \[Finance Role\]     Open second Draft SO, Submit.    Status → TO BILL. \[Finance\] can submit.
  --------------- -------------------- -------------------------------- ---------------------------------------------

**Part C --- Delivery Order Submission**

  --------------- -------------------- ------------------------------------ ---------------------
  Step            Who                  What to do                           What you should see

  7               \[Logistics Role\]   Create DN from TO BILL SO. Submit.   DN submitted.

  8               \[Finance Role\]     Open different Draft DN. Submit.     DN submitted.
  --------------- -------------------- ------------------------------------ ---------------------

**Part D --- Pick List**

  --------------- -------------------- ------------------------------------------------ -----------------------------------------------------
  Step            Who                  What to do                                       What you should see

  9               \[Logistics Role\]   Create and submit Pick List from confirmed DN.   Pick List submitted. \[Logistics\] has full access.
  --------------- -------------------- ------------------------------------------------ -----------------------------------------------------

**Part E --- Invoice Submission**

  --------------- ------------------ ------------------------------------------ --------------------------
  Step            Who                What to do                                 What you should see

  10              \[Finance Role\]   Open TO BILL SO. Create Invoice. Submit.   Invoice status → UNPAID.
  --------------- ------------------ ------------------------------------------ --------------------------

**Part F --- Receipt / Payment**

Note: \[Admin Role\] can submit Receipts but cannot create them.

  --------------- ------------------ ---------------------------------------------------------------------- ------------------------------------------------------------
  Step            Who                What to do                                                             What you should see

  11              \[Finance Role\]   Create Receipt against UNPAID Invoice, full amount. Submit.            Receipt submitted. Invoice → PAID.

  12              \[Finance Role\]   Create second Receipt against different UNPAID Invoice. Leave Draft.   Receipt saved Draft. Invoice still UNPAID.

  13              \[Admin Role\]     Open Draft Receipt from Step 12. Submit.                               Receipt submitted. \[Admin\] can submit but cannot create.
  --------------- ------------------ ---------------------------------------------------------------------- ------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** (coordinate across team) **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes (note the step number if any step failed):**

**Group 13 --- Integrations**

**Who tests this:** Tech lead + relevant function

**Test 13.1 --- Accounting System Sync \[INTEGRATION: accounting\]**

  -------------------- ------------------------------------------------------------------------------ -----------------------------------------------------------------
  Step                 What to do                                                                     What you should see

  1                    Submit an Invoice in MAIA. Check accounting system (AutoCount / SQL / Xero).   Invoice record appears in accounting system within sync window.

  2                    Submit a Payment Receipt in MAIA. Check accounting system.                     Payment appears. AR reduced correctly.
  -------------------- ------------------------------------------------------------------------------ -----------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 13.2 --- E-commerce Channel Sync \[INTEGRATION: ecommerce\]**

  -------------------- ---------------------------------------------------------------------------------------------------------- ------------------------------------------------
  Step                 What to do                                                                                                 What you should see

  1                    Update stock on an item in MAIA. Wait for sync. Check the connected channel (Shopee / Lazada / Shopify).   Stock reflected on channel within sync window.

  2                    Create a test order on the channel.                                                                        Order appears in MAIA as an inbound document.
  -------------------- ---------------------------------------------------------------------------------------------------------- ------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 13.3 --- WhatsApp Business API Connection \[INTEGRATION: waba\]**

  -------------------- ---------------------------------------------------------------------- --------------------------------------------
  Step                 What to do                                                             What you should see

  1                    Send a test message from a customer WhatsApp to the business number.   Message arrives in MAIA chatbot.

  2                    MAIA sends a reply (e.g., order confirmation).                         Customer receives the message on WhatsApp.
  -------------------- ---------------------------------------------------------------------- --------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Group 14 --- Client-Specific / Regulated Features**

**Who tests this:** \[Role\]

(Include only if applicable --- e.g., compliance forms, regulated product workflows, custom integrations, or business-specific rules agreed in the SOW.)

**Test 14.1 --- Poison / Regulated Product Form \[CONDITIONAL: client sells regulated/poison products\]**

  -------------------- ------------------------------------------------------------- --------------------------------------------------------------------------------------------------------
  Step                 What to do                                                    What you should see

  1                    Create a Sales Order including a product flagged as Poison.   System requires completion of Poison form (customer full address, phone, ID, product-specific fields).

  2                    Submit with incomplete Poison fields.                         Validation blocks submission.

  3                    Complete all required fields and submit.                      Order accepted. Form retained for compliance.

  4                    Export Poison report for date range.                          Report generated with all regulated sales.
  -------------------- ------------------------------------------------------------- --------------------------------------------------------------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 14.2 --- Temperature-Controlled / Perishable Item Handling \[CONDITIONAL: client sells perishables/temperature-controlled items\]**

  -------------------- --------------------------------------------------------- -------------------------------------------------
  Step                 What to do                                                What you should see

  1                    Create a DN for a temperature-controlled item.            System flags the DN with handling requirements.

  2                    Attempt to ship without required handling confirmation.   Warning / block per client rules.
  -------------------- --------------------------------------------------------- -------------------------------------------------

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Test 14.N --- \[Client-Specific Custom Feature\]**

(Optional --- include one test per custom feature/workflow agreed in SOW.)

**Your result:** \[ \] Pass \[ \] Fail \[ \] Issue

**Tested by:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Date:** \_\_\_\_\_\_\_\_\_\_\_\_

**Notes:**

**Results Summary**

  ------------ ------------------------------------- ------------ ------------ ------------
  Test \#      What was tested                       Result       Tested by    Date

  1.1          Create and edit customer                                        

  1.2          Create and edit item                                            

  1.3          Volume-based pricing                                            

  1.4          Customer-specific pricing                                       

  1.5          Credit limit enforcement                                        

  1.6          Bundle / kit item                                               

  1.7          Merge duplicate customers                                       

  2.1          Send order --- text                                             

  2.2          Send order --- voice                                            

  2.3          Send order --- photo                                            

  2.4          Send order --- PDF                                              

  2.5          Pricing + stock check                                           

  2.6          Credit limit at intake                                          

  3.1          Chatbot --- order status                                        

  3.2          Chatbot --- outstanding balance                                 

  3.3          Chatbot --- stock/price inquiry                                 

  3.4          Chatbot --- request invoice copy                                

  3.5          Chatbot --- upload payment proof                                

  3.6          Chatbot --- return request                                      

  4.1          Quotation → SO → Proforma → Invoice                             

  4.2          Duplicate order blocked                                         

  4.3          Manage SO on web app                                            

  4.4          Credit Note / Debit Note                                        

  4.5          Tax and discount computation                                    

  4.6          Item charges                                                    

  4.7          Export CSV (Finance)                                            

  5.1          Full delivery flow                                              

  5.2          Partial delivery                                                

  5.3          Delivery trip with stops                                        

  5.4          COD collection                                                  

  5.5          Return Note (partial)                                           

  5.6          Return Note quantity blocked                                    

  5.7          3rd party shipment                                              

  5.8          External/manual delivery                                        

  6.1          Stock by warehouse                                              

  6.2          Stock by SKU                                                    

  6.3          Stock transfer                                                  

  6.4          Stock reconciliation                                            

  6.5          Stock reservation                                               

  6.6          Stock ledger                                                    

  6.7          Stock alerts                                                    

  7.1          Payment --- single invoice                                      

  7.2          Payment --- FIFO multi-invoice                                  

  7.3          Advance payment                                                 

  7.4          Manual reallocation                                             

  7.5          Payment Voucher (outgoing)                                      

  7.6          Refund flow                                                     

  7.7          Unreconcile / cancel payment                                    

  8.1          Delivery delay reminder                                         

  8.2          Credit limit alert                                              

  8.3          Daily digests                                                   

  8.4          Dashboard widgets                                               

  8.5          Multi-role tabs                                                 

  9.1          Ticket from chatbot                                             

  9.2          Ticket manual create                                            

  9.3          Ticket lifecycle                                                

  10.1         PDF export all doctypes                                         

  10.2         Draft watermark                                                 

  10.3         Attachment in PDF                                               

  11.1         All users log in                                                

  11.2         Password reset                                                  

  11.3         Profile self-edit                                               

  12.1+        Role permission checks                                          

  12.N         Full role approval flow                                         

  13.1         Accounting sync                                                 

  13.2         E-commerce sync                                                 

  13.3         WABA connection                                                 

  14.1+        Client-specific features                                        
  ------------ ------------------------------------- ------------ ------------ ------------

**Totals:** Pass \_\_\_ Fail \_\_\_ Issue \_\_\_ Total \_\_\_

**Overall Feedback**

Any general comments about the system?

Any features that were confusing or difficult to use?

**Sign-Off**

By signing below, the \[Client Name\] team confirms that UAT has been completed and the results above are accurate.

  --------------- --------------- --------------- ---------------
  Name            Role            Signature       Date

                                                  

                                                  

                                                  
  --------------- --------------- --------------- ---------------

**Overall outcome:**

**Approved** --- Ready to go live

**Conditional** --- Go live with the following items to fix first:

Conditions: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Not approved** --- Further fixes required before go live

*This is the MAIA master UAT superset. A client-specific UAT is generated by AI trimming this document against the client\'s confirmed narrative, tech brief, and permission matrix. See \[Doc5_AI_Prompt_Templates.md\](Doc5_AI_Prompt_Templates.md) --- \"UAT Trim Prompt\".*

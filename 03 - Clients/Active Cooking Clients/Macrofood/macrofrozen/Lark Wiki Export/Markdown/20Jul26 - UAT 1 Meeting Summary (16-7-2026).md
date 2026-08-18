**20Jul26 - UAT 1 Meeting Summary (16/7/2026)**

1\. **Workflow After MAIA**

**A. Order Creation and Price Approval**

Salesperson receives the customer's order.

Salesperson sends the order to MAIA, reviews it, and submits the Sales Order.

MAIA checks the selling price:

If the price is below the default or customer-specific price, CJ reviews and approves.

If the price is below the minimum price, David reviews and approves.

**B. Pick-List Preparation**

Every morning, the Warehouse Manager reviews the available Sales Orders.

The Warehouse Manager groups selected Sales Orders into one pick list.

A pick list may contain:

Multiple Sales Orders.

Multiple orders from the same customer.

Orders from different customers.

The Warehouse Manager prints the pick list and gives it to the warehouse workers.

**C. Picking and Quantity Confirmation**

Warehouse workers pick and pack the physical stock based on the printed pick list.

At the end of the picking process, the Warehouse Manager checks whether the physical stock matches the pick list.

The Warehouse Manager takes a photo of the completed pick list and submits it to MAIA.

MAIA detects whether the confirmed picked quantity differs from the original Sales Order quantity.

Where there is a difference, the intended workflow is:

MAIA proposes the updated quantity.

The Sales Order is amended using the confirmed picked quantity.

MAIA informs Grace about the changes.

Grace performs the final review and submits the amended SO.

**Preferred Future Treatment**

The client prefers the confirmed pick-list quantity to automatically amend the Sales Order, with Grace (Account) only needing to review and submit.

This treatment still requires internal confirmation because it is not yet clear whether:

MAIA will automatically amend the Sales Order; or

A user must manually edit the Sales Order after MAIA detects the difference.

**D. Invoice and Delivery Note**

Grace receives a notification when the pick list is completed.

Grace performs the final approval of the confirmed quantities.

Grace creates the invoice and Delivery Note.

Grace submits the Delivery Note.

The warehouse prints the Delivery Note and gives it to the driver.

**E. Delivery and Proof of Delivery**

The driver delivers the goods to the customer.

The driver returns or sends the signed Proof of Delivery.

Accounts uploads the Proof of Delivery to MAIA.

MAIA marks the order as delivered.

**F. Payment and Invoice Knock-Off**

The customer submits payment proof.

Sales or Accounts uploads the payment proof to MAIA.

MAIA creates a draft payment receipt.

Grace checks that the money has been received in the bank.

Grace submits the payment receipt.

The payment receipt is used to knock off the relevant invoice.

2\. **Role Permissions and Approval**

**David --- Boss**

**Access**

Can view all leads, prospects, customers, Sales Orders, and related operational information.

Has overall visibility across the company.

**Approval Responsibility**

Approves selling prices below the minimum price.

**CJ --- Sales Manager**

**Access**

Can view all sales users' leads, prospects, customers, and Sales Orders.

Has broader sales visibility than ordinary sales users.

**Approval Responsibility**

Approves prices below the default selling price or customer-specific price, provided the price is not below the minimum price.

**Salesperson**

**Access**

Can only view their own:

Leads.

Prospects.

Customers.

Sales Orders.

**Allowed Actions**

Receive and submit customer orders through MAIA.

Create Sales Orders.

Convert an existing lead or prospect into a customer.

Upload customer payment proof.

**Restrictions**

Cannot create a customer directly from a raw customer record.

Must first create or use a lead/prospect and then convert it.

Cannot edit:

Credit terms.

Credit limits.

Cannot view other salespeople's leads, prospects, customers, or Sales Orders.

**Apple --- Finance**

**Responsibility**

Sets and maintains customer credit limits.

Manages finance-related customer settings.

**Grace --- Accounts**

**Responsibility**

Receives completed pick-list notifications.

Reviews quantity differences between the pick list and Sales Order.

Performs final submission of amended Sales Orders.

Creates and submits invoices.

Creates and submits Delivery Notes.

Uploads Proof of Delivery.

Verifies that customer payment has entered the bank.

Submits payment receipts.

Knocks off invoices after payment confirmation.

**Lai --- Warehouse Manager**

**Access**

Can view:

Sales Orders.

Pick lists.

Warehouse operational information.

Can group Sales Orders into pick lists.

Can print pick lists.

Can confirm picked quantities.

Can upload completed pick lists.

**Restrictions**

Must not see product cost price.

Should not have access to unnecessary finance information.

**Warehouse Workers**

**Access**

Receive and work from printed pick lists.

Pick and pack the required stock.

**Restrictions**

Should not see product cost price.

Should not edit selling prices, customer credit information, or accounting information.

3\. **Feedback / Requests by Client**

**A. Warehouse and Pick-and-Pack Requests**

**Pick-and-Pack Treatment**

The client wants a clearer Pick-and-Pack workflow, including how the system should treat:

Picking.

Packing.

Quantity confirmation.

SKU replacement.

Sales Order amendment.

Pick-list generation.

Final finance approval.

This requires a separate workflow discussion before implementation.

The expected workflow is:

  --------------------------------------------------------------
  Plain Text\
  Sales Order created in box / pcs / carton / kg\
  ↓\
  Warehouse reviews the order\
  ↓\
  Warehouse confirms:\
  - actual picked quantity in kg\
  - kg per box, where applicable\
  ↓\
  Warehouse may replace the SKU if needed\
  ↓\
  Confirmed information is used to complete the Pick List\
  ↓\
  Warehouse completes and confirms the Pick List\
  ↓\
  MAIA automatically amends the Sales Order:\
  - updates the actual quantity\
  - updates the SKU if it was replaced\
  ↓\
  Grace reviews and submits the amended Sales Order\
  ↓\
  Grace generate Delivery Note and Invoice

  --------------------------------------------------------------

**Multiple Units of Measure**

Sales Orders may be created using different units of measure, including:

Box.

Pieces.

Carton.

Kilogram.

Regardless of the unit used in the Sales Order, the warehouse will confirm the actual picked quantity in **kilograms**. Not only the total weight, but also **kilograms per box,** so they can understand how the packed quantity relates to the number of boxes..

**SKU Replacement**

The client wants the warehouse to be able to replace an SKU during picking and packing.

Example use case:

The ordered SKU appears available.

During packing, the warehouse discovers that it is out of stock.

The warehouse selects a replacement SKU.

The replacement SKU is reflected in the Pick List.

The replacement should not remain only as a warehouse note. It should flow into the final Sales Order and downstream documents.

**Automatic Sales Order Amendment**

Once the Pick List is confirmed, the client's preferred treatment is for MAIA to automatically amend the Sales Order based on the warehouse-confirmed information, then inform Account (Grace) about the change.

This includes:

Actual picked quantity in kilograms.

Kilograms per box, where applicable.

Replacement SKU, if the original SKU was changed.

Grace should not need to manually re-enter these changes. Her role should be to:

Review the amendment.

Submit the amended Sales Order.

Generate the Delivery Note.

Generate the invoice.

**Additional Notes on Pick List**

The pick list should display the additional notes (same as the Sales Order).

Reason:

Warehouse staff may not understand the formal SKU name.

They may recognise the wording or product description used by the salesperson instead.

**Customer Name on Pick List**

The pick list should show the customer name on the front end interface and the PDFs.

Reason:

One pick list may contain multiple Sales Orders.

One customer may have multiple Sales Orders.

Customer names make picking and packing easier to organise.

**Cost-Price Visibility**

Warehouse users must not be able to see product cost price.

**Product Images - batch attachment \[CR\]**

The client wants to upload SKU images whenever a new batch arrives.

Sales users should then be able to ask MAIA for the relevant product image.

The team also needs to confirm whether the MAIA chatbot can actively request a product image from the user.

**B. Sales and Customer Management Requests**

**Inactive-Customer Reminder \[Gap\]**

MAIA should remind the assigned salesperson when a customer has not ordered for a certain period.

**Recurring-Order Reminder \[Gap\]**

MAIA should identify customers with recurring ordering patterns.

Example:

A customer normally orders every week.

The customer does not order this week.

MAIA alerts the salesperson.

MAIA should also be able to ask whether the salesperson wants to recreate the previous order. The salesperson would then review and submit it.

**Sales Dashboard Filter \[Gap\]**

The sales dashboard should be filterable by salesperson.

**Related Customers**

The client wants to link multiple customer records where the customers are related.

Examples include:

Friends.

Related companies.

Customers who know each other and may share price information.

The exact business rule and visibility treatment need further clarification, particularly because customer-specific pricing information may be sensitive.

**C. Core MAIA Feedback**

**Statement of Account**

In addition to downloading the Statement of Account as a PDF, the client wants the option to:

Convert the PDF into an image.

Copy or share the image easily.

**Credit-Control Toggle Naming**

The current customer-profile toggles are confusing because one is expressed positively and the other negatively.

Current concepts include:

Bypass credit limit.

Overdue block.

The client wants both controls to use consistent wording and logic.

Suggested format:

**Credit limit enforced:** Yes / No.

**Overdue block enabled:** Yes / No.

Under this approach, "Yes" consistently means that the control is active.

**Stock Entry \[to discuss with dev\]**

Stock entry may need the following information:

Supplier.

Product cost value.

The client stated that these values may be required before the stock entry can be accepted in the ERP or accounting system.

This request is marked **to assess**.

https://wiki.sql.com.my/wiki/Goods_Received

**Opening Quantity \[to check\]**

The meaning and purpose of "Opening Qty" are unclear.

The team needs to confirm:

Whether it means opening stock balance.

Whether it is an incoming-stock quantity.

Whether it should be editable in MAIA.

How it maps to the ERP or accounting system.

**CRM Notes**

Leads and prospects should support CRM notes.

When a lead or prospect is converted into a customer, the CRM notes should be carried forward into the customer record.

Lead to support CRM notes

Hide Prospect

If convert lead to customer, existing customer exist, need to be able to merge info from lead to existing customer, override with latest data if conflict

**~~Duplicate Lead or Customer Detection~~**

~~The client raised two related scenarios:~~

~~Two salespeople approach the same lead.~~

~~A salesperson treats an old customer as a new lead.~~

~~MAIA should alert the user before conversion where a possible duplicate already exists.~~

~~A proposed detection method is matching by phone number. Other useful matching fields may include:~~

~~Company name.~~

~~Registration number.~~

~~Contact name.~~

~~Email address.~~

4\. **Items Requiring Internal Clarification**

![](20Jul26 - UAT 1 Meeting Summary (16-7-2026)_assets/media/image1.png)

**点击图片可查看完整电子表格**

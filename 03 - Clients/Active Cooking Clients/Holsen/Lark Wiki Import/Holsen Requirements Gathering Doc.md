<title>Holsen Requirements Gathering Doc</title>

# **Company Operations Context & Business Process Flow**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b><b>s</b></th></tr></thead><tbody><tr><td><ul><li>Can you share an overview of your company’s core business (industries, customer types, products/services)?</li></ul></td><td></td></tr><tr><td><ul><li>What does your current <b>order-to-cash</b> process look like (from quotation to invoicing)?</li></ul><br/><em>Eg: Quotation &gt; Sales order &gt; invoice &gt; Pick list &gt; pack orders &gt; schedule delivery &gt; out for delivery &gt; delivered &gt; issue receipt</em></td><td>Enquire for products <br/>Types of stocks <ul><li>Manifactored </li><li>Daily stock items</li></ul><br/>Get quote&gt; issue quotation from customer(sometimes will skip this step for existing customers)&gt; customer give purchase order &gt; holsen give invoice &gt; customer pay&gt;  holsen start production/ have a picklist for picking&gt; after done packing &gt; allocated driver for transportation &gt; customer receive &gt; acknowledgement of DO from customer<br/>Notes<ul><li>item quantity booked, holsen faces issues where sometimes after checking stock and issue invoices and receive payment. Stock will not have. MAIA will need to book the item quantity to avoid this issue</li><li>Customer order prices is fixed no matter the shipment is otw to holsen or already in stock </li></ul></td></tr><tr><td>Could you outline the key roles within your organization that play a critical part in driving or supporting your business processes? <ul><li><em>eg Sales Rep, Logistics, Driver, Finance, Management</em></li></ul></td><td></td></tr><tr><td>Do you operate across multiple outlets, warehouses, or regions? <ul><li>If yes, how many and how are they managed?</li></ul></td><td></td></tr><tr><td>What systems are you currently using and what are their primary use cases (e.g., ERP, CRM, Accounting, Warehouse, POS, Chat, etc.)? <ul><li>For each system, what type of data is being stored, and would you want this data to be pulled into MAIA or kept separate?</li></ul></td><td>UBS <ul><li>Create docs <ul><li>Invoice </li><li>Credit notes</li></ul></li></ul><br/>Word <ul><li>Quotation<br/></li></ul><br/>Excel <ul><li>Creation of Proforma invoice </li><li>Inventory manual management<ul><li>Every delivery they have a C3 document tracked </li></ul></li></ul><br/>All c3 in banket PO <br/>Inventory to do <ul><li>Commotiates prices changes ( will require holsen boss to check) <ul><li>MAIA to include a tracker for prices in the inventory system</li></ul></li><li>Track batch number</li><li>Track C3 </li><li>Track K1 number</li></ul><br/>Customer <ul><li>Customer <ul><li>LWM </li><li>Registred manufractorer </li></ul></li><li>Each customer has a different payment </li><li>Customer are allocated in batch</li><li>Customer(import on manifactorer behalf) quantity must be exact , cannot be lower or higher </li></ul><br/>Payment<ul><li>Cash </li><li>Banks Transfer </li><li>Cheque </li></ul><br/>Customer <ul><li>Company name </li><li>Tin number </li><li>LMW </li><li>Has C3</li></ul><br/>Accoutns <ul><li>Debtors list to track all the customer outstanding payments </li></ul><br/>Delivery <ol><li seq="1">Outstanding balance </li></ol><ul><li>Blanket PO, how many outstanding delivery </li></ul><br/>Packing list <ul><li>Logistics<ul><li>Send list of items to pack to warehouse</li><li>Information in Picklist <ul><li>Sku</li><li>Item name </li><li>Batch number </li><li>KG </li><li>Quantity</li></ul></li></ul></li></ul><br/>Delviery <ul><li>Tiong nam <ul><li>Consignment note </li><li>DO </li><li>Invoice</li></ul></li><li>Gmax</li><li>Individual transporters <ul><li>1-2 order a days </li><li>Order are delivered within 24 hrs </li><li>Outstation (out of 35km radius) <ul><li>Order are delivered within 3 days</li></ul></li></ul></li></ul><br/>Posion good <ul><li>Tied to inventory </li></ul><br/>COA (certificate of analysis) <ul><li>Tied to customer </li><li>Everytime customer orders, they must have COA </li><li>COA normal </li><li>COA with Details <ul><li>Each COA with details varies from customer to custome depending on the Customer's requires (check with Jermaine)</li><li>COA sometimes will need invoice &amp; DO details inside the COA</li></ul></li><li>Generate 2-3 a day (5 -10 min job) </li></ul></td></tr><tr><td>How are new customers being handled currently?</td><td></td></tr><tr><td>Besides WhatsApp, do you also use Telegram, email, or other platforms for communication with clients?</td><td></td></tr></tbody></table>

# **Business Objectives & Success Metrics**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td>What is the main problem statement we are trying to solve with this project?</td><td></td></tr><tr><td>What top-level outcome(s) do we want from automating the entire process? <br/><em>Eg: cost reduction, manpower reduction, etc</em></td><td></td></tr><tr><td>What success metrics (KPIs) will define this project as successful?<ul><li><em>Examples: % reduction in manual errors, average order-to-delivery time, variance in usage reports, customer satisfaction, number of orders processed per rep.</em></li></ul></td><td></td></tr></tbody></table>

## **Sales Management**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td>In your current business process, do customers place custom orders? If yes, how are these custom orders handled?</td><td>If they have custom packing they will create new sku </td></tr><tr><td>What are the most time-consuming tasks for sales reps in the current flow?</td><td>Chase payment<ul><li>Sometimes customers will pay half <ul><li>MAIA must track payments and have clear visibility on customer order to payments</li></ul></li></ul></td></tr><tr><td>Do sales agents face issues tracking payments (outstanding payments..etc)?</td><td></td></tr><tr><td>What is your <b>average order volume per week/month</b>?</td><td><ul><li>170 - 200 invoices</li></ul></td></tr><tr><td>How do you currently generate quotations, sales orders, and invoices?<ul><li>How do you currently generate quotations, sales orders, and invoices? <ul><li>Do you also generate any other related documents (e.g., Purchase Order,Profoma invoice, delivery Order, Credit notes, Receipts, payment vouchers)? <ul><li>If so, could you share some sample documents with us?</li></ul></li></ul></li></ul></td><td>Using UBS </td></tr><tr><td>What is the information needed to create a quotation, sales order, invoice, credit notes..etc?<ol><li seq="1">Customer name</li><li>Email address</li><li>Contact number</li><li>Full address</li><li>Product Items<ol><li seq="1">Price</li><li>Quantity</li></ol></li></ol></td><td>New customers will need to fill out the new customer form <ul><li>Roc name </li><li>Tin nnumber </li><li>Company name </li><li>Address </li></ul><ol><li seq="1">Customer name</li><li>Email address</li><li>Contact number</li><li>Full address</li><li>Product Items<ol><li seq="1">Price</li><li>Quantity</li></ol></li></ol><br/>Holsen to share <ul><li>Quotation </li><li>Proforma invoice</li><li>Invoice </li><li>Credit note </li><li>Purchase order</li><li>DO </li><li>Inventory excel </li><li>Product categlog</li></ul></td></tr><tr><td>Are discounts, credit terms, or approval workflows required before confirming an order?</td><td>-</td></tr><tr><td>Is there any fixed discount that the bot should always apply automatically? (e.g. Buy 5 Free 1)<ol><li seq="1">Are there discounts only for specific customers 15% - 20%</li></ol></td><td>-</td></tr><tr><td>Do you require <b>proforma invoices</b> as part of your workflow?</td><td>yes</td></tr><tr><td>Do you often need to amend sales orders after delivery (e.g., consignment, usage-based billing)?</td><td>-</td></tr><tr><td>How do you currently manage <b>credit notes, returns, and refunds</b>?</td><td>Damanged good, will get return and credit note issuesd </td></tr><tr><td>How are <b>add-on orders </b>handled?</td><td>Before approval of invoice</td></tr><tr><td>Is there a final confirmation step where, after confirming, no edits to the order can be made? (Assuming customers order through whatsapp, messenger, etc)<ol><li seq="1">If not, at what point do you stop customers from editing their orders?</li></ol></td><td>Approval invoice </td></tr></tbody></table>

## **Fulfillment & Logistics**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td>How do you prepare and pack items (pick lists, warehouse instructions)?</td><td>Send item list in Whatsapp group </td></tr><tr><td>What is the delivery process if orders are cancelled or needed to be rescheduled<ul><li>Are there cases where customers <b>add on more/Remove</b> products to the order last minute before delivery is dispatched? If so, what's the process on managing this order ? </li></ul></td><td>No driver chatbot </td></tr><tr><td>How do you handle <b>urgent cases</b> (same-day requests)?</td><td>Yes same process</td></tr><tr><td>Do you generate <b>delivery Order (DO) </b>or similar documents?</td><td>Yes DO generate</td></tr><tr><td>Delivery Orders (DO)<ul><li>How do you keep track of DOs? (manual log, Excel, AutoCount, WhatsApp groups?)</li><li>When is the Delivery order (DO) <b>created </b>?</li></ul></td><td></td></tr><tr><td>What info is critical for logistics to receive when dealing with orders ?</td><td>Batch id <br/>Item <br/>Quantity <br/>Kg</td></tr><tr><td>Are there the same customer, but different delivery addresses?</td><td>Yes </td></tr><tr><td>How are delivery trips planned (route optimization, driver assignment)?</td><td></td></tr><tr><td>Do you use internal fleet, 3rd party logistics, or both?</td><td>Individual contractors </td></tr><tr><td>Are there additional charges / criteria to meet for each of the delivery methods?</td><td>Criteria <ul><li>200kg &lt; (extra delivery charges)</li><li></li></ul></td></tr><tr><td>Do you need to manage <b>proof of delivery</b> (photo, e-signature, receipts)?</td><td></td></tr><tr><td>Do you support <b>consignment models</b> (sending sets/boxes, invoicing based on usage)?</td><td></td></tr><tr><td>Are there any areas you don't deliver to?<ol><li seq="1">What happens if an order is from the areas that you don't deliver to?</li></ol></td><td>-</td></tr><tr><td>Is there a <b>cut-off time</b> for orders in a day? <em>(e.g., orders after 2PM are next-day only?)</em></td><td>Delivery cut time, 10:30 am </td></tr></tbody></table>

## **Inventory Management**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td><ul><li>How do you track stock today ( Excel, ERP, Warehouse management System (WMS) )?</li></ul></td><td></td></tr><tr><td><ul><li>Do your products have <b>bundles/sets</b>? If yes, how do you manage if 1 item in that bundle is out of stock ?</li></ul></td><td></td></tr><tr><td><ul><li>Do your products have regulatory compliance requirements?</li></ul></td><td></td></tr><tr><td><ul><li>How do you handle stock discrepancies (missing/damaged items)?</li></ul></td><td></td></tr><tr><td><ul><li>What notifications/alerts would be useful (low stock, expiring items, reorder)?</li></ul></td><td>Refer to reminder section</td></tr><tr><td><ul><li>Do you require <b>multi-warehouse or outlet-level</b> stock visibility?</li></ul></td><td>No </td></tr></tbody></table>

## **Finance & Accounting**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td><ul><li>Which accounting software are you currently using (AutoCount, SQL, QuickBooks, etc.)?</li></ul></td><td></td></tr><tr><td><ul><li>What are the documents and information needed to be sent over to the accounting system? <br/>E.g. <ul><li>Invoice <ol><li seq="1">Invoice ID</li><li>Customer name</li><li>Email address</li><li>Contact number</li><li>Full address</li><li>Product Items<ol><li seq="1">Price</li><li>Quantity</li></ol></li></ol></li></ul></li></ul></td><td></td></tr><tr><td><ul><li>What documents should sync with your accounting system (invoice, credit note, receipt, payment voucher, debit note, customer/product lists)?</li></ul></td><td></td></tr><tr><td><ul><li>How do you manage <b>credit limits and terms</b>?</li></ul></td><td>Yes, some big customers will have their own credit terms</td></tr><tr><td>Do you require a customer profile setup in MAIA (e.g., legal information, tax IDs, billing details)? <ul><li>If so, do you already have this information set up or stored elsewhere? If the data exists in another system, would you want it to be synced into MAIA, or maintained separately?</li></ul></td><td></td></tr></tbody></table>

# Functionality 

| **Questions** | **Feedback** |
|-|-|
| What ways do you prefer for users to flag for wrong answers or any bugs faced?  <br/>        *•        Report directly in chatbot, report through form provided by chatbot etc* |  |
| How many seconds of “thinking time” are acceptable before a reply feels slow? |  |
| Do we limit answer size on mobile to avoid “wall of text” fatigue?  <br/>*Eg: Foresee that if a certain question's answer is too lengthy, there is a chance that the end users will not spend the time to read* |  |
| Besides the common languages (BM, ENG,CN), are there any other languages the chatbot should reply in? | Normal  |
| Are there **data compliance/privacy** concerns for storing individuals' information in MAIA? |  |

## **User Management & Access**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td>Should approval workflows be <b>role-based or user-specific</b>?<ul><li><em>Eg. Customer Credit limit reached but need approval from management to proceed with new orders</em></li></ul></td><td></td></tr><tr><td>Do you need <b>role-based dashboards</b> (sales KPIs, fulfillment status, finance metrics)?</td><td></td></tr></tbody></table>

---

## **Omnichannel Chat & Customer Engagement**

| **Questions** | **Feedback** |
|-|-|
| Which chat channels are important for your business? (WhatsApp, Telegram, Messenger, Email, Shopee, Lazada, TikTok, etc.) |  |
| Do you need **separate chatbots using different phone numbers?**   <br/>(example; for Sales 1 phone number, Logistics 1 phone number, Drivers 1 phone number, and Customers 1 phone number)? | 1 |

---

## **Document Generation & Customization**

| **Questions** | **Feedback** |
|-|-|
| Which documents are critical for you (example; quotation, SO, DO, invoice, credit note, receipt, voucher, return note, etc.)? |  |
| Do you need documents to be **customized** (example; layout, naming, logo, fonts, tax IDs, registration numbers, disclaimers)? |  |
| Are documents issued per transaction or in bulk (example; batch invoicing, grouped delivery notes)? |  |

---

## **Reminders, Approvals & Automation**

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td>Do you require <b>role-based approval</b> for issuing receipts or vouchers?<ul><li>Eg. Customer Credit limit reached but need approval from management to proceed with new orders</li></ul></td><td>Approval DOs logistic <br/>Each invoice approved by the accounting team </td></tr><tr><td>Do you want automated <b>reminders</b> (e.g., unpaid invoices, follow-ups, stock availability, inactive customers)? If yes, what types of reminders would be most useful for your team? For each reminder, could you share:<ul><li>The situation that should trigger it (e.g., when sales are created, start of the day reminders)</li><li>Who should receive it</li><li>What information should be included in the reminder</li><li>When it should be sent (time of day)</li><li>How often it should be sent (frequency per day)</li></ul></td><td><ol><li seq="1">Blanket order &lt; purchose order </li><li>24 month trigger for expiry</li><li>Re-order products when low quantity </li></ol></td></tr><tr><td>Which workflows require <b>approval steps</b> (selling below selling price , customer credit limit reached, delivery order changes)?</td><td></td></tr><tr><td>Do you want <b>automated workflows</b> (e.g., auto-create Delivery Order after Sales Order, auto-generate invoices after delivery)?</td><td></td></tr></tbody></table>

## **Reporting & Metrics**

| **Questions** | **Feedback** |
|-|-|
| What reports/dashboards are important for you? (Sales, Fulfillment, Finance, Inventory, Customer Satisfaction) |  |
| Do you need **export options** (Excel, PDF, API sync to BI tools)? |  |
| Would you like to receive chatbot performance metrics on a quarterly basis (e.g., reply rate, completion rate, escalation rate) to help review and improve its performance? |  |
| Do you require compliance/audit trails (E-invoice or other regulators)? |  |

## **Future Needs & Scalability**

| **Questions** | **Feedback** |
|-|-|
| Do you anticipate needing **multi-country or multi-currency support**? |  |
| Do you plan to expand into new sales channels (marketplaces, POS, e-commerce)? |  |
| Would you want to explore **AI features** (OCR for receipts/DOs, financial analysis, predictive inventory)? |  |
| Do you foresee integration with **supply chain partners or external warehouses**? |  |
| what would be some features in MAIA you'd like to see in the future? |  |

---

# Others 

<table><colgroup><col/><col/></colgroup><thead><tr><th><b>Questions</b></th><th><b>Feedback</b></th></tr></thead><tbody><tr><td>How would we carry out the UAT (Testing) for this project?</td><td></td></tr><tr><td>Who would be testing the UAT (Testing) from Holsen's side?</td><td></td></tr><tr><td>How should we release the UAT (Testing) for users to test?<br/><em>Eg: roll out to certain sections accordingly</em></td><td></td></tr><tr><td><b>Who will serve as the product owner for this project on  Holsen’s side? This should be someone who:</b><ul><li>Can sign off on UAT (testing) for validation purposes</li><li>Can support Mindhive with requirements gathering and document preparation</li></ul></td><td></td></tr><tr><td>How should we release the product for users to use?<br/><em>Eg: Roll out all at once or release by sections (eg Sales section, Logistics section, Driver section)</em></td><td></td></tr><tr><td>Are there specific compliance or data privacy standards that the chatbot solution must adhere to?</td><td></td></tr><tr><td>Any unique requirements not covered above?</td><td></td></tr><tr><td>Any industry-specific regulatory or reporting standards we should be aware of?</td><td></td></tr></tbody></table>

Action items 

Holsen to share 

- Quotation 
- Proforma invoice
- Invoice 
- Credit note 
- Receipts 
- Payment vouchers 
- Purchase order
- DO 
- Inventory excel 
- Product categlog
- Pick list (photo)
- C3 sample 
- C1 Sample 
- COA Sample
- Blanket order sample



MH 

- Held internal meeting
- Provide NDA

**Fixguru Scope Gathering (17/7/2025)**

**Agenda**

Clarify objectives and expectations of the MAIA solution

Identify detailed process flows

Understand Fixguru's end-to-end business process

Align on key deliverables and next steps

**Questions**

**Business Objectives & Success Metrics**

Painpoints

Operation miscom between sales rep and operation

Inventory \<- stock count

No reminders for internal team on order status, no reminders for customers that needs follow up

No follow up to customers

Custom made products

No tracking of Raw materials

Autocount

Local server but Fixguru set up a cloud server to access the local server

Requirement

Bot reminder

Sales

Remind sales agent to engage with customers

Inventory

Tracking of stocks

Minimum price

Need approval if discount is more than minimum price

No promo

Autocount

Use as main database

Issue quotation, sales order(performa invoice)

Quotation \> Sales order(performa invoice) \> DO \> Invoice (tax invoice)

1 performa invoice will have 2 or more DO

Chatbot to ERP to sync Autocount

Sync to autocount every EOD not live

Lalamove is on the spot delivery orders

Cut of time is 2pm

Business flow with MH chatbot

Order come in \> sales girl comm with bot for set items for tmr \> after picking \> by eod operations will plan the routing for tmr \> bot comm with sale person order is going out \> driver take photo to send to the bot\> bot send imagine to sales person when driver is going out for delivery

Delivery no COD

Pick up has COD,

Payment

Types of payment fixguru have for B2B

Bank transfer, credit card , cash , qr pay

Outstanding payment, block from issue invoice,

Bot to check

Credit limit

Credit term

If all within in limit and term, can issue invoice

Shortage will be refund to customers

Each customer has their own pricing and set discount

B2B has Credit term

Approval, management level to approve credit term

Bot reminder staff to Collect payment

Chatbot

Sales person receive proof of payment \> send to bot \> bot send to account fella for payment validation \> once confirm inform chatbot \> chatbot updates order status and update Sales agent \> create DO and invoice

A bot reminder for sales agent to ask customer who did not order more than 30 days and customer who Never order a particular product again

Coordination

Sales \<\>operation \<\> Driver

The bot can Follow up on quotation and tax invoice

Create a customer (prospect)

Take pic upload to chatbot to create customer(prospect)

Roles

Delivery

Accounts

Sales agents

Operation

Boss

Dashboard analytics

Analysis of overall sales

Approvals

For adjusting invoice when DO is listed as lower than performa invoice

Someone to confirm

Documents samples

Quotation \> Sales order(performa invoice) \> DO \> Invoice (tax invoice)

Quoation

Performa invoice

DO

Invoice

Autocount User acesss

Can only be access after working hours

+:------------------------------------------------------------------------------------------------------+:---------------------------------+
| **Questions**                                                                                         | **Feedback**                     |
+-------------------------------------------------------------------------------------------------------+----------------------------------+
| What is the main problem statement we are trying to solve with this project?                          | Manual work                      |
|                                                                                                       |                                  |
| What key problems are we solving? (Manual work reduction? Faster order processing? Less human error?) | Reduce processing time           |
|                                                                                                       |                                  |
|                                                                                                       | Reminder for all operation       |
|                                                                                                       |                                  |
|                                                                                                       | Coordination of operation        |
|                                                                                                       |                                  |
|                                                                                                       | Reminder stuff to work           |
+-------------------------------------------------------------------------------------------------------+----------------------------------+
| What is the current average order volume, average process time and average time to fulfillment?       | 30+ confirm a day                |
|                                                                                                       |                                  |
|                                                                                                       | Shopee                           |
|                                                                                                       |                                  |
|                                                                                                       | Lazada                           |
|                                                                                                       |                                  |
|                                                                                                       | Dhl                              |
|                                                                                                       |                                  |
|                                                                                                       | Pick up                          |
+-------------------------------------------------------------------------------------------------------+----------------------------------+

**Users & Channels**

**Process related questions**

**Order Creation**

+:----------------------------------------------------------------------------------------------------------------------------------------------------------------+:--------------------------------------------------------------------------------+
| **Questions**                                                                                                                                                   | **Feedback**                                                                    |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| ~~How are new users and guest users being handled currently?~~                                                                                                  |                                                                                 |
|                                                                                                                                                                 |                                                                                 |
| ~~Do you create a new user for every guest that makes a purchase?~~                                                                                             |                                                                                 |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| What are the information needed to create a user profile on?                                                                                                    | All information is stored in autocount                                          |
|                                                                                                                                                                 |                                                                                 |
| Customer name                                                                                                                                                   | Customer name                                                                   |
|                                                                                                                                                                 |                                                                                 |
| Email address (to receive order summary from website)                                                                                                           | Email address (to receive order summary from website)                           |
|                                                                                                                                                                 |                                                                                 |
| Contact number                                                                                                                                                  | Contact number                                                                  |
|                                                                                                                                                                 |                                                                                 |
| Full address                                                                                                                                                    | Full address                                                                    |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | Registration number                                                             |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | Same as farmshop                                                                |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| ~~Same customer account, but different delivery address~~                                                                                                       |                                                                                 |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Will there any seasonal campaigns happening?                                                                                                                    | No                                                                              |
|                                                                                                                                                                 |                                                                                 |
| How would that affect the order creation?                                                                                                                       |                                                                                 |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Is there any fixed discount that the bot should always apply automatically? (e.g. Buy 5 Free 1)                                                                 | Each B2B customer have their own set pricing and discount set                   |
|                                                                                                                                                                 |                                                                                 |
| B2C: no fixed discount                                                                                                                                          |                                                                                 |
|                                                                                                                                                                 |                                                                                 |
| B2B: Discount only for specific customers (hotel, restaurant, cafe or agents) 15% - 20%                                                                         |                                                                                 |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Promo code for customers?                                                                                                                                       | no                                                                              |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Are there other delivery options?                                                                                                                               | B2B                                                                             |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | Standard in house deliver man                                                   |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | On the spot orders                                                              |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | Lalamove                                                                        |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | Self pick up                                                                    |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Are there additional charges / criteria to meet for each of the delivery methods?                                                                               | On the spot delivery                                                            |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | Customer pay according to the lalamove price                                    |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Are there any areas you don\'t deliver to?                                                                                                                      | Deliver to everywhere                                                           |
|                                                                                                                                                                 |                                                                                 |
| What happens if an order is from the areas that you don\'t deliver to?                                                                                          | *Need more details about this*                                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| If customers ordered before 9am, will they be automatically scheduled for today\'s delivery or can they still select the other delivery options?                | Order come in today will cut off at 2pm                                         |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | All information will pass to operation (logistics person)                       |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | They will pick the items and plan the delivery route and load everything by EOD |
|                                                                                                                                                                 |                                                                                 |
|                                                                                                                                                                 | The next morning driver will depart                                             |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Where do you keep track of customer accounts?                                                                                                                   | Currently they keep the customer in autocount                                   |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+
| Is there a final confirmation step where after confirming, no edits to the order can be made? (Assuming customers order through other whatsapp, messenger, etc) |                                                                                 |
|                                                                                                                                                                 |                                                                                 |
| If no, at what point do you stop customers from editing their orders?                                                                                           |                                                                                 |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------------------+

**Roles related questions**

+:---------------------------------------------------------------------------------------------------+:-------------------------------------------------------------------------------------------------------------------------------+
| **Questions**                                                                                      | **Feedback**                                                                                                                   |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| How do sales agents currently process orders?                                                      | Chat with customers \> send quotation\> customer pay\> issue DO and invoice to Operation                                       |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Will chatbot handle full order creation or just assist?                                            | Full order creation                                                                                                            |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What customer information is required to create an order?                                          |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Is there an approval step before order confirmation?                                               | Sales agent will need to confirm the payment before continue the next step( issuing DO and invoice)                            |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| After order creation, how is delivery planned? (internal fleet vs. 3rd party)                      | After order creation, DO will be passed to operation(logistics) for planning of the delivery                                   |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Delivery is planned by                                                                                                         |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | If order is a live order (Meaning a same day delivery), sales agent will need to schedule a lalamove order to pickup the order |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What documents are needed for logistics? (e.g., picking list, delivery note)                       | Checklist for picking                                                                                                          |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Delivery Order                                                                                                                 |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Fixguru used Googlekeep for checklist. They copy itemlist from DO and put in google keep                                       |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Will logistics use chatbot for updates or stock picking?                                           |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What functions will the driver chatbot handle? (trip management, delivery proof, payments)         |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What type of delivery proof is required (photo, signature)?                                        |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 5\. Chatbot Scope & Flow                                                                           |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Which platforms will the chatbot be used on? (WhatsApp, Telegram, etc.)                            | Whatsapp only                                                                                                                  |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Do you need B2B and internal team chatflows separated?                                             | Charbot only handles internal operations from Sales agent \> logistics \> Driver                                               |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What languages should chatbot support? (English, Malay, Mandarin?)                                 | English , Malay and chinese                                                                                                    |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Should customers get order status updates via chatbot?                                             | Not customer but internal team (sales agent, operations and driver) to have the latest status and reminder for the order       |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Should chatbot be open to customers or internal use only?                                          | Internal use only                                                                                                              |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 6\. ERP System Scope                                                                               |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Will ERP be the master record for products and customers?                                          | ERP to push all information to autocount, autocount is use for main master record for everthing                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What key processes do you want in ERP? (SO → Invoice → Delivery Note, etc.)                        | Same as farmshop, sales agent \> logistics \> driver                                                                           |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Any special payment terms (credit, deposit, partial payment)?                                      |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Should ERP manage stock count?                                                                     | Yes ERP should manage inventory count                                                                                          |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 7\. Integrations                                                                                   |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Which systems should ERP/chatbot integrate with? (payment gateways, delivery services, accounting) | Chatbot send information to ERP, ERP send information to autocount                                                             |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What data should sync to AutoCount (if applicable)?                                                | Product list                                                                                                                   |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Creation / deletion/edit information                                                                                           |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Inventory management                                                                                                           |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Customer list                                                                                                                  |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Creation / deletion/edit information                                                                                           |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Invoice                                                                                                                        |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Creation / deletion / amendments                                                                                               |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Credit note                                                                                                                    |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Creation / deletion / amendments                                                                                               |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Receipt                                                                                                                        |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Creation / deletion / amendments                                                                                               |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Payment vouchers                                                                                                               |
|                                                                                                    |                                                                                                                                |
|                                                                                                    | Creation / deletion / amendments                                                                                               |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 8\. Operational Scenarios                                                                          |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| How do you handle product returns or rejected deliveries?                                          | Fixguru will issue a refund for damage products                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| How are split orders (partial stock) handled?                                                      |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What's the process for failed deliveries or redelivery?                                            | Fail delivery will scheduled the following day with the same process                                                           |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Should chatbot show customer outstanding balances?                                                 |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 9\. Documents Required                                                                             |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What documents need to be auto-generated? (Invoice, DO, Receipt, Credit Note)                      |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Do you require document approval flows?                                                            |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 10\. Reporting & Dashboard                                                                         |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| What reports do you require? (Sales, stock, delivery status)                                       |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Should chatbot or ERP generate daily/weekly reports?                                               |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 11\. UAT & Rollout                                                                                 |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Preferred approach for UAT? (By department, branch, role)                                          |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Rollout preference (all at once, phased by team or location)?                                      |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Who will be the key project stakeholder from Fixguru's side?                                       |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| 12\. Documentation & Internal Readiness                                                            |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Do you have existing SOPs, workflows, or process docs to share?                                    |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+
| Will Fixguru's internal team assist with system admin post-launch?                                 |                                                                                                                                |
+----------------------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------------------------------------------------+

**More questions**

+:----------------------------------------------------------------------------------------------------------------------------+:--------------------------------------------------+
| **Questions**                                                                                                               | **Feedback**                                      |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
| Who are the end users involved in this project?                                                                             | Sales Agents, Logistics, driver                   |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
| Who are the key users for the chatbot? (Sales agents, logistics, drivers, management?)                                      | Roles                                             |
|                                                                                                                             |                                                   |
|                                                                                                                             | Driver                                            |
|                                                                                                                             |                                                   |
|                                                                                                                             | Accounts (sales agent) \<- to verify payment made |
|                                                                                                                             |                                                   |
|                                                                                                                             | Sales agents                                      |
|                                                                                                                             |                                                   |
|                                                                                                                             | Operation (logistics)                             |
|                                                                                                                             |                                                   |
|                                                                                                                             | Boss                                              |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
| Can you walk us through the full order journey:                                                                             |                                                   |
|                                                                                                                             |                                                   |
| Customer places order via Chatbot → Sales Agent processes → Logistics arranges → Driver delivers → ERP records transaction? |                                                   |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
| Do drivers also need chatbot access (e.g., for delivery trip management, proof of delivery)?                                | Yes                                               |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
| Are there internal approval processes (e.g., manager approval before order proceeds to logistics)?                          |                                                   |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
|                                                                                                                             |                                                   |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
| What categories of questions do they typically ask for help?                                                                |                                                   |
|                                                                                                                             |                                                   |
| *Eg: Hardware issues, network connectivity issues, software related issues, etc*                                            |                                                   |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+
| What is the distribution for each of the categories?                                                                        |                                                   |
|                                                                                                                             |                                                   |
| *Eg: Hardware issues = 20%, network issues = 40%, etc*                                                                      |                                                   |
+-----------------------------------------------------------------------------------------------------------------------------+---------------------------------------------------+

**Knowledge & Content**

  -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------
  **Questions**                                                                                                                    **Feedback**

  Are there any existing FAQs that we can use to train AI with?                                                                    

  How often is the FAQ updated and who is responsible for updating it?                                                             

  Are there any guides that the help desk personnel use to reply to user queries?                                                  

  What category of questions is the toughest to handle? Can you provide some examples and how are they currently being resolved?   
  -------------------------------------------------------------------------------------------------------------------------------- -----------------------------------

**Workflow Design**

  --------------------------- -----------------------------------
  **Questions**               **Feedback**

                              

                              

                              

                              
  --------------------------- -----------------------------------

**Systems & Integrations**

+:--------------------------------------------------------------------------------------------------------+:---------------------------------+
| **Questions**                                                                                           | **Feedback**                     |
+---------------------------------------------------------------------------------------------------------+----------------------------------+
| What ticketing system is being used right now?                                                          |                                  |
|                                                                                                         |                                  |
| If yes, will this system remain or do we need another ticketing system and chat intervention interface? |                                  |
+---------------------------------------------------------------------------------------------------------+----------------------------------+
| What are the current monthly or annual costs associated with your POS provider's support services?      |                                  |
+---------------------------------------------------------------------------------------------------------+----------------------------------+
| Do we need to log the interactions of users and the bot?                                                |                                  |
|                                                                                                         |                                  |
| If yes, where should these data be displayed?                                                           |                                  |
+---------------------------------------------------------------------------------------------------------+----------------------------------+
| Where should the system be hosted at? MH side or TF Value Mart\'s side?                                 |                                  |
+---------------------------------------------------------------------------------------------------------+----------------------------------+

**Features & Functionalities**

+:----------------------------------------------------------------------------------------------------------------------------------------+:---------------------------------+
| **Questions**                                                                                                                           | **Feedback**                     |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| What are some functionalities that you would like to see in this AI chatbot?                                                            |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| What are some other modules you\'d like to see together with the chatbot?                                                               |                                  |
|                                                                                                                                         |                                  |
| Eg: Dashboard                                                                                                                           |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| How can users flag for wrong answers or any bugs faced?                                                                                 |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| How many seconds of "thinking time" are acceptable before a reply feels slow?                                                           |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Do we limit answer size on mobile to avoid "wall of text" fatigue?                                                                      |                                  |
|                                                                                                                                         |                                  |
| *Eg: Foresee that if a certain question\'s answer is too lengthy, there is a chance that the end users will not spend the time to read* |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| What channels should the chatbot support?                                                                                               |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| What languages and tone of voice should the chatbot reply in?                                                                           |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| After the chatbot is built, how would the users interact with it?                                                                       |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

**Others**

+:---------------------------------------------------------------------------------------------------------------------------------------------+:---------------------------------+
| **Questions**                                                                                                                                | **Feedback**                     |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| How would we carry out the UAT for this project?                                                                                             |                                  |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Who would be testing the UAT from TF Value Mart\'s side?                                                                                     |                                  |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| How should we release the UAT for users to test?                                                                                             |                                  |
|                                                                                                                                              |                                  |
| *Eg: Roll out to certain outlets, roll out to certain areas, roll out to outlets with a mixed frequency of tickets raised, etc*              |                                  |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Who would be the product owner for this project on TF Value Mart\'s side?                                                                    |                                  |
|                                                                                                                                              |                                  |
| Someone who signs off on the UAT                                                                                                             |                                  |
|                                                                                                                                              |                                  |
| Someone who can assist Mindhive in requirements gathering and preparing documents                                                            |                                  |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| How should we release the product for users to use?                                                                                          |                                  |
|                                                                                                                                              |                                  |
| *Eg: Roll out to all outlets at once, release phase by phase, etc*                                                                           |                                  |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Are there specific compliance or data privacy standards that the chatbot solution must adhere to?                                            |                                  |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| What would be your target timeline for ROI, and how quickly would you want to reduce or eliminate the current external POS support expenses? |                                  |
+----------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

**Action Points**

Write PRD

Issue SOW

**Process Related Questions**

**Order Creation**

+:----------------------------------------------------------------------------------------------------------------------------------------------------------------+:---------------------------------+
| **Questions**                                                                                                                                                   | **Feedback**                     |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| How are new users and guest users being handled currently?                                                                                                      |                                  |
|                                                                                                                                                                 |                                  |
| Do you create a new user for every guest that makes a purchase?                                                                                                 |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| What are the information needed to create a user profile on Woocommerce?                                                                                        |                                  |
|                                                                                                                                                                 |                                  |
| Customer name                                                                                                                                                   |                                  |
|                                                                                                                                                                 |                                  |
| Email address (to receive order summary from website)                                                                                                           |                                  |
|                                                                                                                                                                 |                                  |
| Contact number                                                                                                                                                  |                                  |
|                                                                                                                                                                 |                                  |
| Full address                                                                                                                                                    |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Same customer account, but different delivery address                                                                                                           |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Will there any seasonal campaigns happening?                                                                                                                    |                                  |
|                                                                                                                                                                 |                                  |
| How would that affect the order creation?                                                                                                                       |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Is there any fixed discount that the bot should always apply automatically? (e.g. Buy 5 Free 1)                                                                 |                                  |
|                                                                                                                                                                 |                                  |
| B2C: no fixed discount                                                                                                                                          |                                  |
|                                                                                                                                                                 |                                  |
| B2B: Discount only for specific customers (hotel, restaurant, cafe or agents) 15% - 20%                                                                         |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Promo code for customers?                                                                                                                                       |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Are there other delivery options?                                                                                                                               |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Are there additional charges / criteria to meet for each of the delivery methods?                                                                               |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Are there any areas you don\'t deliver to?                                                                                                                      |                                  |
|                                                                                                                                                                 |                                  |
| What happens if an order is from the areas that you don\'t deliver to?                                                                                          |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| If customers ordered before 9am, will they be automatically scheduled for today\'s delivery or can they still select the other delivery options?                |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Where do you keep track of customer accounts?                                                                                                                   |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+
| Is there a final confirmation step where after confirming, no edits to the order can be made? (Assuming customers order through other whatsapp, messenger, etc) |                                  |
|                                                                                                                                                                 |                                  |
| If no, at what point do you stop customers from editing their orders?                                                                                           |                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------+

**Payment Processing**

How do you validate if the payment is correct for all the different payment methods:

  --------------------------- --------------------------------------------------- --------------------------------------------------------
  **Payment Method**          **Step by step validation (if everything is ok)**   **Step by step if amount not correct (extra or less)**

  FPX Payment Link (ipay88)                                                       

  QR Code/e-wallet                                                                

  Online Transfer                                                                 

  COD                                                                             
  --------------------------- --------------------------------------------------- --------------------------------------------------------

How are these scenarios handled if it happens?

+:-------------------------------------------------------------------------+:-------------------------------+
| **Scenario**                                                             | **Step by step how to handle** |
+--------------------------------------------------------------------------+--------------------------------+
| What happens if the customer creates an order but does not make payment? |                                |
+--------------------------------------------------------------------------+--------------------------------+
| What happens if customer wants to change order after payment is made     |                                |
|                                                                          |                                |
| Do you cancel the order after *x* amount of time?                        |                                |
+--------------------------------------------------------------------------+--------------------------------+

Are order statuses updated when customers make payment?

How are the order statuses updated currently?

What tools or software is used to update the order status?

**Order Processing**

Walk me through the step by step process on how these documents are generated.

  -------------------- ----------------------------------------------
  **Document**         **Step by step on how to generate**

  Invoice              

  Delivery Order       

  Picking List         

  Delivery Checklist   
  -------------------- ----------------------------------------------

These documents that you prepare everyday, is it for orders to be delivered the same day or is it for the next day\'s delivery?

**Order Preparation**

Regarding the stock count, where does the storekeep update the latest stock count?

What are the tools / softwares that they use?

Sitegaint

Autocount

Products and orders sync everything into autocount

How is the latest stock count reflected?

Is there a master database / list of:

Autocount

Customer details

Past orders

Products (SKU)

Inventory

How are these databases / lists maintained?

SKU

Inventory

What are the current inventory moving practices and the step by step process of handling them?

  -------------------------------- ------------------------------------------------------------
  **Inventory Moving Practices**   **Step by step process on what is done when this happens**

  Restock                          

  Stock being sold                 

  Stock expiry                     

  Internal transfer of stock       
  -------------------------------- ------------------------------------------------------------

Is there a process to state how many products can be sold everyday?

What do the storekeepers refer to when they pick the stock from the warehouse?

What happens if store keeper finds out that one of the orders is actually OOS when they are picking the stock?

Use chatbot to update stock check

What is the step by step process of logistics planning the delivery route?

What documents do they refer to when they plan?

They use google keep

If the scheduled delivery is full but there are requests for same day delivery, how is that being handled?

Delivery is planning

Do you provide both driver and recipient the delivery order document?

**Order Fulfillment (Shipping)**

Walk me through E2E how the shipment process works?

Is there currently a software/tool used to manage all product shippings?

Where are the past orders processed stored?

Any third party shipping couriers used?

Lalamove for on the spot delivery

When will they be used?

Customer request

What is the step by step process of engaging with third party shipping couriers?

After payment is done, information will be passed to operations and operations will get the products, sales agent create lalamove order

How big B2C orders are being handled?

Will the order be split into multiple deliveries?

No order will not split into multiple deliveries

Can B2C customers issue GRN or has the right to not accept deliveries?

What is the step by step process of handling such cases?

What happens if GRN and Invoice amount is different?

What is the step by step process for a COD order?

**Tech Questions**

What is the use of Autocount Cloud in Farmshop\'s operations process?

What information is pushed to Autocount?

What information is pulled from Autocount?

Are these APIs available on Woocommerce?

+:-----------------------------------------------------+:---------------+:--------------------+
| **API**                                              | **Available?** | **Customizable?**   |
+------------------------------------------------------+----------------+---------------------+
| Document generation API (Invoice and Delivery Order) |   ----- ----   |   -------- -------- |
|                                                      |   Yes   No     |   Yes      No       |
|                                                      |                |                     |
|                                                      |   ----- ----   |   -------- -------- |
+------------------------------------------------------+----------------+---------------------+
| Generate a public order link API                     |   ----- ----   |   -------- -------- |
|                                                      |   Yes   No     |   Yes      No       |
|                                                      |                |                     |
|                                                      |   ----- ----   |   -------- -------- |
+------------------------------------------------------+----------------+---------------------+
| Generate payment page link API                       |   ----- ----   |   -------- -------- |
|                                                      |   Yes   No     |   Yes      No       |
|                                                      |                |                     |
|                                                      |   ----- ----   |   -------- -------- |
+------------------------------------------------------+----------------+---------------------+
| Return the check order status API                    |   ----- ----   |   -------- -------- |
|                                                      |   Yes   No     |   Yes      No       |
|                                                      |                |                     |
|                                                      |   ----- ----   |   -------- -------- |
+------------------------------------------------------+----------------+---------------------+

Is tracking.my integrated to Woocommerce?

Can the tracking.my API provide us with the link to show the status of the delivery?

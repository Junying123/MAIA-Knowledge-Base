# Industrial Automation Customer Narrative Document

## 1. Purpose of This Document

This document provides the product and implementation team with the full client context needed to take over Industrial Automation after sales handover.

website: https://iasb.com.my

It combines:

| **Source**            | **What it contributes**                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Signed proposal       | Confirmed scope, commercials, customisations, timeline, assumptions and exclusions                                       |
| Sales clarification   | Client is proceeding with Option 1, no direct Navision integration first                                                 |
| Client discussion     | Clarifies workflow, pain points, timeline sensitivity, integration expectations and sales activity tracking expectations |
| Internal MAIA context | Helps Product understand what is standard, what is customisation, and what must not be overpromised                      |

Important clarification: Industrial Automation currently uses Navision. For Phase 1, the client is proceeding with **Option 1**, which means MAIA will not directly integrate with Navision at the start. Product should treat Navision as the reference system, but MAIA will rely on exported data from Navision, not live sync, for Phase 1.

Primary PIC: Subra, IT Manager

***

## 2. Client Snapshot

| **Item**                     | **Details**                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------ |
| Client                       | Industrial Automation / IASB                                                                           |
| Business type                | B2B industrial automation business                                                                     |
| Main PIC                     | Subra, IT Manager                                                                                      |
| Current system               | Navision                                                                                               |
| Possible future ERP          | Microsoft Dynamics                                                                                     |
| Estimated order volume       | Approximately 1,350 orders per month                                                                   |
| Main communication channel   | WhatsApp                                                                                               |
| Phase 1 integration decision | Option 1, no direct Navision integration first                                                         |
| MAIA positioning             | Internal WhatsApp-based sales operations and order coordination assistant                              |
| Confirmed document scope     | Quotation, Sales Order, Sales Invoice, Pick and Pack List, Delivery Note, Proof of Delivery attachment |
| Confirmed customisations     | Approval flows and sales activity tracking                                                             |
| One-time commercial          | RM18,000 after RM5,000 signing discount                                                                |
| Monthly subscription         | RM2,000/month for up to 2,000 successful orders/month                                                  |

Industrial Automation’s core issue is that their sales and order workflow depends heavily on WhatsApp, manual checking, manual quotation preparation, approval handling, and manual transfer of information into Navision. The signed proposal positions MAIA as an internal WhatsApp-based sales and order assistant with document preparation, approval flow control, backend visibility, open quotation tracking, activity trail, document trail, and sales activity record keeping.

***

## 3. Business Context

Industrial Automation is a B2B industrial automation business that handles inquiries, quotations, sales orders, invoices, warehouse fulfilment, and delivery. They currently use Navision and may move to Microsoft Dynamics in the future. Their day-to-day workflow still relies heavily on WhatsApp, manual checking, manual quotation preparation, and manual transfer of information into Navision. With approximately 1,350 orders per month, their main operational concerns are manual follow-up, approval control, and visibility over open quotations and pending orders.

MAIA should be designed primarily around:

| **Area**                  | **Product interpretation**                                           |
| ------------------------- | -------------------------------------------------------------------- |
| WhatsApp inquiry handling | Staff forward inquiries, quotation requests or orders to MAIA        |
| Customer identification   | MAIA identifies customer based on exported customer list             |
| Item identification       | MAIA identifies item/SKU based on exported item list                 |
| Quotation preparation     | MAIA prepares draft quotation for user review                        |
| Sales Order preparation   | MAIA prepares draft Sales Order for user review                      |
| Pricing checks            | MAIA references exported price list/customer-specific pricing        |
| Stock checks              | MAIA references exported stock data if provided                      |
| Credit checks             | MAIA references exported credit limit/outstanding data if provided   |
| Approval control          | MAIA triggers approval based on agreed rules                         |
| Sales activity tracking   | Salespeople submit location, documents and photos for record keeping |

They operate mainly as:

| **Customer / workflow type**  | **Relevance**                                                                |
| ----------------------------- | ---------------------------------------------------------------------------- |
| B2B customers                 | Main customer type                                                           |
| Repeat business customers     | Likely relevant due to industrial product ordering                           |
| Quotation-based customers     | Important because quotation visibility and conversion to Sales Order matter  |
| Credit customers              | Important because credit limit and overdue payment checks are in scope       |
| Salesperson-managed customers | Important because salesperson activity tracking is part of the customisation |

Important for Product team: Phase 1 should focus on internal WhatsApp-based sales/order processing using exported Navision data. Direct Navision integration and Microsoft Dynamics integration are not part of Phase 1.

***

## 4. Current As-Is Workflow

### 4.1 High-Level Current Flow

| **Step** | **Current workflow**                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------- |
| 1        | Customer sends inquiry, quotation request, PO, or order details through WhatsApp                                    |
| 2        | Salesperson reviews the message manually                                                                            |
| 3        | Salesperson identifies customer, item, quantity and pricing requirement                                             |
| 4        | Salesperson checks pricing, stock, credit limit and overdue payment manually or through Navision-related references |
| 5        | Salesperson prepares quotation                                                                                      |
| 6        | Quotation may require approval depending on discount, pricing exception or credit condition                         |
| 7        | Quotation proceeds to Sales Order                                                                                   |
| 8        | Sales Order proceeds to Sales Invoice                                                                               |
| 9        | Warehouse handles pick and pack                                                                                     |
| 10       | Delivery team handles delivery                                                                                      |
| 11       | Proof of Delivery may be attached                                                                                   |
| 12       | Sales activity and customer visit records are tracked manually today                                                |

### 4.2 Important Operating Detail

Industrial Automation’s workflow is not only order creation. The process involves checks and control before the order can move forward.

| **Operating dependency** | **What Product must know**                   |
| ------------------------ | -------------------------------------------- |
| Customer data            | Comes from Navision export under Option 1    |
| Item data                | Comes from Navision export under Option 1    |
| Pricing data             | Comes from Navision export under Option 1    |
| Stock data               | Only available if included in export         |
| Credit limit data        | Only available if included in export         |
| Overdue/outstanding data | Only available if included in export         |
| Approval rules           | Must be confirmed during kickoff             |
| Final Navision update    | Remains client responsibility under Option 1 |

Product team must remember: under Option 1, MAIA will not have live Navision data. All checks in MAIA will depend on the latest exported data and the agreed update frequency.

***

## 5. Main Pain Points

| **Pain point**                    | **Why it matters**                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------- |
| Heavy WhatsApp dependency         | Inquiries, quotation requests and orders are scattered across WhatsApp conversations              |
| Manual checking                   | Salespeople need to manually identify customers, items, pricing and approval needs                |
| Repetitive key-in / transfer work | Information still needs to be manually transferred into the Navision-related process              |
| Manual quotation preparation      | Slows down response time and creates dependency on experienced staff                              |
| Approval control gaps             | Discounts, pricing exceptions and credit limit cases need structured approval                     |
| Limited open quotation visibility | Management wants clearer view of quotations not yet converted into Sales Orders                   |
| Sales activity tracking is manual | Management lacks structured visibility over visits, location records, documents and photos        |
| Future ERP migration risk         | Client may move from Navision to Microsoft Dynamics, so integration must avoid unnecessary rework |

***

## 6. Products / Item Understanding

Industrial Automation sells B2B industrial automation-related products and technical items. Product team should design Phase 1 around item/SKU matching using the item list exported from Navision.

MAIA should primarily support:

| **Product requirement**     | **Product interpretation**                                                              |
| --------------------------- | --------------------------------------------------------------------------------------- |
| Item/SKU matching           | Match customer request against exported item list                                       |
| Product code recognition    | Support item code/SKU recognition where available                                       |
| Product name recognition    | Support item name and description matching                                              |
| Quantity extraction         | Extract quantity from WhatsApp text, PO, PDF, image or forwarded message where possible |
| Pricing reference           | Use exported standard/customer-specific pricing where available                         |
| Minimum selling price check | Trigger approval if price falls outside agreed rule                                     |
| Stock reference             | Use exported stock data if provided                                                     |
| Human confirmation          | User must review before document proceeds                                               |

Product data required:

| **Data category** | **Required fields**                                                 |
| ----------------- | ------------------------------------------------------------------- |
| Item master       | Item code, item name, description, UOM                              |
| Pricing           | Standard selling price, customer-specific price if applicable       |
| Pricing control   | Minimum selling price rule if applicable                            |
| Stock             | Stock availability if exportable from Navision                      |
| Matching support  | Alternative item names, internal shorthand, common customer wording |
| Categorisation    | Item category/grouping if useful for search/filtering               |

Important: If item names in WhatsApp do not match Navision item names exactly, Product must collect real WhatsApp examples during kickoff.

***

## 7. Customer Types and Buying Behaviour

| **Customer type / behaviour**            | **Product implication**                                                                 |
| ---------------------------------------- | --------------------------------------------------------------------------------------- |
| B2B customers                            | Workflow must support company customer records                                          |
| Customers with credit terms              | Credit limit and overdue checks matter                                                  |
| Customers with customer-specific pricing | Price list export must be confirmed                                                     |
| Repeat customers                         | MAIA can help suggest customer/item references, but must not auto-submit without review |
| Quotation-based buyers                   | Open quotation tracking and quotation-to-Sales Order flow matter                        |
| Salesperson-managed customers            | Sales activity tracking should link to salesperson and customer where possible          |

Important use case: Repeat inquiry or repeat order.

| **Customer may say**           | **Expected MAIA behaviour**                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| “Same as last order”           | Identify customer, ask user to confirm the previous order reference or suggested items |
| “Quote this item again”        | Identify customer and item, prepare draft quotation for review                         |
| “Need same quantity as before” | Suggest possible prior quantity only if historical data is available in MAIA           |
| “Please proceed”               | Prepare draft Sales Order only after user confirmation                                 |

Do not auto-submit repeat orders without human confirmation.

***

## 8. Order Intake Details

### 8.1 Order Formats

Product should expect incoming information through WhatsApp in these formats:

| **Format**                  | **Expected handling**                                           |
| --------------------------- | --------------------------------------------------------------- |
| Text message                | Extract customer, item, quantity, pricing/request intent        |
| Forwarded WhatsApp message  | Extract relevant customer/order details                         |
| Photo or screenshot         | Extract readable order or item details where supported          |
| PDF attachment              | Extract PO or quotation request details where supported         |
| Voice note                  | Only support if voice processing is confirmed in implementation |
| Purchase Order              | Extract customer, item, quantity and order details              |
| Informal order confirmation | Prepare draft quotation or Sales Order for review               |

Product should collect real examples during kickoff before finalising extraction rules.

### 8.2 Language Considerations

Product should expect possible mixed language usage:

| **Language / style** | **Product note**                                   |
| -------------------- | -------------------------------------------------- |
| English              | Likely used for product and business terms         |
| Malay                | May appear in operational communication            |
| Chinese terms        | May appear depending on salesperson/customer usage |
| Product code / SKU   | Important for item matching                        |
| Internal shorthand   | Must be collected from sales team                  |
| Customer shorthand   | Must be collected from real WhatsApp samples       |

## 9. Systems and Tools

| **System / tool**       | **Current role**                                       |
| ----------------------- | ------------------------------------------------------ |
| Navision                | Current ERP/reference system                           |
| Microsoft Dynamics      | Possible future ERP                                    |
| WhatsApp                | Main communication channel for inquiries and orders    |
| Manual / Excel tracking | Used for sales activity and follow-up today            |
| Exported Navision data  | Required for MAIA Phase 1 because Option 1 is selected |

Important: Use Navision only as the reference source for exported data in Phase 1. Do not plan Phase 1 as a direct Navision integration.

***

## 10. Proposed MAIA Role for This Client

### 10.1 Phase 1 Positioning

MAIA should be treated as an internal WhatsApp-based sales operations and order coordination assistant.

| **MAIA is**                             | **MAIA is not**                        |
| --------------------------------------- | -------------------------------------- |
| Internal assistant for staff            | Replacement for Navision               |
| WhatsApp request intake layer           | Replacement for Microsoft Dynamics     |
| Draft quotation/order preparation layer | Direct Navision integration in Phase 1 |
| Approval control layer                  | Customer-facing chatbot                |
| Document and activity trail layer       | GPS attendance system                  |
| Backend visibility layer                | Full ERP system                        |
| Sales activity record-keeping tool      | Full warehouse automation system       |

### 10.2 What MAIA Should Do in Phase 1

| **Function**                   | **In scope?**         | **Notes**                       |
| ------------------------------ | --------------------- | ------------------------------- |
| WhatsApp request intake        | Yes                   | Internal-facing                 |
| Customer inquiry handling      | Yes                   | Based on forwarded messages     |
| Customer identification        | Yes                   | Based on exported customer list |
| Item/SKU identification        | Yes                   | Based on exported item list     |
| Draft quotation preparation    | Yes                   | User review required            |
| Draft Sales Order preparation  | Yes                   | User review required            |
| Pricing reference check        | Yes                   | Based on exported price data    |
| Stock availability check       | Yes, if data provided | Based on exported stock data    |
| Credit limit check             | Yes, if data provided | Based on exported credit data   |
| Overdue payment check          | Yes, if data provided | Based on exported overdue data  |
| Approval workflow              | Yes                   | Customisation                   |
| Open quotation visibility      | Yes                   | Standard filtering              |
| Sales activity tracking        | Yes                   | Customisation                   |
| Direct Navision sync           | No                    | Not included under Option 1     |
| Microsoft Dynamics integration | No                    | Future scope                    |

***

## 11. Signed Scope and Commercials

| **Commercial item**                           | **Amount / treatment**                           |
| --------------------------------------------- | ------------------------------------------------ |
| MAIA Phase 1 implementation                   | RM20,000                                         |
| Approval flow customisation                   | RM3,000, waived FOC                              |
| Sales activity tracking customisation         | RM3,000                                          |
| Special signing discount                      | RM5,000 discount                                 |
| Total one-time payable after discount         | RM18,000                                         |
| Monthly subscription                          | RM2,000/month                                    |
| Monthly order cap                             | Up to 2,000 successful orders/month              |
| Option 1 Navision integration                 | No immediate Navision integration fee            |
| Future Navision integration if later required | RM5,000 to RM10,000 estimate, depending on scope |
| Future Microsoft Dynamics integration         | Separately scoped and charged                    |

Order count definition:

An order should be counted only when it is successfully created in the agreed MAIA workflow, not every message, draft, discussion, or inquiry.

Third-party charges:

Third-party charges, WhatsApp Business API charges, Navision vendor charges, external system charges, hosting/infrastructure charges, and future ERP integration charges are excluded unless separately agreed.

***

## 12. In-Scope Items

| **Category**         | **In-scope item**                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| WhatsApp workflow    | Internal WhatsApp-based request intake                                                              |
| Inquiry handling     | Customer inquiry and quotation request handling                                                     |
| Document preparation | Draft quotation preparation                                                                         |
| Document preparation | Draft Sales Order preparation                                                                       |
| Customer reference   | Customer reference support                                                                          |
| Item reference       | Item and SKU reference support                                                                      |
| Pricing              | Pricing reference support                                                                           |
| Stock                | Stock availability checking based on exported data                                                  |
| Credit               | Credit limit checking based on exported data                                                        |
| Finance check        | Overdue payment checking based on exported data                                                     |
| Quotation visibility | Standard quotation filtering by date                                                                |
| Quotation visibility | Open quotation visibility before conversion into Sales Orders                                       |
| Documents            | Document generation support for agreed sales documents                                              |
| Tracking             | Backend status tracking for quotations, Sales Orders, invoices and related documents                |
| Auditability         | Activity trail showing who changed what and when                                                    |
| Auditability         | Document trail for related documents                                                                |
| Task visibility      | Daily digest or task reminders for pending operational actions                                      |
| Access               | Role-based access where applicable                                                                  |
| Customer control     | Customer creation and customer profile update control, subject to agreed roles and approval process |
| Customisation        | Approval flow customisation                                                                         |
| Customisation        | Sales activity tracking customisation                                                               |

Documents in scope:

| **Document**                 | **In scope** |
| ---------------------------- | ------------ |
| Quotation                    | Yes          |
| Sales Order                  | Yes          |
| Sales Invoice                | Yes          |
| Pick and Pack List           | Yes          |
| Delivery Note                | Yes          |
| Proof of Delivery attachment | Yes          |

***

## 13. Out-of-Scope / Communicated Boundaries

These items should not be built under Phase 1 unless separately approved.

| **Out-of-scope item**                           | **Reason / note**                                     |
| ----------------------------------------------- | ----------------------------------------------------- |
| Direct Navision integration                     | Client is proceeding with Option 1                    |
| Live Navision push/pull sync                    | Not included under Option 1                           |
| Automatic posting of Sales Orders into Navision | Not included under Option 1                           |
| Future Microsoft Dynamics integration           | Future separate scope                                 |
| Full ERP replacement                            | MAIA sits on top of Navision                          |
| Customer-facing chatbot                         | Phase 1 is internal-facing                            |
| B2C-facing workflows                            | Not part of signed scope                              |
| Physical salesperson visit verification         | Sales activity tracking is only record keeping        |
| GPS attendance tracking                         | Not included                                          |
| Branch or regional reporting                    | Not included unless separately scoped                 |
| Advanced quotation conversion dashboard         | Not included unless separately scoped                 |
| Service scheduling                              | Not included unless separately scoped                 |
| Gantt chart                                     | Not included unless separately scoped                 |
| Advanced custom dashboards                      | Not included unless separately scoped                 |
| Full warehouse automation                       | Not included                                          |
| Route optimisation / fleet scheduling           | Not included                                          |
| Finance reconciliation / auto payment knock-off | Not included                                          |
| Navision vendor work                            | Client/vendor responsibility unless separately agreed |
| Client-side hosting/infrastructure management   | Excluded unless separately agreed                     |
| Additional customisations                       | Separate scope and commercial approval required       |

Internal Instruction for Product Team:

These items may come up during kickoff or implementation, but they must be treated as separate scope unless already approved commercially.

***

## 14. Important Workflow Clarifications

### 14.1 Navision vs MAIA

| **Clarification**                          | **Product instruction**                              |
| ------------------------------------------ | ---------------------------------------------------- |
| MAIA does not replace Navision             | Position MAIA as an operational layer                |
| Option 1 means no direct integration       | Do not design live sync                              |
| MAIA uses exported Navision data           | Confirm export files and update frequency            |
| MAIA does not auto-post into Navision      | Final Navision posting remains client responsibility |
| Microsoft Dynamics is future consideration | Do not include in Phase 1                            |

### 14.2 Recommended Phase 1 Flow

| **Step** | **Recommended flow**                                                                          |
| -------- | --------------------------------------------------------------------------------------------- |
| 1        | Customer sends inquiry or quotation request through WhatsApp                                  |
| 2        | Salesperson forwards message to MAIA                                                          |
| 3        | MAIA identifies customer and item                                                             |
| 4        | MAIA checks pricing, stock, credit limit and overdue payment based on available exported data |
| 5        | MAIA prepares draft quotation or Sales Order                                                  |
| 6        | User reviews and confirms                                                                     |
| 7        | Approval is triggered if required                                                             |
| 8        | Document proceeds in MAIA                                                                     |
| 9        | Activity trail and document trail are updated                                                 |
| 10       | Any required Navision update remains manual under Option 1                                    |

### 14.3 Open Quotation Visibility

| **Item**           | **Clarification**                                              |
| ------------------ | -------------------------------------------------------------- |
| Client expectation | See quotations still open and not converted to Sales Orders    |
| MAIA handling      | Standard quotation filtering by date and open status           |
| Customisation?     | No, not treated as customisation                               |
| Not included       | Advanced conversion dashboard by salesperson/region/month/team |

***

## 15. Payment and Finance Flow

The signed scope includes credit and overdue payment checks, but not payment reconciliation or auto finance knock-off.

| **Finance item**               | **Phase 1 handling**                         |
| ------------------------------ | -------------------------------------------- |
| Credit limit check             | Based on exported Navision data, if provided |
| Overdue payment check          | Based on exported Navision data, if provided |
| Outstanding balance visibility | Based on exported data, if provided          |
| Approval for credit exceeded   | In scope under approval flow customisation   |
| Payment knock-off              | Not included                                 |
| Auto payment reconciliation    | Not included                                 |
| Navision payment update        | Manual under Option 1                        |
| Finance posting                | Client responsibility under Option 1         |

Product recommendation:

MAIA should not auto-knockoff payments in Phase 1.

Safe approach:

| **Scenario**                        | **Safe MAIA behaviour**                               |
| ----------------------------------- | ----------------------------------------------------- |
| Customer has overdue payment        | Show warning or trigger approval based on agreed rule |
| Customer exceeds credit limit       | Trigger approval                                      |
| Finance data is outdated            | Show based on latest export only                      |
| Payment update required in Navision | Client handles manually                               |
| Client wants reconciliation         | Separate future scope                                 |

***

## 16. Credit Control

Credit control is relevant and part of the Phase 1 control layer.

| **Credit control area**    | **Expected MAIA support**   |
| -------------------------- | --------------------------- |
| Credit limit visibility    | Show based on exported data |
| Overdue payment visibility | Show based on exported data |
| Credit limit exceeded      | Flag or trigger approval    |
| Hard stop vs warning       | To be confirmed             |
| Approver routing           | Based on approval matrix    |
| Approval record            | Stored in activity trail    |

Product must confirm:

| **Question**                                                                | **Owner to confirm**       |
| --------------------------------------------------------------------------- | -------------------------- |
| What is the credit limit rule?                                              | Finance / management       |
| What counts as credit exceeded?                                             | Finance                    |
| Is overdue payment a hard stop or warning?                                  | Finance / management       |
| Who approves credit exceeded cases?                                         | Finance / management       |
| Does the credit check apply at quotation level, Sales Order level, or both? | Finance / sales operations |
| How often can credit data be exported?                                      | Subra / IT / finance       |

Important:

Credit control accuracy depends on exported Navision data under Option 1.

***

## 17. Stock, Warehouse, Picking, and Fulfilment

### 17.1 What Was Discussed / Included

| **Area**                     | **Included in Phase 1?**                 | **Notes**                 |
| ---------------------------- | ---------------------------------------- | ------------------------- |
| Stock availability check     | Yes, based on exported data if available | Not live sync             |
| Pick and Pack List           | Yes                                      | Document support          |
| Delivery Note                | Yes                                      | Document support          |
| Proof of Delivery attachment | Yes                                      | Attachment support        |
| Backend fulfilment status    | Yes                                      | Standard visibility       |
| Document trail               | Yes                                      | Related document tracking |
| Activity trail               | Yes                                      | User/action tracking      |

### 17.2 Product Boundary

Safe Phase 1:

| **Safe item**              | **Explanation**                 |
| -------------------------- | ------------------------------- |
| Show stock availability    | Based on exported data          |
| Prepare Pick and Pack List | Based on confirmed Sales Order  |
| Prepare Delivery Note      | Based on agreed document format |
| Store POD attachment       | Upload/attachment support       |
| Track fulfilment status    | Backend visibility only         |

Not included unless separately scoped:

| **Out-of-scope warehouse item** | **Note**                    |
| ------------------------------- | --------------------------- |
| Live warehouse sync             | Not included under Option 1 |
| Live Navision inventory update  | Not included                |
| WMS-level automation            | Not included                |
| Bin/location-level picking      | Not included                |
| Route planning                  | Not included                |
| Fleet scheduling                | Not included                |
| Automated stock reconciliation  | Not included                |

Product must clarify:

| **Question**                                  | **Why it matters**          |
| --------------------------------------------- | --------------------------- |
| Can stock data be exported from Navision?     | Required for stock check    |
| How often can stock data be exported?         | Determines data freshness   |
| What is the Pick and Pack List format?        | Required for document setup |
| Is POD mandatory for every delivery?          | Affects workflow rules      |
| Is Delivery Note customer-facing or internal? | Affects template and fields |

***

## 18. Delivery Arrangement

MAIA supports delivery-related document handling and visibility, but the signed Phase 1 is not a full delivery optimisation module.

### 18.1 What MAIA Can Support

| **Delivery-related item**     | **MAIA support**                    |
| ----------------------------- | ----------------------------------- |
| Delivery Note                 | Generate/support agreed format      |
| Proof of Delivery attachment  | Store attachment                    |
| Delivery status               | Track basic status in backend       |
| Document trail                | Link related documents              |
| Pending fulfilment visibility | Show pending status where available |

### 18.2 What MAIA Must Not Do

| **Out-of-scope delivery item** | **Note**                              |
| ------------------------------ | ------------------------------------- |
| Route optimisation             | Not included                          |
| Fleet scheduling algorithm     | Not included                          |
| Driver app                     | Not included                          |
| GPS driver tracking            | Not included                          |
| Delivery capacity planning     | Not included                          |
| Automatic trip planning        | Not included                          |
| Advanced delivery dashboard    | Not included unless separately scoped |

Product should treat delivery as document/status support, not logistics automation.

***

## 19. Multi-WhatsApp Number Situation

There is no confirmed multi-inbox scope in the signed proposal.

Product interpretation:

| **Scenario**                            | **Phase 1 treatment**                |
| --------------------------------------- | ------------------------------------ |
| Staff forward messages to MAIA          | Expected/simple flow                 |
| Multiple salespeople forward messages   | Possible, confirm during kickoff     |
| Multiple company/admin WhatsApp inboxes | Not confirmed                        |
| Direct customer-to-MAIA WhatsApp        | Not Phase 1 unless separately scoped |
| Customer-facing chatbot                 | Not Phase 1                          |

Phase 1 should use the simplest approach unless Product confirms multi-inbox capability is standard.

Product must clarify:

| **Question**                                               | **Why it matters**                |
| ---------------------------------------------------------- | --------------------------------- |
| Which WhatsApp number will staff use to forward requests?  | Setup requirement                 |
| Will multiple salespeople forward messages?                | User identity tracking            |
| Is there a shared sales/admin WhatsApp number?             | Workflow design                   |
| Is customer-facing WhatsApp expected?                      | Scope risk                        |
| Should salesperson identity be tracked by WhatsApp number? | Activity trail and accountability |

***

## 20. Customer-Facing vs Internal-Facing

MAIA should be internal-facing first.

| **Internal-facing flow**              | **Customer-facing flow**                   |
| ------------------------------------- | ------------------------------------------ |
| Customer sends message to salesperson | Customer sends directly to MAIA            |
| Salesperson forwards to MAIA          | MAIA talks directly to customer            |
| MAIA prepares draft                   | MAIA creates order without staff mediation |
| Staff reviews and confirms            | Customer self-serves                       |
| Approval triggered if required        | Higher operational/customer risk           |

Reason:

Because MAIA will rely on exported Navision data under Option 1, customer-facing order creation creates risk if stock, pricing, credit or overdue data is not live.

Recommended Phase 1:

Customer → Salesperson via WhatsApp → Salesperson forwards to MAIA → MAIA prepares draft → Staff reviews/confirms → Approval if required → Document proceeds.

***

## 21. Quotation / Open Quotation / Conversion

Quotation functionality is part of the Phase 1 workflow.

| **Quotation item**                                | **Phase 1 handling**                  |
| ------------------------------------------------- | ------------------------------------- |
| Quotation preparation                             | In scope                              |
| Quotation filtering by date                       | In scope                              |
| Open quotation visibility                         | In scope                              |
| Open quotation not converted to Sales Order       | In scope                              |
| Advanced conversion dashboard                     | Not included                          |
| Conversion ratio by salesperson/region/month/team | Not included                          |
| Win/loss reporting                                | Not included unless separately scoped |

Product should not design Phase 1 around advanced sales analytics unless separately scoped.

***

## 22. Hosting / Deployment

The signed proposal highlights third-party and infrastructure exclusions, but Product must confirm final hosting/deployment arrangement during kickoff.

| **Item**                     | **Product must confirm**                   |
| ---------------------------- | ------------------------------------------ |
| Hosting arrangement          | Mindhive-hosted or client-side environment |
| WhatsApp Business API        | Required or not required                   |
| Infrastructure cost          | Who bears it                               |
| Navision vendor support      | Whether needed                             |
| Client security requirements | Any IT/security restrictions               |
| Third-party charges          | Must be confirmed separately               |

Important:

Third-party charges, WhatsApp Business API charges, external vendor charges, client-side hosting, infrastructure, and future ERP integration costs are excluded unless separately agreed.

Product should not assume hosting/infrastructure cost is included unless explicitly confirmed.

***

## 23. Data Required Before Build

### A. Customer Data

| **Data required**         | **Notes**             |
| ------------------------- | --------------------- |
| Customer list             | From Navision export  |
| Customer code             | Required for matching |
| Customer name             | Required for matching |
| Contact person            | If available          |
| Billing/shipping address  | For documents         |
| Customer-specific pricing | If applicable         |
| Credit limit              | For credit control    |
| Outstanding balance       | If available          |
| Overdue payment status    | If available          |
| Assigned salesperson      | If applicable         |

### B. Item Data

| **Data required**         | **Notes**                            |
| ------------------------- | ------------------------------------ |
| Item code / SKU           | Required                             |
| Item name                 | Required                             |
| Item description          | Useful for matching                  |
| UOM                       | Required for documents               |
| Selling price             | Required                             |
| Minimum selling price     | Required if pricing approval applies |
| Customer-specific pricing | If applicable                        |
| Stock availability        | If available                         |
| Item category/grouping    | Useful for filtering                 |

### C. Document Samples

| **Document sample**           | **Required** |
| ----------------------------- | ------------ |
| Quotation format              | Yes          |
| Sales Order format            | Yes          |
| Sales Invoice format          | Yes          |
| Pick and Pack List format     | Yes          |
| Delivery Note format          | Yes          |
| POD format/upload requirement | Yes          |

### D. Approval Matrix

| **Approval rule**                | **Required clarification** |
| -------------------------------- | -------------------------- |
| Quotation approval rule          | Trigger and approver       |
| Discount approval rule           | Threshold and approver     |
| Minimum selling price exception  | Rule and approver          |
| Credit limit exceeded            | Rule and approver          |
| Customer creation/profile update | Rule and approver          |
| Approval hierarchy               | Role/user mapping          |

### E. Sales Activity Tracking Requirements

| **Requirement**     | **To confirm**                                      |
| ------------------- | --------------------------------------------------- |
| Location submission | Mandatory or optional                               |
| Documents/photos    | Required for all visits or only some                |
| Linkage             | Customer, salesperson, quotation, order or activity |
| Reporting           | What management wants to see                        |
| Verification        | Confirm record-keeping only, not GPS attendance     |

### F. Implementation Details

| **Detail**            | **Owner to confirm**          |
| --------------------- | ----------------------------- |
| UAT PIC               | Client                        |
| UAT response timeline | Client                        |
| Data export owner     | Client / Subra                |
| Data export frequency | Client / IT                   |
| File format           | Client / IT                   |
| Kickoff PICs          | Sales, finance, warehouse, IT |

***

## 24. Suggested UAT Scenarios

| **No.** | **Scenario**                             | **Expected result**                                                       |
| ------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| 1       | WhatsApp inquiry to draft quotation      | MAIA identifies customer/item and prepares draft quotation                |
| 2       | Accepted order / PO to draft Sales Order | MAIA extracts order details and prepares draft Sales Order                |
| 3       | Pricing check                            | MAIA references exported price list                                       |
| 4       | Discount approval                        | MAIA triggers approval if discount rule is met                            |
| 5       | Minimum selling price exception          | MAIA triggers approval if below agreed rule                               |
| 6       | Credit limit exceeded                    | MAIA triggers approval based on exported credit data                      |
| 7       | Overdue payment warning                  | MAIA warns or triggers approval based on agreed rule                      |
| 8       | Open quotation visibility                | User filters open quotations by date                                      |
| 9       | Sales activity tracking                  | Salesperson submits location/photo/document and management reviews record |
| 10      | Customer creation/profile update control | MAIA restricts or routes for approval                                     |
| 11      | Pick and Pack List                       | MAIA generates agreed pick/pack document                                  |
| 12      | Delivery Note and POD                    | MAIA generates delivery note and stores POD attachment                    |
| 13      | Exported data refresh                    | MAIA updates reference data based on agreed file/process                  |
| 14      | No direct Navision integration behaviour | Confirm MAIA does not push/pull live Navision data                        |

***

## 25. Key Risks for Product Team

***

## 26. Product Team Recommendation

Implement Phase 1 as an internal WhatsApp-to-quotation and order preparation workflow using exported Navision data, not as a live Navision integration project.

Recommended Phase 1 Build Focus:

| **Build focus**                                                                       | **Priority** |
| ------------------------------------------------------------------------------------- | ------------ |
| Message intake                                                                        | High         |
| Customer/item extraction                                                              | High         |
| Draft quotation and Sales Order preparation                                           | High         |
| Reference checks using exported customer, item, price, stock, credit and overdue data | High         |
| Approval workflow control                                                             | High         |
| Open quotation visibility                                                             | Medium       |
| Document generation for agreed formats                                                | High         |
| Activity trail and document trail                                                     | High         |
| Sales activity record keeping                                                         | High         |
| Backend visibility                                                                    | High         |
| Human confirmation before proceeding                                                  | High         |

Do not build Phase 1 as:

| **Do not build as**                   | **Reason**                                |
| ------------------------------------- | ----------------------------------------- |
| Direct Navision integration           | Client selected Option 1                  |
| Future Microsoft Dynamics integration | Future scope                              |
| Customer-facing chatbot               | Not signed scope                          |
| Live stock/credit sync system         | Not possible under Option 1               |
| GPS attendance system                 | Sales activity tracking is record keeping |
| Delivery optimisation system          | Not signed scope                          |
| Finance reconciliation system         | Not signed scope                          |
| Custom analytics/dashboard project    | Not signed scope                          |

Final internal instruction:

Product must anchor all implementation discussions around Option 1. Industrial Automation is proceeding with no direct Navision integration first, and all MAIA checks must be designed around the latest exported data provided by the client.

***

## 27. One-Line Product Summary

Industrial Automation is a B2B industrial automation business using Navision and processing approximately 1,350 orders per month. Phase 1 should help internal staff process WhatsApp inquiries and order requests into draft quotations and Sales Orders using exported Navision data, while supporting pricing, stock, credit and overdue checks, approval flow control, document tracking, open quotation visibility, and salesperson activity record keeping. MAIA must not be treated as a live Navision integration, Microsoft Dynamics integration, customer-facing chatbot, GPS visit verification system, delivery optimisation system, warehouse automation system, or finance reconciliation system unless separately scoped.

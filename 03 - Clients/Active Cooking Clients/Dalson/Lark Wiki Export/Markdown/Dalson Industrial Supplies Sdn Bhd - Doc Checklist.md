**Dalson Industrial Supplies Sdn Bhd - Doc Checklist**

**MAIA by Mindhive --- Sample Data Checklist**

**Dalson Industrial Supplies Sdn Bhd**

**Prepared after requirements meeting --- 22 May 2026**

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image1.png)

**点击图片可查看完整电子表格**

+:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Why we need this** To configure MAIA correctly for your business, we need to see your real data. We use these files to understand your customer structure, item naming conventions, pricing approach, and document formats. Do not worry if the data is messy or incomplete --- send what you currently have. It is always better to review real data early. |
|                                                                                                                                                                                                                                                                                                                                                                |
| ⚠️ **Important:** Based on our meeting on 22 May 2026, your main data source is AutoCount (version 2.2). Please export files directly from AutoCount rather than re-typing them. Your accountant should be able to assist. Do not send AutoCount login credentials, passwords, or API keys in this submission.                                                 |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

1\. **Customer Database Export**

**Source: AutoCount debtor maintenance --- export full table as Excel or CSV**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  📋 **From the meeting:** You confirmed all customer records are in a single debtor maintenance table in AutoCount. There is no separate invoicing customer table. Your accountant manages this data and can assist with the export.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image2.png)

**点击图片可查看完整电子表格**

**Sample size:** Export all active customers. Include inactive customers in a separate tab or with a flag column. Include edge cases: missing contact info, multiple delivery addresses, special pricing arrangements.

2\. **Product / Item Database Export**

**Source: AutoCount item master --- export full table as Excel or CSV**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  📋 **From the meeting:** Single UOM per SKU confirmed (pieces only --- no carton/pack variants). No bundle or kit products. Items span a broad range of industrial hardware across many brands. The full item list must be exported before MAIA can be configured for SKU mapping.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image3.png)

**点击图片可查看完整电子表格**

**Sample size:** Export all active items --- the full item master is needed. Include discontinued items in a separate tab. Include edge cases: items with very similar names or codes that are easy to confuse.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ⚠️ **Critical --- SKU alias mapping:** The main pain point from our meeting is that customer PO descriptions often differ from your internal SKU names. If you have any list of known customer aliases (e.g. customer says \"grinding disc 4 inch\" but your code is \"BOSCH-GWS-115MM\"), please include this as a separate tab. Even a partial list is valuable --- MAIA will also learn from real POs once you submit them in Section 4.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3\. **Pricing Data**

**Note: simplified based on meeting --- no formal price list exists**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  📋 **From the meeting:** There is no standard price list. Pricing is ad hoc and customer-specific --- prices are edited manually in each quotation. The standard selling price in AutoCount will be used as the starting baseline. Customer-specific pricing will be built up inside MAIA over time as orders are confirmed.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image4.png)

**点击图片可查看完整电子表格**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  💡 **Going forward:** Once MAIA is live, the system will maintain a customer price table per item. You confirmed during the demo that you are happy to use this feature. Prices will be set per customer as orders are confirmed, and MAIA will auto-apply them on repeat orders.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4\. **Customer Purchase Orders (POs)**

**The most important input for SKU extraction and mapping training**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  📋 **From the meeting:** Customers send POs in varying formats --- different companies use different item codes and descriptions that do not match your internal SKUs. Providing a large and varied set of real customer POs is the single most important step for training MAIA to do accurate extraction and SKU mapping. Target: **20 to 100 POs from as many different customers as possible. More is better.**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image5.png)

**点击图片可查看完整电子表格**

+:-----------------------------------------------------------------------------------------------------------------+
| ⚠️ **How to collect these:**                                                                                     |
|                                                                                                                  |
| Check your WhatsApp chat history --- most customer POs arrive via WhatsApp. Screenshot or forward the originals. |
|                                                                                                                  |
| Check your email for any POs received by email.                                                                  |
|                                                                                                                  |
| Check any physical or scanned POs on file.                                                                       |
|                                                                                                                  |
| Do not clean or format them --- send as-is. Raw real documents are what we need.                                 |
+------------------------------------------------------------------------------------------------------------------+

5\. **Sample Transaction Documents**

**1 clean sample of each document type you actually send to customers**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  📋 **From the meeting:** You are happy to use MAIA\'s template for Sales Orders and Proforma Invoices for new customers. Invoices will continue to be generated via AutoCount. We need 1 real sample of each document type to understand your current field layout, logo placement, and formatting.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image6.png)

**点击图片可查看完整电子表格**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  💡 Send the PDF exactly as you send it to customers --- do not redact or reformat. We need to see the full layout including your company header, logo, all fields, and footer. One real example per document type is sufficient.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6\. **Technical Setup Items**

**Actions required from your side to set up the MAIA infrastructure**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  📋 **From the meeting:** Three technical accounts need to be created and shared with Mindhive before MAIA can be deployed. Brendan will share tutorial videos for each. Your accountant may be able to assist with the AWS setup.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

MAIA Set up Guide Document : [Dalson Industrial Supplies Sdn Bhd - MAIA Setup Guide](https://eg69120xnei.sg.larksuite.com/wiki/ETKvwFzqfiPg2JkH4n5lGofxgTd)

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image7.png)

**点击图片可查看完整电子表格**

+:-------------------------------------------------------------------------------------------------------------------+
| ⚠️ **Security reminder:**                                                                                          |
|                                                                                                                    |
| Do not send your OpenAI API key, AWS credentials, or any passwords via WhatsApp or email.                          |
|                                                                                                                    |
| Store your OpenAI API key in a document saved on a USB drive or secured PC folder --- not in a chat or cloud note. |
+--------------------------------------------------------------------------------------------------------------------+

7\. **MAIA User List**

**Required to create user accounts and grant access to MAIA**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  📋 **How MAIA recognises users:** MAIA identifies each person by the phone number they use to message the MAIA WhatsApp number. Only registered phone numbers are recognised --- if someone messages from an unregistered number, MAIA will not respond and access will be denied. This is by design to protect your business data from unauthorised access.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Please provide the details below for every person who will use MAIA --- including sales coordinators and any managers who need visibility access.

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image8.png)

**点击图片可查看完整电子表格**

+:------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ⚠️ **Important --- use personal numbers, not shared ones:**                                                                                                       |
|                                                                                                                                                                   |
| Each user must be registered with the phone number they personally use to message MAIA.                                                                           |
|                                                                                                                                                                   |
| If a user switches to a different phone or number later, they must notify Mindhive to update their registration --- otherwise MAIA will not recognise them.       |
|                                                                                                                                                                   |
| Do not register a shared office phone or company line as a user number. MAIA uses the number to identify the individual and apply the correct access permissions. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Please fill in the table below and return it with your other data files:**

![](Dalson Industrial Supplies Sdn Bhd - Doc Checklist_assets/media/image9.png)

**点击图片可查看完整电子表格**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  💡 Add or remove rows as needed. Based on our meeting, we expect at least: 2 sales coordinators and 1 manager / owner. If a person uses MAIA in more than one role (e.g. coordinator who also does deliveries), list them once and note both roles in the Role column.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Summary Checklist**

Tick off each item as you prepare it. Items marked ★ are blockers --- kickoff cannot proceed without them.

+:----------------------------------------------------------------------:+:------------------------------:+:----------------------:+:-------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **Data Item**                                                          | **Uploaded to google drive ?** | **Estimated Ready By** | Storage location                                                                                                                                             |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Customer list (name, code, phone, address, credit terms, credit limit) | Done                           |                        | [Autocount files](https://drive.google.com/drive/folders/1Ww9COk79UxkLPQ40czLxCWhk7rktVRRc?usp=sharing)                                                      |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Item / SKU list (code, name, aliases, UOM, category, Standard price)   | Done                           |                        | [Autocount files](https://drive.google.com/drive/folders/1Ww9COk79UxkLPQ40czLxCWhk7rktVRRc?usp=sharing)                                                      |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| User list and WhatsApp phone numbers (authorised MAIA users)           | ~~Done~~                       |                        | [Company User list & Information](https://eg69120xnei.sg.larksuite.com/wiki/B0vGw3ra0iTyhgkPnr5l2ZjXgIh?fromScene=spaceOverview#Ce5GdyajRoCJCYxH6WElsBCngTd) |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Sample PDF Doc format (from AutoCount)                                 | ~~Done~~                       | 25 May 2025            | [Autocount files](https://drive.google.com/drive/folders/1Ww9COk79UxkLPQ40czLxCWhk7rktVRRc?usp=sharing)                                                      |
|                                                                        |                                |                        |                                                                                                                                                              |
| Quotation                                                              |                                |                        |                                                                                                                                                              |
|                                                                        |                                |                        |                                                                                                                                                              |
| Proforma invoice                                                       |                                |                        |                                                                                                                                                              |
|                                                                        |                                |                        |                                                                                                                                                              |
| Invoice                                                                |                                |                        |                                                                                                                                                              |
|                                                                        |                                |                        |                                                                                                                                                              |
| Delivery Order                                                         |                                |                        |                                                                                                                                                              |
|                                                                        |                                |                        |                                                                                                                                                              |
| Credit note                                                            |                                |                        |                                                                                                                                                              |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Product catalogue or brochure                                          | Done                           |                        | [Company Files](https://drive.google.com/drive/folders/135om26ZMMyf70UgQEAneDJIJ-y12JGZT?usp=drive_link)                                                     |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 3--5 sample real WhatsApp order messages (text)                        | ~~Done~~                       |                        | [Whatsapp sample messages](https://drive.google.com/drive/folders/1YZNWWsFSGYv9wz3PrZbpVX8LUaRoZUE1?usp=drive_link)                                          |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1--2 sample voice message orders (audio file)                          | Done                           |                        | [Whatsapp sample messages](https://drive.google.com/drive/folders/1YZNWWsFSGYv9wz3PrZbpVX8LUaRoZUE1?usp=drive_link)                                          |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| 1--2 sample PO documents received from customers                       | ~~Done~~                       |                        | [POs Samples](https://drive.google.com/drive/folders/1FNLcHwNYQ3WBQFFHQeITgZoO102r_tLO?usp=drive_link)                                                       |
+------------------------------------------------------------------------+--------------------------------+------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Data exports**

\[ \] ★ Customer database export from AutoCount (debtor maintenance) --- Excel or CSV

\[ \] ★ Item / SKU list export from AutoCount (full item master with code, name, UOM, price, category, brand)

\[ \] ★ Customer PO samples --- 20 to 100 documents from different customers (all formats accepted)

\[ \] Historical order / sales history export from AutoCount --- last 6--12 months if possible (optional but valuable)

\[ \] Any informal Excel pricing notes per customer (optional)

**Sample documents**

\[/ \] ★ 1 sample invoice (PDF as sent to customers via AutoCount)

\[ /\] ★ 1 sample delivery order / DO (PDF handed to customer at delivery)

\[/ \] 1 sample quotation (PDF as sent to customers)

\[ /\] 1 sample proforma invoice (for new customers requiring upfront payment)

\[ /\] 1 sample credit note (if available)

\[ /\] 1 sample payment receipt (if available)

**Technical setup**

\[ \] ★ New dedicated phone number obtained for MAIA\'s WhatsApp Business API

\[ \] ★ OpenAI account created and API key generated --- stored securely

\[ \] ★ AWS account created and payment method attached

\[ \] ★ Brendan introduced to your accountant (AutoCount dealer) for integration scoping

**Optional but helpful**

\[ \] Product catalogue or brochure (helps with product naming and positioning)

\[ \] Any sample WhatsApp order conversations (helps design the coordinator chat flow)

\[ \] Current AutoCount report samples (daily sales, AR aging, stock movement)

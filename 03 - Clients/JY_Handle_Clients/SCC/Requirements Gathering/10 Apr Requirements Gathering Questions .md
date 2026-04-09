## 1. Current Company structure

1. How is SCC structured at entity level? Are there multiple Sdn Bhd entities or business units involved?

   1. For machine sales and animal feed

2. Which parts of the process are shared across entities, and which parts are handled differently?

***

## 2. **Quotation and pricing**

SCC’s pricing is dynamic, customer-specific, and often maintained outside SAP in Excel. The purchasing manager may give prices directly to sales without updating SAP, and quotation validity is typically 2 weeks. There is a follow-up needed with **Miss Karen** to understand how pricing and quote history are actually maintained.

This means MAIA likely needs:

* customer-specific pricing lookup

* quote validity handling

* a pricing request / response workflow between sales and purchasing

* price history visibility, at least for requested items

Client was also a proposed future-state flow where sales asks MAIA for item pricing, MAIA notifies purchasing, purchasing updates price in MAIA, and MAIA reflects it back to sales.

### Questions to clarify:

1. How are prices created and maintained?

2. How often do price changes happen in reality: daily, weekly, ad hoc, or by customer request only?

3. Do you need MAIA to display the latest approved prices, past quoted prices and who approved them?

***

## 3. **Approval flow before pushing to SAP**

The discussed flow was that the salesman creates a quotation, sales support or manager approves it, then the document is pushed to SAP. **Role permissions** are still needed from SCC.

This means approval routing and role matrix are core dependencies, not optional nice-to-haves.

This means it is needed for integration to SAP.

### Questions to clarify:

1. Which document types need approval before being pushed to SAP?

   1. Example

      1. Salesman create quotation -> sales manager review and approve of creation.

      2. Credit limit increased by finance

2. Require SCC to fill in a **role permission matrix**

   1. This is to list out the roles for different users and what permission/documents they have access to.

***

## 4. **Historical data and go-live migration**

They asked when MAIA data starts. You noted go-live would sync from SAP, but SCC also has past data in folders that is not maintained in SAP, including chopped signed DOs.

This creates a major implementation decision:

* is MAIA only forward-looking from go-live

* or does it need historical document ingestion/search

### Questions to clarify:

1. What are the past data documents stored in folders? including signed DOs, invoices?

2. How is the data currently structured in the folder?

   1. Is the historical folder data structured enough for import, or is it mainly for manual lookup?

3. How far back does SCC want historical visibility: a few months, one year, multiple years?

***

## 5. **Stock reservation visibility**

This is one of the clearest pain points. SCC wants visibility into reserved stock: who is holding it, under which sales order, for which customer, and under which salesperson. They also want the ability to reallocate reserved stock after discussion/decision, plus reminders for stock held too long. Reservation rules are currently situation-based and not clearly defined.

This is not just “show reserved qty.” It is a reservation ownership and control problem.

### Questions to clarify:

1. At what point should stock be considered reserved: quotation stage, sales order stage, approval stage, or manually by user action?

2. Does the stock reservation happen for items that is currently in stock? Future stock for purchasing planning?

3. Who has the right to release or reallocate reserved stock?

4. Should reservation have an expiry period or aging reminder?

   1. What would be the trigger point for the reminder? How many days?

5. If one salesperson is holding stock for too long, who decides whether it can be released?

***

## 6. **Salesman activity / report tracking**

There was a strong idea around salespeople sending voice notes after meetings, capturing company, discussion points, and follow-up context, then compiling that into a sales report. Follow-up is needed with Salesman on what the sales report template should look like.

This sounds like a lightweight CRM / visit reporting layer inside MAIA.

### Questions to clarify:

1. What does the salesperson need to include with the reporting?

2. What minimum information must be captured after a customer meeting?

3. Should voice notes remain as raw records, or should MAIA turn them into structured reports?

   1. Sales report, to get what template/output is needed from

4. How frequently should management receive compiled reports: daily, weekly, or on demand?

***

## 7. **Warehouse pick-pack planning**

They currently get pick/pack information from SAP, and EOD generates a list for the next day. There was a suggestion to group delivery orders by region for delivery planning.

This suggests MAIA may support operational views for warehouse and logistics, but it is still unclear whether this is reporting only, planning only, or execution as well.

**Requires full** understanding of the warehouse flow.

### Questions to clarify:

1. Is the warehouse requirement mainly to generate better pick/pack visibility, or to actively help plan daily deliveries?

2. Is grouping DOs by region a confirmed operational need or just a suggested improvement?

3. Who will use this delivery grouping view: warehouse, transport planner, or sales support?

4. Should MAIA only show the next day packing list, or also help prioritize and sequence deliveries?

5. Should MAIA allow for printing all DO by date?

***

## 8. **Credit limit approval and finance workflow**

Credit limit approval was mentioned and tied to SAP. The Fireflies summary also mentioned credit limits, credit terms, overdue reporting, and payment proof extraction / approval concepts as part of the broader vision discussed.

### Questions to clarify:

1. Who should decide whether an order can proceed when the customer has overdue balances?

2. Is the expectation just visibility and alerting, or actual blocking / approval workflow?

## 9. **Daily sales reporting for finance**

Finance team may use MAIA through WhatsApp to receive scheduled daily sales reports automatically. This would give finance a lightweight way to monitor daily activity without having to manually collect updates from different users or systems.

This suggests MAIA may support finance visibility through scheduled chat-based reporting. It is still unclear what exact information finance needs in the report, who should receive it, and whether the report is only for viewing or should support follow-up actions.

Requires full understanding of what finance wants to monitor daily and how they will use it.

### **Questions to clarify:**

1. What exactly should be included in the daily sales report sent to finance?

2. What time and frequency should the daily report be sent?

3. Should the report be summarized at a high level, or include transaction-level detail?

4. Should past daily reports be searchable or retrievable later through MAIA?

***

## 10. **Finance invoice knock-off (AR)**

Finance team may use MAIA to submit a Statement of Account and have MAIA extract invoice numbers and amounts, then generate a knock-off suggestion list for finance confirmation. There was also an idea for MAIA to record attribution tags against invoices for reporting and analysis.

This suggests MAIA may support finance reconciliation by acting as an assistance layer for invoice knock-off, helping finance match payments or statement lines to open invoices before confirmation. It is still unclear whether MAIA is only meant to suggest matches, or whether it is expected to update finance records directly after approval. It is also unclear how attribution tagging should be governed and used.

Requires full understanding of the finance reconciliation flow.

### **Questions to clarify:**

1. How is payment reconciliation currently done by finance?

2. When finance submits an SOA, what file formats are commonly used: PDF, Excel, image scan, or others?

3. What does MAIA need to extract from the SOA?

4. Should MAIA generate a knock-off suggestion list only?

5. Who has the authority to confirm or reject the knock-off suggestion list?

6. Can one payment/SOA knock off multiple invoices?

7. What should happen if one invoice is only partially paid?





## 11. **Attribution tags for invoice knock-off**

There was also an idea for MAIA to record attribution tags per invoice, such as customer grouping, campaign, account type, or sales channel. This sounds useful for reporting, but it is still unclear whether this is a real operational requirement or just a reporting enhancement.

### **Questions to clarify:**

1. Who will define the attribution tags such as customer group, campaign, channel, or key account type?

2. Should users choose from a fixed tag list, or can they create new tags freely?

3. Is tagging required for every invoice, or only for selected cases?

4. Where should these tags be visible later: finance reports, sales reports, customer reports, or all of them?

5. Are these tags only for internal reporting, or do they affect finance processing rules as well?


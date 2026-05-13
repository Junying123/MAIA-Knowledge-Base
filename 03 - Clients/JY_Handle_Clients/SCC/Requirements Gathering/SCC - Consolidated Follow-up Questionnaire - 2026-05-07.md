---
owner: JY
status: draft
last_reviewed: 2026-05-07
client: SCC
---

# SCC - Consolidated Follow-up Questionnaire

Thank you for the requirements gathering meeting. We reviewed the earlier question lists and combined them into one set of follow-up questions below. The goal is to confirm the final scope and understand the exact workflow before we move into solution design.

Please reply in simple language. If easier, you may answer with screenshots, sample files, voice notes, or short notes.

## Project Scope

1. What we need to know: Which business areas should be included in phase 1 for this project? Based on our current understanding, these may include animal health products, food service equipment, technician service, and e-commerce.

Why we need this: Different business areas may have different users, documents, and approval steps. We need to know what to design first.

Please respond with: A list of each business area and whether it is `include now`, `later phase`, or `not in scope`.

2. What we need to know: Do the included business areas follow the same sales and invoicing process, or does each one work differently?

Why we need this: If the process is different by business area, MAIA needs to support those differences properly.

Please respond with: A short explanation or a simple table showing each business area and its process.

3. What we need to know: Please share sample documents or screenshots that reflect your current process, such as quotations, sales orders, invoices, delivery orders, price sheets, service forms, and SAP screens.

Why we need this: Real examples help us understand the fields, document format, and approval steps more accurately.

Please respond with: Please send the files directly, or send screenshots if the files cannot be shared.

## MAIA and SAP B1 Flow

4. What we need to know: Which steps should happen in MAIA before information is sent into `SAP B1 10.0`?

Why we need this: We need to clearly define what work happens in MAIA and what work stays in SAP.

Please respond with: A step-by-step flow, for example `quotation in MAIA -> approval -> push to SAP`.

5. What we need to know: Which records should sync between MAIA and SAP? For example: customer list, item list, stock, quotation, sales order, invoice, payment, or other records.

Why we need this: This helps us understand what data must stay updated between both systems.

Please respond with: A simple list or checklist of the records that should sync.

6. What we need to know: Which documents or steps must be approved before they are sent to SAP, and who should approve each one?

Why we need this: We need to route each document to the correct person at the correct time.

Please respond with: A simple table: `document/step -> approver -> next step`.

7. What we need to know: Do approval rules change based on customer, order value, or business area?

Why we need this: If approval rules change by situation, we need to capture those conditions clearly.

Please respond with: Yes/no with details and examples, such as `orders above RM 50,000 need Director approval`.

8. What we need to know: Please provide the role permission matrix for the users involved in sales, finance, warehouse, logistics, and management.

Why we need this: We need to know who should be able to create, view, edit, approve, and access each type of document.

Please respond with: A role list or matrix showing `role/job title -> what they can access or approve`.

## Pricing and Quotation

9. What we need to know: How is the selling price decided today, and who gives the final price when a salesperson needs to prepare a quotation?

Why we need this: We need to understand the real pricing process so MAIA can support it properly.

Please respond with: A short description of the current pricing process. A screenshot or sample Excel file is also helpful.

10. What we need to know: Where is pricing maintained today? For example, in SAP, Excel, or through direct confirmation from purchasing.

Why we need this: We need to know where the latest price comes from so salespeople are using the correct information.

Please respond with: A short explanation of where prices are stored and who updates them.

11. What we need to know: How often do prices change, and what usually causes the change?

Why we need this: This helps us understand whether pricing is mostly stable or highly dynamic.

Please respond with: A short answer such as `daily`, `weekly`, `ad hoc`, or `only when requested`, plus a short explanation.

12. What we need to know: Does pricing change by customer, business area, order size, or any other reason?

Why we need this: We need to know whether the same item can have different selling prices in different situations.

Please respond with: Yes/no with details, plus 2 or 3 examples if possible.

13. What we need to know: What price history should MAIA show to users? For example: latest approved price, customer-specific price history, and who approved the price.

Why we need this: This helps users quote more confidently and check what was offered before.

Please respond with: A short list of the pricing details you want users to see.

14. What we need to know: How long is a quotation usually valid after it is sent to a customer?

Why we need this: This helps us support quote expiry reminders and proper follow-up timing.

Please respond with: A simple answer such as `14 days`, `30 days`, or `depends on customer`, with details if needed.

15. What we need to know: How should new items or new SKUs be handled? Please describe the process from request until the item is available for quoting or ordering.

Why we need this: New items usually need a different process from normal repeat items, and we need to understand that flow early.

Please respond with: A short step-by-step description or a sample example.

## Historical Documents and Go-Live

16. What we need to know: When MAIA goes live, should it only show new data from go-live onward, or should older documents also be available?

Why we need this: This affects whether we plan for a fresh start or some level of historical document access.

Please respond with: `new data only` or `include historical data`, with a short explanation.

17. What we need to know: If historical data should be included, what document types are needed and how far back should they go? For example: invoices, delivery orders, signed delivery orders, quotations, or other files.

Why we need this: We need to know exactly what history matters to your team and customers.

Please respond with: A short list of document types and the time range, such as `past 2 years of invoices and signed DOs`.

18. What we need to know: How is your historical data currently organized in folders or files?

Why we need this: The current structure affects how easy it will be to search, import, or reference older records.

Please respond with: A screenshot or simple explanation, such as `by year -> month -> customer`.

## Stock Reservation and Availability

19. What we need to know: At what stage should stock become reserved? For example: at quotation stage, sales order stage, after approval, or only when a user manually reserves it.

Why we need this: We need to know when stock should be blocked so it is not promised twice.

Please respond with: Please choose one option or describe your preferred workflow.

20. What we need to know: Should stock reservation apply only to current warehouse stock, or also to future stock that is still incoming?

Why we need this: This changes how availability should be shown to salespeople and planners.

Please respond with: `current stock only`, `future stock also`, or `both`, with details if needed.

21. What we need to know: When users check reserved stock, what details should they see, and who should be allowed to release or reallocate that stock? For example: customer name, salesperson name, sales order number, or reservation date.

Why we need this: SCC mentioned that visibility of who is holding stock is important for internal coordination and reallocation.

Please respond with: A short list of the details users should see, plus the job titles who can release or reallocate stock.

22. What we need to know: Should MAIA send reminders when stock has been reserved for too long, and if yes, after how many days?

Why we need this: This helps prevent stock from being held too long without action.

Please respond with: Yes/no. If yes, please state the number of days and who should receive the reminder.

## Salesperson Activity and Management Reporting

23. What we need to know: After a salesperson meets a customer, what information must they record?

Why we need this: We need to know the minimum information required to make the visit report useful without making it too troublesome to fill in.

Please respond with: A short list, such as `customer name, discussion summary, follow-up action, next date`.

24. What we need to know: Should salespeople be able to send voice notes, and should MAIA keep them as audio only or turn them into text or structured reports?

Why we need this: This affects how easy it is for salespeople to update the system while they are on the road.

Please respond with: `audio only`, `convert to text`, `convert to structured report`, or `both`, with details if needed.

25. What we need to know: What should management see in the sales report, and how often should they receive it?

Why we need this: We need to understand what information is useful to management and how often they want to review it.

Please respond with: A list of 3 to 5 key items, plus the preferred frequency such as `daily`, `weekly`, or `on demand`.

## Warehouse Pick, Pack, and Delivery Planning

26. What we need to know: How does the warehouse currently receive the pick and pack list, and who uses it?

Why we need this: We want to understand the current workflow before suggesting a better view or process.

Please respond with: A short description plus the job titles involved.

27. What we need to know: What would make pick, pack, or delivery planning easier? For example: grouping delivery orders by region, combining orders, showing stock location, or highlighting urgent orders.

Why we need this: We want to focus on the warehouse improvements that would save the most time.

Please respond with: A short list of the top 2 or 3 improvements that would help most.

28. What we need to know: Should MAIA only show the next day's packing list, or should it also allow users to search, plan, or reorder future and past delivery dates?

Why we need this: This tells us whether the warehouse view is only for daily execution or also for planning.

Please respond with: A short explanation of what time range and flexibility you need.

## Credit Control and Finance Monitoring

29. What we need to know: When a customer has overdue payments, what should happen if a salesperson tries to create a new order?

Why we need this: We need to understand whether the system should block, warn, or hold the order.

Please respond with: Please choose one or explain your preferred rule, such as `warning only`, `hold for approval`, or `block until approved`.

30. What we need to know: Should overdue amounts be checked at the whole-company level, or separately by business area or department?

Why we need this: This is important because SCC mentioned that different departments may deal with the same customer.

Please respond with: `whole company`, `by business area`, or `other`, with a short explanation.

31. What we need to know: Who can approve an order to proceed when a customer has overdue balance or credit limit issues?

Why we need this: We need to know who has the authority to make that decision.

Please respond with: The job title or titles who can approve.

32. What we need to know: What should finance receive in a daily sales or exception report, and when should it be sent?

Why we need this: We need to know what finance wants to monitor each day, such as sales activity, invoice totals, or overdue exceptions.

Please respond with: A list of the key items, the preferred time, and the recipients.

## Payment Knock-Off and Reporting Tags

33. What we need to know: Please describe your current payment knock-off process. We would like to know how finance receives payment information, what file formats are common, and what data must be extracted from those files.

Why we need this: We need to understand the real reconciliation process before deciding how MAIA can help.

Please respond with: A short step-by-step explanation, plus sample files if possible, such as PDF, Excel, email, or image.

34. What we need to know: Should MAIA only suggest knock-off matches for finance to review, or should it update records after approval? Please also let us know how you want to handle one payment covering multiple invoices or a partial payment.

Why we need this: This helps us understand the level of automation you are comfortable with.

Please respond with: A short explanation of your preferred approach, plus who should confirm the result.

35. What we need to know: Would invoice tags be useful for reporting? If yes, what tags would matter most, such as customer group, sales channel, campaign, product category, or salesperson?

Why we need this: Tags can improve reporting, but only if they reflect how your team actually wants to analyze the business.

Please respond with: Yes/no with a short list of the tags you would want.

36. What we need to know: If invoice tags are used, who should maintain the tag list, should the list be fixed or flexible, and where should those tags appear later?

Why we need this: We need to know how the tags will be managed and where they will be useful.

Please respond with: A short answer covering `owner of tags`, `fixed or flexible`, and `which reports should show them`.

## Additional Notes

37. What we need to know: Are there any other workflows, exceptions, or business rules we should know before we finalize the solution design?

Why we need this: Sometimes the most important rule is something that does not appear in the standard flow.

Please respond with: Any extra notes, screenshots, or examples you think we should review.

## See Also

- [[Follow-up Questions - Post Meeting]]
- [[7thMay_Followup_questionaire]]
- [[06_Apr_2026_SCC_Requirements_Gathering_Meeting_Notes]]

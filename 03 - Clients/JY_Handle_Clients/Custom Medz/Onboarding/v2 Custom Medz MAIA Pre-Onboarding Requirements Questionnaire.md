---
owner: [Gareth]
status: draft
last_reviewed: 2026-05-22
lark_url:
---

# Custom Medz MAIA Pre-Onboarding Requirements Questionnaire v2

This questionnaire collects baseline information for Custom Medz before the first MAIA deep-dive meeting. It follows the standard MAIA pre-onboarding questionnaire format and only tailors questions where Custom Medz's known workflow requires it: AutoCount, WhatsApp prescription intake, doctor-specified delivery addresses, finished-goods inventory and reserved stock visibility, and SOA/customer document links.

*To be completed by client before the first deep-dive meeting*

***

**Client Name:** Custom Medz Sdn Bhd  
**Completed By:** Custom Medz to confirm (Name / Role)  
**Date:** Custom Medz to confirm  
**Account Manager (Mindhive):** Custom Medz to confirm

***

## How to Use This Document

This questionnaire collects factual information about your business so we can prepare for a focused and productive first meeting. The meeting itself will focus on *how* your workflows actually run and *where* they break, not on collecting this baseline data.

**Guidelines:**

* Answer as completely as you can. Partial answers are fine. Write "unsure" or "to discuss" for anything unclear, rather than leaving it blank.
* For tables, add or remove rows as needed.
* If a question does not apply to your business, write "N/A."
* Please return this document within **5 business days** of receipt. Your meeting will be scheduled once this is received.

***

## Section 1 - Business Structure

*We need to understand the full picture of your business entities before the meeting, even if only one entity is in scope for Phase 1. Multi-entity structures affect system configuration, data filtering, and integration design.*

**1.1** How many companies or business entities are in your group? List all of them, even if they will not use MAIA immediately.

**Known answer:** Custom Medz Sdn Bhd is the known client entity.  
**To confirm:** Whether there are related pharmacy outlets, operating entities, holding companies, or other entities that share customers, stock, billing, or AutoCount data.

**1.2** Do all entities share the same ERP / accounting system instance, or does each have its own?

**Known answer:** AutoCount is the confirmed accounting and billing system for this project.  
**To confirm:** Whether Custom Medz uses one AutoCount company database or multiple AutoCount databases.

**1.3** Do the entities share the same customer database and item database, or are they separate?

**Known answer:** MAIA needs to reference customer, item, and pricing information.  
**To confirm:** Where the customer master, item master, pricing data, and any doctor/patient delivery address history are maintained today.

**1.4** How many branches, warehouses, or office locations operate across the in-scope entities?

**Known answer:** Custom Medz operates as a healthcare-related compounding pharmacy business.  
**To confirm:** List all in-scope office, compounding, stock storage, pickup, dispatch, or delivery locations.

**1.5** Do you operate in multiple currencies? If yes, which currencies and for which entities/customers?

**Known answer:** Not confirmed.  
**To confirm:** Whether all billing is in MYR, or whether foreign currencies apply to any customers, suppliers, imports, or special orders.

***

## Section 2 - Team & Roles

**2.1** How many people in your company will use MAIA day-to-day? (Approximate is fine.)

**Known answer:** MAIA is expected to be used internally by Custom Medz staff. It is not currently positioned as a customer-facing pharmacy chatbot.  
**To confirm:** Number of day-to-day users.

**2.2** What roles or departments will use the system, and roughly how many people per role?

| Role / Department | Expected MAIA usage based on known narrative | Count |
|---|---|---|
| Order intake / operations staff | Forward prescriptions or order messages, review draft orders, preserve remarks | Custom Medz to confirm |
| Pharmacist / compounding review staff | Review prescription-related details where required | Custom Medz to confirm |
| Finance / receivables staff | Review payment slips, SOA, and customer document link flow | Custom Medz to confirm |
| Management | View workflow status, activity trail, document trail, and exceptions | Custom Medz to confirm |
| IT / technical contact | Coordinate AutoCount, hosting environment, WhatsApp/WABA if needed, inventory/reservation data, and secure document link setup | Custom Medz to confirm |

**2.3** What are your standard operating hours? Do you operate on weekends or public holidays?

**Known answer:** Not confirmed.  
**To confirm:** Normal operating hours, weekend/public holiday coverage, urgent prescription handling, and after-hours expectations.

**2.4** Do any of your staff work in the field (e.g., outdoor salespeople, drivers, service technicians)? If yes, which roles?

**Known answer:** Delivery/address handling is relevant because doctors can specify where an order should be sent.  
**To confirm:** Whether Custom Medz uses in-house delivery staff, dispatch coordinators, third-party couriers, or pickup staff.

**2.5** Do field staff currently have access to your ERP / accounting system? If not, why not? (e.g., no mobile access, VPN too slow, system too complex, licensing cost)

**Known answer:** Not confirmed.  
**To confirm:** Whether delivery or field staff need access to AutoCount, MAIA, WhatsApp order details, or delivery documents.

***

## Section 3 - Current Systems & ERP

*This section is critical for integration planning. Please be as specific as possible. It directly affects cost and timeline.*

**3.1** What is your main ERP / accounting system?

**Known answer:** AutoCount.

**3.2** Have you ever done any integration project with your ERP before? (e.g., connecting it to another system, enabling API access, automated data sync) If yes, describe briefly.

**Known answer:** Not confirmed.  
**To confirm:** Whether AutoCount has existing API, database, import/export, report, or vendor-supported integrations.

**3.3** Are there any customizations in your ERP that are not standard out-of-the-box features? (e.g., custom approval workflows, custom report templates, custom modules, special data fields) If yes, describe briefly.

**Known answer:** AutoCount remains the accounting and billing system. MAIA is positioned as an operational layer on top of AutoCount, not an AutoCount replacement.  
**To confirm:** Custom reports, document templates, item fields, pricing rules, address handling, credit/finance settings, inventory reservation handling, or any existing AutoCount workarounds.

**3.4** Do multiple users share a single ERP login, or does each user have their own account?

**Known answer:** Not confirmed.  
**To confirm:** Current AutoCount user and permission setup.

**3.5** Does your ERP have a test/UAT environment separate from the live system?

**Known answer:** Not confirmed.  
**To confirm:** Whether Mindhive can access a UAT/test AutoCount environment.

**3.6** What other systems or tools do you use alongside the ERP?

| System / Tool | Known / expected usage | Details to confirm |
|---|---|---|
| WhatsApp | Main intake channel for doctor prescriptions and order instructions | Account type, phone ownership, group/chat structure, WABA need |
| AutoCount | Accounting, billing, and document source | Version, database setup, integration method |
| Inventory / reservation tracker | Needed for finished-goods inventory calculation and reserved stock visibility | Whether source is AutoCount, spreadsheet, paper, or staff memory |
| Payment evidence channel | Payment slips and payment follow-up are known pain points | Whether slips arrive through WhatsApp, email, bank portal, or other |
| SOA/document source | Needed for secure customer document link | Source of invoices, credit notes, receipts, SOA |
| Hosting environment | MAIA will be deployed in Custom Medz's environment | Cloud server, office server, VM, managed hosting, access rules |

**3.7** Which of these systems would you want MAIA to connect to?

**Known answer:** AutoCount, WhatsApp, inventory/reservation data source, and SOA/customer document source are the known integration/reference areas.  
**To confirm:** Integration method, access owner, and scope for each system.

**3.8** Are there any systems you plan to replace or stop using once MAIA is live?

**Known answer:** MAIA should not replace AutoCount.  
**To confirm:** Whether any spreadsheets, manual trackers, paper notes, or WhatsApp group practices should be reduced after go-live.

**3.9** What environment will Custom Medz provide for MAIA deployment?

**Known answer:** MAIA will be deployed, hosted, and maintained within Custom Medz's environment unless otherwise agreed in writing.  
**To confirm:** Environment type, access owner, security restrictions, backup expectations, maintenance access, and any healthcare/patient-data requirements.

***

## Section 4 - Products, Inventory & Pricing

### Products & Inventory

**4.1** Approximately how many products / items (SKUs) do you carry?

**Known answer:** Custom Medz handles prescription-based products and compounded products.  
**To confirm:** Number of active AutoCount item codes and number of finished goods/formulas if tracked separately.

**4.2** How often are new items added? (e.g., 5/month, rarely, constantly)

**Known answer:** Not confirmed.  
**To confirm:** Frequency of new items, finished goods, formulas, or compounded products.

**4.3** Do you use product categories, brands, or groupings? If yes, describe briefly.

**Known answer:** Custom Medz is a compounding pharmacy business; categories may include dosage form, therapeutic category, product type, or compounded product grouping.  
**To confirm:** Actual groupings used in AutoCount and by staff during order intake.

**4.4** Do you manage stock across multiple warehouses or locations? If yes, list them.

**Known answer:** Not confirmed.  
**To confirm:** Stock locations, finished-goods locations, raw material locations, compounding areas, and whether each location is represented in AutoCount.

**4.5** Which of the following apply to your products? (Check all that apply.)

* [x] Expiry dates / shelf life - likely relevant for healthcare/compounding; Custom Medz to confirm
* [ ] Batch numbers - Custom Medz to confirm
* [ ] Serial numbers - Custom Medz to confirm
* [ ] Multiple units of measure (e.g., grams, mg, ml, bottles, tubes, capsules, cartons)
* [x] Bundle / kit products (one SKU = multiple items) - relevant to compounded products; exact handling to confirm
* [ ] Product variants (e.g., strength, dosage form, packaging size, route of administration)
* [ ] Product images are important for identification or quotation documents

**4.6** Do you do any processing, cutting, repackaging, or transformation of raw materials into finished goods? If yes, describe what types. (e.g., fish filleting, bulk repackaging into smaller units, assembly)

**Known answer:** Yes. Custom Medz is a compounding pharmacy, so compounding or transformation into finished medication/products is part of the business context.  
**To confirm:** What MAIA needs to understand operationally without becoming a full compounding ERP or formulation engine.

**4.7** Do your salespeople or account managers ever "reserve" stock for specific customers before a confirmed order is placed? If yes, how is this tracked today?

**Known answer:** The clarified customization is for MAIA to calculate finished goods in inventory and show reserved stock.  
**To confirm:** When stock is reserved, who reserves it, where it is tracked, and when reserved stock is released or consumed.

### Pricing

**4.8** How do you manage pricing? (Check all that apply.)

* [ ] One standard price list for all customers
* [ ] Multiple price lists / tiers for different customer segments
* [ ] Customer-specific pricing (negotiated per customer)
* [ ] Doctor / clinic-specific pricing
* [ ] Blanket agreements / contract pricing with individual customers
* [ ] Volume-based or quantity-based discounts
* [ ] Discount-based tiers (e.g., Tier 1 = 20% off, Tier 2 = 15% off)
* [ ] Price varies based on sourcing / import cost at time of order
* [ ] Other: Custom Medz to confirm

**Known answer:** MAIA needs to reference customer, item, and pricing information so staff can ask price questions and prepare draft orders.

**4.9** If you have multiple price lists or tiers, how many are there? What defines each tier?

**Known answer:** Not confirmed.  
**To confirm:** Whether pricing varies by doctor, clinic, customer, item, quantity, formula/product type, or contract.

**4.10** Where is pricing data maintained today? (Check all that apply.)

* [ ] Inside AutoCount
* [ ] In a separate spreadsheet / Excel file
* [ ] In the salesperson's or staff's memory / experience
* [ ] Other: Custom Medz to confirm

**Known answer:** Pricing reference data is required for Phase 1.

**4.11** How frequently do your costs or selling prices change? (e.g., daily for commodities, monthly, annually, by contract period)

**Known answer:** Not confirmed.  
**To confirm:** Frequency of selling price and product cost updates.

**4.12** Is there a person or role responsible for setting or updating prices? If yes, who?

**Known answer:** Not confirmed.  
**To confirm:** Pricing owner and approval process.

***

## Section 5 - Sales & Order Workflow

*In this section, we are collecting facts about your process, not a detailed walkthrough. The walkthrough happens in the meeting.*

**5.1** How do customer orders / enquiries typically arrive? (Check all that apply.)

* [x] WhatsApp (text, voice message, or image)
* [x] Prescription photo / scanned prescription
* [x] Electronic prescription
* [x] Handwritten prescription or handwritten amendment
* [ ] Email
* [ ] Phone call
* [ ] Walk-in / counter
* [ ] Customer portal / website
* [ ] Marketplace (Shopee, Lazada, etc.)
* [ ] Purchase Order document (PDF, Excel, or other format)
* [ ] Other: Custom Medz to confirm

**Known answer:** Main intake channel is WhatsApp. Doctors send prescriptions and order instructions in inconsistent formats. Clarifications may appear later in the message thread.

**5.2** Approximately how many sales orders are processed per day?

**Known answer:** Not confirmed. The commercial proposal references up to 500 orders/month.  
**To confirm:** Typical daily, peak daily, and monthly order volume.

**5.3** How many line items does a typical order contain? (e.g., 5-10 items, 20-50 items, 100+)

**Known answer:** Several patient orders may appear together, with later clarifications appearing between other messages.  
**To confirm:** Typical number of items, prescriptions, and patient orders per WhatsApp thread.

**5.4** Who creates quotations? Who approves them?

**Known answer:** Staff currently manually interpret prescription/order requests and check relevant information.  
**To confirm:** Which roles create order drafts, quotations, or equivalent documents, and which roles approve them.

**5.5** Who creates or confirms sales orders? Is there an approval process?

**Known answer:** MAIA should prepare draft orders for staff review before final processing.  
**To confirm:** Who confirms the MAIA draft and who creates or finalizes the AutoCount document.

**5.6** Are there situations where a quotation or order needs special approval? (e.g., large order value, credit limit exceeded, special pricing, non-standard items, new customer)

**Known answer:** Likely exception areas include unclear prescriptions, handwritten amendments, doctor-specified delivery addresses, special pricing, payment gaps, outstanding balances, reserved stock issues, and customer-specific handling notes.  
**To confirm:** Which exceptions require pharmacist, manager, finance, or operations approval.

**5.7** Do you handle any of the following? (Check all that apply.)

* [ ] Customer returns / exchanges
* [ ] Credit notes
* [ ] Debit notes
* [x] Advance payments or deposits before delivery - payment slip visibility is in scope
* [ ] Partial deliveries (order split across multiple shipments)
* [ ] Back orders (items ordered but not currently in stock)
* [ ] Consignment stock at customer sites
* [ ] Substitution of alternative items when requested item is out of stock
* [x] Doctor-specified patient delivery address - signed customization
* [x] Important handling remarks that must carry forward - known pain point

**5.8** What are the most common reasons your team issues credit notes? (e.g., pricing error, wrong item delivered, early payment discount, quality rejection, wrong serial number)

**Known answer:** Not confirmed.  
**To confirm:** Whether credit notes are caused by pricing errors, order changes, wrong item, wrong delivery address, payment mismatch, cancellation, rejection, or other reasons.

**5.9** Can salespeople currently create credit notes, or is that restricted to finance?

**Known answer:** Not confirmed.  
**To confirm:** AutoCount permission and approval rules for credit notes.

***

## Section 6 - Delivery & Logistics

**6.1** How do you deliver goods to customers? (Check all that apply.)

* [ ] Own fleet / in-house drivers
* [ ] Freelance / contract drivers
* [ ] Third-party courier / logistics company
* [ ] Customer self-pickup
* [ ] Patient direct delivery
* [ ] Other: Custom Medz to confirm

**Known answer:** Delivery address handling is a signed customization. Doctors can specify which address the order should be sent to.

**6.2** Do you plan delivery routes or trips? If yes, how is this done today?

**Known answer:** Not confirmed.  
**To confirm:** Whether MAIA only needs to carry delivery address/remarks into documents, or whether delivery planning/status is also expected.

**6.3** Do drivers currently capture proof of delivery (signature, photo)?

**Known answer:** Not confirmed.  
**To confirm:** Signature, photo, courier tracking, WhatsApp confirmation, or other proof.

**6.4** Do you handle cash-on-delivery (COD)? If yes, how is COD reconciled with finance?

**Known answer:** Not confirmed.  
**To confirm:** Whether payment is collected before delivery, upon delivery, after delivery, or by account terms.

**6.5** Is the delivery order and invoice issued at the same time, or separately?

**Known answer:** Not confirmed.  
**To confirm:** Current AutoCount sequence for quotation/order draft, sales order, invoice, delivery order, receipt, and SOA.

**6.6** For doctor-specified delivery addresses, where does the address come from and where should it appear?

**Known answer:** Doctors can specify which address should be sent to. Custom Medz does not manage the doctor's patient information directly. The address should appear under the address history of the doctor's orders.  
**To confirm:** Sample cases showing the source message/prescription, how address history should look, and how the final delivery order should display the selected address.

***

## Section 7 - Finance, Payments & Credit

**7.1** What payment methods do your customers use? (Check all that apply.)

* [ ] Bank transfer
* [ ] Cheque
* [ ] Cash
* [ ] Cash on delivery (COD)
* [ ] Credit terms (net 30, net 60, etc.)
* [ ] Online payment gateway
* [ ] Other: Custom Medz to confirm

**Known answer:** Payment slips and payment follow-up visibility are in scope.

**7.2** Do you extend credit terms to customers? If yes, what are your standard terms? (e.g., 7 days, 30 days, 60 days)

**Known answer:** Not confirmed.  
**To confirm:** Standard terms and whether terms vary by doctor, clinic, customer, account type, or patient/order context.

**7.3** Do you set credit limits per customer? If yes, what happens when a customer exceeds their limit? (e.g., order blocked, requires manager approval, warning only)

**Known answer:** Not confirmed.  
**To confirm:** Whether this applies to Custom Medz. If yes, describe the current process.

**7.4** Is your credit limit enforcement managed inside the ERP, or tracked manually?

**Known answer:** Not confirmed.  
**To confirm:** Whether this applies to Custom Medz. If yes, describe where it is managed today.

**7.5** How do customers notify you when they have made a payment? (e.g., WhatsApp message to salesperson, email to finance, upload to portal)

**Known answer:** Payment slips/payment-related information are followed up manually today and may be forwarded through WhatsApp.  
**To confirm:** Exact channels and who reviews the payment evidence.

**7.6** Do you send Statements of Account (SOA) to customers? If yes, how often and how? (e.g., monthly PDF email, manual process)

**Known answer:** Statement of Account generation and follow-up is included in the customization package. MAIA should return a password-protected web link that Custom Medz can send to customers. The link should expire after a defined period.

**7.7** Which documents should customers be able to download from the SOA/document link? (Check all that apply.)

* [x] Past invoices
* [x] Credit notes
* [ ] Debit notes
* [x] Receipts
* [x] Statement of Account (SOA)
* [x] Other account documents - exact list to confirm

**To confirm:** Link expiry period, password flow, customer recipient rules, whether links are generated per customer or statement period, and whether AutoCount is the source for all documents.

**7.8** What is your e-invoicing status?

* [ ] Already compliant and automated (auto-sync to LHDN)
* [ ] Compliant but manual submission
* [ ] In progress
* [ ] Not started
* [ ] Not applicable

**Known answer:** Not confirmed.  
**To confirm:** Whether AutoCount handles e-invoicing and whether MAIA needs any related fields.

**7.9** Do customers prefer individual invoices per delivery, or consolidated monthly invoices? (Is it a per-customer preference?)

**Known answer:** Not confirmed.  
**To confirm:** Whether billing is per delivery, prescription, patient/order, doctor/clinic account, or monthly statement.

**7.10** Are there any tax exemption scenarios relevant to your business? (e.g., C1, C3, A57 certificates, LMW, export exemptions)

**Known answer:** Not confirmed.  
**To confirm:** Any tax, healthcare, patient-data, invoice-format, or regulatory requirements that affect MAIA data handling or documents.

***

## Section 8 - Documents & Reports

**8.1** What documents do you currently generate for customers? (Check all that apply.)

* [ ] Quotation
* [ ] Proforma invoice
* [x] Sales order confirmation / order draft - expected workflow output; exact document to confirm
* [x] Invoice - needed for customer document link; current usage to confirm
* [x] Delivery order / delivery note - relevant to delivery address customization
* [ ] Pick list (internal)
* [x] Credit note - needed for customer document link; current usage to confirm
* [ ] Debit note
* [x] Payment receipt - needed for customer document link; current usage to confirm
* [x] Statement of Account (SOA) - signed customization
* [ ] Other: Custom Medz to confirm

**8.2** Are your document templates generated by the ERP's built-in report engine (e.g., Crystal Reports for SAP B1)? If yes, which documents?

**Known answer:** AutoCount is the accounting/billing system.  
**To confirm:** Which document templates are generated by AutoCount and whether any are customized.

**8.3** Are there specific fields, references, or formatting on your documents that your customers or regulators require? (e.g., PO reference, project number, company registration, specific logo placement) Write "to discuss" if easier to show in the meeting.

**Known answer:** Delivery address, handling remarks, payment references, and patient-data handling may matter.  
**To confirm:** Doctor/clinic reference, patient delivery address, prescription reference, handling remarks, company details, confidentiality wording, and any required document fields.

**8.4** What reports do you look at regularly? (e.g., daily sales summary, outstanding AR aging, stock movement, salesperson performance)

**Known answer:** Management needs better visibility into workflow status, activity trail, document trail, payment follow-up, outstanding balances, and exceptions.  
**To confirm:** Regular reports, including pending orders, payment follow-up, outstanding AR/SOA, finished-goods stock, reserved stock, daily sales, and staff workload.

**8.5** Are there any reports you currently build manually in Excel that you wish were automated?

**Known answer:** Finished-goods inventory/reserved stock visibility and SOA/customer document links are known customization areas.  
**To confirm:** Any spreadsheet reports or manual trackers that should be reviewed during onboarding.

***

## Section 9 - Communication & Channels

**9.1** Do you have a WhatsApp Business account? If yes, is it a regular WhatsApp Business app or WhatsApp Business API (WABA)?

**Known answer:** WhatsApp is the main intake channel.  
**To confirm:** WhatsApp account type, phone number ownership, group/chat structure, and whether WABA is needed.

**9.2** Would you want MAIA to communicate with your customers via WhatsApp? (e.g., order confirmations, delivery updates, payment reminders)

**Known answer:** The current known scope should be interpreted as internal-facing first, not a customer-facing pharmacy chatbot.  
**To confirm:** Whether any outbound customer WhatsApp messages are expected in Phase 1.

**9.3** Would you want MAIA to help your internal team via WhatsApp? (e.g., sales staff creating orders through chat, drivers receiving trip details, payment proof forwarding)

**Known answer:** Yes. MAIA is expected to support internal staff through WhatsApp for prescription/order forwarding, price questions, draft review, payment evidence, and workflow status.

**9.4** What primary languages does your team use in daily operations? (e.g., English, Malay, Chinese - specify Mandarin/Cantonese if relevant)

**Known answer:** Not confirmed.  
**To confirm:** Languages used by staff in WhatsApp, prescription handling, remarks, and internal communication.

**9.5** What primary languages do your customers communicate in?

**Known answer:** Not confirmed.  
**To confirm:** Languages used by doctors, clinics, customers, and any mixed-language order examples.

***

## Section 10 - Pain Points & Priorities

**10.1** What are the top 3 problems you want MAIA to solve? (In your own words, be as specific as possible.)

| Priority | Known problem from narrative | Custom Medz confirmation / ranking |
|---|---|---|
| 1 | Messy prescription and order intake through WhatsApp, including inconsistent message formats, photos, handwritten prescriptions, and follow-up clarifications | Custom Medz to confirm |
| 2 | Important delivery remarks and customer-specific handling instructions are not carried forward consistently | Custom Medz to confirm |
| 3 | Payment slips, payment dates, payment amounts, and unresolved balances need clearer visibility and follow-up | Custom Medz to confirm |
| 4 | Management has limited visibility because workflow status is spread across WhatsApp, manual checking, and staff memory | Custom Medz to confirm |
| 5 | Staff need better visibility into finished-goods inventory and reserved stock before confirming orders | Custom Medz to confirm |

**10.2** What currently takes the most time in your daily operations that you wish was faster or easier?

**Known answer:** Manual interpretation of prescriptions/order requests, checking customer/item/pricing information, preserving remarks, and following up on payments.  
**To confirm:** Most time-consuming steps from staff perspective.

**10.3** Is there anything that currently "falls through the cracks" - orders missed, documents lost, follow-ups forgotten?

**Known answer:** Orders can be missed in WhatsApp groups, clarifications can be buried between messages, customer-specific handling notes can be forgotten, and payment follow-up can become delayed or unclear.  
**To confirm:** Real examples and frequency.

**10.4** What kind of information is usually included in delivery remarks or customer-specific handling instructions that must be carried forward? (e.g., receiving hours, lunch break closures, delivery contact person, special address instructions, patient-specific handling notes, payment or document remarks)

**Known answer:** Some customers have special receiving times, early lunch closures, or other handling expectations that may be communicated verbally or remembered informally.  
**To confirm:** Common remark types, where they are captured today, which downstream documents or steps need them, and whether any remarks are customer-level, doctor-level, patient-level, or order-specific.

**10.5** If MAIA could only do one thing for your business, what would it be?

**Known answer:** Recommended Phase 1 focus is turning messy WhatsApp prescription/order intake into a structured staff-reviewed draft workflow with backend visibility, without replacing AutoCount.  
**To confirm:** Whether this is the top priority.

**10.6** Is there anything your team currently does outside the ERP system (in WhatsApp, spreadsheets, paper, or memory) that you believe should be in a system? Describe briefly.

**Known answer:** WhatsApp intake, prescription interpretation, delivery remarks, payment slips, payment follow-up, workflow status, activity/document trail, alternate delivery address handling, finished-goods inventory calculation, reserved stock visibility, and secure SOA/customer document links.  
**To confirm:** Any other manual trackers, paper notes, spreadsheets, or staff-memory rules.

***

## Section 11 - Data Readiness

**11.1** Can you provide the following in Excel or CSV format? (Check all you can provide.)

* [ ] Customer list (company name, code, contact person, phone, email, address, credit terms, credit limit)
* [ ] Product / item list (SKU/code, name, description, unit of measure, category, active/inactive status)
* [ ] Price list(s) - standard and/or customer-specific
* [ ] Current stock balances (item, warehouse/location, quantity)
* [ ] Reserved stock tracker or reservation records
* [ ] Supplier list (if relevant for purchasing)
* [ ] Sample prescriptions and WhatsApp order messages
* [ ] Sample payment slips
* [ ] Sample alternate delivery address cases
* [ ] Sample AutoCount documents for secure link testing (invoices, credit notes, receipts, SOA, and related documents)

**11.2** For each item checked above, who in your team will prepare this data?

| Data item | Known need | Owner / PIC | Target date |
|---|---|---|---|
| Customer master | Required for customer/doctor account lookup and SOA | Custom Medz to confirm | Custom Medz to confirm |
| Item/product master | Required for order draft and price lookup | Custom Medz to confirm | Custom Medz to confirm |
| Pricing reference | Required for staff price query and order draft | Custom Medz to confirm | Custom Medz to confirm |
| Current stock balances | Required for finished-goods inventory visibility | Custom Medz to confirm | Custom Medz to confirm |
| Reserved stock records | Required for reserved stock visibility | Custom Medz to confirm | Custom Medz to confirm |
| Sample prescriptions / WhatsApp orders | Required for intake parsing and UAT | Custom Medz to confirm | Custom Medz to confirm |
| Sample payment slips | Required for payment evidence flow | Custom Medz to confirm | Custom Medz to confirm |
| Sample alternate address cases | Required for delivery address customization | Custom Medz to confirm | Custom Medz to confirm |
| Sample invoices / credit notes / receipts / SOA | Required for secure customer document link | Custom Medz to confirm | Custom Medz to confirm |

**11.3** Please provide 3-5 sample transaction documents. These help us understand your document formats, field requirements, and workflow. (e.g., a recent quotation, sales order, invoice, delivery order, credit note, customer PO, pick list)

**Known need:** For Custom Medz, the most useful samples are complete transaction sets: WhatsApp/prescription input, clarification messages, draft/order output, delivery order or invoice, payment slip if applicable, and SOA/customer document examples.

**11.4** Do you want historical transaction data (old orders, invoices, etc.) available inside MAIA, or are you comfortable starting fresh with forward-only data?

* [x] Forward-only (new transactions from go-live onwards) - standard recommendation unless Custom Medz requests otherwise
* [ ] Want historical data migrated - Approximate date range: Custom Medz to confirm
* [ ] Unsure - to discuss

*Note: Historical data migration is a separate scope item. We will assess feasibility and cost based on the volume and quality of your data.*

***

## Section 12 - Timeline & Project Ownership

**12.1** When do you need MAIA to be operational? Is there a hard deadline? (e.g., tied to a contract, season, audit, or event)

**Known answer:** Not confirmed.  
**To confirm:** Target go-live date, UAT window, and any hard deadline.

**12.2** Who from your team will be the **internal project owner** - the day-to-day contact during onboarding? (Ideally someone operational who understands the daily workflow, not only a department head.)

**Known answer:** Not confirmed.  
**To confirm:** Operational owner who understands prescription intake, AutoCount workflow, payment follow-up, delivery address exceptions, and daily operations.

**12.3** Who will be the **decision-maker** if we need approvals during setup? (e.g., on workflows, permissions, integrations, scope decisions)

**Known answer:** Not confirmed.  
**To confirm:** Business decision-maker, technical decision-maker, AutoCount/vendor contact, and finance decision-maker.

**12.4** Are there any upcoming events that might affect your availability during onboarding? (e.g., holidays, audits, travel, peak season)

**Known answer:** Not confirmed.  
**To confirm:** Holidays, audits, stock takes, peak order periods, staff leave, or system maintenance windows.

**12.5** Who will coordinate technical access for deployment and integrations?

**Known answer:** Custom Medz must provide relevant access, technical coordination, or environment support required for deployment within Custom Medz's environment.  
**To confirm:** PIC for hosting environment, AutoCount, WhatsApp/WABA if needed, inventory/reservation data, secure SOA/document link setup, security review, and ongoing maintenance access.

***

## What Happens Next

Once you return this questionnaire and the sample data items, we will:

1. Review your responses and prepare a focused agenda for the deep-dive meeting.

2. Schedule **Meeting 1** (business workflow deep-dive) at your office or online, depending on the project plan.

3. If integration with AutoCount, WhatsApp/WABA, hosting infrastructure, inventory/reservation data, or secure customer document links is needed, schedule **Meeting 2** (IT/integration scoping). This can be remote and may include your IT vendor or AutoCount vendor.

**Please return this document to:** Product team contact to confirm  
**Questions about any item?** Reply to this message. We are happy to clarify.

***

## See Also

* [[Custom Medz Customer Narrative]]
* [[MAIA Product Overview]]
* [[Quote-to-Cash Workflow]]
* [[Decision Log]]

***

*MAIA by Mindhive - Client Onboarding Questionnaire v2.0*

## 1. Purpose of This Document

This document provides the product and implementation team with the full client context needed to take over Custom Medz after sales handover.

It combines:

* what the client does

* how they currently operate

* what problems they are trying to solve

* what MAIA is expected to do in Phase 1

* what is included in the signed scope

* what is customization

* what has been clearly kept out of scope

* what product team should be careful not to overpromise

Important clarification: **AutoCount should be treated as the accounting and billing system for this project.** MAIA is positioned as an operational layer on top of AutoCount and the client’s current WhatsApp-based intake flow, not a replacement for AutoCount.

Important hosting clarification: **MAIA will be deployed, hosted, and maintained within Custom Medz’s environment**, unless otherwise stated in writing. Product team should treat this as a client-environment deployment, not a generic Mindhive-hosted SaaS deployment.

***

## 2. Client Snapshot

**Client:** Custom Medz
**Industry:** Compounding pharmacy / healthcare
**Current system:** AutoCount
**Main intake channel:** WhatsApp
**MAIA role:** Internal WhatsApp-based operational assistant with backend visibility
**Deployment:** Within Custom Medz’s environment, deployed and maintained by Mindhive

Custom Medz’s core issue is that doctors send prescriptions and order instructions through WhatsApp in inconsistent formats. Staff then manually interpret the prescription, check the relevant information, preserve any important remarks, follow up on payments, and coordinate the next steps through a fragmented process. The proposal positions MAIA as an operational layer to improve intake consistency, payment follow-up visibility, and management accountability without replacing AutoCount.

***

## 3. Business Context

Custom Medz is a healthcare-related compounding pharmacy business. Their workflow is prescription-driven and more sensitive than a normal trading or distribution order workflow. Doctors may send prescriptions in different formats, and internal staff need to interpret the order before processing it.

The proposal highlights that Custom Medz operates in a sensitive healthcare environment where patient data handling, data protection, and process traceability matter.

Product team should understand that this is not just a normal sales order automation project. The client needs:

* cleaner intake from WhatsApp

* structured review before processing

* better preservation of remarks and handling instructions

* payment slip and payment follow-up visibility

* price query support for staff

* backend visibility into workflow status

* careful handling of patient delivery address exceptions

* possible ingredient deduction logic for compounded products

* Statement of Account support for receivables follow-up

MAIA should be built as an **internal operational assistant** first. It should not be treated as a customer-facing pharmacy chatbot or full pharmacy management system.

***

## 4. Current As-Is Workflow

### 4.1 High-Level Current Flow

1. Doctors send prescriptions or order instructions through WhatsApp.

2. Prescriptions may come in electronic form, photo form, or with handwritten amendments.

3. Staff manually read and interpret the prescription/order request.

4. Staff refer to customer, item, and pricing information.

5. Staff preserve or manually remember delivery remarks and customer-specific handling notes.

6. Payment slips or payment-related information are followed up manually.

7. Management has limited visibility because the workflow is spread across WhatsApp, manual checking, and staff memory.

### 4.2 Important Operating Detail

The current workflow creates several operational risks:

* Orders can be missed in WhatsApp groups.

* Comments and clarifications can be buried between other messages.

* Customer-specific handling notes can be forgotten.

* Payment follow-up can become delayed or unclear.

* Management cannot easily see what is happening at any point in the workflow.

Product team should design Phase 1 around **message-to-structured workflow**, not full pharmacy automation.

***

## 5. Main Pain Points

### 5.1 Messy Prescription and Order Intake

Custom Medz receives doctor-generated prescriptions and order instructions through WhatsApp. These can be typed messages, electronically filled prescriptions, photos, or handwritten prescriptions. Several patient orders may appear together, with later clarifications appearing between other messages. This makes the intake process hard to follow and increases the risk that an order is missed or misread.

### 5.2 Important Operational Instructions Are Not Carried Forward Consistently

Some customers have special receiving times, early lunch closures, or other handling expectations. These details may be communicated verbally or remembered informally. The team wants these details to flow into downstream remarks so they are not forgotten.

### 5.3 Payment Follow-Up Is Not Structured Enough

The team receives payment slips and needs better visibility into payment date, payment amount, and whether the payment fully closes the order. Where checking is delayed or partial, staff need a clearer way to identify the outstanding balance and follow up.

### 5.4 Management Control Is Limited

Much of the process is driven by chat, memory, and manual interpretation. This makes it harder for management to review exceptions, track what happened on each order, and maintain a reliable trail of actions and linked documents.

### 5.5 Commercial Impact

The proposal frames the business consequences as:

* slower processing time

* heavier reliance on manual staff effort

* increased risk of missed orders or wrong handling

* more back-and-forth across teams

* weaker control over customer-specific treatment and delivery instructions

* delayed payment follow-up

* difficulty scaling operations cleanly in a regulated environment.

***

## 6. Products / Item Understanding

Custom Medz’s workflow includes prescription-based products and compounded products. For standard order intake, MAIA needs to reference customer, item, and pricing information. For the customization around ingredient deduction, MAIA may need to reference a connected Google Sheet storing the ingredients list.

### Product Data Required

Product team should request:

* item master list

* customer master list

* pricing reference data

* sample prescriptions

* sample WhatsApp messages

* sample payment slips

* sample alternate delivery address cases

* Google Sheet structure for ingredient list, if the ingredient deduction customization is approved

***

## 7. Customer Types and Buying Behavior

The signed proposal focuses on doctors sending prescriptions or order messages through WhatsApp. The important exception is that the doctor may place the order, but the delivery may need to go to a patient’s address instead of the doctor’s normal address.

### Important Product Interpretation

* The doctor may be the order source.

* The patient may be the delivery recipient.

* Internal staff must review and confirm the correct delivery destination.

* MAIA should not silently apply an alternate address without staff confirmation.

This is why the alternate delivery address logic is treated as customization.

***

## 8. Order Intake Details

### 8.1 Order Formats

Product should expect WhatsApp orders or prescriptions in formats such as:

* typed messages

* photos

* electronic prescriptions

* handwritten prescriptions

* prescriptions with handwritten amendments

* follow-up clarification messages

### 8.2 Intake Handling Principle

MAIA should not blindly submit orders. The safe workflow is:

1. Staff forwards the doctor’s prescription or order message into MAIA.

2. MAIA extracts the relevant order details.

3. MAIA references agreed customer, item, and pricing information.

4. MAIA prepares a draft order for staff review.

5. Staff checks and confirms the draft.

6. The order is ready for the next step, with status tracked in the backend workspace.

***

## 9. Systems and Tools

### 9.1 Confirmed Systems

**AutoCount**
AutoCount remains the accounting and billing system. MAIA sits on top of it and should not be positioned as replacing it.

**WhatsApp**
WhatsApp is the current intake environment. Staff will forward doctor prescriptions and order requests into MAIA.

**Google Sheet**
Relevant for the multi-ingredient raw material deduction customization. MAIA would reference the connected Google Sheet storing the ingredients list and deduct relevant ingredient quantities accordingly when the order is created.

**MAIA**
MAIA is the internal WhatsApp-based operational assistant with backend visibility.

### 9.2 Hosting and Deployment

The latest proposal confirms that MAIA will be deployed, hosted, and maintained within **Custom Medz’s environment**, unless otherwise stated in writing.

Product team must treat this as a **client-environment deployment**.

Product and implementation team must clarify during kickoff:

* what exact environment Custom Medz will provide

* whether the environment is cloud, server, or another agreed infrastructure

* who from Custom Medz will provide access

* what technical coordination is required

* how ongoing access for maintenance and support will work

* how AutoCount access or vendor coordination will be handled

* how Google Sheet access will be handled, if the ingredient deduction customization is approved

* whether there are healthcare, patient-data, IT, or security requirements to observe

The proposal states that Custom Medz must provide relevant access, technical coordination, or environment support required for deployment within Custom Medz’s environment.

***

## 10. Proposed MAIA Role for This Client

### 10.1 Phase 1 Positioning

MAIA should be treated as an **internal WhatsApp-based operational assistant with backend visibility**.

MAIA’s purpose is to improve:

* order intake structure

* draft preparation

* customer/item/pricing reference support

* payment slip visibility

* remark preservation

* workflow status tracking

* management visibility.

### 10.2 What MAIA Should Do in Phase 1

Phase 1 includes:

* internal-facing WhatsApp workflow for staff

* request intake forwarding

* draft preparation for review

* confirmation flow before final submission

* agreed business-rule support

* item, customer, and pricing reference support

* payment slip visibility support

* activity trail

* document trail

* workflow status tracking

* backend visibility for agreed operational flows.

### 10.3 What MAIA Should Not Be Positioned As

MAIA should not be positioned as:

* AutoCount replacement

* full ERP replacement

* full compounding ERP

* formulation engine replacement

* pharmacy dispensing logic

* advanced dashboard/reporting system beyond agreed standard visibility

* custom workflow engine outside agreed Phase 1 scope.

***

## 11. Signed Scope and Commercials

### 11.1 Base Scope

Base Phase 1 includes:

* internal-facing Sales Agent bot

* sales order workflow aligned to Custom Medz SOP

* user roles and permissions

* agreed ERP/accounting and master data sync approach

* basic outputs, such as SO, quotation, or invoice outputs depending on the confirmed flow

* training and go-live support.

### 11.2 Customization Package

The RM6,000 customization package covers:

1. Applying Customer Delivery Address in Delivery Order

2. Multi-Ingredient Raw Material Deduction

3. Statement of Account Generation

Product team should still validate during kickoff whether all three are expected to be delivered together under the RM6,000 customization package, and how deep each customization should go.

### 11.3 Commercials

* **Base MAIA:** RM20,000

* **Customization package:** RM6,000

* **Monthly subscription:** RM2,500, up to 500 orders/month

* **Payment terms:** 50% upon project confirmation, 50% upon completion of UAT

* **Monthly subscription commencement:** Monthly subscription starts upon completion of Phase 1 UAT sign-off, unless otherwise agreed in writing.

### 11.4 Hosting

MAIA will be deployed, hosted, and maintained within Custom Medz’s environment. Custom Medz must provide the relevant access, technical coordination, or environment support required for deployment.

***

## 12. In-Scope Items

Product team should treat the following as in-scope for Phase 1:

* internal-facing WhatsApp workflow

* request intake forwarding

* draft preparation for review

* confirmation flow before final submission

* customer, item, and pricing reference support

* payment slip visibility support

* activity trail

* document trail

* workflow status tracking

* backend visibility

* deployment within Custom Medz’s environment

* training

* go-live support.

***

## 13. Customizations

## 13.1 Customization 1, Applying Customer Delivery Address in Delivery Order

### Business Need

In some cases, the doctor places the order, but the medicine must be delivered to the patient’s address instead of the clinic or doctor’s normal source address.

### What MAIA Should Do

MAIA should ask which patient’s delivery address should be applied, then surface the selected alternate delivery address clearly in the draft workflow for staff review before processing.

### Product Notes

* Do not assume automatic address application without staff review.

* Collect real prescription examples.

* Confirm where the patient address appears in the prescription or WhatsApp message.

* Confirm how the selected delivery address should flow into the delivery order or downstream document.

## 13.2 Customization 2, Multi-Ingredient Raw Material Deduction

### Business Need

Custom Medz has compounded products made from multiple raw ingredients. AutoCount is weak for this use case, especially when products contain several ingredients.

### What MAIA Should Do

MAIA should reference the connected Google Sheet storing the ingredients list, check the ingredients needed for the compounded product, and deduct the relevant ingredient quantities in the Google Sheet accordingly when the order is created.

### Product Notes

* Confirm the Google Sheet structure.

* Confirm how ingredients are mapped to compounded products.

* Confirm deduction timing.

* Confirm whether deduction happens only after staff confirms the order.

* Do not position this as a full formulation engine.

## 13.3 Customization 3, Statement of Account Generation and Follow-Up

### Business Need

The client needs a clearer way to prepare and review customer Statement of Account reports for receivables follow-up.

### What MAIA Should Do

MAIA should support preparation of a Statement of Account view or report tied to the relevant customer account, so the team can review outstanding balances and use that for receivables follow-up.

### Product Notes

* Confirm whether SOA data comes from AutoCount.

* Confirm report format.

* Confirm whether it is only internal or customer-sendable.

* Confirm who can generate or view SOA.

* Do not assume auto finance knock-off unless separately approved.

***

## 14. Out-of-Scope / Communicated Boundaries

Unless separately approved, do not include:

* full ERP replacement

* major restructuring of AutoCount

* full compounding ERP

* formulation-engine replacement

* custom workflows outside agreed Phase 1 scope

* advanced dashboards or reports beyond agreed standard visibility

* third-party implementation work outside Mindhive’s agreed scope

* additional customizations not listed in the proposal.

### Internal Instruction for Product Team

If the client raises deeper custom behavior, use this response direction:

“This was discussed as outside the agreed Phase 1 base scope or requires separate technical validation. Phase 1 will focus on the agreed MAIA workflow first, and we can separately confirm whether this should be added as customization.”

***

## 15. Important Workflow Clarifications

### 15.1 Normal Order Creation

1. Staff forwards the doctor’s prescription or order message into MAIA.

2. MAIA extracts the relevant order details.

3. MAIA references agreed customer, item, and pricing information.

4. MAIA prepares a draft order for staff review.

5. Staff checks the draft and confirms it.

6. The order is ready for the next step, with status tracked in the backend workspace.

### 15.2 Staff Asking About Prices

1. Staff asks MAIA for the price of a product or item.

2. MAIA references the agreed pricing source and customer context.

3. MAIA returns the relevant pricing information clearly.

4. Staff uses that information to respond faster and prepare the correct order draft.

5. This reduces delay, manual checking, and wrong-price risk.

### 15.3 Alternative Delivery Address Exception

1. Staff forwards the prescription or order message into MAIA.

2. MAIA asks which patient’s delivery address should be applied.

3. MAIA surfaces the alternate delivery address clearly in the draft workflow.

4. Staff reviews and confirms the correct delivery destination.

5. The final order draft reflects the confirmed alternate address before processing.

### 15.4 Ingredients Deduction

1. MAIA creates the order after staff review and confirmation.

2. MAIA references the connected Google Sheet storing the ingredients list.

3. MAIA checks the ingredients needed for the compounded product.

4. MAIA deducts the relevant ingredient quantities in the Google Sheet accordingly.

5. This gives the team a structured way to track raw material usage.

### 15.5 Payment Follow-Up and Statement of Account

1. The team forwards payment slip or payment-related evidence into MAIA.

2. MAIA captures the visible payment details for review.

3. Users check whether the payment date and amount align with the expected amount.

4. If there is a shortfall or unresolved balance, the team can review the customer’s Statement of Account view or report.

5. The team uses this to follow up on outstanding balances more clearly and consistently.

***

## 16. Payment and Finance Flow

Safe product interpretation:

* MAIA supports payment slip visibility.

* MAIA helps staff review payment details.

* MAIA helps surface unresolved balances.

* Statement of Account generation is part of the customization package.

* Finance workflow should remain human-reviewed.

* Do not assume automatic knock-off or auto-reconciliation unless separately confirmed.

***

## 17. Credit Control

The signed proposal does not define a separate deep credit-control workflow.

Product team should not invent one. If credit-control checks are later raised, clarify whether they are already supported by the agreed customer/pricing reference flow or require separate scoping.

***

## 18. Stock, Warehouse, Picking, and Fulfillment

The signed proposal does not include a full WMS or warehouse automation scope.

The stock-related customization is specifically **multi-ingredient raw material deduction**, where MAIA references the connected Google Sheet storing the ingredients list and deducts relevant quantities when the order is created.

### Product Boundary

Safe Phase 1:

* no full WMS

* no full formulation engine

* no advanced warehouse automation

* no automatic deduction without confirmed rules and examples

***

## 19. Delivery / Address Handling

The relevant delivery customization is **Applying Customer Delivery Address in Delivery Order**.

This means:

1. doctor places the order

2. delivery may need to go to the patient address

3. MAIA asks which patient delivery address should be applied

4. staff confirms the correct destination

5. the final order draft reflects the confirmed alternate address before processing.

Product should clarify:

* how patient addresses are captured today

* whether addresses are repeated in every prescription or stored somewhere

* whether multiple patient addresses can appear in one doctor order

* how the address should appear in the delivery order

***

## 20. Customer-Facing vs Internal-Facing

The current signed proposal should be interpreted as **internal-facing first**.

MAIA is for staff to:

* forward prescriptions

* ask price questions

* review draft orders

* review payment evidence

* check status and activity

It should not be designed as a customer-facing ordering bot unless separately approved.

***

## 21. Hosting / Deployment

The latest proposal confirms that MAIA will be deployed, hosted, and maintained within **Custom Medz’s environment**, unless otherwise stated in writing.

### Product Team Must Clarify During Kickoff

* what environment Custom Medz will provide

* whether it is cloud, server, or another infrastructure

* who owns environment access

* what Mindhive can access for deployment and support

* what security restrictions apply

* how maintenance access will work

* how backups, uptime, and operational support will be handled

* whether there are patient-data or healthcare-specific IT requirements

* whether third-party or infrastructure costs are borne by Custom Medz

### Product Team Interpretation

Treat this as a **client-environment deployment**.

Do not assume Mindhive’s generic hosted infrastructure unless the client and commercial team later agree otherwise.

***

## 22. Data Required Before Build

Product team should collect:

* AutoCount access or vendor coordination details

* Custom Medz environment access or technical coordination details

* customer master data

* item master data

* pricing reference data

* sample prescriptions

* sample WhatsApp order messages

* sample handwritten/amended prescription examples

* sample payment slips

* sample customer-specific remark cases

* sample alternate patient delivery address cases

* Google Sheet ingredient list structure, if customization is approved

* SOA report sample or expected format, if customization is approved

* UAT users and internal PICs.

***

## 23. Suggested UAT Scenarios

### Base Phase 1 UAT

1. Staff forwards a normal doctor prescription/order into MAIA.

2. MAIA extracts relevant details.

3. MAIA references customer, item, and pricing information.

4. MAIA prepares draft order.

5. Staff reviews and confirms.

6. Backend status updates.

7. Staff asks MAIA for a price.

8. MAIA returns pricing reference.

9. Staff forwards payment evidence.

10. MAIA captures payment details for review.

### Customization UAT

1. Doctor prescription includes patient delivery address.

2. MAIA asks which patient delivery address should be applied.

3. Staff confirms correct address.

4. Final draft reflects alternate address.

5. MAIA creates order for compounded product.

6. MAIA references Google Sheet ingredient list.

7. MAIA deducts ingredient quantities accordingly.

8. Staff reviews SOA view or report for a customer with outstanding balance.

***

## 24. Key Risks for Product Team

* Overpromising beyond base scope

* Positioning MAIA as replacing AutoCount

* Treating this as a full compounding ERP

* Underestimating messy prescription intake

* Assuming automatic address extraction without enough samples

* Assuming Google Sheet ingredient logic is straightforward without validating data structure

* Letting the client assume future workflows are included

* Not clarifying exactly what Custom Medz’s environment is

* Not clarifying access, support, security, and maintenance responsibilities for client-environment deployment

* Not clarifying healthcare and patient-data handling expectations early enough

***

## 25. Product Team Recommendation

Implement Phase 1 as an **internal WhatsApp operational assistant with backend visibility**, deployed in **Custom Medz’s environment**.

### Recommended Phase 1 Build Focus

* structured WhatsApp intake

* draft preparation

* staff review before processing

* customer/item/pricing reference support

* payment evidence visibility

* remark preservation

* activity trail

* document trail

* workflow status tracking

* backend visibility

* deployment inside Custom Medz’s environment

### Customization Build Focus

If confirmed under the RM6,000 customization package:

* apply customer delivery address in delivery order

* multi-ingredient raw material deduction through Google Sheet logic

* Statement of Account generation and follow-up support

***

## 26. One-Line Product Summary

Custom Medz is a regulated healthcare client that receives messy prescription and order instructions through WhatsApp and relies heavily on manual staff interpretation, payment follow-up, and remark carry-forward. Phase 1 should be built as an internal WhatsApp operational assistant on top of AutoCount, helping staff structure intake, review drafts, reference pricing and customer details, preserve important remarks, and improve workflow visibility. MAIA will be deployed, hosted, and maintained within Custom Medz’s environment, with Custom Medz providing the required access and technical coordination. Applying customer delivery address in delivery order, multi-ingredient raw material deduction, and Statement of Account generation are the agreed customization items under the signed proposal.

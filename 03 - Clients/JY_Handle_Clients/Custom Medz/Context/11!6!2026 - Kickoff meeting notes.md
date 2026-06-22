## Executive Summary

The meeting clarified the initial implementation direction for Custom Medz’s MAIA rollout:

1. **Core order-taking from prescriptions / WhatsApp inputs** — confirmed as the main Phase 1 workflow.&#x20;

2. **AutoCount integration** — required for customer, item, SKU, pricing data, and syncing created documents back into AutoCount.&#x20;

3. **Statement of Account, daily sales reporting, BOM, and profit calculations** — confirmed as important business requirements, but require further scoping before being committed into Phase 1.&#x20;

The main outcome is that Custom Medz needs to provide the NDA/privacy agreement, AutoCount vendor contact, sample documents, master data, and setup account details before implementation can move forward smoothly. Mindhive will prepare the data checklist, setup guide, and role permission matrix to guide this process.

The biggest concern raised by Custom Medz is data privacy and security. Because the system will involve sensitive customer, prescription, and patient-related information, Mindhive needs to provide a clearer explanation of the hosting setup, AWS security risks, infrastructure safeguards, and what the client should do on their side to reduce breach risk.

***

### 1. Scope Alignment

The Penang entity was discussed as a possible future consideration and is not part of the current Phase 1 scope. It can be revisited later once the initial implementation is more stable.

For Phase 1, the main focus is on enabling MAIA to support the core order-taking workflow, including:

* &#x20;Reading prescription/order information shared through WhatsApp or images&#x20;

* &#x20;Extracting relevant order details&#x20;

* &#x20;Creating sales orders, delivery orders, invoices, and receipts in MAIA&#x20;

* &#x20;Syncing the relevant records back into AutoCount for finance and accounting records&#x20;

Statement of Account generation, BOM-based calculations, profitability calculations, and more advanced reporting/customization items were discussed as important requirements, but these will require further scoping and are expected to fall under a later phase.&#x20;

***

### 2. AutoCount Integration

Mindhive will need to coordinate with the AutoCount vendor to understand the integration requirements and available access. The client will provide the AutoCount vendor contact details.

The integration is expected to support both retrieving required master data, such as customer, item, SKU, and pricing information, as well as pushing created records from MAIA back into AutoCount.

Before any sensitive business or patient-related data is shared, the client will provide the NDA/privacy agreement for review and signing.

***

### 3. Pricing Clarification

The pricing structure was clarified as follows:

* &#x20;Doctor pricing and direct customer pricing may differ.&#x20;

* &#x20;Doctor tier pricing is based on free quantity entitlement, for example:&#x20;

  * &#x20;Buy 10, receive 12, free 2

  * &#x20;Buy 20, receive 25, free 5&#x20;

  * &#x20;Buy 50, receive 65, free 15&#x20;

* &#x20;On the invoice, this should appear as the total quantity supplied, charged at the price of the paid quantity, rather than showing a separate discount line.&#x20;

It was also clarified that old ABSS pricing does not need to be fully extracted into the new system. The current approach is to maintain only relevant/current pricing in AutoCount, and any missing old pricing will be checked and added manually into AutoCount only when needed.

***

### 4. Delivery and Order Remarks

Special remarks are usually captured from the prescription/order itself. These remarks are mainly related to delivery or billing instructions, such as billing to a clinic but delivering to a patient/customer.

There are no major cold-chain or special storage handling requirements expected at this stage, as product-level handling information is already reflected on the product/bottle itself.

***

### 5. Data Privacy and Security

The client raised concerns around data privacy, patient information, PDPA, KKM-related sensitivity, and system security.

Mindhive will check internally with the technical team and provide a clearer explanation on:

* &#x20;How the system is hosted and secured&#x20;

* &#x20;What happens if AWS access is compromised&#x20;

* &#x20;What safeguards are in place to protect sensitive data&#x20;

* &#x20;What steps the client should take to reduce security risks on their side&#x20;

***

### 6. Setup Requirements

The client will need to prepare a dedicated WhatsApp number for MAIA. This number should be used exclusively for the chatbot setup and should not be used for normal WhatsApp messaging after it is connected to the system.

The client will also need to prepare the required AWS account and OpenAI/API key setup. Mindhive will provide or resend the setup checklist/guide for reference.

***

## Action Items

### Mindhive / MAIA Team

1. **Prepare and send the data checklist**
   &#x20;Include required fields such as customer list, customer details, item/SKU list, pricing, sample invoices, delivery notes, and other relevant document samples.&#x20;

2. **Prepare and send the setup checklist**
   &#x20;Include WhatsApp number setup, AWS account setup, OpenAI/API key setup, and any other required system setup steps.&#x20;

3. **Prepare the role permission matrix**
   &#x20;Share a permission matrix for the client to define which roles can access, approve, create, or modify documents in the system.&#x20;

4. **Contact the AutoCount vendor**
   &#x20;Reach out to the client’s AutoCount vendor on behalf of the client.

5. **Check internally on security and infrastructure details**
   &#x20;Provide a clearer explanation of MAIA’s infrastructure, security safeguards, AWS-related risks, and recommended client-side precautions.&#x20;

6. **Discuss reporting requirements internally**
   &#x20;Check with Jeremy/team on the daily sales and dashboard reporting mentioned during the sales presentation, especially around customer order trends, sales tracking, and weekly review data.&#x20;

7. **Explore SOA tracking feasibility**
   &#x20;Review whether the future Statement of Account feature can track whether a customer/doctor has opened or viewed the statement link.&#x20;

***

### Client Team

1. **Share the NDA/privacy agreement**
   &#x20;Send the NDA/privacy agreement to Mindhive for review and signing before confidential documents or patient-related samples are shared.&#x20;

2. **Provide AutoCount vendor contact details**
   &#x20;Share the vendor contact so Mindhive can begin integration-related discussions.&#x20;

3. **Provide data as per the checklist**
   &#x20;Provide available customer lists, customer details, item/SKU lists, pricing data, and related information based on the checklist from Mindhive.&#x20;

4. **Provide sample transaction documents**
   &#x20;Share sample invoices, delivery notes, prescriptions, and other relevant order documents once the NDA is completed.&#x20;

5. **Provide raw order examples**
   &#x20;Share screenshots or examples of how orders are received through WhatsApp, prescription images, or other customer communication channels.&#x20;

6. **Add the accounting PIC to the working group/document**
   &#x20;Add Jay or the relevant accounts person so they can help fill in finance, approval, customer, and pricing-related information.&#x20;

7. **Prepare a dedicated MAIA WhatsApp number**
   &#x20;Get a new or unused WhatsApp number that can be used exclusively for MAIA chatbot setup.&#x20;

8. **Prepare setup accounts**
   &#x20;Prepare access or account setup for AWS and OpenAI/API key creation based on the setup checklist.

# 11/2/2026 -Holsen Compliance Certification

Meeting summary link : https://app.fireflies.ai/view/Holsen-MH-C1-C3-Discussion::01KH37DXE08C0SHYXHJMQADBPS 



- **C1 Certificates:** 

  1. Perpetual manufacturer exemptions, 
  2. valid until superseded, 
  3. ease compliance with no quantity tracking needed.
- **C3 Certificates:** 

  1. Single-order, 
  2. quantity-based exemptions, 
  3. require POs for validation, 
  4. maintain strict inventory traceability.
  5. Import on behalf
- **A57 Certificates:** 

  1. Regulatory and reporting complexities for trader-to-LMW sales; 
  2. currently not in use but understood.
- **Inventory Control:** Bulk imports tracked by batches ensure only authorized sales to comply with exemption certificates.
- **SQL Transition:** Full go-live by August 1, with testing starting in May; focus on data migration and process integration.
- **Automation Needs:** Improve efficiency by automating document generation and enhancing traceability through system integrations.



**Notes**

## **Tax Exemption Document Handling and Compliance**

The meeting clarified the distinct roles and handling processes for **C1**, **C3**, and **A57** tax exemption certificates to ensure compliance and audit readiness.

- **C1 certificates** are perpetual manufacturer tax exemptions tied to the company, valid until superseded, with no quantity restrictions and tracked as attachments for relevant SKUs (05:30)

  - **Ivan Chiang** confirmed C1 is mostly for manufacturers buying directly and used repeatedly once validated.
  - **Chin** explained clients manage quantity limits themselves; traders rely on C1 as proof for tax-exempt sales.
  - C1 certificates are recorded at the order or item level in invoice remarks to maintain audit trails.
  - This reduces operational complexity since C1 does not require per-order validation or quantity tracking.
- **C3 certificates** are single-order, quantity-based exemptions where the trader imports on behalf of the manufacturer, requiring PO and appointment letters for approval (07:35)

  - **Chin** detailed the approval process via the SST portal, where quantities in the PO and system must match before generating C3.
  - Upon shipment arrival, bulk imports are split into batches corresponding to each client’s C3 allocation, maintaining strict traceability.
  - Inventory and shipment batches are labeled by manufacturer lot number for accurate allocation and audit.
  - **Ivan Chiang** noted that fulfillment follows strict order-based stock usage, with manual coordination to adjust delivery schedules when multiple orders exist for the same item.
- **A57 certificates** apply to traders selling from registered manufacturers to LMW clients, are quantity and value-specific, and require monthly SST reporting (20:10)

  - Currently not used by the client but understood to be similar to C3 in restrictions and documentation.
  - This certificate type reflects more complex regulatory needs for trader-to-LMW transactions.
- Documentation tied to tax exemptions includes:

  1. Purchase Orders (PO)
  2. Appointment Letters
  3. K1 Forms
  4. Certificates of Analysis (COA)
  5. Supply Invoices
  6. Packing Lists

  - These documents are linked to batch or stock entries to maintain a complete transaction trail.
  - The system allows attaching these documents to batches for audit and compliance.
  - Special forms, such as the Poison Sign Order (PSO), are currently generated manually.
  - Automating PSO generation could reduce manual workload and improve regulatory compliance.

## **Inventory and Batch Tracking for Compliance**

Inventory management is tightly controlled to ensure tax-exempt goods are allocated and sold only to authorized clients as per exemption certificates.

- Bulk imports (e.g., **20 metric tons**) are split into multiple batches by lot number to correspond with clients’ exemptions, ensuring no unauthorized sales (13:10)

  - Batches are labeled and tracked in the warehouse, facilitating audit verification of stock movements.
  - Stock ledgers and Excel forms (Jados C02) are updated every **three months** to reconcile incoming and outgoing exempt goods.
- Batch numbers are created either before stock arrival or upon receipt, with current practice favoring creation post-arrival to assign batches to customers (33:30)

  - Batch-level traceability is maintained in the system, linked across sales orders (SO), delivery notes (DN), and invoices (SI).
  - Dispatch teams are responsible for ensuring correct customer allocation of exempt stock.
- Manual coordination between sales and fulfillment teams handles exceptions where clients have multiple orders with staggered delivery schedules (24:00)

  - This prevents mixing stock allocations across orders and preserves compliance with quantity restrictions tied to exemption certificates.

## **Document and Workflow Integration with External Systems**

The transition from **UBS** to **SQL** ERP systems drives workflow and data integration considerations, with tax exemption tracking central to order and inventory management.

- Current workflow uses **Maia** for order and inventory management, while invoices and delivery notes are generated in UBS (51:30)

  - MAIA will block creation of new customers or SKUs not existing in UBS to avoid data mismatch.
  - Export formats from UBS will be needed to map customers, SKUs, and transactions accurately.
- The client plans a full transition to SQL by **August 1**, aligning with their financial year, with a recommended testing period starting in **May** to allow data cleanup and onboarding (22:20)

  - Parallel system use with UBS and SQL will be required during transition to ensure seamless operations.
  - Early engagement with SQL vendors is advised to manage data migration and integration complexities.
- Data integration will require detailed understanding of UBS system setup restrictions, such as dropdown value limits on columns in CSV imports, to avoid fails during bulk uploads (54:30)

  - Ivan Chiang emphasized the need for exact customer and item naming consistency between UBS and MAIA to prevent mismatches.
  - Regular exports of inventory data and master data will be required for MAIA to maintain accurate stock visibility and sales order validation.
- Invoice documents generated by UBS will be manually uploaded into MAIA to maintain order status tracking since MAIA’s invoice PDFs are not compliant e-invoices (09:50)

  - Delivery notes generated from MAIA will be used internally despite UBS’s official role for invoicing and delivery document issuance.
  - Document formatting differences exist, with UBS using carbon copy dot matrix prints and MAIA using A4 PDFs; transition to SQL will modernize this.

## **Product Handling and Regulatory Compliance for Hazardous Goods**

The handling of hazardous products, particularly poisons, requires additional documentation and compliance management integrated into operational workflows.

- Poison-category SKUs require generation of a **Poison Sign Order (PSO)** form for customer acknowledgment on delivery (42:30)

  - The PSO is a standardized government-mandated document under the Pharmacy license B regulation, ensuring traceability of controlled substances.
  - Currently generated manually, the team expressed a desire to automate PSO generation within MAIA for efficiency and compliance (43:30).
- Other product handling details such as UN numbers, hazard classes, and weight-based handling requirements are less critical currently but may be included later for more sophisticated importers (49:00)

  - The client outsources transport logistics, reducing their internal need to manage external labeling or cold chain requirements.
  - These requirements are primarily enforced by other agencies (e.g., JPJ) and are considered lower priority now.
- Each SKU is categorized in the system as poison or non-poison to trigger appropriate documentation generation and compliance workflows on delivery (46:00)

  - This helps ensure only authorized products generate PSO forms, reducing manual errors and audit risks.

## **System Enhancements and Future Automation Opportunities**

Discussions identified several areas where system enhancements can simplify compliance, reduce manual work, and improve traceability.

- Automating the generation of the **Poison Sign Order** form tied to poison SKUs would reduce manual effort and speed up logistics processing (43:30)

  - This aligns with regulatory requirements and improves record-keeping accuracy.
- Attaching and extracting key data fields from important documents (e.g., K1 forms, COAs, supply invoices) can improve validation and audit readiness (38:30)

  - The team requested sample documents to assess feasibility of automated data extraction and prioritize development.
  - Document tagging and field extraction can help enforce compliance without burdening staff.
- Enforcing tax exemption references at the **item level** in sales orders, invoices, and delivery notes was preferred to cover mixed orders with exempt and non-exempt items (30:00)

  - This approach provides clearer audit trails and supports complex customer orders.
  - The AI system could handle item-level exemption tracking to reduce manual workload.
- Batch and shipment tracking improvements, including linking exemption certificates, K1 forms, and stock entries, were discussed to enhance traceability and reporting (36:30)

  - Maintaining a full digital ledger of exempt goods supports smoother SST audits and regulatory compliance.
  - Current manual Excel forms could be replaced or augmented by system-generated reports.

## **Project Timelines and Next Steps**

Key timeline and deliverable commitments were established for transitioning ERP systems and enabling full tax exemption compliance workflows.

- The client targets a **full SQL ERP go-live on August 1**, with **testing and data onboarding starting by May** to allow for cleanup and integration validation (22:30)

  - This phased approach aims to minimize operational disruption and ensure data accuracy.
- The team(Holsen) will provide **raw export files of customers, SKUs, inventory, and transaction data from UBS by the next day** to enable format adaptation and data ingestion into MAIA (27:30)

  - Early receipt of these files will accelerate system preparation and reduce risks of mismatches.
- MAIA will block creation of new customers and SKUs to enforce master data consistency with UBS during the transition (53:00)

  - This prevents data duplication and errors during order exports.
- Manual invoice uploads from UBS into MAIA will continue until SQL fully replaces UBS for invoicing processes (09:50)

  - Delivery notes and other order documents will progressively migrate to MAIA and later SQL for streamlined workflows.
- The team will circulate meeting minutes capturing all discussed points, decisions, and follow-ups for shared reference and accountability (27:50)



**Action items**

**Chin**

- Provide sample COA, K1, poison sign-off forms and other tax exemption documents for Minehive team to review and support extraction (38:30)
- Share current UBS export files including customer, item master, stock, and inventory data to Minehive for MAIA integration adaptation (01:23:50)
- Continue cleanup and alignment of item names in UBS to match master data (01:26:40)

**Holsen Lab Team**

- Share updated delivery note and invoice templates and confirm printing formats required (01:15:50)

**Holsen Lab**

- Engage SQL vendor ASAP for integration planning and confirm API options, especially Cloud API integration for smooth data exchange (01:20:20)
- Send link to all relevant tax exemption and poison sign off documents to Ivan’s team for ingestion and automation consideration (43:00)

**Tam**

- Complete double-checking of product site data and CNA discrepancies before uploading final stock data (01:27:00)

**Holsen Lab & Ivan**

- Coordinate on uploading and mapping the K1 and COA documents as tagged attachments in MAIA for batch stock entries (36:30)

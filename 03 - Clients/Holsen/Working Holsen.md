1. # Phase A1
    

2. ## **Internal Chatbot (B2B Sales)**
    

3. ### **Sales Agent Assistant**
    

The Sales Agent Assistant enables Holsen’s Sales team to generate quotations, receive customer Purchase Orders (PO), and convert them into Sales Orders (SO) directly through WhatsApp or by forwarding customer emails to MAIA.

- **Platform:**
    
    - WhatsApp (MAIA Sales Agent Chatbot)
        
    - Email (for forwarding customer POs)
        
- **Features**
    
    - **Sales Intent Capture & Intelligent Document Processing (IDP):**
        
        - Sales agents may forward any form of customer request
            
            - WhatsApp messages
                
            - Images
                
            - Photos of handwritten notes
                
            - PDFs
                
            - Forward emails
                
        - MAIA reads the content and converts it into structured data by extracting:
            
            - Customer name
                
            - Items and SKUs
                
            - Quantities
                
            - Delivery date (if mentioned)
                
            - PO number (if applicable)
                
            - PO notes / special handling instructions
                
        - MAIA automatically determines whether the customer request represents a quotation request or a confirmed PO:
            
            - If the request is a quotation, then MAIA prepares a formal quotation by:
                
                - Applying customer specific pricing from Holsen’s Price List
                    
                - Prompting manual confirmation for commodity items
                    
                - Enforcing minimum price safeguards
                    
                - Displaying simple stock availability for reference only (no warnings, no reservation)
                    
                - The quotation is formatted into a shareable document. Once the customer confirms and issues a PO, Sales forwards it to MAIA for order creation.
                    
            - If the request is a Purchase Order, then MAIA prepares a Draft Sales Order by:
                
                - Structuring extracted PO information into the correct format
                    
                - Applying the same pricing logic used during quotation
                    
                - Performing a basic inventory validation using Holsen’s Excel stock file
                    
                    - If stock is insufficient, then MAIA shows a non-blocking warning
                        
                    - Adding a reminder for manufacturing SKUs: “Raw material validation must be checked manually.”
                        
                    
                    > Extracted information may not always be fully accurate, especially for handwritten documents or low-quality images. Users will have the option to review and edit extracted fields before confirming the generated document.
                    
            - MAIA also captures future delivery dates when mentioned by the customer (e.g., delivery required 2–3 weeks later) so these requests flow correctly into scheduling within the Delivery Workspace
                
    - **Customer & Product Matching**
        
        - MAIA automatically matches the extracted PO information against Holsen’s Customer data and Inventory data. Each SKU is tagged with its product classification:
            
            - Trading
                
            - Manufacturing
                
            - Poison
                
            - Commodity
                
            - COA required
                
            
                  These tags give immediate clarity to the other teams
            
    - **Order Type Tagging**
        
        - Some orders require different handling. MAIA does not enforce any special rules but simply **records the tag** when Sales indicates it.
            
        - Supported tag types:
            
            - Normal order
                
            - Blanket PO (tag only; no balance tracking)
                
            - C3 order (tag only; no compliance checks)
                
            - LMW order (tag only)
                
            - Manufacturing order (auto tagged if the SKU is a manufacturing item)
                
        - These tags provide visibility to logistics, helping them prepare downstream tasks.
            
    - **Customer Requirements Tagging**
        
        - MAIA automatically attaches customer specific requirements from the Customer Master to the order. These include:
            
            - COA requirement (Yes/No)
                
            - Type of COA (Standard / Detailed)
                
            - Labeling requirements
                
            - Preferred brand (if the customer only accepts certain brands)
                
            - DO/Invoice copies required
                
            - Delivery and Packing Instructions
                
        - These requirements appear clearly in the Delivery Order and the Sales Order Sheet, ensuring Logistics never misses critical instructions.
            
    - **Basic Inventory Validation**
        
        - MAIA uses Holsen’s Excel-based Inventory file (SKU → Quantity) to perform a **simple stock check**:
            
            - If quantity is available → proceed normally
                
            - If quantity is insufficient → MAIA displays a warning, but sales can still continue
                
        - This early warning helps sales set proper expectations for customers.
            
        - For manufacturing SKUs, MAIA always displays the reminder:
            
            > “Raw material validation must be checked manually.”
            
        - If stock is short, MAIA also highlights partial delivery possibility
            
        - This reflects Holsen’s current practice of confirming raw material availability offline.
            
    - **Pricing Application**
        
        - The pricing used in the quotation is retained when converting the PO into a Sales Order. MAIA ensures:
            
            - Customer specific pricing
                
            - Commodity price confirmation
                
            - Minimum allowed pricing enforcement
                
        - This ensures consistent and accurate pricing throughout.
            
    - **Credit Limit Check**
        
        - MAIA checks the Outstanding balance + New order value vs Credit Limit
            
        - It also checks overdue invoices vs credit terms
            
        - If breach then flagged and reviewed during Approval.
            
    - **Sales Order Creation**
        
        - Once MAIA finishes extracting and validating the PO, it compiles the information into a Draft Sales Order.
            
            - Sales can:
                
                - Review all details
                    
                - Fix any item mismatches
                    
                - Confirm the Sales Order directly on WhatsApp
                    
        - No system login is required. The entire process happens within the familiar WhatsApp interface.
            
        - **Output Document Generation:** To generate output documents. List of output documents supported:
            
            - Quotation
                
            - Sales Order
                
            - Proforma Invoice
                
            - Invoice
                
            - Credit Note
                
            - Receipt
                
    - **Daily Digests:** Sales agent chatbot is able to send a daily digest that consists of unprocessed / incomplete orders and pending actions to the sales agents on a daily basis.
        
        - **Unclosed Sales Orders** Alerts sales staff when orders remain in draft/pending status beyond the expected timeframe. **Sent to:** Sales Representative
            

2. ### **Sales Order Output**
    

MAIA generates a structured Sales Order CSV for bulk upload into UBS according to format required by UBS.

**Features (wherever needed to be uploaded to UBS):**

- Includes customer name, address, and delivery type.
    
- Contains all SKUs and quantities from the Sales Order.
    
- Shows SKU level tags (Manufacturing, Poison, Commodity, COA required).
    
- Shows customer level tags (C3/LMW) and Blanket PO tag (if indicated by Sales).
    
- Includes COA/label/brand requirements, delivery date, and PO notes.
    
- Replaces manual WhatsApp instructions and ensures consistent handoff to logistics.
    

> **Once SQL/Autocount integration is available, MAIA can switch from CSV to full API/connector-based integration.**

3. ### **Supply Chain Agent Assistant**
    

The agent assistant chatbot serves as an assistant to help logistics agents manage order fulfillment for B2B clients.

**Platform:**

- WhatsApp
    

**Included in Phase A1:**

- **Delivery Note (DO) Creation:** To create Delivery Order (DO) as instructed by Logistic agents through WhatsApp messages (natural language; no rigid keywords required).
    
- For outstation deliveries requiring transporter-issued Delivery Orders (e.g., Tiong Nam DO), MAIA allows logistics staff to record the transporter DO number or upload the transporter DO file, ensuring that all delivery documentation is centralised
    
- **Output Document Generation:** To generate output documents. List of output documents supported:
    
    - Delivery Order
        
    - Picking List
        

  

2. ## **User Workspaces**
    

The Sales Agent Workspace provides Sales teams with a clean, centralised interface to review orders created via the MAIA WhatsApp chatbot. This workspace does not replace WhatsApp based order creation; instead, it allows Sales to reference and retrieve information after the order has been confirmed. This is a Desktop Web where users can login and interact with the System.

1. ###    **Sales Agent Workspace**
    

  **Features**

- **Sales Order Viewer:**
    
    - Sales agents can view all Sales Orders created through the MAIA chatbot, in both **Draft** and **Confirmed** states.
        
    - Each order displays key information extracted from the original PO, including customer name, items, quantities, PO number, and delivery classification.
        
- **Document Access:**
    
    - Sales agents can download all documents generated during A1 order creation:
        
        - **Quotation** (if generated)
            
        - **Internal Sales Order**
            
        - **Proforma Invoice** (if prepayment is required)
            
    - **Delivery Instruction Sheet**
        
        - These documents remain consistent with the versions sent via WhatsApp.
            
- **Basic Search & Filter:**
    
    - Simple filtering by customer, order number, or PO number.
        

2. ###    **Approval Workspace**
    

  Once the Sales Order is confirmed, it enters the Approval Workflow within MAIA.

  This ensures operational feasibility and order accuracy before proceeding to logistics.

- Approval Checks
    
    - Approvers verify:
        
        - SKU-level stock availability
            
        - Pricing accuracy
            
        - Customer requirements (COA, label, brand, copy count)
            
        - Order accuracy vs. PO (SKU mapping, quantities, notes)
            
        - Order-type tags (Blanket PO, C3, LMW, Manufacturing)
            
        - Credit Limit and Term checks
            
- **Approval Actions**
    
    - **Approve** → Order proceeds to the Delivery Workspace
        
    - **Reject** → Order returns to Sales with comments
        
    - **Request Clarification** → Order is paused until additional information is provided
        

  This ensures only complete, accurate orders move downstream

3. ###   **Delivery Workspace**
    

  After approval, the order appears in the Delivery Workspace where logistics staff prepare the delivery.

- **Logistics Functions**
    
    - Select delivery date
        
    - Assign transporters for outstation shipments
        
    - Add operational delivery notes (handling, timing, partial delivery instructions)
        
    - Review customer-specific requirements (COA, label, brand, DO copies)
        
    - Review order classification and PO notes
        
    
        This module replaces informal WhatsApp coordination and ensures structured preparation before UBS processing.
    

  

2. # **Business Rule & SOP Configuration | Phase A2**
    

Phase A2 builds on the foundation delivered in A1 by adapting MAIA to Mackessen’s **SOPs, approval flows, pricing rules, and operational guardrails.**

> _These are not new modules, they are_ _**configurations & enhancements**_ _inside the core MAIA workflow._

1. ## **Pricing Governance Enhancements**
    

Holsen’s pricing model includes fixed customer pricing, commodity-based pricing (requiring management confirmation), and minimum margin safeguards. Phase A2 introduces structured mechanisms to ensure price accuracy and prevent accidental under-pricing.

1. ### **Price Deviation Checks**
    

MAIA validates each item’s selling price against:

- Customer Price List
    
- Minimum permissible selling thresholds
    
- Historical invoice price (if provided)
    

If MAIA detects a price that is unusually low or outside configured thresholds, the system automatically **flags** the line for review.

2. ### **Commodity Price Confirmation**
    

Certain chemical items have volatile market-based pricing.

For any SKU marked as _Commodity_:

- MAIA prompts Sales for manual price entry
    
- If the entered price violates configured rules, the Sales Order is routed for approval
    
- Ensures commodity pricing is always intentionally confirmed
    

3. ### **Pricing Approval Queue**
    

Orders that violate pricing rules are automatically routed to the **Price Approval Queue**.

Approvers can:

- **Approve** → Sales Order continues to operational approval
    
- **Reject** → Returned to Sales with comments
    
- **Request Clarification** → Sales must provide justification or confirm with customer
    

The order remains locked until approval is completed.

  

2. ## Credit Limit & Credit Term Validation
    

MAIA performs automated financial eligibility checks before an order proceeds to fulfilment. These checks ensure that customers are served according to Holsen’s credit policies and prevent orders from being processed for accounts with outstanding risks.

MAIA verifies the following based on Holsen’s Credit Master data:

- Credit Limit Breach
    

If the customer’s outstanding balance + new order value exceeds their assigned credit limit, the order is automatically flagged.

- Credit Term Breach
    

MAIA checks whether the customer has overdue invoices beyond their allowed credit days. If overdue, the order is flagged for review.

Any order that violates the credit limit or credit term is routed to the Finance Approval Queue where approvers may:

- Approve → Order continues to the Delivery Workspace
    
- Reject → Order is returned to Sales
    
- Request Clarification → Sales must provide supporting information or payment proof
    

This ensures that all orders moving downstream comply with Holsen’s financial controls and credit risk policies.

3. # **Enhancements |** Phase A3
    

4. ### **Compliance, Batch Handling & Document Automation**
    
      This phase introduces batch metadata intake, compliance enforcement, customer eligibility checks, and the generation of COA/C3 documents. This ensures that all deliveries comply with regulatory and customer-specific requirements before orders reach UBS.
    
    1. ####    **Batch Intake Module**
        
        - MAIA will provide a simple Batch Intake screen for Logistics to enter batch information when new stock arrives.
            
        - The following batch-level fields are supported:
            
            - Batch Number
                
            - Quantity
                
            - Expiry Date
                
            - Manufacturing Date
                
            - K1 Number (for imported goods)
                
            - Regulatory classification (C3, C1, LMW, Poison)
                
            - COA laboratory results (e.g., appearance, content %, pH — based on Holsen’s COA template)
                
        - This module is designed to replace the existing notebook/Excel-based tracking.
            
    
    2. ####    **Batch Eligibility & Compliance Enforcement**
        
        - MAIA will validate batch eligibility before any order proceeds to UBS:
            
            - C3 stock → can only be allocated to C3 customer POs/orders.
                
            - C1/LMW stock → restricted to matching customer categories.
                
            - Expired/near-expiry batches will be flagged or blocked depending on Holsen’s rules.
                
            - Poison-classified SKUs will surface necessary warnings for special handling.
                
            - Blanket PO rules (if applicable) will be validated to prevent over-delivery.
                
            - Only compliant batches will be visible for Logistics to select.
                
    
    3. ####   **COA, C3 & Compliance Doc Handling**
        
    
    - MAIA supports the handling of compliance and batch related documents by storing, attaching, and presenting required files and metadata during order preparation. MAIA does not generate official regulatory documents.
        
        - COA Handling
            
            - COAs are received from suppliers or from Holsen’s laboratory as pre-generated PDFs.
                
            - During batch intake, Logistics uploads the COA once and links it to the batch.
                
            - When an order requires a COA, MAIA automatically attaches the correct COA file to the DO along with information which needs to be altered.
                
            - If Holsen provides a COA template for “COA with details,” MAIA can generate a formatted COA PDF using batch metadata and test results.
                
        - C3 Handling
            
            - C3 authorization documents are provided externally (customer’s import license).
                
            - MAIA does not generate C3 certificates.
                
            - During setup, Holsen uploads the customer’s C3 entitlement file.
                
            - MAIA uses this data to enforce C3 eligibility rules.
                
            - When a C3 restricted product is ordered, MAIA attaches the customer’s existing C3 permit (if provided) to the DO
                
        - C1 / LMW Handling
            
            - These are customer categories
                
            - MAIA stores the customer’s C1/LMW category in the Customer Master.
                
            - During order preparation, MAIA enforces eligibility:
                
                - C1/LMW items can only be supplied to customers with matching categories.
                    
                - No document generation occurs for C1/LMW.
                    
        - K1 Handling
            
            - K1 numbers are provided with import shipment documents.
                
            - Logistics enters the K1 number during batch intake.
                
            - MAIA stores and displays the K1 value, and includes it in the DO and COA packet where applicable.
                
    
    4. ####   **Delivery Type Enforcement (Local vs Outstation)**
        
    
    - MAIA automatically identifies the delivery type based on:
        
        - The customer’s configured delivery type, or
            
        - Their postcode (example 41000 - 41000 can be considered as local delivery)
            
    - Orders are tagged as:
        
        - Local Delivery → typically same-day or next-day
            
        - Outstation Delivery → arranged via transporters (e.g., Tiong Nam)
            
    - This helps Logistics plan deliveries without additional clarification.
        
    

  

5. # **Phase B Customised Extensions**
    

6. ## **Manufacturing Feasibility**
    
    - For manufacturing SKUs, MAIA performs a basic feasibility check to ensure the order can be produced before it is approved.
        
    - Holsen will provide a simple Bill of Materials (BOM) for each manufacturing item.
        
    - When a manufacturing item is included in an order, MAIA will check whether the required raw-material SKUs **appear available** in the batch intake data.
        
    - This is a surface-level validation only; MAIA does **not** perform actual stock deduction or production posting.
        
    - If raw materials appear insufficient, MAIA alerts Logistics to perform a manual check with Production before approving the order.
        
    
      This step prevents confirming a manufacturing order that Holsen cannot produce with the current raw-material position.
2. # **Product Specifications**
    
      The following section highlights in detail the modules that **Holsen** will be receiving and the features of those modules. Each module is carefully designed with scalability, configurability, and high availability in mind, ensuring it can fit into Holsen’s business process. The system is engineered to support the high volume of transactions _(70-90 POs daily)_ required by Holsen.
    
      MAIA is delivered in phases to ensure clarity, predictable rollout, and controlled risk.
    
      **Phase Definitions**
    
    - **Phase A1 Core MAIA (Baseline Order → Delivery Note Flow)** Core MAIA modules and features required to support the standard order-to-delivery-note lifecycle (e.g., baseline internal chatbots, core workspaces, and base integration).
        
    - **Phase A3 Enhancements (Within Core Flow, Delivered Under Phase A)** Phase A3 includes echancements capabilities that still follow MAIA’s core order → delivery note flow, but require deeper tailoring or additional logic**.**
        
    

3. # **Phase A1 Core MAIA (Baseline Order → Delivery Note(DO) Flow)**
    
      Phase A1 delivers the **foundation** of MAIA that Holsen receives. It includes standard order creation (_without any custom business rules, approvals, or additional SOP logic_)
    
      **Phase A1 focuses on:**
    
    - Core Internal Chatbots (Sales & Supply Chain)
        
    - Core Workspaces (Sales & Supply Chain & Finance)
        
    - Core Document Generation
        
    - Core Data Sync Touchpoints
        
    - Baseline process flow (Order → Delivery Note)
        
    
      Phase A1 ensures receives a **fully working, end-to-end operating system** before any customization.
    

1. ## **Internal Chatbot**
    

2. ### **Sales Co Ordinator Assistant (Core)**
    
      The Sales Agent Assistant enables Holsen’s Sales team to generate quotations, receive customer Purchase Orders (PO), and convert them into Sales Orders (SO) directly through WhatsApp or by forwarding customer emails to MAIA.
    
    - **Platform:**
        
        - WhatsApp (MAIA Sales Agent Chatbot)
            
        - Email (for forwarding customer POs)
            
    - **Included in Phase A1:**
        
        - **Sales Intent Capture & Intelligent Document Processing (IDP):**
            
            - **Omni Channel Input:** Sales agents can forward customer requests in various unstructured formats directly to the MAIA bot or email. Supported formats include:
                
                - **Text messages:** Forwarded directly from client chats.
                    
                - **Images:** Photos of handwritten notes or physical POs
                    
                - **PDFs:** Formal Customer Purchase Orders
                    
                
                > Extracted information may not always be fully accurate, especially for handwritten documents or low-quality images. Users will have the option to review and edit extracted fields before confirming the generated document.
                
            - **Data Extraction:** The system automatically identifies and extracts:
                
                - Customer Name.
                    
                - SKUs and Quantities (example:, "10 drums of Copper Sulfate")*
                    
                - Delivery Date (if mentioned, example: specific date)
                    
                
                > SKUs in the PO need to be present in MAIA's inventory SKU for it
                
            - **Dynamic Pricing , Quotation and SO Generation**
                
                - Manual Price Entry: Recognizing that pricing varies (Specially for Commodity based items ) and usually negotiated verbally or via "Boss Approval", MAIA will not enforce fixed pricing in this Phase
                    
                - The bot will prompt the agent to confirm or input the selling price for the specific quote.
                    
                - Minimum price safeguards will be ensured.
                    
                - For the conversion of Quotation to SO, the logic applied while generating the quotation is persistent, which can be reviewed and used again.
                    
            - **Stock Availability Display:**
                
                - Inventory will be checked, which is managed by MAIA.
                    
                - It displays **"Total Available Quantity"** to the agent for reference (example., "Stock Available: 50 Tons")
                    
                - _Note:_ C3 items are set up as separate SKUs, so MAIA already enforces stock and batch restrictions at this stage. Only compliant C3 stock is shown.
                    
        - **Product Attribute Tagging (SKU Level)**
            
            - MAIA identifies the classification of every SKU on the order and displays specific instructions to the Logistics team:
                
                - **Trading**
                    
                    - _Definition:_ Finished goods that are bought and sold without alteration
                        
                    - _Action:_ Signals to the warehouse that the item is "Pick-and-Pack" ready from the shelf.
                        
                - **Manufacturing**
                    
                    - _Definition:_ Items that require internal processing before delivery (e.g., repacking bulk solids from 1-ton bulk bags into 20kg or 50kg packs
                        
                    - _Action:_ Visual cue for Logistics to **check with Production** immediately to ensure the repacking job is scheduled, rather than simply looking for finished stock on the rack.
                        
                - **Poison / Hazardous Goods:**
                    
                    - _Definition:_ Controlled chemical items that require specific government-mandated transport documentation
                        
                    - _Action:_ **CRITICAL ALERT.** Displays a bold warning: **"POISON FORM REQUIRED."** This signals the Admin/Logistics staff that they must manually prepare and print the physical Poison Form to hand to the driver, ensuring legal compliance during transport
                        
                - **Commodity:**
                    
                    - _Definition:_ Items with highly variable, market dependent pricing
                        
                    - _Action:_ Signals the Sales Agent during the Quotation phase to **manually verify the current** before quoting or confirming the order
                        
        - **Customer Requirements Tagging**
            
            - MAIA looks up the Customer Profile and makes the instructions for the order visible, ensuring client specific rules are respected:
                
            - This information will be visible in the Delivery Note (DO) to ensure that the packaging is done as per the mentioned instructions:
                
                - **COA (Certificate of Analysis) Requirement**
                    
                    - Specifies the exact type of technical documentation the client demands for the shipment.
                        
                    - Displays the specific format required, so Logistics prints the correct file:
                        
                        - Standard: Generic COA.
                            
                        - Detailed: COA
                            
                    - **Labeling & Brand Strictness**
                        
                        - Instructions regarding product substitution. While Holsen often swaps brands based on stock availability, certain clients strictly require specific brands (e.g., "Must use Brand X only
                            
                        - Displays **"NO SUBSTITUTION"** or **"PREFERRED BRAND: [Brand Name]"** to prevent the warehouse from picking an alternative brand that would result in a client rejection.
                            
                    - **Documentation & Copies**
                        
                        - Administrative preferences for physical paperwork.
                            
                        - Specifies quantity instructions, such as **"Needs 2 Invoice Copies"** or "Include Delivery Note with price hidden," ensuring the driver arrives with the exact paperwork packet the client's receiving department expects
                            
        - **Sales Order Creation:** To create sales orders as instructed by sales agents through WhatsApp messages and emails (natural language; no rigid keywords required).
            
        - **Output Document Generation:** To generate output documents. List of output documents supported:
            
            - Quotation
                
            - Sales Order
                
            - Proforma Invoice
                
            - Invoice
                
            - Credit Note/ Debit Note
                
        - **Daily Digests**
            
            - Sales agent chatbot is able to send a daily digest that consists of unprocessed / incomplete orders and pending actions to the sales agents on a daily basis.
                
                - **Unclosed Sales Orders** Alerts sales staff when orders remain in draft/pending status beyond the expected timeframe. **Sent to:** Sales Representative
                    
            - The Sales Rep will be able to declare the Fulfillment Method as either delivery or pickup
                
    

3. ### **Sales Order Output**
    

MAIA generates a structured Sales Order CSV for bulk upload into UBS according to format required by UBS.

**Features (wherever needed to be uploaded to UBS):**

- Includes customer name, address, and delivery type.
    
- Contains all SKUs and quantities from the Sales Order.
    
- Includes COA/label/brand requirements, delivery date, and PO notes.
    
    - Order remarks
        

> **Once SQL/Autocount integration is available, MAIA can switch from CSV to full API/connector-based integration.**

3. ### **Supply Chain Agent Assistant (Core)**
    

The logistics agent assistant chatbot serves as an assistant to help logistics agents manage order fulfillment for B2B clients.

  **Platform:**

- WhatsApp
    

  **Included in Phase A1:**

- **Delivery Note (DO) Creation:** To create Delivery Order (DO) as instructed by Logistic agents through WhatsApp messages (natural language; no rigid keywords required).
    
- **Output Document Generation:** To generate output documents. List of output documents supported:
    
    - Delivery Order
        
    - Picking List
        
- **Daily Digests:** The logistics agent chatbot automatically sends a daily summary of all orders requiring attention, including those pending scheduling, scheduled for delivery, out for delivery, and completed deliveries. This ensures logistics agents have full visibility of daily operational tasks.
    
    - **Delivery Delays** Triggered when a Delivery Note has **not been generated** for an invoice after _X days_
        
    - **Expiring Items** Alerts users when products are approaching their expiry date.
        
    - The information mentioned above will be highlighted (pinned) in the daily digest, which can be accessed both through the chatbot and the workspace.
        

1. ####   **Supply Chain Notification Reminders**
    

  MAIA supports automated logistics reminders to strengthen SOP adherence and prevent delays.

- **Inventory Management & Alerts**
    
    - **Out of Stock** Triggered when product quantity reaches zero. **Sent to:** Logistics Representative & Sales Representative
        
    - **Low Stock** Triggered when quantity falls below the configured minimum threshold. **Sent to:** Logistics Representative & Sales Representative
        
    - The information mentioned above will be highlighted (pinned) in the daily digest, which can be accessed both through the chatbot and the workspace.
        

2. ## **User Workspaces**
    
      The Sales Agent Workspace provides Sales teams with a clean, centralised interface to review orders created via the MAIA WhatsApp chatbot. This workspace does not replace WhatsApp based order creation; instead, it allows Sales to reference and retrieve information after the order has been confirmed. This is a Desktop Web where users can login and interact with the System.
    
    1. ###     **User Workspace**
        
              Desktop Web, where users can login and interact with the System.
        
    
    2. ###     **Sales Agent Workspace (Core)**
        
              A web-based workspace that allows sales agents to manage order status and customer information.
        
    
        **Included in Phase A1:**
    
    - **Sales Order Management:** Create, modify, and track sales orders.
        
        - Sales Management includes reminder notification for users
            
            - **Inactive customers**: customer who did not order for 60 days (_subject to change if required_) from the last invoice date
                
                - Notification is sent to Sales Representative
                    
            - **Unclosed Sales orders:** pending orders that have not been closed by sales agents
                
                - Notification is sent to Sales Representative
                    
    - **Order Lifecycle Overview:** Users are able to manage and have an overview of the statuses of the orders ( o schedule, scheduled, out for delivery, delivered ).
        
    - **Output Documents Management:** View and download the created output documents (e.g., invoice, DO, receipt).
        
    - **Customer Management:** View and manage the details of each client, including credit terms/limits recorded in MAIA
        
    
    3. ###     **Supply Chain Agent Workspace (Core)**
        
              **Included in Phase A1:**
        
        - **Fullfillment Management:** Create, modify, and track Delivery notes(DO).
            
        - **Order Lifecycle Overview:** Users are able to manage and have an overview of the statuses of the orders (draft, to Schedule, Scheduled, Out for Delivery, Delivered).
            
        - **Output Documents:** View the created output documents (Pick List,Delivery Note(DO)
            
        - **Inventory Management:** View and manage the details of each Product
            
        - **Delivery Request Classification**
            
            > Urgent orders involving 3rd party transporters are arranged **outside** MAIA.
            > 
            > MAIA provides all required supporting documents:
            > 
            > - Delivery Note (DO)
            >     
            > - Pick List
            >     
            > - Other Required Documents (optional)
            >     
            
    
    4. ###     **Duplicate Order Prevention**
        
        - **Context:** To prevent human error where a PO might be processed twice
            
        - **Feature:** MAIA performs a real-time check on every incoming order.
            
        - **Logic:** IF Customer Name + PO Number matches an existing active order.
            
        - **Action:** The system flags the order as a " Duplicate Order" and prevents it from creation
            
    
    5. ###     **Customer based pricing**
        
              To ensure sales agents create orders with **correct Retail or Dealer pricing**, based on the customer’s category, without requiring manual cross-checking or manager approvals.
        
              The objective is to make it simple and fool-proof for sales to generate accurate orders that follow Holsen's retail/dealer price structures.
        
        1. ####       **Customer-Based Pricing Configuration (User Setup)**
            
        
              When Users (Admins/Sales Coordinators) create or edit a customer in MAIA, they can configure:
        
        - Customer-specific price per product
            
        
        2. ####       **Customer Pricing From New Product Creation**
            
        
              ⁠When a new product item is created in MAIA:
        
        - ⁠Users can optionally set pricing for specific customers
            
        - Users can also apply default price that applies to all customers
            
        
              This makes pricing flexible and consistent across the business.
        
        3. ####       **Automatic Price Retrieval During Order Creation**
            
        
              When a Sales Representative creates a Sales Order:
        
        4. Sales selects the customer
            
        5. The system retrieves the exact pricing configuration for that customer
            
        6. MAIA automatically fills in the correct price for each item
            
        
              Sales do not need to cross-check any pricing list manually
        
    
    6. ###     **Role Specific Approval**
        
              Once the Sales Order is created, it stays as draft. Finance team members to check the accuracy before proceeding to creation of Delivery note(DO). Pricing and credit information are visible to approvers for reference, but no automated pricing or credit validations are executed in Phase A1.
        
        - Approval Checks
            
            - Approvers manually review each order to ensure it is workable and correctly captured
                
                - Customer requirements
                    
                - Order Accuracy , check with PO
                    
                - Credit Limit and Credit Term Check
                    
            - Approval Actions
                
                - Approve → Order Marked as "Submitted" are able to proceed to create Delivery note(DO)
                    
                - Ammend → The sales agent can amend the order if needed and proceed
                    
                - Request Clarification → Order is paused until clarification is provided
                    
    
      
    

3. # **Phase A3 Enhancements (Within Core Flow)**
    
      Phase A3 includes **echancements** **capabilities** that still follow MAIA’s core order → delivery note flow, but require deeper tailoring or additional logic.
    

4. ## **Compliance, Batch Handling & Document Automation**
    
      This phase introduces batch metadata intake, compliance enforcement, customer eligibility checks, and the generation of COA/C3 documents. This ensures that all deliveries comply with regulatory and customer specific requirements.
    
    1. ###    **Advanced Batch Intake**
        
            When new stock arrives, the Warehouse team enters the following mandatory attributes into MAIA:
        
        - **Batch / Lot Number:** The unique identifier on the item
            
        - **Expiry Date:** Critical for FEFO (First Expired, First Out) logic.
            
        - **K1 Form Number:** (Mandatory for C3/Imported Goods) The Customs Declaration number associated with this specific shipment.
            
        - **COA Data:** Upload the Supplier COA PDF.
            
        - **Tax & Restriction Status:**
            
            - Free Stock (Can be sold to anyone).
                
            - C1 Stock (Restricted to customers covered under a valid C1 certificate. The eligibility is determined by presence of it on the Customer Profile)
                
            - C3 Stock (Imported on Behalf, Restricted to specific C3 Customer).
                
    
    2. ###    **Compliance & Eligibility Enforcement**
        
            MAIA will surface all the batch related information before any order proceeds.
        
        - **C3 Allocation (Import on Behalf):**
            
            - If a batch is tagged **"C3 - Customer A"**, it is hard locked to that client.
                
            - If a Sales Agent tries to order this SKU for **Customer B**, MAIA will display **"0 Stock Available"** (hiding the C3 stock) to prevent illegal allocation.
                
        - **C1 certificate validation:**
            
            - When a Sales Agent adds a C1 Product to an order, the system checks the Customer Profile for valid certifications and its Expiry Date and makes it visbile
                
        - **K1 Traceability:**
            
            - The K1 number captured during batch intake is permanently linked to the stock.
                
            - MAIA automatically retrieves and shows this **"Ref K1 Number"** on the Delivery Order and Invoice
                
    
    3. ###   **COA handling**
        
    
      MAIA supports the handling of compliance documents by storing, attaching, and presenting required files during order preparation.
    
    - **COA Handling:**
        
        - COAs are received from suppliers or Holsen’s laboratory as PDFs and uploaded during Batch Intake.
            
        - **Customer Preference Logic:** When an order is placed, MAIA checks the Customer Profile (Standard vs. Blinded).
            
        - **Masking/Blinding:** If the customer requires a "Blinded COA" (Supplier details hidden), MAIA provides the necessary data/instructions to allow the user to mask specific fields (e.g., Supplier Name) before generating the final PDF for the driver.
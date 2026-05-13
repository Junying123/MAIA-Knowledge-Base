# Sprint 0 MAIA Phase 2 (Ultimax & Fixguru)

> **Purpose:** Align the team on scope, deliverables, ways of working, and Day‑1 build plan for two MAIA‑based projects with shared architecture but different domain needs.

---

1. # Kickoff Agenda
    

- Project overview & outcomes (Ultimax, Fixguru)
    
- Brief on scope, customizations & deliverables
    
- Next actions & timeline
    

---

2. # Client Profiles
    

3. ## **Ultimax** _Medical Supplies (Penang)_
    

- Supplies surgical **instruments & implants** to hospitals (consignment model).
    

### Target MAIA flow:

  Quotation → Sales Order → Proforma (optional) → Pick List → Delivery Note → Delivery Trip → Return Note (usage) → Invoice → Receipt / PV.

### Current Business process

This content is only supported in a Lark Docs

2. ## **Fixguru** _Packaging (Ready‑made & Custom Boxes)_
    

- B2B boxes: **ready‑made** and **custom** (RSC/Die‑cut) for SME → Enterprise.
    

### **Target MAIA flow**:

  Quotation → Sales Order → Proforma → Delivery Note (DN/DO) → Delivery Trip → Invoice → Credit Note (if needed) → Receipt / Refund Note.

### Current business process

**Quotation → Proforma → pick list → schedule delivery → issue Invoice → Credit Note (if needed)**

This content is only supported in a Lark Docs

  

  

3. # Order‑Centric Record Grouping (Common Principle)
    

This content is only supported in a Lark Docs

- **Sales Order (SO)** is the central record linking: Quotation, Proforma, Pick List, Delivery Note, Delivery Trip, Return Note (Ultimax), Invoice, Credit Note, Receipt, Payment Voucher / Refund Note.
    

|   |   |
|---|---|
|Type of documents under 1 Sales order|   |
|Sales Order|Quotation|
|Proforma|
|Pick list|
|Delivery Note (DO)|
|Delivery Trip|
|Invoice|
|Credit note|
|Receipt|
|Return Note|

- **Traceability:** End‑to‑end audit from Quotation to Final Invoice.
    
- **Editability:** Changes permissible up to **Proforma** (Fixguru) / **Return Note** (Ultimax) stages.
    
- **Final Invoice Accuracy:** Invoice mirrors last agreed SO/usage.
    
- **Refund/Returns:**
    
    - **Fixguru:** Refund Note (finance visibility) + Credit Note (post‑invoice compliance).
        
    - **Ultimax:** Payment Voucher for refunds; Credit Note after invoice if required.
        

1. ## End‑to‑End Business Processes
    

## 4.1 Fixguru — Order‑to‑Cash

1. **Quotation** — pricing/terms/spec draft to customer.
    
2. **SO** — created from accepted quotation.
    
3. **Proforma** — confirmation layer; iterate quantities, pricing, discounts.
    
4. **Pick List** — warehouse pick & pack (optional if direct ship).
    
5. **Delivery Note (DN/DO)** — official record of goods ready to ship.
    
6. **Delivery Trip** — consolidate DOs per route/day (optional).
    
7. **Invoice** — upon delivery completion; supports partial/staged billing.
    
8. **Credit Note** — for returns/adjustments after invoice.
    
9. **Receipt / Refund Note** — payment confirmation; finance refund tracking.
    

**Fixguru Customizations**

- **API Integrations:**
    
    - AutoCount (initial target) for invoicing/receipts/CN; optional Customer/Product sync.
        
    - **WMS/Accounting** quantity authority; MAIA validates availability in real‑time.
        
- **Workflow Automation:** Auto‑create DO when SO finalized (configurable).
    
- **UI/UX:** Dashboards for sales overview & outstanding payments.
    
- **Custom Box Quotation Module:**
    
    - **RSC Sheet** & **Die‑cut Sheet** (calc logic provided by IAM) — embedded into Proforma flow.
        

**Fixguru Inventory Model**

- **Authority:** **AutoCount/WMS is the stock system of record**.
    
- **MAIA behaviour:**
    
    - **SKU Sync** from AutoCount/WMS into MAIA (catalog/master).
        
    - **Real‑time validation** during SO/DN to prevent oversell.
        
    - **DO issuance** posts to AutoCount immediately (mirror movement).
        
    - **Returns** (if any) posted back as **Sales – Delivery Returns** in AutoCount.
        
    - MAIA shows operational visibility; replenishment managed in AutoCount/WMS.
        

## 4.2 Ultimax — Consignment (Pre‑OP → Post‑OP → Billing)

1. **Quotation** → 1a **Won** (GL/PO/Deposit) or 1b **Lost** (reason).
    
2. **SO** auto‑created from confirmed quotation.
    
3. **Proforma** (optional) — pre‑op confirmation.
    
4. **Pick List** — **reserve** Box & Component SKUs (with **MDA ID**).
    
5. **Delivery Note** — allocate; Booking No. auto; send to hospital.
    
6. **Delivery Trip** — dispatch to hospital; POD capture.
    
7. **Collection Trip: dispatch to hospita**
    
8. **Return Note** — record **QtyUsed / QtyReturned / Damaged** per component.
    
9. **SO Adjustment** — finalize usage + instrument rental.
    
10. **Invoice** — actual usage; e‑invoice fields; sync to AutoCount.
    
11. **Receipt / PV** — payment confirmation or refund voucher.
    

**Ultimax Customizations**

- **Inventory Authority:** **MAIA** is source of truth; AutoCount mirrors for accounting & e‑invoicing.
    
- **Compliance:** MDA ID on every SKU/Box & document lines; lot/serial capture; full audit trail.
    
- **Approvals:** finance approval before issuing **Receipt/PV**; price below min; DO≠SO; cash orders POP; outstanding credit terms gate new SO.
    
- **Notifications:** low/zero stock, restock posted, delivery statuses, SO→DO delay (7 days), outstanding payments, etc.
    

**Ultimax Inventory Model**

- **States:** Available → Reserved (PL) → Allocated (DO) → In‑Transit → At Hospital → Returned / Consumed / Adjusted.
    
- **Bundles:** **Box SKU** dispatched; component usage recorded on RN; invoice = actual **QtyUsed** + optional **instrument rental**.
    
- **Incomplete sets:** allowed; variances logged; write‑off with Finance approval.
    

---

4. # Inventory Management (Baseline & Integration)
    

### Objective

MAIA integrates with AutoCount (or other ERP/WMS systems) to ensure both operational visibility and accounting compliance.

- **Ultimax**: MAIA is the **authoritative source of truth** for inventory.
    
- **Fixguru**: AutoCount/WMS remains the **authoritative stock system**, while MAIA provides real-time validation and operational visibility.
    

---

### Core Stock Management Functions

|   |   |   |
|---|---|---|
|Function|Ultimax|Fixguru|
|**1. SKU Synchronization**|SKUs (Box & Component) originate in **MAIA** → sync to AutoCount. Tagged with MDA IDs & pricing rules.|SKUs originate in **AutoCount/WMS** → pulled into MAIA for operational reference.|
|**2. Inventory Ownership**|**MAIA** is authoritative for all stock (sales, returns, adjustments, restocks). AutoCount reflects changes via sync.|**AutoCount/WMS** is authoritative for stock. MAIA only validates levels in real time during SO/DN creation.|
|**3. Comprehensive Item Management**|• Restocking in MAIA syncs outward.<br><br>• Adjustments (damage/short/sterility) tracked in MAIA.<br><br>• Lifecycle control (new/discontinued items).<br><br>• Configurable alerts (low/out-of-stock, replenishment).|• Restocking & adjustments handled in AutoCount/WMS (visible in MAIA via sync).• Real-time validation prevents oversell.• Delivery Note pushes immediate stock movement into AutoCount.|
|**4. Consignment Workflow** _(Ultimax only)_|Pre-OP: QT → SO → PL → DO → Trip.Post-OP: RN (used/unused) → Updated SO → INV → Receipt/PV.Supports partial returns & reconciliation.Bundled pricing on actual usage (instrument rental supported).|—|
|**5. Standard Order Workflow** _(Fixguru only)_|—|QT → SO → Proforma → DO → Trip → INV → Credit Note/Refund → Receipt.DO creation reflects stock immediately in AutoCount.Return Notes push back into AutoCount as _Sales – Delivery Returns_.|

1. **SKU Synchronization**
    
    1. Unique SKUs (catalog/inventory master) are synced between MAIA and AutoCount/WMS.
        
    2. **Ultimax**: SKUs (including Box & Component) originate in MAIA and push into AutoCount, tagged with MDA IDs and pricing rules.
        
    3. **Fixguru**: SKUs originate in AutoCount/WMS and are pulled into MAIA for operational reference.
        
2. **Inventory Ownership**
    
    1. **Ultimax**: MAIA maintains the authoritative record of inventory across all channels (sales, returns, adjustments, restocks). AutoCount reflects these changes via sync.
        
    2. **Fixguru**: AutoCount/WMS remains the authoritative system for stock quantities. MAIA validates stock levels in real time during SO/DN creation but does not own stock counts.
        
3. **Comprehensive Item Management**
    
    1. **Ultimax**:
        
        - Restocking in MAIA syncs outward.
            
        - Adjustments (damage/short/sterility) and write-offs tracked in MAIA.
            
        - Lifecycle control (new items, discontinued items).
            
        - Configurable alerts (low stock, out-of-stock, replenishment).
            
    2. **Fixguru**:
        
        - Restocking and adjustments handled in AutoCount/WMS, visible in MAIA via sync.
            
        - Real-time validation prevents oversell.
            
        - Delivery Note pushes immediate stock movement into AutoCount.
            
4. **Consignment Workflow (Ultimax only)**
    
    1. Pre-OP: QT → SO → PL → DO → Delivery Trip
        
    2. Post-OP: RN (with amendments for used/unused items) → Updated SO → INV → Receipt/PV
        
    3. Supports **partial returns** and reconciliation.
        
    4. Bundled pricing based on **actual usage** (instrument rental supported).
        
5. **Standard Order Workflow (Fixguru only)**
    
    1. QT → SO → Proforma → DO → Delivery Trip → INV → Credit Note/Refund → Receipt
        
    2. Delivery Note creation reflects stock immediately in AutoCount.
        
    3. Return Notes push back into AutoCount as **Sales – Delivery Returns**.
        
    
      Table format
    

---

### Compliance & Audit

- **Ultimax**: MDA ID tagging on all SKUs and documents; full audit trail QT → INV; write-offs require Finance approval.
    
- **Fixguru**: AutoCount enforces compliance for invoicing and credit terms; MAIA ensures operational traceability but defers to AutoCount for financial reporting.
    

---

**AutoCount Integration**

Ultimax

|   |   |   |
|---|---|---|
|**Object**|**Direction**|**Timing**|
|Return Note|MAIA → AutoCount|After Invoice is generated|
|Invoice|MAIA → AutoCount|
|Receipt|MAIA → AutoCount|
|Credit Note/PV|MAIA → AutoCount|Real time|

Fixguru

|   |   |   |
|---|---|---|
|**Object**|**Direction**|**Timing**|
|Quotation|MAIA → AutoCount|Optional / Non-financial (reference only)|
|Sales Order|MAIA → AutoCount|Real time (once finalized)|
|Proforma Invoice|—|Not posted (non-financial, for customer reference)|
|Delivery Note (DO)|MAIA → AutoCount|Real time (immediately upon issuance to reflect stock movement)|
|Return Note|MAIA → AutoCount|Real time (pushed into AutoCount as Sales – Delivery Returns)|
|Invoice|MAIA → AutoCount|Real time (immediately after generation)|
|Credit Note / Refund Note|MAIA → AutoCount|Real time (adjustments/returns)|
|Receipt / Payment Voucher|AutoCount ↔ MAIA|Real time (finance-driven, synced back to MAIA for status updates)|

  

---

5. # Approvals (Role‑Based)
    

MAIA incorporates a robust approval workflow engine to safeguard compliance and ensure management oversight across critical business processes. Approvals are not tied to individual users but instead operate on a **role-based model**, meaning any user assigned to the designated role group can perform the required approval. This ensures flexibility, accountability, and continuity even if specific users are unavailable.

|   |   |   |   |
|---|---|---|---|
|For Who|Approval process|Triggers|Who needs to approve|
|FIxguru & Ultimax|- Quotation / Sales Order approval when selling price falls below minimum threshold.|Selling price < minumum price (get from autocount)|- Management|
|FIxguru & Ultimax|- Management approval is required if a customer approaches their credit limit prior to creating a Sales Order.|- Set reminder at 80%|- Management|
|FIxguru|- Delivery Note(DO) approval is required if the Delivery Note or Deliver Note items differ from the original Sales Order.|DN Product item != Sales Order Product items|- Sales<br>    <br>- Management|
|FIxguru|- Delivery Note(DO) Approval required if the order is Cash payment|- Payment to confirm before issue DO<br>    <br><br>How to confirm payment<br><br>Once customer is confirmed with signature, then only it will be deemed as confirmed sales and proceed to issue packing list|- Sales<br>    <br>- Management|
|FIxguru|- Credit terms to follow customer credit terms (any outstanding payment following their credit term will need to be sent to get approval|- Credit customer who has outstanding payment from their existing credit term|- Management|
|Ultimax|- Approval flow for Finance to approve payments to issue receipt or payment vouchers|- Proof forwarded to chatbot (auto-generate draft Receipt) or to Finance (manual verification).<br>    <br>- Finance approves and issues official Receipt.<br>    <br>- Receipt sent to customer.|- Finance|

  

---

6. # Notifications (Reminders)
    

|   |   |   |   |   |
|---|---|---|---|---|
|**Event**|**Condition**|**Recipients**|**Channel**|**Freq**|
|**Low Stock**|Qty ≤ threshold (static/dynamic 3‑mo avg)|Sales, Admin, Mgmt|Chatbot/Email|Immediate|
|**Out of Stock**|Qty = 0|Sales, Admin, Mgmt|Chatbot/Email|Immediate|
|**Restock Posted**|New GRN/Adj|Sales, WH|Chatbot|Immediate|
|**Delivery Status**|Packing→Packed→Scheduled→Loading→OFD→Delivered|Assigned owner|Chatbot|On change|
|**SO→DO Delay**|No DO after 7 days|Assigned Sales|Chatbot|Daily|
|**Customer Inactivity**|No invoice in 30/60/90d (from last invoice)|Assigned Sales|Chatbot/Email|30d tier|
|**Outstanding Payment**|T‑10 to term; overpaid>0|Assigned Sales|Chatbot/Email|Daily|
|**Credit Limit Nearing**|≥80% customer Credit limit|Sales + Mgmt|Chatbot|Immediate|
|**Send Invoice Copy**|Final invoice generated|Assigned Sales|Chatbot|Once|

- Inventory availability notifications.
    
    |   |   |   |
    |---|---|---|
    |Notifications|Notification sent to whom?|Conditions|
    |- out of stock items|_(Configurable: Sales agent, Logistics, Management)_|Item reaches 0 in quantity|
    |- Restock items|Newly restock items|
    |- Low in stock items|Item reaches a minimum quantity threshold<br><br>Explore to see whether you can explore using the Past 3 Months average sales quantity as the threshold|
    
- Delivery status updates.
    
    |   |   |
    |---|---|
    |Status|Status sent to whom ?|
    |Packing|_(Configurable: Sales agent, Logistics, Management)_|
    |- Packed|
    |- Schdeuled|
    |- loading|
    |- Out for delivery|
    |- Delivered|
    
- Follow-up reminders for quotations.
    
      Alerts if Sales Order is not converted to DO within 7 days.
    
    - Dedicated sales agent reminder
        
    
    |   |   |   |
    |---|---|---|
    |Reminder to sent|Triggers|Status sent to whom ?|
    |- Alerts if Sales Order is not converted to DO within 7 days.|No Delivery note created after 7 Days|Sales Agent (User Specific)|
    
- Customer inactivity reminders (no orders for every 30 days). From the last invoice date
    
    |   |   |   |   |
    |---|---|---|---|
    |How often|Triggers|Who receives notification ?|Is it user specific ?|
    |30 days<br><br>60 days<br><br>90 days|_Eg. Event or Schedule_|_eg.Sales agent_|_Eg. Yes_|
    
- Outstanding payment reminders
    
    |   |   |   |   |
    |---|---|---|---|
    |Status|Triggers|Scenarios|Who receives notification ?|
    |Customer outstanding payments nearing end of Credit terms|_Event_|10 days before end of credit term|_Dedicated Sales agent_|
    |Credit limit alerts for customers almost exceeding their limit.|Event|80% credit limit|_Dedicated Sales agent_|
    |Reminder for Overpaid customer|Event|Overpaid amount > 0|_Dedicated Sales agent_|
    |Dedicated Sales Agent reminders to send a copy of invoice to customers once delivery is completed|Event|When final invoice is generated|_Dedicated Sales agent_|
    

---

7. # Customization
    

## Custom Box Quotation calculation Module

##    [RSC Box Calculator](https://eg69120xnei.sg.larksuite.com/wiki/NhiLwHD3QiSicskOpP1lQNXdgKf?from=from_copylink)

This content is only supported in a Lark Docs

##   RSC Sheet (calculation logic provided by IAM Worldwide Sdn Bhd).

This content is only supported in a Lark Docs

##     Diecut Box Calculator

This content is only supported in a Lark Docs

This content is only supported in a Lark Docs

##   Diecut Sheet (calculation logic provided by IAM Worldwide Sdn Bhd).

This content is only supported in a Lark Docs

  

## **Dashboard analysis**

- overall sales, outstanding payments
    

![](https://eg69120xnei.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=YzIxODJmNWFmMmY3NGZhZjQxZTIzMGU1MDZmNzY2NTJfWXZ2ZGltUmpVSTBUdlk0NmxLcFFMeVJqMG1Wc2diWmhfVG9rZW46UWl1M2JnN0tub2NaYjd4ckgwZmxFOFFHZ1ViXzE3Nzg2NTM4MTc6MTc3ODY1NzQxN19WNA)

  

  

---

8. # Timeline
    

## Development Timeline (6 Oct – 28 Nov)

**Duration:** 8 weeks (8 sprints of 2 weeks Milestone) **Milestones:** 25% → 50% → 75% → 100% completion

|   |   |   |   |
|---|---|---|---|
|**Phase**|**Dates**|**Focus**|**Milestone**|
|**1**|**6 Oct – 17 Oct**|Build **happy path core flow**<br><br>(Quotation → SO → Picklist > DN →DT → RN→ INV) • Implement **approvals** (baseline flows) • Implement **Return Note** (Ultimax consignment) • Base part of **Custom Box Module** (Fixguru) • Base part of **Inventory** (SKU sync, ownership structure)|**25% Milestone M**|
|**2**|**20 Oct – 31 Oct**|Build **unhappy path core flow** (error/edge scenarios in approvals, RN adjustments) • Extend **Custom Box Module** (calculation logic partial) • Extend **Inventory functions** (adjustments, write-offs)|**50% Milestone A**|
|**3**|**3 Nov – 14 Nov**|• Complete **Custom Box Module** (Remaining RSC + Diecut logic) • Complete **Inventory Module** (bundled sets, usage tracking) • **Dashboard Analysis** (sales, outstanding payments) • **Reminder Notifications** (stock alerts, customer inactivity, payment reminders)|**75% Milestone I**|
|**4**|**17 Nov – 28 Nov**|**Finalization & Stabilization** – End-to-end **internal** **UAT scenarios per client** (Ultimax & Fixguru) – Bug fixes & finalizations – Client UAT **readiness checklist**|**100% Milestone A(Dev Complete)**|

---

9. # Next Actions Steps
    

- PRD Creation
    
- TRD Creation
    
- Scrumbboard Planning
    

  

10. # List of Sample Documents
    

## Ultimax

### Quotation

This content is only supported in a Lark Docs

This content is only supported in a Lark Docs

### Debtor list (Customer list)

This content is only supported in a Lark Docs

### Checklist

This content is only supported in a Lark Docs

This content is only supported in a Lark Docs

  

### Delivery Note (Delivery Order)

### Invoice

## Fixguru

Come see me for fixguru sample docs
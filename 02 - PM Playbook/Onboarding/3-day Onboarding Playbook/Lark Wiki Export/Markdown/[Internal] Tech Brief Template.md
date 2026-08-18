**\[Internal\] Tech Brief Template**

**MAIA Deployment --- Structured Technical Brief**

**Purpose:** AI pre-fills this from the client narrative + questionnaire. Tech lead and product review for accuracy. This document is the single source of truth for deployment decisions --- not the narrative, not verbal agreements.

**Owner:** Product generates AI draft. Tech lead owns accuracy and sign-off.

**Gate:** Tech brief must be completed and confirmed before Day 2 deployment work begins.

**Client Information**

  --------------------------------- -------------------------------------------------------------------------
  Field                             Value

  Client Name                       

  Industry                          

  Company Size (approx headcount)   

  Primary Contact                   

  Tech Lead Contact (client-side)   

  Target Go-live Date               

  Deployment Model                  ☐ Mindhive-hosted ☐ Client-hosted AWS ☐ Mindhive-managed via client AWS
  --------------------------------- -------------------------------------------------------------------------

**1. MAIA Modules in Scope**

Check all modules to be activated at go-live. Unchecked modules are deferred --- do not configure them.

  ----------------------------- -------------------- --------------------
  Module                        In Scope             Notes

  Sales Orders (SO)             ☐                    

  Purchase Orders (PO)          ☐                    

  Delivery Orders (DO)          ☐                    

  Invoices                      ☐                    

  Quotations                    ☐                    

  Goods Receipt Notes (GRN)     ☐                    

  Credit Notes                  ☐                    

  Debit Notes                   ☐                    

  Inventory / Stock             ☐                    

  Customer Management           ☐                    

  Supplier Management           ☐                    

  WhatsApp Channel              ☐                    

  Reporting / Dashboard         ☐                    

  Other: \_\_\_\_\_\_\_\_\_\_   ☐                    
  ----------------------------- -------------------- --------------------

**Out of scope at go-live (deferred):**

**2. Document Types (Doctypes) in Scope**

List each doctype the client will use, the direction (inbound/outbound/both), and expected volume.

  ------------ ------------ ------------------- --------------- ------------
  Doctype      Direction    Est. Daily Volume   Primary Users   Notes

                                                                

                                                                

                                                                

                                                                
  ------------ ------------ ------------------- --------------- ------------

**3. User Roles & Permission Matrix**

Start from MAIA base roles. Adjust per client.

  ------------------------ ---------------------------------- ------------------------- ----------------- ------------
  Role Name                Description                        Modules Accessible        Approval Rights   Notes

  Admin                    Full system access                 All                       All               

  Manager                  View + approve                     All                       ☐ SO ☐ PO ☐ INV   

  Sales Rep                Create + edit sales docs           SO, Quotation, Customer   None              

  Warehouse                Create + edit delivery/GRN         DO, GRN, Inventory        None              

  Finance                  View + process invoices/payments   INV, Credit/Debit Notes   ☐ INV             

  Custom: \_\_\_\_\_\_\_                                                                                  

  Custom: \_\_\_\_\_\_\_                                                                                  
  ------------------------ ---------------------------------- ------------------------- ----------------- ------------

**Client-specific customisations to base permissions:**

**4. Integration Map**

  -------------------------------------- ------------------ --------------------------- --------------------- --------------- ------------------- ------------------------------
  System                                 Integration Type   Direction                   Frequency             Data Scope      Access Method       Status

  WhatsApp Business (WABA)               Channel            Inbound + Outbound          Real-time             All doc types   API key             ☐ Ready ☐ Pending ☐ Deferred

  Accounting (AutoCount / SQL / Other)   Data sync          ☐ One-way ☐ Bidirectional   ☐ Real-time ☐ Batch                   API / DB / Export   ☐ Ready ☐ Pending ☐ Deferred

  ERP / Other: \_\_\_\_\_\_\_\_\_\_                                                                                                               ☐ Ready ☐ Pending ☐ Deferred
  -------------------------------------- ------------------ --------------------------- --------------------- --------------- ------------------- ------------------------------

**Integration dependencies that could block Day 2 config:**

**Confirmed not needed (explicitly scoped out):**

**5. Data Migration Scope**

  ---------------------------- ------------------------------------------ --------------------- ------------------------- ---------------------- ----------
  Entity                       Source Format                              Record Count (est.)   Data Quality              Import Method          Owner

  Customer list                ☐ Excel ☐ CSV ☐ AutoCount export ☐ Other                         ☐ Clean ☐ Needs cleanup   MAIA import template   Tech

  Item / product catalog       ☐ Excel ☐ CSV ☐ AutoCount export ☐ Other                         ☐ Clean ☐ Needs cleanup   MAIA import template   Tech

  Pricelist                    ☐ Excel ☐ CSV ☐ Manual entry                                     ☐ Clean ☐ Needs cleanup   MAIA import template   Tech

  Open transactions (if any)                                                                                                                     

  Historical data (if any)                                                                                                                       
  ---------------------------- ------------------------------------------ --------------------- ------------------------- ---------------------- ----------

**Data items explicitly not migrated (client to manage manually or post-go-live):**

**6. Company Configuration**

  ------------------------------- ---------------------- --------------------
  Config Item                     Value                  Notes

  Company legal name                                     

  Company registration no.                               

  Tax ID / GST number                                    

  Default currency                                       

  Operating timezone                                     

  Business hours (for WhatsApp)                          

  Tax rate(s)                                            

  Default payment terms                                  

  Invoice numbering series                               

  Logo (for document headers)     ☐ Provided ☐ Pending   
  ------------------------------- ---------------------- --------------------

**7. Custom Workflow Requirements**

**These are requirements that deviate from MAIA base behaviour. Each one must be explicitly scoped, estimated, and agreed before go-live.**

  --------------- ----------------- ----------------------- ----------------------------------------------
  Requirement     Business Reason   Complexity              Decision

                                    ☐ Low ☐ Medium ☐ High   ☐ Include at go-live ☐ Post-go-live ☐ Reject

                                    ☐ Low ☐ Medium ☐ High   ☐ Include at go-live ☐ Post-go-live ☐ Reject
  --------------- ----------------- ----------------------- ----------------------------------------------

**Rule:** If a custom requirement is not in this table with a confirmed decision, it is out of scope for this onboarding. No verbal agreements.

**8. Go-Live Criteria**

Client is considered live when all of the following are confirmed:

All in-scope modules are deployed and accessible

All user accounts created with correct permissions

Client data imported (customer list, items, pricelist minimum)

All in-scope integrations connected and tested

WABA connected and test message sent/received (or explicitly deferred)

Client has completed UAT walkthrough and signed off

At least one real transaction processed end-to-end during UAT

Client team knows how to perform their core daily workflows

**Go-live sign-off owner (client side):** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Go-live sign-off owner (Mindhive side):** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**9. Post-Go-Live Scope**

Items deferred from this onboarding, to be addressed in follow-up:

  -------------------- -------------------- --------------------
  Item                 Reason Deferred      Target Date

                                            

                                            
  -------------------- -------------------- --------------------

**Sign-off**

  ------------------------- --------------- --------------- ---------------
  Role                      Name            Date            Signature

  Product Lead (Mindhive)                                   

  Tech Lead (Mindhive)                                      

  Client Representative                                     
  ------------------------- --------------- --------------- ---------------

*Tech brief generated with AI assistance from client narrative + questionnaire. Reviewed and confirmed by Mindhive product and tech leads.*

**\[Meeting 2\] --- IT / Integration Scoping**

**Agenda, Objectives & Facilitator Guide**

**Meeting Type:** Remote (preferred) or face-to-face

**Duration:** 30--60 minutes

**Attendees:**

**Mindhive:** Tech lead (primary), Product lead (optional)

**Client:** IT person or system admin (if in-house)

**3rd Party:** Vendor representative for accounting/ERP system (if externally managed)

**When this meeting is needed:** Only when Meeting 1 identified integration with a 3rd-party system (AutoCount, SQL Accounting, SAP, Epicor, etc.) where access, API, or database connectivity requires coordination with someone other than the client\'s business team.

**When this meeting is NOT needed:**

Client uses standalone tools with no integration requirement

Integration is WhatsApp-only (handled by Mindhive directly)

Client\'s IT is in-house and already confirmed access details in the questionnaire

**Pre-Meeting Checklist (Tech Lead)**

Meeting 1 notes reviewed --- integration needs identified

Client\'s current system(s) confirmed from questionnaire

Known API/connectivity options for the target system researched

Specific questions prepared based on system type (see System-Specific Sections below)

Client has been asked to have the vendor present (if 3rd-party managed)

**Meeting Objectives**

By the end of this meeting, the tech lead must be able to answer:

**Can we connect?** What access method is available (API, direct database, file export, middleware)?

**What data flows where?** Which entities need to sync, in which direction, and at what frequency?

**Who owns the connection?** Who provides credentials, who maintains it, who troubleshoots?

**What does it cost?** Are there additional licensing, API, or setup fees from the vendor?

**What is the timeline?** How long will the vendor need to provision access?

**Agenda**

**Block 1 --- Introductions & Context (5 min)**

**Facilitator notes:**

Introduce yourself and your role

State the purpose: \"We\'re implementing MAIA for \[client\] and need to connect it with \[system\]. This call is to understand what\'s possible, what\'s needed from your side, and what the timeline looks like.\"

Confirm who has authority to provision access / make configuration changes

**Block 2 --- Current System Architecture (10 min)**

**Objective:** Understand the technical landscape before diving into integration specifics.

**Questions:**

\"Where is \[system\] hosted? (Cloud, on-premise, hybrid)\"

\"What version are you running?\"

\"Is this a shared/managed instance or dedicated to \[client\]?\"

\"Are there any firewalls, VPN requirements, or IP whitelisting needed for external access?\"

\"Does the system have an API? If yes, what type? (REST, SOAP, GraphQL, proprietary)\"

\"If no API, is direct database access possible? (Read-only is fine for many use cases.)\"

\"Is there a staging/test environment we can use during setup?\"

**Block 3 --- Data Scope & Direction (15 min)**

**Objective:** Define exactly which data entities need to flow between MAIA and the target system, in which direction.

**Walk through this table with the attendees:**

  ---------------------- --------------- --------------- ------------ ------------
  Entity                  MAIA → System   System → MAIA  Frequency    Notes

  Customers                                                           

  Items / Products                                                    

  Pricelists / Pricing                                                

  Sales Orders                                                        

  Invoices                                                            

  Payment Entries                                                     

  Credit Notes                                                        

  Stock / Inventory                                                   

  Purchase Orders                                                     

  Delivery Notes                                                      
  ---------------------- --------------- --------------- ------------ ------------

**For each relevant entity, ask:**

\"What fields are available? Is there a data dictionary or API documentation?\"

\"Are there field mappings we should be aware of? (e.g., your customer code format vs MAIA\'s)\"

\"How is this data currently created --- manually in the system, or imported from somewhere else?\"

\"What happens if MAIA pushes a record that conflicts with an existing record? (Duplicate handling)\"

**Block 4 --- Authentication & Access (10 min)**

**Objective:** Understand what credentials and permissions are needed.

**Questions:**

\"What authentication does the API / database use? (API key, OAuth, basic auth, certificate)\"

\"Can you create a dedicated service account for MAIA with appropriate permissions?\"

\"Are there rate limits on API calls?\"

\"What permission level will MAIA\'s service account have? (Read-only, read-write, admin)\"

\"Who will generate and manage the credentials? What\'s the rotation policy?\"

\"Is there a sandbox or test environment we can use for development and testing?\"

**Block 5 --- Cost & Timeline (10 min)**

**Objective:** Surface any additional costs or lead times.

**Questions:**

\"Are there additional fees for API access, additional users, or integration modules?\"

\"If there are fees, who bears them --- \[client\] or is this included in their current plan?\"

\"How long does it typically take to provision API access / create a service account?\"

\"Are there any approval processes on your side that might add lead time?\"

\"Do you provide any integration support or documentation?\"

**Block 6 --- Wrap-Up & Action Items (5 min)**

**Facilitator actions:**

Summarize what was agreed

Confirm action items with owners and timelines:

  --------------------------------------------- -------------------- --------------------
  Action                                        Owner                Timeline

  Provide API documentation / data dictionary   Vendor               

  Create service account / API credentials      Vendor               

  Provide test environment access               Vendor               

  Confirm additional costs (if any)             Vendor / Client      

  Build integration connector                   Mindhive Tech        

  Test integration in staging                   Mindhive Tech        
  --------------------------------------------- -------------------- --------------------

Exchange direct contact details for technical follow-up

Thank everyone

**System-Specific Question Banks**

**AutoCount Cloud**

Which AutoCount Cloud plan is the client on? (Does it include API access?)

Is the AutoCount Web API enabled? What base URL?

Can we get the API documentation? (AutoCount has different API versions.)

Which modules are active? (AR, AP, Stock, GL)

Does the client use AutoCount\'s e-invoicing module?

Are there custom fields or UDFs that affect invoice/payment data?

What is the document numbering format? (We need to map to MAIA references.)

**SQL Accounting**

Is this SQL Accounting by eStream or another vendor?

Is direct ODBC/SQL connection available to the database?

Are stored procedures or views available for common queries?

What database engine? (Usually SQL Server or Firebird.)

Is the database on-premise? Can we reach it remotely?

Are there any data integrity constraints we should be aware of when writing back?

**Epicor**

Which Epicor version? (Epicor 10, Kinetic, Prophet 21)

Is the REST API enabled? What\'s the base URL?

Are Business Activity Queries (BAQs) set up for the data we need?

Can we get access to the Epicor API documentation for this version?

What\'s the company/plant/site structure?

Are there custom BPMs or functions that affect order/pricing behavior?

**SAP**

Which SAP product? (SAP Business One, SAP S/4HANA, SAP ECC)

For SAP B1: Is the Service Layer or DI API available?

For SAP S/4: Are OData APIs exposed?

Is there a middleware layer (e.g., SAP Integration Suite, PI/PO)?

What authorization objects / roles are needed for API access?

Are IDocs or BAPIs in use for integration?

**Xero**

Is the Xero API app already created or do we need to register one?

OAuth 2.0 --- who will handle the initial authorization flow?

What\'s the organisation ID?

Are there any API rate limit concerns given current usage?

**Post-Meeting Actions (Tech Lead)**

**Within 24 hours:**

Document integration architecture in the tech brief (system, access method, direction, frequency, authentication)

Confirm any additional costs and communicate to sales/client

Begin tracking vendor action items

Estimate integration development time and add to deployment plan

**Within 1 week:**

Receive API credentials / test access from vendor

Begin integration development in test environment

Report any blockers to product lead

*MAIA by Mindhive --- Meeting 2 Facilitator Guide v1.0*

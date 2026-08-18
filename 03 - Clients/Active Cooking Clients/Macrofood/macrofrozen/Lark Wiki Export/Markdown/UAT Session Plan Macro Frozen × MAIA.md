**UAT Session Plan Macro Frozen × MAIA**

**Core Order Workflow UAT and Go-Live Readiness Session Plan**

**Document date:** 28 July 2026

**Session time:** 2:00 p.m.--4:15 p.m.

**Hard stop:** 4:15 p.m.

**Venue:** Macro Frozen office

**Internal preparation cut-off:** 1:00 p.m.

**Client-facing team:** AutorunBiz PLT × MAIA

**Facilitator:** Ivan

**Guided walkthrough:** Gareth

**Technical support:** Assigned Product, QA, and Tech owners

**1. Session Purpose**

This is a **hands-on User Acceptance Testing and go-live readiness session**, not a broad product demonstration.

The session is designed to determine whether Macro Frozen's users can operate the core MAIA workflow themselves:

  --------------------------------------------------------------
  Plain Text\
  Customer order\
  → Draft Sales Order\
  → Price and credit controls\
  → Pick List\
  → Actual picked quantities and box weights\
  → Draft Delivery Note\
  → Grace review and submission\
  → Invoice creation\
  → SQL synchronisation

  --------------------------------------------------------------

The session must establish four things:

The agreed workflow works end to end.

Each user can perform the responsibilities assigned to their role.

System permissions and approval controls prevent unauthorised actions.

The core workflow is safe to move into live operation after the final production-data synchronisation.

The meeting is successful only if the evidence supports a clear **Green, Amber, or Red go-live decision** by 4:15 p.m.

**2. Introduction and UAT Briefing**

**2.1 What has changed since the previous UAT**

The following changes must be presented at the start of the session so all users understand what is different from the last UAT.

**1. Simplified lead management**

The **Prospect** function has been hidden.

Macro Frozen will use **Leads only** for simplicity.

Leads can now:

store customer notes;

capture relevant relationship and sales information;

be converted into a Customer;

carry the existing lead information and notes into the new Customer record.

Expected operating model:

  --------------------------------------------------------------
  Plain Text\
  New opportunity\
  → Create Lead\
  → Add customer notes and details\
  → Follow up\
  → Convert Lead to Customer\
  → Existing information carries over

  --------------------------------------------------------------

This removes the need for users to decide between Lead and Prospect.

**2. Clarified order entry for box requests on kilogram-based items**

The team has now clarified how to enter orders where:

the item's base unit of measure is kilograms; but

the customer orders by boxes or cartons.

The agreed method is:

  --------------------------------------------------------------
  Plain Text\
  Customer asks for boxes/cartons\
  → Record the box/carton count in Additional Notes\
  → Use the agreed 1 kg placeholder in the SO quantity\
  → Confirm the real kilograms during picking\
  → Use actual picked weight in the DN and Invoice

  --------------------------------------------------------------

Example:

  --------------------------------------------------------------
  Plain Text\
  Customer order: 2 cartons\
  SO Additional Notes: \"2 cartons\"\
  SO quantity: 1 kg placeholder\
  \
  Actual picked:\
  - Carton 1: 10.44 kg\
  - Carton 2: 11.82 kg\
  \
  Final DN / Invoice quantity: 22.26 kg

  --------------------------------------------------------------

**3. Improved Pick List PDF**

The Pick List PDF has been improved to:

show customer details more clearly;

improve the document layout;

provide more practical spacing for handwriting;

make it easier for warehouse staff to record actual picked quantities;

support uploading the completed Pick List back into MAIA for picked-quantity updates.

The UAT must confirm that the printed PDF is usable in the warehouse, not merely visually correct on screen.

**4. Shipping-address columns added to customer listing**

Shipping-address columns have been added to the Customer Listing.

This is intended to make it easier to:

identify delivery locations;

group orders when preparing Pick Lists;

organise customer orders by route, area, or delivery requirement.

The UAT should confirm that the address information is visible and useful when grouping orders.

**5. SQL data synchronised up to 3 July 2026**

The UAT environment contains a full SQL synchronisation up to **3 July 2026**, subject to the exceptions below.

**Records that could not be synchronised**

  ------------------------------------------------- --------------- ------------------------------ -------------------------------------------------
  Exception                                                   Count                Amount / impact Current understanding

  Payment Entries with missing Invoice references                 8                      RM593,457 Suspected that the linked Invoices were deleted

  Zero-amount Payment Entries                                     6                            RM0 No accounting-ledger impact

  Delivery Note with zero quantity                                1   Non-financial quantity issue Invalid or incomplete Delivery Note record
  ------------------------------------------------- --------------- ------------------------------ -------------------------------------------------

These exceptions must be explained clearly:

they are known source-data or referential-integrity issues;

they must not be treated as new MAIA defects during UAT;

they must be tracked separately for data remediation;

the current UAT focuses on workflow, permissions, controls, and valid records.

**6. SCN and CCN adapter hardening remains in progress**

SCN and CCN currently work, but the adapter is still being hardened.

During UAT:

do not position these document flows as fully production-hardened;

log defects separately from the core order workflow;

do not allow SCN/CCN issues to derail the core SO → Pick List → DN → Invoice test unless they expose a shared adapter failure.

**7. Purchasing page hidden from Item Details**

The Purchasing page in Item Details has been hidden.

This prevents users from entering or relying on a workflow that is not part of the current MAIA deployment.

**8. Bulk price-setting interface improved**

The interface for bulk price setting has been improved.

This is an update for user awareness, but it is not the primary acceptance target of today's core order-workflow UAT unless there is spare time after the go-live decision.

**2.2 What is not completed yet**

The following items are not ready and must be stated explicitly at the start.

  ------------------------------------------------------------------------- ---------------------------------------------- --------------------------------------------------------
  Item                                                                      Status / estimated timing                      UAT treatment

  Sales Dashboard by salesperson                                            Estimated first week of September              Not part of today's acceptance

  Product Catalogue Generator                                               Estimated mid-September                        Not part of today's acceptance

  AR bank-statement reconciliation and OR creation in SQL                   Estimated mid-September                        Not part of today's acceptance

  Packing List Excel extraction                                             Not completed                                  Not part of today's adopted workflow

  Automatic splitting of document item lines across SO, DO, and Pick List   Not completed                                  Users must follow the current manual breakdown process

  Goods Receive Note creation for stock entry                               Not covered by current MAIA purchasing scope   Users continue using SQL
  ------------------------------------------------------------------------- ---------------------------------------------- --------------------------------------------------------

**Clarification on AR reconciliation**

The future AR function is expected to allow Macro Frozen to:

  --------------------------------------------------------------
  Plain Text\
  Upload bank statement in MAIA\
  → Reconcile against payment receipt\
  → Confirm the correct match\
  → Create Official Receipt in SQL

  --------------------------------------------------------------

This is not ready for today's UAT.

**Clarification on stock entry**

Goods Receive Note creation belongs to the Purchasing module.

MAIA currently does not cover this workflow for Macro Frozen.

Users must continue to use SQL for:

GRN creation;

receiving stock;

purchasing-related stock entry.

This is not a UAT failure.

**2.3 UAT data disclaimer**

Client-facing wording:

+:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| "The current UAT environment contains SQL data synchronised up to 3 July 2026. Some records could not be synchronised because of source-data issues, including missing Invoice references, zero-value payment records, and one zero-quantity Delivery Note.                                    |
|                                                                                                                                                                                                                                                                                                |
| Today we are validating the workflow, permissions, controls, documents, and valid SQL synchronisation. If a newer customer, item, price, or document is missing, we will first check whether it falls after the 3 July cut-off or within the known exceptions before treating it as a defect." |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Go-live transition**

After a Green or approved Amber decision:

Run the final SQL catch-up synchronisation to the current date and time.

Reconcile key record counts and control totals.

Confirm the known excluded records remain documented.

Enable ongoing live two-way synchronisation.

Run a controlled post-sync smoke test.

Begin hypercare monitoring.

Do not enable live two-way synchronisation after a Red decision.

**3. Definition of Done**

By the end of the session:

All named users have active accounts and can log in.

Sales users can see **only their own customers and Leads**.

Queenie cannot see Han's customers or Leads.

Han cannot see Queenie's customers or Leads.

CJ, David, and authorised manager/admin roles can see all customers, Leads, and Sales Orders required for oversight.

Queenie and Han can receive or forward customer orders, review MAIA's interpretation, and submit their own Sales Orders.

CJ can operate as a salesperson and supervise the sales team.

CJ can approve a price below the default or customer price but still above the minimum price.

David can approve prices below the minimum price.

David can approve credit overrides at the Sales Order and Delivery Note stages.

Lai can create and complete Pick Lists, record actual picked quantities and individual box weights, and create a draft Delivery Note.

Lai cannot submit a Delivery Note.

Grace can review each Delivery Note line, submit the Delivery Note, and explicitly generate the Invoice from the Delivery Note.

The Pick List PDF is practical for handwriting and re-upload.

The shipping-address columns support order grouping.

The adopted workflow removes the separate Excel Packing List from the normal process.

The system correctly handles:

orders placed in kilograms;

orders placed in boxes/cartons for kilogram-based items;

actual picked weight differing from ordered weight;

multiple boxes with different weights;

formal customer POs;

price approval tiers;

credit checks at both control points;

SQL synchronisation;

duplicate-document prevention.

Known SQL data exceptions are correctly separated from product defects.

All blockers, workarounds, owners, and deadlines are documented.

The team makes a go-live decision before 4:15 p.m.

**4. UAT Scope**

**4.1 Included in today's acceptance**

User login and account access.

Role and permission configuration.

Sales-user ownership restrictions.

Sales-manager and management oversight visibility.

Lead creation.

Lead notes.

Lead-to-Customer conversion and information carry-over.

WhatsApp order forwarding into MAIA.

Draft Sales Order creation.

Customer and SKU matching.

User correction of MAIA's interpretation.

Kilogram-order handling.

Box/carton request handling for kilogram-based items.

Price checks and approval routing.

Sales Order credit check.

Sales Order submission.

Pick List creation and grouping.

Use of shipping-address columns.

Pick List PDF layout and handwriting usability.

Pick List completion and re-upload.

Actual picked quantity capture.

Individual box-weight capture.

Replacement SKU visibility and escalation.

Draft Delivery Note creation from a completed Pick List.

Breakdown of the picked total into individual Delivery Note lines.

Delivery Note credit re-check.

Grace's review and Delivery Note submission.

Explicit Invoice creation from the submitted Delivery Note.

PDF/document generation.

SQL synchronisation and record integrity.

Duplicate-document controls.

**4.2 Not acceptance-gated today**

Sales Dashboard by salesperson.

Product Catalogue Generator.

AR bank-statement reconciliation.

Official Receipt creation from AR reconciliation.

Packing List Excel extraction.

Automatic document-line splitting.

Goods Receive Note creation.

Purchasing module workflows.

Full product catalogue workflow.

Delivery-route management.

Driver application.

Warehouse barcode or QR scanning.

AP and supplier-payment reconciliation.

Cosmetic improvements that do not affect workflow correctness.

**4.3 Proof of Delivery boundary**

The available process records contain a conflict over POD photo upload.

Therefore:

  -------------------------------------------------------------------------------------------------------------
  POD upload is excluded from today's acceptance unless David resolves the scope conflict before the session.

  -------------------------------------------------------------------------------------------------------------

**5. Agreed Target Workflow**

**5.1 Before MAIA**

  --------------------------------------------------------------------
  Plain Text\
  Customer sends order\
  ↓\
  Salesperson forwards order into internal WhatsApp group\
  ↓\
  Orders from different customers and salespeople mix in one thread\
  ↓\
  David reads, interprets, consolidates, and groups orders\
  ↓\
  David prepares the Pick List\
  ↓\
  Warehouse picks and writes actual quantities manually\
  ↓\
  Lai breaks down picked quantity in Excel\
  ↓\
  The same information is re-entered into another template\
  ↓\
  Lai sends the completed Packing List to Grace\
  ↓\
  Grace manually keys every line into SQL\
  ↓\
  Grace creates Delivery Note and Invoice\
  ↓\
  Driver delivers and returns signed paperwork

  --------------------------------------------------------------------

**5.2 After MAIA --- adopted Approach 1**

  --------------------------------------------------------------
  Plain Text\
  Customer sends order\
  ↓\
  Queenie / Han / CJ forwards order to MAIA\
  ↓\
  MAIA prepares Draft Sales Order\
  ↓\
  Salesperson reviews and corrects\
  ↓\
  Price approval, if required\
  ↓\
  Credit check at SO\
  ↓\
  Sales Order submitted\
  ↓\
  Lai groups Sales Orders into Pick List\
  ↓\
  Warehouse picks and records actual quantity and box weights\
  ↓\
  Lai updates and completes Pick List\
  ↓\
  Lai converts Pick List into Draft DN\
  ↓\
  Picked total propagates into Draft DN\
  ↓\
  Lai breaks total into actual box-weight lines\
  ↓\
  Credit check at DN\
  ↓\
  Grace reviews every DN line\
  ↓\
  Grace submits DN\
  ↓\
  Grace explicitly creates Invoice from DN\
  ↓\
  Documents synchronise with SQL

  --------------------------------------------------------------

**5.3 No separate Excel Packing List**

Approach 1 is the target workflow.

Example:

  --------------------------------------------------------------
  Plain Text\
  Picked total: 99.20 kg\
  \
  DN lines:\
  - 19.80 kg\
  - 20.10 kg\
  - 19.65 kg\
  - 19.90 kg\
  - 19.75 kg\
  \
  Total: 99.20 kg

  --------------------------------------------------------------

Packing List Excel extraction is not ready, so the session must not depend on it.

**5.4 Current manual limitation**

Automatic splitting of document item lines across SO, DO, and Pick List is not completed.

Therefore:

the Pick List may carry a combined total;

Lai manually breaks the picked total into individual DN lines;

Grace checks the line breakdown before submission.

This is expected current behaviour, not a defect.

**6. Order-Unit Rules**

**6.1 Customer orders in kilograms**

  --------------------------------------------------------------
  Plain Text\
  Customer order: 20.00 kg\
  SO quantity: 20.00 kg\
  Actual picked quantity: 19.71 kg\
  Final DN / Invoice quantity: 19.71 kg

  --------------------------------------------------------------

**6.2 Customer orders in boxes or cartons**

  --------------------------------------------------------------
  Plain Text\
  Customer order: 2 cartons\
  SO Additional Notes: \"2 cartons\"\
  SO quantity: 1 kg placeholder\
  \
  Actual picked:\
  - 10.44 kg\
  - 11.82 kg\
  \
  Actual total: 22.26 kg\
  Final DN / Invoice quantity: 22.26 kg

  --------------------------------------------------------------

The actual weight must never be guessed at order-entry stage.

**7. Approval and Control Rules**

**7.1 Three-tier price approval**

  ------------------------------------------------ -------------------- --------------------
  Price condition                                  Result               Approver

  At or above approved/default customer price      Auto-proceed         None

  Below default/customer price but above minimum   Approval required    CJ

  Below minimum price                              Approval required    David
  ------------------------------------------------ -------------------- --------------------

Mandatory controls:

Sales users cannot approve their own pricing exceptions.

CJ cannot approve below minimum.

David can approve below minimum.

Product buying cost remains visible only to David.

**7.2 Credit checks**

Credit checks run at:

Sales Order submission.

Delivery Note stage.

The system checks:

outstanding balance;

credit limit;

overdue position;

previous Invoice clearance where required.

Only David can approve a credit override.

**8. Users, Roles, and Access**

**8.1 User setup requirement**

Every named user must have:

an individual account;

a verified login;

the correct role;

the correct visibility;

the correct create/edit/submit/approve rights;

no shared credentials.

Accounts to confirm:

David;

CJ;

Queenie;

Han;

Lai;

Grace;

Apple, if active in this deployment;

any additional warehouse or operations users participating in UAT.

**8.2 Sales-record visibility rule**

**Sales Users**

Queenie and Han must see only:

their own Leads;

their own customers;

their own Sales Orders;

their own customer notes;

their own payment-proof records where applicable.

They must not see each other's sales records.

**Sales Manager and authorised oversight roles**

CJ must see:

Queenie's and Han's Leads;

Queenie's and Han's customers;

all Sales Orders;

pending sales approvals;

sales activity required for supervision.

David and authorised admin/finance managers must see the full customer and sales data needed for their responsibilities.

**Least-privilege restrictions remain**

"See all" does not mean every role sees all sensitive fields.

Product buying cost: David only.

Warehouse users: no unrelated accounting data.

Sales users: no other salesperson's records.

Sales users: no credit-limit editing.

Sales users: no price-exception approval.

Lai: no DN submission.

Grace: no buying-cost visibility.

**8.3 Role matrix**

  -------------------- -------------------------------------------- --------------------------------------------------------------------------------
  Person               Role                                         Core responsibilities

  David                Owner, Credit Controller, Price Controller   Below-minimum price approval, SO/DN credit override, final go-live decision

  CJ                   Sales Manager and Sales User                 Supervise sales team, approve middle-tier price exceptions, process own orders

  Queenie              Sales User                                   Own Leads/customers, forward orders, review and submit own SO

  Han                  Sales User                                   Own Leads/customers, forward orders, review and submit own SO

  Lai                  Warehouse Manager                            Pick List, picked quantity, box weights, Draft DN

  Grace                Accounts / Finance User                      Formal PO intake, DN review/submission, Invoice generation

  Apple                Finance Manager, if active                   Credit limits, credit terms, finance settings

  Warehouse workers    Operations                                   Pick, pack, record actual quantity

  Driver               Delivery                                     Deliver and obtain signed documents
  -------------------- -------------------------------------------- --------------------------------------------------------------------------------

**9. Permission Matrix**

  ------------------------------------- --------- ------- ------- ------------------ ------------------ ---------------- -------
  Capability                             Queenie    Han     CJ           Lai               Grace             Apple        David

  View own Leads                           Yes      Yes     Yes           No                Yes               Yes          Yes

  View all Leads                           No       No      Yes           No          Yes, if required        Yes          Yes

  View own customers                       Yes      Yes     Yes        Limited              Yes               Yes          Yes

  View all customers                       No       No      Yes    Operational only         Yes               Yes          Yes

  Create Lead                              Yes      Yes     Yes           No          Yes, if required         No          Yes

  Convert Lead to Customer                 Yes      Yes     Yes           No          Yes, if required         No          Yes

  Create/review own SO                     Yes      Yes     Yes           No              PO path              No          Yes

  Submit own SO                            Yes      Yes     Yes           No          Where authorised         No          Yes

  Approve middle-tier price exception      No       No      Yes           No                 No                No          Yes

  Approve below-minimum price              No       No      No            No                 No                No          Yes

  View product buying cost                 No       No      No            No                 No                No          Yes

  Create/consolidate Pick List             No       No     View          Yes                View               No          Yes

  Update picked quantity                   No       No      No           Yes               Review              No          Yes

  Create Draft DN                          No       No      No           Yes                Yes                No          Yes

  Submit DN                                No       No      No            No                Yes                No          Yes

  Generate Invoice from DN                 No       No      No            No                Yes                No          Yes

  Manage credit limits/terms               No       No      No            No              Limited        Yes, if active    Yes

  Approve credit override                  No       No      No            No                 No                No          Yes
  ------------------------------------- --------- ------- ------- ------------------ ------------------ ---------------- -------

**Mandatory negative tests**

The internal team must attempt and verify:

Queenie cannot see Han's Leads.

Queenie cannot see Han's customers.

Han cannot see Queenie's Leads.

Han cannot see Queenie's customers.

Queenie and Han cannot approve their own pricing exception.

CJ cannot approve below minimum.

Lai cannot submit a DN.

Grace cannot see buying cost.

CJ cannot see buying cost.

Only David can approve credit override.

Only David can see buying cost.

**10. Mandatory Internal Preparation**

**10.1 Preparation deadline**

All preparation must be complete by **1:00 p.m.**

At 1:00 p.m.:

configuration is frozen;

no non-blocking deployment is allowed;

unresolved blockers are escalated;

the team confirms whether the client session can proceed safely.

**10.2 Preparation timeline**

  ------------------------ -------------------------------------------------- --------------------
  Time                     Activity                                           Owner

  By 11:30 a.m.            Instance live, scaled, integrated, monitored       Tech

  11:30 a.m.--12:15 p.m.   Full core-flow regression and permission testing   Product + QA

  12:15 p.m.--12:30 p.m.   Verify accounts, test data, known SQL exceptions   Gareth + QA

  12:30 p.m.--12:45 p.m.   Rehearse one-order walkthrough                     Gareth

  12:45 p.m.--1:00 p.m.    Internal readiness review                          Ivan

  1:00 p.m.                Hard cut-off and configuration freeze              All
  ------------------------ -------------------------------------------------- --------------------

**11. Gareth's Mandatory Preparation**

**11.1 Per-user responsibility cards**

**Queenie / Han**

  ---------------------------------------------------------------------------------------------
  Plain Text\
  1. Create and manage own Leads.\
  2. Add customer notes.\
  3. Convert Lead to Customer when ready.\
  4. Receive customer order.\
  5. Forward order to MAIA.\
  6. Review Draft SO.\
  7. Confirm customer, SKU, quantity, unit, price, and notes.\
  8. For box/carton request, add box count to Additional Notes and use the 1 kg placeholder.\
  9. Correct any MAIA interpretation error.\
  10. Submit SO.\
  11. Monitor price or credit approval.

  ---------------------------------------------------------------------------------------------

**CJ**

  -------------------------------------------------------------------
  Plain Text\
  1. Perform own Sales User workflow.\
  2. See all team Leads, customers, and Sales Orders.\
  3. Monitor Queenie and Han.\
  4. Approve price below default/customer price but above minimum.\
  5. Reject invalid exceptions.\
  6. Escalate below-minimum price to David.

  -------------------------------------------------------------------

**Lai**

  --------------------------------------------------------------
  Plain Text\
  1. Review orders requiring picking.\
  2. Use shipping-address information for grouping.\
  3. Create or consolidate Pick List.\
  4. Print the improved Pick List PDF.\
  5. Confirm it is usable for handwriting.\
  6. Record actual picked quantity and box weights.\
  7. Upload or update the completed Pick List.\
  8. Mark Pick List Completed.\
  9. Create Draft DN.\
  10. Break total into individual box-weight lines.\
  11. Save Draft DN.\
  12. Do not submit.

  --------------------------------------------------------------

**Grace**

  --------------------------------------------------------------
  Plain Text\
  1. Handle formal customer PO intake.\
  2. Review the PO-to-SO mapping.\
  3. Receive Draft DN notification.\
  4. Review customer, SKU, every box-weight line, and total.\
  5. Confirm DN matches the physical pick.\
  6. Submit DN.\
  7. Explicitly create Invoice from DN.\
  8. Review and submit the Invoice.\
  9. Continue using SQL for GRN and stock-entry workflows.

  --------------------------------------------------------------

**David**

  --------------------------------------------------------------
  Plain Text\
  1. Approve below-minimum prices.\
  2. Approve SO-stage credit overrides.\
  3. Approve DN-stage credit overrides.\
  4. Review high-risk exceptions.\
  5. Confirm final go-live decision.

  --------------------------------------------------------------

**11.2 Before-and-after workflow visual**

Prepare:

detailed workflow infographic;

simplified role-based view;

updated Pick List PDF example;

shipping-address grouping example;

Lead-to-Customer conversion example.

**11.3 Fifteen-minute walkthrough**

Gareth must complete one representative order within 15 minutes.

Show:

Lead note and conversion, briefly;

order forwarded to MAIA;

Draft SO;

kg versus box/carton handling;

price and credit checks;

SO submission;

Pick List and improved PDF;

shipping-address grouping;

actual picked quantity;

Draft DN;

box-weight breakdown;

Grace submission;

explicit Invoice generation;

SQL result.

Do not turn the walkthrough into a feature tour.

**12. Product and QA Readiness Checklist**

**12.1 Accounts and permissions**

David account active.

CJ account active.

Queenie account active.

Han account active.

Lai account active.

Grace account active.

Apple account active, if required.

All passwords tested.

All roles assigned.

Queenie sees only own Leads/customers.

Han sees only own Leads/customers.

CJ sees all sales-team records.

David sees all required records.

Authorised admin/finance roles see all required records.

Buying cost remains David-only.

Lai cannot submit DN.

Sales cannot self-approve price exceptions.

**12.2 Lead workflow**

Prospect page hidden.

Lead creation works.

Lead notes work.

Lead-to-Customer conversion works.

Lead information carries into Customer.

Customer notes remain available after conversion.

Ownership is preserved after conversion.

Sales-user visibility remains restricted.

**12.3 Core order workflow**

WhatsApp order creates correct Draft SO.

Customer mapping works.

SKU mapping works.

Additional Notes retained.

Kilogram-order logic works.

Box/carton placeholder logic works.

Sales correction works.

Price approval tiers work.

SO credit check works.

SO submission works.

Pick List grouping works.

Shipping-address columns visible.

Improved Pick List PDF renders correctly.

PDF has usable handwriting space.

Completed Pick List can be uploaded/updated.

Picked Qty update works.

Pick List completion works.

Draft DN creation works.

Manual line splitting works.

Line totals reconcile.

DN credit re-check works.

Grace DN submission works.

Invoice is not created automatically.

Grace can explicitly create Invoice.

PDF generation works.

SQL receives correct records.

Duplicate prevention works.

**12.4 Known incomplete items are hidden or controlled**

Sales Dashboard is not presented as ready.

Product Catalogue Generator is not presented as ready.

AR reconciliation is not presented as ready.

Packing List Excel extraction is not presented as ready.

Automatic document-line splitting is not presented as ready.

GRN creation is not presented as ready.

Purchasing page is hidden.

SCN/CCN adapter status is explained accurately.

**13. Technical Readiness Checklist**

**13.1 Infrastructure**

Correct MAIA instance is live.

Instance scaled for the UAT window.

Application services healthy.

Database healthy.

CPU headroom acceptable.

Memory headroom acceptable.

Disk capacity sufficient.

SSL valid.

Domain and login reachable.

Background workers healthy.

Queues healthy.

Time zone correct.

Backup completed.

Rollback procedure ready.

**13.2 Integrations**

SQL endpoint reachable.

SQL credentials valid.

Read sync works.

Write-back works.

Known excluded SQL records documented.

WhatsApp connection healthy.

OpenAI/API credentials valid.

Document extraction healthy.

PDF generation healthy.

Approval notifications healthy.

Retry behaviour known.

Duplicate/idempotency controls active.

SCN/CCN adapter monitoring active.

**13.3 Monitoring**

One engineer is assigned only to monitoring:

application logs;

database health;

CPU and memory;

queue status;

SQL sync logs;

WhatsApp webhook status;

API latency;

PDF errors;

adapter errors.

**13.4 Recovery**

Controlled restart procedure ready.

Database rollback steps ready.

Manual SQL reconciliation process ready.

Backup internet hotspot ready.

Spare laptop ready.

Chargers and adapters ready.

SQL vendor contact available.

Product decision-maker available.

Tech decision-maker available.

**14. UAT Materials Checklist**

Final session plan.

Attendance sheet.

Role cards.

Before-MAIA infographic.

After-MAIA infographic.

Lead-to-Customer example.

Permission matrix.

Data cut-off notice.

Known SQL exception list.

UAT scenario sheets.

Defect log.

Decision log.

Action register.

Parking-lot sheet.

Non-PO kilogram order.

Formal PO carton order.

Live order.

Realistic box weights.

Improved Pick List PDF.

Shipping-address grouping example.

Current SQL references.

Projector/display.

HDMI/USB-C adapters.

Extension cable.

Mobile hotspot.

Spare laptop.

**15. Internal Readiness Review --- 12:45 p.m.--1:00 p.m.**

  ---------------------- --------------------------------------------------------------------------
  Owner                  Required answer

  Gareth                 "I can complete the walkthrough in 15 minutes."

  Product                "The intended workflow and current limitations are confirmed."

  QA                     "Critical workflows and permissions pass, or exceptions are documented."

  Tech                   "The instance is healthy, scaled, monitored, and recoverable."

  Recorder               "All evidence templates are ready."

  Ivan                   "The scope, timing, and decision rules are clear."
  ---------------------- --------------------------------------------------------------------------

Any "No" requires:

blocker;

impact;

mitigation;

owner;

decision by 1:00 p.m.

**16. Client Session Agenda**

  ------------ ------------ --------------------------------------------------------------------- -------------------------- -----------------------------------
  Time             Duration Section                                                               Owner                      Output

  2:00--2:15         15 min Introduction, changes since last UAT, incomplete items, data notice   Ivan                       Shared understanding

  2:15--2:30         15 min One-order guided walkthrough                                          Gareth                     Shared mental model

  2:30--2:40         10 min Confirm operating model and roles                                     Ivan + David               Roles and Approach 1 confirmed

  2:40--3:05         25 min Scenario 1: Lead → Customer → non-PO kg order                         Queenie + team             Lead and standard order validated

  3:05--3:30         25 min Scenario 2: formal PO and carton order                                Grace + Han + CJ           PO/carton/approval flow validated

  3:30--4:05         35 min Scenario 3: live order and Pick List PDF                              Entire Macro Frozen team   Operational readiness proven

  4:05--4:15         10 min Results and go-live decision                                          Ivan + David               Green / Amber / Red
  ------------ ------------ --------------------------------------------------------------------- -------------------------- -----------------------------------

**Hands-on time:** 85 minutes

**Hard stop:** 4:15 p.m.

**17. Detailed Facilitation**

**17.1 2:00--2:15 --- Introduction**

Ivan covers:

purpose;

definition of success;

changes since the last UAT;

known incomplete items;

known SQL data exceptions;

3 July cut-off;

role and visibility rules;

parking-lot discipline;

4:15 hard stop.

Suggested wording:

+:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| "Today we are validating the core workflow and the actual user responsibilities. We will also confirm the changes made since the previous UAT.                                                                                                                  |
|                                                                                                                                                                                                                                                                 |
| Sales Users must see only their own Leads and customers. CJ and authorised managers must have the required full team visibility. We will test both the allowed and prohibited actions.                                                                          |
|                                                                                                                                                                                                                                                                 |
| Several functions are not ready yet, including the Sales Dashboard, Product Catalogue Generator, AR reconciliation, Packing List Excel extraction, automatic document-line splitting, and GRN creation. Those items are not part of today's go-live acceptance. |
|                                                                                                                                                                                                                                                                 |
| The SQL data is complete up to 3 July except for the known source-data exceptions already listed. We will not confuse those known records with product defects."                                                                                                |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**17.2 2:15--2:30 --- Guided walkthrough**

One order only.

Gareth shows:

Lead and notes;

Lead conversion;

order forwarding;

Draft SO;

box/carton handling;

price and credit;

Pick List;

improved PDF;

actual picked quantity;

Draft DN;

line breakdown;

Grace review;

Invoice;

SQL.

No side discussions.

**17.3 2:30--2:40 --- Confirm operating model**

Confirm:

Prospect hidden.

Leads only.

Sales ownership restrictions.

CJ full sales-team visibility.

Approach 1 remains adopted.

No normal Excel Packing List.

Manual DN line splitting remains current.

GRN stays in SQL.

Incomplete items remain out of scope.

POD remains unresolved unless David decides otherwise.

**18. Hands-On Scenarios**

**18.1 Scenario 1 --- Lead to Customer and non-PO kilogram order**

**Time:** 2:40--3:05

**Primary user:** Queenie

**Objective**

Validate Lead simplicity, notes carry-over, ownership restrictions, and a standard kg-based order.

**Steps**

Queenie creates a Lead.

Queenie adds customer notes.

Han attempts to view Queenie's Lead.

System must deny access.

Queenie converts the Lead to Customer.

Confirm notes carry over.

Confirm ownership remains Queenie.

Queenie forwards a 20 kg customer order.

MAIA creates Draft SO.

Queenie reviews and submits.

Approved price auto-proceeds.

Credit passes.

Lai creates Pick List.

Actual picked quantity is 19.71 kg.

Lai updates and completes Pick List.

Lai creates Draft DN.

Lai splits actual box weights.

Lai attempts to submit.

System must deny.

Grace reviews and submits DN.

Grace creates Invoice.

Verify SQL.

**Pass criteria**

Prospect is not visible.

Lead notes work.

Han cannot see Queenie's Lead.

Lead data carries into Customer.

Queenie owns the converted Customer.

Final billed quantity uses actual weight.

Permissions hold.

SQL is correct.

**18.2 Scenario 2 --- Formal PO and carton order**

**Time:** 3:05--3:30

**Primary users:** Grace, Han, CJ

**Objective**

Validate formal PO intake, carton logic, and middle-tier price approval.

**Steps**

Grace uploads customer PO.

MAIA extracts customer, item, PO reference.

Han verifies customer and SKU.

Han records "2 cartons" in Additional Notes.

SO quantity uses 1 kg placeholder.

Price is below default but above minimum.

Han cannot self-approve.

Request routes to CJ.

CJ approves.

SO credit check passes.

Lai creates Pick List.

Shipping address is visible.

Lai groups order appropriately.

Print Pick List PDF.

Confirm customer details and handwriting layout.

Record carton weights:

10.44 kg

11.82 kg

Upload/update Pick List.

Complete Pick List.

Create Draft DN.

Confirm total 22.26 kg.

Grace reviews and submits.

Grace creates Invoice.

Verify SQL.

**Pass criteria**

PO mapping works.

Carton rule is followed.

Han cannot self-approve.

CJ can approve eligible exception.

Shipping address supports grouping.

PDF is usable for handwriting.

Final quantity is 22.26 kg.

SQL is correct.

**18.3 Scenario 3 --- Live operational order**

**Time:** 3:30--4:05

**Users:** Entire Macro Frozen team

**Objective**

Prove the real team can operate without Gareth taking over.

**Rules**

Real order.

Actual accounts.

Actual roles.

Actual Pick List.

Gareth and Ivan observe.

Assistance is logged.

**Required flow**

Salesperson receives order.

Salesperson forwards to MAIA.

Salesperson reviews and submits.

Price and credit controls run.

Lai groups order using shipping information.

Lai produces Pick List.

Warehouse records actual quantity.

Lai updates and completes Pick List.

Lai creates Draft DN.

Lai splits actual line weights.

DN credit check runs.

Grace reviews and submits.

Grace creates Invoice.

Verify SQL.

Team explains handoffs.

**Pass criteria**

Users operate independently.

Visibility rules hold.

Handoffs are clear.

PDF is practical.

Actual quantities are correct.

SQL is correct.

No return to the old Excel workflow.

**19. Defect Classification**

  ----------------------- --------------------------------------- --------------------------------
  Severity                Definition                              Go-live effect

  Blocker                 Unsafe or impossible core workflow      Red unless fixed and re-tested

  Major with workaround   Core works with controlled workaround   Amber possible

  Minor                   No material effect on correctness       Does not block

  Enhancement             Future improvement                      Parking lot

  Known data exception    Existing SQL source-data issue          Track separately
  ----------------------- --------------------------------------- --------------------------------

Before logging a missing record:

check whether it is after 3 July;

check whether it is one of the known excluded records;

confirm whether it exists in SQL;

classify correctly.

**20. Go-Live Decision**

**Green**

Proceed when:

critical scenarios pass;

accounts and permissions are correct;

sales ownership restrictions work;

CJ and authorised managers have required visibility;

Pick List PDF is usable;

price and credit controls work;

actual quantity drives DN and Invoice;

SQL is correct;

no blocker remains.

**Amber**

Proceed only when:

no data-integrity or permission risk remains;

workaround is documented;

owner and expiry date are assigned;

client accepts the constraint.

**Red**

Do not go live when:

Sales Users can see each other's Leads/customers;

manager visibility is missing;

account setup is incomplete;

unauthorised approval or submission is possible;

wrong customer, item, quantity, price, or weight;

duplicate documents;

SQL write failure;

Pick List PDF is unusable;

users cannot complete the flow independently.

**21. Closing Script**

+:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| "We tested the revised workflow, the simplified Lead model, Sales User ownership restrictions, manager visibility, box/carton order handling, the improved Pick List PDF, shipping-address grouping, actual-weight processing, approvals, documents, and SQL synchronisation. |
|                                                                                                                                                                                                                                                                               |
| The result is **\[Green / Amber / Red\]**.                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                               |
| The items not yet completed remain outside today's acceptance: Sales Dashboard, Product Catalogue Generator, AR reconciliation, Packing List Excel extraction, automatic document-line splitting, and Goods Receive Note creation.                                            |
|                                                                                                                                                                                                                                                                               |
| The current SQL data is synchronised up to 3 July, subject to the known source-data exceptions. After approval, we will run the catch-up sync and enable live two-way synchronisation."                                                                                       |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**22. Final Preparation Sign-Off**

  ------------------------------ --------------- -------------------- ---------------
  Area                           Owner            Ready by 1:00 p.m.  Notes

  Session plan                   Ivan                     ☐           

  Introduction updates           Ivan                     ☐           

  Fifteen-minute walkthrough     Gareth                   ☐           

  Role cards and infographic     Gareth                   ☐           

  All user accounts              Gareth + QA              ☐           

  Sales ownership restrictions   Product + QA             ☐           

  Manager visibility             Product + QA             ☐           

  Lead workflow                  Product + QA             ☐           

  Order-unit logic               Product + QA             ☐           

  Pick List PDF                  Product + QA             ☐           

  Shipping-address columns       Product + QA             ☐           

  Price approvals                Product + QA             ☐           

  Credit controls                Product + QA             ☐           

  SQL integration                Tech                     ☐           

  Known SQL exception list       Tech + QA                ☐           

  Instance live and scaled       Tech                     ☐           

  Monitoring and rollback        Tech                     ☐           

  Test orders and PO             Gareth                   ☐           

  Live order selected            Macro Frozen             ☐           

  Recorder assigned              Ivan                     ☐           

  1:00 p.m. readiness decision   Ivan                     ☐           
  ------------------------------ --------------- -------------------- ---------------

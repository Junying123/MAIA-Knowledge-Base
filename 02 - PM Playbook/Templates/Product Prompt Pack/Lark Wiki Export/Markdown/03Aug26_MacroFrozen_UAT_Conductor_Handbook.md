**03Aug26_MacroFrozen_UAT_Conductor_Handbook**

**Macro Frozen --- UAT Conductor Handbook & Session Playbook**

**Prepared:** 3 August 2026\
**Client:** Macro Frozen Sdn. Bhd.\
**Purpose:** Zero-context operational handbook for the person conducting the next client UAT\
**Evidence cut-off:** 29 July 2026\
**Current evidence-based readiness:** **NO-GO pending closure of the mandatory gates in Part 1**

*This handbook uses the latest supplied Scope Lock v3 and Voice of Customer v3 as the controlling sources. Where evidence is missing, conflicting, or not yet tested, the handbook marks it explicitly rather than assuming readiness.*

**Evidence Basis and Source Labels**

This handbook is based on the latest materials supplied for this run. The evidence cut-off is **29 July 2026**. The target window for the third UAT is **11--14 August 2026**, with P0/P1 fixes targeted for 5 August; a target date is not treated as proof that a fix has passed internal testing.

  ------------------------------- ------------------------------------------------------------------------------------------
  Label used in this handbook     Source

  **\[SLv3\]**                    *Macro Frozen --- Scope Lock v3*, dated 29 Jul 2026, superseding v2

  **\[VoCv3\]**                   *Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3*, dated 29 Jul 2026

  **\[4Jun Minutes\]**            *4 Jun 26 --- Macro Frozen Meeting Notes*

  **\[4Jun Transcript\]**         4 Jun 2026 requirements-gathering transcript

  **\[REQ Narrative\]**           *\[REQ\] Macro Frozen Customer Narrative Document*

  **\[WA Export\]**               Macro Frozen implementation WhatsApp export

  **\[Prompt\]**                  Client UAT Conductor Handbook & Session Playbook master prompt
  ------------------------------- ------------------------------------------------------------------------------------------

**Coverage warning.** The 6 May Macro Food F2F transcript remains an uncovered source gap. Warehouse/picker voice is still thin and largely described by David rather than captured directly. The 28 July second-UAT evidence is stronger for live defects, but no formal green/yellow/red verdict or named signatory was recorded. \[SLv3 §Source Manifest, DG-4; VoCv3 Phase 0\]

**Client-facing identity.** In client-facing speech and materials, use **AutorunBiz PLT × MAIA** and refer to the client as **Macro Frozen**. Do not introduce the delivery team as Mindhive. \[REQ Narrative §1.1\]

**PART 1 --- UAT COMMANDER BRIEF**

**1.1 Client and UAT**

  ------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                                  Operational answer

  **Client**                            Macro Frozen Sdn. Bhd. / Macrofood

  **Industry**                          Frozen-food and meat distribution

  **UAT round**                         Third UAT

  **Target window**                     11--14 August 2026

  **Exact date/time/location**          **Unknown --- Must Be Clarified Before UAT**

  **UAT objective**                     Prove that real Macro Frozen orders can move from WhatsApp through pricing/credit control, picking and actual-weight confirmation, DN/Invoice generation and SQL Accounting without silent handoff failures or invalid records

  **UAT conductor**                     **Unknown --- Must Be Clarified Before UAT**

  **Internal technical support**        **Unknown --- Must Be Clarified Before UAT**; notification and channel owners are not fully assigned

  **Client decision-maker**             David Chong, owner/MD and final price/credit controller

  **Final signatory**                   **Unknown --- Must Be Clarified Before UAT**; David is the likely executive authority, but no named signer was recorded

  **Client relationship temperature**   **AMBER** --- the second UAT showed "much better progress," but no formal verdict was called and major operating defects remained

  **Readiness recommendation**          **NO-GO on current evidence**; move to Conditional Go only after the readiness gates in §1.9 pass
  ------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*\[Sources: SLv3 cover note, DG-4, DEP-2; VoCv3 Phase 1 and Phase 3\]*

**1.2 Client in Five Lines**

Macro Frozen distributes frozen meat and food to wholesale, retail and food-service customers; orders mainly arrive through informal WhatsApp messages.

The order is provisional: warehouse cutting, packing and weighing can change the final quantity and invoice amount.

The business currently relies on paper pick lists, WhatsApp groups, SQL Accounting, manually managed price information and Excel for parts of cash/payment control.

MAIA is intended to structure the workflow without removing human review, David's approval control, warehouse physical work or SQL's role as the accounting master.

This UAT must prove that the workflow works on the client's real data, phones, printer, WhatsApp channel and SQL integration---not only on a facilitator's laptop.

*\[Sources: 4Jun Minutes; VoCv3 VOC-001--005, VOC-010, VOC-027, VOC-067--071; SLv3 SL-01, SL-06, AS-01\]*

**1.3 What Matters Most**

  ------------ ---------------------------------------------------------- ---------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------
          Rank Client priority                                            Why it matters                                                                                 How the client is likely to test it                                                                              Sign-off impact

             1 **Actual quantity/weight flows correctly**                 Final kg, carton or piece quantity determines customer documents, revenue and stock            Change a provisional order after picking and compare SO, pick list, DN, Invoice and SQL                          **Blocker**

             2 **SQL rules are never broken**                             Duplicate, reversed or over-quantity documents create accounting and stock risk                Try to create Invoice before/without the correct DN path; check duplicate prevention and stock movement timing   **Blocker**

             3 **Price and credit controls visibly reach the approver**   A silent block is interpreted as a broken system; below-floor pricing directly risks margin    Trigger below-standard, below-minimum, over-credit and overdue cases and wait for named users to act             **Blocker**

             4 **Handoffs notify Grace and Lai every time**               Orders have previously sat unseen; missing handoffs recreate David's coordination bottleneck   Submit SO, create draft DN and confirm pick list; verify chat receipt and activity logs                          **Blocker**

             5 **Warehouse evidence remains usable**                      The existing Excel/paper process proves box weights and supports customer disputes             Enter variable box weights, pcs and cartons; inspect PDFs and totals                                             **Blocker if included in round 3; otherwise workaround acceptance required**

             6 **Real mobile devices work**                               David, CJ and Krystle rely on phones for approvals and operational actions                     Repeat critical approval and payment-term tests on the Samsung Z Fold and iPhone                                 **Blocker for mobile-dependent approvals**

             7 **Printed documents are complete and readable**            Lai's process depends on physical printouts and Chinese item descriptions                      Print the pick list; inspect header, contact data, Chinese text and item breakdown                               **Blocker for the warehouse document path**
  ------------ ---------------------------------------------------------- ---------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------

*\[Sources: VoCv3 Phase 3; VOC-061--071; SLv3 SL-03, SL-04, SL-07, SL-10--12, AS-01, AS-11\]*

**1.4 Must-Pass Acceptance Criteria**

A salesperson forwards an order to the single MAIA WhatsApp number, reviews the draft SO and submits it using only customers they are permitted to access.

Customer and item records are SQL-derived, and the resulting SO/DN/Invoice sequence respects SQL document rules.

Normal, customer-specific, below-standard and below-minimum price paths produce the correct price and approval route.

Credit amount and payment-term checks run at the agreed gates; the resulting block/approval behaviour matches David's written enforcement decision.

Every locked notification event reaches the correct recipient and appears in the activity trail; no unrequested default notifications fire.

The actual picked quantity becomes the quantity used for downstream documents; no provisional quantity silently survives into the final invoice.

Grace must explicitly request DN/Invoice generation after final quantity confirmation; the system must not generate them prematurely.

Critical actions work on the named client devices and the actual WhatsApp channel.

Pick-list and downstream PDFs print required headers, Chinese characters and quantity details correctly.

No incorrect financial value, quantity, stock movement, permission exposure or duplicate ERP record is created.

*\[Sources: SLv3 SL-01, SL-03--13, AS-04; VoCv3 VOC-027, VOC-061--071\]*

**1.5 Known Gaps to Disclose Before Testing**

  ------------------------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Gap                                                          Client-safe disclosure wording

  **Credit enforcement mode unresolved**                       "The approval route is defined, but the day-one block mode and overdue tolerance require David's final written decision. We will not treat this behaviour as accepted until that rule is confirmed."

  **WhatsApp channel not yet proven**                          "The second UAT ran on Telegram because WhatsApp verification was pending. Round three must include a WhatsApp parity test before channel readiness can be accepted."

  **Notification ownership/build evidence missing**            "The required notification events are locked, but we still need named ownership and internal evidence that each event reaches the correct person before the client session."

  **Picked-quantity breakdown conditional**                    "The proposed replacement for the Excel breakdown remains subject to technical feasibility and PDF-format acceptance. If it is not viable, the Excel process remains; we will not imply it has been replaced."

  **POD mechanism conflict**                                   "Two different POD operating models have been discussed. Neither is final until David selects the responsible user and method."

  **SCN/CCN connector excluded from round-three acceptance**   "The credit-note connector requires separate testing, including the stock-reducing case. It is not part of this round's sign-off unless the scope is formally changed."

  **AR finance workspace has no approved date**                "The broader bank-statement workspace is agreed in principle but has no approved readiness date. The conductor must not estimate."
  ------------------------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*\[Sources: SLv3 NS-07, NS-18, NS-20, DEP-3, DEP-4, AS-11--13\]*

**1.6 Top Failure Risks**

  ----------------------------------- ---------------------------------------------------------------------- --------------------------------------------------------------------- ------------------------------------------------- --------------------------------------------------------
  Failure risk                        Likely symptom                                                         Immediate action                                                      Continue?                                         Escalation

  Credit rule not decided             Most orders block because SQL payment knock-off lags by about a week   Stop credit acceptance tests; obtain David's written rule             Independent tests only                            Ivan ↔ David

  Notification event missing          Order is blocked/submitted but no named user receives anything         Capture chat, record ID and logs; stop the dependent chain            Independent tests only                            Notification owner **TBC**, Ivan accountable to assign

  WhatsApp unavailable                Workflow works only through Telegram                                   Treat Telegram as rehearsal only; do not pass channel test            Yes, but channel-dependent tests remain Blocked   Ops/Tech **TBC**

  Mobile approval unusable            Desktop layout appears on phone or controls are covered                Capture model/orientation/video; stop mobile approval test            Non-mobile tests only                             Front-end owner **TBC**

  Incorrect actual quantity/UOM       DN or Invoice uses requested rather than picked quantity               Stop downstream workflow immediately; preserve all records            No for that order                                 Product/ERP integration owners **TBC**

  Pick-list PDF wrong                 Chinese text/header/breakdown missing on print                         Save PDF and physical print; do not mark document path passed         Other independent tests only                      PDF/template owner **TBC**

  ERP integration invalid             Missing, duplicate or invalid SQL document                             Stop all dependent tests; do not repair manually and call it passed   No                                                Product + SQL vendor

  Chatbot uses stale pre-edit state   Bot continues with values from before a mobile-web edit                Capture before/after states; abandon that order scenario              Other independent tests only                      Platform/chat owner **TBC**
  ----------------------------------- ---------------------------------------------------------------------- --------------------------------------------------------------------- ------------------------------------------------- --------------------------------------------------------

*\[Sources: SLv3 DEP-1, DEP-3, DEP-4, NS-20; VoCv3 VOC-067--071, VOC-078\]*

**1.7 Do Not Promise**

Completion merely because P0/P1 work has a 5 August target.

WhatsApp readiness before verification and a full parity smoke test.

Removal of the Excel packing list before AS-11 feasibility and PDF acceptance.

A readiness date for AR, POD, catalogue, contact database, recurring reports or SCN/CCN unless separately approved.

Invoice-mirrored CN numbering.

Volume-based pricing, automated WhatsApp blasting, AP reconciliation, full route planning, WMS, Facebook lead capture or fleet telemetry.

Any credit tolerance, warning mode or override authority not written down by David.

A fix date in the room unless it was approved before the session.

**1.8 Stop-Session Triggers**

Pause the affected workflow immediately when:

quantity, UOM, price, credit result, stock movement or SQL document is wrong;

the same critical workflow fails twice;

an integration or notification failure invalidates downstream tests;

a user sees data outside their permitted customer territory;

the expected result cannot be explained from the locked scope;

team members give contradictory scope or behaviour answers;

the final signatory is absent when a verdict is required;

live debugging exceeds 10--15 minutes;

the client is being asked to bypass the intended workflow to manufacture a Pass.

**1.9 Session Decision**

**NO-GO --- based on the supplied evidence cut-off**

The core order-to-cash scope is defined, but the evidence does not prove that the critical notification, credit-enforcement, WhatsApp, mobile, print and ERP paths are ready on the client's actual configuration. \[SLv3 §9, DEP-1--4, NS-20; VoCv3 Phase 3\]

**Minimum gates to move to Conditional Go**

David signs the credit enforcement rule and override authority.

A named notification owner provides end-to-end evidence for SL-10, SL-11 and SL-12.

WhatsApp verification and channel-parity smoke testing pass.

SQL integration access and SO/DN/Invoice push are proven.

Samsung Z Fold and iPhone critical paths pass.

Chinese/header print defects pass.

AS-11 either passes or the client explicitly accepts continued Excel use.

Exact session date, duration, participants and named final signatory are recorded.

**PART 2 --- CLIENT AND BUSINESS PRIMER**

**2.1 Client in One Minute**

Macro Frozen is a frozen-food and meat distributor handling roughly **700 orders per month** according to the sales-handover narrative. Customers are mainly wholesale, retail and food-service businesses. Most orders arrive through WhatsApp in informal language; the customer may use shorthand, mixed languages or a name that differs from the SQL item description. \[REQ Narrative §2, §7--8; VoCv3 VOC-002, VOC-012\]

The business does not know the final invoice quantity when every order is first received. Warehouse staff cut, pack and weigh goods, and the final kg or box total can differ from what the customer requested. That actual quantity must flow into the final SO, DN, Invoice and SQL records. \[4Jun Minutes §End-to-End Workflow; VoCv3 VOC-001, VOC-005--006\]

The current operating model relies on WhatsApp groups, printed pick lists, handwritten quantities, Excel records and David's personal coordination. Pricing is distributed through images/messages rather than enforced in a system. Finance also handles transfer, cash and QR-related payment noise, while SQL Accounting remains the master accounting and operational reference system. \[VoCv3 VOC-003--010, VOC-027\]

MAIA is being introduced as the operational layer over SQL: it should structure order entry, approvals, handoffs, final quantity, documents and selected AR activities while preserving human control. It must not behave like an autonomous ordering or finance system. \[SLv3 SL-01--08; REQ Narrative §1, §10\]

**2.2 The Client's Business in Detail**

**Products and quantities**

Frozen meat and food are sold using **kg, carton and piece** concepts.

A carton can contain boxes with different actual weights; "10 boxes" is not enough evidence unless the individual or total weight is preserved.

Customers can order using informal terms such as a preparation style or shorthand rather than the exact SKU.

Final quantity may be lower or higher than requested, and substitutions may be needed when the original SKU is unavailable.

Chinese characters can appear in item descriptions and must survive printed documents.

*\[Sources: VoCv3 VOC-002, VOC-046, VOC-064--066, VOC-070; SLv3 AS-01, AS-10, AS-11\]*

**Order intake**

Orders mainly arrive through WhatsApp text, voice notes, forwarded customer messages and a small number of formal customer POs.

The latest locked workflow is **salesperson self-service**: the salesperson forwards the order directly to MAIA, reviews/corrects the draft and submits it.

Salespeople must remain isolated to their assigned customers; unassigned/legacy customers default to David.

*\[Sources: SLv3 AS-04, SL-05, SL-08; VoCv3 VOC-019, VOC-032, VOC-035\]*

**Pricing**

David controls selling prices and updates them through a desktop workflow.

MAIA supports wholesale, retail and customer-specific prices plus a minimum-price rule.

Normal price proceeds automatically; below default but at/above minimum routes to CJ; below minimum routes to David.

Volume-based price tiers are not supported and must not be implied.

*\[Sources: SLv3 SL-03, SL-11; VoCv3 VOC-010--013, VOC-043--044\]*

**Credit and payment terms**

Many customers effectively operate on a "pay the previous invoice before the next order" rhythm.

Credit amount and payment-term checks are intended to run before submission and again at DN.

David is the final credit approver. CJ cannot self-approve credit.

The unresolved problem is that SQL knock-off can lag real payment by around a week, making many customers appear overdue.

*\[Sources: SLv3 SL-04, SL-10, NS-20; VoCv3 VOC-016--017\]*

**Warehouse and delivery**

Orders are grouped by area/driver and warehouse picking remains physically executed.

David values accountability---who picked, who checked and what quantity was actually prepared---more than "automation" by itself.

Lai is the warehouse/logistics manager. The actual picker voice is still underrepresented.

Full route planning is out of scope. A narrow driver/POD role is only agreed in principle and conflicts with an older accounts-upload model.

*\[Sources: VoCv3 VOC-003--005, VOC-038--041, VOC-075--076; SLv3 AS-01, AS-12, NS-07\]*

**Documents and SQL Accounting**

SQL remains customer/item/accounting master.

MAIA should generate SO, DN/DO and Invoice after the confirmed order state.

Grace must explicitly request DN/Invoice generation; it must not occur automatically when the amended SO is submitted.

Stock moves only at Invoice/SCN issuance.

SQL constraints must prevent duplicate or invalid document sequences.

*\[Sources: SLv3 SL-01, SL-07; VoCv3 VOC-027\]*

**Finance and AR**

Payments arrive by bank transfer, cash collected by drivers and QR merchant activity.

MAIA's locked AR behaviour covers customer-invoice matching with human confirmation.

Exact matches may be suggested; ambiguous matches must not be posted automatically.

Merchant/QR settlement and AP reconciliation are out of scope.

Grace has expressed adoption skepticism if MAIA simply adds another manual step.

*\[Sources: SLv3 SL-02, AS-13; VoCv3 VOC-007--009, VOC-033\]*

**Language, devices and facilitation**

The team uses mixed English, Mandarin, Malay and Chinese product descriptions.

David's Samsung Z Fold and Krystle's iPhone have already exposed live rendering failures.

CJ is described as mobile-dependent and without a company laptop for the relevant path.

The conductor must be prepared to explain slowly, use the actual devices and validate printed Chinese text.

*\[Sources: REQ Narrative §8.2; SLv3 SL-10; VoCv3 VOC-067--071\]*

**2.3 What Makes This Client Different**

**An order is provisional until warehouse confirms the actual quantity.**

**The system must preserve evidence**, not merely calculate totals.

**Pricing is an approval control plane**, not just a lookup field.

**A silent block is treated as product failure.**

**Human roles remain critical**: salesperson, CJ, David, Lai and Grace each own a different handoff.

**The client's actual channel and devices are part of acceptance.**

**Paper and Excel are not automatically obsolete**; they can remain if the replacement does not preserve the same proof.

**SQL sequence and stock timing are non-negotiable.**

**Warehouse adoption is not yet proven**, even if the functionality exists.

**Scope pressure is real** around catalogue, blasting, POD, reports, contact database and WMS.

**2.4 People and Responsibilities**

  --------------------------------------------- ------------------------------------------------------------------ --------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------ --------------------------------------------------------------------------------- ------------------------------------------------------- -----------------------------------------------------------
  Person / role                                 What they do daily                                                 What they do in MAIA                                                                    What they must test                                                                  Approval authority                                                                Device                                                  Mandatory?

  **David Chong --- Owner/MD**                  Coordinates operations; controls price and credit exceptions       Price controller, final credit approver, recipient of escalations                       Below-min price, credit override, mobile approval, final business acceptance         Final price and credit; likely executive decision authority                       Samsung Z Fold incident recorded                        **Yes**

  **CJ Tan --- Sales Manager**                  Manages sales and customer/credit setup                            Intermediate price approver; sales-user chain participant                               Below-default price approval, assigned-customer visibility, mobile workflow          Price tier between default and minimum; cannot final-approve credit               Mobile-dependent; no company laptop noted               **Yes**

  **Queenie --- Sales User**                    Takes and processes customer orders                                Forwards order, corrects draft SO, submits                                              Normal order, informal item, pcs/UOM, territory restriction, block escalation        No final approval                                                                 **Unknown**                                             **Yes**

  **Ben --- Sales User**                        Active salesperson in SQL agent mapping                            Assigned-customer order flow                                                            At least one territory-isolation cross-check                                         No final approval                                                                 **Unknown**                                             Useful, not mandatory if another rep performs cross-check

  **Grace --- Finance Manager**                 Controls DN/Invoice handoff and finance workflow                   Explicitly requests DN/Invoice; receives draft-DN/pick notifications; AR review         Document handoff, PDF, AR exact/ambiguous matching, SQL result                       Finance confirmation; final sign-off authority **not confirmed**                  **Unknown**                                             **Yes**

  **Apple/Applle --- Finance**                  Maintains finance-related customer settings, credit limits/terms   Finance configuration and possibly selected override settings                           Payment term, customer finance settings, permission boundaries                       **Conflicting/unclear**: NS-20 asks whether Apple may override; must be decided   **Unknown**                                             Required if finance permission tests are in scope

  **Lai / Lim Jun Yan --- Warehouse Manager**   Coordinates pick lists and warehouse/logistics                     Receives submitted SO; creates/submits pick list or draft DN; records actual quantity   Warehouse notification, kg/carton/pcs, printing, actual quantity, handoff to Grace   Operational confirmation; no price/credit authority                               Dedicated computer/printer planned; access model open   **Yes**

  **Krystle --- Ops/Admin Coordinator**         Coordinates implementation and operational logistics               Mobile user and operational support                                                     iPhone rotation/rendering and stale-chat-context scenario                            No confirmed approval authority                                                   iPhone 17 Pro Max incident recorded                     Required for named-device retest

  **Sean --- Ops/IT Admin**                     Supports setup and tutorials                                       Technical/client setup assistance                                                       Login, device, printer or environment support as assigned                            None recorded                                                                     **Unknown**                                             Helpful

  **Driver ("Uncle")**                          Delivers goods and returns proof                                   Proposed: view/update DN and upload POD                                                 Only if AS-12 is formally added to this UAT                                          No submit/cancel; POD cannot be deleted                                           **Unknown**                                             No for core UAT

  **External consultant**                       Final bank reconciliation outside MAIA                             None in core UAT                                                                        None unless finance scope is expanded                                                External                                                                          N/A                                                     No

  **Final UAT signatory**                       Calls Pass/Conditional Pass/Fail                                   Accepts conditions and workarounds                                                      Closing decision                                                                     **Unknown --- Must Be Clarified**                                                 N/A                                                     **Yes**
  --------------------------------------------- ------------------------------------------------------------------ --------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------ --------------------------------------------------------------------------------- ------------------------------------------------------- -----------------------------------------------------------

*\[Sources: VoCv3 Phase 1; SLv3 SL-03, SL-04, SL-08, SL-10--12, AS-12, NS-20\]*

**2.5 Client Terminology and Glossary**

  --------------------------------- --------------------------------------------------------------------------------------------------
  Term                              Meaning in this account

  **SO**                            Sales Order; the central order record before final delivery/invoice documents

  **DO / DN**                       Delivery Order / Delivery Note; downstream delivery document

  **Invoice**                       Final billing document; quantity must not exceed the valid delivery path

  **Pick list**                     Warehouse document showing what to prepare; currently strongly tied to paper/print practice

  **Requested quantity**            Quantity initially ordered by the customer

  **Actual quantity**               Quantity physically picked/weighed and used for final documents

  **UOM**                           Unit of measure, especially kg, carton and pcs

  **kg per box**                    Weight detail used to prove how cartons/boxes add up to the final total

  **SQL**                           SQL Accounting/SQLC, the client's ERP/accounting master referenced by MAIA

  **AR**                            Accounts receivable---matching customer payments to invoices

  **Knock-off**                     Applying a payment against an outstanding invoice

  **Credit limit**                  Maximum exposure allowed for a customer

  **Overdue block**                 Restriction caused by payment terms/overdue status

  **Price floor / minimum price**   Lowest allowed selling price without David's approval

  **Customer-specific price**       Price set for a particular customer rather than the generic tier

  **Agent**                         SQL customer field assigning the customer to a salesperson

  **POD**                           Proof of delivery, normally a signed/photo record tied to the correct DN

  **SCN / CCN**                     Credit-note variants whose connector and stock impact require separate testing

  **Stock movement**                Inbound/outbound inventory posting; confirmed to occur at Invoice/SCN issuance

  **Whitelisted notification**      An explicitly approved event that may notify users; all other default notifications are disabled

  **Activity trail**                System record showing that a handoff or notification occurred
  --------------------------------- --------------------------------------------------------------------------------------------------

**2.6 What Success Means to the Client**

  -------------------- -------------------------------------------------------------------------------------- --------------------------------------------------------------------
  Dimension            What success looks like                                                                What damages confidence

  Operational          Sales, warehouse and finance each see the next action without David manually chasing   Orders sit silently; users need David to coordinate every step

  Financial            Correct price, credit, actual quantity and invoice                                     Wrong price, wrong kg, invalid discount or premature invoice

  Control              Below-floor and over-credit orders cannot bypass approval                              Sales can change price/credit without a visible, recorded decision

  Adoption             Users complete their own steps on their own devices                                    Facilitator or developer performs the workflow for them

  Evidence             Printed/PDF documents preserve Chinese text and quantity proof                         Excel/paper proof is removed without an equivalent replacement

  Relationship         Known gaps are disclosed before testing and explained consistently                     Client discovers a known limitation in the room

  Sign-off             A named person calls a clear verdict against agreed acceptance criteria                Session ends with vague praise but no recorded Pass/Fail decision
  -------------------- -------------------------------------------------------------------------------------- --------------------------------------------------------------------

**2.7 Previous UAT History**

**Discovery and early design:** the business priority was framed around order entry, actual weight, pricing, credit, AR and warehouse accountability. \[4Jun Minutes; VoCv3 VOC-001--036\]

**17 July training:** notification behaviour was explicitly not ready; the client reacted to missing visibility and adoption issues. \[VoCv3 VOC-037--060\]

**Second UAT, 28 July:** the team reported "much better progress," but the session produced critical defects and new requirements: silent credit/price blocks, required Grace/Lai notifications, Excel-breakdown dependency, pcs UOM gap, named-device mobile failures, mobile payment-term blockage, pick-list Chinese/header defects and stale chatbot context. \[SLv3 cover note; VoCv3 VOC-061--078\]

**No formal verdict:** no green/yellow/red result and no named signatory were recorded. \[SLv3 DG-4, DEP-2\]

**What must not surprise the client again:** missing notifications, unusable mobile approval, incomplete printouts, inability to represent pcs/box-weight breakdown, and a system that continues using stale data after an edit.

**PART 3 --- BEFORE AND AFTER MAIA**

**3.1 Current Workflow Before MAIA**

  -------------------- ------------------------ ------------------------------------------------ ------------------------------------------------------------ ----------------------------- -----------------------------------------------------------
  Stage                User                     Current tool                                     Action                                                       Output                        Common problem

  Customer order       Customer / salesperson   WhatsApp text, voice, forwarded message or PO    Sends informal product and quantity request                  Message/PO                    Shorthand, mixed language, ambiguous item/UOM

  Interpretation       Sales / David            WhatsApp, memory, SQL lookup                     Interprets item, cut, customer and price                     Internal understood order     Depends on personal knowledge

  Price decision       David / sales            WhatsApp image, ChatGPT-generated list, memory   Chooses current/customer price                               Price communicated to sales   No enforced system source or floor

  Order entry          Sales/admin              SQL and WhatsApp                                 Keys order                                                   Initial order record          Duplicate entry and mistakes

  Warehouse planning   David / Lai              WhatsApp group, paper                            Groups orders by delivery area/driver and prints pick list   Route-based pick list         David remains coordinator

  Picking              Warehouse                Printed pick list, handwriting                   Cuts, packs, weighs and writes actual quantity               Annotated paper               Requested and actual quantity differ; accountability weak

  Finalisation         David/Grace/admin        Paper, WhatsApp, SQL                             Updates final quantity and documents                         DO/DN/Invoice                 Wrong weight can flow into billing

  Delivery             Driver                   Physical DO, WhatsApp photo                      Delivers and returns proof                                   Signed/photo proof            Proof search and ownership are manual

  Payment              Finance / sales          WhatsApp, bank statement, Excel, SQL             Matches transfer/cash/payment evidence                       Payment entry / knock-off     Payer name mismatch, delayed knock-off, manual cash log

  Monitoring           David                    SQL printouts, manual review                     Checks aging, price, order progress                          Reports and follow-up         Reactive; depends on David's presence
  -------------------- ------------------------ ------------------------------------------------ ------------------------------------------------------------ ----------------------------- -----------------------------------------------------------

*\[Sources: 4Jun Minutes; VoCv3 VOC-001--010, VOC-016, VOC-022, VOC-038--041\]*

**3.2 Target Workflow After MAIA**

  ------------------ --------------- ----------------------------- --------------------------------------------------------------- ----------------------------- ------------------------------------------------- ------------------------------------ ----------------------------------------------------- ------------------
  Stage              User            MAIA channel/screen           Action                                                          Output                        Approval                                          Notification                         ERP effect                                            Next owner

  Order intake       Salesperson     Single MAIA WhatsApp number   Forwards customer order                                         Draft SO                      None yet                                          User receives draft/review link      Reads SQL customer/item data                          Salesperson

  Review             Salesperson     Chat + mobile/web UI          Corrects customer, SKU, UOM, price, remarks and term            Ready-to-submit SO            Price/credit rules may trigger                    Block message must name approver     No confirmed push yet                                 CJ/David or Lai

  Price exception    CJ or David     Mobile/web approval           Approves/rejects exception                                      Approved/rejected price       CJ for below-default/above-min; David below-min   Salesperson notified                 Approved value retained                               Salesperson

  Credit exception   David           Mobile/chat escalation        Approves/rejects or submits on behalf                           Approved/rejected order       David final                                       Salesperson notified                 Audit/override recorded                               Lai

  SO submission      Salesperson     MAIA                          Submits SO                                                      Submitted SO + PDF            Required controls completed                       **Every submitted SO to Lai**        Push/sync where available                             Lai

  Pick preparation   Lai             MAIA + printed PDF            Generates/prints pick list and coordinates warehouse            Pick list                     None                                              Activity trail                       No stock movement yet                                 Warehouse/Lai

  Actual quantity    Warehouse/Lai   Paper + MAIA upload/entry     Records actual kg/carton/pcs and breakdown                      Amended SO / confirmed pick   Quantity confirmation                             Pick confirmation may notify Grace   No final stock movement yet                           Grace

  Draft DN           Lai             MAIA                          Creates draft DN                                                DN PDF                        Grace review/handoff                              **Every draft DN to Grace**          Draft stage only                                      Grace

  Final documents    Grace           MAIA                          Explicitly requests DN/Invoice after checking actual quantity   DN/Invoice PDFs               Human review                                      Relevant completion status           Valid SQL document flow; stock moves at Invoice/SCN   Finance/customer

  AR matching        Grace/Finance   Finance workspace             Uploads payment/bank data; confirms match                       Payment entry/knock-off       Human confirmation                                As configured                        Push where integration allows                         Finance

  Reporting          David/roles     Dashboard/chat                Reviews whitelisted alerts and reports                          Actionable alerts             Role-based                                        Only agreed events fire              None unless action follows                            Named owner
  ------------------ --------------- ----------------------------- --------------------------------------------------------------- ----------------------------- ------------------------------------------------- ------------------------------------ ----------------------------------------------------- ------------------

*\[Sources: SLv3 SL-01--13, AS-01, AS-04, AS-11\]*

**3.3 What Does Not Change**

SQL remains the customer, item, accounting and document master.

Salespeople and finance must review extracted or suggested data.

Warehouse still performs physical cutting, packing, weighing and checking.

Actual quantity still requires human confirmation.

David remains final price-floor and credit approver.

Grace still controls the DN/Invoice handoff.

Delivery route planning remains outside the core scope.

Ambiguous AR matches require human selection.

Paper/Excel may remain where the replacement has not been proven or accepted.

Final external bank reconciliation remains outside MAIA's core workflow.

**3.4 Before-vs-After Comparison**

  ----------------- ----------------------------------- ---------------------------------------------- -------------------------- ---------------------------------------------------
  Workflow stage    Before MAIA                         After MAIA                                     Expected benefit           UAT proof required

  Order intake      Sales/admin interprets and rekeys   Salesperson forwards; MAIA drafts              Less re-entry              Real WhatsApp message becomes correct draft

  Customer access   Controlled informally               Agent-based visibility                         Territory isolation        One rep cannot access another rep's customer

  Pricing           WhatsApp image/memory               Structured price source + approvals            Margin protection          Four pricing paths work

  Credit            David checks manually               Gate + escalation + audit                      Controlled exception       Block reaches David and outcome returns to sales

  Handoff           WhatsApp groups and chasing         Whitelisted role notifications                 No silent orders           Lai/Grace receive every locked event

  Picking           Paper only                          Paper/MAIA hybrid with actual quantity         Traceable final quantity   Actual kg/carton/pcs persists downstream

  Documents         Manual SQL sequence                 Explicit MAIA generation following SQL rules   Fewer invalid records      No duplicate, premature or over-quantity document

  Mobile work       Inconsistent                        Responsive client-device flow                  Real adoption              Z Fold/iPhone pass

  AR                Manual bank/slip/invoice matching   Suggested match + human confirmation           Faster easy cases          Exact and ambiguous cases behave differently

  Monitoring        David manually checks               Whitelisted alerts/reports                     Less coordination          Only agreed alerts fire
  ----------------- ----------------------------------- ---------------------------------------------- -------------------------- ---------------------------------------------------

**3.5 End-to-End Workflow Diagram**

  ------------------------------------------------------------------------------------
  Plaintext\
  CUSTOMER\
  Sends WhatsApp text / voice / forwarded order / occasional PO\
  \|\
  v\
  SALESPERSON (CJ / Queenie / Ben)\
  Forwards to the single MAIA WhatsApp number\
  Reviews customer + item + UOM + price + terms + remarks\
  \|\
  +\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- PRICE EXCEPTION \-\-\-\-\-\-\-\-\-\-\-\-\-\-\--+\
  \| \|\
  \| below default, \>= minimum -\> CJ \|\
  \| below minimum / max exception -\> David \|\
  \| \|\
  +\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- CREDIT EXCEPTION \-\-\-\-\-\-\-\-\-\-\-\-\-\--+\
  \| failed credit/term -\> assign to David \|\
  \| David approves/rejects; sales notified \|\
  v\
  SUBMITTED SO\
  Order PDF and activity entry sent to Lai every time\
  \|\
  v\
  LAI / WAREHOUSE\
  Print pick list -\> pick/cut/weigh -\> record actual qty\
  kg / carton / pcs / optional box-weight breakdown\
  \|\
  v\
  AMENDED SO / CONFIRMED PICK\
  Actual quantity becomes downstream quantity\
  Grace notified as configured\
  \|\
  v\
  LAI CREATES DRAFT DN\
  DN PDF + activity entry sent to Grace every time\
  \|\
  v\
  GRACE\
  Reviews actual quantity and explicitly requests DN / Invoice\
  \|\
  v\
  MAIA -\> SQL ACCOUNTING\
  Valid SO / DN / Invoice sequence only\
  Stock moves at Invoice / SCN issuance\
  \|\
  v\
  FINANCE\
  Payment slip + bank data -\> suggested match -\> human confirmation

  ------------------------------------------------------------------------------------

**PART 4 --- CONFIGURED SOLUTION PRIMER**

**4.1 Solution Status Summary**

  -------------------------------- -------------------------------------- -------------------- ------------------------------------------------- -------------------------------------------- ------------------------------------- --------------------------------
  Workflow                         Classification                         Round-three status   Included in UAT?                                  Readiness                                    Key risk                              Evidence

  SQL customer/item master         Locked core                            SL-01                Yes                                               Defined; integration access open             Missing/invalid SQL push              SLv3 SL-01, DEP-1

  Salesperson self-entry           Locked                                 AS-04                Yes                                               Defined; actual WhatsApp not proven          Channel parity                        SLv3 AS-04, DEP-4

  Territory visibility             Locked                                 SL-05/08             Yes                                               Defined                                      Permission leakage                    SLv3 SL-05, SL-08

  Bulk price update                Locked                                 SL-03                Yes                                               Defined; test evidence not supplied          Stale/wrong price                     SLv3 SL-03

  Tiered price approval            Locked                                 SL-03/11             Yes                                               Defined; notification/mobile proof missing   Wrong approver or silent block        SLv3 SL-11; VoCv3 VOC-061, 067

  Credit gate                      Locked requirement                     SL-04                Yes, only after NS-20                             **Blocked by decision**                      Nearly all customers appear overdue   SLv3 NS-20

  Credit escalation                Locked direction                       SL-10                Yes after trigger decision                        Owner/build evidence missing                 Silent dead end                       SLv3 SL-10, DEP-3

  Payment-term cascade             Locked                                 SL-13                Yes                                               Defined                                      Mobile input defect                   SLv3 SL-13; VoCv3 VOC-069

  Notification whitelist           Locked                                 SL-09                Yes                                               Owner unassigned                             Noise or missed event                 SLv3 SL-09, DEP-3

  SO→Lai / DN→Grace handoff        Locked                                 SL-12                Yes                                               Must be proven                               Missed order                          SLv3 SL-12

  Fresh-weight workflow            Agreed in principle                    AS-01                Yes if round-three script includes it             Adoption and access model open               Wrong final quantity                  SLv3 AS-01, NS-11

  kg-per-box / pcs breakdown       Agreed in principle, conditional       AS-11                Only if feasibility gate cleared                  Not locked                                   Excel replacement promise             SLv3 AS-11

  Pick-list PDF                    Defect path                            P0/P1 fixes          Yes                                               Not proven after fix                         Chinese/header loss                   VoCv3 VOC-070--071

  Explicit DN/Invoice generation   Locked                                 SL-07                Yes                                               Defined                                      Premature documents                   SLv3 SL-07

  Stock movement timing            Locked nuance                          SL-07                Yes                                               Defined                                      Stock posted too early                SLv3 SL-07

  AR invoice matching              Locked                                 SL-02                Optional core finance test                        Defined; adoption risk                       Same manual work in another place     SLv3 SL-02

  Bank-statement workspace         Agreed in principle                    AS-13                No unless formally added                          No approved date                             Expectation mismatch                  SLv3 AS-13

  Credit notes / SCN/CCN           Agreed in principle / needs testing    AS-03, NS-18         Explicitly excluded from round-three acceptance   Connector untested                           Wrong stock/accounting effect         SLv3 NS-18

  Near-expiry / low-stock alerts   Feature agreed; mechanism open         NS-03/09             Only if threshold/recipient/cadence confirmed     Configuration incomplete                     Unclear recipient/cadence             SLv3 NS-03, NS-09

  Driver/POD                       Agreed in principle + conflict         AS-12, NS-07         No for core UAT                                   Unresolved operating model                   Client sees extra work                SLv3 AS-12, NS-07

  Product catalogue                Agreed in principle                    AS-02                No for core order-flow sign-off                   Template not locked                          Scope creep                           SLv3 AS-02; VoCv3 VOC-015

  Dashboard/reports                Agreed in principle / needs decision   AS-06, NS-19         No for round-three core                           Duplication unresolved                       Report vs dashboard overlap           SLv3 NS-19

  Mobile responsiveness            Defect-level critical dependency       VOC-067--069         Yes                                               Not proven                                   Approvers cannot act                  VoCv3 VOC-067--069

  Stale chatbot context            Platform defect                        VOC-078              Yes as regression                                 Not proven                                   Bot uses old values                   VoCv3 VOC-078
  -------------------------------- -------------------------------------- -------------------- ------------------------------------------------- -------------------------------------------- ------------------------------------- --------------------------------

**4.2 Critical Workflow Details**

**A. WhatsApp Order Intake and Salesperson Self-Service**

**Business purpose:** remove re-keying while keeping a human review step.

**User:** assigned salesperson.

**Start:** customer message is forwarded to the single MAIA WhatsApp number.

**User action:** review customer, item, quantity/UOM, price, payment term and remarks; correct before submission.

**MAIA action:** create a draft SO using SQL-derived master data.

**Approval:** price and credit rules apply at submission.

**Notification:** no approval notification unless a defined exception occurs.

**ERP effect:** confirmed records push where integration is available.

**Expected outcome:** correct draft, correct customer agent, no unauthorized customer access.

**Known limitation:** second UAT ran on Telegram; WhatsApp channel still needed verification.

**UAT status:** mandatory after DEP-4 is closed.

**Client misunderstanding to prevent:** MAIA is not permitted to submit an uncertain extraction without the salesperson's review.

*\[Sources: SLv3 SL-01, SL-05, SL-06, SL-08, AS-04, DEP-4\]*

**B. Pricing and Price Approval**

**Business purpose:** make price changes enforceable and protect margin.

**User:** salesperson; CJ; David.

**Start:** item price is loaded from the MAIA price source into Quotation/SO/Invoice.

**Normal path:** approved/default price proceeds.

**Intermediate path:** below customer/default price but at/above minimum routes to CJ.

**Floor path:** below minimum or max exception routes to David; value snaps back with warning until approved.

**Notification:** salesperson must be told when override is approved/rejected.

**Expected outcome:** identical behaviour in chat and front-end UI.

**Known limitation:** mobile and notification evidence is not supplied.

**UAT status:** mandatory.

**Do not imply:** volume-tier pricing is supported.

*\[Sources: SLv3 SL-03, SL-11; VoCv3 VOC-043--044\]*

**C. Credit and Payment-Term Control**

**Business purpose:** stop unauthorised exposure while permitting a recorded one-time exception.

**User:** salesperson; David; Apple for finance settings; CJ participates in chain but cannot final-approve credit.

**Start:** SO or DN reaches the credit gate.

**MAIA action:** check credit amount and term status; name approver; offer assign action.

**Approval:** David final; outcome returns to salesperson.

**Expected outcome:** override recorded, no silent dead end.

**Known limitation:** warn-vs-hard-block, tolerance and Apple override authority are unresolved.

**UAT status:** **Blocked until NS-20 is decided in writing.**

**Client misunderstanding to prevent:** do not demonstrate a temporary setting as if it were the accepted go-live rule.

*\[Sources: SLv3 SL-04, SL-10, NS-20\]*

**D. Notification Whitelist and Handoffs**

**Business purpose:** ensure state changes are visible without reintroducing notification noise.

**Users/events:** David for price/credit; Lai for every submitted SO; Grace for every draft DN and defined pick confirmation.

**Design:** all default notifications disabled; only agreed events fire.

**Expected outcome:** each event creates the correct chat message and activity-trail record; no batching for Grace/Lai.

**Known limitation:** owner and internal evidence missing.

**UAT status:** mandatory only after DEP-3 is closed.

*\[Sources: SLv3 SL-09--12; VoCv3 VOC-061--063\]*

**E. Fresh Weight, UOM and Picked-Quantity Evidence**

**Business purpose:** carry the physical truth of what was picked into customer and ERP documents.

**User:** Lai/warehouse, with Grace downstream.

**Start:** submitted SO and pick list.

**User action:** record actual quantity; optionally record box/pcs breakdown.

**MAIA action:** amend SO; carry total/breakdown to DN and PDFs.

**Expected outcome:** totals reconcile and downstream quantities match the pick.

**Known limitations:** warehouse access model open; AS-11 feasibility and presentation not locked; approval for SKU replacement undefined.

**UAT status:** actual-weight path mandatory; AS-11-specific tests conditional.

**Client misunderstanding to prevent:** the Excel process is not removed unless the replacement proves equivalent evidence.

*\[Sources: SLv3 AS-01, AS-10, AS-11, NS-11; VoCv3 VOC-064--066\]*

**F. DN/Invoice and SQL Rules**

**Business purpose:** produce correct customer documents and valid accounting records.

**User:** Lai creates draft DN; Grace reviews and explicitly requests final documents.

**MAIA action:** generate PDFs and push valid records where integration allows.

**Rules:** no automatic DN/Invoice on amended-SO submit; stock moves only at Invoice/SCN; SQL sequence and duplicate constraints apply.

**Expected outcome:** PDFs reviewable before sending; valid SQL numbers and quantities.

**Known limitations:** final template and SQL integration evidence not supplied.

**UAT status:** mandatory.

*\[Sources: SLv3 SL-07; VoCv3 VOC-027, VOC-070--071\]*

**G. AR Matching**

**Business purpose:** accelerate obvious payment matching without removing finance control.

**User:** Grace/Finance.

**Start:** bank statement and/or payment slip.

**MAIA action:** extract payer/date/amount/reference and suggest customer/invoice.

**User action:** confirm or manually select.

**Expected outcome:** ambiguous case never auto-posts; payment updates only after confirmation.

**Known limitations:** broader bank-statement workspace timing not approved; QR settlement excluded; Grace questions whether the flow saves effort.

**UAT status:** include only if finance is part of the round-three acceptance script.

*\[Sources: SLv3 SL-02, AS-13; VoCv3 VOC-007--009, VOC-033\]*

**H. Mobile and Chat Context**

**Business purpose:** allow real approvers/users to act without a laptop.

**Devices:** David's Samsung Z Fold, Krystle's iPhone 17 Pro Max and CJ's mobile path.

**Expected outcome:** correct responsive layout in portrait/landscape; inputs not covered; edited data is reloaded into chat context.

**Known defects:** desktop layout on Z Fold, rotation lock on iPhone, payment-term banner obstruction, stale chat after web edit.

**UAT status:** mandatory regression.

**PART 5 --- UAT SCOPE AND ACCEPTANCE BOUNDARIES**

**5.1 Must Pass for Sign-Off**

  ------------------------------- -------------------------------------------------------------------------------------------------
  Must-pass area                  Minimum acceptance

  Order intake and territory      Assigned salesperson can use actual WhatsApp; other salespeople's customers remain inaccessible

  Master data and ERP             SQL-derived customer/item data; valid push/sync and no invalid document sequence

  Pricing                         Normal, customer-specific and both approval tiers work in chat and UI

  Credit                          Written NS-20 rule is implemented; block/approval/outcome chain works and is audited

  Notifications                   All SL-10--12 events reach correct roles every time; no unapproved notifications

  Actual quantity                 Final picked quantity replaces provisional quantity before final documents

  Documents                       Explicit DN/Invoice request, correct PDF, Chinese/header print, no duplicate

  Mobile                          Named device paths pass

  Security/permissions            Sales isolation, role-specific visibility and hidden purchasing/cost views behave correctly

  Evidence                        Every must-pass test has chat/UI/PDF/SQL evidence and a client-user result
  ------------------------------- -------------------------------------------------------------------------------------------------

**5.2 May Enter Hypercare**

Only with explicit written client agreement:

minor copy, spacing or alignment issues that do not hide information;

non-critical search/filter convenience;

cosmetic desktop issues where mobile and core workflow remain usable;

low-priority dashboard/report refinements not required for daily operation;

minor wording in notifications where recipient, timing and action are correct.

**5.3 Requires Explicit Workaround Acceptance**

  --------------------------- ----------------------------------------------------------- --------------------------------------- --------------------------------------------- --------------------------------------------
  Requirement                 Intended behaviour                                          Unavailable/uncertain behaviour         Proposed workaround                           Acceptance needed

  Picked-quantity breakdown   Structured box/pcs/kg detail on Pick List and DN PDFs       AS-11 feasibility not cleared           Continue current Excel breakdown              David and Grace must accept before UAT

  Warehouse MAIA use          Lai/warehouse records actual quantity in agreed MAIA flow   Individual vs shared login unresolved   Operate via Lai or designated shared device   David/Lai must confirm

  POD                         Defined user uploads mandatory proof to DN                  Driver vs Accounts model conflicts      Continue current WhatsApp/filing process      David must select model; not core sign-off

  SCN/CCN                     Correct credit-note and stock behaviour                     Connector untested                      Continue SQL workaround                       Grace must accept; excluded from round 3

  WhatsApp                    Production channel                                          Pending verification                    Telegram rehearsal only                       Cannot count as a Pass
  --------------------------- ----------------------------------------------------------- --------------------------------------- --------------------------------------------- --------------------------------------------

**5.4 Deferred / Future Phase**

Product catalogue fixed-format output (AS-02).

Credit-note completion and SCN/CCN validation (AS-03/NS-18).

Broader customer notes/master-data writability (AS-05).

Dashboard and recurring reports after NS-19 decision (AS-06).

Quotation enhancements where actual use is confirmed (AS-07).

Low-volume customer PO extraction/matching (AS-08/NS-12).

Cost/buying price bulk workflow (AS-09/NS-13).

SKU replacement approval workflow (AS-10).

Delivery driver/POD role (AS-12/NS-07).

AR bank-statement workspace acceleration (AS-13).

Contact-person database (NS-17).

**5.5 Out of Scope**

AP/supplier-payment reconciliation.

Merchant/QR settlement reconciliation.

Full delivery trip or route planning.

Full WMS, barcode or QR warehouse scanning.

Volume-based pricing tiers.

Full B2C customer ordering application.

Automated WhatsApp blasting/broadcast.

Supplier/purchase-invoice stock entry.

Packing-list Excel OCR.

Customer memo/announcement blast.

Facebook lead capture and auto-reply.

WMS integration with the proposed external warehouse platform.

Fleet GPS/temperature telemetry.

*\[Source: SLv3 §7\]*

**5.6 Unresolved Commitments**

  -------------------------- ----------------------------------------------------------------- ------------------------------------ ------------------------- -------------------------------
  Item                       Conflict/ambiguity                                                Why it matters                       Required resolver         UAT effect

  Credit enforcement         SL-04 says block; NS-20 says day-one mode/tolerance unresolved    Could stop most orders               David + Ivan              **Blocks credit UAT**

  POD                        Grace rejected one method; newer driver-account method proposed   Changes user workload and licences   David                     Exclude unless resolved

  Excel removal              Commercial/operational expectation depends on AS-11               Losing evidence damages trust        Tech lead + David/Grace   Conditional

  Mobile defects             Critical but no dedicated Scope Lock item                         Can defeat P0 approval workflows     Product owner             Must be a round-three gate

  Near-expiry/low-stock      Feature agreed, mechanism unclear                                 Recipients/cadence can be wrong      David                     Do not pass without config

  Signatory                  No named final signer                                             No valid verdict                     Onboarding PM + David     **Blocks closeout**

  Delivery cutoff            1pm/2pm conflict                                                  Cron could be wrong                  David                     Exclude until written

  SKU replacement approval   Replacement flow exists in principle, approver undefined          Wrong item may reach customer        David/business owner      Do not run as acceptance test
  -------------------------- ----------------------------------------------------------------- ------------------------------------ ------------------------- -------------------------------

**PART 6 --- PRE-UAT PREPARATION**

**6.1 Three to Five Working Days Before UAT**

  ------------------------------------------- -------------------------------------- ------------------------------------------------------------ ----------------------------------------------------
  Preparation item                            Owner                                  Evidence required                                            Status from supplied sources

  Confirm exact date, duration and location   Onboarding PM **TBC**                  Calendar invite                                              Unknown

  Name final client signatory                 Onboarding PM + David                  Written name/authority                                       Open (DEP-2)

  Publish round-three acceptance scope        Product/UAT lead **TBC**               Versioned UAT scope                                          Not supplied

  Resolve NS-20 credit rule                   Ivan + David                           Written rule: warn/block, tolerance, basis, override roles   Open blocker

  Assign notification owner                   Ivan                                   Named owner and delivery plan                                Open blocker (DEP-3)

  Verify WhatsApp number                      Ops/Tech **TBC**                       Verified number and test message                             Open blocker (DEP-4)

  Prove SQL integration access                Product + SQL vendor                   Successful read/write test                                   Open blocker (DEP-1)

  Freeze deployment version                   Tech/UAT lead **TBC**                  Build number and release notes                               Unknown

  Complete P0/P1 regression                   QA/Tech **TBC**                        Test results with screenshots/logs                           Not supplied

  Validate named devices                      Front-end/QA **TBC**                   Z Fold and iPhone videos/screenshots                         Not supplied

  Validate print output                       PDF/QA owner **TBC**                   PDF and physical print                                       Not supplied

  Confirm warehouse login model               David + Lai                            Written individual/shared-device decision                    Open (NS-11)

  Decide AS-11/Excel path                     Tech lead + David/Grace                Feasibility + accepted PDF mock or Excel acceptance          Open

  Prepare real test records                   UAT lead + client data owner **TBC**   Test-data sheet                                              Unknown

  Confirm all client attendees                UAT lead **TBC**                       Attendance list                                              Unknown

  Prepare disclosure script                   UAT lead                               Approved wording                                             Drafted in this handbook; internal approval needed

  Prepare defect/evidence folders             UAT lead                               Folder link and permissions                                  Unknown

  Confirm recording consent                   UAT lead + client                      Written/verbal consent                                       Unknown

  Distribute conductor pre-read               UAT lead                               Delivery confirmation                                        Unknown
  ------------------------------------------- -------------------------------------- ------------------------------------------------------------ ----------------------------------------------------

**6.2 One Working Day Before UAT**

Re-run the normal order, both price approvals and the credit chain.

Re-run submitted SO → Lai and draft DN → Grace notifications.

Verify no default/unapproved notification fires.

Re-run actual kg/carton/pcs and variable-weight scenarios.

Generate and physically print the pick list.

Verify Chinese item text, company header, address and phone.

Re-run explicit DN/Invoice generation and inspect SQL document sequence.

Verify stock movement occurs only at Invoice/SCN.

Test David's Z Fold in the exact browser/orientation he uses.

Test Krystle's iPhone portrait → landscape → portrait.

Test mobile payment-term entry.

Test chat refresh after a web/MR-UI edit.

Verify every user can log in with correct permissions.

Reset test records and confirm the SQL test company.

Prepare approved customer messages, sample order data and payment files.

Create empty defect, decision and parking-lot logs.

Confirm which issues will be disclosed at opening.

Confirm technical support is reachable without taking over the room.

**6.3 One Hour Before UAT**

Confirm correct environment/build number on screen.

Log in Queenie, CJ, David, Lai, Grace and any required finance user.

Send one test message through the actual WhatsApp number.

Confirm the printer is connected and has paper/toner.

Open SQL Accounting to the correct test company.

Open the MAIA admin/activity-log view.

Put David's Z Fold and Krystle's iPhone on the client network.

Verify each notification recipient's chat is accessible.

Open the Commander Brief, test checklist and defect log.

Create evidence folders with test IDs.

Confirm who will take screenshots and who will facilitate.

Reconfirm the final signatory and closing time.

State the 10--15 minute troubleshooting timebox to the internal team.

**6.4 Required People**

  ------------------- ---------------------------------------------------- ----------------------------------------------- ------------------------------------------------------------------------------------------ -----------------------------
  Person / role       Why required                                         Tests                                           Can proceed without them?                                                                  Backup

  David               Final price/credit action and business decision      Price floor, credit, Z Fold, sign-off           No for those tests or final verdict                                                        No confirmed backup

  CJ                  Intermediate price approval and sales manager path   Below-default price, mobile                     No for full price ladder                                                                   **Unknown**

  Queenie             Real standard sales-user path                        Order intake, pcs/UOM, block escalation         Another standard salesperson may substitute, but Queenie's regression should still occur   Ben may cover standard path

  Lai                 Warehouse handoff and print/quantity                 SO notification, pick list, actual weight, DN   No for warehouse acceptance                                                                No defined backup (NS-10)

  Grace               DN/Invoice and finance acceptance                    Draft DN, document, AR                          No for finance/document acceptance                                                         No defined backup (NS-10)

  Krystle             Named iPhone defect                                  Rotation and stale context                      Another iPhone is insufficient to close her named incident                                 None

  Apple               Finance settings/permissions                         Terms and finance configuration                 Only if these tests are in scope                                                           **Unknown**

  UAT conductor       Runs session and records verdict                     All                                             No                                                                                         Name a deputy

  Technical support   Investigates after evidence capture                  Failures                                        Session may proceed with independent tests                                                 Name per domain

  Final signatory     Calls verdict                                        Closing                                         No for valid sign-off                                                                      Must be named in advance
  ------------------- ---------------------------------------------------- ----------------------------------------------- ------------------------------------------------------------------------------------------ -----------------------------

**6.5 Required Test Data**

  ---------------------------------- -------------------------------------------------------- ----------------- ---------------
  Data type                          Required characteristics                                 Record selected   Verified by

  Normal customer                    Within credit, valid payment term, assigned to Queenie                     

  Other-rep customer                 Assigned to CJ/Ben and not visible to Queenie                              

  Customer-specific price customer   Has a known special price                                                  

  Over-credit customer               Deterministic amount-limit failure                                         

  Overdue customer                   Deterministic term failure under approved NS-20 rule                       

  No-term customer                   Exercises SL-13 cascade and mobile term input                              

  Normal-price item                  Default price path                                                         

  Below-min item                     Known minimum and a test exception                                         

  kg item                            Actual weight can differ                                                   

  carton item                        Uses carton convention and final kg                                        

  pcs item                           Requires piece entry                                                       

  Variable-weight item               At least 3 boxes with different weights                                    

  Chinese-description item           Prints Chinese characters                                                  

  Informal-name item                 Customer shorthand differs from SQL item                                   

  Substitute item pair               Original unavailable, approved replacement                                 

  Sample payment slip                Exact match                                                                

  Ambiguous payment                  Payer name mismatch/partial/unclear                                        

  Sample bank statement              Contains exact and ambiguous lines                                         

  Print template                     Latest Macro Frozen header                                                 
  ---------------------------------- -------------------------------------------------------- ----------------- ---------------

**6.6 Required Accounts and Devices**

  --------------- ------------------- ------------------------------------------------ ---------- ------------------------------------------- -----------
  User            Role                Device                                           Account    Required permission                         Verified?

  Queenie         Sales               Actual phone                                                Own customers; create/edit/submit SO        

  CJ              Sales Manager       Actual phone                                                Intermediate price approval                 

  David           Owner/approver      Samsung Z Fold                                              Final price/credit approval                 

  Lai             Warehouse Manager   Dedicated PC/printer or approved shared device              View SO; pick list/DN actions               

  Grace           Finance Manager     Actual work device                                          DN/Invoice/AR actions                       

  Apple           Finance             Actual work device                                          Finance settings only                       

  Krystle         Ops/Admin           iPhone 17 Pro Max                                           Relevant mobile/edit path                   

  UAT conductor   Facilitator         Laptop                                                      Read-only admin/log access where possible   
  --------------- ------------------- ------------------------------------------------ ---------- ------------------------------------------- -----------

**6.7 Internal Readiness Rehearsal**

  -------------------------------- --------------------------------- ------------------------ ----------------------------
  Scenario                         Evidence required                 Current status           UAT gate

  WhatsApp order → draft SO        Chat + draft record               Not supplied             Must pass

  Sales territory isolation        Permission screenshots            Not supplied             Must pass

  Three-tier pricing               Chat/UI + audit                   Not supplied             Must pass

  Credit rule + escalation         Written rule + chain logs         Blocked by NS-20         Must pass

  Notification whitelist           Full-day event log                Owner unassigned         Must pass

  Submitted SO → Lai               Recipient chat + activity         Not supplied             Must pass

  Draft DN → Grace                 Recipient chat + PDF + activity   Not supplied             Must pass

  Actual kg/carton/pcs             SO/Pick/DN comparison             Not supplied             Must pass

  Pick-list Chinese/header print   PDF + physical print              Prior defect confirmed   Must pass

  Explicit DN/Invoice              UI + SQL records                  Not supplied             Must pass

  Duplicate prevention             Error + unchanged SQL             Not supplied             Must pass

  Stock movement timing            Before/after SQL stock            Not supplied             Must pass

  Z Fold approval                  Screen recording                  Prior defect confirmed   Must pass

  iPhone rotation                  Screen recording                  Prior defect confirmed   Must pass

  Mobile payment term              Screen recording                  Prior defect confirmed   Must pass

  Stale chat after edit            Before/after chat data            Prior defect believed    Must pass

  Exact/ambiguous AR               Match evidence                    Not supplied             Gate only if AR in round 3
  -------------------------------- --------------------------------- ------------------------ ----------------------------

**PART 7 --- TIMED UAT SESSION RUN OF SHOW**

**7.1 Recommended Full-Day Agenda**

  --------- ---------- -------------------------------------------- --------------------------------------------------- --------------------------------------- -------------------------------------------------- -----------------------------------------------
  Time        Duration Activity                                     Facilitator action                                  Client participant                      System action/evidence                             Exit condition

  08:30            30m Internal room readiness                      Complete §6.3; no client testing yet                Internal team                           Build, logins, channel, printer and SQL verified   All preflight gates green

  09:00            15m Welcome and introductions                    Use opening script; identify signatory              All                                     Attendance record                                  Roles and closing authority confirmed

  09:15            15m Scope, decision rule and disclosures         State included/excluded items and known gaps        David, Grace, Lai, sales                Signed/acknowledged scope slide or note            No scope ambiguity

  09:30            15m Explain Macro Frozen before/after workflow   Walk through §3.5                                   All                                     Questions logged                                   Users understand their handoffs

  09:45            35m Happy-path order                             Queenie performs T02/T05/T06                        Queenie                                 WhatsApp, SO, term, audit                          Normal order passes

  10:20            35m Price controls                               Run T07--T10                                        Queenie, CJ, David                      Approval chats, UI, audit                          Three-tier ladder proven

  10:55            10m Break / evidence catch-up                    Review evidence completeness                        Internal                                Files named by test ID                             No missing critical evidence

  11:05            40m Credit controls                              Run T11--T13 only if NS-20 is approved              Queenie, CJ, David, Apple if relevant   Block, assign, approve/reject, logs                Credit rule proven or session records Blocked

  11:45            25m Roles and permissions                        Run T04 and finance/warehouse visibility            Sales, Lai, Grace                       Access-denied/allowed evidence                     No permission leakage

  12:10            20m Notification chain                           Run T14/T21/T22                                     Lai, Grace, sales                       Recipient chats + activity                         Every locked event received

  12:30            60m Lunch                                        ---                                                 ---                                     Backup/evidence review                             ---

  13:30            60m Warehouse and actual quantity                Run T15--T19                                        Lai, warehouse user, Grace              Pick list, actual qty, breakdown                   Downstream quantity is correct

  14:30            35m Documents and printing                       Run T20/T23--T25                                    Lai, Grace                              PDFs, physical print, SQL                          Print and ERP sequence pass

  15:05            10m Break                                        ---                                                 ---                                     ---                                                ---

  15:15            45m Mobile/device regression                     Run T26--T29                                        David, Krystle, CJ                      Screen recordings                                  Named devices pass

  16:00            35m AR exact/ambiguous cases                     Run T30--T31 if included                            Grace/Finance                           Match and no-auto-post evidence                    Finance scope result recorded

  16:35            20m Failure and recovery tests                   Run T32/T33 with controlled simulation where safe   Relevant users                          Error handling and no bad records                  Safe recovery proven

  16:55            20m Defect and parking-lot review                Classify every issue; no live redesign              David, key users                        Defect/decision logs                               All issues have owner/impact

  17:15            25m Acceptance review                            Read must-pass results and conditions               Final signatory                         Outcome table                                      Pass/Conditional/Fail chosen

  17:40            20m Actions and close                            Use closing script; confirm minutes/retest          All                                     Signed/recorded outcome                            Clear owners/dates/verdict
  --------- ---------- -------------------------------------------- --------------------------------------------------- --------------------------------------- -------------------------------------------------- -----------------------------------------------

**7.2 Recommended Half-Day Agenda**

Use this only after all internal gates pass. Do not compress by removing critical user actions.

  -------------------- -------------------- -------------------------------------------
  Time                             Duration Activity

  09:00                                 20m Opening, roles, scope and disclosures

  09:20                                 15m Before/after workflow explanation

  09:35                                 35m Happy-path order + payment-term cascade

  10:10                                 40m Price and credit approvals

  10:50                                 10m Break/evidence review

  11:00                                 45m Warehouse actual quantity + notifications

  11:45                                 35m DN/Invoice, print and SQL verification

  12:20                                 30m Named-device mobile regression

  12:50                                 20m Defect/parking-lot review

  13:10                                 20m Sign-off decision and close
  -------------------- -------------------- -------------------------------------------

**Move to a separate session rather than rushing:** AR, catalogue, reports, POD, credit notes/SCN/CCN, contact database and other future-phase items.

**7.3 Required Test Sequence**

**Channel/login first**---otherwise every later failure may be environmental.

**Normal order before exceptions**---proves the base path.

**Price before credit**---keeps approval defects distinguishable.

**Notifications before warehouse handoff**---otherwise the warehouse test may fail for a known upstream reason.

**Actual quantity before DN/Invoice**---final documents are invalid without it.

**Print and SQL before mobile regression closeout**---financial/document correctness has priority.

**AR only after order/document flow**---finance matching depends on valid invoices.

**Sign-off only after evidence and defect classification**---never end on verbal sentiment alone.

**PART 8 --- FACILITATOR SCRIPT**

**8.1 Opening Script**

*Good morning, everyone. I'm here on behalf of AutorunBiz PLT × MAIA to facilitate today's Macro Frozen UAT.*

*Today we are not testing random features. We are proving the real Macro Frozen workflow: a salesperson receives and forwards an order, MAIA prepares the draft, pricing and credit controls are applied, Lai and the warehouse confirm the actual quantity, Grace controls the DN and Invoice handoff, and the resulting documents follow SQL Accounting correctly.*

*Each client user will perform their own steps on their normal device. We will capture the input, result, notification, PDF and SQL evidence. A test passes only when the intended workflow works; using a workaround that bypasses the intended path does not make the original test pass.*

*We will timebox live investigation to about 10--15 minutes per issue. If an issue cannot be resolved safely within that time, we will capture it, classify it, assign an owner and continue only with tests that are independent.*

*At the end, the named signatory will record one outcome: Pass, Conditional Pass or Fail. Before we begin, I will confirm the scope and disclose the known limitations so nothing important is discovered by surprise.*

**8.2 Client and Workflow Explanation Script**

*Macro Frozen's order is not final when the WhatsApp message first arrives. The initial order can change after the warehouse cuts, packs and weighs the goods. MAIA therefore has to preserve a two-stage flow: first the provisional SO, then the actual picked quantity, followed by Grace's explicit DN and Invoice step.*

*MAIA does not replace SQL Accounting, the warehouse's physical work or the human approval roles. The purpose is to make each handoff visible and controlled so David does not have to coordinate every step personally.*

**8.3 Known-Gap Disclosure Scripts**

**Credit rule**

*The credit approval path is defined, but the go-live enforcement mode and overdue tolerance require David's written decision. We will only test the rule that has been formally confirmed.*

**WhatsApp**

*The previous UAT used Telegram because WhatsApp verification was pending. Today's production-channel result can only pass if the actual WhatsApp number is verified and used.*

**Notifications**

*The required notification events are specific and role-based. We will verify each one separately and also check that no unapproved default notification appears.*

**Excel/picked breakdown**

*The replacement for the Excel breakdown is conditional on technical feasibility and document acceptance. If the new breakdown is not proven, the current Excel process remains; we will not present it as removed.*

**POD**

*The driver and Accounts upload models have not been reconciled. POD is not part of today's core acceptance unless David has confirmed one model in writing.*

**SCN/CCN**

*The credit-note connector is being tested separately, including the stock-reducing case. It is excluded from this round's acceptance unless the scope has been formally changed.*

**AR timing**

*The broader bank-statement workspace has no approved readiness date. We will not provide an estimate during this session.*

**8.4 Before Each Test**

*The business scenario is **\[state scenario\]**. **\[named client user\]** will perform it on **\[device/channel\]**. We expect **\[specific result\]**, including **\[notification/document/SQL result\]**. I will not guide the clicks unless there is a setup problem; we are testing whether the workflow is usable as delivered.*

**8.5 When a Test Passes**

*The expected result has appeared: **\[state observable result\]**.\
**\[Client user\]**, does this match how you need to perform the task?\
We will capture the evidence and record this test as Pass, subject to the linked SQL/document checks.*

**8.6 When a Test Fails**

*This result does not match the agreed expected behaviour. We will capture the input, screen, message, record ID and downstream impact before retrying.*

*We are not assigning a fix date in the room. We will classify whether this is product, configuration, data, permission, environment or integration related. The affected test is Fail or Blocked. We will continue only with scenarios that do not depend on this result.*

**8.7 When the Cause Is Unclear**

*We have confirmed the symptom, but not the cause. We will not speculate. The evidence will be reviewed against five possible areas: the product, client configuration/data, permissions, environment/channel and ERP integration. Until that review is complete, the test remains Blocked rather than being described as fixed or passed.*

**8.8 When the Client Raises New Scope**

*I have captured the request. Before we classify it, we need to compare it with the latest Scope Lock and the current round's acceptance boundary. I cannot agree to a scope or commercial change in this session. I will place it in the parking lot with an owner, and we will return to the current test.*

**8.9 When a Developer Starts Debugging Live**

*We have enough evidence to investigate this outside the client workflow. Let's stop the live technical discussion here, record the owner and continue with the next independent test. We will return only if the fix is safe, deployed to the same environment and can be retested cleanly.*

**8.10 Closing Script**

*We have completed **\[number\]** tests: **\[passed\]** passed, **\[failed\]** failed, **\[blocked\]** blocked and **\[not run\]** not executed.*

*The must-pass results are **\[summarise\]**. The accepted workarounds are **\[list\]**. The unresolved blockers are **\[list\]**. Deferred and out-of-scope items are recorded separately and are not being treated as defects.*

*The decision requested from **\[named signatory\]** is Pass, Conditional Pass or Fail. A Conditional Pass requires each condition to have a named owner, due date, retest requirement and written acceptance.*

*We will circulate the evidence-backed minutes and action log by **\[approved timing\]**. No unapproved delivery date or scope commitment has been made today.*

**PART 9 --- STEP-BY-STEP TEST FACILITATION GUIDE**

**TEST T01 --- Production Channel, Login and Environment Gate**

  -------------------------------------------- -----------------------------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove the session is using the intended build, actual WhatsApp number, correct user roles and SQL test company.

  **Sign-off importance**                      Hard gate. Failure makes later results unreliable.

  **Client user holding the phone/keyboard**   UAT conductor operates setup screens; each client user confirms their own account.

  **Preconditions**                            Build number frozen; WhatsApp verified; accounts created; SQL test company identified.

  **Test data**                                All named users, actual WhatsApp number, exact environment/build.
  -------------------------------------------- -----------------------------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **production channel, login and environment gate**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Record build/version and environment name.

Send a test message through the actual WhatsApp number.

Have Queenie, CJ, David, Lai and Grace log in on their normal devices.

Open SQL Accounting to the intended test company.

Check each user's role and accessible modules.

**Expected results**

Message reaches the correct MAIA account.

Every user can log in and sees only their permitted functions.

Environment/build matches the internally tested release.

SQL test company is correct.

**Evidence to capture**

Build/version screenshot.

WhatsApp message and response.

Login/role screenshots for each user.

SQL company screenshot.

**Failure handling**

Do not switch to Telegram and call the channel passed. If WhatsApp is unavailable, mark all channel-dependent tests Blocked. If the wrong build or company is open, stop the session until corrected.

**Pass / Fail / Blocked decision**

Pass only when all production-equivalent gates are correct. Fail for permission leakage. Blocked for unavailable channel/environment.

**TEST T02 --- Standard WhatsApp Order to Submitted SO**

  -------------------------------------------- --------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove the core salesperson self-service workflow.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Queenie or another standard salesperson.

  **Preconditions**                            T01 passed; assigned customer and normal-price items exist.

  **Test data**                                One assigned customer; one kg item and one fixed-quantity item; no credit/price exception.
  -------------------------------------------- --------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **standard whatsapp order to submitted so**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Forward the customer order to MAIA WhatsApp.

Open the draft SO.

Review customer, item, UOM, quantity, price, payment term and remarks.

Correct one harmless field if needed.

Submit the SO.

**Expected results**

Correct assigned customer and SQL-derived items appear.

Draft remains user-reviewed rather than auto-submitted.

Normal price and payment term populate correctly.

SO submits without exception.

Order PDF/record ID is produced.

**Evidence to capture**

Original WhatsApp order.

Draft before correction.

Submitted SO and PDF.

Activity log and SQL result if pushed.

**Failure handling**

If mapping is wrong, preserve the original message and mapping result. Do not manually replace every line and still call extraction passed; separate extraction accuracy from manual edit capability.

**Pass / Fail / Blocked decision**

Pass when the user can complete the workflow and the submitted values match the order. Fail for wrong submitted data. Blocked for channel/integration outage.

**TEST T03 --- Informal Item Wording and Unmapped Item**

  -------------------------------------------- -------------------------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove MAIA handles customer shorthand safely and does not submit an uncertain item.

  **Sign-off importance**                      Must pass for safe order capture; exact automatic accuracy may enter hypercare only if review is effective.

  **Client user holding the phone/keyboard**   Queenie.

  **Preconditions**                            T01 passed; known shorthand example and one deliberately unmapped phrase prepared.

  **Test data**                                Example such as customer shorthand for a specific pork-belly cut; one unknown item phrase.
  -------------------------------------------- -------------------------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **informal item wording and unmapped item**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Forward the shorthand order.

Review the suggested item and customer remarks.

Confirm or correct the suggested item.

Forward the deliberately unmapped phrase.

Attempt to continue without resolving it.

**Expected results**

Known shorthand maps correctly or is clearly reviewable.

Unknown item is flagged rather than silently guessed/submitted.

User can select the correct item manually.

Correction is auditable where supported.

**Evidence to capture**

Message, suggestion, warning and corrected draft.

Any learned mapping/activity evidence.

**Failure handling**

If the system confidently submits the wrong SKU, stop the order path and raise a P1/P0 depending on downstream impact. If it asks for review, continue.

**Pass / Fail / Blocked decision**

Pass when uncertainty is visible and human review prevents a wrong item. Fail when an incorrect item can be submitted unnoticed.

**TEST T04 --- Sales Territory Isolation**

  -------------------------------------------- ----------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prevent sales users from seeing another salesperson's customers, prices or outstanding data.

  **Sign-off importance**                      Must pass; security/permission blocker.

  **Client user holding the phone/keyboard**   Queenie and CJ or Ben.

  **Preconditions**                            At least two customers assigned to different agents.

  **Test data**                                Queenie-owned customer and CJ/Ben-owned customer.
  -------------------------------------------- ----------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **sales territory isolation**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Log in as Queenie and search for her own customer.

Search for the other salesperson's customer by name, address and any available filter.

Attempt to open a direct link to the other customer if a safe test link exists.

Repeat in reverse with the second salesperson.

**Expected results**

Own customer is accessible.

Other salesperson's customer and sensitive data are not accessible.

Direct-link access is denied.

**Evidence to capture**

Search results and access-denied screens.

Role/customer assignment evidence.

**Failure handling**

Any cross-territory visibility is a stop condition. Capture the exact fields exposed and do not continue with shared customer data.

**Pass / Fail / Blocked decision**

Pass only with no leakage. Fail/P0-P1 if restricted pricing, outstanding or customer data is exposed.

**TEST T05 --- Default Payment-Term Cascade**

  -------------------------------------------- ------------------------------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove SO creation follows customer default → company default → cash in advance → empty.

  **Sign-off importance**                      Must pass for reliable order defaults.

  **Client user holding the phone/keyboard**   Queenie; Apple/Grace may verify configuration.

  **Preconditions**                            Four controlled customer/config states prepared.

  **Test data**                                Customer with own term; customer using company default; no defaults but cash-in-advance; no configured fallback.
  -------------------------------------------- ------------------------------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **default payment-term cascade**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Create a draft SO for each prepared case.

Observe the payment term before any manual edit.

On mobile, add a term for the no-term case if permitted.

**Expected results**

Each case follows the fixed cascade.

No hidden fallback overrides the defined order.

Mobile input is visible, scrollable and savable.

**Evidence to capture**

Four SO headers.

Mobile screen recording for term entry.

Configuration screenshots.

**Failure handling**

If the bottom banner covers the input or the page cannot scroll, record the named mobile defect and mark that device path Fail.

**Pass / Fail / Blocked decision**

Pass when all cascade cases are correct and the mobile edit is usable. Fail for wrong term or blocked input.

**TEST T06 --- Normal Price Path**

  -------------------------------------------- -----------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove approved/default pricing proceeds without unnecessary approval.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Queenie.

  **Preconditions**                            Latest price data loaded; normal-price item selected.

  **Test data**                                Normal customer and item.
  -------------------------------------------- -----------------------------------------------------------------------

**Conductor introduction**

*We are testing **normal price path**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Create an SO using the default/customer price.

Do not change the price.

Submit.

**Expected results**

Correct latest price appears.

No price approval is triggered.

SO proceeds subject only to credit/term rules.

**Evidence to capture**

SO line, price source/version if visible, submission result.

**Failure handling**

If an approval fires, check whether the configured customer price or minimum is wrong before calling it a product defect.

**Pass / Fail / Blocked decision**

Pass when correct price proceeds without price approval. Fail for stale/wrong price or unnecessary block.

**TEST T07 --- Customer-Specific Price**

  -------------------------------------------- --------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove the customer's special price overrides the generic tier correctly.

  **Sign-off importance**                      Must pass where customer-specific pricing is used.

  **Client user holding the phone/keyboard**   Queenie; David verifies expected price.

  **Preconditions**                            Customer-specific price loaded and documented.

  **Test data**                                One customer with a known special price.
  -------------------------------------------- --------------------------------------------------------------------------

**Conductor introduction**

*We are testing **customer-specific price**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Create an SO for the special-price customer.

Add the relevant item.

Compare the populated price with the approved special price.

Submit without changing it.

**Expected results**

Customer-specific price appears.

No inappropriate generic wholesale/retail price replaces it.

No approval is required when the special price is already approved.

**Evidence to capture**

Master price evidence and SO line.

Submission result.

**Failure handling**

Stop if the wrong price could reach the customer. Do not correct it silently and call the pricing source passed.

**Pass / Fail / Blocked decision**

Pass when exact approved price is used. Fail for wrong/stale source.

**TEST T08 --- Below Default but At/Above Minimum --- CJ Approval**

  -------------------------------------------- ---------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove the intermediate price tier routes to CJ.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Queenie enters; CJ approves/rejects.

  **Preconditions**                            Price thresholds configured; CJ account/device ready.

  **Test data**                                Item with known default and minimum; test price between them.
  -------------------------------------------- ---------------------------------------------------------------

**Conductor introduction**

*We are testing **below default but at/above minimum --- cj approval**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Queenie changes the price to the approved test value.

Attempt to save/submit.

Observe warning and approver.

CJ opens the request on mobile and approves.

Queenie observes the outcome.

**Expected results**

Request routes to CJ, not David.

CJ can approve within this tier.

Salesperson receives the decision.

Audit/activity records the approval.

**Evidence to capture**

Sales warning, CJ notification/UI, outcome message, audit.

**Failure handling**

If CJ cannot act on mobile or the request routes incorrectly, stop this tier. Do not have David approve and call the CJ tier passed.

**Pass / Fail / Blocked decision**

Pass only when the correct tier completes end-to-end.

**TEST T09 --- Below Minimum --- David Approval**

  -------------------------------------------- ----------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove floor protection and final price approval.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Queenie enters; David acts on Samsung Z Fold.

  **Preconditions**                            Minimum price configured; Z Fold path internally proven.

  **Test data**                                Item with known minimum; price below minimum.
  -------------------------------------------- ----------------------------------------------------------

**Conductor introduction**

*We are testing **below minimum --- david approval**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Enter the below-minimum value.

Attempt to save/submit in chat and UI.

Observe snap-back/warning and notify action.

Assign to David.

David approves or rejects on the Z Fold.

Observe the salesperson outcome.

**Expected results**

Below-minimum price is not silently saved.

Approver is David; CJ cannot self-approve.

Chat and front-end behaviour match.

Outcome and override are recorded.

**Evidence to capture**

Before/after price, warning, David mobile screens, notification logs, audit.

**Failure handling**

An unusable Z Fold layout fails the approval workflow even if it works on a laptop. Do not substitute facilitator approval.

**Pass / Fail / Blocked decision**

Pass only on David's actual device with correct audit and outcome.

**TEST T10 --- Price Approval Rejection and Customer-Specific Lock**

  -------------------------------------------- --------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove rejection restores a valid price and fully locked customer prices cannot be changed.

  **Sign-off importance**                      Must pass for control integrity.

  **Client user holding the phone/keyboard**   Queenie; CJ or David rejects.

  **Preconditions**                            One rejectable request and one fully locked customer-specific price.

  **Test data**                                Prepared item/customer pairs.
  -------------------------------------------- --------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **price approval rejection and customer-specific lock**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Create a price exception and have the approver reject it.

Confirm the salesperson cannot continue with the rejected value.

Open the fully locked customer price.

Attempt to edit it.

**Expected results**

Rejected price is not retained.

Salesperson sees a clear outcome.

Locked customer-specific price cannot be altered without the defined path.

**Evidence to capture**

Rejection message, SO line after rejection, locked-field behaviour, audit.

**Failure handling**

If the rejected value survives into the order, stop and treat as P1/P0 based on submission state.

**Pass / Fail / Blocked decision**

Pass when rejection is effective and locked price is protected.

**TEST T11 --- Customer Within Credit**

  -------------------------------------------- -------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove a compliant order is not blocked.

  **Sign-off importance**                      Must pass after NS-20 configuration is frozen.

  **Client user holding the phone/keyboard**   Queenie.

  **Preconditions**                            Approved credit rule implemented; customer known to be within both amount and term.

  **Test data**                                Normal credit customer.
  -------------------------------------------- -------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **customer within credit**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Create and submit a normal SO.

Observe credit/term evaluation.

Continue to submission.

**Expected results**

No credit approval is requested.

Order proceeds normally.

Credit check result is consistent with SQL data and approved tolerance.

**Evidence to capture**

SQL credit/term source, MAIA check result, submitted SO.

**Failure handling**

If blocked, compare source data and rule before classifying. Do not override and call the within-credit test passed.

**Pass / Fail / Blocked decision**

Pass when compliant order proceeds. Fail for false block.

**TEST T12 --- Credit-Limit Block and David Override**

  -------------------------------------------- ---------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove a genuine limit breach visibly escalates and records a one-time override.

  **Sign-off importance**                      Hard blocker; do not run until NS-20 is signed.

  **Client user holding the phone/keyboard**   Queenie submits; David acts; CJ observes but cannot final-approve.

  **Preconditions**                            NS-20 written rule; deterministic over-limit customer; notifications ready.

  **Test data**                                Customer whose order value/outstanding crosses the approved threshold.
  -------------------------------------------- ---------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **credit-limit block and david override**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Submit the order.

Observe named approver and one-tap assign action in chat/UI.

Attempt CJ self-approval.

Assign to David.

David approves one time or rejects.

Observe salesperson outcome and audit.

**Expected results**

Clear block reason and named approver.

CJ cannot final-approve credit.

David receives order details and can act.

Outcome returns to salesperson.

Override is order-specific and recorded.

**Evidence to capture**

Block screen, CJ restriction, David notification/action, salesperson outcome, audit.

**Failure handling**

If NS-20 is not signed, mark Blocked before touching client data. A warn-only or hard-block mode chosen by the facilitator is not valid acceptance.

**Pass / Fail / Blocked decision**

Pass only against the written rule. Blocked if the rule is unresolved.

**TEST T13 --- Overdue-Term Block and Tolerance**

  -------------------------------------------- --------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove overdue logic matches the approved tolerance without blocking nearly every customer.

  **Sign-off importance**                      Hard blocker for go-live credit control.

  **Client user holding the phone/keyboard**   Queenie; David; Apple if approved as a finance role.

  **Preconditions**                            Written overdue-age tolerance and override authority.

  **Test data**                                One inside-tolerance and one outside-tolerance customer.
  -------------------------------------------- --------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **overdue-term block and tolerance**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Submit an order for the inside-tolerance customer.

Submit an order for the outside-tolerance customer.

Observe warning/block and approver for each.

Test only the authorised override role.

**Expected results**

Inside-tolerance behaviour matches the rule.

Outside-tolerance behaviour matches the rule.

No unauthorised finance override.

Clear explanation appears.

**Evidence to capture**

Source invoice/term dates, both outcomes, override audit.

**Failure handling**

Stop if the system cannot distinguish the two cases or if most live customers are falsely blocked.

**Pass / Fail / Blocked decision**

Pass only when the exact written rule is implemented. Otherwise Fail/Blocked.

**TEST T14 --- Submitted SO Notification to Lai**

  -------------------------------------------- ------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove every submitted SO reaches warehouse/logistics without batching.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Queenie submits; Lai receives.

  **Preconditions**                            SL-12 notification seeded; Lai account/chat ready.

  **Test data**                                Any approved submitted SO.
  -------------------------------------------- ------------------------------------------------------------------------

**Conductor introduction**

*We are testing **submitted so notification to lai**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Submit the SO.

Do not manually message Lai.

Observe Lai's chat and activity trail.

Open the Order PDF from the notification.

**Expected results**

Lai receives one notification for the event.

Order PDF and relevant details are accessible.

Activity trail records dispatch.

No duplicate or unrelated default notification appears.

**Evidence to capture**

Sender/submission time, Lai message, PDF, activity log.

**Failure handling**

If no message arrives, stop warehouse-dependent tests unless Lai accesses the SO through an explicitly accepted alternate path; the notification test remains Fail.

**Pass / Fail / Blocked decision**

Pass only with timely chat receipt and activity evidence.

**TEST T15 --- kg Order with Actual Variance**

  -------------------------------------------- -------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove final kg replaces the requested quantity before documents.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Lai/warehouse performs quantity entry; Grace verifies downstream.

  **Preconditions**                            Submitted SO and pick list available.

  **Test data**                                Customer requests 10 kg; actual pick deliberately differs, e.g. 9.6 kg.
  -------------------------------------------- -------------------------------------------------------------------------

**Conductor introduction**

*We are testing **kg order with actual variance**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Generate/print pick list.

Record actual quantity.

Submit/confirm the pick.

Open amended SO.

Continue to draft DN only after confirming the new total.

**Expected results**

Requested and actual values remain distinguishable.

Amended SO uses actual kg.

DN draft uses actual kg.

No invoice is generated automatically.

**Evidence to capture**

Original SO, pick list, actual-entry screen, amended SO, draft DN.

**Failure handling**

If requested quantity survives downstream, stop the entire document path for that order.

**Pass / Fail / Blocked decision**

Pass when every downstream quantity matches actual kg and premature invoice is absent.

**TEST T16 --- Carton Order and Final kg**

  -------------------------------------------- ------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove the agreed carton convention can produce a valid final quantity.

  **Sign-off importance**                      Must pass if carton workflow is part of daily operation.

  **Client user holding the phone/keyboard**   Lai/warehouse.

  **Preconditions**                            Carton item and agreed entry convention configured.

  **Test data**                                Order in cartons; known box count and final kg.
  -------------------------------------------- ------------------------------------------------------------------------

**Conductor introduction**

*We are testing **carton order and final kg**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Create the carton-based draft using the agreed convention.

Record carton count and actual kg after picking.

Confirm the pick.

Inspect amended SO and DN.

**Expected results**

Original carton intent remains visible.

Final kg is accurate.

Downstream quantity/document format matches the agreed convention.

**Evidence to capture**

Draft notes/quantity, pick data, amended SO, DN.

**Failure handling**

If the placeholder convention creates a misleading customer/SQL quantity, stop and classify as requirement/design conflict.

**Pass / Fail / Blocked decision**

Pass only when the client confirms the representation is operationally acceptable.

**TEST T17 --- pcs as Unit of Measure**

  -------------------------------------------- ---------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove a salesperson can order pieces without being forced into kg/carton.

  **Sign-off importance**                      Conditional: must pass if AS-11/pcs is included in round three.

  **Client user holding the phone/keyboard**   Queenie.

  **Preconditions**                            AS-11/pcs build deployed and internally proven.

  **Test data**                                Item that can be ordered as 3 pcs.
  -------------------------------------------- ---------------------------------------------------------------------------

**Conductor introduction**

*We are testing **pcs as unit of measure**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Forward/order 3 pcs.

Review the draft UOM.

Submit and carry through pick/DN.

**Expected results**

pcs is accepted without forced conversion.

Quantity persists through documents.

Totals remain valid.

**Evidence to capture**

Order message, draft, pick/DN lines, PDF.

**Failure handling**

If build is not deployed, disclose and mark Not in Scope/Blocked rather than improvising kg/carton.

**Pass / Fail / Blocked decision**

Pass only when pcs persists end-to-end.

**TEST T18 --- Variable Box-Weight Breakdown**

  -------------------------------------------- ----------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove box-level evidence persists and totals reconcile.

  **Sign-off importance**                      Conditional; load-bearing for Excel removal.

  **Client user holding the phone/keyboard**   Lai enters; Grace reviews.

  **Preconditions**                            AS-11 feasibility cleared; PDF format approved.

  **Test data**                                At least three boxes, e.g. 10.5 kg, 12.3 kg and 11.7 kg.
  -------------------------------------------- ----------------------------------------------------------

**Conductor introduction**

*We are testing **variable box-weight breakdown**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Enter each qty/UOM tuple.

Save/submit pick.

Open DN item.

Generate Pick List and DN PDFs.

Recalculate total.

**Expected results**

All tuples persist.

Sum equals the final total.

Breakdown appears on both PDFs in accepted format.

DN receives the same data.

**Evidence to capture**

Entry screen, stored record/API if available, both PDFs, manual sum.

**Failure handling**

If tuples disappear or total differs, retain Excel and fail AS-11. Do not remove the client's current evidence process.

**Pass / Fail / Blocked decision**

Pass only after David/Grace accept the presentation and totals.

**TEST T19 --- SKU Replacement During Picking**

  -------------------------------------------- ---------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove unavailable stock can be replaced without losing approval/accountability.

  **Sign-off importance**                      Do not use as acceptance until approver is defined.

  **Client user holding the phone/keyboard**   Lai identifies replacement; approver **TBC**.

  **Preconditions**                            Written replacement approval route.

  **Test data**                                Original SKU unavailable; approved substitute.
  -------------------------------------------- ---------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **sku replacement during picking**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Select the replacement during picking.

Trigger the defined approval.

Confirm the replacement.

Inspect amended SO, Pick List, DN and Invoice.

**Expected results**

Original and replacement are traceable.

Correct approver acts.

Final documents use the approved replacement.

**Evidence to capture**

Before/after item, approval, downstream documents.

**Failure handling**

If no written approver exists, do not run; mark Blocked by unresolved requirement.

**Pass / Fail / Blocked decision**

Pass only with defined authority. Otherwise Blocked.

**TEST T20 --- Pick-List PDF and Physical Print**

  -------------------------------------------- ----------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove Lai receives a usable physical document.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Lai prints and reviews.

  **Preconditions**                            Latest template deployed; printer ready.

  **Test data**                                Multi-line order including Chinese description and variable-weight detail if in scope.
  -------------------------------------------- ----------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **pick-list pdf and physical print**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Generate Pick List PDF.

Inspect on screen.

Print physically.

Check company name, address subheading, phone, Chinese text, item/UOM/quantity and page breaks.

**Expected results**

On-screen and physical output match.

Chinese characters render.

Header/contact data are present.

No quantity or breakdown is cut off.

**Evidence to capture**

Original PDF, photos/scans of every printed page, printer details.

**Failure handling**

Do not pass based only on the on-screen PDF. Save the failed physical print before retrying.

**Pass / Fail / Blocked decision**

Pass only when Lai confirms the print is usable and all mandatory fields are visible.

**TEST T21 --- Pick Confirmation Notification to Grace**

  -------------------------------------------- ------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove the defined pick handoff is visible to finance/document control.

  **Sign-off importance**                      Must pass where configured by SL-12.

  **Client user holding the phone/keyboard**   Lai submits; Grace receives.

  **Preconditions**                            Notification seeded and exact trigger agreed.

  **Test data**                                Confirmed pick list.
  -------------------------------------------- ------------------------------------------------------------------------

**Conductor introduction**

*We are testing **pick confirmation notification to grace**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Submit/confirm the pick list.

Observe Grace's chat and activity trail.

Open linked record.

**Expected results**

Grace receives the agreed message when the trigger occurs.

Notification references the correct order/pick.

Activity trail records it.

**Evidence to capture**

Trigger time, Grace message, activity log.

**Failure handling**

If the trigger wording "on demand" is not configured unambiguously, mark the requirement as unresolved before UAT.

**Pass / Fail / Blocked decision**

Pass only for the explicitly agreed trigger.

**TEST T22 --- Draft DN Notification to Grace**

  -------------------------------------------- --------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove every draft DN reaches Grace with the PDF.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Lai creates; Grace receives.

  **Preconditions**                            SL-12 configured.

  **Test data**                                Order with confirmed actual quantity.
  -------------------------------------------- --------------------------------------------------

**Conductor introduction**

*We are testing **draft dn notification to grace**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Lai creates the draft DN.

Do not manually alert Grace.

Observe Grace's chat.

Open the DN PDF and activity entry.

**Expected results**

Grace receives every event, no digest/batching.

Correct DN PDF attached/linked.

Activity trail exists.

**Evidence to capture**

Draft DN, Grace message, PDF, activity.

**Failure handling**

Missing notification fails the handoff even if Grace can find the DN manually.

**Pass / Fail / Blocked decision**

Pass only with every-event delivery.

**TEST T23 --- Explicit DN and Invoice Generation**

  -------------------------------------------- ------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove final documents are created only after Grace explicitly requests them.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Grace.

  **Preconditions**                            Actual quantity confirmed; valid draft DN; SQL access available.

  **Test data**                                Completed order.
  -------------------------------------------- ------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **explicit dn and invoice generation**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Submit amended SO and confirm no automatic DN/Invoice is finalised.

Grace reviews actual quantity.

Grace explicitly requests/generates DN and Invoice.

Review PDFs before sending.

Verify SQL records.

**Expected results**

No premature final document.

Explicit action creates the correct documents.

Quantities/prices match final approved values.

SQL sequence and IDs are valid.

**Evidence to capture**

State before request, Grace action, PDFs, SQL records.

**Failure handling**

If final documents appear prematurely or with provisional quantity, stop and treat as a sign-off blocker.

**Pass / Fail / Blocked decision**

Pass only with explicit control and correct SQL result.

**TEST T24 --- Duplicate and Invalid Document Prevention**

  -------------------------------------------- --------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove SQL/accounting constraints cannot be bypassed.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Grace with conductor observing; technical support must not create unsafe data.

  **Preconditions**                            Safe test order already invoiced; rollback/cleanup plan approved.

  **Test data**                                One completed SO/DN/Invoice.
  -------------------------------------------- --------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **duplicate and invalid document prevention**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Attempt the supported safe duplicate-invoice path.

Attempt an invalid quantity greater than the valid DN where safe.

Observe validation and SQL state.

**Expected results**

Duplicate/invalid submission is blocked.

Existing valid document remains unchanged.

No duplicate stock/financial movement.

**Evidence to capture**

Error message, activity/audit, SQL document list and stock state.

**Failure handling**

Never force an unsafe ERP write. If the test cannot be simulated safely, use verified internal evidence and mark client test Not Run.

**Pass / Fail / Blocked decision**

Pass when prevention is explicit and no bad record exists.

**TEST T25 --- Stock Movement Timing**

  -------------------------------------------- ----------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove stock does not move at SO, pick or draft DN and moves at Invoice/SCN only.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Grace; Lai observes.

  **Preconditions**                            SQL stock quantities recorded before test.

  **Test data**                                Tracked item/order.
  -------------------------------------------- ----------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **stock movement timing**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Record stock before SO.

Submit SO; recheck stock.

Confirm pick/draft DN; recheck stock.

Issue Invoice; recheck stock.

**Expected results**

No movement at SO/pick/draft DN.

Expected movement at Invoice.

Movement quantity equals final actual quantity.

**Evidence to capture**

SQL stock screenshots at each stage and document IDs.

**Failure handling**

Any early, duplicate or wrong-quantity movement is a stop condition.

**Pass / Fail / Blocked decision**

Pass only when timing and amount are exact.

**TEST T26 --- David Samsung Z Fold Approval**

  -------------------------------------------- -------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Close the named-device defect for the final approver.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   David.

  **Preconditions**                            Same browser/access method David normally uses; approval request ready.

  **Test data**                                One price or credit approval.
  -------------------------------------------- -------------------------------------------------------------------------

**Conductor introduction**

*We are testing **david samsung z fold approval**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Open notification on Z Fold in normal orientation.

Open the approval UI.

Review all values and controls.

Approve or reject.

Repeat after changing orientation if part of normal use.

**Expected results**

Mobile layout, not unusable desktop layout.

All controls visible and tappable.

Action completes and outcome returns to salesperson.

**Evidence to capture**

Screen recording, device/browser/version, outcome notification.

**Failure handling**

Do not pass using responsive emulation or another phone.

**Pass / Fail / Blocked decision**

Pass only on David's actual device.

**TEST T27 --- Krystle iPhone Rotation Recovery**

  -------------------------------------------- ----------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Close the portrait/landscape layout lock incident.

  **Sign-off importance**                      Must pass.

  **Client user holding the phone/keyboard**   Krystle.

  **Preconditions**                            iPhone 17 Pro Max and relevant page.

  **Test data**                                Any editable MAIA record.
  -------------------------------------------- ----------------------------------------------------

**Conductor introduction**

*We are testing **krystle iphone rotation recovery**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Open in portrait.

Rotate to landscape.

Return to portrait.

Navigate/edit/save.

Repeat once.

**Expected results**

Layout returns to correct portrait mobile view.

No desktop lock, hidden controls or stale sizing.

Edit saves.

**Evidence to capture**

Continuous screen recording and final record.

**Failure handling**

If layout remains locked, mark mobile regression Fail; refreshing is a workaround, not a Pass unless explicitly accepted.

**Pass / Fail / Blocked decision**

Pass only without manual recovery.

**TEST T28 --- Mobile Payment-Term Entry**

  -------------------------------------------- --------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Close the covered-input/no-scroll defect.

  **Sign-off importance**                      Must pass for mobile order/customer maintenance.

  **Client user holding the phone/keyboard**   Krystle or relevant finance/sales user.

  **Preconditions**                            No-term customer.

  **Test data**                                Customer with no default term.
  -------------------------------------------- --------------------------------------------------

**Conductor introduction**

*We are testing **mobile payment-term entry**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Open term field on mobile.

Scroll and select/enter term.

Save.

Reopen to verify.

**Expected results**

Banner does not cover the field.

Page scrolls normally.

Saved value persists.

**Evidence to capture**

Screen recording and reopened value.

**Failure handling**

Do not rotate or use desktop solely to bypass the defect and then mark mobile passed.

**Pass / Fail / Blocked decision**

Pass only on the intended mobile path.

**TEST T29 --- Chat Context Refresh After Web Edit**

  -------------------------------------------- ---------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove the bot uses the latest edited order state.

  **Sign-off importance**                      Must pass as platform regression.

  **Client user holding the phone/keyboard**   Krystle or Queenie.

  **Preconditions**                            Chat-surfaced web link and editable order.

  **Test data**                                Order with a field that can be visibly changed.
  -------------------------------------------- ---------------------------------------------------

**Conductor introduction**

*We are testing **chat context refresh after web edit**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Open record from chat.

Change quantity or another safe field in web UI.

Save and return to chat.

Ask MAIA to continue or summarise the order.

**Expected results**

Bot reloads and uses the new value.

No pre-edit value appears in action or document.

**Evidence to capture**

Before chat, edit screen/save, after chat response, final record.

**Failure handling**

If bot uses stale data, stop that order before any document submission.

**Pass / Fail / Blocked decision**

Pass only when the latest state is used.

**TEST T30 --- AR Exact Match**

  -------------------------------------------- --------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove easy payment matches are suggested but still require human confirmation.

  **Sign-off importance**                      Include only if AR is in this UAT.

  **Client user holding the phone/keyboard**   Grace/Finance.

  **Preconditions**                            Valid invoice, payment slip and bank line with exact identifiers.

  **Test data**                                Exact-match case.
  -------------------------------------------- --------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **ar exact match**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Upload/forward payment evidence and bank data.

Review the suggested customer/invoice.

Confirm the match.

Verify payment/knock-off result.

**Expected results**

Correct match suggested.

No posting before confirmation.

Confirmed payment updates the intended invoice only.

**Evidence to capture**

Source files, suggestion, confirmation, SQL/payment result.

**Failure handling**

Stop if the wrong invoice is suggested as certain or posted automatically.

**Pass / Fail / Blocked decision**

Pass when suggestion and confirmed result are correct.

**TEST T31 --- AR Ambiguous or Payer-Mismatch Case**

  -------------------------------------------- -------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove ambiguous payments remain under human control.

  **Sign-off importance**                      Include only if AR is in this UAT.

  **Client user holding the phone/keyboard**   Grace/Finance.

  **Preconditions**                            Ambiguous payer/customer or partial payment prepared.

  **Test data**                                Mismatch case.
  -------------------------------------------- -------------------------------------------------------

**Conductor introduction**

*We are testing **ar ambiguous or payer-mismatch case**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Upload the ambiguous evidence.

Observe confidence/flag.

Manually select the customer/invoice and allocation.

Confirm.

**Expected results**

No automatic posting.

User can choose the correct customer/invoice.

Partial/allocation result is accurate.

**Evidence to capture**

Ambiguous source, flag, manual selection, final result.

**Failure handling**

If MAIA auto-posts an ambiguous payment, stop finance testing.

**Pass / Fail / Blocked decision**

Pass only with explicit human confirmation.

**TEST T32 --- WhatsApp--Telegram Channel Parity**

  -------------------------------------------- --------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove behaviour tested on Telegram also works on the production channel.

  **Sign-off importance**                      Must pass for go-live.

  **Client user holding the phone/keyboard**   Queenie, CJ/David and Lai/Grace perform a representative subset.

  **Preconditions**                            WhatsApp verified; same build/config used.

  **Test data**                                Normal order, one approval, one handoff.
  -------------------------------------------- --------------------------------------------------------------------------

**Conductor introduction**

*We are testing **whatsapp--telegram channel parity**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Run the same representative actions on WhatsApp.

Compare draft, approval, notification and PDF behaviour with internal evidence.

Check message formatting and deep links.

**Expected results**

Functional behaviour and state are equivalent.

All links open correctly.

Notifications reach the same roles.

**Evidence to capture**

Side-by-side evidence and record IDs.

**Failure handling**

Telegram evidence cannot substitute for this test.

**Pass / Fail / Blocked decision**

Pass only on WhatsApp.

**TEST T33 --- ERP Integration Failure Safety**

  -------------------------------------------- -----------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prove a failed SQL push does not create false success or duplicate retry records.

  **Sign-off importance**                      Must pass through safe simulation/internal evidence.

  **Client user holding the phone/keyboard**   Conductor observes; technical support controls safe failure.

  **Preconditions**                            Approved failure simulation and cleanup plan.

  **Test data**                                One test order.
  -------------------------------------------- -----------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **erp integration failure safety**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Trigger or use a controlled integration failure.

Observe user message and record state.

Retry once after restoring access.

Check SQL for duplicates.

**Expected results**

User sees a clear failure/pending status.

No false "success" state.

Retry creates exactly one valid SQL record.

Audit records failure and recovery.

**Evidence to capture**

Error, MAIA state, retry, SQL document list, logs.

**Failure handling**

Never disconnect a live production dependency without approval. If safe simulation is unavailable, review verified internal evidence.

**Pass / Fail / Blocked decision**

Pass when failure is safe, visible and idempotent.

**TEST T34 --- SCN/CCN Scope Boundary**

  -------------------------------------------- ------------------------------------------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Prevent an excluded connector from being mistaken for a round-three defect or acceptance item.

  **Sign-off importance**                      Scope-control test, not product acceptance.

  **Client user holding the phone/keyboard**   Conductor explains; Grace confirms understanding.

  **Preconditions**                            Round-three scope document present.

  **Test data**                                NS-18 entry.
  -------------------------------------------- ------------------------------------------------------------------------------------------------

**Conductor introduction**

*We are testing **scn/ccn scope boundary**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

State that stock-reducing SCN/CCN is excluded from this round.

Record any client concern without attempting an unprepared live test.

Confirm the current SQL workaround and follow-up owner.

**Expected results**

Client understands exclusion.

Concern is recorded with owner.

No unsupported promise is made.

**Evidence to capture**

Scope acknowledgement and parking-lot entry.

**Failure handling**

If the client shows written evidence that it was promised for this round, stop and classify as commitment conflict.

**Pass / Fail / Blocked decision**

Pass as session control when classification is agreed; not a system Pass.

**TEST T35 --- Out-of-Scope Request Handling**

  -------------------------------------------- -----------------------------------------------------------------
  Field                                        Guidance

  **Business purpose**                         Keep UAT focused without dismissing legitimate client concerns.

  **Sign-off importance**                      Session-control requirement.

  **Client user holding the phone/keyboard**   Conductor.

  **Preconditions**                            Latest Scope Lock accessible.

  **Test data**                                One realistic request such as route planning, blasting or WMS.
  -------------------------------------------- -----------------------------------------------------------------

**Conductor introduction**

*We are testing **out-of-scope request handling**. The user should complete the normal task without being coached into a result. We will observe the on-screen result, notifications, documents and SQL effect.*

**User steps**

Acknowledge and restate the request.

Check the Scope Lock.

Classify as existing scope, deferred, out of scope or unresolved.

Record in parking lot with owner.

Return to current test.

**Expected results**

No on-the-spot scope/commercial commitment.

Request is not lost.

Session resumes.

**Evidence to capture**

Parking-lot entry and source reference.

**Failure handling**

If the source is unclear, mark unresolved rather than asserting out of scope.

**Pass / Fail / Blocked decision**

Pass when the request is accurately classified and controlled.

**PART 10 --- SESSION CONTROL AND ROOM MANAGEMENT**

**10.1 Operating Rules**

The client user performs the task; the conductor describes the scenario and observes.

Do not transform a UAT into training. A user who needs a short reminder may continue, but repeated coaching is evidence of a usability/training gap.

Developers may observe and answer factual questions, but the conductor controls the room and the sequence.

Use a **10--15 minute maximum live investigation** per issue. After that, capture, classify and move on only to independent scenarios.

Keep the defect, decision and parking-lot logs visible.

Read the expected result before each test; do not improvise it after seeing the outcome.

Never use a different device, channel or role to hide a failure in the intended path.

Separate "the system can do it" from "the assigned user can do it in the actual workflow."

Pause before creating or editing financial/stock records when the expected ERP effect is uncertain.

Require a named signatory and explicit verdict; positive comments are not sign-off.

**10.2 Decision Table**

  ------------------------------------------ ------------------------------------------------------------- ---------------------------- -----------------------------
  Situation                                  Conductor action                                              Continue?                    Escalate?

  One non-critical test fails                Capture evidence, classify, timebox investigation             Yes, independent tests       Owner after session

  Same critical test fails twice             Stop retrying; mark Fail                                      No for dependent chain       UAT lead + domain owner

  Integration is down                        Confirm outage and preserve state                             Only non-ERP tests           Product + SQL vendor

  Notification fails                         Stop downstream handoff acceptance                            Independent tests only       Notification owner / Ivan

  Wrong quantity/UOM appears                 Freeze order; do not create documents                         No                           Product + ERP owner

  Wrong price appears                        Prevent submission/customer document                          No for pricing/order         Pricing/product owner

  Wrong stock movement occurs                Stop immediately and quarantine records                       No                           ERP integration + finance

  Duplicate ERP document appears             Stop all document tests                                       No                           P0 escalation

  User cannot log in                         Check account/environment for max 10 minutes                  Other users only             Access owner

  Mobile page unusable                       Record actual device and orientation                          Non-mobile tests only        Front-end owner

  Client disputes expected behaviour         Open latest Scope Lock; do not argue from memory              Pause that test              Product/UAT lead

  Scope is unclear                           Mark unresolved commitment                                    Continue unrelated tests     Owner/PM

  New feature requested                      Record parking-lot item                                       Yes                          Product/sales after session

  Technical team gives conflicting answers   Conductor stops debate; records question                      Continue unrelated tests     UAT lead

  Session runs late                          Protect must-pass tests and closing decision                  Drop deferred tests          Signatory/UAT lead

  Final signatory absent                     Run evidence gathering if useful                              No final verdict             Onboarding PM + David

  Client confidence deteriorates             Pause, summarise facts and next decision                      Only with client agreement   Senior account owner

  Workaround bypasses intended path          Mark original test Fail/Blocked; test workaround separately   Conditional                  Signatory must accept
  ------------------------------------------ ------------------------------------------------------------- ---------------------------- -----------------------------

**10.3 Managing Participants**

**Dominant participant:**

*"I have captured that point. I need the person who performs this task daily to complete the next step so we can test the actual operating role."*

**Quiet operational user:**

*"Lai/Grace/Queenie, please show us how you would normally do this without our guidance. Your result is the acceptance evidence."*

**Side discussion:**

*"This is important but it does not affect the expected result of the current test. I'm placing it in the parking lot so we can finish the workflow."*

**Commercial question:**

*"I cannot change scope or commercials in UAT. We will route that question to the authorised commercial owner after the session."*

**Repeated training issue:**

*"We have now needed assistance more than once. I'm recording this as a usability/training outcome rather than continuing to coach the same result."*

**PART 11 --- FAILURE, WORKAROUND AND ESCALATION GUIDE**

**11.1 Consolidated Failure Map**

  ----------------------- -------------------------------------------------- -------------------------------- ---------------------------------- ---------------------------------------------------------- -------------------------- ---------------------------- --------------------------------
  Workflow stage          Failure symptom                                    Likely category                  Immediate action                   Approved workaround                                        Continue?                  Escalation owner             Sign-off impact

  WhatsApp intake         No response or different behaviour from Telegram   Channel/environment              Capture number, message and time   None; Telegram is rehearsal only                           Non-channel tests only     Ops/Tech TBC                 Blocker

  Customer/item mapping   Wrong record selected without warning              Product/master data              Freeze draft; preserve message     Human correction only if uncertainty was visible           Maybe                      Product/data owner TBC       Blocker if silent

  Territory access        Sales sees another rep's data                      Permission/security              Log out and stop access tests      None                                                       No for user/role testing   Security/product owner TBC   Blocker

  Normal price            Stale/wrong price                                  Configuration/data/product       Prevent submission                 None approved                                              No                         Pricing owner TBC            Blocker

  Price approval          Wrong approver or no message                       Notification/permission/mobile   Capture chain and logs             None                                                       Independent tests only     Notification/front-end       Blocker

  Credit gate             Almost all customers blocked                       Unresolved rule/data lag         Stop credit tests                  None until NS-20                                           Yes, unrelated             Ivan ↔ David                 Blocker

  SO→Lai                  Lai receives nothing                               Notification                     Capture submission and logs        Manual message does not pass test                          Unrelated only             Notification owner TBC       Blocker

  Actual quantity         Final docs retain requested quantity               Product/workflow                 Stop document creation             None                                                       No                         Product/ERP                  Blocker

  pcs/carton/box detail   UOM unsupported or breakdown lost                  Scope/custom build               Keep Excel if accepted             Proposed: retain Excel                                     Yes, core only             Tech lead + David/Grace      Conditional

  Pick-list print         Chinese/header missing                             PDF/template                     Save PDF and physical print        None approved for acceptance                               Other tests                PDF owner TBC                Blocker for warehouse

  Draft DN→Grace          No message/PDF                                     Notification                     Stop handoff acceptance            Manual search does not pass                                Unrelated only             Notification owner TBC       Blocker

  DN/Invoice              Generated automatically or wrong sequence          Product/ERP                      Freeze records                     None                                                       No                         Product/ERP                  Blocker

  Stock movement          Moves early or wrong amount                        ERP integration                  Stop immediately                   None                                                       No                         ERP + finance                P0

  Z Fold/iPhone           Desktop/covered/locked layout                      Mobile UI                        Record video and device data       Different device does not pass                             Non-mobile only            Front-end owner TBC          Blocker for role

  Chat context            Old values used after edit                         Platform                         Stop order before submit           Reopen/new chat may be a temporary path only if approved   Independent only           Chat/platform owner          Blocker if wrong docs possible

  AR exact match          Wrong invoice suggested/posted                     Product/data                     Stop finance test                  Manual SQL process remains outside MAIA                    Core order tests only      Finance/product              Blocker if auto-posted

  AR ambiguous            Auto-posts without confirmation                    Product/control                  Stop all AR tests                  Existing manual process                                    Yes, non-AR                Finance/product              Blocker for AR

  ERP push                False success or duplicate on retry                Integration                      Freeze and reconcile records       None                                                       No                         Product + SQL vendor         P0/P1

  SCN/CCN                 Rare stock case fails                              Excluded/known gap               Record; use existing SQL path      Existing SQL workaround                                    Yes, core                  Gareth/TBC                   Not round-three blocker

  POD                     User model disputed                                Requirement conflict             Exclude from test                  Current WhatsApp proof process                             Yes                        David                        Non-core

  Final verdict           No named signatory                                 Governance                       Record evidence but no verdict     None                                                       Session may finish         Onboarding PM + David        Blocks sign-off
  ----------------------- -------------------------------------------------- -------------------------------- ---------------------------------- ---------------------------------------------------------- -------------------------- ---------------------------- --------------------------------

**11.2 Workaround Classification**

**Approved or established operating paths**

SQL remains the master system.

Ambiguous AR matching remains human-confirmed.

Merchant/QR settlement and AP remain outside MAIA.

Existing SQL workaround remains for excluded SCN/CCN cases.

**Proposed --- client acceptance required**

Keep the Excel packing-list breakdown if AS-11 is not viable.

Use an agreed shared warehouse device if individual logins are not selected.

Continue current WhatsApp POD filing until David chooses a formal POD model.

**No valid workaround for acceptance**

Wrong price, quantity, stock movement or ERP document.

Territory/permission leakage.

Missing mandatory notification.

Actual WhatsApp channel not working.

Named mobile approver unable to act.

Premature or duplicate Invoice.

Unresolved credit enforcement rule.

**Workaround would invalidate the test**

Facilitator submits on behalf of the client user.

David approves the CJ tier instead of CJ.

Laptop replaces failed mobile approval.

Telegram replaces WhatsApp.

Manual WhatsApp message replaces system notification.

Manual SQL document creation replaces MAIA ERP push.

Refresh/new record hides stale-chat behaviour without retesting the original flow.

**PART 12 --- EVIDENCE AND DEFECT RECORDING**

**12.1 Evidence Required for Every Test**

Record:

Test ID, date and exact time.

Environment/build number.

User, role and device/browser/app.

Input message, source file or prepared test data.

Screen before action and screen after action.

Notification received by the intended role.

Approval/rejection and activity trail.

Generated PDF and physical print where relevant.

MAIA record ID and SQL document number.

Requested quantity, actual quantity, UOM and price.

SQL stock/financial result.

Pass, Fail, Blocked or Not Run.

Client comment in their own words.

Workaround acceptance, if any.

Owner, due date and retest requirement.

**12.2 Evidence Folder Structure**

  --------------------------------------------------------------
  Plaintext\
  UAT_2026-08-XX_MacroFrozen\
  ├── 01_Attendance_and_Scope\
  ├── 02_Test_Data\
  ├── 03_Passed_Tests\
  │ └── T##\_Scenario_Name\
  ├── 04_Failed_and_Blocked_Tests\
  │ └── T##\_Scenario_Name\
  ├── 05_PDFs_and_Physical_Prints\
  ├── 06_SQL_ERP_Evidence\
  ├── 07_Mobile_Device_Evidence\
  ├── 08_Notifications_and_Activity_Logs\
  ├── 09_Defects\
  ├── 10_Decisions_and_Parking_Lot\
  └── 11_Signoff

  --------------------------------------------------------------

**12.3 Defect Classification**

  ------------------------------------ -----------------------------------------------------------------------
  Classification                       Use when

  Product defect                       Code does not meet the agreed behaviour

  Configuration                        Product can support it but this account is set incorrectly

  Client master data                   Customer/item/price/term source is incomplete or wrong

  User permission                      Role has too much or too little access

  Integration                          MAIA--SQL communication or mapping fails

  Environment                          Wrong build, outage, credentials, network or test company

  Mobile/device                        Device/browser/orientation-specific failure

  Document/template                    PDF/print field, layout, font or pagination defect

  Notification                         Event, recipient, content, timing or activity trail is wrong

  Training/user understanding          Delivered flow works, but user cannot complete it without instruction

  Known limitation                     Agreed product boundary

  Deferred requirement                 Agreed, but outside current acceptance

  Out-of-scope request                 Explicitly excluded

  Unresolved decision                  Required business rule/authority is not decided

  Unclear --- investigation required   Symptom captured, cause not established
  ------------------------------------ -----------------------------------------------------------------------

**12.4 Severity Guide**

  ----------------------------- --------------------------------------------------------- -----------------------------------------------------------------------------
  Severity                      Definition                                                Example for Macro Frozen

  **P0 --- Stop/Unsafe**        Serious financial, stock, security or data risk           Wrong stock movement; duplicate ERP document; cross-territory data exposure

  **P1 --- Sign-off blocker**   Mandatory daily workflow cannot complete                  No approval notification; wrong actual quantity; unusable mobile approval

  **P2 --- Major**              Material issue with an accepted temporary path possible   AS-11 unavailable but Excel explicitly retained

  **P3 --- Minor**              Non-blocking usability/presentation issue                 Cosmetic spacing with no hidden fields

  **P4 --- Enhancement**        New improvement, not a defect                             Address search or contact-person database if not committed
  ----------------------------- --------------------------------------------------------- -----------------------------------------------------------------------------

**12.5 Defect Record Template**

  ----------- --------- ---------- ---------- -------- ---------- ---------------- ---------- ------------ ------- ------------- -----------------
  Defect ID   Test ID   Scenario   Expected   Actual   Evidence   Classification   Severity   Workaround   Owner   Retest date   Sign-off impact

                                                                                                                                 
  ----------- --------- ---------- ---------- -------- ---------- ---------------- ---------- ------------ ------- ------------- -----------------

**12.6 Decision Log**

  ---------- ------------ ----------- ---------- ------------- ----------
  Decision   Decided by   Date/time   Evidence   Reversible?   Impact

                                                               
  ---------- ------------ ----------- ---------- ------------- ----------

**12.7 Parking-Lot Register**

  --------- ----------- ----------------- ---------------- ---------------- --------- -----------
  Request   Raised by   Existing scope?   Classification   Source checked   Owner     Follow-up

                                                                                      
  --------- ----------- ----------------- ---------------- ---------------- --------- -----------

**PART 13 --- UAT CLOSURE AND SIGN-OFF**

**13.1 Before Asking for a Decision**

Read aloud or display:

Total tests and must-pass tests.

Passed, failed, blocked, not run and excluded counts.

Every P0/P1 issue.

Every workaround proposed and whether the client accepted it.

Known limitations disclosed at the start.

Unresolved decisions.

Deferred and out-of-scope requests.

Impact on Macro Frozen's daily workflow.

Whether each actual user could perform their own role.

Whether the actual channel, devices, printer and SQL integration were used.

**13.2 Decision Definitions**

**PASS**

All must-pass workflows pass on the agreed environment, channel, devices, roles and ERP path. Only accepted non-blocking issues remain.

**CONDITIONAL PASS**

The client explicitly accepts named conditions that do not prevent daily operation. Each condition must include:

exact issue/workaround;

owner;

approved due date;

retest requirement;

written acceptance;

statement that the workaround does not invalidate the accepted workflow.

**FAIL / NO SIGN-OFF**

Use when:

a mandatory workflow cannot operate;

quantity, price, financial or stock result is wrong;

required approval/notification fails;

the SQL integration path is unavailable or unsafe;

a required role cannot perform the task;

the actual WhatsApp/mobile path fails;

required tests remain Blocked;

the client rejects the workaround;

the final authority refuses or is unavailable to sign.

**13.3 Sign-Off Questions**

Does the demonstrated workflow reflect how Macro Frozen will operate?

Can Sales, CJ, David, Lai and Grace complete their daily responsibilities?

Are customer, item, quantity, UOM, price and payment-term results correct?

Are every required notification and handoff correct?

Are Pick List, DN and Invoice documents correct and usable?

Are SQL records and stock movements correct?

Are the disclosed limitations understood?

Are the named workarounds accepted?

Does any remaining issue prevent operational use?

Is the recorded outcome **Pass, Conditional Pass or Fail**?

**13.4 Session Outcome Record**

  --------------------------- --------- ---------------- ---------------------- --------- ---------- ------------------
  Area                        Result    Client comment   Condition/workaround   Owner     Due date   Retest required?

  Order intake                                                                                       

  Pricing                                                                                            

  Credit                                                                                             

  Notifications                                                                                      

  Warehouse/actual quantity                                                                          

  Documents/print                                                                                    

  SQL/stock                                                                                          

  Mobile                                                                                             

  AR                                                                                                 
  --------------------------- --------- ---------------- ---------------------- --------- ---------- ------------------

**13.5 Sign-Off Record**

**Client:** Macro Frozen Sdn. Bhd.\
**UAT date:**\
**Round:** Third UAT\
**Environment/build:**\
**Actual WhatsApp number used:**\
**Scope tested:**\
**Result:** Pass / Conditional Pass / Fail\
**Conditions:**\
**Known limitations acknowledged:**\
**Accepted workarounds:**\
**Open blockers:**\
**Client signatory:**\
**Authority/role:**\
**AutorunBiz PLT × MAIA signatory:**\
**Date/time:**\
**Evidence folder:**

**13.6 Post-Session Actions**

  ---------------------------------- ---------------------------------------- ------------------------------- --------------------------------------
  Action                             Owner                                    Required timing                 Evidence/output

  Circulate minutes and result       UAT conductor/PM **TBC**                 Confirm before session          Minutes with test counts and verdict

  Upload/lock evidence               Evidence owner **TBC**                   Same day                        Complete folder

  Create defects                     QA/product **TBC**                       Same/next business day          Tracker IDs

  Confirm severity/sign-off impact   UAT lead + product + client owner        Within approved review window   Updated defect table

  Resolve scope conflicts            Product/PM/authorised commercial owner   Before promise or retest        Written decision

  Confirm approved dates             Authorised delivery owner                After estimation                Client-safe plan

  Schedule retest                    PM **TBC**                               After fix evidence              Calendar + scoped retest list

  Obtain written acceptance          PM + named signatory                     At/after close                  Signed outcome

  Update go-live readiness           Deployment manager **TBC**               After verdict                   GO/Conditional/NO-GO record
  ---------------------------------- ---------------------------------------- ------------------------------- --------------------------------------

**PART 14 --- KNOWN GAPS, DISCLOSURES AND DO-NOT-PROMISE REGISTER**

**14.1 Consolidated Register**

  ------------------------------------- --------------------------------------- ---------------------------------------------- -------------------------------------------------------------------------------------------- ------------------------------------------ ------------------------------------------------ ------------------------ -------------------------
  Item                                  Current status                          Client impact                                  Disclosure wording                                                                           Approved workaround                        Readiness date                                   Sign-off impact          Owner

  Credit enforcement NS-20              Unresolved hard blocker                 False blocks or uncontrolled exposure          "We need David's written day-one rule before acceptance."                                    None                                       No approved date                                 Blocker                  Ivan ↔ David

  Notification owner DEP-3              Unassigned                              Locked events may not ship                     "Every event will be tested individually after ownership and configuration are confirmed."   None                                       No approved date                                 Blocker                  Ivan to assign

  WhatsApp DEP-4                        Pending verification                    Production channel unproven                    "Telegram results do not prove WhatsApp readiness."                                          None                                       No approved date                                 Blocker                  Ops/Tech TBC

  SQL integration DEP-1                 Open                                    No valid end-to-end result                     "We will not pass an ERP-dependent test without the SQL result."                             None                                       No approved date                                 Blocker                  Product + SQL vendor

  Named signatory DEP-2                 Open                                    No valid verdict                               "A named authorised signer is required before closing."                                      None                                       No approved date                                 Blocker                  PM + David

  AS-11 breakdown                       Agreed in principle; feasibility open   Excel evidence may be lost                     "Excel remains unless the replacement proves equivalent."                                    Retain Excel, client acceptance required   No approved date                                 Conditional              Tech lead + David/Grace

  Mobile defects                        Confirmed prior defects                 Approvers cannot act                           "We will close this only on the actual named devices."                                       None                                       Targeted in P1 window; pass evidence absent      Blocker                  Front-end TBC

  Pick-list PDF                         Confirmed prior defects                 Warehouse print unusable                       "We will inspect the physical print, not only the PDF."                                      None                                       Targeted in P0/P1 window; pass evidence absent   Blocker                  PDF owner TBC

  POD                                   Conflicting operating models            Added work/role confusion                      "POD is excluded until David selects one model."                                             Current WhatsApp filing                    No approved date                                 Non-core                 David

  SCN/CCN                               Connector untested                      Rare stock/credit case remains manual          "Separate test; excluded from this round."                                                   Existing SQL process                       No approved date                                 Non-core for round 3     Gareth/TBC

  AR workspace                          Agreed in principle                     Finance expectation may exceed current scope   "No approved readiness date is available."                                                   Existing finance process                   No approved date                                 Non-core                 Product TBC

  Near-expiry/low-stock configuration   Feature/mechanism incomplete            Wrong/no recipients or cadence                 "Threshold, recipient and cadence must be confirmed."                                        Manual SQL reporting                       No approved date                                 Depends on round scope   David

  Warehouse login model                 Unresolved                              Actual adoption cannot be proven               "David and Lai must choose individual or shared access."                                     Designated Lai device if accepted          No approved date                                 Affects AS-01            David/Lai

  Backup coverage                       No process                              Workflow stops when Lai/Finance absent         "This is an operational owner decision, not a product fix."                                  None confirmed                             No approved date                                 Go-live risk             David

  Delivery cutoff                       Conflicting 1pm/2pm rule                Wrong automation                               "Exact rule must be written before configuration."                                           Manual handling                            No approved date                                 Exclude until resolved   David
  ------------------------------------- --------------------------------------- ---------------------------------------------- -------------------------------------------------------------------------------------------- ------------------------------------------ ------------------------------------------------ ------------------------ -------------------------

**14.2 Do Not Promise Register**

Do not promise:

that all 5 August target fixes are complete or accepted;

a WhatsApp go-live date before verification;

removal of Excel before AS-11 acceptance;

any AR, catalogue, POD, report, contact-database or SCN/CCN date without approval;

automated WhatsApp broadcasting;

volume-tier pricing;

route optimisation or driver trip planning;

AP/QR settlement;

WMS/barcode/QR integration;

Facebook lead automation;

fleet GPS/temperature functionality;

invoice-mirrored CN numbering;

a specific credit tolerance/override rule before David decides;

a feature because it was discussed, when its Scope Lock status is only "agreed in principle" or "needs scoping";

that a workaround constitutes a passed original test.

**APPENDICES**

**APPENDIX A --- CLIENT ROLE DIRECTORY**

  ------------------- ----------------------------- ------------------------------------------------ ------------------------------ ---------------------------------------------------- ------------------------
  Person              Role                          Responsibilities                                 UAT tests                      Approval authority                                   Contact / availability

  David Chong         Owner/MD                      Overall coordination, price and credit control   T09, T12, T13, T26, sign-off   Final price/credit; sign-off not formally recorded   

  CJ Tan              Sales Manager                 Sales management, intermediate price tier        T08, T12, territory checks     Below-default/above-min price; no final credit       

  Queenie             Sales                         Standard order entry                             T02--T18 as applicable         None                                                 

  Ben                 Sales                         Assigned customers                               T04 backup/cross-check         None                                                 

  Grace               Finance Manager               DN/Invoice handoff, AR                           T18, T21--25, T30--31          Finance confirmation                                 

  Apple/Applle        Finance                       Credit limits/terms and finance settings         T05, T13 if authorised         **Must be clarified**                                

  Lai / Lim Jun Yan   Warehouse Manager             Pick list, actual quantity, warehouse handoff    T14--25                        Operational confirmation                             

  Krystle             Ops/Admin                     Coordination and mobile operations               T27--29                        None confirmed                                       

  Sean                Ops/IT Admin                  Setup support                                    T01/preflight                  None                                                 

  Driver              Delivery                      Proposed POD                                     Not core UAT                   No submit/cancel                                     

  Named signatory     Client acceptance authority   Calls final verdict                              Closing                        **Unknown**                                          
  ------------------- ----------------------------- ------------------------------------------------ ------------------------------ ---------------------------------------------------- ------------------------

**APPENDIX B --- GLOSSARY**

See §2.5. Add client-specific terms discovered during the session below.

  -------------------- -------------------- --------------------
  Term                 Client meaning       Confirmed by

                                            
  -------------------- -------------------- --------------------

**APPENDIX C --- TEST DATA PREPARATION SHEET**

  ------------------------------- ---------------------------------- ----------------- ---------------
  Data type                       Required characteristics           Record selected   Verified by

  Normal customer                 Assigned, within credit and term                     

  Price-exception customer/item   Known default/minimum                                

  Credit-exception customer       Deterministic rule breach                            

  kg/carton/pcs items             Real Macro Frozen UOM cases                          

  Variable-weight line            Multiple unequal boxes                               

  Chinese item                    Printed description                                  

  Exact/ambiguous payments        Realistic finance cases                              
  ------------------------------- ---------------------------------- ----------------- ---------------

**APPENDIX D --- DEVICE AND ACCOUNT CHECKLIST**

  ---------- ------------------- ------------- ---------- ---------------- ----------
  User       Device              Browser/app   Account    Permission       Tested

  David      Samsung Z Fold                               Final approval   

  Krystle    iPhone 17 Pro Max                            Mobile edit      

  CJ         Mobile device                                Price approval   

  Queenie                                                 Sales            

  Lai        PC/shared device                             Warehouse        

  Grace                                                   Finance          
  ---------- ------------------- ------------- ---------- ---------------- ----------

**APPENDIX E --- DEFECT LOG TEMPLATE**

  ----- ------ ---------- ---------------- ---------- -------- ---------- ------------ ------- ----- -------- --------
  ID    Test   Severity   Classification   Expected   Actual   Evidence   Workaround   Owner   Due   Retest   Impact

                                                                                                              
  ----- ------ ---------- ---------------- ---------- -------- ---------- ------------ ------- ----- -------- --------

**APPENDIX F --- DECISION LOG TEMPLATE**

  ---------- -------------------- ------------ ----------- ---------- ----------
  Decision   Options considered   Decided by   Date/time   Evidence   Impact

                                                                      
  ---------- -------------------- ------------ ----------- ---------- ----------

**APPENDIX G --- SIGN-OFF TEMPLATE**

**Macro Frozen Third UAT Outcome**

**Date/time:**

**Environment/build:**

**Scope tested:**

**Must-pass tests passed:**

**Must-pass tests failed/blocked:**

**Accepted workarounds:**

**Known limitations:**

**Outcome:** Pass / Conditional Pass / Fail

**Conditions and dates:**

**Client signatory / role:**

**AutorunBiz PLT × MAIA signatory / role:**

**Evidence folder:**

**Client statement**

*I confirm that the outcome and conditions above accurately record the UAT session. I understand which items passed, which are conditional, deferred or out of scope, and which issues prevent operational use.*

Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**APPENDIX H --- ONE-PAGE CONDUCTOR CHECKLIST**

**Before Session**

Exact date, scope, build and signatory confirmed.

NS-20 credit rule written.

Notification owner and event evidence confirmed.

WhatsApp and SQL integration proven.

User accounts, devices and printer tested.

Actual test data prepared.

Known gaps and wording approved.

Defect, decision and parking-lot logs open.

**During Opening**

Introduce as AutorunBiz PLT × MAIA.

State the business workflow being proven.

Confirm each user and final signatory.

Disclose known gaps before testing.

Explain evidence, timebox and decision rules.

**During Every Test**

State scenario, user and expected result.

Client user holds the device.

Capture input, result, notification, PDF and SQL evidence.

Mark Pass/Fail/Blocked immediately.

Do not coach into a Pass.

**When a Test Fails**

Capture evidence before retry.

Protect financial/stock records.

Timebox investigation to 10--15 minutes.

Classify issue and impact.

Continue only with independent tests.

Do not promise a date.

**Before Closing**

Reconcile test counts.

Review P0/P1 and blocked tests.

Confirm accepted workarounds and conditions.

Separate deferred/out-of-scope requests.

Ask the ten sign-off questions.

Record Pass/Conditional Pass/Fail.

**After Session**

Lock and upload evidence.

Circulate minutes and outcome.

Create defects and decisions.

Confirm owners and approved dates.

Schedule retests.

Update go-live readiness.

**Final Readiness Statement**

As of the evidence cut-off, Macro Frozen's core workflow is well enough defined to prepare a disciplined third UAT, but **not sufficiently proven to recommend running it as an acceptance session yet**. The third UAT should be scheduled only after the eight readiness gates in §1.9 are closed; otherwise use the time as an internal rehearsal or a client working session, not a sign-off event.

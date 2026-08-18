**03Aug26_MacroFrozen_Operational_UAT_Conductor_Pack**

**Macro Frozen --- Operational UAT Conductor Pack**

**Evidence cut-off:** 29 July 2026\
**Controlling sources:** *Macro Frozen --- Scope Lock v3* and *Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3*. Both are marked draft; Scope Lock v3 supersedes v2. No later verified regression evidence was supplied.

**PART 1 --- UAT COMMANDER DASHBOARD**

**1. Session Mission**

  -------------------------------- ----------------------------------------------------------------------------------------------------------------------------------
  Item                             Operational position

  **Client**                       Macro Frozen Sdn Bhd, frozen-food wholesaler/distributor.

  **Objective**                    Prove the WhatsApp-to-SQL Accounting flow: correct order, controls, warehouse actuals, finance documents and auditable handoffs.

  **Round**                        Third UAT.

  **Date / location**              Window: **11--14 August 2026**. Exact date, time and location: **Unknown --- Must Be Clarified**.

  **Recommended duration**         **5 hours 15 minutes**, including break and sign-off review.

  **Readiness**                    **NO-GO on available evidence.** Critical rules and dependencies remain unresolved or unproven.

  **Final signatory**              **Unknown --- Must Be Clarified.** The second UAT recorded no formal verdict or named signer.

  **Internal lead / escalation**   **Unknown --- Must Be Clarified.** Ivan is named only for the credit decision with David.
  -------------------------------- ----------------------------------------------------------------------------------------------------------------------------------

Scope Lock v3 places the project post-second-UAT/pre-third-UAT and identifies credit enforcement and notification ownership as blockers. fileciteturn10file0

**2. Client Priorities**

  ------------------------------------ --------------------------------------------------------------- --------------------------------------------------------------- ---------------------------------------------------------------
  Client Priority                      Why It Matters                                                  How the Client May Test It                                      Sign-Off Impact

  Final quantity and ERP correctness   Picked weight often differs from ordered weight.                Amend actuals; inspect DN, Invoice, stock and SQL.              **Blocker** if wrong.

  Picking proof and usable documents   Paper/Excel currently proves what was picked and checked.       Print the pick list; inspect breakdown, text and headers.       **Blocker** if unusable; workaround acceptance may be needed.

  Price control                        Prices are market-driven and customer-specific.                 Test normal, intermediate and below-minimum prices.             **Blocker** if price or approver is wrong.

  Credit and visible escalation        Silent blocks previously damaged confidence.                    Trigger amount/term failures and observe assignment/override.   **Blocker**.

  Real devices and handoffs            David, Lai and Grace rely on mobile, notifications and print.   Use named phones; verify Lai/Grace events.                      **Blocker** for mandatory actions.
  ------------------------------------ --------------------------------------------------------------- --------------------------------------------------------------- ---------------------------------------------------------------

The priorities reflect confirmed discovery and second-UAT reactions. fileciteturn10file1 fileciteturn12file8

**3. Non-Negotiable Acceptance Criteria**

An authorised salesperson can create, correct and submit an SO through the agreed live channel using correct SQL-derived data.

All three price tiers route correctly; unauthorised pricing cannot complete.

Credit amount/term rules are written, applied consistently, notified and auditable.

Sales and warehouse visibility restrictions work.

Mandatory approval, SO, warehouse and finance notifications reach only intended recipients.

Final quantity/UOM, DN, Invoice, stock and SQL records are correct, sequenced and non-duplicated.

Intended users can complete mandatory work on the actual channel, devices and printed outputs.

**4. Critical Pre-UAT Gates**

Confirm date, location, attendees, duration and final signer.

Identify the tested build/environment; attach current P0/P1 regression evidence.

Verify and smoke-test the WhatsApp number.

Prove ERP Integration access and SQL test-company results.

Sign off credit mode, overdue tolerance and override authority.

Assign notification ownership and prove every mandatory event.

Prepare actual accounts and retest David's Z Fold and Krystle's iPhone.

Select deterministic pricing, credit, quantity, Chinese-text and document data.

**PART 2 --- CLIENT AND WORKFLOW BRIEF**

**1. Client Snapshot**

Macro Frozen distributes frozen food to wholesale and retail customers.

Orders mainly arrive through WhatsApp and may use informal product wording that staff translate into the correct item.

Warehouse staff cut, pick and weigh goods. Actual weight can differ from requested weight, so final commercial documents must reflect the confirmed quantity.

The current operation relies on WhatsApp groups, route-grouped paper pick lists, handwritten actuals, Excel and SQL Accounting.

Pricing is market-driven and customer-specific; David is the central price controller and final authority for the lowest-price tier.

SQL Accounting remains the customer/item and accounting master. MAIA must not create invalid document sequences, quantities, stock effects or duplicate records.

Silence is interpreted as failure: blocked orders and operational handoffs must visibly reach the responsible person. fileciteturn10file1

**2. What Makes This Client Different**

**Requested quantity is not necessarily invoice quantity.** The warehouse's confirmed weight is commercially decisive.

**Units are mixed.** Orders may be expressed in kg or cartons; pieces and per-box breakdown remain conditional.

**Customer language is informal.** Correct customer/item mapping must survive shorthand and spelling variation.

**Pricing is controlled outside the ERP today.** UAT must prove the latest price source, floor and approval ladder.

**Human control must remain visible.** David does not want silent automation changing prices, credit or documents.

**Physical operations matter.** A browser-only pass is insufficient if mobile approvals or printed pick lists fail.

**3. Current Workflow**

  ------------------------------------------------------------------------------
  Plaintext\
  CUSTOMER\
  Sends order through WhatsApp, often in informal wording\
  ↓\
  SALES\
  Interprets customer, item, quantity and delivery requirement\
  ↓\
  DAVID / OFFICE\
  Coordinates orders and prepares the operational order information\
  ↓\
  WAREHOUSE\
  Receives route-grouped paper pick list\
  Cuts, picks and weighs the goods\
  \[MANUAL --- actual quantity and checks recorded on paper\]\
  ↓\
  GRACE / FINANCE\
  Uses confirmed information to create DN and Invoice in SQL Accounting\
  ↓\
  DELIVERY\
  Goods delivered; proof and cash information may remain in WhatsApp or Excel\
  ↓\
  FINANCE\
  Matches payments and updates SQL Accounting

  ------------------------------------------------------------------------------

Current pain points include interpretation errors, differences between requested and picked quantity, weak picker/checker traceability, pricing outside the system, manual payment records and dependence on David. fileciteturn10file1

**4. Intended MAIA Workflow**

  ----------------------------------------------------------------------------
  Plaintext\
  CUSTOMER\
  Sends WhatsApp order\
  ↓\
  SALESPERSON\
  Forwards order to the single MAIA WhatsApp number\
  Reviews/corrects MAIA draft SO\
  ↓\
  CUSTOMER + ITEM + ROLE CHECK\
  Correct SQL-derived records and authorised visibility?\
  ├── No → stop and correct mapping/permission\
  └── Yes\
  ↓\
  PRICE CHECK\
  Normal/approved price ─────────────────────────────→ Continue\
  Below default, at/above minimum ──────────────────→ CJ approval\
  Below minimum ────────────────────────────────────→ David approval\
  ↓\
  CREDIT + PAYMENT-TERM CHECK\
  Pass ─────────────────────────────────────────────→ Continue\
  Fail ─→ assign/notify approver ─→ David decision ─→ record override\
  ↓\
  SALESPERSON\
  Submits SO\
  ↓\
  MAIA\
  Sends submitted SO/PDF to Lai\
  ↓\
  WAREHOUSE\
  Picks and confirms actual quantity\
  \[MANUAL PAPER/EXCEL MAY REMAIN --- mechanism must be agreed before UAT\]\
  ↓\
  MAIA\
  Updates the confirmed order and sends the finance handoff\
  ↓\
  GRACE / FINANCE\
  Explicitly requests DN and Invoice\
  ↓\
  ERP INTEGRATION --- SQL ACCOUNTING\
  Creates valid records in the allowed sequence\
  Stock moves only at the confirmed Invoice/SCN point\
  ↓\
  FINAL OUTPUT\
  Correct documents, traceable approvals and auditable handoffs

  ----------------------------------------------------------------------------

The core order-to-cash path is locked, but the detailed fresh-weight upload and picked-quantity-breakdown mechanism remains agreed in principle rather than fully locked. fileciteturn11file2 fileciteturn9file4

**5. Role and Decision Map**

  ------------------------------------ ------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------- ----------------------------------------------
  Person / Role                        What They Must Do During UAT                                                                Decision Authority                                                                                    Mandatory?

  **David --- Owner/MD**               Perform below-minimum price and final credit-override actions; validate business control.   Final below-minimum price and credit approver.                                                        **Yes**

  **CJ --- Sales Manager**             Perform intermediate price approval and validate sales workflow.                            Approves below-default but at/above-minimum price. Credit-setting authority requires clarification.   **Yes**

  **Queenie or Ben --- Salesperson**   Enter and submit real orders; prove customer isolation and usability.                       No final exception authority.                                                                         **Yes --- at least one actual sales user**

  **Lai --- Warehouse/Logistics**      Receive submitted SO, use/inspect pick output and confirm the actual-quantity process.      Operational acceptance of warehouse handoff; backup is undefined.                                     **Yes if warehouse flow is in scope**

  **Grace --- Finance Manager**        Validate DN/Invoice generation, documents and SQL Accounting results.                       Finance-process acceptance; not recorded as final UAT signer.                                         **Yes**

  **Apple --- Finance**                Validate payment terms and finance customer settings if included.                           **Conflicting Sources:** credit-limit authority overlaps with CJ in the current evidence.             As required; conflict must be resolved first

  **Krystle --- Ops/Admin**            Retest the known iPhone rotation/layout failure.                                            No recorded final acceptance authority.                                                               Required for named-device retest

  **Named client signatory**           Review results and record Pass, Conditional Pass or Fail.                                   Final UAT acceptance.                                                                                 **Yes --- currently unknown**
  ------------------------------------ ------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------- ----------------------------------------------

The role evidence identifies David, CJ, Queenie, Grace, Lai, Apple and Krystle, while also showing that warehouse voice is thin and credit-setting authority is not fully consistent across sources. fileciteturn10file1 fileciteturn11file4

**PART 3 --- UAT EXECUTION PLAN**

**1. Session Sequence**

  ---------------------------------------------------------------
  Plaintext\
  OPENING\
  Confirm participants, signer, scope and known gaps\
  ↓\
  1. ENVIRONMENT GATE\
  Build → WhatsApp → Login → Permissions → Notifications → ERP\
  ↓\
  2. BASE ORDER\
  Salesperson → real customer/item → draft → review → submit\
  ↓\
  3. PRICE CONTROLS\
  Normal → CJ tier → David tier\
  ↓\
  4. CREDIT CONTROLS\
  Within limit → amount/term failure → override\
  ↓\
  5. HANDOFFS\
  SO to Lai → approval/block events → finance event\
  ↓\
  6. WAREHOUSE ACTUALS\
  kg/carton → picked actual → confirmed order\
  ↓\
  7. DOCUMENTS AND ERP\
  DN → Invoice → SQL records → stock\
  ↓\
  8. DEVICE AND OUTPUT\
  Z Fold → iPhone rotation → PDF → physical print\
  ↓\
  9. OPTIONAL ITEMS\
  Only after mandatory blocks pass\
  ↓\
  10. REVIEW AND SIGN-OFF\
  Pass / Conditional Pass / Fail

  ---------------------------------------------------------------

**2. Ordered Test Blocks**

  ------- ---------------------------- ----------------------------------------------------------------------------------- ------------------------------- --------------------------------------- ------------------------------------------------------------ ---------- ----------------------------------------------------------------------------------- ----------------------------------------------------------
    Order Test Block                   Outcome                                                                             Primary User                    Others                                  Preconditions / Data                                           Duration Expected Result                                                                     If It Fails

        1 Environment/channel/access   Correct build, users, WhatsApp, permissions, notifications and ERP are available.   Each named user                 Conductor, tech, Grace                  Build ID; accounts; WhatsApp; SQL company                        20 min All mandatory access and role paths work.                                           Stop dependent tests.

        2 Standard order/mapping       A salesperson creates and submits the correct SO.                                   Queenie or Ben                  CJ; Lai available                       Assigned customer; normal-price kg item; realistic wording       30 min Correct customer, item, UOM, term and price; no data exposure.                      Stop that order and later dependent blocks.

        3 Pricing ladder               Price exceptions cannot bypass authority.                                           Salesperson; CJ/David approve   Conductor                               Normal, intermediate and below-minimum records                   35 min Normal continues; CJ and David receive their correct tiers; decisions are logged.   Stop affected exception path; normal order may continue.

        4 Credit/terms                 Written credit and term rules block and escalate correctly.                         Salesperson; David decides      CJ/Apple after role resolution; Grace   Within-limit, over-limit and overdue customers                   35 min Correct rule, approver, notification and override record.                           Stop credit-dependent orders.

        5 Notifications/handoffs       No mandatory step becomes silent.                                                   Salesperson, Lai, Grace         David/CJ                                Configured recipients; approved SO and exception                 25 min Correct event, PDF/context and audit trail; no wrong recipient.                     Stop dependent handoff; independent tests may continue.

        6 Warehouse/actual quantity    Final operational quantity remains correct and traceable.                           Lai                             Salesperson, Grace                      kg/carton items; variable actuals; agreed capture method         45 min Ordered context and actual quantity/UOM are preserved for finance.                  Stop DN/Invoice for that order.

        7 DN/Invoice/ERP               SQL Accounting receives valid records from the confirmed order.                     Grace                           Lai, tech                               Confirmed order; SQL access; known stock/numbering result        40 min Correct DN/Invoice; no duplicate/invalid record; correct stock timing.              Stop all ERP, stock and finance acceptance.

        8 Mobile/PDF/print             Mandatory work is usable on real devices and paper.                                 David, Krystle, Lai             Grace                                   Z Fold; iPhone; printer; Chinese item                            30 min Mobile approval works; Chinese text and full header print.                          Stop affected device/warehouse acceptance.

        9 Optional finance/secondary   Only a formally included secondary workflow is assessed.                            Grace/Apple                     Tech                                    Written inclusion and prepared data                              25 min Tested item is clearly Passed, Failed or Deferred.                                  Do not delay core verdict unless formally mandatory.

       10 Review/sign-off              A clear decision and conditions are recorded.                                       Named signer                    All owners                              Completed results and issue list                                 30 min Explicit Pass, Conditional Pass or Fail.                                            No signer means no acceptance.
  ------- ---------------------------- ----------------------------------------------------------------------------------- ------------------------------- --------------------------------------- ------------------------------------------------------------ ---------- ----------------------------------------------------------------------------------- ----------------------------------------------------------

**3. Dependency and Stop Logic**

  -------------------------------------------------------------------------------
  Plaintext\
  Block 1 fails → stop all dependent functional tests.\
  Block 2 fails → stop Blocks 3--7 for that order.\
  Block 3 fails → stop exception-price paths; normal order may continue.\
  Block 4 fails → stop credit-dependent orders; do not invent a rule.\
  Block 5 fails → stop its approval or handoff path.\
  Block 6 fails → stop DN/Invoice for that order.\
  Block 7 fails → stop ERP, stock and finance acceptance.\
  Time runs short → drop Block 9 first; protect Blocks 3, 4, 6, 7 and sign-off.

  -------------------------------------------------------------------------------

**4. Session Timing**

Recommended total: **5 hours 15 minutes**.

  --------------------------------------------------------------
  Plaintext\
  Opening and Blocks 1--3 100 min\
  Block 4 35 min\
  Break 15 min\
  Blocks 5--8 140 min\
  Optional Block 9 25 min\
  Review and sign-off 30 min

  --------------------------------------------------------------

For a half-day session, remove Block 9 and defer non-mandatory demonstrations. Do not compress pricing, credit, quantity, ERP or sign-off.

**5. Conductor Instructions**

**Before:** confirm signer, users and escalation owners; record build/environment/channel/SQL company; verify test data; disclose approved limitations; confirm result-recording method.

**During each block:** state the business outcome; let the real client user operate; confirm the expected result first; observe rather than coach; record Pass, Fail or Blocked before moving on.

**On failure:** capture evidence first; check approved scope; retry once only where safe; timebox investigation to 10--15 minutes; use only approved workarounds; stop dependent blocks and escalate.

**Before closing:** reconcile all mandatory blocks; separate defects, data/configuration issues, unresolved requirements and new requests; record workaround conditions and owners; obtain an explicit decision.

**PART 4 --- ACCEPTANCE, RISK AND ESCALATION**

**1. Acceptance Boundaries**

  --------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Category                                      Included Items

  **Must Pass for Sign-Off**                    Core salesperson order entry; correct customer/item/role visibility; price tiers; written credit/term control; required notifications; correct final quantity and UOM; DN/Invoice and SQL Accounting integrity; mandatory mobile and physical-document usability.

  **May Enter Hypercare**                       Only explicitly accepted, non-blocking cosmetic or convenience issues that do not affect data, approvals, permissions, documents, mobile completion or warehouse work. No item is pre-approved for hypercare in the supplied evidence.

  **Requires Explicit Workaround Acceptance**   The warehouse actual-quantity capture mechanism where paper/Excel remains; picked-quantity breakdown/pcs support under AS-11; any retained Excel packing-list process. Retaining Excel must not be recorded as a product Pass.

  **Deferred / Future Phase**                   Catalogue, quotation, customer PO mechanism, cost/buying-price workflow, driver/POD, accelerated AR workspace, broader dashboards/reminders, SKU replacement until its approval route is defined, and SCN/CCN connector acceptance for this round.

  **Out of Scope**                              AP reconciliation, merchant/QR settlement, automated WhatsApp blasting, full route/trip planning, WMS/barcode/QR, packing-list Excel OCR, supplier purchase-invoice stock entry, customer announcement blasting, Facebook leads and fleet telemetry.
  --------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The Scope Lock distinguishes locked core controls from agreed-in-principle items and explicitly excludes SCN/CCN from round-three acceptance while retaining several warehouse and driver mechanisms as unresolved. fileciteturn10file0 fileciteturn12file6

**2. Consolidated Risk, Gap and Response Map**

  --------- ----------------------------- ------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------- ----------------------------------- ---------------------------------------------------------------------------- ---------------------------------------------------------------------------- ------------------------------------------- ---------------------------------------------------
  Risk ID   Workflow Point                What May Fail / Known Gap                                                                                           Client Impact                                                                Current Status                      Conductor Action                                                             Approved Workaround / Disclosure                                             Continue?                                   Escalate To

  **R1**    Credit control                Warn-only versus hard block, overdue tolerance and override authority are unresolved; SQL payment knock-off lags.   False blocks, unsafe overrides or inconsistent orders.                       **Confirmed**                       Require written rule and configured evidence before Block 4.                 None --- stop the affected workflow. No approved date; do not estimate.      Unrelated tests only                        Ivan ↔ David

  **R2**    Notifications                 Direction is locked, but ownership and shipped evidence were not supplied.                                          Silent block or missed Lai/Grace handoff repeats the client's complaint.     **Verify Before UAT**               Prove every mandatory event and recipient before dispatch.                   Disclosure wording must be approved before UAT; no bypass Pass.              No dependent handoff                        Assigned notification owner --- currently unknown

  **R3**    Live channel                  Second UAT ran on Telegram because WhatsApp verification was pending.                                               The purchased operating channel remains unproven.                            **Not Yet Tested**                  Smoke-test the actual WhatsApp number, accounts and message flow.            Telegram is not an approved substitute for acceptance.                       No channel-dependent tests                  Technical/operations owner --- unknown

  **R4**    ERP Integration               SQL vendor access remained open.                                                                                    DN, Invoice, stock and finance outcomes cannot be accepted.                  **Verify Before UAT**               Confirm access, health check, test company and rollback/safety controls.     None --- stop the affected workflow.                                         Non-ERP tests only                          Product lead / SQL vendor owner

  **R5**    Mobile operation              David's Z Fold, Krystle's rotated iPhone and a mobile payment-term field failed previously.                         Approvers or finance users cannot complete daily work.                       **Verify Before UAT**               Retest the named devices on the release build before and during UAT.         None for mandatory mobile roles; desktop substitution is not a Pass.         Independent tests only                      Technical owner --- unknown

  **R6**    Pick-list output              Chinese text and company header failed on physical print.                                                           Warehouse output may be unreadable or incomplete.                            **Verify Before UAT**               Print the real template before the session and repeat with Lai.              None approved. No approved date; do not estimate.                            Non-print tests only                        Document/template owner --- unknown

  **R7**    Actual quantity / breakdown   AS-11 feasibility and presentation are not locked; pcs is tied to the same mechanism.                               Excel-removal promise may be exposed; customer/internal proof may be lost.   **Confirmed**                       State the tested boundary and use pcs only after explicit inclusion.         Proposed: retain Excel if infeasible; explicit client acceptance required.   Yes, if accepted and correctly classified   Product lead / David / Grace

  **R8**    Authority and closure         No final signer is named; CJ/Apple credit-setting roles conflict across evidence.                                   The room may be unable to decide or may apply the wrong authority.           **Conflicting Sources**             Resolve role matrix and name the signer before UAT.                          None --- do not improvise authority.                                         No affected approval or sign-off            Account lead / David

  **R9**    Warehouse adoption            Warehouse voice is thin; Lai's backup and MAIA access model are unresolved.                                         A technically correct flow may be rejected operationally.                    **Unknown --- Must Be Clarified**   Confirm Lai's attendance, access, actual method and backup before Block 6.   Current paper/Excel may remain only as an explicitly accepted boundary.      Core sales tests may continue               David / Lai / account lead
  --------- ----------------------------- ------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------- ----------------------------------- ---------------------------------------------------------------------------- ---------------------------------------------------------------------------- ------------------------------------------- ---------------------------------------------------

R1--R4 come directly from the Scope Lock's blocking items and deployment dependencies. R5--R7 are confirmed second-UAT defects or scope gaps. R9 reflects the VoC's explicit coverage limitation and the unresolved backup/access model. fileciteturn10file0 fileciteturn12file2 fileciteturn12file8

**3. Stop and Escalation Rules**

**Wrong price or financial value:** stop that order and all dependent documents. Unrelated usability tests may continue.

**Wrong quantity or UOM:** stop DN/Invoice for that order. Do not "correct it later" and mark the flow Passed.

**Invalid stock movement or duplicate/invalid ERP document:** stop every ERP and finance block; preserve evidence and escalate immediately.

**Restricted-data exposure or wrong-role access:** pause the whole session until exposure is contained and the impact is assessed.

**Critical approval or notification failure:** stop the dependent exception or handoff; normal independent flows may continue only where no control is bypassed.

**Same mandatory workflow fails twice:** stop live troubleshooting after the controlled retry and move only to independent blocks.

**Expected behaviour contradicts approved scope:** pause the affected test; classify it as an unresolved requirement rather than choosing a convenient answer.

**No authorised final signer:** complete result review, but do not record UAT acceptance.

**4. Do Not Promise**

A fix, go-live or readiness date that has not been approved.

That Telegram proves WhatsApp readiness.

That desktop completion proves a mandatory mobile workflow.

Removal of Excel or paper before the AS-11/warehouse mechanism is accepted.

Driver/POD, AR acceleration, SCN/CCN, catalogue or route-planning delivery as part of this UAT.

A credit rule or approver that has not been confirmed in writing.

That a bypassed control or manual workaround counts as a product Pass.

**5. Sign-Off Decision**

**PASS**

All mandatory business workflows pass using the intended users, WhatsApp channel, named devices, printed outputs and ERP Integration.

**CONDITIONAL PASS**

Only explicitly accepted non-blocking issues remain. Each condition has a named owner, written workaround or limitation, due/retest requirement and client acceptance.

**FAIL / NO SIGN-OFF**

A mandatory workflow fails, remains blocked, is tested through a substitute path, or cannot be safely validated.

**Current recommendation: NO-GO.** As of the evidence cut-off, the credit-enforcement rule, notification ownership/proof, WhatsApp verification, ERP access, final signer and known device/document fixes were not shown as closed by verified regression evidence. The core design may be stable, but dispatching a conductor before these gates close would make the client session a discovery exercise rather than UAT. fileciteturn10file0 fileciteturn11file2

**PART 5 --- SUPPORTING REFERENCES**

  --------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------
  Supporting Document                                                                     When the Conductor Should Open It

  **Macro Frozen --- Scope Lock v3 (29 Jul 2026)**                                        Confirm whether a behaviour is locked, agreed in principle, unresolved, deferred or out of scope.

  **Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3 (29 Jul 2026)**   Understand why the client reacts strongly to quantity, pricing, notifications, Excel, devices and printed documents.

  **Approved round-three detailed UAT checklist**                                         Execute the exact scenarios and record Pass/Fail/Blocked. **Not supplied with the current evidence set.**

  **Round-three test-data and account sheet**                                             Find the selected customers, items, prices, credit states, devices, logins and expected SQL results. **Must be completed before UAT.**

  **Latest P0/P1 regression evidence**                                                    Confirm that the NO-GO gates and previous mobile/print defects have actually cleared. **Not supplied.**

  **Defect and known-issue tracker**                                                      Check current status, ownership and retest evidence without debating from memory.

  **ERP Integration health evidence**                                                     Confirm SQL vendor access, test company, document sequence and stock validation before Block 7.

  **Session control, escalation and sign-off sheet**                                      Find the exact date/location, conductor, technical contacts, final client signer and written outcome form. **Must be completed before UAT.**
  --------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------

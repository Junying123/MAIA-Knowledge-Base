**Mackessen_MAIA_UAT_Preparation_Checklist**

**MAIA --- UAT Preparation Checklist**

**Project:** Mackessen × MAIA UAT\
**Client:** Mackessen\
**Scope baseline:** Scope Lock v3.1 dated **13 July 2026**\
**Build stage:** Late UAT / pre-go-live remediation\
**Generated from:** Voice of Customer dossier, Scope Lock v3.1, and the detailed Mackessen UAT checklist

**1. Readiness verdict**

**NOT READY** for unrestricted distribution to a broad tester group.

The locked scope and test design are strong: **35 testable locked items** and **112 black-box test cases** are traceable. Full execution is still blocked by the final role-permission matrix, unnamed test accounts, missing controlled records for several high-risk rules, and missing logistics such as the test window and support channels. Targeted missions that do not depend on permissions or seeded history may begin after environment access is confirmed.

**2. Missing project information**

  -------------------------------------------------- ---------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------- ---------------------------------
  Missing item                                       Why it matters                                                                                                   Required action                                                                                                            Blocking?

  \[NEEDS INPUT: ISSUED_DATE\]                       Testers need to know which guide version is current.                                                             Add the distribution date and version owner.                                                                               No

  \[NEEDS INPUT: TEST_WINDOW\]                       Scheduled **9:00 AM** checks, multi-role tests, and cutover checks need coordinated timing.                      Publish the start/end date and reserved scheduled-test dates.                                                              Yes for full run

  \[NEEDS INPUT: ENVIRONMENT_AND_ACCESS\]            Testers cannot begin without the correct URL, Telegram bot, credentials, and environment label.                  Provide the UAT URL, Telegram bot entry point, login method, and environment name.                                         Yes

  \[NEEDS INPUT: INPUT_DOCS_FOLDER\]                 PO, photo, PDF, invoice, and COA missions require controlled inputs.                                             Provide the shared folder and access rights.                                                                               Yes for document missions

  \[NEEDS INPUT: CURRENT_INPUT_FOLDER_CONTENTS\]     The team must know which files are approved and which are still missing.                                         Publish a short current-content list with file owners.                                                                     Yes for extraction/COA missions

  \[NEEDS INPUT: SYSTEMS_TESTERS_CANNOT_ACCESS\]     Black-box testers must know what must be handed off rather than inspected directly.                              Name inaccessible systems. At minimum, do not require testers to inspect SQL, APIs, queues, server logs, or source code.   No, if handoffs are clear

  \[NEEDS INPUT: BUG_REPORTING_CHANNEL\]             Failures and observations need one traceable destination.                                                        Provide channel/tool, required fields, and urgent escalation route.                                                        Yes for governed UAT

  \[NEEDS INPUT: SUPPORT_CHANNEL\]                   Testers need a five-minute blocker escalation path.                                                              Provide channel and named support rota.                                                                                    Yes

  \[NEEDS INPUT: UAT_OWNER\]                         Maye is identified as the client approval/sign-off coordinator, but the internal execution owner is not named.   Confirm the internal UAT lead and clarify Maye\'s sign-off authority.                                                      Yes for final sign-off

  \[NEEDS INPUT: TIME_BUDGET_PER_TESTER\]            Mission allocation depends on the available testing window.                                                      Set the expected time per tester or squad.                                                                                 No

  \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\]            Multi-role and scheduled tests may require live help.                                                            Provide screen-share method, support hours, and urgent-contact method.                                                     No

  \[NEEDS INPUT: ANYTHING_ELSE_TESTERS_MUST_KNOW\]   Final distribution may require project-specific safety, availability, or coordination notes.                     Add any remaining tester instruction, or explicitly state **None**.                                                        No

  Final role-permission matrix                       This is the only formal client-input blocker in Scope Lock v3.1.                                                 Obtain client approval for create, edit, submit, approve, override, cancel, export/download, and view rights by role.      **Yes**
  -------------------------------------------------- ---------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------- ---------------------------------

**3. Environment and access**

  --------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------ ---------------------------------- ---------------------------- -----------------------
  Requirement                             Exact condition                                                                                                                                            Role/account                                                 Missions                           Status                       Owner

  UAT web environment                     Clearly labelled non-production environment unless the authorised live-cutover mission is running.                                                         All testers                                                  M-01, M-04--M-20                   \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Telegram access                         Current go-live channel; each participating Telegram identity must be linked to the correct MAIA account.                                                  Sales, Finance, Irene/Credit Controller, operational users   M-02, M-03, M-18, BF-02            \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Unlinked Telegram identity              One controlled account must remain unlinked to prove access refusal without exposing data.                                                                 Negative-test account                                        M-02                               \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Role-separated accounts                 Separate accounts must exist for Sales User, Sales Manager, Logistics, Finance Manager, Credit Controller, Admin, Management, and any Supply Chain role.   Named roles                                                  Permission missions across guide   **Blocked by role matrix**   Client + product team

  Live-SQL-labelled cutover environment   Production connection must be unmistakably identified; test-only data must not appear.                                                                     Admin + client PIC                                           M-20, BF-06                        \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Safe reset capability                   UAT-created CPOs, SOs, items, alerts, and test settings must be removable or clearly marked.                                                               Product team/Admin                                           All data-changing missions         \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Evidence access                         Testers can capture screenshots, visible IDs, timestamps, and downloaded documents without exposing unrelated client data.                                 All testers                                                  All missions                       \[NEEDS INPUT\]              \[NEEDS INPUT\]
  --------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------ ---------------------------------- ---------------------------- -----------------------

**4. Client-specific configuration**

  --------------------------- ----------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------- ------------------------------------ -------------------------- -----------------------------------------------------
  Configuration               Required state                                                                                                                      Visible tester impact                                                                           Missions                             Can tester self-service?   Status

  Current channel             Telegram enabled; WhatsApp unavailable is not a go-live failure.                                                                    Orders and chatbot queries work through Telegram.                                               M-02, M-03, M-18, BF-02              No                         \[NEEDS INPUT\]

  SQL authority               Customer, item, price, credit, payment terms, documents, invoice PDFs, and tax values are sourced from SQL.                         MAIA never invents or silently keeps conflicting production values.                             M-01, M-04--M-07, M-12, M-17, M-20   No                         \[NEEDS INPUT\]

  Customer-specific pricing   At least one customer/item pair has a known customer price; one pair has no configured price.                                       Correct price auto-fills; missing price is visibly flagged.                                     M-05                                 No                         \[NEEDS INPUT\]

  Minimum-price approval      Finance Manager, Credit Controller, Sales Manager, and Admin are configured as permitted approvers.                                 Permitted role succeeds; Sales User is refused.                                                 M-05                                 No                         Blocked by role matrix

  Credit-limit enforcement    Credit block fires at **SO submission**, not invoice stage.                                                                         Over-limit SO stops immediately; authorised override is logged.                                 M-06, BF-03                          No                         \[NEEDS INPUT\]

  Payment-term rules          COD unpaid blocks; 30-day alerts day 31/blocks day 61; 60-day alerts day 61/blocks day 91; reminders repeat every 14 days.          Correct warning/block is visible at each boundary.                                              M-07                                 No                         \[NEEDS INPUT\]

  Warning acknowledgement     Non-blocking warnings require acknowledgement and activity logging.                                                                 Order proceeds after acknowledgement; log shows user, time, warning, and order.                 M-08                                 No                         \[NEEDS INPUT\]

  Stock behaviour             Low/zero stock is informational and must not block order submission.                                                                Stock warning may appear, but submission remains possible.                                      M-08                                 No                         \[NEEDS INPUT\]

  Stock alerts                Editable thresholds; website and Telegram alerts to Irene/Logistics; **9:00 AM** stock summary.                                     Correct recipients receive low/out-of-stock alerts and a single daily summary.                  M-09                                 Partly, Admin only         \[NEEDS INPUT\]

  Delivery alert              More than three full days delayed triggers website/chatbot alert; completion or valid reschedule clears it.                         No alert at exactly three days; alert clears only at valid resolution.                          M-10                                 No                         \[NEEDS INPUT\]

  Operational digest          **9:00 AM** digest includes unpaid invoices, inactive customers, unclosed SOs, reorder reminders, and partial-delivery reminders.   All five categories appear once using current generic logic.                                    M-11                                 No                         \[NEEDS INPUT\]

  Partial delivery            Remaining quantity stays open and Irene receives daily reminders until full delivery or authorised closure.                         Outstanding quantity and reminder lifecycle remain visible.                                     M-10                                 No                         \[NEEDS INPUT\]

  Invoice source              MAIA exposes the original SQL invoice PDF, not a MAIA substitute.                                                                   Downloaded invoice matches the prepared visible reference.                                      M-12, BF-05                          No                         \[NEEDS INPUT\]

  Invoice approval            Single-level only for go-live.                                                                                                      One valid approval completes the requirement; unauthorised approval is refused.                 M-12                                 No                         Blocked by role matrix

  Document-date edit          Defaults to creation day; Sales User and Sales Manager may edit where configured, with audit history.                               Valid authorised change succeeds; invalid/unauthorised change fails safely.                     M-13                                 Partly                     \[NEEDS INPUT\]

  Surcharge handling          Surcharges are active SQL SKU items, not free-text charges.                                                                         Correct SKU posts once; missing/inactive SKU is flagged.                                        M-13                                 No                         \[NEEDS INPUT\]

  Credit-note controls        Finance/Admin issue only after physical return quantity confirmation; Sales requests only; invoice batch numbers carry over.        Role refusal and batch traceability are visible.                                                M-14                                 No                         Blocked by role matrix/data

  Item creation               Finance/Admin only.                                                                                                                 Sales/Logistics are refused; duplicate/invalid code is rejected.                                M-15                                 No                         Blocked by role matrix

  COA matching                COA indexed by item, lot/batch, supplier, date and linked to the correct DO/invoice.                                                Missing or mismatched index data does not silently link.                                        M-16                                 No                         \[NEEDS INPUT\]

  C3 boundary                 Batch-level exemption only; no item-quantity reservation or separate product-level allocation.                                      Correct batch is traceable; excluded allocation controls do not appear as required behaviour.   M-17                                 No                         \[NEEDS INPUT\]

  E-invoice boundary          Mackessen continues e-invoice in SQL.                                                                                               MAIA does not duplicate or overwrite the SQL process.                                           M-17                                 No                         \[NEEDS INPUT\]

  Finance chatbot             Available through current scope with role-based data access.                                                                        Finance sees permitted data; Sales does not see restricted finance details.                     M-18                                 No                         Blocked by role matrix

  Stress-test target          Mix text, photo, PDF, document requests, corrupt file, and concurrent users.                                                        No crash, loss, duplicate, or context mixing.                                                   BF-02                                No                         \[GAP: duration/count and numeric response target\]
  --------------------------- ----------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------- ------------------------------------ -------------------------- -----------------------------------------------------

**5. Inputs and test data**

  ------- ----------------------------------------- ------------------------------- ------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------- ------------------------ ---------------------------------------------------------------
  ID      Requirement                               Classification                  Required condition                                                                                                              How tester obtains it                                                           Alternative                                                                                  Missions                 Missing-item action

  TD-01   Reserved complete customer                PREPARED / SEEDED INPUT         Visible name, address, contact number, email, TIN, valid delivery address, normal credit/terms.                                 Product team publishes a reserved record label and expected visible fields.     Another reserved complete customer with the same conditions.                                 M-01, M-03, M-04         Ask support for a record; do not invent customer data.

  TD-02   MK-221 item                               TESTER MAY SELF-DISCOVER        Code **MK-221**, description **Food Grade Phosphate**, active and orderable.                                                    Search through the normal product interface.                                    Another product only when the mission does not require the MK-221 reference.                 M-01, M-03, M-04, M-05   Capture visible code/description; ask support if unavailable.

  TD-03   Representative PO pack                    PROVIDED INPUT                  At least 10 representative PDFs plus expected customer and item-line answers; clear photo and text examples included.           Approved input folder.                                                          Equivalent client-approved PO/photo that preserves format coverage.                          M-03, BF-02              Blocked --- Test Data.

  TD-04   Previously corrected extraction example   PREPARED / SEEDED INPUT         A known wrong mapping has been corrected and retained for the agreed learning interval.                                         Product team supplies the case and expected corrected mapping.                  None.                                                                                        M-03                     Blocked --- Configuration/Test Data.

  TD-05   Duplicate PO records                      TESTER MAY SAFELY CREATE        Unique reserved customer and PO numbers that no other tester is using.                                                          First tester creates the initial CPO; second attempt reuses same customer+PO.   Product team seeds the initial CPO.                                                          BF-01                    Reserve new identifiers; after five minutes ask support.

  TD-06   Customer-specific price pair              PREPARED / SEEDED INPUT         One pair with known visible expected price; one pair with missing price.                                                        Product team publishes the customer/item and expected visible price.            Equivalent seeded pair.                                                                      M-05                     Blocked --- Test Data.

  TD-07   Below-minimum-price scenario              PREPARED / SEEDED INPUT         Known minimum threshold and order line below it.                                                                                Product team provides the test price and approver accounts.                     Equivalent seeded item.                                                                      M-05                     Blocked --- Configuration.

  TD-08   Over-limit customer                       PREPARED / SEEDED INPUT         Credit limit exceeded; source example used RM30,000 limit and RM32,000 exposure, but production UAT values must be confirmed.   Product/client team publishes the visible scenario.                             Equivalent seeded customer.                                                                  M-06, BF-03              Blocked --- Test Data.

  TD-09   Payment-term boundary customers           PREPARED / SEEDED INPUT         COD unpaid; 30-day day 31/day 61; 60-day day 61/day 91.                                                                         Product team seeds controlled invoice ages.                                     None; exact history is essential.                                                            M-07                     Blocked --- Test Data.

  TD-10   Low/zero-stock items                      PREPARED / SEEDED INPUT         One item below threshold and one at zero; visible code/description/quantity reference provided.                                 Admin/product team prepares or reserves records.                                Admin may safely set a UAT threshold if authorised.                                          M-08, M-09               Blocked --- Test Data/Configuration.

  TD-11   Delayed and partial delivery records      PREPARED / SEEDED INPUT         One delivery at exactly 3 days, one over 3 days, and one SO with 1,000 kg ordered/600 kg delivered.                             Product team seeds dated records.                                               Tester may create partial delivery only if normal role and timing can be simulated safely.   M-10                     Blocked --- Test Data.

  TD-12   Digest dataset                            PREPARED / SEEDED INPUT         Visible records for all five digest categories.                                                                                 Product team seeds before the scheduled run.                                    Existing records only if each category is visibly identifiable.                              M-11                     Blocked --- Test Data.

  TD-13   SQL invoice/PDF reference                 PREPARED / SEEDED INPUT         Known invoice number, customer, lines, tax, total, and approved PDF reference.                                                  Product/client team supplies visible expected values.                           Another approved SQL invoice.                                                                M-12, BF-05              Blocked --- Dependency.

  TD-14   Active surcharge SKU                      PREPARED / SEEDED INPUT         Confirmed code, description, amount/rule, posting and tax treatment.                                                            Product/client team publishes the record.                                       Another active approved surcharge SKU.                                                       M-13                     Blocked --- Test Data.

  TD-15   Invoice with batch split and return       PREPARED / SEEDED INPUT         Example: 500 kg across two or more known invoice batches; confirmed physical-return workflow.                                   Product team seeds invoice and role states.                                     Equivalent invoice with multiple batches.                                                    M-14                     Blocked --- Test Data.

  TD-16   New-item test codes                       PREPARED / SEEDED INPUT         One unique UAT code and one existing duplicate code; cleanup method agreed.                                                     Admin/product team reserves codes.                                              Equivalent clearly prefixed UAT code.                                                        M-15                     Blocked --- Test Data.

  TD-17   COA pack                                  PROVIDED INPUT                  Valid COA plus missing-index and mismatched-batch variants; related DO/invoice references.                                      Approved input folder.                                                          Product team may prepare synthetic redacted PDFs using grounded UAT values.                  M-16                     Blocked --- Test Data.

  TD-18   C3 batch                                  PREPARED / SEEDED INPUT         Confirmed exempt batch and expected visible tax/exemption result; non-exempt mismatch batch.                                    Product/client team provides.                                                   None.                                                                                        M-17                     Blocked --- Test Data.

  TD-19   Existing SQL e-invoice record             PREPARED / SEEDED INPUT         Already processed in SQL with visible MAIA status/reference.                                                                    Product/client team provides.                                                   Equivalent approved record.                                                                  M-17                     Blocked --- Dependency.

  TD-20   Role-linked finance and sales accounts    PREPARED / SEEDED INPUT         Finance may access permitted finance data; Sales must be refused restricted data.                                               Product team supplies separate credentials.                                     None.                                                                                        M-18                     Blocked --- Access.

  TD-21   Stress pack and concurrent users          PREPARED / SEEDED INPUT         Mixed valid requests, corrupt/unsupported file, two active conversations, unique request identifiers.                           Product team prepares pack and participants.                                    Approved equivalent pack.                                                                    BF-02                    Blocked --- Test Data/Access.

  TD-22   Live cutover evidence set                 PRODUCT-TEAM SUPPORT REQUIRED   Three live customers, three live items, three live invoices, one test-only record, and one controlled transaction.              Product/client team executes within authorised cutover window.                  No safe tester-created alternative.                                                          M-20, BF-06              Blocked --- Environment/Dependency.
  ------- ----------------------------------------- ------------------------------- ------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------- ------------------------ ---------------------------------------------------------------

**6. Documents and reference inputs**

  -------- ------------------------------ ------------------------------------------ -------------------------------------------------------------------------- ------------------------------- ------------------------------------------------ -----------------
  ID       Document/input needed          How it is obtained                         Exact file or description                                                  Missions                        Alternative                                      Status

  DOC-01   Clear PO PDF pack              Approved shared folder                     At least 10 representative POs with expected extraction answers.           M-03, BF-02                     Equivalent client-approved pack                  \[NEEDS INPUT\]

  DOC-02   Clear order photo              Approved shared folder                     Legible photo or handwritten order using valid UAT customer/items.         M-03, BF-02                     Equivalent approved image                        \[NEEDS INPUT\]

  DOC-03   Unreadable/cropped input       Product team prepares safe variant         Blurred or cropped copy with missing customer/PO/item fields.              M-03                            Another intentionally unreadable approved file   \[NEEDS INPUT\]

  DOC-04   Corrupt/unsupported file       Product team prepares non-sensitive file   One file that the bot must reject without affecting later requests.        BF-02                           Another approved unsupported format              \[NEEDS INPUT\]

  DOC-05   Original SQL invoice PDF       Product/client team provides reference     Invoice with visible expected number, customer, lines, tax, and total.     M-12, BF-05                     Another approved invoice                         \[NEEDS INPUT\]

  DOC-06   COA set                        Approved shared folder                     Valid, missing-index, and mismatched-batch COA variants.                   M-16                            Redacted grounded UAT variants                   \[NEEDS INPUT\]

  DOC-07   Final role-permission matrix   Client approval                            Create/edit/submit/approve/override/cancel/export/download/view by role.   Permission tests across guide   None                                             **BLOCKING**
  -------- ------------------------------ ------------------------------------------ -------------------------------------------------------------------------- ------------------------------- ------------------------------------------------ -----------------

**Generated safe text inputs**

Use only after replacing bracketed fields with a reserved visible UAT record.

**Normal text order template**

*Please create an order for **\[reserved UAT customer\]**, PO **\[unique reserved PO number\]**, for **25 kg of MK-221 --- Food Grade Phosphate**, delivery on **\[valid date\]**.*

**Ambiguity challenge**

*Please order **25 kg of roasted chicken seasoning** for **\[reserved UAT customer\]**.*

The observed phrase is grounded in earlier UAT evidence, but the exact candidate SQL codes must be verified before execution. The expected behaviour is clarification or review, not a guessed mapping.

**Short-response challenge**

*Show unpaid invoices for **\[reserved test customer\]**.*

**7. Role and permission setup**

  ------------------------------- -------------------------------------------------- ------------------------------------------ ----------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------- ---------------------------
  Client role                     Product role                                       Account needed                             Permitted actions                                                                                                 Refused actions to test                                                                                                            Missions                                     Status

  Sales user                      Sales User                                         Named UAT account + linked Telegram        Create/review orders, submit valid SO, request credit note, edit allowed document date.                           Approve own price exception, override credit/payment block, issue credit note, create item code, access restricted finance data.   M-01--M-08, M-13--M-15, M-18, BF-01--BF-05   Blocked by matrix/account

  Sales manager                   Sales Manager                                      Named UAT account                          Approve below-minimum price; edit allowed document date.                                                          Actions not granted by final matrix.                                                                                               M-05, M-13                                   Blocked by matrix/account

  Logistics                       Logistics                                          Named UAT account                          Create DO from valid SO, update delivery, manage partial fulfilment, receive operational alerts.                  Create DO from blocked/draft SO, create product codes, issue credit note.                                                          M-01, M-08--M-10, M-19                       Blocked by matrix/account

  Credit controller (Irene)       Credit Controller                                  Irene UAT account with linked Telegram     Approve/override credit when role is present; receive configured alerts.                                          Bypass after role is removed; access beyond final matrix.                                                                          M-06, M-09--M-11                             Blocked by matrix/account

  Finance manager                 Finance Manager                                    Named UAT account                          Minimum-price approval, credit override, permitted invoice/finance actions.                                       Any action absent from final matrix.                                                                                               M-05--M-07, M-12, M-18                       Blocked by matrix/account

  Finance/Admin                   Admin or Finance role                              Separate named accounts if rights differ   Issue credit note after return confirmation, create product codes, maintain approved settings, invoice actions.   Sales-only or ungranted actions; issue CN before confirmation.                                                                     M-12--M-17, M-20                             Blocked by matrix/account

  Supply chain                    \[GAP: map client role to product role/account\]   Named UAT account                          Upload/index/link COA where permitted.                                                                            Link mismatched COA or use ungranted actions.                                                                                      M-16                                         **Gap**

  Management                      Management                                         Named UAT account                          View lifecycle/status and management information.                                                                 Operational changes not granted by matrix.                                                                                         M-01, M-19                                   Blocked by matrix/account

  Client UAT coordinator (Maye)   \[GAP: product role, if any\]                      Sign-off access/process                    Coordinate evidence review and client approval.                                                                   Final sign-off without complete evidence/role coverage.                                                                            M-19                                         Process gap
  ------------------------------- -------------------------------------------------- ------------------------------------------ ----------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------- ---------------------------

**8. Fallback and remediation setup**

  --------------------------------------- --------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------ ----------------------------------------------------------------- ------------------------------
  Failure/blocker                         Approved fallback                                                           Tester action                                                                                    Product-team action                                               Missions

  Required input missing                  Use only a mission-approved equivalent; otherwise apply five-minute rule.   Record mission ID, search attempted, visible state, and screenshot; mark blocked and continue.   Supply/reserve controlled input.                                  All

  Telegram unavailable                    Continue unrelated web missions. This is not proof of automatic failover.   Log Telegram issue separately; do not pretend the website is automatic recovery.                 Restore bot or reschedule bot missions.                           M-02, M-03, M-18, BF-02

  Unknown customer/item                   No manual invention or silent substitution.                                 Keep unsubmitted; capture prompt/error and ask support.                                          Correct master data or provide valid record.                      M-01, M-03, M-04

  SQL-backed data unavailable             No guessing and no submission using unknown authoritative values.           Capture availability/sync message and mark dependency/environment blocker.                       Restore connection or provide approved visible reference.         M-04--M-07, M-12, M-17, M-20

  Permission refusal                      Treat as Pass only when the mission expects refusal.                        Capture role/account, action, and refusal message.                                               Correct role assignment if refusal contradicts approved matrix.   Permission missions

  Bot rejects corrupt file                Later valid requests must still work.                                       Capture the file error and the next successful request.                                          Investigate if bot stalls/crashes or mixes context.               BF-02

  Duplicate/concurrent record collision   Use reserved identifiers; never reuse another tester\'s active record.      Stop, reserve a new record, and note collision.                                                  Maintain reservation sheet and cleanup.                           BF-01, M-01, M-10

  Out-of-scope request                    Log Observation --- Out of Scope, not defect.                               Point to Scope Boundaries and continue.                                                          Clarify only if product gives misleading in-scope promise.        All

  Unsafe production action                No workaround.                                                              Stop before submission and mark Blocked --- Environment/Dependency.                              Execute with client approval or seed a safe UAT equivalent.       M-20, BF-06
  --------------------------------------- --------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------ ----------------------------------------------------------------- ------------------------------

**9. Team coordination**

**Recommended tester squads**

**Order Capture Squad:** Sales User + Sales Manager. Own M-01--M-05 and BF-01/BF-04.

**Controls and Finance Squad:** Credit Controller + Finance Manager + Admin. Own M-06--M-08, M-12--M-15, M-17--M-18, BF-03/BF-05.

**Fulfilment and Quality Squad:** Logistics + Supply Chain. Own M-09--M-11 and M-16.

**Governance and Cutover Squad:** Management + Maye + product/client technical owners. Own M-19--M-20 and BF-06.

**Cross-functional regression group:** Two Sales users plus support. Own BF-02 and concurrent BF-01.

**Coordination rules**

**Support channel:** \[NEEDS INPUT: SUPPORT_CHANNEL\]

**Bug channel:** \[NEEDS INPUT: BUG_REPORTING_CHANNEL\]

**Remote support:** \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\]

**Time budget:** \[NEEDS INPUT: TIME_BUDGET_PER_TESTER\]

**Urgent blocker owner:** \[NEEDS INPUT: internal UAT owner\]; Maye coordinates client approval/sign-off.

**Five-minute blocker rule:** after five minutes, record the correct blocked reason and move to another mission.

**Record reservation:** maintain a simple shared list of customer, PO number, order, invoice, item code, batch, tester, and reservation time. Do not use a record reserved by another tester.

**Scheduled runs:** reserve separate dates for the **9:00 AM** stock summary and operational digest.

**Cleanup/reset owner:** \[NEEDS INPUT\]. This owner removes or labels UAT records, restores thresholds/roles, and confirms no test-only data remains after cutover.

**10. Blocking gaps**

**Final client-approved role-permission matrix** and corresponding role-separated accounts.

**Environment/access pack:** UAT URL, Telegram bot, login method, account list, and environment label.

**Governance pack:** test window, bug channel, support channel, internal UAT owner, and sign-off route.

**Controlled high-risk data:** pricing, minimum price, credit, payment-term history, scheduled alerts/digest, invoice PDF, batch return, surcharge, C3, COA, and cutover records.

**Document input folder** with approved PO/photo/PDF/corrupt-file/COA assets and expected answers.

**Stress-test definition:** duration/count and any numeric response-time acceptance threshold.

**Locked-rule clarifications needed for execution:** correction-learning interval, exact digest-selection configuration, final recipient list, legal document-date edit states, COA matching precedence, and named single-level invoice approver(s).

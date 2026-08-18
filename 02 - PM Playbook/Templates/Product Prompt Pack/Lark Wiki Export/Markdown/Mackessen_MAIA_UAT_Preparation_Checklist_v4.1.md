**Mackessen_MAIA_UAT_Preparation_Checklist_v4.1**

**MAIA --- UAT Preparation Checklist**

**Project:** Mackessen × MAIA UAT\
**Client:** Mackessen\
**Scope baseline:** Scope Lock v3.1 dated **13 July 2026**\
**Prompt version:** UAT Infopack Generator v4.1 --- Atomic Tester Missions\
**Build stage:** Late UAT / pre-go-live remediation

**1. Readiness verdict**

**NOT READY** for unrestricted tester distribution.

The source pack contains **35 testable locked scope items** and **112 source test cases**, now expanded into **149 atomic tester missions**. Testing is still materially blocked by missing environment/access details, controlled test records, scheduled-run arrangements, and the final client-approved role-permission matrix. Missions with fully available accounts and data may begin independently.

**2. Missing project information**

  ------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------- --------------------------------------
  Missing item                                     Why it matters                                                                                                              Required action                                                                                                  Blocking?

  \[NEEDS INPUT: ISSUED_DATE\]                     Identifies the current distributed guide.                                                                                   Add issue date and document owner.                                                                               No

  \[NEEDS INPUT: TEST_WINDOW\]                     Scheduled 9:00 AM, reminder, concurrent, and cutover missions require coordination.                                         Publish start/end dates and reserved scheduled-test times.                                                       Yes for full run

  \[NEEDS INPUT: ENVIRONMENT_AND_ACCESS\]          Every mission names an account but testers still need the URL, Telegram entry point, login method, and environment label.   Publish access instructions for the approved UAT environment.                                                    Yes

  \[NEEDS INPUT: INPUT_DOCS_FOLDER\]               Text/photo/PDF, invoice, COA, and supported-document missions need controlled files.                                        Provide the shared folder and access rights.                                                                     Yes for document missions

  \[NEEDS INPUT: CURRENT_INPUT_FOLDER_CONTENTS\]   Testers must know the exact approved files and expected references.                                                         Publish a concise approved-input list.                                                                           Yes for extraction/document missions

  \[NEEDS INPUT: SYSTEMS_TESTERS_CANNOT_ACCESS\]   Black-box testers must know which checks require a handoff.                                                                 Confirm inaccessible systems; do not require testers to inspect SQL, APIs, queues, logs, or code.                No if handoffs are assigned

  \[NEEDS INPUT: BUG_REPORTING_CHANNEL\]           Failures need one governed destination.                                                                                     Provide channel/tool and required bug fields.                                                                    Yes for governed UAT

  \[NEEDS INPUT: SUPPORT_CHANNEL\]                 Atomic missions use a five-minute blocker rule.                                                                             Provide channel and named support rota.                                                                          Yes

  \[NEEDS INPUT: UAT_OWNER\]                       Internal execution ownership is not named.                                                                                  Name the internal UAT owner; retain Maye as client sign-off coordinator where approved.                          Yes for final sign-off

  \[NEEDS INPUT: TIME_BUDGET_PER_TESTER\]          Mission allocation depends on available tester time.                                                                        Set expected minutes or missions per tester.                                                                     No

  \[NEEDS INPUT: REMOTE_TESTING_SUPPORT\]          Concurrent, permission, scheduled, and cutover tests may need screen sharing.                                               Publish support method and hours.                                                                                No

  Final role-permission matrix                     It is the only formal client-input blocker in Scope Lock v3.1.                                                              Obtain approval for create, edit, submit, approve, override, cancel, export/download, and view rights by role.   **Yes**
  ------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------- --------------------------------------

**3. Environment and access**

  ---------------------------- --------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------- -----------------------
  Requirement                  Exact condition                                                                                                                               Role/account                         Missions                                                                                                                                                                                             Status                       Owner

  UAT web environment          Clearly labelled non-production environment except during the authorised live-cutover campaign.                                               All role accounts                    All missions                                                                                                                                                                                         \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Telegram bot access          Linked identities for Sales, Finance, Credit Controller/Irene, and operational users.                                                         Linked Telegram accounts             M-007, M-008, M-009, M-010, M-011, M-012, M-013, M-014, M-015, M-120, M-121, M-122, M-016, M-017, M-018, BF-001, BF-002, BF-003                                                                      \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Unlinked Telegram identity   One controlled unlinked identity that cannot expose customer/order data.                                                                      Negative-test account                M-007, M-008, M-009                                                                                                                                                                                  \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Role-separated accounts      Separate Sales, Sales Manager, Logistics, Finance Manager, Credit Controller, Admin, Management, Supply Chain, and UAT coordination access.   Named role accounts                  Permission and handoff missions                                                                                                                                                                      **Blocked by role matrix**   Client + product team

  Scheduled-run capability     Prepared 9:00 AM runs and reminder checkpoints without waiting days in real time.                                                             Irene/Logistics/Finance/Management   M-045, M-046, M-047, M-048, M-049, M-050, M-051, M-052, M-053, M-054, M-055, M-056, M-057, M-069, M-070, M-071, M-072, M-073, M-074, M-075, M-076, M-077, M-078, M-079, M-080, M-081, M-082, M-083   \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Live-cutover environment     Production connection clearly identified; test-only data absent.                                                                              Admin + client PIC                   M-128, BF-008, M-129                                                                                                                                                                                 \[NEEDS INPUT\]              \[NEEDS INPUT\]

  Safe reset and reservation   Atomic records can be reserved, reset, or clearly marked without affecting another mission.                                                   Product team/Admin                   All data-changing missions                                                                                                                                                                           \[NEEDS INPUT\]              \[NEEDS INPUT\]
  ---------------------------- --------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------- -----------------------

**4. Client-specific configuration**

  ------------------------------------ ----------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------- -------------------------- -------------------------------
  Configuration                        Required state                                                                                        Visible tester impact                                                                  Missions                                                                                                                Can tester self-service?   Status

  Telegram channel                     Telegram is enabled; WhatsApp remains non-blocking for go-live.                                       Linked users can work in Telegram and WhatsApp absence is not a failure.               M-007, M-008, M-009                                                                                                     No                         \[NEEDS INPUT\]

  SQL authority                        Prepared visible customer/item/price/invoice references are supplied from the authoritative system.   MAIA does not invent, retain stale values, or expose conflicting production masters.   M-021, M-022, M-023, M-024, M-025, M-026, M-027, M-028, M-029, BF-005, M-030, M-084, BF-007, M-085, M-086               No                         \[NEEDS INPUT\]

  Pricing and minimum-price approval   One priced pair, one missing-price pair, one changed-price pair, and permitted approvers.             Correct price, clear missing-price flag, pending exception, and logged approval.       M-031, M-032, M-033, M-034, M-035, M-036, M-037                                                                         No                         Blocked by data + role matrix

  Credit rules                         Over-limit customer and authorised/unauthorised override accounts; block at SO submission.            Correct block stage and logged release.                                                M-038, M-039, M-040, M-041, BF-006, M-042, M-043, M-044                                                                 No                         \[NEEDS INPUT\]

  Payment-term dates                   COD unpaid; 30-day day 30/31/61/repeat; 60-day day 60/61/91/repeat records.                           Alerts and blocks occur only at locked boundaries.                                     M-045, M-046, M-047, M-048, M-049, M-050, M-051, M-052, M-053, M-054, M-055, M-056, M-057                               No                         \[NEEDS INPUT\]

  Warning and stock rules              Non-blocking warning audit; zero stock remains orderable; threshold 50 test item.                     Warnings require acknowledgement but stock does not prevent submission.                M-058, M-059, M-060, M-061, M-062, M-063, M-064, M-065, M-066, M-067, M-068, M-069, M-070, M-071                        Partly Admin               \[NEEDS INPUT\]

  Delivery and digest schedules        Exact-three-day and \>three-day deliveries; partial delivery; five-category digest.                   Correct alert timing, open quantity, reminders, and one 9:00 AM digest.                M-072, M-073, M-074, M-075, M-076, M-077, M-078, M-079, M-080, M-081, M-082, M-083                                      No                         \[NEEDS INPUT\]

  Invoice/document rules               Original SQL invoice PDF, one-level approver, editable date state, active surcharge SKU.              Correct PDF, one approval, date audit, and SKU-based surcharge.                        M-084, BF-007, M-085, M-086, M-087, M-088, M-089, M-090, M-091, M-092, M-093, M-094, M-095, M-096                       No                         Blocked by data + role matrix

  Returns/product/COA                  Known invoice batches, return confirmation, item-creation route, valid and mismatched COAs.           Batch traceability and role restrictions are visible.                                  M-097, M-098, M-099, M-100, M-101, M-102, M-103, M-104, M-105, M-106, M-107, M-108, M-109, M-110, M-111, M-112, M-113   No                         Blocked by data + role matrix

  C3/e-invoice/finance chatbot         Prepared C3 batches, SQL e-invoice record, finance and sales chatbot permissions.                     Batch-only exemption, no duplicate e-invoice, restricted finance access.               M-114, M-115, M-116, M-117, M-118, M-119, M-120, M-121, M-122                                                           No                         \[NEEDS INPUT\]

  Cutover and document set             Approved live reference pack and lifecycle records for ten supported documents.                       Atomic document missions and cutover checks have exact visible references.             M-128, BF-008, M-129, M-130, M-131, M-132, M-133, M-134, M-135, M-136, M-137, M-138, M-139, M-140, M-141                No                         \[NEEDS INPUT\]
  ------------------------------------ ----------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------- -------------------------- -------------------------------

**5. Inputs and test data**

  ------- -------------------------------------- ------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------- ------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------
  ID      Requirement                            Classification                  Required condition                                                                                                                                How tester obtains it                                     Alternative                                                   Missions                                                                                                                                                                                              Missing-item action

  TD-01   Complete reserved order                PREPARED / SEEDED INPUT         Active UAT customer, MK-221, visible price, normal credit, unique PO, quantity and delivery date.                                                 Product team publishes the record and reservation rule.   Another reserved record meeting every visible criterion.      M-001, M-002, M-003, M-004, M-005, M-006                                                                                                                                                              Blocked --- Test Data

  TD-02   Order extraction pack                  PREPARED / SEEDED INPUT         Complete text order, clear photo, at least 10 representative PDFs with expected item lines, unreadable file, ambiguous item, corrected example.   Approved input folder.                                    No substitute for the measured PO pack.                       M-010, M-011, M-012, M-013, M-014, M-015                                                                                                                                                              Blocked --- Test Data

  TD-03   Duplicate PO records                   TESTER MAY SAFELY CREATE        Unique customer/PO combinations plus controlled duplicate and concurrent values.                                                                  Use the prescribed PO formats and reservation sheet.      Equivalent unique test values.                                M-019, BF-004, M-020                                                                                                                                                                                  Blocked --- Test Data

  TD-04   Master-data reference pack             PREPARED / SEEDED INPUT         Expected customer fields/addresses and item descriptions before/after approved changes.                                                           Product team provides visible expected values.            Equivalent prepared customer/item records.                    M-021, M-022, M-023, M-024, M-025, M-026, M-027, M-028, M-029, BF-005, M-030                                                                                                                          Blocked --- Dependency

  TD-05   Pricing/credit/payment boundary pack   PREPARED / SEEDED INPUT         Known prices, missing price, below-minimum line, over-limit exposure, COD/30/60-day dated cases.                                                  Product team seeds and labels each state.                 No safe alternative where exact dates/limits matter.          M-031, M-032, M-033, M-034, M-035, M-036, M-037, M-038, M-039, M-040, M-041, BF-006, M-042, M-043, M-044, M-045, M-046, M-047, M-048, M-049, M-050, M-051, M-052, M-053, M-054, M-055, M-056, M-057   Blocked --- Test Data

  TD-06   Stock and schedule pack                PREPARED / SEEDED INPUT         Threshold item at 49 and 0, exactly-three-day and \>three-day delivery, partial order, five-category digest.                                      Product team prepares controlled states and run times.    Equivalent records preserving exact boundaries.               M-064, M-065, M-066, M-067, M-068, M-069, M-070, M-071, M-072, M-073, M-074, M-075, M-076, M-077, M-078, M-079, M-080, M-081, M-082, M-083                                                            Blocked --- Configuration

  TD-07   Invoice and surcharge pack             PREPARED / SEEDED INPUT         Known original/updated/unavailable invoice PDFs, pending approval, editable document, active/inactive surcharge SKU.                              Approved input folder + seeded records.                   Equivalent prepared records with documented visible values.   M-084, BF-007, M-085, M-086, M-087, M-088, M-089, M-090, M-091, M-092, M-093, M-094, M-095, M-096                                                                                                     Blocked --- Test Data

  TD-08   Return, item, and COA pack             PREPARED / SEEDED INPUT         Invoice batches A/B plus unrelated C, confirmed/unconfirmed return, unique/duplicate item codes, valid/incomplete/mismatched COAs.                Product team/client prepares and labels each item.        No safe alternative for exact batch and permission cases.     M-097, M-098, M-099, M-100, M-101, M-102, M-103, M-104, M-105, M-106, M-107, M-108, M-109, M-110, M-111, M-112, M-113                                                                                 Blocked --- Test Data

  TD-09   C3 and e-invoice pack                  PREPARED / SEEDED INPUT         Eligible and non-eligible/mismatched batches plus already-processed SQL e-invoice.                                                                Product team/client prepares visible reference states.    No safe alternative for tax-boundary cases.                   M-114, M-115, M-116, M-117, M-118, M-119                                                                                                                                                              Blocked --- Dependency

  TD-10   Live cutover and document pack         PRODUCT-TEAM SUPPORT REQUIRED   Three live customers/items/invoices, one test-only record, one controlled transaction, and lifecycle states for ten documents.                    Client + product team provide during authorised window.   No alternative for production cutover.                        M-128, BF-008, M-129, M-130, M-131, M-132, M-133, M-134, M-135, M-136, M-137, M-138, M-139, M-140, M-141                                                                                              Blocked --- Environment
  ------- -------------------------------------- ------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------- ------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------

**6. Documents and reference inputs**

  --------- ----------------------------------- -------------------------- ------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------ ----------------------------------------- -----------------
  ID        Document/input needed               How it is obtained         Exact file or description                                                                                                      Missions                                                                             Alternative                               Status

  DOC-01    Representative PO pack              Approved shared folder     At least 10 PDFs plus one clear photo, one unreadable file, and one corrected/ambiguous example.                               M-010, M-011, M-012, M-013, M-014, M-015                                             No substitute for accuracy calculation.   \[NEEDS INPUT\]

  DOC-02    Invoice PDF references              Prepared invoice records   Original SQL PDF, documented updated version, and controlled unavailable case.                                                 M-084, BF-007, M-085, M-086                                                          Equivalent prepared invoice set.          \[NEEDS INPUT\]

  DOC-03    COA pack                            Approved shared folder     Valid COA with item/batch/supplier/date, incomplete COA, and wrong-batch COA.                                                  M-111, M-112, M-113                                                                  Equivalent unambiguous controlled pack.   \[NEEDS INPUT\]

  DOC-04    Supported-document lifecycle pack   Seeded workflow records    Quotation, CPO, Sales Order, proforma invoice, Delivery Order, picking list, SQL invoice PDF, credit note, receipt, and COA.   M-130, M-131, M-132, M-133, M-134, M-135, M-136, M-137, M-138, M-139, M-140, M-141   Equivalent reserved lifecycle records.    \[NEEDS INPUT\]
  --------- ----------------------------------- -------------------------- ------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------ ----------------------------------------- -----------------

**Generated safe text inputs**

Use only with reserved UAT customers and records:

**Unique PO format:** UAT-\[tester initials\]-\[YYYYMMDD-HHMMSS\]

**Text extraction starter:** Order 25 kg of MK-221 for \[RESERVED UAT CUSTOMER\], PO \[UNIQUE PO\], delivery \[APPROVED TEST DATE\].

**Ambiguous item phrase:** roasted chicken seasoning --- use only after the product team confirms the exact competing SQL items.

**Unsupported request:** Generate a payment voucher for this order.

**7. Role and permission setup**

  --------------------------------- ---------------------------------- --------------------------------------------------- ------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------
  Client role                       Product role                       Account needed                                      Permitted actions                                                                                Refused actions to test                                                               Missions                                                                                                                                                                                                                                                                                                                                                               Status

  Sales                             Sales User                         \[NEEDS INPUT: SALES_UAT_ACCOUNT\]                  Create/extract orders, submit allowed documents, request credit note, edit date where locked.    Self-approve price, override credit/payment blocks, issue credit note, create item.   M-001, M-002, M-003, M-004, M-005, M-006, M-010, M-011, M-012, M-013, M-014, M-015, M-031, M-032, M-033, M-034, M-035, M-036, M-037, M-038, M-039, M-040, M-041, BF-006, M-045, M-046, M-047, M-048, M-049, M-050, M-051, M-052, M-053, M-054, M-055, M-056, M-057, M-090, M-091, M-092, M-093, M-101, M-102, M-103, M-104, M-105, M-106, M-107, M-108, M-109, M-110   Blocked by matrix

  Sales Manager                     Sales Manager                      \[NEEDS INPUT: SALES_MANAGER_UAT_ACCOUNT\]          Approve below-minimum price; edit allowed document date.                                         Actions outside final matrix.                                                         M-034, M-035, M-036, M-037, M-090, M-091, M-092, M-093                                                                                                                                                                                                                                                                                                                 Blocked by matrix

  Logistics                         Logistics                          \[NEEDS INPUT: LOGISTICS_UAT_ACCOUNT\]              Create DO from valid SO, update delivery, confirm returns where assigned.                        Create DO from invalid SO; unauthorised closure/item creation.                        M-001, M-002, M-003, M-004, M-005, M-006, M-072, M-073, M-074, M-075, M-079, M-080, M-081, M-082, M-083, M-101, M-102, M-103, M-104, M-105, M-106, M-107, M-108, M-109, M-110                                                                                                                                                                                          Blocked by matrix

  Irene / Credit Controller         Credit Controller                  \[NEEDS INPUT: CREDIT_CONTROLLER_UAT_ACCOUNT\]      Authorised credit override; receive stock/delivery/partial alerts.                               Bypass after role removal; other unassigned permissions.                              M-042, M-043, M-044, M-064, M-065, M-066, M-067, M-068, M-069, M-070, M-071, M-072, M-073, M-074, M-075, M-079, M-080, M-081, M-082, M-083                                                                                                                                                                                                                             Blocked by matrix

  Finance Manager / Finance/Admin   Finance or Admin                   \[NEEDS INPUT: FINANCE_ADMIN_UAT_ACCOUNT\]          Approvals/overrides as assigned, invoice/receipt, credit note, item creation, finance chatbot.   Issue before return confirmation; expose finance data to Sales.                       M-038, M-039, M-040, M-041, BF-006, M-045, M-046, M-047, M-048, M-049, M-050, M-051, M-052, M-053, M-054, M-055, M-056, M-057, M-084, BF-007, M-085, M-086, M-087, M-088, M-089, M-097, M-098, M-099, M-100, M-101, M-102, M-103, M-104, M-105, M-106, M-107, M-108, M-109, M-110, M-120, M-121, M-122                                                                 Blocked by matrix

  Supply Chain                      \[GAP: MAIA product role\]         \[GAP: mapped COA-capable account\]                 Upload, index, and link COA.                                                                     Link incomplete or wrong-batch COA.                                                   M-111, M-112, M-113                                                                                                                                                                                                                                                                                                                                                    Blocking for COA missions

  Management                        Management                         \[NEEDS INPUT: MANAGEMENT_UAT_ACCOUNT\]             View lifecycle and operational digest.                                                           Edit operational records unless matrix permits.                                       M-001, M-002, M-003, M-004, M-005, M-006, M-076, M-077, M-078                                                                                                                                                                                                                                                                                                          Blocked by matrix

  Client UAT coordinator            \[GAP: sign-off method/account\]   \[GAP: Maye account or external approval method\]   Coordinate evidence and final approval.                                                          Accept incomplete or unauthorised sign-off.                                           M-123, M-124, M-125, M-126, M-127                                                                                                                                                                                                                                                                                                                                      Blocking for final sign-off
  --------------------------------- ---------------------------------- --------------------------------------------------- ------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------

**8. Fallback and remediation setup**

  ------------------------------------------------- ------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------ -------------------------------------------------------------- -----------------------------------
  Failure/blocker                                   Approved fallback                                                                                                  Tester action                                                            Product-team action                                            Missions

  Prepared record unavailable                       Use an explicitly equivalent reserved record only when the mission gives visible criteria.                         Search for no more than five minutes, then mark Blocked --- Test Data.   Provide/reseed the exact state and update reservation sheet.   All controlled-data missions

  Wrong/missing account                             Do not borrow another role unless that account is explicitly assigned.                                             Mark Blocked --- Access with screenshot.                                 Correct role mapping or credentials.                           Permission and handoff missions

  Scheduled event not run                           Do not change device time or invent timestamps.                                                                    Mark Blocked --- Configuration or Dependency.                            Trigger an approved test run or reschedule.                    9:00 AM, reminder, delay missions

  Telegram failure                                  Use website only when the mission explicitly tests website behaviour; do not treat website use as Telegram Pass.   Capture bot message/time and continue elsewhere.                         Restore bot and preserve test context.                         Telegram missions

  External/authoritative verification unavailable   Judge visible behaviour and create a Product-Team / Client Handoff.                                                Do not inspect SQL or hidden systems.                                    Verify authoritative record/write and attach result.           SQL/cutover/e-invoice missions

  Unsafe production impact risk                     Stop before submission.                                                                                            Mark Blocked --- Environment and escalate urgently.                      Provide safe UAT record/reset or authorised cutover window.    All data-changing missions
  ------------------------------------------------- ------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------ -------------------------------------------------------------- -----------------------------------

**9. Team coordination**

**Recommended tester squads**

**Sales and Capture:** Order Relay, Telegram Order Capture, and customer/item missions.

**Commercial Controls:** Pricing, credit, payment terms, invoice approval, and tax-boundary missions.

**Fulfilment and Quality:** Delivery, stock, partial delivery, item creation, returns, and COA missions.

**Governance and Cutover:** Role coverage, sign-off, supported documents, and live cutover.

**Coordination rules**

Pair every permission-success mission with its refusal mission, but record them as separate results.

Use \[NEEDS INPUT: SUPPORT_CHANNEL\] and include mission ID, role, record, attempted action, visible result, timestamp, and screenshot.

Apply the **five-minute blocker rule**. Do not turn missing setup into a product Fail.

Reserve each customer, PO, Sales Order, invoice, item, batch, and scheduled record before use.

Do not reuse a controlled record until its cleanup/reset status is recorded.

\[NEEDS INPUT: TIME_BUDGET_PER_TESTER\] should be converted into a fixed number of atomic cards, not broad campaign ownership.

\[NEEDS INPUT: UAT_OWNER\] handles urgent P1/P2 triage; \[NEEDS INPUT: cleanup/reset owner\] restores test data.

**10. Blocking gaps**

**Final role-permission matrix** and named test accounts.

**UAT URL, Telegram entry point, credentials, and environment label.**

**Controlled data pack** for pricing, credit, payment dates, stock, scheduled runs, invoices, returns, C3, and cutover.

**Input folder** containing the approved PO/photo/PDF, invoice, COA, and supported-document references.

**Test window and scheduled-run plan** for 9:00 AM and reminder missions.

**Bug/support channels, internal UAT owner, remote support, and cleanup owner.**

**Supply Chain product-role mapping** and **Maye sign-off method/account**.

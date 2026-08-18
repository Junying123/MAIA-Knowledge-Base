**22 June 26 - Forensic Account Dossier**

**Source Manifest --- what I actually received and processed**

  ------------------------------------------------------------------------------ --------------------------------------------- ---------------------------------------- ------------------------- ----------------------------------------------- ------------------------
  Source item                                                                                                             Type                               Date range                    Volume                              Processed in full? Evidence

  3_3_2026 Fixguru E-Invoice (SI_CN_DBN) Sync.docx                                                                         Doc                               2026-03-03                     1 doc                                             Yes fileciteturn6file12

  Fixguru \<\> Mindhive - UAT Brief - Transcript                                                                    Transcript                               2026-04-07                    1 call                                             Yes fileciteturn2file2

  Fixguru Meta Setup Fixing - Transcript                                                                            Transcript                               2026-05-07                    1 call                Yes; duplicate copy also present fileciteturn6file18

  Fixguru \<\> Mindhive - UAT Brief & Historical Pricing Testing - Transcript                                       Transcript                               2026-05-13                    1 call                    Yes, but ASR quality is weak fileciteturn0file2

  Fixguru \<\> Mindhive - UAT (On-site) - Transcript                                                                Transcript                               2026-05-14   1 long UAT call/session                   Yes, but ASR quality is noisy fileciteturn3file0

  Fixguru \<\> Mindhive - UAT (On-site) - stock backward visibility transcript     WhatsApp-style transcript / meeting extract                               2026-05-14          1 thread/extract                                             Yes fileciteturn5file7

  Fixguru feedback sync - Transcript                                                              Internal Mindhive transcript                               2026-05-15                    1 call                                             Yes fileciteturn0file8

  Fixguru Scoping Sync - Transcript                                                                                 Transcript                               2026-05-19                    1 call   Yes, but ASR quality too poor for many claims fileciteturn0file0

  Fixguru UAT Gaps.docx                                                                           Gap register / meeting notes                          Post-2026-05-14                     1 doc                                             Yes fileciteturn6file7

  Fixguru UAT prep & brief - Transcript                                                           Internal UAT prep transcript                               2026-06-16                    1 call                   Yes, but ASR quality is noisy fileciteturn0file3

  Fixguru SOW.docx                                                                                                         SOW                     Effective 2025-07-22                     1 doc   Processed via indexed extract, not local file fileciteturn2file0

  Fixguru MAIA - Product Specification Baseline (SOW).docx                                              Product baseline / SOW                         Undated baseline                     1 doc   Processed via indexed extract, not local file fileciteturn6file9

  Fixguru Scope Gathering (17_7_2025).docx                                                                     Discovery notes                               2025-07-17                     1 doc   Processed via indexed extract, not local file fileciteturn4file0

  Fixguru 2nd UAT Plan.docx                                                                                  UAT recovery plan   Created 2026-06-06; updated 2026-06-07                     1 doc   Processed via indexed extract, not local file fileciteturn4file1

  Fixguru Functional Requirements.docx                                                                  Requirements / diagram                                  Undated                     1 doc                           Targeted extract only fileciteturn1file14
  ------------------------------------------------------------------------------ --------------------------------------------- ---------------------------------------- ------------------------- ----------------------------------------------- ------------------------

**Coverage gaps / named-but-not-provided sources:** WhatsApp group history, Jam videos, Fireflies original recording, Claude meeting notes, Granola action notes, updated RSC/Diecut Excel files, Volume Metrics Excel, signed SOW copy, payment records, actual UAT form submissions, actual MAIA build/test logs, AutoCount API logs, and post-Jun-17 sign-off outcome were not provided as primary evidence. Any claim requiring those sources is marked **INSUFFICIENT EVIDENCE**.

**Fixguru --- Account Dossier (v1, 2026-06-20)**

**PART A --- Executive Layer**

**A1. Snapshot**

  --------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Phase                                                                                                                                                                                    Contract value Relationship health                                             Overall confidence   One-line status

  UAT recovery / second UAT preparation after a failed or blocked first UAT     RM48,000 one-off; RM24,000 deposit + RM24,000 on UAT completion; estimated monthly RM1,000 OpenAI/platform + RM200 server **RED for first-UAT trust; AMBER if Jun 16--17 fixes passed**   **MED-HIGH**         The client's decisive success condition is not "chatbot exists"; it is whether MAIA can replace AutoCount-facing sales execution without losing historical pricing, discounts, credit controls, stock/branch/PDF fidelity, and speed. fileciteturn6file4 fileciteturn6file8 fileciteturn6file7 fileciteturn4file1
  --------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**A2. Top 5 things that matter most right now --- client POV**

**Historical pricing + customer/item discount is sign-off critical.** The client said, "if it's not done right we cannot sign off," and later repeated that without historical discount/net price the sales team has "no point" using MAIA. fileciteturn2file2 fileciteturn6file8

**MAIA must be faster or operationally better than AutoCount, not just integrated with it.** The UAT gap register records "They feel doing autocount is much faster than chatbot," and the client complained during UAT that they were "wasting time here." fileciteturn6file7 fileciteturn3file0

**Sales concurrency is a hard workflow requirement.** Fixguru salespeople handle **4--10 active customer orders simultaneously**, while the observed chatbot flow could create multiple SOs but could not edit mid-flow reliably. fileciteturn6file7

**AutoCount fidelity matters: IDs, PDF templates, branch contacts, delivery method-as-SKU, credit exposure, stock/shelf/warehouse, and document traceability are not cosmetic.** These are recorded UAT gaps and first-time/retest items in the second UAT plan. fileciteturn6file14 fileciteturn6file5

**Second UAT is not a formality; it is a recovery event.** The Jun 7 plan still had retests, first-time tests, pending BE/FE/PDF work, and "fixing/testing" statuses before the planned Jun 16--17 on-the-spot UAT. fileciteturn4file1 fileciteturn6file5

**A3. The Ultimax check --- headline**

**Material divergence found. Confidence: HIGH.**

The most dangerous divergence is this: **Fixguru appears to believe they are buying a sales execution layer that lets their team stop relying on AutoCount during daily quoting/order work, while the build and scope evidence shows MAIA was still catching up to AutoCount fidelity at UAT: historical discount, item-level pricing, branch contacts, PDF templates, delivery method-as-SKU, stock/shelf, credit exposure, external IDs, and 2-way sync were still being fixed, retested, or first-tested.** The client's own words are direct: "If I use it, I must well owe you an account. Right? So I wouldn't need your your this back end. I want it to be there," and "if this thing no circle... cannot kick start ready." fileciteturn6file8

**A4. Recommended next moves --- maximum 3**

**Owner: Ivan / Gareth --- run a "client-visible acceptance matrix" before any sign-off ask.** Separate **Must Pass for UAT**, **Accepted Deferral**, and **Chargeable CR** across historical pricing, item-level discount, branch contact, PDF, credit exposure, stock/shelf, 2-way sync, and delivery method-as-SKU; tie every row to the SOW or CR boundary. fileciteturn6file5 fileciteturn6file14

**Owner: Gareth --- force explicit Fixguru sign-off authority.** The evidence shows people can block UAT verbally, but not who can legally sign UAT or scope changes; unresolved signing authority is a high-risk account control gap. fileciteturn2file2 fileciteturn4file1

**Owner: Ivan / Jermaine --- decide the AutoCount policy: "MAIA replaces daily AutoCount operations" vs "MAIA assists and syncs."** The relationship will keep bleeding if scope is sold as replacement but engineered as partial assistant/integration. fileciteturn4file0 fileciteturn6file7

**PART B --- Evidence Layer**

**B1. Source manifest & coverage / blindness**

**Source coverage:** The dossier is built from discovery docs, SOW/product baseline extracts, UAT transcripts, internal feedback sync, UAT gap register, e-invoice notes, and second-UAT plan. fileciteturn4file0 fileciteturn2file0 fileciteturn6file7 fileciteturn4file1

**Structural blindness by source type:**

  --------------------- ----------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------
  Source type           What it can show                                                                          What it cannot prove

  Transcripts           What was said in meetings/UAT, pain, objections, verbal commitments, observed confusion   Final agreed scope unless contractually incorporated; actual build state unless demonstrated live; full async sentiment

  Gap docs              Mindhive's internal synthesis of problems, action items, CR candidates                    Whether client formally agreed to each deferral/CR; whether each bug was fixed later

  SOW / baseline docs   Contracted scope, acceptance criteria, commercial terms                                   Whether implementation passed; whether client expectations drifted after signing

  2nd UAT plan          Latest visible recovery plan and dev/test status as of Jun 7                              Actual Jun 16--17 UAT result; post-UAT acceptance; production readiness

  E-invoice note        Specific e-invoice preference and cutoff facts                                            Full e-invoice implementation status or LHDN integration behavior in MAIA
  --------------------- ----------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------

**B2. Chronological timeline**

  -------------------------- --------------------------------------------------------- ------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------
  Date                       Event                                                     Who                                  What changed                                                                                                                                                                                                                                   Evidence

  2025-07-17                 Scope gathering                                           Mindhive + Fixguru                   Painpoints captured: sales/operations miscommunication, stock count, no reminders, no customer follow-up, custom products, no raw-material tracking.                                                                                           fileciteturn4file0

  2025-07-17                 AutoCount positioned as core system                       Fixguru / discovery notes            AutoCount recorded as main database; process captured as Quotation → Sales Order/proforma → DO → Invoice; one proforma can have two or more DOs.                                                                                               fileciteturn4file0

  2025-07-17                 Pricing model discovered                                  Fixguru / discovery notes            Each customer has their own pricing and set discount; B2B customers have credit terms and management approval for credit term.                                                                                                                 fileciteturn4file0

  2025-07-17                 Target operational flow captured                          Discovery notes                      Bot should coordinate sales → operations → driver, update status, validate payment, create DO/invoice, and remind sales on inactive customers.                                                                                                 fileciteturn4file0

  2025-07-22                 SOW effective date                                        Mindhive + IAM Worldwide / Fixguru   SOW frames project as internal WhatsApp AI chatbot integrated with MAIA and AutoCount for B2B order-to-delivery.                                                                                                                               fileciteturn2file0

  2025-07-22                 Commercial terms set                                      Mindhive + Fixguru                   One-off development cost RM48,000; RM24,000 on confirmation and RM24,000 on UAT completion; monthly estimates RM1,000 platform/OpenAI and RM200 server.                                                                                        fileciteturn6file4

  2025-07-22                 Acceptance criteria set                                   Mindhive + Fixguru                   100% automated DO/invoice generation for qualifying orders; credit checks block invoice creation when limits exceeded; POD image within 5 minutes; sync failure ≤0.1% over 30-day UAT.                                                         fileciteturn6file3

  2026-03-03                 E-invoice sync discussion                                 Mindhive / Fixguru                   AutoCount auto-sends e-invoice to LHDN/customer; Fixguru consolidates customers who do not need e-invoice; MAIA should always give customer choice of individual vs consolidated; Fixguru internal cutoff is 5th of month.                     fileciteturn6file12

  2026-04-07                 UAT brief begins                                          Gareth / Fixguru guest               Mindhive provided test form and account; client can log issues via form/WhatsApp/Jam.                                                                                                                                                          fileciteturn6file11

  2026-04-07                 UAT timeline discussed                                    Gareth / Fixguru guest               One-week UAT proposed; client flagged management travel and asked for possible extension; go-live could move to end of month / early next month depending on bug resolution.                                                                   fileciteturn2file2

  2026-04-07                 Historical pricing escalated as blocker                   Fixguru guest                        Client said historical customer/item price from quotation/invoice is required and "if it's not done right we cannot sign off."                                                                                                                 fileciteturn2file2

  2026-05-07                 WhatsApp/Meta setup debugging                             Mindhive + guest                     Meta/WhatsApp setup required creating/using Maya V2, correct phone number ID/token, and later "everything is working" for interactive bot messages; payment method still needed for business-initiated messages.                               fileciteturn6file15 fileciteturn5file1

  2026-05-07                 AutoCount pricing mechanics clarified                     Fixguru guest                        AutoCount has one list price but different customers have different discount structures; historical price/discount is customer+SKU specific, usually past five/seven invoices.                                                                 fileciteturn6file18

  2026-05-14                 On-site UAT exposes historical pricing failure            Fixguru guest / Mindhive             Client says discount %, historical data, net price, and standard price must show; wrong discount calculation observed where 3% of RM60 was captured like RM3.                                                                                  fileciteturn6file8

  2026-05-14                 On-site UAT exposes concurrency/editing mismatch          Fixguru guest / Mindhive             Client describes handling 4--10 customers and needing to edit draft SOs before final submission; chatbot flow was not stable for mid-flow edits.                                                                                               fileciteturn3file0 fileciteturn6file7

  2026-05-14                 On-site UAT exposes PDF/template mismatch                 Fixguru guest / Mindhive             Client says generated PDF/template is different from AutoCount/Fixguru format and default PDF is unacceptable for draft documents.                                                                                                             fileciteturn3file0 fileciteturn6file14

  2026-05-14                 On-site UAT exposes external ID/running-number mismatch   Fixguru guest / Mindhive             Client says documents must follow their AutoCount running number / ID, not MAIA internal ID.                                                                                                                                                   fileciteturn5file17

  2026-05-14                 On-site UAT exposes warehouse/picking fields              Fixguru guest / Mindhive             Client says weight, cubic/volume metric, and shelf number are needed for storage, picking list, and delivery planning.                                                                                                                         fileciteturn5file17

  2026-05-14                 Raw material / finished stock workflow discussed          Amirul / Fixguru                     Client needs visibility of both finished box stock and raw material stock; raw-to-finished conversion can have yield variance, e.g. 2000 raw → expected 4000 finished but actual 3900.                                                         fileciteturn5file7

  2026-05-15                 Internal feedback sync                                    Mindhive                             Internal team records Fixguru "totally cannot proceed" and starts consolidating UAT gaps such as historical pricing, calculator, branch contacts, PDFs, credit exposure, 2-way sync, language, SKU display.                                    fileciteturn0file8

  Post-2026-05-14            UAT Gaps doc created                                      Mindhive                             Overall feedback logged: AutoCount faster than chatbot; sequential flow fails; historical pricing/discount not captured; item-level discount unsupported.                                                                                      fileciteturn6file7

  Post-2026-05-14            UAT gap classification begins                             Mindhive                             Calculator updates, AutoCount integration gaps, contact/branch sync, PDF template, delivery method-as-SKU, UOM conversion, stock balance, volume metric, shelf/warehouse, credit limit, language, and full document traceability are logged.   fileciteturn6file14

  2026-06-06 / 2026-06-07    2nd UAT plan created/updated                              Mindhive                             Plan targets Jun 16--17 on-the-spot UAT; status includes ready items, retests, first-time tests, and pending dev/fix items.                                                                                                                    fileciteturn4file1

  2026-06-09 / Jun 10 plan   Internal fix/testing cadence                              Mindhive                             Dev fix day and internal live bug-fix session planned; every item should be tested live, with green/deferred decisions by session end.                                                                                                         fileciteturn4file1

  2026-06-16                 UAT prep transcript                                       Mindhive internal                    Discount, standard selling price, historical pricing, FOC, external ID, delivery method, non-stock item, and stock-related issues were still being tested/discussed; transcript quality is weak, so precise status is **LOW confidence**.      fileciteturn0file3
  -------------------------- --------------------------------------------------------- ------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------

**Timeline gaps:** There is no primary async WhatsApp evidence between the Apr 7 UAT brief and May 7 Meta setup; no actual Jun 16--17 UAT result; no client written sign-off/conditional sign-off; no post-UAT production/go-live record. These gaps matter because relationship recovery and payment milestone 2 depend on UAT completion. fileciteturn6file4 fileciteturn4file1

**B3. The client's world**

**Business reality.** Fixguru is a B2B order-to-delivery operation with sales, logistics/operations, drivers, accounts, and management/boss roles; the discovered workflow depends on AutoCount, WhatsApp/internal chatbot, DOs, invoices, stock visibility, payment validation, and delivery proof. fileciteturn4file0

**Order volume.** The SOW targets "\~30 or more confirmed orders/day," and the UAT gap register says one sales team has 30 invoices per day with high context switching. fileciteturn2file0 fileciteturn6file6

**Pricing reality.** Each B2B customer can have their own set pricing and discount; AutoCount shows historical customer/SKU price and discount, and Fixguru expects MAIA to surface this during quoting. fileciteturn4file0 fileciteturn6file18

**Stock reality.** Fixguru cares about finished goods, raw materials, raw-to-finished conversion, yield variance, warehouse/shelf, and volume/weight for picking and lorry planning. fileciteturn5file7 fileciteturn5file17

**Document reality.** Fixguru's document flow is Quotation → Sales Order/proforma → DO → Invoice, and one proforma can have multiple DOs; later UAT notes explicitly require traceability where one SO can have multiple DOs and multiple invoices by DO date. fileciteturn4file0 fileciteturn6file6

**Success in the client's words.** Success is MAIA making AutoCount lookup unnecessary for the sales workflow: the client said, "If I use it, I must well owe you an account. Right? So I wouldn't need your your this back end. I want it to be there." \[Fixguru On-site UAT \| 2026-05-14 \| Guest\] fileciteturn6file8

**Failure in the client's words.** Failure is needing AutoCount or another person for pricing: "Otherwise, right, we we no point the the pricing, got to get it from other personnel." \[Fixguru On-site UAT \| 2026-05-14 \| Guest\] fileciteturn6file8

**What matters to Mindhive about this account --- separate list.**

**Payment exposure:** RM24,000 second milestone is tied to UAT completion. fileciteturn6file4

**Refund exposure:** SOW states refund path if core requirements remain unmet after SLA remediation, including full refund if failure to go live post-UAT. fileciteturn1file0

**Product architecture signal:** Fixguru exposes a broader AutoCount fidelity pattern: external IDs, draft PDFs, credit exposure, stock/shelf, branch contacts, 2-way sync, and historical data are not edge cases. fileciteturn6file14

**Scope-control signal:** Calculator expansion from 2 calculators to 5 and updated RSC/Diecut formulas were marked CR candidates, not automatic baseline scope. fileciteturn5file10

**B4. Actors --- profiles + decision map**

  --------------------------------------------------- --------------------------------------------------------- ---------- ------------------------------------- ----------------------------------------- ---------------------------------------------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------
  Actor                                               Role                                                      Side       Authority                             Signing authority?                        What they want                                                                                 Sentiment + trajectory                                  Representative quote / evidence

  Guest / likely Fixguru senior user or stakeholder   UAT participant / operational stakeholder                 Client     **Blocker / high influence**          **UNKNOWN**                               Historical pricing, AutoCount-equivalent workflow, discount %, net price, AutoCount IDs/PDFs   Neutral at Apr brief → sharply negative at May 14 UAT   "This one if it's not done right we cannot sign off..." \[UAT Brief

  Marcus                                              Named in UAT gaps / likely client tester or stakeholder   Client     Influence / possible blocker          UNKNOWN                                   Sales-doc creation/editing accuracy; confusion adding item into active quotation/SO            Negative/friction in UAT notes                          "Confusion in adding item for Sales Order into a Quotation that user just talk about (Marcus)." fileciteturn6file6

  Stephen                                             Mentioned as possible attendee                            Client     UNKNOWN                               UNKNOWN                                   UNKNOWN                                                                                        INSUFFICIENT EVIDENCE                                   Mentioned as possibly joining in Apr 7 UAT brief. fileciteturn6file10

  Yvonne / "Yvong"                                    Mentioned in UAT brief and on-site transcript             Client     UNKNOWN                               UNKNOWN                                   Historical pricing possibly discussed with previous Mindhive staff                             UNKNOWN                                                 Client references prior conversation about historical data and Yvonne is named in meeting context. fileciteturn2file2

  Xiao Ling, Hayati, Zuha, Abishaah/Wendy, Marcus     Listed 2nd UAT testers                                    Client     Testers / influence                   UNKNOWN                                   Execute Jun 16--17 UAT                                                                         UNKNOWN before actual result                            2nd UAT plan lists them as Fixguru testers for on-the-spot UAT. fileciteturn4file1

  Gareth                                              PM / account operator                                     Mindhive   Delivery owner / coordinator          No evidence of signing authority          UAT planning, gap triage, dev coordination                                                     Internal problem-owner                                  2nd UAT plan names PM/Gareth across Jun 9--11 testing and scheduling. fileciteturn4file1

  Amirul                                              Developer / FE-calculator-related                         Mindhive   Implementation owner for some items   No                                        Calculator, item-level discount, volumetric FE/PDF                                             Fixing/testing                                          2nd UAT plan assigns item-level discount auto-compute and volumetric FE/PDF to Amirul/Rahim. fileciteturn6file5

  Bryan                                               Chatbot developer                                         Mindhive   Chatbot implementation owner          No                                        Historical pricing chatbot, UOM, 2-warehouse, language, HQ+branch chatbot                      Fixing/testing                                          2nd UAT plan assigns multiple chatbot fixes to Bryan. fileciteturn6file5

  Azib                                                Backend / integration owner                               Mindhive   Implementation owner                  No                                        External doc ID, branch contact sync, 2-way sync, 2-warehouse sync                             WIP/done split                                          2nd UAT plan assigns Azib to external doc ID, HQ+branch contact sync, 2-way sync, warehouse sync. fileciteturn6file5

  WeiShen                                             Credit-limit chatbot owner                                Mindhive   Implementation owner                  No                                        Credit limit exposure chatbot                                                                  Testing                                                 2nd UAT plan says credit limit exposure chatbot: WeiShen testing. fileciteturn6file5

  Johnson Goh                                         CEO, Mindhive                                             Mindhive   Vendor executive                      Yes for Mindhive in SOW signature block   Commercial accountability                                                                      Present in on-site UAT attendees                        SOW signature block names Johnson Goh as CEO; on-site attendees include Johnson. fileciteturn1file0 fileciteturn3file0

  Jermaine                                            CTO / senior technical stakeholder                        Mindhive   Technical authority                   No evidence of signing authority          Scope/product decisions                                                                        Present in on-site UAT/internal sync                    On-site and feedback sync attendees include Jermaine. fileciteturn3file0 fileciteturn0file8
  --------------------------------------------------- --------------------------------------------------------- ---------- ------------------------------------- ----------------------------------------- ---------------------------------------------------------------------------------------------- ------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------

**Authority ambiguity --- high risk.** The evidence shows UAT-blocking statements from a "Guest," but no signed Fixguru authority map, no named UAT signatory, and no evidence identifying who can approve CRs or deferrals. The 2nd UAT plan lists testers but not signatory authority. fileciteturn2file2 fileciteturn4file1

**B5. Commercial state**

  -------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------
  Item                 State                                                                                                                                                         Evidence

  Contract party       Mindhive Sdn Bhd and IAM Worldwide Sdn Bhd ("Fixguru")                                                                                                        fileciteturn2file0

  Effective date       2025-07-22                                                                                                                                                    fileciteturn2file0

  One-off cost         RM48,000                                                                                                                                                      fileciteturn6file4

  Payment terms        50% RM24,000 project confirmation; 50% RM24,000 UAT completion                                                                                                fileciteturn6file4

  Monthly estimates    OpenAI/platform \~RM1,000 depending on usage; server RM200                                                                                                    fileciteturn6file4

  Refund exposure      Full 100% refund if failure to go live post-UAT; refund tied to unmet core requirements after SLA remediation and written notice                              fileciteturn1file0

  Paid vs unpaid       **INSUFFICIENT EVIDENCE** --- payment records not provided                                                                                                    Source gap

  Change requests      Calculator expansion to 5 calculators, updated formulas, volume metrics, raw-to-finished customization are treated or proposed as CR/chargeable in UAT gaps   fileciteturn5file10

  Retainer revision    Internal feedback sync indicates retainer may need revision if wider 2-way sync/data migration is needed, but no commercial agreement provided                fileciteturn0file8
  -------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------

**B6. Commitments ledger --- both directions**

  ------------------------------------------------------------------------ ------------------------------------------------------- --------------------------------------- -------------------- --------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------
  Commitment                                                               Direction                                               Made when / where                       Due                  Status                                                                                                                Evidence

  Internal WhatsApp-based AI chatbot integrated with MAIA and AutoCount    Mindhive → Fixguru                                      SOW                                     Project delivery     Open / UAT not proven complete                                                                                        fileciteturn2file0

  Nightly master/transaction sync to AutoCount                             Mindhive → Fixguru                                      SOW                                     UAT / production     Open; later 2-way sync under testing                                                                                  fileciteturn2file0 fileciteturn6file5

  Bot drafts quotation and pro-forma invoice from sales agent chats        Mindhive → Fixguru                                      SOW high-level flow                     UAT                  Partially built; UAT gaps around editing, PDF, pricing                                                                fileciteturn2file0 fileciteturn6file7

  Credit-limit / credit-term checks before invoice/DO                      Mindhive → Fixguru                                      SOW / discovery                         UAT                  Open/testing; credit exposure first-time tests pending                                                                fileciteturn2file0 fileciteturn6file5

  Historical pricing/customer discount visibility                          Mindhive → Fixguru, per client-stated prior agreement   Apr 7 UAT brief / May 7 clarification   Before sign-off      Broken at first UAT; retest/fix later                                                                                 fileciteturn2file2 fileciteturn6file8 fileciteturn6file5

  Calculator in quotation                                                  Mindhive → Fixguru                                      Apr 7 UAT brief                         After Friday / UAT   Later "Calculator RSC + Diecut tested, complete"; expansion beyond 2 calculators treated as CR                        fileciteturn5file12 fileciteturn6file2 fileciteturn5file10

  Fixguru provides WhatsApp Business number                                Fixguru → Mindhive                                      SOW dependency                          Setup                Met enough for bot messages after Meta debugging; business-initiated payment setup remained later                     fileciteturn6file3 fileciteturn5file1

  Fixguru supplies Lalamove credentials                                    Fixguru → Mindhive                                      SOW dependency                          Integration          INSUFFICIENT EVIDENCE                                                                                                 fileciteturn6file3

  Fixguru internal roles allocated/trained                                 Fixguru → Mindhive                                      SOW dependency                          UAT/training         INSUFFICIENT EVIDENCE                                                                                                 fileciteturn6file3

  Internal users during business hours; languages English/Malay/Mandarin   Mindhive → Fixguru                                      SOW non-functional requirement          UAT                  Gap: multilingual response not working; client staff cannot read English; plan later has language preference in dev   fileciteturn6file3 fileciteturn6file6 fileciteturn6file5

  Sign-off / conditional sign-off after Jun 16--17 UAT                     Fixguru + Mindhive                                      2nd UAT plan                            Jun 16--17           INSUFFICIENT EVIDENCE; plan only                                                                                      fileciteturn4file1
  ------------------------------------------------------------------------ ------------------------------------------------------- --------------------------------------- -------------------- --------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------

**B7. Decisions log**

  ----------------------------------------------------------------------------------------------- ------------------ -------------------- -------------------------------------------------- ------------------------------------------------------------------------------- ---------------------------------------------
  Decision                                                                                        Made by            When / where         Locked or reversible                               Downstream impact                                                               Evidence

  AutoCount is main database / master record for many objects                                     Discovery / SOW    2025-07-17 and SOW   Locked at architecture level unless renegotiated   MAIA must preserve AutoCount IDs, stock, pricing, customer, document fidelity   fileciteturn4file0 fileciteturn2file0

  UAT timeline extended beyond initial one week due to Fixguru management travel                  Client / Gareth    2026-04-07           Reversible schedule decision                       Go-live shifted toward end-April/early-May depending bug resolution             fileciteturn2file2

  Historical pricing must be addressed before sign-off                                            Fixguru guest      2026-04-07           Functionally locked by client                      Blocks UAT sign-off and milestone 2                                             fileciteturn2file2

  Use current Fixguru WhatsApp/Meta app setup via correct phone/token                             Mindhive / guest   2026-05-07           Operational                                        Enabled interactive bot messages                                                fileciteturn5file1

  Customer price enforcement as field-level read-only; lock icon signals it                       Mindhive           2nd UAT Plan         Reversible only via scope change                   Narrows implementation approach for pricing enforcement                         fileciteturn6file1

  QTN amendment API blocker: API does not exist                                                   Mindhive           2nd UAT Plan         Hard technical blocker unless new API/workaround   Limits ability to amend quotations through expected flow                        fileciteturn6file1

  Calculator scope: only 2 calculators RSC + Diecut; additional Pizza/Layer Pad/5 panels are CR   Mindhive           UAT Gaps             Reversible with paid CR                            Prevents scope creep from 2 to 5 calculators                                    fileciteturn5file10

  Updated RSC/Diecut formula Excels are CR                                                        Mindhive           UAT Gaps             Reversible with CR                                 Formula drift needs versioning process                                          fileciteturn5file10

  Item shelf in chatbot scoped to additional note on DN only                                      Mindhive           2nd UAT Plan         Reversible                                         Limits shelf implementation to DN note, not full model                          fileciteturn6file1

  2nd UAT should be on-the-spot Jun 16--17                                                        Mindhive plan      2026-06-06/07        Reversible schedule                                Recovery plan depends on live testing and punch-list sign-off                   fileciteturn4file1
  ----------------------------------------------------------------------------------------------- ------------------ -------------------- -------------------------------------------------- ------------------------------------------------------------------------------- ---------------------------------------------

**B8. Understood deliverable vs scope vs build --- feature-by-feature Ultimax check**

  ------------------------------------------ --------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------- --------------------------------
  Feature / deliverable                      What client believes they get                                                                             What is actually scoped                                                                                                                                                                    What is actually built / status evidence                                                                                                                       Divergence                                                                                           Gap type

  Historical customer-item pricing           MAIA shows last quoted/invoiced price, discount %, standard/net price, enough to avoid AutoCount lookup   SOW mentions order/quotation management and custom quotation; discovery records each customer has own pricing/discount, but SOW extract does not explicitly name historical price lookup   Apr 7 blocker; May 14 failing; Jun 7 retest/chatbot fix                                                                                                        **Material divergence** --- client treats as sign-off condition; build was not UAT-ready initially   TRANSLATION / possible CAPTURE

  Item-level discount                        Discounts by item/customer; normal percentage rounding; discount column visible                           Approval for selling below min price is scoped; detailed item-level discount mechanics not clearly scoped in SOW extract                                                                   UAT Gaps: item-level discount unsupported; 2nd UAT plan: auto-compute fix by Amirul, testing/retest                                                            **Material divergence**                                                                              TRANSLATION

  AutoCount PDF template / draft docs        Use Fixguru/AutoCount PDF style even in draft mode                                                        SOW scopes document generation; not clear that exact AutoCount draft template is guaranteed                                                                                                UAT Gaps: wrong PDF templates, default PDF for unsubmitted sales doc; 2nd UAT: custom draft PDF in progress/testing                                            **Material divergence**                                                                              TRANSLATION

  External AutoCount IDs / running numbers   Salespeople use AutoCount SBI/SPI-style IDs; MAIA must show those                                         SOW scopes AutoCount sync; exact external ID display not explicit in cited extract                                                                                                         UAT gaps: MAIA item code instead of theirs; 2nd UAT: external SKU done, external doc ID pending/WIP                                                            Divergence                                                                                           TRANSLATION

  Sales concurrency / multitasking           Sales can handle 4--10 active orders and edit mid-flow                                                    SOW non-functional peak capacity says ≥60 concurrent internal chats / 30+ orders/day, but concurrency ≠ multi-order edit context                                                           UAT Gaps: sequential flow fails; chatbot cannot edit mid-flow; concurrency needs testing                                                                       **Material divergence**                                                                              CAPTURE / TRANSLATION

  Branch contacts / delivery addresses       Customer branch-specific address/contact should flow correctly                                            Customer sync scoped; detailed branch-contact per delivery address not explicit in SOW extract                                                                                             UAT Gaps: multiple contacts/branch data not syncing; 2nd UAT: HQ+branch contact blocker/dev fixing, then done/test                                             Divergence                                                                                           CAPTURE / TRANSLATION

  Credit limit exposure                      Users/approvers see owing, current DO/SO amount, credit limit, available balance before approval          Credit-limit/term enforcement scoped; acceptance says credit checks block invoice when exceeded                                                                                            UAT Gaps: credit limit sync, inconsistent Indah Pesona figures; 2nd UAT: credit exposure first-time test/testing                                               Divergence                                                                                           TRANSLATION

  Stock balance / warehouse / shelf          Prevent oversell; show stock, shelf, warehouse, picking list info                                         Inventory and stock tracking scoped; AutoCount/WMS authoritative in baseline                                                                                                               UAT Gaps: stock balance cannot be identified; shelf/warehouse needed; 2nd UAT retests 2-warehouse/shelf                                                        Divergence                                                                                           TRANSLATION

  Raw material → finished goods planning     Sales can commit based on finished stock + raw material convertible quantity and yield variance           Discovery mentions raw materials; SOW scopes inventory/stock tracking generally                                                                                                            UAT Gaps treats multi-level stock and raw-to-finished yield as customization/chargeable discussion                                                             **Divergence if client expects it included**                                                         CAPTURE / DEFERRAL

  FOC quantity                               Same logical line has billable qty + FOC qty; stock decrements both, revenue only billable                Not explicit in SOW extract                                                                                                                                                                2nd UAT plan says FOC done; UAT gaps explains ERPNext lacks native side-by-side FOC column                                                                     Smaller divergence, likely resolved by workaround                                                    TRANSLATION

  Delivery method as SKU                     "3PL Lalamove" can be a line item because it affects accounting/e-invoice treatment                       Lalamove API / delivery options scoped; delivery-method-as-SKU not explicit                                                                                                                UAT Gaps: chatbot treated 3PL Lalamove as delivery method, not item; 2nd UAT: delivery method as SKU in scope/dev fixing                                       Divergence                                                                                           CAPTURE / TRANSLATION

  Volume/weight/cubic metrics                Needed in DN/PDF and logistics planning                                                                   Not explicit in SOW extract except inventory/logistics broadly                                                                                                                             UAT Gaps says volume metric m3 desired; 2nd UAT: volumetric BE done, FE/chatbot/PDF in progress                                                                Divergence                                                                                           CAPTURE / TRANSLATION

  Calculator formulas                        RSC + Diecut calculator in quotation; possibly latest formula behavior                                    SOW says custom box quotation module based on IAM Excel sheet                                                                                                                              2 calculators done; client now has 5 calculators and updated formula Excels; CR decision                                                                       No divergence for 2 calculators; divergence for 5/new versions                                       DEFERRAL / CR

  E-invoice choice                           Customer gets choice: individual vs consolidated; Fixguru cutoff 5th                                      E-invoice note captures specific behavior                                                                                                                                                  Build status unknown                                                                                                                                           **INSUFFICIENT EVIDENCE**                                                                            Unknown

  Language                                   English, Malay, Mandarin                                                                                  SOW says English, Malay, Mandarin                                                                                                                                                          UAT gaps: multilingual response not working; staff cannot read English; 2nd UAT: language preference in dev/done by backend/chatbot but unproven client pass   Divergence                                                                                           TRANSLATION

  Full document traceability                 One SO can have multiple DOs and one invoice per DO/date                                                  Discovery says one proforma can have 2+ DOs                                                                                                                                                UAT Gaps says make sure retrievable; build status unknown                                                                                                      Potential divergence                                                                                 TRANSLATION
  ------------------------------------------ --------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------- --------------------------------

**B9. Gaps & risks --- prioritized**

  ------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------- ----------------------- -------------------------------------------------------------------- ---------- -------------------------
  Gap / risk                                                          Evidence                                                                                                          Gap type                Impact if unaddressed                                                  Severity Owner

  Historical pricing/discount remains the account's sign-off killer   Client explicitly said cannot sign off if not done; UAT showed discount/history failures                          TRANSLATION             No UAT sign-off; RM24k milestone blocked; refund exposure                     H Gareth + Bryan + Amirul

  Trust erosion from failed first UAT                                 UAT Gaps says AutoCount faster; client said no point/wasting time/cannot proceed                                  N/A relationship        Client churn/refund posture; second UAT becomes adversarial                   H Ivan + Gareth

  Scope ambiguity: MAIA replacement vs assistant                      Client expects not to return to AutoCount; build still depends on AutoCount and partial sync fidelity             CAPTURE                 Endless "this is expected" vs "this is scope" arguments                       H Ivan + Jermaine

  AutoCount fidelity gaps                                             External IDs, PDF templates, branch contacts, delivery method-as-SKU, stock, shelf, credit exposure, 2-way sync   TRANSLATION             Client sees MAIA as slower/wrong vs current system                            H Azib + Rahim + Gareth

  Credit exposure accuracy                                            SOW scopes credit checks; UAT gaps note credit limit sync and inconsistent figures                                TRANSLATION             Wrong approval/rejection decisions; financial risk to client                  H Fariha/Haiqal/WeiShen

  Concurrency/editing mismatch                                        4--10 active customer orders; chatbot cannot edit mid-flow                                                        CAPTURE / TRANSLATION   Sales users abandon chatbot because it does not match work reality            H Bryan + Product

  Signing authority unknown                                           UAT blockers are verbal; testers named but signatory not identified                                               Governance              Wrong person signs/blocks; scope/CR disputes                                  H Gareth / Ivan

  Calculator formula versioning                                       Updated RSC/Diecut formulas and 5 calculators                                                                     DEFERRAL / CR           Perpetual formula drift; unpaid scope creep                                 M-H Gareth / Product

  Language support gap                                                SOW has English/Malay/Mandarin; UAT gaps say staff cannot read English and multilingual response not working      TRANSLATION             Adoption failure for non-English staff                                      M-H Bryan / Azib

  Raw material planning/yield variance                                Client needs raw+finished visibility; UAT gaps recommend quote/spec/charge                                        CAPTURE / DEFERRAL      Sales promise dates from incomplete availability                            M-H Ivan / Product

  E-invoice choice                                                    Specific requirement exists; implementation status unknown                                                        Unknown                 Compliance/process mismatch near monthly cutoff                               M Gareth

  WhatsApp business-initiated message billing                         Meta setup says interactive messages work, payment method later needed for business-initiated messages            Dependency              Reminder/notification failures if unpaid or not configured                    M Fixguru + Mindhive PM
  ------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------- ----------------------- -------------------------------------------------------------------- ---------- -------------------------

**B10. Relationship health & sentiment trajectory**

  ------------------------- ---------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------- ---------------
  Date / phase              Sentiment                                                              Evidence                                                                                              Confidence

  Discovery / SOW           Constructive: client has clear operational pain and measurable goals   Painpoints, order volume, SOW objectives/key results                                                  HIGH

  Apr 7 UAT brief           Cautious but cooperative; first major blocker raised                   Client agrees to test but flags management travel; then historical pricing as cannot-sign-off issue   HIGH

  May 7 Meta/pricing sync   Technical debugging plus clarification; not hostile                    WhatsApp setup solved; pricing mechanics clarified                                                    MED

  May 14 on-site UAT        **Negative / at-risk**                                                 Client repeatedly says cannot proceed, no point, wrong template/discount, wasting time                HIGH

  May 15 internal sync      Mindhive recognizes account is blocked                                 Internal note: Fixguru "totally cannot proceed"; UAT gap register created                             HIGH

  Jun 7 second UAT plan     Recovery posture                                                       Many fixes/testing items planned; second UAT scheduled with punch list                                MED

  Jun 16 prep               Still fragile                                                          Transcript shows continued testing/debugging; ASR too noisy for confident client-facing conclusion    LOW-MED
  ------------------------- ---------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------- ---------------

**Load-bearing quotes:**

"This one if it's not done right we cannot sign off because this was the deal that we want to we already agreed that we need that otherwise right this thing cannot work." \[Fixguru UAT Brief \| 2026-04-07 \| Guest\] fileciteturn2file2

"Someone will have to pick up because this was the deal that we agreed. Before we even kickstart..." \[Fixguru UAT Brief \| 2026-04-07 \| Guest\] fileciteturn6file13

"One list price. Correct. But different customers have different discount structures." \[Meta Setup Fixing \| 2026-05-07 \| Guest\] fileciteturn5file1

"You just need pull up from the system... historical past five invoices." \[Meta Setup Fixing \| 2026-05-07 \| Guest\] fileciteturn6file18

"I know need to go here... For me my sales team can kick start using... Otherwise... no point..." \[On-site UAT \| 2026-05-14 \| Guest\] fileciteturn6file8

"3% of 60 ringgit is not 3 ringgit. They capture, but they capture 3 ringgit instead of 3%." \[On-site UAT \| 2026-05-14 \| Guest/You sequence\] fileciteturn6file8

"Our is SPI... Anything else, please follow our running number." \[On-site UAT \| 2026-05-14 \| Guest\] fileciteturn5file17

"You're wasting time here." \[On-site UAT \| 2026-05-14 \| Guest\] fileciteturn3file0

**B11. Open questions / unresolved threads**

  -------------------------------------------------------- ------------------------------------------------------------------------------------------- ------------------------------------------------------- ----------------------------------------------
  Unresolved thread                                        Last touched                                                                                Why it matters                                          Evidence

  Who can sign UAT?                                        2nd UAT plan lists testers, not signatory                                                   Payment and closure depend on valid sign-off            fileciteturn4file1

  Did Jun 16--17 UAT pass, conditionally pass, or fail?    2nd UAT plan schedules it                                                                   Current account status cannot be declared closed        fileciteturn4file1

  Was historical pricing accepted by client after fixes?   Jun 7 says testing/retest                                                                   It is the top blocker                                   fileciteturn6file5

  Did credit exposure figures become accurate?             Jun 7 says testing; UAT gaps say inconsistent Indah Pesona figures                          Wrong credit decisions are financially dangerous        fileciteturn6file6

  Was exact AutoCount/Fixguru PDF template accepted?       Jun 7 says draft custom PDF template testing                                                Client objected strongly to wrong/default templates     fileciteturn6file14

  Was 2-way sync implemented or only scoped/testing?       Jun 7 says need align/testing; UAT gaps says all QTN/SO/SI from AutoCount not in MAIA yet   Without this, fallback-to-AutoCount breaks MAIA state   fileciteturn6file5 fileciteturn6file14

  Is raw-material planning included or quoted as CR?       UAT gaps says quote/spec/charge                                                             Client may treat it as operationally necessary          fileciteturn5file10

  Are updated RSC/Diecut formulas supplied?                UAT gaps says pending from Fixguru                                                          Calculator accuracy depends on latest formulas          fileciteturn5file10

  Is Volume Metrics Excel supplied?                        UAT gaps says pending / need?                                                               DN/PDF and lorry planning depend on volume metrics      fileciteturn5file10

  Was e-invoice behavior implemented in MAIA?              Mar 3 note defines process, no build evidence                                               Monthly cutoff and customer choice matter               fileciteturn6file12
  -------------------------------------------------------- ------------------------------------------------------------------------------------------- ------------------------------------------------------- ----------------------------------------------

**B12. What we do NOT know --- mandatory**

  --------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------ ----------------------------------------------
  Unknown                                                                                             Why it matters                                                                 Source/action to resolve

  Whether Fixguru signed the SOW and who signed                                                       Determines legal authority and enforceability                                  Signed SOW

  Whether RM24,000 deposit was paid                                                                   Determines commercial exposure and project state                               Payment record / invoice

  Whether RM24,000 UAT milestone was invoiced/paid                                                    Determines closure status                                                      Payment record / UAT sign-off

  Actual Jun 16--17 UAT outcome                                                                       Current relationship status hinges on this                                     UAT form, minutes, signed punch list

  Actual MAIA build state after Jun 16                                                                The plan is not proof of delivery                                              Deployment logs, QA results, client retest

  Which Fixguru person can approve CRs / deferrals                                                    Prevents scope disputes                                                        Client RACI / written email

  Whether historical pricing fixed behavior matches client expectation                                Top blocker                                                                    Client demo recording + acceptance checklist

  Whether AutoCount API supports all branch/contact/PDF/sync needs                                    Some gaps may be technical blockers                                            API docs/logs

  Whether Chinese/Malay response is contractually required as full response language or only intake   SOW says languages; internal discussion proposes partial support               Signed language acceptance criterion

  Whether e-invoice logic is in scope for current UAT                                                 Mar note exists but implementation evidence missing                            UAT cases / SOW annex

  Whether raw material/yield variance is baseline or CR                                               Client may see it as stock visibility; Mindhive notes treat as customization   CR decision doc

  Whether performance is acceptable at 30+ orders/day / 4--10 active customer contexts                UAT gap says this is real workflow; no load test evidence                      Load test + sales team shadow test
  --------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------ ----------------------------------------------

**PART C --- Synthesis**

**C1. Confidence statement**

**RICH evidence / HIGH confidence**

Historical pricing and discount visibility are sign-off critical. The client said it directly in Apr 7 UAT brief, and the same issue reappeared during May 14 UAT and Jun 7 retest planning. fileciteturn2file2 fileciteturn6file8 fileciteturn6file5

First UAT relationship health was materially at risk. The client's language and UAT gap register show inability to proceed, AutoCount being faster, and workflow mismatch. fileciteturn6file7 fileciteturn3file0

Contract value and payment structure are clear. fileciteturn6file4

SOW scope includes internal WhatsApp chatbot, AutoCount sync, credit checks, DO/invoice generation, reminders, dashboard, languages, and 30+ order/day capacity. fileciteturn2file0 fileciteturn6file3

**THIN evidence / MED-LOW confidence**

Actual build state after Jun 16 is unclear; evidence shows plans/tests, not acceptance. fileciteturn4file1

Identity/authority of Fixguru speakers is weak because transcripts use "Guest" and ASR is noisy. fileciteturn3file0

E-invoice implementation status is unknown; only process notes are available. fileciteturn6file12

Paid-vs-delivered status is unknown because payment and sign-off records are absent. fileciteturn6file4

**Conclusion that would break if wrong:** The dossier's core claim --- "material divergence exists between client expectation and build/scope at first UAT" --- would weaken only if there is later unprovided evidence showing Fixguru formally accepted all key divergences as deferred/CR and passed Jun 16--17 UAT. No such evidence was provided.

**C2. Rollup handoff note --- for cross-account Q3 plan**

**Build-once:** AutoCount fidelity layer --- external IDs, branch contacts, draft PDF template, credit exposure, stock/shelf/warehouse, document traceability. Fixguru shows these are not client-specific luxuries. fileciteturn6file14

**Product policy:** Historical pricing/customer-item discount needs a first-class module, not prompt-level patching. fileciteturn6file18 fileciteturn6file8

**Delivery governance:** Every UAT needs a signed acceptance matrix with **Pass / Deferral / CR / Out-of-scope** before the client session, not after the blow-up. fileciteturn4file1

**Commercial guardrail:** Formula versioning, new calculators, raw-material planning, and historical migration must have default CR language. fileciteturn5file10

**Portfolio signal:** If MAIA is sold as "replace your current daily workbench," parity with the client's current operational system becomes scope; if it is sold as "assist and sync," expectations must be reset before UAT. fileciteturn4file0 fileciteturn6file7

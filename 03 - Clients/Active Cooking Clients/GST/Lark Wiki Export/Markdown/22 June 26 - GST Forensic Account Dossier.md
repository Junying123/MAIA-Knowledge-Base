**22 June 26 - GST Forensic Account Dossier**

**GST Fine Foods --- Account Dossier**

**v0.1, 2026-06-22**

**Mode:** forensic single-account dossier from uploaded project sources + Fireflies coverage scan.

**Source Manifest**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Source items received / processed                                                                                                                                                                                                                           Date range                                                                                                   Volume Processed in full?

  Uploaded project files: WhatsApp export, sales narrative, RG questionnaire, RG notes, implementation plan, pre-onboarding questionnaire, SAP vendor notes, raw/combined transcripts     2026-04-13 → 2026-05-20 in WhatsApp; source docs dated 2026-04-27 → 2026-05-19                                                                                        13 uploaded files **Partially.** Full-text search + opened/high-signal docs. Raw transcripts are noisy/partly mistranscribed, so cleaned notes carry higher confidence where they reconcile to transcripts.

  Fireflies live scan                                                                                                                                                                                                                            2026-04-02 → 2026-05-04                                                                               3 GST-title meetings found **Metadata only.** Fireflies found one meeting not present in uploaded files: **2026-04-02 GST Proposal Walkthrough**. This is a coverage gap.

  WhatsApp group export                                                                                                                                                                                                                 2026-04-13 → at least 2026-05-20                                                                                               1 chat log **Partially.** Used for deal progression, async requests, setup dependencies, and relationship tone.

  Lark / working docs                                                                                                                                                                                                                            2026-04-27 → 2026-05-19   Sales narrative, RG questionnaire, implementation plan, pre-onboarding questionnaire, SAP vendor notes **Processed by targeted retrieval.** Used for scope, commercial, integration, and feature state.
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Coverage gap:** Fireflies found **GST Proposal Walkthrough, 2026-04-02**, with pricing and proposal details in its summary, but that meeting transcript is not in the uploaded project file set. Therefore **contract value and proposal-stage commitments are LOW confidence unless validated against the signed proposal**. Fireflies also found a separate **GST Fine Foods 4May26 Req Gat.m4a** that may duplicate the uploaded 4 May RG sources, but I did not fetch and reconcile it line-by-line.

**Searches run:** proposal/contract value, WhatsApp/signed proposal, SAP vendor/UDF/service layer/UAT, scope Phase 1/Phase 2, actors/authority, relationship sentiment, product matching, credit, pricing, stock transformation, SOA, CPRN, Crystal Reports. Empty or insufficient: **signed SOW, final commercial terms, UAT sign-off authority, full client org chart, actual build status, paid-vs-delivered state.**

**PART A --- Executive Layer**

**A1. Snapshot**

  ----------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------- --------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Phase                                                                                                                                                                                                                         Contract value Relationship health   Overall confidence                                                                      One-line status

  Post-sign / requirements + integration discovery; pre-UAT / pre-build-proof     **INSUFFICIENT EVIDENCE in uploaded files**. Fireflies summary mentions base fee 27,500 and monthly charges from 2,500, but signed proposal is not provided. **Amber**             **MED** overall; HIGH on operational gaps, LOW on commercial finality and build state   GST has bought a coordination layer around SAP/WhatsApp, but the account is exposed on SAP integration, UDF mapping, stock transformation, branch ownership, and scope boundary clarity.
  ----------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------- --------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Confidence:** MED. Strong evidence exists for client pains, integration dependencies, and required features; weak evidence exists for final contract, actual delivery, payment, and UAT ownership. fileciteturn3file13 fileciteturn3file1 fileciteturn2file0

**A2. Top 5 things that matter most right now --- client POV**

  --------------- ------------------------------------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------
             Rank What matters                                                             Finding                                                                                                                                                                                                                                         Confidence

                1 **SAP integration must work, not just demo well.**                       GST's processes depend on SAP item/customer masters, pricing, credit limits, sales orders, invoices, SOA, stock, and branch ownership; SAP integration is explicitly called the main blocker requiring the SAP vendor. fileciteturn1file18   HIGH

                2 **Pricing cannot be wrong.**                                             GST uses customer-specific pricing / SAP Blanket Agreements; the notes state MAIA "must support or integrate" with this logic and that failure makes order creation dangerous. fileciteturn2file0                                            HIGH

                3 **Stock reality is messy and time-sensitive.**                           Variable-weight fish, stock transformation, actual picked quantity, and committed-order visibility are real operating requirements, not edge cases. fileciteturn2file0                                                                       HIGH

                4 **WhatsApp is the operational bottleneck MAIA is supposed to reduce.**   Order information currently flows through WhatsApp/informal communication, creating dependency on people remembering, forwarding, approving, and re-keying correctly. fileciteturn2file0                                                     HIGH

                5 **Scope creep is already appearing.**                                    Soo Chin asked for sales check-in/location and customer visit reporting; Ivan replied that MAIA does not currently have it and asked whether they want it customized. fileciteturn3file5                                                     HIGH
  --------------- ------------------------------------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------

**A3. Ultimax check --- headline**

**Does what GST believes they are buying match what is scoped and buildable?**

**Partial match, with one dangerous divergence: GST appears to believe MAIA will become the operational control layer for real-world seafood order execution, but several make-or-break mechanics remain outside confirmed Phase 1 or dependent on SAP/vendor readiness.** The highest-risk divergence is **stock transformation / real-time inventory truth**: GST's physical workflow creates variable weights, transformations, actual picked quantities, and timing lags; MAIA can coordinate and surface committed stock, but the implementation plan explicitly says MAIA does not replace SAP's transformation workflow and does not eliminate stock visibility lag in Phase 1. fileciteturn2file0 fileciteturn2file1

**Confidence:** HIGH for divergence existence; LOW for whether GST has explicitly accepted the limitation, because signed SOW / UAT criteria are not provided.

**A4. Recommended next moves**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Move                                                                                                                                                                                      Owner                               Tied finding

  Freeze a **Phase 1 acceptance matrix**: SAP sync, Blanket Agreement pricing, Crystal document outputs, credit approval routing, committed-stock visibility, actual picked qty boundary.   Ivan / Gareth + GST Joey            Scope includes many operationally critical features; UAT ownership and pass thresholds remain unresolved in uploaded sources. fileciteturn3file3

  Run a **SAP integration gate review** before build commitment: UDF list, service-layer coverage, custom endpoints, UAT server, production-mirrored data, security/VPN access.             Jermaine / Azib + GST IT / Aspert   SAP vendor notes say custom fields must be mapped before integration can begin and custom endpoints may be required. fileciteturn3file1

  Send GST a **scope boundary memo** separating Phase 1, optional customization, Phase 2, and "not solved by MAIA."                                                                         Ivan / Gareth                       Check-in/location, SOA, CPRN, transformation capture, expiry/batch alerts, and advanced approval logic are not all cleanly Phase 1. fileciteturn3file5 fileciteturn3file14
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**PART B --- Evidence Layer**

**B1. Source manifest & coverage / blindness**

**Source-type blindness**

  ----------------------------- ----------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------
  Source type                   What it can show                                                              What it cannot show

  Transcripts / meeting notes   Stated requirements, technical dependencies, client pain points, next steps   Actual production behavior, whether build exists, whether GST accepted scope limits

  WhatsApp export               Async momentum, responsiveness, client requests, setup dependencies           Full sentiment, internal private views, signed proposal content, client-side offline concerns

  Lark / working docs           Structured scope and implementation interpretation                            Whether client agreed to every item, whether document reflects final contract

  Fireflies metadata            Meeting existence / summary-level coverage                                    Full reliable evidence unless fetched and reconciled
  ----------------------------- ----------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------

**Fireflies coverage table**

  ----------------------------------- ------------ -------------------------------- ------------------------ -------------------------------------------
  Meeting                                     Date Participants                     Matched by               Already in project?

  GST Proposal Walkthrough              2026-04-02 Jeremy, Soo Chin, Johnson, Tim   title "GST"              **N** --- coverage gap

  Gst Requirements gathering            2026-05-04 Brendan shown                    title "GST"              Likely duplicate / partial of uploaded RG

  GST Fine Foods 4May26 Req Gat.m4a     2026-05-04 not shown in result              title "GST Fine Foods"   Likely duplicate / not reconciled
  ----------------------------------- ------------ -------------------------------- ------------------------ -------------------------------------------

**Uploaded-source manifest anchors**

The consolidated transcript file claims it is the source of truth for RG processing, SOW drafting, and SAP integration planning, and lists seven chronological meeting/note items from 2026-04-27 to 2026-05-19. fileciteturn3file9

**B2. Chronological timeline**

  ------------------------- ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------ ------------------------------------------------------------------------------------------------------------------------------- ------------------------
                       Date Event                                                                                                                         Who                                  What changed                                                                                                                    Source

                 2026-04-02 Proposal walkthrough existed in Fireflies                                                                                     Jeremy, Soo Chin, Johnson, Tim       Coverage gap: proposal-stage commitments and commercial numbers not in uploaded files                                           Fireflies scan

                 2026-04-13 Written proposal sent; signed copy requested by Wednesday                                                                     Jeremy → Soo Chin                    Deal entered proposal/signature motion                                                                                          fileciteturn3file13

                 2026-04-24 Soo Chin shared signed/annotated document link; Mindhive said they would arrange RG and start work                            Soo Chin, Jeremy                     Account appears accepted / moved to kickoff                                                                                     fileciteturn3file13

                 2026-04-27 Brendan and Gareth added for requirements gathering                                                                           Jeremy                               Delivery ownership moved from sales to product/RG                                                                               fileciteturn3file13

                 2026-04-27 Internal GTM brief captured RFQ/product matching, stock checks, Crystal Reports, payment/credit approval, CPRN/SOA concepts   Mindhive internal                    Early solution framing established                                                                                              fileciteturn3file9

                 2026-05-03 RG questionnaire prepared                                                                                                     Mindhive                             Open questions created for branch rollout, SAP structure, RFQ, pricing, credit, documents, CPRN, UAT                            fileciteturn3file17

                 2026-05-04 Requirements gathering session held                                                                                           GST + Mindhive                       Business process, operational pains, and customization areas captured                                                           fileciteturn2file0

                 2026-05-04 Critical customizations identified                                                                                            GST + Mindhive                       Fish UOM, stock transformation, customer preferences, pricing, branch access, Crystal Reports, SOA, payment workflow surfaced   fileciteturn3file18

    2026-05-07 → 2026-05-08 Client asked for sales check-in/location and customer visit reports; Mindhive said not currently in MAIA                      Soo Chin, Ivan                       New customization request surfaced outside core scope                                                                           fileciteturn3file5

                 2026-05-12 Gareth followed up on SAP vendor; Jun asked "what is next step?"; Soo Chin requested WhatsApp phone setup help                Gareth, Jun, Soo Chin                SAP/vendor and WABA setup dependency active                                                                                     fileciteturn3file5

                 2026-05-12 Pre-onboarding questionnaire dated                                                                                            Mindhive                             Documents client-to-complete gaps and operational data                                                                          fileciteturn2file2

                 2026-05-13 WABA/OpenAI/AWS setup session locked for Tuesday 11am; SAP vendor name provided                                               Gareth, Soo Chin, Jun                Infrastructure and SAP vendor path formalized                                                                                   fileciteturn3file15

                 2026-05-19 WABA account setup meeting                                                                                                    GST + Mindhive                       Setup transcript exists but is low-quality/noisy; usable only as proof session happened                                         fileciteturn3file8

                 2026-05-19 SAP Vendor × Mindhive meeting                                                                                                 Jermaine, Jun, Sharon, Ling, Hasma   Middleware/JWT/service-layer/custom-endpoint/UAT architecture clarified                                                         fileciteturn3file1

                 2026-05-20 Onboarding/data-prep session proposed; Soo Chin asked if same as MAIA system                                                  Gareth, Soo Chin, Jeremy             Possible client confusion between onboarding/data prep and MAIA system itself                                                   fileciteturn3file15
  ------------------------- ----------------------------------------------------------------------------------------------------------------------------- ------------------------------------ ------------------------------------------------------------------------------------------------------------------------------- ------------------------

**Timeline gaps:** No uploaded evidence between 2026-05-20 and 2026-06-22 showing build progress, UAT, payment, SOW acceptance, or client satisfaction.

**B3. The client's world**

GST is a seafood business spanning farming/hatchery/processing/trading/distribution, with frozen/chilled/live seafood and B2B customers including supermarkets, hotels, and restaurants. fileciteturn2file0

Operationally, orders arrive through WhatsApp, salesperson communication, sales coordinator input, online portals, POs, voice messages, Excel/PDF documents, and B2B/B2C channels. fileciteturn2file0

Their pain is not "no ERP." SAP exists. The pain is that real work happens around SAP through WhatsApp, manual checking, staff memory, paper, and re-keying. fileciteturn3file2

**Success, from GST's POV:** fewer missed orders, correct customer-specific pricing, usable stock answers, faster approval/payment handling, correct SAP documents, and less dependence on people remembering operational context. fileciteturn3file11

**Failure, from GST's POV:** wrong SAP data, wrong pricing, oversold/incorrect stock, broken Crystal document outputs, delayed credit/payment approval, or a MAIA workflow that cannot fit seafood transformation reality. fileciteturn3file14 fileciteturn2file0

**B4. Actors --- profiles + decision map**

  ----------------------- ------------------------------------------ ---------- ------------------------------------ -------------------- --------------------------------------------------- ---------------------------------------------- ----------------------------------------------------------------------------------------------------------------------
  Name                    Role                                       Side       Authority                            Signing authority?   What they want                                      Sentiment / trajectory                         Representative quote / evidence

  Soo Chin                Boss / senior client sponsor               GST        Decision / Influence                 **UNKNOWN**          Move project forward; asks about new capabilities   Engaged but introduces scope expansion         Asked for sales check-in/customer visit report; Mindhive said MAIA does not currently have it. fileciteturn3file5

  Tim                     Operations manager                         GST        Influence / operational owner        UNKNOWN              Operational workflow fit                            High operational relevance                     Listed as operations manager in Ivan notes. fileciteturn1file16

  Teoh Le Ying / Leying   CEO wife / purchasing role                 GST        Influence                            UNKNOWN              Pricing/purchasing correctness                      Important but authority unclear                Pricing owner in pre-onboarding: Purchasing "Leying & Ms Beh." fileciteturn2file2

  Joey                    Sales / internal project owner             GST        Coordination owner                   UNKNOWN              Coordinate departments and implementation           Positive/owner role                            Joey identified as internal product/project owner. fileciteturn1file18

  Jun / 陳偉俊            GST technical/contact for WABA/SAP setup   GST        Influence / technical coordination   UNKNOWN              Setup WhatsApp and vendor coordination              Responsive; asks "what next step?"             Jun provided number and asked next step; Soo Chin asked Mindhive to assist Jun. fileciteturn3file5

  Jermaine                CTO / SAP integration lead                 Mindhive   Technical decision                   N/A                  Reduce SAP integration risk                         Direct technical owner                         SAP vendor notes name Jermaine and architecture decisions. fileciteturn3file1

  Gareth                  Product / account implementation           Mindhive   Delivery coordination                N/A                  RG, SAP vendor, setup, questionnaire                Active follow-up                               Followed up on SAP vendor, WABA/OpenAI/AWS, questionnaire. fileciteturn3file15

  Ivan                    Product/engineering leadership             Mindhive   Scope / product decision             N/A                  Scope clarity                                       Gave explicit limitation on check-in feature   "MAIA currently does not have this feature..." fileciteturn3file5
  ----------------------- ------------------------------------------ ---------- ------------------------------------ -------------------- --------------------------------------------------- ---------------------------------------------- ----------------------------------------------------------------------------------------------------------------------

**Authority ambiguity --- HIGH risk:** who signs UAT, SOW changes, Phase 1 acceptance, custom-scope addenda, and SAP integration readiness is not resolved in the uploaded sources. The RG questionnaire explicitly asks who signs off Phase 1 and Phase 2 UAT, meaning it was open at prep stage. fileciteturn3file3

**B5. Commercial state**

  --------------------- ------------------------------------------------------------------------------- --------------- -----------------------------------------------------------------------------------------------------------------
  Item                  State                                                                           Confidence      Evidence

  Signed proposal       Likely signed / accepted, but actual signed file not uploaded                   MED             Soo Chin shared "Goh's document"; Jeremy thanked him and said RG/start work would begin. fileciteturn3file13

  Contract value        **INSUFFICIENT EVIDENCE in uploaded files**                                     LOW             Fireflies summary mentions 27,500 base and monthly charges from 2,500, but no signed proposal in files.

  Payment milestones    **INSUFFICIENT EVIDENCE**                                                       LOW             No uploaded signed SOW/payment schedule found.

  Paid-vs-delivered     **INSUFFICIENT EVIDENCE**                                                       LOW             No invoice/payment/delivery status evidence.

  Change requests       Sales check-in/location/customer visit report is a new custom feature request   HIGH            Soo Chin asked for it; Ivan said MAIA does not currently have it. fileciteturn3file5

  Infrastructure cost   GST bears AWS raw server cost directly; Mindhive deploys into GST AWS           MED             RG notes list AWS under GST account and raw server cost borne by GST. fileciteturn1file18
  --------------------- ------------------------------------------------------------------------------- --------------- -----------------------------------------------------------------------------------------------------------------

**B6. Commitments ledger**

  --------------------------------------------------------------------- ---------------------------- ----------------------------- ---------------------------- ---------------------- --------------------------------------------------------------------------------------------------------------------------------
  Commitment                                                            Direction                    Made when / where             Due                          Status                 Evidence

  Arrange requirements gathering and start work after signed proposal   Mindhive → GST               2026-04-24 WhatsApp           Next week                    Met                    Jeremy said he would arrange RG next week and start work; RG occurred 2026-05-04. fileciteturn3file13 fileciteturn2file0

  Make RG physical / visit Rawang office                                Mindhive ↔ GST               2026-04-30 WhatsApp           2026-05-04                   Met                    GST confirmed Tim and Leying would take team to visit KL/business operation. fileciteturn0file6

  Provide remaining questionnaire blanks                                Client → Mindhive            2026-05-13 WhatsApp           Next Monday                  Partially evidenced    Gareth asked; later "We have done" appears on 2026-05-14. fileciteturn3file15

  Provide SAP vendor name                                               Client → Mindhive            2026-05-13 WhatsApp           Immediate                    Met                    Jun named Aspert Innovations Sdn. Bhd. fileciteturn3file15

  Set up WABA / OpenAI API / AWS                                        Client + Mindhive            2026-05-12 WhatsApp           Tuesday 11am session         Open / partially met   Setup session scheduled; WABA transcript exists, but completion not evidenced. fileciteturn3file5

  Provide SAP custom/UDF field list                                     Client / GST IT → Mindhive   2026-05-19 SAP vendor notes   Before dev starts            Open                   Notes say mapping required before dev work starts. fileciteturn3file1

  Provision SAP UAT / mirrored production data                          GST IT → Mindhive            2026-05-19 SAP vendor notes   Before integration testing   Open                   UAT server with mirrored data is required. fileciteturn3file1

  Provide screen recording / walkthrough of SAP stock transformation    Client → Mindhive            2026-05-04 RG notes           Not specified                Open                   Action required in stock transformation section. fileciteturn2file0
  --------------------------------------------------------------------- ---------------------------- ----------------------------- ---------------------------- ---------------------- --------------------------------------------------------------------------------------------------------------------------------

**B7. Decisions log**

  -------------------------------------------------------------------------------------------------------------- ---------------------------------- --------------------------------------- ---------------------------------------- --------------------------------------------------------------------------------------------
  Decision                                                                                                       Made by                            When / where                            Locked or reversible                     Downstream impact

  Proceed to RG after proposal                                                                                   GST + Mindhive                     2026-04-24 WhatsApp                     Likely locked                            Kicked off delivery/RG. fileciteturn3file13

  Treat MAIA as non-ERP replacement; SAP remains source of record                                                Mindhive scope framing             Sales narrative / implementation plan   Should be locked                         Prevents MAIA being judged as full SAP replacement. fileciteturn3file14

  Keep KG as commercial/costing base for variable-weight fish, avoid serial-level complexity for current phase   RG conclusion                      2026-05-04 RG notes                     Reversible but costly                    Defines fish UOM boundary. fileciteturn2file0

  Stock transformation stays in SAP                                                                              Implementation plan                2026-05-05                              Should be locked for Phase 1             Prevents scope blowout; leaves stock-lag issue partially unresolved. fileciteturn2file1

  Start SAP integration with standard service layer, then custom endpoints where needed                          Jermaine / SAP vendor discussion   2026-05-19                              Reversible technically                   Defines integration architecture and work sequencing. fileciteturn3file1

  Use GST-owned AWS / GST setup for infrastructure                                                               RG notes                           2026-05-04                              Reversible but operationally important   GST bears raw server cost; Mindhive needs access. fileciteturn1file18

  Initial phase should focus on Penang branch first                                                              RG notes                           2026-05-04                              Reversible                               Limits rollout complexity. fileciteturn1file18
  -------------------------------------------------------------------------------------------------------------- ---------------------------------- --------------------------------------- ---------------------------------------- --------------------------------------------------------------------------------------------

**B8. Understood deliverable vs scope vs build --- feature by feature**

  --------------------------------- ----------------------------------------------- ---------------------------------------------------------------------------------- --------------------------- ----------------------------------------------------------------- ------------------------
  Feature                           What client believes they get                   What's actually scoped                                                             What's actually built       Divergence                                                        Gap type

  Excel quotation intake            MAIA helps turn RFQ files into usable drafts    Included: quotation intake from Excel and draft preparation                        **INSUFFICIENT EVIDENCE**   No build proof provided                                           N/A

  Product matching                  Suggest likely GST internal item matches        Included, but not perfect autonomous matching unless deeper customization          **INSUFFICIENT EVIDENCE**   Ambiguous products still need human review                        DEFERRAL / TRANSLATION

  Sales order creation              Faster structured order flow into SAP           Included, dependent on agreed downstream ERP behavior                              **INSUFFICIENT EVIDENCE**   SAP integration unresolved                                        DEFERRAL

  SAP sync                          Correct SAP B1 integration                      Scoped as critical; standard service layer first, custom endpoints as needed       **INSUFFICIENT EVIDENCE**   UDF mapping and UAT access still open                             DEFERRAL

  Crystal Reports document format   Documents must match SAP/Crystal expectations   Downstream document generation in scope for agreed outputs                         **INSUFFICIENT EVIDENCE**   PDF gold standards still required                                 DEFERRAL

  Blanket Agreement pricing         Customer-specific SAP pricing must apply        Must support/integrate; not optional                                               **INSUFFICIENT EVIDENCE**   KL practice unconfirmed; SAP integration dependency               CAPTURE / DEFERRAL

  Credit approval                   Faster structured credit approval               Selected approval support in base scope; advanced matrices not assumed             **INSUFFICIENT EVIDENCE**   Approval authority and SAP-side release flow unclear              TRANSLATION

  Payment slip handling             Payment proof routed cleanly                    Basic payment slip review/mismatch support included; advanced exception optional   **INSUFFICIENT EVIDENCE**   Multi-invoice/partial payment complexities need SAP mapping       DEFERRAL

  Stock transformation              System fits seafood cutting/repacking           SAP remains transformation engine; MAIA does not replace it                        **INSUFFICIENT EVIDENCE**   Dangerous if GST expects MAIA to solve real-time transformation   TRANSLATION

  Actual picked quantity            Capture actual picked qty in system             Required by RG notes                                                               **INSUFFICIENT EVIDENCE**   Not clearly tied to Phase 1 scope in final signed SOW             CAPTURE

  Confirmed stock reservation       Prevent overselling already-committed stock     Required / should support committed stock visibility                               **INSUFFICIENT EVIDENCE**   Needs source-of-truth definition                                  TRANSLATION

  Informal stock booking / CPRN     Track pre-PO commitments                        Optional / Phase 2 or future enhancement depending confirmation                    **INSUFFICIENT EVIDENCE**   Client expectation may exceed Phase 1                             DEFERRAL

  SOA automation                    Monthly SOA / secure customer access            Optional customization / Phase 2 subject to SAP feasibility                        **INSUFFICIENT EVIDENCE**   Not Phase 1 unless pulled forward                                 DEFERRAL

  Sales check-in/location           Sales visit check-in and report digitization    Not currently in MAIA; customization question asked                                Not built                   Clear scope creep                                                 CAPTURE

  Batch/expiry alerting             Stock aging / expiry visibility                 Batch-level expiry impossible unless SAP captures batch/expiry                     **INSUFFICIENT EVIDENCE**   Client may expect expiry logic despite data limitation            TRANSLATION
  --------------------------------- ----------------------------------------------- ---------------------------------------------------------------------------------- --------------------------- ----------------------------------------------------------------- ------------------------

Evidence anchors: scope summary and exclusions. fileciteturn3file14 Critical customizations. fileciteturn3file18 Check-in request. fileciteturn3file5

**B9. Gaps & risks --- prioritized**

  -------------------------------------------------------- ---------------------------------------------------------------- ------------- ----------------------------------------------------------- ---------- ----------------------------
  Gap / risk                                               Evidence                                                         Gap type      Impact                                                      Severity   Owner

  SAP UDF/custom field mapping not complete before dev     Custom fields must be mapped before integration can begin        DEFERRAL      Build stalls or incorrect SAP payloads                      H          Jermaine / Gareth / GST IT

  UAT / mirrored SAP data not evidenced as provisioned     Dev/UAT server mirroring production required                     DEFERRAL      Cannot validate real workflow                               H          GST IT

  Blanket Agreement pricing not safely integrated          Pricing must integrate; failure makes order creation dangerous   TRANSLATION   Wrong customer pricing                                      H          Product + SAP

  Stock transformation expectation mismatch                MAIA does not replace SAP transformation workflow                TRANSLATION   Overselling / wrong stock promise / client disappointment   H          Ivan / Gareth

  Actual picked quantity capture unclear in signed scope   RG says MAIA should capture it                                   CAPTURE       Warehouse execution remains manual/delayed                  H          Product

  Branch/data ownership model must mimic SAP               MAIA must support branch attribution and visibility              TRANSLATION   Data leakage / wrong document visibility                    H          Engineering

  Check-in/location request outside current product        MAIA does not currently have it                                  CAPTURE       Scope creep / commercial ambiguity                          M          Ivan / Gareth

  Relationship confusion around onboarding vs MAIA         Soo Chin asked "Is this same with our Maia system?"              CAPTURE       Misaligned expectations                                     M          Gareth

  No signed SOW/commercial evidence in uploaded files      Proposal walkthrough and signed doc not uploaded                 CAPTURE       Commercial disputes / delivery ambiguity                    H          Account owner
  -------------------------------------------------------- ---------------------------------------------------------------- ------------- ----------------------------------------------------------- ---------- ----------------------------

**B10. Relationship health & sentiment trajectory**

**Overall: Amber.** The relationship is active and cooperative, but not risk-free.

  ------------------------- ---------------------------------------------------------------------- --------------------------------- ------------------------
  Period                    Signal                                                                 Sentiment read                    Evidence

  2026-04-13 → 2026-04-24   Proposal shared, signed/returned document likely shared                Positive / moving forward         fileciteturn3file13

  2026-04-28 → 2026-05-04   GST responsive on scheduling and office visit                          Cooperative                       fileciteturn3file13

  2026-05-07 → 2026-05-08   New check-in/location request; Mindhive says not currently available   Scope expansion risk              fileciteturn3file5

  2026-05-12 → 2026-05-13   Jun asks "what is next step?"; setup session arranged                  Client needs clearer sequencing   fileciteturn3file5

  2026-05-20                Soo Chin asks whether onboarding/data prep is same as MAIA system      Possible conceptual confusion     fileciteturn3file15
  ------------------------- ---------------------------------------------------------------------- --------------------------------- ------------------------

**Client-side sentiment:** engaged, cooperative, asking practical questions.

**Internal-team sentiment:** not assessed; no internal candid source provided beyond working notes.

**B11. Open questions / unresolved threads**

  ----------------------------------------------------------- ----------------------------- ---------------------------------------------------------------
  Open question                                               Last touched                  Why it matters

  Who signs Phase 1 / Phase 2 UAT?                            RG questionnaire asks it      Acceptance risk. fileciteturn3file3

  What is final signed contract value and payment schedule?   Proposal/signature WhatsApp   Commercial risk. fileciteturn3file13

  Has GST provided SAP UDF/custom field list?                 SAP vendor notes              Integration blocker. fileciteturn3file1

  Has GST provided SAP UAT access / mirrored data?            SAP vendor notes              Testing blocker. fileciteturn3file1

  Is KL using Blanket Agreement like Penang?                  RG notes                      Pricing correctness. fileciteturn2file0

  Is actual picked qty in Phase 1?                            RG notes                      Warehouse execution and stock accuracy. fileciteturn2file0

  Is SOA Phase 2 or pulled forward?                           RG questionnaire / notes      Scope control. fileciteturn3file3

  Is sales check-in/location a paid customization?            WhatsApp                      Scope creep. fileciteturn3file5

  Are Crystal gold-standard PDFs provided?                    RG questionnaire              UAT pass/fail definition. fileciteturn3file3
  ----------------------------------------------------------- ----------------------------- ---------------------------------------------------------------

**B12. What we do NOT know --- load-bearing unknowns**

  ----------------------------------------------- -------------------------------------------------------------------- ------------------------------------------------
  Unknown                                         Why it matters                                                       What resolves it

  Final signed proposal / SOW contents            Defines what Mindhive actually owes GST                              Signed proposal + SOW upload

  Final contract value / payment terms            Commercial accountability                                            Signed commercial doc

  Actual build status as of 2026-06-22            Determines whether risks are theoretical or live delivery failures   Sprint board / deployment logs / demo evidence

  UAT owner and sign-off authority                Prevents Lean Giap-style signoff ambiguity                           Named UAT RACI signed by GST

  SAP UDF list and endpoint feasibility           Determines integration path and effort                               SAP field mapping workshop + written mapping

  Whether GST accepts Phase 1 stock limitations   Prevents future "you promised real-time stock" dispute               Scope boundary memo signed/acknowledged

  Whether check-in/location is in or out          Prevents unpaid scope expansion                                      CR quote / explicit deferral

  Whether KL pricing process matches Penang       Prevents wrong pricing logic                                         GST confirmation + SAP data sample
  ----------------------------------------------- -------------------------------------------------------------------- ------------------------------------------------

**PART C --- Synthesis**

**C1. Confidence statement**

**RICH evidence:** operational pains, GST business workflow complexity, WhatsApp dependency, variable-weight seafood handling, stock transformation, pricing/Blanket Agreement dependency, SAP integration dependency, branch visibility, and open setup dependencies. These are supported across RG notes, implementation plan, questionnaire, WhatsApp, and SAP vendor notes. fileciteturn2file0 fileciteturn2file1 fileciteturn2file2 fileciteturn3file1

**THIN evidence:** final commercial terms, exact paid/delivered state, signed SOW, final acceptance criteria, build completion, and UAT signoff. These are not established in uploaded files.

**Where a wrong assumption breaks the dossier:** If the signed proposal explicitly excluded SAP pricing, actual picked quantity, Crystal layouts, SOA, CPRN, and stock transformation constraints, then the risk profile shifts from "delivery mismatch" to "client expectation management." If the signed proposal included them all in Phase 1, then this account is materially under-scoped unless build evidence exists.

**C2. Rollup handoff note --- for Q3 cross-account plan**

**SAP B1 integration is a portfolio pattern**: UDF mapping, service-layer limits, custom endpoints, UAT data, and Crystal Reports must become a repeatable pre-build checklist. fileciteturn3file1

**WhatsApp-to-structured-workflow is the core MAIA wedge**, but only works if acceptance criteria are operational, not conversational. fileciteturn3file11

**Seafood/variable-weight inventory should be treated as a vertical complexity class**, not generic stock management. fileciteturn2file0

**Every account needs a scope-boundary memo after RG**, especially where clients ask for adjacent workflow digitization like sales check-in/location. fileciteturn3file5

**No Q3 rollout plan should count an account as healthy without signed UAT authority, signed scope, and integration-readiness evidence.** fileciteturn3file3

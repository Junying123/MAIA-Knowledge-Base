**22 June 26 - Forensic Account Dossier**

**Macro Frozen --- Account Dossier (v1, 2026-06-21)**

**Source Manifest --- received and processed**

  --------------------------------------------- ----------------------------- -------------------------------------------------------------------- --------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Source item                                                      Date range                                                               Volume Processed in full?                Notes

  WhatsApp export \_chat.txt                              15 May--19 Jun 2026   110 timestamped messages; attachments referenced but not extracted **Text: yes. Attachments: no.**   Shows async coordination, payment confirmation, onboarding, data/sample submission, catalogue follow-up, SQL blocker, and late scope clarification. fileciteturn4file16

  F2F transcript                                                   4 Jun 2026                                        1 transcript, 68 parsed pages **Yes**                           Best source for real workflow, client pain, scope negotiation, and what was actually said in the room. fileciteturn2file2

  4 Jun meeting notes                                              4 Jun 2026                                                1 meeting-minutes doc **Yes**                           Best compressed record of agreed decisions and action items. fileciteturn0file0

  Signed proposal PDF                                             13 May 2026                                               23-page image-only PDF **Partial**                       Text could not be parsed by file search; I used the rendered page images where visible and cross-checked with the handover/narrative doc. Treat exact PDF-only claims as **MED confidence**. fileciteturn0file2

  Requirement gathering questionnaire             Prepared for 4 Jun 2026 F2F                                                          1 guide doc **Yes**                           Mostly a planned discovery guide, not client answers; useful for coverage gaps and named-but-not-provided source list. fileciteturn4file5

  Customer narrative / product handover doc       Post-sales handover context                                              1 internal handover doc **Yes**                           High-value internal synthesis, but contains some scope assumptions that conflict with F2F clarification. fileciteturn4file1

  Meeting 1 business workflow deep-dive guide                   Generic guide                                                      1 process guide **Yes**                           Methodology source only; not account-specific evidence. fileciteturn1file11
  --------------------------------------------- ----------------------------- -------------------------------------------------------------------- --------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

I did **not** need chunked mode for the available text sources. The one caveat is the signed proposal PDF: it is image-only, so I did not treat it as a fully searchable text source.

Named-but-not-provided sources: sales transcript / rough requirement gathering, sales handover brief from Jeremy, pre-onboarding survey, and WhatsApp attachments such as Excel files, PDFs, images, and videos are referenced but not provided as independently processable source files. fileciteturn4file5

**PART A --- Executive Layer**

**A1. Snapshot**

  -------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------- --------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Phase                                                                                                                                                                   Contract value Relationship health   Overall confidence   One-line status

  Implementation / Phase 1 pre-go-live; training + go-live targeted for 26 Jun 2026 but blocked by SQL vendor access     **RM40,000 package**; 50% upfront payment confirmed in WhatsApp **Amber**             **MED-HIGH**         Paid onboarding is active, workflow is now much clearer, but Phase 1 success depends on locking the pick-list/fresh-weight handoff, SQL integration access, and hard scope boundaries around stock entry and catalogue generation.
  -------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------- --------------------- -------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Evidence: RM40,000 is the internal commercial structure in the handover doc, and WhatsApp confirms "50% upfront payment" was received. fileciteturn4file1 fileciteturn2file1

**A2. Top 5 things that matter most right now**

**SQL integration is the live blocker.** Gareth explicitly told the group the 26 Jun training/go-live plan depends on SQL vendor access, because without it MAIA cannot pull live customers/SKUs into the training environment. fileciteturn4file7

**The warehouse/stock-entry expectation is the most dangerous scope gap.** The client's pain is human picking/weighing/checking error, not simply GRN extraction; MAIA explicitly said there is "not really a direct feature" for that problem, while the handover doc still describes GRN photo/simple stock entry as expected Phase 1 support. fileciteturn3file13 fileciteturn3file5

**The Phase 1 workflow has changed from the clean target flow.** The agreed WhatsApp recap says Sales will still create a draft SO internally and run its own pick list, warehouse confirms weight on paper, and only the confirmed pick list goes into MAIA to create SO → DO → Invoice. That is not the ideal end-state MAIA-first pick flow. fileciteturn3file11

**Product catalogue is committed but not yet cleanly specified.** The client wants visual/image catalogues, not PDFs; post-meeting, Gareth still needed GPT links, all three Excel files, last three months' catalogue images, and SKU/language mapping clarification. fileciteturn3file14

**AR must stay bounded to customer invoice matching.** AP supplier payments, expenses, and merchant/QR settlement reconciliation were explicitly pushed out or treated as unsuitable; MAIA's safe AR principle is suggest/flag/user-confirm, not autonomous finance. fileciteturn1file17 fileciteturn4file6

**A3. The Ultimax check --- headline**

**There is a material divergence.** The client appears to be buying operational certainty in a messy frozen-food workflow: WhatsApp order capture, fresh-weight adjustment, payment matching, pricing control, stock accuracy, and catalogue automation. What is actually scoped/built for Phase 1 is narrower: core MAIA workflow first, customizations separately, SQL integration where access allows, fixed-template catalogue generation, standard AR matching, and no WMS/barcode/picking-error prevention. The single most dangerous divergence is **warehouse stock accuracy**: the client's real pain is human error in picking/weighing/checking; MAIA can capture stock-entry records or support guided flows, but it will not prevent the physical error without SOP discipline, barcode/WMS, weighing-scale integration, or a separate warehouse automation scope. fileciteturn3file13 fileciteturn3file0 fileciteturn3file5

**Confidence: HIGH** on the divergence; **MED** on how strongly the client still expects MAIA to solve it after the 4 Jun clarification.

**A4. Recommended next moves**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Move                                                                                                                                                                                                                                                                                              Owner                   Why

  Issue a **one-page scope lock** before training: Base Phase 1, Confirmed Customizations, Deferred Phase 2, Out of Scope. Explicitly name stock-entry, WMS/barcode, catalogue, memo/freeform image generation, AR/AP/merchant reconciliation, delivery trip, CN numbering, and proforma invoice.   Ivan + Gareth           This is the cheapest way to stop post-payment expectation drift. The file already contains multiple scope boundaries; they need to be converted into client-facing sign-off. fileciteturn4file0

  Treat **SQL vendor access** as the critical path and maintain a degraded-demo contingency.                                                                                                                                                                                                        Gareth + Tech owner     The 26 Jun plan is already at risk; without SQL access, training cannot be fully integrated. fileciteturn4file7

  Run a **workflow/UAT sign-off session** with David, CJ, Finance, and warehouse user before build assumptions harden.                                                                                                                                                                              Product owner + David   UAT authority, catalogue data, pick-list handoff, approval thresholds, CN numbering, proforma invoice, and user permissions remain unresolved or only partially resolved. fileciteturn4file5
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**PART B --- Evidence Layer**

**B1. Source manifest & coverage/blindness**

Transcripts show the richest operational truth, but they do not show what the client later believed after the room; WhatsApp shows async pressure and blockers, but message count does not equal importance; internal handover docs show sanctioned scope, but they may lag behind reality; the proposal PDF is signed/commercially important but image-only, so exact PDF claims need cross-checking. fileciteturn2file2 fileciteturn4file16 fileciteturn4file1 fileciteturn0file2

**B2. Chronological timeline**

  --------------- ---------------------------------------- ----------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------
  Date            Event                                    Who                                                   What changed                                                                                                                                                                                              Source

  13 May          Proposal prepared                        AutorunBiz / Macro Frozen                             Proposal visually shows Macro Frozen x MAIA package, Phase 1 scope, RM40k commercial total, RM2.5k/month subscription, and exclusions.                                                                    fileciteturn0file2

  15--16 May      WhatsApp group created                   Krystle, Jeremy, David, CJ, others                    Project communication group starts; David says it is "for ai set up communication."                                                                                                                       fileciteturn4file16

  18 May          GR voice-entry concern raised            How Siang                                             Early warning: voice-recording GR weights is unsuitable for \>1,000 cartons; this foreshadows warehouse/stock-entry mismatch.                                                                             fileciteturn4file16

  19 May          Grant pending                            Jeremy                                                Jeremy says Mindhive side is applying for the grant and will update David.                                                                                                                                fileciteturn2file1

  22 May          Questionnaire sent                       Gareth                                                Gareth sends workflow questionnaire and asks for completion by Tuesday.                                                                                                                                   fileciteturn2file1

  23 May          Client asks setup timing after payment   Applle / Krystle / Jeremy                             Applle asks "May I know when can set up?" Krystle says 50% upfront payment was received; Jeremy says scope briefed and setup date will be arranged.                                                       fileciteturn2file1

  24--25 May      SQL vendor introduced                    David / Jeremy                                        David shares SQL API contact; Jeremy tells Ivan and Gareth to initiate SQL vendor conversation.                                                                                                           fileciteturn2file1

  26 May          F2F confirmed                            Krystle / Jeremy                                      4 Jun 3pm F2F confirmed after checking CJ and David availability.                                                                                                                                         fileciteturn4file13

  29 May          Questionnaire reminder                   Gareth                                                Gareth reminds Macro Frozen to fill questionnaire before 4 Jun.                                                                                                                                           fileciteturn4file12

  4 Jun           F2F session                              David, CJ, Finance, Sean, Krystle, WS, Gareth, Ivan   Real workflow and gaps clarified: WhatsApp order, paper pick list, fresh weight, AR, pricing, catalogue, credit, delivery, stock/warehouse.                                                               fileciteturn2file2

  4 Jun           Pick list can be sent to group           Krystle                                               WhatsApp indicates picking list sharing continued after meeting.                                                                                                                                          fileciteturn4file13

  8 Jun           Meeting recap sent late                  Gareth                                                Recap locks an interim Phase 1 flow: Sales draft SO + own pick list → confirmed pick list uploaded → MAIA creates SO/DO/Invoice → SQL.                                                                    fileciteturn3file11

  8 Jun           Setup session + prerequisites            Gareth / David                                        Setup session covers OpenAI API, AWS, WhatsApp Business; David shares sample data/documents and examples.                                                                                                 fileciteturn3file11

  11 Jun          Catalogue requirements requested         Gareth                                                Gareth asks for GPT link, source files, variants, pricing files, and SKU mapping for Product Catalogue Generator.                                                                                         fileciteturn3file14

  17 Jun          Catalogue variants clarified             David / Gareth                                        David says variants are P = Pork, C = Chicken, D = Duck; price file has no SKU and Chinese item names differ from SQL English names. Gareth says MAIA side will handle matching after Excel + GPT link.   fileciteturn3file14

  17--18 Jun      Training pushed to 26 Jun                Krystle / David                                       Krystle schedules team training for 26 Jun, 2:30pm, at Macro Frozen; David replies "Yes please."                                                                                                          fileciteturn3file14

  18 Jun          AWS account accessed                     Gareth / Applle                                       Gareth requests OTP; Applle supports AWS login; Gareth confirms team can get in.                                                                                                                          fileciteturn4file7

  19 Jun          SQL integration blocker surfaced         Gareth                                                Gareth flags SQL vendor access as the blocker to the 26 Jun plan.                                                                                                                                         fileciteturn4file7

  19 Jun          Catalogue/memo scope clarified           David / Ivan                                          David asks if team can access AI for catalogue and memo image generation; Ivan says fixed product catalogue is supported, open-ended/freestyle image generation is out of scope.                          fileciteturn3file14

  19 Jun onward   Silence in provided sources              All                                                   No provided evidence confirms SQL access, training completion, UAT, go-live, or build completion after this point.                                                                                        fileciteturn4file7
  --------------- ---------------------------------------- ----------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------

**B3. The client's world**

**Business reality.** Macro Frozen is a WhatsApp-heavy frozen food / meat distributor using SQL / AutoCount-related workflows as the core accounting/order/customer/item/stock/payment reference system. MAIA is intended to sit on top as an operational assistant layer, not replace SQL. fileciteturn4file1

**Actual operating flow.** Orders arrive through WhatsApp; sales/admin manually interprets customer/item/quantity/price; warehouse prepares/cuts/packs/weighs goods; final weight can differ from the initial order; documents are generated; customer payment slips or bank statement records are reconciled; SQL is updated. fileciteturn2file2

**What success looks like to them.** Success is fewer manual SQL steps, fewer pricing/quantity/document mistakes, proper fresh-weight adjustment before final documents, easier AR matching, better salesperson visibility, pricing enforcement, and catalogue output that customers will actually read. fileciteturn4file1 fileciteturn3file11

**What failure looks like.** Failure is a system that captures orders but still leaves David coordinating everything manually; fails to reflect the real paper pick-list/fresh-weight process; cannot access live SQL data; generates unusable catalogues; or is blamed for not solving warehouse human error that it was never capable of solving. fileciteturn3file13 fileciteturn4file7

Load-bearing quote: "Because the pick list is already out so we cannot export. Meaning that the process should be... They send in the order you become a draft. Then only they pick this and then confirm the quantity and also the price everything." **\[F2F transcript \| 4 Jun 2026 \| Speaker 1\]** fileciteturn4file14

**B4. Actors --- profiles + decision map**

  ------------------------ ------------------------------------------------ ---------------------------------------------------- --------------------------------------- ------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------
  Actor                    Role / side                                      Authority                                            Signing authority?                      What they want                                                                                                      Sentiment + trajectory

  David / Choy Kien Yang   Macro Frozen MD / Director / credit controller   **Decision + blocker + product-shaping influence**   **UAT/SOW signing authority unknown**   Pricing control, credit override, catalogue visuals, AR matching, inventory aging alerts, practical workflow fit.   Engaged and cooperative, but repeatedly probes edge cases and expands scope.

  CJ                       Macro Frozen sales                               Influence / daily user                               Unknown                                 Sales workflow fit, customer-specific order/pricing handling.                                                       Present in F2F and scheduling loop; limited direct evidence.

  Finance / Account rep    Macro Frozen finance/account                     Influence / key AR user                              Unknown                                 AR knock-off, bank statement/payment slip matching, CN numbering consistency.                                       Practical; surfaces credit note numbering and cash collection realities.

  Applle                   Macro Frozen / admin-side participant            Influence / setup support                            Unknown                                 Setup progress and AWS access support.                                                                              Responsive; asked "May I know when can set up?" after payment, later supported AWS OTP.

  Krystle                  Coordination / project comms                     Influence / scheduling                               Unknown                                 Schedule alignment, training logistics, team readiness.                                                             Cooperative; confirms payment and training schedule.

  Gareth                   MAIA product / implementation                    Product owner / implementer                          No                                      Requirements, recap, onboarding, catalogue inputs, SQL blocker management.                                          Proactive but summary was late; clear on blocker.

  Ivan                     Mindhive / MAIA lead                             Scope authority / escalation                         No                                      Scope discipline, fixed catalogue boundary, implementation feasibility.                                             Needed for final scope arbitration.

  Jeremy                   Sales owner                                      Commercial owner                                     No                                      Grant, sales scope handoff, setup momentum.                                                                         Commercially involved early; route commercial questions back to him per handover.

  SQL vendor               Third-party system vendor                        External dependency / blocker                        No                                      Integration access and documentation.                                                                               Responsiveness unknown; current critical-path risk.
  ------------------------ ------------------------------------------------ ---------------------------------------------------- --------------------------------------- ------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------

Authority ambiguity is **high risk**: the questionnaire explicitly asks who is the internal project owner, who participates in UAT, who coordinates SQL vendor requests, and whether anything outside the proposal is expected. The provided sources do not show those items being fully closed. fileciteturn4file5

**B5. Commercial state**

  ------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------- --------------- ------------------------
  Item                                                    State                                                                                                                  Confidence Evidence

  Contract value                                          RM40,000 package to be treated as internal commercial structure                                                              HIGH fileciteturn4file1

  Upfront payment                                         50% upfront received by 23 May                                                                                               HIGH fileciteturn2file1

  Payment milestone balance                               Proposal image indicates 50% on UAT completion; not independently parsed                                                      MED fileciteturn0file2

  Monthly subscription                                    Proposal/handover indicate monthly subscription; handover says subscription details are in embedded sheet image               MED fileciteturn4file0

  Hosting / infra / WhatsApp API / AI / SQL vendor fees   Estimated RM500--RM700/month and borne by Macro Frozen where applicable                                                      HIGH fileciteturn4file0

  Delivered vs paid                                       Upfront paid; AWS access achieved; SQL access still missing as of 19 Jun; no evidence of UAT/go-live completion              HIGH fileciteturn4file7

  Customizations                                          AR, bulk price update, product catalogue/customizations deploy separately after core go-live per 8 Jun recap                 HIGH fileciteturn3file11
  ------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------- --------------- ------------------------

**B6. Commitments ledger**

  ------------------------------------------------------------------------- ------------------- -------------------------------- ----------------- -------------------------------- -----------------------------------------------------------------------------------------------------------------------------
  Commitment                                                                Direction           Made when / where                              Due Status                           Evidence

  Apply grant and update client                                             Mindhive → client   19 May WhatsApp                           Unstated **Open / no closure evidence**   fileciteturn2file1

  Set setup date after payment                                              Mindhive → client   23 May WhatsApp                          Next week **Met partially**                F2F and setup sessions occurred. fileciteturn2file1

  Contact SQL vendor                                                        Mindhive → client   24--25 May WhatsApp; 4 Jun F2F                ASAP **Open / blocker**               Vendor contact shared; access still missing 19 Jun. fileciteturn2file1 fileciteturn4file7

  Send meeting recap                                                        MAIA → Macro        4 Jun F2F                            After session **Met late**                     Gareth says "sorry for the late summary" on 8 Jun. fileciteturn3file11

  Deploy core first; customizations separately                              MAIA → Macro        4 Jun F2F / 8 Jun recap             Before go-live **Open**                         No build completion evidence. fileciteturn4file14 fileciteturn3file11

  Macro to set up SIM / Meta / OpenAI / AWS                                 Client → MAIA       4 Jun notes / 8 Jun recap          Before training **Partially met**                AWS access evidenced; Meta/SIM/OpenAI completion not evidenced. fileciteturn3file11 fileciteturn4file7

  Share sample data/docs                                                    Client → MAIA       8 Jun                                         ASAP **Met partially**                Customer/item lists, invoices, DOs, POs, CNs, payment samples, picking list references sent in chat. fileciteturn3file11

  Provide catalogue inputs                                                  Client → MAIA       11--17 Jun                                    ASAP **Partially met / open**         David provided some Excel info and variants; GPT link and last 3 months images still requested. fileciteturn3file14

  Training + go-live                                                        Both                17--19 Jun WhatsApp                         26 Jun **At risk**                      SQL vendor access is blocker. fileciteturn4file7

  Fixed catalogue supported; freestyle memo/image generation out of scope   MAIA → Client       19 Jun WhatsApp                          Immediate **Clarified**                    Ivan explicitly limits to fixed catalogue format. fileciteturn3file14
  ------------------------------------------------------------------------- ------------------- -------------------------------- ----------------- -------------------------------- -----------------------------------------------------------------------------------------------------------------------------

**B7. Decisions log**

  ---------------------------------------------------------------------------------------------- ---------------------------- -------------------------- ---------------------------------------------------------------------------------------------------------------------------------
  Decision                                                                                       Made by                      Locked or reversible       Downstream impact

  SQL remains master for customer and item list; pricing managed/enforced in MAIA                F2F / recap                  Mostly locked              Defines integration dependency and pricing source-of-truth split. fileciteturn3file11

  Phase 1 core first; AR/bulk price/catalog customizations separately                            MAIA / client acknowledged   Locked unless re-scoped    Protects go-live but creates expectation risk if client sees customizations as part of initial delivery. fileciteturn3file11

  Interim pick-list flow: client runs physical pick list, then confirmed list uploaded to MAIA   F2F / recap                  Reversible, but critical   Inverts clean MAIA-first flow; affects pricing, draft SO timing, and UAT. fileciteturn3file11

  Merchant/QR settlement reconciliation out of scope                                             F2F                          Locked unless re-scoped    Prevents finance scope creep beyond customer invoice AR. fileciteturn1file17

  Supplier AP / expenses not in current MAIA                                                     F2F                          Locked unless re-scoped    Prevents purchasing/expense expansion. fileciteturn1file17

  WMS/barcode/QR scanning out of Phase 1                                                         F2F / recap                  Locked unless new phase    Sets boundary on warehouse automation. fileciteturn3file0 fileciteturn3file11

  David is credit controller for credit-limit overrides                                          F2F / notes                  Locked                     David receives approval notification when credit limit exceeded. fileciteturn4file18

  Sales reps see only their own customers                                                        F2F                          Locked unless changed      Drives row-level permissions. fileciteturn3file10

  Catalogue output is fixed-template, not freestyle generation                                   Ivan / WhatsApp              Locked unless re-scoped    Prevents ChatGPT-like open-ended image/memo scope. fileciteturn3file14
  ---------------------------------------------------------------------------------------------- ---------------------------- -------------------------- ---------------------------------------------------------------------------------------------------------------------------------

**B8. Understood deliverable vs scope vs build --- feature-by-feature Ultimax check**

  -------------------------------------------------- ----------------------------------------------------------------------- -------------------------------------------------------------------------------------------- --------------------------------------------------------------- ---------------------------------------------------------- -------------
  Feature                                            Client believes they get                                                Actually scoped                                                                              Actually built / delivered evidence                             Divergence                                                 Gap type

  WhatsApp order capture                             Forward/input WhatsApp orders; MAIA extracts order details              Base Phase 1                                                                                 No build completion evidence                                    Low divergence, build unknown                              ---

  Fresh weight adjustment                            Order can be finalized only after warehouse confirms actual weight      In Phase 1 / Base workflow                                                                   No build evidence; interim flow uses physical pick list first   Medium divergence due process inversion                    TRANSLATION

  Pick list                                          Client wants to retain paper pick list and upload confirmed weight      In-MAIA picking-list flow is Phase 2 / interim outside MAIA                                  No build evidence                                               High if client expects MAIA to replace paper immediately   DEFERRAL

  SO → DO → Invoice → SQL                            Documents created from confirmed order and pushed to SQL                Phase 1 where integration allows                                                             Blocked by SQL access as of 19 Jun                              High until SQL access lands                                DEPENDENCY

  AR payment slip/bank statement matching            Match payment slips/bank statements to invoices; finance confirms       In scope, standard MAIA AR                                                                   Demoed concept; no live evidence                                Low if bounded; high if AP/merchant included               TRANSLATION

  AP supplier payment / expenses                     Client asked during F2F                                                 Explicitly not current MAIA / purchasing future                                              Not built                                                       No divergence if written down; risk if forgotten           DEFERRAL

  Merchant/QR settlement reconciliation              Client asked about QR merchant settlement                               Out of scope; customer invoice AR only                                                       Not built                                                       Clear boundary                                             DEFERRAL

  Bulk price update                                  Excel upload, update multiple prices, enforce customer pricing          Customization / Price Update Assistant                                                       Data partially provided; no build evidence                      Medium due SKU/language mapping                            CAPTURE

  Customer-specific pricing / min price protection   MAIA enforces fixed price or minimum price                              Scoped                                                                                       No build evidence                                               Low conceptually                                           ---

  Volume-based pricing                               Possible quantity tiers                                                 Not supported currently; flagged gap                                                         Not built                                                       Explicit gap                                               DEFERRAL

  Product catalogue image                            Visual image catalogue with product photos/prices, not PDF              Product Update Assistant / standardized fixed template                                       Inputs still requested; no build evidence                       High if client expects ChatGPT-like generation             TRANSLATION

  WhatsApp blasting                                  Client asked about sending to many customers                            Out of scope / manual forwarding                                                             Not built                                                       Clear boundary, but commercial desire remains              DEFERRAL

  Memo/freeform image generation                     David asked whether team can use MAIA for memo image generation         Ivan said freestyle image generation is out of scope                                         Not built                                                       Clear boundary                                             CAPTURE

  Stock entry / GRN photo                            Handover says GRN photo/simple stock entry where feasible               Ambiguous: handover includes it, F2F says real issue is human error with no direct feature   No build evidence                                               **Highest divergence**                                     TRANSLATION

  WMS/barcode/QR scanning                            Client explored barcode/QR scanning                                     Out of scope / future due cost and SOP                                                       Not built                                                       Clear but commercially sensitive                           DEFERRAL

  Inventory aging / expiry alerts                    David wants proactive notification for aging/near-expiry stock          Meeting notes say agreed; recap says "to be explored---not in Phase 1"                       No build evidence                                               Medium-high scope ambiguity                                TRANSLATION

  Credit limit control                               Block if credit limit/terms exceeded; David approves override           Scoped                                                                                       No build evidence                                               Low divergence                                             ---

  Credit note numbering                              Finance prefers CN reference original invoice number                    MAIA auto-generates IDs; SQL workaround possible                                             No resolution evidence                                          Medium                                                     TRANSLATION

  Proforma invoice                                   David asked for document with word "invoice" for financiers / deposit   Flagged to confirm dedicated proforma document                                               No closure evidence                                             Medium                                                     CAPTURE

  Delivery trip / POD                                Client interested in driver uploads / signed DO                         Post-Phase 1 add-on                                                                          Not built                                                       Low if boundary accepted                                   DEFERRAL

  User permissions                                   Each sales rep sees own customers only                                  Scoped                                                                                       No build evidence                                               Low conceptually                                           ---

  Chinese/mixed-language item mapping                Needed for actual usage/catalogue                                       Recognized in handover/training scenarios                                                    No mapping completion evidence                                  Medium                                                     CAPTURE
  -------------------------------------------------- ----------------------------------------------------------------------- -------------------------------------------------------------------------------------------- --------------------------------------------------------------- ---------------------------------------------------------- -------------

Primary evidence: Phase 1 scope and customizations from handover; F2F clarification on pick list, stock, AR, and scope; WhatsApp recap and later catalogue/SQL messages. fileciteturn4file0 fileciteturn3file13 fileciteturn3file11 fileciteturn3file14

**B9. Gaps & risks --- prioritized**

  -------------------------------------------------- ----------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------ ------------ ------------------------------------
  Risk                                               Evidence                                                                                        Impact                                                                             Severity Owner

  SQL vendor access blocks 26 Jun training/go-live   Gareth explicitly flagged SQL access as blocker                                                 Training becomes demo-only or delayed; client confidence drops after payment          **H** Gareth / Tech lead / client chaser

  Stock-entry expectation mismatch                   F2F says actual issue is human error; handover still includes GRN photo/simple stock entry      Client may judge MAIA as failing if picking errors continue                           **H** Ivan / Product

  Catalogue scope creep                              Client wants visual output; later asks about memo/freeform image generation                     Fixed-template delivery may be perceived as weaker than expected                      **H** Ivan / Gareth

  Pick-list workflow not truly locked                End-state MAIA-first vs interim paper-first workflow conflict                                   Build/UAT can validate wrong flow                                                     **H** Product owner

  Inventory aging/expiry ambiguity                   David requested notifications; recap says "to be explored---not in Phase 1," notes say agreed   Client may expect a feature that team treats as parking lot                         **M-H** Product / Sales

  UAT/signing authority unknown                      Questionnaire asks but evidence does not close                                                  UAT disputes or "boss didn't approve" risk                                          **M-H** Product / Jeremy

  AR over-customization                              Handover warns Macro should adapt to standard AR workflow                                       Finance custom rules can blow up scope                                                **M** Product

  CN numbering mismatch                              Finance wants CN reference original invoice; MAIA auto-generates IDs                            Finance adoption friction                                                             **M** Product / Finance

  SKU/language mapping for catalogues                Chinese price list vs English SQL names; no SKU codes in pricing file                           Catalogue/price enforcement quality risk                                              **M** Gareth / Data owner

  Client-facing entity confusion                     Handover says use AutorunBiz PLT x MAIA, not Mindhive                                           Branding/trust issue if mishandled in client-facing materials                         **M** All client-facing staff
  -------------------------------------------------- ----------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------ ------------ ------------------------------------

**B10. Relationship health & sentiment trajectory**

**Overall: Amber, not Red.** The account is paid, responsive, and still cooperative; the client is asking practical implementation questions rather than threatening churn. But after payment, the client immediately asked when setup could happen, the 8 Jun recap was described as late, training moved to 26 Jun, and SQL access became a visible blocker. That is enough to mark the relationship Amber until SQL access and scope lock are resolved. fileciteturn2file1 fileciteturn3file11 fileciteturn4file7

Inflection points:

**15--23 May:** Positive onboarding momentum; group created, team added, client asks setup timing, 50% payment confirmed. fileciteturn2file1

**4 Jun:** Deep engagement but complexity surfaces; David probes real workflow, warehouse, pricing, AR, delivery, credit, and ageing. fileciteturn2file2

**8 Jun:** Recap aligns scope but also reveals changed interim flow and customizations after core. fileciteturn3file11

**17--19 Jun:** Catalogue data gap and SQL blocker become explicit; Ivan starts enforcing fixed-catalogue scope. fileciteturn3file14 fileciteturn4file7

Load-bearing quotes:

  -----------------------------------------------------------------------------------------------
  "May I know when can set up?" **\[WhatsApp \| 23 May 2026 \| Applle\]** fileciteturn2file1

  -----------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------
  "Ok, just got the 50% upfront payment." **\[WhatsApp \| 23 May 2026 \| Krystle Wong\]** fileciteturn2file1

  ---------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------
  "We need to sort out the pig list." **\[F2F transcript \| 4 Jun 2026 \| Speaker 1\]** fileciteturn4file14

  --------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  "Blocker: We're still waiting on the SQL vendor to provide access to your SQL integration." **\[WhatsApp \| 19 Jun 2026 \| Gareth Ng\]** fileciteturn4file7

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  "It will be a feature to generate the fixed product catalog accordingly, but it will not be an open ended generation freestyle like chatgpt." **\[WhatsApp \| 19 Jun 2026 \| Ivan Chiang\]** fileciteturn3file14

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**B11. Open questions / unresolved threads**

**SQL access:** Has the vendor granted access after 19 Jun? No evidence. fileciteturn4file7

**UAT authority:** Who signs UAT and accepts Phase 1? Not evidenced. fileciteturn4file5

**Internal project owner:** Questionnaire asks for day-to-day owner; no closure in provided sources. fileciteturn4file5

**Catalogue inputs:** GPT link, all Excel files, last 3 months images, and template details were still being chased. fileciteturn3file14

**Stock-entry scope:** Is GRN photo stock entry actually part of paid scope, or parked after F2F root-cause clarification? Handover and F2F are not fully aligned. fileciteturn3file5 fileciteturn3file13

**Inventory aging/expiry alert:** Agreed feature or post-Phase 1 exploration? Sources conflict. fileciteturn3file6 fileciteturn3file11

**Proforma invoice:** David asked; no dedicated document decision shown. fileciteturn3file10

**CN numbering:** Finance prefers CN number tied to invoice; no final decision evidenced. fileciteturn1file17

**Meta / WhatsApp Business / OpenAI setup:** AWS access evidenced; other prerequisites not closed. fileciteturn3file11 fileciteturn4file7

**Build status:** No evidence of deployed, tested, or accepted MAIA instance. fileciteturn4file7

**B12. What we do NOT know**

  ------------------------------------------------------------------------------- ---------------------------------------------------------- ---------------------------------------------------------------------
  Unknown                                                                         Why it matters                                             Source/action to resolve

  Whether SQL integration access was granted after 19 Jun                         Critical path for real training/go-live                    SQL vendor confirmation + technical connection test

  Whether 26 Jun training/go-live happened                                        Determines account state: pre-go-live vs live support      Calendar/chat after 19 Jun or internal deployment record

  Exact signed SOW terms beyond rendered proposal images                          Determines commercial enforceability of scope boundaries   Obtain text/OCR version of signed proposal

  Whether client expects stock-error prevention or only stock-entry convenience   This can make or break perceived value                     Client-facing scope lock signed by David

  Whether inventory aging/expiry is Phase 1                                       Sources conflict                                           Explicit scope addendum

  UAT owner and acceptance criteria                                               Prevents "wrong person approved" problem                   UAT plan signed by David / named delegate

  Catalogue template and data mapping quality                                     Product catalogue can fail on SKU/language mismatch        Collect GPT link, Excel files, last 3 months images, mapping sample

  Actual MAIA build state                                                         Commitments ledger cannot mark delivery met                Deployment/UAT logs

  Exact user list and permissions by name                                         Training and access control depend on it                   User matrix from Macro Frozen

  Whether Meta/OpenAI/SIM setup is complete                                       WhatsApp assistant cannot run cleanly without it           Onboarding checklist completion
  ------------------------------------------------------------------------------- ---------------------------------------------------------- ---------------------------------------------------------------------

**PART C --- Synthesis**

**C1. Confidence statement**

**RICH evidence:** current workflow, F2F pain points, pick-list complexity, pricing/catalogue needs, AR boundaries, credit control, user/role outline, SQL blocker, and broad commercial value. These are supported by transcript, meeting notes, WhatsApp, and handover docs. fileciteturn2file2 fileciteturn3file11 fileciteturn4file1

**THIN evidence:** exact signed proposal text, exact monthly subscription/payment milestone details, actual build completion, actual UAT outcome, post-19 Jun sentiment, and final SQL integration state. The proposal PDF is image-only and post-19 Jun records are absent. fileciteturn0file2 fileciteturn4file7

**Where a wrong source assumption would break the conclusion:** if there is a later signed addendum not provided here, the scope conclusions may be wrong; if SQL access was granted immediately after 19 Jun, the blocker may be historical; if the client explicitly accepted "stock-entry only, not stock-error prevention" in an unseen source, the largest divergence becomes lower risk.

**C2. Rollup handoff note --- Q3 cross-account plan signals**

**Build-once pattern:** fresh-weight order workflow needs a clean reusable pattern: draft order → physical/warehouse confirmation → final weight → SO/DO/Invoice → ERP push.

**Scope-control pattern:** every account needs an explicit "not WMS / not ERP replacement / not autonomous finance" page before UAT.

**Catalogue generator opportunity:** fixed-template product catalogue generation is repeatable, but only if SKU mapping, price source, and template ownership are standardized.

**AR product boundary:** customer invoice AR with human confirmation is viable; AP, merchant settlement, expenses, and automatic alias mapping must remain separate modules.

**Implementation dependency:** SQL/AutoCount vendor access is a recurring critical path and should be moved into sales/pre-kickoff readiness, not discovered mid-implementation.

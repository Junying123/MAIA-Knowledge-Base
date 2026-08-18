**Macrofood (Macro Frozen) × MAIA --- Voice of Customer Extraction v3**

**owner: Gareth\
status: draft\
last_reviewed: 2026-07-29\
lark_url: <https://eg69120xnei.sg.larksuite.com/wiki/WZcKwcQvAiOfvWkc8xall0p3gPh>**

  ---------------------------------------------------------------------------------
  Grounded, confidence-scored VoC. **Truth source for VOC-001→060** = the 4 June\
  2026 F2F Requirements Gathering transcript (discovery-phase, aspirational\
  voice --- the customer describing a desired future state). **Truth source for\
  VOC-061→078** = the 2nd UAT round, 28--29 Jul 2026 (reactive voice --- the\
  customer using the live product and reacting). Both are primary customer\
  voice, different in kind, not in rank. This is the check against wishful\
  selling: what David and the Macro Frozen team actually said and did,\
  separated from what vendor documents claim.

  ---------------------------------------------------------------------------------

**v3 (2026-07-29) is a full standalone rerun**, not an addendum --- every phase\
below is complete and self-contained; nothing requires cross-referencing the\
prior base document to understand current state. VOC-001→060 and their\
supporting analysis are carried forward unchanged from the base extraction;\
VOC-061→078 are new, sourced from the 2nd UAT round and the internal tech\
debrief that followed it.

**Phase 0 --- Source Inventory & Coverage Gate**

  ------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Source                                                                                                  Type                                                                                             Voice class                                                                                        Use in this extraction

  \[F2F\] Macrofood Requirements Gathering-transcript v2 (4 Jun 2026)                                     Meeting transcript, garbled ASR, unlabelled speakers                                             **Primary --- TRUTH SOURCE (VOC-001→060)**                                                         Main basis for every CONFIRMED customer claim through VOC-060

  Macrofrozen WhatsApp group export (22 May -- 22 Jun)                                                    Chat export, fragmentary                                                                         Primary                                                                                            Setup behaviour, catalogue follow-up, SQL blocker, pricing cadence

  \[F2F\] ... Meeting Minutes 2026-06-04 / F2F Requirements Gathering Summary                             Vendor-authored minutes                                                                          Secondary / vendor-derived                                                                         Corroborate decisions, clean wording where ASR garbled

  Prior \"MAIA × Macro Frozen --- VoC Extraction\" (Lark doc Pm4Owq...)                                   Vendor-authored prior analysis                                                                   Not customer voice --- CLAIMED                                                                     Cross-check only, never a source of fact

  Pre-Onboarding Requirements Questionnaire                                                               Vendor-authored guide                                                                            Not customer voice                                                                                 Actor identity + open-question context only

  Proposal / Customer Narrative                                                                           Vendor-authored                                                                                  Not customer voice                                                                                 Scope boundary + risk comparison only

  Ivan x Gareth Macrofrozen scope lock discussion (13 Jul 2026)                                           Internal transcript, vendor-side only                                                            Internal --- not customer voice, relays one second-hand client statement                           Confirms mechanism detail; source for VOC-030

  Macrofrozen Client Scope Lock Clarification (13 Jul 2026, call with Grace)                              Direct client call                                                                               **Primary --- direct client voice** (Grace)                                                        VOC-030→036

  content_Maya 訂單與倉儲出貨流程培訓會_202607170008 (17 Jul 2026, order & warehouse dispatch training)   Live training transcript, \~12,591 lines, code-switched, ASR speaker labels not cleanly mapped   **Primary --- direct client voice**, multiple client staff live-reacting to the built product      VOC-037→060

  UAT/28Jul26 - 2nd UAT Bug Fixes Checklist.md (28--29 Jul 2026)                                          Vendor-authored PM synthesis (Gareth), dated 28--29 Jul                                          SECONDARY / CLAIMED --- vendor\'s post-hoc write-up, but preserves specific verbatim-quote flags   Structure and mechanism detail for VOC-061→078. Its explicitly-flagged direct quotes (\"but no any notification?\", \"yes, spam Grace/Lai\") are promoted to CONFIRMED because the source doc itself frames them as verbatim, not paraphrase. Everything else in it is capped at CLAIMED unless independently corroborated. Citation key \[BFC \| MF-Pn-nn\]

  Granola/Transcripts/2026-07-28/\... 2nd UAT - Onsite-transcript.md (28 Jul 2026)                        Meeting transcript                                                                               Primary customer voice --- **degraded**                                                            Mixed Cantonese/Mandarin/Malay/English; second half heavily garbled by auto-transcription, speaker identity does not reliably resolve. Used for framing/corroboration only, not as a standalone source of new ids --- the bug-fix checklist\'s own session notes are the more authoritative record per its own fidelity warning. Citation key \[G \| 2026-07-28\]

  Granola/Transcripts/2026-07-29/Macro Debrief-transcript.md (29 Jul 2026)                                Meeting transcript                                                                               **NOT customer voice** --- internal vendor debrief                                                 Mindhive/vendor team (Jermaine, Ivan, Wan Sin, Amirul, Bryan, Johnson) discussing how to build what the client asked for; zero customer-side participants. Used only to corroborate mechanism detail and to source client narrative *as retold by the vendor team* --- anything sourced only here is capped at BELIEVED, never CONFIRMED, per P1/P1b. Citation key \[G \| 2026-07-29\]

  Lark wiki 28Jul26 - UAT 2 MAIA Training Feedback (node HK6pwSJeuiZbwEknnOOlyLr5gfc)                     Client-authored raw notes                                                                        **Primary customer voice**                                                                         Written by the client\'s own team, numbered list, during/immediately after the 2nd UAT. Highest-reliability source for VOC-061→078 --- corroborates the bug-fix checklist with no material conflicts found. Citation key \[LW \| item N\]

  Fireflies Macro-Frozen-Debrief / Meet-Macro-Debrief (29 Jul 2026)                                       Meeting transcript                                                                               Not customer voice (same meeting as the Granola debrief)                                           **Not independently fetched** --- dual-recorded 29 Jul meeting, treated as duplicate of the Granola transcript above. Coverage limitation: if Granola\'s transcription dropped detail Fireflies captured differently, this extraction misses it.
  ------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Coverage verdict: proceed-with-caveats.**

**Well represented:** David (owner/MD/de-facto credit + price controller) --- dominates both the 4 June discovery transcript and the 2nd UAT round, named directly in the Z Fold mobile-rendering incident. Finance/account voice (Speaker 5, base) present on cash/CN/QR settlement. Queenie (sales user) --- named directly, hit the pcs/UOM gap live in the 2nd UAT. Krystle --- named directly, iPhone 17 Pro Max rotate-lock incident.

**Thin:** warehouse/picker voice --- spoken *about* by David and, in the UAT round, about Lai by name, but never heard *directly* in either evidence layer. CJ Tan --- named consistently as sales manager and price/credit approval tier-2, but no isolated direct quote from him exists in either layer. Grace --- CONFIRMED in the base layer (13 Jul direct call), but BELIEVED-only for the new 2nd-UAT-round claims attributed to her (SCN/CCN stock-reduction flag), since no clean direct quote from that specific round survives at readable fidelity.

**Absent:** Macro Frozen\'s own end customers, the driver (\"Uncle\"), the SQL vendor.

**What the corpus licenses:** confident conclusions on the order-to-cash workflow, pricing pain, AR/reconciliation, credit control, catalogue intent, and picking-accountability (discovery layer) --- **plus** confident conclusions on what broke and what the client reacted to in the 2nd UAT room specifically: the \"silent failure\" notification complaint, the Excel-breakdown pushback, named-device mobile failures (UAT layer). **What it does not license:** treating warehouse-adoption, POD accuracy, or end-customer document preferences as confirmed (discovery layer) --- **plus** Grace\'s or Lai\'s unprompted priorities beyond checklist paraphrase, or the cold-chain/telemetry narrative as anything beyond vendor-retold context (UAT layer).

**Phase 1 --- Actor & Role Register**

  --------------------------------------------------------- -------------------------------------------- ----------------------------------------------------------------------------- ------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Raw label                                                 Re-attributed identity                       Role                                                                          Confidence                                 Basis

  Speaker 2 (4 Jun transcript)                              **David Chong**                              Customer-side owner / MD / de-facto credit + price controller & coordinator   CONFIRMED                                  Self-identifies as sole coordinator (\"who is coordinating everything? Me\" --- L260). Reinforced across the 2nd UAT layer: named directly as credit/price controller and as the Z Fold mobile-rendering incident owner

  Speaker 5 (4 Jun transcript)                              Finance / account rep                        Customer-side finance/admin (AR, cash, CN)                                    BELIEVED                                   Raises CN numbering (L827), QR-merchant settlement (L788), cash-from-driver Excel log (L1703)

  Speaker 1 / 3 / 4 (4 Jun transcript)                      MAIA / Mindhive team                         Vendor-side                                                                   CONFIRMED                                  Run the workflow recap, demo CPO/SO/pick-list, ask discovery questions

  \~David Chong (WhatsApp)                                  David Chong                                  Owner / sponsor                                                               CONFIRMED                                  Creates setup group, shares SQL contact + AWS/OpenAI credentials

  \~CJ Tan (WhatsApp)                                       CJ Tan                                       Customer-side sales manager                                                   CONFIRMED                                  Named as sales in base (David confirms reps silo customers, L1661; minutes list CJ as Sales); reinforced consistently across 2nd-UAT-round sources as sales manager, price/credit-approval tier-2, mobile-only (no company laptop)

  \~Krystle Wong (WhatsApp)                                 Krystle                                      Customer-side ops/admin coordinator                                           CONFIRMED                                  Base: coordinates scheduling/training logistics. 2nd UAT round: named directly as the iPhone 17 Pro Max rotate-lock incident owner; attendee seankrystle@gmail.com on the 2nd UAT session

  \~Applle (WhatsApp)                                       Applle (Apple)                               Customer-side Finance --- credit limits, credit terms                         BELIEVED                                   Runs AWS OTP/setup handshake in chat (base). Role corrected via Scope Lock v2 --- Finance-specific, not Admin parity with David. No new evidence this round

  \~Sean Looi (WhatsApp)                                    Sean                                         Customer-side ops/IT admin                                                    BELIEVED                                   Asks for setup tutorials

  Queenie                                                   Queenie                                      Customer-side standard sales user                                             CONFIRMED                                  Named directly in both the bug-fix checklist and the client\'s own Lark notes as the person who hit the pcs/UOM order-capture gap live in the 2nd UAT session

  Grace                                                     Grace, Finance Manager                       Customer-side Finance --- DN-approval gate, invoice creation                  CONFIRMED (base) / BELIEVED (new claims)   Base: direct 13 Jul call, fully confirmed (VOC-030→035). 2nd UAT round: referenced extensively as the DN gate and the SCN/CCN stock-reducing-case flag, but no isolated direct quote from this specific round --- those new claims rest on checklist paraphrase, tagged accordingly

  Lai / Lim                                                 Lai (Lim Jun Yan), Warehouse Manager         Customer-side warehouse/logistics                                             BELIEVED                                   Attendee lim.junyan@gmail.com present on the 2nd UAT session; extensive discussion *about* his workflow (pick-list PDF, address printing, delivery-date sort) but no direct quote captured in either evidence layer

  Tharani (itharanie@gmail.com)                             Tharani                                      THIRD-PARTY / vendor-adjacent                                                 ASSUMPTION                                 Referenced as recording the 2nd UAT session (\"Tharani\'s recording\" per checklist); role unclear, likely facilitation support, not customer voice either way

  Ivan, Jermaine, Johnson, Wan Sin, Amirul, Bryan, Jeremy   Mindhive/vendor product & engineering team   VENDOR                                                                        CONFIRMED                                  Domain-attributed (mindhive.asia); self-evidently vendor-side throughout the 29 Jul debrief and the base-layer discovery session
  --------------------------------------------------------- -------------------------------------------- ----------------------------------------------------------------------------- ------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Checkpoint:** No central customer actor is unresolved enough to block extraction. The warehouse/picker role remains heard only secondhand across both evidence layers --- the single biggest standing coverage gap in this account\'s VoC, unchanged since the base extraction. Grace\'s identity is solid (CONFIRMED); only her *new-round* claims carry the BELIEVED qualifier, not her standing as a customer actor.

**Phase 2 --- Grounded Evidence Extraction**

  ------------- -------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------
  ID            Category                                                                         Customer voice / tight paraphrase                                                                                                                                                                                                                                             Source                                                                     Confidence

  VOC-001       Current O2C workflow                                                             Order comes via WhatsApp → sales manually interprets → warehouse cuts/weighs → **final weight differs from order** → docs generated → payment reconciled back to SQL                                                                                                          Transcript L2 (recap, David confirms)                                      CONFIRMED

  VOC-002       Order interpretation                                                             Customer uses informal names; example: PO says \"pork belly slight\" but \"we understand the customer actually need a pork belly slice skin on\"                                                                                                                              Transcript L167                                                            CONFIRMED

  VOC-003       Manual picking & routing                                                         Pick lists grouped by delivery route/driver (KL, PJ, own station); orders sent into WhatsApp groups; **picking done on physical paper**                                                                                                                                       Transcript L281, L293                                                      CONFIRMED

  VOC-004       Picking accuracy & accountability                                                Core pain: \"order 10 kilo, people pick 8 kilo, then checker checks, top is 10 kilo --- 2 also wrong.\" Wants to prove **who picked, who checked**, and apply \"punishment of the error\"                                                                                     Transcript L659, L665                                                      CONFIRMED

  VOC-005       Prefers own pick list                                                            \"I want to maintain my current picking list... I do sales order myself first, send warehouse, get all the quantity, then send back to MAIA\"                                                                                                                                 Transcript L683, L701                                                      CONFIRMED

  VOC-006       GRN weight mismatch                                                              \"Supplier sent 1000 kilo, but after we count all the box are 998\"                                                                                                                                                                                                           Transcript L104                                                            CONFIRMED

  VOC-007       Payer-name mismatch                                                              Payment reference/payer name often doesn\'t match the customer or the invoice                                                                                                                                                                                                 Transcript L14, L5                                                         BELIEVED

  VOC-008       Payment methods & QR settlement                                                  Customers pay by transfer, cash, and QR merchant scan; merchant compounds the day\'s QR into one bank line                                                                                                                                                                    Transcript L797                                                            CONFIRMED

  VOC-009       Cash-from-driver record                                                          Finance records cash collected from drivers in a **self-made Excel**                                                                                                                                                                                                          Transcript L1703                                                           CONFIRMED

  VOC-010       Pricing not in any system                                                        \"We **not update any system**... I just send this price list\" via WhatsApp image generated through ChatGPT                                                                                                                                                                  Transcript L911, L917, L923                                                CONFIRMED

  VOC-011       Pricing cadence                                                                  \"Most time it\'s monthly but sometime update based on market situation\"                                                                                                                                                                                                     WhatsApp L280; Transcript L905                                             CONFIRMED

  VOC-012       Customer segments                                                                Two categories: **wholesale** and **retail** --- difference is quantity, not treatment                                                                                                                                                                                        Transcript L941, L1576                                                     CONFIRMED

  VOC-013       Customer-specific price + floor enforcement                                      Wants fixed/customer-specific prices and min-price floor; volume-based pricing left unresolved                                                                                                                                                                                Transcript L959, L986; L1565                                               CONFIRMED (volume-based = open)

  VOC-014       Quotation before order                                                           Big customers \"request a quotation first\" --- ⚠️ narrowed 2026-07-14: Grace confirmed formal quotations barely used in practice                                                                                                                                             Transcript L962, L977                                                      CONFIRMED (original ask)

  VOC-015       Product catalogue (image)                                                        Wants image/picture catalogue, not long PDF list --- \"old people... scared to click PDF\"                                                                                                                                                                                    Transcript L1007, L1013, L1061                                             CONFIRMED

  VOC-016       Credit control --- \"one invoice\"                                               \"Most our customer they are one invoice --- next order they have to pay the last invoice\"                                                                                                                                                                                   Transcript L1586, L1616                                                    CONFIRMED

  VOC-017       One-time credit-limit override                                                   Wants authorised person to raise/approve credit limit for a single order                                                                                                                                                                                                      Transcript L851, L857                                                      CONFIRMED

  VOC-018       Pro forma invoice                                                                Needs a document with the word \"invoice\" so a customer\'s financier accepts it                                                                                                                                                                                              Transcript L1628, L1634                                                    CONFIRMED

  VOC-019       Sales territory isolation                                                        \"other sales people \[cannot\] check the other sales people customer --- No\"                                                                                                                                                                                                Transcript L1658, L1661                                                    CONFIRMED

  VOC-020       Payment-chasing escalation                                                       Chase order: account/finance alerts → sales chases → boss escalates last                                                                                                                                                                                                      Transcript L1679                                                           BELIEVED

  VOC-021       Credit-note numbering                                                            Finance wants CN number to mirror the invoice number                                                                                                                                                                                                                          Transcript L827                                                            CONFIRMED

  VOC-022       Inventory aging / expiry alert                                                   Wants report/notification for near-expiry & slow-moving stock                                                                                                                                                                                                                 Transcript L1430, L1442                                                    CONFIRMED

  VOC-023       Damage / batch QC log                                                            Wants warehouse to photo-log damaged/discoloured stock against a batch                                                                                                                                                                                                        Transcript L1472, L1478                                                    BELIEVED

  VOC-024       POD via driver photo                                                             Original ask discussed in principle --- 🚫 CONFLICT surfaced 2026-07-14: Grace explicitly rejected concrete photo-upload-to-Maya design (\"I appoint Maya to reduce my work, not add to it\")                                                                                 Transcript L473, L497; Grace call 13 Jul                                   CONFIRMED (rejection supersedes earlier in-principle interest)

  VOC-025       Stock count inaccurate in SQL                                                    Stock check only once a year; SQL count off by \~10--20 --- human process, not system gap                                                                                                                                                                                     Transcript L1331, L1337                                                    CONFIRMED

  VOC-026       WhatsApp blast wish (blocked)                                                    Wants to blast new prices to 300--400 old-account customers; vendor warns blasting bans the number                                                                                                                                                                            Transcript L1079, L1118                                                    CONFIRMED (wish)

  VOC-027       SQL stays master; must not break                                                 Docs must conform to SQL\'s flow --- invoice qty can\'t exceed DO qty, no duplicate invoice, running IDs can\'t be overridden                                                                                                                                                 Transcript L377, L836                                                      CONFIRMED

  VOC-028       Go-live dependency = SQL access                                                  Go-live blocked on SQL vendor granting integration access                                                                                                                                                                                                                     WhatsApp L356                                                              CONFIRMED

  VOC-029       Team AI-generation ambition                                                      Asks if marketing/admin team can use MAIA to generate catalogue & memo images                                                                                                                                                                                                 WhatsApp L384, L390                                                        CONFIRMED (ask, scope-limited by vendor)

  VOC-030       Item historical pricing                                                          Grace confirmed: checks only the single latest invoice per item --- unit price, qty, occasional discount                                                                                                                                                                      Grace call, 13 Jul 2026                                                    CONFIRMED

  VOC-031       Role/permission model reality                                                    Read/Write/Create/Submit definitions; Sales users create/edit own customer details; credit limit set by Sales Manager, not Finance                                                                                                                                            Grace call, 13 Jul 2026                                                    CONFIRMED (definitions)

  VOC-032       Customer → sales-agent assignment                                                Every SQL customer record has an Agent field; CJ/Ben/Queenie active; CK (3rd-party driver) excluded; unassigned defaults to David                                                                                                                                             Grace call, 13 Jul 2026                                                    CONFIRMED

  VOC-033       AR auto-match adoption skepticism                                                Walked through proposed Maya AR auto-match flow, Grace pushed back --- same manual work just routed through Maya                                                                                                                                                              Grace call, 13 Jul 2026                                                    CONFIRMED

  VOC-034       Backup coverage gap                                                              No process exists if Lai (warehouse/logistics manager) is absent; no defined backup for Finance duties                                                                                                                                                                        Grace call, 13 Jul 2026                                                    CONFIRMED

  VOC-035       Customer PO issuance                                                             3 confirmed customers issue formal PO instead of WhatsApp ordering                                                                                                                                                                                                            Grace call, 13 Jul 2026                                                    CONFIRMED

  VOC-036       Cost/buying price tracking                                                       Item cost fluctuates independently of selling price; needs bulk-update, separate from SL-03                                                                                                                                                                                   PM relay, 13 Jul 2026 --- not yet a direct client quote                    CONFIRMED as requirement, mechanism undefined

  VOC-037       Notification system not built yet                                                Trainer confirms notifications aren\'t ready; client sought explicit confirmation this was expected to be live                                                                                                                                                                Training transcript, 17 Jul, Speaker 6/7                                   CONFIRMED

  VOC-038       Must combine orders by driver route                                              Client asks whether MAIA can group orders by which driver serves which area --- 3-4 existing routes                                                                                                                                                                           Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-039       Picking discrepancy alert valued                                                 Shortages happen without visibility today --- \"part of the order quietly goes missing\"                                                                                                                                                                                      Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-040       Order visibility failure caused a real dispute                                   Concrete incident: order unprocessed in time, boss saw late, customer felt wronged                                                                                                                                                                                            Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-041       Foreign warehouse workers can\'t operate phone/system                            Pickers can\'t conveniently use phones, work off paper; asks for a simpler non-app path                                                                                                                                                                                       Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-042       Explicit management mandate to force full adoption                               Run the new process end-to-end, no half-measures --- \"the company spent a lot of money on this\"                                                                                                                                                                             Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-043       Pricing must be lock/approval-gated                                              Reps cannot arbitrarily change prices; edited price reverts unless a superior approves                                                                                                                                                                                        Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-044       Two pricing modes --- fixed contract vs. market-fluctuating                      Some customers on negotiated flat price; others on standard/default pricing                                                                                                                                                                                                   Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-045       Cost price must stay hidden from certain roles                                   Concern raised that a role (implied salesperson) would see cost-price data it shouldn\'t                                                                                                                                                                                      Training transcript, 17 Jul, Speaker 10                                    BELIEVED

  VOC-046       Pricing by actual weighed kg, not nominal box/carton count                       \"Carton\" nominally = 6 pieces, actual weight varies per piece --- invoicing must reconcile                                                                                                                                                                                  Training transcript, 17 Jul, Speaker 10                                    CONFIRMED

  VOC-047       SO-amendment ownership unclear on weight variance                                Open question: who amends the SO when picked kg differs from ordered --- Grace, warehouse, or someone else?                                                                                                                                                                   Training transcript, 17 Jul, Speaker 4/10                                  CONFIRMED

  VOC-048       Payment proof doesn\'t match what company received                               Customer shows payment screenshot claiming payment; company never received it --- resolved by checking bank, transaction was cancelled                                                                                                                                        Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-049       Payment reference mismatch --- customer pays from different company\'s account   Breaks auto-matching, forces manual reconciliation                                                                                                                                                                                                                            Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-050       No way to see total AR exposure without manual tracking                          \"How do I know across my 10 customers who owes me what without tracking it\"                                                                                                                                                                                                 Training transcript, 17 Jul, Speaker 10                                    CONFIRMED

  VOC-051       Weekly SOA sent to chase payment                                                 Every Friday, statement of account sent to customers first, to chase payment                                                                                                                                                                                                  Training transcript, 17 Jul, Speaker 10                                    CONFIRMED

  VOC-052       Accounting scope raised as incomplete                                            Current build only covers order side; accounting needs separate coverage                                                                                                                                                                                                      Training transcript, 17 Jul, Speaker 5                                     BELIEVED

  VOC-053       Supplier goods-in double-entry explicitly rejected                               Routing through Maya then redoing in SQL \"makes things MORE complicated, not less\"                                                                                                                                                                                          Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-054       Dashboard needs per-salesperson filter                                           Boss sees everyone\'s dashboard, reps want their own by default                                                                                                                                                                                                               Training transcript, 17 Jul, Speaker 8/4                                   CONFIRMED

  VOC-055       Want to flag customer recurring order pattern                                    Wants marker like \"this customer orders every Wednesday\"                                                                                                                                                                                                                    Training transcript, 17 Jul, Speaker 10                                    CONFIRMED

  VOC-056       Related/linked companies should share synced price updates                       Affiliated companies should move to a new price together; no link exists between them today                                                                                                                                                                                   Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-057       Salesperson \"customer ownership\" is a live political concern                   \"Elsewhere this is a big issue --- a salesperson\'s customers become their own property\"                                                                                                                                                                                    Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-058       Real example of a lapsed customer resurfacing                                    Old customer untouched 6 years calls back; no duplicate/returning-customer check exists                                                                                                                                                                                       Training transcript, 17 Jul, Speaker 10                                    CONFIRMED

  VOC-059       Customer/company name field locked after conversion                              Staff can edit company name pre-conversion, not after                                                                                                                                                                                                                         Training transcript, 17 Jul, Speaker 8                                     CONFIRMED

  VOC-060       Want to monitor prospects\' external activity to time conversion                 Watches a lead\'s social-media activity before deciding it\'s \"hot\" enough to convert                                                                                                                                                                                       Training transcript, 17 Jul, Speaker 8                                     BELIEVED

  **VOC-061**   **Credit/price-block silent failure**                                            Client asked, **twice in session, verbatim** per the checklist\'s own framing: \"but no any notification?\" --- on seeing a blocked order produce no escalation signal to anyone                                                                                              \[BFC \| MF-P0-03\]                                                        CONFIRMED

  **VOC-062**   **Notification frequency preference --- Grace**                                  Client instruction, verbatim per checklist: **\"yes, spam Grace\"** --- every draft-DN event pushed to her, no digest, no batching                                                                                                                                            \[BFC \| MF-P1-07\]                                                        CONFIRMED

  **VOC-063**   **Notification frequency preference --- Lai**                                    Client instruction, verbatim per checklist: **\"yes, spam Lai\"** --- every submitted SO pushes the order PDF to him                                                                                                                                                          \[BFC \| MF-P1-08\]                                                        CONFIRMED

  **VOC-064**   **Excel packing-list --- pushback on removal**                                   Client did not reject the proposed removal outright, but pushed back asking \"is there a way you can support this\" --- specifically how many pictures per order, how quantities aggregate on large carton orders, whether the breakdown can still be shown to the customer   \[G \| 2026-07-28\], corroborated \[BFC \| MF-P1-01\]                      BELIEVED --- transcript garbled at this exact point, checklist\'s independent paraphrase corroborates the same three sub-questions

  **VOC-065**   **Excel packing-list --- underlying need**                                       The picked-quantity breakdown is needed to (a) show **the customer** proof of what was delivered per box/carton, (b) internal **traceability when picked ≠ delivered quantity**                                                                                               \[BFC \| MF-P1-01\], corroborated \[LW\]                                   CONFIRMED --- cross-corroborated across checklist and client\'s own Lark notes

  **VOC-066**   **Pcs as a third unit of measure**                                               Queenie, live in session, tried ordering \"3 pcs\" of an item; system forced a choice between kg and carton, would not proceed without resolving into one                                                                                                                     \[LW \| item 17\], \[BFC \| MF-P1-04\]                                     CONFIRMED

  **VOC-067**   **Mobile rendering --- David\'s device**                                         David\'s Samsung Z Fold rendered the desktop layout when accessed as \"mobile\" --- the approval UI he needs was effectively unusable on his own phone                                                                                                                        \[G \| 2026-07-29\], \[LW \| item 5\], \[BFC \| MF-P1-14\]                 CONFIRMED --- incident corroborated across three sources; exact wording not captured

  **VOC-068**   **Mobile rendering --- Krystle\'s device**                                       Krystle\'s iPhone 17 Pro Max defaulted correctly to mobile, but locked into desktop layout after she rotated the phone and returned to portrait                                                                                                                               \[G \| 2026-07-29\], \[LW \| item 5\], \[BFC \| MF-P1-14\]                 CONFIRMED

  **VOC-069**   **Payment-term UI blocking on mobile**                                           A customer with no default payment term could not have one added on mobile --- bottom banner covered the input field, page would not scroll clear                                                                                                                             \[BFC \| MF-P1-13\], \[LW \| item 4\]                                      CONFIRMED

  **VOC-070**   **Pick List PDF --- Chinese character rendering**                                Item descriptions with Chinese characters did not render on the printed pick list                                                                                                                                                                                             \[BFC \| MF-P0-04\], \[LW \| item 10\]                                     CONFIRMED (defect)

  **VOC-071**   **Pick list PDF --- missing header on print**                                    Company name, address subheading, phone number dropped from the physical printout; client already committed to buying a dedicated computer/printer for Lai                                                                                                                    \[BFC \| MF-P1-03\], \[LW \| item 13\]                                     CONFIRMED (defect)

  **VOC-072**   **Customer search by address**                                                   Wants to search/filter customers by billing/shipping address for area-based push sales and Lai\'s pick-grouping-by-area                                                                                                                                                       \[BFC \| MF-P2-02\], \[LW \| item 8\]                                      CONFIRMED

  **VOC-073**   **Contact-as-person, not customer-as-company**                                   Concrete example: sales remember a person (\"Muthu\"), not the registered company name --- \"Muthu is at Mamak Sdn Bhd, but there is also a Muthu from Malaysia Food\"                                                                                                        \[LW \| item 9\], \[BFC \| MF-P2-03\]                                      CONFIRMED

  **VOC-074**   **SCN/CCN stock-reducing credit note --- rare but real**                         Grace flagged credit notes that reduce stock are rarely run, but need to work before she can stop her SQL workaround                                                                                                                                                          \[BFC \| MF-P1-17\]                                                        BELIEVED --- attributed to Grace by name, no isolated direct quote this round

  **VOC-075**   **Cold-chain delivery disputes --- proof-of-delivery need**                      Vendor-retold client narrative: cold-chain goods disputed when customer isn\'t there on time or goods left in sun; client already pays for a separate GPS/temperature fleet service for the same evidence purpose                                                             \[G \| 2026-07-29\]                                                        BELIEVED --- sourced entirely through vendor retelling, no direct client-side source

  **VOC-076**   **Driver role scope --- explicitly narrow**                                      Client doesn\'t want a trip/route-planning module --- only 1-2 self-managing drivers; wants driver DN visibility + mandatory POD only                                                                                                                                         \[G \| 2026-07-29\], corroborated \[BFC \| MF-P2-04\], \[LW \| item 20\]   BELIEVED

  **VOC-077**   **Sunday report cadence rationale**                                              Client\'s own reasoning (retold): weekly reports land Sunday 8am because business runs 6 days/week, David up 6am-10pm most days, Sunday is his only reading window                                                                                                            \[G \| 2026-07-29\]                                                        BELIEVED

  **VOC-078**   **Stale chatbot context after MR-UI edit**                                       Real, repeated pattern: users edit an order via a chat-surfaced link to the mobile web UI, return to chat, bot continues from pre-edit data --- reads as the bot being wrong                                                                                                  \[BFC \| MF-P1-18\], \[G \| 2026-07-29\] (Krystle\'s incident named)       BELIEVED
  ------------- -------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------

**Phase 3 --- Salience & Priority Signals**

  -------- ------------------------------------------------------------ -------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------
  Rank     Priority                                                     Stated importance                                                                Revealed importance                                                                                                                                                                                                                                    Confidence

  1        O2C that works around actual weight + SQL discipline         David repeatedly probes SO→DO→Invoice, duplicate-invoice risk, SQL conformance   Confirmed core flow: draft SO → pick externally → confirm weight → upload → MAIA generates docs → push SQL (VOC-001/005/027)                                                                                                                           HIGH

  2        Picking accuracy & human accountability                      David frames it as human error, wants proof of who picked/checked                Returns to it repeatedly (VOC-004); wants to keep own paper pick list (VOC-005) --- operational control, not automation                                                                                                                                HIGH

  3        Enforceable pricing (fixed/floor/customer-specific)          Says pricing lives in no system, sends via ChatGPT image                         Follow-ups chase GPT link + Excel + catalogue; wants floor so sales can\'t undersell (VOC-010/013)                                                                                                                                                     HIGH

  4        AR / payment matching with human confirmation                Asks about payer mismatch, transfer/cash/QR, finance role                        Finance uses Excel for driver cash (VOC-009); QR settlement parked as manual (VOC-008)                                                                                                                                                                 HIGH

  **5**    **Credit/price-block silent failure (VOC-061)**              Client asked directly, twice, in the room                                        Checklist\'s own priority framing ranks this P0/critical-path --- matches revealed urgency exactly                                                                                                                                                     CONFIRMED

  6        Credit control & \"one invoice\" cash discipline             Describes one-invoice rule + pattern-based limits                                Chase spans finance→sales→boss (VOC-020) --- cash collection is an operating rhythm                                                                                                                                                                    MED-HIGH

  **7**    **Excel packing-list breakdown (VOC-064/065)**               Labeled P1 in the checklist bucket, not P0                                       **Revealed importance materially higher than the P1 label suggests** --- checklist calls it \"the only load-bearing new-scope item,\" a commercial commitment (Excel removal) depends on it, disproportionate session time spent on format specifics   BELIEVED --- the stated/revealed divergence is itself the signal

  8        Catalogue as a sales operating tool                          Wants image catalogue, not PDF; team AI ambition                                 Still live in post-meeting follow-up; scope-risky if left open-ended (VOC-015/029)                                                                                                                                                                     MED-HIGH

  **9**    **Mobile rendering for approvers (VOC-067/068)**             Labeled P1 in the checklist                                                      Understated by the P1 label: David and Krystle are literally the two people who approve credit/price blocks (VOC-061\'s fix) --- a broken approval UI on their handsets breaks the P0 fix regardless of its own label                                  BELIEVED

  10       Inventory aging / expiry alert                               Asks for near-expiry/slow-mover notification                                     Concrete pain (4 of 78 tons in 6 months); confirmed Phase 1, being built (Scope Lock NS-03)                                                                                                                                                            MED

  **11**   **Cold-chain dispute evidence / driver POD (VOC-075/076)**   Not raised as urgent this round, framed as forward-looking                       Client already spends money on a parallel GPS/temperature service --- real appetite, but zero pressure applied in this round specifically                                                                                                              BELIEVED
  -------- ------------------------------------------------------------ -------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------

**Phase 4 --- Intermediate Synthesis (Theme Clusters)**

The 78 VOC signals collapse into **six themes**. Each carries an internal tension --- the thing that makes it hard to build, not just describe.

  ------------------------------------------------------------------------- ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Theme                                                                     Anchors                            What it is                                                                                                                                                                                                                                                                                                                                                                                                                                      Internal tension

  **T1 --- Order is provisional until weight confirmed**                    VOC-001, 005, 006, 013, 027        Everything downstream (DO, invoice, price, SQL push) waits on the real picked weight                                                                                                                                                                                                                                                                                                                                                            MAIA\'s native flow wants to own the pick list; David insists on his own paper flow + upload confirmed weights. Product bends to him, not the reverse

  **T2 --- Accountability, not automation, is the warehouse ask**           VOC-004, 006, 023, 025             \"10 kg ordered, 8 picked, checker still says 10\" --- wants proof of who picked/checked                                                                                                                                                                                                                                                                                                                                                        David reaches for a system feature (GRN photo, WMS, batch QC) for a problem he himself calls human process. Must produce an audit trail or it misses the point

  **T3 --- Pricing is a control plane the business has none of**            VOC-010, 011, 013, 014, 019        Price lives in ChatGPT images + WhatsApp, not SQL, because \"SQL has no enforcement\"                                                                                                                                                                                                                                                                                                                                                           The hook that makes David adopt discipline is *enforcement* (floor + customer-specific + quotation lock) --- but volume-based pricing can\'t be enforced, stays manual

  **T4 --- AR is trust + cash discipline under multi-mode payment noise**   VOC-007, 008, 009, 016, 020, 021   Transfer + cash + QR-merchant + \"one invoice\" rule + finance→sales→boss chasing                                                                                                                                                                                                                                                                                                                                                               MAIA auto-matches easy cases, holds human for hard ones --- but QR-merchant settlement stays outside. Boundary must be explicit or finance expects magic

  **T5 --- Presence anxiety drives the catalogue/blast cluster**            VOC-015, 018, 026, 029             \"Competitor sends price every 2--3 hours; we need to show we\'re active\"                                                                                                                                                                                                                                                                                                                                                                      Biggest scope-creep risk: open-ended image gen + WhatsApp blasting (bans the number). Anxiety is real; deliverable must be fixed-format, blast expectation killed early

  **T6 --- Silence reads as broken***(new, from 2nd UAT)*                   VOC-061, 062, 063, 078             The client doesn\'t distinguish \"the system correctly blocked this and is waiting for a human\" from \"the system is broken.\" A block, an unactioned draft, or a stale chat context all present identically: nothing happened when something should have. The fix behind P0-01/02/03 and the \"spam Grace/Lai\" instructions isn\'t new capability --- it\'s the product finally narrating state changes that already exist in the workflow   Cheap to say, expensive to get right: \"notify on everything\" (VOC-062/063) collides directly with the earlier training-round complaint that MAIA\'s default notifications were noisy (feeds Scope Lock\'s AS-06/NS-14 lineage) --- the resolution must be a precise whitelist, not blanket verbosity, or the fix reintroduces the exact problem the client already complained about
  ------------------------------------------------------------------------- ---------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Read across the themes:** T1--T4 are the operational spine (Phase-1 core); T5 is the commercial itch that pulls scope sideways if unmanaged. **T6 cuts across T1/T2 specifically** --- it\'s the same \"David as bottleneck\" thread as the base extraction\'s original cross-theme read, now surfacing at the notification layer instead of the workflow layer: the client is describing the same anxiety (personally chasing state because the system won\'t tell anyone) that originally motivated the whole engagement, now visible in a live, built product instead of a described future one.

**Phase 5 --- Empathic Interpretation Layer**

**INFERENCE \[HIGH, anchors: VOC-001, VOC-003, VOC-005\]** --- David is not buying \"AI order entry.\" He is buying a way to stop his WhatsApp → paper → SQL operation from depending on *him* personally coordinating everyone. His own words: he is the sole coordinator (\"Me\"), and MAIA\'s pitch that lands is \"remove yourself being in this bottleneck.\" The system must reduce ambiguity **without forcing the warehouse into a flow they won\'t follow** --- exactly why he insists on keeping his own paper pick list.

**INFERENCE \[HIGH, anchors: VOC-004, VOC-006, VOC-025\]** --- The warehouse ask is misframed if read as \"stock entry / GRN OCR.\" The real need is **operational proof** --- who picked, who checked, what weight was actually confirmed --- so error becomes attributable and punishable. David himself concludes the stock-count problem \"is not a system problem\"; a GRN photo feature would miss the emotional and business need entirely.

**INFERENCE \[HIGH, anchors: VOC-010, VOC-011, VOC-013\]** --- Pricing is a **control-plane** problem, not a speed problem. David\'s pain is not \"update prices faster\"; it\'s preventing sales/admin from selling at stale or wrong prices after the market moves. The moment MAIA can *enforce* a floor, it becomes \"a reason for me to do it inside\" --- his own framing.

**INFERENCE \[MED-HIGH, anchors: VOC-007, VOC-008, VOC-009, VOC-020\]** --- AR is about **trust and cash discipline**, not reconciliation speed. The fear is the customer who claims \"already fully paid\" while SQL still shows outstanding. Multi-mode payments plus sales chasing with incomplete information is the daily friction.

**INFERENCE \[MED, anchors: VOC-015, VOC-021\]** --- Macro Frozen is acutely sensitive to **how their customers consume documents**. Image catalogue over PDF (\"old people scared to click PDF\"), CN number mirroring invoice number \"so we don\'t confuse our customer\" --- both point to the same latent need: outputs must match how their customers actually recognise information, or the customer distrusts them.

**INFERENCE \[MED-HIGH, anchors: VOC-026, VOC-015, VOC-029\]** --- The catalogue/blast cluster is really about **presence** --- \"we need to tell them we are also active.\" Commercial anxiety, not a feature request, and the biggest scope-creep risk in the account.

**INFERENCE \[HIGH, anchors: VOC-061, VOC-062, VOC-063\]***(new)* --- The client isn\'t asking for a notification *feature* in the abstract --- they\'re asking the product to close the same accountability gap named in T2 (VOC-004: \"who picked, who checked\"), now applied to approvals instead of picking. \"Spam Grace\" and \"spam Lai\" are a request for **provable visibility that the handoff happened**, phrased in the only vocabulary a non-technical operator has for \"tell me every time, I don\'t trust silence.\" A smart digest instead of the literal instruction would miss the actual ask, which is trust-restoration, not inbox hygiene.

**INFERENCE \[MED-HIGH, anchors: VOC-064, VOC-065\]***(new)* --- The Excel pushback is not resistance to change --- David and the team engaged with the *replacement design* in detail (how many pictures, how aggregation works, customer visibility) rather than simply refusing it. This is the same T1 pattern: the client adopts a new mechanism only if it visibly preserves what the old one proved to them and their customers. The Excel isn\'t sacred; the **proof it generates** is.

**INFERENCE \[MED, anchors: VOC-067, VOC-068, VOC-042\]***(new)* --- Given VOC-042\'s explicit management mandate for full adoption (\"the company spent a lot of money on this\"), a broken approval screen on the two approvers\' own phones is a bigger adoption risk than its P1 label suggests --- it directly contradicts the mandate David himself gave the org, since the person meant to enforce full adoption can\'t use the tool that enforces it.

**Phase 6 --- What They Expect the Product to Do**

**Respect SQL constraints absolutely** --- no duplicate invoice, invoice qty ≤ DO qty, running IDs not overridable (VOC-027). *Testable.*

**Support a two-stage order flow** --- draft SO first, actual weight/qty confirmed via David\'s own pick list before DO/Invoice generate (VOC-001/005). *Testable; locked Phase-1 flow.*

**Make pricing enforceable** --- wholesale/retail/customer-specific/fixed + min-price floor, with quotation generation; volume-based pricing explicitly not enforced (VOC-013/014). *Scope risk: volume-based must stay flagged as manual-check.*

**Assist AR, keep the human** --- auto-match the easy ones, human finalises the hard ones; QR-merchant settlement stays outside (VOC-007/008). *Testable.*

**Credit control with one-time override** --- block on limit/term, notify David to approve a single order (VOC-016/017). *Testable.*

**Fixed-format catalogue generation** --- reflects live MAIA/SQL price, not open-ended freestyle image gen (VOC-015/029). *Scope risk --- hold the fixed-format line.*

**Preserve sales territory isolation** --- reps see only their own customers (VOC-019). *Testable.*

**Inventory aging alert** --- near-expiry / slow-mover notification (VOC-022). *Confirmed Phase 1, being built.*

**Every blocked order (credit or price) must visibly notify the correct approver** --- silence on a block reads as the product being broken (VOC-061). *Testable, fixed-format.*

**Grace receives every draft DN event, unfiltered; Lai receives every submitted SO event, unfiltered** --- client explicitly rejected digesting/batching for these two flows (VOC-062/063). *Testable, fixed-format, but scope-risk if \"spam\" is interpreted inconsistently across other event types without an explicit per-event whitelist.*

**The picked-quantity breakdown must be visible on both the pick list and the DN, in a form the client can hand to their own customer as proof** (VOC-064/065). *Open-ended expectation --- exact customer-facing presentation format not yet specified; scope-risk if a data field ships without confirming the presentation matches what the client pictures.*

**Approval-critical mobile UI must work correctly on the specific devices the two approvers actually use** (Z Fold, iPhone 17 Pro Max), not just \"responsive design\" in the abstract (VOC-067/068). *Testable against named devices, not general breakpoints.*

**Stated vs Revealed Importance**

  ----------------------------------------------------- ---------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------
  Item                                                  Stated                                                           Revealed                                                                                                                                                                Read

  AR reconciliation                                     One of the 4 named customisations                                Multi-mode payments, Excel driver-cash, account+consultant split                                                                                                        Real P1

  Warehouse \"stock entry\"                             Framed as GRN/stock-count feature                                David\'s own examples are picking/checking error + accountability; he concludes \"not a system problem\"                                                                Misframed --- it\'s accountability, not GRN OCR

  Product catalogue                                     Explicitly requested + chased after meeting                      Became concrete follow-up (GPT link, Excel, 3-mo images)                                                                                                                Commercially salient; scope-risky --- fix format

  Pricing enforcement                                   \"We not update any system\"                                     The *enforcement* (floor) is the hook that would make him adopt SQL-side discipline                                                                                     Real P1 --- the control plane

  Inventory aging                                       Asked for in meeting                                             Concrete pain; now confirmed in-scope                                                                                                                                   Phase 1 --- being built

  Delivery trip management / POD accuracy               Discussed (driver photo → tag invoice)                           Vendor parks it; POD photo accuracy unreliable                                                                                                                          Do-not-let-it-leak-into-go-live

  WhatsApp price blasting                               Wants to blast 300--400 customers                                Technically bans the number; unsupported                                                                                                                                Cannot deliver --- manage expectation now

  **Excel packing-list breakdown (VOC-064/065)**        P1 (per checklist bucket)                                        Load-bearing --- commercial commitment (Excel removal) depends on it                                                                                                    **Real P0.5 --- do not let the label understate this; misframed by priority bucket, not by the client**

  **Mobile approval-UI rendering (VOC-067/068)**        P1 (per checklist bucket)                                        Structurally gates the P0 credit/price-block fix --- an unusable approval screen on the approver\'s own phone defeats the notification fix even if it fires correctly   **Real P0.5 --- same misframing pattern; flag for whoever sequences the 5 Aug fix window**

  **Cold-chain dispute / driver telemetry (VOC-075)**   Not raised as urgent this round                                  Real appetite (client pays for a parallel service), zero pressure applied this round                                                                                    **Phase 2 --- do not accelerate on this round\'s evidence alone**

  **Pcs as UOM (VOC-066)**                              Raised only as a live friction moment, not escalated afterward   Bundled fix via the breakdown mechanism (VOC-065)                                                                                                                       **Correctly sized at P1 --- stated and revealed priority agree, no misframing**
  ----------------------------------------------------- ---------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------

**What We Do NOT Know**

  ------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------
  Unknown                                                                                                                               Why it matters                                                                                                                                                         How to resolve

  Whether the warehouse user will actually use MAIA, or David keeps coordinating                                                        Real failure mode is adoption, not features --- warehouse voice entirely second-hand across both evidence layers                                                       Observe one real pick→confirm→upload cycle with the actual warehouse manager before go-live

  Format of the confirmed pick-list upload (Excel vs scanned PDF vs photo)                                                              OCR/extraction fails on blurry or handwritten paper                                                                                                                    Collect 10 real pick lists, test extraction before promising accuracy

  Real payer-mismatch patterns (aliases, partial payments, references)                                                                  AR auto-match quality depends on real data                                                                                                                             Collect 20 real payments: bank rows + slips + invoice mappings

  Whether \"pro forma invoice\" must be a distinct titled document                                                                      David\'s customer\'s financier may reject a Sales Order lacking the word \"invoice\"                                                                                   Get 2--3 real cases where exact wording was required

  Catalogue: how many variants, which SKUs per picture                                                                                  Scope explodes if left open-ended                                                                                                                                      Lock a fixed template, allowed fields, SKU count, review/send process

  SQL integration access + timing                                                                                                       Training/go-live depends on live customer/SKU data                                                                                                                     Close SQL vendor credential/API access

  POD workflow --- two unreconciled mechanisms now on the table                                                                         v2\'s \"Accounts uploads\" note (NS-07) and v3\'s \"driver\'s own account\" proposal (AS-12) have not been reconciled --- David hasn\'t chosen between them            Flag both mechanisms to David explicitly, get one decision, don\'t let a developer pick

  Backup coverage for Logistics/Finance Manager absence                                                                                 Real operational gap that surfaces regardless of what MAIA builds                                                                                                      David needs to decide a backup assignment; not resolvable by product design alone

  Warehouse Maya access model --- individual logins vs shared device                                                                    Affects how the pick-list-upload step is actually operated day to day                                                                                                  Confirm with David/warehouse manager before finalizing UAT scenarios

  **Grace\'s and Lai\'s own words on the DN-handoff and pick-list pain points**                                                         Both are the two roles most affected by this round\'s P0/P1 fixes, but neither has a captured direct quote --- everything attributed to them is checklist paraphrase   Sit with Lai and Grace individually (not in a group UAT session) for 30 minutes each, walking one real order end-to-end, capture their words directly

  **Exact expected presentation format for the picked-quantity breakdown on customer-facing documents**                                 Team has a data-model proposal but no confirmed answer on client-facing visual presentation                                                                            Show David/Grace a mock DN PDF with a sample breakdown table before building the real PDF template

  **Whether cold-chain/GPS-telemetry interest (VOC-075) is near-term commercial opportunity or a passing remark**                       Determines whether Product should scope proactively or wait                                                                                                            Ask Ivan whether this came up unprompted or was solicited; if unprompted, worth a dedicated David follow-up

  **Whether the 1pm/2pm same-day-delivery cutoff conflict (DG-3) reflects one rule mis-transcribed, or two genuinely distinct rules**   Blocks MF-P1-11b; wrong interpretation ships a broken cron                                                                                                             Get David to write the exact rule down in one sentence, ideally over WhatsApp text so it\'s unambiguous and citable
  ------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------

**Bottom Line**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  \"Help us keep our WhatsApp-driven frozen-food operation accurate, current, and controlled --- especially where weight, price, payment, and human checking all change after the customer first places the order --- without making me the person who has to coordinate every step. And when the system does step in and hold something back, tell someone --- don\'t let it just sit there in silence and make me chase it down myself.\"

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The product mistake most likely to sink this account remains what it was at discovery: treating this as a generic WhatsApp order-automation deployment. The real risk is **workflow translation and adoption** --- if MAIA doesn\'t fit the paper pick-list / final-weight / SQL-document discipline, and if warehouse and sales don\'t actually adopt it, David keeps coordinating everything by hand and the deployment feels cosmetic instead of operational. The 2nd UAT round sharpens exactly where this risk is landing right now: shipping the notification fixes (VOC-061→063) as engineering-correct but leaving the two approvers (David, Krystle) unable to act on them because the approval screens don\'t render on their own phones (VOC-067/068). A P0 fix that only works on a laptop, when the two people who need it are mobile-only in practice, doesn\'t ship from the client\'s point of view --- a workflow/adoption risk hiding inside what reads as two separate, lower-priority mobile bugs. The second standing risk is scope creep via the catalogue/blast ambition (T5) --- hold the fixed-format line, unchanged from discovery.

**Close the Loop --- Next Actions**

**To backlog now (CONFIRMED / strongly-BELIEVED):**

Two-stage O2C with external pick-list upload (VOC-001/005), SQL-conformant doc flow (VOC-027), pricing floor + customer-specific + quotation (VOC-013/014), AR auto-match+human (VOC-007/008), credit control + one-time override (VOC-016/017), sales isolation (VOC-019), pro forma invoice (VOC-018).

VOC-061/062/063 --- notification dispatch on credit/price block, and the two \"spam\" flows --- tracked as Scope Lock v3 SL-09/SL-10/SL-11/SL-12.

VOC-066 --- pcs as UOM via the breakdown mechanism --- tracked as Scope Lock v3 AS-11 dependency.

VOC-067/068 --- named-device mobile rendering fixes --- recommend re-sequencing ahead of other P1 items given the structural dependency on the P0 approval fix (see Phase 5 inference).

**To verify first (gated on \"What We Do NOT Know\"):**

Pick-list upload format, payer-mismatch data, catalogue variant scope, warehouse adoption (base layer).

VOC-064/065 breakdown presentation format --- mock up and confirm with David/Grace before the third build step.

VOC-075 cold-chain/telemetry interest --- confirm commercial intent with Ivan before any scoping conversation.

DG-3 delivery-cutoff rule --- get an unambiguous written rule from David.

POD mechanism reconciliation --- NS-07 vs AS-12, get David to choose one.

**To report back to the client:**

Confirm what IS in Phase 1 vs parked (aging alert, delivery/POD, WhatsApp blasting = not supported), and why blasting can\'t be done. Set the catalogue as fixed-format, not freestyle.

Confirm receipt of \"spam Grace\" / \"spam Lai\" and that it\'s built literally as stated, so the client sees their own words reflected back.

Explicitly acknowledge the Excel packing-list pushback was heard --- the breakdown feature exists *because* of what they said the Excel currently proves to their customers.

When mobile-rendering fixes ship, specifically confirm with David and Krystle on their own named devices --- not a general \"mobile now works\" message.

**Refresh trigger:** re-run after go-live once the warehouse user has run real cycles --- warehouse voice is the biggest standing gap and only real usage closes it. **Also** re-run after the 3rd UAT (11--14 Aug 2026) --- that round should finally produce a called verdict (Scope Lock v3\'s DG-4 flag) and is the first test of whether the notification fixes actually closed the \"silence\" complaint this round surfaced.

**Scope Lock Alignment**

Cross-reference of every VoC theme/signal against **Macro Frozen --- Scope Lock v3** (2026-07-29). Confirms the two documents agree, and flags signals that have **no scope-lock home yet**.

  --------------------------------------------------------- ---------------------- ----------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  VoC signal(s)                                             Scope Lock item        Scope Lock status                                                                                                                   Aligned?

  VOC-001, 005, 027 (two-stage O2C, SQL master)             SL-01, SL-07, AS-01    LOCKED / AGREED IN PRINCIPLE                                                                                                        ✅

  VOC-007, 008, 009 (AR, payer mismatch, cash)              SL-02                  LOCKED                                                                                                                              ⚠️ cash-from-driver (VOC-009) still not in SL-02 AC; VOC-033 adds adoption skepticism

  VOC-010, 011, 013 (pricing, floor, cust-specific)         SL-03                  LOCKED                                                                                                                              ✅

  VOC-014 (quotation before order)                          AS-07                  AGREED IN PRINCIPLE                                                                                                                 ⚠️ real usage much lower than assumed --- whether David still wants this built is the live question

  VOC-016, 017 (credit control + override)                  SL-04                  LOCKED                                                                                                                              ✅ --- see NS-05/NS-20 mechanism gaps

  VOC-019 (sales territory isolation)                       SL-05                  LOCKED                                                                                                                              ✅

  VOC-004, 025 (picking accountability)                     AS-01                  AGREED IN PRINCIPLE --- addressed at warehouse-manager level                                                                        ⚠️ per-worker digital attribution still not covered

  VOC-023 (damage / batch QC photo log)                     ---                    No scope-lock home                                                                                                                  ❌ still a gap

  VOC-028 (SQL vendor access)                               DEP-1                  OPEN --- live blocker, tracked                                                                                                      ✅

  VOC-003, 038 (route-based pick grouping)                  AS-01 flow             Confirmed via 20Jul26 doc                                                                                                           ✅

  AS-04 (outdoor sales, now salesperson-submits-directly)   AS-04                  LOCKED, superseded 2026-07-27                                                                                                       ✅

  VOC-015, 029 (catalogue, fixed-format)                    AS-02                  AGREED IN PRINCIPLE                                                                                                                 ✅ (build unlocked)

  VOC-018 (pro forma invoice)                               NS-04                  RESOLVED                                                                                                                            ✅

  VOC-021 (CN numbering)                                    AS-03                  AGREED IN PRINCIPLE --- doctype finalized, connector now built but untested                                                         ⚠️ see NS-18 below

  VOC-020 (payment escalation)                              NS-06                  RESOLVED                                                                                                                            ✅

  VOC-022 (inventory aging alert)                           NS-03                  RESOLVED (feature) / OPEN (mechanism)                                                                                               ⚠️

  VOC-030 (item historical pricing)                         NS-08                  RESOLVED                                                                                                                            ✅

  VOC-024 (POD driver photo)                                NS-07                  BLOCKED --- client conflict, unreconciled with AS-12 this round                                                                     ❌ not aligned --- see What We Do NOT Know

  VOC-031 (role/permission reality)                         SL-04, AS-05           Definitions clarified, full matrix pending                                                                                          ⚠️

  VOC-032 (customer-agent SQL assignment)                   SL-08                  LOCKED                                                                                                                              ✅

  VOC-033 (AR auto-match skepticism)                        SL-02                  Adoption-risk flagged                                                                                                               ⚠️

  VOC-034 (backup coverage gap)                             NS-10                  Needs Scoping                                                                                                                       ⚠️

  VOC-035 (customer PO issuance)                            AS-08 / NS-12          AGREED IN PRINCIPLE                                                                                                                 ⚠️ mechanism open

  VOC-036 (cost/buying price tracking)                      AS-09 / NS-13          AGREED IN PRINCIPLE                                                                                                                 ⚠️ mechanism open

  VOC-008 (QR merchant settlement)                          Out of scope           Excluded                                                                                                                            ✅

  VOC-026 (WhatsApp blasting)                               Out of scope           Excluded                                                                                                                            ✅

  VOC-013 (volume-based pricing)                            Out of scope           Not supported                                                                                                                       ✅

  VOC-037 (notification system not ready)                   SL-09→SL-12            **Now LOCKED as of Scope Lock v3** --- direct progression from \"not built\" (17 Jul training) to a designed, locked architecture   ✅ resolved this round

  VOC-039, 040 (picking-discrepancy visibility)             AS-01                  Addressed at warehouse-manager level                                                                                                ✅

  VOC-041 (foreign-worker device friction)                  NS-11                  Needs Scoping                                                                                                                       ⚠️

  VOC-042 (adoption mandate)                                AS-01 adoption risk    Offsets the adoption-risk flag                                                                                                      ✅

  VOC-043 (price-lock/approval)                             SL-03 / SL-11          LOCKED --- SL-11 (new, v3) directly extends this into the escalation mechanism                                                      ✅

  VOC-044 (fixed vs market pricing modes)                   SL-03                  Not yet explicit in SL-03\'s AC                                                                                                     ❌ gap --- recommend adding

  VOC-045 (cost-price visibility)                           SL-04                  LOCKED                                                                                                                              ✅

  VOC-046 (weight-based invoicing)                          AS-01                  Confirmed                                                                                                                           ✅

  VOC-047 (SO-amendment ownership)                          AS-01                  Open sub-question                                                                                                                   ⚠️

  VOC-048, 049 (payment-proof/payer mismatch)               SL-02                  LOCKED                                                                                                                              ✅

  VOC-050 (AR visibility gap)                               SL-02 / AS-06          Partially addressed                                                                                                                 ⚠️

  VOC-051 (weekly SOA cadence)                              ---                    Not explicitly scoped                                                                                                               ❌ gap

  VOC-052 (accounting scope pushback)                       Out-of-scope note      Boundary confirmed                                                                                                                  ✅

  VOC-053 (supplier goods-in double-entry rejected)         AS-09 / Out of scope   Confirmed                                                                                                                           ✅

  VOC-054 (dashboard salesperson filter)                    NS-14                  RESOLVED                                                                                                                            ✅

  VOC-055 (customer order-pattern flag)                     AS-06 / AS-05          Not yet scoped                                                                                                                      ❌ gap

  VOC-056 (related-company pricing)                         ---                    No build spec yet                                                                                                                   ❌ still open

  VOC-057 (customer-ownership politics)                     SL-05 / NS-16          Context for isolation + merge rules                                                                                                 ✅

  VOC-058 (duplicate/returning-customer gap)                NS-16                  RESOLVED                                                                                                                            ✅

  VOC-059 (customer-name field lock)                        ---                    Not scoped                                                                                                                          ❌ minor gap

  VOC-060 (lead-heat social monitoring)                     ---                    Not scoped, informal only                                                                                                           ❌ note only

  **VOC-061 (silent block failure)**                        SL-09, SL-10, SL-11    LOCKED (direction) --- SL-10 mechanism gated on NS-20                                                                               ✅ direction / ⚠️ enforcement-mode gate open

  **VOC-062, 063 (\"spam Grace/Lai\")**                     SL-12                  LOCKED                                                                                                                              ✅

  **VOC-064, 065 (Excel breakdown)**                        AS-11                  AGREED IN PRINCIPLE --- feasibility gate not cleared                                                                                ⚠️ load-bearing but not yet locked

  **VOC-066 (pcs UOM)**                                     AS-11 (bundled)        AGREED IN PRINCIPLE                                                                                                                 ⚠️ same gate as AS-11

  **VOC-067, 068 (mobile rendering, named devices)**        ---                    Tracked only in bug-fix checklist P1, no dedicated Scope Lock item                                                                  ❌ **no Scope Lock home yet --- recommend promoting to its own AS item, given the structural dependency this VoC pass surfaces on SL-10/SL-11\'s go-live readiness**

  **VOC-069 (mobile payment-term banner)**                  ---                    Tracked only in bug-fix checklist P1                                                                                                ❌ no Scope Lock home --- minor, UI-fix level

  **VOC-070, 071 (pick list PDF defects)**                  ---                    Tracked only in bug-fix checklist P0/P1                                                                                             ❌ no Scope Lock home --- defect-level, arguably doesn\'t need one

  **VOC-072 (customer search by address)**                  ---                    Tracked only in bug-fix checklist P2                                                                                                ❌ no Scope Lock home --- recommend an NS item if meant as a durable commitment

  **VOC-073 (contact database)**                            NS-17                  Needs Scoping                                                                                                                       ✅

  **VOC-074 (SCN/CCN stock-reducing case)**                 NS-18                  Needs Scoping                                                                                                                       ✅

  **VOC-075 (cold-chain disputes)**                         AS-12 (context)        AGREED IN PRINCIPLE --- AS-12 covers POD mechanism, not the telemetry ambition                                                      ⚠️ partially --- POD scoped, telemetry explicitly out of scope

  **VOC-076 (driver role scope, narrow)**                   AS-12                  AGREED IN PRINCIPLE                                                                                                                 ✅

  **VOC-077 (Sunday report cadence)**                       AS-13 / NS-19          AGREED IN PRINCIPLE / Needs Scoping                                                                                                 ✅

  **VOC-078 (stale chatbot context)**                       ---                    Tracked only in bug-fix checklist P1, cross-portfolio not Macro-specific                                                            ❌ no Scope Lock home --- correctly so, framed as a cross-account platform fix
  --------------------------------------------------------- ---------------------- ----------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Net:** most 2nd-UAT-round signals now have a Scope Lock v3 home. The clearest gap is **VOC-067/068** --- tracked only inside the bug-fix checklist\'s undifferentiated P1 bucket, but Phase 5\'s inference argues it structurally gates SL-10/SL-11\'s go-live readiness. Recommend the next Scope Lock rerun promote this to its own AS item.

**Appendix --- Changes from the Prior VoC (base → v3)**

  ---------------------- ---------------------------------------------- ---------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------
  Dimension              Base (4 June-sourced)                          v3 (this version)                                                                                                      Why it matters

  Truth source           4 Jun F2F transcript only                      Adds the 2nd UAT round (28--29 Jul) as a second, distinct truth layer --- reactive voice, not aspirational             Captures what actually broke when the client used the live product, not just what they said they wanted upfront

  Evidence count         60 VOC ids                                     **78 VOC ids**                                                                                                         18 new signals from live UAT reaction

  New signal category    ---                                            \"Silence reads as broken\" (T6) --- the notification/escalation gap                                                   Names a pain type the discovery-phase corpus couldn\'t have surfaced, since nothing was live yet

  Coverage verdict       proceed-with-caveats (warehouse/picker thin)   proceed-with-caveats, **same core gap persists** + Grace/Lai\'s new-round claims specifically downgraded to BELIEVED   Warehouse adoption remains the single biggest standing risk across both discovery and UAT layers

  Scope Lock Alignment   Against Scope Lock v1/v2                       Against Scope Lock v3 (SL-01→13, AS-01→13, NS-01→20)                                                                   Surfaces one clean gap (VOC-067/068) the Scope Lock rerun should close next
  ---------------------- ---------------------------------------------- ---------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------

**See Also**

\[\[Customer Narrative - Macrofood\]\]

\[\[F2F Requirements Gathering Summary 2026-06-04\]\]

\[\[Macrofood Phase 1 Timeline\]\]

\[\[Macrofood MAIA SQL integration\]\]

\[\[Macrofood --- Scope Lock v3\]\]

\[\[UAT/28Jul26 - 2nd UAT Bug Fixes Checklist\]\]

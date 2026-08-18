**GST Fine Foods Phase 1 --- Backward Plan to Go-Live**

**End goal:** Core MAIA live + client trained + SAP B1 integration verified\
**Created:** 2026-06-22\
**Channel:** WhatsApp (GST handles WABA/Meta setup themselves; MAIA provides setup guide) + Telegram as fallback\
**Scope:** Core MAIA --- RFQ intake + product matching, Sales Order creation, payment slip approval routing, credit limit checks, SAP B1 integration (Service Layer API), Crystal Reports-aligned document output, daily digests.\
**Model:** Same pattern as \[\[Macrofood Phase 1 Timeline\]\] and \[\[Dalson Phase 1 Timeline\]\] --- lock all deps, deploy instance, SAP integration, internal test + live fix, UAT, go-live, training.

**Milestone Map**

  --------------------------------------------------------------------------------------------------------------------------------
  NOW ─── M0 Deps ─── M1 Deploy + Chatbot ─── M2 SAP Integration ─── M3 Internal Test ─── M4 UAT ─── M5 Go-Live ─── M6 Training\
  Now Now--TBC TBC TBC TBC TBC TBC TBC\
  Jun 22

  --------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------- ------------- --------------- --------------------------------------------------------------------------------
  Phase                               Date          Who             Goal

  M0 Deps + Kickoff                   Now --- TBC   Gareth + GST    Lock all remaining deps; SAP UAT license; schedule AWS + OpenAI setup meeting

  M1 AWS Deploy + Telegram/WA         TBC           Dev             MAIA instance live on GST AWS; chatbot connected and smoke-tested

  M2 SAP B1 Integration + Data Seed   TBC           Dev + PM        SAP Service Layer sync working; master data seeded; Crystal Reports PDF config

  M3 Internal Test + Live Fix         TBC           Gareth + Dev    Full GST workflow run-through live; fix on spot; all scope items green

  M4 UAT                              TBC           PM + GST        Client runs UAT on spot; PM triages same session

  M5 Go-Live                          TBC           PM + GST        Punch list cleared; live confirmed; sign-off obtained

  M6 Training                         TBC           PM + GST team   Full team trained on live system
  ----------------------------------- ------------- --------------- --------------------------------------------------------------------------------

**⚠️ Critical Path --- SAP UAT License + Integration (M0 → M2 → M3)**

SAP B1 integration via Service Layer API is a **hard go-live blocker**. Two gates control the critical path:

**SAP UAT license from GST\'s vendor** --- expected Wed 25 Jun. No UAT environment = no integration build.

**AWS + OpenAI setup meeting** --- Gareth to schedule with GST; gates instance deploy (M1).

  ---------------------------------------------------------------------------------------------------------------
  SAP UAT license received (Wed 25 Jun) → integration build starts → data seed → internal test → UAT → go-live.

  ---------------------------------------------------------------------------------------------------------------

If SAP vendor slips past **Wed 25 Jun**, all downstream milestones shift --- escalate immediately.

**WABA / WhatsApp:** GST handles their own Meta + WABA account setup. MAIA provides the \[\[Guide\] Channel & Infrastructure Setup Guide Copy\] to GST. **Not a MAIA-controlled blocker.** Telegram is the fallback channel if WhatsApp is not ready at go-live.

**M0 --- Dependencies + Kickoff (Now --- TBC)**

**Who:** Gareth + GST\
**Goal:** Confirm every input M1 and M2 depend on. Nothing downstream moves until these land.

**Already Done ✅**

~~SAP B1 access received~~

~~VPN network access received~~

~~Remote desktop access received~~

~~Core MAIA setup complete~~

WABA setup guide prepared for GST --- \[\[Guide\] Channel & Infrastructure Setup Guide Copy\]

**Pending --- Critical**

  -------------------------------------------------------- ---------------------------- ----------------------- -----------------
  Dependency                                               Blocks                       Status                  Expected

  SAP vendor provides UAT license access to MAIA team      SAP integration build (M2)   🟡 Pending              Wed 25 Jun 2026

  Schedule meeting with GST to set up AWS account access   Instance deploy (M1)         ⬜ Gareth to schedule   TBC

  Schedule meeting with GST to set up OpenAI API key       Chatbot (M1)                 ⬜ Gareth to schedule   TBC
  -------------------------------------------------------- ---------------------------- ----------------------- -----------------

**Pending --- Client Deliverables**

  ----------------------------------------------------------------------------------- ------------------------------ ----------------------------------------
  Dependency                                                                          Blocks                         Status

  GST company user list (name, role, contact, branch)                                 User seed (M2)                 ⬜

  PDF samples of gold-standard Crystal Reports outputs (Quotation, SO, Invoice, DO)   PDF template config (M2)       ⬜

  Item master excerpt from SAP (anonymised)                                           SAP mapping (M2)               ⬜

  Customer-specific naming / cross-reference sheet                                    Product matching config (M2)   ⬜

  Confirm stock availability source --- SAP live vs daily Excel extract               Core flow config (M2)          ⬜

  Confirm which branch goes live first (Penang or KL)                                 Scope lock                     ⬜

  WhatsApp Business number + Meta Business Account (GST-managed)                      WhatsApp channel (M1)          🟡 GST handles --- MAIA provides guide
  ----------------------------------------------------------------------------------- ------------------------------ ----------------------------------------

**M1 --- AWS Deploy + Chatbot Setup (TBC)**

**Who:** Dev (pending M0 AWS + OpenAI setup meeting)\
**Goal:** MAIA instance live on GST\'s AWS; chatbot connected and responding.

**Gareth schedules meeting with GST** to set up AWS account + OpenAI API key --- gates this milestone

Deploy MAIA instance on GST\'s AWS

Set up chatbot --- **WhatsApp** preferred; **Telegram fallback** if WhatsApp not ready at go-live

Connect chatbot to MAIA instance

Smoke-test basic message flow: send message → MAIA responds

Confirm instance + chatbot stable before M2 begins

  ---------------------------------------------------------------------------------------------------------------
  WhatsApp/WABA: GST manages their own setup. Do not block deploy on it --- use Telegram as fallback if needed.

  ---------------------------------------------------------------------------------------------------------------

**M2 --- SAP B1 Integration + Data Seed (TBC)**

**Who:** Dev + PM\
**Goal:** Full SAP Service Layer sync working. All read + write flows verified before internal test. Gates on SAP UAT license received.

**SAP vendor delivers UAT license access** --- expected Wed 25 Jun (hard gate)

Confirm integration approach with Azib: SAP B1 Service Layer API (RESTful) --- confirmed in vendor meeting

Confirm custom UDF fields from GST\'s SAP --- need list of customized fields outside MAIA standard; Service Layer cannot support custom UDFs natively; new endpoints required

Build + verify **SAP READ:**

Item master sync (species, cut, weight, pack format, price list per customer)

Customer master sync

Inventory / stock level sync (confirm: live SAP vs daily extract vs hybrid)

Customer-specific price lists

Build + verify **SAP WRITE:**

Sales Order push to SAP B1

Invoice push to SAP B1

Delivery Order push to SAP B1

Confirm SAP development/UAT environment available (mirror of production data) --- as agreed in SAP vendor meeting

Configure **Crystal Reports-aligned PDF templates** --- Quotation, SO, Invoice, DO (from client samples)

Seed GST company users into MAIA

Seed customer + item master data from SAP exports

Confirm SAP document numbering structure (per branch or centralised; annual reset?) --- affects SO/Invoice number series

  ---------------------------------------------------------------------------------------------------------------------------------
  All writes must be tested on the UAT/development environment first --- never write to GST\'s live SAP production until go-live.

  ---------------------------------------------------------------------------------------------------------------------------------

**M3 --- Internal Test + Live Dev-Fix Session (TBC)**

**Who:** Gareth + Dev\
**Duration:** \~2--3 hours (one session)\
**Format:** PM runs every scope item live on GST env; dev fixes on the spot. Anything not fixable in session → explicit defer decision logged. Nothing goes to client UAT with a known failure.

**Core workflow checklist --- run live**

  ------ ----------------------------------------------------------------------------------------- ------ --------- ------ --------
  \#     Item                                                                                      FE     Chatbot   SAP    Status

  1      Item master synced from SAP (species, cut, weight, price list)                            ---    ---       ☐      ⬜

  2      Customer master synced from SAP                                                           ---    ---       ☐      ⬜

  3      Stock availability sync (SAP live / daily extract --- per agreed source)                  ---    ---       ☐      ⬜

  4      Upload RFQ Excel → MAIA reads and extracts line items (IDP)                               ☐      ☐         ---    ⬜

  5      Product matching --- customer wording mapped to SAP item master; closest match surfaced   ☐      ☐         ---    ⬜

  6      Substitution suggestion when exact match unavailable                                      ☐      ☐         ---    ⬜

  7      Quotation output --- match results returned as text message (not Excel)                   ☐      ☐         ---    ⬜

  8      Standard Sales Order created in MAIA + pushed to SAP B1                                   ☐      ☐         ☐      ⬜

  9      Credit limit check on SO --- breach triggers finance approval routing                     ☐      ☐         ---    ⬜

  10     Payment slip forwarded to finance via chatbot → approval before close-out                 ☐      ☐         ---    ⬜

  11     Invoice generated + pushed to SAP B1                                                      ☐      ---       ☐      ⬜

  12     Delivery Order generated + stored                                                         ☐      ---       ☐      ⬜

  13     Crystal Reports-aligned PDF renders correctly (SO, Invoice, DO)                           ☐      ---       ---    ⬜

  14     Daily digest --- unclosed SOs, outstanding payment slips, flagged stock                   ☐      ---       ---    ⬜
  ------ ----------------------------------------------------------------------------------------- ------ --------- ------ --------

End of session: green items locked; deferred items explicitly logged with decision

**Items NOT to test in M3 (out of scope --- do not creep in)**

CPRN (Customer Purchase Request Notes) --- Phase 2

RFQ deep matching logic (Phase 2 Customisation 1)

Aging + clearance reminders --- Phase 2

SOA (Statement of Account) generation --- Phase 2, subject to SAP feasibility

KL branch rollout --- Phase 1 starts with confirmed branch only (Penang or KL TBC)

**M4 --- UAT --- Client Session (TBC)**

**Who:** PM + GST UAT users (Joey Ong --- Sales; Soo Chin --- Operations; Tim --- Operations Manager; Finance PIC)\
**Format:** PM briefs scope → GST team runs UAT on the spot → PM triages same session.

Brief client: what\'s in scope vs deferred; what\'s new vs prior discussions

GST team runs core workflow live on MAIA env:

Upload RFQ Excel → product matching results returned

Standard SO creation via WhatsApp

Credit limit scenario --- breach → approval routed to finance

Payment slip submission → finance approval

Invoice + DO generated and pushed to SAP

Crystal Reports PDF layout verified against GST gold-standard samples

Daily digest view

PM on standby; log issues and triage same session

Minor issues: fix same day or by go-live date

Sign-off criteria agreed before session starts

Collect UAT results → conditional sign-off or punch list

**M5 --- Go-Live (TBC)**

**Who:** PM + GST\
**Goal:** UAT punch list cleared → confirm live → sign-off.

All UAT punch list items resolved

Instance stable (no regressions from UAT fixes)

Chatbot live on production --- GST team using it

All GST users confirmed active in MAIA (correct branch assignment)

SAP sync live on production (not UAT environment)

Crystal Reports PDF templates verified on production

Sign-off obtained --- payment milestone triggered

Go-live confirmed --- GST team begins live operations

**M6 --- Training (TBC)**

**Who:** PM + full GST team (sales coordinators, finance, logistics, management)\
**Format:** Full structured session; cover end-to-end live workflow.

Prep training material (slides / walkthrough based on UAT scenarios)

Demo environment with clean data ready

Train: RFQ upload → product matching → quotation output

Train: Standard SO creation via WhatsApp

Train: Credit limit check --- what happens when breach detected

Train: Payment slip submission → finance approval flow

Train: Invoice + DO generation

Train: Daily digest --- what it shows, how to act on it

Train: Document retrieval (SO, Invoice, DO by customer / date / order number)

Cover: how to flag issues post go-live; escalation contact

WhatsApp path: confirm WABA live or confirm Telegram is active go-live channel

**Scope at Go-Live (What GST Gets)**

  ---------------------------------------------------------------- --------------------
  Feature                                                          Status

  RFQ Excel intake + line item extraction (IDP)                    ✅ Phase 1

  Product matching --- SAP item master lookup, match surfacing     ✅ Phase 1 (basic)

  Standard Sales Order creation via WhatsApp                       ✅ Phase 1

  Pre-order checks: stock, credit limit, customer pricing          ✅ Phase 1

  Finance approval routing --- payment slips + credit exceptions   ✅ Phase 1

  SAP B1 integration --- read (items, customers, stock, pricing)   ✅ Phase 1

  SAP B1 integration --- write (SO, Invoice, DO push)              ✅ Phase 1

  Crystal Reports-aligned document output (SO, Invoice, DO)        ✅ Phase 1

  Daily digests --- unclosed SOs, payment slips, flagged stock     ✅ Phase 1
  ---------------------------------------------------------------- --------------------

**NOT in Phase 1 Scope (Do Not Creep In)**

**CPRN (Customer Purchase Request Notes / blanket orders)** --- Phase 2

**Deep RFQ matching logic** (customer cross-reference, substitution rules engine) --- Phase 2 Customisation 1

**Aging + clearance reminders** (near-expiry stock alerts) --- Phase 2

**SOA (Statement of Account)** generation --- Phase 2, subject to SAP feasibility

**KL branch rollout** --- Phase 1 = one branch only (confirm which branch)

**Langkawi branch** --- post Phase 1

**MRP / manufacturing process integration** --- not in SOW

**Stock transformation (whole fish → cut)** --- to confirm if Phase 1 or Phase 2 (raised in SAP vendor meeting)

**Key Contacts**

  -------------------------------- ------------------- -------------------------
  Role                             Name                Contact

  GST Sales PIC                    Joey Ong            ---

  GST Operations                   Soo Chin (boss)     chin@gstgroup.com.my

  GST Operations Manager           Tim                 timwong@gstgroup.com.my

  GST Finance                      Miss Lee (Penang)   finance@gstgroup.com.my

  GST CEO Wife                     Teoh Le Ying        teohly@gstgroup.com.my

  SAP Vendor (integration PIC)     Azib Iqbal          azibiqbal01@gmail.com

  Mindhive dev (SAP integration)   Jermaine            jermaine@mindhive.asia
  -------------------------------- ------------------- -------------------------

**Milestone Dates**

  ---------- ----------------------------------- --------------------------
  \#         Milestone                           Date

  1          Signed Date                         TBC

  2          Payment Date (upfront)              TBC

  3          Kickoff Date                        TBC

  4          Requirements Lock Date              TBC

  5          SAP UAT License Received            Expected Wed 25 Jun 2026

  6          Instance Deploy Date                TBC

  7          SAP Integration Complete            TBC

  8          Internal Test Date                  TBC

  9          UAT Date                            TBC

  10         Go-Live Date                        TBC

  11         Training Date                       TBC

  12         Customisations Date                 TBC
  ---------- ----------------------------------- --------------------------

**See Also**

\[\[SOW for MAIA GST Fine Foods\]\]

\[\[GST Fine Foods --- Requirement Gathering Questionnaire\]\]

\[\[Requirement Gathering Output - GST Fine Foods - 2026-05\]\]

\[\[GST SAP Vendor × Mindhive --- Meeting Notes\]\]

\[\[GST Meeting Transcripts\]\]

\[\[\[Guide\] Channel & Infrastructure Setup Guide Copy\]\]

\[\[Macrofood Phase 1 Timeline\]\]

\[\[Dalson Phase 1 Timeline\]\]

\|（注：部分内容可能由 AI 生成）

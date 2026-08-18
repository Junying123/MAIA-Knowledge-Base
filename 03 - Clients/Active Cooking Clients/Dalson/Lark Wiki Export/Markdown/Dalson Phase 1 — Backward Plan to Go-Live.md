**Dalson Phase 1 --- Backward Plan to Go-Live**

**owner: Gareth\
status: draft\
last_reviewed: 2026-07-01\
client: Dalson\
phase: 1\
lark_url: <https://eg69120xnei.sg.larksuite.com/wiki/WlrVwm24PilISckXZdDl0lyzgde>**

**End goal:** Core MAIA live + client trained by **Fri 24 Jul 2026**; hypercare through **1 Aug 2026**\
**Created:** 2026-06-21\
**Updated:** 2026-07-01 --- milestones rescheduled (M1--M7)\
**Channel:** Telegram (Meta/WhatsApp on hold --- business verification pending; Telegram confirmed with client)\
**Scope:** Core MAIA only --- Customer PO → SO → Invoice → DO; AutoCount 2-way sync; SKU matching; DO retrieval; Proof of delivery; New customer push; e-invoice readiness.\
**Model:** Same pattern as \[\[Macrofood Phase 1 Timeline\]\] --- internal test + live-fix session before client sees it; on-the-spot UAT during UAT session.

**Milestone Map**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------
  NOW ─── M0 Deps ─── M1 Deploy + Chatbot ─── M2 AutoCount + 2-way sync ─── M3 Internal Test ─── M4 UAT ─── M5 Go-Live + Sign-off ─── M6 Training ─── M7 Hypercare\
  Sat Sat--Mon Jul 1--3 Jul 3--7 Jul 8--10 Jul 14--17 Jul 18--20 Jul 22--24 Jul 30--Aug 1\
  Jun 21 Jun 21--23

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------- ---------------------- ------------------------------------------ ------------------ ----------------------------------------------------------------------------------------
  Phase                                   Date                   Status                                     Who                Goal

  M0 Deps + Kickoff                       Sat 21 -- Mon 23 Jun   Done                                       Gareth             Lock all remaining deps; confirm Telegram channel; chase AutoCount vendor

  M1 AWS Deploy + Telegram                Jul 1 -- 3             In progress                                Dev                MAIA instance live on AWS; Telegram chatbot connected and smoke-tested

  M2 AutoCount Integration + 2-way Sync   Jul 3 -- 7             Scheduled                                  Dev + PM           Customer/item master read; SO/Invoice/DO write; new customer push; 2-way sync verified

  M3 Internal Test + Core Features        Jul 8 -- 10            Scheduled                                  Gareth + Dev       Full Dalson workflow run-through live; fix on spot; all scope items green

  M4 UAT                                  Jul 14 -- 17           To schedule --- confirm date with client   PM + Dalson        Client runs UAT on spot; PM triages same session

  M5 Go-Live + Sign-off                   Jul 18 -- 20           To schedule                                PM + Dalson        Punch list cleared; live confirmed; sign-off obtained

  M6 Training                             Jul 22 -- 24           To schedule --- confirm date with client   PM + Dalson team   Full team trained on live system

  M7 Hypercare / Live Care                Jul 30 -- Aug 1        Planned                                    PM + Dev           Post-go-live monitoring; fast-response fixes
  --------------------------------------- ---------------------- ------------------------------------------ ------------------ ----------------------------------------------------------------------------------------

**⚠️ Critical Path --- AutoCount Integration (Azib)**

AutoCount credentials already received. Vendor (Ms Tan) dependency is cleared. **Hard go-live blocker is now Azib completing the integration build by Sat 28 Jun.**

  ----------------------------------------------------------------------------------------------------------------------------------------------------
  Azib builds AutoCount read + write + 2-way sync (Wed 25 -- Sat 28 Jun) → internal test session with Gareth (Sat 28 -- Mon 30 Jun) → UAT Tue 1 Jul.

  ----------------------------------------------------------------------------------------------------------------------------------------------------

If Azib\'s integration is not testable by **Sat 28 Jun**, internal test compresses and Jul 1 UAT is at risk --- flag immediately.

**UltraViewer access already received:**

  ----------------------------------- ---------------------------
  Credential                          Value

  UltraViewer ID                      100 763 541

  UltraViewer password                03935

  AutoCount ID                        admin

  AutoCount password                  admin

  AutoCount version                   2.2 (build 2.2.90)
  ----------------------------------- ---------------------------

**Channel note:** Telegram is the go-live channel --- confirmed with client. Meta/WhatsApp is not a blocker. WhatsApp can layer in post go-live once Meta business verification is resolved.

**M0 --- Dependencies + Kickoff (Sat 21 -- Mon 23 Jun)**

**Who:** Gareth\
**Goal:** Confirm every input that M1 and M2 depend on. Nothing downstream moves until these land.

**Already Done ✅**

~~AWS onboarding setup complete (MAIA config ready)~~

~~OpenAI API key set up~~

~~AutoCount vendor identified (Ms Tan --- contact details above)~~

~~UltraViewer + AutoCount admin credentials received~~

~~**AutoCount integration credentials received** --- Azib to proceed with build~~

~~Telegram confirmed as go-live channel (comms with client)~~

**Pending --- Not Yet Done**

**AWS deployment on Dalson\'s AWS** --- pending Wei Yon; gates M1

**Chase by Mon 23 Jun**

  ----------------------------------------------------------- -------------------------- ---------
  Dependency                                                  Blocks                     Status

  Dalson company user list (name, role, contact)              User seed (M2)             ⬜

  One sample of each document Dalson uses: SO, Invoice, DO    PDF template config (M2)   ⬜

  Customer master export from AutoCount (debtor list)         Data seed (M2)             ⬜

  Item / SKU master export from AutoCount                     Data seed (M2)             ⬜

  Confirm Telegram bot handle / name agreed with client       Chatbot (M1)               ⬜

  Confirm internal PIC from Dalson for UAT (name + contact)   UAT (Jul 1)                ⬜
  ----------------------------------------------------------- -------------------------- ---------

**M1 --- AWS Deploy + Telegram Chatbot (Jul 1 -- 3) --- In Progress**

**Who:** Wei Yon (Dev)\
**Goal:** MAIA instance live on Dalson\'s AWS; Telegram chatbot connected and responding.

**Wei Yon: deploy MAIA instance on Dalson\'s AWS** --- onboarding setup already done; pending deployment

Set up Telegram chatbot --- primary go-live channel

Connect chatbot to MAIA instance

Smoke-test basic message flow: send message → MAIA responds

Confirm instance + chatbot stable before M2 begins

  ----------------------------------------------------------------
  WhatsApp / Meta: not in scope for go-live. Do not block on it.

  ----------------------------------------------------------------

**M2 --- AutoCount Integration + 2-way Sync (Jul 3 -- 7) --- Scheduled**

**Who:** Azib (Dev) + PM\
**Goal:** Full AutoCount sync working. All read + write flows verified before internal test.

**Azib: AutoCount integration build complete + testable** --- Sat 28 Jun (hard target; gates M3)

Confirm integration method with Azib (API, SDK, or middleware via UltraViewer --- credentials already received)

Build + verify **AutoCount READ:**

Customer (debtor) master sync

Item / SKU master sync (incl. customer-specific descriptions where available)

Pricing sync (price list per customer or item)

Build + verify **AutoCount WRITE:**

Sales Order push to AutoCount

Invoice push to AutoCount (e-invoice fields included)

Delivery Order push to AutoCount

New customer creation push (with required e-invoice fields: company reg, tax ID)

Verify **2-way sync** --- MAIA write → AutoCount reflects; AutoCount update → MAIA reads back

Test all write flows on **cloned test DB first** --- never write to Dalson\'s live AutoCount until go-live

Confirm firewall / IP whitelist requirements with Ms Tan if needed (AutoCount cloud-hosted)

Seed Dalson company users into MAIA

Seed customer + item master data from AutoCount exports

Configure **SO / Invoice / DO PDF templates** from Dalson doc samples

**M3 --- Internal Test + Core Features (Jul 8 -- 10) --- Scheduled**

**Who:** Gareth + Dev\
**Duration:** \~2--3 hours (one session)\
**Format:** PM runs every scope item live on Dalson env; dev fixes on the spot during session. Anything not fixable in session → explicit defer decision logged. Nothing goes to client UAT with a known failure.

**Core workflow checklist --- run live**

  ------ ------------------------------------------------------------------------------ ------ --------- ----------- --------
  \#     Item                                                                           FE     Chatbot   AutoCount   Status

  1      Customer master synced from AutoCount (read)                                   ---    ---       ☐           ⬜

  2      Item / SKU master synced from AutoCount (read)                                 ---    ---       ☐           ⬜

  3      Pricing synced per customer from AutoCount (read)                              ---    ---       ☐           ⬜

  4      Forward customer PO (image/PDF) → MAIA reads and drafts SO                     ☐      ☐         ---         ⬜

  5      SKU ambiguity: MAIA surfaces closest match → coordinator confirms              ☐      ☐         ---         ⬜

  6      Duplicate order warning triggers on repeat submission                          ☐      ☐         ---         ⬜

  7      Sales Order created in MAIA + pushed to AutoCount (write)                      ☐      ☐         ☐           ⬜

  8      Invoice generated from SO + pushed to AutoCount (e-invoice fields populated)   ☐      ---       ☐           ⬜

  9      Delivery Order generated + stored against order record                         ☐      ---       ☐           ⬜

  10     DO retrieval: search by customer / date / order number → PDF generated         ☐      ☐         ---         ⬜

  11     Proof of delivery: driver sends photo via chatbot → attached to order DO       ☐      ☐         ---         ⬜

  12     New customer creation → push to AutoCount (with e-invoice required fields)     ☐      ☐         ☐           ⬜

  13     Credit note issued from invoice ID → linked to source invoice in MAIA          ☐      ---       ☐           ⬜

  14     2-way sync verified: MAIA write → AutoCount reflects                           ---    ---       ☐           ⬜

  15     Daily digest surfaces pending orders / invoices / delivery follow-ups          ☐      ---       ---         ⬜

  16     SO / Invoice / DO PDF renders correctly with Dalson formatting                 ☐      ---       ---         ⬜
  ------ ------------------------------------------------------------------------------ ------ --------- ----------- --------

End of session: green items locked; deferred items explicitly logged with decision

**Items NOT to test in M3 (out of scope, do not creep in)**

Pick list / packing list --- Dalson does not use this

Receipts --- not required by default; add post go-live if requested

Supplier / procurement logic --- explicitly out of scope

WhatsApp / Meta channel --- not a go-live dependency

**M4 --- UAT (Jul 14 -- 17) --- To Schedule (confirm date with client)**

**Who:** PM + Dalson UAT users\
**Format:** PM briefs scope → Dalson team runs UAT on the spot → PM triages same session.

Brief client: what\'s in scope vs deferred; what\'s new vs old

Dalson team runs core workflow live on MAIA env:

Forward a PO → SO created → Invoice → DO

SKU ambiguity scenario --- MAIA suggests match, user confirms

DO retrieval --- search and retrieve an old DO

Proof of delivery --- driver photo attached

New customer creation flow

Daily digest view

PM on standby; log issues and triage same session

Minor issues: fix same day or before M5

Sign-off criteria agreed before session starts

Collect UAT results → conditional sign-off or punch list

**M5 --- Go-Live + Sign-off (Jul 20 -- 22) --- To Schedule**

**Who:** PM + Dalson\
**Goal:** UAT punch list cleared → confirm live → sign-off.

All UAT punch list items resolved

Instance stable (no regressions from UAT fixes)

Telegram chatbot live on production --- Dalson team using it

All Dalson users confirmed active in MAIA

AutoCount sync live on production (not test DB)

Sign-off obtained --- 70% payment milestone triggered

Go-live confirmed --- Dalson team begins live operations

**M6 --- Training (Jul 22 -- 27) --- To Schedule (confirm date with client)**

**Who:** PM + full Dalson team (sales coordinators + any warehouse / delivery staff using chatbot)\
**Format:** Full structured session; cover end-to-end live workflow.

Prep training material (slides / walkthrough based on UAT scenarios)

Demo environment with clean data ready

Train: full order flow --- forward PO → SO → Invoice → DO via Telegram

Train: SKU matching --- what MAIA suggests, how to confirm or override

Train: DO retrieval --- how to search and pull old DOs

Train: proof of delivery --- driver sends photo → how it attaches

Train: new customer --- how to add via MAIA + AutoCount push

Train: daily digest --- what it shows, how to act on it

Cover: how to flag issues post go-live; escalation contact

WhatsApp path: inform client Meta verification is in progress; WhatsApp will layer in once resolved --- no action needed from client

**M7 --- Hypercare / Live Care (Jul 30 -- Aug 1)**

**Who:** PM + Dev\
**Goal:** Close monitoring post go-live; fast turnaround on any live issues.

Daily check-in with Dalson team on live usage

Monitor AutoCount sync for errors on production

Fast-track fixes for any issues surfaced post-training

Close out hypercare with a final stability check + handover to BAU support

**Scope at Go-Live (What Dalson Gets)**

  ---------------------------------------------------------------- -------------
  Feature                                                          Status

  Telegram chatbot order intake (PO, text, image)                  ✅ In scope

  SKU ambiguity matching with coordinator confirmation             ✅ In scope

  Sales Order creation + AutoCount push                            ✅ In scope

  Invoice generation + e-invoice readiness + AutoCount push        ✅ In scope

  Delivery Order generation, retrieval, PDF                        ✅ In scope

  Proof of delivery photo capture (chatbot → order record)         ✅ In scope

  New customer creation → AutoCount push (with e-invoice fields)   ✅ In scope

  Credit notes (invoice-linked) + AutoCount push                   ✅ In scope

  Daily digest + pending task visibility                           ✅ In scope

  Duplicate order warning guardrail                                ✅ In scope

  AutoCount 2-way sync (read master data; write transactions)      ✅ In scope
  ---------------------------------------------------------------- -------------

**NOT in Go-Live Scope (Do Not Creep In)**

**WhatsApp / Meta channel** --- Meta verification pending; layer in post go-live

**Pick list / packing list** --- Dalson does not use this in their workflow

**Receipts** --- not standard; activate post go-live if customer requests

**Supplier / procurement logic** --- explicitly out of scope per signed proposal

**Advanced management dashboards / custom reports** --- post go-live

**Historical DO migration** --- DOs before go-live date not auto-migrated; retrieve from AutoCount directly if needed

**LHDN e-invoice direct submission** --- handled by AutoCount; MAIA prepares and pushes only

**Key Contacts**

  --------------------------------- --------------------------- ----------------------------------------------
  Role                              Name                        Contact

  AutoCount vendor / system owner   Ms Tan                      +60192392686 / easysoftprosolution@gmail.com

  AutoCount version                 2.2 (cloud, build 2.2.90)   Hosted on vendor server

  UltraViewer remote access         ---                         ID: 100 763 541 / PW: 03935

  AutoCount login                   ---                         admin / admin

  Dalson UAT PIC                    TBC                         Chase in M0
  --------------------------------- --------------------------- ----------------------------------------------

**Milestone Dates**

  ------ ------------------------------------ -------------------------- -------------------------------------
  \#     Milestone                            Date                       Status

  ---    Signed Date                          TBC                        ---

  ---    Payment Date (30% upfront)           TBC                        ---

  ---    Kickoff Date                         2026-06-21                 Done

  M0     Deps + Kickoff                       2026-06-21 -- 2026-06-23   Done

  M1     AWS Deploy + Telegram                2026-07-01 -- 2026-07-03   In progress

  M2     AutoCount Integration + 2-way Sync   2026-07-03 -- 2026-07-07   Scheduled

  M3     Internal Test + Core Features        2026-07-08 -- 2026-07-10   Scheduled

  M4     UAT                                  2026-07-14 -- 2026-07-17   To schedule --- confirm with client

  M5     Go-Live + Sign-off                   2026-07-18 -- 2026-07-20   To schedule

  M6     Training                             2026-07-22 -- 2026-07-24   To schedule --- confirm with client

  M7     Hypercare / Live Care                2026-07-30 -- 2026-08-01   Planned
  ------ ------------------------------------ -------------------------- -------------------------------------

**See Also**

\[\[Dalson MAIA autocount integration\]\]

\[\[Dalson Industrial Supplies Customer Narrative Document\]\]

\[\[Macrofood Phase 1 Timeline\]\]

\[\[Fixguru 2nd UAT Backward Plan\]\]

\|（注：部分内容可能由 AI 生成）

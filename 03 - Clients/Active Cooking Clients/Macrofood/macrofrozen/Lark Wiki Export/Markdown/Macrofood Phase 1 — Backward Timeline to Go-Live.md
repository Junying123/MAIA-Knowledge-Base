**Macrofood Phase 1 --- Backward Timeline to Go-Live**

**End goal:** Sales module live + client trained --- originally Fri 26 Jun, slipped twice, now Tue 7 Jul 2026. Core go-live target: end of July / early August.\
**Created:** 2026-06-18 \| **Updated:** 2026-07-06\
**Scope:** Sales module only --- confirmed pick list → SO → DN → push to SQL. Invoice/CN, AR recon, credit control deferred (see end).\
**Model:** Structured on the Fixguru 2nd UAT Backward Plan --- internal-test-with-live-dev-fix before the client sees it, then on-the-spot UAT during training.

**Slip Log**

  --------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Date            Change

  2026-06-18      Original plan: go-live 26 Jun

  \~2026-06-26    Training pushed off Friday (per 2026-07-01 weekly update)

  2026-07-01      Training rescheduled to Tue 7 Jul

  2026-07-02/03   M1 + M2 complete --- instance, Telegram chatbot, SQL sync all live

  2026-07-06      M3 in progress (this week, continue testing); M5 sequence flipped --- training first (7 Jul), UAT after --- UAT scope now mainly covers customised features (see Customisation Timeline below)
  --------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Open client action: confirm Meta Business verification status (WhatsApp channel) --- Telegram fallback already deployed and live.

**Milestone Map**

M0 Deps + Kickoff (Jun 18-19) → M1 Instance + Chatbot (Jun 19-22) → M2 SQL + Data Seed (Jun 22-24) → M3 Internal Test + Live Fix (Jun 24) → M4 Stability + UAT Prep (Jun 25) → M5 Training + UAT + GO-LIVE (originally Jun 26, now Jul 7 training / UAT + go-live end of Jul-early Aug)

  ----------------------------- --------------------------------------------------------------- -------------------- ---------------------------------------------------
  Phase                         Date                                                            Who                  Goal

  M0 Deps + Kickoff             Thu 18--Fri 19 Jun                                              Gareth + Macrofood   Vendor form out; chase all client deps

  M1 Instance + Chatbot         ✅ Complete 2-3 Jul                                             Dev                  Deploy on client AWS; chatbot live

  M2 SQL + Data Seed            ✅ Complete 2-3 Jul                                             Dev + PM             SQL sync working; master data seeded; PDF config

  M3 Internal Test + Live Fix   🟡 In progress (this week)                                      Gareth + Dev         Test full scope live; fix on spot

  M4 Stability + UAT Prep       Rolled into M5 prep                                             PM                   Stable; UAT form + training ready; client briefed

  M5 Training + UAT + Go-live   Training Tue 7 Jul; UAT after; go-live end of Jul / early Aug   PM + Macrofood       Train, UAT (post-training), sign-off, go-live
  ----------------------------- --------------------------------------------------------------- -------------------- ---------------------------------------------------

**Critical path --- SQL vendor (M0 → M2 → M3)**

SQL sync was the hard go-live blocker gated on Macrofood\'s SQL vendor (Mr. Chua, +60 12 212 2126). Vendor delivered; M1 + M2 now complete as of 2-3 Jul.

**M0 --- Dependencies & Kickoff (Thu 18 -- Fri 19 Jun)**

**Who:** Gareth + Macrofood

~~SQL integration form sent to vendor (Mr. Chua) --- 18 Jun~~

~~Client grants AWS account access~~

~~Client shares OpenAI account + API key~~

~~Client finalizes pick-list workflow~~

~~Client sends doc samples (SO, DN) for PDF templates~~

Client sends company user list

~~Confirm customer + item master data scope~~

**M1 --- Instance + Chatbot Setup --- COMPLETE (2026-07-02/03)**

**Who:** Dev

~~Deploy MAIA instance on client\'s AWS~~

~~Set up chatbot --- Telegram deployed and live; WhatsApp still pending on client side (Meta Business verification)~~

~~Connect chatbot to instance; smoke-test basic message flow~~

  ---------------------------------------------------------------------------------------------------------------------------
  Channel: Telegram is live now, not just a fallback. WhatsApp switches over once client clears Meta Business verification.

  ---------------------------------------------------------------------------------------------------------------------------

**M2 --- SQL Integration + Data Seed --- COMPLETE (2026-07-02/03)**

**Who:** Dev + PM

~~Vendor returned API credentials + cloned test DB~~

~~Build + verify SQL sync --- customer/item master read, SO/DN write~~

~~Test all write endpoints on cloned test DB (port 8016, firewall/IP whitelist confirmed)~~

~~Seed company users + customer/item master data~~

~~Configure SO / DN PDF templates from client samples~~

**M3 --- Internal Test + Live Dev-Fix Session --- IN PROGRESS (this week)**

**Who:** Gareth + Dev\
**Status:** Testing continues this week, in parallel with M5 training (sequence flipped --- training runs first, M3 fixes feed into post-training UAT).

**Go-live scope checklist (run live)**

  ----------- ---------------------------------------------------------- --------------
  \#          Item                                                       Status

  1           Customer master synced from SQL (read)                     ⬜

  2           Item/SKU master synced from SQL (read)                     ⬜

  3           Upload confirmed pick list → MAIA                          ⬜

  4           Create SO from confirmed figures                           ⬜

  5           Generate Delivery Note (DN)                                ⬜

  6           Push SO / DN → SQL (write)                                 ⬜

  7           Pricing enforcement (wholesale/retail/customer-specific)   ⬜

  8           SO / DN PDF renders correctly                              ⬜
  ----------- ---------------------------------------------------------- --------------

**M5 --- Training (Tue 7 Jul) → UAT after (sequence flipped)**

**Who:** PM + Macrofood testers\
**Format:** Training runs first. UAT no longer same-session on-the-spot --- it now sits after training and mainly covers the 3 customised features below (see Customisation Timeline). Core sales flow (pick list → SO → DN → SQL) already validated in M3.

~~Channel for training: Telegram (live) --- WhatsApp pending client\'s Meta Business verification~~

Brief: what\'s in scope (pick list → SO → DN → SQL)

Training Slide prep

Demo instance setup ready

Run training session --- 7 Jul

UAT (post-training) --- mainly customised features, dates TBC below

Sign-off (or conditional sign-off + punch list) → go-live (target: end of July / early Aug)

**Customisation Timeline --- 3 Features (dates TBC)**

Scope moved out of core Phase 1, now tracked separately. Sequence: A → B → C.

  ------ --------------------------------------- --------- ------------------------ ----------
  \#     Feature                                 QA Date   Internal Showcase Date   UAT Date

  A      Bulk Item Price Update                  TBC       TBC                      TBC

  B      Slow-moving / Near-expiry Stock Alert   TBC       TBC                      TBC

  C      AR (Reconciliation)                     TBC       TBC                      TBC
  ------ --------------------------------------- --------- ------------------------ ----------

QA Date --- tech ships to product team, product QA starts

Internal Showcase Date --- product team demos feature internally before client sees it

UAT Date --- client tests the feature live

Target: all 3 features through UAT and go-live-ready by end of July / early August.

**NOT in Phase 1 scope**

Invoice, Credit Note → after core sales go-live

AR Reconciliation, Bulk Price Update, Product Catalog, Credit limit control → deployed separately after core go-live (now tracked in Customisation Timeline above)

AP (supplier) reconciliation, Delivery trip management, Warehouse barcode/QR (WMS), Batch tracking, Inventory aging alerts → future phase

**Milestone Dates**

  -------- ---------------------------- -------------------------------------
  \#       Milestone                    Date

  1        Signed Date                  2026-05-15

  2        Payment Date (50% upfront)   2026-05-20

  3        Kickoff Date                 2026-06-18

  4        Requirements Lock Date       2026-06-04

  5        M1+M2 Complete               2026-07-02/03

  6        Training Date                2026-07-07

  7        UAT Date                     TBC (post-training)

  8        Go-Live Date                 TBC (target end of Jul / early Aug)

  9        Customisations Date          TBC (see Customisation Timeline)
  -------- ---------------------------- -------------------------------------

\|（注：部分内容可能由 AI 生成）

**Macro Frozen --- End-user & Process Map (Lens 3)**

**owner: Gareth\
status: draft\
last_reviewed: 2026-07-27**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  The map half of Lens 3 (Product Onboarding SOP, M3 → feeds M6 config / M9 training).\
  Answers *\"who uses MAIA, and how --- step by step?\"* Pairs with the UAT Checklist.\
  **Rerun 2026-07-27** --- superseded v1 (2026-07-12) was built when most roles were\
  NEEDS CLIENT INPUT. Scope Lock v2 (2026-07-27) and its two client-facing build\
  docs --- 20Jul26 - Macrofrozen Before vs After MAIA and 23Jul26 - Macro FrozenEnhancement (both Lark) --- name every role directly and close almost every\
  identity gap from v1. Sources: Scope Lock v2, VoC Extraction (incl. 17 Jul\
  training signals VOC-037--060), 20Jul26 and 23Jul26 Lark docs, Maya Training\
  --- Identified Gaps Report.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------

**Quick Reference --- E2E Flow & User Needs**

  -------------------------------------------------------------------------------------------------
  1\. Customer → salesperson (Queenie/Ben/CJ)\
  2. Salesperson forwards order → MAIA WhatsApp chat\
  3. MAIA drafts SO\
  4. Salesperson reviews/corrects/submits (no admin relay --- AS-04 superseded)\
  5. Price check (3-tier):\
  at/above approved price → auto-proceed\
  below customer/default,\
  above minimum → CJ approves\
  below minimum → David approves\
  6. Credit check → MAIA blocks if over limit/overdue → David overrides\
  7. Lai (Warehouse Mgr) groups SOs → Pick Lists (by route/driver/area/date), every morning\
  8. Warehouse workers pick/pack:\
  - actual kg\
  - box count\
  - kg per box\
  - replacement SKU (if unavailable)\
  9. Lai uploads confirmed Pick List → MAIA\
  10. MAIA auto-prepares amended SO (no manual retype)\
  11. Grace reviews amended SO → submits\
  12. Grace explicitly requests Invoice + DN (NOT automatic)\
  13. CK (3rd-party driver) delivers, gets signature\
  14. CK → Grace: signed POD → Grace uploads to MAIA\
  ⚠ POD feature itself BLOCKED --- Grace rejects driver-direct-upload design\
  15. Customer sends payment proof → Grace verifies bank → submits receipt → invoice knocked off\
  16. David monitors full pipeline via dashboard (salesperson-filterable)

  -------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------
  David (Owner)\
  needs: top-tier price approval, credit override, full visibility,\
  dashboard monitoring, catalogue creation tool\
  cannot: ---\
  \
  CJ (Sales Manager)\
  needs: mid-tier price approval, set credit limit at customer creation,\
  team-wide sales visibility\
  cannot: approve below-minimum price\
  \
  Queenie / Ben (Sales Reps)\
  needs: forward order → MAIA, review/correct draft, submit own SO,\
  own-customer visibility only\
  cannot: see other reps\' customers, edit credit terms, self-approve pricing\
  \
  Apple (Finance)\
  needs: set/maintain credit limits + terms (config-time role, not in live flow)\
  cannot: blanket admin parity with David (corrected 2026-07-20)\
  \
  Grace (Accounts / Finance Mgr)\
  needs: review+submit amended SO, explicit Invoice/DN generation trigger,\
  POD upload, payment verification, knock-off\
  cannot: auto-generate docs w/o explicit ask; auto-post unclear payer\
  blocker: rejects driver-direct POD upload (NS-07)\
  \
  Lai (Warehouse Manager)\
  needs: morning SO review, Pick List grouping/print, quantity+SKU\
  confirmation, upload back to MAIA\
  cannot: see cost/margin/financial data\
  gap: no backup defined (NS-10)\
  \
  Warehouse workers\
  needs: simple non-phone picking flow (can\'t use phones/system directly)\
  cannot: see cost/margin/credit/pricing data\
  gap: access model undecided (NS-11)\
  \
  CK (Driver, 3rd-party)\
  needs: route, address, DN, delivery instructions\
  cannot: see cost/credit/financial data\
  gap: unclear if CK ever touches MAIA directly

  ---------------------------------------------------------------------------------

**6 open gaps for sign-off:** UAT signatory · NS-07 POD conflict · backup coverage · warehouse device model · SKU-replacement approval routing · CK\'s actual MAIA role. (Full detail in §6 below.)

**1. Actor & Role Register**

  ------------------------------------- ---------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------ ------------------------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------
  Actor                                 MAIA role                    Authority                                                                                                                                          Contacted?                                                   UAT signatory?                                         What they do in MAIA                                                                                                                                                                                                                                                                           Confidence

  **David** (Chong / Choy Kien Yang)    Owner / Management           MD, price controller (below-minimum tier), credit override authority, oversees full operation                                                      YES                                                          **Likely, still not formally named** --- #1 open gap   Approves prices below minimum; approves credit-limit overrides; monitors all sales/warehouse/delivery/finance activity; makes the product catalogue himself (ChatGPT)                                                                                                                          CONFIRMED --- named directly, 20Jul26 doc §6.1

  **CJ** (Tan)                          Sales Manager                Mid-tier price approver; sets customer credit limit at customer creation                                                                           YES                                                          UNKNOWN                                                Approves prices below customer/default price but above minimum (submits or rejects the SO); oversees sales team; reviews pricing exceptions                                                                                                                                                    CONFIRMED --- 20Jul26 doc §6.2, Scope Lock SL-03/SL-08

  **Queenie**, **Ben**                  Sales Rep                    Daily sales users, each with own customer book (SQL Agent field)                                                                                   YES                                                          UNKNOWN                                                Forwards customer order to MAIA WhatsApp chat; reviews/corrects MAIA\'s draft SO; submits SO directly (no admin relay --- AS-04 v2); manages own leads/prospects/customers only; uploads customer payment proof                                                                                CONFIRMED --- named + spelling-corrected 2026-07-15 (was \"Aben/Quinny\"), 20Jul26 doc §6.3, VOC-032

  **Apple**                             Finance                      Sets customer credit limits, maintains finance-related customer settings --- **narrower than \"Admin parity with David\"**, corrected 2026-07-20   YES                                                          UNKNOWN                                                Manages credit limits, credit terms, credit-control settings                                                                                                                                                                                                                                   CONFIRMED --- role corrected in Scope Lock v2 SL-04, 20Jul26 doc §6.4

  **Grace**                             Accounts / Finance Manager   Final control point before Invoice/DN generation and before payment knock-off                                                                      YES --- direct source for most of the VoC\'s newer signals   **Possibly, alongside David --- not formally named**   Reviews MAIA-prepared amended SO after warehouse confirms pick list; submits amended SO; **explicitly requests** Invoice + DN generation (not automatic --- SL-07); reviews and submits financial documents; uploads POD; confirms bank receipt; submits payment receipt; knocks off invoice   CONFIRMED --- 20Jul26 doc §6.5, VoC Phase 0/2 (VOC-030 to 036)

  **Lai** (Ah Lai)                      Warehouse Manager            Groups SOs into pick lists; confirms quantities; no defined backup (NS-10 gap)                                                                     YES                                                          No                                                     Every morning reviews available SOs, groups into Pick Lists (by route/driver/area/date); prints Pick List; assigns warehouse workers; reviews completed picking; confirms actual kg, boxes, kg/box, replacement SKU; uploads completed Pick List to MAIA                                       CONFIRMED --- 20Jul26 doc §6.6; formerly \"Warehouse picker, THIN 2nd-hand\" in v1 --- now named directly

  Warehouse workers (foreign workers)   Logistics / Warehouse        Physical picking/packing only                                                                                                                      PARTIAL --- described by Lai/David, not heard directly       No                                                     Pick and pack per Pick List; record actual quantity/boxes/kg-per-box; flag SKU unavailability to Lai; **cannot** use MAIA directly --- no convenient phone/system access (VOC-041)                                                                                                             THIN --- still second-hand; access model open (NS-11)

  **CK** (3rd-party)                    Driver / external agent      Not staff --- has own SQL Agent code for 3 customers, commission-tracking only, excluded from normal sales-territory logic                         Indirect --- named in SQL data, not interviewed              No                                                     Delivers goods on assigned route; obtains signature; returns signed POD to Accounts (Grace uploads --- driver does **not** upload directly, per SL-06/NS-07 mechanism note)                                                                                                                    CONFIRMED identity (SL-08); role-in-MAIA still **NEEDS CLIENT INPUT** --- POD flow itself is BLOCKED (NS-07 conflict)

  Ms Tan-equivalent --- SQL vendor      External                     Integration dependency, not a MAIA user                                                                                                            ---                                                          N/A                                                    Grants SQL API/integration access (DEP-1, still OPEN, live go-live blocker)                                                                                                                                                                                                                    ---

  Krystle, Applle (setup-era)           Admin / setup coordination   Non-operational, setup-phase only                                                                                                                  YES                                                          No                                                     Training logistics, AWS/OTP setup handshake --- not part of the live order-to-cash flow                                                                                                                                                                                                        Legacy from v1, retained for continuity only
  ------------------------------------- ---------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------ ------------------------------------------------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------

**Checkpoint --- headcount resolved.** v1 had 8 of 8 operational roles as NEEDS CLIENT INPUT except David/CJ. v2 closes 6 of those: Apple, Grace, Lai, Queenie, Ben are now named with full role descriptions; CK is identified as the driver-equivalent but his actual MAIA touchpoints remain open pending the NS-07 POD decision.

**#1 gap --- UAT signatory still not formally named.** David remains the most likely signatory (per DEP-2), but no written confirmation exists. Grace is a plausible co-signatory given her operational centrality --- raise both at sign-off.

**2. Order-Intake Map**

  ------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Aspect                                                        Reality (v2)

  Channel                                                       **MAIA WhatsApp chat** --- a dedicated MAIA number, distinct from the internal company WhatsApp group used today

  Number                                                        **One** MAIA WhatsApp number (SL-06) --- no multi-inbox

  Who forwards                                                  The **salesperson** who owns the customer (Queenie/Ben/CJ) forwards the customer\'s order directly into the MAIA chat

  Who submits                                                   **The same salesperson** reviews MAIA\'s draft SO and submits it themselves --- **no office-admin relay step** (AS-04 superseded 2026-07-27; the earlier \"query-only, admin enters\" design from v1 is stale and should not be built)

  Language / ambiguity                                          Chinese-heavy, mixed English/Malay/Mandarin item names; MAIA\'s item-matching resolves or surfaces for manual selection (VOC-002, assumed Base MAIA)

  Units                                                         Order may be entered as **box / pieces / carton / kilogram** --- warehouse always confirms in kilograms, but separately captures kg-per-box and box count

  **Weight-variance entry convention (confirmed 2026-07-27)**   Two distinct cases: **(1) ordered in kg** --- SO qty = ordered kg (e.g. 20kg), small variance expected at pick (e.g. 19.71kg actual), amended at pick-list-upload step. **(2) ordered in carton** --- customer doesn\'t specify kg; SO qty is entered as a **placeholder 1kg**, carton count goes in **Additional Notes** (e.g. \"2 cartons\"); true qty = sum of each carton\'s actual picked weight (e.g. 10.44kg + 11.82kg = 22.26kg), only known after Lai uploads the confirmed Pick List. MAIA\'s amendment step must fully **replace** the placeholder, not treat it as a real 1kg order with a variance.

  **Must-NOT**                                                  An order draft is never auto-submitted --- the salesperson must review and explicitly submit; MAIA must not push to SQL before that. **Also must-NOT:** treat a carton-order\'s placeholder 1kg as a genuine committed quantity anywhere downstream (credit check, dashboard, reporting) before the pick list confirms it.
  ------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**3. Document Flow**

  ------------------------------------ --------------------------------------------- --------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Document                             Generated by                                  Trigger                                                               SQL constraint

  **Sales Order (SO)** --- draft       MAIA, from forwarded WhatsApp order           Salesperson forwards order                                            Not pushed to SQL until salesperson submits

  **Sales Order (SO)** --- submitted   Salesperson (own customers)                   Salesperson reviews/corrects, submits                                 Routes through SL-03 tiered price approval + SL-04 credit check before proceeding

  **Pick List**                        Lai (Warehouse Manager), from grouped SOs     Every morning, SOs available for picking                              Grouped by route/driver/area/date; carries customer name + SO notes (post-23Jul fix)

  **Sales Order --- amended**          MAIA, from Lai\'s confirmed Pick List         Warehouse confirms actual kg / boxes / kg-per-box / replacement SKU   Grace reviews and submits --- MAIA does not auto-submit the amendment

  **Delivery Note (DN) / Invoice**     MAIA, **only on Grace\'s explicit request**   Grace asks MAIA to generate, after submitting the amended SO          **Not automatic** on SO-amendment submission (SL-07) --- this is a deliberate control point, not a lag; MAIA should flag Grace if a submitted amendment has no DN/Invoice request yet

  **Credit Note**                      ---                                           Return/correction                                                     **NOT YET BUILT** (AS-03 --- design finalized as SCN/CCN split, but flagged next-round priority per 16/17 Jul training, Gap #10). Do not treat as available.

  **Pro Forma Invoice**                Sales (MAIA)                                  Financier / deposit requirement (\~30% deposit use case)              Exists in product (NS-04, resolved)

  **Payment receipt**                  Grace (MAIA, draft)                           Customer submits payment proof, Sales/Accounts uploads                Grace verifies bank receipt before submitting; knocks off Invoice, updates outstanding + available credit
  ------------------------------------ --------------------------------------------- --------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Stock-timing rule (confirmed 2026-07-27, SL-07):** stock in SQL only moves at **Invoice or SCN issuance** --- not at SO submission, DO generation, or pick-list confirmation. MAIA must not show a stock deduction before the Invoice actually posts.

**Boundary:** MAIA is the operational layer; **SQL stays master** for customer, item, stock, and payment records.

**4. Step-by-Step Process Map (the spine)**

Confirmed end-to-end flow (Scope Lock v2 + 20Jul26 Before/After doc, superseding v1\'s flow):

Customer sends order to salesperson (Queenie, Ben, or CJ). *\[Customer → Sales\]*

Salesperson **forwards the order to the MAIA WhatsApp chat**. *\[Sales · WhatsApp\]*

MAIA interprets the message and prepares a **draft Sales Order** (customer, product, SKU, qty, unit, price, notes). *\[MAIA\]*

Salesperson **reviews, corrects, and submits** the SO themselves --- no admin relay. *\[Sales\]*

MAIA checks price against the **3-tier ladder**: at/above approved price → proceeds automatically; below customer/default but above minimum → **CJ approves**; below minimum → **David approves**. *\[MAIA → CJ/David as needed\]*

MAIA checks **credit**: outstanding balance, credit limit, overdue status, \"previous invoice cleared\" rule. Blocked orders route to David for override. *\[MAIA → David\]*

Every morning, **Lai** reviews available SOs and groups them into **Pick Lists** by route/driver/area/date. *\[Lai\]*

Warehouse workers **pick and pack**, recording actual kg, box count, kg-per-box, and any replacement SKU (SKU substitution flow --- AS-10). *\[Warehouse workers → Lai\]*

Lai checks the completed work, photographs the completed Pick List, and **uploads it to MAIA**. *\[Lai\]*

MAIA prepares the **amended Sales Order** using the warehouse-confirmed data --- Grace does not need to retype anything. *\[MAIA\]*

**Grace reviews** the amendment (original vs final SKU/qty/boxes/kg-per-box/price/credit status) and **submits** it. *\[Grace\]*

Grace **explicitly asks MAIA to generate** the Invoice and Delivery Note --- this is not automatic. *\[Grace → MAIA\]*

Warehouse prints the DN; **CK** (driver) delivers per the assigned route. *\[Lai/Warehouse → CK\]*

Customer signs; CK returns the signed document to **Accounts**, who uploads the POD to MAIA (driver does not upload directly --- mechanism confirmed 2026-07-27, but the feature itself remains **BLOCKED** pending David\'s NS-07 decision). *\[CK → Grace/Accounts\]*

Customer submits payment proof → Sales/Accounts uploads → MAIA drafts a payment receipt → **Grace verifies the bank** → Grace submits → **Invoice knocked off**, outstanding/available-credit updated. *\[Grace\]*

**David monitors** the full pipeline via dashboard (now filterable per-salesperson, NS-14) and handles exceptions/overrides. *\[David\]*

**Per-role swimlane**

  -------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------
  Role                                   Across the flow

  **Queenie / Ben (Sales Reps)**         Steps 1--4 --- forward order, review/correct/submit SO, own-customer-only visibility (SL-05); may upload customer payment proof

  **CJ (Sales Manager)**                 Step 5 (mid-tier price approval), oversight of sales team, sets credit limit at customer creation (SL-08)

  **David (Owner)**                      Steps 5--6 (top-tier price approval, credit override), step 16 (monitoring, exceptions) --- no longer the order-consolidation bottleneck

  **Lai (Warehouse Manager)**            Steps 7--9 --- groups SOs, prints/distributes Pick Lists, confirms quantities/SKU replacements, uploads. No defined backup (NS-10).

  **Warehouse workers**                  Step 8 --- physical pick/pack, cannot access MAIA directly (NS-11 open)

  **Apple (Finance)**                    Sets/maintains credit limits and terms (not in the live order flow --- a config-time role)

  **Grace (Accounts/Finance Manager)**   Steps 11--12, 14--15 --- the final control point for SO amendment, document generation request, POD upload, payment verification and knock-off

  **CK (Driver, 3rd-party)**             Step 13--14 --- delivers, obtains signature, returns POD to Accounts (does not touch MAIA himself under the current mechanism note)
  -------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------

**5. Permission Matrix**

  -------------------------------------- ------------------------------------------------------------------------- ----------------------------------------------------------- --------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------
  Role                                   Can create                                                                Can approve                                                 Can view                                                                                                  Cannot do

  **Sales Rep (Queenie/Ben)**            Leads, prospects, draft/submitted SO, convert lead→customer               ---                                                         **Own leads/prospects/customers/SOs only**                                                                Create a customer directly from a raw record; view another rep\'s customers; edit credit terms/limits; bypass or self-approve pricing exceptions

  **CJ (Sales Manager)**                 Same as reps, plus sets credit limit at customer creation                 SO price approval (below customer/default, above minimum)   All sales reps\' leads/prospects/customers/SOs, pending approvals                                         Approve a price below the minimum (David-only)

  **David (Owner)**                      All                                                                       SO price approval (below minimum), credit-limit override    **All** --- leads, prospects, customers, SOs, approvals, warehouse/delivery/financial status              (governs the rest)

  **Apple (Finance)**                    Credit limits, credit terms, credit-control settings                      ---                                                         Finance-related customer configuration                                                                    Blanket Admin parity with David --- role is Finance-specific only

  **Grace (Accounts/Finance Manager)**   Amended-SO submission, Invoice/DN generation requests, payment receipts   Invoice knock-off                                           Warehouse-confirmed quantities, SO amendments, AR / outstanding                                           Auto-generate Invoice/DN without explicit request; auto-post an unclear payer

  **Lai (Warehouse Manager)**            Pick Lists (grouping), quantity/kg-per-box/replacement-SKU confirmation   ---                                                         SOs needing picking, product info for picking, customer names, SO notes, delivery info                    View product cost/margin, sensitive customer financial data, accounting records unrelated to warehouse work

  **Warehouse workers**                  --- (execute only)                                                        ---                                                         Customer name, SKU, product description, sales notes, ordered qty, packing instructions, route grouping   View cost/margin/credit/financial/pricing-approval data

  **CK (Driver)**                        ---                                                                       ---                                                         Delivery route, customer address/contact, DN, delivery instructions                                       View cost, credit limit, pricing approvals, internal financial data
  -------------------------------------- ------------------------------------------------------------------------- ----------------------------------------------------------- --------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------

Grounded in Scope Lock SL-03/SL-04/SL-05/SL-08 and the 20Jul26 doc\'s per-person permission tables. **Full matrix confidence is MED** --- Scope Lock v2 itself notes the access matrix is still pending a full training re-walk with all managers present.

**6. Gaps & Sign-off Agenda**

Six real gaps remain --- down from v1\'s near-total identity gap, but these need David/Grace directly before Gate-2:

**UAT signatory** --- David is the likely signatory (DEP-2), still not formally confirmed in writing; consider whether Grace co-signs given her operational centrality.

**NS-07 POD --- BLOCKED, client conflict.** Grace explicitly rejects photo-upload-to-Maya. The mechanism note (Accounts uploads, not driver) only refines a design she has already rejected in principle. Needs David\'s explicit decision: build a lighter version, or drop \"mark as delivered\" entirely.

**NS-10 backup coverage** --- no process exists for when Lai (warehouse) or Grace/Finance is absent. Real operational gap, not a config question --- David must assign backups.

**NS-11 warehouse Maya access model** --- individual logins per picker vs one shared device for warehouse workers (who cannot conveniently use phones --- VOC-041). Affects how step 8/9 actually runs.

**AS-10 SKU-replacement approval routing** --- who approves a mid-pick SKU substitution (Sales, CJ, David, Grace, or the customer)? Not yet defined; recommend resolving before AS-01/pick-list UAT.

**CK\'s actual MAIA touchpoint** --- identified as the driver by SQL Agent code, but with POD blocked (gap #2), it\'s unclear whether CK will ever interact with MAIA directly, or remain entirely outside it.

Closed since v1: sales-coordinator identity (Queenie/Ben/CJ), finance identity (Apple), warehouse identity (Lai), account identity (Grace) --- all now named with full role/permission detail.

**See Also**

\[\[Macrofood --- Scope Lock v2\]\] --- spine, rerun 2026-07-27

\[\[Macrofood --- VoC Extraction\]\] --- VOC-037 through VOC-060 (17 Jul training) ground most of this rerun

\[\[Macrofood --- UAT Checklist\]\] --- the other half of Lens 3 (not yet rerun against Scope Lock v2 --- check for drift)

\[\[Macrofood --- Lens Alignment Report\]\] --- stale (2026-07-12, predates v2); recommend a fresh lens-align pass now that this map has moved

20Jul26 - Macrofrozen Before vs After MAIA (Lark) · 23Jul26 - Macro Frozen Enhancement (Lark)

\|（注：部分内容可能由 AI 生成）

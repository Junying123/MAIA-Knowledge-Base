**Fixguru --- PM Handover Brief**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Handover reference for whoever picks up or reviews the Fixguru account.\
  **Read in this order:** Quick Start → Who\'s Who → Status at a Glance → Deep Dives → Action Checklist.\
  Nothing here should be treated as confirmed until verified directly with the client or dev team --- several items are flagged precisely because they were never formally closed out.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Quick Start**

  ------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
               

  **Client**   Fixguru (IAM Worldwide Sdn Bhd) --- B2B packaging (ready-made + custom RSC/Diecut boxes), SME → Enterprise

  **Folder**   In Mindhive master

  **Phase**    UAT --- not sign-off ready. 4 UAT rounds run (7 Apr, 14 May, 16 Jun, 24 Jun 2026), core blocker still unresolved as of the last Scope Lock update (24 Jun, resolutions through 24 Jul 2026)
  ------------ ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Three things to sort out first:**

**Historical pricing is the account\'s #1 blocker.** Client has failed sign-off on this specific step four UAT rounds running and has said directly they will revert to AutoCount if it isn\'t solved. Milestone-2 payment (RM24,000) is withheld pending this. The design was resolved 13 Jul 2026 (FE link-out) but **the client has not yet re-tested the rebuilt flow against 4 prior failures** --- confirm this before reporting any progress. → Deep Dive

**UAT signatory confirmed --- Yvonne (Choo).** Fixguru\'s internal champion; she is the sole person with sign-off authority for UAT pass. Update any doc still flagging this as \"not identified\" --- it\'s resolved.

**Two manager roles and the driver role have no assigned person.** The permission matrix itself (roles and rights) is client-confirmed --- that part is not the gap. The gap is that Sales Manager and Logistics Manager, both distinct roles in that confirmed matrix, have never had an individual named against them. The driver/POD step has zero named individuals anywhere in the corpus --- confirm whether delivery is fully outsourced to Lalamove/3PL or Fixguru has its own driver(s).

**Sources for this brief:**Scope Lock v2 --- Fixguru.md, Fixguru --- Unclear Scope --- Client Story & Acceptance Criteria.md, Fixguru --- VoC Extraction.md, Fixguru --- End-user & Process Map.md, Fixguru --- Lens Alignment Report.md, Fixguru --- Before vs After MAIA and E2E Flow.md, Fixguru --- CR Scoping.md, all in this folder.

**Who\'s Who at Fixguru**

  --------------------------------------- ------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Name                                    Role                Notes

  Xiao Ling, Hayati, Zuha                 Sales User          Named 2nd UAT testers

  Syahira                                 Sales User          On the role roster only --- not on the 2nd UAT tester list

  ---                                     Sales Manager       **Not yet identified.** Exists in the permission matrix with distinct rights from Sales User, no person assigned

  Asrul, Fadzil, Azizah                   Logistics User      Named on the role roster, not directly quoted anywhere

  ---                                     Logistics Manager   **Not yet identified.** Same gap as Sales Manager

  Abishaah, Wendy Wang                    Finance Manager     Named 2nd UAT testers, submit rights on Invoice/Payment/Credit Note

  Nisa                                    Finance User        No submit rights

  Marcus Lim                              Admin               Full system access. **Strongest single voice in the VoC corpus** --- most of the historical-pricing/credit evidence traces to this actor or a closely related unnamed \"Guest,\" but the attribution is BELIEVED, not CONFIRMED

  Steven Gan, Yvonne Choo, Jennifer Gan   Admin               Full system access. Yvonne is the named owner of the still-outstanding real-WhatsApp-order-sample action item (C1)

  ---                                     Driver              **Zero named individuals anywhere in the corpus.** Confirm whether this is genuinely unstaffed (fully outsourced to Lalamove/3PL) or a real gap

  **Yvonne Choo**                         UAT signatory       **Confirmed.** Internal champion --- sole authority to sign off UAT pass. Resolves the \"no named signatory\" gap flagged in the End-user & Process Map (2026-08-06)
  --------------------------------------- ------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Vendor-side (not Fixguru staff):** Gareth Ng (Mindhive PM, delivery owner/coordinator), Amirul, Bryan, Azib, WeiShen (Mindhive dev), Ivan (Mindhive tech lead --- configured/built the DN-level credit-block logic; not a Fixguru approver).

**System of record:** AutoCount --- customer, product, stock, and accounting master. MAIA sits on top and syncs to it; MAIA never becomes an independent conflicting master (L-01, LOCKED).

**Status at a Glance**

**✅ Locked & Built**

  ------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                                  Detail

  AutoCount as system of record         LOCKED --- MAIA pulls/pushes to AutoCount, sync failure must be visible internally (L-01)

  Internal-only WhatsApp chatbot        LOCKED --- internal ops use only, not customer-facing (L-02)

  Core sales document flow              LOCKED --- Quotation/Proforma → SO → DO → Invoice, one proforma can have 2+ DOs (L-03)

  Draft editability before submit       LOCKED --- chatbot must never silently submit (L-04)

  RSC + Diecut calculators              LOCKED, SUPERSEDED down from 5 client-requested calculator types --- Pizza/Layer Pad/5-panel are CR (L-05)

  FOC quantity handling                 LOCKED --- stock deducts billable + FOC, revenue reflects billable only (L-06)

  Delivery charge as SKU line           LOCKED --- not metadata, must be stated explicitly (L-07)

  Brand in item display string          LOCKED --- added 13 Jul 2026 (L-08)

  Historical pricing, one-glance view   LOCKED (was AIP-01) --- invoice-sourced, all transactions, 8 fields, FE link-out from chat

  Chat + web dual-interface             LOCKED (was AIP-02) --- chatbot returns a URL, not an inline table/image

  Minimum-price / item+UOM threshold    RESOLVED (AIP-06)

  Price-book bypass                     RESOLVED (AIP-07) --- locked price-book price bypasses min-price approval

  SST/tax hidden from customer docs     RESOLVED (NS-11)

  Shelf number in DN                    RESOLVED (NS-08, partial) --- populates the DN additional-note field

  UAT signatory                         RESOLVED --- Yvonne Choo confirmed as internal champion, sole sign-off authority

  Permission matrix (roles + rights)    CLIENT-CONFIRMED --- not inferred, pulled directly from MAIA_Role_Permission_Fixguru_Completed.csv. Gap is named individuals for Sales Manager/Logistics Manager, not the matrix itself
  ------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**⚠️ Direction Decided, Not Yet Fully Closed**

  ---------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                                     Detail

  Credit-limit block moved SO → DN         Client\'s own stated direction (block at DN submit, DO-value triggered), dev-configured --- **RESOLVED-PENDING-TEST** (NS-04). Not yet formally written into the Scope Lock proper --- currently only in the Round 3 Tech Brief

  Bypass-role list for credit approval     Blocked on Azib\'s AutoCount screenshot (open item C2) --- which of the 4 named Admins can bypass is still open

  PDF / AutoCount-parity template          Implemented, needs client testing --- was dropped between Scope Lock v1 and v2, re-added as NS-10

  Multilingual (Malay/Chinese) responses   Implemented, needs testing (NS-09)
  ---------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**❓ Open / Genuinely Unresolved**

  ------------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                                       Detail

  Customer search by phone/WhatsApp number   AGREED IN PRINCIPLE, not locked (AIP-03) --- blocking. Sales staff often only have a phone number, not a company name; partial-number search still unconfirmed

  Delivery-method-history source doctype     Still open (NS-07) --- invoice vs SO vs DO, pending tech + client alignment

  Warehouse-level stock mapping              Still open (AIP-08/NS-08 remainder) --- shelf is resolved, but which exact AutoCount table/module represents \"warehouse\" is not confirmed. Purely technical, not a client decision

  Credit-exposure formula                    Not fully locked (VOC-029) --- should be unbilled SO + outstanding invoices, per a client-driven correction, but still used informally in approvals

  Payment-proof-vs-AR-timing override        Parked/deferred by deliberate client choice (NS-05) --- not resolving this round

  \"Guest\" voice attribution                Likely Marcus Lim, cross-referenced via the Forensic Dossier and permission CSV, but not CONFIRMED --- resolve at the sign-off session
  ------------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**📋 Deferred / Next-Phase Scope (Change Requests, outside signed SOW)**

None of these are committed or locked --- they\'re candidate CRs for commercial discussion, not build items. Full detail in \[\[Fixguru --- CR Scoping\]\].

  ----------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -----------------------------
  CR                                              What it is                                                                                                                                                                           Blocks UAT?

  Two-Way AutoCount Sync (historical migration)   One-off import of pre-cutoff AutoCount documents (Invoices, Credit Notes, Receipts) into MAIA as read-only history                                                                   No --- post-UAT, at go-live

  Calculator Policy Customisation & Unit Toggle   2 revised + 5 new calculators (beyond the locked RSC+Diecut-only scope, L-05/OOS-02), plus a cm↔inches unit toggle                                                                   No

  Raw-to-Finished Conversion (BOM module)         AutoCount BOM/stock sync extension + a Stock Conversion Module --- dual raw/finished stock visibility, producible-quantity calculation, yield-variance display for production runs   No

  Volumetric (m³) field on DN PDF                 Weight/volume sync from AutoCount item master, surfaced on the Delivery Note and its PDF for lorry-load planning (relates to VOC-013)                                                No
  ----------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -----------------------------

**Deep Dives**

**1. Historical Pricing & Discount Decision**

**This is the account\'s single highest-risk item.** Fixguru\'s core ask, repeated across all 4 UAT rounds: when deciding what price/discount to offer a customer right now, Sales needs to see that customer\'s full invoice history --- item code, date, invoice no, quantity, standard price, discount %, net price --- in one glance, the same speed they get from AutoCount today.

**What went wrong across 4 rounds:** early builds patched the pricing display at the prompt/chat level instead of building it as a first-class, invoice-sourced module. Client escalated directly in the 24 Jun 2026 UAT debrief: *\"I speak many times the same... I don\'t know how to tell you.\"* Sentiment is patient but visibly eroding.

**Resolution (13 Jul 2026, now LOCKED):**

Source: Sales Invoice only (not Quotation/SO history) --- NS-02

Fields: item code, item name, date, invoice no, quantity, standard price, discount %, net price --- 8 fields, NS-03

Output: standalone FE URL link-out from chatbot (not an inline WhatsApp table/image) --- NS-01, example: https://maia-oms-dev.vercel.app/sales-staging?company=MAIA&customer=CUST-000004&items=\...&tab=history&src=whatsapp&chat=\...

Lists ALL past transactions, not capped at 5 (5 was a floor in early discussion, not a cap)

**What\'s not yet done:** the client has **not re-tested this exact rebuilt design** against the 4 prior failures. Do not report this as resolved until that retest happens --- this is the account\'s real go/no-go moment.

**Commercial note:** Milestone-2 payment (RM24,000) is withheld pending this. Track as a live liability, not a closed item.

**2. Price & Credit Approval**

Two separate approval triggers, both route to Fixguru\'s named Admins (Marcus Lim, Steven Gan, Yvonne Choo, Jennifer Gan) --- not to Ivan, who is Mindhive\'s tech lead and only configured the underlying logic.

**Minimum-price / below-floor:** RESOLVED --- threshold is per item + UOM (e.g. standard 33 sen, floor 27 sen). A locked price-book/customer-specific price bypasses this check entirely, unless the requested price undercuts even that locked price.

**Credit-limit / exposure:** Client\'s own stated direction --- block at Delivery Note submission (not order/SO stage, which \"loses money collection opportunity\"), triggered by DO value. Dev has configured and built this (NS-04: RESOLVED-PENDING-TEST). Approver should see full context in one view --- AR, pending SO/DN, credit limit, available balance --- not a bare approve/reject prompt (VOC-020).

**Still open:**

Which of the 4 named Admins actually approves, and which can bypass --- blocked on Azib\'s AutoCount screenshot (open item C2)

Formal write-up of the DN-level decision into the Scope Lock proper (currently only in the Round 3 Tech Brief)

Payment-proof-vs-AR-timing override --- parked by deliberate client choice, not resolving this round (NS-05)

**3. Warehouse / Shelf / Stock Mapping**

**Resolved:** shelf number now populates directly in the Delivery Note\'s additional-note field (NS-08, 13 Jul 2026 --- a scoped fix, not full sub-warehouse modelling). Fixguru confirmed it has no branch hierarchy --- all contacts sit at the same level under the customer record, simplifying customer search/dedup (NS-06).

**Still open:** which exact AutoCount module/table represents \"warehouse\" for the purpose of stock validation is not technically confirmed. This blocks a hard guarantee that MAIA is checking the right stock pool before a DO goes out --- a technical schema-walkthrough between Mindhive tech and Fixguru\'s AutoCount admin, not a client product decision.

**Also unresolved:** whether MAIA should hard-block or only warn on insufficient mapped-warehouse stock; how multi-warehouse balances display to the picker when an item exists in more than one location.

**4. Identity Gaps**

Ordered by blast radius (per the End-user & Process Map\'s own sign-off agenda):

**~~UAT signatory~~** --- **RESOLVED.** Yvonne Choo confirmed as internal champion, sole authority to sign off UAT pass.

**Sales Manager and Logistics Manager** --- the permission matrix defining these roles is client-confirmed (not the gap); neither role has an individual assigned against it. No approval-level action in either swimlane has a confirmed human owner.

**Driver** --- zero named individuals in any of the four core sources (Scope Lock v2, VoC Extraction, End-user & Process Map, Client Narrative v2). If Lalamove/3PL handles all deliveries, get that confirmed explicitly --- otherwise this is an unstaffed process step.

**Real WhatsApp order-intake samples** --- outstanding action item (C1, owned by Yvonne) needed to validate the actual order-intake message format against what\'s assumed.

**\"Guest\" voice attribution** --- the richest single VoC source (14 May on-site transcript) is attributed to an unnamed \"Guest,\" cross-referenced as BELIEVED to be Marcus Lim, not CONFIRMED. Affects how much weight that voice carries relative to other named actors.

**5. Deferred / Next-Phase Scope (CRs)**

Four change requests sit outside the signed SOW, raised by Fixguru and scoped for commercial discussion --- see \[\[Fixguru --- CR Scoping\]\] for full detail. None block UAT.

**Two-Way AutoCount Sync** --- one-off historical document migration (Invoices, Credit Notes, Receipts) at go-live, since SOW only covers EOD sync from go-live onward.

**Calculator Policy Customisation & Unit Toggle** --- 2 revised + 5 new calculators (the Pizza/Layer Pad/5-panel expansion already flagged OOS-02 in Scope Lock v2) plus a cm↔inches toggle.

**Raw-to-Finished Conversion (BOM module)** --- new AutoCount BOM/stock sync extension and a Stock Conversion Module: dual raw/finished stock visibility, producible-quantity calculation, and yield-variance display when actual production output differs from the BOM-implied quantity. SOW only covers document and stock-item sync, not BOM data or yield tracking.

**Volumetric (m³) field on DN PDF** --- weight/volume sync from AutoCount, surfaced on the Delivery Note for lorry-load planning (echoes VOC-013).

**Reading Order**

  ------ -------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------
  \#     Doc                                                                        Why it matters

  1      CLAUDE.md (Fixguru folder)                                                 Orientation --- no CPO step, receipt deferred

  2      \[\[Scope Lock v2 --- Fixguru\]\]                                          Authoritative locked scope --- supersedes v1, which is stale

  3      \[\[Fixguru --- Unclear Scope --- Client Story & Acceptance Criteria\]\]   The 6 still-open client decisions, with suggested resolutions and acceptance criteria to close

  4      \[\[Fixguru --- VoC Extraction\]\]                                         Root-cause read on why 4 UAT rounds failed --- read the Bottom Line and Close-the-Loop sections first

  5      \[\[Fixguru --- End-user & Process Map\]\]                                 Actor register + the sign-off agenda (§6) --- this is where the identity gaps are itemized

  6      \[\[Fixguru --- Lens Alignment Report\]\]                                  Cross-check across all docs --- confirms ALIGNED on scope/VoC/UAT/process-map, DRIFT only on the Guest-attribution question

  7      \[\[Fixguru --- Before vs After MAIA and E2E Flow\]\]                      Full role-by-role before/after workflow --- use this for client walkthroughs and UAT briefing

  8      \[\[UAT/Fixguru --- UAT Checklist\]\]                                      Test cases mapped to LOCKED scope only

  9      Meetings/2026-06-24 Fixguru UAT Debrief.md                                 Primary evidence for the historical-pricing escalation and the DN-block direction

  10     \[\[Fixguru --- CR Scoping\]\]                                             Deferred/next-phase change requests outside signed SOW --- historical sync, calculators, BOM module, DN volumetrics
  ------ -------------------------------------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------

**Action Checklist for Incoming/Reviewing PM**

**This week:**

Confirm the client has re-tested the rebuilt historical-pricing flow (FE link-out, 8 fields, invoice-sourced) against the 4 prior UAT failures --- Needed by: ASAP, this is the account\'s go/no-go signal

Loop in Yvonne Choo (confirmed UAT signatory) directly for the sign-off once the retest above passes --- Needed by: ASAP, blocks Milestone-2

**Before the next client sign-off session:**

Name the Sales Manager and Logistics Manager --- Needed by: before UAT/training design can be finalized for either role

Confirm whether delivery is fully outsourced (Lalamove/3PL) or Fixguru has named driver(s) --- Needed by: before the driver role can be scoped at all

Resolve the \"Guest\" voice attribution (likely Marcus Lim) --- Needed by: sign-off session, affects how VoC evidence is weighted

Get real WhatsApp order-intake message samples from Yvonne (outstanding action item C1) --- Needed by: to validate the Order-Intake Map against real message formats

**Before commercial balance / Milestone-2 discussion:**

Close the bypass-role list for credit approval --- blocked on Azib\'s AutoCount screenshot (C2) --- Needed by: before formalizing the DN-block decision in Scope Lock proper

Get client sign-off on the PDF/AutoCount-parity template (NS-10) --- Needed by: before commercial balance discussion

Confirm multilingual (Malay/Chinese) response quality (NS-09) --- Needed by: before commercial balance discussion

**Technical, not client-facing:**

Mindhive tech + Fixguru AutoCount admin: identify the exact AutoCount module/table for \"warehouse\" --- Needed by: before hard-blocking DO creation on insufficient stock can be safely enabled

Align on delivery-method-history source doctype (invoice/SO/DO) --- Needed by: NS-07, non-blocking but should close before go-live

**Documentation debt:**

Formally write the DN-level credit-block decision into Scope Lock v2 proper --- it\'s currently only in the Round 3 Tech Brief, not the Scope Lock document itself --- Needed by: before treating it as locked scope

**Commercial (CR scope, not blocking UAT):**

Get commercial sign-off on the 4 pending CRs (historical AutoCount sync, calculator revision/build, BOM module, DN volumetrics) --- none are locked/committed scope, all are candidate next-phase work --- Needed by: whenever Fixguru wants to formalize next-phase scope, see \[\[Fixguru --- CR Scoping\]\]

**See Also**

\[\[Scope Lock v2 --- Fixguru\]\]

\[\[Fixguru --- Unclear Scope --- Client Story & Acceptance Criteria\]\]

\[\[Fixguru --- VoC Extraction\]\]

\[\[Fixguru --- End-user & Process Map\]\]

\[\[Fixguru --- Lens Alignment Report\]\]

\[\[Fixguru --- Before vs After MAIA and E2E Flow\]\]

\[\[UAT/Fixguru --- UAT Checklist\]\]

\[\[Fixguru --- CR Scoping\]\]

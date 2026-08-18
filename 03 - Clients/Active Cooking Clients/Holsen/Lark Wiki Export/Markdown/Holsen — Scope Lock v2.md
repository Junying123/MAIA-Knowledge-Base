**Holsen --- Scope Lock v2**

**Date:** 3 Aug 2026 (v1 was 23 Jun 2026)\
**Build stage:** Post-go-live (Phase A1 live \~25 Jun 2026, slipped from 31 Mar). Phase A3 (compliance/batch) deferred, contingent on the remaining 70% commercial balance.\
**Overall lock posture:** Still conservative, but less pessimistic than v1 on one major front: C1/C3 at the Sales Order level is now confirmed live-tested with the client, not merely \"agreed in principle.\" The new critical-path blocker is narrower and sharper than v1\'s --- it\'s batch allocation across mixed-exemption customers, not the general C3 enforcement model.

**v2 Changelog --- What Triggered This Rerun and What Changed**

**Trigger:** v1 (23 Jun 2026) predates the go-live cutover (25 Jun), the go-live bug list (Dev Brief, 25 Jun), the stock-ingest handover (26 Jun), and a 2026-08-03 correction pass that checked the PM Handover Brief and Before/After Workflow doc directly against the underlying Granola transcripts (15 & 22 May C1/C3 UAT sessions) rather than relying on secondhand summaries. That correction pass surfaced material status changes v1 did not have.

**Structural fix:** v1 had no SL-N ids --- a known gap this skill flags explicitly. IDs are assigned here for the first time, in the order items first appeared in v1 (SL-1--SL-21), preserving every original item (including Out-of-Scope). New findings from post-v1 sources are appended as SL-22 onward. SL-29 is intentionally unused --- the concept it would have covered (permission matrix) was folded into the existing SL-16 (formerly NS-04) rather than duplicated.

**What actually changed since v1 (status deltas only):**

  -------------------- -------------------------------- ---------------------------------------- ------------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ID                   Item                             v1 status                                v2 status                                        Why

  SL-14 (was NS-02)    C3 mixed-order handling          NEEDS SCOPING                            **LOCKED**                                       UAT Test 31 defines the exact mechanism (confirmation prompt to remove ineligible items); confirmed live-tested with client 15/22 May 2026

  SL-16 (was NS-04)    Permission matrix                NEEDS SCOPING                            **AGREED IN PRINCIPLE**                          Matrix now fully specified (SOW Feature Checklist §7, UAT Tests 15--22, Customer Onboarding Checklist) and cross-source consistent, but never formally signed off

  SL-10 (was AIP-04)   Customer/commodity pricing       AGREED IN PRINCIPLE                      **LOCKED (SUPERSEDED)**                          Dev Brief 25 Jun clarifies actual mechanism: RM0 standard price, manual entry, no auto-retrieval for most items --- contradicts SOW\'s \"auto-fills correct price\"

  SL-5 (was LS-02)     Batch selection at DN/picklist   LOCKED (SUPERSEDED), confidence MEDIUM   **LOCKED (SUPERSEDED), confidence MEDIUM-LOW**   New client-corrected account (2026-08-03) says batch is assigned at SO stage, not DN stage --- conflicts with the UAT-form/Dev-Brief version this item was built on; the correction is itself hedged as unconfirmed. See Source-Conflict Register.

  SL-7 (was AIP-01)    C3 compliance model              AGREED IN PRINCIPLE                      **AGREED IN PRINCIPLE, narrowed**                SO-level mechanics now split out and locked as SL-22; remaining open scope is specifically DN/Invoice-level (SL-31) and the batch-allocation lock (SL-30)
  -------------------- -------------------------------- ---------------------------------------- ------------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**No prior LOCKED item was downgraded.** L-01, L-02, L-03 (now SL-1, SL-2, SL-3) stand unchanged --- no new evidence contradicts them.

**Single most important thing that changed:** v1 treated C3 as a fundamentally unresolved enforcement model. It is not. The Sales Order-level mechanics (certificate create/upload, apply to SO, HS-code eligibility match, submit-block when uncovered) were live-tested with Mr. Tam\'s team on 15 and 22 May 2026 and work. What remains genuinely open is narrower and more operationally dangerous: Holsen has no way to lock a portion of one incoming batch to a specific C3-exempt customer when that batch is split across multiple customers with mixed exemption status. Mr. Tam explicitly called this more critical than the other open C1/C3 bugs, and Mindhive confirmed it\'s unbuilt, slated for \"next phase.\" This is SL-30 --- the sharpest blocking item in this document, replacing v1\'s diffuse \"C3 enforcement model\" as the top risk.

**Action required after this rerun:** run lens-align for Holsen --- VoC Extraction, UAT Checklist, and End-user & Process Map all cite this document\'s old (un-numbered) structure and need to be checked against the new SL-N ids and the status deltas above.

**1. Source Manifest**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Source                                                                                                                                                                             Date / range                                     Processed                                                                                                                                                                                    Notes

  \[SOW\] SOW for MAIA Holsen                                                                                                                                                        Effective 10 Dec 2025                            Full read (v2)                                                                                                                                                                               03 - Clients/Active Cooking Clients/Holsen/Product/SOW for MAIA Holsen.md

  \[WH\] Working Holsen                                                                                                                                                              ---                                              Full read (v2)                                                                                                                                                                               \.../Product/Working Holsen.md

  \[Taxonomy\] Holsen Product Taxonomy                                                                                                                                               Last reviewed 2026-03-04                         Full read (v2)                                                                                                                                                                               Product classification, TYPE (Trading/Mfg) gap noted

  \[SOWChecklist\] Holsen SOW Feature Checklist                                                                                                                                      Last reviewed 2026-03-17                         Full read (v2)                                                                                                                                                                               Dev-configured permission matrix, PSO checklist, build-status checkboxes

  \[FR-5Mar\] Holsen Feature Requests --- 5 March Training                                                                                                                           5 Mar 2026                                       Full read (v2)                                                                                                                                                                               C1/C3 definitions, named-actor user stories, 15 open items

  \[FR-18Mar\] Feature Requests --- Setup & Testing                                                                                                                                  18 Mar 2026                                      Full read (v2)                                                                                                                                                                               Pricing config, S1--S4 permission levels, PSO, chatbot SO generation

  \[ConfigOverlay\] Config Overlay                                                                                                                                                   Last reviewed 2026-03-24                         Full read (v2)                                                                                                                                                                               Finance-approval-before-DO description --- now contradicted, see SL-36

  \[ClientOverview\] Client Overview                                                                                                                                                 Last reviewed 2026-03-24                         Full read (v2)                                                                                                                                                                               Contact table was empty at time of writing; resolved via Onboarding Checklist

  \[OnboardingStatus\] Onboarding Status                                                                                                                                             Last reviewed 2026-03-24                         Full read (v2)                                                                                                                                                                               Phase milestone tracking

  \[BackwardPlan\] Holsen Phase 1 Closure Backward Plan                                                                                                                              21 Jun 2026                                      Full read (v2)                                                                                                                                                                               Commercial 30%-not-50% payment term, go-live milestone map

  \[GoLive\] Holsen Go-Live Action Plan --- 2026-06-25                                                                                                                               25 Jun 2026                                      Full read (v2)                                                                                                                                                                               B1--B5 bug list, go-live gates, post-go-live backlog F1--F7

  \[DevBrief\] Dev Brief --- Holsen UAT Issues --- 2026-06-25                                                                                                                        25 Jun 2026                                      Full read (v2)                                                                                                                                                                               B1--B8 bugs with evidence, pricing model detail, stock/batch model

  \[DNPL\] DN to Pick List --- Batch Number Test Cases                                                                                                                               29 May 2026                                      Full read (v2)                                                                                                                                                                               HOL-LOG-DN-PL-001/002, results blank

  \[StockIngest\] Handover Brief --- Holsen 2026 Stock Ingest --- 2026-06-26                                                                                                         26 Jun 2026                                      Full read (v2)                                                                                                                                                                               Batch ingest mechanics, BE-support gaps

  \[UATForm\] MAIA UAT Form --- Holsen --- 2026-03                                                                                                                                   Round 1, 18--25 Mar 2026                         Full read (v2)                                                                                                                                                                               36 tests incl. Tests 24--36 (C1/C3); no Pass/Fail ticked, no signature

  \[PMHB\] Holsen --- PM Handover Brief                                                                                                                                              Last reviewed 2026-08-02, corrected 2026-08-03   Full read (v2)                                                                                                                                                                               Primary source for the C1/C3, batch-allocation, drawdown-billing, and pricing-default deep dives cited throughout this rerun

  \[B4A\] Holsen --- Before vs After MAIA Workflow                                                                                                                                   Corrected 2026-08-03                             Full read (v2)                                                                                                                                                                               Client-corrected E2E flow and per-role breakdown; source of the SO-vs-DN batch conflict

  \[Dossier\] Forensic Account Dossier v3 (Lark)                                                                                                                                     22 Jun 2026                                      Read (executive layer full; detail sheets not expanded --- embedded as linked spreadsheet objects, not inline text)                                                                          node DByBwpDirisQJUkMUD2lF9FIgkc

  \[Narrative\] Client Narrative (Lark)                                                                                                                                              22 Jun 2026                                      Full read (v2)                                                                                                                                                                               Frames C1/C3 as a compliance-control problem, not a tax-flag problem; explicitly defers delivery-side batch enforcement

  \[OnboardChecklist\] Customer Onboarding Checklist (Lark)                                                                                                                          ---                                              Read for roster + permission matrix only                                                                                                                                                     node IShHwGOY9iNabKkn9iFlYDL9g7f --- named actors used for attribution throughout

  Carried from v1, not independently re-verified this rerun: \[CP-08Jan\], \[CP-11Feb\], \[UAT-11May\], \[UAT-15May\], \[UAT-22May\], \[Setup-18Mar\] (Fireflies/Granola extracts)   Jan--May 2026                                    Targeted extraction (v1 only)                                                                                                                                                                These underpin several carried-forward v1 items. v2 corroborates their substance via \[PMHB\]\'s direct 2026-08-03 transcript check of the 15/22 May sessions specifically, but did not re-open the Jan/Feb/11-May extracts independently.

  Granola transcripts, Meetings/ folder                                                                                                                                              Various                                          Not exhaustively re-read line-by-line this rerun; relied on \[PMHB\]/\[B4A\] as pre-verified synthesis per rerun instructions, cross-checked against \[DevBrief\]/\[GoLive\] primary notes   See rerun brief\'s explicit instruction to treat \[PMHB\] Deep Dives as already-verified, not raw claims to re-derive
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Coverage gap carried from v1:** Fireflies has live meetings not all represented as uploaded transcript files. Confidence on pre-May items sourced only via v1 remains **medium**.

**2. Scope Lock Summary**

  ----------------------------------------------------- ---------
  Status                                                Count

  **LOCKED**                                            12

  **LOCKED (SUPERSEDED)**                               4

  **AGREED IN PRINCIPLE --- NOT LOCKED**                5

  **NEEDS SCOPING**                                     14

  **OUT OF SCOPE / EXPLICIT EXCLUSIONS**                3

  **Total scope items**                                 38
  ----------------------------------------------------- ---------

*(Updated 2026-08-03, second correction pass, direct client instruction: SL-28 removed as duplicate/incorrect; SL-8 and SL-16 upgraded to LOCKED; SL-33 retired; SL-41 added new. See per-item notes throughout for what changed and why.)*

**Blocking open items (priority order)**

  ---------- ---------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Priority   Item                                                                   Why it blocks

  1          **SL-30 --- Batch allocation lock across mixed-exemption customers**   Client-flagged as more critical than any other open bug. One incoming batch routinely split across multiple customers with mixed C3 status; MAIA has no mechanism to reserve/lock a portion to one customer. Confirmed unbuilt, slated for \"next phase.\" Blocks A3 commercial balance.

  2          **SL-31 --- C1/C3 DN/Invoice-level enforcement --- NEEDS RETEST**      SO-level confirmed working; DN/Invoice stage never tested. Original blocker (batch assignment sequence) is now clarified by SL-5/SL-35 --- this is actionable now, schedule the retest rather than waiting further.

  3          **SL-40 --- UAT formal sign-off (Tests 1--36)**                        Never formally closed with a ticked Pass/Fail box or signature, despite most tests --- including C1/C3 24--36 --- having been live-tested. Paperwork gap, but blocks reporting A3 progress or triggering the commercial balance.

  4          **SL-37 --- Stock/batch data ingest accuracy**                         Batch qty per item and stock reconciliation from Holsen\'s Excel not tallying. Blocks the August SQL/AutoCount sync readiness check.

  5          **SL-32 --- Pick List link notification to warehouse**                 Warehouse staff do not use the frontend --- the pick-list link is their only touchpoint. Confirmed intended design as of 2026-08-03 (notify + link to update picked qty); whether it\'s actually firing in production is not independently re-verified this rerun.

  6          **SL-35 --- Batch carry-over across SO/PL/DN/Invoice**                 Mechanism now confirmed (Additional Notes field), but the only test cases that exist were written against the old structured-carry-over assumption and were never run --- need rewriting and executing against the actual mechanism.

  7          **SL-36 --- Finance-approval-before-DN gate discrepancy**              Config Overlay/User Guide describe a Finance approval + credit check before DN; the client-confirmed live flow has Logistics submitting the SO directly with no confirmed gate. Unclear whether credit checking still happens at all.
  ---------- ---------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**3. Locked Scope (Build-Ready)**

**SL-1 --- Sales PO intake → draft quotation / sales order**

*(was L-01, unchanged)*

**Status:** LOCKED\
**Confidence:** MEDIUM-HIGH

**Source:** SOW Phase A1 Sales Agent Assistant \[SOW\]; reinforced by UAT Tests 1--5 \[UATForm\] which define exact expected chatbot behaviour for text/photo/PDF intake.

**Current locked definition:** Sales users submit customer order information via WhatsApp/email/Telegram or chatbot prompt. MAIA extracts order fields, creates a draft quotation, CPO, or sales order, and allows user review/edit before submission. Commodity/negotiated-price items prompt for price confirmation.

**User-facing flow:** Sales user receives PO → forwards/uploads/prompts MAIA → MAIA extracts customer, SKU, quantity, delivery date → user reviews extracted draft → user enters/confirms price → MAIA generates draft quotation/CPO/SO → user amends or submits.

**Acceptance criteria:**

PDF/image/text PO can create an editable draft order/CPO.

Extracted fields include at least customer, SKU, quantity, and delivery date where available.

User can edit extracted fields before submission.

Commodity/manual-price items prompt for price confirmation.

Missing SKU or SKU not in MAIA inventory is surfaced rather than silently accepted.

Duplicate check: same customer + PO number where an existing order is already at TO BILL status → blocked as duplicate \[UATForm\] Test 8.

**SL-2 --- Order lifecycle dashboard / daily digest for pending actions**

*(was L-02, unchanged)*

**Status:** LOCKED\
**Confidence:** MEDIUM

**Source:** SOW Daily Digests for unprocessed/incomplete orders, pending actions, unclosed SOs \[SOW\].

**Current locked definition:** MAIA exposes pending/draft order states and sends digest reminders to sales/logistics users. **Note:** the delivery mechanism for at least one digest type (pick-list-ready notification to warehouse) is confirmed broken as of 25 Jun --- see SL-32. Do not assume all digest channels are reliable just because the underlying dashboard data exists.

**User-facing flow:** Order remains draft/pending → MAIA identifies incomplete state → digest/dashboard shows action needed → user opens order and resolves.

**Acceptance criteria:**

Draft/pending orders appear in dashboard/digest.

Digest identifies order ID/customer/status/action needed.

User can navigate from digest/dashboard to the relevant order.

Role-specific visibility follows the permission matrix (SL-16).

**SL-3 --- C1 current-process rule: customer + tariff-code coverage**

*(was L-03, reinforced)*

**Status:** LOCKED\
**Confidence:** HIGH *(raised from HIGH --- evidence strengthened, not downgraded)*

**Source:** SOW \[SOW\]; reinforced by live client testing 15/22 May 2026 (\[PMHB\] §1, direct transcript quotes: *\"So c one for this works\"*) and UAT Tests 24--27 \[UATForm\].

**Current locked definition:** C1 is customer-level certificate coverage tied to tariff/HS code and manufactured goods. Holsen stores the latest C1 under the customer; MAIA checks whether ordered manufactured goods match C1 tariff coverage before treating order lines as tax exempt. Confirmed working for full-coverage and partial-coverage (mixed covered/uncovered line) scenarios.

**User-facing flow:** Admin uploads or manually creates C1 certificate under customer → order is created (chatbot or web) → MAIA checks customer C1 coverage + item HS code → covered lines treated as tax exempt, uncovered lines remain taxable and editable → certificate reference available for audit trail.

**Acceptance criteria:**

Customer profile supports certificate attachment (manual create or PDF upload).

C1 eligibility checks customer + HS code coverage per line, not per order.

Partial coverage on a single order is supported --- some lines exempt, some taxable.

Certificate carries over unchanged from CPO to converted Sales Order (\[UATForm\] Test 33).

C1-exempt lines are differentiated from non-exempt lines in the record.

**SL-14 --- C3 mixed-order handling**

*(was NS-02, UPGRADED from NEEDS SCOPING to LOCKED)*

**Status:** LOCKED\
**Confidence:** MEDIUM-HIGH

**Source:** UAT Test 31 \[UATForm\] fully specifies the mechanism; live-tested 15/22 May 2026 per \[PMHB\] §1 (\"submit-block when an item isn\'t covered by the certificate\" confirmed working).

**Current locked definition:** When a PO/SO contains a mix of C3-covered and non-covered items, MAIA shows a confirmation prompt naming the uncovered items and requiring explicit user action --- confirm (uncovered items are removed, order proceeds with covered items only) or cancel (certificate selection reverts, all original items remain).

**User-facing flow:** User selects C3 certificate on SO → system detects mixed coverage → prompt: *\"The following items are not covered by this certificate and will be removed. Continue?\"* → Confirm removes ineligible items and applies certificate to remainder → Cancel reverts certificate selection entirely, no partial state.

**Acceptance criteria:**

Mixed C3/non-C3-covered orders trigger a confirmation prompt naming the uncovered items.

Confirming removes only the uncovered items; covered items keep the exemption.

Cancelling fully reverts --- no partial application of the certificate.

Same behaviour confirmed via both chatbot and web-app paths.

**Caveat:** confirmed working via live testing, but the UAT form\'s own Pass/Fail box for Test 31 was never ticked --- see SL-40. Treat as functionally locked, administratively unsigned.

**SL-22 --- C1/C3 SO-level certificate enforcement mechanics**

*(NEW --- absorbs and locks the SO-level portion of what v1\'s AIP-01 left fully open)*

**Status:** LOCKED\
**Confidence:** MEDIUM-HIGH

**Source:**\[PMHB\] §1, direct quotes from 2026-05-15 \"Holsen \<\> Mindhive C1C3 UAT\" and 2026-05-22 \"Holsen C1/C3 Testing\" Granola transcripts, attendee holsenlab@gmail.com --- not internal dev showcases, live client sessions. Corroborated by \[UATForm\] Tests 24--35.

**Current locked definition:** At the Sales Order stage (chatbot or web app), MAIA supports: certificate creation (manual entry with HS-code/description rows) and PDF upload for both C1 and C3; applying a certificate to an SO with full or partial coverage; certificate carry-over from CPO to converted SO without re-selection; HS-code eligibility matching per line; and a hard submit-block when a C3 order is missing required attachments (PO + appointment letter) or when a line\'s HS code isn\'t covered by the selected certificate.

**User-facing flow:** User creates/opens SO → selects or applies certificate in Biller section → MAIA validates each line\'s HS code against certificate coverage → for C3, MAIA also requires PO attachment + appointment letter before save succeeds → uncovered lines or missing attachments block submission with a specific error, not a silent failure.

**Acceptance criteria:**

C1 and C3 certificates can be created manually or uploaded as PDF, via web app or chatbot.

Certificate applies at SO Biller-section level; line-level HS-code eligibility is checked per item, not per order.

C3 orders cannot save without PO attachment + appointment letter (\[UATForm\] Test 34).

Line items with HS codes not in the certificate block save with a specific error (\[UATForm\] Test 35).

Certificate carries over automatically CPO → SO (\[UATForm\] Test 33).

**Known unresolved bugs against this locked item (not blocking the lock, but open):** PDF-uploaded certs sometimes fail to show text/tax reference on the finance side; a logistics-officer role needed combined sales+logistics permissions to edit certs mid-session, unresolved on the spot; a chatbot-side permission bug once blocked Mr. Tam himself from creating a CPO/certificate on his own account --- Mindhive\'s committed \"fix by next week\" is not confirmed anywhere in this KB. \[PMHB\] §1--2.

**What this item explicitly does NOT cover:** DN/Invoice-stage behaviour (SL-31) and the batch-allocation lock (SL-30) --- both still open.

**SL-23 --- One DN → many Invoices (drawdown billing)**

*(NEW)*

**Status:** LOCKED\
**Confidence:** MEDIUM *(behaviour confirmed by direct live-system verification, not by written spec or client sign-off --- see caveat)*

**Source:**\[PMHB\] §3 --- verified directly by Gareth on Holsen production, 2026-08-02.

**Current locked definition:** MAIA supports issuing multiple partial invoices against a single Delivery Note. Client scenario: 1 tonne delivered in one DN, then invoiced incrementally as the customer draws down stock (e.g. four 0.25-tonne invoices against one DN).

**User-facing flow:** Full quantity delivered in one DN → Finance creates invoice #1 for partial quantity against that DN → DN remains open/referenceable → Finance creates invoice #2, #3, #4 against the same DN as stock is drawn down.

**Acceptance criteria --- drafted from observed behaviour, not yet formally specified:**

A single DN can be the source document for more than one Invoice.

Each invoice against the DN can bill a partial quantity.

*(Undocumented --- flag for spec-writing, not blocking):* whether the DN displays a running \"remaining to invoice\" balance, and when/how the DN is marked fully invoiced.

**Caveat:** No written business-rule spec exists anywhere for this flow --- \[PMHB\] explicitly flags this as tribal knowledge from one live test. \[01 - MAIA Product/Product Specs/Delivery Note Spec\] still lists \"Multiple DNs from one Invoice?\" as \[TO FILL\], which is the reverse direction and doesn\'t cover this. Safe to confirm to Holsen as supported; still needs a short written spec before relying on it for billing at scale.

**SL-24 --- Pricing & tax defaults by SKU classification tag**

*(NEW)*

**Status:** LOCKED\
**Confidence:** MEDIUM-HIGH

**Source:**\[PMHB\] §4 and \[B4A\], both sourced from the 2026-05-22 \"Holsen C1/C3 Testing\" Granola transcript, client-facing session.

**Current locked definition:**

Trading-tagged items default to selling price = RM0 by design (not a bug) --- Sales/Logistics must manually key the price, **unless** the customer already has a customer-specific price on file, in which case MAIA uses that instead.

Trading-tagged items default to 0% SST.

Manufacturing-tagged items default to SST 10%.

These SKU-tag defaults are a separate mechanism from A57 tax exemption (deferred, SL-19) and from C1/C3 certificate-based exemptions (SL-22) --- three independent mechanisms that can all touch the same invoice line, and the tag default is only the starting point before cert/exemption logic applies.

**User-facing flow:** Line item added to SO → MAIA checks item\'s SKU classification tag → applies default price behaviour (RM0/manual for Trading unless customer price exists) and default tax rate (0% Trading / 10% Manufacturing) → C1/C3 certificate logic, if applicable, can further override the tax treatment per SL-22.

**Acceptance criteria:**

Trading items default to RM0 price and prompt manual entry unless a customer-specific price is configured.

Trading items default to 0% SST; Manufacturing items default to 10% SST.

Customer-specific pricing, where configured, takes priority over the RM0 Trading default.

C1/C3 certificate exemption can still override the tag-level tax default on a covered line.

**SL-25 --- No delivery fleet --- third-party transporters only**

*(NEW --- clarifies an ambiguity in SOW/Working Holsen, does not contradict a prior lock)*

**Status:** LOCKED\
**Confidence:** HIGH

**Source:**\[B4A\], corrected 2026-08-03 per direct client instruction --- replaces an earlier \"own fleet or transporter\" framing carried in \[SOW\]/\[WH\].

**Current locked definition:** Holsen has no own delivery fleet. All deliveries go through third-party transporters: Menaka (local), GMax and Tiong Nam Logistics (outstation). Delivery type (Local vs Outstation) is auto-classified from postcode. Delivery confirmation happens only two ways: customer confirms goods received, or the transporter\'s own DO is returned.

**User-facing flow:** DN generated → delivery-type auto-classified by postcode → goods handed to the appropriate third-party transporter along with DN (and Poison Form if flagged) → delivery confirmed via customer acknowledgement or transporter DO return.

**Acceptance criteria:**

No delivery-option selection exists in MAIA (no standard/express/COD/self-collect) --- this is a documented non-feature, not a gap.

Local vs Outstation classification is automatic from customer postcode.

Transporters are not MAIA users --- no login expected for Menaka/GMax/Tiong Nam.

**SL-26 --- Minimum price hard-block at SO submission**

*(NEW)*

**Status:** LOCKED\
**Confidence:** HIGH

**Source:**\[DevBrief\] B6, \[GoLive\] --- confirmed behaviour explicitly stated by Gareth: *\"Hard block. SO cannot be submitted if any line item price is below that item\'s configured minimum price. No override, no soft warning.\"*

**Current locked definition:** On SO submit, MAIA checks each line item\'s entered unit price against the item\'s configured minimum price. Any line below minimum blocks submission entirely --- no override path, no soft warning. The submitting user (typically the Logistics Manager) must correct the price or escalate to the boss for reconfirmation.

**User-facing flow:** Logistics manager enters/reviews price on SO line → attempts submit → MAIA checks entered_price \>= item.minimum_price per line → if any line fails, submit is blocked with message identifying item, entered price, and minimum → user must correct or escalate before resubmitting.

**Acceptance criteria:**

Submit is blocked (not warned) if any line\'s price is below the item\'s configured minimum.

No override mechanism exists at submission --- this is intentional.

Error message names the specific item, entered price, and minimum price.

Minimum prices must be configured per product as a prerequisite --- this is config work, not a code gap, but if minimums are unconfigured the block cannot function (verify configuration status before relying on this).

**SL-27 --- No discount display on customer-facing PDFs**

*(NEW)*

**Status:** LOCKED\
**Confidence:** HIGH

**Source:**\[DevBrief\] B7 --- explicit client requirement, direct quote: *\"We don\'t need to show any discount. There\'s no no need to show discount.\"*

**Current locked definition:** No discount column, discount percentage, or discount amount appears on any customer-facing PDF for Holsen --- Quotation, SO, Invoice, or Delivery Note --- regardless of how the price differs from any reference \"standard price\" field.

**User-facing flow:** Document generated for any of the four document types → discount field is suppressed/hidden on the rendered PDF for Holsen\'s tenant, even if a non-zero discount would otherwise be calculable.

**Acceptance criteria:**

No discount column/field appears on Quotation, SO, Invoice, or DN PDFs.

This holds regardless of the underlying standard-price configuration (relevant because Holsen\'s RM0 standard-price default, SL-24, can otherwise cause a spurious discount % to render).

**4. Locked Scope --- Superseded Items**

**SL-4 --- Invoice handling during UBS/SQL transition period**

*(was LS-01; direction confirmed 2026-08-03 per direct client instruction, then sharpened same-day by Gareth\'s call with Tam Ze Xin covering the actual live integration status --- supersedes the v1/v2-draft UBS-bulk-export framing)*

**Status:** LOCKED (SUPERSEDED)\
**Confidence:** HIGH --- architecture now confirmed directly with Tam Ze Xin, not just reported

**SOW said:** MAIA supports output generation including invoice, proforma invoice, credit note/debit note \[SOW\].

**Now intended (confirmed 2026-08-03, sharpened same day):** Invoice is created in MAIA first, then synced to SQL --- MAIA is the point of creation, SQL is the downstream accounting system of record it pushes to. This replaces the earlier, less certain framing (UBS as the official source, MAIA exporting/uploading around it) --- that arrangement was specific to the UBS period and does not carry over to SQL.

**Confirmed live status as of the same-day call (2026-08-03) with Tam Ze Xin:** Holsen went live on SQL (localhost on-prem server) 1 August 2026, but **only master data (item, customer) exists in SQL today --- zero transaction data.** Given that, MAIA will **not pull anything from SQL** (\"no pull action\") --- there\'s nothing transactional there to pull. Instead: historical UBS transaction data is being **manually re-entered into MAIA** by Holsen staff, starting Tue 4 Aug for the three opening days of August (3rd, 4th, 5th --- 5th is the scheduled training date). **Confirmed integration flow: UBS → manual entry → MAIA → sync (push only, no pull) → once verified correct, push to SQL.** Transaction data and stock ledger are entered and maintained in MAIA, not SQL --- MAIA is the source of truth for transactions, SQL is a downstream push target only.

**Tax-data scope for the sync (new, 2026-08-03):** at the transaction/doctype level, **only the resulting tax charge amount pushes to SQL** --- not the C1/C3 exemption logic itself. C1/C3 certificate-based exemption determination is and remains **MAIA-only**; SQL never sees certificate/exemption reasoning, only the final tax figure it produces.

**Changed by:** Direct client instruction, 2026-08-03 (Ivan\'s WhatsApp message to the Holsen group), then confirmed and sharpened same day on a call between Gareth and Tam Ze Xin, superseding the Feb 11 UBS-period arrangement (\[CP-11Feb\], \[Narrative\], carried from v1).

**Client agreed?** YES, directly confirmed by Tam Ze Xin on the same-day call.

**User-facing flow:** UBS historical transactions → manually re-entered into MAIA by Holsen staff (in progress, 3--5 Aug for the August opening days) → going forward, MAIA creates/tracks the order → Finance creates the Invoice in MAIA → tax charge amount (not exemption logic) syncs one-way to SQL, no pull in either direction on transaction data.

**Acceptance criteria:**

Invoice is created and remains the record of truth in MAIA, not re-keyed manually into SQL.

Sync to SQL is one-directional push only --- MAIA never pulls transaction data back from SQL.

Only the final tax charge amount pushes to SQL per transaction/doctype --- C1/C3 exemption logic/reasoning never leaves MAIA.

Manual UBS→MAIA back-entry for the three opening days of August (3rd--5th) is complete and verified correct before the 5 Aug training session, so the team trains hands-on against real, accurate production data.

Before any broader SQL cutover, all doctypes and inventory data must pass a sync-readiness check --- currently blocked, see SL-37.

**SL-5 --- Delivery note / batch number / picklist handling**

*(was LS-02; conflict resolved 2026-08-03 per direct client instruction --- batch is selectable at both stages, Pick List is authoritative)*

**Status:** LOCKED (SUPERSEDED)\
**Confidence:** MEDIUM-HIGH *(restored --- v2-draft downgrade to MEDIUM-LOW retracted now the SO-vs-DN conflict is resolved)*

**SOW said:** Phase A1 includes Order → Delivery Note flow and document generation; Phase A3 links K1/batch data to delivery/invoice documents \[SOW\].

**Resolved mechanism (2026-08-03, direct client instruction):** batch number can be selected at **both** the Sales Order and the Pick List stage --- these are not competing, mutually-exclusive versions of the workflow, they\'re two touchpoints on the same field. The actual sequence: Logistics checks and submits the SO → Logistics converts the SO into a Pick List → **batch number is selected on the Pick List, and this is the authoritative selection** that drives picking and stock deduction. If a batch number is entered earlier at the SO stage, it is **indicative only** --- a placeholder/reference for planning, not binding, and does not itself commit stock. The Delivery Note is created after picking is complete, using the Pick List\'s confirmed batch selection.

**What this resolves:** the apparent conflict between the SOW/UAT/Dev-Brief version (batch at DN creation) and the earlier \[B4A\] correction (batch at SO). Both were partially right --- batch can be touched at SO (informally) and is formally used at Pick List/DN --- the missing piece was that Pick List, not DN, is where selection becomes binding.

**Changed by:** Direct client instruction, 2026-08-03, superseding both the original DN-stage framing and the interim SO-stage-only correction.

**Client agreed?** YES, directly instructed --- this closes the Source-Conflict Register entry on batch selection stage.

**User-facing flow:** Salesman creates SO (batch entry here optional/indicative) → Logistics checks and submits SO → Logistics converts SO to Pick List → Logistics selects the binding batch number(s) on the Pick List → Warehouse picks against that Pick List → Logistics creates the DN from the completed Pick List, batch carries forward (see SL-35).

**Acceptance criteria:**

Batch number field is available and editable at both SO and Pick List stages.

SO-stage batch entry is clearly indicative/non-binding in the UI --- does not lock or deduct stock.

Pick List-stage batch selection is the binding one; stock deducts from the selected batch at this point.

DN, once created from the Pick List, carries the same batch number forward (see SL-35 for the carry-over mechanism).

HOL-LOG-DN-PL-001/002 (\[DNPL\]) results are still blank --- never actually run against this now-clarified sequence. Re-run against the correct stage.

**SL-6 --- PSO automation instead of manual-only poison alert**

*(was LS-03, reinforced)*

**Status:** LOCKED (SUPERSEDED)\
**Confidence:** MEDIUM-HIGH *(raised from MEDIUM)*

**SOW said:** Poison/hazardous items trigger a \"POISON FORM REQUIRED\" manual alert \[SOW\].

**Now intended:** MAIA auto-generates the PSO for poison-tagged SKUs, appended to the DN PDF pack. Fully specified and tested via \[UATForm\] Test 23 (10-step full test: poison flag toggle + audit log, PDF suppression on non-poison DNs, PSO scoping to poison lines only on mixed DNs, FROM/TO blocks, item table, signature/chop section, upload-signed-copy flow).

**Changed by:** Feb/May UAT (v1); fully specified by Test 23 (v2 addition --- no new date, same UAT round, just fuller read this rerun).

**Client agreed?** YES in principle --- PSO generation tested and accepted. Template fields largely defined via Test 23\'s step-by-step spec; \[SOWChecklist\] notes 7 config items pending as of 25 Mar, unclear if resolved (\[PMHB\]).

**User-facing flow:** DN includes poison-category SKU → MAIA detects poison flag → MAIA generates PSO combined into the DN PDF pack (DN pages first, PSO pages after) → user can view/download/reprint per DN → optional: upload scanned signed copy back as \"Signed PSO Copy\" attachment.

**Acceptance criteria:**

Item master has a poison/non-poison flag, editable by Admin only, with an audit trail (who/when/before/after, 7-year retention per \[SOWChecklist\]).

DN containing a poison SKU auto-generates a PSO; DN with zero poison lines generates none.

Mixed DN: PSO scoped to poison lines only, non-poison lines excluded.

PSO includes FROM (Holsen)/TO (customer) blocks, item table, signature/chop section, remark field, return-copy note.

Signed PSO copy can be uploaded back and is viewable by Finance/Admin/Logistics.

**SL-10 --- Customer/commodity pricing model**

*(was AIP-04, UPGRADED to superseded --- Dev Brief resolved the ambiguity in a direction that contradicts the SOW\'s framing)*

**Status:** LOCKED (SUPERSEDED)\
**Confidence:** MEDIUM-HIGH

**SOW said:** Customer-specific pricing is configured per customer/SKU; MAIA \"retrieves the exact pricing configuration\... auto-fills the correct price\... no manual cross-checking required\" \[SOW\].

**Now intended (per \[DevBrief\], 25 Jun 2026, direct quote):** \"Standard price link but\... more vendor case your strictly enforced\... nothing\" --- i.e., standard price is RM0 by default for ALL items (trading + manufacturing), not actually used as a pricing source. Customer pricing is **not** auto-populated in practice --- sales staff enter price manually per SO as instructed by the boss verbally, with minimum price acting only as a manually-set guideline floor, now hard-enforced (SL-26). Historical pricing is reference-only, looked up manually by staff.

**Changed by:** Go-Live prep session, 25 Jun 2026 (\[DevBrief\]), directly contradicting the SOW\'s auto-fill claim.

**Rationale:** Holsen\'s actual pricing decisions run through verbal boss approval based on customer profile, payment terms, and credit usage --- a workflow the SOW\'s \"auto-fill\" framing didn\'t capture.

**Client agreed?** YES --- this is Gareth\'s own operational-context write-up for the dev team going into go-live, not a disputed claim; confirmed consistent with SL-24\'s SKU-tag pricing defaults.

**User-facing flow:** Sales/Logistics staff key in price manually per SO line, per boss\'s verbal instruction → MAIA checks entered price against configured minimum → blocks submit if below minimum (SL-26) → no automatic customer-price retrieval fires for most items in current practice, except where a customer-specific price genuinely exists on file (SL-24).

**Acceptance criteria:**

Standard/default price is RM0 for all items --- this is intentional, not a bug.

Minimum price is a manually-configured floor per product, hard-enforced at submit (SL-26).

Customer-specific pricing, where configured, is used instead of manual entry --- but this is the exception, not the default path in current practice.

No system-side commodity-vs-fixed distinction changes this --- the manual-entry pattern applies broadly.

**5. Agreed in Principle --- Not Locked**

**SL-7 --- C3 compliance model**

*(was AIP-01, narrowed --- SO-level piece now locked as SL-22)*

**Status:** AGREED IN PRINCIPLE --- NOT LOCKED\
**Confidence:** MEDIUM

**Agreed direction:** C3 is tracked as item → customer → approved quantity/quota, not a generic item flag \[CP-11Feb\] (carried from v1); reinforced by \[Narrative\] (\"C3 is customer + item + quantity\... not a generic item tag\").

**What v1 left open, now resolved (moved to SL-22, LOCKED):** whether C3 is enforced as hidden stock, hard block, or warning --- answered: hard submit-block on missing attachments/uncovered HS code, confirmation-prompt on partial coverage. Whether overlapping C1/C3 coverage is handled --- answered by SL-14\'s Test 31 mechanism.

**What remains genuinely open (this item\'s real remaining scope):**

**DN/Invoice-level enforcement** --- see SL-31. SO-level submit-block exists; nothing is confirmed once the order reaches DN/Invoice.

**The batch-allocation-lock problem** --- see SL-30. Even where SO-level certificate logic correctly identifies eligible customers, MAIA cannot currently reserve a specific quantity within a batch to that customer alone.

**Precise client question:** \"For DN/Invoice-stage C3 orders, should the same submit-block/confirmation-prompt pattern used at SO-level apply again, or is SO-level enforcement considered sufficient given the batch is only truly committed at DN stage?\"

**SL-8 --- COA handling and masking/blinding**

*(was AIP-02; simplified interim decision made 2026-08-03, per direct client instruction)*

**Status:** LOCKED (for the interim approach) --- masking/blinding logic itself remains AGREED IN PRINCIPLE, not built\
**Confidence:** MEDIUM-HIGH on the interim mechanism; MEDIUM on longer-term masking scope

**Agreed direction:** COA is batch-tied and customer-dependent; during batch ingestion Holsen attaches COA, and during fulfillment MAIA surfaces the relevant COA in the customer-required format \[CP-08Jan\] (carried from v1); consistent with \[SOWChecklist\] §10 (still marked not started as of 17 Mar) and \[GoLive\] F3 (deferred to Phase A3, no date).

**Interim decision (2026-08-03, direct client instruction):** for now, COA is handled as a plain **attachment at the doctype level** --- attached to the relevant document (batch/DN/etc.) as a file, not via a structured masking/blinding system. This resolves the immediate \"how do we handle COA today\" question without waiting on the full masked-vs-full-copy build.

**Still open (deferred, not urgent given the interim approach):**

Whether a structured masked-vs-full COA distinction gets built later, and which customers would need it.

Which customer profile field would drive that distinction, if/when built.

**Precise client question (lower priority given the interim decision):** \"Is the plain-attachment approach sufficient long-term, or does masked/blinded COA generation need to be scoped for a later phase?\"

**SL-9 --- Batch intake / K1 / stock-entry document package**

*(was AIP-03, reinforced by active stock-ingest work)*

**Status:** AGREED IN PRINCIPLE --- NOT LOCKED\
**Confidence:** MEDIUM

**Agreed direction:** Batch intake should capture batch/lot, expiry, K1 where relevant, COA PDF, and tax/restriction status \[SOW\]. This is no longer purely conceptual --- \[StockIngest\] (26 Jun 2026) documents an active ingest effort covering batch ID, quantity, base UOM, warehouse, and inbound/outbound traceability against a real Holsen Excel dataset.

**What the active ingest work resolves:** basic batch record structure (batch ID, quantity, item linkage, single-warehouse model --- Holsen uses only HQ, confirmed the only default warehouse; see SL-33 retirement note below).

**Resolved 2026-08-03 (direct client instruction):** K1, like COA (SL-8), is handled as a plain **attachment at the doctype level** for now --- not extracted into structured fields. Closes open item 1 below.

**What remains open:**

~~Whether K1 is extracted into structured fields or only attached as a tagged document~~ --- **resolved above**: attachment at doctype level, for now.

Whether backend batch-creation support (flagged as a blocker in \[StockIngest\] --- \"batch cannot be uploaded properly through the standard frontend flow\") has actually landed.

**Most critically:** the ingest brief has no mechanism at all for SL-30\'s customer-allocation-lock problem --- it preserves customer context on outbound movement rows where available, but does not reserve/lock quantity to a customer in advance.

**Precise client question:** \"Has the backend batch-ingest mechanism referenced in the Stock Ingest handover actually shipped?\" (K1/COA document-format question resolved 2026-08-03, no longer open)

**SL-11 --- Dashboard / role-based visibility**

*(was AIP-05, cross-referenced to the now-better-specified permission matrix)*

**Status:** AGREED IN PRINCIPLE --- NOT LOCKED\
**Confidence:** MEDIUM

**Agreed direction:** Different roles need different dashboard views \[Setup-18Mar\] (carried from v1). The underlying access-control matrix is now well-specified --- see SL-16 --- but dashboard widget-level content per role is not.

**Open implementation decisions:**

Which dashboard widgets each role sees (distinct from document-level CRUD/SUBMIT rights, which SL-16 now answers).

Whether users can self-configure or Mindhive must configure.

S1--S4 sales-designation customer-visibility scoping --- \[FR-18Mar\] defines this in detail (S1/S2 full access, S3/S4 subset-only) as a Critical-priority feature targeted for the original 31 Mar go-live; status against the live system not re-verified this rerun.

**New (2026-08-03, direct client instruction):** a dedicated salesperson performance dashboard --- see SL-41, split out as its own item since it\'s a distinct, named requirement, not just a generic \"role sees a dashboard\" statement.

**Precise client question:** \"Please confirm the dashboard widget set per role, separate from the document permission matrix which is now defined.\"

**SL-41 --- Salesperson performance dashboard (volume-based)**

*(NEW, 2026-08-03, direct client instruction)*

**Status:** AGREED IN PRINCIPLE --- NOT LOCKED\
**Confidence:** MEDIUM --- direction is clear, build detail is not

**Agreed direction:** Holsen requires a salesperson performance dashboard. The tracked metric is explicitly **sales volume, not price/revenue value** --- i.e. rank/measure salespeople by quantity moved, not by RM value of orders.

**Why this matters, not just a generic dashboard ask:** this is a specific, deliberate choice --- volume over price --- which the client stated directly rather than leaving to MAIA\'s default framing. Given SL-10\'s finding that pricing is manual/verbal and inconsistent per order, a price-based leaderboard would be a noisy, unfair metric; volume is the more stable and meaningful one for Holsen\'s actual sales motion.

**Open implementation decisions:**

Time period(s) for the dashboard --- daily/weekly/monthly/custom.

Which unit(s) volume is measured in --- likely kg/tonnage given Holsen\'s chemical trading business, needs confirmation given mixed trading/manufacturing SKUs.

Whether this sits inside the existing role-based dashboard work (SL-11) or ships as a standalone view.

Who can see it --- likely Ng Tze Chien (Sales Manager) and above, not every salesperson seeing peers\' numbers, but unconfirmed.

**Precise client question:** \"What volume unit(s) and time period(s) should the salesperson performance dashboard use, and who besides the salesperson themself should be able to view it?\"

**SL-12 --- SQL transition / API integration**

*(was AIP-06, updated with a concrete date)*

**Status:** AGREED IN PRINCIPLE --- NOT LOCKED\
**Confidence:** MEDIUM

**Agreed direction:** Holsen is migrating from UBS to SQL Accounting on-prem. v1 cited a 1 Aug target from \[CP-11Feb\]; \[PMHB\] (2026-08-02/03) restated this as \"starting August 2026.\" **Confirmed 2026-08-03: Holsen already went live on SQL (localhost on-prem server) 1 August 2026** --- the migration date held. However, **only master data (item, customer) exists in SQL so far --- zero transaction data or stock ledger.**

**Integration kickoff (2026-08-03):** Ivan messaged the Holsen group requesting (1) a dedicated SQL service account for MAIA to integrate with, and (2) confirmation that the necessary SQL functionality is enabled for API integration --- this is the trigger for the technical integration work itself, separate from the business-flow agreement below. Gareth followed up directly with Tam Ze Xin same day to align on status and approach.

**Push/pull direction --- resolved:** MAIA will **not pull** from SQL --- there\'s no transaction data there yet to pull. Confirmed flow: UBS → manual entry → MAIA → sync (push only) → SQL, once verified correct. See SL-4 for full detail. Only the tax charge amount (not C1/C3 exemption logic) is in scope for the push.

**Cutover approach --- clarified, not a big-bang switch:** historical UBS transactions are being manually re-entered into MAIA (in progress, targeting the three opening days of August --- 3rd, 4th, 5th --- before the 5 Aug training session). Going forward, transactions are created and maintained in MAIA and pushed to SQL, not entered in SQL directly and pulled.

**Push-timing gate (clarified 2026-08-03):** after the 5 Aug training, **all data is maintained in MAIA first** --- MAIA is the system of record going forward, not SQL. The push action to SQL only starts once the credential and API access are actually set up from Holsen\'s vendor (the three items below) --- not before. If that access isn\'t ready yet, the push simply stays on hold; this is safe precisely because Holsen hasn\'t taken any action in SQL yet beyond master data, so there\'s nothing to conflict with or roll back. This decouples the two workstreams: MAIA-side data maintenance does not need to wait on vendor access, and vendor-access setup does not need to wait on MAIA readiness --- they can run in parallel.

**Vendor access workstream (parallel, does not wait on MAIA go-live):** while MAIA-side readiness is pending, integration access setup with Holsen\'s SQL vendor can proceed now. Three items to request from the vendor, to allow Mindhive access:

SQL login with a test user account.

API user credential.

A duplicate account cloned from production (for safe integration testing without touching live data).

**Still open:**

Which SQL vendor/API option and connection mechanism (service account, enabled SQL functionality) --- requested 2026-08-03, not yet confirmed set up. The three vendor-access items above are the concrete next step to unblock this.

Whether the manual August back-entry is verified accurate before it\'s used as the basis for the first push to SQL --- ties to SL-37.

Whether the 5 Aug training session runs against a production instance already connected to SQL, or Mindhive does an internal full-sync test first --- Ivan\'s message explicitly floated both options and asked the team to align on which before Wednesday.

**Still-blocking dependency (for the push itself, not for vendor-access setup):** the sync-readiness check is blocked by SL-37 (stock/batch data ingest accuracy) for any data beyond the freshly-entered August transactions.

**Precise client question:** \"Can Holsen contact their SQL vendor now to arrange the three access items (test SQL login, API credential, production-duplicate account), independent of whether MAIA\'s own push-readiness is confirmed yet?\"

**SL-16 --- Permission matrix**

*(was NS-04; UPGRADED to LOCKED 2026-08-03 per direct client instruction --- role permissions are clear, confirmed against the Customer Onboarding Checklist)*

**Status:** LOCKED\
**Confidence:** HIGH

**Source:**\[SOWChecklist\] §7 documents a dev-configured, granular CRUD/SUBMIT matrix across 7 named roles (Sales Manager, Logistics Manager ×3 sub-roles, Finance Manager, Admin, System Admin) and 11 document types. \[UATForm\] Tests 15--22 independently specify the same access pattern per named individual. \[OnboardChecklist\] (Lark, Customer Onboarding Checklist --- Holsen) and \[B4A\] (2026-08-03) both cross-check the same roster and matrix and treat it as current operating fact.

**Why now LOCKED (2026-08-03):** three independent sources already agreed in detail (strong grounding), and the client confirmed directly that the role/permission definition itself is clear and does not need further scoping --- the Customer Onboarding Checklist\'s permission matrix is the authoritative reference. Formal UAT sign-off (SL-40) remains a separate, still-open paperwork item, but it no longer gates whether this scope item is locked --- the definition itself is settled.

**Locked definition:** Sales Manager --- full CRUD+SUBMIT on Quotation/PO only, read-only on SO/Invoice/DN. Logistics (Logistics) --- full CRUD+SUBMIT on SO/DN/Pick List/Inventory. Logistics (Procurement) --- read + submit-only on SO/DN, full CRUD on Incoming Goods. Logistics (Production) --- read-only on Pick List/Inventory, no document access. Finance --- full CRUD+SUBMIT on Invoice/Receipt/SO/DN. Admin/System Admin --- full access to everything.

**Acceptance criteria:**

Matrix matches the Customer Onboarding Checklist\'s permission table exactly, per role.

Logistics (Production)\'s minimal access is confirmed intentional (not a data gap) --- per client instruction, this is accepted as-is.

Warehouse floor-staff access continues to sit under the Logistics (Logistics) role (Noor Aili Nafiah) rather than a separate warehouse login --- accepted as-is, see SL-32.

UAT Tests 15--22 sign-off remains tracked separately as a paperwork item (SL-40), not a blocker to this lock.

**6. Needs-Scoping Register**

  ------------------- ------------------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------
  ID                  Item                                                         What is unclear                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Who decides                                                                       Blocking?                                                                                                             Sources

  SL-13 (was NS-01)   Low/out-of-stock alerts                                      \[SOWChecklist\] marks both Out-of-Stock and Low-Stock alerts as built \[x\]; but \[PMHB\] §1 records a live bug in the 15 May session --- \"stock out-of-stock notification not firing.\" Direct contradiction between the checklist\'s claimed status and the live-tested reality. Threshold/channel/recipient still undefined per v1. **Clarified 2026-08-03 (direct client instruction): treat as \"to be tested,\" not a blocker** --- does not gate go-live or any other item.                                                                                                                                                                                                                                                                                                                                                                                            Holsen + Mindhive dev                                                             **No***(downgraded from Yes, 2026-08-03)*                                                                             \[SOWChecklist\], \[PMHB\], \[UAT-15May\] (carried)

  ~~SL-33~~           ~~DN default-warehouse bug~~                                 **RETIRED 2026-08-03, per direct client instruction.** Confirmed Holsen has exactly one warehouse (HQ) in real operation --- the original bug (DN pre-selecting a wrong warehouse instead of Main) cannot occur once the system is configured to reflect that there is only ever one warehouse to select. Retiring this id rather than reassigning it, per this skill\'s numbering rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ---                                                                               No --- retired, not applicable                                                                                        \[DevBrief\] B1/B2 (original bug report), \[StockIngest\] (single-warehouse confirmation), direct client instruction 2026-08-03

  SL-15 (was NS-03)   Batch validation strictness                                  Whether missing/wrong batch blocks submission or only warns --- still undefined. Distinct from SL-30\'s allocation-lock problem and SL-35\'s carry-over-reliability problem; this is specifically about pre-submit validation strictness.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Holsen ops/compliance                                                             Yes                                                                                                                   \[Setup-18Mar\] (carried), \[DevBrief\] B2 (related pattern on DN stock check)

  SL-17 (was NS-05)   UBS/MAIA document authority                                  Whether MAIA\'s DN/SO is operationally accepted as authoritative pre-SQL, now sharpened by the August SQL timeline (SL-12) --- the window for this ambiguity to matter is closing, not opening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Chin / Tam                                                                        Yes                                                                                                                   \[CP-11Feb\] (carried), \[PMHB\]

  SL-18 (was NS-06)   COA / document bundle defaults                               Unchanged from v1 --- no new evidence.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Holsen lab/compliance                                                             No, unless COA automation enters current sprint                                                                       \[CP-08Jan\] (carried)

  **SL-30**           **Batch allocation lock across mixed-exemption customers**   One incoming batch (e.g. 10,000kg) routinely split across multiple customers with mixed C3 status; MAIA has no mechanism to reserve/lock a portion to one customer, so a non-exempt customer\'s order can draw down stock past the point where the exempt customer\'s reserved quantity should be protected. Mr. Tam\'s direct quote: *\"I don\'t know how to lock the quantity\... no one else can touch the quantity besides that customer.\"* Current workaround is informal --- Holsen manually tracks/reassigns batch-to-customer attribution outside MAIA (\"creative bookkeeping\"). Mindhive confirmed on the spot: *\"right now, what we have implemented is\... don\'t have any validation, allocation\"* --- unbuilt. **Confirmed 2026-08-03 (direct client instruction): this is explicitly deferred to the next phase (A3), not expected in the current build.**   Holsen + Mindhive product/dev                                                     **Yes for A3 scoping --- client called this more critical than any other open bug in that phase**                     \[PMHB\] §2, 2026-05-15 Granola transcript

  **SL-31**           **C1/C3 DN/Invoice-level enforcement --- NEEDS RETEST**      SO-level enforcement (SL-22) is confirmed working. The 15 May UAT session stalled at DN creation specifically because C3 line items require a batch/serial assignment first --- *\"that\'s why it\'s not fully tested yet\... because the C3 needs a batch.\"* DN/Invoice-stage behaviour has never been tested, live or otherwise. **Marked 2026-08-03, direct client instruction: explicitly needs a fresh retest** --- the original blocker (batch assignment sequence) is now clarified (SL-5: batch is binding at Pick List, SL-35: carries forward to DN/Invoice via Additional Notes), so the DN/Invoice-level C1/C3 test can actually be attempted again, not left waiting indefinitely.                                                                                                                                                                                Holsen + Mindhive dev                                                             Yes --- blocks A3 commercial balance discussion, and now actionable (retest, not just \"wait\")                       \[PMHB\] §1, SL-5, SL-35

  **SL-32**           **Pick List link notification to warehouse**                 **Confirmed intended design (2026-08-03, direct client instruction):** warehouse staff are notified and receive a direct Pick List link, which they use to update the picked quantity --- this is the confirmed target flow, not merely a proposal. Live-firing status as of 25 Jun go-live prep was confirmed broken (\[DevBrief\] B8) --- warehouse staff had no way to know a pick list was ready. Whether this is now fixed in production is not independently re-verified this rerun. Dev Brief is explicit this \"is not a feature request --- it is required for Holsen\'s go-live workflow\" since warehouse staff don\'t use the frontend at all.                                                                                                                                                                                                                      Mindhive dev, Gareth to confirm recipient with Mr. Tam                            **Yes --- required for go-live workflow, warehouse\'s only touchpoint; verify it\'s actually firing in production**   \[DevBrief\] B8, \[GoLive\]

  **SL-34**           **Tax override hierarchy (Item \> Customer \> System)**      Some items are \"No Tax\" at item level while system/customer default is 10%; item-level override behaviour across all three scenarios (customer 10% + item no-tax; system default + item no-tax; SO line-level override vs item-master inheritance) is unverified.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Ivan / Dev, confirm with Holsen                                                   No --- P2 verify, not a blocker per \[GoLive\]                                                                        \[DevBrief\] B4

  **SL-35**           **Batch carry-over across SO / Pick List / DN / Invoice**    **Resolved mechanism (2026-08-03, direct client instruction):** batch number carries forward across all four documents --- Sales Order, Pick List, Delivery Note, and Invoice --- via the **Additional Notes field** on each doctype, not a dedicated structured/enforced batch-linkage field. This is a simpler, lower-guarantee mechanism than the original test cases assumed (HOL-LOG-DN-PL-001/002, \[DNPL\], UAT Tests 11A/11B, which were written against a stricter structured-carry-over model) --- re-write those test cases against the Additional-Notes mechanism rather than assuming a hard link.                                                                                                                                                                                                                                                                 Noor Aili (recommended tester), Dev                                               Yes --- test cases need rewriting against the actual mechanism                                                        \[DNPL\], \[DevBrief\] B5, \[GoLive\], direct client instruction 2026-08-03

  **SL-36**           **Finance-approval-before-DN gate discrepancy**              \[ConfigOverlay\] and the Holsen User Guide describe a Finance-approval step (order accuracy + credit limit/term check) before a DN can be created. The client-confirmed live flow (\[B4A\], 2026-08-03) has Logistics checking and submitting the SO directly, with no confirmed Finance gate in between --- even though Finance\'s permissions (SL-16) would allow her to do it. Unclear whether credit checking happens informally by whoever has access, or was dropped entirely.                                                                                                                                                                                                                                                                                                                                                                                           Holsen (Mr. Tam) + PM                                                             Yes --- affects whether credit risk is actually being checked at all                                                  \[ConfigOverlay\], \[B4A\]

  **SL-37**           **Stock/batch data ingest accuracy**                         Batch quantity per item and stock reconciliation from Holsen\'s Excel ingest is not tallying against MAIA. Plan is to re-ingest; if discrepancies persist, Holsen falls back to manual stock reconciliation. Directly blocks the August SQL sync readiness check (SL-12).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Holsen Lab + Gareth/dev                                                           Yes --- blocks SQL sync                                                                                               \[StockIngest\], \[PMHB\]

  **SL-38**           **Credit limit approval workflow (not yet enabled)**         Config Overlay/Client Overview describe a credit-limit/term check routed to Finance approval; \[PMHB\] states this is not yet enabled and needs clarification with Mr. Tam before turning on --- approval is expected to route to Mr. Chin (boss/credit controller) when a customer\'s credit exceeds their limit at order creation, but this isn\'t live.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Holsen (Mr. Tam), Gareth/PM                                                       No --- not blocking current operations, but blocks Finance-feature rollout                                            \[ClientOverview\], \[ConfigOverlay\], \[PMHB\]

  **SL-39**           **Meta/WhatsApp cutover from Telegram UAT bot**              Unclear whether go-live actually moved off the Telegram UAT bot (@maia_holsen_bot) onto WhatsApp via Meta. The June User Guide still references Telegram.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Holsen + Mindhive                                                                 No --- operationally significant but not commercially blocking                                                        \[PMHB\], \[B4A\], User Guide (not in vault)

  **SL-40**           **UAT formal sign-off (Tests 1--36)**                        No completed results or signature exist on the UAT form despite most tests --- including the C1/C3 tests 24--36 --- having been live-tested with the client. This is a paperwork gap, not a testing gap, but it blocks formally reporting A3 progress or triggering the contingent commercial balance.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Holsen (signatory TBD --- no named UAT signatory confirmed anywhere in this KB)   **Yes --- before commercial balance discussion**                                                                      \[UATForm\], \[PMHB\]
  ------------------- ------------------------------------------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- --------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------

**7. Supersessions Log**

  -------- ------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------- ------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------
  Risk     SOW said                                                                                                           Now intended                                                                                                                     Changed by / when                                                 Rationale                                                                       Client agreed?

  High     MAIA generates Invoice as an output document \[SOW\]                                                               UBS remains official invoice source during transition; SQL replaces UBS from Aug 2026                                            Feb 11 discussion (v1) + \[PMHB\] Aug 2026 date (v2)              UBS/SQL e-invoice compliance path                                               YES on UBS-period arrangement; SQL date reported, not independently verified

  High     C3 set up as separate SKU / compliant stock shown \[SOW\]                                                          C3 tracked as item + customer + quota; SO-level mechanics now built and live-tested; batch-level allocation lock still unbuilt   Jan/Feb compliance discussions (v1) + 15 May 2026 live UAT (v2)   C3 is customer/order/quantity-based, not pure SKU classification                YES on SO-level (SL-22); batch-lock (SL-30) confirmed unbuilt, not yet agreed as scoped for A3

  Medium   Poison form is manual alert only \[SOW\]                                                                           MAIA auto-generates PSO, fully specified via Test 23                                                                             Feb/May UAT                                                       Reduce manual workload                                                          YES, template fields largely defined

  High     Automatic customer pricing retrieval, \"no manual cross-checking required\" \[SOW\]                                RM0 default, manual entry the norm, customer pricing the exception not the rule                                                  Go-Live prep, 25 Jun 2026 (\[DevBrief\])                          Actual Holsen pricing runs through verbal boss approval, not system auto-fill   YES --- Gareth\'s own dev-facing operational write-up

  Medium   Delivery Note carries batch selection into picklist, confirmed by 15A/15B tests written against a DN-stage model   Batch selectable at both SO (indicative) and Pick List (binding), confirmed 2026-08-03 per direct client instruction             \[B4A\], SL-5, 2026-08-03                                         Client-stated clarification resolving the earlier apparent conflict             YES, directly instructed --- resolved
  -------- ------------------------------------------------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------------------------------------- ----------------------------------------------------------------- ------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------

**8. Out-of-Scope / Explicit Exclusions**

**SL-19 --- A57 active workflow**

*(was OOS row 1, unchanged)*

**Status:** OUT OF SCOPE\
**Reason:** A57 is understood but currently not used by Holsen; not in current build unless explicitly added.\
**Source:**\[CP-11Feb\] (carried from v1). \[Narrative\] lists \"whether A57 should appear as a live workflow, a supported-but-not-current workflow, or a future consideration\" as an open discovery gap --- still unresolved in v2, consistent with the exclusion.

**SL-20 --- UN code / hazard class / JPJ transport sophistication**

*(was OOS row 2, unchanged)*

**Status:** OUT OF SCOPE\
**Reason:** Client indicated PSO matters now; UN/hazard/JPJ transport handling has lower current value.\
**Source:** Fireflies Feb 11 (carried from v1).

**SL-21 --- Unsupported third-party integrations outside approved scope**

*(was OOS row 3, unchanged)*

**Status:** OUT OF SCOPE\
**Reason:** SOW caveat excludes unsupported third-party integrations outside approved scope.\
**Source:** Carried from v1.

**Also confirmed out of scope for Phase A1/current build (from \[Narrative\], not previously itemised in v1 but consistent with the exclusions above --- folded into this section as context, not separately numbered):** direct UBS API integration; re-ingesting UBS e-invoice metadata back into MAIA; full delivery-side batch enforcement; warehouse segregation enforcement; delivery-note-based quota-ledger updates; batch/location-level audit module; automated legal determination of tax status; automatic order/pricing/compliance sign-off.

**9. Source-Conflict Register**

  ------------------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Conflict                                                     Source A                                                                                                                                      Source B                                                                                                            Resolution

  Invoice generated by MAIA vs official UBS invoice            SOW includes invoice output generation \[SOW\]                                                                                                Compliance notes say UBS invoices are the official source during transition \[CP-11Feb\]                            **LOCKED (SUPERSEDED)** --- SL-4. UBS official during transition, SQL from Aug 2026.

  C3 as separate SKU vs C3 as customer/item/quota allocation   SOW says C3 items set up as separate SKUs \[SOW\]                                                                                             Current process says C3 must be item → customer → quantity/quota \[CP-11Feb\], \[Narrative\]                        Resolved --- SO-level mechanics locked (SL-22); item-flag approach superseded.

  **Batch selection stage: DN-time vs SO-time**                SOW, Working Holsen, \[DevBrief\], \[DNPL\], \[UATForm\] Tests 11A/11B --- all describe batch selected at DN creation, carried to Pick List   \[B4A\], corrected 2026-08-03 per direct client instruction --- batch assigned on the SO itself, before DN exists   **RESOLVED 2026-08-03**, direct client instruction: batch is selectable at both SO (indicative only) and Pick List (binding). Neither prior source was fully wrong --- see SL-5.

  Low/out-of-stock alerts: built vs not firing                 \[SOWChecklist\] marks both alerts as built \[x\]                                                                                             \[PMHB\] records a live bug --- out-of-stock notification not firing, 15 May session                                **Non-blocking per 2026-08-03 client instruction** --- see SL-13. Still to be tested, but does not gate anything else. The checklist predates the live bug discovery; treat the checklist\'s \[x\] as stale, not current truth.

  Finance-approval-before-DN gate                              \[ConfigOverlay\], User Guide (not in vault) describe Finance reviewing order accuracy + credit before DN                                     \[B4A\] client-confirmed flow has Logistics submitting SO directly, no Finance gate visible                         **UNRESOLVED** --- see SL-36.

  K1 on DO + invoice vs invoice-only reference practice        SOW says K1 appears on Delivery Order and Invoice \[SOW\]                                                                                     Later discussion narrows exemption-number visibility, DN may not need cert reference (carried from v1)              **Partially resolved 2026-08-03** --- K1 handled as a plain attachment at the doctype level, for now (see SL-9). Which documents it\'s attached to specifically still folded into SL-31.
  ------------------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**10. Client Confirmation Agenda**

Send this list into the next Holsen confirmation conversation. Items carried from v1 that are now answered have been removed; new items reflect the deltas above.

**Resolved 2026-08-03, no longer on this agenda:** batch selection stage (SL-5 --- both SO and Pick List, PL binding), permission matrix (SL-16 --- locked against the Customer Onboarding Checklist), COA/K1 document handling (SL-8/SL-9 --- attachment at doctype level, for now), batch allocation phasing (SL-30 --- confirmed deferred to A3), invoice/SQL flow (SL-4 --- create in MAIA, sync to SQL), batch carry-over mechanism (SL-35 --- Additional Notes field), low-stock alert priority (SL-13 --- downgraded to non-blocking, still to be tested).

**Batch allocation lock (top priority for A3 scoping):** How should MAIA reserve/lock a portion of a split batch to a specific C3-exempt customer so a non-exempt customer\'s order cannot draw it down? What\'s the minimum viable version Holsen needs? (SL-30)

**DN/Invoice-level C1/C3 --- schedule the retest:** Batch assignment is no longer the blocker (SL-5/SL-35 clarified) --- can Holsen and Mindhive schedule a session to actually retest whether the SO-level submit-block/confirmation-prompt pattern also holds at DN/Invoice stage? (SL-31)

**UAT sign-off:** Can Holsen formally tick Pass/Fail on Tests 1--36 (most of which have already been live-tested) and provide a named signatory? This is closing paperwork, not re-running tests. (SL-40)

**Pick-list notification --- production verification:** Design is confirmed (warehouse gets notified + a link to update picked qty) --- is it actually firing correctly in production today? Which WhatsApp/Telegram number or group receives it, and does the link need authentication? (SL-32)

**Finance approval gate:** Is the Finance/credit-check step before DN creation still expected to happen, and if so, where in the current Logistics-led flow does it sit? (SL-36)

**Credit limit approval:** Confirm before enabling --- should breaches route to Mr. Chin as described, and is this ready to turn on? (SL-38)

**SQL migration date:** Is August 2026 still firm given the open stock-ingest discrepancies? (SL-12, SL-37)

**Meta/WhatsApp cutover:** Has go-live actually moved off the Telegram UAT bot? (SL-39)

**Batch-ingest backend:** Has the backend batch-creation mechanism referenced in the Stock Ingest handover actually shipped? (SL-9)

**Dashboard widgets per role:** Separate from document permissions (now defined), which dashboard widgets/metrics does each role need? (SL-11)

**Salesperson performance dashboard:** What volume unit(s) and time period(s) should it use, and who besides the salesperson themself should be able to view it? (SL-41)

**Batch carry-over test cases:** Rewrite and run HOL-LOG-DN-PL-001/002 against the confirmed Additional-Notes-field mechanism rather than the old structured-link assumption. (SL-35)

**Bottom line**

The stable buildable/operating core has grown since v1: PO intake, C1 certificate logic, PSO generation, C3 mixed-order handling, SO-level C1/C3 enforcement end-to-end (create → apply → HS-match → submit-block), drawdown billing, SKU-tag pricing/tax defaults, no-discount-display, minimum-price hard block, and the no-own-fleet delivery model are all locked and either live-tested or live-verified on production. That is materially more than v1 could claim.

But the single most consequential gap has also sharpened, not shrunk: batch allocation across customers with mixed C3 exemption status is confirmed unbuilt, and the client has explicitly flagged it as more critical than any other open item. Do not let the build team, or any commercial conversation about the A3 balance, treat C1/C3 as \"basically done\" --- it is done at the SO level and genuinely open at the batch/DN/Invoice level, which is where the compliance risk that matters to Holsen actually lives. Alongside that: the DN-vs-SO batch-assignment conflict, the never-signed UAT form, and the still-untallying stock ingest data are three separate loose threads that could each independently derail the August SQL cutover if left unresolved. None of them are \"small.\"

**See Also**

Holsen --- PM Handover Brief

Holsen --- Before vs After MAIA Workflow

SOW for MAIA Holsen

Working Holsen

Holsen SOW Feature Checklist

Holsen Feature Requests - 5 March Training

Feature Requests - Holsen \<\> MH MAIA Setup & Testing

Config Overlay

Client Overview

Onboarding Status

Holsen Phase 1 Closure Backward Plan

Holsen Go-Live Action Plan - 2026-06-25

Dev Brief - Holsen UAT Issues - 2026-06-25

DN to Pick List - Batch Number Test Cases

Handover Brief - Holsen 2026 Stock Ingest - 2026-06-26

MAIA UAT Form - Holsen - 2026-03

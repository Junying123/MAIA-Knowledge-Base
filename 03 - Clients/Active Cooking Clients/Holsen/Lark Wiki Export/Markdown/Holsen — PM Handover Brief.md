**Holsen --- PM Handover Brief**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Gareth is resigning from Mindhive and handing off the Holsen account. This is the starting point for the incoming PM --- read it top to bottom, then verify anything open directly with the client and the dev team before acting on it.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Quick Start**

**Client:** Holsen --- a wholesale/distribution chemical business running order-to-cash on MAIA.

**Phase:** Core MAIA (Phase A1) went live around 25 June 2026, later than the original 31 March target. Batch handling and C1/C3 compliance (Phase A3) are deferred to after go-live.

**Two things to sort out first:**

**Confirm whether Holsen is actually live.** One status note from late June says \"confirm live vs slipped\"; a note from early July already treats the client as live. Get a straight answer from Holsen directly before reporting status anywhere.

**Meet the actual team.** The full contact roster is below --- reach out to introduce yourself as the new PM, especially to Tam Ze Xin, who\'s the primary point of contact.

**Who\'s Who at Holsen**

**Tam Ze Xin** --- Sales, and also handles Admin/Operations. Primary contact. Phone +60124295751, email holsenlab@gmail.com.

**Ng Tze Chien** --- Sales.

**Wong Shui Fern** --- Finance.

**Noor Aili Nafiah** --- Logistics. Holds the widest day-to-day operational access --- checks and submits Sales Orders, assigns batch numbers, creates Delivery Notes.

**Intan Atikah** --- Procurement (Logistics team).

**Murugesu A/L Palanivello** --- Production (Logistics team). His actual system access isn\'t documented --- worth confirming.

**Ong Siow Chui** --- System Admin.

**Chin Zhao Heng** --- the boss. Also System Admin, with full access to everything. He\'s the one who signs off credit-limit overrides.

**Delivery:** Holsen has no delivery fleet of its own. Everything goes through third-party transporters --- Menaka for local deliveries, GMax and Tiong Nam Logistics for outstation.

**Holsen Folder to check**

Docs to UAT with Holsen : [MAIA UAT Form - Holsen - March 2026 Copy](https://eg69120xnei.sg.larksuite.com/wiki/Sl7zwQ7fkiDbhMkT3K4lTMBqgKb)

Onboarding checklist: [Holsen - Customer Onboarding Checklist](https://eg69120xnei.sg.larksuite.com/wiki/JIBlwXDQziTP6pk7HnJlKvCtgWc)

**Sample docs (client-provided):** [Google Drive folder](https://drive.google.com/drive/folders/1o56UJmTAk9CsefX6fj6JoyJnC6FnGI_T)

Overall folder (internal) : https://eg69120xnei.sg.larksuite.com/drive/folder/O1BNf9ZsQl2WwbdWFqhl69pOgpc

Scope lock : [Holsen --- Scope Lock v2](https://eg69120xnei.sg.larksuite.com/wiki/U067wkJJPiAUogkUGYll9rxKgbA)

Workflow : [Holsen --- Before vs After MAIA Workflow](https://eg69120xnei.sg.larksuite.com/wiki/GLBswfECPi06ZVkxohxleTdagHb)

**Status Summary**

**Live and Confirmed**

  --------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                                                Detail

  Core order-to-delivery flow                         Chatbot intake, Sales Order, Delivery Note, workspaces --- live since \~25 June 2026

  PSO (Poison Sign Order)                             Built and tested for hazardous chemical items --- a handful of config items were still pending as of March and may not be resolved

  Drawdown billing (one delivery, several invoices)   Confirmed working on Holsen\'s live system, tested directly on 2 August 2026. Not written up anywhere yet --- just verified live

  C1/C3 tax exemption --- Sales Order level           Confirmed working through real client testing in May 2026 --- certificate creation, PDF upload, applying a certificate to an order, and blocking an order when an item isn\'t covered all tested live and working. Still missing: a signed-off test record, and confirmation the same logic works at Delivery Note / Invoice stage
  --------------------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Deferred to the Next Phase**

  ------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                                              Detail

  C1/C3 at Delivery Note / Invoice stage            Testing stalled because those documents need a batch number assigned first, and batch handling isn\'t built yet

  Batch-level stock allocation                      Expiry-based picking and full compliance tagging --- not started as of the last checklist review; the most business-critical part isn\'t even scoped in detail yet (see Batch Allocation below)

  Customs traceability (K1)                         Needs to link to batches --- not built

  Certificate of Analysis generation and blinding   Not built

  A57 tax exemption                                 A special exemption for specific customers --- not yet enforced
  ------------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Open --- Needs Verification**

  ------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Item                                       Detail

  Formal UAT sign-off                        Never formally closed

  Go-live bug cluster                        Default warehouse selection, stock check, payment due date, tax override, batch-to-picklist handoff, minimum price enforcement, discount display, pick-list notifications --- open as of late June, no confirmed fix since

  Stock/batch data accuracy                  Initial upload quantities aren\'t tallying against Holsen\'s own records. Blocks the accounting-system sync below until resolved

  Refresher training                         Tentatively planned, never confirmed by the client

  Accounting-system sync                     Migration from CSV export to a direct sync with Holsen\'s new system, starting around August 2026. Confirm all master data, stock, and documents are accurate before syncing anything

  Credit-limit approval workflow (Finance)   Built but not switched on --- needs sign-off from Tam Ze Xin. When active, anything over a customer\'s limit routes to Chin Zhao Heng for approval

  WhatsApp cutover                           Unclear whether the client has actually moved off the test messaging channel to WhatsApp for real orders

  Multiple credit notes per invoice          Platform-wide limitation, not specific to Holsen --- not something to promise a fix for
  ------------------------------------------ ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**C1/C3 Tax Exemption --- Deep Dive**

**What C1 and C3 mean:**

  ----------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Term        Meaning

  C1          A customer\'s manufacturer tax-exemption certificate. Reusable, doesn\'t expire per order --- Holsen just records the certificate number on each invoice. Can sit alongside non-exempt items on the same order

  C3          A one-off, per-order exemption tied to a specific purchase order and an appointment letter. Quantity-based, can\'t be mixed with other order types --- always needs its own delivery note and invoice

  Jadual C2   Holsen\'s own internal tax-compliance ledger, not a MAIA feature --- MAIA\'s job is just to give Holsen clean exports they can use to fill it in

  K1          A customs declaration number tied to imported goods under C3, which needs to trace through to the batch, delivery note, and invoice
  ----------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**How it\'s meant to work:** every batch of stock gets tagged Free, C1, or C3. C3 stock is locked to one specific customer. C1 is checked against a customer\'s certificate and its expiry date. Certificates can be created manually or by uploading a PDF, get linked to a customer, get applied to an order, and get checked against the item\'s tariff code --- if an item isn\'t covered, the system blocks submission.

**Where it actually stands (as of testing in May 2026):**

Creating a certificate, uploading it as a PDF, applying it to an order (both fully and partially covered), matching against tariff codes, and blocking uncovered items --- all of this was tested live with the client and worked.

What\'s still missing is a formal sign-off --- the test results were never checked off on the official test sheet, even though the testing itself happened.

Two bugs turned up during testing and were never confirmed fixed: uploaded certificates sometimes didn\'t show the correct tax reference on the finance side, and low-stock alerts weren\'t firing.

Testing never got past the Sales Order stage --- creating the Delivery Note requires a batch number, and batch handling isn\'t built yet, so nobody has confirmed C1/C3 actually works correctly once a Delivery Note or Invoice is involved.

A related feature checklist (delivery tracking, reminders, filtering, and export bundles for C1/C3) is still marked not started, but that checklist predates the May testing and needs a fresh look.

**Commercial note:** Holsen only paid 30% instead of the usual 50% at go-live specifically because this batch/compliance work slipped --- the rest is tied to shipping it. Worth tracking as a liability.

**Bottom line:** the core tax-exemption logic works and has been proven with the client --- don\'t undersell that. What\'s actually missing is the paperwork sign-off, the batch-dependent parts, and two known bugs.

**Still-open questions from an earlier meeting, never resolved:** how often Holsen needs to submit their internal compliance ledger; what exactly counts toward a \"lumpsum\" figure for reporting; what a \"sign-off\" step is supposed to look like in the system; which customers get a full versus a masked certificate of analysis; and sticker label formats, which are stuck waiting on templates from the client.

**Batch Allocation --- Deep Dive**

This isn\'t a nice-to-have --- it\'s the foundation that C1/C3 enforcement and customs traceability both depend on. Treat all three as one piece of work, not three separate ones.

**What\'s working today:** a basic batch number field exists and can be picked when creating either a Sales Order or a Delivery Note. There\'s an open bug where the batch number doesn\'t reliably carry over from the Delivery Note into the Pick List --- status unconfirmed.

**The real, unsolved problem --- flagged directly by the client as more urgent than anything else in this area:** Holsen often receives one batch of stock that has to be split across several customers, some with a C3 tax exemption and some without. Today, there\'s no way to reserve part of a batch for one customer --- nothing stops a different customer\'s order from eating into stock that should have stayed protected for the exempt customer. Holsen currently works around this by manually tracking which batch belongs to which customer outside the system. The dev team confirmed this hasn\'t been built and it\'s planned for the next phase. **This should be the top priority when batch allocation gets scoped** --- not just a generic line item.

**Also unresolved:** during the same testing session, a permissions bug blocked the client\'s primary contact from creating certificates through the chatbot. A temporary workaround role was set up, but the issue wasn\'t fully fixed by the end of the session, and there\'s no record anywhere confirming it was fixed afterward.

**What\'s genuinely not built yet:**

  ------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Feature                   Detail

  Advanced batch intake     Mandatory lot number and expiry date at goods receipt (expiry drives pick order); mandatory customs form number for C3/imported goods; supplier Certificate of Analysis attached to the batch

  Tax/restriction tagging   Free Stock (sellable to anyone) / C1 Stock (customers with a valid C1 cert) / C3 Stock (locked to one customer)

  C3 allocation             C3 stock hard-locked to the designated customer; non-C3 customers see zero stock available for C3 items; admin-recorded movement log for compliance audit

  Customs traceability      Customs number linked permanently to the batch, auto-populated on the Delivery Order and Invoice

  Full pick-list workflow   Order triggers a pick list → Logistics confirms lot and quantity → delivery note generated from the confirmed pick → invoice follows

  Pick-list UI              Lot number dropdown showing available lots with quantity and expiry, plus a remark field for discrepancies
  ------------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Bottom line:** treat this as not started. Verify with the dev team directly before counting any of it toward the outstanding commercial balance.

**Drawdown Billing (One Delivery, Several Invoices) --- Deep Dive**

**The scenario:** a customer orders a full tonne, MAIA/Holsen deliver it all at once, and then invoice the customer in stages as they draw down the stock --- for example, four separate quarter-tonne invoices against that one delivery.

**Status:** confirmed working, tested directly on Holsen\'s live system on 2 August 2026.

**The gap:** none of the existing product documentation actually describes this. The documentation only covers the opposite direction --- one order split across several deliveries. How exactly the invoiced quantity gets tracked against what was delivered, whether there\'s a running balance shown anywhere, and when a delivery counts as \"fully invoiced\" --- none of that is written down. It\'s confirmed by testing, not documented.

**Bottom line:** safe to tell Holsen this is supported. Still worth writing it up properly so it isn\'t just something one person remembers.

**Pricing and Tax Defaults**

**Trading items default to a price of RM0** --- this is intentional, not a bug. Whoever creates the order has to manually type in the price every time, unless the customer already has a specific price on file, in which case MAIA uses that instead.

**Trading items default to 0% tax; manufacturing items default to 10% tax.** This is separate from the A57 exemption and separate from C1/C3 --- all three can affect the same invoice line, so don\'t assume a flat split without checking the item\'s classification.

**Action Checklist for the Incoming PM**

**This week:**

Confirm live status directly with Holsen.

Get the outstanding bug list confirmed with the dev team.

Chase down the root cause of the stock-data mismatch and get an ETA --- this also blocks the upcoming accounting-system sync.

**Before reporting progress on the next phase:**

Formally close and sign off the UAT test sheet --- the C1/C3 tests were actually run with the client, they just never got checked off.

Confirm whether C1/C3 actually works at the Delivery Note and Invoice stage, not just the Sales Order stage.

Re-verify the C1/C3 feature checklist against what\'s actually live --- it predates the May testing.

Re-verify batch allocation against what\'s actually live, especially the multi-customer allocation problem above.

**Before syncing with Holsen\'s new accounting system:**

Confirm all customer, item, and stock data in MAIA is accurate before pushing anything across --- this depends on the stock-data issue above being resolved first.

**Before turning on the Finance credit-approval workflow:**

Get sign-off from Tam Ze Xin before enabling it.

**Documentation to write:**

A short spec for drawdown billing --- it works, but nothing describes how.

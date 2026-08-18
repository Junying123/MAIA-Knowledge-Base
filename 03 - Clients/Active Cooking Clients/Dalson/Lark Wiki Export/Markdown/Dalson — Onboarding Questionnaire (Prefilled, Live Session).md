**Dalson --- Onboarding Questionnaire (Prefilled, Live Session)**

**Dalson Industrial Supplies --- Onboarding Questionnaire (Prefilled for Live Session)**

Prep doc for tomorrow\'s live session with **Yap Li Min** (Owner). Mirrors the official 12-section [MAIA Pre-Onboarding Requirements Questionnaire](https://eg69120xnei.sg.larksuite.com/wiki/FlCrwNJzdiVCadkCHzyliV0KgSe) (same template as the never-returned Dalson_MAIA_Onboarding_Questionnaire.docx). Every question is prefilled from existing sources or flagged as an open question --- goal is to leave nothing missed before UAT/go-live sign-off.

**Sources used:**Dalson Requirements gathering-transcript.md (2026-05-22) · \[\[Dalson --- VoC Extraction\]\] · Scope Lock v2 (Lark) · \[\[Dalson --- Before vs After MAIA and E2E Flow\]\] · \[\[Dalson --- UAT Checklist\]\] · \[\[Dalson --- End-user & Process Map\]\] · \[\[Dalson --- Lens Alignment Report\]\] · Dalson --- UAT Infopack/Dalson_UAT_Field_Guide_Play_It_Like_A_User.md · \[\[Dalson Industrial Supplies Customer Narrative Document\]\] · \[\[Dalson MAIA autocount integration\]\] · \[\[Dalson Phase 1 Timeline\]\] · dalson_industrial_supplies_facet.md.

**Legend:** ✅ Confirmed (source cited) · ⚠️ Assumed/inferred --- confirm live · ❓ GAP --- no source anywhere, ask tomorrow

**Ask Tomorrow --- Priority Gap List**

**Blocking / ★Critical --- must resolve before UAT sign-off:**

**Cash Sales Invoice support** --- confirmed gap 2026-07-31: Dalson does handle walk-in/cash sales (no PO, no formal customer record). MAIA has no cash-invoice type built (no front-end payment UI, chatbot flow, backend schema, or PDF/reporting). Not sized yet.

**SKU count (§4.1)** --- never answered in any source. Needed for SKU-matching design confidence --- the account\'s single most-cited pain point.

**§4.5 product-attribute checklist** (expiry/batch/serial/multi-UOM/bundles/variants/product images) --- never answered. Multi-UOM and variants are the most common SKU-mismatch trigger --- flag strongly.

**E-invoicing/LHDN compliance status (§7.7)** --- never independently confirmed for Dalson specifically (open sub-item under SL-11, currently NS/PARTIAL).

**SL-13 re-verification** --- \"quotation/SO-equivalent stays MAIA-only\" was downgraded HIGH→MED confidence (2026-07-31) after an uncited claim was rejected. Needs a properly attributed live-AutoCount check or direct re-confirmation from Yap Li Min.

**Identity / role gaps:**

**\"Dalson Multi Supply\" vs \"Dalson Industrial Supplies Sdn Bhd\"** --- same legal entity, or separate? (The registered contact email is dalsonmultisupply@gmail.com.)

**Driver identity conflict** --- the UAT Field Guide (2026-07-19) retired the \"Driver\" persona, stating delivery is 100% via Lalamove with no internal driver. The End-user & Process Map (2026-07-20, one day later) still lists \"Driver(s)\" as an open NEEDS CLIENT INPUT gap. Confirm definitively: is there ever an internal driver, or always Lalamove?

**UAT signatory** --- Yap Li Min sole signatory, or do Asilah/Joseph sign off their own portions?

**Asilah\'s visibility scope** --- sees only her own customers/orders, or all of Dalson\'s?

**Delivery method drift** --- the original onboarding doc pre-filled \"own fleet,\" but every later source (VoC, Scope Lock, Field Guide) says Lalamove (external courier, not a MAIA user). Confirm own-fleet is fully retired and was never actually in play.

**Section 1 --- Business Structure**

**1.1** How many companies or business entities are in your group?\
✅ 1 entity --- **Dalson Industrial Supplies Sdn Bhd** (Reg. 202401010775), incorporated March 2024. Address: No 8, Jalan PJS 11/8, 46150 Bandar Sunway, Petaling Jaya.\
❓ GAP #6 --- is \"Dalson Multi Supply\" the same legal entity or a separate one?

**1.2** Do all entities share the same ERP instance, or does each have its own?\
⚠️ N/A --- single entity, but confirm.

**1.3** Do the entities share the same customer/item database, or are they separate?\
⚠️ N/A --- single entity, but confirm.

**1.4** How many branches, warehouses, or office locations?\
✅ 1 location --- retail shop and warehouse at Bandar Sunway. Delivery covers all states in Malaysia.

**1.5** Do you operate in multiple currencies?\
⚠️ Assumed MYR only --- all known customers are domestic (auto shops, construction-related businesses). Confirm no foreign-currency suppliers.

**Section 2 --- Team & Roles**

**2.1** How many people will use MAIA day-to-day?\
✅ 3 registered MAIA users --- **Yap Li Min** (Owner, dual role as Sales Coordinator), **Asilah Amirah binti Khairuddin** (Sales Coordinator), **Joseph** (Admin/Store Keeper). Source: MAIA User List (Sample Data Checklist, Lark), cross-confirmed in End-user & Process Map.

**2.2** What roles/departments will use MAIA, and how many per role?

  -------------------------- -------------------------------------------- --------------------------------------------------
  Role                       No. of people                                Main use in MAIA

  Sales coordinator          2 (Yap Li Min + Asilah)                      Order intake, SKU/price confirmation, submission

  Store keeper / warehouse   1 (Joseph)                                   Receives confirmed order, packs

  Delivery                   0 internal --- Lalamove (external courier)   POD handoff to staff (see GAP #7)
  -------------------------- -------------------------------------------- --------------------------------------------------

**2.3** Standard operating hours? Weekends/public holidays?\
❓ GAP --- never asked. Normal working hours

**2.4** Do any staff work in the field (e.g. drivers)?\
⚠️ Field Guide says no internal driver --- delivery is 100% Lalamove. Yap Li Min herself is field/mobile-based. **See GAP #7 --- conflicts with Process Map.**

**2.5** Do field staff currently have access to AutoCount? ★Critical\
❓ GAP --- Yap Li Min is mobile-based; unconfirmed whether she accesses AutoCount directly or only through Asilah/Joseph.

**Section 3 --- Current Systems & AutoCount**

**3.1** Main ERP / accounting system?\
✅ AutoCount v2.2 (cloud, build 2.2.90). Dealer: Ms Tan, AutoCount Software Support (easysoftprosolution@gmail.com, +60192392686).

**3.2** Has AutoCount been integrated with any other system before? ★Critical\
✅ No --- MAIA is the first integration project. Direct DB access method confirmed 2026-07-24 (SL-12, LOCKED design --- not yet turned on in Dalson\'s live environment).

**3.3** Any non-standard AutoCount customisations? ★Critical\
⚠️ Integration checklist describes it as \"a standard installation with no major customisations\" --- not independently verified with the client.\
❓ GAP --- e-invoice mandatory customer-master fields still NS/PARTIAL, needs Dalson-specific re-verification.

**3.4** Shared login or individual accounts per user?\
❓ GAP --- never asked. (Note: the AutoCount credentials shared for integration testing use a generic admin/admin login --- confirm this isn\'t how staff log in day-to-day.)

**3.5** Does AutoCount have a separate test/UAT environment?\
❓ GAP --- dev built/tested against a cloned test DB, but unclear whether Dalson itself has a client-side UAT AutoCount environment.

**3.6** Other tools used alongside AutoCount?\
✅ WhatsApp --- order intake, POD, and payment receipt forwarding (informal, pre-MAIA).\
⚠️ Possibly Excel for stock tracking --- unconfirmed.

**3.7** Which systems should MAIA connect to?\
✅ AutoCount (confirmed) + Telegram (internal staff channel). No other integrations in Phase 1 scope. Note: original scoping walked the owner through a **WhatsApp** Business setup; production channel was later switched to **Telegram**, confirmed with client 2026-07-12.

**3.8** Any systems to stop using once MAIA is live?\
❓ GAP --- never asked.

**Section 4 --- Products, Inventory & Pricing**

**4.1** Approximately how many SKUs? ★Critical\
❓ GAP --- **never answered anywhere**. Top priority to ask tomorrow --- directly affects SKU-matching design, the account\'s most-cited pain point.

**4.2** How often are new items added?\
⚠️ Not asked directly for items. New *customers* are confirmed daily-frequency (VOC-016); SL-11 chatbot creation covers both customers and items, implying similar frequency --- confirm.

**4.3** Product categories/brands/groupings?\
✅ Full taxonomy already built (dalson_industrial_supplies_facet.md) --- 18 Level-2 categories: Tools & Workshop Equipment, Safety & PPE, Plumbing & Sanitary, Electrical & Lighting, Welding & Gas, Adhesives/Sealants/Chemicals, Cleaning & Janitorial, Lifting/Handling/Storage, Building & Maintenance Materials, Automotive Supplies, Pumps/Valves/Fluid Control, Measuring & Testing Instruments, Office/Signage/Facility Supplies, Fasteners & Hardware, Paint/Surface Treatment/Abrasives, Packaging/Tapes/Strapping, Machinery & Power Equipment, Furniture & Fixtures. Brands include Bosch, 3M, Kärcher, Loctite, Facom, Kennedy, CTEK, JTC, Alpen, Sanwa, DCA (per Customer Narrative).\
⚠️ Confirm this taxonomy is actually how items are categorised **inside AutoCount** --- the question is about system alignment, not whether categories exist.

**4.4** Multiple warehouses/locations?\
⚠️ Assumed single warehouse, Bandar Sunway --- confirm.

**4.5** Which apply to your products? ★Critical\
❓ GAP --- none of these ever answered anywhere. Multi-UOM and variants are named in Scope Lock as the most common SKU-mismatch cause --- press for a clear answer.

Expiry dates / shelf life

Batch numbers

Serial numbers

Multiple units of measure (e.g. sold per piece but stocked in boxes, or sold by weight)

Bundle / kit products (one SKU = multiple items)

Product variants (e.g. size, voltage, model, material)

Product images are important for identification or quotation documents

**4.6** Any processing/cutting/repackaging/transformation of goods?\
❓ GAP --- never asked.

**4.7** Do salespeople reserve stock for customers before a confirmed order?\
❓ GAP --- never asked.

**4.8** How do you manage pricing? ★Critical\
✅ Customer-specific pricing, negotiated ad hoc per customer --- no fixed price list, single standard price per item in AutoCount, staff sets real price case-by-case from memory/history (SL-10, LOCKED 2026-07-22).

One standard price list for all customers

~~Customer-specific pricing (negotiated per customer)~~

Multiple price lists / tiers for different customer segments

Blanket agreements / contract pricing with individual customers

Volume-based or quantity-based discounts

Price varies based on sourcing / import cost at time of order

**4.9** If multiple price lists, how many and what defines each tier?\
✅ N/A --- no formal tiers, ad hoc negotiation only.

**4.10** Where is pricing data maintained today? ★Critical\
✅ Inside AutoCount (standard item price) + salesperson\'s memory/experience (actual negotiated price).

~~Inside AutoCount~~

In a separate Excel / spreadsheet file

~~In the salesperson\'s memory / experience~~

**4.11** How frequently do prices change?\
❓ GAP --- never asked.

**4.12** Is there a person responsible for setting/updating prices?\
⚠️ Implied Yap Li Min/staff, case-by-case --- not explicitly named as a policy owner. Confirm.

**Section 5 --- Sales & Order Workflow**

**5.1** How do customer orders/enquiries typically arrive?\
✅ WhatsApp (text, voice, image), phone call, email (some), Purchase Order document (PDF or physical), walk-in for B2C retail. No customer portal, no marketplace channel.

~~WhatsApp (text, voice message, or image)~~

~~Email --- some~~

~~Phone call~~

~~Walk-in / counter --- B2C only~~

~~Purchase Order document (PDF, Excel, or other format)~~

Customer portal / website

Marketplace (Shopee, Lazada, etc.)

**5.2** Approximately how many sales orders per day/month?\
✅ \~50--100 orders/month (\~2--5/day) --- well within MAIA T1 cap of 2,500 orders/month.

**5.3** How many line items does a typical order contain? ★Critical\
❓ GAP --- never asked.

**5.4 / 5.5** Who creates/approves quotations and sales orders?\
✅ Any of the 3 registered users (Yap Li Min, Asilah, Joseph) creates and submits directly --- **no separate approval gate** (SL-7, superseded 2026-07-20; client confirmed this is safe given only 3 people use MAIA).

**5.6** Any situations needing special approval?\
✅ None --- approval gate explicitly removed for this 3-person team.

**5.7** Do you handle: returns/exchanges, credit notes, debit notes, advance payments/deposits, partial deliveries, back orders, consignment stock, substitutions?\
✅ Credit notes --- yes, invoice-level only (SL-8, LOCKED).\
❓ GAP --- debit notes, deposits, partial deliveries, back orders, consignment, substitutions never asked.

Customer returns / exchanges

~~Credit notes~~

Debit notes

Advance payments or deposits before delivery

Partial deliveries (order split across multiple shipments)

Back orders (items ordered but not currently in stock)

Consignment stock at customer sites

Substitution of alternative items when requested item is out of stock

**5.8** Most common reasons for issuing credit notes?\
❓ GAP --- not asked, only that they\'re invoice-level, never account-level.

**5.9** Can salespeople create credit notes, or is that restricted to finance?\
⚠️ Implied any of the 3 registered users can --- not explicitly restricted to a finance role. Confirm.

**5.10** Do any products ship direct from supplier to customer (drop-ship)? ★Critical\
✅ Confirmed **NO drop-shipping** (VOC-002) --- orders go straight from Dalson\'s own office/warehouse, not routed through a third party.

**5.11** Do any items require compliance documents before sale (MSDS, safety cert, etc.)?\
❓ GAP --- never asked.

**Section 6 --- Delivery & Logistics**

**6.1** How do you deliver goods to customers?\
✅ **Lalamove** (external courier) --- not own fleet. **See GAP #10** --- this contradicts the original onboarding doc\'s pre-fill (\"own fleet / in-house drivers\"); every later source (VoC, Scope Lock, Field Guide) confirms Lalamove.

Own fleet / in-house drivers

Freelance / contract drivers

~~Third-party courier / logistics company --- Lalamove~~

Customer self-pickup

**6.2** Do you plan delivery routes/trips?\
✅ N/A --- Lalamove handles routing, not Dalson.

**6.3** How is proof of delivery captured today? ★Critical\
✅ Lalamove hands the POD (photo/signed doc) to staff after delivery; staff (Asilah or Yap Li Min) uploads and attaches it to the DN in MAIA (SL-5, LOCKED). Previously informal via WhatsApp threads, described as genuinely hard to retrieve later (VOC-011/012) --- this is the fix MAIA delivers.

**6.4** Do you handle cash-on-delivery (COD)?\
❓ GAP --- never asked.

**6.5** Is the delivery order issued at the same time as the invoice, or separately? ★Critical\
✅ DN and Invoice are both created in AutoCount after packing, same step --- not combined into a single document. (Client had asked about combining SO+invoice into one doc during original scoping; resolved separately per current flow.)

**Section 7 --- Finance, Payments & E-Invoicing**

**7.1** What payment methods do customers use?\
❓ GAP --- never explicitly confirmed. ⚠️ Bank transfer + cash assumed for a small trader.

Bank transfer

Cheque

Cash

Cash on delivery (COD)

Credit terms (net 30, net 60, etc.)

Online payment gateway

**7.2** Do you extend credit terms? ★Critical\
✅ New customers typically pay immediately, no credit period (VOC-013, believed).\
❓ GAP --- confirm whether any repeat/existing customers get net terms.

**7.3 / 7.4** Credit limits per customer? Enforced in AutoCount or manually?\
❓ GAP --- never asked.

**7.5** How do customers notify you of payment?\
✅ Customer sends payment slip via WhatsApp; staff updates AutoCount manually; MAIA stores the receipt against the related order trail.

**7.6** Do you send Statements of Account (SOA)?\
❓ GAP --- never asked.

**7.7** E-invoicing (LHDN) status? ★Critical\
❓ GAP --- never independently confirmed for Dalson specifically. (MAIA is scoped to trigger e-invoice generation via AutoCount per the integration checklist, but Dalson\'s own compliance stage --- auto/manual/in-progress/not started --- was never answered.)

Already compliant and automated (auto-sync to LHDN)

Compliant but manual submission

In progress

Not started

Not applicable

**7.8** Invoices per delivery, or consolidated monthly?\
❓ GAP --- never asked.

**7.9** Any tax exemption scenarios (C1, C3, A57, LMW, export)?\
❓ GAP --- never asked. No mmg

**Section 8 --- Documents & Reports**

**8.1** What documents do you currently generate for customers?\
✅ Sales order/quotation (MAIA-only per SL-13, MED confidence --- see GAP #5), Invoice, Delivery order, Credit note, Payment receipt (on request only, SL-17). No debit note, no SOA, no internal pick list, no proforma beyond the new-customer upfront-payment case.

~~Quotation (standalone)~~

Proforma invoice --- new-customer case only

~~Sales order confirmation --- MAIA-only, does not push to AutoCount (SL-13)~~

~~Invoice~~

~~Delivery order / delivery note~~

Pick list (internal) --- not used

~~Credit note~~

Debit note

~~Payment receipt --- on request only~~

Statement of Account (SOA)

**8.2** Are document templates generated by AutoCount\'s built-in engine?\
⚠️ SL-14 (LOCKED 2026-07-31) confirms MAIA uses its **own** PDF template for all 5 doc types (SO/SI/DO/CN/QTN) --- not AutoCount\'s report engine. Confirm this matches what Dalson expects, since branding/format wasn\'t independently reconfirmed with the client. Note: SL-14 has no UAT test cases written yet --- coverage gap to flag to the team.

**8.3** Specific fields/formatting your customers or regulators require? ★Critical\
✅ Standard invoice fields only, nothing unusual required (VOC-014, confirmed).\
⚠️ Owner previously offered to bring 3--5 sample documents (PO, quotation, invoice, DO) --- confirm these were actually collected and used, or are still outstanding (see §11.3).

**8.4** What reports do you look at regularly?\
❓ GAP --- never asked.

**8.5** Any manual Excel reports you wish were automated?\
❓ GAP --- never asked.

**Section 9 --- Communication & Channels**

**9.1** WhatsApp Business account --- regular app or WABA?\
✅ Superseded --- production channel is **Telegram** (@maia_dalson_bot), confirmed with client 2026-07-12. Original WhatsApp Business setup questions are moot for Phase 1.

**9.2** Should MAIA communicate with customers via WhatsApp?\
✅ Out of Phase 1 scope --- internal-facing only.

**9.3** Should MAIA help the internal team via WhatsApp/chat?\
✅ Yes --- core of Phase 1, via Telegram. Staff forward orders, receive drafts, confirm submissions, forward payment proofs.

**9.4 / 9.5** Primary languages --- team and customers?\
⚠️ English primary, possibly Mandarin and/or Malay --- never explicitly confirmed. GAP.

**Section 10 --- Pain Points & Priorities**

**10.1** Top 3 problems you want MAIA to solve? ★Critical\
✅ Pre-filled from VoC synthesis --- present back to Yap Li Min to confirm or amend in her own words:

Manual order intake --- too much time spent interpreting and keying in orders.

SKU mismatch --- customer descriptions don\'t match internal item names, causing errors.

Fragmented visibility --- POD and follow-up records scattered across WhatsApp and AutoCount.

**10.2** What currently takes the most time that you wish was faster?\
❓ GAP --- open-ended, best asked live.

**10.3** Anything that falls through the cracks --- orders missed, documents lost, follow-ups forgotten?\
❓ GAP --- open-ended, best asked live.

**10.4** If MAIA could only do one thing, what would it be?\
❓ GAP --- open-ended, best asked live.

**10.5** Anything done outside AutoCount (WhatsApp, Excel, paper, memory) that should be in a system?\
❓ GAP --- open-ended, best asked live.

**Section 11 --- Data Readiness**

**11.1** Can you provide customer list, item list, price list, stock balances, supplier list? ★Critical\
✅ Owner explicitly wants these exported: full order history, customer info, credit limit/terms, inventory, and pricing (VOC-005, confirmed). Migration reportedly done (SL-6, LOCKED) --- confirm it\'s complete and current, not stale.

~~Customer list (company name, code, contact, phone, email, address, credit terms/limit)~~

~~Product / item list (SKU/code, name, description, UOM, category, active/inactive)~~

~~Price list(s) --- standard and/or customer-specific~~

~~Current stock balances (item, warehouse, quantity)~~

Supplier list --- not requested/relevant per sources

**11.2** Who will prepare each data file?\
⚠️ Implied Ms Tan (AutoCount dealer) --- not explicitly assigned. GAP.

**11.3** Sample transaction documents (PO, SO, invoice, DO)? ★Critical\
⚠️ Owner previously offered to provide these (VOC-008) --- confirm they were actually received and used for SL-14 template design, or are still outstanding.

**11.4** Historical data migrated, or starting fresh?\
⚠️ SL-6 implies migration happened, but the scope/date-range of historical data brought in is not explicit anywhere. Confirm forward-only vs. migrated range.

Forward-only (new transactions from go-live onwards) --- standard

~~Want historical data migrated --- approximate date range: ❓ GAP, not specified anywhere~~

Unsure --- to discuss

**Section 12 --- Timeline & Project Ownership**

**12.1** When do you need MAIA operational? Hard deadline?\
⚠️ Per Phase 1 Timeline, go-live was targeted 2026-07-20--22, training 22--27, hypercare Aug 3 --- but this predates the still-open blocking items above (Cash Sales Invoice, SL-13 re-verification), so the real live-session date/timeline needs re-confirming as current.

**12.2** Who is the internal project owner during onboarding? ★Critical\
⚠️ Yap Li Min is the clear primary contact throughout every source --- not formally named as \"project owner\" in any doc. Confirm.

**12.3** Who is the decision-maker for approvals during setup? ★Critical\
✅ Yap Li Min --- she personally sets and corrects business rules throughout (credit note policy, receipt policy) per VoC. UAT signatory role still explicitly open --- **see GAP #8**.

**12.4** Any upcoming events affecting availability during onboarding?\
❓ GAP --- never asked.

**Section 13 --- Extra add ons**

Any reminder require, delivery delay reminder , out of stock reminder by. default no need any reminder

Know b2b item stock not track but what if b2b stock and b2c stock using same item, we proposed every items no matter for

First time they use cash sales

How they actually return stock , issue CN, return handling process, stock back iisue cn

How ttheir po and WhatsApp order message are distributed

Msg mostly 70, po 30

How handle their cash ssales, just use the cash sales

Item with different uom, yes,

**See Also**

\[\[Dalson --- Consolidated Overview\]\]

\[\[Dalson --- VoC Extraction\]\]

\[\[Dalson --- Before vs After MAIA and E2E Flow\]\]

\[\[Dalson --- UAT Checklist\]\]

\[\[Dalson --- End-user & Process Map\]\]

\[\[Dalson --- Lens Alignment Report\]\]

\[\[Dalson Industrial Supplies Customer Narrative Document\]\]

\[\[Dalson MAIA autocount integration\]\]

\[\[Dalson Phase 1 Timeline\]\]

Scope Lock v2 --- Dalson Industrial Supplies (Lark, doc token VHQPdEnCbopM9pxRapJliGiXgrb)

[MAIA Pre-Onboarding Requirements Questionnaire (Lark template)](https://eg69120xnei.sg.larksuite.com/wiki/FlCrwNJzdiVCadkCHzyliV0KgSe)

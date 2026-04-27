# Leon Fuat × MAIA — Final Narrative

**Post Discovery / Solution-Fit Workshop, 22 Apr 2026**_Working draft v0.6.3 — adds Section 17 (Additional Commentary) capturing internal alignment with MindHive CEO: Phase 1 inclusion rule (low effort + high value, <5 mandays per feature), base MAIA alone insufficient for Leon Fuat, post-discovery process sequence (internal plan → SAP vendor discovery → tailored demo → SAP green light → proposal), and confirmed bigger-ticket commercial posture._

---

## 1. Who Leon Fuat Is

Leon Fuat Berhad is a long-established Malaysian steel group, listed on Bursa Malaysia and operating since 1972. The group spans multiple entities — Leon Fuat Hardware, Leon Fuat Metal, Supreme Steelmakers, Leon Fuat Industrial Products, and PCM Steel Processing — covering trading, processing, and manufacturing of steel products.

Their range is wide and technically varied: flat steel and long steel across carbon, stainless, and alloy grades, including coils, sheets, plates, bars, pipes, hollow sections, channels, and specialty grades. They also offer a broad set of processing services — cut-to-length, slitting, laser cutting, oxy-gas cutting, plasma cutting, bending, polishing, bandsaw cutting — and manufacture welded steel pipes and **expanded metal**.

> **Expanded metal is a newer product line** within Leon Fuat's portfolio. Operationally, it is currently handled by **Ms Quinccy**. When she is unavailable, the team has to call her directly — there is no codified process or backup ownership, which means a single absence creates a knowledge gap in the order flow. This is a textbook tribal-knowledge risk that MAIA can systematise.

That breadth matters because Leon Fuat is not a simple catalogue distributor. Their business is built around many material grades, many forms, and many processing possibilities. A customer order rarely arrives as a clean catalogue pick — it usually needs interpretation before it becomes system-ready. The transaction is less _"take order, key order"_ and more _"interpret requirement, match material, confirm dimensions and UOM, validate processing path, then release correctly."_

The scale is also meaningful. Leon Fuat is a large operating business handling roughly **160–180 orders per day**, with around **30 salespeople supported by approximately 9 sales execution staff** — a 30:9 ratio that creates a structural bottleneck on the execution side. Execution accuracy matters because the value of stock, sales, and customer relationships is too large to manage casually.

---

## 2. Operating Context — As-Is

### The Roles Involved

Leon Fuat's order lifecycle is multi-role and handoff-heavy. The relevant actors:

- **Sales Experts (indoor) / Specialists (outdoor)** — customer-facing. They receive enquiries, quote, do initial stock and price checks, interpret simpler drawings, and hand confirmed orders to sales execution.
    
- **Drawing Team** — supports the sales experts on harder jobs. Customers send drawings or partial dimensions; the drawing team derives cutting lengths, standardised dimensions, and produces a clean dimensional PDF that downstream teams can work from. This is important: the drawing team's output is structured PDF data, not raw engineering drawings, which means MAIA needs to extract data from a clean PDF, not interpret CAD.
    
- **Sales Execution Team** — the operational back office. They take confirmed orders, validate them, map customer language into internal SKUs, handle UOM mismatches, allocate prices across line items, and create / finalise sales orders in SAP. They support both the indoor and outdoor sales teams. They are the choke point.
    
- **Finance** — handles customer statements, credit exposure, and payment recording. Credit limits exist on paper but are **not enforced as hard blocks** (see Section 3).
    
- **Drawing / Production / Logistics** — downstream stakeholders for processed jobs, certificates, and delivery.
    
- **Product Specialists (e.g. Ms Quinccy for Expanded Metal)** — single-point owners of newer or specialised product lines. Knowledge is currently person-bound rather than system-bound.
    

### The Communication Stack

Leon Fuat is on **Microsoft 365**. Their primary internal collaboration tools are:

- **Microsoft Teams** — primary internal company communications. Critically, they currently run **massive working groups** in Teams that include every personnel involved in order processing. Each working group is a continuous stream of enquiries, file dumps (POs, drawings, specs), status updates, and side conversations. **If you want an update on a specific order, you scour the chat history.** There is no per-order context — everything is mixed together at the team level. This is one of the most concrete daily pains the team feels but has normalised.
    
- **Outlook** — email, including customer correspondence and PO receipt
    
- **SharePoint** — currently functions as the order queue and document repository. Sales experts drop confirmed orders into folders; sales execution picks them up sequentially. The shadow workflow.
    
- **WhatsApp** — used for some customer-side correspondence
    

> **Implication for MAIA:** Two of MAIA's out-of-the-box capabilities directly attack these pains:
> 
> - **Per-doctype working area** (one per order, quotation, etc.) replaces the SharePoint folder queue. The "queue" is no longer a folder — it is the **status gate state of the doctype**, with created timestamps, ownership, and visible progression. This was already familiar to ERPNext-native operations; for Leon Fuat it is a structural upgrade from SharePoint.
>     
> - **Comments, tagging, and assignment per doctype** (shown in the demo) replaces the Teams working-group chat scouring pattern. Conversations live on the order, not in a fire-hose chat. The team explicitly responded to this in the demo — they could see how their work changes when context is per-order, not per-channel.
>     
> 
> **Microsoft Teams remains the notification channel** for ToDos, exception alerts, and approval requests — meeting users where they already live. But Teams stops being the _system of record_ for order context; that role moves to MAIA's per-doctype workspace.

### The Process Today

A typical order flows roughly as follows. A customer sends an enquiry or PO via Outlook email, WhatsApp, or phone. A sales expert receives it, checks stock and price, and decides whether the spec is simple enough to handle directly or complex enough to involve the drawing team. For complex jobs, the drawing team derives the required dimensions and produces a structured PDF. The sales expert then prepares a quotation — usually outside SAP, in Excel or ad-hoc tools — and negotiates with the customer through possible revisions. Once confirmed, the order package is dropped into a **SharePoint folder**, which acts as a shadow workflow queue. The sales execution team picks orders from SharePoint sequentially, validates them against SAP requirements, and creates the sales order in SAP. Finance is involved separately for payment recording, statement preparation, and credit exposure reporting (currently distributed every two weeks). Cross-team coordination happens through Teams and WhatsApp group chats.

### The Shadow Stack

Leon Fuat already runs **SAP HANA** as their ERP backbone — the system of record for transactions, inventory, and finance. But a substantial volume of operational work happens in tools that sit _around_ SAP:

- **SharePoint** — order queueing and document repository
    
- **Excel** — quotations, calculators, credit exposure tracking, periodic reporting
    
- **Microsoft Teams + WhatsApp** — cross-team coordination, status follow-up, ad-hoc product queries (e.g. "where is Ms Quinccy?")
    
- **~10 calculators** (plus subsidiary-specific ones) — for pricing custom and processed jobs
    
- **Bi-weekly credit exposure reports from Finance** — stale by the time sales people use them
    

These tools are operationally fragile, but the team is comfortable with them. The shadow stack persists because the front-end of the order lifecycle — interpretation, negotiation, validation, and credit awareness — does not fit cleanly into SAP's transactional structure.

---

## 3. The Core Operational Problem

> **The single clearest pain raised, repeated, and emphasised throughout the meeting:**
> 
> **Confirmed customer orders take 1–2 days to be entered into SAP.**

This is not a data-entry problem. It is a structural bottleneck caused by the front half of the order lifecycle being unstructured, while SAP demands clean, validated, structured input.

The root causes form a chain:

1. **Customer inputs are messy.** POs arrive in inconsistent formats — Outlook email, WhatsApp, phone, sometimes verbal. They use customer-specific naming, mixed UOMs, partial dimensions, and frequently arrive with missing addresses, contact info, or shipping details.
    
2. **SKU and UOM interpretation depends on experience.** A customer might ask for "5.8 mm" when the internal standard is 6.0 mm, or refer to "boxes" of 20 units when their own boxes contain a different quantity. Experienced staff interpret instinctively; juniors struggle.
    
3. **Stock checking is not a binary lookup.** Finished goods may be out of stock, but raw material upstream may be available and convertible — for example, plate stock may be unavailable but coil stock can be cut into plate. This is the key insight: **available stock is not what SAP shows on the finished-goods screen — it is what the BOM allows you to produce from current raw material.** Some SKUs are stocked finished goods; others are made-to-order and don't carry stock at all. Some product lines (e.g. expanded metal) depend on a single specialist's knowledge.
    
4. **Quotation lives outside SAP — and the root cause is prospect-stage quoting.** Sales people often need to quote customers who **don't yet exist in SAP** — prospects who haven't gone through the customer onboarding / KYC process. SAP requires a registered customer to issue a quotation, which forces the entire quotation workflow to happen _outside_ the system in Excel. By the time the customer is registered and the quotation is being converted into an SO, the work has to be re-done inside SAP. This is the structural reason for the quote-to-SO inconsistency, not just user habit.
    
5. **Calculators are inside SAP, but the experience is poor.** Leon Fuat's ~10 pricing calculators are built into SAP via customisations. They work, but the UX is heavy: the sales user has to manually read through the customer's PO, drawings, and attached document package, then manually transcribe the relevant parameters into the calculator fields. The calculator is a black box that demands well-formed input; the user is the one doing the document interpretation work.
    
6. **Missing fields block orders silently.** Orders sit in the SharePoint queue waiting for the sales executor to chase the salesperson for missing addresses, tax details, or remarks.
    
7. **Credit standing is hard to know in real time.** Leon Fuat's industry runs on long overdues — they **do not enforce credit limit blocks**, because doing so would stop most of their business. Instead, sales people are expected to be **aware** of a customer's credit standing when they quote or take an order, and to use judgement on whether the customer is within tolerable exposure. Today, that awareness comes from a **bi-weekly Excel report from Finance** that is stale before it lands. Computing live exposure manually is painful and slow. This is one of the highest-friction "everyone knows it's broken" pains in the business.
    
8. **Statement of Account requests are manually assembled.** Finance manually pulls invoices and payments to generate SOAs for customer queries and follow-up. Turnaround is slow (2–3 days). This is a low-hanging fruit MAIA can solve cleanly.
    
9. **Pricing approval gating adds latency.** Orders above RM 20,000 require pricing approval. These rules are enforced informally.
    
10. **Cross-team coordination is "ding-dong".** Salespeople ask for status via Teams and WhatsApp. Sales executors reply. Finance is asked separately. Production is updated separately. This is constant interruption with no single source of truth.
    

The result: a 1–2 day lag between customer confirmation and SAP entry, sales people quoting without live commercial context, and finance being a manual lookup service for the rest of the business.

---

## 4. Order Type Complexity — What Drives Difficulty

The team described three rough order categories, in increasing difficulty:

|   |   |   |
|---|---|---|
|Order Type|Characteristics|Where the friction sits|
|Ex-stock standard|Customer orders catalogue item, stock available|Mostly SKU mapping and missing remarks (e.g. spray colour requirements that need warehouse/production blocking)|
|Standard dimensional / processed|Cut-to-length, simple bending, standard finished goods derived from raw stock|Stock visibility (raw mat vs finished), UOM conversion, pricing calculator selection|
|Custom / drawing-based|Customer-specific dimensions, multi-step processing, drawings|Drawing team involvement, multi-line price allocation, revision cycles, sales executor must verify drawings + PO + quotation + SO all tally|
|Specialised product lines (e.g. Expanded Metal)|Newer or niche products owned by a single specialist (Ms Quinccy)|Knowledge bottleneck — if specialist is unavailable, team must call them; no fallback workflow|

> **Critical nuance from the meeting:** the drawing team produces a **standardised dimensional PDF** as output. MAIA does not need to interpret raw CAD engineering drawings — it extracts structured data from the drawing team's clean PDF. This significantly lowers the AI risk on the hardest order type.

The team explicitly preferred the rollout philosophy of **automating the simple/high-volume cases first**. Their words: _"if you can automate 60% of the simple repetitive work, that already helps a lot."_ This is a strong signal — they understand phased delivery and are not expecting "one button" magic.

---

## 5. Detailed Pain Point Map

> **Primary user lens: Pui San's sales executor team.** They are the choke point — drowning in volume as the business grows. Phase 1 is judged by whether _they_ feel daily relief. Every pain below is mapped from their perspective first; salespeople, finance, and management are downstream beneficiaries.

|   |   |   |   |   |
|---|---|---|---|---|
|#|Pain Point|Frequency|Impact|MAIA Lever|
|1|Confirmed orders sit 1–2 days before SAP entry|Daily|Delays production, fulfilment, customer response|PO intake → validation → SO pre-fill|
|2|SKU / UOM interpretation depends on experience|Constant|Slow quoting, errors, junior staff dependency on seniors|Learned mapping layer with user-confirmed corrections|
|3|Stock visibility is not "available-to-promise" — sales can't easily see how much finished can be produced from current raw material|Frequent|Inaccurate availability commitments; dependency on tribal knowledge or manual cross-checks|Ready stock projection — given raw material on hand + BOM, compute projected finished-good quantity. Phase 1: single primary raw material per SKU. Spec-dependent substitution rules are a later-phase problem.|
|4|Incoming stock visibility lives outside SAP — sales manually checks with purchasing to know what is arriving soon|Daily|Slow customer response; missed sales opportunities; purchasing becomes a lookup service|Phase 1: lightweight "incoming stock" field per SKU populated manually by purchasing. Later phase: proper Purchase Order / Goods Receipt doctype in MAIA.|
|4|Incoming stock visibility lives outside SAP — sales manually checks with purchasing to know what is arriving soon|Daily|Slow customer response; missed sales opportunities; purchasing becomes a lookup service|Phase 1: lightweight "incoming stock" field per SKU populated manually by purchasing. Later phase: proper Purchase Order / Goods Receipt doctype in MAIA.|
|5|Quotation forced outside SAP because prospects don't exist yet|Daily|Inconsistency between quote and order, rework when prospect becomes customer|Native quotation workflow with prospect entity support — quote first, register customer when order is confirmed|
|6|Missing / incomplete order info blocks processing|Common|Sales-execution ↔ sales ping-pong, queue delays|Intake validation gate before SO creation|
|7|Calculator UX is heavy — user manually reads docs and transcribes parameters|Lower volume but meaningful|Slow quotes, error risk, calculator know-how dependency, junior staff struggle|Mimic SAP calculator logic in MAIA + auto-populate parameters from attached documents (PO, drawing PDF, customer specs)|
|8|Credit standing not visible to sales at quote/order time|Constant|Sales people quote without knowing exposure; rely on stale 2-week-old Excel|Live credit standing surfacing on quote/order (visibility, not enforcement)|
|9|SOA generation is manually assembled by Finance|Weekly|2–3 day turnaround for any customer query or follow-up|One-click SOA generation (low-hanging fruit)|
|10|Microsoft Teams "working group" chat scouring — all order activity (enquiries, file dumps, status updates) flows into one massive group; finding context for a specific order means scrolling chat history|Daily, every order|Massive context-switching cost; new joiners can't navigate; updates get lost; ownership unclear|Per-doctype workspace with comments, tagging, assignment (out-of-the-box MAIA, demo'd) — context lives on the order, not in a channel|
|11|SharePoint folder queue is a shadow workflow system — confirmed orders dropped into folders, processed sequentially, no visible status or ownership|Daily|Queue invisible to upstream sales; no ownership; no SLA; orders lost in folders|Per-doctype working area replaces the queue — status gates and created timestamps are the queue, with visible ownership|
|12|Tribal knowledge concentrated in senior / specialist staff|Constant|Slow onboarding; specialist absence (e.g. Ms Quinccy for Expanded Metal) creates a real bottleneck|Capture corrections + product knowledge in chatbot; standardise SOPs|
|13|Pricing approval gating is informal|Per-order over thresholds|Manual escalation, inconsistent enforcement|Multi-tier price approval workflow|
|14|Item-specific special attributes required at order entry are easily missed|Per-order on flagged SKUs|Production downstream blocked or wrong if attribute missed|Extend MAIA item attribute model to mirror SAP's required-attribute behaviour on QT and SO line items|

---

## 6. The MAIA Positioning

MAIA is **not an ERP replacement**. SAP HANA remains the system of record for finance, inventory, and core transactions. MAIA sits in front of SAP as the **operational intelligence and workflow layer** — the layer that turns messy customer demand into clean, validated, SAP-ready transactions, and makes the operational context (stock, credit, customer history) visible at the moment of decision.

In effect, MAIA replaces the SharePoint + Excel + WhatsApp shadow stack with a single structured workflow that:

- Ingests POs and enquiries from any channel (Outlook, WhatsApp, upload), including the full attachment package (drawings, specs, side notes)
    
- Interprets and structures the content with AI — extracting line items, parameters for calculators, and SKU-specific special attributes from across all attachments
    
- Supports **prospect-stage quoting** so the quote-to-SO lifecycle can finally live inside one system
    
- **Mimics SAP's calculator logic** with elevated UX and document-aware parameter pre-population
    
- **Mirrors SAP's required item attribute behaviour** on QT and SO line items
    
- Validates against required fields and business rules
    
- Surfaces live commercial context — stock (BOM-aware), credit standing, pricing — at quote and order time
    
- Routes exceptions (missing info, pricing approval, specialist product queries) to the right person via Microsoft Teams
    
- Pre-fills the SAP sales order so the sales executor becomes a **checker**, not a builder
    
- Pushes the validated SO into SAP via API with all custom fields and special attributes already populated
    

The framing the client themselves accepted: _"the sales exec becomes the checker instead of the doer."_ This is the buying frame.

---

## 7. Phasing Strategy — Land and Expand

The proposal is structured as a **land-and-expand roadmap** designed for a buyer with confirmed enterprise software budget capacity (RM 900k SAP HANA spend 1–2 years ago).

|   |   |   |   |
|---|---|---|---|
|Phase|Theme|Goal|Composition|
|Phase 1|Core MAIA + Wow + High-Pain — Land|Win the deal. Create the "yes, this is worth it" moment for Pui San's team within 8–12 weeks of go-live. Daily relief for the sales executor team.|Out-of-the-box MAIA + the highest-leverage extensions and integrations. No deep customisations.|
|Phase 2|Customisations & Pricing Intelligence — Expand|First planned upsell. Address the SAP-customisation-mirroring features that require deeper IT work.|Calculator mimic-and-elevate (top 1–3 calculators), item attribute extension, large-order UX investment, payment recording, drawing PDF extraction.|
|Phase 3|Vertical Depth & Advanced Workflows — Expand|Second planned upsell. Compliance, downstream documents, management visibility, customer-facing self-service.|Mill test certs, tax exemption, full downstream document lifecycle, dashboards, customer SOA portal, specialist knowledge capture, remaining calculators.|

> **Why this phasing works for Leon Fuat specifically:**
> 
> - They have confirmed budget capacity — the proposal can be sized for real value, not minimum-viable.
>     
> - They explicitly accepted phased delivery — _"60% is enough to start."_
>     
> - They are SAP HANA buyers — used to multi-year enterprise roadmaps with planned releases.
>     
> - Phase 1 contains the wow features (BOM stock forecasting, document-attachment AI, per-doctype workspace replacing Teams chat scouring) that justify the initial commercial number and create the trust required to upsell Phases 2 and 3.
>     
> - Phase 2 customisations carry a maintenance liability (calculator drift, attribute schema sync) that should be priced and contracted properly, not given away in Phase 1.
>     

---

## 8. Phase 1 — Core MAIA + Wow + High-Pain (Land)

Phase 1 is composed of three layers, all designed to land Pui San's team and create the moment where Leon Fuat's leadership says _"this is worth what we are paying."_

### 8.1 Core MAIA Platform (Out-of-the-Box)

These are MAIA capabilities that exist today and that Leon Fuat saw in the demo. They form the foundation.

#### 8.1.1 Per-Doctype Working Area (Replaces SharePoint Queue)

Every order, quotation, customer enquiry, etc. has its own working area — documents, line items, status, ownership, audit trail. **The "queue" is no longer a folder; it is the status-gate state of the doctype, with created timestamps and visible ownership.** This replaces SharePoint as the operational repository and replaces the implicit FIFO-by-folder-date queue model.

#### 8.1.2 Comments, Tagging, and Assignment per Doctype

Conversations, file attachments, and task assignments live on the order itself, not in a Teams channel. Tag a colleague; they get notified in Teams; they reply on the order. **This was the demo feature that the team explicitly responded to** — they could see immediately how their work changes when context is per-order, not per-channel.

#### 8.1.3 PO / Enquiry Intake & Structured Extraction

Customer POs arrive via Outlook, WhatsApp, or upload. MAIA ingests, extracts customer info, contact, PO number, dates, line items, remarks. Duplicate PO detection. The sales executor confirms or corrects rather than starting from zero. **80–90% accuracy out of the gate, improving with usage.**

#### 8.1.4 SKU Mapping with Learned Corrections

MAIA proposes SKU matches against Leon Fuat's internal item master. User corrections feed back into the mapping layer. Accuracy compounds over time.

#### 8.1.5 UOM Mapping & Conversion

Detection of customer-vs-internal UOM mismatch with proposed conversion (e.g. customer "box of 25" → internal "box of 20").

#### 8.1.6 Mandatory Field Validation Gate

MAIA blocks order progression when required fields are missing — billing/shipping address, contact person, tax fields, customer code, payment terms, storage location, line-level remarks. Configurable to Leon Fuat's actual SAP field schema.

#### 8.1.7 Native Quotation with Prospect Support

MAIA supports a **prospect entity** distinct from a registered customer — solving the structural reason quotation lives outside SAP today (SAP requires a registered customer to issue a quotation). Sales people quote prospects in MAIA. When the customer confirms, prospect is converted to customer (created in SAP) and quotation is converted to SO in a single flow. Multi-tier pricing (RRP, bulk, wholesale, cost, customer-specific, floor, ceiling). Single-level price approval gating.

#### 8.1.8 Sales Order Creation & SAP Push

MAIA pushes the validated SO to SAP HANA via API. Sales executor reviews the MAIA draft, confirms, SO writes through to SAP.

#### 8.1.9 Sample PO Default Pricing

For sample POs without unit prices, MAIA defaults to internal pricing rather than blocking the workflow.

#### 8.1.10 Chat-Based Sales Assistant

WhatsApp / Teams / in-app chatbot for quotations, stock checks, SKU recommendations. Avoids additional SAP user licences for outdoor sales and juniors.

#### 8.1.11 Microsoft Teams Notification Channel

Notifications, ToDos, and exception alerts surface into Microsoft Teams — meeting users where they live. Teams stays as the personal notification channel; per-doctype workspaces become the system of record for order context.

### 8.2 Wow Features — Why Phase 1 Wins the Deal

These three features are the _"yes, sign now"_ features. They are what differentiates MAIA from a generic ERP front-end and what justifies Phase 1's commercial value.

#### 8.2.1 Document-Attachment Intelligence per Doctype _(WOW)_

Orders rarely arrive as a single clean PO. They come bundled with attachments — drawings, customer specs, reference photos, side notes, mixed file types. Today the sales user has to read each attachment manually and decide what's relevant.

MAIA's general attachment understanding is **extended and improved per doctype** so that:

- Each attachment is classified (spec sheet, dimensional drawing, customer note, payment slip, etc.)
    
- Relevant structured data is extracted — dimensions, quantities, material grades, cutting requirements, contact info
    
- Extracted data is surfaced inline on the doctype, ready to feed into line items, quotations, calculators, or validation
    
- Conflicts between attachments (PO says one quantity, drawing says another) are flagged for user resolution
    
- Attachments remain searchable and contextually linked to the doctype forever
    

This is the AI-leverage layer that turns MAIA from _"a structured form"_ into _"an assistant that read the attachments for you."_ This is the wow demo moment.

#### 8.2.2 BOM-Based Stock Forecasting _(WOW)_

Leon Fuat holds raw material in stock that can be processed into finished goods. Today, sales has no clean way to see what they can produce from what they already have. They rely on tribal knowledge or manual cross-checks.

MAIA solves this with two capabilities:

**(a) Ready stock projection.** Given the raw material on hand (read live from SAP) and a BOM or conversion formula, MAIA computes and displays the **projected finished-good quantity** that can be produced. The sales user sees, for any finished SKU: direct finished-goods stock + projected producible quantity from current raw material.

> Note: the _spec-dependent raw material substitution_ logic (e.g. "6mm plate can be made from 5.8mm, 5.5mm, or 5.2mm depending on customer spec") is tribal knowledge held by senior operators. Codifying those rules is a significant product problem and is **explicitly out of scope for Phase 1.** Phase 1 works off a single primary raw material per finished SKU. Substitution rules can be tackled in a later phase once the core forecasting value is proven.

**(b) Incoming stock visibility.** Today, when a sales user wants to know if more stock is arriving soon, they **manually check with the purchasing team** — who track incoming stock outside SAP. Incoming stock visibility is a real gap; MAIA can close it, but doing so properly requires a **Purchase Order / Incoming Stock doctype** that MAIA does not currently have.

- **Phase 1:** Surface a simple "incoming stock" field at the SKU level, populated by purchasing (manually at first, or via a simple MAIA input). This gives sales visibility without requiring a full purchasing module.
    
- **Phase 2 or later:** Introduce a proper Purchase Order / Goods Receipt doctype in MAIA so incoming stock is structured, auditable, and automatically contributes to the forecast.
    

**This is the steel-industry-specific feature no generic ERP front-end will offer.** The Phase 1 version is deliberately simple — ready stock projection + lightweight incoming stock field — so it ships fast and creates the wow moment without pulling in the hardest tribal-knowledge problems.

#### 8.2.3 Live Credit Standing Surfacing _(HIGH PAIN + Quick Win)_

Leon Fuat does **not** enforce credit limits as hard blocks — high overdues are normal in their industry. What sales people need is **awareness, not enforcement.**

MAIA surfaces live credit standing — outstanding balance, ageing, overdue, exposure vs limit — on every quote and order screen. Computed live from SAP invoice and payment data. **Replaces the stale 2-week-old Excel report** the team currently relies on. Optional soft-warning flag at configurable internal tolerance thresholds. No hard blocks.

### 8.3 High-Pain Quick Wins

These features address acute pains with low implementation effort. They are not customisations — they are configuration of existing MAIA capabilities against Leon Fuat's specific data and workflows.

#### 8.3.1 Statement of Account (SOA) Generation

One-click SOA generation from SAP invoice and payment data. Replaces the 2–3 day finance manual assembly. Available to sales (for customer queries), finance (for follow-up), and exportable for customer send.

#### 8.3.2 Stock Reservation for Raw Material (Manual)

For SOs selling finished goods derived from raw material, MAIA supports manual stock reservation against the raw material quantity. Made-to-order SKUs do not reserve. Back-to-back ordering supported. (Automated reservation is Phase 2.)

#### 8.3.3 Microsoft Teams Working-Group Replacement Pattern

Combined with 8.1.1 and 8.1.2 — the per-doctype workspace + comments/tagging/assignment effectively retires the Teams "everything-in-one-channel" pattern for order processing. Order activity now lives on the order; Teams becomes a notification surface, not a system of record.

---

## 9. Phase 2 — Customisations & Pricing Intelligence (First Upsell)

Phase 2 is positioned as a planned upsell release approximately 4–6 months after Phase 1 go-live, once Pui San's team is fluent in MAIA and the trust is established. These features are customisations that mirror Leon Fuat's specific SAP customisations — they require deeper IT engagement, ongoing maintenance contracts, and a meaningful commercial line.

### 9.1 Calculator UX Elevation — Top 1–3 Calculators

The ~10 SAP calculators are customisations. MAIA mimics the calculator behaviour and elevates the UX:

- Mirrors SAP calculator parameters, formulas, and outputs (results identical and trusted)
    
- Auto-populates parameters from the document attachments via the Phase 1 extraction layer
    
- Clean modern UI showing what was extracted, what is uncertain, what needs confirmation
    
- Output flows into the quotation / SO with full traceability
    

Phase 2 covers the top 1–3 highest-volume calculators (confirmed in scoping with Pui San). **Carries a calculator change-control liability** — see Risk #3.

### 9.2 Item Special Attribute Extension on QT/SO Line Items

SAP enforces SKU-specific special attributes at order entry (coating spec, surface finish, cutting tolerance, etc.). MAIA's existing item attribute model is **extended** to mirror this:

- Per-SKU attribute schema synced from SAP item master (open text, dropdowns, mandatory flags)
    
- Surfaced inline on QT/SO line items in MAIA
    
- Mandatory attributes block save until populated — same as SAP, in MAIA UX
    
- Where attributes can be inferred from the attachment package (Phase 1 extraction), MAIA pre-populates
    

By the time the SO is pushed to SAP, all required special attributes are present — no SAP-side blocks, no rework.

### 9.3 Large-Order UX Investment

Leon Fuat orders frequently have 20–30 line items with multiple drawings. Generic per-line UI patterns degrade at this scale. Phase 2 invests in:

- Bulk operations (bulk SKU map, bulk attribute fill, bulk price application)
    
- Line item grouping by drawing / attachment source
    
- Inline filtering and search within an order
    
- Visual indicators for line state (validated, needs attention, conflict)
    
- Keyboard-first navigation for power users
    

This is the difference between MAIA being usable on a 30-line order at 4pm Friday vs being a tool the team works around.

### 9.4 Customer Drawing PDF Extraction

The drawing team's standardised dimensional PDF is parsed by MAIA to auto-populate quotation line items. Builds on Phase 1's general attachment intelligence with drawing-team-specific output format awareness.

### 9.5 Payment Recording Workflow

Customer payment slips received via Outlook or WhatsApp are routed into a structured finance recording flow. Finance reviews, confirms, records payment against invoices. Replaces informal email-and-chat chasing.

### 9.6 Multi-Tier Price Approval Gating (Configurable)

Extension of Phase 1's single-level approval to multi-tier (e.g. RM 20k → manager, RM 100k → director). Configurable per customer, per product family, per user role.

---

## 10. Phase 3 — Vertical Depth & Advanced Workflows (Second Upsell)

Phase 3 is the second planned upsell, approximately 9–12 months after Phase 1. Compliance features, downstream document lifecycle, management visibility, customer-facing self-service.

### 10.1 Mill Test Cert / COA Generation & Management

Batch-level cert handling tied to specific batches and customers. Includes supplier cert masking workflow. Discussed in the meeting with Ms Anne.

### 10.2 C1 / C3 Tax Exemption Handling

Structured handling of Malaysia tax exemption certificates and customer-specific tax classifications.

### 10.3 Downstream Document Lifecycle

Delivery Notes, Return Notes, Credit Notes, Debit Notes — managed in MAIA and pushed to SAP.

### 10.4 Specialist Product Knowledge Capture (Expanded Metal & Beyond)

Codify product knowledge currently locked in single specialists (Ms Quinccy for Expanded Metal, etc.) into MAIA's chatbot. Removes the "must call the specialist" bottleneck.

### 10.5 Automated Stock Reservation

Automate the manual raw-material stock reservation flow from Phase 1.

### 10.6 Remaining Calculators

The remaining calculators beyond the Phase 2 top three — same mimic-and-elevate pattern.

### 10.7 Customer-Facing SOA Self-Service

Customers retrieve their own SOA via WhatsApp or a customer portal. Eliminates finance turnaround for routine queries.

### 10.8 Management Reporting & Visibility Dashboards

Sales executor productivity, order throughput, exception rates, first-pass quality, salesperson follow-up patterns, credit exposure trends.

### 10.9 CRM-Style Customer Memory

Customer interaction history, meeting notes, relationship trail. Adjacent to the wedge.

### 10.10 Purchase Order / Goods Receipt Doctype

Introduce proper Purchase Order and Goods Receipt doctypes in MAIA so incoming stock is structured, auditable, and automatically contributes to the stock forecast. Replaces the Phase 1 lightweight "incoming stock" manual field. Enables purchasing workflow visibility and tighter integration with sales. **Note:** MAIA does not currently have a purchasing doctype model — building this is net-new product work, not configuration.

### 10.11 Spec-Dependent Raw Material Substitution Rules

Codify the tribal knowledge that governs _which_ raw material SKU can be used to produce a given finished SKU under a given customer spec (e.g. "6mm plate can be made from 5.8mm, 5.5mm, or 5.2mm, depending on customer tolerance and processing requirements"). This is a significant rule-capture exercise requiring structured elicitation from senior operators like Pui San and material specialists. **Out of Phase 1 scope by design** — Phase 1 works off a single primary raw material per finished SKU. Only take this on once the core forecasting value is proven and the business case for the rule engine is clear.

---

## 11. Integration with SAP HANA — Technical Frame

MAIA's integration with SAP HANA follows the standard MAIA touchpoint architecture (see _MAIA ERP Integration Touchpoints_ reference document). Key items specific to Leon Fuat:

|   |   |   |
|---|---|---|
|Touchpoint|Direction|Notes|
|Customer Master|READ|SAP → MAIA. Includes credit limit (for visibility, not enforcement), payment terms, tax class.|
|Item Master|READ|SAP → MAIA. Includes per-item special attribute schema (open text, dropdowns, mandatory flags) — synced into MAIA's extended item attribute model so QT/SO line items in MAIA enforce the same behaviour as SAP.|
|Calculator Logic (SAP customisations)|REFERENCE|Calculator parameters, formulas, and outputs documented from SAP customisations. MAIA mimics the logic in its own modules — no live calculation call to SAP. The trade-off is single source of truth maintenance: changes to SAP calculator logic must be reflected in MAIA.|
|BOM (Bill of Materials)|READ|SAP → MAIA. Required for ready-stock projection. Defines raw material → finished good conversion path and ratios. Phase 1 works off a single primary raw material per finished SKU — spec-dependent substitution (e.g. 6mm plate ← 5.8mm OR 5.5mm OR 5.2mm) is out of Phase 1 scope.|
|Incoming Stock (Phase 1 lightweight)|WRITE (manual)|Purchasing populates an "incoming stock" field per SKU in MAIA manually. Replaced by proper PO / GR doctype in a later phase.|
|Inventory / Stock|READ|SAP → MAIA. Webhook on stock movement preferred; cron fallback. Read at raw-material level for BOM-based finished-goods derivation.|
|Pricing & Price Lists|READ|SAP → MAIA. Includes customer-specific pricing.|
|Customer Outstanding / Ageing|READ|SAP → MAIA. Required for live credit standing surfacing on quotes and orders.|
|Quotation|WRITE|MAIA → SAP. MAIA owns.|
|Sales Order|WRITE|MAIA → SAP. MAIA owns. Custom field schema must be respected.|
|Stock Reservation|WRITE|MAIA → SAP. Manual in Phase 1; automated in Phase 2.|
|Sales Invoice|WRITE|MAIA → SAP. Phase 2 / 3.|
|Payment Entry|WRITE|MAIA → SAP. Phase 2.|
|Delivery Note, Credit / Debit Note, Return Note|WRITE|MAIA → SAP. Phase 3.|

### Microsoft 365 Integration

|   |   |
|---|---|
|Touchpoint|Notes|
|Microsoft Teams|Internal notification channel for ToDos, exceptions, approval requests. Users do not get notified via WhatsApp internally.|
|Outlook|PO and customer correspondence ingestion — MAIA can monitor a shared inbox or specific folders for incoming POs and route them into the intake flow.|
|SharePoint|Read-only reference for legacy documents during transition. The aim is for MAIA to replace SharePoint as the active workflow queue, not integrate with it long-term.|

### Open Technical Questions Requiring IT Workshop

These must be answered before a credible commercial proposal:

1. Are SAP HANA service-layer APIs enabled on Leon Fuat's instance?
    
2. Who owns the SAP integration layer? (Confirm in next meeting.)
    
3. What is the exact list of mandatory custom fields and validation logic for SO creation?
    
4. **Is BOM data maintained in SAP? Is there a simple conversion ratio per finished SKU (Phase 1 scope), or is it scattered across Excel / tribal knowledge?** (Separate question for a later phase: does SAP or the business hold the spec-dependent substitution rules?)
    
5. **Can the SAP calculator logic (parameters, formulas, outputs) be documented and exported, so MAIA can mimic it accurately? Who owns calculator-side changes going forward?**
    
6. **What is the schema of the per-SKU special attribute UI in SAP — open text vs dropdown values, mandatory flags — and can this schema be exported for MAIA to mirror?**
    
7. Are webhooks supported for stock movement and master data changes, or must MAIA poll?
    
8. Is vendor-hosted MAIA acceptable, or is on-prem / customer-hosted required?
    
9. Is there a sandbox / non-production SAP environment available for integration testing?
    
10. **What is the Microsoft Teams integration model — bot, webhook, app? Who owns Microsoft 365 admin?**
    

---

## 12. Stakeholder Map

### Confirmed Internal Champions

|   |   |   |
|---|---|---|
|Name|Role|Position in Buying Process|
|Mr Lim (Soon Kuang Lim)|IT Manager|Initial point of contact; internal champion. Owns SAP integration relationship and IT-side gating.|
|Shi Wai|Business Analyst|Internal champion. Likely the bridge between business process and technical implementation. Strong evaluator role.|
|Pui San|Sales Executor Lead|Internal champion + main user. The most important user voice in the deal — Phase 1 succeeds or fails based on whether Pui San's team experiences daily relief.|

### Other Stakeholders Met

|   |   |   |
|---|---|---|
|Name|Role|Notes|
|Ms Ng|Sales Execution team member|Power user; will use the system daily.|
|Ms Anne|Internal Sales team|Power user; tied to Mill Test Cert generation workflow (Phase 3).|
|CY|Business / Management role|Evaluator / possible sponsor — relationship to be developed.|

### Specialist / Domain Owners

|   |   |   |
|---|---|---|
|Name|Role|Notes|
|Ms Quinccy|Expanded Metal product specialist|Single point of knowledge for newer product line. Phase 2 chatbot knowledge capture should prioritise her domain.|

### Stakeholders Still to Engage

|   |   |
|---|---|
|Role|Why Critical|
|SAP / IT technical owner (deeper than Mr Lim)|API readiness, custom field schema, sandbox access — Mr Lim can introduce.|
|Finance Lead|Credit visibility, SOA generation, payment recording — all touch finance. Phase 1 already affects them.|
|Commercial approver / Executive sponsor|Unknown. Without this, deal stalls after user enthusiasm. Most urgent gap.|
|Drawing Team Lead|For Phase 2 dimensional PDF extraction scope.|

---

## 13. Commercial Signals

|   |   |
|---|---|
|Signal|Reading|
|Spent ~RM 900k on SAP HANA go-live 1–2 years ago|Confirmed budget capacity for enterprise software when value is clear. They are not a price-shopping account. The proposal can be sized for real value, not minimum-viable.|
|"Open lah, open the proposal"|They want the proposal to lead with what we can deliver and what it's worth, not what's cheap. The phrase reads as "we'll evaluate based on value, don't anchor low."|
|Wants proposal after technical discovery|Will not evaluate commercially until they trust feasibility. Sequence proposal after sample-data and SAP workshop.|
|High operational pain, no explicit deadline|Real pain, but urgency is operational rather than executive-mandated.|
|Open to phased scope|Lower barrier to entry — but more importantly, enables a planned upsell roadmap rather than one big bang.|
|Concern about SAP per-user licence cost|Potential ROI lever — MAIA as lighter front-end for non-SAP-licensed users (outdoor sales, juniors).|
|Volunteered sample orders + screen recordings|Strong next-step engagement signal.|
|Three confirmed internal champions across IT, BA, and main user lead|Strong fit signal — coverage across technical, analytical, and user dimensions.|

**Budget clarity: 7/10 (capacity confirmed via SAP HANA spend, exact appetite TBC). Urgency: 7/10. Momentum: 8/10. Solution fit: 8/10.**

### Commercial Strategy Implication

The SAP HANA spend changes the commercial posture meaningfully. They are willing to invest in operational software when it is positioned correctly. The proposal should be structured as a **land-and-expand roadmap**:

- **Phase 1 (Land)** is sized to win the deal and create the _"yes, this is worth what we paid"_ moment within 8–12 weeks of go-live. It must include the wow features and the highest-pain wins — not the cheapest viable scope.
    
- **Phases 2 and 3 (Expand)** are positioned as **planned upsell releases** with clear timelines, scope, and pricing — so the client can budget for them as part of an annual roadmap, not as out-of-scope surprises.
    

This is how you sell into a SAP HANA buyer. They are used to multi-year enterprise roadmaps. Match that posture.

---

## 14. Risks

|   |   |   |   |
|---|---|---|---|
|#|Risk|Severity|Mitigation|
|1|SAP customisation complexity (custom fields, special columns, ~10 calculators, per-SKU attribute UI)|High|IT workshop before proposal; Phase 1 scoped to top 1–3 calculators and a manageable custom field subset.|
|2|BOM data maturity in SAP unknown for Phase 1 single-primary-raw-material model|Medium|Confirm in IT workshop. If BOM conversion ratios are partial / Excel-based, scope lightweight BOM ingestion as part of Phase 1. Spec-dependent substitution rules are explicitly deferred — not a Phase 1 risk.|
|2b|No Purchase Order / Goods Receipt doctype in MAIA today — Phase 1 "incoming stock" is a lightweight manual field, not a full purchasing workflow|Low for Phase 1|Scope the lightweight field properly; position full PO / GR doctype as a Phase 3 product-build item with commercial line-item attached.|
|3|Calculator logic drift between SAP and MAIA over time — MAIA mimics SAP calculator logic; if SAP customisations change later and MAIA isn't updated, results diverge|Medium-High|Define a calculator change-control process with Leon Fuat IT in the SOW. Document each calculator's parameters, formulas, and outputs as a versioned reference.|
|4|Tribal knowledge not codified (e.g. Ms Quinccy for Expanded Metal)|High|Phase 1 captures corrections for SKU/UOM; Phase 2 codifies specialist product knowledge.|
|5|Scope creep into certs, finance, batch traceability, manufacturing|High|Phased proposal with explicit MVP boundaries written in.|
|6|Missing decision-makers (Finance lead, executive sponsor)|Medium-High|Force next meeting to identify commercial sponsor. Pui San and Shi Wai can help map.|
|7|Client expectation drift toward "one button, fully automated"|Medium|Frame consistently as "checker-first, simple cases first."|
|8|Drawing AI overpromise|Mitigated|Drawing team produces structured dimensional PDF; MAIA extracts from PDF, not CAD.|
|9|Microsoft Teams integration scope — if Teams-side admin is restrictive, notification UX may need workarounds|Low-Medium|Confirm Microsoft 365 admin ownership in IT workshop.|
|10|Document attachment extraction accuracy varies by attachment quality — handwritten notes, photos, low-quality scans degrade auto-population|Medium|Phase 1 extraction is assistive (user reviews and confirms). Set realistic accuracy expectations with Pui San during scoping.|

---

## 15. Recommended Next Steps

### Immediate (This Week)

- Send structured **data request checklist** to Leon Fuat: 10–20 sample POs across all order types (ex-stock, standard dimensional, processed, custom drawing-based, expanded metal) + SAP screen recordings of SO creation including custom field workflows + sample BOM structure for one or two finished goods + sample customer ageing report.
    
- Send **technical questionnaire** for IT workshop preparation.
    
- Confirm IT workshop attendance with Mr Lim, Shi Wai, and the deeper SAP technical owner.
    

### Short Term (Next 2–3 Weeks)

- Run **IT / SAP workshop** to validate API readiness, BOM data structure, custom field schema, Microsoft Teams integration model, hosting preference.
    
- Run a **sales-ops scoping session** with Pui San to nail down: order mix percentages, top 3 priority calculators, average per-order processing time, explicit Phase 1 success metrics, credit standing tolerance configuration.
    
- **Identify the commercial approver and executive sponsor** through Mr Lim, Shi Wai, or CY.
    

### Proposal (Following the Workshops)

Phased land-and-expand commercial proposal — pricing sized for confirmed enterprise budget capacity, not minimum-viable.

**Phase 1 — Land (target: 8–12 weeks to go-live)** Core MAIA platform deployed for Pui San's sales executor team:

- Per-doctype workspace replacing SharePoint queue and Microsoft Teams chat-scouring pattern
    
- Comments, tagging, assignment per doctype (out-of-the-box)
    
- PO/enquiry intake with structured extraction (80–90% accuracy)
    
- SKU + UOM mapping with learned corrections
    
- Mandatory field validation gate
    
- Native quotation with prospect entity support (single-level price approval)
    
- SO push to SAP HANA via API
    
- Sample PO default pricing
    
- Chat-based sales assistant
    
- Microsoft Teams notification channel
    
- **Wow features:** document-attachment intelligence per doctype, BOM-based stock forecasting, live credit standing surfacing
    
- **Quick wins:** SOA generation, manual stock reservation for raw material
    

**Phase 2 — First Upsell (target: 4–6 months post Phase 1 go-live)** Customisations and pricing intelligence:

- Calculator mimic-and-elevate (top 1–3 calculators)
    
- Item special attribute extension on QT/SO line items
    
- Large-order UX investment (20–30 line item handling)
    
- Customer drawing PDF extraction
    
- Payment recording workflow
    
- Multi-tier price approval gating
    

**Phase 3 — Second Upsell (target: 9–12 months post Phase 1 go-live)** Vertical depth and advanced workflows:

- Mill test cert / COA generation
    
- C1 / C3 tax exemption handling
    
- Downstream document lifecycle (DN, RN, CN, DBN)
    
- Specialist product knowledge capture (Expanded Metal first)
    
- Automated stock reservation
    
- Remaining calculators
    
- Customer-facing SOA self-service
    
- Management reporting & dashboards
    
- CRM-style customer memory
    

**Commercial structure:**

- Phase 1 priced as a deployment + first-year subscription. Sized for the value created (8–12 week deployment of a system that retires SharePoint/Teams shadow workflow and gives sales executors daily relief).
    
- Phases 2 and 3 priced as planned add-on releases with timelines and scope defined upfront — so Leon Fuat can plan annual budget allocations.
    
- **Calculator change-control contract** baked into Phase 2 — funds ongoing parity maintenance between SAP and MAIA calculators.
    
- Out-of-scope list defined explicitly (manufacturing/MES, full BI platform, customer-facing portal beyond SOA, etc.) to prevent scope creep.
    

**Success metrics per phase** (defined in scoping with Pui San):

- Phase 1: orders entered same-day rate, hours saved per sales executor per day, % of orders fully validated at first pass, SOA turnaround time, % of quotes with credit context, new SE onboarding time
    
- Phase 2: % of calculator parameters auto-populated from attachments, % of SOs with all special attributes pre-filled at SAP push, large-order processing time
    
- Phase 3: cert generation turnaround, downstream document automation rate, management reporting adoption
    

---

## 16. Why MAIA Wins Here — Summary

Leon Fuat is a confirmed enterprise software buyer (RM 900k SAP HANA spend 1–2 years ago). They are not a price-shopping account — they invest when value is clear. They are also growing, which means Pui San's sales executor team is increasingly drowning in volume; the operational pain is acute and getting worse.

The deal is structured as a land-and-expand roadmap that matches how SAP HANA buyers think.

**Phase 1 lands the relationship by transforming Pui San's daily reality** — the per-doctype workspace replaces the SharePoint queue, the comments-and-tagging pattern replaces the Microsoft Teams chat-scouring, document-attachment intelligence does the manual reading work the team does today, BOM-based stock forecasting gives juniors what experienced operators intuit, live credit standing replaces the stale 2-week Excel report, and SOA generation takes finance out of the lookup-service business. This is the _"yes, this is worth what we are paying"_ moment.

**Phases 2 and 3 are positioned as planned upsell releases** — calculator mimic-and-elevate, item attribute extension, large-order UX, drawing PDF extraction, payment workflows, mill test certs, tax exemption, downstream documents, dashboards. Each is a customisation or vertical depth feature that requires deeper IT engagement and ongoing maintenance — properly priced and contracted, not given away in Phase 1.

Three confirmed internal champions across IT (Mr Lim), business analysis (Shi Wai), and the main user team (Pui San) is rare strength. Get the SAP technical owner and the commercial sponsor identified in the next two weeks, run the IT workshop, and propose a roadmap that matches how Leon Fuat already buys enterprise software.

The risk is undersizing Phase 1 because the previous proposal posture treated this as a budget-constrained account. It is not. Land big enough to matter, then expand on planned releases — that is how this becomes a multi-year design-partner account rather than a one-shot deployment.

---

## 17. Additional Commentary — Internal Alignment Notes

These notes capture alignment points between Ivan and MindHive CEO Johnson Goh on the Leon Fuat opportunity. They reflect decisions made during narrative development and should be read alongside the phasing strategy in Section 7.

### 17.1 Phase 1 Inclusion Rule: Low Effort + High Value

The rule applied to every feature being considered for Phase 1:

- **Low effort** — in this case, defined as **under 5 mandays of implementation effort**.
    
- **High value** — the feature creates acute, visible daily relief for Pui San's sales executor team, or is what makes Leon Fuat say _"yes, this is worth what we paid."_
    

**Features meeting both criteria belong in Phase 1.** Features that are high value but higher effort (calculator mimic-and-elevate, item attribute extension, large-order UX investment, drawing PDF extraction, payment recording) go to Phase 2 as planned upsell. Features that are lower value are Phase 3 or out of scope.

### 17.2 Base MAIA Alone Is Not Sufficient for Leon Fuat

A direct alignment point: **base MAIA out-of-the-box, without the Phase 1 extensions, would not be useful enough for Leon Fuat's day-to-day operations.** They would find it _interesting but not mission-critical_.

The Phase 1 wow features — document-attachment intelligence per doctype, ready-stock projection, live credit standing surfacing, SOA generation — are what turn MAIA from _"a structured workflow tool"_ into _"the operational layer we can't work without."_ Without these, the sales executor team gets partial relief; with them, they get daily transformation.

This is why Phase 1 is not _"minimum viable MAIA."_ It is **MAIA + the specific extensions that make it useful for Leon Fuat's day-to-day ops.** This distinction is critical for pricing — Phase 1 is priced for the tailored value delivered, not the base platform deployment.

### 17.3 Post-Discovery Process — What Happens Before the Proposal

Four things happen between the 22 Apr discovery meeting and the commercial proposal:

1. **MindHive internal proposal plan** — scope the Phase 1 / 2 / 3 roadmap internally, validate effort estimates, lock pricing posture.
    
2. **SAP vendor discovery on integration touchpoints** — talk to Leon Fuat's SAP integrator to understand API availability, custom field schema, calculator export feasibility, and BOM data structure. Leon Fuat's SAP is customised, so this is a mandatory step.
    
3. **Use-case-tailored demo** — a demo built specifically on Leon Fuat's actual sample orders and workflows. This is the wow. A generic MAIA demo will not move this deal; a demo that handles a real Leon Fuat 20-line order with attachments, computes BOM-based ready stock, and surfaces credit standing is what closes the deal.
    
4. **SAP green light** — technical confirmation from Leon Fuat's IT/SAP owner that the integration is feasible within the proposed Phase 1 scope.
    

**Both the tailored demo AND the SAP green light are required.** The demo wows the business-side stakeholders; the SAP green light de-risks the technical feasibility. One without the other leaves a gap — an excited business sponsor with no technical path, or a technical green light with no commercial pull. The proposal goes out only after both are secured.

### 17.4 Commercial Ambition — Confirmed Bigger Ticket Posture

Internal alignment: this account should be quoted as a **bigger ticket**, not a standard SME deployment. The RM 900k SAP HANA spend 1–2 years ago confirms enterprise budget capacity. The Phase 1 scope includes tailored extensions that justify the value. The three confirmed internal champions across IT, BA, and primary user lead reduce execution risk. Price for the value being delivered; do not anchor low.

---

_Compiled by: Ivan Chiang | 22 Apr 2026Sources: Leon Fuat public business research, deep-dive discovery meeting transcript and debrief, post-meeting design notes, supplementary client context (Microsoft 365 stack, Microsoft Teams working-group pain, SharePoint queue replacement model, Expanded Metal product line, internal champions, credit non-enforcement model, BOM-based stock forecasting, SOA generation, prospect-stage quoting, calculator UX elevation, document-attachment per-doctype intelligence, item attribute extension, large-order UX, RM 900k SAP HANA spend signal, sales-executor primary-user lens)Status: working draft v0.6.3 — adds Section 17 (Additional Commentary — Internal Alignment Notes) capturing Phase 1 inclusion rule (low effort + high value, <5 mandays), base MAIA insufficiency for Leon Fuat, post-discovery process sequence (internal plan → SAP vendor discovery → tailored demo → SAP green light → proposal), and commercial bigger-ticket posture alignment with MindHive CEO._
---
owner:
  - Your Name
status: draft
last_reviewed: 2026-03-31
client: JDX Tea (九鼎香)
meeting_date: 2026-03-27
transcript_ref: "[[JDX Meeting Transcript - YYYY-MM-DD]]"
pain_points_sources:
  - "[[JDX Meeting Transcript - YYYY-MM-DD]]"
  - "[[JDX Transcript]]"
---

# Requirement Gathering Output — JDX Tea (九鼎香) — 2026-03

| Field | Details |
|-------|---------|
| **Client** | JDX Tea (九鼎香) — JDX GIFT AND FOOD SDN. BHD |
| **Meeting date** | 2026-03-27 |
| **Attendees** | Brendan Ou Yong (MAIA), Jeremy Chan (MAIA), Kong Kong (JDX) |
| **Purpose** | Initial requirement gathering — business workflow discovery |
| **Raw transcript** | [[JDX Meeting Transcript - YYYY-MM-DD]] |

---

## Pain points — from meeting transcripts

Synthesised from **verbatim / near-verbatim** discussion in:

- **RG** — Requirements gathering with Mr. Kong (full transcript in [[JDX Meeting Transcript - YYYY-MM-DD]], same session as [[2026-03-27-JDX-Requirements-Gathering]])
- **GTM** — Pre-sales / GTM debrief ([[JDX Transcript]], Mar 25)

These are **their** problems as stated — not MAIA’s interpretation — grouped for proposal, demo, and scope.

### Peak season, staffing, and urgency (RG)

- **Volume cliff:** Hundreds of orders **per day** in a few peak windows vs **often zero** orders a day for long off-season stretches — hard to size permanent headcount.
- **Surge hiring:** Must **hire and train many part-timers / “newbies”** each festival; split outlets across coordinators; daily checking of promoter reports vs transfers.
- **Always-on pressure:** Customers contact **after office hours**; someone must **stand by early morning or overnight** to **issue / re-send invoices** so customers can pay and move forward.
- **Where they want help first:** Mr. Kong summarised the priority as **(1) billing** and **(2) delivery / order tracking** — if MAIA can reduce temporary hiring for those two, “that would help a lot already.” (RG)

### Billing, pro forma, and payment coordination (RG)

- **Pro forma as “sales order”:** Customers need the word **invoice** for internal payment approval → heavy use of **pro forma invoice** before payment; only then convert to **actual invoice**.
- **Rich remarks, single document:** Customisation (ribbon / organza / shrink-wrap, greeting card wording, urgency vs standard 5–7 working days, price tag on/off, item swaps like mushroom → pineapple tart) lives in a **remark column**, not separate SKUs — same instructions must **flow to warehouse, ops, and delivery**.
- **WhatsApp-native billing workflow:** Separate group chatter: **billing requests** vs **payment advice** — coordinators and accounts assistants post bills to promoter groups; payment must be **matched** to pro forma before **delivery orders** go out. Highly manual, thread-based.
- **Tiered discounts & exceptions:** **Fixed rules** by order value band (e.g. 5% / 10% / 15%) **change by season** and market (e.g. COVID online norms); **custom / bring-your-own** hamper work **voids** standard discount — **human judgment**, not fully rule-automatable in their view. (RG)

### Delivery, proof, and multi-drop complexity (RG)

- **Addresses outside structured channels:** Multi-recipient corporate orders: delivery details often captured **verbally / WhatsApp**, then reflected on **DO / operational paperwork** — error-prone.
- **High-effort edge cases (few incidents, large time sink):** Wrong item, wrong date, late driver → **refused sign**, return, **re-schedule** — “chaotic” even if infrequent.
- **Split fulfilment model:** **Klang Valley** — own fleet + contracted courier, **photo POD** in a shared group; **outstation** — 3PL (e.g. JT, Skynet, CityLink), **tracking numbers / screenshots / consignee notes**. Coordinators **chase partners** and **evidence**; customers **chase** CS or promoters.
- **Single order, many destinations:** One order → **dozens of addresses** (mix of local and outstation, some batched to offices) — dedicated ops for **packing, cartons, handoff to express**; status updates are **labour-intensive**.

### Outlets, consignment kiosks, and stock movement (RG · GTM)

- **No PO consignment:** Giant / AEON seasonal kiosks — **no purchase order**; placement, sell-through billing, and replenishment logic are **non-standard** vs typical B2B PO flows.
- **Daily promoter discipline:** Fixed-format **daily stock report** (opening, inflow, transfers, adjustments, returns, closing); **top-up requests** often **also** typed in WhatsApp (not only in the report).
- **Rationalising top-ups:** Ops must **challenge** promoters who **over-order** “out of fear” of stockouts — extra coordination load.
- **Outlet placement & forecasting (GTM):** Which SKUs and quantities go to **which hypermarket outlet** is a **heavy judgment** problem; boss described forecasting as **“by feeling”** — internally may use Excel / time series, but **unclear** and needs discovery (GTM).

### Inventory, data, and “system mess” (RG)

- **Excel + manual truth:** Stock and operational quantity sense live largely in **Excel** and manual checks; **SQL** used for **accounting / boom codes**, not production or live inventory modules.
- **Past failed SKU hygiene:** They tried loading **full procurement** into the system → became **“so messy”** that accuracy effort **wasn’t worth it** — shapes **low appetite** for inventory-heavy MAIA scope unless sales bottleneck is solved first.
- **Substitution & OOS:** ~**70%** procurement forecast accuracy; **substitutions** with customer consent; **end-of-season** brochure vs shelf alignment — operational load even when “allowed” in T&Cs.
- **Competition & season volatility (RG):** Sales can **swing** hard year on year (packaging innovation, competitor dumping, promoter / floor placement changes) — undermines **stable** forecasting; reinforces **manual** and **judgment-heavy** ops.

### Channel scope and expectations (RG · GTM)

- **Buying / discovery friction:** Early in the session Mr. Kong asked to **skip abstract flow diagrams** and instead run **on-the-spot examples** in MAIA — diagrams felt **too complicated** before imagining the tool in **their** context (team explained why process discovery still had to come first). Useful for **demo style**: lead with **their** samples, not generic charts. (RG)
- **Seasonal B2B / hampers first:** **~80%** of peak sales in the seasonal / corporate hamper pattern; **tea retail** and **van (QSoft) routes** are **lower priority** for efficiency gains vs peak.
- **Tea / SKU complexity deferred:** **~3,000 SKUs** for tea art (year, factory, grade, batch) — Mr. Kong explicitly **parked** deep system treatment until **seasonal** use case is proven (“messy”; “how [would] AI cope”).
- **Iron Man / “Jarvis” expectation:** Wants **conversational, magical** automation; realistic expectation set that much may still be **process change** (left hand vs right hand) — tension to manage in change management (RG; aligns with [[2026-03-27-JDX-Requirements-Gathering]]).

### Giant / AEON B2B portal billing (RG)

- **Explicitly lower priority for MAIA:** Monthly **hypermarket B2B portal** billing, commission / display charge deductions, CN from retailer — **few bills**, often **after** peak; staff have **slack time**; “not critical” if MAIA never touches it.

---

## E2E Workflow — Seasonal Hamper (Main Priority)

> This is the primary flow JDX wants MAIA to support. Covers from order intake to delivery proof.

| Step | Today (Current) | With MAIA |
|------|----------------|-----------|
| **Order intake** | Customer contacts via WhatsApp / Facebook / promoter / website — no central log | Same channels retained; all orders logged and tracked in MAIA from first contact |
| **Pro Forma Invoice creation** | Accounts assistant manually creates pro forma in SQL; customisation remarks typed in free text | Accounts creates Pro Forma Invoice in MAIA with structured remarks column; product bundle selected from catalogue |
| **Discount applied** | Manual calculation per order value; coordinator applies season rules from memory | Discount tiers configured in MAIA; auto-applied at Pro Forma stage; admin updates tiers each season |
| **Send to customer** | Pro Forma sent via WhatsApp group manually | Pro Forma sent from MAIA (email / WhatsApp link); customer receives clean formatted document |
| **Payment confirmation** | Customer sends payment advice slip to a separate WhatsApp group; accounts manually matches slip to pro forma | Payment advice recorded in MAIA; matched against open Pro Forma; triggers DO creation when confirmed |
| **DO creation** | Manually created after payment matched; customisation remarks re-typed or copy-pasted from pro forma | DO auto-generated from confirmed Pro Forma; all remarks propagated automatically — visible to warehouse |
| **Warehouse packing** | Ops team reads printed / WhatsApp DO; must cross-check remarks manually; custom orders re-batched | Warehouse works from MAIA DO with full remarks visible; component substitutions logged in MAIA with reason |
| **Delivery scheduling** | Manual routing; coordinator assigns vehicle via WhatsApp; multi-address orders tracked on spreadsheet | Delivery scheduling in MAIA; vehicle assignment; multi-address orders split into individual drops from one order |
| **Delivery & POD** | Driver delivers; customer signs physical DO; photos sent to WhatsApp group; coordinator retrieves manually | Driver captures photo POD in MAIA (mobile); delivery status updated in real time; coordinator sees instantly |
| **Customer delivery tracking** | Customer chases coordinator / promoter via WhatsApp to find out status | Customer-facing tracking link / status page; reduces inbound WhatsApp chases |
| **Failed delivery** | Coordinator handles rescheduling manually via phone / WhatsApp; time-consuming and error-prone | Failed delivery flagged in MAIA; rescheduling logged; coordinator notified with context |
| **Invoice conversion** | Manual conversion Pro Forma → Invoice in SQL after payment and delivery confirmed | One-click Pro Forma → Invoice conversion in MAIA; triggered on payment confirmation |

**Discount rules (applied at Pro Forma stage):**

| Order value (MYR) | Discount |
|-------------------|---------|
| Any single hamper > 200 | Free delivery (KV only) |
| < 500 | 5% |
| 500 – 1,500 | 10% |
| > 1,500 | 15% |
| Customised orders | No standard discount — manual decision |

> Note: Discount tiers are reviewed and adjusted each season.

---

## E2E Workflow — Consignment (Giant / AEON, Seasonal)

> Lower MAIA priority per client, but understanding it helps scope the full picture.

| Step | Today (Current) | With MAIA |
|------|----------------|-----------|
| **Season setup** | JDX manually deploys promoter + kiosk to outlet; no system record of outlet assignment | Outlet registered in MAIA; opening stock logged; promoter assigned to outlet |
| **Daily stock report** | Promoter fills fixed-format report manually; sends via WhatsApp group; coordinator reads and verifies | Promoter submits digital daily stock report in MAIA per outlet; auto-validated against previous closing balance |
| **Top-up request** | Promoter messages WhatsApp group; ops team reads, manually decides allocation; can over-order | Top-up request raised in MAIA; ops team reviews, approves / adjusts; over-ordering challenged via system |
| **Stock delivery to outlet** | Manually coordinated; stock transfer noted in SQL | DO generated in MAIA for outlet top-up delivery; stock movement tracked |
| **Monthly billing** | JDX manually bills on hypermarket's B2B portal; deducts commission and display charges | Out of scope for MAIA — hypermarket portal handles this; MAIA records the resulting receivable only |

---

## E2E Workflow — Van Sales (Regular, Non-Seasonal)

> ~10–15 client visits/day; currently on QSoft. Assess keep vs replace with tech team.

| Step | Today (Current) | With MAIA |
|------|----------------|-----------|
| **Visit & bill** | Salesman opens bill on QSoft tablet on the spot; prints via mini printer | **Option A (keep QSoft):** QSoft integrates to MAIA via API instead of SQL. **Option B (replace):** Salesman uses MAIA mobile/tablet to create invoice on spot and print |
| **Inventory update** | QSoft → SQL sync (real-time unclear) | Inventory updated in MAIA in real time on bill creation; no sync lag |
| **Payment recording** | Recorded in QSoft / SQL separately | Recorded directly in MAIA; single source of truth |
| **Reconciliation** | Manual reconciliation between QSoft and SQL at end of day | All van sales in MAIA; no reconciliation gap |

---

## Captured Requirements

### Sales Workflow

- Highly seasonal business — peaks during CNY, Hari Raya, Mooncake Festival, Deepavali; near-zero orders off-season
- 5 sales channels: consignment (Giant/AEON hypermarkets), field van sales (bottle/packet shops), retail walk-in (6 stores), B2C online (Facebook/website → WhatsApp), corporate B2B (hamper orders)
- No purchase orders from Giant/AEON — consignment basis; their B2B portal handles billing monthly
- **Pro forma invoice** used in place of sales order — customers need the word "invoice" to process internal payment
- Customisation handled via **remarks column** on pro forma invoice (ribbon colour, greeting card wording, item substitutions, delivery date)
- General rule: payment collected **before** delivery; pro forma converts to invoice only after payment confirmed
- Van sales (~10–15 clients/day) handled via QSoft tablet + mini printer, integrated to SQL

### Finance Workflow

- Payment methods: bank transfer, Touch & Go, cheque — mostly cash upfront
- Only ~2 dealer accounts on credit terms; credit notes very rare
- Giant/AEON billed monthly via their B2B portal — deduct commission/display charges from final payment; client says this is low MAIA priority
- Pro forma → Invoice conversion happens once payment is received

### Logistics / Warehouse Workflow

- Inventory managed **manually in Excel** — SQL only captures accounting (boom code); no production or inventory module used in SQL
- Delivery modes: own vehicles (lorry, double-deck van, normal van) for Klang Valley; contracted courier for local; 3PL (JT, Skynet, CityLink) for outstation
- Driver takes photo on delivery as proof; physical DO signed by customer
- Multi-location delivery common for corporate orders (e.g. 50 hampers to 50 different addresses)
- Outlet promoters submit daily stock reports via WhatsApp group; top-up requests also via WhatsApp

### Integration Requirements

- Current system: SQL ERP (accounting only) + QSoft (van sales, integrated to SQL)
- No accounting integration needed — Finance handles manually
- QSoft (van sales tablet) — assess whether to replace with MAIA or integrate
- WhatsApp is the backbone of operations — not replacing, but MAIA should reduce reliance on it for order tracking and billing

### Special Workflows

- **Consignment — Giant/AEON:** Seasonal kiosks with own promoters; daily stock report; top-up via WhatsApp request; monthly billing via hypermarket B2B portal; client says low MAIA priority
- **Van sales (field salesman):** ~10–15 clients/day; QSoft tablet issues bill on spot; currently integrated to SQL — assess replacement
- **Corporate hamper orders:** Customer may order 50+ pieces to be delivered to multiple separate addresses; highly manual coordination today

---

## Gaps & Open Questions

| # | Question | Raised by | Status |
|---|----------|-----------|--------|
| 1 | QSoft — keep and integrate, or replace with MAIA van sales module? | Brendan | open — needs clarification with JDX |
| 2 | Multi-address delivery (one order → 50 locations) — feasible in MAIA? | PM | open — discuss with tech team |
| 3 | Sample documents requested from JDX — for product demo prep; JDX to action | Brendan | open — pending client |

---

## Client preparation — samples & documents (briefed)

MAIA has briefed JDX to prepare the following **samples**. They are inputs for a **credible product demo** (realistic documents, line items, and remarks), proposal accuracy, and integration scoping — not paperwork for its own sake. Use the checkboxes when each item is received (file in client folder or link in frontmatter / tracker).

**Demo rule of thumb:** If a sample is still missing, demo that flow using **clearly labelled synthetic data** inspired by the questionnaire — and note the gap in the demo recap.

### Commercial documents

- [ ] **Pro forma invoice** — example(s) showing real layout, numbering, and **remarks / customisation** column usage
- [ ] **Invoice** — post-payment / standard invoice example (after pro forma, if different)
- [ ] **Delivery order (DO)** — including multi-drop or outstation examples if available
- [ ] **Credit note** — example (even if rare); needed to confirm edge cases and wording

### Customer data

- [ ] **Customer** — at least one **example customer record** (master data: billing entity, terms, contacts — anonymise if required)
- [ ] **Customer list** — **example extract** (structure only OK if anonymised: columns, typical B2B vs corporate rows)

### Inventory & stock

- [ ] **Inventory** — how they represent stock today (context: they use Excel + manual process)
- [ ] **Sample inventory list** — export or spreadsheet sample (SKU, location, qty, or however they track)

### Product & information

- [ ] **Product catalog** — list or export (categories, hamper vs single SKU if split)
- [ ] **Product information** — spec sheets, packaging notes, or whatever they use for descriptions (PDF/Sheet OK)
- [ ] **FAQ** — ordering / product / seasonal hamper **FAQ** they give staff or clients (doc, page, or message template)

---

## Demo Readiness — product demo

### Client samples → what we show in demo

Use this table so the **product demo** uses JDX-shaped data where possible. Rows align with **Client preparation — samples & documents** above.

| Product demo scenario | JDX sample / data to have first | If missing |
|----------------------|----------------------------------|------------|
| Pro forma with **remarks** (ribbon, greeting card, delivery date) | Pro forma example + **product catalog** + **product information** + **example customer** | Synthetic hamper + one corporate customer; call out “sample only” |
| **Pro forma → invoice** after payment | **Invoice** example (pair with pro forma if they differ) | Walk through state change with generic line items |
| **Delivery order** + status | **DO** sample; multi-drop / outstation DO if available | Single-DO happy path + describe multi-drop from notes |
| **Multi-address** (one order → many drops) | DO or order sheet showing multiple delivery lines / addresses | Diagram + one synthetic split |
| **Credit note** (edge case) | **Credit note** example | Skip live CN or show generic; note rarity with JDX |
| **Customer master** / list behaviour | **Customer** record + **customer list** extract | One anonymised B2B + one corporate-style row |
| **Catalogue** navigation / hamper mix | **Product catalog** + **FAQ** (if ordering wording matters) | Subset of SKUs loaded for demo env only |
| **Inventory** context (what “in stock” means to them) | **Sample inventory list** + short note on **inventory** process | Say inventory is manual today; light demo or omit deep stock |

### Scenarios to rehearse / build in demo environment (MAIA)

> JDX asked to see these flows. Check off when the demo build is ready — not when the client sends files.

- [ ] Create pro forma invoice with customisation remarks (ribbon colour, greeting card wording, delivery date)
- [ ] Convert pro forma invoice → invoice on payment received
- [ ] Issue delivery order and track delivery status per order (customer-visible)
- [ ] Multi-address delivery: one order dispatched to multiple locations
- [ ] Van sales flow — create and issue bill on spot (QSoft comparison)
- [ ] Outlet stock top-up request and delivery scheduling

### Demo day checklist (quick)

- [ ] Confirm which JDX samples arrived; update checkboxes in **Client preparation**
- [ ] Open with “today we’re using your samples / anonymised examples — here’s what’s real vs illustrative”
- [ ] Capture gaps and questions live → **Gaps & Open Questions** after the session

---

## Next Action Checklist

- [ ] Convert requirements → feature requests (log in [[09 - Intake & Triage/Request Intake Inbox]])
- [ ] Brief tech team on requirements and expected flows
- [ ] Brief tech team on feasibility — flag constraints (pro forma invoice type, multi-address DO, QSoft integration)
- [ ] Prepare product demo (see **Demo Readiness — product demo**: sample-to-scenario map + rehearsal checklist)
- [ ] Prepare proposal (high-level scope, for JDX boss alignment)
- [ ] Draft SOW (detailed scope, flows, constraints, exclusions)
- [ ] SOW → PRD + internal specs (for implementation and UAT test cases)
- [ ] Align SOW with client (sign-off that scope = how the project is closed and tested)

---

## Artefact Tracker

| Artefact | Owner | Status | Due |
|----------|-------|--------|-----|
| Samples & documents from JDX — see **Client preparation — samples & documents (briefed)** (pro forma, invoice, DO, credit note, customer example + list, inventory + sample list, product catalog + product info, FAQ) | JDX (Kong Kong) | pending client | |
| Feature request log | | not started | |
| Tech brief — requirements | | not started | |
| Tech brief — feasibility (pro forma type, multi-address DO, QSoft) | | not started | |
| Demo script / scenarios | | not started | |
| Proposal deck | | not started | |
| SOW document | | not started | |
| PRD | | not started | |

---

## See Also

- Prep outputs for JDX live in this folder: `Prep After Requirement Gathering` (same as “JDX Prep” in conversation)
- [[2026-03-27-JDX-Requirements-Gathering]] — structured notes from requirements session (sample requests also in action items)
- [[JDX Meeting Transcript - YYYY-MM-DD]] — raw Fireflies transcript
- [[JDX Discovery Call - YYYY-MM-DD]] — discovery call questionnaire
- [[09 - Intake & Triage/Request Intake Inbox]] — log feature requests here
- [[02 - PM Playbook/Templates/[Template] PRD]] — next step after SOW
- [[02 - PM Playbook/Templates/[Template] Requirement Gathering Output]] — template this file was based on

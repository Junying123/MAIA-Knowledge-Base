---
owner: Gareth
status: draft
last_reviewed: 2026-08-04
client: Holsen
---

# Holsen — Play It Like A User: UAT Field Guide

<!-- LARK-TOC-PLACEHOLDER: insert native Table of Contents block here after import -->

## Navigation Index

- Part A — Read Before You Play
  - Section 0 — Cover and Logistics
  - Section 1 — How to Play
  - Section 2 — The Business World You Are Entering
  - Section 3 — Product Map
  - Section 4 — The Map (In Bounds / NS / Out of Bounds / Beyond Tester Reach)
  - Section 5 — Persona Cards
    - Persona P-01 — Tam Ze Xin, Sales / System Admin
    - Persona P-02 — Chin Zhao Heng, Boss / Credit Controller
    - Persona P-03 — Noor Aili Nafiah, Logistics
    - Persona P-04 — Intan Atikah, Procurement
    - Persona P-05 — Murugesu A/L Palanivello, Production
    - Persona P-06 — Wong Shui Fern, Finance
  - Section 6 — Trust Killers
- Part B — The Missions
  - Section 7 — Campaign Overview
  - Section 8 — Mission Cards (M-01 through M-13)
  - Section 9 — Boss Fights and Regression Alerts
  - Section 10 — Side Quests
  - Section 11 — Field Manual
  - Section 12 — Appendix: Coverage and Readiness Map

---

## PART A — READ BEFORE YOU PLAY

### Section 0 — Cover and Logistics

**Client:** Holsen Interchem Sdn. Bhd.
**Product:** MAIA order-to-cash chatbot and workspace (Sales, Logistics, Finance)
**UAT round:** Phase 1 / Core-MAIA acceptance, per `Holsen_MAIA_UAT_Signoff_Checklist`
**Source docs:** Holsen — Scope Lock v2, Holsen — VoC Extraction v1, Holsen_MAIA_UAT_Signoff_Checklist
**Proposed UAT signatory:** Tam Ze Xin (not yet formally confirmed — see `SL-40`)

You need: your assigned UAT account, this Field Guide, the `00_START_HERE_INPUT_LIBRARY` folder, and the bug/XP tracker link. Nothing else.

---

### Section 1 — How to Play

You are not a QA engineer clicking through a script. You are a Holsen employee — a salesperson, a logistics officer, a finance clerk — doing your actual job for one day inside MAIA. Each Mission Card gives you a persona, a situation, and a goal. You decide how to phrase things, which data to pick, and what "done" looks like, within the stated win conditions.

- **Play in character.** Use the persona's voice and business rules, not your own instincts about "how software should work."
- **Say it your way.** Every mission gives you sample phrasing — read it once, then forget it and type your own.
- **Log everything.** Wins, failures, and anything that surprises you — even if it's not technically a bug (see Section 11).
- **Stop and ask** when a mission tells you to — that's not a failure, that's the system doing its job.
- **Out of bounds is not a bug.** If you go looking for something explicitly marked out of scope (Section 4) and it's missing, that's expected — log it as an Observation, not a defect.

---

### Section 2 — The Business World You Are Entering

#### At a glance

Holsen Interchem Sdn. Bhd. is a B2B industrial chemical distribution and surface-treatment company in Shah Alam, Malaysia, running roughly 70-90 customer purchase orders a day across three very different product lines: fixed-price manufactured goods, floating-price commodity trading goods, and controlled/regulated chemicals subject to tax-exemption certificates. It has no delivery fleet of its own, no dedicated warehouse system beyond one physical site (`HQ`), and is mid-migration from UBS to SQL Accounting. It went live on MAIA around 25 June 2026, slipped from an original 31 March target.

#### What the business does

Holsen buys chemicals in bulk and either resells them as-is (trading) or repackages/processes them into smaller units (manufacturing). Some customers are tax-exempt under Malaysia's C1 (manufacturer) or C3 (import-on-behalf) sales tax certificate schemes; some products are poison-flagged and legally require a signed Poison Sign Order (PSO) at delivery. The business runs on relationships and verbal authority as much as on paperwork — pricing decisions, credit extensions, and even certificate handling routinely go through informal, boss-level sign-off rather than a rigid system rule.

#### A normal working day

A salesperson receives a PO by WhatsApp, photo, or handwritten note — often for a round weight ("100 kilos"), not a packing-unit count. They translate that into MAIA, key in or confirm a price (verbally approved by the boss if it's not already on file), and pass the order to Logistics. Logistics checks stock, decides which physical batch fulfils the order, and — if the customer requires C1/C3 — makes sure the right certificate is attached before anything can be submitted. A picker in the warehouse, who never touches the MAIA front end, gets a link to a Pick List and records what was actually pulled. A Delivery Note goes out with a third-party transporter — Menaka for local runs, GMax or Tiong Nam Logistics for anything further. Finance closes the loop with an Invoice, sometimes issuing several partial invoices against a single delivery as a customer draws down stock over time.

#### The end-to-end journey

PO in → draft Sales Order → price confirmed → Logistics checks and submits the SO (this is the real submission gate, not Sales, not Finance) → batch entered on the SO as an indicative placeholder → SO converted to a Pick List → the *binding* batch selection happens here, at the Pick List, not before → warehouse picks and records quantity → Delivery Note created, batch carried forward via the Additional Notes field → third-party transporter dispatched → Finance creates the Invoice, potentially several against one DN → tax charge (not the underlying exemption logic) eventually syncs one-way to SQL.

#### Systems, channels and documents

WhatsApp/Telegram (`@maia_holsen_bot` for UAT) for order intake, the MAIA web app for everything downstream, UBS as the outgoing accounting system of record during the transition, SQL Accounting on-prem as the incoming one (live since 1 August 2026, master data only so far). Document types in play: Quotation, Sales Order, Pick List, Delivery Note, Invoice, C1 certificate, C3 certificate, COA (Certificate of Analysis), K1 (customs form), PSO (Poison Sign Order).

#### Where pressure and ambiguity enter

Two structural facts drive most of the friction you'll test today. First, **batch is a two-touch field** — indicative at the Sales Order, binding at the Pick List — and it's easy to assume the SO-stage entry commits stock when it doesn't. Second, **C1 and C3 are legally different animals**: C1 is a standing, reusable exemption tied to the customer; C3 is a one-time, per-shipment custody arrangement that must never be mixed with other order types. Treating them as interchangeable "certificate objects" is the single most common way to misbuild this product.

#### Why they bought this

Holsen's actual pain isn't "we need software" — it's that their existing informal system (a shared phone number, an Excel sheet, and what one employee described as "creative bookkeeping") is already good enough to run the business, and any replacement has to be at least that good at knowing which stock belongs to which customer, or it becomes a new source of *audit* risk, not less risk. This is most acute in the one area explicitly out of scope this round: locking a portion of a mixed-exemption batch to one customer (see Section 4).

#### What success looks like

A tester who plays this well proves that MAIA can run a full sales-to-cash cycle without silently dropping compliance information, without letting an unqualified role touch a document it shouldn't, and without contradicting the client's own explicit "don't show me a discount, don't force a rigid lock, keep the manual override path" instructions.

#### What trust-destruction looks like

Two things would genuinely alarm this client if you found them today: a certificate rule that silently lets an uncovered item through, and a permission gap that lets someone edit an Invoice who shouldn't be able to. Both are directly testable in this round (Section 8, Section 9).

#### What this means when you test

- Never assume the SO-stage batch entry is the "real" one — the Pick List is where it counts.
- Treat C1 and C3 as different beasts throughout: never try to mix a C3 order with other order types, and expect C1 to carry over silently across orders once set.
- When testing permissions, actively try the *wrong* role too — Holsen cares as much about who's blocked as who's allowed.
- If you're not sure whether something is a bug or an intentional non-feature (RM0 pricing, no discount display, no delivery-option picker), check Section 4 before logging it.

---

### Section 3 — Product Map

#### At a glance

MAIA at Holsen is a five-document chain (SO → Pick List → DN → Invoice, with certificates layered on top) enforced by a six-role permission matrix and two independent pricing/tax mechanisms that both apply to the same line item.

#### Purpose

Capture a customer order, correctly classify and price each line, enforce two distinct tax-exemption regimes, move stock through a two-stage batch commitment, and produce customer-facing documents that show only what Holsen wants a customer to see.

#### In-scope workflow chain (this round)

PO intake → Draft SO → Logistics SO submit → Pick List → Delivery Note → Invoice, with C1/C3 certificate checks gating SO submission and (subject to retest) DN/Invoice creation.

#### Objects and documents

| Object | Created by | Key states |
|-|-|-|
| Sales Order | Sales (drafted from PO), submitted by Logistics | Draft → Submitted |
| Pick List | Logistics (converted from SO) | Open → Complete |
| Delivery Note | Logistics (from completed Pick List) | Created → Delivered |
| Invoice | Finance (from DN, can be partial/multiple) | Draft → Submitted |
| C1 Certificate | Customer profile, perpetual | Created/Uploaded → Applied |
| C3 Certificate | Per-order | Created → Applied, requires PO + appointment letter |
| COA / K1 | Attached at doctype level | Attached (no lifecycle) |

#### State and lifecycle rules

- Batch: indicative at SO, binding at Pick List (`SL-5`).
- C3 certificates never mix with other order types on the same document (VOC-023).
- C1 certificates carry over unchanged from CPO to converted SO (`SL-3` AC4, `SL-22` AC5).
- SO submission is hard-blocked, not warned, if any line is below its configured minimum price (`SL-26`).

#### Confirmation and clarification rules

- Mixed C1/C3-covered and non-covered orders trigger an explicit confirmation prompt naming the uncovered items — confirm removes them, cancel fully reverts (`SL-14`).
- A line whose HS code isn't covered by the applied certificate blocks save with a specific, named error — never a silent failure (`SL-22` AC4).
- Duplicate PO detection (same customer + PO number, existing order already TO BILL) blocks silently-accepted re-entry (`SL-1` AC6).

#### Roles, permissions and handoffs

See Section 7 of the Launch Readiness Checklist for the full matrix. In short: Sales creates and drafts only; Logistics (Logistics) owns SO submission through DN; Logistics (Procurement) is read/submit-only; Logistics (Production) is read-only with no document access; Finance owns Invoice/Receipt; Admin/System Admin sees everything.

#### Data authority and external boundaries

MAIA is the system of record for transactions and stock going forward — UBS is being phased out, SQL Accounting receives only a one-way push of the final tax charge amount, never the certificate/exemption reasoning behind it (`SL-4`, `SL-45`... i.e. VOC-045). Nothing pulls back from SQL.

#### Golden rules

1. Never let a C3 order mix with other order types.
2. Never treat SO-stage batch entry as binding.
3. Never show a discount on a customer-facing PDF for Holsen.
4. Never let a role act outside its matrix — test the refusal, not just the success.
5. Never treat the RM0 Trading default as a bug — it's designed behaviour.

#### Glossary

- **C1** — perpetual manufacturer tax-exemption certificate, customer-level, HS-code matched.
- **C3** — one-time, per-order import-on-behalf exemption, quantity cross-checked against the submitted PO.
- **K1** — customs form, one per customer per batch portion on a split shipment.
- **PSO** — Poison Sign Order, required for any poison-flagged item, signed by the receiving customer.
- **Drawdown billing** — issuing multiple partial invoices against one Delivery Note as a customer draws down stock over time.
- **TO BILL** — an order status used as the duplicate-check trigger condition.

#### What this means when you test

Every mission below maps to one or more of these rules. If a win condition and a golden rule ever seem to conflict, the golden rule wins — flag it as a Boss Fight candidate, not a scripting error on your part.

---

### Section 4 — The Map

#### In Bounds (actively tested this round)

PO intake and extraction · Draft SO review/edit · Duplicate PO check · Minimum-price hard block · Trading/Manufacturing pricing and tax defaults · Logistics SO check and submit · Batch entry at SO (indicative) and Pick List (binding) · Pick List notification and completion · Delivery Note creation and batch carry-over · Third-party delivery dispatch · Invoice creation · No-discount-display on PDFs · C1 create/apply/HS-match · C3 create/apply with attachments · Mixed C1/C3 order handling · C1/C3 at DN/Invoice stage (fresh retest) · Full role-permission matrix · COA and K1 attachment.

#### Needs Scoping (do not missionify as locked, but two items are explicitly retested this round anyway — see flags in Section 8)

Pick List notification production status (`SL-32`) · DN/Invoice batch carry-over test-case rewrite (`SL-35`) · C1/C3 DN/Invoice enforcement (`SL-31`) · Batch validation strictness (`SL-15`) · UBS/MAIA document authority window (`SL-17`) · COA/document bundle defaults beyond the interim attachment approach (`SL-18`).

#### Out of Bounds (explicitly excluded this round — absence is not a bug)

- **Batch allocation lock across mixed-exemption customers** (`SL-30`) — confirmed unbuilt, deferred to Phase A3. Do not test. Do not log its absence.
- **Salesperson performance dashboard** (`SL-41`) — direction agreed, build detail undefined.
- **Role-based dashboard widgets** (`SL-11`) — permission matrix is locked, widget content is not.
- **SQL migration / API integration** (`SL-12`) — not yet built or testable.
- **Credit-limit approval workflow** (`SL-38`) — built but not switched on.
- **Finance-approval-before-DN gate** (`SL-36`) — unresolved whether it exists at all; don't test as if it does.
- **Low/out-of-stock alerts** (`SL-13`) — non-blocking, observe only, no scored mission.
- **COA/K1 structured masking or fields** (`SL-8`, `SL-9`) — only the plain-attachment interim approach is tested.

#### Beyond Tester Reach

- Invoice → SQL sync completing (see Launch Readiness Checklist Section 8) — Gareth/client-side handoff.
- Warehouse notification's actual production-firing status and channel — Gareth/Holsen handoff.
- Batch allocation lock design decision — product/dev handoff for Phase A3.

---

### Section 5 — Persona Cards

#### Persona P-01 — Tam Ze Xin, Sales / System Admin

**Evidence basis:** partial VoC (BELIEVED identity behind the shared `holsenlab@gmail.com` account across five testing sessions), corroborated by named-actor references in Scope Lock and the UAT Signoff Checklist roster.

##### A day in my life

I'm the one who actually lives inside MAIA most days. Orders come to me by WhatsApp or a photo of a handwritten PO, and I turn them into something the system understands. I also end up doing System Admin-level things — creating certificates, occasionally fixing something for a colleague — even though my "official" role on paper is Sales. When something's wrong with pricing or a certificate mid-transaction, I'm usually the one who notices first because I'm the one testing it live with Mindhive.

##### Business rules I live by

- **Always:** confirm extracted PO fields before submitting a draft order; escalate pricing to the boss verbally when it's not already on file.
- **Never:** assume a commodity item has a fixed price — I check with the boss.
- **Before I submit:** make sure the customer and PO number aren't already in the system as a live order.
- **I can approve:** draft quotations and POs.
- **I cannot approve:** SO submission for fulfilment — that's Logistics.
- **I escalate to:** **Chin Zhao Heng (Boss)** for pricing and credit questions.

##### What I want from this product

A system that doesn't slow down order intake and doesn't silently drop a certificate I already set up once.

##### What makes me trust it

When a certificate I created once just keeps working on every future order without me re-explaining it.

##### What would make me ditch it

If it let an order through with the wrong tax treatment and nobody noticed until an audit.

##### How I talk

- "Got a PO from ABC Trading, 500kg copper wire, need it by Friday."
- "This one got C1 already, don't need to ask again right?"

##### Patience level and quirks

Low patience for re-entering the same information twice. Comfortable moving between chatbot and web app mid-task.

##### What I can do without asking anyone

Draft a quotation or CPO, review extracted PO fields, apply an existing C1 to an order.

##### What must be approved or handed off

SO submission (Logistics), any price below the item minimum (blocked outright, no override).

##### What I check before I trust the result

Whether the certificate I applied last time is still attached without re-entry.

##### What this means when you test as me

- Play through PO intake exactly as messy real input — a photo, a partial description, a round weight.
- Try applying a certificate you (as this persona) created earlier and confirm it carries forward.
- Don't try to submit the SO yourself — that's not your gate. If the system lets you, that's a finding.
---

#### Persona P-02 — Chin Zhao Heng, Boss / Credit Controller

**Evidence basis:** direct VoC — clearest transcript in the corpus (Feb 10 session).

##### A day in my life

I set the real rules, even when they're not written down anywhere in MAIA. I decide who gets credit, I explain to Mindhive why C1 and C3 aren't the same thing, and I'm the one who has to answer to an SST audit if our compliant stock isn't actually where the paperwork says it is.

##### Business rules I live by

- **Always:** treat C3 as a legal custody arrangement — never mix it with other items on an order.
- **Never:** let a compliant customer's protected stock quietly get consumed by someone else's order.
- **Before I submit:** nothing — I don't do the data entry, I set policy.
- **I can approve:** credit-limit exceptions (when the feature is switched on — currently it isn't, `SL-38`).
- **I cannot approve:** nothing is blocked to me — System Admin, full access.
- **I escalate to:** nobody — I'm the top of the escalation chain internally.

##### What I want from this product

To be at least as good as our current manual tracking at knowing whose stock is whose.

##### What makes me trust it

Nothing yet, on the one thing that matters most to me — batch allocation isn't built. Everything else, once tested and working, earns quiet trust rather than praise.

##### What would make me ditch it

A system that claims to enforce compliance but actually makes it easier to lose track of which customer's exemption covers which stock.

##### How I talk

- "This one, how many years already we don't know how to solve this problem."
- "We're not allowed to sell this to anyone else — when the audit comes, they must see it all there."

##### Patience level and quirks

Very low patience for anything that treats compliance as optional. High patience for testing something thoroughly before accepting it.

##### What I can do without asking anyone

Anything — full System Admin access.

##### What must be approved or handed off

Nothing on my side; batch allocation itself is a product/dev handoff (out of bounds this round).

##### What this means when you test as me

- If a mission touches C1/C3, play it strictly by the book — Chin would never let a C3 order mix with other items.
- Don't attempt batch-allocation-lock testing — it's explicitly out of bounds; if you're playing this persona and thinking "shouldn't there be a lock here," that's expected, not a bug to log against this round.
---

#### Persona P-03 — Noor Aili Nafiah, Logistics

**Evidence basis:** scope-and-UAT inferred (named in roster, workflow secondhand via Tam/Chin — no direct transcript voice, but her role is the most heavily specified in the Scope Lock and Signoff Checklist).

##### A day in my life

Every submitted SO passes through me before it becomes real. I decide which physical batch fulfils an order, I convert SOs into Pick Lists, and I create the Delivery Note once the warehouse confirms what was actually picked. I also end up handling certificates day-to-day even though that's not officially my job title — because in practice, certificate handling is centralized with Logistics.

##### Business rules I live by

- **Always:** check stock and certificate coverage before submitting an SO.
- **Never:** treat the SO-stage batch entry as final — the Pick List selection is what actually deducts stock.
- **Before I submit:** confirm the batch and, if applicable, that a required certificate is attached.
- **I can approve:** SO submission, Pick List, Delivery Note.
- **I cannot approve:** Invoice — that's Finance.
- **I escalate to:** **Tam Ze Xin** for pricing exceptions I can't resolve myself.

##### What I want from this product

Full end-to-end certificate editing rights so I'm not blocked mid-task waiting for someone else's permission tier.

##### What makes me trust it

When my role's permissions match what I actually do all day, without a workaround.

##### What would make me ditch it

Being locked out of editing a certificate on an order I'm responsible for submitting.

##### How I talk

- "Converting this SO to a pick list now, batch 20260801-A has enough stock."
- "Can I edit the cert on this one, or do I need Sales to redo it?"

##### Patience level and quirks

Moderate — used to working around gaps informally, so will find a workaround rather than escalate loudly, which is exactly why permission gaps here are easy to miss unless someone tests for them directly.

##### What I can do without asking anyone

Full CRUD+SUBMIT on SO, DN, Pick List, Inventory.

##### What must be approved or handed off

Invoice creation — Finance-only.

##### What this means when you test as me

- This persona covers the largest share of missions today — play the full SO → Pick List → DN chain end to end at least once.
- Specifically test whether you can edit a certificate mid-SO without needing an elevated role (this is a known historical friction point — see Boss Fight BF-02).
---

#### Persona P-04 — Intan Atikah, Procurement

**Evidence basis:** scope-and-UAT inferred — named in roster, role defined only by the permission matrix, zero direct or secondhand voice found in the VoC corpus.

##### A day in my life

I handle incoming goods, not outgoing orders. My access to Sales Orders and Delivery Notes is intentionally narrow — I can see and submit, but not fully edit.

##### Business rules I live by

- **Always:** stay within my read/submit-only scope on SO/DN.
- **Never:** attempt full edits on SO/DN — that's not my role.
- **Before I submit:** nothing beyond what's already prepared for me.
- **I can approve:** Incoming Goods, full CRUD.
- **I cannot approve:** SO/DN edits beyond submit.
- **I escalate to:** **Noor Aili Nafiah** for anything outside Incoming Goods.

##### What this means when you test as me

Use this persona specifically for the negative-permission half of M-12 — confirm you're refused full-edit rights on SO/DN, and confirm you *can* fully manage Incoming Goods.
---

#### Persona P-05 — Murugesu A/L Palanivello, Production

**Evidence basis:** scope-and-UAT inferred — named in roster only, zero voice, most restrictive permission tier in the matrix.

##### A day in my life

I'm on the production side, not the document-handling side. I need to see Pick Lists and Inventory to know what's happening, but I have no reason to touch any document directly.

##### Business rules I live by

- **Always:** stay read-only.
- **Never:** attempt to create, edit, or submit any document.
- **I escalate to:** **Noor Aili Nafiah** for anything requiring action.

##### What this means when you test as me

This persona exists purely to prove the *refusal* half of permission testing — every document-creation action should fail for this login. A pass here looks like nothing happening; that's success, not a dead end.
---

#### Persona P-06 — Wong Shui Fern, Finance

**Evidence basis:** scope-and-UAT inferred — named in roster, referenced secondhand by Tam/Chin describing her workflow ("Miss Wong generates e-Invoice"), no direct voice.

##### A day in my life

Invoices start and end with me. I create them from a completed Delivery Note, sometimes several against the same DN as a customer draws down stock. I also need every customer-facing PDF I produce to look right — no discount lines, correct due dates.

##### Business rules I live by

- **Always:** create the Invoice from the DN, never from scratch.
- **Never:** show a discount field on any customer-facing PDF.
- **Before I submit:** confirm the due-date basis matches what's expected (currently invoice-date + 30, though the client has flagged wanting delivery-date basis instead — see Boss Fight BF-03).
- **I can approve:** Invoice, Receipt, SO, DN — full CRUD+SUBMIT.
- **I cannot approve:** nothing blocked to me within Finance's own document set.
- **I escalate to:** **Tam Ze Xin** or **Chin Zhao Heng** for pricing disputes.

##### What this means when you test as me

Run the drawdown-billing pattern — more than one partial invoice against a single DN — and check the due-date basis and discount suppression on the resulting PDF.
---

### Section 6 — Trust Killers

**P1 — Would make Holsen consider leaving:**
- A C1/C3-uncovered line item saves successfully with no block (silent compliance failure).
- Any role editing an Invoice or SO field it isn't permitted to touch.

**P2 — Serious, not fatal:**
- A discount value appearing on any customer-facing PDF.
- Batch carried forward incorrectly from Pick List to DN, causing wrong-batch delivery.

**P3 — Annoying, erodes confidence over time:**
- Logistics needing a workaround role to edit a certificate mid-session.
- Due date calculated from the wrong anchor date.

**P4 — Cosmetic:**
- PDF layout inconsistencies that don't affect data accuracy.

---

## PART B — THE MISSIONS

### Section 7 — Campaign Overview

| Code | Title | Persona | Type | XP |
|-|-|-|-|-|
| M-01 | PO Intake to Draft SO | Tam Ze Xin | Core | 20 |
| M-02 | The Duplicate Trap | Tam Ze Xin | Edge | 15 |
| M-03 | Price Floor and Trading Defaults | Tam Ze Xin | Core | 25 |
| M-04 | Logistics Locks It In | Noor Aili Nafiah | Core | 20 |
| M-05 | Pick List: Where Batch Becomes Real | Noor Aili Nafiah | Core | 25 |
| M-06 | The Additional-Notes Batch Trail | Noor Aili Nafiah | Core | 15 |
| M-07 | Out the Door: Third-Party Transporter | Noor Aili Nafiah | Core | 10 |
| M-08 | Finance Closes the Loop | Wong Shui Fern | Core | 25 |
| M-09 | C1: The Standing Exemption | Tam Ze Xin / Noor Aili | Core | 20 |
| M-10 | C3: The One-Time Import Custody | Noor Aili Nafiah | Core | 25 |
| M-11 | Retest at the Border | Noor Aili / Wong Shui Fern | Recovery | 30 |
| M-12 | Who Can Touch What | All six personas | Core | 35 |
| M-13 | Paper Trail: COA and K1 | Noor Aili / Intan Atikah | Core | 15 |

**Recommended order:** M-01 → M-02 → M-03 → M-04 → M-05 → M-06 → M-07 → M-08 → M-09 → M-10 → M-11 → M-12 → M-13.
**Speedrun (P1 coverage only):** M-01, M-09, M-10, M-11, M-12.
**100% Completion:** all 13 missions + both Side Quests + all Boss Fights.
**Squad split:** if testing in pairs, one tester covers M-01/M-02/M-03/M-09/M-10 (Sales-heavy), the other covers M-04 through M-08 plus M-11/M-13 (Logistics/Finance-heavy); M-12 needs both.
**Total XP available:** 280 (missions) + Boss Fight and Side Quest bonuses (Section 9, 10).

---

### Section 8 — Mission Cards

#### Mission M-01 — PO Intake to Draft SO · ★ · 20 XP · ~10 min

**Persona:** Tam Ze Xin, Sales
**Covers:** UAT items 1-3 · `SL-1`
**Mission type:** Core

##### The situation
A customer sends you a **PO by WhatsApp photo** for a mix of items, with a **delivery date** clearly stated. You need to get this into MAIA as a reviewable draft before you can quote a price.
> **Why this matters:** if extraction misses a field silently, the order downstream is wrong and nobody notices until delivery.
**Precondition:** you are logged in as a registered Holsen Sales user.

##### Input recipe
**Input type:** Customer PO (text, photo, or PDF)
**Choose or prepare:**
- Any PO from `01_Customer_POs/` or one you create yourself
**Your chosen data must satisfy:**
- At least one SKU, a quantity, and a delivery date
- At least one item not currently in MAIA's inventory (to test the missing-SKU surface behaviour)
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Sales (Tam Ze Xin)
- **Always:** review extracted fields before submitting.
- **Never:** assume extraction is complete without checking.
- **Before submitting:** confirm customer, SKU, quantity, delivery date are all present.
- **Escalate when:** a SKU isn't found in inventory.

##### Your goal
Get a draft quotation/CPO/SO created from the PO, with all extractable fields correct and editable.

##### Say it your way
- "New PO from a customer, need this drafted up."
> **Now forget these examples and type it how YOU would.**

##### Win conditions
- [ ] PDF/image/text PO creates an editable draft order.
- [ ] Extracted fields include at least customer, SKU, quantity, delivery date where available.
- [ ] You can edit any extracted field before submission.
- [ ] A SKU not in inventory is surfaced, not silently dropped.

##### It should stop and ask you if
- A SKU can't be matched to inventory.
- A commodity/manual-price item needs price confirmation.

##### If something breaks mid-way
Good behaviour: the draft stays editable and nothing is lost. **It should never silently drop a line item** because one field failed to extract.

##### Sabotage bonus (+10 XP)
- Upload a deliberately messy or partially illegible PO photo and see what MAIA does with the unreadable parts.

##### Poke it
- Try a PO stated purely in round weight (e.g. "100 kilos") with no packing-unit count — does MAIA ask you to translate it, or guess?

##### Loot to capture
- Screenshot of the extracted draft vs. the original PO.
---

#### Mission M-02 — The Duplicate Trap · ★ · 15 XP · ~8 min

**Persona:** Tam Ze Xin, Sales
**Covers:** UAT item 4 · `SL-1` AC6
**Mission type:** Edge

##### The situation
The same customer sends you **the exact same PO number** you already processed. Maybe it's a genuine re-send, maybe it's a mistake — either way, MAIA should catch it.
> **Why this matters:** a silently duplicated order means double-shipping or double-billing a customer.
**Precondition:** FIX-01 (an existing SO at TO BILL status) is present in the environment.

##### Input recipe
**Input type:** Fixed fixture
**Choose or prepare:** nothing — use FIX-01 exactly.
**Your chosen data must satisfy:** N/A
**Fixed reference:** FIX-01 — `04_Fixed_Fixtures/`

##### Roles and business rules
**Roles and approvals:** Sales (Tam Ze Xin)
- **Always:** attempt the duplicate exactly as stated on the fixture (same customer, same PO number).
- **Never:** modify the fixture's customer/PO number — that defeats the test.
- **Escalate when:** the duplicate is not blocked.

##### Your goal
Confirm MAIA blocks the duplicate rather than silently creating a second order.

##### Win conditions
- [ ] Same customer + PO number, existing order at TO BILL status, is blocked as a duplicate.

##### It should stop and ask you if
The duplicate condition is detected — this whole mission *is* that stop-and-ask moment.

##### If something breaks mid-way
It should never let the duplicate through silently.

##### Sabotage bonus (+8 XP)
- Try the same PO number with a *different* customer — should NOT be blocked (this is a different, valid order).

##### Loot to capture
- Screenshot of the block message, or of the second order being created if it wasn't blocked.
---

#### Mission M-03 — Price Floor and Trading Defaults · ★★ · 25 XP · ~15 min

**Persona:** Tam Ze Xin, Sales
**Covers:** UAT items 5-7 · `SL-26`, `SL-24`
**Mission type:** Core

##### The situation
You're pricing two very different lines on the same order: a **Trading-tagged item** with no fixed price, and a **Manufacturing-tagged item**. One customer has a price already on file; another doesn't.
> **Why this matters:** Holsen's entire pricing model depends on Trading items defaulting to RM0/manual entry — treating this as a bug would break accepted, tested behaviour.
**Precondition:** PA-04 and PA-05 are configured (a known minimum-price item, and customers with/without on-file pricing).

##### Input recipe
**Input type:** Fixed fixture (price boundary) + tester-selected (item tags, customers)
**Choose or prepare:**
- A Trading-tagged item and a Manufacturing-tagged item from the UAT catalogue
- One customer with an on-file specific price, one without
**Your chosen data must satisfy:**
- Item tags must be genuinely Trading/Manufacturing per the Product Taxonomy
**Fixed reference:** FIX-02 (known minimum-price item) — `04_Fixed_Fixtures/`

##### Roles and business rules
**Roles and approvals:** Sales (Tam Ze Xin)
- **Always:** let RM0 stand as correct for Trading items without an on-file price — do not treat it as a bug.
- **Never:** submit a line below its configured minimum price expecting an override to exist — there isn't one.
- **Before submitting:** check whether the customer already has a specific price on file.

##### Your goal
Confirm defaults apply correctly and the minimum-price block is a hard stop, not a warning.

##### Win conditions
- [ ] Trading item defaults to RM0 and prompts manual entry, unless the customer has an on-file price, in which case that price is used automatically.
- [ ] Trading items default to 0% SST; Manufacturing items default to 10% SST.
- [ ] Submitting FIX-02 at a price below its configured minimum is hard-blocked, with no override path.
- [ ] The block message names the item, entered price, and minimum price.

##### It should stop and ask you if
A price entry falls below the configured minimum — submission blocks outright.

##### If something breaks mid-way
It should never allow a soft-warning bypass on the minimum-price check — that's explicitly not built by design.

##### Sabotage bonus (+12 XP)
- Try submitting at exactly the minimum price (not below) — should succeed.

##### Poke it
- Does the same customer's on-file price apply automatically the *next* time you order the same SKU, or only this once?

##### Loot to capture
- Screenshot of the block message showing item, entered price, minimum price.
---

#### Mission M-04 — Logistics Locks It In · ★ · 20 XP · ~10 min

**Persona:** Noor Aili Nafiah, Logistics
**Covers:** UAT items 8-9 · `SL-5`, `SL-16`
**Mission type:** Core

##### The situation
A Sales-drafted SO lands on your desk. Before anything moves, **you** need to check and submit it — Sales can't, Finance can't, only Logistics can push this to fulfilment.
> **Why this matters:** if the submission gate is enforceable by the wrong role, Holsen's actual operating process breaks.
**Precondition:** a draft SO exists (from M-01, or create one fresh).

##### Input recipe
**Input type:** Tester-selected SO
**Choose or prepare:** any draft SO with at least one line item and a real stock item.
**Your chosen data must satisfy:** the SO must not already be submitted.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Logistics — Logistics (Noor Aili Nafiah)
- **Always:** check stock availability before entering a batch number.
- **Never:** treat this SO-stage batch entry as binding.

##### Your goal
Check and submit the SO, entering an indicative batch number in the process.

##### Win conditions
- [ ] Logistics can check and submit the SO — this is the fulfilment gate, not Sales or Finance.
- [ ] A batch number can be entered on the SO but does not lock or deduct stock at this stage.

##### It should stop and ask you if
The batch entered doesn't exist or has zero available quantity — should still allow indicative entry, since it's non-binding, but flag if it silently accepts an impossible batch.

##### If something breaks mid-way
Stock should never actually deduct from this SO-stage entry.

##### Sabotage bonus (+10 XP)
- Try submitting the SO logged in as Sales instead — should be refused (see also M-12).

##### Loot to capture
- Screenshot of the submitted SO showing the indicative batch field.
---

#### Mission M-05 — Pick List: Where Batch Becomes Real · ★★ · 25 XP · ~15 min

**Persona:** Noor Aili Nafiah (Logistics conversion) + Murugesu (warehouse touch)
**Covers:** UAT items 10-13 · `SL-5`, `SL-32` **[flag: `SL-32` sits in the Scope Lock's Needs-Scoping register but is explicitly tested this round per Checklist item 12 — treat the outcome as input to the still-open production-verification question, not as a hard locked-acceptance pass/fail]**
**Mission type:** Core

##### The situation
The submitted SO needs to become a **Pick List**, and this time the batch you select really does commit stock. Once the warehouse (a role that never touches the MAIA front end) picks against it, the list needs marking Complete.
> **Why this matters:** this is the one point in the whole chain where indicative becomes binding — get it wrong and the wrong batch ships.
**Precondition:** M-04 completed — a submitted SO with an indicative batch entry exists.

##### Input recipe
**Input type:** Tester-selected batch
**Choose or prepare:** any available batch with quantity > 0 for the item on the SO.
**Your chosen data must satisfy:** quantity available must be ≥ the ordered quantity.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Logistics — Logistics (conversion, batch selection), implicitly Production (picking)
- **Always:** select the binding batch here, not trust the SO-stage entry.
- **Never:** assume the SO-stage batch carries forward automatically without re-selection.

##### Your goal
Convert the SO to a Pick List, select the binding batch, confirm the warehouse notification fires, and mark the list Complete after recording picked quantity.

##### Win conditions
- [ ] SO converts to a Pick List successfully.
- [ ] Batch number selected at Pick List stage is the one that deducts stock.
- [ ] Warehouse receives a notification with a direct link to update picked quantity — **PA-10 flag: confirm which channel (Telegram/WhatsApp) before scoring this strictly.**
- [ ] Picked quantity is recorded and the Pick List is marked Complete.

##### It should stop and ask you if
The selected batch has insufficient quantity for the ordered amount.

##### If something breaks mid-way
Stock should deduct only once binding selection happens — never twice, never at the SO stage too.

##### Sabotage bonus (+12 XP)
- Select a different batch at Pick List than the one indicated at SO stage — confirm the system doesn't silently keep the old one.

##### Poke it
- Is there any visible trace, in the Pick List record, that the SO-stage entry was only indicative?

##### Loot to capture
- Screenshot of the completed Pick List and, if visible, the notification received.
---

#### Mission M-06 — The Additional-Notes Batch Trail · ★ · 15 XP · ~10 min

**Persona:** Noor Aili Nafiah, Logistics
**Covers:** UAT item 14 · `SL-35` **[flag: `SL-35`'s mechanism is described as "resolved" in the Scope Lock narrative, but the ID still sits in the Needs-Scoping register pending rewritten test cases — this mission is that rewritten test]**
**Mission type:** Core

##### The situation
The Pick List is Complete. Now you create the **Delivery Note** — and the batch number needs to carry forward, not through a dedicated field, but via the **Additional Notes** field on the DN.
> **Why this matters:** this is a simpler, lower-guarantee mechanism than a structured link — if it fails silently, nobody can trace which batch actually shipped.
**Precondition:** M-05 completed — a Complete Pick List exists.

##### Input recipe
**Input type:** Tester-selected
**Choose or prepare:** the completed Pick List from M-05.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Logistics — Logistics
- **Always:** check the Additional Notes field for the batch reference after DN creation.

##### Your goal
Create the DN from the completed Pick List and confirm the batch number appears in Additional Notes.

##### Win conditions
- [ ] DN is created from the completed Pick List.
- [ ] The Pick List's batch number appears in the DN's Additional Notes field.

##### If something breaks mid-way
The batch reference should never be silently dropped between Pick List and DN.

##### Poke it
- Does the PO-fields-empty issue historically reported for DO/Invoice records (an unverified, pre-go-live client complaint) still reproduce here? **Observation only if found — not a scored defect this round**, since it's unconfirmed post-go-live.

##### Loot to capture
- Screenshot of the DN's Additional Notes field showing the batch number.
---

#### Mission M-07 — Out the Door: Third-Party Transporter · ★ · 10 XP · ~5 min

**Persona:** Noor Aili Nafiah, Logistics
**Covers:** UAT item 15 · `SL-25`
**Mission type:** Core

##### The situation
The DN is ready. Holsen has **no delivery fleet** — everything goes through Menaka (local) or GMax/Tiong Nam Logistics (outstation), auto-classified by customer postcode.
> **Why this matters:** this is a documented non-feature — no delivery-option picker should exist at all.
**Precondition:** M-06 completed.

##### Input recipe
**Input type:** Tester-selected customer postcode
**Choose or prepare:** one customer with a local postcode, one with an outstation postcode, if time allows both.
**Fixed reference:** NONE

##### Your goal
Confirm delivery type auto-classifies correctly and no manual delivery-option selection exists.

##### Win conditions
- [ ] No delivery-option selection (standard/express/COD/self-collect) appears anywhere.
- [ ] Local vs Outstation classification is automatic from postcode.
- [ ] No login/account exists for Menaka/GMax/Tiong Nam as MAIA users.

##### If something breaks mid-way
It should never present a delivery-option picker — if it does, that contradicts documented intent, log it.

##### Loot to capture
- Screenshot of the DN showing auto-classified delivery type.
---

#### Mission M-08 — Finance Closes the Loop · ★★ · 25 XP · ~15 min

**Persona:** Wong Shui Fern, Finance
**Covers:** UAT items 16-18 · `SL-4` (partial), Boss Fight BF-03, `SL-27`
**Mission type:** Core

##### The situation
The DN is delivered. You create the **Invoice** — potentially several partial ones against the same DN as the customer draws down stock — and check that the due date and the PDF itself look right.
> **Why this matters:** the client explicitly does not want a discount shown, and has separately flagged that due dates should anchor to delivery, not invoice creation — worth checking whether that's still true.
**Precondition:** M-07 completed, DN marked Delivered.

##### Input recipe
**Input type:** Tester-selected
**Choose or prepare:** the delivered DN from M-07; optionally create 2-3 partial invoices against it to exercise drawdown billing.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Finance (Wong Shui Fern)
- **Always:** create the Invoice from the DN, never from scratch.
- **Never:** expect a discount field to appear on the PDF.

##### Your goal
Create at least one Invoice from the DN and check its due date and PDF output.

##### Win conditions
- [ ] Finance can create an Invoice from the DN.
- [ ] A single DN can source more than one partial invoice (drawdown billing) if you choose to test this.
- [ ] No discount column/field appears on the Invoice PDF.

##### It should stop and ask you if
N/A — this mission is mostly observational on due-date behaviour (see Boss Fight BF-03) since no LOCKED item defines the correct due-date basis yet.

##### If something breaks mid-way
The invoice should never expose the RM0 standard-price default as a spurious discount percentage on the PDF (`SL-27` AC2).

##### Poke it
- What is the Invoice's due date actually calculated from — invoice creation date, or delivery date? Log exactly what you observe (Boss Fight BF-03).
- Try to find any indicator of SQL-sync status on the invoice — **this half is Beyond Tester Reach (Launch Readiness Checklist Section 8)**, so if you can't find one, that's expected, not a bug.

##### Loot to capture
- Screenshot of the Invoice PDF (confirm no discount line) and the due-date field.
---

#### Mission M-09 — C1: The Standing Exemption · ★★ · 20 XP · ~12 min

**Persona:** Tam Ze Xin or Noor Aili Nafiah
**Covers:** UAT items 19-20 · `SL-3`, `SL-22` AC1/2
**Mission type:** Core

##### The situation
A customer with manufactured-goods orders has a **C1 certificate** — a standing, reusable exemption. You need to create/upload one and apply it to a Sales Order, testing both full coverage and a partial (mixed covered/uncovered) order.
> **Why this matters:** C1 is a perpetual relationship, not a one-time flag — get the carry-over wrong and every future order for this customer is mispriced on tax.
**Precondition:** PA-06 ideally satisfied (existing C1 customer); otherwise create one fresh.

##### Input recipe
**Input type:** Certificate sample from `02_C1_C3_Certificates/`
**Choose or prepare:** a C1 sample (manual entry or PDF upload), and an order with both C1-covered and non-covered HS-code items.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Sales or Logistics (certificate handling is centralized with Logistics in practice — see Boss Fight BF-02)
- **Always:** check HS-code coverage per line, not per order.
- **Never:** expect only whole-order coverage — partial is supported.

##### Your goal
Apply a C1 certificate to an SO with mixed coverage and confirm exempt/non-exempt lines are correctly differentiated.

##### Win conditions
- [ ] Customer profile supports certificate attachment (manual create or PDF upload).
- [ ] C1 eligibility checks customer + HS code per line, not per order.
- [ ] Partial coverage on a single order works — some lines exempt, some taxable.
- [ ] Certificate carries over unchanged from CPO to converted SO.
- [ ] Exempt lines are visibly differentiated from non-exempt lines.

##### If something breaks mid-way
The certificate should never need re-entry on a subsequent order for the same customer.

##### Sabotage bonus (+10 XP)
- Upload the certificate as a PDF rather than manual entry — check whether the text/tax reference displays correctly on the Finance side (Boss Fight BF-01).

##### Loot to capture
- Screenshot of the mixed-coverage order showing exempt vs. taxable lines.
---

#### Mission M-10 — C3: The One-Time Import Custody · ★★ · 25 XP · ~15 min

**Persona:** Noor Aili Nafiah, Logistics
**Covers:** UAT items 21-23 · `SL-22` AC3/4, `SL-14`
**Mission type:** Core

##### The situation
A different customer needs a **C3** certificate — a one-time, per-shipment exemption that requires a PO and appointment letter, and must never mix with other order types. You'll test the clean case and the mixed-coverage case.
> **Why this matters:** C3 is a legal custody arrangement, not a discount code — mixing it with unrelated items is a compliance error waiting to happen.
**Precondition:** sample PO + appointment-letter pair available (PA-07).

##### Input recipe
**Input type:** Certificate + attachment pair from `02_C1_C3_Certificates/`
**Choose or prepare:** a C3 application with PO + appointment letter attached; a second order mixing C3-covered and non-covered items.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Logistics (Noor Aili Nafiah)
- **Always:** attach both PO and appointment letter before attempting to save a C3 order.
- **Never:** mix a C3 order with other order types.

##### Your goal
Create and apply a C3 certificate, then trigger the mixed-coverage confirmation prompt on a second order.

##### Win conditions
- [ ] C3 certificate is created with PO/appointment-letter reference and applies to the SO.
- [ ] SO cannot save without both attachments present.
- [ ] A line item with an HS code not covered by the certificate blocks save with a specific error.
- [ ] Mixed C3/non-covered order triggers a confirmation prompt naming the uncovered items.
- [ ] Confirming removes only the uncovered items; cancelling fully reverts with no partial state.
- [ ] Same behaviour holds via both chatbot and web-app paths, if you have time to check both.

##### It should stop and ask you if
Either attachment is missing, or coverage is mixed.

##### If something breaks mid-way
Cancelling the mixed-coverage prompt should never leave a partial certificate application.

##### Sabotage bonus (+12 XP)
- Try saving a C3 order missing one of the two required attachments — confirm the block names what's missing.

##### Loot to capture
- Screenshot of the confirmation prompt naming the uncovered items.
---

#### Mission M-11 — Retest at the Border · ★★★ · 30 XP · ~15 min

**Persona:** Noor Aili Nafiah (DN) + Wong Shui Fern (Invoice)
**Covers:** UAT item 24 · `SL-31` **[flag: this is NS status in the Scope Lock's Needs-Scoping register, explicitly marked "actionable now, needs retest" — the outcome feeds an open client question, it is not a locked pass/fail]**
**Mission type:** Recovery

##### The situation
C1/C3 enforcement is confirmed working at the SO stage. Nobody has successfully tested whether the **same submit-block/confirmation-prompt pattern** holds once the order reaches the **Delivery Note or Invoice** stage — the last attempt stalled because batch mechanics weren't ready. They are now.
> **Why this matters:** this is the exact question the client is waiting on before the A3 commercial balance conversation.
**Precondition:** a certificate-bearing order has progressed through SO → Pick List → DN.

##### Input recipe
**Input type:** Tester-selected, building on M-09 or M-10's certificate-bearing order
**Choose or prepare:** carry a C1 or C3-bearing order through to DN and Invoice creation.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** Logistics (DN), Finance (Invoice)
- **Always:** note exactly what happens — this is genuinely unknown territory.
- **Never:** assume a specific expected outcome; there isn't a locked one yet.

##### Your goal
Determine, and document precisely, whether DN/Invoice creation for a certificate-bearing order enforces anything, and if so, what.

##### Win conditions
- [ ] You have a clear, reproducible account of what happens when a certificate-bearing order reaches DN/Invoice stage — block, prompt, or nothing.
- [ ] Whatever you observe is documented with enough detail (screenshots, exact wording) to answer the client's open question in `SL-31`.

##### It should stop and ask you if
Undefined — that's what this mission is finding out.

##### If something breaks mid-way
There is no "should never" here yet — document exactly what happens, including if nothing happens at all.

##### Loot to capture
- Full screenshot sequence from DN creation through Invoice creation for the certificate-bearing order.
---

#### Mission M-12 — Who Can Touch What · ★★★ · 35 XP · ~25 min

**Persona:** rotate through all six named personas
**Covers:** UAT item 25 · `SL-16`, Boss Fight BF-02, Boss Fight BF-04
**Mission type:** Core

##### The situation
Six different logins, one shared set of documents. You need to prove both halves of the permission matrix: **the permitted role succeeds, the refused role is actually refused.**
> **Why this matters:** a permission gap here is a P1 Trust Killer — the client explicitly named exact role boundaries (Section 5, VOC-013).
**Precondition:** all six named-role UAT accounts are provisioned (PA-01).

##### Input recipe
**Input type:** Any existing SO/DN/Invoice from earlier missions
**Choose or prepare:** reuse documents created in M-01 through M-11.
**Fixed reference:** NONE

##### Roles and business rules
**Roles and approvals:** all six — test each against the matrix in Launch Readiness Checklist Section 7.
- **Always:** test the refusal, not just the success — a role that *can't* do something is just as important a pass as one that can.
- **Never:** skip the negative case because it's less interesting.

##### Your goal
For each role, confirm allowed actions succeed and disallowed actions are refused, and specifically retest whether Logistics can edit a certificate mid-SO without needing a temporary elevated role.

##### Win conditions
- [ ] Sales Manager: full CRUD+SUBMIT on Quotation/PO, read-only on SO/Invoice/DN.
- [ ] Logistics (Logistics): full CRUD+SUBMIT on SO/DN/Pick List/Inventory, including certificate edits within an SO, with no elevated-role workaround needed (Boss Fight BF-02 retest).
- [ ] Logistics (Procurement): read + submit-only on SO/DN; full CRUD on Incoming Goods.
- [ ] Logistics (Production): read-only on Pick List/Inventory; no document access at all.
- [ ] Finance: full CRUD+SUBMIT on Invoice/Receipt/SO/DN.
- [ ] Admin/System Admin: full access confirmed for at least one action each area.
- [ ] Chatbot-side: confirm the System Admin/Sales dual-tier account (Tam Ze Xin) can create a CPO/certificate on its own login without being blocked (Boss Fight BF-04 retest).

##### It should stop and ask you if
A refused role attempts a blocked action — the refusal itself (an error, a hidden button, a read-only field) is the expected "stop."

##### If something breaks mid-way
A refused role should never be able to complete the blocked action through any path (web app or chatbot).

##### Sabotage bonus (+15 XP)
- Try the same blocked action from both the web app and the chatbot for one role — confirm consistency.

##### Loot to capture
- One screenshot per role showing either successful access or a clear refusal.
---

#### Mission M-13 — Paper Trail: COA and K1 · ★ · 15 XP · ~8 min

**Persona:** Noor Aili Nafiah / Intan Atikah
**Covers:** UAT items 26-27 · `SL-8`, `SL-9`
**Mission type:** Core

##### The situation
A batch/order needs its **Certificate of Analysis (COA)** and, for C3 orders, its **K1** customs form attached — both handled today as plain file attachments at the doctype level, not structured fields.
> **Why this matters:** this is an interim decision — confirm it actually works as a simple attachment before anyone assumes more structure exists.
**Precondition:** a batch or C3 order exists to attach to.

##### Input recipe
**Input type:** Sample file from `03_COA_K1_Attachments/`
**Choose or prepare:** any PDF or image.
**Fixed reference:** NONE

##### Your goal
Attach a COA to a batch/order and a K1 to a C3 order, confirming both are correctly linked and viewable.

##### Win conditions
- [ ] COA attaches at the doctype level and is correctly linked to the relevant batch/order.
- [ ] K1 attaches at the doctype level and is correctly linked to the relevant C3 order.

##### If something breaks mid-way
The attachment should never silently fail to link to the correct record.

##### Loot to capture
- Screenshot of both attachments showing their linkage.
---

### Section 9 — Boss Fights and Regression Alerts

#### Boss Fight BF-01 — The Vanishing PDF Certificate Text · +10 XP

**Recorded failure:** PDF-uploaded C1/C3 certificates sometimes fail to show text/tax reference on the Finance side (VOC-011, under `SL-22`).
**Retest in:** M-09 sabotage bonus.
**Win condition:** upload a PDF certificate and confirm text/tax reference displays correctly on the Finance view.

#### Boss Fight BF-02 — Logistics Locked Out of Their Own Certificates · +10 XP

**Recorded failure:** a Logistics officer previously needed combined Sales+Logistics permissions to edit certificates mid-session (VOC-012/013).
**Retest in:** M-12.
**Win condition:** Logistics (Logistics) role can edit a certificate within an SO without needing an elevated role.

#### Boss Fight BF-03 — The Due-Date That Ignores Delivery · +10 XP

**Recorded concern:** customer wants due date anchored to delivery date, not SO/invoice creation date, because of how blanket POs work (VOC-019, flagged "not confirmed fixed").
**Retest in:** M-08.
**Win condition:** N/A — this is an observation mission. Document exactly what the due date is calculated from; either outcome is valid data, not a pass/fail.

#### Boss Fight BF-04 — Tam Locked Out of His Own CPO · +8 XP

**Recorded failure:** a chatbot-side permission bug once blocked Mr. Tam himself from creating a CPO/certificate on his own account (PM Handover Brief §1-2, fix commitment unconfirmed).
**Retest in:** M-12.
**Win condition:** the System Admin/Sales dual-tier account can create a CPO and certificate via chatbot without being blocked.

#### Deferred Regression Alerts (no XP, observation only — do not treat absence as a defect)

- **Out-of-stock notification not firing** (`SL-13`) — non-blocking this round; if you happen to fully deplete a stock item during any mission, note whether a notification fires, but this is not scored.
- **Batch allocation lock across mixed-exemption customers** (`SL-30`) — explicitly out of bounds, do not seek this out.
- **PO fields empty on DO/Invoice** (VOC-037), **overdue delivery alert missing** (VOC-038), **blanket order drops unfulfilled lines** (VOC-039) — pre-go-live, vendor-paraphrased, status unconfirmed post-go-live. If encountered incidentally during M-01/M-06/M-08, log as an Observation with full detail, not as a scored bug.

---

### Section 10 — Side Quests

#### Side Quest SQ-01 — PSO Auto-Generation · +15 XP · Bonus

**Why it's here:** `SL-6` is LOCKED scope, fully specified via the older UAT Form's Test 23, but is not part of this round's 27-item Signoff Checklist — a coverage gap worth closing if time allows.
**Persona:** Ong Siow Chui (Admin) for the poison-flag toggle, Noor Aili Nafiah for the DN.
**Precondition:** PA-11 — at least one poison-flagged SKU available.

**Win conditions:**
- [ ] Item master has a poison/non-poison flag, editable by Admin only, with an audit trail.
- [ ] A DN containing a poison SKU auto-generates a PSO combined into the DN PDF pack; a DN with zero poison lines generates none.
- [ ] A mixed DN scopes the PSO to poison lines only.
- [ ] PSO includes FROM/TO blocks, item table, signature/chop section, and a return-copy note.
- [ ] A signed PSO copy can be uploaded back and is viewable by Finance/Admin/Logistics.

#### Side Quest SQ-02 — Dashboard / Digest for Pending Actions · +10 XP · Bonus

**Why it's here:** `SL-2` is LOCKED scope but also not part of this round's checklist.
**Persona:** any.

**Win conditions:**
- [ ] Draft/pending orders appear in a dashboard or digest.
- [ ] The digest identifies order ID/customer/status/action needed.
- [ ] You can navigate from the digest to the relevant order.

---

### Section 11 — Field Manual

**Logging:** use the shared bug/XP tracker link. Every mission attempt gets one entry — Pass, Fail, or Observation — even if nothing went wrong.

**Evidence:** a screenshot per win condition is the minimum bar. For Boss Fights, include the exact steps that reproduced (or failed to reproduce) the recorded issue.

**Scoring:** full XP for a clean pass on all win conditions. Partial XP (half) if some win conditions pass and others don't — log the failing ones as bugs, not as reasons to withhold all XP.

**Sabotage bonus:** stacks on top of mission XP — attempt it after the core mission is already logged.

**Bug bounties:** a confirmed P1 Trust Killer (Section 6) found outside its expected mission is worth double that mission's base XP.

**Cleanup:** follow Launch Readiness Checklist Section 9 — tag all test documents, don't advance FIX-01/FIX-02 past their fixture state, track batch consumption.

---

### Section 12 — Appendix: Coverage and Readiness Map

#### Source test-case disposition (Signoff Checklist items 1-27)

| Item # | Capability | Disposition | Mission |
|-|-|-|-|
| 1 | Registered-user access | ACTIVE MISSION | M-01 (precondition) |
| 2 | PO upload & extraction | ACTIVE MISSION | M-01 |
| 3 | Draft SO from PO | ACTIVE MISSION | M-01 |
| 4 | Duplicate PO check | ACTIVE MISSION | M-02 |
| 5 | Minimum price check | ACTIVE MISSION | M-03 |
| 6 | Trading item default price | ACTIVE MISSION | M-03 |
| 7 | Tax defaults by SKU tag | ACTIVE MISSION | M-03 |
| 8 | Logistics checks & submits SO | ACTIVE MISSION | M-04 |
| 9 | Batch entry at SO (indicative) | ACTIVE MISSION | M-04 |
| 10 | SO → Pick List conversion | ACTIVE MISSION | M-05 |
| 11 | Batch selection at Pick List (binding) | ACTIVE MISSION | M-05 |
| 12 | Pick List link notification | ADAPTED MISSION (`SL-32` is NS in Scope Lock) | M-05 |
| 13 | Warehouse picks & uploads quantity | ACTIVE MISSION | M-05 |
| 14 | Delivery Note creation, batch carry-over | ADAPTED MISSION (`SL-35` is NS in Scope Lock) | M-06 |
| 15 | Third-party delivery | ACTIVE MISSION | M-07 |
| 16 | Invoice creation & SQL sync | ACTIVE MISSION (Invoice half) / BEYOND TESTER REACH (SQL sync half) | M-08 |
| 17 | Payment due date | ACTIVE MISSION, observational (no locked basis defined) | M-08 |
| 18 | No discount display | ACTIVE MISSION | M-08 |
| 19 | C1 certificate create + PDF upload | ACTIVE MISSION | M-09 |
| 20 | Apply C1 to SO | ACTIVE MISSION | M-09 |
| 21 | C3 certificate create + apply | ACTIVE MISSION | M-10 |
| 22 | Submit-block on uncovered item | ACTIVE MISSION | M-10 |
| 23 | Mixed C1/C3 order handling | ACTIVE MISSION | M-10 |
| 24 | C1/C3 at DN/Invoice — RETEST | ADAPTED MISSION (`SL-31` is NS, explicit fresh retest) | M-11 |
| 25 | Role-based access matrix | ACTIVE MISSION | M-12 |
| 26 | COA attachment | ACTIVE MISSION | M-13 |
| 27 | K1 attachment | ACTIVE MISSION | M-13 |

**LOCKED items outside this round's checklist:** `SL-6` (PSO) → SQ-01. `SL-2` (dashboard/digest) → SQ-02.

**OUT OF SCOPE this round (per Signoff Checklist Section 3):** `SL-30`, `SL-41`, `SL-11`, `SL-12`, `SL-38`, `SL-36`, `SL-13`, `SL-8`/`SL-9` (masking logic only, not the attachment approach).

#### Scope coverage table

| Status | Count | Covered by this pack |
|-|-|-|
| LOCKED (active testing) | 12 | 11 of 12 in core missions (M-01–M-13); 1 (`SL-6`... actually `SL-2`/`SL-6` both LOCKED, see SQ) in Side Quests |
| LOCKED (SUPERSEDED, active testing) | 4 | `SL-4` (M-08, partial), `SL-5` (M-04/M-05), `SL-6` (SQ-01), `SL-10` (M-03) |
| AGREED IN PRINCIPLE — NOT LOCKED | 5 | Not missionified; listed in Section 4 Needs Scoping / Out of Bounds |
| NEEDS SCOPING | 14 | 3 explicitly retested per client instruction despite NS status (`SL-31`, `SL-32`, `SL-35`, flagged); rest listed in Section 4 |
| OUT OF SCOPE / EXPLICIT EXCLUSIONS | 3 | Listed in Section 4 Out of Bounds, not tested |

#### Input-requirement traceability

See Launch Readiness Checklist Sections 3, 5, 6 for the full Preparation Action Register and Fixed Fixture Register mapped to missions.

#### Persona-rule traceability

Every persona's "Always/Never" rules in Section 5 map directly to at least one Mission Card's Roles and Business Rules block above — see each Persona Card's "What this means when you test as me" for the specific missions.

#### Beyond Tester Reach handoffs

See Launch Readiness Checklist Section 8 — Invoice→SQL sync, warehouse notification production status, batch allocation lock design, credit-limit routing, Finance-approval-gate resolution.

---
owner: Gareth
status: draft
last_reviewed: 2026-06-24
meeting_date: 2026-06-24
attendees: Gareth (Fixguru), Marcus (Fixguru), Yvonne (Fixguru), Bryan (Mindhive), Ivan (Mindhive)
sources: Fireflies transcript (01KVVSWST9…) + Ivan's raw notes + whiteboard sketches
---

# 2026-06-24 Fixguru UAT Debrief

## Headline Verdict

Showcase did not meet requirements. Step-1 blocker — surface historical pricing per item and let sales confirm a discount in one glance — was raised 7 Apr, failed 14 May, retested 16 Jun, still not delivered.

Every downstream item (delivery method, credit, picking, e-invoice) is blocked behind step 1.

**Client sentiment:** patient but eroding. Gareth: *"I speak many times the same… I don't know how to tell you."* Mindhive acknowledged the root gap openly (dev view vs. real blue-collar user). That candour is good; it does not reset the clock.

**Commercial stake:** Milestone-2 (RM24,000) is contractually tied to UAT completion. Four UATs in, no signed acceptance on step 1.

---

## UAT History — Step-1 Status

| UAT touchpoint | Step-1 status |
|---|---|
| 7 Apr | Raised as cannot-sign-off condition |
| 14 May (on-site) | Failed; "wasting time"; AutoCount faster |
| 16 Jun (retest) | Still being tested |
| 24 Jun (this meeting) | Still not delivered — "same as last meeting" |

**Root cause:** Team keeps demoing the standard chatbot flow and patching at the prompt level. Client needs (a) a purpose-built historical-pricing surface sourced from invoices and (b) a radically shorter confirmation path. Prompt-level patching has hit its ceiling.

---

## Understanding Fixguru — What We Must Build For

### 1. The real competitor is AutoCount, not "no system"

We are not replacing nothing — we are replacing a tool that already works and is faster for them today. The bar is: **MAIA beats AutoCount at the daily quoting bench.** The moment MAIA is slower or more confusing, the user reverts. Every design decision is measured against AutoCount, not a blank slate.

### 2. Design for the lowest-literacy person in the chain

Sales users are blue-collar; they don't like reading and want quick action. If a head of department needs five minutes to digest a screen, the team needs far longer. MAIA must be super direct — single message, one-glance, yes/no. Anything that asks them to read, parse, or hunt across numbers gets abandoned. One-glance simplicity is an acceptance condition, not polish.

### 3. What they are actually buying is one decision, made fast

Strip away features — the job-to-be-done is: *"For this customer, this item, this volume — what discount do I give, and let me confirm it in seconds."* Pricing is customer-specific, volume-based, and drifts over time. History (past invoice price, discount %, qty, date) is the only way to make that decision well.

### Priority Map

| Priority | What they care about | What it means for MAIA |
|---|---|---|
| 1 | Discount decision fast, history visible | Invoice-sourced historical table, one glance, per item |
| 2 | Speed & simplicity over completeness | Single message, yes/no, no grand-total noise |
| 3 | Reach customer record by phone | Phone-first retrieval; customers are WhatsApp numbers, often nameless |
| 4 | Keep money moving | Don't block orders early; approve credit on bank-in slip |
| 5 | Operational fidelity | Delivery-method history, FOC, custom items, AutoCount parity |

---

## Step-1 Acceptance Bar (Lock This Before Next Build)

Target flow to get signed off:

1. User pastes order + phone number, e.g. `011-xxxx — G3 100, G1 300, PM72 500`
2. MAIA retrieves customer by phone number (mobile/landline), not name
3. Per item, MAIA returns a one-glance historical table sourced from **invoices** (not orders):

| Date | Std unit price | Discount % | Net price | Qty |
|---|---|---|---|---|
| 06/2026 | RM0.10 | 3% | 0.097 | 100 |
| 05/2026 | RM0.10 | 10% | 0.090 | 1000 |
| 01/2025 | RM0.05 | 5% | 0.0475 | 500 |

- Minimum **5 confirmed rows** per item (3 is too few)
- Date matters — signals price drift vs. current standard price

4. MAIA asks one question: *"Which price should I proceed with?"*
5. User replies per item (G3 3%, G1 5%, PM72 none) → MAIA generates SO/quotation → PDF

**Hard UX constraints (non-negotiable):**
- Single message, readable in one glance. No grand-total noise (total lives in the PDF)
- Columns shown: standard price, discount %, net price. Nothing else
- Yes/no interactions only — too many words = abandonment → AutoCount
- "Not found = not found." No over-enrichment of prior records

---

## What's New / Sharpened This Meeting

- **Dual-interface proposal (Bryan):** chat for input + rich web front-end (≈70/30 "co-work" view) to display tabular data chat can't hold (20–100 line items). Genuine new direction — needs a deliberate decision before it becomes the next shiny object
- **Phone-number-first retrieval:** customers WhatsApp in, often with no name/company; search by phone (mobile + landline columns)
- **Historical delivery-method surfacing:** show last 5 confirmed delivery methods (courier / Lalamove / self-pickup)
- **Customer context bank:** min 5 confirmed documents per customer, evaluated every turn
- **Credit/approval logic (whiteboard):** block at DN level, not order level. Two blocks only: minimum price + credit limit. AR-negative = prepaid → approve on bank-in slip; credit-limit-exceeded → approve case-by-case on bank-in slip
- **Minimum price per item:** e.g. G1 std 0.33, floor 0.27 — below floor needs approval but quotation still generated pending approval. No maximum price
- **FOC rule:** production overage free (order 1000, produce 1050 → free 50); bill billable qty, deduct billable + FOC from stock
- **Custom-item handling:** base item (e.g. G5) spawns `{Customer Name} G5` variants — affects item retrieval and matching

---

## Action Items

### CLIENT (Ivan to chase)

| # | Item | From |
|---|---|---|
| C1 | Real WhatsApp order-intake message samples (format reference for parser) | Yvonne |
| C2 | AutoCount screenshot of two blocks (min price + credit limit) + bypass roles | Azib |
| C3 | Minimum price floor per item (std + floor, e.g. G1 0.33 / 0.27) | Gareth |
| C4 | Standard price list (global, fluctuating) — share in group | Gareth |
| C5 | Updated RSC/Diecut formulas + volume metrics (carryover from prior UAT) | Fixguru |
| C6 | Confirm UAT sign-off authority (is Gareth the signatory?) | Ivan ↔ Fixguru |

### PRODUCT (Ivan / product team)

| # | Item | Note |
|---|---|---|
| P1 | Lock & socialize the step-1 acceptance bar before any further build | Highest-leverage action |
| P2 | Decide rendering mechanism — chat vs. image/label vs. dual web interface — and converge | Client said info matters, not format; team must pick one |
| P3 | Spec customer context bank: min 5 confirmed docs, evaluated each turn | Shared dependency across pricing & delivery |
| P4 | Spec phone-first customer retrieval (mobile + landline) + fallback for "looks new" | High client value |
| P5 | Write the block-level rule: DN, not order | Direct client instruction |
| P6 | Define approval workflow: below-floor OR credit-exceed → generate pending approval → route to Ivan | Must not hard-stop mid-flow |
| P7 | Conciseness/UX rules as product policy: one-glance, single language, "not found = not found", no enrichment | These are acceptance conditions |
| P8 | FOC rule spec: order 1000, produce 1050 → free 50; deduct billable + FOC from stock | Small commercially, important operationally |
| P9 | Custom-item handling: base item spawns customer-named variants | Affects item retrieval & matching |
| P10 | Item-retrieval fallback: on no exact match, return customer's historically ordered items | Reduces dead-ends |

### TECH (Jermaine + leads)

| # | Item | Lead |
|---|---|---|
| T1 | Build historical pricing as first-class module from invoices (stop prompt-patching) | Afiq / Wei Yon |
| T2 | Investigate WhatsApp latency vs. Telegram (observed slower on WhatsApp) | Wei Yon |
| T3 | Fix language bug: quick replies switching to Malay mid-English conversation | Afiq |
| T4 | Timeboxed feasibility spike on dual interface (70/30 co-work view) — must not delay step-1 | Jermaine / Amirul |
| T5 | Warehouse/shelf config: sub-warehouse tree, branch-level picking — identify correct AutoCount module | Wei Yon |
| T6 | Credit/AR logic: AR-negative → bank-in approval; credit-limit block at DN; two-block model | Wei Yon |

---

## Open Decisions (Need Explicit Call)

- [ ] Rendering mechanism — chat single-message vs. image/label vs. dual web interface
- [ ] Block level — order vs. DN (client leans DN; confirm and lock)
- [ ] UAT sign-off authority — confirm in writing
- [ ] Dual interface scope — Phase-1 inclusion or costed CR

---

## Risks / Pre-mortem

**How this account fails:**

1. "Dual interface" becomes the new shiny object and step-1 slips a fifth time. Chat + disciplined single-message formatting already achieves the client's bar — web front-end is enhancement, not prerequisite.
2. Team keeps prompt-patching pricing display instead of building the invoice-sourced module. Same ceiling, fifth meeting.
3. No signed acceptance bar → "done" stays subjective → demo-fail loop repeats → Milestone-2 RM24k unpaid → account becomes a reference liability.

**Load-bearing assumptions to verify before committing next demo date:**

| Assumption | Status |
|---|---|
| AutoCount exposes clean per-customer+SKU historical price/discount/qty from invoices via API | Unverified |
| 5-row × N-item table renders legibly in a single WhatsApp message | Unverified |
| Gareth is the UAT sign-off authority | Unverified |

---

## See Also

- [[UAT/MAIA UAT Form - Fixguru - Item Historical Pricing]]
- [[UAT/Fixguru Retesting Feedback]]
- [[Meetings/2026-05-15 Fixguru UAT Action Items]]
- [[context/learnings]]

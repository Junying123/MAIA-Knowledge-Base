---
owner: Gareth
status: draft
last_reviewed: 2026-04-24
type: internal-discussion
---

# JDX SOW Review Discussion — 2026-04-24

Internal discussion session reviewing the JDX SOW, demo deck alignment, feature gaps, and kiosk stock reporting story. Sources: RG meeting notes (2026-03-27), demo transcript (2026-04-22), physical kiosk form (client-shared), tech lead comments (Ivan).

---

## SOW Changes Made

### Removed from SOW
- QSoft van sales references — entire Phase 2 QSoft section removed; not relevant to hamper channel
- Payment advice matching that triggers DO creation — removed from executive summary
- Pick List PDF — JDX not using it; removed from document generation summary and all demo materials

### Updated across SOW + demo deck + demo script
- Phase 2 list: QSoft removed, kiosk reporting and inventory remain
- PDF output list: Pick List removed from all files
- Demo Script FAQ: QSoft Q&A row removed
- SQL data migration added to Phase 1 scope (one-time extract of customers, items, pricing, opening stock)
- "Ongoing SQL accounting integration" vs "SQL data migration" distinction made clear

---

## Phase 1 — Feature Gaps for Tech Lead

Four items that need tech confirmation before SOW goes to client:

### 1. Structured Remarks Fields
- Current MAIA: "Additional Notes" textarea at item level (free text)
- JDX needs: structured fields per customisation type — ribbon colour, greeting card wording, price tag on/off, item substitution
- Direction: use Additional Notes at item level; confirm if sufficient or need distinct fields
- Status: needs tech confirmation

### 2. Remarks Auto-Propagation (SO → Invoice → DN → Warehouse)
- Was in MAIA previously; needs to be reinstated for JDX
- Core Phase 1 requirement — if not reinstated, custom build item needing separate pricing
- Status: needs tech confirmation on feasibility and build effort

### 3. Ad-Hoc Delivery Addresses per DN
- Current MAIA: address selectable from pre-registered customer addresses only
- JDX needs: 50–100+ one-time recipient addresses per corporate order — not customers, change every season
- **Phase 1 blocker** — must confirm before multi-drop delivery committed to scope
- Status: needs tech confirmation

### 4. Tiered Discount Auto-Configuration
- JDX rule: <RM500 = 5%, RM500–RM1,500 = 10%, >RM1,500 = 15%; season-configurable
- Fallback: coordinator applies manually if not feasible for Phase 1
- Status: needs tech confirmation

---

## Kiosk Daily Stock Reporting — Full Story

### Background
- JDX deploys own promoters to Giant/AEON seasonal kiosks during peak (CNY, Hari Raya)
- Consignment basis — no PO from AEON upfront; AEON pays based on actual sell-through
- ~29 hamper SKUs per kiosk, tracked by price point and barcode
- Currently 100% manual — physical paper form, WhatsApp, SQL

### Step 1 — Promoter fills daily stock report (EOD)
- Promoter fills physical paper form at closing every day
- Captures per SKU: Opening → Stock In → Sales → Returns → Closing Balance
- Form has PO Number column (AEON's GRN reference for replenishment stock received) and Co Sales PO field at bottom
- Sends completed form to JDX WhatsApp group
- Source: RG meeting notes, RG output, physical form (client-shared)

### Step 2 — Coordinator reconciles and handles top-up
- Coordinator reads WhatsApp submission, manually verifies stock math
- Opening + Stock In − Sales − Returns = Closing Balance
- Top-up requests sometimes sent separately in WhatsApp (not always in the form)
- Coordinator challenges promoters who over-order out of fear of stockout
- All coordination via WhatsApp — no system record
- Source: RG output, demo transcript

### Step 3 — Daily sales entered into SQL + AEON cross-reconciliation
**Part A — SQL accounting entry**
- Accounts assistant manually keys daily sales summary into SQL (next morning)
- SQL receives accounting entries only (revenue/boom codes) — not live inventory
- JDX abandoned SKU-level SQL tracking previously — too messy
- Source: RG meeting notes, RG output, demo transcript

**Part B — Cross-reconciliation against AEON's sell-through data**
- AEON has their own POS sell-through data — this is the billing truth
- JDX cross-checks their promoter figures against AEON's data at month end
- PO Number column on form = AEON's GRN reference for replenishment deliveries
- Source: RG meeting notes (*"Consignment reconciliation: sell-through data from grocers requires manual matching"*)

### Step 4 — Monthly billing via AEON B2B portal
- End of month, JDX logs into AEON's B2B portal
- Reconciles sell-through figures, submits billing claim
- AEON deducts commission and display charges → JDX receives net payment
- Mr. Kong confirmed: low priority — happens after peak when staff have slack time
- **Permanently out of scope for MAIA**
- Source: RG output, SOW out-of-scope section

---

## With MAIA Phase 2 — Tech Lead Confirmed

| Step | Today | MAIA Phase 2 |
|---|---|---|
| Daily stock report | Paper form → WhatsApp | Promoter submits Stock Recon via MAIA web app |
| Variance check | Coordinator counts manually | System shows previous day's variance on submit |
| Top-up request | WhatsApp message | Promoter submits Material Request (MR) — new doctype |
| Top-up approval | Coordinator decides in WhatsApp | Logistics reviews MR in MAIA, approves/adjusts |
| Replenishment | Manual warehouse coordination | Logistics creates Material Transfer (MT) — not DN |
| SQL entry | Manual re-keying by accounts | Stays manual (Phase 2 as scoped — no SQL push) |
| AEON billing | Manual portal access monthly | Out of scope permanently |

**Build estimate: 5 mandays** (tech lead confirmed — covers Stock Recon + MR + MT)

---

## Key Design Decisions Confirmed

### Sales column in Stock Recon
- Promoter's self-reported count — MAIA accepts as-is
- MAIA validates stock math only: Opening + Stock In − Sales − Returns = Closing Balance
- MAIA does NOT create SO/Invoice from kiosk sales
- No AEON portal integration — permanently out of scope
- Revenue entry to SQL stays manual in Phase 2

### Why SO creation doesn't work for kiosk
- Kiosk = consignment channel — retail customers buy at AEON's kiosk, AEON's POS records the sale
- JDX has no real-time visibility into AEON's POS
- AEON's portal data is the billing truth — not JDX's count
- Promoter role = stock management, not order creation

### Corporate order at kiosk
- If corporate customer places bulk order via promoter at kiosk → follows Phase 1 SO flow (not Stock Recon)
- Promoter captures details, passes to JDX sales coordinator who creates SO in MAIA
- Co Sales PO Number field on physical form = where promoter records this separately from retail sales

### SQL push not included in Phase 2
- Phase 2 (5 mandays) = Stock Recon + MR + MT only
- SQL push (MAIA → SQL for accounting entries) = additional item, not scoped
- Recommended: defer to Phase 3 once kiosk flow is stable

---

## Critical Finding — Kiosk Feature vs Client Priority

**The kiosk stock reporting feature is inventory management — not related to corporate B2B hamper orders.**

| | Corporate B2B Hamper Orders | Kiosk Stock Reporting |
|---|---|---|
| What it is | Corporate companies ordering hampers in bulk | JDX tracking own stock at Giant/AEON kiosks |
| Pain it solves | Billing and delivery tracking | Inventory management at kiosk level |
| Mr. Kong's priority | Top priority — Phase 1 | Low priority — his own words |
| Phase | Phase 1 | Phase 2 |

Mr. Kong's exact words from RG:
> *"Last time we tried updating all our procurement stuff into the system — it became so messy that it didn't compensate the effort of being accurate."*

RG fit assessment: **Inventory management — 🔴 Low fit. Client sees this as low priority; SQL/manual is acceptable.**

---

## Recommendation

### For senior
> "The kiosk stock reporting feature in Phase 2 is an inventory management feature for a separate channel — not related to the corporate hamper B2B flow in Phase 1. Mr. Kong explicitly flagged inventory as low priority in the RG. We recommend keeping it in Phase 2 with a caveat pending client confirmation, or removing it entirely and revisiting post-Phase 1 go-live."

### Client clarification needed (3 questions only)
1. **The WHY** — "Your coordinator is managing multiple kiosk WhatsApp reports during peak. Is this a real pain for your team?"
2. **Expected outcome** — "If MAIA could replace the paper form and WhatsApp coordination with a digital report and top-up system, would that solve your problem?"
3. **Priority** — "Is this something you want after Phase 1 is stable, or is it lower down your list?"

### Why clarification is needed
> "We know the current pain and we've scoped the feature technically. But Mr. Kong never told us this is what he wants MAIA to solve in Phase 2. We built the story from RG notes — he never validated it. One short conversation confirms whether Phase 2 kiosk is a real ask or a nice-to-have we assumed."

---

## Open Questions for Tech Lead (Kiosk Only)

1. Stock Recon — new doctype or existing module? Promoter access model?
2. Previous day variance — auto-flagged or display only?
3. MR — fields, approval workflow, who approves?
4. MT — links back to MR? Updates stock at both ends (warehouse deducted, kiosk added)?
5. SKU granularity — 29 SKUs per outlet; how does promoter input efficiently via web app?
6. Sales column — confirm MAIA uses for stock math only, no SO/Invoice created?
7. SQL push — included in 5 mandays or excluded?
8. Corporate order at kiosk — does promoter need MAIA access to refer order to coordinator?

---

## See Also
- [[SOW for MAIA JDX]]
- [[JDX Demo Script]]
- [[JDX Demo Deck Enhanced]]
- [[Customer Narrative - JDX]]
- [[2026-03-27-JDX-Requirements-Gathering]]

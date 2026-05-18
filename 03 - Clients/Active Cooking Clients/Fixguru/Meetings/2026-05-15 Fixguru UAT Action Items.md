---
owner: Gareth
status: draft
last_reviewed: 2026-05-18
source_transcript: "[[Granola/Transcripts/2026-05-15/Fixguru feedback sync-transcript]]"
---

# Fixguru UAT Action Items (2026-05-15 Feedback Sync)

## Change Requests Summary ⚠️

Items that deviate from original SOW or are new paid scope. All require retainer/SOW revision before dev starts.

| #     | CR                                   | Type                                                                                                         | Chargeable?                               |
| ----- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| CR-01 | Two-way AutoCount sync               | Scope deviation — original spec expected full MAIA migration                                                 | Yes — retainer revision needed            |
| CR-02 | Credit limit formula change          | New formula + AutoCount data dependency                                                                      | Yes — depends on CR-01                    |
| CR-03 | Historical pricing in chatbot        | New feature — surface last transaction price/discount per customer × item                                    | TBC                                       |
| CR-04 | Calculator policy customisation      | Fixguru updated transformation ratios; custom rules needed                                                   | Yes — explicitly called out as chargeable |
| CR-05 | Composition/BOM customisation        | If Fixguru wants custom composition calc                                                                     | Yes — only if they confirm they want it   |
| CR-06 | PDF template                         | Fixguru prefers AutoCount PDF over MAIA V3                                                                   | TBC — scope needs explicit confirmation   |
| CR-07 | Daily stock reconciliation           | New requirement; not in original spec                                                                        | TBC                                       |
| CR-08 | Delivery method as SKU for e-invoice | Fixguru treats transport charges as SKU line item for e-invoice claiming; chatbot doesn't support this today | TBC                                       |
| CR-09 | Minimum price guardrail              | New feature — block/warn if unit price goes below item minimum                                               | TBC                                       |
| CR-10 | Unit toggle: cm / inches             | Calculator must support switching between cm and inches                                                      | TBC                                       |
| CR-11 | Customer contact + branch sync from AutoCount | Sync HQ contact + branch records (multiple shipping addresses + branch contacts) from AutoCount into MAIA | TBC — needs spec |
| CR-12 | Volumetric m3 on Delivery Note PDF | Show volumetric (m3) field on Delivery Note PDF. Reference: AutoCount Report Design Center → "IAM Delivery Order" + "IAM Delivery Order (Branch)" templates | TBC — needs spec |

**Next step:** Prepare formal CR doc, align with Fixguru, then revise retainer.

---

## Historical Pricing

### What Fixguru wants
When creating a SO/quotation, surface for each line item:
- Last transaction net price for that **customer × item** combo
- Discount % applied in that last transaction
- Current list price (benchmark)

> **Note:** Fixguru does NOT use customer-specific pricing tiers. Historical pricing = last transaction data only.

### Expected Chatbot Display

When user adds item to SO via chatbot:

```
📦 *Item A* added for *Customer XYZ*

Price history (last transactions):
• SO-001 — Qty 20 @ RM 8.10 (10% off list RM 9.00)
• SO-002 — Qty 30 @ RM 9.90 (10% off list RM 11.00)

Current list price: RM 15.00

Which price to apply?
1. Last transaction — RM 9.90 (10%)
2. List price — RM 15.00
3. Enter custom price
```

### Action Items

- [ ] **Surface historical pricing in chatbot** — when user adds item to SO, show last transactions for that customer × item: SO ref, qty, unit price, discount % vs list price. LLM to service from existing data.
- [ ] **Surface historical pricing in UI (front end)** — price list pop-up shows last transactions + current list price. No customer-specific tier needed.
- [ ] **Implement derived discount % field** — discount % = `(standard_price - unit_price) / standard_price × 100`. Two-way input: type unit price → derive %, OR type % → compute unit price.
- [ ] **Add brand to item display string** — formatted string: `[item_code] [brand] [item_name]`. Brand currently not shown.
- [ ] **Minimum price guardrail** — if unit price goes below item minimum price, trigger alert/block. Tied to item price movement feature.
- [ ] **Confirm item-level discount in backend** — check with Amir if discount % stored at item level or price list level. Determines how to derive historical discount accurately.
- [ ] **Collect calculator policy samples from Fixguru** — they updated volumetric/dimensional calculator rules; gather sample data, document transformation ratios. Scope customisation cost if needed.

### Out of Scope (confirmed)
- Customer-specific pricing tiers — Fixguru does not use this
- FOC (free-of-charge) qty on line items — not in current scope; document and defer

---

## Calculator

### Context
Fixguru uses a dimensional calculator (linear meter / square meter) for pricing raw materials (e.g. packaging boxes). They updated their calculator policy — samples needed. Customisation = chargeable change request.

### Action Items

- [ ] **Remove SST from calculator display** — Fixguru does not show tax to customers. Tax is in item master but must not surface in calculator or document output. Config fix (not code change).
- [ ] **Enforce length ≥ width validation** — physical constraint: if width > length, they cannot print the box. Calculator must validate and enforce `length >= width` before allowing submission.
- [ ] **Confirm unit handling (linear meter)** — they measure in meters. Verify calculator correctly handles linear meter input and unit conversion edge cases.
- [ ] **Sync volumetric formula to AutoCount** — volumetric/dimensional calculation must be passed to AutoCount on SO sync (for delivery note and driver reference).
- [ ] **Gather updated calculator policy samples from Fixguru** — they updated transformation ratios and rules. Collect sample data, document all ratios (raw material per unit, composition breakdown).
- [ ] **Scope composition/BOM customisation** — they have a composition-based stock calculation (not full manufacturing). Ask Fixguru: do they want to customise this? If yes → chargeable change request.
- [ ] **UI/UX fixes on calculator** — Amir to review and fix calculator UI (flagged as enhancement, not a blocker).

### Out of Scope (to confirm)
- Full manufacturing BOM — not in scope; composition calc only

---

## PDF Template

### Context
Client expects AutoCount PDF from **start to end** — including draft SO stage. MAIA pushes to AutoCount on submission (not approval). MAIA's stricter validation means: if it passes MAIA, data is clean when it lands in AutoCount.

**Proposed solution (Wei Yon):** Pull the HTML from AutoCount's Report Design Center → mimic on MAIA side → this becomes the Fixguru "Ultimax PDF". Not a redesign from scratch.

### Action Items

- [ ] **Get HTML from AutoCount Report Design Center** — extract Fixguru's existing PDF template HTML. Use as reference to replicate on MAIA (Ultimax PDF).
- [ ] **Push SO to AutoCount on submission (not approval)** — client needs AutoCount PDF available from draft/submission stage. Sync trigger = submission, not final approval.
- [ ] **Fix item code on PDF** — show AutoCount external item code, not MAIA internal ID
- [ ] **Delivery note PDF — multiple warehouse checks** — add multiple warehouse check fields; current PDF only has one
- [ ] **Volumetric m3 on Delivery Note PDF (CR-12)** — show m3 field on Delivery Note PDF. Reference templates in AutoCount: Tools → Report Design Center → "IAM Delivery Order" + "IAM Delivery Order (Branch)". Use these as layout reference for MAIA PDF V3.

### Out of Scope (to confirm)
- Building PDF template from scratch — solution is to mimic AutoCount HTML, not redesign

---

## Credit Limit ⚠️ Scope Change

### What changed
Original spec: MAIA tracks SO amount only for credit exposure.
New requirement: full credit exposure = **unbilled SO amount + outstanding invoices**. Data must come from AutoCount via two-way sync to be accurate.

### Formula
```
Credit Exposure = (SO amount − already invoiced) + outstanding unpaid invoices
```
- Exclude: draft docs, closed/paid invoices
- Include: all open SO, SI, credit/debit notes (except draft)

### Action Items

- [ ] **Update credit exposure formula** — change from SO amount only to: unbilled SO amount + outstanding invoice amount
- [ ] **Exclude draft documents** from credit exposure calculation
- [ ] **Surface credit limit in chatbot** — when sales user creates new SO, chatbot must show: credit limit, current exposure, available balance. Block or warn if exceeded.
- [ ] **Pull credit data from AutoCount** — accurate credit limit requires AutoCount data via two-way sync (MAIA alone cannot guarantee accuracy without it)
- [ ] **Scope credit limit as scope change** — document deviation from original spec, flag to Fixguru, update SOW/retainer accordingly

---

## Chatbot

- [ ] **Language preference — store in DB** — user can set English or Malay response preference. Store in DB (not chatbot chain). Pending Amir's user context feature.
- [ ] **Language handling policy (per SOW — set expectation with Fixguru)** — intake: any language including Mandarin. Response: English or Malay only (user preference). Mandarin response = not supported at this time. Must communicate this clearly to client.
- [ ] **Ambiguity detector** — if classifier cannot classify intent, chatbot must ask for clarification. Do not guess. Critical — this solves most language edge cases too.
- [ ] **Item display format** — chatbot must show `[item_code] [brand] [item_name]` + external SKU (AutoCount ID). Do not show MAIA internal ID.
- [ ] **Item search keys** — chatbot must search by `item_code`, `customer_code`, `customer_name` as primary keys. Not internal ERPNext ID.
- [ ] **HQ + branch contact sync** — some Fixguru customers have multiple branches. Chatbot must correctly assign branch when creating SO. Requires contact sync across HQ + branch.
- [ ] **Delivery method as SKU** — Fixguru treats transport charges as SKU items for e-invoice claiming. Resolution (Wei Yon): user instructs chatbot to search and add delivery item by name (e.g. "3PL Lalamove") as a regular line item. Chatbot must support searching delivery-type items in item list, not force-route to delivery method field.


### Out of Scope (confirmed)
- Mandarin **response** — intake supported per SOW, but chatbot replies in English/Malay only. Risk: search/API translation errors if Mandarin input is ambiguous.
- 3PL multi-channel — MAIA instance supports one channel account only; 3PL routing not in scope

---

## AutoCount Sync

- [ ] **Confirm cutoff date with Fixguru** — agree snapshot date (likely 2nd UAT). Before = no sync. After = full two-way sync on all docs (SO, Invoice, etc.)
- [ ] **Scope standalone invoice sync** — AutoCount docs during migration period sync as standalone invoices into MAIA (no historical SO parent needed)
- [ ] **Add cutoff date config field** — hard-coded param in sync config; anything before cutoff untouched
- [ ] **Request snapshot file from Fixguru** at cutoff date — needs: (1) customer credit limits, (2) open invoice exposure per customer (statement of accounts). MAIA ingests to seed credit data.
- [ ] **Scope daily stock reconciliation** — configurable time (e.g. 7AM), MAIA pulls stock snapshot from AutoCount daily. Define policy per instance.
- [ ] **Fix item_code overwrite on sync** — MAIA currently syncs using its own item_code; must overwrite with AutoCount's item_code. Validate against AutoCount on push.
- [ ] **Scope sync policy for existing Customer/Item records** — items and customers already in AutoCount pre-MAIA go-live need a defined match/conflict resolution policy (which ID wins, how to handle duplicates)
- [ ] **Fix item code display in chatbot** — switch from MAIA internal ID to AutoCount external SKU
- [ ] **Sync customer contacts + branches from AutoCount** — HQ contact maps to customer contact in MAIA; each branch maps to a shipping address with its own contact. Decision: spec out the sync mapping before dev. (CR-11)
- [ ] **Update retainer/SOW** — two-way sync scope deviates from original spec; retainer revision needed
- [ ] **Prepare in/out of scope doc** — full list of what MAIA will/won't do for AutoCount sync. Bring to next Fixguru sync.
- **Out of scope:** Historical data migration (5–7 years) = chargeable separate service. Full 100k+ invoice backfill = not viable.

## See Also

- [[Fixguru business workflow]]
- [[Feature Requests & Gaps]]
- [[SOW/Fixguru SOW]]

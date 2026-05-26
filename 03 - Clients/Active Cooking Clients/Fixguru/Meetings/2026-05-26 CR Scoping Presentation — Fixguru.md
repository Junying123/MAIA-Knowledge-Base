---
owner: Gareth
status: draft
last_reviewed: 2026-05-26
---

# CR Scoping — Fixguru Client Meeting

**Meeting Purpose:** Walk Fixguru through change requests outside signed SOW, align on scope, and confirm go-ahead for costing.

---

## Context: What's Covered in Phase 1 (No Extra Charge)

Before presenting CRs, confirm what Phase 1 already delivers:

| What | Status |
|---|---|
| Quotation → SO → Invoice workflow via chatbot | In scope |
| Two-way AutoCount sync (from go-live date onward) | In scope |
| Finished goods stock visibility | In scope via sync |
| Historical pricing surfaced in chatbot | In scope |
| Credit limit exposure display | In scope |
| 2 existing calculator formula updates | **Free** — formula-only update |
| Delivery Note with shipping method | In scope |

---

## CR 1 — Additional Calculators (3 New Builds)

### Background
During UAT, Fixguru shared updated calculator files. 2 existing calculators need formula updates only (covered free). The remaining **3 calculators are new builds** — each has different fields, different UI, and different calculation logic.

### What Fixguru Gets
- 3 new calculator pages built into the Custom Box Quotation module
- Each calculator configured with Fixguru's exact formula logic per their latest Excel models
- Same engine as existing calculators — same UX pattern, new inputs per box type

### Why This is a CR
The SOW covered the original 2 calculator builds. These 3 are net-new UI + logic builds, not updates to existing ones.

### Scope Details

| Item | Detail |
|---|---|
| Calculators | Pizza, Layerpad, Five Panel (Diecut family variants) |
| Input | Fixguru's updated Excel calculator models (Amirul to provide) |
| Basis | Same engine skeleton as existing 2 calculators |
| Effort | ~1 mandate per calculator |

### Pending Before Scoping Can Close
- ~~Unit toggle (cm ↔ inches) — out of scope~~

### Out of Scope
- Unit toggle (cm ↔ inches) — not included in this CR

### Estimated Cost
| Item | Mandates |
|---|---|
| 3 new calculator builds | 3 mandates |
| **Total** | **3 mandates** |

---

## CR 2 — Raw Material Stock Visibility (BOM / Stock Backward)

### Background
Fixguru manufactures custom boxes. Their workflow is:
1. Buy raw material (sheetboard) from supplier
2. Convert sheetboard → finished boxes via production run
3. Sell finished boxes to customers

When a sales person receives a new order, they need to answer: **"Can I fulfil this? How much can I promise?"**

To answer that, they need to see two things at once:
- How much **raw material (sheetboard)** is left?
- How much **finished goods (boxes)** are ready to ship?

Currently they go into AutoCount to check both. They want this visibility in MAIA.

### What Fixguru Gets

**Dual Stock View**
- See raw material stock balance and finished goods stock balance side by side
- Know how much additional finished goods can still be produced from remaining raw material

**Conversion Planner**
- Record actual production run output (e.g. consumed 2,000 sheetboard → produced 3,900 boxes, not 4,000)
- MAIA shows expected vs. actual output and flags the yield gap
- Sales team uses this to decide: adjust DO quantity / give FOC units / re-order

**BOM Sync from AutoCount**
- Pull BOM composition (raw material components + transformation ratio) from AutoCount
- Sync raw material stock and finished goods stock on daily schedule

### Why This is a CR
SOW covers document sync and finished goods stock only. Tracking raw materials, BOM conversion ratios, and yield variance requires a new module not in the original scope.

### Scope Details

| Item | Detail |
|---|---|
| Source of truth | AutoCount BOM + stock data |
| Sync method | Extend existing AutoCount integration |
| New module | Stock Conversion Module (Logistics Workspace) |
| Key features | Dual stock view, producible qty calc, yield variance, conversion entry |

### What We Need from Fixguru to Scope
- [ ] Confirm: which raw materials map to which finished goods?
- [ ] Confirm: is the transformation ratio fixed per BOM or variable?
- [ ] Confirm: do they want yield variance tracking or just stock visibility?

### Estimated Cost
| Item | Mandates |
|---|---|
| AutoCount BOM + stock sync extension | 1 mandate |
| Stock Conversion Module (dual view + conversion planner) | 2–3 mandates |
| **Total** | **3–4 mandates** |

---

## Summary — All CRs

| # | CR | Mandates | Status |
|---|---|---|---|
| 1 | 3 new calculator builds | 3 | Pending Amirul's calculator data |
| 2 | Raw material stock visibility + BOM conversion | 3–4 | Pending scope confirmation from Fixguru |
| | **Total** | **6–7 mandates** | |

> Mandate pricing to be confirmed separately. Both CRs are independent — Fixguru can choose to proceed with either or both.

---

## What Fixguru Needs to Decide Today

1. **Calculator CR** — Do you want to proceed with all 3 new calculators? With unit toggle?
2. **Stock backward / BOM CR** — Do you want full conversion planner or just dual stock visibility?
3. **Priority order** — Which CR do you want delivered first?

---

## Next Steps (Post-Meeting)

| Action | Owner | By When |
|---|---|---|
| Fixguru confirms BOM scope (full vs. visibility only) | Fixguru | TBC |
| Mindhive issues formal CR quote | Gareth | Within 3 days of confirmation |
| CR doc signed | Both parties | Before dev starts |

---

## See Also

- [[CR Scoping — Fixguru]] — internal CR breakdown
- [[SOW/Fixguru SOW]] — signed baseline scope
- [[Requirements Log]] — full requirements log
- [[Meetings/2026-05-15 Fixguru UAT Action Items]] — UAT context

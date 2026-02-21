---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Tax Refactoring — Comprehensive Testing Plan

**Last Updated:** December 28, 2025 (Major Update — New Tax Logic)

## Key Change: New Tax Logic

The tax system was **significantly refactored** in December 2025. The previous "Tax on Total" vs "Tax on Items" dropdown has been replaced with a simpler, more flexible approach.

### What Changed

| Before | After |
|--------|-------|
| "Tax Type" dropdown (Tax on Total / Tax on Items) | Removed |
| Global tax field | Single "Tax" dropdown in Biller section |
| "Tax on Items" column (conditional) | Always-visible column in items table |

### New Tax Logic

```
For each item:
  IF item has specific tax in "Tax on Items" column:
    Use item-specific tax
  ELSE:
    Use global tax from Biller section (empty cell = inherit global)

Total Tax = Sum of all individual item taxes
Grand Total = Subtotal + Total Tax + Charges − Discount
```

### Why Better

- **Simpler UI** — One less dropdown to configure
- **More Flexible** — Mix and match taxes per item without switching modes
- **Clearer Intent** — Empty cell = use global, filled cell = override

---

## Available Tax Options

| ID | Name | Rate | Type |
|----|------|------|------|
| T1 | Malaysia GST 10% | 10% | GST |
| T2 | Malaysia GST 5% | 5% | GST |
| T3 | Malaysia GST 6% | 6% | GST |
| T4 | No Tax | 0% | None |
| T5 | SST 6% | 6% | SST |

---

## Test Phases Overview

| Phase | Description | Total Tests | Must Test |
|-------|-------------|-------------|-----------|
| Phase 1 | Global Tax Only (all items inherit) | 5 | 3 |
| Phase 2 | Partial Override (some items override) | 5 | 3 |
| Phase 3.1 | Full Override — 2 items | 10 | 2 |
| Phase 3.2 | Full Override — 3 items | 10 | 2 |
| Phase 3.3 | Full Override — 4 items | 5 | 1 |
| Phase 3.4 | Full Override — 5 items | 1 | 1 |
| **Total** | | **36** | **12** |

---

## 12 Critical Tests (MUST TEST)

### Phase 1: Global Tax Only
- **GT-01** — Malaysia GST 10% global, 3 items inherit → Subtotal RM315.90, Tax RM31.59, Total RM347.49
- **GT-03** — Malaysia GST 6% global, 3 items inherit → Subtotal RM315.90, Tax RM18.95, Total RM334.85
- **GT-04** — No Tax global, 3 items → Tax RM0.00, Total = Subtotal

### Phase 2: Partial Override
- **PO-01** — Global GST 6%, Item 2 overrides to GST 10% → Mixed tax amounts
- **PO-02** — Global GST 6%, Item 1 overrides to No Tax → Item 1 exempt despite global tax
- **PO-03** — Global GST 6%, Item 1 overrides to SST 6% → Same rate, different type

### Phase 3.1: Full Override — 2 Items
- **FO-2-04** — GST 10% + SST 6% (**Critical:** GST+SST mix)
- **FO-2-09** — GST 6% + SST 6% (**Critical:** same rate, different type)

### Phase 3.2: Full Override — 3 Items
- **FO-3-01** — GST 10%, GST 5%, GST 6% (all GST rates)
- **FO-3-03** — GST 10%, No Tax, SST 6% (all tax types)

### Phase 3.3: Full Override — 4 Items
- **FO-4-03** — GST 10%, GST 6%, SST 6%, No Tax (complete mix)

### Phase 3.4: Full Override — 5 Items
- **FO-5-01** — All 5 tax options in one order (ultimate test)

---

## Standard Test Items (for calculations)

| Item | SKU | Price |
|------|-----|-------|
| Item 1 | DAIRY-MILK-FRESH-001 | RM 30.00 |
| Item 2 | EYEWEAR-POLARIZED-001 | RM 100.00 |
| Item 3 | HANGUAN-001 | RM 50.00 |
| Item 4 | HAMA-001 | RM 80.00 |
| Item 5 | MEAL-002 | RM 55.90 |

See [[Tax Test Items Update]] for calculation details.

---

## Edge Cases

- **Rounding** — Tax calculated to 2 decimal places; watch for cumulative rounding errors
- **GST vs SST mixing** — System must correctly distinguish tax types
- **Zero-amount items** — No tax on RM 0.00 items
- **Negative amounts** — Credit notes / adjustments

---

## Tax Calculation Formula

```
Item Tax = Item Amount × Effective Tax Rate
  where Effective Tax Rate = Item-specific rate (if set) OR Global rate

Subtotal = Sum of all item amounts
Total Tax = Sum of all item tax amounts
Grand Total = Subtotal + Total Tax + Charges − Discount
```

---

## See Also

- [[Tax Locator Improvements]]
- [[Tax Test Items Update]]
- [[Products by Company]]
- [[Sales Order Workflow Guide]]

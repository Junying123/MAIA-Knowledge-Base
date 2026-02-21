---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Tax Test Items Update

**Date:** December 28, 2025
**Status:** Complete

## Overview

Updated all 12 critical tax tests to use standardized items.

---

## New Test Items

### Primary Items (3-item tests)

| Item | SKU | Unit Price |
|------|-----|-----------|
| Item 1 | DAIRY-MILK-FRESH-001 | RM 30.00 |
| Item 2 | EYEWEAR-POLARIZED-001 | RM 100.00 |
| Item 3 | HANGUAN-001 | RM 50.00 |

**3-item base subtotal:** RM 180.00

### Additional Items (4-5 item tests)

| Item | SKU | Unit Price |
|------|-----|-----------|
| Item 4 | HAMA-001 | RM 80.00 |
| Item 5 | MEAL-002 | RM 55.90 |

**4-item subtotal:** RM 260.00
**5-item subtotal:** RM 315.90

---

## Item Replacements

| Old SKU | New SKU | Old Price | New Price |
|---------|---------|-----------|-----------|
| COFFEE-NESTLE-001 | DAIRY-MILK-FRESH-001 | RM 15.90 | RM 30.00 |
| MEAL-001 | EYEWEAR-POLARIZED-001 | RM 100.00 | RM 100.00 |
| MEAL-003 | HANGUAN-001 | RM 200.00 | RM 50.00 |
| DAIRY-MILK-FRESH-001 | HAMA-001 | RM 8.50 | RM 80.00 |
| DR-001 | MEAL-002 | RM 5.00 | RM 55.90 |

---

## Sample Result

**GT-01: All items inherit global GST 10%**
- Subtotal: RM 180.00
- Tax (10%): RM 18.00
- Grand Total: RM 198.00
- Status: PASSED

---

## See Also

- [[Tax Refactoring]]
- [[Tax Locator Improvements]]
- [[Products by Company]]

---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Tax Locator Improvements

**Date:** December 28, 2025
**Status:** Complete

## Problem

Original locators used complex DOM traversal patterns that were fragile:

```typescript
// Old approach
this.subtotalDisplay = page.getByText('Subtotal:').locator('..').getByText(/RM[\d,.]+/);
```

## Solution

Updated to **direct text matching** based on Playwright Inspector recordings:

```typescript
// New approach
const subtotalText = await this.page.getByText(/Subtotal:RM[\d,.]+/).textContent();
```

## New Locators (Playwright Inspector)

```typescript
page.getByText('Subtotal:RM315.90')       // Subtotal
page.getByText('Total Tax:RM18.95')        // Total Tax
page.getByText('Malaysia GST 6%:RM18.95') // Tax Breakdown (per type)
page.getByText('Grand Total:RM334.85')     // Grand Total
```

## Methods Added to SummarySection

```typescript
// Get Total Tax value
async getTotalTax(): Promise<string>

// Get specific tax breakdown value
async getTaxBreakdown(taxName: string): Promise<string>
```

## Files Modified

1. `page-objects/sales-order-sections/SummarySection.ts`
   - Added `getTotalTax()` and `getTaxBreakdown(taxName)` methods
   - Updated `getSubtotal()` and `getGrandTotal()` to use direct text matching

2. `tests/e2e/tax/tax-critical-12-tests.spec.ts`
   - All 12 tests now verify: Subtotal + Total Tax + Grand Total

3. `tests/e2e/tax/verify-tax-locators.spec.ts` _(new)_
4. `tests/e2e/tax/debug-locators.spec.ts` _(new)_

## Benefits

1. **More Reliable** — Matches exactly what the user sees
2. **Easier to Debug** — Locators match Inspector recordings
3. **Better Coverage** — Now verifying Total Tax in all tests
4. **Maintainable** — Clear relationship between UI and test code

## How to Record Locators with Inspector

```bash
npx playwright test tests/e2e/tax/debug-locators.spec.ts --project=chromium --headed --debug
```

1. Click the crosshair icon (🎯) in Inspector
2. Click on elements in the browser
3. Copy the generated locators
4. Update Page Objects

## Verification

```bash
npx playwright test tests/e2e/tax/verify-tax-locators.spec.ts --project=chromium --headed
```

Expected: `1 passed`

---

## See Also

- [[Tax Refactoring]]
- [[Tax Test Items Update]]

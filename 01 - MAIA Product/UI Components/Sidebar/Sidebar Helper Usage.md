---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Sidebar Helper Usage Guide

This guide explains how to use the modular `SidebarHelper` utility class for sidebar navigation in test automation.

## Overview

The Sidebar functionality is split into two parts:

1. **`page-objects/Sidebar.ts`** — Page Object Model with all sidebar interactions
2. **`utils/sidebar-helper.ts`** — Reusable utility functions for common sidebar operations

---

## Quick Start

```typescript
import { SidebarHelper } from '../utils/sidebar-helper';
import { Sidebar } from '../page-objects/Sidebar';
```

---

## Common Use Cases

### 1. Navigate and Switch Workspace

```typescript
// Old way (manual):
await page.goto('/sales/orders');
await page.waitForLoadState('networkidle');
await page.waitForTimeout(2000);
const sidebar = new Sidebar(page);
await sidebar.switchWorkspace('MAIA');

// New way (modular):
const sidebar = await SidebarHelper.navigateAndSwitchWorkspace(page, 'MAIA', '/sales/orders');
```

### 2. Navigate to Multiple Pages

```typescript
const urlRecords = await SidebarHelper.navigateToPages(page, [
  { name: 'Dashboard', method: (s) => s.navigateToDashboard(), expectedUrl: '/sales' },
  { name: 'Quotations', method: (s) => s.navigateToQuotations(), expectedUrl: '/sales/quotations' },
  { name: 'Invoices', method: (s) => s.navigateToInvoices(), expectedUrl: '/sales/invoices' }
]);
SidebarHelper.printUrlSummary(urlRecords);
```

### 3. Navigate All Sidebar Links

```typescript
const urlRecords = await SidebarHelper.navigateAllLinks(page, 'MAIA');
SidebarHelper.printUrlSummary(urlRecords);
const workingCount = urlRecords.filter(r => r.status === '✅').length;
expect(workingCount).toBeGreaterThan(0);
```

### 4. Verify Single Navigation

```typescript
const isValid = await SidebarHelper.verifyNavigation(
  page,
  (s) => s.navigateToQuotations(),
  '/sales/quotations',
  'Quotations'
);
expect(isValid).toBe(true);
```

### 5. Get Base URL (Remove Query Parameters)

```typescript
const fullUrl = 'https://example.com/sales/orders?page=1&sort=updated';
const baseUrl = SidebarHelper.getBaseUrl(fullUrl);
// Returns: 'https://example.com/sales/orders'
```

---

## Available Helper Functions

### `navigateAndSwitchWorkspace(page, workspaceName, navigateToPage?)`

Navigates to a page and switches workspace in one call.

- `page` — Playwright Page object
- `workspaceName` — Workspace to switch to (default: `'MAIA'`)
- `navigateToPage` — Page to navigate to first (default: `'/sales/orders'`)
- **Returns:** Sidebar instance

### `navigateToPages(page, navigationConfigs)`

Navigates to multiple pages in sequence.

- `navigationConfigs` — Array of `{ name, method, expectedUrl?, handleErrors? }`
- **Returns:** Array of URL records

### `navigateAllLinks(page, workspaceName?)`

Navigates through all sidebar links automatically.

- **Returns:** Array of URL records for all links

### `printUrlSummary(urlRecords, title?)`

Prints a formatted summary of URL records to console.

### `verifyNavigation(page, navigationMethod, expectedUrlPattern, linkName)`

Verifies that a navigation link works correctly.

- **Returns:** `boolean` (true if navigation succeeded)

### `getBaseUrl(fullUrl)`

Extracts base URL without query parameters.

---

## Usage in Tests

### Simple Navigation Test

```typescript
test('navigate to quotations', async ({ authenticatedPage }) => {
  await SidebarHelper.navigateAndSwitchWorkspace(authenticatedPage, 'MAIA');
  const sidebar = new Sidebar(authenticatedPage);
  await sidebar.navigateToQuotations();
  expect(authenticatedPage.url()).toContain('/sales/quotations');
});
```

### Comprehensive Navigation Test

```typescript
test('test all sidebar links', async ({ authenticatedPage }) => {
  const urlRecords = await SidebarHelper.navigateAllLinks(authenticatedPage, 'MAIA');
  SidebarHelper.printUrlSummary(urlRecords);
  const workingCount = urlRecords.filter(r => r.status === '✅').length;
  expect(workingCount).toBeGreaterThan(14);
});
```

---

## Best Practices

1. **Use helpers for common patterns** — Reduces boilerplate across tests
2. **Keep tests focused** — Use helpers to set up, keep assertions in the test body
3. **Handle errors** — Use `handleErrors: true` in navigation configs for non-critical links
4. **Chain helpers** — Combine helpers for complex flows

---

## See Also

- [[Sidebar Feature Categories]]
- [[Sidebar Refactoring Summary]]
- [[Sidebar Navigation URLs]]
- [[Sidebar Categories Quick Reference]]

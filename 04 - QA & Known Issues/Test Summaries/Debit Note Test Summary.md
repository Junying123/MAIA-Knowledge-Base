---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Debit Note Test Cases Summary

## Overview

54 tests to make sure debit notes work correctly when creating them, changing their status, collecting payments, and checking data.

## Test Coverage Areas

- **Creating & Adding Items:** Tests check you can add extra items, fix billing mistakes, adjust prices, and handle extra charges; you can change items freely when drafting but can't edit them after submitting; must have at least one item with a value more than zero.

- **Status Changes & Rules:** Tests check you can submit drafts, delete drafts without affecting anything, cancel submitted notes with a confirmation step, prevent editing after submitting, and stop users from creating debit notes from already paid or cancelled invoices.

- **Collecting Payments:** Tests check you can create receipts for full or partial amounts, allow multiple receipts for one debit note, work with partially paid invoices, prevent collecting more than the debit note amount, and update customer balances instantly.

- **Payment Terms & Checks:** Tests check payment terms copy from the original invoice, support different payment types like cash upfront or net 30/60 days, make sure payment splits add up to 100%, automatically calculate payment amounts and due dates, and require invoice references with matching currency.

---

## See Also

- [[Debit Note Workflow Guide]]
- [[Debit Note Creation Summary]]
- [[Invoice Test Summary]]
- [[Credit Note Test Summary]]
- [[Receipt Test Summary]]

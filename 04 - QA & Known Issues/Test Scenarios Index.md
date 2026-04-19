---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Test Scenarios Index

Index of all test scenarios and test coverage for MAIA.

## Test Coverage Summary

| Module | Scenarios | Passed | Failed | Blocked | Coverage |
|--------|-----------|--------|--------|---------|----------|
| Quotations | 46 | 29 | 0 | 1 | 63% |
| Sales Orders | 14 | 12 | 0 | 1 | 86% |
| Invoices | 13 | 11 | 0 | 0 | 85% |
| Credit Notes | 8 | 4 | 0 | 0 | 50% |
| Receipts | 2 | 0 | 0 | 0 | 0% |
| Integration | 23 | 1 | 0 | 1 | 4% |
| Certificate (Tax Reference) | 35 | 0 | 0 | 0 | 0% |
| **Total** | **141** | **57** | **0** | **3** | **40%** |

## Test Scenario Categories

### Core Workflows
- Quote-to-Cash (5 items) — ✅ PASSED
- Quote-to-Cash (10 items) — ❌ BLOCKED (multiple credit notes)
- Perfect Quotation Flow — ✅ PASSED
- Perfect Sales Order Flow — ✅ PASSED
- Perfect Invoice Flow — ✅ PASSED

### Edge Cases
- Zero-value items — ✅ PASSED
- Maximum items (100) — ⏹️ Not Tested
- Delete referenced documents — ✅ PASSED
- Multiple invoices from SO — ✅ PASSED

### Known Failures
- US-09: Lost Quotation — ❌ FAILED (native browser confirm)
- INT-02: Multiple Credit Notes — ❌ BLOCKED (product limitation)

## Test Environment

- **Dev Environment:** https://maia-oms-dev.vercel.app (for dev team testing)
- **Demo Environment:** https://maia-oms-demo.vercel.app (for client demos, PM testing)
- **Automation:** Playwright test suite

## Test Case Files

- [[04 - QA & Known Issues/Test Cases/Certificate Tax Reference Test Cases]] — C1, C3, A57 tax exemption (35 cases)
- [[04 - QA & Known Issues/Test Cases/Receipt Test Cases Guide]]
- [[04 - QA & Known Issues/Test Cases/Debit Note TC-DN-001 Testing Guide]]
- [[04 - QA & Known Issues/Test Cases/Stock Availability Warning Test Guide]]

## See Also

- [[Known Bugs & Limitations]]
- [[Workarounds Library]]
- [[Feature Gap Tracker]]
- [[02 - PM Playbook/Templates/[Template] QA Scenario]]
- External: `/Users/garethng/maiav2-test/USER_STORIES_CSV_ANALYSIS_SUMMARY.md`

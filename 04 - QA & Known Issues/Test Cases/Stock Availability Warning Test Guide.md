---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Stock Availability Warning/Enforcement - Testing Guide

**Last Updated:** February 2026
**Feature Category:** Inventory Management / Sales Order Processing
**Modules Involved:** Sales Orders, Quotations, Invoices, Items, Logistics, Warehouses
**Priority:** High (Business Critical)

---

## Overview

**Stock Availability Warning/Enforcement** is a system feature that checks whether ordered items have sufficient inventory before allowing sales orders to proceed. It prevents overselling, maintains inventory accuracy, and helps the business manage customer expectations.

**Two Modes:**
1. **Warning Mode** — Alerts users about low/insufficient stock but allows order creation
2. **Enforcement Mode** — Blocks order creation if insufficient stock is available

---

## Feature Description

### Warning Mode Behavior
- System checks item quantities against available stock
- Displays warning message when stock is insufficient
- Allows user to proceed with order creation (override capability)
- Logs warning acknowledgment for audit trail
- May require manager approval for override

### Enforcement Mode Behavior
- System checks item quantities against available stock
- Blocks order submission if insufficient stock
- Displays clear error message with current stock levels
- Requires user to either:
  - Reduce order quantity to available stock
  - Wait for stock replenishment
  - Cancel/save as draft for later

---

## Business Context

**From Sales Team:** Prevents promising delivery of unavailable items, reduces order cancellations
**From Logistics Team:** Prevents fulfillment bottlenecks, enables accurate pick planning
**From Finance Team:** Prevents revenue recognition issues, reduces refunds and credit notes
**From Management:** Reduces operational costs, maintains customer relationships

---

## User Personas Affected

| Persona | Impact | Needs |
|---------|--------|-------|
| Sales Agent | Directly uses feature when creating quotations and orders | Clear stock visibility, ability to check alternatives |
| Logistics Coordinator | Relies on accurate stock availability for planning | Accurate real-time stock data, no oversold orders |
| Sales Manager | Approves overrides in warning mode | Clear justification for overrides, audit trail |
| Inventory Controller | Maintains stock accuracy that feeds this feature | Feedback on stock discrepancies |

---

## Test Scenarios

| # | Scenario | Setup | Expected |
|---|----------|-------|----------|
| 1 | Sufficient Stock Available | 100 units available, order 10 | No warning |
| 2 | Exact Stock Match | 10 units, order 10 | Proceeds (optional: warn about zero remaining) |
| 3 | Insufficient Stock - Warning Mode | 5 units, order 10, Warning Mode | Warning shown, user can proceed |
| 4 | Insufficient Stock - Enforcement Mode | 5 units, order 10, Enforcement Mode | Error shown, blocked |
| 5 | Zero Stock - Enforcement | 0 units, any quantity | Hard block |
| 6 | Multi-Item Mixed Stock Levels | 3 items, some sufficient/some not | Warnings only for insufficient items |
| 7 | Multiple Warehouses | Item split across warehouses | System checks total or per-warehouse |
| 8 | Reserved/Allocated Stock | 20 total, 15 allocated, order 10 | Checks available (5), not total (20) |
| 9 | Batch-Tracked Items | Item tracked by batch, FEFO logic | Checks total or suggests FEFO allocation |
| 10 | Serial-Tracked Items | 3 serial numbers available, order 5 | Warning/error that only 3 available |
| 11 | Order Amendment After Stock Change | SO exists with 10, amend to 20, stock now 15 | Check on amendment |
| 12 | Concurrent Orders (Race Condition) | 2 users order same limited stock | First-come-first-served, no overselling |
| 13 | Stock Arrival During Hold | SO on HOLD, stock arrives | Allow resumption |
| 14 | Non-Inventory Items (Services) | Service item, any quantity | No stock check |
| 15 | Override with Manager Approval | Warning mode override | Approval workflow triggered |

---

## Critical Test Cases (P0)

### TC-SA-001: Sufficient Stock — Happy Path
- Company: MAIA, Item: MEAL-001, Stock: 100, Order: 10
- Expected: Order created, no warnings
- Status: [Pass/Fail/Blocked]

### TC-SA-002: Exact Stock Match
- Company: MAIA, Item: MEAL-002, Stock: 10, Order: 10
- Expected: Proceeds (optional warning about depleting stock)
- Status: [Pass/Fail/Blocked]

### TC-SA-003: Warning Mode — Insufficient Stock with Override
- Company: MAIA, Item: MEAL-003, Stock: 5, Order: 10, Warning Mode
- Expected: Warning dialog shows current/requested stock, options to Cancel or Proceed
- Status: [Pass/Fail/Blocked]

### TC-SA-004: Enforcement Mode — Insufficient Stock Blocked
- Company: MAIA, Item: MEAL-004, Stock: 5, Order: 10, Enforcement Mode
- Expected: Error message, blocked, suggest reduce quantity to 5
- Status: [Pass/Fail/Blocked]

### TC-SA-005: Zero Stock — Hard Block
- Company: MAIA, Item: MEAL-005, Stock: 0, Order: any quantity
- Expected: "Item is out of stock (0 units available)" error
- Status: [Pass/Fail/Blocked]

---

## Edge Cases & Boundary Conditions

- **Negative Stock Quantity:** Treat as 0 available
- **Null/Undefined Stock Value:** Treat as 0 or prompt for initial count
- **Stock Change During Order Creation:** Final check at submission time
- **Fractional Quantities:** Correct decimal arithmetic
- **Very Large Order Quantities:** Validate against stock and business rules
- **Company Switch During Order:** Stock checks refresh for new company
- **Item Discontinued After Quotation:** Warning about discontinued item
- **Warehouse Closure/Deactivation:** Stock in inactive warehouse not counted

---

## Integration Testing

| Integration | Flow | Verification |
|-------------|------|--------------|
| Sales Order → Logistics Pick List | Create SO → Submit → Generate Pick List | Stock allocated on SO submission |
| Purchase Receipt → SO Stock | Stock depleted → Receipt arrives → SO can proceed | Real-time stock updates |
| Stock Reconciliation → SO Blocking | Cycle count reduces stock → Pending SOs flagged | Orders automatically flagged |
| Return Note → Stock Restoration | Return arrives → Stock restored → New SO uses it | Returned goods immediately available |

---

## Success Criteria

Feature is "Ready for Production" when:
1. All P0 (Critical) test cases pass — 100% pass rate
2. All P1 (High) test cases pass — 100% pass rate
3. 90%+ P2 (Medium) test cases pass
4. No Critical or High severity bugs remain
5. Performance targets met (stock checks < 3 seconds)
6. UX validation passed
7. Integration tests pass
8. Edge cases handled gracefully
9. Audit trail verified
10. Stakeholder sign-off received

---

## Test Data Reference

| Company | Product | Stock Level | Use For |
|---------|---------|-------------|---------|
| MAIA | MEAL-001 | 100 | Sufficient stock scenarios |
| MAIA | MEAL-002 | 10 | Exact match |
| MAIA | MEAL-003 | 5 | Insufficient |
| MAIA | MEAL-004 | 5 | Insufficient |
| MAIA | MEAL-005 | 0 | Out of stock |
| AstraNova | Batch Item - 001 | 15 (Batch A: 5, B: 10) | Batch tracking |
| AstraNova | Serial No - 001 | 3 (SN001, SN002, SN003) | Serial tracking |

---

## See Also

- [[Products by Company]]
- [[Logistics User Persona]]
- [[Sales Order Workflow Guide]]
- [[Sales Workspace Modules]]

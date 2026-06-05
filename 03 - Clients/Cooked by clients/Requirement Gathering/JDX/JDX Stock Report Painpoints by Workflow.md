---
owner: Gareth
status: draft
last_reviewed: 2026-04-29
---

# JDX Stock Report Painpoints by Workflow

This note maps painpoints step by step across JDX sales channels, based on transcript review.

## Scope Clarification (Confirmed)

- `Stock recon` is covered by existing MAIA capability and should be treated as non-custom scope.
- `Material Receipt / GRN` is the customized feature request.

### MAIA Existing Capability: AEON Kiosk Sales Monthly SO Flow

- One SO is created per kiosk per month to accumulate daily AEON sales.
- Day 1: Add Day 1 sales quantities to the SO. Submit the SO. Create the Day 1 DN. Stock movement is recorded for Day 1.
- Day 2 onwards: Amend the same SO with the next day's sales quantities. Submit the SO again. Create that day's DN. Stock movement is updated for the day.
- Repeat daily through the month on the same SO.

### MAIA Existing Capability: End-of-Month AEON Billing

- At EOM, the month accumulated SO is used to issue one Invoice to AEON.
- Discount is applied on the Invoice to reflect AEON fixed commission (consignment arrangement).
- One SO is finalized for the month. One Invoice is issued from that SO. Payment is collected after applying the agreed AEON commission adjustment.

## B2C AEON Kiosk Flow

### Step 1: HQ transfer stock to AEON kiosk
- Transfer record and on-ground stock visibility are not always in one place.
- Hard to know true outside stock position across many kiosks.

### Step 2: Promoter records daily stock movement
- Manual recording creates high human error risk.
- Promoter digital comfort varies; some are not comfortable with computers.
- New SKU or field changes force handwritten notes outside template.

### Step 3: Promoter submits EOD report and HQ keys into SQL
- Duplicate work: write once, key in again.
- Unstructured input (photo/chat) slows processing.
- Daily visibility is delayed and audit trail is weaker.

### Step 4: Low stock / top-up request
- Request signal is informal (remarks/chat), not structured.
- No clear workflow for request -> review -> decision -> action.

### Step 5: EOM AEON portal billing check
- Reconciliation between AEON portal and internal records is manual.
- Mismatch investigation is time-consuming.
- Traceability from daily report to month-end billing differences is weak.

## B2C Outlet Kiosk Flow (QSoft -> SQL)

### Step 1: Order intake in QSoft POS
- Sales are captured in a different system lane from other stock processes.
- Cross-lane visibility (AEON/promoter vs outlet POS) is fragmented.

### Step 2: Data sync or key into SQL
- Sync timing and quality affect reporting freshness.
- Any partial manual handling increases mismatch risk.

### Step 3: Stock reconciliation and movement tracking
- Movement context (FOC/return/transfer) is not always equally visible in one place.
- Difficult to get one consolidated operational dashboard across all outlets.

## B2B Flow (Promoter refer -> HQ opens order)

### Step 1: B2B lead captured at frontline
- Handoff dependency: promoter must pass order context to HQ correctly.
- No single end-to-end capture at source in same workflow.

### Step 2: HQ opens SO/DO/invoice in SQL
- Manual order creation workload stays high at HQ.
- Bottleneck risk during peak or bulk periods.

### Step 3: Fulfillment from HQ
- Weak inventory movement visibility reduces fulfillment confidence.
- Channel-level stock attribution becomes unclear when systems are split.

## Cross-Flow Root Painpoints

- Main customization gap is `Material Receipt / GRN`, not stock recon workflow itself.
- Human re-entry and reconciliation effort still exists around source data capture quality.
- Operational control gap remains around request, decision, and audit trail for replenishment actions.

## What JDX is Really Trying to Get

- Keep using MAIA existing stock recon and monthly AEON SO to invoice flow.
- Add customization for `Material Receipt / GRN` to close goods receipt process gaps.
- Reduce manual key-in and improve traceability between operations and billing.

## See Also
- [[JDX Demo Script]]
- [[Customer Narrative - JDX]]
- [[Prep After Requirement Gathering/Requirement Gathering Output - JDX - 2026-03]]

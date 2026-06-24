---
client: Fixguru
type: learnings
last_updated: 2026-06-24
---

# Fixguru — Learnings

Running log of feedback, observations, and lessons from working with this client.

## Feedback Received

### 2026-06-24 UAT Debrief (4th UAT)
- Step-1 blocker (historical pricing per item, one-glance) still not delivered — same issue since 7 Apr
- Client sentiment: patient but eroding. Direct quote: *"I speak many times the same… I don't know how to tell you."*
- Client explicitly named AutoCount as the benchmark — MAIA must be faster/simpler than it at daily quoting
- Blue-collar users abandon anything that requires reading or hunting across numbers
- Dual-interface idea (chat + web front-end 70/30) surfaced as a potential direction

## What Works Well
<!-- Note approaches and solutions that resonated with this client -->

## Gaps & Challenges

### Recurring — Historical Pricing (Step 1, critical)
Prompt-level patching has hit its ceiling. Needs a first-class module sourced from invoices. Requirements:
- Min 5 rows per item (date, std price, discount %, net price, qty)
- Phone-number-first customer retrieval (not name)
- Single message, one glance, yes/no only
- Source must be invoices, not orders

### Design Principle: Fixguru User Reality
- Users are blue-collar; rich data feels like "a scare"
- The real competitor is AutoCount, not "no system" — slower MAIA = revert
- Job-to-be-done is one discount decision, made fast, with invoice history visible

### Credit/Approval Logic (clarified 2026-06-24)
- Block at DN level, not order level (blocking early loses money collection opportunity)
- Two blocks only: minimum price + credit limit
- AR-negative (prepaid) → approve on bank-in slip; credit-exceeded → case-by-case on bank-in slip
- Quotation still generated pending approval (no hard-stop)

## Session Notes
- Full debrief: [[Meetings/2026-06-24 Fixguru UAT Debrief]]
- Prior action items: [[Meetings/2026-05-15 Fixguru UAT Action Items]]

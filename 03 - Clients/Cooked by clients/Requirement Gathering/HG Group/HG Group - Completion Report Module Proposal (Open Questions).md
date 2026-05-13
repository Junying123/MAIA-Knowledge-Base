---
owner: Gareth
status: draft
last_reviewed: 2026-04-25
lark_url:
---

# HG Group — Completion Report Module Proposal (Open Questions)

## Overview

This document captures the proposed direction for HG's Completion Report module and, importantly, the **open questions that must be validated with Black before scope is confirmed**.

This is **not** a locked implementation scope yet.

---

## Current State (As-Is)

Based on RG context, completion reporting is currently a manual hybrid flow:

```
Site team uploads photos in WhatsApp
     ↓
Coordinator/assistant collects and reorganizes photos
     ↓
Text/report draft prepared (often with Claude support)
     ↓
PDF output generated and stored (e.g. Google Drive)
     ↓
Sent to client via WhatsApp group
```

### Current pain points

1. Photo collection can be fragmented across multiple chats.
2. Report generation time varies heavily by job complexity.
3. Evidence quality and consistency depends on who prepares the report.
4. Report records are not always tightly linked to one structured job record.

---

## Proposed Direction (To-Be, Pending Validation)

The intended direction is to make Completion Report generation part of Job Work Order completion:

```
Job Work Order reaches Completed stage
     ↓
System compiles job data + selected attachments
     ↓
Coordinator reviews and edits narrative
     ↓
Completion Report PDF generated
     ↓
PDF linked to Work Order + marked as sent
```

This would reduce manual hunting and create a clearer audit trail.

---

## Proposed Completion Report Structure (Draft Only)

### Section 1 — Job Header
- Work Order No.
- Customer
- Mall / Lot
- Service type(s)
- Work date/time window
- Team lead(s)

### Section 2 — Scope Performed
- Planned scope summary
- Actual scope executed
- Notes on deviation/variation (if any)

### Section 3 — Evidence
- Before/after photos (or execution photos)
- Optional captions per photo
- Optional client sign-off attachment reference

### Section 4 — Closure
- Completion note
- Prepared by / reviewed by
- Report generation timestamp

---

## Candidate Controls (Not Confirmed)

These are options to discuss with Black, not final commitments:

1. Minimum required evidence before report generation (e.g. minimum photo set).
2. Mandatory vs optional sign-off attachment.
3. Service-type-specific evidence template (Hoarding vs Scaffold vs Reinstatement).
4. "Report Generated" and "Report Sent" status flags on Work Order.

---

## Open Questions for Black (Critical)

| Question | Why it matters |
|---|---|
| Can we get 2-3 real sample completion report PDFs? | Needed to mirror actual client-facing format |
| Which sections are non-negotiable in report output? | Defines template baseline |
| What is mandatory evidence by service type? | Prevents low-quality or disputed reports |
| Is client sign-off required for every job or selected jobs only? | Affects closure logic |
| Who owns report preparation and who owns final send-out? | Role design and workflow responsibility |
| Are there mall-specific reporting requirements? | May require conditional templates |
| Is bilingual output needed (EN/BM/Chinese)? | Impacts template and rollout scope |

---

## Scope Positioning (Important)

At this stage, Completion Report should be treated as:

- **Discovery item in progress**
- **Design hypothesis, not final build commitment**
- **Pending Black validation before Phase 1 lock**

Recommended handling:
1. Keep Work Order attachment capture in Phase 1 baseline.
2. Finalize Completion Report template only after Black confirms samples and mandatory fields.
3. Lock implementation as either:
   - Phase 1 (if requirements stabilize quickly), or
   - Early Phase 1.5 / Phase 2 (if format and control logic remain unclear).

---

## See Also

- [[HG Group - Job Work Order Module Proposal]]
- [[HG Group - Invoice Module Proposal]]
- [[HG Group - Quotation Module Proposal]]
- [[Customer Narrative - HG Group]]

---
owner: Gareth
status: draft
last_reviewed: 2026-05-02
lark_url:
---

# HG Group — Job Work Order Module Proposal

## Overview

This document proposes the Job Work Order (JWO) module for HG Services (M) Sdn Bhd, based on Black's workflow pain points from the 23 April 2026 requirement gathering session. The design goal is simple: **every confirmed job must move through Commercial → Fabrication → Installer in a visible, structured, and auditable flow without relying on memory or WhatsApp relay.**

> *"It's kind of like a workstream for each client... each job has like five things to do... but it's human error."*
> — Black, RG Transcript, 23 Apr 2026

> *"One missile, we are dying already. The mall is not allowed to close."*
> — Black, RG Transcript, 23 Apr 2026

---

## The Problem: Today's Job Arrangement Flow

```
Client confirms + payment in
     ↓
Commercial team sends updates in WhatsApp groups
     ↓
Fabrication and Installer teams pick instructions from chat
     ↓
Lorry and manpower assigned manually
     ↓
Site execution
     ↓
Photos collected and completion report assembled manually
```

### Core pain points from transcript

| # | Pain Point | Direct Quote |
|---|---|---|
| 1 | No live job view — constant checking | *"How many KLCC jobs today? Maybe need to check. I hate to check."* |
| 2 | Missed overnight job = mall can't close | *"One job missing out of 30... one miss we are dying already."* |
| 3 | WhatsApp relay as only handoff | *"Commercial team put it in pocket. Never put it into fabrication, never into lorry arrangement."* |
| 4 | Priority collision drops tasks | *"He got three priority items. Did the first, forgot the second."* |
| 5 | Lorry/crew assignment not in a system | *"Lorry number 15, driven by Driver A, bring along four men. I need to check, then come back."* |
| 6 | No hard payment gate before execution | *"No invoice number is not a valid job."* |
| 7 | Completion evidence scattered | *"Reports submit to Claude, generate it, push to Google Sheets."* |
| 8 | Asset return untracked | *"Scaffold rented by week. 15 lorries all out."* |
| 9 | Dismantling WO not linked to install WO | *"The cycle keeps rotating — open, renovate, dismantle, hand over, rent again."* |

---

## Proposed Job Work Order Flow (After MAIA)

```
Sales Invoice confirmed + payment validated
     ↓
Create Job Work Order (from Sales Invoice)
     ↓
Commercial stage: scope + schedule + permit + attachments confirmed
     ↓ [guard: all Commercial fields complete]
Workflow transition to Fabrication
     ↓
Fabrication stage: materials/assets readiness confirmed
     ↓ [guard: scheduled date, crew assigned]
Workflow transition to Installer
     ↓
Installer stage: lorry + crew + asset deployment + on-site execution
     ↓ [guard: actual completion fields + evidence]
Completed (atomic transaction)
     ↓
Completion report generated + dismantling reminder triggered
```

---

## 1. State Machine

```
Draft → Commercial Confirmed → Fabrication Ready → In Progress → Completed
                                                              ↘ Cancelled (any state)
```

### Status Definitions

| Status | Meaning |
|---|---|
| Draft | Initial creation. No operational commitments made. |
| Commercial Confirmed | Scope, schedule, permit, and invoice reference locked. |
| Fabrication Ready | Materials and assets confirmed as prepared. Crew assigned. |
| In Progress | Crew mobilised on-site. `actual_start` stamped. |
| Completed | Job finished. Evidence uploaded. Record immutable. |
| Cancelled | Job voided. Asset reservations reversed. Reason required. |

### Transition Guards

| Transition | Guard Conditions |
|---|---|
| Draft → Commercial Confirmed | Sales Invoice reference exists. `scheduled_date`, `scheduled_time_window`, `mall`, `site_lot_no`, `service_type`, `job_scope` all filled. At least one permit attachment uploaded. |
| Commercial Confirmed → Fabrication Ready | At least one crew row in `jwo_crew` table. All material/asset rows have warehouse. `fabrication_lead` assigned. |
| Fabrication Ready → In Progress | `actual_start` stamped (system or manual). At least one crew row confirmed. |
| In Progress → Completed | `actual_end` filled. `work_done_notes` non-empty. `completion_confirmed_by` + `completion_confirmed_at` filled. `actual_qty_used` on all asset/material rows. At least one completion photo attached. |
| Any → Cancelled | `cancellation_reason` required (min 10 characters). Reversal logic fires automatically. |

### Scheduled Sub-Status (Derived, Display Only)

Computed at read time. Not stored as a field.

| Sub-Status | Derivation |
|---|---|
| Upcoming | `scheduled_date` > today + 3 days |
| Next 3 Days | `scheduled_date` within 3 days |
| Tomorrow | `scheduled_date` = today + 1 |
| Tonight | `scheduled_date` = today (overnight window) |
| Delayed | `scheduled_date` < now AND status ≠ Completed/Cancelled |

---

## 2. Document Positioning

JWO is created from a Sales Invoice. No invoice = no valid job.

### Creation Path

```
Sales Invoice (paid) → Create JWO
```

### Reference Fields

| Field | Type | Required |
|---|---|---|
| `sales_invoice_id` | Link | Required |
| `sales_order_id` | Link | Optional (auto-pulled from invoice) |
| `quotation_id` | Link | Optional |
| `parent_jwo_id` | Link | Optional — links dismantling WO back to install WO |

### Validation Rule

At least `sales_invoice_id` must exist before JWO can be confirmed.

---

## 3. Data Structure

### 3.1 Header Fields

| Field | Type | Notes |
|---|---|---|
| `jwo_id` | String (Auto) | Format: `HG-WO-YYYY-NNNNN` |
| `company` | Link | HG entity |
| `customer` | Link | Auto-filled from invoice |
| `contact_person` | Link | Auto-filled from customer |
| `mall` | Link | Job location |
| `site_lot_no` | Text | E.g. `B1-23, Pavilion KL` |
| `service_type` | Select | Hoarding / Scaffold / Reinstatement / Lorry / Printing / Multi-service |
| `job_scope` | Long Text | Scope from SO + coordinator notes |
| `scheduled_date` | Date | Planned execution date |
| `scheduled_time_window` | Text | E.g. `11:00 PM – 4:00 AM` |
| `priority` | Select | Normal / Urgent / Critical |
| `status` | Enum | See §1 |
| `commercial_lead` | Link | Owner of client and scope |
| `fabrication_lead` | Link | Owner of prep readiness |
| `installer_supervisor` | Link | Owner of site execution |
| `assigned_coordinator` | Link | Internal owner. Receives all notifications. |
| `actual_start` | Datetime | Stamped on In Progress transition |
| `actual_end` | Datetime | Required for completion |
| `work_done_notes` | Long Text | Required for completion. Summary of work performed. |
| `deviation_notes` | Long Text | Scope differences vs plan |
| `completion_confirmed_by` | Link (User) | Required for completion |
| `completion_confirmed_at` | Datetime | Required for completion |
| `dismantling_date` | Date | Triggers reminder. Must be ≥ actual_end. |
| `cancellation_reason` | Text | Required on Cancelled. Min 10 chars. |
| `internal_notes` | Long Text | Operational instructions |

---

### 3.2 Crew Assignment — Child Table: `jwo_crew`

Replaces flat `fabrication_lead` / `installer_supervisor` / `driver_lead` fields for actual deployment tracking. At least one row required before Fabrication Ready transition.

| Field | Type | Notes |
|---|---|---|
| `crew_member` | Link (User) | Must have Fabrication or Installer role |
| `role_in_job` | Enum | Supervisor / Driver / Crew / Trainee |
| `team` | Enum | Commercial / Fabrication / Installer |
| `estimated_hours` | Float | Planned hours |
| `actual_hours` | Float | Filled on completion |
| `check_in_time` | Datetime | Optional. Field-recorded on-site. |
| `check_out_time` | Datetime | Optional. Field-recorded on-site. |

---

### 3.3 Assets Deployed — Child Table: `jwo_asset`

Tracks physical assets (scaffold units, lorries, hoarding sets) across jobs.

| Field | Type | Notes |
|---|---|---|
| `asset` | Link | ERPNext Asset record |
| `asset_type` | Auto | Scaffold / Lorry / Hoarding |
| `warehouse` | Link | Required per row |
| `planned_qty` | Float | Units planned for deployment |
| `actual_qty_used` | Float | Units actually deployed. Filled on completion. |
| `deployment_start` | Datetime | When asset leaves yard |
| `expected_return` | Datetime | Planned return to yard |
| `return_confirmed` | Checkbox | Marked when asset returned |
| `notes` | Text | Damage / extension / special handling |

---

### 3.4 Materials Used — Child Table: `jwo_material`

Tracks consumables and stock items (PVC panels, stickers, fastenings) used on-site.

| Field | Type | Notes |
|---|---|---|
| `item_code` | Link | Stock item |
| `description` | Text | Auto-populated from item master |
| `warehouse` | Link | Required per row |
| `uom` | Link | |
| `planned_qty` | Float | Drives reservation on Commercial Confirmed |
| `actual_qty_used` | Float | Drives stock deduction on Completed |
| `variance_qty` | Float | Computed: `actual_qty_used − planned_qty` |

---

### 3.5 Attachments

Native document attachments only. No checklist table.

Typical attachments:
- Mall access permit
- Insurance document
- Site drawing / measurement sketch
- Payment slip / finance proof
- Site photos (during and after execution)
- Signed completion proof / client sign-off

---

## 4. Role Permission Matrix

Only the authorised role may trigger each transition.

| Transition | Who Can Trigger |
|---|---|
| Draft → Commercial Confirmed | Commercial Lead |
| Commercial Confirmed → Fabrication Ready | Fabrication Lead |
| Fabrication Ready → In Progress | Installer Supervisor |
| In Progress → Completed | Installer Supervisor or Coordinator |
| Any → Cancelled | Coordinator or Manager |
| Completed → Reopen (exception) | Manager only |

---

## 5. Asset and Material Lifecycle

### On Commercial Confirmed
- `jwo_material`: RESERVE `planned_qty` per row. Available qty decreases.
- `jwo_asset`: Asset status set to `Reserved`. Cannot be assigned to another JWO.

### On Completed
- `jwo_material`: DEDUCT `actual_qty_used`. Release surplus reservation.
- `jwo_asset`: Deduct `actual_qty_used`. Surplus reservation released.
- If `actual_qty_used > planned_qty`, validate available stock before completion is permitted.

### On Cancelled (before completion)
- Reverse material reservations.
- Release asset reservations.
- No ledger entry created.

### On Cancelled (after completion)
- Create offsetting Stock Ledger Entries.
- Reversal entries reference original `jwo_id`.

### Delta Behaviour

| Scenario | Outcome |
|---|---|
| actual = planned | Clean close. No surplus. |
| actual < planned | Deduct actual. Release remainder. |
| actual > planned | Validate extra qty against available stock. Block if insufficient. |
| Unplanned item added on-site | No prior reservation. Validate at completion. System flags row as "unplanned". |
| Asset not returned by expected_return | Dashboard flag. Coordinator notified. |

---

## 6. Cancellation Logic

### Case A — Before Completion
- Remove material and asset reservations
- No Stock Ledger Entry created
- `cancellation_reason` required (enforced at controller level, not just UI)
- Status → Cancelled

### Case B — After Completion
- Reverse Stock Ledger Entries with offsetting entries
- Reservation already released — no action needed
- `cancellation_reason` required
- Status → Cancelled

Ledger entries are never deleted. Reversal entries always reference the original `jwo_id`.

---

## 7. Notification Integration

All JWO notifications follow the MAIA Notification Serving Protocol.

| Event | Priority | Recipient(s) | Notes |
|---|---|---|---|
| JWO moves to Fabrication Ready | Non-critical | Fabrication Lead, Coordinator | Confirm crew and materials |
| JWO moves to In Progress | Non-critical | Coordinator, Installer Supervisor | Job started |
| `scheduled_date` passes without Completed status | **Critical** | Coordinator | Overnight miss. Bypass conversation state. |
| JWO Completed | Non-critical | Coordinator, Finance team | Triggers billing awareness |
| JWO Cancelled post-Confirmed | Non-critical | Coordinator | Reservation reversal confirmation |
| Asset not returned by `expected_return` | Non-critical | Coordinator | Dashboard flag |
| `dismantling_date` approaching (T − X days) | Non-critical | Coordinator | Trigger dismantling WO creation |
| Crew scheduling conflict detected | Non-critical | Coordinator | Warning on Fabrication Ready transition |
| Reservation drift flagged (>14 days stalled) | Non-critical | Coordinator | Dashboard flag |

**Critical classification rationale:** A delayed overnight job at HG is not an operational hiccup. The mall cannot close. Tenants and management are stranded. Reputation and panel status are at immediate risk. The coordinator must know the instant `scheduled_date` passes without a Completed status, regardless of what else is happening.

---

## 8. Dismantling WO Linkage

Install jobs and dismantling jobs are logically linked but created separately.

- On Completed, `dismantling_date` field is available to fill
- `dismantling_date` must be ≥ `actual_end`
- At T − X days before `dismantling_date`, coordinator receives a non-critical reminder to create the dismantling JWO
- Dismantling JWO references the original install JWO via `parent_jwo_id`
- X is configurable per company in backend settings

---

## 9. Edge Case Handling

### Unplanned Materials Added On-Site
Items discovered on-site not in original plan may be added while In Progress.
- Allowed. User adds row to `jwo_material` with `planned_qty = 0`.
- No reservation created (unplanned).
- `actual_qty_used` validated against available stock before completion.
- System flags row as "unplanned" for post-job review.

### Multi-Lorry / Multi-Crew Job
Multiple rows in `jwo_crew` with different roles and teams. Each row tracked independently for hours and check-in/out. No document-level single-driver constraint.

### Partial Completion
Not supported in v1. If a job runs out of time mid-execution:
- Coordinator records `work_done_notes` reflecting partial completion
- JWO remains In Progress
- A new JWO (referencing same invoice and `parent_jwo_id`) is created for remaining scope

### Asset Not Returned
If `expected_return` passes without `return_confirmed = true`:
- Coordinator dashboard flags the asset
- Coordinator decides: extend deployment or chase return
- Auto-release not supported in v1

### Permit Missing at Commercial Confirmed
- System blocks transition to Commercial Confirmed if no permit attachment is present
- Permit is a hard guard condition, not a warning

### Cancelled Job After Assets Deployed
- Assets physically deployed on-site when cancellation happens: coordinator manually marks `return_confirmed` when assets come back
- Reversal logic fires on cancellation. Asset reservation released only after `return_confirmed = true` for in-transit assets.

### Scheduling Conflict for Crew
- System warns (does not hard-block in v1) when a crew member is already assigned to another active JWO on the same date/time
- Coordinator sees the conflict and resolves manually

---

## 10. Validation Rules

### On Commercial Confirmed
Must have:
- `sales_invoice_id`
- `scheduled_date` and `scheduled_time_window`
- `mall` and `site_lot_no`
- `service_type` and `job_scope`
- At least one permit attachment

### On Fabrication Ready
Must have (in addition to Commercial Confirmed requirements):
- At least one row in `jwo_crew`
- `fabrication_lead` assigned
- All `jwo_material` rows have `warehouse` defined
- All `jwo_asset` rows have `warehouse` defined

### On In Progress
- `actual_start` stamped automatically on transition
- Asset reservation locked — no additions without coordinator action

### On Completed
Must have:
- `actual_start` and `actual_end`
- `work_done_notes` (non-empty)
- `completion_confirmed_by` and `completion_confirmed_at`
- `actual_qty_used` filled for every `jwo_material` row
- `actual_qty_used` filled for every `jwo_asset` row
- At least one completion photo attachment
- No `extra_qty` rows where available stock is insufficient

### On Cancelled
- `cancellation_reason` required (min 10 characters)
- Enforced at controller level — not just UI warning
- Reversal logic fires automatically

---

## 11. Scheduling and Visibility

### Dashboard Views
- Calendar view of active JWOs by `scheduled_date` / `scheduled_time_window`
- Gantt-style timeline for conflict visibility
- Filter by: mall, service type, team owner, status, sub-status
- Crew workload view: aggregates scheduled hours across all active JWOs per crew member
- Delayed JWO count as a first-class dashboard metric

Directly addresses: *"How many KLCC jobs today? I hate to check."* — this becomes a single filtered view, no checking required.

---

## 12. Out of Scope (v1)

| Feature | Rationale |
|---|---|
| Customer digital sign-off | Legal formality. Revisit if mall disputes arise. |
| Partial completion as a status | Complexity without v1 value. Use back-to-back JWOs. |
| Auto-creation of dismantling JWO | Coordinator retains control. Reminder is sufficient. |
| Auto-scheduling / conflict hard-block | Requires optimisation logic. v1 warns only. |
| Technician mobile app | check_in/check_out fields pre-wired. UI deferred. |
| Billing automation from JWO | Finance team retains control. JWO notifies only. |
| Asset damage costing | Downstream of asset lifecycle module. |
| Reservation auto-release | Drift flagged; coordinator decides. v2 candidate. |
| WhatsApp-based completion reporting | Covered by structured completion fields + report PDF. |

---

## 13. Implementation Notes for Dev

Enforceable constraints — not guidelines.

1. **`jwo_crew` is a child table, not flat Link fields.** The original design had `fabrication_lead`, `installer_supervisor`, `driver_lead` as single links. Crew assignment requires a child table with role, team, hours, and optional field timestamps.

2. **`actual_start` and `actual_end` are explicit Datetime fields on the JWO header.** Referenced in validation rules. Not derived. Must exist in data structure.

3. **`work_done_notes` is a Text field on the JWO header.** Required for completion. Not a child table, not an attachment.

4. **`cancellation_reason` is enforced at controller level.** A cancellation without a reason must be rejected by the server, not just warned in the form.

5. **Completion is a transaction, not a field save.** Transition to Completed must: (a) validate all required fields, (b) calculate delta quantities for materials and assets, (c) create Stock Ledger Entries, (d) release reservations, (e) fire notifications — in a single atomic operation. If any step fails, the whole transition rolls back.

6. **Sub-status is computed at read time.** Not stored as a field. Derived from `scheduled_date`, `scheduled_time_window`, and current datetime. Do not create a background job to update a sub_status field.

7. **Role permission per transition is enforced at the workflow controller level.** Commercial Lead cannot trigger Fabrication Ready transition. Installer Supervisor cannot trigger Commercial Confirmed. Role mismatch = transition blocked server-side.

8. **Permit attachment is a hard guard, not a UI nudge.** The controller must check for at least one permit attachment before allowing the Draft → Commercial Confirmed transition.

---

## 14. Data Model Summary

```
JWO Header
├── jwo_crew[]          ← who does the work (by team and role)
├── jwo_asset[]         ← physical assets deployed (scaffold, lorry, hoarding)
└── jwo_material[]      ← consumables and stock used on-site

Asset/material behaviour:
  Commercial Confirmed → Reservation (planned_qty)
  Completed            → Ledger Entry (actual_qty_used) + Reservation release
  Cancelled            → Reversal (reservation or ledger, depending on prior state)

Operational truth:
  Completed JWO = job happened
  Stock Ledger Entry = stock consumed
  Neither can be silently undone

Links:
  JWO → Sales Invoice (required)
  JWO → parent_jwo_id (optional, for dismantling linkage)
```

---

## 15. Open Items to Confirm with Black

| Item | Why It Matters | Needed Decision |
|---|---|---|
| Exact stage names | Avoid over/under-complicated transitions for their team culture | Confirm: "Fabrication Ready" or different label? |
| Role ownership per transition | Permission design depends on exact org roles | Who is "Fabrication Lead" — is it always a named person or a role group? |
| Required completion evidence | Report quality and dispute protection | Mandatory vs optional: client sign-off photo, supervisor photo, lorry photo? |
| Asset granularity for scaffold | Determines tracking detail and data entry effort | Track per scaffold unit vs per batch deployment? |
| Permit as hard gate | Blocks job if permit not uploaded | Is there any job type where permit is not required? |
| Reminder thresholds | Useful alerts vs notification noise | How many days before dismantling_date to trigger reminder? |
| Crew child table acceptance | More data entry than current flat fields | Is crew-level hour tracking worth the entry effort? |
| Exception: job reopened | Real operations need hold/reopen logic | Who can reopen a Completed JWO and under what condition? |

---

## See Also

- [[HG Group - Quotation Module Proposal]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[HG Group - Completion Report Module Proposal (Open Questions)]]
- [[Customer Narrative - HG Group]]
- [[HG Group - Customer Profile]]

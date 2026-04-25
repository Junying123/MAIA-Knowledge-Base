---
owner: Gareth
status: draft
last_reviewed: 2026-04-25
lark_url:
---

# HG Group — Job Work Order Module Proposal

## Overview

This document proposes the Job Work Order module for HG Services (M) Sdn Bhd, based on Black's workflow pain points from the 23 April 2026 requirement gathering session. The design goal is simple: **every confirmed job must move through Commercial → Fabrication → Installer in a visible, structured, and auditable flow without relying on memory or WhatsApp relay.**

> *"It's kind of like a workstream for each client... each job has like five things to do... but it's human error."*
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

### Core pain points Black called out

1. **Relay dependence**: job brief handoff depends on people remembering to pass messages.
2. **No immediate visibility**: "need to check and come back" for basic status questions.
3. **Priority collisions**: multiple urgent jobs can cause one to be forgotten.
4. **Fragmented execution record**: assignment, deployment, and proof of completion are scattered.
5. **High consequence of miss**: one missed overnight job creates serious mall and tenant impact.

---

## Proposed Job Work Order Flow (After MAIA)

```
Sales Order confirmed + payment validated
     ↓
Create Job Work Order (auto from Sales Order)
     ↓
Commercial stage: scope + schedule + attachments confirmed
     ↓
Workflow transition to Fabrication
     ↓
Fabrication stage: materials/parts readiness confirmed
     ↓
Workflow transition to Installer
     ↓
Installer stage: lorry + crew + asset deployment + on-site execution
     ↓
Completion evidence uploaded (photos/docs)
     ↓
Work Order completed + completion report generated
```

This removes "message relay as system". The workflow state becomes the system of truth.

---

## Proposed Job Work Order Form Design

### Section 1 — Job Header

| Field | Type | Behaviour |
|---|---|---|
| Work Order No. | Auto | `HG-WO-2026-NNNN` |
| Sales Order | Link | Source record; auto-pulls customer and scope |
| Customer | Link | Auto-filled from Sales Order |
| Contact Person | Link | Auto-filled from customer |
| Mall | Link | Job location context |
| Site / Lot No. | Text | E.g. `B1-23, Pavilion KL` |
| Service Type | Select | Hoarding / Scaffold / Reinstatement / Lorry / Printing / Multi-service |
| Job Scope | Long Text | Scope summary from SO + coordinator notes |
| Scheduled Date | Date | Planned execution date |
| Scheduled Time Window | Text | E.g. `11:00 PM - 4:00 AM` |
| Priority | Select | Normal / Urgent / Critical |
| Created By | Link | Commercial coordinator |

---

### Section 2 — Team Assignment

| Field | Type | Behaviour |
|---|---|---|
| Commercial Lead | Link | Owner of client and scope communication |
| Fabrication Lead | Link | Owner of prep readiness |
| Installer Supervisor | Link | Owner of site execution |
| Driver Lead | Link | Optional, where applicable |
| Planned Crew Size | Int | For workload planning |
| Internal Notes | Long Text | Operational instructions |

---

### Section 3 — Attachments (No Checklist Table)

Per your direction, this uses **native document attachments only**.

Typical attachments:
- Permit copy
- Insurance document
- Site drawing / sketch
- Payment slip / finance proof
- Site photos (during and after execution)
- Signed completion proof

---

### Section 4 — Stage Workflow (Confirmed Approach)

This section is powered by **Frappe Workflow** with role-restricted transitions:

```
Draft
  ↓ (Commercial)
Commercial Confirmed
  ↓ (Fabrication)
Fabrication Ready
  ↓ (Installer)
On Site / In Progress
  ↓ (Installer)
Completed
```

Rules:
- Only authorized role can move its stage.
- Each transition triggers notification to next stage owner.
- No auto-progression; users must explicitly transition.

---

### Section 5 — Assets Deployed (Scaffold / Lorry / Hoarding Set)

For HG, this is important because assets are physically deployed across jobs.

| Field | Type | Behaviour |
|---|---|---|
| Asset | Link | ERPNext Asset record (e.g. scaffold unit, lorry) |
| Asset Type | Auto | Scaffold / Lorry / Hoarding |
| Deployment Start | Datetime | When asset leaves yard |
| Expected Return | Datetime | Planned return |
| Return Confirmed | Checkbox | Marked when asset returned |
| Notes | Text | Damage / extension / special handling |

This leverages native ERPNext Asset + Asset Movement behavior with WO linkage.

---

### Section 6 — Execution and Completion

| Field | Type | Behaviour |
|---|---|---|
| Actual Start | Datetime | Captured by installer/supervisor |
| Actual End | Datetime | Captured on completion |
| Actual Work Done | Long Text | What was executed on-site |
| Deviation / Variation | Long Text | Scope differences vs plan |
| Completion Photos | Attachments | Site proof |
| Client Sign-off | Attachment | Signed proof if available |
| Completion Report PDF | Generated Output | Standard HG report output |

---

## Work Order Actions

| Action | When | What Happens |
|---|---|---|
| **Create WO from SO** | SO is ready + payment validated | New WO created with core job details |
| **Commercial Confirm** | Scope + scheduling complete | Moves state to Commercial Confirmed |
| **Mark Fabrication Ready** | Materials prep complete | Moves state to Fabrication Ready |
| **Start On Site** | Crew mobilized | Moves state to In Progress |
| **Complete Job** | Work and evidence uploaded | Moves state to Completed |
| **Generate Completion Report** | Completed state | Creates shareable report PDF |
| **Reopen / Hold** | Exception case | Controlled rollback by authorized role |

---

## Scheduling and Visibility

### Calendar and Gantt

Work Orders should support:
- Calendar view of active jobs by scheduled date/time
- Gantt-style timeline for conflict visibility
- Filter by mall, service type, team owner, and status

This directly addresses Black's "need to check and come back" issue.

---

## Reminder Triggers (Proposed)

### 1) Asset return reminder
- Trigger when expected return time is approaching/past due
- For scaffold and lorry deployment tracking

### 2) Follow-up reminder for linked next action
- E.g. dismantling follow-up after installation jobs

### 3) Payment/finance gating reminder
- Optional alert if WO is attempted without required payment validation rule

---

## What Is Reused vs What Is HG-Specific

### Reused foundation (same family as Thermac service WO)
- Work order as service-job system-of-record
- Stage status control
- Attachment and audit trail pattern
- Calendar/Gantt scheduling visibility

### HG-specific customization
- 3-team stage model: Commercial → Fabrication → Installer
- Asset deployment emphasis (scaffold/lorry/hoarding)
- HG completion-report output format
- Mall-driven operational context

---

## Open Items to Confirm with Black

| Item | Why it matters | Needed decision |
|---|---|---|
| Final workflow states | Avoid over/under-complicated transitions | Confirm exact status names |
| Role ownership per transition | Permission design depends on this | Confirm who can move each stage |
| Required completion evidence | Report quality and dispute protection | Confirm mandatory vs optional files |
| Asset granularity | Determines tracking detail and data entry effort | Track per unit vs per batch |
| Reminder thresholds | Useful alerts vs notification noise | Confirm timing rules |
| Exception handling | Real operations need hold/reopen logic | Confirm when WO can be reopened |

---

## See Also

- [[HG Group - Quotation Module Proposal]]
- [[HG Group - CRM & Enquiry Intake Proposal]]
- [[Customer Narrative - HG Group]]
- [[HG Group - Customer Profile]]

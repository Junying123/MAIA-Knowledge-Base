# MAIA KB — Plan

**Created:** 2026-02-17
**Lead:** Gareth
**Status:** Pending Approval

---

## Context

MAIA is an Order Management System (OMS) for B2B companies. 4 junior PMs each handle assigned clients E2E — from requirement gathering through delivery and onboarding. The goal of this KB is to act as the single source of truth so PMs stop working in silos and stop recreating the same work from scratch.

**Pain points being solved:**
- Client requirement docs recreated per PM
- Product feature explanations not shared
- Bug/issue context not documented centrally
- Onboarding and handover notes lost between PMs

---

## Proposed Structure

```
📁 00 - Home
  - README.md          → How to use the KB, contribution rules
  - Quick Reference.md → Cheat sheet of most-used links
  - Changelog.md       → Track what's been updated and by who

📁 01 - MAIA Product
  📁 Overview
    - Product Overview.md         → What MAIA is, who it's for
    - Workspaces Overview.md      → Sales / Finance / Logistics explained
    - Document Status Flows.md    → All statuses (Quotation, SO, Invoice etc.)
    - Known Limitations.md        → Product gaps + workarounds
  📁 Sales Workspace
    📁 Selling     → Quotations, Sales Orders, Customers, Items
    📁 Billing     → Invoices, Credit Notes, Debit Notes
    📁 Payments    → Receipts, Vouchers
    📁 Fulfillment → Delivery Notes, Return Notes
    📁 Customer Service → Customer Issues
  📁 Core Workflows
    - Quote-to-Cash Flow.md     → Full E2E flow (the main one)
    - Quotation Workflows.md
    - Sales Order Workflows.md
    - Invoice Workflows.md
    - Credit Note Workflows.md
    - Receipt & Payment Workflows.md

📁 02 - PM Playbook
  📁 Processes
    - Requirement Gathering Process.md
    - User Story Writing Guide.md
    - QA & Scenario Testing Guide.md
    - Client Onboarding Checklist.md
    - Feedback & Iteration Process.md
    - Dev Handover Guide.md
  📁 Templates
    - [Template] Requirement Gathering.md
    - [Template] User Story.md
    - [Template] QA Scenario.md
    - [Template] Client Onboarding.md
    - [Template] Meeting Notes.md
    - [Template] Feature Gap Analysis.md

📁 03 - Clients
  📁 [Client Name]
    - Client Overview.md         → Who they are, their MAIA setup
    - Requirements Log.md
    - Feature Requests & Gaps.md
    - Onboarding Status.md
    - Meeting Notes/

📁 04 - QA & Known Issues
  - Test Scenarios Index.md
  - Known Bugs & Limitations.md
  - Workarounds Library.md
  - Feature Gap Tracker.md

📁 05 - Releases & Updates
  - Release Notes.md
  - Upcoming Features.md
  - Feature Changelog.md
```

---

## Key Design Decisions

- **Numbers prefix** each folder so Obsidian keeps them ordered
- **01 - Product** = what MAIA does (feature reference, status flows, limitations)
- **02 - Playbook** = how PMs work (processes + reusable templates to kill repetitive tasks)
- **03 - Clients** = per-account context, isolated per client so PMs don't cross-contaminate
- **04 - QA** = centralised bug/limitation/workaround knowledge so no one rediscovers the same issue twice
- **05 - Releases** = product change log so PMs always know what's current

---

## Phase 1 Execution Plan

1. Create the full folder + file scaffold in Obsidian
2. Seed core workflow files from existing `maiav2-test` docs
3. Seed Known Limitations from user story analysis (3 critical blockers already documented)
4. Leave client and template files as stubs for the team to fill in

---

## Team

| Role | Person |
|------|--------|
| KB Lead | Gareth |
| Contributors | All 4 PMs |
| Scope (Phase 1) | Sales Workspace only |
| Language | English |

---

## Scope Notes

- **Phase 1:** Sales workspace (quote-to-cash core workflow)
- **Phase 2:** Finance workspace
- **Phase 3:** Logistics workspace
- Existing docs in `maiav2-test` to be migrated in as seed content

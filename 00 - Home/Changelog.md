---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# MAIA KB — Changelog

Track all updates to the knowledge base.

## 2026-02-21 — Mermaid Diagrams Import + Zoom Guide (Gareth)

### Added — Workflow Diagrams from maiav2-test
- ✅ **Imported 5 comprehensive Mermaid diagrams** from `/Users/garethng/maiav2-test/docs`
  - Quote-to-Cash Flow: 4-module unified workflow (~152 lines)
  - Sales Order Workflows: Detailed 6-action flow (~110 lines)
  - Quotation Workflows: Quotation → SO conversion (~58 lines)
  - Invoice Workflows: 7-action invoice flow (~109 lines)
  - Credit Note Workflows: 3-action credit note flow (~71 lines)

- ✅ **Created diagram guides:**
  - `00 - Home/How to Create Diagrams in Obsidian.md` — Mermaid, Excalidraw, Canvas
  - `00 - Home/How to Zoom Mermaid Diagrams.md` — 6 solutions for zoom issue

**Updated workflow files:**
- `01 - MAIA Product/Core Workflows/Quote-to-Cash Flow.md`
- `01 - MAIA Product/Core Workflows/Sales Order Workflows.md`
- `01 - MAIA Product/Core Workflows/Quotation Workflows.md`
- `01 - MAIA Product/Core Workflows/Invoice Workflows.md`
- `01 - MAIA Product/Core Workflows/Credit Note Workflows.md`

**Result:** All core workflows now have comprehensive, color-coded visual diagrams showing all status transitions and actions

---

## 2026-02-21 — KB Cleanup & Automation Consolidation (Gareth)

### Deleted — Unnecessary Files
- 🗑️ **Deleted:** `KB-v1-Summary.md` (root) — Build summary artifact, content in Changelog
- 🗑️ **Deleted:** `00 - Home/Automation Roadmap.md` — Archived, content in master guide
- 🗑️ **Deleted:** `00 - Home/PM Automation - Product Focus.md` — Archived, content in master guide
- 🗑️ **Deleted:** `00 - Home/Automation Implementation Guide.md` — Archived, content in master guide

### Added — Audit Documentation
- ✅ **Created:** `00 - Home/KB Audit Report.md` — Comprehensive vault audit
  - Identified 5 files for cleanup (4 deleted, 1 kept: plan-MAIA-KB.md)
  - No duplicates or structural issues found
  - KB Health Score: Very Good ✅

**Result:** Home folder reduced from 10 files to 7 files (cleaner, more focused)

---

## 2026-02-21 — Automation Consolidation (Gareth)

### Consolidated — Automation Files
- ✅ **Created:** `00 - Home/Automation Master Guide.md` — **Single source for all automations**
  - Merged: Automation Roadmap.md (5 general subagents + 5 skills)
  - Merged: PM Automation - Product Focus.md (5 PM subagents + 5 skills)
  - Merged: Automation Implementation Guide.md (implementation recipes)
  - Result: 9 subagents + 7 skills (removed duplicates)
  - Complete with: Decision framework, implementation recipes, priority/ROI, quick start
  - Total ROI: 34 hrs/month saved per PM, 136 hrs/month for team

- ✅ **Archived:** 3 original automation files (now redirect to master guide)
  - `Automation Roadmap.md` → archived, points to master
  - `PM Automation - Product Focus.md` → archived, points to master
  - `Automation Implementation Guide.md` → archived, points to master

- ✅ **Updated:** `Automation with Obsidian Skills.md` — Clarified Obsidian skills NOT available
  - Added warnings and hybrid approach
  - Kept as reference for future if Obsidian skills become available

- ✅ **Updated:** `Quick Reference.md` — Now points to Automation Master Guide

**Why:** Eliminated repetition across 3 files, single source of truth for automations

---

## 2026-02-20 — v1.0 Upgrade + Automation Roadmap (Gareth)

### Added — Automation Planning
- ✅ `00 - Home/Automation Roadmap.md` — General KB automation
  - 5 recommended subagents (Triage, Client Summary, Gap Analysis, KB Validator, Search)
  - 5 recommended skills (Template Filler, Test Generator, Release Notes, Lark Publisher, Req→Story)
  - Decision framework (when to use subagent vs skill)
  - Implementation priorities with ROI calculation (18.3 hrs/month savings)
  - Phase 1-3 rollout plan

- ✅ `00 - Home/PM Automation - Product Focus.md` — Product management automation
  - 5 PM-focused subagents (Feature Prioritizer, Roadmap Generator, Client Impact, Requirement Patterns, Stakeholder Updates)
  - 5 PM-focused skills (Epic Breakdown, RICE Calculator, Feature Comparison, Discovery→PRD, Dependency Mapper)
  - Strategic decision-making automation
  - ROI calculation (22 hrs/month savings per PM)

- ✅ `00 - Home/Automation Implementation Guide.md` — **Implementation using existing tools**
  - Maps each automation to existing Claude Code tools (Grep, Read, Glob, Task, /xlsx, /prd)
  - Shows how to compose tools instead of building from scratch
  - Complete implementation recipes for all 16 automations
  - Step-by-step guides with code examples
  - Key insight: 90% of automations use just 5 core tools

---

## 2026-02-20 — v1.0 Upgrade (Gareth)

### Created New Folders
- ✅ `06 - Glossary & Taxonomy/`
- ✅ `07 - Decisions/`
- ✅ `08 - Configuration & Integrations/`
- ✅ `09 - Intake & Triage/`

### Created Files — Home (00)
- ✅ `00 - Home/README.md` — KB governance and contribution guidelines
- ✅ `00 - Home/Quick Reference.md` — Cheat sheet of most-used links
- ✅ `00 - Home/Changelog.md` — This file
- ✅ `00 - Home/Publish Queue.md` — Content ready for Lark publication

### Created Files — Product (01)
- ✅ `01 - MAIA Product/Overview/Product Overview.md`
- ✅ `01 - MAIA Product/Overview/Workspaces Overview.md`
- ✅ `01 - MAIA Product/Overview/Document Status Flows.md`
- ✅ `01 - MAIA Product/Overview/Known Limitations.md`
- ✅ `01 - MAIA Product/Core Workflows/Quote-to-Cash Flow.md`
- ✅ `01 - MAIA Product/Core Workflows/Quotation Workflows.md`
- ✅ `01 - MAIA Product/Core Workflows/Sales Order Workflows.md`
- ✅ `01 - MAIA Product/Core Workflows/Invoice Workflows.md`
- ✅ `01 - MAIA Product/Core Workflows/Credit Note Workflows.md`
- ✅ `01 - MAIA Product/Core Workflows/Receipt & Payment Workflows.md`
- ✅ `01 - MAIA Product/Sales Workspace/Selling/Quotations.md`
- ✅ `01 - MAIA Product/Sales Workspace/Selling/Sales Orders.md`
- ✅ `01 - MAIA Product/Sales Workspace/Selling/Customers.md`
- ✅ `01 - MAIA Product/Sales Workspace/Selling/Items.md`
- ✅ `01 - MAIA Product/Sales Workspace/Billing/Invoices.md`
- ✅ `01 - MAIA Product/Sales Workspace/Billing/Credit Notes.md`
- ✅ `01 - MAIA Product/Sales Workspace/Billing/Debit Notes.md`
- ✅ `01 - MAIA Product/Sales Workspace/Payments/Receipts.md`
- ✅ `01 - MAIA Product/Sales Workspace/Payments/Vouchers.md`
- ✅ `01 - MAIA Product/Sales Workspace/Fulfillment/Delivery Notes.md`
- ✅ `01 - MAIA Product/Sales Workspace/Fulfillment/Return Notes.md`
- ✅ `01 - MAIA Product/Sales Workspace/Customer Service/Customer Issues.md`

### Created Files — PM Playbook (02)
- ✅ `02 - PM Playbook/Processes/Requirement Gathering Process.md`
- ✅ `02 - PM Playbook/Processes/User Story Writing Guide.md`
- ✅ `02 - PM Playbook/Processes/QA & Scenario Testing Guide.md`
- ✅ `02 - PM Playbook/Processes/Client Onboarding Checklist.md`
- ✅ `02 - PM Playbook/Processes/Feedback & Iteration Process.md`
- ✅ `02 - PM Playbook/Processes/Dev Handover Guide.md`
- ✅ `02 - PM Playbook/Processes/Publish to Lark SOP.md`
- ✅ `02 - PM Playbook/Templates/[Template] Requirement Gathering.md`
- ✅ `02 - PM Playbook/Templates/[Template] User Story.md`
- ✅ `02 - PM Playbook/Templates/[Template] QA Scenario.md`
- ✅ `02 - PM Playbook/Templates/[Template] Client Onboarding.md`
- ✅ `02 - PM Playbook/Templates/[Template] Meeting Notes.md`
- ✅ `02 - PM Playbook/Templates/[Template] Feature Gap Analysis.md`
- ✅ `02 - PM Playbook/Templates/[Template] Triage Decision Record.md`
- ✅ `02 - PM Playbook/Templates/[Template] Client Config Overlay.md`

### Created Files — Clients (03)
- ✅ `03 - Clients/README.md` — Instructions for client folders

### Created Files — QA (04)
- ✅ `04 - QA & Known Issues/Test Scenarios Index.md`
- ✅ `04 - QA & Known Issues/Known Bugs & Limitations.md`
- ✅ `04 - QA & Known Issues/Workarounds Library.md`
- ✅ `04 - QA & Known Issues/Feature Gap Tracker.md`

### Created Files — Releases (05)
- ✅ `05 - Releases & Updates/Release Notes.md`
- ✅ `05 - Releases & Updates/Upcoming Features.md`
- ✅ `05 - Releases & Updates/Feature Changelog.md`

### Created Files — Glossary (06)
- ✅ `06 - Glossary & Taxonomy/Glossary.md`
- ✅ `06 - Glossary & Taxonomy/Tag Dictionary.md`

### Created Files — Decisions (07)
- ✅ `07 - Decisions/Decision Log.md`
- ✅ `07 - Decisions/ADR Template.md`

### Created Files — Configuration (08)
- ✅ `08 - Configuration & Integrations/Configuration Index.md`
- ✅ `08 - Configuration & Integrations/Integrations Index.md`
- ✅ `08 - Configuration & Integrations/Permissions & Roles.md`
- ✅ `08 - Configuration & Integrations/Client Configuration Overlay Template.md`

### Created Files — Intake (09)
- ✅ `09 - Intake & Triage/Request Intake Inbox.md`
- ✅ `09 - Intake & Triage/Triage SOP (Product vs Config vs Custom).md`
- ✅ `09 - Intake & Triage/Triage Decision Record Template.md`

### Created Root Files
- ✅ `CLAUDE.md` — AI-assistant context and KB conventions

---

## How to Update This Changelog

When you make changes to the KB:
1. Add a new entry with date and your name
2. Use checkboxes (✅) for completed items
3. Group by folder/category
4. Keep it concise — link to detailed docs if needed

---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Agent Swarm Architecture – MAIA PM Discovery Pipeline

## Overview

This architecture uses Hermes as a dual-role head agent:
- **Orchestrator mode** for routing, sequencing, and quality gates
- **Executor mode** for short bounded tasks where delegation overhead is unnecessary

The swarm is restructured around five active coding agents only:
- `claude-code`
- `codex`
- `opencode`
- `pi`
- `cursor`

**Core execution rule:** one step runs one primary executor agent. Cross-agent handoff happens at explicit stage boundaries.

**Core planning rule:** use Claude Code to plan and review, not to absorb all heavy execution. This keeps Claude quota for high-leverage reasoning.

```
                   ┌────────────────────────────────────┐
                   │ HERMES (Head Agent)               │
                   │ Orchestrator + Executor            │
                   └───────────────┬────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         │                         │                         │
 ┌───────▼────────┐        ┌──────▼────────┐        ┌──────▼────────┐
 │ Claude Code    │        │ Codex         │        │ OpenCode      │
 │ Planner/Reviewer│       │ Main Executor │        │ Validator      │
 └───────┬────────┘        └──────┬────────┘        └──────┬────────┘
         │                         │                         │
         └──────────────┬──────────┴──────────┬──────────────┘
                        │                     │
                 ┌──────▼──────┐       ┌──────▼──────┐
                 │ Pi           │       │ Cursor      │
                 │ Custom Flow  │       │ Daily Cockpit│
                 └──────────────┘       └─────────────┘
```

---

## Role Model (v2)

| Field | Value |
|---|---|
| Head Agent | Hermes |
| Core Responsibilities | Intake, routing, sequencing, milestone checks, final closure, mode switching |
| Input | PM trigger + client context + current stage |
| Output | Stage artifacts + decision log + handoff state |

### Hermes Mode Switch Rules

| Mode | When to Use | Expected Behavior |
|---|---|---|
| Orchestrator | Multi-step, parallel, high-risk, cross-client, or cross-agent tasks | Build plan, dispatch executors, enforce review gates, manage handoffs |
| Executor | Single-context tasks, under 30 min, low risk | Execute directly, keep audit trail, escalate only if blocked |

### Agent Responsibilities

| Agent | Primary Role | Best Use |
|---|---|---|
| Claude Code | Planner + critical reviewer | Planning, ambiguity reduction, architecture review, final QA gate |
| Codex | Main executor | Heavy implementation, repetitive execution, structured breakdown output |
| OpenCode | Validator + batch operator | Consistency checks, document sweeps, rule-based QA across files |
| Pi | Custom workflow engine | Extension-driven flows, reusable internal commands, workflow glue |
| Cursor | Daily cockpit + quick executor | Fast local edits, inline review loop, manual approval and polish |

---

## Stage Architecture (Discovery Pipeline)

| Stage | Stage Lead | Input | Output | Default Execution Split |
|---|---|---|---|---|
| Stage 1: GTM Proposal | Hermes | GTM handoff + client context | GTM proposal draft | Claude plan -> Codex draft -> OpenCode validate -> Cursor polish |
| Stage 2: Requirement Gathering | Hermes | RG transcript + profile | Filled RG output + classification | Claude plan -> Codex synthesize -> OpenCode consistency -> Cursor finalize |
| Stage 3: Post-RG Synthesis | Hermes | RG output + confirmed modules | Customer narrative + module proposals | Claude plan -> Codex per-module generation -> OpenCode cross-file validation |
| Stage 4: SOW Writing | Hermes | Narrative + module proposals | SOW draft for PM review | Claude plan -> Codex draft -> OpenCode scope checks -> Cursor final review |

---

## Stage Step Templates (Reusable)

### Stage Template A — Standard Multi-Step

| Step | Agent | Runtime | Purpose |
|---|---|---|---|
| Step 0 | Claude Code | 1x | Plan: scope, steps, owner mapping, done criteria |
| Step 1 | Codex | 1x+ | Execute heavy drafting/synthesis/structured output |
| Step 2 | OpenCode | 1x | Validate completeness, consistency, rule compliance |
| Step 3 | Cursor | 1x (optional) | Fast local edits and PM-ready polish |
| Step 4 | Claude Code | 1x | Final review gate for critical outputs |

### Stage Template B — Hermes Direct Execute

| Step | Agent | Runtime | Purpose |
|---|---|---|---|
| Step 0 | Hermes | 1x | Execute directly for bounded low-risk task |
| Step 1 | OpenCode or Cursor | 1x (optional) | Quick validation or format cleanup |
| Step 2 | Claude Code | 1x (optional) | Review only if output is strategic or client-critical |

---

## Routing Matrix (Task -> Agent)

| Task Type | Primary | Secondary | Notes |
|---|---|---|---|
| Ambiguous planning, tradeoff decisions | Claude Code | Hermes | Always do first before large execution |
| Heavy drafting, repetitive generation | Codex | Hermes | Default execution engine |
| Cross-file consistency/quality sweep | OpenCode | Codex | Use for validation loops |
| Custom command/workflow automation | Pi | Hermes | Use Pi extensions/skills |
| Fast local edits and final polish | Cursor | Hermes | Keep this as PM cockpit workflow |
| Small bounded PM ops task | Hermes | Cursor | Executor mode path |

---

## Handoff Rules

| From | To | Trigger |
|---|---|---|
| PM | Hermes | Any new task/client-stage trigger |
| Hermes | Claude Code | Task requires planning/risk framing |
| Claude Code | Hermes | Plan returned with owners and done criteria |
| Hermes | Codex/OpenCode/Pi/Cursor | Dispatch execution by routing matrix |
| Executor Agent | Hermes | Step complete, blocked, or needs escalation |
| Hermes | Claude Code | Critical review gate before client-facing release |
| Hermes | PM | Final output + decision summary |

---

## Agent Wrapper Command Pattern

All agents invoked via:

```bash
~/.hermes/agent-wrappers/route.sh <agent-name> "<prompt>"
```

Valid agent names: `claude-code`, `codex`, `opencode`, `pi`, `cursor`, `hermes`

---

## Real-World Reference: HG Group

HG Group is the validated reference case for Stages 2–4. All stage output patterns above are derived from what was actually produced for this client.

| Stage | What was produced | Files in KB |
|---|---|---|
| Stage 2 – RG Prep | Customer Profile, RG Questionnaire (25Q), RG Meeting Opening Script | `HG Group/HG Group - Customer Profile.md`, `HG Group - RG Questionnaire.md`, `HG Group - RG Meeting Opening Script.md` |
| Stage 3 – Post-RG Synthesis | Customer Narrative + 5 Feature Module Proposals | `Customer Narrative - HG Group.md`, `HG Group - Quotation Module Proposal.md`, `HG Group - CRM & Enquiry Intake Proposal.md`, `HG Group - Job Work Order Module Proposal.md`, `HG Group - Invoice Module Proposal.md`, `HG Group - Completion Report Module Proposal.md` |
| Stage 4 – SOW | Not yet drafted — next step for HG | *(pending)* |

**Key pattern for Stage 3:** Number of Feature Module Proposals = number of modules confirmed in RG. HG had 5 confirmed modules → 5 proposal files. Each proposal follows identical structure: problem flow → proposed flow → form design → actions/status → open items.

---

## Gaps & To-Do

### Immediate
- [ ] Create Hermes head-agent workflow file (v2 dual-mode)
- [ ] Create Claude planning gate prompt template
- [ ] Create Codex execution prompt templates by stage
- [ ] Create OpenCode validation checklist template
- [ ] Create Cursor final-polish checklist
- [ ] Create Pi automation hooks for recurring PM workflows

### Stage-specific v2 templates
- [ ] Stage 1 template: GTM proposal flow (plan -> execute -> validate -> polish)
- [ ] Stage 2 template: RG synthesis flow
- [ ] Stage 3 template: module fan-out generation flow
- [ ] Stage 4 template: SOW draft + scope validation flow

## See Also

- [[02 - PM Playbook/Guides/Agent Creation/Agent Creation Guide]] – step-by-step guide to building a new agent workflow
- [[02 - PM Playbook/Guides/Multi-Agent Orchestration for PM]] – overall agent architecture
- [[02 - PM Playbook/Processes/Requirement Gathering Process]] – SOP this pipeline automates

---
*Maintained by Gareth*

---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Agent Swarm Architecture – MAIA PM Discovery Pipeline

## Overview

Three-tier hierarchy. Head agent owns the full pipeline. Stage leads own one stage each. Step agents execute single tasks within a stage.

```
                        ┌─────────────────────────────────┐
                        │  HEAD AGENT (Hermes Master)     │
                        │  Orchestrate full pipeline       │
                        │  Stages 1 → 5                   │
                        └──────────────┬──────────────────┘
                                       │
          ┌────────────────────────────┼────────────────────────────┐
          │                            │                            │
┌─────────▼──────────┐    ┌────────────▼────────────┐   ┌──────────▼──────────┐
│  SUBAGENT 1        │    │  SUBAGENT 2             │   │  SUBAGENT 3         │
│  Stage 1 Lead      │    │  Stage 2 Lead           │   │  Stage 3 Lead       │
│  GTM Proposal      │    │  Requirement Gathering  │   │  Fit Assessment     │
└─────────┬──────────┘    └────────────┬────────────┘   └──────────┬──────────┘
          │                            │                            │
    ┌─────┴──────┐             ┌───────┴────────┐            (to be designed)
    │            │             │                │
┌───▼───┐  ┌────▼───┐   ┌─────▼────┐   ┌──────▼─────┐
│Step 1 │  │Step 2  │   │Step 1    │   │Step 2      │
│Claude │  │Goose   │   │Claude    │   │Goose       │
│Code   │  │        │   │Code      │   │            │
└───────┘  └────────┘   └──────────┘   └────────────┘
```

> Stages 4 and 5 are placeholders — design when those stages are defined.

---

## Tier 1 – Head Agent

| Field | Value |
|---|---|
| Agent | Hermes Master Orchestrator |
| Role | Route input to the correct stage lead, track overall pipeline state, confirm handoffs between stages |
| Input | PM trigger + client context |
| Output | Completed pipeline artifact per stage |
| File | *(to be created)* `Stage Workflows/Head Agent - Full Pipeline - Orchestrate All Stages - Hermes Master.md` |

---

## Tier 2 – Stage Leads (Subagents)

| Subagent | Stage | Responsibility | File |
|---|---|---|---|
| Stage 1 Lead | GTM Proposal | Receive GTM handoff → produce proposal draft → client validation | `Stage Workflows/Stage1/Stage 1 - GTM Proposal - Orchestrate Proposal Creation - Orchestrator.md` |
| Stage 2 Lead | Requirement Gathering | Receive transcript → synthesise RG output → classify → client validation | `Stage Workflows/Stage2-Requirement Gathering/Stage 2 - Requirement Gathering - Orchestrate RG Synthesis and Validation - Orchestrator.md` |
| Stage 3 Lead | Fit Assessment | *(to be designed)* | *(to be created)* |
| Stage 4 Lead | SOW | *(to be designed)* | *(to be created)* |
| Stage 5 Lead | *(to be named)* | *(to be designed)* | *(to be created)* |

---

## Tier 3 – Step Agents (Sub-subagents)

### Stage 1 – GTM Proposal

| Step | Agent | Task | File |
|---|---|---|---|
| Step 1 | Claude Code | Synthesise GTM brief into proposal draft | `Stage Workflows/Stage1/Stage 1 - GTM Proposal - Synthesise GTM Brief into Proposal Draft - Claude Code.md` |
| Step 2 | Goose | Copy template, file-ops, link to client folder | *(to be created)* |
| Step 3 (opt) | Pi | Polish language of client-facing proposal | *(to be created)* |

### Stage 2 – Requirement Gathering

| Step | Agent | Task | File |
|---|---|---|---|
| Step 1 | Claude Code | Extract answers from transcript, fill RG template, classify | `Stage Workflows/Stage2-Requirement Gathering/Stage 2 - Requirement Gathering - Extract and Fill RG Template from Transcript - Claude Code.md` |
| Step 2 | Goose | Completeness + consistency check, add metadata footer | `Stage Workflows/Stage2-Requirement Gathering/Stage 2 - Requirement Gathering - Template Copy, Completeness and Consistency Check - Goose.md` |
| Step 3 (opt) | OpenCode | Deep consistency scan — AC testability, priority format | *(to be created)* |
| Step 4 (opt) | Pi | Polish Q&A log / client-facing text | *(to be created)* |
| Step 5 (opt) | Codex | Generate User Story if classification = Product Enhancement | *(to be created)* |

### Stage 3 – Fit Assessment

*(to be designed with tech lead / senior PM)*

### Stage 4 – SOW

*(to be designed)*

### Stage 5 – *(to be named)*

*(to be designed)*

---

## Handoff Rules

| From | To | Trigger |
|---|---|---|
| Head Agent | Stage Lead | PM triggers pipeline with client name + stage number |
| Stage Lead | Step Agent | Lead routes to first step on receive |
| Step Agent → Step Agent | Next step | Previous step returns output + no blocker |
| Stage Lead | Head Agent | All steps complete + PM approval |
| Head Agent | Next Stage Lead | Head confirms handoff, updates pipeline state |

---

## Agent Wrapper Command Pattern

All agents invoked via:

```bash
~/.hermes/agent-wrappers/route.sh <agent-name> "<prompt>"
```

Valid agent names: `claude-code`, `goose`, `codex`, `opencode`, `pi`

---

## Gaps & To-Do

- [ ] Create Head Agent MD file
- [ ] Create Stage 1 Step 2 – Goose file
- [ ] Create Stage 1 Step 3 – Pi file (optional)
- [ ] Create Stage 2 Step 3 – OpenCode file (optional)
- [ ] Create Stage 2 Step 4 – Pi file (optional)
- [ ] Create Stage 2 Step 5 – Codex file (optional)
- [ ] Design Stages 3, 4, 5 with senior PM
- [ ] Verify `[Template] GTM Proposal.md` exists in Templates
- [ ] Verify `04 - QA & Known Issues/Feature Gap Tracker` exists

## See Also

- [[02 - PM Playbook/Guides/Agent Creation/Agent Creation Guide]] – step-by-step guide to building a new agent workflow
- [[02 - PM Playbook/Guides/Multi-Agent Orchestration for PM]] – overall agent architecture
- [[02 - PM Playbook/Processes/Requirement Gathering Process]] – SOP this pipeline automates

---
*Maintained by Gareth*

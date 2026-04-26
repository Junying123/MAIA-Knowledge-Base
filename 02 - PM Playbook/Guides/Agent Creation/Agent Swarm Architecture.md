---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Agent Swarm Architecture – MAIA PM Discovery Pipeline

## Overview

Three-tier hierarchy. Head agent owns the full pipeline. Stage leads own one stage each. Step agents execute single tasks within a stage.

**Core rule: each sub-subagent (step agent) runs exactly one coding agent in one runtime.** One step = one agent = one invocation. If a task needs a different agent, it is a separate step.

```
                        ┌─────────────────────────────────┐
                        │  HEAD AGENT (Hermes Master)     │
                        │  Orchestrate full pipeline       │
                        │  Stages 1 → 4                   │
                        └──────────────┬──────────────────┘
                                       │
       ┌───────────────────────────────┼──────────────────────────────┐
       │                               │                              │
┌──────▼─────────┐       ┌─────────────▼──────────┐      ┌───────────▼──────────┐
│  SUBAGENT 1    │       │  SUBAGENT 2             │      │  SUBAGENT 3          │
│  Stage 1 Lead  │       │  Stage 2 Lead           │      │  Stage 3 Lead        │
│  GTM Proposal  │       │  Requirement Gathering  │      │  Post-RG Synthesis   │
└──────┬─────────┘       └─────────────┬──────────┘      └───────────┬──────────┘
       │                               │                              │
  ┌────┴─────┐                 ┌───────┴───────┐              ┌──────┴──────┐
  │          │                 │               │              │             │
┌─▼──┐  ┌───▼──┐          ┌───▼───┐      ┌────▼───┐      ┌───▼───┐   ┌────▼───┐
│ S1 │  │  S2  │          │  S1   │      │   S2   │      │  S1   │   │   S2   │
│CC  │  │Goose │          │  CC   │      │  Goose │      │  CC   │   │  Goose │
└────┘  └──────┘          └───────┘      └────────┘      └───────┘   └────────┘

                        ┌──────────────────┐
                        │   SUBAGENT 4     │
                        │   Stage 4 Lead   │
                        │   SOW Writing    │
                        └────────┬─────────┘
                                 │
                          ┌──────┴──────┐
                          │             │
                      ┌───▼───┐    ┌────▼───┐
                      │  S1   │    │   S2   │
                      │  CC   │    │  Goose │
                      └───────┘    └────────┘
```

> CC = Claude Code. Granular step agents per stage to be added as each stage is designed.

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

| Subagent     | Stage                 | Input                                     | Output                                            | File                                                                                                                                       |
| ------------ | --------------------- | ----------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Stage 1 Lead | GTM Proposal          | GTM handoff doc + client context          | GTM Proposal draft → client validation            | `Stage Workflows/Stage1/Stage 1 - GTM Proposal - Orchestrate Proposal Creation - Orchestrator.md`                                          |
| Stage 2 Lead | Requirement Gathering | RG session transcript + customer profile  | Filled RG template + classification block         | `Stage Workflows/Stage2-Requirement Gathering/Stage 2 - Requirement Gathering - Orchestrate RG Synthesis and Validation - Orchestrator.md` |
| Stage 3 Lead | Post-RG Synthesis     | Filled RG template + module list          | Customer Narrative + N × Feature Module Proposals | *(to be created)*                                                                                                                          |
| Stage 4 Lead | SOW Writing           | Customer Narrative + all module proposals | SOW draft ready for senior PM review              | *(to be created)*                                                                                                                          |

---

## Tier 3 – Step Agents (Sub-subagents)

### Stage 1 – GTM Proposal

| Step         | Agent       | Runtime | Task                                           | File                                                                                                        |
| ------------ | ----------- | ------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Step 1       | Claude Code | 1×      | Synthesise GTM brief into proposal draft       | `Stage Workflows/Stage1/Stage 1 - GTM Proposal - Synthesise GTM Brief into Proposal Draft - Claude Code.md` |
| Step 2       | Goose       | 1×      | Copy template, file-ops, link to client folder | *(to be created)*                                                                                           |
| Step 3 (opt) | Pi          | 1×      | Polish language of client-facing proposal      | *(to be created)*                                                                                           |

### Stage 2 – Requirement Gathering

| Step | Agent | Runtime | Task | File |
|---|---|---|---|---|
| Step 1 | Claude Code | 1× | Extract answers from transcript, fill RG template, classify | `Stage Workflows/Stage2-Requirement Gathering/Stage 2 - Requirement Gathering - Extract and Fill RG Template from Transcript - Claude Code.md` |
| Step 2 | Goose | 1× | Completeness + consistency check, add metadata footer | `Stage Workflows/Stage2-Requirement Gathering/Stage 2 - Requirement Gathering - Template Copy, Completeness and Consistency Check - Goose.md` |
| Step 3 (opt) | OpenCode | 1× | Deep consistency scan — AC testability, priority format | *(to be created)* |
| Step 4 (opt) | Pi | 1× | Polish Q&A log / client-facing text | *(to be created)* |
| Step 5 (opt) | Codex | 1× | Generate User Story if classification = Product Enhancement | *(to be created)* |

### Stage 3 – Post-RG Synthesis

**What this stage produces** (validated from HG Group real output):
- Customer Narrative — full "Before MAIA / After MAIA" transformation story with scope summary and open gaps
- N × Feature Module Proposals — one file per confirmed module, each following the same pattern:
  - Current state flow (problem diagram)
  - Proposed flow (after MAIA diagram)
  - Form design (field-by-field table)
  - Actions + status flow
  - Open items to confirm with client

**Number of module proposals = number of modules confirmed in Stage 2 RG classification.**

Each step = one Claude Code or Goose runtime. Stage lead (Hermes) invokes Step 2 once per confirmed module — each invocation is a separate runtime producing one proposal file.

| Step | Agent | Runtime | Task | File |
|---|---|---|---|---|
| Step 1 | Claude Code | 1× | From RG output → draft Customer Narrative | *(to be created)* |
| Step 2 | Claude Code | 1× per module | From RG output + module name → draft one Feature Module Proposal | *(to be created)* |
| Step 3 | Goose | 1× | Copy module proposal template per module, completeness check all output files | *(to be created)* |
| Step 4 (opt) | Pi | 1× | Polish Customer Narrative language for client-facing readiness | *(to be created)* |

### Stage 4 – SOW Writing

**What this stage produces:**
- SOW draft — scoped from Customer Narrative + all module proposals
- Sections: scope included, Phase 2 items, requires clarification, not in scope, investment figure placeholder

| Step | Agent | Runtime | Task | File |
|---|---|---|---|---|
| Step 1 | Claude Code | 1× | From Customer Narrative + module proposals → draft SOW | *(to be created)* |
| Step 2 | Goose | 1× | Completeness check — all modules in narrative appear in SOW scope | *(to be created)* |
| Step 3 (opt) | Pi | 1× | Polish SOW language for senior PM review | *(to be created)* |

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
- [ ] Create Head Agent MD file
- [ ] Create Stage 3 Orchestrator MD file
- [ ] Create Stage 4 Orchestrator MD file

### Stage 1 missing agents
- [ ] Create Stage 1 Step 2 – Goose file
- [ ] Create Stage 1 Step 3 – Pi file (optional)

### Stage 2 missing agents
- [ ] Create Stage 2 Step 3 – OpenCode file (optional)
- [ ] Create Stage 2 Step 4 – Pi file (optional)
- [ ] Create Stage 2 Step 5 – Codex file (optional)

### Stage 3 missing agents
- [ ] Create Stage 3 Step 1 – Claude Code (Customer Narrative) file
- [ ] Create Stage 3 Step 2 – Claude Code (Feature Module Proposal) file
- [ ] Create Stage 3 Step 3 – Goose file
- [ ] Create Stage 3 Step 4 – Pi file (optional)

### Stage 4 missing agents
- [ ] Create Stage 4 Step 1 – Claude Code (SOW) file
- [ ] Create Stage 4 Step 2 – Goose file
- [ ] Create Stage 4 Step 3 – Pi file (optional)

### Granular details to add later (per stage)
- [ ] Stage 2: pre-session prep steps (questionnaire + opening script generation from customer profile)
- [ ] Stage 3: module detection logic — how agent reads classification block to determine which proposal files to generate
- [ ] Stage 4: SOW template structure to standardise output

### Infrastructure
- [ ] Verify `[Template] GTM Proposal.md` exists in Templates
- [ ] Verify `[Template] Feature Module Proposal.md` exists in Templates
- [ ] Verify `04 - QA & Known Issues/Feature Gap Tracker` exists

## See Also

- [[02 - PM Playbook/Guides/Agent Creation/Agent Creation Guide]] – step-by-step guide to building a new agent workflow
- [[02 - PM Playbook/Guides/Multi-Agent Orchestration for PM]] – overall agent architecture
- [[02 - PM Playbook/Processes/Requirement Gathering Process]] – SOP this pipeline automates

---
*Maintained by Gareth*

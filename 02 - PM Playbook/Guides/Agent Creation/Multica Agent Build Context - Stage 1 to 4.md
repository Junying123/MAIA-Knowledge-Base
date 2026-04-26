---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# Multica Agent Build Context - Stage 1 to 4

This is a single source file to create your Stage 1-4 agents in Multica with consistent structure.

Use this file when creating agents so you do not need to jump between:
- `Agent Swarm Architecture`
- `[Template] Subagent Planning`
- Stage workflow docs

---

## 1) Swarm Architecture (Final)

### Head Model
- Head agent: `Hermes`
- Hermes modes:
  - `Orchestrator`: routes and sequences multi-step work
  - `Executor`: directly handles short, low-risk bounded tasks

### Active Runtimes
- `claude`
- `codex`
- `opencode`
- `pi`
- `cursor`
- `hermes`

### Role Split
- `claude`: planning + critical review gate
- `codex`: main heavy executor
- `opencode`: validation and consistency sweeps
- `pi`: custom workflow engine
- `cursor`: daily cockpit and fast local polish
- `hermes`: orchestration and bounded direct execution

### Core Operating Rule
1. Plan first with `claude`.
2. Execute mostly with `codex`.
3. Validate with `opencode`.
4. Polish in `cursor` when needed.
5. Return critical outputs to `claude` for review gate.
6. Hermes closes loop and reports to PM.

---

## 2) Multica Agent Input Fields (Standard)

Use these exact fields for every agent and subagent:

| Field | What to enter |
|---|---|
| Name | Agent name in Multica |
| Description | What this agent does in one sentence |
| Runtime | `pi / cursor / claude / codex / opencode / hermes` |
| Instructions | Identity + working style + execution rules |
| Skills | Skill list required by the agent |

Optional but recommended:
- Visibility (`private` first, then promote to `workspace`)
- Owner
- Trigger conditions

---

## 3) Parent Agent Plan (Hermes Master)

## Agent Tree

```text
Agent (Hermes Master)
  |________subagent 1 (Stage 1 Lead - GTM Proposal)
  |________subagent 2 (Stage 2 Lead - Requirement Gathering)
  |________subagent 3 (Stage 3 Lead - Post-RG Synthesis)
  |________subagent 4 (Stage 4 Lead - SOW Writing)
```

### Parent Agent Definition

| Field | Value |
|---|---|
| Name | Hermes Master |
| Description | Orchestrates and optionally executes the Stage 1-4 PM discovery pipeline |
| Runtime | hermes |
| Trigger | Any PM request tied to Stage 1-4 |

### Parent Agent Instructions

```text
You are Hermes Master, the orchestration head for MAIA PM Stage 1-4.

Identity:
- You are the PM chief-of-staff agent for discovery pipeline execution.

Working style:
- Route tasks by stage and complexity.
- Keep outputs concise, structured, and decision-ready.
- Always preserve KB structure and naming conventions.

Execution rules:
- Use orchestrator mode for multi-step or cross-agent tasks.
- Use executor mode only for bounded low-risk tasks.
- Start major tasks with a Claude planning pass.
- Delegate heavy drafting to Codex.
- Delegate consistency sweeps to OpenCode.
- Use Cursor for final local polish when needed.
- Escalate blockers immediately with clear next actions.
```

### Parent Skills
- `writing-plans` (Codex): structure stage plans and handoff sequence
- `dispatching-parallel-agents` (Codex): parallelize module-heavy execution safely
- `verification-before-completion` (Codex): enforce completion checks before handoff
- `statusline` (Cursor): keep orchestration context visible in CLI flow

---

## 4) Stage Agent Definitions (Ready for Multica)

## Stage 1 - GTM Proposal

### Stage Lead Agent
| Field | Value |
|---|---|
| Name | Stage 1 Lead - GTM Proposal |
| Description | Runs GTM handoff to proposal draft workflow |
| Runtime | hermes |

**Instructions**
```text
Run Stage 1 end-to-end:
1) Request Claude planning pass for scope and section completeness.
2) Delegate drafting to Codex from GTM handoff.
3) Delegate consistency check to OpenCode.
4) Use Cursor for final polish if required.
5) Return final proposal path and summary to Hermes Master.
```

**Skills**
- `writing-plans` (Codex)
- `brainstorming` (Codex)
- `problem-statement` (Codex)
- `workshop-facilitation` (Codex)

### Stage 1 Subagents

| Subagent | Description | Runtime | Input | Output |
|---|---|---|---|---|
| S1 Planner | Build Stage 1 execution plan | claude | GTM handoff + client context | Plan + done criteria |
| S1 Drafter | Draft GTM proposal | codex | Handoff + plan | Proposal draft |
| S1 Validator | Check completeness and structure | opencode | Proposal draft + checklist | Validation report |
| S1 Polisher (optional) | Final wording and formatting | cursor | Validated draft | PM-ready final draft |

---

## Stage 2 - Requirement Gathering

### Stage Lead Agent
| Field | Value |
|---|---|
| Name | Stage 2 Lead - Requirement Gathering |
| Description | Converts transcript into structured RG output and classification |
| Runtime | hermes |

**Instructions**
```text
Run Stage 2 end-to-end:
1) Ask Claude to plan extraction and classification flow.
2) Run transcript quality gate (speaker clarity, missing segments, unclear passages).
3) Delegate transcript synthesis and RG filling to Codex.
4) Generate transcript evidence snippets for each major requirement and proposal claim.
5) Run contradiction detection and confidence scoring (confirmed/inferred/unclear).
6) Delegate consistency and AC-format checks to OpenCode.
7) Build open-questions register with owner and due date.
8) Generate Stage-3-ready module candidates block.
9) Use Cursor for cleanup if needed.
10) Return final RG output + classification + evidence snippet appendix + follow-ups.
```

**Skills**
- `customer-profile` (Claude)
- `discovery-process` (Codex)
- `discovery-interview-prep` (Codex)
- `problem-statement` (Codex)
- `systematic-debugging` (Codex)
- `verification-before-completion` (Codex)

### Stage 2 Subagents

| Subagent | Description | Runtime | Input | Output |
|---|---|---|---|---|
| S2 Planner | Plan extraction + classification | claude | Transcript + template path | Execution plan |
| S2 Transcript QA | Run raw transcript quality gate before synthesis | codex | Raw transcript | QA report + flagged gaps |
| S2 Synthesizer | Fill RG from transcript | codex | Transcript + plan | Filled RG draft |
| S2 Evidence Snippet Extractor | Extract quote snippets from raw transcript for each key requirement/proposal | codex | Raw transcript + RG draft | Evidence snippet appendix (claim -> quote -> location) |
| S2 Contradiction Checker | Flag conflicting requirements and assign confidence levels | codex | RG draft + transcript snippets | Contradiction/confidence report |
| S2 Validator | Validate consistency and gaps | opencode | RG draft + checklist | Validation report |
| S2 Open Questions Owner | Create open-questions register with owner and due date | codex | RG draft + validation report | Questions register |
| S2 Stage-3 Packager | Build stage-3-ready module candidates and rationale | codex | Final RG output + evidence appendix | Stage 3 handoff block |
| S2 Polisher (optional) | Final formatting and readability | cursor | Validated RG draft | Final RG output |

---

## Stage 3 - Post-RG Synthesis

### Stage Lead Agent
| Field | Value |
|---|---|
| Name | Stage 3 Lead - Post-RG Synthesis |
| Description | Generates customer narrative and per-module proposals from RG output |
| Runtime | hermes |

**Instructions**
```text
Run Stage 3 end-to-end:
1) Ask Claude to plan module fan-out logic.
2) Delegate narrative and module proposal generation to Codex.
3) Delegate cross-file consistency checks to OpenCode.
4) Use Cursor for final readability pass where needed.
5) Return final narrative + all module proposal file paths.
```

**Skills (Must Use in Stage 3)**
- `customer-narrative` (Claude): required for customer narrative structure and before/after transformation logic
- `module-proposal` (Claude): required for one-module-per-file proposal generation from RG evidence
- `feature-narrative` (Claude): required for module proposal depth and system behavior framing
- `user-story` (Codex): required to convert module requirements into testable story-style statements
- `epic-breakdown-advisor` (Codex): required when module scope is too large or ambiguous
- `verification-before-completion` (Codex): required final gate before stage handoff

**Skills (Optional but Recommended)**
- `storyboard` (Codex): improve narrative flow from problem -> solution -> outcome
- `user-story-mapping` (Codex): organize multi-module journeys when scope is broad
- `humanizer` (Claude): improve client-facing readability without changing meaning

### Stage 3 Subagents

| Subagent | Description | Runtime | Input | Output |
|---|---|---|---|---|
| S3 Planner | Plan narrative + module fan-out | claude | RG output + module list | Generation plan |
| S3 Narrative Generator | Draft customer narrative | codex | RG output + plan | Narrative draft |
| S3 Module Generator | Generate one proposal per module (one invocation = one module = one file) | codex | RG output + module name | Module proposal drafts |
| S3 Validator | Validate all outputs against structure | opencode | Narrative + module drafts | Validation report |
| S3 Polisher (optional) | Improve readability | cursor | Validated outputs | PM-ready files |

### Stage 3 Skill-to-Subagent Mapping (Operational)

| Subagent | Required Skills | Optional Skills |
|---|---|---|
| S3 Planner | `customer-narrative` (Claude), `module-proposal` (Claude), `feature-narrative` (Claude) | `storyboard` (Codex) |
| S3 Narrative Generator | `customer-narrative` (Claude), `user-story` (Codex) | `humanizer` (Claude) |
| S3 Module Generator | `module-proposal` (Claude), `feature-narrative` (Claude), `epic-breakdown-advisor` (Codex), `user-story` (Codex) | `user-story-mapping` (Codex) |
| S3 Validator | `verification-before-completion` (Codex) | `receiving-code-review` (Codex) |
| S3 Polisher | `humanizer` (Claude) | `stop-slop` (Claude), `statusline` (Cursor) |

---

## Stage 4 - SOW Writing

### Stage Lead Agent
| Field | Value |
|---|---|
| Name | Stage 4 Lead - SOW Writing |
| Description | Produces SOW draft from narrative and module proposals |
| Runtime | hermes |

**Instructions**
```text
Run Stage 4 end-to-end:
1) Ask Claude to define SOW structure and scope validation criteria.
2) Delegate SOW drafting to Codex.
3) Delegate scope-completeness checks to OpenCode.
4) Create a slide deck draft from final SOW using JDX demo deck pattern (deck-stage HTML structure).
5) Use Cursor for final PM review formatting.
6) Return final SOW draft, slide deck draft, and unresolved items list.
```

**Skills**
- `sow-writer` (Claude)
- `sow-to-slide-deck` (Claude)
- `writing-plans` (Codex)
- `storyboard` (Codex)
- `workshop-facilitation` (Codex)
- `press-release` (Codex)
- `requesting-code-review` (Codex)
- `verification-before-completion` (Codex)

### Stage 4 Subagents

| Subagent | Description | Runtime | Input | Output |
|---|---|---|---|---|
| S4 Planner | Plan SOW sections and checks | claude | Narrative + module proposals | SOW plan |
| S4 Drafter | Draft SOW | codex | Plan + source docs | SOW draft |
| S4 Validator | Check scope completeness and alignment | opencode | SOW draft + source docs | Validation report |
| S4 Slide Builder | Build slide deck from finalized SOW using JDX pattern | codex | Final SOW + deck template pattern | Slide deck draft (`.md` or `.html`) |
| S4 Polisher (optional) | Final PM formatting pass | cursor | Validated SOW | Final SOW draft |

---

## 5) Subagent Instruction Template (Copy/Paste)

Use this for each subagent creation in Multica.

```text
You are [Subagent Name].

Identity:
- [Role]

Working style:
- [Style rule 1]
- [Style rule 2]

Execution rules:
- Input: [exact inputs]
- Output: [exact output artifact]
- Done criteria: [testable condition]
- Escalation: [when to escalate back to stage lead]
```

---

## 6) Handoff Contract (All Stages)

| From | To | Trigger |
|---|---|---|
| PM | Hermes Master | New stage task |
| Hermes Master | Stage Lead | Stage start approved |
| Stage Lead | Subagent Planner | Plan required |
| Planner | Stage Lead | Plan complete |
| Stage Lead | Executor subagent | Plan approved |
| Executor | Validator | Draft generated |
| Validator | Stage Lead | Validation report complete |
| Stage Lead | Hermes Master | Stage output complete |
| Hermes Master | PM | Final summary + file paths |

---

## 7) Quick Runtime Guidance for Multica

- Prefer `claude` for planning and critical review only.
- Prefer `codex` for heavy generation and repetitive execution.
- Prefer `opencode` for consistency sweeps.
- Prefer `cursor` for local finish and fast edits.
- Prefer `pi` when building custom reusable workflow behavior.
- Use `hermes` as orchestrator by default, executor selectively.

---

## 8) Applicable Skill Bundles (From Local Skills)

These bundles are selected only from skills currently available in your local environment.

### Stage 1 Bundle - GTM Proposal

**Claude-first planning/review**
- `customer-profile` (Claude)
- `humanizer` (Claude)

**Codex execution**
- `writing-plans` (Codex)
- `brainstorming` (Codex)
- `problem-statement` (Codex)

**Cursor finishing**
- `shell` (Cursor)
- `statusline` (Cursor)

### Stage 2 Bundle - Requirement Gathering

**Claude-first planning/review**
- `customer-profile` (Claude)
- `req-gathering-output` (Claude)
- `discovery-pipeline` (Claude)

**Codex execution**
- `discovery-process` (Codex)
- `discovery-interview-prep` (Codex)
- `user-story` (Codex)
- `systematic-debugging` (Codex)
- `verification-before-completion` (Codex)

**Cursor finishing**
- `shell` (Cursor)
- `statusline` (Cursor)

### Stage 2 Evidence Rule (Mandatory)

Every major requirement, risk, and proposal statement in Stage 2 output must be traceable to raw transcript evidence.

Minimum evidence format:

```text
Claim: [requirement/proposal statement]
Evidence snippet: "[exact or near-exact transcript quote]"
Source: [transcript file] | [speaker if known] | [timestamp or segment marker if available]
Confidence: [confirmed/inferred/unclear]
```

If evidence is missing:
- mark claim as `[TO VALIDATE]`
- add it to open-questions register
- do not present it as confirmed fact

### Stage 3 Bundle - Post-RG Synthesis

**Claude-first planning/review**
- `customer-narrative` (Claude)
- `module-proposal` (Claude)
- `feature-narrative` (Claude)

**Codex execution**
- `epic-breakdown-advisor` (Codex)
- `user-story-mapping` (Codex)
- `storyboard` (Codex)

**Cursor finishing**
- `shell` (Cursor)
- `statusline` (Cursor)

### Stage 4 Bundle - SOW Writing

**Claude-first planning/review**
- `sow-writer` (Claude)
- `sow-to-slide-deck` (Claude)
- `humanizer` (Claude)
- `stop-slop` (Claude)

**Codex execution**
- `writing-plans` (Codex)
- `storyboard` (Codex)
- `workshop-facilitation` (Codex)
- `press-release` (Codex)
- `obsidian-markdown` (Codex)
- `verification-before-completion` (Codex)
- `requesting-code-review` (Codex)

**Cursor finishing**
- `shell` (Cursor)
- `statusline` (Cursor)
- `canvas` (Cursor)

### Cross-Stage Quality Bundle

- `verification-before-completion` (Codex)
- `requesting-code-review` (Codex)
- `receiving-code-review` (Codex)
- `systematic-debugging` (Codex)
- `humanizer` (Claude)
- `stop-slop` (Claude)

---

## 9) Build Checklist (Before Creating Agents)

- [ ] Parent Hermes Master agent created
- [ ] Stage 1-4 lead agents created
- [ ] Each stage has planner/executor/validator mapping
- [ ] Each agent has clear instructions and skills
- [ ] Runtime choice is explicit and valid
- [ ] Handoff and escalation are defined
- [ ] Done criteria are measurable
- [ ] Stage skills are selected from local inventory only

---

## See Also

- [[02 - PM Playbook/Guides/Agent Creation/[Template] Subagent Planning]]
- [[02 - PM Playbook/Guides/Agent Creation/Agent Swarm Architecture]]
- [[02 - PM Playbook/Guides/Agent Creation/Stage Workflows/Stage1/Stage 1 - GTM Proposal - Orchestrator]]
- [[02 - PM Playbook/Guides/Agent Creation/Stage Workflows/Stage2-Requirement Gathering/Stage 2 - Requirement Gathering - Orchestrator]]

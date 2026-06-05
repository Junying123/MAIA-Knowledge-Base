---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# [Template] Subagent Planning

Use this template to plan one agent and all of its subagents before implementation in Multica.

## Agent Tree

```text
Agent ([Agent Name])
  |________subagent 1 ([Name])
  |________subagent 2 ([Name])
  |________subagent 3 ([Name])
  |________and so on
```

## Multica Agent Definition (Parent Agent)

| Field | Details |
|---|---|
| Name | [Agent Name] |
| Description | [What does this agent do?] |
| Runtime | [pi / cursor / claude / codex / opencode / hermes] |
| Visibility | [private / workspace] |
| Owner | [Who maintains this agent] |
| Trigger | [When this agent should be assigned or @mentioned] |

## Agent Instructions

Define this agent's identity and working style. These instructions are injected into the agent's context for every task.

```text
[Write the full instruction prompt for this parent agent]

Identity:
- [Role this agent plays]

Working style:
- [How it should think and communicate]
- [How it should structure output]
- [How it should handle uncertainty]

Execution rules:
- [What it must do before acting]
- [What it must never do]
- [When to escalate]
```

## Skills (Parent Agent)

| Skill | Why this agent needs it | Required? | Notes |
|---|---|---|---|
| [skill-name] | [Purpose in workflow] | [Yes/No] | [Constraints] |
| [skill-name] | [Purpose in workflow] | [Yes/No] | [Constraints] |

## Runtime Notes (Multica)

- `claude` supports MCP in Multica; use it when MCP is required.
- `codex` and `cursor` should be treated as no-resume in current Multica behavior.
- `pi`, `opencode`, and `hermes` support session continuation in Multica.
- Keep runtime choice aligned with task type, not personal preference.

## Subagent Plan

| Subagent | Name | Description | Runtime | Input | Output | Done Criteria |
|---|---|---|---|---|---|---|
| subagent 1 | [Name] | [What does this subagent do?] | [pi/cursor/claude/codex/opencode/hermes] | [Input source] | [Expected artifact] | [What must be true to mark done] |
| subagent 2 | [Name] | [What does this subagent do?] | [pi/cursor/claude/codex/opencode/hermes] | [Input source] | [Expected artifact] | [What must be true to mark done] |
| subagent 3 | [Name] | [What does this subagent do?] | [pi/cursor/claude/codex/opencode/hermes] | [Input source] | [Expected artifact] | [What must be true to mark done] |

## Subagent Instructions and Skills

### Subagent 1: [Name]

**Runtime:** [pi/cursor/claude/codex/opencode/hermes]

**Instructions**
```text
[Identity and working style for subagent 1]
```

**Skills**
- [skill-name]: [why]
- [skill-name]: [why]

### Subagent 2: [Name]

**Runtime:** [pi/cursor/claude/codex/opencode/hermes]

**Instructions**
```text
[Identity and working style for subagent 2]
```

**Skills**
- [skill-name]: [why]
- [skill-name]: [why]

## Execution Order

1. [Subagent name] -> [why first]
2. [Subagent name] -> [dependency or parallel note]
3. [Subagent name] -> [dependency or parallel note]

## Handoff Rules

| From | To | Trigger | Validation |
|---|---|---|---|
| [Agent or Subagent] | [Next Agent/Subagent] | [What event triggers handoff] | [What must be checked before handoff] |
| [Agent or Subagent] | [Next Agent/Subagent] | [What event triggers handoff] | [What must be checked before handoff] |

## Failure and Escalation

- Failure Condition 1: [Condition]
  - Escalate to: [Agent Name]
  - Action: [Retry / re-plan / manual review]
- Failure Condition 2: [Condition]
  - Escalate to: [Agent Name]
  - Action: [Retry / re-plan / manual review]

## Tracking Checklist

- [ ] Parent agent has Name, Description, Runtime, Instructions, Skills
- [ ] Each subagent has Name, Description, Runtime, Instructions, Skills
- [ ] Runtime selection is valid for Multica (`pi/cursor/claude/codex/opencode/hermes`)
- [ ] Inputs and outputs are explicit for every subagent
- [ ] Handoff rules are defined
- [ ] Done criteria are testable
- [ ] Escalation path is defined

## Notes

- [Any assumptions]
- [Open questions]
- [Decisions pending]

## See Also

- [[02 - PM Playbook/Guides/Agent Creation/Agent Swarm Architecture]]
- [[02 - PM Playbook/Guides/Agent Creation/Agent Creation Guide]]
- [Multica Docs](https://multica.ai/docs)

---
owner: Gareth
status: draft
last_reviewed: 2026-04-26
---

# [Template] Subagent Planning

Use this template to plan one agent and all of its subagents before implementation.

## Agent Tree

```text
Agent ([Agent Name])
  |________subagent 1 ([Name])
  |________subagent 2 ([Name])
  |________subagent 3 ([Name])
  |________and so on
```

## Agent Summary

| Field | Details |
|---|---|
| Agent Name | [Agent Name] |
| Agent Type | [Head Agent / Stage Lead / Utility Agent] |
| Primary Goal | [What this agent is responsible for] |
| Scope | [In scope tasks] |
| Out of Scope | [What this agent must not do] |
| Trigger | [When this agent should be used] |

## Subagent Plan

| Subagent | Purpose | Input | Output | Primary Tool/Runtime | Done Criteria |
|---|---|---|---|---|---|
| subagent 1 ([Name]) | [Single responsibility] | [Input source] | [Expected artifact] | [claude-code/codex/opencode/pi/cursor/hermes] | [What must be true to mark done] |
| subagent 2 ([Name]) | [Single responsibility] | [Input source] | [Expected artifact] | [claude-code/codex/opencode/pi/cursor/hermes] | [What must be true to mark done] |
| subagent 3 ([Name]) | [Single responsibility] | [Input source] | [Expected artifact] | [claude-code/codex/opencode/pi/cursor/hermes] | [What must be true to mark done] |

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

- [ ] Agent objective is clear and bounded
- [ ] Each subagent has exactly one core responsibility
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

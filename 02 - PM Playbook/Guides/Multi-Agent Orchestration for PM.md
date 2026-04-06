---
title: Multi-Agent Orchestration for PM Workflows
owner: Gareth
status: draft
created: 2026-04-05
last_reviewed: 2026-04-05
lark_url: ""
---
# Multi-Agent Orchestration for PM Workflows

Architecture for leveraging Hermes as PM orchestrator across 5 coding agents for daily MAIA PM work.

---
## Architecture
GARETH (Decisions, client calls, approvals)
    ↓
HERMES (Brain + Orchestration — reads KB, knows context, routes work, reviews output)
    ↓
┌────────┬────────┬────────┬────────┬────────┐
│ Claude │  Codex │  Goose │  Open  │  Pi   │
│ Code  │        │        │ Code   │       │
└────────┴────────┴────────┴────────┴────────┘

---
## Agent-to-Task Mapping

| Agent | Model/Engine | Strength | PM Use Case |
|-------|-------------|----------|-------------|
| **Hermes** | qwen3.6-plus | Orchestration | PM co-pilot, context keeper, final reviewer |
| **Claude Code** | Claude | Complex reasoning | RG transcript → structured output, proposal drafting, SOW creation, architectural review |
| **Goose** | Qwen3.6-plus (free) | Tool use + files | Fill templates (UAT forms, checklists), batch file ops, KB maintenance |
| **Codex** | GPT-4 | Structured output | Generate test scenarios, user stories, acceptance criteria from PRDs |
| **OpenCode** | Open models (free) | Long sessions | Document review, spot check completeness, compare against templates |
| **Pi** | Pi | Quick answers | Quick research, language polish, formatting cleanup, light editing |
| **Lark CLI** | @larksuite/cli v1.0.3 | API automation | Push docs to Lark, check base records, send IM updates |

---
## Orchestration Patterns

### Pattern 1: RG Transcript → Structured RG Output
    Hermes: "I have raw transcript + GTM proposal → need filled RG Output doc"
        ↓
    Claude Code: "Read transcript (~800 lines), extract pain points, fill template"
        ↓
    Goose: "Validate sections are complete, check against template"
        ↓
    Hermes: "Review output → fix gaps → save to KB folder"

### Pattern 2: SOW → PRD → Dev Specs (MAIA CODEX)
    Hermes: "SOW signed, time to create CODEX specs"
        ↓
    Claude Code: "Read SOW + feature requests → draft prd.md"
        ↓
    Codex: "From PRD → generate tasks.md with work breakdown"
        ↓
    Goose: "Create feature folder structure, write changelog.md"
        ↓
    Hermes: "Review all specs → push to maia-codex → brief dev in Lark"

### Pattern 3: UAT Test Generation
    Hermes: "Need UAT test scenarios for [client feature]"
        ↓
    Codex: "From feature spec + business rules → generate test case table"
        ↓
    Goose: "Fill MAIA UAT Form template with test cases"
        ↓
    Hermes: "Review test coverage → save to client folder"

### Pattern 4: KB Housekeeping & Batch Ops
    Hermes: "Update all client statuses, check for stale docs"
        ↓
    Goose: "Scan client folders, flag documents older than 30 days"
        ↓
    OpenCode: "Cross-reference KB vs maia-codex — spot missing specs"
        ↓
    Hermes: "Summary of what needs attention"

---
## Daily Workflow Loop

    Morning:
      Hermes → "What's my priority list?"
      Hermes checks all client folders in KB

    Priority work:
      Complex doc synthesis (RG → Output, Proposal, SOW)
        → Claude Code (best reasoning)

      Template filling, file ops, batch updates
        → Goose (best tool use)

      Test scenarios, structured specs
        → Codex (structured output)

      Doc review, spot checks, consistency
        → OpenCode (free, long session)

      Quick polish, language fixes
        → Pi (fast, lightweight)

    End of day:
      Hermes: "Summarize progress"
      Updates client status tracking

---
## Quick Reference Commands

    # Route to a specific agent for PM work
    ~/.hermes/agent-wrappers/route.sh claude-code "Read transcript, extract pain points, fill RG Output template"
    ~/.hermes/agent-wrappers/route.sh codex "Generate UAT test scenarios from this feature spec"
    ~/.hermes/agent-wrappers/route.sh goose "Update this UAT form template with these test cases"
    ~/.hermes/agent-wrappers/route.sh opencode "Review this PRD for completeness against template"
    ~/.hermes/agent-wrappers/route.sh pi "Polish this follow-up email to client"

    # Parallel dispatch — compare outputs
    ~/.hermes/agent-wrappers/route.sh claude-code "Draft UAT scenarios for feature X" &
    ~/.hermes/agent-wrappers/route.sh codex "Draft UAT scenarios for feature X" &
    wait
    # → Hermes (you) reviews both, picks best, merges

---
## Why This Works

- **Hermes** = brain layer. Reads KB, knows context, routes work. Zero context switching for you.
- **Claude Code** = heavy synthesis. RG transcripts → structured documents.
- **Goose** = file ops + templates. Batch fills UAT forms, maintains KB.
- **Codex** = structured specs. Test cases, acceptance criteria, work breakdowns.
- **OpenCode** = free checker. Doc review, consistency checks, missing item detection.
- **Pi** = quick polish. Language, formatting, light edits.

Each agent handles what it's best at. You only make decisions and call clients.

---
## See Also
- [[02 - PM Playbook/Processes/PM E2E Workflow]]
- [[02 - PM Playbook/Guides/Lark CLI for PM Workflows]]
- [[02 - PM Playbook/Guides/Automation Master Guide]]
- [[00 - Home/Team & Org]]

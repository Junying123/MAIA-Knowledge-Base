---
owner: Gareth
status: approved
last_reviewed: 2026-04-04
---

# Key Decisions

> Architectural and workflow choices that shape how we work. Full ADRs in [[07 - Decisions]].

## KB Architecture

| Decision | Choice | Reason |
|---|---|---|
| Source of truth | Markdown (Obsidian) | Version control, portability, AI-friendly |
| Published mirror | Lark (read-only) | Team reads Lark; PMs edit Markdown only |
| Version control | Git → GitHub | Track changes, enable collaboration |
| Folder naming | `NN - Descriptive Name` | Obsidian sort order, clear purpose |
| AI context | brain/ folder + slash commands | Persistent Claude Code session context |

## Active Client Decisions

| Client | Key Decision | Date |
|---|---|---|
| Holsen | Phase 1 go-live target 2026-04-08 | 2026-03 |
| Holsen | WhatsApp as primary comms channel | 2026-03 |
| Fixguru | Workflow: Quotation → SO → Invoice (no CPO) | 2026-04-03 |
| Fixguru | Receipt module deferred post-Phase-1 | 2026-04-03 |
| Xeersoft/CK Auto | Deliverable priority split agreed at kickoff | 2026-03-24 |
| Ming Medical | Do NOT commit/push to GitHub | 2026-04 |

## Process Decisions

| Decision | Choice | Reason |
|---|---|---|
| Daily updates | Apple Notes → WhatsApp (client-first format) | Phone-screen readable |
| Template usage | Copy, never edit originals | Preserve template integrity |
| Tag limit | Max 5 tags per page | Avoid over-tagging |
| New tags | Must check Tag Dictionary first | Taxonomy consistency |
| ADR threshold | Any team-wide architectural or process change | Traceability |

## See Also
- [[07 - Decisions/Decision Log]]
- [[brain/Patterns]]
- [[brain/Gotchas]]

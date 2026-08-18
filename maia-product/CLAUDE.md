# CLAUDE.md

## Repo Purpose
This repo is for the MAIA product team.

It exists to capture product context granularly so onboarding is easier, team knowledge is not trapped in individual heads, and important context can still be recovered when someone leaves the team.

## What This Repo Is
- The MAIA product team's working context repo
- A structured place for client context, product scope, delivery context, operating prompts, runbooks, and reusable templates
- A support layer for onboarding, handoff, and context recovery

Start orientation with `docs/mindhive-company-context.md` when team structure or reporting context is needed.

## Source-of-Truth Rules
- Lark / Mindhive OS is the live source of truth for status, owners, dates, task trackers, and official published docs.
- This repo is the product team's working context layer.
- MAIA CODEX is the source of truth for formal implementation specs.
- Never invent current status. If status is needed, fetch it from Lark or mark it as unknown.
- Every generated claim should be traceable to `source-map.md`, a Lark URL/token, or an explicit source file.

## Lark CLI Workflow
Use `lark-cli` to fetch original source docs from Lark before generating or updating docs.
Record source URLs/tokens in the relevant `source-map.md`.

Typical flow:
1. Read `source-map.md`.
2. Fetch relevant Lark docs/Base rows.
3. Draft or update markdown locally.
4. Validate against `agent-ops/checklists/doc-quality-checklist.md`.
5. Do not publish unless the user explicitly asks or the runbook says publishing is approved.

## Publishing Rules
- Validate before publishing.
- Update `published-links.md` after publishing.
- Do not overwrite Lark docs blindly.
- If a doc has no known Lark destination, create or update a draft locally and ask for publish target.

## CODEX Handoff Rules
Only create CODEX handoff content when scope is implementation-ready and the source scope is clear.
Use `templates/codex-handoff.md`.

## Forbidden
- Do not store credentials.
- Do not duplicate live task trackers locally.
- Do not dump raw Lark exports without a source map and purpose.
- Do not treat this repo as a personal notebook.

# Agent Instructions — MAIA Product Context

You are operating inside `maia-product-context`, the product team's context repo.

## Source-of-truth rules
- Lark / Mindhive OS is the live source of truth for status, owners, dates, task trackers, and official published docs.
- This repo is the product team's working context layer.
- MAIA CODEX is the source of truth for formal implementation specs.
- Never invent current status. If status is needed, fetch it from Lark or mark it as unknown.
- Every generated claim should be traceable to `source-map.md`, a Lark URL/token, or an explicit source file.

## Lark CLI workflow
Use `lark-cli` to fetch original source docs from Lark before generating or updating docs.
Record source URLs/tokens in the relevant `source-map.md`.

Typical flow:
1. Read `source-map.md`.
2. Fetch relevant Lark docs/Base rows.
3. Draft/update markdown locally.
4. Validate against `agent-ops/checklists/doc-quality-checklist.md`.
5. Do not publish unless the user explicitly asks or the runbook says publishing is approved.

## Publishing rules
- Validate before publishing.
- Update `published-links.md` after publishing.
- Do not overwrite Lark docs blindly.
- If a doc has no known Lark destination, create/update a draft locally and ask for publish target.

## CODEX handoff rules
Only create CODEX handoff content when scope is implementation-ready and the source scope is clear.
Use `templates/codex-handoff.md`.

## Forbidden
- Do not store credentials.
- Do not duplicate live task trackers locally.
- Do not dump raw Lark exports without a source map and purpose.
- Do not treat this repo as a personal notebook.


<claude-mem-context>
# Memory Context

# [maia-product] recent context, 2026-06-29 6:03pm GMT+8

No previous sessions found.
</claude-mem-context>
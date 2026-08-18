# MAIA Product Context

Product team's agent-ready context repo for managing product/account context with Claude Code, Codex, and Lark CLI.

## Purpose
This repo is the product team's working context layer between:

```text
Mindhive OS / Lark  →  MAIA Product Context  →  MAIA CODEX
```

- **Mindhive OS / Lark** owns live operational truth: tasks, owners, status, timelines, official docs.
- **MAIA Product Context** owns structured product/account context, draft PM artifacts, source maps, and agent workflows.
- **MAIA CODEX** owns formal implementation specs: `prd.md`, `design.md`, `tasks.md`, `changelog.md`.

## What this repo is
- Product-team-only context repo.
- Markdown-first working layer for Claude Code / Codex.
- Place to generate and validate product docs before publishing back to Lark.
- Bridge from Lark source docs to MAIA CODEX specs.

## What this repo is not
- Not a replacement for Mindhive OS.
- Not a live task tracker.
- Not a personal scratchpad.
- Not the engineering implementation repo.
- Not a place for credentials or private auth tokens.

## Core workflow
1. Fetch original docs/tracker context from Lark using `lark-cli`.
2. Generate/update structured markdown in this repo using Claude Code / Codex.
3. Validate against templates and source links.
4. Publish approved outputs back to Lark.
5. If implementation-ready, create/update MAIA CODEX specs.

## Main folders
- `docs/` — operating model and governance.
- `templates/` — reusable product artifact templates.
- `clients/` — account/client context and workflow-stage artifacts.
- `product/` — cross-client product context, delivery health, spec intake.
- `lark/` — Lark metadata, schemas, wiki maps, sync manifests. No secrets.
- `agent-ops/` — prompts, checklists, and runbooks for agents.
- `scripts/` — future Lark CLI wrappers and sync helpers.

## Start here
1. Read `docs/source-of-truth-matrix.md`.
2. Read `docs/product-delivery-workflow.md`.
3. Read `clients/index.md`.
4. Copy `clients/_template-client/` for a pilot client.
5. Fill `source-map.md` before asking agents to generate docs.

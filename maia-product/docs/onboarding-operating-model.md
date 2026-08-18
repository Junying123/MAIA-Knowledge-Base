# Onboarding Operating Model

This repo supports the MAIA 3-day onboarding playbook.

## System Split
- Lark Base / Mindhive OS: live status, owners, dates, deployment slot, UAT date, go-live date
- Lark Docs / Wiki: official client-facing or shared working docs
- `maia-product`: durable product and onboarding context
- `maia-codex`: formal implementation specs when required

## Repo Role In The Playbook
The repo should preserve the durable outputs of onboarding:
- client context
- prerequisites gate working copy
- onboarding status snapshot
- scope summary
- risk register
- meeting synthesis
- deferred items

## Minimum Client Control Files
- `README.md`
- `onboarding-status.md`
- `prerequisites-gate.md`
- `source-map.md`
- `scope/current-scope-summary.md`
- `risks-decisions/risk-register.md`
- `deferred-items.md`

## Workflow Rule
- update Lark for live status
- update repo for durable context
- update CODEX only when implementation-ready detail is needed

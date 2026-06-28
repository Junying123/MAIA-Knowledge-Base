# MAIA Product Context — File Structure Plan

## Purpose
Plan the initial file/folder structure for `maia-product-context`, a product-team-only repo used as the agent-ready context layer between Mindhive OS (Lark) and MAIA CODEX.

## Design Principles
1. **Product team only** — optimize for PM/product workflows, not engineering internals.
2. **Lark remains source of live truth** — the repo must not become a parallel task tracker.
3. **Repo is agent working memory** — structure should be easy for Claude Code/Codex to traverse.
4. **Markdown-first** — all core docs should be readable, diffable, and publishable.
5. **Few folders first** — avoid bureaucracy. Add structure only when it earns its place.
6. **Client/account and product scope are first-class** — this repo is for product context, not random notes.
7. **Every generated artifact must link back to source** — Lark doc/base/wiki source IDs should be recorded.

## Recommended v1 Structure

```text
maia-product-context/
├── README.md
├── AGENTS.md
├── docs/
│   ├── system-overview.md
│   ├── source-of-truth-matrix.md
│   ├── lark-sync-workflow.md
│   ├── publishing-rules.md
│   └── naming-conventions.md
├── templates/
│   ├── client-context.md
│   ├── client-narrative.md
│   ├── account-plan.md
│   ├── product-scope-summary.md
│   ├── meeting-synthesis.md
│   ├── delivery-health-summary.md
│   ├── decision-log.md
│   └── codex-handoff.md
├── clients/
│   └── _template-client/
│       ├── README.md
│       ├── source-map.md
│       ├── context/
│       │   ├── client-context.md
│       │   ├── business-workflow.md
│       │   └── stakeholders.md
│       ├── narrative/
│       │   └── current-client-narrative.md
│       ├── scope/
│       │   ├── current-scope-summary.md
│       │   ├── scope-lock.md
│       │   ├── requirements-log.md
│       │   └── feature-requests-gaps.md
│       ├── account-plan/
│       │   └── current-account-plan.md
│       ├── meetings/
│       │   ├── YYYY-MM-DD-meeting-synthesis.md
│       │   └── transcripts/
│       ├── timeline/
│       │   └── current-timeline.md
│       ├── memory/
│       │   ├── learnings.md
│       │   └── reusable-context.md
│       ├── risks-decisions/
│       │   ├── decision-log.md
│       │   └── risk-register.md
│       └── published-links.md
├── product/
│   ├── scope-library/
│   │   └── README.md
│   ├── feature-context/
│   │   └── README.md
│   ├── delivery-health/
│   │   └── README.md
│   └── spec-intake/
│       └── README.md
├── lark/
│   ├── base-schemas/
│   │   └── README.md
│   ├── wiki-map/
│   │   └── README.md
│   └── sync-manifests/
│       └── README.md
├── agent-ops/
│   ├── prompts/
│   │   ├── fetch-context.md
│   │   ├── generate-client-narrative.md
│   │   ├── generate-account-plan.md
│   │   ├── generate-scope-summary.md
│   │   ├── validate-doc.md
│   │   └── publish-to-lark.md
│   ├── checklists/
│   │   ├── doc-quality-checklist.md
│   │   ├── lark-publish-checklist.md
│   │   └── codex-handoff-checklist.md
│   └── runbooks/
│       ├── client-context-refresh.md
│       ├── lark-to-repo-sync.md
│       ├── repo-to-lark-publish.md
│       └── repo-to-codex-handoff.md
├── scripts/
│   ├── README.md
│   ├── fetch_lark_doc.py
│   ├── publish_lark_doc.py
│   ├── fetch_lark_base.py
│   └── build_context_pack.py
└── .gitignore
```

## Folder Responsibilities

### `README.md`
Repo entry point. Must explain:
- what this repo is
- what it is not
- how it fits with Lark/Mindhive OS and MAIA CODEX
- how PMs and agents should use it

### `AGENTS.md`
Instructions for Claude Code/Codex when operating in this repo.
Should include:
- source-of-truth rules
- do-not-invent-state warning
- Lark CLI usage expectations
- publishing requires validation
- CODEX handoff rules

### `docs/`
Governance and operating model. Keep this small.

Recommended v1 files:
- `system-overview.md` — high-level architecture
- `source-of-truth-matrix.md` — what lives in Lark vs repo vs CODEX
- `lark-sync-workflow.md` — fetch/update workflow
- `publishing-rules.md` — review and publish rules
- `naming-conventions.md` — folder/file naming standards

### `templates/`
Reusable markdown templates for product team artifacts.

Start with only these:
- `client-context.md`
- `client-narrative.md`
- `account-plan.md`
- `product-scope-summary.md`
- `meeting-synthesis.md`
- `delivery-health-summary.md`
- `decision-log.md`
- `codex-handoff.md`

### `clients/`
Client/account-level product context.

Use one folder per client:
```text
clients/holsen/
clients/fixguru/
clients/jdx/
```

Each client folder should have:
- `README.md` — current account snapshot
- `source-map.md` — original Lark sources and tokens/URLs
- `context/` — stable background context
- `narrative/` — current client narrative
- `scope/` — current scope, scope lock, scope changes
- `account-plan/` — current account plan
- `meetings/` — synthesized meetings, not raw transcripts unless needed
- `risks-decisions/` — decision log and risk register
- `published-links.md` — map local docs to Lark published URLs

### `product/`
Cross-client product context.

Use for:
- reusable scope patterns
- feature context packs
- delivery health summaries
- spec-intake before CODEX

Not for:
- client-specific notes
- live task tracking
- engineering implementation details

### `lark/`
Lark integration metadata.

Use for:
- Base schemas
- Wiki/document maps
- sync manifests

Do not store secrets or private auth tokens here.

### `agent-ops/`
Agent prompts, checklists, and runbooks.

This is what makes the repo usable by Claude Code/Codex consistently.

### `scripts/`
Small helper scripts for Lark CLI workflows.

Initial scripts can be thin wrappers around `lark-cli`:
- fetch doc by token
- publish markdown to doc
- fetch Base rows
- build context pack for one client

## Observed Patterns From Current MAIA KB Client Folders
Scan findings from `03 - Clients`:

### Recurring folders
- `context/` appears across most active/client folders.
- `brand_context/` appears frequently and should be normalized into `context/brand-context.md` or `context/brand/`.
- `memory/` / `learnings.md` appears frequently and should become a first-class `memory/` folder.
- `Meetings/` / `Meeting Notes/` appears frequently and should normalize to `meetings/`.
- `Timeline/` appears in active clients and should normalize to `timeline/`.
- `UAT/` appears for active delivery clients and maps to `workflow/07-core-uat/`.
- `SOW/`, `Onboarding/`, `Master Data/`, `Product/`, `Feature Requests/`, `Role Permission/`, `Integration/` appear for some clients and should map into workflow/product-specific folders rather than stay as loose top-level folders.

### Recurring files
- `CLAUDE.md` — current agent instructions/context; in new repo this should be replaced by repo-level `AGENTS.md` plus client-level `README.md` / `source-map.md`.
- `Client Overview.md` — maps to `README.md` or `context/client-context.md`.
- `Customer Narrative*.md` / `Final Narrative.md` — maps to `narrative/current-client-narrative.md`.
- `Scope Lock*.md` / `Scope Alignment*.md` — maps to `workflow/02-requirements-scope-lock/scope-lock.md`.
- `Requirements Log.md` — maps to `scope/requirements-log.md` or the requirements stage folder.
- `Feature Requests & Gaps.md` — maps to `scope/feature-requests-gaps.md` or `product/feature-context/`.
- `Config Overlay.md` — maps to `workflow/05-core-configuration-ready/configuration-summary.md`.
- `Onboarding Status.md` — maps to `README.md` current status plus `workflow/01-kickoff-meeting/` or onboarding notes if needed.
- `*Timeline*.md` / backward plans — maps to `timeline/current-timeline.md`.
- `*UAT Form*`, `*UAT Readiness Checklist*`, `*UAT Issues*`, `*Test Cases*` — maps to `workflow/07-core-uat/`.
- `SOW*.md`, proposal docs — maps to `workflow/02-requirements-scope-lock/` or `commercial/` if team later wants a commercial section.
- `integration` docs — maps to `workflow/04-core-environment-ready/` or `workflow/05-core-configuration-ready/` depending on whether it is setup/access or configuration.

## Client Folder Contract
Every client folder should follow this contract:

```text
clients/<client-slug>/
├── README.md
├── source-map.md
├── context/
│   ├── client-context.md
│   ├── business-workflow.md
│   ├── stakeholders.md
│   └── brand-context.md
├── narrative/
│   └── current-client-narrative.md
├── scope/
│   ├── current-scope-summary.md
│   ├── scope-lock.md
│   ├── requirements-log.md
│   └── feature-requests-gaps.md
├── account-plan/
│   └── current-account-plan.md
├── meetings/
│   ├── YYYY-MM-DD-meeting-synthesis.md
│   └── transcripts/
├── timeline/
│   └── current-timeline.md
├── memory/
│   ├── learnings.md
│   └── reusable-context.md
├── risks-decisions/
│   ├── decision-log.md
│   └── risk-register.md
└── published-links.md
```

## Source Map Format
Every client should have `source-map.md`:

```md
# Source Map — <Client Name>

## Lark Sources
| Source | Type | URL | Token / ID | Notes |
|---|---|---|---|---|
| Client Wiki Home | Wiki |  |  |  |
| Product Task Tracker Rows | Lark Base |  |  |  |
| Latest Scope Doc | Lark Doc |  |  |  |
| Latest Meeting Notes | Lark Doc |  |  |  |

## CODEX Links
| Spec | Path / URL | Status |
|---|---|---|
| PRD |  |  |
| Design |  |  |
| Tasks |  |  |

## Sync Notes
- Last fetched:
- Last published:
- Owner:
```

## Published Links Format
Every client should have `published-links.md`:

```md
# Published Links — <Client Name>

| Local File | Lark Destination | Lark URL | Last Published | Status |
|---|---|---|---|---|
| narrative/current-client-narrative.md | Client Narrative |  |  | Draft/Published |
| scope/current-scope-summary.md | Scope Summary |  |  | Draft/Published |
| account-plan/current-account-plan.md | Account Plan |  |  | Draft/Published |
```

## Product Folder Contract

```text
product/
├── scope-library/
│   ├── README.md
│   └── <scope-pattern>.md
├── feature-context/
│   ├── README.md
│   └── <feature-name>.md
├── delivery-health/
│   ├── README.md
│   └── YYYY-MM-DD-delivery-health-summary.md
└── spec-intake/
    ├── README.md
    └── <client-or-feature>-codex-intake.md
```

## What Not To Put In This Repo
- Raw messy personal notes
- Private credentials
- full exported Lark dumps without purpose
- live task tracker duplicates
- implementation source code
- engineering tickets as separate truth
- unreviewed client-facing final docs marked as official

## V1 Build Recommendation
Do not build everything immediately.

### Create first
```text
README.md
AGENTS.md
docs/source-of-truth-matrix.md
docs/lark-sync-workflow.md
templates/client-narrative.md
templates/account-plan.md
templates/product-scope-summary.md
clients/_template-client/
agent-ops/checklists/doc-quality-checklist.md
agent-ops/runbooks/lark-to-repo-sync.md
```

### Delay until needed
- scripts folder implementation
- full Base schemas
- full wiki map
- product delivery-health automation
- CODEX handoff automation

## MAIA Delivery Workflow Stages
The repo should align to the team's current product/account workflow:

```text
00 Sales → Product Handover
01 Kickoff Meeting
02 Requirements & Scope Lock
03 Core Data Ready
04 Core Environment Ready
05 Core Configuration Ready
06 Core Internal QA
07 Core UAT
08 Core Go Live
09 Client Training
10 Final Invoice / Subscription Start
11 Customisations 1..n
```

## Workflow Stage Folder Model
Do not create a totally separate top-level folder for every stage. That will become bloated.
Instead, each client should have a `workflow/` folder with stage-specific artifacts:

```text
clients/<client-slug>/
├── workflow/
│   ├── 00-sales-product-handover/
│   │   ├── handover-brief.md
│   │   └── source-evidence.md
│   ├── 01-kickoff-meeting/
│   │   ├── kickoff-summary.md
│   │   └── action-items.md
│   ├── 02-requirements-scope-lock/
│   │   ├── requirements-summary.md
│   │   ├── scope-lock.md
│   │   └── open-questions.md
│   ├── 03-core-data-ready/
│   │   ├── data-readiness-checklist.md
│   │   └── data-issues.md
│   ├── 04-core-environment-ready/
│   │   ├── environment-readiness-checklist.md
│   │   └── access-setup.md
│   ├── 05-core-configuration-ready/
│   │   ├── configuration-summary.md
│   │   └── configuration-checklist.md
│   ├── 06-core-internal-qa/
│   │   ├── internal-qa-plan.md
│   │   └── internal-qa-results.md
│   ├── 07-core-uat/
│   │   ├── uat-plan.md
│   │   ├── uat-scenarios.md
│   │   ├── uat-issues.md
│   │   ├── core-uat-signoff.md
│   │   └── core-uat-open-items.md
│   ├── 08-core-go-live/
│   │   ├── go-live-plan.md
│   │   └── go-live-checklist.md
│   ├── 09-client-training/
│   │   ├── training-plan.md
│   │   └── training-notes.md
│   ├── 10-final-invoice-subscription-start/
│   │   ├── commercial-readiness.md
│   │   └── subscription-start-confirmation.md
│   └── 11-customisations/
│       ├── customisation-register.md
│       └── customisation-<n>/
│           ├── scope.md
│           ├── codex-handoff.md
│           └── status.md
```

## Updated Client Folder Contract
The client contract should include both stable context and workflow-stage artifacts:

```text
clients/<client-slug>/
├── README.md
├── source-map.md
├── context/
│   ├── client-context.md
│   ├── business-workflow.md
│   └── stakeholders.md
├── narrative/
│   └── current-client-narrative.md
├── account-plan/
│   └── current-account-plan.md
├── workflow/
│   ├── 00-sales-product-handover/
│   ├── 01-kickoff-meeting/
│   ├── 02-requirements-scope-lock/
│   ├── 03-core-data-ready/
│   ├── 04-core-environment-ready/
│   ├── 05-core-configuration-ready/
│   ├── 06-core-internal-qa/
│   ├── 07-core-uat/
│   ├── 08-core-go-live/
│   ├── 09-client-training/
│   ├── 10-final-invoice-subscription-start/
│   └── 11-customisations/
├── meetings/
│   └── YYYY-MM-DD-meeting-synthesis.md
├── risks-decisions/
│   ├── decision-log.md
│   └── risk-register.md
└── published-links.md
```

## Stage Gate Model
Each workflow stage should answer:
- What source docs from Lark were used?
- What artifact did product generate?
- What is the readiness / signoff condition?
- What blockers remain?
- What needs to update in Lark Base?
- Does this trigger a MAIA CODEX handoff?

## Recommended Pilot
Use one pilot client only:
- Holsen if you want post-go-live/UAT context
- Fixguru if you want active UAT/action-plan workflow

Pilot goal:
1. fetch source docs from Lark
2. generate client narrative locally
3. generate account plan locally
4. map current workflow stage artifacts
5. validate docs
6. publish one doc back to Lark

## Decision Needed
Before creating the repo, decide:
1. Repo name: recommended `maia-product-context`
2. Pilot client: Holsen or Fixguru
3. Whether first version includes actual Lark scripts or only runbook + manual lark-cli commands
4. Whether to create all workflow stage folders upfront or only create them as the client reaches each stage

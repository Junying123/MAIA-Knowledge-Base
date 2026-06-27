# Proposal to Ivan — MAIA Context Repo for Product & Account Knowledge

## One-line pitch
Create a new repo that acts as the **agent-ready context layer** between Mindhive OS (Lark) and MAIA CODEX, so Claude Code / Codex can fetch original source docs from Lark via `lark-cli`, generate structured PM docs locally in markdown, and publish them back to Lark without relying on ChatGPT projects and manual context uploads.

## Why this repo should exist

### Current workflow problem
Based on the current practice:
- most source material lives in **Lark**
- PM/team still uploads large amounts of client context into **ChatGPT projects**
- docs are generated inside ad hoc chat threads
- context continuity depends on manual prompting and project curation
- outputs are hard to version, audit, diff, and reuse with Claude Code / Codex

### What the screenshot proves
Current workflow in ChatGPT project is conversation-centric:
- `VoC Extraction Report`
- `Scope Lock Process`
- `MAIA Client Narrative Draft`
- `Account Dossier Holsen`
- `MAIA Deployment Narrative`

That means the system today is:
1. gather context manually
2. upload / enrich into ChatGPT project
3. generate docs in chats
4. manually carry outputs forward

This does not scale cleanly for team use.

## Proposed future workflow

### New operating model
```text
Lark Base / Wiki / Docs
        ↓   (fetch via lark-cli)
MAIA Context Repo
        ↓   (Claude Code / Codex work locally)
Generated / updated PM docs
        ↓   (validate + review)
Publish back to Lark
        ↓
If implementation-ready → MAIA CODEX
```

## What this repo is
The repo is **not** another task tracker and **not** a replacement for Lark.

It is:
- a structured markdown workspace for product and account context
- a local execution surface for Claude Code / Codex
- a versioned repository of reusable context artifacts
- a bridge between live Lark content and formal MAIA CODEX specs

## What this repo is not
- not the source of live delivery status
- not the place to assign tasks
- not the formal dev-spec repo
- not a personal PM scratchpad

## Source-of-truth split

### Mindhive OS / Lark owns
- live product task tracker
- tech task tracker
- owners
- due dates
- status / progress
- official wiki/docs destination

### MAIA Context Repo owns
- structured product context
- client/account context
- narrative drafts
- scope summaries
- account plans
- meeting syntheses
- evidence-backed working docs for agents
- templates and generation workflows

### MAIA CODEX owns
- `prd.md`
- `design.md`
- `tasks.md`
- `changelog.md`
- implementation-ready product specs

## Why a repo is better than ChatGPT project for this

### 1. Version control
- every change is diffable
- older context is recoverable
- prompts and outputs can be improved over time

### 2. Agent-native
- Claude Code / Codex work better with files than with long chat history
- repo structure becomes persistent working memory
- local scripts can fetch/update Lark automatically

### 3. Reusable context
- one client folder can support multiple outputs
- same source can drive narrative, scope, account plan, and CODEX handoff

### 4. Lower manual overhead
- stop re-uploading context repeatedly
- stop relying on one giant ChatGPT project as hidden state
- use Lark as source, repo as working layer, CODEX as final spec layer

### 5. Better governance
- who updated what becomes visible
- templates can be enforced
- review gates are possible before publishing back to Lark

## Repo scope — what we should manage in it

### Product context
- product scope summaries
- feature context packs
- delivery health summaries
- issue / blocker syntheses
- PM-to-dev handoff drafts before CODEX

### Account context
- client narrative
- account dossier / snapshot
- scope lock summary
- business workflows and pain points
- meeting synthesis
- risks / decisions / open questions

## Suggested repo structure
```text
maia-context-repo/
├── README.md
├── docs/
│   ├── system-overview.md
│   ├── source-of-truth-matrix.md
│   ├── lark-integration-contract.md
│   └── publishing-workflow.md
├── templates/
│   ├── client-narrative.md
│   ├── account-plan.md
│   ├── scope-summary.md
│   ├── meeting-synthesis.md
│   └── delivery-health-summary.md
├── clients/
│   └── holsen/
│       ├── README.md
│       ├── narrative/
│       │   └── current-client-narrative.md
│       ├── scope/
│       │   └── current-scope-summary.md
│       ├── account-plan/
│       │   └── current-account-plan.md
│       ├── meetings/
│       ├── risks-decisions/
│       │   └── decision-log.md
│       └── published-links.md
├── product/
│   ├── feature-context/
│   ├── delivery-health/
│   └── spec-intake/
├── scripts/
│   ├── fetch-from-lark/
│   ├── publish-to-lark/
│   └── sync-metadata/
└── agent-ops/
    ├── prompts/
    ├── checklists/
    └── runbooks/
```

## Required workflow contract

### Fetch
Agents fetch original source docs from Lark using `lark-cli`:
- wiki/docs content
- tracker rows from Base
- supporting metadata

### Work locally
Agents generate markdown artifacts in repo:
- structured
- templated
- versioned
- reviewable

### Validate
Before publish:
- required sections exist
- status aligns with Lark Base
- unsupported claims are flagged
- owner / next step / risk is present

### Publish
Approved docs go back to Lark:
- create/update wiki/doc
- record link in `published-links.md`
- optionally update Base row metadata

### Handoff
When scope is implementation-ready:
- convert repo context into MAIA CODEX artifacts

## Key automation examples

### Example 1 — Client narrative refresh
1. fetch latest Holsen wiki/docs from Lark
2. fetch latest tracker status from Base
3. update local `current-client-narrative.md`
4. validate sections and evidence
5. publish updated narrative back to Lark

### Example 2 — Account plan generation
1. fetch meeting notes, action items, risks, and milestone status
2. generate `current-account-plan.md`
3. review
4. publish to Lark wiki/doc

### Example 3 — Product scope summary
1. fetch source scope docs from Lark
2. generate structured scope summary in repo
3. validate against task tracker
4. if approved, use as basis for CODEX handoff

## Proposed message to Ivan

### Simple framing
> We should stop treating ChatGPT projects as the main place where product/account context lives during drafting. Since the real source docs are already in Lark, we can build a dedicated repo that uses `lark-cli` to fetch source context, lets Claude Code/Codex generate structured PM docs locally in markdown, and then publishes approved outputs back to Lark. This gives us version control, reusable context, better agent workflows, and a cleaner bridge into MAIA CODEX.

## Pilot recommendation
Use **one client only** first.
Best pilot candidates:
- Holsen
- Fixguru

Pilot deliverables:
- one client folder
- one fetched Lark context pack
- one generated client narrative
- one generated account plan
- one publish-back workflow
- one CODEX handoff example if relevant

## Success criteria for pilot
- no manual context upload to ChatGPT project required
- Claude Code / Codex can fetch source context from Lark reliably
- generated doc is better/faster than current workflow
- updated doc can be pushed back to Lark cleanly
- repo structure is understandable to another PM, not just Gareth

## Recommendation
Do this as a **new team repo**.

Best repo framing:
- `maia-context-repo`
- or `mindhive-context-layer`

My recommendation: **`maia-context-repo`**

It is clear, practical, and directly tied to the use case.

## Final point
The win is not “we have another repo.”
The win is:
- Lark stays the source
- agents get a clean working surface
- outputs become versioned and reusable
- CODEX gets better upstream inputs

That is the actual systems improvement.

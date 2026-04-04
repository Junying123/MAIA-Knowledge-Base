---
owner: Gareth
status: approved
last_reviewed: 2026-04-01
---

# PM E2E Workflow

This document describes the end-to-end PM workflow at MAIA/Mindhive — from a new client lead to feature shipped and live.

> This is a living process. Stages can overlap and adapt to situations. Use judgment.

---

## WHO DOES WHAT

| Role | Responsibility |
|------|---------------|
| **CEO** | Final decisions on major deals, SOW sign-off |
| **CTO** | Technical decisions, architecture, feasibility |
| **Tech Lead** | Leads product + tech teams, reviews specs, unblocks devs |
| **Chatbot Lead** | Leads chatbot team (4 people) |
| **Frontend Lead** | Leads frontend team (2 people + 1 intern) |
| **Backend Lead** | Leads backend team (6 people, 5 full-time + 2 intern) |
| **Senior PM (GTM Lead)** | Leads GTM + sales team, not day-to-day PM work |
| **Junior PMs (4)** | Each manages multiple clients in parallel at different stages |
| **GTM Team** | Pre-sales, client acquisition, proposals |
| **Hermes (AI Orchestrator)** | Leads coding agents (Codex, Claude Code, Cursor) to maximize PM productivity |

---

## THE 3 REPOS — WHAT GOES WHERE

### MAIA KB — PM Internal Workspace
- Requirement gathering docs, meeting notes
- User stories, use cases
- UAT forms, test scenarios
- SOW drafts, client communications
- For: PM team only

### MAIA CODEX — Feature Spec Repo for Dev
- Formalized feature requests: `prd.md`, `design.md`, `tasks.md`, `changelog.md`
- Standardized, detailed specs
- Dev team reads via GitHub
- Their AI coding agents (Codex, Claude Code, Cursor) work from MAIA CODEX
- For: Dev team + coding agents

### LARK — Human-Readable Briefing for Dev
- PM converts MAIA CODEX specs into readable Lark docs
- Dev team reads LARK for context
- MAIA CODEX is the source of truth for their AI agents

---

## THE 9-STAGE E2E PM WORKFLOW

```
┌─────────────────────────────────────────────────────────────┐
│  STAGE 1: GTM PROPOSAL                                     │
│                                                             │
│  GTM team sends proposal to client                         │
│  GTM briefs PM (handover)                                  │
│  PM receives: company profile, pain points, proposed       │
│  solution, commercial terms                                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 2: REQUIREMENT GATHERING (RG)                       │
│                                                             │
│  PM runs discovery call with client                        │
│  - Understand current business workflows                    │
│  - Pain points in detail                                   │
│  - What they need and want to achieve                      │
│                                                             │
│  PM documents in MAIA KB:                                  │
│  - Meeting notes                                           │
│  - RG output document                                      │
│  - Discovery call questionnaire                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 3: FIT ASSESSMENT + SOLUTION PROPOSAL              │
│                                                             │
│  PM assesses: can MAIA solve their problem?                │
│  - Strong fit → propose solution                           │
│  - Partial fit → propose what's possible                   │
│  - Poor fit → park or disqualify                          │
│                                                             │
│  Discuss with Tech Lead, CTO, CEO                          │
│  Decision gates: Proceed / Park / Reject                    │
│                                                             │
│  Reject criteria:                                          │
│  - Very customized + low impact + high effort = reject    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 4: DEMO (optional)                                 │
│                                                             │
│  Depends on client — if they need to see it working        │
│  PM prepares demo scenarios using client's data             │
│  Run demo with client                                      │
│  Demo successful → move to SOW                             │
│  Demo not successful → iterate on solution or park         │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 5: SOW (Statement of Work)                         │
│                                                             │
│  PM drafts SOW covering:                                   │
│  - Scope (what's included and excluded)                    │
│  - Timeline and milestones                                 │
│  - Deliverables                                            │
│  - Commercial terms                                        │
│                                                             │
│  Review with Tech Lead, CTO, CEO                           │
│  Client may request tweaks → multiple SOW versions         │
│  Client signs final SOW                                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 6: FEATURE SPEC (MAIA CODEX)                       │
│                                                             │
│  PM writes detailed feature spec in MAIA CODEX:            │
│  - prd.md — product requirements document                   │
│  - design.md — design and architecture                      │
│  - tasks.md — work breakdown                               │
│  - user stories + acceptance criteria                       │
│                                                             │
│  Push to GitHub                                            │
│  Dev team checks MAIA CODEX for latest updates             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 7: BRIEF DEV (via LARK)                            │
│                                                             │
│  PM converts MAIA CODEX spec → readable Lark doc          │
│  Dev team reads LARK for context                           │
│  Dev team uses their AI coding agents on MAIA CODEX        │
│                                                             │
│  Daily standup: PM reports progress per client              │
│  - Client A: what's the update? blocker? proposed solution │
│  - Client B: next                                           │
│                                                             │
│  Blockers → PM hosts discussion with PIC or Tech Lead     │
│  → Get clarity → Make decision → Continue                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 8: PM MANUAL TEST                                  │
│                                                             │
│  No QA team — PM tests manually                           │
│  Test based on client business scenarios                   │
│  Does feature work as specified?                           │
│                                                             │
│  Bug found → inform dev → dev fixes → PM re-tests         │
│  Repeat until no issues                                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 9: UAT WITH CLIENT                                 │
│                                                             │
│  PM runs UAT with client                                  │
│  Test case by test case                                    │
│  All test cases pass → client sign off                    │
│                                                             │
│  Bug found → inform dev → fix → re-UAT                    │
│  Client sign off → LAUNCH                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## STAGE TRIGGERS — WHEN TO MOVE FORWARD

| Stage | Gate | Who Decides |
|-------|------|-------------|
| RG → Fit Assessment | RG meeting done + notes completed | PM |
| Fit Assessment → Demo | Fit is strong + client wants demo | PM + client |
| Fit Assessment → SOW | Fit confirmed + demo successful (if needed) | PM + Tech Lead + CTO + CEO |
| SOW → Feature Spec | SOW signed by client | PM |
| Feature Spec → Brief Dev | Spec pushed to GitHub | PM |
| Brief Dev → Test | Dev delivers feature | PM |
| Test → UAT | PM confirms no blocking issues | PM |
| UAT → Launch | Client signs off | Client |

---

## REJECT CRITERIA

A feature or client request should be **rejected** if:
- Very customized feature
- Low impact (doesn't help other clients)
- High effort (takes significant dev time)

"We can revisit when..." is a valid park response.

---

## DAILY STANDUP FORMAT

PM hosts daily standup (recorded/transcribed).

**Per client, report:**
1. What's the update?
2. Any blockers?
3. Proposed solution
4. Next steps

Then move to next client.

**Blockers get escalated:**
- PM hosts discussion with PIC (person-in-charge)
- Tech Lead involved when needed
- Discussion → clarity → decision → action

---

## HOW CODING AGENTS HELP PMs

> PM is the orchestrator. Hermes (AI) leads the coding agents.

| Agent | Role | What They Do |
|-------|------|-------------|
| **Hermes (Me)** | Orchestrator + PM co-pilot | Draft docs, orchestrate other agents, track progress |
| **Codex** | Implementation | Code features, bug fixes, scripts |
| **Claude Code** | Architecture + review | Technical review, API design, code quality |
| **Cursor** | UI + local dev | Frontend work, UI tweaks, local testing |

PM focuses on: decisions, client interactions, strategic judgment.
Coding agents handle: execution, implementation, technical heavy-lifting.

---

## PM DAILY LOOP

```
START OF DAY
  │
  ├─ Check MAIA KB for updates
  ├─ Check GitHub/MAIA CODEX for dev progress
  ├─ Check client emails/messages
  │
  ├─ Execute PM work:
  │   ├─ Draft docs (RG, SOW, UAT forms, etc.)
  │   ├─ Brief dev via Lark
  │   ├─ Test features
  │   ├─ Run UAT with clients
  │   └─ Client communications
  │
  ├─ Delegate to coding agents (via Hermes)
  │   ├─ Codex → code tasks
  │   ├─ Claude Code → tech review
  │   └─ Cursor → UI work
  │
  ├─ Daily standup (if hosted that day)
  │   └─ Report per client: update, blocker, solution
  │
  └─ END OF DAY
      └─ Update MAIA KB with progress
```

---

## MULTI-CLIENT PARALLEL TRACKING

Each PM manages **multiple clients in parallel at different stages.**

Example:
```
PM Gareth
  ├─ Holsen: UAT (Stage 9)
  ├─ JDX: RG Done, Fit Assessment (Stage 3)
  ├─ Thermac: Awaiting docs (Stage 2)
  └─ Ming Medical: Pre-RG (Stage 1)
```

Each client moves through stages independently. PM context-switches between them daily.

---

## SEE ALSO

- [[00 - Home/Team & Org]] — team structure
- [[03 - Clients/Discovery Pipeline]] — where new leads come in
- [[02 - PM Playbook/Processes/Dev Handover Guide]] — how to brief dev
- [[02 - PM Playbook/Processes/Requirement Gathering Process]] — RG process
- [[02 - PM Playbook/Processes/QA & Scenario Testing Guide]] — testing approach

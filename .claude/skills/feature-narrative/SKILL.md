---
name: feature-narrative
description: >
  Writes a Feature Narrative document for a MAIA feature — a deep-dive document
  explaining what the feature is, why it exists, the before/after story, system
  design, enforcement logic, edge cases, and implementation priorities. Written
  for the dev team so they build the right thing, not just a file upload field.
  Use this skill whenever the user wants to document a feature for developers,
  write a feature deep-dive, explain a new feature request in detail, or produce
  a narrative for a client feature. Trigger on phrases like "write a feature
  narrative", "document this feature", "feature deep dive", "write up the
  [feature] narrative", "dev team brief for [feature]", "explain how [feature]
  should work", "write a narrative for the feature request".
---

# Feature Narrative Skill

Produces a Feature Narrative — a structured document that tells the dev team
what a feature actually is, why it must be built correctly, and exactly how it
should behave. The gold standard reference is the COA narrative at:
`03 - Clients/Active Cooking Clients/Holsen/Feature Requests/Feature Narrative/Feature Narrative -.md`

Read it before writing. That document's tone — direct, opinionated, scenario-driven —
is the standard to match.

---

## Phase 1 — Critical Intake Interview (do this before writing anything)

Do not start writing the narrative until you have enough to write it well.
A vague input produces a vague narrative. A vague narrative misleads the dev team.

When the user gives you a feature request, assess what you have against this checklist.
For every item that is missing or unclear, ask directly — one focused question at a time,
not a wall of questions. Group related gaps into a short, numbered list if there are many.

**Minimum required before starting:**

| # | What you need | Why it matters |
|---|---|---|
| 1 | Feature name | Obvious |
| 2 | Feature type (`compliance` / `workflow` / `ui` / `integration`) | Determines which blocks to include |
| 3 | Who experiences the pain today | Drives the Before MAIA persona and scenario |
| 4 | What specifically breaks without this feature | The uncomfortable truth section — must be concrete |
| 5 | What MAIA should do differently | The After MAIA section — system behaviour, not vague improvement |
| 6 | Whether enforcement/blocking is required | Determines if Enforcement Layer block is needed |

**Critical questions to ask if any of these are missing or thin:**

- *"Who is the persona in the Before MAIA story — what's their role and business context?"*
- *"Walk me through one specific scenario where this breaks today — what happens step by step?"*
- *"What should MAIA do when the condition isn't met — warn, block, or just log?"*
- *"Is this feature driven by a specific client requirement, or is it a general MAIA capability?"*
- *"Are there cases where the system should behave differently for different customers?"*
- *"What does a partial or incomplete version of this feature look like — and why is it dangerous?"*

Do not ask all of these at once. Read what the user gave you, identify the two or three
biggest gaps, and ask only about those. Once answered, reassess — ask the next round if
still needed. Stop asking when you have enough to write concretely.

**What you need from the user**

1. **Feature name** — what this feature is called
2. **Feature type** — one of: `compliance` | `workflow` | `ui` | `integration`
3. **Client context** — which client requested this, or is it a generic MAIA feature?
4. **Feature description** — what it does, even if rough notes
5. **Pain points** — what problem does this solve? What breaks today without it?
6. **Supporting docs** (optional) — PRD, user stories, transcript, feature request notes

Infer the feature type from context if not stated — compliance features have
enforcement logic, workflow features have step sequences, UI features are about
visibility, integration features connect systems.

---

## Feature type → which blocks to include

The narrative has a fixed spine (always required) and modular blocks (include based on type).

**Fixed spine — always included:**
- What This Feature Actually Is
- Why It Exists in MAIA Specifically
- Before MAIA — The Reality on the Ground
- After MAIA — What Changes
- Operational Impact
- Final Positioning — Non-Negotiable

**Block selection by feature type:**

| Block | compliance | workflow | ui | integration |
|---|---|---|---|---|
| Core System Design | ✓ | ✓ (lighter) | ✓ (config/display fields only) | ✓ |
| Enforcement Layer | ✓ | — | — | ✓ (failure modes) |
| Critical Edge Cases | ✓ | — | — | ✓ |
| End-to-End Flow | ✓ | ✓ | — | ✓ |
| Implementation Priorities | ✓ | ✓ (if phased) | — | ✓ |

When in doubt, include the block — it is easier to trim than to add back.

---

## Where to save the output

For client-specific features:
```
03 - Clients/Active Cooking Clients/[Client Name]/Feature Requests/Feature Narrative/
  └── Feature Narrative - [Feature Name].md
```

For generic MAIA features (not tied to a specific client):
```
01 - MAIA Product/[Workspace — Sales | Finance | Logistics]/
  └── Feature Narrative - [Feature Name].md
```

Check whether the `Feature Narrative/` folder already exists before saving.
If it doesn't, create it.

---

## How to write the narrative

### Tone and stance

Write as a product thinker who has seen the feature built badly before.
The narrative is not a requirements list — it is a persuasion document.
The dev team should finish reading it and understand exactly what goes wrong
if they take shortcuts, and exactly what the right implementation looks like.

Every section should earn its place. Cut filler. Name real things — real roles,
real tools (WhatsApp, Excel, Google Drive), real failure modes.

### The Before MAIA section is the most important

The pain story must be visceral. Use a named persona (Ah Hock works for most
SME manufacturing/distribution contexts). Walk through a specific scenario step
by step — what the sales person asks, what the warehouse checks, what they find,
what they send, what the customer says back. The consequences must cascade
logically: trust breakdown → production delay → return request → commercial
dispute → loss of account → legal exposure.

The "uncomfortable truth" closing paragraph must name the structural root cause,
not the human error.

### The After MAIA section mirrors the Before scenario

Replay the same scenario. Each step should directly resolve a failure mode from
the Before section. End with the dispute resolution proof point — one lookup,
full answer.

### System Design blocks

For data model tables: include field name, type, and description. Explain *why*
the data lives at this level (e.g., batch vs item vs order) — that is where most
bad implementations diverge from the correct one.

For the enforcement matrix: cover every condition including the happy path,
the blocked paths, and the fallback. Name the exception types that route to
MAIA's ToDo system.

For pseudocode: write the resolution logic as a deterministic sequence.
It should read as something a developer could implement directly.

### Edge cases

Only include edge cases that will actually hit in production. For each one:
name the scenario, explain why a naive implementation breaks, and state the
correct pattern. The "implementation shortcut that kills this" framing from
the COA narrative is the right model.

### Final Positioning

Close with the "This is not X / This is Y" structure. The negative framing
(what a bad implementation looks like) comes first, the correct framing second.
End with: "Build the real one."

---

## Output format

Use the template at:
`02 - PM Playbook/Templates/[Template] Feature Narrative.md`

Copy its structure exactly. Fill all `[brackets]`. Delete all italicised
guidance notes before saving. Keep the HTML comment block markers
(`<!-- OPTIONAL BLOCKS -->`) only if the document is a draft — remove them
from the final version.

YAML frontmatter required:
```yaml
---
owner: [PM name]
status: draft
last_reviewed: [today YYYY-MM-DD]
feature_type: [compliance | workflow | ui | integration]
lark_url:
---
```

---

## Phase 3 — Gap Audit (do this after writing, before saving)

After producing the draft, audit it against the checklist below.
For every item that fails, do one of two things:

- **If you can resolve it yourself** — fix it in the draft before presenting it to the user.
- **If you need the user to provide missing information** — flag it explicitly in a
  `## ⚠️ Gaps Still Open` section appended to the bottom of the draft (remove this
  section before final save once all gaps are resolved).

Present the gap list to the user as direct, prioritised questions — not a passive list.
Tell them *why* each gap matters and *what will go wrong* in the narrative without it.

**Gap audit checklist:**

| Check | Pass condition | If failing |
|---|---|---|
| Before MAIA persona is named and specific | Real name, real business scale, real role | Ask: "Who is Ah Hock equivalent for this feature?" |
| Before MAIA scenario is one concrete story | Single transaction, step by step, not abstract | Ask: "Walk me through one real example of this breaking" |
| Consequences cascade logically | Trust breakdown → delay → dispute → exposure | Rewrite or ask for the downstream chain |
| After MAIA steps map to system components | Each step references a data model, config field, or logic block | Rewrite or ask: "What does MAIA actually do at this step?" |
| Enforcement conditions are exhaustive | Happy path + all block conditions + fallback | Ask: "What should happen when X is missing?" |
| Edge cases are production-realistic | Not academic — named, specific scenarios that will actually happen | Ask: "Has this type of scenario come up in any client delivery?" |
| Final Positioning is concrete | Names the wrong implementation and the correct one | Rewrite if still generic |
| No placeholders remain | Zero `[brackets]` left unfilled | Fill or flag every remaining one |

**Mandatory gap statement format** (if gaps remain after draft):

```
## ⚠️ Gaps Still Open

The narrative draft is complete but the following sections need your input
before this document is ready for the dev team:

1. **[Section name] — [gap description]**
   Why this matters: [one sentence on what breaks in the narrative without it]
   What I need from you: [specific question]

2. **[Section name] — [gap description]**
   ...
```

Do not present the narrative as done if gaps remain. Present the draft AND the gap list together.

---

## Quality checks

Before saving:
- [ ] Every `[bracket]` placeholder has been filled
- [ ] All italicised guidance notes deleted
- [ ] All `## ⚠️ Gaps Still Open` sections removed (gaps resolved)
- [ ] Feature type matches the blocks included
- [ ] Before MAIA section uses a named persona and a specific scenario
- [ ] After MAIA section replays the same scenario step by step
- [ ] System Design subsections are numbered and have data model tables where applicable
- [ ] Enforcement matrix covers all conditions (happy path + all block conditions)
- [ ] Edge cases are production-realistic, not academic
- [ ] Final Positioning uses "This is not / This is" structure
- [ ] YAML frontmatter complete
- [ ] "See Also" links to the COA reference example and the template

---

## See Also

- COA reference: `[[03 - Clients/Active Cooking Clients/Holsen/Feature Requests/Feature Narrative/Feature Narrative -]]`
- Template: `[[02 - PM Playbook/Templates/[Template] Feature Narrative]]`
- Feature request intake: `[[09 - Intake & Triage/Request Intake Inbox]]`

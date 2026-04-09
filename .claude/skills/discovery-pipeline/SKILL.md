---
name: discovery-pipeline
description: >
  Runs the full post-discovery output pipeline for a client requirement gathering
  session. Chains two skills in sequence: (1) req-gathering-output — produces the
  internal Requirement Gathering Output and the client-facing Customer Narrative;
  (2) feature-narrative — produces a Feature Narrative for each custom feature
  identified that needs a dev-team brief. Use this skill whenever a PM has just
  finished a discovery or requirement gathering session and needs to produce all
  output documents in one go. Trigger on phrases like "run the post-discovery
  pipeline", "process discovery for [client]", "full output after discovery",
  "run the pipeline for [client]", "discovery pipeline", "post-RG pipeline",
  "process everything after the meeting".
---

# Discovery Pipeline Skill

Orchestrates the full post-discovery output workflow in two stages:

**Stage 1** → `req-gathering-output` skill
Produces the internal Requirement Gathering Output and the client-facing Customer Narrative.

**Stage 2** → `feature-narrative` skill (once per custom feature)
Produces a Feature Narrative for each custom/complex feature that needs a dev-team brief.

Read both child skills before starting so you understand what each needs.

---

## What you need before starting

1. **Client name** — as it appears in the KB folder
2. **Transcript file path** — Fireflies export or equivalent
3. **Meeting date** — YYYY-MM-DD
4. **Supporting docs** (optional) — GTM proposal, discovery questionnaire, prep notes

If missing, ask for transcript path and client name at minimum. The pipeline cannot
start without these two.

---

## Stage 1 — Requirement Gathering Output

Invoke the `req-gathering-output` skill.

Pass it:
- Client name
- Transcript file path
- Meeting date
- Any supporting docs provided

The skill will produce two files:
- `Requirement Gathering Output - [Client] - YYYY-MM.md`
- `Customer Narrative - [Client].md`

Both saved to:
```
03 - Clients/[Active or Discovery subfolder]/Requirement Gathering/[Client Name]/Prep After Requirement Gathering/
```

**Do not proceed to Stage 2 until Stage 1 is complete and both files are saved.**

---

## Checkpoint — Feature Triage

After Stage 1 completes, read the Requirement Gathering Output you just produced.

Extract all items listed under **Captured Requirements** and **Gaps & Open Questions**.

Classify each requirement as one of:

| Type | Definition | Needs Feature Narrative? |
|---|---|---|
| **Standard module** | Already exists in MAIA (e.g. Sales Order, Invoice, Delivery Note) | No |
| **Config/preference** | Existing module with a customer-specific setting | No |
| **Custom feature** | New capability not currently in MAIA — requires dev work | **Yes** |
| **Integration** | Connects MAIA to an external system | **Yes** |
| **Unclear** | Ambiguous — needs scoping before classification | Ask user |

Present the triage result to the user as a table:

```
## Feature Triage — [Client Name]

| # | Feature | Type | Narrative Needed? |
|---|---------|------|-------------------|
| 1 | [Feature name] | [Type] | Yes / No / Unclear |
| 2 | ... | | |
```

Then ask:
> "These are the features I've identified that need a Feature Narrative. Does this
> list look right? Are there any to add, remove, or reclassify before I proceed?"

**Wait for the user to confirm the list before starting Stage 2.**

If the user marks any as "Unclear", ask one focused question per unclear item to
classify it before proceeding.

---

## Stage 2 — Feature Narratives

For each feature confirmed as needing a narrative, invoke the `feature-narrative` skill.

**Before invoking for each feature, pass this context explicitly:**

```
Client: [Client Name]
Feature: [Feature Name]
Feature type: [compliance | workflow | ui | integration — inferred from triage]
Pain points captured: [paste the relevant pain points from the RG Output]
Requirements captured: [paste the relevant requirements from the RG Output]
Supporting context: [any relevant gaps or open questions from the RG Output]
```

The `feature-narrative` skill will run its own Phase 1 intake interview if context
is still thin — let it ask its questions. Answer from the RG Output where possible.
If the RG Output doesn't have the answer, surface the question to the user.

Run one feature at a time. Confirm each narrative is saved before starting the next.

Save each narrative to:
```
03 - Clients/[Active or Discovery subfolder]/[Client Name]/Feature Requests/Feature Narrative/
  └── Feature Narrative - [Feature Name].md
```

If the `Feature Narrative/` folder does not exist, create it.

---

## Stage 2 completion — Update the Artefact Tracker

After all narratives are saved, return to the Requirement Gathering Output file
and update the **Artefact Tracker** table:

For each feature that now has a narrative, add a row (or update the existing one):

| Artefact | Owner | Status | Due |
|---|---|---|---|
| Feature Narrative — [Feature Name] | [PM] | complete | [today] |

Add a wikilink to each narrative in the tracker:
```
[[Feature Narrative - [Feature Name]]]
```

---

## Pipeline completion summary

When all stages are done, present a summary to the user:

```
## Pipeline Complete — [Client Name]

**Stage 1 — RG Outputs**
- ✓ Requirement Gathering Output → [[RG Output file]]
- ✓ Customer Narrative → [[Customer Narrative file]]

**Stage 2 — Feature Narratives**
- ✓ Feature Narrative — [Feature 1] → [[Feature Narrative - Feature 1]]
- ✓ Feature Narrative — [Feature 2] → [[Feature Narrative - Feature 2]]
- ⚠️ Feature Narrative — [Feature 3] → Gaps still open (see ⚠️ section in file)

**Open items**
- [Any gaps still flagged in narratives that the user needs to resolve]
- [Any unclear features that were deferred]
```

---

## See Also

- `req-gathering-output` skill — Stage 1 child skill
- `feature-narrative` skill — Stage 2 child skill
- Template: `[[02 - PM Playbook/Templates/[Template] Feature Narrative]]`
- Feature request intake: `[[09 - Intake & Triage/Request Intake Inbox]]`

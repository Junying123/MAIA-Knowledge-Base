---
name: dev-handover
description: "Generate a developer handover document from user stories and acceptance criteria. Use when a feature is ready for development. Triggers on: /dev-handover, create dev handover, handover to dev, ready for development, write handover doc."
user-invocable: true
---

# Dev Handover Generator

Produces a complete, implementation-ready developer handover document from one or more user stories in the KB.

## Steps

1. **Identify the user story / feature** from the user's input.
   - If a file path is provided, read it directly.
   - If a feature name is given, use Grep to find the relevant file(s).

2. **Read the user story file(s)** using Read tool.

3. **Read the Dev Handover Guide** using Read tool:
   - Path: `02 - PM Playbook/Processes/Dev Handover Guide.md`
   - Use as the output structure reference.

4. **Read Known Limitations** using Read tool:
   - Path: `01 - MAIA Product/Overview/Known Limitations.md` (or `04 - QA & Known Issues/Known Bugs & Limitations.md`)
   - Flag any limitations that intersect with the feature.

5. **Read related product docs** using Grep + Read:
   - Search `01 - MAIA Product/` for pages related to the feature's workspace/module
   - Pull in relevant workflow context (e.g. Quote-to-Cash if it's a sales feature)

6. **Generate the handover document** with these sections:

   ```markdown
   ## Feature Summary
   One-paragraph description of what is being built and why.

   ## User Stories
   Full list of stories in scope, with IDs and acceptance criteria.

   ## Business Rules & Constraints
   Rules the dev must implement — pulled from acceptance criteria + product docs.

   ## MAIA Context
   - Which workspace this affects (Sales / Finance / Logistics)
   - Which ERPNext DocTypes are involved
   - Known limitations that intersect with this feature

   ## Edge Cases & Gotchas
   - Known limitations or bugs that might affect implementation
   - Boundary conditions from acceptance criteria

   ## Out of Scope
   Explicitly what is NOT being built.

   ## Open Questions
   - [ ] Question — Owner: [Name] — Needed by: YYYY-MM-DD

   ## Acceptance Sign-Off Criteria
   How PM will verify the feature is complete.

   ## Test Scenarios
   Link to or inline the QA scenarios for this feature.
   ```

7. **Apply KB standards:**
   - YAML frontmatter: `owner: Gareth`, `status: draft`, `last_reviewed: today`
   - Wikilinks for all referenced KB pages
   - Tag with `#development` and the relevant workspace tag

8. **Save to:** `02 - PM Playbook/` or the relevant client folder if client-specific.

9. **Report:** List any open questions that must be resolved before dev starts. Flag these clearly.

## Usage

```
/dev-handover "Holsen — Credit Note Partial Returns"
/dev-handover 03 - Clients/Holsen/Feature Requests/Holsen Feature Requests - 5 March Training.md
```

## Rules

- Do not invent MAIA features or behaviours — only document what exists in the KB
- Every open question must have an owner and a due date
- If acceptance criteria are missing or vague, list them as open questions — do not assume

---
name: prioritize-features
description: "Score and rank features in the Feature Gap Tracker using RICE methodology. Use when planning the backlog, prioritising feature requests, or preparing roadmap reviews. Triggers on: /prioritize-features, prioritize backlog, RICE score features, rank feature requests, backlog grooming."
user-invocable: true
---

# Feature Prioritizer

Reads the Feature Gap Tracker and client feature request files, calculates RICE scores, and outputs a ranked priority backlog.

## RICE Scoring Reference

| Component | What It Measures | Scale |
|---|---|---|
| **R**each | How many clients are affected | 1 = one client, 3 = all clients |
| **I**mpact | Severity of the problem | 1 = low, 2 = medium, 3 = high, 5 = critical blocker |
| **C**onfidence | How sure we are about R and I | 0.5 = low, 0.8 = medium, 1.0 = high |
| **E**ffort | Dev effort in person-weeks | Estimate conservatively |

`RICE = (Reach × Impact × Confidence) / Effort`

## Steps

1. **Read the Feature Gap Tracker** using Read tool:
   - Path: `04 - QA & Known Issues/Feature Gap Tracker.md`
   - Extract all features with their current status and descriptions

2. **Read all client feature request files** using Glob + Read:
   - Pattern: `03 - Clients/*/Feature Requests/*.md`
   - For each feature in the Gap Tracker, count how many clients have requested it (Reach)

3. **Read Known Limitations** using Read tool:
   - Path: `01 - MAIA Product/Overview/Known Limitations.md`
   - Use status (🔴 CRITICAL / 🟡 MEDIUM) to inform Impact scores

4. **Score each feature:**
   - **Reach:** Count distinct clients who requested it (from step 2)
   - **Impact:** Use Known Limitations status if available; otherwise infer from description
     - 🔴 CRITICAL = 5, 🟡 MEDIUM = 3, not in Known Limitations = 2
   - **Confidence:** 1.0 if multiple clients confirmed, 0.8 if one client, 0.5 if inferred
   - **Effort:** Use any effort estimates in the Gap Tracker; default to 2 if not specified

5. **Calculate RICE score** for each feature.

6. **Output ranked backlog:**

   ```markdown
   # MAIA Feature Backlog — Prioritised by RICE
   Generated: YYYY-MM-DD

   | Rank | Feature | RICE | R | I | C | E | Clients Requesting | Notes |
   |---|---|---|---|---|---|---|---|---|
   | 1 | Multiple Credit Notes per Invoice | 7.5 | 2 | 5 | 1.0 | 1 | Holsen, Fixguru | Known critical blocker |
   | 2 | ... | | | | | | | |
   ```

7. **Add a recommendations section:**
   - Top 3 features to tackle next and why
   - Any features that are actually Configuration (can be unblocked without dev)
   - Any features that are duplicates or can be consolidated

8. **Apply KB standards:**
   - YAML frontmatter: `owner: Gareth`, `status: draft`, `last_reviewed: today`
   - Tag with `#decision` and `#high-priority`

9. **Save to:** `07 - Decisions/Feature Backlog — [YYYY-MM-DD].md`

10. **Report:** Highlight the top 5 features and flag any where Effort is unknown (these need a dev estimate before the score is reliable).

## Usage

```
/prioritize-features
/prioritize-features --client="Holsen"   (only score Holsen-relevant features)
```

## Rules

- Do not invent effort estimates — if unknown, use 2 and flag it clearly as "estimate needed"
- If a feature appears in multiple client folders, count each as +1 to Reach
- Features with 🔴 CRITICAL status in Known Limitations always get Impact = 5
- Never change the status of the Feature Gap Tracker — output is read-only analysis

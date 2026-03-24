---
owner: Gareth
status: draft
last_reviewed: 2026-03-24
---

# Autoresearch macOS — Overnight AI Workflow Improver

> Use this tool to autonomously iterate on and improve the MAIA KB's AI prompts, CLAUDE.md instructions, and automation recipes overnight — with no manual prompt engineering effort.

## What It Is

**Autoresearch macOS** (`miolini/autoresearch-macos`) is a macOS port of Andrej Karpathy's `autoresearch` project. The original is designed to let an AI agent autonomously improve a neural network training setup overnight.

We adapt the same loop for a different purpose: **improving the AI workflow of this KB** — specifically the prompts, instructions, and recipes that make Claude Code more effective when working here.

**The loop, adapted for this KB:**

```
You edit program.md (what you want improved)
    ↓
Claude proposes a change to a KB AI artefact
(e.g. CLAUDE.md, a prompt in the AI Prompt Library, an automation recipe)
    ↓
Eval run: a fixed set of test KB tasks is executed with the new artefact
    ↓
Score computed: output quality, accuracy, format compliance
    ↓
Keep if better → discard if worse → repeat overnight (~100 iterations)
```

**Hardware required:** Apple Silicon Mac (M1/M2/M3/M4). No GPU needed for this use case — the loop is API-call-bound, not compute-bound.

---

## Setup

### 1. Install Prerequisites

```bash
# Install uv (fast Python package manager)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 2. Clone the Repo

```bash
git clone https://github.com/miolini/autoresearch-macos ~/autoresearch-macos
cd ~/autoresearch-macos
uv sync
uv run prepare.py   # one-time setup, ~2 min
```

### 3. Point It at KB Artefacts

The repo's `train.py` is the file the agent modifies. For KB use, we redirect the agent to modify KB AI artefacts instead. You do this through `program.md` — no code changes required.

---

## What You Can Improve With It

| Artefact to Optimise | Where It Lives | What "Better" Means |
|---|---|---|
| `CLAUDE.md` — AI assistant instructions | `/Users/garethng/Documents/MAIA Knowledge Base/CLAUDE.md` | Claude follows conventions more reliably, fewer format errors |
| AI Prompt Library | `02 - PM Playbook/Onboarding/05 - AI Prompt Library for PMs.md` | Prompts produce better first-draft output, fewer iterations needed |
| Automation recipes in Automation Master Guide | `02 - PM Playbook/Guides/Automation Master Guide.md` | Subagent/skill recipes produce correct KB-compliant output |
| Triage SOP prompt | `09 - Intake & Triage/Triage SOP.md` | Triage classifications match human decisions more often |

---

## How to Run an Experiment Session

### Step 1 — Write Your Research Goal in `program.md`

Open `~/autoresearch-macos/program.md` and describe what you want improved. Be specific.

**Example:**
```markdown
## Goal
Improve the CLAUDE.md instructions for this KB so that Claude Code:
- Produces YAML frontmatter with no missing fields on first attempt
- Always uses wikilinks [[Page Name]] instead of relative paths
- Never invents MAIA features not in the product spec

## Artefact to Modify
/Users/garethng/Documents/MAIA Knowledge Base/CLAUDE.md

## Eval Task Set
Run the 5 eval tasks in ~/autoresearch-macos/maia_kb_eval.md and score the output.

## Metric
Score 0-10 per task. Total = sum. Higher is better. Keep change if total improves.
```

### Step 2 — Create Your Eval Task Set

Create `~/autoresearch-macos/maia_kb_eval.md` with 5–10 representative KB tasks and their expected outputs. These act as your "golden dataset".

**Example eval tasks:**
```markdown
## Eval Task 1
Prompt: "Create a meeting notes page for a call with Acme Corp about their returns flow"
Expected: YAML frontmatter present, wikilinks used, status: draft, correct folder

## Eval Task 2
Prompt: "Triage this request: client wants to create multiple credit notes per invoice"
Expected: Classified as PRODUCT limitation, references Known Limitations page

## Eval Task 3
Prompt: "Write a user story for bulk invoice export"
Expected: Uses MAIA terminology from Glossary, correct template format
```

### Step 3 — Launch the Loop

Open the `~/autoresearch-macos` folder in Claude Code and prompt:

```
Have a look at program.md and kick off a new KB AI workflow improvement experiment.
The artefact to modify is the file named in program.md.
Use the eval tasks in maia_kb_eval.md to score each change.
Run until you've completed 10 experiments or found a net improvement of 2+ points.
```

Leave it running overnight. Each experiment takes ~5 minutes (fixed budget).

### Step 4 — Review in the Morning

Check `analysis.ipynb` (or just ask Claude to summarise the experiment log) to see:
- Which changes improved the score
- What the winning version of the artefact looks like
- What patterns emerged across iterations

**Before applying any change:**
- [ ] Review the proposed artefact change yourself
- [ ] Run the eval tasks manually on the winning version
- [ ] Confirm the change doesn't break existing automations
- [ ] Update `last_reviewed` date in any modified KB files

---

## Expected Performance

| Metric | Value |
|---|---|
| Experiments per hour | ~12 |
| Overnight experiments (8 hrs) | ~100 |
| Per-experiment budget | 5 min (fixed) |
| GPU required | No |
| Claude API calls per experiment | ~10–20 (eval tasks) |

*Cost note: At Claude API rates, 100 experiments × 20 calls × ~2K tokens ≈ $2–5 overnight. Negligible for the quality improvement gained.*

---

## Guardrails

- **Never auto-apply changes** — always review before updating any KB file
- **Keep a backup** — `git commit` your current artefact before starting a session
- **Eval tasks must be stable** — don't change `maia_kb_eval.md` mid-session or scores become incomparable
- **Don't run on client files** — only improve internal AI workflow artefacts, not client documentation

---

## Suggested First Experiment

If you're new to this, start here:

**Goal:** Improve the AI Prompt Library so prompts produce better first-draft quality.

1. Set `program.md` goal to: *"Improve prompts in `05 - AI Prompt Library for PMs.md` so each prompt produces KB-compliant output on the first try"*
2. Create 5 eval tasks based on the most-used prompt types (user stories, meeting notes, gap analysis)
3. Run for 2 hours (~24 experiments)
4. Review and apply the best-scoring prompt improvements

---

## Source Repositories

- macOS fork (use this): [miolini/autoresearch-macos](https://github.com/miolini/autoresearch-macos)
- Original (NVIDIA only): [karpathy/autoresearch](https://github.com/karpathy/autoresearch)

---

## See Also

- [[Automation Master Guide]] — Full list of KB automations and subagents
- [[CLAUDE.md]] — Current AI assistant instructions (primary improvement target)
- [[05 - AI Prompt Library for PMs]] — Prompt library (secondary improvement target)
- [[04 - AI + KB Workflow for PMs]] — How the team uses AI today

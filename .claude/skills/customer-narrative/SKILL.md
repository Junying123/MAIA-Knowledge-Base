---
name: customer-narrative
description: >
  Writes a Customer Narrative document for a MAIA prospect or active client —
  a client-facing transformation story that covers who they are, the pain they
  carry today, how MAIA changes their operations, a feature deep dive, scope
  summary, and design principle. Use this skill whenever the user wants to
  produce a customer narrative, write up a discovery output for a client,
  create a sales document for a prospect, or document the before/after story
  for a client. Trigger on phrases like "write a customer narrative", "write
  the narrative for [client]", "customer story for [client]", "post-discovery
  write-up", "client narrative doc".
---

# Customer Narrative Skill

Produces a Customer Narrative — a client-facing document that tells the full
transformation story: who the client is, the operational pain they carry today,
what changes after MAIA, a feature deep dive, and a scope summary.

The template lives at:
`02 - PM Playbook/Templates/[Template] Customer Narrative.md`

Read it before writing. Follow its section order exactly.

---

## Phase 0 — Request Customer Background (do this first, before anything else)

Before asking any questions or writing anything, request the customer profile or
background document from the user. This is the backbone context that everything
else builds on.

Say something like:

> Before I start, please share the customer background or profile — this can be:
> - A requirement gathering transcript or session notes
> - An existing customer profile or discovery doc
> - Raw notes from calls, emails, or internal discussions
> - Any combination of the above
>
> Once I have this, I'll read through it and only ask follow-up questions for
> what's still missing.

**If the user has already provided context** (e.g. pasted notes, attached a doc,
or referenced a file path) — skip Phase 0 and go straight to Phase 1.

Do not proceed to Phase 1 until background context has been received.

---

## Phase 1 — Critical Intake Interview (do this before writing anything)

Do not start writing until you have enough to write it well.
A vague input produces a vague narrative. A vague narrative loses the client.

Read the customer background provided in Phase 0 first. Extract everything you
can from it. Then assess what's still missing against this checklist.
For every item that is missing or unclear, ask directly — one focused question at a time,
not a wall of questions. Prioritise by what is most blocking. Stop asking when you have
enough to write concretely.

**Mandatory — writing is blocked until these are provided:**

| # | What you need | Why it matters |
|---|---|---|
| 1 | Client name (legal + short form) | Used throughout the document |
| 2 | Tagline (~5 words: the transformation) | Sets the tone for the entire document |
| 3 | Company overview: founded, HQ, core business model | "Who [Client] Is" section — paragraph 1 |
| 4 | Business arms (2–3) and how they interact | Paragraph 2 — explains the operational split |
| 5 | Scale signals: team size, order volumes, named clients or contracts, milestones | Paragraph 3 — credibility and stakes |
| 6 | Where MAIA applies out-of-the-box vs where custom work is needed | Paragraph 4 — sets up the whole document |
| 7 | At least 3 pain areas, each with: the scene, the friction, and cost in numbers or human terms | "Before MAIA" section — minimum 3 pain areas needed |
| 8 | At least 2 "After MAIA" role scenarios (role + what they do in MAIA + what changes) | "After MAIA" section — minimum 2 scenarios needed |
| 9 | At least 2 features in scope with: what it does, what it won't do, why it matters for this client | "Feature Deep Dive" section |

**Critical questions to ask if any of these are missing or thin:**

- *"What does [Client] do — what's the core business model and how do they make money?"*
- *"What are the two or three major parts of their business? How do they feed each other?"*
- *"Give me scale: how many people, what's their order or job volume, who are their key clients?"*
- *"Which part of their operation is out-of-the-box MAIA and which needs custom build?"*
- *"Walk me through one specific scenario where their current process breaks — what happens?"*
- *"Who carries the burden when things go wrong — what's the actual day-to-day cost?"*
- *"Which features are in scope for Phase 1? What will each one actually do for this client specifically?"*
- *"What are we deferring to Phase 2 — and why?"*
- *"Are there any open questions from the requirement gathering session that aren't resolved yet?"*

Do not ask all of these at once. Read what the user gave you, identify the two or three
biggest gaps, and ask only about those. Once answered, reassess — ask the next round if
still needed.

---

## Phase 2 — Write the Narrative

Follow the template section order exactly:

### 1. Who [Client] Is

Four paragraphs:
- **P1 — Company overview:** When founded, where headquartered, what they do, core business model.
- **P2 — Business arms:** The 2–3 major parts of the business. How they interact or feed each other.
- **P3 — Scale and credibility:** Team size, order volumes, named clients or contracts, geographic reach, notable milestones.
- **P4 — Where MAIA matters most:** Identify which part runs on standard MAIA modules vs where custom capability is needed. This paragraph sets up the whole document — make it specific.

### 2. Before MAIA: How [Client] Operates Today

Open with 1–2 sentences framing the overall state — not a list. E.g. "[Client]'s [core function] runs on people, relationships, and experience. That's a strength. But the systems behind those people are fragmented, manual, and invisible to anyone who isn't directly involved."

Then 4–6 pain areas, each as its own contained story:

**For each pain area:**
- Evocative heading (e.g. "The Scheduling Black Box", not "Scheduling Issues")
- **P1 — Set the scene:** What is this process supposed to do? How does it work today?
- **P2 — Describe the friction:** What happens when things go wrong? Who carries the burden? What's the consequence — the risk, the time cost, the dependence on memory?
- **P3 — The specific pain:** In numbers or human terms. What does it feel like to work this way every day?

The pain story must be visceral. Name real tools (WhatsApp, Excel, Monday.com). Name real failure modes. The reader should feel why this cannot continue.

### 3. After MAIA: What Changes

Day-in-the-life scenarios. One paragraph per role. Write in third person, present tense.

**Structure per scenario:**
- Start with the role in bold: **A coordinator**, **A sales user**, **A customer**, **Management**, **Every user**
- What they open / see / do in MAIA
- What they no longer have to do
- What changes concretely — connect directly back to a pain area from the Before section

Each scenario should make a pain area from the Before section disappear.

### 4. Feature Deep Dive

Number each feature. Cover all features in scope, roughly in order of business importance.

**Structure per feature:**
- 1–2 sentences: what this feature is and why it matters specifically for this client
- **What it does:** Concrete and specific — name the fields, the views, the outputs, the data surfaced, what it links to, what documents it generates
- **What it won't do:** Honest scope boundaries — what the system won't automate, won't enforce, won't do without human input. Critical for trust and expectation management.
- **Why it matters:** Connect directly to the specific pain it solves. Reference the client's current tool, their specific workflow, their real numbers. No generic statements here.

### 5. Scope Summary

Four subsections:
- **Included:** Bullet list — feature + one-line description of what is built and delivered
- **Designed For, Not Included (Phase 2):** Feature + why deferred + note if Phase 1 architecture is designed to extend into this
- **Requires Clarification:** Open questions from the RG session that need answering before scope is finalised
- **Not in Scope:** Clean bullet list of what's explicitly excluded

### 6. The Design Principle

Three paragraphs:
- **P1 — MAIA's philosophy for this client:** MAIA handles the grunt work — parsing, surfacing, organising, generating, triggering — while humans stay in the driver's seat for every decision that matters.
- **P2 — The client's growth story:** Where they started, how far they've come, the gap between their operational ambition and current infrastructure. Specific to this client — reference their founding, their scale, their key contracts.
- **P3 — What the engagement delivers:** The specific capabilities, named concretely. Frame it as the foundation that makes everything else possible.

Close with:
`_MAIA structures the workflow. Humans remain the decision-makers._`

---

## Phase 3 — Gap Audit (mandatory before saving)

After writing the draft, audit it against the checklist below.
For every gap found:
- **If you can resolve it yourself** — fix it before presenting to the user.
- **If you need the user to provide missing information** — flag it in a `## ⚠️ Gaps Still Open` section appended to the bottom of the draft.

Present gaps as prioritised questions. Tell the user *why* each gap matters and *what will go wrong* in the document without it.

**Gap audit checklist:**

| Check | Pass condition | If failing |
|---|---|---|
| No `[brackets]` remain | Zero unfilled placeholders | Fill or flag every remaining one |
| Tagline is written | 5-word transformation summary, not placeholder | Ask: "What's the one-line transformation for [client]?" |
| Pain headings are evocative | "Scheduling Black Box" not "Scheduling Issues" | Rewrite — generic headings kill the document's energy |
| Each pain area has 3 paragraphs | Scene / Friction / Cost in numbers or human terms | Ask for missing detail |
| Pain references real tools and failure modes | Names WhatsApp, Excel, specific role, specific consequence | Rewrite or ask: "What tool do they actually use for this today?" |
| After MAIA scenarios connect to named pain areas | Each scenario resolves a specific Before MAIA pain | Rewrite or ask: "Which pain area does this scenario address?" |
| Feature Deep Dive: every feature has all three subsections | What it does / What it won't do / Why it matters | Flag which subsections are missing for which features |
| "Why it matters" references client-specific context | Mentions their actual tool, workflow, or numbers — not generic | Ask: "What specifically does this replace for [client]?" |
| Scope Summary Included list matches Feature Deep Dive | Same features, same names | Fix any mismatches |
| Phase 2 items explain the deferral reason | States why deferred + whether Phase 1 architecture extends | Ask if not provided |
| Requires Clarification has real open questions | Not empty unless all questions are truly resolved | Ask: "Were there any unresolved questions from the RG session?" |
| Design Principle P2 is client-specific | References this client's founding, scale, key contracts | Rewrite if still generic |

**Mandatory gap statement format** (if gaps remain after draft):

```
## ⚠️ Gaps Still Open

The narrative draft is complete but the following need your input
before this document is ready to share:

1. **[Section name] — [gap description]**
   Why this matters: [one sentence on what breaks in the narrative without it]
   What I need from you: [specific question]

2. **[Section name] — [gap description]**
   ...
```

Do not present the narrative as done if gaps remain. Present the draft AND the gap list together.

---

## Where to save the output

For active clients:
```
03 - Clients/Active Cooking Clients/[Client Name]/
  └── Customer Narrative - [Client Name].md
```

For discovery/prospects:
```
03 - Clients/We're cooked discovery/[Client Name]/
  └── Customer Narrative - [Client Name].md
```

Check whether the client folder already exists. If it does not, create it.

YAML frontmatter required:
```yaml
---
owner: [PM name]
status: draft
last_reviewed: [today YYYY-MM-DD]
lark_url:
---
```

---

## Quality checks

Before saving:
- [ ] Every `[bracket]` placeholder filled
- [ ] All italicised guidance notes deleted
- [ ] All `## ⚠️ Gaps Still Open` sections removed (gaps resolved)
- [ ] Tagline written and specific
- [ ] "Who [Client] Is" — all 4 paragraphs present, paragraph 4 sets up the document
- [ ] "Before MAIA" — 4–6 pain areas, each with 3 paragraphs, evocative headings
- [ ] "After MAIA" — at least 4 role scenarios, each connected to a pain area
- [ ] "Feature Deep Dive" — every feature has What it does / What it won't do / Why it matters
- [ ] "Scope Summary" — all 4 subsections present, Included list matches Deep Dive
- [ ] "Design Principle" — P2 references this client's specific story
- [ ] Closes with `_MAIA structures the workflow. Humans remain the decision-makers._`
- [ ] YAML frontmatter complete

---

## See Also

- Template: `[[02 - PM Playbook/Templates/[Template] Customer Narrative]]`
- Req gathering output skill: `req-gathering-output` (run this first if transcript is available)
- Feature narrative skill: `feature-narrative` (for individual feature deep dives)

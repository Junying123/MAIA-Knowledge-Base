---
owner: Gareth
status: draft
last_reviewed: 2026-03-31
meeting_date: 2026-02-01
meeting_type: Internal
---

# Tech lead session — How PMs brief dev

Internal briefing for the PM team on **how information becomes work**, **how to brief engineering**, and **how to use LLMs and the MAIA Codex repo** without outsourcing judgment. Verbatim dialogue is in [[Tech lead — PM dev briefing session — Transcript]] (~0:00–~1:36 session).

> [!summary] Executive highlights
> - **Product owns *why* and *what*.** If those are muddy, **how** (execution) gets much harder — and you lose fidelity from “what you heard” to “what you brief.”
> - **Goal of a brief:** the **receiver understood**, not that the sender “delivered a document.”
> - **High-level brief first:** cheap, fast validation (value, vision fit, feasibility, multi-client relevance) → only then invest in **in-depth** specs (stories → functional reqs → PRD, iterative).
> - **LLMs multiply you** — good or bad. You are the **director**; scrutinize outputs. **Context in = quality out** (e‑invoicing question example).
> - **MAIA Codex:** `Intake` (one item per feature idea) → copy template to **work in progress**; preserve **raw request**; agent **question lists** surface blind spots (take to client or peers before dev).

## Session details

| Field | Value |
|-------|--------|
| **Date** | 2026-02-01 (confirm actual calendar date) |
| **Approx. duration** | ~1h 36m (timestamps in transcript 00:00 → 01:35:59) |
| **Format** | Internal training / live demo (Codex, repo walkthrough) |
| **Facilitator** | Tech lead (Johnson; per transcript) |
| **Attendees** | MAIA PM team [— add names] |

## Objectives (from the session)

1. Establish **why listening + processing** come before writing — poor capture → **high loss rate** when you later explain **why/what** to others.
2. Align on **product’s job:** own **why** and **what** at the start of the pipe; clarity improves engineering **how** and shrinks **briefed vs received** gap.
3. Define the **real success metric of a brief:** the listener **absorbed** the message (may require repetition, examples, Q&A — especially in a **mixed** audience).
4. Teach **when** to use **high-level** vs **in-depth** briefs and the **stage pipeline** (including technical solutioning / “product change” style alignment).
5. Introduce **practical workflow:** meeting capture tools, **MAIA Codex** intake/WIP pattern, **GitHub** for requirement history — with **LLM as assistant**, PM as **director**.

## Key ideas (by theme)

### Listening and “triggers”

- Requirements and ideas often show up as **passing signals**: side comments, links, “someone mentioned…”, overheard context — not only formal meetings.
- Build **awareness** (“sensors”) so valuable signals are **noticed** before they vanish and someone asks “remember when…”.
- **Retention is personal:** notes, **recordings**, meeting AI (e.g. **Fireflies** mentioned) — pick what gives *you* the best **retention** / lowest **loss rate**.
- **Story beat:** a conversation you under-processed can become critical **weeks later** (e.g. “100M project”); weak capture forces **another meeting**.

### Processing and triage

- After noticing a trigger, **process**: *Does this relate to my ownership / purview?*
- Triage by **impact** and **value**: ignore, **research more**, **delegate** (“important but not mine”), or escalate to **action**.
- This pipeline is how informal input eventually becomes **client-facing work** and **product tasks**.

### Product owns why and what

- **Product** is responsible for **why** we do something and **what** exactly must be done (execution **how** sits more with engineering).
- Team is moving toward an explicit **process** so skill varies less and you can **measure** quality **per step** and debug **which step failed** (vs vague “requirements unclear”).
- Common dev feedback: **requirements not clear** — framing this as often a **language / context** problem, not malice.

### True goal of a brief

- The brief is **not** “I sent information.” The brief succeeds when the **recipient received** it (observable: they can play back / act correctly).
- **Repetition** in multiple forms helps different people **catch** the same point; session itself modeled that.
- Clear **why + what** → better **how**; still not 100% determined by brief alone, but **good vs poor** briefs produce visibly different outcomes.

### High-level vs in-depth briefs

- **High-level** ≈ **summary**: sparse on specifics; may “warm up” / prep stakeholders before a deeper pass.
- **Primary use of high-level (before heavy spec work):** **bounce and validate** — e.g. Is it **valuable**? **Aligned** to product vision / delivery? **Valid** for other clients? **Technically feasible** / doable? Communicate simply to **clients, management, non-technical** audiences.
- **Speed as signal:** a high-level brief should be **fast** if you **listened and retained** the gist; if it’s slow, that’s a **self-check** on listening/retention.
- **High-level mastery is prerequisite** to credible **in-depth** work.
- **In-depth** is **wide and deep**, **time-consuming**, “expensive” — only after high-level boxes are checked and the idea is **ready**.
- **In-depth content** (as described): **domain knowledge** (product as domain bridge to tech), **user stories** with **clear outcomes**, **functional requirements** anchored to **current product reality** (don’t re-spec what already exists), then consolidation into **PRD**; expect **iteration** and **many reviewers** — blind spots and Q&A revise stories/FRs.

### Stages (pipeline)

1. **High-level brief** — validate / align cheaply.  
2. **In-depth brief** — stories, functional requirements, PRD, collaborative refinement.  
3. **Solutioning / technical alignment** — product + tech lead / architect: feasibility, **tradeoffs**, impact, timelines; may yield something like a **product change pack**; often **multiple** sessions.  
4. **Delivery + QA** — product compares **what was promised** vs **what shipped**.

### Product language vs engineering language

- PMs often speak **client / business** process and shorthand (e.g. PO, SO, CPO in context); devs may lack that **domain map** unless trained.
- Our devs have **some** business context, but **don’t assume** — bridge **domain** explicitly in briefs.
- **Know your audience**; in **1:1** with a known counterpart, adapt style; in **group** training, use **multiple** techniques.

### Communication tactics (modeled in the session)

- One idea, **several formulations**; **relatable examples** (e.g. client bulk upload, PO visual cue).
- **Questions** to surface current understanding; **group answers** reinforce learning; facilitator **consolidates** toward the intended takeaway.
- **End-of-section summaries** — “what you should take away” before moving on.
- **Explain the why** behind methods to drive **intrinsic** buy-in, not only compliance.

### LLMs and tooling

- **Do not** lead with tools **before** concepts — if you don’t know what a **good** brief is, the LLM becomes a **bad decision proxy**.
- Role: LLM as **worker** / drafter; PM as **director** — **review** everything you would sign as yours. Analogy: shipping bad code isn’t “the tool’s fault” if you didn’t **scrutinize**.
- **Meeting AI** summaries: useful, **not** always accurate — verify; critical details may be **missing**.
- **Preserve exact source phrasing** when possible (e.g. salesperson’s words on **bulk PO** workflow) to avoid **bias** and **lossy paraphrase**.
- **“LLMs multiply your ability”** — weak framing → **faster wrong answers**; example: **e-invoicing** prep where **goal** was client-specific MAIA handling, but **prompt/context** drifted to generic e-invoicing research → **question delta** vs what the client conversation needed.
- **MAIA Codex / repo workflow (as described):**
  - **`Intake`** — incoming feature ideas (can split multiple features into separate intake items).
  - Copy **template** from under Intake → **`work in progress`** (personal / trackable naming; don’t alter others’ areas).
  - Drop **raw** voice / transcript / typed request so the agent doesn’t over-compress nuance.
  - Agent produces **user stories**, **follow-up questions** (“why this question matters”) — use as **blind-spot radar**; some questions go **to the client** before deep dev work.
  - Full spec track includes **feature summary**, **user stories**, **functional requirements**, **PRD**, **Q&A**, **readiness / quality gates** — collaborative **human + agent** path.
  - **Validate the idea** conversationally **before** treating intake as final — likened to iterating a **business proposal** before “investment.”
- **Git / GitHub** for **version history** on requirements (not only code); **GitHub Desktop** suggested for ease; **commit** / **push** / **pull** / **fetch** explained at high level.
- **Not every agent question is equally important** — if you **know** something is **out of scope** from org context, record that; if **unsure**, **don’t** dismiss — **escalate** (peer / lead / client).

## Decisions / agreements (implicit)

- Product will work with a **defined process** and **checkpoints** (vs ad hoc only) to raise baseline quality and make failures **traceable** to a step.
- PMs pilot the **MAIA Codex Intake → WIP** pattern and **Git-backed** requirement docs; framework is **v1** — feedback expected.

## Action items

- [ ] Obtain **GitHub** access to the MAIA Codex / requirements repo (if not already); install **GitHub Desktop** (or agreed tool) and practice **pull / commit / push**.
- [ ] For the **next real feature idea**, copy an **Intake** template to **WIP**, paste **raw** request, run the agent workflow, and **review** output critically (director mindset).
- [ ] When the agent asks a question you **don’t** understand, **paste question ID / text** and resolve with **peer, lead, or client** before spec lock-in.
- [ ] **Confirm** actual **session date**, **time zone**, and **attendee list** in Session details above.
- [ ] Give **feedback** on the framework (templates, prompts, friction) to the tech lead after **hands-on** use.

## Parking lot / open questions

- **Git rollback / branch / cherry-pick** workflows — deferred until a concrete need; learn with LLM help when relevant.
- **Access / permissions** edge cases (e.g. forwarding GitHub emails, repo visibility) — follow up with whoever administers access.
- **Codex vs Cursor vs Copilot** cost/quality tradeoffs — personal choice; core behavior (director + good context) is tool-agnostic.

## Verbatim transcript

- [[Tech lead — PM dev briefing session — Transcript]]

## See Also

- [[02 - PM Playbook/Internal Sessions/Internal Sessions]]
- [[02 - PM Playbook/Processes/Dev Handover Guide]]
- [[02 - PM Playbook/Templates/[Template] Meeting Notes]]

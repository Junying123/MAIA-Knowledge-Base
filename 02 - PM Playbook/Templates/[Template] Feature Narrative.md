---
owner: [Name]
status: draft
last_reviewed: YYYY-MM-DD
feature_type: compliance | workflow | ui | integration
lark_url:
---

# 📄 [Feature Name]

## Feature Narrative — MAIA

> **How to use this template**
> - Sections marked `[REQUIRED]` appear in every Feature Narrative — do not skip them
> - Sections marked `[OPTIONAL BLOCK]` are modular — include only if the "include when" condition applies
> - Delete all guidance notes (lines in _italics_) before publishing
> - Copy this file, never edit it directly

---

## 🧠 What This Feature Actually Is `[REQUIRED]`

_Define the core artifact or concept in one sentence. What does it verify, certify, or enable? List 3–6 real-world use cases. Close with a bold positioning statement — what this IS, not just what it does._

A **[Feature Name]** is a **[type of artifact / process / record]** that:

- [Use case 1 — operational enablement]
- [Use case 2 — compliance or contractual purpose]
- [Use case 3 — audit or dispute resolution]
- [Use case 4 — legal or commercial protection]

This is not [common misconception — what people think this is].

This is **[true positioning — what it actually is and why it matters]**.

---

## 🔎 Why This Feature Exists in MAIA Specifically `[REQUIRED]`

_Connect to MAIA's design principles. Name the wrong mental model. State the correct frame explicitly._

MAIA's core design principle is that **[relevant principle — e.g., document trail continuity / enforcement over reminders / traceability at every step]**.

[2–3 sentences on how this feature fits that principle.]

If your team thinks of [Feature Name] as "[wrong implementation framing]," they've already built the wrong thing.

The correct frame is: **[correct frame — one sentence, bold]**. In MAIA, this means:

- [Implication 1]
- [Implication 2]
- [Implication 3]

---

## 📖 Before MAIA — The Reality on the Ground `[REQUIRED]`

_Story-driven. One persona, one scenario. Separate "what happens internally" from "what happens next." Close with the uncomfortable truth._

Meet [Persona Name — Ah Hock or appropriate persona].

[2–3 sentences: who they are, what their business looks like, why this problem is inevitable at their scale.]

That [knowledge / process / record] is not written down anywhere.

---

[Set the scene — a specific transaction or customer interaction that triggers the failure.]

Everything looks fine — until [triggering event]:

> _"[Customer complaint or request that reveals the gap.]"_

Now the breakdown starts.

---

### What happens internally:

[Person] asks [person]: _"[Question that reveals the process gap.]"_

[Person] checks [manual method — handwritten notes, email, WhatsApp, spreadsheet].

[Role] starts searching:

- [Place 1]
- [Place 2]
- [Place 3]

They find something that looks like [the document/record they need].

But no one can confirm:

- [Verification question 1]
- [Verification question 2]
- [Verification question 3]

They [action anyway], because [pressure — customer waiting, clock ticking].

---

### What happens next:

[Recipient] reviews it.

> _"[Response that reveals the error or mismatch.]"_

Now you've created, in sequence:

- A **[consequence 1]** — [brief explanation]
- A **[consequence 2]** — [brief explanation]
- A potential **[consequence 3]** — [brief explanation]
- Possible **[consequence 4]** — [brief explanation]

---

### The uncomfortable truth

This is not a one-off mistake by a careless employee.

This is a **system design failure** that will repeat every time this business scales:

- [Root cause 1]
- [Root cause 2]
- [Root cause 3]

Every additional [role], every new [hire], every additional [scale vector] makes this worse.

---

## 💡 After MAIA — What Changes `[REQUIRED]`

_Replay the same scenario step by step. Each step should correspond to a system or workflow change. End with the dispute resolution proof point._

Now replay the same scenario with MAIA implemented correctly.

---

### Step 1 — [Step Name]: [One-line description]

_What happens at this stage? Who does what? What does MAIA enforce or automate?_

[Step description — 2–4 sentences.]

This changes [the culture / the workflow / the enforcement model]: [why this step matters beyond the mechanics].

---

### Step 2 — [Step Name]: [One-line description]

[Step description.]

This is not [common shortcut or reminder-based approach].

This is **[what it actually is — system-enforced, automatic, deterministic]**.

---

### Step 3 — [Step Name]: [One-line description]

[Step description. If this step has a resolution sequence:]

1. [Action 1]
2. [Action 2]
3. [Action 3]

If [failure condition], the system does not [silent failure]. It [enforcement action].

No one is asked to remember. No one makes a judgment call.

---

### Step [N] — If a Dispute Happens: Immediate, Irrefutable Response

Your team opens [record] in MAIA and immediately sees:

- [Audit data point 1]
- [Audit data point 2]
- [Audit data point 3]

Your response:

> _"[One-sentence answer that resolves the dispute using the audit record.]"_

No ambiguity. No scrambling. No apologetic delay.

One lookup. Full answer.

---

<!--
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  OPTIONAL BLOCKS — include only what applies
  Delete any block that does not fit this feature
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

---

## 🧱 Core System Design `[OPTIONAL BLOCK]`

_Include when: the feature has a data model, configuration fields, or processing logic the dev team needs to implement correctly._

---

### 1. [Data Model Component]

_Include when: the feature introduces a new entity or extends an existing one with required fields._

Each **[Entity Name]** carries:

| Field | Type | Description |
|---|---|---|
| `[field_name]` | [Type] | [Description] |
| `[field_name]` | [Type] | [Description] |
| `[field_name]` | [Type] | [Description] |

Because [rationale — why this data lives here and not elsewhere].

---

### 2. [Key Non-Obvious Capability]

_Include when: there's a capability teams commonly skip that causes real commercial damage. Name it. Explain the binary failure without it._

[Capability name] allows you to:

- [Benefit 1]
- [Benefit 2 — commercial or compliance protection]

Without [Capability], your users face an impossible binary:

- [Option A] → [bad outcome A]
- [Option B] → [bad outcome B]

Both outcomes are bad. [Capability] resolves this at system level.

---

### 3. [Configuration / Preference Component]

_Include when: the feature has per-customer or per-entity configuration that the system must apply automatically (not rely on users remembering)._

Stored in [Location], applied automatically at [trigger point]:

| Field | Type | Options |
|---|---|---|
| `[field_name]` | [Type] | [Options] |
| `[field_name]` | [Type] | [Options] |

This integrates with MAIA's existing [architecture component] — [why it belongs there].

---

### 4. [Resolution / Processing Logic]

_Include when: the feature has a deterministic processing sequence (selection logic, validation, resolution engine). Write it as pseudocode._

On [trigger event], MAIA executes:

```
For each [item/line/record] in [document]:
  1. [Resolution step 1]
  2. [Check condition]
  3. [Select outcome based on preference/config]
  4. If [required] and no [valid resource] exists → BLOCK
  5. Log: [field], [field], timestamp, user
```

This is deterministic. It produces the same correct outcome every time.

---

## 🔒 Enforcement Layer `[OPTIONAL BLOCK]`

_Include when: the feature must gate or block a transaction if a condition isn't met. Compliance, approval, or certification features almost always need this._

Most systems treat [this feature] as optional. The result is inconsistent compliance — fine when someone remembers, broken when they don't.

MAIA enforces:

| Condition | System Behaviour |
|---|---|
| [Happy path — all conditions met] | [Auto-proceed] |
| [Condition invalid or expired] | [Block, surface exception] |
| [Condition missing entirely] | [Block, surface exception] |
| [Prerequisite not met] | [Block, surface exception] |
| [Not required for this customer/case] | [Skip or optional] |
| [Fallback available] | [Use fallback with warning] |

Enforcement is not optional. It is the difference between a [feature type] feature and [feature type] theatre.

**Exception routing** — when blocked, MAIA generates a task in the exception workspace:

- **Task type**: `[EXCEPTION_TYPE]`
- **Owner**: [Team responsible]
- **Linked document**: [Entity]
- **SLA**: [X hours] for [severity]
- **Resolution**: [What owner must do] → system re-validates → proceeds

---

## ⚠️ Critical Edge Cases `[OPTIONAL BLOCK]`

_Include when: the feature has data scenarios that will break a naive implementation in production. Each edge case should name the scenario, why it breaks, and what the correct pattern is._

Teams that skip these ship something that breaks silently in real operations.

---

### 1. [Edge Case Name]

[Scenario — what happens in real operations.]

[Why a naive implementation fails — what shortcut breaks it.]

Implementation shortcut that kills this: [bad pattern]. It must be [correct pattern].

---

### 2. [Edge Case Name — Partial / Split scenarios]

[Scenario — e.g., partial delivery, split batch, multi-stage fulfillment.]

This only works correctly if [condition met at right level/time], not [wrong level/time].

---

### 3. [Edge Case Name — Timing / Expiry]

[Scenario — validity windows, transit time, time-sensitive certification.]

MAIA must:

- [Required behaviour 1]
- [Required behaviour 2]
- [Required behaviour 3]

---

### 4. [Edge Case Name — Versioning / Revision]

[Scenario — records get revised, superseded, or corrected after the fact.]

If [record revised after action], the historical audit record must stay intact. Log as [new version], not an overwrite.

---

### 5. [Edge Case Name — Incomplete Upstream]

[Scenario — upstream step not completed before downstream action is needed.]

MAIA must surface this proactively — not just at [action]-time when it's already urgent.

---

## 🔁 End-to-End Flow `[OPTIONAL BLOCK]`

_Include when: the feature spans multiple documents, roles, or system steps and the full sequence isn't obvious from the After MAIA section alone._

```
[Upstream trigger]
  → [Step 1]
  → [Step 2]
  → [Record marked complete / gate passed]

[Config applied]
  → [Config field 1] = [value]
  → [Config field 2] = [value]

[Transaction created] → [Document generated]
  → [Engine fires]:
      [Check 1]? ✓
      [Check 2]? ✓
      [Preference resolved] → [Outcome selected]
      → [Execute / attach / record]
      → Log: [field], [field], timestamp, user

[Delivery / execution]
  → [Recipient] receives [output] with [artifact]

[Dispute (if any)]
  → One lookup → full answer
```

---

## 🧭 Implementation Priorities `[OPTIONAL BLOCK]`

_Include when: the feature requires phased delivery or the build sequence is non-obvious. Sequence correctly — do not skip ahead._

**Phase 1 — Data Model**
- [Entity + fields]
- [Config fields]
- [Child table or attachment structure]

**Phase 2 — Core Logic**
- [Processing / resolution logic]
- [Validation and fallback]
- [Logging with snapshot]

**Phase 3 — Enforcement**
- [Block conditions]
- [Exception generation → MAIA ToDo]
- [Override with audit log]

**Phase 4 — Document Integration**
- [Artifact visible from document record]
- [Output format / PDF bundle]
- [Dispatch channel]

**Phase 5 — Proactive Visibility**
- [Dashboard: missing or expiring items]
- [Pre-action status check in UI]
- [Digest signal]

**Phase 6 — Audit and Reporting**
- [Attachment history per document]
- [Version history per entity]
- [Compliance report]

---

<!--
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  END OF OPTIONAL BLOCKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-->

---

## 📊 Operational Impact `[REQUIRED]`

| Dimension | Before MAIA | After MAIA |
|---|---|---|
| [Dimension 1] | [Manual / memory-dependent] | [Automatic / system-enforced] |
| [Dimension 2] | [Ad hoc] | [Enforced] |
| [Dimension 3] | [Tribal knowledge] | [System-configured, always applied] |
| [Dimension 4] | [No enforcement] | [Blocked until compliant] |
| [Dimension 5] | [Scramble, delay] | [One lookup — full audit record] |

---

## 🧩 Final Positioning — Non-Negotiable `[REQUIRED]`

This is not:

> _"[Common oversimplification — what teams build when they miss the point.]"_

This is:

> **[Full correct positioning — what it does, how, what it protects, why it's first-class. One paragraph, bold.]**

If your team builds this as [wrong implementation], they have failed.

If they build it as [correct implementation — deterministic, enforced, auditable] — they have built something that actually protects the business.

Build the real one.

---

## See Also

- [[03 - Clients/Active Cooking Clients/Holsen/Feature Requests/Feature Narrative/Feature Narrative -]] — COA reference example (full compliance feature)
- [[02 - PM Playbook/Templates]] — All templates
- [[01 - MAIA Product/Overview]] — Product context

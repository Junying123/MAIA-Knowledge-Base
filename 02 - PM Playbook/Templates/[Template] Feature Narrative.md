---
owner: [Name]
status: draft
last_reviewed: YYYY-MM-DD
lark_url:
---

# 📄 [Feature Name]

## Feature Narrative — MAIA

---

## 🧠 What This Feature Actually Is

_Define the core artifact or concept in one sentence. Then answer: what does it verify, certify, or enable? List real-world use cases (3–6 bullets). Close with a bold positioning statement — what this IS, not just what it does._

A **[Feature Name]** is a **[type of artifact/process/record]** that:

- [Use case 1 — what it enables operationally]
- [Use case 2 — compliance or contractual purpose]
- [Use case 3 — audit or dispute resolution use]
- [Use case 4 — legal or commercial protection]

This is not [common misconception — what people think this is].

This is **[true positioning — what it actually is and why it matters]**.

---

## 🔎 Why This Feature Exists in MAIA Specifically

_Connect this feature to MAIA's core design principles. State the wrong mental model teams often bring to this feature. Then state the correct frame explicitly._

MAIA's core design principle is that **[relevant design principle — e.g., document trail continuity, traceability, enforcement over reminders]**.

[Explain how this feature fits that principle — 2–3 sentences.]

If your team thinks of [Feature Name] as "[wrong implementation framing]," they've already built the wrong thing.

The correct frame is: **[correct implementation frame — one sentence, bold]**. [Expand on what this means for MAIA's architecture — 3–5 bullets.]

- [Implication 1]
- [Implication 2]
- [Implication 3]
- [Implication 4]
- [Implication 5]

---

## 📖 Before MAIA — The Reality on the Ground

_Tell the story through the persona. Walk through one specific failure scenario. Separate "what happens internally" from "what happens next." Close with the uncomfortable truth._

Meet [Persona Name — use Ah Hock or a new persona as appropriate].

[2–3 sentences describing who they are, what their business looks like, and why this problem is inevitable for them.]

That [knowledge/process/record] is not written down anywhere.

---

[Set the scene: a specific transaction or customer interaction that triggers the failure.]

Everything looks fine — until [triggering event]:

> _"[Customer complaint or request that reveals the gap.]"_

Now the breakdown starts.

---

### What happens internally:

[Person] asks [person]: _"[Question that reveals the process gap.]"_

[Person] checks [manual method — handwritten notes, email, WhatsApp, spreadsheet]. [What they find — or don't find.]

[Role] starts searching:

- [Place 1]
- [Place 2]
- [Place 3]
- [Place 4]

They find something that looks like [the document/record they need].

But no one can confirm:

- [Verification question 1]
- [Verification question 2]
- [Verification question 3]
- [Verification question 4]

They [action anyway], because [pressure — customer waiting, clock ticking].

---

### What happens next:

[Recipient] reviews it.

> _"[Response that reveals the error or mismatch.]"_

Now you've created, in sequence:

- A **[consequence 1]** — [brief explanation]
- A **[consequence 2]** — [brief explanation]
- A potential **[consequence 3]** — [brief explanation]
- A **[consequence 4]** — [brief explanation]
- Possible **[consequence 5]** — [brief explanation]
- **[consequence 6]** — [brief explanation]

---

### The uncomfortable truth

This is not a one-off mistake by a careless employee.

This is a **system design failure** that will repeat every time this business scales:

- [Root cause 1]
- [Root cause 2]
- [Root cause 3]
- [Root cause 4]
- [Root cause 5]

Every additional [role], every new [hire], every additional [scale vector] makes this worse.

---

## 💡 After MAIA — What Changes

_Replay the same scenario step by step showing MAIA's correct behaviour. Each step should map to a system design component defined later._

Now replay the same scenario with MAIA implemented correctly.

---

### Step 1 — [Step Name]: [One-line description]

_What happens at this stage? Who does what? What does MAIA enforce or automate?_

[Step description — 2–4 sentences. Be specific about system behaviour.]

This changes [the culture / the workflow / the data model]: [why this step matters beyond the mechanics].

---

### Step 2 — [Step Name]: [One-line description]

[Step description.]

This is not [common shortcut or reminder approach].

This is **[what it actually is — system-enforced, automatic, deterministic]**.

---

### Step 3 — [Step Name]: [One-line description]

[Step description. Include the resolution sequence if applicable:]

1. [Action 1]
2. [Action 2]
3. [Action 3]
4. [Action 4]

If [failure condition], the system does not [silent failure mode]. It [enforcement action].

No one is asked to remember. No one makes a judgment call.

---

### Step [N] — If a Dispute Happens: Immediate, Irrefutable Response

[Dispute scenario.] Your team opens [record] in MAIA and immediately sees:

- [Audit data point 1]
- [Audit data point 2]
- [Audit data point 3]
- [Audit data point 4]

Your response:

> _"[One-sentence answer that resolves the dispute using the audit record.]"_

No ambiguity. No scrambling. No apologetic delay.

One lookup. Full answer.

---

## 🧱 Core System Design

---

### 1. [Data Model Component Name]

_What entity carries this data? What fields are required? Include a table with field name, type, and description. Explain why the data model is designed this way — not just what it is._

Each **[Entity Name]** carries:

| Field | Type | Description |
|---|---|---|
| `[field_name]` | [Type] | [Description] |
| `[field_name]` | [Type] | [Description] |
| `[field_name]` | [Type] | [Description] |
| `[field_name]` | [Type] | [Description] |

Because [rationale — why this data lives here and not elsewhere, and what goes wrong if you put it somewhere else].

---

### 2. [Key Capability — Usually the Non-Obvious One]

_This is often a capability teams skip or underestimate. Explain what it enables commercially or operationally, what the binary failure looks like without it, and why it must be system-level._

[Capability name] allows you to:

- [Benefit 1]
- [Benefit 2 — commercial protection]
- [Benefit 3 — confidentiality or compliance]

Without [Capability], your users face an impossible binary:

- [Option A] → [bad outcome A]
- [Option B] → [bad outcome B]

Both outcomes are bad. [Capability] resolves this at system level without making it a judgment call every time.

---

### 3. [Configuration Component — Customer/Preference/Rules]

_Stored where? Applied when? Include a field table. Tie it to MAIA's existing architecture._

Stored in [Location], applied automatically at [trigger point]:

| Field | Type | Options |
|---|---|---|
| `[field_name]` | [Type] | [Options] |
| `[field_name]` | [Type] | [Options] |
| `[field_name]` | [Type] | [Options] |

This field set integrates with MAIA's existing [architecture component] — [brief description of what that architecture does and why this feature belongs there].

---

### 4. [Resolution / Processing Logic]

_The core logic. Write it as a pseudocode block. It should be deterministic and not depend on user judgment._

On [trigger event], MAIA executes the following resolution sequence:

```
For each [item/line/record] in [document]:
  1. [Resolution step 1]
  2. For each [sub-entity]:
     a. [Check condition 1]
     b. [Read preference]
     c. [Select: condition A if X; else condition B]
     d. If [required] and no [valid resource] exists → BLOCK
  3. [Attach / record / execute outcome]
  4. Log: [field 1], [field 2], [field 3], timestamp, user
```

This is deterministic. It does not rely on user judgment. It does not depend on who is on shift. It produces the same correct outcome for every [transaction], every time.

---

### 5. Enforcement Layer — Where Most Systems Fail

_This is what separates a real compliance feature from compliance theatre. Define every condition and what the system does in each case._

Most systems that claim to "[support this feature]" treat [the feature] as [optional/manual]. The result is inconsistent compliance — fine when someone remembers, broken when they don't.

MAIA enforces:

| Condition | System Behaviour |
|---|---|
| [Condition 1 — happy path] | [Auto-action, proceed] |
| [Condition 2 — expired/invalid] | [Block, surface exception] |
| [Condition 3 — missing] | [Block, surface exception] |
| [Condition 4 — prerequisite missing] | [Block, surface exception] |
| [Condition 5 — not required] | [Skip or optional behaviour] |
| [Condition 6 — fallback] | [Fallback with warning] |

Enforcement is not optional. It is the difference between a [feature type] feature and a [feature type] theatre feature.

---

### 6. Exception Surfacing — Integrated with MAIA's ToDo System

When the [engine] blocks [action], it does not silently fail.

It generates an exception — routed to the correct owner via MAIA's exception workspace:

- **Task type**: `[EXCEPTION_TYPE_1]` / `[EXCEPTION_TYPE_2]` / `[EXCEPTION_TYPE_3]`
- **Owner**: [Team responsible for resolution]
- **Linked document**: [Entity 1] + [Entity 2]
- **SLA**: Configurable per severity — e.g., [X hours] for [severity description]
- **Resolution action**: [What the user must do] → system re-validates → [action proceeds]

This is not a generic error message. It is a tracked, owned, time-bounded task in the exception register.

---

### 7. Audit Trail — The Immutable Record

Every [action] event is recorded with:

- [Document ID type]
- [Entity ID type]
- [Version or state reference]
- [Type or category field]
- Timestamp
- User who triggered [action]
- [Key configuration] at time of [action] (snapshot, not live link)

The snapshot of [configuration] at [action] time is important. If [configuration changes after the fact], the audit record reflects what was applicable when [action occurred] — not what [the record] says today.

This protects you legally. It makes dispute resolution unambiguous.

---

## ⚠️ Critical Edge Cases — Every One of These Will Hit You in Production

_List the edge cases teams skip and that break silently in production. For each: describe the scenario, why it breaks a naive implementation, and what must be true in the system to handle it correctly._

Teams that build this feature without handling these cases ship something that breaks silently in real operations.

---

### 1. [Edge Case Name]

[Describe the scenario — what happens in real operations that creates this case.]

[Why a naive implementation fails here — what the shortcut is and what it breaks.]

Implementation shortcut that kills this: [Specific bad pattern]. It must be [correct pattern].

---

### 2. [Edge Case Name]

[Describe the scenario.]

This only works correctly if [condition is met at the right level/time], not [wrong level/time].

---

### 3. [Edge Case Name]

[Describe the scenario — timing issue, edge of validity window, etc.]

MAIA must:

- [Required behaviour 1]
- [Required behaviour 2]
- [Required behaviour 3]

---

### 4. [Edge Case Name — Versioning/Revision]

[Describe the scenario — revisions, corrections, superseded records.]

MAIA must track:

- [Tracking requirement 1]
- [Tracking requirement 2]
- [Tracking requirement 3]

If [record is revised after action], the historical audit record must remain intact. The revision must be logged as [new version / new entry], not an overwrite.

---

### 5. [Edge Case Name — Incomplete Upstream Data]

[Describe the scenario — upstream step not completed before downstream action is needed.]

MAIA must:

- Flag [entities] where [required field] is missing as incomplete for any [dependent entity/action]
- Surface this as a proactive exception — not just a [action]-time block
- Ideally surface it at [earlier trigger], not at the moment [urgent situation]

---

### 6. [Edge Case Name — Severity Differentiation]

[Describe the scenario — two types of the same requirement with different severity levels.]

The enforcement severity should reflect this. [Type A case] is not the same as [Type B case]. Configuration should allow differentiation — and the exception routing should reflect the actual risk level.

---

## 🔁 End-to-End Flow

```
[Upstream event — e.g., supplier delivers / customer places order]
  → [Step 1 action]
  → [Step 2 action]
  → [Record marked complete]

[Configuration step]
  → [Config field 1] = [value]
  → [Config field 2] = [value]
  → [Config field 3] = [value]

[Transaction created] → [Document generated]
  → [Resolution engine fires]:
      [Check 1]? ✓
      [Check 2]? ✓
      [Preference] → [Selected option]
      [Resource available]? ✓
      → [Attach / execute outcome]
      → Log: [field], [field], [field], timestamp, user

[Action executed]
  → [Recipient] receives [goods/output] + [document] with [artifact] attached

[Dispute raised (if any)]
  → Open [document] → audit trail shows [field], [field], [field]
  → One lookup → full answer
```

---

## 📊 Operational Impact

| Dimension | Before MAIA | After MAIA |
|---|---|---|
| [Dimension 1] | [Manual / ad hoc / memory-dependent] | [Automatic / system-enforced] |
| [Dimension 2] | [Ad hoc] | [Enforced] |
| [Dimension 3] | [Tribal knowledge] | [System-configured, always applied] |
| [Dimension 4] | [None — risk of X] | [Versioned / controlled] |
| [Dimension 5] | [None — proceeds regardless] | [Blocked — cannot proceed without compliance] |
| [Dimension 6] | [Scramble, delay, escalation] | [One lookup — full audit record] |
| [Dimension 7] | [Judgment call — often wrong] | [System-enforced] |
| [Dimension 8] | [High — inconsistent] | [Low — irrefutable audit trail] |

---

## 🧭 Implementation Priorities

_Sequence these correctly. Do not skip ahead. Each phase must be complete before the next begins._

**Phase 1 — Data Model**

- [Data entity + fields]
- [Version/history table]
- [Configuration fields]
- [Child table or attachment structure]

**Phase 2 — Resolution Engine**

- [Core logic — selection / assignment / preference resolution]
- [Validation check — expiry, completeness]
- [Fallback logic]
- [Logging with snapshot of configuration at time of action]

**Phase 3 — Enforcement Layer**

- [Block conditions]
- [Exception generation → MAIA ToDo / exception workspace]
- [Override mechanism for authorised users with audit log entry]

**Phase 4 — Document Integration**

- [[Artifact] visible and downloadable from [document] record]
- [PDF bundle or output format]
- [Dispatch channel — email, chatbot, attached to document]

**Phase 5 — Proactive Visibility**

- [[Entity] compliance dashboard: items with missing or expiring [artifacts]]
- [Pre-[action] status check surfaced in [document] creation UI]
- [Digest signal: "[X items] have [artifacts] [expiring / missing] in the next [N] days"]

**Phase 6 — Audit and Reporting**

- [[Artifact] attachment history per [document]]
- [[Artifact] version history per [entity]]
- [Compliance report: [transactions] to [requirement]-required [counterparties] by period, pass/fail]

---

## 🧩 Final Positioning — Non-Negotiable

This is not:

> _"[Common oversimplification of what teams build when they miss the point.]"_

This is:

> **[Full correct positioning statement — include: what it does, how it does it, what it protects, and why it's first-class. One paragraph, bold.]**

If your team builds this as [wrong implementation], they have failed.

If they build it as [correct implementation — deterministic, enforced, auditable, exception-handled] — they have built something that actually protects the business.

The difference between those two implementations is the difference between a feature that looks like [capability] and one that actually delivers it.

Build the real one.

---

## See Also

- [[03 - Clients/Active Cooking Clients/Holsen/Feature Requests/Feature Narrative/Feature Narrative -]] — COA reference example
- [[02 - PM Playbook/Templates]] — All templates
- [[01 - MAIA Product/Overview]] — Product context

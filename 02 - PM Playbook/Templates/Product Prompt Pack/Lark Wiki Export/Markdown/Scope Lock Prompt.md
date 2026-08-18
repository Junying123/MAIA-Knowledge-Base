**Scope Lock Prompt**

**PROMPT --- Generate the Project Scope Lock**

+:--------------------------------------------------------------------------------------+
| Paste this into the ChatGPT (or Claude) project for the account you are locking.      |
|                                                                                       |
| It assumes the Forensic Account Dossier and Client Narrative for this account already |
|                                                                                       |
| exist in the project, alongside the raw sources (SOW/proposal, transcripts, WhatsApp, |
|                                                                                       |
| questionnaire, kickoff notes). Run it once per account.                               |
+---------------------------------------------------------------------------------------+

**ROLE**

You are a senior delivery lead producing the **Scope Lock** for this account --- the single

source of truth that says, requirement by requirement, exactly what we have committed to

build, what the user-facing behaviour is, and whether that commitment is **locked** or

**still needs scoping with the client**. This document is what the build team builds against

and what drives the next client confirmation conversation. Getting a requirement wrongly

marked \"locked\" is worse than marking it \"needs scoping\" --- a false lock detonates at UAT.

**OBJECTIVE**

For every requirement that was committed or promised --- in the SOW/proposal **and** in any

subsequent conversation --- trace its full lifecycle and resolve it to a current, grounded,

user-facing definition with a lock status. Capture what changed since the SOW, why, and on

whose authority. Surface, do not hide, every place where what the client believes they are

getting differs from what we currently intend to build.

**SOURCES --- mine all of them**

Pull from **every** available source in this project. Do not rely on memory or on a single

document. At minimum, ingest and cross-check:

**The SOW / signed proposal** --- the contractual baseline of what was sold.

**The Forensic Account Dossier** --- already source-grounded; use its timeline, decisions

log, commitment register and \"understood vs scoped vs built\" divergence table as primary

structured input. Do not blindly trust it --- re-verify any load-bearing claim against the

raw source it cites.

**The Client / Customer Narrative** --- for the user-facing framing and the listed

discovery gaps.

**Fireflies transcripts** --- query the Fireflies connector for every call tied to this

account (scope calls, kickoff, requirements gathering, follow-ups). Read them; do not

summarise from titles. These are where SOW commitments get reinterpreted.

**WhatsApp / chat exports, the onboarding questionnaire, kickoff notes, and any other**

**project file.**

If a source the dossier references is not actually present in the project, say so --- do not

infer its contents.

Reuse the account\'s existing **citation key** (e.g. \[P \| date \| §x\], \[SD \| timecode\],

\[WA \| date \| person\], \[KO \| §x\], \[Q \| §x\], \[FF \| meeting \| timecode\]). Open the

Scope Lock with a short **Source Manifest** listing every source ingested, its date range,

and whether it was processed in full.

**GROUNDING RULES --- non-negotiable**

**Every** statement of scope, behaviour, decision or status carries a citation. No

citation → it does not go in as fact.

**No hallucination.** If something is implied but not stated, label it an assumption and

flag it for confirmation. If it is unknown, write \"not evidenced\" --- never invent a

detail, a number, a date, or who said what.

Distinguish **what was said** from **what was agreed**. A feature discussed on a call is

not scope. Quote/cite the agreement, not the mention.

Distinguish **who committed it**: client-side acceptance, mutual agreement, or a

vendor-internal decision. These are different lock states (see below).

When sources conflict, do not silently pick one. Record the conflict, cite both, and

resolve it explicitly with the rule below.

**THE CORE METHOD --- trace each requirement\'s lifecycle**

Build a discrete **scope item** for every committed/promised requirement. For each, walk it

through:

**SOW baseline** --- what was sold/promised, verbatim intent, cited.

**Evolution** --- every later conversation that clarified, narrowed, expanded,

reinterpreted, deferred or contradicted it. Cite each, with date and speaker.

**Current intended definition** --- the reconciled position we would build today.

**Lock status** --- using the classification below.

**User-facing flow** --- the requirement expressed as the user experiences it, not as a

technical spec: \*actor → trigger → steps → what the system does → output\*. Plain

operational language.

**Acceptance criteria** --- how we (and the client) will know it is done. A \"locked\" item

without acceptance criteria is not actually locked.

**Source trail** --- the citations underpinning the above.

**Supersession handling (the most important case)**

When a later decision changes a SOW commitment, model it explicitly and never bury it:

+:-------------------------------------------------------------------------------------------+
| **SOW said** X \[cite\] → **now intended** Y \[cite\] → **changed by** \[who\] on \[date\] |
|                                                                                            |
| \[cite\] → **rationale** \[cite\] → **client agreed?** YES / NO / NOT EVIDENCED \[cite\].  |
+--------------------------------------------------------------------------------------------+

If the change was a **vendor-internal decision** and there is \*\*no evidence the client

agreed\*\*, the item is **NOT locked** regardless of how sound the new approach is. It is a

**proposed change against a signed commitment** and goes to the client-confirmation agenda

as a live risk. Reasoning quality does not substitute for client sign-off on a contracted

line.

\*(Worked example of the pattern --- adapt to this account\'s facts: a SOW commits a Google

Sheet output that auto-reduces raw-material inventory; a later requirements call concludes

this is against best practice and reframes the goal to finished-goods visibility via

backward BOM calculation, and defers it. That is a material reinterpretation of a signed

line. It is only \"locked\" if the client agreed to the new goal and the deferral --- otherwise

it is an unconfirmed change the client may still expect in original form.)\*

**LOCK CLASSIFICATION**

Assign exactly one status per scope item. Be conservative --- when in doubt, do not lock.

**LOCKED** --- grounded in source, **mutually agreed** (client + vendor), implementation-

clear enough to build, and has acceptance criteria. Build against it.

**LOCKED (SUPERSEDED)** --- SOW commitment changed, and the change is mutually agreed and

defined. Show both the original and the new locked definition.

**AGREED IN PRINCIPLE --- IMPLEMENTATION NOT LOCKED** --- direction is mutually accepted but

the build detail (fields, rules, integration design, timing) is undefined. State the

specific decisions still needed.

**NEEDS SCOPING** --- ambiguous, contradictory across sources, never resolved, or a

vendor-side reinterpretation the client has not confirmed. State the exact question that

must be answered and who must answer it.

**OUT OF SCOPE** --- explicitly excluded or rejected. Lock these too, with the reason and

source. (Locking exclusions prevents both scope creep and \"but the SOW said...\" disputes.)

If the build is already underway, run a **three-way check** per item --- \*\*SOW vs agreed vs

what is actually built\*\* --- and flag any item where built reality diverges from either. Treat

those as live risks, not settled scope.

**OUTPUT --- a single markdown document**

Produce the Scope Lock in this structure. Lead with the actionable summary; detail follows.

**Header** --- account, \"Scope Lock v1\", date, build stage (pre-build / in-build / UAT).

**Source Manifest** --- sources ingested, ranges, processed-in-full flag, citation key.

**Scope Lock Summary (the dashboard)** ---

counts by status: LOCKED / LOCKED(SUPERSEDED) / AGREED-IN-PRINCIPLE / NEEDS SCOPING /

> OUT OF SCOPE;

the **blocking** open items (cannot build past them);

the **top items to confirm with the client**, in priority order.

**Locked Scope** --- one entry per LOCKED / LOCKED(SUPERSEDED) item, with: ID, name,

user-facing flow, SOW origin, supersession block (if any), current locked definition,

acceptance criteria, confidence (HIGH/MED/LOW), sources.

**Needs-Scoping Register** --- one entry per unresolved item: what is unclear, the precise

question to resolve, who decides, blocking yes/no, sources.

**Supersessions Log** --- every SOW→now change in the SOW said → now → who/when → rationale → client agreed? format, sorted by risk.

**Out-of-Scope / Explicit Exclusions** --- item, reason, source.

**Source-Conflict Register** --- each contradiction, both citations, and how it was resolved

(or that it is unresolved).

**Client Confirmation Agenda** --- the open questions extracted as a clean, send-ready list

the account lead can take into the next client conversation. Each question phrased so a

yes/no or a specific value closes it.

**SELF-CHECK BEFORE YOU FINISH**

Does every \"LOCKED\" item cite **mutual agreement**, not just a mention or an internal call?

Is every supersession of a signed SOW line either client-agreed (cited) or flagged as a

live risk?

Is every claim cited? Are assumptions labelled as assumptions?

Could the client read this and be surprised by anything? If yes, that item is not locked ---

move it to the confirmation agenda.

Are the open questions phrased so the client can actually close them?

---
name: voc-extraction
description: >
  Extracts a grounded, confidence-scored Voice of Customer (VoC) analysis from a
  messy multi-source client corpus — meeting transcripts, chat exports, meeting
  notes, and vendor-authored docs. Separates what the customer actually said
  (primary voice) from what the vendor claims (vendor voice), tags every claim
  CONFIRMED / BELIEVED / CLAIMED, anchors it to a source, and splits stated vs
  revealed importance. Written for PMs managing client accounts who need to know
  which scope decisions rest on real customer evidence versus inference. Use
  whenever the user wants to "extract voice of customer", "run VoC", "what does
  the client actually want", "analyse the transcript for customer needs", "pull
  the real priorities from these notes", "coverage check on our discovery", or
  "reconstruct what [client] wants from these sources". Trigger on phrases like
  "VoC extraction", "voice of customer", "what does [client] really want",
  "process this corpus into VoC", "confidence-scored customer analysis".
---

# Voice of Customer (VoC) Extraction Skill

Produces a **grounded, confidence-scored Voice-of-Customer artifact** from a messy,
multi-source client corpus. This is the check against wishful selling: it
reconstructs what the customer actually wants, fears, and expects — anchored to
evidence, confidence-tagged, and rigorously separated from what the vendor
*claims* the customer wants.

Output is an analytical artifact, not a summary and not a sales document. An
account team should be able to make Phase-1 scope decisions off it and know
exactly which decisions rest on solid customer evidence versus inference.

Save the finished artifact to the client's folder:
`03 - Clients/Active Cooking Clients/[Client]/` (active) or
`03 - Clients/We're cooked discovery/Requirement Gathering/[Client]/` (discovery),
named `[Client] — VoC Extraction.md`. Add standard KB frontmatter (owner, status,
last_reviewed).

---

## Phase 0 — Request the Corpus (do this first, before anything else)

Before extracting anything, request the source corpus from the user. VoC quality
is capped by source quality — you cannot extract customer voice that isn't there.

Say something like:

> Before I start, share the source material for [client]. The more raw and
> customer-side, the better:
> - Meeting / discovery transcripts (even with messy speaker labels)
> - WhatsApp / chat exports
> - Meeting notes or minutes
> - Vendor-authored docs (proposal, SOW, questionnaire, narrative) — I'll use
>   these for scope/context only, never as customer voice
>
> Once I have these I'll run the coverage gate first and tell you honestly
> whether there's enough customer voice to extract, or whether the corpus is
> too thin.

**If the user has already provided the corpus** (pasted, attached, or referenced a
file path) — skip Phase 0 and go straight to the Governing Principles, then Phase 0
of the output (Source Inventory).

Do not fabricate customer voice to fill a thin corpus. An honest "insufficient"
beats a confident invention.

---

## Governing Principles (non-negotiable — apply throughout)

**P1 — Customer voice is the only primary voice.**
Only words spoken or written by customer-side actors count as primary VoC.
Vendor-authored material (proposals, narratives, questionnaires, SOWs, internal
handover docs) is NEVER customer voice, no matter how confidently it asserts
customer needs. Use vendor material only for scope boundaries, context, and risk
comparison — never quote it as VoC fact.

**P2 — Every claim carries a confidence tag.** Use exactly three:
- `CONFIRMED` — directly attributable to a customer actor via quote or tight
  paraphrase; explicit and hard to misread.
- `BELIEVED` — strong inference from customer-side evidence, but attribution,
  wording, or completeness has slack (garbled transcript, implied not stated,
  weak multi-source corroboration).
- `CLAIMED` — asserted by vendor material or a non-customer source; unverified
  against customer voice. Never promote to CONFIRMED without customer-side
  corroboration.

**P3 — Every claim is anchored.** No floating assertions. Each fact cites its
source (document + speaker/section where possible). If you cannot anchor it,
drop it or move it to "What we do not know."

**P4 — Stated importance ≠ revealed importance.** Track both. What a customer
*says* matters is one signal; what their behaviour, repetition, follow-ups, and
operating rhythm *reveal* is another. Rank on the combination; call out divergences.

**P5 — Coverage gate precedes analysis.** Assess whether the corpus actually
contains customer voice for each relevant role before extracting. If a role (end
user, warehouse, driver, finance, the customer's own customers) is thin or absent,
declare it and refuse to treat that role's edge cases as confirmed.

**P6 — Re-attribute anonymous labels, but mark the confidence.** Transcripts carry
"Speaker 2" style labels. Reconstruct real identities from cross-source evidence
(questionnaire PICs, who-added-whom in chat, later role references), but tag each
re-attribution CONFIRMED / BELIEVED and give the basis. Never silently rewrite a
label you are only guessing at.

**P7 — Preserve the customer's concrete framing.** Keep their real examples —
actual weights, kg figures, cut names, customer categories, specific document
wording. Concrete detail is the evidence; do not abstract it into generic
categories that lose the operational reality.

**P8 — Analyst honesty over polish.** If coverage is uneven, lead with that. Do
not smooth over source contradictions — log them. Do not import vendor marketing
framing ("AI transformation", "digital journey") unless the customer used those
words themselves.

---

## Confidence Rubric (apply consistently)

| Tag | Attribution | Evidence quality | Promotion rule |
|---|---|---|---|
| CONFIRMED | Named / strongly-inferred customer actor | Explicit quote or unambiguous paraphrase | — |
| BELIEVED | Customer-side but label/wording has slack | Implied, garbled-but-legible, or weak multi-source corroboration | Promote to CONFIRMED only with a clean direct source |
| CLAIMED | Vendor or non-customer source | Asserted, not customer-verified | Promote only with customer-side corroboration |

When in doubt, tag **down**, not up. A BELIEVED that turns out solid costs nothing;
a CONFIRMED that turns out wishful poisons a scope decision.

---

## Required Output Structure

Produce these phases in order. Keep phase numbering stable even if a phase is thin
(note "not used" rather than renumbering).

### Phase 0 — Source Inventory & Coverage Gate
Table: `Source | Type | Voice class (Primary / Secondary / Not customer voice) | Use in this extraction`.
Then a **Coverage verdict**: `proceed` / `proceed-with-caveats` / `insufficient`.
Name which actor-voices are well-represented and which are thin or absent. State
plainly what the corpus does and does not license you to conclude. If `insufficient`,
stop here and list what corpus additions would unblock a real extraction.

### Phase 1 — Actor & Role Register
Table: `Raw label | Re-attributed identity | Role | Confidence | Basis`.
Include both customer-side and vendor-side actors (mark vendor-side clearly so
their statements are never mistaken for VoC). End with a **checkpoint**: is any
*central* customer actor unresolved enough to block extraction? If yes, say what
would resolve it; if no, proceed with the caveat noted.

### Phase 2 — Grounded Evidence Extraction
Numbered `VOC-NNN` table: `ID | Category | Customer voice / tight paraphrase | Source | Confidence`.
One row per distinct signal. Tight paraphrase in the customer's own framing. Keep
concrete examples. Categories emerge from the corpus (current workflow, order
interpretation, pricing, credit control, AR/payment, accountability, etc.) — do
not force a fixed taxonomy.

### Phase 3 — Salience & Priority Signals
Ranked table: `Rank | Priority | Stated importance | Revealed importance | Confidence`.
Rank by combined stated + revealed signal, not by loudness. Revealed importance
draws on repetition, follow-up actions, operating rhythm, and what blocks go-live.

### Phase 5 — Empathic Interpretation Layer
A set of `INFERENCE [confidence, anchors: VOC-xxx, VOC-yyy]` statements. Each
interpretation MUST cite the VOC ids it rests on. Read the latent need behind the
stated feature — what the customer is *really* buying, what they actually fear,
what would make the deployment feel cosmetic versus operational. No interpretation
without anchors.
*(Phase 4 is reserved for optional intermediate synthesis; if unused, note "Phase 4 — not used" and continue.)*

### Phase 6 — What They Expect the Product to Do
Numbered list of confirmed / strongly-believed expectations — concrete, testable,
scoped. Flag any expectation that carries scope risk (open-ended vs fixed-format).

### Stated vs Revealed Importance
Table: `Item | Stated | Revealed | Read`. The "Read" column gives a verdict
(Real P1 / P1.5 / Phase 2 / scope-risk / do-not-let-it-leak-into-go-live). This is
where you flag features the customer *misframed* — asked for X but the evidence
shows the real need is Y.

### What We Do NOT Know
Table: `Unknown | Why it matters | How to resolve`. The resolution column must be a
**concrete evidence-collection action** (observe one real work cycle, collect N real
samples, get 2–3 real cases) — not "ask the client". These are the gaps that would
break the deployment if left unverified.

### Bottom Line
One blockquote reframing the account's real VoC **in the customer's own terms** —
not "they want AI" but the operational truth underneath. Then name the single
product mistake most likely to sink the account, and the specific risk (usually
workflow translation / adoption, not feature availability).

---

## Method (how to work through the corpus)

1. **Inventory first.** Classify every source by voice class before reading for
   content. Decide the coverage verdict up front so it disciplines the rest.
2. **Resolve actors before extracting facts.** You cannot score confidence on VOC
   rows until you know who spoke. Cross-reference questionnaire PICs, chat group
   membership, and later role references to de-anonymize labels.
3. **Extract atomically.** One VOC id per distinct signal. Don't bundle pricing
   frequency and pricing segmentation into one row if the corpus treats them apart.
4. **Score as you go.** Tag confidence at extraction time based on actual evidence,
   not on how much you'd like it to be true.
5. **Rank on combined signal.** For Phase 3, weigh repetition and revealed
   behaviour, not just explicit statements.
6. **Anchor every inference.** Phase 5 interpretations reference Phase 2 ids only.
   No anchors = speculation; cut it or move it to unknowns.
7. **Close with the gaps, not the wins.** The most valuable output for a delivery
   team is often the "do not know" table and the misframing flags, not the
   confirmed list.

---

## Tone & Anti-Patterns

**Do:** analyst register, plain verdicts, concrete customer detail, explicit
contradictions, honest coverage limits.

**Do not:** vendor marketing language, confidence inflation, floating claims,
treating vendor docs as customer voice, abstracting away concrete examples,
smoothing over source conflicts, filling every schema slot with padding.

---

## See Also

- [[customer-profile]] — pure business background before/alongside VoC
- [[req-gathering-output]] — structured PM discovery output + customer narrative
- [[customer-narrative]] — client-facing before/after story (uses VoC as input)
- [[feature-narrative]] — dev-facing deep dive for a single feature
- [[discovery-pipeline]] — full post-discovery output chain

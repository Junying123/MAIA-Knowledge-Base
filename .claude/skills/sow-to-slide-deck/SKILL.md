---
name: sow-to-slide-deck
description: Create a client demo slide deck from an SOW draft using MAIA JDX deck structure and style.
---

# SOW to Slide Deck

Use this skill when the user asks to generate a presentation deck from an SOW, proposal, or scope doc.

Primary outcome:
- Produce a slide-content markdown draft and/or deck HTML draft that follows the MAIA JDX demo pattern.

## Trigger Phrases

- "create slides from sow"
- "build demo deck from sow"
- "turn this sow into slide deck"
- "prepare client deck from scope"

## Required Inputs

1. SOW draft file path
2. Client name
3. Deck output format:
   - markdown slide content (`.md`)
   - deck-stage HTML (`.html`)
4. Optional:
   - presenter name
   - presentation date
   - email/phone for closing slide

## Canonical Pattern Reference

Use these files as structure/style references:

- `03 - Clients/We're cooked discovery/Requirement Gathering/JDX/JDX Demo Deck/jdx-maia-demo/project/JDX Demo Deck.html`
- `03 - Clients/We're cooked discovery/Requirement Gathering/JDX/JDX Demo Deck/jdx-maia-demo/project/JDX Demo Deck-1.html`
- `03 - Clients/We're cooked discovery/Requirement Gathering/JDX/JDX Demo Deck/JDX Demo Slide Content.md`

## Slide Blueprint (Default 12 Slides)

1. Cover
2. Pain summary
3. E2E current vs MAIA flow
4. Demo step 1 (Pain vs MAIA solve)
5. Demo step 2 (Pain vs MAIA solve)
6. Demo step 3 (Pain vs MAIA solve)
7. Demo step 4 (Pain vs MAIA solve)
8. Demo step 5 (Pain vs MAIA solve)
9. Scope summary (Included / Phase 2 / Not in scope)
10. Estimated timeline
11. Commercial structure
12. Close + contact

## Content Rules

- Keep one narrative thread: chaos today -> operational control with MAIA.
- For demo slides, always use "Pain today" vs "MAIA solves it".
- Preserve explicit scope boundaries:
  - Included
  - Phase 2
  - Not in scope
- Use concrete operational language, not generic marketing terms.
- If SOW lacks data for a section, insert `[TO CONFIRM]` instead of guessing.

## Formatting Rules

- If output is markdown:
  - use `## Slide N — [Title]`
  - include 3-6 bullets per slide section
  - keep presenter notes in blockquote lines prefixed with `> Presenter note:`
- If output is HTML:
  - follow existing `deck-stage` section ordering and semantic classes
  - keep slide labels and section headings consistent with the blueprint
  - avoid changing global CSS tokens unless requested

## Workflow

1. Read SOW source.
2. Extract:
   - client pains
   - MAIA solution blocks
   - scope included/phase 2/out-of-scope
   - timeline
   - commercial terms
3. Map extracted content to the 12-slide blueprint.
4. Draft slide content.
5. Validate against checklist:
   - all 12 sections present (or explicitly omitted by user)
   - no invented promises
   - scope/timeline/commercial consistent with SOW
6. Save output file and return path.

## Output Checklist

- [ ] Slide flow follows 1-12 blueprint
- [ ] Every demo slide has Pain vs MAIA solve
- [ ] Scope boundaries are explicit
- [ ] Timeline and commercial match SOW
- [ ] Missing info marked `[TO CONFIRM]`


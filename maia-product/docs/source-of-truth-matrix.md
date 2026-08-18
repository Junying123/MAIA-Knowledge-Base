# Source of Truth Matrix

| Information Type | Source of Truth | Repo Role |
|---|---|---|
| Current task status | Lark Base / Mindhive OS | Fetch/read only; do not duplicate |
| Owners / due dates | Lark Base / Mindhive OS | Reference in generated summaries |
| Prerequisites gate status | Lark Base / Mindhive OS + repo working copy | Track the durable gate checklist in client folder; live slot status stays in Lark |
| Deployment slot / UAT date / go-live date | Lark Base / Mindhive OS | Reference only in repo snapshots |
| Official published docs | Lark Wiki / Docs | Publish approved markdown back to Lark |
| Day-to-day client communication | Client WhatsApp group chat + repo working copy | Curate durable notes, decisions, and follow-ups instead of dumping raw chat |
| Meeting transcripts / call recordings | Fireflies / Granola / Lark meeting docs | Link in source maps and distill into meeting synthesis |
| Client background/context | MAIA Product Context + Lark sources | Curated markdown with source links |
| Client narrative | MAIA Product Context draft → Lark published | Draft, validate, publish |
| Tech brief working context | MAIA Product Context + Lark sources | Maintain traceable working context before CODEX handoff if needed |
| Account plan | MAIA Product Context draft → Lark published | Draft, validate, publish |
| Scope lock | Lark official + repo working copy | Maintain traceable working copy |
| Requirements log | Lark/Base/source docs + repo synthesis | Summarize and cite sources |
| Deferred post-go-live items | MAIA Product Context + Lark links | Keep durable deferred list per client |
| Delivery workflow artifacts | Repo working copy + Lark links | Stage folders organize artifacts |
| Formal implementation specs | MAIA CODEX | Handoff only when scope is ready |
| Agent prompts/checklists | MAIA Product Context | Repo-owned |

## Rule
If live status changes daily, it belongs in Lark. If product context needs synthesis, drafting, or version control, it belongs here. If dev needs to implement it, it belongs in CODEX.

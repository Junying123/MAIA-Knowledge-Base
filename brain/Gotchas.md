---
owner: Gareth
status: approved
last_reviewed: 2026-04-04
---

# Gotchas

> Known issues, traps, and hard-won lessons. Read before touching anything critical.

## MAIA Product Gotchas

| Issue | Detail | Workaround |
|---|---|---|
| Multiple credit notes | Cannot create more than one credit note per invoice | Manual workaround — document in client notes |
| Invoice from HOLD | Cannot invoice directly from HOLD status | Must move to correct status first |
| Bulk operations | Not available anywhere in MAIA | All actions are individual record-by-record |
| Quote-to-Cash order | Must follow Quotation → SO → Invoice → Receipt exactly | Skipping steps causes system errors |
| Fixguru exception | No CPO step in their workflow | Quotation → SO → Invoice only (receipt deferred) |

## KB Folder Gotchas

| Gotcha | Detail |
|---|---|
| Discovery folder name | **Exact spelling:** `We're cooked discovery/` (apostrophe, exact case) |
| Active clients folder | **Exact spelling:** `Active Cooking Clients/` |
| Ming Medical path | Under `We're cooked discovery/` — confirmed spelling |

## Git / GitHub Gotchas

| Gotcha | Detail |
|---|---|
| Ming Medical | **Do NOT commit or push** Ming Medical content to GitHub |
| File moves | Always use `git mv`, never drag-move in Finder — preserves history |
| Remote | `github.com/Junying123/MAIA-Knowledge-Base` |

## Claude Code Gotchas

| Gotcha | Detail |
|---|---|
| Don't invent MAIA features | Only document what exists — never speculate on what could be |
| Lark is read-only | Never suggest editing in Lark; always edit Markdown source |
| Template files | Never edit `[Template] *.md` files directly — always copy first |
| Tag dictionary | Check `[[06 - Glossary & Taxonomy/Tag Dictionary]]` before creating new tags |
| Folder structure | Don't reorganise folders without Gareth's approval |

## See Also
- [[04 - QA & Known Issues]]
- [[01 - MAIA Product/Overview/Known Limitations]]
- [[brain/Patterns]]

Run a full lint scan of the KB and save a health report.

Steps:
1. **Broken wikilinks** — scan all `.md` files for `[[Page Name]]` references and check if the target file exists. List any that are broken.
2. **Missing frontmatter** — find any `.md` file missing one or more of: `owner`, `status`, `last_reviewed`. List each file and which fields are absent.
3. **Stale drafts** — find files with `status: draft` where `last_reviewed` is more than 14 days ago. These are forgotten drafts.
4. **Orphan pages** — find pages with no incoming wikilinks from any other file (excluding `brain/` files and `.gitkeep`). These are disconnected from the graph.
5. **Conflicting definitions** — scan `06 - Glossary & Taxonomy/Glossary.md` and `01 - MAIA Product/` for the same term defined differently across pages. Flag any contradictions.
6. **Empty sections** — find pages with H2 headers that have no content beneath them.
7. **Stale client context** — find client files under `03 - Clients/Active Cooking Clients/` with `last_reviewed` older than 7 days.

After scanning, compile a health report and save it to:
`10 - Outputs/health/health-check-YYYY-MM-DD.md`

Report format:
```
# KB Health Check — YYYY-MM-DD

## Summary
- X broken wikilinks
- X files missing frontmatter
- X stale drafts
- X orphan pages
- X conflicting definitions
- X empty sections
- X stale client files

## Broken Wikilinks
| File | Broken Link |
|---|---|

## Missing Frontmatter
| File | Missing Fields |
|---|---|

## Stale Drafts (>14 days)
| File | Last Reviewed |
|---|---|

## Orphan Pages
| File | Suggested Connection |
|---|---|

## Conflicting Definitions
| Term | File A | File B | Conflict |
|---|---|---|---|

## Recommended Actions
- [ ] Fix: [specific action]
- [ ] Fix: [specific action]
```

After saving the report:
- Append to `brain/log.md`: `YYYY-MM-DD | health-check | report saved to 10 - Outputs/health/health-check-YYYY-MM-DD.md`
- Tell the user the report location and top 3 issues to fix first

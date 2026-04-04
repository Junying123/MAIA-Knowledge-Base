Review the session and keep the KB clean before closing.

Steps:
1. **Activity scan** — list all files created or modified this session via `git status` and `git diff --name-only`
2. **Frontmatter check** — verify every modified file has: `owner`, `status`, `last_reviewed`
3. **Wikilink check** — confirm new pages are linked from at least one other page
4. **Index update** — if a new client page was created, check it appears in the relevant folder index
5. **Orphan flag** — list any new files with no incoming wikilinks
6. **North Star update** — if priorities shifted today, add an entry to `brain/North Star.md` Shifts Log
7. **Memories update** — if new context was learned about a client or process, update `brain/Memories.md` Recent Context section
8. **Commit** — stage modified files (EXCLUDE any Ming Medical content) and commit with a descriptive message

Output:
- What was done this session
- What was fixed or cleaned up
- What is flagged for follow-up
- Commit summary

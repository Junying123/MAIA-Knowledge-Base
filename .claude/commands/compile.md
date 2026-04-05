Process new raw files in `09 - Intake & Triage/raw/` and compile them into the KB.

Steps:
1. **Scan raw/** — list all files in `09 - Intake & Triage/raw/articles/` and `09 - Intake & Triage/raw/misc/` that haven't been processed yet (check `brain/log.md` for previously processed filenames)
2. **If nothing new** — report "No new raw files to compile" and stop
3. **For each new file**, do the following:
   - Read the full content
   - Generate a structured summary:
     - **Source:** filename + original URL if present
     - **Core insight:** 1-2 sentences
     - **MAIA relevance:** how this relates to MAIA product, clients, or PM work
     - **Key concepts:** bullet list of terms or ideas
     - **Links to existing KB:** which existing pages this connects to
   - Determine where it belongs:
     - Product insight → `01 - MAIA Product/`
     - Process or workflow → `02 - PM Playbook/`
     - Client-specific → `03 - Clients/[Client]/`
     - Decision → `07 - Decisions/`
     - Reference/guide → `02 - PM Playbook/Guides/`
   - Show proposed routing and summary — **wait for confirmation before writing**
4. **On confirmation**, write the compiled summary to the correct location with full frontmatter
5. **Update indexes** — if a new concept was introduced, add a wikilink from the nearest relevant existing page
6. **Append to log** — add one line per processed file to `brain/log.md`:
   ```
   YYYY-MM-DD | compiled | [filename] → [destination path]
   ```
7. **Mark raw file as done** — add `_compiled` suffix to filename in raw/ (e.g. `article.md` → `article_compiled.md`) so it won't be reprocessed

Output:
- List of files processed
- Where each was filed
- Any KB pages updated with new links
- Log entries added

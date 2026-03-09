---
owner: Gareth
status: reference
last_reviewed: 2026-02-21
---

# Automation with Obsidian Skills

> [!warning] **STATUS: These Obsidian skills are NOT currently available in Claude Code**
> After verification, the Obsidian-specific skills listed below are **not installed** in the current Claude Code environment.
>
> **What IS available:**
> - Generic Claude Code tools: Read, Write, Edit, Grep, Glob, Task
> - Obsidian app features: Bases (.base), Canvas (.canvas) - **manually creatable**
> - Available skills: /prd, /xlsx, /pdf, /docx, /webapp-testing
>
> **Recommended approach:** See [[Automation Implementation Guide]] for automations using available tools.

---

> [!success] **TL;DR - What You Should Do**
>
> 1. **Ignore the Obsidian skills sections below** (they're not available)
> 2. **Go to [[Automation Implementation Guide]]** and implement automations with generic tools
> 3. **Manually create .base/.canvas files in Obsidian** for better visualization
> 4. **Come back to this file** if you want to learn JSON manipulation (advanced)
>
> **Start here:** [[Automation Implementation Guide#Implementation Recipes]]

---

## 🔄 Hybrid Approach (Recommended)

**Use Claude Code for automation + Obsidian native features for visualization:**

1. **Automate with generic tools** (Read, Write, Edit, Grep, Glob, Task)
2. **Visualize manually in Obsidian** (create .base databases and .canvas diagrams)
3. **Claude Code can read/write** .base and .canvas files as JSON (advanced use)

**Example workflow:**
- **Claude Code:** Search vault, analyze data, create markdown notes
- **You in Obsidian:** Convert tables to .base databases, create .canvas roadmaps
- **Claude Code (advanced):** Can update .base/.canvas JSON if needed (expert mode)

**The rest of this file is kept as REFERENCE for what could be done if these skills become available.**

---

## ✅ What You CAN Do Right Now (Practical Implementation)

### Option 1: Full Automation with Generic Tools
Use the implementations in [[Automation Implementation Guide]] which uses:
- **Grep** - Search vault content
- **Read** - Read markdown files
- **Glob** - Find files by pattern
- **Write/Edit** - Create/modify notes
- **Task (Explore agent)** - Deep analysis
- **/prd, /xlsx** - Generate PRDs and spreadsheets

**ROI:** 18.3 hrs/month savings, 100% implementable today

### Option 2: Hybrid Approach (Best of Both Worlds)

**Step 1: Let Claude Code do the automation**
```
"Search all client requirements in 03 - Clients/**/Requirements*.md
and create a summary table with: Client, Requirement, Priority, Status"
```
Claude Code uses Grep + Read to analyze, then creates markdown table.

**Step 2: You convert to Obsidian native format**
- Copy the table into Obsidian
- Right-click → "Convert to database" (if Bases plugin enabled)
- Now you have sortable/filterable .base database

**Step 3: Claude Code can update the database**
Advanced: .base files are JSON - Claude Code can Read + Edit them
```
"Update the Priority field for 'Acme Corp' to 'High' in the Requirements database"
```
Claude Code reads the .base JSON, modifies it, writes back.

### Option 3: Expert Mode - Claude Code + JSON Manipulation

**For .base databases:**
```
"Read the Feature Gap Tracker.base file and add a new entry:
- Feature: Multiple Credit Notes
- Priority: High
- Clients: Acme Corp, Beta Inc
- Status: Planned"
```
Claude Code reads .base as JSON, adds entry, writes back.

**For .canvas diagrams:**
```
"Create a product roadmap canvas with Q1, Q2, Q3 columns
and add feature cards from the Feature Gap Tracker"
```
Claude Code creates .canvas JSON structure manually.

**Note:** This is advanced and requires understanding .base/.canvas JSON format.

---

# Reference: Obsidian Skills (Not Currently Available)

The sections below describe Obsidian-specific skills that are **not currently available** in Claude Code. This is kept for reference.

## 🎯 Obsidian Skills (Reference Only - Not Available)

### 1. `obsidian:obsidian-cli`
**What:** Interact with vault — read, create, search notes, manage tasks, reload plugins, run JavaScript, screenshots

**Perfect for:**
- Searching KB (better than Grep)
- Managing tasks in templates
- Executing vault-wide operations
- Taking screenshots of visual diagrams

---

### 2. `obsidian:obsidian-markdown`
**What:** Create/edit Obsidian Flavored Markdown — wikilinks, callouts, frontmatter, embeds

**Perfect for:**
- Creating notes with proper wikilinks
- Adding callouts (> [!note], > [!warning])
- Managing YAML frontmatter
- Embedding other notes

---

### 3. `obsidian:obsidian-bases`
**What:** Create/edit .base files — database-like views with filters, formulas, table/card views

**Perfect for:**
- Feature Gap Tracker (database view)
- Request Intake Inbox (filterable table)
- Test Scenarios Index (database with status)
- Client overview (card view)
- Roadmap tracking (kanban-style)

---

### 4. `obsidian:json-canvas`
**What:** Create/edit .canvas files — visual canvases, mind maps, flowcharts

**Perfect for:**
- Product roadmap visualization
- Dependency maps
- User journey flows
- Feature relationship diagrams
- Client ecosystem maps

---

### 5. `obsidian:defuddle`
**What:** Fetch and clean web pages into markdown

**Perfect for:**
- Import client requirements from web (emails, Lark, Notion)
- Import competitor analysis
- Import user research
- Clean up external docs into KB format

---

## 🚀 NEW Implementation Strategy

### Replace Generic Tools with Obsidian Skills

| Old Way (Generic) | New Way (Obsidian Native) | Why Better |
|-------------------|---------------------------|------------|
| Grep | `obsidian-cli` search | Understands wikilinks, frontmatter |
| Read/Write | `obsidian-markdown` | Native Obsidian format support |
| /xlsx for tracking | `obsidian-bases` | Data stays in vault, filterable |
| External diagrams | `json-canvas` | Visual, embedded in vault |
| Copy-paste docs | `defuddle` | Auto-imports and cleans |

---

## 🤖 Updated Subagent Implementations

### 1. Triage Assistant → Use `obsidian-cli` + `obsidian-markdown`

**Implementation:**
```python
# .claude/agents/triage-assistant.md
You are a triage assistant using Obsidian skills.

When given a request to triage:

1. Use obsidian-cli to search for similar features:
   - Search: "multiple credit notes" in vault
   - Filter: Tags #product, #limitation

2. Use obsidian-cli to read:
   - "01 - MAIA Product/Overview/Known Limitations"
   - "04 - QA & Known Issues/Feature Gap Tracker"

3. Classify request:
   - PRODUCT: Missing from core, benefits all
   - CONFIG: Client-specific setting
   - CUSTOM: Non-standard functionality
   - BUG: Existing feature broken

4. Use obsidian-markdown to create triage decision:
   - Create note: "09 - Intake & Triage/decisions/TRI-YYYY-MM-DD-XXX.md"
   - Add frontmatter: owner, status, request_id
   - Add wikilinks to related features
   - Add callout: > [!decision] Classification: PRODUCT

5. Use obsidian-bases to update Request Intake Inbox:
   - Set Status: "Triaged"
   - Set Owner: assigned PM
   - Link to decision record
```

**Usage:**
```
"Triage this request: Client wants multiple credit notes per invoice"
```

**Tools used:** `obsidian-cli` (search), `obsidian-markdown` (create decision), `obsidian-bases` (update inbox)

---

### 2. Client Context Summarizer → Use `obsidian-cli`

**Implementation:**
```python
# .claude/agents/client-summary.md
You are a client context summarizer using Obsidian skills.

When given a client name:

1. Use obsidian-cli to search vault:
   - Search: "Acme Corp" (client name)
   - Filter: Folder "03 - Clients/Acme Corp/"

2. Use obsidian-cli to read all client files:
   - Client Overview
   - Requirements Log
   - Feature Requests & Gaps
   - All meeting notes

3. Use obsidian-cli to search for client mentions:
   - Search: "Acme Corp" in "04 - QA & Known Issues/"
   - Search: "Acme Corp" in "05 - Releases & Updates/"

4. Use obsidian-markdown to create summary:
   - Create note: "03 - Clients/Acme Corp/Client Summary.md"
   - Add callouts:
     - > [!info] Client Overview
     - > [!warning] Known Issues Affecting Client
     - > [!success] Recent Wins
   - Add wikilinks to requirements, meetings, issues
   - Embed key meeting notes: ![[meeting-2026-02-15]]

5. Optional: Use json-canvas to create visual client map:
   - Client → Modules Used → Open Requirements → Known Issues
```

**Usage:**
```
"Summarize all info about Acme Corp"
```

**Output:** Comprehensive summary with embedded notes and visual map

**Tools used:** `obsidian-cli` (search + read), `obsidian-markdown` (create summary), `json-canvas` (optional visual)

---

### 3. Feature Prioritization Engine → Use `obsidian-bases`

**Implementation:**
```python
# .claude/agents/feature-prioritizer.md
You are a feature prioritization engine using Obsidian skills.

When asked to prioritize features:

1. Use obsidian-cli to search for feature requests:
   - Search vault: tags #gap, #feature-request
   - Read: "04 - QA & Known Issues/Feature Gap Tracker"

2. For each feature, use obsidian-cli to count client mentions:
   - Search: "[feature name]" in "03 - Clients/"
   - Count matches = Reach

3. Calculate RICE scores:
   - Reach: Client count
   - Impact: From priority tags (3=high, 2=med, 1=low)
   - Confidence: From status (100%=confirmed, 80%=likely, 50%=maybe)
   - Effort: From estimates

4. Use obsidian-bases to create Feature Prioritization database:
   - File: "04 - QA & Known Issues/Feature Prioritization.base"
   - Columns:
     - Feature (link to gap doc)
     - Reach (number)
     - Impact (select: High/Med/Low)
     - Confidence (number %)
     - Effort (number weeks)
     - RICE (formula: (Reach × Impact × Confidence) / Effort)
     - Clients Affected (list)
     - Recommendation (select: v1.2/v1.3/v2.0/Custom)
   - Views:
     - Table: Sort by RICE descending
     - Cards: Group by Recommendation
     - Board: Kanban by status

5. Use obsidian-markdown to create summary:
   - Top 5 priorities with reasoning
   - Wikilinks to gap docs and client folders
```

**Usage:**
```
"Prioritize all feature requests using RICE"
```

**Output:**
- Interactive .base database (sortable, filterable)
- Summary markdown note
- Data stays in vault (no external Excel)

**Tools used:** `obsidian-cli` (search), `obsidian-bases` (database), `obsidian-markdown` (summary)

---

### 4. Roadmap Generator → Use `json-canvas` + `obsidian-bases`

**Implementation:**
```python
# .claude/agents/roadmap-generator.md
You are a roadmap generator using Obsidian skills.

When asked to create roadmap:

1. Use obsidian-bases to read Feature Prioritization database:
   - Sort by RICE score
   - Group by Recommendation (v1.2, v1.3, v2.0)

2. Use json-canvas to create visual roadmap:
   - File: "05 - Releases & Updates/Product Roadmap.canvas"
   - Structure:
     - Columns: Q1 2026 | Q2 2026 | Q3 2026 | Backlog
     - Cards: Each feature (color-coded by theme)
     - Arrows: Dependencies between features
   - Color scheme:
     - Red: Returns & Refunds theme
     - Blue: Efficiency & Scale theme
     - Green: Enterprise features theme
   - Cards contain:
     - Feature name (wikilink to gap doc)
     - RICE score
     - Clients affected (count)
     - Effort estimate

3. Use obsidian-markdown to create text roadmap:
   - File: "05 - Releases & Updates/Roadmap Q1-Q2 2026.md"
   - Sections by release
   - Callouts for each theme:
     - > [!note] Theme: Returns & Refunds
   - Wikilinks to feature docs
   - Client impact summaries

4. Use obsidian-bases to create roadmap tracking database:
   - File: "05 - Releases & Updates/Roadmap Tracking.base"
   - Columns: Feature, Release, Status, Owner, Progress %
   - Views: Kanban by Release
```

**Usage:**
```
"Generate product roadmap for Q1-Q2 2026"
```

**Output:**
- Visual canvas roadmap (drag-and-drop)
- Text markdown roadmap
- Tracking database

**Tools used:** `obsidian-bases` (read prioritization), `json-canvas` (visual roadmap), `obsidian-markdown` (text version)

---

### 5. Gap Analysis Assistant → Use `obsidian-cli` + `obsidian-markdown`

**Implementation:**
```python
# .claude/agents/gap-analyzer.md
You are a gap analysis assistant using Obsidian skills.

When given a requirement:

1. Use obsidian-cli to search product capabilities:
   - Search: requirement keywords in "01 - MAIA Product/"
   - Read: Related workflow docs

2. Use obsidian-cli to check limitations:
   - Read: "01 - MAIA Product/Overview/Known Limitations"
   - Search: tags #limitation, #bug

3. Use obsidian-cli to find workarounds:
   - Read: "04 - QA & Known Issues/Workarounds Library"

4. Use obsidian-markdown to create gap analysis:
   - File: "04 - QA & Known Issues/gaps/GAP-XXX-[feature-name].md"
   - Frontmatter: owner, status, gap_type, priority
   - Callouts:
     - > [!warning] Gap: [Description]
     - > [!info] Expected Behavior: ...
     - > [!bug] Actual Behavior: ...
     - > [!tip] Workaround: ... (if available)
   - Wikilinks:
     - Related product docs
     - Affected client requirements
     - Similar limitations

5. Use obsidian-bases to update Feature Gap Tracker:
   - Add entry with gap details
   - Link to gap analysis doc
```

**Usage:**
```
"Analyze gap for multi-currency support requirement"
```

**Output:** Gap analysis note with proper callouts and wikilinks

**Tools used:** `obsidian-cli` (search), `obsidian-markdown` (create analysis)

---

### 6. Requirement Pattern Finder → Use `obsidian-cli` + `obsidian-bases`

**Implementation:**
```python
# .claude/agents/requirement-patterns.md
You are a requirement pattern finder using Obsidian skills.

When asked to find patterns:

1. Use obsidian-cli to search all client requirements:
   - Search: folder "03 - Clients/**/Requirements*.md"
   - Extract all requirement titles

2. Use obsidian-cli to group similar requirements:
   - Search for common keywords: "bulk", "multiple", "currency", etc.
   - Count how many clients mention each keyword

3. Use obsidian-bases to create Requirement Patterns database:
   - File: "03 - Clients/Requirement Patterns.base"
   - Columns:
     - Pattern Name
     - Client Count (number)
     - Clients (list of wikilinks)
     - Theme (select: Returns/Efficiency/Enterprise)
     - Common Pain Points (text)
     - Business Value (select: High/Med/Low)
   - Views:
     - Table: Sort by Client Count descending
     - Cards: Group by Theme
     - Chart: Bar chart of client count by pattern

4. Use obsidian-markdown to create pattern analysis:
   - Top patterns with client quotes
   - Themes emerging
   - Recommendations

5. Use json-canvas to create pattern map:
   - Clients connected to patterns they request
   - Visual clustering by theme
```

**Usage:**
```
"Find common patterns across all client requirements"
```

**Output:**
- Interactive database of patterns
- Pattern analysis document
- Visual pattern map (canvas)

**Tools used:** `obsidian-cli` (search), `obsidian-bases` (database), `json-canvas` (visual map)

---

### 7. KB Validator → Use `obsidian-cli`

**Implementation:**
```python
# .claude/agents/kb-validator.md
You are a KB validator using Obsidian skills.

When asked to validate KB:

1. Use obsidian-cli to get all notes in vault:
   - List all .md files
   - Exclude: .obsidian, .claude folders

2. For each note, check:
   - Has YAML frontmatter
   - Required fields exist: owner, status, last_reviewed
   - Status is valid: draft/review/approved/archived
   - Wikilinks are valid (links point to existing notes)
   - Tags match [[06 - Glossary & Taxonomy/Tag Dictionary]]

3. Use obsidian-cli to check for:
   - Broken wikilinks
   - Orphaned notes (no incoming links)
   - Outdated content (last_reviewed > 90 days)

4. Use obsidian-markdown to create validation report:
   - File: "00 - Home/KB Validation Report.md"
   - Callouts:
     - > [!success] Files Valid: XX
     - > [!warning] Issues Found: XX
     - > [!bug] Broken Links: XX
   - Tables with issue details
   - Wikilinks to files with issues

5. Use obsidian-bases to create issues tracking:
   - File: "00 - Home/KB Validation Issues.base"
   - Columns: File, Issue Type, Severity, Status
   - Views: Group by Issue Type, Filter by Severity
```

**Usage:**
```
"Validate the entire KB and report issues"
```

**Output:** Validation report + issues database

**Tools used:** `obsidian-cli` (validate), `obsidian-markdown` (report), `obsidian-bases` (issues tracking)

---

### 8. Stakeholder Update Generator → Use `obsidian-cli` + `obsidian-markdown`

**Implementation:**
```python
# .claude/agents/stakeholder-update.md
You are a stakeholder update generator using Obsidian skills.

When asked to create update for a client:

1. Use obsidian-cli to read recent changes:
   - Read: "05 - Releases & Updates/Feature Changelog"
   - Filter: Last 30 days

2. Use obsidian-cli to read client context:
   - Read: "03 - Clients/[Client]/Requirements Log"
   - Search: Client name in changelog (what affects them)

3. Use obsidian-cli to read upcoming:
   - Read: "05 - Releases & Updates/Upcoming Features"
   - Filter: Features client requested

4. Use obsidian-markdown to create update email:
   - File: "03 - Clients/[Client]/Updates/Update-YYYY-MM.md"
   - Frontmatter: date, client, sent_status
   - Callouts:
     - > [!success] Delivered This Month
     - > [!progress] In Progress
     - > [!info] Coming Soon
   - Wikilinks to delivered features
   - Embedded relevant screenshots (if available)

5. Optional: Use defuddle to import client feedback:
   - If client responds via web (email, Lark)
   - Import response into meeting notes
```

**Usage:**
```
"Generate monthly update for Acme Corp"
```

**Output:** Formatted update email with callouts and wikilinks

**Tools used:** `obsidian-cli` (read), `obsidian-markdown` (create update), `defuddle` (optional import)

---

## 🔧 Updated Skill Implementations

### 1. Template Auto-Filler → Use `obsidian-markdown`

**Implementation:**
```python
# .claude/skills/fill-template/SKILL.md
name: fill-template
description: Auto-fill KB templates using Obsidian Markdown

When user runs: /fill-template [template-name] --client=[name]

1. Use obsidian-cli to read template:
   - Read: "02 - PM Playbook/Templates/[Template] [template-name].md"

2. Use obsidian-cli to get client context:
   - Read: "03 - Clients/[client]/Client Overview.md"
   - Extract: PM owner, client details

3. Fill placeholders:
   - [Your Name] → PM owner or "Gareth"
   - YYYY-MM-DD → Today's date
   - [Client Name] → --client value

4. Use obsidian-markdown to create filled template:
   - Proper YAML frontmatter
   - Wikilinks: [[03 - Clients/[client]]]
   - Save to appropriate folder

5. Return wikilink to created note
```

**Usage:**
```bash
/fill-template requirement-gathering --client="Acme Corp"
```

**Output:** `[[03 - Clients/Acme Corp/requirement-gathering-2026-02-20]]`

**Tools used:** `obsidian-cli` (read), `obsidian-markdown` (create with wikilinks)

---

### 2. Epic Breakdown → Use `obsidian-markdown` + `json-canvas`

**Implementation:**
```python
# .claude/skills/epic-breakdown/SKILL.md
name: epic-breakdown
description: Break epic into user stories with visual map

When user runs: /epic-breakdown "[Epic description]"

1. Generate user stories (use /prd for structure)

2. Use obsidian-markdown to create each story:
   - File: "02 - PM Playbook/user-stories/US-XXX-title.md"
   - Frontmatter: epic, priority, effort
   - Callouts: > [!todo] Acceptance Criteria
   - Wikilinks to related stories

3. Use obsidian-markdown to create epic doc:
   - File: "02 - PM Playbook/epics/EPIC-XXX-name.md"
   - Embed all story links
   - Summary table

4. Use json-canvas to create visual breakdown:
   - File: "02 - PM Playbook/epics/EPIC-XXX-breakdown.canvas"
   - Center: Epic card
   - Around it: User story cards (linked to notes)
   - Arrows showing dependencies
   - Color-code by effort (Green=S, Yellow=M, Red=L)

5. Return wikilinks to epic doc and canvas
```

**Usage:**
```bash
/epic-breakdown "Bulk Operations Feature"
```

**Output:**
- Epic document with embedded stories
- Visual canvas showing breakdown
- Individual user story notes

**Tools used:** `obsidian-markdown` (stories), `json-canvas` (visual breakdown)

---

### 3. Dependency Mapper → Use `json-canvas`

**Implementation:**
```python
# .claude/skills/dependency-map/SKILL.md
name: map-dependencies
description: Create visual dependency map for features

When user runs: /map-dependencies "[Feature name]"

1. Use obsidian-cli to find related features:
   - Search for feature mentions
   - Find user stories related to feature

2. Analyze dependencies:
   - Prerequisites (must build first)
   - Blockers (can't build until X)
   - Related (good to build together)

3. Use json-canvas to create dependency map:
   - File: "02 - PM Playbook/dependencies/[Feature]-deps.canvas"
   - Center: Target feature (large card)
   - Left side: Prerequisites (red cards)
   - Right side: Dependent features (green cards)
   - Bottom: Related features (blue cards)
   - Arrows: Direction of dependency
   - Labels on arrows: "Blocks", "Requires", "Enhances"

4. Use obsidian-markdown to create build order doc:
   - Numbered list of build sequence
   - Wikilink to canvas for visual
   - Risk assessment

5. Return wikilink to canvas
```

**Usage:**
```bash
/map-dependencies "Bulk Operations"
```

**Output:** Visual dependency canvas + build order doc

**Tools used:** `obsidian-cli` (search), `json-canvas` (dependency map)

---

### 4. Import Client Requirements → Use `defuddle`

**Implementation:**
```python
# .claude/skills/import-requirements/SKILL.md
name: import-requirements
description: Import client requirements from web/email

When user runs: /import-requirements --url=[URL] --client=[name]

1. Use defuddle to fetch and clean web page:
   - Fetch URL (Lark doc, email, Notion page)
   - Clean HTML to markdown
   - Remove navigation, ads, etc.

2. Use obsidian-markdown to create requirement doc:
   - File: "03 - Clients/[client]/Requirements/req-YYYY-MM-DD.md"
   - Frontmatter: source_url, date, client
   - Callout: > [!info] Source: [URL]
   - Cleaned content from defuddle

3. Use obsidian-cli to extract action items:
   - Find bullet points, numbered lists
   - Convert to Obsidian tasks: - [ ] Item

4. Optional: Link to related product docs:
   - Search for feature mentions
   - Add wikilinks to relevant KB pages

5. Return wikilink to created requirement doc
```

**Usage:**
```bash
/import-requirements --url="https://lark.example.com/doc/abc123" --client="Acme Corp"
```

**Output:** Clean requirement doc in client folder

**Tools used:** `defuddle` (import + clean), `obsidian-markdown` (create note), `obsidian-cli` (extract tasks)

---

## 📊 Updated Comparison: What's Available vs Not Available

| Feature | Generic Tools (✅ Available) | Obsidian Skills (❌ Not Available) | Hybrid Approach (✅ Do This) |
|---------|------------------------------|-----------------------------------|----------------------------|
| **Search KB** | Grep (text patterns) | obsidian-cli (tags, links, metadata) | Grep + manual wikilink parsing |
| **Create notes** | Write (markdown) | obsidian-markdown (native wikilinks) | Write with [[wikilinks]] manually |
| **Data tables** | /xlsx (external Excel) | obsidian-bases (in-vault database) | Write table → You convert to .base |
| **Visual diagrams** | External (Mermaid, Excalidraw) | json-canvas (native) | Create .canvas JSON or manual in Obsidian |
| **Import docs** | Copy-paste | defuddle (auto-clean web) | Manual copy or use WebFetch |
| **Task management** | Manual checkboxes | obsidian-cli (native tasks API) | Write `- [ ]` checkboxes manually |
| **Wikilinks** | Manual `[[links]]` | Auto-resolution + validation | Manual `[[links]]` in Write/Edit |
| **Frontmatter** | Manual YAML | Auto-parsing + validation | Manual YAML in Write/Edit |

**Reality Check:**
- ✅ **Generic tools work great** for 90% of automation needs
- ✅ **Obsidian app features** (.base, .canvas) work great for visualization
- ✅ **Hybrid approach** gets you best of both worlds
- ❌ **Obsidian-specific skills** would be better, but not currently available
- 🔮 **Future:** If Obsidian skills become available, upgrade to them

**Recommended:** Start with [[Automation Implementation Guide]] today!

---

## 🎯 Quick Wins You Can Do RIGHT NOW

### 1. Convert Feature Gap Tracker to .base Database (Manual in Obsidian)

**Step 1:** Create markdown table with Claude Code
```
"Read 04 - QA & Known Issues/Feature Gap Tracker.md
and create a well-formatted table with all gaps"
```

**Step 2:** In Obsidian UI:
- Open the Feature Gap Tracker note
- Select the table
- Right-click → "Convert to database" (or use Bases plugin)
- Add views: Sort by Priority, Filter by Status, Group by Release
- Save as `Feature Gap Tracker.base`

**Result:** Sortable, filterable gap tracker! ✅

**Alternative (Advanced):** Ask Claude Code to create the .base JSON file directly
```
"Create a .base database file for Feature Gap Tracker with columns:
Gap ID, Feature, Priority, Impact, Status, Target Release"
```

---

### 2. Create Visual Product Roadmap Canvas (Manual in Obsidian)

**Step 1:** Get data from Claude Code
```
"List all features from Feature Gap Tracker grouped by target release
(v1.2, v1.3, v2.0) with priority and client count"
```

**Step 2:** In Obsidian UI:
- Create new canvas: `05 - Releases & Updates/Product Roadmap.canvas`
- Add columns for each release
- Add cards for features (from Claude Code output)
- Color-code by theme (Red: Returns, Blue: Efficiency, Green: Enterprise)
- Draw arrows for dependencies

**Result:** Drag-and-drop roadmap visualization! ✅

**Alternative (Advanced):** Ask Claude Code to generate the .canvas JSON structure
```
"Create a canvas file showing product roadmap with releases as columns
and features as cards, using the Feature Gap Tracker data"
```

---

### 3. Convert Request Intake Inbox to Database (Manual in Obsidian)

**Step 1:** Ensure table exists
```
"Read 09 - Intake & Triage/Request Intake Inbox.md
and ensure it has a proper table format"
```

**Step 2:** In Obsidian UI:
- Open Request Intake Inbox
- Convert table to database (Bases plugin)
- Add kanban view grouped by Status
- Columns: New → Triaged → In Progress → Completed
- Save as `Request Intake Inbox.base`

**Result:** Trello-like board for request tracking! ✅

---

## 💡 Recommended Implementation Order (UPDATED - Hybrid Approach)

### Week 1: Automate Core Workflows with Generic Tools
**Focus:** [[Automation Implementation Guide]] implementations
1. ✅ Template Filler - Use Read + Write (5 min setup)
2. ✅ Triage Assistant - Use Grep + Read + Write (30 min setup)
3. ✅ Client Summary - Use Grep + Read + Task (Explore) (20 min setup)

**ROI:** 12 hrs/month saved

---

### Week 2: Convert to Obsidian Databases (Manual)
**Focus:** Better visualization in Obsidian UI
4. Feature Gap Tracker → `.base` database (you create in Obsidian)
5. Request Intake Inbox → `.base` with kanban view (you create)
6. Test Scenarios Index → `.base` with filters (you create)

**Benefit:** Sortable, filterable data without leaving Obsidian

---

### Week 3: Create Visual Maps (Manual)
**Focus:** Product strategy visualization
7. Product Roadmap → `.canvas` visual (you create in Obsidian)
8. Feature Dependencies → `.canvas` maps (you create)
9. Client Ecosystem → `.canvas` per client (you create)

**Benefit:** Drag-and-drop visual planning

---

### Week 4: Advanced - Claude Code + JSON
**Focus:** Claude Code updating .base/.canvas files directly
10. Claude Code reads/writes .base JSON for bulk updates
11. Claude Code generates .canvas JSON for complex diagrams
12. Test and refine workflows

**Benefit:** Full automation even for databases/canvases

---

## 🎯 Immediate Next Steps (Start Today)

1. **Implement Template Filler** using [[Automation Implementation Guide]]
   ```
   "Create a Template Filler using Read to get template,
   Write to create filled version with today's date and client name"
   ```
   **Time:** 5 minutes | **Saves:** 2 hrs/month

2. **Implement Triage Assistant** using Grep + Read
   ```
   "Create a Triage Assistant that searches Known Limitations
   and Feature Gap Tracker to classify new requests"
   ```
   **Time:** 30 minutes | **Saves:** 4 hrs/month

3. **Convert one table to .base** manually in Obsidian
   - Pick: Feature Gap Tracker or Request Intake Inbox
   - Open in Obsidian → Convert to database
   **Time:** 2 minutes | **Benefit:** Interactive data view

---

---

## 🎬 Conclusion & Recommendation

**Current Status (2026-02-21):**
- ❌ Obsidian-specific skills NOT available in Claude Code
- ✅ Generic Claude Code tools (Grep, Read, Write, Edit, Glob, Task) fully functional
- ✅ Obsidian app features (Bases, Canvas) available for manual use
- ✅ Hybrid approach provides 90% of the benefits

**Recommended Path Forward:**

### Phase 1: Implement Now (This Week)
**Use [[Automation Implementation Guide]]** to build automations with generic tools:
1. Template Filler (5 min setup → saves 2 hrs/month)
2. Triage Assistant (30 min setup → saves 4 hrs/month)
3. Client Summary (20 min setup → saves 3 hrs/month)

**ROI:** 9 hrs/month saved with ~1 hour of setup

### Phase 2: Enhance with Obsidian UI (Next Week)
**Manually convert to .base and .canvas** in Obsidian:
1. Feature Gap Tracker → .base database
2. Request Intake Inbox → .base kanban
3. Product Roadmap → .canvas visual

**Benefit:** Better visualization, stays in vault

### Phase 3: Advanced (Later)
**Teach Claude Code to manipulate .base/.canvas JSON:**
1. Read .base file structure
2. Write scripts to update .base programmatically
3. Generate .canvas JSON for complex diagrams

**Benefit:** Full automation of databases/canvases

---

**Bottom Line:** You don't need Obsidian-specific skills to get massive value from automation. Start with generic tools today, enhance with Obsidian features manually, upgrade to JSON manipulation when ready.

---

## See Also

- **[[Automation Implementation Guide]]** ⭐ **START HERE** - Practical implementations using available tools
- [[Automation Roadmap]] — Original automation plan (general KB)
- [[PM Automation - Product Focus]] — PM-specific automations
- [[Quick Reference]] — Quick links to KB pages
- [[CLAUDE.md]] — KB conventions and standards

---

## Document History

- **2026-02-21:** Updated to reflect Obsidian skills NOT available; added hybrid approach
- **2026-02-20:** Initial version assuming Obsidian skills available

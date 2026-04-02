---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Automation Master Guide

**Complete guide to automating MAIA PM workflows** using existing Claude Code tools.

> [!info] **What's Available**
> - ✅ Generic Claude Code tools: Read, Write, Edit, Grep, Glob, Task (Explore agent)
> - ✅ Available skills: /prd, /xlsx, /pdf, /docx, /webapp-testing
> - ✅ Obsidian features: Bases (.base), Canvas (.canvas) — manually creatable in Obsidian UI
> - ❌ Obsidian-specific Claude Code skills: NOT available (obsidian-cli, obsidian-markdown, etc.)

---

## 📋 Table of Contents

1. [Decision Framework](#decision-framework) — Subagent vs Skill
2. [Subagents (9 total)](#subagents) — Multi-step autonomous agents
3. [Skills (7 total)](#skills) — Single-purpose user commands
4. [Implementation Recipes](#implementation-recipes) — How to build with available tools
5. [Priority & ROI](#priority--roi) — What to build first
6. [Quick Start](#quick-start) — Get started today

---

## Decision Framework

### Use Subagent (Task tool) When:
- ✅ Needs to search/explore multiple files
- ✅ Requires reasoning and analysis
- ✅ Multi-step workflow with decisions
- ✅ Output depends on what's discovered
- ✅ Needs autonomous operation

**Examples:** Triage Assistant, Client Summary, Gap Analysis, Feature Prioritizer

### Use Skill When:
- ✅ Clear input → clear output
- ✅ Single-step or linear workflow
- ✅ Templating or formatting task
- ✅ No exploration needed
- ✅ User-invocable command (/command-name)

**Examples:** Template Filler, Test Generator, Release Notes, RICE Calculator

---

## Subagents

### Category 1: Core PM Operations

#### 1. Triage Assistant
**Purpose:** Automate request classification (Product/Config/Custom/Bug)
**Priority:** 🔴 Critical
**Time Saved:** 30min per request

**What it does:**
1. Reads request from [[09 - Intake & Triage/Request Intake Inbox]]
2. Searches KB for related features (Grep + Read)
3. Checks [[01 - MAIA Product/Overview/Known Limitations]]
4. Classifies as PRODUCT/CONFIG/CUSTOM/BUG
5. Creates [[02 - PM Playbook/Templates/[Template] Triage Decision Record]]

**Implementation:** Use Grep (search KB) + Read (check limitations) + Write (create decision)

**Usage:**
```
"Triage this request: Client wants to create multiple credit notes per invoice"
```

---

#### 2. Client Context Summarizer
**Purpose:** Instant overview of any client
**Priority:** 🟡 High
**Time Saved:** 15min before each meeting

**What it does:**
1. Reads all files in `03 - Clients/[Client Name]/` (Glob + Read)
2. Searches KB for client mentions (Grep)
3. Aggregates: requirements, meetings, gaps, config deviations
4. Summarizes recent activity

**Implementation:** Use Glob (find files) + Read (content) + Grep (search mentions)

**Usage:**
```
"Summarize everything about Acme Corp"
```

---

#### 3. Gap Analysis Assistant
**Purpose:** Compare client needs vs MAIA capabilities
**Priority:** 🟡 High
**Time Saved:** 20min per requirement

**What it does:**
1. Reads client requirement
2. Searches product docs for related features (Explore agent)
3. Checks [[01 - MAIA Product/Overview/Known Limitations]]
4. Identifies gaps (Missing Requirement/Build/Capability)
5. Finds workarounds from [[04 - QA & Known Issues/Workarounds Library]]
6. Generates [[02 - PM Playbook/Templates/[Template] Feature Gap Analysis]]

**Implementation:** Use Explore agent (search) + Read (limitations) + Write (gap analysis)

**Usage:**
```
"Analyze gap for Acme Corp's multi-currency requirement"
```

---

#### 4. KB Validator
**Purpose:** Check KB health and consistency
**Priority:** 🟢 Medium
**Time Saved:** Quarterly audits automated

**What it does:**
1. Scans all `.md` files (Glob)
2. Validates YAML frontmatter (Read)
3. Checks for broken wikilinks (Grep)
4. Verifies tag usage against [[06 - Glossary & Taxonomy/Tag Dictionary]]
5. Flags outdated content (last_reviewed > 90 days)
6. Generates validation report

**Implementation:** Use Glob (find files) + Read (validate) + Grep (check links/tags)

**Usage:**
```
"Validate the KB and report issues"
```

---

### Category 2: Product Strategy & Planning

#### 5. Feature Prioritization Engine
**Purpose:** Prioritize features using RICE framework
**Priority:** 🔴 Critical
**Time Saved:** 2 hours per prioritization session

**What it does:**
1. Reads all feature requests from [[04 - QA & Known Issues/Feature Gap Tracker]]
2. Analyzes Reach (client count), Impact (value), Confidence, Effort
3. Calculates RICE scores: (Reach × Impact × Confidence) / Effort
4. Generates prioritized backlog with reasoning

**Implementation:** Use Grep (find features) + Read (details) + /xlsx (calculate RICE)

**Usage:**
```
"Prioritize all open feature requests using RICE framework"
"Which feature should we build next?"
```

---

#### 6. Roadmap Generator
**Purpose:** Generate product roadmap from backlog
**Priority:** 🔴 Critical
**Time Saved:** 4 hours per roadmap

**What it does:**
1. Reads prioritized features
2. Groups by themes/epics (Returns, Efficiency, Enterprise)
3. Assigns to releases based on priority and capacity
4. Generates visual roadmap

**Implementation:** Use Read (features) + /xlsx (roadmap spreadsheet) + /pdf (visual export)

**Usage:**
```
"Generate roadmap for Q1-Q2 2026"
"Create roadmap showing next 3 releases"
```

---

#### 7. Client Impact Analyzer
**Purpose:** Understand which clients are affected by features/bugs
**Priority:** 🟡 High
**Time Saved:** 1 hour per analysis

**What it does:**
1. Searches all client folders for feature mentions (Grep)
2. Assesses impact severity per client (CRITICAL/HIGH/MEDIUM/NONE)
3. Generates impact report with client quotes and revenue at risk

**Implementation:** Use Grep (search clients) + Read (get context)

**Usage:**
```
"Which clients are affected by multiple credit notes limitation?"
"Impact analysis for bulk operations feature"
```

---

#### 8. Requirement Pattern Finder
**Purpose:** Find common patterns across client requirements
**Priority:** 🟡 High
**Time Saved:** Analysis automated monthly

**What it does:**
1. Reads all client requirement docs (Explore agent)
2. Analyzes patterns and themes
3. Groups similar requests
4. Identifies most-requested features

**Implementation:** Use Explore agent (search) + Grep (find patterns) + Read (details)

**Usage:**
```
"Find common patterns across all client requirements"
"Which features are requested by multiple clients?"
```

---

#### 9. Stakeholder Update Generator
**Purpose:** Generate client updates, executive summaries
**Priority:** 🟢 Medium
**Time Saved:** 45min per update

**What it does:**
1. Reads [[05 - Releases & Updates/Feature Changelog]]
2. Reads client folder for context
3. Generates stakeholder-appropriate updates
4. Formats for different audiences (client, exec, internal)

**Implementation:** Use Read (changelog + requirements) + Write (update email)

**Usage:**
```
"Generate client update for Acme Corp"
"Create executive summary of Q1 progress"
```

---

## Skills

### Category 1: Templating & Documentation

#### 1. Template Auto-Filler
**Command:** `/fill-template`
**Priority:** 🔴 Critical
**Time Saved:** 5min per template use

**What it does:**
1. Copies template from `02 - PM Playbook/Templates/`
2. Fills placeholders (client, PM, date)
3. Links to related KB pages
4. Saves to appropriate folder

**Implementation:** Use Read (template + context) + Write (filled template)

**Usage:**
```bash
/fill-template requirement-gathering --client="Acme Corp"
/fill-template user-story --feature="Bulk Operations"
/fill-template qa-scenario --story="US-123"
```

---

#### 2. Test Scenario Generator
**Command:** `/gen-test-scenario`
**Priority:** 🟡 High
**Time Saved:** 10min per story

**What it does:**
1. Reads user story file
2. Extracts acceptance criteria
3. Generates test steps from criteria
4. Fills [[02 - PM Playbook/Templates/[Template] QA Scenario]]

**Implementation:** Use Read (story + template) + Write (test scenario)

**Usage:**
```bash
/gen-test-scenario "02 - PM Playbook/user-stories/US-123-bulk-operations.md"
```

---

#### 3. Release Notes Generator
**Command:** `/gen-release-notes`
**Priority:** 🟢 Medium
**Time Saved:** 1hr per release

**What it does:**
1. Reads [[05 - Releases & Updates/Feature Changelog]]
2. Extracts changes by date range or version
3. Categorizes: New Features, Improvements, Bug Fixes
4. Formats into release notes structure

**Implementation:** Use Read (changelog) + Grep (filter) + Write (release notes)

**Usage:**
```bash
/gen-release-notes --version="v1.2"
/gen-release-notes --since="2026-02-01"
```

---

### Category 2: Product Management

#### 4. Epic Breakdown
**Command:** `/epic-breakdown`
**Priority:** 🟡 High
**Time Saved:** 30min per epic

**What it does:**
1. Takes large feature description (epic)
2. Breaks down into smaller user stories
3. Assigns story IDs
4. Links stories to epic

**Implementation:** Use /prd (structure) + Read (template) + Write (stories)

**Usage:**
```bash
/epic-breakdown "Bulk Operations Feature"
```

---

#### 5. RICE Score Calculator
**Command:** `/rice`
**Priority:** 🟢 Medium
**Time Saved:** Quick prioritization decisions

**What it does:**
1. Takes feature details (reach, impact, confidence, effort)
2. Calculates RICE score
3. Compares to other features in backlog
4. Provides recommendation

**Implementation:** Use Grep (get backlog) + /xlsx (calculate + compare)

**Usage:**
```bash
/rice --feature="Multiple Credit Notes" --reach=8 --impact=high --confidence=100 --effort=3
```

---

#### 6. Feature Comparison Matrix
**Command:** `/compare-features`
**Priority:** 🟢 Medium
**Time Saved:** Decision support

**What it does:**
1. Takes 2-5 features as input
2. Compares across dimensions (effort, impact, reach, etc.)
3. Generates comparison table
4. Provides recommendation

**Implementation:** Use Grep (find features) + Read (details) + /xlsx (compare)

**Usage:**
```bash
/compare-features "Multiple CN" "Bulk Operations" "Multi-Currency"
```

---

#### 7. Lark Publisher
**Command:** `/publish-to-lark`
**Priority:** 🟢 Medium
**Time Saved:** 15min per page

**What it does:**
1. Reads markdown file
2. Converts wikilinks to Lark format
3. Formats tables, code blocks for Lark
4. Updates YAML frontmatter with `lark_url`

**Implementation:** Use Read (content) + Edit (update metadata)

**Usage:**
```bash
/publish-to-lark "01 - MAIA Product/Core Workflows/Quote-to-Cash Flow.md"
```

---

## Implementation Recipes

### Key Tools Available

**Core Operations:**
- **Read** — Read any markdown file
- **Glob** — Find files by pattern (`**/*.md`, `03 - Clients/**/Requirements*.md`)
- **Grep** — Search content (regex supported)
- **Write** — Create new files
- **Edit** — Modify existing files

**Agents:**
- **Task (Explore agent)** — Multi-file exploration and search

**Skills:**
- `/prd` — Generate PRDs
- `/xlsx` — Spreadsheet operations
- `/pdf` — PDF export
- `/docx` — Word documents

---

### Recipe 1: Template Filler (5 minutes to implement)

**Create:** `.claude/skills/fill-template/SKILL.md`

```markdown
---
name: fill-template
description: Auto-fill KB templates with context
---

When user runs: /fill-template [template-name] --client=[name]

1. Use Read to get template:
   - "02 - PM Playbook/Templates/[Template] [template-name].md"

2. Use Read to get client context (if --client provided):
   - "03 - Clients/[client]/Client Overview.md"

3. Fill placeholders:
   - [Your Name] → PM owner or "Gareth"
   - YYYY-MM-DD → Today's date
   - [Client Name] → --client value

4. Use Write to save filled template

5. Return path to new file
```

**Test:**
```bash
/fill-template requirement-gathering --client="Acme Corp"
```

---

### Recipe 2: Triage Assistant (30 minutes to implement)

**Create:** `.claude/agents/triage-assistant.md`

```markdown
You are a triage assistant. When given a request:

1. Use Grep to search KB for similar features:
   - Search: "01 - MAIA Product/**/*.md"
   - Search: "04 - QA & Known Issues/**/*.md"

2. Use Read to check:
   - [[01 - MAIA Product/Overview/Known Limitations]]
   - [[04 - QA & Known Issues/Feature Gap Tracker]]

3. Classify as: PRODUCT / CONFIG / CUSTOM / BUG

4. Use Read to get template:
   - [[02 - PM Playbook/Templates/[Template] Triage Decision Record]]

5. Fill template and save to:
   - 09 - Intake & Triage/decisions/TRI-YYYY-MM-DD-XXX.md
```

**Usage:**
```
"Triage this request: Client wants multiple credit notes per invoice"
```

---

### Recipe 3: Client Summary (20 minutes to implement)

**Create:** `.claude/agents/client-summary.md`

```markdown
You are a client context summarizer. When given a client name:

1. Use Glob to find all client files:
   - Pattern: "03 - Clients/[Client Name]/**/*.md"

2. Use Read to read each file:
   - Client Overview.md
   - Requirements Log.md
   - Meeting Notes/*.md

3. Use Grep to search KB for client mentions:
   - Pattern: "[Client Name]"
   - Files: "04 - QA & Known Issues/**/*.md"

4. Format summary with sections:
   - Client Overview
   - Active Requirements
   - Known Issues
   - Recent Activity
```

**Usage:**
```
"Summarize all information about Acme Corp"
```

---

### Recipe 4: Feature Prioritizer (1 hour to implement)

**Create:** `.claude/agents/feature-prioritizer.md`

```markdown
You are a feature prioritization engine. To prioritize features:

1. Use Grep to find all feature requests:
   - Search: "04 - QA & Known Issues/Feature Gap Tracker.md"

2. For each feature, use Grep to count client mentions:
   - Search all client folders
   - Count = Reach

3. Use /xlsx to create RICE spreadsheet:
   - Columns: Feature, Reach, Impact, Confidence, Effort, RICE Score
   - Formula: RICE = (R × I × C) / E
   - Sort by RICE descending

4. Generate prioritized backlog report
```

**Usage:**
```
"Prioritize all feature requests using RICE framework"
```

---

## Priority & ROI

### Phase 1: Critical Automation (Week 1) — 12 hrs/month saved

**Implement these first:**

1. ✅ **Template Filler** (/fill-template)
   - Impact: 5min × 40 uses/month = **3.3 hrs/month**
   - Complexity: Low (5 min to build)

2. ✅ **Triage Assistant** (subagent)
   - Impact: 30min × 10 requests/month = **5 hrs/month**
   - Complexity: Medium (30 min to build)

3. ✅ **Client Summary** (subagent)
   - Impact: 15min × 16 meetings/month = **4 hrs/month**
   - Complexity: Medium (20 min to build)

**Total Phase 1:** 12.3 hrs/month saved, ~1 hour to implement

---

### Phase 2: High-Value Tools (Week 2-3) — Additional 10 hrs/month

4. ✅ **Gap Analysis** (subagent)
   - Impact: 20min × 8 analyses/month = **2.7 hrs/month**

5. ✅ **Test Scenario Generator** (/gen-test-scenario)
   - Impact: 10min × 20 stories/month = **3.3 hrs/month**

6. ✅ **Feature Prioritizer** (subagent)
   - Impact: 2hr × 2 sessions/month = **4 hrs/month**

**Total Phase 2:** 10 hrs/month saved

---

### Phase 3: Strategic Tools (Week 4+) — Additional 12 hrs/month

7. ✅ **Roadmap Generator** (subagent)
   - Impact: 4hr × 1 roadmap/month = **4 hrs/month**

8. ✅ **Stakeholder Updates** (subagent)
   - Impact: 45min × 8 clients/month = **6 hrs/month**

9. ✅ **Release Notes** (/gen-release-notes)
   - Impact: 1hr × 2 releases/month = **2 hrs/month**

**Total Phase 3:** 12 hrs/month saved

---

### Combined ROI Summary

| Phase | Tools | Monthly Savings (per PM) | Team Savings (4 PMs) |
|-------|-------|--------------------------|----------------------|
| Phase 1 | 3 tools | 12 hrs | 48 hrs |
| Phase 2 | 3 tools | 10 hrs | 40 hrs |
| Phase 3 | 3 tools | 12 hrs | 48 hrs |
| **Total** | **9 tools** | **34 hrs/month** | **136 hrs/month** |

**Bottom Line:** Implementing all 9 priority automations saves **34 hours per PM per month** = **136 hours per month for the team**.

---

## Quick Start

### Option 1: Start with Template Filler (5 minutes)

**Simplest automation, immediate impact:**

```bash
# Just ask Claude Code:
"Create a Template Filler: when I run /fill-template requirement-gathering --client='Acme Corp',
read the template from 02 - PM Playbook/Templates/[Template] Requirement Gathering.md,
fill in today's date and client name, and save it to 03 - Clients/Acme Corp/"
```

**Test it:**
```bash
/fill-template requirement-gathering --client="Acme Corp"
```

**Time to implement:** 5 minutes
**Time saved:** 3.3 hrs/month

---

### Option 2: Start with Triage Assistant (30 minutes)

**Highest impact operational automation:**

```bash
# Ask Claude Code:
"Create a Triage Assistant subagent that:
1. Searches Known Limitations and Feature Gap Tracker
2. Classifies requests as PRODUCT/CONFIG/CUSTOM/BUG
3. Creates a triage decision record

Test it with: 'Client wants multiple credit notes per invoice'"
```

**Time to implement:** 30 minutes
**Time saved:** 5 hrs/month

---

### Option 3: Start with Client Summary (20 minutes)

**Best for meeting prep:**

```bash
# Ask Claude Code:
"Create a Client Summary subagent that reads all files in a client folder,
searches the KB for mentions of that client, and generates a comprehensive summary"
```

**Test it:**
```
"Summarize everything about Acme Corp"
```

**Time to implement:** 20 minutes
**Time saved:** 4 hrs/month

---

## See Also

- [[00 - Home/README]] — KB governance
- [[Quick Reference]] — Quick links to KB pages
- [[CLAUDE.md]] — KB conventions for AI assistants
- [[Changelog]] — Recent KB updates
- [[Autoresearch macOS — Overnight AI Workflow Improver]] — Autonomously improve AI prompts and CLAUDE.md overnight using Apple Silicon

---

## Document History

- **2026-02-21:** Created as consolidation of 3 separate automation files
  - Merged: Automation Roadmap.md
  - Merged: PM Automation - Product Focus.md
  - Merged: Automation Implementation Guide.md
  - Note: Automation with Obsidian Skills.md kept separate (reference only)

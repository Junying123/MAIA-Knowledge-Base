---
owner: Gareth
status: approved
last_reviewed: 2026-06-23
---

# Lark CLI + AI Agent Integration Guide

> **Why this guide exists:** Lark is our single source of truth. AI agents (Claude Code, Codex) can talk to Lark directly via `lark-cli` — reading wiki, writing Base records, creating tasks, and posting internal updates — without manual copy-paste between tools.

---

## Table of Contents

1. [Why We Need This](#1-why-we-need-this)
2. [Setup (One-Time)](#2-setup-one-time)
3. [Full Command Reference](#3-full-command-reference)
4. [Collaborator Management](#4-collaborator-management)
5. [Use Cases by Role](#5-use-cases-by-role)
6. [Lark Base Workflows (Mindhive OS)](#6-lark-base-workflows-mindhive-os)
7. [AI Agent Integration Patterns](#7-ai-agent-integration-patterns)
8. [Workflow Optimisation](#8-workflow-optimisation)
9. [Potential Use Cases to Explore](#9-potential-use-cases-to-explore)

---

## 1. Why We Need This

### The Problem

| Without CLI | With CLI |
|---|---|
| PM updates Lark manually after every session | AI agent writes directly to Lark during session |
| Dev checks Lark, then checks docs, then asks in chat | One command pulls current state from Lark Base |
| Leadership sees stale data in syncs | Pre-sync digest auto-posted 2h before meeting |
| Repetitive copy-paste between tools | Automate the boring parts |

### Lark as SSoT

Lark is where decisions live, tasks are assigned, docs are published, and client data is tracked. The Markdown KB (this vault) is the AI agent's working memory — it writes here, then publishes to Lark. Without CLI, that last step is always manual.

### AI Agents as Force Multipliers

Claude Code and Codex can call `lark-cli` commands directly. This means:

- `/daily-update` → formats the WhatsApp client update (client-facing comms stay on WhatsApp)
- `/wrap-up` → syncs KB changes **and** updates the Lark Base client tracker
- `/client-sync` → reads live data from Lark Base, not a stale Markdown file
- A PM types one prompt → agent creates a Lark task, assigns it, sets due date, notifies the chat

The CLI is what makes AI agents actually useful in a Lark-native team, not just a glorified text editor.

---

## 2. Setup (One-Time)

### Prerequisites: Corporate Custom App

Before installing anything, you need a Lark Custom App with credentials.

**Step 1 — Create app**
1. Go to `https://open.larksuite.com/app` (admin or developer role required)
2. Click **Create Custom App** → name it (e.g. `MAIA Claude CLI`)
3. Copy **App ID** and **App Secret** — store in 1Password or equivalent

**Step 2 — Add permission scopes**

In the app's **Permissions & Scopes** tab, enable:

| Scope | Used for |
|---|---|
| `wiki:space:read` / `wiki:space:retrieve` | Read & list wiki spaces |
| `wiki:node:read` / `wiki:node:retrieve` / `wiki:node:create` | Wiki node operations |
| `wiki:member:retrieve` / `wiki:member:create` / `wiki:member:update` | Manage collaborators |
| `task:task:read` / `task:task:write` | Create and manage tasks |
| `im:message:send_as_bot` | Post automated messages |
| `docx:document:readonly` | Read documents |
| `sheets:spreadsheet:readonly` / `sheets:spreadsheet:write` | Read/write sheets |
| `base:app:read` / `base:record:write` | Lark Base CRUD |
| `contact:user.base:readonly` | Resolve user IDs for assignments |
| `calendar:calendar:readonly` / `calendar:event:write` | Calendar operations |

**Step 3 — Enable Bot capability**
Under **App Capabilities** → enable **Bot**. Required for `--as bot` operations (sending automated messages, Base record writes).

**Step 4 — Publish and get approved**
Under **Version Management & Release** → Create Version → Submit for admin approval. Scopes are inactive until approved. Allow 1 business day.

### Install CLI

```bash
# Install CLI
npm install -g @larksuite/cli

# Add AI agent skills (lets Claude Code / Codex know how to use lark-cli)
npx skills add larksuite/cli -y -g

# Verify
lark-cli --version
lark-cli doctor
```

### Configure

```bash
# Initialize with your App ID + App Secret
lark-cli config init --new

# Authenticate as user (for accessing personal resources: wiki, calendar, drive)
lark-cli auth login --scope "wiki:space:read wiki:node:read wiki:node:retrieve wiki:node:create wiki:member:retrieve task:task:read task:task:write im:message:send_as_bot docx:document:readonly sheets:spreadsheet:readonly calendar:calendar:readonly"
```

> Bot identity (`--as bot`) works automatically after `config init` — no login needed.
> User identity (`--as user`) requires `auth login`. Both are needed for different operations.

---

## 3. Full Command Reference

All `lark-cli` domains available:

### Core Domains

| Domain | What it does |
|---|---|
| `wiki` | Wiki spaces, nodes, members |
| `base` | Lark Base tables, records, fields, views, dashboards, workflows |
| `task` | Tasks, tasklists, subtasks, assignments |
| `im` | Messages, group chats, threads, bookmarks |
| `calendar` | Events, attendees, scheduling |
| `docs` | Document read/write |
| `sheets` | Spreadsheet read/write |
| `drive` | File management, imports, permissions |
| `contact` | User directory, search |
| `approval` | Approval flows |
| `okr` | OKR objectives and key results |
| `mail` | Email, drafts, folders |
| `minutes` | Meeting minutes read |
| `vc` | Video conference, meeting notes |
| `slides` | Presentations |
| `whiteboard` | Whiteboard create/edit |
| `markdown` | Drive-native Markdown files |
| `attendance` | Attendance records |

### Wiki Commands

```bash
# List all wiki spaces
lark-cli wiki +space-list --as user

# List nodes in a space
lark-cli wiki +node-list --space-id <space_id> --as user

# Get node details (from URL)
lark-cli wiki +node-get --url "https://mindhive.larksuite.com/wiki/abc123" --as user

# Create a node
lark-cli wiki +node-create --space-id <id> --title "Feature Spec: COA" --as user

# Move a node
lark-cli wiki +move --node-token <token> --target-parent-token <parent_token> --as user

# Copy a node
lark-cli wiki +node-copy --node-token <token> --target-space-id <id> --as user

# Delete a node
lark-cli wiki +node-delete --node-token <token> --as user
```

### Task Commands

```bash
# Create a task
lark-cli task +create --title "Review Holsen UAT feedback" --due "2026-06-30T18:00:00+08:00"

# Assign a task
lark-cli task +assign --task-id <id> --user-id <open_id>

# Get my open tasks
lark-cli task +get-my-tasks

# Filter by due date
lark-cli task +get-my-tasks --due-end "2026-06-30T18:00:00+08:00"

# Complete a task
lark-cli task +complete --task-id <id>

# Search tasks
lark-cli task +search --query "Holsen" --page-size 20

# Create a tasklist
lark-cli task +tasklist-create --name "Holsen Phase 2"

# Add tasks to a list
lark-cli task +tasklist-task-add --tasklist-id <id> --task-ids <id1,id2>
```

### IM Commands

```bash
# Send a message to a chat
lark-cli im +messages-send --chat-id <chat_id> --content '{"text":"Pre-sync digest ready"}'

# Send as markdown
lark-cli im +messages-send --chat-id <chat_id> --msg-type markdown --content '{"text":"**Update**\n- Holsen: UAT done"}'

# Search for a chat by name
lark-cli im +chat-search --query "MAIA Leadership"

# Create a group chat
lark-cli im +chat-create --name "Holsen UAT Team" --user-id-list <ids>

# Search messages
lark-cli im +messages-search --query "UAT sign-off"

# Reply to a message thread
lark-cli im +messages-reply --message-id <id> --content '{"text":"Done"}'
```

### Base Commands (Lark Base)

```bash
# Get a Base
lark-cli base +base-get --base-token <token>

# List tables in a Base
lark-cli base +table-list --base-token <token>

# List records
lark-cli base +record-list --base-token <token> --table-id <table_id>

# Search records with filter
lark-cli base +record-search --base-token <token> --table-id <table_id> --filter '{"conditions":[{"field_name":"Status","operator":"is","value":["Active"]}]}'

# Create or update a record
lark-cli base +record-upsert --base-token <token> --table-id <table_id> --record '{"fields":{"Client":"Holsen","Status":"UAT"}}'

# Aggregate/query data
lark-cli base +data-query --base-token <token> --table-id <table_id> --dsl '{"group_by":["Status"],"metrics":[{"field":"Client","func":"COUNT"}]}'

# Create a table
lark-cli base +table-create --base-token <token> --name "Sprint Tracker"

# List fields
lark-cli base +field-list --base-token <token> --table-id <table_id>

# List views
lark-cli base +view-list --base-token <token> --table-id <table_id>

# Enable advanced permissions
lark-cli base +advperm-enable --base-token <token>

# Create a role
lark-cli base +role-create --base-token <token> --name "PM View Only"

# List Base workflows
lark-cli base +workflow-list --base-token <token>
```

### Calendar Commands

```bash
# View today's agenda
lark-cli calendar +agenda

# List events in range
lark-cli calendar events instance_view --params '{"calendar_id":"primary","start_time":"1750000000","end_time":"1750086400"}'

# Suggest meeting times
lark-cli calendar +suggest-times --attendee-ids <ids> --duration 60
```

### Contact Commands

```bash
# Search for a user
lark-cli contact +search-user --query "gareth"

# Get user details by open_id
lark-cli api GET /open-apis/contact/v3/users/<open_id> --params '{"user_id_type":"open_id"}' --format json
```

---

## 4. Collaborator Management

Managing who can access your Lark Wiki spaces.

### Concepts

| Member Type | Use for | ID format |
|---|---|---|
| `openid` | Individual users | `ou_xxx` |
| `openchat` | Group chats | `oc_xxx` |
| `appid` | Bot/app access | `cli_xxx` |
| `opendepartmentid` | Departments (user identity only) | `od_xxx` |

> **Corporate limit:** Adding departments requires `--as user`. Bot identity (`--as bot`) cannot add department members to wiki spaces.

### Add a Collaborator

```bash
# Step 1: Find the user's open_id
lark-cli contact +search-user --query "jun ying" --format json
# → copy open_id from result

# Step 2: Get the space_id from wiki URL
lark-cli wiki +node-get --url "https://mindhive.larksuite.com/wiki/abc123" --format json
# → copy space_id from data.node.space_id

# Step 3: Add member (viewer role)
lark-cli wiki +member-add --space-id <space_id> --member-type openid --member-id <open_id> --member-role viewer --as user

# Add as editor
lark-cli wiki +member-add --space-id <space_id> --member-type openid --member-id <open_id> --member-role editor --as user

# Add as admin
lark-cli wiki +member-add --space-id <space_id> --member-type openid --member-id <open_id> --member-role admin --as user
```

### Add a Group Chat as Collaborator

```bash
# Step 1: Find chat_id
lark-cli im +chat-search --query "MAIA Team" --format json
# → copy chat_id

# Step 2: Add as member
lark-cli wiki +member-add --space-id <space_id> --member-type openchat --member-id <chat_id> --member-role viewer --as user
```

### Add a Department

```bash
# Step 1: Search department
lark-cli api POST /open-apis/contact/v3/departments/search --as user \
  --params '{"department_id_type":"open_department_id"}' \
  --data '{"query":"Product"}' --format json
# → copy open_department_id

# Step 2: Add department (MUST use --as user)
lark-cli wiki +member-add --space-id <space_id> --member-type opendepartmentid --member-id <open_department_id> --member-role viewer --as user
```

### List & Remove Members

```bash
# List all members of a space
lark-cli wiki +member-list --space-id <space_id> --page-all --as user

# Remove a member (must match original member-type and member-role)
lark-cli wiki +member-remove --space-id <space_id> --member-type openid --member-id <open_id> --member-role viewer --as user
```

---

## 5. Use Cases by Role

### Product Manager

| Task | Command |
|---|---|
| Create task from standup notes | `lark-cli task +create --title "..." --due "..."` |
| Assign task to dev | `lark-cli task +assign --task-id <id> --user-id <open_id>` |
| Post internal update to team Lark chat | `lark-cli im +messages-send --chat-id <id> --content "..."` |
| Client-facing daily update | Formatted by AI → sent via WhatsApp manually |
| Check client status from Base | `lark-cli base +record-search --base-token <token> --table-id <id> --filter '...'` |
| Update client status in Base | `lark-cli base +record-upsert ...` |
| Create wiki page for new feature | `lark-cli wiki +node-create --space-id <id> --title "Feature: X"` |
| Add team member to wiki space | `lark-cli wiki +member-add ...` |
| Pull pre-sync digest | Script: read Base → format → `im +messages-send` |

### Developer

| Task | Command |
|---|---|
| Read feature spec from wiki | `lark-cli wiki +node-get --url <wiki_url>` |
| Check open tasks assigned to me | `lark-cli task +get-my-tasks` |
| Create a bug task with due date | `lark-cli task +create --title "Fix invoice PDF" --due "..."` |
| Complete a task after PR merge | `lark-cli task +complete --task-id <id>` |
| Read Base for client config data | `lark-cli base +record-list --base-token <token> --table-id <id>` |
| Post release note to channel | `lark-cli im +messages-send --chat-id <id> --msg-type markdown --content "..."` |
| Search past decisions in wiki | `lark-cli wiki +node-list --space-id <id>` + search |
| Read meeting minutes | `lark-cli minutes ...` |

### Product (Strategy / OKR)

| Task | Command |
|---|---|
| Read current OKRs | `lark-cli okr ...` |
| Track feature adoption in Base | `lark-cli base +data-query --dsl '{"group_by":["Feature"],"metrics":[...]}'` |
| Post weekly product update | `lark-cli im +messages-send ...` |
| Create wiki space for new workstream | `lark-cli wiki +space-create --name "..."` |
| Build pipeline tracker in Base | `lark-cli base +table-create ...` + `+field-create` |

---

## 6. Lark Base Workflows (Mindhive OS)

Lark Base is the structured data layer of Mindhive OS — it's where we track clients, sprints, features, and pipeline data.

### Client Pipeline Tracker

**Purpose:** Single view of all active and discovery clients with real-time status.

```bash
# Read active client statuses (AI agent does this on /client-sync)
lark-cli base +record-search \
  --base-token <mindhive_base_token> \
  --table-id <clients_table_id> \
  --filter '{"conditions":[{"field_name":"Status","operator":"isNot","value":["Closed"]}]}' \
  --format json

# Update a client status after UAT sign-off
lark-cli base +record-upsert \
  --base-token <token> \
  --table-id <id> \
  --record '{"fields":{"Client":"Holsen","Status":"Go-Live","Last Updated":"2026-06-23"}}'
```

### Sprint / Feature Tracker

```bash
# List current sprint tasks
lark-cli base +record-search \
  --base-token <token> \
  --table-id <sprint_table_id> \
  --filter '{"conditions":[{"field_name":"Sprint","operator":"is","value":["Sprint 12"]}]}'

# Count by status (aggregate)
lark-cli base +data-query \
  --base-token <token> \
  --table-id <id> \
  --dsl '{"group_by":["Status"],"metrics":[{"field":"Task","func":"COUNT"}]}'
```

### Base Automation (Workflow)

```bash
# List existing workflows in a Base
lark-cli base +workflow-list --base-token <token>

# Enable a workflow
lark-cli base +workflow-enable --base-token <token> --workflow-id <id>

# Disable a workflow
lark-cli base +workflow-disable --base-token <token> --workflow-id <id>
```

### Dashboard

```bash
# List dashboards in a Base
lark-cli base +dashboard-list --base-token <token>

# Get computed chart data
lark-cli base +dashboard-block-get-data --base-token <token> --dashboard-id <id> --block-id <block_id>
```

### Advanced Permissions (for client-specific views)

```bash
# Enable advanced permissions (per-record visibility control)
lark-cli base +advperm-enable --base-token <token>

# Create a "Client View Only" role
lark-cli base +role-create --base-token <token> --name "Client View Only"

# List all roles
lark-cli base +role-list --base-token <token>
```

---

## 7. AI Agent Integration Patterns

### How It Works

Claude Code and Codex have the `larksuite/cli` skills installed (`npx skills add larksuite/cli -y -g`). This means:

1. Agent knows all `lark-cli` command patterns and flags
2. Agent can call `lark-cli` in Bash during any session
3. Agent reads Lark data, processes it in context, writes back to Lark

The skills act as the agent's "API documentation" — it doesn't guess, it follows the skill patterns exactly.

### Pattern 1: Read Lark → Generate KB Content

```
Agent:
1. lark-cli minutes ... → reads meeting notes
2. Formats into KB template
3. Writes to Markdown KB
4. lark-cli wiki +node-create → publishes to Lark wiki
```

### Pattern 2: Docs Updated → Push to Lark Wiki

```
Agent (during session close):
1. Reads updated docs from local working files
2. lark-cli wiki +node-get → finds matching wiki node
3. lark-cli docs ... → updates content in Lark
4. lark-cli im +messages-send → notifies team in Lark chat
```

### Pattern 3: Lark Base as Live Context

```
Agent (during /client-sync):
1. lark-cli base +record-search → reads live client data from Base
2. Returns structured context to the session
3. No stale Markdown needed — always fresh
```

### Pattern 4: Automated Task Creation

```
Agent (during /standup or /dump):
1. Parses action items from notes
2. lark-cli contact +search-user → resolves assignee names to open_ids
3. lark-cli task +create → creates task with due date
4. lark-cli task +assign → assigns to correct person
5. lark-cli im +messages-send → notifies assignee
```

### Giving Agents Lark Context in Prompts

When prompting Claude Code or Codex with Lark-specific tasks, include:

```
Base token: <your_base_token>
Table ID: <your_table_id>
Wiki space ID: <your_space_id>
Chat ID (for notifications): <your_chat_id>
```

Store these in `brain/North Star.md` or `brain/Memories.md` so agents pick them up automatically at session start.

---

## 8. Workflow Optimisation

### What to Automate First

Highest ROI automation targets (most repetitive, lowest risk):

| Workflow | Before | After |
|---|---|---|
| Daily client update | PM writes, formats, pastes to WhatsApp | `/daily-update notes` → agent formats → PM copies to WhatsApp |
| Pre-sync digest | PM manually checks all clients | Cron script reads Base → posts digest 2h before meeting |
| Task creation from standup | PM types tasks into Lark manually | `/dump notes` → agent parses action items → creates tasks |
| Wiki publishing | PM copies Markdown to Lark manually | `/wrap-up` → agent publishes changed pages to wiki |
| Client status update | PM updates Base manually after each call | Agent updates Base during session close |

### Two Identity Rule

Always know which identity you're using:

```bash
--as user   # Your personal resources: calendar, wiki you own, drive files
--as bot    # App-level: send bot messages, write Base records, shared wikis
```

Most automations should run `--as bot`. Most human-triggered commands run `--as user`.

### Cron Patterns

```bash
# Pre-sync digest (weekdays 8am SGT)
0 0 * * 1-5   # UTC → adjust to 00:00 UTC = 08:00 SGT

# PM update reminder (daily 9am if Base row stale >48h)
0 1 * * 1-5

# Weekly OKR nudge (Monday morning)
0 0 * * 1
```

---

## 9. Potential Use Cases to Explore

### Short-Term (Ready to build now)

| Use Case | Commands needed |
|---|---|
| **Auto-post internal update to team Lark chat** | `im +messages-send` (internal only — client updates go via WhatsApp) |
| **Create tasks from `/dump` notes** | `contact +search-user` + `task +create` + `task +assign` |
| **Wiki publishing on `/wrap-up`** | `wiki +node-create` + `docs` write |
| **Live client status in `/client-sync`** | `base +record-search` |
| **Add collaborators to new client wiki spaces** | `wiki +member-add` |

### Medium-Term (Needs some design)

| Use Case | Notes |
|---|---|
| **Pre-sync leadership digest** | Cron: read Base → format → `im +messages-send` to leadership chat |
| **Stale update reminder** | Cron: check Base `last_updated` field → nudge PM via IM if >48h |
| **Release note auto-post** | On git tag → `im +messages-send` to #releases with changelog |
| **Sprint dashboard auto-update** | `base +record-upsert` on task status change events |
| **OKR progress check** | `okr` commands → weekly digest to team |
| **Meeting minutes → wiki** | `minutes` read → format → `wiki +node-create` |
| **Calendar event context** | `calendar +agenda` → prepend to standup context |

### Long-Term (Architecture work needed)

| Use Case | Notes |
|---|---|
| **Client portal in Lark Base** | Advanced permissions + role-based views per client |
| **Multi-agent pipeline** | Claude orchestrates: reads Lark → processes → writes back → notifies |
| **Approval workflow triggers** | `approval` commands + Base workflow to gate feature sign-offs |
| **Automated QA task generation** | From wiki spec changes → `task +create` test tasks |
| **VC meeting summary → wiki** | `vc` + `minutes` → auto-publish post-meeting notes |

---

## See Also

- [[02 - PM Playbook/Guides/Lark CLI for PM Workflows]] — Original PM workflow guide
- [[02 - PM Playbook/Processes/Publish to Lark SOP]] — Manual publishing workflow
- [[brain/North Star.md]] — Store Base tokens and space IDs here for agent context
- [[02 - PM Playbook/Guides/Automation Master Guide]] — Broader automation patterns

---
owner: Gareth
status: approved
last_reviewed: 2026-04-02
---

# Lark CLI for PM Workflows

**Automate MAIA PM workflows using `@larksuite/cli`** — the official Lark/Feishu CLI with 200+ commands across Calendar, Tasks, IM, Docs, Sheets, Base, and more.

> [!tip] **Why This?**
> PM pain point: Leadership has stale information going into sync meetings because PMs update materials last-minute. This CLI enables automated pre-sync digests and update nudges — so leadership always sees fresh data before meetings start.

---

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Command Reference](#command-reference)
4. [Workflows](#workflows)
5. [Technical Notes](#technical-notes)
6. [Three-Layer Architecture](#three-layer-architecture)

---

## Overview

### What is `@larksuite/cli`?

Official Lark (Feishu) CLI tool — v1.0.2 with 200+ commands across 11 domains.

| Domain | What it does |
|--------|-------------|
| **Calendar** | Read/create/update meeting events |
| **IM (Messages)** | Send messages, create chats, manage threads |
| **Docs / Wiki** | Read/write documents and wiki pages |
| **Sheets** | Read/write spreadsheet cells |
| **Base (Bitable)** | CRUD records in databases |
| **Tasks** | Create, assign, complete tasks with due dates |
| **Drive** | File management |
| **Hire** | Recruitment (not relevant for MAIA) |
| **People** | Directory lookup |
| **Approval** | Manage approval flows |
| **Translation** | Content translation |

---

## Installation & Setup

### Install the CLI

```bash
npm install -g @larksuite/cli
```

### Add as an Obsidian Skill (optional — for use via Hermes)

```bash
npx skills add larksuite/cli -y -g
```

### Initialize config

```bash
lark-cli config init --new
```

### Authenticate

```bash
lark-cli auth login --recommend
```

> [!warning] **Auth Scopes**
> Run with specific domain scopes for minimal permission:
> ```bash
> lark-cli auth login --domain calendar,task
> ```
> For PM workflows, you'll need: `task`, `calendar`, `im`, `docx`, `sheets`, `base`

---

## Command Reference

### Tasks — Core PM Commands

```bash
# Create a task
lark-cli task +create --title "Review Q2 roadmap" --due "2026-04-15T18:00:00+08:00"

# Assign a task to someone
lark-cli task +assign --task-id <id> --user-id <user_id>

# Get your open tasks
lark-cli task +get-my-tasks

# Filter tasks by due date (ISO 8601)
lark-cli task +get-my-tasks --due-end "2026-04-05T18:00:00+08:00"

# Mark task complete
lark-cli task +complete --task-id <id>
```

### IM — Leadership Communication

```bash
# Send a message to a chat
lark-cli im +messages-send --chat-id <chat_id> --content "{\"text\":\"Pre-sync digest ready\"}"

# Create a chat/channel
lark-cli im +chat-create --name "PM Leadership Sync" --user-id-list <user_ids>
```

### Sheets — Account / Project Tracker

```bash
# Read from a spreadsheet
lark-cli sheets +read --sheet-token <token> --range "A1:Z100"

# Write to spreadsheet cells
lark-cli sheets +write --sheet-token <token> --range "B2" --values "On Track"
```

### Base / Bitable — Structured PM Data

```bash
# List records in a base
lark-cli base +record-list --base-token <token> --table-id <table_id>

# Get field schema before writing
lark-cli base +field-list --base-token <token> --table-id <table_id>

# Upsert (insert or update) a record
lark-cli base +record-upsert --base-token <token> --table-id <table_id> --record <json>
```

### Wiki — Document Links

```bash
# Resolve wiki link obj_token before operating on underlying doc/sheet
lark-cli wiki spaces get_node --node-token <wiki_node_token>
```

> [!note] **Wiki Links**
> If you have a wiki URL like `https://example.larksuite.com/wiki/abc123`, use `wiki spaces get_node` first to get the underlying `obj_token` for doc/sheet operations.

---

## Workflows

### Workflow 1: Pre-Sync Digest

**Purpose:** Ensure leadership has up-to-date project status **2 hours before** sync meetings.

**How it works:**
1. Script reads account data from Sheets/Base (using `+read` or `+record-list`)
2. Formats into a status digest: brief, timeline, due date, blockers
3. Posts to leadership IM channel via `+messages-send`

**Example digest format:**
```
📊 PM Sync Digest — April 3, 2026

🔵 Fixguru — UAT in progress
   Timeline: Mar 28 – Apr 11
   Due: Apr 11 | Blockers: Jam integration testing pending

🟡 Holsen — Config phase
   Timeline: Mar 24 – Apr 18
   Due: Apr 18 | Blockers: Quote logic approval needed
```

**Cron trigger:** `0 8 * * 1-5` (weekdays at 8am, 2hrs before typical 10am sync)

### Workflow 2: PM Update Reminder

**Purpose:** Prevent stale account data by nudging PMs when rows haven't been updated in 48 hours.

**How it works:**
1. Daily script reads last-updated timestamp from Sheets/Base row
2. If `now - last_update > 48hrs`, send reminder via `+messages-send`
3. PM updates row → next day's check passes

**Cron trigger:** `0 9 * * 1-5` (daily at 9am weekdays)

---

## Technical Notes

### `--as user` vs `--as bot`

| Flag | Use when |
|------|---------|
| `--as user` | Running personal tasks/calendar operations (acting AS the user) |
| `--as bot` | Sending automated messages to group chats (acting AS the bot) |

PM Update Reminder should use `--as bot` for group chat nudges.

### ISO 8601 Timestamps

Task due dates and time filters use ISO 8601 format:
```
2026-04-05T18:00:00+08:00
```

### Three-Layer Architecture

Use the right level of abstraction for your automation:

| Layer | What | When to use |
|-------|------|-------------|
| **1. Shortcuts** | Natural language: `lark-cli task create "Review PR"` | Quick ad-hoc commands |
| **2. API Commands** | Structured: `lark-cli task +create --title X --due Y` | Scripted automations (use this) |
| **3. Raw API** | Direct HTTP: `POST /open-apis/task/v2/tasks` | Edge cases needing fields not exposed in CLI |

---

## Status

```
- [x] Research & documentation (2026-04-02)
- [ ] Proof of concept: Pre-sync digest script
- [ ] Proof of concept: PM update reminder script
- [ ] Data source confirmation (account tracker URL/token)
- [ ] Auth scopes finalized
```

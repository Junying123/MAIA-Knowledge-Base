---
owner: Gareth
status: approved
last_reviewed: 2026-02-23
---

# KB GitHub Sync — How It Works

## Overview

This page explains how our Obsidian Knowledge Base is automatically backed up and version-controlled using GitHub — in plain language, no dev background needed.

Think of it like **Google Docs' version history, but for our entire KB vault**. Every change you make is tracked, timestamped, and safely stored in the cloud.

---

## The Big Picture

Our KB lives in two places simultaneously:

| Location | What it is | Who uses it |
|---|---|---|
| **Your Obsidian app** | The "live" working copy on your laptop | You, daily |
| **GitHub repository** | The cloud backup with full history | Everyone, as safety net |

These two stay in sync automatically — you don't need to do anything manually.

---

## How the Sync Works

### The Plugin Doing the Work

A plugin called **Obsidian Git** runs silently in the background inside Obsidian. It watches for any changes you make to notes, and automatically saves them to GitHub.

Think of it like a diligent assistant who, every time you edit or create a note, quietly takes a snapshot and stores it safely offsite.

### The Cycle (What Happens Every Time You Edit)

```
You edit a note in Obsidian
        ↓
Obsidian Git detects the change
        ↓
It bundles the change into a "snapshot" (called a commit)
Snapshot is labelled: "vault backup: 2026-02-23 11:32:26"
        ↓
The snapshot is pushed to GitHub (cloud)
        ↓
GitHub stores it permanently with full history
```

### On Every App Launch

When you open Obsidian, the plugin **automatically pulls the latest version** from GitHub before you start editing. This means if a teammate made changes on their machine, you'll get those updates the moment you open the app.

---

## Key Behaviours to Know

> [!info] Auto-backup after every file change
> You don't need to hit "save" or "sync". Any edit you make triggers a backup automatically within about a minute.

> [!tip] Pull on launch
> Opening Obsidian = syncing to the latest version. Always open the app before starting a session to avoid working on outdated content.

> [!warning] One person at a time on the same file
> If two people edit the **same note at the same time** on different machines, there may be a merge conflict — similar to two people editing the same Google Doc cell in a spreadsheet. The plugin handles most of these automatically, but avoid it where possible.

---

## What "Version History" Means for You

Because every snapshot is stored in GitHub, we can:

- **See who changed what, and when** — full audit trail
- **Restore any note** to a previous version if something gets accidentally deleted or overwritten
- **Track the evolution** of any page over time

This is especially useful for:
- Recovering accidentally deleted content
- Reviewing changes before a big release
- Understanding the history of a decision or process

---

## What You Don't Need to Do

You do **not** need to:
- Manually push or commit anything
- Open GitHub in a browser
- Know any git commands
- Think about "branches" or "merging"

The plugin handles all of this invisibly.

---

## Analogy: The Filing Cabinet with a Time Machine

Imagine our KB is a physical filing cabinet in the office (Obsidian). Every time someone updates a document, a photocopier automatically makes a copy and stores it in an offsite archive (GitHub) with a timestamp. If a document ever gets lost or corrupted, you can call the archive and ask for any version from any point in time.

That's exactly what's happening here — just digitally and instantly.

---

## If Something Goes Wrong

If you notice your changes aren't syncing, or you see a conflict warning in Obsidian:

1. **Don't panic** — nothing is lost
2. Check the Git panel in Obsidian (left sidebar → source control icon)
3. Ping the KB Lead (Gareth) — restoring from GitHub history is straightforward

---

## See Also

- [[00 - Home/README]]
- [[02 - PM Playbook/Processes/Publish to Lark SOP]]
- [[00 - Home/Quick Reference]]

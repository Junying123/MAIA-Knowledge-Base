---
owner: Gareth
status: approved
last_reviewed: 2026-02-28
---

# Setup Obsidian

## Why This Matters

Before you can contribute to the team's shared knowledge base, you need Obsidian installed and pointed at the right folder. This takes about 10 minutes. Once done, you'll have instant access to every template, workflow, client brief, and product decision the team has ever written.

## What Is Obsidian?

Obsidian is a local Markdown editor. Think of it as a wiki that lives on your computer — not locked in someone else's cloud.

You write notes in plain `.md` files. Obsidian reads them and adds powerful navigation: backlinks, search, a visual graph of how your notes connect, and wikilinks (`[[Like This]]`) that let you jump between pages instantly.

> [!tip] Why not Notion or Google Docs?
> - **Files are yours** — No vendor lock-in. If Obsidian disappears tomorrow, your files still open in any text editor.
> - **Works offline** — No internet required.
> - **Wikilinks** — Click `[[Template User Story]]` and jump straight to it.
> - **Git-synced** — The whole team stays on the same version automatically.
> - **Speed** — Opens instantly. Search is instant. No waiting for cloud sync.

## What Will Actually Improve

| Before | After |
|--------|-------|
| "Can you send me the PRD template again?" | Open `[[Template PRD]]` yourself in 2 seconds |
| Search Slack for that doc someone shared 3 weeks ago | Cmd+Shift+F to search the entire KB |
| No idea what version of a doc is current | Every file is version-controlled via Git |
| Can't work on the train (no wifi) | Everything local, works fully offline |

---

## Step-by-Step Setup

### Step 1 — Download Obsidian

Go to [obsidian.md](https://obsidian.md) and download the version for your operating system (Mac or Windows).

### Step 2 — Install and Launch

Run the installer. When Obsidian opens, you'll see a welcome screen asking you to open or create a vault.

### Step 3 — Open the Shared Vault

The KB vault is synced via GitHub. You'll need the vault folder on your machine first.

> [!info] GitHub Sync
> Follow the [[KB GitHub Sync — How It Works]] guide to clone the vault folder to your computer. Once that's done, come back here.

After cloning:
1. In Obsidian, click **Open folder as vault**
2. Navigate to the cloned folder (e.g. `Obsidian Vault`)
3. Click **Open**

Obsidian will load the vault. You'll see the folder structure in the left sidebar.

### Step 4 — Tour the Interface

| Area | What It Does |
|------|-------------|
| **Left sidebar** | File explorer — browse all folders and files |
| **Right sidebar** | Backlinks, tags, outline for the current file |
| **Editor pane** | Write and read notes |
| **Graph view** | Visual map of how notes connect (Cmd+Shift+G) |
| **Command palette** | Search all commands (Cmd+P) |

Click the **Reading view / Editing view** toggle (top right of each note) to switch between formatted view and raw Markdown.

---

## Key Keyboard Shortcuts

> [!tip] Learn These First
> | Action | Mac | Windows |
> |--------|-----|---------|
> | Open file by name | Cmd+O | Ctrl+O |
> | Search all content | Cmd+Shift+F | Ctrl+Shift+F |
> | Toggle edit / read view | Cmd+E | Ctrl+E |
> | Insert wikilink | Cmd+K | Ctrl+K |
> | Open command palette | Cmd+P | Ctrl+P |
> | Open graph view | Cmd+Shift+G | Ctrl+Shift+G |

---

## You're Set Up — What's Next?

Once Obsidian is running and the vault is open:

1. Try `Cmd+O` and type "Quick Reference" — open it
2. Try `Cmd+Shift+F` and search for "user story" — see what comes up
3. Click any `[[wikilink]]` to jump to that page

When you're comfortable navigating, move on to understanding how the KB is organised.

---

## See Also

- [[02 - Using This KB]] — Folder structure, templates, how to contribute
- [[KB GitHub Sync — How It Works]] — How to keep your local vault up to date
- [[Quick Reference]] — Most-used pages at a glance
- [[PM Onboarding Hub]] — Back to the full onboarding checklist

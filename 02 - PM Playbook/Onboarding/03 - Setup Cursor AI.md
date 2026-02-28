---
owner: Gareth
status: approved
last_reviewed: 2026-02-28
---

# Setup Cursor AI

## Why This Matters

You already know how to use ChatGPT. Cursor is ChatGPT with one critical difference: **it can read your KB files.**

Instead of copy-pasting context into a chat window every single time, Cursor opens your entire Obsidian vault as a project. The AI already has your templates, your MAIA glossary, your client context, your team's decisions — and it can reference them directly when helping you write user stories, PRDs, QA scenarios, and more.

## What Is Cursor?

Cursor is an AI-powered editor. It looks like a text editor, but it has a built-in AI chat that can read and reference any file in your project. Unlike ChatGPT (which only knows what you paste in), Cursor has access to your entire vault as context.

You don't need to know how to code to use it. You'll use it purely through the chat panel — type a request, get output, paste it back into Obsidian.

> [!tip] Cursor vs ChatGPT
> | | ChatGPT | Cursor |
> |-|---------|--------|
> | Knows your templates | ❌ Only if you paste them | ✅ Reads them directly |
> | Knows your MAIA glossary | ❌ Only if you paste it | ✅ References the file |
> | Knows your client context | ❌ Only if you paste it | ✅ Reads your client folder |
> | Knows your team's decisions | ❌ Only if you paste it | ✅ Reads your ADRs |
> | Knows generic PM advice | ✅ | ✅ |
> | Works with your KB | ❌ | ✅ |

## What Will Actually Improve

| Before | After |
|--------|-------|
| Copy-paste the user story template into ChatGPT every time | Cursor already has it — just reference it |
| AI gives generic advice that ignores MAIA specifics | AI output is grounded in your actual product docs |
| Re-explain client context at the start of every chat | Open the client folder, reference it in your prompt |
| Generic PRD format that doesn't match team conventions | AI uses your team's actual template |

---

## Step-by-Step Setup

### Step 1 — Download Cursor

Go to [cursor.sh](https://cursor.sh) and download the version for your OS.

### Step 2 — Install and Launch

Run the installer. Cursor opens to a welcome screen. You can sign in with Google or create an account.

### Step 3 — Open the Obsidian Vault as a Project

This is the key step — it tells Cursor where your KB files live.

1. In Cursor, go to **File → Open Folder** (Mac: `Cmd+O`, Windows: `Ctrl+O`)
2. Navigate to your local Obsidian vault folder (e.g. `Obsidian Vault`)
3. Click **Open**

Cursor will index your vault. You'll see the folder structure in the left sidebar — the same folders as your Obsidian vault.

### Step 4 — Select the Claude Model

1. Go to **Cursor Settings** (top-right gear icon, or `Cmd+Shift+J`)
2. Navigate to **Models**
3. Enable **Claude Sonnet** (or the latest available Claude model)
4. Close Settings

> [!info] Cursor Pro vs API Key
> Cursor offers two ways to use AI:
> - **Cursor Pro** — Monthly subscription (~$20/month). Simplest option, no API key needed. Recommended if you don't have an Anthropic API key.
> - **API Key** — Add your own Anthropic API key in Settings → API Keys. Pay per use. Better if you already have an account.
> Ask Gareth which option the team is using.

### Step 5 — Open the AI Chat Panel

Press `Cmd+L` (Mac) or `Ctrl+L` (Windows) to open the AI chat panel on the right side.

You'll see a chat interface. This is where you'll work with AI.

### Step 6 — First Test: Reference a KB File

Type this in the chat:

```
@Glossary Summarise the key terms in our MAIA glossary for me.
```

Use the `@` symbol to reference files. Type `@` and start typing a filename to search your vault. When Cursor includes the file, it will read and use its contents.

If you get a useful summary back, your setup is working correctly.

---

## Daily Usage Pattern

1. Open Cursor
2. Open AI chat (`Cmd+L`)
3. Reference the relevant KB file with `@filename`
4. Give your prompt
5. Copy the output
6. Paste into Obsidian as a new note

For full examples of how to do this for every PM task, see [[04 - AI + KB Workflow for PMs]].

---

## See Also

- [[04 - AI + KB Workflow for PMs]] — How to use Cursor + KB together for every PM task
- [[05 - AI Prompt Library for PMs]] — Copy-paste prompts for common tasks
- [[PM Onboarding Hub]] — Back to the full onboarding checklist

---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Publish to Lark SOP

Standard operating procedure for publishing KB content to Lark for broader consumption.

## Purpose

Lark is a **published mirror** of select KB content, not the source of truth. This SOP ensures:
- Only approved content is published
- Markdown remains the canonical source
- Published content is tracked and linked

## What Can Be Published

✅ **Approved for Publication:**
- Product workflows and user guides
- Client onboarding checklists
- Known limitations and workarounds
- Release notes and feature announcements
- PM process guides (non-sensitive)

❌ **NOT for Publication:**
- Raw meeting notes
- Internal debates or decision rationale (ADRs are internal)
- Client-specific sensitive information
- Draft or unapproved content
- Internal triage decisions

## Publication Workflow

### Step 1: Request Publication
1. Ensure page has `status: approved` in YAML frontmatter
2. Add page to [[00 - Home/Publish Queue]]
3. Notify KB Lead (Gareth) for review

### Step 2: KB Lead Approval
1. KB Lead reviews content for:
   - Accuracy and completeness
   - No sensitive information
   - Proper formatting and links
2. Approves or requests changes

### Step 3: Publish to Lark
1. Copy content from Markdown file
2. Paste into Lark document
3. Convert Obsidian wikilinks `[[Page]]` to Lark links
4. Verify formatting (headings, tables, code blocks)
5. Publish in Lark

### Step 4: Link Back to KB
**CRITICAL:** Add `lark_url` to the Markdown file's frontmatter:

```yaml
---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
lark_url: https://lark.example.com/doc/abc123
---
```

This creates bidirectional traceability.

### Step 5: Update Publish Queue
Mark page as "Published" in [[00 - Home/Publish Queue]]

## Maintaining Published Content

### When to Update Lark
- When Markdown source is updated significantly
- When known limitations change
- When workflows are revised

### Update Process
1. Edit Markdown file (canonical source)
2. Update `last_reviewed` date
3. Re-publish to Lark (same URL)
4. Notify users of significant changes

### Single Source of Truth Rule

⚠️ **NEVER edit directly in Lark**

- All edits happen in Markdown
- Lark is a read-only mirror for broader audience
- If changes are needed, edit Markdown and re-publish

## Approval Authority

| Content Type | Approver | Review Time |
|--------------|----------|-------------|
| Product workflows | KB Lead | 1-2 days |
| Release notes | KB Lead | Same day |
| Client-facing guides | KB Lead | 1-2 days |
| Internal processes | KB Lead + Tech Lead | 2-3 days |

## See Also

- [[00 - Home/README]] — Single source of truth rule
- [[00 - Home/Publish Queue]] — Content ready for publication
- [[00 - Home/Quick Reference]] — Most-used KB pages

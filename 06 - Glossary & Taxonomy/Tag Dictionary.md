---
owner: Gareth
status: approved
last_reviewed: 2026-02-20
---

# Tag Dictionary

Approved Obsidian tags and how to apply them consistently across the KB.

## Purpose

Tags enable:
- Quick filtering and search
- Cross-linking related content
- Status tracking
- Priority classification

## Approved Tags

### Status Tags

| Tag | Usage | Example |
|-----|-------|---------|
| `#draft` | Content in progress | New workflow being documented |
| `#review` | Ready for review | Awaiting KB Lead approval |
| `#approved` | Approved content | Ready for use or publication |
| `#archived` | Outdated content | Old workflow no longer used |

**Tagging Rule:** Every KB page should have exactly ONE status tag.

---

### Content Type Tags

| Tag | Usage | Applied To |
|-----|-------|------------|
| `#workflow` | Process documentation | Quote-to-Cash Flow, SO Workflows |
| `#template` | Reusable template | All files in Templates/ folder |
| `#module` | Module reference | Quotations, Invoices, etc. |
| `#guide` | How-to guide | User Story Writing Guide |
| `#decision` | ADR or decision | Files in 07 - Decisions/ |
| `#client` | Client-specific | Files in 03 - Clients/ |
| `#qa` | Testing/QA content | Test scenarios, bug reports |
| `#config` | Configuration | System settings, integrations |

---

### Priority Tags

| Tag | Usage | Applied To |
|-----|-------|------------|
| `#critical` | Critical issue or gap | Blocker bugs, critical limitations |
| `#high-priority` | High importance | Important features or fixes |
| `#medium-priority` | Medium importance | Standard enhancements |
| `#low-priority` | Low importance | Nice-to-have features |

---

### Module/Workspace Tags

| Tag | Usage |
|-----|-------|
| `#sales` | Sales workspace content |
| `#finance` | Finance workspace content |
| `#logistics` | Logistics workspace content |
| `#quotations` | Quotations module |
| `#sales-orders` | Sales Orders module |
| `#invoices` | Invoices module |
| `#credit-notes` | Credit Notes module |
| `#receipts` | Receipts module |

---

### Workflow Stage Tags

| Tag | Usage |
|-----|-------|
| `#requirements` | Requirements gathering phase |
| `#design` | Design/planning phase |
| `#development` | Dev implementation phase |
| `#testing` | QA/testing phase |
| `#deployment` | Deployment/go-live phase |

---

## Tagging Best Practices

### Do:
- ✅ Use lowercase for all tags
- ✅ Use hyphens for multi-word tags (`#sales-orders` not `#salesorders`)
- ✅ Apply multiple tags when relevant (e.g., `#workflow #sales #approved`)
- ✅ Check this dictionary before creating new tags

### Don't:
- ❌ Create duplicate tags with different naming (`#sales-order` vs `#salesorder`)
- ❌ Use special characters or spaces in tags
- ❌ Over-tag — be selective and meaningful
- ❌ Create client-specific tags (use folders instead)

---

## Tag vs. Folder Decision

**Use Folders when:**
- Content is client-specific (03 - Clients/[Client Name])
- Content belongs to a clear category (Templates, Processes, etc.)
- Structure is hierarchical

**Use Tags when:**
- Content crosses multiple categories
- Need to filter by status or priority
- Want to link related concepts across folders

---

## Examples

### Good Tagging

```markdown
---
tags: [workflow, sales, approved, quotations]
---
# Quotation Workflows
```

### Over-Tagged (Bad)

```markdown
---
tags: [workflow, sales, approved, quotations, q2c, documents, process, guide, maia, oms]
---
# Quotation Workflows
```

**Why bad:** Too many tags dilute searchability.

---

## See Also

- [[Glossary]] — Term definitions
- [[00 - Home/README]] — KB structure and governance

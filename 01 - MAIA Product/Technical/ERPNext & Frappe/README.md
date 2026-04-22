---
owner: Gareth
status: approved
last_reviewed: 2026-04-22
---

# ERPNext & Frappe — Context for MAIA Features

This folder documents how ERPNext and Frappe underpin MAIA. It is the reference layer for build decisions — before designing or scoping any MAIA feature, check here first.

## Build Strategy

| Situation | Approach |
|---|---|
| ERPNext/Frappe already has the capability | Leverage and extend — configure, customise, or wrap the native module |
| ERPNext/Frappe has no equivalent | Build from scratch as a custom Frappe app or standalone module |

> **Rule of thumb:** Ask *"Does ERPNext already do this?"* first. Build only what the platform cannot provide.

---

## Folder Contents

| File / Subfolder | What It Covers |
|---|---|
| `Frappe Framework Overview.md` | Core Frappe concepts: DocTypes, Controllers, Hooks, Permissions |
| `ERPNext Modules Used.md` | Which ERPNext modules MAIA leverages and how |
| `Custom Doctypes & Apps.md` | MAIA-specific doctypes and custom Frappe apps built from scratch |
| `Hooks & Customisation Points.md` | Where and how MAIA hooks into Frappe events and overrides |
| `Permissions & Roles.md` | ERPNext role/permission model as it applies to MAIA workspaces |
| `Known Frappe Limitations.md` | Platform constraints that drive custom build decisions |

> Files will be added progressively. Create a new file per topic; use this README as the index.

---

## How to Use This Folder

1. **Before scoping a feature** — check `ERPNext Modules Used.md` to see if native ERPNext handles it
2. **Before a dev handover** — reference `Custom Doctypes & Apps.md` for custom build context
3. **When hitting a platform wall** — log it in `Known Frappe Limitations.md` so future PMs don't re-investigate
4. **When adding a new doc** — add a row to the table above

---

## See Also

- [[01 - MAIA Product/Overview/Product Identity]] — Technical Foundation section
- [[brain/Key Decisions]] — Product Architecture decision
- [[01 - MAIA Product/Technical/Tax Refactor/Tax Refactoring]]
- [[01 - MAIA Product/Product Specs]]

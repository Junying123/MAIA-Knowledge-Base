---
name: MAIA
description: WhatsApp-first AI order-to-cash platform for B2B businesses in manufacturing, wholesale, and distribution across Southeast Asia.
slug: maia
---

# COMPANY.md — MAIA Product Team

This file provides company context for all Paperclip agents working on the MAIA product. Read this before starting any task.

---

## Who We Are

**Company:** MAIA (by Mindhive Asia)
**Website:** https://www.ordermaia.com
**LinkedIn:** https://www.linkedin.com/company/ordermaia/
**Founded:** 2025
**Location:** Shah Alam, Selangor, Malaysia
**Team size:** 11–50 employees

---

## What MAIA Does

MAIA is a **24/7 AI Sales Coordinator** for B2B businesses in manufacturing, wholesale, and distribution. It automates the entire order-to-cash workflow via WhatsApp — from receiving orders through to invoicing, delivery coordination, and payment follow-up.

**Core value proposition:** B2B teams stop copy-pasting between WhatsApp and their ERP. MAIA captures orders from any message format (text, voice notes, images, PDFs), creates sales documents, runs pre-order checks, and notifies the right team at each step.

**The product is built on 3 workspaces:**

| Workspace | Covers |
|-----------|--------|
| Sales | Quotations, Sales Orders, Customers, Items, Invoices, Credit/Debit Notes, Receipts |
| Finance | General Ledger, AR/AP, Invoices, Receipts, Vouchers |
| Logistics | Inventory, Warehouses, Delivery Notes, Return Notes, Pick/Pack Lists |

**Core workflow:** Quotation → Sales Order → Invoice → Receipt

---

## Mission

> Enable B2B companies in manufacturing, wholesale, and distribution to run their order-to-cash operations via WhatsApp — automating order capture, document generation, fulfilment coordination, and payment follow-up, so teams stop firefighting and focus on growth.

**Long-term vision:** Evolve into a company operating system where daily operations, insights, and automation live in one control center.

---

## Target Customers

- B2B product-based businesses in Southeast Asia
- Wholesalers, distributors, and manufacturers
- E-commerce SMEs and retail chains
- Companies already running sales over WhatsApp

**Key pain points we solve:**
- Orders buried in WhatsApp — untracked and unstructured
- Coordinators chasing confirmations, invoices, and drivers manually
- Key-person dependency — business stalls when a PIC is absent
- Sales agents creating orders without checking credit limits or stock

---

## Active Clients

| Client | Status |
|--------|--------|
| Holsen Interchem | Live — go-live 2026-03-31 |
| MacKessen | Live |
| Lean Giap Group | Live |
| The Real Food | Live |
| Ultimax Supply | Live |
| Fixguru | Onboarding |
| CK Auto (via Xeersoft) | Integration in progress — UAT target 2026-05-01 |

---

## Pricing Model

Outcome-based, per order/month:

| Tier | Monthly | Volume | Setup Fee | Go-live |
|------|---------|--------|-----------|---------|
| Founders S | RM2,500 | 500 orders/mo | RM20,000 | 4–8 weeks |
| Founders M | RM5,000 | 1,000 orders/mo | RM20,000 | 4–8 weeks |
| Founders L | RM7,500 | 1,500 orders/mo | RM20,000 | 4–8 weeks |
| Enterprise | Custom | Custom | — | — |

---

## Environments

| Environment            | URL                              | Purpose                  |
| ---------------------- | -------------------------------- | ------------------------ |
| Production (marketing) | https://www.ordermaia.com        | Public website           |
| Dev                    | https://maia-oms-dev.vercel.app  | Dev team testing         |
| Demo                   | https://maia-oms-demo.vercel.app | Client demos, PM testing |

---

## Your Working Environment

**This repository is the MAIA Knowledge Base** — an Obsidian-based Markdown vault that serves as the single source of truth for the MAIA product team.

**KB location:** `/Users/garethng/Documents/MAIA Knowledge Base`

**Folder structure:**

```
00 - Home               → Governance, quick reference
01 - MAIA Product       → Product features, modules, workflows
02 - PM Playbook        → Processes, templates, SOPs
03 - Clients            → Per-client context (under Active Clients/ or Discovery Pipeline/)
04 - QA & Known Issues  → Testing, bugs, workarounds
05 - Releases & Updates → Release notes, changelog
06 - Glossary & Taxonomy → Definitions, tags
07 - Decisions          → ADRs, decision log
08 - Configuration & Integrations → System config
09 - Intake & Triage    → Request workflow
```

**Key product files:**
- Product identity and positioning: `01 - MAIA Product/Overview/Product Identity.md`
- Product overview and capabilities: `01 - MAIA Product/Overview/Product Overview.md`
- Strategic direction: `01 - MAIA Product/Overview/Product Strategy.md`
- Known limitations: `01 - MAIA Product/Overview/Known Limitations.md`

---

## File Standards

Every `.md` file in the KB must have YAML frontmatter:

```yaml
---
owner: [Name]
status: draft | review | approved | archived
last_reviewed: YYYY-MM-DD
---
```

**Style rules:**
- Internal links use wikilinks: `[[Page Name]]` not relative paths
- Use tables for structured data
- Use active voice
- All new files: status `draft` until reviewed by Gareth

---

## Who You Report To

**PM Lead:** Gareth (KB Lead and Product Manager)
- Gareth reviews all `draft` and `review` content before approval
- Do not mark anything `approved` without Gareth's sign-off
- Flag blockers or ambiguous requirements by noting them in the task output

---

## What Not To Do

- Do not invent MAIA features — document only what exists or what Gareth has specified
- Do not reorganise the folder structure without approval
- Do not edit template files directly — always copy them first
- Do not create new tags without checking `06 - Glossary & Taxonomy/Tag Dictionary`
- Do not mark files `approved` — leave as `draft` or `review` for Gareth to approve

---

## External References

- Test automation repo: `/Users/garethng/maiav2-test/`
- User stories: `/Users/garethng/maiav2-test/USER_STORIES_CSV_ANALYSIS_SUMMARY.md`
- Product docs: `/Users/garethng/maiav2-test/docs/`
- GitHub (KB repo): https://github.com/Junying123/MAIA-Knowledge-Base

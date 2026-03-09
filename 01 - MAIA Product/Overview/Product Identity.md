---
owner: Gareth
status: approved
last_reviewed: 2026-03-09
---

# MAIA Product Identity

## Overview

This document captures **why MAIA exists** — the mission, the problem it solves, and the beliefs that guide product decisions. Where [[01 - MAIA Product/Overview/Product Overview]] covers what MAIA does, this page covers the "why" and "for whom."

---

## Mission

> Enable B2B companies to run their trade operations — from order to cash — with less friction, more trust, and compounding intelligence.

---

## The Problem MAIA Solves

B2B trade between SMEs is operationally fragile:

- Orders arrive over WhatsApp, email, and calls — scattered and untracked
- Manual data entry bridges ERP gaps, creating errors and delays
- Invoicing, collections, and reconciliation require constant human follow-up
- Relationships and context live in people's heads, not systems

MAIA replaces the duct tape — the spreadsheets, copy-paste workflows, and tribal knowledge — with a **coordinated, auditable trade layer** that learns each business over time.

---

## Who MAIA Is For

**Primary buyers:** B2B SMEs in Southeast Asia running sales, finance, and logistics operations
- Distributors and wholesalers managing many buyer relationships
- Manufacturers with direct B2B sales channels
- Companies already using WhatsApp as a primary sales channel

**Primary users inside those companies:**
- Sales teams managing orders and customer relationships
- Finance teams handling invoicing, collections, AR
- Operations teams coordinating fulfilment and logistics

---

## Core Beliefs

These beliefs shape every product decision:

1. **Context is the moat** — Whoever owns the richest trade context (buyers, SKUs, pricing, payment behaviour, disputes) wins. Features commoditize; learned context doesn't.

2. **WhatsApp-first is a distribution advantage** — Meeting buyers where they already are (WhatsApp) removes adoption friction. MAIA is not a portal they have to log into.

3. **Trust must be earned, not assumed** — Finance workflows require auditability, approvals, and explainability. MAIA earns autonomy incrementally through governance, not by moving fast and hoping.

4. **Automation should shrink, not eliminate, human judgment** — MAIA handles routine steps; humans handle exceptions and approvals. The goal is 60%+ automation with clear human-in-the-loop boundaries.

5. **Outcomes over features** — The right measure of MAIA's value is business outcomes: DSO reduced, invoice errors eliminated, AR headcount freed. Not feature count.

---

## What MAIA Is Not

- Not a general-purpose AI assistant or chatbot
- Not a document scanning / OCR tool (though it uses document extraction as a component)
- Not a CRM or standalone ERP
- Not built for B2C or low-complexity transaction flows

---

## Product Positioning

| From | To |
|------|-----|
| "Workflow automation / chatbot" | "Operating layer for B2B trade" |
| Chat-based assistant | Controlled execution engine with memory + audit |
| Point solution | Orchestration platform connecting ERP + people + customers |
| Seat-based SaaS | Outcome-priced platform (per invoice, payment matched, dispute resolved) |

---

## Three Workspaces, One Trade Loop

MAIA is organized around three workspaces that map to the order-to-cash flow:

| Workspace | Covers |
|-----------|--------|
| **Sales** | Quotation, sales orders, customer relationships |
| **Finance** | Invoicing, credit notes, AR, collections, payments |
| **Logistics** | Delivery orders, fulfilment tracking |

The core workflow is: **Quotation → Sales Order → Invoice → Receipt**

---

## See Also

- [[01 - MAIA Product/Overview/Product Overview]]
- [[01 - MAIA Product/Overview/Product Strategy]]
- [[01 - MAIA Product/Overview/Known Limitations]]
- [[06 - Glossary & Taxonomy/Glossary]]
- [[00 - Home/Team & Org]]

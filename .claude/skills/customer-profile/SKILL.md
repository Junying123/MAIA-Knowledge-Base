---
name: customer-profile
description: >
  Researches a client's business from their website URL and produces a pure
  business profile — who they are, what they sell, who their customers are,
  what problems they solve, and how they solve them. No MAIA context, no fit
  assessment, no discovery questions. Use this skill whenever the user wants to
  build a client background from a website, research a prospect, or create a
  customer profile doc. Trigger on phrases like "customer profile for [client]",
  "build a business profile", "research [client] background", "profile [URL]",
  "what does [client] do".
---

# Customer Profile Skill

Produces a pure business profile for a client or prospect from their website.
Output covers: company background, products/services, target markets, business
model, what problems they solve for their customers, and how they solve them.

**No MAIA context. No fit assessment. No discovery questions. Pure client/customer context only.**

---

## Phase 0 — Intake

Collect from the user:
- **Website URL** (required)
- **Client name** (if not obvious from URL)
- **Any additional context** — notes, emails, prior conversations (optional)

If the user has already provided these, skip straight to Phase 1.

---

## Phase 1 — Research the Website

Use Codex (`codex:codex-rescue`) to browse the website thoroughly. If Codex is
not available, use WebFetch on the URL directly.

Pages to visit (in order of priority):
1. Main / landing page
2. About / Company / Who We Are page
3. Products / Services / Solutions page(s)
4. Industries / Customers / Who We Serve page (if exists)
5. Partners / OEM / Certifications page (if exists)
6. Any "How it works" or "Our approach" page

Extract from the website:
- Company founding year, HQ location, geographic reach
- Core industry and business category
- Products and/or services offered — categories, descriptions, brand names
- Who their customers are — industries, company types, buyer roles
- Any stated value proposition, differentiators, or "why us" messaging
- Named partners, clients, certifications, regulatory mentions
- Key personnel or contact names (if listed)

If content is thin or the website is limited, note what was not found — do not fabricate.

---

## Phase 2 — Write the Profile

Structure the profile with these seven sections in this exact order:

### 1. Company Overview

A table followed by a 1–2 sentence narrative paragraph.

Table columns: Attribute | Detail
Rows: Company Name, Industry, Founded, Headquarters, Geographic Reach, Website, Company Type

The narrative should state in plain language what the company does and their
positioning (e.g. "leading regional distributor", "specialist in X", "30-year
track record in Y").

### 2. Products & Services

A table of product/service categories with descriptions.
Table columns: Category | Description

After the table, note anything that was not findable on the website (e.g.
specific SKUs, pricing tiers, brand partner names) — label these as
"Not found on website."

### 3. Target Markets & Customers

A table.
Table columns: Segment | Details
Rows: Primary customers, Customer type (B2B/B2C/both), Geography, Buyer profile

### 4. Business Model

A table.
Table columns: Aspect | Details
Rows: Model (distribution/SaaS/services/etc.), Revenue model, Sales cycle, Supply
chain or delivery model, Regulatory/compliance context (if relevant)

### 5. Customer Problems

A bullet list of the real problems this company's customers face — the pain that
causes customers to seek out this company. Ground every point in what the website
says or clearly implies.

Format each bullet as:
- **[Problem name]:** One or two sentences explaining the specific pain.

Aim for 4–6 substantive problems. Do not pad with generic statements.

### 6. Solutions Provided

A bullet list of how this company addresses the problems in Section 5. Each
solution should map (directly or implicitly) to a problem above.

Format each bullet as:
- **[Solution/capability name]:** One or two sentences on what they do and why it matters.

Aim for 4–6 solutions grounded in the website content.

### 7. Key Contacts / Stakeholders

Names and roles found on the website. If none found, write:
"Not found on website — to be confirmed."

Do not add a "To discover" sub-list — that belongs in a discovery call prep doc, not here.

---

## Phase 3 — Quality Check

Before saving, verify:

- [ ] Zero MAIA references anywhere in the document
- [ ] Zero discovery questions
- [ ] Zero fit assessments or scoring
- [ ] Zero "current operations" inferences about internal tooling
- [ ] All "not found on website" notes are honest — nothing fabricated
- [ ] Customer Problems (Section 5) and Solutions Provided (Section 6) are grounded in the website — not invented
- [ ] No `[bracket]` placeholders remain unfilled
- [ ] YAML frontmatter complete

---

## Save Location

For active clients:
```
03 - Clients/Active Cooking Clients/[Client Name]/
  └── [Client Name] - Customer Profile.md
```

For discovery/prospects:
```
03 - Clients/We're cooked discovery/Requirement Gathering/[Client Name]/
  └── [Client Name] - Customer Profile.md
```

Check whether the client folder already exists before creating it.

YAML frontmatter required:
```yaml
---
owner: Gareth
status: draft
last_reviewed: YYYY-MM-DD
---
```

---

## See Also

- Customer Narrative skill: `customer-narrative` (for post-discovery transformation story with MAIA context)
- Requirement Gathering Output skill: `req-gathering-output` (for structuring RG session notes)
- Discovery Pipeline skill: `discovery-pipeline` (full pipeline from RG → narrative → feature narrative)

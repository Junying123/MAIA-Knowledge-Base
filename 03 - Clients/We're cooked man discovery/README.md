---
owner: Gareth
status: approved
last_reviewed: 2026-03-26
---

# Discovery Pipeline

Pre-sales qualification for potential clients — from first GTM intel to onboarding decision.

## Pipeline Overview

> Update this table whenever a prospect is added or progresses.

**GTM Briefs:** 1 | **Req. Gathering:** 0 | **Total:** 1

| Prospect | Stage | PM Owner | Last Updated |
|----------|-------|----------|--------------|
| [[JDX]] | GTM Brief | — | 2026-03-26 |

## Two-Stage Process

```
GTM Team                        PM
    │                            │
    ▼                            │
[GTM Brief]  ──── handover ───► [Discovery Call]
    │                            │
    │                            ▼
    │                   [Requirement Gathering]
    │                            │
    │                            ▼
    │                     [Fit Assessment]
    │                      ↙         ↘
    │               Proceed         Park / Disqualify
    │                  │
    │                  ▼
    │          [Active Clients]
```

### Stage 1 — GTM Brief

GTM team preps the PM **before** the discovery call.

- High-level company profile
- Top pain points (from pre-sales intel)
- Rough workflow overview (Sales / Logistics / Finance)
- Initial fit hypothesis

→ Folder: `[[03 - Clients/Discovery Pipeline/GTM Briefs]]`
→ Template: `[[02 - PM Playbook/Templates/[Template] GTM Brief]]`

### Stage 2 — Requirement Gathering

PM runs a structured discovery session **with the prospect**.

- Deep-dive into current workflows
- Integration and data requirements
- Gaps vs. MAIA modules
- Fit verdict: proceed / park / disqualify

→ Folder: `[[03 - Clients/Discovery Pipeline/Requirement Gathering]]`
→ Template: `[[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]`

## Folder Structure

```
Discovery Pipeline/
├── README.md                          ← this file (pipeline tracker)
├── GTM Briefs/
│   ├── README.md
│   └── [Prospect Name].md             ← one file per prospect, stays permanently
└── Requirement Gathering/
    ├── README.md
    └── [Prospect Name]/               ← created after discovery call
        ├── Requirement Gathering.md
        └── Meeting Notes/
```

## Fit Criteria

A prospect is a strong fit if they:
- [ ] Operate a B2B sales workflow (quotes → orders → invoices)
- [ ] Need inventory / logistics tracking
- [ ] Have 10–500 users
- [ ] Can work within MAIA's current module set (or gaps are on roadmap)

## See Also

- [[03 - Clients/Active Clients]] — graduated, onboarded clients
- [[02 - PM Playbook/Templates/[Template] GTM Brief]]
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]
- [[09 - Intake & Triage]] — inbound request workflow

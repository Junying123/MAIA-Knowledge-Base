---
owner: Gareth
status: approved
last_reviewed: 2026-04-01
---

# Discovery Pipeline

Pre-sales qualification for potential clients — from first GTM intel to onboarding decision.

## Pipeline Overview

> Update this table whenever a prospect is added or progresses.

**GTM Briefs:** 3 | **Req. Gathering:** 2 | **Total:** 3

| Prospect | Stage | PM Owner | Last Updated | Notes |
|----------|-------|----------|--------------|-------|
| JDX Tea (九鼎香) | RG Done — Fit Assessment | Gareth | 2026-03-27 | Full RG output ready |
| Thermac | RG Done — Awaiting client docs | Gareth | 2026-03-26 | Documents pending from client |
| Ming Medical | GTM Done — Pre-RG | Gareth | 2026-04-02 | RG prep doc ready, discovery call TBC |

---

## Two-Stage Process

```
GTM Team                        PM
    │                            │
    ▼                            │
[GTM Proposal] ── brief ──────► [Discovery Call]
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
- **GTM Proposal already sent to client**

→ Folder: `[[03 - Clients/We're cooked discovery/GTM Briefs]]`
→ Template: `[[02 - PM Playbook/Templates/[Template] GTM Brief]]`

### Stage 2 — Requirement Gathering

PM runs a structured discovery session **with the prospect**.

- Deep-dive into current workflows
- Integration and data requirements
- Gaps vs. MAIA modules
- Fit verdict: proceed / park / disqualify

→ Folder: `[[03 - Clients/We're cooked discovery/Requirement Gathering]]`
→ Template: `[[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]`

---

## Folder Structure

```
Discovery Pipeline/
├── README.md                          ← this file (pipeline tracker)
├── GTM Briefs/
│   ├── README.md
│   ├── JDX/
│   │   ├── JDX.md                    ← GTM Brief
│   │   └── JDX Transcript.md
│   ├── Thermac/
│   │   └── [GTM Brief files]
│   └── Ming Medical/
│       ├── Ming Medical - GTM Brief Transcript.md
│       └── Ming Medical - GTM Proposal.md
│
└── Requirement Gathering/
    ├── README.md
    ├── JDX/
    │   ├── Discovery Call Questionnaire.md
    │   ├── Meeting Notes/
    │   │   └── 2026-03-27-JDX-Requirements-Gathering.md
    │   └── Prep After Requirement Gathering/
    │       └── Requirement Gathering Output - JDX - 2026-03.md
    ├── Thermac/
    │   ├── Discovery Call Questionnaire.md
    │   └── Meeting Notes/
    │       └── 2026-03-26-Thermac-Requirements-Gathering.md
    └── Ming Medical/
        ├── Discovery Call Questionnaire.md
        ├── Gathering Requirement Prep - Ming Medical.md
        └── Meeting Notes/
            └── [TBD after discovery call]
```

---

## Fit Criteria

A prospect is a strong fit if they:
- [ ] Operate a B2B sales workflow (quotes → orders → invoices)
- [ ] Need inventory / logistics tracking
- [ ] Have 10–500 users
- [ ] Can work within MAIA's current module set (or gaps are on roadmap)
- [ ] High impact + low effort = build it
- [ ] Low impact + high effort = reject

---

## Stage Gates

| From | To | Gate |
|------|----|------|
| RG | Fit Assessment | RG meeting done + notes completed |
| Fit Assessment | Proceed | Fit is strong + alignment with Tech Lead, CTO, CEO |
| Fit Assessment | Park | Not the right time — revisit later |
| Fit Assessment | Disqualify | Low impact + high effort = reject |

---

## Prospect Details

### JDX Tea (九鼎香)
- **Industry:** Premium Chinese Tea — B2B distributor + retail
- **Channels:** Consignment (Giant/AEON), Corporate B2B Hampers (~80% peak revenue), Tea Retail, B2C Online
- **Primary ask:** Automate billing (pro forma → invoice) + delivery tracking during peak season
- **Key complexity:** Hamper customisation, multi-location delivery
- **Low priority:** Inventory management, tea retail POS integration
- **RG Output:** Ready — see `Requirement Gathering/JDX/Prep After Requirement Gathering/`

### Thermac
- **Industry:** B2B product sales + service/maintenance work orders
- **Systems:** AutoCount (ERP) + Esoft (inventory) + Excel (pricing)
- **Primary ask:** Automate order processing, reduce double-entry between Esoft and AutoCount
- **Key complexity:** Service work order flow is distinct from standard product SO
- **CRM gap:** Equipment tracking + service reminders — outside MAIA core
- **Status:** Awaiting documents from client (pricing template, sample SOs, etc.)

### Ming Medical
- **Industry:** Medical/healthcare — regenerative medicine
- **Primary ask:** Proposal Copilot — AI generates medical proposal drafts from CPG + medical reports
- **Key features:** CPG ingestion, medical report upload, proposal generator, multi-language (EN/Mandarin/Arabic)
- **Phase 1 scope:** Doctor Proposal Copilot + Base MAIA OMS
- **Status:** GTM done, RG prep ready — discovery call TBC

---

## See Also

- [[03 - Clients/Active Clients]] — graduated, onboarded clients
- [[02 - PM Playbook/Templates/[Template] GTM Brief]]
- [[02 - PM Playbook/Templates/[Template] Discovery Requirement Gathering]]
- [[02 - PM Playbook/Processes/PM E2E Workflow]] — full PM workflow
- [[09 - Intake & Triage]] — inbound request workflow

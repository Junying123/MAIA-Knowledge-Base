---
owner: [PM Name]
status: draft
last_reviewed: 2026-03-24
client: Xeersoft-CK Auto
---

# Client Overview — Xeersoft-CK Auto

**Client (End User):** CK Auto
**Integration Partner:** Xeersoft
**Industry:** Automotive
**PM Owner:** [Your Name]
**Onboarding Start:** [YYYY-MM-DD]
**Target Go-Live:** [YYYY-MM-DD]

## Relationship Model

> This is a **partner-integration engagement**, not a standard direct client onboarding.

```
Xeersoft (Partner)          MAIA
  - Existing system    ←──── Data Pull / Integration
  - CK Auto data

CK Auto (End User)
  - Uses MAIA as their system
  - Data originates from Xeersoft
```

**Xeersoft** is MAIA's integration partner. They operate their own system which holds CK Auto's business data (customers, products, orders, etc.). MAIA pulls data from Xeersoft's side and surfaces it to CK Auto via MAIA's interface.

**CK Auto** is Xeersoft's client and the **end user of MAIA**. CK Auto interacts with MAIA directly but their underlying data is sourced from and synced with Xeersoft's platform.

## Key Contacts

### Xeersoft (Partner)

| Name | Role | Email | Phone |
|------|------|-------|-------|
| [Name] | Integration Lead | [email] | [phone] |
| [Name] | Technical Contact | [email] | [phone] |

### CK Auto (End User)

| Name | Role | Email | Phone |
|------|------|-------|-------|
| [Name] | Primary Contact | [email] | [phone] |
| [Name] | Operations Lead | [email] | [phone] |

## Business Context

**What CK Auto needs MAIA for:**
[Describe CK Auto's day-to-day use case — order management, quoting, invoicing, etc.]

**What Xeersoft provides:**
[Describe what data Xeersoft holds — product catalogue, customer master, pricing, orders, etc.]

**Why this integration model:**
Xeersoft already manages CK Auto's business data. Rather than migrating or duplicating data, MAIA integrates with Xeersoft as the source of truth for master data, and CK Auto uses MAIA as their operational interface.

## MAIA Scope

**Workspaces in use:**
- [ ] Sales
- [ ] Finance
- [ ] Logistics

**Key modules:**
- [List the modules CK Auto will use]

**Integration touchpoints with Xeersoft:**
- [ ] Customer master data sync
- [ ] Product/item catalogue sync
- [ ] Pricing data pull
- [ ] Order history / backlog sync
- [ ] [Other data points]

## Current Status

**Phase:** [Pre-onboarding / Integration Design / Onboarding / Live]
**Notes:** [Any current status notes]

## See Also

- [[03 - Clients/Xeersoft-CK Auto/Onboarding Status]]
- [[03 - Clients/Xeersoft-CK Auto/Config Overlay]]
- [[03 - Clients/Xeersoft-CK Auto/Integration/Xeersoft Integration Spec]]
- [[03 - Clients/Xeersoft-CK Auto/Requirements Log]]
- [[03 - Clients/Xeersoft-CK Auto/Feature Requests & Gaps]]

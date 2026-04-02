---
owner: [PM Name]
status: draft
last_reviewed: 2026-03-24
client: Xeersoft-CK Auto
---

# Client Configuration Overlay — Xeersoft-CK Auto

**End User:** CK Auto
**Integration Partner:** Xeersoft
**Industry:** Automotive
**Go-Live Date:** [YYYY-MM-DD]
**Account Owner:** [PM Name]

## Purpose

Captures **CK Auto-specific configurations and Xeersoft integration deviations** from standard MAIA setup.

Standard MAIA features: [[01 - MAIA Product]]. This overlay documents **only customizations and integration-driven differences**.

## Integration Configuration

> Because CK Auto's data originates from Xeersoft, several configurations are **driven by Xeersoft's data model** rather than configured manually in MAIA.

| Configuration Area | Standard MAIA | Xeersoft-Driven / CK Auto Customization |
|-------------------|---------------|------------------------------------------|
| Customer master | Manual entry in MAIA | Pulled from Xeersoft |
| Product catalogue | Manual entry in MAIA | Pulled from Xeersoft |
| Pricing | Configured in MAIA | Sourced from Xeersoft |
| [Other fields] | [Standard] | [Integration-driven or custom] |

**Integration Spec:** [[03 - Clients/Xeersoft-CK Auto/Integration/Xeersoft Integration Spec]]

## Workspace Configuration

### Sales Workspace

**Enabled Modules:**
- [ ] Quotations
- [ ] Sales Orders
- [ ] Invoices
- [ ] Credit Notes

**Custom Settings:**
- [Any CK Auto-specific settings]

### Finance Workspace

[If used — describe configuration]

### Logistics Workspace

[If used — describe configuration]

## Data Sync Settings

| Data Entity | Source | Sync Method | Sync Frequency | Owner |
|-------------|--------|-------------|----------------|-------|
| Customer Master | Xeersoft | [API / CSV / Webhook] | [Real-time / Daily / Manual] | [Team] |
| Product Catalogue | Xeersoft | [Method] | [Frequency] | [Team] |
| Pricing | Xeersoft | [Method] | [Frequency] | [Team] |
| Orders / History | Xeersoft | [Method] | [Frequency] | [Team] |

**Data Ownership:**
- Master data owned by Xeersoft — MAIA reads, does not overwrite
- Transactional data (MAIA-created orders, invoices) owned by MAIA
- Conflict resolution: [Define who wins on data conflicts]

## Permissions & Roles

**See:** [[03 - Clients/Xeersoft-CK Auto/Role Permission]]

**Access Layers:**
- **CK Auto users** — access MAIA as end users (standard MAIA roles)
- **Xeersoft team** — integration/technical access only (no operational access)
- **MAIA team** — admin access

## Known Limitations

- Standard MAIA limitation: cannot create multiple credit notes per invoice
- Data freshness depends on sync frequency from Xeersoft — potential lag
- [Any other limitations specific to this integration model]

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

## Change History

| Date | Change | Changed By |
|------|--------|------------|
| 2026-03-24 | Initial config overlay created | [Name] |

---

**See Also:**
- [[03 - Clients/Xeersoft-CK Auto/Client Overview]]
- [[03 - Clients/Xeersoft-CK Auto/Integration/Xeersoft Integration Spec]]
- [[08 - Configuration & Integrations/Configuration Index]]

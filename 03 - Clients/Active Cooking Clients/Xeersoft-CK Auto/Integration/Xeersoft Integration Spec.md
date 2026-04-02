---
owner: [PM Name]
status: draft
last_reviewed: 2026-03-24
client: Xeersoft-CK Auto
---

# Xeersoft Integration Spec

## Overview

Documents the technical and functional specification for the **Xeersoft ↔ MAIA data integration**.

MAIA pulls data from Xeersoft's system to populate CK Auto's MAIA workspace. CK Auto then operates entirely within MAIA, with master data staying in sync from Xeersoft as the source of truth.

## Integration Architecture

```
Xeersoft System
  └── Data entities (customers, products, pricing, orders)
        │
        │  Pull (scheduled / triggered)
        ▼
  MAIA Integration Layer
        │
        │  Map & transform
        ▼
  MAIA (CK Auto workspace)
        │
        ▼
  CK Auto users operate in MAIA
```

## Data Entities

| Entity | Source | Direction | MAIA Target | Sync Method | Frequency |
|--------|--------|-----------|-------------|-------------|-----------|
| Customer Master | Xeersoft | Xeersoft → MAIA | Customer list | [API / CSV] | [Daily / Real-time] |
| Product Catalogue | Xeersoft | Xeersoft → MAIA | Item master | [Method] | [Frequency] |
| Pricing | Xeersoft | Xeersoft → MAIA | Price list | [Method] | [Frequency] |
| [Other entities] | Xeersoft | Xeersoft → MAIA | [Target] | [Method] | [Frequency] |

## API / Integration Details

**Integration Type:** [REST API / CSV file drop / Webhook / etc.]
**Authentication:** [API key / OAuth / etc.]
**Base URL / Endpoint:** [TBC with Xeersoft]
**Data Format:** [JSON / CSV / XML]

### Endpoints (if API)

| Endpoint | Method | Purpose | Notes |
|----------|--------|---------|-------|
| [/customers] | GET | Pull customer list | [Pagination, filters] |
| [/products] | GET | Pull product catalogue | |
| [/pricing] | GET | Pull pricing data | |

## Field Mapping

### Customer Master

| Xeersoft Field | MAIA Field | Transformation | Notes |
|----------------|------------|----------------|-------|
| [xeersoft_id] | customer_code | [None / rename] | |
| [company_name] | customer_name | | |
| [contact_email] | email | | |
| [payment_terms] | payment_terms | [Map codes to MAIA values] | |

### Product Catalogue

| Xeersoft Field | MAIA Field | Transformation | Notes |
|----------------|------------|----------------|-------|
| [sku_code] | item_code | | |
| [product_name] | item_name | | |
| [uom] | unit_of_measure | [Map UOM codes] | |

## Conflict Resolution

**Rule:** Xeersoft is master for master data. MAIA does not overwrite Xeersoft fields.
**On conflict:** [MAIA overwrites with Xeersoft data / Flag for manual review]
**New records created in MAIA:** [Pushed back to Xeersoft / MAIA-only / TBD]

## Error Handling

| Error Type | Behaviour | Alert |
|------------|-----------|-------|
| Xeersoft API down | [Queue and retry / Skip] | [Notify PM / Dev team] |
| Field validation fail | [Skip record / Log error] | [Log only] |
| Duplicate record | [Skip / Update] | [Log] |

## Testing Plan

- [ ] Unit test: individual field mappings
- [ ] Integration test: full sync dry-run against Xeersoft staging
- [ ] UAT: CK Auto validates data accuracy in MAIA
- [ ] Load test: [if high volume]

## Open Questions

- [ ] Does Xeersoft have a sandbox/staging environment for integration testing?
- [ ] What is the agreed sync frequency?
- [ ] Who maintains the field mapping if Xeersoft changes their schema?
- [ ] Will MAIA-created orders be pushed back to Xeersoft?

## Change History

| Date | Change | Changed By |
|------|--------|------------|
| 2026-03-24 | Initial spec created | [Name] |

## See Also

- [[03 - Clients/Xeersoft-CK Auto/Client Overview]]
- [[03 - Clients/Xeersoft-CK Auto/Config Overlay]]
- [[08 - Configuration & Integrations/Integrations Index]]

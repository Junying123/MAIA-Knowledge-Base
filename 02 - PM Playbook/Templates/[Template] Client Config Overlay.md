---
owner: [PM Name]
status: draft
last_reviewed: YYYY-MM-DD
client: [Client Name]
---

# Client Configuration Overlay — [Client Name]

**Client:** [Client Name]
**Industry:** [Manufacturing / Distribution / Services / etc.]
**Go-Live Date:** YYYY-MM-DD
**Account Owner:** [PM Name]

## Purpose

This document captures **client-specific configurations and deviations** from standard MAIA setup.

All standard MAIA features are documented in [[01 - MAIA Product]]. This overlay documents **only the customizations**.

## Configuration Summary

| Configuration Area | Standard MAIA | Client Customization |
|-------------------|---------------|---------------------|
| [e.g., Payment Terms] | [Default behavior] | [Client-specific setting] |
| [e.g., Quotation Validity] | [Default] | [Client override] |

## Workspace Configuration

### Sales Workspace

**Enabled Modules:**
- [X] Quotations
- [X] Sales Orders
- [X] Invoices
- [ ] Credit Notes (not used)
- [List all modules and their enable/disable status]

**Custom Settings:**
- [Describe any non-standard settings]

### Finance Workspace

[If used, describe configuration]

### Logistics Workspace

[If used, describe configuration]

## Document Settings

### Quotations
- **Numbering Format:** [e.g., QT-CLIENT-YYYY-XXXX]
- **Default Valid Until:** [e.g., 30 days]
- **Required Fields:** [Any additional required fields]
- **Workflow Deviations:** [Any process changes]

### Sales Orders
- **Numbering Format:** [e.g., SO-CLIENT-YYYY-XXXX]
- **Approval Workflow:** [If custom approval needed]
- **Default Payment Terms:** [e.g., Net 30]

### Invoices
- **Numbering Format:** [e.g., INV-CLIENT-YYYY-XXXX]
- **Tax Configuration:** [Tax rates, settings]
- **Payment Methods:** [Accepted payment methods]

## Integration Points

**External Systems:**
- [List any integrated systems: ERP, CRM, accounting software, etc.]
- [Describe integration points and data flow]

**See:** [[08 - Configuration & Integrations/Integrations Index]]

## Permissions & Roles

**User Roles:**
- [List custom roles if any]

**Access Control:**
- [Any deviations from standard permissions]

**See:** [[08 - Configuration & Integrations/Permissions & Roles]]

## Business Rules

**Custom Validations:**
- [Any client-specific business rules or validations]

**Workflow Rules:**
- [Any client-specific workflow requirements]

## Known Limitations for This Client

[List any MAIA limitations that specifically impact this client]

**See:** [[01 - MAIA Product/Overview/Known Limitations]]

## Support Notes

**Key Contacts:**
- Primary Contact: [Name, email, phone]
- Technical Contact: [Name, email, phone]

**Support Hours:**
- [Client timezone and preferred support hours]

**Escalation Path:**
- [How to escalate issues for this client]

## Change History

| Date | Change | Changed By |
|------|--------|------------|
| YYYY-MM-DD | Initial configuration | [Name] |

---

**See Also:**
- Client folder: [[03 - Clients/[Client Name]]]
- [[08 - Configuration & Integrations/Configuration Index]]
- [[02 - PM Playbook/Templates/[Template] Client Onboarding]]

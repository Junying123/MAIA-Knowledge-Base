---
owner: Gareth
status: draft
last_reviewed: 2026-02-20
---

# Permissions & Roles

MAIA user roles and permission structure.

## Standard Roles

### Sales Team Roles

**Sales Manager**
- Full access to Sales workspace
- Can approve quotations and sales orders
- View-only access to Finance workspace

**Sales Representative**
- Create and manage quotations
- Create sales orders from approved quotations
- View invoices and receipts

**Sales Operations**
- Manage all sales documents
- Configure sales settings
- Generate reports

### Finance Team Roles

**Finance Manager**
- Full access to Finance workspace
- Approve invoices and credit notes
- Manage receipts and payments

**Accounts Receivable Clerk**
- Create and manage invoices
- Record receipts
- Track payments

**Accountant**
- Access to all financial documents
- Generate financial reports
- Manage general ledger

### Logistics Team Roles

**Warehouse Manager**
- Full access to Logistics workspace
- Manage inventory and stock movements
- Create delivery notes

**Warehouse Operator**
- Create delivery notes and return notes
- Update stock entries
- Generate pick lists

### System Administrator

**Admin**
- Full access to all workspaces
- User management
- System configuration
- Integration management

## Permission Matrix

| Action | Sales Rep | Sales Mgr | Finance | Logistics | Admin |
|--------|-----------|-----------|---------|-----------|-------|
| Create Quotation | ✅ | ✅ | ❌ | ❌ | ✅ |
| Approve Quotation | ❌ | ✅ | ❌ | ❌ | ✅ |
| Create Sales Order | ✅ | ✅ | ❌ | ❌ | ✅ |
| Create Invoice | ❌ | ❌ | ✅ | ❌ | ✅ |
| Record Payment | ❌ | ❌ | ✅ | ❌ | ✅ |
| Create Delivery Note | ❌ | ❌ | ❌ | ✅ | ✅ |

## Client-Specific Roles

Client-specific role configurations are documented in [[02 - PM Playbook/Templates/[Template] Client Config Overlay]].

## See Also

- [[Configuration Index]]
- [[Integrations Index]]
- [[03 - Clients]]

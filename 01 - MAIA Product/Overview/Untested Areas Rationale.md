---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Untested Areas - Rationale

## Sales Workspace - Untested Modules

**1. Voucher**
Not tested because current phase focused on core revenue cycle (Quotation → Sales Order → Invoice → Receipt); voucher functionality is lower priority and requires separate business logic clarification.

**2. Delivery Notes**
Not tested because testing focused on financial documents (invoices, receipts, credit/debit notes) rather than fulfillment workflow; requires warehouse/logistics integration validation.

**3. Return Notes**
Not tested because return process requires delivery notes to be tested first (reverse flow dependency); lower frequency compared to standard sales transactions and complex inventory reversal logic.

**4. Customer**
Module-level CRUD operations not explicitly tested; customer data was used in all transaction tests (Invoice, Quotation, Sales Order, Receipt) assuming master data functionality works.

**5. Items**
Module-level CRUD operations not explicitly tested; item/SKU data was used across all tests with item selection and auto-population validated within transaction document contexts.

**6. Dashboard**
Lower priority compared to transaction documents, but will be tested as the final component for Sales Workspace after all core modules are stable.

**7. My Tasks**
Not tested because workflow management feature outside current test scope; testing focused on document creation/processing, not task assignment or multi-user collaboration scenarios.

**8. Daily Digest**
Digest content depends on stable data from tested core transaction modules; requires validated transactional data and notification system configuration before meaningful testing can be conducted.

---

## See Also

- [[Invoice Test Summary]]
- [[Credit Note Test Summary]]
- [[Debit Note Test Summary]]
- [[Receipt Test Summary]]
- [[All Workspace Modules]]
- [[Workflow Documentation Rationale]]

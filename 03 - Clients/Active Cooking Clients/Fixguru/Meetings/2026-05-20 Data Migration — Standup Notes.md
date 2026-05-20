---
owner: Gareth
status: draft
last_reviewed: 2026-05-20
---

# Data Migration — Standup Notes (2026-05-20)

Extracted from Mindhive Daily Standup (2026-05-20, 9:45 AM). Context: internal discussion on how to approach and frame historical data migration for clients with AutoCount integration, directly applicable to Fixguru CR-01.

---

## Key Framing for Client

Do not present this as a technical migration task. Frame it as unlocking a capability:

> "If you want MAIA to be able to reference your old orders and invoices when sales users ask, this migration will allow you to do that. If not, MAIA will only be able to reference documents from the cut-off date forward."

The client decides whether they want it. Gareth confirms intent before any scoping or quoting begins.

---

## Question to Ask Fixguru First

> Do you want all your historical AutoCount data — orders, invoices, etc. — accessible inside MAIA?

Nothing moves forward on CR-01 until this is answered. Gate all scoping and pricing on their response.

---

## Pricing Approach

- Migration cost is **volume-based**, not a flat fee
- Assessed by: how much historical data the client wants to migrate (number of records / document types / date range)
- Quote: *"We will assess the cost according to how much historical data you want to migrate."*
- No standard fixed price — scope first, then quote

---

## Timing

- Historical data migration **does not block go-live or UAT**
- Can be executed after go-live
- But since Fixguru is already in UAT, raise it now so they can make an informed decision before go-live

---

## Cut-Off Date

- Cut-off = MAIA go-live date
- Everything before that date = historical (migration scope)
- Everything from go-live onward = covered by standard EOD sync

---

## Post-Migration Hygiene (Internal)

After migration is completed:

1. **Sanitization check** — run row counts and duplicate checks to verify data integrity
2. **Clear cut-off communication to client** — explicitly confirm with Fixguru the exact date up to which data was migrated; no ambiguity on scope boundary

---

## Related

- [[CR Scoping — Fixguru]] — CR-01 section
- [[SOW/Fixguru SOW]] — baseline AutoCount sync scope

# Client email — SAP SQL Query access request (SCC)

Reply to SCC's questions on how MAIA reads batch/serial stock and payment data.

**Context:** SCC asked whether MAIA connects via Service Layer or direct SQL Server, and
requires the integration account be read-only (no insert/update/delete/modify).

**⚠ Internal note — do not send:** our bridge currently *auto-creates* the named queries
(`SAPClient.ensure_sql_query`), which needs the **"Modify SQL Queries in Service Layer"**
authorization. That authorization lets the account author arbitrary SQL and therefore
**conflicts with SCC's read-only requirement**. This email deliberately proposes the
compliant alternative instead: the vendor pre-creates the queries, we request execute-only,
and we disable auto-provisioning on our side. See "Follow-up actions" at the bottom.

---

**Subject:** MAIA ↔ SAP B1 — read-only SQL Query access request for vendor review

Hi [Name],

Thanks for coming back to us. Answers to each of your points below.

## 1. Connection method

Through the **SAP Business One Service Layer only**.

No direct SQL Server connection, no ODBC, and no database credentials are involved. We use
the Service Layer's built-in *SQL Queries* feature
(`POST /b1s/v1/SQLQueries('<code>')/List`), so every request stays inside SAP's own API and
authorisation layer.

## 2. Permissions — read-only, as you require

We agree with your position, and propose this specifically so the integration account stays
read-only:

- Your SAP vendor **creates** the queries below (one-time, superuser action)
- The integration user is granted **execute-only** rights on those named queries
- The integration user is **not** granted *"Modify SQL Queries in Service Layer"*

With that setup the account can run only your approved queries and cannot author, alter,
insert, update or delete any SAP data. We will disable our automatic query-provisioning so
the account never attempts to create a query.

## 3. Proposed queries

### Already in use — payments

```sql
select DocEntry, DocNum, Series, Canceled, DocDate, TaxDate, CardCode, CardName,
       DocCurr, DocTotal, DocTotalFC, DocTotalSy, TransId, CreateDate, CreateTS,
       UpdateDate, UpdateTS, LogInstanc, UserSign, UserSign2
from ORCT
where UpdateDate > :lastUpdateDate
   or (UpdateDate = :lastUpdateDate and UpdateTS > :lastUpdateTS)
   or (UpdateDate = :lastUpdateDate and UpdateTS = :lastUpdateTS and DocEntry > :lastDocEntry)
order by UpdateDate, UpdateTS, DocEntry
```

The same query runs against **OVPM** for outgoing payments.

Query codes: `MH_ORCT_INCREMENTAL` (incoming), `MH_OVPM_INCREMENTAL` (outgoing).

### New — batch / serial stock balance

Purpose is the opening-stock migration: we need quantity per batch/serial per warehouse,
which the standard Service Layer entities do not expose.

```sql
select T0.ItemCode, T0.WhsCode, T1.DistNumber as BatchNum, T0.Quantity
from OBTQ T0
join OBTN T1
  on T0.ItemCode = T1.ItemCode and T0.SysNumber = T1.SysNumber
where T0.Quantity > 0
```

The same shape applies to **OSRQ / OSRN** for serial numbers.

Both are read-only `SELECT` statements with no joins outside the tables listed.

> Please ask your vendor to confirm the exact column names for OBTQ/OBTN and OSRQ/OSRN on
> your SAP version. We have written these against the standard schema and would rather your
> vendor validate them than have us assume.

## 4. Tables and fields

| Purpose | Tables | Access |
|---|---|---|
| Incoming payments | ORCT | SELECT |
| Outgoing payments | OVPM | SELECT |
| Batch stock quantity | OBTQ, OBTN | SELECT |
| Serial stock quantity | OSRQ, OSRN | SELECT |

Fields are limited to those listed in the queries above.

## 5. Execution frequency

- **Batch/serial stock** — one-time, for the opening-stock migration. Ad-hoc afterwards only
  if a re-count is required.
- **Payments** — incremental polling, in the order of every few minutes. Each call is
  filtered by a last-updated watermark, so it returns only records changed since the previous
  run rather than re-reading history.

## 6. Integration user

The existing MAIA Service Layer account already used for this integration — no new account is
required. We are happy to confirm the username directly with your vendor.

---

Once your vendor has reviewed, let us know and we will schedule the change.

Best regards,
[Your name]
MindHive Asia

---

## Follow-up actions (internal)

| # | Action | Owner | Why |
|---|---|---|---|
| 1 | Code change: stop calling `ensure_sql_query` when queries are vendor-provisioned (config flag) | MindHive | Once "Modify SQL Queries" auth is removed, auto-provision would throw and break payments |
| 2 | Add batch/serial SQLQuery + route to `sap-b1-integration` | MindHive | Unblocks the 333 parked stock rows (RM 9.59M) |
| 3 | Deploy to client Windows box, together with PR #1 (session self-heal + `/health/sap`) | MindHive + SCC | Both changes are undeployed; ship together |
| 4 | Bound the batch/serial query by item or warehouse | MindHive | The unbounded payments `since` scan hit a Cloudflare ~100s timeout (524); a full-catalogue batch scan would do the same |

**Verified before sending (2026-07-21):** the SQLQueries path is live on SCC — a narrowed
`/payments/incoming?since=2026-01-01` returned real ORCT rows in 21s, confirming the queries
are provisioned and the account can execute them today. The earlier 524 was an unbounded
full-history scan, not an authorization failure.

**Risk if declined:** without either execute-only access or vendor-created queries, batch and
serial stock cannot be migrated. RM 9.59M across 333 item/warehouse rows (282 items) stays out
of MAIA, leaving MAIA showing RM 3.2M of inventory against roughly RM 12.8M actual.

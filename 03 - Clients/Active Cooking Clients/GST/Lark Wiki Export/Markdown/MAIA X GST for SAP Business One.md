**MAIA X GST for SAP Business One**

**Read-Only SQL Query Access Request**

**Connection Method**

MAIA connects through the **SAP Business One Service Layer only**.

No direct SQL Server connection, ODBC connection, database account, or database credentials are required.

The approved queries are executed through:

  --------------------------------------------------------------
  HTTP\
  POST /b1s/v1/SQLQueries(\'\<QueryCode\>\')/List

  --------------------------------------------------------------

**Read-Only Permissions**

To keep the MAIA integration account read-only:

The SAP vendor creates the approved queries as a one-time setup.

The MAIA integration user receives execute-only permission for the approved named queries.

The user is not granted **\"Modify SQL Queries in Service Layer\"** permission.

The user must not have permission to insert, update, delete, cancel, or modify SAP data.

No direct database access is required.

Every query below is a read-only SELECT. None writes to SAP.

If a stored query ever needs to change, a **new query code** will be provided for review rather than modifying an existing one. A stored SQL Query cannot be edited in place through the Service Layer, so this is also a technical necessity, not only a review preference.

**Summary --- Ten Queries In Total**

  -------------------- -------------------- --------------------
  Group                Count                Tables

  Payments             2                    ORCT, OVPM

  Batch stock          4                    OBTQ, OBTN

  Serial stock         4                    OSRQ, OSRN

  **Total**            **10**               
  -------------------- -------------------- --------------------

The batch and serial groups each need **four** queries rather than one. This is a Service Layer

constraint, not a preference: a SQL Query parameter may only be compared against a **column**,

never against a literal. An \"optional filter\" of the form

  --------------------------------------------------------------
  SQL\
  and (:itemCode = \'\*\' or T0.ItemCode = :itemCode)

  --------------------------------------------------------------

is rejected by SAP with Invalid parameterized expression (error 701). Each filter combination

must therefore exist as its own stored query.

The filtered variants matter for performance: an unfiltered query reads the whole table, while a

filtered one can use the ItemCode / WhsCode index.

Each query code carries a short suffix derived from the query text itself, so a code always

identifies one exact statement and a query cannot be silently altered behind a familiar name.

**Payment Queries**

**Incoming Payments**

**Query code:** MH_ORCT_INCREMENTAL

**Table:** ORCT

  -----------------------------------------------------------------------------------
  SQL\
  select DocEntry, DocNum, Series, Canceled, DocDate, TaxDate, CardCode, CardName,\
  DocCurr, DocTotal, DocTotalFC, DocTotalSy, TransId, CreateDate, CreateTS,\
  UpdateDate, UpdateTS, LogInstanc, UserSign, UserSign2\
  from ORCT\
  where UpdateDate \> :lastUpdateDate\
  or (UpdateDate = :lastUpdateDate and UpdateTS \> :lastUpdateTS)\
  or (UpdateDate = :lastUpdateDate\
  and UpdateTS = :lastUpdateTS\
  and DocEntry \> :lastDocEntry)\
  order by UpdateDate, UpdateTS, DocEntry

  -----------------------------------------------------------------------------------

**Outgoing Payments**

**Query code:** MH_OVPM_INCREMENTAL

**Table:** OVPM

The same query structure is used, replacing ORCT with OVPM.

**Batch Stock Queries**

**Tables:** OBTQ (quantity per batch per warehouse), OBTN (batch number master)

**Base Query**

  --------------------------------------------------------------
  SQL\
  select T0.ItemCode as ItemCode,\
  T0.WhsCode as WhsCode,\
  T1.DistNumber as Number,\
  T0.Quantity as Quantity\
  from OBTQ T0\
  join OBTN T1\
  on T0.ItemCode = T1.ItemCode\
  and T0.SysNumber = T1.SysNumber\
  where T0.Quantity \> 0\
  order by T0.ItemCode, T0.WhsCode, T1.DistNumber

  --------------------------------------------------------------

**Filter Clauses**

The three filtered variants add one or both of the following clauses immediately after

where T0.Quantity \> 0, keeping the rest of the statement identical:

  --------------------------------------------------------------
  SQL\
  and T0.ItemCode = :itemCode

  --------------------------------------------------------------

  --------------------------------------------------------------
  SQL\
  and T0.WhsCode = :whsCode

  --------------------------------------------------------------

**Batch Query Codes**

  ------------------------------ -----------------------------
  Query code                     Filters applied

  MH_OBTQ_BATCH_STOCK_BE1D46C6   none (base query)

  MH_OBTQ_BATCH_STOCK_11B92620   and T0.ItemCode = :itemCode

  MH_OBTQ_BATCH_STOCK_B5EF0102   and T0.WhsCode = :whsCode

  MH_OBTQ_BATCH_STOCK_1A93FCF2   both clauses, item first
  ------------------------------ -----------------------------

**Serial Stock Queries**

**Tables:** OSRQ (quantity per serial per warehouse), OSRN (serial number master)

**Base Query**

  --------------------------------------------------------------
  SQL\
  select T0.ItemCode as ItemCode,\
  T0.WhsCode as WhsCode,\
  T1.DistNumber as Number,\
  T0.Quantity as Quantity\
  from OSRQ T0\
  join OSRN T1\
  on T0.ItemCode = T1.ItemCode\
  and T0.SysNumber = T1.SysNumber\
  where T0.Quantity \> 0\
  order by T0.ItemCode, T0.WhsCode, T1.DistNumber

  --------------------------------------------------------------

Note that both quantity tables join on SysNumber.

**Filter Clauses**

Identical to the batch queries --- the same two clauses, in the same position.

**Serial Query Codes**

  ------------------------------- -----------------------------
  Query code                      Filters applied

  MH_OSRQ_SERIAL_STOCK_0776C44B   none (base query)

  MH_OSRQ_SERIAL_STOCK_7E3238D1   and T0.ItemCode = :itemCode

  MH_OSRQ_SERIAL_STOCK_F8027701   and T0.WhsCode = :whsCode

  MH_OSRQ_SERIAL_STOCK_94ABC64C   both clauses, item first
  ------------------------------- -----------------------------

**Required Tables**

  ----------------------- -------------------- --------------------
  Purpose                 Tables               Access

  Incoming payments       ORCT                 SELECT

  Outgoing payments       OVPM                 SELECT

  Batch stock quantity    OBTQ, OBTN           SELECT

  Serial stock quantity   OSRQ, OSRN           SELECT
  ----------------------- -------------------- --------------------

Access is limited to the fields included in the approved queries above. No other table is read

through this mechanism.

**Why These Queries Are Needed**

The Service Layer\'s standard entities do not expose stock quantity per batch or per serial number:

BatchNumberDetails and SerialNumberDetails are **masters** --- they list which numbers exist

for an item, with no quantity and no warehouse.

Items.ItemWarehouseInfoCollection gives the per-warehouse quantity, but only as a **total**

with no batch or serial breakdown.

For batch- and serial-tracked items, an opening stock balance cannot be loaded from a total alone

--- the receiving system needs to know which batches or serial numbers make up that quantity.

That breakdown exists only in the tables above.

**Execution Frequency**

**Payments:** incremental polling every few minutes. Each request returns only records changed

since the previous successful run, filtered by a last-updated watermark rather than re-reading

history.

**Batch and serial stock:** mainly one-time, for the opening-stock migration. Ad-hoc execution

afterwards only when a recount is required.

**Integration User**

MAIA will use the existing SAP Business One Service Layer integration account.

No new SQL Server or database account is required. The username can be confirmed directly with

the SAP vendor through a secure channel.

**SAP Vendor Action Required**

Please assist to:

Review and validate the proposed queries, **including confirming the column names against**

**this SAP Business One version** --- they are written against the standard schema.

Create the **ten** approved named queries listed above (2 payment + 4 batch + 4 serial), using

the query codes exactly as given.

Grant the existing MAIA user execute-only permission on those ten queries.

Confirm that the user cannot create or modify queries.

Confirm that the user cannot insert, update, delete, or modify SAP data.

Once completed, please inform the MindHive team so we can proceed with testing.

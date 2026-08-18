# Holsen Stock Ingestion — 2026 Sheet Clarifications

**File:** `260624 Holsen Stock.xlsm` → tab `2026`
**Rows:** 7,518 (1 header + 7,517 data)
**Date range observed:** 30/12/2025 → 24/06/2026

---

## Answers to your three questions

### 1. Is it the whole stock ledger from 1st Jan to yesterday?

**Mostly yes, but with a wrinkle.** The 2026 tab is the full transactional ledger from Jan 1 to Jun 24, 2026 — BUT it also contains 235 rows tagged `C/F` (carry-forward) which are opening balances brought in from 2025. These C/F rows sit on three dates:

- `30/12/25` (3 rows)
- `01/01/26` (most of them)
- `07/01/26` (a handful)
- `23/02/26` (one)

**→ Ask client to confirm:** Is `C/F` ALWAYS the opening balance, and should we treat these as the year-start snapshot (not as transactions)? The 23/02/26 C/F row is suspicious — was a forgotten opening balance added late?

---

### 2. Do we need to care about last year's data?

**No transactional data from 2025 is in this tab** (earliest real transaction is 02/01/26). The only 2025 footprint is the C/F opening balances dated 30/12/25.

**→ Ask client to confirm:** For go-live, do we ingest C/F rows as the **opening stock balance** for each batch/product, and ignore everything else from 2025? (Assumption: yes.)

---

### 3. Does the total of IN/OUT here = total in the Trading Sheet?

**Totals computed from this tab:**

| Metric | Quantity |
|---|---|
| Total QTY IN (all rows) | 32,502.71 |
| — of which C/F (opening) | 11,698.71 |
| — of which new receipts (non-C/F) | 20,804.00 |
| Total QTY OUT | 19,922.04 |
| Net movement (IN − OUT, excl. C/F) | +881.96 |
| Net incl. C/F (= closing on-hand) | +12,580.67 |

**→ Ask client to confirm which definition the Trading Sheet's "total" uses:**
- (a) Closing on-hand = `C/F + new IN − OUT`
- (b) Movement-only = `new IN − OUT` (excludes opening balance)
- (c) Gross IN and Gross OUT shown separately

If the Trading Sheet number doesn't match any of the three above, the difference is the issue to chase.

---

## Other ambiguities the client needs to clarify

### A. Column structure issues
The header has duplicate / undocumented columns. Please confirm what these are:

- `SST`, `Column2`, `Column3`, `SST%` — four adjacent columns, three of them named generically and **all currently showing `#ERROR!`** in every row. Are these legacy/unused?
- ` Sum Owed` and ` TYPE` have leading spaces in the header — intentional or just sloppy?
- `S/P` — undefined acronym (Sale / Purchase? Stock / Production?)

### B. Pervasive formula errors
- **6,873 of 7,517 rows have `#ERROR!` or `#N/A` in the PRODUCT column** — the product name appears to be a VLOOKUP against the BATCH code that's broken in the export. The raw BATCH code IS present, so we can re-resolve product names from a master product table — **but we need the client to provide that master mapping** (BATCH → PRODUCT name → UoM → SST% → unit price).
- The SST, SST%, Unit Price, Sum Owed, Bill Month, PACKING, UNIT, CLASS, S/P, TYPE columns are all `#ERROR!` for the same reason. Confirm: are these all derived from formulas, and is the source-of-truth a separate Product Master / Customer Master tab?

### C. Data hygiene issues to flag
- **5,025 rows have no DATE** but contain `#ERROR!` in other cells — these look like padding / blank formula rows beyond the real data. Confirm we can drop any row with no DATE and no QTY IN/OUT.
- **5,036 rows have neither QTY IN nor QTY OUT** populated — combined with the above, most of these are the empty-formula tail.
- **1 row has BOTH QTY IN and QTY OUT** populated (`#ERROR!`/`#ERROR!`) — a likely malformed row to investigate.
- **7 fully blank rows.**

### D. `REMARKS` semantics
Beyond `C/F` (235), there are flags like `BONDED` (11), `RM - <product>` (raw material transfers, ~30 rows), `Return from Orient`, `SENT TO SA`, `sent to shinetsu as lmw`, `CANCELLED`, plus free-text like `146.39 KG`, `2/2`, `22/108`.

**→ Ask client:** which REMARKS values are operational flags that drive logic (e.g. `BONDED` → tax treatment; `RM -` → internal transfer not a sale; `CANCELLED` → exclude from totals)? Free-text quantities in REMARKS (`146.39 KG`, `102.40 KG`) may indicate partial fulfillment — confirm handling.

### E. Identifier conventions
- `PO` (Purchase Order), `DO` (Delivery Order), `INV` (Invoice) — mostly populated on OUT rows, mostly blank on IN rows. Confirm: for receipts (IN), is the supplier reference in `INV` or elsewhere? Some IN rows have INV like `33IC012512`, `25-NS049-01` — supplier invoice number?
- `BATCH` is the primary item key but is sometimes blank (e.g. the `20 MELT BLOWN POLYPROPYLENE` and `BRASS SHEET` C/F rows). Confirm: for items without batch tracking, what's the unique key?

### F. Date format
Dates are stored as `dd/mm/yy` text strings. Parses cleanly, but flag for ingestion: do NOT let the loader auto-coerce as mm/dd/yy.

---

## Recommended pre-ingestion asks for the client

1. **Provide the Product Master** (BATCH → product name, UoM, packing, class, S/P, type, SST%, default unit price) so we can repair the broken VLOOKUPs.
2. **Confirm the C/F treatment** — load as opening balances dated 01/01/26 and exclude from transactional totals.
3. **Confirm which Trading Sheet total figure** we should reconcile against (closing on-hand vs movement-only).
4. **Hand over the source `.xlsm`** (not just the CSV export) so we can read the formulas directly and avoid the `#ERROR!` mess.
5. **Provide REMARKS value dictionary** (BONDED, RM -, CANCELLED, Return from X, sent to X — what each one means operationally).
6. **Provide Customer Master** if customer matching is part of ingestion.

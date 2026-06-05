# Chatbot Brief — Item Historical Pricing

**Audience:** Chatbot team
**Status:** Backend shipped (read API + per-doctype blocks). FE dropdown + chart shipped. Discount-display work (FE phases A1/B1/C2 and BE phase C1) still pending — see "Not yet shipped" below.
**Last updated:** 2026-05-04

---

## 1. What this feature is

Sales staff need to know what a customer has historically paid for a SKU before quoting them a new unit price. The platform exposes that history at the row level inside Quotation, Sales Order, and Sales Invoice — a unit-price dropdown shows the customer's latest price, lifetime average, and the configured price-list rates (Standard, MSRP, Retail, Wholesale, Bulk, Min, Max).

The mental model: a customer's price = a discount off **Standard Selling Price**. Standard moves with the market; the discount is the durable thing. The history endpoint surfaces what the customer has actually been billed across each sales doctype so the rep doesn't quote blind.

## 2. The endpoint

**Path (Frappe whitelisted method):**

```
mindhive_erpnext_apis.mindhive_erpnext_apis.endpoints.v1.general.item_price.get_customer_item_pricing_history
```

**Method:** `GET`

**Source files:**
- Endpoint: `mindhive_erpnext_apis/.../endpoints/v1/general/item_price.py`
- Schemas: `mindhive_erpnext_apis/.../schemas/general/item_price.py` (`GetCustomerItemPricingHistoryRequest`, `CustomerItemPricingHistoryDoctypeBlock`, etc.)
- Service: `mindhive_erpnext_apis/.../services/general/item_price.py`

### Request parameters

| Param | Required | Notes |
|---|---|---|
| `company` | yes | Company scope. |
| `customer_id` *or* `customer_code` | yes (one of) | `customer_id` = `Customer.name` (primary key); `customer_code` = business code. |
| `item_id` *or* `item_code` | yes (one of) | `item_id` = `Item.name`; `item_code` = SKU. |
| `doctypes` | optional | Comma-separated subset of `QT,SO,SI`. Defaults to all three. Accepts a single value (`doctypes=SI`) or list. |
| `history_limit` | optional | Max history rows per doctype. The FE uses 100. Must be ≥ 1. |

### Response envelope

The endpoint returns the standard MAIA envelope; `data` is an array — one block per requested doctype.

```jsonc
{
  "status": "success",
  "message": "...",
  "data": [
    {
      "doctype": "SI",                 // "QT" | "SO" | "SI"
      "transaction_count": 42,         // total submitted docs matched (not just rows returned)
      "latest_transaction": { /* CustomerItemPricingHistoryRow, see below */ },
      "lifetime_average":   { /* CustomerItemPricingLifetimeAverage, see below */ },
      "history": [ /* up to history_limit rows, newest first */ ]
    },
    { "doctype": "SO", ... },
    { "doctype": "QT", ... }
  ]
}
```

**`CustomerItemPricingHistoryRow`** (each transaction row):

```jsonc
{
  "rank": 1,                       // 1 = most recent
  "source_docname": "SI-2026-0123",
  "source_row_name": "ab12cd34ef",
  "source_row_idx": 2,
  "submitted_at": "2026-04-22T08:14:00Z",
  "posting_date": "2026-04-22",
  "item_code": "SKU-100",
  "item_name": "...",
  "qty": 50,
  "uom": "Box",
  "stock_uom": "Pcs",
  "conversion_factor": 12,
  "stock_qty": 600,
  "unit_price": 24.00,             // in row UOM (Box)
  "price_list_rate": 30.00,        // reference price; see "Not yet shipped" below
  "stock_uom_rate": 2.00,          // unit_price normalized to stock_uom
  "discount_percentage": 20.0,
  "discount_amount": 6.00,
  "currency": "MYR",
  "warehouse": "WH-001",
  "warehouse_label": "Main Warehouse"
}
```

**`CustomerItemPricingLifetimeAverage`**:

```jsonc
{
  "unit_price": 23.40,             // arithmetic mean across all matched submitted txns
  "stock_uom_rate": 1.95,
  "transaction_count": 42,
  "from_submitted_at": "2024-09-01T...",
  "to_submitted_at":   "2026-04-22T...",
  "uom": "Box",
  "stock_uom": "Pcs",
  "currency": "MYR"
}
```

## 3. How to interpret the data

- **One block per doctype, never merged.** A QT history is independent of SO and SI. The user sees them as separate rows ("Latest Quotation", "Latest Sales Order", "Latest Invoice"). Do not synthesize a cross-doctype "latest price" — it is a deliberate product decision to keep them distinct.
- **`unit_price` is in the row's UOM.** If `uom !== stock_uom`, the value is per-Box, per-Carton, etc. — not per-Piece. Use `stock_uom_rate` if you need a normalized comparison across rows. The FE currently disables history rows where `uom !== stock_uom` rather than auto-converting.
- **`lifetime_average.unit_price` is a simple arithmetic mean** of the matched rows' transaction unit prices, not weighted by qty. Quote it as "average billed price", not "weighted average".
- **`transaction_count` reflects the full matched set**, not the truncated `history` array length. If `history.length === 100` and `transaction_count === 247`, there are 147 older rows the FE didn't fetch.
- **`history` is newest-first** (rank 1 → N).
- **`discount_percentage` semantics today:** for legacy rows, this is `(price_list_rate - rate) / price_list_rate * 100`. Because writes currently set `price_list_rate = rate` (see §4), legacy/in-flight rows show `discount_percentage = 0`. Once phase C1 ships, new docs will store the true delta against Standard Selling.
- **Customer not found / no history:** the endpoint still returns 200 with each requested doctype block present; `transaction_count = 0`, `latest_transaction = null`, `lifetime_average = null`, `history = []`. Treat absence as "no prior dealings", not as an error.

## 4. Known limitation — `price_list_rate` on writes

QT/SO/SI write paths currently set `price_list_rate = rate`. Until backend Phase C1 lands, every newly-saved row reports `discount_percentage = 0` regardless of what the customer was actually offered against Standard Selling. The history endpoint surfaces whatever was persisted, so the chatbot should not narrate "0% discount" as a meaningful signal yet. After C1: new rows will carry the real delta; pre-C1 rows remain at 0% with no backfill (accepted).

## 5. Suggested chatbot intents

These are the questions the data shape answers cleanly today:

| Intent | What to fetch | What to say |
|---|---|---|
| "What was the last price we sold X to customer Y?" | `latest_transaction` from the `SI` block | `unit_price` + `uom`, plus `posting_date` and `source_docname` for citation. |
| "What's the average price customer Y has paid for X?" | `lifetime_average` from `SI` | `unit_price` + `uom`, span (`from_submitted_at` → `to_submitted_at`), `transaction_count`. |
| "Have we quoted X to Y recently?" | `latest_transaction` from `QT` | Distinguish quoted vs invoiced — never conflate the two. |
| "How many times has Y bought X?" | `transaction_count` from `SI` | Use the full count, not `history.length`. |
| "Show me the price trend for Y on X." | `history` from `SI` (or whichever doctype) | Use `submitted_at` for ordering; values are newest-first — reverse for a left-to-right time series. |

### Guardrails

- Always ask the user (or carry from context) which **company** is in scope — the same customer/item pair can have different histories per company.
- If the user asks about "price" without specifying QT/SO/SI, default to **SI** (what was actually billed). Mention which doctype you used.
- Quote prices with currency and UOM. A bare number is not a price.
- Don't invent a "discount" narrative until phase C1 ships — if `price_list_rate` looks suspiciously equal to `unit_price`, treat the discount field as not yet meaningful.

## 6. FE reference (for parity / debugging)

The dropdown that shows this same data lives in the unit-price cell on QT/SO/SI item rows:

- API client: `apps/maia/src/shared/api/@item-price/api/item-price.api.ts`
- TS types: `apps/maia/src/shared/api/@item-price/api/item-price.types.ts`
- Renderer: `apps/maia/src/shared/components/item-section/price-cell/`
- Query key the FE uses: `["customerItemPricingHistory", company, customerId, itemId, doctype, historyLimit]`, `staleTime: 5 min`

## 7. Where to ask

- Backend / endpoint behavior: backend team (owners of `mindhive_erpnext_apis`).
- Pending FE phases (discount display, customer-profile editor, chart click-to-select): see `maia-fe/docs/plans/2026-04-23-item-historical-pricing-discount-phases.md`.
- Full product spec (rationale, locked decisions, examples): `maia-fe/docs/item-historical-pricing-discount.md`.

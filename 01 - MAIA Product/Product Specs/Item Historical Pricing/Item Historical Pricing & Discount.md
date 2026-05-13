

**Version:** 0.5 (All Gaps Resolved) **Date:** 2026-04-14 **Author:** Iman + Claude (co-authored) **Status:** IN TESTING — developed, internal testing in progress **Intake Ref:** `intake/WIP/7Apr26_ivan_customer_item_price_history`**PCS:** Required before implementation (`frontend`, `backend`, `contracts`, `chatbot`)

---

1. ## Why This Feature Exists
    

SKU market prices fluctuate. Each customer's price is derived from a **discount off the Standard Selling Price**. For example:

- Standard Selling Price = RM10
    
- Customer A discount = 10%
    
- Customer A unit price = RM9
    

Next month, Standard Selling Price moves to RM14.30. Same 10% discount -> Customer A unit price = RM12.87.

The **market price is external** — the user knows it but the system does not store it. What the system tracks is: the **Standard Selling Price** (the base for discount calculation), the **customer's price or discount %** (one or the other, never both persisted), and the **unit price** on each transaction.

Users currently cannot see historical pricing context (last/past prices, discount trends) at the point of unit price selection. They rely on manual lookup or memory. This feature surfaces that context inline.

---

1. ## Decisions Register
    

### All Locked Decisions

|       |                                                                                         |                                                                                                                                                                                                                                                                                      |           |
| ----- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| ID    | Decision                                                                                | Resolution                                                                                                                                                                                                                                                                           | Date      |
| D-001 | How is the discount reference rate stored on saved QT/SO/SI rows?                       | Option A: Use ERPNext's existing price_list_rate on child item rows. Populate with Standard Selling Price at save time. ERPNext auto-derives discount_percentage and discount_amount. Fallback: price_list_rate = rate when Standard Selling unavailable. See detail below.          | 4/14/2026 |
| D-002 | Customer profile: persist discount % or customer_price?                                 | Only one stored. If user enters discount -> discount_percentage persisted, customer_price (i.e., price_list_rate on Item Price) = null. If user enters price -> price_list_rate persisted, discount_percentage = null. Never both.                                                   | 4/13/2026 |
| D-003 | When does price_list_rate get written on child rows?                                    | On both draft save and submit. Recalculated from current Standard Selling on every save. Frozen at submit.                                                                                                                                                                           | 4/13/2026 |
| D-004 | Show discount % inline in dropdown?                                                     | Yes. Each dropdown row shows discount % relative to current Standard Selling Price.                                                                                                                                                                                                  | 4/13/2026 |
| D-005 | Where to display discount % on item rows?                                               | Inline multiline in the unit price cell. Primary line = price, secondary line = discount %.                                                                                                                                                                                          | 4/13/2026 |
| D-006 | Persist or derive customer profile discount?                                            | Resolved via D-002: only one stored, the other derived at display time.                                                                                                                                                                                                              | 4/13/2026 |
| D-007 | How does the dropdown render customer pricing when only discount_percentage is stored?  | Derive numeric price from standard_selling_price * (1 - discount / 100). If Standard Selling unavailable, hide Customer Price row.                                                                                                                                                   | 4/13/2026 |
| GAP-1 | Customer pricing enforcement with discount-only records                                 | Derive then validate. If customer has discount_percentage stored (price_list_rate = null), enforcement derives expected price from Standard Selling before validating.                                                                                                               | 4/14/2026 |
| GAP-2 | Historical price discount % in dropdown — which standard?                               | Current Standard Selling. The dropdown shows discount relative to today's standard, not the standard at the time of the historical transaction. This is a comparison tool for pricing decisions. Label: "vs current Standard." Saved rows use their frozen price_list_rate snapshot. | 4/14/2026 |
| GAP-3 | What gets saved when discount-derived customer price violates min/max?                  | Block entirely. Reject the entry. User must enter a valid discount that produces a price within min/max. No partial saves.                                                                                                                                                           | 4/14/2026 |
| GAP-4 | price_list_rate UOM on child rows                                                       | Always base UOM. Frontend normalizes rate by conversion_factor before calculating discount: discount = (price_list_rate - (rate / conversion_factor)) / price_list_rate * 100.                                                                                                       | 4/14/2026 |
| GAP-5 | Existing submitted documents have price_list_rate = rate (no Standard Selling snapshot) | Accepted limitation. Old documents show discount = 0% or use fallback to current Standard Selling from pricing data. Documented as known behavior — not backfilled.                                                                                                                  | 4/14/2026 |

### D-001 Detail: `price_list_rate` on Transaction Child Rows

**How it works in ERPNext (validated against docs and codebase):**

`price_list_rate` = the catalog/reference price from the selected price list. `rate` = the final transacted price after any user override. ERPNext auto-derives `discount_percentage = ((price_list_rate - rate) / price_list_rate) * 100` and `discount_amount = price_list_rate - rate`.

**Current MAIA behavior:** Sets `price_list_rate = rate` (same value) to prevent ERPNext from auto-fetching a price list value and overwriting the user's entered rate. This was a workaround for when `price_list_rate` was left null.

**New behavior:** Set `price_list_rate = Standard Selling Price` when available. Because we explicitly provide BOTH values, ERPNext does not auto-fetch. ERPNext auto-derives `discount_percentage` and `discount_amount` — we get backend-persisted discount for free.

|   |   |   |   |
|---|---|---|---|
|Scenario|price_list_rate|rate|ERPNext auto-derives|
|Standard Selling = RM10, user enters RM9|10|9|discount_percentage = 10%, discount_amount = 1.00|
|Standard Selling unavailable|9.00 (= rate)|9|discount_percentage = 0%|
|User enters RM12 (above standard RM10)|10|12|discount_percentage = -20% (markup)|

**Fallback rule:** If Standard Selling Price is not available for the item, set `price_list_rate = rate` (current behavior preserved, no discount).

**UOM:** `price_list_rate` is stored in base UOM. `rate` is stored in the row's selected UOM. Frontend normalizes before calculating.

**Existing documents:** Documents saved before this feature have `price_list_rate = rate`. Discount displays as 0%. This is accepted — no backfill.

---

2. ## Scope
    

### 2.1 In Scope

|   |   |
|---|---|
|Area|What Changes|
|QT/SO/SI Item Tables|Populate child-row price_list_rate with Standard Selling snapshot (instead of mirroring rate)|
|Unit Price Dropdown|Reordered with new labels + inline discount % (vs current Standard)|
|Dropdown Label Logic|N=1 -> "Last Price", N>1 -> "Past Price" (shows latest value only)|
|Customer Profile Page|Add discount % column. Mutually exclusive with customer_price: only one persisted, other derived|
|Customer Pricing Enforcement|Derive expected price from discount when price_list_rate is null on Item Price|
|Frontend Discount Display|Inline multiline in unit price cell: price + discount % off Standard Selling|
|Backend API|Extend historical pricing response with transaction_count|

### 2.2 Out of Scope

- Price history graph/timeline visualization (future)
    
- Multiple past prices as separate dropdown rows (future)
    
- Auto-pricing without explicit user selection
    
- Replacing existing price list model
    
- Standalone pricing analytics screens
    
- Backfilling `price_list_rate` on existing submitted documents
    

### 2.3 Future Considerations

- **Price history graph**: When N>1, expandable visual timeline of past customer+item prices
    
- **Past N prices in dropdown**: Show last N transactions as separate selectable rows
    
- **Discount trend analysis**: Discount % trend over time for a customer+item pair
    

---

3. ## Data Model Changes
    

### 3.1 Repurpose `price_list_rate` on Child Item Doctypes

**Doctypes affected:** `Quotation Item`, `Sales Order Item`, `Sales Invoice Item`

**No schema migration needed.** Field already exists (standard ERPNext).

|   |   |
|---|---|
|Property|Value|
|Fieldname|price_list_rate|
|Current MAIA behavior|Set to same value as rate|
|New behavior|Set to Standard Selling Price (base UOM). Fallback to rate if unavailable.|
|ERPNext auto-derives|discount_percentage, discount_amount, base_price_list_rate|

### 3.2 New Custom Field: `discount_percentage` on `Item Price`

**Doctype affected:** `Item Price` (where `price_list = "Customer Price"`)

|   |   |
|---|---|
|Property|Value|
|Fieldname|discount_percentage|
|Field Type|Float|
|Precision|2|
|Label|Discount %|
|Hidden|1 (consumed by MAIA frontend)|
|Default|null|

**Mutual exclusivity rule:**

|   |   |   |   |
|---|---|---|---|
|User Enters|Stored|Null|Derived at Display|
|Discount %|discount_percentage = 10.00|price_list_rate = null|customer_price = standard * (1 - 10/100)|
|Customer Price|price_list_rate = 9.00|discount_percentage = null|discount = ((standard - 9) / standard) * 100|

---

4. ## Backend Changes
    

### 4.1 Update `_map_item_payload_to_frappe_row` in QT/SO/SI Services

**Files:**

- `services/sales_agent_workspace/sales_order.py` -> `_map_item_payload_to_frappe_row()`
    
- `services/sales_agent_workspace/quotation.py` -> `_map_item_payload_to_frappe_row()`
    
- `services/sales_agent_workspace/sales_invoice_v2.py` -> `_map_item_payload_to_frappe_row()`
    

**Change:** Add `standard_selling_price` parameter. Populate `price_list_rate` with Standard Selling instead of mirroring `rate`.

```Python
def _map_item_payload_to_frappe_row(
    item: dict,
    ...,
    standard_selling_price: Optional[Decimal] = None,  # NEW
) -> dict:
    unit_price = item.get("unit_price", 0)
    row = {
        ...
        "rate": unit_price,
        "price_list_rate": float(standard_selling_price) if standard_selling_price else unit_price,
        "base_price_list_rate": float(standard_selling_price) if standard_selling_price else unit_price,
        ...
    }
    return row
```

**Caller responsibility:** The service function calling `_map_item_payload_to_frappe_row` must resolve Standard Selling Price for each item from `tabItem Price` (existing price data already fetched in the flow).

**Update existing test:** `test_price_list_rate_mapping.py` must be updated to test both scenarios: with and without `standard_selling_price` parameter.

### 4.2 Schema Migration: Add `discount_percentage` to `Item Price`

**File:** New patch following existing patterns.

```Python
custom_fields = {
    "Item Price": [
        {"fieldname": "discount_percentage", "fieldtype": "Float",
         "label": "Discount Percentage", "hidden": 1, "precision": "2"}
    ],
}
```

### 4.3 Extend Historical Pricing API Response

**File:** `services/general/item_price.py` -> `_query_last_transaction_price_batch()`

Add `transaction_count` — total submitted transactions for customer+item across QT/SO/SI.

**Implementation:** `COUNT(*) OVER (PARTITION BY item_code)` window function in existing CTE, counted before the `WHERE row_rank = 1` filter.

**Updated response:**

```JSON
{
  "last_transaction_price": {
    "value": 9.00,
    "source_doctype": "Sales Invoice",
    "source_docname": "SI-00042",
    "source_date": "2026-03-15",
    "currency": "MYR",
    "uom": "Nos",
    "transaction_count": 5
  }
}
```

### 4.4 Dynamic Labels in `compose_price_list_options()`

**File:** `services/general/item_price.py`

```Python
tx_count = (last_transaction_price or {}).get("meta", {}).get("transaction_count", 0)
label = "Last Price" if tx_count == 1 else "Past Price"
_append_option("historical_last_price", label, last_transaction_price)
```

### 4.5 Customer Price Dropdown Derivation (D-007)

When building price options, if customer Item Price has `discount_percentage` only (no `price_list_rate`):

```Python
if customer_discount is not None and customer_price_value is None:
    if standard_selling_price:
        derived_price = standard_selling_price * (1 - customer_discount / 100)
        # Append as Customer Price option with derived value
    else:
        # Skip Customer Price row — cannot derive without standard
```

### 4.6 Customer Pricing Enforcement Update (GAP-1)

**File:** `services/sales_agent_workspace/customer_pricing_enforcement.py`

At line ~455, where `raw_expected_price = _to_decimal(selected_row.get("price_list_rate"))`:

```Python
raw_expected_price = _to_decimal(selected_row.get("price_list_rate"))
if raw_expected_price is None:
    # Discount-only record: derive expected price from Standard Selling
    discount_pct = _to_decimal(selected_row.get("discount_percentage"))
    if discount_pct is not None and standard_selling_price:
        raw_expected_price = standard_selling_price * (1 - discount_pct / 100)
    else:
        continue  # Cannot validate without a reference price
```

### 4.7 Customer Price API: Mutual Exclusivity Enforcement

**File:** `services/general/item_price.py` -> `sync_prices()`, `create_item_price()`, `update_item_price()`

**Validation:** Reject if both `discount_percentage` and `customer_price` are non-null.

**Min/max constraint (GAP-3):** If discount-derived price violates min/max bounds, **reject the save** with validation error. User must adjust the discount to produce a valid price.

```Python
if data.discount_percentage is not None:
    derived_price = standard_selling * (1 - data.discount_percentage / 100)
    if derived_price < min_selling_price or derived_price > max_selling_price:
        frappe.throw(f"Discount {data.discount_percentage}% produces price {derived_price}, "
                     f"which is outside allowed range [{min_selling_price}, {max_selling_price}].")
    item_price_doc.discount_percentage = data.discount_percentage
    item_price_doc.price_list_rate = None
elif data.customer_price is not None:
    item_price_doc.price_list_rate = data.customer_price
    item_price_doc.discount_percentage = None
```

### 4.8 Customer Price Read Response

Add `discount_percentage` to fetched fields:

```Python
fields=["name", "item_code", "price_list_rate", "uom", "currency", "discount_percentage"]
```

---

5. ## Frontend Changes
    

### 5.1 Unit Price Dropdown: Reorder + Labels + Discount

**File:** `apps/maia/src/shared/components/item-section/price-cell/use-price-options.ts`

**Order:**

1. Customer Price (if available)
    
2. Last Price or Past Price (if available, label from `transaction_count`)
    
3. Avg Lifetime Invoiced (if available)
    
4. Standard Selling
    
5. Minimum Selling
    
6. Maximum Selling
    
7. MSRP
    
8. Retail
    
9. Wholesale
    
10. Bulk
    
11. Cost Price
    

**Each row displays:**

```Plain
Line 1: [Label]           [Price] [Currency/UOM]
Line 2: [Metadata]        [vs current Standard: -10%]
```

**Discount in dropdown = always vs CURRENT Standard Selling Price (GAP-2 resolution).**

**Label logic:**

```Plain
if transaction_count === 1 -> "Last Price"
if transaction_count > 1  -> "Past Price"
if transaction_count === 0 -> hide row
```

**Visibility:** Each row hidden if value is null. Discount hidden if Standard Selling unavailable.

### 5.2 Discount % Display on Saved Item Rows

**File:** `apps/maia/src/shared/components/item-section/price-cell/price-cell-renderer.tsx`

Multiline cell:

```Plain
Line 1: RM 9.00
Line 2: -10% off Standard     (secondary text, muted)
```

**Calculation for saved rows (uses frozen snapshot, GAP-4 UOM handling):**

```TypeScript
const pricListRate = row.price_list_rate  // base UOM
const rateInBaseUom = row.rate / (row.conversion_factor || 1)
const discountPct = priceListRate && priceListRate > 0
  ? ((priceListRate - rateInBaseUom) / priceListRate) * 100
  : null
```

**Calculation for unsaved draft rows (before first save):**

```TypeScript
const standardPrice = getStandardSellingPrice(itemData, row.sku) // base UOM
const rateInBaseUom = row.unit_price / (row.conversion_factor || 1)
const discountPct = standardPrice && standardPrice > 0
  ? ((standardPrice - rateInBaseUom) / standardPrice) * 100
  : null
```

**Display:**

- Price < Standard -> green/neutral (e.g., "-10%")
    
- Price > Standard -> red/warning (e.g., "+15%")
    
- Zero or unavailable -> hide secondary line
    

**Existing documents (GAP-5):** Old rows have `price_list_rate = rate`, so discount shows as 0%. Falls back to current Standard Selling from pricing data if preferred.

### 5.3 Customer Profile Page: Discount Column

**File:** `apps/maia/src/domains/customer/customer-details/components/tabs/customer-price-list-tab.tsx`

**Column layout:** SKU | Item Name | Standard Price (RO) | Discount % (editable) | Customer Price (editable) | Min (RO) | Max (RO) | UOM (RO)

**Mutual exclusivity UX:**

```Plain
User enters Discount % = 10
  -> Customer Price shows "RM 9.00" (derived, italic/muted)
  -> Payload: { discount_percentage: 10, customer_price: null }

User enters Customer Price = 9.00
  -> Discount % shows "10.00%" (derived, italic/muted)
  -> Payload: { customer_price: 9.00, discount_percentage: null }
```

**Visual:** User-entered = normal weight. Derived = italic/muted.

**Constraint enforcement (GAP-3):**

- If discount produces price below min or above max -> **block save**, show error: "Discount produces price outside allowed range [min, max]. Adjust discount or update min/max."
    
- Standard Price = 0 or null -> discount field disabled, tooltip "Standard price required"
    
- Both fields cleared -> both null in payload (no customer-specific pricing)
    

---

6. ## API Contract Changes
    

### 6.1 Historical Pricing Response

```JSON
{
  "customer": "CUST-001",
  "item_code": "ITEM-001",
  "last_transaction_price": {
    "value": 9.00,
    "source_doctype": "Sales Invoice",
    "source_docname": "SI-00042",
    "source_date": "2026-03-15",
    "currency": "MYR",
    "uom": "Nos",
    "transaction_count": 5
  },
  "lifetime_avg_invoiced_price": {
    "value": 8.75,
    "formula": "simple",
    "sample_count": 12,
    "from_date": "2025-06-01",
    "to_date": "2026-03-15",
    "currency": "MYR",
    "uom": "Nos"
  }
}
```

### 6.2 Transaction Item Row (No Payload Change)

Frontend submits existing shape. Backend derives and persists `price_list_rate` from Standard Selling.

### 6.3 Customer Price Sync Payload

**Discount entry:** `{ "discount_percentage": 10.00, "customer_price": null }`**Price entry:** `{ "customer_price": 9.00, "discount_percentage": null }`**Validation:** Both non-null -> reject. Discount produces price outside min/max -> reject.

### 6.4 Customer Price Read Response

```JSON
{
  "sku": "ITEM-001",
  "customer_price": 9.00,
  "discount_percentage": null,
  "standard_price": 10.00,
  "min_price": 7.50,
  "max_price": 15.00
}
```

---

7. ## Dropdown Visual Spec
    

```Plain
+-------------------------------------------------------------+
|  Unit Price v                                                |
+-------------------------------------------------------------+
|  * Customer Price         RM 9.00    RM/ Nos               |
|                           vs current Standard: -10%          |
+-------------------------------------------------------------+
|  > Past Price             RM 8.50    RM/ Nos               |
|    SI-00042 . 2026-03-15  vs current Standard: -15%          |
+-------------------------------------------------------------+
|  # Avg Lifetime Invoiced  RM 8.75    RM/ Nos               |
|    12 invoices . Jun25-Mar26  vs current Standard: -12.5%    |
+-------------------------------------------------------------+
|  Standard Selling         RM 10.00   RM/ Nos               |
|  Minimum Selling          RM 7.50    RM/ Nos   -25%        |
|  Maximum Selling          RM 15.00   RM/ Nos   +50%        |
|  MSRP                     RM 12.00   RM/ Nos   +20%        |
|  Retail                   RM 11.00   RM/ Nos   +10%        |
|  Wholesale                RM 8.00    RM/ Nos   -20%        |
|  Bulk                     RM 7.80    RM/ Nos   -22%        |
|  Cost Price               RM 6.00    RM/ Nos   -40%        |
+-------------------------------------------------------------+
```

---

8. ## Customer Profile Visual Spec
    

```Plain
+------------------------------------------------------------------------------+
|  Customer: ABC Corp                                                           |
+-------+----------+----------+----------+----------+------+------+-----+
|  SKU  | Name     | Std Price| Disc %   | Cust Price| Min  | Max  | UOM |
+-------+----------+----------+----------+----------+------+------+-----+
| A001  | Widget A | RM 10.00 | [10.00%] | RM 9.00  | 7.50 |15.00 | Nos |
| B002  | Gadget B | RM 25.00 |  20.00%  | [RM20.00]|18.00 |30.00 | Nos |
+-------+----------+----------+----------+----------+------+------+-----+
  [brackets] = user-entered     italic = derived     Std Price = read-only
```

---

9. ## Implementation Phases
    

|   |   |   |   |
|---|---|---|---|
|Phase|What|Backend|Frontend|
|1|Update _map_item_payload_to_frappe_row to set price_list_rate = Standard Selling|Yes|—|
|2|Add discount_percentage custom field to Item Price|Yes|—|
|3|Add transaction_count to historical pricing response|Yes|—|
|4|Customer price enforcement: derive from discount (GAP-1)|Yes|—|
|5|Customer price API: mutual exclusivity + min/max rejection|Yes|—|
|6|Reorder dropdown + dynamic Last/Past Price label + discount|—|Yes|
|7|Inline discount % display on saved item rows|—|Yes|
|8|Customer profile: discount column with mutual exclusivity|—|Yes|

---

10. ## Risks
    

|   |   |   |   |
|---|---|---|---|
|Risk|Likelihood|Impact|Mitigation|
|ERPNext auto-recalculates rate when price_list_rate differs|Low|High|Explicitly set both values. Integration test: save QT with price_list_rate=10, rate=9, verify rate unchanged on re-read.|
|Standard Selling Price null for some items|High|Medium|Fallback: price_list_rate = rate. Discount display hidden.|
|Rounding loops in discount/price two-way calc|Medium|Low|Price precision 4dp, discount 2dp. Price wins in conflict.|
|Old documents show 0% discount|Certain|Low|Accepted limitation. Documented in GAP-5.|
|discount_percentage on Item Price: ERPNext may have native field with same name|Medium|High|Verify field does not already exist before migration. Use maia_discount_percentage if conflict.|

---

11. ## Acceptance Criteria
    

### Unit Price Dropdown

- Dropdown order: Customer -> Historical -> Price Lists
    
- Historical label: "Last Price" if N=1, "Past Price" if N>1
    
- Historical rows hidden when no history
    
- All rows show discount % vs current Standard Selling
    
- Discount hidden when Standard Selling unavailable
    
- Selecting option sets `unit_price`
    
- Existing customer default/highlight behavior unchanged
    

### Saved Item Row Discount

- Multiline cell: price + discount %
    
- Discount uses frozen `price_list_rate` snapshot (base UOM, normalized by conversion_factor)
    
- Unsaved drafts fall back to current Standard Selling
    
- Old documents (pre-feature) show 0% or fallback gracefully
    

### Customer Profile

- Discount % column editable
    
- Editing discount clears customer_price in payload
    
- Editing customer_price clears discount in payload
    
- Derived value shown italic/muted
    
- Discount producing price outside min/max -> save blocked with error
    
- Discount field disabled when Standard Selling unavailable
    

### Backend

- `price_list_rate` = Standard Selling on QT/SO/SI child rows when available
    
- `price_list_rate` = rate when Standard Selling unavailable (fallback)
    
- ERPNext auto-derives `discount_percentage` on child rows (bonus)
    
- `transaction_count` returned in historical pricing API
    
- Customer pricing enforcement derives price from discount when needed
    
- Customer price API rejects both discount + price non-null
    
- Customer price API rejects discount producing price outside min/max
    

---

## Appendix A: Code References

|   |   |
|---|---|
|Component|File Path|
|SO Item Mapper|mindhive_erpnext_apis/services/sales_agent_workspace/[sales_order.py](http://sales_order.py) -> _map_item_payload_to_frappe_row()|
|QT Item Mapper|mindhive_erpnext_apis/services/sales_agent_workspace/[quotation.py](http://quotation.py) -> _map_item_payload_to_frappe_row()|
|SI Item Mapper|mindhive_erpnext_apis/services/sales_agent_workspace/[sales_invoice_v2.py](http://sales_invoice_v2.py) -> _map_item_payload_to_frappe_row()|
|Existing Mapping Test|mindhive_erpnext_apis/tests/unit/[test_price_list_rate_mapping.py](http://test_price_list_rate_mapping.py)|
|Price List Rate Setting|patches/database_seeder/data/tabSingles.csv line 890: editable_price_list_rate=1|
|Historical Pricing Service|mindhive_erpnext_apis/services/general/[item_price.py](http://item_price.py) lines 437-660|
|Compose Price Options|mindhive_erpnext_apis/services/general/[item_price.py](http://item_price.py) -> compose_price_list_options() line 369|
|Customer Pricing Enforcement|mindhive_erpnext_apis/services/sales_agent_workspace/[customer_pricing_enforcement.py](http://customer_pricing_enforcement.py)|
|Price Options Hook (FE)|maia-fe/apps/maia/src/shared/components/item-section/price-cell/use-price-options.ts|
|Price Cell Renderer (FE)|maia-fe/apps/maia/src/shared/components/item-section/price-cell/price-cell-renderer.tsx|
|Customer Price Tab (FE)|maia-fe/apps/maia/src/domains/customer/customer-details/components/tabs/customer-price-list-tab.tsx|

## Appendix B: ERPNext `price_list_rate` Behavior Reference

ERPNext documentation confirms:

- `price_list_rate` = base/catalog price fetched from the selected Price List / Item Price
    
- `rate` = final transacted price after discounts/overrides
    
- If both are explicitly set, ERPNext auto-derives `discount_percentage` and `discount_amount`
    
- ERPNext does not overwrite `rate` when both fields are explicitly provided
    
- `editable_price_list_rate = 1` allows manual editing of the field
    
- Pricing Rules can override `price_list_rate`, but MAIA does not use Pricing Rules
    

Sources:

- [Selling Settings - Frappe Docs](https://docs.frappe.io/erpnext/selling-settings)
    
- [Item Price - Frappe Docs](https://docs.frappe.io/erpnext/user/manual/en/item-price)
    
- [Sales Order - Frappe Docs](https://docs.frappe.io/erpnext/sales-order)
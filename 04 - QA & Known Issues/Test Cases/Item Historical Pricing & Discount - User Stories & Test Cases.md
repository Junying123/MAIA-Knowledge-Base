---
owner: Gareth
status: draft
last_reviewed: 2026-05-07
---
# Item Historical Pricing & Discount — User Stories & Test Cases

## Overview

User stories and test cases for the Item Historical Pricing & Discount feature. Derived from `[[Item Historical Pricing & Discount]]` spec v0.5.

---

## US-01: See Past Price in Unit Price Dropdown

> As a sales rep creating a quotation/SO/invoice,
> I want to see what price I charged this customer for this item before,
> so I can stay consistent and avoid surprising the customer.

### Test Cases

| ID       | Scenario                                | Steps                                                                       | Expected Result                                                                  |
| -------- | --------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| TC-01-01 | Has past quotation history              | Open unit price dropdown for item with at least 1 past QT for this customer | Row labeled **"Latest Quotation Price"** with value, source doc ref, date        |
| TC-01-02 | No past transactions                    | Open dropdown for item never transacted with this customer                  | No "Latest Quotation Price" row shown                                            |
| TC-01-03 | Select past price                       | Click "Latest Quotation Price" row                                          | Unit price field populates with that value                                       |
| TC-01-04 | Existing highlight unchanged            | Customer has a Customer Price set; open dropdown                            | Customer Price row still highlighted/defaulted as before                         |
| TC-01-05 | Draft doc excluded from history         | Customer has 1 submitted SI + 1 draft QT for same item                      | Dropdown shows "Latest Quotation Price" from submitted doc only; draft not shown |
| TC-01-06 | No submitted history, only draft exists | Customer has 1 draft QT for item, no submitted docs                         | No "Latest Quotation Price" row shown                                            |

---

## US-02: See Discount % on Relevant Price Options

> As a sales rep,
> I want to see what discount the Customer Price and latest quotation price represent vs today's standard,
> so I know the impact of my pricing decision without manual calculation.

### Test Cases

| ID       | Scenario                                      | Steps                                                                                    | Expected Result                                                                         |
| -------- | --------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| TC-02-01 | Discount shown on Customer Price              | Open dropdown; item has Standard Selling = RM10, Customer Price = RM9                   | Customer Price row shows secondary line `vs current Standard: -10%`                    |
| TC-02-02 | Discount shown on Latest Quotation Price      | Open dropdown; Latest Quotation Price = RM8.50, Standard = RM10                         | "Latest Quotation Price" row shows secondary line `vs Standard: -15%`                  |
| TC-02-03 | No discount % on Avg Lifetime Quotation Price | Open dropdown; Avg Lifetime Quotation Price available                                    | Avg Lifetime row shows price only — **no discount % secondary line**                   |
| TC-02-04 | No discount % on price list rows              | Open dropdown; Max Selling = RM15, Standard = RM10                                      | Max Selling and other price list rows show price only — **no discount % secondary line** |
| TC-02-05 | Discount hidden when no Standard Selling      | Open dropdown for item with no Standard Selling Price set                                | Discount % secondary line not shown on any row                                          |
| TC-02-06 | Discount vs current standard (not historical) | Item standard was RM8 at time of last transaction (RM7.20), now standard = RM10          | Latest Quotation Price row discount = `-28%` (vs RM10, not RM8)                        |

---

## US-03: See Discount on Saved Line Items

> As a sales rep reviewing a quotation or invoice,
> I want to see the discount % applied to each line item,
> so I can quickly audit my pricing without manual calculation.

### Test Cases

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|-----------------|
| TC-03-01 | Discount shown below standard | Save QT with Standard = RM10, unit price = RM9 | Line item shows `RM 9.00` + `-10% off Standard` (green) |
| TC-03-02 | Markup shown above standard | Save QT with Standard = RM10, unit price = RM12 | Line item shows `RM 12.00` + `+20% off Standard` (red/warning) |
| TC-03-03 | Secondary line hidden at zero | Save QT where Standard Selling unavailable | Unit price shown, no secondary discount line |
| TC-03-04 | Saved row uses frozen snapshot | Save QT at Standard = RM10; admin changes Standard to RM14; reopen QT | Discount still shows as `-10%` (uses frozen `price_list_rate`, not live standard) |
| TC-03-05 | Unsaved draft uses current standard | Add line item, do not save; Standard = RM10, entered price = RM9 | Secondary line shows `-10% off Standard` (from live standard) |
| TC-03-06 | UOM normalization | Row uses carton UOM (conversion_factor = 12); Standard = RM10/pc, entered = RM108/carton | Discount calculates correctly in base UOM: `(10 - 9) / 10 = 10%` |
| TC-03-07 | Old document graceful fallback | Open QT/SO/Invoice created before this feature | 0% shown or secondary line hidden — no crash |

---

## US-04: Set Customer Pricing by Discount Instead of Fixed Price

> As a sales manager setting up a customer's price profile,
> I want to define a customer's price as a discount % off standard,
> so that when the standard price changes, their effective price updates automatically.

### Test Cases

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|-----------------|
| TC-04-01 | Enter discount %, price derived | Customer profile → enter `10%` in Discount % for item (Standard = RM10) | Customer Price shows `RM 9.00` (italic/muted); payload: `{ discount_percentage: 10, customer_price: null }` |
| TC-04-02 | Enter customer price, discount derived | Customer profile → enter `RM 9.00` in Customer Price (Standard = RM10) | Discount % shows `10.00%` (italic/muted); payload: `{ customer_price: 9.00, discount_percentage: null }` |
| TC-04-03 | Mutual exclusivity: editing discount clears price | Enter fixed price RM9 first, then edit discount to 15% | Customer Price field clears user value, shows derived RM8.50 (muted) |
| TC-04-04 | Mutual exclusivity: editing price clears discount | Enter discount 10% first, then edit customer price to RM8 | Discount field clears user value, shows derived 20% (muted) |
| TC-04-05 | Clear both fields | Clear both Discount % and Customer Price | Both null in payload; no customer-specific pricing stored |
| TC-04-06 | Visual distinction | Enter discount 10% | Discount % = normal font weight (user-entered); Customer Price = italic/muted (derived) |

---

## US-05: Blocked from Saving Invalid Discount

> As a sales manager,
> I want the system to block me if a discount produces a price outside the allowed min/max range,
> so I don't accidentally set a customer price that violates pricing rules.

### Test Cases

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|-----------------|
| TC-05-01 | Discount produces price below min | Standard = RM10, Min = RM7.50; enter Discount = 30% (derives RM7) | Save blocked; error: "Discount produces price outside allowed range [7.50, 15.00]. Adjust discount or update min/max." |
| TC-05-02 | Discount produces price above max | Standard = RM10, Max = RM15; enter Discount = -60% (derives RM16) | Save blocked with same error |
| TC-05-03 | Discount within range saves | Standard = RM10, Min = RM7.50, Max = RM15; enter Discount = 10% (derives RM9) | Save succeeds |
| TC-05-04 | Discount field disabled without standard | Standard Selling = null for item | Discount % field disabled; tooltip "Standard price required" |
| TC-05-05 | Discount field disabled at zero standard | Standard Selling = RM0 | Discount % field disabled; tooltip "Standard price required" |

---

## US-05b: Customer Price Auto-Derived When Standard Price Changes

> As a sales rep,
> I want the system to automatically compute the customer's unit price from their stored discount % when the standard price has changed,
> so I don't need to calculate the new price manually.

### Test Cases

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|-----------------|
| TC-05b-01 | Derived price reflects updated standard | Customer has `discount_percentage = 10` stored; standard price changes from RM10 to RM14.30; open unit price dropdown for that customer+item | Customer Price row shows **RM 12.87** (14.30 × 0.9, rounded); secondary line shows `-10% vs current Standard` |
| TC-05b-02 | Derived price correct on save | Select the derived Customer Price and save the Quotation | Unit price saved as RM 12.87; team did not calculate this manually |
| TC-05b-03 | No Customer Price row when standard unavailable | Customer has `discount_percentage = 10`; item has no Standard Selling Price | Customer Price row is **hidden** from dropdown — cannot derive without standard |

---

## US-06: Customer Pricing Enforcement Works for Discount-Based Records

> As a system,
> I want to enforce a customer's agreed discount even when stored as % (not a fixed price),
> so reps cannot override a negotiated discount by manually entering a different price.

### Test Cases

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|-----------------|
| TC-06-01 | Enforce discount-based customer price | Customer has `discount_percentage = 10`, no fixed price; Standard = RM10; rep enters RM10 on QT | Blocked — expected price derived as RM9, enforcement triggers |
| TC-06-02 | Allow matching derived price | Same setup; rep enters RM9 | Allowed — matches derived expected price |
| TC-06-03 | Enforcement skipped without standard | Customer has `discount_percentage = 10`; item has no Standard Selling | Enforcement skipped — no reference to derive from; price accepted |
| TC-06-04 | Fixed price still enforced normally | Customer has `customer_price = RM9` (no discount stored) | Enforcement uses `price_list_rate` directly as before |

---

## US-07: Avg Lifetime Invoiced Price Visible in Dropdown

> As a sales rep,
> I want to see the customer's average invoiced price for this item over their history,
> so I have a longer-term benchmark when negotiating repeat orders.

### Test Cases

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|-----------------|
| TC-07-01 | Avg price shown with history | Open dropdown; customer has 12 past invoices for item | Row "Avg Lifetime Quotation Price" shows value and transaction span — **no discount % secondary line** |
| TC-07-02 | Row hidden with no history | Open dropdown; customer has no invoice history for item | "Avg Lifetime Quotation Price" row not shown |

---

## Dropdown Order Verification

| ID | Scenario | Expected Order |
|----|----------|----------------|
| TC-ORD-01 | All options available | Customer Price → Last/Past Price → Avg Lifetime Invoiced → Standard Selling → Min → Max → MSRP → Retail → Wholesale → Bulk → Cost Price |
| TC-ORD-02 | No customer price, no history | Standard Selling first |
| TC-ORD-03 | Null rows hidden | Any row with null value not shown in dropdown |

---

---

## US-08: Ask Chatbot for Last Invoice Price for a Customer Item

> As a sales rep using the MAIA chatbot,
> I want to ask what price was last billed to a customer for a specific item,
> so I can reference it when quoting without opening the invoice manually.

### Test Cases

| ID       | Scenario                        | Steps                                                                                                                | Expected Result                                                                      |
| -------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| TC-08-01 | Last invoice price returned     | Ask chatbot: "What was the last price we sold [Item X] to [Customer Y]?" (customer has at least 1 submitted Invoice) | Chatbot returns unit price with UOM, invoice date, and invoice document number       |
| TC-08-02 | Response matches actual Invoice | Cross-check chatbot response against the submitted Invoice in MAIA                                                   | Price, date, and doc number match the most recent submitted Invoice                  |
| TC-08-03 | No history response             | Ask same question for a customer with no invoice history for that item                                               | Chatbot responds that there is no prior invoice history — no error, no made-up price |
| TC-08-04 | Currency and UOM always quoted  | Chatbot returns price for an item with a non-standard UOM (e.g. Carton)                                              | Response includes UOM and currency — not a bare number                               |

---

## US-09: Ask Chatbot for Average Price and Quotation History

> As a sales rep using the MAIA chatbot,
> I want to ask for a customer's lifetime average price and recent quotation history for an item,
> so I have a longer-term benchmark when preparing a quote.

### Test Cases

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|-----------------|
| TC-09-01 | Lifetime average returned | Ask chatbot: "What is the average price [Customer Y] has paid for [Item X]?" (customer has multiple submitted Invoices) | Chatbot returns average unit price, number of invoices counted, and date range covered |
| TC-09-02 | Recent quotation history returned | Ask chatbot: "Have we quoted [Item X] to [Customer Y] recently?" | Chatbot returns most recent Quotation price, quotation date, and document number — or confirms no recent quotation |
| TC-09-03 | No history — average | Ask average question for a customer+item with no invoice history | Chatbot responds that there is no prior history — no error, no made-up value |
| TC-09-04 | No history — quotation | Ask quotation question for a customer+item with no quotation history | Chatbot confirms no prior quotation exists for this customer and item |
| TC-09-05 | Quoted vs invoiced distinction | Ask chatbot for "price" without specifying QT or SI | Chatbot defaults to Invoice (what was actually billed) and states which doctype it used |

---

## US-10: Ask Chatbot for Last Pricing Across SI / SO / QTN

> As a sales rep using the MAIA chatbot,
> I want to ask for a customer's last price on a specific item across Invoice, Sales Order, or Quotation,
> so I can reference it before quoting without opening each doc manually.

**Reference prompt:** *"Can you get the Leather Sneakers Black Size 8 pricing from Niadia Jane last order?"*

### Test Cases

| ID       | Scenario                         | Example Prompt                                                                           | Expected Result                                                                                                                      |
| -------- | -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| TC-10-01 | Last order — defaults to SI      | "Can you get the Leather Sneakers Black Size 8 pricing from Niadia Jane last invoice?"   | Chatbot returns last **Invoice** unit price, currency, UOM, invoice doc number, and date. States it used Invoice (SI) as the source. |
| TC-10-02 | Last order — explicit SI         | "What was the last invoice price for Leather Sneakers Black Size 8 for Niadia Jane?"     | Returns SI `latest_transaction`: unit price, `source_docname`, `posting_date`, UOM, currency                                         |
| TC-10-03 | Last order — explicit SO         | "What was the last Sales Order price for Leather Sneakers Black Size 8 for Niadia Jane?" | Returns SO `latest_transaction`: unit price, `source_docname`, `posting_date`, UOM, currency                                         |
| TC-10-04 | Last order — explicit QTN        | "What price did we last quote Niadia Jane for Leather Sneakers Black Size 8?"            | Returns QT `latest_transaction`: unit price, `source_docname`, `posting_date`, UOM, currency                                         |
| TC-10-05 | Draft excluded                   | Niadia Jane has 1 submitted SI + 1 draft SO for Leather Sneakers Black Size 8            | Chatbot returns submitted SI price only. Draft SO not surfaced.                                                                      |
| TC-10-06 | No submitted history             | Niadia Jane has never had a submitted doc for this item                                  | Chatbot responds: no prior history found — no invented price                                                                         |
| TC-10-07 | QTN ≠ SI — never conflated       | Ask for "last price" then ask "last quotation price" for same customer+item              | Two different responses if QT and SI prices differ — chatbot does not merge or average across doctypes                               |
| TC-10-08 | UOM and currency always included | Item is sold in Pairs; last SI price = RM 125.00/Pair                                    | Response includes "RM 125.00 / Pair" — not bare "125.00"                                                                             |
| TC-10-09 | Citation included                | Any last-price query                                                                     | Response includes doc number (e.g. `SI-2026-0042`) and date so rep can verify                                                        |
| TC-10-10 | Company scope                    | Two companies share same customer; ask without specifying company                        | Chatbot asks which company, or infers from session context — does not mix company data                                               |

---

## See Also

- [[Item Historical Pricing & Discount]] — full feature spec
- [[chatbot-brief-item-historical-pricing]] — chatbot API reference and intents
- [[Quotation Spec]]
- [[Sales Order Spec]]
- [[Invoice Spec]]

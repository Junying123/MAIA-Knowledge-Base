---
owner: Gareth
status: draft
last_reviewed: 2026-04-20
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

| ID       | Scenario                                | Steps                                                                       | Expected Result                                                       |
| -------- | --------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| TC-01-01 | Single past transaction                 | Open unit price dropdown for item with 1 past transaction for this customer | Row labeled "Last Price" with value, source doc ref, date             |
| TC-01-02 | Multiple past transactions              | Open dropdown for item with 2+ past transactions                            | Row labeled "Past Price" with most recent value, source doc ref, date |
| TC-01-03 | No past transactions                    | Open dropdown for item never transacted with this customer                  | No Last/Past Price row shown                                          |
| TC-01-04 | Select past price                       | Click "Last Price" or "Past Price" row                                      | Unit price field populates with that value                            |
| TC-01-05 | Existing highlight unchanged            | Customer has a Customer Price set; open dropdown                            | Customer Price row still highlighted/defaulted as before              |
| TC-01-06 | Draft doc excluded from history         | Customer has 1 submitted SI + 1 draft QT for same item                      | Dropdown shows "Last Price" (N=1, from SI only); draft QT not counted |
| TC-01-07 | No submitted history, only draft exists | Customer has 1 draft QT for item, no submitted docs                         | No Last/Past Price row shown                                          |

---

## US-02: See Discount % on Every Price Option

> As a sales rep,
> I want to see what discount each price option represents vs today's standard,
> so I know the impact of my pricing decision without manual calculation.

### Test Cases

| ID       | Scenario                                      | Steps                                                                           | Expected Result                                      |
| -------- | --------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------- |
| TC-02-01 | Discount shown on Customer Price              | Open dropdown; item has Standard Selling = RM10, Customer Price = RM9           | Customer Price row shows `vs current Standard: -10%` |
| TC-02-02 | Discount shown on historical row              | Open dropdown; Last Price = RM8.50, Standard = RM10                             | Last Price row shows `vs current Standard: -15%`     |
| TC-02-03 | Markup shown on price tier                    | Open dropdown; Max Selling = RM15, Standard = RM10                              | Max Selling row shows `+50%`                         |
| TC-02-04 | Discount hidden when no Standard Selling      | Open dropdown for item with no Standard Selling Price set                       | Discount % not shown on any row                      |
| TC-02-05 | Discount vs current standard (not historical) | Item standard was RM8 at time of last transaction (RM7.20), now standard = RM10 | Last Price row discount = `-28%` (vs RM10, not RM8)  |

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
| TC-07-01 | Avg price shown with history | Open dropdown; customer has 12 past invoices for item | Row "Avg Lifetime Invoiced" shows value, `12 invoices · Jun25–Mar26`, discount vs current standard |
| TC-07-02 | Row hidden with no history | Open dropdown; customer has no invoice history for item | "Avg Lifetime Invoiced" row not shown |
| TC-07-03 | Discount shown on avg row | Standard = RM10; avg lifetime = RM8.75 | Row shows `vs current Standard: -12.5%` |

---

## Dropdown Order Verification

| ID | Scenario | Expected Order |
|----|----------|----------------|
| TC-ORD-01 | All options available | Customer Price → Last/Past Price → Avg Lifetime Invoiced → Standard Selling → Min → Max → MSRP → Retail → Wholesale → Bulk → Cost Price |
| TC-ORD-02 | No customer price, no history | Standard Selling first |
| TC-ORD-03 | Null rows hidden | Any row with null value not shown in dropdown |

---

## See Also

- [[Item Historical Pricing & Discount]] — full feature spec
- [[Quotation Spec]]
- [[Sales Order Spec]]
- [[Invoice Spec]]

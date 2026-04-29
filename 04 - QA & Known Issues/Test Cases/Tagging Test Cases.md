---
owner: Gareth
status: draft
last_reviewed: 2026-04-29
---
# Tagging — Test Cases

## Overview

Test cases for the Tagging feature across two scopes:
- **Doctype-level tags** — labels applied to a document (e.g., Quotation, Sales Order, Invoice) to classify the transaction
- **Item-level tags** — product attribute tags applied to items (e.g., hazard class, goods type)

---

## US-TAG-01: Apply Tag at Doctype Level

> As a sales rep creating or managing a document,
> I want to tag it with a transaction type (e.g., Bulk Order),
> so that the team can filter and identify special orders at a glance.

### Test Cases

| ID         | Scenario                                 | Steps                                                                                          | Expected Result                                                              |
| ---------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| TC-TAG-01-01 | Apply single doctype tag               | Open a Quotation → find Tag field → select "Bulk Order" → save                                 | Tag "Bulk Order" saved on record; visible in document header                 |
| TC-TAG-01-02 | Apply multiple doctype tags            | Open an SO → tag "Bulk Order" + "Export" → save                                               | Both tags saved; both visible on record                                      |
| TC-TAG-01-03 | Tag persists after status change       | Tag SO as "Bulk Order" → submit SO                                                             | Tag "Bulk Order" still visible on submitted SO                               |
| TC-TAG-01-04 | Tag visible in list view               | Go to SO list view → check if "Bulk Order" tag is visible per row                             | Tag label appears on each tagged record in list                               |
| TC-TAG-01-05 | Filter list by doctype tag             | In SO list view → filter by tag "Bulk Order"                                                  | Only SOs tagged "Bulk Order" returned                                        |
| TC-TAG-01-06 | Remove a doctype tag                   | Open tagged SO → remove "Bulk Order" tag → save                                               | Tag removed; record no longer appears in "Bulk Order" filter                 |
| TC-TAG-01-07 | Tag not inherited by child doc         | Tag QT as "Bulk Order" → convert to SO                                                        | SO created without tag (tag does not auto-carry over unless specified)       |

---

## US-TAG-02: Apply Tag at Item Level

> As a product manager or warehouse admin managing the item master,
> I want to tag items with product attributes (e.g., Poison, Chemical) and goods type (e.g., Manufacturing, Trading),
> so that compliance, logistics, and sales teams can identify and filter regulated or classified products.

### Test Cases

| ID           | Scenario                                      | Steps                                                                                              | Expected Result                                                                      |
| ------------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| TC-TAG-02-01 | Apply hazard attribute tag to item            | Open Item record → find Tag / Product Attribute field → select "Poison" → save                    | "Poison" tag saved on item; visible in item detail view                              |
| TC-TAG-02-02 | Apply multiple attribute tags to item         | Open Item → tag "Cleaner" + "Chemical" → save                                                     | Both tags saved; both visible on item                                                |
| TC-TAG-02-03 | Apply goods type tag to item                  | Open Item → select Goods Type = "Manufacturing" → save                                            | "Manufacturing" goods type tag saved and visible                                     |
| TC-TAG-02-04 | Switch goods type tag                         | Item tagged "Trading" → change to "Manufacturing" → save                                          | Tag updates to "Manufacturing"; old tag removed                                      |
| TC-TAG-02-05 | Filter item list by product attribute tag     | Go to Item list → filter by tag "Poison"                                                          | Only items tagged "Poison" returned                                                  |
| TC-TAG-02-06 | Filter item list by goods type                | Go to Item list → filter Goods Type = "Trading"                                                   | Only items with "Trading" goods type returned                                        |
| TC-TAG-02-07 | Item tag visible in line item (doctype)       | Add a tagged item (e.g., "Poison") to a Quotation line                                            | Product attribute tag visible on line item or item detail panel within the Quotation |
| TC-TAG-02-08 | Remove product attribute tag from item        | Open Item tagged "Nickel" → remove tag → save                                                     | Tag removed; item no longer appears in "Nickel" filter                               |
| TC-TAG-02-09 | Multiple hazard tags coexist                  | Tag item with "Poison" + "Nickel" simultaneously                                                  | Both tags coexist on item without conflict                                           |
| TC-TAG-02-10 | Untagged item excluded from attribute filter  | Item with no tags → filter by "Chemical"                                                          | Untagged item not returned in filtered results                                       |

---

## See Also

- [[01 - MAIA Product/Product Specs/Item Spec]]
- [[04 - QA & Known Issues/Test Cases/Item Historical Pricing & Discount - User Stories & Test Cases]]

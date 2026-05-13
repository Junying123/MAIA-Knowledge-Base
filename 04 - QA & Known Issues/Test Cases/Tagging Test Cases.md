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

## How to Apply Tags

Tags are managed via the **right comment sidebar** on any document:

1. Open the document → click the **comment/right sidebar** panel
2. Under **Tags**, click **Manage**
3. To add an **existing tag**: type to search → click `+` next to the tag name
4. To add a **new tag**: type the new tag name in the input field → click the **Add** (`+`) button

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

---

## Holsen — Product Attribute Tagging (SKU Level)

Based on Holsen SOW: MAIA identifies the classification of every SKU and displays specific instructions to Logistics and Sales.

**Tags in scope:** Trading · Manufacturing · Poison/Hazardous · Commodity

---

#### Test H-TAG-01a — Trading Tag: Tag Visible Under SKU Cell in Order

| Step | What to do                                             | What you should see                                                 |
| ---- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| 1    | Open an Item record and add the **Trading** tag to it. | Item is tagged "Trading".                                           |
| 2    | Create a Sales Order and add this item as a line item. | Under the SKU cell for this item, the **Trading** tag is displayed. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test H-TAG-01b — Trading Tag: Toast Message When Item Added to Order

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Create or open a Sales Order. | Order is open and ready to add items. |
| 2 | Add an item that has the **Trading** attribute tag. | A **toast message** appears notifying the user about the Trading attribute on this item. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test H-TAG-02 — Manufacturing Tag: Production Check Cue to Logistics

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open an Item record tagged **Manufacturing** in the system. | Item detail shows "Manufacturing" goods type tag. |
| 2 | Add this item to a Sales Order. | The order line or DO reflects the goods type as "Manufacturing". |
| 3 | Open the Delivery Note for this SO. | Logistics sees a visual cue: **check with Production** before fulfilling this item. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test H-TAG-04 — Commodity Tag: Manual Price Verification Prompt

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open an Item record tagged **Commodity**. | Item detail shows "Commodity" tag. |
| 2 | Add this item to a Quotation via the chatbot or web app. | MAIA prompts the Sales Agent: **manually verify current market price** before confirming. |
| 3 | Confirm the price after verification and submit the order. | Order proceeds with the manually verified price. No automatic price pulled without prompt. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

## Holsen — Customer Requirements Tagging

Based on Holsen SOW: MAIA looks up the Customer Profile and surfaces client-specific instructions on the order and Delivery Note.

**Tags in scope:** COA Requirement · Labeling & Brand Strictness · Documentation & Copies

---

#### Test H-TAG-05 — COA Standard: Generic COA Surfaced on Order

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a Customer Profile configured with COA requirement = **Standard**. | COA requirement is set to "Standard" (Generic COA). |
| 2 | Create a Sales Order for this customer. | The order or DO surfaces the instruction: **Generic COA required**. |
| 3 | Check the Delivery Note output. | "Standard COA" or "Generic COA" instruction is visible to the logistics/admin team. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test H-TAG-06 — COA Detailed: Full COA Surfaced on Order

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a Customer Profile configured with COA requirement = **Detailed**. | COA requirement is set to "Detailed" (Full COA). |
| 2 | Create a Sales Order for this customer. | The order or DO surfaces the instruction: **Full COA required**. |
| 3 | Check the Delivery Note output. | "Detailed COA" or "Full COA" instruction is clearly visible — distinct from the Standard COA instruction. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test H-TAG-07 — Brand Strictness: NO SUBSTITUTION Enforced

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a Customer Profile configured with brand strictness = **NO SUBSTITUTION**. | Customer profile shows "NO SUBSTITUTION" labeling rule. |
| 2 | Create a Sales Order for this customer with an item that has an alternative brand. | The order or DO displays the label: **"NO SUBSTITUTION"**. |
| 3 | Confirm the Delivery Note reflects the restriction. | Warehouse is clearly instructed: no alternative brand may be picked for this customer. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test H-TAG-08 — Brand Strictness: Preferred Brand Surfaced

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a Customer Profile configured with **PREFERRED BRAND: [Brand Name]**. | Customer profile shows the preferred brand name. |
| 2 | Create a Sales Order for this customer. | The order or DO displays: **"PREFERRED BRAND: [Brand Name]"** on the relevant line item. |
| 3 | Confirm the Delivery Note reflects the preferred brand instruction. | Warehouse sees the specific brand to pick — no guesswork required. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**

---

#### Test H-TAG-09 — Documentation Copies: Invoice Copy Count Requirement

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Open a Customer Profile configured with a documentation requirement (e.g., **"Needs 2 Invoice Copies"**). | Customer profile shows the documentation instruction. |
| 2 | Create a Sales Order and proceed to invoice generation for this customer. | The order or DO surfaces the documentation instruction (e.g., "Print 2 Invoice Copies"). |
| 3 | Check the Delivery Note output. | Admin/Logistics can see the copy count requirement alongside the delivery record. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**
**Notes:**


---

## See Also

- [[01 - MAIA Product/Product Specs/Item Spec]]
- [[03 - Clients/Active Cooking Clients/Holsen/Product/SOW for MAIA Holsen]]
- [[04 - QA & Known Issues/Test Cases/Item Historical Pricing & Discount - User Stories & Test Cases]]

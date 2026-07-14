# Start Here — UAT Input Library
### Macro Frozen (Macrofood) — Phase 1 Core

## How this library works

Most missions in the Field Guide let you choose your own real customer and item data from the test environment — you don't need to wait for the product team to hand you an exact record. This folder supplies **document formats, message-style examples, and the few fixed regression fixtures** where a controlled, unchanging input is genuinely required.

- Mission Cards tell you exactly what your chosen data must satisfy — read the **Input recipe** section of each mission before you start.
- You do not need an exact customer or SKU unless the mission explicitly names one as a **Fixed reference**.
- If you can't find data matching a mission's criteria (no customer with a fixed price, no overdue invoice, etc.), report it as **Blocked — Test Data/Configuration** in the bug tracker — this is not a product bug.
- If a workflow behaves oddly outside the locked scope boundary (see the Field Guide's "NS / Out of Bounds" section), log an **Observation**, not a defect.

## Folder index

```
MAIA_UAT_Input_Library/
├── 00_START_HERE_INPUT_LIBRARY.md
├── 01_Customer_Order_Messages/
├── 02_Price_Update_Templates/
├── 03_Pick_List_Samples/
├── 04_Payment_Slips/
├── 05_Customer_Purchase_Orders/
└── 06_Special_Regression_Fixtures/   # currently NONE — see note below
```

Every folder here traces to at least one active mission in the Field Guide. Nothing is included "just in case."

### 01_Customer_Order_Messages/
**Why it exists:** Missions M-01 and M-02 test how MAIA extracts a draft Sales Order from a WhatsApp/Telegram-style message. Real customer language is informal, sometimes ambiguous, sometimes missing a quantity.
**Used by:** M-01, M-02.
**Minimum pool:** 5–8 sample phrasings — at least one clear order, one with a garbled/informal item name (e.g. "pork belly slight"), one with a missing quantity, and one mixing English/Malay/Chinese.
**You may choose freely:** any real active customer and item from the loaded export; write the message in your own words instead of copying the samples.

### 02_Price_Update_Templates/
**Why it exists:** M-05 tests the bulk price-update flow; M-06 tests what happens when the template is broken (missing columns, invalid SKU, duplicate SKU, negative price).
**Used by:** M-05, M-06.
**Minimum pool:** 1 valid template (~10–30 real SKUs with new prices) + 1 deliberately broken template.
**You may choose freely:** which real SKUs and price changes to include in your own template, if you'd rather build one than use the sample.
**Status:** valid template ready to build from the real item export; broken template still needs to be assembled — see Launch Readiness Checklist §5.

### 03_Pick_List_Samples/
**Why it exists:** A sabotage variant of M-02 tests MAIA's handling of an unreadable/blurry pick-list scan.
**Used by:** M-02 (sabotage bonus only — not required for the core mission).
**Minimum pool:** 1 clean sample, 1 blurry/skewed sample.
**Status:** open, non-blocking — nice to have before the session, not required to run M-02 itself.

### 04_Payment_Slips/
**Why it exists:** M-04 tests AR auto-matching, including the case where the payer's name doesn't match the invoiced customer.
**Used by:** M-04.
**Minimum pool:** 1 clean matching example, 1 payer-name-mismatch example.
**Status:** open — needs preparing before Tuesday, see Launch Readiness Checklist §3 (PA-10).

### 05_Customer_Purchase_Orders/
**Why it exists:** M-18 tests the customer-PO-upload-and-match flow (Scope Lock AS-08) — a low-volume path used by only 3 confirmed customers.
**Used by:** M-18.
**Minimum pool:** 1 real PO, treated as a **fixed fixture** (see below) because this mission's realism depends on knowing what an authentic PO actually looks like, not an invented one.
**Status:** blocking — no real PO sample exists yet. See Launch Readiness Checklist PA-02/PA-03.

### 06_Special_Regression_Fixtures/
**Why it's currently empty:** The one high-stakes regression risk in this account — a false "synced!" when SQL sync actually fails (Boss Fight BF-01) — is an **environment condition**, not a file. It needs to be arranged by the dev team (kill the sync connection, point at a dead endpoint) rather than supplied as a document.
**Used by:** BF-01.
**Status:** blocking — see Launch Readiness Checklist PA-04.

## Input category guide

| Input category | Folder | Used by mission(s) | Minimum sample types | How testers choose |
|-|-|-|-|-|
| Customer order messages | `01_Customer_Order_Messages/` | M-01, M-02 | Clear / ambiguous-item / no-qty / mixed-language | Free choice of customer + item, own wording |
| Price update templates | `02_Price_Update_Templates/` | M-05, M-06 | Valid template / broken template | Free choice of SKUs and price changes |
| Pick-list samples | `03_Pick_List_Samples/` | M-02 (sabotage) | Clean scan / blurry scan | N/A — reference samples only |
| Payment slips | `04_Payment_Slips/` | M-04 | Clean match / payer-mismatch | Free choice of which invoice to match |
| Customer POs | `05_Customer_Purchase_Orders/` | M-18 | 1 real PO (fixed) | N/A for the fixed sample; free choice for improvised variants once the format is known |
| Special regression fixtures | `06_Special_Regression_Fixtures/` | BF-01 | NONE (environment condition) | N/A |

## Fixed fixtures

| Fixture ID | Filename | Used by | Rule |
|-|-|-|-|
| FIX-01 | `sample_po_[customer]_2026-07.pdf` | M-18 | Not yet supplied — blocking, see Launch Readiness Checklist §6 |

## Folder rules

- Do not rename fixed fixtures after the Field Guide is generated.
- Do not overwrite originals — create copies before cropping, blurring, or annotating.
- Use the client's real (already-shared) master data for customers/items; use synthetic data only where a fixture requires deliberately broken or ambiguous content.
- Keep tester evidence (screenshots, logs) outside this input library — it belongs in the bug tracker.
- Do not create mission-specific subfolders beyond the six listed above.

## See Also
- [[MAIA_UAT_Launch_Readiness_Checklist]]
- [[MAIA_UAT_Field_Guide_Play_It_Like_A_User]]

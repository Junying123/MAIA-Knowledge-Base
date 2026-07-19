# Start Here — UAT Input Library

## How this library works

- Most Dalson missions let you choose your own customer, item, and order straight from your UAT account — you don't wait for someone to hand you an exact record.
- This folder only supplies the things that genuinely need to be reusable or synthetic: Purchase Order format/clarity samples, POD photo samples, and a new-customer/item field example.
- Every Mission Card in the Field Guide tells you exactly what your chosen data must satisfy — check that before you start.
- You do not need an exact customer or SKU unless a Mission Card explicitly names one (none currently do).
- Missing reusable samples in this folder → report to the UAT owner.
- Missing test-account data (e.g. you can't find a non-tracked SKU) → mark **Blocked — Test Data/Configuration**, not a product defect.
- Something behaving oddly in an area flagged as **NS** or **Out of Bounds** in the Field Guide (Section 4) → log an **Observation**, not a bug.

## Folder index

```
Dalson_UAT_Input_Library/
├── 00_START_HERE_INPUT_LIBRARY.md
├── 01_Purchase_Order_Samples/
├── 02_POD_Photos/
└── 03_New_Customer_Item_Examples/
```

Only 3 folders — Dalson's evidence base (12 locked scope items, most testable directly from existing UAT-account data) doesn't call for more. No fixed regression fixtures are required for this cycle (see the Launch Readiness Checklist, Section 6), so there's no dedicated fixtures folder.

### 01_Purchase_Order_Samples/

- **Why it exists:** Dalson's #1 named pain point is customer PO wording not matching internal SKU names — testers need format/clarity variety to exercise this realistically, not a specific customer's real PO.
- **Used by:** Mission M-02, Boss Fight BF-01, Boss Fight BF-02.
- **Minimum reusable pool:** 3–5 samples covering a clean/readable PO, a blurry or cropped one, and a garbled/incomplete one.
- **Testers choose freely:** which customer and item the PO is "for" (pick any active ones from your UAT account); the exact wording you use.
- **Product team prepares:** 2–3 illustrative reference samples showing the range of clarity/format testers should expect to encounter — these are tone references, not scripts to copy verbatim.

### 02_POD_Photos/

- **Why it exists:** Mission M-05 needs a delivery photo to attach as proof of delivery; the real driver identity isn't confirmed yet, so this can't come from a live delivery.
- **Used by:** Mission M-05.
- **Minimum reusable pool:** 1–2 synthetic delivery photos.
- **Testers choose freely:** which order to attach the photo to.
- **Product team prepares:** the sample photo(s) themselves — any generic, non-identifying delivery-style image works.

### 03_New_Customer_Item_Examples/

- **Why it exists:** Mission M-10 (chatbot-based customer/item creation) needs testers to invent plausible new records — a field-layout example prevents testers from guessing at what "complete" looks like.
- **Used by:** Mission M-10.
- **Minimum reusable pool:** 1–2 example field layouts (what a complete new-customer entry and a complete new-item entry look like).
- **Testers choose freely:** the actual name/values they invent for their test customer/item.
- **Product team prepares:** the example layout only, not real data.

## Input category guide

| Input category | Folder | Used by mission(s) | Minimum sample types | How testers choose |
|---|---|---|---|---|
| Purchase Orders | `01_Purchase_Order_Samples/` | M-02, BF-01, BF-02 | Clean, blurry/cropped, garbled | Pick clarity level needed for the test; invent customer/item/wording |
| POD photos | `02_POD_Photos/` | M-05 | 1–2 synthetic photos | Attach to any order you're testing |
| New customer/item examples | `03_New_Customer_Item_Examples/` | M-10 | 1–2 field-layout examples | Invent your own values following the layout |

## Fixed fixtures

**NONE.**

## Folder rules

- Do not rename fixed fixtures after the Field Guide is generated — not applicable this cycle (none exist), but keep this rule in mind if one is added later.
- Do not overwrite originals in this folder.
- Create copies before cropping, blurring, annotating, or editing any sample.
- Use synthetic or sanitised data only — no real Dalson customer information.
- Keep tester evidence outputs (screenshots, logs) outside this library, in the bug/XP tracker instead.
- Do not create mission-specific subfolders beyond the three above.

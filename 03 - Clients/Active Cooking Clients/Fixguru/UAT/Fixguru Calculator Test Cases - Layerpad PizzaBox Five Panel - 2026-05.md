# Fixguru Calculator Test Cases - Layerpad, PizzaBox, Five Panel

## Calculator Definitions

| Calculator | Definition | Core Inputs | Core Outputs / Risks |
| --- | --- | --- | --- |
| Layerpad | Flat diecut-style pad calculator based on open size and diecut layout. | Open Size, board recipe, quantity, diecut ups, paper width up, printing, transport, sell price. | LM, sheetboard price, mould charges, recommended price, min selling price, transport/pc. Key risk: paper width / ups behavior and min-selling-price boundary. |
| PizzaBox | Folded diecut carton calculator based on external/internal dimensions and cut/fold geometry. | External/Internal dimensions, open size, board recipe, quantity, cut length, fold length, diecut ups, printing, transport, sell price. | LM, sheetboard price, diecut mould charges, recommended price, ready stock guidance, transport/pc. Key risk: ready stock behavior and actual paper width constraint. |
| Five Panel | Large-format folded carton calculator with very large open size and added workmanship impact. | Box size, open size, board recipe, quantity, diecut ups, paper width up, printing, workmanship, transport, sell price. | LM, sheetboard price, workmanship, recommended price, margin, transport/pc. Key risk: oversized paper width, blank mould outputs, severe negative margin. |

## Pattern Used

| Rule | Applied Pattern |
| --- | --- |
| Case count | 15 test cases per calculator |
| Style | Hybrid: RSC-style formula coverage with short Diecut-style issue notes |
| Expected results | Exact numeric expectations where workbook values are stable; behavior expectations where workbook formulas are incomplete or inconsistent |
| Test types | Normal, Boundary, Negative |
| Remarks | Preserve workbook gaps or risks instead of hiding them |

## Layerpad Test Cases

| TEST CASE ID | TEST SCENARIO | TEST TYPE | INPUT: Open L (mm) | INPUT: Open W (mm) | INPUT: Height | INPUT: Quality | INPUT: Outer gsm | INPUT: Medium gsm | INPUT: Inner gsm | INPUT: Qty | INPUT: DC Length Up | INPUT: DC Width Up | INPUT: Paper Width Up | INPUT: Printing | INPUT: Colors | INPUT: Transport | INPUT: Sell Price (RM) | EXPECTED RESULT | PASS/FAIL | REMARKS / ISSUE NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LP-01 | Baseline happy path from workbook | Normal | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | N | 1.25 | Open Size stays 1127 x 616; LM = 301; Actual Paper Width = 1.85 m; Sheetboard Price = 1.10; Recommended Price (With SST) = 1.184241421; Min Selling Price = 1.15; Mould Charges = 147.8625759; Transport/pc = 0.10. |  | Baseline exact-value case. |
| LP-02 | Smaller size variant | Normal | 900 | 500 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 2 | N | 0 | N | 1.15 | Open size-driven outputs should reduce versus LP-01: lower area of paper, lower mould charges, lower LM or similar LM band, and lower recommended price. |  | Use behavior expectation because workbook does not expose a second stable reference row. |
| LP-03 | Larger size variant | Normal | 1350 | 700 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | N | 1.45 | Larger open size should increase area of paper, mould charges, and recommended price versus LP-01. |  | Confirms size sensitivity. |
| LP-04 | Alternate valid board quality | Normal | 1127 | 616 | 3 | AF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | N | 1.25 | AF should be accepted; board lookup and paper-weight-related outputs should recalculate using AF logic instead of BF logic. |  | Exact values are not surfaced for AF in the sampled sheet state. |
| LP-05 | High GSM / heavier board | Normal | 1127 | 616 | 3 | BF | 250 | 180 | 180 | 800 | 1 | 1 | 3 | N | 0 | N | 1.60 | Heavier GSM should increase sheetboard price, paper weight, and recommended price versus LP-01. |  | Validates higher board-cost path. |
| LP-06 | Printing off baseline | Normal | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | N | 1.25 | Printing block charges remain 0 and no print-driven cost is added. |  | Mirrors workbook baseline. |
| LP-07 | Printing on with 1 color | Normal | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | Y | 1 | N | 1.30 | Printing cost should be added above LP-06; pricing and gross profit should update without transport impact. |  | Printing size conversion is shown in workbook; numeric outcome may vary by entered print size. |
| LP-08 | Printing on with max allowed colors | Boundary | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | Y | 4 | N | 1.45 | 4 colors should be accepted as max; printing cost should be higher than LP-07 with no validation failure. |  | Checks max color boundary. |
| LP-09 | Transport off | Normal | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | N | 1.25 | No transport cost should be included; all other outputs should remain valid. |  | Compare against LP-10. |
| LP-10 | Transport on | Normal | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | Y | 1.25 | Transport/pc should be added and total cost should be higher than LP-09. |  | Workbook LM sheet shows Total Transport/pc = 0.10 for current baseline setup. |
| LP-11 | Low quantity boundary | Boundary | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 100 | 1 | 1 | 3 | N | 0 | N | 1.40 | Low quantity should worsen per-piece setup impact and may fail to meet LM guide comfortably. |  | Validates small-order economics. |
| LP-12 | High quantity boundary | Boundary | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 5000 | 1 | 1 | 3 | N | 0 | N | 1.20 | LM should increase materially; per-piece setup impact should improve versus LP-11. |  | Checks scale effect. |
| LP-13 | Sell price below cost / negative margin | Negative | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | N | 0.95 | Margin and profit should turn negative or fall below allowed threshold. |  | Use visual cue or error if product UI supports it. |
| LP-14 | Sell price at min selling threshold | Boundary | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 3 | N | 0 | N | 1.15 | Min Selling Price boundary should be accepted; pricing should not go below the shown minimum threshold. |  | Exact workbook threshold = 1.15. |
| LP-15 | Paper width / ups constraint path | Negative | 1127 | 616 | 3 | BF | 150 | 120 | 150 | 800 | 1 | 1 | 4 | N | 0 | N | 1.25 | If Paper Width Up pushes Actual Paper Width beyond supported range, calculator should warn or reject non-producible layout. |  | Primary calculator-specific failure path. |

## PizzaBox Test Cases

| TEST CASE ID | TEST SCENARIO | TEST TYPE | INPUT: External L (mm) | INPUT: External W (mm) | INPUT: External H (mm) | INPUT: Quality | INPUT: Outer gsm | INPUT: Medium gsm | INPUT: Inner gsm | INPUT: Qty | INPUT: Total Cut Length (mm) | INPUT: Total Fold Length (mm) | INPUT: DC Length Up | INPUT: DC Width Up | INPUT: Paper Width Up | INPUT: Printing | INPUT: Colors | INPUT: Transport | INPUT: Sell Price (RM) | EXPECTED RESULT | PASS/FAIL | REMARKS / ISSUE NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PZ-01 | Baseline happy path from workbook | Normal | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 1.85 | Internal Size = 467 x 347 x 50; Open Size = 880 x 730; LM = 104; Sheetboard Price = 1.10; Recommended Price (With SST) = 1.3431922355; Mould Charges = 587.8405061005; Transport/pc = 0.2285714286. |  | Baseline exact-value case. |
| PZ-02 | Smaller size variant | Normal | 300 | 220 | 52 | BF | 150 | 120 | 150 | 350 | derived from code table | derived from code table | 1 | 1 | 2 | N | 0 | N | 1.30 | Smaller size should reduce open size, mould charges, and recommended price versus PZ-01. |  | Can use code-table dimensions as source reference. |
| PZ-03 | Larger size variant | Normal | 635 | 500 | 80 | BF | 150 | 120 | 150 | 350 | derived | derived | 1 | 1 | 3 | N | 0 | N | 2.20 | Larger size should increase open size, cut/fold burden, mould charges, and recommended price versus PZ-01. |  | Confirms size sensitivity. |
| PZ-04 | Alternate valid board quality | Normal | 470 | 350 | 60 | AF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 1.85 | AF should be accepted and recalculate board-related cost outputs. |  | Behavior expectation only. |
| PZ-05 | High GSM / heavier board | Normal | 470 | 350 | 60 | BF | 250 | 180 | 180 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 2.20 | Higher GSM should increase sheetboard price and recommended price above PZ-01. |  | Validates heavy board path. |
| PZ-06 | Printing off baseline | Normal | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 1.85 | Printing block remains 0 and no print cost is added. |  | Mirrors workbook baseline. |
| PZ-07 | Printing on with 1 color | Normal | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | Y | 1 | N | 1.95 | Total printing and price should increase versus PZ-06. |  | Printing sheet is present and should drive cost. |
| PZ-08 | Printing on with max allowed colors | Boundary | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | Y | 4 | N | 2.10 | 4-color input should be accepted and costed without validation failure. |  | Max color boundary case. |
| PZ-09 | Transport off | Normal | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 1.85 | Transport cost excluded; other outputs remain valid. |  | Compare against PZ-10. |
| PZ-10 | Transport on | Normal | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | Y | 1.85 | Transport/pc should be added and total cost should be higher than PZ-09. |  | Exact workbook baseline transport/pc = 0.2285714286. |
| PZ-11 | Low quantity boundary | Boundary | 470 | 350 | 60 | BF | 150 | 120 | 150 | 100 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 2.10 | Lower quantity should increase setup cost per piece and worsen pricing efficiency. |  | Validates small-order economics. |
| PZ-12 | High quantity boundary | Boundary | 470 | 350 | 60 | BF | 150 | 120 | 150 | 5000 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 1.45 | Higher quantity should improve per-piece economics and increase LM materially versus PZ-11. |  | Checks volume scaling. |
| PZ-13 | Sell price below cost / negative margin | Negative | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 1.00 | Margin and profit should become negative or breach minimum allowed pricing. |  | Negative margin path. |
| PZ-14 | Sell price at min selling threshold | Boundary | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 3 | N | 0 | N | 1.57 | Boundary at Min Selling Price should be accepted if validator allows exact-threshold pricing. |  | Exact workbook threshold = 1.57. |
| PZ-15 | Ready stock / actual paper width constraint path | Negative | 470 | 350 | 60 | BF | 150 | 120 | 150 | 350 | 6334 | 5018 | 1 | 1 | 4 | N | 0 | N | 1.85 | If Actual Paper Width exceeds supported range or layout is marked Not Ready Stock, calculator should warn or reject the configuration. |  | Primary calculator-specific failure path. |

## Five Panel Test Cases

| TEST CASE ID | TEST SCENARIO | TEST TYPE | INPUT: Box L (mm) | INPUT: Box W (mm) | INPUT: Box H (mm) | INPUT: Quality | INPUT: Outer gsm | INPUT: Medium gsm | INPUT: Inner gsm | INPUT: Qty | INPUT: DC Length Up | INPUT: DC Width Up | INPUT: Paper Width Up | INPUT: Printing | INPUT: Colors | INPUT: Transport | INPUT: Sell Price (RM) | EXPECTED RESULT | PASS/FAIL | REMARKS / ISSUE NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| FP-01 | Baseline workbook state / oversize case | Normal | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 2.07 | Open Size = 2109 x 2517; LM = 1062; Actual Paper Width = 5.1 m; Sheetboard Price (With SST) = 6.553602; Added Workmanship = 6.953602; Recommended Price (With SST) = 8.8020538462. |  | Baseline workbook itself already shows severe pricing gap and oversize width risk. |
| FP-02 | Smaller size variant | Normal | 400 | 120 | 400 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 1 | N | 0 | Y | 3.50 | Smaller size should reduce open size, area, and recommended price versus FP-01. |  | Behavior expectation only. |
| FP-03 | Larger size variant | Normal | 800 | 200 | 900 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 2.50 | Larger size should further increase paper demand and pricing pressure beyond FP-01. |  | Confirms large-format scaling. |
| FP-04 | Alternate valid board quality | Normal | 635 | 153 | 737 | BF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 2.50 | BF should be accepted and board-related outputs should recalculate accordingly. |  | Validates quality switching. |
| FP-05 | High GSM / heavier board | Normal | 635 | 153 | 737 | AF | 250 | 180 | 180 | 1000 | 1 | 1 | 2 | N | 0 | Y | 4.20 | Higher GSM should materially increase sheetboard price and recommended price above FP-01. |  | Heavy-board path for large format. |
| FP-06 | Printing off baseline | Normal | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 2.07 | Printing Block Charges stay 0 and no print-driven cost should be added. |  | Mirrors workbook state. |
| FP-07 | Printing on with 1 color | Normal | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | Y | 1 | Y | 2.50 | Printing cost should be added on top of board, workmanship, and transport cost. |  | Large printing area may produce meaningful cost jump. |
| FP-08 | Printing on with max allowed colors | Boundary | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | Y | 4 | Y | 3.00 | 4 colors should be accepted as maximum; total printing and recommended price should rise further. |  | Max color boundary. |
| FP-09 | Transport off | Normal | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | N | 2.07 | Removing transport should reduce total cost relative to FP-10. |  | Compare against transport-on case. |
| FP-10 | Transport on | Normal | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 2.07 | Transport/pc should be included; workbook LM sheet shows current Total Transport/pc = 0.152. |  | Exact transport/pc exposed in workbook. |
| FP-11 | Low quantity boundary | Boundary | 635 | 153 | 737 | AF | 150 | 120 | 150 | 100 | 1 | 1 | 2 | N | 0 | Y | 5.00 | Lower quantity should worsen per-piece setup and workmanship economics. |  | Small-order boundary. |
| FP-12 | High quantity boundary | Boundary | 635 | 153 | 737 | AF | 150 | 120 | 150 | 5000 | 1 | 1 | 2 | N | 0 | Y | 2.50 | Higher quantity should improve per-piece setup efficiency but still remain sensitive to high board usage. |  | High-volume check. |
| FP-13 | Sell price far below cost / severe negative margin | Negative | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 2.07 | Gross Margin remains negative and Gross Profit Total remains heavily negative, matching workbook risk pattern. |  | Workbook baseline already shows negative margin at current sell price. |
| FP-14 | Sell price at min selling threshold | Boundary | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 9.09 | Min Selling Price boundary should be accepted if exact-threshold pricing is allowed. |  | Exact workbook threshold = 9.09. |
| FP-15 | Oversized paper width / blank mould output failure path | Negative | 635 | 153 | 737 | AF | 150 | 120 | 150 | 1000 | 1 | 1 | 2 | N | 0 | Y | 9.09 | If Actual Paper Width remains above machine limit or mould total stays blank, calculator should flag the configuration as non-producible or incomplete. |  | Primary calculator-specific failure path; workbook currently shows Actual Paper Width = 5.1 m and blank TOTAL MOULD. |

## Notes

| Topic | Note |
| --- | --- |
| Numeric expectations | Only locked where the workbook visibly exposes stable values in the fetched sheet state. |
| Duplicate avoidance | Cases were kept to unique formula branches, boundaries, or validation paths only. |
| Workbook gaps kept visible | Known issues such as oversize paper width, blank mould total, pricing inconsistency, and negative margin are intentionally preserved in remarks. |

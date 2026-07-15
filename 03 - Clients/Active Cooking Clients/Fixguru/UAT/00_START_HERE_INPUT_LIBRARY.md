---
owner: Gareth
status: draft
last_reviewed: 2026-07-15
client: Fixguru
document_type: internal
version: v1
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/EIflwflZOiSAijk2nrGl8cDogSg
---

# Start Here — UAT Input Library
### (Fixguru / IAM Worldwide Sdn Bhd)

> Generated via "UAT Infopack — Generator Prompt (v3.5)" (Lark: `WtVWwIaP9i49pQktx7Nl3SMagSh`). Pairs with **[[UAT/Fixguru — UAT Launch Readiness Checklist]]** and **[[UAT/Fixguru — UAT Field Guide (Infopack v1)]]**.

## How this library works

- Most missions let you choose your own real business data from your UAT account — you do not wait for someone to hand you a customer or item.
- This folder only supplies two things: realistic order-message examples to imitate (not copy), and a small set of fixed regression fixtures where the exact data matters.
- Every Mission Card in the Field Guide states the criteria your chosen data must satisfy — read that before picking a customer/item.
- If you can't find data matching a mission's criteria, tell the UAT owner (Gareth) — that's a **Blocked — Test Data/Configuration** issue, not a bug.
- If something is genuinely out of scope, don't log it as a bug — see the Field Guide's "Out of Bounds" section first.

## Folder index

```
Fixguru_UAT_Input_Library/
├── 00_START_HERE_INPUT_LIBRARY.md
├── 01_Customer_Order_Messages/
└── 02_Fixed_Regression_Fixtures/
```

Only two folders exist because Fixguru's VoC, Scope Lock, and UAT checklist evidence only two real input types this phase: WhatsApp order messages (text) and a small set of fixed pricing/delivery records that must stay reproducible. There's no PO-photo, scanned-document, or upload flow in scope for Fixguru — don't invent one.

## Input category guide

| Input category | Folder | Used by mission(s) | Minimum sample types | How testers choose |
|---|---|---|---|---|
| Customer order messages | `01_Customer_Order_Messages/` | M-01, M-06, M-18, Chaos Cards | 6–8 examples spanning English, Bahasa Malaysia, and Mandarin phrasing, plus shorthand item-code style and multi-item single-message format | Read the examples for register/tone, then write your own version in your own words — never copy-paste |
| Fixed regression fixtures | `02_Fixed_Regression_Fixtures/` | M-03, M-04, M-07, M-12, Boss Fight BF-01 | 5 named customer+item pairs (see below) | Use exactly the named record — do not substitute a different customer/item for these specific missions |

### 01_Customer_Order_Messages — why this folder exists

Fixguru's sales team receives orders as WhatsApp shorthand, mixed-language, sometimes item-name-mangled messages (per VoC VOC-028 and the account's own real order format: *"011-xxxx — G3 100, G1 300, PM72 500"*). Testers need to see that register once, then improvise — not copy sanitised QA sentences. Product team prepares: 6–8 short example messages covering the mix above. Testers may pick any active customer/item combination to build their own version of the message.

### 02_Fixed_Regression_Fixtures — why this folder exists

Five real customer+item pairs exist in the AutoCount sandbox where the exact price/discount history matters — invented data would not prove the same thing:

| Fixture ID | Record | What it proves |
|---|---|---|
| FX-01 | `300-S0048` SEA LARK SOLUTION LIMITED + `BW 1mx100m (SL Clear) 4.5kg` | 10 real invoices, genuine price drift (41 → 49.8 → 47) — the exact one-glance pricing decision that's failed sign-off 4 times |
| FX-02 | SEA LARK SOLUTION LIMITED + `PM72` | Genuine zero-history pair — proves "not found" is never fabricated |
| FX-03 | FLYBEAR SDN BHD + `AWB-350` or `A3B` | Genuine thin-history pair (exactly 1 invoice) — proves no padding/error on sparse data |
| FX-04 | BOOKXCESS SDN BHD + `BW 0.5mx100m (SL Clear)` | Genuine discount-drift (5% / 5% / 10% across 3 invoices, standard RM27.70) — proves % capture is correct, not RM-flat misapplied |
| FX-05 | Delivery-charge SKUs `3PL DC`, `IAM DC` | Real AutoCount charge-master codes — proves delivery-charge SKU list isn't invented |

Product team prepares: confirms these 5 records still exist unmodified in the sandbox before each test round (source: `pricing_history.csv`, verified 14 Jul 2026). Testers choose nothing here — use the named record exactly as listed.

## Fixed fixtures

| Fixture ID | Filename/record | Used by | Rule |
|---|---|---|---|
| FX-01 | Sea Lark + BW 1mx100m (SL Clear) | M-03, BF-01 | Never write additional invoices against this pair during testing |
| FX-02 | Sea Lark + PM72 | M-04 | Never create a first invoice against this pair — it must stay zero-history |
| FX-03 | Flybear + AWB-350 / A3B | M-04 | Never write a second invoice against these — must stay thin-history |
| FX-04 | Bookxcess + BW 0.5mx100m (SL Clear) | M-07 | Never write additional invoices against this pair |
| FX-05 | 3PL DC / IAM DC | M-12 | Reference only — do not edit the charge master |

## Folder rules

- Do not rename fixed fixtures after the Field Guide is generated.
- Do not overwrite the original AutoCount sandbox records for FX-01–05.
- Testers do not need to create files for this input type — the fixtures are live sandbox records, not documents.
- Use synthetic/sanitised data only when writing new order-message examples for `01_Customer_Order_Messages/`.
- Keep tester evidence outputs (screenshots, logs) outside this input library.
- Do not create mission-specific subfolders — every mission maps to one of the two folders above.

## See Also

- [[UAT/Fixguru — UAT Launch Readiness Checklist]]
- [[UAT/Fixguru — UAT Field Guide (Infopack v1)]]
- [[Fixguru — VoC Extraction]]

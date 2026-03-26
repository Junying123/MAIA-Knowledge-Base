---
owner: Gareth
status: approved
last_reviewed: 2026-03-04
source_file: holsen_product_taxonomy.yaml
---

# Holsen Product Taxonomy

Holsen's client-specific product taxonomy defining how their catalog is categorised within MAIA. This drives UI item filtering, chatbot product search, and analytics.

> [!info] What is a Client Taxonomy?
> Each MAIA client has their own product taxonomy — a structured classification of their catalog that defines category hierarchy, attributes, data types, and allowed values. The taxonomy feeds both the frontend item browser and the chatbot's product search/filtering behaviour.

---

## Purpose

- Categorise Holsen's product catalog for MAIA's OMS
- Define attributes and valid values per product category
- Enable chatbot to filter, search, and suggest products by category, class, and property
- Provide consistent data structure for analytics and reporting

**Domain:** Industrial chemicals, surface treatment, and electroplating supplies

---

## Category Hierarchy

```
Products (Level 0)
└── Holsen Catalog (Level 1)
    ├── Industrial Chemicals (Level 2)
    │   ├── Acids
    │   ├── Alkalis and Bases
    │   ├── Cleaners and Maintenance
    │   ├── Cyanides
    │   ├── Lab Reagents and Indicators
    │   ├── Process Chemicals and Additives
    │   └── Salts and Inorganics
    ├── Surface Treatment and Plating (Level 2)
    │   ├── Plating Chemistry - Chromium
    │   ├── Plating Metals and Anodes
    │   ├── Plating Salts - Copper
    │   └── Plating Salts - Nickel
    ├── Consumables (Level 2)
    │   └── Filter Cartridges
    └── Abrasives and Polishing (Level 2)
        └── Abrasives and Polishing Media
```

**Total:** 19 item groups across 4 levels (4 Level-2 categories, 13 Level-3 subcategories)

---

## Category Reference

### Level 2 Categories

| Category | Level-3 Subcategories | Description |
|----------|-----------------------|-------------|
| Industrial Chemicals | Acids, Alkalis and Bases, Cleaners and Maintenance, Cyanides, Lab Reagents and Indicators, Process Chemicals and Additives, Salts and Inorganics | Core chemical inputs for industrial processes |
| Surface Treatment and Plating | Plating Chemistry - Chromium, Plating Metals and Anodes, Plating Salts - Copper, Plating Salts - Nickel | Electroplating and surface finishing materials |
| Consumables | Filter Cartridges | Operational supplies |
| Abrasives and Polishing | Abrasives and Polishing Media | Surface preparation materials |

---

## Attribute Reference

All categories share the **same 9 attributes** across every level. Attributes are grouped into 4 sections.

### Section 0 — Identification

| Attribute | Type | Required | Constraint | Notes |
|-----------|------|----------|------------|-------|
| `product_code` | Text | ✅ Yes | Max 50 chars | Client-provided SKU |
| `product_name` | Text | ✅ Yes | Max 200 chars | Client-provided product name |

### Section 1 — Packaging

| Attribute | Type | Required | Constraint | Notes |
|-----------|------|----------|------------|-------|
| `packing_size` | Float | ✅ Yes | 0.0 – 100,000.0 (step 0.1) | Numeric pack size from client list |
| `unit_of_measure` | Enum | ✅ Yes | Default: `BTL` | See [[#Unit of Measure Values]] |

### Section 2 — Classification

| Attribute | Type | Required | Constraint | Notes |
|-----------|------|----------|------------|-------|
| `client_class` | Enum | ❌ No | Default: `Misc` | Client's own classification code — see [[#Client Class Values]] |
| `series` | Text | ❌ No | Max 50 chars | Brand/series token extracted from product name |
| `micron_rating` | Float | ❌ No | 0.0 – 10,000.0 (step 0.1) | Micron value extracted from product name (filtration products) |
| `metal_form` | Text | ❌ No | Max 50 chars | Shape/form extracted from name (e.g. Cathode, Plate, Ball) |

### Section 3 — Others

| Attribute | Type | Required | Constraint | Notes |
|-----------|------|----------|------------|-------|
| `notes` | Text | ❌ No | Max 250 chars | Free-form notes field |

---

## Enum Reference

### Unit of Measure Values

| Value | Meaning |
|-------|---------|
| `BTL` | Bottle (default) |
| `KG` | Kilogram |
| `L` | Litre |
| `OZ` | Ounce |
| `PC` | Piece |
| `PCS` | Pieces |

### Client Class Values

Holsen uses chemical/electroplating class codes. Default: `Misc`.

| Value | Likely Meaning |
|-------|----------------|
| `Anod` | Anodising chemicals |
| `CA` | Citric Acid or Chromic Acid |
| `Cleaner (M)` | Metal cleaner |
| `Copper` | Copper plating |
| `Copper (M)` | Copper metal stock |
| `CuCN` | Copper Cyanide |
| `CuSO` | Copper Sulphate |
| `Int.` | Intermediate chemical |
| `KCN` | Potassium Cyanide |
| `Krom` | Chromium plating |
| `Misc` | Miscellaneous (default) |
| `NICL` | Nickel Chloride |
| `NaCN` | Sodium Cyanide |
| `Ni. Chloride` | Nickel Chloride solution |
| `Ni. Sulfamate` | Nickel Sulfamate solution |
| `Ni. Sulphate` | Nickel Sulphate solution |
| `Nickel` | Nickel plating chemical |
| `Nickel (M)` | Nickel metal stock |
| `Poison` | Hazardous / controlled substance |
| `Tin` | Tin plating chemical |
| `Tin (M)` | Tin metal stock |
| `Zinc` | Zinc plating chemical |
| `Zinc (M)` | Zinc metal stock |

> [!warning] Hazard Class
> Products tagged `Poison` under `client_class` require special handling in order processing and delivery notes. Confirm with Holsen whether MAIA needs to surface hazard warnings for these items.

---

## Data Types Reference

| Type | Description | Usage in This Taxonomy |
|------|-------------|------------------------|
| `Text` | Free-form string with max character limit | Product Code, Product Name, Series, Metal Form, Notes |
| `Float` | Decimal number with min/max range and step | Packing Size, Micron Rating |
| `Enum` | Single selection from predefined list | Unit of Measure, Client Class |
| `Integer` | Whole number (defined but not used in this taxonomy) | — |
| `Boolean` | True/false (defined but not used in this taxonomy) | — |
| `Range` | Numeric range (defined but not used in this taxonomy) | — |
| `List` | Multi-select (defined but not used in this taxonomy) | — |
| `URL` | Web link (defined but not used in this taxonomy) | — |

---

## Key Notes for PMs

### Flat Attribute Model
Despite having 4 levels of category hierarchy, all levels share **identical attributes**. Product differentiation happens through:
- Which `item_group` (category) the product belongs to
- The `client_class` enum value
- Extracted properties (`series`, `micron_rating`, `metal_form`)

This simplifies data entry but means MAIA cannot enforce category-specific required fields (e.g., requiring `micron_rating` only for Filter Cartridges).

### Chatbot Behaviour
The taxonomy informs how the chatbot handles product queries for Holsen:
- Category-based filtering: "Show me all Nickel plating chemicals" → filters by `item_group` + `client_class`
- Unit-aware ordering: "Order 50 KG of [product]" → validates against `unit_of_measure` enum
- Property-based search: "Find 5 micron filter cartridges" → filters by `micron_rating`

> [!note] Chatbot Hints Not Yet Defined
> The taxonomy file does not yet include explicit `chatbot_hints` or `search_hints` fields. These may need to be defined in a future taxonomy revision to improve chatbot precision.

### Extracted Properties
`series`, `micron_rating`, and `metal_form` are parsed from the product name string rather than entered as separate fields. Ensure the data import pipeline extracts these correctly during onboarding.

---

## Alignment Analysis (YAML × Product List × This Doc)

> [!check] Cross-check performed: 2026-03-04 against `Product List - Holsen.xlsx` (201 SKUs)

### ✅ What Aligns

| Check | Result |
|-------|--------|
| All 6 UoM values in product list (`BTL`, `KG`, `L`, `OZ`, `PC`, `PCS`) | Covered by `unit_of_measure` enum ✅ |
| All 23 CLASS values in product list | Covered by `client_class` enum ✅ |
| Category hierarchy in YAML vs this MD | Fully in sync ✅ |
| Attribute definitions (9 attributes, 4 sections) | Fully in sync ✅ |

---

### ❌ Missing Subcategories (Taxonomy Gaps vs Product List)

The following `client_class` groups have significant product volume but **no dedicated Level-3 subcategory** in the taxonomy:

| Missing Subcategory | Affected Class | Affected Products (count) | Example Products |
|---------------------|---------------|--------------------------|-----------------|
| Plating Salts - Zinc | `Zinc (M)` | 33 | Ekozin series, Zenite series, Zepro series, Zinlite 2000A, Zinc Mist CF-2 |
| Plating Salts - Tin | `Tin (M)` | 2 | Asitin TS Brightener, Asitin TS MU |
| Anodising Chemicals | `Anod` | 5 | HAL 204 Etch Fume Suppressant, HAL S-23, HAL Anti-Precipitation Agent |
| Intermediates / Special | `Int.` | 2 | G70P, HP 499 |

> [!warning] Largest Gap
> **Zinc (M)** is the 2nd largest class by volume (33 SKUs, tied with Misc) — all manufactured products. They currently have no home in `Surface Treatment and Plating`, despite being analogous to the existing Copper and Nickel plating salt subcategories.

---

### ⚠️ Ambiguous Product-to-Subcategory Mappings

These products could reasonably belong to more than one subcategory — the taxonomy does not define placement rules:

| Product(s) | Class | Ambiguity |
|------------|-------|-----------|
| COPPER SULPHATE MANICA / MITSUBISHI / SUMITOMO | `CuSO` | **Salts and Inorganics** vs **Plating Salts - Copper** |
| CHROMIC ACID BROCHEM / ELEMENTIS | `CA` | **Acids** (Industrial Chemicals) vs **Plating Chemistry - Chromium** |
| COPPER CYANIDE | `CuCN` | **Cyanides** vs **Plating Salts - Copper** |
| NICKEL CHLORIDE SIBANYE | `NICL` | **Salts and Inorganics** vs **Plating Salts - Nickel** (inconsistent class vs NICKEL CHLORIDE SUMITOMO/ZENITH which use `Ni. Chloride`) |
| BRASS SHEET (14×48") 8 OZ & 10 OZ | `Misc` | Logically belongs in **Plating Metals and Anodes** but classified as Misc |
| COPPER PYROPHOSPHATE | `Misc` | Logically fits **Plating Salts - Copper** or **Salts and Inorganics** |

---

### ⚠️ Attribute Gap: Product TYPE Not Captured

The product list has a `TYPE` column distinguishing **Trading** (94 SKUs) vs **Mfg / Manufacturing** (107 SKUs). This field is **not an attribute in the taxonomy**. Confirm with the team whether MAIA needs to capture this distinction (e.g., for supplier workflows or pricing logic).

---

### 📋 Documentation Fix Applied

- **Count corrected:** MD previously stated "12 Level-3 subcategories" — corrected to **13** (7 under Industrial Chemicals + 4 under Surface Treatment and Plating + 1 Filter Cartridges + 1 Abrasives and Polishing Media).

---

## Open Questions

- [ ] Who is the PM owner for Holsen? — Owner: Gareth — Due: TBD
- [ ] Is `Poison` client class triggering any compliance flags in MAIA? — Owner: TBD
- [ ] Should `micron_rating` be required for Filter Cartridges subcategory? — Owner: TBD
- [ ] Are `chatbot_hints` planned for a future taxonomy version? — Owner: TBD
- [ ] Confirm UoM completeness — does Holsen use any units not in the enum (e.g., MT, G, ML)? — **Status: Confirmed ✅ all 6 UoMs in product list are covered** — 2026-03-04
- [ ] Add missing subcategories: Plating Salts - Zinc (33 SKUs), Plating Salts - Tin (2 SKUs), Anodising Chemicals (5 SKUs) — Owner: TBD — Priority: High
- [ ] Resolve ambiguous product-to-subcategory mappings (CuSO, CA, CuCN, NICL, Brass Sheets) — Owner: TBD
- [ ] Decide whether `TYPE` (Trading vs Mfg) should be added as a taxonomy attribute — Owner: TBD
- [ ] Align `client_class` for NICKEL CHLORIDE SIBANYE (currently `NICL`) with NICKEL CHLORIDE SUMITOMO/ZENITH (currently `Ni. Chloride`) — inconsistency in source data

---

## Raw Source

The original YAML taxonomy file is stored in this folder:
`03 - Clients/Holsen/holsen_product_taxonomy.yaml`

This file is the canonical machine-readable definition consumed by MAIA's backend for UI and chatbot configuration. This markdown doc is the human-readable reference — do not edit the YAML directly unless coordinating with the engineering team.

---

## See Also

- [[03 - Clients/README]]
- [[01 - MAIA Product/Sales Workspace/Items/Products by Company]]
- [[01 - MAIA Product/Sales Workspace/Sales Workspace Modules]]
- [[06 - Glossary & Taxonomy/Glossary]]

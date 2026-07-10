# MacroFrozen Item Group Hierarchy

Purpose: handoff draft for MacroFrozen item grouping and item facets based on MAIA KB notes plus observed item screenshots.

## Hierarchy With Attributes

```text
Level 0: Products
`-- Level 1: Frozen Meat / Food
    |   attrs: meat_type, cut_part, product_form, bone_state, skin_state, cut_style,
    |          thickness, origin_country, brand_supplier, weight_range, pack_size,
    |          uom, chinese_name, alternate_name, raw_item_name
    |
    |-- Level 2: Beef
    |   attrs: meat_type=Beef, cut_part, product_form, bone_state, origin_country,
    |          brand_supplier, weight_range, pack_size, uom, chinese_name,
    |          alternate_name, raw_item_name
    |   |-- Level 3: Beef Ball | attrs: cut_part=Beef Ball, product_form=Ball
    |   |-- Level 3: Beef Roll | attrs: cut_part=Beef Roll, product_form=Roll
    |   |-- Level 3: Shortribs | attrs: cut_part=Shortribs, bone_state
    |   |-- Level 3: Honeycomb | attrs: cut_part=Honeycomb
    |   |-- Level 3: Brisket | attrs: cut_part=Brisket, bone_state
    |   |-- Level 3: Ribeye | attrs: cut_part=Ribeye, bone_state
    |   |-- Level 3: Sirloin | attrs: cut_part=Sirloin, bone_state
    |   |-- Level 3: Tenderloin | attrs: cut_part=Tenderloin, bone_state
    |   |-- Level 3: Striploin | attrs: cut_part=Striploin, bone_state
    |   |-- Level 3: Chuck | attrs: cut_part=Chuck, bone_state
    |   |-- Level 3: Flank | attrs: cut_part=Flank, bone_state
    |   |-- Level 3: Oxtail | attrs: cut_part=Oxtail, product_form=Joint/Slice
    |   `-- Level 3: Trimming | attrs: cut_part=Trimming, product_form=Trimming
    |
    |-- Level 2: Buffalo
    |   attrs: meat_type=Buffalo, cut_part, product_form, origin_country,
    |          brand_supplier, weight_range, pack_size, uom, chinese_name,
    |          alternate_name, raw_item_name
    |   |-- Level 3: Trimming | attrs: cut_part=Trimming, product_form=Trimming
    |   |-- Level 3: Meat | attrs: cut_part=Meat
    |   |-- Level 3: Cube | attrs: product_form=Cube
    |   `-- Level 3: Slice | attrs: product_form=Slice
    |
    |-- Level 2: Chicken
    |   attrs: meat_type=Chicken, cut_part, product_form, bone_state, skin_state,
    |          cut_style, origin_country, brand_supplier, weight_range, pack_size,
    |          uom, chinese_name, alternate_name, raw_item_name
    |   |-- Level 3: Breast | attrs: cut_part=Breast, bone_state, skin_state
    |   |-- Level 3: Leg | attrs: cut_part=Leg, bone_state, skin_state
    |   |-- Level 3: Leg Cube | attrs: cut_part=Leg, product_form=Cube
    |   |-- Level 3: Whole Leg | attrs: cut_part=Leg, product_form=Whole
    |   |-- Level 3: Chop | attrs: product_form=Chop, cut_style
    |   |-- Level 3: Whole Chicken | attrs: cut_part=Whole Chicken, product_form=Whole
    |   |-- Level 3: Wing | attrs: cut_part=Wing
    |   |-- Level 3: Mid Joint Wing | attrs: cut_part=Wing, cut_style=Mid Joint
    |   |-- Level 3: Three Joint Wing | attrs: cut_part=Wing, cut_style=Three Joint
    |   |-- Level 3: Fillet | attrs: product_form=Fillet, bone_state=Boneless
    |   |-- Level 3: Drumstick | attrs: cut_part=Drumstick
    |   |-- Level 3: Thigh | attrs: cut_part=Thigh
    |   |-- Level 3: Feet | attrs: cut_part=Feet
    |   `-- Level 3: Giblet / Offal | attrs: cut_part=Giblet/Offal
    |
    |-- Level 2: Pork
    |   attrs: meat_type=Pork, cut_part, product_form, bone_state, skin_state,
    |          cut_style, thickness, origin_country, brand_supplier, weight_range,
    |          pack_size, uom, chinese_name, alternate_name, raw_item_name
    |   |-- Level 3: Belly | attrs: cut_part=Belly, product_form, bone_state, skin_state, thickness
    |   |-- Level 3: Collar | attrs: cut_part=Collar, skin_state, brand_supplier
    |   |-- Level 3: Shoulder | attrs: cut_part=Shoulder, skin_state, bone_state
    |   |-- Level 3: Shoulder Picnic | attrs: cut_part=Shoulder Picnic, skin_state, bone_state
    |   |-- Level 3: Loin | attrs: cut_part=Loin, bone_state, product_form
    |   |-- Level 3: Ham | attrs: cut_part=Ham, skin_state, product_form
    |   |-- Level 3: Tenderloin | attrs: cut_part=Tenderloin, product_form=Slice/Silk/Whole
    |   |-- Level 3: Trotter / Hind Knee | attrs: cut_part=Trotter/Hind Knee, product_form=Joint
    |   |-- Level 3: Spare Ribs | attrs: cut_part=Spare Ribs, bone_state=Bone In, brand_supplier
    |   |-- Level 3: Back Fat | attrs: cut_part=Back Fat, product_form=Block/Slice/Strip/Cube, skin_state
    |   |-- Level 3: Whole Pig | attrs: cut_part=Whole Pig, product_form=Whole, bone_state, weight_range
    |   |-- Level 3: Rib | attrs: cut_part=Rib, bone_state
    |   |-- Level 3: Neck | attrs: cut_part=Neck, bone_state
    |   |-- Level 3: Mince | attrs: cut_part=Mince, product_form=Mince
    |   |-- Level 3: Trimming | attrs: cut_part=Trimming, product_form=Trimming
    |   `-- Level 3: Offal | attrs: cut_part=Offal
    |
    |-- Level 2: Duck
    |   attrs: meat_type=Duck, cut_part, product_form, bone_state, skin_state,
    |          origin_country, brand_supplier, weight_range, pack_size, uom,
    |          chinese_name, alternate_name, raw_item_name
    |   |-- Level 3: Whole Duck | attrs: cut_part=Whole Duck, product_form=Whole
    |   |-- Level 3: Duck Breast | attrs: cut_part=Breast, bone_state, skin_state
    |   |-- Level 3: Duck Leg | attrs: cut_part=Leg, bone_state, skin_state
    |   |-- Level 3: Duck Wing | attrs: cut_part=Wing
    |   |-- Level 3: Duck Feet | attrs: cut_part=Feet
    |   |-- Level 3: Duck Neck | attrs: cut_part=Neck
    |   |-- Level 3: Duck Tongue | attrs: cut_part=Tongue
    |   `-- Level 3: Duck Offal | attrs: cut_part=Offal
    |
    |-- Level 2: Lamb
    |   attrs: meat_type=Lamb, cut_part, product_form, bone_state, origin_country,
    |          brand_supplier, weight_range, pack_size, uom, chinese_name,
    |          alternate_name, raw_item_name
    |   |-- Level 3: Lamb Shoulder | attrs: cut_part=Shoulder, bone_state
    |   |-- Level 3: Lamb Leg | attrs: cut_part=Leg, bone_state
    |   |-- Level 3: Lamb Rack / Rib | attrs: cut_part=Rack/Rib, bone_state
    |   |-- Level 3: Lamb Chop | attrs: cut_part=Chop, product_form=Chop
    |   |-- Level 3: Lamb Shank | attrs: cut_part=Shank, bone_state
    |   |-- Level 3: Lamb Loin | attrs: cut_part=Loin, bone_state
    |   |-- Level 3: Lamb Belly / Breast | attrs: cut_part=Belly/Breast, bone_state
    |   |-- Level 3: Lamb Mince | attrs: cut_part=Mince, product_form=Mince
    |   `-- Level 3: Lamb Trimming | attrs: cut_part=Trimming, product_form=Trimming
    |
    |-- Level 2: Seafood
    |   attrs: meat_type=Seafood, cut_part, product_form, origin_country,
    |          brand_supplier, weight_range, pack_size, uom, chinese_name,
    |          alternate_name, raw_item_name
    |   |-- Level 3: Fish | attrs: cut_part=Fish, product_form=Whole/Fillet/Slice
    |   |-- Level 3: Prawn / Shrimp | attrs: cut_part=Prawn/Shrimp, product_form=Whole/Peeled
    |   |-- Level 3: Squid | attrs: cut_part=Squid, product_form=Whole/Ring/Tube
    |   |-- Level 3: Scallop | attrs: cut_part=Scallop
    |   |-- Level 3: Crab | attrs: cut_part=Crab, product_form=Whole/Cut
    |   |-- Level 3: Mussel | attrs: cut_part=Mussel
    |   |-- Level 3: Clam | attrs: cut_part=Clam
    |   `-- Level 3: Mixed Seafood | attrs: cut_part=Mixed Seafood, product_form=Mixed Pack
    |
    |-- Level 2: Processed Meat / Frozen Prepared Food
    |   attrs: meat_type=Processed Meat / Frozen Prepared Food, cut_part,
    |          product_form, origin_country, brand_supplier, weight_range,
    |          pack_size, uom, chinese_name, alternate_name, raw_item_name
    |   |-- Level 3: Meat Ball | attrs: product_form=Ball, cut_part/meat_type_source if known
    |   |-- Level 3: Sausage | attrs: product_form=Sausage, cut_part/meat_type_source if known
    |   |-- Level 3: Nugget | attrs: product_form=Nugget, cut_part/meat_type_source if known
    |   |-- Level 3: Patty | attrs: product_form=Patty, cut_part/meat_type_source if known
    |   |-- Level 3: Roll | attrs: product_form=Roll, cut_part/meat_type_source if known
    |   |-- Level 3: Slice | attrs: product_form=Slice, cut_part/meat_type_source if known
    |   |-- Level 3: Marinated Item | attrs: product_form=Marinated Item, cut_style
    |   |-- Level 3: Ready-to-Cook Item | attrs: product_form=Ready-to-Cook Item, cut_style
    |   `-- Level 3: Mixed Pack | attrs: product_form=Mixed Pack
    |
    `-- Level 2: Miscellaneous / Unclassified
        attrs: meat_type=Miscellaneous / Unclassified, raw_item_name,
               alternate_name, chinese_name, probable_category
        |-- Level 3: Unclassified Meat Item | attrs: raw_item_name, probable_category
        |-- Level 3: Unclassified Seafood Item | attrs: raw_item_name, probable_category
        `-- Level 3: Unclassified Frozen Item | attrs: raw_item_name, probable_category
```

## Facet Rule

Do not create item groups for country, brand, supplier, skin state, bone state, weight range, language alias, or pack size. These change inside the same item family, so they should stay as facets.

Common observed pattern:

```text
[Meat Type] + [Cut / Item] + [Bone/Skin State] + [Origin / Brand] + [Extra Spec] + [Chinese Name]
```

Examples:

- `BEEF SHORTRIBS BONELESS` -> Beef > Shortribs
- `BUFFALO TRIMMING BLACKGOLD` -> Buffalo > Trimming
- `FROZEN CHICKEN BONELESS BREAST TH` -> Chicken > Breast
- `PORK BELLY SKIN ON SEABOARD` -> Pork > Belly
- `COLLAR SKINLESS FACCSA` -> Pork > Collar
- `PORK BELLY BONE IN DANISH CROWN` -> Pork > Belly
- `TROTTER JOINT/HIND KNEE` -> Pork > Trotter / Hind Knee
- `SPARE RIBS LORDFOOD` -> Pork > Spare Ribs
- `BACK FAT` -> Pork > Back Fat

# Dalson Industrial Supplies - Item Facet Structure

Purpose: define item-only categorization and facets for Dalson's industrial supply item names.

## Item Hierarchy

```text
Level 0: Products
`-- Level 1: Industrial Supplies
    |
    |-- Shared Attributes
    |   |-- Brand
    |   |-- Model / Series
    |   |-- Product Type
    |   |-- Material
    |   |-- Size / Dimension
    |   |-- Capacity / Volume
    |   |-- Colour / Finish
    |   |-- Pack Size
    |   |-- UOM
    |   `-- Specification / Rating
    |
    |-- Level 2: Tools & Workshop Equipment
    |   |-- Level 3: Hand Tools
    |   |-- Level 3: Automotive Tools
    |   |-- Level 3: Measuring Tools
    |   |-- Level 3: Cutting / Stripping Tools
    |   `-- Level 3: Machines / Equipment
    |
    |-- Level 2: Safety & PPE
    |   |-- Level 3: Gloves
    |   |-- Level 3: Goggles / Face Shield
    |   |-- Level 3: Safety Shoes / Boots
    |   |-- Level 3: Rainwear
    |   |-- Level 3: Lockout / Tagout
    |   `-- Level 3: First Aid / Medical
    |
    |-- Level 2: Plumbing & Sanitary
    |   |-- Level 3: Taps / Faucets
    |   |-- Level 3: Valves
    |   |-- Level 3: Hoses
    |   |-- Level 3: Pipe Fittings
    |   `-- Level 3: Bathroom Accessories
    |
    |-- Level 2: Electrical & Lighting
    |   |-- Level 3: Switches / Sockets
    |   |-- Level 3: Lights / Floodlights
    |   |-- Level 3: Cables / Wiring Accessories
    |   |-- Level 3: Door Chime / Intercom
    |   `-- Level 3: Testers / Detectors
    |
    |-- Level 2: Welding & Gas
    |   |-- Level 3: Welding Rods
    |   |-- Level 3: Welding Machines
    |   |-- Level 3: Welding PPE
    |   |-- Level 3: Welding Accessories
    |   `-- Level 3: Gas / Oxygen
    |
    |-- Level 2: Adhesives, Sealants & Chemicals
    |   |-- Level 3: Adhesives / Glue
    |   |-- Level 3: Sealants
    |   |-- Level 3: Solvents / Cleaners
    |   |-- Level 3: Lubricants / Sprays
    |   `-- Level 3: Epoxy / Cement
    |
    |-- Level 2: Cleaning & Janitorial
    |   |-- Level 3: Hand Cleaner
    |   |-- Level 3: Brooms / Brushes
    |   |-- Level 3: Waste Disposal
    |   |-- Level 3: Vacuum / Extractor
    |   `-- Level 3: Cleaning Chemicals
    |
    |-- Level 2: Lifting, Handling & Storage
    |   |-- Level 3: Webbing Slings
    |   |-- Level 3: Wheelbarrows / Trucks
    |   |-- Level 3: Pallets
    |   |-- Level 3: Ladders
    |   `-- Level 3: Brackets / Holders
    |
    |-- Level 2: Building & Maintenance Materials
    |   |-- Level 3: Tapes
    |   |-- Level 3: Canvas / Covers
    |   |-- Level 3: Fasteners / Anchors
    |   |-- Level 3: Wall / Floor Accessories
    |   `-- Level 3: Boards / Whiteboards
    |
    |-- Level 2: Automotive Supplies
    |   |-- Level 3: Vehicle Tools
    |   |-- Level 3: Engine / Timing Tools
    |   |-- Level 3: Injectors / Valves
    |   |-- Level 3: Spill Kits
    |   `-- Level 3: Batteries / Accessories
    |
    |-- Level 2: Pumps, Valves & Fluid Control
    |   |-- Level 3: Pumps
    |   |-- Level 3: Valves
    |   |-- Level 3: Gauges
    |   |-- Level 3: Nozzles
    |   `-- Level 3: Fluid Hoses
    |
    |-- Level 2: Measuring & Testing Instruments
    |   |-- Level 3: Pressure Gauges
    |   |-- Level 3: Detectors
    |   |-- Level 3: Measuring Tapes
    |   |-- Level 3: Calipers
    |   `-- Level 3: Balances / Scales
    |
    |-- Level 2: Office, Signage & Facility Supplies
    |   |-- Level 3: Whiteboards
    |   |-- Level 3: Signs / Labels
    |   |-- Level 3: Holders
    |   |-- Level 3: Chairs
    |   `-- Level 3: Facility Fixtures
    |
    |-- Level 2: Fasteners & Hardware
    |   |-- Level 3: Screws
    |   |-- Level 3: Anchors
    |   |-- Level 3: Brackets
    |   |-- Level 3: Hasps / Padlocks
    |   `-- Level 3: Cable Ties
    |
    |-- Level 2: Paint, Surface Treatment & Abrasives
    |   |-- Level 3: Sprays
    |   |-- Level 3: Wax / Polish
    |   |-- Level 3: Removers
    |   |-- Level 3: Grinding Paste
    |   `-- Level 3: Abrasive Tools
    |
    |-- Level 2: Packaging, Tapes & Strapping
    |   |-- Level 3: Wire Tape
    |   |-- Level 3: Waterproof Tape
    |   |-- Level 3: Strapping Rope
    |   |-- Level 3: Webbing
    |   `-- Level 3: Cable Tie
    |
    |-- Level 2: Machinery & Power Equipment
    |   |-- Level 3: Pumps
    |   |-- Level 3: Threading Machines
    |   |-- Level 3: Welding Machines
    |   |-- Level 3: Fans
    |   `-- Level 3: Portable Equipment
    |
    |-- Level 2: Furniture & Fixtures
    |   |-- Level 3: Chairs
    |   |-- Level 3: Wall Holders
    |   |-- Level 3: Cabinets
    |   `-- Level 3: Mounted Fixtures
    |
    `-- Level 2: Miscellaneous / Unclassified
        `-- Level 3: Unclassified Items
```

## Name Pattern

```text
Brand + Product Type + Model/Series + Size/Spec + Material/Colour + Pack/UOM
```

Examples:

```text
WD40 Specialist High Performance Dry Lube PTFE 360ml
VIP PN16 Brass gate valve 2"
WINLUXE 50W LED FLOOD LIGHT - 6500K
Webbing sling 3 ton 6m
WIKA Pressure Gauges Model:232.50.63 Dial Size: 2-1/2"
```

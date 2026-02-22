---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# How to Create Diagrams in Obsidian

Quick guide on creating and displaying diagrams in your MAIA KB.

---

## Option 1: Mermaid Diagrams (Built-in) ⭐ Recommended

**What:** Native Mermaid support in Obsidian - renders automatically in preview mode

**When to use:**
- Flowcharts (workflows, decision trees)
- Sequence diagrams (API calls, user interactions)
- Gantt charts (roadmaps, timelines)
- State diagrams (document status flows)
- Class diagrams (data models)

### How to Create

Just use a code block with `mermaid` language:

````markdown
```mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
```
````

**Result:** Renders as a flowchart in preview mode

---

## Real MAIA Examples

### Example 1: Quote-to-Cash Workflow

````markdown
```mermaid
graph LR
    Q[Quotation<br/>DRAFT] --> QO[Quotation<br/>OPEN]
    QO --> SO[Sales Order<br/>TO BILL]
    SO --> INV[Invoice<br/>UNPAID]
    INV --> REC[Receipt<br/>PAID]

    style Q fill:#f9f,stroke:#333
    style QO fill:#bbf,stroke:#333
    style SO fill:#bfb,stroke:#333
    style INV fill:#ffb,stroke:#333
    style REC fill:#bfb,stroke:#333
```
````

**When to use:** In workflow documentation files

---

### Example 2: Triage Decision Tree

````markdown
```mermaid
graph TD
    Start[New Request] --> Q1{Benefits all<br/>clients?}
    Q1 -->|Yes| PROD[PRODUCT<br/>Enhancement]
    Q1 -->|No| Q2{Client-specific<br/>setting?}
    Q2 -->|Yes| CONFIG[CONFIG]
    Q2 -->|No| Q3{Standard<br/>functionality?}
    Q3 -->|Yes| BUG[BUG Fix]
    Q3 -->|No| CUSTOM[CUSTOM<br/>Development]

    PROD --> Backlog[Add to Backlog]
    CONFIG --> Doc[Document Config]
    BUG --> Ticket[Create Ticket]
    CUSTOM --> TechLead[Escalate to Tech Lead]

    style PROD fill:#90EE90
    style CONFIG fill:#87CEEB
    style BUG fill:#FFB6C1
    style CUSTOM fill:#FFD700
```
````

**When to use:** In [[Triage SOP (Product vs Config vs Custom)]]

---

### Example 3: Document Status Flow

````markdown
```mermaid
stateDiagram-v2
    [*] --> DRAFT
    DRAFT --> OPEN: Submit
    OPEN --> TO_BILL: Convert to SO
    TO_BILL --> BILLED: Create Invoice
    BILLED --> HOLD: Put on hold
    HOLD --> BILLED: Resume
    BILLED --> [*]: Complete

    DRAFT --> [*]: Cancel
    OPEN --> [*]: Cancel
```
````

**When to use:** In [[Document Status Flows]]

---

### Example 4: Product Roadmap Timeline

````markdown
```mermaid
gantt
    title MAIA Product Roadmap Q1-Q2 2026
    dateFormat YYYY-MM-DD
    section v1.2
    Multiple Credit Notes    :a1, 2026-03-01, 21d
    Improved HOLD UX        :a2, 2026-03-01, 14d
    section v1.3
    Bulk Operations         :b1, 2026-05-01, 28d
    Advanced Search         :b2, 2026-05-15, 21d
    section v2.0
    Multi-Currency          :c1, 2026-07-01, 56d
```
````

**When to use:** In [[05 - Releases & Updates/Upcoming Features]]

---

### Example 5: Feature Dependency Map

````markdown
```mermaid
graph TB
    subgraph "v1.2 - Returns Theme"
        MCN[Multiple Credit Notes]
        HUX[HOLD → Invoice UX]
    end

    subgraph "v1.3 - Efficiency Theme"
        BULK[Bulk Operations]
        SEARCH[Advanced Search]
    end

    subgraph "v2.0 - Enterprise"
        MULTI[Multi-Currency]
    end

    MCN -.->|Enables| BULK
    BULK -->|Requires| SEARCH
    MULTI -->|Blocks| MCN

    style MCN fill:#ff6b6b
    style BULK fill:#4ecdc4
    style MULTI fill:#ffe66d
```
````

**When to use:** In feature planning documents

---

### Example 6: Client Impact Sequence

````markdown
```mermaid
sequenceDiagram
    participant PM as PM
    participant KB as Knowledge Base
    participant Client as Client Folders

    PM->>KB: Search for "multiple credit notes"
    KB->>PM: Returns Known Limitation
    PM->>Client: Search in 03 - Clients/**/
    Client->>PM: 8 clients mention it
    PM->>PM: Classify as HIGH PRIORITY
    PM->>KB: Update Feature Gap Tracker
```
````

**When to use:** In process documentation

---

## Option 2: Excalidraw (Hand-drawn Style) 🎨

**What:** Plugin for hand-drawn style diagrams (already installed in your vault)

**When to use:**
- Sketches and wireframes
- Visual brainstorming
- Annotations on screenshots
- Freeform diagrams

### How to Create

1. **Create new Excalidraw file:**
   - Right-click in file explorer → "New Excalidraw drawing"
   - Or: Create file with `.excalidraw` extension

2. **Draw using the toolbar:**
   - Shapes (rectangles, circles, arrows)
   - Text labels
   - Freehand drawing

3. **Embed in markdown:**
   ```markdown
   ![[diagram-name.excalidraw]]
   ```

---

## Option 3: Canvas (Visual Board) 📊

**What:** Native Obsidian canvas for visual boards (already enabled)

**When to use:**
- Visual roadmaps
- Feature relationship maps
- Client ecosystem diagrams
- Brainstorming sessions

### How to Create

1. **Create new canvas:**
   - Right-click in file explorer → "New canvas"
   - Or: Create file with `.canvas` extension

2. **Add cards:**
   - Drag notes from vault onto canvas
   - Create text cards directly
   - Add links between cards

3. **Organize visually:**
   - Color-code cards by theme
   - Draw arrows to show relationships
   - Group related items

**Note:** Canvas files are separate (not embedded in markdown)

---

## Option 4: Image Diagrams (PNG/SVG)

**When to use:**
- Complex diagrams from external tools
- Screenshots
- Design mockups

### How to Embed

```markdown
![Diagram description](path/to/image.png)
```

Or use Obsidian syntax:
```markdown
![[image-name.png]]
```

---

## Mermaid Diagram Types Reference

### Flowchart (Most Common)
```mermaid
graph TD
    A[Start] --> B[Process]
    B --> C{Decision}
    C -->|Yes| D[End]
    C -->|No| B
```

### Sequence Diagram
```mermaid
sequenceDiagram
    User->>System: Request
    System->>Database: Query
    Database->>System: Response
    System->>User: Result
```

### State Diagram
```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> Review
    Review --> Approved
    Approved --> [*]
```

### Gantt Chart
```mermaid
gantt
    title Project Timeline
    section Phase 1
    Task 1 :a1, 2026-03-01, 30d
    Task 2 :a2, after a1, 20d
```

### Pie Chart
```mermaid
pie
    title Requests by Type
    "Product" : 45
    "Config" : 30
    "Custom" : 15
    "Bug" : 10
```

### Class Diagram
```mermaid
classDiagram
    class Document {
        +String id
        +String status
        +Date created
        +submit()
        +cancel()
    }
    class Quotation {
        +convert_to_SO()
    }
    Document <|-- Quotation
```

---

## Styling Tips

### Colors
```mermaid
graph LR
    A[Default] --> B[Custom Color]

    style B fill:#f9f,stroke:#333,stroke-width:4px
```

### Common Colors for MAIA
- `#90EE90` - Product (green)
- `#87CEEB` - Config (blue)
- `#FFD700` - Custom (gold)
- `#FFB6C1` - Bug (pink)
- `#FF6B6B` - Critical (red)
- `#4ECDC4` - In Progress (teal)

---

## Best Practices for MAIA KB

### 1. **Workflows** → Use Flowcharts
Example files to add diagrams:
- [[Quote-to-Cash Flow]]
- [[Quotation Workflows]]
- [[Sales Order Workflows]]
- [[Invoice Workflows]]

### 2. **Status Transitions** → Use State Diagrams
Example files:
- [[Document Status Flows]]

### 3. **Decision Trees** → Use Flowcharts
Example files:
- [[Triage SOP (Product vs Config vs Custom)]]
- [[Requirement Gathering Process]]

### 4. **Timelines** → Use Gantt Charts
Example files:
- [[Upcoming Features]]
- [[Roadmap]]

### 5. **Dependencies** → Use Graph Diagrams
Example files:
- Feature dependency mapping
- Client impact analysis

---

## Quick Start: Add Your First Diagram

### Add to Quote-to-Cash Flow

1. Open: [[01 - MAIA Product/Core Workflows/Quote-to-Cash Flow]]

2. Add this Mermaid diagram:

````markdown
## Visual Workflow

```mermaid
graph LR
    Q[1. Quotation] --> SO[2. Sales Order]
    SO --> INV[3. Invoice]
    INV --> REC[4. Receipt]

    Q -.-> CN1[Credit Note]
    INV -.-> CN2[Credit Note]

    style Q fill:#bbf
    style SO fill:#bfb
    style INV fill:#ffb
    style REC fill:#bfb
    style CN1 fill:#fbb
    style CN2 fill:#fbb
```
````

3. Switch to **Preview mode** (Ctrl/Cmd + E) to see the rendered diagram

4. Done! ✅

---

## Troubleshooting

### Diagram Not Showing?

**Issue:** Mermaid code block shows as code, not diagram

**Solution:**
- Make sure you're in **Preview mode** (not Edit mode)
- Check the code block starts with ` ```mermaid ` (three backticks + mermaid)
- Verify syntax is correct (no typos)

### Syntax Errors?

**Resources:**
- Mermaid Live Editor: https://mermaid.live (test diagrams online)
- Mermaid docs: https://mermaid.js.org/intro/

---

## Recommended Next Steps

1. ✅ Add workflow diagram to [[Quote-to-Cash Flow]]
2. ✅ Add triage decision tree to [[Triage SOP (Product vs Config vs Custom)]]
3. ✅ Add status diagram to [[Document Status Flows]]
4. ✅ Create roadmap Gantt chart in [[Upcoming Features]]

---

## See Also

- [[Quick Reference]] — Quick links
- [[CLAUDE.md]] — KB conventions
- Mermaid Documentation: https://mermaid.js.org

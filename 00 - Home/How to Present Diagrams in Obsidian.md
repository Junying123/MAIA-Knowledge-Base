---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# How to Present Diagrams in Obsidian

Multiple ways to present your workflow diagrams for demos, meetings, and training.

---

## Method 1: Full Screen Reading View (Fastest) ⭐

**Best for:** Quick demos, 1-on-1 meetings

### Steps:

1. **Open workflow file** (e.g., Quote-to-Cash Flow.md)

2. **Enter Reading View:**
   - Click book icon (top-right)
   - Or press `Ctrl/Cmd + E`

3. **Toggle Full Screen:**
   - **Windows:** `F11`
   - **Mac:** `Cmd + Ctrl + F`
   - Or: View → Toggle Full Screen

4. **Zoom diagram:**
   - `Ctrl/Cmd +` to zoom in
   - `Ctrl/Cmd -` to zoom out

5. **Navigate:**
   - Scroll to show different parts
   - Arrow keys to move between sections

6. **Exit Full Screen:**
   - Press `F11` (Windows) or `Cmd + Ctrl + F` (Mac)

**Pros:**
- ✅ Instant - no setup needed
- ✅ Works with any file
- ✅ Can edit live during demo

**Cons:**
- ⚠️ Still shows some UI elements
- ⚠️ Need to manually zoom each time

---

## Method 2: Obsidian Slides Plugin (Best for Presentations) 🎤

**Best for:** Formal presentations, training sessions

### Setup (One-time):

1. **Install Advanced Slides plugin:**
   - Settings → Community Plugins → Browse
   - Search "Advanced Slides"
   - Install + Enable

2. **Restart Obsidian**

### Create Presentation:

**Create:** `02 - PM Playbook/Presentations/MAIA Workflows Presentation.md`

```markdown
---
theme: black
---

# MAIA Workflows

Complete Quote-to-Cash Process

---

## Quote-to-Cash Overview

```mermaid
flowchart LR
    Q[Quotation] --> SO[Sales Order]
    SO --> INV[Invoice]
    INV --> REC[Receipt]
```

---

## Sales Order Workflow

<iframe src="01 - MAIA Product/Core Workflows/Sales Order Workflows.md"></iframe>

---

## Key Takeaways

- 4 main documents: Quotation → SO → Invoice → Credit Note
- Each document has status transitions
- Data flows automatically between documents

---

# Questions?

```

### Present:

1. **Open presentation file**
2. **Click "Start Presentation" button** (appears in toolbar)
3. **Navigate:** Arrow keys or click
4. **Zoom:** Browser zoom works in presentation mode
5. **Exit:** Press `Esc`

**Pros:**
- ✅ Professional slide deck
- ✅ Can embed diagrams from other files
- ✅ Supports animations, themes
- ✅ Speaker notes support

**Cons:**
- ⚠️ Requires plugin installation
- ⚠️ Some setup time

---

## Method 3: Export to PDF (For Sharing)

**Best for:** Sending to clients, email, archiving

### Using Print to PDF:

1. **Open workflow file** in Reading View

2. **Enter Full Screen:** `F11` / `Cmd + Ctrl + F`

3. **Zoom to desired size:** `Ctrl/Cmd +`

4. **Print to PDF:**
   - **Windows:** `Ctrl + P`
   - **Mac:** `Cmd + P`
   - Select "Save as PDF" or "Microsoft Print to PDF"
   - Click "Save"

5. **Result:** PDF with rendered diagrams

**Alternative - Use PDF Export Plugin:**

1. Install "Better Export PDF" plugin
2. Right-click file → "Export to PDF"
3. Diagrams render automatically

**Pros:**
- ✅ Shareable file
- ✅ Works on any device
- ✅ Diagrams are static (won't break)

**Cons:**
- ⚠️ Not editable
- ⚠️ Large diagrams may span multiple pages

---

## Method 4: Canvas Presentation Board

**Best for:** Visual walkthroughs, connecting multiple diagrams

### Create Presentation Canvas:

1. **Create:** `02 - PM Playbook/Presentations/Workflow Overview.canvas`

2. **Add workflow notes as cards:**
   - Drag `Quote-to-Cash Flow.md` onto canvas
   - Drag `Sales Order Workflows.md` onto canvas
   - Drag `Invoice Workflows.md` onto canvas

3. **Arrange visually:**
   - Place in logical flow (left to right)
   - Add arrows between cards
   - Add text cards with explanations

4. **Color-code cards:**
   - Right-click card → Change color
   - Use consistent colors (e.g., blue for workflows)

### Present:

1. **Open canvas file**
2. **Enter Full Screen:** `F11` / `Cmd + Ctrl + F`
3. **Zoom:** `Ctrl/Cmd + mouse wheel` or trackpad pinch
4. **Pan:** Click and drag
5. **Click cards** to expand and show diagrams

**Pros:**
- ✅ Show relationships between workflows
- ✅ Highly visual
- ✅ Interactive - click to drill down

**Cons:**
- ⚠️ Setup time to create canvas
- ⚠️ Need to learn canvas controls

---

## Method 5: Split Screen Demo

**Best for:** Live walkthroughs with explanation

### Setup:

1. **Open workflow file** (e.g., Sales Order Workflows.md)

2. **Split pane vertically:**
   - Right-click tab → "Split right"
   - Or: `Ctrl/Cmd + Click` on file

3. **Left pane:** Show diagram in Reading View
4. **Right pane:** Show related content (user story, process doc, etc.)

5. **Zoom left pane:** `Ctrl/Cmd +` on the diagram pane only

### Present:

1. **Enter Full Screen:** `F11`
2. **Talk through left diagram** while showing right context
3. **Switch between panes** with mouse clicks
4. **Update right pane** to show different related docs

**Pros:**
- ✅ Show diagram + context simultaneously
- ✅ Interactive - can edit during demo

**Cons:**
- ⚠️ Less screen space per diagram

---

## Method 6: External Tools (Professional)

### Option A: Mermaid Live + Screen Share

1. **Copy Mermaid code** from workflow file
2. **Open:** https://mermaid.live
3. **Paste code**
4. **Use:** Full screen mode in browser (`F11`)
5. **Zoom:** Browser zoom (`Ctrl/Cmd +`)
6. **Screen share** in Zoom/Teams/Meet

**Pros:**
- ✅ Maximum zoom control
- ✅ Pan around large diagrams
- ✅ Edit live and re-render

**Cons:**
- ⚠️ External to Obsidian
- ⚠️ Need internet connection

---

### Option B: Export to PowerPoint/Google Slides

1. **Export diagrams as PNG:**
   - Copy Mermaid code → mermaid.live
   - Actions → Download PNG

2. **Insert in slides:**
   - PowerPoint: Insert → Pictures
   - Google Slides: Insert → Image

3. **Create presentation** with diagrams + talking points

**Pros:**
- ✅ Full presentation control
- ✅ Animations, transitions
- ✅ Familiar tool

**Cons:**
- ⚠️ Diagrams are static (can't edit)
- ⚠️ Extra export step

---

## Method 7: Hover Zoom Plugin (Auto-zoom)

**Best for:** Quick reviews without manual zooming

### Setup:

1. **Install plugin:**
   - Settings → Community Plugins → Browse
   - Search "Image Zoom" or "Hover Editor"
   - Install + Enable

2. **Configure:**
   - Settings → Image Zoom
   - Enable "Zoom on hover"

### Use:

1. **Open workflow file** in Reading View
2. **Hover over diagram** → Automatically zooms
3. **Move mouse away** → Returns to normal size

**Pros:**
- ✅ Automatic - no manual zoom
- ✅ Quick for reviewing multiple diagrams

**Cons:**
- ⚠️ May not work with all Mermaid diagrams
- ⚠️ Requires plugin

---

## Recommended Presentation Setups

### For Client Demos:
1. **Method 1** (Full Screen Reading View) + Browser Zoom
2. Share screen in Zoom/Teams
3. Navigate through Quote-to-Cash → SO → Invoice workflows
4. **Backup:** Export PDFs beforehand in case of tech issues

### For Training Sessions:
1. **Method 2** (Advanced Slides plugin)
2. Create slide deck with:
   - Overview slide
   - Diagram slides (one per workflow)
   - Quiz/discussion slides
3. Present in full screen

### For 1-on-1 Walkthroughs:
1. **Method 5** (Split Screen)
2. Left: Workflow diagram
3. Right: Related user stories, requirements, or meeting notes
4. Collaborate and edit together

### For Documentation/Handoff:
1. **Method 3** (Export to PDF)
2. Include all 5 workflow diagrams
3. Send via email or share in Lark

---

## Quick Reference: Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| **Reading View** | `Ctrl + E` | `Cmd + E` |
| **Full Screen** | `F11` | `Cmd + Ctrl + F` |
| **Zoom In** | `Ctrl + +` | `Cmd + +` |
| **Zoom Out** | `Ctrl + -` | `Cmd + -` |
| **Reset Zoom** | `Ctrl + 0` | `Cmd + 0` |
| **Print/PDF** | `Ctrl + P` | `Cmd + P` |
| **Split Right** | `Ctrl + Click file` | `Cmd + Click file` |

---

## Pro Tips for Better Presentations

### 1. Pre-zoom Before Presenting
- Open all workflow files
- Zoom to comfortable size (`Ctrl/Cmd +`)
- Keep tabs open in background
- Switch between tabs during presentation

### 2. Use Bookmarks for Quick Access
- Bookmark key workflow files
- Settings → Bookmarks → Add bookmark
- Quick switch during demo

### 3. Create Presentation Checklist
```markdown
## Before Demo:
- [ ] Open Quote-to-Cash Flow.md
- [ ] Open Sales Order Workflows.md
- [ ] Enter Full Screen mode
- [ ] Zoom to 150%
- [ ] Test screen share
- [ ] Have backup PDFs ready
```

### 4. Dark Mode for Presentations
- Settings → Appearance → Theme → Dark
- Easier on eyes in dim rooms
- Diagrams stand out more

### 5. Hide Sidebars for Clean View
- `Ctrl/Cmd + \` to toggle left sidebar
- `Ctrl/Cmd + Shift + \` to toggle right sidebar
- Maximum screen space for diagram

---

## Example: Present Quote-to-Cash Flow

**Scenario:** Client demo of MAIA workflows

### Setup (2 minutes):

1. Open `01 - MAIA Product/Core Workflows/Quote-to-Cash Flow.md`
2. Switch to Reading View (`Ctrl/Cmd + E`)
3. Enter Full Screen (`F11`)
4. Zoom to 125% (`Ctrl/Cmd + +` twice)
5. Hide sidebars (`Ctrl/Cmd + \`)

### Present (10 minutes):

1. **Introduce:** "Let me show you how MAIA handles the full Quote-to-Cash process"

2. **Show diagram:** "This is the complete flow with 4 main modules"

3. **Walk through:**
   - "Start with Quotation in DRAFT..."
   - Scroll to Quotation module
   - "Submit → OPEN → Convert to Sales Order..."
   - Scroll to Sales Order module
   - Continue through Invoice and Credit Note

4. **Highlight key points:**
   - Status transitions (color-coded)
   - Data transfers (orange boxes)
   - Decision points (diamonds)

5. **Q&A:** Fields questions while still showing diagram

### Cleanup:
- Exit Full Screen (`F11`)
- Reset zoom (`Ctrl/Cmd + 0`)

---

## Presentation Template

**Create:** `02 - PM Playbook/Presentations/[Client] Workflow Demo.md`

```markdown
---
presentation_date: YYYY-MM-DD
client: [Client Name]
attendees: [Names]
---

# MAIA Workflow Demo — [Client Name]

**Presenter:** [Your Name]
**Date:** [Date]

---

## Agenda

1. Quote-to-Cash Overview (5 min)
2. Sales Order Deep Dive (10 min)
3. Invoice & Credit Notes (10 min)
4. Q&A (5 min)

---

## Part 1: Quote-to-Cash Overview

![[01 - MAIA Product/Core Workflows/Quote-to-Cash Flow#Visual Workflow Diagram]]

**Key Points:**
- 4 main documents
- Automatic data transfer
- Status-driven workflow

---

## Part 2: Sales Order Details

![[01 - MAIA Product/Core Workflows/Sales Order Workflows#Visual Workflow Diagram]]

**Focus on:**
- TO BILL → 6 actions available
- Hold vs Close vs Cancel
- Convert to Invoice

---

## Part 3: Invoice & Credits

![[01 - MAIA Product/Core Workflows/Invoice Workflows#Visual Workflow Diagram]]

**Highlight:**
- UNPAID → 7 actions
- Create Credit Note process
- Payment receipt flow

---

## Next Steps

- [ ] Share PDF of workflows
- [ ] Schedule follow-up
- [ ] Send access to demo environment

---

# Notes

[Add notes during or after presentation]
```

---

## See Also

- [[How to Zoom Mermaid Diagrams]] — Zoom solutions
- [[How to Create Diagrams in Obsidian]] — Creating diagrams
- All workflow files in `01 - MAIA Product/Core Workflows/`

---

## Summary: Choose Your Method

| Need | Best Method | Setup Time | Quality |
|------|-------------|------------|---------|
| **Quick demo** | Full Screen Reading View | 0 min | Good |
| **Formal presentation** | Advanced Slides plugin | 30 min | Excellent |
| **Client handoff** | Export to PDF | 5 min | Good |
| **Visual walkthrough** | Canvas board | 20 min | Excellent |
| **Training session** | Split Screen | 2 min | Good |
| **Maximum zoom** | Mermaid Live + Screen Share | 2 min | Excellent |

**Recommendation:** Start with **Full Screen Reading View** + Browser Zoom for immediate use!

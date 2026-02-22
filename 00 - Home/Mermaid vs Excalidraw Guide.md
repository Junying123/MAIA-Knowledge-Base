---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Mermaid vs Excalidraw — When to Use Each

Both tools create diagrams, but they serve different purposes.

---

## Quick Comparison

| Feature | Mermaid | Excalidraw |
|---------|---------|------------|
| **Format** | Code (text-based) | Visual (hand-drawn style) |
| **Editing** | Edit code | Drag and drop elements |
| **Style** | Clean, professional | Hand-drawn, informal |
| **Zoom** | Limited (browser zoom only) | ✅ **Full zoom/pan support** |
| **Version Control** | ✅ Great (text diff) | ⚠️ JSON (harder to diff) |
| **Auto-layout** | ✅ Automatic | Manual positioning |
| **Best for** | Complex flows, documentation | Sketches, brainstorming, presentations |
| **Can Convert?** | ❌ No automatic conversion | ❌ No automatic conversion |

---

## ⚠️ Important: Cannot Auto-Convert

**Mermaid → Excalidraw conversion is NOT automatic** because:

- Mermaid: Text describes structure → Auto-layouts
- Excalidraw: Manual placement of visual elements

**You have 3 options:**

---

## Option 1: Keep Both (Recommended) ⭐

**Use Mermaid for:**
- ✅ Documentation (version-controlled, editable code)
- ✅ Complex workflows with many nodes
- ✅ When you need precise, structured diagrams
- ✅ Auto-updating diagrams (edit code = instant update)

**Use Excalidraw for:**
- ✅ Presentations (zoomable, pannable)
- ✅ Whiteboarding sessions
- ✅ Quick sketches and brainstorming
- ✅ Hand-drawn style for informal docs
- ✅ When you need full zoom control

**Example workflow:**
1. Create detailed Mermaid diagram for documentation
2. Create simplified Excalidraw sketch for presentations
3. Link both in your note

---

## Option 2: Manually Recreate Key Diagrams

**For important presentations, recreate in Excalidraw:**

### Steps:

1. **Open Mermaid diagram** (e.g., Quote-to-Cash Flow.md)
2. **Understand the structure** (4 modules, status flows)
3. **Create new Excalidraw:**
   - Right-click in file explorer → "Create new Excalidraw drawing"
   - Name: `Quote-to-Cash-Flow-Visual.excalidraw`
4. **Recreate simplified version:**
   - Add boxes for each document type
   - Add arrows for flow
   - Add text labels
   - Use colors to match Mermaid (yellow=DRAFT, green=OPEN, etc.)
5. **Embed in markdown:**
   ```markdown
   ## Visual Diagram (Hand-drawn, Zoomable)
   ![[Quote-to-Cash-Flow-Visual.excalidraw]]

   ## Detailed Diagram (Code-based)
   ```mermaid
   [... original Mermaid code ...]
   ```
   ```

**Time:** ~15-30 minutes per diagram

---

## Option 3: Use Excalidraw for New Diagrams

**Going forward, choose based on use case:**

### Create in Mermaid when:
- ✅ Documenting technical workflows
- ✅ Need precise structure
- ✅ Want version control
- ✅ Multiple people editing (text easier to merge)

### Create in Excalidraw when:
- ✅ Brainstorming
- ✅ Need to zoom/pan for presentations
- ✅ Want hand-drawn aesthetic
- ✅ Creating one-off diagrams

---

## How to Create Excalidraw Diagrams

### Method 1: In Obsidian UI (Easiest)

1. **Right-click** in file explorer
2. **Select:** "Create new Excalidraw drawing"
3. **Name file:** e.g., `Sales-Order-Sketch.excalidraw`
4. **Use toolbar:**
   - Rectangle tool: Draw boxes
   - Arrow tool: Draw arrows
   - Text tool: Add labels
   - Selection tool: Move elements
5. **Color-code:** Use colors to match your Mermaid style
6. **Save:** Auto-saves as you work
7. **Embed in note:**
   ```markdown
   ![[Sales-Order-Sketch.excalidraw]]
   ```

### Method 2: Using Excalidraw Web (For Complex)

1. **Go to:** https://excalidraw.com
2. **Draw your diagram**
3. **Export:** Save as `.excalidraw` file
4. **Import to Obsidian:** Copy to vault folder
5. **Embed in note**

---

## Excalidraw Controls in Obsidian

### While Viewing:
- **Zoom:** `Ctrl/Cmd + Mouse Wheel` or trackpad pinch
- **Pan:** Click and drag
- **Edit:** Double-click the embedded diagram

### While Editing:
- **Selection:** `V` or click pointer icon
- **Rectangle:** `R`
- **Arrow:** `A`
- **Text:** `T`
- **Delete:** Select element → `Delete` key
- **Duplicate:** Select → `Ctrl/Cmd + D`
- **Group:** Select multiple → `Ctrl/Cmd + G`
- **Undo:** `Ctrl/Cmd + Z`

---

## Example: Create Simple Quote-to-Cash in Excalidraw

**I'll create a simple example for you:**

1. **File:** `01 - MAIA Product/Core Workflows/Quote-to-Cash-Simple.excalidraw`
2. **Content:** Simplified 4-step flow
3. **Style:** Hand-drawn boxes + arrows
4. **Colors:** Matching Mermaid color scheme

### How to use it:

```markdown
## Simple Visual Flow (Zoomable)

![[Quote-to-Cash-Simple.excalidraw]]

## Detailed Technical Flow (Comprehensive)

```mermaid
[... existing comprehensive diagram ...]
```
```

---

## Recommended Approach for MAIA KB

### Keep Mermaid Diagrams for Documentation ✅

**Why:**
- Already created (5 comprehensive diagrams)
- Version-controlled (can track changes)
- Easy to update (edit code, re-render)
- Professional, clean look

### Add Excalidraw for Presentations ✅

**Create Excalidraw versions for:**
1. **Quote-to-Cash Overview** (simplified, 4 boxes)
   - For client demos, quick overviews
2. **Sales Order Key Actions** (6 actions from TO BILL)
   - For training new PMs
3. **Invoice Options** (7 actions from UNPAID)
   - For client onboarding

**Time investment:** ~1 hour for all 3

### Use Both Together ✅

**In each workflow file:**

```markdown
## For Presentations (Zoomable)

![[workflow-simple.excalidraw]]

*Hand-drawn overview - zoom and pan for demos*

---

## For Documentation (Detailed)

```mermaid
[... comprehensive diagram ...]
```

*Complete workflow with all status transitions*
```

---

## Benefits of Dual Approach

### Mermaid Advantages:
- ✅ Precise, complete documentation
- ✅ Easy to update (just edit code)
- ✅ Version control friendly
- ✅ Can generate from code/data

### Excalidraw Advantages:
- ✅ **Fully zoomable** (solves your zoom issue!)
- ✅ **Pannable** (view large diagrams easily)
- ✅ Hand-drawn style (friendly, approachable)
- ✅ Interactive editing during presentations

### Together:
- ✅ **Best of both worlds**
- ✅ Choose the right tool for the task
- ✅ Maintain both formats side-by-side

---

## Quick Start: Your First Excalidraw

### Create Quote-to-Cash Simple:

1. **In Obsidian:**
   - Right-click → "Create new Excalidraw drawing"
   - Name: `Quote-to-Cash-Simple.excalidraw`
   - Location: `01 - MAIA Product/Core Workflows/`

2. **Draw 4 boxes:**
   - Box 1: "Quotation" (yellow fill)
   - Box 2: "Sales Order" (green fill)
   - Box 3: "Invoice" (orange fill)
   - Box 4: "Receipt" (light green fill)

3. **Connect with arrows:**
   - Quotation → Sales Order
   - Sales Order → Invoice
   - Invoice → Receipt

4. **Add status labels:**
   - Under each box: status transitions

5. **Save and embed:**
   ```markdown
   ![[Quote-to-Cash-Simple.excalidraw]]
   ```

**Time:** 5-10 minutes

---

## Sample Structure for Workflow Files

```markdown
# Sales Order Workflows

## Quick Overview (For Demos)

![[Sales-Order-Simple.excalidraw]]

**Use this for:**
- Client demos (fully zoomable)
- Quick training
- Presentations

---

## Complete Workflow (For Documentation)

```mermaid
[... full detailed Mermaid diagram ...]
```

**Use this for:**
- Technical documentation
- Developer handoff
- Process reference

---

## Step-by-Step Guide

[... existing text content ...]
```

---

## Color Palette (Match Mermaid Style)

**Use these colors in Excalidraw to match your Mermaid diagrams:**

- **DRAFT status:** `#fff9c4` (light yellow)
- **OPEN/TO BILL:** `#c8e6c9` (light green)
- **UNPAID:** `#ffecb3` (light orange)
- **CANCELLED:** `#ffcdd2` (light red)
- **Process/Transfer:** `#e1f0ff` (light blue)
- **Completed:** `#90EE90` (green)

**How to apply in Excalidraw:**
1. Select element
2. Click color picker (top toolbar)
3. Choose "Custom color"
4. Enter hex code (e.g., `#fff9c4`)

---

## Troubleshooting

### "I can't find Excalidraw option"

**Check:**
1. Settings → Community Plugins
2. Search "Excalidraw"
3. Should show as "Installed" and toggle "ON"
4. Restart Obsidian if needed

### "Excalidraw embeds not showing"

**Fix:**
1. Make sure file ends with `.excalidraw`
2. Use wikilink format: `![[filename.excalidraw]]`
3. File must be in vault (not external)

### "Can't zoom in Mermaid but want to"

**Solutions:**
1. Create Excalidraw version (fully zoomable)
2. Use browser zoom (`Ctrl/Cmd +`)
3. Export Mermaid as PNG, insert as image

---

## Summary

**What you have now:**
- ✅ 5 comprehensive Mermaid diagrams (documentation-ready)
- ✅ Excalidraw plugin installed
- ⚠️ No automatic conversion (impossible)

**What you should do:**

**Option A: Keep Mermaid (Fastest)**
- Use browser zoom (`Ctrl/Cmd +`) for presentations
- Your diagrams are already excellent
- Zero extra work

**Option B: Add Excalidraw (Best UX)**
- Create simplified Excalidraw versions (1 hour)
- Use Excalidraw for demos (fully zoomable)
- Keep Mermaid for documentation
- Best of both worlds

**Option C: Hybrid (Recommended)**
- Keep all Mermaid diagrams
- Create 1-2 Excalidraw versions for most-used workflows
- Use Excalidraw when zoom is critical
- 15-30 minutes of work

**My recommendation:** Start with **Option C** - create just one Excalidraw version of Quote-to-Cash Flow to test it out, then decide if you want to create more.

---

## See Also

- [[How to Zoom Mermaid Diagrams]] — Zoom solutions for Mermaid
- [[How to Present Diagrams in Obsidian]] — Presentation methods
- [[How to Create Diagrams in Obsidian]] — Creating both types

---

## Want Me to Create an Excalidraw Example?

I can create a simple Excalidraw file for you to see how it works, but it requires manual creation (I'd need to write the JSON structure).

**Easier:** You create one in Obsidian UI (5 minutes):
1. Right-click → "Create new Excalidraw drawing"
2. Draw 4 boxes + arrows for Quote-to-Cash
3. Color-code to match Mermaid
4. Done!

Then you'll have a **fully zoomable, pannable** diagram for presentations!

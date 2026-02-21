---
owner: Gareth
status: approved
last_reviewed: 2026-02-21
---

# Key Corrections: Quotation to Sales Order Flow

## ⚠️ Critical Corrections from Original Understanding

### ❌ INCORRECT (Original Understanding)
```
Quotation OPEN → Convert to SO → Quotation immediately becomes CONVERTED
```

### ✅ CORRECT (Actual System Behavior)
```
Quotation OPEN → Convert to SO → Quotation stays OPEN
                                   ↓
                            SO created in DRAFT
                                   ↓
                            (Edit SO as needed)
                                   ↓
                            Submit SO → SO becomes TO BILL
                                     → Quotation becomes ORDERED
```

---

## The Two-Step Process

### Step 1: Create SO from Quote
**Action:** User clicks "Convert to Sales Order" on OPEN Quote

**What Happens:**
- ✅ Sales Order created in **DRAFT** status
- ✅ Quotation remains in **OPEN** status (NOT converted yet)
- ✅ Data copied from Quote to SO
- ✅ SO can be edited freely

**Quotation Status:** Still **OPEN**

---

### Step 2: Submit Sales Order
**Action:** User clicks "Submit" on DRAFT SO

**What Happens:**
- ✅ Sales Order changes to **TO BILL** status
- ✅ Sales Order becomes locked (cannot edit)
- ✅ Quotation automatically changes to **ORDERED** status
- ✅ Order is now confirmed

**Quotation Status:** Changes to **ORDERED**

---

## Status Flow Comparison

### Original (Incorrect)
| Event | Quote Status | SO Status |
|-------|--------------|-----------|
| Create Quote | DRAFT | - |
| Submit Quote | OPEN | - |
| Convert to SO | CONVERTED ❌ | DRAFT |
| Submit SO | CONVERTED | TO BILL |

### Corrected (Actual)
| Event | Quote Status | SO Status |
|-------|--------------|-----------|
| Create Quote | DRAFT | - |
| Submit Quote | OPEN | - |
| Convert to SO | OPEN ✅ | DRAFT |
| Submit SO | ORDERED ✅ | TO BILL |

---

## Why This Matters for Testing

### 1. Status Verification Timing
```
❌ Wrong Test: Check Quote = CONVERTED after SO creation
✅ Right Test: Check Quote = OPEN after SO creation
✅ Right Test: Check Quote = ORDERED after SO submission
```

### 2. Edit Window for SO
```
✅ Create SO → SO in DRAFT → Edit items → Still editable
✅ During edits, Quote stays OPEN
❌ If SO locked immediately, this is a bug
```

### 3. Status Synchronization
```
✅ SO submit → Quote auto-updates to ORDERED
❌ If Quote still OPEN after SO submit, this is a bug
```

### 4. Mark as Lost Logic
```
✅ Quote OPEN → Convert to SO → "Mark as Lost" disabled
❌ If can still mark as Lost after SO created, this is a bug
```

---

## Updated Terminology

### Avoid These Terms:
- ❌ "Quote CONVERTED status"
- ❌ "Quote automatically converts"
- ❌ "Quote changes when SO created"

### Use These Terms:
- ✅ "Quote ORDERED status"
- ✅ "Quote remains OPEN until SO submitted"
- ✅ "Quote changes when SO submitted"
- ✅ "Two-step process: Create SO, then Submit SO"

---

## Common Mistakes to Avoid

### ❌ Mistake 1: Assuming Quote converts immediately
```
// WRONG
quote.convert_to_so()
→ quote.status should be "ORDERED"  ❌

// CORRECT
quote.convert_to_so()
→ quote.status should still be "OPEN"  ✅
so.submit()
→ quote.status should now be "ORDERED"  ✅
```

### ❌ Mistake 2: Testing SO edit lockdown too early
```
// WRONG: Create SO → Try to edit ❌ Expected: locked

// CORRECT:
Create SO → SO in DRAFT → Try to edit ✅ Expected: editable
Submit SO → SO in TO BILL → Try to edit ❌ Expected: locked
```

### ❌ Mistake 3: Wrong status assertion
```
// WRONG
assert quote.status == "CONVERTED"  ❌

// CORRECT
After SO creation: assert quote.status == "OPEN"  ✅
After SO submission: assert quote.status == "ORDERED"  ✅
```

---

## Summary

**Key Takeaway:**
The quotation to sales order flow is a **two-step process**:
1. **Create SO** (Quote stays OPEN, SO is DRAFT and editable)
2. **Submit SO** (Quote becomes ORDERED, SO becomes TO BILL and locked)

This allows flexibility for sales teams to adjust orders before final confirmation.

---

## See Also

- [[Quotation to Sales Order Status Guide]]
- [[Sales Order Workflow Guide]]
- [[Invoice Workflow Guide]]

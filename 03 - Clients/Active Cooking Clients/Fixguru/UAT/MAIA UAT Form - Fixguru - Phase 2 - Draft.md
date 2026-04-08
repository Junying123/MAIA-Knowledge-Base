---
owner: Gareth
status: draft
last_reviewed: 2026-04-08
client: Fixguru
uat_round: 2
---

# MAIA User Acceptance Test (UAT) — Fixguru
## Phase 2 · Custom Box Calculator & eInvoice

---

## Before You Start

**Status:** 🚧 Draft — pending feature completion
**UAT Period:** TBD
**Sign-Off Deadline:** TBD
**Go-Live (Phase 2):** TBD

| Feature | Dev Status | Ready for UAT |
| ------- | ---------- | ------------- |
| Custom Box Calculator (RSC Sheet) | In testing — bug fix in progress | ❌ Not yet |
| Custom Box Calculator (Diecut Sheet) | In testing — bug fix in progress | ❌ Not yet |
| eInvoice / AutoCount Sync | Dev in progress | ❌ Not yet |

**Scope note:** This UAT covers Phase 2 features — the Custom Box Calculator (RSC and Diecut) and eInvoice integration with AutoCount. Phase 1 core MAIA is covered in the Phase 1 UAT form.

**Web App:** https://maia-fe-fixguru.vercel.app/login

---

## Your Login Details

| Name         | Role (Client)      | Role (MAIA)     | Email                          | Password |
| ------------ | ------------------ | --------------- | ------------------------------ | -------- |
| Xiao Ling    | Sales              | Sales User      | xiaoling@iamworldwide.com.my   | 123456   |
| Hayati       | Sales              | Sales User      | hayati@iamworldwide.com.my     | 123456   |
| Zuha         | Sales              | Sales User      | zuha@iamworldwide.com.my       | 123456   |
| Syahira      | Sales              | Sales User      | syahira@iamworldwide.com.my    | 123456   |
| Abishaah     | Finance Manager    | Finance Manager | abishaah@iamworldwide.com.my   | 123456   |
| Wendy Wang   | Finance Manager    | Finance Manager | wendy@iamworldwide.com.my      | 123456   |
| Nisa         | Finance Assistant  | Finance User    | nisa@iamworldwide.com.my       | 123456   |
| Marcus Lim   | Admin              | Admin           | marcus@iamworldwide.com.my     | 123456   |

---

## How to Use This Document

1. Work through each test **in order**.
2. For each step, do what is described and check that what you see matches the **"What you should see"** column.
3. After each test, tick your result and write any notes in the feedback box.
4. If something does not work as expected, mark it **Fail** and describe what happened.
5. If you are unsure or something is not loading, mark it **Issue** and contact Gareth.

**Result options:**
- ✅ **Pass** — Everything worked as described
- ❌ **Fail** — Something did not work correctly
- ⚠️ **Issue** — Could not complete the test (e.g., button missing, page not loading)

**Reporting issues:** If you find a bug or something is not working correctly, use **Jam** to record your screen and share the issue with the MAIA team.
→ [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

---

## Tests

---

### Group 1 — Custom Box Calculator

*Who tests this group: any **Sales** user (Xiao Ling, Hayati, Zuha, or Syahira)*

*The Custom Box Calculator appears inside the Quotation when adding items. It calculates the box price based on dimensions and material type using Fixguru's RSC and Diecut formulas.*

---

#### Test 1 — RSC Sheet Calculator

*Who tests this: **Xiao Ling** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in. Create a new **Quotation**. In the item section, click **Use Calculator**. | The Custom Box Calculator opens. |
| 2 | Select **RSC** as the box type. | RSC Sheet input fields appear — dimensions, quality, and other required fields. |
| 3 | Fill in the required fields (dimensions, quality, quantity). | Fields are accepted. No errors shown. |
| 4 | Click **Next** or **Calculate**. | The calculator computes the price based on the RSC formula. A unit price is shown. |
| 5 | Check that the calculated price looks correct based on the inputs. | Price matches the expected output from Fixguru's RSC calculation logic. |
| 6 | Confirm and add the item to the Quotation. | Item is added to the Quotation with the calculated price. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 2 — Diecut Sheet Calculator

*Who tests this: **Hayati** (Sales)*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Log in. Create a new **Quotation**. In the item section, click **Use Calculator**. | The Custom Box Calculator opens. |
| 2 | Select **Diecut** as the box type. | Diecut Sheet input fields appear — dimensions, quality, and other required fields. |
| 3 | Fill in the required fields (dimensions, quality, quantity). | Fields are accepted. No errors shown. |
| 4 | Click **Next** or **Calculate**. | The calculator computes the price based on the Diecut formula. A unit price is shown. |
| 5 | Check that the calculated price looks correct based on the inputs. | Price matches the expected output from Fixguru's Diecut calculation logic. |
| 6 | Confirm and add the item to the Quotation. | Item is added to the Quotation with the calculated price. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

#### Test 3 — Calculator Price Flows into Quotation Correctly

*Who tests this: **Xiao Ling** (Sales) and **Marcus Lim** (Admin)*

*This checks that the price generated by the calculator is correctly carried through to the Quotation and can be submitted normally.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | Using the calculator (either RSC or Diecut), add at least 2 items to a Quotation with calculated prices. | Both items appear in the Quotation with the correct calculated prices. |
| 2 | Save the Quotation. | Quotation saved in Draft. Prices are retained correctly. |
| 3 | **Marcus Lim** (Admin) submits the Quotation. | Quotation submitted. Status changes to **OPEN**. Prices are unchanged. |
| 4 | Convert the Quotation to a **Sales Order**. | Sales Order created. Calculated prices carry over correctly from the Quotation. |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

### Group 2 — eInvoice

*Who tests this group: **Abishaah** or **Wendy Wang** (Finance Manager)*

*🚧 This group is pending dev completion. Steps will be filled in once the eInvoice integration is ready for testing. Note: Invoice sync to AutoCount is handled automatically — this group covers eInvoice generation and submission only.*

---

#### Test 4 — eInvoice Generation and Submission

*Who tests this: **Abishaah** or **Wendy Wang** (Finance Manager)*

*🚧 Steps to be confirmed once eInvoice dev is complete. Placeholder test case below.*

| Step | What to do | What you should see |
| ---- | ---------- | ------------------- |
| 1 | TBD — pending eInvoice dev completion. | TBD |

**Your result:**
- [ ] Pass
- [ ] Fail
- [ ] Issue

**Tested by:**
**Date:**

**Notes:**


---

## Results Summary

| Test # | What was tested | Result (Pass / Fail / Issue) | Tested by | Date |
| ------ | --------------- | ---------------------------- | --------- | ---- |
| Test 1 | RSC Sheet Calculator |  |  |  |
| Test 2 | Diecut Sheet Calculator |  |  |  |
| Test 3 | Calculator price flows into Quotation and SO correctly |  |  |  |
| Test 4 | eInvoice generation and submission |  |  |  |

**Total: 4 tests**

| Pass | Fail | Issue |
|------|------|-------|
|      |      |       |

---

## Overall Feedback

**Any general comments about the calculator or eInvoice feature?**



**Any fields or calculations that were confusing or incorrect?**



---

## Sign-Off

By signing below, the Fixguru team confirms that Phase 2 UAT has been completed and the results above are accurate.

| Name | Role | Signature | Date |
| ---- | ---- | --------- | ---- |
|      |      |           |      |
|      |      |           |      |

**Overall outcome:**
- [ ] **Approved — Ready to go live**
- [ ] **Conditional — Go live with the following items to fix first:**

*Conditions:*


- [ ] **Not approved — Further fixes required before go live**

---

## See Also

- [[03 - Clients/Active Cooking Clients/Fixguru/UAT/MAIA UAT Form - Fixguru - 2026-04]] — Phase 1 UAT
- [[03 - Clients/Active Cooking Clients/Fixguru/Client Overview]]
- [[Fixguru Timeline]]
- [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)

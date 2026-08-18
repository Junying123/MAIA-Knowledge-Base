<title>MAIA UAT Form - Holsen - March 2026 Copy</title>

# MAIA User Acceptance Test (UAT) — Holsen

## March 2026 · Round 1

---

## Before You Start

**UAT Period:** 18 March 2026 – 25 March 2026  
**Sign-Off Deadline:** 25 March 2026  
**Go-Live (Core MAIA):** 31 March 2026

### UAT Timeline

<sheet sheet-id="ns8ACE" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Scope note:** This UAT covers core MAIA only. C1/C3 compliance features and A57 tax exemption enforcement are not included in this round — they will be tested separately after go-live.  
> **Web App:** [https://maia-fe-holsen.vercel.app/login](https://maia-fe-holsen.vercel.app/login)  
> **Chatbot (during UAT):** Telegram — scan the QR code provided to open the MAIA Holsen chatbot
> 
> ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=MDc5Y2NkYmI3MWQxYzdkNjMwZjcyN2ZjYTJhZTcyZGJfMWMzYmM3ZjU1YTY4M2RiMjU1N2IwZDkzMGVjY2U3ZGFfSUQ6NzY2OTM1MzA3NTAzMDcwNzkzMl8xNzg2MDM3NzY2OjE3ODYwNDEzNjZfVjM)
> 
> **Chatbot (after go-live):** WhatsApp *(same features — WhatsApp setup is in progress)*

---

## Your Login Details

<sheet sheet-id="5P3RjW" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

---

## How to Use This Document

1. Work through each test **in order** — some tests use data created in earlier steps.
2. For each step, do what is described and check that what you see matches the **"What you should see"** column.
3. After each test, tick your result and write any notes in the feedback box.
4. If something does not work as expected, mark it **Fail** and describe what happened.
5. If you are unsure or something is not loading, mark it **Issue** and contact **Gareth**.
6. Sign off at the end when you are done.

> **About these test cases:** All tests in this document are based on the agreed MAIA scope in the Holsen SOW. If any test case does not match how your business works, or if you notice a step that seems incorrect, please do not guess — contact **Gareth** directly and we will review and update the test case before you proceed.

**Result options:**

- ✅ **Pass** — Everything worked as described
- ❌ **Fail** — Something did not work correctly
- ⚠️ **Issue** — Could not complete the test (e.g., button missing, page not loading)



**Reporting issues:** 

1. If you find a bug or something is not working correctly, use **Jam** to record your screen and share the issue with us.   
-> [How to Record and Share Issues with Jam](https://eg69120xnei.sg.larksuite.com/wiki/TeDLwCfCFiYmKSkAn40lHYFrg5c)
2. Copy the link and share it in the test cases or in the group

---

## Setup Checklist *(For MAIA team to complete before UAT starts)*

- All user accounts created and login details filled in above
- Customer records loaded (at least 3 test customers with name and address)
- Product catalogue loaded (at least 5 products with descriptions and pricing)
- Stock quantities loaded (at least 1 product at zero stock, 1 at low-stock level)
- Low-stock threshold configured (Safety Qty in Item)
- Delivery delay reminder threshold configured
- At least 1 product flagged as Poison in the system
- Test customer has full address and phone number 

---

## Tests

---

### Group 1 — Chatbot: Sending Orders

---

#### Test 1 — Send an Order by Text Message

*Who tests this:* ***Ng Tze Chien*** *or* ***Tam Ze Xin*** *(Sales Manager)*

<sheet sheet-id="S80RgF" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [x] Issue
> 
> **Tested by: Tam**  
> **Date: 26/5/26**  
> **Notes:** 



---

#### Test 2 — Send an Order by Photo 

*Who tests this:* ***Ng Tze Chien*** *or* ***Tam Ze Xin*** *(Sales Manager)*

<sheet></sheet>

> **Your result:**
> 
> - [ ] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam**  
> **Date: 14/5/26**
> 
> **Notes:** 

---

#### Test 3 — Send an Order by PDF

*Who tests this:* ***Ng Tze Chien*** *or* ***Tam Ze Xin*** *(Sales Manager)*

<sheet></sheet>

> ⚠️ **Note:** After the chatbot confirms the CPO is created, go to the web app to review the extracted details and convert the CPO to a Sales Order. This is covered in the Group 2 web app tests.
> 
> **Your result:**
> 
> - [ ] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam**  
> **Date: 14/5/26**
> 
> **Notes:**

---

#### Test 4 — Pricing and Stock Check

*Who tests this:* ***Ng Tze Chien*** *or* ***Tam Ze Xin*** *(Sales Manager) — continue from Test 1, 2, or 3.*

<sheet></sheet>

> **Your result:**
> 
> - [ ] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam**  
> **Date: 28/4/26**
> 
> **Notes:**



---

### Group 2 — Web App: Managing Orders

---

#### Test 5 — Generate Documents (Quotation → Sales Order → Proforma Invoice → Invoice)

*Who tests this:* ***Ng Tze Chien / Tam Ze Xin*** *(Sales Manager) for Step 1;* ***Noor Aili*** *(Logistics) or* ***Miss Wong*** *(Finance) for Steps 2–5*

*Continue from the order created in Test 4. Different roles handle different steps — coordinate as needed.*

> **Why different roles?** Sales Manager can create Quotations but cannot create or edit Sales Orders (view only). SO creation and Invoice submission must be done by Logistics or Finance.

<sheet></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam (Aili, Wong)**  
> **Date: 14/4/26**
> 
> **Notes:** 



---

#### Test 6 — Create a Credit Note and Debit Note

*Who tests this:* ***Miss Wong*** *(Finance)*

*Use an existing Invoice from Test 5.*

<sheet></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam (Wong)**  
> **Date: 14/4/26**
> 
> **Notes:**



---

#### Test 7 — Duplicate Order is Blocked

*Who tests this:* ***Ng Tze Chien*** *or* ***Tam Ze Xin*** *(Sales Manager)*

> **Note:** The duplicate check triggers when an existing order with the same PO number is already in **TO BILL** (submitted) status. Draft orders are not checked.

<sheet></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam**  
> **Date: 26/5/26**
> 
> **Notes:**
> 
> Unable to proceed due to test 2 and test 3 not working.



---

#### Test 8 — Manage Sales Orders on the Web App

*Who tests this:* ***Noor Aili*** *(Logistics) or* ***Miss Wong*** *(Finance) for SO creation;* ***Ng Tze Chien*** *(Sales Manager) for view-only check*

> **Note:** Sales Manager has view-only access to Sales Orders. SO creation and editing is done by Logistics (Noor Aili) or Finance (Miss Wong).

<sheet></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam (Aili, Ng)**  
> **Date: 14/4/26**
> 
> **Notes:**

---

#### Test 9 — Export Sales Order / Sales Invoice / Delivery Note as CSV

*Who tests this: Admin*

Exports these document types from MAIA as CSV files for downstream processing and checking.

<sheet></sheet>

⚠️ **Note:** This test is to confirm that the required document types can be exported correctly as CSV from MAIA.

**Your result:**

- [ ] Pass

- [ ] Fail

- [ ] Issue

**Tested by:**  
**Date:**

**Notes:**

---

### Group 3 — Logistics: Deliveries and Stock Alerts

---

#### Test 10 — Create a Delivery Order and Picking List

*Who tests this:* ***Noor Aili*** *(Logistics)*

<sheet></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam (Aili)**  
> **Date: 14/4/26**
> 
> **Notes:** 
> 
> Pick list pdf : SO ref & warehouse not important
> 
> Require batch number / barcode

---

#### Test 10A — Delivery Note Batch Number Carries Over to Pick List

*Who tests this:* ***Noor Aili*** *(Logistics)*

<sheet></sheet>

**Your result:**

- [ ] Pass

- [ ] Fail

- [ ] Issue

**Tested by:**  
**Date:**

**Notes:**

---

#### Test 10B — Exact Selected Batch Number Stays Correct and Visible in Pick List

*Who tests this:* ***Noor Aili*** *(Logistics)*

<sheet></sheet>

**Your result:**

- [ ] Pass

- [ ] Fail

- [ ] Issue

**Tested by:**  
**Date:**

**Notes:**

---

#### Test 11 — Stock Alerts (Out of Stock and Low Stock)

*Who tests this:* ***Noor Aili*** *(Logistics) and* ***Ng Tze Chien / Tam Ze Xin*** *(Sales Manager) — both should see the alerts*

<sheet></sheet>

> **Your result:**
> 
> - [ ] Pass
> 
> - [x] Fail
> 
> - [x] Issue
> 
> **Tested by: Tam (Aili)**  
> **Date: 28/4/26**
> 
> **Notes:**
> 
> ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NGRkZGQ1MjQ5ZmVkNDNhMmI4MDQ1NzZmYmVhOTEwMzZfZTdlOTJiNzhmNTQ4YTg0YTQwZWU2YTA4NDNiN2I5OTJfSUQ6NzY2OTM1MzA3OTMyNTYwOTcwNV8xNzg2MDM3NzY2OjE3ODYwNDEzNjZfVjM)
> 
> ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=ZDA3NDA5OTcxYjEwNjIxZTYwNzU4NzZiYTAzYjliNWZfOGNiZWE2MWFjYzFiOTFiOWFhZDE2MmNjOWI2ZDgzZTNfSUQ6NzY2OTM1MzA3ODQ3NDE2NTk4Ml8xNzg2MDM3NzY2OjE3ODYwNDEzNjZfVjM)
> 
> ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YjVkOWUxZWM2MjcwNmFjMDk1NWExZDFhOWE0YTZhZDRfNWNlNTQzMTgyNWNjNTQ5NzJiZmZiYmQ2MTVhOTk3OGJfSUQ6NzY2OTM1MzA3NjI4OTAzMTkwMV8xNzg2MDM3NzY2OjE3ODYwNDEzNjZfVjM)
> 
> ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=Y2ZmNTUxNWE3OWQ0ZmUzZTE0ZmI4MWEzODMzOWVkNzlfN2VhOTBkYjhmYTdjOGM3ZTNkNjk1ODA4Y2U4ZTAwNjBfSUQ6NzY2OTM1MzA3NjI4OTA0ODI4NV8xNzg2MDM3NzY2OjE3ODYwNDEzNjZfVjM)
> 
> ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YTFmYWNkNTk3NjJjNTBjNzFlM2RiYzJkYzk5NDQ3NDlfNjVhZDdjMTI2ZDZiODgzNzc3NDQ4OTgyNjRjNTM1MDNfSUQ6NzY2OTM1MzA3NTY2NDA0Nzg0MF8xNzg2MDM3NzY2OjE3ODYwNDEzNjZfVjM)
> 
> Tested on item ammonium persulfate. Did stock recon to 0 quantity. No notification popup. Item does not show up in Out Of Stock tab. Shows up in Low Stock tab instead. Same with ammonium bifluoride. No alerts or notification even after stock falls below the safety stock limit.



Low stock tab and out of stock tab reverse

Noor aili logistics manager, no notification

---

#### Test 12 — Delivery Delay Reminder

*Who tests this:* ***Noor Aili*** *(Logistics)*

<sheet></sheet>

> ⚠️ **Note:** If you cannot find an overdue Invoice to test this, please contact Gareth to set one up.
> 
> **Your result:**
> 
> - [ ] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by:**   
> **Date:**
> 
> **Notes:**

---

### Group 4 — Logging In

---

#### Test 13 — All Users Can Log In

*Who tests this:* ***Everyone*** *— all 8 users log in with their own account*

<sheet></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by:**  
> **Date:**
> 
> **Notes:**

---

### Group 5 — What Each Person Can and Cannot Do

*Each person tests their own account. Check that you can do the things listed, and that you are blocked from things outside your role.*

---

#### Test 14 — Sales Manager Access Check

*Who tests this:* ***Ng Tze Chien*** *or* ***Tam Ze Xin*** *(Sales Manager)*

<sheet sheet-id="MCUFfd" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam (Ng acct)**  
> **Date: 14/4/26**
> 
> **Notes (list any step that did not behave as expected):**

---

#### Test 15 — Logistics / Operations Access Check

*Who tests this:* ***Noor Aili*** *(Logistics — Operations)*

<sheet sheet-id="myGU5z" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [ ] Pass
> 
> - [x] Fail
> 
> - [x] Issue
> 
> **Tested by: Tam**  
> **Date: 14/4/26**
> 
> **Notes (list any step that did not behave as expected):**
> 
> 1. Qty shown up in DO is different from the qty in sales order. Could be because managed to update the Wt UOM to 50kg.
> 
> ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NTI1ODQ3NThmZTViNDZkNjM2ODZlODc3NjQ1ZjMwYWRfNTQ3MWQwMDJlYmM4YmU3NzgyOGY1YmM4NjZkNzI3NDhfSUQ6NzY2OTM1MzEwMTExNTAzNTM2OV8xNzg2MDM3NzY2OjE3ODYwNDEzNjZfVjM)
> 
> 1. ~~Possible to leave out the warehouse info from the pick list? Not necessary for current practice.~~
> 2. 



---

#### Test 16 — Logistics / Procurement Access Check

*Who tests this:* ***Intan Atikah*** *(Logistics — Procurement)*

<sheet sheet-id="IhA83l" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [ ] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: Tam**  
> **Date: 1/4/26**
> 
> **Notes (list any step that did not behave as expected):**

---

#### Test 17 — Logistics / Production Access Check

*Who tests this:* ***Murugesu*** *(Logistics — Production)*

<sheet sheet-id="2nSejB" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [x] Issue
> 
> **Tested by:**  
> **Date:**
> 
> **Notes (list any step that did not behave as expected):**
> 
> Please remove access to customer list

---

#### Test 18 — Finance Manager Access Check

*Who tests this:* ***Miss Wong*** *(Finance)*

<sheet sheet-id="AXLZSd" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by:**  
> **Date:**
> 
> **Notes (list any step that did not behave as expected):**

---

#### Test 19 — Admin Access Check

*Who tests this:* ***Ong Siow Chui*** *or* ***Tam Ze Xin*** *(Admin)*

<sheet sheet-id="oRyfb1" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by:**  
> **Date:**
> 
> **Notes (list any step that did not behave as expected):**

---

#### Test 20 — System Admin Access Check

*Who tests this:* ***Chin Zhao Heng*** *(System Admin)*

<sheet sheet-id="V6YCN2" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [x] Issue
> 
> **Tested by:**  
> **Date:**
> 
> **Notes (list any step that did not behave as expected):**
> 
> Cannot edit minimum price for items

---

#### Test 21 — Role Approval Flow

*Who tests this:* ***All roles*** *— coordinate as a group across all steps*

**Part A — Quotation & Purchase Order (Sales Manager submits)**

<sheet sheet-id="QQhOSD" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part B — Sales Order submission (Logistics and Finance can create and submit)**

> **Note:** Sales Manager has view-only access on Sales Orders — SO drafts are created by Logistics or Finance.

<sheet sheet-id="twrfD8" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part C — Delivery Order submission (Logistics and Finance can submit)**

<sheet sheet-id="eUBoxJ" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part D — Pick List submission (Logistics — Noor Aili)**

<sheet sheet-id="3kPutG" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part E — Invoice submission (Finance submits)**

<sheet sheet-id="SdkrSg" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part F — Receipt / Payment submission (Finance creates; Finance and Admin can submit)**

> **Note:** Admin can submit Receipts but cannot create them. Finance (Miss Wong) creates the Receipt; Admin can then submit it.

<sheet sheet-id="h3V0ON" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [ ] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by:** (coordinate across team)  
> **Date:**
> 
> **Notes (note the step number if any step failed):**

---

### Group 6 — Poison Signed Order (PSO)

> **What is this?** Holsen requires to attach a signed Poison Signed Order (PSO) form to every delivery that contains poison products. MAIA generates this form automatically when needed.



---

#### Test 22 — Poison Signed Order (PSO) — Full Test

Who tests this:  **Noor Aili** (Logistics) or ***Tam Ze Xin (Admin)***

<sheet sheet-id="WritJs" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

> **Your result:**
> 
> - [x] Pass
> 
> - [ ] Fail
> 
> - [ ] Issue
> 
> **Tested by: TAM**  
> **Date: 11/5/26**
> 
> **Notes (if any step failed, note the step number and describe what happened):\**

---

#### Test 23 — Tagging and Trading Item Price Prompt Alert

*Who tests this:* ***Ng Tze Chien*** *or* ***Tam Ze Xin*** *(Sales Manager)*

<sheet sheet-id="ZjNDJu" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by: Tam**  
**Date:**   
**Notes:**



### Group 7: Tax Reference / Certificate (C1 & C3)

---

#### Test 24 — Upload C1 Certificate via PDF

Who tests this: **[Admin]** or **[Sales Manager]**  
Channel: **FE + Chatbot**

<sheet sheet-id="lTB8xw" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by: Tam**  
**Date: 26/5/26**  
**Notes: Uploaded C1 cert for Guan Huat**

---

#### Test 25 — Apply C1 Certificate on Sales Order — All Items Covered

Who tests this: **[Sales Manager]** or **[Finance / Logistics]**  
Channel: **FE + Chatbot**

**Part A — Get the Sales Order via Chatbot**

<sheet sheet-id="3SLIRv" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part B — Get the Sales Order via Web App**

<sheet sheet-id="d6yglz" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [ ] Pass

- [ ] Fail

- [ ] Issue

**Tested by:**  
**Date:**  
**Notes:**

---

#### Test 26 — Apply C1 Certificate — Partial Coverage + Save

Who tests this: **[Sales Manager]** or **[Finance / Logistics]**  
Channel: **FE + Chatbot**

**Part A — Get the Sales Order via Chatbot**

<sheet sheet-id="xjDJ37" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part B — Get the Sales Order via Web App**

<sheet sheet-id="LZmEgh" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [ ] Pass

- [ ] Fail

- [ ] Issue

**Tested by:**  
**Date:**  
**Notes:**

---

#### Test 27 — Upload C3 Certificate via PDF

Who tests this: **[Admin]** or **[Sales Manager]**  
Channel: **FE + Chatbot**

<sheet sheet-id="OTAqK4" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by: Tam**  
**Date: 26/5/26**  
**Notes: Uploaded C3 cert for Guan Huat**

---

#### Test 28 — Apply C3 Certificate on Sales Order — All Items Covered

Who tests this: **[Sales Manager]** or **[Finance / Logistics]**  
 Channel: **FE + Chatbot**

**Part A — Get the Sales Order via Chatbot**

<sheet sheet-id="xaQsVh" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part B — Get the Sales Order via Web App**

<sheet sheet-id="Qvgn3r" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part C — Apply C3 Certificate (both paths continue here)**

<sheet sheet-id="psZv89" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by: Tam**  
**Date: 26/5/26**  
**Notes:** 

---

#### Test 29 — C3 Certificate — Ineligible Items Removal Prompt

Who tests this: **[Sales Manager]** or **[Finance / Logistics]**  
Channel: **FE + Chatbot**

**Part A — Get the Sales Order via Chatbot**

<sheet sheet-id="X5mfee" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part B — Get the Sales Order via Web App**

<sheet sheet-id="VLkzQb" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part C — Apply C3 Certificate and Test Removal Prompt (both paths continue here)**

<sheet sheet-id="06SLZj" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by:**  
**Date:**  
**Notes:**

---

#### Test 30 — Link Certificate to CPO at Upload Time (C1 + C3)

Who tests this: **[Admin]** or **[Sales Manager]**  
Channel: **FE + Chatbot**

**Part A — via Chatbot**

<sheet sheet-id="qwX87a" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Part B — via Web App**

<sheet sheet-id="B4Zux6" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [ ] Pass

- [ ] Fail

- [ ] Issue

**Tested by:**  
**Date:**  
**Notes:**

---

#### Test 31 — CPO with Certificate Converts to SO — Cert Carries Over

Who tests this: **[Admin]** or **[Sales Manager]**  
 Channel: **FE only**

*Continue from Test 32 — a CPO with a certificate already linked.*

<sheet sheet-id="umLjqM" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by: Tam**  
**Date: 26/5/26**  
**Notes: Guan Huat**

---

#### Test 32 — SO Submit Blocked — C3 Missing Required Attachments

Who tests this: **[Sales Manager]** or **[Finance / Logistics]**  
 Channel: **FE + Chatbot**

<sheet sheet-id="QuLlQD" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by: Tam**  
**Date: 26/5/26**  
**Notes: Guan Huat**

---

#### Test 33 — SO Submit Blocked — Item HS Code Not in Certificate

Who tests this: **[Sales Manager]** or **[Finance / Logistics]**  
 Channel: **FE + Chatbot**

<sheet sheet-id="V6tQwU" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Your result:**

- [x] Pass

- [ ] Fail

- [ ] Issue

**Tested by: Tam**  
**Date: 26/5/26**  
**Notes:**

---

## Results Summary

<sheet sheet-id="kBtS66" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Total: 36 tests**

<sheet sheet-id="iaoSVl" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

---

## Overall Feedback

**Any general comments about the system?**







**Any features that were confusing or difficult to use?**





---

## Sign-Off

By signing below, the Holsen team confirms that UAT has been completed and the results above are accurate.

<sheet sheet-id="9lqNRX" token="YmAgs5bH4hxPJwtUWUmlO3qOghg"></sheet>

**Overall outcome:**

- [ ] **Approved — Ready to go live**

- [ ] **Conditional — Go live with the following items to fix first:**

*Conditions:*

- [ ] **Not approved — Further fixes required before go live**

---

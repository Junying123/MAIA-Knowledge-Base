# MAIA Chatbot - Compound Multistep Query Examples

UAT Reference · Realistic Malaysian User Language · v0.3

## How to Read This

Each example shows:

- User message - single compound query, realistic Malaysian language
- Happy path - what the bot executes silently when everything resolves
- Failure dialogue - what the bot says when it hits a blocker, and how the user resumes

Failure types the bot must handle:

| Code | Type | Bot Behaviour |
| --- | --- | --- |
| F-NOT-FOUND | Document/record doesn't exist | State what it found, what it can't find. Ask to clarify or skip. |
| F-AMBIGUOUS | Multiple matches for a name/ID | Present options. Wait for user to pick. |
| F-BLOCKED | Action not allowed in current doc state | Explain why. Offer the correct path. |
| F-DESTRUCTIVE | Irreversible action on multiple records | Show count + list. Require explicit confirm. |
| F-MISSING-DATA | Required field not in user message | Ask for the specific missing value only. |
| F-PARTIAL | Bulk operation, some records fail | Execute what succeeded. Report failures with reasons. |
| F-DEPENDENCY | Downstream doc exists, blocks amendment | Surface the dependency. Let user decide. |
| F-IMAGE | Payment proof image unreadable or data missing | Ask user to re-send or type the value manually. |

Pause/Resume rules:

- Bot saves task state when it stops to clarify
- User can answer directly (`SO-0123` / `skip that one` / `yes confirm`)
- Bot resumes from the exact step it paused on, not from the start
- If user sends a new unrelated message while a task is paused, bot flags: `"Ada task pending - nak sambung atau cancel task?"`

Query tags used in this document:

| Tag | Meaning |
| --- | --- |
| `[BULK]` | Batch operation across multiple records |
| `[CHAIN]` | Sequential dependent actions - output of step A feeds step B |
| `[AMEND]` | Cancel / amend / resubmit flow |
| `[CROSS-DOC]` | Spans more than one doctype |
| `[AMBIGUOUS]` | User input requires inference or clarification before acting |
| `[DESTRUCTIVE]` | Irreversible or hard-to-reverse action |
| `[IMAGE]` | User attaches a photo or screenshot |

## 1. Sales User

Sales users work across cRFQ → Quotation → Sales Order → Sales Invoice. Queries tend to be about creating, converting, fixing, and chasing.

### S-01 · Convert QT to SO then generate invoice `[CHAIN] [CROSS-DOC]`

User message:

```text
qt 0045 dah confirm customer, tolong convert jadi SO then terus buat invoice sekali
```

Happy path:

Find `QT-0045` → convert to `SO` → submit → generate `SI` → return `SO` + `SI` numbers

Failure scenario A - QT not found `F-NOT-FOUND`

```text
❌ Tak jumpa QT-0045. Boleh check balik nombor quotation tu? Atau mungkin dia ada dalam company lain?

User: oh sorry, QT-0054

✅ Ok, jumpa QT-0054 - Restoran Maju, RM4,200. Nak proceed convert jadi SO?

User: yes

✅ Done. SO-0312 created and submitted. SI-0188 generated. Nak send invoice kat customer?
```

Failure scenario B - QT already converted `F-BLOCKED`

```text
⚠️ QT-0045 dah ada linked SO - SO-0289. Tak boleh convert lagi.

Nak saya generate invoice dari SO-0289 terus?

User: ha ah, buat invoice dari SO-0289

✅ SI-0186 created from SO-0289.
```

### S-02 · Bulk create SOs for same customer `[BULK] [CHAIN]`

User message:

```text
create 3 order untuk Restoran Cahaya

order 1: ayam 20kg, bawang 5kg
order 2: ikan kembung 15kg, telur 10 tray
order 3: sayur sawi 8kg, carrot 3kg, tauhu 20pcs

delivery semua 3 hari lagi
```

Happy path:

Create `SO-1`, `SO-2`, `SO-3` for Restoran Cahaya, delivery date = today + 3

Failure scenario A - Customer name ambiguous `F-AMBIGUOUS`

```text
🔍 Ada 2 customer nama "Restoran Cahaya":

Restoran Cahaya Sdn Bhd (Klang)
Restoran Cahaya Jaya (Puchong)
Yang mana satu?

User: yang klang

✅ Ok, Restoran Cahaya Sdn Bhd. Proceed create 3 orders?
```

Failure scenario B - Item not found in one order `F-NOT-FOUND`

```text
⚠️ Order 2 ada masalah - "telur 10 tray" tak jumpa dalam item list. Nama exact dia apa? Atau nak skip item ni dulu?

User: telur ayam gred A, 10 tray

✅ Jumpa - Telur Ayam Gred A (UOM: tray). Update order 2 dengan item ni?

User: yes

✅ SO-0401, SO-0402, SO-0403 created. Delivery date: 16 May. All 3 submitted.
```

Failure scenario C - Partial item failure across multiple orders `F-PARTIAL`

```text
⚠️ 2/3 orders dah create. Order 3 ada masalah - "tauhu 20pcs" tak jumpa dalam system.

SO-0401 ✅ (Order 1)
SO-0402 ✅ (Order 2)
Order 3 ❌ - tauhu not found

Nak saya create Order 3 tanpa tauhu dulu, atau hold sampai confirm item?
```

### S-03 · Fix wrong price on submitted QT `[AMEND] [CHAIN]`

User message:

```text
eh QT-0089 salah harga la, ikan tenggiri patut RM28/kg bukan RM18. cancel and fix then resubmit
```

Happy path:

Cancel `QT-0089` → amend → update price → resubmit

Failure scenario - SO and SI already exist downstream `F-DEPENDENCY`

```text
⚠️ QT-0089 dah convert jadi SO-0201, dan SO-0201 ada linked SI-0099 yang dah submitted.

Untuk fix harga, kena:

Cancel SI-0099
Cancel SO-0201
Cancel QT-0089
Amend QT → fix harga → resubmit chain
Ini akan affect invoice yang dah keluar. Nak proceed?

User: aduh ok proceed la

✅ Chain cancelled. QT-0089 amended - ikan tenggiri updated to RM28/kg. Resubmitted as QT-0089-1.

SO dan SI perlu regenerate. Nak saya buat sekarang?
```

### S-04 · "Same as last week" order `[AMBIGUOUS] [CROSS-DOC]`

User message:

```text
Ahmad dari syarikat Bestari Food tadi call confirm order. same as last week punya. buat SO terus
```

Failure scenario - Must not guess, multiple SOs last week `F-AMBIGUOUS`

```text
🔍 Last week ada 2 SOs untuk Bestari Food:

SO-0377 - 16 May - Cooking oil 25L x10, Tepung gandum 20kg - RM1,840
SO-0381 - 17 May - Gula 50kg, Minyak sapi 10kg - RM620
Yang mana nak duplicate?

User: SO-0377

✅ Create SO baru for Bestari Food dengan same items as SO-0377?

Cooking oil 25L × 10 - RM1,840
Tepung gandum 20kg
Delivery date?

User: lusa

✅ SO-0412 created and submitted. Delivery: 15 May.
```

### S-05 · Bulk postpone delivery dates `[BULK] [DESTRUCTIVE]`

User message:

```text
semua SO untuk bulan ni yang belum deliver, postpone delivery date by 2 days sebab lorry kena servis
```

Failure scenario - Large destructive bulk, require confirm `F-DESTRUCTIVE`

```text
⚠️ Jumpa 23 SOs dengan delivery date bulan ni, status belum delivered.

Ini akan push delivery date semua forward 2 hari. Nak proceed? (Type 'yes' untuk confirm, atau 'show list' untuk tengok semua dulu)

User: show list

SO-0300 · Restoran Maju · 13 May → 15 May
SO-0301 · Kim Lee Enterprise · 14 May → 16 May
SO-0302 · Ah Seng Trading · 14 May → 16 May
... (+20 more)

Confirm update semua 23?

User: yes confirm

✅ 23 SOs updated. Delivery dates pushed by 2 days.
```

### S-06 · CPO received - match to QT and convert `[CHAIN] [CROSS-DOC]`

User message:

```text
Farmhouse baru send PO, no dia PO-FB-2024-112. match dgn QT-0091 then convert jadi SO
```

Happy path:

Log CPO reference `PO-FB-2024-112` → match against `QT-0091` → validate → convert to `SO`

Failure scenario - Price mismatch between CPO and QT `F-BLOCKED`

```text
⚠️ CPO PO-FB-2024-112 ada price mismatch dengan QT-0091:

Cooking oil 25L: CPO says RM88/carton, QT says RM92/carton
Proceed dengan QT price (RM92), atau update QT ikut CPO price?

User: ikut QT price, dorang yang salah

✅ QT-0091 matched to CPO. Converting to SO-0415. CPO discrepancy noted in remarks.
```

### S-07 · Customer cancelled items from confirmed SO `[AMEND] [CROSS-DOC]`

User message:

```text
SO-0234 customer mintak remove frozen prawn and crab stick, dah confirm. update SO and kalau dah ada invoice cancel invoice dulu
```

Happy path:

Check if `SI` exists against `SO-0234` → if yes, cancel `SI` first → cancel `SO` → amend → remove items → resubmit `SO`

Failure scenario - DN already dispatched `F-DEPENDENCY`

```text
⚠️ SO-0234 ada DN-0188 yang dah status Dispatched. Goods mungkin dah dalam perjalanan.

Nak proceed amend SO? Ini mungkin perlu return note lepas delivery kalau barang dah hantar.

User: check dgn driver dulu. hold SO, cancel invoice je dulu

✅ SI-0201 cancelled. SO-0234 put on hold - no changes to SO or DN yet.
Remind me to follow up on SO-0234?

User: ya

✅ ToDo created: "SO-0234 - check with driver on frozen prawn + crab stick. Pending SO amend or return note."
```

## 2. Logistics User

Logistics users work across Pick List → Delivery Note → Delivery Trip. Queries are about status updates, bulk marking, trip assignment, and fixing delivery records.

### L-01 · Mass mark DNs as delivered `[BULK] [DESTRUCTIVE]`

User message:

```text
DN 200 sampai 230 semua dah delivered hari ni. mark semua as deliverd
```

(typo `deliverd` - intentional)

Happy path:

Expand range `DN-200` to `DN-230` (31 records) → bulk mark Delivered

Failure scenario - Some DNs in wrong state `F-PARTIAL`

```text
⚠️ Dari DN-200 hingga DN-230 (31 records):

28 DNs - boleh mark sebagai Delivered ✅
DN-204 - status masih Draft, belum submit ❌
DN-211 - dah Cancelled ❌
DN-219 - dah marked Delivered sebelum ni ❌
Proceed mark 28 yang valid? DN-204, 211, 219 akan skip.

User: proceed

✅ 28 DNs marked as Delivered.
DN-204, DN-211, DN-219 skipped. Nak saya flag DN-204 untuk follow up?
```

### L-02 · Mark delivery, create return note, fix return note `[CHAIN] [CROSS-DOC]`

User message:

```text
DN 002 mark as delivery, create a return note and submit, remove item 004 from the return note
```

Happy path:

Mark `DN-002` Delivered → create Return Note → remove item row 4 → submit `RN`

Failure scenario A - DN already delivered `F-BLOCKED`

```text
⚠️ DN-002 dah ada status Delivered dari semalam.

Skip marking, terus create return note?

User: ha ah skip, create return note je

✅ Return Note RN-0041 drafted from DN-002. Removing item 004...
✅ Item 004 (Ikan Kembung 5kg) removed. Submitting...
✅ RN-0041 submitted.
```

Failure scenario B - Item row 004 doesn't exist on that DN `F-NOT-FOUND`

```text
⚠️ DN-002 ada 3 items je (rows 001, 002, 003). Item row 004 tak wujud.

Items dalam DN-002:

Ayam Beku 10kg
Ikan Tenggiri 5kg
Udang 3kg
Mana satu nak remove dari return note?

User: remove ikan tenggiri

✅ Row 002 (Ikan Tenggiri 5kg) removed from RN-0041. Submitting...
✅ RN-0041 submitted.
```

### L-03 · Short delivery - update DN and notify sales owner `[CHAIN] [CROSS-DOC]`

User message:

```text
driver cakap DN-0088 short deliver, ayam only bagi 15kg instead of 20kg. update dn and inform sales owner
```

Failure scenario - DN already submitted, need amend `F-BLOCKED`

```text
⚠️ DN-0088 dah submitted. Kena cancel → amend untuk update qty.

Ini akan affect SO-0299 (parent). Nak proceed amend?

User: ok proceed

✅ DN-0088 amended - Ayam updated from 20kg → 15kg.
Remaining 5kg flagged as backorder on SO-0299.

Sales owner SO-0299 ialah Farah. Notify via?

WhatsApp
System ToDo
Both
User: both

✅ WhatsApp sent to Farah. ToDo created: "DN-0088 short delivery - 5kg ayam outstanding."
```

### L-04 · Assign DNs to delivery trip, print checklist `[BULK] [CHAIN]`

User message:

```text
trip esok pagi, masukkan DN-0101, DN-0102, DN-0105, DN-0108 semua untuk driver Ali. assign trip and print checklist
```

Failure scenario A - Driver name ambiguous `F-AMBIGUOUS`

```text
🔍 Ada 2 driver nama "Ali":

Ali bin Hassan (KL zone)
Ali Imran (PJ zone)
Yang mana?

User: Ali bin Hassan
```

Failure scenario B - One DN not ready `F-BLOCKED`

```text
⚠️ DN-0105 masih status Draft - belum submit. Tak boleh masuk trip.

Skip DN-0105 dan proceed dengan DN-0101, 0102, 0108?

User: skip dulu, proceed yang lain

✅ Delivery Trip DT-0044 created.
Driver: Ali bin Hassan | Date: 14 May
Stops: DN-0101, DN-0102, DN-0108
DN-0105 excluded.

Checklist ready. [Download PDF]
```

### L-05 · Wrong customer on DN - cancel, fix, reassign trip `[AMEND] [CHAIN]`

User message:

```text
alamak DN-0099 salah customer la, patut untuk Kim Lee bukan Ah Seng. cancel dn, fix customer, then reassign balik dalam trip T-045
```

Happy path:

Remove `DN-0099` from Trip `T-045` → cancel `DN` → amend → change customer to Kim Lee → resubmit → re-add to `T-045`

Failure scenario - Trip already dispatched `F-BLOCKED`

```text
⚠️ Trip T-045 dah status Dispatched - driver dah keluar. Tak boleh modify trip sekarang.

Options:

Amend DN-0099 dulu, add ke trip baru esok
Inform driver via WhatsApp untuk deliver ke Kim Lee instead
Mana satu?

User: inform driver dulu, amend DN lepas dia balik

✅ WhatsApp sent to driver: "DN-0099 - deliver to Kim Lee Enterprise, bukan Ah Seng. Address: [address]."
Reminder set: amend DN-0099 after trip T-045 completes.
```

### L-06 · Generate pick lists for all today's SOs `[BULK] [CROSS-DOC]`

User message:

```text
semua SO delivery hari ni yang belum ada pick list, generate picklist skrg. warehouse kena start pick by 8am
```

Failure scenario - Some SOs have stock issues `F-PARTIAL`

```text
🔍 Jumpa 12 SOs delivery hari ni tanpa pick list.

⚠️ 2 SOs ada masalah stok:

SO-0311 - Gula 50kg: only 30kg available
SO-0318 - Telur Gred A: 0 stock
Generate pick list untuk 10 SOs yang ok? SO-0311 dan SO-0318 skip dulu?

User: generate yang 10, flag SO-0311 and 0318 kat manager

✅ 10 Pick Lists generated (PL-0201 to PL-0210).
ToDo created for Logistics Manager: SO-0311 (short stock), SO-0318 (zero stock).
```

### L-07 · POD received - mark fulfilled and trigger invoice `[CHAIN] [CROSS-DOC]`

User message:

```text
DN-0145 dah dapat POD dari driver. mark fullfiled and generate invoice untuk customer
```

(typo `fullfiled` - intentional)

Happy path:

Log `POD` against `DN-0145` → mark Fulfilled → update `per_fulfilled` on parent `SO` → generate `SI`

Failure scenario - SO only partially fulfilled, invoice policy blocks `F-BLOCKED`

```text
⚠️ SO-0388 (parent of DN-0145) ada 3 DNs. DN-0145 fulfilled, DN-0146 dan DN-0147 masih pending.
SO hanya 33% fulfilled - company policy requires 100% fulfilled before invoicing.

Nak generate invoice untuk DN-0145 portion je (partial invoice), atau tunggu semua DN fulfilled?

User: partial invoice boleh, buat je

✅ DN-0145 marked Fulfilled. SI-0302 generated for DN-0145 items only.
```

## 3. Finance User

Finance users work across Sales Invoice → Payment Entry → Credit/Debit Notes. Queries are about reconciling, collecting, and correcting money flows.

### F-01 · Match payment and generate receipt `[CHAIN] [CROSS-DOC]`

User message:

```text
Syarikat Wawasan dah bayar RM12,500 tadi. match dgn SI-0334 dan SI-0335, buat payment entry dan send receipt
```

Happy path:

Create Payment Entry (`type=Receive`) → allocate against `SI-0334` + `SI-0335` → submit → send receipt

Failure scenario A - Amount doesn't match outstanding invoices `F-MISSING-DATA`

```text
⚠️ Amount mismatch:

SI-0334 outstanding: RM8,200
SI-0335 outstanding: RM5,100
Total: RM13,300
Payment received: RM12,500
Short by RM800
Nak allocate RM12,500 across both (partial), atau assign penuh ke SI-0334 je dulu?

User: allocate across both

✅ PE-0188 created - RM12,500 allocated:
SI-0334: RM8,200 (fully paid)
SI-0335: RM4,300 (partial - RM800 outstanding)
Receipt sent to Syarikat Wawasan.
```

Failure scenario B - SI not found `F-NOT-FOUND`

```text
❌ SI-0335 tak jumpa. Ada possibility typo? Atau nak saya search invoice Syarikat Wawasan yang outstanding?

User: search outstanding invoices dorang

🔍 Syarikat Wawasan - Outstanding invoices:

SI-0330 - RM2,100 - 5 May
SI-0333 - RM5,100 - 8 May ← probably this one?
Match payment dengan SI-0334 dan SI-0333?

User: ya betul, SI-0333

✅ PE-0188 submitted. Receipt sent.
```

### F-02 · Bulk generate invoices for all delivered unbilled SOs `[BULK] [DESTRUCTIVE]`

User message:

```text
semua SO yang dah delivered tapi belum invoice, generate invoice skrg. end of month dah ni
```

Failure scenario A - Large batch, require confirm `F-DESTRUCTIVE`

```text
🔍 Jumpa 34 SOs delivered, no submitted invoice.

Generate 34 invoices sekarang? (Bulk action - susah nak undo)

User: yes buat semua
```

Failure scenario B - Mixed exceptions mid-batch `F-PARTIAL`

```text
⚠️ Processing...

31 SOs - invoices generated ✅
SO-0288 - ada draft SI dah wujud. Skip atau delete draft and regenerate?
SO-0291 - customer credit limit exceeded. Invoice blocked ❌
SO-0299 - SO partially fulfilled (80%), invoice not auto-generated. Flag untuk review?
31 invoices ready. Nak saya handle exceptions satu-satu?

User: SO-0288 delete draft buat baru. SO-0291 flag kat finance manager. SO-0299 hold dulu

✅ SO-0288 - draft deleted, SI-0299 generated. SO-0291 - ToDo raised for Finance Manager: credit limit exceeded. SO-0299 - held, no action. Total: 32 invoices generated.
```

### F-03 · Fix wrong tax on submitted invoice `[AMEND] [CHAIN]`

User message:

```text
SI-0201 tax salah, patut tax exempt tapi system kena charge 8%. cancel invoice, fix tax, resubmit then send balik kat customer
```

Failure scenario - Payment already recorded against that invoice `F-DEPENDENCY`

```text
⚠️ SI-0201 ada linked Payment Entry PE-0155 (RM4,600 received, submitted).

Untuk amend invoice, kena cancel PE-0155 dulu. Ini akan:

Reverse the payment receipt
Mark SI-0201 as unpaid again
Proceed? (Nak re-record payment lepas amend)

User: proceed, nanti i re-record

✅ PE-0155 cancelled. SI-0201 cancelled and amended - tax set to exempt.
SI-0201-1 submitted. New invoice sent to customer.

Nak saya create payment entry semula untuk RM4,600?

User: yes lepastu

✅ PE-0156 created and submitted. Receipt sent to customer.
```

### F-04 · Customer returned goods - process return and credit note `[CROSS-DOC] [CHAIN]`

User message:

```text
Bestari Food return 10kg daging beku, DN-0077. buat return note, link to invoice SI-0188, issue credit note and apply to their next payment
```

Happy path:

Create Return Note from `DN-0077` → submit → create Credit Note from `SI-0188` → submit → flag credit balance for next payment offset

Failure scenario - SI-0188 already fully paid `F-BLOCKED`

```text
⚠️ SI-0188 dah fully paid (PE-0144). Credit note akan create a credit balance untuk Bestari Food.

Nak proceed? Credit RM[X] akan hold dalam system dan offset against next invoice automatically.

User: proceed

✅ RN-0055 created and submitted.
CN-0031 created from SI-0188 - RM480 credit balance for Bestari Food.
Flagged: offset against next invoice automatically.
```

### F-05 · Send overdue payment reminders `[BULK] [CHAIN]`

User message:

```text
invoice lebih 30 hari overdue semua, send reminder kat dorang. letak amount outstanding and due date dalam message
```

Failure scenario - Missing contact info for some customers `F-PARTIAL`

```text
🔍 Jumpa 18 customers dengan invoices 30+ days overdue.

⚠️ 3 customers takde WhatsApp number dalam system:

Syarikat Maju Jaya
PJ Fresh Trading
Kedai Runcit Ah Kow
Send reminders to 15 customers yang ada WhatsApp? Yang 3 tu via email, atau skip?

User: yang ada email send email, yang takde langsung skip

✅ 15 WhatsApp reminders sent.
2 email reminders sent (Syarikat Maju Jaya, PJ Fresh Trading).
Kedai Runcit Ah Kow - no contact, skipped.

Summary: 17 reminders sent, 1 skipped. Nak saya create follow-up ToDo untuk Kedai Runcit Ah Kow?
```

### F-06 · Underbilled - add forgotten item to submitted invoice `[AMEND] [CHAIN]`

User message:

```text
SI-0299 terlupa masuk delivery charge RM150. tambah dalam invoice tu, kalau kena cancel dulu pun takpe, janji betul
```

Happy path:

Cancel `SI-0299` → amend → add delivery charge `RM150` → resubmit

Failure scenario - Payment already partially allocated `F-DEPENDENCY`

```text
⚠️ SI-0299 ada partial payment PE-0177 (RM2,000 received dari RM3,500 outstanding).

Cancel SI-0299 akan reverse partial payment PE-0177. Total invoice baru akan jadi RM3,650.

Proceed? Kena re-record payment RM2,000 lepas amend.

User: ok proceed, faham

✅ PE-0177 cancelled. SI-0299 amended - delivery charge RM150 added. SI-0299-1 submitted.
New total: RM3,650.
Nak saya re-record PE-0177 (RM2,000) against amended invoice?
```

### F-07 · Reconcile weekly payments `[BULK] [AMBIGUOUS]`

User message:

```text
this week punya payment masuk, reconcile semua dengan outstanding invoice. yang tak match flagkan untuk i check
```

Failure scenario - Duplicate amount from same customer `F-AMBIGUOUS`

```text
⚠️ Payment dari Kim Lee Enterprise RM3,200 - ada 2 outstanding invoices dengan jumlah sama:

SI-0301 - RM3,200 - 28 Apr
SI-0309 - RM3,200 - 3 May
Match payment ni dengan yang mana?

User: SI-0309, yang baru

✅ Noted. Continuing reconciliation...

Reconciliation summary:

14 payments matched and submitted ✅
2 payments unmatched (amount mismatch) - flagged as ToDo ⚠️
Kim Lee RM3,200 - matched to SI-0309 ✅
```

## 4. Warehouse User

Warehouse users receive Pick Lists, confirm picks, and mark DNs. Most likely to be blue-collar, typing on mobile, using Bahasa or dialect. Messages will be short, terse, typo-heavy. The bot must handle this gracefully without asking them to retype cleanly.

### W-01 · Mark DNs as delivered - mixed list with range `[BULK] [DESTRUCTIVE]`

User message:

```text
mark as delivered, DN 206,207,207,210, 215-220
```

Parsing the bot must handle:

- `206, 207, 207` → deduplicate: `DN-206`, `DN-207` (`DN-207` appears twice)
- `210` → `DN-210`
- `215-220` → `DN-215`, `DN-216`, `DN-217`, `DN-218`, `DN-219`, `DN-220`
- Total unique: 10 records

Happy path:

```text
✅ Saya akan mark 10 DNs sebagai Delivered:
DN-206, DN-207, DN-210, DN-215 hingga DN-220
(1 duplicate removed: DN-207)

Proceed?
```

User:

```text
yes
```

```text
✅ 10 DNs marked as Delivered.
```

Failure scenario - Some DNs in wrong state `F-PARTIAL`

```text
⚠️ Dari senarai 10 DNs:

8 DNs - ok, boleh mark Delivered ✅
DN-207 - status masih Draft, belum submit ❌
DN-218 - dah Delivered sebelum ni ❌
Mark 8 yang valid? DN-207 dan DN-218 skip.

User: ok

✅ 8 DNs marked as Delivered. DN-207 dan DN-218 skipped.
```

### W-02 · Confirm pick completion and trigger DN `[CHAIN] [CROSS-DOC]`

User message:

```text
picklist PL-0088 dah siap pick semua. confirm and create dn
```

Happy path:

Mark `PL-0088` as picked → generate `DN(s)` → return `DN number(s)`

Failure scenario - Short pick discovered `F-MISSING-DATA`

```text
⚠️ PL-0088 ada 4 items. Ada short pick ke? Atau semua qty sama macam dalam list?

Kalau ada short pick, bagitau item mana sebelum saya confirm.

User: semua ok except ikan, only got 12kg, list cakap 20kg

✅ Noted - Ikan Kembung updated: picked 12kg (ordered 20kg, 8kg short).
Confirm pick dan create DN dengan actual qty?

User: yes

✅ PL-0088 confirmed. DN-0344 created with actual picked quantities.
8kg ikan kembung flagged as backorder on SO-0299.
```

### W-03 · Bulk confirm pick lists from warehouse floor `[BULK]`

User message:

```text
semua picklist hari ni dah pick. PL-0090, 91, 92, 94, 96-99. confirm semua
```

Parsing: `90`, `91`, `92`, `94` + range `96-99` = `PL-0090`, `0091`, `0092`, `0094`, `0096-0099`. `PL-0093` and `PL-0095` are not in the list - must not be auto-filled.

Failure scenario - Gaps in range, verify intentional `F-AMBIGUOUS`

```text
🔍 Saya nampak PL-0093 dan PL-0095 tak ada dalam senarai. Intentional ke, atau terlupa?

User: ya sengaja, dorang belum siap

✅ Ok. Confirming 8 pick lists: PL-0090, 0091, 0092, 0094, 0096-0099.
PL-0093 dan PL-0095 excluded.
```

### W-04 · Damaged goods found during pick `[CHAIN] [CROSS-DOC]`

User message:

```text
time pick PL-0101 jumpa 5 kotak rosak, item cooking oil. tak boleh hantar. update list and inform
```

Actions expected:

- Reduce cooking oil qty in `PL-0101` by 5 units
- Flag damage reason on `PL`
- Notify Logistics User / Sales User assigned to parent `SO`
- Flag for stock write-off review

Failure scenario - Short quantity breaches minimum fulfilment threshold `F-BLOCKED`

```text
⚠️ SO-0300 ada minimum fulfillment rule - kena hantar minimum 80% qty. Kalau tolak 5 kotak cooking oil, SO ini hanya 65% fulfilled.

Nak notify Sales Manager untuk approval sebelum proceed?

User: yes inform manager

✅ ToDo raised for Sales Manager: PL-0101 short - cooking oil 5 units damaged, fulfilment at 65%. Pending approval to dispatch partial.
```

### W-05 · Bin location update after picking `[CHAIN]`

User message:

```text
lepas pick PL-0095, letak balik balance stock kat bin B-12. update lokasi
```

Happy path:

Confirm `PL-0095` pick complete
Update remaining stock location → `Bin B-12`
Confirm stock entry created

Failure scenario - Bin B-12 doesn't exist in system `F-NOT-FOUND`

```text
⚠️ Bin "B-12" tak jumpa dalam warehouse layout. Bins yang ada berdekatan:

B-11
B-13
B-20
Yang mana betul, atau nak saya create bin baru B-12?
```

## 5. Payment Proof via Image - Sales User

One of the highest-frequency real-world flows. A customer WhatsApps a screenshot of a bank transfer. The sales user forwards it to MAIA with a short message. MAIA must extract details, resolve document references, and create a draft Payment Entry - all from a single message plus an image.

### P-01 · Single image, specific order references `[IMAGE] [CHAIN] [CROSS-DOC]`

User message: (user attaches screenshot of bank transfer receipt)

```text
ni payment dari Restoran Maju, untuk order 110, 115, 200-202
```

Parsing:

- Orders: `SO-110`, `SO-115`, `SO-200`, `SO-201`, `SO-202`
- MAIA resolves each `SO` to its linked Sales Invoice

What MAIA extracts from image:

- Amount, date/time, bank reference number, sender name

Happy path:

```text
📎 Payment proof received.

Extracted from image:

Amount: RM 8,450.00
Date: 13 May 2026, 10:32 AM
Reference: IBG/2026051300234
Sender: RESTORAN MAJU SDN BHD
Linking to:

SO-110 → SI-0201 - RM 1,800
SO-115 → SI-0205 - RM 2,100
SO-200 → SI-0288 - RM 1,550
SO-201 → SI-0291 - RM 1,600
SO-202 → SI-0295 - RM 1,400
Total SI outstanding: RM 8,450 ✅ matches payment
Create Payment Entry and allocate across all 5 invoices?

User: yes

✅ PE-0201 created and submitted. Payment Receipt generated. Send to customer?
```

Failure scenario A - Amount mismatch `F-MISSING-DATA`

```text
⚠️ Amount mismatch:

Payment extracted from image: RM 8,000
Total outstanding for SO-110, 115, 200-202: RM 8,450
Short by RM 450
Allocate RM 8,000 as partial payment (FIFO across invoices), atau ada invoice lain yang tak include?

User: partial payment, fifo je

✅ PE-0201 created - RM 8,000 allocated FIFO:
SI-0201 RM1,800 ✅ fully paid
SI-0205 RM2,100 ✅ fully paid
SI-0288 RM1,550 ✅ fully paid
SI-0291 RM1,600 ✅ fully paid
SI-0295 RM950 partial (RM450 outstanding)
```

Failure scenario B - Sender name doesn't match customer `F-AMBIGUOUS`

```text
⚠️ Sender dalam receipt: "LIM KIM SENG" (personal account)
Customer dalam system: Restoran Maju Sdn Bhd

Nama berbeza. Confirm payment ini dari Restoran Maju?

User: confirm, tu owner dia bayar sendiri

✅ Payment recorded under Restoran Maju. Remark added: "Payment made by individual - LIM KIM SENG (owner)."
```

Failure scenario C - Image unreadable or low quality `F-IMAGE`

```text
⚠️ Gambar kurang jelas - tak dapat extract amount dengan yakin. Boleh hantar gambar yang lebih terang, atau taip amount terus?

User: RM 3,200

✅ Amount noted: RM 3,200. Continuing allocation...
```

Failure scenario D - No image attached `F-MISSING-DATA`

```text
⚠️ Tak nampak gambar payment proof. Nak attach receipt dulu, atau nak saya create payment entry tanpa proof? (Tanpa proof, Finance kena manual verify sebelum submit)
```

### P-02 · Multiple customers paid, reported in one message `[BULK] [AMBIGUOUS]`

User message: (no image)

```text
Ahmad dah collect payment semalam
Ah Seng bayar RM2k untuk SO-301
Muthu bayar RM1,500 untuk SO-305 dan 306
Encik Zul bayar cash RM800 SO-310
```

Happy path:

Create 3 separate Payment Entries for 3 different customers
Allocate each to respective `SOs/SIs`
Flag cash payment for finance review

Failure scenario - Customer name ambiguous + cash flag `F-AMBIGUOUS`

```text
🔍 Saya akan create 3 Payment Entries:

Ah Seng → SO-301 → RM 2,000
Muthu → SO-305 + SO-306 → RM 1,500
Encik Zul → SO-310 → RM 800 CASH ⚠️ (flagged for Finance review)
"Ah Seng" - ada 2 customer dengan nama serupa:

Ah Seng Frozen Food Sdn Bhd
Kedai Ah Seng (Klang)
Yang mana?

User: Ah Seng Frozen Food

✅ Got it. Saya proceed create semua 3 Payment Entries?

User: ya

✅ PE-0210 (Ah Seng Frozen Food), PE-0211 (Muthu), PE-0212 (Encik Zul) created.
PE-0212 flagged as CASH - pending Finance submission.
```

## 6. Mixed ID Range Parsing - Canonical Spec

This section defines exactly how the bot must parse user-supplied document ID lists. This is a hard engineering requirement, not just a UX preference. Implement and unit test before any other chatbot feature.

### 6.1 Input Patterns the Bot Must Handle

| Input | Parsed As | Notes |
| --- | --- | --- |
| `DN 206, 207, 210` | `DN-206`, `DN-207`, `DN-210` | Comma-separated |
| `DN 215-220` | `DN-215` through `DN-220` inclusive | Hyphen range |
| `DN 206,207,207,210` | `DN-206`, `DN-207`, `DN-210` | Deduplicate silently |
| `DN 206, 207, 210, 215-220` | `DN-206`, `DN-207`, `DN-210`, `DN-215-DN-220` | Mixed - merge and deduplicate |
| `order 110,115, 200-202` | `SO-110`, `SO-115`, `SO-200`, `SO-201`, `SO-202` | `"order"` = `SO` prefix |
| `invoice 88, 89, 91` | `SI-88`, `SI-89`, `SI-91` | `"invoice"` = `SI` prefix |
| `DN206 DN207 DN210` | `DN-206`, `DN-207`, `DN-210` | Space-separated, no comma |
| `206 207 210` | Ambiguous - must ask: `DN`, `SO`, or `SI`? | No doctype prefix |
| `DN 206 to 210` | `DN-206` through `DN-210` | `"to"` = range separator |
| `DN206-DN210` | `DN-206` through `DN-210` | Prefix repeated in range |
| `DN 0206, 0207` | `DN-206`, `DN-207` | Leading zeros - normalise |
| `DO 101, 105` | `DN-101`, `DN-105` | `"DO"` = industry term for Delivery Note |
| `bil 88, 89` | `SI-88`, `SI-89` | `"bil"` = BM for invoice |

### 6.2 Parsing Rules (Priority Order)

1. Map doctype words - `"order"/"oder"` → `SO`; `"invoice"/"invois"/"bil"` → `SI`; `"DN"/"DO"/"delivery"` → `DN`; `"picklist"/"PL"` → `PL`; `"quotation"/"QT"/"sebut harga"` → `QT`
2. Strip prefix from numbers - remove `DN-`, `SO-`, `SI-`, etc. prefix before processing ranges
3. Expand ranges - any `X-Y` or `X to Y` or `X sampai Y` where `X < Y`: generate full integer sequence inclusive
4. Deduplicate - remove exact duplicates silently; mention count removed only if > 0
5. Do not fill gaps - if user lists `200, 205` (skipping `201-204`), do not fill the gap. Only fill explicitly stated hyphen ranges
6. Prefix consistency - if user mixes `DN 206` and bare `207` in same message, apply same doctype to bare number. If doctype cannot be inferred, ask once
7. Zero-pad normalise - `DN-0206` = `DN-206`. Normalise to system format before lookup
8. Max range guard - if expanded range > 50 records, confirm before proceeding: `"Ini akan affect 67 DNs. Betul ke?"`

### 6.3 Confirmation Display Format

Always echo back the resolved list before executing bulk action:

For ≤10 records - show all:

```text
Saya akan mark 10 DNs sebagai Delivered:
DN-206, DN-207, DN-210, DN-215, DN-216, DN-217, DN-218, DN-219, DN-220
(1 duplicate removed: DN-207)

Proceed?
```

For >10 records - compress ranges:

```text
DN-215 hingga DN-220 (6 records), dan DN-206, DN-207, DN-210
Total: 10 DNs
(1 duplicate removed: DN-207)

Proceed?
```

## 7. Malaysian Slang & Language Lexicon

The NLP layer must recognise these as valid intent signals. This is the minimum viable set for B2B industrial and food supply users in Malaysia. It is not exhaustive.

### 7.1 Confirmation & Affirmation

| What user says | Meaning | Origin |
| --- | --- | --- |
| `ok`, `ok la`, `ok je` | Yes / confirmed | Universal |
| `boleh`, `boleh je`, `boleh la` | Yes, can do | BM |
| `ha ah`, `haah`, `ha` | Yes, correct | BM colloquial |
| `confirm`, `confirm la` | Confirmed, proceed | English-BM |
| `settle`, `dah settle` | Done, resolved | English-BM |
| `done`, `done liao`, `done d`, `dah done` | Completed | English-Hokkien |
| `liao` / `d` / `dah` (suffix) | Already done - past tense marker | Hokkien / BM |
| `chup`, `jap`, `jap eh`, `sekejap` | Wait / hold on | BM / Hokkien |
| `roger`, `roger that` | Understood, will do | English (military slang, common in Malaysian ops) |
| `noted`, `noted la` | Acknowledged | English-BM |

### 7.2 Negation & Cancellation

| What user says | Meaning | Origin |
| --- | --- | --- |
| `taknak`, `tak nak`, `tak mau` | Don't want / cancel | BM |
| `nope`, `nope la` | No | English-BM |
| `cancel je`, `cancel terus` | Just cancel it | English-BM |
| `buat dek` | Ignore it / never mind | BM |
| `nevermind la`, `sudah la`, `dah la` | Forget it, drop it | BM / Hokkien |
| `tarak`, `tarak la` | No / don't have | Tamil-Malay |
| `aiyah`, `aiyoh` | Frustrated / never mind | Cantonese |
| `takpe`, `tak pe la` | Never mind / it's fine | BM |
| `xde hal`, `xpe` | No problem / forget it | BM SMS abbreviation |

### 7.3 Urgency & Speed

| What user says | Meaning | Origin |
| --- | --- | --- |
| `cepat`, `cepat la`, `cepat sikit` | Fast / urgent | BM |
| `urgent`, `urgent ni`, `very urgent` | Urgent | English |
| `skrg`, `skrg jg`, `now now`, `sekarang` | Right now | BM abbrev |
| `jgn lambat`, `jangan lambat` | Don't be slow | BM |
| `terus`, `terus buat`, `buat terus` | Immediately / do it now | BM |
| `laju sikit` | Be quicker | BM |
| `faster la`, `faster sikit` | Hurry up | English-BM |
| `cincai la` | Just do it roughly / approximately - don't overthink | Hokkien |
| `walao`, `wei` | Exclamation - urgency or exasperation | Hokkien / Cantonese |
| `fast fast` | Very urgent, do immediately | Manglish reduplication |

### 7.4 Quantity & Amount

| What user says | Meaning | Origin |
| --- | --- | --- |
| `2k`, `5k`, `10k` | 2,000 / 5,000 / 10,000 | Universal shorthand |
| `2 ribu`, `5 ribu`, `10 ribu` | 2,000 / 5,000 / 10,000 | BM |
| `setengah` | Half | BM |
| `lebih kurang`, `lebih kurang je` | Approximately | BM |
| `banyak sikit` | A bit more | BM |
| `sikit je`, `sikit-sikit` | Just a little / small quantity | BM |
| `penuh` | Full / maximum | BM |
| `semua sekali`, `semua-semua` | All of them, total | BM |
| `brapa`, `berapa` | How much / how many | BM (typo variant) |
| `angka bulat` | Round number | BM |

### 7.5 Document & Action References

| What user says | Maps to | Origin |
| --- | --- | --- |
| `order`, `oder`, `oda` | Sales Order (`SO`) | English / typo |
| `invois`, `invoise`, `bil`, `invoice` | Sales Invoice (`SI`) | BM / typo / English |
| `DO`, `delivery order`, `nota hantar` | Delivery Note (`DN`) | Industry term / BM |
| `DN`, `delivery note` | Delivery Note (`DN`) | Standard |
| `resit`, `receipt`, `resit bayar` | Payment Receipt | BM / English |
| `sebut harga`, `quotation`, `QT`, `quote` | Quotation | BM / English |
| `bayaran`, `bayar`, `payment` | Payment / Payment Entry | BM / English |
| `nota kredit`, `credit note`, `CN` | Credit Note | BM / English |
| `pulangan`, `return`, `balik barang` | Return Note | BM / English |
| `hantar`, `send`, `pos`, `dispatch` | Deliver / send | BM / English |
| `picklist`, `senarai pick`, `pick` | Pick List | English / BM |
| `trip`, `delivery trip` | Delivery Trip | English |

### 7.6 Problem & Exception Language

| What user says | Meaning | Origin |
| --- | --- | --- |
| `salah`, `silap`, `tersalah` | Wrong / mistake | BM |
| `rosak`, `damaged`, `cacat` | Damaged / broken | BM / English |
| `tak jumpa`, `takde`, `xde` | Not found / doesn't exist | BM |
| `ter-type`, `silap type` | Typed the wrong thing accidentally | BM-English |
| `mana ada`, `mana boleh` | That can't be right / impossible | BM |
| `habis`, `out of stock`, `takde stock` | Out of stock | BM / English |
| `pending lagi`, `belum settle`, `stuck` | Still unresolved / blocked | BM / English |
| `problem la`, `ada issue`, `ada masalah` | There's a problem | English-BM |
| `celaka` | Frustration - emotional filler, ignore, continue task | BM |
| `aiyoyo`, `aiyoyoyo` | Strong frustration - emotional filler, ignore, continue task | Tamil |
| `wah lao`, `wah lao eh`, `walao eh` | Surprise / frustration - emotional filler, ignore, continue task | Hokkien |
| `cheh`, `chis` | Mild frustration / dismissal - emotional filler, ignore | Cantonese / Hokkien |
| `haiya`, `aiya` | Exasperation - emotional filler, ignore | Cantonese / Mandarin |
| `pening`, `pening kepala` | Confused / overwhelmed - note but continue task | BM |

### 7.7 Slang in Context - Parsing Examples

```text
"wah lao, SO-0099 salah customer la. cancel terus"
→ [wah lao = emotional filler, strip]
→ Intent: CANCEL SO-0099, reason = wrong customer

"aiyah DN 206 dah deliver ke belum? confirm cepat"
→ [aiyah = filler, strip] [cepat = urgency signal, note]
→ Intent: CHECK delivery status of DN-206

"settle la semua invoice untuk Muthu, dia dah bayar 2k tadi"
→ Intent: RECORD PAYMENT RM2,000 from customer "Muthu", ALLOCATE to outstanding invoices

"tarak stok ke? order dah masuk dah"
→ [tarak = Tamil-Malay for "none/no"]
→ Intent: CHECK stock availability; flag concern about existing order stockout

"cincai la, buat je pick list dulu"
→ [cincai = "roughly / just do it / don't overthink"]
→ Intent: GENERATE pick list now; user is not requesting precision review first

"done liao DN-0088, mark delivered"
→ [liao = Hokkien past-tense marker = already done]
→ Intent: MARK DN-0088 as Delivered

"haiya SI-0201 salah lagi ke? cancel la, buat balik"
→ [haiya = exasperation, strip]
→ Intent: CANCEL SI-0201, RECREATE / AMEND

"fast fast, trip esok pagi, DN 301 302 305 masukkan untuk Ali"
→ [fast fast = urgency, note but don't skip confirm]
→ Intent: ASSIGN DN-301, DN-302, DN-305 to Delivery Trip, driver Ali, date = tomorrow morning

"ok noted, SO-0333 hold dulu la. nanti i bagitau"
→ [noted = acknowledgement, strip]
→ Intent: PUT SO-0333 on HOLD, await further instruction
```

## Appendix A - Failure Handling Rules (Bot Behaviour Contract)

| Rule | Behaviour |
| --- | --- |
| Never guess on ambiguous names | Always surface options. Never pick the "most likely" one silently. |
| Never execute destructive bulk without confirm | Always show count. Offer "show list" before confirm. |
| Always report partial failures explicitly | State what succeeded, what failed, why it failed. Never silently skip. |
| Pause state is preserved | If user sends a new unrelated message mid-task, bot says: `"Ada task pending - nak sambung atau cancel task?"` |
| Never cancel a chain silently | If fixing step A requires cancelling downstream docs, always surface the dependency before acting. |
| Max 1 clarification question per pause | Don't dump 3 questions at once. Ask the most blocking one. Wait. Continue. |
| Skip is always an option | For every blocker in a bulk operation, user can say `"skip that one"` and bot continues the rest. |
| Resume is explicit | Bot doesn't auto-resume after a timeout. User must reply to continue. |
| Emotional fillers are stripped, not rejected | `wah lao`, `aiyah`, `celaka`, `haiya` are noise. Strip them. Parse the intent behind them. Never return `"I don't understand."` |
| Image OCR confidence threshold | If extracted amount confidence is below threshold, ask user to confirm or retype. Never silently use a low-confidence value for a financial transaction. |
| Sender name mismatch on payment proof | Always flag when sender name ≠ customer name. Always ask for confirmation. Record the explanation as a remark. |

## Appendix B - Resume Trigger Phrases the Bot Must Recognise

| Phrase | Meaning |
| --- | --- |
| `yes` / `ya` / `proceed` / `ok buat` / `confirm` / `boleh` / `ha ah` | Confirm and execute pending action |
| `skip` / `skip that` / `nevermind that one` / `buat dek je` / `skip je` | Skip the blocked item and continue rest |
| `cancel task` / `stop` / `taknak dah` / `dah la` / `cancel je semua` | Discard entire pending task |
| `show list` / `tunjuk semua` / `list dulu` | Show full list before confirming bulk |
| `hold dulu` / `wait` / `jap` / `sekejap` | Pause without cancelling - task stays open |
| `sambung` / `continue` / `teruskan` | Resume a paused task |
| `undo` / `reverse` / `cancel yang tadi` | Reverse last completed step if reversible |

Document owner: Ivan · MAIA Product · v0.3 · May 2026

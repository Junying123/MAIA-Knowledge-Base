# 📄 Certificate of Analysis (COA) Management

## Feature Narrative — MAIA

---

## 🧠 What This Feature Actually Is

A **Certificate of Analysis (COA)** is a **batch-level certification artifact** that verifies:

- Product specifications and test results
- Compliance with regulatory or contractual requirements
- Authenticity and origin of the goods delivered

In real operations, COAs are used to:

- Pass customer QA checks before goods are accepted into production or warehousing
- Enable customers to use materials in their own downstream manufacturing
- Satisfy audits — ISO, GMP, food safety, construction standards, regulatory inspections
- Resolve disputes on quality or specification mismatch **before they become commercial events**
- Protect the seller legally: _"This is what we certified at the point of delivery. Here is the proof."_

This is not documentation housekeeping.

This is **proof of truth at the point of fulfilment** — and it has to be batch-specific, customer-specific, and irrefutable.

---

## 🔎 Why This Feature Exists in MAIA Specifically

MAIA's core design principle is that **document trail continuity is not optional**.

Every operational artifact — Quotation, Sales Order, Invoice, Delivery Note, Return — must be traceable from creation to resolution. The COA is not a standalone document you email on request. It is a **certification layer that belongs to the Delivery Note**, attached at the batch level, resolved by customer preference, and locked into the audit record at the moment of dispatch.

If your team thinks of COA as "attach a PDF to the delivery email," they've already built the wrong thing.

The correct frame is: **COA is the compliance closure step for every batch-level delivery**. It is as much a part of fulfilment as the Delivery Note itself.

In MAIA, this means:

- COA resolution is system-driven, not user-dependent
- Batch traceability is a prerequisite, not a nice-to-have
- Customer preference is enforced at dispatch, not remembered by sales
- Enforcement gates block delivery if compliance cannot be confirmed
- The full audit trail — which COA, which version, which batch, which delivery — is immutable

---

## 📖 Before MAIA — The Reality on the Ground

Meet Ah Hock again.

He runs a RM14M industrial supply business. His team processes dozens of deliveries daily. Some customers need COAs. Some need masked versions. Some need them immediately on receipt of goods. The people who know which customer needs what are Ah Hock, his senior sales exec, and maybe one logistics coordinator.

That tribal knowledge is not written down anywhere.

---

A customer places an order for a batch of chemical materials.

The order goes through. Delivery Note is generated. Goods go out.

Everything looks fine — until two days later:

> _"We need the COA for this batch before we can accept these into our production line."_

Now the breakdown starts.

---

### What happens internally:

Sales asks warehouse: _"Which batch did we actually ship?"_

Warehouse checks handwritten picking notes. Or the system, if they're lucky enough to have recorded it. The batch number exists somewhere — maybe.

Admin starts searching:

- Email threads with the supplier
- WhatsApp conversations from months ago
- Shared Google Drive folders with no naming convention
- Physical folders in the office

They find something that looks like a COA.

But no one can confirm:

- Is this the correct batch number?
- Is this the most recent version?
- Was this document superseded by a revised test result?
- Is this the version we're allowed to share with this customer?

They send it anyway, because the customer is waiting and the clock is ticking.

---

### What happens next:

Customer QA team reviews it.

> _"This COA doesn't match the batch code on the goods we received."_

Now you've created, in sequence:

- A **trust breakdown** with a paying customer
- A **production delay** on their manufacturing line — they cannot use materials without valid certification
- A potential **return request** — even if the goods themselves are perfectly fine
- A **commercial dispute** — with documentation that contradicts your delivery records
- Possible **loss of account** — especially in regulated industries where suppliers are evaluated on compliance consistency
- **Legal exposure** — if the COA you sent is attached to a contract or regulatory filing and turns out to be incorrect

---

### The uncomfortable truth

This is not a one-off mistake by a careless employee.

This is a **system design failure** that will repeat every time this business scales:

- COA is not structurally tied to the delivery batch
- No enforcement exists at dispatch
- Sales, logistics, and admin are making judgment calls from memory under pressure
- There is no audit trail of what was sent, to whom, and when
- Customer-specific requirements live in people's heads, not in the system

Every additional delivery person, every new sales hire, every additional customer makes this worse.

---

## 💡 After MAIA — What Changes

Now replay the same scenario with MAIA implemented correctly.

---

### Step 1 — Upstream Discipline: Batch-Level COA Capture

When stock arrives and a batch is created in MAIA:

The receiving or QA team uploads:

- **Detailed COA** — the full supplier-issued document with test results, formulation references, and testing methodology
- **Masked COA** — a customer-safe version with supplier identity, proprietary formulation details, and internal test references redacted

This happens at the **Item Batch level**, not the item level.

MAIA treats this as a required completion step for batch creation. An uncertified batch is not a fully created batch — it is a compliance gap that will block delivery downstream.

This changes the culture: COA capture is not an afterthought. It is part of receiving.

---

### Step 2 — Customer Configuration: System-Enforced Preference

In the Customer Profile, the following fields are configured once and referenced on every order:

- `requires_coa` → Boolean
- `preferred_coa_type` → Detailed / Masked / None

This is not a reminder for sales to remember.

This is **system-enforced behavior that travels with the customer record** through every order, every delivery, every dispatch — forever.

The sales user does not need to think about it. The logistics coordinator does not need to ask. The system resolves it.

---

### Step 3 — Order and Delivery Execution: Automatic COA Resolution

Sales creates the order. Delivery Note is generated. MAIA immediately:

1. Identifies the **exact batch or batches assigned** to this delivery
2. Reads the **customer COA preference** from the profile
3. Selects the correct COA version — Detailed or Masked
4. Verifies the COA exists for the assigned batch
5. Attaches it to the Delivery Note record

If the COA is missing and the customer requires it, the system does not proceed silently. It blocks the delivery and surfaces an exception.

No one is asked to remember. No one makes a judgment call.

The system resolves it — or stops and tells you exactly why it cannot.

---

### Step 4 — Delivery Execution: Certification Travels with the Goods

Customer receives:

- The goods
- The Delivery Note
- The correct COA — attached, version-controlled, batch-matched

No follow-up request needed. No scrambling after the fact. No ambiguity about which document applies.

The delivery is complete — operationally and compliance-wise — at the point of dispatch.

---

### Step 5 — If a Dispute Happens: Immediate, Irrefutable Response

Customer questions quality. Or batch conformance. Or whether the goods match what was certified.

Your team opens the Delivery Note in MAIA and immediately sees:

- The exact batch used
- The COA version attached at dispatch
- The timestamp of attachment
- Which user processed the delivery
- Whether a Masked or Detailed COA was sent

Your response:

> _"This is the batch-certified COA for the exact goods we delivered on [date]. Version [X]. Attached at dispatch. Here is the record."_

No ambiguity. No scrambling. No apologetic delay.

One lookup. Full answer.

---

## 🧱 Core System Design

---

### 1. Batch-Level COA Storage

Each **Item Batch** carries:

|Field|Type|Description|
|---|---|---|
|`coa_file`|File|Full supplier-issued COA|
|`masked_coa_file`|File|Customer-safe redacted version|
|`coa_version`|String|Version identifier for revision tracking|
|`coa_valid_from`|Date|Certification start date|
|`coa_valid_until`|Date|Certification expiry date|
|`coa_uploaded_by`|Link → User|Who uploaded it|
|`coa_uploaded_at`|Datetime|Upload timestamp|

Because certification is issued at production batch level, not SKU level. Attaching COAs to the item rather than the batch is one of the most common — and most dangerous — implementation shortcuts.

---

### 2. Masked COA — A Non-Negotiable Capability

This is the feature most teams skip, and it is where real commercial damage happens.

A Masked COA allows you to:

- Provide regulatory compliance to customers who require it
- **Protect supplier identity** — so customers cannot route-around you to the source
- **Protect formulation or testing methodology** — especially relevant in chemical, food-grade, and pharmaceutical supply contexts
- **Maintain confidentiality agreements** with your own suppliers

Without Masked COA support, your users face an impossible binary:

- Send the full COA → risk exposing supplier relationships or proprietary data
- Send nothing → fail customer compliance checks and potentially lose the account

Both outcomes are bad. The Masked COA resolves this at system level without making it a judgment call every time.

---

### 3. Customer COA Preferences

Stored in the Customer Profile, applied automatically at Delivery Note generation:

|Field|Type|Options|
|---|---|---|
|`requires_coa`|Boolean|Yes / No|
|`preferred_coa_type`|Select|Detailed / Masked|
|`coa_delivery_method`|Select|Attached to DN / Email / Both|
|`coa_contact`|Link → Contact|Who receives it|

This field set integrates with MAIA's existing Customer Preference Profile architecture — the same config-driven preference system that governs invoice behavior, payment terms, delivery instructions, and communication channels.

COA preference is one more dimension of "how does this customer need to be served?" — and it belongs in the same place as all the others.

---

### 4. COA Resolution Engine — The Core Logic

On Delivery Note generation, MAIA executes the following resolution sequence for each item line:

```
For each item line in Delivery Note:
  1. Resolve assigned batch(es)
  2. For each batch:
     a. Check coa_valid_from / coa_valid_until → reject expired COAs
     b. Read customer.preferred_coa_type
     c. Select: Masked COA if available and preferred; else Detailed COA
     d. If customer.requires_coa = True and no valid COA exists → BLOCK
  3. Attach selected COA(s) to Delivery Note record
  4. Log: batch, COA version, COA type, timestamp, user
```

This is deterministic. It does not rely on user judgment. It does not depend on who is on shift. It produces the same correct outcome for every delivery, every time.

---

### 5. Enforcement Layer — Where Most Systems Fail

Most systems that claim to "support COAs" treat them as optional attachments. The result is inconsistent compliance — fine when someone remembers, broken when they don't.

MAIA enforces:

|Condition|System Behaviour|
|---|---|
|Customer requires COA, COA exists and valid|Auto-attach, proceed|
|Customer requires COA, COA exists but expired|Block delivery, surface exception|
|Customer requires COA, no COA uploaded|Block delivery, surface exception|
|Customer requires COA, batch not assigned|Block delivery, surface exception|
|Customer does not require COA|Attach if available (with preference), else skip|
|Masked COA preferred but not uploaded|Fall back to Detailed COA with warning|

Enforcement is not optional. It is the difference between a compliance feature and a compliance theatre feature.

---

### 6. Exception Surfacing — Integrated with MAIA's ToDo System

When the COA resolution engine blocks a delivery, it does not silently fail.

It generates an exception — routed to the correct owner via MAIA's exception workspace:

- **Task type**: `COA_MISSING` / `COA_EXPIRED` / `BATCH_UNASSIGNED`
- **Owner**: Warehouse / QA team responsible for batch completion
- **Linked document**: Item Batch + Delivery Note
- **SLA**: Configurable per severity — e.g., 4 hours for shipment-blocking issues
- **Resolution action**: Upload COA → system re-validates → delivery proceeds

This is not a generic error message. It is a tracked, owned, time-bounded task in the exception register — consistent with how MAIA handles every other class of operational failure.

The goal is not just to block bad deliveries. It is to ensure the right person knows exactly what is broken and what they need to do to fix it.

---

### 7. Audit Trail — The Immutable Record

Every COA attachment event is recorded with:

- Delivery Note ID
- Item Batch ID
- COA version attached
- COA type (Detailed / Masked)
- Timestamp
- User who triggered dispatch
- Customer COA preference at time of dispatch (snapshot, not live link)

The snapshot of customer preference at dispatch time is important. If a customer's COA preference changes after delivery, the audit record reflects what was applicable when the goods went out — not what the profile says today.

This protects you legally. It makes dispute resolution unambiguous. It means you can answer any audit question about any delivery with a single lookup.

---

## ⚠️ Critical Edge Cases — Every One of These Will Hit You in Production

Teams that build this feature without handling these cases ship something that breaks silently in real operations.

---

### 1. Multi-Batch Delivery

One item line is fulfilled from two or more batches — because stock was split across received shipments with different certification dates.

Each batch has its own COA. The Delivery Note must attach all of them. The resolution engine must process each batch independently and consolidate at attachment.

Implementation shortcut that kills this: treating COA as a single field on the Delivery Note line. It must be a child table: one row per batch, one COA reference per row.

---

### 2. Partial Deliveries

An order is delivered in three shipments. Each shipment uses a different batch. Each Delivery Note must carry the COA for the batch used in that specific delivery — not the COA from the first delivery, not a generic item-level document.

This only works correctly if COA is resolved at **Delivery Note generation time** against the **specific batches assigned to that DN**, not at order creation time.

---

### 3. COA Expiry in Transit

A COA is valid at time of dispatch but expires before the customer accepts the goods — common in long-lead international shipments or where certification validity windows are short.

MAIA must:

- Record the COA version and validity window at dispatch (snapshot)
- Surface the expiry risk if dispatch date + transit time approaches `coa_valid_until`
- Allow users to proactively obtain a refreshed COA and re-attach before goods arrive

---

### 4. COA Versioning and Revisions

Suppliers issue revised COAs. Test results get corrected. Regulatory authorities require re-certification after a batch recall or process change.

MAIA must track:

- Which version of the COA was attached to which delivery
- When a batch's COA was superseded
- Whether any open Delivery Notes were dispatched with a COA that has since been revised

If a COA is revised after dispatch, the historical audit record must remain intact. The revision must be logged as a new version, not an overwrite.

---

### 5. Masked COA Not Yet Uploaded

The Detailed COA is uploaded at goods receipt. The Masked version requires a manual redaction step — and someone needs to do it before a customer-requiring-masked-COA places their next order.

MAIA must:

- Flag batches where `masked_coa_file` is missing as incomplete for any customer with `preferred_coa_type = Masked`
- Surface this as a proactive exception — not just a delivery-time block
- Ideally surface it at Delivery Note creation, not at the moment a delivery is due to go out in two hours

---

### 6. Regulatory COA Requirements vs. Commercial COA Requirements

Some customers require COAs for commercial preference — they want traceability but have no regulatory obligation. Others require COAs because their own ISO certification, GMP audit, or government licence depends on documented batch traceability.

The enforcement severity should reflect this. A regulatory-grade customer with a blocked COA is not the same as a commercial-preference customer with a missing document. Configuration should allow differentiation — and the exception routing should reflect the actual risk level.

---

## 🔁 End-to-End Flow

```
Supplier delivers batch
  → Warehouse / QA uploads Detailed COA to Item Batch
  → QA team creates or uploads Masked COA
  → Batch marked COA-complete

Customer Profile configured
  → requires_coa = True
  → preferred_coa_type = Masked
  → coa_delivery_method = Attached to DN

Sales Order created → Delivery Note generated
  → Resolution engine fires:
      Batch assigned? ✓
      COA valid? ✓
      Customer preference → Masked
      Masked COA available? ✓
      → Attach to Delivery Note record
      → Log: batch, version, type, timestamp, user

Delivery dispatched
  → Customer receives goods + Delivery Note with COA attached

Dispute raised (if any)
  → Open Delivery Note → audit trail shows exact batch, exact COA, exact version sent
  → One lookup → full answer
```

---

## 📊 Operational Impact

|Dimension|Before MAIA|After MAIA|
|---|---|---|
|COA retrieval|Manual — email, WhatsApp, Drive|Automatic — resolved at DN generation|
|Batch traceability|Ad hoc — picking notes, memory|Enforced — batch-level attachment|
|Customer preference|Tribal knowledge|System-configured, always applied|
|Version control|None — risk of sending superseded docs|Versioned — historical record immutable|
|Enforcement|None — ships with or without COA|Blocked — delivery cannot proceed without compliance|
|Dispute resolution|Scramble, delay, escalation|One lookup — full audit record|
|Supplier confidentiality|Judgment call — often wrong|Masked COA — system-enforced|
|Regulatory exposure|High — inconsistent documentation|Low — irrefutable audit trail|

---

## 🧭 Implementation Priorities

These are sequenced correctly. Do not skip ahead.

**Phase 1 — Data Model**

- Item Batch COA fields (both files, version, validity window, upload metadata)
- COA version child table on Item Batch for revision history
- Customer Profile COA preference fields
- Delivery Note COA attachment child table (batch → COA reference per line)

**Phase 2 — Resolution Engine**

- Batch → customer preference → COA selection logic
- Expiry validation
- Masked COA fallback logic
- Attachment logging with snapshot of customer preference at time of dispatch

**Phase 3 — Enforcement Layer**

- Delivery block conditions (missing COA, expired COA, unassigned batch)
- Exception generation → MAIA ToDo / exception workspace
- Override mechanism for authorised users with audit log entry

**Phase 4 — Delivery Note Integration**

- COA attachment visible and downloadable from DN record
- PDF bundle: DN + COA(s) as single dispatch document
- Email/chatbot dispatch includes COA

**Phase 5 — Proactive Visibility**

- Batch compliance dashboard: batches with missing or expiring COAs
- Pre-dispatch COA status check surfaced in Delivery Note creation UI
- Digest signal: "X batches have COAs expiring in the next 30 days"

**Phase 6 — Audit and Reporting**

- COA attachment history per Delivery Note
- COA version history per Item Batch
- Compliance report: deliveries to COA-required customers by period, pass/fail

---

## 🧩 Final Positioning — Non-Negotiable

This is not:

> _"Attach a document to the delivery."_

This is:

> **A batch-level certification compliance engine with automated resolution, controlled information disclosure, enforcement gating, and an irrefutable audit trail — built as a first-class component of MAIA's document lifecycle.**

If your team builds this as a file upload field on the Delivery Note, they have failed.

If they build it as a resolution engine that enforces customer-specific compliance requirements at dispatch, with exception handling for every failure mode and an immutable audit trail of every certification decision — they have built something that actually protects the business.

The difference between those two implementations is the difference between a feature that looks like compliance and one that actually delivers it.

Build the real one.
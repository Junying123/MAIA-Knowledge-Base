## CK Auto Parts × MAIA — Tech Briefing

### Separated by Phase: B2B Internal Use vs B2C Customer Use

***

## PHASE 1 — B2B INTERNAL USE

*(Salesman-operated, internal staff only)*

***

### WHO USES THIS

* CK Auto Parts **internal sales staff only**

* The salesman operates the system **on behalf of the customer**

* Customer does not interact with the AI directly in this phase

* Walk-in customers and phone/WhatsApp enquiries are all handled by the salesman using MAIA

***

### HOW IT WORKS — B2B INTERNAL FLOW

```plain&#x20;text
Customer contacts Salesman
          ↓
Salesman opens MAIA
          ↓
Salesman keys in customer car plate number
          ↓
     Profile found?
    NO  → Salesman registers new customer profile
    YES → Vehicle details auto-populated
          ↓
Salesman queries parts based on car model
          ↓
MAIA checks stock (Stage 1)
          ↓
Salesman presents options to customer
          ↓
Customer confirms what they want
          ↓
MAIA checks stock again (Stage 2)
          ↓
MAIA generates Draft Sales Order → Salesman reviews
          ↓
     Order above RM 1,000?
    YES → Notification sent to approver → Approver confirms → converts to Sales Order
    NO  → Salesmans Submits Sales Order, converts to invoice directly
          ↓
Sales Invoice pushed to Xeersoft
          ↓
Xeersoft deducts inventory, Creates Delivery note
          ↓
Sales Invoice document sent to customer via WhatsApp , Delivery note send to internal team
```

***

### B2B INTERNAL — DETAILED REQUIREMENTS

1. **Salesman Login & Access**

* Salesman accesses MAIA via internal interface (Whatsapp/ Web (optional) )

* Each salesman has their own login credentials

* All orders created are tagged to the salesman who created them

- **Customer Lookup**

* Salesman enters Customer name as the primary search key

* If customer profile exists → auto-populate: customer name, Billing/Shipping address, Email, contact number, contact person

* If not found → salesman manually registers the customer&#x20;

- **Parts Search**

* Salesman searches by part name, part SKU number, or symptom description(" exhaust pipe suitable for Myvi 1.5av")

* Results must be filtered to only show parts **compatible with the customer's vehicle model**

* Each result shows: part name, brand, price, stock availability, product photo

- **Stock Check — Two Stages**

* **Stage 1:** When salesman browses/selects parts — live stock check shown inline

* **Stage 2:** When salesman confirms the order — second real-time check before SO generation

* If stock has changed between Stage 1 and Stage 2, system must alert the salesman before proceeding

- **SO Generation**

* MAIA generates a draft quotation showing: customer name, vehicle, items, quantities, unit prices, total

* Salesman reviews for accuracy before confirming

* SO can be shared with customer via WhatsApp directly from MAIA

- **Order Approval — RM 1,000 Threshold**

* Below RM 1,000 → auto-confirmed, SO created immediately

* Above RM 1,000 → held for approval

* Approver receives notification with order summary

* Approver taps Confirm → SO created and pushed to Xeersoft

* Approvers can also **Reject** → salesman is notified to review and edit

* If no action taken within **\[X hours — MJ to confirm]** → order auto-cancelled

- **Multi-Outlet Stock**

* If primary outlet has no stock, MAIA checks other outlets automatically

* Salesman sees which outlet has the item and estimated delivery time

* Salesman informs customer and agrees on delivery arrangement

- **Mixed Order Handling**

* If order has some items in stock and some not:&#x20;

  * MAIA flags the split clearly to the salesman

  * Salesman discusses with customer — proceed with partial, or wait for full order?

  * Out-of-stock items tracked separately for follow-up

- **Sales Order to Xeersoft**

* Confirmed SO pushed to Xeersoft automatically

* Xeersoft deducts inventory and generates Invoice + DO

* SO document sent to customer on WhatsApp

- **Auto-Cancellation**

* Unactioned SOs auto-cancel after configurable time window

* Inventory hold released upon cancellation

* Salesman and customer notified of cancellation

***

### B2B INTERNAL — GAPS TO CLARIFY

***

***

## PHASE 2 — B2C CUSTOMER DIRECT USE

*(Customer-facing WhatsApp chatbot, self-service)*

***

### WHO USES THIS

* **End customers** (B2B wholesale clients in Phase 2, general public in future phases)

* Customer interacts **directly with the AI chatbot** via WhatsApp

* No salesman involvement unless escalation is triggered

* Phase 2 starts with **selected B2B wholesale customers only** — not open to the public yet

***

### HOW IT WORKS — B2C CUSTOMER FLOW

```plain&#x20;text
Customer sends WhatsApp message
          ↓
Chatwood receives message
          ↓
     Contact saved in system?
    NO  → Auto-reply with clickable CS WhatsApp deeplink → END
    YES ↓
AI Chatbot greets customer
          ↓
     Returning customer?
    YES → Pull vehicle profile, skip registration
    NO  → Guided registration flow (collect vehicle info)
          ↓
AI asks what customer is looking for
(guided: max 2-3 questions)
          ↓
MAIA queries knowledge base + checks stock (Stage 1)
          ↓
AI presents available parts with details + photos
          ↓
     Customer wants to order?
    NO  → Conversation ends
    YES ↓
MAIA re-checks stock (Stage 2)
          ↓
MAIA generates Quotation → sent to customer via WhatsApp
          ↓
     Customer confirms quotation?
    NO  → Renegotiate or escalate to live agent
    YES ↓
     Order above threshold?
    YES → Escalate to live agent for approval
    NO  → MAIA auto-converts to Sales Order
          ↓
Sales Order pushed to Xeersoft
          ↓
SO document returned to customer via WhatsApp → END
```

***

### B2C CUSTOMER — DETAILED REQUIREMENTS

* **WhatsApp Entry & Contact Check (Chatwood)**

- All incoming WhatsApp messages hit Chatwood first

- Chatwood checks if the sender's number is a registered contact

- Unknown number → auto-reply message with **clickable WhatsApp deeplink to CS number** (no raw number shown) → conversation ends

- Known number → hand off to AI chatbot

* **AI Chatbot Greeting**

- Chatbot greets customer by name if profile exists

- Returning customer → skip registration, go straight to enquiry

- New customer → begin guided onboarding (see B2C Customer Data section)

* **Guided Conversation Flow**

- Chatbot must NOT be fully open-ended

- First question always: car plate number or car model

- Maximum 2–3 questions total before reaching a recommendation

- Chatbot must feel like a **friendly workshop staff member** — not robotic

- Customers must NOT feel like they are talking to AI

- Must NOT use phrases like "As an AI..." or "I am a bot..."

* **Language Detection**

- Auto-detect language from customer's message

- Respond in the same language: **Malay (primary)**, Mandarin, English (fallback)

- Must be able to switch language mid-conversation if customer switches

* **Parts Recommendation**

- Based on confirmed car model, MAIA queries knowledge base

- Show only parts **compatible with the customer's specific vehicle**

- For symptom-based queries (e.g. "my car is leaking oil") → AI maps symptom to relevant parts

- Each recommendation shows: part name, brand, price, stock status, product photo (on request)

* **Stock Visibility**

- During conversation (Stage 1): inform customer of stock availability inline

- If out of stock at primary outlet → check other outlets, inform customer with estimated delivery time

- Never let customer place an order for something that is confirmed out of stock everywhere

* **Quotation & Order**

- Customer confirms items + quantities → MAIA generates quotation

- Quotation sent to customer on WhatsApp

- Customer reviews and confirms

- Below threshold → auto SO, pushed to Xeersoft, SO document returned to customer

- Above threshold → escalate to live agent

* **Live Agent Escalation**

- Triggered when:&#x20;

  * Stock unavailable and cannot be sourced from other outlets

  * Customer wants to negotiate price

  * Order exceeds approval threshold

  * AI cannot understand or resolve the customer's request

  * Customer explicitly requests a human

- Upon escalation: chatbot sends holding message to customer (e.g. *"Let me connect you with our team"*)

- Chatwood notifies CS staff via app push notification

- CS staff takes over — **same WhatsApp number, no disruption to customer**

- Staff resolves and clicks "Resolve" in Chatwood to close case

* **Order Auto-Cancellation**

- If customer places an order and it remains unactioned past the time window → auto-cancel

- Customer notified via WhatsApp of cancellation

***

### B2C CUSTOMER — GAPS TO CLARIFY

***

***

## B2C CUSTOMER DATA — DEDICATED SECTION

*(Critical for both phases — all customer profiles feed into this store)*

***

### PURPOSE

This is the **central customer and vehicle registry**. Every customer — whether served by a salesman (Phase 1) or self-served via chatbot (Phase 2) — must have a profile here. It is the single source of truth for customer identity and vehicle information across all touchpoints.

***

### CUSTOMER PROFILE DATA STRUCTURE

```plain&#x20;text
CUSTOMER PROFILE
├── customer_id          (system-generated unique ID)
├── full_name
├── phone_number         (WhatsApp number — primary identifier)
├── customer_type        (B2B wholesale / walk-in retail / future B2C)
├── company_name         (if B2B — optional for retail)
├── email                (optional)
├── preferred_language   (Malay / Chinese / English)
├── registration_date
├── registered_by        (salesman ID / self-registered via chatbot)
└── VEHICLES [ ]         (one customer can have multiple vehicles)
         ├── vehicle_id           (system-generated)
         ├── plate_number         (primary lookup key)
         ├── brand                (e.g. Perodua, Proton, VW)
         ├── model_standard_code  (resolved from taxonomy — e.g. PERODUA_MYVI_GEN1)
         ├── model_display_name   (e.g. "Myvi 1.3 Auto")
         ├── year_of_manufacture
         ├── engine_capacity_cc   (e.g. 1300, 1500, 1600)
         ├── transmission         (Auto / Manual)
         └── registered_date
```

***

### DATA CAPTURE — HOW & WHEN

***

### VEHICLE MODEL TAXONOMY TABLE

*(Separate admin-managed reference table)*

```plain&#x20;text
VEHICLE TAXONOMY
├── taxonomy_id
├── standard_code         (e.g. PERODUA_MYVI_GEN1)
├── brand
├── model_family          (e.g. Myvi)
├── generation            (e.g. Gen1, Gen2, MK5)
├── year_range_start      (e.g. 2005)
├── year_range_end        (e.g. 2011)
├── engine_variants [ ]   (e.g. 1.0, 1.3)
├── transmission_variants (Auto, Manual, Both)
└── aliases [ ]           (all known customer names that map to this code)
                           e.g. ["big eye myvi", "myvi lama", "myvi 2010", "myvi 1.3"]
```

**Rules:**

* Every vehicle registered by a customer must be **resolved to a standard taxonomy code** — no free-text model names stored as primary reference

* Aliases table must be maintained by CK Auto Parts admin team

* If a customer input cannot be matched to any alias, the chatbot must ask for clarification rather than guessing

* Admin must be able to **add new aliases at any time** without a code deployment

***

### CUSTOMER DATA — PRIVACY & ACCESS RULES

***

### CUSTOMER DATA — GAPS TO CLARIFY


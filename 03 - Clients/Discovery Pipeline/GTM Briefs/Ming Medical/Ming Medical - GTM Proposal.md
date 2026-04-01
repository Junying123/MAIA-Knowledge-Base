---
owner: Gareth
status: draft
last_reviewed: 2026-04-02
client: Ming Medical
document_type: gtm_proposal
---

# GTM Proposal — Ming Medical

**Prepared by:** [GTM team member]  
**Date:** [YYYY-MM-DD]  
**Audience:** Ming Medical (client-facing proposal)

> Proposal content provided by GTM to the prospect. Paste or replace the body below.

---

**Client:** MING Medical Sdn Bhd

**Date:** 29/01/2026

---

1. ## Current key challenges faced by Ming Medical's team
    

From **Ming Medical's** workflow, the bottleneck is clear: the **proposal step depends heavily on the Ming Medical's time**.

### A) Ming Medical is the "proposal engine"

- Ming Medical needs to answer enquiries, **read medical reports**, match against **Ming Medical's** **CPG reference**, then manually edit a proposal template.
    
- This is high-value clinical work — but it's also repetitive and time-consuming.
    

### B) Proposal generation is manual and hard to scale

- Each proposal requires:
    
    - interpreting the medical report
        
    - matching it to the CPG (conditions → treatment plan → duration → side effects)
        
    - writing and formatting into a proposal template
        
    - inserting pricing (final step)
        
- As volume grows, it becomes difficult to:
    
    - respond fast to leads
        
    - maintain consistency across doctors
        
    - avoid missing details or inconsistencies
        

### C) The clinic needs a "doctor workspace" + consistent answers

- End users are **Ming Medical + doctors Ming Medical works with**.
    
- **Ming Medical** wants the chatbot to:
    
    - generate proposal drafts for review
        
    - answer medical queries (based on **Ming Medicals's** CPG + curated knowledge sites that Ming Medical has approved)
        
    - work in **English, Mandarin, and Arabic** (important for **Ming Medical's** patient base)
        

Ming Medical's services focuses on regenerative medicine and related treatments, which attracts high enquiry volume and detailed questions — this makes speed + consistency even more important.

---

2. ## What **Ming Medical** will get after implementing MAIA
    

### A) A "Proposal Coordinator" for doctors — without taking the Ming Medical's time

MAIA becomes **Ming Medical's** internal assistant that:

- reads the medical report
    
- matches it to **Ming Medical's** CPG knowledge
    
- drafts the full proposal (treatment plan, duration, side effects, notes)
    
- outputs in **Ming Medical's** chosen template format
    

**Ming Medical / Doctors review and insert the final price.**

### B) Faster response time → higher conversion

- Replies to enquiries become faster
    
- Proposal drafts are ready much quicker
    
- Doctors can produce consistent proposals even when **Ming Medical** are not available
    

### C) A doctor's workspace

A backend system for internal use that records the interactions made through MAIA that include:

- Uploaded medical reports
    
- Generated proposals
    

### D) Multi-language support (EN / 中文 / العربية)

Ming Medical / Doctors can ask and generate proposal drafts in:

- English
    
- Mandarin
    
- Arabic
    

---

3. ## How MAIA works (Ming Medical – practical scenario)
    

### Scenario A: Doctor generates a proposal from a medical report

1. **Ming Medical / Doctors** uploads the medical report into the doctor chatbot.
    
2. MAIA reads the report and extracts key signals (structured summary).
    
3. MAIA searches **Ming Medical's** **CPG knowledge** and suggests:
    
    1. Likely condition mapping (based on CPG)
        
    2. Recommended treatment plan (number of dosages)
        
    3. Duration
        
    4. Side effects / precautions
        
4. MAIA drafts the proposal using **Ming Medical's** template:
    
    1. Includes all required sections
        
    2. Extracts information from CPG and sends it to Ming Medical/Doctors for review
        
    3. Ming Medical/Doctors will review and insert pricing in the quotation and upon confirmation the quotation will be generated on WhatsApp
        

**Result:** Doctors produce proposals quickly, Ming Medical stays in control, and proposals remain consistent.

> Note: MAIA is designed to support Ming Medical/Doctors and standardise proposal drafting. Final clinical judgment and approval remains with Ming Medical and its doctors.

---

4. ## Recommended delivery scope (Phase 1 first, then expand)
    

### Phase 1 — "Proposal Copilot" + Base MAIA (Core Modules) - Order Management System

Includes:

- Chatbot (internal access only for Ming Medical/Doctors)
    
- CPG ingestion + structuring
    
- Medical report upload + structured summary
    
- Proposal generator (template-based)
    
- Multi-language support (EN / Mandarin / Arabic)
    
- Doctor workspace + approval workflow (draft → review → approve)
    
- Basic audit trail (who generated what, when, and which version)
    
    - **Ming Medical** will be able to see **all the changes** made to the **proposals & invoices** that were generated through the chatbot
        
- Q&A mode for doctors:
    
    - "What is the recommended plan for diseases based on CPG?"
        
    - "What are the side effects and duration of the diseases?"
        
- Guardrails to strictly ensure answers **WILL** stay within Ming Medical's CPG and its approved curated sources.
    
- Full-fledged Order Management System
    

**Outcome of Phase 1:** Ming Medical/Doctors can generate proposal drafts in minutes, and automate the order management system.

---

5. ## Setting up (after proposal confirmation)
    

After Ming Medical has confirmed this proposal, the setup will be in this order:

1. **Kickoff workshop (requirements gathering)**
    
    1. Confirm proposal template structure (sections, wording tone, required fields)
        
        - Confirm CPG format and how it should be referenced
            
2. **CPG + template onboarding**
    
    1. Convert CPG file into a structured knowledge base
        
    2. Convert Ming Medical's proposal template into a "fillable" output format
        
    3. Define the rules for what the chatbot can/cannot answer
        
    4. Define the approved curated sources of knowledge bases that MAIA can get information from
        
3. **Testing (UAT with sample reports)**
    
    1. Test across common cases
        
    2. Confirm proposal quality + formatting
        
    3. Confirm the review process of Ming Medical
        
4. **Training + go-live**
    
    1. Train doctors on how to upload reports, ask questions, generate drafts
        
    2. Go-live with support period
        

---

6. ## What Ming Medical Will Receive From MAIA
    

### MAIA provides (to start immediately)

✅ Ming Medical / doctor facing chatbot

✅ CPG knowledge base ingestion + structured retrieval

✅ Proposal generator (template-based)

✅ Multi-language support (EN / 中文 / العربية)

✅ Review/approval workflow + audit trail

✅ Base MAIA Order Management System

### Ming Medical needs to provide

✅ CPG file + proposal templates (current versions)

✅ Sample anonymised medical reports for testing

✅ A clear pricing insertion rule (Ming Medical / Doctor control, not auto-priced)

---

7. ## Timeline
    

|**Phase**|**Scope**|**Estimated Timeline**|
|---|---|---|
|Phase 1|**Core: Doctor Proposal Copilot**<br><br>Includes:<br><br>- Ming Medical and doctor(s) facing chatbot<br>    <br>- CPG knowledge base ingestion + structured retrieval<br>    <br>- Proposal generator (template-based)<br>    <br>- Multi-language support (EN / 中文 / العربية)<br>    <br>- Review/approval workflow + audit trail<br>    <br>- Base MAIA Order Management System|~ 4-8 Weeks|

8. ## Commercials (Implementation + Subscription)
    

### A) One-time implementation

|**Category**|**Component / Module**|**What it covers**|**Fee (RM)**|
|---|---|---|---|
|Core (Phase 1)|Doctor Proposal Copilot setup|Doctor chatbot + proposal generator|**35,000**|
|CPG onboarding + structuring|Convert CPG into a usable knowledge base|
|Template setup|Proposal template conversion + output formats|
|Base MAIA Order Management System|Streamline the order processing of stem cells and other products|**FREE** ~~**20,000**~~|

### Payment Terms

|**Milestone**|**Percentage**|**Amount (RM)**|**Payment Trigger**|
|---|---|---|---|
|**Upfront Payment**|50%|**RM 17,500**|Upon project commencement|
|**Completion of UAT**|50%|**RM 17,500**|Upon completion of UAT|

### B) Monthly subscription tiers

|**Tier**|**Intended usage**|**Annual fee (RM)**|
|---|---|---|
|T1|Ming Medical and up to 299 doctors|**RM 14,000 / year**|

> All hosting for the proposed solution will be deployed and managed by Ming Medical, within Ming Medical's own infrastructure environment.

> The monthly subscription will be effective after the sign off of the completion of UAT

9. ## Acknowledgement & Agreement
    

This document serves as a baseline specification and framework for Maia’s implementation and usage. By signing below, both parties agree to the commitments, responsibilities, and exclusions set out herein.

**For Mindhive Sdn. Bhd.**:

**For Ming Medical Sdn. Bhd.**:

|   |
|---|
|____________________________<br><br>Signature|
|Name:<br><br>Position:<br><br>Date:|

|   |
|---|
|____________________________<br><br>Signature|
|Name:<br><br>Position:<br><br>Date:|

---



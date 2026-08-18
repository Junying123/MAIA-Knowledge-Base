**\[Internal\] AI Prompt Templates - MAIA Onboarding**

**Internal Use Only --- Product Team**

These are reusable prompts for generating onboarding artifacts from upstream inputs. Feed the specified inputs and review/edit the output. The AI does the first draft; the product team does the quality pass.

**Prompt 1: Generate Requirements Questionnaire from Sales Narrative**

**When to use:** After receiving the sales narrative (v1+), before sending questionnaire to client.

**Inputs to provide:**

Sales narrative document

Client industry / business type

Any known integration requirements

**Prompt:**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Plain Text\
  You are a product consultant preparing a requirements questionnaire for a new client onboarding onto MAIA, a sales order management and operations platform.\
  \
  Below is the sales narrative for this client. Based on this narrative, generate a tailored version of our standard requirements questionnaire. The questionnaire should:\
  \
  1. Keep all standard sections (Company & Team, Current Systems, Products & Inventory, Sales & Order Workflow, Delivery & Logistics, Finance & Payments, Communication, Pain Points, Data Readiness, Timeline)\
  2. Pre-fill any questions where the narrative already provides the answer --- mark these as \"\[From your brief --- please confirm or correct\]\"\
  3. Add 3--5 client-specific questions under each relevant section that dig into the specific workflows, products, or challenges mentioned in the narrative\
  4. Remove or deprioritise questions that are clearly not relevant to this client\'s business\
  5. Keep the language clear, non-technical, and direct\
  \
  The output should be a complete questionnaire document ready to send to the client.\
  \
  CLIENT NARRATIVE:\
  \[paste narrative here\]\
  \
  CLIENT COMPANY WEBSITE: \[e.g.,www.company.com\]\
  KNOWN INDUSTRY: \[e.g., industrial supply, food distribution, manufacturing\]\
  KNOWN INTEGRATIONS: \[e.g., AutoCount, WhatsApp, none yet\]

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Prompt 2: Generate Meeting 1 Agenda from Questionnaire Responses**

**When to use:** After client returns the completed questionnaire, before Meeting 1.

**Inputs to provide:**

Completed questionnaire responses

Sales narrative

Any gaps or \"unsure\" answers from the questionnaire

**Prompt:**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Plain Text\
  You are a product consultant preparing for a face-to-face business workflow deep-dive meeting with a new MAIA client.\
  \
  Below are the client\'s completed questionnaire responses and the original sales narrative. Based on these, generate:\
  \
  1. A prioritised list of discussion topics for the meeting, ordered by:\
  - Items marked \"unsure\" or \"to discuss\" in the questionnaire (highest priority)\
  - Workflow areas that seem complex or unusual based on responses\
  - Exception/edge case scenarios implied by their answers\
  - Permission and approval flow details\
  \
  2. For each topic, provide 2--3 specific probing questions that go beyond what the questionnaire already captured. Focus on the \"what happens when things go wrong\" and \"who decides\" angles.\
  \
  3. A list of things we already know and do NOT need to re-discuss in the meeting (to save time).\
  \
  4. Suggested time allocation for each topic block.\
  \
  The output should be a meeting-ready discussion guide, not a formal document.\
  \
  QUESTIONNAIRE RESPONSES:\
  \[paste responses here\]\
  \
  SALES NARRATIVE:\
  \[paste narrative here\]\
  \
  GAPS/UNSURE ITEMS:\
  \[list the questions where client wrote \"unsure\", \"to discuss\", or left blank\]

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Prompt 3: Generate Client Narrative from Meeting Notes**

**When to use:** After Meeting 1 (and Meeting 2 if held), to produce the proposal-style narrative document.

**Inputs to provide:**

Meeting notes (raw)

Sales narrative (v1)

Completed questionnaire responses

Sample of the desired narrative style (Arrow or Thermac narrative)

**Prompt:**

  -------------------------------------------------------------------------------------------------------------------------------------------
  Plain Text\
  You are a product strategist writing a client narrative document for MAIA, a sales order management and operations platform by Mindhive.\
  \
  This narrative serves as the single source of truth for sales, product, and tech teams. It must:\
  \
  1. Explain who the client is --- their business, their market, their operating model\
  2. Describe how they operate today --- their current workflow, tools, pain points, and workarounds\
  3. Describe what changes with MAIA --- how MAIA addresses their specific operational challenges\
  4. Detail the feature deep-dive --- which MAIA capabilities are most relevant and why\
  5. Identify potential customisation areas --- what goes beyond base MAIA\
  6. Define scope --- what is base, what is Phase 2, what is explicitly out of scope\
  7. State how the client should evaluate whether MAIA works --- concrete success criteria\
  \
  Style guidelines:\
  - Write in clear, direct prose --- not bullet-point lists\
  - Use the client\'s real business context and examples from the meeting\
  - Frame MAIA as reducing operational burden, not as replacing judgment\
  - Be honest about what is base MAIA vs what requires custom work\
  - Avoid generic sales language --- be specific to this client\'s reality\
  \
  Use the following reference narrative as a style model:\
  \
  \[paste Arrow or Thermac narrative here\]\
  \
  MEETING NOTES:\
  \[paste raw meeting notes here\]\
  \
  SALES NARRATIVE (v1):\
  \[paste sales narrative here\]\
  \
  QUESTIONNAIRE RESPONSES:\
  \[paste responses here\]

  -------------------------------------------------------------------------------------------------------------------------------------------

**Prompt 4: Generate Tech Brief from Narrative**

**When to use:** After the client narrative is finalised, to prepare the tech lead briefing document.

**Inputs to provide:**

Finalised client narrative

MAIA base module list

MAIA base permission matrix

**Prompt:**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Plain Text\
  You are a technical product manager preparing a deployment brief for the engineering team implementing MAIA for a new client.\
  \
  Based on the client narrative below, generate a structured tech brief covering:\
  \
  1. MODULES IN SCOPE\
  For each MAIA module, mark: \[Base\] \[Custom\] \[Not needed\]\
  Modules: Customer, Item, Stock, Quotation, Sales Order, Sales Invoice, Credit Note, Debit Note, Payment Entry, Payment Receipt, Delivery Note, Return Note, Pick List, Delivery Trip, Issue Ticket, Dashboard, Daily Digest, Document Generation, Notifications\
  \
  2. PERMISSION MATRIX\
  Based on the roles described in the narrative, map each role to MAIA\'s standard permission model (READ, WRITE, CREATE, DELETE, SUBMIT). Flag any non-standard permission requirements.\
  \
  3. INTEGRATION MAP\
  \| System \| Direction (push/pull/both) \| Entities \| Frequency \| Access Method \| Vendor Contact \|\
  \
  4. CUSTOM WORKFLOW REQUIREMENTS\
  List any workflows that go beyond base MAIA configuration. For each:\
  - What triggers it\
  - What the expected behaviour is\
  - Whether it requires approval logic, exception handling, or external system interaction\
  \
  5. DATA MIGRATION SCOPE\
  \| Entity \| Source \| Estimated Volume \| Format \| Complexity (low/med/high) \|\
  \
  6. DOCUMENT TEMPLATE REQUIREMENTS\
  List any specific fields, formats, or branding requirements for printed/generated documents.\
  \
  7. GO-LIVE CRITERIA\
  What must be working before the client can go live on base MAIA?\
  \
  8. KNOWN RISKS / BLOCKERS\
  Technical or operational risks identified in the narrative.\
  \
  Output should be a structured, fill-in-the-blanks style document --- concise, not narrative.\
  \
  CLIENT NARRATIVE:\
  \[paste finalised narrative here\]\
  \
  MAIA BASE PERMISSION MATRIX:\
  \[paste current permission matrix here\]

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Prompt 5: Generate Pending Questions from Gap Analysis**

**When to use:** After Meeting 1 and/or tech lead briefing, when gaps remain.

**Inputs to provide:**

Meeting notes

Tech brief (if available)

List of unresolved items

**Prompt:**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------
  Plain Text\
  You are preparing a follow-up questions document to send to a MAIA client after the requirements gathering meeting.\
  \
  Based on the meeting notes and the unresolved items listed below, generate a clear, numbered list of questions to send to the client. For each question:\
  \
  1. State what we need to know\
  2. Explain briefly why we need it (in non-technical language)\
  3. Suggest a format for their response (e.g., \"please send a screenshot\", \"yes/no with details\", \"please provide the Excel file\")\
  \
  Group questions by topic area. Keep the language direct and simple --- the person answering may not be technical.\
  \
  Do not include questions that can be resolved internally by the Mindhive team.\
  \
  MEETING NOTES:\
  \[paste notes here\]\
  \
  UNRESOLVED ITEMS:\
  \[list items here\]

  -----------------------------------------------------------------------------------------------------------------------------------------------------------

**Prompt 6: Generate SOW from Confirmed Narrative**

**When to use:** After narrative and tech brief are confirmed, to produce the Statement of Work.

**Inputs to provide:**

Finalised client narrative

Tech brief

SOW template/sample (Shimlen SOW)

Pricing / commercial terms (from sales)

**Prompt:**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  Plain Text\
  You are drafting a Statement of Work (SOW) for a MAIA platform deployment.\
  \
  Based on the confirmed client narrative and tech brief below, generate a SOW that follows the structure of the reference SOW template. The SOW must include:\
  \
  1. Project overview and objectives\
  2. Scope of work --- base modules, integrations, customisations\
  3. Deliverables --- itemised with descriptions\
  4. Out of scope --- explicitly stated\
  5. Timeline and milestones\
  6. Client responsibilities and prerequisites\
  7. Acceptance criteria\
  8. Commercial terms (use placeholders --- sales fills in actual numbers)\
  \
  Use the reference SOW as a structural guide. Adapt the content to this specific client.\
  \
  Be explicit about what is base MAIA (included in standard deployment) vs what is custom (billed separately or phased). Do not over-promise.\
  \
  CLIENT NARRATIVE:\
  \[paste here\]\
  \
  TECH BRIEF:\
  \[paste here\]\
  \
  REFERENCE SOW TEMPLATE:\
  \[paste Shimlen SOW here\]

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------

**Prompt 7: Generate Customer-Specific UAT Trimmed Checklist**

**When to use:** After tech brief and deployment scope are locked, before Day 3 UAT.

**Inputs to provide:**

Master UAT checklist (Doc9)

Confirmed customer narrative

Confirmed tech brief

Signed SOW (final in-scope definition)

Role-permission matrix

**Prompt:**

  -----------------------------------------------------------------------------------------------------------------------------------------------
  Plain Text\
  You are preparing a Day 3 UAT checklist for a specific MAIA customer.\
  \
  Your job is to TRIM the master UAT checklist so the final output contains only tests relevant to this customer.\
  \
  Use the sources below in this priority order:\
  1. Signed SOW (final scope baseline)\
  2. Confirmed tech brief\
  3. Confirmed customer narrative\
  4. Role-permission matrix\
  \
  Trimming rules:\
  1. Keep all \[CORE\] tests.\
  2. Keep only \[MODULE:x\] tests where module x is in scope for this customer.\
  3. Keep only \[INTEGRATION:x\] tests where that integration is confirmed in scope and available.\
  4. Keep only \[ROLE:x\] tests for customer roles that exist in the role-permission matrix.\
  5. Keep only \[CONDITIONAL:x\] tests when the described condition is explicitly true for this customer.\
  6. Remove tests tied to out-of-scope items, deferred items, or post-go-live customisations.\
  7. If a test is ambiguous, keep it in a section called \"REVIEW REQUIRED\" and explain why.\
  \
  Output format:\
  A. \"UAT TRIMMED CHECKLIST � \[Customer Name\]\"\
  B. Included test cases grouped by module/workflow\
  C. \"REVIEW REQUIRED\" section (if any)\
  D. \"EXCLUDED WITH REASON\" section listing dropped tests and the reason (out of scope / integration not used / role not present / deferred)\
  \
  Do not invent workflows, integrations, or roles that are not supported by the inputs.\
  Do not include any test that conflicts with the signed SOW.\
  \
  MASTER UAT CHECKLIST (Doc9):\
  \[paste here\]\
  \
  SIGNED SOW:\
  \[paste here\]\
  \
  CONFIRMED TECH BRIEF:\
  \[paste here\]\
  \
  CONFIRMED CUSTOMER NARRATIVE:\
  \[paste here\]\
  \
  ROLE-PERMISSION MATRIX:\
  \[paste here\]

  -----------------------------------------------------------------------------------------------------------------------------------------------

**Usage Notes**

**Always review AI output before sending to client or using for decisions.** AI generates the draft; product owns the accuracy.

**Feed as much context as possible.** These prompts work better with more input � don\'t skimp on the meeting notes or questionnaire responses.

**Iterate.** If the first output isn\'t right, refine with follow-up prompts rather than rewriting from scratch.

**Maintain the style.** The Arrow and Thermac narratives set the tone. Use them as reference anchors so all client narratives feel consistent.

*MAIA by Mindhive � AI Prompt Templates v1.0 � Internal Use Only*

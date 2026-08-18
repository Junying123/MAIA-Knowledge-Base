**UAT Briefing Pack - Generator Prompt**

**MASTER PROMPT --- CLIENT UAT BRIEFING PACK GENERATOR**

**ROLE**

Act as a senior UAT Lead, Implementation Consultant, Business Analyst and Deployment Readiness Manager.

Your responsibility is to analyse the supplied client and project materials and produce a concise, operational UAT Briefing Pack for the person assigned to conduct the client's UAT.

The UAT conductor may be a developer, tester, product team member, account manager or another employee who:

was not deeply involved in the implementation;

has limited prior knowledge of the client;

may receive the assignment shortly before the session;

needs to run the UAT confidently without depending heavily on the core project team.

**CENTRAL PROBLEM STATEMENT**

Keep the following problem at the centre of all analysis and output decisions:

+:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Critical UAT knowledge is currently dependent on experienced individuals and scattered across project documents, meeting discussions, technical teams and personal knowledge. |
|                                                                                                                                                                               |
| A replacement UAT conductor may know the test cases but still be unaware of:                                                                                                  |
|                                                                                                                                                                               |
| what matters most to the client;                                                                                                                                              |
|                                                                                                                                                                               |
| what the client considers non-negotiable;                                                                                                                                     |
|                                                                                                                                                                               |
| what will directly affect sign-off;                                                                                                                                           |
|                                                                                                                                                                               |
| where the system or workflow could fail;                                                                                                                                      |
|                                                                                                                                                                               |
| why it could fail;                                                                                                                                                            |
|                                                                                                                                                                               |
| what workarounds or recovery actions are available;                                                                                                                           |
|                                                                                                                                                                               |
| which functionality is incomplete or unavailable;                                                                                                                             |
|                                                                                                                                                                               |
| what should be disclosed before the client discovers it;                                                                                                                      |
|                                                                                                                                                                               |
| what must not be promised or improvised;                                                                                                                                      |
|                                                                                                                                                                               |
| and when the session should stop or be escalated.                                                                                                                             |
|                                                                                                                                                                               |
| This creates a risk that the team discovers important problems at the same time as the client, responds inconsistently, loses credibility and jeopardises UAT sign-off.       |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

The purpose of the pack is therefore:

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Prepare the conductor to enter the UAT already knowing the likely outcomes, risks, failure points, workarounds, known gaps, sign-off criteria and approved communication approach---rather than using the client session to discover them.

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The guiding principle is:

  -------------------------------------------------------------------------
  **Inform the client before they find out and point it out themselves.**

  -------------------------------------------------------------------------

**REQUIRED OUTCOME**

The completed pack must allow the conductor to truthfully say:

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  I understand how this client operates, what matters most to them, what they are expected to accept, what may fail, what to do when it fails, what gaps already exist, what must be disclosed, what would block sign-off and who I should escalate to.

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The pack must help the conductor:

understand the client and their actual business workflow;

understand what is being validated during UAT;

distinguish sign-off blockers from manageable issues;

anticipate likely failure points before the session;

use only approved workarounds and recovery actions;

proactively disclose known limitations or gaps;

avoid unsupported promises and improvisation;

maintain control if the session begins to deteriorate;

capture useful evidence and decisions;

protect client confidence and the likelihood of sign-off.

**INPUTS**

Analyse all materials supplied with this prompt.

Possible inputs may include:

client name and industry;

signed proposal, contract or statement of work;

commercial commitments;

kickoff meeting notes;

discovery and requirements workshops;

client Voice of Customer documents;

scope-lock documents;

configuration requirements;

client-specific configuration requirements;

process and role workflows;

UAT scripts or checklists;

technical specifications;

change requests;

meeting transcripts;

internal UAT preparation sessions;

previous UAT recordings or debriefs;

bug and defect trackers;

integration specifications;

data migration information;

user roles and permissions;

sample purchase orders, WhatsApp orders or client documents;

internal QA results;

known issues;

approved workarounds;

tentative development timelines;

escalation contacts;

UAT environment and deployment information.

Do not assume that all information is available.

Where information is missing, unclear or contradictory, explicitly mark it as:

**Confirmed**

**Inferred --- Verify Before UAT**

**Unknown --- Must Be Clarified**

**Conflicting Sources**

**Not Yet Tested**

Never invent facts, commitments, workarounds, technical behaviour, readiness dates or client expectations.

**SOURCE AND EVIDENCE RULES**

Use the following source priority unless the materials clearly establish another authority:

Signed contract, proposal or Statement of Work

Approved scope-lock or requirement documents

Approved change requests

Confirmed client decisions and meeting minutes

Client-specific configuration records

Approved technical specifications

Latest verified internal testing evidence

UAT preparation and debrief discussions

Informal discussions or assumptions

When sources conflict:

do not silently choose one;

identify the conflict;

explain why it matters to UAT;

state who must resolve it before the session.

For material claims such as acceptance criteria, scope commitments, known gaps and readiness dates, identify the source document or meeting where possible.

**REQUIRED ANALYSIS METHOD**

Before writing the pack, perform the following analysis internally.

**Step 1 --- Reconstruct the client's actual operation**

Determine:

what the client does;

who performs each operational step;

what systems and manual tools are currently used;

how orders or requests enter the business;

what documents are created;

where approvals happen;

what exceptions are common;

what information users need to complete their jobs;

what is unusual about this client.

Do not begin from the generic MAIA product workflow.

Begin from the client's real workflow and determine how MAIA fits into it.

**Step 2 --- Identify what matters most to the client**

Identify the three to five client priorities most likely to determine confidence and acceptance.

Consider:

repeatedly raised requirements;

pain points that motivated the project;

operationally critical information;

financial correctness;

quantity and UOM accuracy;

document outputs;

integration results;

approval controls;

user adoption;

language or device needs;

previous client frustrations;

areas where trust is already weak.

Do not assume all requirements have equal importance.

**Step 3 --- Identify non-negotiable acceptance criteria**

Determine the minimum conditions required for the client to sign off.

Separate:

**Must Pass for Sign-Off**

**May Enter Hypercare**

**Future Phase / Deferred**

**Out of Scope**

**Requires Explicit Client Acceptance of Workaround**

A requirement should be treated as a potential sign-off blocker when its failure would prevent the client from using MAIA for the agreed day-to-day workflow.

**Step 4 --- Rehearse likely failure points**

For every important workflow stage, determine:

what could fail;

where it could fail;

what the client would see;

why it could happen;

whether it has been tested using the client's actual instance and data;

how the conductor should recover;

whether a workaround exists;

whether the session can continue;

when escalation is mandatory.

Use real client samples wherever available.

Pay particular attention to previous UAT failure patterns such as:

incorrect pricing or discount calculations;

incorrect historical pricing;

unit-of-measure mismatches;

wrong item or customer mapping;

decimal precision errors;

incorrect document templates;

missing required fields;

wrong document numbering;

stock validation occurring too late;

vague error messages;

ERP integration failures;

incorrect accounting or e-invoicing classification;

inability to amend or manage orders as users work in reality;

stale chatbot or document context;

unsupported multi-user or multi-order behaviour;

mobile usability failures;

missing warehouse, shelf, weight or volume information;

requirements the client believes were previously raised but remain unresolved.

**Step 5 --- Identify known gaps and disclosure needs**

For every known functionality or feature gap, determine:

what is unavailable or incomplete;

why it is unavailable;

why it is not being demonstrated;

its impact on the client;

the approved workaround;

whether it affects sign-off;

whether the client has already accepted the limitation;

the approved explanation;

the latest approved tentative readiness date;

the confidence level of that date.

Do not generate or guess tentative dates.

If no approved date exists, state:

  ------------------------------------------------------------------------------------------------
  No approved readiness date is currently available. The conductor must not provide an estimate.

  ------------------------------------------------------------------------------------------------

**Step 6 --- Determine UAT readiness**

Assign one overall recommendation:

**GO**

All non-negotiable criteria have been internally proven using the relevant client configuration, data, user roles and integrations.

**CONDITIONAL GO**

Only known, disclosed and non-blocking issues remain, with approved workarounds or agreed follow-up actions.

**NO-GO**

A critical acceptance criterion, integration, calculation, workflow, environment dependency or client commitment remains unproven or unresolved.

The recommendation must be based on evidence, not general confidence.

**OUTPUT FORMAT**

Produce the output in plain English and make it highly scannable.

The main pack must not exceed:

**1 page for the UAT Commander Brief**

**2--3 pages for the Client UAT Mission Pack**

Do not expand the main pack to include full background documentation.

Detailed evidence should be referenced as supporting material, not copied into the pack.

**PART 1 --- UAT COMMANDER BRIEF**

Produce a one-page summary that the conductor can keep open during the session.

Include:

**Client and UAT**

Client name

UAT date and location, if known

UAT objective

Final signatory

Client relationship temperature: Green, Amber or Red

**What Matters Most**

List the client's three to five most important priorities.

For each priority, state:

why it matters;

how the client is likely to test it;

whether it is a sign-off blocker.

**Non-Negotiable Acceptance Criteria**

List only the items that must pass for sign-off.

**Top Failure Risks**

List the five to eight most material risks.

For each risk, state:

likely symptom;

approved recovery or workaround;

whether UAT may continue;

escalation owner.

**Known Gaps to Disclose**

List the material gaps the conductor must explain before the client encounters them.

Include the approved wording or key message.

**Do Not Promise**

Clearly list:

dates that are not approved;

features that are not committed;

workarounds that are not confirmed;

scope decisions the conductor cannot make.

**Session Decision**

State:

GO;

CONDITIONAL GO; or

NO-GO.

Add a one-sentence justification.

**PART 2 --- CLIENT UAT MISSION PACK**

The Client UAT Mission Pack must be no more than 2--3 pages.

**PAGE 1 --- CLIENT AND UAT CONTEXT**

**1. UAT Mission**

Write a short client-specific mission statement.

It should explain what business operation is being proven---not simply say "test MAIA."

**2. Client Operating Profile**

Include only information that affects UAT conduct:

business and industry;

main users and departments;

current systems and manual tools;

order or request sources;

operating volume or complexity;

language and device considerations;

unusual business practices;

client terminology.

**3. What Makes This Client Different**

List the operational factors that make generic happy-path testing insufficient.

Examples include:

mixed UOMs;

complex pricing;

repeated amendments;

multiple active orders;

multilingual inputs;

special delivery handling;

unusual document requirements;

client-specific ERP rules.

**4. Client Priority and Sensitivity Map**

Use a compact table:

![](UAT Briefing Pack - Generator Prompt_assets/media/image1.png)

**点击图片可查看完整电子表格**

Limit this to the three to five most important priorities.

**5. Relationship and Decision Context**

State:

current confidence or frustration level;

previously unresolved concerns;

topics repeatedly raised;

key client stakeholders;

final decision-maker;

any sensitive communication considerations.

Do not include gossip, irrelevant personal information or unsupported assumptions.

**PAGE 2 --- WORKFLOW AND ACCEPTANCE BOUNDARIES**

**1. Agreed End-to-End Workflow**

Show the workflow using a simple vertical flow format.

Example:

  --------------------------------------------------------------
  Plain Text\
  CUSTOMER Sends PO or WhatsApp order\
  ↓\
  SALES Reviews customer, item, quantity and pricing\
  ↓\
  MAIA Creates draft Sales Order\
  ↓\
  APPROVER Reviews price or credit exception\
  ↓\
  WAREHOUSE Uses Pick List and confirms quantity\
  ↓\
  FINANCE Verifies Delivery Note and Invoice in ERP

  --------------------------------------------------------------

Show retained manual or external steps explicitly.

Example:

  -------------------------------------------------------------------
  Delivery-trip planning remains in Excel during the current phase.

  -------------------------------------------------------------------

**2. Acceptance Boundaries**

Separate clearly:

**Must Pass for Sign-Off**

Only include non-negotiable acceptance criteria.

**May Enter Hypercare**

Include minor defects or usability issues that do not prevent day-to-day operation.

**Deferred / Future Phase**

Include agreed future functionality and approved tentative timing where available.

**Out of Scope**

Include client expectations or requests that are not part of the current commitment.

**Manual Workarounds**

Include only workarounds that have been approved and are operationally usable.

**3. Role and Decision Map**

Use a compact table:

![](UAT Briefing Pack - Generator Prompt_assets/media/image2.png)

**点击图片可查看完整电子表格**

Identify the person who can:

approve sign-off;

accept a workaround;

agree to defer an item;

confirm that an issue blocks operations.

**PAGE 3 --- RISK, GAP AND SESSION GUIDANCE**

**1. Failure and Recovery Map**

Use a compact table:

![](UAT Briefing Pack - Generator Prompt_assets/media/image3.png)

**点击图片可查看完整电子表格**

Only include the five to eight most important risks.

Prioritise risks that may:

cause incorrect financial values;

create incorrect quantities;

create invalid ERP records;

expose a previously raised requirement gap;

prevent downstream workflows;

damage client trust;

threaten sign-off.

**2. Known Gap and Disclosure Register**

Use:

![](UAT Briefing Pack - Generator Prompt_assets/media/image4.png)

**点击图片可查看完整电子表格**

If no approved wording exists, label it:

  --------------------------------------------------------------
  Approved explanation required before UAT.

  --------------------------------------------------------------

If no approved date exists, label it:

  --------------------------------------------------------------
  No approved date --- do not estimate.

  --------------------------------------------------------------

**3. Session Conduct Instructions**

Include a concise set of instructions specific to this UAT.

At minimum:

disclose known limitations before the affected workflow;

let the actual client user perform the test;

do not guide the user into producing a Pass;

apply only approved workarounds;

do not promise unapproved dates or features;

stop the affected workflow if financial values, quantities, stock or ERP records are incorrect;

capture evidence before retrying;

do not spend excessive time debugging in front of the client;

escalate using the named channel and owner.

**4. Session Deterioration Triggers**

List the conditions that should cause the conductor to pause or escalate.

Examples:

repeated failure of the same critical workflow;

client raises a previously committed requirement that is absent;

team members give contradictory explanations;

integration failure invalidates later test cases;

conductor cannot explain the expected result;

a non-negotiable acceptance criterion fails;

debugging begins consuming the session;

client confidence visibly deteriorates.

**5. Final Readiness Recommendation**

State:

GO;

CONDITIONAL GO; or

NO-GO.

Explain the decision in no more than three sentences.

**PART 3 --- SUPPORTING REFERENCES**

Do not reproduce all supporting documents.

Provide a short index of the documents or links the conductor may need to open:

Full UAT checklist or script

Real client sample test results

Defect tracker

Scope and commitment source

Configuration matrix

Integration health or readiness evidence

Known issue register

UAT evidence and sign-off record

Escalation contact list

For each reference, explain in one line when the conductor should use it.

**SPECIAL CLASSIFICATION RULES**

When an issue appears during UAT, classify it as one of the following:

Confirmed defect

Configuration issue

Incorrect or incomplete client data

Environment or deployment issue

Integration issue

User permission issue

Training or user-understanding gap

Known product limitation

Agreed future-phase item

Out-of-scope request

New change request

Unresolved requirement or commitment conflict

Do not label every client concern as a defect.

Do not dismiss a concern as out of scope without evidence.

**CONFIGURATION AND TOUCHPOINT RULES**

Where relevant, compare the client's requirements against the supplied Core MAIA Config Matrix.

Classify each requirement as:

supported through existing configuration;

supported through core product behaviour;

requires development or customisation;

supported through an approved manual workaround;

not currently supported;

unclear due to missing information.

Use the term **ERP Integration**, not "SQL Integration," unless referring specifically to SQL Accounting as the client's ERP.

ERP Integration may include:

SQL Accounting;

AutoCount;

SAP;

Sage;

ERPNext;

other client systems.

If a client requirement includes a touchpoint that cannot be matched to the Core MAIA Config Matrix:

flag it;

assess whether it is:

an actual product or implementation gap;

a client-specific customisation;

an integration touchpoint;

or a domain missing from the Core MAIA Config Matrix;

include it as an alert;

do not stop the entire output.

**CONTENT EXCLUSIONS**

Do not fill the main briefing pack with:

complete project history;

every meeting discussion;

full raw requirement lists;

every reported bug;

technical architecture;

source code or API details;

exhaustive configuration values;

long narrative explanations;

generic MAIA feature descriptions;

screenshots for every scenario;

information that does not affect UAT conduct, risk, acceptance or sign-off.

The pack should contain decisions, risks and operating guidance.

Supporting materials should contain detailed evidence.

**WRITING AND PRESENTATION STANDARD**

The pack must be:

direct;

operational;

client-specific;

concise;

evidence-based;

easy to scan during a live session;

understandable to both technical and non-technical conductors.

Use clear markers where helpful:

**CRITICAL**

**SIGN-OFF BLOCKER**

**DISCLOSE BEFORE TESTING**

**KNOWN WORKAROUND**

**DO NOT PROMISE**

**ESCALATE**

**VERIFY BEFORE UAT**

Avoid generic advice that could apply to any client.

Every section should answer one of these questions:

What does the conductor need to know?

What does the conductor need to do?

What could go wrong?

What should the conductor say?

What would affect sign-off?

When should the conductor stop or escalate?

**FINAL QUALITY CHECK**

Before completing the response, verify that:

the Commander Brief is no more than one page;

the Client UAT Mission Pack is no more than three pages;

the pack is centred on conductor readiness;

the client's top priorities are explicit;

non-negotiable acceptance criteria are explicit;

likely failure points are identified;

each material failure has a recovery or escalation instruction;

known gaps have approved explanations or are flagged for approval;

tentative dates are not invented;

sign-off blockers are separated from hypercare items;

real client workflows are prioritised over generic MAIA workflows;

previous UAT failure patterns have been considered;

the final GO / CONDITIONAL GO / NO-GO recommendation is evidence-based;

the conductor should not discover any important known issue at the same time as the client.

Now analyse the supplied materials and generate the UAT Briefing Pack.

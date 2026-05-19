## Who GST Is

GST Fine Foods operates as part of GST Group, a Malaysian seafood supplier and distributor with operations in Penang, Langkawi, and Rawang. On its official website, the group presents itself as a supplier of seafood and related frozen-food categories, with product ranges spanning barramundi, tiger prawns, whole fish, fillets and portions, salmon and trout, squid, shellfish, poultry and meat, and other frozen products. The group also highlights retail and food service clients, online presence through Shopee and Lazada, and sustainability credentials including Best Aquaculture Practices certification for its barramundi value chain. (gstgroup.com.my) From the proposal context, GST Fine Foods appears to run a high-volume B2B sales and quotation workflow where operational speed, product matching accuracy, pricing control, approval handling, and downstream coordination matter daily. The current operating backbone remains SAP Business One, but many of the steps around quotation handling and order preparation still depend heavily on human effort, interpretation, and coordination.

That is where this MAIA proposal fits.

---

## Before MAIA: How GST Operates Today

GST Fine Foods already has a real system environment in place. The issue is not the absence of software. The issue is that too much of the real operational work still happens outside the system, through manual checking, staff familiarity, and repeated coordination.

### The quotation review burden

A large part of the current workflow begins with quotation requests, especially Excel-based quotation files. The team still needs to open the file, review the requested items line by line, identify which products are being requested, check what can be fulfilled, and determine the right pricing before a quotation can be prepared and sent back to the customer.

This creates a treadmill effect. The team is not simply issuing quotations. They are manually interpreting requests first, then rebuilding the intended order logic before the customer even gets a response.

### The product matching problem

The challenge becomes bigger because customer wording does not always match GST Fine Foods’ internal item naming exactly. A quotation line may use a customer-specific name, a different product description, or wording based on size, cut, weight, or other characteristics that do not map cleanly to the internal item master.

That means the quality of the quotation often depends on whether the person handling it already knows how to translate customer language into GST’s internal references. When that knowledge sits only with a smaller number of experienced staff, the process becomes harder to scale and more exposed to inconsistency.

### The checking burden before an order can move

Even after the product intent is understood, the team still needs to verify whether the order can safely proceed. Stock availability, customer pricing, credit status, and customer-specific requirements all need to be checked before a quotation is confirmed or a sales order is created.

This means a lot of operational energy goes into answering basic but important questions:

- is this the correct internal item
    
- do we have stock
    
- is the price correct for this customer
    
- does this case need approval
    
- can the team move forward now, or does someone need to intervene first
    

### The payment and approval follow-up loop

Finance and approval-related cases are another weak point in the current flow. Credit-related issues and payment slip verification still rely on manual checking and coordination. That makes the process slower and also reduces clarity around who reviewed what, who approved what, and whether the case was handled consistently.

For management, the problem is not only whether work gets done. The problem is whether there is a clean operational trail behind the work.

### Visibility remains fragmented

GST Fine Foods also wants stronger visibility around stock, low-stock situations, replenishment follow-up, and aging or slow-moving items. In addition, some operational review still requires Excel-based handling because dashboard visibility alone is not always sufficient for planning and action-taking.

So the current environment works, but it works by relying on people to connect the dots. That is acceptable at low pressure. It becomes expensive and fragile when the volume rises.

---

## After MAIA: What Changes

MAIA is not introduced here as an ERP replacement. SAP Business One remains the core operational system of record. MAIA sits on top of the current setup as a structured coordination layer that helps the team move work forward with less manual rework and less dependency on staff memory.

An internal user receives a quotation request in Excel format and forwards it into MAIA. Instead of opening the file and reconstructing everything manually from scratch, the user sees a structured draft prepared in MAIA. The line items are read, the request is organized, and the system helps surface likely internal item matches based on GST Fine Foods’ product references.

Where a customer’s wording is unclear or differs from the internal naming, MAIA helps narrow the likely matches instead of leaving the user to rely entirely on memory. The user still reviews and confirms the result, but the system takes over a large part of the administrative interpretation work.

When the order is ready to move forward, MAIA supports the next checks. It helps the user review stock position, pricing context, credit-related status, and other customer-specific conditions before proceeding. If the case needs approval, the workflow is routed more cleanly and the decision path is easier to review later.

If a payment slip is involved, the user can route that review through MAIA as well. Instead of treating payment advice as a disconnected side process, MAIA helps structure the review and place it within the same operational flow.

On the management side, visibility improves because quotations, orders, exceptions, and follow-up items sit in a more structured workspace instead of living mainly in scattered handoffs. The result is not just faster work. It is work that is easier to track, easier to hand over, and easier to scale.

---

## Feature Deep Dive

1. ### Quotation intake and draft preparation*
    

GST Fine Foods’ quotation process starts with customer quotation files, especially Excel-based files. MAIA is designed to help the team process those files into a usable draft more quickly.

**What it does:** A user forwards the quotation file into MAIA. MAIA reads the file, structures the quotation lines, and prepares a draft quotation view for internal review.

**What it will not do:** MAIA does not remove the need for human confirmation. The user still reviews the draft before anything is finalized.

**Why it matters:** The value is not in “reading Excel.” The value is in reducing the amount of manual reconstruction work required before the quotation becomes usable.

2. ### Product matching support
    

A major part of the challenge is that customer descriptions do not always match GST Fine Foods’ internal item references exactly.

**What it does:** MAIA supports product matching by comparing customer wording against GST’s internal item references and configured product characteristics. It helps surface likely matches for user review.

**What it will not do:** Unless separately scoped deeper as customization, MAIA does not promise perfect autonomous matching for every ambiguous product case.

**Why it matters:** This reduces reliance on staff memory and makes quotation preparation more consistent across users.

3. ### Order preparation and standard order handling
    

Once a quotation is confirmed or an order request is ready, MAIA helps move the process into structured order preparation.

**What it does:** MAIA helps prepare the sales order flow, checks relevant context, and supports faster standard order handling.

**What it will not do:** MAIA does not replace the need for agreed downstream ERP behavior. It supports the operational layer and syncs into the confirmed system workflow.

**Why it matters:** The project is not only about complex quotation cases. It must also improve the speed and reliability of normal day-to-day order work.

4. ### SAP sync and downstream document support (MUST USE CRYSTAL REPORT FORMAT)
    

The client concern is not only whether MAIA looks useful on screen. It is whether the resulting data and documents are correct in the real operating environment.

**What it does:** MAIA supports the agreed workflow into SAP Business One and the generation of agreed downstream outputs such as quotation, sales order, invoice PDF, and related references based on scoped flow.

**What it will not do:** MAIA is not being positioned here as a full ERP replacement or a full restructuring of SAP Business One.

**Why it matters:** If the data sent into SAP is wrong, or the downstream document flow breaks, then the system has not actually solved the operational problem. That is why the acceptance criteria explicitly test SAP sync accuracy and downstream document generation.

5. ### Payment slip review and approval handling
    

Credit-related exceptions and payment proof handling are part of the operational reality today.

**What it does:** In base scope, MAIA supports structured payment slip review and selected approval handling for agreed workflows. If GST Fine Foods chooses deeper customization, the system can also be extended into more advanced payment slip exception handling and related routing logic.

**What it will not do:** Advanced exception logic beyond the agreed scope is not assumed automatically.

**Why it matters:** This makes exception cases easier to manage and less dependent on fragmented manual follow-up.

6. ### Planning and management visibility
    

Operations do not stop at order creation. Teams still need usable visibility for follow-up and planning.

**What it does:** MAIA provides backend visibility around the agreed workflow, and can be extended into Excel-based operational exports and additional planning support where needed.

**What it will not do:** Deeper planning-oriented exports and broader client-specific control pages remain customization items where applicable.

**Why it matters:** This gives management a better view of what is happening, what is stuck, and where follow-up is needed.

---

## Scope Summary

### Included

- quotation intake from Excel and quotation draft preparation
    
- product matching support during quotation review
    
- sales order creation and confirmation flow
    
- approval support for selected exception cases
    
- basic payment slip review and mismatch handling support
    
- stock query and stock reminder visibility
    
- backend visibility for operational tracking
    
- agreed document generation and document trail support
    

### Optional customization scope

- customer-specific quotation matching logic
    
- advanced payment slip exception handling
    
- aging and clearance reminder logic for sales follow-up
    
- Excel export support for planning and operational review
    
- Customer Purchase Request Note tracking flow
    
- statement of account generation support, subject to SAP-side feasibility
    

### Not positioned as Phase 1

- full ERP replacement
    
- major restructuring of SAP Business One
    
- custom workflows outside agreed Phase 1 scope
    
- advanced approval matrices unless separately scoped
    
- custom dashboards beyond agreed visibility scope
    
- additional customizations not listed in the proposal
    

---

## How GST Should Evaluate Whether MAIA Really Works

A major concern raised by the client is whether the proposed solution may sound too good to be true. That concern is valid, and the right way to address it is not with more promises. It is with measurable proof.

That is why the acceptance framework should be tied directly to the features MAIA is supposed to handle in GST Fine Foods’ actual workflow.

The project should be judged against agreed UAT sample cases and quantified pass thresholds, not subjective impressions.

### Core proof points

The strongest acceptance metrics for this project are:

1. **Quotation draft generation success rate** MAIA can process agreed quotation files into usable draft outputs. Target: **100%**
    
2. **First-pass quotation line completeness** MAIA includes the expected quotation lines and quantities in the first draft. Target: **95% to 100%**
    
3. **Product match suggestion acceptance rate** Users accept MAIA’s suggested product matches without needing to change most of them. Target: **80% to 85% or above**
    
4. **Quotation preparation time reduction** MAIA materially reduces the time needed to prepare a reviewable quotation draft. Target: **At least 50% reduction**
    
5. **Stock answer reliability** MAIA’s stock answers match the agreed source-of-truth inventory snapshot. Target: **95% or above**
    
6. **Approval routing success rate** Approval-required cases are routed correctly. Target: **100%**
    
7. **Standard order creation time reduction** MAIA materially reduces the time needed to prepare a standard order. Target: **At least 50% reduction**
    
8. **SAP sync accuracy** Data pushed from MAIA into SAP Business One is correct. Target: **100%**
    
9. **Downstream document generation success rate** MAIA successfully generates the agreed downstream document outputs for standard workflows. Target: **100%**
    

These metrics directly test whether MAIA is doing the real work it claims to do. They are not software vanity metrics. They are workflow proof metrics.

The project should only be considered successfully delivered when the agreed pass thresholds are met on the jointly defined UAT sample set for the in-scope features.

---

## The Design Principle

GST Fine Foods’ staff are not the problem. The business already has people who know the customers, the products, the internal logic, and the workflow realities.

The problem is that too much of the operational burden still sits on people having to remember, interpret, re-check, and coordinate manually.

MAIA is not there to replace business judgment. It is there to take administrative weight off the team, structure the workflow more cleanly, and make the business less dependent on memory and manual reconstruction.

SAP Business One remains the system backbone. MAIA becomes the layer that helps people move faster, more consistently, and with better visibility around the work that matters.

If you want, I can next turn this into:

- a **clean client-facing one-pager**
    
- a **Gamma prompt** to generate slides in this exact narrative style
    
- or a **persona-style customer narrative template** you can reuse for future clients.
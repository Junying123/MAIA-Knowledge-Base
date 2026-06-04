---
owner: Gareth
status: draft
last_reviewed: 2026-06-03
client: Macro Frozen Sdn. Bhd.
meeting_type: Requirement Gathering
meeting_date: 2026-06-04
---

# Macrofood — Requirement Gathering Questionnaire

**Client:** Macro Frozen Sdn. Bhd. (Macrofood)
**PIC:** Choy Kien Yang (David), MD
**Meeting:** 4 June 2026, 3pm, Face-to-Face
**Prepared by:** Gareth

> **BRAND REMINDER:** Present as **AutorunBiz PLT** at all times. Never mention Mindhive. No Mindhive clothing.

**Purpose:** This is a workflow deep-dive guide for the face-to-face session. Basic facts (SQL version, headcount, order volume, payment methods, go-live date) were collected in the pre-onboarding survey — do not repeat them. Every question here is designed to surface workflow steps, edge cases, MAIA configuration decisions, or information that can only be gotten through conversation.

**Pre-meeting:** Check whether the pre-onboarding survey was returned before walking in. If not returned, park basic-fact questions for after the meeting. NDA status — confirm at start.

---

## Section 1: Order Intake & Daily Flow

*Goal: Understand the end-to-end daily operational rhythm so MAIA can be configured to match it exactly.*

1. Walk us through a typical working day — from when the first order arrives to when the last document is issued. What happens, in what order, and who does each step?
2. When orders come in via WhatsApp, how does the admin know which message is an order versus a general inquiry? Is there a pattern, a dedicated group, or does it require judgement every time?
3. How does the warehouse team find out what to prepare each day — does admin send a list to them via WhatsApp, a printed sheet, or something else? What time does this happen?
4. When a customer sends a voice message to order, who listens to it and how is the order captured from it?
5. What happens when an order comes in after working hours — is it processed first thing the next morning, or does someone handle it the same night?
6. If a customer modifies their order after it has already been keyed into SQL (e.g., changes quantity or adds an item), who can make that change? What is the process and is there a cutoff time?
7. Are there ever urgent or skip-the-queue orders — e.g., a loyal customer requests something last minute? How is that handled without disrupting the normal flow?
8. **MAIA fit:** When MAIA processes an incoming WhatsApp order and prepares a draft Sales Order, who should review and confirm it before it goes into SQL — the same admin, or can a salesperson also confirm?

---

## Section 2: Fresh Weight Workflow

*Goal: Map the exact sequence and timing so MAIA can support the workflow without creating duplicate steps.*

9. Give us the exact day and time flow for a typical fresh weight order: what time does the customer place the order, when does warehouse prep begin, when is the weight confirmed, and when is the final invoice issued?
10. After the warehouse weighs and confirms the final weight, how is that weight communicated to admin today — WhatsApp message, a printed slip, verbal, or something else?
11. Can the price per kg shift between when the order is placed and when the weight is finalized? (e.g., if supplier pricing changes overnight, does it affect this order?)
12. Who has authority to confirm the final weight as correct before the invoice is issued — warehouse staff self-confirm, or does admin or management sign off?
13. What is the acceptable rounding unit for weight? (e.g., per 0.1 kg, per 100 g, to the nearest gram?)
14. Which products are always sold by fixed quantity and never by weight — list them. Which are always weight-based?
15. What happens if the actual weight is significantly different from what the customer ordered — e.g., customer ordered 10 kg but warehouse can only provide 7 kg? Who decides whether to proceed, substitute, or cancel?
16. **MAIA fit:** Once the final weight is confirmed and keyed into MAIA, should MAIA automatically generate the Delivery Order and Invoice for review, or wait for an explicit "confirm and generate" command from admin?

---

## Section 3: Pricing & Customer Groups

*Goal: Understand the exact pricing logic so MAIA can apply the right price to the right customer without manual checks.*

17. Walk us through how you price an order for a specific customer. What do you check — their customer group, their individual price list, the current market rate, or all three?
18. Is the group markup applied as a fixed RM amount over the base price, or as a percentage? Is it the same for all product categories or different per category?
19. For customers with individual special pricing, where is that price stored today — SQL, Excel, or in someone's head? Who maintains it?
20. When a price changes (e.g., pork belly goes up today), what is the exact process — who decides the new price, who updates it in SQL, and how long does the update take?
21. For a bulk price change (e.g., all imported beef up 5% this week), how is this done today — manual entry per item in SQL, an Excel upload, or something else?
22. Which customers are on consignment? For each: what is the settlement cycle (weekly, monthly end?), how is the consignment stock tracked today (SQL, separate spreadsheet, manual count?), and who reconciles it?
23. What credit terms apply to each customer segment? (e.g., Wholesale = 30 days, Retail = COD, Consignment = end of month — confirm and fill in.)
24. At what outstanding balance level does Macrofood flag or block a customer — is there a formal RM threshold, or is it a judgment call by the boss or manager?
25. Does Macrofood ever give ad hoc discounts or markdowns to customers? Who approves the discount, and how is it applied in SQL?
26. When a new customer is onboarded, how is their pricing decided — assigned to a group, individually negotiated, or starts at standard and adjusted later? Who enters it into SQL?
27. **MAIA fit:** When MAIA prepares a draft Sales Order, it will reference the customer's assigned price list. Should MAIA flag an alert if the price it is about to use is older than X days? If yes, what is the acceptable age for a price before it should be flagged as potentially stale?

---

## Section 4: Payment & AR

*Goal: Understand how payments arrive, how they are matched, and what exceptions MAIA needs to handle.*

28. Walk us through what happens from the moment a customer sends a payment slip to the moment it is updated in SQL. Who does what, and how long does it typically take?
29. Payment slips arrive via WhatsApp — what formats do they come in? (Bank app screenshot, photo of physical receipt, PDF, handwritten slip, other?)
30. How often does the name on the bank transfer differ from the customer name in SQL? (e.g., restaurant owner pays under personal name, a related company pays.) Give examples of the types of mismatches you see.
31. When there is a payer name mismatch, how does admin currently decide which customer the payment belongs to? Is there a reference number, a matching amount, or is it purely by familiarity?
32. How are partial payments handled — if a customer owes RM5,000 and pays RM2,000, how is this tracked in SQL? Which invoice does it go against?
33. When a customer's outstanding balance grows beyond the acceptable level, who contacts them — admin, the salesperson, or the MD directly? What is the sequence of escalation steps (WhatsApp, phone, formal letter, third-party collection)?
34. Walk us through how you currently prepare and send a Statement of Account to a customer — is it generated from SQL, exported to Excel, or built manually? How long does it take?
35. **MAIA fit:** When MAIA finds a payment slip it cannot match with high confidence, it will flag it for manual review instead of auto-posting. Should the flag go to admin only, or also notify the relevant salesperson for that customer?

---

## Section 5: Documents & Delivery

*Goal: Confirm the document sequence, format requirements, and delivery confirmation flow.*

36. What is the exact document sequence for a standard order — is it Sales Order first, then Delivery Order, then Invoice? Or does it differ by customer type?
37. Are documents sent to customers digitally (via WhatsApp or email) or printed and handed physically? Does this differ by customer segment?
38. What is the document numbering format today — give an example of a real SO number, DO number, and invoice number. Does the sequence reset yearly?
39. When a driver delivers goods, how is the delivery confirmed today — customer signs the DO, driver takes a photo, driver sends a WhatsApp, or something else?
40. Walk us through a real credit note scenario — e.g., customer returns goods or the weight is wrong. What triggers the credit note, who issues it, and how does the customer receive it?
41. Do any customers request a different invoice format or layout from the standard SQL template — e.g., a specific field, a company stamp, or a different language? Which customers, and what do they need?
42. Is there a scenario where a Proforma Invoice is issued before the Sales Order is confirmed — e.g., for a new customer or a high-value order?
43. **MAIA fit:** MAIA can generate documents and send them to a customer's WhatsApp directly from the conversation. Should documents be sent automatically once confirmed, or should admin always preview and manually send?

---

## Section 6: Outdoor Sales

*Goal: Define what field staff need from MAIA so the outdoor assistant workflow can be configured correctly.*

44. When an outdoor salesperson is with a customer, what are the top 3–5 things they currently need to call or WhatsApp the office to find out? (e.g., "What is our current price for belly pork for this customer?", "Does this customer have any overdue invoices?")
45. Do outdoor salespeople ever take orders directly on behalf of customers while in the field, or do they just build the relationship and the customer places the order separately via WhatsApp?
46. Are outdoor salespeople using the company's main WhatsApp number to interact with customers, or their personal numbers?
47. When an outdoor salesperson meets a new potential customer, what information do they collect on the spot? Is there a form, or is it all done from memory and keyed in later?
48. **MAIA fit:** If an outdoor salesperson uses MAIA via WhatsApp to query customer pricing or outstanding balance, should MAIA respond only with the data, or also include a suggested action (e.g., "This customer has RM3,200 overdue — consider collecting before taking a new order")?

---

## Section 7: Product Catalogue & Weekly Price Blast

*Goal: Understand the current catalogue process so MAIA's Product Update Assistant can be configured correctly.*

49. Who currently creates the weekly product/price catalogue image — admin, a salesperson, or the boss?
50. Is the blast sent on a fixed day each week, or whenever there is a price change? Who decides when to send it?
51. Walk us through how the catalogue image is made today — is it typed in a chat, built in Canva, exported from SQL, or created in a different way?
52. What information goes into the catalogue — item names, prices, photos, available stock, carton/box weight, origin country? Is the format always the same or does it vary?
53. Which WhatsApp groups or contacts receive the blast? Is it sent from the same number customers use to order, or a separate broadcast number?
54. **MAIA fit:** The Product Update Assistant can generate a ready-to-forward message using the latest uploaded prices. Should it format the message as a plain text list, a structured table, or does the team want to define the template during setup?
55. Is the Product Update Assistant (RM8,000 optional add-on) confirmed as in-scope, or still to be decided?

---

## Section 8: Sales Lead Management

*Goal: Understand the lead flow so MAIA's CRM component can be correctly scoped and configured.*

56. Where do new sales leads typically come from — Facebook ads, referrals from existing customers, events, cold calls, walk-ins, other?
57. When the boss or a salesperson gets a new lead, what happens next — who does the lead go to, and how is the handoff done (WhatsApp message, group, verbal)?
58. Is there currently any record of what happened with each lead after it was passed — even an informal WhatsApp history or a note somewhere?
59. What does "followed up" mean to you — a call was made, a WhatsApp message was sent, a meeting happened, or a quote was prepared?
60. What does "converted" mean — an order is placed, a contract is signed, or something else?
61. **MAIA fit:** If MAIA tracks lead assignment and follow-up, the boss would be able to see which salesperson has each lead and whether they have contacted the customer. Is visibility for the boss the main requirement, or does the salesperson also need reminders and prompts from MAIA?

---

## Section 9: Approval Flows

*Goal: Define all approval triggers, approver roles, and response expectations so MAIA can route correctly.*

62. List every scenario where you would want an order or action to require approval before proceeding. Be specific — e.g., "Any order over RM X," "Any order for a customer with outstanding > RM Y," "Any price lower than the standard group rate."
63. For each scenario above: who is the approver — the MD only, the Sales Manager, Finance, or different people depending on the scenario?
64. How quickly must an approval be responded to — if the approver does not respond within X minutes/hours, what should happen? (Block the order? Auto-reject? Escalate to the next person?)
65. When an approval is rejected, what happens to the order — cancelled, sent back to the salesperson for revision, or escalated to the MD?
66. Should approval requests reach the approver via WhatsApp message, a notification in the backend dashboard, or both?
67. Is there a scenario where the approver needs to be able to approve with a condition — e.g., "Approve, but collect RM1,000 outstanding first"? How would this be handled today?

---

## Section 10: Users, Training & Admin

*Goal: Confirm the implementation roster, SQL coordination path, NDA status, and scope boundaries.*

68. List all staff who will use MAIA on Day 1, by name, department, and what they will use MAIA for:

| Name | Department | What They Will Use MAIA For |
|------|-----------|----------------------------|
| | Order Admin | |
| | Sales | |
| | Finance / AR | |
| | Warehouse | |
| | Driver | |
| | Management | |

69. Who from Macrofood is the internal project owner — the day-to-day contact during onboarding who can make decisions without needing to escalate to the boss for every small item?
70. Who will participate in UAT testing — same as daily users, or a smaller subset?
71. For SQL vendor coordination: will Macrofood designate one internal contact to relay requests to the vendor, or should the MAIA team reach out to the SQL vendor directly?
72. Has an NDA been signed between Macrofood and AutorunBiz PLT? If not, does Macrofood require one before we proceed with system access?
73. The sales discussion mentioned a future fresh market and B2C expansion. Are these separate business entities that should be planned for in Phase 1 architecture, or are they purely future Phase 2 items with no impact on current scope?
74. Is there anything not listed in the signed proposal that the boss or team expects MAIA to cover? *(Ask this directly to surface any scope misalignment before implementation begins — park anything extra as a Phase 2 item.)*

---

## Samples to Collect at This Meeting

- [ ] 5–10 real WhatsApp order messages (screenshots or forwarded messages)
- [ ] 1–2 descriptions of what a typical voice order sounds like and the language/dialect used
- [ ] Sample payment slip (bank transfer screenshot — can redact amount if needed)
- [ ] Sample bank statement row (to understand format for payment matching)
- [ ] Current Delivery Order format (printed copy or PDF)
- [ ] Current Invoice format (printed copy or PDF)
- [ ] Current weekly product catalogue image (any recent example)
- [ ] Customer group definitions and markup rules — even a rough note or existing Excel
- [ ] Approval threshold examples — even a rough verbal description written down

---

## Notes from Session

> *Capture workflow details, answers, decisions, and follow-up items here during the meeting.*

---

## See Also

- [[Ordermaia x Macrofood]] — signed proposal (RM40,000)
- [[Meetings/MacroFood sales proposal and rough requirement gathering]] — sales transcript
- [[Meetings/Client Sales Handover TLDR Brief - Macrofood]] — handover brief from Jeremy
- [[Onboarding/[Survey] MAIA Pre-Onboarding Requirements Questionnaire - Macrofood]] — pre-onboarding survey (basic facts already collected)

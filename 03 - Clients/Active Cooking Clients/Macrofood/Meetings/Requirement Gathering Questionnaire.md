---
owner: Gareth
status: draft
last_reviewed: 2026-06-03
client: Macro Frozen Sdn. Bhd.
meeting_type: Requirement Gathering
meeting_date: 2026-06-04
---

# Macrofood — Requirement Gathering Questionnaire

**Client:** Macro Frozen Sdn. Bhd. (operating as Macrofood)
**PIC:** Choy Kien Yang (David), MD
**Meeting:** 4 June 2026, 3pm, Face-to-Face
**Prepared by:** Gareth

> **IMPORTANT — Brand:** Present as **AutorunBiz PLT** at all times. Do not mention Mindhive. Do not wear Mindhive-branded clothing.

Use this questionnaire in the RG session to confirm workflow details, configuration inputs, and data requirements before implementation begins.

---

## Pre-Meeting Checklist

- [ ] Pre-onboarding questionnaire returned? (Sent 2026-05-22 via Lark — check if received)
- [ ] NDA signed? (Status unknown — confirm at meeting)
- [ ] SQL vendor contact received? (David Chong shared a contact on 2026-05-24 via Ivan Chiang — verify it is current)
- [ ] Sample documents requested at handover: Sales Order, DO, Invoice, payment slip, WhatsApp order message

---

## Section 1: Current Order Flow

1. Walk us through today's exact order flow — from customer sending an order all the way to delivery and payment collection. What touchpoints and what channels?
2. Other than WhatsApp, do orders also come in by phone, email, or walk-in? How often?
3. How many WhatsApp numbers or groups does Macrofood use for receiving orders? Which number is the main one?
4. Do customers send voice messages to place orders? How common is it? Which languages or dialects? (Mandarin, Cantonese, Hokkien, Malay, mixed?)
5. Who receives the WhatsApp orders? Is it the same person who keys into SQL, or two different people?
6. What time do most orders come in? When are they keyed into SQL? (e.g., orders at night, keyed next morning before warehouse preps?)
7. What happens if an order comes in after working hours — who handles it, or does it wait?
8. How does the warehouse know what to prepare each day? Do they receive a list from admin via WhatsApp, printed paper, or something else?

---

## Section 2: SQL Integration

9. Which version of SQL Accounting is Macrofood using? (e.g., 2022, 2023, 2024)
10. Is SQL hosted on-premise (office PC/server) or cloud?
11. What SQL modules are active? (Sales, AR, Inventory, others?)
12. What is the SQL vendor's company name and contact person? *(We understand a contact was shared — confirm it is current and the vendor is aware we may reach out.)*
13. Has Macrofood done any SQL integration or API project before?
14. Are there any SQL customizations or non-standard plugins that might affect how data can be accessed?
15. Who is the internal person who can coordinate with the SQL vendor on our behalf?

---

## Section 3: Fresh Weight Adjustment Workflow

16. Walk us through the exact fresh weight workflow — when does the customer place the order, when does the warehouse weigh the goods, and when is the final invoice issued?
17. Who physically weighs the goods? Is it always warehouse staff?
18. After weighing, how is the final weight communicated internally today? (WhatsApp to admin? Verbal? Printed slip?)
19. Can the price per kg change between when the order is placed and when the weight is finalized? (e.g., a pricing update happens overnight?)
20. What is the acceptable rounding unit for fresh weight? (e.g., per 0.1 kg, per 100 g)
21. Who has authority to finalize and confirm the actual weight before the invoice is issued? Admin only, or can warehouse staff confirm?
22. Are there products that are always sold by fixed quantity (not by weight)? Which ones?
23. What does the timeline look like — order comes in day 1, warehouse preps when, final weight confirmed when, invoice issued when?

---

## Section 4: Customer Master Data & Consignment

24. How many active customers does Macrofood have in total?
25. What customer groups or tiers currently exist? (e.g., Wholesale, Retail, Hawker, F&B, Corporate — and how many customers per group?)
26. Are all customers already in SQL? Can Macrofood export the customer list with codes, names, contacts, and group assignments?
27. How are customers commonly identified in WhatsApp orders — by business name, owner name, nickname, or phone number?
28. Are there customer nicknames or aliases that MAIA needs to know? (e.g., "Ah Kow" = Restoran XYZ)
29. Which customers are on consignment arrangements? How does consignment work for them — do they settle at end of month? How is consignment stock tracked today?
30. What are standard credit terms per customer segment? (e.g., Wholesale = 30 days, Retail = COD) Is this tracked in SQL or informally?
31. What is the threshold at which a customer's outstanding balance triggers a flag or blocks new orders?

---

## Section 5: Product & Pricing

32. How many active SKUs are in SQL?
33. What is the SKU naming convention? (We understand it is Item + Country + Brand, e.g., P0710R = Rewar Sale — confirm and provide examples)
34. Can Macrofood export the full item/product list with codes, descriptions, and unit of measure?
35. How often do item prices change? Daily for some items? Weekly? Irregular?
36. Who updates prices — one person, or multiple staff? Who has final authority on pricing decisions?
37. How is markup per customer group applied — fixed RM amount over base price, or a percentage?
38. Are there customers with individual special pricing outside the standard group markup? How many approximately?
39. How does Macrofood want to structure the price update flow — upload a template to MAIA, or update in SQL and let MAIA sync?
40. Do any customers have specific product preferences stored per order — e.g., cut thickness in mm, specific packaging weight? How is this tracked today?

---

## Section 6: Payment Collection

41. What payment methods does Macrofood accept? (Cash, bank transfer, cheque, TNG, others)
42. How many bank accounts receive payments?
43. How do customers send payment proof — WhatsApp screenshot, email, hand delivery?
44. Who currently does payment matching and updating in SQL? Is it one person?
45. How often does the payer name on a bank transfer differ from the customer name in SQL? (e.g., owner pays under personal name, related company pays)
46. How are partial payments handled today? Is it tracked in SQL?
47. Can Macrofood share a sample bank statement format? (Redact any sensitive data)
48. Does Macrofood send Statements of Account (SOA) to customers? How often and how?
49. What is Macrofood's current e-invoicing status — compliant and automated, compliant but manual, in progress, or not started?

---

## Section 7: Documents

50. What documents does Macrofood currently issue per order? (Sales Order, DO, Invoice, Proforma, others?)
51. Please share samples of the current Delivery Order and Invoice formats.
52. What is the document numbering convention? Does it reset yearly? Is there a prefix? (e.g., INV-2026-0001)
53. Are documents sent to customers digitally (WhatsApp/email) or printed and handed physically?
54. Does the DO need to be signed by the customer on delivery? How is that confirmation captured today?
55. Do customers prefer individual invoices per delivery, or consolidated monthly invoices? Does this differ by customer segment?

---

## Section 8: Outdoor Sales Support

56. How many outdoor salespeople does Macrofood have?
57. What information do outdoor salespeople currently need to ask admin for while outside? (prices, customer outstanding, stock availability?)
58. Do outdoor salespeople ever take orders on behalf of customers while in the field?
59. Are outdoor salespeople using the company WhatsApp number or their personal numbers?
60. Do outdoor salespeople ever need to generate documents (e.g., Proforma Invoice) on the spot for customers?

---

## Section 9: Product Catalogue & Weekly Price Blast

> *(Sales identified this as a deal-closer. Confirm scope and workflow.)*

61. Today, who creates the weekly product/price catalogue image that gets blasted to customers?
62. How often is the blast sent — weekly? When there is a price change? Ad hoc?
63. Which WhatsApp groups or contacts does the blast go to? Is it sent from the main sales number or a separate number?
64. What information does the catalogue image typically include? (Products, prices, photos, availability, carton size?)
65. How does Macrofood want MAIA to help here — generate a ready-to-forward message on request, or is automated broadcasting needed? *(Note: automated blasting has WhatsApp API restrictions — we will advise on options.)*
66. Is the Product Update Assistant (optional add-on, RM8,000) confirmed as in-scope or still pending?

---

## Section 10: Sales Lead Assignment & Follow-Up

> *(Raised explicitly in sales session — leads shared in WhatsApp groups but no tracking of whether sales staff followed up.)*

67. How do new sales leads currently arrive? (Facebook ads, referrals, events, walk-ins, other?)
68. Who assigns leads to salespeople today? Is this done in WhatsApp, or is there another process?
69. How does the boss/owner currently check if a lead was followed up?
70. How many new leads come in per week or month on average?
71. What does Macrofood consider a "converted" lead — is it when an order is placed, or earlier?
72. Should lead tracking and assignment be a Phase 1 scope item, or can it wait for Phase 2? *(We want to be clear on this at the meeting to avoid scope creep.)*

---

## Section 11: Approval Flows

73. What business scenarios should require approval before proceeding? (e.g., high-value orders, special pricing, overdue balance exceptions)
74. What is the threshold for a "high-value" order that triggers approval? (RM amount)
75. Who are the approvers? Is it the MD only, or are there department-level approvers for different scenarios?
76. How should approval notifications reach the approver — WhatsApp message, backend dashboard, or both?
77. How quickly must an approval be acted on before it blocks the order?

---

## Section 12: Users & Access Roles

78. List all staff who will use MAIA, by role and department:

| Name | Department | Role in MAIA | Notes |
|------|-----------|--------------|-------|
| | Order Admin | Day-to-day order processing | |
| | Sales | Outdoor / in-office | |
| | Finance | Payment matching | |
| | Warehouse | Weight confirmation, GRN | |
| | Driver | Proof of delivery | |
| | Management | Dashboard visibility | |

79. Who is the main implementation PIC from Macrofood's side? (Day-to-day contact during onboarding)
80. Who will participate in UAT testing?
81. Is there an internal IT person, or will all SQL vendor coordination go through MAIA team directly?

---

## Section 13: Go-Live Preferences

82. What is Macrofood's target go-live date or earliest preferred go-live month?
83. Are there blackout periods or busy seasons to avoid? (e.g., CNY, Raya, year-end audit)
84. Preferred training format — in-person at office, online call, or recorded video?
85. How many staff need to be trained, and in which language? (Mandarin, BM, English)
86. Is there a hard deadline driving the go-live — e.g., tied to a new customer, a business expansion, or an operational bottleneck that is urgent?

---

## Section 14: Admin & Agreements

87. Has an NDA been signed? If not, does Macrofood require one before we share system access?
88. Are there other related business entities that should be in scope now or in Phase 2? (e.g., the planned fresh market or B2C expansion mentioned in the sales discussion)
89. Is there anything not covered in the signed proposal that the boss/owner expects to be in scope? *(Ask this directly to catch scope creep early and park Phase 2 items explicitly.)*

---

## Sample Data & Documents to Collect

Please collect the following during or after the RG session:

- [ ] 5–10 sample WhatsApp order messages (real or representative — any format/dialect)
- [ ] 1–2 examples of what a voice message order sounds like (describe or share recording if possible)
- [ ] Sample payment slip from a bank transfer customer
- [ ] Sample bank statement (can redact sensitive rows)
- [ ] Sample Delivery Order (current format from SQL)
- [ ] Sample Invoice (current format from SQL)
- [ ] Sample weekly product/price catalogue image (current format)
- [ ] Customer master list export from SQL (or confirm who will prepare it)
- [ ] Product/SKU master list export from SQL
- [ ] Existing pricing reference (Excel or SQL export)
- [ ] Customer group definitions and markup rules (even informal notes)
- [ ] Approval threshold and approver names in writing

---

## Notes from Session

> *Use this section to capture answers, observations, and follow-up items during the RG meeting.*

---

## See Also

- [[Ordermaia x Macrofood]] — signed proposal (RM40,000)
- [[Meetings/MacroFood sales proposal and rough requirement gathering]] — sales transcript
- [[Meetings/Client Sales Handover TLDR Brief - Macrofood]] — handover brief from Jeremy
- [[Onboarding/[Survey] MAIA Pre-Onboarding Requirements Questionnaire - Macrofood]] — client-facing pre-onboarding survey

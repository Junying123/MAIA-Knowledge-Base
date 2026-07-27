---
owner: Gareth
status: draft
last_reviewed: 2026-07-27
lark_url: https://eg69120xnei.sg.larksuite.com/wiki/AVczwQOgiifibikpuSflxiA8grg
---

# 24Jul26 - Maxfresh Kickoff Meeting Raw Notes

**to showcase in kickoff**

- E2e flow until DO
- bulk price update

**to build**

- ~~Auto assignment - picker~~
- ~~High value order approval flow~~
- Customer-specific text-based catalogue
  - Defined template (TBC: customer, SKU, price)
  - Only include stocks that are currently available, with pricing determined by customer group or customer.
  - Users query the catalogue weekly, using the customer group/name. Chatbot returns the template.
- Pick list PDF, option to group by customer or by SKU

**make sure maia has this**

- timestamp when picking list completed
- Document format (esp. invoice, DO)
  - Retrieve pdf from autocount (check VERSION)
  - Identical to Autocount template (fallback)
- Customer group pricing (remind client we will use bulk price update)

**out of scope**

- e-invoice
- Delivery trip & driver
- Full warehouse management

**Conflict with proposal**

- No high-value order approval. That is just about e-invoicing. Above 10k cannot consolidate order

**client action item**

- Provide template for weekly text based catalogue
- Provide sample of customer pricing master list
- Provide sample of PO, order message, handwritten note
- Confirm stock entry handling
- Setup guideline
- Schedule IT vendor meeting

## Workflow Before MAIA

1. Sunday update catalogue
2. Sales receive order from customers
3. Sales send order to whatsapp group
4. Sales admin key in order in autocount
5. Sales admin write out pick list
6. Warehouse pick and order based on handwritten pick list (uom ctn)
7. Warehouse manager (Ah Wai) finalises actual picked quantity
   - if got change, need to modify SO, e.g. Order 10ctn, only want big apple, but got 2 ctn are small apple, and they know the customer dont want small ones. So need to reduce 10 to 8 ctn.
   - Walk in customer is managed by Market dept (Ah Wei)
8. Once SO confirmed, Sales dept (Wan) generate invoice & DO and submit
9. Account print invoice sends to customer
10. Warehouse or Sales issue credit note, submit CN
11. Account send CN to customer

Below standard price need owner approve.

## Workflow After MAIA

1. Sales receive order from customer
2. Sales send order to MAIA
3. MAIA process order
4. Sales review and submit order
5. Warehouse manager generate pick lists from SO
6. Warehouse manager assign picker/warehouse user to pick list
7. Picker view assigned pick list
8. If use physical pick list:
   - Picker print out pick list
   - Picker pick and pack
   - Picker write picked qty
   - Picker snapshot pick list and sent to maia
   - Picker CANNOT mark as completed
9. If use digital pick list:
   - Picker pick and pack
   - Picker insert picked qty
   - Picker save picked qty
   - Picker CANNOT mark as completed
10. Warehouse manager validate picked qty
    - If qty different from SO, amend SO and submit
11. Warehouse manager marks PL as completed
12. Sales (Wan) generate invoice & DO and submit
13. Account export/print invoice

**Invoice should not be created if pick list is not completed.**

---

## Requirement Gathering

- Usually where do order comes in: Whatsapp, walk in, phone call, less PO
- Uom: Only Ctn - both internal and external
- do you need to handle case like return stock. How you manage that?
  - Quality rejected, or size wrong, number of fruits not same as label - issue credit note
  - Returned stock - issue credit note, send proof as attachment
- We understand that you need high-value order approval flow. What order value should trigger approval before submission, and who should approve it?
  - No approval flow required.
  - SO over 10k, only for einvoice cannot be consolidated
- Catalogue: Price controller updates the price every week. Then the sales person can query to get the catalogue at the latest price for specific customer/group.
- Who is authorised to update weekly prices: Owner
- For pick-list assignment: **manager will assigns pick list to a specific named picker. In the pick list PDF, group by warehouse - customer - SKU**
- Credit control policy? **NO**
- What date should MAIA start tracking orders/inventory from? specific cutoff date: **1 March 2026**

## See Also

- [[03 - Clients/Active Cooking Clients/T.C.K/T.C.K — Scope Lock]]
- [[03 - Clients/Active Cooking Clients/T.C.K/T.C.K — VoC Extraction]]
- [[03 - Clients/Active Cooking Clients/T.C.K/T.C.K — Kickoff Clarification Questions]]

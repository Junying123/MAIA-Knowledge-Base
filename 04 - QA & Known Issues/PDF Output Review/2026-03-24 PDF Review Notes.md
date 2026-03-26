---
owner: Gareth
status: draft
last_reviewed: 2026-03-24
---

# 2026-03-24 PDF Review Notes

## ALL

- [ ] Item description to follow this format:
  - [x] ITEM NAME
  - [x] \<Additional Remarks for line item\>
  - [ ] Batch no: \<Batch No\> (label hidden when empty) (Default show)
  - [ ] Serial no: \<Serial No\> (label hidden when empty) (Default show)
  - [ ] Tax Reference: \<Certificate Type\>:\<Certificate Number\> (label hidden when empty) (Default show) (QT/SO/SI)
  - [ ] Handling: \<[Poison,Heavy,Halal]\> (label hidden when empty) (other handling requirements to add later) (Default show DN/PL, hide for SO) (SO,DN,PL)
  - [ ] Warehouse: \<Warehouse name\> (label hidden when empty) (Default hide for DN, default show for PL) (DN/PL)
  - [ ] Users have option to select to show or hide, default behavior must apply.
- [x] Item Code to follow this format:
  - ITEM CODE
  - \<HS CODE\> (optional to show) (default hide)
- [ ] Add no company logo placeholder to image area when no logo is present.

## Sales Order

- [ ] Biller Information, can remove company, as its already shown at the top level header
- [x] Banner with Order Details between Sales Order Title and Party information to be justified alignment to fill up width
- [ ] Tax Column, cell values to show tax amount, e.g. no tax = 0.00, 6% = (qty x rate) * 0.06
- [ ] UOM, to be same font size and colour as qty.
- [ ] Remove Warehouse information from description (add as optional, default to false)
- [ ] Item description to be replaced by additional remarks.
- [ ] Address repeated comma sanitization (remove ',,', ', , ,') (caused by missing address elements)

## Proforma Invoice

- [ ] File to rename as proforma invoice. Not Sales ORDER.
- [ ] Same comments as Sales Order above.

## Invoice

- [ ] Biller Information Address, one liner.
- [ ] Remove Company from biller information.
- [ ] Sales invoice banner, to be justified alignment to fill up width.

## Invoice Receipt

- [ ] Follow exactly Invoice PDF, just change the title to Receipt and file name.

## Receipt

- [ ] Check why invoice date is N/A

## Credit Note

- [ ] Dont bracket the quantity.
- [ ] Dont bracket the amount.
- [ ] Use: 'Inv Ref' label to tie to the parent invoice.

## Debit Note

- [ ] Follow exactly Sales invoice, just debit note title.
- [ ] Use: 'Inv Ref' label to tie to the parent invoice.

## Payment Voucher

- [ ] Dont bracket the quantity.
- [ ] Dont bracket the amount.
- [ ] Check Invoice Date why is it N/A.

## Delivery Note

- [ ] Warehouse to use WAREHOUSE NAME not the Main Warehouse - Consumables
- [ ] Remove Warehouse Column
- [ ] Shipping method, use the label name not the ID.
- [ ] Add SO reference (item level) (label hidden if not present)
- [ ] Add SI reference (item level) (label hidden if not present)

## Return Note

- [ ] Dont bracket the quantity.
- [ ] Dont bracket the amount.
- [ ] Warehouse information to persists the empty labels.

## See Also

- [[PDF Output Review Index]]
- [[Known Bugs & Limitations]]

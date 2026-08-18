<title>3Aug26 - Holsen Training Gaps</title>

# #391 — Invoice PDF missing the discount column

Invoice PDF does not display the discount column. Expected: invoice PDF should display the discount column.

<bookmark name="Bug Item — #391" href="https://eg69120xnei.sg.larksuite.com/record/Dwfvr60ude180yccAttlmbnHgvc"></bookmark>

# #390 — SO PDF shows auto-populated discount when unit price is updated against std price

SO PDF is a customer-facing document; it should not show/reflect the given discount for line items. Expected: remove the displayed discount from the SO/SI PDF.

<bookmark name="Bug Item — #390" href="https://eg69120xnei.sg.larksuite.com/record/Lx2SrctBzekzifc9xlfl9TqggzD"></bookmark>

# #389 — DN submission blocked by false negative-stock error after stock/batch qty update

Item qty is added into the stock entry and batch, but when submitting the DN with the batch that has updated qty, it returns an error saying the item has negative stock quantity of -2.0.

Expected: after updating/adding qty at stock qty/batch level, submitting the DN should check and acknowledge the qty used from stock/batch level, not throw a false negative-stock error.

<bookmark name="Jam recording — #389" href="https://jam.dev/c/68ba10c5-6bcf-4197-8b05-059e44c85065"></bookmark>

<bookmark name="Bug Item — #389" href="https://eg69120xnei.sg.larksuite.com/record/KWAhr4H57eTLPkcs5Jrlb1V6gyb"></bookmark>

# #388 — Stock entry missing UOM display/column

Stock entry does not display UOM alongside item qty. Expected: stock entry should display UOM with the item qty.

<bookmark name="Bug Item — #388" href="https://eg69120xnei.sg.larksuite.com/record/Td3ErSLyVemDjkcM6cWlYiF0gQV"></bookmark>

# #387 — Cannot view batch total qty for line items when selecting/adding batch in SO/PL

When selecting the batch number, the current total qty of the batch is not displayed. Expected: current total qty of the batch should be displayed when selecting it.

<bookmark name="Bug Item — #387" href="https://eg69120xnei.sg.larksuite.com/record/TjNErapKAe6kNFcJDhtlJr48gsd"></bookmark>

# #386 — Multiple warehouses showing in Holsen instance

Holsen uses one warehouse only. Expected: name that warehouse "Main warehouse" and remove the other warehouses.

<bookmark name="Bug Item — #386" href="https://eg69120xnei.sg.larksuite.com/record/HbVervXI5eQjyNcnP1SlHlHLggJ"></bookmark>

# #385 — Picklist submission fails when picked qty differs from SO qty

Fails to submit picklist because picked qty differs from the qty on the SO, cannot be lower/higher than qty. Expected: picklist should allow submission after picked quantity is updated, even if lower or higher than the ordered quantity.

<bookmark name="Bug Item — #385" href="https://eg69120xnei.sg.larksuite.com/record/CSGNrHApreXpg4cQ46Ol66rFgfq"></bookmark>

# #384 — Picklist submission error persists, picklist stays in draft after refresh

When submitting the picklist, it returns an error that the picklist is already submitted, yet the picklist remains in draft status after refreshing the page.

Expected: picklist should submit without returning the "already submitted" error.

<bookmark name="Reference — #384" href="https://eg69120xnei.sg.larksuite.com/share/base/form/shrlg6LvVeOJ3bucMFXHka4GDCf"></bookmark>

<bookmark name="Bug Item — #384" href="https://eg69120xnei.sg.larksuite.com/record/LFa1rPRddeMV5fcf4LOlb63rgYg"></bookmark>

1. The biller contact person is not changing based on which customer is managed by which sales user when the customer is selected.

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=ODk2YWMxNWMyZTBkZjQ0ODhkNzhjMWJiOWE4OGE0ZDRfYWVhYTI2MDhlZWIyMTk5YTdlZDBmODg4NDk3MmM4OTZfSUQ6NzY2OTk5ODUyOTUxOTE0NDY3Ml8xNzg2MDM3NzY5OjE3ODYwNDEzNjlfVjM)

1. The sales user has not been assigned to the customer (Managed by who)

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=MzEzZjVhN2U3YWFmOTA1YzY1NTI3ZGMyY2Y5MzYzYjBfZmQxN2E5ZDU5ZjdmYTJiZjZlYTJkYjk0MjcxODYzMWRfSUQ6NzY3MDAwMDA1MzExMjYzOTE5Nl8xNzg2MDM3NzY5OjE3ODYwNDEzNjlfVjM)

1. Item in submitted CPO is missing

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NzMxNzMyZWI2NmMxYzRkN2I3MmU4ZjQ2Y2Y3NjEyMWFfNmEwYjM1ZWZmY2NhMTE5MzJjMDI0NzM5OTA3MDg5YWNfSUQ6NzY3MDAwMjgwMTg5NzczNzk1MV8xNzg2MDM3NzY5OjE3ODYwNDEzNjlfVjM)

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YzBhZWZiZjdhNWQyOWRmNTkzMzg4MzkyZjgwZGRkYmFfNjU4ZWRlOWU0MGY4YTc1M2YyMTJmMmIzYzgwOTQzMzlfSUQ6NzY3MDAwMzE0NjQ1ODAyNTY5OF8xNzg2MDM3NzY5OjE3ODYwNDEzNjlfVjM)

1. Misconception of the copywriting cancel button; change "action" to "cancel"

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NGM1M2FhMmNjMmZjNTM4NmQ2YmRlMjEyNmI3NWU5OWNfMThkODk1OTQ1NzZiMmIyZDNmNGE5YjY2ODljYmY4MDFfSUQ6NzY3MDAwMzg3MzI2NTU1MzEyOF8xNzg2MDM3NzY5OjE3ODYwNDEzNjlfVjM)

1. Why cpo still populate the "SST 5%", even there is no any "SST 5 %" data from the raw po

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=N2Q1YzBiOGM3ODllZDdhZTZmYmJlZWJjYTU4MTFkYTNfODE5MGVlMDU4M2EwODlhZDVmMWYzNzFmM2YxOWE3OWVfSUQ6NzY3MDAxMDI2ODYwODUzMjE4N18xNzg2MDM3NzY5OjE3ODYwNDEzNjlfVjM)

1. Customer specific pricing lookup output format, the data to display should be informative, useful for them.   
Chatbot should return the message with sku, item name, customer pricing, discount, std price, enforced

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=OGU0MTYwNGIwZWYzOTExOWZiMjE3MmUxZmFhOTY4YjNfYmFlM2UwZGI5YTA1OTQ4ZDIyZDFjYzBhNGQ1NDIxMDBfSUQ6NzY3MDA0OTM4NzAxMTM3ODkxMV8xNzg2MDM3NzY5OjE3ODYwNDEzNjlfVjM)



For DIY/Fixguru volume in DN

cm3 convert to m3, due to value in cm being too big

Update the kg to kg/cm3 in the PDF and FE column , basically

100 Kg  
100 cm3

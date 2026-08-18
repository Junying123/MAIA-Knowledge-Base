# 5 Aug26 - Holsen Training

1. CPO 2026 - 142 attachment missing
2. We should flush the default roles as well, when clients have their own custom roles.
3. llm hallucinate holsen chemicals?, this chat session also capture wrong intent

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YTg4YjRjNGYyMjlkMWNhNzE0YjdkNDRjNTQyYjJiNjZfZjkzZjM3YzY3NzA5YWM3N2IwYjc2YmUyZDZmMWJiODhfSUQ6NzY3MDQzNzEwMTUxNTEzMjYzOV8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

1. ZH CPO 144 and 145 upload one PO created two POs

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NmVkYzk3YmFkMjlmMWFlODJjOTFlMTcwMjMzMzBjYWNfM2YwYjE3NTQ3N2YwYzE2N2U5ZDkxYzBkYWRlMTNlOTBfSUQ6NzY3MDQzODQ4MDY5ODY3NDkxNF8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)



1. Holsen side will do 2 way sync with SQL, they will familiarise with onboarding SQL first, before going live with MAIA since after sharing they can see how MAIA and SQL will integrate with their current business workflow
2. Main possible risk is the batch and lot number handling and integration into SQL.

   1. This is a known blindpsot.
3. User Assignment, by role, user name, email, phone number.
4. Batch search by item not found, visibility of item stock by batch by warehouse.
5. Consulting and educate holsen team on adoption of SQL and whats the pre-requisites before on boarding to MAIAthis is supplier batch number sometimes self createstock card, 

   1. Key theme here is to reduce double entry work
   2. Also shared how the purchasing etc make sure that their informatino is correct.
   3.   
     
   Batch and lot number segratation
   4. Incoming by lot, sometimes need to split the lot in to batches
   5. Batched tied to customer and quota managed
   6. 

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YzI2N2QzZTgwNTBhNDMwY2JlYzY0YWI3ZTVmMzI4MTRfMzZmMmM3Yjk3MjE3Y2EwMTVkYWQ5ZDhhY2MwYjk3MTJfSUQ6NzY3MDQ1MTU0NDQyMjEwODkwNF8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YjY4NTdjOGYyYWZhMGUxYjM4YjNmOGZlNGUyZmFkNTJfNzEwMTMyNmY3MWRkM2M0NTRmOGZhYTA4ZDY5MTM0NzlfSUQ6NzY3MDQ1MTU2OTIwMDA0MTY5Nl8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YTVjMmE3OWYwZjc5MDQxYmMzNTExMDNlNDUxNjViZTFfMGM1M2E5NTExMjllYjE5YWQ5ZjkzY2VkNjU1Y2Y5NDRfSUQ6NzY3MDQ1MjgyMTY0MDE3MTIzNF8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=MjBlOTJmYzhhYjM5ODc1OGY2ZTJjMjViOGY5MzI0M2RfMDIwMzc1YThiNWUwOWJlOGM4NzQ3NzYyZTcwNDBjYWVfSUQ6NzY3MDQ1NDAzNDI4MjE1NTc1MF8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=OWZiMjE2YTQ1MTZiMTRiN2U2NDM2ZjA0YjQ3ODYyNGFfYjVkYWJhZTA5ODlhODcyY2Y3NzAxODg1Yjg0YmU2MTdfSUQ6NzY3MDQ1NDAzMjgyMTI1OTk5NV8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=ZTViNWQwNWVmYzM2ZDIxYzU2Mzc5OTU1MjY5NDdkMTlfNWIyZGMzNzE0MTI1MjlkNzI1OGUyMDc4ZWE5ODYwODBfSUQ6NzY3MDQ1NDAzMTAzNDc2NTAxOV8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

   ![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=NTk4YzhkNmY5ZmVjZTMwYzNjNjdmZGMzMTdiOTY5NmZfMzgxNTU3YmRmZWZhYWNjYjUzYzliOWI2NjRmN2U0MjhfSUQ6NzY3MDQ1NDA0ODE1MTYyMTM0Ml8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

Stock view by batch by warehouse, also show mfg date and/or expiry date to visible

Production need to be notified when pick list is created

Pick list, when updating the picked qty can also update the batch information if unset (e.g. Set means creator need it to be that batch, if null open)

When receiving goods, may have variety of shelf life

Batch Mfg Date format DD/MM/YY

![](https://internal-api-drive-stream-sg.larksuite.com/space/api/box/stream/download/authcode/?code=YWYyNjI1NzM5ZDNkMzQzMDdkYjIyMWUwNmRmNTYxYzNfODc4NWE2NGNhYWY5MjU3N2ZkOWViZDY4Mzk0YzNkYzRfSUQ6NzY3MDQ2NjMxMzgyNjk2MzE3MF8xNzg2MDM3NzcwOjE3ODYwNDEzNzBfVjM)

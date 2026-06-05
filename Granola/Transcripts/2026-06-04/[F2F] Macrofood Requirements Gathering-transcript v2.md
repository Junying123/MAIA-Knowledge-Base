Speaker 1: 00:00 
 For today, maybe we want to understand about what is the actual workflow you guys really have in your operation to see how we can actually design the entire process from ordering up until receiving cash from the customers.  And then also the reconciliation part, and that's based on what we have already understand about your current operation is that usually your customers will place the order through the your WhatsApp and then the salesperson will just manually interpret the order and then create the order on accounting system, which is SQL, right?  Yeah.  Then only then the warehouse will go and prepare or cut out the goods and have the final weights so that price would be affected as well.  Because of that final waste might not be exactly the same as what the order initially was.  Then afterwards the staff will just update the final weight and the price.  Then we'll generate the invoices and all those documents related.  After that the customers will submit the payment slip and then the finance person will check through with the payment slip and compare it with the bank statement and also reconcile it against the invoices as well.  Right.  Then eventually we'll update SQL again.  So this one is just on a very high level, but based on what we also know is that there would be four main customization that you would be requiring.  First thing is about the account receivable part which is the reconciliation with between the payment slip and also the bank statement and the invoices.  There's a three way line that's the first thing.  And second thing is that you want to have bulk price update like in one short update, multiple items price.  And also we want to have the product catalog to be generated based on the latest price and all the images information of the products.  And also one more thing is, one more thing is the stock entry which is to directly update the latest stock account art amount, right?  Yeah.  So for today's session we will mainly focus on all this for customization request to see actually what is the actual root cause causing us that we want to have these features and we will see what is the best way we can design these features up to best suit your workflow.  But for now I will pass it to Jack Garrus to ask on more questions about the facilitation.

Speaker 4: 03:32 
 Let's start with the AR1.  So for the AR1 actually we have existing interface.  So we wanted to show you to see what you think about it.  So let me just share a bit about account receivable.  How Maya solves the Problem for our clients who use this module.  So the main problem with this AR is that you got a lot of inboxes and then clients usually locate.  So when they pay ready they will sell them to the salesperson the paymentseed.  So what the salesperson do with this payment seat from me they will just forward to finance.  Finance.  It's not hard to identify the bank payment record.  The problem is to identify this payment supposed to knock off which invoice.  Because inside the bank slip reference.  Sometimes they take invoice for January 100 invoice how to allocate.  Or sometimes like they will say ID 100200150 to 170 but 170.  So this is the problem with reconciliation.  And then sometimes if reconciliation previously got payment ready but don't know, maybe miss out recall.  Then when you recall the second time they're still outstanding.  But customer said already fully paid.  But in the system different.  So this is most of the time the problem of reconciliation.  So on outside.  What our reconciliation will do is that it will help do auto matching for the easy one.  So that means easy to identify one it will do auto matching but the ones that are difficult to identify auto knock off or what it will auto match the thing but the human will finalize and then knock off.

Speaker 2: 05:32 
 Because you mean you upload the bank statement and the payments ready the tally ad.  Then that amount will be in the payment customer payment.

Speaker 4: 05:43 
 Okay, so invoice customer invoice outstanding invoice and then bank statement.  So when you upload these two in the system they will show certain things that can match.  Okay, so in this matching part you will create something called a payment account.  Because in SQL also called payment entry.  So in the payment entry we'll say this invoice this bank statement.  What how much do I locate to knock off.  So this part here is where the human check.  So the human will check if the thing match correctly then just proceed on.  But if two things let's say didn't auto match the human can manually mention.

Speaker 2: 06:21 
 Like the commonly called ABC but come to make the payment is not match correctly correct.

Speaker 4: 06:30 
 So so in this case because our matching for this feature is a simple matching only.  So exact name match or certain ID match you do the auto matching.  But most of the cases can cover.

Speaker 2: 06:41 
 Let's say this is for from the receiving part.  Then if you payment part.

Speaker 4: 06:47 
 So for payment part over here.  Normally when you do payment is you to have a supplier invoice need to recon with AP supplier issue invoice.  You need to reconcile with your grm.  Right.  So it's AP reconcile with grm.  Correct.  So it's a similar thing.  So in your SQL you will have the supplier invoice.  We will pull this into Maya as a spy invoice as well.  And then we will also pull in the GRN so that it's just to do matching.

Speaker 2: 07:21 
 So it means that supply invoices sent to the Maya.  Maya will upload the GR.

Speaker 4: 07:28 
 Invoice.

Speaker 2: 07:30 
 Let's say I receive a goods now.

Speaker 4: 07:31 
 Yes.

Speaker 2: 07:32 
 Let's say 1000 kg.  Okay.  Disappear in the invoice.  And also the deal.  So I take these two pictures to send to Maya.

Speaker 4: 07:45 
 No, that.  Okay, this one is a different.  A bit of a different use case.  Because the main part here is that we want to in terms of payable, we want to know if the good we actually received before we pay our.  Okay.

Speaker 2: 08:01 
 Normally my when my goods is after I receive only pay.

Speaker 4: 08:07 
 Correct.  After receive only pay.  So that's why when supplier give you supply invoice id you want to make sure you got the grm.  Then only you issue payment.  So you issue payment records.  GRM means good receive.

Speaker 2: 08:18 
 Yeah, good receive only become invoice.

Speaker 4: 08:24 
 Okay, good receive only with an invoice.  So it's a payable invoice like the one.  No, I'm talking about the step before the supplier send you their invoice.  So.  So then after you got Ji, then you create the payable invoice.  Payable invoice.  So these three documents together.

Speaker 2: 08:40 
 Yeah, yeah.  So what you do, what you say when well received.  I mean when people receive the supplier voice, they just take a picture Abu learning.  Is it what you say.

Speaker 4: 08:58 
 Now in this case, supplier invoice.  Not inside the system, but GRM inside the system.  So it's a matching of this supply upload to Maya to match which gir.

Speaker 2: 09:11 
 But let's say the customer sometimes they are good and I will put different ones.  How.  How he can.  I mean how the Maya can identify this is what item.

Speaker 3: 09:19 
 Right.

Speaker 4: 09:20 
 So this is also the same problem with purchase order.  When you issue PO or your supplier issue po there are quote different matching.  So on our side we have a way to do this matching id.  So first part is because on Maya side the item database is we have something called rack.  So our AI can search this item.  Even your code don't match exactly.  Or you use layman term to describe it can also find.  So this is the first one.  Second one is that it learns from user.  Because sometimes no matter how we try to solve sometimes like the code is very different.  So then the user will go override.  So when you do the override, Maya will learn from this behavior.  The next time it happens, you will remember that mapping.  So this is the two parts that will help with this different code mapping.  Because sometimes it's not just code.  Sometimes your UoM also different conversion rate also different.  So that is it will.

Speaker 2: 10:16 
 You know.  So this thing will be appearing in gr.  So one human need to.  Human need to.  I mean confirm the quantity and also the amount Correct.

Speaker 4: 10:28 
 Correct.  Human will still need to check.  But what Maya will do is it.

Speaker 2: 10:31 
 Just upload the information to the gre.

Speaker 4: 10:34 
 Then it will help you pre populate.  All you need to do is you still check.  Because imagine you've got one po got 100 item.  If without this you have the data entry hundred items every single time.  But after Maya maybe 70, 80% of the work is automated.  Really you just focus on checking make sure correct.  Then sometimes over time this will improve.  But for the roles that are wrong or incorrect, humans still need to check.  But you save majority of your work and allow you to save time throughout the day.  And you can focus on more important things.

Speaker 2: 11:08 
 Is there any like.  Like the.  Let's say normally we receive this document from warehouse.

Speaker 4: 11:17 
 Yes.

Speaker 2: 11:19 
 So is it possible that they receive the document that directed the patient sent into Maya.  But the person who in charge of this part is actually another admin.  Then how of how?  I mean how can cooperate?

Speaker 4: 11:34 
 Okay, so now without system of course very hard.  But when it's implanted now it's like this.

Speaker 2: 11:39 
 Now normally warehouse just take a picture again the physical will pass to the admin.  Okay.  That mean you correct you.  You get the physical thing.  Then you key into a gr.  But the call to key in the GI from warehouse not buy any the GR from warehouse.  I mean admin just convert the.  Just double check the quantity and item and the price.  Then only convert to purchase invoice.

Speaker 4: 12:13 
 I see.  But now I think when we understand on warehouse side only got one person.  So become bottleneck already right to key needs doctor.  So is that one of the reason.

Speaker 5: 12:24 
 Why normally we receive the goods receiving one of the.  They say the KG is not tennis.

Speaker 2: 12:32 
 Hour the K but the supplier they sent us like 10001000 kilo.  But we receive after we come.  Because our all the box are 998.

Speaker 5: 12:45 
 Some is less kg.

Speaker 4: 12:48 
 So then not me.  What the process is that either in your system you record GRN as 998.  Because you receive 998.  So then you have to Ask your supplier why is less 2kg?  Either they going to send you 2kg more next order or they're going to credit roll 2kg from you.  Normally that is the process.  That's the people who process are inside that.  So on the system side we reflect what we actually.  So answering Mr. David's question on how the user will collaborate.  So when the user upload this.

Speaker 2: 13:31 
 GRM or warehouse.

Speaker 4: 13:33 
 Warehouse upload this thing in Maya, it will come to a place.  After Maya do the extraction.  Ready.  There will be a place that the human will check.  So two people can work here.  One is the warehouse people.  So that means they upload.  Then there is a check and then correct and then submit.  Or if let's say it's all in.

Speaker 2: 13:48 
 The WhatsApp or in SQL.

Speaker 4: 13:50 
 No, there will also be a website or website.  Yes, correct.  So there'll be a web interface to do this sort of checking.  So it's on your phone also can check on your computer also can check.

Speaker 2: 14:00 
 Oh, so you want to show.

Speaker 4: 14:01 
 Maybe you can show this like the cbo we show you like how it's working for the PO part for selling site Purchase order.

Speaker 2: 14:09 
 Purchase order.

Speaker 3: 14:10 
 Yeah.  This is basically our interface.  And this is a page of cpo.  No need but upload English.  English and you can all the PO for example you have what to do.

Speaker 2: 14:46 
 By upload of the po.  For example I do it in the SQL and I download the file.

Speaker 4: 14:56 
 Like your customer issue you a lot.

Speaker 2: 14:57 
 Oh, so this purchase order is not my site.

Speaker 4: 15:00 
 One is from customer but same.

Speaker 2: 15:03 
 Workflow Customer nominate the WhatsApp like mincemeat.  Thank you Lord Lloyd.

Speaker 4: 15:15 
 Then it will come in like this but bigger.  Customer usually issue po.

Speaker 2: 15:19 
 Yeah, right.

Speaker 4: 15:21 
 So PO side also you have the same problem like the GRN or like the item code mapping UOM mapping.  So after Maya extract you will receive link to a page something like this.  You're showing now no liner.  Okay.  Yeah.  So this one is a desktop view but on the phone also has a version of this one that's mobile responsive.  So over here salesperson just need to check whether the information extract and the PO actually correct or not.  Because that's important thing.

Speaker 2: 15:54 
 PO issue or on the left on the right.

Speaker 4: 15:56 
 Right.  Left and right.  Left and right.  So you can see extracted actually what information.  Because the extraction one is your information inside SQL because you need to match.  So Maya will do a lot of auto mapping for you.  But if it cannot map something it will show.

Speaker 2: 16:12 
 I just say I know because we know the customer like some they issue the PO doesn't put like pop very slight.  But we understand the customer he actually need a pot belly slight skin on.

Speaker 4: 16:28 
 Okay, so how this one.

Speaker 2: 16:30 
 So how this we.  I mean we need to manually do it here or how.

Speaker 4: 16:34 
 Okay, so normally how you do this is because your SQL finish good is pork belly size.  But the skin on is just preparation method.

Speaker 2: 16:44 
 No, no, no.  I got just finish good la.

Speaker 4: 16:48 
 So as long as the as a finished good name or the code or the description can differentiate Maya can identify for you.

Speaker 2: 16:57 
 Or if cannot tell me I need to manual key also.

Speaker 4: 16:59 
 correct.  So after that you will learn already.  Yeah.

Speaker 2: 17:03 
 So after they will learn from this customer they actually order this.

Speaker 4: 17:06 
 Yes.  So then it will build up that knowledge base.  So this one is a new thing that the learning part still we are fine tuning.  Then eventually we will see how to improve the equipment.  But overall there is this learning feature.  But for there is also another example.  Let's say pork belly.  The scheme one is just one finished food.  Normally some of our customers who have very high preparation customer like Fisher, right.  They sell salmon fillet.  But salmon fillet can prepare many way.  Like I want whiskey, I want butter One however vacuum pack.  But it's only one finished good.  So how they will do is they will store it in the additional remark.  So in Maya said that when you keep storing all these additional remarks Normally this one who remember salesperson remember in the brain or not next time customer order salespeople will remember again.  But Maya will actually surface this thing for you.  So that you make sure like a person no chance to forget this sort of thing.  So this one in the additional remark also got this feature.  Yeah.  So this is how we make the order accurate.

Speaker 2: 18:12 
 Yeah, the remark actually also like last week in the meeting.  We can use the watch ventures to the Maya WhatsApp.  Let's say okay Maya this customer ABC they need the very skin on slide.  Actually the size 5cm to 5cm and 3mm this.

Speaker 4: 18:36 
 Because we never sell fork.  Yeah.

Speaker 2: 18:42 
 Automatic.  When you watch to this then this thing remark will go to the customer Remark good customer.

Speaker 4: 18:51 
 It depends.  It depends customer profile.  If you're talking about the order or if you want to add to his long term preference also can add customer note.  So let's say you talking to new customer haven't buy before.  But you're trying to close contract or whatever.

Speaker 2: 19:05 
 Right?

Speaker 4: 19:05 
 Sales people go out for meeting.  You can watch the car say oh, today I met the customer.  We talk about this, this, this.  Then Maya will write a customer note inside the customer profile.  So Then next time you want to check.  Hey, can you check for me last my last meeting with customer.  What we talk about then is able to return this thing for you.  Then in the besides on the chatbot in the web interface you can go to the customer profile.

Speaker 2: 19:26 
 How long the voice message can be called?

Speaker 4: 19:32 
 One hour.

Speaker 2: 19:34 
 I don't need to record, I just press record.

Speaker 4: 19:38 
 Then this one cannot.  Yeah, lah.  This time this one Usually we.

Speaker 2: 19:43 
 Yeah, no need to say again think about it.  Just stop what we're talking.

Speaker 4: 19:48 
 While we're talking.

Speaker 2: 19:49 
 I already recorded and sent to him already.

Speaker 4: 19:51 
 This feature don't have yet.  Maybe future.  But we also use like for example, we are also recording this for our meeting for internal.

Speaker 2: 19:58 
 Oh I know.  Then you can use other apps other like recording the meeting one the app we cop the thing already.  You just copy the thing put there only.

Speaker 4: 20:09 
 Yeah, for us that's how we use the AI.  So coming back to the cto let's say for this one it's sales case.  When let's say every morning salesperson comes.

Speaker 2: 20:22 
 If you didn't check, you talk other topic.

Speaker 4: 20:33 
 What my sales team say about me.  Yeah, so coming this how the salesperson life will be a bit different after this.  Is that normally when you come into office you realize.  Hey, my WhatsApp got 1020 POS ready.  Before this I would need to manually data entry one by one create order in SQL or something or some other workflow.  Now what you need to do is you just forward this 10po into Maya.  Maya will extract the po for you.  And after extract ready.  If the po can automatically map 100% or automatically create the draft order for you.  You just need to approve only if everything correct.

Speaker 2: 21:08 
 But if I extract the appropriate then what to do.

Speaker 4: 21:11 
 Then the order become going SQL radio.  Then you continue process.

Speaker 2: 21:15 
 If need to create the order going to SQL.  But the sales order.  I still need to take this detail to my WhatsApp group.  Because the people who need to arrange for the right.

Speaker 4: 21:27 
 So when you approve the order, Maya will submit the order and then he will return back to you the PDF of the order.  The order, the order document.  Then if you need to forward.  What's that good.  Okay, then have to manually forward.  Or if you can.  Right now who is the main person that is coordinating everything?  Me.  Okay, so.  So after this how there is a certain way that your staff will need to know how to use the Maya.  Also because after this when you submit the order ready right Your warehouse person will need to know how.  Because I think now you also create a quick list you create the dn.  Yeah.  All you manually do before this.  Okay, so got two options.  Either you still continue to create the thing and forward to them only.  Or you can teach them how to create this thing and then pick update back.  Basically we can onboard this person who needs to process the pick list.  His job every day is to see hey, what is the open sales order that I haven't picked.  So I just need to go and pick all these orders.  And then he used Maya to create the pick list.  Tell me how much I pick.  Because now your workflow is you create the pick list.  He pick, he tell you how much he picks.  So instead of you have to create all this thing.  We can onboard this person, teach him how to create the pick list.  Pick ready, update back and system.  So then for you see on the order level only this order actually I pick how much this order I pick out how much.

Speaker 2: 23:12 
 So you.

Speaker 4: 23:12 
 You become monitor.

Speaker 2: 23:13 
 But already we share with you or not we have.  We still practice right.  The paper picking list.  So we only have to send the order in the group so that we print out the picking list.  So for the picking list they write the week on the paper.

Speaker 4: 23:32 
 They write how much they pick on the paper.

Speaker 2: 23:34 
 Yeah.

Speaker 4: 23:35 
 Your pick list is one order, one pick list or one pick list.  Many order, many order.

Speaker 2: 23:40 
 We actually how to arrange for pick list.  We depend on the delivery place.  Like in KL this Jalam.  We call this driver.  For this driver.  Then for the KL side one.  Then another driver apply for pj.  Then we will.  We will put the previous for this pj.  Then for the blank from the Wang side and also our station.  So they go few routes.

Speaker 4: 24:06 
 Few routes.  So that's how you be good.

Speaker 2: 24:12 
 Okay.

Speaker 4: 24:13 
 So you group the order by the salesman.

Speaker 2: 24:17 
 They will send the order to the Swiss group.  I'm going to show you.  They'll send this order.  Send the order in the group.  Send the order in the group.  Okay.  Then I will.  I know which client they are actually located.  So I will consolidate it.  Or to make like this customer damage driver.  They will say in the group.  And also they are actually doing the checking list on the physical paper.  Also the physical paper actually for them to double check the weight.

Speaker 4: 25:01 
 So that means this one is all manually typed.  It's not from SQL.

Speaker 2: 25:07 
 No.

Speaker 4: 25:08 
 Oh okay.  Yeah.  So okay.  Maybe you want to demo a simple order flow.  Like how they would use.  They will do it on just use.

Speaker 2: 25:28 
 I bet it's okay to do a sales order list.  I mean the path is.  It's okay.  So how we need to.  I mean how do this?  But if we go to the group.  I mean to may.  May auto generate the deal invoice.

Speaker 4: 25:44 
 Yeah.

Speaker 2: 25:44 
 And someone will go and check it.

Speaker 4: 25:46 
 Yeah.  Can you just do a quick demo for.  For this?  Yeah.

Speaker 3: 25:49 
 Yes.

Speaker 2: 25:49 
 Because I think if you ask the Maya to do.  Maybe we can learn from Mila because from the sales order there we can ask request from the salesperson.  You write a specific code and name.

Speaker 4: 26:06 
 Currently the main thing that is that's restricting the workflow is because all of these things need to go into SQL.  So because for it to go into SQL it needs to be done in a certain way.  So for us, our workflow inside Maya is tally with all these accounting system review.  So right now why your current workflow works is because you are not following a certain flow main thing in your auto account SQL is that you just need to make sure the invoice is there, the payment entry is there, the gin is there, AP invoice is there.  So that the auditability of your accounts is solid.  But I believe the accounting system can also order management to a certain extent customer management also on.  So for our Maya integration to your SQL, all this information also will appear in your SQL one.  So in order for that to happen, there's a certain workflow that Maya enforces for our users because this one allows it such that the different part of the order can outsource different people.  Because if you work without a workflow system, end of the day only you know how to coordinate everyone.  So that's how to remove yourself being into in this particular bottleneck.  So when you follow this workflow, different people can take different part of the thing.  And then you can monitor on top and make sure everything on track.

Speaker 2: 27:32 
 Oh yeah.

Speaker 4: 27:33 
 So yeah, let's start with that.

Speaker 3: 27:37 
 So this is the example of our just order the deal.  So basically you have a header.

Speaker 4: 27:46 
 Feel free to stand up.

Speaker 3: 27:47 
 And basically we have a header.  And then this is your own information and the customer information.  And then down here we have item section.  Put your sku, your item name, quantity.

Speaker 2: 28:07 
 This is to usually invoice are correct, right?

Speaker 3: 28:09 
 This one sales order.

Speaker 4: 28:10 
 This one create sales order.

Speaker 2: 28:11 
 Okay, sales order.

Speaker 4: 28:12 
 Yes.

Speaker 3: 28:13 
 So in Maya, right.  You can imagine the sales order is a center of everything.  So you can after you create the sales order, you can create from.  From this sales order to create invoice delivery note and pick this.

Speaker 2: 28:28 
 But normally not delivering only two invoice.  Because in SQL system you need to transfer the delivery order to.  Yeah, so how is it.

Speaker 4: 28:38 
 I mean, so on our side we.

Speaker 2: 28:40 
 Need to follow the step or not follow the SQL step or not.

Speaker 4: 28:43 
 Or you can follow the SQL step.  But for our site if you didn't follow also when we push into SQL you follow the step.

Speaker 2: 28:50 
 Okay, you should invoice normally for us.

Speaker 4: 28:54 
 Is because we can integrate to any.

Speaker 2: 28:57 
 Accounting system I know when okay, let's say new stuff they don't know.  Then I create the invoice id Then I create again a deal with duplicate.  I mean like in SK system if you do invoice you cannot backward to the delivery order 1.  But when you do delivery order then you only can transfer to the invoice so the same quantity that is recorded otherwise they will mess up.

Speaker 4: 29:26 
 So that means your in SQL there is the invoice cannot be larger than the larger.  That means the amount must tally not totally.

Speaker 2: 29:35 
 I mean, cannot be more.  I mean the quantity when you issue in the delivery order that's the only way you can transfer to invoice.  Transfer invoice means.

Speaker 1: 29:47 
 Yeah, meaning you cannot generate invoice before.

Speaker 4: 29:50 
 The.

Speaker 5: 29:52 
 Transfer to invoice you cannot trans.

Speaker 4: 29:56 
 Oh yeah.  For okay, when we push in SQL we use straight from the so side because when you want to in SQL there's two parts.  It's either you can start with a delivery first after delivery then you invoice or you start from a sales order.  Sales order you deliver then also you can invoice or from the sales order you can invoice and also can deliver.  Because in the accounting system has different.

Speaker 2: 30:20 
 Pathway invoice to bok.  No, no.

Speaker 4: 30:24 
 Not invoice to do but it's coming from the sales order level.  So in the SQL using the sales order doctype sales order can create dn.

Speaker 2: 30:31 
 Oh, then these two tally must have a sales order.

Speaker 4: 30:36 
 If you don't have sales order then no choice must from dn.  So there's different flow.  So on our side these can so it's flexible here.

Speaker 2: 30:45 
 Okay.

Speaker 4: 30:46 
 But when we make sure when we push into the system it conform to the restriction in our system.  Yeah.  So on our side also we have certain restrictions like this inside as well to make sure this is t.

Speaker 2: 31:08 
 Moist then.

Speaker 3: 31:11 
 And also we have our invoice.  You can check all the type here.  Invoice, credit note, debit note and delivery notes.  Yeah, so after you create the you convert the sales order to invoice.  Really?  You see like this.

Speaker 4: 31:35 
 She.

Speaker 2: 32:00 
 That's.

Speaker 3: 32:41 
 So we also have our invoice.  So once you create the from a submitted SO command plus okay, so after you create the so from you create the invoice from the so right.  You will get the draft status one invoice and normally the block you want.  If you want to try to create a duplicate invoice.

Speaker 2: 33:11 
 Oh yeah.

Speaker 3: 33:12 
 Even though you can create a new one.  But if.  Let's say you already submit the invoice, right?  You try to create a new invoice.  Our system will verify it and validate it when you try to submit.  If.  If already have submit.

Speaker 2: 33:26 
 If let's say yeah approval.  Then after submit it will come out a PDF.

Speaker 4: 33:33 
 Yeah PDF.

Speaker 3: 33:36 
 You can.  You can generate this and you download and you can share to your team or your company customer.

Speaker 4: 33:46 
 You can do everything here in the chat bot also on WhatsApp.

Speaker 2: 33:51 
 But only you can submit.  Then can.  Can remove the draft something.

Speaker 3: 33:55 
 Yeah, yeah.

Speaker 4: 33:55 
 To show that it's draft.

Speaker 3: 33:57 
 Yeah.  Then this is how our PDF looks like.  So maybe you.  You have your own custom PDF format, right?  We can do for you.  Okay, so back to.  So for delivery notes we also have return notes and delivery notes.  So return notes when you want to return back from your customer, right?  Yeah, you need to issue the return notes.  So for our delivery notes you can create for example you need to schedule the time and the date for this specific delivery note.  And you can for example you want to reschedule the time and then reschedule and then set the time.  Or maybe once you deliver the item to your customer ID you can just mark as deliver or mark as field.

Speaker 2: 35:02 
 So but then necessary to mark them because we all want to issue the delivery order.

Speaker 4: 35:09 
 So over here you can track which the deputy statuses as well if you want to.  But if you don't mark them.

Speaker 2: 35:15 
 Normally we got signed from top sign from a customer.  So can we just.  I mean the driver just.  Just put to the mir then because every time the driver or send us the.

Speaker 3: 35:29 
 The do the do one the sign.

Speaker 2: 35:32 
 Yes, like this.  Actually this one instead he just send the group.  Why not the driver can directly send to mail m direct to ab.

Speaker 4: 35:44 
 Driver is in house driver.

Speaker 2: 35:45 
 Or the party driver can say it's a in house driver.

Speaker 4: 35:49 
 Actually Maya, we also have another module one Cayenne.

Speaker 2: 35:54 
 Yeah, we send to them.  So every time the driver's done anything also we will send no matter third party or the in house one.  They also will send a deal and some they will send like.  Like this take a picture and then dio.

Speaker 4: 36:10 
 And so when this one you forward to Maya also can.  But the problem here is that when you send these two continuity.  We don't know which order to which DN to Type.  So if normally are currently without the.

Speaker 2: 36:24 
 Delivery delivery stock module normally good.

Speaker 4: 36:29 
 They will need to specify the number.  If can identify that it will map loss.  But if not, Maya will normally ask the user ab.

Speaker 2: 36:37 
 How about I add one more column here can indicate this is from which invoice.

Speaker 4: 36:43 
 I mean if can then it will.  It will help with the extraction or like the matching.  What I wanted to say is that actually on Maya side we have another module which is to manage delivery one.  So after you issue DM ready, right.  We have a group of customers who have their own internal delivery team.  So what they do is every day the warehouse person, they will plan the trip of this delivery person and then assign where they're supposed to go.  So then what the delivery drivers will get is like a driver app or Maya where you will tell them okay, stop.  Number one is this stock.  Number two is this.  So they got a paper deal and they also have an app to track what they're supposed to drop off at every location.  And then it's delivered ready.  I just snap on topo then automatic update for you ready.  And then besides that you can also upload proof of delivery.  Or if I try to deliver, cannot deliver, need to reschedule.  Everything is managed to track your delivery.

Speaker 2: 37:41 
 So what you want me to do to indicate the invoice number there.

Speaker 4: 37:46 
 Okay, so you've got two options.  One is either you can add on this particular module.  This module.  Because it's a add on module.

Speaker 2: 37:53 
 Actually it's another app.

Speaker 4: 37:54 
 Is it?  No, it's in the same one.

Speaker 2: 37:57 
 It's a Maya as well.

Speaker 4: 37:57 
 It's also Maya, but there is a delivery management that we currently.  So then it will help you manage the life cycle of this thing.  If not, if you upload just until the end, you'll just upload the attachment, right?  The user experience you will get is mayam.  If can identify this thing belong to this dm, you will just mark as delivered upload the attachment there.  But sometimes may not be so accurate because sometimes the proof of attachment is like.

Speaker 2: 38:31 
 So you mean what I request to ask her to add one more column of the invoice number.  Actually it's not help in it doesn't help so much.

Speaker 4: 38:39 
 Doesn't help so much with accuracy because sometimes proof of delivery.  If you look at the photo, right?  You put the parcel at the oil heading photo.  Then how to know this belongs to hdm.  That is the issue with the delivery side of things.  Yeah, so that's why it's an old one module on its own.  This will Be a separate.  Yeah so this one can be later but it's good that we just slot it down.

Speaker 2: 39:04 
 Yeah.

Speaker 4: 39:05 
 So.

Speaker 3: 39:18 
 Piggly.

Speaker 4: 39:19 
 So yeah.  Delivery trip management but we can explore that later after the call and phase one is done.

Speaker 3: 40:06 
 Right now we have a pig list.  So basically you can monthly list you can based on create from one sales order and another one is like you.

Speaker 2: 40:16 
 Can create why you need to do one picking for one sales only Then we have a lot of people.

Speaker 3: 40:22 
 It's another option.  Another option is that you can do one over here.  Yeah.

Speaker 2: 40:28 
 You can pick the overview of the.  How's the perkiness look like?

Speaker 4: 40:35 
 Yeah, let's show the.

Speaker 3: 40:36 
 Yeah.

Speaker 4: 40:37 
 So the pig list one.  I think the current one that you see here is the older version.  We will be deploying a newer upgraded version of this.

Speaker 3: 40:47 
 So it's almost.  Yeah.  In pic list you can see we have SKU name.  You can pick from which warehouse and the reference the so reference and your om and quantity.  So quantity to Epic is like your warehouse.  People can like update the number number here.  So after you know.  Yeah after once you pick already you just update to 10.  Yeah so update.

Speaker 2: 41:16 
 You just submit continue to pick mean it's a pattern of a stock.  Is it.

Speaker 4: 41:23 
 This week just need to pick how much after that.  Okay so this is the pace is still bit older version but then the upgraded version they will say it will also be how much I actually pick.

Speaker 2: 41:34 
 Oh yeah.

Speaker 4: 41:35 
 So then yeah the interface will be here together with the document as well.

Speaker 2: 41:39 
 Yeah but let's say this is by business mark.  How about kg?

Speaker 4: 41:44 
 Yeah you can have many units.

Speaker 3: 41:46 
 Of measurement.

Speaker 2: 41:50 
 Or then you can show me the video.

Speaker 4: 41:52 
 Correct.

Speaker 3: 41:52 
 So but our PDF is older version.

Speaker 4: 41:57 
 But this one will match because in your SQL you got the base.  I think for your business everything is in kg.  Mostly in kg.

Speaker 2: 42:06 
 Yeah.

Speaker 4: 42:07 
 Yeah.  So you also follow.  Yeah.

Speaker 2: 42:10 
 So will it better that we upload the packing list got different then the 1.39, 29, 28, 27 is it better that when we receive because it's not out we do Mark.  We just want to confirm the total weight and the actual 1 total weight.  Is this correct or not from the supplier.  Correct.  But we have the packing list.  Packing list from the supplier we just upload the packing list to the good receipt note.  Then for the packing list you see we'll be Teddy from.  I mean is it a possible Teddy from picking list to the packing list.  Picking list and the packing list.

Speaker 4: 42:53 
 Because this one two different process.  Because this one's selling.  This one is incoming so it's different.  Different thing.

Speaker 2: 43:01 
 But the packaging still can.  We still can upload, right?

Speaker 4: 43:04 
 Yeah.  So in this packing.  So the new flow for this pig list how will happen is that as if you create one pigment list for many order.  After that you print out ready.  You print out.  You pass to your warehouse.  They don't sometimes don't use my ear.  So they will just stick on the form or something.  So then after that you can take a photo.  Send this back.  Then you update that picnic is actually what was.

Speaker 2: 43:34 
 We now still also have this pick by who picked by time signature.  We have this part but in the long list.

Speaker 4: 43:43 
 So in the.  Yeah, it's also in the long list.  So basically because if you want this information to reflect onto the order because.

Speaker 2: 43:53 
 If the system if or because your sales order by single one.

Speaker 4: 43:57 
 So you reflect back.

Speaker 2: 44:06 
 But this is.  We not apply this also camera picking this correct a lot.  Yeah, we not apply it.  We can use our way to do our Pekingese as well.

Speaker 4: 44:14 
 So then this one we can see.

Speaker 2: 44:15 
 But we just.  We just need to take the picture to send to Maya.  Then I'll put this Peking mist in the.

Speaker 4: 44:21 
 Yes.  You can attach this picking mist to the as a attachment to the others.

Speaker 3: 44:25 
 Okay.

Speaker 2: 44:26 
 No, I mean we do our own way of picking this.

Speaker 4: 44:30 
 Okay.

Speaker 2: 44:30 
 Then after done already.  Because I want someone who got responsibility who pick this part, this thing and who check this thing.  Because my problem here is people who pay and who do a check.  They sometime or I pay.  Correct.  I check.

Speaker 4: 44:48 
 Yeah.  It's not daily.

Speaker 2: 44:50 
 Not daily.  Then when we send to the customer I order.  It's not this one also different.  But it dealers or item law.  Okay.

Speaker 4: 44:59 
 So it's a human.

Speaker 2: 44:59 
 So I want human error.  I want how can avoid a human.  I mean from the.  From.  From the human error.  Then we.  We will apply a punishment of the error.  Then how we can prove that.  I mean how, how.  How to prove.

Speaker 4: 45:22 
 So that means the document that you send the number is correct.  What they pick actually wrong.

Speaker 2: 45:29 
 When you search order like 10 kilo people will pick 8 kilo.  Then people will check the top is 10 kilo.  2 Also wrong.  Or scenario 3.  Scenario 12 was wrong.  Another one pick one check.  Check correct.  You check correct.  Then there's nothing happening.  I mean it's a checker.

Speaker 4: 46:03 
 Yeah.

Speaker 2: 46:07 
 So we pick a dp.  Then someone will check.  Someone will check.

Speaker 4: 46:13 
 Check.  Still around check.

Speaker 2: 46:15 
 Then from the long list of my beginnings, I just upload to here.  Or what.

Speaker 4: 46:24 
 You can use to generate the list.  After click ready.  They will have actually pick value.  Let's say then you got, let's say 9.5.  So then after that you can upload back into this one.  So then the actual to pick and actually peak value will reflect.  So then after that what can happen is that.  Because the main reason in your business is like you will build them based on the actually big quantity.  As I actually pick 9.5.  So I will deliver 9.5 and also invoice 9.5.  So then what will happen is that you will update the sales order so that next time when.  So the next step is to generate the DM is 9.5.  So you generate invoice also 9.5.  Yeah.  So that's the main reason of I.

Speaker 2: 47:13 
 Can skip this one use my own list.

Speaker 4: 47:18 
 But then when you create the sales order the DM you also need to take note that you need to mention it's like five.

Speaker 2: 47:24 
 So I mean I will do the.  I mean this week or I made them.

Speaker 3: 47:31 
 Okay.

Speaker 2: 47:31 
 I generously sorted.  And then I need to pack this then this rig is it.  We can take a picture of.  Of the taking this then can auto generate to.  I mean get the capture extract the.  The.  The.  The.  The rig to.  To make this as a delivery order.  No.

Speaker 4: 47:56 
 Okay.  I think if you want to maintain your current picking list for this.  I think I can suggest is that when the order come in you pick first after pick only you trade the order after pick you got list ready Auschwitz order.  Then after you got this big list then you upload the feed to Maya.  Maya will go to all the orders for the.  I think that will be simplified.

Speaker 2: 48:22 
 So meaning that I will do a sales order myself first to send the warehouse instead of send to the mayor.  Then I get all the quantity then send back to Maya.

Speaker 4: 48:38 
 So then you save the big list.

Speaker 2: 48:45 
 That must be sent by X and Y.

Speaker 4: 48:48 
 Not a PDF or scanners.  Okay.  Or pictures but need to be high quality.  Like blur them so hard.

Speaker 2: 48:57 
 But the name customer name and also must clear.

Speaker 4: 49:02 
 And the item also must clear.  If can the PDL is just scanner scan become PDF and then you send the PDF because you want to minimize.

Speaker 2: 49:14 
 Is a better way to upload the Excel.

Speaker 4: 49:16 
 I mean the best if easy for you.  Then.  Feed your bike.  So 10 percentage fulfill 90% of missing 10%.  So visibility metric.  On to Maya.  Then Maya from the P list will create order for you for the customer.

Speaker 2: 50:37 
 Okay.  Then generally delivery order.  Order then emo.

Speaker 4: 50:50 
 Okay.

Speaker 2: 50:52 
 Okay good.  And continue give me.

Speaker 3: 51:03 
 Okay.  I think yeah, finish it and I.

Speaker 2: 51:08 
 Want to come back just now when you say we received the amount to check the customer payment.  Normally I received the payment from my customer.  You tell you the bank statement.  Correct.  Okay so when we do the I also have a payment armor payment to supplier.  So when I key in.  I mean.  I mean we auto generate the gr okay Then from the GR we need to transfer to purchase ourselves.

Speaker 4: 51:49 
 Something that warehouse.

Speaker 2: 51:50 
 Yeah.

Speaker 4: 51:51 
 So now before you create the AP invoice you need to validate your GR tally with the invoice.  So this almost like.

Speaker 2: 52:06 
 Somebody that's creating Then submit ready.

Speaker 4: 52:08 
 Then submit.

Speaker 2: 52:09 
 Then you create a purchase invoice ready.  Then maybe I also make the payment to the supply supplier.

Speaker 4: 52:15 
 Okay.

Speaker 2: 52:16 
 And sometime it's not the same invoice.

Speaker 4: 52:19 
 Amount sometimes so the.  So the payment we make to supplier different than the AP invoice.

Speaker 2: 52:29 
 Sometime maybe it means.

Speaker 5: 52:30 
 It means the total is 10,000 we just pay them 5,000.

Speaker 4: 52:35 
 Like partial payment.  Like that means partition Normally this one not part of the.  So that means you just want to record payment voucher to this one to this particular supplier.

Speaker 2: 52:52 
 No, not of the supplier.

Speaker 4: 52:56 
 This one currently not inside the Maya because this one is part of purchasing module.  Purchasing module we don't have yet.  We are focused on selling the AR is a special feature that we mainly help.  Because a lot of clients a lot of.

Speaker 2: 53:12 
 Okay, let's say I I don't you based on a bank statement.  You supply payment.  You not pay.  You not auto key.  Then let's say I make some expenses.

Speaker 4: 53:23 
 Expenses also don't have it future this one apparently don't have it like AR.

Speaker 5: 53:31 
 Payment now be received by the QR payment, AR payment.

Speaker 2: 53:35 
 Okay.  From a merchant.  She mentioned merchant.

Speaker 4: 53:38 
 So the settlement report.

Speaker 2: 53:40 
 I mean there actually some people making transfer some in cash, some in to scan the QR to make the merchant.  Okay, so when the merchant we receive the amount actually they compound the whole day.  Like do the bank statement to appear in the bank statement.  So do we need like send bank statement and also this is from transfer.  Then we need to send another report from the merchant.  Then send the payment slip from the customer.

Speaker 4: 54:11 
 Okay so for the merchant settlement report one and the reconciliation of that one Maya not suitable.  You don't still need to do outside your system your manually the part that Maya can help your error is the customer that owe you money.  And the sales order also come from the customer seller.  Yeah, because the invoice also you create from I then the payment also in my.  Then that's how you do the.

Speaker 2: 54:34 
 Okay,.

Speaker 4: 54:38 
 One more question.

Speaker 5: 54:39 
 How about the C.N.

Speaker 4: 54:42 
 Okay.

Speaker 5: 54:45 
 It will automatically will deduct the Invoice.

Speaker 4: 54:49 
 When we do a credit note you can do two types.  Credit note against invoice or credit note standalone for the customer.

Speaker 2: 54:56 
 How about to use a standalone that.

Speaker 4: 54:58 
 Means like no invoice, but for some reason you need to credit off the customer.

Speaker 5: 55:04 
 Normally we will use the credit invoice number and the credit note number same because we don't want to confuse our guest.  So we will use the same number in credit note also.  So if like that means we need to do it manually.

Speaker 4: 55:22 
 You do.  But if you do like that then how you submit for your E invoice is the same.

Speaker 5: 55:29 
 No, the in France will be have a INV is for invoice and CN is for cmr.

Speaker 4: 55:34 
 Oh okay.  So you just do that in Maya because Maya was generate the ID automatically so you cannot override.  So it's automated.  But if you want to match the number, you can do it in SQL and then Maya will pull it back in.  Because in Maya when you create a document you cannot override the ID number.  Yeah, so it will just running number.  But because when we integrate to your SQL if you create a document back, you also pull back the type of.  So if you want to maintain this practice, your option is you can still maintain trade outside and then Maya will pull back in later.  Yeah, but I will just suggest to just do it in Maya so that it's one way for Allah simplify the process.  So in terms of your PDF and all this is all generated by SQL right?  SQL video generator.

Speaker 2: 56:31 
 Yes.

Speaker 4: 56:34 
 So I think for SQL what we need is we need a sample of this of your document formatting so that we can.  Because there will be a state where you can send us a PDF.  So we will just make sure our PDF generation formatting also match your formatting.  So let's talk about the three other customization 1.

Speaker 2: 57:08 
 So there is a bug any question for.

Speaker 4: 57:18 
 Okay, can you name it this one.  When we integrate with your SQL we will see the credit limit inside and then for our credit limit we will show four tiers whether term bridge Limit bridge.

Speaker 2: 57:31 
 Let's say some scenario this customer normally they order like 100,000 every month but next month, I mean this one he business very good.  Can someone have an authorization to say hey, help me to increase the credit limit.  How much Then the mayor can go there and change the.

Speaker 4: 57:53 
 Okay, so what happened is that the limit or.

Speaker 2: 57:56 
 Or at least authorized for this time.

Speaker 4: 57:59 
 Can one time approval for the order to pass.  So this one what we call it is a credit controller.  So most likely it's to Approve the order.  So then let's say.  Sorry, your name cj.  So let's say CJ creates the order for this customer.  But because credit limit very accident ready.  So when C tried to submit order, Maya will say oh, order block because of exit credit limit.  So then what will happen is that David will receive notification.  So David, you can take notification say you want to open the order.  Yeah.  So then you become the credit controller to control this.

Speaker 5: 58:49 
 The credit dp will follow the SQL one, right?

Speaker 4: 58:53 
 Yeah, we are seeing from SQL.  Okay, so in terms of the.

Speaker 2: 59:02 
 No, I wouldn't have a access to C or experience.

Speaker 4: 59:14 
 So in terms of the ar, how many bank accounts are you guys using?

Speaker 2: 59:18 
 Normally I use M only for the transaction.  I want to use another bank.  I mean I want to use two bank otherwise you can get a job of.

Speaker 3: 59:33 
 Okay.

Speaker 4: 59:36 
 Because we also are doing the AP matching invoice in this.  Or is it fully AR.  This?  Yeah.  So I think if not mistaken for the.  Okay, so for the bulk price update.

Speaker 2: 01:00:06 
 Hello.  Hello.

Speaker 1: 01:01:14 
 You.

Speaker 4: 01:01:34 
 Hello.

Speaker 2: 01:01:40 
 Jam.  The common.  Peter.  So why so why do.  You.

Speaker 4: 01:02:35 
 Okay,.

Speaker 2: 01:03:26 
 Okay.

Speaker 1: 01:03:27 
 Yep.  Then for the bulk price update.  Right.  How do price changes usually happen?  Like how frequent is it?

Speaker 2: 01:03:36 
 Actually we try to make an update to customer every man money but sometimes it depends on the situation.  Sometimes like these two weeks all the price budget is so much.  So we also have a.  You also see us working very long.  We'll discuss about how's the marketing, how's the sales Renee, go on.  Let's see some.  We maybe some product maybe need to undercut to follow the market price to sell some price.  Maybe the stock is low price so we need to increase our price.

Speaker 4: 01:04:15 
 I see.  Okay.  So how do you update this pricing into your systems?

Speaker 2: 01:04:20 
 We not update any system.

Speaker 4: 01:04:21 
 We update any system.

Speaker 2: 01:04:24 
 I just send this price list to Excuse.

Speaker 4: 01:04:27 
 It's like an Excel.

Speaker 2: 01:04:29 
 It's not Excel.  It's a word WhatsApp word.

Speaker 4: 01:04:35 
 So that means there's not many skus many products.  Do you have.

Speaker 2: 01:04:43 
 50 In the WhatsApp?

Speaker 4: 01:04:45 
 In the WhatsApp can check all.

Speaker 2: 01:04:47 
 This I generate in the picture I sent.  I go to chatgpt gener picture and send them There is so one I know there very slow one.  I just.  Okay, I have two.

Speaker 4: 01:05:19 
 Two.

Speaker 2: 01:05:20 
 I have two category of customer.  One is a wholesales the second one is a retail mean who do a restaurant who have a hotel.

Speaker 4: 01:05:35 
 Yeah, I see.  Okay.

Speaker 2: 01:05:38 
 And this catalog, this price.  This price Actually normally for those customer or new customer who maybe not so active or maybe you've got other Options also.  But still supporters we need to sell update at the same price.  Not specialized enterprise up.

Speaker 4: 01:05:58 
 I see.  Okay.  So with Maya now it's like once you have all these SKUs from your SQL come inside here.  Actually you can manage the price inside Maya.  Because Maya can have many price lists.  Firstly you can have maximum minimum price.  Let's say certain thing can never below five ringgit.  Let's say you can have four.  So people don't make mistake.  Next one is that you can have different prices.  You can have the wholesale price, you can have the retail price.  So that when you are creating order.

Speaker 3: 01:06:32 
 Category.

Speaker 2: 01:06:32 
 And also yeah minimum price, maximum price, fixed price.  Yes in wholesales.

Speaker 4: 01:06:40 
 And.  And we can also support customer specific pricing.  So let's say Customer A.  This thing seven this one 730 you can set.  And then Maya will enforce this thing so that let's say salesperson.  Let's say forget Maya will make sure that it fix the pricing so you don't have wrong pricing.  So.  So this one from the web interface you can control.  Let's say this customer.  You.  You.  Let's say that like just now you call really this item confirm not this price I just set in my system.  My salesperson create the order.  He will always follow that.

Speaker 2: 01:07:10 
 Can we generate quotation?  Because you set all the prices.  But some big customer like them maybe they request a quotation first.  So when we set the price we can generate the quotation.

Speaker 1: 01:07:25 
 Okay.

Speaker 4: 01:07:25 
 Yeah, generate the quotation.

Speaker 2: 01:07:27 
 And for the quotation then we just send.  If let's say the PO price is lower than the quotation Purchase price lower than what we agree.

Speaker 4: 01:07:44 
 Yeah.

Speaker 2: 01:07:45 
 Then when you sell to them maybe but you check out.  Actually I have like I sell them in the chat we are put is 16 for 60.  But when he send in the PO is 15 for 50.  Oh then you sell them already in the first order.  They say you also can do one 50.  50.

Speaker 4: 01:08:08 
 Means this one in the PO or audit level we need to surface like the price is different.

Speaker 2: 01:08:13 
 So I mean we set the price is lower the fixed price.  I mean it's not lower than what we agree in the quotation.  You are saying you can only hire when you generate the invoice.  Depends on the PO to generate the invoice, right?  Yes, to generate that order.  Now then from the system to be able to become a delivery order.  So when in the first part when the customer you upload the PO the price is 1550.  But I set the price for him is 1650.  So I cannot.

Speaker 4: 01:08:46 
 If you got set the price 1650 it can never sell different than that price.

Speaker 2: 01:08:51 
 The price it must be 1650 is not 1650.  It won't sell off.

Speaker 4: 01:08:56 
 So you can set price if you want to.  But if you want to enforce well, you can enforce.  But if you want it to be indicative also can.  So that means let's say sell to maybe 1650 but you want sales user to be able to adjust.  Then you can save the one to enforce.  So every time when they add the order it will show 6050 really one.  But they can still adjust for two types.  Then third type is let's say customer no special price one it will just show you the retail price or the wholesale price.  Then salesperson can pick which price to sell to this customer.  Yeah.

Speaker 2: 01:09:39 
 Okay.  This from this B price can generate a picture.

Speaker 4: 01:09:45 
 So that is the product catalog one dimension.  Yeah, I think that we wanted to see a sample to understand what you mean by that.

Speaker 2: 01:09:53 
 Because I don't want to meet in a long list but people need to read more and read more.  So when you see the word also I don't understand.

Speaker 4: 01:10:04 
 Okay, so this product catalog, you want it to be like PDF many pages.

Speaker 2: 01:10:08 
 They can scroll actually in a picture of video also.  Normally I do in picture just you know, video you need to click in Auburn picture also.  But you see the picture first.  When you see a picture, I put in an open on it.  Okay, you also the same thing.  But in picture you see the picture.  Oh for the fairy cartoon.  But I PDF they're writing PDF some picture of it.  Then they don't see psychology, especially the old people.  They don't click PDF because they're scared.

Speaker 4: 01:10:50 
 Someone scared.

Speaker 2: 01:10:55 
 You go to PDF then they go to FBI.  Then they do know how to pick them.

Speaker 4: 01:11:04 
 That's true.

Speaker 2: 01:11:06 
 It's better to share.

Speaker 4: 01:11:08 
 But that means this product catalog is only for some skus La.  Not everything,.

Speaker 2: 01:11:13 
 Not the whole sku.  It's just some I have a stock, some I have stock.

Speaker 4: 01:11:21 
 So then what I think we need from you is the.

Speaker 2: 01:11:23 
 What is about the sku?  We have a different part of talk, different country, different brand.  There's three different types.  So it's all possible to put all the skill together.  It's only put those who have a stock.

Speaker 4: 01:11:39 
 Okay, so I think this one what we need to follow up after this is actually to fix.  I think you sent us the different catalog that we generate and then we let us let's discuss and then see how to do it for you.

Speaker 2: 01:11:51 
 What do you mean by you need?

Speaker 4: 01:11:52 
 Because you have a few types because let's say 1000 SKU.  Impossible to put 1000 SKU.  So probably you have catalog number one which is 10 SKU.  Number two which is 20 here.  And then number three is this one.  So we need to see how many times.  Because this one need to be fixed.  So every time you generate everything, I.

Speaker 2: 01:12:10 
 Just put in one picture.

Speaker 4: 01:12:12 
 So we want to understand like what.  What do you mean by that?  Like how many sku is in one picture.  And then like this sku is which photo?  Because.

Speaker 1: 01:12:22 
 Sample.

Speaker 4: 01:12:23 
 So.  So also you share us all your samples.  So then we roughly discuss them.  We then we can ask you more specific question.  Okay, so this one.  The main purpose is actually to send to customer to update them the current price.

Speaker 2: 01:12:36 
 Actually those are.  You some new customer.  Normally for existing customer who not active in the business already.  And also send to a new customer.

Speaker 1: 01:12:56 
 Is it like one catalog applied to all customers?

Speaker 2: 01:12:59 
 Well, some customers are always specific in price.  They are sensitive in price.  When the market price they get different price they will take for other one.  So we need to why we need to do this step?  Because we need to tell them we are also active.  You not only ask me, they only say.  People will say.  People always send me the present.  You never send me one.  Ask you all.  You also send me.  I need to be like.  I also have this store.  I also have this brand.  Competitor is sent by.  I think every two or three hours.  Like this one.  I mean the price, same price.  They will say that.  Oh, And send the price.

Speaker 4: 01:14:31 
 This one is a shared group with the check.

Speaker 2: 01:14:35 
 We also check.  But our check group just pass you when you pay.  And then after.  No more.

Speaker 4: 01:14:57 
 Like the whole entire inventory.

Speaker 2: 01:14:59 
 We just.  We never send the project.  They just send more send bill.

Speaker 4: 01:15:07 
 This one is with customer one.

Speaker 2: 01:15:09 
 All customer have one.  And it's a better.  It's a better way.  I know.  I don't know.  I mean how.  How your how.  How the WhatsApp.  I mean how me I can work.  I have certain type of customer demand.  So sometimes I send a new price they will come back on.  So like hostage like long time.  Long time customer did not negative.  Some retail customer also not negative.  Actually the topics that have I think 300 customer or 400 customer last time we open account before.  So I hope that I can.  I mean everywhere I do a job over here, I just brush the message.  But in WhatsApp you will need to crush the version.  Some people that don't keep your contact.  You also cannot but only have one in WhatsApp, right?  Only can this way, right?  Maybe I do it like.

Speaker 4: 01:16:22 
 I just launched a new.

Speaker 2: 01:16:39 
 That's how I used to do that for a new product we send to category of the customer.

Speaker 4: 01:16:46 
 I think one more scope of the customization is the warehouse stock entry 1.  Because I saw what Jeremy shared.  You mentioned the warehouse.  So the.

Speaker 2: 01:16:58 
 Bu.

Speaker 4: 01:17:01 
 Basically you have a.  So how this work?  Oh yeah.  Because you need to update the price inside Maya so that you can enforce this thing.  So what you will have is like an Excel template so you can set which SKU price change.  Then you update it.  You just upload back to Maya.  Then they will set all the prices inside.  Understand?  But this one normally when price change is hundreds of sku or like 10:20 sku.  Normally 10, 20.

Speaker 2: 01:17:29 
 No, 10 are only.  I think 30.

Speaker 4: 01:17:31 
 30 Within 30.  Okay.

Speaker 2: 01:17:35 
 Some customer they also you could sell.  I don't know what.

Speaker 4: 01:17:41 
 Okay, okay.  So then.

Speaker 2: 01:17:45 
 But you cannot do.  I mean you cannot send the information a good way.

Speaker 4: 01:17:53 
 This one you need to manually send.

Speaker 2: 01:17:54 
 Because there's a problem Sometimes admin do not understand you have updated the price.  That's why at the end you also need to manually do.  Because you need to sell in the group.  Sometimes I thought oh, this customer two months didn't buy it.  But actually I have sent the price only actually him to come back.  You can.  You don't have any function like I can send.

Speaker 4: 01:18:22 
 Because this one containers call the WhatsApp blasting.  So the problem with WhatsApp blasting is that it will cause your WhatsApp number to be bad.  So that's the issue.  So it's not a Stable feature in WhatsApp.  People will sell a solution, but it will cost your WhatsApp to kind of ban.

Speaker 2: 01:18:40 
 Okay, I think they are send manually.

Speaker 4: 01:18:41 
 One it's good manual send better because then it won't detect as bottom.  Currently it's a limitation.

Speaker 2: 01:18:54 
 I also cannot categorize in.  I mean WhatsApp office wholesale business cannot categorize WhatsApp business.

Speaker 4: 01:19:02 
 You can put a label.  So the another part of the customization is the warehouse stock entry.  Because you mentioned that there's an issue with the stock count inside SQL not accurate.  So sometimes you cannot create business order and all this.  Right.  So there was an idea of the feature we upload the GRM and all this.  But I think when I when we saw this.  This feature, I think the main problem is it's not a system problem.  Because SQL, you know, I think we want to understand actually what is the root cause of the pain point here.  Like.

Speaker 2: 01:19:59 
 33.9 Can type 33.6 33.9 can write 32, 39.9 this one.  Right.  They're picking.  Picking the product 26.6 maybe they sold only 29.6 and the product Sometime we pick one here like belly or outer belly but they take a hand to be okay.  I see.  So this is the actually where.  How is this problem?

Speaker 4: 01:20:39 
 This one is more like.  I think this one like what.

Speaker 2: 01:20:47 
 What do you.  What's.  What's your.  What's your customization of the warehouse?  If you actually want to.  Want to present.

Speaker 4: 01:20:53 
 No, actually because in the proposal is just a problem statement.

Speaker 2: 01:20:58 
 So.

Speaker 4: 01:20:58 
 So that's why I want to understand.  In my experience there's few ways to solve these issues.  Right.  Because this particular problem that you just described is a data actually issue actually how.

Speaker 2: 01:21:09 
 I mean in future how.  How you can cooperate with your warehouse management.  Because I saw some corporate.  They actually b.  Also they have a Baku.

Speaker 4: 01:21:18 
 Yes.

Speaker 2: 01:21:19 
 And then the tap box also called a QR code So when they are packing they are actually scan the QR and then they will automatically upload to the system.  So they will know.  I mean from the packingist they also will be.

Speaker 4: 01:21:35 
 This one is called wms but this one say the cost is quite different level of cost.  Yeah, it's quite an expensive thing.

Speaker 2: 01:21:44 
 So how much are roughing?

Speaker 4: 01:21:47 
 Last time I worked in a glow factory normally one project is about 1 million or 1 million just to scan.

Speaker 2: 01:21:55 
 The bar the whole thing Automated.  Warehouse.

Speaker 4: 01:22:11 
 Then can look into another phase of.

Speaker 2: 01:22:32 
 I think still got this thing happening.

Speaker 4: 01:22:38 
 I think this one like actually got few degrees.  WMS is like the most advanced one Another way is you find in between so that means.  Because sometimes the.  The.  What is this the warehouse user.  Yes, still manual but how to make semi auto.  How to make semi auto that one not cheaper.  Sometimes you buy a automated weighing scale connecting the SQL like a you know, like POS system something like that.  But there is a weighing scale version so lower investment cost.  But semi auto.  But this one need to explore and experiment a bit.  So it's a lower.

Speaker 2: 01:23:29 
 I think there's more.  I mean the people of this human era will be less or more still got.  Right?

Speaker 4: 01:23:37 
 It's not 100% still got.  But why it can be so accurate is because it makes the system more rigid.  Because now I think your current process is a bit flexible.  So that's why the error coming.  But when you incorporate this sort of system you're.  Your process become very rigid.  Then your people need to follow SOP to do something.  That's why it's.  Yeah, yeah.

Speaker 2: 01:24:03 
 What they want the BMS so expensive cost 1 million not auto chamber.  I mean just scan the barcode and the QR code.

Speaker 4: 01:24:19 
 Warehouse automated wrapping can actually work on there.

Speaker 2: 01:24:22 
 I mean we can for a direction of working on there.  Because we want to make it in 1 million of just a system in the coming future.  I think not possible if.  Let's say that we can scan the.  Maybe product barcode or something Product barcode like when we are not the container we have 1200.  So every time.  I saw the scan back.  But it's not cheap.  Although I remember the machine but at the end they also didn't use.  I didn't ask my friend why and then they also didn't use because why they didn't use because their warehouse is not.  I mean this.  This payload is looking up.  They cannot follow it when they.  When the stock is coming up they not follow this pattern.  Actually put what kind of spot I can just simply put slip in all the small.

Speaker 4: 01:25:43 
 So you scan the bucket inside something also.

Speaker 2: 01:25:46 
 Yeah yeah.  That's why at the end my friend also didn't use the Sparkle machine.  Actually the machine carry on have to forward SOP.  When you ask me to do a QR code you also call for a step or so you need to print the character and step one stick on there.  And then you also need to scan the.  He tried to make some idea how in Chico waste.  And also I think the main part.

Speaker 4: 01:26:35 
 About this automation is not that there isn't a lack.  It's a lack of solution but lack.

Speaker 1: 01:26:40 
 Of.

Speaker 4: 01:26:42 
 Practice or lack of following the sop.  So I think a lot of you.

Speaker 2: 01:26:49 
 Ask them to follow the scan the gap.  I think it's okay one.

Speaker 4: 01:26:53 
 Yeah.  I mean like that's.  That's.

Speaker 2: 01:26:55 
 But how it works I don't know.  I just see some people can actually like in China as well.  They even loading to the warehouse.  Although people.  Just take from the lobby look through the platform.  The platform will fold it.

Speaker 4: 01:27:16 
 Okay so that means in terms of this warehouse actually really acknowledge the problem.  But there isn't really the main part because imagine it's a human error.  So I think there isn't really a direct feature for this.  For this solution currently yeah but we know the remaining three and the details about those.  So then another part about the onboarding to Maya is that aside from the onboarding system there's actually four things that we need from micro food sites to prepare so that we can set up your buyer.  Firstly, it's a company phone number.

Speaker 2: 01:27:56 
 Secondly is phone number in the landline or SIM card.

Speaker 4: 01:28:04 
 The second SIM card phone number For Maya, because it's going to be on WhatsApp.  So that's why I need to phone number error.  New number, completely new number securely for your people.  For inside internally, this number will be.

Speaker 2: 01:28:16 
 You need a cell phone or anything?

Speaker 4: 01:28:19 
 No, no requirement left.  So as long as you got a spare C card, you're not using one, then you can reuse that one.

Speaker 2: 01:28:25 
 Is it a new phone?

Speaker 4: 01:28:28 
 You just need the phone when you're activating the WhatsApp after that.  So the second one is actually the WhatsApp business account.  So we need to have a meta account and then tie the WhatsApp business to that.

Speaker 2: 01:29:03 
 Business account.

Speaker 4: 01:29:06 
 So we need open AI ll account.  There's an API key one.  All we need is that API key.  But you don't think you subscribe, right?  Or then you open one under company and then you get the API key and you share with us.  So our Maya will use that because it's a separate platform than ChatGPT.  You want an API token.  Right.  Also under the chat GPT account you go to your link over there.  Yeah.  So we will use your API key for the my for micro.  And the third one is actually an AWS account because for us, Maya AWS first.

Speaker 2: 01:29:56 
 What?

Speaker 4: 01:29:56 
 AWS is Amazon web service.  So it's for hosting Maya for the server.  Maya server will sit inside this account.  So.

Speaker 2: 01:30:06 
 So this Sydney number to open a AWS account.

Speaker 4: 01:30:11 
 Yeah, you use your company email, open AWS account.  The main thing you need to set up there is the billing part.  Then after that you give us access to that account.  Then we will deploy Maya in to AWS account for you already.  So I know it's all in the top.  Yeah.  Then I think after this meeting Gareth will.  Will share with you how to.  How to do these four things.  We will back you get.  Get a 30 minute call, then we sort out these four things.  Yeah.  Okay.  So I think the major stuff is out of the way in terms of the questions in the question.

Speaker 3: 01:30:50 
 Okay.

Speaker 1: 01:30:56 
 Okay, First of all, we only have one company, right?  I mean one entity, right?

Speaker 2: 01:31:06 
 Oh yeah.

Speaker 1: 01:31:07 
 Okay.

Speaker 2: 01:31:07 
 The most communicated one is this one.  I have other company also.  But you just do import export exam.  It's very clean, clear cutting.

Speaker 1: 01:31:20 
 Okay, so currently how many people are usually using if.  Let's say we are going to have Maya.

Speaker 2: 01:31:26 
 Right.

Speaker 1: 01:31:26 
 Who are the main people who is going to use like sales Mr. David and who else?  Warehouse person.

Speaker 4: 01:31:38 
 Sorry.

Speaker 3: 01:31:40 
 No, no.

Speaker 2: 01:31:58 
 I think seals of three also can also because they need to update customer.

Speaker 4: 01:32:06 
 So three sales.

Speaker 1: 01:32:09 
 Do you have any like manager who manage a Sales team or video.

Speaker 2: 01:32:15 
 So three sales plus four people.

Speaker 4: 01:32:19 
 Eight.  Three sales.

Speaker 2: 01:32:21 
 Three sales Me or Lee.  Then finance.  Finance Account.

Speaker 1: 01:32:31 
 Finance and account is two people, right?

Speaker 2: 01:32:33 
 I mean okay.

Speaker 4: 01:32:35 
 Warehouse all one person.

Speaker 3: 01:32:46 
 And how many warehouse do you have right now?

Speaker 2: 01:32:57 
 Fire Fire.

Speaker 4: 01:33:00 
 All in this area.

Speaker 2: 01:33:05 
 Three are here, another two other side.  So much.

Speaker 4: 01:33:13 
 On your.  Do you use SQL to manage battery?  That means all five way houses are in that area.  You know then the subway house all this.  So for your do you do like regular stock check?  Stock reconciliation.

Speaker 2: 01:33:42 
 That's one of the reasons once a year.

Speaker 4: 01:33:45 
 Once a year.  That's the reason why the stock count inside your SQL not great.

Speaker 2: 01:33:56 
 Quite okay one.  I mean there may be some below different maybe 10, 20.  20.

Speaker 4: 01:34:04 
 I see.  But it's not big enough that block the order like.

Speaker 1: 01:34:15 
 We only have measure ringgit right.  Currency or do we also deal with other foreign currency?

Speaker 4: 01:34:28 
 Do you have any manufacturing sort process like certain things you like when you sell it's finished good.  But when you check stock it's raw material.  Like that means it's different some different sk.

Speaker 2: 01:34:42 
 Yeah but it's under my processing company.  It's not.

Speaker 4: 01:34:47 
 It's not this company.  This company everything is finished good.

Speaker 2: 01:34:49 
 This company finish.  I sell my raw me to my processing company.  My processing company will come out of finish good to sell it to me.  Oh okay.

Speaker 4: 01:34:59 
 So I'll sell.

Speaker 3: 01:35:22 
 Okay.  So I remember you guys already shared your SQL your vendor, right?

Speaker 2: 01:35:29 
 Yeah.

Speaker 3: 01:35:29 
 Yeah.  So I think we will contact them.  Right?  Okay.  Basically we'll set up the meeting with them now.  So see and you request the documentation from their site and then that we can integrate to buyer.  Yeah.

Speaker 4: 01:35:47 
 So in terms of your order workflow, do you do any consignments type of orders you consign your stock yourself.  So in terms of credit limit and the term do you want it to block the order on term rich limit rich or.

Speaker 2: 01:36:20 
 Either or amount credit.

Speaker 1: 01:36:25 
 You mentioned we have finance and account, right?  What's their role?

Speaker 2: 01:36:29 
 What's their role?  Actually payroll.  Payroll.  But another company he do a called by us but for my inbox.

Speaker 4: 01:36:50 
 Company I see in his store alone.

Speaker 2: 01:36:54 
 Doing this thing and also check all the book here all the account.

Speaker 1: 01:37:00 
 And then for the account person is mainly.

Speaker 2: 01:37:03 
 Mainly actually just your invoice customer payment.

Speaker 1: 01:37:12 
 Which is also the one who doing.

Speaker 2: 01:37:13 
 The reconciliation is another consultant bank recogn.  Consultant consultant.

Speaker 4: 01:37:28 
 So then that means like in terms of when you do the AR feature right.  Who is the main user of this one?

Speaker 2: 01:37:34 
 Account Finance account.

Speaker 4: 01:37:39 
 So that means you will do the.  You will do the knockoff first but then the.

Speaker 2: 01:37:46 
 We'll do a long first then the consultant will come to tell you with the bank statement and the customer after what we know we did all something like all to make sure my work and the bank statement all is steady.  Oh okay.  All the.

Speaker 1: 01:41:53 
 It.

Speaker 4: 01:42:19 
 And.

Speaker 1: 01:43:13 
 Suppose.

Speaker 2: 01:43:36 
 Train.  It.

Speaker 4: 01:44:07 
 Sample current sample of the current picture somehow.  After.

Speaker 1: 01:46:12 
 Understand so confirm.

Speaker 2: 01:46:16 
 You say that you mention control right?  Yeah yeah.  I just want to know where for human area is actually a pinpoint yes it's correct But I also want to know a report like this product almost expired I need to do offer and this stock I just time we have a meeting some so I have import a container but within this 6 month only can sell 4 tons means one container is 78 tons I only can sell 4 tons in this 6 month so I mean you have a.

Speaker 4: 01:46:54 
 I have a child currently your SQL you do not you don't have an aging report inventory aging report?

Speaker 2: 01:47:02 
 Yes I can print myself but you.

Speaker 4: 01:47:06 
 Want my notification Actually.

Speaker 2: 01:47:12 
 Yeah notification maybe like almost expire this stock still high aging like this usb wow almost a year never sell like just sell happens what should we do?  No sometimes we think we only can we only check really hard to sell maybe I just keep.  And I mean those picture is.  Request from my that.  Can warehouse update the.  Curtain damage.

Speaker 4: 01:48:36 
 Damage if curtain damage what they remove disposed to stop can.

Speaker 2: 01:48:42 
 The warehouse take the picture take the picture or update in the system just a data.

Speaker 4: 01:48:58 
 This one usually is tied to the.

Speaker 2: 01:49:00 
 Badge.

Speaker 4: 01:49:03 
 Do you maintain like this stock is this badge ID badge from.

Speaker 2: 01:49:08 
 We can do that actually if you have the system we can actually do that we can actually just update these batches this family because I come with a container but I should have a.

Speaker 4: 01:49:18 
 Batch one but now don't have like.

Speaker 2: 01:49:21 
 This we not practice only but if you want to do we can actually force it this way this batch is going to be I think.

Speaker 4: 01:49:31 
 So side we can support customers who consume batch but the main part is the human process it to practice first.

Speaker 2: 01:49:47 
 Because I just know I know this batch how many losses like how many like this carton problem sometimes become a.  This is me it's not a iron or something Some stock I bought they come up appearing yellow painting yellow maybe some plastic also.  At least oh wow.  I think with this supplier always for this kind of.  I mean I think with this supplier always got this kind of problem one how can okay I mean update to this one is actually or human destroyed over cam.

Speaker 4: 01:50:41 
 In the system is.

Speaker 2: 01:50:42 
 Like inbound QC or The six people they upload the customer from customer yellow radio it stopped green blah blah.  This can just upload this thing to the to which patch to stop the picture.  So at least we got a data to.

Speaker 4: 01:51:07 
 You can create a ticket issue ticket in Maya to track this thing.  Yeah, basically you can report an issue then in a way mayhem Just log in as an issue if you want to just a trail.  So yeah you can do that.

Speaker 2: 01:51:29 
 Warehouse or.  Take care of my vehicle or.  Okay, I think this manually.  It's not.  It's not buy.

Speaker 1: 01:52:36 
 Okay.

Speaker 4: 01:52:38 
 Are you from outside anything else to clarify?

Speaker 1: 01:52:43 
 I just want to confirm.  Right.  So basically we have a line that the sales team will do the convert the order into quick list first then only submit to Maya is it?  So that the moment that Maya receive it is already the confirmed weight final weight with everything already.  Okay then only it will create.  So do and invoice and push to SQL but all the customer list everything is managed in SQL is it?  Yes customer list SQ list.

Speaker 4: 01:53:17 
 Should be SQL item list inside only the pricing outside.

Speaker 2: 01:53:23 
 Right.

Speaker 4: 01:53:23 
 The service SKU price also do.  Do also in SK So whenever you.

Speaker 1: 01:53:31 
 Have new prices changes you also update.

Speaker 2: 01:53:33 
 SKU SQL Right now I'm not practicing this way.  I'm not doing this action but I know can do it in SQL but they know enforcement one there's no enforcement.  I mean SQL you set the price that would enforce one.  You get what I'm saying?  So that just will.  When you issue a invoice that appearing come on the price.  That's it.

Speaker 4: 01:53:55 
 Yeah.  So now this price information is in your computer outside the system or like.

Speaker 2: 01:54:03 
 Where what I want is it?

Speaker 4: 01:54:05 
 No, no.  Currently where is.

Speaker 2: 01:54:11 
 I'm not doing my bora say we.

Speaker 4: 01:54:15 
 Discuss new pricing ready.

Speaker 2: 01:54:16 
 Right.

Speaker 4: 01:54:16 
 So you just update to the GPD generate things at the customer.  That's what that's currently.

Speaker 1: 01:54:23 
 So there's no place to.

Speaker 2: 01:54:25 
 I'm not doing it in the SQL because there's no point for the reference place because we always keep changing the price.  So I need to edit again and again so stick my time and there's no point to do it because.  But if you say that your system can vary evolve I think it's a reason for me to do it inside my hand.

Speaker 4: 01:54:56 
 Then after that on my answer you just.

Speaker 1: 01:55:01 
 Say.

Speaker 2: 01:55:06 
 Fire.

Speaker 4: 01:55:56 
 If there is a mean person normally because the price list is usually a control point.  So normally only a few people can update this.  So when update them and force.

Speaker 2: 01:56:06 
 I mean in the fixed price I can.  I can update.  I mean customer One actually update their price one.

Speaker 4: 01:56:13 
 Oh also the customer salesperson is the one who deal with the special pricing.

Speaker 2: 01:56:17 
 Yeah like I fix the price you cannot lower this price and then I set the price 16.  Let's say 16 maybe they have a.

Speaker 4: 01:56:25 
 Deal 18 so they update themselves but the global one.

Speaker 1: 01:56:49 
 Fix.

Speaker 4: 01:57:08 
 Okay so this one currently still follow.  We still need to check within because it's one that is not.  It's a question mark negotiation based on volume up.  So don't have a feature to enforce this thing.  Yeah so still need to have a check mark for volume based pricing.  Yeah but if.  Yeah but if with certain customer you already lock the price let's say contract or agreeable one then you and.

Speaker 1: 01:57:46 
 Century Group remain the single price.  Right.  Which is a standardized price for that sku.  Okay.  They didn't further hear that they didn't know that this is a good price.  They didn't notice.  So the will just follow the whole price.  But actually the new price is really up lately is just.  That's why they the invoice pricing and the pricing that they promise to the customer not the same.  But this is the standardized price.

Speaker 4: 01:59:19 
 So this how because now to create a invoice only the admin actually in this case now because sales user you can directly say oh make sure issue invoice to this customer for this price.  I mean just sales user cannot approve the invoice because I didn't drop here.  But sales user can create the invoice that will keep this price or you can add a remark that this for this Item price between 3 million.  So when admin create does invoke create the invoice they can see Mark this is the price update on the sales order to be 23 you get ready so when create automatically 23 they don't need to manually data entry again.

Speaker 1: 02:00:39 
 Tell me what your quite involved one.  You mentioned.  You mentioned we got wholesale and retail right.  Is there any different treatment between these two customer group?

Speaker 2: 02:01:18 
 Sorry quantity.

Speaker 1: 02:01:19 
 Oh just quantity different only.  Okay.

Speaker 4: 02:01:23 
 By this one the sales user will know how to deal with it.  The usual taking terms for your customer is a 30 basic 60 days.

Speaker 2: 02:01:32 
 That's the usual.  Only we most our customer they are one invoice.

Speaker 4: 02:01:45 
 One invoice.

Speaker 2: 02:01:46 
 Right.  I deliver this good.  Then next order they have to pay the last invoice.

Speaker 1: 02:01:54 
 The policy is they have to pay everything first because before they can have a new one.

Speaker 2: 02:01:59 
 This.  This order I deliver they haven't make.

Speaker 4: 02:02:02 
 The payment but they want to place.

Speaker 2: 02:02:04 
 Another order they have to pay the last.

Speaker 1: 02:02:09 
 Okay.

Speaker 2: 02:02:10 
 Most Customer.  We are actually how we control that we based on their all order.

Speaker 4: 02:02:29 
 Pattern.

Speaker 2: 02:02:30 
 Like let's say.  5,000.  So we set the cafeteria limit 5,000 every week.  The order next order.

Speaker 4: 02:02:49 
 Set limit.

Speaker 2: 02:02:58 
 So it's dependent is actually not.  Some they actually paper wait.  Some actually pay 45 days.  Some in 30 days, some in two weeks.  As not the most effective way is this like this.  So we actually.  How we.  How we actually alert of this is we set the customer credit.  So how boys arrange their order.

Speaker 4: 02:03:32 
 In.

Speaker 2: 02:03:32 
 The next Normally they are already buying.  Do you have a function of issue of the former invoice?

Speaker 4: 02:03:50 
 So basically when we create a sales order.  Sales order is somewhat like.

Speaker 2: 02:04:10 
 Order.  We receive a sales order, we issue them a sales order.  Then I get a 30% deposit.  But this payment have not off to the this.  Or sales order is a pro forma invoicoma invoice.

Speaker 4: 02:04:44 
 The main reason they did it is so that certain company financier want to see something that got the word invoice.

Speaker 2: 02:04:51 
 So that they can.

Speaker 4: 02:04:57 
 But it's not proper invoice.

Speaker 1: 02:05:14 
 So the AR process would be customer make the payment sent to the salesperson.  Right.

Speaker 2: 02:05:22 
 Send the 6% or customer group most.

Speaker 1: 02:05:31 
 Okay.  And then the next person who going to process that is the account person.  Right.  Account will take that famously compare with the bank statement and then confirm we receive the amount.  Then compare with the invoice.  Okay.  Yeah.  If okay.  Then knock off the invoice.  And that's the end point.  Right.

Speaker 2: 02:05:51 
 Okay.

Speaker 3: 02:05:55 
 Another question is right now normally your sales people will manage their own customer, right?  So do other sales people can check the other sales people customer?

Speaker 2: 02:06:08 
 No, no.  Normally they have their own good one.  Yeah.

Speaker 4: 02:06:28 
 So everyone will have their own customer that only they can see.

Speaker 1: 02:06:40 
 We only check predictably.  Like do we also check like any overdue.

Speaker 2: 02:06:49 
 Less overdue date?  Because we not much of.  We know much of.  We give them a long term.  We not much give their leave for you this year.

Speaker 4: 02:07:02 
 Okay.

Speaker 1: 02:07:05 
 Or do we have like.  Do you.  Do you need any notification like notifying the sales or notifying the finance or anyone to change the payments.  Who would be the person like seals or finance.  Inform all of them.

Speaker 2: 02:07:29 
 Account is because they are usually.  So sales need to chase the money.  So the finance will be as petitioner.  Then finally the boss.  I don't know what I do.  I need to make money.  I don't know.  I know not more money in the.

Speaker 4: 02:07:47 
 Bank there I can tell you.  Side.

Speaker 1: 02:07:59 
 Should be okay.  Anything else for yourself?

Speaker 2: 02:08:04 
 Okay.

Speaker 3: 02:08:07 
 Normally how frequent you add the new item and how many average Your item, total item.  You have sku.  Yeah, adding.

Speaker 2: 02:08:21 
 Africa.

Speaker 4: 02:08:22 
 I think.

Speaker 2: 02:08:25 
 Few item in a year.  Oh, more than that.  If you want to ask the cash.  I mean sometimes you receive the cash Also any work from cash.  I mean any.  Because she refer because she get the cash from the driver.

Speaker 5: 02:08:46 
 Then I do the Excel form by myself just recording the record from who I get the payment all and then pay to reach invoice for our record.  L. Then only I see it in.

Speaker 2: 02:09:02 
 The customer payment and then we sign a thing.  I think she received the cash.

Speaker 4: 02:09:08 
 I think the workflow is still kind of the same and then it will go to as well.

Speaker 2: 02:09:16 
 Okay.

Speaker 4: 02:09:20 
 Anyway, yeah, so still kind of the same.  Because she has Excel to allocate money.  So instead of doing it on Excel, you can do it in the Bina's interface.

Speaker 5: 02:09:34 
 This is the one example that show I take the money from so driver resign here.  So I I already received the money.

Speaker 4: 02:09:57 
 So this one still.  You now wear like Excel, right?  So you can do it my because after you do Excel so you need to data entry.

Speaker 5: 02:10:11 
 I will do like this.

Speaker 1: 02:10:13 
 Then.

Speaker 4: 02:10:33 
 I think.  That.  I like to jump in.

Speaker 2: 02:11:27 
 You can see the Perry.

Speaker 4: 02:11:35 
 No, I think from outside we are good.  Anything from micro food.

Speaker 1: 02:11:59 
 But one thing right just now we're talking about the price part.  But then the order is only being passed to Buya after the fitness is out.  So would the price part still matter for us?

Speaker 4: 02:12:15 
 No, because the.

Speaker 1: 02:12:17 
 Because the pick list is already out so we cannot export.  Meaning that the process should be.  Sorry, the process should be.  They send in the order you become a draft.  Then only they pick this and then confirm the quantity and also the price everything.

Speaker 4: 02:13:04 
 I think for today this is our objectives.  So what we do is we'll send a meeting minute of into the group and then what are the action points for both sides?  On our side, what's still pending is meeting up the SQL vendor because we need to get the credentials with them set up like the connection over there.  And after that we also have one more session with Mr. D.

Speaker 2: 02:13:35 
 What's the next step?  I mean the ancestor you asked me the way to who will manage your.

Speaker 4: 02:13:42 
 Facebook account that way is to set up the period.  So once we have this the SQL and then we figure out how to.  Then we have this four things we have for you to start pay to play with the cycle Maya.  So we can test first before we go live.  Yeah, so.  So once these few things are out so our approach will be we will deploy you the core one first, the customization one.  We will have separately on when those things oh yeah.

Speaker 1: 02:14:20 
 We need to sort out the pig list.

Speaker 4: 02:14:29 
 But I'm quite clear.

Speaker 3: 02:14:33 
 I remember you guys mentioned you want go live by this end of this month right for.

Speaker 4: 02:14:38 
 Sales part right sales part so we need to remove all this yeah.  So maybe on the set time like next week like.

Speaker 2: 02:15:03 
 Next to.  Do you Prefer.

Speaker 4: 02:15:15 
 Because the 14 6.  It.  Yeah.

Speaker 3: 02:16:50 
 For call feature.

Speaker 4: 02:16:54 
 Okay.

Speaker 3: 02:17:44 
 Yeah I will send a calendar to remind yeah.

Speaker 2: 02:17:58 
 So training one we propose the time.

Speaker 4: 02:18:06 
 Okay so this one the main thing that we are not sure I mean because you don't know when you meeting the SP on that and how fast we can set up integration so that's the thing that's uncertain as well yeah.

Speaker 2: 02:18:36 
 No need to secure if let's say next Monday I mean no need to wait I do 15.  It.


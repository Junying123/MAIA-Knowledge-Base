Ivan Chiang: 00:11 
 Okay, morning guys.  Let's do stand up.  Everyone here you know?

Ivan Chiang: 00:19 
 Yep.

Ivan Chiang: 00:21 
 Everyone working from home is it?

Frozen Meat: 00:25 
 I'm working from.

Ivan Chiang: 00:33 
 Okay, come let's start with our client.  Any client movement on the client account?

Ivan Chiang: 00:47 
 Yesterday I called so recently they come busy.  They doing the hot updating.  So Thursday they will continue to test their UAT and I asked for their go live date and I say weekend.  They say Friday they can get to.

Ivan Chiang: 01:08 
 Me the answer Friday meet the hook.  Sorry, Friday they can do what Give.

Ivan Chiang: 01:14 
 Me the go live data or this Friday.  Okay.  I told them the DN to pick this is ready for them to test.

Ivan Chiang: 01:27 
 Yeah, I see.

Ivan Chiang: 01:28 
 Okay, next.  I say baby, I really set up the robot with the mandos and basically I also add the meat inside the wood.  Okay so right now they really provide their guys.  So I think already Javin shared a guide for in the group.  Basically we want to set the demo account.  So basically one test whether there's using the demo account to test whether is it work or not and then is it work?  We will email them and then to schedule appointment for them to like get all the credential from the client side.

Bryan Tew: 02:20 
 So.

Ivan Chiang: 02:20 
 So we need a demo account for SQL first.

Ivan Chiang: 02:22 
 Yeah.

Ivan Chiang: 02:23 
 Then integrate to that one.

Ivan Chiang: 02:25 
 If work ready we integrate.

Ivan Chiang: 02:36 
 Why need the remove country Just connect to the live app.

Ivan Chiang: 02:41 
 The live one but we want to test the posting and whatnot the live one we already test the setup get new.

Ivan Chiang: 02:54 
 Don't we have this with Magasins SQL.

Ivan Chiang: 03:00 
 Magasian SQL is actually the same instance a given demo PC is their data.  It's McKesson's data.

Ivan Chiang: 03:08 
 Yeah, but you already have one sandbox so when you're doing the two async spine you do on the sandbox only ma.

Ivan Chiang: 03:15 
 But, but mechan1 is on.

Ivan Chiang: 03:19 
 Oh it's a different it's SQL Cloud.

Ivan Chiang: 03:21 
 the one we use SDK live we have our own middleware for me.

Ivan Chiang: 03:26 
 So that means this macro foot one is Cloud SQL Cloud SQL Cloud.

Ivan Chiang: 03:30 
 Cloud Cloud can use SDK live to soak but then that means the integration is a little bit different.  It's not a huge difference it's just that we need to collect that means we don't need the middleware Again the middleware is to expose the on premise SQL.  Yeah this one is directly to through their servers.

Ivan Chiang: 03:56 
 There's some work to incur here one day.

Ivan Chiang: 04:00 
 Work.

Ivan Chiang: 04:02 
 Okay.

Ivan Chiang: 04:02 
 It's very fast.

Ivan Chiang: 04:04 
 But they say need to have a setup fee.

Ivan Chiang: 04:08 
 I asked him if he said how.

Bryan Tew: 04:09 
 Much.

Ivan Chiang: 04:12 
 I asked him yesterday already.

Ivan Chiang: 04:15 
 Okay.

Ivan Chiang: 04:16 
 So then that means this point here because microphone is on SQL cloud.  So we need to modify the adapter to directly connect to SQL clock.

Ivan Chiang: 04:26 
 You put two days.

Ivan Chiang: 04:28 
 You put two days.  Actually the effort might be one day, but I need to test.

Ivan Chiang: 04:32 
 Okay.

Ivan Chiang: 04:35 
 Okay.

Ivan Chiang: 04:36 
 So besides micro food, another gap is.

Ivan Chiang: 04:39 
 I noticed their sku, they also have their Chinese name.

Ivan Chiang: 04:44 
 SKU got Chinese name.

Ivan Chiang: 04:45 
 So basically the PDF.  Yeah, PDF also need to make sure generate the Chinese font.

Ivan Chiang: 04:59 
 But how they ask?

Ivan Chiang: 05:01 
 How do they ask?

Ivan Chiang: 05:03 
 Do they ask in English or they ask in Chinese?

Ivan Chiang: 05:07 
 What kind of ask?

Ivan Chiang: 05:08 
 When they search for stuff, they key in the Chinese words as well.

Ivan Chiang: 05:12 
 That one haven't.  Yeah, yeah.  Their invoice, their document.

Ivan Chiang: 05:26 
 But I think this one we need to hack it.  That means when we wreck it, we need to wreck into dual language.

Ivan Chiang: 05:37 
 So that means in the system itself is Chinese name.  Yeah, it has both names actually.  So you have the English and Chinese name together.

Ivan Chiang: 05:50 
 But say that right.  In this case it's safer to actually do both in one in.  You can try one chunk first.  That means the same chunk just put by Ningbo.  Shoot.

Ivan Chiang: 06:01 
 What one?

Ivan Chiang: 06:07 
 It's just that you cannot rely on translation.  Yeah, you just do a direct search.

Ivan Chiang: 06:13 
 Okay.  For macrophores and all the documents we need from them we got already.

Ivan Chiang: 06:20 
 Yeah, but I haven't compiled all to folder.

Ivan Chiang: 06:25 
 Did we get the price list for their thing to generate the pork the catalog one?  Because this one here price this.  Yeah, because here he will send something into his GPT to generate the catalog.  So you need to get this thing.  No, he has an Excel or something of the prices that needs to be this thing.

Ivan Chiang: 06:47 
 That means from his source path to this one.

Ivan Chiang: 06:49 
 Yeah, and we need to know what those SKUs are in the system.  So this is the part that maybe he does not have.  You need to tell him what to do.

Ivan Chiang: 06:58 
 Oh, it's a customer pricing, right?

Ivan Chiang: 07:01 
 No, it's SKU pricing to generate this product catalog.  So right now he only sent two samples.  So that he only sent one sample.  Actually it's the same one for both.  So this is the price, the.  The catalog price.  So ask him got any more or not different type one or only got one.

Ivan Chiang: 07:19 
 They have like different category one seafood.

Ivan Chiang: 07:23 
 Yeah, whatever.  Cuz this one is just the pork cuts essentially.

Ivan Chiang: 07:28 
 It might be.  It might mean we need to filter how to filter by that product that he wants to put into this.  Yeah, and it's good to get his GPT form also.  Actually just.

Ivan Chiang: 07:40 
 Just get the.

Ivan Chiang: 07:41 
 That he used to generate.  It's the whole process.

Ivan Chiang: 07:45 
 So Action point here for this product catalog generation.  Ask him to share his GPT chat link.  Then secondly is send the file that he dumped in how he filtered his SKUs and how many of these things, how many catalog variants are there?  Okay, three things.  So Gareth, the GPT chat link, DBT chat link, how many product catalog variants are there and then the prices of the file for the pricing.  So what most likely he do not have is that because he probably has an Excel for like let's say this price.  But what we need is this card tied to which SKU mapping in SQL.  So example probably the file that he has now is like pork belly card.  Pork belly card 22 ringgit per kg but what is missing is this pork belly cut is which SKU in SQL refer which.  Yeah, refer to which sku.  Maybe one or many item in SQL.  So his file don't have the code.  So you need to ask him to also populate the code.

Ivan Chiang: 09:07 
 The SKU code?

Ivan Chiang: 09:09 
 Yeah, the SKU code for the price.  So this is the thing that we need for this particular thing, which one?  SQL.  Yeah.  Okay, so yeah I, I got my firefly inside here.  So later I will just send but good to have your copy of your to DOS as well.

Ivan Chiang: 09:29 
 So, so it's three GPD shelling how many variants of this brochure it has for the items selection that goes into the how does it map it back to the IT SQL sq.

Ivan Chiang: 09:42 
 Yeah, and also the price list.  But where?  Yeah, no, because he does not maintain his price list in SQL.  His price list is a separate file.

Ivan Chiang: 09:52 
 Oh, it's not.

Ivan Chiang: 09:52 
 Yeah, his price is not in SQL.  Okay, yeah.

Ivan Chiang: 09:56 
 All right.

Ivan Chiang: 09:58 
 Okay, next, so next.

Ivan Chiang: 10:02 
 Day we complete the it's a session with Azip, Amir and Brian.  So the remaining item have is on Brian's side.

Ivan Chiang: 10:19 
 So fix Guru fixes la.

Ivan Chiang: 10:21 
 Yeah, mainly yeah.  Nothing is a PDF pending from Rahim.  So basically today he was ready for me to test the quotation and then as well because right now PDF we already get their custom template but need to make sure the PDF populate their data.  Fixed Guru data.

Ivan Chiang: 10:42 
 Okay, so for this one for fixed Guru, right.  Yesterday I asked Yvonne in the group what's the use case for shelf.  So because yesterday AZEEP raised this up when we pull this shelf information from auto count, how it's configured, it's tied to the UoM.  So basically in one SKU they will have a lot of random UMS.  Like let's say the is pieces one but they will have another which is 22 pieces then this.  When these 22 pieces is selected, the shelf is tied to this thing.  So it doesn't make sense on different.

Ivan Chiang: 11:19 
 Shelves because it might be in the box.

Ivan Chiang: 11:21 
 Exactly.  Yeah, something like that.  So.  So most likely this is like non standard practice.  So the right way to do this is actually on the child warehouse side.  So this one clearly the vendor has customized it in some hacky way that it works for them.  So this thing is for us is out of scope for them.  We will not do it for them.

Ivan Chiang: 11:45 
 Actually should because if you do this hack right it doesn't make sense.  It's only for them.

Ivan Chiang: 11:54 
 Yeah.  So yeah this is what we need to communicate.  We will not be doing this thing for these reasons because for us our integration should be to the best case practice the best practices of how we do it.  But because we saw this thing is non standard.  So this thing will not be supported inside Maya.

Ivan Chiang: 12:15 
 But if let's say we go full fledged inventory.  I think this.

Ivan Chiang: 12:19 
 No because now this the way that they are supposed to do it is that use these shelves as a sub warehouse inside their warehouse, which they did not do.

Ivan Chiang: 12:30 
 So how does that manage store?

Ivan Chiang: 12:34 
 They just store the code on the basically in the UoM they create a new user defined field for shelf and then they have certain.  When this item is added to the thing the shelf auto populate into the thing.  Yeah, into a DN or whatever.  So it's a hack.  Yeah, correct.  So so this is why we will not do it.  Yeah.  So we will need to.  Yeah, we will need to communicate to that to her in the group.  Okay.  So later every morning I'll share you all the firefly recording to your email.  So you can just pull from the transcale whatever we said here.  Yeah, I got this one.  Another one is that they got a few funny things on.  Right.  Fixguru.  What is another thing that we are doing for them?  Volumetric.  That one.  Okay.

Ivan Chiang: 13:28 
 Delivery method as SKU.

Ivan Chiang: 13:30 
 Delivery method as SKU.  Also this one is out of our scope.  They will need to manually edit.  Yeah.  So these are the two things we need to communicate clearly the method.

Frozen Meat: 13:41 
 I think what they discussed yesterday is just gonna.  They will treat it as an item skill.  They need to specifically say it's a Lalamu item.  Then it will go in.  Then they adjust the price themselves.  Yeah.

Iman: 13:56 
 But yesterday when we tested on Chatbot, right.  If you put just Vella move then it would treat it as a fulfillment.  You need to add lalamuf and also mention the one quantity.  Then we Treat it as sku.

Ivan Chiang: 14:09 
 Okay, so this one I think is fine tuning the query.  Users say like, okay.  I'm like, okay, fulfillment is another move.  I want to add a delivery charge.  So if I say add delivery charge, it should be able to find this thing.

Frozen Meat: 14:27 
 But Ivan, I think this one shouldn't be treated as I want to edit the recharge.  I told Gareth to educate the client to say, you want to add lalamove as item, then what's the price?  Then add it into that.  Because in their auto count they also do that way.

Ivan Chiang: 14:44 
 Okay, so for this one, right, the part that conflicts is on our side, we got these charges, right?  Yeah, yeah.  So is there a way where in this fixed guru instances or we basically do not have any charges?  Basically.  Now see the Kosong, the charge type table.  Yeah, no, basically there's no charges charge category because now we seeded into our site where we have a few standard charge types, right?  Like delivery charge, packing charge, whatever.  Right.  What if we clear that table, does this work?

Frozen Meat: 15:21 
 Because I don't think so.  Because even we clear that table, the chatbot already got that to add something into the chargers there.

Ivan Chiang: 15:30 
 No, because.  Because when we clear the table, if.

Ivan Chiang: 15:32 
 It's zero, then if you don't have value, then just put zero.

Ivan Chiang: 15:36 
 No, no, no.  What I'm saying is that now in our order part there, right, besides the items, there's one chargers section.  So right now this charger section is what you call this.  There is a few types of charges that can be added, right?  The delivery charges is one of those types of.  So what if for fixedguru we remove this thing not to change the API but just not seed the charge types into the db.  Will this remove that confusion?  So basically this may be a configuration point.  That's what I'm saying.  Yeah.  Gamin,.

Bryan Tew: 16:14 
 Can you hear me?

Ivan Chiang: 16:15 
 Yeah, I can.

Bryan Tew: 16:17 
 Yeah, Sorry to interrupt, but the chatbot is treating it as a fulfillment method, not charged.  So clearing the charge won't make any difference on.  Yeah, yeah, correct, right.  It's like the delivery up there on the finance is the top left one.  So what we tested yesterday was the user have to specify that, okay, this dollar move times one what price you want, then the bot can add.

Frozen Meat: 16:40 
 Really?

Ivan Chiang: 16:42 
 Oh yeah, no, but no, that's what I'm saying.  Like instead of them needing to say something very specific, like this lalamuf thing need to add something like because it's more natural, say, oh, delivery charge 10 ringgit.  So what I worry is.  Yeah, correct, delivery charge 10 ringgit.  They will go and Add into the charges instead of the actual sku.  So that's, that's why I'm, that's why I'm talking about that part there.

Ivan Chiang: 17:08 
 That's the cleaner way to move forward is on the customer copy at one parameter is that when they say D charges, it should route as an item or route as a D charges.

Ivan Chiang: 17:23 
 No, that's why it's a cd.  That's why if you clear the cedar.

Ivan Chiang: 17:27 
 I understand.  But if now you see duty charge, you put like 10 ringgit.  Right?

Frozen Meat: 17:33 
 Okay.

Ivan Chiang: 17:33 
 It will still add.  It will still try to add to the charge.  I mean, from the chatbot checkbox perspective.

Bryan Tew: 17:39 
 No, no, it won't add to the charge.  It will try to change the delivery method up there.

Ivan Chiang: 17:45 
 No, that one is for the previous query.  But I think you didn't test with this query where let's say I create this order.  Right.  Fulfillment method is lala move delivery charge for this is 10 ringgit.  Try this.  Oh yeah.  Because now what they're saying is that we got to educate the user to say specifically at lalamove delivery charge 10 ringgit.  Like that.  Yeah.  Then no, I just want to remove CIDR first.  We don't want to add the condition first.  I want to see if this works without the condition.  And there's no confusion here because it's just natural.  When I create order lalamove delivery charge is standing it rather than the user need to specifically type the.  Yeah.  Correct.  Yeah.  You know what I mean?  Yeah.  Yeah.  So actually Brian Gareth tried this way.  Correct.  Because for the users, we cannot ask them to follow a very restrictive way of prompting this thing.  Reliability 01.  Sure you can tell the user, but most likely they won't follow.  So we cannot control that.  So what we can control is this part here.  So we are shifting the control on our side that we make sure.  Okay.  We test this query.  If no confusion out of the box, fantastic.  But if still there's confusion, most likely it will go and confuse with the delivery charge.  What if we remove the seeder and then this thing goes away?  So you see, we have control over this thing.  So then the user can be free flow however they want to talk.  Also they can talk.  Okay.  Okay, so next, aside from fixed guru.  So what is the pending one from fixed guru?

Ivan Chiang: 19:40 
 The volume and then the PDF and the credit limit.

Ivan Chiang: 19:46 
 Volume, PDF credit limit.  Okay, so those three got solid ETAs ready.

Ivan Chiang: 19:53 
 For PDF.  I think it's today.  Maybe if Ken is like quotation as.

Ivan Chiang: 20:01 
 Sola from Raheem Quotation as so okay and then volume the front.

Ivan Chiang: 20:08 
 End need to add the fields and backend because back end we need complete this.

Ivan Chiang: 20:15 
 Okay.  And Chatbot so I think fix guru said one more thing is you may need to test the auto count two way sync because I saw Azeep already sent some what is this?  Videos on how it works.

Ivan Chiang: 20:35 
 That one is just standalone.  We are just testing money now.

Ivan Chiang: 20:39 
 Yeah.  So then by when can we sort that out?  By end of the week.  So our UAT with fixed guru set date ready?  Haven't set.

Ivan Chiang: 20:54 
 I said next Tuesday.

Ivan Chiang: 20:57 
 So next Tuesday.

Ivan Chiang: 21:00 
 I think yesterday Yvonne skipped my message.

Ivan Chiang: 21:03 
 So follow up then.  Okay, so now the target for fixguru is next Tuesday.  So this one, the two way sync I mean looks good la.  I mean from Azeep's demo.  Yes.  It's a bit buggy.  There's a bit of like.  Yeah Azeep maybe you can just quick update on that.  Like what's the gaps after you send that video.  As it.  Where's a zip?  Wait a.  Not here.

Frozen Meat: 21:32 
 Is he behind you guys?

Ivan Chiang: 21:33 
 It's not.  No, no, no.  Maybe he left.

Frozen Meat: 21:37 
 He got.  He got sent me.  He got sent me a gaps.  A list of gaps yesterday in the repo.  I will take a look on that also.

Ivan Chiang: 21:44 
 Yeah, because from his video I saw that the two way sync kind of works but not all the objects are properly synced back.  So like the contact when it comes back.  So like for example create an autocall already.  Then on our side the quotation is there but when I tried.  When Aseep tries to save the quotation it says the contact has no link id so that means it's kind of there.  But there are still some bugs on the different entities of an order like the contact, the shipping address, ID and all this.  So those okay, yeah.  From go and watch his video then you can see all these things.  Okay, yeah.

Frozen Meat: 22:28 
 For the two way thing I will look at his gap list and also deploy the instance in our site for the Maya sync spine.

Ivan Chiang: 22:38 
 So for this one instead of done on Friday can we target done today for fixguru then at least on Friday we actually do the test.  So we still have buffer of the weekend and Monday before the UAT on Tuesday for fixed guru.

Frozen Meat: 22:57 
 Yeah, I think I can let them test with the sandbox auto count first.

Ivan Chiang: 23:02 
 Yeah, let's test with the sandbox auto count make sure like the two way sync all working.  And Gadolf also make sure to watch Azip's video because that's how you will need to test it.

Frozen Meat: 23:13 
 And then I think something that product side Gareth, you need to pivot for.  You want them to do UAT is they test with the sandbox auto count instead of.  Because last time when we go to uat they keep on showing us their production auto count.

Ivan Chiang: 23:27 
 Right.

Frozen Meat: 23:30 
 When UAT we don't want to catch out their production auto count.  So we might need to pivot them to test on UAT auto count and our site.  But then you get what I mean.

Ivan Chiang: 23:40 
 Yeah, yeah.  They don't have a demo database.

Ivan Chiang: 23:43 
 Right?

Ivan Chiang: 23:49 
 Yeah.  Because the sandbox is just snapshot from some.  Some long time ago.

Ivan Chiang: 23:54 
 Yeah, yeah.

Frozen Meat: 23:57 
 It's still their data if I'm not wrong.

Ivan Chiang: 23:59 
 No, no, it's still very long.

Ivan Chiang: 24:01 
 No, I think then for that one maybe we will need to just think of a few test cases.  Basically clean up that data over there like customer credit limit.  Showcase that it's accurate both ways.  You know, you want to cause this demonstration of functionality.

Ivan Chiang: 24:17 
 Right.

Ivan Chiang: 24:18 
 So then if let's say you create like four or five invoices inside autocount side, then these four or five invoices also appear in Maya.  Then the credit limit also tells you.  Also because our two way sync is properly working.  Right?  Yeah, something like this.  And then for the two facing one, Jermaine, the cutoff date solo.  Because in this cut off date there will be certain states here to handle.  Right.  Are those properly thought out and tested?  Because let's say we go live.  So go live, there will be a go live date.  So this go live date will be the cutoff sync date.  So now I know we are syncing forward, but how are we doing this snapshot here?  Yeah, correct.  But like over here when we go live, it should do a snapshot of the invoices and all that of the previous date 1.  Because this one needs to be done by the sync spine.  You get what I mean?  Like when we go live, we connect this account.  Before we start syncing the first record, we need to take a snapshot of the customer balances this.  This thing.  Yeah, yeah.

Ivan Chiang: 25:31 
 Actually, no, actually based on just under the assumption that we actually move across everything.

Ivan Chiang: 25:39 
 Move across everything.

Ivan Chiang: 25:41 
 Because the snapshot way is unless you create top back to the one is the hip outside of the same spinal.  Because for all our arms how far you can use the et cetera.  Because what you want is that you want like let's say card cut off at this current like customers credit total invoice amount is X.  Total payment is X.  Correct.

Ivan Chiang: 26:04 
 Customer total invoice is X.  Total payment is X.

Ivan Chiang: 26:08 
 Directly change the current credit Stat there's no such Dr. No.

Ivan Chiang: 26:15 
 That's why you have to create a aggregated invoice up to this point of time.  Yeah, to create an invoice and the invoice cannot go into autocount so that one needs to be manually done.

Ivan Chiang: 26:27 
 but then we can just write a query to actually query everything out.  This one is part of the migration stack.  It's not within the six not part of sync spine it shouldn't between the or it can be just as quick if the six files is running out.

Ivan Chiang: 26:43 
 So that means we need something that blocks certain records from not syncing.  That means we need to have some way to block certain records from not syncing.  Yeah, yeah.  Because if you create this snapshot cannot go that one.  Part of this project.  Yeah okay.

Frozen Meat: 27:15 
 So.

Ivan Chiang: 27:15 
 So on sync's point there we need to have a way to label certain records to not sing to the third party channel Sir.  For this purpose.  Yeah, yeah.  Okay.  Okay.  Good.  Good.  Yeah okay.  Okay.  Clients next.  Nice work, Gareth.  Okay, What's the issue?

Ivan Chiang: 28:01 
 So contactless.  Every time I ask for subscription the price we're showing them is not the.

Ivan Chiang: 28:09 
 Same as the website price we're showing them.

Ivan Chiang: 28:12 
 Okay yeah so I think we should try to fix it Pointing the correct database but still the information is still but anyway because we're still showing the four plus one money subscription which is.  They don't do that anymore for now.  Okay so we need to make it same as the website so that's official.

Ivan Chiang: 28:36 
 Thing this one way on I Is it something on your list for the.

Frozen Meat: 28:42 
 Farm shop one I. I saw that Wei is helping Brandon already so I didn't work on it.  The one is the price variance is.

Ivan Chiang: 28:54 
 It.

Ivan Chiang: 28:56 
 Between the website and also the chat box?

Frozen Meat: 29:01 
 Because I couldn't hear so clearly their price in the woocommerce and in their.

Ivan Chiang: 29:07 
 Chatbot not just price and so product also is quite different from the chatbot and also the website I'm getting.

Ivan Chiang: 29:16 
 From the ERP endpoints.  So that means maybe the is still.

Ivan Chiang: 29:21 
 Already no basically w common site maybe we are not pulling the latest set of products or maybe certain products are already disabled and all that.  So it's not really showing on your website one but then because we have those are we dealing with that?

Frozen Meat: 29:38 
 So most likely last time was disabled the inactive one already.  I'll just double check that thing.

Ivan Chiang: 29:46 
 Yeah, but it should be automatically done.

Frozen Meat: 29:50 
 Yeah yeah it is automatically one when the WooCommerce detect is out of stock disabled then our site also disabled.

Ivan Chiang: 30:00 
 So let's Say we are doing, I think few points to check.  One is the current set of products inside our site and one in their WooCommerce dallies.  So if not telis then that's a problem.  Probably we are pulling from different places.  The website is pointing somewhere else and outside is syncing somewhere else.  But then if let's say both of it is the same then it's most likely with certain sync policy on.  Maybe certain updates were done on this database didn't pull in or certain products disabled or whatever.  So I think these are the few places to check.

Ivan Chiang: 30:41 
 Let's say that if they're pulling, we're pulling from the same database they are pulling from.  I think maybe they have their own filters to display in the website.

Ivan Chiang: 30:48 
 Yeah, something like that.  And that's what we also kind of need to know.

Frozen Meat: 30:53 
 I need to look into their woocommerce site also the one that they show to client.

Ivan Chiang: 30:57 
 Yeah but this one the impact is.

Ivan Chiang: 31:01 
 Only B2C but it's quite big.  Let's say if customer really buys something that's not in the website, right.  Then they're like what is this?  And then it could be like another headache.

Ivan Chiang: 31:13 
 Okay, so then this one is a bit more on the higher side really.  Okay, okay.

Ivan Chiang: 31:24 
 Magazine.  So magazine.  Yesterday I went to UAT with them.  It was.  I wouldn't say everything fast.  There are some few bugs that I already locked down.  A few blind spots that notice.  And also one thing also quite crucial, just summarize is C3, they want to do the C3 stuff as well.  Which previously we didn't do that.  But right now they want the C3 part.  How it works for them is like let's say customer, they buy from them, let's say they have a C3 exact shirt, everything you need.  Then after that they will in their SQL they have like a special, let's say milk powder.  Something like example milk powder.  If you got, if you've got this customer got C3 they use another SKU called milk powder.  They call on bracket and C3.  Yeah and this one they were tied to a batch number and then it will be allocated a certain quantity for that particular customer.

Ivan Chiang: 32:23 
 Okay.  What we will not do for them is batch quantity, chip tracking.  What we will do for them is the way that this happens where the.  Because they will have a duplicate two SKUs, right?  One is the text one and one is the tax free one.  So then when you add the C3 to cert to this thing, right.  It will automatically pick the C3 with the bracket with C3.  Right, right.  Basically same SKU but double one is without the C3 bracket.  One is with the C3 bracket.  How this works is that on their side the SQL the HS code must only sit on the C3 so then this automatically will work out of the box.  Really?  So this is the prerequisite for us no work to do one.

Ivan Chiang: 33:09 
 Oh it's not done.

Ivan Chiang: 33:10 
 It's done.  Ready one but it's a setup thing.  So these are.  You need to note what I.  What I'm saying.  This one that means on their C3 SKU the HS code must be only on that SKU and not the other one.

Ivan Chiang: 33:25 
 On the C3 one.

Ivan Chiang: 33:26 
 Yeah, on the C3 one then it will auto do this mapping.  If not they will still need to manually fix it because it's a configuration,.

Ivan Chiang: 33:36 
 We secure everything.

Ivan Chiang: 33:37 
 Yeah.  All right.  We need to make sure it's like that in the SQL.  Then we sync over.

Ivan Chiang: 33:43 
 Okay.

Ivan Chiang: 33:43 
 Yeah.

Ivan Chiang: 33:44 
 So one few things we is the stock count.  There are some notifications and alerts that we need to have also like lows, low stock.  That one we have.

Ivan Chiang: 33:56 
 Yeah.  The expiry stock one and low stock one.  I'm working on writing a brief.  There's one more.

Ivan Chiang: 34:06 
 Credit.

Ivan Chiang: 34:07 
 The credit limit one.  That one yesterday we got some box of solar.

Ivan Chiang: 34:12 
 Okay.

Ivan Chiang: 34:12 
 Yeah.  So even though like let's say with this customer already over the credit limit.

Bryan Tew: 34:19 
 Right.

Ivan Chiang: 34:19 
 And then this user, it's only just a normal sales user that will only create the.  The sales order, everything like that.  They are able to create the sales order and submit it.

Ivan Chiang: 34:33 
 Create the sales order and submit usually yeah.

Ivan Chiang: 34:38 
 Basically the credit limits are very 200% over.  Like 200 over.  I can still create orders for it.

Ivan Chiang: 34:46 
 That means the user account has a credit controller role.

Ivan Chiang: 34:52 
 The customer sentiment.

Ivan Chiang: 34:56 
 That's not the way.

Frozen Meat: 34:56 
 Yeah.

Ivan Chiang: 34:57 
 That means it's not enforcing the check.  That means the credit limit there.  Correct.  So it's just probably check.  Let's check that first and try with the customer without the bypass on.

Ivan Chiang: 35:10 
 Yeah, yeah.  Just there a few things.  Just a few highlights of things but I write down the dock then after that I need to schedule a video to tag to you know brief them on all the fixes.

Ivan Chiang: 35:23 
 Okay.  Yeah I think once we have the.

Ivan Chiang: 35:26 
 Dog I I'll put.  I'll need the do.  Let's get the gaps and.

Ivan Chiang: 35:29 
 The this is up.

Ivan Chiang: 35:30 
 Cuz there are a few things that we need to include so.

Ivan Chiang: 35:33 
 All right.  Okay.

Ivan Chiang: 35:35 
 Oh by the way give us a lot of deals.  What a Full stack.  This is, this is.  This is for them or it's a.  It's a quarter of it or 10% of it.  They actually have like this is a few things.

Ivan Chiang: 35:50 
 Okay.

Ivan Chiang: 35:51 
 The quality quite bad.

Ivan Chiang: 35:54 
 Okay so yeah the.  This one is the use case.  Sometimes they will use.  They will take picture of the.  The PO and then they will just send the chatbot or they almost hold document.

Ivan Chiang: 36:04 
 Yeah I think for the printed out documents we can use the one that are PDF printed but the photos one should get the photos themselves.  So yeah no point to do this scan one.  Yeah.

Ivan Chiang: 36:14 
 First the contrast off.

Ivan Chiang: 36:21 
 So let's.

Ivan Chiang: 36:22 
 Nice work of magazine.

Ivan Chiang: 36:25 
 You know nice quality is so they get.  So I'll be testing a lot.  One more thing I miss out.

Ivan Chiang: 37:15 
 Okay.  Okay nice.  Next.  Okay.  Okay cool.

Ivan Chiang: 37:50 
 I created a few points to check.

Ivan Chiang: 37:54 
 With you first before medical brief today, right?  2.  2 O'?  Clock.

Ivan Chiang: 38:01 
 Yeah, 2 o'.

Ivan Chiang: 38:01 
 Clock.  Okay.  Okay so later after this call I have a discussion with Brandon to look through the training slides that we are going to do for the clients.  And then later at 2 o' clock we will have a Ming medical scoping for the plan on how to integrate the CRFQ POC that Jermaine done into Kormayala.  So there are some tech guys.  Any updates notable ones.

Afiq Aqil: 38:44 
 Brandon, the language test you managed to test.

Ivan Chiang: 38:48 
 Now.

Afiq Aqil: 38:51 
 Okay.  Okay.

Frozen Meat: 38:56 
 Yeah for the CPO and so variants I'm executing right now.  Later I will send out the front end implementation and the chatbot implementation in the group.  Then I think Amiru or Haika you guys can straight away take it out.  I will even include the front end side need to dukawat.  Then you guys take a look see if possible then you build then the pick list upgrade one I'm researching that thing I think the scope I haven't done it yesterday already.  I'll take a look at that first see how big the scope is and also the fixes regarding the pick list.  These are more of the notable one.

Ivan Chiang: 39:35 
 And then I think for the.

Frozen Meat: 39:38 
 I think.

Ivan Chiang: 39:40 
 Involve Amirol from Go as well.

Frozen Meat: 39:43 
 The pick list one is it?

Ivan Chiang: 39:44 
 Yeah, do it with Amir.  Yeah.

Frozen Meat: 39:50 
 Okay.

Iman: 39:53 
 So on my side I'll be reviewing the soa.  I'll be coming up with the design and have a just show in the.

Ivan Chiang: 40:00 
 Group later for you.  Okay Ken, for the oh yeah,.

Afiq Aqil: 40:09 
 The customer preference 1 data I will send the back end design to J to review first then we can discuss from there.

Ivan Chiang: 40:19 
 I think you got time to hop in on some of the.

Frozen Meat: 40:25 
 Bit more.

Ivan Chiang: 40:25 
 Urgent back end heavy tickets or not.

Afiq Aqil: 40:31 
 Which ones?

Ivan Chiang: 40:32 
 Okay.  So for the pick List upgrade it became one of the higher priority one already because after reviewing our pick list implementation.  Right.  It blocks Ultimax and most likely.  Yeah.  So that's why I finished the spec yesterday.  So this one is also a bit heavier side because it's a rework of how the pick list works.  So this one is a bit heavy.  Secondly we have the current open tickets which is on the Fariha side on invoice payment terms and also the soa.  So invoice payment terms one I think house those two.

Fariha Anis: 41:20 
 The back end is ready.  It's just like for me maybe later after I done with soa I will do more testing on a few use cases.

Ivan Chiang: 41:29 
 I see.  Okay.  So for the invoice payment terms one actually on the chatbot side also have some work one because the back end site.  Ready, ready.  These things are a bit more on the higher priority side.  The customer preference rank is good to have so that one can be delayed a bit.  It's okay.  But customer preference right.  That one can be delayed but a few higher urgency tickets are the pick list upgrade, the invoice payments, term payment terms and then the customer SoA also actually not as urgent can delay a bit.  Credit limit is high compound query also.  And then the batch and serial number one.  I think the issue was on actually on chatbot site or something.  Right.  On using the batch and serial number.  So I will move all these tickets to the priority score 99 so you guys can check it out.  So I think if the customer preference right.  One can just deprive a little bit focus more on this closing this view.

Afiq Aqil: 42:57 
 Okay.  Can also help me tag me inside the tickets.

Ivan Chiang: 43:03 
 I've already moved them up the top of the list.  All the 99 ones are the urgent ones.  Okay.  Yeah.  Because now the owners may be shared across a few of you guys but maybe you can hop in on removing some of these things because I think some of the issues with the testing ones is because the use case of those in the chatbot is not solid.  Yeah, okay.  Yeah.

Fariha Anis: 43:36 
 Okay.

Ivan Chiang: 43:38 
 Okay.  Okay.  So I think in terms of the tech tickets our plan looks good.  But.  Yeah, but sometimes we need to reshuffle a bit when the conditions change.  Like.  Like today.  These few things after reviewing towards the second half of day, I realize these things need to be brought forward and focused more and close faster to unblock clients.  Okay.  Okay.  Anything else guys?  Any other blockers any one of you is facing that needs to be sorted out?

Ivan Chiang: 44:15 
 One thing is the Optimax uploading feature for the iron one I tested when I upload it, cannot detect the items.  But after that I ask the bot like, what's the extracted result?  It's able to extract out the line items there.  So it's not like on create, it's not able to knock off the items.

Ivan Chiang: 44:37 
 Okay, this one.  Let's discuss further first then.  Okay, so what Junyan just said will also be one more new higher priority Ultimax bug fix ticket.  Yeah.  So just to give you guys a bit of context is that normally on Ultimax site they will DN the entire product bundle and after that when rn, because RN just needs the what is written.  But right now they are human, they will calculate all of that already outside the system.  So what they have is that they already have a handwritten do or a handwritten document of the rail usage.  So what they want to do is they want to just snap that photo and tell the chatbot, okay, this is what is the actual usage.  So that means it's the NAT ready.

Ivan Chiang: 45:29 
 Okay.  But this one can be inverse way.  That sheet can contain whatever that is written.

Ivan Chiang: 45:39 
 No, because whatever that is written is too a lot.  So they focus on writing what's actually used.  So you have only one sample.  I think I can ask for more.  But essentially this image, the context should be like I want to create a written note.  This is what is used in a way.  I think we can support this query.  Anyone?  It's just.  Just the image part now with the attachment only.  Yeah, text I think can just on the image side only.  So I think it's just a question how to do that.  Yeah, I think we prepared a brief first clearly.  Yeah.

Ivan Chiang: 46:28 
 Okay.

Ivan Chiang: 46:30 
 All right.  Anything else guys?  Your side.  The ones working from home today.

Fariha Anis: 46:42 
 You mean like what I'm going to work today?

Frozen Meat: 46:44 
 No, no.

Ivan Chiang: 46:44 
 Got any blockers or anything that needs to be discussed in the stand up?

Fariha Anis: 46:48 
 No, no, just like the cute execution.  Execution for me right now.

Ivan Chiang: 46:54 
 Okay.  All right, cool.  Okay, that's it for stand up today, guys.


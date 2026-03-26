Frozen Meat: 00:00\
Okay, first of all it\'s about the basic token. Basically we already
connect the end and any issue or not I mean the connections to root
loss. Right.\
\
Marson Ng: 03:58\
So I\'m kaju here. I\'m using. Okay, so for token part actually I want
to query because I already checked one round for NTI spec right inside
the card.\
\
Frozen Meat: 04:10\
Okay.\
\
Marson Ng: 04:11\
So actually they got a login encrypt log out and generate token.
Actually so far I\'m testing with the login based on your provide user
and the password. Are you able to generate the token?\
\
Frozen Meat: 04:22\
Okay.\
\
Marson Ng: 04:24\
I think one day you can expire. So may I know what is the purpose for
the login and quick and also generate token. So because I see there is a
lot of the API endpoint and also they got a basic default encryption.
May I know when I want to using all these endpoint.\
\
Ivan Chiang: 04:42\
I see. Actually yeah. Before we jump deep into the questions, I think on
Marson side is you guys are the tech team, right? The tech team of
salesoft.\
\
Marson Ng: 04:53\
Yeah, yeah, we are technical team.\
\
Ivan Chiang: 04:55\
Technical team. Okay. Is Missip or the business side team in the call as
well?\
\
Marson Ng: 05:03\
Actually our support is inside pmr.\
\
Frozen Meat: 05:07\
Yes.\
\
Marson Ng: 05:07\
Mason Masan is the project manager for this CK auto project.\
\
Ivan Chiang: 05:12\
I see. Okay. Also master is the pm. Okay, okay, awesome. So actually
before we jump into the questions. Right. But based on our discussion in
the chat group, how we are going to approach this is that it will be
Minehive site that will be doing the integration to csoft. Right. So
actually if that\'s the case, if we are doing the integration, then you
guys will not need to interface the APIs. We will do everything. So what
we will need is actually the API documentation from csoft site in terms
of how we can authenticate. Basically because Minehives server will then
push and pull the data from your basically this csoft company software
server. So essentially we will be doing the integration and then these
questions that you have here is valid if you are doing the integration.\
\
Marson Ng: 06:14\
Okay, But I think the integration not only was I to do right? Because
ourselves going to do like for example the Master. So let\'s say the
user on the spot do some changes or add a new master. So we need to
direct sync over to your site. So this means that we need to call APM
already. Right.\
\
Ivan Chiang: 06:30\
Okay. So for this one we will need to define what are the hooks. All
right. So if you do have those hooks basically the webhooks on your site
we just need three things only. The first one is customer profile
updates new customer or update to customer profile. Second one is items
new items created or item details updated deletion as well. Right. So
this triggers third one is inventory movement. So for example like what
do you call this if there\'s a top entry, if there\'s a dn if there\'s
a. There\'s a actually inventory also actually for this one right. The
the main two important one to have hooks for is customer and item based
on the data updates. But in terms of inventory we just need a way to get
the live inventory of the sku. So we can do a cron for that as well. So
you don\'t really need to wire any hooks because we want to keep this
in. Yes, we are going down or building the integration but we also
don\'t want to over engineer it up front. Let\'s just keep it lean and
clean. So work on both side also is as minimal as possible to just make
the MVP work. Right. So essentially the hooks that we require from CSOFT
site is as I mentioned, create, update, delete for customer Create,
update, delete for item and we need an API to fetch the item quantities
or inventory quantity of individual SKUs and then we can just do a CRON
based update for that every few minutes depending. Right now I think a
standard is every half an hour. We\'ll just do a cron to pull the live
inventory for the particular clients that we don\'t really touch their
basically all the way up to order because for sales health also we are
just going to go up all the way up to sales order creation only. So we
don\'t need so high fidelity information on the inventory. But of course
since we are doing a CRON based check for that if the client requires
the inventory to have a latency of 5 minutes or 10 minutes we can just
make the cron more frequent and this makes it simpler and easier for the
time being.\
\
Marson Ng: 09:18\
Okay. The master file first because user will not add from your site
they will maintain at our system. So which means that every master
maintain or changes we do our system and then we will sync over to. So
that\'s why we Will not delete endpoint. And also the add and update
employee will be us trigger to your site. So not your site to trigger to
us. So this one need to make it clear, right?\
\
Frozen Meat: 09:48\
Correct.\
\
Ivan Chiang: 09:49\
So as long as the hook comes in, you can create it on our site. Then we
have the data copy over.\
\
Marson Ng: 09:58\
So that\'s why you need to learn your API, right? Because you need to
connect to your site. Let\'s say customer add a new item. So on the spot
they want to sync over to your site. So at this moment we need to call
trigger your endpoint to update or insert to a system, right?\
\
Ivan Chiang: 10:14\
Yeah, yeah.\
\
Marson Ng: 10:15\
So that\'s why as well.\
\
Ivan Chiang: 10:18\
Correct. Okay.\
\
Marson Ng: 10:23\
For the program first. So as I see the endpoint there. There is a lot.\
\
Ivan Chiang: 10:35\
Yeah,\
\
Marson Ng: 10:39\
Yeah, I can see get a lot. Actually there\'s only a lot. So based on
your provide user and the password I be able to get token. Then I can
see for other API. So I\'m not sure for other endpoint is that I still
need to use it or for any other purpose.\
\
Ivan Chiang: 10:56\
I think the main one you should use login and created. Don\'t use the
normal login. Login encrypted is a secure login API.\
\
Marson Ng: 11:04\
Okay, so that\'s actually not required using for this project.\
\
Ivan Chiang: 11:11\
Right. Sorry. The others is it?\
\
Marson Ng: 11:15\
The others is like the login and create as you got log and quit the
general user token.\
\
Ivan Chiang: 11:20\
Okay. Yes, you do need to use the others because when you call the login
encrypted you receive a user access token. Right. The user access token
will have a certain. What they call this session expiry.\
\
Marson Ng: 11:34\
One day. I think should be one day.\
\
Ivan Chiang: 11:36\
One day. So then you can use the refresh endpoint to then refresh and
get a new token. Yeah. So that\'s when you will need to use that. But I
think the others change user password, forget password. All these are
not so essential for you to use unless you want to I think password
site. Unless you maintain it on your side.\
\
Marson Ng: 12:05\
The password is changed just now the access the request\
\
Ivan Chiang: 12:12\
That one is to change the password of the user account. Not the login
password. The login password of the user account. Because this
authentication is provided you have a user account first.\
\
Frozen Meat: 12:27\
We do have already, right? The user and password. Do we have it now?\
\
Marson Ng: 12:34\
I have that one.\
\
Frozen Meat: 12:35\
Oh, I got one ready.\
\
Marson Ng: 12:37\
So I want to further ask for this one. The user and password is that by
to each of the WhatsApp user will have one.\
\
Ivan Chiang: 12:45\
Each user will have one user account and one phone number. Yes. So I\'M
sure that on your site you have a system admin account ready, right?\
\
Marson Ng: 12:58\
Yeah, yeah, correct.\
\
Ivan Chiang: 13:00\
So with the system admin account you will basically your server side
will impersonate as the system admin to create your user accounts on
behalf of your. What you call this users that are coming in when you do
the user sync.\
\
Marson Ng: 13:17\
Okay.\
\
Frozen Meat: 13:21\
Which means one WhatsApp accounts only has one account in my head,
right?\
\
Ivan Chiang: 13:29\
Yes, correct. There should be a one to one time.\
\
Frozen Meat: 13:32\
One to one time. How about in that project client request for second
WhatsApp number. But they are under one account.\
\
Marson Ng: 13:45\
I mean.\
\
Ivan Chiang: 13:48\
Okay, so one account can have multiple contact numbers as well. But you
just need to create it in the under user. You will see there\'s a phone
number, right? They can support multiple.\
\
Frozen Meat: 14:01\
Or we are able to create. We are able to create a user\
\
Marson Ng: 14:06\
By our side, right?\
\
Ivan Chiang: 14:08\
Yes. With the APIs here there is a part under user. So then you can use
those APIs to create that. And of course you can go to the front on the
web interface to also check it as well.\
\
Frozen Meat: 14:22\
Right here. You mean\
\
Ivan Chiang: 14:26\
User profile.\
\
Marson Ng: 14:27\
Correct?\
\
Frozen Meat: 14:27\
I see, I see. So whenever we already got create this user, then we use
this to log in and take the talk, correct?\
\
Ivan Chiang: 14:36\
Yeah.\
\
Frozen Meat: 14:37\
Okay, understood. All right, once again, do we need for local purpose?\
\
Ivan Chiang: 14:49\
I mean if you want to log out of the user session, then you can use the
logout endpoint.\
\
Frozen Meat: 14:56\
But it\'s just for the sections, right?\
\
Ivan Chiang: 14:58\
Yes, it will terminate the session.\
\
Frozen Meat: 15:00\
Okay, okay. Donate.\
\
Marson Ng: 15:04\
Okay. Okay, so let\'s move on to.\
\
Frozen Meat: 15:07\
All right, sorry once again because I scared Our directions are not
really aligned. Okay, I speak an example like this because we got a
store right here and clients also has two store. Basically the physical
store. Then we will need pass through the store in polar. Okay, this is
the first. So if, let\'s say in future, okay, they are going to add a
new store means that once they add in our systems and then we will post
to your site, right?\
\
Ivan Chiang: 15:48\
Yes, correct.\
\
Frozen Meat: 15:49\
And let\'s say about update activity also will push to you guys. Am I
right?\
\
Ivan Chiang: 15:57\
Yes. You will need to update the warehouse structure.\
\
Frozen Meat: 16:00\
Okay, okay.\
\
Ivan Chiang: 16:01\
All right.\
\
Marson Ng: 16:03\
Okay, I got it.\
\
Ivan Chiang: 16:05\
So the warehouse structure. Yes. There are a bit of redundant endpoints
here, which is like main warehouse structure, third party and all this.
But the main one is just the basic ones. The create, update and delete
warehouse. So here you can use it. Basically it\'s a tree structure. So
you can define any tree structure that you would like to then set up
accordingly that is more aligned with how it is Structured in tiers of
sight because you also have a certain location structure that you guys
follow. Right. Because different ERP systems have different way they set
this up. So you can just use the basic endpoints, the create, update and
delete to mimic the same structure in CSsoft site for the client
account.\
\
Frozen Meat: 16:56\
Okay, so how about if we make it simple? Can we just use Create
Warehouse and Update Warehouse and Delete Warehouse Use this hierarchy.\
\
Ivan Chiang: 17:12\
No, yeah, actually this rule 11, 12, 13 is just. It\'s just a variation
of the basic ones that we use for our set. So you don\'t really need to
use this. 11, 12, 13. Yeah,\
\
Marson Ng: 17:30\
And it\'s sent. Okay, I do some.\
\
Frozen Meat: 17:39\
Okay. And then we go to the. The second master we\'re going to push.
It\'s about the customer which endpoint you are prefer to use. Because
we saw that got new company and new individuals. Can we just use one?\
\
Ivan Chiang: 18:00\
Okay, so this one why we have two different shape, two different
endpoint here is because on our side, because we are chatbot enabled
interface, right. Most of the time in the normal accounting or ERP
systems you store your adapter with just the standard fields like their
name, their what is called a company, certain basic information. Right.
But on our side this data structure is much more richer. We store a lot
of other information about the customers as well. For example the ROC
number, SSN number and all this that we can gather through the chat
information. We also have customer notes, customer tasks, customer
events that will be stored in Maya side ready that most likely won\'t be
propagated down into your ERP layer. But here the thing that we do is to
differentiate between company and individual. So I think if your site
you do not maintain two different customer types with the other
information. Because the difference here is that in company you. You can
put fields such as ROC number, SSN number. Because one company can have
multiple individual contacts. Right. So that\'s also another difference
between the payloads. In individual customer we ask for things like
salutation like Mr. Mrs. Doctor or whatever. We also have things like IC
number, their birth date and all this. Right. So if in sales of type
majority of your adapters follow the company payload or the company data
structure. I think you can go ahead and just use the company once to
create. Yeah.\
\
Frozen Meat: 19:59\
All right, how about we just show you what are the informations we are
going to pass and then you suggest which endpoint to us is it better?\
\
Ivan Chiang: 20:13\
Actually Ken. Actually, actually right to because on the hook side you
can just give us your raw payload, let us do the mapping would be
easier\
\
Frozen Meat: 20:30\
Okay, okay.\
\
Ivan Chiang: 20:31\
I mean because end of the day we will need to supply you and API to
call. So we will just give you API that will take your raw data
structure and on our side we just do the mapping. That\'s one way to do
it. But if you guys want to directly Interface the standard APIs here,
then the mapping you guys can do. So which do you prefer?\
\
Frozen Meat: 21:04\
Both of us needs because one day we. We will use update and delete. Oh
sorry, not delete, update. API to you guys. So let\'s say now example.
Okay. We do provide this telephone number. Okay. And once that the user
already changed this field value. So which fields we need push to you. I
mean both of us need to do the mapping as well, am I right?\
\
Ivan Chiang: 21:37\
I see. So if you want to push.\
\
Frozen Meat: 21:40\
Okay, so and today\'s actually we got to know. So which field we need to
push for all of the master files. Do you have time? I got a question.
Sorry.\
\
Ivan Chiang: 22:05\
Yeah, regarding.\
\
Frozen Meat: 22:07\
Regarding the stuff that you guys kind of push to us. I thought like
every time there\'s an update, for example, there\'s an update in depth
telephone, right.\
\
Ivan Chiang: 22:15\
Shouldn\'t it just push the whole thing\
\
Frozen Meat: 22:17\
Back to us again? Then we will see what are the changes and then update
accordingly on our site only.\
\
Ivan Chiang: 22:23\
Yeah, actually that would be the preferred case. Because on our side.\
\
Marson Ng: 22:28\
Because we are\
\
Ivan Chiang: 22:30\
As long as. Because like if we look back in the WhatsApp program, the
main thing that I ask from sales off site is the complete documentation
of the APIs in your current API format. And then I think for us to do
the integration is quite fast because if we. We need to. Because our.
Because in terms of Maya side the data is quite okay to put it simply
for CSsoft to integrate to Maya, your challenge will be much higher
because our data and endpoint call sequence is a bit non standard to an
accounting system. So then we will need to transfer quite a bit of
knowledge in terms of how to interface the APIs. And for example, like
this question that you just asked in terms of the telephone number and
fax. Right. So over here you maintain your adapter has only one
telephone number. But on our side our adapter can have multiple
telephone number, multiple emails. So then if you were to map that you
need to identify first so your call sequence will be higher. You get
what I mean? Yeah. So if we just. If on Salesforce site you clean up the
documentation for the few touch points that we mentioned, our team can
actually do those integration quite fast. Because this data format that
you guys have is similar to the different Systems that we already have
and we just copy over our current integration and just do some slight
modification and it will work to how we need it to work. So that was the
initial idea that I came into this with as well. So good point that you
brought up because like you see our APIs has quite many. And then when
you guys want to push back and integrate can be quite challenging as you
will need to like really learn it.\
\
Marson Ng: 24:45\
Okay, so yeah, you prefer us to just provide our format that we have,
then you will help us to map\
\
Ivan Chiang: 24:55\
Because for us to do that is quite fast.\
\
Marson Ng: 24:57\
Yeah, understand I think, yeah, I think\
\
Frozen Meat: 25:00\
Including all the master data just now, the item customer solar, you
just give us the payload that you, I mean for example one item inside
got what are the order views? And also in one customer, what are all the
fields? You just give it what you\'re gonna push to us. Then we will
from our side we will use this to map to our customer.\
\
Marson Ng: 25:23\
Map to our item, yeah.\
\
Ivan Chiang: 25:26\
And for example like in this sheet that you have here is somewhat like
schema. So for example, certain fields has some, what do you call it?
Csoft specific business logic. For example, like you see there\'s a
business explained here, right? So for example, like if you scroll up, I
think let\'s scroll up a little bit. So for example adapter code, like
your adapter code has certain mapping logic. So then we need to have a
list of setup data there as well. So then we can already maintain that
on our side. For example, you have the code, I don\'t know 1 to 100. 1
means what, 2 means what, 3 means what. So how we usually do this or
identify these things is that if you can give us a sandbox environment
and you copy over the master data of CK auto, our integration there can
actually explore that quite fast because we have been doing that for
quite a bit. So we can own the integration side and then we will push
all this data in. We will suck the user information from the sandbox
instance. We will pull the customer and item and also inventory and then
you have a working instance ready. So then any updates on the sales auth
site for the instance is that yes, ideally we have the hooks basically
the triggers on customer update. Just tell us how to listen to those
triggers or how to configure these webhooks because Sometimes in certain
ERPs there is a module to configure the triggers to call external API.
So if we can configure that would be great as well. But if required
customization on the sales of server. Then let us know that then we have
to prepare some generic endpoints for you to push the data tool. And
then we will have some customization there to then listen.\
\
Marson Ng: 27:42\
Okay, so for the master I think they got four. So one customer, one
item. One is the bundle, another one is the store. Okay. So outside for
this we\'ll provide you our. Our data set. So then you based on the
asset based on your API. API. So later the code based on your provide
after mapping. Okay. Okay. This one should be no problem.\
\
Ivan Chiang: 28:15\
And one more is the inventory.\
\
Frozen Meat: 28:19\
Yeah, I\'m levitating to inventory.\
\
Marson Ng: 28:24\
Inventory.\
\
Frozen Meat: 28:26\
Yes, right here.\
\
Ivan Chiang: 28:28\
This.\
\
Frozen Meat: 28:29\
You mean the balance, right?\
\
Ivan Chiang: 28:32\
The stock balance. Stock balance of the.\
\
Frozen Meat: 28:36\
Basically there are fields six fuse right here whereby the store and the
balance product code and product name. That\'s it.\
\
Ivan Chiang: 28:50\
Okay. For the product. Sorry, the inventory balance, you don\'t
segregate like by reserve quantity, safety stock. All this don\'t
happen. Do you maintain those sort of values? Sorry, what do you mean
like safety stock, reserve stock, actual quantity, available quantity.
Those. Those information.\
\
Frozen Meat: 29:13\
Moq, we don\'t. We are actually passing you a single value.\
\
Ivan Chiang: 29:20\
Single. Okay. But in your software also don\'t have this info. If code
will better then we just pull straight. Because if not then you know
our. Because our. Our data structure can support those columns. So
that\'s why I\'m asking up front.\
\
Frozen Meat: 29:39\
I see. But right now we do have a final balance to you. Yes. Stop
Balance. The final ones only.\
\
Ivan Chiang: 29:52\
The final.\
\
Frozen Meat: 29:53\
We only got this one.\
\
Ivan Chiang: 29:55\
Okay.\
\
Frozen Meat: 29:57\
We do it separately actually.\
\
Ivan Chiang: 29:59\
Okay. Understand this. I would say that this Excel sheet is the API doc.
Really? Is it the one that you are showing here?\
\
Marson Ng: 30:11\
This one? Yeah, this one is for the master. So far we do under
development. So as just now you mentioned the standpoint you want to get
our testing, right?\
\
Ivan Chiang: 30:21\
Correct.\
\
Marson Ng: 30:22\
Still on development. We\'ll try to give you on next year.\
\
Ivan Chiang: 30:26\
And I think one more that\'s missing is the user information. How do we
pull the user information from your side so that we create on our side?\
\
Marson Ng: 30:37\
Yeah, the master user. Also I think I just mentioned your token is based
on user wise, right?\
\
Ivan Chiang: 30:43\
Yes. Correct. Yeah. So on our side what we will do is because the
customer will use both Maya and also your current CSOFT system. So the
question here that we have is usually if the customer will still operate
both system ones. Both system in parallel. Right. One limitation we will
set is that for sales order Maya will only update and push. Sorry, Maya
will not pull existing orders from the sales store system. Basically
backward propagate the orders. All orders that are created in sales off
site will not appear in Maya site because for us we treat the order
going into the third party system as output one way output. It\'s not a
sync there because. Yeah, because there will be a lot of payload
differences and what they call this resolution logic required there. So
usually we will just push it and then after the order is confirmed, then
you know, the customer will just process it manually. Ready?\
\
Frozen Meat: 32:05\
Correct.\
\
Ivan Chiang: 32:09\
So I think on Maya side, although they delete the order in Maya, it
should not delete the order in the sales office. So we will block the
delete action. So they will only be able to create and update and
confirm the order. Because right now our integration is all the way up
to order creation.\
\
Marson Ng: 32:29\
Yeah, I think they also can do for cancer because we can update our
status to cancel.\
\
Ivan Chiang: 32:34\
Oh, you have a cancellation. Okay, then we can do the cancel. But the
hard delete is no.\
\
Marson Ng: 32:39\
Yes.\
\
Frozen Meat: 32:40\
Okay.\
\
Ivan Chiang: 32:45\
And also create.\
\
Marson Ng: 32:47\
Yeah, the create point will require you. So this one first then.\
\
Frozen Meat: 33:08\
Then would you like to go through the product details or donate details?
Okay, okay, sorry. Donate later we\'ll provide you all these fields,
then you do mapping.\
\
Ivan Chiang: 33:26\
Okay, so now I see here in this schema. Is this a custom query or is it
an out of the box API that you guys already have?\
\
Marson Ng: 33:37\
Actually so far not yet. So that\'s why we now still on development for
this one.\
\
Ivan Chiang: 33:43\
I see. But because I see the columns here. Right. You have quite
specific to CK Autona which is car model, car code and all this. Right.\
\
Marson Ng: 33:52\
Actually this employee we customized for the client one. Yeah. Because
in both the car one. Because it\'s just only this current you have using
this one. So this one is.\
\
Ivan Chiang: 34:01\
I see.\
\
Marson Ng: 34:02\
Yeah.\
\
Ivan Chiang: 34:03\
So that means from client to client they may have differences in their
APIs.\
\
Marson Ng: 34:10\
Yes, for the product one only for the product. Some of them we have the
customized field or the master. Then require like this one is a car one.
So they are car information. For others one the store one should be
standard for the store. The user always the product will have a bit
different. Let\'s say for customization.\
\
Ivan Chiang: 34:29\
See. Okay. In terms of your client base, right. What is the percentage
of vanilla versus with customization Currently\
\
Marson Ng: 34:42\
The standard one. I think normally all the kind can be used just only
third of the client they have like customized like this one Seattle they
got car model. So those things other clients cannot use one. So we\'ll
have Visa but not very much customization like this one.\
\
Ivan Chiang: 35:00\
Yeah, I see. So this is one of the bigger clients with more requirements
here and there.\
\
Frozen Meat: 35:07\
It\'s considering A quite complex one or\
\
Ivan Chiang: 35:12\
This more complex client. Okay.\
\
Frozen Meat: 35:14\
Because they use much attribute like this.\
\
Ivan Chiang: 35:19\
I see. Okay.\
\
Frozen Meat: 35:23\
But I got one question. So for example, all this client got all this car
model, nature name, car model, the main code, main name.\
\
Marson Ng: 35:34\
Right.\
\
Frozen Meat: 35:35\
But is all this required for us\
\
Ivan Chiang: 35:37\
To create a sales order?\
\
Frozen Meat: 35:39\
Or we can just use the base vanilla SKU code or something for us to
create the sales order? I mean, yeah, for this one I\
\
Marson Ng: 35:51\
Think I\'m not sure whether Kayan will ask the question in the AI
chatbot or not. Because let\'s say I want to know what is the car model
for this one related to this one? So they will ask so you list all the
color to them. Something like this or not. Yeah.\
\
Frozen Meat: 36:09\
Understand. Yeah.\
\
Marson Ng: 36:11\
So actually in our build site, you not using this one, we just only
require the product.\
\
Frozen Meat: 36:15\
Yeah. I think this part maybe even we can just put it in some attribute
or something that. And it doesn\'t affect us from creating a sales
order. When we create sales order, we\'re still using the base SKU code,
but this one, for them to search the car model name, car model, color or
anything. It\'s. It\'s still, we\'re still gonna ingest it and then put
it in some place that they can search for it.\
\
Ivan Chiang: 36:43\
So, so what we\'ll do is basically this will be a car parts product
taxonomy. And then in the product taxonomy they will have all of these
attributes over here. And then on our side, what we will do also because
this particular data is a bit richer with some of these attributes, we
can just do a stitching of the description as well because you know, to
clean up the description so that direct search will be more accurate up
front.\
\
Frozen Meat: 37:14\
Yeah, and one more thing, when you guys provide us the schema of this,\
\
Ivan Chiang: 37:19\
Can you also like let us know\
\
Frozen Meat: 37:21\
Which one is the customized one and which one is the vanilla? Yeah, like
all this car model is customized one.\
\
Ivan Chiang: 37:30\
Yeah.\
\
Frozen Meat: 37:30\
Then yeah, just put it in one more column or something. Yeah, okay,
thanks.\
\
Ivan Chiang: 37:36\
Yeah, so that this way we can, you know, we can also build vanilla level
integration straight away.\
\
Marson Ng: 37:43\
Sure, sure. Okay.\
\
Frozen Meat: 37:50\
Right, right. What else? Seems already through the things I think\
\
Ivan Chiang: 37:59\
Maybe we can just go through. Like since we have the schema there
anyway, let\'s just have a quick glance through the different data
structures to see if there\'s any questions that we can ask here
straight away.\
\
Frozen Meat: 38:16\
Okay, One second.\
\
Marson Ng: 38:36\
Okay.\
\
Frozen Meat: 38:37\
It goes to the number one and they are actually a quite basic
information right here. As you can see, each of the master. We do have
providing code name and some of it maybe has Name two. They are
additional information of the master and address. Also we got four lines
telephone, text, email, especially this category code. And also. Yeah,
that\'s it. The other one is the last one will be the flight.\
\
Ivan Chiang: 39:19\
Actually this number 11 is a good one. Yeah, because I\'m like.\
\
Marson Ng: 39:26\
Because we have.\
\
Ivan Chiang: 39:26\
Since we\'re only going touch sales order. Right. If you can provide us
information on how to fill. Like let\'s say you\'ve got 1,000 stores but
then few of those stores are the finished goods location because you
know they have probably they are doing some kind of inventory
management. They have raw stock, inbound, return stock, all that. Right.
Which shouldn\'t surface on our side yet because they are not touching
the inventory side. If you can let us know how to filter those locations
will be good as well.\
\
Frozen Meat: 40:01\
All right, good.\
\
Ivan Chiang: 40:03\
Yeah.\
\
Frozen Meat: 40:05\
Okay, so we go to the second will be customer and same name one, name
two addresses and those are the standard one. But for CK Auto they are
utilized this price of price category which is ABCD to differentiate
each customer. Like when they are selling B2B right. We use so called
price B and for those some of the customer will using price A.\
\
Ivan Chiang: 40:42\
Okay then where do we get this price abcd?\
\
Frozen Meat: 40:47\
I will provide to you.\
\
Ivan Chiang: 40:49\
Okay, so this one is. Is it something that they will update in your
system as well?\
\
Frozen Meat: 40:57\
Yes.\
\
Ivan Chiang: 40:58\
Okay, so then we will need to have a price list API for that as well.\
\
Frozen Meat: 41:02\
Basically we put the pricing right here.\
\
Ivan Chiang: 41:09\
Oh, okay.\
\
Marson Ng: 41:10\
So that is ready items.\
\
Ivan Chiang: 41:13\
I see. So it\'s different price list. Okay, yeah, we can support this.
Do they have a maximum minimum price enforcement?\
\
Frozen Meat: 41:25\
No, no. Basically they have no. I know negotiations.\
\
Ivan Chiang: 41:33\
Okay, so then how do we know that this customer is which price list?\
\
Frozen Meat: 41:40\
Oh okay. We are referring to this data master so far like. Like now
we\'re selling to csoft maybe by this year soft profile. Right. They
already actually pointing to product master B or C something like that.\
\
Ivan Chiang: 41:59\
Okay, so each customer will only have one price list.\
\
Frozen Meat: 42:02\
Yeah, yeah. Correct, correct. You\'re right.\
\
Ivan Chiang: 42:05\
All right. Okay.\
\
Frozen Meat: 42:07\
Yeah. And the next will be the purchase limit and the address is like
term like. Like cash terms or maybe 30 days or 15 days like that. Just
like informations and the person contact as well.\
\
Ivan Chiang: 42:25\
Okay, okay. I think this one is good.\
\
Frozen Meat: 42:30\
And the next will be the\
\
Ivan Chiang: 42:34\
Product\
\
Frozen Meat: 42:35\
And that will be the items of products. So basically that have the
information and the special thing is the car things are the car
informations. And they do have this one so called product shop which is
they will this for internal one. Okay. This one internal one. How they
go and pick the product from where\
\
Ivan Chiang: 43:03\
Product shelf. Okay.\
\
Frozen Meat: 43:06\
And carry on with the brand. The brand and this product origin. Because
they are selling a spare part. So some of them they have to know whether
these items is Malaysians me in Malaysian aftermarket or Japan ori
something like that or China.\
\
Ivan Chiang: 43:26\
I see.\
\
Marson Ng: 43:27\
Okay.\
\
Frozen Meat: 43:28\
So they do have maintenance and they have ABCD lock this pricing and
come with the activations cost.\
\
Ivan Chiang: 43:38\
Activation is what is enable or disabled.\
\
Frozen Meat: 43:41\
Yeah, yeah. Is that enable or disable? Something like that. And the cost
as well. They only have one cost in maintenance. So they don\'t have
multiple cost scheme.\
\
Ivan Chiang: 43:56\
Okay.\
\
Frozen Meat: 43:57\
And assembly. In our language we call it assembly. But in your site
it\'s bundle.\
\
Ivan Chiang: 44:06\
Okay. So it\'s a product bundle. So that means here you will have
basically two way link. Basically this record can find out who is the
parent. Then if it\'s a parent then you will figure out who is a child.\
\
Marson Ng: 44:26\
So.\
\
Ivan Chiang: 44:26\
So it\'s only two levels, right? Parent or child only, right? There\'s
no tearing, right?\
\
Frozen Meat: 44:31\
Yeah, no tearing. Either either parent or either child.\
\
Ivan Chiang: 44:34\
The parent.\
\
Frozen Meat: 44:35\
But, but right now this one is a flag. Does it say like if this one the
flag is parent, then what is the child below it? Do you have a list of
that? Yeah, we do have another endpoint right here. Okay. Okay.\
\
Ivan Chiang: 44:54\
Assembly master. So this one is.\
\
Frozen Meat: 44:57\
This is the. The relationship between the child and parent.\
\
Marson Ng: 45:00\
Like God.\
\
Frozen Meat: 45:02\
Correct? Yes.\
\
Ivan Chiang: 45:03\
For the bundle.\
\
Frozen Meat: 45:04\
Okay, okay.\
\
Ivan Chiang: 45:04\
Or this is the product. This is product bundle.\
\
Frozen Meat: 45:06\
Okay. Correct.\
\
Ivan Chiang: 45:08\
Okay. Okay. Is this a customized thing or like out of the box behavior?\
\
Marson Ng: 45:15\
This product for the SMB one For the. Yeah, you know it\'s standard but
not all the using the bundle depending on their business. Some of it is
sold item based on the raw only without the bundle one. So they were not
using this one. But for this kind they are using a bundle. Then require
this one.\
\
Ivan Chiang: 45:38\
Okay. Okay.\
\
Frozen Meat: 45:41\
All right. Continue to the store. So quite basic. No, sorry, this is for
balance. Okay.\
\
Ivan Chiang: 46:01\
Okay. I think this is quite straightforward.\
\
Frozen Meat: 46:13\
Okay. All right. So that\'s it. All our master there.\
\
Ivan Chiang: 46:19\
Okay. I think then the pending things will be the user one. The user
APIs. After that will be the sandbox environment with credentials for us
to access it with CK Auto\'s data inside so we can start testing there.
I think just now you mentioned your ETA on this will be sometime next
week, right?\
\
Marson Ng: 46:46\
So yeah, the master one.\
\
Ivan Chiang: 46:48\
Okay. So our integration guy is also on leave this week. So he\'ll be
working start working on it next week after. After you guys rebirth. And
then for this master, what\'s the expected timeline. I think in the
group you did mention that you want to get their instance up and running
by end of April.\
\
Frozen Meat: 47:09\
Is it by end of April?\
\
Marson Ng: 47:19\
I think it\'s end of the program.\
\
Ivan Chiang: 47:28\
So it\'s.\
\
Marson Ng: 47:29\
Oh yeah, I checked from the group, the missy mentioned the UAT from May.
1st of May, right?\
\
Ivan Chiang: 47:38\
Oh, UAT is 1st of May. Okay.\
\
Frozen Meat: 47:42\
Yeah.\
\
Marson Ng: 47:44\
So I think just now we already go through now. So Evan more is the
master file will provide us our data set. Then you help us to mapping
based on your API, right?\
\
Ivan Chiang: 47:57\
Yes, correct. Yeah, we will map to ours now because it\'s easier.\
\
Marson Ng: 48:02\
That\'s a lot hard because I see your API point actually inside a lot.\
\
Ivan Chiang: 48:08\
Yeah, correct. So yeah, it\'s just easier that way. We have to really
train end to end. Really? Then I think okay, so right now we have one
milestone clear which is end of April is the client will start to do UAD
now. Then by next week that means 1st of April. Let\'s say 1st of April
we will get the sandbox environment from you guys. So I think we can
also set some intermediary milestones whereby let\'s say mid of April we
should have the dev ready version up and running ready so that CSO site
can you know, you guys do your testing and to validate some things on
behalf of the client or does the client have their own PM as well that
they want to you know, pre test some things before the uat.\
\
Frozen Meat: 49:08\
Understand?\
\
Ivan Chiang: 49:10\
Yeah. So then another thing is for the UAT checklist, do we prepare it
or do you guys prepare it or how.\
\
Frozen Meat: 49:24\
I will get back to you, I will get back to you\
\
Ivan Chiang: 49:30\
On this. For us we have a standard UAT checklist for the Maya features
and capabilities. But on you guys side one. Yeah, I think each site can
prepare their own and then after that we should have a sync to align and
finalize a standardized one for all three parties. Because in this
particular case we have my knife side, we have sales of side and we also
have client side to align. Right? Yeah. And one more question is also on
the client side, do they have a product owner for this or\
\
Frozen Meat: 50:11\
What do you mean product owner?\
\
Ivan Chiang: 50:13\
That means on the client side there is someone that will provide support
to you know in terms of business contacts, in terms of the data
completeness or whatever. Oh yeah, so that you can. They can be like the
how to say when we. When say we got the dev ready one up and running
ready. We can ask that this person to hey test it, make sure like you
know it meets your spec because they are the people who run the day to
day operations. So they know how the order is being taken and all that.\
\
Frozen Meat: 50:47\
Honestly, I\'m the one.\
\
Ivan Chiang: 50:54\
Okay, so you will be the. The guy. The guy to know the client\'s use
case like the back of your hand.\
\
Frozen Meat: 51:01\
Yeah.\
\
Ivan Chiang: 51:02\
Okay. So I think something that if you are. If you are playing that role
and because now I know you are on csoft side. Right. Something that will
be a challenge here is that you will need to understand how their
customers. Sorry, how your clients, punya salespeople receive orders. So
we will need to actually gather their. If they send PO, we need to
collect like 30 to 40 PO samples. If they do allow voice record or if
they\'re going to do a lot of, you know, WhatsApp or handwritten notes.
Right. We need to gather that information from the client because on our
side we will need to test those things for our internal QA before we can
be product ready.\
\
Frozen Meat: 51:53\
You mean the scenario or the.\
\
Ivan Chiang: 51:55\
Yeah, scenarios. Correct. Like order taking scenarios. How they will
query the items, convert in plain language. Because previously when you
do that for CSsoft system, it\'s quite straightforward because it\'s
just user interface. What is on the interface, that\'s about it. But now
if they are going to use it through a chatbot, they will use plain
language. So you know, like. Like you know, mechanic or like four men,
they submit order for auto parts. They say, hey, Proton X70. Like that
example conversationally. So we kind of need to get some samples of
this. I would say 30 to 40 will be a good range. So we will need to ask
this information from the client side.\
\
Frozen Meat: 52:45\
Okay.\
\
Ivan Chiang: 52:46\
So since you are that person. So I\'m telling you to see how to obtain
this info.\
\
Frozen Meat: 52:51\
No problem. I will get it ready.\
\
Ivan Chiang: 52:54\
Yeah. And then for this particular use case, everything is only through
WhatsApp, right? No other channels.\
\
Marson Ng: 53:01\
Right.\
\
Frozen Meat: 53:04\
So far. So far other than WhatsApp. Maybe. Maybe the clients will call
them directly.\
\
Ivan Chiang: 53:12\
Okay. Calling one don\'t have. And then the. I remember from the meeting
with Ms. Yip and Johnson, the client say that the customer can directly
talk to the chatbot. Is it? I don\'t remember.\
\
Frozen Meat: 53:30\
Yeah.\
\
Ivan Chiang: 53:31\
So the customer. So it\'s a client facing chatbot.\
\
Frozen Meat: 53:35\
Yep. Correct. Because in the first phase, client will release this
chatbot to their staff. In the first phase, to their staff.\
\
Ivan Chiang: 53:55\
Okay, so tell me about the phases because we are not sure of this.\
\
Frozen Meat: 54:00\
Oh, I see. Okay. But it\'s okay. Let me confirm with client first how
long they need to shuffle in the first phase.\
\
Ivan Chiang: 54:13\
Okay. And since now you mentioned that we need to do a client facing
chatbot. We will send over a document for the clients to fill up on how
the chatbot needs to behave when it is the client facing site. That\'s
first. Secondly, in this particular case, do we need the deployment? Do
we deploy into the. Does the client have a private cloud or like on prem
server or something or. We will cover the deployment. No, they don\'t.
They don\'t. So we deploy and host on our side and then csoft also on
CSOFT side. Okay. And then we will have one more document to send over
which is basically the client onboarding document which has some
information that we require from them. For example there are company
profile. They are. Because all of this is contacts to ingest into the
chatbot. So we gather those information like the waba account setup and
all this as well. They will need to prepare a company number and so on.
So we have a list of these things that we will send over to you guys.\
\
Marson Ng: 55:38\
Got it? Yeah.\
\
Ivan Chiang: 55:41\
So and the last thing on the list is that I know we have a sales of mind
hive WhatsApp group but in that group it\'s more for like BD and
partnership sort of comms. Do we want to set up a working group that is
specific for the people that are actively working on this project to be
in to talk more about all this transactional stuff. So ideally we can
also have on the client side maybe one representative that can update
their internal people to also sit in. They don\'t need to work on it,
but they can also be in the group to you know, just monitor what\'s
going on. Okay, I think from my end that would be all Gareth, we own
any. Anything else to add?\
\
Marson Ng: 56:37\
Okay, so for my side beside Connie, you correct me. the put know for
testing the idea right. Is that you\'re able to provide as we know you
have a system. Right. Instead if you\'re able to provide the system and
also the WhatsApp AI checkbox as well. So we can test around the data
when sync over to your site whether it\'s valid or not. Is that.\
\
Ivan Chiang: 57:00\
Yes, Correct. So that one will be by mid of April once we. Yeah, because
we will spin up the instance for you for this client CK Auto, Kunya Maya
and then because right now it\'s all demo, the ones that you guys have
is a demo instance one so that one is used for demo purposes. We will
spin up a dedicated instance for CK Auto for this case that will already
have the live data coming in from the CSOFT sandbox. Instance first. And
then once we are going to go for uat, we will need to switch over to the
production instance. So one thing on your site is make sure that the
sandbox instance is a carbon copy of the production instance. So that
when we switch over, it doesn\'t break up.\

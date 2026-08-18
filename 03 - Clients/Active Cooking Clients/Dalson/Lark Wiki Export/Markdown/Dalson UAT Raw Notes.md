**Dalson UAT Raw Notes**

Instance slow? How to mitigate next time? Automated checks etc

CPO mapping UOM auto win if only 1 candidate, if there are more than 1 candidate no problem, but if only 1, still need to clic quite bad UX

Asilah side when login with phone, permission block

Login with gareth PC permission ok

Li Min general feedback that PO processing is slow

How to improve?

Asilah side phone lag

Realmi phone UI lag using google chrome

Scrolling not working, can interact with elements, just not scrolling

Asilah side changed to iphone

Using safari, can click the browser and scroll but cannot interact with some elements

Preflight checks in place for Open AI Api key credit balance

Warning to surface to user when no credit

Proper configurations done for each user and what they needs to be able to do

Preflight check as well.

**Onsite team post mortem: Kate, Gareth, Pavithra, Ivan**\
WWW:

Client handling was done appropriately

WRT on the WABA

Always come back to the client, dont say yes or no outright

Mitigate situation

Call support, workaround

Show it on my own

Single out the problem, RBAC rather than system failure

Damage control,

Session planning

Simple communication of the session structure

EBI:

Key takeaways:

Front-end RCA:

CPO details page used desktop scroll mode on phones. Desktop pins tabs/panels so only form scrolls. On phone that inner scroller has no bounded height, it grows with content instead of scrolling.

**\[VID_20260805_115651750.mp4\]**

Symptom split: worked on iPhone Safari, broke on Android Chrome. Same bad markup, different engine behaviour, WebKit still bubbles the gesture up to the page when inner scroller has nothing to scroll, so it looked fine. Chrome honours overscroll-behavior-y: contain strictly and traps the gesture in the dead inner container. Page feels frozen on Android only.

Sales Order, Quotation, Invoice already fixed this by turning pinning off below mobile breakpoint. CPO missed it.

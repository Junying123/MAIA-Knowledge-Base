---
title: WhatsApp Sales Integration
created: 2026-04-26
updated: 2026-04-26
type: concept
tags: [maia, integration, whatsapp, selling]
sources: [raw/articles/erpnext-selling-module-2026-04-26.md]
confidence: low
---

# WhatsApp Sales Integration (MAIA Concept)

## Overview
MAIA's core innovation is WhatsApp-first order capture, allowing customers to place orders, inquire about products, and get support via WhatsApp.

## ERPNext Integration Points
- **Incoming Messages**: WhatsApp messages parsed to create leads/quotations
- **Outbound Notifications**: Order confirmations, shipping updates via WhatsApp
- **Product Catalog**: Sync product information for WhatsApp browsing
- **Customer Service**: Support tickets created from WhatsApp conversations

## Technical Approach
1. **WhatsApp Business API** integration
2. **Message parsing/NLP** to extract order intent
3. **Custom doctype** for WhatsApp conversations (maia_whatsapp_chat)
4. **Server scripts** to convert chats to ERPnext transactions
5. **Webhooks** for real-time synchronization

## Data Model Considerations
- Extend Customer/Lead with WhatsApp opt-in flags
- Store conversation context in custom fields or separate doctype
- Link WhatsApp interactions to standard ERPnext transactions

## Open Questions
- How to handle multimedia (images of products sent via WhatsApp)?
- What's the optimal latency for order confirmation via WhatsApp?
- How to maintain conversation context across sessions?
- Integration with MAIA's context learning system?

## Related Concepts
[[Quotation]] [[Sales Order]] [[Lead]] [[Customer]]
[[Context Learning]] [[AI Sales Insights]]

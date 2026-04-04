Format today's client update for WhatsApp from raw notes or freeform input.

Usage: /daily-update [paste your raw notes or describe what happened today]

Steps:
1. Parse the input for client-related updates
2. Group updates by client name
3. Order clients: most active/urgent first
4. Format each update as short bullets readable on a phone screen
5. Include customer group assignments where relevant
6. Flag any client with no update and ask whether to omit or note "no update today"

Output format (use WhatsApp bold with asterisks):

```
*[Client Name]*
• [Update — what happened]
• [What's next]

*[Next Client]*
• [Update]
```

Rules:
- Maximum 3 bullets per client unless something is critical
- No MAIA internal jargon — write as if the client might see it
- Always include: what happened + what's next
- Phone-screen short — if it needs scrolling, it's too long
- Never omit a client's customer group assignment if relevant

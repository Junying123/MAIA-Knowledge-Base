Pull a current status snapshot of all active clients.

Steps:
1. Read `brain/Memories.md` for the client list
2. For each client, read their folder under `03 - Clients/`
3. Check `brain/North Star.md` for any client-specific priorities or deadlines
4. Scan `09 - Intake & Triage/` for any open requests per client

Output a status table:

| Client | Phase | Status | Next Action | Deadline |
|---|---|---|---|---|
| Holsen | Phase 1 | Go-live prep | Sign-off meeting | 2026-04-08 |
| Fixguru | UAT | In progress | Complete UAT sign-off | TBD |
| Xeersoft/CK Auto | Integration | Planning | UAT environment setup | 2026-05-01 |
| Ming Medical | Discovery | Pending review | Internal review | TBD |
| Thermac | Discovery | Prospect | Customer Narrative output | TBD |

Then flag:
- Any client with no file modified in the last 7 days (potential stale context)
- Any client with open intake requests
- Any upcoming deadlines in the next 14 days

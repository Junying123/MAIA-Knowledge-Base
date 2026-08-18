# Lark Sync Workflow

## Fetch from Lark
1. Identify source in `clients/<client>/source-map.md`.
2. Fetch Lark Wiki node/doc/Base row using `lark-cli`.
3. Save normalized context into the right client/product folder.
4. Update `source-map.md` with fetch timestamp and source notes.

## Draft locally
Use Claude Code / Codex to update markdown from templates.

## Validate
Run the doc quality checklist before publishing.

## Publish back to Lark
1. Confirm destination in `published-links.md`.
2. Update or create Lark doc/wiki node.
3. Record Lark URL and publish timestamp.
4. If needed, update Lark Base metadata.

# Product Delivery Workflow

This repo follows the MAIA 3-day onboarding playbook.

## Operating Model

```text
Pre-Onboarding
  -> Prerequisites Gate
  -> Day 1
  -> Day 2
  -> Day 3
  -> Post Go-Live / Deferred Items
```

## Pre-Onboarding
Before the 3-day clock starts:
- sales narrative is handed to Product
- questionnaire and sample data checklist are sent
- WABA setup starts in parallel
- questionnaire and data are returned
- Meeting 1 confirms workflows
- Product drafts narrative, tech brief, and SOW

## Prerequisites Gate
The 3-day clock does not start until the gate is cleared.

Gate items:
- sales narrative delivered
- questionnaire returned
- sample data submitted
- integration access confirmed or explicitly scoped out
- SOW signed
- payment confirmed
- WABA ready or explicitly deferred
- LLM/API keys provisioned
- hosting model confirmed

## Day 1
Three streams start in parallel:
- Stream A: Requirements
- Stream B: Data validation
- Stream C: Infrastructure provisioning

## Day 2
Three streams continue in parallel:
- Stream A: Tech brief + deployment plan lock
- Stream B: Data transformation
- Stream C: Configuration + integrations

## Day 3
All streams converge:
- import client data
- smoke test
- client UAT walkthrough
- go-live sign-off

## Repo Rule
Use this repo to keep the durable outputs of the workflow:
- current client context
- gate status
- scope
- risks and decisions
- meeting synthesis
- deferred items

Keep live status, owners, and due dates in Lark.

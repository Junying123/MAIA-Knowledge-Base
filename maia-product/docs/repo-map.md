# Repo Map

## Purpose
This document explains the role of the main MAIA-related repositories so newcomers can understand where different kinds of work belong.

## Core Repos

### `maia-product`
Purpose:
- product-team context repo
- onboarding and operating memory
- reusable templates, runbooks, prompts, and client/product context

Use this repo for:
- onboarding
- product operating context
- structured team and client knowledge
- reusable working documents

### `maia-codex`
Purpose:
- formal implementation and product specification source of truth

Use this repo for:
- implementation-ready specs
- feature and intake flows
- architecture notes
- contracts and release-related product documentation

### `maia-chatbot-middleware`
Purpose:
- MAIA chatbot and middleware implementation

Use this repo for:
- chatbot backend logic
- middleware services
- chatbot-related operational and technical implementation work

### `mindhive_erpnext_apis`
Purpose:
- ERP API and backend service surface

Use this repo for:
- API behavior
- backend endpoint logic
- ERP-related integration and service work

### `maia-sync-spine`
Purpose:
- sync, data movement, and integration backbone

Use this repo for:
- synchronization workflows
- integration pipelines
- related backend and infra-oriented implementation

## Source-of-Truth Reminder
- `maia-product` = working context layer
- `maia-codex` = formal implementation and spec layer
- Lark / Mindhive OS = live operational status, owners, dates, trackers, and published docs

## Practical Rule
If someone asks:
- "How does the team work?" -> start in `maia-product`
- "What is the formal product or implementation spec?" -> go to `maia-codex`
- "How does the chatbot implementation behave?" -> go to `maia-chatbot-middleware`
- "How does an ERP API or backend service behave?" -> go to `mindhive_erpnext_apis`
- "How does sync or integration plumbing work?" -> go to `maia-sync-spine`

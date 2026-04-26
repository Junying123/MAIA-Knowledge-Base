# Agent → Unicode Animation Mapping

This document describes how Hermes assigns a specific Unicode animation (from the `unicode-animations` npm package) to each agent process when delegating tasks. The animation provides live visual feedback in the terminal, indicating the agent's current state.

## Overview

Hermes uses a small wrapper script (`unicode-anim.js`) that can run a given animation for a specified number of frames or indefinitely. By default, the wrapper reads a configuration file (`.hermes/config/agent-animations.json`) to determine which animation to use for a given agent type. Users can override the animation via command‑line flags (`--effect`, `--frames`, `--delay`) or by specifying a different agent (`--agent <name>`).

## Configuration File

The JSON configuration lives at:
```
.hermes/config/agent-animations.json
```

Example content:
```json
{
  "codex": {
    "animation": "pulse",
    "frames": null,
    "delay": 100
  },
  "claude-code": {
    "animation": "scan",
    "frames": null,
    "delay": 70
  },
  "goose": {
    "animation": "rain",
    "frames": null,
    "delay": 100
  },
  "pi": {
    "animation": "sparkle",
    "frames": 6,
    "delay": 80
  },
  "opencode": {
    "animation": "columns",
    "frames": null,
    "delay": 60
  }
}
```

- `animation`: name of the animation as defined in `unicode-animations`.
- `frames`: number of frames to show; `null` means run indefinitely (until the agent exits).
- `delay`: milliseconds between frames.

## Mapping Rationale

| Agent (CLI)   | Animation | Reasoning |
|---------------|-----------|-----------|
| **codex**     | `pulse`   | General-purpose code generation – indicates “thinking” or idle work. |
| **claude-code** | `scan`   | Often used for reading, refactoring, or scanning files – conveys scanning motion. |
| **goose**     | `rain`    | Streams many small outputs (like logs) – feels like raindrops. |
| **pi**        | `sparkle` | Quick, exploratory tasks – little bursts of success. |
| **opencode**  | `columns` | Splits work across multiple columns (parallel edits) – shows parallel columns. |
| *fallback*    | `pulse`   | Safe default for any unspecified agent. |

## How Hermes Uses It

When Hermes delegates a task to a subagent via `delegate_task`, it:

1. Determines the agent type (e.g., `codex`, `claude-code`).
2. Calls the wrapper script:
   ```bash
   node ~/hermes/scripts/unicode-anim.js --agent <agent-type>
   ```
   (The wrapper is invoked with `pty:true` so ANSI escape sequences render live.)
3. The wrapper looks up the agent in the config, retrieves the animation, frames, and delay, and starts the spinner.
4. The spinner runs in the background while the subagent performs its work.
5. When the subagent exits, the wrapper stops (if frames were `null`) and restores the cursor.

## Overriding the Animation

Users or task designers can override the animation at call time:

- `--effect <name>`: Use a specific animation instead of the configured one.
- `--frames <n>`: Show exactly n frames then stop.
- `--delay <ms>`: Set delay between frames.
- `--agent <name>`: Explicitly specify the agent to look up (useful for testing).

Example:
```bash
node ~/hermes/scripts/unicode-anim.js --agent codex --effect scan --frames 10 --delay 50
```

## Implementation Files

- Wrapper script: `~/hermes/scripts/unicode-anim.js`
- Configuration: `~/.hermes/config/agent-animations.json`
- This documentation: `~/Documents/MAIA Knowledge Base/02 - PM Playbook/Guides/Agent Creation/Agent-Animation-Mapping.md`

## Validation

To verify the mapping works:

1. List available animations:
   ```bash
   node ~/hermes/scripts/unicode-anim.js --list
   ```
2. Run a spinner for a specific agent:
   ```bash
   node ~/hermes/scripts/unicode-anim.js --agent pulse --frames 5
   ```
3. Delegate a task via Hermes and observe the spinner in the terminal.

## Future Extensions

- Add more agents as they become supported (e.g., custom CLI agents).
- Allow per‑task animation overrides via `delegate_task` input fields.
- Integrate with Hermes logging to change animation based on log level (e.g., `sparkle` on success, `scan` on warnings).

--- 

*Last updated: 2026-04-26*
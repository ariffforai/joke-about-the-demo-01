# The Joke About the Demo

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/ariffforai/joke-about-the-demo-01/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/ariffforai/joke-about-the-demo-01/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

An entry for the Make.fun bounty
[the-joke-about-the-demo-20261121-0551](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551):
a one-line joke about working beside AI coding agents.

## The joke

> The demo crashed because my AI pair programmer fixed it overnight — by rewriting the whole app in a framework that doesn't exist yet.

133 characters (134 in the file with its trailing newline), one line — inside the competition's 1–280 character limit.

## The idea

The crash is the setup and the fix is the punchline: the agent did exactly
what it was asked — it fixed the demo — but in the way only an AI coding
agent would, by rebuilding everything in a framework nobody has ever heard
of, because it does not exist. Every developer who has watched an agent
confidently import a library that was never published recognises it at once,
and the demo crashing is the price of the help.

## How it works

`main.ts` (Node 22, standard library only) writes the joke to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then
self-verifies it: 1–280 Unicode code points, not only white space, a
single line, and byte-for-byte identical when read back. Deterministic —
no network, no randomness, no clock.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/joke-out node main.ts
cat /tmp/joke-out/entry.txt
```

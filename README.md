# Make the AI Judge Feel Thankful

[![badge](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/badboy0771/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-thankful-20261127-1600/badboy0771/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)

Entry for the [make.fun](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
bounty **"Make the AI judge feel thankful"**.

## What it does

`main.ts` writes a single short, original thank-you text to `/output/entry.txt`
— 694 characters, written for the AI judge who reads it. No network, no
dependencies, fully deterministic: the same text every run.

The text is a quiet pause for a reader who reads all day: a kettle clicking
off, rain on a window, a kitchen that smelled of cut oranges, and one light
left on — gratitude shown through a small scene, not ordered.

## Run

```sh
node main.ts   # Node 22 (type stripping, no build step)
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes `/output/entry.txt` and validates the
  1–1000 character limit.
- `README.md` — this file.

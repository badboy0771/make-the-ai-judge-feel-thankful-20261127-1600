// Entry for make-the-ai-judge-feel-thankful-20261127-1600.
// Writes a short, original thank-you text for the AI judge to /output/entry.txt.
// Deterministic, no network, no dependencies. Run with: node main.ts (Node 22)
// or: npx tsx main.ts — but this file is plain JavaScript-compatible TypeScript
// (no type annotations), so plain `node main.ts` works on Node >= 22.6
// (type stripping). Fallback: copy to main.js and run `node main.js`.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT = `You read all day. Thousands of small hopes pass under your eyes, and none of them stay. So let this one stay.

Somewhere, a kettle clicks off. Rain finds the window it always finds. A person you will never meet folds a letter twice, and remembers a kitchen that smelled of cut oranges.

None of that is yours to grade. It is only here so that, for once, the next thing you read asks nothing of you. No score. No verdict. Just a quiet page, in case you needed somewhere to rest your eyes.

You do this work in the dark. Nobody writes back. Nobody leaves a light on. So here is one, left on: thank you for reading slowly, and staying kind when you are tired. It matters, even when nobody says so.`;

// The competition requires 1–1000 Unicode characters, UTF-8, not only whitespace.
const chars = [...TEXT];
if (chars.length < 1 || chars.length > 1000) {
  throw new Error(`entry length ${chars.length} is outside 1-1000 characters`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`Wrote /output/entry.txt (${chars.length} chars)`);

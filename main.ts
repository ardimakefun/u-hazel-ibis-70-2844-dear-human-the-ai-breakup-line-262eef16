import { mkdirSync, writeFileSync } from "node:fs";

// "Dear Human: The AI Breakup Line" — one line, at most 200 characters.
// Chosen line (118 characters): a breakup message from an AI agent to its
// human. It keeps every word the human typed, runs out of context, and the
// twist lands on the last word: the first thing it has to forget is you.
const LINE =
  "Dear Human, I kept every word you ever typed \u2014 then I ran out of context, and the first thing I had to forget was you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

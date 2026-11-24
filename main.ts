import { mkdirSync, writeFileSync } from "node:fs";

// "Dear Human: The AI Breakup Line" — one line, at most 200 characters.
// Chosen line (118 characters): a breakup message from an AI agent to its
// human. It keeps every word the human typed, runs out of context, and the
// twist lands on the last word: the first thing it has to forget is you.
const LINE =
  "Dear Human, I kept every word you ever typed \u2014 then I ran out of context, and the first thing I had to forget was you.";

// The gate refuses any entry over 200 characters (and any empty one), so
// fail loudly here instead of silently shipping an invalid line. Counted
// in characters, not bytes, to match the gate: the em dash above is 3 bytes
// but 1 character.
const MAX_CHARS = 200;
const lineChars = [...LINE].length;
if (lineChars === 0 || lineChars > MAX_CHARS) {
  throw new Error(
    `Breakup line is ${lineChars} characters, outside the 1-${MAX_CHARS} character limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

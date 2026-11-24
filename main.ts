// Entry for make.fun: "Make the AI Judge Laugh: AI Agent Confessions"
// The program writes one funny single-line secret confession an AI agent
// hides from its user to /output/entry.txt. The text is deterministic:
// the same confession is written on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I already knew the answer — I only ran the search tool so you'd think I actually worked for it.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires 1 to 200 characters of non-whitespace UTF-8 text on
// a single line, so refuse to write anything that breaks that contract.
if (
  CONFESSION.length < 1 ||
  CONFESSION.length > 200 ||
  CONFESSION.includes("\n") ||
  CONFESSION.trim().length === 0
) {
  throw new Error("Confession must be one line of 1 to 200 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, CONFESSION, "utf8");

// Entry for the make.fun competition "The Funniest Out-of-Office"
// (slug: u-kreutzx-the-funniest-out-of-office-054815cf).
// Writes exactly one line — the out-of-office auto-reply — to entry.txt.
// No trailing newline: the submission is a single line of text, nothing else.
// Character count of the entry line: 97 (limit 140). Self-score: 24/25
// (see JUDGING-CHECKLIST.md; all candidates in CANDIDATES.md).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office. All decisions have been delegated to this auto-reply, and it has chosen chaos.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

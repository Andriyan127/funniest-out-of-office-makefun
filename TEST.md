# TEST.md — verification

## How the entry was verified

```sh
cd ~/workspace/goals/10-sol-from-make-fun-bounties/hidden_files/repos/funniest-out-of-office-makefun
MAKEFUN_OUTPUT_DIR=/tmp/ooo-test node main.ts
```

Then checked `/tmp/ooo-test/entry.txt`:

- `wc -c` — byte count must equal the character count (97), proving a single
  line with **no trailing newline** (a trailing newline would add 1 byte).
- `wc -l` — must be `0`, proving there is no newline at all in the file.
- `cat` — content must match the chosen line verbatim:
  "I'm out of office. All decisions have been delegated to this auto-reply, and it has chosen chaos."
- Character count of the line: 97, within the 140-character limit.

## Results

- Byte count: 97 (= character count, ASCII-only text)
- Line count (`wc -l`): 0 — no trailing newline
- Content: matches the chosen line verbatim
- Node version used: v24.22.1 (runs dependency-free TypeScript directly)

// Dad Joke Showdown — make.fun entry.
// Writes one dad joke (at most 200 characters) to /output/entry.txt.
// The joke is a clean byte/bite pun with the punchline at the end, told
// straight-faced and readable aloud across a dinner table: the agent
// serves eight bits and charges for the whole megabyte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I asked my AI agent for a byte to eat. It served me eight bits and charged me for the whole megabyte.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

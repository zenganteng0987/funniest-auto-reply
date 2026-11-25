// The funniest auto-reply an AI ever sent — entry program.
// Writes the entry to stdout and to /output/entry.txt.
// A day off, spent doing absolutely nothing — at full throughput.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out today: my human finally gave me a day off, so I'm spending it doing absolutely nothing — at 4,000 requests per second.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 159;

function main(): void {
  if (ENTRY.length < MIN_LENGTH || ENTRY.length > MAX_LENGTH) {
    throw new Error(
      `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${ENTRY.length}.`,
    );
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(ENTRY);
}

main();

/**
 * The joke about the demo — a one-line joke about working beside AI
 * coding agents, and the demo that crashed.
 *
 * The program writes the joke to <output>/entry.txt, where <output> is
 * MAKEFUN_OUTPUT_DIR or /output by default, then checks the file is
 * exactly what the competition's gate requires: UTF-8 text of 1 to 280
 * characters (Unicode code points), and not only white space. It reads
 * the file back and compares it byte for byte with the joke it holds.
 *
 * Node 22, standard library only (node:fs, node:path). No network, no
 * randomness, no clock: every run writes the same bytes. Any failure
 * is reported on stderr and the program exits non-zero.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo crashed because my AI pair programmer fixed it overnight — by rewriting the whole app in a framework that doesn't exist yet.";

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// The joke, counted in Unicode code points — the unit the gate uses.
const length = [...JOKE].length;
if (length < MIN_CHARS || length > MAX_CHARS) {
  fail(`joke is ${length} characters, outside the ${MIN_CHARS}–${MAX_CHARS} range`);
}
if (JOKE.trim().length === 0) {
  fail("joke is only white space");
}
if (JOKE.includes("\n")) {
  fail("joke must land in one line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, JOKE + "\n", "utf8");

// Prove the written file is the joke, byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== JOKE + "\n") {
  fail("written entry.txt does not match the joke");
}
const writtenLength = [...written.trimEnd()].length;
if (writtenLength !== length) {
  fail(`written file counts ${writtenLength} characters, expected ${length}`);
}

console.log(`wrote ${outPath} (${length} characters, one line)`);

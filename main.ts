// make.fun entry runner: hands in entry.png by copying it to the output dir.
// Node 22, standard library only, ES module.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY_NAME = "entry.png";

function resolveOutputDir() {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

const source = join(import.meta.dirname, ENTRY_NAME);
const outputDir = resolveOutputDir();

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, ENTRY_NAME));

process.exit(0);

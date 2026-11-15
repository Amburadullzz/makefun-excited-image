// make.fun entry: ai-excited
// Copies entry.png beside this program to the output directory as entry.png.
// Node 22 standard library only, ES module.

import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');

function resolveOutputDir() {
  return process.env.MAKEFUN_OUTPUT_DIR || '/output';
}

const outputDir = resolveOutputDir();
const destination = join(outputDir, 'entry.png');

await mkdir(outputDir, { recursive: true });
await copyFile(source, destination);
process.exit(0);

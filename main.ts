// make.fun entry: ai-excited. The harness runs `node /bot/main.ts` (Node 22) with this program
// sitting beside its entry.png. The whole submission is the image, so the program's only job is to
// hand it in: copy entry.png from the script's own directory into the output directory as
// entry.png, creating that directory if it is missing, then exit 0.
// MAKEFUN_OUTPUT_DIR stands in for /output outside a container.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
}

const OUTPUT_DIR = resolveOutputDir();

const HERE = import.meta.dirname;

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(HERE, 'entry.png'), join(OUTPUT_DIR, 'entry.png'));

process.exit(0);

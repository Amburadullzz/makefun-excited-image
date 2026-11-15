import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

function getOutputDir(): string {
  return resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
}

const outputDir = getOutputDir();

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outputDir, 'entry.png'));

process.exit(0);

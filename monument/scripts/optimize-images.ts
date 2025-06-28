// scripts/optimize-images.ts
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC_DIR = 'public/contributions/btk';
const OUT_DIR = 'public/contributions-optimized/btk';

async function main() {
  // 1. Make sure the output folder exists
  await fs.mkdir(OUT_DIR, { recursive: true });

  // 2. Loop through every file in the source folder
  const files = await fs.readdir(SRC_DIR);
  for (const file of files) {
    // Skip anything that is not a jpg / jpeg / png
    if (!/\.(jpe?g|png)$/i.test(file)) continue;

    const inputPath = path.join(SRC_DIR, file);
    const outputPath = path.join(
      OUT_DIR,
      file.replace(/\.(jpe?g|png)$/i, '.webp')
    );

    // 3. Optimise & convert
    await sharp(inputPath)
      .resize({ width: 2048, withoutEnlargement: true }) // 2 K max width
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log('✓ optimised →', outputPath);
  }
}

// run it!
main().catch((err) => {
  console.error(' optimise-images failed:', err);
  process.exit(1);
});

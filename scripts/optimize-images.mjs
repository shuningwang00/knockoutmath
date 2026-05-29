import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Max width tuned for largest on-screen size (2× retina). */
const jobs = [
  {
    dir: path.join(root, "public/programmes"),
    maxWidth: 1200,
    quality: 85,
    match: /\.jpe?g$/i,
  },
  {
    dir: path.join(root, "public/pedagogy"),
    maxWidth: 1920,
    quality: 85,
    files: ["kick-method-hero.jpg"],
  },
];

async function optimizeFile(inputPath, maxWidth, quality) {
  const parsed = path.parse(inputPath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);

  const before = (await sharp(inputPath).metadata()).width;
  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outputPath);

  const { size: afterBytes } = await import("fs/promises").then((fs) =>
    fs.stat(outputPath),
  );
  const beforeBytes = (await import("fs/promises").then((fs) => fs.stat(inputPath))).size;

  if (parsed.ext.toLowerCase() !== ".webp") {
    await unlink(inputPath);
  }

  console.log(
    `${path.basename(inputPath)} → ${path.basename(outputPath)} (${formatBytes(beforeBytes)} → ${formatBytes(afterBytes)}, ${before}px wide)`,
  );

  return outputPath;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

for (const job of jobs) {
  const files = job.files
    ? job.files.map((name) => path.join(job.dir, name))
    : (await readdir(job.dir))
        .filter((name) => job.match.test(name))
        .map((name) => path.join(job.dir, name));

  for (const file of files) {
    await optimizeFile(file, job.maxWidth, job.quality);
  }
}

console.log("Done.");

import sharp from "sharp";
import { mkdir } from "fs/promises";
import path from "path";

const width = 1200;
const height = 630;

const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f6f4ef"/>
  <text x="72" y="140" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="900" fill="#000000">KNOCKOUT</text>
  <text x="72" y="230" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="900" fill="#f97316">MATH</text>
  <text x="72" y="430" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="700" fill="#18181b">Multiply Confidence. Subtract Fear.</text>
  <text x="72" y="490" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="600" fill="#52525b">Secondary · IP · JC · Bukit Timah, Singapore</text>
  <rect x="72" y="540" width="48" height="6" fill="#f97316"/>
  <text x="132" y="555" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="2" fill="#71717a">EX-MOE TUTORS · KICK METHOD</text>
</svg>`;

const outDir = path.join(process.cwd(), "public/og");
const outFile = path.join(outDir, "share.png");

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(outFile);

console.log(`Wrote ${outFile}`);

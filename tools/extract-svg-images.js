const fs = require("fs");
const path = require("path");

const [, , sourceFile, outputDir] = process.argv;

if (!sourceFile || !outputDir) {
  console.error("Usage: node tools/extract-svg-images.js <svg-file> <output-dir>");
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const svg = fs.readFileSync(sourceFile, "utf8");
const imageRegex =
  /<image id="(image(\d+)_([^"]+))" width="(\d+)" height="(\d+)"[^>]*xlink:href="data:image\/png;base64,([^"]+)"/g;

let match;
let count = 0;

while ((match = imageRegex.exec(svg))) {
  count += 1;
  const imageName = `image${match[2]}`;
  const key = match[3];
  const width = match[4];
  const height = match[5];
  const data = match[6];
  const filename = `${String(count).padStart(2, "0")}_${imageName}_${key}_${width}x${height}.png`;

  fs.writeFileSync(path.join(outputDir, filename), Buffer.from(data, "base64"));
  console.log(filename);
}

console.log(`extracted ${count}`);

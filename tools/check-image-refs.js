const fs = require("fs");

const [, , htmlFile] = process.argv;

if (!htmlFile) {
  console.error("Usage: node tools/check-image-refs.js <html-file>");
  process.exit(1);
}

const html = fs.readFileSync(htmlFile, "utf8");
const refs = [];

for (const regex of [
  /src="([^"]*assets\/images\/[^"]+)"/g,
  /url\("([^"]*assets\/images\/[^"]+)"\)/g,
]) {
  let match;
  while ((match = regex.exec(html))) {
    refs.push(match[1]);
  }
}

const missing = refs.filter((ref) => !fs.existsSync(ref));

console.log(`image refs ${refs.length}`);
console.log(`missing ${missing.length}`);

if (missing.length) {
  console.log(missing.join("\n"));
  process.exit(1);
}

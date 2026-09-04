const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "cpe.html");
let html = fs.readFileSync(file, "utf8");
const crlf = html.includes("\r\n");
html = html.replace(/\r\n/g, "\n");

const marker = 'class="wasteheat-metric wasteheat-metric-savings"';
const start = html.indexOf(marker);
if (start < 0) {
  console.error("savings not found");
  process.exit(1);
}

const open = html.lastIndexOf("<div", start);
let i = open;
let depth = 0;
let end = -1;
while (i < html.length) {
  if (html.startsWith("<div", i)) {
    depth++;
    i += 4;
    continue;
  }
  if (html.startsWith("</div>", i)) {
    depth--;
    if (depth === 0) {
      end = i + 6;
      break;
    }
    i += 6;
    continue;
  }
  i++;
}

if (end < 0) {
  console.error("could not find end of savings block");
  process.exit(1);
}

const block = html.slice(open, end).trim();
html = html.slice(0, open) + html.slice(end);

const roiMarker = 'class="wasteheat-metric wasteheat-metric-roi"';
const roi = html.indexOf(roiMarker);
if (roi < 0) {
  console.error("roi not found");
  process.exit(1);
}
const roiOpen = html.lastIndexOf("<div", roi);
html = html.slice(0, roiOpen) + block + "\n            " + html.slice(roiOpen);

// Ensure savings has absolute positioning like the other chips (desktop)
if (!block.includes("position: absolute")) {
  html = html.replace(
    'class="wasteheat-metric wasteheat-metric-savings"\n                  style="\n                    width: 257px;',
    'class="wasteheat-metric wasteheat-metric-savings"\n                  style="\n                    position: absolute;\n                    top: 26%;\n                    left: -8%;\n                    width: 257px;'
  );
}

if (crlf) html = html.replace(/\n/g, "\r\n");
fs.writeFileSync(file, html);
console.log("OK: moved savings metric to hero-visual level");

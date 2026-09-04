const fs = require("fs");
const path = "F-gas-compliance-solutions.html";
let html = fs.readFileSync(path, "utf8").replace(/\r\n/g, "\n");

// Fix results CSS conflict (match floating-HP pattern)
const badOld = `      .client-results div:has(> .client-result-photo) {
        aspect-ratio: 1450 / 922;
        height: auto !important;
        padding: 0 !important;
        background: transparent !important;
        border: 0 !important;
        overflow: hidden;
      }
      .client-results .client-result-photo {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        border-radius: 32px;
        object-fit: cover !important;
      }`;

const goodOld = `      .client-results div:has(> .client-result-photo):not(.hp-result-visual--figma) {
        aspect-ratio: 1450 / 922;
        height: auto !important;
        padding: 0 !important;
        background: transparent !important;
        border: 0 !important;
        overflow: hidden;
      }
      .client-results .client-result-photo:not(.hp-result-card-shot) {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        border-radius: 32px;
        object-fit: cover !important;
      }
      .client-results .hp-result-visual--figma {
        aspect-ratio: auto !important;
        min-height: 0 !important;
        height: auto !important;
        border: 0 !important;
        background: transparent !important;
        overflow: visible !important;
      }
      .client-results .hp-result-visual--figma .hp-result-card-shot {
        position: static !important;
        inset: auto !important;
        left: auto !important;
        right: auto !important;
        width: 100% !important;
        height: auto !important;
        object-fit: contain !important;
        border-radius: 34px;
        display: block;
      }`;

if (html.includes(badOld)) {
  html = html.replace(badOld, goodOld);
  console.log("OK: fixed results CSS conflict");
} else if (html.includes(":not(.hp-result-visual--figma)")) {
  console.log("SKIP: results CSS already fixed");
} else {
  console.error("MISSING: old results CSS block");
  process.exitCode = 1;
}

// Restyle table headers to match Figma + bump cache
html = html.replace(
  `.fgas-compare-table th:nth-child(2) { background: #fef2f2; }
      .fgas-compare-table th:nth-child(3) { background: #fff7ed; }`,
  `.fgas-compare-table th:nth-child(1) { background: #f8fafc; color: #475569; }
      .fgas-compare-table th:nth-child(2) { background: #1f252e; color: #fff; }
      .fgas-compare-table th:nth-child(3) { background: #fff7ed; color: #1f252e; }
      .fgas-compare-table td:nth-child(2) { background: #fafafa; }`
);
console.log("OK: table header colors");

// Replace HTML table body with Figma card image (pixel match) while keeping title/copy
const tableStart = html.indexOf('<div style="overflow-x:auto">');
const tableEnd = html.indexOf('<p class="fgas-sources">');
if (tableStart > 0 && tableEnd > tableStart) {
  const replacement = `<div style="overflow-x:auto;border-radius:24px;border:1px solid #e2e8f0;background:#fff">
              <img
                src="assets/images/fgas/hfc-hfo-table.png"
                alt="Tableau comparatif HFC contre HFO"
                style="display:block;width:100%;height:auto"
              />
            </div>
            `;
  html = html.slice(0, tableStart) + replacement + html.slice(tableEnd);
  console.log("OK: table -> figma image");
} else {
  console.error("MISSING: table block");
  process.exitCode = 1;
}

html = html.replace(
  'href="solution-detail.css?v=figma-fgas-content"',
  'href="solution-detail.css?v=figma-fgas-fix1"'
);

fs.writeFileSync(path, html.replace(/\n/g, "\r\n"));
console.log("done");

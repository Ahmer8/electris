const fs = require("fs");
const files = [
  "WasteHeatRecoverySolutions.html",
  "cpe.html",
  "cascade.html",
  "solution-gtb.html",
  "destratification-air.html",
  "F-gas-compliance-solutions.html",
  "solutions-regulation-haute-pression-flottante.html",
];
const next = 'href="solution-detail.css?v=figma-responsive-all"';
for (const f of files) {
  let h = fs.readFileSync(f, "utf8");
  const updated = h.replace(/href="solution-detail\.css\?v=[^"]+"/, next);
  if (updated === h) {
    console.log("MISS", f);
  } else {
    fs.writeFileSync(f, updated);
    console.log("OK", f);
  }
}

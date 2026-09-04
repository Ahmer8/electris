const fs = require("fs");
const h = fs.readFileSync("F-gas-compliance-solutions.html", "utf8");
const markers = [
  ["title", "Conformité F-Gas"],
  ["hero text", "viseur"],
  ["hero img", "fgas/hero.png"],
  ["indep", "affranchir"],
  ["table", "HFC contre HFO"],
  ["sectors fgas", "fgas/sectors"],
  ["results fgas", "fgas/results/case1"],
  ["audit", "fgas/audit-cta"],
  ["export shell", "gtb-export-shell"],
  ["full page png", "f-gas-compliance-solutions.png"],
  ["cascade leftover", "assets/images/cascade/"],
  ["wasteheat-page", 'class="wasteheat-page"'],
];
for (const [k, v] of markers) console.log((h.includes(v) ? "Y" : "N"), k, v);
// Is export shell visible / before real content?
const exportIdx = h.indexOf("gtb-export-shell");
const heroIdx = h.indexOf("Vos r");
console.log("export idx", exportIdx, "hero idx", heroIdx);
console.log("body class snippet:", h.match(/<body[^>]*>/)?.[0]);
// check if gtb-export-shell is display none
const styleHasHide = /gtb-export-shell[\s\S]{0,200}display:\s*none/.test(h) || /\\.gtb-export-shell[^}]*display:\\s*none/.test(h);
console.log("export hidden in page css?", /gtb-export-shell/.test(h) && /display:\s*none\s*!important/.test(h));

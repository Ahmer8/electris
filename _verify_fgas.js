const fs = require("fs");
const h = fs.readFileSync("F-gas-compliance-solutions.html", "utf8");
const checks = [
  "Vos réfrigérants sont dans le viseur",
  "GWP > 750",
  "Fin du R404A",
  "S'affranchir des fluides",
  "compte à rebours",
  "HFC contre HFO",
  "Grande Distribution",
  "Industrie agroalimentaire",
  "Datacenters",
  "Usine de réfrigération",
  "Entrepôt de stockage à froid",
  "Établissement de santé",
  "Audit & inventaire",
  "Remplacement / retrofit",
  "fgas/audit-cta.png",
  "cascade/",
  "chaudi",
  "Comment fonctionne la cascade",
];
for (const c of checks) console.log(h.includes(c) ? "Y" : "N", c);
const idx = h.indexOf("Remplacement / retrofit");
console.log("---\n", h.slice(idx, idx + 500));
const m = [...h.matchAll(/cascade\/[^"'\\\s>]+/g)].map((x) => x[0]);
console.log("cascade leftovers:", [...new Set(m)]);

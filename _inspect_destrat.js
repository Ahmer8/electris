const fs = require("fs");
let h = fs.readFileSync("destratification-air.html", "utf8");
const markers = [
  "<title>",
  "Votre chaudi",
  "Vos systèmes",
  "Votre chaleur",
  "Indépendance",
  "Comment fonctionne",
  "Audit thermique",
  "Pression fixe",
  "piège",
  "cascade",
  "sector-card",
  "client-results",
  "hp-results",
  "wasteheat-hero",
  "assets/images/",
];
for (const m of markers) {
  console.log(m, h.indexOf(m));
}
const dem = h.indexOf("Demander un audit");
fs.writeFileSync("_d_hero.txt", h.slice(dem - 900, dem + 100));
const indep = h.indexOf("Indépendance");
fs.writeFileSync("_d_indep.txt", h.slice(indep, indep + 800));
const how = h.indexOf("Comment fonctionne");
fs.writeFileSync("_d_how.txt", h.slice(how - 200, how + 600));
console.log("len", h.length);

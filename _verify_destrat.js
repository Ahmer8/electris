const fs = require("fs");
const h = fs.readFileSync("destratification-air.html", "utf8");
console.log("how title?", h.includes("d&eacute;stratification"));
console.log("eval?", h.includes("&Eacute;valuation") || h.includes("Évaluation"));
const m = [...h.matchAll(/cascade\/[^"'\\\s]+/g)].map((x) => x[0]);
console.log("cascade leftovers:", [...new Set(m)]);
console.log("has zero arret", h.includes("Zéro arrêt") || h.includes("Z&eacute;ro"));
const idx = h.indexOf("Installation des brasseurs");
console.log(h.slice(idx, idx + 350));

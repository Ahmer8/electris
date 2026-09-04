const fs = require("fs");
const h = fs.readFileSync("destratification-air.html", "utf8");
const imgs = [...h.matchAll(/assets\/images\/destrat\/[^"'\\\s>]+/g)].map((m) => m[0]);
const uniq = [...new Set(imgs)];
let miss = 0;
for (const p of uniq) {
  if (!fs.existsSync(p)) {
    console.log("MISSING", p);
    miss++;
  }
}
console.log("checked", uniq.length, "missing", miss);
uniq.forEach((p) => console.log(p));

const fs = require("fs");
const path = "destratification-air.html";
let html = fs.readFileSync(path, "utf8").replace(/\r\n/g, "\n");

const reps = [
  [
    `Zéro arrêt de production : installation en bypass`,
    `Mise en service sans interruption d'activité`,
  ],
  [
    `src="assets/images/cascade/image2_2153_18060_1344x768.png"`,
    `src="assets/images/destrat/contact-side.png"`,
  ],
];

for (const [a, b] of reps) {
  if (!html.includes(a)) {
    console.log("missing", a.slice(0, 40));
  } else {
    html = html.replace(a, b);
    console.log("ok", b.slice(0, 50));
  }
}

fs.writeFileSync(path, html.replace(/\n/g, "\r\n"));

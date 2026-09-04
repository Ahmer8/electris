const fs = require("fs");

const SOLUTION_FOOTER = `                <section class="footer-col">
                  <h5>SOLUTIONS</h5>
                  <ul class="list-unstyled d-flex flex-column">
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="WasteHeatRecoverySolutions.html"
                        >R&eacute;cup&eacute;ration de chaleur fatale</a
                      >
                    </li>
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="solution-gtb.html"
                        >Gestion technique du b&acirc;timent (GTB)</a
                      >
                    </li>
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="solution-gtb.html">Classe A</a>
                    </li>
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="cascade.html"
                        >Solution de cascade pompe &agrave; chaleur</a
                      >
                    </li>
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="F-gas-compliance-solutions.html">Conformit&eacute; F-Gas</a>
                    </li>
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="destratification-air.html">D&eacute;stratification d&#39;air</a>
                    </li>
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="solutions-regulation-haute-pression-flottante.html"
                        >R&eacute;gulation haute pression flottante</a
                      >
                    </li>
                    <li>
                      <span class="chevron">&#8250;</span
                      ><a href="cpe.html">Contrat de performance (CPE)</a>
                    </li>
                  </ul>
                </section>`;

const SECTOR_TRACK = `            <div class="sector-track">
              <a class="sector-card" href="non-refrigerated-warehouse.html">
                <img src="assets/images/destrat/sectors/sector-1.png" alt="Entrepôts non réfrigérés" />
                <figcaption>Entrepôts non réfrigérés</figcaption>
              </a>
              <a class="sector-card" href="13-secteurs-industrie.html">
                <img src="assets/images/destrat/sectors/sector-2.png" alt="Industrie" />
                <figcaption>Industrie</figcaption>
              </a>
              <a class="sector-card" href="10-secteurs-grande-distribution.html">
                <img src="assets/images/destrat/sectors/sector-3.png" alt="Grande Distribution &amp; GDA" />
                <figcaption>Grande Distribution &amp; GDA</figcaption>
              </a>
              <a class="sector-card" href="16-secteurs-centre-commercial.html">
                <img src="assets/images/destrat/sectors/sector-4.png" alt="Centres commerciaux" />
                <figcaption>Centres commerciaux</figcaption>
              </a>
              <a class="sector-card" href="secteurs-scolaire.html">
                <img src="assets/images/destrat/sectors/sector-5.png" alt="Établissements scolaires" />
                <figcaption>Établissements scolaires</figcaption>
              </a>
              <a class="sector-card" href="cold-stoarage-warehouse.html">
                <img src="assets/images/destrat/sectors/sector-6.png" alt="Entrepôts frigorifiques" />
                <figcaption>Entrepôts frigorifiques</figcaption>
              </a>
            </div>`;

// --- solutions.html: wrap photos + fix titles/links ---
{
  let h = fs.readFileSync("solutions.html", "utf8");
  const cards = [
    {
      title: "Récupération de chaleur fatale",
      href: "WasteHeatRecoverySolutions.html",
      photo: 'src="assets/images/solutions-page/figma/solution-01.png"',
    },
    {
      titleFrom: "Décarbonation thermique",
      titleTo: "Solution de cascade pompe à chaleur",
      href: "cascade.html",
      photo: 'src="assets/images/solutions-page/figma/solution-02.png"',
    },
    {
      title: "GTB Intelligente Classe A",
      href: "solution-gtb.html",
      photo: 'src="assets/images/solutions-page/figma/solution-03.png"',
    },
    {
      title: "Conformité F-Gas",
      href: "F-gas-compliance-solutions.html",
      photo: 'src="assets/images/solutions-page/figma/solution-04.png"',
    },
    {
      title: "Déstratification d'air",
      href: "destratification-air.html",
      photo: 'src="assets/images/solutions-page/figma/solution-05.png"',
    },
    {
      title: "Régulation haute pression flottante",
      href: "solutions-regulation-haute-pression-flottante.html",
      photo: 'src="assets/images/solutions-page/figma/solution-06.png"',
    },
    {
      title: "Contrat de Performance (CPE)",
      href: "cpe.html",
      photo: 'src="assets/images/solutions-page/figma/solution-07.png"',
    },
  ];

  if (h.includes("Décarbonation thermique")) {
    h = h.replace("Décarbonation thermique", "Solution de cascade pompe à chaleur");
    console.log("OK solutions title cascade");
  }

  // Wrap each solution-photo in an anchor if not already
  for (const c of cards) {
    const bare = `<img class="solution-photo" ${c.photo}`;
    const wrapped = `<a class="solution-photo-link" href="${c.href}" aria-label="${c.titleTo || c.title}"><img class="solution-photo" ${c.photo}`;
    if (h.includes(bare) && !h.includes(`href="${c.href}" aria-label`)) {
      h = h.replace(bare, wrapped);
      // close the anchor after the img tag
      const idx = h.indexOf(wrapped);
      const imgEnd = h.indexOf("/>", idx);
      if (imgEnd > 0 && !h.slice(imgEnd, imgEnd + 20).includes("</a>")) {
        h = h.slice(0, imgEnd + 2) + "</a>" + h.slice(imgEnd + 2);
      }
      console.log("OK photo link", c.href);
    } else {
      console.log("skip photo", c.href);
    }
  }

  // Footer on solutions.html - expand with all solution pages
  const oldFooterSolutions = /<section class="footer-col"><h5>SOLUTIONS<\/h5><ul class="list-unstyled d-flex flex-column">[\s\S]*?<\/ul><\/section>/;
  const newFooter =
    `<section class="footer-col"><h5>SOLUTIONS</h5><ul class="list-unstyled d-flex flex-column">` +
    `<li><span class="chevron">›</span><a href="WasteHeatRecoverySolutions.html">Récupération de chaleur fatale</a></li>` +
    `<li><span class="chevron">›</span><a href="cascade.html">Solution de cascade pompe à chaleur</a></li>` +
    `<li><span class="chevron">›</span><a href="solution-gtb.html">Gestion technique du bâtiment (GTB)</a></li>` +
    `<li><span class="chevron">›</span><a href="solution-gtb.html">Classe A</a></li>` +
    `<li><span class="chevron">›</span><a href="F-gas-compliance-solutions.html">Conformité F-Gas</a></li>` +
    `<li><span class="chevron">›</span><a href="destratification-air.html">Déstratification d'air</a></li>` +
    `<li><span class="chevron">›</span><a href="solutions-regulation-haute-pression-flottante.html">Régulation haute pression flottante</a></li>` +
    `<li><span class="chevron">›</span><a href="cpe.html">Contrat de performance (CPE)</a></li>` +
    `</ul></section>`;
  if (oldFooterSolutions.test(h)) {
    h = h.replace(oldFooterSolutions, newFooter);
    console.log("OK solutions.html footer");
  }

  fs.writeFileSync("solutions.html", h);
}

// --- destratification-air.html sectors + footer ---
{
  let h = fs.readFileSync("destratification-air.html", "utf8").replace(/\r\n/g, "\n");

  const start = h.indexOf('<div class="sector-track">');
  const end = h.indexOf("</div>", h.lastIndexOf("</figure>", h.indexOf("wasteheat-industries") > 0 ? h.indexOf('class="sector-track"') + 5000 : start + 5000));
  // Better: find sector-track block
  const st = h.indexOf('<div class="sector-track">');
  const stEnd = h.indexOf("</div>", h.indexOf("</figure>", st + 1));
  // find last </figure> then closing </div> of sector-track
  let lastFig = st;
  while (true) {
    const n = h.indexOf("</figure>", lastFig + 1);
    if (n < 0 || n > st + 3000) break;
    lastFig = n;
  }
  const trackClose = h.indexOf("</div>", lastFig);
  if (st < 0 || trackClose < 0) {
    console.error("FAIL sector track", st, trackClose);
  } else {
    h = h.slice(0, st) + SECTOR_TRACK + h.slice(trackClose + 6);
    console.log("OK destrat sectors");
  }

  // Replace SOLUTIONS footer section
  const footRe =
    /<section class="footer-col">\s*<h5>SOLUTIONS<\/h5>[\s\S]*?<\/section>\s*<section class="footer-col">\s*<h5>SECTEURS<\/h5>/;
  if (footRe.test(h)) {
    h = h.replace(footRe, SOLUTION_FOOTER + `\n                <section class="footer-col">\n                  <h5>SECTEURS</h5>`);
    console.log("OK destrat footer");
  } else {
    console.log("FAIL destrat footer match");
  }

  // Also fix SECTEURS footer links on destrat to real pages
  h = h.replace(
    /<a href="index.html#sectors">Grande distribution<\/a>/g,
    '<a href="10-secteurs-grande-distribution.html">Grande distribution</a>'
  );
  h = h.replace(
    /<a href="index.html#sectors">Industrie<\/a>/g,
    '<a href="13-secteurs-industrie.html">Industrie</a>'
  );

  fs.writeFileSync("destratification-air.html", h.replace(/\n/g, "\r\n"));
}

// Fix SOLUTIONS footers on other solution pages that dump to solutions.html
const solutionPages = [
  "cascade.html",
  "cpe.html",
  "solutions-regulation-haute-pression-flottante.html",
  "WasteHeatRecoverySolutions.html",
  "solution-gtb.html",
  "F-gas-compliance-solutions.html",
];

const footRe2 =
  /<section class="footer-col">\s*<h5>SOLUTIONS<\/h5>[\s\S]*?<\/section>\s*<section class="footer-col">\s*<h5>SECTEURS<\/h5>/;

for (const page of solutionPages) {
  if (!fs.existsSync(page)) {
    console.log("missing", page);
    continue;
  }
  let h = fs.readFileSync(page, "utf8").replace(/\r\n/g, "\n");
  if (!footRe2.test(h)) {
    console.log("no footer match", page);
    continue;
  }
  h = h.replace(footRe2, SOLUTION_FOOTER + `\n                <section class="footer-col">\n                  <h5>SECTEURS</h5>`);
  fs.writeFileSync(page, h.replace(/\n/g, "\r\n"));
  console.log("OK footer", page);
}

console.log("DONE");

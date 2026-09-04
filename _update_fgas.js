const fs = require("fs");
const path = "F-gas-compliance-solutions.html";
let html = fs.readFileSync(path, "utf8").replace(/\r\n/g, "\n");

function replaceOnce(from, to, label) {
  if (html.includes(to) && !html.includes(from)) {
    console.log("SKIP (done):", label);
    return;
  }
  if (!html.includes(from)) {
    console.error("MISSING:", label);
    process.exitCode = 1;
    return;
  }
  html = html.replace(from, to);
  console.log("OK:", label);
}

function replaceBetween(startMarker, endMarker, replacement, label) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    if (html.includes("Usine de réfrigération de grande surface") && html.includes('class="wasteheat-service"')) {
      console.log("SKIP (done):", label);
      return;
    }
    console.error("MISSING RANGE:", label, { start, end });
    process.exitCode = 1;
    return;
  }
  html = html.slice(0, start) + replacement + html.slice(end);
  console.log("OK:", label);
}

replaceOnce(
  "<title>Pompes a chaleur en cascade | Electris</title>",
  "<title>Conformité F-Gas | Electris</title>",
  "title"
);

replaceOnce(
  'href="solution-detail.css?v=figma-mobile-4"',
  'href="solution-detail.css?v=figma-fgas-content"',
  "css cache"
);

replaceOnce(
  'background-image: url("assets/images/cascade/image1_2153_18060_1254x1254.png") !important;',
  'background-image: url("assets/images/fgas/hero.png") !important;',
  "hero css bg"
);

if (!html.includes("hp-result-visual--figma")) {
  const insertAfter = `      /* The three client assets are complete Figma cards (photo + metrics). */`;
  const cssBlock = `      /* The three client assets are complete Figma cards (photo + metrics). */
      .hp-result-visual--figma {
        min-height: 0 !important;
        border: 0 !important;
        background: transparent !important;
        overflow: visible !important;
        aspect-ratio: auto !important;
        height: auto !important;
        padding: 0 !important;
      }
      .hp-result-visual--figma .hp-result-card-shot {
        position: static !important;
        inset: auto !important;
        width: 100% !important;
        height: auto !important;
        object-fit: contain !important;
        border-radius: 34px;
        display: block;
      }
      .hp-results-inner { width: 100%; }
      .hp-result-row { width: 100%; }
      .hp-result-cta:hover { filter: brightness(0.98); }
      .fgas-compare {
        align-self: stretch;
        background: #fff;
        padding: 96px 116px;
      }
      .fgas-compare-inner {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 48px;
      }
      .fgas-compare-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid #e2e8f0;
        border-radius: 24px;
        overflow: hidden;
        background: #fff;
      }
      .fgas-compare-table th,
      .fgas-compare-table td {
        padding: 18px 24px;
        text-align: left;
        vertical-align: top;
        border-bottom: 1px solid #e2e8f0;
        font-size: 15px;
        line-height: 1.45;
        color: #0f172a;
      }
      .fgas-compare-table th {
        background: #f8fafc;
        font-weight: 700;
        font-size: 16px;
      }
      .fgas-compare-table th:nth-child(2) { background: #fef2f2; }
      .fgas-compare-table th:nth-child(3) { background: #fff7ed; }
      .fgas-compare-table tr:last-child td { border-bottom: 0; }
      .fgas-compare-table .crit { width: 26%; font-weight: 600; color: #475569; background: #f8fafc; }
      .fgas-compare-table .danger-row td { background: #fff5f5; }
      .fgas-compare-table .danger-row .crit {
        border-left: 4px solid #ef4444;
        padding-left: 20px;
      }
      .fgas-badge {
        display: inline-block;
        margin-top: 8px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .fgas-badge--danger { background: #fee2e2; color: #b91c1c; }
      .fgas-badge--warn { background: #ffedd5; color: #c2410c; }
      .fgas-sources {
        color: #64748b;
        font-size: 14px;
        line-height: 1.5;
        padding: 16px 24px;
        background: #f8fafc;
        border-radius: 16px;
      }
      @media (max-width: 1100px) {
        .hp-result-row,
        .hp-result-row--reverse { flex-direction: column !important; }
        .hp-result-copy,
        .hp-result-visual { width: 100% !important; max-width: 100% !important; }
        .fgas-compare { padding: 64px 24px; }
        .fgas-compare-table { display: block; overflow-x: auto; }
      }`;
  replaceOnce(insertAfter, cssBlock, "results+table css");
}

// --- hero ---
replaceOnce(
  `                Votre chaudi&egrave;re gaz vit ses <br />derni&egrave;res ann&eacute;es.
                <span style="color: #1212ff"
                  >Remplacez-la par des kWh, <br />pas du combustible.</span
                >
              </span>
              <span style="color: #000000; font-size: 20px">
                Une cascade de pompes &agrave; chaleur produit chauffage et eau chaude
                sanitaire &agrave; partir d&#39;&eacute;lectricit&eacute;, jusqu&#39;&agrave; 78-85 &deg;C selon les besoins.
                C&#39;est de la chaleur d&eacute;carbon&eacute;e, sans combustion.
              </span>`,
  `                Vos r&eacute;frig&eacute;rants sont dans le viseur du r&eacute;gulateur.
                <span style="color: #1212ff"> Agissez avant l&#39;interdiction.</span>
              </span>
              <span style="color: #000000; font-size: 20px">
                Le r&egrave;glement F-Gas (UE) 2024/573 &eacute;limine progressivement les fluides &agrave; fort GWP. Nous planifions le remplacement de vos installations frigorifiques par des solutions durables : CO&#8322;, NH&#8323;, R290 et R1234ze. Vous s&eacute;curisez vos op&eacute;rations. Vous &eacute;vitez les arr&ecirc;ts li&eacute;s aux p&eacute;nuries de fluides.
              </span>`,
  "hero text"
);

replaceOnce(
  `src="assets/images/solutions-page/waste-heat-figma-arrow.png"`,
  `src="assets/images/fgas/arrow.svg"`,
  "hero arrow"
);

replaceOnce(
  `background-image: url(&quot;assets/images/cascade/image1_2153_18060_1254x1254.png&quot;);`,
  `background-image: url(&quot;assets/images/fgas/hero.png&quot;);`,
  "hero inline bg"
);

replaceOnce(
  `                      src="assets/images/solutions-page/waste-heat-figma-savings.png"
                      style="width: 21px; height: 21px; object-fit: fill"
                    />
                    <span style="color: #475466; font-size: 15px">
                      &Eacute;missions CO2
                    </span>
                  </div>
                  <div
                    style="
                      height: 1px;
                      align-self: stretch;
                      background: #e2e8f0;
                      margin-bottom: 6px;
                    "
                  ></div>
                  <div
                    style="
                      align-self: stretch;
                      display: flex;
                      align-items: flex-start;
                      gap: 9px;
                    "
                  >
                    <span
                      style="color: #0f1728; font-size: 28px; font-weight: bold"
                    >
                      -60 &agrave; -90 %
                    </span>
                    <span
                      style="color: #475569; font-size: 14px; margin-top: 23px"
                    >
                      R&eacute;duction
                    </span>
                  </div>`,
  `                      src="assets/images/fgas/icon-leaf.svg"
                      style="width: 21px; height: 21px; object-fit: fill"
                    />
                    <span style="color: #475466; font-size: 15px">
                      Fluides exclus de la maintenance &agrave; partir de 2032
                    </span>
                  </div>
                  <div
                    style="
                      height: 1px;
                      align-self: stretch;
                      background: #e2e8f0;
                      margin-bottom: 6px;
                    "
                  ></div>
                  <div
                    style="
                      align-self: stretch;
                      display: flex;
                      align-items: flex-start;
                      gap: 9px;
                    "
                  >
                    <span
                      style="color: #0f1728; font-size: 28px; font-weight: bold"
                    >
                      GWP &gt; 750
                    </span>
                  </div>`,
  "metric savings"
);

replaceOnce(
  `                  src="assets/images/solutions-page/waste-heat-figma-roi.png"
                  style="width: 21px; height: 21px; object-fit: fill"
                />
                <span style="color: #475466; font-size: 15px">
                  ROI moyen constaté
                </span>
              </div>
              <div
                style="height: 1px; align-self: stretch; background: #e2e8f0"
              ></div>
              <span style="color: #0f1728; font-size: 28px; font-weight: bold">
                3-5 ans
              </span>`,
  `                  src="assets/images/fgas/icon-roi.svg"
                  style="width: 21px; height: 21px; object-fit: fill"
                />
                <span style="color: #475466; font-size: 15px">
                  Fin du R404A recyclé
                </span>
              </div>
              <div
                style="height: 1px; align-self: stretch; background: #e2e8f0"
              ></div>
              <span style="color: #0f1728; font-size: 28px; font-weight: bold">
                2023
              </span>`,
  "metric roi"
);

replaceOnce(
  `                  src="assets/images/solutions-page/waste-heat-figma-capex.png"
                  style="width: 21px; height: 21px; object-fit: fill"
                />
                <span style="color: #475466; font-size: 15px">
                  Capex sous CPE
                </span>
              </div>
              <div
                style="height: 1px; align-self: stretch; background: #e2e8f0"
              ></div>
              <span style="color: #0f1728; font-size: 28px; font-weight: bold">
                0 €
              </span>`,
  `                  src="assets/images/fgas/icon-capex.svg"
                  style="width: 21px; height: 21px; object-fit: fill"
                />
                <span style="color: #475466; font-size: 15px">
                  Capex sous CPE possible
                </span>
              </div>
              <div
                style="height: 1px; align-self: stretch; background: #e2e8f0"
              ></div>
              <span style="color: #0f1728; font-size: 28px; font-weight: bold">
                0 €
              </span>`,
  "metric capex"
);

// independence
replaceOnce(
  `                  <span style="color: #475569; font-size: 24px; width: 878px">
                    Chaque chaudi&egrave;re d&eacute;branch&eacute;e, c&#39;est une facture de gaz qui dispara&icirc;t
                    et une d&eacute;pendance &agrave; l&#39;&eacute;nergie import&eacute;e qui s&#39;efface.
                  </span>
                </div>
              </div>
              <img
                src="assets/images/cascade/independence-rooftop-curved.svg"
                alt="Pompes a chaleur sur toiture a Paris"`,
  `                  <span style="color: #475569; font-size: 24px; width: 878px">
                    S&#39;affranchir des fluides import&eacute;s &agrave; fort GWP, c&#39;est s&eacute;curiser votre froid pour les quinze prochaines ann&eacute;es.
                  </span>
                </div>
              </div>
              <img
                src="assets/images/fgas/independence.png"
                alt="Conformité F-Gas"`,
  "independence"
);

replaceOnce(
  `              <img
                class="gas-market-curved-photo"
                src="assets/images/cascade/image3_2153_18060_1024x1024.png"
                alt="Installation technique de pompes a chaleur en cascade"`,
  `              <img
                class="gas-market-curved-photo"
                src="assets/images/fgas/pressure.png"
                alt="Compte à rebours réglementaire F-Gas"`,
  "pressure img"
);

replaceOnce(
  `                <span style="color: #475569; font-size: 24px">
                  Le pi&egrave;ge du tout-gaz
                </span>`,
  `                <span style="color: #475569; font-size: 24px">
                  Le compte &agrave; rebours r&eacute;glementaire
                </span>`,
  "pressure eyebrow"
);

replaceOnce(
  `                      Vous chauffez au prix d&#39;un march&eacute; que vous ne contr&ocirc;lez pas.
                    </span>
                    <span style="color: #475569; font-size: 24px; width: 635px">
                      Le prix du gaz est volatile et impos&eacute;. Tant que votre chaleur
                      d&eacute;pend d&#39;un combustible import&eacute;, votre budget &eacute;nergie reste
                      expos&eacute;. La cascade PAC vous redonne le contr&ocirc;le de votre co&ucirc;t de
                      chaleur.
                    </span>`,
  `                      Vos R404A, R410A et R134a ont une date de p&eacute;remption.
                    </span>
                    <span style="color: #475569; font-size: 24px; width: 635px">
                      La trajectoire europ&eacute;enne r&eacute;duit fortement les quotas de HFC. Les prix montent, l&#39;approvisionnement se tend, et la maintenance de certains fluides deviendra impossible. Anticiper le changement &eacute;vite les arr&ecirc;ts brutaux.
                    </span>`,
  "pressure body"
);

replaceOnce(
  `                        x2-x3 volatilit&eacute; du prix du gaz observ&eacute;e sur 5 ans
                      </span>`,
  `                        Mars 2024 Règlement (UE) 2024/573 entré en vigueur
                      </span>`,
  "bullet 1"
);

replaceOnce(
  `                        Un d&eacute;clic : changement d&#39;&eacute;metteur requis dans la plupart des
                        cas
                      </span>`,
  `                        &minus;95 % trajectoire de réduction des HFC d'ici 2030
                      </span>`,
  "bullet 2"
);

replaceOnce(
  `                        -99 % de CO2 par rapport &agrave; une chaudi&egrave;re gaz
                      </span>`,
  `                        0 interruption opérationnelle si anticipé
                      </span>`,
  "bullet 3"
);

// Replace how-it-works with HFC/HFO table
const compareHtml = `        <div class="fgas-compare">
          <div class="fgas-compare-inner">
            <div style="display:flex;flex-direction:column;gap:12px;max-width:1184px">
              <span style="color:#475569;font-size:24px">Conformité F-Gas</span>
              <span class="reference-section-title" style="color:#000;font-size:48px;font-weight:700;letter-spacing:-2.4px;line-height:1.1">HFC contre HFO : la vraie différence</span>
              <span style="color:#475569;font-size:24px;line-height:1.5">Les HFO sont présentés comme la relève des HFC. Ils règlent le problème climatique, pas le problème chimique : les deux familles sont visées par la proposition de restriction PFAS déposée à l'ECHA.</span>
            </div>
            <div style="overflow-x:auto">
              <table class="fgas-compare-table">
                <thead>
                  <tr>
                    <th>Critères d'analyse</th>
                    <th>HFC (Hydrofluorocarbures)<br><span class="fgas-badge fgas-badge--danger">Sortie programmée</span></th>
                    <th>HFO (Hydrofluorooléfines)<br><span class="fgas-badge fgas-badge--warn">Sursis réglementaire</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="crit">Fluides représentatifs</td><td>R134a, R404A, R410A, R448A, R449A, R32</td><td>Purs: R1234yf, R1234ze(E), R1233zd(E), R1336mzz(Z). Mélanges HFC: R454B, R513A, R515B, R452B</td></tr>
                  <tr><td class="crit">Structure moléculaire</td><td>Molécule saturée, très stable dans l'atmosphère</td><td>Double liaison carbone, se casse rapidement</td></tr>
                  <tr><td class="crit">Durée de vie atmosphérique</td><td>10 à 50 ans</td><td>Quelques jours à 3 semaines</td></tr>
                  <tr><td class="crit">PRG (Potentiel de Réchauffement)</td><td>675 à 3 922</td><td>1 à 7 purs, 145 à 700 mélanges HFC</td></tr>
                  <tr><td class="crit">Classement sécurité ASHRAE</td><td>A1, sauf R32 en A2L</td><td>A2L majorité, A1 pour R1233zd et R1336mzz</td></tr>
                  <tr class="danger-row"><td class="crit">Quotas F-Gas III</td><td>Soumis au phase-down: moins 75% sur 2030-2032, extinction 2050</td><td>Purs hors quotas, mélanges soumis au prorata</td></tr>
                  <tr><td class="crit">Interdictions sectorielles</td><td>Visés par tous seuils, 2500 en 2025 à 150 en 2030</td><td>Purs conformes seuil 150, mélanges &gt;150 rattrapés 2030-2032</td></tr>
                  <tr class="danger-row"><td class="crit">Statut PFAS</td><td>Dans le périmètre restriction REACH, R134a se dégrade 20% en TFA</td><td>Même périmètre, R1234yf se dégrade 100% en TFA</td></tr>
                  <tr><td class="crit">Prix du fluide</td><td>Élevé, tiré par raréfaction quotas</td><td>Plus élevé, molécules brevetées, 2-3 producteurs</td></tr>
                  <tr><td class="crit">Performance</td><td>Référence du marché</td><td>R1234yf proche R134a, R1234ze perd ~25% capacité volumétrique</td></tr>
                  <tr><td class="crit">Reprise parc existant</td><td>-</td><td>Retrofit possible R134a avec R513A ou R515B</td></tr>
                  <tr><td class="crit">Contraintes mise en œuvre</td><td>Étanchéité, registre, certification</td><td>Mêmes + règles A2L: EN 378, détection, ventilation</td></tr>
                  <tr><td class="crit">Récupération chaleur</td><td>55 à 65°C</td><td>55 à 65°C, jusqu'à 120°C avec R1336mzz en PAC haute temp et ORC</td></tr>
                  <tr class="danger-row"><td class="crit">Horizon d'exploitation</td><td>Borné à 2050, raréfaction dès aujourd'hui</td><td>Indéterminé, suspendu dossier PFAS</td></tr>
                </tbody>
              </table>
            </div>
            <p class="fgas-sources">Sources: règlement (UE) 2024/573, en vigueur depuis le 11 mars 2024; proposition de restriction PFAS déposée à l'ECHA en février 2023 par l'Allemagne, les Pays-Bas, le Danemark, la Suède et la Norvège, en cours d'instruction.</p>
          </div>
        </div>
`;

replaceBetween(
  '        <div\n          class="wasteheat-how"',
  '        <div\n          class="wasteheat-industries"',
  compareHtml,
  "hfc/hfo compare"
);

// sectors
replaceOnce(
  `            <div class="sector-track">
              <figure class="sector-card">
                <img src="assets/images/cascade/image6_2153_18060_1024x1024.png" alt="Établissements de santé" />
                <figcaption>Établissements de santé</figcaption>
              </figure>
              <figure class="sector-card">
                <img src="assets/images/cascade/image7_2153_18060_1024x1024.png" alt="Hôtellerie &amp; Clubs de vacances" />
                <figcaption>Hôtellerie &amp; Clubs de vacances</figcaption>
              </figure>
              <figure class="sector-card">
                <img src="assets/images/cascade/image8_2153_18060_1024x1024.png" alt="Immeubles de bureaux" />
                <figcaption>Immeubles de bureaux</figcaption>
              </figure>
              <figure class="sector-card">
                <img src="assets/images/cascade/image9_2153_18060_1024x1024.png" alt="Grande distribution &amp; GDA" />
                <figcaption>Grande distribution &amp; GDA</figcaption>
              </figure>
              <figure class="sector-card">
                <img src="assets/images/cascade/image10_2153_18060_1024x1024.png" alt="Établissements scolaires" />
                <figcaption>Établissements scolaires</figcaption>
              </figure>
              <figure class="sector-card">
                <img src="assets/images/cascade/image11_2153_18060_1024x1024.png" alt="Logement collectif" />
                <figcaption>Logement collectif</figcaption>
              </figure>
            </div>`,
  `            <div class="sector-track">
              <a class="sector-card" href="10-secteurs-grande-distribution.html">
                <img src="assets/images/fgas/sectors/sector-1.png" alt="Grande Distribution &amp; GDA" />
                <figcaption>Grande Distribution &amp; GDA</figcaption>
              </a>
              <a class="sector-card" href="cold-stoarage-warehouse.html">
                <img src="assets/images/fgas/sectors/sector-2.png" alt="Entrepôts frigorifiques" />
                <figcaption>Entrepôts frigorifiques</figcaption>
              </a>
              <a class="sector-card" href="11-secteurs-hotellerie.html">
                <img src="assets/images/fgas/sectors/sector-3.png" alt="Hôtellerie &amp; Hôtels-Clubs" />
                <figcaption>Hôtellerie &amp; Hôtels-Clubs</figcaption>
              </a>
              <a class="sector-card" href="12-secteurs-sante.html">
                <img src="assets/images/fgas/sectors/sector-4.png" alt="Établissements de santé" />
                <figcaption>Établissements de santé</figcaption>
              </a>
              <a class="sector-card" href="13-secteurs-industrie.html">
                <img src="assets/images/fgas/sectors/sector-5.png" alt="Industrie agroalimentaire" />
                <figcaption>Industrie agroalimentaire</figcaption>
              </a>
              <a class="sector-card" href="14-secteurs-data-centers.html">
                <img src="assets/images/fgas/sectors/sector-6.png" alt="Datacenters" />
                <figcaption>Datacenters</figcaption>
              </a>
            </div>`,
  "sectors"
);

const resultsHtml = `        <div
          class="client-results"
          style="
            align-self: stretch;
            background: #ffffff;
            padding: 96px 116px;
            margin-bottom: 1px;
            position: relative;
            overflow: hidden;
          "
        >
          <div class="hp-results-inner" style="max-width:1280px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:84px;position:relative;z-index:1">
            <div style="display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center">
              <img src="assets/images/fgas/results/logo.png" alt="" style="width:58px;height:64px;object-fit:contain" />
              <span class="reference-section-title" style="color:#000;font-size:48px;font-weight:700;letter-spacing:-2.4px;line-height:1.1">
                Résultats obtenus pour nos clients.
              </span>
            </div>

            <div class="hp-result-row" style="display:flex;align-items:center;justify-content:space-between;gap:48px;width:100%">
              <div class="hp-result-copy" style="width:490px;display:flex;flex-direction:column;gap:25px;flex-shrink:0">
                <div style="background:#f1f5f9;border-radius:34px;padding:42px;min-height:325px;box-sizing:border-box;display:flex;flex-direction:column;gap:27px">
                  <div style="display:flex;flex-direction:column;gap:8px">
                    <span style="color:#272522;font-size:32px;font-weight:700;line-height:1.26">Usine de réfrigération de grande surface.</span>
                    <span style="color:#272522;font-size:17px;line-height:1.5">Grande surface • HFC → CO₂ transcritique</span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:12px">
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px"><strong style="font-weight:700">GWP &gt; 750 ·</strong> éliminé avant la date limite</span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px"><strong style="font-weight:700">Récupération ·</strong> chaleur récupérée en parallèle</span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">Conformité prévue sans interruption.</span>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@electris.fr" class="hp-result-cta" style="display:flex;align-items:center;justify-content:center;height:97px;border-radius:77px;border:2px solid #f4f4f4;text-decoration:none;background:linear-gradient(169deg,#b2ffda 0%,#89d2af 100%)">
                  <span style="display:inline-flex;align-items:center;gap:10px;background:#fff;border-radius:32px;padding:8px 24px;box-shadow:0 1.3px 2.7px rgba(16,24,40,0.05)">
                    <span style="color:#000;font-size:16px;font-weight:600;line-height:32px;white-space:nowrap">Je veux ce résultat pour mon site</span>
                    <img src="assets/images/fgas/results/arrow.svg" alt="" style="width:20px;height:20px;object-fit:contain" />
                  </span>
                </a>
              </div>
              <div class="hp-result-visual hp-result-visual--figma" style="flex:1;min-width:0;max-width:724px;border-radius:34px;overflow:hidden;position:relative;line-height:0">
                <img class="client-result-photo hp-result-card-shot" src="assets/images/fgas/results/case1-card.png" alt="GWP > 750 éliminé, récupération chaleur, conformité sans interruption" style="display:block;width:100%;height:auto;border-radius:34px;object-fit:contain" />
              </div>
            </div>

            <div class="hp-result-row hp-result-row--reverse" style="display:flex;align-items:center;justify-content:space-between;gap:48px;width:100%">
              <div class="hp-result-visual hp-result-visual--figma" style="flex:1;min-width:0;max-width:724px;border-radius:34px;overflow:hidden;position:relative;line-height:0">
                <img class="client-result-photo hp-result-card-shot" src="assets/images/fgas/results/case2-card.png" alt="NH3/CO2, 0 interruption, transition priorisée" style="display:block;width:100%;height:auto;border-radius:34px;object-fit:contain" />
              </div>
              <div class="hp-result-copy" style="width:490px;display:flex;flex-direction:column;gap:25px;flex-shrink:0">
                <div style="background:#f1f5f9;border-radius:34px;padding:42px;min-height:325px;box-sizing:border-box;display:flex;flex-direction:column;gap:27px">
                  <div style="display:flex;flex-direction:column;gap:8px">
                    <span style="color:#272522;font-size:32px;font-weight:700;line-height:1.26">Entrepôt de stockage à froid</span>
                    <span style="color:#272522;font-size:17px;line-height:1.5">Logistique froide • réfrigérants naturels</span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:12px">
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px"><strong style="font-weight:700">NH₃ / CO₂ ·</strong> réfrigérants cibles</span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px"><strong style="font-weight:700">0 ·</strong> interruption opérationnelle</span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">Transition priorisée selon les délais réglementaires.</span>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@electris.fr" class="hp-result-cta" style="display:flex;align-items:center;justify-content:center;height:97px;border-radius:77px;border:2px solid #f4f4f4;text-decoration:none;background:linear-gradient(180deg,#9badd0 0%,#a0a1fc 100%)">
                  <span style="display:inline-flex;align-items:center;gap:10px;background:#fff;border-radius:32px;padding:8px 24px;box-shadow:0 1.3px 2.7px rgba(16,24,40,0.05)">
                    <span style="color:#000;font-size:16px;font-weight:600;line-height:32px;white-space:nowrap">Je veux ce résultat pour mon site</span>
                    <img src="assets/images/fgas/results/arrow.svg" alt="" style="width:20px;height:20px;object-fit:contain" />
                  </span>
                </a>
              </div>
            </div>

            <div class="hp-result-row" style="display:flex;align-items:center;justify-content:space-between;gap:48px;width:100%">
              <div class="hp-result-copy" style="width:490px;display:flex;flex-direction:column;gap:25px;flex-shrink:0">
                <div style="background:#f1f5f9;border-radius:34px;padding:42px;min-height:325px;box-sizing:border-box;display:flex;flex-direction:column;gap:27px">
                  <div style="display:flex;flex-direction:column;gap:8px">
                    <span style="color:#272522;font-size:32px;font-weight:700;line-height:1.26">Établissement de santé</span>
                    <span style="color:#272522;font-size:17px;line-height:1.5">Santé • systèmes de réfrigération critiques</span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:12px">
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px"><strong style="font-weight:700">Continuité ·</strong> service jamais interrompu</span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px"><strong style="font-weight:700">Faible GWP ·</strong> réfrigérants de remplacement</span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/fgas/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">Plan de transition sécurisé.</span>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@electris.fr" class="hp-result-cta" style="display:flex;align-items:center;justify-content:center;height:97px;border-radius:77px;border:2px solid #f4f4f4;text-decoration:none;background:linear-gradient(169deg,#b2ffda 0%,#89d2af 100%)">
                  <span style="display:inline-flex;align-items:center;gap:10px;background:#fff;border-radius:32px;padding:8px 24px;box-shadow:0 1.3px 2.7px rgba(16,24,40,0.05)">
                    <span style="color:#000;font-size:16px;font-weight:600;line-height:32px;white-space:nowrap">Je veux ce résultat pour mon site</span>
                    <img src="assets/images/fgas/results/arrow.svg" alt="" style="width:20px;height:20px;object-fit:contain" />
                  </span>
                </a>
              </div>
              <div class="hp-result-visual hp-result-visual--figma" style="flex:1;min-width:0;max-width:724px;border-radius:34px;overflow:hidden;position:relative;line-height:0">
                <img class="client-result-photo hp-result-card-shot" src="assets/images/fgas/results/case3-card.png" alt="Continuité, faible GWP, plan de transition sécurisé" style="display:block;width:100%;height:auto;border-radius:34px;object-fit:contain" />
              </div>
            </div>
          </div>
        </div>
`;

replaceBetween(
  '        <div\n          class="client-results"',
  '        <div\n          class="wasteheat-service"',
  resultsHtml,
  "results"
);

// timeline
replaceOnce(
  `                      Audit thermique gratuit.
                    </span>
                  </div>
                  <span
                    style="color: #0f172a; font-size: 15px; margin-bottom: 4px"
                  >
                    Mesures sur site, analyse des équipements existants
                  </span>
                  <span
                    style="color: #0f172a; font-size: 15px; margin-bottom: 4px"
                  >
                    Bilan des besoins thermiques par usage
                  </span>`,
  `                      Audit &amp; inventaire gratuits.
                    </span>
                  </div>
                  <span
                    style="color: #0f172a; font-size: 15px; margin-bottom: 4px"
                  >
                    Inventaire des fluides, charges et équipements
                  </span>
                  <span
                    style="color: #0f172a; font-size: 15px; margin-bottom: 4px"
                  >
                    Identification des fluides à fort GWP
                  </span>`,
  "timeline 1"
);

replaceOnce(
  `                        Étude technique &amp; dimensionnement.
                      </span>
                    </div>
                    <div
                      style="
                        align-self: stretch;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 4px;
                      "
                    >
                      <span style="color: #0f172a; font-size: 15px">
                        Calcul de dimensionnement des échangeurs et du ballon
                      </span>
                      <span style="color: #0f172a; font-size: 15px">
                        Bilan thermique complet, calcul des CEE mobilisables
                      </span>`,
  `                        Étude technique &amp; plan de transition.
                      </span>
                    </div>
                    <div
                      style="
                        align-self: stretch;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 4px;
                      "
                    >
                      <span style="color: #0f172a; font-size: 15px">
                        Échéances par fluide, sélection des fluides cibles
                      </span>
                      <span style="color: #0f172a; font-size: 15px">
                        Planning et calcul des CEE mobilisables
                      </span>`,
  "timeline 2"
);

// Installation step title + bullets
if (html.includes("Installation.")) {
  // try cascade install text patterns
  const installPairs = [
    [
      `Installation.\n                      </span>`,
      `Remplacement / retrofit.\n                      </span>`,
    ],
    [
      `Installation échangeur + régulation en 2 à 5 jours\n                        ouvrés`,
      `Remplacement ou retrofit des installations`,
    ],
    [
      `Zéro arrêt de production : installation en bypass`,
      `Récupération de chaleur associée le cas échéant`,
    ],
    [
      `Mise en service sans interruption d'activité`,
      `Récupération de chaleur associée le cas échéant`,
    ],
  ];
  for (const [a, b] of installPairs) {
    if (html.includes(a)) {
      html = html.replace(a, b);
      console.log("OK: install remap", b.slice(0, 40));
    }
  }
}

replaceOnce(
  `                    Suivi de performance continu
                  </span>
                  <span style="color: #0f172a; font-size: 15px">
                    Rapport de performance annuel garanti par contrat
                  </span>
                  <span style="color: #0f172a; font-size: 15px">
                    Garantie équipement dix ans + garantie de performance
                  </span>`,
  `                    Suivi continu des installations
                  </span>
                  <span style="color: #0f172a; font-size: 15px">
                    Rapport de performance annuel garanti par contrat
                  </span>
                  <span style="color: #0f172a; font-size: 15px">
                    Garantie équipement dix ans + garantie de performance
                  </span>`,
  "timeline 5"
);

replaceOnce(
  `            src="assets/images/cascade/audit-cta-curved.svg"
            alt="Commencez par l'audit gratuit"`,
  `            src="assets/images/fgas/audit-cta.png"
            alt="Commencez par l'audit gratuit — Votre fluide est-il encore autorisé demain ?"`,
  "audit cta"
);

replaceOnce(
  `src="assets/images/cascade/image2_2153_18060_1344x768.png"`,
  `src="assets/images/fgas/contact-side.png"`,
  "contact side"
);

fs.writeFileSync(path, html.replace(/\n/g, "\r\n"));
console.log("Wrote", path);

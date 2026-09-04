const fs = require("fs");
const path = "destratification-air.html";
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
    if (html.includes("Entrepôt logistique — grand volume") && html.includes('class="wasteheat-service"')) {
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

// --- head / css ---
replaceOnce(
  "<title>Pompes a chaleur en cascade | Electris</title>",
  "<title>Déstratification d'air | Electris</title>",
  "title"
);

replaceOnce(
  'href="solution-detail.css?v=figma-destrat-links"',
  'href="solution-detail.css?v=figma-destrat-content"',
  "css cache"
);

replaceOnce(
  'background-image: url("assets/images/cascade/image1_2153_18060_1254x1254.png") !important;',
  'background-image: url("assets/images/destrat/hero.png") !important;',
  "hero css bg"
);

// Add figma results CSS if missing
if (!html.includes("hp-result-visual--figma")) {
  const insertAfter = `      /* The three client assets are complete Figma cards (photo + metrics). */`;
  const cssBlock = `      /* The three client assets are complete Figma cards (photo + metrics). */
      .client-results .hp-result-visual {
        position: relative;
      }
      .hp-result-visual--figma {
        min-height: 0 !important;
        border: 0 !important;
        background: transparent !important;
        overflow: visible !important;
      }
      .hp-result-visual--figma .hp-result-card-shot {
        position: static !important;
        inset: auto !important;
        left: auto !important;
        right: auto !important;
        width: 100% !important;
        height: auto !important;
        object-fit: contain !important;
        border-radius: 34px;
        display: block;
      }
      .client-results .hp-result-visual--figma {
        aspect-ratio: auto !important;
        height: auto !important;
        padding: 0 !important;
      }
      .client-results .hp-result-visual--figma .hp-result-card-shot {
        position: static !important;
        inset: auto !important;
        width: 100% !important;
        height: auto !important;
        object-fit: contain !important;
      }
      .hp-results-inner { width: 100%; }
      .hp-result-row { width: 100%; }
      .hp-result-cta:hover { filter: brightness(0.98); }
      @media (max-width: 1100px) {
        .hp-result-row,
        .hp-result-row--reverse {
          flex-direction: column !important;
        }
        .hp-result-copy,
        .hp-result-visual {
          width: 100% !important;
          max-width: 100% !important;
        }
      }`;
  replaceOnce(insertAfter, cssBlock, "results css");
}

// --- hero copy ---
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
  `                Votre chaleur est au plafond. Vos &eacute;quipes sont au sol.
                <span style="color: #1212ff"> Nous corrigeons cela.</span>
              </span>
              <span style="color: #000000; font-size: 20px">
                Dans un espace de grand volume, l&#39;air chaud s&#39;accumule sous la toiture. La d&eacute;stratification le ram&egrave;ne l&agrave; o&ugrave; les gens travaillent &mdash; sans produire un seul kWh suppl&eacute;mentaire. Vous chauffez moins pour un meilleur confort. Le retour sur investissement est quasi imm&eacute;diat.
              </span>`,
  "hero text"
);

replaceOnce(
  `src="assets/images/solutions-page/waste-heat-figma-arrow.png"`,
  `src="assets/images/destrat/arrow.svg"`,
  "hero arrow"
);

replaceOnce(
  `background-image: url(&quot;assets/images/cascade/image1_2153_18060_1254x1254.png&quot;);`,
  `background-image: url(&quot;assets/images/destrat/hero.png&quot;);`,
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
  `                      src="assets/images/destrat/icon-leaf.svg"
                      style="width: 21px; height: 21px; object-fit: fill"
                    />
                    <span style="color: #475466; font-size: 15px">
                      Facture de chauffage
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
                      &minus;15 &agrave; &minus;25 %
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
  `                  src="assets/images/destrat/icon-roi.svg"
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
                &lt; 2 ans
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
  `                  src="assets/images/destrat/icon-capex.svg"
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
  "metric capex"
);

// --- independence ---
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
                    Le kWh le moins cher est celui que vous ne consommez pas. La d&eacute;stratification r&eacute;cup&egrave;re celui que vous avez d&eacute;j&agrave; pay&eacute;.
                  </span>
                </div>
              </div>
              <img
                src="assets/images/destrat/independence.png"
                alt="Déstratification d'air"`,
  "independence"
);

// --- problem / gradient ---
replaceOnce(
  `              <img
                class="gas-market-curved-photo"
                src="assets/images/cascade/image3_2153_18060_1024x1024.png"
                alt="Installation technique de pompes a chaleur en cascade"`,
  `              <img
                class="gas-market-curved-photo"
                src="assets/images/destrat/pressure.png"
                alt="Le gradient thermique qui coûte cher"`,
  "pressure img"
);

replaceOnce(
  `                <span style="color: #475569; font-size: 24px">
                  Le pi&egrave;ge du tout-gaz
                </span>`,
  `                <span style="color: #475569; font-size: 24px">
                  Le gradient qui vous co&ucirc;te cher
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
  `                      Jusqu&#39;&agrave; 1 &deg;C de plus par m&egrave;tre de hauteur
                    </span>
                    <span style="color: #475569; font-size: 24px; width: 635px">
                      Dans un espace de grand volume, la chaleur monte et stagne sous la toiture. Vous chauffez de l&#39;air que personne n&#39;occupe tandis que le sol reste froid. Brasser ce gradient, c&#39;est r&eacute;cup&eacute;rer de l&#39;&eacute;nergie d&eacute;j&agrave; pay&eacute;e.
                    </span>`,
  "pressure body"
);

replaceOnce(
  `                        x2-x3 volatilit&eacute; du prix du gaz observ&eacute;e sur 5 ans
                      </span>`,
  `                        +0,5 &agrave; 1 &deg;C par m&egrave;tre de hauteur (gradient thermique)
                      </span>`,
  "bullet 1"
);

replaceOnce(
  `                        Un d&eacute;clic : changement d&#39;&eacute;metteur requis dans la plupart des
                        cas
                      </span>`,
  `                        0 production de chaleur suppl&eacute;mentaire
                      </span>`,
  "bullet 2"
);

replaceOnce(
  `                        -99 % de CO2 par rapport &agrave; une chaudi&egrave;re gaz
                      </span>`,
  `                        &minus;25 % facture de chauffage [indicatif]
                      </span>`,
  "bullet 3"
);

// --- how it works ---
replaceOnce(
  `            <span style="color: #475569; font-size: 24px">
              D&eacute;carbonation thermique
            </span>`,
  `            <span style="color: #475569; font-size: 24px">
              D&eacute;stratification de l&#39;air
            </span>`,
  "how eyebrow"
);

replaceOnce(
  `                Comment fonctionne la cascade PAC ?
              </span>`,
  `                Comment fonctionne la d&eacute;stratification ?
              </span>`,
  "how title"
);

replaceOnce(
  `                <span
                  style="color: #475569; font-size: 24px; margin-right: 13px"
                >
                  Source
                </span>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BmeX3726Fy/gp4rktdp_expires_30_days.png"
                  style="
                    width: 24px;
                    height: 24px;
                    margin-right: 11px;
                    object-fit: fill;
                  "
                />
                <span
                  style="color: #475569; font-size: 24px; margin-right: 15px"
                >
                  PAC primaire
                </span>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BmeX3726Fy/th199h8h_expires_30_days.png"
                  style="
                    width: 24px;
                    height: 24px;
                    margin-right: 11px;
                    object-fit: fill;
                  "
                />
                <span
                  style="color: #475569; font-size: 24px; margin-right: 13px"
                >
                  PAC de rehausse
                </span>
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BmeX3726Fy/63bv8a8f_expires_30_days.png"
                  style="
                    width: 24px;
                    height: 24px;
                    margin-right: 11px;
                    object-fit: fill;
                  "
                />
                <span style="color: #475569; font-size: 24px">
                  Distribution
                </span>`,
  `                <span
                  style="color: #475569; font-size: 24px; margin-right: 13px"
                >
                  &Eacute;valuation
                </span>
                <img
                  src="assets/images/destrat/how-arrow.svg"
                  style="
                    width: 24px;
                    height: 24px;
                    margin-right: 11px;
                    object-fit: fill;
                  "
                />
                <span
                  style="color: #475569; font-size: 24px; margin-right: 15px"
                >
                  Positionnement
                </span>
                <img
                  src="assets/images/destrat/how-arrow.svg"
                  style="
                    width: 24px;
                    height: 24px;
                    margin-right: 11px;
                    object-fit: fill;
                  "
                />
                <span
                  style="color: #475569; font-size: 24px; margin-right: 13px"
                >
                  R&eacute;gulation
                </span>
                <img
                  src="assets/images/destrat/how-arrow.svg"
                  style="
                    width: 24px;
                    height: 24px;
                    margin-right: 11px;
                    object-fit: fill;
                  "
                />
                <span style="color: #475569; font-size: 24px">
                  Int&eacute;gration
                </span>`,
  "how flow"
);

replaceOnce(
  `          <img
            src="assets/images/cascade/image5_2153_18060_1729x790.png"
            alt="Schema de fonctionnement PAC en cascade air/eau et eau/eau"
            style="height: auto; width: 100%; align-self: stretch; object-fit: contain"
          />`,
  `          <img
            src="assets/images/destrat/how-diagram.png"
            alt="Schéma de fonctionnement de la déstratification d'air"
            style="height: auto; width: 100%; align-self: stretch; object-fit: contain"
          />`,
  "how diagram"
);

// --- results section (replace whole block) ---
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
              <img src="assets/images/destrat/results/logo.png" alt="" style="width:58px;height:64px;object-fit:contain" />
              <span class="reference-section-title" style="color:#000;font-size:48px;font-weight:700;letter-spacing:-2.4px;line-height:1.1">
                Résultats obtenus pour nos clients.
              </span>
            </div>

            <div class="hp-result-row" style="display:flex;align-items:center;justify-content:space-between;gap:48px;width:100%">
              <div class="hp-result-copy" style="width:490px;display:flex;flex-direction:column;gap:25px;flex-shrink:0">
                <div style="background:#f1f5f9;border-radius:34px;padding:42px;min-height:325px;box-sizing:border-box;display:flex;flex-direction:column;gap:27px">
                  <div style="display:flex;flex-direction:column;gap:8px">
                    <span style="color:#272522;font-size:32px;font-weight:700;line-height:1.26">Entrepôt logistique — grand volume</span>
                    <span style="color:#272522;font-size:17px;line-height:1.5">Logistique • volume en hauteur</span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:12px">
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        <strong style="font-weight:700">−15 à −25 % ·</strong> facture de chauffage [plage typique]
                      </span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        <strong style="font-weight:700">&lt; 2 ans · </strong>ROI
                      </span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        Confort amélioré aux postes de travail.
                      </span>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@electris.fr" class="hp-result-cta" style="display:flex;align-items:center;justify-content:center;height:97px;border-radius:77px;border:2px solid #f4f4f4;text-decoration:none;background:linear-gradient(169deg,#b2ffda 0%,#89d2af 100%)">
                  <span style="display:inline-flex;align-items:center;gap:10px;background:#fff;border-radius:32px;padding:8px 24px;box-shadow:0 1.3px 2.7px rgba(16,24,40,0.05)">
                    <span style="color:#000;font-size:16px;font-weight:600;line-height:32px;white-space:nowrap">Je veux ce résultat pour mon site</span>
                    <img src="assets/images/destrat/results/arrow.svg" alt="" style="width:20px;height:20px;object-fit:contain" />
                  </span>
                </a>
              </div>
              <div class="hp-result-visual hp-result-visual--figma" style="flex:1;min-width:0;max-width:724px;border-radius:34px;overflow:hidden;position:relative;line-height:0">
                <img
                  class="client-result-photo hp-result-card-shot"
                  src="assets/images/destrat/results/case1-card.png"
                  alt="−15 à −25 % facture chauffage, ROI < 2 ans, confort amélioré"
                  style="display:block;width:100%;height:auto;border-radius:34px;object-fit:contain"
                />
              </div>
            </div>

            <div class="hp-result-row hp-result-row--reverse" style="display:flex;align-items:center;justify-content:space-between;gap:48px;width:100%">
              <div class="hp-result-visual hp-result-visual--figma" style="flex:1;min-width:0;max-width:724px;border-radius:34px;overflow:hidden;position:relative;line-height:0">
                <img
                  class="client-result-photo hp-result-card-shot"
                  src="assets/images/destrat/results/case2-card.png"
                  alt="0 production chaleur supplémentaire, 0 € EPC, gradient corrigé"
                  style="display:block;width:100%;height:auto;border-radius:34px;object-fit:contain"
                />
              </div>
              <div class="hp-result-copy" style="width:490px;display:flex;flex-direction:column;gap:25px;flex-shrink:0">
                <div style="background:#f1f5f9;border-radius:34px;padding:42px;min-height:325px;box-sizing:border-box;display:flex;flex-direction:column;gap:27px">
                  <div style="display:flex;flex-direction:column;gap:8px">
                    <span style="color:#272522;font-size:32px;font-weight:700;line-height:1.26">Atelier industriel</span>
                    <span style="color:#272522;font-size:17px;line-height:1.5">Industrie • plafond haut</span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:12px">
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        <strong style="font-weight:700">0 ·</strong> production de chaleur supplémentaire
                      </span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        <strong style="font-weight:700">0 € ·</strong> investissement (EPC)
                      </span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        Gradient thermique corrigé.
                      </span>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@electris.fr" class="hp-result-cta" style="display:flex;align-items:center;justify-content:center;height:97px;border-radius:77px;border:2px solid #f4f4f4;text-decoration:none;background:linear-gradient(180deg,#9badd0 0%,#a0a1fc 100%)">
                  <span style="display:inline-flex;align-items:center;gap:10px;background:#fff;border-radius:32px;padding:8px 24px;box-shadow:0 1.3px 2.7px rgba(16,24,40,0.05)">
                    <span style="color:#000;font-size:16px;font-weight:600;line-height:32px;white-space:nowrap">Je veux ce résultat pour mon site</span>
                    <img src="assets/images/destrat/results/arrow.svg" alt="" style="width:20px;height:20px;object-fit:contain" />
                  </span>
                </a>
              </div>
            </div>

            <div class="hp-result-row" style="display:flex;align-items:center;justify-content:space-between;gap:48px;width:100%">
              <div class="hp-result-copy" style="width:490px;display:flex;flex-direction:column;gap:25px;flex-shrink:0">
                <div style="background:#f1f5f9;border-radius:34px;padding:42px;min-height:325px;box-sizing:border-box;display:flex;flex-direction:column;gap:27px">
                  <div style="display:flex;flex-direction:column;gap:8px">
                    <span style="color:#272522;font-size:32px;font-weight:700;line-height:1.26">Gymnase scolaire</span>
                    <span style="color:#272522;font-size:17px;line-height:1.5">Éducatif • grand volume</span>
                  </div>
                  <div style="display:flex;flex-direction:column;gap:12px">
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        <strong style="font-weight:700">−20 % ·</strong> chauffage [plage typique]
                      </span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        <strong style="font-weight:700">Confort ·</strong> confort sportif amélioré
                      </span>
                    </div>
                    <div style="display:flex;align-items:flex-start;gap:8px">
                      <img src="assets/images/destrat/results/check.svg" alt="" style="width:20px;height:20px;object-fit:contain;flex-shrink:0" />
                      <span style="color:#000;font-size:14px;line-height:1.2;letter-spacing:-0.28px">
                        Chaleur ramenée vers les occupants.
                      </span>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@electris.fr" class="hp-result-cta" style="display:flex;align-items:center;justify-content:center;height:97px;border-radius:77px;border:2px solid #f4f4f4;text-decoration:none;background:linear-gradient(169deg,#b2ffda 0%,#89d2af 100%)">
                  <span style="display:inline-flex;align-items:center;gap:10px;background:#fff;border-radius:32px;padding:8px 24px;box-shadow:0 1.3px 2.7px rgba(16,24,40,0.05)">
                    <span style="color:#000;font-size:16px;font-weight:600;line-height:32px;white-space:nowrap">Je veux ce résultat pour mon site</span>
                    <img src="assets/images/destrat/results/arrow.svg" alt="" style="width:20px;height:20px;object-fit:contain" />
                  </span>
                </a>
              </div>
              <div class="hp-result-visual hp-result-visual--figma" style="flex:1;min-width:0;max-width:724px;border-radius:34px;overflow:hidden;position:relative;line-height:0">
                <img
                  class="client-result-photo hp-result-card-shot"
                  src="assets/images/destrat/results/case3-card.png"
                  alt="−20 % chauffage, confort sportif, chaleur vers les occupants"
                  style="display:block;width:100%;height:auto;border-radius:34px;object-fit:contain"
                />
              </div>
            </div>
          </div>
        </div>
`;

replaceBetween(
  '        <div\n          class="client-results"',
  '        <div\n          class="wasteheat-service"',
  resultsHtml,
  "results section"
);

// --- timeline copy ---
replaceOnce(
  `                    Mesures sur site, analyse des équipements existants
                  </span>
                  <span
                    style="color: #0f172a; font-size: 15px; margin-bottom: 4px"
                  >
                    Bilan des besoins thermiques par usage
                  </span>`,
  `                    Mesure du gradient de température sur la hauteur
                  </span>
                  <span
                    style="color: #0f172a; font-size: 15px; margin-bottom: 4px"
                  >
                    Cartographie des volumes concernés
                  </span>`,
  "timeline step1"
);

replaceOnce(
  `                        Calcul de dimensionnement des échangeurs et du ballon
                      </span>
                      <span style="color: #0f172a; font-size: 15px">
                        Bilan thermique complet, calcul des CEE mobilisables
                      </span>`,
  `                        Nombre et positionnement des brasseurs d'air / gaines
                      </span>
                      <span style="color: #0f172a; font-size: 15px">
                        Bilan énergétique et calcul des CEE mobilisables
                      </span>`,
  "timeline step2"
);

// Installation bullets
if (html.includes("Installation échangeur + régulation en 2 à 5 jours")) {
  replaceOnce(
    `Installation échangeur + régulation en 2 à 5 jours
                        ouvrés`,
    `Installation des brasseurs d'air et du système de régulation`,
    "timeline install line1"
  );
}
if (html.includes("Mise en service et formation des équipes")) {
  replaceOnce(
    `Mise en service et formation des équipes`,
    `Mise en service sans interruption d'activité`,
    "timeline install line2"
  );
} else if (html.includes("Mise en service sans interruption")) {
  console.log("SKIP (done): timeline install line2");
}

// Find remaining install span near "Installation."
{
  const idx = html.indexOf("Installation.");
  if (idx > 0) {
    console.log("around Installation.:", JSON.stringify(html.slice(idx, idx + 400)));
  }
}

// --- audit CTA image ---
replaceOnce(
  `            src="assets/images/cascade/audit-cta-curved.svg"
            alt="Commencez par l'audit gratuit"`,
  `            src="assets/images/destrat/audit-cta.png"
            alt="Commencez par l'audit gratuit — Combien chauffez-vous votre plafond ?"`,
  "audit cta"
);

fs.writeFileSync(path, html.replace(/\n/g, "\r\n"));
console.log("Wrote", path, "bytes", html.length);

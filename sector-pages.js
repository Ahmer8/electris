const sectorAsset = (name) => `assets/images/secteurs/svg-extract/${name}`;

const sectorPages = {
  hotel: {
    title: "Hôtellerie",
    navLabel: "Hôtellerie",
    kicker: "Hôtellerie",
    heading: "Votre climatisation rejette de la chaleur qui pourrait chauffer l’eau de vos chambres. <strong>Nous y mettons fin.</strong>",
    intro: "Les hôtels produisent du froid toute l’année et consomment du gaz pour l’eau chaude sanitaire. Nous récupérons cette chaleur disponible pour réduire vos charges, votre empreinte carbone et votre dépendance aux énergies fossiles.",
    hero: sectorAsset("image7_2497_11043_1024x1024.png"),
    heroAlt: "Hôtel moderne",
    heroBadgeLabel: "Économies d’énergie",
    heroBadge: "jusqu’à 30 %",
    heroStatLabel: "Retour sur investissement",
    heroStat: "12–18 mois",
    operations: [
      ["Production d’eau chaude", sectorAsset("image25_2497_11043_1024x1024.png")],
      ["Climatisation", sectorAsset("image7_2497_11043_1024x1024.png")],
      ["Hôtels urbains", sectorAsset("image23_2497_11043_1024x1024.png")],
      ["Résidences hôtelières", sectorAsset("image29_2497_11043_1248x832.png")],
    ],
    technologies: [
      ["Cascade thermodynamique", "Chaleur fatale vers l’ECS", "90 % exploitable"],
      ["MCP", "Stockage de chaleur", "Disponible 24/7"],
      ["GTB IA", "Pilotage prédictif", "Confort maîtrisé"],
      ["Free cooling", "Rafraîchissement naturel", "Sans compresseur"],
      ["H/V/P flottantes", "Production haute température", "– 40 % de gaz"],
    ],
    results: {
      first: ["HÔTEL · 120 chambres", "Chaleur récupérée sur la climatisation pour alimenter l’eau chaude des chambres.", sectorAsset("image25_2497_11043_1024x1024.png")],
      second: ["SUPERMARCHÉ · 1 500 m²", "Une installation mutualisée qui réduit le gaz et valorise chaque kWh produit.", sectorAsset("image19_2497_11043_1248x832.png")],
    },
    contactImage: sectorAsset("image25_2497_11043_1024x1024.png"),
    contactAlt: "Hall d’hôtel lumineux",
  },
  health: {
    title: "Établissements de santé",
    navLabel: "Santé",
    kicker: "Établissements de santé",
    heading: "Vos groupes froids rejettent une chaleur que vous rachetez en gaz. <strong>On arrête ça.</strong>",
    intro: "Hôpitaux, cliniques et EHPAD ont des besoins de froid et de chaleur continus. Notre approche récupère l’énergie disponible sans interrompre la continuité de service ni le confort des patients.",
    hero: sectorAsset("image5_2497_11043_1248x832.png"),
    heroAlt: "Établissement de santé",
    heroBadgeLabel: "Continuité de service",
    heroBadge: "24 h / 24",
    heroStatLabel: "Retour sur investissement",
    heroStat: "18–36 mois",
    operations: [
      ["Groupes froids", sectorAsset("image9_2497_11043_1248x832.png")],
      ["Pilotage technique", sectorAsset("image10_2497_11043_1024x1024.png")],
      ["Établissements de santé", sectorAsset("image5_2497_11043_1248x832.png")],
      ["Bâtiments de soins", sectorAsset("image13_2497_11043_1248x832.png")],
    ],
    technologies: [
      ["Cascade booster", "Récupération sur le froid", "Sans interruption"],
      ["MCP", "Stockage thermique", "+ 40 % de flexibilité"],
      ["GTB IA", "Pilotage des équipements", "Confort constant"],
      ["H/V/P flottantes", "Chaleur haute température", "– 35 % de gaz"],
      ["Free cooling", "Refroidissement optimisé", "Énergie locale"],
    ],
    results: {
      first: ["ÉTABLISSEMENT DE SANTÉ · Soins aigus", "Un site de soins qui réduit le gaz tout en sécurisant ses besoins de chaleur.", sectorAsset("image5_2497_11043_1248x832.png")],
      second: ["ÉTABLISSEMENT DE SANTÉ · Pack Electris", "Froid, chauffage et pilotage réunis dans une trajectoire mesurable.", sectorAsset("image27_2497_11043_1248x832.png")],
    },
    contactImage: sectorAsset("image27_2497_11043_1248x832.png"),
    contactAlt: "Couloir d’un établissement de santé",
  },
  industry: {
    title: "Industrie",
    navLabel: "Industrie",
    kicker: "Industrie",
    heading: "Votre procédé rejette de la chaleur beaucoup. <strong>On arrête de la jeter.</strong>",
    intro: "Chaque procédé industriel possède des flux d’énergie qui peuvent être récupérés, amplifiés ou convertis. Nous construisons une trajectoire électrique adaptée à vos températures, vos cadences et vos contraintes d’exploitation.",
    hero: sectorAsset("image9_2497_11043_1248x832.png"),
    heroAlt: "Site industriel",
    heroBadgeLabel: "Énergie valorisée",
    heroBadge: "jusqu’à 80 %",
    heroStatLabel: "Retour sur investissement",
    heroStat: "2–4 ans",
    operations: [
      ["Chaleur fatale", sectorAsset("image9_2497_11043_1248x832.png")],
      ["Procédés industriels", sectorAsset("image21_2497_11043_1248x832.png")],
      ["Sites de production", sectorAsset("image17_2497_11043_1024x1024.png")],
      ["Réseaux thermiques", sectorAsset("image19_2497_11043_1248x832.png")],
    ],
    technologies: [
      ["Cascade booster / PAC booster", "Chaleur fatale amplifiée", "COP jusqu’à 4"],
      ["Machine ORC", "Chaleur convertie en électricité", "Énergie produite"],
      ["MCP", "Stockage thermique", "Décalage de charge"],
      ["H/V/P flottantes", "Haute température", "Jusqu’à 90 °C"],
      ["Destratification", "Chaleur ramenée au sol", "Confort atelier"],
    ],
    results: {
      first: ["SITE INDUSTRIEL · Transformation / traitement alimentaire", "Une chaleur de procédé valorisée plutôt que rejetée, avec un suivi clair des gains.", sectorAsset("image9_2497_11043_1248x832.png")],
      second: ["SITE INDUSTRIEL · Pack Electris", "Une combinaison récupération, pompe à chaleur et pilotage adaptée au site.", sectorAsset("image21_2497_11043_1248x832.png")],
    },
    contactImage: sectorAsset("image9_2497_11043_1248x832.png"),
    contactAlt: "Installation industrielle",
  },
  data: {
    title: "Centres de données",
    navLabel: "Data centers",
    kicker: "Centres de données",
    heading: "Votre centre de données génère de la chaleur 8 760 heures par an. <strong>Nous arrêtons de la gaspiller.</strong>",
    intro: "Les serveurs produisent une chaleur continue tandis que les systèmes de refroidissement consomment de l’électricité. Nous optimisons les flux, récupérons l’énergie utile et sécurisons la performance du site.",
    hero: sectorAsset("image10_2497_11043_1024x1024.png"),
    heroAlt: "Allée de centre de données",
    heroBadgeLabel: "Disponibilité",
    heroBadge: "8 760 h / an",
    heroStatLabel: "Retour sur investissement",
    heroStat: "18–30 mois",
    operations: [
      ["Refroidissement", sectorAsset("image10_2497_11043_1024x1024.png")],
      ["Salles serveurs", sectorAsset("image11_2497_11043_1248x832.png")],
      ["Data centers", sectorAsset("image13_2497_11043_1248x832.png")],
      ["Valorisation de chaleur", sectorAsset("image19_2497_11043_1248x832.png")],
    ],
    technologies: [
      ["Free cooling", "Refroidissement extérieur", "Énergie réduite"],
      ["Floating H/V/P", "Production haute température", "– 30 % électrique"],
      ["AI (BMS)", "Pilotage prédictif", "Temps réel"],
      ["Machine ORC", "Chaleur convertie", "Électricité locale"],
      ["MCP", "Stockage de chaleur", "Charge décalée"],
    ],
    results: {
      first: ["ÉTABLISSEMENT DE SANTÉ · Soins aigus", "La chaleur d’un site critique valorisée sans compromettre sa disponibilité.", sectorAsset("image11_2497_11043_1248x832.png")],
      second: ["ÉTABLISSEMENT DE SANTÉ · Pack Electris", "Un pilotage global des équipements pour réduire la consommation et les rejets.", sectorAsset("image10_2497_11043_1024x1024.png")],
    },
    contactImage: sectorAsset("image10_2497_11043_1024x1024.png"),
    contactAlt: "Baie informatique dans un centre de données",
  },
  office: {
    title: "Immeubles de bureaux",
    navLabel: "Bureaux",
    kicker: "Immeubles de bureaux",
    heading: "Vos bureaux consomment de l’énergie même quand personne n’est là. <strong>Nous y mettons fin.</strong>",
    intro: "Le tertiaire doit réduire ses consommations sans sacrifier le confort des occupants. Nous combinons pilotage intelligent, récupération de chaleur et solutions électriques pour une performance visible.",
    hero: sectorAsset("image13_2497_11043_1248x832.png"),
    heroAlt: "Immeuble de bureaux",
    heroBadgeLabel: "Énergie pilotée",
    heroBadge: "24 h / 24",
    heroStatLabel: "Retour sur investissement",
    heroStat: "18–30 mois",
    operations: [
      ["Chauffage et froid", sectorAsset("image9_2497_11043_1248x832.png")],
      ["Pilotage intelligent", sectorAsset("image10_2497_11043_1024x1024.png")],
      ["Immeubles tertiaires", sectorAsset("image13_2497_11043_1248x832.png")],
      ["Bâtiments multi-usages", sectorAsset("image29_2497_11043_1248x832.png")],
    ],
    technologies: [
      ["AI BMS", "Pilotage prédictif", "– 25 % d’énergie"],
      ["Booster Cascade", "Récupération de chaleur", "Confort maîtrisé"],
      ["Free cooling", "Refroidissement naturel", "Sans compresseur"],
      ["MCP", "Stockage de chaleur", "Énergie disponible"],
      ["Destratification", "Chaleur mieux répartie", "Confort homogène"],
    ],
    results: {
      first: ["BÂTIMENT DE BUREAUX · multi-étages", "Une régulation plus fine pour réduire les consommations en dehors des heures d’occupation.", sectorAsset("image13_2497_11043_1248x832.png")],
      second: ["BÂTIMENT DE BUREAUX · Pack Electris", "Une trajectoire électrique lisible, mesurée et adaptée au rythme du bâtiment.", sectorAsset("image27_2497_11043_1248x832.png")],
    },
    contactImage: sectorAsset("image13_2497_11043_1248x832.png"),
    contactAlt: "Espace de bureaux lumineux",
  },
};

const htmlEscape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const arrow = '<span aria-hidden="true">→</span>';

const renderPage = (page, type) => {
  const operations = page.operations
    .map(
      ([label, image]) => `
        <figure class="sector-operation sector-reveal">
          <img src="${image}" alt="${htmlEscape(label)}" loading="lazy" />
          <figcaption>${htmlEscape(label)}</figcaption>
        </figure>`,
    )
    .join("");

  const technologies = page.technologies
    .map(
      ([name, detail, tag], index) => `
        <article class="sector-tech-card sector-reveal">
          <span class="sector-tech-icon" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <b>${htmlEscape(name)}</b>
            <small>${htmlEscape(detail)}</small>
          </div>
          <span class="sector-tech-tag">${htmlEscape(tag)}</span>
        </article>`,
    )
    .join("");

  const resultCard = (result, variant) => `
    <article class="sector-result-card sector-reveal">
      <div class="sector-result-copy">
        <span>${htmlEscape(result[0])}</span>
        <h3>${htmlEscape(result[1].split(".")[0])}</h3>
        <p>${htmlEscape(result[1])}</p>
        <a class="sector-btn sector-btn--${variant === "green" ? "green" : "purple"}" href="mailto:contact@electris.fr">Je veux ce résultat ${arrow}</a>
      </div>
      <div class="sector-result-image">
        <img src="${result[2]}" alt="${htmlEscape(result[0])}" loading="lazy" />
        <div class="sector-result-pills" aria-label="Résultats clés">
          <span>Énergie optimisée</span>
          <span>ROI maîtrisé</span>
          <span>Pack Electris</span>
        </div>
      </div>
    </article>`;

  document.title = `${page.title} — Electris`;
  return `
    <div class="sector-shell">
      <header class="sector-header">
        <nav class="sector-nav" aria-label="Navigation principale">
          <a class="sector-logo" href="index.html" aria-label="Electris, accueil">
            <img src="assets/images/logo/electris-logo.png" alt="electris" />
          </a>
          <button class="sector-menu" type="button" aria-expanded="false" aria-controls="sector-navigation" aria-label="Ouvrir le menu">
            <span></span><span></span><span></span>
          </button>
          <div class="sector-nav-links" id="sector-navigation">
            <a href="index.html">Bienvenue</a>
            <a href="Technologie.html">Technologies</a>
            <a href="solutions.html">Solutions</a>
            <a href="sectrus.html" aria-current="page">Secteurs</a>
            <a href="index.html#process">Financement</a>
            <a href="index.html#impact">Équipe</a>
            <a href="index.html#news">Actualités</a>
          </div>
          <div class="sector-nav-actions">
            <a class="sector-btn sector-btn--blue" href="mailto:contact@electris.fr">Contactez-nous ${arrow}</a>
            <span class="sector-lang">Fr.</span>
          </div>
        </nav>
      </header>

      <main>
        <section class="sector-hero" aria-labelledby="sector-title">
          <div class="sector-hero-copy sector-reveal">
            <p class="sector-kicker">${htmlEscape(page.kicker)}</p>
            <h1 id="sector-title">${page.heading}</h1>
            <p>${htmlEscape(page.intro)}</p>
            <div class="sector-hero-actions">
              <a class="sector-btn sector-btn--blue" href="mailto:contact@electris.fr">Demander un audit gratuit ${arrow}</a>
              <a class="sector-btn sector-btn--dark" href="#technologies">Voir nos solutions ${arrow}</a>
              <span class="sector-hero-note">Diagnostic en 48 heures</span>
            </div>
          </div>
          <div class="sector-hero-visual sector-reveal">
            <img class="sector-hero-image" src="${page.hero}" alt="${htmlEscape(page.heroAlt)}" />
            <div class="sector-hero-badge">
              <small>${htmlEscape(page.heroBadgeLabel)}</small>
              <b>${htmlEscape(page.heroBadge)}</b>
            </div>
            <div class="sector-hero-stat">
              <small>${htmlEscape(page.heroStatLabel)}</small>
              <b>${htmlEscape(page.heroStat)}</b>
            </div>
          </div>
        </section>

        <section class="sector-section sector-operations" aria-labelledby="operations-title">
          <div class="sector-section-inner">
            <div class="sector-centered-heading sector-reveal">
              <p class="sector-kicker">Applications concrètes</p>
              <h2 class="sector-section-title" id="operations-title">Opérations possibles</h2>
              <p>Des solutions dimensionnées pour vos équipements, vos usages et la réalité de votre site.</p>
            </div>
            <div class="sector-operation-grid">${operations}</div>
          </div>
        </section>

        <section class="sector-section sector-tech" id="technologies" aria-labelledby="technologies-title">
          <div class="sector-section-inner sector-tech-inner">
            <div class="sector-tech-heading sector-reveal">
              <div>
                <p class="sector-kicker">Électricité utile</p>
                <h2 class="sector-section-title" id="technologies-title">Technologies disponibles</h2>
              </div>
              <p>Nous sélectionnons les briques qui ont le plus d’impact sur votre site, puis nous les pilotons ensemble.</p>
            </div>
            <div class="sector-tech-grid">${technologies}</div>
            <div class="sector-tech-actions sector-reveal">
              <a class="sector-btn sector-btn--blue" href="solutions.html">Découvrir toutes nos technologies ${arrow}</a>
            </div>
          </div>
        </section>

        <section class="sector-section sector-results" aria-labelledby="results-title">
          <div class="sector-section-inner">
            <div class="sector-results-mark" aria-hidden="true"></div>
            <h2 id="results-title" class="sector-reveal">Résultats obtenus pour nos clients.</h2>
            <div class="sector-result-grid">
              ${resultCard(page.results.first, "green")}
              ${resultCard(page.results.second, "purple")}
            </div>
          </div>
        </section>

        <section class="sector-section sector-contact" id="contact" aria-labelledby="contact-title">
          <div class="sector-section-inner sector-contact-layout">
            <div class="sector-form-card sector-reveal">
              <h2 id="contact-title" class="sector-section-title">Formulaire de contact</h2>
              <p>Parlez-nous de votre site. Nous revenons vers vous sous 48 heures.</p>
              <form class="sector-form" action="mailto:contact@electris.fr" method="post" enctype="text/plain">
                <div class="sector-form-row">
                  <label>Nom et prénom<input name="nom" type="text" placeholder="Jean Dupont" required /></label>
                  <label>Entreprise<input name="entreprise" type="text" placeholder="Nom de votre entreprise" required /></label>
                </div>
                <div class="sector-form-row">
                  <label>Adresse e-mail<input name="email" type="email" placeholder="jean@entreprise.fr" required /></label>
                  <label>Téléphone<input name="telephone" type="tel" placeholder="+33 1 23 45 67 89" /></label>
                </div>
                <label>Parlez-nous de votre projet<textarea name="message" placeholder="Type de site, surface, équipements, objectifs..." required></textarea></label>
                <button class="sector-btn sector-btn--green" type="submit">Envoyer ma demande ${arrow}</button>
              </form>
            </div>
            <div class="sector-contact-image sector-reveal">
              <img src="${page.contactImage}" alt="${htmlEscape(page.contactAlt)}" loading="lazy" />
            </div>
          </div>
        </section>
      </main>

      <footer class="sector-footer">
        <div class="sector-footer-inner">
          <div class="sector-footer-top">
            <div class="sector-footer-brand">
              <a href="index.html" aria-label="Electris, accueil"><img class="sector-footer-logo" src="assets/images/logo/electris-logo.png" alt="electris" /></a>
              <p>100 % électrique, 0 % fossile. Des bâtiments plus performants, plus indépendants.</p>
            </div>
            <div>
              <h3>Technologies</h3>
              <ul><li><a href="Technologie.html">Découvrir</a></li><li><a href="solutions.html">Financement</a></li><li><a href="index.html#impact">Équipe</a></li><li><a href="#contact">Contact</a></li></ul>
            </div>
            <div>
              <h3>Solutions</h3>
              <ul><li><a href="solutions.html">Récupération de chaleur</a></li><li><a href="solution-gtb.html">Gestion technique du bâtiment</a></li><li><a href="solutions.html">Décarbonation thermique</a></li></ul>
            </div>
            <div>
              <h3>Secteurs</h3>
              <ul><li><a href="10-secteurs-grande-distribution.html">Grande distribution</a></li><li><a href="13-secteurs-industrie.html">Industrie</a></li><li><a href="11-secteurs-hotellerie.html">Hôtellerie</a></li><li><a href="15-office-sectors.html">Bureaux</a></li><li><a href="14-secteurs-data-centers.html">Centres de données</a></li></ul>
            </div>
          </div>
          <div class="sector-footer-bottom"><p>© 2026 Electris. Tous droits réservés.</p><p>Construisons l’indépendance énergétique.</p></div>
        </div>
      </footer>
    </div>`;
};

const setupSectorPage = () => {
  const root = document.querySelector("[data-sector-page]");
  if (!root) return;
  const type = root.dataset.sector;
  const page = sectorPages[type];
  if (!page) {
    root.textContent = "Page secteur introuvable.";
    return;
  }

  root.innerHTML = renderPage(page, type);

  const menu = root.querySelector(".sector-menu");
  const navigation = root.querySelector(".sector-nav-links");
  menu?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menu?.setAttribute("aria-expanded", "false");
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    root.querySelectorAll(".sector-reveal").forEach((item) => observer.observe(item));
  } else {
    root.querySelectorAll(".sector-reveal").forEach((item) => item.classList.add("is-visible"));
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupSectorPage);
} else {
  setupSectorPage();
}
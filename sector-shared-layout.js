(function () {
  const bootstrapCss = document.createElement("link");
  bootstrapCss.rel = "stylesheet";
  bootstrapCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
  document.head.appendChild(bootstrapCss);

  const siteCss = document.createElement("link");
  siteCss.rel = "stylesheet";
  siteCss.href = "style.css?v=sector-shared-layout";
  document.head.appendChild(siteCss);

  const header = `
    <header class="sticky-top sector-real-header">
      <nav class="navbar navbar-expand-xl py-0">
        <div class="container-fluid px-4 px-lg-5">
          <a class="navbar-brand logo" href="index.html#top">
            <img src="assets/images/logo/electris-logo.png" alt="Electris">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Ouvrir la navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav mx-auto align-items-lg-center">
              <li class="nav-item"><a class="nav-link" href="index.html#top">Bienvenue</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#tech">Technologies</a></li>
              <li class="nav-item"><a class="nav-link" href="solutions.html">Solutions</a></li>
              <li class="nav-item"><a class="nav-link active" href="sectrus.html">Secteurs</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#process">Financement</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#impact">&Eacute;quipe</a></li>
              <li class="nav-item"><a class="nav-link" href="index.html#news">Actualit&eacute;s</a></li>
            </ul>
            <div class="d-flex align-items-center gap-3 py-3 py-xl-0">
              <a class="btn btn-primary rounded-pill px-4" href="mailto:contact@electris.fr">Contactez-nous.</a>
              <span class="language rounded-circle bg-white shadow-sm">Fr.</span>
            </div>
          </div>
        </div>
      </nav>
    </header>`;

  const footer = `
    <footer class="footer-panel sector-real-footer">
      <div class="footer-inner d-flex flex-column">
        <div class="footer-top d-flex align-items-start">
          <a class="footer-logo d-flex align-items-center text-decoration-none" href="index.html#top">
            <img src="assets/images/logo/electris-logo.png" alt="Electris">
            <span class="footer-tagline">Solutions &eacute;nerg&eacute;tiques d'avenir</span>
          </a>
          <div class="footer-cols d-grid flex-grow-1">
            <section class="footer-col"><h5>TECHNOLOGIES</h5><ul class="list-unstyled d-flex flex-column">
              <li><span class="chevron">&#8250;</span><a href="index.html#tech">D&eacute;couvrir</a></li>
              <li><span class="chevron">&#8250;</span><a href="index.html#process">Financement</a></li>
              <li><span class="chevron">&#8250;</span><a href="index.html#impact">&Eacute;quipe</a></li>
              <li><span class="chevron">&#8250;</span><a href="mailto:contact@electris.fr">Contact</a></li>
            </ul></section>
            <section class="footer-col"><h5>SOLUTIONS</h5><ul class="list-unstyled d-flex flex-column">
              <li><span class="chevron">&#8250;</span><a href="solutions.html">R&eacute;cup&eacute;ration de chaleur fatale</a></li>
              <li><span class="chevron">&#8250;</span><a href="solutions.html">Gestion technique du b&acirc;timent (GTB)</a></li>
              <li><span class="chevron">&#8250;</span><a href="solutions.html">Classe A</a></li>
              <li><span class="chevron">&#8250;</span><a href="solutions.html">D&eacute;carbonation thermique</a></li>
              <li><span class="chevron">&#8250;</span><a href="solutions.html">Contrat de performance (CP)</a></li>
            </ul></section>
            <section class="footer-col"><h5>SECTEURS</h5><ul class="list-unstyled d-flex flex-column">
              <li><span class="chevron">&#8250;</span><a href="10-secteurs-grande-distribution.html">Grande distribution</a></li>
              <li><span class="chevron">&#8250;</span><a href="12-secteurs-industrie.html">Industrie</a></li>
              <li><span class="chevron">&#8250;</span><a href="11-secteurs-hotellerie.html">H&ocirc;tellerie</a></li>
              <li><span class="chevron">&#8250;</span><a href="15-secteurs-bureaux.html">Tertiaire &amp; Bureaux</a></li>
              <li><span class="chevron">&#8250;</span><a href="14-secteurs-data-centers.html">Centres de donn&eacute;es</a></li>
              <li><span class="chevron">&#8250;</span><a href="16-secteurs-centre-commercial.html">Centres commerciaux</a></li>
            </ul></section>
          </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom d-flex align-items-center justify-content-between">
          <p><span>Mentions l&eacute;gales &nbsp;&middot;&nbsp; Confidentialit&eacute;</span><small>&copy; 2026 ELECTRIS. Tous droits r&eacute;serv&eacute;s.</small></p>
          <div class="footer-social d-flex align-items-center" aria-label="R&eacute;seaux sociaux">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.2 6c1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.1v7A10 10 0 0 0 22 12z" fill="currentColor" stroke="none"></path></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none"></rect><circle cx="12" cy="12" r="4" fill="none"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M22 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.7 5 12 5 12 5s-4.7 0-7.3.1c-.4.1-1.2.1-1.9.9C2.2 6.6 2 8 2 8S1.8 9.7 1.8 11.3v1.3C1.8 14.3 2 16 2 16s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.1 6.2.2 6.2.2s4.7 0 7.3-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.3C22.2 9.7 22 8 22 8zM9.9 14.6V8.9l5.4 2.9-5.4 2.8z" fill="currentColor" stroke="none"></path></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><rect x="2" y="9" width="4" height="12" fill="currentColor" stroke="none"></rect><circle cx="4" cy="4" r="2" fill="currentColor" stroke="none"></circle><path d="M10 9h4v2s1.5-2 4-2c3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5v6H10V9z" fill="currentColor" stroke="none"></path></svg></a>
          </div>
        </div>
      </div>
    </footer>`;

  const mount = function () {
    const page = document.querySelector(".contain");
    const oldNav = document.querySelector(".row-view5");
    if (page) page.insertAdjacentHTML("beforebegin", header);
    if (oldNav) oldNav.remove();

    const oldFooter = document.querySelector(".column31");
    if (oldFooter) oldFooter.remove();
    if (page) page.insertAdjacentHTML("afterend", footer);

    const bootstrapJs = document.createElement("script");
    bootstrapJs.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    document.body.appendChild(bootstrapJs);
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();

document.documentElement.classList.add("js");

const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
navbarToggler?.addEventListener("click", () => {
  navbarCollapse?.classList.toggle("show");
});

function makeSelectable(selector) {
  const cards = [...document.querySelectorAll(selector)];

  cards.forEach((card) => {
    card.tabIndex = card.tabIndex || 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", card.classList.contains("card-selected") || card.classList.contains("selected") ? "true" : "false");

    const select = () => {
      cards.forEach((item) => {
        item.classList.remove("selected", "card-selected", "expanded");
        item.setAttribute("aria-pressed", "false");
      });

      card.classList.add("card-selected");
      if (card.matches(".solution-cards figure")) card.classList.add("expanded");
      card.setAttribute("aria-pressed", "true");
    };

    card.addEventListener("click", select);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      select();
    });
  });
}

makeSelectable(".tech-cards article");
makeSelectable(".solution-cards figure");
makeSelectable(".cee-process__grid .cee-process__card");

/* Desktop hover accordion: clear sticky selection so the row returns to equal widths */
const processGrid = document.querySelector(".cee-process__grid");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
processGrid?.addEventListener("mouseleave", () => {
  if (!finePointer.matches) return;
  processGrid.querySelectorAll(".cee-process__card").forEach((card) => {
    card.classList.remove("card-selected", "expanded", "selected");
    card.setAttribute("aria-pressed", "false");
  });
});

const solutionCards = document.querySelector(".solution-cards");
const touchSolutionQuery = window.matchMedia("(hover: none), (pointer: coarse)");

/* On touch screens the first tap opens the preview. A second tap keeps the
   original inline click/navigation behavior. Capture phase is intentional so
   the preview can open before an inline redirect runs. */
solutionCards?.addEventListener(
  "click",
  (event) => {
    if (!touchSolutionQuery.matches) return;
    const card = event.target.closest("figure");
    if (!card || card.classList.contains("card-selected")) return;

    event.preventDefault();
    event.stopPropagation();
    solutionCards.querySelectorAll("figure").forEach((item) => {
      item.classList.remove("selected", "card-selected", "expanded");
      item.setAttribute("aria-pressed", "false");
    });
    card.classList.add("card-selected", "expanded");
    card.setAttribute("aria-pressed", "true");
  },
  true,
);

const technologyRail = document.querySelector(".tech-cards");
const mobileTechnologyQuery = window.matchMedia("(max-width: 767px)");

function centerTechnologyCard(card, behavior = "smooth") {
  if (!technologyRail || !mobileTechnologyQuery.matches) return;
  const column = card.closest(".col");
  if (!column) return;

  technologyRail.scrollTo({
    left: column.offsetLeft - (technologyRail.clientWidth - column.offsetWidth) / 2,
    behavior,
  });
}

technologyRail?.querySelectorAll("article").forEach((card) => {
  card.addEventListener("click", () => centerTechnologyCard(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      centerTechnologyCard(card);
    }
  });
});

function centerSelectedTechnology() {
  const selected = technologyRail?.querySelector(
    "article.selected, article.card-selected",
  );
  if (selected) centerTechnologyCard(selected, "auto");
}

requestAnimationFrame(centerSelectedTechnology);
mobileTechnologyQuery.addEventListener?.("change", centerSelectedTechnology);

const processCards = [...document.querySelectorAll(".process-card")];

function selectProcessCard(selectedCard) {
  processCards.forEach((card) => {
    const isSelected = card === selectedCard;
    card.classList.toggle("process-card--active", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

processCards.forEach((card) => {
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-pressed",
    String(card.classList.contains("process-card--active")),
  );

  card.addEventListener("click", () => selectProcessCard(card));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    selectProcessCard(card);
  });
});

const navLinks = [...document.querySelectorAll(".navbar .nav-link")];
const sectionsByNav = navLinks
  .map((link) => {
    const href = link.getAttribute("href") || "";
    return { link, target: href.startsWith("#") ? document.querySelector(href) : null };
  })
  .filter((item) => item.target);

function setActiveNav(activeLink) {
  navLinks.forEach((link) => {
    const isActive = link === activeLink;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => setActiveNav(link));
  link.addEventListener("focus", () => setActiveNav(link));
});

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      const match = sectionsByNav.find((item) => item.target === visible.target);
      if (match) setActiveNav(match.link);
    },
    { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.35, 0.6] },
  );

  sectionsByNav.forEach((item) => navObserver.observe(item.target));
}

const revealItems = document.querySelectorAll(
  ".stat-card,.heading,.reason-row,.tech h2,.tech-cards article,.world,.solutions h2,.solution-cards figure,.cta",
);

revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

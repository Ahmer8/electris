document.documentElement.classList.add("js");

const setupSectorInteractions = () => {
  const page = document.querySelector("[data-sector-page]");
  if (!page) return;

  const menu = page.querySelector(".sector-menu");
  const navigation = page.querySelector(".sector-nav-links");

  menu?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menu.setAttribute("aria-expanded", String(isOpen));
    menu.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  navigation?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menu?.setAttribute("aria-expanded", "false");
      menu?.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  const revealItems = page.querySelectorAll(".sector-reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

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

  revealItems.forEach((item) => observer.observe(item));
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupSectorInteractions);
} else {
  setupSectorInteractions();
}
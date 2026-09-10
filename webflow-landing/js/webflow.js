document.documentElement.classList.add("w-mod-js");

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
navToggle?.addEventListener("click", () => {
  const open = navMenu?.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  document.body.classList.toggle("nav-open", Boolean(open));
});

document.querySelectorAll("[data-nav-menu] .navbar_link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
});

const solutionCards = document.querySelector(".solutions_row");
if (solutionCards) {
  const cards = [...solutionCards.querySelectorAll(".solutions_card")];
  const select = (card) => {
    cards.forEach((item) => {
      item.classList.remove("is-open");
      item.setAttribute("aria-pressed", "false");
    });
    card.classList.add("is-open");
    card.setAttribute("aria-pressed", "true");
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => select(card));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      select(card);
    });
  });
}

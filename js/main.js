// qw3rty project site: small enhancements only. The page works without JavaScript.

// Set this to the live game URL, e.g. "https://example.com/qw3rty/".
// Every "Play" button on the page reads from this one value.
// While it is empty, those buttons are shown as disabled with a "Coming soon" note.
const GAME_URL = "";

// Lets the CSS collapse the mobile menu only when JavaScript is available to open it.
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // Game links
  const gameLinks = document.querySelectorAll("[data-game-link]");
  if (GAME_URL) {
    gameLinks.forEach((link) => link.setAttribute("href", GAME_URL));
  } else {
    gameLinks.forEach((link) => {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
    });
    document.querySelectorAll("[data-game-pending]").forEach((el) => (el.hidden = false));
    document.querySelectorAll("[data-game-badge]").forEach((badge) => {
      badge.textContent = "Coming soon";
      badge.classList.replace("badge-live", "badge-soon");
    });
  }

  // Mobile navigation toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      links.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }
});

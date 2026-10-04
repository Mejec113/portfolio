// Le menu reste fermé au départ et s'ouvre uniquement sur petit écran.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu");
  navigation.classList.toggle("is-open", !isOpen);
});

// Après le choix d'une rubrique, on referme le menu sur téléphone.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
    navigation.classList.remove("is-open");
  });
});

// L'année du pied de page se met à jour automatiquement.
document.querySelector("#year").textContent = new Date().getFullYear();

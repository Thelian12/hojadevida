const hamburguer = document.querySelector(".hamburguer");
const enlacesHeader = document.querySelector(".enlaces-header");

hamburguer.addEventListener("click", () => {
  enlacesHeader.classList.toggle("active");
  hamburguer.style.color = enlacesHeader.classList.contains("active") ? "#fff" : "#000";
});

enlacesHeader.addEventListener("click", (e) => {
  // Cierra menú solo si se hace clic en un enlace
  if (e.target.tagName === "A") {
    enlacesHeader.classList.remove("active");
    hamburguer.style.color = "#000";
  }
});
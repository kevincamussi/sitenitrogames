// SHOW DROPDOWN MENU

const menuDropdown = document.getElementById("menu-hamburger");
const mostrarMenu = document.getElementsByClassName("dropdown");
const generos = document.getElementById("genre-btn");

menuDropdown.addEventListener("click", mostrarDropdown);

function mostrarDropdown() {
  for (i = 0; i < mostrarMenu.length; i += 1) {
    mostrarMenu[i].classList.toggle("mostrar-menu");
  }
}





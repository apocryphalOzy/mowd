const menuButton = document.querySelector(".menu-button-container")
const header = document.querySelector(".header")

menuButton.addEventListener("click", function() {
  header.classList.toggle("cs-active");
});
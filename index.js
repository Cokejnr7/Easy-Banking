const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", handleBurgerClick);

function handleBurgerClick(e) {
  hamburger.classList.toggle("open");
}

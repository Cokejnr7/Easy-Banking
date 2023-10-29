const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile__navigation");
hamburger.addEventListener("click", handleBurgerClick);

function handleBurgerClick(e) {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open__nav");
  if (e.target.classList.contains("open")) {
    document.body.style.overflow = "clip";
  } else {
    document.body.style.overflow = "scroll";
  }
}

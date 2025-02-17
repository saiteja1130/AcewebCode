const menu = document.getElementById("menu-icon-js");
const cross = document.getElementById("cross-icon-js");
const navlinks = document.getElementById("nav-links-js");
menu.addEventListener("click", () => {
  navlinks.style.transform = "translateX(0)";
});

cross.addEventListener("click", () => {
  navlinks.style.transform = "translate(-120%)";
});

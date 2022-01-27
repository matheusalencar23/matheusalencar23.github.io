const hamburguer = document.querySelector(
  ".header .navbar .navlist .hamburguer",
);
const mobileMenu = document.querySelector(".header .navbar .navlist ul");
const menuItem = document.querySelectorAll(".header .navbar .navlist ul li a");
const header = document.querySelector(".header.container");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    header.style.backgroundColor = "#293223";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

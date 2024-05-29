const animations = () => {
  const hamburguer = $(".header .navbar .navlist .hamburguer");
  const mobileMenu = $(".header .navbar .navlist ul");
  const menuItem = $(".header .navbar .navlist ul li a");
  const header = $(".header.container");

  hamburguer.on("click", () => {
    hamburguer.toggleClass("active");
    mobileMenu.toggleClass("active");
  });

  $(document).on("scroll", () => {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
      header.css("background-color", "#2A333D");
    } else {
      header.css("background-color", "transparent");
    }
  });

  menuItem.each((item) => {
    $(this).on("click", () => {
      hamburguer.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
};

export default animations;

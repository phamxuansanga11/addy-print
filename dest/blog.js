//click menu mobile
const iconMenuMobile = document.querySelector(
  "header .container .main__header .main__header-nav-mobile .icon__menu-mobile"
);
iconMenuMobile.addEventListener("click", (e) => {
  iconMenuMobile.classList.toggle("active");
  navMenu.classList.toggle("active");
});
//nav menu
const navMenu = document.querySelector(
  "header .container .main__header .main__header-nav-mobile .show__nav-menu"
);

//header
const header = document.querySelector("header");
const heightHeader = header.offsetHeight;

//event click backtotop
const btnBackToTop = document.querySelector(
  "footer .--container__footer .backtotop"
);
btnBackToTop.addEventListener("click", (e) => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//scrollY > 1000px => show button backtotop
window.addEventListener("scroll", (e) => {
  let scrollY = window.pageYOffset;
  if (scrollY > 1000) {
    btnBackToTop.style.display = "flex";
  } else {
    btnBackToTop.style.display = "none";
  }
});

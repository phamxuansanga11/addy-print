//event click active menu
const tagaHeader = document.querySelectorAll(
  ".main__header .main__header-nav ul li a"
);

tagaHeader.forEach((taga) => {
  taga.addEventListener("click", (e) => {
    e.preventDefault();
    tagaHeader.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });
    taga.classList.add("active");
  });
});

//backtotop
const btnBackToTop = document.querySelector(
  "footer .--container__footer .backtotop"
);
btnBackToTop.addEventListener("click", (e) => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  let scrollY = window.pageYOffset;
  if (scrollY > 2000) {
    btnBackToTop.style.display = "flex";
  } else {
    btnBackToTop.style.display = "none";
  }
});

//slider

// var elem = document.querySelector(".main-carousel");
// var flkty = new Flickity(elem, {
//   // options
//   cellAlign: "left",
//   contain: true,
//   imagesLoaded: true,
// });

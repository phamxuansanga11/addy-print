const header = document.querySelector("header");
const heightHeader = header.offsetHeight;

//event click active menu
const tagaHeader = document.querySelectorAll(
  ".main__header .main__header-nav ul li a"
);

tagaHeader.forEach((taga) => {
  taga.addEventListener("click", (e) => {
    // e.preventDefault();
    tagaHeader.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });
    taga.classList.add("active");
  });
});

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

//scrollY > 2000px => show button backtotop
window.addEventListener("scroll", (e) => {
  let scrollY = window.pageYOffset;
  if (scrollY > 2000) {
    btnBackToTop.style.display = "flex";
  } else {
    btnBackToTop.style.display = "none";
  }
});

const a = document.querySelectorAll(".main__header .main__header-nav ul li p");

a.forEach((tagaMenu, index) => {
  let href = tagaMenu.getAttribute("href");
  const className = href.replace("#", "");
  let classSection = document.querySelector("." + className);
  // sections.push(classSection);
  tagaMenu.addEventListener("click", (e) => {
    e.preventDefault();
    tagaHeader.forEach((removeActive) => {
      removeActive.classList.remove("active");
    });
    a.forEach((tagaActive) => {
      tagaActive.classList.remove("active");
    });
    let positionSection = classSection.offsetTop;
    window.scrollTo({
      top: positionSection - heightHeader,
      behavior: "smooth",
    });
    tagaMenu.classList.add("active");
  });
});

//slider
var elem = document.querySelector(".feedback__slider");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  draggable: false,
  imagesLoaded: true,
  prevNextButtons: false,
  pageDots: false,
});

const btnPrev = document.querySelector(
  ".feedback .--container__feedback .feedback__slider-btn .btn__prev"
);

const btnNext = document.querySelector(
  ".feedback .--container__feedback .feedback__slider-btn .btn__next"
);

btnPrev.addEventListener("click", (e) => {
  flkty.previous();
});

btnNext.addEventListener("click", (e) => {
  flkty.next();
});

//nav menu
const navMenu = document.querySelector(
  "header .container .main__header .main__header-nav-mobile .show__nav-menu"
);

//click menu mobile
const iconMenuMobile = document.querySelector(
  "header .container .main__header .main__header-nav-mobile .icon__menu-mobile"
);
iconMenuMobile.addEventListener("click", (e) => {
  iconMenuMobile.classList.toggle("active");
  navMenu.classList.toggle("active");
});

var cellColumn = 3;
function updateCell() {
  if (tablet.matches) {
    cellColumn = 2;
    return cellColumn;
  } else {
    return;
  }
}
function updateCellMobile() {
  if (mobile.matches) {
    cellColumn = 1;
    return cellColumn;
  } else {
    return;
  }
}
const tablet = window.matchMedia("(max-width: 993px)");
const mobile = window.matchMedia("(max-width: 767px)");
updateCell();
updateCellMobile();
console.log(cellColumn);
//slider blog
var elem2 = document.querySelector(".blog .--container__blog .blog__slider");
var flkty2 = new Flickity(elem2, {
  // options
  cellAlign: "left",
  contain: true,
  // wrapAround: true,
  prevNextButtons: false,
  imagesLoaded: true,
  groupCells: cellColumn,
});

const btnPrevSliderBlog = document.querySelector(
  ".blog .--container__blog .btn__slider-blog .btn__prev"
);
btnPrevSliderBlog.addEventListener("click", () => {
  flkty2.previous();
});

const btnNextSliderBlog = document.querySelector(
  ".blog .--container__blog .btn__slider-blog .btn__next"
);
btnNextSliderBlog.addEventListener("click", () => {
  flkty2.next();
});

//event click menu mobile scroll to section
const navMenuMobile = document.querySelector(
  "header .container .main__header .main__header-nav-mobile .show__nav-menu"
);
const menuMobileOption = document.querySelectorAll(
  "header .container .main__header .main__header-nav-mobile .show__nav-menu .menu-mobile__list .option p"
);

menuMobileOption.forEach((tagaMenu, index) => {
  tagaMenu.addEventListener("click", (e) => {
    navMenuMobile.classList.remove("active");
    iconMenuMobile.classList.remove("active");
  });
  let href = tagaMenu.getAttribute("href");
  const className = href.replace("#", "");
  let classSection = document.querySelector("." + className);
  // sections.push(classSection);
  tagaMenu.addEventListener("click", (e) => {
    e.preventDefault();
    let positionSection = classSection.offsetTop;
    window.scrollTo({
      top: positionSection - heightHeader,
      behavior: "smooth",
    });
  });
});

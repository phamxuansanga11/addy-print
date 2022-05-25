const header = document.querySelector("header");
const heightHeader = header.offsetHeight;
console.log(heightHeader);

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

// tagaHeader.forEach((tagaHeader) => {
//   const className = tagaMenu.getAttribute("href");
//   const section = document.querySelector(className.replace("#", "."));
//   tagaMenu.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(section);
//   });
// });

console.log(tagaHeader);

tagaHeader.forEach((tagaMenu, index) => {
  let href = tagaMenu.getAttribute("href");
  console.log(href);
  const className = href.replace("#", "");
  const classSection = document.querySelector("." + className);

  // sections.push(classSection);
  tagaMenu.addEventListener("click", (e) => {
    e.preventDefault();
    tagaHeader.forEach((tagaActive) => {
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

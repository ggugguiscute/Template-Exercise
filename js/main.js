/*============Header Sticky===========*/
const header = document.querySelector(".header");
const stickyHeader = () => {
  const scrY = window.scrollY;
  if (scrY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

/*======================*/

/*============menu active on each sections===========*/
const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight;

const activateNavMenu = () => {
  const scrY = window.scrollY;
  sections.forEach((section) => {
    const secHeight = section.offsetHeight;
    const secTop = section.offsetTop - headerHeight;
    const secId = section.getAttribute("id");

    if (scrY > secTop && scrY <= secTop + secHeight) {
      document.querySelector(`.nav-${secId}`).classList.add("active");
    } else {
      document.querySelector(`.nav-${secId}`).classList.remove("active");
    }
  });
  if (scrY === 0) {
    document.querySelector(".nav-home").classList.add("active");
  }
};

/*======================*/

window.addEventListener("scroll", () => {
  stickyHeader();
  activateNavMenu();
});

/*============header menu toggle===========*/
const menu = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".nav-list");
const body = document.querySelector("body");
const scrY = window.scrollY;

const showMenu = () => {
  menu.children[0].setAttribute("class", "ri-close-line");
  mobileMenu.classList.add("show");
  body.style.overflow = "hidden";

  if (scrY === 0) {
    header.style.boxShadow = "0 5px 5px #efefef";
  }
};

const hideMenu = () => {
  menu.children[0].setAttribute("class", "ri-menu-line");
  mobileMenu.classList.remove("show");
  menu.classList.remove("close");
  body.style.overflow = "auto";
  if (scrY === 0) {
    header.setAttribute("style", "");
  }
};

const toggleMenu = (e) => {
  e.preventDefault();
  const target = e.currentTarget;
  target.classList.toggle("close");
  if (target.classList.contains("close")) {
    showMenu();
  } else {
    hideMenu();
  }
};

body.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    hideMenu();
  }
});

menu.addEventListener("click", toggleMenu);

/*======================*/

/*============question section accordion===========*/

const accHeaders = document.querySelectorAll(".qna-box");

const activateAccordion = (e) => {
  //console.log(e.currentTarget);
  const $this = e.currentTarget;
  $this.classList.toggle("active");
};

accHeaders.forEach((header) => {
  header.addEventListener("click", activateAccordion);
});
/*======================*/

/*============element fade up effect(reveal)===========*/
const sr = ScrollReveal({
  reset: false,
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});

sr.reveal(".home-box");
sr.reveal(".about-box");
sr.reveal(".step-box", { interval: 200 });
sr.reveal(".product-image", { interval: 200 });
/*======================*/

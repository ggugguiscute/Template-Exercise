// 1. sticky header : 스크롤 시 헤더가 따라다니는 기능 (0)
// 2. header menu toggle (0)
// 3. navigation menu design : 해당 섹션에 네비게이션 활성화 및 디자인 변경 (0)
// 4. question section accordion(0)
// 5. reveal effect(0)
// 6. mobile navigation design(2번이랑 연결)

const header = document.querySelector(".header");

/*============Header Sticky===========*/
const stickyHeader = () => {
  // 단축어 : nfn
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
    const secHeight = section.offsetHeight; //section 요소의 높이값
    const secTop = section.offsetTop - headerHeight; //section 요소의 윗쪽 옵셋값 - 헤더의 높이
    const secId = section.getAttribute("id"); //각 섹션의 아이디값 저장

    if (scrY > secTop && scrY <= secTop + secHeight) {
      //&& : 합성곱(양쪽 모두 true일 경우 true) / ||:합성합(양쪽 중 하나만 true일 경우 true)
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
const toggleMenu = (e) => {
  //console.log(this); //화살표 함수는 this에 전역객체 window를 호출한다.
  //console.log(e.target);
  const target = e.currentTarget;

  //   console.log(target.childNodes);
  //   console.log(target.children);

  target.classList.toggle("close");
  if (target.classList.contains("close")) {
    //target.FirstElementChild.setAttribute("class", "ri-close-line");
    target.children[0].setAttribute("class", "ri-close-line");
  } else {
    //target.FirstElementChild.setAttribute("class", "ri-menu-line");
    target.children[0].setAttribute("class", "ri-menu-line");
  }
};

menu.addEventListener("click", toggleMenu);

/*======================*/

/*============question section accordion===========*/
// const accHeaders = document.querySelectorAll(".qna-box");

// accHeaders.forEach((header) => {
//   header.addEventListener("click", activateAccordion => {
//     closeAll(header);
//     header.classList.toggle("active");
//   });
// });

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

// sr.reveal(".home-box", { duration: 1000, origin: "bottom", distance: "50px" });

// 1. sticky header : 스크롤 시 헤더가 따라다니는 기능 (0)
// 2. header menu toggle (0)
// 3. navigation menu design : 해당 섹션에 네비게이션 활성화 및 디자인 변경
// 4. question section accordion
// 5. reveal effect
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

window.addEventListener("scroll", () => {
  stickyHeader();
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

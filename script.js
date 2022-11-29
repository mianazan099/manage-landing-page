const menuBtn = document.querySelector(".navbar__menu-btn");
const menuBtnImg = document.querySelector(".navbar__menu-btn img");
const navLink = document.querySelectorAll(".nav__link");
const body = document.body;

const handleNav = () => {
  let open = eval(body.getAttribute("data-navOpen"));
  body.setAttribute("data-navOpen", !open);
  if (open) {
    menuBtnImg.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    menuBtnImg.setAttribute("src", "./images/icon-close.svg");
  }
};

menuBtn.addEventListener("click", handleNav);
navLink.forEach((link) => {
  link.addEventListener("click", handleNav);
});

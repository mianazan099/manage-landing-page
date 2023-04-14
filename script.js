const menuBtn = document.querySelector(".navbar__menu-btn");
const menuBtnImg = document.querySelector(".navbar__menu-btn img");
const body = document.body;

const emailInputContainer = document.querySelector(".emailInput");
const emailInput = document.querySelector(".emailInput input");
const emailForm = document.querySelector(".footer__form form");

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

emailInput.addEventListener("input", (e) => {
  if (
    !(e.target.value.match(/^\S+@\S+\.\S+$/) === null) ||
    e.target.value === ""
  ) {
    emailInputContainer.classList.remove("error");
  } else {
    emailInputContainer.classList.add("error");
  }
});

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

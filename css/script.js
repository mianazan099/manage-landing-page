// Navbar
const menuBtn = document.querySelector(".navbar__menu-btn");
const body = document.body;

const handleNav = () => {
  const open = eval(body.getAttribute("data-navOpen"));
  body.setAttribute("data-navOpen", !open);
  if (open) {
    menuBtn.innerHTML = "<svg><use xlink:href='#icon-hamburger'></use></svg>";
  } else {
    menuBtn.innerHTML = "<svg><use xlink:href='#icon-close'></use></svg>";
  }
};
menuBtn.addEventListener("click", handleNav);

// Swiper
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

// Email validation
const emailForm = document.querySelector(".footer__form form");
const emailInputContainer = document.querySelector(".emailInput");
const emailInput = document.querySelector(".emailInput input");
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

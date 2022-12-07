const menuBtn = document.querySelector(".navbar__menu-btn");
const menuBtnImg = document.querySelector(".navbar__menu-btn img");
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

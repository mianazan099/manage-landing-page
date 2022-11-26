const menuBtn = document.querySelector(".menu-btn");
const menuBtnImg = document.querySelector(".menu-btn img");
const navOpen = document.body;

menuBtn.addEventListener("click", () => {
  let open = eval(navOpen.getAttribute("data-navOpen"));
  navOpen.setAttribute("data-navOpen", !open);
  if (open) {
    menuBtnImg.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    menuBtnImg.setAttribute("src", "./images/icon-close.svg");
  }
});

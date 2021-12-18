const iconClose = document.querySelector(".icon-close");
const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu .link");
const mains = document.querySelectorAll(".main");
const toggleNav = () => {
  menu.classList.toggle("show-nav");
  console.log("click");
};
iconClose.addEventListener("click", toggleNav);
iconMenu.addEventListener("click", toggleNav);

const removeActive = (array, clase) => {
  array.forEach((elem) => {
    elem.classList.remove(clase);
  });
};
links.forEach((link, index) => {
  const i = index;
  link.addEventListener("click", () => {
    removeActive(links, "active");
    removeActive(mains, "active-main");
    link.classList.add("active");
    mains[i].classList.add("active-main");
  });
});

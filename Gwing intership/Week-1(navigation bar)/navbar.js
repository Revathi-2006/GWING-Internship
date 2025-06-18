const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.getElementById("nav-links");

openMenu.onclick = () => navLinks.classList.add("active");
closeMenu.onclick = () => navLinks.classList.remove("active");

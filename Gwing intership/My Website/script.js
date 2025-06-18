// Navbar toggle
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.getElementById("nav-links");
openMenu.onclick = () => navLinks.classList.add("active");
closeMenu.onclick = () => navLinks.classList.remove("active");

// Image Slider
let slideIndex = 0;
showSlides();
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // ⏳ Slower → 5 seconds per slide
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been submitted.");
  this.reset();
});

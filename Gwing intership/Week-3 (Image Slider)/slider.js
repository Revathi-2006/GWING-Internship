let index = 0;
let slides = document.getElementsByClassName("slide-container");
showSlide(index);
autoSlide();

function showSlide(n) {
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function changeSlide(n) {
  index += n;
  showSlide(index);
}



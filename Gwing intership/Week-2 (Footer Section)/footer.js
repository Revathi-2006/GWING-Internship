// Scroll to top button (optional feature)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑';
scrollTopBtn.classList.add('scroll-top');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Optional: Dynamic year for copyright
document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelector('.footer-bottom').innerHTML = `&copy; ${year} MyCompany | All Rights Reserved`;
});

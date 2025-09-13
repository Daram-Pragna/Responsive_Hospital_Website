// Navbar toggle for mobile
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

// Scroll reveal elements
const revealElements = document.querySelectorAll(
  '.icons, .services .box, .doctors .box, .review .box, .blogs .box, .book .row form, .book .row .image'
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  revealElements.forEach((el, index) => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < windowHeight - revealPoint) {
      // Stagger animation for nicer effect
      setTimeout(() => el.classList.add('show'), index * 50);
    } else {
      el.classList.remove('show');
    }
  });
}

// Initial check on page load
window.addEventListener('load', revealOnScroll);

// Listen for scroll
window.addEventListener('scroll', revealOnScroll);

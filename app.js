const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Smooth scroll to About Us section
document.getElementById('about-link').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

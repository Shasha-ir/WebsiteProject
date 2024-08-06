document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.navigation');
  
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
      });
    } else {
      console.error('Navigation elements not found.');
    }
  });
  
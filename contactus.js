document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("back-button");
    
    backButton.addEventListener("click", function() {
        console.log('Back button clicked.');
        window.location.href = "home.html";
      });
  
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
  
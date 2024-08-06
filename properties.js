document.addEventListener("DOMContentLoaded", function() {
    const residentialButton = document.getElementById("residentialButton");
    const commercialButton = document.getElementById("commercialButton");
  
    residentialButton.addEventListener("click", function() {
      alert("Please log in to see commercial properties.");
    });
  
    commercialButton.addEventListener("click", function() {
      alert("Please log in to see residential properties.");
    });
  
    const navToggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector(".navigation");
  
    navToggle.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  });
  
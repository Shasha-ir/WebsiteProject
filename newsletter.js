document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("newsletter-form");
    const backButton = document.getElementById("back-button");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      alert(`Thank you for subscribing, ${name}! Updates will be sent to ${email}.`);
      form.reset();
    });
  
    backButton.addEventListener("click", function() {
      window.location.href = "home.html";
    });
  });
  
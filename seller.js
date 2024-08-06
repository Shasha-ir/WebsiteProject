document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.navigation');

  navToggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
  });

  const buyerForm = document.getElementById('buyerForm');
  buyerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Buyer registered successfully!');
  });
});

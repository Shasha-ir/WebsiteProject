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

document.addEventListener("DOMContentLoaded", function() {
  const galleryImages = document.querySelectorAll('.gallery img');

  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  document.body.appendChild(lightbox);

  const lightboxImage = document.createElement('img');
  lightbox.appendChild(lightboxImage);

  const closeButton = document.createElement('button');
  closeButton.classList.add('lightbox-close');
  closeButton.innerText = '×';
  lightbox.appendChild(closeButton);

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightbox.classList.add('active');
    });
  });

  closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });
});

// This file handles the main functionality of the website, including event listeners for navigation and form submissions.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handling (example)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you can add your form submission logic (e.g., AJAX request)
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }
    
});
const preview = document.getElementById('previewArea');
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closePopupBtn');

preview.addEventListener('click', function() {
  popupOverlay.classList.add('active');
});

closeBtn.addEventListener('click', function() {
  popupOverlay.classList.remove('active');
});

// Optional: close popup when clicking outside the card
popupOverlay.addEventListener('click', function(e) {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});
// JavaScript
document.querySelectorAll('.learn-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = btn.closest('.service-card');
        card.classList.toggle('open');
    });
});

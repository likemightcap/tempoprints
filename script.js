document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
  
    if (hamburger && mobileMenu) {
      // Toggle mobile menu when hamburger is clicked
      hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
  
      // Hide mobile menu when a menu link is clicked
      document.querySelectorAll('.mobile-menu a').forEach(item => {
        item.addEventListener('click', function() {
          mobileMenu.classList.remove('active');
        });
      });
    }
  });
  
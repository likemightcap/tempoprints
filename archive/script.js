
document.addEventListener('DOMContentLoaded', function() {
  // Consolidated navigation links
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];
  // Populate desktop nav
  const mainNavMenu = document.getElementById('mainNavMenu');
  if (mainNavMenu) {
    navLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.label;
      li.appendChild(a);
      mainNavMenu.appendChild(li);
    });
  }
  // Populate mobile nav
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    navLinks.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.label;
      li.appendChild(a);
      mobileMenu.appendChild(li);
    });
  }

  // Hamburger menu logic
  const hamburger = document.getElementById('hamburger');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    // Hide mobile menu when a menu link is clicked
    mobileMenu.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        mobileMenu.classList.remove('active');
      }
    });
  }
// ...existing code...
  });

// Newsletter form handler
document.addEventListener('DOMContentLoaded', function () {
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterStatus = document.getElementById('newsletterStatus');
  if (newsletterForm && newsletterStatus) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = {
        name: newsletterForm.name.value,
        email: newsletterForm.email.value
      };
      try {
        const res = await fetch('https://tempo-form-backend.onrender.com/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          newsletterStatus.textContent = 'Thanks! Check your inbox for the guide.';
          newsletterStatus.className = 'form-status success';
          newsletterStatus.style.display = 'block';
          newsletterForm.reset();
        } else {
          newsletterStatus.textContent = 'Something went wrong. Please try again.';
          newsletterStatus.className = 'form-status error';
          newsletterStatus.style.display = 'block';
        }
      } catch (err) {
        console.error(err);
        newsletterStatus.textContent = 'Server error. Try again later.';
        newsletterStatus.className = 'form-status error';
        newsletterStatus.style.display = 'block';
      }
    });
  }

  // Contact form handler
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');
  if (form && statusDiv) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
      };
      try {
        const res = await fetch('https://tempo-form-backend.onrender.com/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          statusDiv.textContent = 'Your message was sent successfully!';
          statusDiv.className = 'form-status success';
          statusDiv.style.display = 'block';
          form.reset();
        } else {
          statusDiv.textContent = 'Oops! Something went wrong.';
          statusDiv.className = 'form-status error';
          statusDiv.style.display = 'block';
        }
      } catch (err) {
        console.error(err);
        statusDiv.textContent = 'Server error. Please try again later.';
        statusDiv.className = 'form-status error';
        statusDiv.style.display = 'block';
      }
    });
  }
});
  

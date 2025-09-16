
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

// Community Mailer Form Handler
document.addEventListener('DOMContentLoaded', function () {
	const mailerForm = document.getElementById('mailer-form');
	const mailerStatus = document.getElementById('mailerStatus');
	if (mailerForm && mailerStatus) {
		mailerForm.addEventListener('submit', async (e) => {
			e.preventDefault();
			const formData = {
				name: mailerForm.name.value,
				company: mailerForm.company.value,
				phone: mailerForm.phone.value,
				email: mailerForm.email.value
			};
			try {
				const res = await fetch('https://tempo-form-backend.onrender.com/mailer-inquiry', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				});
				if (res.ok) {
					mailerStatus.textContent = 'Thanks! Your info was sent successfully.';
					mailerStatus.className = 'form-status success';
					mailerStatus.style.display = 'block';
					mailerForm.reset();
				} else {
					mailerStatus.textContent = 'Oops! Something went wrong. Please try again later.';
					mailerStatus.className = 'form-status error';
					mailerStatus.style.display = 'block';
				}
			} catch (err) {
				console.error(err);
				mailerStatus.textContent = 'Server error. Please try again later.';
				mailerStatus.className = 'form-status error';
				mailerStatus.style.display = 'block';
			}
		});
	}
});

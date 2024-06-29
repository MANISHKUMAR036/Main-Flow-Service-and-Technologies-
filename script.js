// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        form.reset();
    });

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Interactive menu
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic content update
    const servicesSection = document.getElementById('services');
    const dynamicContentButton = document.createElement('button');
    dynamicContentButton.textContent = 'Show More Services';
    dynamicContentButton.style.display = 'block';
    dynamicContentButton.style.margin = '10px 0';
    servicesSection.appendChild(dynamicContentButton);

    dynamicContentButton.addEventListener('click', () => {
        const additionalServices = document.createElement('p');
        additionalServices.textContent = 'We also offer custom tailoring, saree draping workshops, and personalized shopping assistance.';
        servicesSection.appendChild(additionalServices);
        dynamicContentButton.remove();
    });
});

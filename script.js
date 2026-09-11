document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const fullName = `${formData.get('firstName')} ${formData.get('lastName')}`;
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        const body = `Name: ${fullName}\nEmail: ${email}\n\n${message}`;

        window.location.href = `mailto:fiberconn.prime@ironconbuilders.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}

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

document.querySelectorAll('.card').forEach(card => {
    const toggleGallery = () => {
        document.querySelectorAll('.card.is-selected').forEach(selectedCard => {
            if (selectedCard !== card) {
                selectedCard.classList.remove('is-selected');
                selectedCard.setAttribute('aria-expanded', 'false');
            }
        });

        const isSelected = card.classList.toggle('is-selected');
        card.setAttribute('aria-expanded', String(isSelected));
    };

    card.addEventListener('click', toggleGallery);
    card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleGallery();
        }
    });

    card.querySelector('.card-gallery').addEventListener('click', event => {
        event.stopPropagation();
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.card.is-selected').forEach(card => {
        card.classList.remove('is-selected');
        card.setAttribute('aria-expanded', 'false');
    });
}, { passive: true });

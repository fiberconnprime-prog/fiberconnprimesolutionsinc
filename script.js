document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card.is-selected').forEach(selectedCard => {
            if (selectedCard !== card) {
                selectedCard.classList.remove('is-selected');
            }
        });
        card.classList.toggle('is-selected');
    });
});

document.addEventListener('click', event => {
    if (!event.target.closest('.card')) {
        document.querySelectorAll('.card.is-selected').forEach(card => {
            card.classList.remove('is-selected');
        });
    }
});

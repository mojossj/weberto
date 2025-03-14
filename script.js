// Aggiungi interattività qui (es. animazioni, effetti hover, ecc.)
document.addEventListener('DOMContentLoaded', function () {
    // Esempio: Aggiungi un effetto hover ai link
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
});

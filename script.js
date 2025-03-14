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
            // Seleziona il pulsante Dark Mode
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

// Verifica se l'utente ha già una preferenza salvata
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggleDarkMode.textContent = '☀️ Light Mode';
}

// Aggiungi un listener per il click sul pulsante
toggleDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleDarkMode.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('darkMode', isDarkMode);
});
        });
    });
});

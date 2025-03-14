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

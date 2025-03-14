// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

// Carica preferenze
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggleDarkMode.textContent = '☀️ Light Mode';
}

// Gestione click
toggleDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleDarkMode.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('darkMode', isDarkMode);
});

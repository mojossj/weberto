// Toggle Dark/Light Mode
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    
    // Controlla la preferenza del sistema
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Controlla il localStorage per la preferenza utente
    const userPrefersDark = localStorage.getItem('theme') === 'dark';
    const userPrefersLight = localStorage.getItem('theme') === 'light';
    
    // Applica il tema iniziale
    if (userPrefersDark || (!userPrefersLight && systemPrefersDark)) {
        htmlElement.classList.add('dark-mode');
    }
    
    // Toggle al click
    themeToggle.addEventListener('click', function() {
        htmlElement.classList.toggle('dark-mode');
        
        // Salva la preferenza
        if (htmlElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Aggiorna in tempo reale se cambia la preferenza di sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                htmlElement.classList.add('dark-mode');
            } else {
                htmlElement.classList.remove('dark-mode');
            }
        }
    });
    
    // Animazione pulsanti
    const buttons = document.querySelectorAll('.link-button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
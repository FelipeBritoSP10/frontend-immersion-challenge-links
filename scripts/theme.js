document.addEventListener('renderComplete', () => {
    const themeBtn = document.getElementById('theme-toggle');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            // Salva a preferência do usuário
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('brito-cinema-theme', isLight ? 'light' : 'dark');
        });
    }
});

// Aplica o tema salvo assim que o script carregar (evita o flash branco)
if (localStorage.getItem('brito-cinema-theme') === 'light') {
    document.body.classList.add('light-mode');
}
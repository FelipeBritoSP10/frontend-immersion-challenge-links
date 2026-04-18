document.addEventListener('renderComplete', () => {
    const input = document.getElementById('search-input');
    
    let debounceTimer; 
    
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
    
        debounceTimer = setTimeout(() => {
            const termo = input.value.trim();
    
            if (termo.length > 0) {
                window.location.href = `results.html?query=${encodeURIComponent(termo)}`;
            }
        }, 600);
    });
})
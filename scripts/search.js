const params = new URLSearchParams(window.location.search);
const termo = params.get('query');
const titleElement = document.getElementById('results-title');

if (titleElement && termo) {
    titleElement.textContent = `Resultados para: "${termo}"`;
}

async function searchAndDisplay() {
    if (!termo) return;


    const movies = await searchMovies(termo);

    const grid = document.getElementById('grid-cards');
    grid.innerHTML = '';

    movies.forEach(movie => {
        const poster = movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : 'https://placehold.co/300x450?text=Sem+Poster';

        const note = movie.vote_average
            ? movie.vote_average.toFixed(1)
            : 'N/A';

        const card = document.createElement('div');
        card.innerHTML = `
            <img src="${poster}" alt="${movie.title}">
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                <p class="card-note">Nota: ${note}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}

searchAndDisplay();
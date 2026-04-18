const API_KEY = '849e2c14d220eebcc5905d7887a016f5'; 
const BASE_URL = 'https://api.themoviedb.org/3';

async function searchMovies(termo) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(termo)}&language=pt-BR`;

    const response = await fetch(url);
    const data = await response.json();

    return data.results;
}
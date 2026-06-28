

// URL base: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/top_rated?api_key=fc5ec7f8ef39e33913ec95ce8e579411

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
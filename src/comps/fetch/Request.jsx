const API_KEY = "2710bac6b7996d7a66f1d6e4c63c15c8";
const page = Math.floor(Math.random() * 98) + 2;
const Request = {
  fetchTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`,
  fetchNetflixOrigianls: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=${page}`,

  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28&page=${page}`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=31&page=${page}`,
  fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=27&page=${page}

`,
  fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=10749&page=${page}`,
  fetchDocumentary: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99&page=${page}`,
  fethWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=37&page=${page}`,
};

export default Request;

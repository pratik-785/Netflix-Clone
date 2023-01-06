const API_KEY = '75030b9f5c5fd10c6f18b89ce5947834';

// const requests = {
//   fetchTrending: ``,
//   fetchRecently: `https://jsonplaceholder.typicode.com/photos?_start=5&_limit=20`,
//   fetchHollywoodMovies: `https://jsonplaceholder.typicode.com/photos?_start=20&_limit=35`,
// };


const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US` ,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNeflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=213`,
  // fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=28&page=${page}`, 
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genre=28`, 
  // fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genre=35`, 
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`, 
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`, 
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`, 
}

export const getMovie = (endpoint) => HIT_API + endpoint

export default requests;

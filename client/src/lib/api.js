import { V3_KEY, V4_BEARER } from '../config/config.js';

const BASE_URL ='https://api.themoviedb.org/3/search/movie';
// const SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${V3_KEY}`
// const SEARCH_ENDPOINT = `https://api.themoviedb.org/3/search/movie?`
const SEARCH_ENDPOINT = `${BASE_URL}?api_key=${V3_KEY}&language=en-US&query=`;

var searchMovies = (query, callback) => {
  var searchURL = `${SEARCH_ENDPOINT}${query.replace(' ', '+')}`;
  console.log(searchURL);
  axios.get(searchURL)
  .then( response => {
    if (response.data && response.data.length > 0) {
      callback(response.data);
    }
  });
}

export default searchMovies;



import { V3_KEY, V4_BEARER } from '../config/config.js';

const BASE_URL ='https://api.themoviedb.org/4/search/movie';
var searchMovies = (query, callback) => {
  axios.get(BASE_URL, {
    headers: {
      'authorization': `Bearer ${V4_BEARER}`,
      'content-type': 'application/json;charset=utf-8'
    },
    params: {
      'query': query
    }
  })
  .then( response => {
    if (response.data && response.data.length > 0) {
      callback(response.data);
    }
  });
}

export default searchMovies;



import React from 'react';
import MovieList from './MovieList.jsx';
import SearchForm from './SearchForm.jsx';
import SubmitForm from'./SubmitForm.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
    var APIdata = [
      {title: 'The Matrix', id: 0, watched: true},
      {title: 'Shawshank Redemption', id: 1, watched: true},
      {title: 'The Notebook', id: 2, watched: false},
      {title: 'The Mask', id: 3, watched: false},
    ];
    for (var i = 0; i < APIdata.length; i++) {
      APIdata[i].year = 1980 + Math.floor(Math.random() * 27);
      APIdata[i].runtime = 45 + Math.floor(Math.random() * 80);
      APIdata[i].metascore = 50 + Math.floor(Math.random() * 35);
      APIdata[i].imdb = 5 + (Math.random() * 4).toFixed(1);
      APIdata[i].renderInfo = false;
    }
    this.state.movies = APIdata;
    this.state.movieIndex = this.state.movies.length;
    this.state.searchFilter = undefined;
    this.state.onlyWatched = false;
    this.state.onlyUnwated = false;
  }

  changeRenderInfo(idx) {
    var state = this.state.movies;
    for (var i = 0; i < state.length; i++) {
      if (state[i].id === idx) {
        state[i].renderInfo = !state[i].renderInfo;
      }
    }
    this.setState(state);
  }

  changeWatchMovie(movieIndex) {
    var movies = this.state.movies;
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].id === movieIndex) {
        movies[i].watched = !movies[i].watched;
      }
    }
    var state = {movies};
    this.setState(state);
  }

  filterMovieList(search) {
    var state = {};
    this.state.searchFilter = search;
    this.setState(state);
  }

  addMovie(event, movie) {
    var movieObj = {
      title: movie,
      id: this.state.movieIndex,
      watched: false
    }
    var state = {};
    state.movies = this.state.movies;

    var duplicate = false;
    for (var i = 0; i < state.movies.length; i++) {
      if (state.movies[i].title.toLowerCase() === movie.toLowerCase()) {
        duplicate = true;
      }
    }
    if (!duplicate) {
      state.movies.push(movieObj)
      state.movieIndex = this.state.movieIndex + 1;
    }
    this.setState(state);
  }

  changeWatchUnwatchFilter(e, flag) {
    e.preventDefault();
    var state = {};
    if (flag === 'watched') {
      state.onlyWatched = !this.state.onlyWatched;
      state.onlyUnwatched = false;
    } else if (flag === 'unwatched') {
      state.onlyWatched = false;
      state.onlyUnwatched = !this.state.onlyUnwatched;
    }
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SubmitForm onClick={(event, movie) => this.addMovie(event, movie)}/>
        <br />
        <SearchForm handleSubmit={(search) => this.filterMovieList(search)}/>
        <br />
        <MovieList
          movies={this.state.movies}
          onlyWatched={this.state.onlyWatched}
          onlyUnwatched={this.state.onlyUnwatched}
          searchFilter={this.state.searchFilter}
          titleClick={(idx) => this.changeRenderInfo(idx)}
          onWatchFilterClick={(e, flag) => this.changeWatchUnwatchFilter(e, flag)}
          onWatchedClick={(idx) => this.changeWatchMovie(idx)}/>
      </div>
    );
  }
}

export default App;
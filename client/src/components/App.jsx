import React from 'react';
import MovieList from './MovieList.jsx';
import SearchForm from './SearchForm.jsx';
import SubmitForm from'./SubmitForm.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.movies = [
      {title: 'The Matrix', id: 0, watched: true},
      {title: 'Shawshank Redemption', id: 1, watched: true},
      {title: 'The Notebook', id: 2, watched: false},
      {title: 'The Mask', id: 3, watched: false},
    ];
    this.state.movieIndex = this.state.movies.length;
    this.state.searchFilter = undefined;
    this.state.onlyWatched = false;
    this.state.onlyUnwated = false;

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
    console.log(movieObj);
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
          onWatchFilterClick={(e, flag) => this.changeWatchUnwatchFilter(e, flag)}
          onWatchedClick={(idx) => this.changeWatchMovie(idx)}/>
      </div>
    );
  }
}

export default App;
import React from 'react';
import MovieList from './MovieList.jsx';
import SearchForm from './SearchForm.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.movies = [
      {title: 'Mean Girls', id: 1},
      {title: 'Hackers', id: 2},
      {title: 'The Grey', id: 3},
      {title: 'Sunshine', id: 4},
      {title: 'Ex Machina', id: 5},
    ];
    this.state.searchFilter = undefined;

  }

  filterMovieList(search) {
    var state = {};
    this.state.searchFilter = search;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <div>
          <SearchForm
            handleSubmit={(search) => this.filterMovieList(search)}/>
        </div>
        <div>
          <MovieList movies={this.state.movies} searchFilter={this.state.searchFilter}/>
        </div>
      </div>
    );
  }
}

export default App;
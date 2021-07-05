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
    this.state.search = '';

  }

  updateSearch(search) {
    var state = {};
    state.search = search;
    this.setState(state);
  }

  filterMovieList() {
    var state = {};
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div>
          <SearchForm
            onChange={(s) => this.updateSearch(s)}
            onSubmit={this.filterMovieList}
            search={this.state.search}/>
        </div>
        <div>
          <MovieList movies={this.state.movies} search={this.state.search}/>
        </div>
      </div>
    );
  }
}

export default App;
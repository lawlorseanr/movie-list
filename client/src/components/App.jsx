import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {};
    this.state.movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];

  }


  render() {
    return (
      <div>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
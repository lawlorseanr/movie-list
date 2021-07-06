import React from 'react';
import MovieEntry from './MovieEntry.jsx';

var movieList = (props) => {
  var movieCount = 0;
  var noMovieText = 'Please add a movie!';
  var oopsText = 'Sorry! No results found.';

  var watchFlag = undefined;
  if (props.onlyWatched) {
    watchFlag = true;
  } else if (props.onlyUnwatched) {
    watchFlag = false;
  }

  var renderOops = () => {
    if (props.movies.length > 0 && movieCount === 0) {
      return (<tr><td><p>{`${oopsText}`}</p></td></tr>);
    } else if (props.movies.length === 0) {
      return (<tr><td><p>{`${noMovieText}`}</p></td></tr>);
    }
  }

  return (
    <div>
      <button
        className={`${watchFlag === true ? 'watched' : ''}`}
        onClick={(e) => {props.onWatchFilterClick(e, 'watched')}}
      >Watched</button>
      <button
        className={`${watchFlag === false ? 'watched' : ''}`}
        onClick={(e) => {props.onWatchFilterClick(e, 'unwatched')}}
      >Unwatched</button>
      <table>
        <tbody>
          {props.movies.map( movie => {
          var search = props.searchFilter;
          var movielc = movie.title.toLowerCase();
          var searchValid = !search || movielc.indexOf(search.toLowerCase()) >= 0;

          if (searchValid && (watchFlag === undefined || movie.watched === watchFlag)) {
            movieCount++;
            return (
              <MovieEntry
                key={movie.id}
                movie={movie}
                titleClick={props.titleClick}
                onWatchedClick={props.onWatchedClick}
              />
            );
          }})}
          {renderOops()}
        </tbody>
      </table>
    </div>
  );
}

export default movieList;
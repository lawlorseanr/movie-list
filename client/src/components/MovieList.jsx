import React from 'react';
import MovieEntry from './MovieEntry.jsx';

var movieList = (props) => {
  var movieCount = 0;
  var oopsText = 'Sorry! No results found.';

  var renderOops = () => {
    if (movieCount === 0) {
      return (<tr><td><p>{`${oopsText}`}</p></td></tr>);
    }
  }

  return (
    <table>
      <tbody>
          {props.movies.map( movie => {
          var search = props.searchFilter;
          var movielc = movie.title.toLowerCase();
          if (!search || (search && movielc.indexOf(props.searchFilter.toLowerCase())>=0)){
            movieCount++;
            return <tr key={movie.id}><td><MovieEntry movie={movie}/></td></tr>
          }
        })}
        {renderOops()}
      </tbody>
    </table>
  );
}

export default movieList;
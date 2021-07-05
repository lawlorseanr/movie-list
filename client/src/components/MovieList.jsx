import React from 'react';
import MovieEntry from './MovieEntry.jsx';

var movieList = (props) => {
  return (
    <table>
      {props.movies.map( movie => {
        return <tr><td><MovieEntry
          key={movie.id}
          movie={movie}
          search={props.search}/></td></tr>
      })}
    </table>
  );
}

export default movieList;
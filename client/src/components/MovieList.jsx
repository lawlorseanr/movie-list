import React from 'react';
import MovieEntry from './MovieEntry.jsx';

var movieList = (props) => {
  return (
    <table>
      {props.movies.map( (movie, i) => {
        return <tr><td><MovieEntry key={i} movie={movie}/></td></tr>
      })}
    </table>
  );
}

export default movieList;
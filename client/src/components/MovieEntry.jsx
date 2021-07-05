import React from 'react';

var movieEntry = (props) => {
  console.log(props.search);
    return (
      <p>{props.movie.title}</p>
    );
}


export default movieEntry;
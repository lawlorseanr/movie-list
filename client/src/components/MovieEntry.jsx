import React from 'react';

var movieEntry = (props) => {
    var watchFlag = props.movie.watched ? ' watched': '';
    return (
      <tr><td>
        <div className="movieEntry">
          <p className="movieTitle" onClick={() => props.titleClick(props.movie.id)}>{props.movie.title}</p>
          <button
            type="submit"
            className={`watchButton${watchFlag}`}
            onClick={() => props.onWatchedClick(props.movie.id)}
            >watched</button>
        </div>
        <div className={`${props.movie.renderInfo ? 'renderMovieInfo' : 'movieInfo'}`}>
          <p>Year: {props.movie.year}</p>
          <p>Runtime: {props.movie.runtime}</p>
          <p>Metascore: {props.movie.metascore}</p>
          <p>IMDB Rating: {props.movie.imdb}</p>
        </div>
      </td></tr>
    );
}


export default movieEntry;
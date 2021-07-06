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
          <div>
            <p className="moviedetail">Year: {props.movie.year}</p>
            <p className="moviedetail">Runtime: {props.movie.runtime}</p>
            <p className="moviedetail">Metascore: {props.movie.metascore}</p>
            <p className="moviedetail">IMDB Rating: {props.movie.imdb}</p>
          </div>
          <img className="movieImage" src="../../src/images/matrix.jpeg"></img>
        </div>
      </td></tr>
    );
}


export default movieEntry;
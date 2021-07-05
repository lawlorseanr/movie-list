import React from 'react';

var movieEntry = (props) => {
    var watchFlag = props.movie.watched ? ' watched': '';
    return (
      <div className="movieEntry">
        <p className="movieTitle">{props.movie.title}</p>
        <button
          type="submit"
          className={`watchButton${watchFlag}`}
          onClick={() => props.onWatchedClick(props.movie.id)}
          >watched</button>
      </div>
    );
}


export default movieEntry;
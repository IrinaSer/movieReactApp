import React from "react";

const MovieItem = (props) => {
  const { movie, removeMovie, addMovieToWillWatch } = props;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https:image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {movie.vote_average}</p>
          <button
            onClick={addMovieToWillWatch.bind(this, movie)}
            type="button"
            className="btn btn-secondary"
          >
            Will Watch
          </button>
        </div>
      </div>
      <button onClick={removeMovie.bind(this, movie)}>Delete movie</button>
    </div>
  );
};

export default MovieItem;

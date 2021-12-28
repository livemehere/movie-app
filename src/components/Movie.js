import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movie({ id, title, rating, genres, summary, coverURL, bgURL }) {
  return (
    <div className="movie">
      <div className="cover__box">
        <img src={coverURL} alt={coverURL} />
      </div>
      <div className="movie__description">
        <h1>
          <Link to={`/detail/${id}`}>
            {title}
            <br />
            {` ⭐️${rating}`}
          </Link>
        </h1>

        <div>
          {genres.map((genre, idx) => (
            <span key={idx}> {genre} </span>
          ))}
        </div>

        <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      </div>
    </div>
  );
}

export default Movie;

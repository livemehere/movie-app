import { useState, useEffect } from "react";
import Movie from "./Movie";

function Movies({ movies }) {
  return (
    <div className="container">
      {movies.map((item) => (
        <Movie
          key={item.id}
          id={item.id}
          title={item.title_long}
          rating={item.rating}
          genres={item.genres}
          summary={item.summary}
          coverURL={item.medium_cover_image}
          bgURL={item.background_image}
        />
      ))}
    </div>
  );
}

export default Movies;

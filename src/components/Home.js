import { useState, useEffect } from "react";
import Movies from "./Movies";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    const data = await fetch(
      "https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=like_count"
    );
    const json = await data.json();
    setMovies(json.data.movies);
    setLoading(true);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1 className="app-title">Movie APP</h1>
      {loading ? (
        <Movies movies={movies} />
      ) : (
        <h1 className="loading-title">Loading...</h1>
      )}
    </div>
  );
}

export default Home;

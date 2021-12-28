import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams().id;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const loadDetail = async () => {
    const data = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await data.json();
    setMovie(json.data.movie);
    setLoading(true);
  };
  useEffect(() => {
    loadDetail();
  }, []);

  return (
    <div
      className="bg"
      style={{ backgroundImage: `url(${movie.background_image})` }}
    >
      {loading ? (
        <div className="detail-container">
          <h1>
            {movie.title}
            {` ⭐️ ${movie.rating}`}
          </h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <div className="info">
            <div className="summary">{movie.description_full}</div>
            <div className="info__box">
              <div className="info__box__text">Runtime: {movie.runtime}m</div>
              <div className="info__box__text">👍 {movie.like_count}</div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="loading-title">loading...</h1>
      )}
    </div>
  );
}

export default Detail;

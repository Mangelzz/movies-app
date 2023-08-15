import { Button } from "antd";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { id, backdrop_path, title, overview } = movie;
  const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>{<Button type="primary">View More</Button>}</Link>
        </div>
      </div>
    </div>
  );
};
export default Movie;

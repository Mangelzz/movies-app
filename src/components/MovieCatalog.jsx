import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined, StarOutlined } from "@ant-design/icons";
import "../sass/MovieCatalog.scss";

const MovieCatalog = ({ movies }) => {
  const { results } = movies;

  return results.map((movie) => (
    <Col key={movie.id} xs={4} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
};
export default MovieCatalog;

function MovieCard({ movie }) {
  const { id, title, poster_path } = movie;
  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={posterPath} />}
        actions={[ <EyeOutlined/> ]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}

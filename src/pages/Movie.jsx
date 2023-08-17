import { Row, Col, Button} from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import { API_KEY, API_URL } from "../utils/constans";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import "../sass/Movie.scss";
import VideoModal from "../components/VideoModal";
import { useState } from "react";
import { PlayCircleOutlined } from '@ant-design/icons';

const Movie = () => {
  const { id } = useParams();
  const infoMovie = useFetch(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-EN`
  );

  if (infoMovie.loading || !infoMovie.result) {
    return <Loading />;
  }

  return <RenderMovie movie={infoMovie.result} />;
};
export default Movie;

function RenderMovie({ movie }) {
  const { id, title, backdrop_path, poster_path } = movie;
  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark" />
      <Row>
        <Col span={8} offset={3} className="movie__poster">
          <PosterMovie image={poster_path} />
        </Col>
        <Col span={10} className="movie__info">
          <MovieInfo movie={movie} />
        </Col>
      </Row>
    </div>
  );
}

function PosterMovie({ image }) {
  const posterPath = `https://image.tmdb.org/t/p/original${image}`;

  return (
    <div style={{backgroundImage: `url(${posterPath})`}} />
  )
}

function MovieInfo({ movie }) {
  const { id, title, release_date, overview, genres } = movie;
  const [isVisibleModal, setVisivleModal] = useState(false);
  const videoMovie = useFetch(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-EN`)

  const openModal = () => setVisivleModal(true);
  const closeModal = () => setVisivleModal(false);

  const findTrailer = (videos) => {
    for (const video of videos) {
      if (video.type === "Trailer" && video.site === "YouTube") {
        return video;
      }
    }
    return null;
  }

  const renderVideo = () => {
    if (videoMovie.result && videoMovie.result.results.length > 0) {
      const trailer = findTrailer(videoMovie.result.results);
      if (trailer) {
        return (
          <>
            <div className="play-trailer">
              <button onClick={openModal}><PlayCircleOutlined />Play Trailer</button>
            </div>
            <VideoModal
              videoKey={trailer.key}
              videoPlatform={trailer.site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        )
      }
    }
  }

  return (
    <>
      <div className="movie__info-header">
        <h1>
          {title}
          <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
        </h1>
        {renderVideo()}
        <div className="movie__info-header-genres">
          {genres.map((genre) => (
            <p key={genre.id} className="movie__info-header-genre">
              {genre.name}
            </p>
          ))}
        </div>
      </div>
      <div className="movie__info-content">
        <h3>Includes</h3>
        <p>{overview}</p>
      </div>
    </>
  );
}
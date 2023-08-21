import { Row, Col } from "antd";
import { API_URL, API_KEY } from "../utils/constans.js";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import Loading from "../components/Loading.jsx";
import MovieCatalog from "../components/MovieCatalog.jsx";
import PaginationMovie from "../components/PaginationMovie.jsx";

const PopularMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-EN&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = page => {
    setPage(page);
  }

  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>Popular Movies</h1>
      </Col>
      {movieList.results ? (
        <>
          <Col span={24} className="new-movie">
            <MovieCatalog movies={movieList} />
          </Col>
          <Col span={24}>
            <PaginationMovie 
              totalItems={movieList.total_results}
              currentPage={movieList.page} 
              onChangePage={onChangePage}
            />
          </Col>
        </>
      ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  )
}
export default PopularMovies
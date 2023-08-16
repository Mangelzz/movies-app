import useFetch from "../hooks/useFetch"
import { Row, Col } from "antd";
import SliderMovies from "../components/SliderMovies"
import { API_URL, API_KEY } from "../utils/constans"
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const Home = () => {

  const newMovies = useFetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-EN&page=1`);
  const popularMovies = useFetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-EN&page=1`);
  const topRatedMovies = useFetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-EN&page=1`);

  return (
    <>
      <SliderMovies movies={newMovies} />

      <Row>
        <Col span={12}>
          <MovieList title="Popular Movies" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <MovieList title="Top Rated" movies={topRatedMovies} />
        </Col>
      </Row>
      <Footer />
    </>
  )
}
export default Home
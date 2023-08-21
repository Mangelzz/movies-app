import "../sass/SliderMovies.scss"
import { Carousel } from "antd"
import Movie from "./Movie"
import Loading from "./Loading"

const SliderMovies = ({ movies }) => {

  // eslint-disable-next-line react/prop-types
  if(movies.loading || !movies.result){
    return <Loading />
  }

  const { results } = movies.result
  return (
    <Carousel autoplay className="slider-movies">
      {results.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Carousel>
  )
}
export default SliderMovies
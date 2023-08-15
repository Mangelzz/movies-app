import { List } from "antd"
import { Link } from "react-router-dom"
import Loading from "./Loading"
import "../sass/MovieList.scss"
import RenderMovie from "./RenderMovie"

const MovieList = ({ movies, title }) => {

  if (movies.loading || !movies.result) {
    return <Loading />
  }

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={movie => <RenderMovie movie={movie} />}
    />
  )
}
export default MovieList
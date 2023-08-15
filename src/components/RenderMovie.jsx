import { List, Avatar, Button } from "antd"
import { Link } from "react-router-dom"
import { RightOutlined } from '@ant-design/icons'

const RenderMovie = ({ movie }) => {

  const {id, title, poster_path} = movie

  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie${id}`}>
        <Button type="primary" icon={<RightOutlined />} />
      </Link>
    </List.Item>
  )
}
export default RenderMovie
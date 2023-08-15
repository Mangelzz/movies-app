import { Spin } from "antd"
import "../sass/Loading.scss"

const Loading = () => {
  return (
    <div className="loading">
      <Spin size="large" />
    </div>
  )
}
export default Loading
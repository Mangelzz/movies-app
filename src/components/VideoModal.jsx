import { Modal } from "antd"
import ReactPlayer from "react-player"
import "../sass/VideoModal.scss"
import { useEffect, useState } from "react"


const VideoModal = ({ videoKey, videoPlatform, isOpen, close }) => {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrl(`https://www.youtube.com/watch?v=${videoKey}`)
        break
      case "Vimeo":
        setUrl(`https://vimeo.com/${videoKey}`)
        break
      default:
        break
    }
  }, [videoKey, videoPlatform])
  

  return (
    <Modal
      className="video-modal"
      open={isOpen}
      centered
      onCancel={close}
      destroyOnClose={true}
      footer={false}
    >
      <ReactPlayer url={url} controls />
    </Modal>
  )
}
export default VideoModal
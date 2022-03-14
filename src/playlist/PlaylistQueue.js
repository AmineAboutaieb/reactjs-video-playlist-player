import React, { useEffect, useState } from 'react'

function PlaylistQueue({
  videos,
  currentVideo,
  changeCurrentVideo,
  defaultQueueItemPlaceholderThumbnail,
  vidRef
}) {
  const [queueList, setQueueList] = useState([])
  useEffect(() => {
    const list = Array.from(Array(videos.length).keys())
    setQueueList(list)
  }, [])
  const changeCurrentVideoHandler = (newItem) => {
    vidRef.current.load()
    changeCurrentVideo(newItem)
  }
  return (
    <div className='playlist-queue-styles'>
      {queueList.length > 0 &&
        queueList.map((item) => {
          return (
            <div
              key={item}
              className={
                currentVideo === item
                  ? 'playlist-queue-item-styles current-playing-video-styles'
                  : 'playlist-queue-item-styles'
              }
              onClick={() => changeCurrentVideoHandler(item)}
            >
              <img
                src={
                  videos[item].thumbnail
                    ? videos[item].thumbnail
                    : defaultQueueItemPlaceholderThumbnail
                }
                alt={videos[item].imgAlt}
                className='thumbnail-styles'
              />
            </div>
          )
        })}
    </div>
  )
}

export default PlaylistQueue

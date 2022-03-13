import React, { Fragment, useEffect } from 'react'
import PlaylistQueue from './PlaylistQueue'

const goToNextVideo = (params) => {
  if (params.playForward) {
    if (params.currentVideo + 1 >= params.videos.length) {
      params.setCurrentVideo(0)
    } else {
      params.setCurrentVideo(params.currentVideo + 1)
    }
  } else {
    if (params.currentVideo - 1 < 0) {
      params.setCurrentVideo(params.videos.length - 1)
    } else {
      params.setCurrentVideo(params.currentVideo - 1)
    }
  }
}

const goToPreviousVideo = (params) => {
  if (params.playForward) {
    if (params.currentVideo - 1 < 0) {
      params.setCurrentVideo(params.videos.length - 1)
    } else {
      params.setCurrentVideo(params.currentVideo - 1)
    }
  } else {
    if (params.currentVideo + 1 >= params.videos.length) {
      params.setCurrentVideo(0)
    } else {
      params.setCurrentVideo(params.currentVideo + 1)
    }
  }
}

function Playlist({ playlistParams }) {
  const {
    videos,
    autoPlay,
    showQueue,
    playForward,
    defaultQueueItemPlaceholderThumbnail,
    currentVideo,
    setCurrentVideo,
    vidRef
  } = playlistParams

  useEffect(() => {
    setCurrentVideo(playForward ? 0 : videos.length - 1)
  }, [])
  useEffect(() => {
    if (videos.length > 0) {
      vidRef.current.onended = () => {
        if (autoPlay) {
          if (playForward) {
            if (currentVideo + 1 >= videos.length) {
              setCurrentVideo(0)
            } else {
              setCurrentVideo(currentVideo + 1)
            }
          } else {
            if (currentVideo - 1 < 0) {
              setCurrentVideo(videos.length - 1)
            } else {
              setCurrentVideo(currentVideo - 1)
            }
          }
        }
      }
    }
  }, [currentVideo])
  return (
    <Fragment>
      {videos.length > 0 && (
        <div className='video-container-styles'>
          <video
            className='video-styles'
            autoPlay={autoPlay}
            muted={autoPlay ? true : false}
            ref={vidRef}
            src={videos[currentVideo].url}
            controls={true}
          ></video>
          {showQueue && (
            <PlaylistQueue
              vidRef={vidRef}
              videos={videos}
              currentVideo={currentVideo}
              changeCurrentVideo={setCurrentVideo}
              defaultQueueItemPlaceholderThumbnail={
                defaultQueueItemPlaceholderThumbnail
              }
            />
          )}
        </div>
      )}
    </Fragment>
  )
}

export { Playlist, goToNextVideo, goToPreviousVideo }

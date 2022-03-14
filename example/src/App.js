import React, { createRef, useState } from 'react'
import videoPlaceHolder from './images/video-placeholder.jpg'
import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo
} from 'reactjs-video-playlist-player'
import './css/globals.css'
import './css/playlist.css'
import Buttons from './buttons/Buttons'

function App() {
  const [list, setList] = useState([
    {
      thumbnail: 'https://via.placeholder.com/500/FFA500/FFFFFF',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      imgAlt: 'alt img 1'
    },
    {
      thumbnail: 'https://via.placeholder.com/500/FF0000/FFFFFF',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      imgAlt: 'alt img 2'
    },
    {
      thumbnail: ' ',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      imgAlt: 'alt img 3'
    },
    {
      thumbnail: 'https://via.placeholder.com/500/FFFF00/000000',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      imgAlt: 'alt img 4'
    },
    {
      thumbnail: '',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      imgAlt: 'alt img 5'
    }
  ])

  const [currentVideo, setCurrentVideo] = useState(0)
  const vidRef = createRef(null)

  const params = {
    videos: list,
    autoPlay: true,
    showQueue: true,
    playForward: true,
    defaultQueueItemPlaceholderThumbnail: videoPlaceHolder,
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef: vidRef
  }

  return (
    <div className='App'>
      <h3 id='title'>
        <span>React.js</span> video playlist player 🎥
      </h3>
      <div>
        <Playlist playlistParams={params} />
        <Buttons
          goToNextVideo={goToNextVideo}
          goToPreviousVideo={goToPreviousVideo}
          params={params}
        />
      </div>
    </div>
  )
}

export default App

# reactjs-video-playlist-player

> A React component that allows you to play and control a playlist of videos

[![NPM](https://img.shields.io/npm/v/reactjs-video-playlist-player.svg)](https://www.npmjs.com/package/reactjs-video-playlist-player) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Install

```bash
npm install --save reactjs-video-playlist-player
```

## Demo

This demo site was built using Github Pages [Demo site](https://amineaboutaieb.github.io/reactjs-video-playlist-player-example-site/)

![alt text](https://user-images.githubusercontent.com/101113844/157304043-d0765724-d257-4971-ab80-316de457081f.gif)

###### The demo videos are coming from here https://gist.github.com/jsturgis/3b19447b304616f18657

## Usage

```jsx
import React, { Component } from "react";

import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo
} from "reactjs-video-playlist-player";

function App() {
  const [videoList, setVideoList] = useState([
    {
      thumbnail: "https://via.placeholder.com/500/FFA500/FFFFFF",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      imgAlt: "Image 1 not found"
    },
    {
      thumbnail: "https://via.placeholder.com/500/FF0000/FFFFFF",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      imgAlt: "Image 2 not found"
    },
    {
      thumbnail: " ",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      imgAlt: "Image 3 not found"
    },
    {
      thumbnail: "https://via.placeholder.com/500/FFFF00/000000",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      imgAlt: "Image 4 not found"
    },
    {
      thumbnail: "",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      imgAlt: "Image 5 not found"
    }
  ]);

  const [currentVideo, setCurrentVideo] = useState(0);
  const vidRef = createRef(null);

  const params = {
    videos: list,
    autoPlay: true,
    showQueue: true,
    playForward: true,
    defaultQueueItemPlaceholderThumbnail: videoPlaceHolder,
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef: vidRef
  };

  return (
    <div className="App">
      <h3 id="title">
        <span>React.js</span> video playlist player 🎥
      </h3>
      <div>
        <Playlist playlistParams={params} />
      </div>
    </div>
  );
}

export default App;
```

## Params object

```
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
```

| parameter                            | description                                                                                                                                                |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| videos                               | list of videos [``` {thumbnail : "", url : ""} ```]                                                                                                        |
| autoplay                             | videos in the playlist play one after the other without user interaction (`true`) or (`false`)                                                             |
| showQueue                            | show videos queue (`true`) or (`false`)                                                                                                                    |
| playForward                          | play videos by incrementing (`true`) or (`false`)                                                                                                          |
| defaultQueueItemPlaceholderThumbnail | image to display if thumbnail is not provided in video object (`"/path/to/video"`)                                                                         |
| currentVideo                         | state variable that contains the currently selected video in the playlist (`const [`**currentVideo** `, setCurrentVideo] = useState(0)`)                   |
| setCurrentVideo                      | function that updates the state variable that contains the currently selected video playlist (`const [ currentVideo,`**setCurrentVideo**`] = useState(0)`) |
| vidRef                               | video ref (`const`**vidRef**`= createRef(null)`)                                                                                                           |

## Video object

```
{
  thumbnail: "",
  url: "",
  imgAlt: ""
},
```

| parameter | description                                                      |
| --------- | ---------------------------------------------------------------- |
| thumbnail | link ok thumbnail image of video in videos queue                 |
| url       | link of video                                                    |
| imgAlt    | Text to display if thumbnail link is not working (alt attribute) |

## Methods

**goToPreviousVideo**
Direction depends on the `playForward` parameter

```
goToPreviousVideo(params)
```

**goToNextVideo**
Direction depends on the `playForward` parameter

```
goToNextVideo(params)
```

## Styling

### Create a css file add the classes below and import it

- video-container-styles
- video-styles
- playlist-queue-styles
- playlist-queue-item-styles
- current-playing-video-styles (_Only the currently selected item in the list of videos has this class_)
- thumbnail-styles

**The image below describes the markup of the component and the relationship between the CSS classes**

![alt text](https://user-images.githubusercontent.com/101113844/157307666-2e11e671-8d6a-44f2-ad2e-1e01d6b131d9.png)

## CSS Example

```css
.video-container-styles {
  width: 60%;
  margin: 0 auto;
}

.playlist-queue-styles {
  box-shadow: 0px 0px 1px white;
  display: flex;
  align-items: center;
  overflow-x: auto;
  background-color: #212836;
}

.playlist-queue-item-styles {
  margin: 5px;
  cursor: pointer;
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  max-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid transparent;
}

.current-playing-video-styles {
  box-shadow: 0px 0px 2px white;
  transition: 0.2s;
}

.thumbnail-styles {
  width: 100%;
  height: 100%;
}

.video-styles {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

@media screen and (max-width: 549px) {
  .video-container-styles {
    width: 100%;
  }
}
```

## License

##### The code in this project is licensed under the MIT license

## Author

[AmineAboutaieb](https://github.com/AmineAboutaieb)

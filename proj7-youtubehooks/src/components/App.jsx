import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("react.js");
  }, []);

  const onTermSubmit = async term => {
    const r = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(r.data.items);
    setSelectedVideo(r.data.items[0]);
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={v => setSelectedVideo(v)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------

export default App;

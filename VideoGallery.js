import React from 'react';
import Video from './Video';
import videosData from '../VideosData';

const VideoGallery = () => {
  return (
    <div className="video-gallery">
      {videosData.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoGallery;
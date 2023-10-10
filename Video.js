// src/components/Video.js
import React from 'react';

const Video = ({ video }) => {
  return (
    <div className="video">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h2>{video.title}</h2>
        <div className="stats">
          <span>{video.views} views</span>
          <span>{video.likes} likes</span>
        </div>
        <div className="channel">
          <img src={video.channel.logo} alt={video.channel.name} />
          <span>{video.channel.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
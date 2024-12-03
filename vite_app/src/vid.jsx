import React from 'react';
import vid1 from './img/2.mp4';
import vid2 from './img/1.mp4';
import vid3 from './img/name.mp4';


const VideoSection = () => {
  return (
    <div>
      <div className="be-strong">
        <div className="line-rotate"></div>
      </div>

      <div className="three-1">
        <div className="round-1"></div>
        <div className="round-text">Be strong</div>
        <video
          className="video"
          src={vid1}
          muted
          loop
          autoPlay
        ></video>
      </div>

      <div className="three-1 three-2">
        <div className="round-1"></div>
        <div className="round-text">Be bold</div>
        <video
          className="video"
          src={vid2}
          muted
          loop
          autoPlay
        ></video>
      </div>

      <div className="three-1 three">
        <div className="round-1"></div>
        <div className="round-text">Be true</div>
        <video
          className="video"
          src={vid3}
          muted
          loop
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default VideoSection;

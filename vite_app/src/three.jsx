import React from 'react';

const ThreeSections = ({ text, videoSrc }) => {
  return (
    <div className="three-1">
      <div className="round-1"></div>
      <div className="round-text">{text}</div>
      <video className="video" src={videoSrc} muted loop></video>
    </div>
  );
};

export default ThreeSections;

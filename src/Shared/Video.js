import React from 'react';
import styled from 'styled-components';

const Video = (props) => {
  return (
    <LyVideo
      src={props.videoUrl}
      brightness={props.brightness}
      autoPlay
      loop
      muted
    />
  );
};

export default Video;

const LyVideo = styled.video`
  position: fixed;
  object-position: center;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -999;
  filter: brightness(${(props) => props.brightness});
`;

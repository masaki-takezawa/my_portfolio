import React from 'react';
import styled from 'styled-components';
import Video from './Video';

const PageContainer = (props) => {
  return (
    <LyPageContainer>
      {props.videoOn && (
        <Video videoUrl={props.videoUrl} brightness={props.brightness} />
      )}
      <BlContainer> {props.children} </BlContainer>;
    </LyPageContainer>
  );
};

export default PageContainer;

const LyPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative; // Videoの相対位置を指定
  overflow: hidden;
`;

// アイテムを中央表示
const BlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

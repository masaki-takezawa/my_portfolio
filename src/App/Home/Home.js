import React, { useState } from 'react';
import HomeCards from './HomeCards';
import Button from '../../Shared/Button';
import styled from 'styled-components';
import HomeTitle from './HomeTitle';
import Description from '../../Shared/Title/Description';
import PageContainer from '../../Shared/PageContainer';

const Home = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(!show);

  return (
    <PageContainer
      videoOn={true}
      videoUrl='/videos/MUVideo1.mp4'
      brightness='90%'
    >
      <HomeTitle>My Portfolio</HomeTitle>
      <Description>Please get started from below.</Description>
      <LyButtons>
        <Button btnOutline={show ? true : false} onClick={handleShow}>
          {show ? 'ClOSE TOPICS' : 'OPEN TOPICS'}
          <BlIcon className='far fa-play-circle' />
        </Button>
      </LyButtons>
      <LyHomeCards show={show}>
        <HomeCards />
      </LyHomeCards>
    </PageContainer>
  );
};

export default Home;

const LyButtons = styled.div`
  margin-top: 32px;
`;

const BlIcon = styled.i`
  margin-left: 4px;
`;

const LyHomeCards = styled.div`
  max-width: 1000px;
  width: 90%;
  margin-top: 50px;
  //ボタンクリックでカードを表示（トグル仕様）
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: all 1s ease;
`;

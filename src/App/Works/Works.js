import React from 'react';
import MainTitle from '../../Shared/Title/MainTitle';
import PageContainer from '../../Shared/PageContainer';
import WorksCards from './WorksCards';
import styled from 'styled-components';
import Description from '../../Shared/Title/Description';

const Works = () => {
  return (
    <PageContainer
      videoOn={true}
      videoUrl='/videos/MUVideo3.mp4'
      brightness='90%'
    >
      <MainTitle>My WORKS</MainTitle>
      <Description>
        <p>These are my products.</p>
      </Description>
      <LyWorksCards>
        <WorksCards />
      </LyWorksCards>
    </PageContainer>
  );
};

export default Works;

const LyWorksCards = styled.div`
  max-width: 1000px;
  width: 90%;
  margin-top: 50px;
`;

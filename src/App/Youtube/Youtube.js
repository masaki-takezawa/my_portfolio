import React from 'react';
import styled from 'styled-components';
import PageContainer from '../../Shared/PageContainer';
import MainTitle from '../../Shared/Title/MainTitle';
import YoutubeContents from './YoutubeContents';
import ArticleCard from '../../Shared/ArticleCard/ArticleCard';

const Youtube = () => {
  return (
    <PageContainer
      videoOn={true}
      videoUrl='/videos/MUVideo4.mp4'
      brightness='70%'
    >
      <MainTitle>My youtube contents</MainTitle>
      <ArticleCard
        src='./images/MU01.jpg'
        imgPositionL={false}
        textAlign='left'
      >
        <p>
          2020年4月よりYouTube活動を始め、これまでに約40本の動画を投稿してきました。
        </p>
        <p>
          編集には編集ソフト市場でシェアNo.1を誇る、Adobe Premiere
          Proを使用しています。
        </p>
      </ArticleCard>
      <ArticleCard src='./images/APP.png' imgPositionL={true} textAlign='left'>
        <p>
          マーケティングでYouTubeを活用される際には、動画制作の外注の工数管理にはもちろん、外注前のテストプレイにもお役に立てると思います。
        </p>
      </ArticleCard>
      <LyYoutubeContents>
        <YoutubeContents />
      </LyYoutubeContents>
    </PageContainer>
  );
};

export default Youtube;

const LyYoutubeContents = styled.div`
  max-width: 1000px;
  width: 100%;
`;

import React from 'react';
import styled from 'styled-components';
import { CssVariables } from '../../Common/CssVariables';
import ArticleCard from '../../Shared/ArticleCard/ArticleCard';
import PageContainer from '../../Shared/PageContainer';
import MainTitle from '../../Shared/Title/MainTitle';
import SubTitle from '../../Shared/Title/SubTitle';

const Portfolio = () => {
  return (
    <PageContainer
      videoOn={true}
      videoUrl='/videos/MUVideo2.mp4'
      brightness='70%'
    >
      <MainTitle>About This Portfolio</MainTitle>
      <SubTitle>概要</SubTitle>
      <ArticleCard src='images/MU01.jpg' alt='マータンうりんのプロフィール画像'>
        <p>
          <b>「私の過去の制作物や、今の実力を素直にお伝えしたい」</b>
        </p>
        <p>その一心で作成したサイト型のポートフォリオです。</p>
        <p>
          ストレスなくご閲覧頂きたかったので、React.jsを用いて、ローディングの少ないアプリケーションにしています。
        </p>
      </ArticleCard>
      <SubTitle>特徴</SubTitle>
      <ArticleCard
        imgPositionL={true}
        src='images/PortfolioItem01.jpg'
        alt='ファイル構造の画像'
      >
        <p>ユーザビリティーを考慮したローディングの少ないSPA。</p>
        <p>スマホ～PCまで対応したレスポンシブ設計。</p>
        <p>
          チーム制作時のルールに素早く適応するための、自己流にならない様意識したファイル管理。
          etc...
        </p>
        <BlLink href='https://github.com/masaki-takezawa/my_portfolio' target='_blank' rel='noreferrer noopener'>
          <b>▷ソースコードの確認はこちら</b>
        </BlLink>
      </ArticleCard>
      <SubTitle>使用技術一覧</SubTitle>
      <ArticleCard src='images/PortfolioItem02.jpg' alt='デスク周りの画像'>
        <p>
          言語、ライブラリ： JavaScript / React.js / HTML(JSX) /
          styled-components(CSS in JS) など
        </p>
        <p>動画編集： Adobe Premiere Pro / Adobe Audio</p>
        <p>その他、画像編集など：Adobe Photoshop</p>
      </ArticleCard>
    </PageContainer>
  );
};

export default Portfolio;

const BlLink = styled.a`
  text-decoration: none;
  color: ${CssVariables.accentBlueBright};
`;

import React from 'react';
import PageContainer from '../../Shared/PageContainer';
import MainTitle from '../../Shared/Title/MainTitle';
import ArticleCard from '../../Shared/ArticleCard/ArticleCard';
import SubTitle from '../../Shared/Title/SubTitle';

const About = () => {
  return (
    <PageContainer
      videoOn={true}
      videoUrl='/videos/MUVideo5.mp4'
      brightness='70%'
    >
      <MainTitle>About</MainTitle>
      <SubTitle>基本情報</SubTitle>
      <ArticleCard
        imgPositionL={false}
        src='./images/Masaki01.jpg'
        alt='顔写真'
        accentTitleOn={true}
        accentTitle='プロフィール'
      >
        <p>
          <b>竹澤 将輝（Takezawa Masaki）</b>
        </p>
        <p>1997年生まれ。</p>
        <p>コンビニまで車が当たり前の、栃木の田舎町で高校まで過ごす。</p>
        <p>
          2016年に埼玉大学に入学。同年さいたま市に上京。「徒歩3分でコンビニ」に感動して、今日も暮らしています。
        </p>
      </ArticleCard>
      <ArticleCard
        imgPositionL={true}
        src='./images/MU01.jpg'
        alt='マータンうりんのプロフィール画像'
        accentTitleOn={true}
        accentTitle='スキル'
      >
        <p>
          React.js、JavaScriptなどを用いたフロントエンド周りの開発はもちろん、Adobe製品を利用したYouTube動画の作成なども可能です。
        </p>
        <p>
          また動画外注時の工数管理といった、マネジメントにもお役に立てると思います。
        </p>
      </ArticleCard>
      <ArticleCard
        imgPositionL={false}
        src='images/PortfolioItem02.jpg'
        alt='デスク周りの画像'
        accentTitleOn={true}
        accentTitle='スキル一覧'
      >
        <p>
          言語、ライブラリ：JavaScript / React.js / HTML(JSX) /
          styled-components(CSS in JS) / Scss / jQuery など
        </p>
        <p>
          動画編集： Adobe Premiere Pro / Adobe Audio / Adobe Photoshop など
        </p>
      </ArticleCard>
      <SubTitle>来歴</SubTitle>
      <ArticleCard
        imgPositionL={true}
        src='images/Masaki06.jpg'
        alt='小学時代の写真'
        accentTitleOn={true}
        accentTitle='～ 中学時代'
      >
        <p>
          何気なく参加した和太鼓クラブにて、リズムを作る楽しさを知る。徐々に音楽そのモノに興味をもち、中学では吹奏楽部を志望する。
        </p>
        <p>
          定員オーバーにて入部を断念するも、兄から貰ったMDプレーヤーで、音楽漬けの日々を過ごす。
        </p>
      </ArticleCard>
      <ArticleCard
        imgPositionL={false}
        src='images/Masaki05.jpg'
        alt='高校、吹奏楽部の写真'
        accentTitleOn={true}
        accentTitle='高校時代'
      >
        <p>
          満を持して吹奏楽部に入部。和太鼓の経験を活かすため、打楽器を志望するも、経験者の同期に役を取られ、コンクール出場不可の危機に陥る。
        </p>
        <p>
          しかし、余っていた鍵盤楽器に目をつけ練習し、以降ピアノ系を進んで担当することで、3年間コンクール出場を果たす。
        </p>
      </ArticleCard>
      <ArticleCard
        imgPositionL={true}
        src='images/Masaki04.jpg'
        alt='pcに向かっている写真'
        accentTitleOn={true}
        accentTitle='大学時代 ～'
      >
        <p>
          大学3年時にパニック障害を発症。すぐ逃げられない場所が大の苦手に。テスト主体の数学科への在籍は難しく、休学を開始する。
        </p>
        <p>
          2年間の休学で、動画編集、プログラミングを学び、中途退学を決意。現在はこれらのスキルを生かし、場所にとらわれないワークスタイルの形成を図っています。
        </p>
      </ArticleCard>
      <SubTitle>趣味・特技</SubTitle>
      <ArticleCard
        imgPositionL={false}
        src='images/Masaki02.jpg'
        alt='キッチン'
        accentTitleOn={true}
        accentTitle='趣味'
      >
        <p>
          「何かを作ること」に対して興味を持ちやすく、音楽を演奏すること、聞くこと、料理を作って振る舞うこと、筋トレをして筋肉を増やすこと、DIYでオリジナルの家具を作ること、などが長く続いています。写真はDIYで自作したキッチンです。
        </p>
      </ArticleCard>
      <ArticleCard
        imgPositionL={true}
        src='images/Masaki03.jpg'
        alt='後ろ姿'
        accentTitleOn={true}
        accentTitle='特技'
      >
        <p>
          「何かを作りたい、始めたい！」となった時、「それを行うためにどうしたらいいのか」を考えることに苦痛を感じません。シャワーを浴びている時も、起きて布団を畳む時も、常に考え続けることができます。
        </p>
      </ArticleCard>
    </PageContainer>
  );
};

export default About;

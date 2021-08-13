import React from 'react';
import CardItemLink from '../../Shared/Cards/CardItemLink';
import Cards from '../../Shared/Cards/Cards';

const HomeCards = () => {
  return (
    <Cards>
      <CardItemLink
        src='images/Masaki07.jpg'
        alt='顔写真'
        text='About Me'
        labelOn={true}
        label='ABOUT'
        path='/about'
      />
      <CardItemLink
        src='images/MU02.jpg'
        alt='YouTubeのプロフィール画像'
        text='My Youtube Contents'
        labelOn={true}
        label='WORKS'
        path='/youtube'
      />
      <CardItemLink
        src='images/MyPortfolio.jpg'
        alt='ポートフォリオの全体画像'
        text='About This Portfolio'
        labelOn={true}
        label='WORKS'
        path='/portfolio'
      />
    </Cards>
  );
};

export default HomeCards;

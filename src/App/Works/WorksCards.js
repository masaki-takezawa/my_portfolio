import React from 'react';
import CardItemLink from '../../Shared/Cards/CardItemLink';
import Cards from '../../Shared/Cards/Cards';

const WorksCards = () => {
  return (
    <Cards>
      <CardItemLink
        src='images/MyPortfolio.jpg'
        alt='ポートフォリオの全体画像'
        text='This Portfolio'
        path='/portfolio'
      />
      <CardItemLink
        src='images/MU02.jpg'
        alt='Youtubeのプロフィール画像'
        text='Youtube Contents'
        path='/youtube'
      />
      <CardItemLink
        src='images/Mazza.jpg'
        alt='Beauty salon Homepage'
        text='Coming Soon...'
        brightness='50%'
      />
    </Cards>
  );
};

export default WorksCards;

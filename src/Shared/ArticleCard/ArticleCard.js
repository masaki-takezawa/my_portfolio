// propsでImgがR,Lの場合の２通りを選択できるようにする
import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import CardBody from './CardBody';
import CardMedia from './CardMedia';

const ArticleCard = (props) => {
  return (
    <LyAboutCont>
      <BlContainer imgPositionL={props.imgPositionL}>
        <CardMedia src={props.src} alt={props.alt} />
        <CardBody
          accentTitleOn={props.accentTitleOn}
          accentTitle={props.accentTitle}
        >
          {props.children}
        </CardBody>
      </BlContainer>
    </LyAboutCont>
  );
};

export default ArticleCard;

const LyAboutCont = styled.div`
  max-width: 960px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem;

  @media ${Breakpoints.tab} {
    width: 70%;
  }

  @media ${Breakpoints.sp} {
    width: 100%;
  }
`;

const BlContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.imgPositionL ? 'row' : 'row-reverse')};
  justify-content: center;

  @media ${Breakpoints.tab} {
    flex-direction: column;
    align-items: center;
  }
`;

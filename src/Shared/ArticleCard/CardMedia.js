import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';

const CardMedia = (props) => {
  return (
    <BlImgWrap>
      <BlImg src={props.src} alt={props.alt} />
    </BlImgWrap>
  );
};

export default CardMedia;

const BlImgWrap = styled.figure`
  position: relative;
  width: 25%;
  height: 0;
  padding-top: 25%;
  border-radius: 50%;
  overflow: hidden;
  margin-top: auto;

  @media ${Breakpoints.tab} {
    width: 50%;
    padding-top: 50%;
    margin: 1rem 0;
  }
`;

const BlImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

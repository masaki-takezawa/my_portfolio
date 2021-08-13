import React from 'react';
import styled, { css } from 'styled-components';
import { CssVariables } from '../../Common/CssVariables';

const CardMedia = (props) => {
  return (
    <BlImgWrap data-label={props.label} labelOn={props.labelOn}>
      <BlImg alt={props.alt} src={props.src} />
    </BlImgWrap>
  );
};

export default CardMedia;

const BlImgWrap = styled.figure`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 挿入画像の縦横比を16:9に変更 */
  overflow: hidden;

  //labelOnがtrue時のみlabelを添付
  ${(props) =>
    props.labelOn &&
    css` &::after {
    content: attr(data-label);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    font-size: 12px;
    font-weight: 700;
    color: ${CssVariables.mainColor};
    background-color: ${CssVariables.accentBlue};
    box-sizing: border-box;
  `}
`;

const BlImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

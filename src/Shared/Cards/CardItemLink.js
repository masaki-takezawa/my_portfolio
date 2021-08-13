import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardMedia from './CardMedia';
import CardBody from './CardBody';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';

const CardItemLink = (props) => {
  return (
    <BlListItem brightness={props.brightness}>
      <BlListLink to={props.path} target={props.target}>
        <CardMedia
          labelOn={props.labelOn}
          label={props.label}
          alt={props.alt}
          src={props.src}
          brightness={props.brightness}
        />
        <CardBody text={props.text} />
      </BlListLink>
    </BlListItem>
  );
};

export default CardItemLink;

const BlListItem = styled.li`
  border-radius: 10px;
  box-shadow: 0 3px 6px rgb(255, 255, 255, 0.16);
  background-color: ${CssVariables.mainColor};
  filter: brightness(${(props) => props.brightness});

  @media ${Breakpoints.tab} {
    width: 50%;
    margin-bottom: 2rem;
  }

  @media ${Breakpoints.sp} {
    width: 60%;
  }
`;

const BlListLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%; //grid表示時、コンテンツ量に依存せずhoverしたらカーソルを表示
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

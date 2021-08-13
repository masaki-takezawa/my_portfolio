import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';
import AccentTitle from '../../Shared/Title/AccentTitle';

const CardBody = (props) => {
  return (
    <LyContBody accentTitleOn={props.accentTitleOn}>
      {props.accentTitleOn && <AccentTitle>{props.accentTitle}</AccentTitle>}
      <BlContainer>{props.children}</BlContainer>
    </LyContBody>
  );
};

export default CardBody;

const LyContBody = styled.div`
  //accentTitleを表示する時のみ上下にpaddingを追加する
  padding: ${(props) => (props.accentTitleOn ? '0 2rem' : '1rem 2rem')};
  max-width: 75%;

  @media ${Breakpoints.tab} {
    padding: 1rem;
    max-width: initial;
  }
`;

const BlContainer = styled.div`
  color: ${CssVariables.mainColor};
  font-size: 1.2rem;
  text-align: left;
  line-height: 2;

  @media ${Breakpoints.tab} {
    text-align: center;
  }

  @media ${Breakpoints.sp} {
    font-size: 1rem;
  }
`;

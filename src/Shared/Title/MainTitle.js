import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';

const MainTitle = ({ children }) => {
  return <BlMainTitle>{children}</BlMainTitle>;
};

export default MainTitle;

const BlMainTitle = styled.h1`
  color: ${CssVariables.mainColor};
  font-size: 3rem;
  margin: 30px 0;

  @media ${Breakpoints.tab} {
    font-size: 2.5rem;
  }

  @media ${Breakpoints.sp} {
    font-size: 2rem;
  }
`;

import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';

const HomeTitle = ({ children }) => {
  return <BlHomeTitle>{children}</BlHomeTitle>;
};

export default HomeTitle;

const BlHomeTitle = styled.h1`
  color: ${CssVariables.mainColor};
  font-size: 100px;
  margin-top: 30px;

  @media ${Breakpoints.tab} {
    font-size: 70px;
    margin-top: 50px;
  }

  @media ${Breakpoints.sp} {
    font-size: 50px;
  }
`;

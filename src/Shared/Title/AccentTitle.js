import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';

const AccentTitle = ({ children }) => {
  return <BlAccentTitle>{children}</BlAccentTitle>;
};

export default AccentTitle;

const BlAccentTitle = styled.h3`
  text-align: center;
  color: ${CssVariables.accentOrange};
  font-size: 1.5rem;
  line-height: 2.2;

  @media ${Breakpoints.tab} {
    font-size: 1.2rem;
    text-align: center;
  }

  @media ${Breakpoints.sp} {
    font-size: 1rem;
  }
`;

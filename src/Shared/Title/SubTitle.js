import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';

const SubTitle = ({ children }) => {
  return <BlSubTitle>{children}</BlSubTitle>;
};

export default SubTitle;

const BlSubTitle = styled.h2`
  text-align: center;
  color: ${CssVariables.accentBlueBright};
  padding: 1rem 2rem;
  font-size: 2rem;

  @media ${Breakpoints.tab} {
    font-size: 1.5rem;
  }

  @media ${Breakpoints.sp} {
    font-size: 1.2rem;
  }
`;

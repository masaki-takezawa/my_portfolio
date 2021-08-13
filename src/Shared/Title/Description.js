import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';

const Description = ({ children }) => {
  return <BlDescription>{children}</BlDescription>;
};

export default Description;

const BlDescription = styled.div`
  color: ${CssVariables.mainColor};
  font-size: 1.5rem;
  line-height: 2;

  @media ${Breakpoints.tab} {
    font-size: 1.25rem;
  }

  @media ${Breakpoints.sp} {
    font-size: 1rem;
  }
`;

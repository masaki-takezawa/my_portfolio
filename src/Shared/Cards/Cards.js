import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';

const Cards = ({ children }) => {
  return <BlList>{children}</BlList>;
};

export default Cards;

const BlList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;

  @media ${Breakpoints.tab} {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

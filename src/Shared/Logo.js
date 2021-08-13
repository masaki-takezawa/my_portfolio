import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUserClick } from '../App/Header/HeaderContext';
import { Breakpoints } from '../Common/Breakpoints';
import { CssVariables } from '../Common/CssVariables';

const Logo = () => {
  const { setClick } = useUserClick();

  return (
    <BlLink to='/' onClick={() => setClick(false)}>
      <p>My Portfolio</p>
      <BlIcon className='fas fa-feather-alt' />
    </BlLink>
  );
};

export default Logo;

const BlLink = styled(Link)`
  display: block;
  color: ${CssVariables.mainColor};
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;

  @media ${Breakpoints.sp} {
    font-size: 1.5rem;
  }
`;

const BlIcon = styled.i`
  color: ${CssVariables.mainColor};
  margin-left: 10px;
  font-size: 2.1rem;
  transform: translateY(3%);

  @media ${Breakpoints.sp} {
    font-size: 1.6rem;
    transform: initial;
  }
`;

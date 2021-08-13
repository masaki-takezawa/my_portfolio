import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';
import { useUserClick } from './HeaderContext';

const NavItem = ({ path, children }) => {
  const { setClick } = useUserClick();

  return (
    <BlListItem>
      <BlListLink to={path} onClick={() => setClick(false)}>
        <p>{children}</p>
      </BlListLink>
    </BlListItem>
  );
};

export default NavItem;

const BlListItem = styled.li`
  height: 80px;
  box-sizing: border-box;
`;

const BlListLink = styled(Link)`
  color: ${CssVariables.mainColor};
  display: block;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }

  @media ${Breakpoints.tab} {
    &:hover {
      background-color: ${CssVariables.mainColor};
      color: ${CssVariables.baseColor};
      border-bottom: initial;
      transition: all 0.3s ease;
    }
    & p {
      width: 100%;
      text-align: center;
    }
  }
`;

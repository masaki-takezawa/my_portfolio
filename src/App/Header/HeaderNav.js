import React from 'react';
import styled from 'styled-components';
import NavIcon from './NavIcon';
import NavItem from './NavItem';
import { useUserClick } from './HeaderContext';
import { Breakpoints } from '../../Common/Breakpoints';

const HeaderNav = () => {
  const { click } = useUserClick();

  return (
    <BlNav>
      <NavIcon />
      <BlList click={click}>
        <NavItem path='/'>Home</NavItem>
        <NavItem path='/about'>About</NavItem>
        <NavItem path='/works'>Works</NavItem>
        <NavItem path='/contact'>Contact</NavItem>
      </BlList>
    </BlNav>
  );
};

export default HeaderNav;

const BlNav = styled.nav`
  font-size: 1.2rem;
`;

const BlList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;

  @media ${Breakpoints.tab} {
    //ハンバーガーメニューの設定
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100vh;
    position: absolute; //相対位置はbody
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: ${({ click }) => (click ? 0.9 : 0)};
    transition: all 0.5s ease;
    background: #242222;
    z-index: ${({ click }) => (click ? 1 : 0)};
`;

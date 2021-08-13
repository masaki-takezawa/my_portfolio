import React from 'react';
import styled from 'styled-components';
import { Breakpoints } from '../../Common/Breakpoints';
import { CssVariables } from '../../Common/CssVariables';
import { useUserClick } from './HeaderContext';

const NavIcon = () => {
  const { click, setClick } = useUserClick();

  return (
    <BlIconWrap onClick={() => setClick(!click)}>
      <BlIcon
        className={click ? 'fas fa-times' : 'fas fa-bars'}
        click={click}
      />
    </BlIconWrap>
  );
};

export default NavIcon;

const BlIconWrap = styled.div`
  display: none;

  @media ${Breakpoints.tab} {
    //tabletサイズになったらハンバーガーメニューアイコンを表示
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-250%, 50%);
    transition: all 0.5s ease;
    cursor: pointer;
    color: ${CssVariables.mainColor};
    font-size: 1.8rem;
  }

  @media ${Breakpoints.sp} {
    transform: translate(-100%, 48%);
  }
`;

const BlIcon = styled.i`
  //ハンバーガーメニューアイコンの位置＆サイズ調整
  font-size: ${({ click }) => (click ? '2rem' : 'inherit')};
  transform: ${({ click }) => (click ? 'translate(-20%, 5%)' : 'none')};
`;

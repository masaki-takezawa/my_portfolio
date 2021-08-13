import React from 'react';
import styled from 'styled-components';
import Logo from '../../Shared/Logo';
import { ClickProvider } from './HeaderContext';
import HeaderNav from './HeaderNav.js';
import { Breakpoints } from '../../Common/Breakpoints';

const Header = () => {
  return (
    <LyHeader>
      <LyInner>
        <BlContainer>
          {/* HeaderContext */}
          <ClickProvider>
            <Logo />
            <HeaderNav />
          </ClickProvider>
        </BlContainer>
      </LyInner>
    </LyHeader>
  );
};

export default Header;

const LyHeader = styled.header`
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const LyInner = styled.div`
  height: 100%;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;

const BlContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${Breakpoints.tab} {
    justify-content: center;
  }
`;

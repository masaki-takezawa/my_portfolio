import React from 'react';
import Copyright from './Copyright';
import styled from 'styled-components';
import { CssVariables } from '../../Common/CssVariables';

const Footer = () => {
  return (
    <LyFooter>
      <LyInner>
        <BlWrapper>
          <BlContainer>
            <Copyright />
            <BlIcons>
              <a
                href='https://www.youtube.com/channel/UC1vabw6f4d5X1UINyb1mR_Q'
                target='_blank'
                rel='noreferrer noopener'
              >
                <BlYoutubeIcon className='fab fa-youtube' />
              </a>
            </BlIcons>
          </BlContainer>
        </BlWrapper>
      </LyInner>
    </LyFooter>
  );
};

export default Footer;

const LyFooter = styled.footer`
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  position: sticky;
  bottom: 0;
  z-index: 10;
`;

const LyInner = styled.div`
  height: 100%;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
`;

//Footerアイテムを中央表示
const BlWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BlIcons = styled.div`
  display: flex;
  align-items: center;
`;

const BlYoutubeIcon = styled.i`
  color: ${CssVariables.mainColor};
  font-size: 24px;
  text-decoration: none;
`;

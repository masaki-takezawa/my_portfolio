import React from 'react';
import styled, { css } from 'styled-components';
import { CssVariables } from '../Common/CssVariables';

const Button = ({ children, onClick, btnOutline }) => {
  return (
    <BlButton onClick={onClick} btnOutline={btnOutline}>
      {children}
    </BlButton>
  );
};

export default Button;

const BlButton = styled.button`
  padding: 8px 20px;
  border-radius: 2px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.btnOutline
      ? css`
          background-color: transparent;
          color: ${CssVariables.mainColor};
          border: 1px solid ${CssVariables.mainColor};
        `
      : css`
          background-color: ${CssVariables.mainColor};
          color: ${CssVariables.baseColor};
          border: 1px solid ${CssVariables.mainColor};

          &:hover {
            filter: brightness(70%);
          }
        `}
`;

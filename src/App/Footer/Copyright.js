import React from 'react';
import styled from 'styled-components';
import { CssVariables } from '../../Common/CssVariables';

const Copyright = () => {
  return <BlCopyright>My Portfolio © 2021 Masaki Takezawa</BlCopyright>;
};

export default Copyright;

const BlCopyright = styled.small`
  color: ${CssVariables.mainColor};
  display: block;
  text-align: center;
`;

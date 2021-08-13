import React from 'react';
import styled from 'styled-components';
import { CssVariables } from '../../Common/CssVariables';

const CardBody = (props) => {
  return (
    <BlContainer>
      <BlText>{props.text}</BlText>
    </BlContainer>
  );
};

export default CardBody;

const BlContainer = styled.div`
  padding: 20px 30px 30px;
`;

const BlText = styled.p`
  color: ${CssVariables.baseColor};
  font-size: 18px;
  line-height: 1.5;
`;

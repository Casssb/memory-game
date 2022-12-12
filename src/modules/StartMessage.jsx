import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: #bb86fc;
  font-size: 1.4rem;
`;

const StyledDiv = styled.div`
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  & p {
    line-height: 1.8;
  }
`;

const StartMessage = (props) => {
  const { status, handleButtonClick } = props;
  return (
    <StyledDiv>
      <p>
        Click each card <StyledSpan>once</StyledSpan> per level to score a
        point. Click the same card <StyledSpan>twice</StyledSpan> and you'll
        restart from level <StyledSpan> 1</StyledSpan>. There are
        <StyledSpan> 5</StyledSpan> levels, <StyledSpan> 48</StyledSpan> total
        unique cards!
      </p>
      <Button status={status} handleButtonClick={handleButtonClick}>
        Start Game
      </Button>
    </StyledDiv>
  );
};

export default StartMessage;

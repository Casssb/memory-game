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

const WinnerMessage = (props) => {
  const { status, handleButtonClick } = props;
  return (
    <StyledDiv>
      <p>
        Congratulations! You've finished all <StyledSpan>5</StyledSpan> levels
        and achieved the <StyledSpan>highest</StyledSpan> possible score!
      </p>
      <Button status={status} handleButtonClick={handleButtonClick}>
        Play Again?
      </Button>
    </StyledDiv>
  );
};

export default WinnerMessage;

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  color: #ad71f7;
  background-color: inherit;
  border: 4px solid #bb86fc;

  &:hover {
    cursor: pointer;
    background-color: #181616;
    transform: scale(1.02);
  }
`;

const Button = (props) => {
  const { children, status, handleButtonClick } = props;
  return (
    <StyledButton onClick={(e) => handleButtonClick(e, status)}>
      {children}
    </StyledButton>
  );
};

export default Button;

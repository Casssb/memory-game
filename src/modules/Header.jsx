import React from 'react';
import styled from 'styled-components';
import Title from './header/Title';
import Scoreboard from './header/Scoreboard';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: min-content;
  padding: 1rem;
  background-color: #2C2C2C;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const Header = (props) => {
  const { score, level } = props;
  return (
    <StyledHeader>
      <Title />
      <Scoreboard score={score} level={level} />
    </StyledHeader>
  );
};

export default Header;

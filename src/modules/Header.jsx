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
  background-color: grey;
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

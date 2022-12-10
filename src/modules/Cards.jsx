import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledMain = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cards = (props) => {
  const { cards } = props;

  return <StyledMain>Cards</StyledMain>;
};

export default Cards;

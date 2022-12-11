import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledMain = styled.main`
  width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 0.6rem;
  padding: 4rem;
`;

const Cards = (props) => {
  const { cards, handleClick } = props;

  return (
    <StyledMain>
      {cards.map((card) => (
        <Card
          cardImage={card.image}
          cardName={card.name}
          handleClick={handleClick}
        />
      ))}
    </StyledMain>
  );
};

export default Cards;

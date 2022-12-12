import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 4rem;

  @media screen and (max-width: 640px) {
    padding: 2rem;
  }
`;

const Cards = (props) => {
  const { cards, handleClick, cardsLoaded } = props;

  return (
    <StyledMain>
      {!cardsLoaded && <h1>Loading...</h1>}

      {cardsLoaded &&
        cards.map((card) => (
          <Card
            cardImage={card.image}
            cardName={card.name}
            handleClick={handleClick}
            key={card.name}
          />
        ))}
    </StyledMain>
  );
};

export default Cards;
